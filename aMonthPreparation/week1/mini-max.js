function miniMaxSum(arr) {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const arrSum = arr.reduce((total, current) => total + current, 0);
	const maxSum = arrSum - min;
	const minSum = arrSum - max;

	console.log(minSum + " " + maxSum);
}
