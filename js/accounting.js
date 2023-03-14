'use strict';


const employees = JSON.parse(localStorage.getItem("employeesArr"));


let table = document.createElement("table");   
let main = document.getElementById("main");
main.appendChild(table);
table.style = " width: 650px; height: 400px;  padding: 0; margin: 0; background-color: #C9EEFF; margin-bottom: 70px; ";
document.body.appendChild(main);


// 3 functions to render a table dynamicly depending on the departments we have.

function renderTablehead() {               // render the header of the table
    
    let headTr = document.createElement("tr");     
    table.appendChild(headTr);
    const headerData = ["Department name", "# of employees", "Average salary", "Total salary"];
    for (let i = 0; i < 4; i++) {
        let th = document.createElement("th");
        th.style = "border: solid 1px black; text-align:center; vertical-align: middle; margin: 0; padding: 0; background-color: #62CDFF; color:white; font-size:17px";

        headTr.appendChild(th);
        th.textContent = headerData[i];
    }
}


function renderTablebody() {               //render the body of the table

    for (let x in employeesDeptNumber(employees)) {       

        let bodyTr = document.createElement("tr");
        table.appendChild(bodyTr);
        for (let i = 0; i < 4; i++) {
            let td = document.createElement("td");
            td.style = "border: solid 1px black; text-align:center; vertical-align: middle; margin: 0; padding: 0;";
            if (i === 0) {
                td.textContent = x;
            }
            else if (i === 1) {
                td.textContent = employeesDeptNumber(employees)[x];
            }
            else if (i === 2) {
                td.textContent = deptAveSalary(deptTotalSalary(employees), employeesDeptNumber(employees))[x];
            }
            else {
                td.textContent = deptTotalSalary(employees)[x];
            }
            bodyTr.appendChild(td);
        }
    }
}


function renderTablefoot() {                  //render the footer of the table

    let footerTr = document.createElement("tr");        
    table.appendChild(footerTr);
    const footerData = ["Total", "# of employees:", "Depts Average:", "Salaries:"];
    for (let i = 0; i < 4; i++) {
        let td = document.createElement("td");
        td.style = "border: solid 1px black; text-align:center; vertical-align: middle; margin: 0; padding: 0;    font-weight: bold; ";
        footerTr.appendChild(td);
        if (i === 0) {
            td.textContent = footerData[i];
        } else if (i === 1) {
            td.textContent = `${footerData[i]} ${totalEmployeeNum(employeesDeptNumber(employees))}`;
        } else if (i === 2) {
            td.textContent = `${footerData[i]} ${totalAverage(deptAveSalary(deptTotalSalary(employees), employeesDeptNumber(employees)))}`;
        } else if (i === 3) {
            td.textContent = `${footerData[i]} ${totalSalaries(deptTotalSalary(employees))}`;
        }
    }
}



function employeesDeptNumber(data) {

    let eachDeptEmployNum = {};
    let administration = 0;
    let marketing = 0;
    let development = 0;
    let finance = 0;

    for (let i of data) {
        (i.department === "Administration") ? administration += 1 : (i.department === "Marketing") ? marketing += 1 : (i.department === "Development") ? development += 1 : (i.department === "Finance") ? finance += 1 : null;
    }

    eachDeptEmployNum = { administration: administration, marketing: marketing, development: development, finance: finance };
    return eachDeptEmployNum;
}


function totalEmployeeNum(data) {

    let sum = 0;
    for (let i in data) {
        sum += data[i];
    }
    return sum;
}


function deptTotalSalary(data) {

    let eachDeptSalaries = {};
    let administration = 0;
    let marketing = 0;
    let development = 0;
    let finance = 0;

    for (let i of data) {
        (i.department === "Administration") ? administration += i.salary : (i.department === "Marketing") ? marketing += i.salary : (i.department === "Development") ? development += i.salary : (i.department === "Finance") ? finance += i.salary : null;
    }
    eachDeptSalaries = { administration: `${administration.toFixed(3)}`, marketing: `${marketing.toFixed(3)}`, development: `${development.toFixed(3)}`, finance: `${finance.toFixed(3)}` };
    return eachDeptSalaries;
}


function totalSalaries(data) {

    let sum = 0;
    for (let i in data) {
        sum += parseFloat(data[i]);
    }
    return sum.toFixed(3);
}


function deptAveSalary(data, num) {

    let eachDeptavg = {};
    let administration = parseFloat(data.administration) / num.administration;
    let marketing = parseFloat(data.marketing) / num.marketing;
    let development = parseFloat(data.development) / num.development;
    let finance = parseFloat(data.finance) / num.finance;

    eachDeptavg = { administration: `${administration.toFixed(3)}`, marketing: `${marketing.toFixed(3)}`, development: `${development.toFixed(3)}`, finance: `${finance.toFixed(3)}` };
    return eachDeptavg;
}

function totalAverage(data) {

    let sum = 0;
    let x = 0;
    for (let i in data) {
        x += 1;
        sum += parseFloat(data[i]);
    }
    return (sum / x).toFixed(3);
}


function webShow() {
    if (localStorage.employeesArr !== undefined) {
        renderTablehead();
        renderTablebody();
        renderTablefoot();
    } else { alert("There is no data to show, please submit your information before.") };
}

webShow();


