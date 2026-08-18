// User-defined function to calculate grade
function getGrade(average) {

    if (average >= 90) {
        return "A+";
    }
    else if (average >= 80) {
        return "A";
    }
    else if (average >= 70) {
        return "B";
    }
    else if (average >= 60) {
        return "C";
    }
    else if (average >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

// Main function
function calculateGrade() {

    // Array stores five subject marks
    let marks = [];

    // Iteration statement
    for (let i = 1; i <= 5; i++) {

        let mark = Number(
            document.getElementById("mark" + i).value
        );

        marks.push(mark);
    }

    // Calculate total using loop
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    // Calculate average
    let average = total / 5;

    // Find grade
    let grade = getGrade(average);

    // Pass if every subject is 40 or above
    let passed = true;

    for (let mark of marks) {

        if (mark < 40) {
            passed = false;
            break;
        }
    }

    let status;

    if (passed) {
        status = "PASS";
    }
    else {
        status = "FAIL";
    }

    // Display result
    document.getElementById("result").innerHTML =
        "Total Marks: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Grade: " + grade +
        "<br>Status: " + status;
}