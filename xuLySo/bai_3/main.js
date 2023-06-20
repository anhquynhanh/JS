function tinhTongUocSo() {
    let number = parseInt(prompt("Nhập số nguyên dương:"));

    while (isNaN(number) || number <= 0) {
    number = parseInt(prompt("Số nhập vào không phải là số nguyên dương. Vui lòng nhập lại:"));
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        sum += i;
    }
    }

    console.log("Tổng các ước số của", number, "là:", sum);
}

  // Gọi hàm để thực thi
tinhTongUocSo();