<script>
export default {
    name: 'RegisterComp',
    data() {
        return {
            name: '',
            email: '',
            pwd: '',
            confirmPwd: ''
        };
    },
    methods: {
        submitForm() {
            console.log(this.name, this.email, this.pwd, this.confirmPwd);
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <input type="text" id="name" v-model="name" placeholder="Name..." required />
            </div>

            <div class="form-group">
                <input type="email" id="email" v-model="email" placeholder="Email..." required />
            </div>

            <div class="form-group">
                <input type="password" id="pwd" placeholder="Password..." v-model="pwd" required />
            </div>

            <div class="form-group">
                <input type="password" id="confirmPwd" placeholder="Confirm password..." v-model="confirmPwd" required />
            </div>

            <button type="submit" class="submit-button">Sign Up</button>
        </form>
    </div>
</template>

<style lang="sass" src="./styles/register.sass" scoped></style>