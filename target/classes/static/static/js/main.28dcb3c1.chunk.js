(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(44)},26:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(18),r=a.n(l),c=(a(26),a(6)),i=a(7),m=a(9),u=a(8),d=a(10),s=(a(28),a(47));var p=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,o.a.createElement(s.a,{to:"/",style:{textDecoration:"none",color:"#e1e1e1"}},e.title)),o.a.createElement(s.a,{style:{color:"#e1e1e1",textDecoration:"none"},to:"/client-data"},"/client-data >>"),o.a.createElement(s.a,{style:{color:"#e1e1e1",textDecoration:"none"},to:"/result"},"/result"))},E=a(48),h=a(32),b=a(45),j=a(49),y=a(15),f=a(19),O=a(11);a(34);var k=function(e){var t=new Array(10).fill(0);return o.a.createElement("select",{className:"personSelect",name:"person-count"},t.map(function(e,t){return o.a.createElement("option",{key:t,value:t+1},t+1)}))};a(36);var w=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{className:"home-form-heading"},"1. Wybierz termin kt\xf3ry Ci\u0119 interesuje"),o.a.createElement("form",{className:"home-form"},o.a.createElement("input",{type:"date",placeholder:"Data przyjazdu"}),o.a.createElement("input",{type:"date",placeholder:"Data wyjazdu"}),o.a.createElement("div",null,o.a.createElement("h3",{className:"home-form-heading"},"2. Wybierz liczb\u0119 os\xf3b"),o.a.createElement(k,{options:e.options,handler:e.chooseRoomOptionHandler}))),o.a.createElement("button",{className:"home-form-button"},"Szukaj"))};a(38),a(40);var v=function(e){return o.a.createElement("table",null,o.a.createElement("caption",null,"Nasze propozycje dla Ciebie"),o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Rodzaj pokoju"),o.a.createElement("th",{scope:"col"},"Typ pokoju"),o.a.createElement("th",{scope:"col"},"Cena"),o.a.createElement("th",{scope:"col"},"Okres Pobytu"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{"data-label":"Rodzaj pokoju"},"Visa - 3412"),o.a.createElement("td",{"data-label":"Typ pokoju"},"04/01/2016"),o.a.createElement("td",{"data-label":"Cena"},"$1,190"),o.a.createElement("td",{"data-label":"Okres pobytu"},"03/01/2016 - 03/31/2016")),o.a.createElement("tr",null,o.a.createElement("td",{scope:"row","data-label":"Rodzaj pokoju"},"Visa - 6076"),o.a.createElement("td",{"data-label":"Typ pokoju"},"03/01/2016"),o.a.createElement("td",{"data-label":"Cena"},"$2,443"),o.a.createElement("td",{"data-label":"Okres pobytu"},"02/01/2016 - 02/29/2016")),o.a.createElement("tr",null,o.a.createElement("td",{scope:"row","data-label":"Rodzaj pokoju"},"Corporate AMEX"),o.a.createElement("td",{"data-label":"Typ pokoju"},"03/01/2016"),o.a.createElement("td",{"data-label":"Cena"},"$1,181"),o.a.createElement("td",{"data-label":"Okres pobytu"},"02/01/2016 - 02/29/2016")),o.a.createElement("tr",null,o.a.createElement("td",{scope:"row","data-label":"Rodzaj pokoju"},"Visa - 3412"),o.a.createElement("td",{"data-label":"Typ pokoju"},"02/01/2016"),o.a.createElement("td",{"data-label":"Cena"},"$842"),o.a.createElement("td",{"data-label":"Okres pobytu"},"01/01/2016 - 01/31/2016"))))},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={chosenRoomOptions:{one:!1,two:!1,three:!1,four:!1}},a.chooseRoomOptionHandler=a.chooseRoomOptionHandler.bind(Object(O.a)(Object(O.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"chooseRoomOptionHandler",value:function(e){this.setState(function(t){return{chosenRoomOptions:Object(f.a)({},t.chosenRoomOptions,Object(y.a)({},e,!t.chosenRoomOptions[e]))}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement("h2",{className:"home-heading"},"Znajd\u017a pok\xf3j odpowiedni dla Ciebie"),o.a.createElement(w,{options:this.state.chosenRoomOptions,chooseRoomOptionHandler:this.chooseRoomOptionHandler}),o.a.createElement("div",{className:"hotel-recommendations"},o.a.createElement(v,null),o.a.createElement("p",null,"\u0141\u0105czna kwota: $milion"),o.a.createElement("button",null,"Przejd\u017a dalej")))}}]),t}(o.a.Component);a(42);var z=function(e){return o.a.createElement("div",{style:{textAlign:"center",margin:"2rem auto",width:"90vw",height:"50vh",backgroundColor:"rgba(0,0,0,.3)",padding:"1rem"}},o.a.createElement("h2",null,"TWOJE DANE ZOSTA\u0141Y ZAAKCEPTOWANE"),o.a.createElement("h3",null,"Tw\xf3j kod p\u0142atno\u015bci to: "),o.a.createElement("div",{style:{width:"80vw",height:"10vh",backgroundColor:"#e1e1e1",margin:"auto",marginTop:"2rem"}}),o.a.createElement("button",null,"Przejd\u017a do p\u0142atno\u015bci"))},C=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"clientData"},o.a.createElement("h2",{style:{margin:"auto",textAlign:"center"}},"Dane Osobowe"),o.a.createElement("label",{htmlFor:"name"},"Imi\u0119"),o.a.createElement("input",{className:"clientData-input",id:"name",type:"text",placeholder:"Jan"}),o.a.createElement("label",{htmlFor:"surname"},"Nazwisko"),o.a.createElement("input",{className:"clientData-input",id:"surname",type:"text",placeholder:"Kowalski"}),o.a.createElement("label",{htmlFor:"id-number"},"Numer dowodu osobistego"),o.a.createElement("input",{className:"clientData-input",id:"id-number",type:"text",placeholder:"ABC 2345"}),o.a.createElement("button",null,"Generuj Kod P\u0142atno\u015bci")),o.a.createElement(z,null))}}]),t}(o.a.Component);function N(){window.location.replace("/")}var R=function(e){return o.a.createElement("div",{style:{width:"60vw",height:"40vh",backgroundColor:"rgba(0,0,0,0.3)",margin:"auto",display:"flex",justifyContent:"center",alignContent:"center",flexFlow:"column",textAlign:"center",padding:"4rem",marginTop:"2rem"}},o.a.createElement("h2",null,"Dzi\u0119kujemy za dokonanie zakupu"),o.a.createElement("h3",null,"Tw\xf3j zakup zosta\u0142 zatwierdzony"),o.a.createElement("button",{onClick:N},"Wr\xf3\u0107 do strony g\u0142\xf3wnej"))},x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{title:"RUP Hotel"}),o.a.createElement(E.a,null,o.a.createElement(h.a,{exact:!0,path:"/",component:g}),o.a.createElement(h.a,{exact:!0,path:"/client-data",component:C}),o.a.createElement(h.a,{path:"/result",component:R}),o.a.createElement(b.a,{to:"/"})))}}]),t}(o.a.Component),D=Object(j.a)(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(46),A=o.a.createElement(T.a,null,o.a.createElement(D,null));r.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.28dcb3c1.chunk.js.map