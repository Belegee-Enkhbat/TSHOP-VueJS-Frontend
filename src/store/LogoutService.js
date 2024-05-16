import axios from "axios";

// Хэрэглэгч гарах функц
export async function logout() {
  axios.defaults.headers.common["Authorization"] = "";

  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("userid");
  localStorage.removeItem("user");

  this.$store.commit("removeToken");

  const toPath = this.$route.query.to || "/";
  this.$router.push(toPath);

  setTimeout(() => {
    window.location.reload();
  }, 100);
}
