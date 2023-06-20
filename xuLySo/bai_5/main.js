function tinhTongSoNguyenTo(number) {
    let sum = 0;

    for (let i = 2; i <= number; i++) {
    if (kiemTraSoNguyenTo(i)) {
        sum += i;
    }
    }

    return sum;
}

function kiemTraSoNguyenTo(number) {
    if (number <= 1) {
    return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        return false;
    }
    }

    return true;
}

  // Sử dụng hàm để tính tổng các số nguyên tố
let number = parseInt(prompt("Nhập một số nguyên dương:"));

while (isNaN(number) || number <= 0) {
    number = parseInt(prompt("Số nhập vào không phải là số nguyên dương. Vui lòng nhập lại:"));
}

let sumOfPrimes = tinhTongSoNguyenTo(number);
console.log("Tổng các số nguyên tố nhỏ hơn hoặc bằng", number, "là", sumOfPrimes); 