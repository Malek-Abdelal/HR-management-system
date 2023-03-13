'use strict';


const employees = [];

function Employee(name, department, level, imageURL) {

    this.employeeID = null;  
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = null;

    employees.push(this);

}


Employee.prototype.salaryBeforTax = function (min = 0, max = 0) {

    (this.level === "Senior") ? ((min = 1500), (max = 2000)) : (this.level === "Mid-Senior") ? ((min = 1000), (max = 1500)) : ((min = 500), (max = 1000));

    return Math.floor(Math.random() * (max - min)) + min;
}


Employee.prototype.netSalary = function () {

    return (this.salaryBeforTax() * (92.5 / 100)).toFixed(3);
}


Employee.prototype.uniqueId = function (){

    let randomness = Math.trunc(Math.random()*100000000).toString().slice(0, 4) ;
    return randomness ;

}

let ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "../assets/Ghazi.jpg"); 
let lanaAli = new Employee("Lana Ali", "Finance", "Senior", "../assets/Lana.jpg");
let tamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior", "../assets/Tamara.jpg");
let safiWalid = new Employee("Safi Walid", "Administration", "Mid-Senior", "../assets/Safi.jpg");
let omarZaid = new Employee("Omar Zaid", "Development", "Senior", "../assets/Omar.jpg");
let ranaSaleh = new Employee("Rana Saleh", "Development", "Junior", "../assets/Rana.jpg");
let hadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "../assets/Hadi.jpg");


function webShow() {
    for (let i = 0; i < employees.length; i++) {
        employees[i].render();
    }
}
    
    
Employee.prototype.render = function () {
        
        let cardsDiv = document.getElementById("employee-cards");
        
        
        let card = document.createElement("div");
        card.id = "card";
        card.style = "height: 350px; width: 270px; background-color: #C9EEFF; border-radius: 5%; display: flex; flex-direction: column; padding: 15px; margin-top:3%; align-items: center; justify-content: space-around;  box-shadow: 0px 0px 5px #d1d5db"
        cardsDiv.appendChild(card);
        
        let img = document.createElement("img");
        img.id = "employee-img";
        img.src = `${this.imageURL}`;
        img.style = "width: 85%; height: 65%; border-radius: 5%; margin-top: -3%;"
        card.appendChild(img);
        
        let div1 = document.createElement("div");
        div1.id = "info1";
        div1.style = "width: 100%; display: flex; justify-content: space-around;"
        card.appendChild(div1);
        
        let span1 = document.createElement("span");
        span1.id = "apan1";
        span1.innerHTML = `Name: ${this.fullName}`;
        div1.appendChild(span1);
        
        let span2 = document.createElement("span");
        span2.id = "apan2";
        span2.innerHTML = `ID: ${this.uniqueId()}`;
        div1.appendChild(span2);
        
        let div2 = document.createElement("div");
        div2.id = "info2";
        div2.style = "width: 100%; display: flex; justify-content: space-around;"
        card.appendChild(div2);
        
        let span3 = document.createElement("span");
        span3.id = "apan3";
        span3.innerHTML = `Department: ${this.department}`
        div2.appendChild(span3);
        
        let span4 = document.createElement("span");
        span4.id = "apan4";
        span4.innerHTML = `Level: ${this.level}`
        div2.appendChild(span4);
        
        let salary = document.createElement("span");
        salary.id = "salary";
        salary.innerHTML = `Salary: ${this.netSalary()}`
        card.appendChild(salary);
        
}


let form1 = document.getElementById("form1");
form1.addEventListener("submit", createNewEmployee);

console.log(form1);
function createNewEmployee(event){
    
    event.preventDefault();
    let userName = event.target["user-input"].value; 
    let department = event.target.select1.value;
    let level = event.target.select2.value;
    let image = event.target["user-image"].value;
    
    let newEmployee = new Employee(userName, department, level, image); 
    
    newEmployee.render();
}

webShow();
