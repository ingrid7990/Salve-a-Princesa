let currentQuestionId = 'q1'; 
let princessPosition = 0;
const step = 80;
const maxPosition = 240;
let score = 0;
let lives = 3;
// let level = 1; // REMOVIDO: A variável de nível não é mais necessária

let timer;
let timeLeft = 30;

let correctAnswersCount = 0;

const princess = document.getElementById("princess");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const statusElement = document.getElementById("status");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
// const levelElement = document.getElementById("level"); // REMOVIDO
const progressElement = document.getElementById("progress"); // NOVO: Referência ao contador de progresso
const timerElement = document.getElementById("timer");
const endGameScreen = document.getElementById("end-game");
const endMessage = document.getElementById("end-message");
const medalElement = document.getElementById("medal");
const questionContainer = document.getElementById("question-container");

function startTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleIncorrectAnswer();
    }
  }, 1000);
}

function loadQuestion() {
  let q = questions[currentQuestionId]; 
  
  if (!q) {
      currentQuestionId = 'q1';
      q = questions[currentQuestionId];
  }
  
  questionElement.textContent = q.pergunta;
  answersElement.innerHTML = "";
  statusElement.textContent = ""; 
  
  q.opcoes.forEach((opcao, index) => {
    let btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => checkAnswer(index, q.correta);
    answersElement.appendChild(btn);
  });
  startTimer();
}

function handleIncorrectAnswer() {
    statusElement.textContent = "❌ Errado!";
    princessPosition += step;
    princess.style.left = princessPosition + "px";
    lives--;
    updateLives();

    if (lives <= 0) {
        loseGame();
        return false;
    }
    return true;
}

function checkAnswer(selected, correct) {
  clearInterval(timer);
  
  const currentQ = questions[currentQuestionId];

  if (selected === correct) {
    statusElement.textContent = "✅ Correto!";
    score += 10;
    correctAnswersCount++;
    updateScoreAndProgress(); // MODIFICADO: Função única para atualizar o painel

    if (correctAnswersCount >= 5) {
        winGame();
        return;
    }
    
    currentQuestionId = currentQ.proxima_correta; 
  } else {
    const gameContinues = handleIncorrectAnswer();
    if (!gameContinues) return;
    
    currentQuestionId = currentQ.proxima_errada; 
  }

  setTimeout(loadQuestion, 1200);
}

function winGame() {
    endGame(true);
}

function loseGame() {
    princess.classList.add("fall");
    setTimeout(() => endGame(false), 1200);
}

function endGame(win) {
  clearInterval(timer);
  questionContainer.style.display = 'none'; 
  answersElement.innerHTML = "";
  endGameScreen.style.display = "block";

  if (win) {
    endMessage.textContent = "🎉 Você salvou a princesa!";
    medalElement.textContent = "🏆 Herói do Reino!";
  } else {
    endMessage.textContent = "💧 A princesa caiu no mar!";
    medalElement.textContent = `Você acertou ${correctAnswersCount} de 5 perguntas.`;
  }
}

function restartGame() {
    currentQuestionId = 'q1';
    princessPosition = 0;
    score = 0;
    lives = 3;
    correctAnswersCount = 0;

    princess.style.left = "0px";
    princess.classList.remove("fall");
    updateLives();
    updateScoreAndProgress(); // MODIFICADO: Reseta o painel
    
    endGameScreen.style.display = "none";
    questionContainer.style.display = 'block';
    
    loadQuestion();
}

function updateLives() {
    livesElement.textContent = '❤️'.repeat(lives > 0 ? lives : 0);
}

// NOVO: Função para atualizar a pontuação e o progresso juntos
function updateScoreAndProgress() {
    scoreElement.textContent = score;
    progressElement.textContent = `${correctAnswersCount}/5`;
}

// Inicia o jogo
loadQuestion();
updateScoreAndProgress(); // Chama a função no início para zerar o painel
