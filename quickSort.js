function partition(arr, low, high)
{
    // Menentukan pivot
    let pivot = arr[high];
    
    // Index dari element terkecil
    let i = low - 1;

    // pindahkan semua element yang lebih kecil ke kiri (low ke i)
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // pindahkan pivot ke samping semua element yang lebih kecil
    swap(arr, i + 1, high);

    // return posisi pivot
    return i + 1;
}

// fungsi tukar posisi / swap
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, low, high)
{
    if (low < high) {
        // pi akan menampung index dari pivot
        let pi = partition(arr, low, high);

        // recursion untuk element yang lebih kecil
        quickSort(arr, low, pi - 1);
        
        // recursion untuk element yang lebih besar
        quickSort(arr, pi + 1, high);
    }
}

let arr = [ 10, 7, 8, 9, 1, 5 ];
let n = arr.length;

quickSort(arr, 0, n - 1);
console.log(arr);
