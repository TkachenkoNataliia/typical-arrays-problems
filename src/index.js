exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        return Math.min(...array);
    }
};

exports.max = function max(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = function avg(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        let sum = array.reduce((acc, item) => acc + item);
        let result = sum / array.length;
        return result;
    }
};
