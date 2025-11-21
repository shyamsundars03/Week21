function fibo(n){

if(n==0) return 0
if(n==1) return 1
return fibo(n-1)+fibo(n-2)

}
console.log("FIBONACCI",fibo(10))




function arrFibo(n){

let arr =[0,1]
for(let i=2;i<=n;i++){
    arr[i] = arr[i-1] + arr[i-2]
}
return arr
}
console.log("FIBO IN ARR",arrFibo(10))



function facto(n){

if(n<1) return 1
return n*facto(n-1)
}
console.log("FACTORIAL:",facto(15))


function sum(n){
if(n<1) return 0
return n+sum(n-1)
}
console.log("SUM OF N NUMBERS",sum(15))


function arrSum(arr,i=0){

if(i==arr.length) return 0
return arr[i]+arrSum(arr,i+1)


}
console.log("SUM OR ARR:",arrSum([1,2,3,4,5]))

function evenSum(arr,i=0){

if(i==arr.length) return 0

if(arr[i]%2==0){
    return arr[i]+ evenSum(arr,i+1)
}else{
    return evenSum(arr,i+1)
}

}
console.log("EVEN SUM",evenSum([1,2,3,4,5]))

function patt(n){

if(n==0) return 
console.log(n)
return patt(n-5)


}
console.log("PATTERN BASED:",patt(100))

function remove(str, t,arr= str.split(""), i=0){

    if(i==str.length) return arr.join("")

    if(arr[i]== t)arr.splice(i,1)
    return remove(str,t,arr,i+1)

}
console.log("REMOVE :",remove("shyam","y"))


function reverse(str,i = str.length-1){

if(i<0) return ""

return str[i]+reverse(str,i-1)

}
console.log("REVERSE :",reverse("shyam sundar"))


function palidrome(str, l=0, r= str.length-1){

    if(l>r) return `${str} is palidrome`

    if(str[l]!= str[r]) return `${str} is not a palindrome`
    return palidrome(str, l+1, r-1)
}
console.log("PLAINDROME :",palidrome("malalam"))

/*

Count digits of a number
Sum of digits
Product of digits
Count occurrences of a character in a string
Find max of array
Reverse an array (in-place)
Check if array is sorted
Reverse number
Flatten array recursion


*/






function countDigits(n) {
    if (n === 0) return 0;
    return 1 + countDigits(Math.floor(n / 10));
}
console.log(countDigits(87452)); 


function sumDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(12345)); 

function productDigits(n) {
    if (n < 10) return n;
    return (n % 10) * productDigits(Math.floor(n / 10));
}
console.log(productDigits(234)); // 24


function countChar(str, ch, i = 0) {
    if (i === str.length) return 0;
    return (str[i] === ch ? 1 : 0) + countChar(str, ch, i + 1);
}
console.log(countChar("banana", "a")); // 3


function findMax(arr, i = 0) {
    if (i === arr.length - 1) return arr[i];
    return Math.max(arr[i], findMax(arr, i + 1));
}
console.log(findMax([10, 21, 7, 99, 3])); // 99


function reverseArray(arr, l = 0, r = arr.length - 1) {
    if (l >= r) return arr;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    return reverseArray(arr, l + 1, r - 1);
}
console.log(reverseArray([1,2,3,4,5])); // [5,4,3,2,1]


function isSorted(arr, i = 0) {
    if (i === arr.length - 1) return true;
    if (arr[i] > arr[i + 1]) return false;
    return isSorted(arr, i + 1);
}
console.log(isSorted([1,2,3,4])); // true
console.log(isSorted([1,3,2]));   // false

















































