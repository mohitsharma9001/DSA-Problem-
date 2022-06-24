// In this problem find the majority Element in this array n/2+1 time ?
// brute force approch
var nums= [3,3,4,2,4,4,2,4,4];
var n = 9;

// function findMajority(n,arr){
// var maxCount = 0;
// var index = -1
//  for(var i = 0; i < n; i++){
//     var count = 0;
//     for(var j = 0; j < n; j++){
//         if(arr[i] == arr[j]){
//             count++
//         }if(maxCount < count){
//             maxCount = count
//             index = i
//         }
//     }
//  }if(maxCount > n/2){
//     console.log(arr[index])
// }else{
//     console.log("No Majority")
// }
// }

// findMajority(n,arr)


// sorting approch

// arr.sort((a,b) => a - b);
// function find(n,arr){
//     var maj=Math.floor((n/2)+1)-1;
    
//     for(var i=0;i<n;i++)
//     {
//         if(arr[i]==arr[i+maj])
//         {
//             return arr[i];
//         }
//     }
//     return -1;
// }
// console.log(find(n,arr))


// Moore voting algorithem

function findMajority(nums)
  {
    var count = 0, candidate = -1;
 
    // Finding majority candidate
    for (var index = 0; index < nums.length; index++) {
      if (count == 0) {
        candidate = nums[index];
        count = 1;
      }
      else {
        if (nums[index] == candidate)
          count++;
        else
          count--;
      }
    }
 
    // Checking if majority candidate occurs more than
    // n/2 times
    count = 0;
    for (var index = 0; index < nums.length; index++) {
      if (nums[index] == candidate)
        count++;
    }
    if (count > (nums.length / 2))
      return candidate;
    return -1;
 
    // The last for loop and the if statement step can
    // be skip if a majority element is confirmed to
    // be present in an array just return candidate
    // in that case
  }
  console.log(findMajority(nums))