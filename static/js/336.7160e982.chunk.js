"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{6336:function(n,r,e){e.r(r),e.d(r,{default:function(){return j}});var t,a,u,c,s=e(5861),i=e(9439),o=e(7757),p=e.n(o),f=e(2791),v=e(7689),d=e(7596),h=(e(5462),e(2230)),m=e(4736),l=e(168),x=e(6444),g=x.ZP.div(t||(t=(0,l.Z)(["\npadding:15px;\n"]))),Z=x.ZP.ul(a||(a=(0,l.Z)(["\npadding: 0;\nmargin-left: 20px;\n"]))),w=x.ZP.li(u||(u=(0,l.Z)(["\nmargin-bottom: 15px;\nfont-size: 12px;\n"]))),k=x.ZP.h4(c||(c=(0,l.Z)(["\nmargin: 0;\nmargin-bottom: 5px;\n"]))),b=e(184),y=function(){var n=(0,f.useState)([]),r=(0,i.Z)(n,2),e=r[0],t=r[1],a=(0,f.useState)(!1),u=(0,i.Z)(a,2),c=u[0],o=u[1],l=(0,f.useState)(null),x=(0,i.Z)(l,2),y=x[0],j=x[1],P=(0,v.UO)().movieId;(0,f.useEffect)((function(){var n=function(){var n=(0,s.Z)(p().mark((function n(){var r,e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,(0,m.Jh)(P);case 4:0===(r=n.sent).length&&d.Am.info("Sorry, reviews not found"),t(r),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),e=n.t0.response,j(e.data.message),d.Am.error("Sorry,".concat(e.data.message));case 14:return n.prev=14,o(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,9,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[P]);var S=e.map((function(n){var r=n.content,e=(n.id,n.author);return(0,b.jsxs)(w,{children:[(0,b.jsx)(k,{children:e}),(0,b.jsx)("p",{children:r})]})}));return(0,b.jsxs)(b.Fragment,{children:[c&&(0,b.jsx)(h.Z,{}),y&&(0,b.jsx)(d.Ix,{theme:"colored"}),e.length>0&&(0,b.jsx)(g,{children:(0,b.jsx)(Z,{children:S})})]})},j=(0,f.memo)(y)},4736:function(n,r,e){e.d(r,{Jh:function(){return f},M1:function(){return p},TP:function(){return i},Zf:function(){return o},x1:function(){return s}});var t=e(5861),a=e(7757),u=e.n(a),c=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6335e45e66a73839ab061046ca7a249"}}),s=function(){var n=(0,t.Z)(u().mark((function n(){var r,e,t,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,c.get("/trending/movie/day?",{params:{page:r}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"?"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?",{params:{query:r}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"/credits?"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(r,"//reviews?"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=336.7160e982.chunk.js.map