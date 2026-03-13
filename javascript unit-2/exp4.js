const subjectsInput = document.getElementById("subjects");
const generateBtn = document.getElementById("generateBtn");
const marksContainer = document.getElementById("marksContainer");
const marksForm = document.getElementById("marksForm");
const calculateBtn = document.getElementById("calculateBtn");
const resultBox = document.getElementById("result");

function getGrade(average) {
  if (average >= 90) return "A+";
  if (average >= 75) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  return "F";
}

function showMessage(message) {
  resultBox.style.display = "block";
  resultBox.innerHTML = `<p>${message}</p>`;
}

function generateSubjectInputs() {
  const numberOfSubjects = Number.parseInt(subjectsInput.value, 10);

  if (
    !Number.isInteger(numberOfSubjects) ||
    numberOfSubjects < 1 ||
    numberOfSubjects > 20
  ) {
    marksContainer.innerHTML = "";
    calculateBtn.disabled = true;
    showMessage("Please enter a valid number of subjects between 1 and 20.");
    return;
  }

  let fields = "";
  for (let i = 1; i <= numberOfSubjects; i += 1) {
    fields += `
            <div class="subject-field">
                <label for="mark${i}">Subject ${i}</label>
                <input type="number" id="mark${i}" class="mark-input" min="0" max="100" step="0.01" placeholder="0 - 100" required>
            </div>
        `;
  }

  marksContainer.innerHTML = fields;
  calculateBtn.disabled = false;
  resultBox.style.display = "none";
}

function calculateresult(event) {
  if (event) {
    event.preventDefault();
  }

  const marksInputs = document.querySelectorAll(".mark-input");
  if (marksInputs.length === 0) {
    showMessage("Generate subject fields first.");
    return;
  }

  let total = 0;
  for (let i = 0; i < marksInputs.length; i += 1) {
    const value = Number.parseFloat(marksInputs[i].value);

    if (Number.isNaN(value) || value < 0 || value > 100) {
      showMessage(
        `Please enter valid marks between 0 and 100 for Subject ${i + 1}.`,
      );
      marksInputs[i].focus();
      return;
    }

    total += value;
  }

  const average = total / marksInputs.length;
  const grade = getGrade(average);
  const result = average >= 40 ? "PASS" : "FAIL";
  const statusClass = result === "PASS" ? "status-pass" : "status-fail";

  resultBox.style.display = "block";
  resultBox.innerHTML = `
        <div class="result-grid">
            <div class="metric">
                <div class="metric-title">Total Marks</div>
                <div class="metric-value">${total.toFixed(2)}</div>
            </div>
            <div class="metric">
                <div class="metric-title">Average</div>
                <div class="metric-value">${average.toFixed(2)}</div>
            </div>
            <div class="metric">
                <div class="metric-title">Grade</div>
                <div class="metric-value">${grade}</div>
            </div>
            <div class="metric">
                <div class="metric-title">Result</div>
                <div class="metric-value ${statusClass}">${result}</div>
            </div>
        </div>
    `;
}

generateBtn.addEventListener("click", generateSubjectInputs);
marksForm.addEventListener("submit", calculateresult);