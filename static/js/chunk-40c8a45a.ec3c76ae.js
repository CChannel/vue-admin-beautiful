/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-9-7 21:39:15
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c8a45a"],{"6bb2":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"menuManagement-container"},[o("el-divider",{attrs:{"content-position":"left"}},[e._v(" 演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制 ")]),o("el-row",[o("el-col",{attrs:{xs:24,sm:24,md:8,lg:4,xl:4}},[o("el-tree",{attrs:{data:e.data,props:e.defaultProps,"node-key":"id","default-expanded-keys":["root"]},on:{"node-click":e.handleNodeClick}})],1),o("el-col",{attrs:{xs:24,sm:24,md:16,lg:20,xl:20}},[o("vab-query-form",[o("vab-query-form-top-panel",{attrs:{span:12}},[o("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v(" 添加 ")])],1)],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText,"row-key":"path",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"name"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"path",label:"路径"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否隐藏"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(" "+e._s(t.row.hidden?"是":"否")+" ")])]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否一直显示当前节点"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(" "+e._s(t.row.alwaysShow?"是":"否")+" ")])]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"component",label:"vue文件路径"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"redirect",label:"重定向"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"meta.title",label:"标题"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[t.row.meta.icon?o("vab-icon",{attrs:{icon:["fas",t.row.meta.icon]}}):e._e()],1):e._e()]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否固定"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[e._v(" "+e._s(t.row.meta.affix?"是":"否")+" ")]):e._e()]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否无缓存"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[e._v(" "+e._s(t.row.meta.noKeepAlive?"是":"否")+" ")]):e._e()]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"badge"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[e._v(" "+e._s(t.row.meta.badge)+" ")]):e._e()]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.handleEdit(t.row)}}},[e._v(" 编辑 ")]),o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.handleDelete(t.row)}}},[e._v(" 删除 ")])]}}])})],1)],1)],1),o("edit",{ref:"edit",on:{fetchData:e.fetchData}})],1)},a=[],r=(o("96cf"),o("1da1")),l=o("2033"),s=o("754e"),i=o("f5ce"),u={name:"MenuManagement",components:{Edit:i["default"]},data:function(){return{data:[],defaultProps:{children:"children",label:"label"},list:[],listLoading:!0,elementLoadingText:"正在加载..."}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["getTree"])();case 2:o=t.sent,e.data=o.data,e.fetchData();case 5:case"end":return t.stop()}}),t)})))()},methods:{handleEdit:function(e){e.path?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete:function(e){var t=this;e.id&&this.$baseConfirm("你确定要删除当前项吗",null,Object(r["a"])(regeneratorRuntime.mark((function o(){var n,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(s["doDelete"])({ids:e.id});case 2:n=o.sent,a=n.msg,t.$baseMessage(a,"success"),t.fetchData();case 6:case"end":return o.stop()}}),o)}))))},fetchData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(l["getRouterList"])();case 3:o=t.sent,n=o.data,e.list=n,setTimeout((function(){e.listLoading=!1}),300);case 7:case"end":return t.stop()}}),t)})))()},handleNodeClick:function(e){this.fetchData()}}},c=u,d=o("2877"),f=Object(d["a"])(c,n,a,!1,null,null,null);t["default"]=f.exports},"754e":function(e,t,o){"use strict";o.r(t),o.d(t,"getTree",(function(){return a})),o.d(t,"doEdit",(function(){return r})),o.d(t,"doDelete",(function(){return l}));var n=o("b775");function a(e){return Object(n["default"])({url:"/menuManagement/getTree",method:"post",data:e})}function r(e){return Object(n["default"])({url:"/menuManagement/doEdit",method:"post",data:e})}function l(e){return Object(n["default"])({url:"/menuManagement/doDelete",method:"post",data:e})}},f5ce:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[o("el-divider",{attrs:{"content-position":"left"}},[e._v(" 这里就不具体写了，请自行完善 ")]),o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"name",prop:"name"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"路径",prop:"path"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.close}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},a=[],r=(o("96cf"),o("1da1")),l=o("754e"),s={name:"MenuManagementEdit",data:function(){return{form:{},rules:{id:[{required:!0,trigger:"blur",message:"请输入路径"}]},title:"",dialogFormVisible:!1}},created:function(){},methods:{showEdit:function(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save:function(){var e=this;this.$refs["form"].validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(o){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=10;break}return t.next=3,Object(l["doEdit"])(e.form);case 3:n=t.sent,a=n.msg,e.$baseMessage(a,"success"),e.$emit("fetchData"),e.close(),t.next=11;break;case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},i=s,u=o("2877"),c=Object(u["a"])(i,n,a,!1,null,null,null);t["default"]=c.exports}}]);