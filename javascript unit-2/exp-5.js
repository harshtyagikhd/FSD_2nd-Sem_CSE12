const employees = [];
const output = document.getElementById("output");

function getFormValues() {
    return {
        name: document.getElementById("name").value.trim(),
        id: document.getElementById("empid").value.trim(),
        salary: Number.parseFloat(document.getElementById("salary").value),
        department: document.getElementById("dept").value.trim()
    };
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function renderMessage(message) {
    output.innerHTML = `<p>${message}</p>`;
}

function renderEmployeeTable(list, heading) {
    if (list.length === 0) {
        renderMessage("No employees to display.");
        return;
    }

    let rows = "";
    for (let i = 0; i < list.length; i += 1) {
        rows += `
            <tr>
                <td>${i + 1}</td>
                <td>${list[i].name}</td>
                <td>${list[i].id}</td>
                <td>${list[i].department}</td>
                <td>${list[i].salary.toFixed(2)}</td>
            </tr>
        `;
    }

    output.innerHTML = `
        <h3>${heading}</h3>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    `;
}

function addEmployee() {
    const values = getFormValues();
    const hasInvalidInput =
        values.name === "" ||
        values.id === "" ||
        values.department === "" ||
        Number.isNaN(values.salary) ||
        values.salary < 0;

    if (hasInvalidInput) {
        renderMessage("Please fill all fields properly. Salary must be a positive number.");
        return;
    }

    const duplicateId = employees.some((employee) => employee.id === values.id);
    if (duplicateId) {
        renderMessage("Employee ID already exists. Please use a unique ID.");
        return;
    }

    employees.push(values);
    clearForm();
    renderMessage("Employee added successfully.");
}

function displayEmployees() {
    renderEmployeeTable(employees, "All Employees");
}

function filterSalary() {
    const highEarners = employees.filter((employee) => employee.salary > 50000);
    renderEmployeeTable(highEarners, "Employees with Salary > 50000");
}

function totalSalary() {
    if (employees.length === 0) {
        renderMessage("No employee data available.");
        return;
    }

    const total = employees.reduce((sum, employee) => sum + employee.salary, 0);
    renderMessage(`Total Salary: ${total.toFixed(2)}`);
}

function averageSalary() {
    if (employees.length === 0) {
        renderMessage("No employee data available.");
        return;
    }

    const total = employees.reduce((sum, employee) => sum + employee.salary, 0);
    const average = total / employees.length;
    renderMessage(`Average Salary: ${average.toFixed(2)}`);
}

function countDepartment() {
    if (employees.length === 0) {
        renderMessage("No employee data available.");
        return;
    }

    const counts = {};
    for (let i = 0; i < employees.length; i += 1) {
        const departmentName = employees[i].department;
        counts[departmentName] = (counts[departmentName] || 0) + 1;
    }

    let list = "";
    const departments = Object.keys(counts);
    for (let i = 0; i < departments.length; i += 1) {
        list += `<li>${departments[i]}: ${counts[departments[i]]}</li>`;
    }

    output.innerHTML = `
        <h3>Employee Count by Department</h3>
        <ul>${list}</ul>
    `;
}

    