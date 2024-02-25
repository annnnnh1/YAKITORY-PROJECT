let state = {
    products: {},
};

let getters = {
    PRODUCTS: state => {
        return state.products
    },

};

let mutations = {
    SET_PRODUCTS: (state, payload) => {
        state.products = payload
    }
};

let actions = {
    GET_PRODUCTS: async (context) => {
        let data = {
            name: 1111111,
            id: 1
            // {
            //     id: 1,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/sushi.png",
            //     name: "Роллы/горячие",
            // },
            // {
            //     id: 2,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/sushi.png",
            //     name: "Роллы/холодные",
            // },
            // {
            //     id: 3,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/set.png",
            //     name: "Сеты",
            // },
            // {
            //     id: 4,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/pizza-v1.png",
            //     name: "Пиццы",
            // },
            // {
            //     id: 5,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/thanksgiving-turkey.png",
            //     name: "Куриные блюда",
            // },
            // {
            //     id: 6,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/koi-fish.png",
            //     name: "Рыба",
            // },
            // {
            //     id: 7,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/12/soup.png",
            //     name: "Супы",
            // },
            // {
            //     id: 8,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/noodles.png",
            //     name: "Паста/лапша",
            // },
            // {
            //     id: 9,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/steak.png",
            //     name: "Мясные блюда",
            // },
            // {
            //     id: 10,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/salad.png",
            //     name: "Салаты",
            // },
            // {
            //     id: 11,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/potato.png",
            //     name: "Гарниры",
            // },
            // {
            //     id: 12,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/cheeseburger.png",
            //     name: "Фастфуд",
            // },
            // {
            //     id: 13,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/icons-sous.png",
            //     name: "Соусы",
            // },
            // {
            //     id: 14,
            //     img: "https://cafe-yakitori.ru/wp-content/uploads/2020/11/soda-cup.png",
            //     name: "Напитки",
            // },
        }
            context.commit('SET_PRODUCTS', data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}