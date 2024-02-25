<script>
// import { mapGetters } from 'vuex';
import ProductList from '../components/HomeView/ProductList.vue'
import PopularProdList from '@/components/HomeView/PopularProdList.vue';
import NewProdList from '@/components/HomeView/NewProdList.vue'
import NewsAndEvent from '@/components/HomeView/NewsAndEvent.vue';


export default {
    components: {
    ProductList,
    PopularProdList,
    NewProdList,
    NewsAndEvent

},
    data: () => {
            return {
                products: [
            {
                id: 1,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/sushi.png",
                name: "Роллы/горячие",
            },
            {
                id: 2,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/sushi-2.png",
                name: "Роллы/холодные",
            },
            {
                id: 3,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/set.png",
                name: "Сеты",
            },
            {
                id: 4,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/pizza-v1.png",
                name: "Пиццы",
            },
            {
                id: 5,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/thanksgiving-turkey.png",
                name: "Куриные блюда",
            },
            {
                id: 6,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/koi-fish.png",
                name: "Рыба",
            },
            {
                id: 7,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/12/soup.png",
                name: "Супы",
            },
            {
                id: 8,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/noodles.png",
                name: "Паста/лапша",
            },
            {
                id: 9,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/steak.png",
                name: "Мясные блюда",
            },
            {
                id: 10,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/salad.png",
                name: "Салаты",
            },
            {
                id: 11,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/potato.png",
                name: "Гарниры",
            },
            {
                id: 12,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/cheeseburger.png",
                name: "Фастфуд",
            },
            {
                id: 13,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/icons-sous.png",
                name: "Соусы",
            },
            {
                id: 14,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/lemonade-48.png",
                name: "Лимонады",
            },
            {
                id: 15,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/cocktail-48.png",
                name: "Коктейли",
            },
            {
                id: 16,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/cafe-48.png",
                name: "Чай",
            },
            {
                id: 17,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/cupcake-emoji-48.png",
                name: "Десерты",
            },
            {
                id: 18,
                img: "https://cafe-yakitori.ru/wp-content/uploads/2020/12/soda-cup.png",
                name: "Напитки",
            },
            ],
            topProducts: [
                {
                    id: 1,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2022/05/tvister-.jpg",
                    name: "Твистер"
                },
                {
                    id: 2,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/menu-garnir-kartofel-fri-1.jpg",
                    name: "Картофель фри"
                },
                {
                    id: 3,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/cezar.jpg",
                    name: "Пицца «Цезарь» с курицей"
                },
                {
                    id: 4,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/picca-kurinaya-s-gribami.jpg",
                    name: "Куриная с грибами"
                },
                {
                    id: 5,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/menu_cezar-s-krevetkami.jpg",
                    name: "Цезарь с креветками"
                },
                {
                    id: 6,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/czezar-s-kuriczej-.jpg",
                    name: "Ролл Цезарь"
                },
                {
                    id: 7,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/murakami-.jpg",
                    name: "Мураками"
                },
                {
                    id: 8,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/ojsi.jpg",
                    name: "Ойси"
                },
            ],
            newProducts: [
                {
                    id: 1,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/tiramisu-.jpg",
                    name: "Десерт Тирамису"
                },
                {
                    id: 2,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/venskiya-vafli-.jpg",
                    name: "Десерт Венские вафли"
                },
                {
                    id: 3,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/san-sebastyan-.jpg",
                    name: "Десерт Сан-себастьян"
                },
                {
                    id: 4,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/fondan-.jpg",
                    name: "Десерт Фондан"
                },
                {
                    id: 5,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/morozhenoe-s-bananom-.jpg",
                    name: "Мороженое с бананом"
                },
                {
                    id: 6,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/oblepihovyj-s-rozmarinom-.jpg",
                    name: "Чай Облепиховый с размарином"
                },
                {
                    id: 7,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/yakitori-.jpg",
                    name: "Чай Якитори"
                },
                {
                    id: 8,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2024/02/marokkanskij-.jpg",
                    name: "Чай Марокканский"
                },
            ],
            newsEvent: [
                {
                    id: 1,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2023/07/frame-1-1.png",
                    name: "Акция"
                },
                {
                    id: 2,
                    img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/782e71a7-d4f4-4edd-80f9-f87d41d9d55f.jpg",
                    name: "Мы заботимся о Вашем здоровье"
                },
            ],
            translateProd: 0
        };
    },
    // computed: {
    //     ...mapGetters('PRODUCTS'),
    // },
    // mounted() {
    //     this.$store.dispatch('GET_PRODUCTS')
    // },
    methods: {
        scrollMenuLeft() {
            const container = document.querySelector(".subcategory-list");
            if (this.translateProd >= 0) {
                this.translateProd = 0
            } else {
                this.translateProd += 2030 / this.topProducts.length;
            }
            container.style.transform = "translateX(" + this.translateProd + "px" + ")";
        },
        scrollMenuRight() {
            const container = document.querySelector(".subcategory-list");
            if (this.translateProd <= -1015) {
                this.translateProd = -1015
                
            } else {
                this.translateProd -= 2030 / this.topProducts.length
            }
            container.style.transform = "translateX(" + this.translateProd + "px" + ")";                 
            // if (this.translateProd <= -100) {
            //     this.translateProd = -100
                
            // } else {
            //     this.translateProd -= 100 / this.topProducts.length
            // }
            // container.style.transform = "translateX(" + this.translateProd + "%" + ")";
        },
    }
}
</script>

