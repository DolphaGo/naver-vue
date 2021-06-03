<template>
  <div>
    <todo-header></todo-header>
    <todo-input v-on:add="addTodoItem"></todo-input>
    <todo-list v-bind:todos="items" v-on:remove="removeItem"></todo-list>
  </div>
</template>


<script>
// import 컴포넌트 이름 from '컴포넌트 파일 경로'
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

// var todoHeader = {
//   template: "<h1>todo 헤더</h1>",
// };

export default {
  // 인스턴스 옵션 속성
  components: {
    // '컴포넌트 이름' :컴포넌트 내용,
    // "todo-header": {
    //   template: "<h1>todo 헤더</h1>",
    // },
    "todo-header": TodoHeader,
    "todo-list": TodoList,
    "todo-input": TodoInput,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchItems() {
      // var arr = [];
      for (var i = 0; i < localStorage.length; i++) {
        this.items.push(localStorage.key(i));
      }
      // return arr;
    },
    addTodoItem(item) {
      localStorage.setItem(item, item);
      this.items.push(item);
    },
    removeItem(item, index) {
      localStorage.removeItem(item);
      this.items.splice(index, 1); // 잘라내기
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>