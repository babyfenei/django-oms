webpackJsonp([30],{"1Rx3":function(a,t,e){"use strict";function r(a){e("otVw")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("bEjd"),n=e("7EAa"),l=e("+xof"),d=e("k96P"),o=e("Eoil"),i=e("Ndbe"),c=e("jfHn"),p=e("1uyy"),u={newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},f={name:"dashboard-admin",components:{PanelGroup:s.default,LineChart:n.default,RaddarChart:l.default,PieChart:d.default,BarChart:o.default,TransactionTable:i.default,TodoList:c.default,BoxCard:p.default},data:function(){return{lineChartData:u.newVisitis}},methods:{handleSetLineChartData:function(a){this.lineChartData=u[a]}}},h=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dashboard-editor-container"},[e("panel-group",{on:{handleSetLineChartData:a.handleSetLineChartData}}),a._v(" "),e("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[e("line-chart",{attrs:{"chart-data":a.lineChartData}})],1),a._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("raddar-chart")],1)]),a._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("pie-chart")],1)]),a._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("bar-chart")],1)])],1),a._v(" "),e("el-row",{attrs:{gutter:8}},[e("el-col",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[e("transaction-table")],1),a._v(" "),e("el-col",{attrs:{xs:{span:12},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:5}}},[e("todo-list")],1),a._v(" "),e("el-col",{attrs:{xs:{span:12},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:5}}},[e("box-card")],1)],1)],1)},x=[],g={render:h,staticRenderFns:x},m=g,b=e("VU/8"),v=r,C=b(f,m,!1,v,"data-v-7383f489",null);t.default=C.exports},"Fl/l":function(a,t,e){t=a.exports=e("FZ+f")(!1),t.push([a.i,".dashboard-editor-container[data-v-7383f489]{padding:32px;background-color:#f0f2f5}.dashboard-editor-container .chart-wrapper[data-v-7383f489]{background:#fff;padding:16px 16px 0;margin-bottom:32px}",""])},otVw:function(a,t,e){var r=e("Fl/l");"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);e("rjj0")("572d1854",r,!0)}});