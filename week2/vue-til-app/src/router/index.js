import Vue from 'vue'
import VueRouter from 'vue-router'
// import SignupPage from "../views/SignupPage.vue"
import LoginPage from "../views/LoginPage.vue"
import NotFoundPage from "../views/NotFoundPage.vue"

Vue.use(VueRouter)

var router = new VueRouter({
  // 라우터 내용 정의
  routes: [
    // {
    //   path: "/",
    //   redirect: "/login"
    // },
    {
      path: '/signup',
      // component: SignupPage
      component: () => import("../views/SignupPage.vue") // SPA 최적화 중 하나, 페이지에 들어갔을 때 뷰를 불러오는 방법임
    },
    {
      path: '/login',
      component: LoginPage
    },
    // 페이지 추가 정의
    // 조회 페이지, 생성 페이지
    {
      path: "*",
      component: NotFoundPage
    }
  ]
});

export default router;