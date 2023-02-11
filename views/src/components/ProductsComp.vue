<template>
    <div class="container">
        <form @submit.prevent="getProducts">
            <button type="submit" class="submit-button">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ProductsComp',
    methods: {
        async getProducts() {
            try {
                const response = await fetch('http://localhost:3000/products', {mode: 'cors'});
                if(response.ok) {
                    const jsonResponse = await response.json();
                    console.log(jsonResponse);
                }
            } catch(error) {
                console.log(error);
            }
        }
    }
}
</script>

<style lang="sass" src="./styles/products.sass">
</style>