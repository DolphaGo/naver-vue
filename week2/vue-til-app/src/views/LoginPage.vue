<template>
  <div>
    <!-- <section>
      {{ $store.state.str }}
    </section> -->
    <h1>로그인 페이지</h1>
    <!-- TODO: 가입된 회원으로 로그인 할 수 있는 로직을 구현해보세요. -->
    <login-form></login-form>
    <button @click="fetchLearningNotes">조회</button>
  </div>
</template>

<script>
import { loginUser, fetchNotes } from "../api";
import { LoginForm } from "../components/login/LoginForm.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    LoginForm,
  },
  methods: {
    submitForm() {
      loginUser({
        username: this.username,
        password: this.password,
      })
        .then((response) => {
          console.log(response);
          var token = response.data.token;
          this.$store.commit("setToken", token);
        })
        .catch((error) => console.log(error));
    },
    fetchLearningNotes() {
      fetchNotes();
    },
  },
  // render(createElement) {
  //   return createElement("h1", "로그인 페이지");
  // }
};
</script>

<style></style>
