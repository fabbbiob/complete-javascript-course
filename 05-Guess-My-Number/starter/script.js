'use strict';
const $ = (itm) => document.querySelector(itm);
let item = document.querySelector(".message").textContent;
console.log(item);
let item2 = $("#mahh").textContent = "Let's guess the nbr";
console.log(`v short3 ${item2}`);
