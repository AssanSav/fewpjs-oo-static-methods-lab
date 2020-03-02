class Formatter {
  static capitalize(string) {
    return string.charAt().toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g,'')
  }

  static titleize(string) {
    let splitString = string.split(" ")
    let result = []
    let excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < splitString.length; i++) {
      if (excludeWords.includes(splitString[i])) {
        result.push(splitString[i])
      }
      else {
        result.push(splitString[i].charAt().toUpperCase() + splitString[i].slice(1))
      }
    }
    return result.join(" ").charAt(0).toLocaleUpperCase() + result.join(" ").slice(1)
  }
}