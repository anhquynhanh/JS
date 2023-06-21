function filterLongestStrings(arr) {
    // Tìm độ dài lớn nhất trong mảng
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
    }
    }

    // Lọc ra các phần tử có độ dài lớn nhất
    let filteredArr = arr.filter(function (value) {
    return value.length === maxLength;
    });

    return filteredArr;
}

  // Sử dụng hàm để lọc ra các phần tử có độ dài lớn nhất
let array = ['aba', 'aa', 'ad', 'c', 'vcd'];
let result = filterLongestStrings(array);
console.log(result);