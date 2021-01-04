(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{FQuy:function(e,t,s){"use strict";s.r(t);var r=s("eVuF"),a=s.n(r),n={data:function(){return{appearance:null,geometry:null,attributes:null,center:{lng:102,lat:38}}},mounted:function(){a.a.all([this.$refs.ellipse.createPromise,this.$refs.ellipseOutline.createPromise]).then((function(e){console.log("All geometries are loaded.");var t=e.reduce((function(e,t){var s=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(s.boundingSphere,t.vm.$parent.modelMatrix):s.boundingSphere;return null===e?r:Cesium.BoundingSphere.union(e,r)}),null);e[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(e){var t=e.Cesium,s=e.viewer;this.viewer=s;var r=t.PerInstanceColorAppearance,a=t.ColorGeometryInstanceAttribute;this.appearance=new r({flat:!0}),this.attributes={color:new a(Math.random(),Math.random(),Math.random(),.5)}},LEFT_CLICK:function(e){var t=this.viewer.scene.pick(e.position);console.log(t)}}},v=s("JFUb"),l=Object(v.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("EllipseGeometry, EllipseOutlineGeometry")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),s("h3",[e._v("Load EllipseGeometry")]),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready,LEFT_CLICK:e.LEFT_CLICK}},[s("vc-primitive-ground",{attrs:{appearance:e.appearance}},[s("vc-instance-geometry",{attrs:{geometry:e.geometry,attributes:e.attributes},on:{"update:geometry":function(t){e.geometry=t}}},[s("vc-geometry-ellipse",{ref:"ellipse",attrs:{center:e.center,semiMinorAxis:2e5,semiMajorAxis:3e5,height:5e4}})],1)],1),e._v(" "),s("vc-primitive",{attrs:{appearance:e.appearance}},[s("vc-instance-geometry",{attrs:{attributes:e.attributes}},[s("vc-geometry-outline-ellipse",{ref:"ellipseOutline",attrs:{center:e.center,semiMinorAxis:2e5,semiMajorAxis:3e5,height:1e5}})],1)],1)],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(1),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(7),e._v(" "),s("hr")],1)}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("The "),s("code",{pre:!0},[e._v("vc-geometry-ellipse")]),e._v(" component is used to load a geometry that describes a ellipse.")]),e._v(" "),s("li",[e._v("The "),s("code",{pre:!0},[e._v("vc-geometry-outline-ellipse")]),e._v(" component is used to load a geometry that describes a ellipse outline.")]),e._v(" "),s("li",[e._v("It needs to be used as a sub-component of "),s("code",{pre:!0},[e._v("vc-instance-geometry")]),e._v(", can be mounted on "),s("code",{pre:!0},[e._v("vc-primitive")]),e._v(" or "),s("code",{pre:!0},[e._v("vc-primitive-ground")]),e._v(".")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@LEFT_CLICK")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"LEFT_CLICK"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-ground")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":appearance")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"appearance"')]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":geometry.sync")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"geometry"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":attributes")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"attributes"')]),e._v(">")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-ellipse")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ellipse"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":center")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"center"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":semiMinorAxis")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"200000.0"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":semiMajorAxis")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"300000.0"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":height")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"50000"')]),e._v("\n          >")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-ellipse")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-ground")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":appearance")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"appearance"')]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":attributes")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"attributes"')]),e._v(">")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-outline-ellipse")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ellipseOutline"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":center")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"center"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":semiMinorAxis")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"200000.0"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":semiMajorAxis")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"300000.0"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":height")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"100000"')]),e._v("\n          >")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-outline-ellipse")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("appearance")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("geometry")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("attributes")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("center")]),e._v(": { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("102")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("38")]),e._v(" }\n      }\n    },\n    mounted() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Promise")]),e._v(".all(["),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$refs.ellipse.createPromise, "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".$refs.ellipseOutline.createPromise]).then("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("instances")]),e._v(") =>")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'All geometries are loaded.'")]),e._v(")\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" boundingSphereUnion = instances.reduce("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("prev, cur")]),e._v(") =>")]),e._v(" {\n          "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n          "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" boundingSphere = cur.vm.$parent.modelMatrix\n            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n            : geometry.boundingSphere\n          "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" prev === "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n        }, "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(")\n        instances["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n      })\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready({ Cesium, viewer }) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".viewer = viewer\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".appearance = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" PerInstanceColorAppearance({\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("flat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v("\n        })\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".attributes = {\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("color")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" ColorGeometryInstanceAttribute("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Math")]),e._v(".random(), "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Math")]),e._v(".random(), "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Math")]),e._v(".random(), "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.5")]),e._v(")\n        }\n      },\n      LEFT_CLICK(movement) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" feature = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".viewer.scene.pick(movement.position)\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(feature)\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-ellipse")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("center")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("required")]),e._v(" The ellipse's center point in the fixed frame. "),s("strong",[e._v("Structure: { lng: number, lat: number, height: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("semiMajorAxis")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("required")]),e._v(" The length of the ellipse's semi-major axis in meters.")])]),e._v(" "),s("tr",[s("td",[e._v("semiMinorAxis")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("required")]),e._v(" The length of the ellipse's semi-minor axis in meters.")])]),e._v(" "),s("tr",[s("td",[e._v("ellipsoid")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The ellipsoid the ellipse will be on.")])]),e._v(" "),s("tr",[s("td",[e._v("height")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The distance in meters between the ellipse and the ellipsoid surface.")])]),e._v(" "),s("tr",[s("td",[e._v("extrudedHeight")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The distance in meters between the ellipse's extruded face and the ellipsoid surface.")])]),e._v(" "),s("tr",[s("td",[e._v("rotation")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The angle of rotation counter-clockwise from north.")])]),e._v(" "),s("tr",[s("td",[e._v("stRotation")]),e._v(" "),s("td",[e._v("Number|Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The rotation of the texture coordinates counter-clockwise from north.")])]),e._v(" "),s("tr",[s("td",[e._v("granularity")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The angular distance between points on the ellipse in radians.")])]),e._v(" "),s("tr",[s("td",[e._v("vertexFormat")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The vertex attributes to be computed.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-ellipse")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("center")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("required")]),e._v(" The ellipse's center point in the fixed frame. "),s("strong",[e._v("Structure: { lng: number, lat: number, height: number }")])])]),e._v(" "),s("tr",[s("td",[e._v("semiMajorAxis")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("required")]),e._v(" The length of the ellipse's semi-major axis in meters.")])]),e._v(" "),s("tr",[s("td",[e._v("semiMinorAxis")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("required")]),e._v(" The length of the ellipse's semi-minor axis in meters.")])]),e._v(" "),s("tr",[s("td",[e._v("ellipsoid")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The ellipsoid the ellipse will be on.")])]),e._v(" "),s("tr",[s("td",[e._v("height")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The distance in meters between the ellipse and the ellipsoid surface.")])]),e._v(" "),s("tr",[s("td",[e._v("extrudedHeight")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The distance in meters between the ellipse's extruded face and the ellipsoid surface.")])]),e._v(" "),s("tr",[s("td",[e._v("rotation")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The angle of rotation counter-clockwise from north.")])]),e._v(" "),s("tr",[s("td",[e._v("stRotation")]),e._v(" "),s("td",[e._v("Number|Object")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("0.0")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The rotation of the texture coordinates counter-clockwise from north.")])]),e._v(" "),s("tr",[s("td",[e._v("granularity")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The angular distance between points on the ellipse in radians.")])]),e._v(" "),s("tr",[s("td",[e._v("numberOfVerticalLines")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("16")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Number of lines to draw between the top and bottom surface of an extruded ellipse.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html"}},[this._v("EllipseGeometry")])]),this._v(", "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html"}},[this._v("EllipseOutlineGeometry")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=l.exports},clVv:function(e,t,s){e.exports=s("FQuy")}}]);
//# sourceMappingURL=53.24762ce6648bff67e9c5.js.map