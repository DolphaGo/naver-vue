<template>
  <form @submit="submitForm">
    <div>id: <input type="text" v-model="username" /></div>
    <div>pw: <input type="text" v-model="password" /></div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
</style>