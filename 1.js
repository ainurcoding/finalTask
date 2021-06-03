// create a function with inputNumber paramemer

var pascal_triangle = (inputNumber) => {
    // merubah nilai dari parameter menjadi array
    let pascalTriangle = new Array(inputNumber);

    /**
     * membuat perulangan dimana i harus lebih kecil dari input number
     * membuat variabel row yang di set let dengan menerima Array baru i + 1
     * row index ke 0 nilainya 1
     * row terakhir nilainya pun 1
     */
    for (let i = 0; i < inputNumber; i++) {
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length - 1] = 1;

        /**
         * membuat perulangan dengan memberi variabel j sebagai let
         * j harus lebih kecil dari panjang row lalu dikurangi 1
         * membuat variabel rowAbove dimana mengambil nilai~
         * berdasarkan pascalTriangle dimana i (setiap perulangan dikurangi 1)
         * variabel row berdasarkan index j, menambahkan dua variabel rowAbove~
         * dimana satu secara default[j] dan satunya dikurangi 1[j-1]
         */
        for (let j = 1; j < row.length - 1; j++) {
            let rowAbove = pascalTriangle[i-1];
            row[j] = rowAbove[j] + rowAbove[j-1];
        }
        // update nilai dari pascalTriangle dengan row
        pascalTriangle[i] = row;
    }

    // menampilkan nilai pascalTriangle terbaru melalui~ 
    // perulangan berdasarkan panjang nya

    for (let i = 0; i < pascalTriangle.length; i++) {
        console.log(pascalTriangle[i] + "\n");
    }
}

pascal_triangle(4);