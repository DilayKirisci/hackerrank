function countingSort(arr) {
	let obj_ = {};
	for (let i = 0; i < arr.length; i++) {
		let number = arr[i];
		if (obj_.hasOwnProperty(number)) {
			obj_[number]++;
		} else {
			obj_[number] = 1;
		}
	}
	for (let i = 0; i < 100; i++) {
		if (!obj_.hasOwnProperty(i)) {
			obj_[i] = 0;
		}
	}
	return Object.values(obj_);
}
