
function getCenter(side, width) {
    return (side - width) / 2;
}


function getCenter2(center, centerofrect, size) {
    return center + (centerofrect - size) / 2;
}


module.exports = {
    getCenter
}