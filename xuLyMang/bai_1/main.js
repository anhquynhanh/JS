function removeFalsyValues(arr) {
    // Sử dụng phương thức filter để lọc các giá trị sai
    let filteredArr = arr.filter(function (value) {
      return Boolean(value); // Giá trị được chuyển thành kiểu boolean và lọc các giá trị sai
    });

    return filteredArr;
}

  // Sử dụng hàm để loại bỏ giá trị sai trong mảng
let array = [false, null, undefined, NaN, 0, ''];
let result = removeFalsyValues(array);
console.log(result);