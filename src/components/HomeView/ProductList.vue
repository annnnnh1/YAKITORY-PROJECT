
<script>
export default {
props: {
    product: Object
}
}
</script>

<style>

</style>
<template>
        <div class="subcategory-prod">
            <router-link to="/">
                <img :src="product.img" alt="">
                <h2>{{ product.name }}</h2>
            </router-link>
        </div>
</template>