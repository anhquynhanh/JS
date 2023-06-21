function compareArrays(arr1, arr2) {
    // Tạo một mảng mới để lưu các phần tử không đồng thời nằm trong hai mảng
    let result = [];

    // Kiểm tra từng phần tử của mảng arr1
    for (let i = 0; i < arr1.length; i++) {
      // Kiểm tra xem phần tử có tồn tại trong mảng arr2 hay không
    if (!arr2.includes(arr1[i])) {
        // Nếu không tồn tại, thêm phần tử đó vào mảng result
        result.push(arr1[i]);
    }
    }

    // Kiểm tra từng phần tử của mảng arr2
    for (let i = 0; i < arr2.length; i++) {
      // Kiểm tra xem phần tử có tồn tại trong mảng arr1 hay không
    if (!arr1.includes(arr2[i])) {
        // Nếu không tồn tại, thêm phần tử đó vào mảng result
        result.push(arr2[i]);
    }
    }

    return result;
}

  // Sử dụng hàm để so sánh hai mảng và trả về mảng chứa các phần tử không đồng thời nằm trong cả hai mảng
let array1 = [1, 2, 3];
let array2 = [1, 3, 4, 5, 5];
let result = compareArrays(array1, array2);
console.log(result);