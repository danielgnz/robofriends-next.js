(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(e,t,a){"use strict";a.r(t);var r=a("0iUn"),n=a("sLSF"),o=a("MI3g"),s=a("a7VT"),c=a("AT/M"),i=a("Tit0"),l=a("hfKm"),u=a.n(l);function d(e,t,a){return t in e?u()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=a("q1tI"),f=a.n(m),b=a("zgjP"),h=a.n(b),p=a("MX0m"),g=a.n(p),w=a("YFqc"),v=a.n(w),j=function(e){var t=e.id,a=e.name,r=e.email;return f.a.createElement(v.a,{as:"/robot/".concat(t),href:"/robot?id=".concat(t)},f.a.createElement("div",{className:"jsx-2168501419 card grow"},f.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t),className:"jsx-2168501419"}),f.a.createElement("div",{className:"jsx-2168501419"},f.a.createElement("h2",{className:"jsx-2168501419"},a),f.a.createElement("p",{className:"jsx-2168501419"},r)),f.a.createElement(g.a,{id:"2168501419"},[".card.jsx-2168501419{text-align:center;background-color:#9eebcf;display:inline-block;margin:.5rem;padding:1rem;box-shadow:4px 4px 8px rgba(0,0,0,.2);border-width:.25rem;border-radius:.5rem;cursor:pointer;}",".grow.jsx-2168501419{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .25s ease-out;-webkit-transition:transform .25s ease-out;transition:transform .25s ease-out;}",".grow.jsx-2168501419:focus,.grow.jsx-2168501419:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}",".grow.jsx-2168501419:active{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);}"])))},x=function(e){var t=e.robots;return f.a.createElement("div",null,t.map(function(e,t){return f.a.createElement(j,{key:t,id:e.id,name:e.name,email:e.email})}))},E=function(e){var t=e.children;return f.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},t)},k=function(e){var t=e.searchChange;return f.a.createElement("div",{style:{padding:".5rem"},className:"jsx-2395034020"},f.a.createElement("input",{type:"search",placeholder:"search robots",onChange:t,className:"jsx-2395034020 searchInput"}),f.a.createElement(g.a,{id:"2395034020"},[".searchInput.jsx-2395034020{padding:1rem;background-color:#cdecff;border:solid 1px #19a974;outline-offset:-2px;overflow:visible;line-height:1.15;margin:0;}"]))},N=a("W9HR"),y=a("sv8Y"),C=function(e){function t(e){var a;return Object(r.default)(this,t),a=Object(o.default)(this,Object(s.default)(t).call(this,e)),d(Object(c.default)(a),"componentDidMount",function(){return a.getRobots()}),d(Object(c.default)(a),"getRobots",function(){h()("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){return a.setState({robots:e})}).catch(function(e){return console.log("ooops: error")})}),d(Object(c.default)(a),"onSearchChange",function(e){return a.setState({searchField:e.target.value})}),a.state={robots:[],searchField:""},a}return Object(i.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,r=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return f.a.createElement("div",{style:{textAlign:"center"}},f.a.createElement(N.a,{desc:"Robofriends"}),f.a.createElement(k,{searchChange:this.onSearchChange}),f.a.createElement(E,null,f.a.createElement(x,{robots:r})),f.a.createElement(y.a,null))}}]),t}(m.Component);t.default=C},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);