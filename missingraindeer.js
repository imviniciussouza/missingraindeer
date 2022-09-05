let missingDeer = [5, 6, 1, 2, 3, 7, 0] // -> 4
let newArray = function() {
    let total = 0;
    let newArr = [];
    for (let i = 0; i < missingDeer.length; i++){
        total ++
        newArr.push(total);
    }
    return newArr
}
console.log(newArray())

function getMissingRaindeer(){
    let raindeer = "";
    for (let i =0; i <missingDeer.length; i++){
        if (!missingDeer.includes(newArray()[i])){
            raindeer = newArray()[i];
        } 
      
    }
    return raindeer
}
console.log(`The missing raindeer is the #${getMissingRaindeer()}`);
