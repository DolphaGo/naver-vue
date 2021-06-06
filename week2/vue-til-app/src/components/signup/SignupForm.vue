<template>
  <form v-on:submit="submitForm">
    <div>email: <input type="text" v-model="username" /></div>
    <div>pw: <input type="text" v-model="password" /></div>
    <div>nickname : <input type="text" v-model="nickname" /></div>
    <button type="submit">가입</button>
    <router-link to="/login">로그인하러 고고</router-link>
  </form>
</template>

<script>
// import axios from "axios";
import { registerUser } from "../../api/index"; // api까지만 작성해도 index.js를 읽는다. 그래서 기본이름으로 index.js로 하는 것임

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },

  methods: {
    submitForm() {
      // var data = {
      //   username: this.username,
      //   password: this.password,
      //   nickname: this.nickname,
      // };
      registerUser({
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      })
        // axios
        //   .post("http://localhost:3000/signup", {
        //     username: this.username,
        //     password: this.password,
        //     nickname: this.nickname,
        //   })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>