function containsAllCharacters(str1, str2) {
    // Chuyển đổi cả hai chuỗi thành chữ thường
    let formattedStr1 = str1.toLowerCase();
    let formattedStr2 = str2.toLowerCase();

    // Xóa khoảng trắng trong chuỗi thứ nhất
    formattedStr1 = formattedStr1.replace(/\s/g, '');

    // Kiểm tra từng ký tự trong chuỗi thứ hai
    for (let i = 0; i < formattedStr2.length; i++) {
    let char = formattedStr2.charAt(i);

      // Nếu ký tự không tồn tại trong chuỗi thứ nhất, trả về false
    if (!formattedStr1.includes(char)) {
        return false;
    }
    }

    return true;
}

  // Sử dụng hàm để kiểm tra chuỗi
let str1 = prompt("Nhập chuỗi thứ nhất:");
let str2 = prompt("Nhập chuỗi thứ hai:");
let result = containsAllCharacters(str1, str2);
console.log(result);