webpackJsonp([54],{flTi:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("jnSK"),a=r("+Yhu"),l={components:{sesectDatas:s.default},props:["rowdata"],data:function(){return{rules:{usergroups:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},allwikis:[]}},created:function(){this.getAllwikis()},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$emit("formdata",e.rowdata)})},getWikis:function(t){this.rowdata.objs=t},getAllwikis:function(){var t=this;Object(a.d)().then(function(e){t.allwikis=[];for(var r=e.data,s=0,a=r.length;s<a;s++)t.allwikis.push({key:r[s].title})})}}},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.rowdata,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户组",prop:"usergroups"}},[r("el-input",{attrs:{disabled:""},model:{value:t.rowdata.usergroups,callback:function(e){t.$set(t.rowdata,"usergroups",e)},expression:"rowdata.usergroups"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"选择文档",prop:"hosts"}},[r("sesect-datas",{attrs:{selectdata:t.rowdata.objs,alldata:t.allwikis},on:{getDatas:t.getWikis}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("立即更新")])],1)],1)},i=[],u={render:o,staticRenderFns:i},n=u,d=r("VU/8"),c=d(l,n,!1,null,null,null);e.default=c.exports}});