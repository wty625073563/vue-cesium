(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{Zw1l:function(e,t,s){e.exports=s("rexP")},rexP:function(e,t,s){"use strict";s.r(t);var r=s("JFUb"),a=Object(r.a)({data:function(){return{appearance:{},geometryInstances:{},positions:[{lng:100.1340164450331,lat:31.05494287836128},{lng:108.08821010582645,lat:31.05494287836128}]}},methods:{ready:function(e){var t=e.Cesium,s=e.viewer;this.geometryInstances=new t.GeometryInstance({geometry:new t.GroundPolylineGeometry({positions:t.Cartesian3.fromDegreesArray([100.1340164450331,32.05494287836128,108.08821010582645,32.097804071380715]),width:4}),id:"object returned when this instance is picked and to get/set per-instance attributes"}),this.appearance=new t.PolylineMaterialAppearance,s.camera.setView({destination:new t.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}})}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("GroundPolylinePrimitive")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),s("h4",[e._v("Preview")]),e._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:e.ready}},[s("vc-primitive-polyline-ground",{attrs:{appearance:e.appearance,geometryInstances:e.geometryInstances}}),e._v(" "),s("vc-primitive-polyline-ground",{attrs:{appearance:e.appearance}},[s("vc-instance-geometry",[s("vc-geometry-polyline-ground",{attrs:{positions:e.positions,width:2}})],1)],1),e._v(" "),s("vc-provider-terrain-cesium"),e._v(" "),s("vc-layer-imagery",[s("vc-provider-imagery-mapbox",{attrs:{mapId:"mapbox.streets"}})],1)],1)],1)]],2),e._v(" "),s("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),s("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),s("hr"),e._v(" "),e._m(4),e._v(" "),s("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),s("hr")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-primitive-polyline-ground")]),this._v(" component is used to load a a GroundPolylinePrimitive represents a polyline draped over the terrain or 3D Tiles in the Scene. Only to be used with GeometryInstances containing GroundPolylineGeometry.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("Load GroundPolylinePrimitive with "),t("code",{pre:!0},[this._v("vc-primitive-polyline-ground")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-polyline-ground")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":appearance")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"appearance"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":geometryInstances")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"geometryInstances"')]),e._v("\n      >")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-polyline-ground")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-polyline-ground")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":appearance")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"appearance"')]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(">")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-polyline-ground")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":positions")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"positions"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":width")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"2"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-polyline-ground")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-polyline-ground")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-terrain-cesium")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-terrain-cesium")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v(">")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-imagery-mapbox")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("mapId")]),e._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"mapbox.streets"')]),e._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-imagery-mapbox")]),e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-layer-imagery")]),e._v(">")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("appearance")]),e._v(": {},\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("geometryInstances")]),e._v(": {},\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("positions")]),e._v(": [\n          { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("100.1340164450331")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("31.05494287836128")]),e._v(" },\n          { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lng")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("108.08821010582645")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("lat")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("31.05494287836128")]),e._v(" }\n        ]\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".geometryInstances = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.GeometryInstance({\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("geometry")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.GroundPolylineGeometry({\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("positions")]),e._v(": Cesium.Cartesian3.fromDegreesArray([\n              "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("100.1340164450331")]),e._v(",\n              "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("32.05494287836128")]),e._v(",\n              "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("108.08821010582645")]),e._v(",\n              "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("32.097804071380715")]),e._v("\n            ]),\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("width")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("4.0")]),e._v("\n          }),\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("id")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'object returned when this instance is picked and to get/set per-instance attributes'")]),e._v("\n        })\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".appearance = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.PolylineMaterialAppearance()\n        viewer.camera.setView({\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("destination")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.Cartesian3("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-1432246.8223880068")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("5761224.588247942")]),e._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("3297281.1889481535")]),e._v("),\n          "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("orientation")]),e._v(": {\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("heading")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("6.20312220367255")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("pitch")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-0.9937536846355606")]),e._v(",\n            "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("roll")]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.002443376981836387")]),e._v("\n          }\n        })\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("type")]),e._v(" "),s("th",[e._v("default")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("geometryInstances")]),e._v(" "),s("td",[e._v("Object|Array")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The geometry instances to render.")])]),e._v(" "),s("tr",[s("td",[e._v("appearance")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td"),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.")])]),e._v(" "),s("tr",[s("td",[e._v("show")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if this primitive will be shown.")])]),e._v(" "),s("tr",[s("td",[e._v("interleave")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.")])]),e._v(" "),s("tr",[s("td",[e._v("releaseGeometryInstances")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When true, the primitive does not keep a reference to the input geometryInstances to save memory.")])]),e._v(" "),s("tr",[s("td",[e._v("allowPicking")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.")])]),e._v(" "),s("tr",[s("td",[e._v("asynchronous")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("true")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the primitive will be created asynchronously or block until ready.")])]),e._v(" "),s("tr",[s("td",[e._v("classificationType")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("2")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v("Determines whether terrain, 3D Tiles or both will be classified. "),s("strong",[e._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2")])])]),e._v(" "),s("tr",[s("td",[e._v("debugShowBoundingVolume")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Determines if this primitive's commands' bounding spheres are shown.")])]),e._v(" "),s("tr",[s("td",[e._v("debugShowShadowVolume")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("false")])]),e._v(" "),s("td",[s("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html"}},[this._v("GroundPolylinePrimitive")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("name")]),e._v(" "),s("th",[e._v("parameter")]),e._v(" "),s("th",[e._v("description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ready")]),e._v(" "),s("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),s("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),e._v(" "),s("tr",[s("td",[e._v("mousedown")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse is pressed on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseup")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse bounces on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("click")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse clicks on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("dblclick")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the left mouse button double-clicks the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mousemove")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves to this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("click")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse clicks on the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("clickout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Touch when the mouse clicks outside the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("dblclick")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the left mouse button double-clicks the primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mousemove")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves on this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseover")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves to this primitive.")])]),e._v(" "),s("tr",[s("td",[e._v("mouseout")]),e._v(" "),s("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),s("td",[e._v("Triggered when the mouse moves out of the primitive.")])])])])}],!1,null,null,null);t.default=a.exports}}]);
//# sourceMappingURL=97.ec6bd4dca13f358819b7.js.map