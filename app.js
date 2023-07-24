const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["Madrid", "París", "Londres", "Berlín"],
      correctAnswer: "París"
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
      correctAnswer: "Amazonas"
    },
    {
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: ["Tierra", "Júpiter", "Marte", "Saturno"],
      correctAnswer: "Júpiter"
    }
  ];
  
  let currentQuestion = 0;
  
  function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
  
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
  
    questions[currentQuestion].options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(optionElement);
    });
  
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(selectedIndex) {
    const nextBtn = document.getElementById("nextBtn");
    const options = document.querySelectorAll(".option");
  
    options.forEach((option, index) => {
      option.style.backgroundColor = index === selectedIndex ? "#28a745" : "#dc3545";
      option.style.color = "#fff";
    });
  
    if (questions[currentQuestion].correctAnswer === questions[currentQuestion].options[selectedIndex]) {
      nextBtn.textContent = "¡Correcto! Siguiente Pregunta";
    } else {
      nextBtn.textContent = "Incorrecto, intenta de nuevo";
    }
  
    nextBtn.style.display = "block";
  }
  
  function nextQuestion() {
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "none";
    currentQuestion = (currentQuestion + 1) % questions.length;
    showQuestion();
  }
  
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  showQuestion();
  