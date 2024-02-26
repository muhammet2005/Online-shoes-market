let cameSheep = 0
let notCameSheep = 0

function task(array){
    return array.map(el => {
        if(el === true && el){
            return cameSheep += el.length
        }else{
            return notCameSheep += el.length
        }
    })
}

console.log(task([true, true,true,true,true,
            false, false, true,true,true,true,true]))


console.log(cameSheep , "cameSheep")
console.log(notCameSheep , "notCameSheep")