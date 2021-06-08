// /* eslint-disable prettier/prettier */
import axios from "axios";
// import { setInterceptors } from "./interceptors"


// https://joshua1988.github.io/vue-camp/deploy/cli3-rules.html#%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%ED%8C%8C%EC%9D%BC-%EA%B7%9C%EC%B9%99 참고
// process.env.NODE_ENV; // development, production, test (npm run build, npm run serve 등을 할 때 모드 설정에 따라 다르게 할 수 있음)
// if(process.env.NODE_ENV === 'development'){
//   url = 'aaa';
// }
// if(process.env.NODE_ENV ==='production'){
//   url = 'bbb';
// }

var instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000
})

// var initInstacne = setInterceptors(instance); // 

var notes = axios.create({
  baseURL: "http://localhost:3000/posts/",
  timeout: 5000,
  // headers: {
  //   // Authorization: "$123"
  //   Authorization: store.state.token
  // }
})

function registerUser(userInfo) {
  return instance.post("signup", userInfo);
}

function loginUser(loginInfo) {
  return instance.post('login', loginInfo)
}



export { registerUser, loginUser, notes }