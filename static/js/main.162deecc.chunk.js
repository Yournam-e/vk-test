(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(16),n=c.n(i),j=c(10),a=c.n(j),r=c(24),d=c(15),l=c(20),o=c.n(l),h=c(4),b=(c(133),c(3)),O=function(e){var t=e.id,c=e.go,s=e.fetchedUser;return Object(b.jsxs)(h.l,{id:t,children:[Object(b.jsx)(h.m,{children:"\u041d\u0435 \u043f\u0440\u0438\u043c\u0435\u0440"}),s&&Object(b.jsxs)(h.j,{header:Object(b.jsx)(h.k,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:[Object(b.jsx)(h.g,{before:s.photo_200?Object(b.jsx)(h.c,{src:s.photo_200}):null,description:s.city&&s.city.title?s.city.title:"",children:"".concat(s.first_name," ").concat(s.last_name)}),Object(b.jsxs)(h.g,{children:["\u041c\u043d\u0435 \u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0442\u044b \u0436\u0438\u0432\u0435\u0448\u044c  \u0432 ",s.country.title," "]}),Object(b.jsx)(h.d,{stretched:!0,size:"l",onClick:c,"data-to":"pageS",children:"Show me all money, please"})]}),Object(b.jsx)(h.j,{header:Object(b.jsx)(h.k,{mode:"secondary",children:"Navigation Example"}),children:Object(b.jsx)(h.i,{children:Object(b.jsx)(h.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persika, please"})})})]})},x=c.p+"static/media/persik.ae9f0072.png",p=(c(135),function(e){return Object(b.jsxs)(h.l,{id:e.id,children:[Object(b.jsx)(h.m,{left:Object(b.jsx)(h.n,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(b.jsx)("img",{className:"Persik",src:x,alt:"Persik The Cat"})]})}),u=(c(136),function(e){return Object(b.jsxs)(h.l,{id:e.id,children:[Object(b.jsx)(h.m,{left:Object(b.jsx)(h.n,{onClick:e.go,"data-to":"home"}),children:"\u042f \u0432\u0437\u044f\u043b \u043b\u0443\u0442 \u0438 \u0432\u044b\u0448\u0435\u043b"}),Object(b.jsx)(h.i,{children:Object(b.jsx)(h.d,{stretched:!0,size:"l",children:" Show me the Persik, please "})}),Object(b.jsx)(h.i,{children:Object(b.jsx)(h.f,{size:"l",children:Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"about",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:64}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u0442\u044b \u0436\u0435 \u0445\u043e\u0447\u0435\u0448\u044c \u043d\u0430\u0436\u0430\u0442\u044c?"})]})})})]})}),m=function(e){return Object(b.jsxs)(h.l,{id:e.id,children:[Object(b.jsx)(h.m,{left:Object(b.jsx)(h.n,{onClick:e.go,"data-to":"home"}),children:"\u0422\u0443\u0442\u043e\u0438\u0440\u0430\u043b"}),Object(b.jsx)(h.i,{children:Object(b.jsxs)(h.f,{size:"l",children:[Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"pageS",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:64}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u0442\u044b \u0436\u0435 \u0445\u043e\u0447\u0435\u0448\u044c \u043d\u0430\u0436\u0430\u0442\u044c?"})]}),Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"pageS",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:72}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u041d\u0435\u0442?"}),Object(b.jsx)(h.g,{children:" \u0414\u0410 \u043d\u0443?"})]}),Object(b.jsxs)(h.e,{onClick:e.go,"data-to":"pageS",className:"parent",mode:"outline",children:[Object(b.jsx)("div",{style:{height:72}}),Object(b.jsx)(h.d,{className:"child",size:"s",children:" \u043e\u043a \u0430\u0439\u043c \u0433\u043e"})]})]})})]})},g=function(){var e=Object(s.useState)("bright_light"),t=Object(d.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)("home"),j=Object(d.a)(n,2),l=j[0],x=j[1],g=Object(s.useState)(null),f=Object(d.a)(g,2),k=f[0],y=f[1],v=Object(s.useState)(Object(b.jsx)(h.o,{size:"large"})),S=Object(d.a)(v,2),C=S[0],z=S[1];Object(s.useEffect)((function(){function e(){return(e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,y(t);case 5:z(null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;"VKWebAppUpdateConfig"===c&&i(s.scheme)})),function(){e.apply(this,arguments)}()}),[]);var N=function(e){x(e.currentTarget.dataset.to)};return Object(b.jsxs)(h.h,{scheme:c,children:[" //\u0442\u0435\u043c\u0430",Object(b.jsx)(h.a,{children:Object(b.jsx)(h.b,{children:Object(b.jsx)(h.q,{popout:C,children:Object(b.jsx)(h.p,{children:Object(b.jsxs)(h.r,{activePanel:l,children:[Object(b.jsx)(O,{id:"home",fetchedUser:k,go:N}),Object(b.jsx)(p,{id:"persik",go:N}),Object(b.jsx)(u,{id:"pageS",go:N}),Object(b.jsx)(m,{id:"about",go:N})]})})})})})]})};a.a.send("VKWebAppInit"),n.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.162deecc.chunk.js.map