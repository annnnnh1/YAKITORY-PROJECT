<script>
export default {
    props: {
    newProduct: Object
}
}
</script>

<template>
    <li>
        <router-link to="/" class="new-menu-list_products--info">
            <img :src="newProduct.img">
            <div>
                <h3>{{ newProduct.name }}</h3>
                <button>Смотреть</button>
            </div>
        </router-link>
    </li>
</template>