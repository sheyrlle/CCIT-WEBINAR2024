const quiz = [
    {
      "subject": "Sport",
      "quiz": [
        {
          "question": "Which one is correct team name in NBA?",
          "options": [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket"
          ],
          "answer": "Huston Rocket"
        }
      ]
    },
    {
      "subject": "Math",
      "quiz": [
        {
          "question": "5 + 7 = ?",
          "options": [
            "10",
            "11",
            "12",
            "13"
          ],
          "answer": "12"
        },
        {
          "question": "12 - 8 = ?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": "4"
        }
      ]
    }
  ];

  for (let i = 0; i < quiz.length; i++) {
    console.log("Subject: " + quiz[i].subject);
    for (let j = 0; j < quiz[i].quiz.length; j++) {
      console.log("Question " + (j + 1) + ": " + quiz[i].quiz[j].question);
      console.log("Answer: " + quiz[i].quiz[j].answer);
      console.log("-----------------------");
    }
  }

  