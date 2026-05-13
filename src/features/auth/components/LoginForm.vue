<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <!-- Email Field -->
    <div class="login-form__group">
      <label for="email" class="login-form__label">EMAIL ADDRESS</label>
      <input
          id="email"
          v-model="credentials.email"
          type="email"
          class="login-form__input"
          placeholder="name@company.com"
          required
      />
    </div>

    <!-- Password Field -->
    <div class="login-form__group">
      <div class="login-form__label-row">
        <label for="password" class="login-form__label">PASSWORD</label>
        <a href="#" class="login-form__link login-form__link--small">Forgot?</a>
      </div>
      <div class="login-form__input-wrapper">
        <input
            id="password"
            v-model="credentials.password"
            :type="showPassword ? 'text' : 'password'"
            class="login-form__input"
            placeholder="••••••••"
            required
        />
        <button
            type="button"
            @click="showPassword = !showPassword"
            class="login-form__visibility-toggle"
        >
          <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'"/>
        </button>
      </div>
    </div>

    <!-- Remember Me -->
    <div class="login-form__remember">
      <input type="checkbox" id="remember" v-model="credentials.remember"/>
      <label for="remember">Remember this device for 30 days</label>
    </div>

    <!-- Submit Button -->
    <button type="submit" class="btn--primary login-form__submit" :disabled="isLoading">
  <span v-if="!isLoading">
    AUTHENTICATE <font-awesome-icon icon="arrow-right-to-bracket"/>
  </span>
      <span v-else>PROCESSING...</span>
    </button>
  </form>
</template>

<script setup>
import {reactive, ref} from 'vue';

const props = defineProps({
  isLoading: Boolean
});

const emit = defineEmits(['login-submit']);

const showPassword = ref(false);
const credentials = reactive({
  email: '',
  password: '',
  remember: false
});

const handleSubmit = () => {
  emit('login-submit', {...credentials});
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.login-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.login-form__label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #666;
}

.login-form__label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-form__input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: var(--font-general);
}

.login-form__input-wrapper {
  position: relative;
}

.login-form__visibility-toggle {
  color: #999;
  font-size: 0.9rem;
}

.login-form__remember {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #444;
}

.login-form__submit {
  width: 100%;
  margin-top: 0.5rem;
}

.login-form__link--small {
  font-size: 0.8rem;
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
}

</style>