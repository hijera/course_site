<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);
const cards = ref([]);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 300);

  // Анимация для карточек
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  setTimeout(() => {
    document.querySelectorAll('.animate-card').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('card-visible');
      }, 150 * index);
      observer.observe(card);
    });
  }, 500);
});
</script>

<template>
  <div class="about-page" :class="{ 'loaded': isLoaded }">
    <div class="about-header">
      <div class="header-circle"></div>
      <h1 class="about-title">О наших курсах</h1>
      <div class="header-circle"></div>
    </div>

    <div class="page-content">
      <section class="about-section">
        <h2 class="section-title">Наша философия</h2>
        <div class="text-container">
          <p>
            Мы верим, что в эпоху искусственного интеллекта важно не только понимать, как использовать новые технологии, 
            но и адаптировать свой подход к обучению. Наша миссия — сделать разработку доступной для всех, кто хочет 
            создавать свои цифровые продукты.
          </p>
        </div>
      </section>

      <div class="cards-container">
        <div class="card animate-card">
          <div class="card-icon">🧠</div>
          <h3 class="card-title">Современный подход</h3>
          <p class="card-text">
            Мы используем актуальные технологии и методики, которые применяются в реальных проектах.
          </p>
        </div>

        <div class="card animate-card">
          <div class="card-icon">🚀</div>
          <h3 class="card-title">Практические навыки</h3>
          <p class="card-text">
            Каждое занятие — это практический опыт, который вы можете применить сразу же.
          </p>
        </div>

        <div class="card animate-card">
          <div class="card-icon">👨‍👩‍👧‍👦</div>
          <h3 class="card-title">Поддержка сообщества</h3>
          <p class="card-text">
            Вы становитесь частью сообщества, где можно обмениваться идеями и получать поддержку.
          </p>
        </div>

        <div class="card animate-card">
          <div class="card-icon">🔄</div>
          <h3 class="card-title">Непрерывное обновление</h3>
          <p class="card-text">
            Мы постоянно обновляем материалы курса в соответствии с развитием технологий.
          </p>
        </div>
      </div>

      <section class="faq-section">
        <h2 class="section-title">Часто задаваемые вопросы</h2>
        
        <div class="faq-container">
          <div class="faq-item animate-card">
            <h3 class="faq-question">Нужны ли мне предварительные знания для участия в курсе?</h3>
            <div class="faq-answer">
              <p>Нет, наш курс специально разработан для людей без предварительного опыта в программировании. Достаточно базовых навыков работы с компьютером и желания учиться.</p>
            </div>
          </div>
          
          <div class="faq-item animate-card">
            <h3 class="faq-question">Как проходят занятия?</h3>
            <div class="faq-answer">
              <p>Занятия проходят в формате интерактивных вебинаров 1-2 раза в неделю. Вы получаете доступ к записям уроков, практическим заданиям и дополнительным материалам.</p>
            </div>
          </div>
          
          <div class="faq-item animate-card">
            <h3 class="faq-question">Что если я пропущу занятие?</h3>
            <div class="faq-answer">
              <p>Все занятия записываются и доступны участникам курса. Вы сможете посмотреть пропущенный урок в удобное для вас время.</p>
            </div>
          </div>
          
          <div class="faq-item animate-card">
            <h3 class="faq-question">Будет ли поддержка после окончания курса?</h3>
            <div class="faq-answer">
              <p>Да, участники получают доступ к закрытому сообществу, где можно продолжать общение и получать поддержку после завершения основной программы.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-instructor">
        <div class="instructor-photo">
          <div class="photo-placeholder">
            <div class="photo-animation"></div>
          </div>
        </div>
        <div class="instructor-info">
          <h2 class="instructor-name">Антон Власов</h2>
          <p class="instructor-bio">
            Программист с 10-летним опытом разработки промышленного ПО. За годы работы участвовал в создании 
            и развитии множества проектов — от веб-приложений до сложных систем автоматизации. В последние 
            годы активно исследует применение искусственного интеллекта в разработке программного обеспечения 
            и делится полученными знаниями через образовательные программы.
          </p>
          <div class="instructor-social">
            <div class="social-link">
              <span class="social-icon">📱</span>
              <a href="https://t.me/Hijera_Tg?text=Хочу на курс!" target="_blank">Telegram: @Hijera_Tg</a>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">Готовы начать свой путь в программировании?</h2>
          <p class="cta-text">Присоединяйтесь к нашему курсу и создайте свое первое приложение уже через несколько недель!</p>
          <a href="https://t.me/Hijera_Tg?text=Хочу на курс!" class="cta-button" target="_blank">Записаться на курс</a>
        </div>
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.about-page.loaded {
  opacity: 1;
  transform: translateY(0);
}

