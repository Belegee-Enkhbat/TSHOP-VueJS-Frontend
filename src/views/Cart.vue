<template>
  <div class="page-cart">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Карт</h1>
      </div>

      <div class="column is-12 box">
        <table class="table is-fullwidth" v-if="getTotalQuantity">
          <thead>
            <tr>
              <th>Бараа</th>
              <th>Үнэ</th>
              <th>Тоо ширхэг</th>
              <th>Нийт</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <CartItem
              v-for="item in cart.items"
              v-bind:key="item.product.id"
              v-bind:initialItem="item"
              v-on:removeFromCart="removeFromCart"
            />
          </tbody>
        </table>

        <p v-else>Таны картанд ямар наган Бараа байхгүй байна...</p>
      </div>

      <div class="column is-12 box">
        <h2 class="subtitle">Эцсийн дүн</h2>

        <strong>${{ getTotalPrice.toFixed(2) }}</strong
        >, {{ getTotalQuantity }} items

        <hr />

        <router-link to="/cart/checkout" class="button is-dark"
          >Захиалга өгөх</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      cart: {
        items: [],
      },
    };
  },
  mounted() {
    this.cart = this.$store.state.cart;
  },
  methods: {
    removeFromCart(item) {
      this.cart.items = this.cart.items.filter(
        (i) => i.product.id !== item.product.id
      );
    },
  },
  computed: {
    getTotalQuantity() {
      return this.cart.items.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalPrice() {
      return this.cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
  },
};
</script>
