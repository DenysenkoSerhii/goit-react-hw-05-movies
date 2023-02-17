"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[254],{254:function(r,t,e){e.r(t);var n=e(413),a=e(861),c=e(439),s=e(757),u=e.n(s),i=e(791),o=e(689),f=e(87),p=e(197),v=e(184);t.default=function(){var r,t=(0,i.useState)({item:{},loading:!1,error:null}),e=(0,c.Z)(t,2),s=e[0],d=e[1],l=(0,o.UO)().id,h=(0,o.s0)(),m=(null===(r=(0,o.TH)().state)||void 0===r?void 0:r.from)||"/movies";(0,i.useEffect)((function(){var r=function(){var r=(0,a.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,d((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!0,error:null})})),r.next=4,(0,p.Yp)(l);case 4:t=r.sent,d((function(r){return(0,n.Z)((0,n.Z)({},r),{},{item:t})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),d((function(t){return(0,n.Z)((0,n.Z)({},t),{},{error:r.t0})}));case 11:return r.prev=11,d((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[l,d]);var x,w=s.item,j=w.overview,g=w.poster_path,Z=w.title,k=w.vote_average;return(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("button",{onClick:function(){return h(m)},children:"Go Back"}),(0,v.jsx)("h2",{children:Z}),(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:(x=g,"https://image.tmdb.org/t/p/w500".concat(x)),alt:Z})}),!!k&&(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*k),"%"]}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{}),(0,v.jsx)("p",{children:j}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h4",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{state:{from:m},to:"/movies/".concat(l,"/cast"),children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{state:{from:m},to:"/movies/".concat(l,"/reviews"),children:"Reviews"})})]})]}),(0,v.jsx)(o.j3,{})]})}},197:function(r,t,e){e.d(t,{XT:function(){return u},Yp:function(){return i},qN:function(){return f},z1:function(){return o},zv:function(){return p}});var n=e(861),a=e(757),c=e.n(a),s=e(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"81e207fecffa1302d8e26d6b5f9ddafd"}}),u=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("trending/movie/day",{params:{}});case 2:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,console.log(n.cast),r.abrupt("return",n.cast);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=254.3846ca1f.chunk.js.map