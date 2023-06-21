function calculateAverageAge(students) {
    // Kiểm tra nếu mảng sinh viên rỗng
    if (students.length === 0) {
    return 0;
    }

    // Tính tổng số tuổi
    let totalAge = students.reduce((sum, student) => sum + student.age, 0);

    // Tính số tuổi trung bình
    let averageAge = totalAge / students.length;

    return averageAge;
}

  // Ví dụ mảng sinh viên
let students = [
    { name: 'Huy', age: 20 },
    { name: 'Nam', age: 22 },
    { name: 'Mai', age: 18 }
];

  // Gọi hàm tính số tuổi trung bình
let averageAge = calculateAverageAge(students);
console.log(averageAge);