<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
let touchStartX = 0;

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// Следим за изменением состояния меню
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    // Блокируем прокрутку страницы при открытом меню
    document.body.classList.add('no-scroll');
    // Отображаем меню и только после этого делаем его видимым для анимации
    const navElement = document.querySelector('.nav');
    if (navElement) {
      navElement.style.display = 'block';
      // Используем setTimeout для запуска анимации после отображения элемента
      setTimeout(() => {
        navElement.classList.add('open');
      }, 10);
    }
  } else {
    // Сначала запускаем анимацию закрытия
    const navElement = document.querySelector('.nav');
    if (navElement) {
      navElement.classList.remove('open');
      // Скрываем элемент только после завершения анимации
      setTimeout(() => {
        navElement.style.display = 'none';
        // Разрешаем прокрутку страницы при закрытом меню
        document.body.classList.remove('no-scroll');
      }, 300);
    }
  }
});

// Закрываем меню при изменении маршрута
watch(() => router.currentRoute.value.path, () => {
  closeMenu();
});

// Обработка свайпа для мобильных устройств
function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  if (!isMenuOpen.value) return;
  
  const touchEndX = e.touches[0].clientX;
  const diffX = touchStartX - touchEndX;
  
  // Если свайп влево более 50 пикселей, закрываем меню
  if (diffX > 50) {
    closeMenu();
  }
}

onMounted(() => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500);
  
  // Добавляем обработчики событий свайпа
  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchmove', handleTouchMove, { passive: true });
});

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <div class="app-container">
    <header class="header">
      <div class="logo-container">
        <div class="logo">
          <span class="logo-text">Курсы 5fox</span>
          <div class="logo-circle"></div>
        </div>
      </div>
      
      <button class="menu-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div class="menu-overlay" v-if="isMenuOpen" @click="closeMenu"></div>
      
      <nav class="nav" :class="{ 'open': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="route in $router.options.routes" :key="route.path">
            <router-link :to="route.path" @click="closeMenu">
              {{ route.name }}
              <div class="link-underline"></div>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <p>© 2024 Курсы. Все права защищены.</p>
      <p class="ai-signature">и этот сайт тоже сгенерирован при помощи ИИ</p>
    </footer>
  </div>
</template>

<style>
:root {
  --primary-color: #4e54c8;
  --secondary-color: #8f94fb;
  --text-color: #333;
  --background-color: #f9f9f9;
  --accent-color: #ff7675;
  --success-color: #55efc4;
  --border-radius: 8px;
  --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --transition-speed: 0.3s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(120deg, var(--background-color), #fff);
  color: var(--text-color);
  min-height: 100vh;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

body.loaded {
  opacity: 1;
}

body.no-scroll {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: var(--box-shadow);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  position: relative;
}

.logo-text {
  margin-right: 0.5rem;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  color: transparent;
  animation: colorShift 5s infinite alternate;
}

.logo-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
  animation: pulse 2s infinite;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transition: all 0.3s linear;
}

/* Анимация для кнопки меню-бургера */
.menu-toggle.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-list a {
  position: relative;
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color var(--transition-speed);
  padding: 0.5rem 0;
  overflow: hidden;
}

.nav-list a:hover {
  color: var(--primary-color);
}

.link-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  transition: width var(--transition-speed);
}

.nav-list a:hover .link-underline,
.router-link-active .link-underline {
  width: 100%;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.footer {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.875rem;
}

.ai-signature {
  margin-top: 0.5rem;
  font-style: italic;
  opacity: 0.8;
  animation: fadeInUp 1s ease-out 1s forwards;
}

/* Анимации */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes colorShift {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(90deg);
  }
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Медиа-запросы для больших экранов */
@media (min-width: 1024px) {
  .header {
    padding: 1.5rem 4rem;
  }
  
  .logo {
    font-size: 2rem;
  }
  
  .logo-circle {
    width: 16px;
    height: 16px;
  }
  
  .nav-list {
    gap: 2.5rem;
  }
  
  .nav-list a {
    font-size: 1.2rem;
    padding: 0.7rem 0;
  }
  
  .main-content {
    padding: 2rem 4rem;
    max-width: 1600px;
  }
  
  .footer {
    padding: 2rem;
    font-size: 1rem;
  }
  
  .ai-signature {
    font-size: 1rem;
  }
}

/* Медиа-запросы для адаптивного дизайна */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: white;
    box-shadow: var(--box-shadow);
    transition: all var(--transition-speed);
    z-index: 9;
    visibility: hidden;
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    display: none; /* Полностью скрываем меню с дисплея */
  }
  
  .nav.open {
    right: 0;
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
    overflow-y: auto;
    pointer-events: auto;
    display: block; /* Показываем меню */
  }
  
  .nav-list {
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    width: 100%;
  }
  
  .nav-list li {
    width: 100%;
  }
  
  .nav-list a {
    display: block;
    padding: 1rem 0;
    font-size: 1.2rem;
  }
}

/* Оверлей для затемнения фона при открытом меню */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
  animation: fadeIn 0.3s ease;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  touch-action: none; /* Предотвращаем скролл на сенсорных устройствах */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
