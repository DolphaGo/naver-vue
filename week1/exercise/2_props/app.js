// 할일 #1
// sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
// options : template, props

Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{ propsdata }}</p>",
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! passed from Parent Component",
    anotherMessage: "I'm DolphaGo",
  },
  components: {
    "sibling-component": {
      template: "<h1>test {{mymessage}}</h1>",
      props: ["mymessage"],
    },
  },
});
