(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{12:function(e,t,a){e.exports=a(27)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c),l=a(1),s=a(10),i=a.n(s),u=a(11),m=a.n(u);a(25),a(26);var d=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(l.a)(r,2),u=s[0],d=s[1],p=Object(n.useState)(!0),b=Object(l.a)(p,2),h=b[0],g=b[1],E=Object(n.useState)(!0),y=Object(l.a)(E,2),v=y[0],f=y[1],w=Object(n.useState)(!0),x=Object(l.a)(w,2),k=x[0],O=x[1],j=Object(n.useState)(12),C=Object(l.a)(j,2),I=C[0],S=C[1];return Object(n.useEffect)((function(){var e=m()(a);console.log(e);var t=document.getElementById("password");""!==a?0===e.score?t.style.border="5px solid red":1===e.score?t.style.border="5px solid orange":2===e.score?t.style.border="5px solid yellow":3===e.score?t.style.border="5px solid lightgreen":4===e.score&&(t.style.border="5px solid green"):t.style.border="none"}),[a]),o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"result"},o.a.createElement("input",{type:"text",name:"password",id:"password",value:a,placeholder:"generated password",onChange:function(e){c(e.target.value)}}),o.a.createElement("button",{id:"copy",onClick:function(e){var t=document.getElementById("password");t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+a)}catch(n){console.log("Oops, unable to copy")}finally{t.blur()}}},o.a.createElement("span",{role:"img","aria-label":"clipboard"},"\ud83d\udccb")),o.a.createElement("button",{id:"generate",onClick:function(){var e="";if(h&&(e+="a-z"),u&&(e+="A-Z"),v&&(e+="0-9"),k&&(e+="$!@#%?&."),""!==I&&I>=0){var t=new i.a("[".concat(e,"]{").concat(I,"}"));c(t.gen())}}},"Generate")),o.a.createElement("div",{id:"options"},o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"text",id:"length",name:"length",value:I,maxLength:"2",onChange:function(e){e.target.value.match("^[0-9]*$")&&S(e.target.value)}}),o.a.createElement("label",{htmlFor:"isUppercase"}," Length ")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"uppercase",name:"uppercase",checked:u,onChange:function(){return d(!u)}}),o.a.createElement("label",{htmlFor:"uppercase"}," Include uppercase letters")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"lowercase",name:"lowercase",checked:h,onChange:function(){return g(!h)}}),o.a.createElement("label",{htmlFor:"lowercase"}," Include lowercase letters")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"number",name:"number",checked:v,onChange:function(){return f(!v)}}),o.a.createElement("label",{htmlFor:"number"}," Include numbers")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"symbol",name:"symbol",checked:k,onChange:function(){return O(!k)}}),o.a.createElement("label",{htmlFor:"symbol"}," Include symbols"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.40f08b24.chunk.js.map