const students = [];
const output = document.getElementById("output");

function getInputValues() {
    return {
        name: document.getElementById("studentName").value.trim(),
        rollNumber: document.getElementById("rollNumber").value.trim(),
        math: Number.parseFloat(document.getElementById("mathMarks").value),
        science: Number.parseFloat(document.getElementById("scienceMarks").value),
        english: Number.parseFloat(document.getElementById("englishMarks").value)
    };
}

function clearInputs() {
    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";
    document.getElementById("mathMarks").value = "";
    document.getElementById("scienceMarks").value = "";
    document.getElementById("englishMarks").value = "";
}

function isValidMark(mark) {
    return !Number.isNaN(mark) && mark >= 0 && mark <= 100;
}

function calculateTotal(student) {
    return student.math + student.science + student.english;
}

function calculateAverage(student) {
    return calculateTotal(student) / 3;
}

function addStudent() {
    const values = getInputValues();

    if (
        values.name === "" ||
        values.rollNumber === "" ||
        !isValidMark(values.math) ||
        !isValidMark(values.science) ||
        !isValidMark(values.english)
    ) {
        output.innerHTML = "<p>Please enter valid details. Marks should be between 0 and 100.</p>";
        return;
    }

    const duplicateRoll = students.some((student) => student.rollNumber === values.rollNumber);
    if (duplicateRoll) {
        output.innerHTML = "<p>Roll number already exists. Please enter a unique roll number.</p>";
        return;
    }

    students.push(values);
    clearInputs();
    output.innerHTML = "<p class=\"highlight\">Student added successfully.</p>";
}

function renderTable(studentList, title) {
    if (studentList.length === 0) {
        output.innerHTML = "<p>No student records available.</p>";
        return;
    }

    let rows = "";
    let index = 1;
    for (const student of studentList) {
        const total = calculateTotal(student);
        const average = calculateAverage(student);
        const statusClass = average < 40 ? "fail" : "highlight";
        const statusText = average < 40 ? "FAIL" : "PASS";

        rows += `
            <tr>
                <td>${index}</td>
                <td>${student.name}</td>
                <td>${student.rollNumber}</td>
                <td>${student.math.toFixed(2)}</td>
                <td>${student.science.toFixed(2)}</td>
                <td>${student.english.toFixed(2)}</td>
                <td>${total.toFixed(2)}</td>
                <td>${average.toFixed(2)}</td>
                <td class="${statusClass}">${statusText}</td>
            </tr>
        `;
        index += 1;
    }

    output.innerHTML = `
        <h3>${title}</h3>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Math</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Total</th>
                        <th>Average</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

function displayAllStudents() {
    renderTable(students, "All Students");
}

function showTotalMarks() {
    if (students.length === 0) {
        output.innerHTML = "<p>No student records available.</p>";
        return;
    }

    const list = students
        .map((student) => `${student.name} (${student.rollNumber}): ${calculateTotal(student).toFixed(2)}`)
        .join("</li><li>");

    output.innerHTML = `<h3>Total Marks</h3><ul><li>${list}</li></ul>`;
}

function showAverageMarks() {
    if (students.length === 0) {
        output.innerHTML = "<p>No student records available.</p>";
        return;
    }

    const list = students
        .map((student) => `${student.name} (${student.rollNumber}): ${calculateAverage(student).toFixed(2)}`)
        .join("</li><li>");

    output.innerHTML = `<h3>Average Marks</h3><ul><li>${list}</li></ul>`;
}

function showAbove80() {
    const topperStudents = students.filter((student) => calculateAverage(student) > 80);
    renderTable(topperStudents, "Students with Average Above 80");
}

function showFailedStudents() {
    const failedStudents = students.filter((student) => calculateAverage(student) < 40);
    renderTable(failedStudents, "Failed Students (Average < 40)");
}

function showStudentCount() {
    output.innerHTML = `<h3>Total Number of Students: ${students.length}</h3>`;
}