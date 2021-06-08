<template>
  <div>
    <!-- <div>
      <h1>컴포넌트 로직</h1>
      <p>{{ str }}</p>
      <button @click="changeString">눌러보셈</button>
    </div>
    <div>
      <h1>뷰엑스 로직</h1>
      <p>{{ $store.state.str }}</p>
      <button @click="$store.commit('changeString')">눌러보셈</button>
      뷰엑스 뮤태이션 사용하려면 $store.commit('뮤테이션이름') 으로 접근한다
    </div> -->
    <header>
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원 가입</router-link>
      <!-- <a href="/login">로그인</a> 위와 동일하지만, router-link에 더 많은 기능들이 있음 그것들을 사용하기 위해 위와 같은 방법을 사용한다 -->
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "hi",
    };
  },
  methods: {
    changeString() {
      this.str = this.str + "!";
    },
  },
  created() {
    console.log(this.$store);
  },
};
</script>

<style>
</style>