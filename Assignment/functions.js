//Question:1
// function reverse(num){
//     let rev = num.toString().split("").reverse().join("")
//     console.log(parseInt(rev));
// }
// reverse(32243);

//Question:2
// function palindrome(str){
//     let rev = str.split("").reverse().join("");
//     if(str===rev){
//         console.log("The entered string is palindrome");
//     }
//     else{
//         console.log("The entered string is not palindrome");
//     }
// }
// palindrome("madam");

//Question:3
function combination(str){
    let lst = []
    for(let i=0; i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
            lst.push(str.slice(i,j));
        }
    }
    console.log(lst)
}
combination("alien")

//Question:4
// function order(str){
//     let lst = str.split("").sort().join("");
//     console.log(lst);
// }
// order("webmaster");

//Question:5
// function UpperCase(str){
//    str = str.charAt(0).toUpperCase() + str.slice(1);
//     for(let i=0; i<str.length;i++){
//         if(str[i] == " "){
//             str = str.replace(str[i+1],str[i+1].toUpperCase());
//         }
//     }
//     console.log(str);
// }
// UpperCase("the quick brown fox");

//Question:6
// function longest(str){
//     let lst = str.split(" ");
//     let word = lst[0];
//     for(let i=1; i<lst.length;i++){
//         if(lst[i].length > word.length){
//             word = lst[i]
//         }
//     }
//     console.log(word)
// }
// longest("web development tutorial")

//Question:7
// function vowel(str){
//     let lst = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for(let char of str){
//         if(lst.includes(char.toLowerCase())){
//             count++
//         }
//     }
//     console.log(count);
// }
// vowel("AeiU");

//Question:8
// function prime(num){
//     let val = "";
//     if(num===9){
//         console.log("Not a prime number");
//     }
//     else if(num===2){
//         console.log("Prime number");
//     }
//     else{
//         for(let i=2;i<num;i++){
//             if(num%i===0){
//                 val = "Not a prime number";
//                 break;
//             }else{
//                 val = "Prime number";
//             }
//         }
//     }console.log(val);
// }
// prime(101);

//Question:9
// function type(n){
//     console.log(typeof(n));
// }
// type(true);

//Question:10
// function fun(arr){
//    arr.sort(function(a,b){
//         return a-b
//     })
//     console.log(arr);
//     console.log(`Seceond highest number ${arr[arr.length-2]}`);
//     console.log(`Seceond lowest number ${arr[1]}`);
// }
// fun([1,5,101,99])