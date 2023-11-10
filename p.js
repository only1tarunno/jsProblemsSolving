function cubeNumber(number) {
    if(typeof(number) === 'number'){
        const cube = number*number*number;
    return cube;
    }else{
        return 'Please input a Number';
    }
}

function matchFinder(string1, string2) {
    if(typeof(string1) === 'string' && typeof(string2) === 'string'){
        if(string1.includes(string2)){
            return true;
        }else{
            return false
        }
    }else{
        return 'Please input only string';
    }
}

// function sortMaker(arr) {
//     if((arr[0]>arr[1] || arr[0]<arr[1]) && (arr[0]>=0 && arr[1]>=0)){
//         let sort_array = arr.sort(function(a, b){return b-a});
//         return sort_array;
//     }else if(arr[0]==arr[1]){
//         return 'equal';
//     }else{
//         return 'Invalid Input';
//     }
// }
function sortMaker(arr) {
    if((arr[0]<arr[1]) && (arr[0]>=0 && arr[1]>=0)){
        let sort_array = [arr[1],arr[0]];
        return sort_array;
    }else if((arr[1]<arr[0]) && (arr[0]>=0 && arr[1]>=0)){
        return arr;
    }
    else if(arr[0]==arr[1]){
        return 'equal';
    }else{
        return 'Invalid Input';
    }
}



function findAddress(obj) {
    
    let street  = '__';
    let house   = '__';
    let society = '__';

    for(let propertyName in obj){
        let value = obj[propertyName];
        if(propertyName === 'street' && value.length!==0){
            street = value ;
        }else if(propertyName === 'house'  && value.length!==0){
            house = value ;
        }else if((propertyName === 'society' && value.length!==0)){
            society = value;
        }
    }
    let fullAdress = street+','+house+','+society;
    return fullAdress;
}



function canPay(changeArray, totalDue) {
   if(changeArray.length !==0){
    let sum = 0;
    for(i=0; i<changeArray.length; i++){
        const change= changeArray[i];
        sum += change;
    }

    if(sum>=totalDue){
        return true;
    }else{
        return false;
    }
   }else{
    return 'Array is empty. Please insert some number in changeArray paremeter';
   }
}
