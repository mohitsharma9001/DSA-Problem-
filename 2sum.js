//find two sum in this problem

var A = [1,5,6,4,5,7];

var X = 19;



// Brute force approch
twoSum(A,X)
function twoSum(A,X){
    for(var i = 0;i<A.length;i++){
        for(var j = 0;j<A.length;j++){
            if(i == j){
                continue;
            }if(A[i]+A[j] === X){
                    console.log("Yes")
                    return 
                }
        }
    } console.log("No")
       
    }


// two pointer approch

function isPairSum(A,  X)
{
  
    // represents first pointer
    var i = 0;
  
    // represents second pointer
    var j =A.length- 1;
  
    while (i < j) {
  
        // If we find a pair
        if (A[i] + A[j] == X)
            return true;
  
        // If sum of elements at current
        // pointers is less, we move towards
        // higher values by doing i++
        else if (A[i] + A[j] < X)
            i++;
  
        // If sum of elements at current
        // pointers is more, we move towards
        // lower values by doing j--
        else
            j--;
    }
    return false;
}
console.log(isPairSum(A, X))