(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(1),a=i(7),s=i.n(a),d=i(3),r=i.n(d),o=i(4),l=i(2),u="https://run.mocky.io/v3",j=function(){var e=Object(o.a)(r.a.mark((function e(t){var i,n,c,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>1&&void 0!==a[1]?a[1]:"GET",e.next=3,fetch(u+t,{method:i});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){return j("/818d0158-727b-461e-9f76-06734ed7e582")},b=function(e){return Math.round(e-273.15)},v=function(e){var t=new Date(e).getHours();return t>4&&t<12?"Good Morning":t>=12&&t<18?"Good Afternoon":"Good Nigth"},f=function(e){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][new Date(e).getDay()]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.filter((function(e){return e.main_headquarter===t}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e[0];return e.forEach((function(e){e.main.humidity<t.main.humidity&&(t=e)})),t},g="#d95ecd",x="#597aef",p="#ffb82c",w="#fff",N=(i(14),function(e){var t=e.title,i=e.color,c=e.className;return Object(n.jsxs)("p",{className:"badge",children:[Object(n.jsx)("i",{className:"fas fa-circle mx-10",style:{color:i}}),Object(n.jsx)("span",{className:c,children:t})]})}),y=(i(15),function(e){var t=e.city,i=e.icon,c=e.background,a=e.classname;return Object(n.jsxs)("div",{className:"".concat(c?"purple-background":"","   widget-headquarter-content"),children:[i&&Object(n.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(n.jsx)("p",{className:"".concat(a||""," widget-headquarter"),children:t})]})}),S=(i(16),function(e){var t=e.icon,i=e.color,c=e.size,a=void 0===c?70:c;return Object(n.jsx)("div",{className:"",children:Object(n.jsx)("i",{className:"wi wi-day-".concat(t," widget-icon"),style:{fontSize:a+"px",color:i}})})}),_=function(e){var t=e.children,i=e.icon,c=e.iconColor,a=e.iconSize,s=e.backgroundColor;return Object(n.jsxs)("div",{className:"container-card",style:s&&{background:s},children:[i&&Object(n.jsx)("div",{className:"leading-icon",children:Object(n.jsx)(S,{icon:i,size:a,color:c})}),t]})},k=(i(17),function(e){var t=e.city,i=e.desc,c=e.temp,a=e.humidity,s=e.windSpeed,d=e.icon,r=e.image;return Object(n.jsx)("div",{className:"widget-card",children:Object(n.jsx)(_,{icon:d,iconSize:60,backgroundColor:w,iconColor:p,children:Object(n.jsxs)("div",{className:"widget-card-wrapper",children:[Object(n.jsx)("div",{className:"widget-card-image",children:Object(n.jsx)("img",{src:r,alt:"city"})}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(y,{city:t,icon:!0,classname:"widget-headquarter-name"}),Object(n.jsx)("p",{className:"widget-headquarter-desc",children:i}),Object(n.jsxs)("div",{className:"badges",children:[Object(n.jsx)(N,{className:"widget-temperature",title:b(c)+"\xb0 C",color:p}),Object(n.jsx)(N,{className:"widget-humidity",title:a+"%",color:g}),Object(n.jsx)(N,{className:"widget-wind",title:s+" m/s",color:x})]})]})]})})})}),C=(i(18),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),i=t[0],a=t[1],s=function(){var e=Object(o.a)(r.a.mark((function e(){var t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,i=O(t.places,!1),a(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(n.jsxs)("section",{id:"widget-favorite",className:"widget-favorite animate__animated animate__slow animate__fadeInLeft",children:[Object(n.jsxs)("h2",{className:"mb-4 mt-4 title-section",children:["Our favorite ",Object(n.jsx)("span",{children:"places"})]}),Object(n.jsx)("div",{className:"favorite-list",children:i.length>0&&i.map((function(e){return Object(n.jsx)(k,{city:"".concat(null===e||void 0===e?void 0:e.name," - ").concat(null===e||void 0===e?void 0:e.sys.country),desc:null===e||void 0===e?void 0:e.description,temp:null===e||void 0===e?void 0:e.main.temp,humidity:null===e||void 0===e?void 0:e.main.humidity,icon:null===e||void 0===e?void 0:e.weather[0].icon,windSpeed:null===e||void 0===e?void 0:e.wind.speed,image:null===e||void 0===e?void 0:e.image},e.id)}))})]})}),E=(i(19),function(e){var t=e.temp;return Object(n.jsxs)("p",{className:"temp-title",children:[b(t),"\xb0 C"]})}),I=(i(20),function(e){var t=e.city,i=e.temp,c=e.humidity,a=e.windSpeed,s=e.icon,d=e.image,r=e.date;return Object(n.jsx)(_,{icon:s,iconSize:100,iconColor:p,children:Object(n.jsxs)("div",{id:"widget-header",className:"widget-header animate__animated animate__slow animate__fadeInDown",children:[Object(n.jsx)("img",{src:d,className:"widget-header-image card-border",alt:"city"}),Object(n.jsxs)("div",{className:"widget-content",children:[Object(n.jsx)(y,{city:t,icon:!0,background:!0}),Object(n.jsx)("div",{className:"mt-10",children:Object(n.jsx)(E,{temp:i})}),Object(n.jsxs)("div",{className:"widget-content-badges mb-6",children:[Object(n.jsx)(N,{className:"widget-humidity",title:c+"%",color:g}),Object(n.jsx)(N,{className:"widget-wind",title:a+" m/s",color:x})]}),Object(n.jsxs)("div",{className:"widget-message-date",children:[Object(n.jsxs)("p",{children:[v(r),","]}),Object(n.jsx)("p",{className:"condor-text",children:"Condor!"})]})]})]})})}),z=function(e){var t=Object(c.useState)({data:null,loading:!0,error:null}),i=Object(l.a)(t,2),n=i[0],a=i[1];return Object(c.useEffect)((function(){a({data:null,loading:!0,error:null}),e().then((function(e){a({loading:!1,error:null,data:e})})).catch((function(){a({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e]),n},q=(i(21),function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("i",{className:"fas fa-spinner"})})}),T=function(){var e=z(m),t=Object(c.useState)({}),i=Object(l.a)(t,2),a=i[0],s=i[1],d=function(){var t=Object(o.a)(r.a.mark((function t(){var i,n,c,a,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=null===(i=e.data)||void 0===i?void 0:i.places,sessionStorage.getItem("getvenues")||sessionStorage.setItem("getvenues",JSON.stringify(r)),c=O(null===(n=e.data)||void 0===n?void 0:n.places,!0),a=Object(l.a)(c,1),d=a[0],s(d);case 3:case"end":return t.stop()}var r}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()})),Object(n.jsx)("header",{children:e.loading?Object(n.jsx)(q,{}):Object(n.jsx)(I,{city:null===a||void 0===a?void 0:a.name,temp:null===a||void 0===a?void 0:a.main.temp,humidity:null===a||void 0===a?void 0:a.main.humidity,windSpeed:null===a||void 0===a?void 0:a.wind.speed,icon:null===a||void 0===a?void 0:a.weather[0].icon,image:null===a||void 0===a?void 0:a.image,date:null===a||void 0===a?void 0:a.date})})},D=i(5),G=function(){return j("/73c29128-d158-40db-aeae-ea78a0d762b7")},J=(i(22),function(){var e=z(G),t=Object(c.useState)([]),i=Object(l.a)(t,2),a=i[0],s=i[1],d=Object(c.useState)({current:0,next:3}),r=Object(l.a)(d,2),o=r[0],u=r[1],j=function(){3!==o.next?u(Object(D.a)(Object(D.a)({},o),{},{current:0,next:3})):u(Object(D.a)(Object(D.a)({},o),{},{current:3,next:6}))};return Object(c.useEffect)((function(){!function(){var t;e.data&&s(null===(t=e.data)||void 0===t?void 0:t.list)}()})),Object(n.jsxs)("section",{id:"widget-carousel",className:"widget-carousel mt-3 animate__animated animate__slow animate__fadeInUp",children:[Object(n.jsxs)("div",{className:"widget-carousel-header",children:[Object(n.jsx)("h3",{className:"widget-carousel-header-title",children:"Forecast Extended"}),Object(n.jsxs)("div",{className:"wrapper-button",children:[Object(n.jsx)("button",{className:"arrow-button",onClick:j,children:Object(n.jsx)("i",{className:"fas fa-arrow-left"})}),Object(n.jsx)("button",{className:"arrow-button",onClick:j,children:Object(n.jsx)("i",{className:"fas fa-arrow-right"})})]})]}),Object(n.jsx)("div",{className:"list-items",children:!e.loading&&a.slice(o.current,o.next).map((function(e,t){return Object(n.jsx)(M,{date:e.date,temp:e.main.temp,humidity:e.main.humidity,windSpeed:e.wind.speed},t)}))})]})}),M=function(e){var t=e.date,i=e.temp,c=e.humidity,a=e.windSpeed;return Object(n.jsxs)("div",{className:"widget-carousel-item",children:[Object(n.jsx)("p",{className:"widget-day",children:f(t)}),Object(n.jsx)(E,{temp:i}),Object(n.jsxs)("div",{className:"badges",children:[Object(n.jsx)(N,{title:c+"%",color:g}),Object(n.jsx)(N,{title:a+" m/s",color:x})]})]})},A=(i(23),function(e){var t=e.city,i=e.temp,c=e.humidity,a=e.windSpeed,s=e.icon,d=e.date;return Object(n.jsx)(_,{icon:s,iconColor:p,backgroundColor:"linear-gradient(163deg,rgba(89, 122, 239, 1)  39%,rgba(90, 0, 234, 1) 100%)",children:Object(n.jsxs)("div",{className:"wrapper-card",children:[Object(n.jsx)(y,{city:t,icon:!0,classname:"widget-day"}),Object(n.jsx)(E,{temp:i}),Object(n.jsxs)("div",{className:"footer-card",children:[Object(n.jsxs)("div",{className:"badges",children:[Object(n.jsx)(N,{className:"widget-humidity",title:c+"%",color:g}),Object(n.jsx)(N,{className:"widget-wind",title:a+" m/s",color:x})]}),Object(n.jsx)("p",{className:"widget-day",children:f(d)})]})]})})}),F=function(){var e,t,i=z(G),a=Object(c.useState)({}),s=Object(l.a)(a,2),d=s[0],r=s[1],o=function(){var e,t=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return b(e.main.temp)>=25&&b(e.main.temp)<=28}));return h(e)}(null===(e=i.data)||void 0===e?void 0:e.list);r(t)};return Object(c.useEffect)((function(){o()}),[!i.loading]),Object(n.jsxs)("section",{id:"widget-suggest",className:"widget-suggest",children:[Object(n.jsxs)("h2",{className:"mt-4 mb-3 title-section",children:["HeadQuater ",Object(n.jsx)("span",{children:"Suggest"})]}),!i.loading&&Object(n.jsx)(A,{city:"".concat(null===(e=i.data)||void 0===e?void 0:e.city.name," - ").concat(null===(t=i.data)||void 0===t?void 0:t.city.country),temp:null===d||void 0===d?void 0:d.main.temp,humidity:null===d||void 0===d?void 0:d.main.humidity,date:null===d||void 0===d?void 0:d.date,icon:null===d||void 0===d?void 0:d.weather[0].icon,windSpeed:null===d||void 0===d?void 0:d.wind.speed})]})},H=function(){return j("/f8926877-849a-416f-8226-9fd9d9fc5e07")},L=(i(24),function(e){var t=e.city,i=e.image;return Object(n.jsxs)("div",{className:"widget-card",children:[Object(n.jsx)("div",{className:"widget-card-image",children:Object(n.jsx)("img",{className:"",src:i,alt:"city"})}),Object(n.jsxs)("div",{className:"widget-card-content",children:[Object(n.jsx)("p",{className:"widget-city-name",children:t}),Object(n.jsx)("a",{href:"https://condorlabs.io/",target:"_blank",className:"visit-button",children:"Visit place"})]})]})}),V=(i(25),function(){var e=z(H),t=Object(c.useState)([]),i=Object(l.a)(t,2),a=i[0],s=i[1],d=function(){var t,i=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return b(e.main.temp)>=24&&b(e.main.temp)<=30}))}(null===(t=e.data)||void 0===t?void 0:t.result);s(i)};return Object(c.useEffect)((function(){d()}),[!e.loading]),Object(n.jsxs)("section",{id:"widget-cities",className:"widget-cities animate__animated animate__slow animate__fadeInRight",children:[Object(n.jsxs)("h2",{className:"mb-3 mt-4 title-section",children:["PLACE TO ",Object(n.jsx)("span",{children:"VISIT"})]}),!e.loading&&Object(n.jsx)("div",{className:"cities-list",children:a.map((function(e){return Object(n.jsx)(L,{city:e.name,image:e.image},e.id)}))})]})}),B=(i(26),function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{}),Object(n.jsx)(J,{}),Object(n.jsx)(C,{}),Object(n.jsx)(V,{}),Object(n.jsx)(F,{})]})});s.a.render(Object(n.jsx)(B,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.cc2c170c.chunk.js.map