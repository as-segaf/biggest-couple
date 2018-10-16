function pasanganTerbesar(num) {
	var a = num.toString().split('')
	var pasangan = []

	for (var i = 0; i < a.length - 1; i++) {
		pasangan[i] = Number(a[i] + a[i + 1])
	}

	var terbesar = pasangan[0]  
	for (var j = 1; j < a.length; j++) {
		if (pasangan[j] > terbesar) {
			terbesar= pasangan[j]
		}
	}
	return terbesar
  // you can only write your code here!
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99