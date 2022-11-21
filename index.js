// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value

    const hq =42
    if(someValue <hq){
        return hq - someValue;
    }else {
        return someValue-hq
    }

}
distanceFromHqInBlocks(43);

//Each block in Manhattan is 264 feet long.
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264
}

distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
    if(destination>start){
        return (destination - start)*264
    }else if(start>destination){
        return (start-destination)*264
    }
}
distanceTravelledInFeet()


function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination)
    if(distance < 400){
        return 0
    }else if( distance > 400 && distance <2000){
        return 2.56
    }else if (distance>2000 && distance<2500){
        return 25
    }else if (distance > 2500){
        return 'cannot travel that far'
    }
}
calculatesFarePrice(start,destination)