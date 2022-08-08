export const awatiFunction = (func, delay) => new Promise((resolve, reject) => {
  setTimeout(() => {
    func()
    resolve()
  }, delay)
})