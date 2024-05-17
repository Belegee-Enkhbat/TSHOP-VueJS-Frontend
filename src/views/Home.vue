<template>
  <div class="home">
    <main class="main">
      <section class="top-slider">
        <div class="top-slider__wrapper">
          <div class="top-slider__item">
            <div class="top-slider__content">
              <h2 class="top-slider__title"> TSHOP Online shop</h2>
              <img :src="require('@/assets/images/back.jpg')" alt="Descriptive Alt Text" class="top-slider__image">
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="title-secondary">Барааны ангилал</h2>
      </div>

      <ProductCategoryBox
        v-for="category in categories"
        v-bind:key="category.id"
        v-bind:category="category"
      />
    </div>
  </div>
</template>

<script>
require("@/assets/css/style.min.css");
import axios from "axios";

import ProductBox from "@/components/ProductBox.vue";
import ProductCategoryBox from "@/components/ProductCategoryBox.vue";

export default {
  name: "Home",
  data() {
    return {
      categories: [],
    };
  },
  components: {
    ProductCategoryBox,
  },
  mounted() {
    this.getCategory();

    document.title = "Home | Glee";
  },
  methods: {
    async getCategory() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get("/api/v1/products/categories/")
        .then((response) => {
          this.categories = response.data;
          console.log("cate", this.categories)
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },

  },
};
</script>
