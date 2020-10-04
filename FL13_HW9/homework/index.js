 /*1.*/
function convert(array){  
	let a=[];    
	for (let i=0;i<array.length;i++) {        
		a.push(typeof array[i] === 'string' ? Number(array[i]) : String(array[i]))   
	}    
	console.log(a);
}

/*2*/

function executeForEach(arr, func) {
    for(let value of arr){
        func(value);
    }
}
let arr1 = [1,2,3];
executeForEach(arr1,function(el){
 console.log(el*2)
});
/*3*/
function func1(el){
    return el + 3;
}
function mapArray(arr, func){
    let newArray = [];
    executeForEach(arr,function(value){
    newArray.push(func(Number(value)))
    });
    return newArray;
}
arr1 = [2,'5',8];
let arr2 = mapArray(arr1,func1);
alert(arr2);

/*4*/

function func2(number){
    return number % 2 === 0;
}
function filteredArray(arr, func){
    let newArray = [];
    executeForEach(arr,function(value){
    if(func(value)){ 
    newArray.push(value)
    }
});
    return newArray;
}
arr1 = [2, 5, 8];
arr2 = filteredArray(arr1, func2);
alert(arr2);

/*5*/
function containsValue(arr, param){
    let answer = false;
    executeForEach(arr,function(value) {
        if(value === param){
            answer = true;
        }
    });
    return answer;
}
console.log(containsValue([2,5,8], 2));
console.log(containsValue([12,4,6], 5));

 /*6.*/

 function flipOver(str) {   
  let newString = '';    
  for (let i = str.length - 1; i >= 0; i--) {    
      newString += str[i];    
  }   
   return console.log(newString)
}
alert(flipOver('hey world'));

/*7.*/

function makeListFromRange(a, b){
	let arr = [];
	let lowEnd = a;
	let highEnd = b;

while(lowEnd <= highEnd){
   arr.push(lowEnd++);
}
	return arr;
}
alert(makeListFromRange(2,7)); 

/*8*/

function getArrayOfKeys(arr, keyValue){
    let newArray = [];
    executeForEach(arr, function(value){
        newArray.push(value[keyValue]);
    });
    return newArray;
}
const fruits = [
    {name: 'apple', weight:0.5},
    {name: 'pineapple', weight:2}
];
console.log(getArrayOfKeys(fruits, 'name'));

/*9*/

function substitute(arr) {
		let newArr = [];
		for(let i = 0; i < arr.length; i++) {
			newArr[i] = arr[i] > 10 && arr[i] < 20 ? '*' : arr[i];
		}
		return newArr;
	}

/*10*/

function getPastDate(date, pastDays) {
		return new Date(date.getFullYear(), date.getMonth(), date.getDate() - pastDays);
	}
	
/*11*/
function formatDate(date) {
		return date.getFullYear() + "/" + date.getMonth() + "/" 
		+ date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
	}