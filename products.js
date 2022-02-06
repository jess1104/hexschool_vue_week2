import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js";
const site = 'https://vue3-course-api.hexschool.io/v2'; 
const apiPath = 'jesswu';
// 產品資料格式
const app = createApp({
  data() {
    return {
      products: [],
      detail:{}
    };
  },
  methods: {
    checkLogin() {
      // 將token取出來
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)jessToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      // 將偷肯帶入預設header
      axios.defaults.headers.common['Authorization'] = token;
      // check api
      const url = `${site}/api/user/check`;
      axios.post(url).then((res)=>{
        console.log('check',res);
        // 檢查後去拿取資料
        this.getProducts();
      })
    },
    getProducts() {
      const url = `${site}/api/${apiPath}/admin/products/all`;
      axios.get(url).then((res)=>{
        console.log('getProducts',res.data.products);
        this.products = res.data.products;
        // 也可把物件轉成陣列
        // Object.values(this.products).forEach((item)=>{
        //   console.log(item);
        // })

        
      })
    }
  },
  mounted() {
    this.checkLogin();
  }
});

app.mount('#app')