import produceStore from "../stores/produceStore.js";
import {defineStore} from "pinia";
import axios from "axios";
const { VITE_APP_URL,VITE_APP_PATH } = import.meta.env


export default defineStore('cart', {
    state: () => ({
        cart: {},
        loading: '',
        cartQty: [],
        length: '',

    }),
    actions: {
        // getQty() {
        //     this.cart.carts.forEach((e) => {
        //         this.cartQty.push(e.qty)
        //         console.log( this.cartQty)
        //         // this.length += this.cartQty[i]

        //         // console.log(this.length)
        //     })
        //     // this.cartQty.forEach((value)=>{
        //     //     this.length +=value
        //     //     console.log(this.length)
        //     // })
        //        for (let i = 0; i < this.cartQty.length; i++) {
        //         this.length += this.cartQty[i]
        //         console.log(this.length)
        //     }
        // },

        getCart() {
            axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
                .then((res) => {

                    this.cart = res.data.data;
                    this.length = res.data.data.carts.length
                    

                })
                .catch((error) => {
                    alert(error)
                })
        },
        addToCart(product_id, qty = 1) {
            const data = {
                product_id,
                qty
            };
            axios.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
                .then((res) => {
                    this.getCart()


                })
                .catch((error) => {

                    alert(error)
                })


        },
        delCart(item) {
            this.loading = item.id;
            axios.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`)
                .then((res) => {

                    this.getCart()
                    this.loading = "";

                })
                .catch((error) => {
                    alert(error)
                })
        },
        setCartQty(item) {
            this.loading = item.id;
            const data = {
                product_id: item.product.id,
                qty: item.qty
            };
            console.log(data, item.id)
            axios.put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
                .then((res) => {

                    this.getCart()
                    this.loading = "";

                })
                .catch((error) => {
                    alert(error)
                })


        },
    },

})