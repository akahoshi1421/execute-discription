function quizGenerate(n, answerNum){
    const q = [...document.querySelectorAll(`.q${n}`)];
    const qAnswer = document.querySelector(`#quiz-answer${n}`);

    q.map((one) => {
        one.addEventListener("change", () => {
            if(one.value === `q${n}-${answerNum}`){
                qAnswer.textContent = "正解です！";
            }
            else{
                qAnswer.textContent = "間違いです...";
            }
        });
    });
}

quizGenerate(1, 3);
quizGenerate(2, 1);
quizGenerate(3, 1);