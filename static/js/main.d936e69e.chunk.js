(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(17),i=c.n(n),a=c(10),r=c.n(a),j=c(18),l=c(15),o=c(16),d=c.n(o),h=c(4),b=(c(133),c(3)),O=function(e){var t=e.id,c=e.go,s=e.fetchedUser;return Object(b.jsxs)(h.l,{id:t,children:[Object(b.jsx)(h.m,{children:"\u041d\u0435 \u043f\u0440\u0438\u043c\u0435\u0440"}),s&&Object(b.jsxs)(h.j,{header:Object(b.jsx)(h.k,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:[Object(b.jsx)(h.g,{before:s.photo_200?Object(b.jsx)(h.c,{src:s.photo_200}):null,description:s.city&&s.city.title?s.city.title:"",children:"".concat(s.first_name," ").concat(s.last_name)}),Object(b.jsxs)(h.g,{children:["\u041c\u043d\u0435 \u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0442\u044b \u0436\u0438\u0432\u0435\u0448\u044c  \u0432 ",s.country.title," "]}),Object(b.jsx)(h.d,{stretched:!0,size:"l",onClick:c,"data-to":"pageS",children:"Show me all money, please"})]}),Object(b.jsx)(h.j,{header:Object(b.jsx)(h.k,{mode:"secondary",children:"Navigation Example"}),children:Object(b.jsx)(h.i,{children:Object(b.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persika, please"})})})]})},x=c.p+"static/media/persik.ae9f0072.png",u=(c(135),function(e){return Object(b.jsxs)(h.l,{id:e.id,children:[Object(b.jsx)(h.m,{left:Object(b.jsx)(h.n,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(b.jsx)("img",{className:"Persik",src:x,alt:"Persik The Cat"})]})}),p=(c(136),function(e){return Object(b.jsxs)(h.l,{id:e.id,children:[Object(b.jsx)(h.m,{left:Object(b.jsx)(h.n,{onClick:e.go,"data-to":"home"}),children:"\u042f \u0432\u0437\u044f\u043b \u043b\u0443\u0442 \u0438 \u0432\u044b\u0448\u0435\u043b!"}),Object(b.jsx)(h.i,{children:Object(b.jsx)(h.d,{stretched:!0,size:"l",children:" Show me the Persik, please "})}),Object(b.jsx)(h.i,{children:Object(b.jsx)(h.f,{size:"l",children:Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"about",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:64}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u0442\u044b \u0436\u0435 \u0445\u043e\u0447\u0435\u0448\u044c \u043d\u0430\u0436\u0430\u0442\u044c?"})]})})})]})}),m=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/todos");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.next=9,i(c);case 9:console.log("ssssssssss"+n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)(h.l,{id:e.id,children:[Object(b.jsx)(h.m,{left:Object(b.jsx)(h.n,{onClick:e.go,"data-to":"home"}),children:"\u0422\u0443\u0442\u043e\u0438\u0440\u0430\u043b!"}),Object(b.jsx)(h.i,{children:Object(b.jsxs)(h.f,{size:"l",children:[n.map((function(e){return Object(b.jsxs)(h.e,{"data-to":"pageS",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:64}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:e.todo.title})]})})),Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"pageS",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:64}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u0442\u044b \u0436\u0435 \u0445\u043e\u0447\u0435\u0448\u044c \u043d\u0430\u0436\u0430\u0442\u044c?"})]}),Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"pageS",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:72}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u041d\u0435\u0442?"}),Object(b.jsx)(h.g,{children:" \u0414\u0410 \u043d\u0443?"})]}),Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"pageS",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:72}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u043e\u043a \u0430\u0439\u043c \u0433\u043e"})]})]})})]})},f=function(){var e=Object(s.useState)("bright_light"),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)("home"),a=Object(l.a)(i,2),o=a[0],x=a[1],f=Object(s.useState)(null),g=Object(l.a)(f,2),k=g[0],v=g[1],y=Object(s.useState)(Object(b.jsx)(h.o,{size:"large"})),S=Object(l.a)(y,2),N=S[0],z=S[1];Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,v(t);case 5:z(null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;"VKWebAppUpdateConfig"===c&&n(s.scheme)})),function(){e.apply(this,arguments)}()}),[]);var C=function(e){x(e.currentTarget.dataset.to)};return Object(b.jsxs)(h.h,{scheme:c,children:[" //\u0442\u0435\u043c\u0430",Object(b.jsx)(h.a,{children:Object(b.jsx)(h.b,{children:Object(b.jsx)(h.q,{popout:N,children:Object(b.jsx)(h.p,{children:Object(b.jsxs)(h.r,{activePanel:o,children:[Object(b.jsx)(O,{id:"home",fetchedUser:k,go:C}),Object(b.jsx)(u,{id:"persik",go:C}),Object(b.jsx)(p,{id:"pageS",go:C}),Object(b.jsx)(m,{id:"about",go:C})]})})})})})]})};r.a.send("VKWebAppInit"),i.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.d936e69e.chunk.js.map