<template>
  <header class="dashboard-header">
    <div class="header-left">
      <button class="menu-btn" @click="$emit('toggle-sidebar')">
        <font-awesome-icon icon="bars" />
      </button>
      <h1 class="page-title">Main Dashboard</h1>
    </div>
    
    <div class="search-bar">
      <font-awesome-icon icon="magnifying-glass" class="search-icon" />
      <input type="text" placeholder="Search devices or alerts..." />
    </div>
    
    <div class="header-actions">
      <button class="icon-btn notification-btn">
        <font-awesome-icon icon="bell" />
        <span class="notification-dot"></span>
      </button>
      <button class="icon-btn">
        <font-awesome-icon icon="circle-question" />
      </button>
    </div>
  </header>
</template>

<script setup>
defineEmits(['toggle-sidebar']);
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: white;
  border-bottom: 1px solid #eaeaea;
  gap: 24px;
  height: 72px; /* Fixed height for consistent layout */
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #1a3673;
  cursor: pointer;
}

.page-title {
  font-size: 1.5rem;
  font-family: var(--font-titles, sans-serif);
  font-weight: 700;
  color: #1a3673;
  margin: 0;
  white-space: nowrap;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f8f9fc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 8px 16px;
  flex: 1;
  max-width: 400px;
  margin-right: auto;
  margin-left: 24px;
  transition: border-color 0.2s;
}

.search-bar:focus-within {
  border-color: #1a3673;
  background-color: white;
}

.search-icon {
  color: #7f8c8d;
  margin-right: 12px;
  font-size: 1rem;
}

.search-bar input {
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--font-general, sans-serif);
  color: #2c3e50;
  width: 100%;
  font-size: 0.95rem;
}

.search-bar input::placeholder {
  color: #95a5a6;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-btn {
  background: none;
  border: none;
  color: #1a3673;
  font-size: 1.25rem;
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  opacity: 0.8;
}

.notification-btn {
  position: relative;
}

.notification-dot {
  position: absolute;
  top: 0;
  right: -2px;
  width: 8px;
  height: 8px;
  background-color: #e74c3c;
  border-radius: 50%;
  border: 2px solid white;
}

/* Responsiveness */
@media (max-width: 1024px) {
  .menu-btn {
    display: block;
  }
  
  .dashboard-header {
    padding: 12px 16px;
  }
  
  .page-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .search-bar {
    display: none; /* Hide search on mobile header to save space */
  }
  
  .header-left {
    flex: 1;
  }
}
</style>
