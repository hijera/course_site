<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const animatedItems = ref([]);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Наблюдать за всеми элементами с классом 'animate-on-scroll'
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
  }, 100);
});
</script>

<template>
  <div class="course-page" :class="{ 'visible': isVisible }">
    <section class="hero animate-on-scroll">
      <div class="stars-container">
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
      </div>
      <div class="hero-content">
        <h1 class="title">✨ СОЗДАЙТЕ СВОИ ПЕРВЫЕ ПРИЛОЖЕНИЯ С ПОМОЩЬЮ ИИ!</h1>
        <h2 class="subtitle">Курс "Разработка для Каждого"</h2>
        <div class="hero-text">
          <p>Искусственный интеллект изменил подход как к нашей жизни, так и к разработке, но важно понимать как его реальные возможности, так и ограничения.</p>
        </div>
        <div class="cta-container">
          <button class="cta-button">Записаться на курс</button>
        </div>
      </div>
    </section>

    <section class="about-course animate-on-scroll">
      <div class="section-icon">💡</div>
      <h2 class="section-title">О чём этот курс?</h2>
      <p class="section-text">
        Современный "вайб-кодинг" позволяет людям без профессиональных навыков программирования создавать работающие приложения. Вы научитесь направлять ИИ на создание кода под ваши задачи, но при этом получите базовое понимание программирования — это необходимо для эффективной работы.
      </p>
    </section>

    <section class="warning animate-on-scroll">
      <div class="section-icon">⚠️</div>
      <h2 class="section-title">Без иллюзий:</h2>
      <p class="section-text">
        ИИ не заменит программиста полностью. Вам потребуется понимать основные принципы кода, чтобы оценивать результат, вносить правки и развивать свои проекты. Но хорошая новость: порог входа стал намного ниже, и теперь создание своих приложений доступно даже людям, далеким от ИТ.
      </p>
    </section>

    <section class="instructor animate-on-scroll">
      <div class="section-icon">👨‍💻</div>
      <h2 class="section-title">Кто ведёт курс?</h2>
      <p class="section-text">
        Я – Антон Власов, программист с 10-летним опытом разработки промышленного ПО. Хорошо понимаю, как совместить возможности ИИ с базовыми знаниями программирования для достижения результатов.
      </p>
      <div class="instructor-avatar">
        <div class="avatar-circle"></div>
      </div>
    </section>

    <section class="course-benefits animate-on-scroll">
      <div class="section-icon">📚</div>
      <h2 class="section-title">Чему вы научитесь за 8 занятий:</h2>
      <ul class="benefits-list">
        <li class="benefit-item">Базовому пониманию программирования и его логики</li>
        <li class="benefit-item">Эффективным методам коммуникации с ИИ для генерации кода (промпт-инженерингу)</li>
        <li class="benefit-item">Анализу и доработке сгенерированного кода</li>
        <li class="benefit-item">Основам защиты приложений от уязвимостей</li>
        <li class="benefit-item">Созданию простых, но рабочих приложений с минимальным написанием кода</li>
      </ul>
      <p class="benefits-footer">По итогам курса вы сможете реализовать свои идеи, для которых раньше требовалась помощь программиста.</p>
    </section>

    <section class="course-projects animate-on-scroll">
      <div class="section-icon">✅</div>
      <h2 class="section-title">На практике вы создадите:</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-icon">🌐</div>
          <h3>Небольшой вебсайт</h3>
        </div>
        <div class="project-card">
          <div class="project-icon">📱</div>
          <h3>Прототип Telegram-WebApp</h3>
        </div>
        <div class="project-card">
          <div class="project-icon">💹</div>
          <h3>Калькулятор курса валют</h3>
        </div>
        <div class="project-card">
          <div class="project-icon">🤖</div>
          <h3>Telegram-бота для подсчета доходов и расходов</h3>
        </div>
      </div>
      <p>И многое другое.</p>
    </section>

    <section class="target-audience animate-on-scroll">
      <div class="section-icon">🎯</div>
      <h2 class="section-title">Для кого этот курс?</h2>
      <p class="section-text">
        Для людей с базовыми навыками работы на компьютере, готовых немного погрузиться в мир программирования. Вы не станете профессиональным разработчиком за 8 занятий, но сможете реализовать свои первые проекты с минимальным порогом входа, но с использованием современных технологий. ИИ станет вашим помощником и сотрудником, выполняющим ваши указания по разработке.
      </p>
    </section>

    <section class="course-cost animate-on-scroll">
      <div class="section-icon">💸</div>
      <h2 class="section-title">Инвестиции в ваше будущее:</h2>
      <ul class="cost-list">
        <li class="cost-item">Стоимость курса: 15 000 ₽</li>
        <li class="cost-item">Подписка на ПО Cursor: около 2 300 ₽ (на месяц) (но вы можете оплатить сами)</li>
        <li class="cost-item">Аренда хостинга (необходимо для последнего домашнего задания) - около 300 рублей (но вы можете выбрать любой и оплатить сами)</li>
      </ul>
    </section>

    <section class="course-disclaimers animate-on-scroll">
      <div class="section-icon">🤔</div>
      <h2 class="section-title">Чего НЕ стоит ожидать от курса:</h2>
      <ul class="disclaimer-list">
        <li class="disclaimer-item">Вы не сможете создавать сложные коммерческие системы</li>
        <li class="disclaimer-item">Вам всё-таки придётся немного разобраться в коде</li>
        <li class="disclaimer-item">ИИ не всегда даёт идеальные решения с первого раза</li>
      </ul>
    </section>

    <section class="course-start animate-on-scroll">
      <div class="section-icon">⏰</div>
      <h2 class="section-title">Старт курса: 25 апреля</h2>
      <p class="section-text">Количество мест ограничено 10 участниками.</p>
      <p class="section-text">Формат: вебинары 1-2 раза в неделю</p>
      <div class="registration-info">
        <p>Для записи напишите в личные сообщения (@Hijera_Tg): "Хочу на курс"</p>
      </div>
      <div class="hashtags">
        <span class="hashtag">#вайбкодинг</span>
        <span class="hashtag">#разработкаСИИ</span>
        <span class="hashtag">#программирование</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.course-page {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.course-page.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero {
  position: relative;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(125deg, #2c3e50, #0a2342);
  z-index: -1;
}