<template>
    <main>
        <div class="wrapper main-content">
            <h1>Доставка Суши</h1>
            <span>онлайн сервис заказа <br> 
                японской и <br> 
                европейской кухни</span>
                <a href="#scroll">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
							<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 14.90625 20.96875 C 14.863281 20.976563 14.820313 20.988281 14.78125 21 C 14.40625 21.066406 14.105469 21.339844 14 21.703125 C 13.894531 22.070313 14.003906 22.460938 14.28125 22.71875 L 24.28125 32.71875 C 24.46875 32.914063 24.730469 33.023438 25 33.023438 C 25.269531 33.023438 25.53125 32.914063 25.71875 32.71875 L 35.71875 22.71875 C 36.117188 22.320313 36.117188 21.679688 35.71875 21.28125 C 35.320313 20.882813 34.679688 20.882813 34.28125 21.28125 L 25 30.5625 L 15.71875 21.28125 C 15.511719 21.058594 15.210938 20.945313 14.90625 20.96875 Z">
							</path>
						</svg>
                </a>
        </div>
    </main>
    <section class="section wrapper">
        <span class="scroll-menu scroll-menu_left" @click="scrollMenuLeft()">        
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 14.90625 20.96875 C 14.863281 20.976563 14.820313 20.988281 14.78125 21 C 14.40625 21.066406 14.105469 21.339844 14 21.703125 C 13.894531 22.070313 14.003906 22.460938 14.28125 22.71875 L 24.28125 32.71875 C 24.46875 32.914063 24.730469 33.023438 25 33.023438 C 25.269531 33.023438 25.53125 32.914063 25.71875 32.71875 L 35.71875 22.71875 C 36.117188 22.320313 36.117188 21.679688 35.71875 21.28125 C 35.320313 20.882813 34.679688 20.882813 34.28125 21.28125 L 25 30.5625 L 15.71875 21.28125 C 15.511719 21.058594 15.210938 20.945313 14.90625 20.96875 Z">
    </path>
            </svg>
        </span>
        <div class="subcategory">
            <div class="subcategory-list">
                <ProductList v-for="product in products" :product="product" :key="product.id" />
            </div>
        </div>
        <span class="scroll-menu scroll-menu_right" @click="scrollMenuRight()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 14.90625 20.96875 C 14.863281 20.976563 14.820313 20.988281 14.78125 21 C 14.40625 21.066406 14.105469 21.339844 14 21.703125 C 13.894531 22.070313 14.003906 22.460938 14.28125 22.71875 L 24.28125 32.71875 C 24.46875 32.914063 24.730469 33.023438 25 33.023438 C 25.269531 33.023438 25.53125 32.914063 25.71875 32.71875 L 35.71875 22.71875 C 36.117188 22.320313 36.117188 21.679688 35.71875 21.28125 C 35.320313 20.882813 34.679688 20.882813 34.28125 21.28125 L 25 30.5625 L 15.71875 21.28125 C 15.511719 21.058594 15.210938 20.945313 14.90625 20.96875 Z">
    </path>
            </svg>
        </span>
    </section>
    <div id="scroll" class="wrapper recomendation">
        <div class="recomendation-header">
            <h2>Рекомендуем попробовать</h2>
            <span>Наши гости выбирают чаще всего</span>
        </div>
        <div class="recomendation-list">
            <ul class="recomendation-list_products">
                <PopularProdList v-for="topProduct in topProducts" :topProduct="topProduct" :key="topProduct.id"/>
            </ul>
        </div>
    </div>
    <div class="wrapper new-menu">
        <div class="new-menu-header">
            <h2>Новинки</h2>
            <span>Попробуйте новое в нашем меню</span>
        </div>
        <div class="new-menu-list">
            <ul class="new-menu-list_products">
                <NewProdList v-for="newProduct in newProducts" :newProduct="newProduct" :key="newProduct.id"/>
            </ul>
        </div>
    </div>
    <div class="wrapper news-event">
        <div class="news-event-header">
            <h2>Новости и Акции</h2>
            <span>Вкусные акции и новости</span>
        </div>
        <div class="news-event-list">
            <ul class="news-event-list_products">
                <NewsAndEvent v-for="news in newsEvent" :news="news" :key="news.id"/>
            </ul>
        </div>
    </div>
    <FooterMenu/>
</template>