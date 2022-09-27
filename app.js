function check(){
    var score = 0;

    // Quest 1
    const rightAnswer1 = document.getElementById("ques1_ans4_right");
    if (rightAnswer1.checked == true) {
        score++;
        alert ("Your Answer Is Correct")
    } else {
        alert ("Your Answer Is Wrong")
    }

    // Quest 2
    const rightAnswer2 = document.getElementById("ques2_ans1_right")
    if (rightAnswer2.checked == true) {
        score++;
        alert ("Your Answer Is Correct")
    } else {
        alert ("Your Answer Is Wrong")
    }

    // Quest 3
    const rightAnswer3 = document.getElementById("ques3_ans4_right");
    if (rightAnswer3.checked == true) {
        score++;
        alert ("Your Answer Is Correct")
    } else {
        alert ("Your Answer Is Wrong")
    }

    // Quest 4
    const rightAnswer4 = document.getElementById("ques4_ans3_right");
    if (rightAnswer4.checked == true) {
        score++;
        alert ("Your Answer Is Correct")
    } else {
        alert ("Your Answer Is Wrong")
    }

    // Quest 5
    const rightAnswer5 = document.getElementById("ques5_ans4_right");
    if (rightAnswer5.checked == true) {
        score++;
        alert ("Your Answer Is Correct")
    } else {
        alert ("Your Answer Is Wrong")
    }

    alert(`${score} / 5`)
}