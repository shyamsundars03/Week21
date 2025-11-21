
function binarySearch(arr,value){

    let l= 0
    let r = arr.length-1

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid]  == value){
            return arr[mid]
        }else if(arr[mid]< value){
            l = mid+1
        }else{
            r=  mid-1
        }
    }
    return `Not found`

}
console.log("NORMAL BINARY SEARCH:",binarySearch([10, 20, 30, 40, 41, 50],44))


function BS(arr,t){

    let l = 0
    let r= arr.length-1
    let floor= -1
    let ceil = -1

    while(l<=r){

        let mid = Math.floor((l+r)/2)

        if(arr[mid]==t){
            floor = arr[mid]
            ceil = arr[mid]
            return `value found at ${mid} and value is ${arr[mid]}`
        }else if(arr[mid]<t){
            l=  mid+1
            floor = arr[mid]
        }else{
            r = mid-1   
            ceil = arr[mid]        
        }
    }

return `value is between ${floor} and ${ceil}`
}
console.log("FLOOR & CEIL BINARY:",BS([16,23,24,27,50],25))



function firstOccur(arr,t){

let l = 0
let r = arr.length-1
let res = -1

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid]==t){
            res = mid
            r= mid-1
        }else if(arr[mid] < t){
            l = mid+1
        }else{
            r = mid-1
        }
    }

return `target: ${t} has first occur at ${res} position`
}
console.log("FIRST OCCURANCE BINARY SEARCH :",firstOccur([2,2,2,3,3,4,5,5,54,],3))

function lastOccur(arr,t){

    let l = 0
    let r = arr.length-1
    let res = -1

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid] == t){
            res = mid
            l = mid+1
        }else if(arr[mid] < t){
            l =mid+1
        }else{
            r = mid-1
        }
    }

return `target: ${t} has the last occur in ${res} position`


}
console.log("LAST OCCUR BINARY SEARCH  :",lastOccur([2,2,2,3,3,4,5,5,54],3))


function recBS(arr,t,l=0,r=arr.length-1){

    if(l>r) return `Not found`

let mid = Math.floor((l+r)/2)   

    if(arr[mid] == t){
        return  `value is ${arr[mid]}`
    }else if(arr[mid] < t){
        return recBS(arr,t,mid+1,r)
    }else{
        return recBS(arr,t,l,mid-1)
    }


}
console.log("RECURSIVE BS:",recBS([16,23,24,27,50],24))

function twoDBS(arr,t){

for(let i=0;i<arr.length;i++){

    let a = arr[i]
    let l =0
    let r = a.length-1

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(a[mid]==t){
            return `outer : ${i} & inner : ${mid}`
        }else if(a[mid] < t){
            l = mid+1
        }else{
            r = mid-1
        }
    }
}

return `Nothing found`

}
console.log("2D BS:",twoDBS([
  [10, 20, 60],
  [8, 10, 52],
  [15, 5, 24],
  [26, 28, 43],
  [12, 16, 51]
],28))

/*

QUESTIONS:

704 – Binary Search
35 – Search Insert Position
69 – Sqrt(x)
367 – Valid Perfect Square
852 – Peak Index in a Mountain Array
268 – Missing Number
744 – Find Smallest Letter > target
34 – First & Last Position in Sorted Array
33 – Search in Rotated Sorted Array
81 – Rotated Array with Duplicates
153 – Minimum in Rotated Sorted Array
162 – Find Peak Element
240 – Search a 2D Matrix II
875 –Koko Eating Bananas (Binary Search on Speed)
881 – Boats to Save People (Binary Search variant)
540 – Single Element in Sorted Array
1011 – Capacity to Ship Packages Within D Days
1482 – Minimum Days to Make Bouquets
1552 – Magnetic Force Between Two Balls
1060 – Missing Element in Sorted Array
287 – Find the Duplicate Number (Binary Search on RANGE)
1901 – Peak in 2D
4 – Median of Two Sorted Arrays
410 – Split Array Largest Sum
1283 – Smallest Divisor Given Threshold
154 – Min in Rotated Sorted Array II (with duplicates)
668 – Kth Smallest in Multiplication Table
378 – Kth Smallest in Sorted Matrix
2187 – Minimum Time to Complete Trips
719 – Smallest Kth Pair Distance


*/

var searchInsert = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l+r)/2);
    if (nums[mid] === target) return mid;
    nums[mid] < target ? l = mid+1 : r = mid-1;
  }
  return l;
};

var mySqrt = function(x) {
  let l = 0, r = x, ans = 0;
  while (l <= r) {
    let mid = Math.floor((l+r)/2);
    if (mid * mid <= x) { ans = mid; l = mid+1; }
    else r = mid-1;
  }
  return ans;
};


var isPerfectSquare = function(num) {
  let l = 1, r = num;
  while (l <= r) {
    let m = Math.floor((l+r)/2);
    let sq = m * m;
    if (sq === num) return true;
    sq < num ? l = m+1 : r = m-1;
  }
  return false;
};


var peakIndexInMountainArray = function(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    let mid = Math.floor((l+r)/2);
    if (arr[mid] < arr[mid+1]) l = mid+1;
    else r = mid;
  }
  return l;
};

var missingNumber = function(nums) {
  nums.sort((a,b)=>a-b);
  let l = 0, r = nums.length;
  while (l < r) {
    let mid = Math.floor((l+r)/2);
    nums[mid] > mid ? r = mid : l = mid+1;
  }
  return l;
};

var findPeakElement = function(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l+r)/2);
    if (nums[mid] < nums[mid+1]) l = mid+1;
    else r = mid;
  }
  return l;
};

var findDuplicate = function(nums) {
  let l = 1, r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l+r)/2);
    let count = 0;
    for (let n of nums) if (n <= mid) count++;
    count > mid ? r = mid : l = mid+1;
  }
  return l;
};





