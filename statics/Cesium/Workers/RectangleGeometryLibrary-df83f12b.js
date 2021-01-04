define(["exports","./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-a6071fdb","./GeometryAttribute-d239a979"],function(t,S,n,X,Y,a,l){"use strict";var w=Math.cos,M=Math.sin,m=Math.sqrt,r={computePosition:function(t,n,a,r,e,o,s){var i=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,u=g.latitude-t.granYCos*r+e*t.granXSin,c=w(u),C=M(u),l=i.z*C,d=g.longitude+r*t.granYSin+e*t.granXCos,n=c*w(d),g=c*M(d),c=i.x*n,i=i.y*g,C=m(c*n+i*g+l*C);o.x=c/C,o.y=i/C,o.z=l/C,a&&(a=t.stNwCorner,S.defined(a)?(u=a.latitude-t.stGranYCos*r+e*t.stGranXSin,d=a.longitude+r*t.stGranYSin+e*t.stGranXCos,s.x=(d-t.stWest)*t.lonScalar,s.y=(u-t.stSouth)*t.latScalar):(s.x=(d-h.west)*t.lonScalar,s.y=(u-h.south)*t.latScalar))}},d=new l.Matrix2,f=new Y.Cartesian3,p=new Y.Cartographic,G=new Y.Cartesian3,x=new a.GeographicProjection;function R(t,n,a,r,e,o,s){var i=Math.cos(n),g=r*i,h=a*i,u=Math.sin(n),c=r*u,C=a*u;f=x.project(t,f),f=Y.Cartesian3.subtract(f,G,f);i=l.Matrix2.fromRotation(n,d);f=l.Matrix2.multiplyByVector(i,f,f),f=Y.Cartesian3.add(f,G,f),--o,--s;r=(t=x.unproject(f,t)).latitude,a=r+o*C,u=r-g*s,n=r-g*s+o*C,i=Math.max(r,a,u,n),r=Math.min(r,a,u,n),a=t.longitude,u=a+o*h,n=a+s*c,o=a+s*c+o*h;return{north:i,south:r,east:Math.max(a,u,n,o),west:Math.min(a,u,n,o),granYCos:g,granYSin:c,granXCos:h,granXSin:C,nwCorner:t}}r.computeOptions=function(t,n,a,r,e,o,s){var i=t.east,g=t.west,h=t.north,u=t.south,c=!1,C=!1;h===X.CesiumMath.PI_OVER_TWO&&(c=!0),u===-X.CesiumMath.PI_OVER_TWO&&(C=!0);var l,d=h-u,S=(w=i<g?X.CesiumMath.TWO_PI-g+i:i-g)/((l=Math.ceil(w/n)+1)-1),w=d/((M=Math.ceil(d/n)+1)-1),d=Y.Rectangle.northwest(t,o),n=Y.Rectangle.center(t,p);0===a&&0===r||(n.longitude<d.longitude&&(n.longitude+=X.CesiumMath.TWO_PI),G=x.project(n,G));var M,o=w,n=S,e=Y.Rectangle.clone(t,e),C={granYCos:o,granYSin:0,granXCos:n,granXSin:0,nwCorner:d,boundingRectangle:e,width:l,height:M,northCap:c,southCap:C};return 0!==a&&(h=(d=R(d,a,S,w,0,l,M)).north,u=d.south,i=d.east,g=d.west,C.granYCos=d.granYCos,C.granYSin=d.granYSin,C.granXCos=d.granXCos,C.granXSin=d.granXSin,e.north=h,e.south=u,e.east=i,e.west=g),0!==r&&(a-=r,M=R(s=Y.Rectangle.northwest(e,s),a,S,w,0,l,M),C.stGranYCos=M.granYCos,C.stGranXCos=M.granXCos,C.stGranYSin=M.granYSin,C.stGranXSin=M.granXSin,C.stNwCorner=s,C.stWest=M.west,C.stSouth=M.south),C},t.RectangleGeometryLibrary=r});
