const questions = [
  {
    question:
      "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
    answers: { a: "1911", b: "1912", c: "1913" },
    correctAnswer: "b",
  },
  {
    question:
      "What is the title of the first ever Carry On film made and released in 1958?",
    answers: {
      a: "Carry on Sergeant",
      b: "Carry on Camping",
      c: "Carry on Nurse",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What is the name of the biggest technology company in South Korea?",
    answers: { a: "Samsung", b: "Toshiba", c: "Sony" },
    correctAnswer: "a",
  },
];

const questionList = document.getElementById("questionList"); // this assigns the html element "questionList to a JS variable of the same name"

function importQuestion(questions) {
  // this doesn't work, sorry!
  const li = document.createElement("li");
  li.innterText = questions;
  list.appendChild(li);
}

questions.forEach(importQuestion); // iterates over the question array and runs the function for each object in the array
