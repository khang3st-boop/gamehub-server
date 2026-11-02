(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.rt(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ll(b)
return new s(c,this)}:function(){if(s===null)s=A.ll(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ll(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
lo(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k5(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lm==null){A.rf()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.f(A.mt("Return interceptor for "+A.A(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jB
if(o==null)o=$.jB=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.rl(a)
if(p!=null)return p
if(typeof a=="function")return B.cZ
s=Object.getPrototypeOf(a)
if(s==null)return B.bT
if(s===Object.prototype)return B.bT
if(typeof q=="function"){o=$.jB
if(o==null)o=$.jB=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aJ,enumerable:false,writable:true,configurable:true})
return B.aJ}return B.aJ},
m3(a,b){if(a<0||a>4294967295)throw A.f(A.aj(a,0,4294967295,"length",null))
return J.m4(new Array(a),b)},
ai(a,b){if(a<0||a>4294967295)throw A.f(A.aj(a,0,4294967295,"length",null))
return J.m4(new Array(a),b)},
fP(a,b){if(a<0)throw A.f(A.bg("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.p("u<0>"))},
c7(a,b){if(a<0)throw A.f(A.bg("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.p("u<0>"))},
m4(a,b){var s=A.j(a,b.p("u<0>"))
s.$flags=1
return s},
m5(a,b){var s=t.e8
return J.nF(s.a(a),s.a(b))},
m6(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
of(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.m6(r))break;++b}return b},
og(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.m6(q))break}return b},
cy(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e_.prototype
return J.fR.prototype}if(typeof a=="string")return J.c8.prototype
if(a==null)return J.e0.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.d7.prototype
if(typeof a=="bigint")return J.d6.prototype
return a}if(a instanceof A.D)return a
return J.k5(a)},
a1(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.d7.prototype
if(typeof a=="bigint")return J.d6.prototype
return a}if(a instanceof A.D)return a
return J.k5(a)},
ak(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.d7.prototype
if(typeof a=="bigint")return J.d6.prototype
return a}if(a instanceof A.D)return a
return J.k5(a)},
ra(a){if(typeof a=="number")return J.d5.prototype
if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.dk.prototype
return a},
bb(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.d7.prototype
if(typeof a=="bigint")return J.d6.prototype
return a}if(a instanceof A.D)return a
return J.k5(a)},
bc(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cy(a).U(a,b)},
c(a,b){if(typeof b==="number")if(Array.isArray(a)||A.rj(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ak(a).m(a,b)},
w(a,b,c){return J.ak(a).i(a,b,c)},
nB(a,b,c){return J.bb(a).eY(a,b,c)},
lw(a,b,c){return J.bb(a).eZ(a,b,c)},
nC(a,b,c){return J.bb(a).f_(a,b,c)},
nD(a,b,c){return J.bb(a).f0(a,b,c)},
kq(a,b,c){return J.bb(a).f1(a,b,c)},
nE(a){return J.bb(a).f2(a)},
lx(a,b,c){return J.bb(a).d2(a,b,c)},
ax(a,b,c){return J.bb(a).f3(a,b,c)},
aI(a){return J.bb(a).f4(a)},
Z(a,b,c){return J.bb(a).d3(a,b,c)},
nF(a,b){return J.ra(a).bJ(a,b)},
ly(a,b){return J.ak(a).bs(a,b)},
bd(a,b,c,d){return J.ak(a).aD(a,b,c,d)},
be(a){return J.cy(a).gG(a)},
hU(a){return J.ak(a).gH(a)},
bf(a){return J.a1(a).gu(a)},
nG(a){return J.cy(a).gaE(a)},
lz(a,b,c){return J.bb(a).fC(a,b,c)},
kr(a,b){return J.ak(a).da(a,b)},
ks(a,b,c){return J.ak(a).b8(a,b,c)},
nH(a,b){return J.ak(a).fn(a,b)},
f6(a){return J.cy(a).A(a)},
fC:function fC(){},
fQ:function fQ(){},
e0:function e0(){},
e1:function e1(){},
bH:function bH(){},
h5:function h5(){},
dk:function dk(){},
bl:function bl(){},
d6:function d6(){},
d7:function d7(){},
u:function u(a){this.$ti=a},
fO:function fO(){},
il:function il(a){this.$ti=a},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d5:function d5(){},
e_:function e_(){},
fR:function fR(){},
c8:function c8(){}},A={kE:function kE(){},
nM(a,b,c){if(t.gw.b(a))return new A.eL(a,b.p("@<0>").aG(c).p("eL<1,2>"))
return new A.bU(a,b.p("@<0>").aG(c).p("bU<1,2>"))},
m9(a){return new A.d8("Field '"+a+"' has not been initialized.")},
oh(a){return new A.d8("Field '"+a+"' has already been initialized.")},
br(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
iU(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
hL(a,b,c){return a},
ln(a){var s,r
for(s=$.aG.length,r=0;r<s;++r)if(a===$.aG[r])return!0
return!1},
ez(a,b,c,d){A.cp(b,"start")
if(c!=null){A.cp(c,"end")
if(b>c)A.a8(A.aj(b,0,c,"start",null))}return new A.ey(a,b,c,d.p("ey<0>"))},
m0(){return new A.di("No element")},
m1(){return new A.di("Too few elements")},
dq:function dq(){},
dB:function dB(a,b){this.a=a
this.$ti=b},
bU:function bU(a,b){this.a=a
this.$ti=b},
eL:function eL(a,b){this.a=a
this.$ti=b},
bV:function bV(a,b){this.a=a
this.$ti=b},
i_:function i_(a,b){this.a=a
this.b=b},
d8:function d8(a){this.a=a},
aR:function aR(a){this.a=a},
iT:function iT(){},
B:function B(){},
az:function az(){},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c9:function c9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dE:function dE(a){this.$ti=a},
dF:function dF(a){this.$ti=a},
an:function an(){},
bw:function bw(){},
dl:function dl(){},
ne(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
rj(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.ez.b(a)},
A(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.f6(a)
return s},
et(a){var s,r=$.mj
if(r==null)r=$.mj=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
oE(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.a(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
h8(a){var s,r,q,p
if(a instanceof A.D)return A.aF(A.b4(a),null)
s=J.cy(a)
if(s===B.cX||s===B.d_||t.bI.b(a)){r=B.aN(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aF(A.b4(a),null)},
mk(a){var s,r,q
if(a==null||typeof a=="number"||A.lh(a))return J.f6(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bB)return a.A(0)
if(a instanceof A.bP)return a.eQ(!0)
s=$.nA()
for(r=0;r<1;++r){q=s[r].jX(a)
if(q!=null)return q}return"Instance of '"+A.h8(a)+"'"},
mi(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oF(a){var s,r,q,p=A.j([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.ab)(a),++r){q=a[r]
if(!A.jS(q))throw A.f(A.bR(q))
if(q<=65535)B.c.M(p,q)
else if(q<=1114111){B.c.M(p,55296+(B.a.j(q-65536,10)&1023))
B.c.M(p,56320+(q&1023))}else throw A.f(A.bR(q))}return A.mi(p)},
ml(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.jS(q))throw A.f(A.bR(q))
if(q<0)throw A.f(A.bR(q))
if(q>65535)return A.oF(a)}return A.mi(a)},
oG(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
U(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.j(s,10)|55296)>>>0,s&1023|56320)}throw A.f(A.aj(a,0,1114111,null,null))},
db(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oD(a){var s=A.db(a).getUTCFullYear()+0
return s},
oB(a){var s=A.db(a).getUTCMonth()+1
return s},
ox(a){var s=A.db(a).getUTCDate()+0
return s},
oy(a){var s=A.db(a).getUTCHours()+0
return s},
oA(a){var s=A.db(a).getUTCMinutes()+0
return s},
oC(a){var s=A.db(a).getUTCSeconds()+0
return s},
oz(a){var s=A.db(a).getUTCMilliseconds()+0
return s},
ow(a){var s=a.$thrownJsError
if(s==null)return null
return A.f5(s)},
oH(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.a2(a,s)
a.$thrownJsError=s
s.stack=""}},
cz(a){throw A.f(A.bR(a))},
a(a,b){if(a==null)J.bf(a)
throw A.f(A.jX(a,b))},
jX(a,b){var s,r="index"
if(!A.jS(b))return new A.aQ(!0,b,r,null)
s=J.bf(a)
if(b<0||b>=s)return A.kB(b,s,a,r)
return A.mn(b,r)},
r2(a,b,c){if(a<0||a>c)return A.aj(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aj(b,a,c,"end",null)
return new A.aQ(!0,b,"end",null)},
bR(a){return new A.aQ(!0,a,null,null)},
f(a){return A.a2(a,new Error())},
a2(a,b){var s
if(a==null)a=new A.bs()
b.dartException=a
s=A.ru
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ru(){return J.f6(this.dartException)},
a8(a,b){throw A.a2(a,b==null?new Error():b)},
b(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a8(A.qg(a,b,c),s)},
qg(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.eB("'"+s+"': Cannot "+o+" "+l+k+n)},
ab(a){throw A.f(A.aT(a))},
bt(a){var s,r,q,p,o,n
a=A.rq(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.iZ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
j_(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mq(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kG(a,b){var s=b==null,r=s?null:b.method
return new A.fW(a,r,s?null:b.receiver)},
bA(a){if(a==null)return new A.iC(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.cB(a,a.dartException)
return A.qU(a)},
cB(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.j(r,16)&8191)===10)switch(q){case 438:return A.cB(a,A.kG(A.A(s)+" (Error "+q+")",null))
case 445:case 5007:A.A(s)
return A.cB(a,new A.ee())}}if(a instanceof TypeError){p=$.nj()
o=$.nk()
n=$.nl()
m=$.nm()
l=$.np()
k=$.nq()
j=$.no()
$.nn()
i=$.ns()
h=$.nr()
g=p.bt(s)
if(g!=null)return A.cB(a,A.kG(A.b1(s),g))
else{g=o.bt(s)
if(g!=null){g.method="call"
return A.cB(a,A.kG(A.b1(s),g))}else if(n.bt(s)!=null||m.bt(s)!=null||l.bt(s)!=null||k.bt(s)!=null||j.bt(s)!=null||m.bt(s)!=null||i.bt(s)!=null||h.bt(s)!=null){A.b1(s)
return A.cB(a,new A.ee())}}return A.cB(a,new A.hr(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ex()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cB(a,new A.aQ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ex()
return a},
f5(a){var s
if(a==null)return new A.eX(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.eX(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
hP(a){if(a==null)return J.be(a)
if(typeof a=="object")return A.et(a)
return J.be(a)},
qY(a){if(typeof a=="number")return B.b.gG(a)
if(a instanceof A.hG)return A.et(a)
if(a instanceof A.bP)return a.gG(a)
return A.hP(a)},
n7(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
qs(a,b,c,d,e,f){t.Z.a(a)
switch(A.v(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(new A.jq("Unsupported number of arguments for wrapped closure"))},
dx(a,b){var s=a.$identity
if(!!s)return s
s=A.qZ(a,b)
a.$identity=s
return s},
qZ(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.qs)},
nR(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hl().constructor.prototype):Object.create(new A.cD(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.lH(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.nN(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.lH(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
nN(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.nJ)}throw A.f("Error in functionType of tearoff")},
nO(a,b,c,d){var s=A.lG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lH(a,b,c,d){if(c)return A.nQ(a,b,d)
return A.nO(b.length,d,a,b)},
nP(a,b,c,d){var s=A.lG,r=A.nK
switch(b?-1:a){case 0:throw A.f(new A.hk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
nQ(a,b,c){var s,r
if($.lE==null)$.lE=A.lD("interceptor")
if($.lF==null)$.lF=A.lD("receiver")
s=b.length
r=A.nP(s,c,a,b)
return r},
ll(a){return A.nR(a)},
nJ(a,b){return A.f1(v.typeUniverse,A.b4(a.a),b)},
lG(a){return a.a},
nK(a){return a.b},
lD(a){var s,r,q,p=new A.cD("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.f(A.bg("Field name "+a+" not found.",null))},
n9(a){return v.getIsolateTag(a)},
tS(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rl(a){var s,r,q,p,o,n=A.b1($.na.$1(a)),m=$.jY[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.mR($.n1.$2(a,n))
if(q!=null){m=$.jY[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.kb(s)
$.jY[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.k9[n]=s
return s}if(p==="-"){o=A.kb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nb(a,s)
if(p==="*")throw A.f(A.mt(n))
if(v.leafTags[n]===true){o=A.kb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nb(a,s)},
nb(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lo(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kb(a){return J.lo(a,!1,null,!!a.$iaD)},
rn(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.kb(s)
else return J.lo(s,c,null,null)},
rf(){if(!0===$.lm)return
$.lm=!0
A.rg()},
rg(){var s,r,q,p,o,n,m,l
$.jY=Object.create(null)
$.k9=Object.create(null)
A.re()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nc.$1(o)
if(n!=null){m=A.rn(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
re(){var s,r,q,p,o,n,m=B.cp()
m=A.dw(B.cq,A.dw(B.cr,A.dw(B.aO,A.dw(B.aO,A.dw(B.cs,A.dw(B.ct,A.dw(B.cu(B.aN),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.na=new A.k6(p)
$.n1=new A.k7(o)
$.nc=new A.k8(n)},
dw(a,b){return a(b)||b},
r1(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
rq(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(){},
c_:function c_(a,b){this.a=a
this.$ti=b},
ew:function ew(){},
iZ:function iZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ee:function ee(){},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
iC:function iC(a){this.a=a},
eX:function eX(a){this.a=a
this.b=null},
bB:function bB(){},
fc:function fc(){},
fd:function fd(){},
hm:function hm(){},
hl:function hl(){},
cD:function cD(a,b){this.a=a
this.b=b},
hk:function hk(a){this.a=a},
aW:function aW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
is:function is(a){this.a=a},
iw:function iw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bm:function bm(a,b){this.a=a
this.$ti=b},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ix:function ix(a,b){this.a=a
this.$ti=b},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e2:function e2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
bP:function bP(){},
dt:function dt(){},
rt(a){throw A.a2(new A.d8("Field '"+a+"' has been assigned during initialization."),new Error())},
d(){throw A.a2(A.m9(""),new Error())},
lp(){throw A.a2(A.oh(""),new Error())},
pK(){var s=new A.jn()
return s.b=s},
jn:function jn(){this.b=null},
au(a,b,c){},
z(a){var s,r,q
if(t.aP.b(a))return a
s=J.a1(a)
r=A.X(s.gu(a),null,!1,t.z)
for(q=0;q<s.gu(a);++q)B.c.i(r,q,s.m(a,q))
return r},
oi(a,b,c){var s
A.au(a,b,c)
s=new DataView(a,b,c)
return s},
oj(a){return new Float32Array(a)},
ok(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Float32Array(a,b,c)},
ol(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Int16Array(a,b,c)},
om(a){return new Int32Array(a)},
on(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Int32Array(a,b,c)},
mf(a){return new Int8Array(a)},
oo(a){return new Int8Array(A.z(a))},
op(a,b,c){A.au(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
oq(a){return new Uint16Array(a)},
or(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
os(a){return new Uint32Array(a)},
ot(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
ed(a){return new Uint8Array(a)},
ou(a){return new Uint8Array(A.z(a))},
ov(a,b,c){A.au(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
bz(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.jX(b,a))},
b2(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.f(A.r2(a,b,c))
if(b==null)return c
return b},
ca:function ca(){},
e9:function e9(){},
jL:function jL(a){this.a=a},
h1:function h1(){},
aa:function aa(){},
bI:function bI(){},
aE:function aE(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
cb:function cb(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
l2(a,b){var s=b.c
return s==null?b.c=A.f_(a,"cR",[b.x]):s},
mo(a){var s=a.w
if(s===6||s===7)return A.mo(a.x)
return s===11||s===12},
oK(a){return a.as},
a_(a){return A.jK(v.typeUniverse,a,!1)},
cv(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.cv(a1,s,a3,a4)
if(r===s)return a2
return A.mI(a1,r,!0)
case 7:s=a2.x
r=A.cv(a1,s,a3,a4)
if(r===s)return a2
return A.mH(a1,r,!0)
case 8:q=a2.y
p=A.dv(a1,q,a3,a4)
if(p===q)return a2
return A.f_(a1,a2.x,p)
case 9:o=a2.x
n=A.cv(a1,o,a3,a4)
m=a2.y
l=A.dv(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.lc(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.dv(a1,j,a3,a4)
if(i===j)return a2
return A.mJ(a1,k,i)
case 11:h=a2.x
g=A.cv(a1,h,a3,a4)
f=a2.y
e=A.qR(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.mG(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.dv(a1,d,a3,a4)
o=a2.x
n=A.cv(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ld(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.f(A.f9("Attempted to substitute unexpected RTI kind "+a0))}},
dv(a,b,c,d){var s,r,q,p,o=b.length,n=A.jO(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cv(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
qS(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.jO(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cv(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
qR(a,b,c,d){var s,r=b.a,q=A.dv(a,r,c,d),p=b.b,o=A.dv(a,p,c,d),n=b.c,m=A.qS(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hB()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
n4(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.rc(s)
return a.$S()}return null},
rh(a,b){var s
if(A.mo(b))if(a instanceof A.bB){s=A.n4(a)
if(s!=null)return s}return A.b4(a)},
b4(a){if(a instanceof A.D)return A.l(a)
if(Array.isArray(a))return A.ah(a)
return A.lg(J.cy(a))},
ah(a){var s=a[v.arrayRti],r=t.e
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
l(a){var s=a.$ti
return s!=null?s:A.lg(a)},
lg(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.qo(a,s)},
qo(a,b){var s=a instanceof A.bB?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.q0(v.typeUniverse,s.name)
b.$ccache=r
return r},
rc(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.jK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
rb(a){return A.cw(A.l(a))},
lk(a){var s
if(a instanceof A.bP)return A.r4(a.$r,a.en())
s=a instanceof A.bB?A.n4(a):null
if(s!=null)return s
if(t.ci.b(a))return J.nG(a).a
if(Array.isArray(a))return A.ah(a)
return A.b4(a)},
cw(a){var s=a.r
return s==null?a.r=new A.hG(a):s},
r4(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.a(q,0)
s=A.f1(v.typeUniverse,A.lk(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.mK(v.typeUniverse,s,A.lk(q[r]))}return A.f1(v.typeUniverse,s,a)},
b5(a){return A.cw(A.jK(v.typeUniverse,a,!1))},
qn(a){var s=this
s.b=A.qP(s)
return s.b(a)},
qP(a){var s,r,q,p,o
if(a===t.K)return A.qy
if(A.cA(a))return A.qC
s=a.w
if(s===6)return A.ql
if(s===1)return A.mW
if(s===7)return A.qt
r=A.qO(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.cA)){a.f="$i"+q
if(q==="p")return A.qw
if(a===t.m)return A.qv
return A.qB}}else if(s===10){p=A.r1(a.x,a.y)
o=p==null?A.mW:p
return o==null?A.hJ(o):o}return A.qj},
qO(a){if(a.w===8){if(a===t.p)return A.jS
if(a===t.V||a===t.H)return A.qx
if(a===t.N)return A.qA
if(a===t.y)return A.lh}return null},
qm(a){var s=this,r=A.qi
if(A.cA(s))r=A.qa
else if(s===t.K)r=A.hJ
else if(A.dy(s)){r=A.qk
if(s===t.I)r=A.q8
else if(s===t.dk)r=A.mR
else if(s===t.a6)r=A.q6
else if(s===t.cg)r=A.mQ
else if(s===t.cD)r=A.q7
else if(s===t.bX)r=A.q9}else if(s===t.p)r=A.v
else if(s===t.N)r=A.b1
else if(s===t.y)r=A.q5
else if(s===t.H)r=A.hI
else if(s===t.V)r=A.mO
else if(s===t.m)r=A.mP
s.a=r
return s.a(a)},
qj(a){var s=this
if(a==null)return A.dy(s)
return A.rk(v.typeUniverse,A.rh(a,s),s)},
ql(a){if(a==null)return!0
return this.x.b(a)},
qB(a){var s,r=this
if(a==null)return A.dy(r)
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.cy(a)[s]},
qw(a){var s,r=this
if(a==null)return A.dy(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.cy(a)[s]},
qv(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.D)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
mV(a){if(typeof a=="object"){if(a instanceof A.D)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
qi(a){var s=this
if(a==null){if(A.dy(s))return a}else if(s.b(a))return a
throw A.a2(A.mS(a,s),new Error())},
qk(a){var s=this
if(a==null||s.b(a))return a
throw A.a2(A.mS(a,s),new Error())},
mS(a,b){return new A.eY("TypeError: "+A.mz(a,A.aF(b,null)))},
mz(a,b){return A.fl(a)+": type '"+A.aF(A.lk(a),null)+"' is not a subtype of type '"+b+"'"},
aP(a,b){return new A.eY("TypeError: "+A.mz(a,b))},
qt(a){var s=this
return s.x.b(a)||A.l2(v.typeUniverse,s).b(a)},
qy(a){return a!=null},
hJ(a){if(a!=null)return a
throw A.a2(A.aP(a,"Object"),new Error())},
qC(a){return!0},
qa(a){return a},
mW(a){return!1},
lh(a){return!0===a||!1===a},
q5(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a2(A.aP(a,"bool"),new Error())},
q6(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a2(A.aP(a,"bool?"),new Error())},
mO(a){if(typeof a=="number")return a
throw A.a2(A.aP(a,"double"),new Error())},
q7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aP(a,"double?"),new Error())},
jS(a){return typeof a=="number"&&Math.floor(a)===a},
v(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a2(A.aP(a,"int"),new Error())},
q8(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a2(A.aP(a,"int?"),new Error())},
qx(a){return typeof a=="number"},
hI(a){if(typeof a=="number")return a
throw A.a2(A.aP(a,"num"),new Error())},
mQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aP(a,"num?"),new Error())},
qA(a){return typeof a=="string"},
b1(a){if(typeof a=="string")return a
throw A.a2(A.aP(a,"String"),new Error())},
mR(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a2(A.aP(a,"String?"),new Error())},
mP(a){if(A.mV(a))return a
throw A.a2(A.aP(a,"JSObject"),new Error())},
q9(a){if(a==null)return a
if(A.mV(a))return a
throw A.a2(A.aP(a,"JSObject?"),new Error())},
mZ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aF(a[q],b)
return s},
qG(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mZ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aF(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mT(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.j([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.M(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aF(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aF(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aF(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aF(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aF(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aF(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aF(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aF(a.x,b)+">"
if(l===8){p=A.qT(a.x)
o=a.y
return o.length>0?p+("<"+A.mZ(o,b)+">"):p}if(l===10)return A.qG(a,b)
if(l===11)return A.mT(a,b,null)
if(l===12)return A.mT(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
qT(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
q1(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
q0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.jK(a,b,!1)
else if(typeof m=="number"){s=m
r=A.f0(a,5,"#")
q=A.jO(s)
for(p=0;p<s;++p)q[p]=r
o=A.f_(a,b,q)
n[b]=o
return o}else return m},
q_(a,b){return A.mM(a.tR,b)},
pZ(a,b){return A.mM(a.eT,b)},
jK(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.mE(A.mC(a,null,b,!1))
r.set(b,s)
return s},
f1(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.mE(A.mC(a,b,c,!0))
q.set(c,r)
return r},
mK(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.lc(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
bQ(a,b){b.a=A.qm
b.b=A.qn
return b},
f0(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b0(null,null)
s.w=b
s.as=c
r=A.bQ(a,s)
a.eC.set(c,r)
return r},
mI(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.pX(a,b,r,c)
a.eC.set(r,s)
return s},
pX(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.cA(b))if(!(b===t.a||b===t.u))if(s!==6)r=s===7&&A.dy(b.x)
if(r)return b
else if(s===1)return t.a}q=new A.b0(null,null)
q.w=6
q.x=b
q.as=c
return A.bQ(a,q)},
mH(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.pV(a,b,r,c)
a.eC.set(r,s)
return s},
pV(a,b,c,d){var s,r
if(d){s=b.w
if(A.cA(b)||b===t.K)return b
else if(s===1)return A.f_(a,"cR",[b])
else if(b===t.a||b===t.u)return t.eH}r=new A.b0(null,null)
r.w=7
r.x=b
r.as=c
return A.bQ(a,r)},
pY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b0(null,null)
s.w=13
s.x=b
s.as=q
r=A.bQ(a,s)
a.eC.set(q,r)
return r},
eZ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
pU(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
f_(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.eZ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b0(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bQ(a,r)
a.eC.set(p,q)
return q},
lc(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.eZ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b0(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.bQ(a,o)
a.eC.set(q,n)
return n},
mJ(a,b,c){var s,r,q="+"+(b+"("+A.eZ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.b0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.bQ(a,s)
a.eC.set(q,r)
return r},
mG(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.eZ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.eZ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.pU(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.b0(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.bQ(a,p)
a.eC.set(r,o)
return o},
ld(a,b,c,d){var s,r=b.as+("<"+A.eZ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.pW(a,b,c,r,d)
a.eC.set(r,s)
return s},
pW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.jO(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.cv(a,b,r,0)
m=A.dv(a,c,r,0)
return A.ld(a,n,m,c!==m)}}l=new A.b0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.bQ(a,l)},
mC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mE(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.pO(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.mD(a,r,l,k,!1)
else if(q===46)r=A.mD(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.cu(a.u,a.e,k.pop()))
break
case 94:k.push(A.pY(a.u,k.pop()))
break
case 35:k.push(A.f0(a.u,5,"#"))
break
case 64:k.push(A.f0(a.u,2,"@"))
break
case 126:k.push(A.f0(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.pQ(a,k)
break
case 38:A.pP(a,k)
break
case 63:p=a.u
k.push(A.mI(p,A.cu(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.mH(p,A.cu(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.pN(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.mF(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.pS(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.cu(a.u,a.e,m)},
pO(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mD(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.q1(s,o.x)[p]
if(n==null)A.a8('No "'+p+'" in "'+A.oK(o)+'"')
d.push(A.f1(s,o,n))}else d.push(p)
return m},
pQ(a,b){var s,r=a.u,q=A.mB(a,b),p=b.pop()
if(typeof p=="string")b.push(A.f_(r,p,q))
else{s=A.cu(r,a.e,p)
switch(s.w){case 11:b.push(A.ld(r,s,q,a.n))
break
default:b.push(A.lc(r,s,q))
break}}},
pN(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.mB(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.cu(p,a.e,o)
q=new A.hB()
q.a=s
q.b=n
q.c=m
b.push(A.mG(p,r,q))
return
case-4:b.push(A.mJ(p,b.pop(),s))
return
default:throw A.f(A.f9("Unexpected state under `()`: "+A.A(o)))}},
pP(a,b){var s=b.pop()
if(0===s){b.push(A.f0(a.u,1,"0&"))
return}if(1===s){b.push(A.f0(a.u,4,"1&"))
return}throw A.f(A.f9("Unexpected extended operation "+A.A(s)))},
mB(a,b){var s=b.splice(a.p)
A.mF(a.u,a.e,s)
a.p=b.pop()
return s},
cu(a,b,c){if(typeof c=="string")return A.f_(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.pR(a,b,c)}else return c},
mF(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cu(a,b,c[s])},
pS(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cu(a,b,c[s])},
pR(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.f(A.f9("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.f(A.f9("Bad index "+c+" for "+b.A(0)))},
rk(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a5(a,b,null,c,null)
r.set(c,s)}return s},
a5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.cA(d))return!0
s=b.w
if(s===4)return!0
if(A.cA(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a5(a,c[b.x],c,d,e))return!0
q=d.w
p=t.a
if(b===p||b===t.u){if(q===7)return A.a5(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.a5(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a5(a,b.x,c,d,e))return!1
return A.a5(a,A.l2(a,b),c,d,e)}if(s===6)return A.a5(a,p,c,d,e)&&A.a5(a,b.x,c,d,e)
if(q===7){if(A.a5(a,b,c,d.x,e))return!0
return A.a5(a,b,c,A.l2(a,d),e)}if(q===6)return A.a5(a,b,c,p,e)||A.a5(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.cj)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.a5(a,j,c,i,e)||!A.a5(a,i,e,j,c))return!1}return A.mU(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.mU(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.qu(a,b,c,d,e)}if(o&&q===10)return A.qz(a,b,c,d,e)
return!1},
mU(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a5(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.a5(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a5(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a5(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.a5(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
qu(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.f1(a,b,r[o])
return A.mN(a,p,null,c,d.y,e)}return A.mN(a,b.y,null,c,d.y,e)},
mN(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a5(a,b[s],d,e[s],f))return!1
return!0},
qz(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a5(a,r[s],c,q[s],e))return!1
return!0},
dy(a){var s=a.w,r=!0
if(!(a===t.a||a===t.u))if(!A.cA(a))if(s!==6)r=s===7&&A.dy(a.x)
return r},
cA(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
mM(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
jO(a){return a>0?new Array(a):v.typeUniverse.sEA},
b0:function b0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
hB:function hB(){this.c=this.b=this.a=null},
hG:function hG(a){this.a=a},
hz:function hz(){},
eY:function eY(a){this.a=a},
pC(){var s,r,q
if(self.scheduleImmediate!=null)return A.qV()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dx(new A.ji(s),1)).observe(r,{childList:true})
return new A.jh(s,r,q)}else if(self.setImmediate!=null)return A.qW()
return A.qX()},
pD(a){self.scheduleImmediate(A.dx(new A.jj(t.M.a(a)),0))},
pE(a){self.setImmediate(A.dx(new A.jk(t.M.a(a)),0))},
pF(a){t.M.a(a)
A.pT(0,a)},
pT(a,b){var s=new A.jH()
s.h6(a,b)
return s},
ku(a){var s
if(t.C.b(a)){s=a.gca()
if(s!=null)return s}return B.a2},
qp(a,b){if($.a6===B.z)return null
return null},
qq(a,b){if($.a6!==B.z)A.qp(a,b)
if(t.C.b(a)){b=a.gca()
if(b==null){A.oH(a,B.a2)
b=B.a2}}else b=B.a2
return new A.b6(a,b)},
l9(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.oM()
b.e2(new A.b6(new A.aQ(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eD(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.cX()
b.cJ(o.a)
A.dr(b,p)
return}b.a^=2
A.hK(null,null,b.b,t.M.a(new A.ju(o,b)))},
dr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.lj(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dr(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.lj(j.a,j.b)
return}g=$.a6
if(g!==h)$.a6=h
else g=null
c=c.c
if((c&15)===8)new A.jy(q,d,n).$0()
else if(o){if((c&1)!==0)new A.jx(q,j).$0()}else if((c&2)!==0)new A.jw(d,q).$0()
if(g!=null)$.a6=g
c=q.c
if(c instanceof A.aO){p=q.a.$ti
p=p.p("cR<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cY(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.l9(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cY(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
qH(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.B
if(s.b(a))return s.a(a)
throw A.f(A.kt(a,"onError",u.c))},
qE(){var s,r
for(s=$.du;s!=null;s=$.du){$.f4=null
r=s.b
$.du=r
if(r==null)$.f3=null
s.a.$0()}},
qQ(){$.li=!0
try{A.qE()}finally{$.f4=null
$.li=!1
if($.du!=null)$.ls().$1(A.n2())}},
n_(a){var s=new A.hx(a),r=$.f3
if(r==null){$.du=$.f3=s
if(!$.li)$.ls().$1(A.n2())}else $.f3=r.b=s},
qN(a){var s,r,q,p=$.du
if(p==null){A.n_(a)
$.f4=$.f3
return}s=new A.hx(a)
r=$.f4
if(r==null){s.b=p
$.du=$.f4=s}else{q=r.b
s.b=q
$.f4=r.b=s
if(q==null)$.f3=s}},
lj(a,b){A.qN(new A.jT(a,b))},
mY(a,b,c,d,e){var s,r=$.a6
if(r===c)return d.$0()
$.a6=c
s=r
try{r=d.$0()
return r}finally{$.a6=s}},
qJ(a,b,c,d,e,f,g){var s,r=$.a6
if(r===c)return d.$1(e)
$.a6=c
s=r
try{r=d.$1(e)
return r}finally{$.a6=s}},
qI(a,b,c,d,e,f,g,h,i){var s,r=$.a6
if(r===c)return d.$2(e,f)
$.a6=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a6=s}},
hK(a,b,c,d){t.M.a(d)
if(B.z!==c){d=c.ja(d)
d=d}A.n_(d)},
ji:function ji(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jH:function jH(){},
jI:function jI(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
hy:function hy(){},
eK:function eK(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aO:function aO(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jr:function jr(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a
this.b=null},
f2:function f2(){},
hE:function hE(){},
jG:function jG(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
mA(a,b){var s=a[b]
return s===a?null:s},
lb(a,b,c){if(c==null)a[b]=a
else a[b]=c},
la(){var s=Object.create(null)
A.lb(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
ma(a,b){return new A.aW(a.p("@<0>").aG(b).p("aW<1,2>"))},
h_(a,b,c){return b.p("@<0>").aG(c).p("kH<1,2>").a(A.n7(a,new A.aW(b.p("@<0>").aG(c).p("aW<1,2>"))))},
J(a,b){return new A.aW(a.p("@<0>").aG(b).p("aW<1,2>"))},
h0(a,b,c){var s=A.ma(b,c)
a.aO(0,new A.iy(s,b,c))
return s},
kJ(a){var s,r
if(A.ln(a))return"{...}"
s=new A.cq("")
try{r={}
B.c.M($.aG,a)
s.a+="{"
r.a=!0
a.aO(0,new A.iA(r,s))
s.a+="}"}finally{if(0>=$.aG.length)return A.a($.aG,-1)
$.aG.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
eN:function eN(){},
eQ:function eQ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eO:function eO(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
G:function G(){},
T:function T(){},
iA:function iA(a,b){this.a=a
this.b=b},
qF(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.bA(r)
q=A.b7(String(s),null,null)
throw A.f(q)}q=A.jR(p)
return q},
jR(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.hC(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.jR(a[s])
return a},
q3(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.nx()
else s=new Uint8Array(o)
for(r=0;r<o;++r){q=b+r
if(!(q<a.length))return A.a(a,q)
p=a[q]
if((p&255)!==p)p=255
s[r]=p}return s},
q2(a,b,c,d){var s=a?$.nw():$.nv()
if(s==null)return null
if(0===c&&d===b.length)return A.mL(s,b)
return A.mL(s,b.subarray(c,d))},
mL(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
pJ(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
for(s=b.length,r=a.length,q=f.$flags|0,p=c,o=0;p<d;++p){if(!(p<s))return A.a(b,p)
n=b[p]
o|=n
i=(i<<8|n)&16777215;--h
if(h===0){m=g+1
l=i>>>18&63
if(!(l<r))return A.a(a,l)
q&2&&A.b(f)
k=f.length
if(!(g<k))return A.a(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=i>>>12&63
if(!(l<r))return A.a(a,l)
if(!(m<k))return A.a(f,m)
f[m]=a.charCodeAt(l)
m=g+1
l=i>>>6&63
if(!(l<r))return A.a(a,l)
if(!(g<k))return A.a(f,g)
f[g]=a.charCodeAt(l)
g=m+1
l=i&63
if(!(l<r))return A.a(a,l)
if(!(m<k))return A.a(f,m)
f[m]=a.charCodeAt(l)
i=0
h=3}}if(o>=0&&o<=255){if(h<3){m=g+1
j=m+1
if(3-h===1){s=i>>>2&63
if(!(s<r))return A.a(a,s)
q&2&&A.b(f)
q=f.length
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(s)
s=i<<4&63
if(!(s<r))return A.a(a,s)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(s)
g=j+1
if(!(j<q))return A.a(f,j)
f[j]=61
if(!(g<q))return A.a(f,g)
f[g]=61}else{s=i>>>10&63
if(!(s<r))return A.a(a,s)
q&2&&A.b(f)
q=f.length
if(!(g<q))return A.a(f,g)
f[g]=a.charCodeAt(s)
s=i>>>4&63
if(!(s<r))return A.a(a,s)
if(!(m<q))return A.a(f,m)
f[m]=a.charCodeAt(s)
g=j+1
s=i<<2&63
if(!(s<r))return A.a(a,s)
if(!(j<q))return A.a(f,j)
f[j]=a.charCodeAt(s)
if(!(g<q))return A.a(f,g)
f[g]=61}return 0}return(i<<2|3-h)>>>0}for(p=c;p<d;){if(!(p<s))return A.a(b,p)
n=b[p]
if(n>255)break;++p}if(!(p<s))return A.a(b,p)
throw A.f(A.kt(b,"Not a byte value at index "+p+": 0x"+B.a.cv(b[p],16),null))},
pI(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.a.j(a1,2),f=a1&3,e=$.nu()
for(s=a.length,r=e.length,q=d.$flags|0,p=b,o=0;p<c;++p){if(!(p<s))return A.a(a,p)
n=a.charCodeAt(p)
o|=n
m=n&127
if(!(m<r))return A.a(e,m)
l=e[m]
if(l>=0){g=(g<<6|l)&16777215
f=f+1&3
if(f===0){k=a0+1
q&2&&A.b(d)
m=d.length
if(!(a0<m))return A.a(d,a0)
d[a0]=g>>>16&255
a0=k+1
if(!(k<m))return A.a(d,k)
d[k]=g>>>8&255
k=a0+1
if(!(a0<m))return A.a(d,a0)
d[a0]=g&255
a0=k
g=0}continue}else if(l===-1&&f>1){if(o>127)break
if(f===3){if((g&3)!==0)throw A.f(A.b7(i,a,p))
k=a0+1
q&2&&A.b(d)
s=d.length
if(!(a0<s))return A.a(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.a(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.f(A.b7(i,a,p))
q&2&&A.b(d)
if(!(a0<d.length))return A.a(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.my(a,p+1,c,-j-1)}throw A.f(A.b7(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.a(a,p)
if(a.charCodeAt(p)>127)break}throw A.f(A.b7(h,a,p))},
pG(a,b,c,d){var s=A.pH(a,b,c),r=(d&3)+(s-b),q=B.a.j(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.nt()},
pH(a,b,c){var s,r=a.length,q=c,p=q,o=0
for(;;){if(!(p>b&&o<2))break
A:{--p
if(!(p>=0&&p<r))return A.a(a,p)
s=a.charCodeAt(p)
if(s===61){++o
q=p
break A}if((s|32)===100){if(p===b)break;--p
if(!(p>=0&&p<r))return A.a(a,p)
s=a.charCodeAt(p)}if(s===51){if(p===b)break;--p
if(!(p>=0&&p<r))return A.a(a,p)
s=a.charCodeAt(p)}if(s===37){++o
q=p
break A}break}}return q},
my(a,b,c,d){var s,r,q
if(b===c)return d
s=-d-1
for(r=a.length;s>0;){if(!(b<r))return A.a(a,b)
q=a.charCodeAt(b)
if(s===3){if(q===61){s-=3;++b
break}if(q===37){--s;++b
if(b===c)break
if(!(b<r))return A.a(a,b)
q=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(q!==51)break;++b;--s
if(b===c)break
if(!(b<r))return A.a(a,b)
q=a.charCodeAt(b)}if((q|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.f(A.b7("Invalid padding character",a,b))
return-s-1},
m8(a,b,c){return new A.e3(a,b)},
qf(a){return a.ct()},
pL(a,b){return new A.jC(a,[],A.r_())},
pM(a,b,c){var s,r=new A.cq(""),q=A.pL(r,b)
q.d8(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
q4(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
hC:function hC(a,b){this.a=a
this.b=b
this.c=null},
hD:function hD(a){this.a=a},
jN:function jN(){},
jM:function jM(){},
jJ:function jJ(){},
dz:function dz(){},
hX:function hX(){},
jm:function jm(a){this.a=0
this.b=a},
hW:function hW(){},
jl:function jl(){this.a=0},
ay:function ay(){},
fi:function fi(){},
fk:function fk(){},
e3:function e3(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fX:function fX(){},
iu:function iu(a){this.b=a},
it:function it(a){this.a=a},
jD:function jD(){},
jE:function jE(a,b){this.a=a
this.b=b},
jC:function jC(a,b,c){this.c=a
this.a=b
this.b=c},
fZ:function fZ(){},
iv:function iv(a){this.a=a},
hs:function hs(){},
ht:function ht(a){this.a=a},
hH:function hH(a){this.a=a
this.b=16
this.c=0},
ri(a){var s=A.oE(a,null)
if(s!=null)return s
throw A.f(A.b7(a,null,null))},
nU(a,b){a=A.a2(a,new Error())
if(a==null)a=A.hJ(a)
a.stack=b.A(0)
throw a},
X(a,b,c,d){var s,r=c?J.fP(a,d):J.m3(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
kI(a,b,c){var s,r,q=A.j([],c.p("u<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.ab)(a),++r)B.c.M(q,c.a(a[r]))
if(b)return q
q.$flags=1
return q},
t(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.p("u<0>"))
s=A.j([],b.p("u<0>"))
for(r=J.hU(a);r.F();)B.c.M(s,r.gP())
return s},
mb(a,b,c){var s,r=J.fP(a,c)
for(s=0;s<a;++s)B.c.i(r,s,b.$1(s))
return r},
mc(a,b){var s=A.kI(a,!1,b)
s.$flags=3
return s},
dj(a,b,c){var s,r,q,p,o
A.cp(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.f(A.aj(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.ml(b>0||c<o?p.slice(b,c):p)}if(t.bm.b(a))return A.oO(a,b,c)
if(r)a=J.nH(a,c)
if(b>0)a=J.kr(a,b)
s=A.t(a,t.p)
return A.ml(s)},
oO(a,b,c){var s=a.length
if(b>=s)return""
return A.oG(a,b,c==null||c>s?s:c)},
mp(a,b,c){var s=J.hU(b)
if(!s.F())return a
if(c.length===0){do a+=A.A(s.gP())
while(s.F())}else{a+=A.A(s.gP())
while(s.F())a=a+c+A.A(s.gP())}return a},
oM(){return A.f5(new Error())},
nT(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lI(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fj(a){if(a>=10)return""+a
return"0"+a},
fl(a){if(typeof a=="number"||A.lh(a)||a==null)return J.f6(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mk(a)},
nV(a,b){A.hL(a,"error",t.K)
A.hL(b,"stackTrace",t.k)
A.nU(a,b)},
f9(a){return new A.f8(a)},
bg(a,b){return new A.aQ(!1,null,b,a)},
kt(a,b,c){return new A.aQ(!0,a,b,c)},
oJ(a){var s=null
return new A.bo(s,s,!1,s,s,a)},
mn(a,b){return new A.bo(null,null,!0,a,b,"Value not in range")},
aj(a,b,c,d,e){return new A.bo(b,c,!0,a,d,"Invalid value")},
b9(a,b,c){if(0>a||a>c)throw A.f(A.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.aj(b,a,c,"end",null))
return b}return c},
cp(a,b){if(a<0)throw A.f(A.aj(a,0,null,b,null))
return a},
kB(a,b,c,d){return new A.fz(b,!0,a,d,"Index out of range")},
ba(a){return new A.eB(a)},
mt(a){return new A.hq(a)},
l3(a){return new A.di(a)},
aT(a){return new A.fg(a)},
b7(a,b,c){return new A.ap(a,b,c)},
oe(a,b,c){var s,r
if(A.ln(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
B.c.M($.aG,a)
try{A.qD(a,s)}finally{if(0>=$.aG.length)return A.a($.aG,-1)
$.aG.pop()}r=A.mp(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
m2(a,b,c){var s,r
if(A.ln(a))return b+"..."+c
s=new A.cq(b)
B.c.M($.aG,a)
try{r=s
r.a=A.mp(r.a,a,", ")}finally{if(0>=$.aG.length)return A.a($.aG,-1)
$.aG.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
qD(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.F())return
s=A.A(l.gP())
B.c.M(b,s)
k+=s.length+2;++j}if(!l.F()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gP();++j
if(!l.F()){if(j<=4){B.c.M(b,A.A(p))
return}r=A.A(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gP();++j
for(;l.F();p=o,o=n){n=l.gP();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.c.M(b,"...")
return}}q=A.A(p)
r=A.A(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.M(b,m)
B.c.M(b,q)
B.c.M(b,r)},
me(a,b,c,d,e){return new A.bV(a,b.p("@<0>").aG(c).aG(d).aG(e).p("bV<1,2,3,4>"))},
kK(a,b,c,d){var s
if(B.K===c){s=B.a.gG(a)
b=J.be(b)
return A.iU(A.br(A.br($.hT(),s),b))}if(B.K===d){s=B.a.gG(a)
b=J.be(b)
c=J.be(c)
return A.iU(A.br(A.br(A.br($.hT(),s),b),c))}s=B.a.gG(a)
b=J.be(b)
c=J.be(c)
d=J.be(d)
d=A.iU(A.br(A.br(A.br(A.br($.hT(),s),b),c),d))
return d},
m(a){var s,r,q=$.hT()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.ab)(a),++r)q=A.br(q,J.be(a[r]))
return A.iU(q)},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(){},
P:function P(){},
f8:function f8(a){this.a=a},
bs:function bs(){},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fz:function fz(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eB:function eB(a){this.a=a},
hq:function hq(a){this.a=a},
di:function di(a){this.a=a},
fg:function fg(a){this.a=a},
h2:function h2(){},
ex:function ex(){},
jq:function jq(a){this.a=a},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
ar:function ar(){},
D:function D(){},
hF:function hF(){},
cq:function cq(a){this.a=a},
iB:function iB(a){this.a=a},
qc(a,b,c){t.Z.a(a)
if(A.v(c)>=1)return a.$1(b)
return a.$0()},
ro(a,b){var s=new A.aO($.a6,b.p("aO<0>")),r=new A.eK(s,b.p("eK<0>"))
a.then(A.dx(new A.kc(r,b),1),A.dx(new A.kd(r),1))
return s},
mX(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
n6(a){if(A.mX(a))return a
return new A.jW(new A.eQ(t.hg)).$1(a)},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(a){this.a=a},
jW:function jW(a){this.a=a},
kz(a,b){var s=new A.ia()
s.fR(a,b)
return s},
ia:function ia(){this.a=$
this.b=0
this.c=2147483647},
jg:function jg(){},
jP:function jP(){},
jQ:function jQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ij:function ij(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=!1
_.w=_.r=0},
jf:function jf(){},
lA(a){return new A.cC(a,null,null)},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(){},
hV:function hV(){},
dA:function dA(a,b){this.a=a
this.b=b},
rd(a,b,c,d){var s,r,q,p=!1,o=new A.jo($.le)
$.le=o
try{if(d.$0())return!0
if(p){r=A.lA("Invalid "+a+" data")
throw A.f(r)}return!1}catch(q){s=A.bA(q)
r=s
if(!(r instanceof A.cC||r instanceof A.f7||r instanceof A.ap||t.b8.b(r)||t.eK.b(r)))throw q
r=s instanceof A.hV
if(r)throw q
if(s instanceof A.f7)return!1
if(s instanceof A.cC){if(p)throw q
return!1}if(p){r=A.lA("Invalid "+a+" data: "+A.A(s))
throw A.f(r)}return!1}finally{$.le=o.a}},
jo:function jo(a){this.a=a},
kC(a,b,c,d){var s,r,q,p,o=new A.fA(b)
if(d==null)d=0
A.cp(d,"offset")
if(d<0)d=0
else{s=a.length
if(d>s)d=s}r=a.length-d
if(c==null)c=r
if(c<0||c>r)c=r
q=t.D.b(a)?a:new Uint8Array(A.z(a))
p=J.Z(B.f.gB(q),q.byteOffset+d,c)
o.b=p
o.d=p.length
return o},
fA:function fA(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
fB:function fB(){},
kL(a){var s=a==null?32768:a
return new A.d9(new Uint8Array(s),B.ao)},
d9:function d9(a,b){this.b=0
this.c=a
this.a=b},
h3:function h3(){},
i0:function i0(a,b){this.a=a
this.b=b},
N:function N(a){this.a=-1
this.b=a},
cE:function cE(a){this.a=a},
cF:function cF(a){this.a=a},
cG:function cG(a){this.a=a},
cH:function cH(a){this.a=a},
cI:function cI(a){this.a=a},
cJ:function cJ(a){this.a=a},
cL:function cL(a,b){this.a=a
this.b=b},
cM:function cM(a){this.a=a},
cN:function cN(a,b){this.a=a
this.b=b},
cO:function cO(a){this.a=a},
cP:function cP(a,b){this.a=a
this.b=b},
nS(a,b,c,d){var s=new A.cK(new Uint8Array(4))
s.fN(a,b,c,d)
return s},
bC:function bC(a){this.a=a},
fe:function fe(a){this.a=a},
cK:function cK(a){this.a=a},
dC:function dC(a){this.a=a},
fh:function fh(a){this.a=a},
hM(a,b,c){var s
if(b===c)return a
switch(b.a){case 0:if(a===0)s=0
else{s=B.bS.m(0,c)
s.toString}return s
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),6)
case 2:return B.a.j(A.v(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.j(A.v(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),14)
case 2:return B.a.j(A.v(a),12)
case 3:return B.a.j(A.v(a),8)
case 4:return a
case 5:return A.v(a)<<8>>>0
case 6:return B.a.j(A.v(a),9)
case 7:return B.a.j(A.v(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.v(a),30)
case 2:return B.a.j(A.v(a),28)
case 3:return B.a.j(A.v(a),24)
case 4:return B.a.j(A.v(a),16)
case 5:return a
case 6:return B.a.j(A.v(a),25)
case 7:return B.a.j(A.v(a),17)
case 8:return B.a.j(A.v(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.v(a),5)
case 2:return a<=0?0:B.a.j(A.v(a),3)
case 3:return a<=0?0:A.v(a)<<1>>>0
case 4:return a<=0?0:A.v(a)*516
case 5:return a<=0?0:A.v(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.v(a),15)
case 2:return a<=0?0:B.a.j(A.v(a),11)
case 3:return a<=0?0:B.a.j(A.v(a),7)
case 4:return a<=0?0:A.v(a)<<1>>>0
case 5:return a<=0?0:A.v(a)*131076
case 6:return B.a.j(A.v(a),8)
case 7:return a
case 8:return A.v(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.v(a),29)
case 2:return a<=0?0:B.a.j(A.v(a),27)
case 3:return a<=0?0:B.a.j(A.v(a),23)
case 4:return a<=0?0:B.a.j(A.v(a),16)
case 5:return a<=0?0:A.v(a)<<1>>>0
case 6:return B.a.j(A.v(a),24)
case 7:return B.a.j(A.v(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.h(B.b.K(a,0,1)*3)
case 2:return B.b.h(B.b.K(a,0,1)*15)
case 3:return B.b.h(B.b.K(a,0,1)*255)
case 4:return B.b.h(B.b.K(a,0,1)*65535)
case 5:return B.b.h(B.b.K(a,0,1)*4294967295)
case 6:return B.b.h(a<0?B.b.K(a,-1,1)*128:B.b.K(a,-1,1)*127)
case 7:return B.b.h(a<0?B.b.K(a,-1,1)*32768:B.b.K(a,-1,1)*32767)
case 8:return B.b.h(a<0?B.b.K(a,-1,1)*2147483648:B.b.K(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
ao:function ao(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
dG(a){var s,r=new A.bX(A.J(t.N,t.P))
r.fS(a)
s=a.b
if(s!=null)r.b=new Uint8Array(A.z(s))
return r},
i4(a){var s=new A.bX(A.J(t.N,t.P))
s.c_(a)
return s},
bX:function bX(a){this.b=null
this.a=a},
hA:function hA(a,b){this.a=a
this.b=b},
i(a,b,c){return new A.fm(a,b)},
fm:function fm(a,b){this.a=a
this.b=b},
aJ:function aJ(a){this.a=a},
ic:function ic(a){this.a=a},
lP(a){var s=new A.aC(A.J(t.p,t.r),new A.aJ(A.J(t.N,t.P)))
s.je(a)
return s},
aC:function aC(a,b){this.a=a
this.b=b},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
lW(a,b){var s=new A.c6(new Uint16Array(b))
s.fX(a,b)
return s},
kA(a){var s=new Uint32Array(1)
s[0]=a
return new A.aV(s)},
lR(a,b){var s=new A.aV(new Uint32Array(b))
s.fU(a,b)
return s},
lS(a,b){var s,r=J.c7(b,t.i)
for(s=0;s<b;++s)r[s]=new A.dg(a.k(),a.k())
return new A.c2(r)},
lV(a,b){var s=new A.c5(new Int16Array(b))
s.fW(a,b)
return s},
lT(a,b){var s=new A.c3(new Int32Array(b))
s.fV(a,b)
return s},
lU(a,b){var s,r,q,p,o=J.c7(b,t.i)
for(s=0;s<b;++s){r=a.k()
q=$.M()
q.$flags&2&&A.b(q)
q[0]=r
r=$.a3()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.k()
o[s]=new A.dg(p,r[0])}return new A.c4(o)},
lX(a,b){var s=new A.cW(new Float32Array(b))
s.fY(a,b)
return s},
lQ(a,b){var s=new A.cU(new Float64Array(b))
s.fT(a,b)
return s},
ad:function ad(a,b){this.a=a
this.b=b},
a0:function a0(){},
bj:function bj(a){this.a=a},
c1:function c1(a){this.a=a},
c6:function c6(a){this.a=a},
aV:function aV(a){this.a=a},
c2:function c2(a){this.a=a},
bE:function bE(a){this.a=a},
c5:function c5(a){this.a=a},
c3:function c3(a){this.a=a},
c4:function c4(a){this.a=a},
cW:function cW(a){this.a=a},
cU:function cU(a){this.a=a},
cX:function cX(a){this.a=a},
cV:function cV(a){this.a=a},
lB(a){var s,r,q=new A.hZ()
if(!A.lC(a))A.a8(A.n("Not a bitmap file."))
a.d+=2
s=a.k()
r=$.M()
r.$flags&2&&A.b(r)
r[0]=s
s=$.a3()
if(0>=s.length)return A.a(s,0)
a.d+=4
r[0]=a.k()
q.b=s[0]
return q},
lC(a){if(a.c-a.d<2)return!1
return A.o(a,null,0).l()===19778},
nI(a,b){var s,r,q,p,o=b==null?A.lB(a):b,n=a.d,m=a.k(),l=a.k(),k=$.M()
k.$flags&2&&A.b(k)
k[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
s=l[0]
k[0]=a.k()
l=l[0]
r=a.l()
q=a.l()
p=a.k()
if(p>=14)A.a8(A.n("Unsupported BMP compression type: "+p))
if(!(p<14))return A.a(B.af,p)
p=B.af[p]
a.k()
k[0]=a.k()
k[0]=a.k()
k=a.k()
a.k()
n=new A.bh(o,s,l,m,r,q,p,k,n)
n.dV(a,b)
return n},
ac:function ac(a,b){this.a=a
this.b=b},
hZ:function hZ(){this.b=$},
bh:function bh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
fb:function fb(a){this.a=$
this.b=null
this.c=a},
hY:function hY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i2:function i2(a){this.a=$
this.b=null
this.c=a},
I:function I(){},
i1:function i1(){},
i3:function i3(){},
fn:function fn(){},
dX:function dX(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
cQ:function cQ(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
fo:function fo(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
lJ(a,b,c,d){var s,r
switch(a.a){case 1:return new A.fH(c,b)
case 2:return new A.dY(c,d==null?1:d,b)
case 3:return new A.dY(c,d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.fF(c,s,b)
r.h0(b,c,s)
return r
case 5:return new A.fG(c,d==null?16:d,b)
case 6:return new A.dX(c,d==null?32:d,!1,b)
case 7:return new A.dX(c,d==null?32:d,!0,b)
default:throw A.f(A.n("Invalid compression type: "+a.A(0)))}},
aU:function aU(a,b){this.a=a
this.b=b},
bi:function bi(){},
fD:function fD(){},
nZ(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.f(A.n("Incomplete huffman data"))
return}s=a.d
r=a.k()
q=a.k()
a.d+=4
p=a.k()
o=!0
if(r<65537)o=q>=65537
if(o)throw A.f(A.n("Invalid huffman table size"))
a.d+=4
n=A.X(65537,0,!1,t.p)
m=J.ai(16384,t.gV)
for(l=0;l<16384;++l)m[l]=new A.fp()
A.o_(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.f(A.n("Error in header for Huffman-encoded data (invalid number of bits)."))
A.nW(n,r,q,m)
A.nY(n,m,a,p,q,d,c)},
nY(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.j([0,0],t.t),h=c.d+B.a.Y(d+7,8)
for(s=b.length,r=0;c.d<h;){A.kv(i,c)
while(q=i[1],q>=14){p=B.a.bp(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.i(i,1,q-p)
r=A.kw(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.f(A.n(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
for(;;){q=i[1]
if(!(q<m&&c.d<h))break
A.kv(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.bp(i[0],q)&B.a.O(1,m)-1)>>>0){B.c.i(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.kw(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.f(A.n(j))}}}k=8-d&7
B.c.i(i,0,B.a.j(i[0],k))
B.c.i(i,1,i[1]-k)
while(q=i[1],q>0){p=B.a.X(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.i(i,1,q-p)
r=A.kw(o.b,e,i,c,g,r,f)}else throw A.f(A.n(j))}if(r!==f)throw A.f(A.n("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
kw(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.kv(c,d)
B.c.i(c,1,c[1]-8)
s=B.a.bp(c[0],c[1])&255
if(f+s>g)throw A.f(A.n(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(r=e.$flags|0;o=s-1,s>0;s=o,f=n){n=f+1
r&2&&A.b(e)
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){e.toString
n=f+1
e.$flags&2&&A.b(e)
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.f(A.n(m))
f=n}return f},
nW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.a0(o,n)!==0)throw A.f(A.n(i))
if(n>14){p=B.a.a1(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.f(A.n(i))
p=++m.b
l=m.c
if(l!=null){m.sfj(A.X(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.c.i(p,k,l[k])}}else m.sfj(A.j([0],r))
p=m.c
p.toString
B.c.i(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.X(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.X(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.f(A.n(i))
m.a=n
m.b=b}}}},
o_(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.j([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.f(A.n(n))
r=A.lK(6,k,a)
B.c.i(e,c,r)
if(r===63){if(a.d-l>b)throw A.f(A.n(n))
q=A.lK(8,k,a)+6
if(c+q>s)throw A.f(A.n(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.i(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.f(A.n(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.i(e,c,0)}--c}}A.nX(e)},
nX(a){var s,r,q,p,o,n=A.X(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.c.i(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.c.i(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.c.i(n,o,r+1)
B.c.i(a,s,(o|r<<6)>>>0)}}},
kv(a,b){B.c.i(a,0,((a[0]<<8|b.E())&-1)>>>0)
B.c.i(a,1,(a[1]+8&-1)>>>0)},
lK(a,b,c){var s
while(s=b[1],s<a){B.c.i(b,0,((b[0]<<8|J.c(c.a,c.d++))&-1)>>>0)
B.c.i(b,1,(b[1]+8&-1)>>>0)}B.c.i(b,1,s-a)
return(B.a.bp(b[0],b[1])&B.a.O(1,a)-1)>>>0},
fp:function fp(){this.b=this.a=0
this.c=null},
o0(a){var s=new A.dH(A.j([],t.q))
s.dW(a)
return s},
o1(a){var s=A.q(a,!1,null,0)
if(s.k()!==20000630)return!1
if(s.E()!==2)return!1
if((s.bd()&4294967289)>>>0!==0)return!1
return!0},
dH:function dH(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
lZ(a,b,c){var s=new A.fE(a,A.j([],t.g9),A.J(t.N,t.aX),B.aT,b)
s.fP(a,b,c)
return s},
dI:function dI(){},
i6:function i6(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.d=0
_.e=c
_.r=$
_.x=_.w=0
_.at=$
_.ax=d
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=e
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
fF:function fF(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
eV:function eV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
fG:function fG(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
fH:function fH(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
dY:function dY(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
i5:function i5(){this.a=null},
lM(a){var s=new Uint8Array(a*3)
return new A.dL(A.o8(a),a,null,new A.aY(s,a,3))},
o7(a){return new A.dL(a.a,a.b,a.c,A.mg(a.d))},
o8(a){var s
for(s=1;s<=8;++s)if(B.a.O(1,s)>=a)return s
return 0},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dM:function dM(){},
fI:function fI(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
dN:function dN(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
i9:function i9(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
lO(a){var s,r,q,p
if(a.l()!==0)return null
s=a.l()
if(s>=3)return null
if(B.d5[s]===B.aV)return null
r=a.l()
q=J.c7(r,t.gx)
for(p=0;p<r;++p){J.c(a.a,a.d++)
J.c(a.a,a.d++)
J.c(a.a,a.d++);++a.d
a.l()
a.l()
q[p]=new A.fx(a.k(),a.k())}return new A.fw(r,q)},
cT:function cT(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.d=a
this.e=b},
fx:function fx(a,b){this.d=a
this.e=b},
fv:function fv(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
ib:function ib(){this.b=this.a=null},
ff:function ff(a,b,c){this.e=a
this.f=b
this.r=c},
bD:function bD(){},
c0:function c0(a){this.a=a},
dR:function dR(a){this.a=a},
rp(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
if($.lf==null){s=new Uint8Array(768)
for(r=0;r<256;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=r}for(r=256;r<512;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=255}$.lf=s}for(q=b6.$flags|0,r=0;r<64;++r){p=b4[r]
o=b3[r]
q&2&&A.b(b6)
if(!(r<64))return A.a(b6,r)
b6[r]=p*o}for(n=0,r=0;r<8;++r,n+=8){p=1+n
if(!(p<64))return A.a(b6,p)
o=b6[p]
m=!1
if(o===0){l=2+n
if(!(l<64))return A.a(b6,l)
if(b6[l]===0){l=3+n
if(!(l<64))return A.a(b6,l)
if(b6[l]===0){l=4+n
if(!(l<64))return A.a(b6,l)
if(b6[l]===0){l=5+n
if(!(l<64))return A.a(b6,l)
if(b6[l]===0){l=6+n
if(!(l<64))return A.a(b6,l)
if(b6[l]===0){m=7+n
if(!(m<64))return A.a(b6,m)
m=b6[m]===0}}}}}}if(m){if(!(n<64))return A.a(b6,n)
p=B.a.j(5793*b6[n]+512,10)
k=(p&2147483647)-((p&2147483648)>>>0)
q&2&&A.b(b6)
if(!(n<64))return A.a(b6,n)
b6[n]=k
p=n+1
if(!(p<64))return A.a(b6,p)
b6[p]=k
p=n+2
if(!(p<64))return A.a(b6,p)
b6[p]=k
p=n+3
if(!(p<64))return A.a(b6,p)
b6[p]=k
p=n+4
if(!(p<64))return A.a(b6,p)
b6[p]=k
p=n+5
if(!(p<64))return A.a(b6,p)
b6[p]=k
p=n+6
if(!(p<64))return A.a(b6,p)
b6[p]=k
p=n+7
if(!(p<64))return A.a(b6,p)
b6[p]=k
continue}if(!(n<64))return A.a(b6,n)
m=B.a.j(5793*b6[n]+128,8)
j=(m&2147483647)-((m&2147483648)>>>0)
m=4+n
if(!(m<64))return A.a(b6,m)
l=B.a.j(5793*b6[m]+128,8)
i=(l&2147483647)-((l&2147483648)>>>0)
l=2+n
if(!(l<64))return A.a(b6,l)
h=b6[l]
g=6+n
if(!(g<64))return A.a(b6,g)
f=b6[g]
e=7+n
if(!(e<64))return A.a(b6,e)
d=b6[e]
c=B.a.j(2896*(o-d)+128,8)
b=(c&2147483647)-((c&2147483648)>>>0)
d=B.a.j(2896*(o+d)+128,8)
a=(d&2147483647)-((d&2147483648)>>>0)
d=3+n
if(!(d<64))return A.a(b6,d)
o=b6[d]<<4
a0=(o&2147483647)-((o&2147483648)>>>0)
o=5+n
if(!(o<64))return A.a(b6,o)
c=b6[o]<<4
a1=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(j-i+1,1)
k=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(j+i+1,1)
j=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(h*3784+f*1567+128,8)
c=(c&2147483647)-((c&2147483648)>>>0)
a2=B.a.j(h*1567-f*3784+128,8)
h=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(b-a1+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a3=B.a.j(b+a1+1,1)
b=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(a+a0+1,1)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
a4=B.a.j(a-a0+1,1)
a0=(a4&2147483647)-((a4&2147483648)>>>0)
a4=B.a.j(j-c+1,1)
a4=(a4&2147483647)-((a4&2147483648)>>>0)
c=B.a.j(j+c+1,1)
j=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(k-h+1,1)
c=(c&2147483647)-((c&2147483648)>>>0)
a5=B.a.j(k+h+1,1)
i=(a5&2147483647)-((a5&2147483648)>>>0)
a5=B.a.j(b*2276+a3*3406+2048,12)
k=(a5&2147483647)-((a5&2147483648)>>>0)
a3=B.a.j(b*3406-a3*2276+2048,12)
b=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(a0*799+a2*4017+2048,12)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
a2=B.a.j(a0*4017-a2*799+2048,12)
a0=(a2&2147483647)-((a2&2147483648)>>>0)
q&2&&A.b(b6)
if(!(n<64))return A.a(b6,n)
b6[n]=j+k
if(!(e<64))return A.a(b6,e)
b6[e]=j-k
if(!(p<64))return A.a(b6,p)
b6[p]=i+a3
if(!(g<64))return A.a(b6,g)
b6[g]=i-a3
if(!(l<64))return A.a(b6,l)
b6[l]=c+a0
if(!(o<64))return A.a(b6,o)
b6[o]=c-a0
if(!(d<64))return A.a(b6,d)
b6[d]=a4+b
if(!(m<64))return A.a(b6,m)
b6[m]=a4-b}for(r=0;r<8;++r){a6=8+r
a7=16+r
a8=24+r
a9=32+r
b0=40+r
b1=48+r
b2=56+r
p=b6[a6]
if(p===0&&b6[a7]===0&&b6[a8]===0&&b6[a9]===0&&b6[b0]===0&&b6[b1]===0&&b6[b2]===0){p=B.a.j(5793*b6[r]+8192,14)
k=(p&2147483647)-((p&2147483648)>>>0)
q&2&&A.b(b6)
if(!(r<64))return A.a(b6,r)
b6[r]=k
if(!(a6<64))return A.a(b6,a6)
b6[a6]=k
if(!(a7<64))return A.a(b6,a7)
b6[a7]=k
if(!(a8<64))return A.a(b6,a8)
b6[a8]=k
if(!(a9<64))return A.a(b6,a9)
b6[a9]=k
if(!(b0<64))return A.a(b6,b0)
b6[b0]=k
if(!(b1<64))return A.a(b6,b1)
b6[b1]=k
if(!(b2<64))return A.a(b6,b2)
b6[b2]=k
continue}o=B.a.j(5793*b6[r]+2048,12)
j=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(5793*b6[a9]+2048,12)
i=(o&2147483647)-((o&2147483648)>>>0)
h=b6[a7]
f=b6[b1]
o=b6[b2]
m=B.a.j(2896*(p-o)+2048,12)
b=(m&2147483647)-((m&2147483648)>>>0)
o=B.a.j(2896*(p+o)+2048,12)
a=(o&2147483647)-((o&2147483648)>>>0)
a0=b6[a8]
a1=b6[b0]
o=B.a.j(j-i+1,1)
k=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(j+i+1,1)
j=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(h*3784+f*1567+2048,12)
p=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(h*1567-f*3784+2048,12)
h=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(b-a1+1,1)
o=(o&2147483647)-((o&2147483648)>>>0)
m=B.a.j(b+a1+1,1)
b=(m&2147483647)-((m&2147483648)>>>0)
m=B.a.j(a+a0+1,1)
m=(m&2147483647)-((m&2147483648)>>>0)
l=B.a.j(a-a0+1,1)
a0=(l&2147483647)-((l&2147483648)>>>0)
l=B.a.j(j-p+1,1)
l=(l&2147483647)-((l&2147483648)>>>0)
p=B.a.j(j+p+1,1)
j=(p&2147483647)-((p&2147483648)>>>0)
p=B.a.j(k-h+1,1)
p=(p&2147483647)-((p&2147483648)>>>0)
g=B.a.j(k+h+1,1)
i=(g&2147483647)-((g&2147483648)>>>0)
g=B.a.j(b*2276+m*3406+2048,12)
k=(g&2147483647)-((g&2147483648)>>>0)
m=B.a.j(b*3406-m*2276+2048,12)
b=(m&2147483647)-((m&2147483648)>>>0)
m=B.a.j(a0*799+o*4017+2048,12)
m=(m&2147483647)-((m&2147483648)>>>0)
o=B.a.j(a0*4017-o*799+2048,12)
a0=(o&2147483647)-((o&2147483648)>>>0)
q&2&&A.b(b6)
if(!(r<64))return A.a(b6,r)
b6[r]=j+k
if(!(b2<64))return A.a(b6,b2)
b6[b2]=j-k
b6[a6]=i+m
b6[b1]=i-m
b6[a7]=p+a0
b6[b0]=p-a0
b6[a8]=l+b
b6[a9]=l-b}for(q=$.lf,p=b5.$flags|0,r=0;r<64;++r){q.toString
o=B.a.j(b6[r]+8,4)
o=384+((o&2147483647)-((o&2147483648)>>>0))
if(!(o>=0&&o<768))return A.a(q,o)
o=q[o]
p&2&&A.b(b5)
if(!(r<64))return A.a(b5,r)
b5[r]=o}},
r9(e5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="ifd0",e4=e5.w
if(e4.m(0,e3).a.af(274)){s=e4.m(0,e3).gbZ()
s.toString
r=s}else r=0
s=e5.d
q=s.e
q.toString
s=s.d
s.toString
p=r>=5&&r<=8
if(p)o=s
else o=q
if(p)n=q
else n=s
m=A.O(e2,e2,B.e,0,B.i,n,e2,0,3,e2,B.e,o,!1)
m.e=A.dG(e4)
m.gbD().m(0,e3).sbZ(e2)
m.c=e5.r
l=s-1
k=q-1
switch(r){case 2:j=new A.jZ(m,k)
break
case 3:j=new A.k_(m,k,l)
break
case 4:j=new A.k0(m,l)
break
case 5:j=new A.k1(m)
break
case 6:j=new A.k2(m,l)
break
case 7:j=new A.k3(m,l,k)
break
case 8:j=new A.k4(m,k)
break
default:j=m.gfE()
break}e4=e5.as
i=e4.length
switch(i){case 1:if(0>=i)return A.a(e4,0)
h=e4[0]
g=h.e
f=h.f
e=h.r
for(e4=g.length,d=0;d<s;++d){c=B.a.a0(d,e)
if(!(c<e4))return A.a(g,c)
b=g[c]
for(a=0;a<q;++a){a0=B.a.a0(a,f)
if(!(a0<b.length))return A.a(b,a0)
a1=b[a0]
j.$5(a,d,a1,a1,a1)}}break
case 3:a2=e5.c
a3=a2==null||a2.d===1
if(0>=i)return A.a(e4,0)
h=e4[0]
if(1>=i)return A.a(e4,1)
a4=e4[1]
if(2>=i)return A.a(e4,2)
a5=e4[2]
a6=h.e
a7=a4.e
a8=a5.e
f=h.f
e=h.r
a9=a4.f
b0=a4.r
b1=a5.f
b2=a5.r
for(e4=a6.length,i=a7.length,a2=a8.length,d=0;d<s;++d){c=B.a.a0(d,e)
b3=B.a.a0(d,b0)
b4=B.a.a0(d,b2)
if(!(c<e4))return A.a(a6,c)
b=a6[c]
if(!(b3<i))return A.a(a7,b3)
b5=a7[b3]
if(!(b4<a2))return A.a(a8,b4)
b6=a8[b4]
for(a=0;a<q;++a){a0=B.a.a0(a,f)
b7=B.a.a0(a,a9)
b8=B.a.a0(a,b1)
if(!(a0<b.length))return A.a(b,a0)
b9=b[a0]
if(!(b7<b5.length))return A.a(b5,b7)
c0=b5[b7]
if(!(b8<b6.length))return A.a(b6,b8)
c1=b6[b8]
if(a3){a1=b9<<8>>>0
c2=c0-128
c3=c1-128
c4=B.a.j(a1+359*c3,8)
b9=B.a.K((c4&2147483647)-((c4&2147483648)>>>0),0,255)
c4=B.a.j(a1-88*c2-183*c3,8)
c0=B.a.K((c4&2147483647)-((c4&2147483648)>>>0),0,255)
c4=B.a.j(a1+454*c2,8)
c1=B.a.K((c4&2147483647)-((c4&2147483648)>>>0),0,255)}j.$5(a,d,b9,c0,c1)}}break
case 4:a2=e5.c
if(a2==null)throw A.f(A.n("Unsupported color mode (4 components)"))
a2=a2.d===0
if(0>=i)return A.a(e4,0)
h=e4[0]
if(1>=i)return A.a(e4,1)
a4=e4[1]
if(2>=i)return A.a(e4,2)
a5=e4[2]
if(3>=i)return A.a(e4,3)
c5=e4[3]
a6=h.e
a7=a4.e
a8=a5.e
c6=c5.e
f=h.f
e=h.r
a9=a4.f
b0=a4.r
b1=a5.f
b2=a5.r
c7=c5.f
c8=c5.r
for(e4=a6.length,i=a7.length,c4=a8.length,c9=c6.length,d=0;d<s;++d){c=B.a.a0(d,e)
b3=B.a.a0(d,b0)
b4=B.a.a0(d,b2)
d0=B.a.a0(d,c8)
if(!(c<e4))return A.a(a6,c)
b=a6[c]
if(!(b3<i))return A.a(a7,b3)
b5=a7[b3]
if(!(b4<c4))return A.a(a8,b4)
b6=a8[b4]
if(!(d0<c9))return A.a(c6,d0)
d1=c6[d0]
for(a=0;a<q;++a){a0=B.a.a0(a,f)
b7=B.a.a0(a,a9)
b8=B.a.a0(a,b1)
d2=B.a.a0(a,c7)
if(a2){if(!(a0<b.length))return A.a(b,a0)
d3=b[a0]
if(!(b7<b5.length))return A.a(b5,b7)
d4=b5[b7]
if(!(b8<b6.length))return A.a(b6,b8)
a1=b6[b8]
if(!(d2<d1.length))return A.a(d1,d2)
d5=d1[d2]}else{if(!(a0<b.length))return A.a(b,a0)
a1=b[a0]
if(!(b7<b5.length))return A.a(b5,b7)
c2=b5[b7]
if(!(b8<b6.length))return A.a(b6,b8)
c3=b6[b8]
if(!(d2<d1.length))return A.a(d1,d2)
d5=d1[d2]
d6=c3-128
d7=c2-128
d8=a1<<8>>>0
d9=B.a.j(d8+359*d6,8)
d3=255-B.a.K((d9&2147483647)-((d9&2147483648)>>>0),0,255)
d9=B.a.j(d8-88*d7-183*d6,8)
d4=255-B.a.K((d9&2147483647)-((d9&2147483648)>>>0),0,255)
d9=B.a.j(d8+454*d7,8)
a1=255-B.a.K((d9&2147483647)-((d9&2147483648)>>>0),0,255)}d9=B.a.j(d3*d5,8)
e0=B.a.j(d4*d5,8)
e1=B.a.j(a1*d5,8)
j.$5(a,d,(d9&2147483647)-((d9&2147483648)>>>0),(e0&2147483647)-((e0&2147483648)>>>0),(e1&2147483647)-((e1&2147483648)>>>0))}}break
default:throw A.f(A.n("Unsupported color mode"))}return m},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b){this.a=a
this.b=b},
k1:function k1(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b){this.a=a
this.b=b},
im:function im(){this.d=null},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
kF(){var s=A.X(4,null,!1,t.bC),r=A.j([],t.f8),q=t.eA,p=J.fP(0,q)
q=J.fP(0,q)
return new A.ip(new A.bX(A.J(t.N,t.P)),s,r,p,q,A.j([],t.eB))},
ip:function ip(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.r=_.e=_.d=_.c=null
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f},
ds:function ds(a){this.a=a
this.b=0},
fT:function fT(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
fU:function fU(){this.b=this.a=0},
ir:function ir(){this.r=this.f=$},
fV:function fV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
fS:function fS(){},
m7(a){var s=null,r=new Uint8Array(64),q=new Uint8Array(64),p=new Float32Array(64),o=new Float32Array(64),n=A.X(65535,s,!1,t.T),m=t.I,l=A.X(65535,s,!1,m),k=A.X(64,s,!1,m)
m=A.X(64,s,!1,m)
r=new A.iq(r,q,p,o,n,l,k,m,new Int32Array(2048))
r.e=r.cK(B.bQ,B.a6)
r.f=r.cK(B.br,B.a6)
q=t.d
r.r=q.a(r.cK(B.b6,B.bf))
r.w=q.a(r.cK(B.bk,B.bA))
r.i8()
r.ib()
r.fF(a)
return r},
io:function io(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null
_.w=_.r=$
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=null
_.ax=0
_.ay=7},
da:function da(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
es:function es(){},
fJ:function fJ(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
m_(){var s=t.N
return new A.fK(A.J(s,s),A.j([],t.dm),A.j([],t.t))},
bJ:function bJ(a,b){this.a=a
this.b=b},
h7:function h7(){},
fK:function fK(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.CW=1
_.cy=b
_.db=c},
h6:function h6(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
bK:function bK(a,b){this.a=a
this.b=b},
bL:function bL(a){this.b=this.a=0
this.e=a},
iF:function iF(a){this.b=this.a=null
this.c=a},
iG:function iG(){},
h9:function h9(){this.a=null},
ha:function ha(){this.a=null},
b8:function b8(){},
hd:function hd(){this.a=null},
he:function he(){this.a=null},
hh:function hh(){this.a=null},
hi:function hi(){this.a=null},
eu:function eu(a){this.b=a},
hg:function hg(){},
iH:function iH(){var _=this
_.w=_.r=_.f=_.e=$},
co:function co(a){this.a=a
this.c=null},
kU(a){var s=new A.hb(A.j([],t.U),A.J(t.p,t.fh))
s.h2(a)
return s},
kY(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.b.h(B.b.K((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
iJ(a,b){if(b===0)return 0
return B.a.h(B.a.K(B.b.h(255*(1-(1-a/255)/(b/255))),0,255))},
iL(a,b){return B.a.h(B.a.K(a+b-255,0,255))},
l_(a,b){return B.a.h(B.a.K(255-(255-b)*(255-a),0,255))},
iK(a,b){if(b===255)return 255
return B.b.h(B.b.K(a/255/(1-b/255)*255,0,255))},
l0(a,b){var s=a/255,r=b/255,q=1-r
return B.b.aH(255*(q*r*s+r*(1-q*(1-s))))},
kW(a,b){var s=b/255,r=a/255
if(r<0.5)return B.b.aH(510*s*r)
else return B.b.aH(255*(1-2*(1-s)*(1-r)))},
l1(a,b){if(b<128)return A.iJ(a,2*b)
else return A.iK(a,2*(b-128))},
kX(a,b){var s
if(b<128)return A.iL(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
kZ(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
kV(a,b){return B.b.aH(b+a-2*b*a/255)},
aA(a,b,c){var s,r,q
if(a==null)s=0
else{s=a.length
if(c===1){if(!(b>=0&&b<s))return A.a(a,b)
s=a[b]}else{if(!(b>=0&&b<s))return A.a(a,b)
r=a[b]
q=b+1
if(!(q<s))return A.a(a,q)
q=(r<<8|a[q])>>>8
s=q}}return s},
mm(b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.J(t.p,t.fW)
for(s=c1.length,r=0;q=c1.length,r<q;c1.length===s||(0,A.ab)(c1),++r){p=c1[r]
b6.i(0,p.a,p)}if(b8===8)o=1
else o=b8===16?2:-1
n=A.O(b5,b5,B.e,0,B.i,c0,b5,0,q,b5,B.e,b9,!1)
if(o===-1)throw A.f(A.n("PSD: unsupported bit depth: "+A.A(b8)))
m=b6.m(0,0)
l=b6.m(0,1)
k=b6.m(0,2)
j=b6.m(0,-1)
i=A.j([0,0,0],t.t)
h=-o
for(s=n.a,s=s.gH(s),g=q>=5,f=q===4,e=q>=2,q=q>=4;s.F();){d=s.gP()
h+=o
switch(b7){case B.c1:d.sn(A.aA(m.c,h,o))
d.sq(A.aA(l.c,h,o))
d.st(A.aA(k.c,h,o))
d.sv(q?A.aA(j.c,h,o):255)
if(d.gv()!==0){d.sn((d.gn()+d.gv()-255)*255/d.gv())
d.sq((d.gq()+d.gv()-255)*255/d.gv())
d.st((d.gt()+d.gv()-255)*255/d.gv())}break
case B.c3:c=A.aA(m.c,h,o)
b=A.aA(l.c,h,o)
a=A.aA(k.c,h,o)
a0=q?A.aA(j.c,h,o):255
a1=((c*100>>>8)+16)/116
a2=(b-128)/500+a1
a3=a1-(a-128)/200
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a5=Math.pow(a2,3)
a2=a5>0.008856?a5:(a2-0.13793103448275862)/7.787
a6=Math.pow(a3,3)
a3=a6>0.008856?a6:(a3-0.13793103448275862)/7.787
a2=a2*95.047/100
a1=a1*100/100
a3=a3*108.883/100
a7=a2*3.240454836+a1*-1.53713885+a3*-0.498531547
a8=a2*-0.96926639+a1*1.87601093+a3*0.041556082
a9=a2*0.05564342+a1*-0.20402585+a3*1.05722516
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=a8>0.0031308?1.055*Math.pow(a8,0.4166666666666667)-0.055:12.92*a8
a9=a9>0.0031308?1.055*Math.pow(a9,0.4166666666666667)-0.055:12.92*a9
b0=[B.b.aH(B.b.K(a7*255,0,255)),B.b.aH(B.b.K(a8*255,0,255)),B.b.aH(B.b.K(a9*255,0,255))]
d.sn(b0[0])
d.sq(b0[1])
d.st(b0[2])
d.sv(a0)
break
case B.c0:b1=A.aA(m.c,h,o)
a0=e?A.aA(j.c,h,o):255
d.sn(b1)
d.sq(b1)
d.st(b1)
d.sv(a0)
break
case B.c2:b2=A.aA(m.c,h,o)
b3=A.aA(l.c,h,o)
a1=A.aA(k.c,h,o)
b4=A.aA(b6.m(0,f?-1:3).c,h,o)
a0=g?A.aA(j.c,h,o):255
A.n5(255-b2,255-b3,255-a1,255-b4,i)
d.sn(i[0])
d.sq(i[1])
d.st(i[2])
d.sv(a0)
break
default:throw A.f(A.n("Unhandled color mode: "+A.A(b7)))}}return n},
b_:function b_(a,b){this.a=a
this.b=b},
hb:function hb(a,b){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.w=a
_.x=$
_.y=null
_.z=b
_.as=$
_.ay=_.ax=_.at=null},
hc:function hc(){},
hf:function hf(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=null
_.cy=c},
oI(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.k()
if(s>=12){if(b.ad(4)!=="8BIM")A.a8(A.n("Invalid key in layer additional data"))
b.ad(4)}if(s>=16)b.k()
return new A.hg()
default:return new A.eu(b)}},
dc:function dc(){},
iI:function iI(){this.a=null},
hj:function hj(){},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
de:function de(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
ev:function ev(){this.y=this.b=this.a=0},
bn(a,b){var s,r=a>>>8
if(!(r<256))return A.a(B.P,r)
r=B.P[r]
s=b>>>8
if(!(s<256))return A.a(B.P,s)
return(r<<17|B.P[s]<<16|B.P[a&255]<<1|B.P[b&255])>>>0},
aL:function aL(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
iM:function iM(){this.b=this.a=null},
eA:function eA(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
at:function at(a,b){this.a=a
this.b=b},
iV:function iV(){this.a=null
this.b=$},
iW:function iW(a){this.a=a
this.c=this.b=0},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
l4(a,b,c){var s=new A.iY(b,a),r=t.I
s.e=A.X(b,null,!1,r)
s.f=A.X(b,null,!1,r)
return s},
iY:function iY(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.w=_.r=_.f=_.e=1
_.x=c
_.y=d
_.z=!1
_.Q=1
_.at=_.as=$
_.ch=_.ay=0
_.cx=_.CW=null
_.db=_.cy=$
_.dy=1
_.fx=_.fr=0
_.id=null
_.k3=_.k2=_.k1=$},
cr:function cr(a,b){this.a=a
this.b=b},
a4:function a4(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.b=b},
hp:function hp(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
md(){return new A.iz(new Uint8Array(4096))},
iz:function iz(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
iX:function iX(){this.b=this.a=null
this.c=$},
l6(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.X(8,null,!1,t.eW),n=A.X(4,null,!1,t.dP)
return new A.j0(a,b,new A.j6(),new A.j9(),new A.j2(s,r),new A.jb(q,p),o,n,new Uint8Array(4))},
mw(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
j0:function j0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.as=_.Q=_.z=_.y=0
_.ax=_.at=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.cl=$
_.bY=null
_.dH=$
_.dI=_.fc=null
_.dJ=$},
jc:function jc(){},
mu(a){var s=new A.eD(a)
s.b=254
s.c=0
s.d=-8
return s},
eD:function eD(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
F(a,b,c){return B.a.ar(B.a.j(a+2*b+c+2,2),32)},
p1(a){var s,r=A.j([A.F(J.c(a.a,a.d+-33),J.c(a.a,a.d+-32),J.c(a.a,a.d+-31)),A.F(J.c(a.a,a.d+-32),J.c(a.a,a.d+-31),J.c(a.a,a.d+-30)),A.F(J.c(a.a,a.d+-31),J.c(a.a,a.d+-30),J.c(a.a,a.d+-29)),A.F(J.c(a.a,a.d+-30),J.c(a.a,a.d+-29),J.c(a.a,a.d+-28))],t.t)
for(s=0;s<4;++s)a.bO(s*32,4,r)},
oU(a){var s=J.c(a.a,a.d+-33),r=J.c(a.a,a.d+-1),q=J.c(a.a,a.d+31),p=J.c(a.a,a.d+63),o=J.c(a.a,a.d+95),n=A.o(a,null,0),m=n.cw(),l=A.F(s,r,q)
m.$flags&2&&A.b(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.cw()
m=A.F(r,q,p)
l.$flags&2&&A.b(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m
n.d+=32
m=n.cw()
l=A.F(q,p,o)
m.$flags&2&&A.b(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.cw()
m=A.F(p,o,o)
l.$flags&2&&A.b(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m},
oS(a){var s,r,q,p
for(s=4,r=0;r<4;++r)s+=J.c(a.a,a.d+(r-32))+J.c(a.a,a.d+(-1+r*32))
s=B.a.j(s,3)
for(r=0;r<4;++r){q=a.a
p=a.d+r*32
J.bd(q,p,p+4,s)}},
l7(a,b){var s,r,q,p,o,n,m=255-J.c(a.a,a.d+-33)
for(s=0,r=0;r<b;++r){q=m+J.c(a.a,a.d+(s-1))
for(p=0;p<b;++p){o=$.aB()
n=q+J.c(a.a,a.d+(-32+p))
if(!(n>=0&&n<766))return A.a(o,n)
n=o[n]
J.w(a.a,a.d+(s+p),n)}s+=32}},
p_(a){A.l7(a,4)},
p0(a){A.l7(a,8)},
oZ(a){A.l7(a,16)},
oY(a){var s,r=J.c(a.a,a.d+-1),q=J.c(a.a,a.d+31),p=J.c(a.a,a.d+63),o=J.c(a.a,a.d+95),n=J.c(a.a,a.d+-33),m=J.c(a.a,a.d+-32),l=J.c(a.a,a.d+-31),k=J.c(a.a,a.d+-30),j=J.c(a.a,a.d+-29)
a.i(0,96,A.F(q,p,o))
s=A.F(r,q,p)
a.i(0,97,s)
a.i(0,64,s)
s=A.F(n,r,q)
a.i(0,98,s)
a.i(0,65,s)
a.i(0,32,s)
s=A.F(m,n,r)
a.i(0,99,s)
a.i(0,66,s)
a.i(0,33,s)
a.i(0,0,s)
s=A.F(l,m,n)
a.i(0,67,s)
a.i(0,34,s)
a.i(0,1,s)
s=A.F(k,l,m)
a.i(0,35,s)
a.i(0,2,s)
a.i(0,3,A.F(j,k,l))},
oX(a){var s,r=J.c(a.a,a.d+-32),q=J.c(a.a,a.d+-31),p=J.c(a.a,a.d+-30),o=J.c(a.a,a.d+-29),n=J.c(a.a,a.d+-28),m=J.c(a.a,a.d+-27),l=J.c(a.a,a.d+-26),k=J.c(a.a,a.d+-25)
a.i(0,0,A.F(r,q,p))
s=A.F(q,p,o)
a.i(0,32,s)
a.i(0,1,s)
s=A.F(p,o,n)
a.i(0,64,s)
a.i(0,33,s)
a.i(0,2,s)
s=A.F(o,n,m)
a.i(0,96,s)
a.i(0,65,s)
a.i(0,34,s)
a.i(0,3,s)
s=A.F(n,m,l)
a.i(0,97,s)
a.i(0,66,s)
a.i(0,35,s)
s=A.F(m,l,k)
a.i(0,98,s)
a.i(0,67,s)
a.i(0,99,A.F(l,k,k))},
p3(a){var s=J.c(a.a,a.d+-1),r=J.c(a.a,a.d+31),q=J.c(a.a,a.d+63),p=J.c(a.a,a.d+-33),o=J.c(a.a,a.d+-32),n=J.c(a.a,a.d+-31),m=J.c(a.a,a.d+-30),l=J.c(a.a,a.d+-29),k=B.a.ar(B.a.j(p+o+1,1),32)
a.i(0,65,k)
a.i(0,0,k)
k=B.a.ar(B.a.j(o+n+1,1),32)
a.i(0,66,k)
a.i(0,1,k)
k=B.a.ar(B.a.j(n+m+1,1),32)
a.i(0,67,k)
a.i(0,2,k)
a.i(0,3,B.a.ar(B.a.j(m+l+1,1),32))
a.i(0,96,A.F(q,r,s))
a.i(0,64,A.F(r,s,p))
k=A.F(s,p,o)
a.i(0,97,k)
a.i(0,32,k)
k=A.F(p,o,n)
a.i(0,98,k)
a.i(0,33,k)
k=A.F(o,n,m)
a.i(0,99,k)
a.i(0,34,k)
a.i(0,35,A.F(n,m,l))},
p2(a){var s,r=J.c(a.a,a.d+-32),q=J.c(a.a,a.d+-31),p=J.c(a.a,a.d+-30),o=J.c(a.a,a.d+-29),n=J.c(a.a,a.d+-28),m=J.c(a.a,a.d+-27),l=J.c(a.a,a.d+-26),k=J.c(a.a,a.d+-25)
a.i(0,0,B.a.ar(B.a.j(r+q+1,1),32))
s=B.a.ar(B.a.j(q+p+1,1),32)
a.i(0,64,s)
a.i(0,1,s)
s=B.a.ar(B.a.j(p+o+1,1),32)
a.i(0,65,s)
a.i(0,2,s)
s=B.a.ar(B.a.j(o+n+1,1),32)
a.i(0,66,s)
a.i(0,3,s)
a.i(0,32,A.F(r,q,p))
s=A.F(q,p,o)
a.i(0,96,s)
a.i(0,33,s)
s=A.F(p,o,n)
a.i(0,97,s)
a.i(0,34,s)
s=A.F(o,n,m)
a.i(0,98,s)
a.i(0,35,s)
a.i(0,67,A.F(n,m,l))
a.i(0,99,A.F(m,l,k))},
oV(a){var s,r=J.c(a.a,a.d+-1),q=J.c(a.a,a.d+31),p=J.c(a.a,a.d+63),o=J.c(a.a,a.d+95)
a.i(0,0,B.a.ar(B.a.j(r+q+1,1),32))
s=B.a.ar(B.a.j(q+p+1,1),32)
a.i(0,32,s)
a.i(0,2,s)
s=B.a.ar(B.a.j(p+o+1,1),32)
a.i(0,64,s)
a.i(0,34,s)
a.i(0,1,A.F(r,q,p))
s=A.F(q,p,o)
a.i(0,33,s)
a.i(0,3,s)
s=A.F(p,o,o)
a.i(0,65,s)
a.i(0,35,s)
a.i(0,99,o)
a.i(0,98,o)
a.i(0,97,o)
a.i(0,96,o)
a.i(0,66,o)
a.i(0,67,o)},
oT(a){var s=J.c(a.a,a.d+-1),r=J.c(a.a,a.d+31),q=J.c(a.a,a.d+63),p=J.c(a.a,a.d+95),o=J.c(a.a,a.d+-33),n=J.c(a.a,a.d+-32),m=J.c(a.a,a.d+-31),l=J.c(a.a,a.d+-30),k=B.a.ar(B.a.j(s+o+1,1),32)
a.i(0,34,k)
a.i(0,0,k)
k=B.a.ar(B.a.j(r+s+1,1),32)
a.i(0,66,k)
a.i(0,32,k)
k=B.a.ar(B.a.j(q+r+1,1),32)
a.i(0,98,k)
a.i(0,64,k)
a.i(0,96,B.a.ar(B.a.j(p+q+1,1),32))
a.i(0,3,A.F(n,m,l))
a.i(0,2,A.F(o,n,m))
k=A.F(s,o,n)
a.i(0,35,k)
a.i(0,1,k)
k=A.F(r,s,o)
a.i(0,67,k)
a.i(0,33,k)
k=A.F(q,r,s)
a.i(0,99,k)
a.i(0,65,k)
a.i(0,97,A.F(p,q,r))},
pe(a){var s
for(s=0;s<16;++s)a.bb(s*32,16,a,-32)},
pc(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=J.c(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.bd(p,o,o+16,q)
s+=32}},
j4(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.bd(r,q,q+16,a)}},
p4(a){var s,r
for(s=16,r=0;r<16;++r)s+=J.c(a.a,a.d+(-1+r*32))+J.c(a.a,a.d+(r-32))
A.j4(B.a.j(s,5),a)},
p6(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.c(a.a,a.d+(-1+r*32))
A.j4(B.a.j(s,4),a)},
p5(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.c(a.a,a.d+(r-32))
A.j4(B.a.j(s,4),a)},
p7(a){A.j4(128,a)},
pf(a){var s
for(s=0;s<8;++s)a.bb(s*32,8,a,-32)},
pd(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=J.c(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.bd(p,o,o+8,q)
s+=32}},
j5(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.bd(r,q,q+8,a)}},
p8(a){var s,r
for(s=8,r=0;r<8;++r)s+=J.c(a.a,a.d+(r-32))+J.c(a.a,a.d+(-1+r*32))
A.j5(B.a.j(s,4),a)},
p9(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.c(a.a,a.d+(r-32))
A.j5(B.a.j(s,3),a)},
pa(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.c(a.a,a.d+(-1+r*32))
A.j5(B.a.j(s,3),a)},
pb(a){A.j5(128,a)},
bM(a,b,c,d,e){var s=b+c+d*32,r=J.c(a.a,a.d+s)+B.a.j(e,3)
if(!((r&-256)>>>0===0))r=r<0?0:255
a.i(0,s,r)},
j3(a,b,c,d,e){A.bM(a,0,0,b,c+d)
A.bM(a,0,1,b,c+e)
A.bM(a,0,2,b,c-e)
A.bM(a,0,3,b,c-d)},
oW(){var s,r,q,p
if(!$.mv){for(s=-255;s<=255;++s){r=$.hR()
q=255+s
p=s<0?-s:s
r.$flags&2&&A.b(r)
r[q]=p
p=$.km()
r=B.a.j(r[q],1)
p.$flags&2&&A.b(p)
p[q]=r}for(s=-1020;s<=1020;++s){r=$.kn()
if(s<-128)q=-128
else q=s>127?127:s
r.$flags&2&&A.b(r)
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.ko()
if(s<-16)q=-16
else q=s>15?15:s
r.$flags&2&&A.b(r)
r[112+s]=q}for(s=-255;s<=510;++s){r=$.aB()
if(s<0)q=0
else q=s>255?255:s
r.$flags&2&&A.b(r)
r[255+s]=q}$.mv=!0}},
j1:function j1(){},
oR(){var s,r=J.ai(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.eC(r)},
pv(){var s,r,q,p,o=new Uint8Array(3),n=J.ai(4,t.c7)
for(s=t.dd,r=0;r<4;++r){q=J.ai(8,s)
for(p=0;p<8;++p)q[p]=A.oR()
n[r]=q}B.f.aD(o,0,3,255)
return new A.ja(o,n)},
j6:function j6(){this.d=$},
j9:function j9(){},
jb:function jb(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
eC:function eC(a){this.a=a},
ja:function ja(a,b){this.a=a
this.b=b},
j2:function j2(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bx:function bx(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
eF:function eF(){this.b=this.a=0},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
l8(a,b){var s,r=A.j([],t.O),q=A.j([],t.W),p=new Uint32Array(2),o=new A.hu(a,p)
p=o.e=J.Z(B.o.gB(p),0,null)
s=a.E()
p.$flags&2&&A.b(p)
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.E()
p.$flags&2&&A.b(p)
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.E()
p.$flags&2&&A.b(p)
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.E()
p.$flags&2&&A.b(p)
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.E()
p.$flags&2&&A.b(p)
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.E()
p.$flags&2&&A.b(p)
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.E()
p.$flags&2&&A.b(p)
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.E()
p.$flags&2&&A.b(p)
if(7>=p.length)return A.a(p,7)
p[7]=s
o.b=!1
return new A.eE(o,b,r,q)},
bN(a,b){return B.a.j(a+B.a.O(1,b)-1,b)},
eE:function eE(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
fL:function fL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
hu:function hu(a,b){var _=this
_.a=0
_.b=!0
_.c=a
_.d=b
_.e=$},
j7:function j7(a,b){this.a=a
this.b=b},
by(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
ct(a){if(a<0)return 0
if(a>255)return 255
return a},
j8(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
pg(a,b,c){return 4278190080},
ph(a,b,c){return a},
pm(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return b[c]},
pn(a,b,c){var s=c+1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
po(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
pp(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.by(A.by(a,b[r]),s)},
pq(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return A.by(a,b[s])},
pr(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return A.by(a,b[c])},
ps(a,b,c){var s=c-1,r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
if(!(c>=0&&c<r))return A.a(b,c)
return A.by(s,b[c])},
pt(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.by(s,b[r])},
pi(a,b,c){var s,r,q=c-1,p=b.length
if(!(q>=0&&q<p))return A.a(b,q)
q=b[q]
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<p))return A.a(b,r)
r=b[r]
return A.by(A.by(a,q),A.by(s,r))},
pj(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return A.j8(s>>>24,a>>>24,r>>>24)+A.j8(s>>>16&255,a>>>16&255,r>>>16&255)+A.j8(s>>>8&255,a>>>8&255,r>>>8&255)+A.j8(s&255,a&255,r&255)<=0?s:a},
pk(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return(A.ct((a>>>24)+(s>>>24)-(r>>>24))<<24|A.ct((a>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.ct((a>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.ct((a&255)+(s&255)-(r&255)))>>>0},
pl(a,b,c){var s,r,q,p,o,n=b.length
if(!(c>=0&&c<n))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<n))return A.a(b,r)
r=b[r]
q=A.by(a,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.ct(s+B.a.Y(s-(r>>>24),2))<<24|A.ct(n+B.a.Y(n-(r>>>16&255),2))<<16|A.ct(p+B.a.Y(p-(r>>>8&255),2))<<8|A.ct(o+B.a.Y(o-(r&255),2)))>>>0},
cs:function cs(a,b){this.a=a
this.b=b},
hv:function hv(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
jd:function jd(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
eI:function eI(){},
fM:function fM(a,b,c){var _=this
_.a=a
_.b=b
_.e=c
_.f=$
_.r=1
_.x=_.w=$},
ky(a){var s,r=J.c7(a,t.gj)
for(s=0;s<a;++s)r[s]=new A.fr()
return new A.dP(r,0)},
o9(){var s,r,q=J.ai(5,t.fa)
for(s=0;s<5;++s)q[s]=A.ky(0)
r=J.ai(64,t.ak)
for(s=0;s<64;++s)r[s]=new A.fs()
return new A.dO(q,r)},
fr:function fr(){this.b=this.a=0},
fs:function fs(){this.b=this.a=0},
dP:function dP(a,b){this.a=a
this.b=b},
dO:function dO(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.e=_.d=!1
_.f=b},
dQ:function dQ(){var _=this
_.b=_.a=null
_.e=_.d=0},
ft:function ft(a){this.a=a
this.b=null},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
dZ:function dZ(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
je:function je(){this.b=this.a=null},
lN(a){return new A.cS(a.a,a.b,B.f.fK(a.c,0))},
fu:function fu(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
O(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r=new A.bk(null,null,null,a,h,e,d,0)
B.c.M(r.gaC(),r)
r.c=g
if(b!=null)r.e=A.dG(b)
s=!1
if(j==null)if(m)s=r.gI()===B.w||r.gI()===B.A||r.gI()===B.B||r.gI()===B.e||r.gI()===B.l
r.eb(l,f,c,i,s?r.hq(c,k,i):j)
return r},
fy(a,b,c,d){var s,r,q,p=null,o=a.e
o=o==null?p:A.dG(o)
s=a.c
s=s==null?p:A.lN(s)
r=a.w
q=a.r
o=new A.bk(p,s,o,p,q,r,a.y,a.z)
o.h_(a,b,c,d)
return o},
bF(a,b,c){var s,r,q,p,o=null,n=a.a
n=n==null?o:n.ba(c)
s=a.e
s=s==null?o:A.dG(s)
r=a.c
r=r==null?o:A.lN(r)
q=a.w
p=a.r
n=new A.bk(n,r,s,o,p,q,a.y,a.z)
n.fZ(a,b,c)
return n},
fq:function fq(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
ii:function ii(a,b){this.a=a
this.b=b},
ih:function ih(){},
ae:function ae(){},
oa(a,b,c){return new A.cY(new Uint16Array(a*b*c),a,b,c)},
cY:function cY(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ob(a,b,c){return new A.cZ(new Float32Array(a*b*c),a,b,c)},
cZ:function cZ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dS:function dS(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dT:function dT(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dU:function dU(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dV:function dV(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d_:function d_(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
d0:function d0(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
d1:function d1(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
oc(a,b,c){return new A.d2(new Uint32Array(a*b*c),a,b,c)},
d2:function d2(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d3:function d3(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
lY(a,b,c){return new A.d4(new Uint8Array(a*b*c),null,a,b,c)},
d4:function d4(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
fN:function fN(a,b){this.a=a
this.b=b},
aK:function aK(){},
eg:function eg(a,b,c){this.c=a
this.a=b
this.b=c},
eh:function eh(a,b,c){this.c=a
this.a=b
this.b=c},
ei:function ei(a,b,c){this.c=a
this.a=b
this.b=c},
ej:function ej(a,b,c){this.c=a
this.a=b
this.b=c},
ek:function ek(a,b,c){this.c=a
this.a=b
this.b=c},
el:function el(a,b,c){this.c=a
this.a=b
this.b=c},
em:function em(a,b,c){this.c=a
this.a=b
this.b=c},
en:function en(a,b,c){this.c=a
this.a=b
this.b=c},
mg(a){return new A.aY(new Uint8Array(A.z(a.c)),a.a,a.b)},
aY:function aY(a,b,c){this.c=a
this.a=b
this.b=c},
kM(a){return new A.cc(-1,0,-a.c,a)},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kN(a){return new A.cd(-1,0,-a.c,a)},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kO(a){return new A.ce(-1,0,-a.c,a)},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kP(a){return new A.cf(-1,0,-a.c,a)},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kQ(a){return new A.cg(-1,0,-a.c,a)},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kR(a){return new A.ch(-1,0,-a.c,a)},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ(a,b,c,d,e){a.a_(b-1,c)
return new A.h4(a,b,b+d-1,c+e-1)},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
eo(a){return new A.ci(-1,0,0,-1,0,a)},
ci:function ci(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kS(a){return new A.cj(-1,0,-a.c,a)},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ep(a){return new A.ck(-1,0,0,-2,0,a)},
ck:function ck(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kT(a){return new A.cl(-1,0,-a.c,a)},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq(a){return new A.cm(-1,0,0,-(a.c<<2>>>0),a)},
cm:function cm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iE(a){return new A.cn(-1,0,-a.c,a)},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(){},
r6(a,b){switch(b.a){case 0:A.hO(a)
break
case 1:A.r8(a)
break
case 2:A.r7(a)
break}return a},
r8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.gaC().length
for(s=t.g,r=0;r<c;++r){q=a.x
if(q===$)q=a.x=A.j([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?d:o.a
if(m==null)m=0
l=n?d:o.b
if(l==null)l=0
k=B.a.Y(l,2)
o=a.a
if((o==null?d:o.gT())!=null)for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.L(h,i,d)
if(g==null)g=new A.H()
o=p.a
f=o==null?d:o.L(h,j,d)
if(f==null)f=new A.H()
e=g.gN()
g.sN(f.gN())
f.sN(e)}else for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.L(h,i,d)
if(g==null)g=new A.H()
o=p.a
f=o==null?d:o.L(h,j,d)
if(f==null)f=new A.H()
e=g.gn()
g.sn(f.gn())
f.sn(e)
e=g.gq()
g.sq(f.gq())
f.sq(e)
e=g.gt()
g.st(f.gt())
f.st(e)
e=g.gv()
g.sv(f.gv())
f.sv(e)}}return a},
hO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.gaC().length
for(s=t.g,r=0;r<b;++r){q=a.x
if(q===$)q=a.x=A.j([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?c:o.a
if(m==null)m=0
l=n?c:o.b
if(l==null)l=0
k=B.a.Y(m,2)
o=a.a
if((o==null?c:o.gT())!=null)for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.L(g,i,c)
if(f==null)f=new A.H()
o=p.a
e=o==null?c:o.L(h,i,c)
if(e==null)e=new A.H()
d=f.gN()
f.sN(e.gN())
e.sN(d)}else for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.L(g,i,c)
if(f==null)f=new A.H()
o=p.a
e=o==null?c:o.L(h,i,c)
if(e==null)e=new A.H()
d=f.gn()
f.sn(e.gn())
e.sn(d)
d=f.gq()
f.sq(e.gq())
e.sq(d)
d=f.gt()
f.st(e.gt())
e.st(d)
d=f.gv()
f.sv(e.gv())
e.sv(d)}}return a},
r7(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.gaC().length
for(s=t.g,r=0;r<a;++r){q=a0.x
if(q===$)q=a0.x=A.j([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?b:o.a
if(m==null)m=0
l=n?b:o.b
if(l==null)l=0
k=B.a.Y(l,2)
if((n?b:o.gT())!=null)for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.L(f,h,b)
if(e==null)e=new A.H()
o=p.a
d=o==null?b:o.L(g,j,b)
if(d==null)d=new A.H()
c=e.gN()
e.sN(d.gN())
d.sN(c)}else for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.L(f,h,b)
if(e==null)e=new A.H()
o=p.a
d=o==null?b:o.L(g,j,b)
if(d==null)d=new A.H()
c=e.gn()
e.sn(d.gn())
d.sn(c)
c=e.gq()
e.sq(d.gq())
d.sq(c)
c=e.gt()
e.st(d.gt())
d.st(c)
c=e.gv()
e.sv(d.gv())
d.sv(c)}}return a0},
i7:function i7(a,b){this.a=a
this.b=b},
n(a){return new A.ig(a)},
ig:function ig(a){this.a=a},
q(a,b,c,d){var s=J.a1(a),r=s.gu(a)
s=c==null?s.gu(a):d+c
return new A.af(a,d,Math.min(r,s),d,b)},
o(a,b,c){var s=a.a,r=a.d,q=a.b,p=J.bf(s),o=b==null?a.c:a.d+c+b
return new A.af(s,q,Math.min(p,o),r+c,a.e)},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ef(a,b){return new A.iD(a,new Uint8Array(b))},
iD:function iD(a,b){this.a=0
this.b=a
this.c=b},
dg:function dg(a,b){this.a=a
this.b=b},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(){},
iN:function iN(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oL(a){var s,r,q,p,o=A.j([],t.el)
for(s=J.hU(a),r=t.j;s.F();){q=r.a(s.gP())
p=J.ak(q)
o.push(new A.bp(A.hI(p.m(q,0)),A.hI(p.m(q,1))))}s=A.mc(o,t.x)
if(o.length!==4)A.a8(B.cP)
return new A.iQ(s)},
bp:function bp(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a},
iR:function iR(){},
iS:function iS(){},
iP:function iP(){var _=this
_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$},
rs(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1={},b2=b5.a,b3=b5.$ti.p("4?"),b4=B.cm.bK(A.b1(b3.a(b2.m(0,"bytes"))))
if(b4.length>16777216)throw A.f(B.cT)
s=A.n8(b4)
r=s==null?b0:s.au(b4)
if(r==null||r.gS()<90||r.gJ()<90||r.gS()*r.gJ()>2e7)throw A.f(B.cN)
s=A.n8(b4)
q=s==null?b0:s.aU(b4,b0)
if(q==null)throw A.f(B.cS)
p=b1.a=A.n3(q)
if(J.bc(b3.a(b2.m(0,"op")),"prepare")){if(Math.max(p.gS(),p.gJ())>1200){b2=p.gS()>=p.gJ()?1200:b0
b2=b1.a=A.r0(p,p.gJ()>p.gS()?1200:b0,b2)}else b2=p
b3=b2.gS()
o=A.O(b0,b0,B.e,0,B.i,b2.gJ(),b0,0,3,b0,B.e,b3,!1)
A.jU(o,b2,B.a1,b0,b0,b0,b0,b0,b0,b0,b0)
b2=o.gS()
b3=o.gJ()
n=t.E.p("ay.S").a(A.m7(92).fb(o,B.at))
return A.h_(["width",b2,"height",b3,"image",B.aM.gd5().bK(n)],t.N,t.X)}m=A.oL(t.j.a(b3.a(b2.m(0,"quad"))))
l=new A.iP()
if(!m.gjZ())A.a8(B.cM)
k=m.a
b2=k.length
if(1>=b2)return A.a(k,1)
b3=k[1]
n=b3.a
if(2>=b2)return A.a(k,2)
j=k[2]
i=j.a
h=n-i
if(3>=b2)return A.a(k,3)
b2=k[3]
g=b2.a
f=g-i
b3=b3.b
j=j.b
e=b3-j
b2=b2.b
d=b2-j
c=k[0]
b=c.a
a=b-n+i-g
c=c.b
a0=c-b3+j-b2
a1=h*d-f*e
if(Math.abs(a1)<1e-10)A.a8(B.cO)
j=l.r=(a*d-f*a0)/a1
i=l.w=(h*a0-a*e)/a1
l.a=n-b+j*n
l.b=g-b+i*g
l.c=b
l.d=b3-c+j*b3
l.e=b2-c+i*b2
l.f=c
a2=new A.kl(b1,l)
a3=A.j([],t.h7)
for(b2=t.ej,a4=0;a4<3;++a4)for(b3=(a4+0.5)/3,a5=0;a5<3;++a5){a6=A.j([],b2)
for(n=(a5+0.5)/3,a7=-3;a7<=3;++a7)for(j=b3+a7*0.022,a8=-3;a8<=3;++a8)B.c.M(a6,a2.$2(n+a8*0.022,j))
B.c.M(a3,A.rr(a6))}a9=A.O(b0,b0,B.e,0,B.i,270,b0,0,3,b0,B.e,270,!1)
for(a7=0;a7<270;++a7)for(b2=(a7+0.5)/270,a8=0;a8<270;++a8){k=a2.$2((a8+0.5)/270,b2)
b3=k.a
n=k.b
j=k.c
i=a9.a
if(i!=null)i.a3(a8,a7,b3,n,j)}b2=t.fQ
b2=A.t(new A.aX(a3,t.aW.a(new A.kk()),b2),b2.p("az.E"))
b3=t.E.p("ay.S").a(A.m7(90).fb(a9,B.at))
return A.h_(["samples",b2,"preview",B.aM.gd5().bK(b3)],t.N,t.X)},
rr(a){var s,r,q,p,o,n=new A.kj(),m=A.ah(a),l=m.p("h(1)"),k=m.p("aX<1,h>"),j=new A.aM(n.$1(new A.aX(a,l.a(new A.ke()),k)),n.$1(new A.aX(a,l.a(new A.kf()),k)),n.$1(new A.aX(a,l.a(new A.kg()),k))),i=j.gd6()
k=A.j([],t.w)
for(l=a.length,s=i.a,r=i.b,q=i.c,p=0;p<a.length;a.length===l||(0,A.ab)(a),++p){o=a[p]
k.push(Math.sqrt(Math.pow(o.gd6().a-s,2)+Math.pow(o.gd6().b-r,2)+Math.pow(o.gd6().c-q,2)))}B.c.dS(k)
l=k.length
s=l/2|0
if(!(s<l))return A.a(k,s)
l=m.p("a7(1)")
m=m.p("bO<1>")
return new A.bq(j,k[s],new A.bO(a,l.a(new A.kh()),m).gu(0)/a.length,new A.bO(a,l.a(new A.ki()),m).gu(0)/a.length)},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(){},
kj:function kj(){},
ke:function ke(){},
kf:function kf(){},
kg:function kg(){},
kh:function kh(){},
ki:function ki(){},
rm(){var s,r=v.G,q=new A.ka(r)
if(typeof q=="function")A.a8(A.bg("Attempting to rewrap a JS function.",null))
s=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.qc,q)
s[$.lr()]=q
r.onmessage=s},
ka:function ka(a){this.a=a},
oP(a){throw A.f(A.ba("Uint64List not supported on the web."))},
od(a,b,c){return J.kq(a,b,c)},
ms(a,b,c){var s=a.BYTES_PER_ELEMENT
c=A.b9(b,c,B.a.aA(a.byteLength,s))
return J.Z(B.f.gB(a),a.byteOffset+b*s,(c-b)*s)},
mr(a,b){return J.ax(a,b,null)},
o5(a){return J.lw(a,0,null)},
o6(a){return a.kf(0,0,null)},
cx(a,b){var s,r,q,p
if(t.D.b(a)&&a.length>=32)return A.qe(a,b)
s=J.a1(a)
r=s.gu(a)
b^=4294967295
for(q=0;r>=8;){p=q+1
b=B.x[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.m(a,p))&255]^b>>>8
p=q+1
b=B.x[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.m(a,p))&255]^b>>>8
p=q+1
b=B.x[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.m(a,p))&255]^b>>>8
p=q+1
b=B.x[(b^s.m(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.m(a,p))&255]^b>>>8
r-=8}if(r>0)do{p=q+1
b=B.x[(b^s.m(a,q))&255]^b>>>8
if(--r,r>0){q=p
continue}else break}while(!0)
return(b^4294967295)>>>0},
qb(a){var s,r,q,p,o,n,m,l=new Uint32Array(8192)
for(s=0;s<256;++s){r=a[s]
if(!(s<8192))return A.a(l,s)
l[s]=r}for(q=1;q<32;++q)for(r=(q-1)*256,p=q*256,s=0;s<256;++s){o=r+s
if(!(o>=0&&o<8192))return A.a(l,o)
n=l[o]
o=p+s
m=l[n&255]
if(!(o<8192))return A.a(l,o)
l[o]=(n>>>8^m)>>>0}return l},
qe(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=$.n0
if(c7==null)c7=$.n0=A.qb(B.x)
s=c8.length
r=J.nB(B.f.gB(c8),c8.byteOffset,s)
q=c9^4294967295
p=s-32
for(o=0;o<=p;){n=q^r.getUint32(o,!0)
m=r.getUint32(o+4,!0)
l=r.getUint32(o+8,!0)
k=r.getUint32(o+12,!0)
j=r.getUint32(o+16,!0)
i=r.getUint32(o+20,!0)
h=r.getUint32(o+24,!0)
g=r.getUint32(o+28,!0)
f=c7[7936+(n&255)]
e=c7[7680+(n>>>8&255)]
d=c7[7424+(n>>>16&255)]
c=7168+(n>>>24)
if(!(c<8192))return A.a(c7,c)
c=c7[c]
b=c7[6912+(m&255)]
a=c7[6656+(m>>>8&255)]
a0=c7[6400+(m>>>16&255)]
a1=6144+(m>>>24)
if(!(a1<8192))return A.a(c7,a1)
a1=c7[a1]
a2=c7[5888+(l&255)]
a3=c7[5632+(l>>>8&255)]
a4=c7[5376+(l>>>16&255)]
a5=5120+(l>>>24)
if(!(a5<8192))return A.a(c7,a5)
a5=c7[a5]
a6=c7[4864+(k&255)]
a7=c7[4608+(k>>>8&255)]
a8=c7[4352+(k>>>16&255)]
a9=4096+(k>>>24)
if(!(a9<8192))return A.a(c7,a9)
a9=c7[a9]
b0=c7[3840+(j&255)]
b1=c7[3584+(j>>>8&255)]
b2=c7[3328+(j>>>16&255)]
b3=3072+(j>>>24)
if(!(b3<8192))return A.a(c7,b3)
b3=c7[b3]
b4=c7[2816+(i&255)]
b5=c7[2560+(i>>>8&255)]
b6=c7[2304+(i>>>16&255)]
b7=2048+(i>>>24)
if(!(b7<8192))return A.a(c7,b7)
b7=c7[b7]
b8=c7[1792+(h&255)]
b9=c7[1536+(h>>>8&255)]
c0=c7[1280+(h>>>16&255)]
c1=1024+(h>>>24)
if(!(c1<8192))return A.a(c7,c1)
c1=c7[c1]
c2=c7[768+(g&255)]
c3=c7[512+(g>>>8&255)]
c4=c7[256+(g>>>16&255)]
c5=g>>>24
if(!(c5<8192))return A.a(c7,c5)
q=f^e^d^c^b^a^a0^a1^a2^a3^a4^a5^a6^a7^a8^a9^b0^b1^b2^b3^b4^b5^b6^b7^b8^b9^c0^c1^c2^c3^c4^c7[c5]
o+=32}for(;o<s;o=c6){c6=o+1
q=c7[(q^c8[o])&255]^q>>>8}return(q^4294967295)>>>0},
jU(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n,m,l
if(f==null)f=0
if(g==null)g=0
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.gS()
if(h==null)h=b.gJ()
if(e==null)e=a.gS()<b.gS()?a.gS():b.gS()
if(d==null)d=a.gJ()<b.gJ()?a.gJ():b.gJ()
s=c===B.al
if(!s&&a.gcm())a=a.f8(a.gc6())
r=h/d
q=i/e
p=t.p
o=J.ai(d,p)
for(n=0;n<d;++n)o[n]=k+B.b.h(n*r)
m=J.ai(e,p)
for(l=0;l<e;++l)m[l]=j+B.b.h(l*q)
if(s)A.qh(b,a,f,g,e,d,m,o,null,B.aR)
else A.qd(b,a,f,g,e,d,m,o,c,!1,null,B.aR)
return a},
qh(a,b,c,d,e,f,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=b.gS(),g=b.gJ()
for(s=a0.length,r=a1.length,q=null,p=0;p<f;++p)for(o=d+p,n=o>=g,m=0;m<e;++m){l=c+m
if(l>=h||n)continue
if(!(m<s))return A.a(a0,m)
k=a0[m]
if(!(p<r))return A.a(a1,p)
j=a1[p]
i=a.a
q=i==null?null:i.L(k,j,q)
if(q==null)q=new A.H()
b.bP(l,o,q)}},
qd(a,b,c,d,e,f,g,h,i,j,a0,a1){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.L(m,l,q)
if(q==null)q=new A.H()
A.r3(b,c+n,o,q,i,!1,a0,a1)}},
r3(a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(!a6.fe(a7,a8))return a6
if(b0===B.al||a6.gcm())if(a6.fe(a7,a8)){a6.aJ(a7,a8).ab(a9)
return a6}s=a9.gaa()
r=a9.ga5()
q=a9.ga9()
p=a9.gu(a9)<4?1:a9.gW()
if(p===0)return a6
o=a6.aJ(a7,a8)
n=o.gaa()
m=o.ga5()
l=o.ga9()
k=o.gW()
switch(b0.a){case 0:return a6
case 1:break
case 2:s=Math.max(n,s)
r=Math.max(m,r)
q=Math.max(l,q)
break
case 3:s=1-(1-s)*(1-n)
r=1-(1-r)*(1-m)
q=1-(1-q)*(1-l)
break
case 4:j=p*k
i=1-k
h=1-p
g=s*i+n*h
f=r*i+m*h
e=q*i+l*h
h=B.b.K(p,0.01,1)
i=p<0
d=i?0:1
c=B.b.K(s/h*d,0,0.99)
d=B.b.K(p,0.01,1)
h=i?0:1
b=B.b.K(r/d*h,0,0.99)
h=B.b.K(p,0.01,1)
i=i?0:1
a=B.b.K(q/h*i,0,0.99)
i=n*p
h=m*p
d=l*p
a0=j<s*k+i?0:1
a1=j<r*k+h?0:1
a2=j<q*k+d?0:1
s=(j+g)*(1-a0)+(i/(1-c)+g)*a0
r=(j+f)*(1-a1)+(h/(1-b)+f)*a1
q=(j+e)*(1-a2)+(d/(1-a)+e)*a2
break
case 5:s=n+s
r=m+r
q=l+q
break
case 6:s=Math.min(n,s)
r=Math.min(m,r)
q=Math.min(l,q)
break
case 7:s=n*s
r=m*r
q=l*q
break
case 8:s=s!==0?1-(1-n)/s:0
r=r!==0?1-(1-m)/r:0
q=q!==0?1-(1-l)/q:0
break
case 9:i=1-k
h=1-p
d=s*i
a3=n*h
s=2*n<k?2*s*n+d+a3:p*k-2*(k-n)*(p-s)+d+a3
d=r*i
a3=m*h
r=2*m<k?2*r*m+d+a3:p*k-2*(k-m)*(p-r)+d+a3
i=q*i
h=l*h
q=2*l<k?2*q*l+i+h:p*k-2*(k-l)*(p-q)+i+h
break
case 10:i=k===0
if(i)s=0
else{h=n/k
s=n*(p*h+2*s*(1-h))+s*(1-k)+n*(1-p)}if(i)r=0
else{h=m/k
r=m*(p*h+2*r*(1-h))+r*(1-k)+m*(1-p)}if(i)q=0
else{i=l/k
q=l*(p*i+2*q*(1-i))+q*(1-k)+l*(1-p)}break
case 11:i=2*s
h=1-k
d=1-p
a3=s*h
a4=n*d
s=i<p?i*n+a3+a4:p*k-2*(k-n)*(p-s)+a3+a4
i=2*r
a3=r*h
a4=m*d
r=i<p?i*m+a3+a4:p*k-2*(k-m)*(p-r)+a3+a4
i=2*q
h=q*h
d=l*d
q=i<p?i*l+h+d:p*k-2*(k-l)*(p-q)+h+d
break
case 12:s=Math.abs(s-n)
r=Math.abs(r-m)
q=Math.abs(q-l)
break
case 13:s=n-s
r=m-r
q=l-q
break
case 14:s=s!==0?n/s:0
r=r!==0?m/r:0
q=q!==0?l/q:0
break}a5=1-p
o.saa(s*p+n*k*a5)
o.sa5(r*p+m*k*a5)
o.sa9(q*p+l*k*a5)
o.sW(p+k*a5)
return a6},
r5(a,b,c,d,e,f,g){var s,r=B.b.K(Math.min(d,e),0,a.gS()-1),q=B.b.K(Math.min(f,g),0,a.gJ()-1),p=B.b.K(Math.max(d,e),0,a.gS()-1),o=B.b.K(Math.max(f,g),0,a.gJ()-1),n=a.a.b6(0,r,q,p-r+1,o-q+1)
for(s=n.a;n.F();)s.ab(c)
return a},
o2(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
for(s=1;s<=a5;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.j([0,0],t.t)
for(p=a6.length,o=s,s=r;s>=1;o=s,s=r){n=a7+b1*(b0-o)
m=b1*s
l=b1*o
k=a9*s
j=a9*o
for(i=(a8&s)>>>0!==0,h=a9*(a8-o),g=a7;g<=n;g+=l){f=g+h
for(e=g;e<=f;e+=j){d=e+k
c=e+m
b=c+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dJ(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.dJ(a,a6[b],q)
a2=q[0]
a3=q[1]
A.dJ(a0,a2,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[e]=a
a6[d]=q[1]
A.dJ(a1,a3,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[c]=a
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dK(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.dK(a,a6[b],q)
a2=q[0]
a3=q[1]
A.dK(a0,a2,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[e]=a
a6[d]=q[1]
A.dK(a1,a3,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[c]=a
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dJ(a,a6[c],q)
a0=q[0]
a=q[1]
a6.$flags&2&&A.b(a6)
a6[c]=a}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dK(a,a6[c],q)
a0=q[0]
a=q[1]
a6.$flags&2&&A.b(a6)
a6[c]=a}a6.$flags&2&&A.b(a6)
if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.dJ(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.b(a6)
a6[d]=i}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.dK(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.b(a6)
a6[d]=i}a6.$flags&2&&A.b(a6)
if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
dJ(a,b,c){var s,r,q,p,o=$.al()
o.$flags&2&&A.b(o)
o[0]=a
s=$.av()
if(0>=s.length)return A.a(s,0)
r=s[0]
o[0]=b
q=s[0]
p=r+(q&1)+B.a.j(q,1)
B.c.i(c,0,p)
B.c.i(c,1,p-q)},
dK(a,b,c){var s=a-B.a.j(b,1)&65535
B.c.i(c,1,s)
B.c.i(c,0,b+s-32768&65535)},
n8(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=new A.fS()
if(g.bj(a))return g
s=new A.h6(A.m_())
if(s.bj(a))return s
r=new A.i9()
r.f=A.q(a,!1,h,0)
r.a=new A.dN(A.j([],t.b))
if(r.eq())return r
q=new A.je()
if(q.bj(a))return q
p=new A.iX()
if(p.dA(A.q(a,!1,h,0))!=null)return p
if(A.kU(a).c===943870035)return new A.iI()
if(A.o1(a))return new A.i5()
o=new A.fb(!1)
if(o.bj(a))return o
n=new A.iF(A.j([],t.s))
if(n.bj(a))return n
m=new A.iV()
l=A.q(a,!1,h,0)
k=m.a=new A.eA(B.aj)
k.c_(l)
if(k.fh())return m
j=new A.ib()
k=A.q(a,!1,h,0)
j.a=k
k=A.lO(k)
j.b=k
if(k!=null)return j
i=new A.iM()
if(i.au(a)!=null)return i
return h},
pA(a,b,c,d,e,f){A.px(f,a,b,c,d,e,!0,f)},
pB(a,b,c,d,e,f){A.py(f,a,b,c,d,e,!0,f)},
pz(a,b,c,d,e,f){A.pw(f,a,b,c,d,e,!0,f)},
dm(a,b,c,d,e){var s,r,q
for(s=0;s<d;++s){r=J.c(a.a,a.d+s)
q=J.c(b.a,b.d+s)
J.w(c.a,c.d+s,r+q)}},
px(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.q(a,!1,q,p),m=A.q(a,!1,q,p),l=A.o(m,q,0)
if(e===0){m.i(0,0,J.c(n.a,n.d))
A.dm(A.o(n,q,1),l,A.o(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.dm(n,A.o(l,q,s),m,1,!0)
A.dm(A.o(n,q,1),l,A.o(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
py(a,b,c,d,e,f,g,h){var s=null,r=e*d,q=e+f,p=A.q(a,!1,s,r),o=A.q(h,!1,s,r),n=A.o(o,s,0)
if(e===0){o.i(0,0,J.c(p.a,p.d))
A.dm(A.o(p,s,1),n,A.o(o,s,1),b-1,!0)
p.d+=d
o.d+=d
e=1}else n.d-=d
while(e<q){A.dm(p,n,o,b,!0);++e
n.d+=d
p.d+=d
o.d+=d}},
pw(a,b,c,d,e,f,g,h){var s,r,q,p,o,n=null,m=e*d,l=e+f,k=A.q(a,!1,n,m),j=A.q(h,!1,n,m),i=A.o(j,n,0)
if(e===0){j.i(0,0,J.c(k.a,k.d))
A.dm(A.o(k,n,1),i,A.o(j,n,1),b-1,!0)
i.d+=d
k.d+=d
j.d+=d
e=1}for(s=-d;e<l;){A.dm(k,A.o(i,n,s),j,1,!0)
for(r=1;r<b;++r){q=r-d
p=J.c(i.a,i.d+(r-1))+J.c(i.a,i.d+q)-J.c(i.a,i.d+(q-1))
if((p&4294967040)>>>0===0)o=p
else o=p<0?0:255
q=J.c(k.a,k.d+r)
J.w(j.a,j.d+r,q+o)}++e
i.d+=d
k.d+=d
j.d+=d}},
n3(a){var s="ifd0",r=A.bF(a,!1,!1)
if(!a.gbD().m(0,s).a.af(274)||a.gbD().m(0,s).gbZ()===1)return r
r.e=A.dG(a.gbD())
r.gbD().m(0,s).sbZ(null)
switch(a.gbD().m(0,s).gbZ()){case 2:return A.hO(r)
case 3:return A.r6(r,B.cK)
case 4:return A.hO(A.hN(r,180))
case 5:return A.hO(A.hN(r,90))
case 6:return A.hN(r,90)
case 7:return A.hO(A.hN(r,-90))
case 8:return A.hN(r,-90)}return r},
r0(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a3==null
if(a0&&a2==null)throw A.f(A.n("Invalid size"))
a1.gcm()
if(a1.gbD().m(0,"ifd0").a.af(274)&&a1.gbD().m(0,"ifd0").gbZ()!==1)a1=A.n3(a1)
if(a2==null||a2<=0){a3.toString
a2=B.b.aH(a3*(a1.gJ()/a1.gS()))}if(a0||a3<=0)a3=B.b.aH(a2*(a1.gS()/a1.gJ()))
if(a3===a1.gS()&&a2===a1.gJ())return A.bF(a1,!1,!1)
s=new Int32Array(a3)
for(a0=a1.a,r=a0==null,q=0;q<a3;++q){p=r?a:a0.a
p=B.a.aA(q*(p==null?0:p),a3)
if(!(q<a3))return A.a(s,q)
s[q]=p}o=new Int32Array(a2)
for(n=0;n<a2;++n){p=r?a:a0.b
p=B.a.aA(n*(p==null?0:p),a2)
if(!(n<a2))return A.a(o,n)
o[n]=p}m=a1.gaC().length
for(a0=t.g,l=a,k=0;k<m;++k){j=a1.x
if(j===$)j=a1.x=A.j([],a0)
if(!(k<j.length))return A.a(j,k)
i=j[k]
h=A.fy(i,a2,!0,a3)
r=l==null
if(!r)l.b1(h)
if(r)l=h
r=i.a
if((r==null?a:r.gT())!=null)for(n=0;n<a2;++n){if(!(n<a2))return A.a(o,n)
g=o[n]
for(q=0;q<a3;++q){if(!(q<a3))return A.a(s,q)
r=s[q]
p=i.a
r=p==null?a:B.b.h(p.aJ(r,g).gN())
if(r==null)r=0
p=h.a
if(p!=null)p.aF(q,n,r)}}else{f=i.ak(0,0)
for(n=0;n<a2;++n){if(!(n<a2))return A.a(o,n)
e=o[n]
for(q=0;q<a3;++q){if(!(q<a3))return A.a(s,q)
r=s[q]
p=i.a
if(p!=null)p.L(r,e,f)
r=f.gn()
p=f.gq()
d=f.gt()
c=f.gv()
b=h.a
if(b!=null)b.al(q,n,r,p,d,c)}}}}l.toString
return l},
hN(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=B.a.a7(b0,360)
a9.gcm()
if(B.a.a7(a8,90)===0)switch(B.a.Y(a8,90)){case 1:return A.qM(a9)
case 2:return A.qK(a9)
case 3:return A.qL(a9)
default:return A.bF(a9,!1,!1)}s=a8*3.141592653589793/180
r=Math.cos(s)
q=Math.sin(s)
p=a9.gS()
o=a9.gS()
n=a9.gJ()
m=a9.gJ()
l=0.5*a9.gS()
k=0.5*a9.gJ()
n=Math.abs(p*r)+Math.abs(n*q)
j=0.5*n
m=Math.abs(o*q)+Math.abs(m*r)
i=0.5*m
h=a9.gaC().length
for(p=t.g,g=a7,f=0;f<h;++f){e=a9.x
if(e===$)e=a9.x=A.j([],p)
if(!(f<e.length))return A.a(e,f)
d=e[f]
o=g==null
c=o?a7:g.d1()
if(c==null){b=B.b.h(n)
c=A.fy(a9,B.b.h(m),!0,b)}if(o)g=c
for(o=c.a,o=o.gH(o);o.F();){a=o.gP()
a0=a.gaP()
a1=a.gaL()
b=a0-j
a2=a1-i
a3=l+b*r+a2*q
a4=k-b*q+a2*r
b=!1
if(a3>=0)if(a4>=0){a2=d.a
a5=a2==null
a6=a5?a7:a2.a
if(a3<(a6==null?0:a6)){b=a5?a7:a2.b
b=a4<(b==null?0:b)}}if(b)c.bP(a0,a1,d.fw(a3,a4,B.cY))}}g.toString
return g},
qM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaC(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.ab)(s),++p){o=s[p]
n=q==null
m=n?f:q.d1()
if(m==null){l=o.a
k=l==null
j=k?f:l.b
if(j==null)j=0
l=k?f:l.a
m=A.fy(o,l==null?0:l,!0,j)}if(n)q=m
n=o.a
n=n==null?f:n.b
i=(n==null?0:n)-1
h=0
for(;;){n=m.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
g=0
for(;;){n=m.a
n=n==null?f:n.a
if(!(g<(n==null?0:n)))break
n=o.a
n=n==null?f:n.L(h,i-g,f)
m.bP(g,h,n==null?new A.H():n);++g}++h}}q.toString
return q},
qK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaC(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.ab)(s),++p){o=s[p]
n=o.a
m=n==null
l=m?f:n.a
k=(l==null?0:l)-1
n=m?f:n.b
j=(n==null?0:n)-1
n=q==null
i=n?f:q.d1()
if(i==null)i=A.bF(o,!0,!0)
if(n)q=i
h=0
for(;;){n=i.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
n=j-h
g=0
for(;;){m=i.a
m=m==null?f:m.a
if(!(g<(m==null?0:m)))break
m=o.a
m=m==null?f:m.L(k-g,n,f)
i.bP(g,h,m==null?new A.H():m);++g}++h}}q.toString
return q},
qL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaC(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.ab)(s),++p){o=s[p]
n=a.a
n=n==null?f:n.a
m=(n==null?0:n)-1
n=q==null
l=n?f:q.d1()
if(l==null){k=o.a
j=k==null
i=j?f:k.b
if(i==null)i=0
k=j?f:k.a
l=A.fy(o,k==null?0:k,!0,i)}if(n)q=l
h=0
for(;;){n=l.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
n=m-h
g=0
for(;;){k=l.a
k=k==null?f:k.a
if(!(g<(k==null?0:k)))break
k=o.a
k=k==null?f:k.L(n,g,f)
l.bP(g,h,k==null?new A.H():k);++g}++h}}q.toString
return q},
jV(a){var s
a=(a&-a)>>>0
s=a!==0?31:32
if((a&65535)!==0)s-=16
if((a&16711935)!==0)s-=8
if((a&252645135)!==0)s-=4
if((a&858993459)!==0)s-=2
return(a&1431655765)!==0?s-1:s},
rv(a){var s
$.lu().i(0,0,a)
s=$.nz()
if(0>=s.length)return A.a(s,0)
return s[0]},
nd(a,b,c,d){return(B.a.K(a,0,255)|B.a.K(b,0,255)<<8|B.a.K(c,0,255)<<16|B.a.K(d,0,255)<<24)>>>0},
b3(a,b,c){var s,r,q,p,o=b.gu(b),n=b.gI(),m=a.gT(),l=m==null?null:m.gI()
if(l==null)l=a.gI()
s=a.gu(a)
if(o===1)b.i(0,0,A.hM(B.b.bN(a.gu(a)>2?a.gag():a.m(0,0)),l,n))
else if(o<=s)for(r=0;r<o;++r)b.i(0,r,A.hM(a.m(0,r),l,n))
else if(s===2){q=A.hM(a.m(0,0),l,n)
if(o===3){b.i(0,0,q)
b.i(0,1,q)
b.i(0,2,q)}else{c=A.hM(a.m(0,1),l,n)
b.i(0,0,q)
b.i(0,1,q)
b.i(0,2,q)
b.i(0,3,c)}}else{for(r=0;r<s;++r)b.i(0,r,A.hM(a.m(0,r),l,n))
p=s===1?b.m(0,0):0
for(r=s;r<o;++r)b.i(0,r,r===3?c:p)}return b},
aH(a,b,c,d,e){var s,r,q=a.gT(),p=q==null?null:q.gI()
if(p==null)p=a.gI()
q=e==null
s=q?null:e.gI()
c=s==null?c:s
if(c==null)c=a.gI()
s=q?null:e.gu(e)
d=s==null?d:s
if(d==null)d=a.gu(a)
if(b==null)b=0
if(c===p&&d===a.gu(a)){if(q)return a.R()
e.ab(a)
return e}switch(c.a){case 3:if(q)r=new A.bC(new Uint8Array(d))
else r=e
return A.b3(a,r,b)
case 0:return A.b3(a,q?new A.cL(d,0):e,b)
case 1:return A.b3(a,q?new A.cN(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.cP(d,new Uint8Array(q))}else r=e
return A.b3(a,r,b)
case 4:if(q)r=new A.cM(new Uint16Array(d))
else r=e
return A.b3(a,r,b)
case 5:if(q)r=new A.cO(new Uint32Array(d))
else r=e
return A.b3(a,r,b)
case 6:if(q)r=new A.cJ(new Int8Array(d))
else r=e
return A.b3(a,r,b)
case 7:if(q)r=new A.cH(new Int16Array(d))
else r=e
return A.b3(a,r,b)
case 8:if(q)r=new A.cI(new Int32Array(d))
else r=e
return A.b3(a,r,b)
case 9:if(q)r=new A.cE(new Uint16Array(d))
else r=e
return A.b3(a,r,b)
case 10:if(q)r=new A.cF(new Float32Array(d))
else r=e
return A.b3(a,r,b)
case 11:if(q)r=new A.cG(new Float64Array(d))
else r=e
return A.b3(a,r,b)}},
V(a){return 0.299*a.gn()+0.587*a.gq()+0.114*a.gt()},
n5(a,b,c,d,e){var s=1-d/255
B.c.i(e,0,B.b.aH(255*(1-a/255)*s))
B.c.i(e,1,B.b.aH(255*(1-b/255)*s))
B.c.i(e,2,B.b.aH(255*(1-c/255)*s))},
K(a){var s,r,q,p=$.lt()
p.$flags&2&&A.b(p)
p[0]=a
p=$.ny()
if(0>=p.length)return A.a(p,0)
s=p[0]
if(a===0)return s>>>16
if($.Q==null)A.S()
r=s>>>23&511
p=$.lL.iH()
if(!(r<p.length))return A.a(p,r)
r=p[r]
if(r!==0){q=s&8388607
return r+(q+4095+(q>>>13&1)>>>13)}return A.o3(s)},
o3(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.bp(o+(B.a.X(1,s-1)-1)+(B.a.a1(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
S(){var s,r,q,p,o,n=$.Q
if(n!=null)return n
s=new Uint32Array(65536)
$.Q=J.lw(B.o.gB(s),0,null)
n=new Uint16Array(512)
$.lL.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.o4(r)
n=$.Q
n.toString
return n},
o4(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{while((p&1024)===0){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0}},B={}
var w=[A,J,B]
var $={}
A.kE.prototype={}
J.fC.prototype={
U(a,b){return a===b},
gG(a){return A.et(a)},
A(a){return"Instance of '"+A.h8(a)+"'"},
gaE(a){return A.cw(A.lg(this))}}
J.fQ.prototype={
A(a){return String(a)},
gG(a){return a?519018:218159},
gaE(a){return A.cw(t.y)},
$iL:1,
$ia7:1}
J.e0.prototype={
U(a,b){return null==b},
A(a){return"null"},
gG(a){return 0},
$iL:1}
J.e1.prototype={$iW:1}
J.bH.prototype={
gG(a){return 0},
A(a){return String(a)}}
J.h5.prototype={}
J.dk.prototype={}
J.bl.prototype={
A(a){var s=a[$.nf()]
if(s==null)s=a[$.lr()]
if(s==null)return this.fM(a)
return"JavaScript function for "+J.f6(s)},
$ibZ:1}
J.d6.prototype={
gG(a){return 0},
A(a){return String(a)}}
J.d7.prototype={
gG(a){return 0},
A(a){return String(a)}}
J.u.prototype={
M(a,b){A.ah(a).c.a(b)
a.$flags&1&&A.b(a,29)
a.push(b)},
fm(a,b){var s
a.$flags&1&&A.b(a,"removeAt",1)
s=a.length
if(b>=s)throw A.f(A.mn(b,null))
return a.splice(b,1)[0]},
dE(a,b){A.ah(a).p("e<1>").a(b)
a.$flags&1&&A.b(a,"addAll",2)
this.h7(a,b)
return},
h7(a,b){var s,r
t.e.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.f(A.aT(a))
for(r=0;r<s;++r)a.push(b[r])},
d4(a){a.$flags&1&&A.b(a,"clear","clear")
a.length=0},
fn(a,b){return A.ez(a,0,A.hL(b,"count",t.p),A.ah(a).c)},
da(a,b){return A.ez(a,b,null,A.ah(a).c)},
bs(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
b8(a,b,c){if(b<0||b>a.length)throw A.f(A.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.f(A.aj(c,b,a.length,"end",null))
if(b===c)return A.j([],A.ah(a))
return A.j(a.slice(b,c),A.ah(a))},
gfi(a){var s=a.length
if(s>0)return a[s-1]
throw A.f(A.m0())},
am(a,b,c,d,e){var s,r,q,p,o
A.ah(a).p("e<1>").a(d)
a.$flags&2&&A.b(a,5)
A.b9(b,c,a.length)
s=c-b
if(s===0)return
A.cp(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.kr(d,e).fo(0,!1)
q=0}p=J.a1(r)
if(q+s>p.gu(r))throw A.f(A.m1())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.m(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.m(r,q+o)},
aD(a,b,c,d){var s
A.ah(a).p("1?").a(d)
a.$flags&2&&A.b(a,"fillRange")
A.b9(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
j9(a,b){var s,r
A.ah(a).p("a7(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.f(A.aT(a))}return!1},
dS(a){var s,r,q,p,o,n
a.$flags&2&&A.b(a,"sort")
s=a.length
if(s<2)return
if(s===2){r=a[0]
q=a[1]
p=J.m5(r,q)
if(typeof p!=="number")return p.fA()
if(p>0){a[0]=q
a[1]=r}return}o=0
if(A.ah(a).c.b(null))for(n=0;n<a.length;++n)if(a[n]===void 0){a[n]=null;++o}a.sort(A.dx(J.qr(),2))
if(o>0)this.iZ(a,o)},
iZ(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bX(a,b){var s
for(s=0;s<a.length;++s)if(J.bc(a[s],b))return!0
return!1},
gav(a){return a.length===0},
gff(a){return a.length!==0},
A(a){return A.m2(a,"[","]")},
gH(a){return new J.bT(a,a.length,A.ah(a).p("bT<1>"))},
gG(a){return A.et(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.b(a,"set length","change the length of")
if(b<0)throw A.f(A.aj(b,0,null,"newLength",null))
if(b>a.length)A.ah(a).c.a(null)
a.length=b},
m(a,b){if(!(b>=0&&b<a.length))throw A.f(A.jX(a,b))
return a[b]},
i(a,b,c){A.ah(a).c.a(c)
a.$flags&2&&A.b(a)
if(!(b>=0&&b<a.length))throw A.f(A.jX(a,b))
a[b]=c},
$iag:1,
$iB:1,
$ie:1,
$ip:1}
J.fO.prototype={
jX(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.h8(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.il.prototype={}
J.bT.prototype={
gP(){var s=this.d
return s==null?this.$ti.c.a(s):s},
F(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.ab(q)
throw A.f(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iC:1}
J.d5.prototype={
bJ(a,b){var s
A.hI(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gdL(b)
if(this.gdL(a)===s)return 0
if(this.gdL(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdL(a){return a===0?1/a<0:a<0},
h(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.f(A.ba(""+a+".toInt()"))},
b2(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.f(A.ba(""+a+".ceil()"))},
bN(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.f(A.ba(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.ba(""+a+".round()"))},
K(a,b,c){if(this.bJ(b,c)>0)throw A.f(A.bR(b))
if(this.bJ(a,b)<0)return b
if(this.bJ(a,c)>0)return c
return a},
cv(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.f(A.aj(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.a8(A.ba("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.p.d9("0",o)},
A(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a7(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aA(a,b){A.hI(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eP(a,b)},
Y(a,b){return(a|0)===a?a/b|0:this.eP(a,b)},
eP(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.f(A.ba("Result of truncating division is "+A.A(s)+": "+A.A(a)+" ~/ "+b))},
X(a,b){if(b<0)throw A.f(A.bR(b))
return b>31?0:a<<b>>>0},
O(a,b){return b>31?0:a<<b>>>0},
bp(a,b){var s
if(b<0)throw A.f(A.bR(b))
if(a>0)s=this.a0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j(a,b){var s
if(a>0)s=this.a0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a1(a,b){if(0>b)throw A.f(A.bR(b))
return this.a0(a,b)},
a0(a,b){return b>31?0:a>>>b},
gaE(a){return A.cw(t.H)},
$iaS:1,
$iy:1,
$ik:1}
J.e_.prototype={
ar(a,b){var s=this.X(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gaE(a){return A.cw(t.p)},
$iL:1,
$ih:1}
J.fR.prototype={
gaE(a){return A.cw(t.V)},
$iL:1}
J.c8.prototype={
dT(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
c1(a,b,c){return a.substring(b,A.b9(b,c,a.length))},
fs(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.of(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.og(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
d9(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.cv)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bJ(a,b){var s
A.b1(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
A(a){return a},
gG(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaE(a){return A.cw(t.N)},
gu(a){return a.length},
$iag:1,
$iL:1,
$iaS:1,
$imh:1,
$iE:1}
A.dq.prototype={
gH(a){var s=this.a
return new A.dB(s.gH(s),A.l(this).p("dB<1,2>"))},
gu(a){var s=this.a
return s.gu(s)},
gav(a){var s=this.a
return s.gav(s)},
A(a){var s=this.a
return s.A(s)}}
A.dB.prototype={
F(){return this.a.F()},
gP(){return this.$ti.y[1].a(this.a.gP())},
$iC:1}
A.bU.prototype={}
A.eL.prototype={$iB:1}
A.bV.prototype={
dF(a,b,c){return new A.bV(this.a,this.$ti.p("@<1,2>").aG(b).aG(c).p("bV<1,2,3,4>"))},
m(a,b){return this.$ti.p("4?").a(this.a.m(0,b))},
aO(a,b){this.a.aO(0,new A.i_(this,this.$ti.p("~(3,4)").a(b)))},
gbk(){var s=this.$ti
return A.nM(this.a.gbk(),s.c,s.y[2])},
gu(a){var s=this.a
return s.gu(s)},
gav(a){var s=this.a
return s.gav(s)}}
A.i_.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.p("~(1,2)")}}
A.d8.prototype={
A(a){return"LateInitializationError: "+this.a}}
A.aR.prototype={
gu(a){return this.a.length},
m(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.iT.prototype={}
A.B.prototype={}
A.az.prototype={
gH(a){var s=this
return new A.c9(s,s.gu(s),A.l(s).p("c9<az.E>"))},
gav(a){return this.gu(this)===0}}
A.ey.prototype={
ghV(){var s=J.bf(this.a),r=this.c
if(r==null||r>s)return s
return r},
gj2(){var s=J.bf(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.bf(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
bs(a,b){var s=this,r=s.gj2()+b
if(b<0||r>=s.ghV())throw A.f(A.kB(b,s.gu(0),s,"index"))
return J.ly(s.a,r)},
da(a,b){var s,r,q=this
A.cp(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dE(q.$ti.p("dE<1>"))
return A.ez(q.a,s,r,q.$ti.c)},
fo(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.a1(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.fP(0,n):J.m3(0,n)}r=A.X(s,m.bs(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.c.i(r,q,m.bs(n,o+q))
if(m.gu(n)<l)throw A.f(A.aT(p))}return r}}
A.c9.prototype={
gP(){var s=this.d
return s==null?this.$ti.c.a(s):s},
F(){var s,r=this,q=r.a,p=J.a1(q),o=p.gu(q)
if(r.b!==o)throw A.f(A.aT(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.bs(q,s);++r.c
return!0},
$iC:1}
A.aX.prototype={
gu(a){return J.bf(this.a)},
bs(a,b){return this.b.$1(J.ly(this.a,b))}}
A.bO.prototype={
gH(a){return new A.eJ(J.hU(this.a),this.b,this.$ti.p("eJ<1>"))}}
A.eJ.prototype={
F(){var s,r
for(s=this.a,r=this.b;s.F();)if(r.$1(s.gP()))return!0
return!1},
gP(){return this.a.gP()},
$iC:1}
A.dE.prototype={
gH(a){return B.co},
gav(a){return!0},
gu(a){return 0}}
A.dF.prototype={
F(){return!1},
gP(){throw A.f(A.m0())},
$iC:1}
A.an.prototype={}
A.bw.prototype={
i(a,b,c){A.l(this).p("bw.E").a(c)
throw A.f(A.ba("Cannot modify an unmodifiable list"))},
am(a,b,c,d,e){A.l(this).p("e<bw.E>").a(d)
throw A.f(A.ba("Cannot modify an unmodifiable list"))},
bw(a,b,c,d){return this.am(0,b,c,d,0)},
aD(a,b,c,d){A.l(this).p("bw.E?").a(d)
throw A.f(A.ba("Cannot modify an unmodifiable list"))}}
A.dl.prototype={}
A.eW.prototype={$r:"+(1,2,3)",$s:1}
A.dD.prototype={
dF(a,b,c){var s=A.l(this)
return A.me(this,s.c,s.y[1],b,c)},
gav(a){return this.gu(this)===0},
A(a){return A.kJ(this)},
$ia9:1}
A.c_.prototype={
cR(){var s=this,r=s.$map
if(r==null){r=new A.e2(s.$ti.p("e2<1,2>"))
A.n7(s.a,r)
s.$map=r}return r},
m(a,b){return this.cR().m(0,b)},
aO(a,b){this.$ti.p("~(1,2)").a(b)
this.cR().aO(0,b)},
gbk(){var s=this.cR()
return new A.bm(s,A.l(s).p("bm<1>"))},
gu(a){return this.cR().a}}
A.ew.prototype={}
A.iZ.prototype={
bt(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.ee.prototype={
A(a){return"Null check operator used on a null value"}}
A.fW.prototype={
A(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hr.prototype={
A(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.iC.prototype={
A(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eX.prototype={
A(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idh:1}
A.bB.prototype={
A(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ne(r==null?"unknown":r)+"'"},
$ibZ:1,
gkb(){return this},
$C:"$1",
$R:1,
$D:null}
A.fc.prototype={$C:"$0",$R:0}
A.fd.prototype={$C:"$2",$R:2}
A.hm.prototype={}
A.hl.prototype={
A(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ne(s)+"'"}}
A.cD.prototype={
U(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cD))return!1
return this.$_target===b.$_target&&this.a===b.a},
gG(a){return(A.hP(this.a)^A.et(this.$_target))>>>0},
A(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.h8(this.a)+"'")}}
A.hk.prototype={
A(a){return"RuntimeError: "+this.a}}
A.aW.prototype={
gu(a){return this.a},
gav(a){return this.a===0},
gbk(){return new A.bm(this,A.l(this).p("bm<1>"))},
af(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jx(a)},
jx(a){var s=this.d
if(s==null)return!1
return this.cp(s[this.co(a)],a)>=0},
dE(a,b){A.l(this).p("a9<1,2>").a(b).aO(0,new A.is(this))},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.jy(b)},
jy(a){var s,r,q=this.d
if(q==null)return null
s=q[this.co(a)]
r=this.cp(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.l(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.dY(s==null?q.b=q.dt():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.dY(r==null?q.c=q.dt():r,b,c)}else q.jA(b,c)},
jA(a,b){var s,r,q,p,o=this,n=A.l(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dt()
r=o.co(a)
q=s[r]
if(q==null)s[r]=[o.du(a,b)]
else{p=o.cp(q,a)
if(p>=0)q[p].b=b
else q.push(o.du(a,b))}},
c7(a,b){var s=this
if(typeof b=="string")return s.eJ(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.eJ(s.c,b)
else return s.jz(b)},
jz(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.co(a)
r=n[s]
q=o.cp(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eS(p)
if(r.length===0)delete n[s]
return p.b},
aO(a,b){var s,r,q=this
A.l(q).p("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.f(A.aT(q))
s=s.c}},
dY(a,b,c){var s,r=A.l(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.du(b,c)
else s.b=c},
eJ(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.eS(s)
delete a[b]
return s.b},
ey(){this.r=this.r+1&1073741823},
du(a,b){var s=this,r=A.l(s),q=new A.iw(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.ey()
return q},
eS(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ey()},
co(a){return J.be(a)&1073741823},
cp(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bc(a[r].a,b))return r
return-1},
A(a){return A.kJ(this)},
dt(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ikH:1}
A.is.prototype={
$2(a,b){var s=this.a,r=A.l(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.l(this.a).p("~(1,2)")}}
A.iw.prototype={}
A.bm.prototype={
gu(a){return this.a.a},
gav(a){return this.a.a===0},
gH(a){var s=this.a
return new A.R(s,s.r,s.e,this.$ti.p("R<1>"))}}
A.R.prototype={
gP(){return this.d},
F(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.aT(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iC:1}
A.ix.prototype={
gu(a){return this.a.a},
gav(a){return this.a.a===0},
gH(a){var s=this.a
return new A.aq(s,s.r,s.e,this.$ti.p("aq<1>"))}}
A.aq.prototype={
gP(){return this.d},
F(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.aT(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iC:1}
A.e2.prototype={
co(a){return A.qY(a)&1073741823},
cp(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bc(a[r].a,b))return r
return-1}}
A.k6.prototype={
$1(a){return this.a(a)},
$S:15}
A.k7.prototype={
$2(a,b){return this.a(a,b)},
$S:39}
A.k8.prototype={
$1(a){return this.a(A.b1(a))},
$S:38}
A.bP.prototype={
A(a){return this.eQ(!1)},
eQ(a){var s,r,q,p,o,n=this.i_(),m=this.en(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.mk(o):l+A.A(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
i_(){var s,r=this.$s
while($.jF.length<=r)B.c.M($.jF,null)
s=$.jF[r]
if(s==null){s=this.hm()
B.c.i($.jF,r,s)}return s},
hm(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.c7(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.c.i(j,q,r[s])}}return A.mc(j,k)}}
A.dt.prototype={
en(){return[this.a,this.b,this.c]},
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.dt&&s.$s===b.$s&&J.bc(s.a,b.a)&&J.bc(s.b,b.b)&&J.bc(s.c,b.c)},
gG(a){var s=this
return A.kK(s.$s,s.a,s.b,s.c)}}
A.jn.prototype={
iH(){var s=this.b
if(s===this)throw A.f(A.m9(""))
return s}}
A.ca.prototype={
gaE(a){return B.k7},
d3(a,b,c){A.au(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
f4(a){return this.d3(a,0,null)},
f1(a,b,c){A.au(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
d2(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
f2(a){return this.d2(a,0,null)},
f_(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Int16Array(a,b,c)},
f3(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
f0(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Int32Array(a,b,c)},
eZ(a,b,c){A.au(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Float32Array(a,b,c)},
eY(a,b,c){var s
A.au(a,b,c)
s=new DataView(a,b,c)
return s},
$iL:1,
$ica:1}
A.e9.prototype={
gB(a){if(((a.$flags|0)&2)!==0)return new A.jL(a.buffer)
else return a.buffer},
ic(a,b,c,d){var s=A.aj(b,0,c,d,null)
throw A.f(s)},
e6(a,b,c,d){if(b>>>0!==b||b>c)this.ic(a,b,c,d)},
$iY:1}
A.jL.prototype={
d3(a,b,c){var s=A.ov(this.a,b,c)
s.$flags=3
return s},
f4(a){return this.d3(0,0,null)},
f1(a,b,c){var s=A.op(this.a,b,c)
s.$flags=3
return s},
d2(a,b,c){var s=A.or(this.a,b,c)
s.$flags=3
return s},
f2(a){return this.d2(0,0,null)},
f_(a,b,c){var s=A.ol(this.a,b,c)
s.$flags=3
return s},
f3(a,b,c){var s=A.ot(this.a,b,c)
s.$flags=3
return s},
f0(a,b,c){var s=A.on(this.a,b,c)
s.$flags=3
return s},
eZ(a,b,c){var s=A.ok(this.a,b,c)
s.$flags=3
return s},
eY(a,b,c){var s=A.oi(this.a,b,c)
s.$flags=3
return s}}
A.h1.prototype={
gaE(a){return B.k8},
$iL:1}
A.aa.prototype={
gu(a){return a.length},
eK(a,b,c,d,e){var s,r,q
t.gu.a(d)
s=a.length
this.e6(a,b,s,"start")
this.e6(a,c,s,"end")
if(b>c)throw A.f(A.aj(b,0,c,null,null))
r=c-b
if(e<0)throw A.f(A.bg(e,null))
q=d.length
if(q-e<r)throw A.f(A.l3("Not enough elements"))
if(e!==0||q!==r)d=d.subarray(e,e+r)
a.set(d,b)},
$iag:1,
$iaD:1}
A.bI.prototype={
m(a,b){A.bz(b,a,a.length)
return a[b]},
i(a,b,c){A.mO(c)
a.$flags&2&&A.b(a)
A.bz(b,a,a.length)
a[b]=c},
am(a,b,c,d,e){t.bM.a(d)
a.$flags&2&&A.b(a,5)
if(t.d4.b(d)){this.eK(a,b,c,d,e)
return}this.dU(a,b,c,d,e)},
bw(a,b,c,d){return this.am(a,b,c,d,0)},
$iB:1,
$ie:1,
$ip:1}
A.aE.prototype={
i(a,b,c){A.v(c)
a.$flags&2&&A.b(a)
A.bz(b,a,a.length)
a[b]=c},
am(a,b,c,d,e){t.Y.a(d)
a.$flags&2&&A.b(a,5)
if(t.bc.b(d)){this.eK(a,b,c,d,e)
return}this.dU(a,b,c,d,e)},
bw(a,b,c,d){return this.am(a,b,c,d,0)},
$iB:1,
$ie:1,
$ip:1}
A.e4.prototype={
gaE(a){return B.k9},
b8(a,b,c){return new Float32Array(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1,
$ii8:1}
A.e5.prototype={
gaE(a){return B.ka},
b8(a,b,c){return new Float64Array(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1,
$ikx:1}
A.e6.prototype={
gaE(a){return B.kb},
m(a,b){A.bz(b,a,a.length)
return a[b]},
b8(a,b,c){return new Int16Array(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1,
$iik:1}
A.e7.prototype={
gaE(a){return B.kc},
m(a,b){A.bz(b,a,a.length)
return a[b]},
b8(a,b,c){return new Int32Array(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1,
$idW:1}
A.e8.prototype={
gaE(a){return B.kd},
m(a,b){A.bz(b,a,a.length)
return a[b]},
b8(a,b,c){return new Int8Array(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1,
$ikD:1}
A.ea.prototype={
gaE(a){return B.kf},
m(a,b){A.bz(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint16Array(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1,
$il5:1}
A.eb.prototype={
gaE(a){return B.kg},
m(a,b){A.bz(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint32Array(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1,
$ibu:1}
A.ec.prototype={
gaE(a){return B.kh},
gu(a){return a.length},
m(a,b){A.bz(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.b2(b,c,a.length)))},
$iL:1}
A.cb.prototype={
gaE(a){return B.ki},
gu(a){return a.length},
m(a,b){A.bz(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint8Array(a.subarray(b,A.b2(b,c,a.length)))},
fK(a,b){return this.b8(a,b,null)},
$iL:1,
$icb:1,
$ibv:1}
A.eR.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.eU.prototype={}
A.b0.prototype={
p(a){return A.f1(v.typeUniverse,this,a)},
aG(a){return A.mK(v.typeUniverse,this,a)}}
A.hB.prototype={}
A.hG.prototype={
A(a){return A.aF(this.a,null)}}
A.hz.prototype={
A(a){return this.a}}
A.eY.prototype={$ibs:1}
A.ji.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:9}
A.jh.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.jj.prototype={
$0(){this.a.$0()},
$S:16}
A.jk.prototype={
$0(){this.a.$0()},
$S:16}
A.jH.prototype={
h6(a,b){if(self.setTimeout!=null)self.setTimeout(A.dx(new A.jI(this,b),0),a)
else throw A.f(A.ba("`setTimeout()` not found."))}}
A.jI.prototype={
$0(){this.b.$0()},
$S:2}
A.b6.prototype={
A(a){return A.A(this.a)},
$iP:1,
gca(){return this.b}}
A.hy.prototype={
f7(a){var s=this.a
if((s.a&30)!==0)throw A.f(A.l3("Future already completed"))
s.e2(A.qq(a,null))}}
A.eK.prototype={}
A.eM.prototype={
jC(a){if((this.c&15)!==6)return!0
return this.b.b.dN(t.al.a(this.d),a.a,t.y,t.K)},
jv(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.jR(q,m,a.b,o,n,t.k)
else p=l.dN(t.B.a(q),m,o,n)
try{o=r.$ti.p("2/").a(p)
return o}catch(s){if(t.eK.b(A.bA(s))){if((r.c&1)!==0)throw A.f(A.bg("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.f(A.bg("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aO.prototype={
jU(a,b,c){var s,r,q=this.$ti
q.aG(c).p("1/(2)").a(a)
s=$.a6
if(s===B.z){if(!t.Q.b(b)&&!t.B.b(b))throw A.f(A.kt(b,"onError",u.c))}else{c.p("@<0/>").aG(q.c).p("1(2)").a(a)
b=A.qH(b,s)}r=new A.aO(s,c.p("aO<0>"))
this.dZ(new A.eM(r,3,a,b,q.p("@<1>").aG(c).p("eM<1,2>")))
return r},
j0(a){this.a=this.a&1|16
this.c=a},
cJ(a){this.a=a.a&30|this.a&1
this.c=a.c},
dZ(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.dZ(a)
return}r.cJ(s)}A.hK(null,null,r.b,t.M.a(new A.jr(r,a)))}},
eD(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.eD(a)
return}m.cJ(n)}l.a=m.cY(a)
A.hK(null,null,m.b,t.M.a(new A.jv(l,m)))}},
cX(){var s=t.F.a(this.c)
this.c=null
return this.cY(s)},
cY(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
hl(a){var s,r=this
r.$ti.c.a(a)
s=r.cX()
r.a=8
r.c=a
A.dr(r,s)},
hk(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.cX()
q.cJ(a)
A.dr(q,r)},
e9(a){var s=this.cX()
this.j0(a)
A.dr(this,s)},
h9(a){var s=this.$ti
s.p("1/").a(a)
if(s.p("cR<1>").b(a)){this.hi(a)
return}this.ha(a)},
ha(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.hK(null,null,s.b,t.M.a(new A.jt(s,a)))},
hi(a){A.l9(this.$ti.p("cR<1>").a(a),this,!1)
return},
e2(a){this.a^=2
A.hK(null,null,this.b,t.M.a(new A.js(this,a)))},
$icR:1}
A.jr.prototype={
$0(){A.dr(this.a,this.b)},
$S:2}
A.jv.prototype={
$0(){A.dr(this.b,this.a.a)},
$S:2}
A.ju.prototype={
$0(){A.l9(this.a.a,this.b,!0)},
$S:2}
A.jt.prototype={
$0(){this.a.hl(this.b)},
$S:2}
A.js.prototype={
$0(){this.a.e9(this.b)},
$S:2}
A.jy.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.jQ(t.fO.a(q.d),t.z)}catch(p){s=A.bA(p)
r=A.f5(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.ku(q)
n=k.a
n.c=new A.b6(q,o)
q=n}q.b=!0
return}if(j instanceof A.aO&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.aO){m=k.b.a
l=new A.aO(m.b,m.$ti)
j.jU(new A.jz(l,m),new A.jA(l),t.aT)
q=k.a
q.c=l
q.b=!1}},
$S:2}
A.jz.prototype={
$1(a){this.a.hk(this.b)},
$S:9}
A.jA.prototype={
$2(a,b){A.hJ(a)
t.k.a(b)
this.a.e9(new A.b6(a,b))},
$S:33}
A.jx.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dN(o.p("2/(1)").a(p.d),m,o.p("2/"),n)}catch(l){s=A.bA(l)
r=A.f5(l)
q=s
p=r
if(p==null)p=A.ku(q)
o=this.a
o.c=new A.b6(q,p)
o.b=!0}},
$S:2}
A.jw.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.jC(s)&&p.a.e!=null){p.c=p.a.jv(s)
p.b=!1}}catch(o){r=A.bA(o)
q=A.f5(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ku(p)
m=l.b
m.c=new A.b6(p,n)
p=m}p.b=!0}},
$S:2}
A.hx.prototype={}
A.f2.prototype={$imx:1}
A.hE.prototype={
jS(a){var s,r,q
t.M.a(a)
try{if(B.z===$.a6){a.$0()
return}A.mY(null,null,this,a,t.aT)}catch(q){s=A.bA(q)
r=A.f5(q)
A.lj(A.hJ(s),t.k.a(r))}},
ja(a){return new A.jG(this,t.M.a(a))},
jQ(a,b){b.p("0()").a(a)
if($.a6===B.z)return a.$0()
return A.mY(null,null,this,a,b)},
dN(a,b,c,d){c.p("@<0>").aG(d).p("1(2)").a(a)
d.a(b)
if($.a6===B.z)return a.$1(b)
return A.qJ(null,null,this,a,b,c,d)},
jR(a,b,c,d,e,f){d.p("@<0>").aG(e).aG(f).p("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a6===B.z)return a.$2(b,c)
return A.qI(null,null,this,a,b,c,d,e,f)}}
A.jG.prototype={
$0(){return this.a.jS(this.b)},
$S:2}
A.jT.prototype={
$0(){A.nV(this.a,this.b)},
$S:2}
A.eN.prototype={
gu(a){return this.a},
gav(a){return this.a===0},
gbk(){return new A.eO(this,this.$ti.p("eO<1>"))},
af(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.hn(a)},
hn(a){var s=this.d
if(s==null)return!1
return this.dm(this.em(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.mA(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.mA(q,b)
return r}else return this.hj(b)},
hj(a){var s,r,q=this.d
if(q==null)return null
s=this.em(q,a)
r=this.dm(s,a)
return r<0?null:s[r+1]},
i(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.e7(s==null?m.b=A.la():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.e7(r==null?m.c=A.la():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.la()
p=A.hP(b)&1073741823
o=q[p]
if(o==null){A.lb(q,p,[b,c]);++m.a
m.e=null}else{n=m.dm(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aO(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.p("~(1,2)").a(b)
s=m.e8()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.f(A.aT(m))}},
e8(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.X(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
e7(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.lb(a,b,c)},
em(a,b){return a[A.hP(b)&1073741823]}}
A.eQ.prototype={
dm(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eO.prototype={
gu(a){return this.a.a},
gav(a){return this.a.a===0},
gH(a){var s=this.a
return new A.eP(s,s.e8(),this.$ti.p("eP<1>"))}}
A.eP.prototype={
gP(){var s=this.d
return s==null?this.$ti.c.a(s):s},
F(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.f(A.aT(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iC:1}
A.iy.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:26}
A.G.prototype={
gH(a){return new A.c9(a,this.gu(a),A.b4(a).p("c9<G.E>"))},
bs(a,b){return this.m(a,b)},
gav(a){return this.gu(a)===0},
gff(a){return this.gu(a)!==0},
bX(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(this.m(a,s)===b)return!0
if(r!==this.gu(a))throw A.f(A.aT(a))}return!1},
da(a,b){return A.ez(a,b,null,A.b4(a).p("G.E"))},
fn(a,b){return A.ez(a,0,A.hL(b,"count",t.p),A.b4(a).p("G.E"))},
b8(a,b,c){var s,r=this.gu(a)
A.b9(b,c,r)
A.b9(b,c,this.gu(a))
s=A.b4(a).p("G.E")
s=A.t(A.ez(a,b,c,s),s)
return s},
aD(a,b,c,d){var s
A.b4(a).p("G.E?").a(d)
A.b9(b,c,this.gu(a))
for(s=b;s<c;++s)this.i(a,s,d)},
am(a,b,c,d,e){var s,r,q,p,o
A.b4(a).p("e<G.E>").a(d)
A.b9(b,c,this.gu(a))
s=c-b
if(s===0)return
A.cp(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.kr(d,e).fo(0,!1)
r=0}p=J.a1(q)
if(r+s>p.gu(q))throw A.f(A.m1())
if(r<b)for(o=s-1;o>=0;--o)this.i(a,b+o,p.m(q,r+o))
else for(o=0;o<s;++o)this.i(a,b+o,p.m(q,r+o))},
bw(a,b,c,d){return this.am(a,b,c,d,0)},
fC(a,b,c){A.b4(a).p("e<G.E>").a(c)
this.bw(a,b,b+c.length,c)},
A(a){return A.m2(a,"[","]")},
$iB:1,
$ie:1,
$ip:1}
A.T.prototype={
dF(a,b,c){var s=A.l(this)
return A.me(this,s.p("T.K"),s.p("T.V"),b,c)},
aO(a,b){var s,r,q,p=A.l(this)
p.p("~(T.K,T.V)").a(b)
for(s=this.gbk(),s=s.gH(s),p=p.p("T.V");s.F();){r=s.gP()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
gu(a){var s=this.gbk()
return s.gu(s)},
gav(a){var s=this.gbk()
return s.gav(s)},
A(a){return A.kJ(this)},
$ia9:1}
A.iA.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.A(a)
r.a=(r.a+=s)+": "
s=A.A(b)
r.a+=s},
$S:10}
A.hC.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ho(b):s}},
gu(a){return this.b==null?this.c.a:this.cL().length},
gav(a){return this.gu(0)===0},
gbk(){if(this.b==null){var s=this.c
return new A.bm(s,A.l(s).p("bm<1>"))}return new A.hD(this)},
aO(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.aO(0,b)
s=o.cL()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.jR(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.f(A.aT(o))}},
cL(){var s=t.bE.a(this.c)
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
ho(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.jR(this.a[a])
return this.b[a]=s}}
A.hD.prototype={
gu(a){return this.a.gu(0)},
bs(a,b){var s=this.a
if(s.b==null)s=s.gbk().bs(0,b)
else{s=s.cL()
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]}return s},
gH(a){var s=this.a
if(s.b==null){s=s.gbk()
s=s.gH(s)}else{s=s.cL()
s=new J.bT(s,s.length,A.ah(s).p("bT<1>"))}return s}}
A.jN.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:11}
A.jM.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:11}
A.jJ.prototype={
bK(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.b9(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.f(A.b7("Invalid value in input: "+p,null,null))
return this.hp(a,0,r)}}return A.dj(a,0,r)},
hp(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.U((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.dz.prototype={
gd5(){return B.cn}}
A.hX.prototype={
bK(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.jm("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").jq(a,0,s,!0)
s.toString
return A.dj(s,0,null)}}
A.jm.prototype={
jq(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.a.Y(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.pJ(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.hW.prototype={
bK(a){var s,r,q,p=A.b9(0,null,a.length)
if(0===p)return new Uint8Array(0)
s=new A.jl()
r=s.dG(a,0,p)
r.toString
q=s.a
if(q<-1)A.a8(A.b7("Missing padding character",a,p))
if(q>0)A.a8(A.b7("Invalid length, must be multiple of four",a,p))
s.a=-1
return r}}
A.jl.prototype={
dG(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.my(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.pG(a,b,c,q)
r.a=A.pI(a,b,c,s,0,r.a)
return s}}
A.ay.prototype={}
A.fi.prototype={}
A.fk.prototype={}
A.e3.prototype={
A(a){var s=A.fl(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.fY.prototype={
A(a){return"Cyclic error in JSON stringify"}}
A.fX.prototype={
jg(a,b){var s=A.qF(a,this.gjn().a)
return s},
jp(a,b){var s=A.pM(a,this.gd5().b,null)
return s},
gd5(){return B.d1},
gjn(){return B.d0}}
A.iu.prototype={}
A.it.prototype={}
A.jD.prototype={
fu(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.p.c1(a,r,q)
r=q+1
o=A.U(92)
s.a+=o
o=A.U(117)
s.a+=o
o=A.U(100)
s.a+=o
o=p>>>8&15
o=A.U(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.U(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.U(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.p.c1(a,r,q)
r=q+1
o=A.U(92)
s.a+=o
switch(p){case 8:o=A.U(98)
s.a+=o
break
case 9:o=A.U(116)
s.a+=o
break
case 10:o=A.U(110)
s.a+=o
break
case 12:o=A.U(102)
s.a+=o
break
case 13:o=A.U(114)
s.a+=o
break
default:o=A.U(117)
s.a+=o
o=A.U(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.U(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.U(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.p.c1(a,r,q)
r=q+1
o=A.U(92)
s.a+=o
o=A.U(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.p.c1(a,r,m)},
dd(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.f(new A.fY(a,null))}B.c.M(s,a)},
d8(a){var s,r,q,p,o=this
if(o.ft(a))return
o.dd(a)
try{s=o.b.$1(a)
if(!o.ft(s)){q=A.m8(a,null,o.geB())
throw A.f(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.bA(p)
q=A.m8(a,r,o.geB())
throw A.f(q)}},
ft(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.A(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.fu(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dd(a)
q.k8(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dd(a)
r=q.k9(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
k8(a){var s,r,q=this.c
q.a+="["
s=J.a1(a)
if(s.gff(a)){this.d8(s.m(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.d8(s.m(a,r))}}q.a+="]"},
k9(a){var s,r,q,p,o,n,m=this,l={}
if(a.gav(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.X(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aO(0,new A.jE(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.fu(A.b1(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.d8(r[n])}p.a+="}"
return!0}}
A.jE.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.c.i(s,r.a++,a)
B.c.i(s,r.a++,b)},
$S:10}
A.jC.prototype={
geB(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.fZ.prototype={
bL(a){var s
t.L.a(a)
s=B.d2.bK(a)
return s}}
A.iv.prototype={}
A.hs.prototype={
jf(a,b){t.L.a(a)
return(b===!0?B.kk:B.kj).bK(a)}}
A.ht.prototype={
bK(a){return new A.hH(this.a).ea(t.L.a(a),0,null,!0)}}
A.hH.prototype={
ea(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.b9(b,c,a.length)
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.q3(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.q2(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dh(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.q4(o)
l.b=0
throw A.f(A.b7(m,a,p+l.c))}return n},
dh(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.Y(b+c,2)
r=q.dh(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dh(a,s,c,d)}return q.jj(a,b,c,d)},
jj(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.cq(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.U(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.U(h)
e.a+=p
break
case 65:p=A.U(h)
e.a+=p;--d
break
default:p=A.U(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
p=A.U(a[l])
e.a+=p}else{p=A.dj(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.U(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.bW.prototype={
U(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bW)if(this.a===b.a)s=this.b===b.b
return s},
gG(a){return A.kK(this.a,this.b,B.K,B.K)},
bJ(a,b){var s
t.dy.a(b)
s=B.a.bJ(this.a,b.a)
if(s!==0)return s
return B.a.bJ(this.b,b.b)},
A(a){var s=this,r=A.nT(A.oD(s)),q=A.fj(A.oB(s)),p=A.fj(A.ox(s)),o=A.fj(A.oy(s)),n=A.fj(A.oA(s)),m=A.fj(A.oC(s)),l=A.lI(A.oz(s)),k=s.b,j=k===0?"":A.lI(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaS:1}
A.jp.prototype={
A(a){return this.ae()}}
A.P.prototype={
gca(){return A.ow(this)}}
A.f8.prototype={
A(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fl(s)
return"Assertion failed"}}
A.bs.prototype={}
A.aQ.prototype={
gdk(){return"Invalid argument"+(!this.a?"(s)":"")},
gdj(){return""},
A(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.A(p),n=s.gdk()+q+o
if(!s.a)return n
return n+s.gdj()+": "+A.fl(s.gdK())},
gdK(){return this.b}}
A.bo.prototype={
gdK(){return A.mQ(this.b)},
gdk(){return"RangeError"},
gdj(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.A(q):""
else if(q==null)s=": Not greater than or equal to "+A.A(r)
else if(q>r)s=": Not in inclusive range "+A.A(r)+".."+A.A(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.A(r)
return s}}
A.fz.prototype={
gdK(){return A.v(this.b)},
gdk(){return"RangeError"},
gdj(){if(A.v(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$ibo:1,
gu(a){return this.f}}
A.eB.prototype={
A(a){return"Unsupported operation: "+this.a}}
A.hq.prototype={
A(a){return"UnimplementedError: "+this.a}}
A.di.prototype={
A(a){return"Bad state: "+this.a}}
A.fg.prototype={
A(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fl(s)+"."}}
A.h2.prototype={
A(a){return"Out of Memory"},
gca(){return null},
$iP:1}
A.ex.prototype={
A(a){return"Stack Overflow"},
gca(){return null},
$iP:1}
A.jq.prototype={
A(a){return"Exception: "+this.a}}
A.ap.prototype={
A(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.p.c1(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.p.c1(e,i,j)+k+"\n"+B.p.d9(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.A(f)+")"):g}}
A.e.prototype={
gu(a){var s,r=this.gH(this)
for(s=0;r.F();)++s
return s},
gav(a){return!this.gH(this).F()},
bs(a,b){var s,r
A.cp(b,"index")
s=this.gH(this)
for(r=b;s.F();){if(r===0)return s.gP();--r}throw A.f(A.kB(b,b-r,this,"index"))},
A(a){return A.oe(this,"(",")")}}
A.ar.prototype={
gG(a){return A.D.prototype.gG.call(this,0)},
A(a){return"null"}}
A.D.prototype={$iD:1,
U(a,b){return this===b},
gG(a){return A.et(this)},
A(a){return"Instance of '"+A.h8(this)+"'"},
gaE(a){return A.rb(this)},
toString(){return this.A(this)}}
A.hF.prototype={
A(a){return""},
$idh:1}
A.cq.prototype={
gu(a){return this.a.length},
A(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ioN:1}
A.iB.prototype={
A(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.kc.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.p("1/?").a(this.b.p("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.a8(A.l3("Future already completed"))
s.h9(r.p("1/").a(a))
return null},
$S:12}
A.kd.prototype={
$1(a){if(a==null)return this.a.f7(new A.iB(a===undefined))
return this.a.f7(a)},
$S:12}
A.jW.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.mX(a))return a
s=this.a
a.toString
if(s.af(a))return s.m(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.a8(A.aj(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.hL(!0,"isUtc",t.y)
return new A.bW(r,0,!0)}if(a instanceof RegExp)throw A.f(A.bg("structured clone of RegExp",null))
if(a instanceof Promise)return A.ro(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.J(p,p)
s.i(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.ak(n),p=s.gH(n);p.F();)m.push(A.n6(p.gP()))
for(l=0;l<s.gu(n);++l){k=s.m(n,l)
if(!(l<m.length))return A.a(m,l)
j=m[l]
if(k!=null)o.i(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.i(0,a,o)
h=A.v(a.length)
for(s=J.ak(i),l=0;l<h;++l)o.push(this.$1(s.m(i,l)))
return o}return a},
$S:23}
A.ia.prototype={
fR(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a1.length
for(s=0;s<a0;++s){r=a1[s]
if(r>a.b)a.b=r
if(r<a.c)a.c=r}r=a.b
if(r>15)throw A.f(B.cL)
q=r+1
p=new Uint16Array(q)
for(o=0;o<a0;++o){n=a1[o]
if(n!==0){if(!(n>=0&&n<q))return A.a(p,n)
m=p[n]
if(!(n<q))return A.a(p,n)
p[n]=m+1}}for(l=1,k=1;k<=r;++k){l=(l<<1>>>0)-p[k]
if(l<0)throw A.f(B.cR)}if(l>0)q=r>(a2?0:1)
else q=!1
if(q)throw A.f(B.cQ)
j=B.a.X(1,r)
r=a.a=new Uint32Array(j)
for(q=a.b,m=a1.length,i=1,h=0,g=2;i<=q;){for(f=i<<16,s=0;s<a0;++s){if(!(s<m))return A.a(a1,s)
if(a1[s]===i){for(e=h,d=0,c=0;c<i;++c){d=(d<<1|e&1)>>>0
e=e>>>1}for(b=(f|s)>>>0,c=d;c<j;c+=g){if(!(c>=0&&c<j))return A.a(r,c)
r[c]=b}++h}}++i
h=h<<1>>>0
g=g<<1>>>0}}}
A.jg.prototype={}
A.jP.prototype={
jl(a,b,c,d,e){var s,r=!1,q=a.a
a.a=B.ap
try{s=A.rd("zlib",!1,r,new A.jQ(this,a,b,!1,!1))
return s}finally{a.sjb(q)}},
hr(a,b,c,d){var s,r,q,p,o,n,m=a.c,l=a.d
l===$&&A.d()
if(m>=l)return!1
A:{l=a.b
if((l==null?0:l.length-m)<2)return!1
l.toString
s=a.c=m+1
r=l.length
if(!(m>=0&&m<r))return A.a(l,m)
q=l[m]
a.c=s+1
if(!(s>=0&&s<r))return A.a(l,s)
p=l[s]
if((q&15)!==8)return!1
if(q>>>4>7)return!1
if(B.a.a7(q*256+p,31)!==0)return!1
if((p>>>5&1)!==0){a.k()
return!1}m=new A.d9(new Uint8Array(32768),B.ao)
o=new A.ij(a,m,!0)
o.i6()
m=o.c
n=J.Z(B.f.gB(m.c),m.c.byteOffset,m.b)
if(!o.f){b.aV(n)
return!1}m=a.b
if((m==null?0:m.length-a.c)<4){b.aV(n)
return!1}a.k()
break A}if(n!=null)b.aV(n)
return!0}}
A.jQ.prototype={
$0(){var s=this
return s.a.hr(s.b,s.c,s.d,s.e)},
$S:20}
A.ij.prototype={
gbq(){var s=this.a
if(s==null)return s
s.d===$&&A.d()
return s},
i6(){var s,r,q,p=this
p.w=p.r=0
if(p.gbq()==null)return
s=p.c
if(!(s instanceof A.d9)){p.d=s
p.c=A.kL(32768)}try{for(;;){r=p.gbq()
q=r.c
r=r.d
r===$&&A.d()
if(!(q<r))break
if(!p.ik())return
p.ek(32768)}}finally{p.ek(0)
p.c=s
p.d=null}},
ek(a){var s,r,q,p,o=this.d
if(o==null)return
s=this.c
r=s.b-a
if(r<(a===0?1:1048576))return
q=s.dO()
o.aV(A.ms(q,0,r))
p=A.kL(2097152)
p.aV(A.ms(q,r,null))
this.c=p},
ik(){var s,r,q,p=this,o=p.gbq()
if(o!=null){s=o.c
r=o.d
r===$&&A.d()
r=s>=r
s=r}else s=!0
if(s)return!1
q=p.b9(3)
s=(q&1)===0
switch(B.a.j(q,1)){case 0:if(p.iv()===-1)return!1
break
case 1:if(p.ee($.nh(),$.ng())===-1)return!1
break
case 2:if(p.il()===-1)return!1
break
default:return!1}if(!s)p.f=!0
return s},
b9(a){var s,r,q,p,o=this
if(a===0)return 0
while(s=o.w,s<a){s=o.gbq()
r=s.c
s=s.d
s===$&&A.d()
if(r>=s)return-1
s=o.gbq()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=o.r
r=o.w
o.r=(s|B.a.X(q,r))>>>0
o.w=r+8}r=o.r
p=B.a.O(1,a)
o.r=B.a.a0(r,a)
o.w=s-a
return(r&p-1)>>>0},
dz(a){var s,r,q,p,o,n,m=this,l=a.a
l===$&&A.d()
s=a.b
while(m.w<s){r=m.gbq()
q=r.c
r=r.d
r===$&&A.d()
if(q>=r)break
r=m.gbq()
q=r.b
q.toString
r=r.c++
if(!(r>=0&&r<q.length))return A.a(q,r)
p=q[r]
r=m.r
q=m.w
m.r=(r|B.a.X(p,q))>>>0
m.w=q+8}r=m.r
q=(r&B.a.X(1,s)-1)>>>0
if(!(q<l.length))return A.a(l,q)
o=l[q]
n=o>>>16
if(n===0||n>m.w)return-1
m.r=B.a.a0(r,n)
m.w-=n
return o&65535},
iv(){var s,r,q,p=this
p.w=p.r=0
s=p.b9(16)
if(s!==(p.b9(16)^65535)>>>0)return-1
if(s>p.gbq().gu(0))return-1
r=p.gbq()
q=r.fL(s,r.c)
r.c=r.c+q.gu(0)
p.c.ka(q)
return 0},
il(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b9(5)
if(f===-1)return-1
f+=257
if(f>286)return-1
s=g.b9(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=g.b9(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=g.b9(3)
if(o===-1)return-1
n=B.iu[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=g.eO(q,!0)
if(m==null)return-1
n=f+s
l=new Uint8Array(n)
k=J.Z(B.f.gB(l),0,f)
j=J.Z(B.f.gB(l),f,s)
if(g.i7(n,m,l)===-1)return-1
i=g.eN(k)
n=i==null
h=n?null:g.eN(j)
if(n||h==null)return-1
return g.ee(i,h)},
eO(a,b){var s,r
t.L.a(a)
try{s=A.kz(a,b)
return s}catch(r){if(A.bA(r) instanceof A.ap)throw r
else throw r}},
eN(a){return this.eO(a,!1)},
ee(a,b){var s,r,q,p,o,n,m,l,k,j=this
for(;;){s=j.dz(a)
if(s<0||s>285)return-1
if(s===256)break
if(s<256){j.c.C(s&255)
continue}r=s-257
if(!(r>=0&&r<31))return A.a(B.bP,r)
q=j.b9(B.bP[r])
if(q<0)return-1
if(!(r<29))return A.a(B.bG,r)
p=B.bG[r]
o=j.dz(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.bm,o)
n=j.b9(B.bm[o])
if(n<0)return-1
m=B.iP[o]+n
if(m<1||m>j.c.b)return-1
j.c.k0(m,p+q)}while(p=j.w,p>=8){j.w=p-8
p=j.gbq()
l=p.c
if(1>=l)p.c=0
else{k=p.d
k===$&&A.d()
if(1<=l-k)p.c=k
else p.c=l-1}}return 0},
i7(a,b,c){var s,r,q,p,o,n,m,l,k=this
for(s=0,r=0;r<a;){q=k.dz(b)
if(q===-1)return-1
p=0
switch(q){case 16:if(r===0)return-1
o=k.b9(2)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=s}break
case 17:o=k.b9(3)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
case 18:o=k.b9(7)
if(o===-1)return-1
o+=11
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
default:if(q<0||q>15)return-1
l=r+1
c.$flags&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=q
r=l
s=q
break}}return 0}}
A.jf.prototype={
bM(a){var s,r
t.L.a(a)
s=A.kL(32768)
B.cx.jl(A.kC(a,B.ap,null,null),s,!1,null,!1)
r=s.dO()
return r}}
A.cC.prototype={}
A.f7.prototype={}
A.hV.prototype={}
A.dA.prototype={
ae(){return"ByteOrder."+this.b}}
A.jo.prototype={}
A.fA.prototype={
gu(a){var s=this.b
return s==null?0:s.length-this.c},
fL(a,b){var s=this.b
if(s==null)return A.kC(A.j([],t.t),B.ao,null,null)
return A.kC(s,this.a,a,b)},
E(){var s,r=this.b
r.toString
s=this.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
return r[s]}}
A.fB.prototype={
k(){var s=this,r=s.E(),q=s.E(),p=s.E(),o=s.E()
if(s.a===B.ap)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
sjb(a){this.a=t.fA.a(a)}}
A.d9.prototype={
dO(){return J.Z(B.f.gB(this.c),this.c.byteOffset,this.b)},
C(a){var s,r,q=this
if(q.b===q.c.length)q.ij()
s=q.c
r=q.b++
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a},
k5(a,b){var s,r,q,p,o=this
t.L.a(a)
b=a.length
while(s=o.b,r=s+b,q=o.c,p=q.length,r>p)o.cT(r-p)
B.f.bw(q,s,r,a)
o.b+=b},
aV(a){return this.k5(a,null)},
ka(a){var s,r,q,p,o,n,m=this
for(;;){s=m.b
r=a.b
q=r==null
p=q?0:r.length-a.c
o=m.c
n=o.length
if(!(s+p>n))break
m.cT(s+(q?0:r.length-a.c)-n)}if(!q)B.f.am(o,s,s+a.gu(0),r,a.c)
m.b=m.b+a.gu(0)},
k0(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
while(s=i.b,r=s+b,q=i.c,p=q.length,r>p)i.cT(r-p)
o=s-a
if(a>=b)B.f.am(q,s,r,q,o)
else for(n=q.$flags|0,m=o;s<r;s=l,m=k){l=s+1
k=m+1
if(!(m>=0&&m<p))return A.a(q,m)
j=q[m]
n&2&&A.b(q)
if(!(s>=0))return A.a(q,s)
q[s]=j}i.b+=b},
cT(a){var s,r=this.c,q=r.length,p=q+(a==null?1:a),o=q===0?32768:q*2
if(o<p)o=p
s=new Uint8Array(o)
B.f.bw(s,0,q,r)
this.c=s},
ij(){return this.cT(null)},
gu(a){return this.b}}
A.h3.prototype={}
A.i0.prototype={
ae(){return"Channel."+this.b}}
A.N.prototype={
F(){var s=this.b
return++this.a<s.gu(s)},
gP(){return this.b.m(0,this.a)},
$iC:1}
A.cE.prototype={
R(){return new A.cE(new Uint16Array(A.z(this.a)))},
gI(){return B.D},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=A.K(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gN(){return this.gn()},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
sn(a){var s,r=this.a,q=r.length
if(q!==0){s=A.K(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gq(){var s,r=this.a
if(r.length>1){r=r[1]
s=$.Q
s=s!=null?s:A.S()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
sq(a){var s,r=this.a
if(r.length>1){s=A.K(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gt(){var s,r=this.a
if(r.length>2){r=r[2]
s=$.Q
s=s!=null?s:A.S()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
st(a){var s,r=this.a
if(r.length>2){s=A.K(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s,r=this.a
if(r.length>3){r=r[3]
s=$.Q
s=s!=null?s:A.S()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gW(){return this.gv()/1},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){s=A.K(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cF.prototype={
R(){return new A.cF(new Float32Array(A.z(this.a)))},
gI(){return B.I},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.b(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=a}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s=this.a
if(s.length>1){s.$flags&2&&A.b(s)
s[1]=a}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s=this.a
if(s.length>2){s.$flags&2&&A.b(s)
s[2]=a}},
gv(){var s=this.a
return s.length>3?s[3]:1},
gW(){return this.gv()/1},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cG.prototype={
R(){return new A.cG(new Float64Array(A.z(this.a)))},
gI(){return B.L},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.b(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=a}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s=this.a
if(s.length>1){s.$flags&2&&A.b(s)
s[1]=a}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s=this.a
if(s.length>2){s.$flags&2&&A.b(s)
s[2]=a}},
gv(){var s=this.a
return s.length>3?s[3]:1},
gW(){return this.gv()/1},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cH.prototype={
R(){return new A.cH(new Int16Array(A.z(this.a)))},
gI(){return B.N},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.h(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s,r=this.a
if(r.length>1){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s,r=this.a
if(r.length>2){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gW(){return this.gv()/32767},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.h(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cI.prototype={
R(){return new A.cI(new Int32Array(A.z(this.a)))},
gI(){return B.O},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s=this.a,r=s.length
if(r!==0){A.v(a)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=a}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s,r=this.a
if(r.length>1){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s,r=this.a
if(r.length>2){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gW(){return this.gv()/2147483647},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.h(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cJ.prototype={
R(){return new A.cJ(new Int8Array(A.z(this.a)))},
gI(){return B.M},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.h(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s,r=this.a
if(r.length>1){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s,r=this.a
if(r.length>2){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gW(){return this.gv()/127},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.h(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cL.prototype={
R(){var s=this.b
s===$&&A.d()
return new A.cL(this.a,s)},
gI(){return B.w},
gT(){return null},
bR(a){var s
if(a<this.a){s=this.b
s===$&&A.d()
s=B.a.a1(s,7-a)&1}else s=0
return s},
bF(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.d()
this.b=b!==0?(s|B.a.X(1,a))>>>0:(s&~(B.a.X(1,a)&255))>>>0},
m(a,b){return this.bR(b)},
i(a,b,c){return this.bF(b,c)},
gN(){return this.bR(0)},
gn(){return this.bR(0)},
sn(a){this.bF(0,a)},
gq(){return this.bR(1)},
sq(a){this.bF(1,a)},
gt(){return this.bR(2)},
st(a){this.bF(2,a)},
gv(){return this.bR(3)},
gW(){return this.bR(3)/1},
gag(){return A.V(this)},
ab(a){this.a8(a.gn(),a.gq(),a.gt(),a.gv())},
a8(a,b,c,d){var s=this
s.bF(0,a)
s.bF(1,b)
s.bF(2,c)
s.bF(3,d)},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1,
gu(a){return this.a}}
A.cM.prototype={
R(){return new A.cM(new Uint16Array(A.z(this.a)))},
gI(){return B.l},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.h(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s,r=this.a
if(r.length>1){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s,r=this.a
if(r.length>2){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gW(){return this.gv()/65535},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.h(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cN.prototype={
R(){var s=this.b
s===$&&A.d()
return new A.cN(this.a,s)},
gI(){return B.A},
gT(){return null},
bS(a){var s
if(a<this.a){s=this.b
s===$&&A.d()
s=B.a.a1(s,6-(a<<1>>>0))&3}else s=0
return s},
bG(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.ba,a)
s=B.ba[a]
r=B.b.h(b)
q=this.b
q===$&&A.d()
this.b=(q&s|B.a.X(r&3,6-(a<<1>>>0)))>>>0},
m(a,b){return this.bS(b)},
i(a,b,c){return this.bG(b,c)},
gN(){return this.bS(0)},
gn(){return this.bS(0)},
sn(a){this.bG(0,a)},
gq(){return this.bS(1)},
sq(a){this.bG(1,a)},
gt(){return this.bS(2)},
st(a){this.bG(2,a)},
gv(){return this.bS(3)},
gW(){return this.bS(3)/3},
gag(){return A.V(this)},
ab(a){this.a8(a.gn(),a.gq(),a.gt(),a.gv())},
a8(a,b,c,d){var s=this
s.bG(0,a)
s.bG(1,b)
s.bG(2,c)
s.bG(3,d)},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1,
gu(a){return this.a}}
A.cO.prototype={
R(){return new A.cO(new Uint32Array(A.z(this.a)))},
gI(){return B.J},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.h(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s,r=this.a
if(r.length>1){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s,r=this.a
if(r.length>2){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gW(){return this.gv()/4294967295},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.h(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.cP.prototype={
R(){return new A.cP(this.a,new Uint8Array(A.z(this.b)))},
gI(){return B.B},
gT(){return null},
bT(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.a1(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.a1(s[1],4-((a&1)<<2))&15}}return s},
bI(a,b){var s,r,q,p
if(a>=this.a)return
s=B.a.K(B.b.h(b),0,15)
if(a>1){a&=1
r=1}else r=0
if(a===0){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.b(q)
q[r]=(p&15|s<<4)>>>0}else if(a===1){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.b(q)
q[r]=(p&240|s)>>>0}},
m(a,b){return this.bT(b)},
i(a,b,c){return this.bI(b,c)},
gN(){return this.bT(0)},
gn(){return this.bT(0)},
sn(a){this.bI(0,a)},
gq(){return this.bT(1)},
sq(a){this.bI(1,a)},
gt(){return this.bT(2)},
st(a){this.bI(2,a)},
gv(){return this.bT(3)},
gW(){return this.bT(3)/15},
gag(){return A.V(this)},
ab(a){this.a8(a.gn(),a.gq(),a.gt(),a.gv())},
a8(a,b,c,d){var s=this
s.bI(0,a)
s.bI(1,b)
s.bI(2,c)
s.bI(3,d)},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1,
gu(a){return this.a}}
A.bC.prototype={
fN(a,b,c,d){var s,r=this.a
r.$flags&2&&A.b(r)
s=r.length
if(0>=s)return A.a(r,0)
r[0]=a
if(1>=s)return A.a(r,1)
r[1]=b
if(2>=s)return A.a(r,2)
r[2]=c
if(3>=s)return A.a(r,3)
r[3]=d},
R(){return new A.bC(new Uint8Array(A.z(this.a)))},
gI(){return B.e},
gu(a){return this.a.length},
gT(){return null},
m(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gN(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gn(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sn(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.h(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gq(){var s=this.a
return s.length>1?s[1]:0},
sq(a){var s,r=this.a
if(r.length>1){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gt(){var s=this.a
return s.length>2?s[2]:0},
st(a){var s,r=this.a
if(r.length>2){s=B.b.h(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:255},
gW(){return this.gv()/255},
gag(){return A.V(this)},
ab(a){var s,r,q=this
q.sn(a.gn())
q.sq(a.gq())
q.st(a.gt())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.h(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gH(a){return new A.N(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gG(b)
r=A.t(this,A.l(this).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.fe.prototype={}
A.cK.prototype={}
A.dC.prototype={
R(){return new A.dC(this.a)},
gI(){return B.e},
gu(a){return 4},
gT(){return null},
m(a,b){var s
if(b>=0&&b<4){s=b<<3>>>0
s=B.a.a0((this.a&B.a.O(255,s))>>>0,s)}else s=0
return s},
i(a,b,c){},
ab(a){},
gN(){return this.m(0,0)},
gn(){return this.m(0,0)},
sn(a){},
gq(){return this.m(0,1)},
sq(a){},
gt(){return this.m(0,2)},
st(a){},
gv(){return this.m(0,3)},
gW(){return this.gv()/255},
gag(){return A.V(this)},
gH(a){return new A.N(this)},
U(a,b){var s,r,q=this
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===q.gu(q)){s=b.gG(b)
r=A.t(q,A.l(q).p("e.E"))
s=s===A.m(r)}return s},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
$ix:1}
A.fh.prototype={
gv(){return 255},
gW(){return 1},
gu(a){return 3}}
A.ao.prototype={
ae(){return"Format."+this.b}}
A.fa.prototype={
ae(){return"BlendMode."+this.b}}
A.bX.prototype={
cE(a){var s=$.lv()
if(!s.af(a))return"<unknown>"
return s.m(0,a).a},
A(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=new A.R(s,s.r,s.e,A.l(s).p("R<1>")),q=t.p,p=t.r,o=t.N,n=t.P,m="";r.F();){l=r.d
m+=l+"\n"
k=s.m(0,l)
for(l=k.a,l=new A.R(l,l.r,l.e,A.l(l).p("R<1>"));l.F();){j=l.d
i=k.m(0,j)
m=i==null?m+("\t"+e.cE(j)+"\n"):m+("\t"+e.cE(j)+": "+i.A(0)+"\n")}for(l=k.b.a,j=new A.R(l,l.r,l.e,A.l(l).p("R<1>"));j.F();){h=j.d
m+=h+"\n"
if(!l.af(h))l.i(0,h,new A.aC(A.J(q,p),new A.aJ(A.J(o,n))))
g=l.m(0,h)
for(h=g.a,h=new A.R(h,h.r,h.e,A.l(h).p("R<1>"));h.F();){f=h.d
i=g.m(0,f)
m=i==null?m+("\t"+e.cE(f)+"\n"):m+("\t"+e.cE(f)+": "+i.A(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
aK(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="exif",a7="interop",a8=a9.b
a9.b=!0
a9.az(19789)
a9.az(42)
a9.aI(8)
s=a5.a
if(s.m(0,"ifd0")==null)s.i(0,"ifd0",new A.aC(A.J(t.p,t.r),new A.aJ(A.J(t.N,t.P))))
r=s.m(0,"ifd1")
q=a5.b
p=q!=null&&q.length!==0&&r!=null
if(p){r.i(0,513,A.kA(0))
r.i(0,514,A.kA(q.length))}else if(r!=null){o=r.a
o.c7(0,513)
o.c7(0,514)}n=A.j(["ifd0"],t.s)
for(o=new A.R(s,s.r,s.e,A.l(s).p("R<1>"));o.F();){m=o.d
if(m!=="ifd0")B.c.M(n,m)}o=t.N
m=t.p
l=A.J(o,m)
for(k=n.length,j=t.r,i=t.P,h=8,g=0;g<n.length;n.length===k||(0,A.ab)(n),++g){f=n[g]
e=s.m(0,f)
e.toString
l.i(0,f,h)
d=e.b.a
if(d.af(a6)){c=new Uint32Array(1)
c[0]=0
e.i(0,34665,new A.aV(c))}else e.a.c7(0,34665)
if(d.af(a7)){c=new Uint32Array(1)
c[0]=0
e.i(0,40965,new A.aV(c))}else e.a.c7(0,40965)
if(d.af("gps")){c=new Uint32Array(1)
c[0]=0
e.i(0,34853,new A.aV(c))}else e.a.c7(0,34853)
e=e.a
h+=2+12*e.a+4
for(e=new A.aq(e,e.r,e.e,A.l(e).p("aq<2>"));e.F();){c=e.d
b=c.gaw().a
if(!(b<14))return A.a(B.t,b)
a=B.t[b]*c.gu(c)
if(a>4)h+=a}for(e=new A.R(d,d.r,d.e,A.l(d).p("R<1>"));e.F();){c=e.d
if(!d.af(c))d.i(0,c,new A.aC(A.J(m,j),new A.aJ(A.J(o,i))))
b=d.m(0,c)
b.toString
l.i(0,c,h)
b=b.a
a0=2+12*b.a
for(c=new A.aq(b,b.r,b.e,A.l(b).p("aq<2>"));c.F();){b=c.d
a1=b.gaw().a
if(!(a1<14))return A.a(B.t,a1)
a=B.t[a1]*b.gu(b)
if(a>4)a0+=a}h+=a0}}if(p)r.m(0,513).bh(h)
a2=n.length
for(k=a2-1,a3=0;a3<a2;++a3){if(!(a3<n.length))return A.a(n,a3)
f=n[a3]
a4=s.m(0,f)
e=a4.b.a
if(e.af(a6)){d=a4.m(0,34665)
d.toString
c=l.m(0,a6)
c.toString
d.bh(c)}if(e.af(a7)){d=a4.m(0,40965)
d.toString
c=l.m(0,a7)
c.toString
d.bh(c)}if(e.af("gps")){d=a4.m(0,34853)
d.toString
c=l.m(0,"gps")
c.toString
d.bh(c)}d=l.m(0,f)
d.toString
a5.eW(a9,a4,d+2+12*a4.a.a+4)
if(a3===k)a9.aI(0)
else{d=a3+1
if(!(d<n.length))return A.a(n,d)
d=l.m(0,n[d])
d.toString
a9.aI(d)}a5.eX(a9,a4)
for(d=new A.R(e,e.r,e.e,A.l(e).p("R<1>"));d.F();){c=d.d
if(!e.af(c))e.i(0,c,new A.aC(A.J(m,j),new A.aJ(A.J(o,i))))
b=e.m(0,c)
b.toString
c=l.m(0,c)
c.toString
a5.eW(a9,b,c+2+12*b.a.a)
a5.eX(a9,b)}}if(p)a9.aV(q)
a9.b=a8},
eW(a,b,c){var s,r,q,p,o,n,m=b.a
a.az(m.a)
for(m=new A.R(m,m.r,m.e,A.l(m).p("R<1>"));m.F();){s=m.d
r=b.m(0,s)
r.toString
q=s===273
p=q&&r.gaw()===B.E?B.n:r.gaw()
o=q&&r.gaw()===B.E?1:r.gu(r)
a.az(s)
a.az(p.a)
a.aI(o)
s=r.gaw().a
if(!(s<14))return A.a(B.t,s)
n=B.t[s]*r.gu(r)
if(n<=4){r.aK(a)
while(n<4){a.C(0);++n}}else{a.aI(c)
c+=n}}return c},
eX(a,b){var s,r,q
for(s=b.a,s=new A.aq(s,s.r,s.e,A.l(s).p("aq<2>"));s.F();){r=s.d
q=r.gaw().a
if(!(q<14))return A.a(B.t,q)
if(B.t[q]*r.gu(r)>4)r.aK(a)}},
c_(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="Length must be a non-negative integer: ",c5=c6.e
c6.e=!0
s=c6.d
a2=c6.l()
if(a2===18761){c6.e=!1
if(c6.l()!==42){c6.e=c5
return!1}}else if(a2===19789){c6.e=!0
if(c6.l()!==42){c6.e=c5
return!1}}else return!1
r=c6.k()
q=0
a3=c3.a
a4=t.gn
a5=c6.c
a6=t.p
a7=t.r
a8=t.N
a9=t.P
for(;;){b0=r
if(typeof b0!=="number")return b0.fA()
if(!(b0>0))break
try{b0=s
b1=r
if(typeof b0!=="number")return b0.b5()
if(typeof b1!=="number")return A.cz(b1)
b1=b0+b1
c6.d=b1
if(a5-b1<2)break
p=new A.aC(A.J(a6,a7),new A.aJ(A.J(a8,a9)))
o=c6.l()
b0=o
if(typeof b0!=="number")return b0.d9()
if(b0*12>a5-c6.d)break
n=o
b0=n
if(b0<0)A.a8(A.bg(c4+A.A(b0),null))
m=A.j(new Array(b0),a4)
l=0
for(;;){b0=l
b1=n
if(typeof b0!=="number")return b0.fB()
if(typeof b1!=="number")return A.cz(b1)
if(!(b0<b1))break
J.w(m,l,c3.eF(c6,s))
b0=l
if(typeof b0!=="number")return b0.b5()
l=b0+1}k=m
for(b0=k,b1=b0.length,b2=0;b2<b0.length;b0.length===b1||(0,A.ab)(b0),++b2){j=b0[b2]
if(j.b!=null){b3=j.a
b4=j.b
b4.toString
J.w(p,b3,b4)}}a3.i(0,"ifd"+A.A(q),p)
b0=q
if(typeof b0!=="number")return b0.b5()
q=b0+1
i=c6.k()
if(J.bc(i,r))break
else r=i}catch(b5){break}}for(b0=new A.aq(a3,a3.r,a3.e,A.l(a3).p("aq<2>"));b0.F();){h=b0.d
for(b1=B.bR.gbk(),b1=b1.gH(b1);b1.F();){g=b1.gP()
b3=A.v(g)
if(h.a.af(b3))try{f=J.c(h,g).h(0)
b3=s
b4=f
if(typeof b3!=="number")return b3.b5()
if(typeof b4!=="number")return A.cz(b4)
c6.d=b3+b4
e=new A.aC(A.J(a6,a7),new A.aJ(A.J(a8,a9)))
d=c6.l()
c=d
b4=c
if(b4<0)A.a8(A.bg(c4+A.A(b4),null))
b=A.j(new Array(b4),a4)
a=0
for(;;){b3=a
b4=c
if(typeof b3!=="number")return b3.fB()
if(typeof b4!=="number")return A.cz(b4)
if(!(b3<b4))break
J.w(b,a,c3.eF(c6,s))
b3=a
if(typeof b3!=="number")return b3.b5()
a=b3+1}a0=b
for(b3=a0,b4=b3.length,b2=0;b2<b3.length;b3.length===b4||(0,A.ab)(b3),++b2){a1=b3[b2]
if(a1.b!=null){b6=a1.a
b7=a1.b
b7.toString
J.w(e,b6,b7)}}b3=h.b
b4=B.bR.m(0,g)
b4.toString
b3.a.i(0,b4,a9.a(e))}catch(b5){continue}}}c3.b=null
b8=a3.m(0,"ifd1")
if(b8!=null){a3=b8.a
a3=a3.af(513)&&a3.af(514)}else a3=!1
if(a3){b9=b8.m(0,513).h(0)
c0=b8.m(0,514).h(0)
a3=s
if(typeof a3!=="number")return a3.b5()
c1=a3+b9
if(c0>0){a3=s
if(typeof a3!=="number")return A.cz(a3)
a3=c1>=a3&&c1+c0<=a5}else a3=!1
if(a3){c2=c6.d
c6.d=c1
c3.b=c6.ai(c0).a2()
c6.d=c2}}c6.e=c5
return!1},
eF(a,b){var s,r,q,p,o,n,m,l=a.l(),k=a.l(),j=a.k(),i=new A.hA(l,null)
if(k>=14)return i
s=B.bv[k]
r=j*B.t[k]
q=a.d
if((r>4?a.d=a.k()+b:q)+r>a.c)return i
p=a.ai(r)
switch(s.a){case 0:break
case 6:i.b=new A.bE(new Int8Array(A.z(J.kq(B.f.gB(p.a2()),0,j))))
break
case 1:i.b=new A.bj(new Uint8Array(A.z(p.ai(j).a2())))
break
case 7:i.b=new A.cX(new Uint8Array(A.z(p.ai(j).a2())))
break
case 2:i.b=new A.c1(j===0?"":p.ad(j-1))
break
case 3:i.b=A.lW(p,j)
break
case 4:i.b=A.lR(p,j)
break
case 5:i.b=A.lS(p,j)
break
case 10:i.b=A.lU(p,j)
break
case 8:i.b=A.lV(p,j)
break
case 9:i.b=A.lT(p,j)
break
case 11:i.b=A.lX(p,j)
break
case 12:i.b=A.lQ(p,j)
break
case 13:if(j===1){o=new A.cV(0)
n=p.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=n
n=$.a3()
if(0>=n.length)return A.a(n,0)
o.a=n[0]
i.b=o}break}a.d=q+4
return i}}
A.hA.prototype={}
A.fm.prototype={}
A.aJ.prototype={
fS(a){a.a.aO(0,new A.ic(this))},
gav(a){var s,r=this.a
if(r.a===0)return!0
for(r=new A.aq(r,r.r,r.e,A.l(r).p("aq<2>"));r.F();){s=r.d
if(!(s.a.a===0&&s.b.gav(0)))return!1}return!0},
m(a,b){var s=this.a
if(!s.af(b))s.i(0,b,new A.aC(A.J(t.p,t.r),new A.aJ(A.J(t.N,t.P))))
s=s.m(0,b)
s.toString
return s}}
A.ic.prototype={
$2(a,b){var s
A.b1(a)
s=A.lP(t.P.a(b))
this.a.a.i(0,a,s)
return s},
$S:14}
A.aC.prototype={
je(a){a.a.aO(0,new A.id(this))
a.b.a.aO(0,new A.ie(this))},
m(a,b){var s=this.a.m(0,b)
return s},
i(a,b,c){this.a.i(0,b,c)},
gbZ(){var s=this.a.m(0,274)
return s==null?null:s.h(0)},
sbZ(a){this.a.c7(0,274)}}
A.id.prototype={
$2(a,b){var s
A.v(a)
s=t.r.a(b).R()
this.a.a.i(0,a,s)
return s},
$S:19}
A.ie.prototype={
$2(a,b){var s
A.b1(a)
s=A.lP(t.P.a(b))
this.a.b.a.i(0,a,s)
return s},
$S:14}
A.ad.prototype={
ae(){return"IfdValueType."+this.b}}
A.a0.prototype={
a4(a,b){A.v(b)
return 0},
h(a){return this.a4(0,0)},
be(){return new Uint8Array(0)},
A(a){return""},
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.a0&&s.gaw()===b.gaw()&&s.gu(s)===b.gu(b)&&s.gG(s)===b.gG(b)},
gG(a){return 0},
bh(a){}}
A.bj.prototype={
R(){return new A.bj(new Uint8Array(A.z(this.a)))},
gaw(){return B.aW},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bj){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.a4(0,0)},
bh(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
be(){return this.a},
aK(a){a.aV(this.a)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.A(s)
return s}}
A.c1.prototype={
R(){return new A.c1(this.a)},
gaw(){return B.k},
gu(a){return this.a.length+1},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c1){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.p.gG(s)===B.p.gG(r)}else s=!1
return s},
gG(a){return B.p.gG(this.a)},
be(){return new Uint8Array(A.z(new A.aR(this.a)))},
aK(a){a.aV(new A.aR(this.a))
a.C(0)},
A(a){return this.a}}
A.c6.prototype={
fX(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.l()
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
R(){return new A.c6(new Uint16Array(A.z(this.a)))},
gaw(){return B.j},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c6){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.a4(0,0)},
bh(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
be(){return J.aI(B.X.gB(this.a))},
aK(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.az(r[s])},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.A(s)
return s}}
A.aV.prototype={
fU(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.k()
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
R(){return new A.aV(new Uint32Array(A.z(this.a)))},
gaw(){return B.n},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.aV){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.a4(0,0)},
bh(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
be(){return J.aI(B.o.gB(this.a))},
aK(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.aI(r[s])},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.A(s)
return s}}
A.c2.prototype={
R(){return new A.c2(A.kI(this.a,!0,t.i))},
gaw(){return B.r},
gu(a){return this.a.length},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].h(0)},
h(a){return this.a4(0,0)},
U(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.c2){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.m(s)===A.m(q)}else s=!1
return s},
gG(a){return A.m(this.a)},
aK(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.ab)(s),++q){p=s[q]
a.aI(p.a)
a.aI(p.b)}},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].A(0)}else s=A.A(s)
return s}}
A.bE.prototype={
R(){return new A.bE(new Int8Array(A.z(this.a)))},
gaw(){return B.b0},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bE){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.a4(0,0)},
bh(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
be(){return J.aI(B.aC.gB(this.a))},
aK(a){a.aV(J.Z(B.aC.gB(this.a),0,null))},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.A(s)
return s}}
A.c5.prototype={
fW(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.l()
o=$.al()
o.$flags&2&&A.b(o)
o[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
R(){return new A.c5(new Int16Array(A.z(this.a)))},
gaw(){return B.b1},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c5){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.a4(0,0)},
bh(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
be(){return J.aI(B.aB.gB(this.a))},
aK(a){var s,r,q,p=new Int16Array(1),o=J.lx(B.aB.gB(p),0,null),n=this.a,m=n.length
for(s=o.length,r=0;r<m;++r){q=n[r]
if(0>=1)return A.a(p,0)
p[0]=q
if(0>=s)return A.a(o,0)
a.az(o[0])}},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.A(s)
return s}}
A.c3.prototype={
fV(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.k()
o=$.M()
o.$flags&2&&A.b(o)
o[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
R(){return new A.c3(new Int32Array(A.z(this.a)))},
gaw(){return B.b2},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c3){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.a4(0,0)},
bh(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
be(){return J.aI(B.W.gB(this.a))},
aK(a){var s,r,q,p=this.a,o=p.length
for(s=0;s<o;++s){r=p[s]
q=$.hS()
q.$flags&2&&A.b(q)
q[0]=r
r=$.kp()
if(0>=r.length)return A.a(r,0)
a.aI(r[0])}},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.A(s)
return s}}
A.c4.prototype={
R(){return new A.c4(A.kI(this.a,!0,t.i))},
gaw(){return B.aX},
gu(a){return this.a.length},
U(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.c4){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.m(s)===A.m(q)}else s=!1
return s},
gG(a){return A.m(this.a)},
a4(a,b){var s
A.v(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].h(0)},
h(a){return this.a4(0,0)},
aK(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.ab)(s),++q){p=s[q]
o=$.hS()
o.$flags&2&&A.b(o)
o[0]=p.a
n=$.kp()
if(0>=n.length)return A.a(n,0)
a.aI(n[0])
o[0]=p.b
a.aI(n[0])}},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].A(0)}else s=A.A(s)
return s}}
A.cW.prototype={
fY(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.k()
o=$.M()
o.$flags&2&&A.b(o)
o[0]=p
p=$.bS()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
R(){return new A.cW(new Float32Array(A.z(this.a)))},
gaw(){return B.aY},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cW){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
be(){return J.aI(B.ah.gB(this.a))},
aK(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.k6(r[s])},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.A(s[0])}else s=A.A(s)
return s}}
A.cU.prototype={
fT(a,b){var s,r
for(s=this.a,r=0;r<b;++r)B.ai.i(s,r,a.d7())},
R(){return new A.cU(new Float64Array(A.z(this.a)))},
gaw(){return B.aZ},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cU){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
be(){return J.aI(B.ai.gB(this.a))},
aK(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.k7(r[s])},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.A(s[0])}else s=A.A(s)
return s}}
A.cX.prototype={
R(){return new A.cX(new Uint8Array(A.z(this.a)))},
gaw(){return B.E},
gu(a){return this.a.length},
be(){return this.a},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cX){s=this.a
r=b.a
s=s.length===r.length&&A.m(s)===A.m(r)}else s=!1
return s},
gG(a){return A.m(this.a)},
aK(a){a.aV(this.a)},
A(a){return"<data>"}}
A.cV.prototype={
R(){return A.kA(this.a)},
gaw(){return B.b_},
gu(a){return 1},
U(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.cV)s=this.a===b.a
return s},
gG(a){return this.a},
a4(a,b){if(A.v(b)!==0)throw A.f(A.oJ("Ifd tags must have exactly one entry (the offset)"))
return this.a},
h(a){return this.a4(0,0)},
bh(a){this.a=a},
be(){var s=this.a
return new Uint8Array(A.z(A.j([B.a.j(s,24),B.a.j(s,16),B.a.j(s,8),s],t.t)))},
aK(a){a.aI(this.a)},
A(a){return"Ifd@"+this.a}}
A.ac.prototype={
ae(){return"BmpCompression."+this.b}}
A.hZ.prototype={}
A.bh.prototype={
dV(a,b){var s,r,q,p,o,n,m,l=this,k=l.d,j=k<=40
if(j){s=l.r
s=s===B.am||s===B.an}else s=!0
if(s){s=l.as=a.k()
r=A.jV(s)
l.CW=r
q=B.a.a1(s,r)
s=q>0
l.cx=s?255/q:0
r=l.at=a.k()
p=A.jV(r)
l.cy=p
o=B.a.a1(r,p)
l.db=s?255/o:0
r=l.ax=a.k()
p=A.jV(r)
l.dx=p
n=B.a.a1(r,p)
l.dy=s?255/n:0
if(!j||l.r===B.an){j=l.ay=a.k()
s=A.jV(j)
l.fr=s
m=B.a.a1(j,s)
l.fx=m>0?255/m:0}else if(l.f===16){l.ay=4278190080
l.fr=24
l.fx=1}else{l.ay=4278190080
l.fr=24
l.fx=1}}else if(l.f===16){l.as=31744
l.CW=10
l.cx=8.225806451612904
l.at=992
l.cy=5
l.db=8.225806451612904
l.ax=31
l.dx=0
l.dy=8.225806451612904
l.fx=l.fr=l.ay=0}else{l.as=16711680
l.CW=16
l.cx=1
l.at=65280
l.cy=8
l.db=1
l.ax=255
l.dx=0
l.dy=1
l.ay=4278190080
l.fr=24
l.fx=1}j=a.d
a.d=j+(k-(j-l.fy))
if(l.f<=8)l.jJ(a)},
gcn(){var s=this.d
if(s!==40)if(s===124){s=this.ay
s===$&&A.d()
s=s===0}else s=!1
else s=!0
return s},
gJ(){return Math.abs(this.c)},
jJ(a){var s,r,q,p,o,n=this,m=n.z
if(m===0)m=B.a.O(1,n.f)
n.ch=new A.aY(new Uint8Array(m*3),m,3)
for(s=0;s<m;++s){r=J.c(a.a,a.d++)
q=J.c(a.a,a.d++)
p=J.c(a.a,a.d++)
o=J.c(a.a,a.d++)
n.ch.cF(s,p,q,r,o)}},
jk(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.dX.a(b)
if(j.ch!=null){s=j.f
if(s===1){r=a.E()
for(q=7;q>=0;--q)b.$4(B.a.bp(r,q)&1,0,0,0)
return}else if(s===2){r=a.E()
for(q=6;q>=0;q-=2)b.$4(B.a.bp(r,q)&2,0,0,0)}else if(s===4){r=a.E()
b.$4(B.a.j(r,4)&15,0,0,0)
b.$4(r&15,0,0,0)
return}else if(s===8){b.$4(a.E(),0,0,0)
return}}s=j.r
if(s===B.am&&j.f===32){p=a.k()
s=j.as
s===$&&A.d()
o=j.CW
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.cx
s===$&&A.d()
n=B.b.h(o*s)
s=j.at
s===$&&A.d()
o=j.cy
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.db
s===$&&A.d()
m=B.b.h(o*s)
s=j.ax
s===$&&A.d()
o=j.dx
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.dy
s===$&&A.d()
l=B.b.h(o*s)
if(j.gcn())k=255
else{s=j.ay
s===$&&A.d()
o=j.fr
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.fx
s===$&&A.d()
k=B.b.h(o*s)}return b.$4(n,m,l,k)}else{o=j.f
if(o===32&&s===B.aL){l=a.E()
m=a.E()
n=a.E()
k=a.E()
return b.$4(n,m,l,j.gcn()?255:k)}else if(o===24){l=a.E()
m=a.E()
return b.$4(a.E(),m,l,255)}else if(o===16){p=a.l()
s=j.as
s===$&&A.d()
o=j.CW
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.cx
s===$&&A.d()
n=B.b.h(o*s)
s=j.at
s===$&&A.d()
o=j.cy
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.db
s===$&&A.d()
m=B.b.h(o*s)
s=j.ax
s===$&&A.d()
o=j.dx
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.dy
s===$&&A.d()
l=B.b.h(o*s)
if(j.gcn())k=255
else{s=j.ay
s===$&&A.d()
o=j.fr
o===$&&A.d()
o=B.a.a1((p&s)>>>0,o)
s=j.fx
s===$&&A.d()
k=B.b.h(o*s)}return b.$4(n,m,l,k)}else throw A.f(A.n("Unsupported bitsPerPixel ("+o+") or compression ("+s.A(0)+")."))}},
$iI:1,
gS(){return this.b}}
A.fb.prototype={
bj(a){var s,r
if(!A.lC(A.q(a,!1,null,0))||a.length<18)return!1
s=A.q(a,!1,null,0)
s.d+=14
r=s.k()
return r>=12&&r<=124},
au(a){var s
if(!this.bj(a))return null
s=A.q(a,!1,null,0)
this.a=s
return this.b=A.nI(s,null)},
ah(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.b
if(a0==null)return new A.bk(a,a,a,a,0,B.i,0,0)
s=b.a
s===$&&A.d()
r=a0.a.b
r===$&&A.d()
s.d=r
q=a0.f
r=a0.b
p=B.a.Y(r*q+31,32)*4
s=b.c
if(s)o=4
else if(q===1||q===4||q===8)o=1
else{n=q===32?4:3
o=n}if(s)m=B.e
else if(q===1)m=B.w
else{if(q===2)n=B.A
else if(q===4)n=B.B
else n=B.e
m=n}l=s?a:a0.ch
k=A.O(a,a,m,0,B.i,a0.gJ(),a,0,o,l,B.e,r,!1)
for(j=k.gJ()-1,s=a0.c,r=1/s<0,n=s<0,s=s===0;j>=0;--j){i={}
if(!(s?r:n))h=j
else{g=k.a
g=g==null?a:g.b
h=(g==null?0:g)-1-j}g=b.a
f=g.aj(p)
g.d=g.d+(f.c-f.d)
g=k.a
e=g==null
d=e?a:g.a
if(d==null)d=0
i.a=0
c=e?a:g.L(0,h,a)
if(c==null)c=new A.H()
while(i.a<d)a0.jk(f,new A.hY(i,b,d,a0,c))}return k},
aU(a,b){if(this.au(a)==null)return null
return this.ah(0)}}
A.hY.prototype={
$4(a,b,c,d){var s,r,q=this,p=q.a
if(p.a<q.c){s=q.b.c&&q.d.ch!=null
r=q.e
if(s){s=q.d
r.a8(s.ch.aS(a),s.ch.aR(a),s.ch.aQ(a),s.ch.aX(a))}else r.a8(a,b,c,d)
r.F();++p.a}},
$S:40}
A.i2.prototype={}
A.I.prototype={}
A.i1.prototype={}
A.i3.prototype={}
A.fn.prototype={}
A.dX.prototype={
cq(){return this.w},
bf(a,b,c,d,e){throw A.f(A.n("B44 compression not yet supported."))},
c8(a,b,c){return this.bf(a,b,c,null,null)},
A(a){return A.A(this.r)+" "+this.x}}
A.cQ.prototype={
ae(){return"ExrChannelType."+this.b}}
A.bY.prototype={
ae(){return"ExrChannelName."+this.b}}
A.fo.prototype={
fO(a){var s=this,r=a.cs()
s.a=r
if(r.length===0)return
r=a.k()
if(!(r<3))return A.a(B.bl,r)
s.c=B.bl[r]
a.E()
a.d+=3
s.f=a.k()
s.r=a.k()
r=s.a
if(r==="R"){s.w=!0
s.b=B.cy}else if(r==="G"){s.w=!0
s.b=B.cz}else if(r==="B"){s.w=!0
s.b=B.cA}else if(r==="A"){s.w=!0
s.b=B.cB}else{s.w=!1
s.b=B.cC}switch(s.c.a){case 0:s.d=4
break
case 1:s.d=2
break
case 2:s.d=4
break}}}
A.aU.prototype={
ae(){return"ExrCompressorType."+this.b}}
A.bi.prototype={
bf(a,b,c,d,e){throw A.f(A.n("Unsupported compression type"))},
c8(a,b,c){return this.bf(a,b,c,null,null)}}
A.fD.prototype={}
A.fp.prototype={
sfj(a){this.c=t.T.a(a)}}
A.dH.prototype={
dW(a){var s,r,q,p,o=this,n=A.q(a,!1,null,0)
if(n.k()!==20000630)throw A.f(A.n("File is not an OpenEXR image file."))
s=o.d=n.E()
if(s!==2)throw A.f(A.n("Cannot read version "+s+" image files."))
s=o.e=n.bd()
if((s&4294967289)>>>0!==0)throw A.f(A.n("The file format version number's flag field contains unrecognized flags."))
if((s&16)===0){r=o.c
q=A.lZ(r.length,(s&2)!==0,n)
if(q.w>0)B.c.M(r,q)}else for(s=o.c;;){q=A.lZ(s.length,(o.e&2)!==0,n)
if(q.w<=0)break
B.c.M(s,q)}s=o.c
r=s.length
if(r===0)throw A.f(A.n("Error reading image header"))
for(p=0;p<s.length;s.length===r||(0,A.ab)(s),++p)s[p].jI(n)
o.iN(n)},
iN(a){var s,r,q,p,o=this
for(s=o.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.ab)(s),++q){p=s[q]
o.a=Math.max(o.a,p.w)
o.b=Math.max(o.b,p.x)
if(p.db)o.iW(p,a)
else o.iV(p,a)}},
iW(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=this.e
b5===$&&A.d()
s=(b5&16)!==0
b5=b6.b
b5.toString
r=b6.CW
q=b6.ay
p=A.o(b7,b4,0)
o=b6.c
n=b6.a
m=0
l=0
for(;;){k=b6.k1
k.toString
if(!(m<k))break
j=0
for(;;){k=b6.id
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
for(;;){g=b6.go
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
for(;;){g=b6.fy
if(!(j<g.length))return A.a(g,j)
if(!(f<g[j]))break
if(k)break
if(!(l>=0&&l<q.length))return A.a(q,l)
g=q[l]
if(!(h>=0&&h<g.length))return A.a(g,h)
p.d=g[h]
if(s)if(p.k()!==n)throw A.f(A.n("Invalid Image Data"))
e=p.k()
d=p.k()
p.k()
p.k()
c=p.aj(p.k())
p.d=p.d+(c.c-c.d)
g=b6.dy
g.toString
b=d*g
a=b6.dx
a.toString
g=r.bf(c,e*a,b,a,g)
a=g.length
a=Math.min(a,a)
a0=new A.af(g,0,a,0,!1)
a1=r.a
a2=r.b
a3=o.length
a4=0
a5=0
for(;;){if(!(a5<a2&&b<this.b))break
for(a6=0;a6<a3;++a6){if(a4>=a)break
if(!(a6<o.length))return A.a(o,a6)
a7=o[a6]
g=b6.dx
g.toString
a8=e*g
for(a9=0;a9<a1;++a9,++a8){g=a7.c
g===$&&A.d()
switch(g.a){case 1:g=a0.l()
b0=$.Q
b0=b0!=null?b0:A.S()
if(!(g<b0.length))return A.a(b0,g)
b1=b0[g]
break
case 2:b1=a0.l()
break
case 0:b1=a0.k()
break
default:b1=b4}g=a7.d
g===$&&A.d()
a4+=g
g=a7.w
g===$&&A.d()
if(g){g=b5.a
b2=g==null?b4:g.L(a8,b,b4)
if(b2==null)b2=new A.H()
g=a7.b
g===$&&A.d()
b2.i(0,g.a,b1)}else{g=a7.a
g===$&&A.d()
b0=b5.b
b3=b0!=null?b0.m(0,g):b4
if(b3!=null)b3.a3(a8,b,b1,0,0)}}}++a5;++b}++f;++h}++i}++j;++l}++m}},
iV(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=this.e
a7===$&&A.d()
s=(a7&16)!==0
a7=a8.b
a7.toString
r=a8.CW
q=a8.ay
if(0>=q.length)return A.a(q,0)
p=q[0]
o=a8.cx
n=A.o(a9,a6,0)
for(q=p.length,m=a8.c,l=r!=null,k=0,j=0;j<q;++j){n.d=p[j]
if(s)if(n.k()!==3.141592653589793)throw A.f(A.n("Invalid Image Data"))
i=n.k()
h=$.M()
h.$flags&2&&A.b(h)
h[0]=i
i=$.a3()
if(0>=i.length)return A.a(i,0)
h[0]=n.k()
g=n.aj(i[0])
n.d=n.d+(g.c-g.d)
if(l){i=r.c8(g,0,k)
h=i.length
f=new A.af(i,0,Math.min(h,h),0,!1)}else f=g
e=f.c-f.d
d=m.length
c=0
for(;;){if(!(c<o&&k<this.b))break
i=a8.cy
if(!(k>=0&&k<i.length))return A.a(i,k)
b=i[k]
if(b>=e)break
for(a=0;a<d;++a){if(b>=e)break
if(!(a<m.length))return A.a(m,a)
a0=m[a]
a1=a8.w
for(a2=0;a2<a1;++a2){i=a0.c
i===$&&A.d()
switch(i.a){case 1:i=f.l()
h=$.Q
h=h!=null?h:A.S()
if(!(i<h.length))return A.a(h,i)
a3=h[i]
break
case 2:a3=f.l()
break
case 0:a3=f.k()
break
default:a3=a6}i=a0.d
i===$&&A.d()
b+=i
i=a0.w
i===$&&A.d()
if(i){i=a7.a
a4=i==null?a6:i.L(a2,k,a6)
if(a4==null)a4=new A.H()
i=a0.b
i===$&&A.d()
a4.i(0,i.a,a3)}else{i=a0.a
i===$&&A.d()
h=a7.b
a5=h!=null?h.m(0,i):a6
if(a5!=null)a5.a3(a2,k,a3,0,0)}}}++c;++k}}},
$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.dI.prototype={
fP(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=A.J(t.N,t.v)
for(s=a3.e,r=t.t,q=t.L,p=a3.c,o=B.D;;){n=a8.cs()
if(n.length===0)break
a8.cs()
m=a8.aj(a8.k())
a8.d=a8.d+(m.c-m.d)
s.i(0,n,new A.fn())
switch(n){case"channels":for(;;){l=new A.fo()
l.fO(m)
k=l.a
k===$&&A.d()
if(k.length===0)break
j=l.w
j===$&&A.d()
if(j){++a3.d
k=l.c
k===$&&A.d()
if(k===B.aq)o=B.D
else o=k===B.ar?B.I:B.J}else{j=l.c
j===$&&A.d()
if(j===B.aq){j=a3.w
i=a3.x
a5.i(0,k,new A.cY(new Uint16Array(j*i),j,i,1))}else if(j===B.ar){j=a3.w
i=a3.x
a5.i(0,k,new A.cZ(new Float32Array(j*i),j,i,1))}else if(j===B.aS){j=a3.w
i=a3.x
a5.i(0,k,new A.d2(new Uint32Array(j*i),j,i,1))}}B.c.M(p,l)}break
case"chromaticities":k=new Float32Array(8)
a3.at=k
j=m.k()
i=$.M()
i.$flags&2&&A.b(i)
i[0]=j
j=$.bS()
if(0>=j.length)return A.a(j,0)
k[0]=j[0]
k=a3.at
i[0]=m.k()
h=j[0]
k.$flags&2&&A.b(k)
k[1]=h
h=a3.at
i[0]=m.k()
k=j[0]
h.$flags&2&&A.b(h)
h[2]=k
k=a3.at
i[0]=m.k()
h=j[0]
k.$flags&2&&A.b(k)
k[3]=h
h=a3.at
i[0]=m.k()
k=j[0]
h.$flags&2&&A.b(h)
h[4]=k
k=a3.at
i[0]=m.k()
h=j[0]
k.$flags&2&&A.b(k)
k[5]=h
h=a3.at
i[0]=m.k()
k=j[0]
h.$flags&2&&A.b(h)
h[6]=k
k=a3.at
i[0]=m.k()
j=j[0]
k.$flags&2&&A.b(k)
k[7]=j
break
case"compression":k=J.c(m.a,m.d++)
if(!(k>=0&&k<8))return A.a(B.bx,k)
a3.ax=B.bx[k]
break
case"dataWindow":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.a3()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.k()
h=k[0]
j[0]=m.k()
g=k[0]
j[0]=m.k()
k=q.a(A.j([i,h,g,k[0]],r))
a3.r=k
a3.w=k[2]-k[0]+1
a3.x=k[3]-k[1]+1
break
case"displayWindow":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.a3()
if(0>=k.length)return A.a(k,0)
j[0]=m.k()
j[0]=m.k()
j[0]=m.k()
break
case"lineOrder":break
case"pixelAspectRatio":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.bS()
if(0>=k.length)return A.a(k,0)
break
case"screenWindowCenter":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.bS()
if(0>=k.length)return A.a(k,0)
j[0]=m.k()
break
case"screenWindowWidth":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.bS()
if(0>=k.length)return A.a(k,0)
break
case"tiles":a3.dx=m.k()
a3.dy=m.k()
f=J.c(m.a,m.d++)
a3.fr=f&15
a3.fx=B.a.j(f,4)&15
break
case"type":e=m.cs()
if(e!=="deepscanline")if(e!=="deeptile")throw A.f(A.n("EXR Invalid type: "+e))
break
default:break}}s=a3.w
a3.b=A.O(a4,a4,o,0,B.i,a3.x,a4,0,a3.d,a4,B.e,s,!1)
for(s=new A.R(a5,a5.r,a5.e,a5.$ti.p("R<1>"));s.F();){r=s.d
q=a3.b
q.toString
k=a5.m(0,r)
k.toString
q.fD(r,k)}if(a3.db){s={}
r=a3.r
r===$&&A.d()
a3.id=a3.hg(r[0],r[2],r[1],r[3])
r=a3.r
a3.k1=a3.hh(r[0],r[2],r[1],r[3])
if(a3.fr!==2)a3.k1=1
r=a3.id
r.toString
q=a3.r
a3.fy=a3.e5(r,q[0],q[2],a3.dx,a3.fx)
q=a3.k1
q.toString
r=a3.r
a3.go=a3.e5(q,r[1],r[3],a3.dy,a3.fx)
r=a3.hf()
a3.k2=r
q=a3.dx
q.toString
q=r*q
a3.k3=q
a3.CW=A.lJ(a3.ax,a3,q,a3.dy)
s.a=s.b=0
q=a3.id
q.toString
r=a3.k1
r.toString
a3.ay=A.mb(q*r,new A.i6(s,a3),t.bv)}else{s=a3.x
r=a3.ch=new Uint32Array(s+1)
for(q=p.length,k=a3.r,j=a3.w,d=0;d<q;++d){c=p[d]
i=c.d
i===$&&A.d()
h=c.f
h===$&&A.d()
b=B.a.aA(i*j,h)
for(i=c.r,a=0;a<s;++a){k===$&&A.d()
h=k[1]
i===$&&A.d()
if(B.a.a7(a+h,i)===0)r[a]=r[a]+b}}for(a0=0,a=0;a<s;++a)a0=Math.max(a0,r[a])
s=A.lJ(a3.ax,a3,a0,a4)
a3.CW=s
s=a3.cx=s.cq()
r=a3.ch
q=r.length
p=new Uint32Array(q)
a3.cy=p
for(--q,a1=0,a2=0;a2<=q;++a2){if(B.a.a7(a2,s)===0)a1=0
p[a2]=a1
a1+=r[a2]}s=B.a.aA(a3.x+s,s)
a3.ay=A.j([new Uint32Array(s-1)],t.hh)}},
hg(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.v(r)
s=(q===0?o.cP(r):o.cI(r))+1
break
case 2:p=b-a+1
s=(o.fx===0?o.cP(p):o.cI(p))+1
break
default:throw A.f(A.n("Unknown LevelMode format."))}return s},
hh(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.v(r)
s=(q===0?o.cP(r):o.cI(r))+1
break
case 2:p=d-c+1
s=(o.fx===0?o.cP(p):o.cI(p))+1
break
default:throw A.f(A.n("Unknown LevelMode format."))}return s},
cP(a){var s
for(s=0;a>1;){++s
a=B.a.j(a,1)}return s},
cI(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.j(a,1)}return s+r},
hf(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p].d
o===$&&A.d()
q+=o}return q},
e5(a,b,c,d,e){var s,r,q,p,o,n,m=J.ai(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.O(1,q)
o=B.a.aA(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.aA(n+d-1,d)}return m}}
A.i6.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.fy,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.go
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.id){m.b=0
m.a=r+1}return q},
$S:18}
A.fE.prototype={
jI(a){var s,r,q,p,o,n=this
if(n.db)for(s=0;s<n.ay.length;++s){r=0
for(;;){q=n.ay
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
p=a.dM()
q.$flags&2&&A.b(q)
q[r]=p;++r}}else{q=n.ay
if(0>=q.length)return A.a(q,0)
o=q[0].length
for(s=0;s<o;++s){q=n.ay
if(0>=q.length)return A.a(q,0)
q=q[0]
p=a.dM()
q.$flags&2&&A.b(q)
if(!(s<q.length))return A.a(q,s)
q[s]=p}}}}
A.fF.prototype={
h0(a,b,c){var s,r,q,p=this,o=a.c.length,n=J.ai(o,t.eO)
for(s=0;s<o;++s)n[s]=new A.eV()
p.y=t.gR.a(n)
r=p.w
r.toString
q=B.a.Y(r*p.x,2)
p.z=new Uint16Array(q)},
cq(){return this.x},
bf(a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
if(a9==null)a9=a5.c.w
if(b0==null)b0=a5.c.cx
s=a7+a9-1
r=a8+b0-1
q=a5.c
p=q.w
if(s>p)s=p-1
p=q.x
if(r>p)r=p-1
a5.a=s-a7+1
a5.b=r-a8+1
o=q.c
n=o.length
for(m=0,l=0;l<n;++l){k=o[l]
q=a5.y
q===$&&A.d()
if(!(l<q.length))return A.a(q,l)
j=q[l]
j.b=j.a=m
q=k.f
q===$&&A.d()
i=B.a.aA(a7,q)
h=B.a.aA(s,q)
q=i*q<a7?0:1
q=h-i+q
j.c=q
p=k.r
p===$&&A.d()
i=B.a.aA(a8,p)
h=B.a.aA(r,p)
g=i*p<a8?0:1
g=h-i+g
j.d=g
j.e=p
p=k.d
p===$&&A.d()
p=p/2|0
j.f=p
m+=q*g*p}f=a6.l()
e=a6.l()
if(e>=8192)throw A.f(A.n("Error in header for PIZ-compressed data (invalid bitmap size)."))
d=new Uint8Array(8192)
if(f<=e){c=a6.ai(e-f+1)
b=c.c-c.d
for(a=f,l=0;l<b;++l,a=a0){a0=a+1
q=J.c(c.a,c.d+l)
if(!(a<8192))return A.a(d,a)
d[a]=q}}a1=new Uint16Array(65536)
a2=a5.j_(d,a1)
A.nZ(a6,a6.k(),a5.z,m)
for(l=0;l<n;++l){q=a5.y
q===$&&A.d()
if(!(l<q.length))return A.a(q,l)
j=q[l]
a=0
for(;;){q=j.f
q===$&&A.d()
if(!(a<q))break
p=a5.z
p.toString
g=j.a
g===$&&A.d()
a3=j.c
a3===$&&A.d()
a4=j.d
a4===$&&A.d()
A.o2(p,g+a,a3,q,a4,a3*q,a2);++a}}q=a5.z
q.toString
a5.h8(a1,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.ef(!1,q*a5.x+73728)}q.a=0
for(;a8<=r;++a8)for(l=0;l<n;++l){q=a5.y
q===$&&A.d()
if(!(l<q.length))return A.a(q,l)
j=q[l]
q=j.e
q===$&&A.d()
if(B.a.a7(a8,q)!==0)continue
q=j.c
q===$&&A.d()
p=j.f
p===$&&A.d()
a7=q*p
for(;a7>0;--a7){q=a5.r
q.toString
p=a5.z
p.toString
g=j.b
g===$&&A.d()
j.b=g+1
if(!(g>=0&&g<p.length))return A.a(p,g)
q.az(p[g])}}q=a5.r
return J.Z(B.f.gB(q.c),0,q.a)},
c8(a,b,c){return this.bf(a,b,c,null,null)},
h8(a,b,c){var s,r,q,p=t.L
p.a(a)
p.a(b)
for(p=b.length,s=b.$flags|0,r=0;r<c;++r){if(!(r<p))return A.a(b,r)
q=b[r]
if(!(q>=0&&q<65536))return A.a(a,q)
q=a[q]
s&2&&A.b(b)
b[r]=q}},
j_(a,b){var s,r,q,p,o,n
for(s=b.$flags|0,r=0,q=0;q<65536;++q){if(q!==0){p=q>>>3
if(!(p<8192))return A.a(a,p)
p=(a[p]&1<<(q&7))>>>0!==0}else p=!0
if(p){o=r+1
s&2&&A.b(b)
if(!(r<65536))return A.a(b,r)
b[r]=q
r=o}}for(o=r;o<65536;o=n){n=o+1
s&2&&A.b(b)
if(!(o<65536))return A.a(b,o)
b[o]=0}return r-1}}
A.eV.prototype={}
A.fG.prototype={
cq(){return this.x},
bf(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.C.bM(a4.a2()),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.ef(!1,a1.x*a3)}a3.a=0
s=A.j([0,0,0,0],t.t)
r=new Uint32Array(1)
q=J.Z(B.o.gB(r),0,null)
if(a7==null)a7=a1.c.w
if(a8==null)a8=a1.c.cx
p=a5+a7-1
o=a6+a8-1
a3=a1.c
n=a3.w
if(p>n)p=n-1
n=a3.x
if(o>n)o=n-1
a1.a=p-a5+1
a1.b=o-a6+1
a3=a3.c
m=a3.length
for(n=q.length,l=a2.length,k=a6,j=0;k<=o;++k)for(i=0;i<m;++i){if(!(i<a3.length))return A.a(a3,i)
h=a3[i]
g=h.r
g===$&&A.d()
if(B.a.a7(a6,g)!==0)continue
g=h.f
g===$&&A.d()
f=B.a.aA(a5,g)
e=B.a.aA(p,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(r,0)
r[0]=0
g=h.c
g===$&&A.d()
switch(g.a){case 0:B.c.i(s,0,j)
B.c.i(s,1,s[0]+d)
B.c.i(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.i(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.i(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.i(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.C(q[a0])}}break
case 1:B.c.i(s,0,j)
B.c.i(s,1,s[0]+d)
j=s[1]+d
for(c=0;c<d;++c){g=s[0]
B.c.i(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.i(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
r[0]=r[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.C(q[a0])}}break
case 2:B.c.i(s,0,j)
B.c.i(s,1,s[0]+d)
B.c.i(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.i(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.i(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.i(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.C(q[a0])}}break}}a3=a1.y
return J.Z(B.f.gB(a3.c),0,a3.a)},
c8(a,b,c){return this.bf(a,b,c,null,null)}}
A.fH.prototype={
cq(){return 1},
bf(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.ef(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.w
if(a4==null)a4=c.c.cx
s=a1+a3-1
r=a2+a4-1
q=c.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
c.a=s-a1+1
c.b=r-a2+1
while(q=a0.d,q<b){p=a0.a
a0.d=q+1
q=J.c(p,q)
p=$.am()
p.$flags&2&&A.b(p)
p[0]=q
q=$.aw()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m)a.C(J.c(a0.a,a0.d++))}else for(n=o;m=n-1,n>=0;n=m)a.C(J.c(a0.a,a0.d++))}l=J.Z(B.f.gB(a.c),0,a.a)
k=l.length
for(b=l.$flags|0,j=1;j<k;++j){q=l[j-1]
p=l[j]
b&2&&A.b(l)
l[j]=q+p-128}b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.Y(k+1,2)
for(i=0,h=0;;q=d,i=f){if(h<k){g=h+1
f=i+1
if(!(i<k))return A.a(l,i)
p=l[i]
b.$flags&2&&A.b(b)
e=b.length
if(!(h<e))return A.a(b,h)
b[h]=p}else break
if(g<k){h=g+1
d=q+1
if(!(q<k))return A.a(l,q)
q=l[q]
if(!(g<e))return A.a(b,g)
b[g]=q}else break}return b},
c8(a,b,c){return this.bf(a,b,c,null,null)},
A(a){return A.A(this.w)}}
A.dY.prototype={
cq(){return this.x},
bf(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.C.bM(a.a2())
if(d==null)d=f.c.w
if(a0==null)a0=f.c.cx
s=b+d-1
r=c+a0-1
q=f.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
f.a=s-b+1
f.b=r-c+1
o=e.length
for(q=e.$flags|0,n=1;n<o;++n){p=e[n-1]
m=e[n]
q&2&&A.b(e)
e[n]=p+m-128}q=f.y
if(q==null||q.length!==o)q=f.y=new Uint8Array(o)
p=B.a.Y(o+1,2)
for(l=0,k=0;;p=g,l=i){if(k<o){j=k+1
i=l+1
if(!(l<o))return A.a(e,l)
m=e[l]
q.$flags&2&&A.b(q)
h=q.length
if(!(k<h))return A.a(q,k)
q[k]=m}else break
if(j<o){k=j+1
g=p+1
if(!(p<o))return A.a(e,p)
p=e[p]
if(!(j<h))return A.a(q,j)
q[j]=p}else break}return q},
c8(a,b,c){return this.bf(a,b,c,null,null)},
A(a){return A.A(this.w)}}
A.i5.prototype={
au(a){var s=new A.dH(A.j([],t.q))
s.dW(a)
return this.a=s},
ah(a){var s=this.a
if(s==null)return null
s=s.c
if(!(a<s.length))return A.a(s,a)
return s[a].b},
aU(a,b){this.a=A.o0(a)
return this.ah(0)}}
A.dL.prototype={
jt(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d===0&&e.c!=null){s=e.c
s.toString
return s}for(s=e.b,r=e.d,q=-1,p=-1,o=0;o<s;++o){n=r.aS(o)
m=r.aR(o)
l=r.aQ(o)
k=r.aX(o)
if(n===a&&m===b&&l===c&&k===d)return o
j=a-n
i=b-m
h=c-l
g=d-k
f=j*j+i*i+h*h+g*g
if(p===-1){p=o
q=f}else if(f<q){p=o
q=f}}return p},
dP(){var s,r,q,p,o,n,m,l=this
if(l.c==null)return l.d
s=l.d
r=s.a
q=new A.aY(new Uint8Array(r*4),r,4)
for(p=0;p<r;++p){o=s.aS(p)
n=s.aR(p)
m=s.aQ(p)
q.cF(p,o,n,m,p===l.c?0:255)}return q}}
A.dM.prototype={
fQ(a){var s,r,q,p,o,n,m=this
m.a=a.l()
m.b=a.l()
m.c=a.l()
m.d=a.l()
s=a.E()
m.e=(s&64)!==0
if((s&128)!==0){m.f=A.lM(B.a.O(1,(s&7)+1))
for(r=0;q=m.f,r<q.b;++r){p=J.c(a.a,a.d++)
o=J.c(a.a,a.d++)
n=J.c(a.a,a.d++)
q.d.b7(r,p,o,n)}}m.y=a.d-a.b}}
A.fI.prototype={}
A.dN.prototype={$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.i9.prototype={
au(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.f=A.q(a,!1,null,0)
i.a=new A.dN(A.j([],t.b))
if(!i.eq())return null
try{while(p=i.f,o=p.d,o<p.c){n=p.a
p.d=o+1
s=J.c(n,o)
switch(s){case 44:r=i.eM()
if(r==null){p=i.a
return p}p=r
p.r=i.e
p.w=i.c
if(i.b!==0){if(r.f==null&&i.a.e!=null){p=i.a.e
o=p.a
n=p.b
m=p.c
p=p.d
r.f=new A.dL(o,n,m,new A.aY(new Uint8Array(A.z(p.c)),p.a,p.b))}if(r.f!=null)r.f.c=i.d}B.c.M(i.a.r,r)
break
case 33:p=i.f
q=J.c(p.a,p.d++)
if(J.bc(q,255)){p=i.f
if(p.ad(J.c(p.a,p.d++))==="NETSCAPE2.0"){l=J.c(p.a,p.d++)
k=J.c(p.a,p.d++)
if(l===3&&k===1)i.r=p.l()}else i.cZ()}else if(J.bc(q,249)){p=i.f
p.toString
i.iI(p)}else i.cZ()
break
case 59:p=i.a
return p
default:break}}}catch(j){}return i.a},
iI(a){var s,r,q,p=this
a.E()
s=a.E()
p.e=a.l()
p.d=a.E()
a.E()
p.c=B.a.j(s,2)&7
p.b=s&1
r=a.cG(1,0)
if(J.c(r.a,r.d)===44){++a.d
q=p.eM()
if(q==null)return
q.r=p.e
q.w=p.c
r=p.b!==0
q.x=r?p.d:-1
if(r){r=q.f
if(r==null&&p.a.e!=null){r=p.a.e
r.toString
r=q.f=A.o7(r)}if(r!=null)r.c=p.d}B.c.M(p.a.r,q)}},
ah(a){var s,r,q,p=this,o=p.f
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r)return null
q=s[a]
s=q.y
s===$&&A.d()
o.d=s
return p.hF(q)},
aU(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.au(a7)==null)return a6
s=a5.a.r.length
if(s===1)return a5.ah(0)
for(s=t.p,r=a6,q=r,p=0;o=a5.a.r,p<o.length;++p){a8=o[p]
n=a5.ah(p)
if(n==null)return a6
n.y=a8.r*10
if(q==null||r==null){n.r=a5.r
r=n
q=r
continue}o=n.a
m=o==null
l=m?a6:o.a
if(l==null)l=0
k=r.a
j=k==null
i=j?a6:k.a
h=!1
if(l===(i==null?0:i)){o=m?a6:o.b
if(o==null)o=0
m=j?a6:k.b
if(o===(m==null?0:m)){o=a8.a
o===$&&A.d()
if(o===0){o=a8.b
o===$&&A.d()
o=o===0&&a8.w===2}else o=h}else o=h}else o=h
if(o){q.b1(n)
r=n
continue}g=a8.f
if(!(g!=null)){o=a5.a.e
o.toString
g=o}o=j?a6:k.a
if(o==null)o=0
m=j?a6:k.b
if(m==null)m=0
f=A.O(a6,a6,B.e,0,B.i,m,a6,0,1,g.dP(),B.e,o,!1)
o=a8.w
if(o===2){o=f.a
e=o==null?a6:J.aI(o.gB(o))
if(e==null){o=f.a
o=o==null?a6:o.gB(o)
if(o==null)o=B.f.gB(new Uint8Array(0))
e=J.aI(o)}o=a8.x
m=e.length-1
if(o!==-1)B.f.aD(e,0,m,o)
else{o=a5.a.c.a
l=o.length
if(l!==0){if(0>=l)return A.a(o,0)
o=o[0]}else o=0
B.f.aD(e,0,m,o)}}else if(o!==3)if(a8.f!=null){o=r.a
d=o==null?a6:o.gT()
c=A.J(s,s)
for(o=d.a,b=0;b<o;++b)c.i(0,b,g.jt(d.aS(b),d.aR(b),d.aQ(b),d.aX(b)))
o=f.a
a=o==null?a6:J.aI(o.gB(o))
if(a==null){o=f.a
o=o==null?a6:o.gB(o)
if(o==null)o=B.f.gB(new Uint8Array(0))
a=J.aI(o)}o=r.a
a0=o==null?a6:J.aI(o.gB(o))
if(a0==null){o=r.a
o=o==null?a6:o.gB(o)
if(o==null)o=B.f.gB(new Uint8Array(0))
a0=J.aI(o)}for(a1=a.length,o=a0.length,m=a.$flags|0,a2=0;a2<a1;++a2){if(!(a2<o))return A.a(a0,a2)
a3=c.m(0,a0[a2])
if(a3!=null&&a3!==-1){m&2&&A.b(a)
a[a2]=a3}}}f.y=n.y
for(o=n.a,o=o.gH(o);o.F();){a4=o.gP()
if(a4.gv()!==0){m=a4.gaP()
l=a8.a
l===$&&A.d()
k=a4.gaL()
j=a8.b
j===$&&A.d()
f.bP(m+l,k+j,a4)}}q.b1(f)
r=f}return q},
eM(){var s,r=this.f
if(r.d>=r.c)return null
s=new A.fI()
s.fQ(r);++this.f.d
this.cZ()
return s},
hF(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(i.w==null){i.w=new Uint8Array(256)
i.x=new Uint8Array(4095)
i.y=new Uint8Array(4096)
i.z=new Uint32Array(4096)}s=i.Q=i.f.E()
r=B.a.X(1,s)
i.dy=r;++r
i.dx=r
i.db=r+1;++s
i.cy=s
i.cx=B.a.X(1,s)
i.ay=0
i.CW=4098
i.at=i.ax=0
s=i.w
s.toString
s.$flags&2&&A.b(s)
s[0]=0
s=i.z
s.toString
B.o.aD(s,0,4096,4098)
s=a.c
s===$&&A.d()
r=a.d
r===$&&A.d()
q=a.a
q===$&&A.d()
p=i.a
if(q+s<=p.a){q=a.b
q===$&&A.d()
q=q+r>p.b}else q=!0
if(q)return h
o=a.f
if(!(o!=null)){q=p.e
q.toString
o=q}i.as=s*r
n=A.O(h,h,B.e,0,B.i,r,h,0,1,o.dP(),B.e,s,!1)
m=new Uint8Array(s)
s=a.e
s===$&&A.d()
if(s){s=a.b
s===$&&A.d()
for(r=s+r,l=0,k=0;l<4;++l)for(j=s+B.d3[l];j<r;j+=B.ek[l],++k){if(!i.er(m))return n
i.eT(n,j,o,m)}}else for(j=0;j<r;++j){if(!i.er(m))return n
i.eT(n,j,o,m)}return n},
eT(a,b,c,d){var s,r,q,p=d.length
for(s=0;s<p;++s){r=d[s]
q=a.a
if(q!=null)q.a3(s,b,r,0,0)}},
eq(){var s,r,q,p,o,n=this,m=n.f.ad(6)
if(m!=="GIF87a"&&m!=="GIF89a")return!1
s=n.a
s.toString
s.a=n.f.l()
s=n.a
s.toString
s.b=n.f.l()
r=n.f.E()
s=n.a
s.toString
s.c=new A.bC(new Uint8Array(A.z(A.j([n.f.E()],t.t))));++n.f.d
if((r&128)!==0){s=n.a
s.toString
s.e=A.lM(B.a.O(1,(r&7)+1))
for(q=0;q<n.a.e.b;++q){s=n.f
p=J.c(s.a,s.d++)
s=n.f
o=J.c(s.a,s.d++)
s=n.f
r=J.c(s.a,s.d++)
n.a.e.d.b7(q,p,o,r)}}n.a.toString
return!0},
er(a){var s=this,r=s.as
r.toString
s.as=r-a.length
if(!s.hQ(a))return!1
if(s.as===0)s.cZ()
return!0},
cZ(){var s,r,q,p=this.f
if(p.d>=p.c)return!0
s=p.E()
for(;;){if(s!==0){p=this.f
p=p.d<p.c}else p=!1
if(!p)break
p=this.f
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
s=J.c(q,r)}return!0},
hQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
if(f>4095)return!1
s=a.length
r=0
if(f!==0){q=a.$flags|0
for(;;){if(!(f!==0&&r<s))break
p=r+1
o=g.x
o===$&&A.d()
f=g.ay=f-1
if(!(f>=0))return A.a(o,f)
o=o[f]
q&2&&A.b(a)
if(!(r<s))return A.a(a,r)
a[r]=o
r=p}}for(f=a.$flags|0;r<s;){n=g.ch=g.hP()
if(n==null)return!1
q=g.dx
if(n===q)return!1
o=g.dy
if(n===o){for(o=g.z,m=0;m<=4095;++m){o.toString
o.$flags&2&&A.b(o)
o[m]=4098}g.db=q+1
q=g.Q+1
g.cy=q
g.cx=B.a.X(1,q)
g.CW=4098}else{if(n<o){p=r+1
f&2&&A.b(a)
if(!(r>=0))return A.a(a,r)
a[r]=n
r=p}else{q=g.z
q.toString
if(n>>>0!==n||n>=4096)return A.a(q,n)
if(q[n]===4098){l=g.db-2
if(n===l){n=g.CW
k=g.y
k===$&&A.d()
j=g.x
j===$&&A.d()
i=g.ay++
o=g.ds(q,n,o)
j.$flags&2&&A.b(j)
if(!(i>=0&&i<4095))return A.a(j,i)
j[i]=o
k.$flags&2&&A.b(k)
if(!(l>=0&&l<4096))return A.a(k,l)
k[l]=o}else return!1}m=0
for(;;){h=m+1
if(!(m<=4095&&n>g.dy&&n<=4095))break
q=g.x
q===$&&A.d()
o=g.ay++
l=g.y
l===$&&A.d()
if(!(n>=0&&n<4096))return A.a(l,n)
l=l[n]
q.$flags&2&&A.b(q)
if(!(o>=0&&o<4095))return A.a(q,o)
q[o]=l
n=g.z[n]
m=h}if(h>=4095||n>4095)return!1
q=g.x
q===$&&A.d()
o=g.ay
l=g.ay=o+1
q.$flags&2&&A.b(q)
if(!(o>=0&&o<4095))return A.a(q,o)
q[o]=n
o=l
for(;;){if(!(o!==0&&r<s))break
p=r+1
o=g.ay=o-1
if(!(o>=0&&o<4095))return A.a(q,o)
l=q[o]
f&2&&A.b(a)
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=l
r=p}}q=g.CW
if(q!==4098){o=g.z
o.toString
l=g.db-2
if(!(l>=0&&l<4096))return A.a(o,l)
l=o[l]===4098
o=l}else o=!1
if(o){o=g.z
o.toString
l=g.db-2
o.$flags&2&&A.b(o)
if(!(l>=0&&l<4096))return A.a(o,l)
o[l]=q
k=g.ch
j=g.y
i=g.dy
if(k===l){j===$&&A.d()
q=g.ds(o,q,i)
j.$flags&2&&A.b(j)
j[l]=q}else{j===$&&A.d()
k.toString
q=g.ds(o,k,i)
j.$flags&2&&A.b(j)
j[l]=q}}q=g.ch
q.toString
g.CW=q}}return!0},
hP(){var s,r,q,p,o=this
if(o.cy>12)return null
while(s=o.ax,r=o.cy,s<r){s=o.hc()
s.toString
r=o.at
q=o.ax
o.at=(r|B.a.X(s,q))>>>0
o.ax=q+8}q=o.at
if(!(r>=0&&r<13))return A.a(B.be,r)
p=B.be[r]
o.at=B.a.a0(q,r)
o.ax=s-r
s=o.db
if(s<4097){++s
o.db=s
s=s>o.cx&&r<12}else s=!1
if(s){o.cx=o.cx<<1>>>0
o.cy=r+1}return q&p},
ds(a,b,c){var s,r,q=0
for(;;){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
hc(){var s,r,q=this,p=q.w,o=p[0],n=p.$flags|0
if(o===0){o=q.f.E()
n&2&&A.b(p)
p[0]=o
p=q.w
o=p[0]
if(o===0)return null
B.f.bw(p,1,1+o,q.f.ai(o).a2())
p=q.w
s=p[1]
p.$flags&2&&A.b(p)
p[1]=2
p[0]=p[0]-1}else{r=p[1]
n&2&&A.b(p)
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.cT.prototype={
ae(){return"IcoType."+this.b}}
A.fw.prototype={$iI:1,
gS(){return 0},
gJ(){return 0}}
A.fx.prototype={}
A.fv.prototype={
gJ(){return B.a.Y(A.bh.prototype.gJ.call(this),2)},
gcn(){return!(this.d===40&&this.f===32)&&A.bh.prototype.gcn.call(this)}}
A.ib.prototype={
au(a){var s=A.q(a,!1,null,0)
this.a=s
return this.b=A.lO(s)},
aU(a,b){var s,r,q,p=this
if(p.au(a)==null)return null
s=p.b.e.length
if(s===1)return p.ah(0)
for(r=null,q=0;q<p.b.e.length;++q){b=p.ah(q)
if(b==null)continue
if(r==null){b.w=B.i
r=b}else r.b1(b)}return r},
ah(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=this.a
if(a9!=null){s=this.b
s=s==null||b0>=s.d}else s=!0
if(s)return a8
s=this.b.e
if(!(b0<s.length))return A.a(s,b0)
r=s[b0]
s=a9.a
a9=a9.b+r.e
q=r.d
p=J.ks(s,a9,a9+q)
o=new A.h6(A.m_())
t.D.a(p)
if(o.bj(p))return o.bL(p)
n=A.ef(!1,14)
n.az(19778)
n.aI(q)
n.aI(0)
n.aI(0)
a9=A.q(p,!1,a8,0)
s=A.lB(A.q(J.Z(B.f.gB(n.c),0,n.a),!1,a8,0))
q=a9.d
m=a9.k()
l=a9.k()
k=$.M()
k.$flags&2&&A.b(k)
k[0]=l
l=$.a3()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=a9.k()
l=l[0]
i=a9.l()
h=a9.l()
g=a9.k()
if(g>=14)A.a8(A.n("Unsupported BMP compression type: "+g))
if(!(g<14))return A.a(B.af,g)
g=B.af[g]
a9.k()
k[0]=a9.k()
k[0]=a9.k()
k=a9.k()
a9.k()
f=new A.fv(s,j,l,m,i,h,g,k,q)
f.dV(a9,s)
if(m!==40&&i!==1)return a8
e=k===0&&h<=8?40+4*B.a.O(1,h):40+4*k
s.b=e
n.a-=4
n.aI(e)
d=A.q(p,!1,a8,0)
c=new A.i2(!0)
c.a=d
c.b=f
b=c.ah(0)
if(h>=32)return b
a=32-B.a.a7(j,32)
a0=B.a.Y(a===32?j:j+a,8)
for(a9=l<0,s=l===0,l=1/l<0,a1=0;a1<B.a.Y(A.bh.prototype.gJ.call(f),2);++a1){if(!(s?l:a9))a2=a1
else{q=b.a
q=q==null?a8:q.b
a2=(q==null?0:q)-1-a1}a3=d.aj(a0)
d.d=d.d+(a3.c-a3.d)
q=b.a
a4=q==null?a8:q.L(0,a2,a8)
if(a4==null)a4=new A.H()
for(a5=0;a5<j;){a6=J.c(a3.a,a3.d++)
a7=7
for(;;){if(!(a7>-1&&a5<j))break
if((a6&B.a.X(1,a7))>>>0!==0)a4.sv(0)
a4.F();++a5;--a7}}}return b}}
A.ff.prototype={}
A.bD.prototype={}
A.c0.prototype={}
A.dR.prototype={}
A.jZ.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-a,b,c,d,e)},
$S:4}
A.k_.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-a,this.c-b,c,d,e)},
$S:4}
A.k0.prototype={
$5(a,b,c,d,e){return this.a.a3(a,this.b-b,c,d,e)},
$S:4}
A.k1.prototype={
$5(a,b,c,d,e){return this.a.a3(b,a,c,d,e)},
$S:4}
A.k2.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-b,a,c,d,e)},
$S:4}
A.k3.prototype={
$5(a,b,c,d,e){return this.a.a3(this.b-b,this.c-a,c,d,e)},
$S:4}
A.k4.prototype={
$5(a,b,c,d,e){return this.a.a3(b,this.b-a,c,d,e)},
$S:4}
A.im.prototype={}
A.bG.prototype={}
A.ip.prototype={
k_(a){var s,r,q,p,o,n=this,m=A.q(t.L.a(a),!0,null,0)
n.a=m
s=m.cG(2,0)
if(J.c(s.a,s.d)!==255||J.c(s.a,s.d+1)!==216)return!1
if(n.bx()!==216)return!1
r=n.bx()
q=!1
p=!1
for(;;){if(r!==217){m=n.a
m=m.d<m.c}else m=!1
if(!m)break
o=n.a.l()
if(o<2)break
m=n.a
m.d=m.d+(o-2)
switch(r){case 192:case 193:case 194:q=!0
break
case 218:p=!0
break}r=n.bx()}return q&&p},
jH(a){var s,r,q,p,o,n,m,l=this
l.a=A.q(t.L.a(a),!0,null,0)
if(l.bx()!==216)return null
s=new A.fU()
r=l.bx()
q=!1
p=!1
for(;;){if(r!==217){o=l.a
o=o.d<o.c}else o=!1
if(!o)break
switch(r){case 192:case 193:case 194:n=l.a.l()
if(n<2)A.a8(A.n("Invalid Block"))
o=l.a
a=o.aj(n-2)
o.d=o.d+(a.c-a.d)
l.eG(r,a)
q=!0
break
case 218:l.eL()
p=!0
break
default:l.eL()
break}r=l.bx()}o=l.d
if(o!=null){m=o.e
m.toString
s.a=m
o=o.d
o.toString
s.b=o}o=l.d=null
B.c.d4(l.y)
return q&&p?s:o},
c_(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.a=A.q(t.L.a(a),!0,null,0)
h.iC()
if(h.y.length!==1)throw A.f(A.n("Only single frame JPEGs supported"))
s=h.d
for(r=s.z,q=s.y,p=h.as,o=0;o<r.length;++o){n=q.m(0,r[o])
m=n.a
l=s.f
k=n.b
j=s.r
i=h.hd(s,n)
if(m===l)m=0
else m=m===1&&l===4?2:1
if(k===j)l=0
else l=k===1&&j===4?2:1
B.c.M(p,new A.ff(i,m,l))}},
iC(){var s,r,q,p,o,n,m=this
if(m.bx()!==216)throw A.f(A.n("Start Of Image marker not found."))
s=m.bx()
for(;;){if(s!==217){r=m.a
r===$&&A.d()
r=r.d<r.c}else r=!1
if(!r)break
r=m.a
r===$&&A.d()
q=r.l()
if(q<2)A.a8(A.n("Invalid Block"))
r=m.a
p=r.aj(q-2)
o=r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:m.iD(s,p)
break
case 219:m.iF(p)
break
case 192:case 193:case 194:m.eG(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.f(A.n("Unhandled frame type "+B.a.cv(s,16)))
case 196:m.iE(p)
break
case 221:m.e=p.l()
break
case 218:m.iU(p)
break
case 255:if(J.c(r.a,o)!==255)--m.a.d
break
default:n=!1
if(J.c(r.a,o+-3)===255){r=m.a
if(J.c(r.a,r.d+-2)>=192){r=m.a
r=J.c(r.a,r.d+-2)<=254}else r=n}else r=n
if(r){m.a.d-=3
break}if(s!==0)throw A.f(A.n("Unknown JPEG marker "+B.a.cv(s,16)))
break}s=m.bx()}},
eL(){var s,r=this.a
r===$&&A.d()
s=r.l()
if(s<2)throw A.f(A.n("Invalid Block"))
r=this.a
r.d=r.d+(s-2)},
bx(){var s,r=this,q=r.a
q===$&&A.d()
if(q.d>=q.c)return 0
do{do{s=r.a.E()
if(s!==255){q=r.a
q=q.d<q.c}else q=!1}while(q)
q=r.a
if(q.d>=q.c)return s
do{s=r.a.E()
if(s===255){q=r.a
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.a
q=q.d<q.c}else q=!1}while(q)
return s},
iM(a){var s
for(s=0;s<12;++s)if(J.c(a.a,a.d++)!==B.j6[s])return
this.r=new A.cS("ICC_PROFILE",B.as,a.a2())},
iG(a){if(a.k()!==1165519206)return
if(a.l()!==0)return
this.w.c_(a)},
iD(a,b){var s,r,q,p,o,n=this,m=b
if(a===224){s=m
r=!1
if(J.c(s.a,s.d)===74){s=m
if(J.c(s.a,s.d+1)===70){s=m
if(J.c(s.a,s.d+2)===73){s=m
if(J.c(s.a,s.d+3)===70){s=m
s=J.c(s.a,s.d+4)===0}else s=r}else s=r}else s=r}else s=r
if(s){s=new A.ir()
r=m
J.c(r.a,r.d+5)
r=m
J.c(r.a,r.d+6)
r=m
J.c(r.a,r.d+7)
r=m
J.c(r.a,r.d+8)
r=m
J.c(r.a,r.d+9)
r=m
J.c(r.a,r.d+10)
r=m
J.c(r.a,r.d+11)
r=m
r=J.c(r.a,r.d+12)
s.f=r
q=m
q=J.c(q.a,q.d+13)
s.r=q
n.b=s
m.cG(14+3*r*q,14)}}else if(a===225)n.iG(m)
else if(a===226)n.iM(m)
else if(a===238){s=m
r=!1
if(J.c(s.a,s.d)===65){s=m
if(J.c(s.a,s.d+1)===100){s=m
if(J.c(s.a,s.d+2)===111){s=m
if(J.c(s.a,s.d+3)===98){s=m
if(J.c(s.a,s.d+4)===101){s=m
s=J.c(s.a,s.d+5)===0}else s=r}else s=r}else s=r}else s=r}else s=r
if(s){p=new A.im()
s=m
J.c(s.a,s.d+6)
s=m
J.c(s.a,s.d+7)
s=m
J.c(s.a,s.d+8)
s=m
J.c(s.a,s.d+9)
s=m
J.c(s.a,s.d+10)
s=m
p.d=J.c(s.a,s.d+11)
n.c=p}}else if(a===254)try{m.jM()}catch(o){}},
iF(a){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=this.x;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
o=J.c(p,q)
n=B.a.j(o,4)
o&=15
if(o>=4)throw A.f(A.n("Invalid number of quantization tables"))
if(r[o]==null)B.c.i(r,o,new Int16Array(64))
m=r[o]
for(q=n!==0,l=0;l<64;++l){k=q?a.l():J.c(a.a,a.d++)
m.toString
p=$.hQ()
if(!(l<p.length))return A.a(p,l)
p=p[l]
m.$flags&2&&A.b(m)
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.f(A.n("Bad length for DQT block"))},
eG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.d!=null)throw A.f(A.n("Duplicate JPG frame data found."))
s=A.J(t.p,t.d2)
r=A.j([],t.t)
q=new A.fT(s,r)
q.b=a===194
q.c=b.E()
q.d=b.l()
q.e=b.l()
p=b.E()
for(o=i.x,n=0;n<p;++n){m=J.c(b.a,b.d++)
l=J.c(b.a,b.d++)
k=B.a.j(l,4)
j=J.c(b.a,b.d++)
B.c.M(r,m)
s.i(0,m,new A.bG(k&15,l&15,o,j))}q.jF()
i.d=q
B.c.M(i.y,q)},
iE(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.Q,q=this.z;p=a.d,p<s;){o=a.a
a.d=p+1
n=J.c(o,p)
m=new Uint8Array(16)
for(l=0,k=0;k<16;++k){p=J.c(a.a,a.d++)
if(!(k<16))return A.a(m,k)
m[k]=p
l+=m[k]}j=a.aj(l)
a.d=a.d+(j.c-j.d)
i=j.a2()
if((n&16)!==0){n-=16
h=q}else h=r
if(h.length<=n)B.c.su(h,n+1)
B.c.i(h,n,this.ih(m,i))}},
iU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a.E()
if(b<1||b>4)throw A.f(A.n("Invalid SOS block"))
s=c.d
s.toString
r=A.j([],t.b7)
for(q=c.z,p=c.Q,o=s.y,n=t.g8,m=0;m<b;++m){l=J.c(a.a,a.d++)
k=J.c(a.a,a.d++)
if(!o.af(l))throw A.f(A.n("Invalid Component in SOS block"))
j=o.m(0,l)
j.toString
i=B.a.j(k,4)&15
h=k&15
g=p.length
if(i<g){if(!(i<g))return A.a(p,i)
g=p[i]
g.toString
j.w=n.a(g)}g=q.length
if(h<g){if(!(h<g))return A.a(q,h)
g=q[h]
g.toString
j.x=n.a(g)}B.c.M(r,j)}f=a.E()
e=a.E()
d=a.E()
q=B.a.j(d,4)
p=c.a
p===$&&A.d()
q=new A.fV(p,s,r,c.e,f,e,q&15,d&15)
p=s.w
p===$&&A.d()
q.f=p
q.r=s.b
q.bC()},
ih(a,b){var s,r,q,p,o,n,m,l,k=A.j([],t.gb),j=16
for(;;){if(!(j>0&&a[j-1]===0))break;--j}s=t.fe
B.c.M(k,new A.ds(A.X(2,null,!1,s)))
if(0>=k.length)return A.a(k,0)
r=k[0]
for(q=b.length,p=0,o=0;o<j;){for(n=0;n<a[o];++n){if(0>=k.length)return A.a(k,-1)
r=k.pop()
m=r.b
if(!(p>=0&&p<q))return A.a(b,p)
B.c.i(r.a,m,new A.dR(b[p]))
while(m=r.b,m>0){if(0>=k.length)return A.a(k,-1)
r=k.pop()}r.b=m+1
B.c.M(k,r)
for(;k.length<=o;r=l){m=A.X(2,null,!1,s)
l=new A.ds(m)
B.c.M(k,l)
B.c.i(r.a,r.b,new A.c0(m))}++p}++o
if(o<j){m=A.X(2,null,!1,s)
l=new A.ds(m)
B.c.M(k,l)
B.c.i(r.a,r.b,new A.c0(m))
r=l}}if(0>=k.length)return A.a(k,0)
return k[0].a},
hd(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.e
a===$&&A.d()
s=a1.f
s===$&&A.d()
r=a<<3>>>0
q=new Int32Array(64)
p=new Uint8Array(64)
o=s*8
n=A.X(o,null,!1,t.aD)
for(m=a1.c,l=a1.d,k=0,j=0;j<s;++j){i=j<<3>>>0
for(h=0;h<8;++h,k=g){g=k+1
B.c.i(n,k,new Uint8Array(r))}for(f=0;f<a;++f){if(!(l>=0&&l<4))return A.a(m,l)
e=m[l]
e.toString
d=a1.r
d===$&&A.d()
if(!(j<d.length))return A.a(d,j)
d=d[j]
if(!(f<d.length))return A.a(d,f)
A.rp(e,d[f],p,q)
c=f<<3>>>0
for(e=c+8,b=0;b<8;++b){d=i+b
if(!(d<o))return A.a(n,d)
d=n[d]
if(d!=null)B.f.am(d,c,e,p,b<<3>>>0)}}}return n}}
A.ds.prototype={}
A.fT.prototype={
jF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.l(s).p("R<1>"),q=new A.R(s,s.r,s.e,r);q.F();){p=s.m(0,q.d)
a.f=Math.max(a.f,p.a)
a.r=Math.max(a.r,p.b)}q=a.e
q.toString
a.w=B.b.b2(q/8/a.f)
q=a.d
q.toString
a.x=B.b.b2(q/8/a.r)
for(r=new A.R(s,s.r,s.e,r),q=t.fv,o=t.an,n=t.f0;r.F();){m=s.m(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.b.b2(B.b.b2(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.b.b2(B.b.b2(l/8)*i/a.r)
g=a.w*k
f=a.x*i
e=J.ai(f,n)
for(d=0;d<f;++d){c=J.ai(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.r=q.a(e)}}}
A.fU.prototype={$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.ir.prototype={}
A.fV.prototype={
bC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.y,a0=a.length,a1=b.r
a1.toString
if(a1)if(b.Q===0)s=b.at===0?b.ghB():b.ghD()
else s=b.at===0?b.ghs():b.ghu()
else s=b.ghy()
a1=a0===1
if(a1){if(0>=a0)return A.a(a,0)
r=a[0]
q=r.e
q===$&&A.d()
r=r.f
r===$&&A.d()
p=q*r}else{r=b.f
r===$&&A.d()
q=b.b.x
q===$&&A.d()
p=r*q}r=b.z
if(r==null||r===0)b.z=p
for(r=b.a,q=t.fb,o=0;o<p;){for(n=0;n<a0;++n){if(!(n<a.length))return A.a(a,n)
a[n].y=0}b.CW=0
if(a1){if(0>=a.length)return A.a(a,0)
m=a[0]
l=0
for(;;){k=b.z
k.toString
if(!(l<k))break
q.a(s)
k=m.e
k===$&&A.d()
j=B.a.aA(o,k)
i=B.a.a7(o,k)
k=m.r
k===$&&A.d()
if(!(j>=0&&j<k.length))return A.a(k,j)
k=k[j]
if(!(i>=0&&i<k.length))return A.a(k,i)
s.$2(m,k[i]);++o;++l}}else{l=0
for(;;){k=b.z
k.toString
if(!(l<k))break
for(n=0;n<a0;++n){if(!(n<a.length))return A.a(a,n)
m=a[n]
h=m.a
g=m.b
for(f=0;f<g;++f)for(e=0;e<h;++e)b.hG(m,s,o,f,e)}++o;++l}}b.ch=0
if(o>=p)break
d=J.c(r.a,r.d)
c=J.c(r.a,r.d+1)
if(d===255)if(c>=208&&c<=215)r.d+=2
else break}},
bV(){var s,r=this,q=r.ch
if(q>0){--q
r.ch=q
return B.a.bp(r.ay,q)&1}q=r.a
if(q.d>=q.c)return null
s=q.E()
r.ay=s
if(s===255)if(q.E()!==0)return null
r.ch=7
return B.a.j(r.ay,7)&1},
cf(a){var s,r,q=new A.c0(t.g8.a(a))
while(s=this.bV(),s!=null){if(q instanceof A.c0){r=q.a
if(s>>>0!==s||s>=2)return A.a(r,s)
q=r[s]}if(q instanceof A.dR)return q.a}return null},
dB(a){var s,r
for(s=0;a>0;){r=this.bV()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
ci(a){var s
if(a==null)return 0
if(a===1)return this.bV()===1?1:-1
s=this.dB(a)
if(s==null)return 0
if(s>=B.a.X(1,a-1))return s
return s+B.a.O(-1,a)+1},
hz(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=a.w
s===$&&A.d()
r=k.cf(s)
q=r===0?0:k.ci(r)
s=a.y
s===$&&A.d()
s+=q
a.y=s
b.$flags&2&&A.b(b)
b[0]=s
for(p=1;p<64;){s=a.x
s===$&&A.d()
o=k.cf(s)
if(o==null)break
n=o&15
m=o>>>4
if(n===0){if(m<15)break
p+=16
continue}p+=m
n=k.ci(n)
s=$.hQ()
if(!(p>=0&&p<s.length))return A.a(s,p)
l=s[p]
b.$flags&2&&A.b(b)
if(!(l<64))return A.a(b,l)
b[l]=n;++p}},
hC(a,b){var s,r,q
t.L.a(b)
s=a.w
s===$&&A.d()
r=this.cf(s)
q=r===0?0:B.a.O(this.ci(r),this.ax)
s=a.y
s===$&&A.d()
s+=q
a.y=s
b.$flags&2&&A.b(b)
b[0]=s},
hE(a,b){var s,r
t.L.a(b)
s=b[0]
r=this.bV()
r.toString
r=B.a.O(r,this.ax)
b.$flags&2&&A.b(b)
b[0]=(s|r)>>>0},
ht(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=k.CW
if(s>0){k.CW=s-1
return}r=k.Q
q=k.as
for(s=k.ax;r<=q;){p=a.x
p===$&&A.d()
p=k.cf(p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){s=k.dB(n)
s.toString
k.CW=s+B.a.O(1,n)-1
break}r+=16
continue}r+=n
p=$.hQ()
if(!(r>=0&&r<p.length))return A.a(p,r)
m=p[r]
p=k.ci(o)
l=B.a.O(1,s)
b.$flags&2&&A.b(b)
if(!(m<64))return A.a(b,m)
b[m]=p*l;++r}},
hv(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.L.a(b)
s=j.Q
r=j.as
A:for(q=j.ax,p=0;s<=r;){o=$.hQ()
if(!(s>=0&&s<o.length))return A.a(o,s)
n=o[s]
o=j.cx
switch(o){case 0:o=a.x
o===$&&A.d()
m=j.cf(o)
if(m==null)throw A.f(A.n("Invalid progressive encoding"))
l=m&15
p=m>>>4
if(l===0)if(p<15){o=j.dB(p)
o.toString
j.CW=o+B.a.O(1,p)
j.cx=4}else{j.cx=1
p=16}else{if(l!==1)throw A.f(A.n("invalid ACn encoding"))
j.cy=j.ci(l)
j.cx=p!==0?2:3}continue A
case 1:case 2:if(!(n<64))return A.a(b,n)
k=b[n]
if(k!==0){o=j.bV()
o.toString
o=B.a.O(o,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=k+o}else{--p
if(p===0)j.cx=o===2?3:0}break
case 3:if(!(n<64))return A.a(b,n)
o=b[n]
if(o!==0){k=j.bV()
k.toString
k=B.a.O(k,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=o+k}else{o=j.cy
o===$&&A.d()
o=B.a.O(o,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=o
j.cx=0}break
case 4:if(!(n<64))return A.a(b,n)
o=b[n]
if(o!==0){k=j.bV()
k.toString
k=B.a.O(k,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=o+k}break}++s}if(j.cx===4)if(--j.CW===0)j.cx=0},
hG(a,b,c,d,e){var s,r,q,p,o
t.fb.a(b)
s=this.f
s===$&&A.d()
r=B.a.aA(c,s)*a.b+d
q=B.a.a7(c,s)*a.a+e
s=a.r
s===$&&A.d()
p=s.length
if(r>=p)return
if(!(r>=0))return A.a(s,r)
s=s[r]
o=s.length
if(q>=o)return
if(!(q>=0))return A.a(s,q)
b.$2(a,s[q])}}
A.fS.prototype={
bj(a){var s=a.length,r=!0
if(s>=2){if(0>=s)return A.a(a,0)
if(a[0]===255){if(1>=s)return A.a(a,1)
s=a[1]!==216}else s=r}else s=r
if(s)return!1
return A.kF().k_(a)},
au(a){A.q(a,!0,null,0)
return A.kF().jH(a)},
aU(a,b){var s=A.kF()
s.c_(a)
if(s.y.length!==1)throw A.f(A.n("only single frame JPEGs supported"))
return A.r9(s)},
bL(a){return this.aU(a,null)}}
A.io.prototype={
ae(){return"JpegChroma."+this.b}}
A.iq.prototype={
fF(a){a=B.a.h(B.a.K(a,1,100))
if(this.at===a)return
this.ia(a<50?B.b.bN(5000/a):B.a.bN(200-a*2))
this.at=a},
fb(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=A.ef(!0,8192)
b2.bA(b3,216)
b2.bA(b3,224)
b3.az(16)
b3.C(74)
b3.C(70)
b3.C(73)
b3.C(70)
b3.C(0)
b3.C(1)
b3.C(1)
b3.C(0)
b3.az(1)
b3.az(1)
b3.C(0)
b3.C(0)
b2.j6(b3,b4.gbD())
s=b4.c
if(s!=null){b2.bA(b3,226)
r=s.jo()
q=A.j([73,67,67,95,80,82,79,70,73,76,69,0],t.t)
b3.az(14+r.length)
b3.aV(q)
b3.aV(r)}b2.j5(b3)
s=b4.gS()
p=b4.gJ()
b2.bA(b3,192)
b3.az(17)
b3.C(8)
b3.az(p)
b3.az(s)
b3.C(3)
b3.C(1)
s=b5===B.at
b3.C(s?17:34)
b3.C(0)
b3.C(2)
b3.C(17)
b3.C(1)
b3.C(3)
b3.C(17)
b3.C(1)
b2.j4(b3)
b2.bA(b3,218)
b3.az(12)
b3.C(3)
b3.C(1)
b3.C(0)
b3.C(2)
b3.C(17)
b3.C(3)
b3.C(17)
b3.C(0)
b3.C(63)
b3.C(0)
b2.ax=0
b2.ay=7
o=b4.gS()
n=b4.gJ()
if(s){m=new Float32Array(64)
l=new Float32Array(64)
k=new Float32Array(64)
for(s=b2.c,p=b2.d,j=0,i=0,h=0,g=0;g<n;g+=8)for(f=0;f<o;f+=8){b2.cb(b4,f,g,o,n,m,l,k,B.T)
e=b2.e
d=b2.r
d===$&&A.d()
j=b2.by(b3,m,s,j,e,d)
d=b2.f
e=b2.w
e===$&&A.d()
i=b2.by(b3,l,p,i,d,e)
h=b2.by(b3,k,p,h,b2.f,b2.w)}}else{s=t.h4
m=J.c7(4,s)
for(c=0;c<4;++c)m[c]=new Float32Array(64)
l=J.c7(4,s)
for(c=0;c<4;++c)l[c]=new Float32Array(64)
k=J.c7(4,s)
for(c=0;c<4;++c)k[c]=new Float32Array(64)
b=new Float32Array(64)
a=new Float32Array(64)
for(s=b2.c,p=b2.d,j=0,i=0,h=0,g=0;g<n;g+=16)for(e=g+8,f=0;f<o;f+=16){d=m[0]
a0=l[0]
a1=k[0]
b2.cb(b4,f,g,o,n,d,a0,a1,B.T)
a2=f+8
a3=m[1]
a4=l[1]
a5=k[1]
b2.cb(b4,a2,g,o,n,a3,a4,a5,B.T)
a6=m[2]
a7=l[2]
a8=k[2]
b2.cb(b4,f,e,o,n,a6,a7,a8,B.T)
a9=m[3]
b0=l[3]
b1=k[3]
b2.cb(b4,a2,e,o,n,a9,b0,b1,B.T)
b2.ej(b,a0,a4,a7,b0)
b2.ej(a,a1,a5,a8,b1)
b1=b2.e
a8=b2.r
a8===$&&A.d()
j=b2.by(b3,a9,s,b2.by(b3,a6,s,b2.by(b3,a3,s,b2.by(b3,d,s,j,b1,a8),b2.e,b2.r),b2.e,b2.r),b2.e,b2.r)
a8=b2.f
b1=b2.w
b1===$&&A.d()
i=b2.by(b3,b,p,i,a8,b1)
h=b2.by(b3,a,p,h,b2.f,b2.w)}}s=b2.ay
if(s>=0){++s
b2.bz(b3,A.j([B.a.X(1,s)-1,s],t.t))}b2.bA(b3,217)
return J.Z(B.f.gB(b3.c),0,b3.a)},
cb(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(s=this.as,r=c+1,q=0;q<64;++q){p=q>>>3
o=c+p
n=b+(q&7)
if(o>=a0)o-=r+p-a0
if(n>=d)n-=n-d+1
m=a.a
l=m==null?null:m.L(n,o,null)
if(l==null)l=new A.H()
if(l.gI()!==B.e)l=l.b3(B.e)
if(l.gu(l)>3){k=l.gW()
j=1-k
l.sn(B.b.aH(l.gn()*k+a4.m(0,0)*j))
l.sq(B.b.aH(l.gq()*k+a4.m(0,1)*j))
l.st(B.b.aH(l.gt()*k+a4.m(0,2)*j))}i=B.b.h(l.gn())
h=B.b.h(l.gq())
g=B.b.h(l.gt())
if(!(i>=0&&i<2048))return A.a(s,i)
m=s[i]
f=h+256
if(!(f>=0&&f<2048))return A.a(s,f)
f=s[f]
e=g+512
if(!(e>=0&&e<2048))return A.a(s,e)
e=B.a.j(m+f+s[e],16)
a1.$flags&2&&A.b(a1)
if(!(q<64))return A.a(a1,q)
a1[q]=e-128
e=i+768
if(!(e<2048))return A.a(s,e)
e=s[e]
f=h+1024
if(!(f>=0&&f<2048))return A.a(s,f)
f=s[f]
m=g+1280
if(!(m>=0&&m<2048))return A.a(s,m)
m=B.a.j(e+f+s[m],16)
a2.$flags&2&&A.b(a2)
if(!(q<64))return A.a(a2,q)
a2[q]=m-128
m=i+1280
if(!(m<2048))return A.a(s,m)
m=s[m]
f=h+1536
if(!(f>=0&&f<2048))return A.a(s,f)
f=s[f]
e=g+1792
if(!(e>=0&&e<2048))return A.a(s,e)
e=B.a.j(m+f+s[e],16)
a3.$flags&2&&A.b(a3)
if(!(q<64))return A.a(a3,q)
a3[q]=e-128}},
ej(a,b,c,d,e){var s,r,q,p,o,n,m,l
for(s=a.$flags|0,r=0;r<64;++r){if(r<32)q=B.a.a7(r,8)<4?b:c
else q=B.a.a7(r,8)<4?d:e
p=(B.a.Y(B.a.a7(r,32),8)<<4>>>0)+(B.a.a7(r,4)<<1>>>0)
if(!(p<64))return A.a(q,p)
o=q[p]
n=p+1
if(!(n<64))return A.a(q,n)
n=q[n]
m=p+8
if(!(m<64))return A.a(q,m)
m=q[m]
l=p+9
if(!(l<64))return A.a(q,l)
l=q[l]
s&2&&A.b(a)
if(!(r<64))return A.a(a,r)
a[r]=(o+n+m+l)/4}},
bA(a,b){a.C(255)
a.C(b&255)},
ia(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.a,r=s.$flags|0,q=0;q<64;++q){p=B.b.bN((B.hG[q]*a+50)/100)
if(p<1)p=1
else if(p>255)p=255
o=B.U[q]
r&2&&A.b(s)
if(!(o<64))return A.a(s,o)
s[o]=p}for(r=b.b,o=r.$flags|0,n=0;n<64;++n){m=B.b.bN((B.e5[n]*a+50)/100)
if(m<1)m=1
else if(m>255)m=255
l=B.U[n]
o&2&&A.b(r)
if(!(l<64))return A.a(r,l)
r[l]=m}for(o=b.c,l=o.$flags|0,k=b.d,j=k.$flags|0,i=0,h=0;h<8;++h)for(g=0;g<8;++g){if(!(i>=0&&i<64))return A.a(B.U,i)
f=B.U[i]
if(!(f<64))return A.a(s,f)
e=s[f]
d=B.bd[h]
c=B.bd[g]
l&2&&A.b(o)
o[i]=1/(e*d*c*8)
f=r[f]
j&2&&A.b(k)
k[i]=1/(f*d*c*8);++i}},
cK(a,b){var s,r,q,p,o,n,m,l=t.L
l.a(a)
l.a(b)
l=t.t
s=A.j([A.j([],l)],t.ca)
for(r=b.length,q=0,p=0,o=1;o<=16;++o){for(n=1;n<=a[o];++n){if(!(p>=0&&p<r))return A.a(b,p)
m=b[p]
if(s.length<=m)B.c.su(s,m+1)
B.c.i(s,m,A.j([q,o],l));++p;++q}q*=2}return s},
i8(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.y,r=this.x,q=t.t,p=1,o=2,n=1;n<=15;++n){for(m=p;m<o;++m){l=32767+m
B.c.i(s,l,n)
B.c.i(r,l,A.j([m,n],q))}for(l=o-1,k=-l,j=-p;k<=j;++k){i=32767+k
B.c.i(s,i,n)
B.c.i(r,i,A.j([l+k,n],q))}p=p<<1>>>0
o=o<<1>>>0}},
ib(){var s,r,q
for(s=this.as,r=s.$flags|0,q=0;q<256;++q){r&2&&A.b(s)
s[q]=19595*q
s[q+256]=38470*q
s[q+512]=7471*q+32768
s[q+768]=-11059*q
s[q+1024]=-21709*q
s[q+1280]=32768*q+8421375
s[q+1536]=-27439*q
s[q+1792]=-5329*q}},
hZ(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=t.dg
d5.a(d6)
d5.a(d7)
for(d5=d6.$flags|0,s=0,r=0;r<8;++r){if(!(s<64))return A.a(d6,s)
q=d6[s]
p=s+1
if(!(p<64))return A.a(d6,p)
o=d6[p]
n=s+2
if(!(n<64))return A.a(d6,n)
m=d6[n]
l=s+3
if(!(l<64))return A.a(d6,l)
k=d6[l]
j=s+4
if(!(j<64))return A.a(d6,j)
i=d6[j]
h=s+5
if(!(h<64))return A.a(d6,h)
g=d6[h]
f=s+6
if(!(f<64))return A.a(d6,f)
e=d6[f]
d=s+7
if(!(d<64))return A.a(d6,d)
c=d6[d]
b=q+c
a=q-c
a0=o+e
a1=o-e
a2=m+g
a3=m-g
a4=k+i
a5=b+a4
a6=b-a4
a7=a0+a2
d5&2&&A.b(d6)
if(!(s<64))return A.a(d6,s)
d6[s]=a5+a7
if(!(j<64))return A.a(d6,j)
d6[j]=a5-a7
a8=(a0-a2+a6)*0.707106781
if(!(n<64))return A.a(d6,n)
d6[n]=a6+a8
if(!(f<64))return A.a(d6,f)
d6[f]=a6-a8
a5=k-i+a3
a9=a1+a
b0=(a5-a9)*0.382683433
b1=0.5411961*a5+b0
b2=1.306562965*a9+b0
b3=(a3+a1)*0.707106781
b4=a+b3
b5=a-b3
if(!(h<64))return A.a(d6,h)
d6[h]=b5+b1
if(!(l<64))return A.a(d6,l)
d6[l]=b5-b1
if(!(p<64))return A.a(d6,p)
d6[p]=b4+b2
if(!(d<64))return A.a(d6,d)
d6[d]=b4-b2
s+=8}for(s=0,r=0;r<8;++r){if(!(s<64))return A.a(d6,s)
q=d6[s]
p=s+8
if(!(p<64))return A.a(d6,p)
o=d6[p]
n=s+16
if(!(n<64))return A.a(d6,n)
m=d6[n]
l=s+24
if(!(l<64))return A.a(d6,l)
k=d6[l]
j=s+32
if(!(j<64))return A.a(d6,j)
i=d6[j]
h=s+40
if(!(h<64))return A.a(d6,h)
g=d6[h]
f=s+48
if(!(f<64))return A.a(d6,f)
e=d6[f]
d=s+56
if(!(d<64))return A.a(d6,d)
c=d6[d]
b6=q+c
b7=q-c
b8=o+e
b9=o-e
c0=m+g
c1=m-g
c2=k+i
c3=b6+c2
c4=b6-c2
c5=b8+c0
d5&2&&A.b(d6)
if(!(s<64))return A.a(d6,s)
d6[s]=c3+c5
if(!(j<64))return A.a(d6,j)
d6[j]=c3-c5
c6=(b8-c0+c4)*0.707106781
if(!(n<64))return A.a(d6,n)
d6[n]=c4+c6
if(!(f<64))return A.a(d6,f)
d6[f]=c4-c6
c3=k-i+c1
c7=b9+b7
c8=(c3-c7)*0.382683433
c9=0.5411961*c3+c8
d0=1.306562965*c7+c8
d1=(c1+b9)*0.707106781
d2=b7+d1
d3=b7-d1
if(!(h<64))return A.a(d6,h)
d6[h]=d3+c9
if(!(l<64))return A.a(d6,l)
d6[l]=d3-c9
if(!(p<64))return A.a(d6,p)
d6[p]=d2+d0
if(!(d<64))return A.a(d6,d)
d6[d]=d2-d0;++s}for(d5=this.z,r=0;r<64;++r){d4=d6[r]*d7[r]
B.c.i(d5,r,d4>0?B.b.h(d4+0.5):B.b.h(d4-0.5))}return d5},
j6(a,b){var s,r
if(b.gav(0))return
s=A.ef(!1,8192)
b.aK(s)
r=J.Z(B.f.gB(s.c),0,s.a)
this.bA(a,225)
a.az(r.length+8)
a.aI(1165519206)
a.az(0)
a.aV(r)},
j5(a){var s,r,q
this.bA(a,219)
a.az(132)
a.C(0)
for(s=this.a,r=0;r<64;++r)a.C(s[r])
a.C(1)
for(s=this.b,q=0;q<64;++q)a.C(s[q])},
j4(a){var s,r,q,p,o,n,m,l
this.bA(a,196)
a.az(418)
a.C(0)
for(s=0;s<16;){++s
a.C(B.bQ[s])}for(r=0;r<=11;++r)a.C(B.a6[r])
a.C(16)
for(q=0;q<16;){++q
a.C(B.b6[q])}for(p=0;p<=161;++p)a.C(B.bf[p])
a.C(1)
for(o=0;o<16;){++o
a.C(B.br[o])}for(n=0;n<=11;++n)a.C(B.a6[n])
a.C(17)
for(m=0;m<16;){++m
a.C(B.bk[m])}for(l=0;l<=161;++l)a.C(B.bA[l])},
by(a,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.dg
b.a(a0)
b.a(a1)
t.fl.a(a3)
t.d.a(a4)
b=a4.length
if(0>=b)return A.a(a4,0)
s=a4[0]
if(240>=b)return A.a(a4,240)
r=a4[240]
q=c.hZ(a0,a1)
for(b=c.Q,p=0;p<64;++p)B.c.i(b,B.U[p],q[p])
o=b[0]
o.toString
n=o-a2
if(n===0){if(0>=a3.length)return A.a(a3,0)
m=a3[0]
m.toString
c.bz(a,m)}else{l=32767+n
a3.toString
m=c.y
if(!(l>=0&&l<65535))return A.a(m,l)
m=m[l]
m.toString
if(!(m<a3.length))return A.a(a3,m)
m=a3[m]
m.toString
c.bz(a,m)
m=c.x[l]
m.toString
c.bz(a,m)}k=63
for(;;){if(!(k>0&&b[k]===0))break;--k}if(k===0){s.toString
c.bz(a,s)
return o}for(m=c.y,j=c.x,i=1;i<=k;){h=i
for(;;){if(!(h>=0&&h<64))return A.a(b,h)
if(!(b[h]===0&&h<=k))break;++h}g=h-i
if(g>=16){f=B.a.j(g,4)
for(e=1;e<=f;++e){r.toString
c.bz(a,r)}g&=15}d=b[h]
d.toString
l=32767+d
if(!(l>=0&&l<65535))return A.a(m,l)
d=m[l]
d.toString
d=(g<<4>>>0)+d
if(!(d<a4.length))return A.a(a4,d)
d=a4[d]
d.toString
c.bz(a,d)
d=j[l]
d.toString
c.bz(a,d)
i=h+1}if(k!==63){s.toString
c.bz(a,s)}return o},
bz(a,b){var s,r,q,p=this
t.L.a(b)
s=b.length
if(0>=s)return A.a(b,0)
r=b[0]
if(1>=s)return A.a(b,1)
q=b[1]-1
while(q>=0){if((r&B.a.X(1,q))>>>0!==0)p.ax=(p.ax|B.a.X(1,p.ay))>>>0;--q
if(--p.ay<0){s=p.ax
if(s===255){a.C(255)
a.C(0)}else a.C(s)
p.ay=7
p.ax=0}}}}
A.da.prototype={
ae(){return"PngDisposeMode."+this.b}}
A.er.prototype={
ae(){return"PngBlendMode."+this.b}}
A.es.prototype={}
A.fJ.prototype={}
A.bJ.prototype={
ae(){return"PngFilterType."+this.b}}
A.h7.prototype={
sT(a){this.w=t.di.a(a)},
sjW(a){this.x=t.T.a(a)},
$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.fK.prototype={}
A.h6.prototype={
bj(a){var s,r=A.q(a,!0,null,0).ai(8)
for(s=0;s<8;++s)if(J.c(r.a,r.d+s)!==B.bF[s])return!1
return!0},
au(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=A.q(b7,!0,b5,0)
b4.d=b6
s=b6.ai(8)
for(r=0;r<8;++r)if(J.c(s.a,s.d+r)!==B.bF[r])return b5
for(b6=b4.a,q=b6.cy,p=t.t,o=b6.db,n=t.L,m=b6.ax;;){l=b4.d
k=l.d-l.b
j=l.k()
i=b4.d.ad(4)
switch(i){case"tEXt":l=b4.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
g=h.a2()
f=g.length
for(r=0;r<f;++r)if(g[r]===0){l=r+1
m.i(0,B.aQ.bL(new Uint8Array(g.subarray(0,A.b2(0,r,f)))),B.aQ.bL(new Uint8Array(g.subarray(l,A.b2(l,b5,f)))))
break}b4.d.d+=4
break
case"pHYs":l=b4.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
e=A.o(h,b5,0)
e.k()
e.k()
J.c(e.a,e.d++)
b4.d.d+=4
break
case"IHDR":l=b4.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
d=A.o(h,b5,0)
c=d.a2()
b6.a=d.k()
b6.b=d.k()
b6.c=J.c(d.a,d.d++)
b6.d=J.c(d.a,d.d++)
J.c(d.a,d.d++)
b6.f=J.c(d.a,d.d++)
b6.r=J.c(d.a,d.d++)
l=b6.d
if(!(l===0||l===2||l===3||l===4||l===6))return b5
if(b6.f!==0)return b5
switch(l){case 0:if(!B.c.bX(A.j([1,2,4,8,16],p),b6.c))return b5
break
case 2:if(!B.c.bX(A.j([8,16],p),b6.c))return b5
break
case 3:if(!B.c.bX(A.j([1,2,4,8],p),b6.c))return b5
break
case 4:if(!B.c.bX(A.j([8,16],p),b6.c))return b5
break
case 6:if(!B.c.bX(A.j([8,16],p),b6.c))return b5
break}if(b4.d.k()!==A.cx(n.a(c),A.cx(new A.aR(i),0)))throw A.f(A.n("Invalid "+i+" checksum"))
break
case"PLTE":l=b4.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
b6.sT(h.a2())
if(b4.d.k()!==A.cx(n.a(n.a(b6.w)),A.cx(new A.aR(i),0)))throw A.f(A.n("Invalid "+i+" checksum"))
break
case"tRNS":l=b4.d
h=l.aj(j)
l.d=l.d+(h.c-h.d)
b6.sjW(h.a2())
b=b4.d.k()
l=b6.x
l.toString
if(b!==A.cx(n.a(l),A.cx(new A.aR(i),0)))throw A.f(A.n("Invalid "+i+" checksum"))
break
case"IEND":b4.d.d+=4
break
case"gAMA":if(j!==4)throw A.f(A.n("Invalid gAMA chunk"))
b4.d.k()
b4.d.d+=4
break
case"IDAT":B.c.M(o,k)
l=b4.d
l.d=(l.d+=j)+4
break
case"acTL":b6.CW=b4.d.k()
b4.d.k()
b4.d.d+=4
break
case"fcTL":b4.d.k()
a=b4.d.k()
a0=b4.d.k()
a1=b4.d.k()
a2=b4.d.k()
a3=b4.d.l()
a4=b4.d.l()
l=b4.d
a5=J.c(l.a,l.d++)
l=b4.d
a6=J.c(l.a,l.d++)
if(!(a5>=0&&a5<3))return A.a(B.b5,a5)
l=B.b5[a5]
if(!(a6>=0&&a6<2))return A.a(B.bs,a6)
a7=B.bs[a6]
B.c.M(q,new A.fJ(A.j([],p),a,a0,a1,a2,a3,a4,l,a7))
b4.d.d+=4
break
case"fdAT":b4.d.k()
B.c.M(B.c.gfi(q).y,k)
l=b4.d
l.d=(l.d+=j-4)+4
break
case"bKGD":l=b6.d
if(l===3){l=b4.d
a8=J.c(l.a,l.d++);--j
a9=a8*3
l=b6.w
a7=l.length
if(!(a9>=0&&a9<a7))return A.a(l,a9)
b0=l[a9]
b1=a9+1
if(!(b1<a7))return A.a(l,b1)
b2=l[b1]
b1=a9+2
if(!(b1<a7))return A.a(l,b1)
b3=l[b1]
l=b6.x
if(l!=null){l=B.f.bX(l,a8)?0:255
a7=new Uint8Array(4)
a7[0]=b0
a7[1]=b2
a7[2]=b3
a7[3]=l
b6.z=new A.cK(a7)}else{l=new Uint8Array(3)
l[0]=b0
l[1]=b2
l[2]=b3
b6.z=new A.fe(l)}}else if(l===0||l===4){b4.d.l()
j-=2}else if(l===2||l===6){l=b4.d
l.l()
l.l()
l.l()
j-=24}if(j>0)b4.d.d+=j
b4.d.d+=4
break
case"iCCP":b6.Q=b4.d.cs()
l=b4.d
J.c(l.a,l.d++)
l=b6.Q
a7=b4.d
h=a7.aj(j-(l.length+2))
a7.d=a7.d+(h.c-h.d)
b6.at=h.a2()
b4.d.d+=4
break
case"cICP":l=b4.d
a7=l.d
if(j===4){b1=l.a
l.d=a7+1
J.c(b1,a7)
a7=b4.d
J.c(a7.a,a7.d++)
a7=b4.d
J.c(a7.a,a7.d++)
a7=b4.d
J.c(a7.a,a7.d++)}else l.d=a7+j
b4.d.d+=4
break
default:l=b4.d
l.d=(l.d+=j)+4
break}if(i==="IEND")break
l=b4.d
if(l.d>=l.c)return b5}return b6},
ah(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=null,b8=b5.a,b9=b8.a,c0=b8.b,c1=b8.cy,c2=c1.length
if(c2===0||c3===0){r=A.j([],t.h)
c1=b8.db
q=c1.length
for(c2=t.L,p=0,o=0;o<q;++o){n=b5.d
n===$&&A.d()
if(!(o<c1.length))return A.a(c1,o)
n.d=c1[o]
m=n.k()
l=b5.d.ad(4)
n=b5.d
k=n.aj(m)
n.d=n.d+(k.c-k.d)
j=k.a2()
p+=j.length
B.c.M(r,j)
if(b5.d.k()!==A.cx(c2.a(j),A.cx(new A.aR(l),0)))throw A.f(A.n("Invalid "+l+" checksum"))}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.ab)(r),++h){j=r[h]
J.lz(b7,i,j)
i+=j.length}}else{if(c3>=c2)throw A.f(A.n("Invalid Frame Number: "+c3))
if(!(c3<c2))return A.a(c1,c3)
g=c1[c3]
b9=g.b
c0=g.c
r=A.j([],t.h)
for(c1=g.y,p=0,o=0;o<c1.length;++o){c2=b5.d
c2===$&&A.d()
c2.d=c1[o]
m=c2.k()
c2=b5.d
c2.ad(4)
c2.d+=4
c2=b5.d
k=c2.aj(m-4)
c2.d=c2.d+(k.c-k.d)
j=k.a2()
p+=j.length
B.c.M(r,j)}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.ab)(r),++h){j=r[h]
J.lz(b7,i,j)
i+=j.length}}c1=b8.d
f=1
if(!(c1===3))if(!(c1===0)){if(c1===4)c1=2
else c1=c1===6?4:3
f=c1}s=null
try{s=B.C.bM(b7)}catch(e){return b6}d=A.q(s,!0,b6,0)
b5.c=b5.b=0
c=b6
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
b=c2/3|0
a=b8.x
n=a!=null
a0=n?a.length:0
a1=n?4:3
c=new A.aY(new Uint8Array(b*a1),b,a1)
for(n=a1===4,o=0,a2=0;o<b;++o,a2+=3){if(n&&o<a0){if(!(o<a.length))return A.a(a,o)
a3=a[o]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
c.cF(o,a4,a5,c1[a6],a3)}}}if(b8.d===0&&b8.x!=null&&c==null&&b8.c<=8){a=b8.x
a7=a.length
c1=b8.c
b=B.a.X(1,c1)
c2=b*4
n=new Uint8Array(c2)
c=new A.aY(n,b,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(o=0;o<b;++o){a9=o*a8
c.cF(o,a9,a9,a9,255)}for(o=0;o<a7;o+=2){c1=a[o]
a4=o+1
if(!(a4<a7))return A.a(a,a4)
b0=(c1&255)<<8|a[a4]&255
if(b0<b){c1=b0*4+3
if(!(c1<c2))return A.a(n,c1)
n[c1]=0}}}c1=b8.c
if(c1===1)b1=B.w
else if(c1===2)b1=B.A
else{if(c1===4)c2=B.B
else c2=c1===16?B.l:B.e
b1=c2}c2=b8.d
if(c2===0&&b8.x!=null&&c1>8)f=4
b2=A.O(b6,b6,b1,0,B.i,c0,b6,0,c2===2&&b8.x!=null?4:f,c,B.e,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.bU(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.bU(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.bU(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.bU(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.bU(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.bU(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.bU(d,b2,0,1,1,2,b9,c0>>>1)}else b5.ix(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.cS(b8.Q,B.cU,c1)
b8=b8.ax
if(b8.a!==0)b2.j8(b8)
return b2},
aU(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(b.au(t.D.a(a0))==null)return a
s=b.a
r=s.cy
q=r.length
if(q===0){s=b.ah(0)
s.toString
return s}for(q=t.g,p=a,o=p,n=0;n<s.CW;++n){if(!(n<r.length))return A.a(r,n)
a1=r[n]
m=b.ah(n)
if(m==null)continue
if(o==null||p==null){o=m.f8(m.gc6())
l=a1.f
o.y=B.b.h((l===0||a1.r===0?0:l/a1.r)*1000)
p=o
continue}l=n-1
if(!(l>=0&&l<r.length))return A.a(r,l)
k=r[l]
j=m.a
i=j==null
h=i?a:j.a
if(h==null)h=0
g=p.a
f=g==null
e=f?a:g.a
if(h===(e==null?0:e)){j=i?a:j.b
if(j==null)j=0
i=f?a:g.b
j=j===(i==null?0:i)&&a1.d===0&&a1.e===0&&a1.x===B.bU}else j=!1
if(j){l=a1.f
m.y=B.b.h((l===0||a1.r===0?0:l/a1.r)*1000)
o.b1(m)
p=m
continue}d=o.x
if(d===$)d=o.x=A.j([],q)
if(!(l<d.length))return A.a(d,l)
p=A.bF(d[l],!1,!1)
c=k.w
if(c===B.bW){l=k.d
j=k.e
i=s.z
if(i==null){i=new Uint8Array(4)
h=new A.cK(i)
i[0]=0
i[1]=0
i[2]=0
i[3]=0
i=h}A.r5(p,!1,i,l,l+k.b-1,j,j+k.c-1)}else if(c===B.bX&&n>1){l=n-2
d=o.x
if(d===$)d=o.x=A.j([],q)
if(!(l>=0&&l<d.length))return A.a(d,l)
j=k.d
i=k.e
h=k.b
g=k.c
p=A.jU(p,d[l],B.a1,g,h,j,i,g,h,j,i)}l=a1.f
p.y=B.b.h((l===0||a1.r===0?0:l/a1.r)*1000)
l=a1.x===B.bV?B.a1:B.al
p=A.jU(p,m,l,a,a,a1.d,a1.e,a,a,a,a)
o.b1(p)}return o},
bL(a){return this.aU(a,null)},
bU(a4,a5,a6,a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
if(a3===4)s=2
else if(a3===2)s=3
else{a3=a3===6?4:1
s=a3}r=s*a2.c
q=B.a.j(r+7,3)
p=B.a.j(r*b0+7,3)
o=A.j([null,null],t.ff)
n=A.j([0,0,0,0],t.t)
for(a2=a8>1,m=a8-a6,l=a7,k=0,j=0;k<b1;++k,l+=a9,++a1.e){a3=J.c(a4.a,a4.d++)
if(!(a3>=0&&a3<5))return A.a(B.ae,a3)
i=B.ae[a3]
h=a4.aj(p)
a4.d=a4.d+(h.c-h.d)
B.c.i(o,j,h.a2())
if(!(j>=0&&j<2))return A.a(o,j)
g=o[j]
j=1-j
f=o[j]
g.toString
a1.eR(i,q,g,f)
a1.c=a1.b=0
a3=g.length
e=new A.af(g,0,Math.min(a3,a3),0,!0)
for(a3=m<=1,d=a6,c=0;c<b0;++c,d+=a8){a1.eI(e,n)
b=a5.a
b=b==null?null:b.L(d,l,null)
a1.dD(b==null?new A.H():b,n)
if(!a3||a2)for(a=0;a<a8;++a)for(b=l+a,a0=0;a0<m;++a0)a1.dD(a5.ak(d+a0,b),n)}}},
ix(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)s=2
else if(a0===2)s=3
else{a0=a0===6?4:1
s=a0}r=s*a.c
q=a.a
p=a.b
o=B.a.j(q*r+7,3)
n=B.a.j(r+7,3)
m=A.X(o,0,!1,t.p)
l=A.j([m,m],t.S)
k=A.j([0,0,0,0],t.t)
a=a2.a
j=a.gH(a)
j.F()
for(i=0,h=0;i<p;++i,h=e){a=J.c(a1.a,a1.d++)
if(!(a>=0&&a<5))return A.a(B.ae,a)
g=B.ae[a]
f=a1.aj(o)
a1.d=a1.d+(f.c-f.d)
B.c.i(l,h,f.a2())
if(!(h>=0&&h<2))return A.a(l,h)
e=1-h
b.eR(g,n,l[h],l[e])
b.c=b.b=0
a=l[h]
a0=a.length
d=new A.af(a,0,Math.min(a0,a0),0,!0)
for(c=0;c<q;++c){b.eI(d,k)
b.dD(j.gP(),k)
j.F()}}},
eR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(c)
t.T.a(d)
s=c.length
switch(a.a){case 0:break
case 1:for(r=J.ak(c),q=b;q<s;++q){p=c.length
if(!(q<p))return A.a(c,q)
o=c[q]
n=q-b
if(!(n>=0&&n<p))return A.a(c,n)
r.i(c,q,o+c[n]&255)}break
case 2:for(r=J.ak(c),p=d!=null,q=0;q<s;++q){if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
r.i(c,q,c[q]+m&255)}break
case 3:for(r=J.ak(c),p=d!=null,q=0;q<s;++q){if(q<b)l=0
else{o=q-b
if(!(o>=0&&o<c.length))return A.a(c,o)
l=c[o]}if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
r.i(c,q,c[q]+B.a.j(l+m,1)&255)}break
case 4:for(r=J.ak(c),p=d==null,o=!p,q=0;q<s;++q){n=q<b
if(n)l=0
else{k=q-b
if(!(k>=0&&k<c.length))return A.a(c,k)
l=c[k]}if(o){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(n||p)j=0
else{n=q-b
if(!(n>=0&&n<d.length))return A.a(d,n)
j=d[n]}i=l+m-j
h=Math.abs(i-l)
g=Math.abs(i-m)
f=Math.abs(i-j)
if(h<=g&&h<=f)e=l
else e=g<=f?m:j
if(!(q<c.length))return A.a(c,q)
r.i(c,q,c[q]+e&255)}break}},
bi(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.E()
if(b===16)return a.l()
for(s=a.c;r=n.c,r<b;){r=a.d
if(r>=s)throw A.f(A.n("Invalid PNG data."))
q=a.a
a.d=r+1
p=J.c(q,r)
r=n.c
n.b=B.a.X(p,r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a1(n.b,s)
n.c=s
return r&o},
eI(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.c.i(b,0,q.bi(a,s.c))
return
case 2:B.c.i(b,0,q.bi(a,s.c))
B.c.i(b,1,q.bi(a,s.c))
B.c.i(b,2,q.bi(a,s.c))
return
case 3:B.c.i(b,0,q.bi(a,s.c))
return
case 4:B.c.i(b,0,q.bi(a,s.c))
B.c.i(b,1,q.bi(a,s.c))
return
case 6:B.c.i(b,0,q.bi(a,s.c))
B.c.i(b,1,q.bi(a,s.c))
B.c.i(b,2,q.bi(a,s.c))
B.c.i(b,3,q.bi(a,s.c))
return}throw A.f(A.n("Invalid color type: "+r+"."))},
dD(a,b){var s,r,q,p,o,n,m,l,k,j
t.L.a(b)
s=this.a
r=s.d
switch(r){case 0:r=s.x
if(r!=null&&s.c>8){s=r.length
if(0>=s)return A.a(r,0)
q=r[0]
if(1>=s)return A.a(r,1)
r=r[1]
p=b[0]
a.a8(p,p,p,p!==((q&255)<<24|r&255)>>>0?a.gD():0)
return}a.an(b[0],0,0)
return
case 2:o=b[0]
p=b[1]
n=b[2]
s=s.x
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
if(1>=r)return A.a(s,1)
m=s[1]
if(2>=r)return A.a(s,2)
l=s[2]
if(3>=r)return A.a(s,3)
k=s[3]
if(4>=r)return A.a(s,4)
j=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(o!==((q&255)<<8|m&255)||p!==((l&255)<<8|k&255)||n!==((j&255)<<8|s&255)){a.a8(o,p,n,a.gD())
return}}a.an(o,p,n)
return
case 3:a.sN(b[0])
return
case 4:a.an(b[0],b[1],0)
return
case 6:a.a8(b[0],b[1],b[2],b[3])
return}throw A.f(A.n("Invalid color type: "+r+"."))}}
A.bK.prototype={
ae(){return"PnmFormat."+this.b}}
A.bL.prototype={
gS(){return this.a},
gJ(){return this.b}}
A.iF.prototype={
bj(a){var s
this.b=A.q(a,!1,null,0)
s=this.cS()
if(s==="P1"||s==="P2"||s==="P5"||s==="P3"||s==="P6")return!0
return!1},
aU(a,b){if(this.au(a)==null)return null
return this.ah(0)},
au(a){var s,r,q=this
q.b=A.q(a,!1,null,0)
s=q.cS()
if(s==="P1"){r=q.a=new A.bL(B.Y)
r.e=B.bY}else if(s==="P2"){r=q.a=new A.bL(B.Y)
r.e=B.bZ}else if(s==="P5"){r=q.a=new A.bL(B.Y)
r.e=B.aD}else if(s==="P3"){r=q.a=new A.bL(B.Y)
r.e=B.c_}else if(s==="P6"){r=q.a=new A.bL(B.Y)
r.e=B.aE}else return q.b=null
r.a=q.cg()
r=q.a
r.toString
r.b=q.cg()
r=q.a
if(r.a===0||r.b===0)return q.a=q.b=null
return r},
ah(a){var s,r,q,p,o,n=this,m=null,l=n.a
if(l==null)return m
s=l.e
if(s===B.bY){s=l.a
r=A.O(m,m,B.w,0,B.i,l.b,m,0,1,m,B.e,s,!1)
for(l=r.a,l=l.gH(l);l.F();){q=l.gP()
if(n.cS()==="1")q.an(1,1,1)
else q.an(0,0,0)}return r}else if(s===B.bZ||s===B.aD){p=n.cg()
if(p===0)return m
l=n.a
s=l.a
l=l.b
r=A.O(m,m,n.fd(p),0,B.i,l,m,0,1,m,B.e,s,!1)
for(l=r.a,l=l.gH(l);l.F();){q=l.gP()
o=n.cW(n.a.e,p)
q.an(o,o,o)}return r}else if(s===B.c_||s===B.aE){p=n.cg()
if(p===0)return m
l=n.a
s=l.a
l=l.b
r=A.O(m,m,n.fd(p),0,B.i,l,m,0,3,m,B.e,s,!1)
for(l=r.a,l=l.gH(l);l.F();)l.gP().an(n.cW(n.a.e,p),n.cW(n.a.e,p),n.cW(n.a.e,p))
return r}return m},
fd(a){if(a>255)return B.l
if(a>15)return B.e
if(a>3)return B.B
if(a>1)return B.A
return B.w},
cW(a,b){if(a===B.aD||a===B.aE)return this.b.E()
return this.cg()},
cg(){var s,r,q=this.cS()
if(J.bf(q)===0)return 0
try{s=A.ri(q)
return s}catch(r){return 0}},
cS(){var s,r,q,p,o=this.b
if(o==null)return""
s=this.c
if(s.length!==0)return B.c.fm(s,0)
r=B.p.fs(o.jL())
if(r.length===0)return""
while(B.p.dT(r,"#"))r=B.p.fs(this.b.fl(70))
o=t.cc
q=A.t(new A.bO(A.j(r.split(" "),t.s),t.bB.a(new A.iG()),o),o.p("e.E"))
for(o=q.length,p=0;p<o;++p)if(B.p.dT(q[p],"#")){B.c.su(q,p)
break}B.c.dE(s,q)
if(s.length===0)return""
return B.c.fm(s,0)}}
A.iG.prototype={
$1(a){return A.b1(a)!==""},
$S:21}
A.h9.prototype={
sjw(a){t.T.a(a)},
sfG(a){t.T.a(a)},
sjN(a){t.T.a(a)},
sjO(a){t.T.a(a)}}
A.ha.prototype={
sbB(a){t.T.a(a)},
sbE(a){t.T.a(a)}}
A.b8.prototype={}
A.hd.prototype={
sbB(a){t.T.a(a)},
sbE(a){t.T.a(a)}}
A.he.prototype={
sbB(a){t.T.a(a)},
sbE(a){t.T.a(a)}}
A.hh.prototype={
sbB(a){t.T.a(a)},
sbE(a){t.T.a(a)}}
A.hi.prototype={
sbB(a){t.T.a(a)},
sbE(a){t.T.a(a)}}
A.eu.prototype={}
A.hg.prototype={}
A.iH.prototype={
h1(a){var s,r,q,p,o=this
a.l()
a.l()
a.l()
a.l()
s=B.a.Y(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=o.e
p=a.l()
q.$flags&2&&A.b(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.f
q=a.l()
p.$flags&2&&A.b(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=o.r
p=a.l()
q.$flags&2&&A.b(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.w
q=a.l()
p.$flags&2&&A.b(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.co.prototype={
fk(a,b,c,d,e,f,g){if(a.c-a.d<2)return
if(e==null)e=a.l()
switch(e){case 0:d.toString
this.iT(a,b,c,d)
break
case 1:if(f==null)f=this.iQ(a,c)
d.toString
this.iS(a,b,c,d,f,g)
break
default:throw A.f(A.n("Unsupported compression: "+e))}},
jK(a,b,c,d){return this.fk(a,b,c,d,null,null,0)},
iQ(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.l()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
iT(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.f.aD(s,0,r,255)
return}this.c=a.ai(r).a2()},
iS(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
if(d===16)l*=2
s=new Uint8Array(l)
this.c=s
r=f*c
q=e.length
if(r>=q){B.f.aD(s,0,l,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.aj(e[r])
a.d=a.d+(m.c-m.d)
s=this.c
s.toString
this.hL(m,s,p)
p+=b}},
hL(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
a.d=q+1
q=J.c(p,q)
p=$.am()
p.$flags&2&&A.b(p)
p[0]=q
q=$.aw()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){o=1-o
q=a.d
if(q>=s)break
p=a.a
a.d=q+1
n=J.c(p,q)
if(c+o>r)o=r-c
for(q=b.$flags|0,m=0;m<o;++m,c=l){l=c+1
q&2&&A.b(b)
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=n}}else{++o
if(c+o>r)o=r-c
o=Math.min(o,s-a.d)
for(m=0;m<o;++m,c=l){l=c+1
q=J.c(a.a,a.d++)
b.$flags&2&&A.b(b)
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}}}}
A.b_.prototype={
ae(){return"PsdColorMode."+this.b}}
A.hb.prototype={
h2(a){var s,r,q=this
q.as=A.q(a,!0,null,0)
q.iA()
if(q.c!==943870035)return
s=q.as.k()
q.as.ai(s)
s=q.as.k()
q.at=q.as.ai(s)
s=q.as.k()
q.ax=q.as.ai(s)
r=q.as
q.ay=r.ai(r.c-r.d)},
bC(){var s,r=this
if(r.c===943870035){s=r.as
s===$&&A.d()
s=s==null}else s=!0
if(s)return!1
r.iO()
r.iP()
r.iR()
r.ay=r.ax=r.at=r.as=null
return!0},
fa(){if(!this.bC())return null
return this.jP()},
jP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=a0.y
if(a2!=null)return a2
a2=a0.a
a2=A.O(a1,a1,B.e,0,B.i,a0.b,a1,0,4,a1,B.e,a2,!1)
a0.y=a2
a2.d4(0)
for(a2=a0.w,s=0;s<a2.length;++s){r=a2[s]
q=r.y
q===$&&A.d()
if((q&2)!==0)continue
q=r.w
q===$&&A.d()
p=q/255
o=r.r
n=r.cx
q=r.a
q.toString
m=q
l=0
for(;;){q=r.f
q===$&&A.d()
if(!(l<q))break
q=r.a
q.toString
k=q+l
j=r.b
q=m>=0
i=0
for(;;){h=r.e
h===$&&A.d()
if(!(i<h))break
h=n.a
g=h==null?a1:h.L(i,l,a1)
if(g==null)g=new A.H()
f=B.b.h(g.gn())
e=B.b.h(g.gq())
d=B.b.h(g.gt())
c=B.b.h(g.gv())
j.toString
if(j>=0&&j<a0.a&&q&&m<a0.b){h=r.b
h.toString
b=a0.y.a
a=b==null?a1:b.L(h+i,k,a1)
if(a==null)a=new A.H()
a0.hb(B.b.h(a.gn()),B.b.h(a.gq()),B.b.h(a.gt()),B.b.h(a.gv()),f,e,d,c,o,p,a)}++i;++j}++l;++m}}a2=a0.y
a2.toString
return a2},
hb(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n=h/255*j
switch(i){case 1885434739:s=d
r=c
q=b
p=a
break
case 1852797549:s=h
r=g
q=f
p=e
break
case 1684632435:s=h
r=g
q=f
p=e
break
case 1684107883:p=Math.min(a,e)
q=Math.min(b,f)
r=Math.min(c,g)
s=h
break
case 1836411936:p=B.a.j(a*e,8)
q=B.a.j(b*f,8)
r=B.a.j(c*g,8)
s=h
break
case 1768188278:p=A.iJ(a,e)
q=A.iJ(b,f)
r=A.iJ(c,g)
s=h
break
case 1818391150:p=A.iL(a,e)
q=A.iL(b,f)
r=A.iL(c,g)
s=h
break
case 1684751212:s=h
r=g
q=f
p=e
break
case 1818850405:p=Math.max(a,e)
q=Math.max(b,f)
r=Math.max(c,g)
s=h
break
case 1935897198:p=A.l_(a,e)
q=A.l_(b,f)
r=A.l_(c,g)
s=h
break
case 1684633120:p=A.iK(a,e)
q=A.iK(b,f)
r=A.iK(c,g)
s=h
break
case 1818518631:p=e+a>255?255:a+e
q=f+b>255?255:b+f
r=g+c>255?255:c+g
s=h
break
case 1818706796:s=h
r=g
q=f
p=e
break
case 1870030194:p=A.kY(a,e,d,h)
q=A.kY(b,f,d,h)
r=A.kY(c,g,d,h)
s=h
break
case 1934387572:p=A.l0(a,e)
q=A.l0(b,f)
r=A.l0(c,g)
s=h
break
case 1749838196:p=A.kW(a,e)
q=A.kW(b,f)
r=A.kW(c,g)
s=h
break
case 1984719220:p=A.l1(a,e)
q=A.l1(b,f)
r=A.l1(c,g)
s=h
break
case 1816947060:p=A.kX(a,e)
q=A.kX(b,f)
r=A.kX(c,g)
s=h
break
case 1884055924:p=A.kZ(a,e)
q=A.kZ(b,f)
r=A.kZ(c,g)
s=h
break
case 1749903736:p=e<255-a?0:255
q=f<255-b?0:255
r=g<255-c?0:255
s=h
break
case 1684629094:p=Math.abs(e-a)
q=Math.abs(f-b)
r=Math.abs(g-c)
s=h
break
case 1936553316:p=A.kV(a,e)
q=A.kV(b,f)
r=A.kV(c,g)
s=h
break
case 1718842722:s=h
r=g
q=f
p=e
break
case 1717856630:s=h
r=g
q=f
p=e
break
case 1752524064:s=h
r=g
q=f
p=e
break
case 1935766560:s=h
r=g
q=f
p=e
break
case 1668246642:s=h
r=g
q=f
p=e
break
case 1819634976:s=h
r=g
q=f
p=e
break
default:s=h
r=g
q=f
p=e}o=1-n
k.sn(B.b.h(a*o+p*n))
k.sq(B.b.h(b*o+q*n))
k.st(B.b.h(c*o+r*n))
k.sv(B.b.h(d*o+s*n))},
iA(){var s,r,q=this,p=q.as
p===$&&A.d()
q.c=p.k()
p=q.as.l()
q.d=p
if(p!==1){q.c=0
return}s=q.as.ai(6)
for(r=0;r<6;++r)if(J.c(s.a,s.d+r)!==0){q.c=0
return}q.e=q.as.l()
q.b=q.as.k()
q.a=q.as.k()
q.f=q.as.l()
p=q.as.l()
if(!(p<8))return A.a(B.bO,p)
q.r=B.bO[p]},
iO(){var s,r,q,p,o,n,m=this,l=m.at
l.d=l.b
for(l=m.z;s=m.at,s.d<s.c;){r=s.k()
q=m.at.l()
s=m.at
p=J.c(s.a,s.d++)
m.at.ad(p)
if((p&1)===0)++m.at.d
p=m.at.k()
s=m.at
o=s.aj(p)
n=s.d+(o.c-o.d)
s.d=n
if((p&1)===1)s.d=n+1
if(r===943868237)l.i(0,q,new A.hc())}},
iP(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.ax
h.d=h.b
s=h.k()
if((s&1)!==0)++s
r=i.ax.ai(s)
h=i.w
B.c.d4(h)
if(s>0){q=r.l()
p=$.al()
p.$flags&2&&A.b(p)
p[0]=q
q=$.av()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0)o=-o
for(q=t.N,p=t.ha,n=t.U,m=t.af,l=0;l<o;++l){k=new A.hf(A.J(q,p),A.j([],n),A.j([],m))
k.h3(r)
B.c.M(h,k)}}for(l=0;l<h.length;++l)h[l].jG(r,i)
s=i.ax.k()
j=i.ax.ai(s)
if(s>0){j.l()
j.l()
j.l()
j.l()
j.l()
j.l()
j.E()}},
iR(){var s,r,q,p,o,n,m=this,l=m.ay
l.d=l.b
s=l.l()
if(s===1){l=m.b
r=m.e
r===$&&A.d()
q=l*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=m.ay.l()}else p=null
m.x=t.eS.a(A.j([],t.c))
o=0
for(;;){l=m.e
l===$&&A.d()
if(!(o<l))break
l=m.x
r=m.ay
r.toString
n=o===3?-1:o
n=new A.co(n)
n.fk(r,m.a,m.b,m.f,s,p,o)
B.c.M(l,n);++o}m.y=A.mm(m.r,m.f,m.a,m.b,m.x)},
$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.hc.prototype={}
A.hf.prototype={
h3(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a4.k(),a3=$.M()
a3.$flags&2&&A.b(a3)
a3[0]=a2
a2=$.a3()
if(0>=a2.length)return A.a(a2,0)
a1.a=a2[0]
a3[0]=a4.k()
a1.b=a2[0]
a3[0]=a4.k()
a1.c=a2[0]
a3[0]=a4.k()
a2=a2[0]
a1.d=a2
a3=a1.b
a3.toString
a1.e=a2-a3
a3=a1.c
a2=a1.a
a2.toString
a1.f=a3-a2
a1.as=t.eS.a(A.j([],t.c))
s=a4.l()
for(r=0;r<s;++r){a2=a4.l()
a3=$.al()
a3.$flags&2&&A.b(a3)
a3[0]=a2
a2=$.av()
if(0>=a2.length)return A.a(a2,0)
q=a2[0]
a4.k()
B.c.M(a1.as,new A.co(q))}p=a4.k()
if(p!==943868237)throw A.f(A.n("Invalid PSD layer signature: "+B.a.cv(p,16)))
a1.r=a4.k()
a1.w=a4.E()
a4.E()
a1.y=a4.E()
if(a4.E()!==0)throw A.f(A.n("Invalid PSD layer data"))
o=a4.k()
n=a4.ai(o)
if(o>0){o=n.k()
if(o>0){m=n.ai(o)
a2=m.d
m.k()
m.k()
m.k()
m.k()
m.E()
m.E()
if(m.c-a2===20)m.d+=2
else{m.E()
m.E()
m.k()
m.k()
m.k()
m.k()}}o=n.k()
if(o>0)new A.iH().h1(n.ai(o))
o=n.E()
n.ad(o)
l=4-B.a.a7(o,4)-1
if(l>0)n.d+=l
for(a2=n.c,a3=a1.ay,k=a1.cy,j=t.t,i=t.cE;n.d<a2;){p=n.k()
if(p!==943868237)throw A.f(A.n("PSD invalid signature for layer additional data: "+B.a.cv(p,16)))
h=n.ad(4)
o=n.k()
g=n.aj(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a3.i(0,h,A.oI(h,g))
if(h==="lrFX"){e=A.o(i.a(a3.m(0,"lrFX")).b,null,0)
e.l()
d=e.l()
for(c=0;c<d;++c){e.ad(4)
b=e.ad(4)
a=e.k()
if(b==="dsdw"){a0=new A.ha()
B.c.M(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbB(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.ad(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
a0.sbE(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="isdw"){a0=new A.he()
B.c.M(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbB(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.ad(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
a0.sbE(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="oglw"){a0=new A.hh()
B.c.M(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbB(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.ad(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
if(a0.a===2)a0.sbE(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else if(b==="iglw"){a0=new A.hd()
B.c.M(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbB(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
e.ad(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
if(a0.a===2){J.c(e.a,e.d++)
a0.sbE(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))}}else if(b==="bevl"){a0=new A.h9()
B.c.M(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.ad(8)
e.ad(8)
a0.sjw(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
a0.sfG(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
if(a0.a===2){a0.sjN(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
a0.sjO(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))}}else if(b==="sofi"){a0=new A.hi()
B.c.M(k,a0)
a0.a=e.k()
e.ad(4)
a0.sbB(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))
J.c(e.a,e.d++)
J.c(e.a,e.d++)
a0.sbE(A.j([e.l(),e.l(),e.l(),e.l(),e.l()],j))}else e.d+=a}}}}},
jG(a,b){var s,r,q,p,o,n=this,m=0
for(;;){s=n.as
s===$&&A.d()
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.d()
q=n.f
q===$&&A.d()
s.jK(a,r,q,b.f);++m}r=b.r
q=b.f
p=n.e
p===$&&A.d()
o=n.f
o===$&&A.d()
n.cx=A.mm(r,q,p,o,s)}}
A.dc.prototype={}
A.iI.prototype={
aU(a,b){var s,r,q,p=null,o=A.kU(a)
this.a=o
s=1
if(s===1){o=o.fa()
return o}for(r=p,q=0;q<s;++q){o=this.a
b=o==null?p:o.fa()
if(b==null)continue
if(r==null){b.w=B.aU
r=b}else r.b1(b)}return r},
au(a){return this.a=A.kU(a)}}
A.hj.prototype={}
A.df.prototype={}
A.as.prototype={
b5(a,b){var s=this
return new A.as(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)}}
A.dd.prototype={$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.de.prototype={$iI:1,
gJ(){return this.f},
gS(){return this.r}}
A.ev.prototype={$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.aL.prototype={
scj(a){var s=this.a,r=this.b+1
s.$flags&2&&A.b(s)
if(!(r<s.length))return A.a(s,r)
s[r]=a},
cA(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.q,s)
return new A.df(B.q[s],B.q[q>>>4&31],B.v[q&15])}else return new A.df(B.v[q>>>7&15],B.v[q>>>3&15],B.ag[q&7])},
cC(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.q,s)
return new A.as(B.q[s],B.q[q>>>4&31],B.v[q&15],255)}else return new A.as(B.v[q>>>7&15],B.v[q>>>3&15],B.ag[q&7],B.ag[q>>>11&7])},
cB(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.q,s)
return new A.df(B.q[s],B.q[q>>>5&31],B.q[q&31])}else return new A.df(B.v[q>>>8&15],B.v[q>>>4&15],B.v[q&15])},
cD(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.q,s)
return new A.as(B.q[s],B.q[q>>>5&31],B.q[q&31],255)}else return new A.as(B.v[q>>>8&15],B.v[q>>>4&15],B.v[q&15],B.ag[q>>>12&7])},
cd(){var s=this,r=s.c?1:0,q=s.d,p=s.e?1:0,o=s.f,n=s.r?1:0
return(r|(q&16383)<<1|p<<15|(o&32767)<<16|n<<31)>>>0},
br(){var s,r=this,q=r.a,p=r.b+1
if(!(p<q.length))return A.a(q,p)
s=q[p]
r.c=(s&1)===1
r.scj(r.cd())
r.d=s>>>1&16383
r.scj(r.cd())
r.e=(s>>>15&1)===1
r.scj(r.cd())
r.f=s>>>16&32767
r.scj(r.cd())
r.r=(s>>>31&1)===1
r.scj(r.cd())}}
A.iM.prototype={
au(a){var s,r=this,q=a.length,p=q-(q>>>1&1431655765)>>>0
p=(p&858993459)+(p>>>2&858993459)
if((p+(p>>>4)>>>0&252645135)*16843009>>>0>>>24===1){s=r.hx(a)
if(s!=null){r.a=a
return r.b=s}}s=r.hK(a)
if(s!=null){r.a=a
return r.b=s}s=r.hI(a)
if(s!=null){r.a=a
return r.b=s}return null},
hK(a){var s,r,q=A.q(a,!1,null,0)
if(q.k()!==52)return null
if(q.k()!==55727696)return null
s=A.j([0,0,0,0],t.t)
r=new A.de(s)
q.k()
r.b=q.k()
B.c.i(s,0,q.E())
B.c.i(s,1,q.E())
B.c.i(s,2,q.E())
B.c.i(s,3,q.E())
q.k()
q.k()
r.f=q.k()
r.r=q.k()
q.k()
q.k()
q.k()
q.k()
r.Q=q.k()
return r},
hI(a){var s,r,q=A.q(a,!1,null,0)
if(q.k()!==52)return null
s=new A.dd()
s.b=q.k()
s.a=q.k()
q.k()
s.d=q.k()
q.k()
s.f=q.k()
q.k()
q.k()
q.k()
s.y=q.k()
r=q.k()
s.z=r
s.Q=q.k()
if(r!==559044176)return null
return s},
hx(a){var s,r,q,p,o,n,m=null,l=a.length,k=A.q(a,!1,m,0)
if(k.k()!==0)return m
s=new A.ev()
s.b=k.k()
s.a=k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
r=k.k()
s.y=r
if(r===559044176)return m
q=0
p=8
if(!(l===32)){o=0
for(;;){if(!(o<10)){q=1
break}n=o<<1>>>0
if((B.a.O(64,n)&l)>>>0!==0){p=B.a.O(16,o)
q=1
break}if((B.a.O(128,n)&l)>>>0!==0){p=B.a.O(16,o)
break}++o}if(o===10)return m}if((q+1)*2===4)return m
s.b=s.a=p
return s},
ah(a){var s,r,q=this,p=q.b
if(p==null||q.a==null)return null
if(p instanceof A.ev){p=p.a
s=q.b.gJ()
r=q.a
r.toString
return q.di(p,s,r)}else if(p instanceof A.dd){p=q.a
p.toString
return q.hH(p)}else if(p instanceof A.de){p=q.a
p.toString
return q.hJ(p)}return null},
aU(a,b){if(this.au(a)==null)return null
return this.ah(0)},
hH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=a.length
if(e<52||g.b==null)return f
s=g.b
s.toString
t.fi.a(s)
r=A.q(a,!1,f,0)
r.d+=52
q=s.Q
if(q<1)q=(s.d&4096)!==0?6:1
if(q!==1)return f
p=s.a
o=s.b
if(p*o*s.f/8>e-52)return f
switch(s.d&255){case 16:n=A.O(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();){m=s.gP()
l=J.c(r.a,r.d++)
k=J.c(r.a,r.d++)
m.sn(k&240)
m.sq((k&15)<<4)
m.st(l&240)
m.sv((l&15)<<4)}return n
case 17:n=A.O(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();){m=s.gP()
j=r.l()
i=(j&1)!==0?255:0
m.sn(j>>>8&248)
m.sq(j>>>3&248)
m.st((j&62)<<2)
m.sv(i)}return n
case 18:n=A.O(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();){m=s.gP()
m.sn(J.c(r.a,r.d++))
m.sq(J.c(r.a,r.d++))
m.st(J.c(r.a,r.d++))
m.sv(J.c(r.a,r.d++))}return n
case 19:n=A.O(f,f,B.e,0,B.i,o,f,0,3,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();){m=s.gP()
j=r.l()
m.sn(j>>>8&248)
m.sq(j>>>3&252)
m.st((j&31)<<3)}return n
case 20:n=A.O(f,f,B.e,0,B.i,o,f,0,3,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();){m=s.gP()
j=r.l()
m.sn((j&31)<<3)
m.sq(j>>>2&248)
m.st(j>>>7&248)}return n
case 21:n=A.O(f,f,B.e,0,B.i,o,f,0,3,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();){m=s.gP()
m.sn(J.c(r.a,r.d++))
m.sq(J.c(r.a,r.d++))
m.st(J.c(r.a,r.d++))}return n
case 22:n=A.O(f,f,B.e,0,B.i,o,f,0,1,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();)s.gP().sn(J.c(r.a,r.d++))
return n
case 23:n=A.O(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gH(s);s.F();){m=s.gP()
i=J.c(r.a,r.d++)
h=J.c(r.a,r.d++)
m.sn(h)
m.sq(h)
m.st(h)
m.sv(i)}return n
case 24:return f
case 25:return s.y===0?g.eh(p,o,r.a2()):g.di(p,o,r.a2())}return f},
hJ(a){var s,r=this.b
if(!(r instanceof A.de))return null
s=A.q(a,!1,null,0)
s.d=(s.d+=52)+r.Q
if(r.c[0]===0)switch(r.b){case 2:return this.eh(r.r,r.f,s.a2())
case 3:return this.di(r.r,r.f,s.a2())}return null},
eh(c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.O(b6,b6,B.e,0,B.i,c7,b6,0,3,b6,B.e,c6,!1),b8=c6/4|0,b9=b8-1,c0=J.ax(B.f.gB(c8),0,null),c1=new A.aL(c0),c2=new A.aL(J.ax(B.f.gB(c8),0,null)),c3=new A.aL(J.ax(B.f.gB(c8),0,null)),c4=new A.aL(J.ax(B.f.gB(c8),0,null)),c5=new A.aL(J.ax(B.f.gB(c8),0,null))
for(s=c0.length,r=0,q=0;r<b8;++r,q+=4)for(p=0,o=0;p<b8;++p,o+=4){c1.b=A.bn(p,r)<<1>>>0
c1.br()
n=c1.b
if(!(n<s))return A.a(c0,n)
m=c0[n]
l=c1.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&b9)>>>0
h=(i+1&b9)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&b9)>>>0
e=(f+1&b9)>>>0
c2.b=A.bn(f,i)<<1>>>0
c2.br()
c3.b=A.bn(e,i)<<1>>>0
c3.br()
c4.b=A.bn(f,h)<<1>>>0
c4.br()
c5.b=A.bn(e,h)<<1>>>0
c5.br()
d=c2.cA()
if(!(k>=0&&k<16))return A.a(B.m,k)
c=B.m[k][0]
b=c3.cA()
a=B.m[k][1]
a0=c4.cA()
a1=B.m[k][2]
a2=c5.cA()
a3=B.m[k][3]
a4=c2.cB()
a5=B.m[k][0]
a6=c3.cB()
a7=B.m[k][1]
a8=c4.cB()
a9=B.m[k][2]
b0=c5.cB()
b1=B.m[k][3]
b2=B.bC[l+m&3]
b3=b2[0]
b4=b2[1]
b5=b7.a
if(b5!=null)b5.a3(g+o,n,(d.a*c+b.a*a+a0.a*a1+a2.a*a3)*b3+(a4.a*a5+a6.a*a7+a8.a*a9+b0.a*b1)*b4>>>7,(d.b*c+b.b*a+a0.b*a1+a2.b*a3)*b3+(a4.b*a5+a6.b*a7+a8.b*a9+b0.b*b1)*b4>>>7,(d.c*c+b.c*a+a0.c*a1+a2.c*a3)*b3+(a4.c*a5+a6.c*a7+a8.c*a9+b0.c*b1)*b4>>>7)
m=m>>>2;++k}}}return b7},
di(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=A.O(a4,a4,B.e,0,B.i,b5,a4,0,4,a4,B.e,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.ax(B.f.gB(b6),0,null),a9=new A.aL(a8),b0=new A.aL(J.ax(B.f.gB(b6),0,null)),b1=new A.aL(J.ax(B.f.gB(b6),0,null)),b2=new A.aL(J.ax(B.f.gB(b6),0,null)),b3=new A.aL(J.ax(B.f.gB(b6),0,null))
for(s=a8.length,r=0,q=0;r<a6;++r,q+=4)for(p=0,o=0;p<a6;++p,o+=4){a9.b=A.bn(p,r)<<1>>>0
a9.br()
n=a9.b
if(!(n<s))return A.a(a8,n)
m=a8[n]
l=a9.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&a7)>>>0
h=(i+1&a7)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&a7)>>>0
e=(f+1&a7)>>>0
b0.b=A.bn(f,i)<<1>>>0
b0.br()
b1.b=A.bn(e,i)<<1>>>0
b1.br()
b2.b=A.bn(f,h)<<1>>>0
b2.br()
b3.b=A.bn(e,h)<<1>>>0
b3.br()
d=b0.cC()
if(!(k>=0&&k<16))return A.a(B.m,k)
c=B.m[k][0]
b=b1.cC()
a=B.m[k][1]
a=new A.as(d.a*c,d.b*c,d.c*c,d.d*c).b5(0,new A.as(b.a*a,b.b*a,b.c*a,b.d*a))
b=b2.cC()
c=B.m[k][2]
c=a.b5(0,new A.as(b.a*c,b.b*c,b.c*c,b.d*c))
b=b3.cC()
a=B.m[k][3]
a0=c.b5(0,new A.as(b.a*a,b.b*a,b.c*a,b.d*a))
a=b0.cD()
b=B.m[k][0]
c=b1.cD()
d=B.m[k][1]
d=new A.as(a.a*b,a.b*b,a.c*b,a.d*b).b5(0,new A.as(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.cD()
b=B.m[k][2]
b=d.b5(0,new A.as(c.a*b,c.b*b,c.c*b,c.d*b))
c=b3.cD()
d=B.m[k][3]
a1=b.b5(0,new A.as(c.a*d,c.b*d,c.c*d,c.d*d))
a2=B.bC[l+m&3]
d=a2[0]
c=a2[1]
b=a2[2]
a=a2[3]
a3=a5.a
if(a3!=null)a3.al(g+o,n,a0.a*d+a1.a*c>>>7,a0.b*d+a1.b*c>>>7,a0.c*d+a1.c*c>>>7,a0.d*b+a1.d*a>>>7)
m=m>>>2;++k}}}return a5}}
A.eA.prototype={
c_(a){var s,r,q=this
if(a.c-a.d<18)return
q.a=a.E()
q.b=a.E()
s=a.E()
if(s<12){if(!(s>=0))return A.a(B.bz,s)
r=B.bz[s]}else r=B.aj
q.c=r
a.l()
q.e=a.l()
q.f=a.E()
a.l()
a.l()
q.x=a.l()
q.y=a.l()
q.z=a.E()
q.Q=a.E()},
fh(){var s=this,r=s.z
if(r!==8&&r!==16&&r!==24&&r!==32)return!1
r=s.c
if(r===B.G||r===B.H){if(s.e>256||s.b!==1)return!1
r=s.f
if(r!==16&&r!==24&&r!==32)return!1}else if(s.b===1)return!1
return!0},
$iI:1,
gS(){return this.x},
gJ(){return this.y}}
A.at.prototype={
ae(){return"TgaImageType."+this.b}}
A.iV.prototype={
aU(a,b){if(this.au(a)==null)return null
return this.ah(0)},
au(a){var s,r,q,p,o=this
o.a=new A.eA(B.aj)
s=A.q(a,!1,null,0)
o.b=s
r=s.ai(18)
o.a.c_(r)
s=o.a
if(!s.fh())return null
q=o.b
q.d+=s.a
p=s.c
if(p===B.G||p===B.H)s.as=q.ai(s.e*B.a.j(s.f,3)).a2()
s=o.a
s.ax=o.b.d
return s},
ah(a){var s=this,r=s.a
if(r==null)return null
r=r.c
if(r===B.c5)return s.eg()
else if(r===B.c4||r===B.H)return s.hM()
else if(r===B.G)return s.eg()
return null},
ec(a,b){var s,r,q,p,o,n,m,l=this,k=A.q(a,!1,null,0),j=l.a.f
if(j===16){j=l.b
j===$&&A.d()
s=j.l()
r=s>>>7&248
q=s>>>2&248
p=(s&31)<<3
o=(s&32768)!==0?0:255
for(n=0;n<l.a.e;++n){b.bo(n,r)
b.bn(n,q)
b.bm(n,p)
b.bl(n,o)}}else{m=j===32
for(n=0;n<l.a.e;++n){p=J.c(k.a,k.d++)
q=J.c(k.a,k.d++)
r=J.c(k.a,k.d++)
o=m?J.c(k.a,k.d++):255
b.bo(n,r)
b.bn(n,q)
b.bm(n,p)
b.bl(n,o)}}},
hM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.a,b=c.z,a=b===16,a0=a||b===32,a1=c.x,a2=c.y,a3=a0?4:3
c=c.c
s=A.O(d,d,B.e,0,B.i,a2,d,0,a3,d,B.e,a1,c===B.G||c===B.H)
c=s.a
if((c==null?d:c.gT())!=null){c=e.a.as
c.toString
a1=s.a
a1=a1==null?d:a1.gT()
a1.toString
e.ec(c,a1)}r=s.gS()
q=s.gJ()-1
c=b===8
p=0
for(;;){a1=e.b
a1===$&&A.d()
a2=a1.d
if(!(a2<a1.c&&q>=0))break
a3=a1.a
a1.d=a2+1
o=J.c(a3,a2)
n=(o&127)+1
m=0
if((o&128)!==0)if(c){a1=e.b
l=J.c(a1.a,a1.d++)
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.aF(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}else{a1=e.b
if(a){i=a1.l()
l=i>>>7&248
h=i>>>2&248
g=(i&31)<<3
f=(i&32768)!==0?0:255
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.al(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}else{g=J.c(a1.a,a1.d++)
a1=e.b
h=J.c(a1.a,a1.d++)
a1=e.b
l=J.c(a1.a,a1.d++)
if(a0){a1=e.b
f=J.c(a1.a,a1.d++)}else f=255
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.al(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}}else if(c)for(k=0;k<n;++k){a1=e.b
l=J.c(a1.a,a1.d++)
j=p+1
a1=s.a
if(a1!=null)a1.aF(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}else if(a)for(k=0;k<n;++k){i=e.b.l()
f=(i&32768)!==0?0:255
j=p+1
a1=s.a
if(a1!=null)a1.al(p,q,i>>>7&248,i>>>2&248,(i&31)<<3,f)
a1=e.b
if(a1.d>=a1.c){p=j
break}if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}else for(k=0;k<n;++k){a1=e.b
g=J.c(a1.a,a1.d++)
a1=e.b
h=J.c(a1.a,a1.d++)
a1=e.b
l=J.c(a1.a,a1.d++)
if(a0){a1=e.b
f=J.c(a1.a,a1.d++)}else f=255
j=p+1
a1=s.a
if(a1!=null)a1.al(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}if(p>=r){--q
if(q<0)break
p=0}}return s},
eg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b
b===$&&A.d()
s=d.a
b.d=s.ax
r=s.z
b=r===16
q=!0
if(!b)if(r!==32){p=s.c
if(p===B.G||p===B.H){p=s.f
p=p===16||p===32}else p=!1
q=p}p=s.x
o=s.y
n=q?4:3
s=s.c
m=A.O(c,c,B.e,0,B.i,o,c,0,n,c,B.e,p,s===B.G||s===B.H)
s=d.a
p=s.c
if(p===B.G||p===B.H){s=s.as
s.toString
p=m.a
p=p==null?c:p.gT()
p.toString
d.ec(s,p)}if(r===8)for(l=m.gJ()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
b=d.b
j=J.c(b.a,b.d++)
b=m.a
if(b!=null)b.aF(k,l,j);++k}}else if(b)for(l=m.gJ()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
i=d.b.l()
h=(i&32768)!==0?0:255
b=m.a
if(b!=null)b.al(k,l,i>>>7&248,i>>>2&248,(i&31)<<3,h);++k}}else for(l=m.gJ()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
b=d.b
g=J.c(b.a,b.d++)
b=d.b
f=J.c(b.a,b.d++)
b=d.b
e=J.c(b.a,b.d++)
if(q){b=d.b
h=J.c(b.a,b.d++)}else h=255
b=m.a
if(b!=null)b.al(k,l,e,f,g,h);++k}}return m}}
A.iW.prototype={
ac(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.E()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.X(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.y,q)
r=p+(o&B.y[q])
a-=q
n.c=8
n.b=J.c(s.a,s.d++)}if(a>0){if(q===0){n.c=8
n.b=s.E()}s=B.a.X(r,a)
q=n.b
p=n.c-a
q=B.a.bp(q,p)
if(!(a<9))return A.a(B.y,a)
r=s+(q&B.y[a])
n.c=p}return r}}
A.hn.prototype={
A(a){var s=this,r=s.a,q=$.lv().m(0,r)
if(q!=null)return q.a+": "+s.b.A(0)+" "+s.c
return"<"+r+">: "+s.b.A(0)+" "+s.c},
bc(){var s,r,q,p,o=this,n=o.e
if(n!=null)return n
n=o.f
n.d=o.d
s=o.c
r=o.b
if(r!==B.d){q=r.a
if(!(q<14))return A.a(B.t,q)
q=B.t[q]}else q=0
p=n.ai(s*q)
switch(r.a){case 1:return o.e=new A.bj(new Uint8Array(A.z(p.ai(s).a2())))
case 2:return o.e=new A.c1(s===0?"":p.ad(s-1))
case 7:return o.e=new A.bj(new Uint8Array(A.z(p.ai(s).a2())))
case 3:return o.e=A.lW(p,s)
case 4:return o.e=A.lR(p,s)
case 5:return o.e=A.lS(p,s)
case 11:return o.e=A.lX(p,s)
case 12:return o.e=A.lQ(p,s)
case 6:return o.e=new A.bE(new Int8Array(A.z(J.kq(B.f.gB(p.a2()),0,s))))
case 8:return o.e=A.lV(p,s)
case 9:return o.e=A.lT(p,s)
case 10:return o.e=A.lU(p,s)
case 13:case 0:return null}}}
A.iY.prototype={
jh(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.Y(p.a+7,8)
for(r=0,q=0;q<d;++q){p.dg(a,r,c)
r+=s}},
dg(a,b,c){var s,r,q,p,o,n,m,l,k=this
k.d=0
for(s=k.a,r=!0;c<s;){while(r){q=k.bH(10)
if(!(q<1024))return A.a(B.ab,q)
p=B.ab[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|k.aT(2))>>>0
if(!(q<16))return A.a(B.F,q)
p=B.F[q]
n=B.a.j(p,1)
c+=B.a.j(p,4)&4095
k.aB(4-(n&7))}else if(o===0)throw A.f(A.n("TIFFFaxDecoder0"))
else if(o===15)throw A.f(A.n("TIFFFaxDecoder1"))
else{c+=B.a.j(p,5)&2047
k.aB(10-o)
if((p&1)===0){B.c.i(k.f,k.d++,c)
r=!1}}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}while(!r){q=k.aT(4)
if(!(q<16))return A.a(B.a5,q)
p=B.a5[q]
m=p>>>5&2047
l=!0
if(m===100){q=k.bH(9)
if(!(q<512))return A.a(B.a7,q)
p=B.a7[q]
o=B.a.j(p,1)&15
m=B.a.j(p,5)&2047
if(o===12){k.aB(5)
q=k.aT(4)
if(!(q<16))return A.a(B.F,q)
p=B.F[q]
n=B.a.j(p,1)
m=B.a.j(p,4)&4095
k.b0(a,b,c,m)
c+=m
k.aB(4-(n&7))}else if(o===15)throw A.f(A.n("TIFFFaxDecoder2"))
else{k.b0(a,b,c,m)
c+=m
k.aB(9-o)
if((p&1)===0){B.c.i(k.f,k.d++,c)
r=l}}}else{if(m===200){q=k.aT(2)
if(!(q<4))return A.a(B.a4,q)
p=B.a4[q]
m=p>>>5&2047
k.b0(a,b,c,m)
c+=m
k.aB(2-(p>>>1&15))
B.c.i(k.f,k.d++,c)}else{k.b0(a,b,c,m)
c+=m
k.aB(4-(p>>>1&15))
B.c.i(k.f,k.d++,c)}r=l}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}}B.c.i(k.f,k.d++,c)},
ji(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.Y(s+7,8)
q=A.X(2,null,!1,t.I)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.eE()!==1)throw A.f(A.n("TIFFFaxDecoder3"))
a0.dg(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.eE()===0){n=a0.e
a0.e=a0.f
a0.f=n
a0.y=0
m=a3
l=-1
k=!0
j=0
for(;;){m.toString
if(!(m<s))break
a0.es(l,k,q)
i=q[0]
h=q[1]
g=a0.aT(7)
if(!(g<128))return A.a(B.a9,g)
g=B.a9[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.b0(a1,p,m,h-m)}a0.aB(7-e)
m=h
l=m}else if(f===1){a0.aB(7-e)
d=j+1
c=d+1
if(k){m+=a0.cN()
B.c.i(a0.f,j,m)
b=a0.cM()
a0.b0(a1,p,m,b)
m+=b
B.c.i(a0.f,d,m)}else{b=a0.cM()
a0.b0(a1,p,m,b)
m+=b
B.c.i(a0.f,j,m)
m+=a0.cN()
B.c.i(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.i(a0.f,j,a)
k=!k
if(k)a0.b0(a1,p,m,a-m)
a0.aB(7-e)}else throw A.f(A.n("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.c.i(a0.f,j,m)
a0.d=j+1}else a0.dg(a1,p,a3)
p+=r}},
jm(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a4.r=a6
a4.z=4
a4.x=a4.w=0
s=a4.a
r=B.a.Y(s+7,8)
q=A.X(2,null,!1,t.I)
p=a4.f
a4.d=0
a4.d=1
B.c.i(p,0,s)
B.c.i(p,a4.d++,s)
for(o=0,n=0;n<a8;++n){m=a4.e
a4.e=a4.f
a4.f=m
a4.y=0
l=a7
k=-1
j=!0
i=0
for(;;){l.toString
if(!(l<s))break
a4.es(k,j,q)
h=q[0]
g=q[1]
f=a4.aT(7)
if(!(f<128))return A.a(B.a9,f)
f=B.a9[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a4.b0(a5,o,l,g-l)}a4.aB(7-d)
l=g
k=l}else if(e===1){a4.aB(7-d)
c=i+1
b=c+1
if(j){l+=a4.cN()
B.c.i(m,i,l)
a=a4.cM()
a4.b0(a5,o,l,a)
l+=a
B.c.i(m,c,l)}else{a=a4.cM()
a4.b0(a5,o,l,a)
l+=a
B.c.i(m,i,l)
l+=a4.cN()
B.c.i(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.c.i(m,i,a0)
j=!j
if(j)a4.b0(a5,o,l,a0-l)
a4.aB(7-d)
l=a0
i=c
k=l}else if(e===11){if(a4.aT(3)!==7)throw A.f(A.n("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;j=a3){while(a4.aT(1)!==1)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.c.i(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
a3=a4.aT(1)===0
if(a3){if(!j){c=i+1
B.c.i(m,i,l)
i=c}}else if(j){c=i+1
B.c.i(m,i,l)
i=c}j=a3
a2=!0}a3=a1===5
if(a3){if(!j){c=i+1
B.c.i(m,i,l)
i=c}l+=a1}else{l+=a1
c=i+1
B.c.i(m,i,l)
a4.b0(a5,o,l,1);++l
i=c}}}else throw A.f(A.n("TIFFFaxDecoder5 "+e))}B.c.i(m,i,l)
a4.d=i+1
o+=r}},
cN(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.bH(10)
if(!(q<1024))return A.a(B.ab,q)
p=B.ab[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|m.aT(2))>>>0
if(!(q<16))return A.a(B.F,q)
p=B.F[q]
n=B.a.j(p,1)
s+=B.a.j(p,4)&4095
m.aB(4-(n&7))}else if(o===0)throw A.f(A.n("TIFFFaxDecoder0"))
else if(o===15)throw A.f(A.n("TIFFFaxDecoder1"))
else{s+=B.a.j(p,5)&2047
m.aB(10-o)
if((p&1)===0)r=!1}}return s},
cM(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.aT(4)
if(!(q<16))return A.a(B.a5,q)
p=B.a5[q]
o=p>>>5&2047
if(o===100){q=l.bH(9)
if(!(q<512))return A.a(B.a7,q)
p=B.a7[q]
n=B.a.j(p,1)&15
m=B.a.j(p,5)
if(n===12){l.aB(5)
q=l.aT(4)
if(!(q<16))return A.a(B.F,q)
p=B.F[q]
m=B.a.j(p,1)
s+=B.a.j(p,4)&4095
l.aB(4-(m&7))}else if(n===15)throw A.f(A.n("TIFFFaxDecoder2"))
else{s+=m&2047
l.aB(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.aT(2)
if(!(q<4))return A.a(B.a4,q)
p=B.a4[q]
s+=p>>>5&2047
l.aB(2-(p>>>1&15))}else{s+=o
l.aB(4-(p>>>1&15))}r=!0}}return s},
eE(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.bH(12)!==1)throw A.f(A.n("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.bH(s)!==0)throw A.f(A.n(p))
if(s<4)if(q.bH(8)!==0)throw A.f(A.n(p))
while(r=q.bH(8),r!==1)if(r!==0)throw A.f(A.n(p))}if(q.at===0)return 1
else return q.aT(1)},
es(a,b,c){var s,r,q,p,o,n,m=this
t.cP.a(c)
s=m.e
r=m.d
q=m.y
p=q>0?q-1:0
p=b?(p&4294967294)>>>0:(p|1)>>>0
for(q=s.length,o=p;o<r;o+=2){if(!(o<q))return A.a(s,o)
n=s[o]
n.toString
a.toString
if(n>a){m.y=o
B.c.i(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.c.i(c,1,s[n])}},
b0(a,b,c,d){var s,r,q,p,o,n=8*b+A.v(c),m=n+d,l=B.a.j(n,3),k=n&7
if(k>0){s=B.a.X(1,7-k)
r=J.c(a.a,a.d+l)
for(;;){if(!(s>0&&n<m))break
r=(r|s)>>>0
s=s>>>1;++n}a.i(0,l,r)}l=B.a.j(n,3)
for(q=m-7;n<q;l=p){p=l+1
J.w(a.a,a.d+l,255)
n+=8}while(n<m){l=B.a.j(n,3)
q=J.c(a.a,a.d+l)
o=B.a.X(1,7-(n&7))
J.w(a.a,a.d+l,(q|o)>>>0);++n}},
bH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
e===$&&A.d()
s=e.d
r=e.c-s-1
q=f.x
p=f.c
o=0
n=0
if(p===1){q.toString
m=J.c(e.a,s+q)
if(!(q===r)){e=q+1
s=f.r
p=s.a
s=s.d
if(e===r)o=J.c(p,s+e)
else{o=J.c(p,s+e)
e=f.r
n=J.c(e.a,e.d+(q+2))}}}else if(p===2){q.toString
m=B.S[J.c(e.a,s+q)&255]
if(!(q===r)){e=q+1
s=f.r
p=s.a
s=s.d
if(e===r)o=B.S[J.c(p,s+e)&255]
else{o=B.S[J.c(p,s+e)&255]
e=f.r
n=B.S[J.c(e.a,e.d+(q+2))&255]}}}else throw A.f(A.n("TIFFFaxDecoder7"))
e=f.w
e.toString
l=8-e
k=a-l
if(k>8){j=k-8
i=8}else{i=k
j=0}e=f.x
e.toString
e=f.x=e+1
if(!(l>=0&&l<9))return A.a(B.y,l)
h=B.a.X(m&B.y[l],k)
if(!(i>=0))return A.a(B.Q,i)
g=B.a.a1(o&B.Q[i],8-i)
if(j!==0){g=B.a.X(g,j)
if(!(j<9))return A.a(B.Q,j)
g|=B.a.a1(n&B.Q[j],8-j)
f.x=e+1
f.w=j}else if(i===8){f.w=0
f.x=e+1}else f.w=i
return(h|g)>>>0},
aT(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.r
h===$&&A.d()
s=h.d
r=h.c-s-1
q=i.x
p=i.c
o=0
if(p===1){q.toString
n=J.c(h.a,s+q)
if(!(q===r)){h=i.r
o=J.c(h.a,h.d+(q+1))}}else if(p===2){q.toString
n=B.S[J.c(h.a,s+q)&255]
if(!(q===r)){h=i.r
o=B.S[J.c(h.a,h.d+(q+1))&255]}}else throw A.f(A.n("TIFFFaxDecoder7"))
h=i.w
h.toString
m=8-h
l=a-m
k=m-a
if(k>=0){if(!(m>=0&&m<9))return A.a(B.y,m)
j=B.a.a1(n&B.y[m],k)
h+=a
i.w=h
if(h===8){i.w=0
h=i.x
h.toString
i.x=h+1}}else{if(!(m>=0&&m<9))return A.a(B.y,m)
j=B.a.X(n&B.y[m],-k)
if(!(l>=0&&l<9))return A.a(B.Q,l)
j=(j|B.a.a1(o&B.Q[l],8-l))>>>0
h=i.x
h.toString
i.x=h+1
i.w=l}return j},
aB(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s}}
A.ho.prototype={
h4(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=A.o(a0,c,0),a=a0.l()
for(s=d.a,r=0;r<a;++r){q=a0.l()
p=a0.l()
o=a0.k()
if(p>13){a0.d+=4
continue}n=B.bv[p]
if(o*B.t[p]>4)m=a0.k()
else{m=a0.d
a0.d=m+4}l=new A.hn(q,n,o,m,b)
s.i(0,q,l)
if(q===256){k=l.bc()
k=k==null?c:k.h(0)
d.b=k==null?0:k}else if(q===257){k=l.bc()
k=k==null?c:k.h(0)
d.c=k==null?0:k}else if(q===262){j=l.bc()
i=j==null?c:j.h(0)
if(i==null)i=17
if(i<17){if(!(i>=0))return A.a(B.bp,i)
d.d=B.bp[i]}else d.d=B.aH}else if(q===259){k=l.bc()
k=k==null?c:k.h(0)
d.e=k==null?0:k}else if(q===258){k=l.bc()
k=k==null?c:k.h(0)
d.f=k==null?0:k}else if(q===277){k=l.bc()
k=k==null?c:k.h(0)
d.r=k==null?0:k}else if(q===317){k=l.bc()
k=k==null?c:k.h(0)
d.Q=k==null?0:k}else if(q===339){k=l.bc()
j=k==null?c:k.h(0)
if(j==null)j=0
if(!(j>=0&&j<4))return A.a(B.bt,j)
d.x=B.bt[j]}else if(q===320){j=l.bc()
if(j!=null){k=J.nE(B.f.gB(j.be()))
d.id=k
d.k1=0
k=k.length/3|0
d.k2=k
d.k3=k*2}}}k=d.id
h=k!=null
if(h&&d.d===B.aI)d.r=1
if(d.b===0||d.c===0)return
if(h&&d.f===8){g=k.length
for(h=k.$flags|0,r=0;r<g;++r){f=k[r]
h&2&&A.b(k)
k[r]=f>>>8}}if(d.d===B.aG)d.z=!0
d.w=d.r
if(s.af(324)){d.ay=d.c5(322)
d.ch=d.c5(323)
d.CW=d.cV(324)
d.cx=d.cV(325)}else{d.ay=d.cU(322,d.b)
if(!s.af(278))d.ch=d.cU(323,d.c)
else{e=d.c5(278)
if(e===-1)d.ch=d.c
else d.ch=e}d.CW=d.cV(273)
d.cx=d.cV(279)}k=d.b
h=d.ay
d.cy=B.a.aA(k+h-1,h)
h=d.c
k=d.ch
d.db=B.a.aA(h+k-1,k)
d.dy=d.cU(266,1)
d.fr=d.c5(292)
d.fx=d.c5(293)
d.c5(338)
switch(d.d.a){case 0:case 1:s=d.f
if(s===1&&d.r===1)d.y=B.aF
else if(s===4&&d.r===1)d.y=B.jO
else if(B.a.a7(s,8)===0){s=d.r
if(s===1)d.y=B.jP
else if(s===2)d.y=B.jQ
else d.y=B.a_}break
case 2:if(B.a.a7(d.f,8)===0){s=d.r
if(s===3)d.y=B.c7
else if(s===4)d.y=B.jS
else d.y=B.a_}break
case 3:s=!1
if(d.r===1)if(d.id!=null){s=d.f
s=s===4||s===8||s===16}if(s)d.y=B.jR
break
case 4:if(d.f===1&&d.r===1)d.y=B.aF
break
case 6:if(d.e===7&&d.f===8&&d.r===3)d.y=B.c7
else{if(s.af(530)){j=s.m(0,530).bc()
d.as=j.h(0)
s=d.at=j.a4(0,1)}else s=d.at=d.as=2
k=d.as
k===$&&A.d()
if(k*s===1)d.y=B.a_
else if(d.f===8&&d.r===3)d.y=B.jT}break
case 5:if(B.a.a7(d.f,8)===0)d.y=B.a_
s=d.r
if(s===4)d.w=3
else if(s===5)d.w=4
break
default:if(B.a.a7(d.f,8)===0)d.y=B.a_
break}},
bL(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.x,a1=a0===B.Z,a2=a0===B.h
a0=b.f
if(a0===1)s=B.w
else if(a0===2)s=B.A
else{if(a0===4)a0=B.B
else if(a1&&a0===16)a0=B.D
else if(a1&&a0===32)a0=B.I
else if(a1&&a0===64)a0=B.L
else if(a2&&a0===8)a0=B.M
else if(a2&&a0===16)a0=B.N
else if(a2&&a0===32)a0=B.O
else if(a0===16)a0=B.l
else a0=a0===32?B.J:B.e
s=a0}r=b.id!=null&&b.d===B.aI
q=r?3:b.w
a0=b.b
p=A.O(a,a,s,0,B.i,b.c,a,0,q,a,s,a0,r)
if(r){a0=p.a
a0=a0==null?a:a0.gT()
a0.toString
o=b.id
n=o.length
m=n/3|0
l=b.k1
l===$&&A.d()
k=b.k2
k===$&&A.d()
j=b.k3
j===$&&A.d()
for(i=j,h=k,g=l,f=0;f<m;++f,++g,++h,++i){if(i>=n)break
if(!(g<n))return A.a(o,g)
l=o[g]
if(!(h<n))return A.a(o,h)
a0.b7(f,l,o[h],o[i])}}e=0
d=0
for(;;){a0=b.db
a0===$&&A.d()
if(!(e<a0))break
c=0
for(;;){a0=b.cy
a0===$&&A.d()
if(!(c<a0))break
b.hN(a3,p,c,e);++c;++d}++e}return p},
hN(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null
if(b0.y===B.aF){b0.hA(b2,b3,b4,b5)
return}p=b0.cy
p===$&&A.d()
o=b5*p+b4
p=b0.CW
if(!(o>=0&&o<p.length))return A.a(p,o)
b2.d=p[o]
p=b0.ay
n=b4*p
m=b0.ch
l=b5*m
k=b0.cx
if(!(o<k.length))return A.a(k,o)
s=k[o]
j=p*m*b0.r
p=b0.f
m=p===16
if(m)j*=2
else if(p===32)j*=4
r=null
if(p===8||m||p===32||p===64){p=b0.e
if(p===1)r=b2
else if(p===5){r=A.q(new Uint8Array(j),!1,b1,0)
q=A.md()
try{q.f9(A.o(b2,s,0),r.a)}catch(i){}if(b0.Q===2)for(h=0;h<b0.ch;++h){g=b0.r
p=b0.ay
f=g*(h*p+1)
e=p*g
for(;g<e;++g){p=r
m=J.c(p.a,p.d+f)
k=r
d=b0.r
d=J.c(k.a,k.d+(f-d))
J.w(p.a,p.d+f,m+d);++f}}}else if(p===32773){r=A.q(new Uint8Array(j),!1,b1,0)
b0.ef(b2,j,r.a)}else if(p===32946)r=A.q(B.C.bM(b2.cu(0,0,s)),!1,b1,0)
else if(p===8)r=A.q(B.C.bM(b2.cu(0,0,s)),!1,b1,0)
else if(p===6||p===7){b0.ig(new A.fS().bL(t.D.a(b2.cu(0,0,s))),b3,n,l,b0.ay,b0.ch)
return}else throw A.f(A.n("Unsupported Compression Type: "+p))
c=A.j([0,0,0],t.t)
for(b=l,a=0;a<b0.ch;++a,++b)for(a0=n,a1=0;a1<b0.ay;++a1,++a0){p=r
if(p.d>=p.c||a0>=b0.b||b>=b0.c)break
p=b0.r
if(p===1){p=b0.x
if(p===B.Z){p=b0.f
if(p===32){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.bS()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else if(p===64)a2=r.d7()
else if(p===16){p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a2=m[p]}else a2=0
if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.aF(a0,b,a2)}}else{m=b0.f
if(m===8)if(p===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else{p=r
a2=J.c(p.a,p.d++)}else if(m===16)if(p===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else a2=r.l()
else if(m===32)if(p===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else a2=r.k()
else a2=0
if(b0.d===B.aG){p=b3.a
a3=p==null?b1:p.gD()
a2=(a3==null?0:a3)-a2}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.aF(a0,b,a2)}}}else if(p===2){p=b0.f
if(p===8){if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else{p=r
a4=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else{p=r
a5=J.c(p.a,p.d++)}}else if(p===16){if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else a4=r.l()
if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.l()}else if(p===32){if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else a4=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.k()}else{a4=0
a5=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.a3(a0,b,a4,a5,0)}}else if(p===3){p=b0.x
if(p===B.Z){p=b0.f
if(p===32){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.bS()
if(0>=p.length)return A.a(p,0)
a6=p[0]
m[0]=r.k()
a7=p[0]
m[0]=r.k()
a8=p[0]}else{a7=0
a8=0
if(p===64)a6=r.d7()
else if(p===16){p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a6=m[p]
p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a8=m[p]}else a6=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.a3(a0,b,a6,a7,a8)}}else{m=b0.f
if(m===8){if(p===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
a6=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else{p=r
a7=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else{p=r
a8=J.c(p.a,p.d++)}}else if(m===16){if(p===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.l()
if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.l()
if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.l()}else if(m===32){if(p===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()}else{a6=0
a7=0
a8=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.a3(a0,b,a6,a7,a8)}}}else if(p>=4)if(b0.x===B.Z){p=b0.f
if(p===32){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.bS()
if(0>=p.length)return A.a(p,0)
a6=p[0]
m[0]=r.k()
a7=p[0]
m[0]=r.k()
a8=p[0]
m[0]=r.k()
a9=p[0]}else{a7=0
a8=0
a9=0
if(p===64)a6=r.d7()
else if(p===16){p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a6=m[p]
p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.l()
m=$.Q
m=m!=null?m:A.S()
if(!(p<m.length))return A.a(m,p)
a9=m[p]}else a6=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.al(a0,b,a6,a7,a8,a9)}}else{p=b3.a
a5=p==null?b1:p.gD()
if(a5==null)a5=0
p=b0.f
if(p===8){if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
a6=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else{p=r
a7=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else{p=r
a8=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else{p=r
a9=J.c(p.a,p.d++)}if(b0.r===5)if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.am()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aw()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else{p=r
a5=J.c(p.a,p.d++)}}else if(p===16){if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.l()
if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.l()
if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.l()
if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.l()
if(b0.r===5)if(b0.x===B.h){p=r.l()
m=$.al()
m.$flags&2&&A.b(m)
m[0]=p
p=$.av()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.l()}else if(p===32){if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()
if(b0.r===5)if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a3()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.k()}else{a6=0
a7=0
a8=0
a9=0}if(b0.d===B.c8){A.n5(a6,a7,a8,a9,c)
a6=c[0]
a7=c[1]
a8=c[2]
a9=a5}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.al(a0,b,a6,a7,a8,a9)}}}}else throw A.f(A.n("Unsupported bitsPerSample: "+p))},
ig(a,b,c,d,e,f){var s,r,q,p
for(s=0;s<f;++s)for(r=s+d,q=0;q<e;++q){p=a.a
p=p==null?null:p.L(q,s,null)
if(p==null)p=new A.H()
b.bP(q+c,r,p)}},
hA(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=a2.cy
a4===$&&A.d()
r=a8*a4+a7
a4=a2.CW
if(!(r>=0&&r<a4.length))return A.a(a4,r)
a5.d=a4[r]
a4=a2.ay
q=a7*a4
p=a2.ch
o=a8*p
n=a2.cx
if(!(r<n.length))return A.a(n,r)
m=n[r]
s=null
n=a2.e
if(n===32773){l=B.a.a7(a4,8)===0?B.a.Y(a4,8)*p:(B.a.Y(a4,8)+1)*p
s=A.q(new Uint8Array(a4*p),!1,a3,0)
a2.ef(a5,l,s.a)}else if(n===5){s=A.q(new Uint8Array(a4*p),!1,a3,0)
A.md().f9(A.o(a5,m,0),s.a)
if(a2.Q===2)for(k=0;k<a2.c;++k){j=a2.r
i=j*(k*a2.b+1)
for(;j<a2.b*a2.r;++j){a4=s
p=J.c(a4.a,a4.d+i)
n=s
h=a2.r
h=J.c(n.a,n.d+(i-h))
J.w(a4.a,a4.d+i,p+h);++i}}}else if(n===2){s=A.q(new Uint8Array(a4*p),!1,a3,0)
try{A.l4(a2.dy,a4,p).jh(s,a5,0,a2.ch)}catch(g){}}else if(n===3){s=A.q(new Uint8Array(a4*p),!1,a3,0)
try{A.l4(a2.dy,a4,p).ji(s,a5,0,a2.ch,a2.fr)}catch(g){}}else if(n===4){s=A.q(new Uint8Array(a4*p),!1,a3,0)
try{A.l4(a2.dy,a4,p).jm(s,a5,0,a2.ch,a2.fx)}catch(g){}}else if(n===8)s=A.q(B.C.bM(a5.cu(0,0,m)),!1,a3,0)
else if(n===32946)s=A.q(B.C.bM(a5.cu(0,0,m)),!1,a3,0)
else if(n===1)s=a5
else throw A.f(A.n("Unsupported Compression Type: "+n))
f=new A.iW(s)
e=a6.gD()
a4=a2.z
d=a4?e:0
c=a4?0:e
for(b=o,a=0;a<a2.ch;++a,++b){for(a0=q,a1=0;a1<a2.ay;++a1,++a0){a4=a6.a
p=a4==null
n=p?a3:a4.b
if(b<(n==null?0:n)){a4=p?a3:a4.a
a4=a0>=(a4==null?0:a4)}else a4=!0
if(a4)break
a4=f.ac(1)
p=a6.a
if(a4===0){if(p!=null)p.a3(a0,b,d,0,0)}else if(p!=null)p.a3(a0,b,c,0,0)}f.c=0}},
ef(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.L.a(c)
for(s=J.ak(c),r=0,q=0;q<b;){p=r+1
o=J.c(a.a,a.d+r)
n=$.am()
n.$flags&2&&A.b(n)
n[0]=o
o=$.aw()
if(0>=o.length)return A.a(o,0)
m=o[0]
if(m>=0&&m<=127)for(o=m+1,r=p,l=0;l<o;++l,q=k,r=p){k=q+1
p=r+1
s.i(c,q,J.c(a.a,a.d+r))}else{o=m<=-1&&m>=-127
r=p+1
if(o){j=J.c(a.a,a.d+p)
for(o=-m+1,l=0;l<o;++l,q=k){k=q+1
s.i(c,q,j)}}}}},
cU(a,b){var s=this.a
if(!s.af(a))return b
s=s.m(0,a).bc()
s=s==null?null:s.h(0)
return s==null?0:s},
c5(a){return this.cU(a,0)},
cV(a){var s,r=this.a
if(!r.af(a))return null
s=r.m(0,a)
r=s.bc()
r.toString
return A.mb(s.c,r.gbu(r),t.p)}}
A.cr.prototype={
ae(){return"TiffFormat."+this.b}}
A.a4.prototype={
ae(){return"TiffPhotometricType."+this.b}}
A.aN.prototype={
ae(){return"TiffImageType."+this.b}}
A.hp.prototype={$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.iz.prototype={
f9(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
k.r=b
s=J.bf(b)
k.w=0
r=t.D.a(a.a)
k.e=r
q=k.f=r.length
k.b=a.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.f(A.n("Invalid LZW Data"))
k.ex()
k.d=k.c=0
p=k.dr()
r=k.x
o=0
for(;;){if(!(p!==257&&k.w<s))break
if(p===256){k.ex()
p=k.dr()
k.as=0
if(p===257)break
J.w(k.r,k.w++,p)
o=p}else{q=k.Q
q.toString
if(p<q){k.ev(p)
q=k.as
q===$&&A.d()
n=q-1
for(;n>=0;--n){q=k.r
m=k.w++
if(!(n<4096))return A.a(r,n)
J.w(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.e_(o,r[q])}else{k.ev(o)
q=k.as
q===$&&A.d()
n=q-1
for(;n>=0;--n){q=k.r
m=k.w++
if(!(n<4096))return A.a(r,n)
J.w(q,m,r[n])}q=k.r
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.w(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.e_(o,r[l])}o=p}p=k.dr()}},
e_(a,b){var s,r=this,q=r.y
q===$&&A.d()
s=r.Q
s.toString
q.$flags&2&&A.b(q)
if(!(s<4096))return A.a(q,s)
q[s]=b
q=r.z
q===$&&A.d()
q.$flags&2&&A.b(q)
q[s]=a
s=r.Q=s+1
if(s===511)r.a=10
else if(s===1023)r.a=11
else if(s===2047)r.a=12},
ev(a){var s,r,q,p,o,n,m,l=this
l.as=0
s=l.x
l.as=1
r=l.y
r===$&&A.d()
if(!(a<4096))return A.a(r,a)
q=r[a]
s.$flags&2&&A.b(s)
s[0]=q
q=l.z
q===$&&A.d()
p=q[a]
for(o=1;p!==4098;o=n){n=o+1
l.as=n
if(!(p>=0&&p<4096))return A.a(r,p)
m=r[p]
if(!(o<4096))return A.a(s,o)
s[o]=m
p=q[p]}},
dr(){var s,r,q,p,o=this,n=o.b,m=o.f
m===$&&A.d()
if(n>=m)return 257
for(;s=o.d,r=o.a,s<r;n=p){if(n>=m)return 257
r=o.c
q=o.e
q===$&&A.d()
p=n+1
o.b=p
if(!(n>=0&&n<q.length))return A.a(q,n)
o.c=(r<<8>>>0)+q[n]>>>0
o.d=s+8}n=s-r
o.d=n
n=B.a.a1(o.c,n)
r-=9
if(!(r>=0&&r<4))return A.a(B.b9,r)
return n&B.b9[r]},
ex(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.o.aD(s,0,4096,4098)
for(s=q.y,r=0;r<256;++r){s.$flags&2&&A.b(s)
s[r]=r}q.a=9
q.Q=258}}
A.iX.prototype={
au(a){var s=this,r=A.q(a,!1,null,0)
s.c=r
r=s.dA(r)
s.a=r
if(r!=null)s.b=A.i4(A.q(a,!1,null,0))
return s.a},
ah(a){var s,r,q=this.a
if(q==null)return null
q=q.f
if(!(a<q.length))return A.a(q,a)
q=q[a]
s=this.c
s===$&&A.d()
r=q.bL(s)
q=this.b
if(q!=null)r.e=q
return r},
aU(a,b){var s,r,q,p=this,o=null,n=A.q(a,!1,o,0)
p.c=n
n=p.a=p.dA(n)
if(n==null)return o
s=n.f.length
r=p.ah(0)
if(r==null)return o
r.e=A.i4(A.q(a,!1,o,0))
r.w=B.aU
for(q=1;q<s;++q)r.b1(p.ah(q))
return r},
dA(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=A.j([],t.aU),g=new A.hp(h),f=a.l()
if(f!==18761&&f!==19789)return i
if(f===19789)a.e=!0
else a.e=!1
q=a.l()
g.d=q
if(q!==42)return i
p=a.k()
o=A.o(a,i,0)
o.d=p
s=o
for(q=t.p,n=t.cV;p!==0;){r=null
try{m=new A.ho(A.J(q,n),B.aH,B.c6,B.jU)
m.h4(s)
r=m
l=r
if(!(l.b!==0&&l.c!==0))break}catch(k){break}B.c.M(h,r)
l=h.length
if(l===1){if(0>=l)return A.a(h,0)
j=h[0]
g.a=j.b
if(0>=l)return A.a(h,0)
g.b=j.c}p=s.k()
if(p!==0)s.d=p}return h.length!==0?g:i}}
A.j0.prototype={
ck(){var s,r=this.a,q=r.bd()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.bd()!==2752925)return!1
s=this.b
s.a=r.l()
s.b=r.l()
return!0},
bC(){var s,r,q,p=this,o=null
if(!p.i3())return o
s=p.b
r=s.a
p.d=A.O(o,o,B.e,0,B.i,s.b,o,0,4,o,B.e,r,!1)
p.i9()
if(!p.io())return o
s=s.w
if(s.length!==0){q=A.q(new A.aR(s),!1,o,0)
s=p.d
s.toString
s.e=A.i4(q)}return p.d},
i3(){var s,r,q,p,o=this
if(!o.ck())return!1
o.fr=A.pv()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.c.i(s,r,new A.hw(q,p,new Int32Array(2)))}o.y=o.Q=0
s=o.b
q=s.a
o.z=q
s=s.b
o.as=s
o.at=q+15>>>4
o.ax=s+15>>>4
o.k1=0
s=o.a
q=o.f
p=q.d
p===$&&A.d()
p=A.mu(s.aj(p))
o.c=p
s.d+=q.d
p.Z(1)
o.c.Z(1)
o.iu(o.x,o.fr)
o.im()
if(!o.iq(s))return!1
o.is()
o.c.Z(1)
o.ir()
return!0},
iu(a,b){var s,r,q,p=this,o=p.c
o===$&&A.d()
o=o.Z(1)!==0
a.a=o
if(o){a.b=p.c.Z(1)!==0
if(p.c.Z(1)!==0){a.c=p.c.Z(1)!==0
for(o=a.d,s=0;s<4;++s){if(p.c.Z(1)!==0){r=p.c
q=r.Z(7)
r=r.Z(1)===1?-q:q}else r=0
o.$flags&2&&A.b(o)
o[s]=r}for(o=a.e,s=0;s<4;++s){if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
r=r.Z(1)===1?-q:q}else r=0
o.$flags&2&&A.b(o)
o[s]=r}}if(a.b)for(s=0;s<3;++s){o=b.a
r=p.c.Z(1)!==0?p.c.Z(8):255
o.$flags&2&&A.b(o)
o[s]=r}}else a.b=!1
return!0},
im(){var s,r,q,p=this,o=p.w,n=p.c
n===$&&A.d()
o.a=n.Z(1)!==0
o.b=p.c.Z(6)
o.c=p.c.Z(3)
n=p.c.Z(1)!==0
o.d=n
if(n)if(p.c.Z(1)!==0){for(n=o.e,s=0;s<4;++s)if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
r=r.Z(1)===1?-q:q
n.$flags&2&&A.b(n)
n[s]=r}for(n=o.f,s=0;s<4;++s)if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
r=r.Z(1)===1?-q:q
n.$flags&2&&A.b(n)
n[s]=r}}if(o.b===0)n=0
else n=o.a?1:2
p.bY=n
return!0},
iq(a){var s,r,q,p,o,n,m,l=a.c-a.d,k=this.c
k===$&&A.d()
k=B.a.O(1,k.Z(2))
this.cy=k
s=k-1
r=s*3
if(l<r)return!1
for(k=this.db,q=0,p=0;p<s;++p,r=n){o=a.cG(3,q)
n=r+((J.c(o.a,o.d)|J.c(o.a,o.d+1)<<8|J.c(o.a,o.d+2)<<16)>>>0)
if(n>l)n=l
m=new A.eD(a.bQ(n-r,r))
m.b=254
m.c=0
m.d=-8
B.c.i(k,p,m)
q+=3}B.c.i(k,s,A.mu(a.bQ(l-r,a.d-a.b+r)))
return r<l},
is(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.d()
s=e.Z(7)
r=f.c.Z(1)!==0?f.c.c9(4):0
q=f.c.Z(1)!==0?f.c.c9(4):0
p=f.c.Z(1)!==0?f.c.c9(4):0
o=f.c.Z(1)!==0?f.c.c9(4):0
n=f.c.Z(1)!==0?f.c.c9(4):0
m=f.x
for(e=f.dy,l=m.d,k=0;k<4;++k){if(m.a){j=l[k]
if(!m.c)j+=s}else{if(k>0){i=e[0]
if(!(k>=0&&k<4))return A.a(e,k)
e[k]=i
continue}j=s}h=e[k]
i=h.a
g=j+r
if(g<0)g=0
else if(g>127)g=127
g=B.aw[g]
i.$flags&2&&A.b(i)
i[0]=g
if(j<0)g=0
else g=j>127?127:j
i[1]=B.ax[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
i=B.aw[i]
g.$flags&2&&A.b(g)
g[0]=i*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.ax[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
g=B.aw[g]
i.$flags&2&&A.b(i)
i[0]=g
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.ax[g]}},
ir(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.d()
n=o.a6(B.iC[s][r][q][p])!==0?m.c.Z(8):B.dO[s][r][q][p]
o=l.b
if(!(s<o.length))return A.a(o,s)
o=o[s]
if(!(r<o.length))return A.a(o,r)
o=o[r].a
if(!(q<o.length))return A.a(o,q)
o=o[q]
o.$flags&2&&A.b(o)
o[p]=n}o=m.c
o===$&&A.d()
o=o.Z(1)!==0
m.fx=o
if(o)m.fy=m.c.Z(8)},
iw(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.bY
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.dH
m===$&&A.d()
if(!(o<m.length))return A.a(m,o)
k=m[o][l]
m=s.d
m===$&&A.d()
if(m){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){m=s.c
m===$&&A.d()
if(m>0){i=m>4?B.a.j(j,2):B.a.j(j,1)
h=9-m
if(i>h)i=h}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
i9(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b,e=f.at
if(e!=null)h.dI=e
s=J.ai(4,t.e6)
for(e=t.ao,r=0;r<4;++r)s[r]=A.j([new A.bx(),new A.bx()],e)
h.dH=t.gS.a(s)
e=h.at
e.toString
s=J.ai(e,t.dE)
for(q=0;q<e;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.eH(p,o,new Uint8Array(8))}h.k2=t.cC.a(s)
h.ok=new Uint8Array(832)
e=h.at
e.toString
h.go=new Uint8Array(4*e)
p=h.p4=16*e
o=h.R8=8*e
n=h.bY
n.toString
if(!(n<3))return A.a(B.a3,n)
m=B.a3[n]
l=m*p
k=(m/2|0)*o
h.p1=A.q(new Uint8Array(16*p+l),!1,g,l)
p=8*o+k
h.p2=A.q(new Uint8Array(p),!1,g,k)
h.p3=A.q(new Uint8Array(p),!1,g,k)
f=f.a
h.RG=A.q(new Uint8Array(f),!1,g,0)
j=f+1>>>1
h.rx=A.q(new Uint8Array(j),!1,g,0)
h.ry=A.q(new Uint8Array(j),!1,g,0)
if(n===2)h.ch=h.ay=0
else{f=B.a.Y(h.y-m,16)
h.ay=f
p=B.a.Y(h.Q-m,16)
h.ch=p
if(f<0)h.ay=0
if(p<0)h.ch=0}f=B.a.Y(h.as+15+m,16)
h.cx=f
p=B.a.Y(h.z+15+m,16)
h.CW=p
if(p>e)h.CW=e
p=h.ax
p.toString
if(f>p)h.cx=p
i=e+1
s=J.ai(i,t.ai)
for(q=0;q<i;++q)s[q]=new A.eF()
h.k3=t.eQ.a(s)
f=h.at
f.toString
s=J.ai(f,t.gU)
for(q=0;q<f;++q){e=new Int16Array(384)
s[q]=new A.eG(e,new Uint8Array(16))}h.cl=t.db.a(s)
f=h.at
f.toString
h.k4=t.ge.a(A.X(f,g,!1,t.aj))
h.iw()
A.oW()
h.e=new A.j1()
return!0},
io(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.y2=0
s=e.id
r=e.x
q=e.db
p=0
for(;;){o=e.cx
o.toString
if(!(p<o))break
o=e.cy
o===$&&A.d()
o=(p&o-1)>>>0
if(!(o>=0&&o<8))return A.a(q,o)
n=q[o]
for(;;){p=e.y1
o=e.at
o.toString
if(!(p<o))break
o=e.k3
o===$&&A.d()
m=o.length
if(0>=m)return A.a(o,0)
l=o[0]
k=1+p
if(!(k<m))return A.a(o,k)
j=o[k]
k=e.cl
k===$&&A.d()
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.d()
p=p.a6(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.a6(m.a[1]):2+o.a6(m.a[2])}p=e.fx
p===$&&A.d()
if(p){p=e.c
p===$&&A.d()
o=e.fy
o===$&&A.d()
h=p.a6(o)!==0}else h=!1
e.ip()
if(!h)h=e.it(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.d()
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.bY
p.toString
if(p>0){p=e.k4
p===$&&A.d()
o=e.y1
m=e.dH
m===$&&A.d()
k=e.k1
k===$&&A.d()
if(!(k<m.length))return A.a(m,k)
k=m[k]
m=i.b
m===$&&A.d()
B.c.i(p,o,k[m?1:0])
p=e.k4
o=e.y1
if(!(o<p.length))return A.a(p,o)
g=p[o]
g.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.d()
if(0>=p.length)return A.a(p,0)
p=p[0]
p.b=p.a=0
B.f.aD(s,0,4,0)
e.y1=0
e.iY()
p=e.bY
p.toString
f=!1
if(p>0){p=e.y2
o=e.ch
o===$&&A.d()
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}}if(!e.i1(f))return!1
p=++e.y2}return!0},
iY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a4.y2,a7=a4.ok
a7===$&&A.d()
s=A.q(a7,!1,a5,40)
r=A.q(a7,!1,a5,584)
q=A.q(a7,!1,a5,600)
a7=a6>0
p=0
for(;;){o=a4.at
o.toString
if(!(p<o))break
o=a4.cl
o===$&&A.d()
if(!(p<o.length))return A.a(o,p)
n=o[p]
if(p>0){for(m=-1;m<16;++m){o=m*32
s.bb(o-4,4,s,o+12)}for(m=-1;m<8;++m){o=m*32
l=o-4
o+=4
r.bb(l,4,r,o)
q.bb(l,4,q,o)}}else{for(m=0;m<16;++m)J.w(s.a,s.d+(m*32-1),129)
for(m=0;m<8;++m){o=m*32-1
J.w(r.a,r.d+o,129)
J.w(q.a,q.d+o,129)}if(a7){J.w(q.a,q.d+-33,129)
J.w(r.a,r.d+-33,129)
J.w(s.a,s.d+-33,129)}}o=a4.k2
o===$&&A.d()
if(!(p<o.length))return A.a(o,p)
k=o[p]
j=n.a
i=n.e
if(a7){s.bO(-32,16,k.a)
r.bO(-32,8,k.b)
q.bO(-32,8,k.c)}else if(p===0){o=s.a
l=s.d+-33
J.bd(o,l,l+21,127)
l=r.a
o=r.d+-33
J.bd(l,o,o+9,127)
o=q.a
l=q.d+-33
J.bd(o,l,l+9,127)}o=n.b
o===$&&A.d()
if(o){h=A.o(s,a5,-16)
g=h.cw()
if(a7){o=a4.at
o.toString
if(p>=o-1){o=k.a[15]
l=h.a
f=h.d
J.bd(l,f,f+4,o)}else{o=a4.k2
l=p+1
if(!(l<o.length))return A.a(o,l)
h.bO(0,4,o[l].a)}}o=g.length
if(0>=o)return A.a(g,0)
e=g[0]
g.$flags&2&&A.b(g)
if(96>=o)return A.a(g,96)
g[96]=e
g[64]=e
g[32]=e
for(o=n.c,d=0;d<16;++d,i=i<<2>>>0){c=A.o(s,a5,B.bM[d])
l=o[d]
if(!(l<10))return A.a(B.bB,l)
B.bB[l].$1(c)
i.toString
l=d*16
a4.ei(i,new A.af(j,l,Math.min(384,384),l,!1),c)}}else{o=A.mw(p,a6,n.c[0])
o.toString
if(!(o<7))return A.a(B.bL,o)
B.bL[o].$1(s)
if(i!==0)for(d=0;d<16;++d,i=i<<2>>>0){c=A.o(s,a5,B.bM[d])
i.toString
o=d*16
a4.ei(i,new A.af(j,o,Math.min(384,384),o,!1),c)}}o=n.f
o===$&&A.d()
l=A.mw(p,a6,n.d)
l.toString
if(!(l<7))return A.a(B.ay,l)
B.ay[l].$1(r)
B.ay[l].$1(q)
l=Math.min(384,384)
b=new A.af(j,256,l,256,!1)
if((o&255)!==0){f=a4.e
if((o&170)!==0){f===$&&A.d()
f.bv(b,r)
f.bv(A.o(b,a5,16),A.o(r,a5,4))
a=A.o(b,a5,32)
a0=A.o(r,a5,128)
f.bv(a,a0)
f.bv(A.o(a,a5,16),A.o(a0,a5,4))}else{f===$&&A.d()
f.fq(b,r)}}a1=new A.af(j,320,l,320,!1)
o=o>>>8
if((o&255)!==0){l=a4.e
if((o&170)!==0){l===$&&A.d()
l.bv(a1,q)
l.bv(A.o(a1,a5,16),A.o(q,a5,4))
o=A.o(a1,a5,32)
f=A.o(q,a5,128)
l.bv(o,f)
l.bv(A.o(o,a5,16),A.o(f,a5,4))}else{l===$&&A.d()
l.fq(a1,q)}}o=a4.ax
o.toString
if(a6<o-1){B.f.am(k.a,0,16,s.a2(),480)
B.f.am(k.b,0,8,r.a2(),224)
B.f.am(k.c,0,8,q.a2(),224)}a2=p*16
a3=p*8
for(m=0;m<16;++m){o=a4.p4
o.toString
l=a4.p1
l===$&&A.d()
l.bb(a2+m*o,16,s,m*32)}for(m=0;m<8;++m){o=a4.R8
o.toString
l=a4.p2
l===$&&A.d()
f=m*32
l.bb(a3+m*o,8,r,f)
o=a4.R8
o.toString
l=a4.p3
l===$&&A.d()
l.bb(a3+m*o,8,q,f)}++p}},
ei(a,b,c){var s,r,q,p,o,n
switch(a>>>30){case 3:s=this.e
s===$&&A.d()
s.jV(b,c,!1)
break
case 2:this.e===$&&A.d()
r=J.c(b.a,b.d)+4
q=B.a.ar(B.a.j(J.c(b.a,b.d+4)*35468,16),32)
p=B.a.ar(B.a.j(J.c(b.a,b.d+4)*85627,16),32)
o=B.a.ar(B.a.j(J.c(b.a,b.d+1)*35468,16),32)
n=B.a.ar(B.a.j(J.c(b.a,b.d+1)*85627,16),32)
A.j3(c,0,r+p,n,o)
A.j3(c,1,r+q,n,o)
A.j3(c,2,r-q,n,o)
A.j3(c,3,r-p,n,o)
break
case 1:s=this.e
s===$&&A.d()
s.cz(b,c)
break
default:break}},
hS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.p4,e=h.k4
e===$&&A.d()
if(!(a>=0&&a<e.length))return A.a(e,a)
e=e[a]
e.toString
s=h.p1
s===$&&A.d()
r=A.o(s,g,a*16)
q=e.b
p=e.a
if(p===0)return
if(h.bY===1){if(a>0){s=h.e
s===$&&A.d()
f.toString
s.dQ(r,f,p+4)}if(e.c){s=h.e
s===$&&A.d()
f.toString
s.fH(r,f,p)}if(b>0){s=h.e
s===$&&A.d()
f.toString
s.dR(r,f,p+4)}if(e.c){e=h.e
e===$&&A.d()
f.toString
e.fI(r,f,p)}}else{o=h.R8
s=h.p2
s===$&&A.d()
n=a*8
m=A.o(s,g,n)
s=h.p3
s===$&&A.d()
l=A.o(s,g,n)
k=e.d
if(a>0){s=h.e
s===$&&A.d()
f.toString
n=p+4
s.c4(r,1,f,16,n,q,k)
o.toString
s.c4(m,1,o,8,n,q,k)
s.c4(l,1,o,8,n,q,k)}if(e.c){s=h.e
s===$&&A.d()
f.toString
s.ju(r,f,p,q,k)
o.toString
j=A.o(m,g,4)
i=A.o(l,g,4)
s.c3(j,1,o,8,p,q,k)
s.c3(i,1,o,8,p,q,k)}if(b>0){s=h.e
s===$&&A.d()
f.toString
n=p+4
s.c4(r,f,1,16,n,q,k)
o.toString
s.c4(m,o,1,8,n,q,k)
s.c4(l,o,1,8,n,q,k)}if(e.c){e=h.e
e===$&&A.d()
f.toString
e.jY(r,f,p,q,k)
o.toString
s=4*o
j=A.o(m,g,s)
i=A.o(l,g,s)
e.c3(j,o,1,8,p,q,k)
e.c3(i,o,1,8,p,q,k)}}},
i0(){var s,r=this,q=r.ay
q===$&&A.d()
s=q
for(;;){q=r.CW
q.toString
if(!(s<q))break
r.hS(s,r.y2);++s}},
i1(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.bY
a1.toString
if(!(a1<3))return A.a(B.a3,a1)
s=B.a3[a1]
a1=a.p4
a1.toString
r=s*a1
a1=a.R8
a1.toString
q=(s/2|0)*a1
a1=a.p1
a1===$&&A.d()
p=-r
o=A.o(a1,a0,p)
a1=a.p2
a1===$&&A.d()
n=-q
m=A.o(a1,a0,n)
a1=a.p3
a1===$&&A.d()
l=A.o(a1,a0,n)
k=a.y2
a1=a.cx
a1.toString
j=k*16
i=(k+1)*16
if(a2)a.i0()
if(k!==0){j-=s
a.to=A.o(o,a0,0)
a.x1=A.o(m,a0,0)
a.x2=A.o(l,a0,0)}else{a.to=A.o(a.p1,a0,0)
a.x1=A.o(a.p2,a0,0)
a.x2=A.o(a.p3,a0,0)}a1=k<a1-1
if(a1)i-=s
h=a.as
if(i>h)i=h
a.xr=null
if(a.dI!=null&&j<i){g=a.xr=a.hO(j,i-j)
if(g==null)return!1}else g=a0
f=a.Q
if(j<f){e=f-j
d=a.to
d===$&&A.d()
c=d.d
b=a.p4
b.toString
d.d=c+b*e
b=a.x1
b===$&&A.d()
c=b.d
d=a.R8
d.toString
d*=B.a.j(e,1)
b.d=c+d
c=a.x2
c===$&&A.d()
c.d+=d
if(g!=null)g.d=g.d+a.b.a*e
j=f}if(j<i){d=a.to
d===$&&A.d()
c=d.d
b=a.y
d.d=c+b
c=a.x1
c===$&&A.d()
d=b>>>1
c.d=c.d+d
c=a.x2
c===$&&A.d()
c.d+=d
if(g!=null)g.d+=b
a.iB(j-f,a.z-b,i-j)}if(a1){a1=a.p1
g=a.p4
g.toString
a1.bb(p,r,o,16*g)
g=a.p2
p=a.R8
p.toString
g.bb(n,q,m,8*p)
p=a.p3
g=a.R8
g.toString
p.bb(n,q,l,8*g)}return!0},
iB(a,b,c){if(b<=0||c<=0)return!1
this.hU(a,b,c)
this.hT(a,b,c)
return!0},
de(a){var s
if((a&-4194304)>>>0===0)s=B.a.j(a,14)
else s=a<0?0:255
return s},
d0(a,b,c,d){var s=19077*a
d.i(0,0,this.de(s+26149*c+-3644112))
d.i(0,1,this.de(s-6419*b-13320*c+2229552))
d.i(0,2,this.de(s+33050*b+-4527440))},
d_(a7,a8,a9,b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.jc(),a2=b5-1,a3=B.a.j(a2,1),a4=a1.$2(J.c(a9.a,a9.d),J.c(b0.a,b0.d)),a5=a1.$2(J.c(b1.a,b1.d),J.c(b2.a,b2.d)),a6=B.a.j(3*a4+a5+131074,2)
a.d0(J.c(a7.a,a7.d),a6&255,a6>>>16,b3)
b3.i(0,3,255)
s=a8!=null
if(s){a6=B.a.j(3*a5+a4+131074,2)
r=J.c(a8.a,a8.d)
b4.toString
a.d0(r,a6&255,a6>>>16,b4)
b4.i(0,3,255)}for(q=1;q<=a3;++q,a5=o,a4=p){p=a1.$2(J.c(a9.a,a9.d+q),J.c(b0.a,b0.d+q))
o=a1.$2(J.c(b1.a,b1.d+q),J.c(b2.a,b2.d+q))
n=a4+p+a5+o+524296
m=B.a.j(n+2*(p+a5),3)
l=B.a.j(n+2*(a4+o),3)
a6=B.a.j(m+a4,1)
k=B.a.j(l+p,1)
r=2*q
j=r-1
i=J.c(a7.a,a7.d+j)
h=a6&255
g=a6>>>16
f=j*4
e=A.o(b3,a0,f)
i=19077*i
d=i+26149*g+-3644112
if((d&-4194304)>>>0===0)c=B.a.j(d,14)
else c=d<0?0:255
J.w(e.a,e.d,c)
g=i-6419*h-13320*g+2229552
if((g&-4194304)>>>0===0)c=B.a.j(g,14)
else c=g<0?0:255
J.w(e.a,e.d+1,c)
i=i+33050*h+-4527440
if((i&-4194304)>>>0===0)c=B.a.j(i,14)
else c=i<0?0:255
J.w(e.a,e.d+2,c)
J.w(e.a,e.d+3,255)
i=J.c(a7.a,a7.d+r)
h=k&255
g=k>>>16
e=r*4
d=A.o(b3,a0,e)
i=19077*i
b=i+26149*g+-3644112
if((b&-4194304)>>>0===0)c=B.a.j(b,14)
else c=b<0?0:255
J.w(d.a,d.d,c)
g=i-6419*h-13320*g+2229552
if((g&-4194304)>>>0===0)c=B.a.j(g,14)
else c=g<0?0:255
J.w(d.a,d.d+1,c)
i=i+33050*h+-4527440
if((i&-4194304)>>>0===0)c=B.a.j(i,14)
else c=i<0?0:255
J.w(d.a,d.d+2,c)
J.w(d.a,d.d+3,255)
if(s){a6=B.a.j(l+a5,1)
k=B.a.j(m+o,1)
j=J.c(a8.a,a8.d+j)
i=a6&255
h=a6>>>16
b4.toString
f=A.o(b4,a0,f)
j=19077*j
g=j+26149*h+-3644112
if((g&-4194304)>>>0===0)c=B.a.j(g,14)
else c=g<0?0:255
J.w(f.a,f.d,c)
h=j-6419*i-13320*h+2229552
if((h&-4194304)>>>0===0)c=B.a.j(h,14)
else c=h<0?0:255
J.w(f.a,f.d+1,c)
j=j+33050*i+-4527440
if((j&-4194304)>>>0===0)c=B.a.j(j,14)
else c=j<0?0:255
J.w(f.a,f.d+2,c)
J.w(f.a,f.d+3,255)
r=J.c(a8.a,a8.d+r)
j=k&255
i=k>>>16
e=A.o(b4,a0,e)
r=19077*r
h=r+26149*i+-3644112
if((h&-4194304)>>>0===0)c=B.a.j(h,14)
else c=h<0?0:255
J.w(e.a,e.d,c)
i=r-6419*j-13320*i+2229552
if((i&-4194304)>>>0===0)c=B.a.j(i,14)
else c=i<0?0:255
J.w(e.a,e.d+1,c)
r=r+33050*j+-4527440
if((r&-4194304)>>>0===0)c=B.a.j(r,14)
else c=r<0?0:255
J.w(e.a,e.d+2,c)
J.w(e.a,e.d+3,255)}}if((b5&1)===0){a6=B.a.j(3*a4+a5+131074,2)
r=J.c(a7.a,a7.d+a2)
j=a2*4
i=A.o(b3,a0,j)
a.d0(r,a6&255,a6>>>16,i)
i.i(0,3,255)
if(s){a6=B.a.j(3*a5+a4+131074,2)
a2=J.c(a8.a,a8.d+a2)
b4.toString
j=A.o(b4,a0,j)
a.d0(a2,a6&255,a6>>>16,j)
j.i(0,3,255)}}},
hT(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.xr
if(j==null)return
s=A.o(j,null,0)
if(a===0){r=c-1
q=a}else{q=a-1
s.d=s.d-k.b.a
r=c}j=k.Q
p=k.as
if(j+a+c===p)r=p-j-q
for(j=k.b,o=0;o<r;++o){for(p=o+q,n=0;n<b;++n){m=J.c(s.a,s.d+n)
l=k.d.a
l=l==null?null:l.L(n,p,null);(l==null?new A.H():l).sv(m)}s.d=s.d+j.a}},
hU(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=J.Z(g.d.gB(0),0,null),d=g.b.a,c=A.q(e,!1,f,a*d*4),b=g.to
b===$&&A.d()
s=A.o(b,f,0)
b=g.x1
b===$&&A.d()
r=A.o(b,f,0)
b=g.x2
b===$&&A.d()
q=A.o(b,f,0)
p=a+a1
o=B.a.j(a0+1,1)
n=d*4
d=g.rx
d===$&&A.d()
m=A.o(d,f,0)
d=g.ry
d===$&&A.d()
l=A.o(d,f,0)
if(a===0){g.d_(s,f,r,q,r,q,c,f,a0)
k=a1}else{d=g.RG
d===$&&A.d()
g.d_(d,s,m,l,r,q,A.o(c,f,-n),c,a0)
k=a1+1}m.sB(0,r.a)
l.sB(0,q.a)
for(d=2*n,b=-n,j=a;j+=2,j<p;){m.d=r.d
l.d=q.d
i=r.d
h=g.R8
h.toString
r.d=i+h
q.d+=h
c.d+=d
h=s.d
i=g.p4
i.toString
s.d=h+2*i
g.d_(A.o(s,f,-i),s,m,l,r,q,A.o(c,f,b),c,a0)}d=s.d
b=g.p4
b.toString
s.d=d+b
if(g.Q+p<g.as){d=g.RG
d===$&&A.d()
d.bO(0,a0,s)
g.rx.bO(0,o,r)
g.ry.bO(0,o,q);--k}else if((p&1)===0)g.d_(s,f,r,q,r,q,A.o(c,f,n),f,a0)
return k},
hO(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.b,h=i.a,g=i.b
if(a<0||b<=0||a+b>g)return null
if(a===0){i=h*g
j.dJ=new Uint8Array(i)
s=j.dI
r=new A.jd(s,h,g)
q=s.E()
p=r.d=q&3
r.e=B.a.j(q,2)&3
r.f=B.a.j(q,4)&3
r.r=B.a.j(q,6)&3
if(r.gfg())if(p===0){if(s.c-s.d<i)r.r=1}else if(p===1){o=new A.dp(B.a0,A.j([],t.J))
o.a=h
o.b=g
i=A.j([],t.O)
p=A.j([],t.W)
n=new Uint32Array(2)
m=new A.hu(s,n)
n=m.e=J.Z(B.o.gB(n),0,null)
l=s.E()
n.$flags&2&&A.b(n)
if(0>=n.length)return A.a(n,0)
n[0]=l
l=s.E()
n.$flags&2&&A.b(n)
if(1>=n.length)return A.a(n,1)
n[1]=l
l=s.E()
n.$flags&2&&A.b(n)
if(2>=n.length)return A.a(n,2)
n[2]=l
l=s.E()
n.$flags&2&&A.b(n)
if(3>=n.length)return A.a(n,3)
n[3]=l
l=s.E()
n.$flags&2&&A.b(n)
if(4>=n.length)return A.a(n,4)
n[4]=l
l=s.E()
n.$flags&2&&A.b(n)
if(5>=n.length)return A.a(n,5)
n[5]=l
l=s.E()
n.$flags&2&&A.b(n)
if(6>=n.length)return A.a(n,6)
n[6]=l
s=s.E()
n.$flags&2&&A.b(n)
if(7>=n.length)return A.a(n,7)
n[7]=s
m.b=!1
p=new A.fL(m,o,i,p)
p.dy=h
p.fr=g
r.x=p
p.cc(h,g,!0)
i=r.x
s=i.ch
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
i=s[0].a===B.ca&&i.ie()}else i=!1
if(i){r.y=!0
i=r.x
s=i.c
k=s.a*s.b
i.db=0
s=B.a.a7(k,4)
s=new Uint8Array(k+(4-s))
i.cy=s
i.cx=J.ax(B.f.gB(s),0,null)}else{r.y=!1
r.x.e0(h)}}else r.r=1
j.fc=r}i=j.fc
if(i!=null)if(!i.w){s=j.dJ
s===$&&A.d()
if(!i.dG(a,b,s))return null}i=j.dJ
i===$&&A.d()
return A.q(i,!1,null,a*h)},
it(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr.b,a4=a2.dy,a5=a2.k1
a5===$&&A.d()
if(!(a5<4))return A.a(a4,a5)
s=a4[a5]
a5=a2.cl
a5===$&&A.d()
a4=a2.y1
if(!(a4<a5.length))return A.a(a5,a4)
r=a5[a4]
q=A.q(r.a,!1,null,0)
a4=a2.k3
a4===$&&A.d()
if(0>=a4.length)return A.a(a4,0)
p=a4[0]
q.jD(0,q.c-q.d,0)
a4=r.b
a4===$&&A.d()
if(!a4){o=A.q(new Int16Array(16),!1,null,0)
a4=a6.b
a5=p.b
if(1>=a3.length)return A.a(a3,1)
n=a2.dq(a7,a3[1],a4+a5,s.b,0,o)
a6.b=p.b=n>0?1:0
if(n>1)a2.j3(o,q)
else{m=B.a.j(J.c(o.a,o.d)+3,3)
for(l=0;l<256;l+=16)J.w(q.a,q.d+l,m)}k=a3[0]
j=1}else{if(3>=a3.length)return A.a(a3,3)
k=a3[3]
j=0}i=a6.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a2.dq(a7,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a4=J.c(q.a,q.d)!==0?1:0
if(n>3)a4=3
else if(n>1)a4=2
d=d<<2|a4
q.d+=16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}b=h>>>4
for(a4=a3.length,a=i,a0=0,a1=0;a1<4;a1+=2){a5=4+a1
i=B.a.a0(a6.a,a5)
h=B.a.a0(p.a,a5)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c){if(2>=a4)return A.a(a3,2)
n=a2.dq(a7,a3[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a5=J.c(q.a,q.d)!==0?1:0
if(n>3)a5=3
else if(n>1)a5=2
d=(d<<2|a5)>>>0
q.d+=16}i=i>>>2
h=h>>>1|e<<5}a0=(a0|B.a.O(d,4*a1))>>>0
a=(a|B.a.O(i<<4>>>0,a1))>>>0
b=(b|B.a.O(h&240,a1))>>>0}a6.a=a
p.a=b
r.e=g
r.f=a0
if((a0&43690)===0)s.toString
return(g|a0)>>>0===0},
j3(a,b){var s,r,q,p,o,n,m,l,k,j,i=new Int32Array(16)
for(s=0;s<4;++s){r=12+s
q=J.c(a.a,a.d+s)+J.c(a.a,a.d+r)
p=4+s
o=8+s
n=J.c(a.a,a.d+p)+J.c(a.a,a.d+o)
m=J.c(a.a,a.d+p)-J.c(a.a,a.d+o)
l=J.c(a.a,a.d+s)-J.c(a.a,a.d+r)
if(!(s<16))return A.a(i,s)
i[s]=q+n
if(!(o<16))return A.a(i,o)
i[o]=q-n
i[p]=l+m
if(!(r<16))return A.a(i,r)
i[r]=l-m}for(k=0,s=0;s<4;++s){r=s*4
if(!(r<16))return A.a(i,r)
j=i[r]+3
p=3+r
if(!(p<16))return A.a(i,p)
p=i[p]
q=j+p
o=1+r
if(!(o<16))return A.a(i,o)
o=i[o]
r=2+r
if(!(r<16))return A.a(i,r)
r=i[r]
n=o+r
m=o-r
l=j-p
p=B.a.j(q+n,3)
J.w(b.a,b.d+k,p)
p=B.a.j(l+m,3)
J.w(b.a,b.d+(k+16),p)
p=B.a.j(q-n,3)
J.w(b.a,b.d+(k+32),p)
p=B.a.j(l-m,3)
J.w(b.a,b.d+(k+48),p)
k+=64}},
i4(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.a6(b[3])===0)s=a.a6(b[4])===0?2:3+a.a6(b[5])
else if(a.a6(b[6])===0)s=a.a6(b[7])===0?5+a.a6(159):7+2*a.a6(165)+a.a6(145)
else{r=a.a6(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.a6(b[q])
if(!(p<4))return A.a(B.bb,p)
o=B.bb[p]
n=o.length
for(s=0,m=0;m<n;++m)s+=s+a.a6(o[m])
s+=3+B.a.O(8,p)}return s},
dq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.c7.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.a6(q[0])===0)return e
while(a.a6(q[1])===0){++e
if(!(e>=0&&e<17))return A.a(B.ad,e)
r=B.ad[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.ad,p)
r=B.ad[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.a6(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.i4(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.bw,e)
r=B.bw[e]
m=a.b
m===$&&A.d()
l=a.e3(B.a.j(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.aa,m)
k=B.aa[m]
a.b=B.bD[m]
m=a.d
m===$&&A.d()
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.w(f.a,f.d+r,m*j)}return 16},
ip(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.cl
d===$&&A.d()
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.d()
h=h.a6(145)===0
s.b=h
if(!h){if(i.c.a6(156)!==0)r=i.c.a6(128)!==0?1:3
else r=i.c.a6(163)!==0?2:0
h=s.c
h.$flags&2&&A.b(h)
h[0]=r
f.toString
B.f.aD(f,g,g+4,r)
B.f.aD(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.by,d)
d=B.by[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.a6(m[0])
if(!(l<18))return A.a(B.a8,l)
k=B.a8[l]
while(k>0){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.a6(m[k])
if(!(d>=0&&d<18))return A.a(B.a8,d)
k=B.a8[d]}r=-k
f.$flags&2&&A.b(f)
f[h]=r}j=p+4
f.toString
B.f.am(q,p,j,f,g)
e.$flags&2&&A.b(e)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.a6(142)===0)h=0
else if(i.c.a6(114)===0)h=2
else h=i.c.a6(183)!==0?1:3
s.d=h}}
A.jc.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:22}
A.eD.prototype={
Z(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.X(this.a6(128),r))>>>0
return s},
c9(a){var s=this.Z(a)
return this.Z(1)===1?-s:s},
a6(a){var s,r=this,q=r.b
q===$&&A.d()
s=r.e3(B.a.j(q*a,8))
if(r.b<=126)r.j1()
return s},
e3(a){var s,r,q,p,o,n=this,m=n.d
m===$&&A.d()
if(m<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.E()
m=n.c
m===$&&A.d()
n.c=(p|m<<8)>>>0
m=n.d+8
n.d=m
o=m}else{if(q<r){m=s.E()
s=n.c
s===$&&A.d()
n.c=(m|s<<8)>>>0
s=n.d+8
n.d=s
m=s}else if(!n.e){s=n.c
s===$&&A.d()
n.c=s<<8>>>0
m+=8
n.d=m
n.e=!0}o=m}}else o=m
m=n.c
m===$&&A.d()
if(B.a.bp(m,o)>a){s=n.b
s===$&&A.d()
r=a+1
n.b=s-r
n.c=m-B.a.X(r,o)
return 1}else{n.b=a
return 0}},
j1(){var s,r=this,q=r.b
q===$&&A.d()
if(!(q>=0&&q<128))return A.a(B.aa,q)
s=B.aa[q]
r.b=B.bD[q]
q=r.d
q===$&&A.d()
r.d=q-s}}
A.j1.prototype={
dR(a,b,c){var s,r=A.o(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.ez(r,b,c))this.cO(r,b)}},
dQ(a,b,c){var s,r=A.o(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.ez(r,1,c))this.cO(r,1)}},
fI(a,b,c){var s,r,q=A.o(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.dR(q,b,c)}},
fH(a,b,c){var s,r=A.o(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.dQ(r,b,c)}},
jY(a,b,c,d,e){var s,r,q=A.o(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.c3(q,b,1,16,c,d,e)}},
ju(a,b,c,d,e){var s,r=A.o(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.c3(r,1,b,16,c,d,e)}},
c4(a,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.o(a,null,0)
for(s=-3*a0,r=-2*a0,q=-a0,p=2*a0;o=a2-1,a2>0;a2=o){if(this.eA(b,a0,a3,a4))if(this.ew(b,a0,a5))this.cO(b,a0)
else{n=J.c(b.a,b.d+s)
m=J.c(b.a,b.d+r)
l=J.c(b.a,b.d+q)
k=J.c(b.a,b.d)
j=J.c(b.a,b.d+a0)
i=J.c(b.a,b.d+p)
h=$.kn()
g=1020+m-j
if(!(g>=0&&g<2041))return A.a(h,g)
g=1020+3*(k-l)+h[g]
if(!(g>=0&&g<2041))return A.a(h,g)
f=h[g]
g=B.a.j(27*f+63,7)
e=(g&2147483647)-((g&2147483648)>>>0)
g=B.a.j(18*f+63,7)
d=(g&2147483647)-((g&2147483648)>>>0)
g=B.a.j(9*f+63,7)
c=(g&2147483647)-((g&2147483648)>>>0)
g=$.aB()
h=255+n+c
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.w(b.a,b.d+s,h)
h=$.aB()
g=255+m+d
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.w(b.a,b.d+r,g)
g=$.aB()
h=255+l+e
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.w(b.a,b.d+q,h)
h=$.aB()
g=255+k-e
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.w(b.a,b.d,g)
g=$.aB()
h=255+j-d
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.w(b.a,b.d+a0,h)
h=$.aB()
g=255+i-c
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.w(b.a,b.d+p,g)}b.d+=a1}},
c3(a,b,c,d,e,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.o(a,null,0)
for(s=-2*b,r=-b;q=d-1,d>0;d=q){if(this.eA(f,b,e,a0))if(this.ew(f,b,a1))this.cO(f,b)
else{p=J.c(f.a,f.d+s)
o=J.c(f.a,f.d+r)
n=J.c(f.a,f.d)
m=J.c(f.a,f.d+b)
l=3*(n-o)
k=$.ko()
j=B.a.j(l+4,3)
j=112+((j&2147483647)-((j&2147483648)>>>0))
if(!(j>=0&&j<225))return A.a(k,j)
i=k[j]
j=B.a.j(l+3,3)
j=112+((j&2147483647)-((j&2147483648)>>>0))
if(!(j>=0&&j<225))return A.a(k,j)
h=k[j]
j=B.a.j(i+1,1)
g=(j&2147483647)-((j&2147483648)>>>0)
j=$.aB()
k=255+p+g
if(!(k>=0&&k<766))return A.a(j,k)
k=j[k]
J.w(f.a,f.d+s,k)
k=$.aB()
j=255+o+h
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.w(f.a,f.d+r,j)
j=$.aB()
k=255+n-i
if(!(k>=0&&k<766))return A.a(j,k)
k=j[k]
J.w(f.a,f.d,k)
k=$.aB()
j=255+m-g
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.w(f.a,f.d+b,j)}f.d+=c}},
cO(a,b){var s,r,q,p=J.c(a.a,a.d+-2*b),o=-b,n=J.c(a.a,a.d+o),m=J.c(a.a,a.d),l=J.c(a.a,a.d+b),k=$.kn(),j=1020+p-l
if(!(j>=0&&j<2041))return A.a(k,j)
s=3*(m-n)+k[j]
j=$.ko()
k=112+B.a.ar(B.a.j(s+4,3),32)
if(!(k>=0&&k<225))return A.a(j,k)
r=j[k]
k=112+B.a.ar(B.a.j(s+3,3),32)
if(!(k>=0&&k<225))return A.a(j,k)
q=j[k]
k=$.aB()
j=255+n+q
if(!(j>=0&&j<766))return A.a(k,j)
a.i(0,o,k[j])
j=$.aB()
k=255+m-r
if(!(k>=0&&k<766))return A.a(j,k)
a.i(0,0,j[k])},
ew(a,b,c){var s=J.c(a.a,a.d+-2*b),r=J.c(a.a,a.d+-b),q=J.c(a.a,a.d),p=J.c(a.a,a.d+b),o=$.hR(),n=255+s-r
if(!(n>=0&&n<511))return A.a(o,n)
if(o[n]<=c){n=255+p-q
if(!(n>=0&&n<511))return A.a(o,n)
n=o[n]>c
o=n}else o=!0
return o},
ez(a,b,c){var s,r=J.c(a.a,a.d+-2*b),q=J.c(a.a,a.d+-b),p=J.c(a.a,a.d),o=J.c(a.a,a.d+b),n=$.hR(),m=255+q-p
if(!(m>=0&&m<511))return A.a(n,m)
m=n[m]
n=$.km()
s=255+r-o
if(!(s>=0&&s<511))return A.a(n,s)
return 2*m+n[s]<=c},
eA(a,b,c,d){var s,r,q,p=J.c(a.a,a.d+-4*b),o=J.c(a.a,a.d+-3*b),n=J.c(a.a,a.d+-2*b),m=J.c(a.a,a.d+-b),l=J.c(a.a,a.d),k=J.c(a.a,a.d+b),j=J.c(a.a,a.d+2*b),i=J.c(a.a,a.d+3*b),h=$.hR(),g=255+m-l
if(!(g>=0&&g<511))return A.a(h,g)
g=h[g]
s=$.km()
r=255+n
q=r-k
if(!(q>=0&&q<511))return A.a(s,q)
if(2*g+s[q]>c)return!1
g=255+p-o
if(!(g>=0&&g<511))return A.a(h,g)
s=!1
if(h[g]<=d){g=255+o-n
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=r-m
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=255+i-j
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=255+j-k
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=255+k-l
if(!(g>=0&&g<511))return A.a(h,g)
g=h[g]<=d
h=g}else h=s}else h=s}else h=s}else h=s}else h=s
return h},
bv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new Int32Array(16)
for(s=0,r=0,q=0;q<4;++q){p=s+8
o=J.c(a.a,a.d+s)+J.c(a.a,a.d+p)
n=J.c(a.a,a.d+s)-J.c(a.a,a.d+p)
p=s+4
m=B.a.j(J.c(a.a,a.d+p)*35468,16)
l=s+12
k=B.a.j(J.c(a.a,a.d+l)*85627,16)
j=(m&2147483647)-((m&2147483648)>>>0)-((k&2147483647)-((k&2147483648)>>>0))
p=B.a.j(J.c(a.a,a.d+p)*85627,16)
l=B.a.j(J.c(a.a,a.d+l)*35468,16)
i=(p&2147483647)-((p&2147483648)>>>0)+((l&2147483647)-((l&2147483648)>>>0))
h=r+1
if(!(r<16))return A.a(e,r)
e[r]=o+i
r=h+1
if(!(h<16))return A.a(e,h)
e[h]=n+j
h=r+1
if(!(r<16))return A.a(e,r)
e[r]=n-j
r=h+1
if(!(h<16))return A.a(e,h)
e[h]=o-i;++s}for(g=0,r=0,q=0;q<4;++q){if(!(r<16))return A.a(e,r)
f=e[r]+4
p=r+8
if(!(p<16))return A.a(e,p)
p=e[p]
o=f+p
n=f-p
p=r+4
if(!(p<16))return A.a(e,p)
p=e[p]
m=B.a.j(p*35468,16)
l=r+12
if(!(l<16))return A.a(e,l)
l=e[l]
k=B.a.j(l*85627,16)
j=(m&2147483647)-((m&2147483648)>>>0)-((k&2147483647)-((k&2147483648)>>>0))
p=B.a.j(p*85627,16)
l=B.a.j(l*35468,16)
i=(p&2147483647)-((p&2147483648)>>>0)+((l&2147483647)-((l&2147483648)>>>0))
A.bM(b,g,0,0,o+i)
A.bM(b,g,1,0,n+j)
A.bM(b,g,2,0,n-j)
A.bM(b,g,3,0,o-i);++r
g+=32}},
jV(a,b,c){this.bv(a,b)
if(c)this.bv(A.o(a,null,16),A.o(b,null,4))},
cz(a,b){var s,r,q=J.c(a.a,a.d)+4
for(s=0;s<4;++s)for(r=0;r<4;++r)A.bM(b,0,r,s,q)},
fq(a,b){var s=this,r=null
if(J.c(a.a,a.d)!==0)s.cz(a,b)
if(J.c(a.a,a.d+16)!==0)s.cz(A.o(a,r,16),A.o(b,r,4))
if(J.c(a.a,a.d+32)!==0)s.cz(A.o(a,r,32),A.o(b,r,128))
if(J.c(a.a,a.d+48)!==0)s.cz(A.o(a,r,48),A.o(b,r,132))}}
A.j6.prototype={}
A.j9.prototype={}
A.jb.prototype={}
A.eC.prototype={}
A.ja.prototype={}
A.j2.prototype={}
A.bx.prototype={}
A.eF.prototype={}
A.hw.prototype={}
A.eG.prototype={}
A.eH.prototype={}
A.eE.prototype={
ck(){var s,r,q,p,o=this,n=o.b
if(n.ac(8)!==47)return!1
s=n.ac(14)+1
r=n.ac(14)+1
q=n.ac(1)
o.dy=s
o.fr=r
p=o.c
p.f=B.ak
p.a=s
p.b=r
p.d=q!==0
if(n.ac(3)!==0)return!1
return!0},
bC(){var s,r,q,p,o,n=this,m=null
n.f=0
if(!n.ck())return m
n.cc(n.dy,n.fr,!0)
n.e0(n.dy)
s=n.dy
n.d=A.O(m,m,B.e,0,B.i,n.fr,m,0,4,m,B.e,s,!1)
s=n.cx
s.toString
r=n.c
q=r.a
p=r.b
if(!n.df(s,q,p,p,n.giy()))return m
s=r.w
if(s.length!==0){o=A.q(new A.aR(s),!1,m,0)
s=n.d
s.toString
s.e=A.i4(o)}return n.d},
e0(a){var s,r=this,q=r.c
q=q.a*q.b+a
s=new Uint32Array(q+a*16)
r.cx=s
r.cy=J.Z(B.o.gB(s),0,null)
r.db=q
return!0},
iX(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.ac(2)
q=l.CW
p=B.a.O(1,r)
if((q&p)>>>0!==0)return!1
l.CW=(q|p)>>>0
o=new A.hv(B.c9)
B.c.M(l.ch,o)
if(!(r<4))return A.a(B.bI,r)
q=B.bI[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.ac(3)+2
o.e=s
o.d=l.cc(A.bN(o.b,s),A.bN(o.c,o.e),!1)
break
case 3:n=s.ac(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.c.i(a,0,A.bN(o.b,m))
o.e=m
o.d=l.cc(n,1,!1)
l.hX(n,o)
break
case 2:break}return!0},
cc(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c)for(s=k.b,r=t.t,q=b,p=a;s.ac(1)!==0;){o=A.j([p,q],r)
if(!k.iX(o))throw A.f(A.n("Invalid Transform"))
p=o[0]
q=o[1]}else{q=b
p=a}s=k.b
if(s.ac(1)!==0){n=s.ac(4)
if(!(n>=1&&n<=11))throw A.f(A.n("Invalid Color Cache"))}else n=0
if(!k.iK(p,q,n,c))throw A.f(A.n("Invalid Huffman Codes"))
if(n>0){s=B.a.O(1,n)
k.w=s
k.x=new A.j7(new Uint32Array(s),32-n)}else k.w=0
s=k.c
s.a=p
s.b=q
m=k.z
k.Q=A.bN(p,m)
k.y=m===0?4294967295:B.a.O(1,m)-1
if(c){k.f=0
return null}l=new Uint32Array(p*q)
if(!k.df(l,p,q,q,null))throw A.f(A.n("Failed to decode image data."))
k.f=0
return l},
df(b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
t.e7.a(b9)
s=b4.f
r=B.a.aA(s,b6)
q=B.a.a7(s,b6)
p=b4.ep(q,r)
o=b4.f
n=b6*b7
m=b6*b8
s=b4.w
l=280+s
k=s>0?b4.x:null
j=b4.y
for(s=b5.length,i=b4.b,h=b9!=null,g=b5.$flags|0,f=o;o<m;){if((q&j)>>>0===0){e=b4.ce(b4.as,b4.Q,b4.z,q,r)
d=b4.ax
if(!(e<d.length))return A.a(d,e)
p=d[e]}c=0
if(p.d){d=p.c
g&2&&A.b(b5)
if(!(o>=0&&o<s))return A.a(b5,o)
b5[o]=d;++o;++q
if(q>=b6){++r
if(h&&r<=b8)b9.$2(r,!0)
if(k!=null)for(d=k.b,b=k.a,a=b.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b5,f)
a0=b5[f]
a1=B.a.a1(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}q=c}continue}if(i.a>=32)i.bW()
if(p.e){a2=i.cr()&63
d=p.f
if(!(a2<d.length))return A.a(d,a2)
a3=d[a2]
d=a3.a
b=i.a
if(d<256){i.a=b+d
d=a3.b
g&2&&A.b(b5)
if(!(o>=0&&o<s))return A.a(b5,o)
b5[o]=d
a4=0}else{i.a=b+(d-256)
a4=a3.b}if(i.b)break
if(a4===0){++o;++q
if(q>=b6){++r
if(h&&r<=b8)b9.$2(r,!0)
if(k!=null)for(d=k.b,b=k.a,a=b.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b5,f)
a0=b5[f]
a1=B.a.a1(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}q=c}continue}}else a4=p.c0(0,i)
if(a4<256){if(p.b){d=p.c
g&2&&A.b(b5)
if(!(o>=0&&o<s))return A.a(b5,o)
b5[o]=(d|a4<<8)>>>0}else{a5=p.c0(1,i)
if(i.a>=32)i.bW()
a6=A.nd(p.c0(2,i),a4,a5,p.c0(3,i))
g&2&&A.b(b5)
if(!(o>=0&&o<s))return A.a(b5,o)
b5[o]=a6}++o;++q
if(q>=b6){++r
if(h&&r<=b8)b9.$2(r,!0)
if(k!=null)for(d=k.b,b=k.a,a=b.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b5,f)
a0=b5[f]
a1=B.a.a1(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}q=c}}else if(a4<280){a7=b4.cQ(a4-256)
a8=p.c0(4,i)
if(i.a>=32)i.bW()
a9=b4.eC(b6,b4.cQ(a8))
if(o<a9||n-o<a7)return!1
else{b0=o-a9
for(b1=0;b1<a7;++b1){d=o+b1
b=b0+b1
if(!(b>=0&&b<s))return A.a(b5,b)
b=b5[b]
g&2&&A.b(b5)
if(!(d>=0&&d<s))return A.a(b5,d)
b5[d]=b}}o+=a7
q+=a7
while(q>=b6){q-=b6;++r
if(h&&r<=b8)b9.$2(r,!0)}if((q&j)>>>0!==0){e=b4.ce(b4.as,b4.Q,b4.z,q,r)
d=b4.ax
if(!(e<d.length))return A.a(d,e)
p=d[e]}if(k!=null)for(d=k.b,b=k.a,a=b.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b5,f)
a0=b5[f]
a1=B.a.a1(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}}else if(a4<l){a1=a4-280
while(f<o){k.toString
if(!(f>=0&&f<s))return A.a(b5,f)
d=b5[f]
b2=B.a.a1(d*506832829>>>0,k.b)
b=k.a
b.$flags&2&&A.b(b)
if(!(b2<b.length))return A.a(b,b2)
b[b2]=d;++f}d=k.a
b=d.length
if(!(a1<b))return A.a(d,a1)
a=d[a1]
g&2&&A.b(b5)
if(!(o>=0&&o<s))return A.a(b5,o)
b5[o]=a;++o;++q
if(q>=b6){++r
if(h&&r<=b8)b9.$2(r,!0)
for(a=k.b,a0=d.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b5,f)
b3=b5[f]
a1=B.a.a1(b3*506832829>>>0,a)
a0&2&&A.b(d)
if(!(a1<b))return A.a(d,a1)
d[a1]=b3;++f}q=c}}else return!1}if(h)b9.$2(r>b8?b8:r,!1)
b4.f=o
return!0},
ie(){var s,r,q,p,o,n,m,l
if(this.w>0)return!1
for(s=this.at,r=this.ax,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
m=o[1]
l=m.a
m=m.b
if(!(m<l.length))return A.a(l,m)
if(l[m].a>0)return!1
if(2>=n)return A.a(o,2)
m=o[2]
l=m.a
m=m.b
if(!(m<l.length))return A.a(l,m)
if(l[m].a>0)return!1
if(3>=n)return A.a(o,3)
n=o[3]
m=n.a
n=n.b
if(!(n<m.length))return A.a(m,n)
if(m[n].a>0)return!1}return!0},
hY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b&&B.a.a7(a,16)!==0)return
s=g.r
r=a-s
q=g.dy
p=q*s
while(r>0){o=r>16?16:r
n=q*o
m=q*s
l=g.db
g.e1(s,o,p)
for(q=g.dx,k=g.cx,j=0;j<n;++j){q.toString
i=m+j
h=l+j
if(!(h<k.length))return A.a(k,h)
h=k[h]
q.$flags&2&&A.b(q)
if(!(i>=0&&i<q.length))return A.a(q,i)
q[i]=h>>>8&255}r-=o
q=g.dy
p+=o*q
s+=o}g.r=a},
hw(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=B.a.aA(h,a0),f=B.a.a7(h,a0),e=i.ep(f,g),d=i.f,c=a0*a1,b=a0*a2,a=i.y
h=i.b
for(;;){if(!(!h.b&&d<b))break
if((f&a)>>>0===0){s=i.ce(i.as,i.Q,i.z,f,g)
r=i.ax
if(!(s<r.length))return A.a(r,s)
e=r[s]}if(h.a>=32)h.bW()
q=e.c0(0,h)
if(q<256){r=i.cy
r===$&&A.d()
r.$flags&2&&A.b(r)
if(!(d>=0&&d<r.length))return A.a(r,d)
r[d]=q;++d;++f
if(f>=a0){++g
if(B.a.a7(g,16)===0)i.dl(g)
f=0}}else if(q<280){p=i.cQ(q-256)
o=e.c0(4,h)
if(h.a>=32)h.bW()
n=i.eC(a0,i.cQ(o))
if(d>=n&&c-d>=p)for(r=i.cy,m=0;m<p;++m){r===$&&A.d()
l=d+m
k=l-n
j=r.length
if(!(k>=0&&k<j))return A.a(r,k)
k=r[k]
r.$flags&2&&A.b(r)
if(!(l>=0&&l<j))return A.a(r,l)
r[l]=k}else{i.f=d
return!0}d+=p
f+=p
while(f>=a0){f-=a0;++g
if(B.a.a7(g,16)===0)i.dl(g)}if(d<b&&(f&a)>>>0!==0){s=i.ce(i.as,i.Q,i.z,f,g)
r=i.ax
if(!(s<r.length))return A.a(r,s)
e=r[s]}}else return!1}i.dl(g)
i.f=d
return!0},
dl(a){var s,r,q=this,p=q.r,o=a-p,n=q.cy
n===$&&A.d()
s=A.q(n,!1,null,q.c.a*p)
if(o>0){n=q.dx
n.toString
r=A.q(n,!1,null,q.dy*p)
n=q.ch
if(0>=n.length)return A.a(n,0)
n[0].jc(p,p+o,s,r)}q.r=a},
iz(a,b){var s,r,q,p,o,n,m=this,l=m.c.a,k=m.r
if(b)if(B.a.a7(a,16)!==0)return
s=a-k
if(s<=0){m.r=a
return}m.e1(k,s,l*k)
for(r=m.db,q=m.r,p=0;p<s;++p,++q)for(o=0;o<m.dy;++o,++r){l=m.cx
if(!(r>=0&&r<l.length))return A.a(l,r)
n=l[r]
l=m.d.a
if(l!=null)l.al(o,q,n>>>16&255,n>>>8&255,n&255,n>>>24&255)}m.r=a},
e1(a,b,c){var s,r=this,q=r.ch,p=q.length,o=r.c.a,n=a+b,m=r.db,l=r.cx
l.toString
B.o.am(l,m,m+o*b,l,c)
for(;s=p-1,p>0;p=s){if(!(s>=0&&s<q.length))return A.a(q,s)
o=q[s]
l=r.cx
l.toString
o.jB(a,n,l,m,l,m)}},
iK(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=1,c=null
if(a1&&e.b.ac(1)!==0){s=2+e.b.ac(3)
r=A.bN(a,s)
q=A.bN(b,s)
p=r*q
o=e.cc(r,q,!1)
if(o==null)return!1
e.z=s
for(n=o.length,m=o.$flags|0,l=d,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
j=o[k]>>>8&65535
m&2&&A.b(o)
o[k]=j
if(j>=l)l=j+1}if(l>1000||l>a*b){c=new Int32Array(1)
B.W.aD(c,0,1,255)
for(d=0,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
i=o[k]
if(!(i<1))return A.a(c,i)
if(c[i]===-1){h=d+1
c[i]=d
d=h}g=c[i]
m&2&&A.b(o)
o[k]=g}}else d=l}else{o=null
l=1}if(e.b.b)return!1
f=e.iL(a0,d,l,c)
if(f==null)return!1
e.as=o
e.at=d
e.ax=f
return!0},
dC(a,b,c,d,e,f){var s,r=a.a,q=a.b,p=d
do{p-=c
s=q+(b+p)
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
s.a=e
s.b=f}while(p>0)},
ii(a,b,c){var s=B.a.X(1,b-c)
while(b<15){s-=a[b]
if(s<=0)break;++b
s=s<<1>>>0}return b-c},
eu(a,b){var s=B.a.X(1,b-1)
while((a&s)>>>0!==0)s=s>>>1
return s!==0?((a&s-1)>>>0)+s:a},
e4(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.a.O(1,a6),a3=new Int32Array(16),a4=new Int32Array(16)
for(s=a7.length,r=0;r<a8;++r){if(!(r<s))return A.a(a7,r)
q=a7[r]
if(q>15)return 0
if(!(q>=0))return A.a(a3,q)
a3[q]=a3[q]+1}if(a3[0]===a8)return 0
a4[1]=0
for(p=1;p<15;p=o){q=a3[p]
if(q>B.a.O(1,p))return 0
o=p+1
a4[o]=a4[p]+q}for(q=a9!=null,r=0;r<a8;++r){if(!(r<s))return A.a(a7,r)
n=a7[r]
if(n>0)if(q){if(!(n<16))return A.a(a4,n)
m=a4[n]
if(m>=a8)return 0
a4[n]=m+1
a9.$flags&2&&A.b(a9)
if(!(m>=0&&m<a9.length))return A.a(a9,m)
a9[m]=r}else{if(!(n<16))return A.a(a4,n)
a4[n]=a4[n]+1}}if(a4[15]===1){if(q){a5.toString
if(0>=a9.length)return A.a(a9,0)
a1.dC(a5,0,1,a2,0,a9[0])}return a2}l=a2-1
for(s=a5==null,k=0,j=1,i=1,r=0,p=1,h=2;p<=a6;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
if(!(p<16))return A.a(a3,p)
i-=a3[p]
if(i<0)return 0
if(s)continue
for(g=p&255;a3[p]>0;a3[p]=a3[p]-1,r=f){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a1.dC(a5,k,h,a2,g,a9[r])
k=a1.eu(k,p)}}for(p=a6+1,s=!s,e=a2,d=0,c=4294967295,h=2;p<=15;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
i-=a3[p]
if(i<0)return 0
for(g=p-a6&255;a3[p]>0;a3[p]=a3[p]-1){b=(k&l)>>>0
if(b!==c){if(s)d+=e
a=a1.ii(a3,p,a6)
e=B.a.X(1,a)
a2+=e
if(s){q=a5.a
m=a5.b+b
if(!(m>=0&&m<q.length))return A.a(q,m)
m=q[m]
m.a=a+a6&255
m.b=d-b}c=b}if(s){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a0=a9[r]
a1.dC(a5,d+B.a.a0(k,a6),h,e,g,a0)
r=f}k=a1.eu(k,p)}}if(j!==2*a4[15]-1)return 0
return a2},
eU(a,b,c,d){var s,r,q,p,o,n,m=this.e4(null,b,c,d,null)
if(m===0||a==null)return m
s=a.b
r=s.d
q=s.e
if(r+m>=q){p=new A.dQ()
if(m>q)q=m
o=A.ky(q)
p.e=q
p.b=p.a=o
a.b=p
s=p}n=new Uint16Array(d)
this.e4(s.b,b,c,d,n)
return m},
iJ(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new A.ft(new A.dQ())
c.dX(128)
if(this.eU(c,7,a,19)===0)return!1
s=this.b
if(s.ac(1)!==0){r=2+s.ac(2+2*s.ac(3))
if(r>b)return!1}else r=b
for(q=8,p=0;p<b;r=o){o=r-1
if(r===0)break
if(s.a>=32)s.bW()
n=c.b.a
n.toString
m=n.a
n=n.b+(s.cr()&127)
if(!(n<m.length))return A.a(m,n)
l=m[n]
s.a=s.a+l.a
k=l.b
if(k<16){j=p+1
a0.$flags&2&&A.b(a0)
if(!(p>=0&&p<a0.length))return A.a(a0,p)
a0[p]=k
if(k!==0)q=k
p=j}else{i=k-16
if(!(i<3))return A.a(B.b7,i)
h=B.b7[i]
g=B.dx[i]
f=s.ac(h)+g
if(p+f>b)return!1
e=k===16?q:0
for(n=a0.$flags|0;d=f-1,f>0;f=d,p=j){j=p+1
n&2&&A.b(a0)
if(!(p>=0&&p<a0.length))return A.a(a0,p)
a0[p]=e}}}return!0},
eH(a,b,c){var s,r,q,p,o,n,m,l=this.b,k=l.ac(1)
B.W.aD(b,0,a,0)
if(k!==0){s=l.ac(1)
r=l.ac(l.ac(1)===0?1:8)
b.$flags&2&&A.b(b)
q=b.length
if(!(r<q))return A.a(b,r)
b[r]=1
if(s+1===2){r=l.ac(8)
if(!(r<q))return A.a(b,r)
b[r]=1}p=!0}else{o=new Int32Array(19)
n=l.ac(4)+4
for(m=0;m<n;++m){if(!(m<19))return A.a(B.bu,m)
s=B.bu[m]
q=l.ac(3)
if(!(s<19))return A.a(o,s)
o[s]=q}p=this.iJ(o,a,b)}return p&&!l.b?this.eU(c,8,b,a):0},
cH(a,b,c){var s=c.a,r=a.a
c.a=s+r
c.b=(c.b|B.a.O(a.b,b))>>>0
return r},
he(a){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=a.a,r=s.length,q=a.f,p=q.length,o=0;o<64;++o){if(!(o<p))return A.a(q,o)
n=q[o]
if(0>=r)return A.a(s,0)
m=s[0]
l=m.a
m=m.b+o
if(!(m<l.length))return A.a(l,m)
k=l[m]
m=k.b
if(m>=256){n.a=k.a+256
n.b=m}else{n.b=n.a=0
j=B.a.a0(o,i.cH(k,8,n))
if(1>=r)return A.a(s,1)
m=s[1]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.a0(j,i.cH(l[m],16,n))
if(2>=r)return A.a(s,2)
m=s[2]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.a0(j,i.cH(l[m],0,n))
if(3>=r)return A.a(s,3)
m=s[3]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
B.a.a0(j,i.cH(l[m],24,n))}}},
iL(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a9>0,a8=280+(a7?B.a.O(1,a9):0)
if(!(a9<12))return A.a(B.bg,a9)
s=B.bg[a9]
r=b2==null
if(r&&b0!==b1)return a6
q=new Int32Array(a8)
p=J.ai(b0,t.ct)
for(o=0;o<b0;++o)p[o]=A.o9()
n=new A.ft(new A.dQ())
n.dX(b0*s)
a5.ay=n
for(n=!r,m=0;m<b1;++m){if(n){if(!(m<b2.length))return A.a(b2,m)
l=b2[m]===-1}else l=!1
if(l)for(k=0;k<5;++k){j=B.bi[k]
if(a5.eH(k===0&&a7?j+B.a.O(1,a9):j,q,a6)===0)return a6}else{if(r)l=m
else{if(!(m<b2.length))return A.a(b2,m)
l=b2[m]}if(!(l>=0&&l<b0))return A.a(p,l)
i=p[l]
h=i.a
for(l=h.length,g=0,f=!0,e=0,k=0;k<5;++k){j=B.bi[k]
if(k===0&&a7)j+=B.a.O(1,a9)
d=a5.eH(j,q,a5.ay)
c=a5.ay.b.b
c.toString
B.c.i(h,k,c)
if(d===0)return a6
if(f&&B.hk[k]===1){if(!(k<l))return A.a(h,k)
c=h[k]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
f=b[c].a===0}if(!(k<l))return A.a(h,k)
c=h[k]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
e+=b[c].a
c=a5.ay.b
c.d+=d
b=c.b
c.b=new A.dP(b.a,b.b+d)
if(k<=3){a=q[0]
for(a0=1;a0<j;++a0){if(!(a0<a8))return A.a(q,a0)
a1=q[a0]
if(a1>a)a=a1}g+=a}}i.b=f
i.d=!1
c=!1
if(f){if(1>=l)return A.a(h,1)
b=h[1]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
a3=a2[b].b
if(2>=l)return A.a(h,2)
b=h[2]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
a4=a2[b].b
if(3>=l)return A.a(h,3)
l=h[3]
b=l.a
l=l.b
if(!(l<b.length))return A.a(b,l)
l=(b[l].b<<24|a3<<16|a4)>>>0
i.c=l
if(e===0){c=h[0]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
c=b[c].b<24}if(c){i.d=!0
b=h[0]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
i.c=(l|a2[b].b<<8)>>>0}l=c}else l=c
l=!l&&g<6
i.e=l
if(l)a5.he(i)}}return p},
cQ(a){var s
if(a<4)return a+1
s=B.a.j(a-2,1)
return B.a.O(2+(a&1),s)+this.b.ac(s)+1},
eC(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.bj,s)
r=B.bj[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
hX(a,b){var s,r,q,p,o,n,m,l,k=B.a.O(1,B.a.a0(8,b.e)),j=new Uint32Array(k),i=b.d
i.toString
s=J.Z(B.o.gB(i),0,null)
r=J.Z(B.o.gB(j),0,null)
i=b.d
if(0>=i.length)return A.a(i,0)
i=i[0]
if(0>=k)return A.a(j,0)
j[0]=i
q=4*a
for(i=s.length,p=r.length,o=r.$flags|0,n=4;n<q;++n){if(!(n<i))return A.a(s,n)
m=s[n]
l=n-4
if(!(l<p))return A.a(r,l)
l=r[l]
o&2&&A.b(r)
if(!(n<p))return A.a(r,n)
r[n]=m+l&255}for(q=4*k;n<q;++n){o&2&&A.b(r)
if(!(n<p))return A.a(r,n)
r[n]=0}b.d=j
return!0},
ce(a,b,c,d,e){var s
if(c===0||a==null)return 0
s=b*B.a.j(e,c)+B.a.j(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
ep(a,b){var s=this,r=s.ce(s.as,s.Q,s.z,a,b),q=s.ax
if(!(r<q.length))return A.a(q,r)
return q[r]}}
A.fL.prototype={
js(a,b){return this.hY(a,b)}}
A.hu.prototype={
cr(){var s,r,q,p=this.a
if(p<32){s=this.d
r=B.a.a1(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.V,p)
q=r+((s&B.V[p])>>>0)*(B.V[32-p]+1)}else{s=this.d
q=p===32?s[1]:B.a.a1(s[1],p-32)}return q},
ac(a){var s,r,q=this
if(!q.b&&a<25){s=q.cr()
if(!(a<33))return A.a(B.V,a)
r=B.V[a]
q.a+=a
q.bW()
return(s&r)>>>0}else{q.b=!0
throw A.f(A.n("Not enough data in input."))}},
bW(){var s,r,q,p=this,o=p.c,n=p.d,m=n.$flags|0,l=o.c
for(;;){if(!(p.a>=8&&o.d<l))break
s=J.c(o.a,o.d++)
r=n[0]
q=n[1]
m&2&&A.b(n)
n[0]=(r>>>8)+(q&255)*16777216
n[1]=q>>>8
n[1]=(n[1]|s*16777216)>>>0
p.a-=8}}}
A.j7.prototype={}
A.cs.prototype={
ae(){return"VP8LImageTransformType."+this.b}}
A.hv.prototype={
jB(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.j7(e,f,(b-a)*n)
break
case 0:o.jE(a,b,c,d,e,f)
if(b!==o.c){s=f-n
B.o.am(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.jd(a,b,c,d,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.bN(n,o.e)
p=f+r*n-q
B.o.am(e,p,p+q,c,f)
o.f6(a,b,c,p,e,f)}else o.f6(a,b,c,d,e,f)
break}},
jc(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.a0(8,m),k=this.b,j=this.d
if(l<8){s=B.a.O(1,m)-1
r=B.a.O(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){p=J.c(c.a,c.d);++c.d}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.w(d.a,d.d,m>>>8&255);++d.d
p=B.a.j(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){n=J.c(c.a,c.d);++c.d
if(!(n>=0&&n<j.length))return A.a(j,n)
m=j[n]
J.w(d.a,d.d,m>>>8&255);++d.d}},
f6(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.a0(8,j),h=this.b,g=this.d
if(i<8){s=B.a.O(1,j)-1
r=B.a.O(1,i)-1
for(j=e.$flags|0,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
j&2&&A.b(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k
o=B.a.a0(o,i)}}else for(j=c.length,q=e.$flags|0,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
q&2&&A.b(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k}},
jd(a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.b,a1=a.e,a2=B.a.O(1,a1)-1,a3=A.bN(a0,a1),a4=B.a.j(a5,a.e)*a3
for(a1=a7.length,s=a9.$flags|0,r=a5;r<a6;){q=new Uint8Array(3)
for(p=a4,o=0;o<a0;++o){if((o&a2)>>>0===0){n=a.d
m=p+1
if(!(p<n.length))return A.a(n,p)
n=n[p]
q[0]=n&255
q[1]=n>>>8&255
q[2]=n>>>16&255
p=m}n=b0+o
l=a8+o
if(!(l<a1))return A.a(a7,l)
l=a7[l]
k=l>>>8&255
j=q[0]
i=$.am()
i.$flags&2&&A.b(i)
i[0]=j
j=$.aw()
if(0>=j.length)return A.a(j,0)
h=j[0]
i[0]=k
g=j[0]
f=$.hS()
f.$flags&2&&A.b(f)
f[0]=h*g
e=$.kp()
if(0>=e.length)return A.a(e,0)
d=(l>>>16&255)+(e[0]>>>5)>>>0&255
i[0]=q[1]
h=j[0]
i[0]=k
f[0]=h*j[0]
c=e[0]
i[0]=q[2]
h=j[0]
i[0]=d
f[0]=h*j[0]
b=e[0]
s&2&&A.b(a9)
if(!(n<a9.length))return A.a(a9,n)
a9[n]=(l&4278255360|d<<16|((l&255)+(c>>>5)>>>0)+(b>>>5)>>>0&255)>>>0}b0+=a0
a8+=a0;++r
if((r&a2)>>>0===0)a4+=a3}},
c2(a,b){return(((a&4278255360)>>>0)+((b&4278255360)>>>0)&4278255360|(a&16711935)+(b&16711935)&16711935)>>>0},
jE(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=4278190080,b0=a8.b
if(b1===0){s=b3.length
if(!(b4<s))return A.a(b3,b4)
r=a8.c2(b3[b4],a9)
b5.$flags&2&&A.b(b5)
q=b5.length
if(!(b6<q))return A.a(b5,b6)
b5[b6]=r
p=b4+1
o=b6+1
n=b0-1
m=b5[b6]
for(r=b5.$flags|0,l=0;l<n;++l){k=p+l
if(!(k<s))return A.a(b3,k)
m=a8.c2(b3[k],m)
k=o+l
r&2&&A.b(b5)
if(!(k<q))return A.a(b5,k)
b5[k]=m}b4+=b0
b6+=b0;++b1}s=a8.e
j=B.a.O(1,s)
i=j-1
h=A.bN(b0,s)
g=B.a.j(b1,a8.e)*h
for(s=b3.length,r=~i,q=b5.length,f=b1;f<b2;){k=b6-b0
if(!(k>=0&&k<q))return A.a(b5,k)
e=b5[k]
if(!(b4<s))return A.a(b3,b4)
k=a8.c2(b3[b4],e)
b5.$flags&2&&A.b(b5)
if(!(b6<q))return A.a(b5,b6)
b5[b6]=k
for(d=g,c=1;c<b0;c=a1,d=b){k=a8.d
b=d+1
if(!(d<k.length))return A.a(k,d)
a=k[d]>>>8&15
a0=$.pu[a]
a1=((c&r)>>>0)+j
if(a1>b0)a1=b0
a2=b4+c
k=b6+c
a3=k-b0
a4=a1-c
if(a===0)for(a5=b5.$flags|0,l=0;l<a4;++l){a6=k+l
a7=a2+l
if(!(a7>=0&&a7<s))return A.a(b3,a7)
a7=a8.c2(b3[a7],a9)
a5&2&&A.b(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=a7}else if(a===1){a5=k-1
if(!(a5>=0&&a5<q))return A.a(b5,a5)
m=b5[a5]
for(a5=b5.$flags|0,l=0;l<a4;++l){a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
m=a8.c2(b3[a6],m)
a6=k+l
a5&2&&A.b(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=m}}else for(l=0;l<a4;++l){a5=k+l
a6=a5-1
if(!(a6>=0&&a6<q))return A.a(b5,a6)
e=a0.$3(b5[a6],b5,a3+l)
a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
a6=a8.c2(b3[a6],e)
b5.$flags&2&&A.b(b5)
if(!(a5>=0&&a5<q))return A.a(b5,a5)
b5[a5]=a6}}b4+=b0
b6+=b0;++f
if((f&i)>>>0===0)g+=h}},
j7(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=a.$flags|0,q=0;q<c;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a[p]
n=o>>>8&255
r&2&&A.b(a)
a[p]=(o&4278255360|(o&16711935)+(n<<16|n)&16711935)>>>0}}}
A.jd.prototype={
gfg(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
dG(a,b,c){var s,r,q,p,o,n,m=this
if(!m.gfg())return!1
s=m.e
if(!(s<4))return A.a(B.bN,s)
r=B.bN[s]
if(m.d===0){s=m.b
q=a*s
p=m.a
B.f.am(c,q,b*s,p.a,p.d-p.b+q)}else{s=a+b
p=m.x
p===$&&A.d()
p.dx=c
o=p.c
if(m.y)s=p.hw(o.a,o.b,s)
else{n=p.cx
n.toString
p=p.df(n,o.a,o.b,s,t.d6.a(p.gjr()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,a,b,c)}if(m.f===1)if(!m.hR(c,m.b,m.c,a,b))return!1
if(a+b>=m.c)m.w=!0
return!0},
hR(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.eI.prototype={
h5(a,b){var s=this,r=a.E()
s.r=0
s.f=(r&1)!==0
s.w=a.d-a.b
s.x=b-16}}
A.fM.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.dP.prototype={
gu(a){return this.a.length-this.b}}
A.dO.prototype={
c0(a,b){var s,r,q,p,o,n=b.cr()&255,m=this.a
if(!(a<m.length))return A.a(m,a)
s=m[a]
r=s.a
q=s.b+n
if(!(q<r.length))return A.a(r,q)
p=r[q].a-8
if(p>0){b.a+=8
o=b.cr()
m=m[a]
s=m.a
r=m.b+n
if(!(r<s.length))return A.a(s,r)
n=n+s[r].b+((o&B.a.X(1,p)-1)>>>0)}else m=s
s=b.a
r=m.a
m=m.b+n
if(!(m>=0&&m<r.length))return A.a(r,m)
m=r[m]
b.a=s+m.a
return m.b}}
A.dQ.prototype={}
A.ft.prototype={
dX(a){var s=this.b=this.a,r=A.ky(a)
s.e=a
s.b=s.a=r}}
A.dn.prototype={
ae(){return"WebPFormat."+this.b}}
A.dp.prototype={$iI:1,
gS(){return this.a},
gJ(){return this.b}}
A.dZ.prototype={}
A.je.prototype={
bj(a){var s=A.q(t.L.a(a),!1,null,0)
this.b=s
if(!this.eo(s))return!1
return!0},
au(a){var s,r=this,q=null,p=A.q(t.L.a(a),!1,q,0)
r.b=p
if(!r.eo(p))return q
p=new A.dZ(B.a0,A.j([],t.J))
r.a=p
s=r.b
s.toString
if(!r.eV(s,p))return q
p=r.a
switch(p.f.a){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.l8(s,p).ck())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.l6(s,p).ck())return q
p=r.a
p.as=p.z.length
return p
case 0:throw A.f(A.n("Unknown format for WebP"))}},
ah(a){var s,r,q,p=this,o=p.b
if(o==null||p.a==null)return null
s=p.a
if(s.e){s=s.z
r=s.length
if(a>=r)return null
if(!(a<r))return A.a(s,a)
q=s[a]
s=q.x
s===$&&A.d()
r=q.w
r===$&&A.d()
return p.ed(o.bQ(s,r),a)}r=s.f
if(r===B.ak)return A.l8(o.bQ(s.ch,s.ay),s).bC()
else if(r===B.aK)return A.l6(o.bQ(s.ch,s.ay),s).bC()
return null},
aU(a,b){var s,r,q,p,o,n,m,l,k=this,j=null
if(k.au(t.L.a(a))==null)return j
s=k.a.e
if(!s)return k.ah(0)
for(r=j,q=r,p=0;s=k.a,p<s.as;++p){s=s.z
if(!(p<s.length))return A.a(s,p)
b=s[p]
o=k.ah(p)
if(o==null)continue
o.y=b.e
if(q==null||r==null){s=k.a
n=s.a
s=s.b
m=o.gc6()
l=o.a
l=l==null?j:l.gI()
if(l==null)l=B.e
q=A.O(j,j,l,o.y,B.i,s,j,0,m,j,B.e,n,!1)
r=q}else{r=A.bF(r,!1,!1)
s=b.f
s===$&&A.d()
if(s){s=r.a
if(s!=null)s.aN(0,j)}}A.jU(r,o,B.a1,j,j,b.a,b.b,j,j,j,j)
q.b1(r)}return q},
ed(a,b){var s,r,q,p=null,o=A.j([],t.J),n=new A.dZ(B.a0,o)
if(!this.eV(a,n))return p
s=n.f
if(s===B.a0)return p
n.as=this.a.as
if(n.e){s=o.length
if(b>=s)return p
r=o[b]
o=r.x
o===$&&A.d()
s=r.w
s===$&&A.d()
return this.ed(a.bQ(o,s),b)}else{q=a.bQ(n.ch,n.ay)
if(s===B.ak)return A.l8(q,n).bC()
else if(s===B.aK)return A.l6(q,n).bC()}return p},
eo(a){if(a.ad(4)!=="RIFF")return!1
a.k()
if(a.ad(4)!=="WEBP")return!1
return!0},
eV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=a.c,r=a.b;a.d<s;){q=a.ad(4)
p=a.k()
o=p+1>>>1<<1>>>0
n=a.d
m=n-r
switch(q){case"VP8X":if(!this.i5(a,b))return!1
break
case"VP8 ":b.ay=m
b.ch=p
b.f=B.aK
break
case"VP8L":b.ay=m
b.ch=p
b.f=B.ak
break
case"ALPH":b.toString
n=a.a
l=a.e
k=J.a1(n)
j=k.gu(n)
k=k.gu(n)
n=new A.af(n,0,Math.min(j,k),0,l)
b.at=n
n.d=a.d
a.d+=o
break
case"ANIM":b.f=B.kn
i=a.k()
n=new Uint8Array(4)
n[0]=i>>>8&255
n[1]=i>>>16&255
n[2]=i>>>24&255
n[3]=i&255
a.l()
break
case"ANMF":if(!this.i2(a,b,p))return!1
break
case"ICCP":b.toString
h=a.aj(p)
a.d=n+(h.c-h.d)
h.a2()
break
case"EXIF":b.toString
b.w=a.ad(p)
break
case"XMP ":b.toString
a.ad(p)
break
default:a.d=n+o
break}n=a.d
g=o-(n-r-m)
if(g>0)a.d=n+g}if(!b.d)b.d=b.at!=null
return b.f!==B.a0},
i5(a,b){var s,r,q,p,o=a.E()
if((o&192)!==0)return!1
s=B.a.j(o,4)
r=B.a.j(o,1)
if((o&1)!==0)return!1
if(a.bd()!==0)return!1
q=a.bd()
p=a.bd()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
i2(a,b,c){var s,r=a.bd(),q=a.bd()
a.bd()
a.bd()
s=new A.fM(r*2,q*2,a.bd())
s.h5(a,c)
if(s.r!==0)return!1
B.c.M(b.z,s)
return!0}}
A.fu.prototype={
ae(){return"IccProfileCompression."+this.b}}
A.cS.prototype={
jo(){var s,r=this
if(r.b===B.as)return r.c
s=B.C.bM(r.c)
r.c=s
r.b=B.as
return s}}
A.fq.prototype={
ae(){return"FrameType."+this.b}}
A.bk.prototype={
gaC(){var s=this.x
return s===$?this.x=A.j([],t.g):s},
h_(a,b,c,d){var s,r,q,p=this,o=a.gI(),n=a.gc6(),m=a.a
p.eb(d,b,o,n,m==null?null:m.gT())
o=a.b
if(o!=null)p.b=A.h0(o,t.N,t.v)
o=a.d
if(o!=null){n=t.N
p.d=A.h0(o,n,n)}B.c.M(p.gaC(),p)
if(!c){s=a.gaC().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.j([],o)
if(!(r<q.length))return A.a(q,r)
p.b1(A.fy(q[r],b,!1,d))}}},
fZ(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.b=A.h0(n,t.N,t.v)
n=a.d
if(n!=null){s=t.N
o.d=A.h0(n,s,s)}B.c.M(o.gaC(),o)
if(!b&&a.gaC().length>1){r=a.gaC().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$)p=a.x=A.j([],n)
if(!(q<p.length))return A.a(p,q)
o.b1(A.bF(p[q],!1,!1))}}},
b1(a){var s=this
if(a==null)a=A.bF(s,!0,!0)
a.z=s.gaC().length
if(s.gaC().length===0||B.c.gfi(s.gaC())!==a)B.c.M(s.gaC(),a)
return a},
d1(){return this.b1(null)},
eb(a,b,c,d,e){var s,r,q=this,p=null
switch(c.a){case 0:if(e==null){s=B.b.b2(a*d/8)
r=new A.d_($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b2(a/8)
r=new A.d_($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.b2(a*(d<<1>>>0)/8)
r=new A.d1($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b2(a/4)
r=new A.d1($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.b2(a*1.5):B.b.b2(a/2)
r=new A.d3($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b2(a/2)
r=new A.d3($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.lY(a,b,d)
else q.a=new A.d4(new Uint8Array(a*b),e,a,b,1)
break
case 4:s=a*b
if(e==null)q.a=new A.d0(new Uint16Array(s*d),p,a,b,d)
else q.a=new A.d0(new Uint16Array(s),e,a,b,1)
break
case 5:q.a=A.oc(a,b,d)
break
case 6:q.a=new A.dV(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.dT(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.dU(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=A.oa(a,b,d)
break
case 10:q.a=A.ob(a,b,d)
break
case 11:q.a=new A.dS(new Float64Array(a*b*4*d),a,b,d)
break}},
A(a){var s=this
return"Image("+s.gS()+", "+s.gJ()+", "+s.gI().b+", "+s.gc6()+")"},
gS(){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gJ(){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gI(){var s=this.a
s=s==null?null:s.gI()
return s==null?B.e:s},
gbD(){var s=this.e
return s==null?this.e=new A.bX(A.J(t.N,t.P)):s},
fD(a,b){var s=this,r=s.b;(r==null?s.b=A.J(t.N,t.v):r).i(0,a,b)
if(s.b.a===0)s.b=null},
gH(a){var s=this.a
return s.gH(s)},
gB(a){var s=this.a
s=s==null?null:s.gB(s)
if(s==null)s=B.f.gB(new Uint8Array(0))
return s},
gc6(){var s=this.a
s=s==null?null:s.gT()
s=s==null?null:s.b
if(s==null){s=this.a
s=s==null?null:s.c}return s==null?0:s},
gcm(){var s=this.a
return(s==null?null:s.gT())!=null},
fe(a,b){return a>=0&&b>=0&&a<this.gS()&&b<this.gJ()},
aM(a,b,c,d){var s=this.a
s=s==null?null:s.aM(a,b,c,d)
if(s==null)s=new A.bC(new Uint8Array(0))
return s},
L(a,b,c){var s
A.v(a)
A.v(b)
s=this.a
s=s==null?null:s.L(a,b,c)
return s==null?new A.H():s},
aJ(a,b){return this.L(a,b,null)},
ak(a,b){if(a<0||a>=this.gS()||b<0||b>=this.gJ())return new A.H()
return this.L(a,b,null)},
fw(a,b,c){switch(c.a){case 0:return this.ak(B.b.h(a),B.b.h(b))
case 1:case 3:return this.fz(a,b)
case 2:return this.fv(a,b)}},
fz(a,b){var s,r,q,p,o,n,m=this,l=B.b.h(a),k=l-(a>=0?0:1),j=k+1
l=B.b.h(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.ii(a-k,b-s)
q=m.ak(k,s)
p=r>=m.gJ()?q:m.ak(k,r)
o=j>=m.gS()?q:m.ak(j,s)
n=j>=m.gS()||r>=m.gJ()?q:m.ak(j,r)
return m.aM(l.$4(q.gn(),o.gn(),p.gn(),n.gn()),l.$4(q.gq(),o.gq(),p.gq(),n.gq()),l.$4(q.gt(),o.gt(),p.gt(),n.gt()),l.$4(q.gv(),o.gv(),p.gv(),n.gv()))},
fv(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=this,c7=B.b.h(d2),c8=c7-(d2>=0?0:1),c9=c8-1,d0=c8+1,d1=c8+2
c7=B.b.h(d3)
s=c7-(d3>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d2-c8
n=d3-s
c7=new A.ih()
m=c6.ak(c8,s)
l=c9<0
k=!l
j=!k||r<0?m:c6.ak(c9,r)
i=l?m:c6.ak(c8,r)
h=r<0
g=h||d0>=c6.gS()?m:c6.ak(d0,r)
f=d1>=c6.gS()||h?m:c6.ak(d1,r)
e=c7.$5(o,j.gn(),i.gn(),g.gn(),f.gn())
d=c7.$5(o,j.gq(),i.gq(),g.gq(),f.gq())
c=c7.$5(o,j.gt(),i.gt(),g.gt(),f.gt())
b=c7.$5(o,j.gv(),i.gv(),g.gv(),f.gv())
a=l?m:c6.ak(c9,s)
a0=d0>=c6.gS()?m:c6.ak(d0,s)
a1=d1>=c6.gS()?m:c6.ak(d1,s)
a2=c7.$5(o,a.gn(),m.gn(),a0.gn(),a1.gn())
a3=c7.$5(o,a.gq(),m.gq(),a0.gq(),a1.gq())
a4=c7.$5(o,a.gt(),m.gt(),a0.gt(),a1.gt())
a5=c7.$5(o,a.gv(),m.gv(),a0.gv(),a1.gv())
a6=!k||q>=c6.gJ()?m:c6.ak(c9,q)
a7=q>=c6.gJ()?m:c6.ak(c8,q)
a8=d0>=c6.gS()||q>=c6.gJ()?m:c6.ak(d0,q)
a9=d1>=c6.gS()||q>=c6.gJ()?m:c6.ak(d1,q)
b0=c7.$5(o,a6.gn(),a7.gn(),a8.gn(),a9.gn())
b1=c7.$5(o,a6.gq(),a7.gq(),a8.gq(),a9.gq())
b2=c7.$5(o,a6.gt(),a7.gt(),a8.gt(),a9.gt())
b3=c7.$5(o,a6.gv(),a7.gv(),a8.gv(),a9.gv())
b4=!k||p>=c6.gJ()?m:c6.ak(c9,p)
b5=p>=c6.gJ()?m:c6.ak(c8,p)
b6=d0>=c6.gS()||p>=c6.gJ()?m:c6.ak(d0,p)
b7=d1>=c6.gS()||p>=c6.gJ()?m:c6.ak(d1,p)
b8=c7.$5(o,b4.gn(),b5.gn(),b6.gn(),b7.gn())
b9=c7.$5(o,b4.gq(),b5.gq(),b6.gq(),b7.gq())
c0=c7.$5(o,b4.gt(),b5.gt(),b6.gt(),b7.gt())
c1=c7.$5(o,b4.gv(),b5.gv(),b6.gv(),b7.gv())
c2=c7.$5(n,e,a2,b0,b8)
c3=c7.$5(n,d,a3,b1,b9)
c4=c7.$5(n,c,a4,b2,c0)
c5=c7.$5(n,b,a5,b3,c1)
return c6.aM(B.b.h(c2),B.b.h(c3),B.b.h(c4),B.b.h(c5))},
bP(a,b,c){var s
if(t.dv.b(c))if(c.gb4().gT()!=null)if(this.gcm()){s=this.a
if(s!=null)s.a3(a,b,c.gN(),0,0)
return}s=this.a
if(s!=null)s.al(a,b,c.gn(),c.gq(),c.gt(),c.gv())},
a3(a,b,c,d,e){var s=this.a
return s==null?null:s.a3(a,b,c,d,e)},
gD(){var s=this.a
s=s==null?null:s.gD()
return s==null?0:s},
aN(a,b){var s=this.a
return s==null?null:s.aN(0,b)},
d4(a){return this.aN(0,null)},
f8(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a4.gI(),a7=B.bS.m(0,a6)
a7=a7
s=!1
if(a6===a4.gI())if(a8===a4.gc6()){r=a4.a
s=(r==null?a5:r.gT())==null}if(s){q=A.bF(a4,!1,!1)
return q}for(s=a4.gaC(),r=s.length,p=t.N,o=t.p,n=a5,m=0;m<s.length;s.length===r||(0,A.ab)(s),++m,n=e){l=s[m]
k=l.a
j=k==null
i=j?a5:k.a
if(i==null)i=0
k=j?a5:k.b
if(k==null)k=0
j=l.e
j=j==null?a5:A.dG(j)
h=l.c
if(h==null)h=a5
else{g=h.a
f=h.b
h=h.c
h=new A.cS(g,f,new Uint8Array(h.subarray(0,A.b2(0,a5,h.length))))}g=l.w
f=l.r
q=A.O(a5,j,a6,l.y,g,k,h,f,a8,a5,B.e,i,!1)
k=l.d
q.sjT(k!=null?A.h0(k,p,p):a5)
if(n!=null){n.b1(q)
e=n}else e=q
k=q.a
d=k==null?a5:k.gT()
k=q.a
k=k==null?a5:k.gT()
c=k==null?a5:k.gI()
if(c==null)c=a6
k=l.a
if(d!=null){b=A.J(o,o)
a=k==null?a5:k.L(0,0,a5)
if(a==null)a=new A.H()
for(k=q.a,k=k.gH(k),a0=a5,a1=0;k.F();){a2=k.gP()
a3=A.nd(B.b.bN(a.gaa()*255),B.b.bN(a.ga5()*255),B.b.bN(a.ga9()*255),0)
if(b.af(a3)){j=b.m(0,a3)
j.toString
a2.sN(j)}else{b.i(0,a3,a1)
a2.sN(a1)
a0=A.aH(a,a7,c,a8,a0)
d.b7(a1,a0.gn(),a0.gq(),a0.gt());++a1}a.F()}}else{a=k==null?a5:k.L(0,0,a5)
if(a==null)a=new A.H()
for(k=q.a,k=k.gH(k);k.F();){A.aH(a,a7,a5,a5,k.gP())
a.F()}}}n.toString
return n},
j8(a){var s,r,q,p
t.ck.a(a)
if(this.d==null){s=t.N
this.d=A.J(s,s)}for(s=new A.R(a,a.r,a.e,A.l(a).p("R<1>"));s.F();){r=s.d
q=this.d
q.toString
p=a.m(0,r)
p.toString
q.i(0,r,p)}},
hq(a,b,c){var s,r=65536
switch(b.a){case 0:return null
case 1:return null
case 2:return null
case 3:s=a===B.l?r:256
return new A.aY(new Uint8Array(s*c),s,c)
case 4:s=a===B.l?r:256
return new A.em(new Uint16Array(s*c),s,c)
case 5:s=a===B.l?r:256
return new A.en(new Uint32Array(s*c),s,c)
case 6:s=a===B.l?r:256
return new A.el(new Int8Array(s*c),s,c)
case 7:s=a===B.l?r:256
return new A.ej(new Int16Array(s*c),s,c)
case 8:s=a===B.l?r:256
return new A.ek(new Int32Array(s*c),s,c)
case 9:s=a===B.l?r:256
return new A.eg(new Uint16Array(s*c),s,c)
case 10:s=a===B.l?r:256
return new A.eh(new Float32Array(s*c),s,c)
case 11:s=a===B.l?r:256
return new A.ei(new Float64Array(s*c),s,c)}},
sjT(a){this.d=t.cZ.a(a)}}
A.ii.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:24}
A.ih.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:25}
A.ae.prototype={
gT(){return null}}
A.cY.prototype={
ba(a){var s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.z(r))
return new A.cY(r,s.a,s.b,s.c)},
gI(){return B.D},
gB(a){return B.X.gB(this.d)},
gH(a){return A.kM(this)},
b6(a,b,c,d,e){return A.aZ(A.kM(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gD(){return 1},
aM(a,b,c,d){var s=new Uint16Array(4),r=new A.cE(s)
s[0]=A.K(a)
s[1]=A.K(b)
s[2]=A.K(c)
s[3]=A.K(d)
s=r
return s},
L(a,b,c){if(c==null||!(c instanceof A.cc)||c.d!==this)c=A.kM(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=A.K(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.K(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=A.K(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=A.K(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.K(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=A.K(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=A.K(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=A.K(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
A(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.cZ.prototype={
ba(a){var s=this,r=s.d
if(a)r=new Float32Array(r.length)
else r=new Float32Array(A.z(r))
return new A.cZ(r,s.a,s.b,s.c)},
gI(){return B.I},
gB(a){return B.ah.gB(this.d)},
gH(a){return A.kN(this)},
b6(a,b,c,d,e){return A.aZ(A.kN(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gD(){return 1},
aM(a,b,c,d){var s=new Float32Array(4),r=new A.cF(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
L(a,b,c){if(c==null||!(c instanceof A.cd)||c.d!==this)c=A.kN(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){q=p+2
if(!(q<s))return A.a(o,q)
o[q]=e}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}}},
A(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.dS.prototype={
ba(a){var s=this,r=s.d
if(a)r=new Float64Array(r.length)
else r=new Float64Array(A.z(r))
return new A.dS(r,s.a,s.b,s.c)},
gI(){return B.L},
gB(a){return B.ai.gB(this.d)},
gu(a){return this.d.byteLength},
gH(a){return A.kO(this)},
b6(a,b,c,d,e){return A.aZ(A.kO(this),b,c,d,e)},
gD(){return 1},
aM(a,b,c,d){var s=new Float64Array(4),r=new A.cG(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
L(a,b,c){if(c==null||!(c instanceof A.ce)||c.d!==this)c=A.kO(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){q=p+2
if(!(q<s))return A.a(o,q)
o[q]=e}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}}},
A(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.dT.prototype={
ba(a){var s=this,r=s.d
if(a)r=new Int16Array(r.length)
else r=new Int16Array(A.z(r))
return new A.dT(r,s.a,s.b,s.c)},
gI(){return B.N},
gB(a){return B.aB.gB(this.d)},
gH(a){return A.kP(this)},
b6(a,b,c,d,e){return A.aZ(A.kP(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gD(){return 32767},
aM(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int16Array(4),n=new A.cH(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
L(a,b,c){if(c==null||!(c instanceof A.cf)||c.d!==this)c=A.kP(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.h(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.h(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
A(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.dU.prototype={
ba(a){var s=this,r=s.d
if(a)r=new Int32Array(r.length)
else r=new Int32Array(A.z(r))
return new A.dU(r,s.a,s.b,s.c)},
gI(){return B.O},
gB(a){return B.W.gB(this.d)},
gH(a){return A.kQ(this)},
b6(a,b,c,d,e){return A.aZ(A.kQ(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gD(){return 2147483647},
aM(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int32Array(4),n=new A.cI(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
L(a,b,c){if(c==null||!(c instanceof A.cg)||c.d!==this)c=A.kQ(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.h(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.h(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
A(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.dV.prototype={
ba(a){var s=this,r=s.d
if(a)r=new Int8Array(r.length)
else r=new Int8Array(A.z(r))
return new A.dV(r,s.a,s.b,s.c)},
gI(){return B.M},
gB(a){return B.aC.gB(this.d)},
gH(a){return A.kR(this)},
b6(a,b,c,d,e){return A.aZ(A.kR(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gD(){return 127},
aM(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int8Array(4),n=new A.cJ(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
L(a,b,c){if(c==null||!(c instanceof A.ch)||c.d!==this)c=A.kR(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.h(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.h(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
A(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.d_.prototype={
kc(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.lp()
this.d=s},
ba(a){var s,r=this,q=r.d
if(a){q===$&&A.d()
q=new Uint8Array(q.length)}else{q===$&&A.d()
q=new Uint8Array(A.z(q))}s=r.f
s=s==null?null:s.R()
return new A.d_(q,r.e,s,r.a,r.b,r.c)},
gI(){return B.w},
gu(a){var s=this.d
s===$&&A.d()
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?1:s},
gB(a){var s=this.d
s===$&&A.d()
return B.f.gB(s)},
gH(a){return A.eo(this)},
b6(a,b,c,d,e){return A.aZ(A.eo(this),b,c,d,e)},
aM(a,b,c,d){var s=new A.cL(4,0)
s.a8(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return s},
L(a,b,c){if(c==null||!(c instanceof A.ci)||c.f!==this)c=A.eo(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eo(r):s).a_(a,b)
r.r.ao(0,c)},
a3(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eo(r):s).a_(a,b)
r.r.an(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eo(r):s).a_(a,b)
r.r.a8(c,d,e,f)},
A(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gT(){return this.f}}
A.d0.prototype={
ba(a){var s,r=this,q=r.d
if(a)q=new Uint16Array(q.length)
else q=new Uint16Array(A.z(q))
s=r.e
s=s==null?null:s.R()
return new A.d0(q,s,r.a,r.b,r.c)},
gI(){return B.l},
gB(a){return B.X.gB(this.d)},
gD(){var s=this.e
s=s==null?null:s.gD()
return s==null?65535:s},
gH(a){return A.kS(this)},
b6(a,b,c,d,e){return A.aZ(A.kS(this),b,c,d,e)},
gu(a){return this.d.byteLength},
aM(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Uint16Array(4),n=new A.cM(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
L(a,b,c){if(c==null||!(c instanceof A.cj)||c.d!==this)c=A.kS(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.h(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.h(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
A(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gT(){return this.e}}
A.d1.prototype={
kd(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.lp()
this.d=s},
ba(a){var s,r=this,q=r.d
if(a){q===$&&A.d()
q=new Uint8Array(q.length)}else{q===$&&A.d()
q=new Uint8Array(A.z(q))}s=r.f
s=s==null?null:s.R()
return new A.d1(q,r.e,s,r.a,r.b,r.c)},
gI(){return B.A},
gB(a){var s=this.d
s===$&&A.d()
return B.f.gB(s)},
gH(a){return A.ep(this)},
b6(a,b,c,d,e){return A.aZ(A.ep(this),b,c,d,e)},
gu(a){var s=this.d
s===$&&A.d()
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?3:s},
aM(a,b,c,d){var s=new A.cN(4,0)
s.a8(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return s},
L(a,b,c){if(c==null||!(c instanceof A.ck)||c.f!==this)c=A.ep(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.ep(r):s).a_(a,b)
r.r.ap(0,c)},
a3(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.ep(r):s).a_(a,b)
r.r.an(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.ep(r):s).a_(a,b)
r.r.a8(c,d,e,f)},
A(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gT(){return this.f}}
A.d2.prototype={
ba(a){var s=this,r=s.d
if(a)r=new Uint32Array(r.length)
else r=new Uint32Array(A.z(r))
return new A.d2(r,s.a,s.b,s.c)},
gI(){return B.J},
gB(a){return B.o.gB(this.d)},
gD(){return 4294967295},
gH(a){return A.kT(this)},
b6(a,b,c,d,e){return A.aZ(A.kT(this),b,c,d,e)},
gu(a){return this.d.byteLength},
aM(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Uint32Array(4),n=new A.cO(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
L(a,b,c){if(c==null||!(c instanceof A.cl)||c.d!==this)c=A.kT(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.h(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.h(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
A(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){}}
A.d3.prototype={
ke(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.lp()
this.d=s},
ba(a){var s,r=this,q=r.d
if(a){q===$&&A.d()
q=new Uint8Array(q.length)}else{q===$&&A.d()
q=new Uint8Array(A.z(q))}s=r.f
s=s==null?null:s.R()
return new A.d3(q,r.e,s,r.a,r.b,r.c)},
gI(){return B.B},
gB(a){var s=this.d
s===$&&A.d()
return B.f.gB(s)},
gH(a){return A.eq(this)},
b6(a,b,c,d,e){return A.aZ(A.eq(this),b,c,d,e)},
gu(a){var s=this.d
s===$&&A.d()
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?15:s},
aM(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new A.cP(4,new Uint8Array(2))
o.a8(s,r,q,p)
s=o
return s},
L(a,b,c){if(c==null||!(c instanceof A.cm)||c.e!==this)c=A.eq(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eq(r):s).a_(a,b)
r.r.aq(0,c)},
a3(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eq(r):s).a_(a,b)
r.r.an(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eq(r):s).a_(a,b)
r.r.a8(c,d,e,f)},
A(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){},
gT(){return this.f}}
A.d4.prototype={
ba(a){var s,r=this,q=r.d
if(a)q=new Uint8Array(q.length)
else q=new Uint8Array(A.z(q))
s=r.e
s=s==null?null:s.R()
return new A.d4(q,s,r.a,r.b,r.c)},
gI(){return B.e},
gB(a){return B.f.gB(this.d)},
gH(a){return A.iE(this)},
b6(a,b,c,d,e){return A.aZ(A.iE(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gD(){var s=this.e
s=s==null?null:s.gD()
return s==null?255:s},
aM(a,b,c,d){var s=A.nS(B.b.h(B.b.K(a,0,255)),B.b.h(B.b.K(b,0,255)),B.b.h(B.b.K(c,0,255)),B.b.h(B.b.K(d,0,255)))
return s},
L(a,b,c){if(c==null||!(c instanceof A.cn)||c.d!==this)c=A.iE(this)
c.a_(a,b)
return c},
aJ(a,b){return this.L(a,b,null)},
aF(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a3(a,b,c,d,e){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.h(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
al(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.h(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
A(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
aN(a,b){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===1){k=l.d
B.f.aD(k,0,k.length,0)}else if(k===2){s=J.lx(B.f.gB(l.d),0,null)
B.X.aD(s,0,s.length,0)}else if(k===4){r=J.ax(B.f.gB(l.d),0,null)
B.o.aD(r,0,r.length,0)}else for(q=A.iE(l),k=q.d,p=k.c>0,k=k.d,o=k.$flags|0;q.F();){if(p){n=q.c
m=B.b.h(B.a.K(0,0,255))
o&2&&A.b(k)
if(!(n>=0&&n<k.length))return A.a(k,n)
k[n]=m}q.sq(0)
q.st(0)}},
gT(){return this.e}}
A.fN.prototype={
ae(){return"Interpolation."+this.b}}
A.aK.prototype={}
A.eg.prototype={
R(){return new A.eg(new Uint16Array(A.z(this.c)),this.a,this.b)},
gI(){return B.D},
gD(){return 1},
V(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=A.K(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b7(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=A.K(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=A.K(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=A.K(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.S()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s,r
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
return r[s]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.S()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.S()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.S()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.eh.prototype={
R(){return new A.eh(new Float32Array(A.z(this.c)),this.a,this.b)},
gI(){return B.I},
gD(){return 1},
V(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
b7(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
s.$flags&2&&A.b(s)
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.ei.prototype={
R(){return new A.ei(new Float64Array(A.z(this.c)),this.a,this.b)},
gI(){return B.L},
gD(){return 1},
V(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
b7(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
s.$flags&2&&A.b(s)
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.ej.prototype={
R(){return new A.ej(new Int16Array(A.z(this.c)),this.a,this.b)},
gI(){return B.N},
gD(){return 32767},
V(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b7(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.ek.prototype={
R(){return new A.ek(new Int32Array(A.z(this.c)),this.a,this.b)},
gI(){return B.O},
gD(){return 2147483647},
V(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b7(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.el.prototype={
R(){return new A.el(new Int8Array(A.z(this.c)),this.a,this.b)},
gI(){return B.M},
gD(){return 127},
V(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b7(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.em.prototype={
R(){return new A.em(new Uint16Array(A.z(this.c)),this.a,this.b)},
gI(){return B.l},
gD(){return 65535},
V(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b7(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.en.prototype={
R(){return new A.en(new Uint32Array(A.z(this.c)),this.a,this.b)},
gI(){return B.J},
gD(){return 4294967295},
V(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b7(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aR(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aQ(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aX(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.aY.prototype={
R(){return A.mg(this)},
gI(){return B.e},
gD(){return 255},
V(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b7(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
cF(a,b,c,d,e){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.a.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.a.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){r=a+2
p=B.a.h(d)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>3){o=a+3
r=B.a.h(e)
if(!(o<q))return A.a(s,o)
s[o]=r}}}},
aW(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aS(a){var s,r
a*=this.b
s=this.c
r=s.length
if(a>=r)return 0
if(!(a>=0))return A.a(s,a)
return s[a]},
aR(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aQ(a){var s,r,q=this.b
if(q<3)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+2
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aX(a){var s,r,q=this.b
if(q<4)return 255
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+3
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
bo(a,b){return this.V(a,0,b)},
bn(a,b){return this.V(a,1,b)},
bm(a,b){return this.V(a,2,b)},
bl(a,b){return this.V(a,3,b)}}
A.cc.prototype={
R(){var s=this
return new A.cc(s.a,s.b,s.c,s.d)},
gI(){return B.D},
gu(a){return this.d.c},
gT(){return null},
gD(){return 1},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=A.K(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.K(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=A.K(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=A.K(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.S()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q,p=this.d
if(p.c>3){s=this.gq()
p=p.d
r=this.c+3
q=A.K(s)
p.$flags&2&&A.b(p)
if(!(r>=0&&r<p.length))return A.a(p,r)
p[r]=q}},
gaa(){return this.gn()/1},
saa(a){this.sn(a)},
ga5(){return this.gq()/1},
sa5(a){this.sq(a)},
ga9(){return this.gt()/1},
sa9(a){this.st(a)},
gW(){return this.gv()/1},
sW(a){this.sv(a)},
gag(){return A.V(this)},
ab(a){var s=this
if(s.d.c>0){s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())}},
an(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.K(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.K(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){n=p.c+2
s=A.K(c)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.K(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.K(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){s=p.c+2
r=A.K(c)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>3){n=p.c+3
s=A.K(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cc){s=A.t(n,A.l(n).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.cd.prototype={
R(){var s=this
return new A.cd(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gD(){return 1},
gI(){return B.I},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gq(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gt(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=1
return r},
sv(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gaa(){return this.gn()/1},
saa(a){this.sn(a)},
ga5(){return this.gq()/1},
sa5(a){this.sq(a)},
ga9(){return this.gt()/1},
sa9(a){this.st(a)},
gW(){return this.gv()/1},
sW(a){this.sv(a)},
gag(){return A.V(this)},
ab(a){var s=this
s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())},
an(a,b,c){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.b(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){q=o+2
if(!(q<s))return A.a(p,q)
p[q]=c}}},
a8(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.b(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cd){s=A.t(n,A.l(n).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.ce.prototype={
R(){var s=this
return new A.ce(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gD(){return 1},
gI(){return B.L},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gq(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gt(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gaa(){return this.gn()/1},
saa(a){this.sn(a)},
ga5(){return this.gq()/1},
sa5(a){this.sq(a)},
ga9(){return this.gt()/1},
sa9(a){this.st(a)},
gW(){return this.gv()/1},
sW(a){this.sv(a)},
gag(){return A.V(this)},
ab(a){var s=this
s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())},
an(a,b,c){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.b(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){q=o+2
if(!(q<s))return A.a(p,q)
p[q]=c}}},
a8(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.b(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ce){s=A.t(n,A.l(n).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.cf.prototype={
R(){var s=this
return new A.cf(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gD(){return 32767},
gI(){return B.N},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gn()/32767},
saa(a){this.sn(a*32767)},
ga5(){return this.gq()/32767},
sa5(a){this.sq(a*32767)},
ga9(){return this.gt()/32767},
sa9(a){this.st(a*32767)},
gW(){return this.gv()/32767},
sW(a){this.sv(a*32767)},
gag(){return A.V(this)},
ab(a){var s=this
s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())},
an(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.h(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.h(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cf){s=A.t(n,A.l(n).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.cg.prototype={
R(){var s=this
return new A.cg(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gD(){return 2147483647},
gI(){return B.O},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gn()/2147483647},
saa(a){this.sn(a*2147483647)},
ga5(){return this.gq()/2147483647},
sa5(a){this.sq(a*2147483647)},
ga9(){return this.gt()/2147483647},
sa9(a){this.st(a*2147483647)},
gW(){return this.gv()/2147483647},
sW(a){this.sv(a*2147483647)},
gag(){return A.V(this)},
ab(a){var s=this
s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())},
an(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.h(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.h(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cg){s=A.t(n,A.l(n).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.ch.prototype={
R(){var s=this
return new A.ch(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gD(){return 127},
gI(){return B.M},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gn()/127},
saa(a){this.sn(a*127)},
ga5(){return this.gq()/127},
sa5(a){this.sq(a*127)},
ga9(){return this.gt()/127},
sa9(a){this.st(a*127)},
gW(){return this.gv()/127},
sW(a){this.sv(a*127)},
gag(){return A.V(this)},
ab(a){var s=this
s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())},
an(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.h(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.h(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ch){s=A.t(n,A.l(n).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.h4.prototype={
F(){var s=this,r=s.a
if(r.gaP()+1>s.d){r.a_(s.b,r.gaL()+1)
return r.gaL()<=s.e}return r.F()},
gP(){return this.a},
$iC:1}
A.ci.prototype={
R(){var s=this
return new A.ci(s.a,s.b,s.c,s.d,s.e,s.f)},
gu(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.f.f},
gD(){return this.f.gD()},
gI(){return B.w},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.f
r=b*s.e
q.e=r
s=a*s.c
q.c=r+B.a.j(s,3)
q.d=s&7},
gP(){return this},
F(){var s,r=this,q=++r.a,p=r.f
if(q===p.a){r.a=0
q=++r.b
r.d=0;++r.c
r.e=r.e+p.e
return q<p.b}s=p.c
if(p.f!=null||s===1){if(++r.d>7){r.d=0;++r.c}}else{q*=s
r.d=q&7
r.c=r.e+B.a.j(q,3)}q=r.c
p=p.d
p===$&&A.d()
return q<p.byteLength},
dv(a){var s,r,q=this.c,p=7-(this.d+a)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.d()
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.a1(s[q],p)&1},
aY(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dv(a):0
else s=r.aW(this.dv(0),a)
return s},
ao(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=7-(this.d+a)
if(r<0){++s
r+=8}q=m.d
q===$&&A.d()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.K(B.b.h(b),0,1)
if(!(r>=0&&r<8))return A.a(B.bn,r)
n=B.bn[r]
q=B.a.X(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
m(a,b){return this.aY(b)},
i(a,b,c){return this.ao(b,c)},
gN(){return this.dv(0)},
sN(a){this.ao(0,a)},
gn(){return this.aY(0)},
sn(a){this.ao(0,a)},
gq(){return this.aY(1)},
sq(a){this.ao(1,a)},
gt(){return this.aY(2)},
st(a){this.ao(2,a)},
gv(){return this.aY(3)},
sv(a){this.ao(3,a)},
gaa(){return this.aY(0)/this.f.gD()},
saa(a){this.ao(0,a*this.f.gD())},
ga5(){return this.aY(1)/this.f.gD()},
sa5(a){this.ao(1,a*this.f.gD())},
ga9(){return this.aY(2)/this.f.gD()},
sa9(a){this.ao(2,a*this.f.gD())},
gW(){return this.aY(3)/this.f.gD()},
sW(a){this.ao(3,a*this.f.gD())},
gag(){return A.V(this)},
ab(a){var s=this
s.ao(0,a.gn())
s.ao(1,a.gq())
s.ao(2,a.gt())
s.ao(3,a.gv())},
an(a,b,c){var s=this,r=s.f.c
if(r>0){s.ao(0,a)
if(r>1){s.ao(1,b)
if(r>2)s.ao(2,c)}}},
a8(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.ao(0,a)
if(r>1){s.ao(1,b)
if(r>2){s.ao(2,c)
if(r>3)s.ao(3,d)}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.ci){s=A.t(p,A.l(p).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.aY(0)!==s.m(b,0))return!1
if(q>1){if(p.aY(1)!==s.m(b,1))return!1
if(q>2){if(p.aY(2)!==s.m(b,2))return!1
if(q>3)if(p.aY(3)!==s.m(b,3))return!1}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.f}}
A.cj.prototype={
R(){var s=this
return new A.cj(s.a,s.b,s.c,s.d)},
gu(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.d.e},
gD(){return this.d.gD()},
gI(){return B.l},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bg(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aW(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
m(a,b){return this.bg(b)},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aS(r[s])
r=s}return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d,q=r.e
if(q==null)if(r.c>1){r=r.d
q=this.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aR(r[s])
r=s}return r},
sq(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d,q=r.e
if(q==null)if(r.c>2){r=r.d
q=this.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aQ(r[s])
r=s}return r},
st(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d,q=r.e
if(q==null)if(r.c>3){r=r.d
q=this.c+3
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aX(r[s])
r=s}return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gn()/this.d.gD()},
saa(a){this.sn(a*this.d.gD())},
ga5(){return this.gq()/this.d.gD()},
sa5(a){this.sq(a*this.d.gD())},
ga9(){return this.gt()/this.d.gD()},
sa9(a){this.st(a*this.d.gD())},
gW(){return this.gv()/this.d.gD()},
sW(a){this.sv(a*this.d.gD())},
gag(){return A.V(this)},
ab(a){var s=this
s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())},
an(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.h(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.h(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cj){s=A.t(p,A.l(p).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.bg(0)!==s.m(b,0))return!1
if(q>1){if(p.bg(1)!==s.m(b,1))return!1
if(q>2){if(p.bg(2)!==s.m(b,2))return!1
if(q>3)if(p.bg(3)!==s.m(b,3))return!1}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.ck.prototype={
R(){var s=this
return new A.ck(s.a,s.b,s.c,s.d,s.e,s.f)},
gu(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.f.f},
gD(){return this.f.gD()},
gI(){return B.A},
gf5(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.gf5()
r=b*p.f.e
p.e=r
q=a*s
p.c=r+B.a.j(q,3)
p.d=q&7},
gP(){return this},
F(){var s=this,r=++s.a,q=s.f
if(r===q.a){s.a=0
r=++s.b
s.d=0;++s.c
s.e=s.e+q.e
return r<q.b}if(q.f!=null||q.c===1){if((s.d+=2)>7){s.d=0;++s.c}}else{r*=s.gf5()
s.d=r&7
s.c=s.e+B.a.j(r,3)}r=s.c
q=q.d
q===$&&A.d()
return r<q.length},
dw(a){var s,r=this.c,q=6-(this.d+(a<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.d()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a1(s[r],q)&3},
aZ(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dw(a):0
else s=r.aW(this.dw(0),a)
return s},
ap(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=6-(this.d+(a<<1>>>0))
if(r<0){++s
r+=8}q=m.d
q===$&&A.d()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.K(B.b.h(b),0,3)
q=B.a.j(r,1)
if(!(q<4))return A.a(B.b4,q)
n=B.b4[q]
q=B.a.X(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
m(a,b){return this.aZ(b)},
i(a,b,c){return this.ap(b,c)},
gN(){return this.dw(0)},
sN(a){this.ap(0,a)},
gn(){return this.aZ(0)},
sn(a){this.ap(0,a)},
gq(){return this.aZ(1)},
sq(a){this.ap(1,a)},
gt(){return this.aZ(2)},
st(a){this.ap(2,a)},
gv(){return this.aZ(3)},
sv(a){this.ap(3,a)},
gaa(){return this.aZ(0)/this.f.gD()},
saa(a){this.ap(0,a*this.f.gD())},
ga5(){return this.aZ(1)/this.f.gD()},
sa5(a){this.ap(1,a*this.f.gD())},
ga9(){return this.aZ(2)/this.f.gD()},
sa9(a){this.ap(2,a*this.f.gD())},
gW(){return this.aZ(3)/this.f.gD()},
sW(a){this.ap(3,a*this.f.gD())},
gag(){return A.V(this)},
ab(a){var s=this
s.ap(0,a.gn())
s.ap(1,a.gq())
s.ap(2,a.gt())
s.ap(3,a.gv())},
an(a,b,c){var s=this,r=s.f.c
if(r>0){s.ap(0,a)
if(r>1){s.ap(1,b)
if(r>2)s.ap(2,c)}}},
a8(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.ap(0,a)
if(r>1){s.ap(1,b)
if(r>2){s.ap(2,c)
if(r>3)s.ap(3,d)}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.ck){s=A.t(p,A.l(p).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.aZ(0)!==s.m(b,0))return!1
if(q>1){if(p.aZ(1)!==s.m(b,1))return!1
if(q>2){if(p.aZ(2)!==s.m(b,2))return!1
if(q>3)if(p.aZ(3)!==s.m(b,3))return!1}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.f}}
A.cl.prototype={
R(){var s=this
return new A.cl(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gD(){return 4294967295},
gI(){return B.J},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
m(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gN(){return this.gn()},
sN(a){this.sn(a)},
gn(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gn()/4294967295},
saa(a){this.sn(a*4294967295)},
ga5(){return this.gq()/4294967295},
sa5(a){this.sq(a*4294967295)},
ga9(){return this.gt()/4294967295},
sa9(a){this.st(a*4294967295)},
gW(){return this.gv()/4294967295},
sW(a){this.sv(a*4294967295)},
gag(){return A.V(this)},
ab(a){var s=this
s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())},
an(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.h(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.h(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cl){s=A.t(n,A.l(n).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.m(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.m(b,3))return!1}}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.cm.prototype={
R(){var s=this
return new A.cm(s.a,s.b,s.c,s.d,s.e)},
gu(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.e.f},
gD(){return this.e.gD()},
gI(){return B.B},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.e
r=s.c*4
q=s.e
if(r===4)s=b*q+B.a.j(a,1)
else if(r===8)s=b*s.a+a
else{s=b*q
s=r===16?s+(a<<1>>>0):s+B.a.j(a*r,3)}p.c=s
s=a*r
p.d=r>7?s&4:s&7},
gP(){return this},
F(){var s,r,q,p=this,o=p.e
if(++p.a===o.a){p.a=0
s=++p.b
p.d=0
p.c=s*o.e
return s<o.b}r=o.c
s=o.f!=null||r===1
q=p.d
if(s){s=q+4
p.d=s
if(s>7){p.d=0;++p.c}}else{s=p.d=q+(r<<2>>>0)
while(s>7){s-=8
p.d=s;++p.c}}s=p.c
o=o.d
o===$&&A.d()
return s<o.length},
dn(a){var s,r=this.c,q=4-(this.d+(a<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.d()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a1(s[r],q)&15},
b_(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.dn(a):0
else s=r.aW(this.dn(0),a)
return s},
aq(a,b){var s,r,q,p,o,n,m=this.e
if(a>=m.c)return
s=this.c
r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}q=m.d
q===$&&A.d()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.K(B.b.h(b),0,15)
n=r===4?15:240
q=B.a.X(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
m(a,b){return this.b_(b)},
i(a,b,c){return this.aq(b,c)},
gN(){return this.dn(0)},
sN(a){this.aq(0,a)},
gn(){return this.b_(0)},
sn(a){this.aq(0,a)},
gq(){return this.b_(1)},
sq(a){this.aq(1,a)},
gt(){return this.b_(2)},
st(a){this.aq(2,a)},
gv(){return this.b_(3)},
sv(a){this.aq(3,a)},
gaa(){return this.b_(0)/this.e.gD()},
saa(a){this.aq(0,a*this.e.gD())},
ga5(){return this.b_(1)/this.e.gD()},
sa5(a){this.aq(1,a*this.e.gD())},
ga9(){return this.b_(2)/this.e.gD()},
sa9(a){this.aq(2,a*this.e.gD())},
gW(){return this.b_(3)/this.e.gD()},
sW(a){this.aq(3,a*this.e.gD())},
gag(){return A.V(this)},
ab(a){var s=this
s.aq(0,a.gn())
s.aq(1,a.gq())
s.aq(2,a.gt())
s.aq(3,a.gv())},
an(a,b,c){var s=this,r=s.e.c
if(r>0){s.aq(0,a)
if(r>1){s.aq(1,b)
if(r>2)s.aq(2,c)}}},
a8(a,b,c,d){var s=this,r=s.e.c
if(r>0){s.aq(0,a)
if(r>1){s.aq(1,b)
if(r>2){s.aq(2,c)
if(r>3)s.aq(3,d)}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cm){s=A.t(p,A.l(p).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){q=p.e.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.b_(0)!==s.m(b,0))return!1
if(q>1){if(p.b_(1)!==s.m(b,1))return!1
if(q>2){if(p.b_(2)!==s.m(b,2))return!1
if(q>3)if(p.b_(3)!==s.m(b,3))return!1}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.e}}
A.cn.prototype={
R(){var s=this
return new A.cn(s.a,s.b,s.c,s.d)},
gu(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.d.e},
gD(){return this.d.gD()},
gI(){return B.e},
gaP(){return this.a},
gaL(){return this.b},
a_(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gP(){return this},
F(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bg(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aW(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
m(a,b){return this.bg(b)},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(B.b.K(c,0,255))
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gN(){var s=this.d.d,r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
sN(a){var s=this.d.d,r=this.c,q=B.b.h(B.b.K(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q},
gn(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aS(r[s])
r=s}return r},
sn(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(B.b.K(a,0,255))
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>1){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aR(q[s])
q=s}return q},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(B.b.K(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(B.b.K(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gt(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>2){q=q.d
p=r.c+2
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aQ(q[s])
q=s}return q},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(B.b.K(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(B.b.K(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gv(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>3){q=q.d
p=r.c+3
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=255}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aX(q[s])
q=s}return q},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(B.b.K(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(B.b.K(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gaa(){return this.gn()/this.d.gD()},
saa(a){this.sn(a*this.d.gD())},
ga5(){return this.gq()/this.d.gD()},
sa5(a){this.sq(a*this.d.gD())},
ga9(){return this.gt()/this.d.gD()},
sa9(a){this.st(a*this.d.gD())},
gW(){return this.gv()/this.d.gD()},
sW(a){this.sv(a*this.d.gD())},
gag(){return this.d.c===2?this.gn():A.V(this)},
ab(a){var s=this
if(s.d.e!=null)s.sN(a.gN())
else{s.sn(a.gn())
s.sq(a.gq())
s.st(a.gt())
s.sv(a.gv())}},
an(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.h(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.h(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gH(a){return new A.N(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cn){s=A.t(p,A.l(p).p("e.E"))
s=A.m(s)
r=A.t(b,A.l(b).p("e.E"))
return s===A.m(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.bg(0)!==s.m(b,0))return!1
if(q>1){if(p.bg(1)!==s.m(b,1))return!1
if(q>2){if(p.bg(2)!==s.m(b,2))return!1
if(q>3)if(p.bg(3)!==s.m(b,3))return!1}}return!0}return!1},
gG(a){var s=A.t(this,A.l(this).p("e.E"))
return A.m(s)},
b3(a){return A.aH(this,null,a,null,null)},
$iC:1,
$ix:1,
$ir:1,
gb4(){return this.d}}
A.H.prototype={
R(){return new A.H()},
gb4(){return $.ni()},
gaP(){return 0},
gaL(){return 0},
gu(a){return 0},
gD(){return 0},
gI(){return B.e},
gT(){return null},
m(a,b){return 0},
i(a,b,c){},
gN(){return 0},
sN(a){},
gn(){return 0},
sn(a){},
gq(){return 0},
sq(a){},
gt(){return 0},
st(a){},
gv(){return 0},
sv(a){},
gaa(){return 0},
saa(a){},
ga5(){return 0},
sa5(a){},
ga9(){return 0},
sa9(a){},
gW(){return 0},
sW(a){},
gag(){return 0},
ab(a){},
an(a,b,c){},
a8(a,b,c,d){},
a_(a,b){},
gP(){return this},
F(){return!1},
U(a,b){if(b==null)return!1
return b instanceof A.H},
gG(a){return 0},
gH(a){return new A.N(this)},
b3(a){return this},
$iC:1,
$ix:1,
$ir:1}
A.i7.prototype={
ae(){return"FlipDirection."+this.b}}
A.ig.prototype={
A(a){return"ImageException: "+this.a}}
A.af.prototype={
gu(a){return this.c-this.d},
i(a,b,c){J.w(this.a,this.d+b,c)
return c},
bb(a,b,c,d){var s=this.a,r=J.ak(s),q=this.d+a
if(c instanceof A.af)r.am(s,q,q+b,c.a,c.d+d)
else r.am(s,q,q+b,t.L.a(c),d)},
bO(a,b,c){return this.bb(a,b,c,0)},
jD(a,b,c){var s=this.a,r=this.d+a
J.bd(s,r,r+b,c)},
dc(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.q(s.a,s.e,a,r+b)},
aj(a){return this.dc(a,0,null)},
bQ(a,b){return this.dc(a,0,b)},
cG(a,b){return this.dc(a,b,null)},
E(){return J.c(this.a,this.d++)},
ai(a){var s=this.aj(a)
this.d=this.d+(s.c-s.d)
return s},
ad(a){var s,r,q,p,o,n=this
if(a==null){s=A.j([],t.t)
for(r=n.c;q=n.d,q<r;){p=n.a
n.d=q+1
o=J.c(p,q)
if(o===0)return A.dj(s,0,null)
B.c.M(s,o)}throw A.f(A.n("EOF reached without finding string terminator (length: "+A.A(a)+")"))}return A.dj(n.ai(a).a2(),0,null)},
cs(){return this.ad(null)},
fl(a){var s,r,q,p,o=this,n=A.j([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.c(q,r)
B.c.M(n,p)
if(p===10||n.length>=a)return A.dj(n,0,null)}return A.dj(n,0,null)},
jL(){return this.fl(256)},
jM(){var s,r,q,p,o=this,n=A.j([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.c(q,r)
if(p===0){t.L.a(n)
return new A.hH(!0).ea(n,0,null,!0)}B.c.M(n,p)}return B.cw.jf(n,!0)},
l(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255
if(s.e)return r<<8|q
return q<<8|r},
bd(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255,p=J.c(s.a,s.d++)&255
if(s.e)return p|q<<8|r<<16
return r|q<<8|p<<16},
k(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255,p=J.c(s.a,s.d++)&255,o=J.c(s.a,s.d++)&255
if(s.e)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
d7(){return A.rv(this.dM())},
dM(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255,p=J.c(s.a,s.d++)&255,o=J.c(s.a,s.d++)&255,n=J.c(s.a,s.d++)&255,m=J.c(s.a,s.d++)&255,l=J.c(s.a,s.d++)&255,k=J.c(s.a,s.d++)&255
if(s.e)return(B.a.O(r,56)|B.a.O(q,48)|B.a.O(p,40)|B.a.O(o,32)|n<<24|m<<16|l<<8|k)>>>0
return(B.a.O(k,56)|B.a.O(l,48)|B.a.O(m,40)|B.a.O(n,32)|o<<24|p<<16|q<<8|r)>>>0},
cu(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.fp(b,c)
s=r.b+r.d+b
return J.ks(q,s,c<=0?r.c:s+c)},
fp(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return J.Z(B.f.gB(p),p.byteOffset+r.d+a,q)
s=r.d+a
s=J.ks(p,s,s+q)
return new Uint8Array(A.z(s))},
a2(){return this.fp(0,null)},
cw(){var s=this.a
if(t.D.b(s))return J.ax(B.f.gB(s),s.byteOffset+this.d,null)
return J.ax(B.f.gB(this.a2()),0,null)},
sB(a,b){this.a=t.L.a(b)}}
A.iD.prototype={
C(a){var s,r,q=this
if(q.a===q.c.length)q.hW()
s=q.c
r=q.a++
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
aV(a){var s,r,q,p,o,n=this
t.L.a(a)
s=J.bf(a)
while(r=n.a,q=r+s,p=n.c,o=p.length,q>o)n.el(q-o)
B.f.bw(p,r,q,a)
n.a+=s},
az(a){var s=this
if(s.b){s.C(B.a.j(a,8)&255)
s.C(a&255)
return}s.C(a&255)
s.C(B.a.j(a,8)&255)},
aI(a){var s=this
if(s.b){s.C(B.a.j(a,24)&255)
s.C(B.a.j(a,16)&255)
s.C(B.a.j(a,8)&255)
s.C(a&255)
return}s.C(a&255)
s.C(B.a.j(a,8)&255)
s.C(B.a.j(a,16)&255)
s.C(B.a.j(a,24)&255)},
k6(a){var s,r,q=this,p=new Float32Array(1)
p[0]=a
s=J.Z(B.ah.gB(p),0,null)
if(q.b){if(3>=s.length)return A.a(s,3)
q.C(s[3])
q.C(s[2])
q.C(s[1])
q.C(s[0])
return}r=s.length
if(0>=r)return A.a(s,0)
q.C(s[0])
if(1>=r)return A.a(s,1)
q.C(s[1])
if(2>=r)return A.a(s,2)
q.C(s[2])
if(3>=r)return A.a(s,3)
q.C(s[3])},
k7(a){var s,r,q=this,p=new Float64Array(1)
p[0]=a
s=J.Z(B.ai.gB(p),0,null)
if(q.b){if(7>=s.length)return A.a(s,7)
q.C(s[7])
q.C(s[6])
q.C(s[5])
q.C(s[4])
q.C(s[3])
q.C(s[2])
q.C(s[1])
q.C(s[0])
return}r=s.length
if(0>=r)return A.a(s,0)
q.C(s[0])
if(1>=r)return A.a(s,1)
q.C(s[1])
if(2>=r)return A.a(s,2)
q.C(s[2])
if(3>=r)return A.a(s,3)
q.C(s[3])
if(4>=r)return A.a(s,4)
q.C(s[4])
if(5>=r)return A.a(s,5)
q.C(s[5])
if(6>=r)return A.a(s,6)
q.C(s[6])
if(7>=r)return A.a(s,7)
q.C(s[7])},
el(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.f.bw(p,0,q,r)
this.c=p},
hW(){return this.el(null)},
gu(a){return this.a}}
A.dg.prototype={
h(a){var s=this.b
return s===0?0:B.a.aA(this.a,s)},
U(a,b){if(b==null)return!1
return b instanceof A.dg&&this.a===b.a&&this.b===b.b},
gG(a){return A.kK(this.a,this.b,B.K,B.K)},
A(a){return""+this.a+"/"+this.b}}
A.aM.prototype={
ct(){return A.j([this.a,this.b,this.c],t.t)},
gd6(){var s,r,q,p,o=new A.iO(),n=o.$1(this.a),m=o.$1(this.b),l=o.$1(this.c),k=0.2126729*n+0.7151522*m+0.072175*l
o=new A.iN()
s=o.$1(k)
if(typeof s!=="number")return A.cz(s)
r=o.$1((0.4124564*n+0.3575761*m+0.1804375*l)/0.95047)
q=o.$1(k)
if(typeof r!=="number")return r.fJ()
if(typeof q!=="number")return A.cz(q)
p=o.$1(k)
o=o.$1((0.0193339*n+0.119192*m+0.9503041*l)/1.08883)
if(typeof p!=="number")return p.fJ()
if(typeof o!=="number")return A.cz(o)
return new A.eW(116*s-16,500*(r-q),200*(p-o))}}
A.iO.prototype={
$1(a){var s=a/255
return s<=0.04045?s/12.92:Math.pow((s+0.055)/1.055,2.4)},
$S:34}
A.iN.prototype={
$1(a){return a>0.008856451679035631?Math.pow(a,0.3333333333333333):a*841/108+0.13793103448275862},
$S:27}
A.bq.prototype={
ct(){var s=this,r=s.a
return A.h_(["rgb",A.j([r.a,r.b,r.c],t.t),"spread",s.b,"dark",s.c,"glare",s.d],t.N,t.X)}}
A.bp.prototype={
ct(){return A.j([this.a,this.b],t.w)}}
A.iQ.prototype={
ct(){var s=this.a,r=A.ah(s),q=r.p("aX<1,p<y>>")
s=A.t(new A.aX(s,r.p("p<y>(1)").a(new A.iR()),q),q.p("az.E"))
return s},
gjZ(){var s,r,q,p,o,n,m,l,k,j,i,h=this.a
if(B.c.j9(h,new A.iS()))return!1
for(s=h.length,r=0,q=0;q<4;q=o){if(!(q<s))return A.a(h,q)
p=h[q]
o=q+1
n=o%4
if(!(n<s))return A.a(h,n)
m=h[n]
n=(q+2)%4
if(!(n<s))return A.a(h,n)
l=h[n]
n=m.a
k=p.a
j=m.b
i=p.b
if((n-k)*(l.b-j)-(j-i)*(l.a-n)<=0.001)return!1
r+=k*j-n*i
if(Math.pow(k-n,2)+Math.pow(i-j,2)<0.0025)return!1}return r/2>0.035}}
A.iR.prototype={
$1(a){t.x.a(a)
return A.j([a.a,a.b],t.w)},
$S:28}
A.iS.prototype={
$1(a){var s,r
t.x.a(a)
s=a.a
if(isFinite(s)){r=a.b
s=!isFinite(r)||s<0||s>1||r<0||r>1}else s=!0
return s},
$S:29}
A.iP.prototype={}
A.kl.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k=this.b,j=k.r
j===$&&A.d()
s=k.w
s===$&&A.d()
r=j*a+s*b+1
s=k.a
s===$&&A.d()
j=k.b
j===$&&A.d()
q=k.c
q===$&&A.d()
p=k.d
p===$&&A.d()
o=k.e
o===$&&A.d()
k=k.f
k===$&&A.d()
n=this.a
m=n.a
q=B.a.K(B.b.aH((s*a+j*b+q)/r*(m.gS()-1)),0,m.gS()-1)
n=n.a
l=m.aJ(q,B.a.K(B.b.aH((p*a+o*b+k)/r*(n.gJ()-1)),0,n.gJ()-1))
return new A.aM(B.b.h(l.gn()),B.b.h(l.gq()),B.b.h(l.gt()))},
$S:30}
A.kk.prototype={
$1(a){return t.bq.a(a).ct()},
$S:31}
A.kj.prototype={
$1(a){var s,r,q
t.Y.a(a)
s=A.t(a,a.$ti.p("az.E"))
B.c.dS(s)
r=s.length
q=r/2|0
if(!(q<r))return A.a(s,q)
return s[q]},
$S:32}
A.ke.prototype={
$1(a){return t.l.a(a).a},
$S:6}
A.kf.prototype={
$1(a){return t.l.a(a).b},
$S:6}
A.kg.prototype={
$1(a){return t.l.a(a).c},
$S:6}
A.kh.prototype={
$1(a){var s,r,q,p,o,n
t.l.a(a)
s=a.a/255
r=a.b/255
q=a.c/255
p=Math.max(s,Math.max(r,q))
o=p-Math.min(s,Math.min(r,q))
if(o>1e-9)if(p===s)n=60*B.b.a7((r-q)/o,6)
else n=p===r?60*((q-s)/o+2):60*((s-r)/o+4)
else n=0
B.b.a7(n+360,360)
return p<0.1},
$S:17}
A.ki.prototype={
$1(a){t.l.a(a)
return a.a>250&&a.b>250&&a.c>250},
$S:17}
A.ka.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.n6(A.mP(a).data)
if(typeof l!="string")return
p=t.N
o=t.X
s=t.f.a(B.aP.jg(l,null)).dF(0,p,o)
r=null
try{r=A.rs(s)}catch(n){q=A.bA(n)
r=A.h_(["error",A.A(q)],p,o)}m=r
o=A.ma(p,o)
o.dE(0,m)
m=s
o.i(0,"id",m.$ti.p("4?").a(m.a.m(0,"id")))
this.a.postMessage(B.aP.jp(o,null))},
$S:35};(function aliases(){var s=J.bH.prototype
s.fM=s.A
s=A.G.prototype
s.dU=s.am})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers.installStaticTearOff
s(J,"qr","m5",36)
r(A,"qV","pD",8)
r(A,"qW","pE",8)
r(A,"qX","pF",8)
q(A,"n2","qQ",2)
r(A,"r_","qf",15)
p(A.a0.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.bj.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.c6.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.aV.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.c2.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.bE.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.c5.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.c3.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.c4.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
p(A.cV.prototype,"gbu",1,0,null,["$1","$0"],["a4","h"],3,0,0)
var m
o(m=A.fV.prototype,"ghy","hz",5)
o(m,"ghB","hC",5)
o(m,"ghD","hE",5)
o(m,"ghs","ht",5)
o(m,"ghu","hv",5)
r(A,"rF","p1",0)
r(A,"ry","oU",0)
r(A,"rw","oS",0)
r(A,"rD","p_",0)
r(A,"rE","p0",0)
r(A,"rC","oZ",0)
r(A,"rB","oY",0)
r(A,"rA","oX",0)
r(A,"rH","p3",0)
r(A,"rG","p2",0)
r(A,"rz","oV",0)
r(A,"rx","oT",0)
r(A,"rS","pe",0)
r(A,"rQ","pc",0)
r(A,"rI","p4",0)
r(A,"rK","p6",0)
r(A,"rJ","p5",0)
r(A,"rL","p7",0)
r(A,"rT","pf",0)
r(A,"rR","pd",0)
r(A,"rM","p8",0)
r(A,"rN","p9",0)
r(A,"rO","pa",0)
r(A,"rP","pb",0)
o(A.eE.prototype,"giy","iz",13)
o(A.fL.prototype,"gjr","js",13)
n(A,"lq",3,null,["$3"],["pg"],1,0)
n(A,"rU",3,null,["$3"],["ph"],1,0)
n(A,"rZ",3,null,["$3"],["pm"],1,0)
n(A,"t_",3,null,["$3"],["pn"],1,0)
n(A,"t0",3,null,["$3"],["po"],1,0)
n(A,"t1",3,null,["$3"],["pp"],1,0)
n(A,"t2",3,null,["$3"],["pq"],1,0)
n(A,"t3",3,null,["$3"],["pr"],1,0)
n(A,"t4",3,null,["$3"],["ps"],1,0)
n(A,"t5",3,null,["$3"],["pt"],1,0)
n(A,"rV",3,null,["$3"],["pi"],1,0)
n(A,"rW",3,null,["$3"],["pj"],1,0)
n(A,"rX",3,null,["$3"],["pk"],1,0)
n(A,"rY",3,null,["$3"],["pl"],1,0)
p(A.bk.prototype,"gfE",0,5,null,["$5"],["a3"],4,0,0)
n(A,"t7",6,null,["$6"],["pA"],7,0)
n(A,"t8",6,null,["$6"],["pB"],7,0)
n(A,"t6",6,null,["$6"],["pz"],7,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.D,null)
q(A.D,[A.kE,J.fC,A.ew,J.bT,A.e,A.dB,A.T,A.bB,A.P,A.G,A.iT,A.c9,A.eJ,A.dF,A.an,A.bw,A.bP,A.dD,A.iZ,A.iC,A.eX,A.iw,A.R,A.aq,A.jn,A.jL,A.b0,A.hB,A.hG,A.jH,A.b6,A.hy,A.eM,A.aO,A.hx,A.f2,A.eP,A.fi,A.ay,A.jm,A.jl,A.jD,A.hH,A.bW,A.jp,A.h2,A.ex,A.jq,A.ap,A.ar,A.hF,A.cq,A.iB,A.ia,A.jg,A.ij,A.jf,A.jo,A.fB,A.h3,A.N,A.aJ,A.hA,A.fm,A.aC,A.a0,A.hZ,A.bh,A.i1,A.I,A.i3,A.fn,A.bi,A.fo,A.fp,A.dH,A.dI,A.eV,A.dL,A.dM,A.dN,A.fw,A.fx,A.ff,A.bD,A.im,A.bG,A.ip,A.ds,A.fT,A.fU,A.ir,A.fV,A.es,A.h7,A.b8,A.dc,A.iH,A.co,A.hb,A.hc,A.hf,A.hj,A.dd,A.de,A.ev,A.aL,A.eA,A.iW,A.hn,A.iY,A.ho,A.hp,A.iz,A.j0,A.eD,A.j1,A.j6,A.j9,A.jb,A.eC,A.ja,A.j2,A.bx,A.eF,A.hw,A.eG,A.eH,A.eE,A.hu,A.j7,A.hv,A.jd,A.eI,A.fr,A.fs,A.dP,A.dO,A.dQ,A.ft,A.dp,A.cS,A.aK,A.h4,A.ig,A.af,A.iD,A.dg,A.aM,A.bq,A.bp,A.iQ,A.iP])
q(J.fC,[J.fQ,J.e0,J.e1,J.d6,J.d7,J.d5,J.c8])
q(J.e1,[J.bH,J.u,A.ca,A.e9])
q(J.bH,[J.h5,J.dk,J.bl])
r(J.fO,A.ew)
r(J.il,J.u)
q(J.d5,[J.e_,J.fR])
q(A.e,[A.dq,A.B,A.bO,A.cE,A.cF,A.cG,A.cH,A.cI,A.cJ,A.cL,A.cM,A.cN,A.cO,A.cP,A.bC,A.dC,A.bk,A.ae,A.cc,A.cd,A.ce,A.cf,A.cg,A.ch,A.ci,A.cj,A.ck,A.cl,A.cm,A.cn,A.H])
r(A.bU,A.dq)
r(A.eL,A.bU)
q(A.T,[A.bV,A.aW,A.eN,A.hC])
q(A.bB,[A.fd,A.fc,A.hm,A.k6,A.k8,A.ji,A.jh,A.jz,A.kc,A.kd,A.jW,A.hY,A.i6,A.jZ,A.k_,A.k0,A.k1,A.k2,A.k3,A.k4,A.iG,A.ii,A.ih,A.iO,A.iN,A.iR,A.iS,A.kk,A.kj,A.ke,A.kf,A.kg,A.kh,A.ki,A.ka])
q(A.fd,[A.i_,A.is,A.k7,A.jA,A.iy,A.iA,A.jE,A.ic,A.id,A.ie,A.jc,A.kl])
q(A.P,[A.d8,A.bs,A.fW,A.hr,A.hk,A.hz,A.e3,A.f8,A.aQ,A.eB,A.hq,A.di,A.fg])
r(A.dl,A.G)
r(A.aR,A.dl)
q(A.B,[A.az,A.dE,A.bm,A.ix,A.eO])
q(A.az,[A.ey,A.aX,A.hD])
r(A.dt,A.bP)
r(A.eW,A.dt)
r(A.c_,A.dD)
r(A.ee,A.bs)
q(A.hm,[A.hl,A.cD])
r(A.e2,A.aW)
q(A.e9,[A.h1,A.aa])
q(A.aa,[A.eR,A.eT])
r(A.eS,A.eR)
r(A.bI,A.eS)
r(A.eU,A.eT)
r(A.aE,A.eU)
q(A.bI,[A.e4,A.e5])
q(A.aE,[A.e6,A.e7,A.e8,A.ea,A.eb,A.ec,A.cb])
r(A.eY,A.hz)
q(A.fc,[A.jj,A.jk,A.jI,A.jr,A.jv,A.ju,A.jt,A.js,A.jy,A.jx,A.jw,A.jG,A.jT,A.jN,A.jM,A.jQ])
r(A.eK,A.hy)
r(A.hE,A.f2)
r(A.eQ,A.eN)
q(A.fi,[A.jJ,A.hX,A.hW,A.iu,A.it,A.ht])
q(A.ay,[A.dz,A.fk,A.fX])
r(A.fY,A.e3)
r(A.jC,A.jD)
q(A.fk,[A.fZ,A.hs])
r(A.iv,A.jJ)
q(A.aQ,[A.bo,A.fz])
r(A.jP,A.jg)
r(A.cC,A.ap)
q(A.cC,[A.f7,A.hV])
q(A.jp,[A.dA,A.i0,A.ao,A.fa,A.ad,A.ac,A.cQ,A.bY,A.aU,A.cT,A.io,A.da,A.er,A.bJ,A.bK,A.b_,A.at,A.cr,A.a4,A.aN,A.cs,A.dn,A.fu,A.fq,A.fN,A.i7])
r(A.fA,A.fB)
r(A.d9,A.h3)
q(A.bC,[A.fe,A.cK])
r(A.fh,A.dC)
r(A.bX,A.aJ)
q(A.a0,[A.bj,A.c1,A.c6,A.aV,A.c2,A.bE,A.c5,A.c3,A.c4,A.cW,A.cU,A.cX,A.cV])
q(A.i1,[A.fb,A.i5,A.i9,A.ib,A.fS,A.h6,A.iF,A.iI,A.iM,A.iV,A.iX,A.je])
r(A.i2,A.fb)
r(A.fD,A.bi)
q(A.fD,[A.dX,A.fF,A.fG,A.fH,A.dY])
r(A.fE,A.dI)
r(A.fI,A.dM)
r(A.fv,A.bh)
q(A.bD,[A.c0,A.dR])
r(A.iq,A.i3)
r(A.fJ,A.es)
r(A.fK,A.h7)
r(A.bL,A.I)
q(A.b8,[A.h9,A.ha,A.hd,A.he,A.hh,A.hi])
q(A.dc,[A.eu,A.hg])
q(A.hj,[A.df,A.as])
r(A.fL,A.eE)
r(A.fM,A.eI)
r(A.dZ,A.dp)
q(A.ae,[A.cY,A.cZ,A.dS,A.dT,A.dU,A.dV,A.d_,A.d0,A.d1,A.d2,A.d3,A.d4])
q(A.aK,[A.eg,A.eh,A.ei,A.ej,A.ek,A.el,A.em,A.en,A.aY])
s(A.dl,A.bw)
s(A.eR,A.G)
s(A.eS,A.an)
s(A.eT,A.G)
s(A.eU,A.an)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",y:"double",k:"num",E:"String",a7:"bool",ar:"Null",p:"List",D:"Object",a9:"Map",W:"JSObject"},mangledNames:{},types:["~(af)","h(h,bu,h)","~()","h([h])","~(h,h,k,k,k)","~(bG,p<h>)","h(aM)","~(h,h,h,h,h,bv)","~(~())","ar(@)","~(D?,D?)","@()","~(@)","~(h,a7)","~(E,aC)","@(@)","ar()","a7(aM)","bu(h)","~(h,a0)","a7()","a7(E)","h(h,h)","D?(D?)","k(k,k,k,k)","k(k,k,k,k,k)","~(@,@)","y(y)","p<y>(bp)","a7(bp)","aM(y,y)","a9<E,D?>(bq)","h(e<h>)","ar(D,dh)","y(h)","ar(W)","h(@,@)","ar(~())","@(E)","@(@,E)","~(k,k,k,k)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"3;":(a,b,c)=>d=>d instanceof A.eW&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.q_(v.typeUniverse,JSON.parse('{"bl":"bH","h5":"bH","dk":"bH","tf":"ca","fQ":{"a7":[],"L":[]},"e0":{"L":[]},"e1":{"W":[]},"bH":{"W":[]},"u":{"p":["1"],"B":["1"],"W":[],"e":["1"],"ag":["1"]},"fO":{"ew":[]},"il":{"u":["1"],"p":["1"],"B":["1"],"W":[],"e":["1"],"ag":["1"]},"bT":{"C":["1"]},"d5":{"y":[],"k":[],"aS":["k"]},"e_":{"y":[],"h":[],"k":[],"aS":["k"],"L":[]},"fR":{"y":[],"k":[],"aS":["k"],"L":[]},"c8":{"E":[],"aS":["E"],"mh":[],"ag":["@"],"L":[]},"dq":{"e":["2"]},"dB":{"C":["2"]},"bU":{"dq":["1","2"],"e":["2"],"e.E":"2"},"eL":{"bU":["1","2"],"dq":["1","2"],"B":["2"],"e":["2"],"e.E":"2"},"bV":{"T":["3","4"],"a9":["3","4"],"T.K":"3","T.V":"4"},"d8":{"P":[]},"aR":{"G":["h"],"bw":["h"],"p":["h"],"B":["h"],"e":["h"],"G.E":"h","bw.E":"h"},"B":{"e":["1"]},"az":{"B":["1"],"e":["1"]},"ey":{"az":["1"],"B":["1"],"e":["1"],"az.E":"1","e.E":"1"},"c9":{"C":["1"]},"aX":{"az":["2"],"B":["2"],"e":["2"],"az.E":"2","e.E":"2"},"bO":{"e":["1"],"e.E":"1"},"eJ":{"C":["1"]},"dE":{"B":["1"],"e":["1"],"e.E":"1"},"dF":{"C":["1"]},"dl":{"G":["1"],"bw":["1"],"p":["1"],"B":["1"],"e":["1"]},"eW":{"dt":[],"bP":[]},"dD":{"a9":["1","2"]},"c_":{"dD":["1","2"],"a9":["1","2"]},"ee":{"bs":[],"P":[]},"fW":{"P":[]},"hr":{"P":[]},"eX":{"dh":[]},"bB":{"bZ":[]},"fc":{"bZ":[]},"fd":{"bZ":[]},"hm":{"bZ":[]},"hl":{"bZ":[]},"cD":{"bZ":[]},"hk":{"P":[]},"aW":{"T":["1","2"],"kH":["1","2"],"a9":["1","2"],"T.K":"1","T.V":"2"},"bm":{"B":["1"],"e":["1"],"e.E":"1"},"R":{"C":["1"]},"ix":{"B":["1"],"e":["1"],"e.E":"1"},"aq":{"C":["1"]},"e2":{"aW":["1","2"],"T":["1","2"],"kH":["1","2"],"a9":["1","2"],"T.K":"1","T.V":"2"},"dt":{"bP":[]},"ca":{"W":[],"L":[]},"e9":{"W":[],"Y":[]},"h1":{"W":[],"Y":[],"L":[]},"aa":{"aD":["1"],"W":[],"Y":[],"ag":["1"]},"bI":{"G":["y"],"aa":["y"],"p":["y"],"aD":["y"],"B":["y"],"W":[],"Y":[],"ag":["y"],"e":["y"],"an":["y"]},"aE":{"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"]},"e4":{"bI":[],"i8":[],"G":["y"],"aa":["y"],"p":["y"],"aD":["y"],"B":["y"],"W":[],"Y":[],"ag":["y"],"e":["y"],"an":["y"],"L":[],"G.E":"y"},"e5":{"bI":[],"kx":[],"G":["y"],"aa":["y"],"p":["y"],"aD":["y"],"B":["y"],"W":[],"Y":[],"ag":["y"],"e":["y"],"an":["y"],"L":[],"G.E":"y"},"e6":{"aE":[],"ik":[],"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"],"L":[],"G.E":"h"},"e7":{"aE":[],"dW":[],"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"],"L":[],"G.E":"h"},"e8":{"aE":[],"kD":[],"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"],"L":[],"G.E":"h"},"ea":{"aE":[],"l5":[],"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"],"L":[],"G.E":"h"},"eb":{"aE":[],"bu":[],"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"],"L":[],"G.E":"h"},"ec":{"aE":[],"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"],"L":[],"G.E":"h"},"cb":{"aE":[],"bv":[],"G":["h"],"aa":["h"],"p":["h"],"aD":["h"],"B":["h"],"W":[],"Y":[],"ag":["h"],"e":["h"],"an":["h"],"L":[],"G.E":"h"},"hz":{"P":[]},"eY":{"bs":[],"P":[]},"b6":{"P":[]},"eK":{"hy":["1"]},"aO":{"cR":["1"]},"f2":{"mx":[]},"hE":{"f2":[],"mx":[]},"eN":{"T":["1","2"],"a9":["1","2"]},"eQ":{"eN":["1","2"],"T":["1","2"],"a9":["1","2"],"T.K":"1","T.V":"2"},"eO":{"B":["1"],"e":["1"],"e.E":"1"},"eP":{"C":["1"]},"G":{"p":["1"],"B":["1"],"e":["1"]},"T":{"a9":["1","2"]},"hC":{"T":["E","@"],"a9":["E","@"],"T.K":"E","T.V":"@"},"hD":{"az":["E"],"B":["E"],"e":["E"],"az.E":"E","e.E":"E"},"dz":{"ay":["p<h>","E"],"ay.S":"p<h>"},"fk":{"ay":["E","p<h>"]},"e3":{"P":[]},"fY":{"P":[]},"fX":{"ay":["D?","E"],"ay.S":"D?"},"fZ":{"ay":["E","p<h>"],"ay.S":"E"},"hs":{"ay":["E","p<h>"],"ay.S":"E"},"bW":{"aS":["bW"]},"y":{"k":[],"aS":["k"]},"h":{"k":[],"aS":["k"]},"p":{"B":["1"],"e":["1"]},"k":{"aS":["k"]},"E":{"aS":["E"],"mh":[]},"f8":{"P":[]},"bs":{"P":[]},"aQ":{"P":[]},"bo":{"P":[]},"fz":{"bo":[],"P":[]},"eB":{"P":[]},"hq":{"P":[]},"di":{"P":[]},"fg":{"P":[]},"h2":{"P":[]},"ex":{"P":[]},"hF":{"dh":[]},"cq":{"oN":[]},"fA":{"fB":[]},"d9":{"h3":[]},"N":{"C":["k"]},"cE":{"x":[],"e":["k"],"e.E":"k"},"cF":{"x":[],"e":["k"],"e.E":"k"},"cG":{"x":[],"e":["k"],"e.E":"k"},"cH":{"x":[],"e":["k"],"e.E":"k"},"cI":{"x":[],"e":["k"],"e.E":"k"},"cJ":{"x":[],"e":["k"],"e.E":"k"},"cL":{"x":[],"e":["k"],"e.E":"k"},"cM":{"x":[],"e":["k"],"e.E":"k"},"cN":{"x":[],"e":["k"],"e.E":"k"},"cO":{"x":[],"e":["k"],"e.E":"k"},"cP":{"x":[],"e":["k"],"e.E":"k"},"bC":{"x":[],"e":["k"],"e.E":"k"},"fe":{"x":[],"e":["k"],"e.E":"k"},"cK":{"x":[],"e":["k"],"e.E":"k"},"dC":{"x":[],"e":["k"],"e.E":"k"},"fh":{"x":[],"e":["k"],"e.E":"k"},"bX":{"aJ":[]},"bj":{"a0":[]},"c1":{"a0":[]},"c6":{"a0":[]},"aV":{"a0":[]},"c2":{"a0":[]},"bE":{"a0":[]},"c5":{"a0":[]},"c3":{"a0":[]},"c4":{"a0":[]},"cW":{"a0":[]},"cU":{"a0":[]},"cX":{"a0":[]},"cV":{"a0":[]},"bh":{"I":[]},"dX":{"bi":[]},"fD":{"bi":[]},"dH":{"I":[]},"fE":{"dI":[]},"fF":{"bi":[]},"fG":{"bi":[]},"fH":{"bi":[]},"dY":{"bi":[]},"fI":{"dM":[]},"dN":{"I":[]},"fw":{"I":[]},"fv":{"bh":[],"I":[]},"c0":{"bD":[]},"dR":{"bD":[]},"fU":{"I":[]},"fJ":{"es":[]},"h7":{"I":[]},"fK":{"I":[]},"bL":{"I":[]},"h9":{"b8":[]},"ha":{"b8":[]},"hd":{"b8":[]},"he":{"b8":[]},"hh":{"b8":[]},"hi":{"b8":[]},"eu":{"dc":[]},"hg":{"dc":[]},"hb":{"I":[]},"dd":{"I":[]},"de":{"I":[]},"ev":{"I":[]},"eA":{"I":[]},"hp":{"I":[]},"fM":{"eI":[]},"dp":{"I":[]},"dZ":{"dp":[],"I":[]},"bk":{"e":["r"],"e.E":"r"},"ae":{"e":["r"]},"cY":{"ae":[],"e":["r"],"e.E":"r"},"cZ":{"ae":[],"e":["r"],"e.E":"r"},"dS":{"ae":[],"e":["r"],"e.E":"r"},"dT":{"ae":[],"e":["r"],"e.E":"r"},"dU":{"ae":[],"e":["r"],"e.E":"r"},"dV":{"ae":[],"e":["r"],"e.E":"r"},"d_":{"ae":[],"e":["r"],"e.E":"r"},"d0":{"ae":[],"e":["r"],"e.E":"r"},"d1":{"ae":[],"e":["r"],"e.E":"r"},"d2":{"ae":[],"e":["r"],"e.E":"r"},"d3":{"ae":[],"e":["r"],"e.E":"r"},"d4":{"ae":[],"e":["r"],"e.E":"r"},"eg":{"aK":[]},"eh":{"aK":[]},"ei":{"aK":[]},"ej":{"aK":[]},"ek":{"aK":[]},"el":{"aK":[]},"em":{"aK":[]},"en":{"aK":[]},"aY":{"aK":[]},"cc":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"cd":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"ce":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"cf":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"cg":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"ch":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"h4":{"C":["r"]},"ci":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"cj":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"ck":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"cl":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"cm":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"cn":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"H":{"r":[],"x":[],"e":["k"],"C":["r"],"e.E":"k"},"nL":{"Y":[]},"kD":{"p":["h"],"B":["h"],"Y":[],"e":["h"]},"bv":{"p":["h"],"B":["h"],"Y":[],"e":["h"]},"oQ":{"p":["h"],"B":["h"],"Y":[],"e":["h"]},"ik":{"p":["h"],"B":["h"],"Y":[],"e":["h"]},"l5":{"p":["h"],"B":["h"],"Y":[],"e":["h"]},"dW":{"p":["h"],"B":["h"],"Y":[],"e":["h"]},"bu":{"p":["h"],"B":["h"],"Y":[],"e":["h"]},"i8":{"p":["y"],"B":["y"],"Y":[],"e":["y"]},"kx":{"p":["y"],"B":["y"],"Y":[],"e":["y"]},"r":{"x":[],"C":["r"],"e":["k"]}}'))
A.pZ(v.typeUniverse,JSON.parse('{"dl":1,"aa":1,"fi":2,"hj":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a_
return{n:s("b6"),E:s("dz"),fA:s("dA"),G:s("x"),e8:s("aS<@>"),dy:s("bW"),gw:s("B<@>"),C:s("P"),aX:s("fn"),gV:s("fp"),h4:s("i8"),Z:s("bZ"),ct:s("dO"),gj:s("fr"),ak:s("fs"),fa:s("dP"),gx:s("fx"),P:s("aC"),r:s("a0"),v:s("ae"),an:s("dW"),bM:s("e<y>"),hf:s("e<@>"),Y:s("e<h>"),eB:s("u<ff>"),g9:s("u<fo>"),q:s("u<dI>"),b:s("u<dM>"),O:s("u<dO>"),g:s("u<bk>"),b7:s("u<bG>"),R:s("u<p<p<p<h>>>>"),o:s("u<p<p<h>>>"),S:s("u<p<h>>"),dm:s("u<es>"),c:s("u<co>"),af:s("u<b8>"),U:s("u<hf>"),ej:s("u<aM>"),el:s("u<bp>"),h7:s("u<bq>"),s:s("u<E>"),aU:s("u<ho>"),h:s("u<bv>"),ao:s("u<bx>"),W:s("u<hv>"),J:s("u<eI>"),gn:s("u<hA>"),gb:s("u<ds>"),w:s("u<y>"),e:s("u<@>"),t:s("u<h>"),f8:s("u<fT?>"),ca:s("u<p<h>?>"),hh:s("u<bu?>"),ff:s("u<bv?>"),A:s("u<~(af)>"),aP:s("ag<@>"),u:s("e0"),m:s("W"),cj:s("bl"),ez:s("aD<@>"),d2:s("bG"),f0:s("p<dW>"),fv:s("p<p<dW>>"),gS:s("p<p<bx>>"),eS:s("p<co>"),c7:s("p<eC>"),e6:s("p<bx>"),eQ:s("p<eF>"),db:s("p<eG>"),cC:s("p<eH>"),dg:s("p<y>"),j:s("p<@>"),L:s("p<h>"),g8:s("p<bD?>"),d:s("p<p<h>?>"),ge:s("p<bx?>"),gR:s("p<eV?>"),cP:s("p<h?>"),ck:s("a9<E,E>"),f:s("a9<@,@>"),aW:s("a9<E,D?>(bq)"),fQ:s("aX<bq,a9<E,D?>>"),d4:s("bI"),bc:s("aE"),gu:s("aa<@>"),bm:s("cb"),a:s("ar"),K:s("D"),dv:s("r"),fW:s("co"),fh:s("hc"),cE:s("eu"),ha:s("dc"),fi:s("dd"),b8:s("bo"),i:s("dg"),gT:s("th"),bQ:s("+()"),l:s("aM"),x:s("bp"),k:s("dh"),bq:s("bq"),N:s("E"),cV:s("hn"),ci:s("L"),eK:s("bs"),bv:s("bu"),D:s("bv"),bI:s("dk"),dd:s("eC"),ai:s("eF"),gU:s("eG"),dE:s("eH"),cc:s("bO<E>"),_:s("aO<@>"),hg:s("eQ<D?,D?>"),eO:s("eV"),y:s("a7"),al:s("a7(D)"),bB:s("a7(E)"),V:s("y"),z:s("@"),fO:s("@()"),B:s("@(D)"),Q:s("@(D,dh)"),p:s("h"),eH:s("cR<ar>?"),fe:s("bD?"),bC:s("ik?"),bX:s("W?"),bE:s("p<@>?"),T:s("p<h>?"),eA:s("p<bD?>?"),fl:s("p<p<h>?>?"),di:s("p<h?>?"),cZ:s("a9<E,E>?"),X:s("D?"),dk:s("E?"),aD:s("bv?"),eW:s("eD?"),aj:s("bx?"),dP:s("hw?"),F:s("eM<@,@>?"),a6:s("a7?"),cD:s("y?"),I:s("h?"),cg:s("k?"),e7:s("~(h,a7)?"),H:s("k"),aT:s("~"),M:s("~()"),fb:s("~(bG,p<h>)"),cA:s("~(E,@)"),d6:s("~(h,a7)"),dX:s("~(k,k,k,k)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cX=J.fC.prototype
B.c=J.u.prototype
B.a=J.e_.prototype
B.b=J.d5.prototype
B.p=J.c8.prototype
B.cZ=J.bl.prototype
B.d_=J.e1.prototype
B.ah=A.e4.prototype
B.ai=A.e5.prototype
B.aB=A.e6.prototype
B.W=A.e7.prototype
B.aC=A.e8.prototype
B.X=A.ea.prototype
B.o=A.eb.prototype
B.f=A.cb.prototype
B.bT=J.h5.prototype
B.aJ=J.dk.prototype
B.al=new A.fa(0,"direct")
B.a1=new A.fa(1,"alpha")
B.aL=new A.ac(0,"none")
B.am=new A.ac(3,"bitfields")
B.an=new A.ac(6,"alphaBitfields")
B.ao=new A.dA(0,"littleEndian")
B.ap=new A.dA(1,"bigEndian")
B.cn=new A.hX()
B.aM=new A.dz()
B.cm=new A.hW()
B.co=new A.dF(A.a_("dF<0&>"))
B.aN=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cp=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.cu=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.cq=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ct=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.cs=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.cr=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.aO=function(hooks) { return hooks; }

B.aP=new A.fX()
B.aQ=new A.fZ()
B.cv=new A.h2()
B.K=new A.iT()
B.cw=new A.hs()
B.C=new A.jf()
B.z=new A.hE()
B.a2=new A.hF()
B.cx=new A.jP()
B.aR=new A.i0(4,"luminance")
B.T=new A.fh(4294967295)
B.cy=new A.bY(0,"red")
B.cz=new A.bY(1,"green")
B.cA=new A.bY(2,"blue")
B.cB=new A.bY(3,"alpha")
B.cC=new A.bY(4,"other")
B.aS=new A.cQ(0,"uint")
B.aq=new A.cQ(1,"half")
B.ar=new A.cQ(2,"float")
B.aT=new A.aU(0,"none")
B.cK=new A.i7(2,"both")
B.cL=new A.ap("Invalid Huffman code length",null,null)
B.cM=new A.ap("Khung ph\u1ea3i l\u1ed3i, \u0111\u1ee7 l\u1edbn v\xe0 kh\xf4ng giao nhau.",null,null)
B.cN=new A.ap("C\u1ea7n \u1ea3nh JPEG/PNG r\xf5 n\xe9t, t\u1eeb 90 px v\xe0 kh\xf4ng qu\xe1 20 megapixel.",null,null)
B.cO=new A.ap("G\xf3c \u1ea3nh qu\xe1 h\u1eb9p",null,null)
B.cP=new A.ap("C\u1ea7n b\u1ed1n g\xf3c",null,null)
B.cQ=new A.ap("Incomplete Huffman table",null,null)
B.cR=new A.ap("Oversubscribed Huffman table",null,null)
B.cS=new A.ap("Kh\xf4ng \u0111\u1ecdc \u0111\u01b0\u1ee3c \u1ea3nh. D\xf9ng JPEG ho\u1eb7c PNG.",null,null)
B.cT=new A.ap("\u1ea2nh v\u01b0\u1ee3t 16 MB. H\xe3y ch\u1ecdn \u1ea3nh nh\u1ecf h\u01a1n.",null,null)
B.w=new A.ao(0,"uint1")
B.A=new A.ao(1,"uint2")
B.I=new A.ao(10,"float32")
B.L=new A.ao(11,"float64")
B.B=new A.ao(2,"uint4")
B.e=new A.ao(3,"uint8")
B.l=new A.ao(4,"uint16")
B.J=new A.ao(5,"uint32")
B.M=new A.ao(6,"int8")
B.N=new A.ao(7,"int16")
B.O=new A.ao(8,"int32")
B.D=new A.ao(9,"float16")
B.aU=new A.fq(1,"page")
B.i=new A.fq(2,"sequence")
B.as=new A.fu(0,"none")
B.cU=new A.fu(1,"deflate")
B.aV=new A.cT(2,"cur")
B.d=new A.ad(0,"none")
B.aW=new A.ad(1,"byte")
B.aX=new A.ad(10,"sRational")
B.aY=new A.ad(11,"single")
B.aZ=new A.ad(12,"double")
B.b_=new A.ad(13,"ifd")
B.k=new A.ad(2,"ascii")
B.j=new A.ad(3,"short")
B.n=new A.ad(4,"long")
B.r=new A.ad(5,"rational")
B.b0=new A.ad(6,"sByte")
B.E=new A.ad(7,"undefined")
B.b1=new A.ad(8,"sShort")
B.b2=new A.ad(9,"sLong")
B.cY=new A.fN(0,"nearest")
B.ko=new A.fN(1,"linear")
B.at=new A.io(0,"yuv444")
B.d0=new A.it(null)
B.d1=new A.iu(null)
B.d2=new A.iv(!1)
B.a3=s([0,2,8],t.t)
B.d3=s([0,4,2,1],t.t)
B.cV=new A.cT(0,"invalid")
B.cW=new A.cT(1,"ico")
B.d5=s([B.cV,B.cW,B.aV],A.a_("u<cT>"))
B.b4=s([252,243,207,63],t.t)
B.jw=new A.da(0,"none")
B.bW=new A.da(1,"background")
B.bX=new A.da(2,"previous")
B.b5=s([B.jw,B.bW,B.bX],A.a_("u<da>"))
B.a4=s([292,260,226,226],t.t)
B.b6=s([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],t.t)
B.b7=s([2,3,7],t.t)
B.a5=s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],t.t)
B.dx=s([3,3,11],t.t)
B.az=s([128,128,128,128,128,128,128,128,128,128,128],t.t)
B.bc=s([B.az,B.az,B.az],t.S)
B.eh=s([253,136,254,255,228,219,128,128,128,128,128],t.t)
B.fa=s([189,129,242,255,227,213,255,219,128,128,128],t.t)
B.ff=s([106,126,227,252,214,209,255,255,128,128,128],t.t)
B.hB=s([B.eh,B.fa,B.ff],t.S)
B.hI=s([1,98,248,255,236,226,255,255,128,128,128],t.t)
B.dD=s([181,133,238,254,221,234,255,154,128,128,128],t.t)
B.dB=s([78,134,202,247,198,180,255,219,128,128,128],t.t)
B.i5=s([B.hI,B.dD,B.dB],t.S)
B.ec=s([1,185,249,255,243,255,128,128,128,128,128],t.t)
B.hF=s([184,150,247,255,236,224,128,128,128,128,128],t.t)
B.iW=s([77,110,216,255,236,230,128,128,128,128,128],t.t)
B.h7=s([B.ec,B.hF,B.iW],t.S)
B.hf=s([1,101,251,255,241,255,128,128,128,128,128],t.t)
B.ef=s([170,139,241,252,236,209,255,255,128,128,128],t.t)
B.hl=s([37,116,196,243,228,255,255,255,128,128,128],t.t)
B.dZ=s([B.hf,B.ef,B.hl],t.S)
B.fr=s([1,204,254,255,245,255,128,128,128,128,128],t.t)
B.ja=s([207,160,250,255,238,128,128,128,128,128,128],t.t)
B.j9=s([102,103,231,255,211,171,128,128,128,128,128],t.t)
B.eC=s([B.fr,B.ja,B.j9],t.S)
B.dS=s([1,152,252,255,240,255,128,128,128,128,128],t.t)
B.jf=s([177,135,243,255,234,225,128,128,128,128,128],t.t)
B.h2=s([80,129,211,255,194,224,128,128,128,128,128],t.t)
B.hA=s([B.dS,B.jf,B.h2],t.S)
B.bh=s([1,1,255,128,128,128,128,128,128,128,128],t.t)
B.hX=s([246,1,255,128,128,128,128,128,128,128,128],t.t)
B.fO=s([255,128,128,128,128,128,128,128,128,128,128],t.t)
B.jo=s([B.bh,B.hX,B.fO],t.S)
B.ew=s([B.bc,B.hB,B.i5,B.h7,B.dZ,B.eC,B.hA,B.jo],t.o)
B.iY=s([198,35,237,223,193,187,162,160,145,155,62],t.t)
B.eg=s([131,45,198,221,172,176,220,157,252,221,1],t.t)
B.iX=s([68,47,146,208,149,167,221,162,255,223,128],t.t)
B.fA=s([B.iY,B.eg,B.iX],t.S)
B.i6=s([1,149,241,255,221,224,255,255,128,128,128],t.t)
B.im=s([184,141,234,253,222,220,255,199,128,128,128],t.t)
B.fK=s([81,99,181,242,176,190,249,202,255,255,128],t.t)
B.iK=s([B.i6,B.im,B.fK],t.S)
B.iB=s([1,129,232,253,214,197,242,196,255,255,128],t.t)
B.j7=s([99,121,210,250,201,198,255,202,128,128,128],t.t)
B.hC=s([23,91,163,242,170,187,247,210,255,255,128],t.t)
B.fQ=s([B.iB,B.j7,B.hC],t.S)
B.eR=s([1,200,246,255,234,255,128,128,128,128,128],t.t)
B.iy=s([109,178,241,255,231,245,255,255,128,128,128],t.t)
B.dm=s([44,130,201,253,205,192,255,255,128,128,128],t.t)
B.iO=s([B.eR,B.iy,B.dm],t.S)
B.dM=s([1,132,239,251,219,209,255,165,128,128,128],t.t)
B.d6=s([94,136,225,251,218,190,255,255,128,128,128],t.t)
B.iD=s([22,100,174,245,186,161,255,199,128,128,128],t.t)
B.hd=s([B.dM,B.d6,B.iD],t.S)
B.il=s([1,182,249,255,232,235,128,128,128,128,128],t.t)
B.hu=s([124,143,241,255,227,234,128,128,128,128,128],t.t)
B.f7=s([35,77,181,251,193,211,255,205,128,128,128],t.t)
B.fh=s([B.il,B.hu,B.f7],t.S)
B.jp=s([1,157,247,255,236,231,255,255,128,128,128],t.t)
B.ev=s([121,141,235,255,225,227,255,255,128,128,128],t.t)
B.iz=s([45,99,188,251,195,217,255,224,128,128,128],t.t)
B.dY=s([B.jp,B.ev,B.iz],t.S)
B.d7=s([1,1,251,255,213,255,128,128,128,128,128],t.t)
B.dr=s([203,1,248,255,255,128,128,128,128,128,128],t.t)
B.io=s([137,1,177,255,224,255,128,128,128,128,128],t.t)
B.dT=s([B.d7,B.dr,B.io],t.S)
B.id=s([B.fA,B.iK,B.fQ,B.iO,B.hd,B.fh,B.dY,B.dT],t.o)
B.eG=s([253,9,248,251,207,208,255,192,128,128,128],t.t)
B.hY=s([175,13,224,243,193,185,249,198,255,255,128],t.t)
B.jn=s([73,17,171,221,161,179,236,167,255,234,128],t.t)
B.hQ=s([B.eG,B.hY,B.jn],t.S)
B.ia=s([1,95,247,253,212,183,255,255,128,128,128],t.t)
B.fW=s([239,90,244,250,211,209,255,255,128,128,128],t.t)
B.iV=s([155,77,195,248,188,195,255,255,128,128,128],t.t)
B.ik=s([B.ia,B.fW,B.iV],t.S)
B.ft=s([1,24,239,251,218,219,255,205,128,128,128],t.t)
B.i_=s([201,51,219,255,196,186,128,128,128,128,128],t.t)
B.fV=s([69,46,190,239,201,218,255,228,128,128,128],t.t)
B.i8=s([B.ft,B.i_,B.fV],t.S)
B.fd=s([1,191,251,255,255,128,128,128,128,128,128],t.t)
B.hj=s([223,165,249,255,213,255,128,128,128,128,128],t.t)
B.hH=s([141,124,248,255,255,128,128,128,128,128,128],t.t)
B.iA=s([B.fd,B.hj,B.hH],t.S)
B.fC=s([1,16,248,255,255,128,128,128,128,128,128],t.t)
B.et=s([190,36,230,255,236,255,128,128,128,128,128],t.t)
B.ei=s([149,1,255,128,128,128,128,128,128,128,128],t.t)
B.dN=s([B.fC,B.et,B.ei],t.S)
B.hE=s([1,226,255,128,128,128,128,128,128,128,128],t.t)
B.hT=s([247,192,255,128,128,128,128,128,128,128,128],t.t)
B.iU=s([240,128,255,128,128,128,128,128,128,128,128],t.t)
B.dt=s([B.hE,B.hT,B.iU],t.S)
B.iN=s([1,134,252,255,255,128,128,128,128,128,128],t.t)
B.ht=s([213,62,250,255,255,128,128,128,128,128,128],t.t)
B.jd=s([55,93,255,128,128,128,128,128,128,128,128],t.t)
B.hD=s([B.iN,B.ht,B.jd],t.S)
B.e8=s([B.hQ,B.ik,B.i8,B.iA,B.dN,B.dt,B.hD,B.bc],t.o)
B.hv=s([202,24,213,235,186,191,220,160,240,175,255],t.t)
B.ee=s([126,38,182,232,169,184,228,174,255,187,128],t.t)
B.dP=s([61,46,138,219,151,178,240,170,255,216,128],t.t)
B.ii=s([B.hv,B.ee,B.dP],t.S)
B.h1=s([1,112,230,250,199,191,247,159,255,255,128],t.t)
B.dX=s([166,109,228,252,211,215,255,174,128,128,128],t.t)
B.hh=s([39,77,162,232,172,180,245,178,255,255,128],t.t)
B.ig=s([B.h1,B.dX,B.hh],t.S)
B.h3=s([1,52,220,246,198,199,249,220,255,255,128],t.t)
B.eA=s([124,74,191,243,183,193,250,221,255,255,128],t.t)
B.f6=s([24,71,130,219,154,170,243,182,255,255,128],t.t)
B.ie=s([B.h3,B.eA,B.f6],t.S)
B.f4=s([1,182,225,249,219,240,255,224,128,128,128],t.t)
B.jc=s([149,150,226,252,216,205,255,171,128,128,128],t.t)
B.jt=s([28,108,170,242,183,194,254,223,255,255,128],t.t)
B.j4=s([B.f4,B.jc,B.jt],t.S)
B.ju=s([1,81,230,252,204,203,255,192,128,128,128],t.t)
B.iv=s([123,102,209,247,188,196,255,233,128,128,128],t.t)
B.iS=s([20,95,153,243,164,173,255,203,128,128,128],t.t)
B.iw=s([B.ju,B.iv,B.iS],t.S)
B.fH=s([1,222,248,255,216,213,128,128,128,128,128],t.t)
B.hs=s([168,175,246,252,235,205,255,255,128,128,128],t.t)
B.f9=s([47,116,215,255,211,212,255,255,128,128,128],t.t)
B.ep=s([B.fH,B.hs,B.f9],t.S)
B.fG=s([1,121,236,253,212,214,255,255,128,128,128],t.t)
B.h4=s([141,84,213,252,201,202,255,219,128,128,128],t.t)
B.hO=s([42,80,160,240,162,185,255,205,128,128,128],t.t)
B.fj=s([B.fG,B.h4,B.hO],t.S)
B.jj=s([244,1,255,128,128,128,128,128,128,128,128],t.t)
B.d4=s([238,1,255,128,128,128,128,128,128,128,128],t.t)
B.hU=s([B.bh,B.jj,B.d4],t.S)
B.dk=s([B.ii,B.ig,B.ie,B.j4,B.iw,B.ep,B.fj,B.hU],t.o)
B.dO=s([B.ew,B.id,B.e8,B.dk],t.R)
B.b9=s([511,1023,2047,4095],t.t)
B.ba=s([63,207,243,252],t.t)
B.e5=s([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],t.t)
B.a6=s([0,1,2,3,4,5,6,7,8,9,10,11],t.t)
B.ek=s([8,8,4,2],t.t)
B.dg=s([173,148,140],t.t)
B.dh=s([176,155,140,135],t.t)
B.de=s([180,157,141,134,130],t.t)
B.dq=s([254,254,243,230,196,177,153,140,133,130,129],t.t)
B.bb=s([B.dg,B.dh,B.de,B.dq],t.S)
B.bd=s([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379],t.w)
B.be=s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],t.t)
B.bf=s([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],t.t)
B.t=s([0,1,1,2,4,8,1,1,2,4,8,4,8,4],t.t)
B.bg=s([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],t.t)
B.bi=s([280,256,256,256,40],t.t)
B.U=s([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],t.t)
B.a7=s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],t.t)
B.aw=s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],t.t)
B.bj=s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],t.t)
B.ax=s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],t.t)
B.bk=s([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],t.t)
B.bl=s([B.aS,B.aq,B.ar],A.a_("u<cQ>"))
B.bm=s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],t.t)
B.bn=s([254,253,251,247,239,223,191,127],t.t)
B.ay=s([A.rM(),A.rE(),A.rT(),A.rR(),A.rO(),A.rN(),A.rP()],t.A)
B.aG=new A.a4(0,"whiteIsZero")
B.jV=new A.a4(1,"blackIsZero")
B.k1=new A.a4(2,"rgb")
B.aI=new A.a4(3,"palette")
B.k2=new A.a4(4,"transparencyMask")
B.c8=new A.a4(5,"cmyk")
B.k3=new A.a4(6,"yCbCr")
B.k4=new A.a4(7,"reserved7")
B.k5=new A.a4(8,"cieLab")
B.k6=new A.a4(9,"iccLab")
B.jW=new A.a4(10,"ituLab")
B.jX=new A.a4(11,"logL")
B.jY=new A.a4(12,"logLuv")
B.jZ=new A.a4(13,"colorFilterArray")
B.k_=new A.a4(14,"linearRaw")
B.k0=new A.a4(15,"depth")
B.aH=new A.a4(16,"unknown")
B.bp=s([B.aG,B.jV,B.k1,B.aI,B.k2,B.c8,B.k3,B.k4,B.k5,B.k6,B.jW,B.jX,B.jY,B.jZ,B.k_,B.k0,B.aH],A.a_("u<a4>"))
B.br=s([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],t.t)
B.bU=new A.er(0,"source")
B.bV=new A.er(1,"over")
B.bs=s([B.bU,B.bV],A.a_("u<er>"))
B.jN=new A.cr(0,"invalid")
B.c6=new A.cr(1,"uint")
B.h=new A.cr(2,"int")
B.Z=new A.cr(3,"float")
B.bt=s([B.jN,B.c6,B.h,B.Z],A.a_("u<cr>"))
B.bu=s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],t.t)
B.a8=s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],t.t)
B.bv=s([B.d,B.aW,B.k,B.j,B.n,B.r,B.b0,B.E,B.b1,B.b2,B.aX,B.aY,B.aZ,B.b_],A.a_("u<ad>"))
B.bw=s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],t.t)
B.cD=new A.aU(1,"rle")
B.cE=new A.aU(2,"zips")
B.cF=new A.aU(3,"zip")
B.cG=new A.aU(4,"piz")
B.cH=new A.aU(5,"pxr24")
B.cI=new A.aU(6,"b44")
B.cJ=new A.aU(7,"b44a")
B.bx=s([B.aT,B.cD,B.cE,B.cF,B.cG,B.cH,B.cI,B.cJ],A.a_("u<aU>"))
B.hL=s([231,120,48,89,115,113,120,152,112],t.t)
B.dl=s([152,179,64,126,170,118,46,70,95],t.t)
B.fU=s([175,69,143,80,85,82,72,155,103],t.t)
B.dG=s([56,58,10,171,218,189,17,13,152],t.t)
B.hg=s([114,26,17,163,44,195,21,10,173],t.t)
B.hr=s([121,24,80,195,26,62,44,64,85],t.t)
B.hc=s([144,71,10,38,171,213,144,34,26],t.t)
B.iF=s([170,46,55,19,136,160,33,206,71],t.t)
B.eS=s([63,20,8,114,114,208,12,9,226],t.t)
B.fs=s([81,40,11,96,182,84,29,16,36],t.t)
B.d8=s([B.hL,B.dl,B.fU,B.dG,B.hg,B.hr,B.hc,B.iF,B.eS,B.fs],t.S)
B.es=s([134,183,89,137,98,101,106,165,148],t.t)
B.iq=s([72,187,100,130,157,111,32,75,80],t.t)
B.hy=s([66,102,167,99,74,62,40,234,128],t.t)
B.ds=s([41,53,9,178,241,141,26,8,107],t.t)
B.fo=s([74,43,26,146,73,166,49,23,157],t.t)
B.f_=s([65,38,105,160,51,52,31,115,128],t.t)
B.f2=s([104,79,12,27,217,255,87,17,7],t.t)
B.fS=s([87,68,71,44,114,51,15,186,23],t.t)
B.ih=s([47,41,14,110,182,183,21,17,194],t.t)
B.hW=s([66,45,25,102,197,189,23,18,22],t.t)
B.iT=s([B.es,B.iq,B.hy,B.ds,B.fo,B.f_,B.f2,B.fS,B.ih,B.hW],t.S)
B.hK=s([88,88,147,150,42,46,45,196,205],t.t)
B.hi=s([43,97,183,117,85,38,35,179,61],t.t)
B.f8=s([39,53,200,87,26,21,43,232,171],t.t)
B.fN=s([56,34,51,104,114,102,29,93,77],t.t)
B.h8=s([39,28,85,171,58,165,90,98,64],t.t)
B.eW=s([34,22,116,206,23,34,43,166,73],t.t)
B.d9=s([107,54,32,26,51,1,81,43,31],t.t)
B.iI=s([68,25,106,22,64,171,36,225,114],t.t)
B.er=s([34,19,21,102,132,188,16,76,124],t.t)
B.j1=s([62,18,78,95,85,57,50,48,51],t.t)
B.eE=s([B.hK,B.hi,B.f8,B.fN,B.h8,B.eW,B.d9,B.iI,B.er,B.j1],t.S)
B.h5=s([193,101,35,159,215,111,89,46,111],t.t)
B.e7=s([60,148,31,172,219,228,21,18,111],t.t)
B.dL=s([112,113,77,85,179,255,38,120,114],t.t)
B.iZ=s([40,42,1,196,245,209,10,25,109],t.t)
B.fE=s([88,43,29,140,166,213,37,43,154],t.t)
B.eY=s([61,63,30,155,67,45,68,1,209],t.t)
B.fe=s([100,80,8,43,154,1,51,26,71],t.t)
B.dv=s([142,78,78,16,255,128,34,197,171],t.t)
B.h0=s([41,40,5,102,211,183,4,1,221],t.t)
B.eK=s([51,50,17,168,209,192,23,25,82],t.t)
B.eD=s([B.h5,B.e7,B.dL,B.iZ,B.fE,B.eY,B.fe,B.dv,B.h0,B.eK],t.S)
B.f5=s([138,31,36,171,27,166,38,44,229],t.t)
B.eB=s([67,87,58,169,82,115,26,59,179],t.t)
B.i4=s([63,59,90,180,59,166,93,73,154],t.t)
B.iQ=s([40,40,21,116,143,209,34,39,175],t.t)
B.dA=s([47,15,16,183,34,223,49,45,183],t.t)
B.ed=s([46,17,33,183,6,98,15,32,183],t.t)
B.jv=s([57,46,22,24,128,1,54,17,37],t.t)
B.fg=s([65,32,73,115,28,128,23,128,205],t.t)
B.hx=s([40,3,9,115,51,192,18,6,223],t.t)
B.fm=s([87,37,9,115,59,77,64,21,47],t.t)
B.h_=s([B.f5,B.eB,B.i4,B.iQ,B.dA,B.ed,B.jv,B.fg,B.hx,B.fm],t.S)
B.ji=s([104,55,44,218,9,54,53,130,226],t.t)
B.dW=s([64,90,70,205,40,41,23,26,57],t.t)
B.i3=s([54,57,112,184,5,41,38,166,213],t.t)
B.eX=s([30,34,26,133,152,116,10,32,134],t.t)
B.hR=s([39,19,53,221,26,114,32,73,255],t.t)
B.eI=s([31,9,65,234,2,15,1,118,73],t.t)
B.fZ=s([75,32,12,51,192,255,160,43,51],t.t)
B.eZ=s([88,31,35,67,102,85,55,186,85],t.t)
B.fx=s([56,21,23,111,59,205,45,37,192],t.t)
B.fy=s([55,38,70,124,73,102,1,34,98],t.t)
B.jm=s([B.ji,B.dW,B.i3,B.eX,B.hR,B.eI,B.fZ,B.eZ,B.fx,B.fy],t.S)
B.fw=s([125,98,42,88,104,85,117,175,82],t.t)
B.f1=s([95,84,53,89,128,100,113,101,45],t.t)
B.hm=s([75,79,123,47,51,128,81,171,1],t.t)
B.dU=s([57,17,5,71,102,57,53,41,49],t.t)
B.hZ=s([38,33,13,121,57,73,26,1,85],t.t)
B.jb=s([41,10,67,138,77,110,90,47,114],t.t)
B.fX=s([115,21,2,10,102,255,166,23,6],t.t)
B.eu=s([101,29,16,10,85,128,101,196,26],t.t)
B.fc=s([57,18,10,102,102,213,34,20,43],t.t)
B.fD=s([117,20,15,36,163,128,68,1,26],t.t)
B.fR=s([B.fw,B.f1,B.hm,B.dU,B.hZ,B.jb,B.fX,B.eu,B.fc,B.fD],t.S)
B.fk=s([102,61,71,37,34,53,31,243,192],t.t)
B.j8=s([69,60,71,38,73,119,28,222,37],t.t)
B.fn=s([68,45,128,34,1,47,11,245,171],t.t)
B.dd=s([62,17,19,70,146,85,55,62,70],t.t)
B.jr=s([37,43,37,154,100,163,85,160,1],t.t)
B.j5=s([63,9,92,136,28,64,32,201,85],t.t)
B.it=s([75,15,9,9,64,255,184,119,16],t.t)
B.ez=s([86,6,28,5,64,255,25,248,1],t.t)
B.hV=s([56,8,17,132,137,255,55,116,128],t.t)
B.dQ=s([58,15,20,82,135,57,26,121,40],t.t)
B.hb=s([B.fk,B.j8,B.fn,B.dd,B.jr,B.j5,B.it,B.ez,B.hV,B.dQ],t.S)
B.hp=s([164,50,31,137,154,133,25,35,218],t.t)
B.ey=s([51,103,44,131,131,123,31,6,158],t.t)
B.j3=s([86,40,64,135,148,224,45,183,128],t.t)
B.fT=s([22,26,17,131,240,154,14,1,209],t.t)
B.ea=s([45,16,21,91,64,222,7,1,197],t.t)
B.iR=s([56,21,39,155,60,138,23,102,213],t.t)
B.jl=s([83,12,13,54,192,255,68,47,28],t.t)
B.hz=s([85,26,85,85,128,128,32,146,171],t.t)
B.fP=s([18,11,7,63,144,171,4,4,246],t.t)
B.eF=s([35,27,10,146,174,171,12,26,128],t.t)
B.fI=s([B.hp,B.ey,B.j3,B.fT,B.ea,B.iR,B.jl,B.hz,B.fP,B.eF],t.S)
B.ic=s([190,80,35,99,180,80,126,54,45],t.t)
B.iE=s([85,126,47,87,176,51,41,20,32],t.t)
B.i0=s([101,75,128,139,118,146,116,128,85],t.t)
B.ip=s([56,41,15,176,236,85,37,9,62],t.t)
B.dR=s([71,30,17,119,118,255,17,18,138],t.t)
B.ha=s([101,38,60,138,55,70,43,26,142],t.t)
B.fL=s([146,36,19,30,171,255,97,27,20],t.t)
B.hJ=s([138,45,61,62,219,1,81,188,64],t.t)
B.j_=s([32,41,20,117,151,142,20,21,163],t.t)
B.iG=s([112,19,12,61,195,128,48,4,24],t.t)
B.i7=s([B.ic,B.iE,B.i0,B.ip,B.dR,B.ha,B.fL,B.hJ,B.j_,B.iG],t.S)
B.by=s([B.d8,B.iT,B.eE,B.eD,B.h_,B.jm,B.fR,B.hb,B.fI,B.i7],t.o)
B.aj=new A.at(0,"none")
B.G=new A.at(1,"palette")
B.c5=new A.at(2,"rgb")
B.jH=new A.at(3,"gray")
B.jI=new A.at(4,"reserved4")
B.jJ=new A.at(5,"reserved5")
B.jK=new A.at(6,"reserved6")
B.jL=new A.at(7,"reserved7")
B.jM=new A.at(8,"reserved8")
B.H=new A.at(9,"paletteRle")
B.c4=new A.at(10,"rgbRle")
B.jG=new A.at(11,"grayRle")
B.bz=s([B.aj,B.G,B.c5,B.jH,B.jI,B.jJ,B.jK,B.jL,B.jM,B.H,B.c4,B.jG],A.a_("u<at>"))
B.bA=s([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250],t.t)
B.hk=s([0,1,1,1,0],t.t)
B.bB=s([A.rw(),A.rD(),A.rF(),A.ry(),A.rB(),A.rH(),A.rA(),A.rG(),A.rx(),A.rz()],t.A)
B.av=s([8,0,8,0],t.t)
B.dV=s([5,3,5,3],t.t)
B.dy=s([3,5,3,5],t.t)
B.b3=s([0,8,0,8],t.t)
B.b8=s([4,4,4,4],t.t)
B.dK=s([4,4,0,0],t.t)
B.bC=s([B.av,B.dV,B.dy,B.b3,B.av,B.b8,B.dK,B.b3],t.S)
B.a9=s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],t.t)
B.hG=s([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],t.t)
B.P=s([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],t.t)
B.bD=s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],t.t)
B.aa=s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],t.t)
B.F=s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],t.t)
B.ab=s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],t.t)
B.i1=s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],t.t)
B.ad=s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],t.t)
B.jx=new A.bJ(0,"none")
B.jy=new A.bJ(1,"sub")
B.jz=new A.bJ(2,"up")
B.jA=new A.bJ(3,"average")
B.jB=new A.bJ(4,"paeth")
B.ae=s([B.jx,B.jy,B.jz,B.jA,B.jB],A.a_("u<bJ>"))
B.x=s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],t.t)
B.y=s([0,1,3,7,15,31,63,127,255],t.t)
B.iu=s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],t.t)
B.u=s([255,255,255,255,255,255,255,255,255,255,255],t.t)
B.R=s([B.u,B.u,B.u],t.S)
B.fM=s([176,246,255,255,255,255,255,255,255,255,255],t.t)
B.je=s([223,241,252,255,255,255,255,255,255,255,255],t.t)
B.eo=s([249,253,253,255,255,255,255,255,255,255,255],t.t)
B.fY=s([B.fM,B.je,B.eo],t.S)
B.fu=s([255,244,252,255,255,255,255,255,255,255,255],t.t)
B.fi=s([234,254,254,255,255,255,255,255,255,255,255],t.t)
B.bH=s([253,255,255,255,255,255,255,255,255,255,255],t.t)
B.ex=s([B.fu,B.fi,B.bH],t.S)
B.j2=s([255,246,254,255,255,255,255,255,255,255,255],t.t)
B.hS=s([239,253,254,255,255,255,255,255,255,255,255],t.t)
B.bE=s([254,255,254,255,255,255,255,255,255,255,255],t.t)
B.ir=s([B.j2,B.hS,B.bE],t.S)
B.bo=s([255,248,254,255,255,255,255,255,255,255,255],t.t)
B.eO=s([251,255,254,255,255,255,255,255,255,255,255],t.t)
B.hq=s([B.bo,B.eO,B.u],t.S)
B.au=s([255,253,254,255,255,255,255,255,255,255,255],t.t)
B.ho=s([251,254,254,255,255,255,255,255,255,255,255],t.t)
B.eV=s([B.au,B.ho,B.bE],t.S)
B.dE=s([255,254,253,255,254,255,255,255,255,255,255],t.t)
B.fq=s([250,255,254,255,254,255,255,255,255,255,255],t.t)
B.ac=s([254,255,255,255,255,255,255,255,255,255,255],t.t)
B.fF=s([B.dE,B.fq,B.ac],t.S)
B.fb=s([B.R,B.fY,B.ex,B.ir,B.hq,B.eV,B.fF,B.R],t.o)
B.dj=s([217,255,255,255,255,255,255,255,255,255,255],t.t)
B.fJ=s([225,252,241,253,255,255,254,255,255,255,255],t.t)
B.i2=s([234,250,241,250,253,255,253,254,255,255,255],t.t)
B.iH=s([B.dj,B.fJ,B.i2],t.S)
B.aA=s([255,254,255,255,255,255,255,255,255,255,255],t.t)
B.eq=s([223,254,254,255,255,255,255,255,255,255,255],t.t)
B.eb=s([238,253,254,254,255,255,255,255,255,255,255],t.t)
B.hP=s([B.aA,B.eq,B.eb],t.S)
B.fl=s([249,254,255,255,255,255,255,255,255,255,255],t.t)
B.j0=s([B.bo,B.fl,B.u],t.S)
B.iJ=s([255,253,255,255,255,255,255,255,255,255,255],t.t)
B.hn=s([247,254,255,255,255,255,255,255,255,255,255],t.t)
B.he=s([B.iJ,B.hn,B.u],t.S)
B.e6=s([252,255,255,255,255,255,255,255,255,255,255],t.t)
B.du=s([B.au,B.e6,B.u],t.S)
B.bJ=s([255,254,254,255,255,255,255,255,255,255,255],t.t)
B.e9=s([B.bJ,B.bH,B.u],t.S)
B.hN=s([255,254,253,255,255,255,255,255,255,255,255],t.t)
B.bq=s([250,255,255,255,255,255,255,255,255,255,255],t.t)
B.e4=s([B.hN,B.bq,B.ac],t.S)
B.dH=s([B.iH,B.hP,B.j0,B.he,B.du,B.e9,B.e4,B.R],t.o)
B.i9=s([186,251,250,255,255,255,255,255,255,255,255],t.t)
B.eL=s([234,251,244,254,255,255,255,255,255,255,255],t.t)
B.is=s([251,251,243,253,254,255,254,255,255,255,255],t.t)
B.eT=s([B.i9,B.eL,B.is],t.S)
B.eQ=s([236,253,254,255,255,255,255,255,255,255,255],t.t)
B.hM=s([251,253,253,254,254,255,255,255,255,255,255],t.t)
B.fz=s([B.au,B.eQ,B.hM],t.S)
B.ib=s([254,254,254,255,255,255,255,255,255,255,255],t.t)
B.eM=s([B.bJ,B.ib,B.u],t.S)
B.ix=s([254,254,255,255,255,255,255,255,255,255,255],t.t)
B.eP=s([B.aA,B.ix,B.ac],t.S)
B.bK=s([B.u,B.ac,B.u],t.S)
B.dF=s([B.eT,B.fz,B.eM,B.eP,B.bK,B.R,B.R,B.R],t.o)
B.fp=s([248,255,255,255,255,255,255,255,255,255,255],t.t)
B.f0=s([250,254,252,254,255,255,255,255,255,255,255],t.t)
B.eJ=s([248,254,249,253,255,255,255,255,255,255,255],t.t)
B.fB=s([B.fp,B.f0,B.eJ],t.S)
B.dC=s([255,253,253,255,255,255,255,255,255,255,255],t.t)
B.iM=s([246,253,253,255,255,255,255,255,255,255,255],t.t)
B.eU=s([252,254,251,254,254,255,255,255,255,255,255],t.t)
B.iL=s([B.dC,B.iM,B.eU],t.S)
B.jq=s([255,254,252,255,255,255,255,255,255,255,255],t.t)
B.eH=s([248,254,253,255,255,255,255,255,255,255,255],t.t)
B.e3=s([253,255,254,254,255,255,255,255,255,255,255],t.t)
B.hw=s([B.jq,B.eH,B.e3],t.S)
B.jk=s([255,251,254,255,255,255,255,255,255,255,255],t.t)
B.h6=s([245,251,254,255,255,255,255,255,255,255,255],t.t)
B.h9=s([253,253,254,255,255,255,255,255,255,255,255],t.t)
B.el=s([B.jk,B.h6,B.h9],t.S)
B.em=s([255,251,253,255,255,255,255,255,255,255,255],t.t)
B.fv=s([252,253,254,255,255,255,255,255,255,255,255],t.t)
B.ij=s([B.em,B.fv,B.aA],t.S)
B.e_=s([255,252,255,255,255,255,255,255,255,255,255],t.t)
B.jh=s([249,255,254,255,255,255,255,255,255,255,255],t.t)
B.f3=s([255,255,254,255,255,255,255,255,255,255,255],t.t)
B.dc=s([B.e_,B.jh,B.f3],t.S)
B.js=s([255,255,253,255,255,255,255,255,255,255,255],t.t)
B.eN=s([B.js,B.bq,B.u],t.S)
B.e2=s([B.fB,B.iL,B.hw,B.el,B.ij,B.dc,B.eN,B.bK],t.o)
B.iC=s([B.fb,B.dH,B.dF,B.e2],t.R)
B.cb=new A.ac(1,"rle8")
B.cg=new A.ac(2,"rle4")
B.ch=new A.ac(4,"jpeg")
B.ci=new A.ac(5,"png")
B.cj=new A.ac(7,"reserved7")
B.ck=new A.ac(8,"reserved8")
B.cl=new A.ac(9,"reserved9")
B.cc=new A.ac(10,"reserved10")
B.cd=new A.ac(11,"cmyk")
B.ce=new A.ac(12,"cmykRle8")
B.cf=new A.ac(13,"cmykRle4")
B.af=s([B.aL,B.cb,B.cg,B.am,B.ch,B.ci,B.an,B.cj,B.ck,B.cl,B.cc,B.cd,B.ce,B.cf],A.a_("u<ac>"))
B.Q=s([0,128,192,224,240,248,252,254,255],t.t)
B.bF=s([137,80,78,71,13,10,26,10],t.t)
B.V=s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],t.t)
B.bG=s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],t.t)
B.iP=s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],t.t)
B.c9=new A.cs(0,"predictor")
B.kl=new A.cs(1,"crossColor")
B.km=new A.cs(2,"subtractGreen")
B.ca=new A.cs(3,"colorIndexing")
B.bI=s([B.c9,B.kl,B.km,B.ca],A.a_("u<cs>"))
B.v=s([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],t.t)
B.j6=s([73,67,67,95,80,82,79,70,73,76,69,0],t.t)
B.bL=s([A.rI(),A.rC(),A.rS(),A.rQ(),A.rK(),A.rJ(),A.rL()],t.A)
B.bM=s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],t.t)
B.bN=s([null,A.t7(),A.t8(),A.t6()],A.a_("u<~(h,h,h,h,h,bv)?>"))
B.ag=s([0,36,72,109,145,182,218,255],t.t)
B.q=s([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],t.t)
B.jg=s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],t.t)
B.jC=new A.b_(0,"bitmap")
B.c0=new A.b_(1,"grayscale")
B.jD=new A.b_(2,"indexed")
B.c1=new A.b_(3,"rgb")
B.c2=new A.b_(4,"cmyk")
B.jE=new A.b_(5,"multiChannel")
B.jF=new A.b_(6,"duoTone")
B.c3=new A.b_(7,"lab")
B.bO=s([B.jC,B.c0,B.jD,B.c1,B.c2,B.jE,B.jF,B.c3],A.a_("u<b_>"))
B.bP=s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],t.t)
B.bQ=s([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],t.t)
B.dp=s([2,6,2,6],t.t)
B.e0=s([6,2,6,2],t.t)
B.dn=s([2,2,6,6],t.t)
B.di=s([1,3,3,9],t.t)
B.dI=s([4,0,12,0],t.t)
B.dw=s([3,1,9,3],t.t)
B.ej=s([8,8,0,0],t.t)
B.dJ=s([4,12,0,0],t.t)
B.df=s([16,0,0,0],t.t)
B.db=s([12,4,0,0],t.t)
B.e1=s([6,6,2,2],t.t)
B.dz=s([3,9,1,3],t.t)
B.da=s([12,0,4,0],t.t)
B.en=s([9,3,3,1],t.t)
B.m=s([B.b8,B.dp,B.av,B.e0,B.dn,B.di,B.dI,B.dw,B.ej,B.dJ,B.df,B.db,B.e1,B.dz,B.da,B.en],t.S)
B.S=s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],t.t)
B.bR=new A.c_([34665,"exif",40965,"interop",34853,"gps"],A.a_("c_<h,E>"))
B.bS=new A.c_([B.w,1,B.A,3,B.B,15,B.e,255,B.l,65535,B.J,4294967295,B.M,127,B.N,32767,B.O,2147483647,B.D,1,B.I,1,B.L,1],A.a_("c_<ao,h>"))
B.Y=new A.bK(0,"invalid")
B.bY=new A.bK(1,"pbm")
B.bZ=new A.bK(2,"pgm2")
B.aD=new A.bK(3,"pgm5")
B.c_=new A.bK(4,"ppm3")
B.aE=new A.bK(5,"ppm6")
B.aF=new A.aN(0,"bilevel")
B.jO=new A.aN(1,"gray4bit")
B.jP=new A.aN(2,"gray")
B.jQ=new A.aN(3,"grayAlpha")
B.jR=new A.aN(4,"palette")
B.c7=new A.aN(5,"rgb")
B.jS=new A.aN(6,"rgba")
B.jT=new A.aN(7,"yCbCrSub")
B.a_=new A.aN(8,"generic")
B.jU=new A.aN(9,"invalid")
B.k7=A.b5("t9")
B.k8=A.b5("nL")
B.k9=A.b5("i8")
B.ka=A.b5("kx")
B.kb=A.b5("ik")
B.kc=A.b5("dW")
B.kd=A.b5("kD")
B.ke=A.b5("D")
B.kf=A.b5("l5")
B.kg=A.b5("bu")
B.kh=A.b5("oQ")
B.ki=A.b5("bv")
B.kj=new A.ht(!1)
B.kk=new A.ht(!0)
B.a0=new A.dn(0,"undefined")
B.aK=new A.dn(1,"lossy")
B.ak=new A.dn(2,"lossless")
B.kn=new A.dn(3,"animated")})();(function staticFields(){$.jB=null
$.aG=A.j([],A.a_("u<D>"))
$.mj=null
$.lF=null
$.lE=null
$.na=null
$.n1=null
$.nc=null
$.jY=null
$.k9=null
$.lm=null
$.jF=A.j([],A.a_("u<p<D>?>"))
$.du=null
$.f3=null
$.f4=null
$.li=!1
$.a6=B.z
$.n0=null
$.le=null
$.lf=null
$.mv=!1
$.pu=A.j([A.lq(),A.rU(),A.rZ(),A.t_(),A.t0(),A.t1(),A.t2(),A.t3(),A.t4(),A.t5(),A.rV(),A.rW(),A.rX(),A.rY(),A.lq(),A.lq()],A.a_("u<h(h,bu,h)>"))
$.Q=null
$.lL=A.pK()})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"tb","nf",()=>A.n9("_$dart_dartClosure"))
s($,"ta","lr",()=>A.n9("_$dart_dartClosure_dartJSInterop"))
s($,"tR","nA",()=>A.j([new J.fO()],A.a_("u<ew>")))
s($,"ti","nj",()=>A.bt(A.j_({
toString:function(){return"$receiver$"}})))
s($,"tj","nk",()=>A.bt(A.j_({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"tk","nl",()=>A.bt(A.j_(null)))
s($,"tl","nm",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"to","np",()=>A.bt(A.j_(void 0)))
s($,"tp","nq",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"tn","no",()=>A.bt(A.mq(null)))
s($,"tm","nn",()=>A.bt(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"tr","ns",()=>A.bt(A.mq(void 0)))
s($,"tq","nr",()=>A.bt(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"tx","ls",()=>A.pC())
s($,"tC","nx",()=>A.ed(4096))
s($,"tA","nv",()=>new A.jN().$0())
s($,"tB","nw",()=>new A.jM().$0())
s($,"tz","nu",()=>A.oo(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))
s($,"ty","nt",()=>A.ed(0))
s($,"tQ","hT",()=>A.hP(B.ke))
s($,"td","nh",()=>A.kz(B.jg,!1))
s($,"tc","ng",()=>A.kz(B.i1,!1))
s($,"tT","lv",()=>{var q=null,p="ISOSpeed"
return A.h_([11,A.i("ProcessingSoftware",B.k,q),254,A.i("SubfileType",B.n,1),255,A.i("OldSubfileType",B.n,1),256,A.i("ImageWidth",B.n,1),257,A.i("ImageLength",B.n,1),258,A.i("BitsPerSample",B.j,1),259,A.i("Compression",B.j,1),262,A.i("PhotometricInterpretation",B.j,1),263,A.i("Thresholding",B.j,1),264,A.i("CellWidth",B.j,1),265,A.i("CellLength",B.j,1),266,A.i("FillOrder",B.j,1),269,A.i("DocumentName",B.k,q),270,A.i("ImageDescription",B.k,q),271,A.i("Make",B.k,q),272,A.i("Model",B.k,q),273,A.i("StripOffsets",B.n,q),274,A.i("Orientation",B.j,1),277,A.i("SamplesPerPixel",B.j,1),278,A.i("RowsPerStrip",B.n,1),279,A.i("StripByteCounts",B.n,1),280,A.i("MinSampleValue",B.j,1),281,A.i("MaxSampleValue",B.j,1),282,A.i("XResolution",B.r,1),283,A.i("YResolution",B.r,1),284,A.i("PlanarConfiguration",B.j,1),285,A.i("PageName",B.k,q),286,A.i("XPosition",B.r,1),287,A.i("YPosition",B.r,1),290,A.i("GrayResponseUnit",B.j,1),291,A.i("GrayResponseCurve",B.d,q),292,A.i("T4Options",B.d,q),293,A.i("T6Options",B.d,q),296,A.i("ResolutionUnit",B.j,1),297,A.i("PageNumber",B.j,2),300,A.i("ColorResponseUnit",B.d,q),301,A.i("TransferFunction",B.j,768),305,A.i("Software",B.k,q),306,A.i("DateTime",B.k,q),315,A.i("Artist",B.k,q),316,A.i("HostComputer",B.k,q),317,A.i("Predictor",B.j,1),318,A.i("WhitePoint",B.r,2),319,A.i("PrimaryChromaticities",B.r,6),320,A.i("ColorMap",B.j,q),321,A.i("HalftoneHints",B.j,2),322,A.i("TileWidth",B.n,1),323,A.i("TileLength",B.n,1),324,A.i("TileOffsets",B.n,q),325,A.i("TileByteCounts",B.d,q),326,A.i("BadFaxLines",B.d,q),327,A.i("CleanFaxData",B.d,q),328,A.i("ConsecutiveBadFaxLines",B.d,q),332,A.i("InkSet",B.d,q),333,A.i("InkNames",B.d,q),334,A.i("NumberofInks",B.d,q),336,A.i("DotRange",B.d,q),337,A.i("TargetPrinter",B.k,q),338,A.i("ExtraSamples",B.d,q),339,A.i("SampleFormat",B.j,1),340,A.i("SMinSampleValue",B.d,q),341,A.i("SMaxSampleValue",B.d,q),342,A.i("TransferRange",B.d,q),343,A.i("ClipPath",B.d,q),512,A.i("JPEGProc",B.d,q),513,A.i("JPEGInterchangeFormat",B.d,q),514,A.i("JPEGInterchangeFormatLength",B.d,q),529,A.i("YCbCrCoefficients",B.r,3),530,A.i("YCbCrSubSampling",B.j,1),531,A.i("YCbCrPositioning",B.j,1),532,A.i("ReferenceBlackWhite",B.r,6),700,A.i("ApplicationNotes",B.j,1),18246,A.i("Rating",B.j,1),33421,A.i("CFARepeatPatternDim",B.d,q),33422,A.i("CFAPattern",B.d,q),33423,A.i("BatteryLevel",B.d,q),33432,A.i("Copyright",B.k,q),33434,A.i("ExposureTime",B.r,1),33437,A.i("FNumber",B.r,q),33723,A.i("IPTC-NAA",B.n,1),34665,A.i("ExifOffset",B.d,q),34675,A.i("InterColorProfile",B.d,q),34850,A.i("ExposureProgram",B.j,1),34852,A.i("SpectralSensitivity",B.k,q),34853,A.i("GPSOffset",B.d,q),34855,A.i(p,B.n,1),34856,A.i("OECF",B.d,q),34864,A.i("SensitivityType",B.j,1),34866,A.i("RecommendedExposureIndex",B.n,1),34867,A.i(p,B.n,1),36864,A.i("ExifVersion",B.E,q),36867,A.i("DateTimeOriginal",B.k,q),36868,A.i("DateTimeDigitized",B.k,q),36880,A.i("OffsetTime",B.k,q),36881,A.i("OffsetTimeOriginal",B.k,q),36882,A.i("OffsetTimeDigitized",B.k,q),37121,A.i("ComponentsConfiguration",B.E,q),37122,A.i("CompressedBitsPerPixel",B.d,q),37377,A.i("ShutterSpeedValue",B.d,q),37378,A.i("ApertureValue",B.d,q),37379,A.i("BrightnessValue",B.d,q),37380,A.i("ExposureBiasValue",B.d,q),37381,A.i("MaxApertureValue",B.d,q),37382,A.i("SubjectDistance",B.d,q),37383,A.i("MeteringMode",B.d,q),37384,A.i("LightSource",B.d,q),37385,A.i("Flash",B.d,q),37386,A.i("FocalLength",B.d,q),37396,A.i("SubjectArea",B.d,q),37500,A.i("MakerNote",B.E,q),37510,A.i("UserComment",B.E,q),37520,A.i("SubSecTime",B.d,q),37521,A.i("SubSecTimeOriginal",B.d,q),37522,A.i("SubSecTimeDigitized",B.d,q),40091,A.i("XPTitle",B.d,q),40092,A.i("XPComment",B.d,q),40093,A.i("XPAuthor",B.d,q),40094,A.i("XPKeywords",B.d,q),40095,A.i("XPSubject",B.d,q),40960,A.i("FlashPixVersion",B.d,q),40961,A.i("ColorSpace",B.j,1),40962,A.i("ExifImageWidth",B.j,1),40963,A.i("ExifImageLength",B.j,1),40964,A.i("RelatedSoundFile",B.d,q),40965,A.i("InteroperabilityOffset",B.d,q),41483,A.i("FlashEnergy",B.d,q),41484,A.i("SpatialFrequencyResponse",B.d,q),41486,A.i("FocalPlaneXResolution",B.d,q),41487,A.i("FocalPlaneYResolution",B.d,q),41488,A.i("FocalPlaneResolutionUnit",B.d,q),41492,A.i("SubjectLocation",B.d,q),41493,A.i("ExposureIndex",B.d,q),41495,A.i("SensingMethod",B.d,q),41728,A.i("FileSource",B.d,q),41729,A.i("SceneType",B.d,q),41730,A.i("CVAPattern",B.d,q),41985,A.i("CustomRendered",B.d,q),41986,A.i("ExposureMode",B.d,q),41987,A.i("WhiteBalance",B.d,q),41988,A.i("DigitalZoomRatio",B.d,q),41989,A.i("FocalLengthIn35mmFilm",B.d,q),41990,A.i("SceneCaptureType",B.d,q),41991,A.i("GainControl",B.d,q),41992,A.i("Contrast",B.d,q),41993,A.i("Saturation",B.d,q),41994,A.i("Sharpness",B.d,q),41995,A.i("DeviceSettingDescription",B.d,q),41996,A.i("SubjectDistanceRange",B.d,q),42016,A.i("ImageUniqueID",B.d,q),42032,A.i("CameraOwnerName",B.k,q),42033,A.i("BodySerialNumber",B.k,q),42034,A.i("LensSpecification",B.d,q),42035,A.i("LensMake",B.k,q),42036,A.i("LensModel",B.k,q),42037,A.i("LensSerialNumber",B.k,q),42240,A.i("Gamma",B.r,1),50341,A.i("PrintIM",B.d,q),59932,A.i("Padding",B.d,q),59933,A.i("OffsetSchema",B.d,q),65e3,A.i("OwnerName",B.k,q),65001,A.i("SerialNumber",B.k,q)],t.p,A.a_("fm"))})
s($,"te","hQ",()=>A.ou(A.j([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],t.t)))
r($,"ts","hR",()=>A.ed(511))
r($,"tt","km",()=>A.ed(511))
r($,"tv","kn",()=>A.mf(2041))
r($,"tw","ko",()=>A.mf(225))
r($,"tu","aB",()=>A.ed(766))
s($,"tg","ni",()=>A.lY(0,0,0))
s($,"tO","am",()=>A.ed(1))
s($,"tP","aw",()=>A.od(B.f.gB($.am()),0,null))
s($,"tH","al",()=>A.oq(1))
s($,"tI","av",()=>J.nC(B.X.gB($.al()),0,null))
s($,"tJ","M",()=>A.os(1))
s($,"tL","a3",()=>J.nD(B.o.gB($.M()),0,null))
s($,"tK","bS",()=>A.o5(B.o.gB($.M())))
s($,"tF","hS",()=>A.om(1))
s($,"tG","kp",()=>A.mr(B.W.gB($.hS()),0))
s($,"tD","lt",()=>A.oj(1))
s($,"tE","ny",()=>A.mr(B.ah.gB($.lt()),0))
s($,"tM","lu",()=>A.oP(1))
s($,"tN","nz",()=>{var q=$.lu()
return A.o6(q.gB(q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ca,SharedArrayBuffer:A.ca,ArrayBufferView:A.e9,DataView:A.h1,Float32Array:A.e4,Float64Array:A.e5,Int16Array:A.e6,Int32Array:A.e7,Int8Array:A.e8,Uint16Array:A.ea,Uint32Array:A.eb,Uint8ClampedArray:A.ec,CanvasPixelArray:A.ec,Uint8Array:A.cb})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aa.$nativeSuperclassTag="ArrayBufferView"
A.eR.$nativeSuperclassTag="ArrayBufferView"
A.eS.$nativeSuperclassTag="ArrayBufferView"
A.bI.$nativeSuperclassTag="ArrayBufferView"
A.eT.$nativeSuperclassTag="ArrayBufferView"
A.eU.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2$0=function(){return this()}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.rm
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=rubik_scan_worker.js.map
