<template>
  <div class="alerts-container">
    <div class="alerts-header">
      <font-awesome-icon icon="bell" class="header-icon" />
      <h3>Latest Alerts</h3>
    </div>
    
    <div class="alerts-list">
      <div v-for="(alert, index) in alerts" :key="index" :class="['alert-item', alert.type]">
        <div class="alert-icon-wrapper">
          <font-awesome-icon :icon="alert.icon" class="alert-icon" />
        </div>
        <div class="alert-content">
          <div class="alert-location">{{ alert.location }}</div>
          <div class="alert-problem">{{ alert.problem }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const alerts = ref([
  {
    location: 'Unit 402',
    problem: 'Unusual humidity detected',
    type: 'danger',
    icon: 'temperature-high'
  },
  {
    location: 'Basement B',
    problem: 'High humidity (Maintenance)',
    type: 'warning',
    icon: 'droplet'
  },
  {
    location: 'South Lobby',
    problem: 'Hub disconnected',
    type: 'info',
    icon: 'wifi'
  }
]);
</script>

<style scoped>
.alerts-container {
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  height: 100%;
}

.alerts-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 12px;
}

.header-icon {
  color: var(--secondary-color);
  font-size: 1.1rem;
}

.alerts-header h3 {
  font-size: 1.1rem;
  font-family: var(--font-general);
  color: var(--secondary-color);
  font-weight: 600;
  margin: 0;
}

.alerts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.alert-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 6px;
  background-color: #fcfcfc;
  border-left: 3px solid transparent;
}

.alert-item.danger {
  background-color: #fdf5f4;
  border-left-color: #e74c3c;
}
.alert-item.danger .alert-icon { color: #e74c3c; }

.alert-item.warning {
  background-color: #fbf8f1;
  border-left-color: var(--primary-color);
}
.alert-item.warning .alert-icon { color: var(--primary-color); }

.alert-item.info {
  background-color: #f5f7f2;
  border-left-color: var(--secondary-color);
}
.alert-item.info .alert-icon { color: var(--secondary-color); }

.alert-icon-wrapper {
  margin-top: 2px;
}

.alert-content {
  display: flex;
  flex-direction: column;
}

.alert-location {
  font-weight: 700;
  font-family: var(--font-titles);
  font-size: 0.95rem;
  color: var(--text-color);
}

.alert-problem {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-top: 2px;
}

/* Responsiveness */
@media (max-width: 480px) {
  .alerts-container {
    padding: 16px;
  }
  
  .alerts-header h3 {
    font-size: 1rem;
  }
  
  .alert-location {
    font-size: 0.9rem;
  }
  
  .alert-problem {
    font-size: 0.8rem;
  }
}
</style>
