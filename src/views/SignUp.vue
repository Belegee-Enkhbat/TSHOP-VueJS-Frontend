<template>
  <div class="page-log-in">
    <div class="page-name">
      <div class="page-name__inner">
        <div class="container">
          <h1 class="title">Шинээр бүртгүүлэх</h1>
          <div class="breadcrumbs">
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">

    <form @submit.prevent="submitForm">
      <div class="field">
        <label>Нэвтрэх нэр</label>
        <div class="control">
          <input type="text" class="input" id="username" v-model="username" />
        </div>
      </div>

      <div class="field">
        <label>Нууц үг</label>
        <div class="control">
          <input type="password" class="input" id="password" v-model="password" @input="checkPasswordStrength" />
        </div>
      </div>

      <div class="field">
        <label>Нууц үгийг давтан оруулна уу</label>
        <div class="control">
          <input type="password" class="input" id="password2" v-model="password2" />
        </div>
      </div>

      <div class="notification is-danger" v-if="errors.length">
        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-dark" id="signUp">Бүртгүүлэх</button>
        </div>
      </div>

      <hr />

      Эсвэл <router-link to="/log-in">энд дарж</router-link> нэвтэрнэ үү!
    </form>
  </div>
</div>

</div>

</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      errors: [],
    };
  },
  methods: {
    submitForm() {
      this.errors = [];

      if (this.username === "") {
        this.errors.push("The username is missing");
      }

      if (this.password === "") {
        this.errors.push("The password is too short");
      }

      if (this.password !== this.password2) {
        this.errors.push("The passwords doesn't match");
      }
      this.checkPasswordStrength();

      if (!this.errors.length) {
        const formData = {
          username: this.username,
          password: this.password,
        };

        axios
          .post("/api/v1/users/", formData)
          .then((response) => {
            toast({
              message: "Account created, please log in!",
              type: "is-success",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });

            this.$router.push("/log-in");
          })
          .catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}: ${error.response.data[property]}`
                );
              }

              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");

              console.log(JSON.stringify(error));
            }
          });
      }
    },
    checkPasswordStrength() {
      this.errors = [];

      if (this.password.length < 6) {
        this.errors.push("Пассворд дор хаяж нэг том үсэг, нэг жижиг үсэг, нэг тусгай тэмдэгт, нэг тоо орсон байх ба 6-с дээш тэмдэгт агуулсан байх ёстой");
      } else if (!/[A-Z]/.test(this.password)) {
        this.errors.push("Пассворд дор хаяж нэг том үсэг, нэг жижиг үсэг, нэг тусгай тэмдэгт, нэг тоо орсон байх ба 6-с дээш тэмдэгт агуулсан байх ёстой");
      } else if (!/[a-z]/.test(this.password)) {
        this.errors.push("Пассворд дор хаяж нэг том үсэг, нэг жижиг үсэг, нэг тусгай тэмдэгт, нэг тоо орсон байх ба 6-с дээш тэмдэгт агуулсан байх ёстой");
      } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password)) {
        this.errors.push("Пассворд дор хаяж нэг том үсэг, нэг жижиг үсэг, нэг тусгай тэмдэгт, нэг тоо орсон байх ба 6-с дээш тэмдэгт агуулсан байх ёстой");
      } else if (!/\d/.test(this.password)) {
        this.errors.push("Пассворд дор хаяж нэг том үсэг, нэг жижиг үсэг, нэг тусгай тэмдэгт, нэг тоо орсон байх ба 6-с дээш тэмдэгт агуулсан байх ёстой");
      }
    },

  }
};
</script>
