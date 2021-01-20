var submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    this.CalculateGrade();
});

function CalculateGrade() {

    /*get all of the inputs from the form and store them to variables*/

    var iAssignmentScore = parseInt(document.getElementById("assignmentsPercent").value);
    var iGroupProjectScore = parseInt(document.getElementById("GroupProjectPercent").value);
    var iQuizzesScore = parseInt(document.getElementById("QuizzesPercent").value);
    var iExamsScore = parseInt(document.getElementById("ExamsPercent").value);
    var iIntexScore = parseInt(document.getElementById("IntexPercent").value);
    var iFinalGrade = 0;
    var iLetterGrade = '';

    //calculate the final grade percent and letter

    iFinalGrade = iAssignmentScore + iGroupProjectScore + iQuizzesScore + iExamsScore + iIntexScore;

    if (iFinalGrade >= 94) {
        iLetterGrade = "A"
    }
    else if (iFinalGrade >= 90) {
        iLetterGrade = "A-"
    }
    else if (iFinalGrade >= 87) {
        iLetterGrade = "B+"
    }
    else if (iFinalGrade >= 84) {
        iLetterGrade = "B"
    }
    else if (iFinalGrade >= 80) {
        iLetterGrade = "B-"
    }
    else if (iFinalGrade >= 77) {
        iLetterGrade = "C+"
    }
    else if (iFinalGrade >= 74) {
        iLetterGrade = "C"
    }
    else if (iFinalGrade >= 70) {
        iLetterGrade = "C-"
    }
    else if (iFinalGrade >= 67) {
        iLetterGrade = "D+"
    }
    else if (iFinalGrade >= 64) {
        iLetterGrade = "D"
    }
    else if (iFinalGrade >= 60) {
        iLetterGrade = "D-"
    }
    else {
        iLetterGrade = "E"
    }

    //output the calculated grades into the p tag id=output

    var output = "Final Percent Grade:<br><br> " + iFinalGrade + "%<br><br>" + "Final Letter Grade:<br><br> " + iLetterGrade; 

    document.getElementById("output").innerHTML = output;
    
}
