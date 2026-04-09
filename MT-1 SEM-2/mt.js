function checkNumber() {
      let num = document.getElementById("numInput").value;
      let resultText = "";
      
      if (num % 2 === 0) {
        resultText = num + " is Even.";
      } else {
        resultText = num + " is Odd.";
      }
      
      document.getElementById("result").innerText = resultText;
      
      // Print numbers from 1 to num
      let output = "";
      for (let i = 1; i <= num; i++) {
        output += i + " ";
      }
      document.getElementById("list").innerText = output;
    }