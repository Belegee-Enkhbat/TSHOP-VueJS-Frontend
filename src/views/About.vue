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
<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 20px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: black;
}

.contact-info {
  margin-top: 20px;
}

.contact-info h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.contact-info p {
  margin: 5px 0;
}

</style>
