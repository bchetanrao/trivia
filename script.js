fetch('https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple')
        .then(response => response.json())
        .then(trivia => {
            console.log(trivia);
            const trivia_arr = trivia.results.map(
                ques => ques.question
            ).join("<br><br> Q- ");
            document.getElementById("ques").innerHTML += trivia_arr;

            // document.getElementById("ans").innerHTML = trivia_options_arr;
            // document.getElementById("inc_ans").innerHTML = trivia.results[0].incorrect_answers;
        })
