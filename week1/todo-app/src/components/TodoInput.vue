<template>
  <div>
    <input type="text" v-model="inputText" />
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data() {
    // 여러 컴포넌트에서 참조가 걸리지 않게 하려면 이렇게 함수형으로 리턴해야한다. (단축키 : vda)
    return {
      inputText: "",
    };
  },
  methods: {
    addTodo() {
      var value = this.inputText;
      console.log("데이터 =>", value);
      this.$emit("add", value); // 하위 컴포넌트에서 이벤트와 함께 값을 넘기면 상위 컴포넌트에서 받아버리면 된다
      this.initForm();
    },
    initForm() {
      this.inputText = "";
    },
  },
};
</script>

<style></style>
