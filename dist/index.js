"use strict";var z=function(v,i){return function(){try{return i||v((i={exports:{}}).exports,i),i.exports}catch(e){throw i=0,e}}};var F=z(function(L,A){"use strict";var P=require("@stdlib/stats-base-ztest-alternative-resolve-str"),y=require("@stdlib/math-base-assert-is-nan"),R=require("@stdlib/stats-base-dists-normal-quantile").factory,S=require("@stdlib/stats-base-dists-normal-cdf").factory,b=require("@stdlib/stats-strided-mean").ndarray,p=require("@stdlib/math-base-special-sqrt"),w=require("@stdlib/math-base-special-abs"),D=require("@stdlib/array-float64"),E=require("@stdlib/constants-float64-pinf"),K=require("@stdlib/constants-float64-ninf"),V=S(0,1),x=R(0,1),a=new D(2);function Q(v,i,e,s,q,f,d,u,r){var c,n,j,t,N,l;return N=P(i),v<=0||y(e)||y(s)||y(q)||q<=0||e<0||e>1?(a[0]=NaN,a[1]=NaN,r.rejected=!1,r.alternative=N,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=a,r.nullValue=NaN,r.sd=NaN,r):(n=q/p(v),j=b(v,f,d,u),t=(j-s)/n,N==="less"?(c=V(t),l=x(1-e),a[0]=K,a[1]=s+(t+l)*n):N==="greater"?(c=1-V(t),l=x(1-e),a[0]=s+(t-l)*n,a[1]=E):(c=2*V(-w(t)),l=x(1-e/2),a[0]=s+(t-l)*n,a[1]=s+(t+l)*n),r.rejected=c<=e,r.alternative=N,r.alpha=e,r.pValue=c,r.statistic=t,r.ci=a,r.nullValue=s,r.sd=n,r)}A.exports=Q});var I=z(function(M,C){"use strict";var W=require("@stdlib/strided-base-stride2offset"),k=F();function B(v,i,e,s,q,f,d,u){return k(v,i,e,s,q,f,d,W(v,d),u)}C.exports=B});var G=require("@stdlib/utils-define-nonenumerable-read-only-property"),O=I(),H=F();G(O,"ndarray",H);module.exports=O;
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
