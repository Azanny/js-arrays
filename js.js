//random array
let arrLength=Math.round(Math.random()*20+30),
    arr=[];
for(let i=0;i<arrLength;i++){
    arr.push(Math.round(200*Math.random()-100))
}
console.log(arr,arr.length);

//every element+2
arr=arr.map((element)=>element+2);
console.log(arr);

//element in the middle
// let middleIndex=arr.length%2?Math.ceil(arr.length/2):arr.length/2,
let middleIndex=Math.ceil(arr.length/2),
    middleEl=arr[middleIndex]
console.log('Middle (' +middleIndex+ ') element is ' + middleEl)

//middle element -> beginning
arr.splice(0,1,middleEl);
console.log(arr);

//everything above zero?
let allPositive=arr.every((element)=>element>0)
console.log(allPositive)

//is there at least one zero?
let anyZeroes=arr.some((element)=>element===0)
console.log(anyZeroes)

//inverted string
let forwardString='Lorem ipsum dolor sit amet',
    backwardString=forwardString.split('').reverse().join('');
console.log(backwardString)

//text editing
let sourceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    arrayTemp=sourceText.split('. '),
    newText;
arrayTemp[arrayTemp.length-1]=arrayTemp[arrayTemp.length-1].toUpperCase();
newText=arrayTemp.join('.\n')
console.log(newText)

//two arrays one map
let firstArr=[],
    secondArr=[],
    thirdArr=[];
for(let i=0;i<10;i++){
    firstArr.push(Math.round(Math.random()*10))
}
for(let i=0;i<20;i++){
    secondArr.push(Math.round(Math.random()*10-10))
}
firstArr.forEach((element)=>thirdArr.push(element));
secondArr.forEach((element)=>thirdArr.push(element));
console.log(firstArr,secondArr,thirdArr);

thirdArr=thirdArr.map((element)=>element/5);
console.log(thirdArr);

thirdArr.sort((prev,next)=>next-prev);
console.log(thirdArr);

thirdArr=thirdArr.filter((element)=>Number.isInteger(element));
console.log(thirdArr);

thirdArr.length=0;


//randomized array
let orderedArr=[1,2,3,4,5,6,7,8,9]
    randomArr=orderedArr.sort(()=>Math.round(Math.random()*2-1));
console.log(randomArr)
