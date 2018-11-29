function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// console.log(new Date())
// console.log(parseTime(new Date().getTime(),'{y}-{m}-{d} {h}'))


function formatTime(time, option) {
  let d = null
  if (typeof time === 'object') {
    d = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    d = new Date(time)
  }
  const now = Date.now()
  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  return parseTime(time, option)
  // if (option) {
  //   return parseTime(time, option)
  // } else {
  //   return (
  //     d.getMonth() +
  //     1 +
  //     '月' +
  //     d.getDate() +
  //     '日' +
  //     d.getHours() +
  //     '时' +
  //     d.getMinutes() +
  //     '分'
  //   )
  // }
}

function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

function toggleClass(element, className, addClass) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += ' ' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length) + (addClass ? addClass : '')
  }
  element.className = classString
}


let  element = {className:'name ng-test'}
toggleClass(element,'active')
console.dir(element)


console.log(param({name:'111',age:17}))


function test1(time){
  time = time * 1000
  return time
}

let time = new Date().getTime()
console.log(formatTime(time))

console.log(test1(12))

console.log(new Date() - new Date(1540262481813))

console.log(formatTime(new Date().getTime() -  24 * 60 * 24 * 60 * 1000))

console.dir(getQueryObject('http://192.168.3.202:4000/ready?state=1'))


function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
 function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
   console.log('between:'+ between)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

console.log(Date.now() /1000)
console.log(timeAgo(Date.now()/1000-5* 24* 60 *60))
console.log(typeof Number('123456'))
