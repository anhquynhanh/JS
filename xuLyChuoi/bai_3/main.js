function isPalindrome(str) {
    // Chuyển đổi chuỗi thành chữ thường và loại bỏ khoảng trắng
    let formattedStr = str.toLowerCase().replace(/\s/g, '');

    // Kiểm tra chuỗi đối xứng
    let left = 0;
    let right = formattedStr.length - 1;

    while (left < right) {
    if (formattedStr[left] !== formattedStr[right]) {
        return false;
    }
    left++;
    right--;
    }

    return true;
}

  // Sử dụng hàm để kiểm tra chuỗi
let str = prompt("Nhập một chuỗi:");
let result = isPalindrome(str);
console.log(result);