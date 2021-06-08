<template>
  <div>
    <!-- <section>
      {{ $store.state.str }}
    </section> -->
    <h1>로그인 페이지</h1>
    <!-- TODO: 가입된 회원으로 로그인 할 수 있는 로직을 구현해보세요. -->
    <form @submit="submitForm">
      <div>id: <input type="text" v-model="username" /></div>
      <div>pw: <input type="text" v-model="password" /></div>
      <button type="submit">로그인</button>
    </form>
    <button @click="fetchLearningNotes">조회</button>
  </div>
</template>

<script>
import { loginUser, fetchNotes } from "../api";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
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
          this.$store.commit("setToken", token); // 토큰을 스토어에 저장
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
