"use strict";

function firstTitle(str) {
  var word = str.toLowerCase().split(' ');

  for (var i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }

  return word.join(' ');
}

function reverseit(str) {
  return str.split('').reverse().join(' ');
}

function anotherReverse(str) {
  var reverse = '';

  for (var i = str.length; i >= 0; i--) {
    console.log(str[i]);
  }
}

var sent = "THIS is it";
console.log(firstTitle(sent));
console.log(reverseit("Hello"));
console.log(anotherReverse("Hello friend"));