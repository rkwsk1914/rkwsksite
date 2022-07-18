# デプロイ前の準備
## Procfileの用意
```
touch Procfile
```
▼ Procfile に追記。
このようにProcfile内に記述する事でHeroku起動時にapacheサーバーが起動するようです。
```
web: vendor/bin/heroku-php-apache2 public/
```
## .gitignore の用意
```
touch .gitignore
```
▼ .gitignore に追記。
```
.env
```

# Laravel + Heorokuへデプロイ
## Herokuにアプリ登録
ログイン
```
heroku login
```
アプリ作成
```
heroku apps:create 作成するapp名
```
## ビルとパッケージ設定
```
heroku buildpacks:add heroku/php -a 作成したapp名
```
```
heroku buildpacks:add heroku/nodejs -a 作成したapp名
```
## git連携
```
git remote add heroku 作成したappのHeroku GitのURL
```
```
git push heroku main
```


## DATABASEの設定

### MySQLの使用
herokuでMySQL5.7以降を使う場合はJawsDBを利用します。
[参考ページはこちら](https://qiita.com/Suguhito65/items/3d476994ae852f0fdae4#db%E3%81%AFmysql%E3%82%92%E5%88%A9%E7%94%A8)
```
heroku addons:create jawsdb:kitefin
```

### 環境変数の設定
HerokuのダッシュボードページからJawsDB MySQLの環境変数を確認
[参考ページはこちら](https://qiita.com/Suguhito65/items/3d476994ae852f0fdae4#buildpacks%E3%81%AE%E8%A8%AD%E5%AE%9A)
```
heroku config:get JAWSDB_URL
heroku config:set DB_CONNECTION=mysql
heroku config:set DB_USERNAME=
heroku config:set DB_PASSWORD=
heroku config:set DB_HOST=
heroku config:set DB_DATABASE=
heroku config:set DB_PORT=
heroku config:set PROJECT_PATH=/
```

### APP_KEYの取得・設定
```
heroku run php artisan key:generate --show
```
```
heroku config:set APP_KEY=
```

### マイグレーション
```
heroku run php artisan migrate
```

# 注意
## 403 500エラーのときのデバッグ表示の設定
config/app.php の下記の設定を「true」に変更するとデバッグモードがONになる。
```
'debug' => (bool) env('APP_DEBUG', false)
```

## アセットの対応および注意
Laravelのヘルパ関数 asset() の対応。
ローカル開発では問題ないが、公開前に対応が必要
https: プロトコルで公開が、読み込みパスが http: のため下記のエラーが発生してしまう。
Mixed Content: ~ This request has been blocked; the content must be served over HTTPS.

### /app/Providers/AppServiceProvider.php にグローバル変数を設定
viewコンポーネント共有するグローバル変数「is_production」を定義。
ヘルパ関数 asset() の第2引数に設定する。
```
    public function boot()
    {
        $is_production = env('APP_ENV') === 'production' ? true : false;
        view()->share('is_production', $is_production);
    }
```
▼ 例　public ディレクトリ配下に作成したのアセットファイルを参照
環境変数「APP_ENV」が 'production' なら https: プロトコルで参照。
違う場合は http: プロトコルで参照。
```
asset('assets/js/s/arrow-animation.js', $is_production)
```
###Heorkuの環境変数を設定
```
heroku config:set APP_ENV=production
```