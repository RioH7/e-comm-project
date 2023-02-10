<template>
    <nav>
        <ul class="nav-list">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/login" class="nav-link">Log In</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/register" class="nav-link">Sign Up</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-right: 1rem;
}

.nav-link {
  color: #333;
  text-decoration: none;
}
</style>
