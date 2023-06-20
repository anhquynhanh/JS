function tinhTongSoNguyen() {
    var a = parseInt(prompt("Nhập số nguyên thứ nhất:"));
    var b = parseInt(prompt("Nhập số nguyên thứ hai:"));
    var tong = 0;

    // Xác định số nhỏ nhất và số lớn nhất
    var start = Math.min(a, b);
    var end = Math.max(a, b);

    // Tính tổng các số nguyên nằm giữa start và end
    for (var i = start + 1; i < end; i++) {
    tong += i;
    }

    return tong;
}

var ketQua = tinhTongSoNguyen();
console.log("Tổng các số nguyên nằm giữa hai số là: " + ketQua);