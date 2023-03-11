'use strict';

const employees = [];

function Employee(id, name, department, level, image_URL) {

    this.employeeID = id;
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.imageURL = image_URL;
    this.salary = this.netSalary();

    employees.push(this);
}


Employee.prototype.salaryBeforTax = function (min = 0, max = 0) {

    (this.level === "Senior") ? ((min = 1500), (max = 2000)) : (this.level === "Mid-Senior") ? ((min = 1000), (max = 1500)) : ((min = 500), (max = 1000));

    return Math.floor(Math.random() * (max - min)) + min;
}


Employee.prototype.netSalary = function () {

    return (this.salaryBeforTax() * (92.5 / 100)).toFixed(3);
}


Employee.prototype.render = function () {

    document.write(`<img src="./assets/avatar.png" alt="" style="display: inline-block; width: 40px; height: 40px; margin-right: 50px; vertical-align: middle;">
        <h3 style="display: inline-block; padding-right: 55px; width: 300px"><p style="display: inline-block; padding-right: 25px;"> Employee:</p>${this.fullName}</h3> <h3  style="display: inline-block; padding-left: 300px;"><p style="display: inline-block; padding-right: 20px;"> Salary:</p>${this.salary}</h3><br><br><br>`);

}


let ghaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior"); //image URL 
let lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior");
let tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let safiWalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior");
let ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior");
let hadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");


function webShow() {
    for (let i = 0; i < employees.length; i++) {
        employees[i].render();
    }
}

webShow();


