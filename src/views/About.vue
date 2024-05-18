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
  <div class="container">
    <h1>Зурвас илгээх</h1>
    <form id="contactForm" @submit.prevent="submitForm">
      <div>
        <label for="name">Нэр:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">И-мейл:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message">Сэтгэгдэл:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Илгээх</button>
    </form>
    <div class="contact-info">
      <h2>Холбоо барих мэдээлэл:</h2>
      <p>Утас: +1234567890</p>
      <p>И-мейл: info@example.com</p>
      <p>Хаяг: Улаанбаатар, Монгол улс</p>
    </div>
  </div>
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
