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
            <li class="nav-item">
                <router-link to="/products" class="nav-link">Products</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="sass" src="./styles/navbar.sass" scoped>
</style>
