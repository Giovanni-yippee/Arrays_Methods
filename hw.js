let sandar = []

while(true){
    let sanEngiz = +prompt("San engiziniz (toqtatu ushin 0 sanyn engiziniz): ")

    if(sanEngiz == 0){
        break;
    }else if(sanEngiz % 2 == 0){
        sandar.unshift(sanEngiz)
    }else{
        sandar.push(sanEngiz)
    }
}

console.log("Missiv: ", sandar)
console.log("Uzyndagy: ", sandar.length)