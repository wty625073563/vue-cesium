define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-a6071fdb","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-d239a979","./GeometryAttributes-90846c5f","./IndexDatatype-66caba23","./GeometryOffsetAttribute-84f7eff3","./EllipseGeometryLibrary-ced41b66","./EllipseOutlineGeometry-c3688f09"],function(r,e,i,l,t,n,s,o,a,u,d,c,m,p){"use strict";function y(e){var i=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).radius,e={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new p.EllipseOutlineGeometry(e),this._workerName="createCircleOutlineGeometry"}y.packedLength=p.EllipseOutlineGeometry.packedLength,y.pack=function(e,i,t){return p.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};var f=new p.EllipseOutlineGeometry({center:new l.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),G={center:new l.Cartesian3,radius:void 0,ellipsoid:l.Ellipsoid.clone(l.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return y.unpack=function(e,i,t){i=p.EllipseOutlineGeometry.unpack(e,i,f);return G.center=l.Cartesian3.clone(i._center,G.center),G.ellipsoid=l.Ellipsoid.clone(i._ellipsoid,G.ellipsoid),G.height=i._height,G.extrudedHeight=i._extrudedHeight,G.granularity=i._granularity,G.numberOfVerticalLines=i._numberOfVerticalLines,r.defined(t)?(G.semiMajorAxis=i._semiMajorAxis,G.semiMinorAxis=i._semiMinorAxis,t._ellipseGeometry=new p.EllipseOutlineGeometry(G),t):(G.radius=i._semiMajorAxis,new y(G))},y.createGeometry=function(e){return p.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(e,i){return r.defined(i)&&(e=y.unpack(e,i)),e._ellipseGeometry._center=l.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=l.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),y.createGeometry(e)}});