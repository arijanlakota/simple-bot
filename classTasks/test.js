
export function countLetters(text) {
    const array = text.split('')
    const result = {}

    for (let i = 0; i < array.length; i++) {
        const letter = array[i];

        if(!result[letter]){
            result[letter] = 1

        }else{
            result[letter] += 1
        }
    }
    
    return result
}
export function reverse(text){
    const arr = text.split(" ")
    const pomocnaLista = []
    for(let i = 0;i < arr.length;i++){
        for(let j = arr[i].length - 1;j >= 0;j--){
            pomocnaLista.push(arr[i][j])
        }
        pomocnaLista.push(" ")
    }
    return pomocnaLista.join("")
   
}