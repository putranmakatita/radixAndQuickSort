function quickSort(nums) {
    // jika length-nya hanya satu atau kurang, return kembali saja arraynya
    if (nums.length <= 1) {
        return nums;
    }

    // Memilih elemen pivot, ambil saja yang elemen pertamanya
    const pivot = nums[nums.length - 1];

    // Bagi array menjadi kiri(lebih kecil dari pivot) dan kanan(lebih besar dari pivot)
    const l = []; 
    const r = []; 

    for (let i = 0; i < nums.length - 1; i++) {
        // jika lebih kecil dari pivot, tambahkan ke bagian kiri
        // jika lebih besar dari pivot, tambahkan ke bagian kanan
        if (nums[i] < pivot) {
            l.push(nums[i]);
        } else {
            r.push(nums[i]);
        }
    }

    // rekursi quick sort untuk kiri dan kanan
    return [...quickSort(l), pivot, ...quickSort(r)];
}

//  Test cases
let arr = [ 10, 7, 8, 9, 1, 5 ];
let result = quickSort(arr);
console.log(result);

arr = [170, 45, 75, 90, 802, 24, 2, 66];
result = quickSort(arr);
console.log(result);
