(this.webpackJsonpdisneyQuotes=this.webpackJsonpdisneyQuotes||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){var n={"./1.jpg":15,"./2.jpg":16,"./3.jpg":17,"./background.jpg":18};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=14},function(e,t,a){e.exports=a.p+"static/media/1.8bd03498.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.51e26fb2.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.ccc0d4aa.jpg"},function(e,t,a){e.exports=a.p+"static/media/background.5bc4b1ba.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(2);var c=a(4),s=a(5),l=a(7),u=a(6),d=function(e){var t=e.name,n=e.id,o=e.quote;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"loading..",src:a(14)("./".concat(n,".jpg")),width:"200px"}),r.a.createElement("div",{className:"mw5"},r.a.createElement("h2",null,t),r.a.createElement("p",null,o)))},m=function(e){var t=e.disneyQuotes;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name,quote:e.quote})})))},h=[{id:1,name:"Yoda",category:"Star Wars",quote:"Che la connessione sia con te!"},{id:2,name:"Iron Man",category:"Marvel",quote:"I limiti sono fatti per essere superati!"},{id:3,name:"Peter Pan",category:"Classic",quote:"Non smettete mai di sognare, solo chi sogna pu\xf2 volare"}],p=function(e){e.searchfield;var t=e.searchChangeProp;return r.a.createElement("div",null,r.a.createElement("h2",{className:"white"},"Look for Marvel, Star Wars, Classic Disney, Pixar quote"),r.a.createElement("input",{className:"f2 code pa2 ma3",type:"search",placeholder:'e.g.: "Marvel"',onChange:t}))},g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={disneyQuotes:h,searchfield:""},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.disneyQuotes.filter((function(t){return t.category.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(p,{searchChangeProp:this.onSearchChange}),r.a.createElement(m,{disneyQuotes:t}))}}]),a}(n.Component);i.a.render(r.a.createElement("div",null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b139e8fe.chunk.js.map