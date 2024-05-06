
<template>
  <nav class="navbar is-light menu">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><strong>TSHOP</strong></router-link>

      <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
      <div class="navbar-start">
        <div class="navbar-item">
          <form method="get" action="/search">
            <div class="field has-addons">
              <div class="control">
                <input type="text" class="input" placeholder="Хайх..." name="query">
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

<!--        <router-link to="/furnitures" class="navbar-item">Бараа</router-link>-->

        <div class="navbar-item">
          <router-link to="/about" class="navbar-item">
            <div class="urlclass">
              <h4>Бидэнтэй холбогдох</h4>
            </div>
          </router-link>

          <router-link to="/chairs" class="navbar-item">
            <div class="urlclass">
              <h4>Бараа</h4>
            </div>
          </router-link>
          <div class="buttons">

            <template v-if="$store.state.isAuthenticated">
              <router-link to="/my-account" class="button is-light"><h4>Миний бүртгэл</h4></router-link>
            </template>

            <template v-else>
              <router-link to="/log-in" class="button is-light"><h4>Нэвтрэх</h4></router-link>
            </template>

            <router-link to="/cart" class="button is-success">
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Карт {{ cartTotalLength }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: []
      }
    }
  },
  computed: {
    cartTotalLength() {
      return this.cart.items.reduce((total, item) => total + item.quantity, 0);
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore');
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token;
    } else {
      axios.defaults.headers.common['Authorization'] = "";
    }
  },
  mounted() {
    this.cart = this.$store.state.cart;
  }
}
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
  grid-template-columns: 50% 50%;

  .navbar-start {
    margin-left: auto;
    margin-right: 0px;
    justify-content: flex-end;
    .navbar-item:hover{
      color: black;
    }
    .navbar-item {
      & .navbar-item:hover{
        background-color: black;

      }
      width: 100%;
      & router-link:hover{
        color: black;
      }
      & a{
        color: black;
      }
    & .urlclass:hover{
      background-color: #3ec487;
      color: white;
    }
      p {
        color: white;
      }
    }
  }

  .navbar-end {
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
.urlclass:hover {
  background-color: black;
}

.urlclass h4 {
  color: inherit; 
}

.router-link:hover .urlclass {
  background-color: green;
}

.router-link:hover .urlclass h4 {
  color: white;
}



</style>
