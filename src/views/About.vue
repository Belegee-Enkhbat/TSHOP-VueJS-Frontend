<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TSHOP</title>
      <link rel="stylesheet" href="css/style.min.css" />
    </head>
    <body>
      <main class="main"></main>
    </body>
  </html>
</template>

<script>
require("@/assets/css/style.min.css");
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      latestArticles: [],
    };
  },
  components: {},
  mounted() {
    this.getLatestArticles();
  },

  methods: {
    async getLatestArticles() {
      await axios
        .get("/api/v1/latest-articles/")
        .then((response) => {
          this.latestArticles = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
