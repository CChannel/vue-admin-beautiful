/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-9-7 21:39:15
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30918b74"],{"57f2":function(e,t,o){},"8b2c":function(e,t,o){"use strict";var a=o("57f2"),r=o.n(a);r.a},d2ec:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"permissions-container"},[o("el-divider",{attrs:{"content-position":"left"}},[e._v(" intelligence模式,前端根据permissions拦截路由(演示环境,默认使用此方案) ")]),o("el-form",{ref:"form",attrs:{model:e.form,inline:!0}},[o("el-form-item",{attrs:{label:"切换账号"}},[o("el-radio-group",{model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}},[o("el-radio",{attrs:{label:"admin"}},[e._v("admin")]),o("el-radio",{attrs:{label:"editor"}},[e._v("editor")]),o("el-radio",{attrs:{label:"test"}},[e._v("test")])],1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.handleChangePermission}},[e._v(" 切换权限 ")])],1),o("el-form-item",{attrs:{label:"当前账号拥有的权限"}},[e._v(" "+e._s(JSON.stringify(e.permissions))+" ")])],1),o("el-divider",{attrs:{"content-position":"left"}},[e._v("按钮级权限演示")]),o("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["admin"],expression:"['admin']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["admin"]权限的按钮 ')]),o("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["editor"],expression:"['editor']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["editor"]权限的按钮 ')]),o("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["test"],expression:"['test']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["test"]权限的按钮 ')]),o("br"),o("br"),o("el-divider",{attrs:{"content-position":"left"}},[e._v(" all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案) ")]),o("p",[e._v(" settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种, 由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解 ")]),o("br"),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[o("el-table",{attrs:{data:e.tableData,"row-key":"path",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"name"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"path",label:"path"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"component",label:"component"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"redirect",label:"redirect"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"meta.title",label:"标题"}}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[t.row.meta.icon?o("vab-icon",{attrs:{icon:["fas",t.row.meta.icon]}}):e._e()],1):e._e()]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否固定"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[e._v(" "+e._s(t.row.meta.affix)+" ")]):e._e()]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"是否无缓存"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[e._v(" "+e._s(t.row.meta.noKeepAlive)+" ")]):e._e()]}}])}),o("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"badge"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?o("span",[e._v(" "+e._s(t.row.meta.badge)+" ")]):e._e()]}}])})],1)],1),o("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[o("json-editor",{attrs:{value:e.res}})],1)],1)],1)},r=[],n=(o("96cf"),o("1da1")),s=o("5530"),i=o("2f62"),l=o("778c"),c=o("2033"),u=o("fa7e"),m={name:"Permissions",components:{JsonEditor:u["default"]},data:function(){return{form:{account:""},tableData:[],res:[]}},computed:Object(s["a"])({},Object(i["c"])({username:"user/username",permissions:"user/permissions"})),created:function(){this.fetchData()},mounted:function(){this.form.account=this.username},methods:{handleChangePermission:function(){localStorage.setItem(l["tokenTableName"],"".concat(this.form.account,"-accessToken")),location.reload()},fetchData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["getRouterList"])();case 2:o=t.sent,e.tableData=o.data,e.res=o;case 5:case"end":return t.stop()}}),t)})))()}}},d=m,f=o("2877"),p=Object(f["a"])(d,a,r,!1,null,null,null);t["default"]=p.exports},fa7e:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"json-editor"},[o("label",[o("textarea",{ref:"textarea"})])])},r=[],n=o("53ca"),s=o("56b3"),i=o.n(s);o("0dd0"),o("a7be"),o("acdf"),o("f9d4"),o("8822"),o("d2de");o("ae67");var l={name:"JsonEditor",props:{value:{type:[Array,Object],default:function(){return null}}},data:function(){return{jsonEditor:!1}},watch:{value:function(e){var t=this.jsonEditor.getValue();t?this.$emit("change",t):this.$baseMessage("JSON不能为空,否则无法生成表格","error"),e!==t&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}},mounted:function(){var e=this;this.jsonEditor=i.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",(function(t){e.isJsonString(t.getValue())&&e.$emit("change",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()},isJsonString:function(e){try{if("object"==Object(n["a"])(JSON.parse(e)))return!0}catch(t){}return!1}}},c=l,u=(o("8b2c"),o("2877")),m=Object(u["a"])(c,a,r,!1,null,"489b434e",null);t["default"]=m.exports}}]);