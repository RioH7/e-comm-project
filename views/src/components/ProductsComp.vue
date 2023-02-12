<template>
    <div class="container">
            <div class="col-3" v-for="product in products" :key="product._id">
                <a href="#">
                    <img :src="product.image" alt="product image">
                </a>
                <h4>{{ product.title }}</h4>
                <p>{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsComp',
    data() {
        return {
            products: [],
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        async getProducts() {
            try {
                const response = await fetch('http://localhost:3000/products', {mode: 'cors'});
                if(response.ok) {
                    const products = await response.json();
                    this.products = products;
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