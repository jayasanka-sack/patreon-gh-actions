function findIndex(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }

}

module.exports = { findIndex };
