<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <h1 class="title">Sign Up</h1>
            <div class="form-group">
                <input type="text" id="name" v-model="name" placeholder="Name..." required />
            </div>
            <div class="form-group">
                <input type="text" id="email" v-model="email" placeholder="Email..." required />
            </div>
            <div class="form-group">
                <input type="text" id="pwd" v-model="password" placeholder="Password..." required />
            </div>
            <div class="form-group">
                <input type="text" id="confirmPwd" v-model="confirmPassword" placeholder="Confirm Password..." required />
            </div>
            <button type="submit" class="submit-button">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        submitForm() {
            console.log(this.name. this.email, this.password, this.confirmPassword);
        }
    }
}
</script>

<style lang="sass" src="../styles/register.sass"></style>