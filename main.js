let numbers = [3, 8, 7, 6, 5, 3, 2, 1, 10, 9];

function compareNumbers(arr){
    let array = arr.sort(function(a,b){
        return b-a})
    console.log(array)
}

compareNumbers(numbers); 