@keyframes animateStars {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1000px);
  }
}

.stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.stars {
  background-image: radial-gradient(2px 2px at 20px 30px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(2px 2px at 40px 70px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(2px 2px at 50px 160px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(2px 2px at 90px 40px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(2px 2px at 130px 80px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(2px 2px at 160px 120px, white, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: animateStars 100s linear infinite;
}

.stars2 {
  background-image: radial-gradient(1px 1px at 25px 5px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(1px 1px at 50px 25px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(1px 1px at 125px 20px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(1px 1px at 150px 50px, white, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 150px 150px;
  animation: animateStars 150s linear infinite;
}

.stars3 {
  background-image: radial-gradient(1px 1px at 10px 10px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(1px 1px at 150px 150px, white, rgba(0, 0, 0, 0)),
                    radial-gradient(1px 1px at 100px 100px, white, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: animateStars 50s linear infinite;
}

.hero-content {
  padding: 2rem;
  max-width: 800px;
  z-index: 1;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fff, #74ebd5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: titleGlow 5s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  from {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
}

.subtitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #acb6e5;
}

.hero-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-container {
  margin-top: 2rem;
}

.cta-button {
  background: linear-gradient(45deg, #4e54c8, #8f94fb);
  border: none;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

section {
  margin: 6rem 0;
  padding: 2rem;
  border-radius: var(--border-radius);
  background: white;
  box-shadow: var(--box-shadow);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

section.animated-in {
  opacity: 1;
  transform: translateY(0);
}

.section-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.section-title {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--primary-color), transparent);
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.instructor-avatar {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.avatar-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg, #c471ed, #f64f59);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: avatarPulse 3s infinite alternate;
}

@keyframes avatarPulse {
  from {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: scale(1);
  }
  to {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
  }
}

.benefits-list, .cost-list, .disclaimer-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.benefit-item, .cost-item, .disclaimer-item {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  background: rgba(78, 84, 200, 0.05);
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.benefit-item:hover, .cost-item:hover, .disclaimer-item:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.benefit-item::before, .cost-item::before, .disclaimer-item::before {
  content: '→';
  position: absolute;
  left: 0.5rem;
  color: var(--primary-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.project-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.2rem;
  margin: 0;
  color: var(--text-color);
}

.registration-info {
  background: linear-gradient(45deg, #f6f8ff, #eff3ff);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin: 2rem 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-weight: 500;
}

.hashtags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.hashtag {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
}

/* Медиа-запросы */
@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1.4rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .hero {
    height: 70vh;
  }
}

/* Медиа-запросы для больших экранов */
@media (min-width: 1024px) {
  .hero-content {
    max-width: 1000px;
  }
  
  .title {
    font-size: 3.2rem;
  }
  
  .subtitle {
    font-size: 2.2rem;
  }
  
  .hero-text {
    font-size: 1.4rem;
    max-width: 80%;
    margin: 0 auto 2rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .section-text {
    font-size: 1.3rem;
    line-height: 1.8;
  }
  
  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  section {
    padding: 3rem 4rem;
    margin: 8rem auto;
    max-width: 1200px;
    width: 90%;
  }
  
  .benefit-item, .cost-item, .disclaimer-item {
    padding: 1.5rem 2rem;
    font-size: 1.2rem;
  }
}
</style> 