/*// Array.prototype.map 整理数据

let arr = [
  {key: 1, val: 10},
  {key: 2, val: 20},
  {key: 3, val: 30}
];

let con = arr.map((item) => {
  let tempObj = {};

  tempObj[item.key] = item.val;
  return tempObj;
});

// 字符串反转

function reverseStr(str) {
  return str.split('').reverse().join('');
}

function anoReverseStr(str) {
  return Array.prototype.map.call(str, item => item).reverse().join('')
}

let str = 'hello vuejs';

// console.log(anoReverseStr(str));

// apply

let o = {
  name: 'Nicholas',
  getName() {
    return function () {
      console.log(arguments[0]);
    }
  }
};

function getName() {
  return o.getName.apply(o, arguments[0]);
}

// console.log(getName()(1));

// splice 实现

let arrA = [1, 2, 3, 4, 5];

function isArray(arrA) {
  return Object.prototype.toString.call(arrA).substr(8, 5).toLowerCase() === 'array'
}

function implementSplice(arr, startIndex, num) {
  if (isArray(arr)) {
    let arrStore = [];
    let len = arr.length;
    let onOff = true;

    for (let i = 0; i < len; i++) {
      if (i === startIndex) {
        onOff = false;
        len--;
        arrStore[i] = arr[i + 1];
        continue
      }

      if (onOff) {
        arrStore[i] = arr[i];
      } else {
        arrStore[i] = arr[i + 1];
      }
    }
    return arrStore;
  }
}*/

// console.log(implementSplice(arrA, 1));

// width and height in javascript

/*
function b() {
  console.log(val);
}

function a() {
  b();
  let val = 2
}

let val = 1;

a();
*/

/*let str = 'hello';

str[0] = '1';
console.log(str);*/

/*let arr = [1, 2, 3];

arr[0] = 'hello';
console.log(arr);*/

// Array.prototype.map

/*
let arr = [1, 2, 3, 4, 5];

let store = arr.map((item, index) => {
  return {
    id: index,
    no: item
  }
})

console.log(store)
*/

/*let arr = [1, 2, 3];

let o = arr.reduce((prev, cur) => {
  prev.push(cur + 1);
  return prev;
}, []);*/

// console.log(o);


/*let str = 'HelloVuejsandNodejs';

let o = str.split('').reduce((prev, cur) => {
  prev[cur] ? prev[cur]++ : prev[cur] = 1
  return prev;
}, {});

console.log(o);*/

// reverse

/*Array.prototype.reverse = function () {
  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    let current_i = this[i];
    let current_j = this[j];

    this[i] = current_j;
    this[j] = current_i;
  }
}

let arr = [1, 2, 3, 4, 5];

arr.reverse();
console.log(arr);*/

/*let arr = [1, 2, 3, 4, 5]

console.log(arr.filter(n => n > 2));*/

/*let arr = [1, , , 4, 5, 6, , , , , , 9];

arr.find((value, index) => {
  console.log('Visited index '+index+' with value '+value);
});*/

/*let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.map(item => item < 3 ? 3 : item));

console.log(arr.map(item => Math.max(...[item, 3])));*/

/*console.log([1, 5, 8, 16, 22, 38, 25, 19].map(Math.max(...[item, 15])));*/

/*console.log([1, 27, 5, 94, 12, 8, 35].filter(num => num > 5));*/

// shuffle

/*function isArray(array) {
  if (Array.isArray) {
    return Array.isArray(array)
  }

  return Object.prototype.toString.call(array).slice(-6) === 'Array'
}

/!**
 * @function shuffle elements of the specified array
 * @param array  instance of Array
 * @return Array shuffled array
 *!/

function shuffle(a) {
  if (!isArray(a)) {
    throw new Error('a is not a Array')
  }

  if (a.length === 1) {
    return a
  }

  let len = a.length;
  for (let i = 1; i < len; i++) {
    let randomIndex = Math.random() * (i + 1) | 0;
    let tempStore = a[i];

    a[i] = a[randomIndex];
    a[randomIndex] = tempStore;
  }

  return a
}

console.log([1, 2, 3].sort(() => Math.random() - .5));*/

/*function getRandomInt(min, max) {
  return Math.random() * max
}*/

/*  min <= Math.random()*(max-min)+min < max   */


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function isArray(arr) {
  if (Array.isArray) {
    return Array.isArray(arr)
  }

  return Object.prototype.toString.call(arr).substr(-6) === 'Array'
}

function shuffle(arr) {
  if (!isArray(arr)) {
    throw new TypeError('param is not an instance of Array')
  }

  let _arr = arr.slice()
  let _len = _arr.length

  if (_len <= 1) {
    return _arr
  }

  for (let i = 1; i < _len; i++) {
    let r = getRandomInt(0, i)
    let t = _arr[i]

    _arr[i] = _arr[r]
    _arr[r] = t
  }

  return _arr
}

console.log(shuffle('string'));


















