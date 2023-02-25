import{c}from"./cartStore-284c7b36.js";import{_ as i,e as n,o as d,c as a,a as t,d as p,t as s,g as u,F as l}from"./index-b1b75b9c.js";const{VITE_APP_URL:_,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rin",BASE_URL:"/vue-week5/",MODE:"production",DEV:!1,PROD:!0},m={data(){return{product:{}}},methods:{...n(c,["addToCart"]),getProduct(){const{id:r}=this.$route.params;this.$http.get(`${_}/api/${h}/product/${r}`).then(e=>{this.product=e.data.product}).catch(e=>{alert(e)})}},mounted(){this.getProduct()}},P=t("h2",{class:"text-center"},"單一產品頁面",-1),f=["src"],g={class:"card-body"},T={class:"card-title"},A={class:"card-text"};function E(r,e,V,v,o,x){return d(),a(l,null,[P,t("div",null,[t("img",{src:o.product.imageUrl,alt:"product.title",style:{width:"300px"}},null,8,f),t("div",g,[t("h5",T,[p(s(o.product.title)+" ",1),t("span",null,s(o.product.category),1)]),t("h6",null,"描述："+s(o.product.description),1),t("p",A,"$ "+s(o.product.price)+" 元",1),t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=u(y=>r.addToCart(o.product.id),["prevent"]))},"加入購物車")])])],64)}const k=i(m,[["render",E]]);export{k as default};