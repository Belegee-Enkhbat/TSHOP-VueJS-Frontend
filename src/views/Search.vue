<template>
  <div class="page-search">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title"></h1>

        <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
      </div>
      <div class="main">
        <div class="filter">
          <SideBarFilter></SideBarFilter>
        </div>
        <div class="product">

        <ProductBox
          v-for="product in products"
          v-bind:key="product.id"
          v-bind:product="product"
        />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductBox from "@/components/ProductBox.vue";
import SideBarFilter from "../components/SideBarFilter.vue";
export default {
  name: "Search",
  computed: {
    Productbox() {
      return Productbox
    }
  },
  components: {
    ProductBox,
    SideBarFilter,
  },
  data() {
    return {
      products: [],
      query: "",
    };
  },
  mounted() {
    document.title = "Search | Glee";

    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    if (params.get("query")) {
      this.query = params.get("query");

      this.performSearch();
    }
  },
  methods: {
    async performSearch() {
      this.$store.commit("setIsLoading", true);

      await axios
        .post("/api/v1/products/search/", { query: this.query })
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>
<style scoped>

.main{
  display: grid;
  grid-template-columns: 20% 80%;
}
.product{
  display: grid;
  grid-template-columns: 50% 50%;
}

.column.is-3{
  width: 100%;
}
</style>