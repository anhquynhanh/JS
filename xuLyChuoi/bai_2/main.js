function convertToSpinalCase(str) {
    // Chuyển đổi chữ hoa thành chữ thường và thêm dấu gạch ngang trước mỗi chữ hoa
    let convertedStr = str.replace(/[A-Z]/g, function(match) {
    return '-' + match.toLowerCase();
    });

    // Xóa các khoảng trắng và dấu gạch ngang ở đầu và cuối chuỗi
    convertedStr = convertedStr.trim().replace(/^-+|-+$/g, '');

    // Thay thế các khoảng trắng liền nhau bằng dấu gạch ngang duy nhất
    convertedStr = convertedStr.replace(/\s+/g, '-');

    return convertedStr;
}

  // Sử dụng hàm để chuyển đổi chuỗi
let str = prompt("Nhập một chuỗi:");
let result = convertToSpinalCase(str);
console.log(result);