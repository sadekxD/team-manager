const validNum = () => {
	if (num > 0 && num < 10) {
		return true;
	}
	return false;
};

const uniqueRow = (array) => {
	const newArray = [...new Set(array)];

	if (equalArray(array, newArray)) {
		return array;
	}
};

const equalArray = (array1, array2) => {
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}
	return true;
};

const rowValid = (row) => {
	let uRow = uniqueRow(row);
	if (row.every(validNum) && equalArray(row, uRow)) {
		return true;
	}
	return false;
};

const checkRows = (sudokuArray) => {
	if (sudokuArray.every(validNum)) {
		return true;
	}
	return false;
};

const transposeArray = (array) => {
	let newArray = [];

	for (let i = 0; i < array.length; i++) {
		newArray.push([]);

		for (let j = 0; j < array.length; j++) {
			newArray[i].push(array[j][i]);
		}
	}
	return newArray;
};
