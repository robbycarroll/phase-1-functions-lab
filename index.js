// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
return Math.abs(42 - destination) 
}

function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264
}

function calculatesFarePrice (start, end) {
const distance = distanceTravelledInFeet(start, end);
if (distance < 400) return 0 
if (distance > 2500) return 'cannot travel that far'
if (distance < 2000) return (distance -400) * .02
if (distance > 2000) return 25
}