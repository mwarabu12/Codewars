const genfib = () => {
  let first = 0 
  let second = 1
  return function fib() {
    let current = first
    let next = first + second
    first = second
    second = next
    return current
  }
}