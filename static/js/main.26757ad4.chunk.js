(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(21),a=n.n(c),o=n(9),u=n(3),l=n(23),i=n(5),d=n.n(i),j=(n(48),n(49),n(0));var h=function(){return Object(j.jsx)("header",{"data-testid":"header",children:Object(j.jsx)("h1",{children:"RESTy"})})};n(51);var b=function(){return Object(j.jsx)("footer",{children:"\xa9 2022"})},O=n(10),f=n(22);n(52);var m=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),s=n[0],c=n[1],a=Object(r.useState)(""),o=Object(u.a)(a,2),l=o[0],i=o[1],d=function(){var t=Object(f.a)(Object(O.a)().mark((function t(n){var r;return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r={method:n.target[0].value,url:n.target[1].value,body:l},console.log(r),e.handleApiCall(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:d,children:[Object(j.jsx)("label",{className:"methods",children:Object(j.jsxs)("select",{onChange:function(e){"POST"==e.target.value||"PUT"==e.target.value?c(!0):c(!1)},id:"methods",children:[Object(j.jsx)("option",{"data-testid":"GET",value:"GET",children:"GET"}),Object(j.jsx)("option",{value:"POST",children:"POST"}),Object(j.jsx)("option",{value:"PUT",children:"PUT"}),Object(j.jsx)("option",{value:"DELETE",children:"DELETE"})]})}),Object(j.jsx)("label",{children:Object(j.jsx)("input",{"data-testid":"input",name:"url",type:"text",required:!0,placeholder:"URL"})}),Object(j.jsx)("button",{"data-testid":"btn",type:"submit",children:"GO!"})]}),s?Object(j.jsxs)("div",{id:"text-body",children:[Object(j.jsx)("span",{children:"Body"}),Object(j.jsx)("textarea",{id:"body",onInput:function(e){var t=document.getElementById("body").value;i(t)}})]}):null]})};n(53);var x=function(e){return console.log("at result",e.result),Object(j.jsx)("section",{"data-testid":"results",children:Object(j.jsx)("pre",{children:e.result?JSON.stringify(e.result,void 0,2):null})})};var v=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),s=n[0],c=n[1];return Object(j.jsxs)("div",{id:"history",children:[Object(j.jsx)("h1",{children:"History"}),e.history?e.history.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h4",{children:["Method : ",e.method]}),Object(j.jsxs)("h4",{children:["URL : ",e.url]}),Object(j.jsx)("button",{onClick:function(){c(!s)},children:"Show Results"}),s?Object(j.jsxs)("h5",{children:["Results : ",JSON.stringify(e.results,void 0,2)]}):null,Object(j.jsx)("hr",{})]},t)})):null,Object(j.jsx)("button",{onClick:e.handleClear,children:"Clear All"})]})};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"ADD_HISTORY":console.log("state.history",e);var s=[].concat(Object(l.a)(e),[r]);return console.log("history",s),s;case"CLEAR_HISTORY":return g;default:return e}}var g=[];var y=function(){var e=Object(r.useState)({data:null,requestParams:{}}),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),l=Object(u.a)(a,2),i=l[0],O=l[1],f=Object(r.useReducer)(p,g),y=Object(u.a)(f,2),S=y[0],P=y[1];return Object(r.useEffect)((function(){"GET"==n.requestParams.method&&d.a.get(n.requestParams.url).then((function(e){O(e)})).catch((function(e){console.log(e),O({stauts:"Sorry Something went wrong"})})),"POST"==n.requestParams.method&&d.a.post(n.requestParams.url,n.requestParams.body).then((function(e){O(e)})).catch((function(e){console.log(e),O({stauts:"Sorry Something went wrong"})})),"PUT"==n.requestParams.method&&d.a.post(n.requestParams.url,n.requestParams.body).then((function(e){O(e)})).catch((function(e){console.log(e),O({stauts:"Sorry Something went wrong"})})),"DELETE"==n.requestParams.method&&d.a.post(n.requestParams.url).then((function(e){O({stauts:"Deleted Successfuly"})})).catch((function(e){console.log(e),O({stauts:"Sorry Something went wrong"})}))}),[n]),Object(r.useEffect)((function(){i&&P({type:"ADD_HISTORY",payload:{method:n.requestParams.method,url:n.requestParams.url,results:i}})}),[i,n]),Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(m,{handleApiCall:function(e){c(Object(o.a)(Object(o.a)({},n),{},{data:i,requestParams:e}))},setResult:O}),Object(j.jsxs)("div",{id:"body",children:[Object(j.jsxs)("div",{id:i?"method":null,children:[Object(j.jsx)("div",{children:n.requestParams.method}),Object(j.jsx)("div",{children:n.requestParams.url})]}),Object(j.jsx)(x,{result:i}),i?Object(j.jsx)(v,{handleClear:function(e){e.preventDefault(),P({type:"CLEAR_HISTORY",payload:""})},history:S}):null]}),Object(j.jsx)(b,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})})),S()}},[[54,1,2]]]);
//# sourceMappingURL=main.26757ad4.chunk.js.map