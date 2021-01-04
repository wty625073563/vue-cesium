(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7faY":function(t,s,e){"use strict";e.r(s);var a={data:function(){return{show:!0,options:{stroke:"red"},entities:[]}},methods:{ready:function(t){t.Cesium,t.viewer;for(var s=0;s<100;s++)this.entities.push({position:{lng:40*Math.random()+85,lat:30*Math.random()+21},label:{text:s.toString(),pixelOffset:{x:25,y:20}},point:{pixelSize:8,outlineWidth:2,color:"red",outlineColor:"yellow"}})},subReady:function(t){t.viewer.zoomTo(t.cesiumObject)},clicked:function(t){console.log(t)}}},r=e("JFUb"),v=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("GeoJsonDataSource")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-datasource-geojson",{ref:"ds",attrs:{data:"./statics/SampleData/lineData/streamline.json",show:t.show,options:t.options,entities:t.entities},on:{ready:t.subReady,click:t.clicked}})],1)],1)]],2),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(3),t._v(" "),e("hr"),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(5),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-datasource-geojson")]),this._v(" component is used to load a dataSource which processes both "),s("a",{attrs:{href:"https://geojson.org/"}},[this._v("GeoJSON")]),this._v(" and "),s("a",{attrs:{href:"https://github.com/topojson/topojson"}},[this._v("TopoJSON")]),this._v(" data. simplestyle-spec properties will also be used if they are present.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[this._v("Load a GeoJsonDataSource with "),s("code",{pre:!0},[this._v("vc-datasource-geojson")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-geojson")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"subReady"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":options")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"options"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ds"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clicked"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":entities")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"entities"')]),t._v("\n      >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-geojson")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("stroke")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'red'")]),t._v("\n        },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("entities")]),t._v(": []\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v("; i++) {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".entities.push({\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random() * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40")]),t._v(" + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("85")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random() * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30")]),t._v(" + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("21")]),t._v(" },\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": {\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": i.toString(),\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pixelOffset")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("x")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("25")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("y")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" }\n            },\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("point")]),t._v(": {\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pixelSize")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("8")]),t._v(",\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("outlineWidth")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(",\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'red'")]),t._v(",\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("outlineColor")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'yellow'")]),t._v("\n            }\n          })\n        }\n      },\n      subReady(cesiumInstance) {\n        cesiumInstance.viewer.zoomTo(cesiumInstance.cesiumObject)\n      },\n      clicked(e) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(e)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("data")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" A url, GeoJSON object, or TopoJSON object to be loaded.")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" Gets whether or not this data source should be displayed.")])]),t._v(" "),e("tr",[e("td",[t._v("entities")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("[]")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" Specify the collection of entities to be added to this datasource.")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" An object with the following properties:")])]),t._v(" "),e("tr",[e("td",[t._v("-------------")]),t._v(" "),e("td",[t._v("---------------------")]),t._v(" "),e("td",[t._v("-------")]),t._v(" "),e("td",[t._v("--------------------------------------------------------------------")])]),t._v(" "),e("tr",[e("td",[t._v("sourceUri")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The default size of the map pin created for each point, in pixels.")])]),t._v(" "),e("tr",[e("td",[t._v("markerSize")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("markerSymbol")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("markerColor")]),t._v(" "),e("td",[t._v("String|Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("stroke")]),t._v(" "),e("td",[t._v("String|Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("strokeWidth")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("fill")]),t._v(" "),e("td",[t._v("String|Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("clampToGround")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("credit")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html"}},[this._v("GeoJsonDataSource")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),e("tr",[e("td",[t._v("changedEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers when the underlying data changes.")])]),t._v(" "),e("tr",[e("td",[t._v("errorEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers if an error is encountered during processing.")])]),t._v(" "),e("tr",[e("td",[t._v("loadingEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers the data source either starts or stops loading.")])]),t._v(" "),e("tr",[e("td",[t._v("clusterEvent")]),t._v(" "),e("td",[t._v("(clusteredEntities, cluster)")]),t._v(" "),e("td",[t._v("Gets the event that is fired when entities are added or removed from the collection.")])]),t._v(" "),e("tr",[e("td",[t._v("collectionChanged")]),t._v(" "),e("td",[t._v("(collection, added, removed, changed)")]),t._v(" "),e("td",[t._v("Gets the event that will be raised when a new cluster will be displayed.")])]),t._v(" "),e("tr",[e("td",[t._v("click")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("Triggered when the mouse clicks on the datasource.")])]),t._v(" "),e("tr",[e("td",[t._v("clickout")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("Touch when the mouse clicks outside the datasource.")])]),t._v(" "),e("tr",[e("td",[t._v("dblclick")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("Triggered when the left mouse button double-clicks the datasource.")])]),t._v(" "),e("tr",[e("td",[t._v("mousemove")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("Triggered when the mouse moves on this datasource.")])]),t._v(" "),e("tr",[e("td",[t._v("mouseover")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("Triggered when the mouse moves to this datasource.")])]),t._v(" "),e("tr",[e("td",[t._v("mouseout")]),t._v(" "),e("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),e("td",[t._v("Triggered when the mouse moves out of the datasource.")])])])])}],!1,null,null,null);s.default=v.exports},xFCK:function(t,s,e){t.exports=e("7faY")}}]);
//# sourceMappingURL=17.42e42f7434094897c800.js.map