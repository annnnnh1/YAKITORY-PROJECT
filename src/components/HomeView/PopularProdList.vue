<script>
export default {
    props: {
    topProduct: Object
}
}
</script>

<template>
    <li>
        <router-link to="/" class="recomendation-list_products--info">
            <img :src="topProduct.img">
            <div>
                <h3>{{ topProduct.name }}</h3>
                <button>Смотреть</button>
            </div>
        </router-link>
    </li>
</template>