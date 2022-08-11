/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNum=document.getElementById("input")
let lengthRes=document.getElementById("len-res")
let volumeRes=document.getElementById("vol-res")
let massRes=document.getElementById("mas-res")

const meterToFeet =  3.281
const feettometer=0.3048
const literToGallon =  0.264
const gallonToLiter=3.78541
const kiloToPound =  2.204
const poundToKilo=0.453592

let convertBtn=document.getElementById("convert-btn")

convertBtn.addEventListener("click",function(){
   let num=inputNum.value;
   lengthRes.textContent=`${num} meter = ${(num * meterToFeet).toFixed(3)} feet | ${num} feet = ${(num * feettometer).toFixed(3)} meter`
 volumeRes.textContent=`${num} liter = ${(num * literToGallon).toFixed(3)} gallons | ${num} gallons = ${(num * gallonToLiter).toFixed(3)} liter`
   massRes.textContent=`${num} kilo = ${(num * kiloToPound).toFixed(3)} pound | ${num} pound = ${(num * poundToKilo).toFixed(3)} kilo`
})
