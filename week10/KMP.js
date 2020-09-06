
function KMP (source, pattern) {
  // 1. 计算table
  const table = new Array(pattern.length).fill(0)

  {
    let i = 1
    let j = 0
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        i++
        j++
        table[i] = j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
    }
  }
  console.log('table', table)

  // 2. 模式匹配
  {
    let i = 0; let j = 0
    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++i
        ++j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
      if (j === pattern.length) return true
    }
    return false
  }
}

// KMP('', 'abcdabce')
// KMP('', 'aabaaac')
// console.log(KMP('Hello', 'll'))// true
// console.log(KMP('abcdabcdabcex', 'abcdabce'))// true
console.log(KMP('abcdabcdabceaabaaac', 'aabaaac'))// true
// console.log(KMP('abc', 'abc'))// true
