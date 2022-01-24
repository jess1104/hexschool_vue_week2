import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';
const url = 'https://vue3-course-api.hexschool.io/v2'

createApp({
    data(){
        return{
            user:{
                "username": "",
                "password": ""
            }
        }
    },
    methods:{
        login(){
           axios.post(`${url}/admin/signin`,this.user).then((res)=>{
               const { token, expired } = res.data;
                // 存入cookie
                document.cookie = `jessToken=${token}; expires=${ new Date(expired) }; `;
                window.location = 'products.html';
           }) .catch((err)=>{
            console.dir(err);
            alert(err.data.message)
          }) 
        }
    }
}).mount('#app');