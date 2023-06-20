function capitalizeString(str) {
    // Chia chuỗi thành các từ riêng biệt
    let words = str.split(" ");

    // Lặp qua từng từ và viết hoa chữ cái đầu tiên
    let capitalizedWords = words.map(function(word) {
      // Chuyển đổi chữ cái đầu tiên thành chữ cái hoa
    let capitalizedLetter = word.charAt(0).toUpperCase();
      // Kết hợp chữ cái hoa với phần còn lại của từ
    let capitalizedWord = capitalizedLetter + word.slice(1);
    return capitalizedWord;
    });

    // Ghép các từ đã viết hoa lại thành chuỗi mới
    let capitalizedString = capitalizedWords.join(" ");

    return capitalizedString;
}

  // Sử dụng hàm để chuyển đổi chuỗi
let str = prompt("Nhập một chuỗi:");
let result = capitalizeString(str);
console.log(result);