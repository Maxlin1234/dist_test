import{_ as y}from"./Navbar.444e9762.js";import{_ as w}from"./Header.2ab67275.js";import{_ as v}from"./nuxt-link.aa6fd3b7.js";import{i as k}from"./initIsotope.c6ab8537.js";import{h as b,o as s,b as i,f as t,F as l,l as c,u as d,m as _,t as g,e as a,w as m,j as x,a as D,r as T}from"./entry.5846c6b5.js";const j=[{id:1,title:"All",filter:"*",count:"08"},{id:2,title:"Branding",filter:".brand",count:"03"},{id:3,title:"Mobile App",filter:".app",count:"02"},{id:4,title:"Creative",filter:".web",count:"03"}],A=[{id:1,filter:"web",image:"/dark/assets/imgs/works/grid2/1.jpg",type:"Design ART",year:"2023",title:"Character Design"},{id:2,filter:"app",image:"/dark/assets/imgs/works/grid2/v1.jpg",type:"Design ART",year:"2023",title:"Character Design"},{id:3,filter:"brand",image:"/dark/assets/imgs/works/grid2/v2.jpg",type:"Design ART",year:"2023",title:"Character Design"},{id:4,filter:"web",image:"/dark/assets/imgs/works/grid2/2.jpg",type:"Design ART",year:"2023",title:"Character Design"},{id:5,filter:"brand",image:"/dark/assets/imgs/works/grid2/3.jpg",type:"Design ART",year:"2023",title:"Character Design"},{id:6,filter:"app",image:"/dark/assets/imgs/works/grid2/v3.jpg",type:"Design ART",year:"2023",title:"Character Design"}],p={filters:j,gallery:A},M={class:"portfolio section-padding pb-40"},B={class:"container-xxl"},R={class:"row"},F={class:"filtering col-12 mb-80 text-center"},N={class:"filter"},V=t("span",{class:"text"},"Filter By :",-1),$=["data-filter","data-count"],H={class:"gallery"},L={class:"row masonry max-margin"},P={class:"item-img o-hidden"},S={class:"inner wow"},z=["src"],E={class:"info"},I=t("span",{class:"mb-15"},[t("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])],-1),O={__name:"2Col",setup(f){return b(()=>{setTimeout(()=>{k()},100)}),(n,u)=>{const o=v;return s(),i("section",M,[t("div",B,[t("div",R,[t("div",F,[t("div",N,[V,(s(!0),i(l,null,c(d(p).filters,(e,r)=>(s(),i("span",{"data-filter":e.filter,class:_(r===0?"active":""),"data-count":e.count,key:e.id},g(e.title),11,$))),128))])])]),t("div",H,[t("div",L,[(s(!0),i(l,null,c(d(p).gallery,e=>(s(),i("div",{class:_(`col-md-6 items ${e.filter} info-overlay mb-80`),key:e.id},[t("div",P,[a(o,{to:"/dark/project-details1",class:"imago wow"},{default:m(()=>[t("div",S,[t("img",{src:e.image,alt:"image"},null,8,z)])]),_:2},1024),t("div",E,[I,t("h5",null,[a(o,{to:"/dark/project-details1"},{default:m(()=>[x(g(e.title),1)]),_:2},1024)])])])],2))),128))])])])])}}},W={class:"main-bg"},Q={__name:"index",setup(f){const n={subTitle:"Our Works",title:"Masonry 2."};return D({titleTemplate:"%s - Portfolio Masonry 2 Col",bodyAttrs:{class:"main-bg"}}),(u,o)=>{const e=y,r=w,h=O,C=T("StartupFooter");return s(),i("div",null,[a(e,{lightMode:!0}),t("main",W,[a(r,{data:n}),a(h)]),a(C,{subBg:!0,lightMode:!0})])}}};export{Q as default};