.about-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 3rem;
  position: relative;
}

.header-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  margin: 0 1rem;
  animation: pulseCircle 2s infinite alternate;
}

@keyframes pulseCircle {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.5);
    opacity: 1;
  }
}

.about-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
  margin: 0;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
}

.about-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--primary-color), transparent);
}

.text-container {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  line-height: 1.8;
  font-size: 1.1rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.card {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(30px);
}

.card.card-visible {
  opacity: 1;
  transform: translateY(0);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
}

.faq-section {
  margin: 4rem 0;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.faq-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.faq-item:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.faq-question {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
}

.faq-question::before {
  content: '❓';
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1rem;
}

.faq-answer {
  line-height: 1.6;
  padding-left: 1.5rem;
}

.about-instructor {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin: 4rem 0;
}

.instructor-photo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(45deg, #c471ed, #f64f59);
  position: relative;
  overflow: hidden;
}

.photo-animation {
  position: absolute;
  width: 300%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    rgba(255, 255, 255, 0) 100%);
  top: 0;
  left: -200%;
  animation: shine 4s infinite;
}

@keyframes shine {
  0% {
    left: -200%;
  }
  40%, 100% {
    left: 100%;
  }
}

.instructor-name {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.instructor-bio {
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.instructor-social {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #f6f8ff, #eff3ff);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: transform 0.3s;
}

.social-link a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link:hover a {
  color: var(--primary-color);
}

.social-icon {
  margin-right: 0.5rem;
}

.cta-section {
  position: relative;
  background: linear-gradient(120deg, #4e54c8, #8f94fb);
  border-radius: var(--border-radius);
  padding: 3rem 2rem;
  margin: 4rem 0 2rem;
  color: white;
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.cta-button {
  background: white;
  color: var(--primary-color);
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.shape-1 {
  width: 150px;
  height: 150px;
  top: -30px;
  left: 10%;
  animation: float 15s ease-in-out infinite;
}

.shape-2 {
  width: 80px;
  height: 80px;
  bottom: 30px;
  right: 10%;
  animation: float 12s ease-in-out infinite 1s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 60%;
  left: 20%;
  animation: float 10s ease-in-out infinite 2s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 30%;
  right: 5%;
  animation: float 18s ease-in-out infinite 3s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-15px) rotate(3deg);
  }
}

/* Медиа-запросы */
@media (max-width: 768px) {
  .about-instructor {
    grid-template-columns: 1fr;
  }
  
  .instructor-photo {
    margin-bottom: 2rem;
  }
  
  .cards-container {
    grid-template-columns: 1fr;
  }
  
  .about-title {
    font-size: 2rem;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
}

/* Медиа-запросы для больших экранов */
@media (min-width: 1024px) {
  .about-title {
    font-size: 3rem;
  }
  
  .about-title::after {
    width: 80px;
    height: 4px;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .text-container {
    font-size: 1.3rem;
    padding: 3rem;
    max-width: 90%;
    margin: 0 auto;
  }
  
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
  
  .card {
    padding: 2.5rem;
  }
  
  .card-icon {
    font-size: 3.5rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-text {
    font-size: 1.1rem;
  }
  
  .faq-question {
    font-size: 1.4rem;
  }
  
  .faq-answer {
    font-size: 1.2rem;
  }
  
  .about-instructor {
    grid-template-columns: 1fr 3fr;
    padding: 3rem;
  }
  
  .instructor-name {
    font-size: 2.2rem;
  }
  
  .instructor-bio {
    font-size: 1.2rem;
  }
  
  .photo-placeholder {
    width: 250px;
    height: 250px;
  }
  
  .cta-section {
    padding: 4rem 3rem;
  }
  
  .cta-title {
    font-size: 2.4rem;
  }
  
  .cta-text {
    font-size: 1.4rem;
  }
  
  .cta-button {
    padding: 1.2rem 3rem;
    font-size: 1.3rem;
  }
}
</style> 