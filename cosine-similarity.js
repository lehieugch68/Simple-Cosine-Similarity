function cosineSimilarity(str1, str2, term = false) {
	let str1Words = term ? str1.trim().split(" ").map(w => {return removeAccents(w.toLowerCase()).replace(/[^a-zA-Z0-9 ]/g, '')}) : removeAccents(str1.trim().toLowerCase().replace(/\s+/g, '')).replace(/[^a-zA-Z0-9 ]/g, '');
	let str2Words = term ? str2.trim().split(" ").map(w => {return removeAccents(w.toLowerCase()).replace(/[^a-zA-Z0-9 ]/g, '')}) : removeAccents(str2.trim().toLowerCase().replace(/\s+/g, '')).replace(/[^a-zA-Z0-9 ]/g, '');
	let dict = Array.from(new Set(str1Words.concat(str2Words)));
	let str1Vector = strToVector(str1Words, dict);
	let str2Vector = strToVector(str2Words, dict);
	let cosineSimilarity = cosineCal(str1Vector, str2Vector);
	return cosineSimilarity;
}

function strToVector(str, dict) {
	let vector = [];
	for (let word of dict) {
		let i = 0;
		for (let e of str) {
			if (e === word) i++;
		}
		vector.push(i);
	}
	return vector;
}

function cosineCal(A, B) {
   	let dotProduct = 0;
   	let mA = 0, mB = 0;
    	for (let i = 0; i < A.length; i++) {
        	dotProduct += (A[i] * B[i]);
        	mA += (A[i]*A[i]);
        	mB += (B[i]*B[i]);
   	}
    	let cosine = (dotProduct)/((Math.sqrt(mA))*(Math.sqrt(mB)));
   	return cosine;
}

function removeAccents(str){
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

module.exports = cosineSimilarity;
