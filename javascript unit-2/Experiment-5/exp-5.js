let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let empId = document.getElementById("empId").value.trim();
    let salaryInput = document.getElementById("salary").value;
    let dept = document.getElementById("dept").value.trim();

    if (name === "" || empId === "" || salaryInput === "" || dept === "") {
        alert("Please fill all fields properly");
        return;
    }

    let salary = parseFloat(salaryInput);

    if (salary < 0) {
        alert("Salary cannot be negative");
        return;
    }

    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: dept
    };

    employees.push(employee);

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    let output = "<h3>All Employees</h3>";

    if (employees.length === 0) {
        output += "No records found";
    }

    employees.forEach(emp => {
        output += `
            Name: ${emp.name} |
            ID: ${emp.id} |
            Salary: ₹${emp.salary} |
            Dept: ${emp.department} <br>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "<h3>Employees with Salary > ₹50,000</h3>";

    if (filtered.length === 0) {
        output += "No employees found";
    }

    filtered.forEach(emp => {
        output += `
            Name: ${emp.name} |
            Salary: ₹${emp.salary} <br>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("output").innerHTML =
        "<h3>Total Salary Payout: ₹" + total + "</h3>";
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML =
            "<h3>No employee records available</h3>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}

function countDepartment() {
    let deptName = prompt("Enter Department Name:");

    if (deptName === null || deptName.trim() === "") {
        alert("Invalid department name");
        return;
    }

    let count = employees.filter(emp => emp.department === deptName).length;

    document.getElementById("output").innerHTML =
        "<h3>Employees in " + deptName + ": " + count + "</h3>";
}