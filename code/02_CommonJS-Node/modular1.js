
function sum(...args) {
    return args.reduce((previous, current) => previous + current, 0);
}

module.exports.sum=sum
// module.exports=sum