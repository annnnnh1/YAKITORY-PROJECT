<script>
export default {
    props: {
    news: Object
}
}
</script>

<template>
    <li>
        <router-link to="/" class="news-event-list_products--info">
            <img :src="news.img">
            <div>
                <h3>{{ news.name }}</h3>
            </div>
        </router-link>
    </li>
</template>