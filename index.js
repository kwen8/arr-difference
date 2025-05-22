module.exports = (arr, ...childArr) => {
	if(!Array.isArray(arr)) {
		return [];
	}
	let arrCopy = arr.slice();
	let subArr = [].concat(...childArr);
	for(var i = arrCopy.length-1; i >= 0;i--) {
		for(var j = subArr.length-1; j >= 0;j--) {
			if(arrCopy[i] === subArr[j]) {
				arrCopy.splice(i, 1);
				subArr.splice(j, 1);
				break;
			}
		}
	}
	return arrCopy;
}