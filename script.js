function filterGallery(country) {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
      if (country === 'all' || item.getAttribute('data-country') === country) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    if (!searchInput || !searchBtn) return;

   
    const countriesMap = {
        "maroc": "maroc",
        "morocco": "maroc",
        "egypte": "egypte",
        "égypte": "egypte",
        "egypt": "egypte",
        "nigeria": "nigeria",
        "kenya": "kenya",
        "afrique du sud": "afrique-du-sud",
        "south africa": "afrique-du-sud",
        "tanzania": "tanzania",
        "ethiopia": "ethiopia",
        "éthiopie": "ethiopia",
        "ghana": "ghana",
        "sénégal": "senegal",
        "senegal": "senegal",
        "tunisie": "tunisie",
        "tunisia": "tunisie"
    };

    function searchCountry() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;


        const anchor = countriesMap[query];
        if (anchor) {
            window.location.href = `countries.html#${anchor}`;
        } else {
            alert("Aucun pays trouvé !");
        }
    }

    searchBtn.addEventListener("click", searchCountry);
    searchInput.addEventListener("keypress", e => {
        if (e.key === "Enter") searchCountry();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav) {
        header.appendChild(hamburger);
        
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
        
  
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
      const quizQuestions = [
        {
          question: "Quelle est la capitale du Maroc?",
          options: ["Casablanca", "Rabat", "Marrakech", "Fès"],
          correct: 1,
          explanation: "Rabat est la capitale administrative du Maroc depuis 1912."
        },
        {
          question: "Quel pays est connu comme le berceau de l'humanité?",
          options: ["Égypte", "Éthiopie", "Afrique du Sud", "Kenya"],
          correct: 1,
          explanation: "L'Éthiopie est considérée comme le berceau de l'humanité avec la découverte de Lucy."
        },
        {
          question: "Quelle est la monnaie du Nigeria?",
          options: ["Shilling", "Naira", "Cedi", "Dirham"],
          correct: 1,
          explanation: "Le Naira est la monnaie officielle du Nigeria depuis 1973."
        },
        {
          question: "Quel fleuve est le plus long d'Afrique?",
          options: ["Congo", "Niger", "Nil", "Zambèze"],
          correct: 2,
          explanation: "Le Nil est le plus long fleuve d'Afrique avec environ 6 650 km."
        },
        {
          question: "Dans quel pays se trouve le parc national du Serengeti?",
          options: ["Kenya", "Tanzanie", "Afrique du Sud", "Botswana"],
          correct: 1,
          explanation: "Le parc national du Serengeti est situé en Tanzanie."
        },
        {
          question: "Quelle langue est parlée au Sénégal comme langue officielle?",
          options: ["Anglais", "Portugais", "Français", "Espagnol"],
          correct: 2,
          explanation: "Le français est la langue officielle du Sénégal, héritage de la colonisation."
        },
        {
          question: "Quel pays africain a le plus grand nombre de pyramides?",
          options: ["Égypte", "Soudan", "Maroc", "Algérie"],
          correct: 1,
          explanation: "Le Soudan possède plus de 200 pyramides, plus que l'Égypte."
        },
        {
          question: "Quelle est la capitale de l'Afrique du Sud?",
          options: ["Johannesburg", "Le Cap", "Pretoria", "Trois capitales: Pretoria, Le Cap, Bloemfontein"],
          correct: 3,
          explanation: "L'Afrique du Sud a trois capitales: Pretoria (administrative), Le Cap (législative), Bloemfontein (judiciaire)."
        },
        {
          question: "De quel pays le plat 'Jollof Rice' est-il originaire?",
          options: ["Nigeria", "Ghana", "Sénégal", "Côte d'Ivoire"],
          correct: 0,
          explanation: "Le Jollof Rice est originaire du Nigeria, bien que plusieurs pays d'Afrique de l'Ouest le revendiquent."
        },
        {
          question: "Quel est le plus grand désert d'Afrique?",
          options: ["Désert de Kalahari", "Désert du Namib", "Désert du Sahara", "Désert de Libye"],
          correct: 2,
          explanation: "Le Sahara est le plus grand désert chaud du monde, couvrant la majeure partie de l'Afrique du Nord."
        }
      ];

      const submitBtn = document.getElementById('submit-quiz');
      const retryBtn = document.getElementById('retry-quiz');
      const quizContainer = document.getElementById('quiz');
      const resultsContainer = document.getElementById('quiz-results');
      const scoreElement = document.getElementById('score');
      const feedbackElement = document.getElementById('feedback');

      function calculateScore() {
        let score = 0;
        const userAnswers = [];
        
        quizQuestions.forEach((question, index) => {
          const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
          const questionElement = document.querySelectorAll('.question')[index];
          
          if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value);
            const isCorrect = userAnswer === question.correct;
            
            if (isCorrect) {
              score++;
              questionElement.style.borderLeftColor = '#4CAF50';
            } else {
              questionElement.style.borderLeftColor = '#F44336';
            }
            
            userAnswers.push({
              question: question.question,
              userAnswer: question.options[userAnswer],
              correctAnswer: question.options[question.correct],
              isCorrect: isCorrect,
              explanation: question.explanation
            });
          } else {
            questionElement.style.borderLeftColor = '#FF9800';
            userAnswers.push({
              question: question.question,
              userAnswer: "Non répondue",
              correctAnswer: question.options[question.correct],
              isCorrect: false,
              explanation: question.explanation
            });
          }
        });
        
        return { score, userAnswers };
      }

      function displayResults(score, userAnswers) {
        scoreElement.textContent = score;
        
        let feedbackHTML = `<p>Vous avez obtenu <strong>${score} sur ${quizQuestions.length}</strong> réponses correctes.</p>`;
        
        if (score >= 8) {
          feedbackHTML += `<p class="excellent">🎉 Excellent! Vous connaissez très bien l'Afrique!</p>`;
        } else if (score >= 5) {
          feedbackHTML += `<p class="good">👍 Bon score! Continuez à apprendre sur l'Afrique.</p>`;
        } else {
          feedbackHTML += `<p class="average">💪 Continuez à explorer notre site pour améliorer vos connaissances!</p>`;
        }
        
        feedbackHTML += `<div class="answers-details">`;
        feedbackHTML += `<h4>Détails de vos réponses:</h4>`;
        
        userAnswers.forEach((answer, index) => {
          feedbackHTML += `
            <div class="answer-detail ${answer.isCorrect ? 'correct' : 'incorrect'}">
              <p><strong>Question ${index + 1}:</strong> ${answer.question}</p>
              <p>Votre réponse: <span class="${answer.isCorrect ? 'correct-text' : 'incorrect-text'}">${answer.userAnswer}</span></p>
              ${!answer.isCorrect ? `<p>Réponse correcte: <span class="correct-answer">${answer.correctAnswer}</span></p>` : ''}
              <p class="explanation">💡 ${answer.explanation}</p>
            </div>
          `;
        });
        
        feedbackHTML += `</div>`;
        feedbackElement.innerHTML = feedbackHTML;
        
        quizContainer.style.display = 'none';
        submitBtn.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        saveScoreToLocalStorage(score);
      }

      function saveScoreToLocalStorage(score) {
        const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
        scores.push({
          date: new Date().toLocaleString(),
          score: score,
          total: quizQuestions.length
        });
        localStorage.setItem('quizScores', JSON.stringify(scores));
      }

      function resetQuiz() {
        document.querySelectorAll('input[type="radio"]').forEach(input => {
          input.checked = false;
        });
        
        document.querySelectorAll('.question').forEach(question => {
          question.style.borderLeftColor = '#2c5aa0';
        });
        
        quizContainer.style.display = 'block';
        submitBtn.style.display = 'block';
        resultsContainer.style.display = 'none';
      }

      function shareScore() {
        const score = scoreElement.textContent;
        const shareText = `J'ai obtenu ${score}/10 au quiz sur l'Afrique! Testez vos connaissances: ${window.location.href}`;
        
        if (navigator.share) {
          navigator.share({
            title: 'Quiz sur l\'Afrique',
            text: shareText,
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(shareText).then(() => {
            alert('Score copié dans le presse-papier!');
          });
        }
      }

      submitBtn.addEventListener('click', function() {
        const { score, userAnswers } = calculateScore();
        displayResults(score, userAnswers);
      });

      if (retryBtn) {
        retryBtn.addEventListener('click', resetQuiz);
      }

      if (shareBtn) {
        shareBtn.addEventListener('click', shareScore);
      }

      document.querySelectorAll('.options label').forEach(label => {
        label.addEventListener('click', function() {
          const question = this.closest('.question');
          const labels = question.querySelectorAll('label');
          labels.forEach(l => l.classList.remove('selected'));
          this.classList.add('selected');
        });
      });

      const lastScore = JSON.parse(localStorage.getItem('quizScores'));
      if (lastScore && lastScore.length > 0) {
        const last = lastScore[lastScore.length - 1];
        const statsItem = document.querySelector('.stat-item:nth-child(4) .stat-number');
        if (statsItem) {
          const average = Math.round((lastScore.reduce((acc, s) => acc + s.score, 0) / lastScore.length) / quizQuestions.length * 100);
          statsItem.textContent = `${average}%`;
        }
      }
    });