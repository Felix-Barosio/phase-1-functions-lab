// Code your solution in this file!

function  distanceFromHqInBlocks(blocks){
    const head = 42;
    if(blocks > 42){
        return blocks - head
    }else{
        return head - blocks
    }
}
//=====using arrow===//
// const head = 42
// const distanceFromHqInBlocks = (blocks) =>{
//     return blocks < 42 ? head - blocks : blocks - head;
// }

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) *264
}



function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return (start - destination) *264;
    }else{
        return (destination - start) *264
        
    }
}


function calculatesFarePrice(start, destination){
    let charges = distanceTravelledInFeet(start, destination);
    if(charges <= 400){
        return 0;
    }else{
        if(charges >=400 && charges <=2000){
            return (charges - 400) *0.02;
        }else{
            if(charges > 2000 && charges <=2500){
                return 25;
            }else{
                return 'cannot travel that far';
            }
        }
    }
}


