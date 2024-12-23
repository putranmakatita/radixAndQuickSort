function radixSort(arr) {
    // fungsi untuk dapatkan max digit
    const getMaxDigit = (arr) => {
        let mx = arr[0];
        for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mx) {
            mx = arr[i];
        }
        }
        return 10**mx.toString().length; // dapatkan nilai dari 10 pangkat digit terbesar, untuk menentukan kita butuh eksponensial berapa? satuan(1), puluhan(10), ratusan(100) atau ribuan(1000) dan seterusnya.
    }

    // fungsi untuk counting sort
    const countSort = (arr, exp) => {
        let output = Array(arr.length); 
        let count = Array(10).fill(0, 0);

        // hitung jumlah setiap digit, ada berapa digit 0 ? 1 ? seterusnya hingga 9 di setiap elemen array
        for (let i = 0; i < arr.length; i++) {
            const digit = Math.floor(arr[i] / exp) % 10;
            count[digit]++;
        }

        // untuk menentukan posisi elemen tergantung pada digitnya
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // memindahkan posisi element sesuai dengan digit pada variabel count
        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        return output;
    }

    // Dapatkan maksimal digit dari array
    const maxDigit = getMaxDigit(arr);

    // looping untuk setiap digit dengan batas maksimal adalah maxNumber   
    for (let exp = 1; exp < maxDigit; exp *= 10) {
        arr = countSort(arr, exp); //counting sort setiap digit
    }

    return arr;
}


//  Test cases
let arr = [ 10, 7, 8, 9, 1, 5 ];
let result = radixSort(arr);
console.log(result);

arr = [170, 45, 75, 90, 802, 24, 2, 66];
result = radixSort(arr);
console.log(result);
