module.exports = (arr, ...childArr) => {
	if(!Array.isArray(arr)) {
		return [];
	}
	let subArr = [].concat(...childArr);
	for(var i = arr.length-1; i >= 0;i--) {
		for(var j = subArr.length-1; j >= 0;j--) {
			if(arr[i] === subArr[j]) {
				arr.splice(i, 1);
				subArr.splice(j, 1);
				break;
			}
		}
	}
	return arr;
}