var count = 0;
exports.quicksort = function qs(list) {
    if (list.length === 0 || list.length === 1) {
        return list;
    } else {
        var length = list.length;
        var pivotIndex = Math.floor(length / 2);
        var pivotValue = list[pivotIndex];
        var left = [], right = [], pivot = [];
        for (var i=0; i<length; i++) {
            count++;
            var v = list[i];
            if (v === pivotValue) {
                pivot.push(v);
            } else if (v < pivotValue) {
                left.push(v);
            } else if (v > pivotValue) {
                right.push(v);
            }
        }
        return qs(left).concat(pivot).concat(qs(right));
    }
}

const exampleList = [1,4,2,6,1,0,2,3,57,5,9,4,12,5,45,3,67,33,456,1,23,343];
console.log("Example list: " + exampleList + "with " + exampleList.length + " elements");
var example = exports.quicksort(exampleList);
console.log("Sorted  list: " + example);
console.log(" with " + count + " iterations");