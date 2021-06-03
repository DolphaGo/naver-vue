<template>
  <div>
    <!-- <button v-on:click="fetchItems">출력</button> -->
    <ul>
      <li v-for="(item, index) in todos" v-bind:key="index">
        {{ index }} : {{ item }}
        <button v-on:click="removeTodo(item, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     items: [],
  //   };
  // },
  props: ["todos"],
  methods: {
    // fetchItems() {
    //   // var arr = [];
    //   for (var i = 0; i < localStorage.length; i++) {
    //     this.items.push(localStorage.key(i));
    //   }
    //   // return arr;
    // },
    removeTodo(item, index) {
      console.log("removed", item, index);
      this.$emit("remove", item, index);
    },
  },
  // created() {
  //   this.fetchItems();
  // },
};
</script>

<style></style>