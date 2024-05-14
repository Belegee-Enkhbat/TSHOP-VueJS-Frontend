<template>
  <div class="home">
<main class="main">
  <section class="top-slider">

<div class="top-slider__wrapper">
    <div class="top-slider__item">
        <div class="top-slider__content">
            <h2 class="top-slider__title">
                SMART AND
                TRENDY
            </h2>
        </div>
    </div>
</div>
</section>


</main>
    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Шинэ бүтээгдэхүүнүүд</h2>
      </div>

      <ProductBox 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product" />

    </div>


  </div>
</template>

<style lang="scss">
.top-slider {
   width: 100%;
    background-color: #fcd7b6;
  margin: 0px;

    &__content {
        padding-top: 225px;
        padding-left: 0px;
    }

    &__item {
        display: flex !important;
        justify-content: space-between;
    }

    &__title {
        max-width: 420px;
        // @extend %rubik-500;
        font-size: 72px;
        line-height: 70px;
        color: #243f4d;
        margin-bottom: 45px;
    }

    &__text {
        // @extend %rubik-400;
        color: #436372;
        max-width: 330px;
        margin-bottom: 45px;

    }

    &__link {
        background-color: #a3bbc8;
        padding: 25px 20px 25px 25px;
        // @extend %rubik-500;
        color: white;
        cursor: pointer;

        span {
            font-size: 20px;
        }
    }

    &__img {
        padding: 100px 180px 0 0;
    }


    .articles {
    // background-image: url('../images/articles-bg.svg');
    background-repeat: no-repeat;
    background-position: 50% 90%;

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
    }

    &__link {
        // @extend %dmsans-700;
        font-size: 16px;
        color: #262626;
        position: relative;
        padding-right: 18px;

        &::after {
            position: absolute;
            // content: url("../images/icons/arrow-right.svg");
            width: 6px;
            height: 11px;
            right: -5px;
        }
    }

    &__items {
        display: flex;
        justify-content: space-between;
        margin-bottom: 90px;

    }

    &__item {
        box-shadow: 0px 6px 47px 3px rgba(37, 37, 37, 0.05);
        border-radius: 5px;
        background-color: #ffffff;
    }

    &__item-image {
        max-width: 371px;

        position: relative;
        margin-bottom: 32px;
    }

    &__item-type {
        // @extend %poppins-700;
        font-size: 14px;
        color: #ffffff;
        border: 1px solid rgb(163, 187, 200);
        padding: 3px 30px;
        border-radius: 16px;
        background-color: rgb(163, 187, 200);
        cursor: pointer;
        position: absolute;
        transform: translateY(-49px);
        margin-left: 28px;
    }

    &__item-content {
        padding: 0 28px 28px;
    }

    &__item-text {
        // @extend %dmsans-500;
        font-size: 18px;
        color: #262626;
        text-align-last: left;
        max-width: 315px;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 18px;
        height: 84px;
    }

    &__item-info {
        display: flex;
        font-size: 13px;
        // @extend %dmsans-500;

        a {
            color: #222933;
        }
    }

    &__item-date {
        margin: 2px 0 30px;
        margin-left: 2px;
        margin-right: 30px;
    }

}


}
</style>

<script>
require("@/assets/css/style.min.css")
import axios from 'axios'

import ProductBox from '@/components/Productbox.vue'

export default {
  name: 'Home',
  data() {
    return {
      latestProducts: [],
      latestArticles: []
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getLatestProducts(),
    this.getLatestArticles()

    document.title = 'Home | Glee'


  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)

      await axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })

      this.$store.commit('setIsLoading', false)
    },

    async getLatestArticles() {
        await axios
            .get('/api/v1/latest-articles/')
            .then(response => {
            this.latestArticles = response.data
            })
            .catch(error => {
            console.log(error)
            })
    }
  }
}

</script>