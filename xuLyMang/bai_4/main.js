function createZigzagArray(m, n) {
    // Tạo một mảng 2 chiều có kích thước m x n
    let result = new Array(m);

    // Khởi tạo giá trị đầu tiên
    let value = 1;

    // Lặp qua từng hàng của mảng
    for (let i = 0; i < m; i++) {
      // Tạo một mảng con trong hàng
    result[i] = new Array(n);

      // Kiểm tra nếu hàng là chẵn thì sắp xếp các số tăng dần
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
        result[i][j] = value;
        value++;
        }
    }
      // Ngược lại, sắp xếp các số giảm dần
    else {
        for (let j = n - 1; j >= 0; j--) {
        result[i][j] = value;
        value++;
        }
    }
    }

    return result;
}

  // Sử dụng hàm để tạo mảng theo kiểu ziczac
let m = 3;
let n = 4;
let zigzagArray = createZigzagArray(m, n);
console.log(zigzagArray);