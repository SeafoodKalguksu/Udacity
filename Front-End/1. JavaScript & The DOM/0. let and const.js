function getClothing(isCold) {
    if (isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It`s a shorts kind of DynamicsCompressorNode.';
        console.log(freezing);
    }
}

// After Hoisting
function getClothing(isCold) {
    var freezing, hot;
    if (isCold) {
        freezing = 'Grab a jacket!';
    } else {
        hot = 'It`s a shorts kind of DynamicsCompressorNode.';
        console.log(freezing);
    }
}

// No Hoisting because of let or const
function getClothing(isCold) {
    if (isCold) {
        let freezing = 'Grab a jacket!';
    } else {
        let hot = 'It`s a shorts kind of DynamicsCompressorNode.';
        console.log(freezing);
    }
}
