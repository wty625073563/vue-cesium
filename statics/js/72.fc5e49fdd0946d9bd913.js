(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{PKlA:function(s,a,t){s.exports=t("qq7w")},qq7w:function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),e=Object(r.a)({data:function(){return{alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){s.Cesium,s.viewer}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("IonImageryProvider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Load an imagerylayer with IonImageryProvider")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-layer-imagery",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[t("vc-provider-imagery-ion",{attrs:{assetId:3812}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("alpha")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(a){s.alpha=a},expression:"alpha"}}),s._v(" "),t("span",[s._v("brightness")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(a){s.brightness=a},expression:"brightness"}}),s._v(" "),t("span",[s._v("contrast")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(a){s.contrast=a},expression:"contrast"}})],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(4),s._v(" "),t("hr")],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("The "),a("code",{pre:!0},[this._v("vc-provider-imagery-ion")]),this._v(" component is used to load tiled imagery of the Cesium ion REST API service.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-ion")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":assetId")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3812"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-ion")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("alpha"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("brightness"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("contrast"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("assetId")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" An ion imagery asset ID;")])]),s._v(" "),t("tr",[t("td",[s._v("accessToken")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The access token to use.")])]),s._v(" "),t("tr",[t("td",[s._v("server")]),s._v(" "),t("td",[s._v("String|Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The resource to the Cesium ion API server.")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("Refer to the official document: "),a("strong",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/IonImageryProvider.html"}},[this._v("IonImageryProvider")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),t("tr",[t("td",[s._v("errorEvent")]),s._v(" "),t("td",[s._v("TileProviderError")]),s._v(" "),t("td",[s._v("Triggers when the imagery provider encounters an asynchronous error.")])]),s._v(" "),t("tr",[t("td",[s._v("readyPromise")]),s._v(" "),t("td",[s._v("ImageryProvider")]),s._v(" "),t("td",[s._v("Triggers when the provider is ready for use.")])])])])}],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=72.fc5e49fdd0946d9bd913.js.map