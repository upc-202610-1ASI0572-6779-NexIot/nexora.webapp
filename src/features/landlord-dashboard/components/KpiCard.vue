<template>
  <div :class="['kpi-card', { 'highlighted': isHighlighted }]">
    <h3 class="kpi-title">{{ title }}</h3>
    <div :class="['kpi-value', { 'text-danger': isHighlighted, 'text-primary': isPrimary }]">
      {{ value }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  highlight: {
    type: Boolean,
    default: false
  },
  primary: {
    type: Boolean,
    default: false
  }
});

const isHighlighted = computed(() => props.highlight);
const isPrimary = computed(() => props.primary);
</script>

<style scoped>
.kpi-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  border: 1px solid #eaeaea;
  flex: 1;
  min-width: 150px;
  position: relative;
}

.kpi-card.highlighted {
  border-right: 4px solid #e74c3c;
}

.kpi-title {
  font-family: var(--font-general);
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
  margin-bottom: 8px;
}

.kpi-value {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-titles);
  color: var(--secondary-color);
}

.text-danger {
  color: #e74c3c;
}

.text-primary {
  color: var(--primary-color);
}

/* Responsiveness */
@media (max-width: 480px) {
  .kpi-card {
    padding: 16px;
  }
  
  .kpi-value {
    font-size: 1.25rem;
  }
}

@media (max-width: 320px) {
  .kpi-card {
    min-width: 100%;
    width: 100%;
  }
}
</style>
