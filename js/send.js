document.addEventListener("DOMContentLoaded", function () {

  const Button = document.querySelector(".btn");
  const resultPer = document.querySelector(".result");

  Button.addEventListener("click", e => {
    e.preventDefault();

    const subjects = document.querySelectorAll(".subjects");
    const creditHrs = document.querySelectorAll(".craditHours");
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    
    subjects.forEach((sub, i) => {
      const gradepoint = parseFloat(sub.value);
      const craditHours = parseFloat(creditHrs[i].value);
      
      if (!isNaN(gradepoint) && !isNaN(craditHours)) {
        totalGradePoints += gradepoint * craditHours;
        totalCredits += craditHours;
      }
    });

    if (totalCredits > 0) {
      const gpa = totalGradePoints / totalCredits;
      resultPer.classList.remove("error");
      resultPer.innerHTML = `Your GPA is <span class="print"> ${gpa.toFixed(2)} </span>`;
    } 
    else {
      resultPer.classList.add("error");
      resultPer.textContent = " Please enter valid grade points and credit hours. Search in table right.";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const calcCGPAButton = document.querySelector(".Cgpa .btn");
  const cgpaResult = document.querySelector(".Cgpa .cgpaResult");

  calcCGPAButton.addEventListener("click", function (event) {
    event.preventDefault();
    calculateCGPA();
  });

  function calculateCGPA() {
    const gpa1 = parseFloat(document.getElementById("gpa1").value);
    const creditHours1 = parseFloat(
      document.getElementById("cradithrs1").value
    );
    const gpa2 = parseFloat(document.getElementById("gpa2").value);
    const creditHours2 = parseFloat(
      document.getElementById("cradithrs2").value
    );

    if (
      !isNaN(gpa1) &&
      !isNaN(creditHours1) &&
      !isNaN(gpa2) &&
      !isNaN(creditHours2)
    ) {
      const totalPoints1 = gpa1 * creditHours1;
      const totalPoints2 = gpa2 * creditHours2;
      const totalCredits = creditHours1 + creditHours2;
      const cgpa = (totalPoints1 + totalPoints2) / totalCredits;
      cgpaResult.innerHTML = `Your CGPA is <span class="print"> ${cgpa.toFixed(2)} </span>`;
      cgpaResult.classList.remove("error");
    } else {
      cgpaResult.classList.add("error");
      cgpaResult.textContent =
        "Please enter valid GPA and Credit Hours for both semesters.";
    }
  }
});



// document.addEventListener("DOMContentLoaded", function () {

//   const Button = document.querySelector(".btn");
//   const resultPer = document.querySelector(".result");

//   Button.addEventListener("click", (e) => {
//     e.preventDefault();

//     const subjects = document.querySelectorAll(".subjects");
//     const creditHrs = document.querySelectorAll(".craditHours");
    
//     let totalGradePoints = 0;
//     let totalCredits = 0;

//     subjects.forEach((sub, i) => {
//       const gradepoint = parseFloat(sub.value);
//       const creditHour = parseFloat(creditHrs[i].value);

//       if (!isNaN(gradepoint) && !isNaN(creditHour)) {
//         totalGradePoints += gradepoint * creditHour;
//         totalCredits += creditHour;
//       }
//     });

//     if (totalCredits > 0) {
//       const gpa = totalGradePoints / totalCredits;
      
//       resultPer.innerHTML = `Your GPA is <span class="print">${gpa.toFixed(2)}</span>`;
//     } 
//     else {
//       resultPer.classList.add("error");
//       resultPer.textContent = "Please enter valid grade points and credit hours. Search in the table below.";
//     }
//   });
// });
