(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{VSy4:function(t,s,e){"use strict";e.r(s);var v={data:function(){return{show:!0}},methods:{ready:function(t){},subReady:function(t){t.Cesium;t.viewer.camera.flyHome(0)},clicked:function(t){console.log(t)}}},a=e("JFUb"),_=Object(a.a)(v,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("CzmlDataSource")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载 CZML 数据源")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{attrs:{shouldAnimate:!0},on:{ready:t.ready}},[e("vc-datasource-czml",{attrs:{czml:"./statics/SampleData/simple.czml",show:t.show},on:{ready:t.subReady,click:t.clicked}})],1)],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-datasource-czml")]),this._v(" 组件用于加载 "),s("a",{attrs:{href:"https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide"}},[this._v("CZML")]),this._v(" 格式数据源。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":shouldAnimate")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-czml")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("czml")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"./statics/SampleData/simple.czml"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"subReady"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clicked"')]),t._v("\n      >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-czml")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {},\n      subReady(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        viewer.camera.flyHome("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(")\n      },\n      clicked(e) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(e)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("czml")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" 指定 czml 对象或者 url。")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定数据源是否可见。")])]),t._v(" "),e("tr",[e("td",[t._v("entities")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("[]")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v("指定要添加到该数据源的实体集合。")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定以下属性：")])]),t._v(" "),e("tr",[e("td",[t._v("---------")]),t._v(" "),e("td",[t._v("--------------")]),t._v(" "),e("td",[t._v("------")]),t._v(" "),e("td",[t._v("------------------------------------------")])]),t._v(" "),e("tr",[e("td",[t._v("sourceUri")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("credit")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档： "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html"}},[this._v("CzmlDataSource")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),e("tr",[e("td",[t._v("changedEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("数据源改变时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("errorEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("数据源发生错误时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("loadingEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("数据源开始或结束加载时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("clusterEvent")]),t._v(" "),e("td",[t._v("(clusteredEntities, cluster)")]),t._v(" "),e("td",[t._v("数据源聚合事件。")])]),t._v(" "),e("tr",[e("td",[t._v("collectionChanged")]),t._v(" "),e("td",[t._v("(collection, added, removed, changed)")]),t._v(" "),e("td",[t._v("数据源实体集合改变时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mousedown")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标在该数据源上按下时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mouseup")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标在该数据源上弹起时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("click")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标单击该数据源时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("clickout")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标单击该数据源外部时触。")])]),t._v(" "),e("tr",[e("td",[t._v("dblclick")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标左键双击该数据源时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mousemove")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标在该数据源上移动时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mouseover")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标移动到该数据源时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("mouseout")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("鼠标移出该数据源时触发。")])])])])}],!1,null,null,null);s.default=_.exports},drRm:function(t,s,e){t.exports=e("VSy4")}}]);
//# sourceMappingURL=116.6c195de88cfb675d7477.js.map