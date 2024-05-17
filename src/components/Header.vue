<template>
  <nav class="navbar is-light menu">
    <div class="navbar-brand">
      <router-link to="/" class="title">
        <h3>TSHOP</h3>
      </router-link>
    </div>
    <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
      <div class="navbar-start">
        <div class="buttons">
          <form method="get" action="/search">
            <div class="field has-addons">
              <div class="control">
                <input type="text" class="input" placeholder="Хайх..." name="query" />
              </div>

              <div class="control">
                <button class="button is-success">
                  <span class="icon">
                    <i class="fas fa-search"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="$store.state.user == 'super'">
              <router-link to="/ManageProduct" class="button is-success">
                <h4>Бүтээгдэхүүн нэмэх</h4>
              </router-link>
            </template>

            <router-link to="/product" class="button is-success">
              <h4>Бараа</h4>
            </router-link>
            <router-link to="/cart" class="button is-success">
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Сагс {{ getTotalQuantity }}</span>
            </router-link>
            <router-link to="/about" class="button is-success">
              <h4>Бидэнтэй холбогдох</h4>
            </router-link>
            <template v-if="$store.state.isAuthenticated">
              <router-link to="/my-account" class="button is-light">
                <h4>Миний бүртгэл</h4>
              </router-link>
              <button @click="logoutHandler()" class="button is-danger">Гарах</button>
            </template>

            <template v-else>
              <router-link to="/log-in" class="button is-light">
                <h4>Нэвтрэх</h4>
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
import { logout } from "@/store/LogoutService";

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: [],
      },
    };
  },
  computed: {
    getTotalQuantity() {
      return this.cart.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted() {
    this.cart = this.$store.state.cart;
  },
  methods: {
    logoutHandler() {
      logout.call(this); 
    }
  },
};
</script>

<style>
.navbar.is-light.menu {
  background-color: black;
  color: white;
}

.navbar.is-light.menu * {
  color: white;
}

#navbar-menu {
  display: flex;
  /* grid-template-columns: 30% 70%; */
  justify-content: space-between;

  .navbar-start {
    width: 50%;
    margin-left: auto;
    margin-right: 0px;
    justify-content: flex-end;

    .navbar-item {
      width: 100%;

      p {
        color: white;
      }
    }
  }


  .navbar-end {
    width: 50%;
    display: flex;
    margin-left: 0px;
  }

  & form {
    width: 150%;

    & input {
      width: 20rem;
      color: black;
    }
  }
}
</style>
