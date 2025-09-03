// Показать alert при нажатии на кнопку
function showAlert() {
  alert("Добро пожаловать в курс информатики Агролицея! 🌱💻");
}

// Добавить новую тему в список
function addTopic() {
  const topics = [
    "Машинное обучение в сельском хозяйстве",
    "Работа с базами данных",
    "Робототехника",
    "Кибербезопасность"
  ];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  
  const ul = document.getElementById("topicList");
  const li = document.createElement("li");
  li.textContent = randomTopic;
  ul.appendChild(li);
}

// Обработка формы
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.querySelector("input[type='text']").value;
  alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы свяжемся с вами.`);
  this.reset();
});

// Анимация появления элементов при скролле (опционально)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, options);

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
  });
});