'use strict'
// function findlenght (array) {
//     let max = array[0]
//     for(let i =0;i<array.length;i++){  
//         if(max.length < array[i].length){
//            max = array[i]
//         }
//     }
//     return max
// } 
// console.log(findlenght(["dfs","kdfjl","aklsdjfkljasdlk"]))
// let temp = {ucenik:{id:"this"},ucenik2:{id:"nest"},ucenik3:{id:"ivan"}}
// function nesto (Obj) {
//     let tempObj = {...Obj}
    
// } 

// console.log(nesto(temp))

let temp = [{id:"this"},{id:"nest"},{id:"ivan"}]


function nesto (arr) {
    let tempArr = [...arr]
    for(let i = 0;i < tempArr.length;i++){
        if(tempArr[i].id == "ivan"){
            tempArr[i].surname = "slavkovic"
        }
    }
    return tempArr
 } 

console.log(nesto(temp))

