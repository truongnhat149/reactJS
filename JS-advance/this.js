class Student {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
}
let Truong = new Student("truong", 18);
console.log(Truong.fullname);
// this ám chỉ ngữ cảnh đang là Truong
// context