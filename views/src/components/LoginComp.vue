<script>
export default {
    name: 'LoginComp',
    data() {
        return {
            email: '',
            pwd: ''
        };
    },
    methods: {
        submitForm() {
            console.log(this.email, this.pwd);
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <input type="email" id="email" v-model="email" placeholder="Email..." required />
            </div>

            <div class="form-group">
                <input type="password" id="pwd" placeholder="Password..." v-model="pwd" required />
            </div>

            <button type="submit" class="submit-button">Sign Up</button>
        </form>
    </div>
</template>

<style lang="sass" src="./styles/register.sass" scoped></style>