function kiemTraSoNguyenTo(number) {
    // Số nguyên tố là số chỉ chia hết cho 1 và chính nó
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

  // Sử dụng hàm để kiểm tra một số nguyên
let number = parseInt(prompt("Nhập một số nguyên dương:"));

while (isNaN(number) || number <= 0) {
    number = parseInt(prompt("Số nhập vào không phải là số nguyên dương. Vui lòng nhập lại:"));
}

let isPrime = kiemTraSoNguyenTo(number);
console.log("Số", number, "có phải là số nguyên tố?", isPrime);