(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{15:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(1),c=a.n(r),l=a(2),s=a(6),i=a(13),u=a.n(i),d=a(14),m=a.n(d);a(28),a(29),a(30);var p=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),i=Object(l.a)(c,2),d=i[0],p=i[1],b=Object(n.useState)(!0),h=Object(l.a)(b,2),g=h[0],E=h[1],v=Object(n.useState)(!0),y=Object(l.a)(v,2),f=y[0],w=y[1],O=Object(n.useState)(!0),k=Object(l.a)(O,2),x=k[0],j=k[1],C=Object(n.useState)(12),I=Object(l.a)(C,2),S=I[0],N=I[1];Object(n.useEffect)((function(){var e=m()(a);console.log(e);var t=document.getElementById("password");""!==a?0===e.score?t.style.border="5px solid red":1===e.score?t.style.border="5px solid orange":2===e.score?t.style.border="5px solid yellow":3===e.score?t.style.border="5px solid lightgreen":4===e.score&&(t.style.border="5px solid green"):t.style.border="none"}),[a]);var B=function(e){return Object(s.b)(e,{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"result"},o.a.createElement("input",{type:"text",name:"password",id:"password",value:a,placeholder:"generated password",onChange:function(e){r(e.target.value)}}),o.a.createElement("button",{id:"copy",onClick:function(e){var t=document.getElementById("password");t.focus(),t.select();try{document.execCommand("copy"),B("Copied to Clipboard :)")}catch(a){B("Oops, unable to copy")}finally{t.blur()}}},o.a.createElement("span",{role:"img","aria-label":"clipboard"},"\ud83d\udccb")),o.a.createElement("button",{id:"generate",onClick:function(){var e="";if(g&&(e+="a-z"),d&&(e+="A-Z"),f&&(e+="0-9"),x&&(e+="$!@#%?&."),""!==S&&S>=0){var t=new u.a("[".concat(e,"]{").concat(S,"}"));r(t.gen())}}},"Generate")),o.a.createElement("div",{id:"options"},o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"text",id:"length",name:"length",value:S,maxLength:"2",onChange:function(e){e.target.value.match("^[0-9]*$")&&N(e.target.value)}}),o.a.createElement("label",{htmlFor:"length"}," Length ")),o.a.createElement("div",{id:"checkboxes"},o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"uppercase",name:"uppercase",checked:d,onChange:function(){return p(!d)}}),o.a.createElement("label",{htmlFor:"uppercase"}," Include uppercase letters")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"lowercase",name:"lowercase",checked:g,onChange:function(){return E(!g)}}),o.a.createElement("label",{htmlFor:"lowercase"}," Include lowercase letters")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"number",name:"number",checked:f,onChange:function(){return w(!f)}}),o.a.createElement("label",{htmlFor:"number"}," Include numbers")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{type:"checkbox",id:"symbol",name:"symbol",checked:x,onChange:function(){return j(!x)}}),o.a.createElement("label",{htmlFor:"symbol"}," Include symbols")))),o.a.createElement(s.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d0235d35.chunk.js.map