export const awatiFunction = (func, delay, ...theArgs) => new Promise((resolve, reject) => {
  setTimeout(() => {
    func(...theArgs)
    resolve()
  }, delay)
})
