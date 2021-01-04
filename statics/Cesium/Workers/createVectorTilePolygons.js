define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-a6071fdb","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./AttributeCompression-170b3be0","./IndexDatatype-66caba23","./IntersectionTests-5912ffe9","./Plane-b2b7f933","./createTaskProcessorWorker","./EllipsoidTangentPlane-ddc73ae7","./OrientedBoundingBox-26e2b23b","./Color-3780ac32"],function(ye,e,Ie,me,a,r,n,we,ve,t,i,o,s,xe,Ae){"use strict";var Ee=new me.Cartesian3,Ne=new me.Ellipsoid,Te=new me.Rectangle,ke={min:void 0,max:void 0,indexBytesPerElement:void 0};function Be(e,a,r){var n=a.length,t=2+n*xe.OrientedBoundingBox.packedLength+1+function(e){for(var a=e.length,r=0,n=0;n<a;++n)r+=Ae.Color.packedLength+3+e[n].batchIds.length;return r}(r),i=new Float64Array(t),o=0;i[o++]=e,i[o++]=n;for(var s=0;s<n;++s)xe.OrientedBoundingBox.pack(a[s],i,o),o+=xe.OrientedBoundingBox.packedLength;var f=r.length;i[o++]=f;for(var d=0;d<f;++d){var c=r[d];Ae.Color.pack(c.color,i,o),o+=Ae.Color.packedLength,i[o++]=c.offset,i[o++]=c.count;var u=c.batchIds,h=u.length;i[o++]=h;for(var l=0;l<h;++l)i[o++]=u[l]}return i}var Le=new me.Cartesian3,Oe=new me.Cartesian3,Ue=new me.Cartesian3,Pe=new me.Cartesian3,Fe=new me.Cartesian3,Se=new me.Cartographic,Re=new me.Rectangle;return o(function(e,a){var r;i=e.packedBuffer,r=new Float64Array(i),i=0,ke.indexBytesPerElement=r[i++],ke.min=r[i++],ke.max=r[i++],me.Cartesian3.unpack(r,3,Ee),i+=me.Cartesian3.packedLength,me.Ellipsoid.unpack(r,i,Ne),i+=me.Ellipsoid.packedLength,me.Rectangle.unpack(r,i,Te);var n,t=new(2===ke.indexBytesPerElement?Uint16Array:Uint32Array)(e.indices),i=new Uint16Array(e.positions),o=new Uint32Array(e.counts),s=new Uint32Array(e.indexCounts),f=new Uint32Array(e.batchIds),d=new Uint32Array(e.batchTableColors),c=new Array(o.length),u=Ee,h=Ne,l=Te,g=ke.min,p=ke.max,b=e.minimumHeights,C=e.maximumHeights;ye.defined(b)&&ye.defined(C)&&(b=new Float32Array(b),C=new Float32Array(C));var y=i.length/2,I=i.subarray(0,y),m=i.subarray(y,2*y);we.AttributeCompression.zigZagDeltaDecode(I,m);for(var w=new Float64Array(3*y),v=0;v<y;++v){var x=I[v],A=m[v],x=Ie.CesiumMath.lerp(l.west,l.east,x/32767),A=Ie.CesiumMath.lerp(l.south,l.north,A/32767),A=me.Cartographic.fromRadians(x,A,0,Se),A=h.cartographicToCartesian(A,Le);me.Cartesian3.pack(A,w,3*v)}var E=o.length,N=new Array(E),T=new Array(E),k=0,B=0;for(v=0;v<E;++v)N[v]=k,T[v]=B,k+=o[v],B+=s[v];var L,O=new Float32Array(3*y*2),U=new Uint16Array(2*y),P=new Uint32Array(T.length),F=new Uint32Array(s.length),S=[],R={};for(v=0;v<E;++v)n=d[v],ye.defined(R[n])?(R[n].positionLength+=o[v],R[n].indexLength+=s[v],R[n].batchIds.push(v)):R[n]={positionLength:o[v],indexLength:s[v],offset:0,indexOffset:0,batchIds:[v]};var D,M=0,_=0;for(n in R)R.hasOwnProperty(n)&&((L=R[n]).offset=M,L.indexOffset=_,M+=2*L.positionLength,_+=D=2*L.indexLength+6*L.positionLength,L.indexLength=D);var G=[];for(n in R)R.hasOwnProperty(n)&&(L=R[n],G.push({color:Ae.Color.fromRgba(parseInt(n)),offset:L.indexOffset,count:L.indexLength,batchIds:L.batchIds}));for(v=0;v<E;++v){var Y=(L=R[n=d[v]]).offset,V=3*Y,H=Y,W=N[v],z=o[v],Z=f[v],j=g,q=p;ye.defined(b)&&ye.defined(C)&&(j=b[v],q=C[v]);for(var J=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY,Q=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY,$=0;$<z;++$){var ee=me.Cartesian3.unpack(w,3*W+3*$,Le);h.scaleToGeodeticSurface(ee,ee);var ae=h.cartesianToCartographic(ee,Se),re=ae.latitude,ne=ae.longitude,J=Math.min(re,J),K=Math.max(re,K),Q=Math.min(ne,Q),X=Math.max(ne,X),ae=h.geodeticSurfaceNormal(ee,Oe),re=me.Cartesian3.multiplyByScalar(ae,j,Ue),ne=me.Cartesian3.add(ee,re,Pe),re=me.Cartesian3.multiplyByScalar(ae,q,re),re=me.Cartesian3.add(ee,re,Fe);me.Cartesian3.subtract(re,u,re),me.Cartesian3.subtract(ne,u,ne),me.Cartesian3.pack(re,O,V),me.Cartesian3.pack(ne,O,V+3),U[H]=Z,U[H+1]=Z,V+=6,H+=2}(l=Re).west=Q,l.east=X,l.south=J,l.north=K,c[v]=xe.OrientedBoundingBox.fromRectangle(l,g,p,h);var te=L.indexOffset,ie=T[v],oe=s[v];for(P[v]=te,$=0;$<oe;$+=3){var se=t[ie+$]-W,fe=t[ie+$+1]-W,de=t[ie+$+2]-W;S[te++]=2*se+Y,S[te++]=2*fe+Y,S[te++]=2*de+Y,S[te++]=2*de+1+Y,S[te++]=2*fe+1+Y,S[te++]=2*se+1+Y}for($=0;$<z;++$){var ce=$,ue=($+1)%z;S[te++]=2*ce+1+Y,S[te++]=2*ue+Y,S[te++]=2*ce+Y,S[te++]=2*ce+1+Y,S[te++]=2*ue+1+Y,S[te++]=2*ue+Y}L.offset+=2*z,L.indexOffset=te,F[v]=te-P[v]}S=ve.IndexDatatype.createTypedArray(O.length/3,S);for(var he=G.length,le=0;le<he;++le){for(var ge=G[le].batchIds,pe=0,be=ge.length,Ce=0;Ce<be;++Ce)pe+=F[ge[Ce]];G[le].count=pe}return i=Be(2===S.BYTES_PER_ELEMENT?ve.IndexDatatype.UNSIGNED_SHORT:ve.IndexDatatype.UNSIGNED_INT,c,G),a.push(O.buffer,S.buffer,P.buffer,F.buffer,U.buffer,i.buffer),{positions:O.buffer,indices:S.buffer,indexOffsets:P.buffer,indexCounts:F.buffer,batchIds:U.buffer,packedBuffer:i.buffer}})});
