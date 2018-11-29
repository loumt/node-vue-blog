

const List = []
const count = 5
const Mock = require('mockjs')

const baseContent = '<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    uid: '@guid',
    sid: '@id',

    helper: '@capitalize("heLLo")',

    helper2: '@upper("hello")',
    helper3: '@lower("heLLo")',

    helper4: '@pick(["1","4","a","o","L"])',
    helper5: '@shuffle(["1","4","a","o","L"])',

    zip: '@zip()',
    country: '@county()',
    country2: '@county(true)',
    city: '@city()',
    city2: '@city(true)',
    province: '@province()',
    region: '@region()',
    ip: '@ip()',
    email: '@email()',
    tld: '@tld()',
    protocol: '@protocol()',
    domain: '@domain()',
    url: '@url()',

    cname: '@cname()',
    cfirst: '@cfirst()',
    name: '@name()',
    name2: '@name(true)',
    first: '@first()',
    last: '@last()',

    // ctitle: '@ctitle()',
    ctitle2: '@ctitle(1,5)',
    // cword:'@cword("零一二三四五六七八九十")',
    cword2:'@cword("零一二三四五六七八九十",3)',
    csentence: '@csentence()',
    // cparagraph: '@cparagraph()',
    cparagraph2: '@cparagraph(3)',
    // title:'@title()',
    title2:'@title(3)',
    word: '@word()',
    sentence:'@sentence()',
    paragraph:'@paragraph()',

    hsl:'@hsl()',
    rgba:'@rgba()',
    rgb:'@rgb()',
    hex:'@hex()',
    color:'@color()',

    "like|1-20": "★",
    "like2|4": "Hello~",

    "number|+1": 202,
    "number2|1-100": 100,
    "number3|1-100.1-5": 1,
    "number4|1000.4": 1,

    "boolean|1": true,
    "boolean2|1-2": true,

    "object|2": {
      "310000": "上海市",
      "320000": "江苏省",
      "330000": "浙江省",
      "340000": "安徽省"
    },
    "object2|2-4": {
      "310000": "上海市",
      "320000": "江苏省",
      "330000": "浙江省",
      "340000": "安徽省"
    },

    "array|1": [
      "AMD",
      "CMD",
      "UMD"
    ],
    "array1|+1": [
      "AMD",
      "CMD",
      "UMD"
    ],
    "array3|1-10": [
      {
        "name|+1": [
          "Hello",
          "Mock.js",
          "!"
        ]
      }
    ],
    "array4|1-10": [
      "Mock.js"
    ],

    'name': function() {
      return this.array
    },
    'regexp': /[a-z][A-Z][0-9]/,
    'regexp2|3': /\d{5,10}\-/,

    "foo": "Hello",
    "nested": {
      "a": {
        "b": {
          "c": "Mock.js"
        }
      }
    },
    "absolutePath": "@/foo @/nested/a/b/c",
    "relativePath": {
      "a": {
        "b": {
          "c": "@../../../foo @../../../nested/a/b/c"
        }
      }
    },


    timestamp: + Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],

    display_time: '@datetime',
    time: '@time()',
    date: '@date()',
    // range: '@range(1,10)',
    'range2': '@range(1,10,2)',
    'string': '@string("symbol",3)',

    character:'@character()',
    float:'@float()',
    natural:'@natural()',

    pageviews: '@integer(300, 5000)',
    platforms: ['a-platform']
  }))
}

console.log(List)



// Mock.Random.dataImage('200*100')
// Mock.Random.dataImage('200*100', 'Hello Mock.js!')
// Mock.Random.image('200*100')
// Mock.Random.image('200*100','#4A7BF7', 'Hello')
// Mock.mock('@datetime("yyyy-MM-dd A HH:mm:ss")')
// Mock.mock('@datetime("yy-MM-dd a HH:mm:ss")')
// Mock.mock('@datetime("y-MM-dd HH:mm:ss")')
// Mock.mock('@datetime("y-M-d H:m:s")')
