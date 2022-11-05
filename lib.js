const delay = (time) => {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

export {delay, getRandomArbitrary}