/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-9-7 21:39:15
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53bdec57"],{"198a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-container markdown-body"},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1),n("div",{domProps:{innerHTML:e._s(e.prettierList)}})],1)},r=[],i=(n("96cf"),n("1da1")),s=n("0e54"),o=n.n(s),c=(n("e4cb"),n("1a14b")),u={name:"Markdown",data:function(){return{listLoading:!0,elementLoadingText:"正在加载...",options:[{value:"0",label:"Prettier"}],value:"0",prettierList:null}},created:function(){this.fetchData()},mounted:function(){},methods:{handleChange:function(e){this.value=e,this.fetchData()},fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.listLoading=!0,t.t0=e.value,t.next="0"===t.t0?4:10;break;case 4:return t.next=6,Object(c["getList"])();case 6:return n=t.sent,a=n.data,e.prettierList=o()(a||"",{renderer:new o.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1}),t.abrupt("break",10);case 10:setTimeout((function(){e.listLoading=!1}),500);case 11:case"end":return t.stop()}}),t)})))()}}},l=u,d=n("2877"),p=Object(d["a"])(l,a,r,!1,null,null,null);t["default"]=p.exports},"1a14b":function(e,t,n){"use strict";n.r(t),n.d(t,"getList",(function(){return i}));var a=n("bc3a"),r=n.n(a);function i(){return r()({url:"https://cdn.jsdelivr.net/gh/prettier/prettier@master/docs/options.md",method:"get"})}}}]);