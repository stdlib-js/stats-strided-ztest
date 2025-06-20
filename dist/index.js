"use strict";var j=function(v,e){return function(){return e||v((e={exports:{}}).exports,e),e.exports}};var x=j(function(H,z){"use strict";var u=require("@stdlib/math-base-assert-is-nan"),O=require("@stdlib/stats-base-dists-normal-quantile").factory,P=require("@stdlib/stats-base-dists-normal-cdf").factory,R=require("@stdlib/stats-strided-mean").ndarray,b=require("@stdlib/math-base-special-sqrt"),p=require("@stdlib/math-base-special-abs"),w=require("@stdlib/array-float64"),D=require("@stdlib/constants-float64-pinf"),E=require("@stdlib/constants-float64-ninf"),y=P(0,1),V=O(0,1),i=new w(2);function K(v,e,a,s,c,d,l,f,r){var N,t,F,n,q;return v<=0||u(a)||u(s)||u(c)||c<=0||a<0||a>1?(i[0]=NaN,i[1]=NaN,r.rejected=!1,r.alternative=e,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=i,r.nullValue=NaN,r.sd=NaN,r):(t=c/b(v),F=R(v,d,l,f),n=(F-s)/t,e==="less"?(N=y(n),q=V(1-a),i[0]=E,i[1]=s+(n+q)*t):e==="greater"?(N=1-y(n),q=V(1-a),i[0]=s+(n-q)*t,i[1]=D):(N=2*y(-p(n)),q=V(1-a/2),i[0]=s+(n-q)*t,i[1]=s+(n+q)*t),r.rejected=N<=a,r.alternative=e,r.alpha=a,r.pValue=N,r.statistic=n,r.ci=i,r.nullValue=s,r.sd=t,r)}z.exports=K});var C=j(function(J,A){"use strict";var Q=require("@stdlib/strided-base-stride2offset"),S=x();function W(v,e,a,s,c,d,l,f){return S(v,e,a,s,c,d,l,Q(v,l),f)}A.exports=W});var k=require("@stdlib/utils-define-nonenumerable-read-only-property"),I=C(),B=x();k(I,"ndarray",B);module.exports=I;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
