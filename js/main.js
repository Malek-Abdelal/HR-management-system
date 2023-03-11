'use strict';


function Employee(name, department, level) {

    this.employeeID = this.uniqueId();
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.imageURL = this.employeeImg();
    this.salary = this.netSalary();

}


Employee.prototype.salaryBeforTax = function (min = 0, max = 0) {

    (this.level === "Senior") ? ((min = 1500), (max = 2000)) : (this.level === "Mid-Senior") ? ((min = 1000), (max = 1500)) : ((min = 500), (max = 1000));

    return Math.floor(Math.random() * (max - min)) + min;
}


Employee.prototype.netSalary = function () {

    return (this.salaryBeforTax() * (92.5 / 100)).toFixed(3);
}


Employee.prototype.uniqueId = function (){

    let dateString = Date.now().toString().substring(9);
    let randomness = Math.trunc(Math.random()*100);

    return randomness + dateString ;

}


Employee.prototype.employeeImg = function(){
    return( (this.fullName === "Ghazi Samer") ? "../assets/Ghazi.jpg" : (this.fullName === "Lana Ali") ? "../assets/Lana.jpg" : (this.fullName === "Tamara Ayoub") ? "../assets/Tamara.jpg": (this.fullName === "Safi Walid") ? "../assets/Safi.jpg": (this.fullName === "Omar Zaid") ? "../assets/Omar.jpg": (this.fullName === "Rana Saleh") ? "../assets/Rana.jpg": (this.fullName === "Hadi Ahmad") ? "../assets/Hadi.jpg": null);
    
}


Employee.prototype.render = function () {

    let cardsDiv = document.getElementById("employee-cards");


    let card = document.createElement("div");
    card.id = "card";
    card.style = "height: 350px; width: 270px; background-color: #C9EEFF; border-radius: 5%; display: flex; flex-direction: column; padding: 15px; margin-top:3%; align-items: center; justify-content: space-around;"
    cardsDiv.appendChild(card);

    let img = document.createElement("img");
    img.id = "employee-img";
    img.src = `${this.imageURL}`;
    img.style = "width: 85%; height: 65%; border-radius: 5%; margin-top: -3%;"
    card.appendChild(img);

    let div1 = document.createElement("div");
    div1.id = "info1";
    div1.style = "width: 100%; display: flex; justify-content: space-between;"
    card.appendChild(div1);

    let span1 = document.createElement("span");
    span1.id = "apan1";
    span1.innerHTML = `Name: ${this.fullName}`;
    div1.appendChild(span1);

    let span2 = document.createElement("span");
    span2.id = "apan2";
    span2.innerHTML = `ID: ${this.employeeID}`;
    div1.appendChild(span2);
    
    let div2 = document.createElement("div");
    div2.id = "info2";
    div2.style = "width: 100%; display: flex; justify-content: space-between;"
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
    salary.innerHTML = `Salary: ${this.salary}`
    card.appendChild(salary);

}


    let form1 = document.getElementById("form1");
    form1.addEventListener("submit", createNewEmployee);

    function createNewEmployee(event){

        event.preventDefault();
        
        let userName = event.target[0].value;
        let department = event.target[1].value;
        let level = event.target[2].value;

        let newEmployee = new Employee(userName, department, level); 

        newEmployee.render();
    }

