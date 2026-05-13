<template>
  <div class="login-page">
    <div class="login-container">
      <!-- =========================================================
        Left Branding Panel
        Displays corporate identity and system status information.
      ========================================================== -->
      <aside class="login-panel">
        <div class="login-panel__content">
          <AppLogo
              width="200px"
              class="login-panel__logo"
          />

          <p class="login-panel__tagline">
            Intelligence for the Industrial Frontier.
          </p>
        </div>

        <div class="login-panel__footer">
          <font-awesome-icon
              icon="circle-check"
              class="login-panel__status-icon"
          />

          <span>SYSTEM OPERATIONAL</span>
        </div>
      </aside>

      <!-- =========================================================
        Login Content Section
        Contains authentication form and user feedback messages.
      ========================================================== -->
      <main class="login-content">
        <header class="login-content__header">
          <h1 class="login-content__title">
            Login
          </h1>

          <p class="login-content__subtitle">
            Access your property management dashboard
          </p>
        </header>

        <!-- =========================================================
          Authentication Error Alert
          Displayed when the authentication store returns an error.
        ========================================================== -->
        <div
            v-if="authStore.status === 'error'"
            class="login-alert login-alert--error"
        >
          <div class="login-alert__icon">
            <font-awesome-icon icon="triangle-exclamation" />
          </div>

          <div class="login-alert__body">
            <p>
              Access denied: Invalid credentials or expired session.
              Please verify your information and try again.
            </p>

            <a
                href="#"
                class="login-alert__link"
            >
              View support details →
            </a>
          </div>
        </div>

        <!-- =========================================================
          Login Form Component
          Emits login-submit event with user credentials.
        ========================================================== -->
        <LoginForm
            :is-loading="authStore.isLoading"
            @login-submit="handleLogin"
        />

        <footer class="login-content__footer">
          <p>
            New to Nexora?
            <a
                href="#"
                class="login-content__link"
            >
              Register your property
            </a>
          </p>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
/* ================================================================
  Components
================================================================ */
import AppLogo from '@/components/AppLogo.vue';
import LoginForm from '../components/LoginForm.vue';

/* ================================================================
  Stores
================================================================ */
import { useAuthStore } from '../store/authStore';

/* ================================================================
  Vue Router
================================================================ */
import { useRouter } from 'vue-router';

/* ================================================================
  Store & Router Instances
================================================================ */
const authStore = useAuthStore();
const router = useRouter();

/* ================================================================
  Methods
================================================================ */

/**
 * Handles user authentication flow.
 *
 * Responsibilities:
 * - Sends user credentials to the authentication store.
 * - Redirects the user to the dashboard after successful login.
 * - Captures and logs authentication errors.
 *
 * @async
 * @function handleLogin
 * @param {Object} credentials - User login credentials.
 * @param {string} credentials.email - User email address.
 * @param {string} credentials.password - User password.
 *
 * @returns {Promise<void>}
 */
const handleLogin = async (credentials) => {
  try {
    await authStore.login(credentials);

    router.push({
      name: 'dashboard',
    });
  } catch (error) {
    console.error('Login error:', error.message);
  }
};
</script>

<style scoped>
/* ================================================================
  Layout: Main Page Wrapper
================================================================ */
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background-color: #f0f2f5;
}

/* ================================================================
  Login Card Container
================================================================ */
.login-container {
  display: flex;

  width: 100%;
  max-width: 1000px;
  min-height: 600px;

  overflow: hidden;

  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* ================================================================
  Left Panel (Branding / Hero Section)
================================================================ */
.login-panel {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 4rem;

  color: #ffffff;

  /* Corporate gradient overlay + background image */
  background:
      linear-gradient(
          rgba(23, 49, 131, 0.9),
          rgba(23, 49, 131, 0.9)
      ),
      url('@/assets/login-bg.jpg') center / cover;
}

.login-panel__logo {
  margin-bottom: 1.5rem;

  /* Force white logo color for dark background */
  color: #ffffff !important;
}

.login-panel__tagline {
  font-family: var(--font-titles);
  font-size: 1.2rem;
  line-height: 1.4;

  opacity: 0.9;
}

.login-panel__footer {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.login-panel__status-icon {
  color: #00ff88;
}

/* ================================================================
  Right Panel (Authentication Area)
================================================================ */
.login-content {
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 4rem;
}

.login-content__title {
  margin-bottom: 0.5rem;

  font-size: 2.5rem;
  color: var(--secondary-color);
}

.login-content__subtitle {
  margin-bottom: 2rem;

  color: #666666;
}

/* ================================================================
  Alert Component
================================================================ */
.login-alert {
  display: flex;
  gap: 1rem;

  margin-bottom: 2rem;
  padding: 1.2rem;

  background: #fff1f0;
  border-left: 4px solid #ff4d4f;
  border-radius: 4px;
}

.login-alert__icon {
  font-size: 1.2rem;
  color: #ff4d4f;
}

.login-alert__body p {
  margin: 0;

  font-size: 0.9rem;
  color: #444444;
}

.login-alert__link {
  display: inline-block;

  margin-top: 0.5rem;

  font-size: 0.85rem;
  font-weight: 700;

  color: var(--secondary-color);
  text-decoration: none;
}

/* ================================================================
  Footer Section
================================================================ */
.login-content__footer {
  margin-top: 3rem;
  padding-top: 2rem;

  text-align: center;
  font-size: 0.9rem;

  border-top: 1px solid #eeeeee;
}

.login-content__link {
  font-weight: 700;

  color: var(--secondary-color);
  text-decoration: none;
}

/* ================================================================
  Responsive Design
================================================================ */
@media (max-width: 850px) {
  /*
    Hide branding panel on smaller screens
    to prioritize form usability.
  */
  .login-panel {
    display: none;
  }

  .login-container {
    max-width: 500px;
    min-height: auto;
  }

  .login-content {
    padding: 2.5rem;
  }
}
</style>