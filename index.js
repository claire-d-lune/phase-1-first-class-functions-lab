// Code your solution in this file!

const danivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => {
    let firstTwo = [drivers[0], drivers[1]];
    return firstTwo;
};

const returnLastTwoDrivers = (drivers) => {
    let arrayLength = drivers.length; 
    let lastTwo = [drivers[(arrayLength - 2)], drivers[(arrayLength - 1)]];
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value){
        return multiplyValue * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (names, selection) {
    return selection(names)
}



