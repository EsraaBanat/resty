(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),c=n(19),a=n.n(c),o=n(7),u=n(3),i=n(4),l=n.n(i),d=(n(45),n(46),n(0));var j=function(){return Object(d.jsx)("header",{"data-testid":"header",children:Object(d.jsx)("h1",{children:"RESTy"})})};n(48);var b=function(){return Object(d.jsx)("footer",{children:"\xa9 2022"})},h=n(8),O=n(20);n(49);var m=function(t){var e=Object(s.useState)(!1),n=Object(u.a)(e,2),r=n[0],c=n[1],a=Object(s.useState)(""),o=Object(u.a)(a,2),i=o[0],l=o[1],j=function(){var e=Object(O.a)(Object(h.a)().mark((function e(n){var s;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),s={method:n.target[0].value,url:n.target[1].value,body:i},console.log(s),t.handleApiCall(s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:j,children:[Object(d.jsx)("label",{className:"methods",children:Object(d.jsxs)("select",{onChange:function(t){"POST"==t.target.value||"PUT"==t.target.value?c(!0):c(!1)},id:"methods",children:[Object(d.jsx)("option",{"data-testid":"GET",value:"GET",children:"GET"}),Object(d.jsx)("option",{value:"POST",children:"POST"}),Object(d.jsx)("option",{value:"PUT",children:"PUT"}),Object(d.jsx)("option",{value:"DELETE",children:"DELETE"})]})}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{"data-testid":"input",name:"url",type:"text",required:!0,placeholder:"URL"})}),Object(d.jsx)("button",{"data-testid":"btn",type:"submit",children:"GO!"})]}),r?Object(d.jsxs)("div",{id:"text-body",children:[Object(d.jsx)("span",{children:"Body"}),Object(d.jsx)("textarea",{id:"body",onInput:function(t){var e=document.getElementById("body").value;l(e)}})]}):null]})};n(50);var f=function(t){return console.log("at result",t.result),Object(d.jsx)("section",{"data-testid":"results",children:Object(d.jsx)("pre",{children:t.result?JSON.stringify(t.result,void 0,2):null})})};var x=function(){var t=Object(s.useState)({data:null,requestParams:{}}),e=Object(u.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)({}),i=Object(u.a)(a,2),h=i[0],O=i[1];return Object(s.useEffect)((function(){"GET"==n.requestParams.method&&l.a.get(n.requestParams.url).then((function(t){O(t)})).catch((function(t){console.log(t),O({stauts:"Sorry Something went wrong"})})),"POST"==n.requestParams.method&&l.a.post(n.requestParams.url,n.requestParams.body).then((function(t){O(t)})).catch((function(t){console.log(t),O({stauts:"Sorry Something went wrong"})})),"PUT"==n.requestParams.method&&l.a.post(n.requestParams.url,n.requestParams.body).then((function(t){O(t)})).catch((function(t){console.log(t),O({stauts:"Sorry Something went wrong"})})),"DELETE"==n.requestParams.method&&l.a.post(n.requestParams.url).then((function(t){O({stauts:"Deleted Successfuly"})})).catch((function(t){console.log(t),O({stauts:"Sorry Something went wrong"})}))}),[n]),Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(m,{handleApiCall:function(t){c(Object(o.a)(Object(o.a)({},n),{},{data:h,requestParams:t})),console.log("TTT",h)},setResult:O}),Object(d.jsxs)("div",{id:"body",children:[Object(d.jsxs)("div",{id:h?"method":null,children:[Object(d.jsx)("div",{children:n.requestParams.method}),Object(d.jsx)("div",{children:n.requestParams.url})]}),Object(d.jsx)(f,{result:h})]}),Object(d.jsx)(b,{})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),s(t),r(t),c(t),a(t)}))};a.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})})),g()}},[[51,1,2]]]);
//# sourceMappingURL=main.26fe7706.chunk.js.map