
let str1 = "This is another test";
let str2 = "Hey fellow warriors";

function reverseString(arr){
    const reverseStr = [];
    arr.split(" ").forEach(item => {
        if(item.length >= 5){
            reverseStr.push(item.split("").reverse().join(""))
        }else{
            reverseStr.push(item)
        }
    })
    return reverseStr.join(" ")
}

document.writeln(reverseString(str1))
document.writeln(reverseString(str2))