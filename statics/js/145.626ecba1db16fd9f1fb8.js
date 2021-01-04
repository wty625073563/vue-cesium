(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{CBVP:function(s,t,e){s.exports=e("Y9bY")},Y9bY:function(s,t,e){"use strict";e.r(t);var a=e("JFUb"),r=Object(a.a)({data:function(){return{position:{lng:117.217124,lat:31.809777}}},methods:{ready:function(s){this.cesiumInstance=s},subReady:function(){var s=this.cesiumInstance,t=(s.Cesium,s.viewer);t.scene.globe.depthTestAgainstTerrain=!0,t.zoomTo(t.entities)}}},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("闪圆")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("示例")]),s._v(" "),e("h3",[s._v("加载闪圆效果")]),s._v(" "),e("h4",[s._v("预览")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready}},[e("vc-shine-ellipse",{attrs:{position:s.position,color:"red"},on:{ready:s.subReady}}),s._v(" "),e("vc-layer-imagery",[e("vc-provider-imagery-tianditu",{attrs:{mapStyle:"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),e("hr"),s._v(" "),e("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[e("code",{pre:!0},[s._v("vc-shine-ellipse")]),s._v(" 组件用于加载闪圆效果，实质是通过 "),e("code",{pre:!0},[s._v("vc-entity")]),s._v(" 和 "),e("code",{pre:!0},[s._v("vc-graphics-ellipse")]),s._v(" 添加一个实体圆，然后不停修改圆的材质透明度实现。参考 "),e("a",{attrs:{href:"https://www.wellyyss.cn/ysCesium/main/app.html"}},[s._v("ysCesium|跃焱邵隼")]),s._v(" 。")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-shine-ellipse")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"red"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-shine-ellipse")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(" }\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n      },\n      subReady() {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        viewer.zoomTo(viewer.entities)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("position")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定闪圆效果实体添加的位置。结构：{ lng: number, lat: number, height: number } 或者 Cesium.Cartesian3")])]),s._v(" "),e("tr",[e("td",[s._v("show")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定闪圆效果是否可见。")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("undefined")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定闪圆效果效果椭圆高度。单位米。")])]),s._v(" "),e("tr",[e("td",[s._v("radius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定闪圆效果效果半径。单位米。")])]),s._v(" "),e("tr",[e("td",[s._v("color")]),s._v(" "),e("td",[s._v("Object|String|Array")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'white'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定闪圆效果颜色。")])]),s._v(" "),e("tr",[e("td",[s._v("imageUrl")]),s._v(" "),e("td",[s._v("String")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("''")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定用于表达闪圆效果的材质图片。")])]),s._v(" "),e("tr",[e("td",[s._v("deviationAlpha")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.05")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定闪圆效果颜色 Alpha 值改变尺度，值越大闪得越快。取值范围: (0, 1)")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("事件名")]),s._v(" "),e("th",[s._v("参数")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及闪圆实体实例。")])])])])}],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=145.626ecba1db16fd9f1fb8.js.map