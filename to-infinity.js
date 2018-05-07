function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    }
    if (isFinite(num) && num > 0) {
        console.log('To infinity');
    }    
    if (isFinite(num) && num < 0) {
        console.log('To negative infinity');
    }
    if (num === 0) {
        console.log('Staying at home');
    }
}

beyond(-1243);