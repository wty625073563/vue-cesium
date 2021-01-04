(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{"2zcI":function(s,t,r){s.exports=r("AMUU")},AMUU:function(s,t,r){"use strict";r.r(t);var e=r("eVuF"),a=r.n(e),n={data:function(){return{appearance:null,geometry:null,width:25e4,attributes:null,attributesOutline:null,positions:[{lng:100,lat:40},{lng:105,lat:40},{lng:105,lat:35}],positionsOutline:[{lng:102,lat:40},{lng:107,lat:40},{lng:107,lat:35}]}},mounted:function(){a.a.all([this.$refs.corridor.createPromise,this.$refs.corridorOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var r=t.cesiumObject.constructor.createGeometry(t.cesiumObject),e=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(r.boundingSphere,t.vm.$parent.modelMatrix):r.boundingSphere;return null===s?e:Cesium.BoundingSphere.union(s,e)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,r=s.viewer;this.viewer=r;var e=t.PerInstanceColorAppearance,a=t.ColorGeometryInstanceAttribute;this.appearance=new e({flat:!0}),this.attributes={color:new a(1,1,0,1)},this.attributesOutline={color:new a(1,0,0,1)}},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},v=r("JFUb"),_=Object(v.a)(n,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("section",[r("h1",[s._v("CorridorGeometry、CorridorOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),r("h2",[s._v("示例")]),s._v(" "),r("h3",[s._v("加载廊体")]),s._v(" "),r("h4",[s._v("预览")]),s._v(" "),r("doc-preview",[[r("div",{staticClass:"viewer"},[r("vc-viewer",{on:{ready:s.ready,LEFT_CLICK:s.LEFT_CLICK}},[r("vc-primitive-ground",{attrs:{appearance:s.appearance}},[r("vc-instance-geometry",{attrs:{geometry:s.geometry,attributes:s.attributes},on:{"update:geometry":function(t){s.geometry=t}}},[r("vc-geometry-corridor",{ref:"corridor",attrs:{positions:s.positions,width:s.width}})],1)],1),s._v(" "),r("vc-primitive",{attrs:{appearance:s.appearance}},[r("vc-instance-geometry",{attrs:{attributes:s.attributesOutline}},[r("vc-geometry-outline-corridor",{ref:"corridorOutline",attrs:{positions:s.positionsOutline,width:s.width}})],1)],1)],1)],1)]],2),s._v(" "),r("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),r("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),r("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),r("hr"),s._v(" "),s._m(6),s._v(" "),r("h2",[s._v("事件")]),s._v(" "),s._m(7),s._v(" "),r("hr")],1)}),[function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ul",[r("li",[r("code",{pre:!0},[s._v("vc-geometry-corridor")]),s._v(" 组件用于加载廊体。")]),s._v(" "),r("li",[r("code",{pre:!0},[s._v("vc-geometry-outline-corridor")]),s._v(" 组件用于加载廊体轮廓。")]),s._v(" "),r("li",[s._v("需要作为 "),r("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),r("code",{pre:!0},[s._v("vc-primitive")]),s._v(" 或 "),r("code",{pre:!0},[s._v("vc-primitive-ground")]),s._v("。")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-corridor")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"corridor"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-corridor")]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributesOutline"')]),s._v(">")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-corridor")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"corridorOutline"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positionsOutline"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width"')]),s._v("\n          >")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-corridor")]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),r("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("250000")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributesOutline")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(" }\n        ],\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positionsOutline")]),s._v(": [\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(" }\n        ]\n      }\n    },\n    mounted() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.corridor.createPromise, "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.corridorOutline.createPromise]).then("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances.reduce("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n          "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur.vm.$parent.modelMatrix\n            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n            : geometry.boundingSphere\n          "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n        }, "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n      })\n    },\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready({ Cesium, viewer }) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer = viewer\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerInstanceColorAppearance({\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(")\n        }\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributesOutline = {\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(")\n        }\n      },\n      LEFT_CLICK(movement) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer.scene.pick(movement.position)\n        "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(feature)\n      }\n    }\n  }\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-corridor")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("属性名")]),s._v(" "),r("th",[s._v("类型")]),s._v(" "),r("th",[s._v("默认值")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("positions")]),s._v(" "),r("td",[s._v("Array")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("required")]),s._v(" 指定描述 corridor 位置的经纬度(高度)数组。 "),r("strong",[s._v("结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]")])])]),s._v(" "),r("tr",[r("td",[s._v("width")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("required")]),s._v(" 指定 corridor 边之间的距离。")])]),s._v(" "),r("tr",[r("td",[s._v("ellipsoid")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 参考椭球体。")])]),s._v(" "),r("tr",[r("td",[s._v("granularity")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。")])]),s._v(" "),r("tr",[r("td",[s._v("height")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 高度。")])]),s._v(" "),r("tr",[r("td",[s._v("extrudedHeight")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 拉伸高度。")])]),s._v(" "),r("tr",[r("td",[s._v("vertexFormat")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 要缓存的顶点属性。")])]),s._v(" "),r("tr",[r("td",[s._v("cornerType")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 转角样式。"),r("strong",[s._v("ROUNDED: 0, MITERED: 1, BEVELED: 2")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-corridor")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("属性名")]),s._v(" "),r("th",[s._v("类型")]),s._v(" "),r("th",[s._v("默认值")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("positions")]),s._v(" "),r("td",[s._v("Array")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("required")]),s._v(" 指定描述 corridor 位置的经纬度(高度)数组。 "),r("strong",[s._v("结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]")])])]),s._v(" "),r("tr",[r("td",[s._v("width")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("required")]),s._v(" 指定 corridor 边之间的距离。")])]),s._v(" "),r("tr",[r("td",[s._v("ellipsoid")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 参考椭球体。")])]),s._v(" "),r("tr",[r("td",[s._v("granularity")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。")])]),s._v(" "),r("tr",[r("td",[s._v("height")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 高度。")])]),s._v(" "),r("tr",[r("td",[s._v("extrudedHeight")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 拉伸高度。")])]),s._v(" "),r("tr",[r("td",[s._v("cornerType")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 转角样式。"),r("strong",[s._v("ROUNDED: 0, MITERED: 1, BEVELED: 2")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CorridorGeometry.html"}},[this._v("CorridorGeometry")])]),this._v("、"),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CorridorOutlineGeometry.html"}},[this._v("CorridorOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("事件名")]),s._v(" "),r("th",[s._v("参数")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("ready")]),s._v(" "),r("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),r("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=_.exports}}]);
//# sourceMappingURL=152.72f16754d54ee4eef5ef.js.map