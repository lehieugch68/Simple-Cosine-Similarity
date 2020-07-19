let cosineSimilarity = (str1, str2, term = false) => {
	let regex = /[&\/\\#,+()$~%.'":*?<>{}!`]/g;
	let str1Words = term ? str1.trim().split(/ +/).map(w => {return w.toLowerCase().replace(regex, '')}) : str1.trim().toLowerCase().replace(regex, '').split('');
	let str2Words = term ? str2.trim().split(/ +/).map(w => {return w.toLowerCase().replace(regex, '')}) : str2.trim().toLowerCase().replace(regex, '').split('');
	let dict = Array.from(new Set(str1Words.concat(str2Words)));
	let str1Vector = strToVector(str1Words, dict);
	let str2Vector = strToVector(str2Words, dict);
	let cosineSimilarity = getCosine(str1Vector, str2Vector);
	return cosineSimilarity;
}

let strToVector = (str, dict) => {
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

let getCosine = (A, B) => {
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

module.exports = cosineSimilarity;
