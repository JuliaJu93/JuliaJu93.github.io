(this.webpackJsonpempha_soft=this.webpackJsonpempha_soft||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),l=n(9),u=n(1),i=(n(23),n(8));var s=function(){return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){window.location.href="https://oauth.vk.com/authorize?client_id=7557493&display=page&redirect_uri=https://juliaju93.github.io/EmphaSoft/login&response_type=token&scope=friends&"}}," \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f "))};var m=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=(t[0],t[1]);return Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.hash).get("#access_token");e&&(localStorage.setItem("authToken",e),n(!0))})),c.a.createElement("div",null,localStorage.getItem("authToken")&&c.a.createElement(u.a,{to:"/"}),c.a.createElement(s,null))},h=n(17),f=function(e){var t=e.component,n=Object(h.a)(e,["component"]);return c.a.createElement(u.b,Object.assign({},n,{render:function(e){return localStorage.getItem("authToken")?c.a.createElement(t,e):c.a.createElement(u.a,{to:"/login"})}}))};function p(e){return fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}))}var E=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),u=l[0],s=l[1],m=localStorage.getItem("authToken");return Object(a.useEffect)((function(){p("https://api.vk.com/method/users.get?access_token=".concat(m,"&v=5.122")).then((function(e){r(e.response[0])})).catch((function(e){return alert("\u041e\u0448\u0438\u0431\u043a\u0430: \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e)})),p("https://api.vk.com/method/friends.get?count=5&fields=nickname&fields=photo_100&access_token=".concat(m,"&v=5.122")).then((function(e){s(e.response.items)})).catch((function(e){return alert("\u041e\u0448\u0438\u0431\u043a\u0430: \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439",e)}))}),[]),c.a.createElement("div",null,n&&c.a.createElement("h1",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",n.last_name," ",n.first_name),c.a.createElement("h2",null," \u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439:"),c.a.createElement("ul",null,function(){if(u.length)return u.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("img",{src:e.photo_100,alt:e.last_name}),c.a.createElement("span",null,e.first_name," ",e.last_name))}))}()))};function d(){return c.a.createElement(l.a,null,c.a.createElement("main",null,c.a.createElement(u.d,null,c.a.createElement(f,{exact:!0,path:"/",component:E})),c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/login"},c.a.createElement(m,null)))))}o.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.abce26c8.chunk.js.map