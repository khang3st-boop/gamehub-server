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
if(a[b]!==s){A.ts(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.m_(b)
return new s(c,this)}:function(){if(s===null)s=A.m_(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.m_(a).prototype
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
m2(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kI(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.m0==null){A.tc()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.h(A.n8("Return interceptor for "+A.C(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k1
if(o==null)o=$.k1=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ti(a)
if(p!=null)return p
if(typeof a=="function")return B.d7
s=Object.getPrototypeOf(a)
if(s==null)return B.bZ
if(s===Object.prototype)return B.bZ
if(typeof q=="function"){o=$.k1
if(o==null)o=$.k1=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aN,enumerable:false,writable:true,configurable:true})
return B.aN}return B.aN},
mH(a,b){if(a<0||a>4294967295)throw A.h(A.ak(a,0,4294967295,"length",null))
return J.mI(new Array(a),b)},
am(a,b){if(a<0||a>4294967295)throw A.h(A.ak(a,0,4294967295,"length",null))
return J.mI(new Array(a),b)},
h6(a,b){if(a<0)throw A.h(A.bj("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.p("r<0>"))},
bJ(a,b){if(a<0)throw A.h(A.bj("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.p("r<0>"))},
mI(a,b){var s=A.j(a,b.p("r<0>"))
s.$flags=1
return s},
p_(a,b){var s=t.e8
return J.oo(s.a(a),s.a(b))},
mJ(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
p0(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.mJ(r))break;++b}return b},
p1(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.mJ(q))break}return b},
cF(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ec.prototype
return J.h8.prototype}if(typeof a=="string")return J.cc.prototype
if(a==null)return J.ed.prototype
if(typeof a=="boolean")return J.h7.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.D)return a
return J.kI(a)},
a1(a){if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.D)return a
return J.kI(a)},
al(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.D)return a
return J.kI(a)},
t7(a){if(typeof a=="number")return J.dc.prototype
if(typeof a=="string")return J.cc.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.du.prototype
return a},
bh(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.D)return a
return J.kI(a)},
aB(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cF(a).U(a,b)},
c(a,b){if(typeof b==="number")if(Array.isArray(a)||A.tg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.al(a).l(a,b)},
x(a,b,c){return J.al(a).h(a,b,c)},
ok(a,b,c){return J.bh(a).f7(a,b,c)},
mb(a,b,c){return J.bh(a).f8(a,b,c)},
ol(a,b,c){return J.bh(a).f9(a,b,c)},
om(a,b,c){return J.bh(a).fa(a,b,c)},
l1(a,b,c){return J.bh(a).fb(a,b,c)},
on(a){return J.bh(a).fc(a)},
mc(a,b,c){return J.bh(a).d8(a,b,c)},
aC(a,b,c){return J.bh(a).fd(a,b,c)},
ad(a){return J.bh(a).fe(a)},
a_(a,b,c){return J.bh(a).d9(a,b,c)},
oo(a,b){return J.t7(a).bE(a,b)},
md(a,b){return J.al(a).bb(a,b)},
bi(a,b,c,d){return J.al(a).aF(a,b,c,d)},
b9(a){return J.cF(a).gH(a)},
op(a){return J.a1(a).gak(a)},
fn(a){return J.al(a).gG(a)},
ba(a){return J.a1(a).gu(a)},
oq(a){return J.cF(a).gaG(a)},
me(a,b,c){return J.bh(a).fO(a,b,c)},
l2(a,b){return J.al(a).dh(a,b)},
l3(a,b,c){return J.al(a).b9(a,b,c)},
or(a,b){return J.al(a).fB(a,b)},
fo(a){return J.cF(a).B(a)},
fU:function fU(){},
h7:function h7(){},
ed:function ed(){},
ee:function ee(){},
bL:function bL(){},
hn:function hn(){},
du:function du(){},
bo:function bo(){},
dd:function dd(){},
de:function de(){},
r:function r(a){this.$ti=a},
h5:function h5(){},
iG:function iG(a){this.$ti=a},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dc:function dc(){},
ec:function ec(){},
h8:function h8(){},
cc:function cc(){}},A={lg:function lg(){},
ow(a,b,c){if(t.gw.b(a))return new A.eZ(a,b.p("@<0>").aI(c).p("eZ<1,2>"))
return new A.bY(a,b.p("@<0>").aI(c).p("bY<1,2>"))},
mL(a){return new A.df("Field '"+a+"' has been assigned during initialization.")},
mM(a){return new A.df("Field '"+a+"' has not been initialized.")},
p2(a){return new A.df("Field '"+a+"' has already been initialized.")},
bu(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ji(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
i4(a,b,c){return a},
m1(a){var s,r
for(s=$.aM.length,r=0;r<s;++r)if(a===$.aM[r])return!0
return!1},
eN(a,b,c,d){A.bt(b,"start")
if(c!=null){A.bt(c,"end")
if(b>c)A.ac(A.ak(b,0,c,"start",null))}return new A.cu(a,b,c,d.p("cu<0>"))},
h4(){return new A.ds("No element")},
mG(){return new A.ds("Too few elements")},
dz:function dz(){},
dN:function dN(a,b){this.a=a
this.$ti=b},
bY:function bY(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b){this.a=a
this.$ti=b},
bZ:function bZ(a,b){this.a=a
this.$ti=b},
ik:function ik(a,b){this.a=a
this.b=b},
df:function df(a){this.a=a},
aW:function aW(a){this.a=a},
jg:function jg(){},
A:function A(){},
a7:function a7(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bq:function bq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eh:function eh(a,b,c){this.a=a
this.b=b
this.$ti=c},
ei:function ei(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
au:function au(a,b,c){this.a=a
this.b=b
this.$ti=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.$ti=c},
eX:function eX(a,b,c){this.a=a
this.b=b
this.$ti=c},
dQ:function dQ(a){this.$ti=a},
dR:function dR(a){this.$ti=a},
aq:function aq(){},
bz:function bz(){},
dv:function dv(){},
nX(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tg(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.ez.b(a)},
C(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fo(a)
return s},
eI(a){var s,r=$.mX
if(r==null)r=$.mX=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ps(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.a(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hq(a){var s,r,q,p
if(a instanceof A.D)return A.aL(A.b7(a),null)
s=J.cF(a)
if(s===B.d5||s===B.d8||t.bI.b(a)){r=B.aQ(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aL(A.b7(a),null)},
mY(a){var s,r,q
if(a==null||typeof a=="number"||A.lW(a))return J.fo(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bE)return a.B(0)
if(a instanceof A.aK)return a.eZ(!0)
s=$.oj()
for(r=0;r<1;++r){q=s[r].kf(a)
if(q!=null)return q}return"Instance of '"+A.hq(a)+"'"},
pi(){return Date.now()},
pr(){var s,r
if($.j2!==0)return
$.j2=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.j2=1e6
$.lv=new A.j1(r)},
mW(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
pt(a){var s,r,q,p=A.j([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a3)(a),++r){q=a[r]
if(!A.ku(q))throw A.h(A.bV(q))
if(q<=65535)B.c.N(p,q)
else if(q<=1114111){B.c.N(p,55296+(B.a.j(q-65536,10)&1023))
B.c.N(p,56320+(q&1023))}else throw A.h(A.bV(q))}return A.mW(p)},
mZ(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ku(q))throw A.h(A.bV(q))
if(q<0)throw A.h(A.bV(q))
if(q>65535)return A.pt(a)}return A.mW(a)},
pu(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
V(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.j(s,10)|55296)>>>0,s&1023|56320)}throw A.h(A.ak(a,0,1114111,null,null))},
dj(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pq(a){var s=A.dj(a).getUTCFullYear()+0
return s},
po(a){var s=A.dj(a).getUTCMonth()+1
return s},
pk(a){var s=A.dj(a).getUTCDate()+0
return s},
pl(a){var s=A.dj(a).getUTCHours()+0
return s},
pn(a){var s=A.dj(a).getUTCMinutes()+0
return s},
pp(a){var s=A.dj(a).getUTCSeconds()+0
return s},
pm(a){var s=A.dj(a).getUTCMilliseconds()+0
return s},
pj(a){var s=a.$thrownJsError
if(s==null)return null
return A.fm(s)},
pv(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.a2(a,s)
a.$thrownJsError=s
s.stack=""}},
cG(a){throw A.h(A.bV(a))},
a(a,b){if(a==null)J.ba(a)
throw A.h(A.kz(a,b))},
kz(a,b){var s,r="index"
if(!A.ku(b))return new A.aV(!0,b,r,null)
s=J.ba(a)
if(b<0||b>=s)return A.lc(b,s,a,r)
return A.n0(b,r)},
t_(a,b,c){if(a<0||a>c)return A.ak(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ak(b,a,c,"end",null)
return new A.aV(!0,b,"end",null)},
bV(a){return new A.aV(!0,a,null,null)},
nM(a){return a},
h(a){return A.a2(a,new Error())},
a2(a,b){var s
if(a==null)a=new A.bv()
b.dartException=a
s=A.tu
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
tu(){return J.fo(this.dartException)},
ac(a,b){throw A.a2(a,b==null?new Error():b)},
b(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ac(A.r7(a,b,c),s)},
r7(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.eP("'"+s+"': Cannot "+o+" "+l+k+n)},
a3(a){throw A.h(A.aD(a))},
bw(a){var s,r,q,p,o,n
a=A.tp(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.jn(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jo(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
n5(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
li(a,b){var s=b==null,r=s?null:b.method
return new A.hd(a,r,s?null:b.receiver)},
bD(a){if(a==null)return new A.iX(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.cI(a,a.dartException)
return A.rR(a)},
cI(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
rR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.j(r,16)&8191)===10)switch(q){case 438:return A.cI(a,A.li(A.C(s)+" (Error "+q+")",null))
case 445:case 5007:A.C(s)
return A.cI(a,new A.et())}}if(a instanceof TypeError){p=$.o1()
o=$.o2()
n=$.o3()
m=$.o4()
l=$.o7()
k=$.o8()
j=$.o6()
$.o5()
i=$.oa()
h=$.o9()
g=p.bv(s)
if(g!=null)return A.cI(a,A.li(A.b4(s),g))
else{g=o.bv(s)
if(g!=null){g.method="call"
return A.cI(a,A.li(A.b4(s),g))}else if(n.bv(s)!=null||m.bv(s)!=null||l.bv(s)!=null||k.bv(s)!=null||j.bv(s)!=null||m.bv(s)!=null||i.bv(s)!=null||h.bv(s)!=null){A.b4(s)
return A.cI(a,new A.et())}}return A.cI(a,new A.hK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.eM()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cI(a,new A.aV(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.eM()
return a},
fm(a){var s
if(a==null)return new A.fd(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fd(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
i9(a){if(a==null)return J.b9(a)
if(typeof a=="object")return A.eI(a)
return J.b9(a)},
rV(a){if(typeof a=="number")return B.b.gH(a)
if(a instanceof A.i0)return A.eI(a)
if(a instanceof A.aK)return a.gH(a)
return A.i9(a)},
nQ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
rn(a,b,c,d,e,f){t.Z.a(a)
switch(A.w(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.h(new A.jP("Unsupported number of arguments for wrapped closure"))},
dJ(a,b){var s=a.$identity
if(!!s)return s
s=A.rW(a,b)
a.$identity=s
return s},
rW(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.rn)},
oB(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hE().constructor.prototype):Object.create(new A.cK(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.mm(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ox(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.mm(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ox(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.h("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ot)}throw A.h("Error in functionType of tearoff")},
oy(a,b,c,d){var s=A.ml
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mm(a,b,c,d){if(c)return A.oA(a,b,d)
return A.oy(b.length,d,a,b)},
oz(a,b,c,d){var s=A.ml,r=A.ou
switch(b?-1:a){case 0:throw A.h(new A.hC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
oA(a,b,c){var s,r
if($.mj==null)$.mj=A.mi("interceptor")
if($.mk==null)$.mk=A.mi("receiver")
s=b.length
r=A.oz(s,c,a,b)
return r},
m_(a){return A.oB(a)},
ot(a,b){return A.fi(v.typeUniverse,A.b7(a.a),b)},
ml(a){return a.a},
ou(a){return a.b},
mi(a){var s,r,q,p=new A.cK("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.h(A.bj("Field name "+a+" not found.",null))},
nS(a){return v.getIsolateTag(a)},
uU(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ti(a){var s,r,q,p,o,n=A.b4($.nT.$1(a)),m=$.kA[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kM[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.nv($.nJ.$2(a,n))
if(q!=null){m=$.kA[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kM[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.kO(s)
$.kA[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kM[n]=s
return s}if(p==="-"){o=A.kO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.nU(a,s)
if(p==="*")throw A.h(A.n8(n))
if(v.leafTags[n]===true){o=A.kO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.nU(a,s)},
nU(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.m2(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kO(a){return J.m2(a,!1,null,!!a.$iaH)},
tk(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.kO(s)
else return J.m2(s,c,null,null)},
tc(){if(!0===$.m0)return
$.m0=!0
A.td()},
td(){var s,r,q,p,o,n,m,l
$.kA=Object.create(null)
$.kM=Object.create(null)
A.tb()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nV.$1(o)
if(n!=null){m=A.tk(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
tb(){var s,r,q,p,o,n,m=B.cv()
m=A.dI(B.cw,A.dI(B.cx,A.dI(B.aR,A.dI(B.aR,A.dI(B.cy,A.dI(B.cz,A.dI(B.cA(B.aQ),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nT=new A.kJ(p)
$.nJ=new A.kK(o)
$.nV=new A.kL(n)},
dI(a,b){return a(b)||b},
qI(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.a(b,s)
if(!J.aB(r,b[s]))return!1}return!0},
rZ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
tp(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bT:function bT(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a){this.a=a},
dP:function dP(){},
c4:function c4(a,b){this.a=a
this.$ti=b},
j1:function j1(a){this.a=a},
eL:function eL(){},
jn:function jn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
et:function et(){},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
iX:function iX(a){this.a=a},
fd:function fd(a){this.a=a
this.b=null},
bE:function bE(){},
fu:function fu(){},
fv:function fv(){},
hF:function hF(){},
hE:function hE(){},
cK:function cK(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a},
b_:function b_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iN:function iN(a){this.a=a},
iR:function iR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bp:function bp(a,b){this.a=a
this.$ti=b},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iS:function iS(a,b){this.a=a
this.$ti=b},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ef:function ef(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
aK:function aK(){},
cz:function cz(){},
dC:function dC(){},
dD:function dD(){},
ts(a){throw A.a2(A.mL(a),new Error())},
d(){throw A.a2(A.mM(""),new Error())},
m3(){throw A.a2(A.p2(""),new Error())},
tt(){throw A.a2(A.mL(""),new Error())},
qz(){var s=new A.jM()
return s.b=s},
jM:function jM(){this.b=null},
ay(a,b,c){},
z(a){var s,r,q
if(t.aP.b(a))return a
s=J.a1(a)
r=A.S(s.gu(a),null,!1,t.z)
for(q=0;q<s.gu(a);++q)B.c.h(r,q,s.l(a,q))
return r},
p3(a,b,c){var s
A.ay(a,b,c)
s=new DataView(a,b,c)
return s},
p4(a){return new Float32Array(a)},
p5(a){return new Float32Array(A.z(a))},
p6(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,4)
return new Float32Array(a,b,c)},
p7(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,2)
return new Int16Array(a,b,c)},
p8(a){return new Int32Array(a)},
p9(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,4)
return new Int32Array(a,b,c)},
mT(a){return new Int8Array(a)},
pa(a){return new Int8Array(A.z(a))},
pb(a,b,c){A.ay(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
pc(a){return new Uint16Array(a)},
pd(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
pe(a){return new Uint32Array(a)},
pf(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
es(a){return new Uint8Array(a)},
pg(a){return new Uint8Array(A.z(a))},
ph(a,b,c){A.ay(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
bC(a,b,c){if(a>>>0!==a||a>=c)throw A.h(A.kz(b,a))},
b5(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.h(A.t_(a,b,c))
if(b==null)return c
return b},
cd:function cd(){},
eo:function eo(){},
kc:function kc(a){this.a=a},
hi:function hi(){},
ae:function ae(){},
bM:function bM(){},
aI:function aI(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
ce:function ce(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
lF(a,b){var s=b.c
return s==null?b.c=A.fg(a,"cY",[b.x]):s},
n1(a){var s=a.w
if(s===6||s===7)return A.n1(a.x)
return s===11||s===12},
py(a){return a.as},
tl(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a0(a){return A.kb(v.typeUniverse,a,!1)},
cC(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.cC(a1,s,a3,a4)
if(r===s)return a2
return A.nn(a1,r,!0)
case 7:s=a2.x
r=A.cC(a1,s,a3,a4)
if(r===s)return a2
return A.nm(a1,r,!0)
case 8:q=a2.y
p=A.dH(a1,q,a3,a4)
if(p===q)return a2
return A.fg(a1,a2.x,p)
case 9:o=a2.x
n=A.cC(a1,o,a3,a4)
m=a2.y
l=A.dH(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.lQ(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.dH(a1,j,a3,a4)
if(i===j)return a2
return A.no(a1,k,i)
case 11:h=a2.x
g=A.cC(a1,h,a3,a4)
f=a2.y
e=A.rO(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.nl(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.dH(a1,d,a3,a4)
o=a2.x
n=A.cC(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.lR(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.h(A.fr("Attempted to substitute unexpected RTI kind "+a0))}},
dH(a,b,c,d){var s,r,q,p,o=b.length,n=A.kf(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cC(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
rP(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.kf(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cC(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
rO(a,b,c,d){var s,r=b.a,q=A.dH(a,r,c,d),p=b.b,o=A.dH(a,p,c,d),n=b.c,m=A.rP(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hV()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
nN(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.t9(s)
return a.$S()}return null},
te(a,b){var s
if(A.n1(b))if(a instanceof A.bE){s=A.nN(a)
if(s!=null)return s}return A.b7(a)},
b7(a){if(a instanceof A.D)return A.m(a)
if(Array.isArray(a))return A.a5(a)
return A.lV(J.cF(a))},
a5(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.lV(a)},
lV(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.rj(a,s)},
rj(a,b){var s=a instanceof A.bE?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.qR(v.typeUniverse,s.name)
b.$ccache=r
return r},
t9(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.kb(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
t8(a){return A.cD(A.m(a))},
lZ(a){var s
if(a instanceof A.aK)return A.t1(a.$r,a.cW())
s=a instanceof A.bE?A.nN(a):null
if(s!=null)return s
if(t.cl.b(a))return J.oq(a).a
if(Array.isArray(a))return A.a5(a)
return A.b7(a)},
cD(a){var s=a.r
return s==null?a.r=new A.i0(a):s},
t1(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.a(q,0)
s=A.fi(v.typeUniverse,A.lZ(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.np(v.typeUniverse,s,A.lZ(q[r]))}return A.fi(v.typeUniverse,s,a)},
b8(a){return A.cD(A.kb(v.typeUniverse,a,!1))},
ri(a){var s=this
s.b=A.rM(s)
return s.b(a)},
rM(a){var s,r,q,p,o
if(a===t.K)return A.rt
if(A.cH(a))return A.rx
s=a.w
if(s===6)return A.rg
if(s===1)return A.nB
if(s===7)return A.ro
r=A.rL(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.cH)){a.f="$i"+q
if(q==="q")return A.rr
if(a===t.q)return A.rq
return A.rw}}else if(s===10){p=A.rZ(a.x,a.y)
o=p==null?A.nB:p
return o==null?A.i2(o):o}return A.re},
rL(a){if(a.w===8){if(a===t.p)return A.ku
if(a===t.i||a===t.O)return A.rs
if(a===t.N)return A.rv
if(a===t.y)return A.lW}return null},
rh(a){var s=this,r=A.rd
if(A.cH(s))r=A.r0
else if(s===t.K)r=A.i2
else if(A.dK(s)){r=A.rf
if(s===t.I)r=A.qZ
else if(s===t.dk)r=A.nv
else if(s===t.fQ)r=A.qX
else if(s===t.cg)r=A.nu
else if(s===t.cD)r=A.qY
else if(s===t.bX)r=A.r_}else if(s===t.p)r=A.w
else if(s===t.N)r=A.b4
else if(s===t.y)r=A.qW
else if(s===t.O)r=A.dF
else if(s===t.i)r=A.cB
else if(s===t.q)r=A.nt
s.a=r
return s.a(a)},
re(a){var s=this
if(a==null)return A.dK(s)
return A.th(v.typeUniverse,A.te(a,s),s)},
rg(a){if(a==null)return!0
return this.x.b(a)},
rw(a){var s,r=this
if(a==null)return A.dK(r)
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.cF(a)[s]},
rr(a){var s,r=this
if(a==null)return A.dK(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.cF(a)[s]},
rq(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.D)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
nA(a){if(typeof a=="object"){if(a instanceof A.D)return t.q.b(a)
return!0}if(typeof a=="function")return!0
return!1},
rd(a){var s=this
if(a==null){if(A.dK(s))return a}else if(s.b(a))return a
throw A.a2(A.nw(a,s),new Error())},
rf(a){var s=this
if(a==null||s.b(a))return a
throw A.a2(A.nw(a,s),new Error())},
nw(a,b){return new A.fe("TypeError: "+A.ne(a,A.aL(b,null)))},
ne(a,b){return A.fD(a)+": type '"+A.aL(A.lZ(a),null)+"' is not a subtype of type '"+b+"'"},
aU(a,b){return new A.fe("TypeError: "+A.ne(a,b))},
ro(a){var s=this
return s.x.b(a)||A.lF(v.typeUniverse,s).b(a)},
rt(a){return a!=null},
i2(a){if(a!=null)return a
throw A.a2(A.aU(a,"Object"),new Error())},
rx(a){return!0},
r0(a){return a},
nB(a){return!1},
lW(a){return!0===a||!1===a},
qW(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a2(A.aU(a,"bool"),new Error())},
qX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a2(A.aU(a,"bool?"),new Error())},
cB(a){if(typeof a=="number")return a
throw A.a2(A.aU(a,"double"),new Error())},
qY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aU(a,"double?"),new Error())},
ku(a){return typeof a=="number"&&Math.floor(a)===a},
w(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a2(A.aU(a,"int"),new Error())},
qZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a2(A.aU(a,"int?"),new Error())},
rs(a){return typeof a=="number"},
dF(a){if(typeof a=="number")return a
throw A.a2(A.aU(a,"num"),new Error())},
nu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a2(A.aU(a,"num?"),new Error())},
rv(a){return typeof a=="string"},
b4(a){if(typeof a=="string")return a
throw A.a2(A.aU(a,"String"),new Error())},
nv(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a2(A.aU(a,"String?"),new Error())},
nt(a){if(A.nA(a))return a
throw A.a2(A.aU(a,"JSObject"),new Error())},
r_(a){if(a==null)return a
if(A.nA(a))return a
throw A.a2(A.aU(a,"JSObject?"),new Error())},
nF(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aL(a[q],b)
return s},
rD(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.nF(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aL(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ny(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.j([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.N(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aL(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aL(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aL(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aL(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aL(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aL(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aL(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aL(a.x,b)+">"
if(l===8){p=A.rQ(a.x)
o=a.y
return o.length>0?p+("<"+A.nF(o,b)+">"):p}if(l===10)return A.rD(a,b)
if(l===11)return A.ny(a,b,null)
if(l===12)return A.ny(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
rQ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
qS(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
qR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.kb(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fh(a,5,"#")
q=A.kf(s)
for(p=0;p<s;++p)q[p]=r
o=A.fg(a,b,q)
n[b]=o
return o}else return m},
qQ(a,b){return A.nr(a.tR,b)},
qP(a,b){return A.nr(a.eT,b)},
kb(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nj(A.nh(a,null,b,!1))
r.set(b,s)
return s},
fi(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nj(A.nh(a,b,c,!0))
q.set(c,r)
return r},
np(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.lQ(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
bU(a,b){b.a=A.rh
b.b=A.ri
return b},
fh(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b3(null,null)
s.w=b
s.as=c
r=A.bU(a,s)
a.eC.set(c,r)
return r},
nn(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.qN(a,b,r,c)
a.eC.set(r,s)
return s},
qN(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.cH(b))if(!(b===t.a||b===t.v))if(s!==6)r=s===7&&A.dK(b.x)
if(r)return b
else if(s===1)return t.a}q=new A.b3(null,null)
q.w=6
q.x=b
q.as=c
return A.bU(a,q)},
nm(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.qL(a,b,r,c)
a.eC.set(r,s)
return s},
qL(a,b,c,d){var s,r
if(d){s=b.w
if(A.cH(b)||b===t.K)return b
else if(s===1)return A.fg(a,"cY",[b])
else if(b===t.a||b===t.v)return t.eH}r=new A.b3(null,null)
r.w=7
r.x=b
r.as=c
return A.bU(a,r)},
qO(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b3(null,null)
s.w=13
s.x=b
s.as=q
r=A.bU(a,s)
a.eC.set(q,r)
return r},
ff(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
qK(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fg(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ff(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b3(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bU(a,r)
a.eC.set(p,q)
return q},
lQ(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ff(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b3(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.bU(a,o)
a.eC.set(q,n)
return n},
no(a,b,c){var s,r,q="+"+(b+"("+A.ff(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.b3(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.bU(a,s)
a.eC.set(q,r)
return r},
nl(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ff(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ff(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.qK(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.b3(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.bU(a,p)
a.eC.set(r,o)
return o},
lR(a,b,c,d){var s,r=b.as+("<"+A.ff(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.qM(a,b,c,r,d)
a.eC.set(r,s)
return s},
qM(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.kf(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.cC(a,b,r,0)
m=A.dH(a,c,r,0)
return A.lR(a,n,m,c!==m)}}l=new A.b3(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.bU(a,l)},
nh(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nj(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.qD(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ni(a,r,l,k,!1)
else if(q===46)r=A.ni(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.cy(a.u,a.e,k.pop()))
break
case 94:k.push(A.qO(a.u,k.pop()))
break
case 35:k.push(A.fh(a.u,5,"#"))
break
case 64:k.push(A.fh(a.u,2,"@"))
break
case 126:k.push(A.fh(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.qF(a,k)
break
case 38:A.qE(a,k)
break
case 63:p=a.u
k.push(A.nn(p,A.cy(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.nm(p,A.cy(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.qC(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.nk(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.qH(a.u,a.e,o)
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
return A.cy(a.u,a.e,m)},
qD(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ni(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.qS(s,o.x)[p]
if(n==null)A.ac('No "'+p+'" in "'+A.py(o)+'"')
d.push(A.fi(s,o,n))}else d.push(p)
return m},
qF(a,b){var s,r=a.u,q=A.ng(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fg(r,p,q))
else{s=A.cy(r,a.e,p)
switch(s.w){case 11:b.push(A.lR(r,s,q,a.n))
break
default:b.push(A.lQ(r,s,q))
break}}},
qC(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ng(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.cy(p,a.e,o)
q=new A.hV()
q.a=s
q.b=n
q.c=m
b.push(A.nl(p,r,q))
return
case-4:b.push(A.no(p,b.pop(),s))
return
default:throw A.h(A.fr("Unexpected state under `()`: "+A.C(o)))}},
qE(a,b){var s=b.pop()
if(0===s){b.push(A.fh(a.u,1,"0&"))
return}if(1===s){b.push(A.fh(a.u,4,"1&"))
return}throw A.h(A.fr("Unexpected extended operation "+A.C(s)))},
ng(a,b){var s=b.splice(a.p)
A.nk(a.u,a.e,s)
a.p=b.pop()
return s},
cy(a,b,c){if(typeof c=="string")return A.fg(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.qG(a,b,c)}else return c},
nk(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cy(a,b,c[s])},
qH(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cy(a,b,c[s])},
qG(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.h(A.fr("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.h(A.fr("Bad index "+c+" for "+b.B(0)))},
th(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aa(a,b,null,c,null)
r.set(c,s)}return s},
aa(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.cH(d))return!0
s=b.w
if(s===4)return!0
if(A.cH(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aa(a,c[b.x],c,d,e))return!0
q=d.w
p=t.a
if(b===p||b===t.v){if(q===7)return A.aa(a,b,c,d.x,e)
return d===p||d===t.v||q===6}if(d===t.K){if(s===7)return A.aa(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aa(a,b.x,c,d,e))return!1
return A.aa(a,A.lF(a,b),c,d,e)}if(s===6)return A.aa(a,p,c,d,e)&&A.aa(a,b.x,c,d,e)
if(q===7){if(A.aa(a,b,c,d.x,e))return!0
return A.aa(a,b,c,A.lF(a,d),e)}if(q===6)return A.aa(a,b,c,p,e)||A.aa(a,b,c,d.x,e)
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
if(!A.aa(a,j,c,i,e)||!A.aa(a,i,e,j,c))return!1}return A.nz(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.nz(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.rp(a,b,c,d,e)}if(o&&q===10)return A.ru(a,b,c,d,e)
return!1},
nz(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aa(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aa(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aa(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aa(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aa(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
rp(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fi(a,b,r[o])
return A.ns(a,p,null,c,d.y,e)}return A.ns(a,b.y,null,c,d.y,e)},
ns(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aa(a,b[s],d,e[s],f))return!1
return!0},
ru(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aa(a,r[s],c,q[s],e))return!1
return!0},
dK(a){var s=a.w,r=!0
if(!(a===t.a||a===t.v))if(!A.cH(a))if(s!==6)r=s===7&&A.dK(a.x)
return r},
cH(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
nr(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
kf(a){return a>0?new Array(a):v.typeUniverse.sEA},
b3:function b3(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
hV:function hV(){this.c=this.b=this.a=null},
i0:function i0(a){this.a=a},
hT:function hT(){},
fe:function fe(a){this.a=a},
qr(){var s,r,q
if(self.scheduleImmediate!=null)return A.rS()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dJ(new A.jH(s),1)).observe(r,{childList:true})
return new A.jG(s,r,q)}else if(self.setImmediate!=null)return A.rT()
return A.rU()},
qs(a){self.scheduleImmediate(A.dJ(new A.jI(t.M.a(a)),0))},
qt(a){self.setImmediate(A.dJ(new A.jJ(t.M.a(a)),0))},
qu(a){t.M.a(a)
A.qJ(0,a)},
qJ(a,b){var s=new A.k8()
s.hk(a,b)
return s},
l5(a){var s
if(t.C.b(a)){s=a.gce()
if(s!=null)return s}return B.a4},
rk(a,b){if($.ab===B.A)return null
return null},
rl(a,b){if($.ab!==B.A)A.rk(a,b)
if(t.C.b(a)){b=a.gce()
if(b==null){A.pv(a,B.a4)
b=B.a4}}else b=B.a4
return new A.bb(a,b)},
lM(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.pB()
b.eb(new A.bb(new A.aV(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eM(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.d2()
b.cO(o.a)
A.dA(b,p)
return}b.a^=2
A.i3(null,null,b.b,t.M.a(new A.jV(o,b)))},
dA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.lY(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dA(d.a,c)
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
A.lY(j.a,j.b)
return}g=$.ab
if(g!==h)$.ab=h
else g=null
c=c.c
if((c&15)===8)new A.jZ(q,d,n).$0()
else if(o){if((c&1)!==0)new A.jY(q,j).$0()}else if((c&2)!==0)new A.jX(d,q).$0()
if(g!=null)$.ab=g
c=q.c
if(c instanceof A.aT){p=q.a.$ti
p=p.p("cY<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.d3(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.lM(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.d3(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
rE(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.E
if(s.b(a))return s.a(a)
throw A.h(A.l4(a,"onError",u.c))},
rB(){var s,r
for(s=$.dG;s!=null;s=$.dG){$.fl=null
r=s.b
$.dG=r
if(r==null)$.fk=null
s.a.$0()}},
rN(){$.lX=!0
try{A.rB()}finally{$.fl=null
$.lX=!1
if($.dG!=null)$.m7().$1(A.nK())}},
nH(a){var s=new A.hQ(a),r=$.fk
if(r==null){$.dG=$.fk=s
if(!$.lX)$.m7().$1(A.nK())}else $.fk=r.b=s},
rK(a){var s,r,q,p=$.dG
if(p==null){A.nH(a)
$.fl=$.fk
return}s=new A.hQ(a)
r=$.fl
if(r==null){s.b=p
$.dG=$.fl=s}else{q=r.b
s.b=q
$.fl=r.b=s
if(q==null)$.fk=s}},
lY(a,b){A.rK(new A.kv(a,b))},
nE(a,b,c,d,e){var s,r=$.ab
if(r===c)return d.$0()
$.ab=c
s=r
try{r=d.$0()
return r}finally{$.ab=s}},
rG(a,b,c,d,e,f,g){var s,r=$.ab
if(r===c)return d.$1(e)
$.ab=c
s=r
try{r=d.$1(e)
return r}finally{$.ab=s}},
rF(a,b,c,d,e,f,g,h,i){var s,r=$.ab
if(r===c)return d.$2(e,f)
$.ab=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ab=s}},
i3(a,b,c,d){t.M.a(d)
if(B.A!==c){d=c.jo(d)
d=d}A.nH(d)},
jH:function jH(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
k8:function k8(){},
k9:function k9(a,b){this.a=a
this.b=b},
bb:function bb(a,b){this.a=a
this.b=b},
hS:function hS(){},
eY:function eY(a,b){this.a=a
this.$ti=b},
f_:function f_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aT:function aT(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jS:function jS(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b){this.a=a
this.b=b},
k0:function k0(a){this.a=a},
jY:function jY(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a
this.b=null},
fj:function fj(){},
hZ:function hZ(){},
k7:function k7(a,b){this.a=a
this.b=b},
kv:function kv(a,b){this.a=a
this.b=b},
nf(a,b){var s=a[b]
return s===a?null:s},
lO(a,b,c){if(c==null)a[b]=a
else a[b]=c},
lN(){var s=Object.create(null)
A.lO(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
mN(a,b){return new A.b_(a.p("@<0>").aI(b).p("b_<1,2>"))},
dg(a,b,c){return b.p("@<0>").aI(c).p("lj<1,2>").a(A.nQ(a,new A.b_(b.p("@<0>").aI(c).p("b_<1,2>"))))},
I(a,b){return new A.b_(a.p("@<0>").aI(b).p("b_<1,2>"))},
mO(a){return new A.f4(a.p("f4<0>"))},
lP(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hh(a,b,c){var s=A.mN(b,c)
a.aP(0,new A.iT(s,b,c))
return s},
ll(a){var s,r
if(A.m1(a))return"{...}"
s=new A.ct("")
try{r={}
B.c.N($.aM,a)
s.a+="{"
r.a=!0
a.aP(0,new A.iV(r,s))
s.a+="}"}finally{if(0>=$.aM.length)return A.a($.aM,-1)
$.aM.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
f0:function f0(){},
f3:function f3(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
f1:function f1(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
f4:function f4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hY:function hY(a){this.a=a
this.b=null},
f5:function f5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
G:function G(){},
U:function U(){},
iV:function iV(a,b){this.a=a
this.b=b},
dq:function dq(){},
fc:function fc(){},
rC(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.bD(r)
q=A.bc(String(s),null,null)
throw A.h(q)}q=A.kj(p)
return q},
kj(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.hW(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.kj(a[s])
return a},
qU(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.of()
else s=new Uint8Array(o)
for(r=0;r<o;++r){q=b+r
if(!(q<a.length))return A.a(a,q)
p=a[q]
if((p&255)!==p)p=255
s[r]=p}return s},
qT(a,b,c,d){var s=a?$.oe():$.od()
if(s==null)return null
if(0===c&&d===b.length)return A.nq(s,b)
return A.nq(s,b.subarray(c,d))},
nq(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
qy(a,b,c,d,e,f,g,a0){var s,r,q,p,o,n,m,l,k,j,i=a0>>>2,h=3-(a0&3)
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
throw A.h(A.l4(b,"Not a byte value at index "+p+": 0x"+B.a.cC(b[p],16),null))},
qx(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i="Invalid encoding before padding",h="Invalid character",g=B.a.j(a1,2),f=a1&3,e=$.oc()
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
if(f===3){if((g&3)!==0)throw A.h(A.bc(i,a,p))
k=a0+1
q&2&&A.b(d)
s=d.length
if(!(a0<s))return A.a(d,a0)
d[a0]=g>>>10
if(!(k<s))return A.a(d,k)
d[k]=g>>>2}else{if((g&15)!==0)throw A.h(A.bc(i,a,p))
q&2&&A.b(d)
if(!(a0<d.length))return A.a(d,a0)
d[a0]=g>>>4}j=(3-f)*3
if(n===37)j+=2
return A.nd(a,p+1,c,-j-1)}throw A.h(A.bc(h,a,p))}if(o>=0&&o<=127)return(g<<2|f)>>>0
for(p=b;p<c;++p){if(!(p<s))return A.a(a,p)
if(a.charCodeAt(p)>127)break}throw A.h(A.bc(h,a,p))},
qv(a,b,c,d){var s=A.qw(a,b,c),r=(d&3)+(s-b),q=B.a.j(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.ob()},
qw(a,b,c){var s,r=a.length,q=c,p=q,o=0
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
nd(a,b,c,d){var s,r,q
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
if(b===c)break}if(b!==c)throw A.h(A.bc("Invalid padding character",a,b))
return-s-1},
mK(a,b,c){return new A.eg(a,b)},
r6(a){return a.bJ()},
qA(a,b){return new A.k2(a,[],A.rX())},
qB(a,b,c){var s,r=new A.ct(""),q=A.qA(r,b)
q.df(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
qV(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
hW:function hW(a,b){this.a=a
this.b=b
this.c=null},
hX:function hX(a){this.a=a},
ke:function ke(){},
kd:function kd(){},
ka:function ka(){},
dL:function dL(){},
ih:function ih(){},
jL:function jL(a){this.a=0
this.b=a},
ig:function ig(){},
jK:function jK(){this.a=0},
ap:function ap(){},
fA:function fA(){},
fC:function fC(){},
eg:function eg(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
he:function he(){},
iP:function iP(a){this.b=a},
iO:function iO(a){this.a=a},
k3:function k3(){},
k4:function k4(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c){this.c=a
this.a=b
this.b=c},
hg:function hg(){},
iQ:function iQ(a){this.a=a},
hL:function hL(){},
hM:function hM(a){this.a=a},
i1:function i1(a){this.a=a
this.b=16
this.c=0},
tf(a){var s=A.ps(a,null)
if(s!=null)return s
throw A.h(A.bc(a,null,null))},
oE(a,b){a=A.a2(a,new Error())
if(a==null)a=A.i2(a)
a.stack=b.B(0)
throw a},
S(a,b,c,d){var s,r=c?J.h6(a,d):J.mH(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lk(a,b,c){var s,r,q=A.j([],c.p("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a3)(a),++r)B.c.N(q,c.a(a[r]))
if(b)return q
q.$flags=1
return q},
u(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.p("r<0>"))
s=A.j([],b.p("r<0>"))
for(r=J.fn(a);r.D();)B.c.N(s,r.gM())
return s},
mP(a,b,c){var s,r=J.h6(a,c)
for(s=0;s<a;++s)B.c.h(r,s,b.$1(s))
return r},
mQ(a,b){var s=A.lk(a,!1,b)
s.$flags=3
return s},
dt(a,b,c){var s,r,q,p,o
A.bt(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.h(A.ak(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.mZ(b>0||c<o?p.slice(b,c):p)}if(t.bm.b(a))return A.pD(a,b,c)
if(r)a=J.or(a,c)
if(b>0)a=J.l2(a,b)
s=A.u(a,t.p)
return A.mZ(s)},
pD(a,b,c){var s=a.length
if(b>=s)return""
return A.pu(a,b,c==null||c>s?s:c)},
n4(a,b,c){var s=J.fn(b)
if(!s.D())return a
if(c.length===0){do a+=A.C(s.gM())
while(s.D())}else{a+=A.C(s.gM())
while(s.D())a=a+c+A.C(s.gM())}return a},
pB(){return A.fm(new Error())},
oD(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mn(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fB(a){if(a>=10)return""+a
return"0"+a},
fD(a){if(typeof a=="number"||A.lW(a)||a==null)return J.fo(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mY(a)},
oF(a,b){A.i4(a,"error",t.K)
A.i4(b,"stackTrace",t.m)
A.oE(a,b)},
fr(a){return new A.fq(a)},
bj(a,b){return new A.aV(!1,null,b,a)},
l4(a,b,c){return new A.aV(!0,a,b,c)},
px(a){var s=null
return new A.bs(s,s,!1,s,s,a)},
n0(a,b){return new A.bs(null,null,!0,a,b,"Value not in range")},
ak(a,b,c,d,e){return new A.bs(b,c,!0,a,d,"Invalid value")},
be(a,b,c){if(0>a||a>c)throw A.h(A.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.h(A.ak(b,a,c,"end",null))
return b}return c},
bt(a,b){if(a<0)throw A.h(A.ak(a,0,null,b,null))
return a},
lc(a,b,c,d){return new A.fR(b,!0,a,d,"Index out of range")},
bf(a){return new A.eP(a)},
n8(a){return new A.hJ(a)},
lG(a){return new A.ds(a)},
aD(a){return new A.fy(a)},
bc(a,b,c){return new A.as(a,b,c)},
oZ(a,b,c){var s,r
if(A.m1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
B.c.N($.aM,a)
try{A.ry(a,s)}finally{if(0>=$.aM.length)return A.a($.aM,-1)
$.aM.pop()}r=A.n4(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
lf(a,b,c){var s,r
if(A.m1(a))return b+"..."+c
s=new A.ct(b)
B.c.N($.aM,a)
try{r=s
r.a=A.n4(r.a,a,", ")}finally{if(0>=$.aM.length)return A.a($.aM,-1)
$.aM.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ry(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.D())return
s=A.C(l.gM())
B.c.N(b,s)
k+=s.length+2;++j}if(!l.D()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gM();++j
if(!l.D()){if(j<=4){B.c.N(b,A.C(p))
return}r=A.C(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gM();++j
for(;l.D();p=o,o=n){n=l.gM();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.c.N(b,"...")
return}}q=A.C(p)
r=A.C(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.N(b,m)
B.c.N(b,q)
B.c.N(b,r)},
mS(a,b,c,d,e){return new A.bZ(a,b.p("@<0>").aI(c).aI(d).aI(e).p("bZ<1,2,3,4>"))},
hj(a,b,c,d){var s
if(B.z===c){s=B.a.gH(a)
b=J.b9(b)
return A.ji(A.bu(A.bu($.id(),s),b))}if(B.z===d){s=B.a.gH(a)
b=J.b9(b)
c=J.b9(c)
return A.ji(A.bu(A.bu(A.bu($.id(),s),b),c))}s=B.a.gH(a)
b=J.b9(b)
c=J.b9(c)
d=J.b9(d)
d=A.ji(A.bu(A.bu(A.bu(A.bu($.id(),s),b),c),d))
return d},
n(a){var s,r,q=$.id()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a3)(a),++r)q=A.bu(q,J.b9(a[r]))
return A.ji(q)},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(){},
P:function P(){},
fq:function fq(a){this.a=a},
bv:function bv(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fR:function fR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eP:function eP(a){this.a=a},
hJ:function hJ(a){this.a=a},
ds:function ds(a){this.a=a},
fy:function fy(a){this.a=a},
hk:function hk(){},
eM:function eM(){},
jP:function jP(a){this.a=a},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
av:function av(){},
D:function D(){},
i_:function i_(){},
jh:function jh(){this.b=this.a=0},
ct:function ct(a){this.a=a},
iW:function iW(a){this.a=a},
r3(a,b,c){t.Z.a(a)
if(A.w(c)>=1)return a.$1(b)
return a.$0()},
tn(a,b){var s=new A.aT($.ab,b.p("aT<0>")),r=new A.eY(s,b.p("eY<0>"))
a.then(A.dJ(new A.kP(r,b),1),A.dJ(new A.kQ(r),1))
return s},
nD(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
nP(a){if(A.nD(a))return a
return new A.ky(new A.f3(t.hg)).$1(a)},
kP:function kP(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
ky:function ky(a){this.a=a},
la(a,b){var s=new A.iw()
s.h2(a,b)
return s},
iw:function iw(){this.a=$
this.b=0
this.c=2147483647},
jF:function jF(){},
kg:function kg(){},
kh:function kh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iE:function iE(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=!1
_.w=_.r=0},
jE:function jE(){},
mf(a){return new A.cJ(a,null,null)},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(){},
ie:function ie(){},
dM:function dM(a,b){this.a=a
this.b=b},
ta(a,b,c,d){var s,r,q,p=!1,o=new A.jN($.lS)
$.lS=o
try{if(d.$0())return!0
if(p){r=A.mf("Invalid "+a+" data")
throw A.h(r)}return!1}catch(q){s=A.bD(q)
r=s
if(!(r instanceof A.cJ||r instanceof A.fp||r instanceof A.as||t.b8.b(r)||t.eK.b(r)))throw q
r=s instanceof A.ie
if(r)throw q
if(s instanceof A.fp)return!1
if(s instanceof A.cJ){if(p)throw q
return!1}if(p){r=A.mf("Invalid "+a+" data: "+A.C(s))
throw A.h(r)}return!1}finally{$.lS=o.a}},
jN:function jN(a){this.a=a},
ld(a,b,c,d){var s,r,q,p,o=new A.fS(b)
if(d==null)d=0
A.bt(d,"offset")
if(d<0)d=0
else{s=a.length
if(d>s)d=s}r=a.length-d
if(c==null)c=r
if(c<0||c>r)c=r
q=t.D.b(a)?a:new Uint8Array(A.z(a))
p=J.a_(B.f.gA(q),q.byteOffset+d,c)
o.b=p
o.d=p.length
return o},
fS:function fS(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
fT:function fT(){},
lm(a){var s=a==null?32768:a
return new A.dh(new Uint8Array(s),B.ar)},
dh:function dh(a,b){this.b=0
this.c=a
this.a=b},
hl:function hl(){},
il:function il(a,b){this.a=a
this.b=b},
O:function O(a){this.a=-1
this.b=a},
c_:function c_(a,b){this.a=a
this.b=b},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cQ:function cQ(a){this.a=a},
cS:function cS(a,b){this.a=a
this.b=b},
cT:function cT(a){this.a=a},
cU:function cU(a,b){this.a=a
this.b=b},
cV:function cV(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
oC(a,b,c,d){var s=new A.cR(new Uint8Array(4))
s.fZ(a,b,c,d)
return s},
bF:function bF(a){this.a=a},
fw:function fw(a){this.a=a},
cR:function cR(a){this.a=a},
dO:function dO(a){this.a=a},
fz:function fz(a){this.a=a},
i6(a,b,c){var s
if(b===c)return a
switch(b.a){case 0:if(a===0)s=0
else{s=B.bY.l(0,c)
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
case 1:return B.a.j(A.w(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.w(a),6)
case 2:return B.a.j(A.w(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.j(A.w(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.w(a),14)
case 2:return B.a.j(A.w(a),12)
case 3:return B.a.j(A.w(a),8)
case 4:return a
case 5:return A.w(a)<<8>>>0
case 6:return B.a.j(A.w(a),9)
case 7:return B.a.j(A.w(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.w(a),30)
case 2:return B.a.j(A.w(a),28)
case 3:return B.a.j(A.w(a),24)
case 4:return B.a.j(A.w(a),16)
case 5:return a
case 6:return B.a.j(A.w(a),25)
case 7:return B.a.j(A.w(a),17)
case 8:return B.a.j(A.w(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.w(a),5)
case 2:return a<=0?0:B.a.j(A.w(a),3)
case 3:return a<=0?0:A.w(a)<<1>>>0
case 4:return a<=0?0:A.w(a)*516
case 5:return a<=0?0:A.w(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.w(a),15)
case 2:return a<=0?0:B.a.j(A.w(a),11)
case 3:return a<=0?0:B.a.j(A.w(a),7)
case 4:return a<=0?0:A.w(a)<<1>>>0
case 5:return a<=0?0:A.w(a)*131076
case 6:return B.a.j(A.w(a),8)
case 7:return a
case 8:return A.w(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.w(a),29)
case 2:return a<=0?0:B.a.j(A.w(a),27)
case 3:return a<=0?0:B.a.j(A.w(a),23)
case 4:return a<=0?0:B.a.j(A.w(a),16)
case 5:return a<=0?0:A.w(a)<<1>>>0
case 6:return B.a.j(A.w(a),24)
case 7:return B.a.j(A.w(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.i(B.b.J(a,0,1)*3)
case 2:return B.b.i(B.b.J(a,0,1)*15)
case 3:return B.b.i(B.b.J(a,0,1)*255)
case 4:return B.b.i(B.b.J(a,0,1)*65535)
case 5:return B.b.i(B.b.J(a,0,1)*4294967295)
case 6:return B.b.i(a<0?B.b.J(a,-1,1)*128:B.b.J(a,-1,1)*127)
case 7:return B.b.i(a<0?B.b.J(a,-1,1)*32768:B.b.J(a,-1,1)*32767)
case 8:return B.b.i(a<0?B.b.J(a,-1,1)*2147483648:B.b.J(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
ar:function ar(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
dS(a){var s,r=new A.c1(A.I(t.N,t.P))
r.h3(a)
s=a.b
if(s!=null)r.b=new Uint8Array(A.z(s))
return r},
iq(a){var s=new A.c1(A.I(t.N,t.P))
s.c3(a)
return s},
c1:function c1(a){this.b=null
this.a=a},
hU:function hU(a,b){this.a=a
this.b=b},
i(a,b,c){return new A.fE(a,b)},
fE:function fE(a,b){this.a=a
this.b=b},
aO:function aO(a){this.a=a},
iy:function iy(a){this.a=a},
mu(a){var s=new A.aG(A.I(t.p,t.r),new A.aO(A.I(t.N,t.P)))
s.js(a)
return s},
aG:function aG(a,b){this.a=a
this.b=b},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
mB(a,b){var s=new A.cb(new Uint16Array(b))
s.h8(a,b)
return s},
lb(a){var s=new Uint32Array(1)
s[0]=a
return new A.aZ(s)},
mw(a,b){var s=new A.aZ(new Uint32Array(b))
s.h5(a,b)
return s},
mx(a,b){var s,r=J.bJ(b,t.k)
for(s=0;s<b;++s)r[s]=new A.dp(a.k(),a.k())
return new A.c7(r)},
mA(a,b){var s=new A.ca(new Int16Array(b))
s.h7(a,b)
return s},
my(a,b){var s=new A.c8(new Int32Array(b))
s.h6(a,b)
return s},
mz(a,b){var s,r,q,p,o=J.bJ(b,t.k)
for(s=0;s<b;++s){r=a.k()
q=$.M()
q.$flags&2&&A.b(q)
q[0]=r
r=$.a6()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.k()
o[s]=new A.dp(p,r[0])}return new A.c9(o)},
mC(a,b){var s=new A.d2(new Float32Array(b))
s.h9(a,b)
return s},
mv(a,b){var s=new A.d0(new Float64Array(b))
s.h4(a,b)
return s},
ag:function ag(a,b){this.a=a
this.b=b},
a4:function a4(){},
bm:function bm(a){this.a=a},
c6:function c6(a){this.a=a},
cb:function cb(a){this.a=a},
aZ:function aZ(a){this.a=a},
c7:function c7(a){this.a=a},
bH:function bH(a){this.a=a},
ca:function ca(a){this.a=a},
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
d2:function d2(a){this.a=a},
d0:function d0(a){this.a=a},
d3:function d3(a){this.a=a},
d1:function d1(a){this.a=a},
mg(a){var s,r,q=new A.ij()
if(!A.mh(a))A.ac(A.o("Not a bitmap file."))
a.d+=2
s=a.k()
r=$.M()
r.$flags&2&&A.b(r)
r[0]=s
s=$.a6()
if(0>=s.length)return A.a(s,0)
a.d+=4
r[0]=a.k()
q.b=s[0]
return q},
mh(a){if(a.c-a.d<2)return!1
return A.p(a,null,0).n()===19778},
os(a,b){var s,r,q,p,o=b==null?A.mg(a):b,n=a.d,m=a.k(),l=a.k(),k=$.M()
k.$flags&2&&A.b(k)
k[0]=l
l=$.a6()
if(0>=l.length)return A.a(l,0)
s=l[0]
k[0]=a.k()
l=l[0]
r=a.n()
q=a.n()
p=a.k()
if(p>=14)A.ac(A.o("Unsupported BMP compression type: "+p))
if(!(p<14))return A.a(B.ah,p)
p=B.ah[p]
a.k()
k[0]=a.k()
k[0]=a.k()
k=a.k()
a.k()
n=new A.bk(o,s,l,m,r,q,p,k,n)
n.e3(a,b)
return n},
af:function af(a,b){this.a=a
this.b=b},
ij:function ij(){this.b=$},
bk:function bk(a,b,c,d,e,f,g,h,i){var _=this
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
ft:function ft(a){this.a=$
this.b=null
this.c=a},
ii:function ii(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
io:function io(a){this.a=$
this.b=null
this.c=a},
J:function J(){},
im:function im(){},
ip:function ip(){},
fF:function fF(){},
e8:function e8(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
cX:function cX(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
fG:function fG(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
mo(a,b,c,d){var s,r
switch(a.a){case 1:return new A.fZ(c,b)
case 2:return new A.e9(c,d==null?1:d,b)
case 3:return new A.e9(c,d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.fX(c,s,b)
r.hc(b,c,s)
return r
case 5:return new A.fY(c,d==null?16:d,b)
case 6:return new A.e8(c,d==null?32:d,!1,b)
case 7:return new A.e8(c,d==null?32:d,!0,b)
default:throw A.h(A.o("Invalid compression type: "+a.B(0)))}},
aY:function aY(a,b){this.a=a
this.b=b},
bl:function bl(){},
fV:function fV(){},
oJ(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.h(A.o("Incomplete huffman data"))
return}s=a.d
r=a.k()
q=a.k()
a.d+=4
p=a.k()
o=!0
if(r<65537)o=q>=65537
if(o)throw A.h(A.o("Invalid huffman table size"))
a.d+=4
n=A.S(65537,0,!1,t.p)
m=J.am(16384,t.gV)
for(l=0;l<16384;++l)m[l]=new A.fH()
A.oK(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.h(A.o("Error in header for Huffman-encoded data (invalid number of bits)."))
A.oG(n,r,q,m)
A.oI(n,m,a,p,q,d,c)},
oI(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.j([0,0],t.t),h=c.d+B.a.V(d+7,8)
for(s=b.length,r=0;c.d<h;){A.l6(i,c)
while(q=i[1],q>=14){p=B.a.br(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.l7(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.h(A.o(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
for(;;){q=i[1]
if(!(q<m&&c.d<h))break
A.l6(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.br(i[0],q)&B.a.S(1,m)-1)>>>0){B.c.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.l7(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.h(A.o(j))}}}k=8-d&7
B.c.h(i,0,B.a.j(i[0],k))
B.c.h(i,1,i[1]-k)
while(q=i[1],q>0){p=B.a.Y(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.l7(o.b,e,i,c,g,r,f)}else throw A.h(A.o(j))}if(r!==f)throw A.h(A.o("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
l7(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.l6(c,d)
B.c.h(c,1,c[1]-8)
s=B.a.br(c[0],c[1])&255
if(f+s>g)throw A.h(A.o(m))
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
e[f]=a}else throw A.h(A.o(m))
f=n}return f},
oG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.a1(o,n)!==0)throw A.h(A.o(i))
if(n>14){p=B.a.a2(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.h(A.o(i))
p=++m.b
l=m.c
if(l!=null){m.sfu(A.S(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.c.h(p,k,l[k])}}else m.sfu(A.j([0],r))
p=m.c
p.toString
B.c.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.Y(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.Y(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.h(A.o(i))
m.a=n
m.b=b}}}},
oK(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.j([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.h(A.o(n))
r=A.mp(6,k,a)
B.c.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.h(A.o(n))
q=A.mp(8,k,a)+6
if(c+q>s)throw A.h(A.o(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.h(A.o(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}}A.oH(e)},
oH(a){var s,r,q,p,o,n=A.S(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.c.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.c.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.c.h(n,o,r+1)
B.c.h(a,s,(o|r<<6)>>>0)}}},
l6(a,b){B.c.h(a,0,((a[0]<<8|b.F())&-1)>>>0)
B.c.h(a,1,(a[1]+8&-1)>>>0)},
mp(a,b,c){var s
while(s=b[1],s<a){B.c.h(b,0,((b[0]<<8|J.c(c.a,c.d++))&-1)>>>0)
B.c.h(b,1,(b[1]+8&-1)>>>0)}B.c.h(b,1,s-a)
return(B.a.br(b[0],b[1])&B.a.S(1,a)-1)>>>0},
fH:function fH(){this.b=this.a=0
this.c=null},
oL(a){var s=new A.dT(A.j([],t.U))
s.e4(a)
return s},
oM(a){var s=A.t(a,!1,null,0)
if(s.k()!==20000630)return!1
if(s.F()!==2)return!1
if((s.be()&4294967289)>>>0!==0)return!1
return!0},
dT:function dT(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
mE(a,b,c){var s=new A.fW(a,A.j([],t.g9),A.I(t.N,t.aX),B.aY,b)
s.h0(a,b,c)
return s},
dU:function dU(){},
is:function is(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c,d,e){var _=this
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
fX:function fX(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
fa:function fa(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
fY:function fY(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
fZ:function fZ(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
e9:function e9(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
ir:function ir(){this.a=null},
mr(a){var s=new Uint8Array(a*3)
return new A.dX(A.oT(a),a,null,new A.b0(s,a,3))},
oS(a){return new A.dX(a.a,a.b,a.c,A.mU(a.d))},
oT(a){var s
for(s=1;s<=8;++s)if(B.a.S(1,s)>=a)return s
return 0},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(){},
h_:function h_(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
dZ:function dZ(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
iv:function iv(){var _=this
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
mt(a){var s,r,q,p
if(a.n()!==0)return null
s=a.n()
if(s>=3)return null
if(B.de[s]===B.b_)return null
r=a.n()
q=J.bJ(r,t.gx)
for(p=0;p<r;++p){J.c(a.a,a.d++)
J.c(a.a,a.d++)
J.c(a.a,a.d++);++a.d
a.n()
a.n()
q[p]=new A.fP(a.k(),a.k())}return new A.fO(r,q)},
d_:function d_(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.d=a
this.e=b},
fP:function fP(a,b){this.d=a
this.e=b},
fN:function fN(a,b,c,d,e,f,g,h,i){var _=this
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
ix:function ix(){this.b=this.a=null},
fx:function fx(a,b,c){this.e=a
this.f=b
this.r=c},
bG:function bG(){},
c5:function c5(a){this.a=a},
e2:function e2(a){this.a=a},
to(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
if($.lT==null){s=new Uint8Array(768)
for(r=0;r<256;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=r}for(r=256;r<512;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=255}$.lT=s}for(q=b6.$flags|0,r=0;r<64;++r){p=b4[r]
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
b6[a9]=l-b}for(q=$.lT,p=b5.$flags|0,r=0;r<64;++r){q.toString
o=B.a.j(b6[r]+8,4)
o=384+((o&2147483647)-((o&2147483648)>>>0))
if(!(o>=0&&o<768))return A.a(q,o)
o=q[o]
p&2&&A.b(b5)
if(!(r<64))return A.a(b5,r)
b5[r]=o}},
t6(e5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="ifd0",e4=e5.w
if(e4.l(0,e3).a.ag(274)){s=e4.l(0,e3).gc2()
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
m=A.N(e2,e2,B.e,0,B.i,n,e2,0,3,e2,B.e,o,!1)
m.e=A.dS(e4)
m.gbG().l(0,e3).sc2(e2)
m.c=e5.r
l=s-1
k=q-1
switch(r){case 2:j=new A.kB(m,k)
break
case 3:j=new A.kC(m,k,l)
break
case 4:j=new A.kD(m,l)
break
case 5:j=new A.kE(m)
break
case 6:j=new A.kF(m,l)
break
case 7:j=new A.kG(m,l,k)
break
case 8:j=new A.kH(m,k)
break
default:j=m.gfQ()
break}e4=e5.as
i=e4.length
switch(i){case 1:if(0>=i)return A.a(e4,0)
h=e4[0]
g=h.e
f=h.f
e=h.r
for(e4=g.length,d=0;d<s;++d){c=B.a.a1(d,e)
if(!(c<e4))return A.a(g,c)
b=g[c]
for(a=0;a<q;++a){a0=B.a.a1(a,f)
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
for(e4=a6.length,i=a7.length,a2=a8.length,d=0;d<s;++d){c=B.a.a1(d,e)
b3=B.a.a1(d,b0)
b4=B.a.a1(d,b2)
if(!(c<e4))return A.a(a6,c)
b=a6[c]
if(!(b3<i))return A.a(a7,b3)
b5=a7[b3]
if(!(b4<a2))return A.a(a8,b4)
b6=a8[b4]
for(a=0;a<q;++a){a0=B.a.a1(a,f)
b7=B.a.a1(a,a9)
b8=B.a.a1(a,b1)
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
b9=B.a.J((c4&2147483647)-((c4&2147483648)>>>0),0,255)
c4=B.a.j(a1-88*c2-183*c3,8)
c0=B.a.J((c4&2147483647)-((c4&2147483648)>>>0),0,255)
c4=B.a.j(a1+454*c2,8)
c1=B.a.J((c4&2147483647)-((c4&2147483648)>>>0),0,255)}j.$5(a,d,b9,c0,c1)}}break
case 4:a2=e5.c
if(a2==null)throw A.h(A.o("Unsupported color mode (4 components)"))
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
for(e4=a6.length,i=a7.length,c4=a8.length,c9=c6.length,d=0;d<s;++d){c=B.a.a1(d,e)
b3=B.a.a1(d,b0)
b4=B.a.a1(d,b2)
d0=B.a.a1(d,c8)
if(!(c<e4))return A.a(a6,c)
b=a6[c]
if(!(b3<i))return A.a(a7,b3)
b5=a7[b3]
if(!(b4<c4))return A.a(a8,b4)
b6=a8[b4]
if(!(d0<c9))return A.a(c6,d0)
d1=c6[d0]
for(a=0;a<q;++a){a0=B.a.a1(a,f)
b7=B.a.a1(a,a9)
b8=B.a.a1(a,b1)
d2=B.a.a1(a,c7)
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
d3=255-B.a.J((d9&2147483647)-((d9&2147483648)>>>0),0,255)
d9=B.a.j(d8-88*d7-183*d6,8)
d4=255-B.a.J((d9&2147483647)-((d9&2147483648)>>>0),0,255)
d9=B.a.j(d8+454*d7,8)
a1=255-B.a.J((d9&2147483647)-((d9&2147483648)>>>0),0,255)}d9=B.a.j(d3*d5,8)
e0=B.a.j(d4*d5,8)
e1=B.a.j(a1*d5,8)
j.$5(a,d,(d9&2147483647)-((d9&2147483648)>>>0),(e0&2147483647)-((e0&2147483648)>>>0),(e1&2147483647)-((e1&2147483648)>>>0))}}break
default:throw A.h(A.o("Unsupported color mode"))}return m},
kB:function kB(a,b){this.a=a
this.b=b},
kC:function kC(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a){this.a=a},
kF:function kF(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a,b){this.a=a
this.b=b},
iH:function iH(){this.d=null},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
lh(){var s=A.S(4,null,!1,t.aR),r=A.j([],t.f8),q=t.eA,p=J.h6(0,q)
q=J.h6(0,q)
return new A.iJ(new A.c1(A.I(t.N,t.P)),s,r,p,q,A.j([],t.eB))},
iJ:function iJ(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.r=_.e=_.d=_.c=null
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f},
dB:function dB(a){this.a=a
this.b=0},
ha:function ha(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
hb:function hb(){this.b=this.a=0},
iM:function iM(){this.r=this.f=$},
hc:function hc(a,b,c,d,e,f,g,h){var _=this
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
h9:function h9(){},
iL(a){var s=null,r=new Uint8Array(64),q=new Uint8Array(64),p=new Float32Array(64),o=new Float32Array(64),n=A.S(65535,s,!1,t.T),m=t.I,l=A.S(65535,s,!1,m),k=A.S(64,s,!1,m)
m=A.S(64,s,!1,m)
r=new A.iK(r,q,p,o,n,l,k,m,new Int32Array(2048))
r.e=r.cP(B.bW,B.a8)
r.f=r.cP(B.bx,B.a8)
q=t.d
r.r=q.a(r.cP(B.bc,B.bl))
r.w=q.a(r.cP(B.bq,B.bG))
r.iq()
r.it()
r.fR(a)
return r},
iI:function iI(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d,e,f,g,h,i){var _=this
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
di:function di(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
eH:function eH(){},
h0:function h0(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mF(){var s=t.N
return new A.h1(A.I(s,s),A.j([],t.dm),A.j([],t.t))},
bN:function bN(a,b){this.a=a
this.b=b},
hp:function hp(){},
h1:function h1(a,b,c){var _=this
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
ho:function ho(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
bO:function bO(a,b){this.a=a
this.b=b},
bP:function bP(a){this.b=this.a=0
this.e=a},
j_:function j_(a){this.b=this.a=null
this.c=a},
j0:function j0(){},
hr:function hr(){this.a=null},
hs:function hs(){this.a=null},
bd:function bd(){},
hv:function hv(){this.a=null},
hw:function hw(){this.a=null},
hz:function hz(){this.a=null},
hA:function hA(){this.a=null},
eJ:function eJ(a){this.b=a},
hy:function hy(){},
j3:function j3(){var _=this
_.w=_.r=_.f=_.e=$},
cr:function cr(a){this.a=a
this.c=null},
lw(a){var s=new A.ht(A.j([],t.e),A.I(t.p,t.fh))
s.he(a)
return s},
lA(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.b.i(B.b.J((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
j5(a,b){if(b===0)return 0
return B.a.i(B.a.J(B.b.i(255*(1-(1-a/255)/(b/255))),0,255))},
j7(a,b){return B.a.i(B.a.J(a+b-255,0,255))},
lC(a,b){return B.a.i(B.a.J(255-(255-b)*(255-a),0,255))},
j6(a,b){if(b===255)return 255
return B.b.i(B.b.J(a/255/(1-b/255)*255,0,255))},
lD(a,b){var s=a/255,r=b/255,q=1-r
return B.b.aE(255*(q*r*s+r*(1-q*(1-s))))},
ly(a,b){var s=b/255,r=a/255
if(r<0.5)return B.b.aE(510*s*r)
else return B.b.aE(255*(1-2*(1-s)*(1-r)))},
lE(a,b){if(b<128)return A.j5(a,2*b)
else return A.j6(a,2*(b-128))},
lz(a,b){var s
if(b<128)return A.j7(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
lB(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
lx(a,b){return B.b.aE(b+a-2*b*a/255)},
aE(a,b,c){var s,r,q
if(a==null)s=0
else{s=a.length
if(c===1){if(!(b>=0&&b<s))return A.a(a,b)
s=a[b]}else{if(!(b>=0&&b<s))return A.a(a,b)
r=a[b]
q=b+1
if(!(q<s))return A.a(a,q)
q=(r<<8|a[q])>>>8
s=q}}return s},
n_(b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.I(t.p,t.fW)
for(s=c1.length,r=0;q=c1.length,r<q;c1.length===s||(0,A.a3)(c1),++r){p=c1[r]
b6.h(0,p.a,p)}if(b8===8)o=1
else o=b8===16?2:-1
n=A.N(b5,b5,B.e,0,B.i,c0,b5,0,q,b5,B.e,b9,!1)
if(o===-1)throw A.h(A.o("PSD: unsupported bit depth: "+A.C(b8)))
m=b6.l(0,0)
l=b6.l(0,1)
k=b6.l(0,2)
j=b6.l(0,-1)
i=A.j([0,0,0],t.t)
h=-o
for(s=n.a,s=s.gG(s),g=q>=5,f=q===4,e=q>=2,q=q>=4;s.D();){d=s.gM()
h+=o
switch(b7){case B.c7:d.sm(A.aE(m.c,h,o))
d.st(A.aE(l.c,h,o))
d.sq(A.aE(k.c,h,o))
d.sv(q?A.aE(j.c,h,o):255)
if(d.gv()!==0){d.sm((d.gm()+d.gv()-255)*255/d.gv())
d.st((d.gt()+d.gv()-255)*255/d.gv())
d.sq((d.gq()+d.gv()-255)*255/d.gv())}break
case B.c9:c=A.aE(m.c,h,o)
b=A.aE(l.c,h,o)
a=A.aE(k.c,h,o)
a0=q?A.aE(j.c,h,o):255
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
b0=[B.b.aE(B.b.J(a7*255,0,255)),B.b.aE(B.b.J(a8*255,0,255)),B.b.aE(B.b.J(a9*255,0,255))]
d.sm(b0[0])
d.st(b0[1])
d.sq(b0[2])
d.sv(a0)
break
case B.c6:b1=A.aE(m.c,h,o)
a0=e?A.aE(j.c,h,o):255
d.sm(b1)
d.st(b1)
d.sq(b1)
d.sv(a0)
break
case B.c8:b2=A.aE(m.c,h,o)
b3=A.aE(l.c,h,o)
a1=A.aE(k.c,h,o)
b4=A.aE(b6.l(0,f?-1:3).c,h,o)
a0=g?A.aE(j.c,h,o):255
A.nO(255-b2,255-b3,255-a1,255-b4,i)
d.sm(i[0])
d.st(i[1])
d.sq(i[2])
d.sv(a0)
break
default:throw A.h(A.o("Unhandled color mode: "+A.C(b7)))}}return n},
b2:function b2(a,b){this.a=a
this.b=b},
ht:function ht(a,b){var _=this
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
hu:function hu(){},
hx:function hx(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=null
_.cy=c},
pw(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.k()
if(s>=12){if(b.af(4)!=="8BIM")A.ac(A.o("Invalid key in layer additional data"))
b.af(4)}if(s>=16)b.k()
return new A.hy()
default:return new A.eJ(b)}},
dk:function dk(){},
j4:function j4(){this.a=null},
hB:function hB(){},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
dm:function dm(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
eK:function eK(){this.y=this.b=this.a=0},
br(a,b){var s,r=a>>>8
if(!(r<256))return A.a(B.P,r)
r=B.P[r]
s=b>>>8
if(!(s<256))return A.a(B.P,s)
return(r<<17|B.P[s]<<16|B.P[a&255]<<1|B.P[b&255])>>>0},
aQ:function aQ(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
j8:function j8(){this.b=this.a=null},
eO:function eO(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
ax:function ax(a,b){this.a=a
this.b=b},
jj:function jj(){this.a=null
this.b=$},
jk:function jk(a){this.a=a
this.c=this.b=0},
hG:function hG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
lH(a,b,c){var s=new A.jm(b,a),r=t.I
s.e=A.S(b,null,!1,r)
s.f=A.S(b,null,!1,r)
return s},
jm:function jm(a,b){var _=this
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
hH:function hH(a,b,c,d){var _=this
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
cv:function cv(a,b){this.a=a
this.b=b},
a9:function a9(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
hI:function hI(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
mR(){return new A.iU(new Uint8Array(4096))},
iU:function iU(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
jl:function jl(){this.b=this.a=null
this.c=$},
lJ(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.S(8,null,!1,t.eW),n=A.S(4,null,!1,t.dP)
return new A.jp(a,b,new A.jv(),new A.jy(),new A.jr(s,r),new A.jA(q,p),o,n,new Uint8Array(4))},
nb(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
jp:function jp(a,b,c,d,e,f,g,h,i){var _=this
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
_.cq=$
_.c1=null
_.dO=$
_.dP=_.fm=null
_.dQ=$},
jB:function jB(){},
n9(a){var s=new A.eR(a)
s.b=254
s.c=0
s.d=-8
return s},
eR:function eR(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
F(a,b,c){return B.a.av(B.a.j(a+2*b+c+2,2),32)},
pR(a){var s,r=A.j([A.F(J.c(a.a,a.d+-33),J.c(a.a,a.d+-32),J.c(a.a,a.d+-31)),A.F(J.c(a.a,a.d+-32),J.c(a.a,a.d+-31),J.c(a.a,a.d+-30)),A.F(J.c(a.a,a.d+-31),J.c(a.a,a.d+-30),J.c(a.a,a.d+-29)),A.F(J.c(a.a,a.d+-30),J.c(a.a,a.d+-29),J.c(a.a,a.d+-28))],t.t)
for(s=0;s<4;++s)a.bS(s*32,4,r)},
pJ(a){var s=J.c(a.a,a.d+-33),r=J.c(a.a,a.d+-1),q=J.c(a.a,a.d+31),p=J.c(a.a,a.d+63),o=J.c(a.a,a.d+95),n=A.p(a,null,0),m=n.cD(),l=A.F(s,r,q)
m.$flags&2&&A.b(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.cD()
m=A.F(r,q,p)
l.$flags&2&&A.b(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m
n.d+=32
m=n.cD()
l=A.F(q,p,o)
m.$flags&2&&A.b(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.cD()
m=A.F(p,o,o)
l.$flags&2&&A.b(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m},
pH(a){var s,r,q,p
for(s=4,r=0;r<4;++r)s+=J.c(a.a,a.d+(r-32))+J.c(a.a,a.d+(-1+r*32))
s=B.a.j(s,3)
for(r=0;r<4;++r){q=a.a
p=a.d+r*32
J.bi(q,p,p+4,s)}},
lK(a,b){var s,r,q,p,o,n,m=255-J.c(a.a,a.d+-33)
for(s=0,r=0;r<b;++r){q=m+J.c(a.a,a.d+(s-1))
for(p=0;p<b;++p){o=$.aF()
n=q+J.c(a.a,a.d+(-32+p))
if(!(n>=0&&n<766))return A.a(o,n)
n=o[n]
J.x(a.a,a.d+(s+p),n)}s+=32}},
pP(a){A.lK(a,4)},
pQ(a){A.lK(a,8)},
pO(a){A.lK(a,16)},
pN(a){var s,r=J.c(a.a,a.d+-1),q=J.c(a.a,a.d+31),p=J.c(a.a,a.d+63),o=J.c(a.a,a.d+95),n=J.c(a.a,a.d+-33),m=J.c(a.a,a.d+-32),l=J.c(a.a,a.d+-31),k=J.c(a.a,a.d+-30),j=J.c(a.a,a.d+-29)
a.h(0,96,A.F(q,p,o))
s=A.F(r,q,p)
a.h(0,97,s)
a.h(0,64,s)
s=A.F(n,r,q)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
s=A.F(m,n,r)
a.h(0,99,s)
a.h(0,66,s)
a.h(0,33,s)
a.h(0,0,s)
s=A.F(l,m,n)
a.h(0,67,s)
a.h(0,34,s)
a.h(0,1,s)
s=A.F(k,l,m)
a.h(0,35,s)
a.h(0,2,s)
a.h(0,3,A.F(j,k,l))},
pM(a){var s,r=J.c(a.a,a.d+-32),q=J.c(a.a,a.d+-31),p=J.c(a.a,a.d+-30),o=J.c(a.a,a.d+-29),n=J.c(a.a,a.d+-28),m=J.c(a.a,a.d+-27),l=J.c(a.a,a.d+-26),k=J.c(a.a,a.d+-25)
a.h(0,0,A.F(r,q,p))
s=A.F(q,p,o)
a.h(0,32,s)
a.h(0,1,s)
s=A.F(p,o,n)
a.h(0,64,s)
a.h(0,33,s)
a.h(0,2,s)
s=A.F(o,n,m)
a.h(0,96,s)
a.h(0,65,s)
a.h(0,34,s)
a.h(0,3,s)
s=A.F(n,m,l)
a.h(0,97,s)
a.h(0,66,s)
a.h(0,35,s)
s=A.F(m,l,k)
a.h(0,98,s)
a.h(0,67,s)
a.h(0,99,A.F(l,k,k))},
pT(a){var s=J.c(a.a,a.d+-1),r=J.c(a.a,a.d+31),q=J.c(a.a,a.d+63),p=J.c(a.a,a.d+-33),o=J.c(a.a,a.d+-32),n=J.c(a.a,a.d+-31),m=J.c(a.a,a.d+-30),l=J.c(a.a,a.d+-29),k=B.a.av(B.a.j(p+o+1,1),32)
a.h(0,65,k)
a.h(0,0,k)
k=B.a.av(B.a.j(o+n+1,1),32)
a.h(0,66,k)
a.h(0,1,k)
k=B.a.av(B.a.j(n+m+1,1),32)
a.h(0,67,k)
a.h(0,2,k)
a.h(0,3,B.a.av(B.a.j(m+l+1,1),32))
a.h(0,96,A.F(q,r,s))
a.h(0,64,A.F(r,s,p))
k=A.F(s,p,o)
a.h(0,97,k)
a.h(0,32,k)
k=A.F(p,o,n)
a.h(0,98,k)
a.h(0,33,k)
k=A.F(o,n,m)
a.h(0,99,k)
a.h(0,34,k)
a.h(0,35,A.F(n,m,l))},
pS(a){var s,r=J.c(a.a,a.d+-32),q=J.c(a.a,a.d+-31),p=J.c(a.a,a.d+-30),o=J.c(a.a,a.d+-29),n=J.c(a.a,a.d+-28),m=J.c(a.a,a.d+-27),l=J.c(a.a,a.d+-26),k=J.c(a.a,a.d+-25)
a.h(0,0,B.a.av(B.a.j(r+q+1,1),32))
s=B.a.av(B.a.j(q+p+1,1),32)
a.h(0,64,s)
a.h(0,1,s)
s=B.a.av(B.a.j(p+o+1,1),32)
a.h(0,65,s)
a.h(0,2,s)
s=B.a.av(B.a.j(o+n+1,1),32)
a.h(0,66,s)
a.h(0,3,s)
a.h(0,32,A.F(r,q,p))
s=A.F(q,p,o)
a.h(0,96,s)
a.h(0,33,s)
s=A.F(p,o,n)
a.h(0,97,s)
a.h(0,34,s)
s=A.F(o,n,m)
a.h(0,98,s)
a.h(0,35,s)
a.h(0,67,A.F(n,m,l))
a.h(0,99,A.F(m,l,k))},
pK(a){var s,r=J.c(a.a,a.d+-1),q=J.c(a.a,a.d+31),p=J.c(a.a,a.d+63),o=J.c(a.a,a.d+95)
a.h(0,0,B.a.av(B.a.j(r+q+1,1),32))
s=B.a.av(B.a.j(q+p+1,1),32)
a.h(0,32,s)
a.h(0,2,s)
s=B.a.av(B.a.j(p+o+1,1),32)
a.h(0,64,s)
a.h(0,34,s)
a.h(0,1,A.F(r,q,p))
s=A.F(q,p,o)
a.h(0,33,s)
a.h(0,3,s)
s=A.F(p,o,o)
a.h(0,65,s)
a.h(0,35,s)
a.h(0,99,o)
a.h(0,98,o)
a.h(0,97,o)
a.h(0,96,o)
a.h(0,66,o)
a.h(0,67,o)},
pI(a){var s=J.c(a.a,a.d+-1),r=J.c(a.a,a.d+31),q=J.c(a.a,a.d+63),p=J.c(a.a,a.d+95),o=J.c(a.a,a.d+-33),n=J.c(a.a,a.d+-32),m=J.c(a.a,a.d+-31),l=J.c(a.a,a.d+-30),k=B.a.av(B.a.j(s+o+1,1),32)
a.h(0,34,k)
a.h(0,0,k)
k=B.a.av(B.a.j(r+s+1,1),32)
a.h(0,66,k)
a.h(0,32,k)
k=B.a.av(B.a.j(q+r+1,1),32)
a.h(0,98,k)
a.h(0,64,k)
a.h(0,96,B.a.av(B.a.j(p+q+1,1),32))
a.h(0,3,A.F(n,m,l))
a.h(0,2,A.F(o,n,m))
k=A.F(s,o,n)
a.h(0,35,k)
a.h(0,1,k)
k=A.F(r,s,o)
a.h(0,67,k)
a.h(0,33,k)
k=A.F(q,r,s)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.F(p,q,r))},
q3(a){var s
for(s=0;s<16;++s)a.bc(s*32,16,a,-32)},
q1(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=J.c(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.bi(p,o,o+16,q)
s+=32}},
jt(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.bi(r,q,q+16,a)}},
pU(a){var s,r
for(s=16,r=0;r<16;++r)s+=J.c(a.a,a.d+(-1+r*32))+J.c(a.a,a.d+(r-32))
A.jt(B.a.j(s,5),a)},
pW(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.c(a.a,a.d+(-1+r*32))
A.jt(B.a.j(s,4),a)},
pV(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.c(a.a,a.d+(r-32))
A.jt(B.a.j(s,4),a)},
pX(a){A.jt(128,a)},
q4(a){var s
for(s=0;s<8;++s)a.bc(s*32,8,a,-32)},
q2(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=J.c(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.bi(p,o,o+8,q)
s+=32}},
ju(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.bi(r,q,q+8,a)}},
pY(a){var s,r
for(s=8,r=0;r<8;++r)s+=J.c(a.a,a.d+(r-32))+J.c(a.a,a.d+(-1+r*32))
A.ju(B.a.j(s,4),a)},
pZ(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.c(a.a,a.d+(r-32))
A.ju(B.a.j(s,3),a)},
q_(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.c(a.a,a.d+(-1+r*32))
A.ju(B.a.j(s,3),a)},
q0(a){A.ju(128,a)},
bR(a,b,c,d,e){var s=b+c+d*32,r=J.c(a.a,a.d+s)+B.a.j(e,3)
if(!((r&-256)>>>0===0))r=r<0?0:255
a.h(0,s,r)},
js(a,b,c,d,e){A.bR(a,0,0,b,c+d)
A.bR(a,0,1,b,c+e)
A.bR(a,0,2,b,c-e)
A.bR(a,0,3,b,c-d)},
pL(){var s,r,q,p
if(!$.na){for(s=-255;s<=255;++s){r=$.ib()
q=255+s
p=s<0?-s:s
r.$flags&2&&A.b(r)
r[q]=p
p=$.kY()
r=B.a.j(r[q],1)
p.$flags&2&&A.b(p)
p[q]=r}for(s=-1020;s<=1020;++s){r=$.kZ()
if(s<-128)q=-128
else q=s>127?127:s
r.$flags&2&&A.b(r)
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.l_()
if(s<-16)q=-16
else q=s>15?15:s
r.$flags&2&&A.b(r)
r[112+s]=q}for(s=-255;s<=510;++s){r=$.aF()
if(s<0)q=0
else q=s>255?255:s
r.$flags&2&&A.b(r)
r[255+s]=q}$.na=!0}},
jq:function jq(){},
pG(){var s,r=J.am(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.eQ(r)},
qk(){var s,r,q,p,o=new Uint8Array(3),n=J.am(4,t.c7)
for(s=t.dd,r=0;r<4;++r){q=J.am(8,s)
for(p=0;p<8;++p)q[p]=A.pG()
n[r]=q}B.f.aF(o,0,3,255)
return new A.jz(o,n)},
jv:function jv(){this.d=$},
jy:function jy(){},
jA:function jA(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
eQ:function eQ(a){this.a=a},
jz:function jz(a,b){this.a=a
this.b=b},
jr:function jr(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bA:function bA(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
eT:function eT(){this.b=this.a=0},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
lL(a,b){var s,r=A.j([],t.V),q=A.j([],t.gk),p=new Uint32Array(2),o=new A.hN(a,p)
p=o.e=J.a_(B.o.gA(p),0,null)
s=a.F()
p.$flags&2&&A.b(p)
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.F()
p.$flags&2&&A.b(p)
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.F()
p.$flags&2&&A.b(p)
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.F()
p.$flags&2&&A.b(p)
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.F()
p.$flags&2&&A.b(p)
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.F()
p.$flags&2&&A.b(p)
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.F()
p.$flags&2&&A.b(p)
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.F()
p.$flags&2&&A.b(p)
if(7>=p.length)return A.a(p,7)
p[7]=s
o.b=!1
return new A.eS(o,b,r,q)},
bS(a,b){return B.a.j(a+B.a.S(1,b)-1,b)},
eS:function eS(a,b,c,d){var _=this
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
h2:function h2(a,b,c,d){var _=this
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
hN:function hN(a,b){var _=this
_.a=0
_.b=!0
_.c=a
_.d=b
_.e=$},
jw:function jw(a,b){this.a=a
this.b=b},
bB(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
cx(a){if(a<0)return 0
if(a>255)return 255
return a},
jx(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
q5(a,b,c){return 4278190080},
q6(a,b,c){return a},
qb(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return b[c]},
qc(a,b,c){var s=c+1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
qd(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
qe(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.bB(A.bB(a,b[r]),s)},
qf(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return A.bB(a,b[s])},
qg(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return A.bB(a,b[c])},
qh(a,b,c){var s=c-1,r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
if(!(c>=0&&c<r))return A.a(b,c)
return A.bB(s,b[c])},
qi(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.bB(s,b[r])},
q7(a,b,c){var s,r,q=c-1,p=b.length
if(!(q>=0&&q<p))return A.a(b,q)
q=b[q]
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<p))return A.a(b,r)
r=b[r]
return A.bB(A.bB(a,q),A.bB(s,r))},
q8(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return A.jx(s>>>24,a>>>24,r>>>24)+A.jx(s>>>16&255,a>>>16&255,r>>>16&255)+A.jx(s>>>8&255,a>>>8&255,r>>>8&255)+A.jx(s&255,a&255,r&255)<=0?s:a},
q9(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return(A.cx((a>>>24)+(s>>>24)-(r>>>24))<<24|A.cx((a>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.cx((a>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.cx((a&255)+(s&255)-(r&255)))>>>0},
qa(a,b,c){var s,r,q,p,o,n=b.length
if(!(c>=0&&c<n))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<n))return A.a(b,r)
r=b[r]
q=A.bB(a,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.cx(s+B.a.V(s-(r>>>24),2))<<24|A.cx(n+B.a.V(n-(r>>>16&255),2))<<16|A.cx(p+B.a.V(p-(r>>>8&255),2))<<8|A.cx(o+B.a.V(o-(r&255),2)))>>>0},
cw:function cw(a,b){this.a=a
this.b=b},
hO:function hO(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
jC:function jC(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
eW:function eW(){},
h3:function h3(a,b,c){var _=this
_.a=a
_.b=b
_.e=c
_.f=$
_.r=1
_.x=_.w=$},
l9(a){var s,r=J.bJ(a,t.gj)
for(s=0;s<a;++s)r[s]=new A.fJ()
return new A.e0(r,0)},
oU(){var s,r,q=J.am(5,t.fa)
for(s=0;s<5;++s)q[s]=A.l9(0)
r=J.am(64,t.ak)
for(s=0;s<64;++s)r[s]=new A.fK()
return new A.e_(q,r)},
fJ:function fJ(){this.b=this.a=0},
fK:function fK(){this.b=this.a=0},
e0:function e0(a,b){this.a=a
this.b=b},
e_:function e_(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.e=_.d=!1
_.f=b},
e1:function e1(){var _=this
_.b=_.a=null
_.e=_.d=0},
fL:function fL(a){this.a=a
this.b=null},
dx:function dx(a,b){this.a=a
this.b=b},
dy:function dy(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
ea:function ea(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
jD:function jD(){this.b=this.a=null},
ms(a){return new A.cZ(a.a,a.b,B.f.fW(a.c,0))},
fM:function fM(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
N(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r=new A.bn(null,null,null,a,h,e,d,0)
B.c.N(r.gaD(),r)
r.c=g
if(b!=null)r.e=A.dS(b)
s=!1
if(j==null)if(m)s=r.gK()===B.w||r.gK()===B.B||r.gK()===B.C||r.gK()===B.e||r.gK()===B.l
r.el(l,f,c,i,s?r.hF(c,k,i):j)
return r},
fQ(a,b,c,d){var s,r,q,p=null,o=a.e
o=o==null?p:A.dS(o)
s=a.c
s=s==null?p:A.ms(s)
r=a.w
q=a.r
o=new A.bn(p,s,o,p,q,r,a.y,a.z)
o.hb(a,b,c,d)
return o},
bI(a,b,c){var s,r,q,p,o=null,n=a.a
n=n==null?o:n.an(c)
s=a.e
s=s==null?o:A.dS(s)
r=a.c
r=r==null?o:A.ms(r)
q=a.w
p=a.r
n=new A.bn(n,r,s,o,p,q,a.y,a.z)
n.ha(a,b,c)
return n},
fI:function fI(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c,d,e,f,g,h){var _=this
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
iD:function iD(a,b){this.a=a
this.b=b},
iC:function iC(){},
ah:function ah(){},
oV(a,b,c){return new A.d4(new Uint16Array(a*b*c),a,b,c)},
d4:function d4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
oW(a,b,c){return new A.d5(new Float32Array(a*b*c),a,b,c)},
d5:function d5(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e3:function e3(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e4:function e4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e5:function e5(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e6:function e6(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
d6:function d6(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
d7:function d7(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
d8:function d8(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
oX(a,b,c){return new A.d9(new Uint32Array(a*b*c),a,b,c)},
d9:function d9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
da:function da(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
mD(a,b,c){return new A.db(new Uint8Array(a*b*c),null,a,b,c)},
db:function db(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
eb:function eb(a,b){this.a=a
this.b=b},
aP:function aP(){},
ev:function ev(a,b,c){this.c=a
this.a=b
this.b=c},
ew:function ew(a,b,c){this.c=a
this.a=b
this.b=c},
ex:function ex(a,b,c){this.c=a
this.a=b
this.b=c},
ey:function ey(a,b,c){this.c=a
this.a=b
this.b=c},
ez:function ez(a,b,c){this.c=a
this.a=b
this.b=c},
eA:function eA(a,b,c){this.c=a
this.a=b
this.b=c},
eB:function eB(a,b,c){this.c=a
this.a=b
this.b=c},
eC:function eC(a,b,c){this.c=a
this.a=b
this.b=c},
mU(a){return new A.b0(new Uint8Array(A.z(a.c)),a.a,a.b)},
b0:function b0(a,b,c){this.c=a
this.a=b
this.b=c},
ln(a){return new A.cf(-1,0,-a.c,a)},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lo(a){return new A.cg(-1,0,-a.c,a)},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lp(a){return new A.ch(-1,0,-a.c,a)},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lq(a){return new A.ci(-1,0,-a.c,a)},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lr(a){return new A.cj(-1,0,-a.c,a)},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ls(a){return new A.ck(-1,0,-a.c,a)},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1(a,b,c,d,e){a.a0(b-1,c)
return new A.hm(a,b,b+d-1,c+e-1)},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
eD(a){return new A.cl(-1,0,0,-1,0,a)},
cl:function cl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lt(a){return new A.cm(-1,0,-a.c,a)},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE(a){return new A.cn(-1,0,0,-2,0,a)},
cn:function cn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lu(a){return new A.co(-1,0,-a.c,a)},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF(a){return new A.cp(-1,0,0,-(a.c<<2>>>0),a)},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iZ(a){return new A.cq(-1,0,-a.c,a)},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(){},
t3(a,b){switch(b.a){case 0:A.i8(a)
break
case 1:A.t5(a)
break
case 2:A.t4(a)
break}return a},
t5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.gaD().length
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
k=B.a.V(l,2)
o=a.a
if((o==null?d:o.gT())!=null)for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.O(h,i,d)
if(g==null)g=new A.H()
o=p.a
f=o==null?d:o.O(h,j,d)
if(f==null)f=new A.H()
e=g.gP()
g.sP(f.gP())
f.sP(e)}else for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.O(h,i,d)
if(g==null)g=new A.H()
o=p.a
f=o==null?d:o.O(h,j,d)
if(f==null)f=new A.H()
e=g.gm()
g.sm(f.gm())
f.sm(e)
e=g.gt()
g.st(f.gt())
f.st(e)
e=g.gq()
g.sq(f.gq())
f.sq(e)
e=g.gv()
g.sv(f.gv())
f.sv(e)}}return a},
i8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.gaD().length
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
k=B.a.V(m,2)
o=a.a
if((o==null?c:o.gT())!=null)for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.O(g,i,c)
if(f==null)f=new A.H()
o=p.a
e=o==null?c:o.O(h,i,c)
if(e==null)e=new A.H()
d=f.gP()
f.sP(e.gP())
e.sP(d)}else for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.O(g,i,c)
if(f==null)f=new A.H()
o=p.a
e=o==null?c:o.O(h,i,c)
if(e==null)e=new A.H()
d=f.gm()
f.sm(e.gm())
e.sm(d)
d=f.gt()
f.st(e.gt())
e.st(d)
d=f.gq()
f.sq(e.gq())
e.sq(d)
d=f.gv()
f.sv(e.gv())
e.sv(d)}}return a},
t4(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.gaD().length
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
k=B.a.V(l,2)
if((n?b:o.gT())!=null)for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.O(f,h,b)
if(e==null)e=new A.H()
o=p.a
d=o==null?b:o.O(g,j,b)
if(d==null)d=new A.H()
c=e.gP()
e.sP(d.gP())
d.sP(c)}else for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.O(f,h,b)
if(e==null)e=new A.H()
o=p.a
d=o==null?b:o.O(g,j,b)
if(d==null)d=new A.H()
c=e.gm()
e.sm(d.gm())
d.sm(c)
c=e.gt()
e.st(d.gt())
d.st(c)
c=e.gq()
e.sq(d.gq())
d.sq(c)
c=e.gv()
e.sv(d.gv())
d.sv(c)}}return a0},
it:function it(a,b){this.a=a
this.b=b},
o(a){return new A.iB(a)},
iB:function iB(a){this.a=a},
t(a,b,c,d){var s=J.a1(a),r=s.gu(a)
s=c==null?s.gu(a):d+c
return new A.ai(a,d,Math.min(r,s),d,b)},
p(a,b,c){var s=a.a,r=a.d,q=a.b,p=J.ba(s),o=b==null?a.c:a.d+c+b
return new A.ai(s,q,Math.min(p,o),r+c,a.e)},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eu(a,b){return new A.iY(a,new Uint8Array(b))},
iY:function iY(a,b){this.a=0
this.b=a
this.c=b},
dp:function dp(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(){},
j9:function j9(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pz(a,b,c){var s,r,q,p,o,n
if(b<24||c<24||a.length<b*c*3)return B.jP
s=b*c
r=new Float32Array(s)
q=new Float32Array(s)
p=new Float32Array(s)
o=new Float32Array(s)
n=new A.jQ(b,c,r,q,p,o,new Float32Array(s))
n.hj(a,b,c)
return A.rc(A.ra(n),b,c)},
rA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=b*c,g=new Float32Array(h),f=new Float32Array(h)
for(s=a.length,r=b-1,q=0;q<c;++q)for(p=q*b,o=0;o<b;++o){n=Math.max(0,o-d)
m=Math.min(r,o+d)
for(l=n,k=0;l<=m;++l){j=p+l
if(!(j>=0&&j<s))return A.a(a,j)
i=a[j]
if(i>k)k=i}j=p+o
if(!(j>=0&&j<h))return A.a(g,j)
g[j]=k}for(s=c-1,o=0;o<b;++o)for(q=0;q<c;++q){n=Math.max(0,q-d)
m=Math.min(s,q+d)
for(l=n,k=0;l<=m;++l){r=l*b+o
if(!(r>=0&&r<h))return A.a(g,r)
i=g[r]
if(i>k)k=i}r=q*b+o
if(!(r>=0&&r<h))return A.a(f,r)
f[r]=k}return f},
ra(d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=d0.a,c4=d0.b,c5=c3*c4,c6=Math.max(c3,c4),c7=d0.c,c8=A.rA(c7,c3,c4,8),c9=new Uint8Array(c5)
for(s=c7.length,r=d0.d,q=r.length,p=c8.length,o=c3-3,n=c4-3,m=2*c3,l=0;l<c4;++l)for(k=l*c3,j=l>=2,i=l>n,h=0;h<c3;++h){g=k+h
if(!(g>=0&&g<q))return A.a(r,g)
if(r[g]>=0.45){if(!(g<s))return A.a(c7,g)
f=c7[g]>=0.12}else f=!1
if(!(g<s))return A.a(c7,g)
e=c7[g]
if(!(e<0.09))if(!f){if(!(g<p))return A.a(c8,g)
d=c8[g]
d=e<0.38*d&&d>0.15}else d=!1
else d=!0
if(d){if(!(g<c5))return A.a(c9,g)
c9[g]=1
continue}if(h<2||!j||h>o||i)continue
d=g-2
if(!(d>=0&&d<s))return A.a(c7,d)
d=c7[d]
c=g+2
if(!(c<s))return A.a(c7,c)
if(!(e<0.72*Math.min(d,c7[c]))){d=g-m
if(!(d>=0&&d<s))return A.a(c7,d)
d=c7[d]
c=g+m
if(!(c>=0&&c<s))return A.a(c7,c)
c=e<0.72*Math.min(d,c7[c])
e=c}else e=!0
if(e){if(!(g<c5))return A.a(c9,g)
c9[g]=1
continue}e=new A.kn(d0)
d=e.$2(g-1,g+1)
e=e.$2(g-c3,g+c3)
if(Math.max(A.nM(d),A.nM(e))>15){if(!(g<c5))return A.a(c9,g)
c9[g]=1}}b=new Uint8Array(c5)
a=new Int32Array(c5)
a0=A.j([],t.R)
a1=Math.max(60,B.b.aE(c5*0.0004))
a2=B.b.aE(c5*0.12)
for(c7=c4-1,s=c3-1,a3=0;a3<c5;++a3){if(c9[a3]===1||b[a3]===1)continue
if(0>=c5)return A.a(a,0)
a[0]=a3
if(!(a3<c5))return A.a(b,a3)
b[a3]=1
for(a4=1,a5=0,a6=0,a7=0,a8=0,a9=0,b0=0;a4>0;){--a4
if(!(a4<c5))return A.a(a,a4)
g=a[a4]
h=B.a.a_(g,c3)
l=B.a.az(g,c3);++a5
a6+=h
a7+=l
a8+=h*h
a9+=l*l
b0+=h*l
r=!1
if(h>0){q=g-1
if(!(q>=0&&q<c5))return A.a(c9,q)
if(c9[q]===0){if(!(q<c5))return A.a(b,q)
r=b[q]===0}}if(r){r=g-1
if(!(r>=0&&r<c5))return A.a(b,r)
b[r]=1
b1=a4+1
if(!(a4<c5))return A.a(a,a4)
a[a4]=r
a4=b1}r=!1
if(h<s){q=g+1
if(!(q>=0&&q<c5))return A.a(c9,q)
if(c9[q]===0){if(!(q<c5))return A.a(b,q)
r=b[q]===0}}if(r){r=g+1
if(!(r>=0&&r<c5))return A.a(b,r)
b[r]=1
b1=a4+1
if(!(a4<c5))return A.a(a,a4)
a[a4]=r
a4=b1}r=!1
if(l>0){q=g-c3
if(!(q>=0&&q<c5))return A.a(c9,q)
if(c9[q]===0){if(!(q<c5))return A.a(b,q)
r=b[q]===0}}if(r){r=g-c3
if(!(r>=0&&r<c5))return A.a(b,r)
b[r]=1
b1=a4+1
if(!(a4<c5))return A.a(a,a4)
a[a4]=r
a4=b1}r=!1
if(l<c7){q=g+c3
if(!(q>=0&&q<c5))return A.a(c9,q)
if(c9[q]===0){if(!(q<c5))return A.a(b,q)
r=b[q]===0}}if(r){r=g+c3
if(!(r>=0&&r<c5))return A.a(b,r)
b[r]=1
b1=a4+1
if(!(a4<c5))return A.a(a,a4)
a[a4]=r
a4=b1}}if(a5<a1||a5>a2)continue
b2=a6/a5
b3=a7/a5
b4=a8/a5-b2*b2+0.08333333333333333
b5=a9/a5-b3*b3+0.08333333333333333
b6=b0/a5-b2*b3
b7=b4+b5
b8=Math.sqrt(Math.max(0,b7*b7/4-(b4*b5-b6*b6)))
r=b7/2
b9=Math.max(0.000001,r-b8)
c0=Math.sqrt(12*(r+b8))
c1=Math.sqrt(12*b9)
c2=a5/(c0*c1)
if(c0/c1>2.6||c2<0.72||c2>1.2)continue
B.c.N(a0,new A.hR(b2/c6,b3/c6,a5))}return a0},
nx(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=a9.length
if(a8<4)return null
s=a8>=6
r=J.bJ(8,t.H)
for(a8=t.i,q=0;q<8;++q)r[q]=A.S(9,0,!1,a8)
for(p=a9.length,o=t.cA,n=0;n<a9.length;a9.length===p||(0,A.a3)(a9),++n){m=a9[n].a
l=m[0]
k=m[1]
j=m[2]
i=m[3]
m=-l
h=-k
for(m=[new A.bT(A.j([l,k,1,0,0,0,m*j,h*j],o),j),new A.bT(A.j([0,0,0,l,k,1,m*i,h*i],o),i)],g=0;g<2;++g){h=m[g]
f=h.a
e=h.b
for(h=J.al(f),d=0;d<8;++d){for(c=0;c<8;++c){b=r[d]
B.c.h(b,c,b[c]+h.l(f,d)*h.l(f,c))}b=r[d]
B.c.h(b,8,b[8]+h.l(f,d)*e)}}}p=r[6]
o=p[6]
B.c.h(p,6,o+(s?1e-9:1e6))
p=r[7]
o=p[7]
B.c.h(p,7,o+(s?1e-9:1e6))
for(a=0;a<8;a=a0){for(a0=a+1,a1=a0,a2=a;a1<8;++a1){p=r[a1][a]
if(!(a2>=0&&a2<8))return A.a(r,a2)
if(Math.abs(p)>Math.abs(r[a2][a]))a2=a1}if(!(a2>=0&&a2<8))return A.a(r,a2)
p=r[a2]
if(Math.abs(p[a])<1e-12)return null
a3=r[a]
r[a]=p
r[a2]=a3
for(a1=a0;a1<8;++a1){p=r[a1]
o=p[a]
m=r[a]
a4=o/m[a]
for(a5=a;a5<9;++a5)B.c.h(p,a5,p[a5]-a4*m[a5])}}a6=A.S(8,0,!1,a8)
for(d=7;d>=0;--d){a8=r[d]
a7=a8[8]
for(c=d+1;c<8;++c)a7-=a8[c]*a6[c]
B.c.h(a6,d,a7/a8[d])}if(B.c.f6(a6,new A.kt()))return null
return new A.k5(a6)},
nC(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.p,h=A.S(9,-1,!1,i),g=A.S(9,1/0,!1,t.i),f=A.I(i,i)
for(s=0;s<9;++s){if(!(s<b.length))return A.a(b,s)
r=b[s]
q=r.a
p=r.b
for(o=c,n=-1,m=0;m<a.length;++m){l=a[m].gbL()/d
if(l<0.5||l>1.9)continue
if(!(m<a.length))return A.a(a,m)
i=Math.pow(a[m].a-q,2)
if(!(m<a.length))return A.a(a,m)
k=Math.sqrt(i+Math.pow(a[m].b-p,2))
if(k<o){o=k
n=m}}if(n<0)continue
j=f.l(0,n)
if(j!=null){if(j>>>0!==j||j>=9)return A.a(g,j)
if(g[j]<=o)continue
B.c.h(h,j,-1)}f.h(0,n,s)
B.c.h(h,s,n)
B.c.h(g,s,o)}return h},
r9(b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null
if(!(c0<b9.length))return A.a(b9,c0)
s=b9[c0]
r=Math.sqrt(c1*c1+c2*c2)
q=Math.sqrt(c3*c3+c4*c4)
p=t.fD
o=A.j([],p)
for(n=s.a,m=s.b,l=0;l<3;++l)for(k=l-c5,j=k*c3,k*=c4,i=0;i<3;++i){h=i-c6
o.push(new A.bT(n+h*c1+j,m+h*c2+k))}n=s.gbL()
g=A.nC(b9,o,0.42*((r+q)/2),n)
for(r=t.eV,f=0;f<4;++f,g=b){q=A.j([],r)
for(e=0;e<9;++e){o=g[e]
if(o>=0){m=B.a.a_(e,3)
k=B.a.V(e,3)
if(!(o<b9.length))return A.a(b9,o)
o=b9[o]
q.push(new A.cA([(m+0.5)/3,(k+0.5)/3,o.a,o.b]))}}d=A.nx(q)
if(d==null)return b8
c=d.gfv()
if(!isFinite(c)||c<=0)return b8
q=A.j([],p)
for(l=0;l<3;++l)for(o=(l+0.5)/3,i=0;i<3;++i)q.push(d.bm(0,(i+0.5)/3,o))
b=A.nC(b9,q,(f===0?0.36:0.3)*c,n)
for(a=!0,e=0;e<9;++e)if(b[e]!==g[e])a=!1
if(a){g=b
break}}r=A.j([],r)
for(e=0;e<9;++e){q=g[e]
if(q>=0){p=B.a.a_(e,3)
o=B.a.V(e,3)
if(!(q<b9.length))return A.a(b9,q)
q=b9[q]
r.push(new A.cA([(p+0.5)/3,(o+0.5)/3,q.a,q.b]))}}q=t.p
a0=A.mO(q)
a1=A.mO(q)
for(e=0;e<9;++e){if(g[e]<0)continue
a0.N(0,B.a.V(e,3))
a1.N(0,B.a.a_(e,3))}a2=a0.a===3&&a1.a===3
a3=A.nx(r)
if(a3==null)return b8
c=a3.gfv()
a4=r.length
r=a4>=4
if(!r||!isFinite(c)||c<=0)return b8
for(a5=0,e=0;e<9;++e){if(g[e]<0)continue
q=B.a.V(e,3)
a6=a3.bm(0,(B.a.a_(e,3)+0.5)/3,(q+0.5)/3)
q=g[e]
if(!(q>=0&&q<b9.length))return A.a(b9,q)
q=Math.pow(b9[q].a-a6.a,2)
p=g[e]
if(!(p>=0&&p<b9.length))return A.a(b9,p)
a5+=q+Math.pow(b9[p].b-a6.b,2)}a7=Math.sqrt(a5/a4)/c
if(!r||a7>0.3)return b8
r=A.a5(g)
a8=new A.eh(new A.bg(g,r.p("W(1)").a(new A.kk()),r.p("bg<1>")),r.p("l(1)").a(new A.kl(b9)),r.p("eh<1,l>")).cA(0,new A.km())/a4
for(r=0.3*c,a9=0,l=-1;l<=3;++l)for(q=(l+0.5)/3,p=l>=0,o=l<=2,i=-1;i<=3;++i){if(p&&o&&i>=0&&i<=2)continue
b0=a3.bm(0,(i+0.5)/3,q)
b1=b0.a
b2=b0.b
for(n=b9.length,b3=0;b3<b9.length;b9.length===n||(0,A.a3)(b9),++b3){b4=b9[b3]
b5=b4.gbL()/a8
if(b5<0.7||b5>1.4)continue
if(Math.sqrt(Math.pow(b4.a-b1,2)+Math.pow(b4.b-b2,2))<r){b6=a9+1
a9=b6
break}}}for(b7=0,b3=0;b3<9;++b3){e=g[b3]
if(e>=0){if(!(e<b9.length))return A.a(b9,e)
b7+=Math.pow(b9[e].gbL()-a8,2)}}return new A.jR(g,a4,a7,a3,c,a4-12*a7-6*(Math.sqrt(b7/a4)/a8)-0.25*a9+0.5*Math.min(1,c/0.25),a2,a9)},
rc(c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c2.length
if(c1<3)return new A.bQ(c0,B.al,c1)
s=Math.max(c3,c4)
r=A.j([],t.bC)
for(c1=t.at,q=t.fe,p=q.p("bq<a7.E>"),o=q.p("a7.E"),n=t.g7,m=t.ci,l=0;l<c2.length;++l){k=c2[l]
j=A.j([],m)
for(i=k.a,h=k.b,g=0;g<c2.length;++g){if(l===g)continue
f=c2[g]
e=f.gbL()
d=k.gbL()
c=e/d
if(c<0.45||c>2.2)continue
b=f.a-i
a=f.b-h
a0=Math.sqrt(b*b+a*a)
a1=d/s
if(a0<0.9*a1||a0>2.4*a1)continue
B.c.N(j,new A.cA([g,b,a,a0]))}B.c.e0(j,new A.ks())
i=A.j([],n)
h=new A.cu(j,0,9,q)
h.hg(j,0,9,c1)
h=new A.bq(h,h.gu(0),p)
while(h.D()){a2=h.d
e=(a2==null?o.a(a2):a2).a
i.push(new A.dE(e[0],e[1],e[2]))}B.c.N(r,i)}for(a3=c0,a4=a3,l=0;l<c2.length;++l){if(!(l<r.length))return A.a(r,l)
a5=r[l]
for(a6=0;a6<a5.length;++a6)for(a7=0;c1=a5.length,a7<c1;++a7){if(a6===a7)continue
if(!(a6<c1))return A.a(a5,a6)
a8=a5[a6]
a9=a8.b
b0=a8.c
b1=a5[a7]
b2=b1.b
b3=b1.c
if(a9*b3-b0*b2<=0)continue
b4=Math.sqrt(a9*a9+b0*b0)
b5=Math.sqrt(b2*b2+b3*b3)
c=b4/b5
if(c<0.4||c>2.5)continue
if(Math.abs(a9*b2+b0*b3)/(b4*b5)>0.62)continue
for(b6=0;b6<3;++b6)for(b7=0;b7<3;++b7){b8=A.r9(c2,l,a9,b0,b2,b3,b6,b7)
if(b8==null)continue
if(a3==null||b8.f>a3.f)a3=b8
c1=!1
if(b8.r)if(b8.w<6)c1=a4==null||b8.f>a4.f
if(c1)a4=b8}}}if(a4==null){b9=a3==null?c0:a3.b
if(b9==null)b9=0
return new A.bQ(c0,b9>=4?B.aI:B.al,b9)}c1=a4.b
if(c1<6||a4.c>0.22)return new A.bQ(c0,c1>=4?B.aI:B.al,c1)
return A.rb(a4,c2,c3,c4,s)},
rb(a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4={},a5=a7.d,a6=[a5.bm(0,0,0),a5.bm(0,1,0),a5.bm(0,1,1),a5.bm(0,0,1)]
for(s=0,r=-2,q=0;q<4;q=o){p=a6[B.a.a_(q,4)]
o=q+1
n=a6[o%4]
m=n.a-p.a
l=n.b-p.b
k=m/Math.sqrt(m*m+l*l)
if(k>r){r=k
s=q}}a4.a=!1
j=new A.kr(a4,b1,a9,b0,0.06)
a5=A.j([],t.h)
for(i=0;i<4;++i)a5.push(j.$1(a6[B.a.a_(i+s,4)]))
h=A.n3(a5)
if(a4.a||!h.gfG())return new A.bQ(null,B.aI,a7.b)
g=A.n2(h)
f=A.S(9,!1,!1,t.y)
a5=A.j([],t.R)
for(e=a7.a,d=0;d<9;++d){i=e[d]
if(i>=0){if(!(i<a8.length))return A.a(a8,i)
a5.push(a8[i])}}for(e=a7.e,c=0.45*e,i=0;i<9;++i){b=g.bm(0,(B.a.a_(i,3)+0.5)/3,(B.a.V(i,3)+0.5)/3)
a=b.a*a9/b1
a0=b.b*b0/b1
for(a1=a5.length,d=0;d<a5.length;a5.length===a1||(0,A.a3)(a5),++d){a2=a5[d]
if(Math.sqrt(Math.pow(a2.a-a,2)+Math.pow(a2.b-a0,2))<c){B.c.h(f,i,!0)
break}}}c=A.j([],t.u)
for(a1=a5.length,d=0;d<a5.length;a5.length===a1||(0,A.a3)(a5),++d)c.push(a5[d].gbL())
a3=B.c.cA(c,new A.ko())/c.length
a5=Math.sqrt(new A.au(c,t.bS.a(new A.kp(a3)),t.gE).cA(0,new A.kq())/c.length)
c=a7.c
return new A.bQ(new A.jb(h,B.b.J(0.5*(a7.b/9)+0.3*B.b.J(1-c/0.22,0,1)+0.2*B.b.J(1-a5/a3/0.45,0,1),0,1),f,c,e),null,9)},
hD:function hD(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hR:function hR(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.r=$},
kn:function kn(a){this.a=a},
k5:function k5(a){this.a=a},
kt:function kt(){},
jR:function jR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kk:function kk(){},
kl:function kl(a){this.a=a},
km:function km(){},
ks:function ks(){},
kr:function kr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ko:function ko(){},
kp:function kp(a){this.a=a},
kq:function kq(){},
n3(a){var s=A.mQ(a,t.x)
if(a.length!==4)A.ac(B.cY)
return new A.jd(s)},
pA(a){var s,r,q,p,o=A.j([],t.h)
for(s=J.fn(a),r=t.j;s.D();){q=r.a(s.gM())
p=J.al(q)
o.push(new A.aJ(A.dF(p.l(q,0)),A.dF(p.l(q,1))))}return A.n3(o)},
n2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new A.jc()
if(!a.gfG())A.ac(B.cV)
s=a.a
r=s.length
if(1>=r)return A.a(s,1)
q=s[1]
p=q.a
if(2>=r)return A.a(s,2)
o=s[2]
n=o.a
m=p-n
if(3>=r)return A.a(s,3)
r=s[3]
l=r.a
k=l-n
q=q.b
o=o.b
j=q-o
r=r.b
i=r-o
h=s[0]
g=h.a
f=g-p+n-l
h=h.b
e=h-q+o-r
d=m*i-k*j
if(Math.abs(d)<1e-10)A.ac(B.cX)
o=c.r=(f*i-k*e)/d
n=c.w=(m*e-f*j)/d
c.a=p-g+o*p
c.b=l-g+n*l
c.c=g
c.d=q-h+o*q
c.e=r-h+n*r
c.f=h
return c},
aJ:function aJ(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
je:function je(){},
jf:function jf(){},
jc:function jc(){var _=this
_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$},
tr(a){var s,r,q,p,o,n,m,l=null,k=a.a,j=a.$ti.p("4?"),i=B.cs.bu(A.b4(j.a(k.l(0,"bytes"))))
if(i.length>16777216)throw A.h(B.d1)
s=A.nR(i)
r=s==null?l:s.aw(i)
if(r==null||r.gR()<90||r.gL()<90||r.gR()*r.gL()>2e7)throw A.h(B.cW)
s=A.nR(i)
q=s==null?l:s.aV(i,l)
if(q==null)throw A.h(B.d0)
p=A.nL(q)
if(J.aB(j.a(k.l(0,"op")),"prepare")){if(Math.max(p.gR(),p.gL())>1200)p=A.lU(p,1200)
k=p.gR()
o=A.N(l,l,B.e,0,B.i,p.gL(),l,0,3,l,B.e,k,!1)
A.i5(o,p,B.T,l,l,l,l,l,l,l,l)
k=o.gR()
j=o.gL()
n=t.A.p("ap.S").a(A.iL(92).dc(o,B.V))
return A.dg(["width",k,"height",j,"image",B.a3.gca().bu(n)],t.N,t.X)}if(J.aB(j.a(k.l(0,"op")),"auto"))return A.r1(p)
m=A.nG(p,A.pA(t.j.a(j.a(k.l(0,"quad")))))
k=m.b
j=A.a5(k)
n=j.p("au<1,a8<E,D?>>")
k=A.u(new A.au(k,j.p("a8<E,D?>(1)").a(new A.kX()),n),n.p("a7.E"))
j=t.A.p("ap.S").a(A.iL(90).dc(m.a,B.V))
return A.dg(["samples",k,"preview",B.a3.gca().bu(j)],t.N,t.X)},
lU(a,b){var s,r,q,p=null
if(Math.max(a.gR(),a.gL())>b){s=a.gR()>=a.gL()?b:p
r=A.rY(a,a.gL()>a.gR()?b:p,B.b8,s)}else r=a
s=r.gR()
q=A.N(p,p,B.e,0,B.i,r.gL(),p,0,3,p,B.e,s,!1)
A.i5(q,r,B.T,p,p,p,p,p,p,p,p)
return q},
r1(a){var s,r,q,p,o,n,m,l,k,j,i,h=new A.jh()
$.m6()
s=$.lv.$0()
h.a=s
h.b=null
r=A.lU(a,720)
q=A.lU(r,420)
s=q.gbT()
p=3!==s?q.fj(null,3):q
s=p.a
s=s==null?null:s.fJ(p!==q,B.cF)
if(s==null)s=q.a3()
o=A.pz(s,q.gR(),q.gL())
s=r.gR()
n=r.gL()
m=t.A.p("ap.S")
l=m.a(A.iL(90).dc(r,B.V))
k=A.dg(["width",s,"height",n,"image",B.a3.gca().bu(l),"visible",o.c],t.N,t.X)
j=o.a
if(j==null)k.h(0,"failure",o.b.b)
else{i=A.nG(r,j.a)
k.h(0,"detection",j.bJ())
s=i.b
n=A.a5(s)
l=n.p("au<1,a8<E,D?>>")
s=A.u(new A.au(s,n.p("a8<E,D?>(1)").a(new A.ki()),l),l.p("a7.E"))
k.h(0,"samples",s)
s=m.a(A.iL(90).dc(i.a,B.V))
k.h(0,"preview",B.a3.gca().bu(s))}k.h(0,"ms",h.gjD())
return k},
nG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.kw(A.n2(b),a),e=A.j([],t.h7)
for(s=t.ej,r=0;r<3;++r)for(q=(r+0.5)/3,p=0;p<3;++p){o=A.j([],s)
for(n=(p+0.5)/3,m=-3;m<=3;++m)for(l=q+m*0.022,k=-3;k<=3;++k)B.c.N(o,f.$2(n+k*0.022,l))
B.c.N(e,A.tq(o))}j=A.N(g,g,B.e,0,B.i,270,g,0,3,g,B.e,270,!1)
for(m=0;m<270;++m)for(s=(m+0.5)/270,k=0;k<270;++k){i=f.$2((k+0.5)/270,s)
q=i.a
n=i.b
l=i.c
h=j.a
if(h!=null)h.a4(k,m,q,n,l)}return new A.fb(j,e)},
tq(a){var s,r,q,p,o,n=new A.kW(),m=A.a5(a),l=m.p("f(1)"),k=m.p("au<1,f>"),j=new A.aR(n.$1(new A.au(a,l.a(new A.kR()),k)),n.$1(new A.au(a,l.a(new A.kS()),k)),n.$1(new A.au(a,l.a(new A.kT()),k))),i=j.gdd()
k=A.j([],t.u)
for(l=a.length,s=i.a,r=i.b,q=i.c,p=0;p<a.length;a.length===l||(0,A.a3)(a),++p){o=a[p]
k.push(Math.sqrt(Math.pow(o.gdd().a-s,2)+Math.pow(o.gdd().b-r,2)+Math.pow(o.gdd().c-q,2)))}B.c.e_(k)
l=k.length
s=l/2|0
if(!(s<l))return A.a(k,s)
l=m.p("W(1)")
m=m.p("bg<1>")
return new A.cs(j,k[s],new A.bg(a,l.a(new A.kU()),m).gu(0)/a.length,new A.bg(a,l.a(new A.kV()),m).gu(0)/a.length)},
kX:function kX(){},
ki:function ki(){},
kw:function kw(a,b){this.a=a
this.b=b},
kW:function kW(){},
kR:function kR(){},
kS:function kS(){},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
tj(){var s,r=v.G,q=new A.kN(r)
if(typeof q=="function")A.ac(A.bj("Attempting to rewrap a JS function.",null))
s=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.r3,q)
s[$.m5()]=q
r.onmessage=s},
kN:function kN(a){this.a=a},
pE(a){throw A.h(A.bf("Uint64List not supported on the web."))},
oY(a,b,c){return J.l1(a,b,c)},
n7(a,b,c){var s=a.BYTES_PER_ELEMENT
c=A.be(b,c,B.a.az(a.byteLength,s))
return J.a_(B.f.gA(a),a.byteOffset+b*s,(c-b)*s)},
n6(a,b){return J.aC(a,b,null)},
oQ(a){return J.mb(a,0,null)},
oR(a){return a.kt(0,0,null)},
tm(a,b){return Math.pow(a,b)},
cE(a,b){var s,r,q,p
if(t.D.b(a)&&a.length>=32)return A.r5(a,b)
s=J.a1(a)
r=s.gu(a)
b^=4294967295
for(q=0;r>=8;){p=q+1
b=B.x[(b^s.l(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.l(a,p))&255]^b>>>8
p=q+1
b=B.x[(b^s.l(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.l(a,p))&255]^b>>>8
p=q+1
b=B.x[(b^s.l(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.l(a,p))&255]^b>>>8
p=q+1
b=B.x[(b^s.l(a,q))&255]^b>>>8
q=p+1
b=B.x[(b^s.l(a,p))&255]^b>>>8
r-=8}if(r>0)do{p=q+1
b=B.x[(b^s.l(a,q))&255]^b>>>8
if(--r,r>0){q=p
continue}else break}while(!0)
return(b^4294967295)>>>0},
r2(a){var s,r,q,p,o,n,m,l=new Uint32Array(8192)
for(s=0;s<256;++s){r=a[s]
if(!(s<8192))return A.a(l,s)
l[s]=r}for(q=1;q<32;++q)for(r=(q-1)*256,p=q*256,s=0;s<256;++s){o=r+s
if(!(o>=0&&o<8192))return A.a(l,o)
n=l[o]
o=p+s
m=l[n&255]
if(!(o<8192))return A.a(l,o)
l[o]=(n>>>8^m)>>>0}return l},
r5(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=$.nI
if(c7==null)c7=$.nI=A.r2(B.x)
s=c8.length
r=J.ok(B.f.gA(c8),c8.byteOffset,s)
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
i5(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n,m,l
if(f==null)f=0
if(g==null)g=0
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.gR()
if(h==null)h=b.gL()
if(e==null)e=a.gR()<b.gR()?a.gR():b.gR()
if(d==null)d=a.gL()<b.gL()?a.gL():b.gL()
s=c===B.ao
if(!s&&a.gcr())a=a.fi(a.gbT())
r=h/d
q=i/e
p=t.p
o=J.am(d,p)
for(n=0;n<d;++n)o[n]=k+B.b.i(n*r)
m=J.am(e,p)
for(l=0;l<e;++l)m[l]=j+B.b.i(l*q)
if(s)A.r8(b,a,f,g,e,d,m,o,null,B.aW)
else A.r4(b,a,f,g,e,d,m,o,c,!1,null,B.aW)
return a},
r8(a,b,c,d,e,f,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=b.gR(),g=b.gL()
for(s=a0.length,r=a1.length,q=null,p=0;p<f;++p)for(o=d+p,n=o>=g,m=0;m<e;++m){l=c+m
if(l>=h||n)continue
if(!(m<s))return A.a(a0,m)
k=a0[m]
if(!(p<r))return A.a(a1,p)
j=a1[p]
i=a.a
q=i==null?null:i.O(k,j,q)
if(q==null)q=new A.H()
b.bK(l,o,q)}},
r4(a,b,c,d,e,f,g,h,i,j,a0,a1){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.O(m,l,q)
if(q==null)q=new A.H()
A.t0(b,c+n,o,q,i,!1,a0,a1)}},
t0(a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(!a6.fo(a7,a8))return a6
if(b0===B.ao||a6.gcr())if(a6.fo(a7,a8)){a6.aK(a7,a8).ac(a9)
return a6}s=a9.gaa()
r=a9.ga6()
q=a9.ga9()
p=a9.gu(a9)<4?1:a9.gX()
if(p===0)return a6
o=a6.aK(a7,a8)
n=o.gaa()
m=o.ga6()
l=o.ga9()
k=o.gX()
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
h=B.b.J(p,0.01,1)
i=p<0
d=i?0:1
c=B.b.J(s/h*d,0,0.99)
d=B.b.J(p,0.01,1)
h=i?0:1
b=B.b.J(r/d*h,0,0.99)
h=B.b.J(p,0.01,1)
i=i?0:1
a=B.b.J(q/h*i,0,0.99)
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
o.sa6(r*p+m*k*a5)
o.sa9(q*p+l*k*a5)
o.sX(p+k*a5)
return a6},
t2(a,b,c,d,e,f,g){var s,r=B.b.J(Math.min(d,e),0,a.gR()-1),q=B.b.J(Math.min(f,g),0,a.gL()-1),p=B.b.J(Math.max(d,e),0,a.gR()-1),o=B.b.J(Math.max(f,g),0,a.gL()-1),n=a.a.b7(0,r,q,p-r+1,o-q+1)
for(s=n.a;n.D();)s.ac(c)
return a},
oN(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
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
A.dV(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.dV(a,a6[b],q)
a2=q[0]
a3=q[1]
A.dV(a0,a2,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[e]=a
a6[d]=q[1]
A.dV(a1,a3,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[c]=a
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dW(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.dW(a,a6[b],q)
a2=q[0]
a3=q[1]
A.dW(a0,a2,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[e]=a
a6[d]=q[1]
A.dW(a1,a3,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[c]=a
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dV(a,a6[c],q)
a0=q[0]
a=q[1]
a6.$flags&2&&A.b(a6)
a6[c]=a}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.dW(a,a6[c],q)
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
A.dV(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.b(a6)
a6[d]=i}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.dW(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.b(a6)
a6[d]=i}a6.$flags&2&&A.b(a6)
if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
dV(a,b,c){var s,r,q,p,o=$.an()
o.$flags&2&&A.b(o)
o[0]=a
s=$.az()
if(0>=s.length)return A.a(s,0)
r=s[0]
o[0]=b
q=s[0]
p=r+(q&1)+B.a.j(q,1)
B.c.h(c,0,p)
B.c.h(c,1,p-q)},
dW(a,b,c){var s=a-B.a.j(b,1)&65535
B.c.h(c,1,s)
B.c.h(c,0,b+s-32768&65535)},
nR(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=new A.h9()
if(g.bk(a))return g
s=new A.ho(A.mF())
if(s.bk(a))return s
r=new A.iv()
r.f=A.t(a,!1,h,0)
r.a=new A.dZ(A.j([],t.b))
if(r.eA())return r
q=new A.jD()
if(q.bk(a))return q
p=new A.jl()
if(p.dG(A.t(a,!1,h,0))!=null)return p
if(A.lw(a).c===943870035)return new A.j4()
if(A.oM(a))return new A.ir()
o=new A.ft(!1)
if(o.bk(a))return o
n=new A.j_(A.j([],t.s))
if(n.bk(a))return n
m=new A.jj()
l=A.t(a,!1,h,0)
k=m.a=new A.eO(B.am)
k.c3(l)
if(k.fs())return m
j=new A.ix()
k=A.t(a,!1,h,0)
j.a=k
k=A.mt(k)
j.b=k
if(k!=null)return j
i=new A.j8()
if(i.aw(a)!=null)return i
return h},
qp(a,b,c,d,e,f){A.qm(f,a,b,c,d,e,!0,f)},
qq(a,b,c,d,e,f){A.qn(f,a,b,c,d,e,!0,f)},
qo(a,b,c,d,e,f){A.ql(f,a,b,c,d,e,!0,f)},
dw(a,b,c,d,e){var s,r,q
for(s=0;s<d;++s){r=J.c(a.a,a.d+s)
q=J.c(b.a,b.d+s)
J.x(c.a,c.d+s,r+q)}},
qm(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.t(a,!1,q,p),m=A.t(a,!1,q,p),l=A.p(m,q,0)
if(e===0){m.h(0,0,J.c(n.a,n.d))
A.dw(A.p(n,q,1),l,A.p(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.dw(n,A.p(l,q,s),m,1,!0)
A.dw(A.p(n,q,1),l,A.p(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
qn(a,b,c,d,e,f,g,h){var s=null,r=e*d,q=e+f,p=A.t(a,!1,s,r),o=A.t(h,!1,s,r),n=A.p(o,s,0)
if(e===0){o.h(0,0,J.c(p.a,p.d))
A.dw(A.p(p,s,1),n,A.p(o,s,1),b-1,!0)
p.d+=d
o.d+=d
e=1}else n.d-=d
while(e<q){A.dw(p,n,o,b,!0);++e
n.d+=d
p.d+=d
o.d+=d}},
ql(a,b,c,d,e,f,g,h){var s,r,q,p,o,n=null,m=e*d,l=e+f,k=A.t(a,!1,n,m),j=A.t(h,!1,n,m),i=A.p(j,n,0)
if(e===0){j.h(0,0,J.c(k.a,k.d))
A.dw(A.p(k,n,1),i,A.p(j,n,1),b-1,!0)
i.d+=d
k.d+=d
j.d+=d
e=1}for(s=-d;e<l;){A.dw(k,A.p(i,n,s),j,1,!0)
for(r=1;r<b;++r){q=r-d
p=J.c(i.a,i.d+(r-1))+J.c(i.a,i.d+q)-J.c(i.a,i.d+(q-1))
if((p&4294967040)>>>0===0)o=p
else o=p<0?0:255
q=J.c(k.a,k.d+r)
J.x(j.a,j.d+r,q+o)}++e
i.d+=d
k.d+=d
j.d+=d}},
nL(a){var s="ifd0",r=A.bI(a,!1,!1)
if(!a.gbG().l(0,s).a.ag(274)||a.gbG().l(0,s).gc2()===1)return r
r.e=A.dS(a.gbG())
r.gbG().l(0,s).sc2(null)
switch(a.gbG().l(0,s).gc2()){case 2:return A.i8(r)
case 3:return A.t3(r,B.cT)
case 4:return A.i8(A.i7(r,180))
case 5:return A.i8(A.i7(r,90))
case 6:return A.i7(r,90)
case 7:return A.i8(A.i7(r,-90))
case 8:return A.i7(r,-90)}return r},
rY(e6,e7,e8,e9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5=e9==null
if(e5&&e7==null)throw A.h(A.o("Invalid size"))
if(e6.gcr())e8=B.aw
if(e6.gbG().l(0,"ifd0").a.ag(274)&&e6.gbG().l(0,"ifd0").gc2()!==1)e6=A.nL(e6)
if(e7==null||e7<=0){e9.toString
e7=B.b.aE(e9*(e6.gL()/e6.gR()))}if(e5||e9<=0)e9=B.b.aE(e7*(e6.gR()/e6.gL()))
if(e9===e6.gR()&&e7===e6.gL())return A.bI(e6,!1,!1)
s=new Int32Array(e9)
for(e5=e6.a,r=e5==null,q=0;q<e9;++q){p=r?e4:e5.a
p=B.a.az(q*(p==null?0:p),e9)
if(!(q<e9))return A.a(s,q)
s[q]=p}o=new Int32Array(e7)
for(n=0;n<e7;++n){p=r?e4:e5.b
p=B.a.az(n*(p==null?0:p),e7)
if(!(n<e7))return A.a(o,n)
o[n]=p}m=e6.gaD().length
for(e5=e8===B.d6,r=e8===B.aw,p=e8===B.b8,l=t.g,k=e4,j=0;j<m;++j){i=e6.x
if(i===$)i=e6.x=A.j([],l)
if(!(j<i.length))return A.a(i,j)
h=i[j]
g=A.fQ(h,e7,!0,e9)
f=k==null
if(!f)k.b2(g)
if(f)k=g
f=h.a
e=f==null
d=e?e4:f.b
c=(d==null?0:d)/e7
d=e?e4:f.a
b=(d==null?0:d)/e9
if(p){a=h.ab(0,0)
for(n=0;n<e7;n=a1){a0=B.b.i(n*c)
a1=n+1
a2=B.b.i(a1*c)
if(a2===a0)++a2
for(q=0;q<e9;q=a4){a3=B.b.i(q*b)
a4=q+1
a5=B.b.i(a4*b)
if(a5===a3)++a5
for(a6=a0,a7=0,a8=0,a9=0,b0=0,b1=0;a6<a2;++a6)for(b2=a3;b2<a5;++b2,++b1){f=h.a
if(f!=null)f.O(b2,a6,a)
a7+=a.gm()
a8+=a.gt()
a9+=a.gq()
b0+=a.gv()}b3=1/b1
f=g.a
if(f!=null)f.ai(q,n,a7*b3,a8*b3,a9*b3,b0*b3)}}}else if(r)if((e?e4:f.gT())!=null)for(n=0;n<e7;++n){if(!(n<e7))return A.a(o,n)
b4=o[n]
for(q=0;q<e9;++q){if(!(q<e9))return A.a(s,q)
f=s[q]
e=h.a
f=e==null?e4:B.b.i(e.aK(f,b4).gP())
if(f==null)f=0
e=g.a
if(e!=null)e.aH(q,n,f)}}else{a=h.ab(0,0)
for(n=0;n<e7;++n){if(!(n<e7))return A.a(o,n)
a6=o[n]
for(q=0;q<e9;++q){if(!(q<e9))return A.a(s,q)
f=s[q]
e=h.a
if(e!=null)e.O(f,a6,a)
f=a.gm()
e=a.gt()
d=a.gq()
b5=a.gv()
b6=g.a
if(b6!=null)b6.ai(q,n,f,e,d,b5)}}}else if(e5){b7=h.ab(0,0)
b8=h.ab(0,0)
b9=h.ab(0,0)
c0=h.ab(0,0)
f=h.a
e=f==null
d=e?e4:f.a
c1=(d==null?0:d)-1
f=e?e4:f.b
c2=(f==null?0:f)-1
for(n=0;n<e7;++n){c3=n*c
c4=B.b.i(c3)
c5=c3-c4
c6=B.a.J(c4+1,0,c2)
for(q=0;q<e9;++q){c7=q*b
c8=B.b.i(c7)
c9=c7-c8
d0=B.a.J(c8+1,0,c1)
f=h.a
if(f!=null)f.O(c8,c4,b7)
f=h.a
if(f!=null)f.O(c8,c6,b8)
f=h.a
if(f!=null)f.O(d0,c4,b9)
f=h.a
if(f!=null)f.O(d0,c6,c0)
f=b7.gm()
e=b9.gm()
d=b8.gm()
b5=c0.gm()
b6=b7.gt()
d1=b9.gt()
d2=b8.gt()
d3=c0.gt()
d4=b7.gq()
d5=b9.gq()
d6=b8.gq()
d7=c0.gq()
d8=b7.gv()
d9=b9.gv()
e0=b8.gv()
e1=c0.gv()
e2=g.a
if(e2!=null)e2.ai(q,n,f+c9*(e-f+c5*(f+b5-d-e))+c5*(d-f),b6+c9*(d1-b6+c5*(b6+d3-d2-d1))+c5*(d2-b6),d4+c9*(d5-d4+c5*(d4+d7-d6-d5))+c5*(d6-d4),d8+c9*(d9-d8+c5*(d8+e1-e0-d9))+c5*(e0-d8))}}}else for(n=0;n<e7;++n){e3=n*c
for(q=0;q<e9;++q)g.bK(q,n,h.dX(q*b,e3,e8))}}k.toString
return k},
i7(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=B.a.a_(b0,360)
a9.gcr()
if(B.a.a_(a8,90)===0)switch(B.a.V(a8,90)){case 1:return A.rJ(a9)
case 2:return A.rH(a9)
case 3:return A.rI(a9)
default:return A.bI(a9,!1,!1)}s=a8*3.141592653589793/180
r=Math.cos(s)
q=Math.sin(s)
p=a9.gR()
o=a9.gR()
n=a9.gL()
m=a9.gL()
l=0.5*a9.gR()
k=0.5*a9.gL()
n=Math.abs(p*r)+Math.abs(n*q)
j=0.5*n
m=Math.abs(o*q)+Math.abs(m*r)
i=0.5*m
h=a9.gaD().length
for(p=t.g,g=a7,f=0;f<h;++f){e=a9.x
if(e===$)e=a9.x=A.j([],p)
if(!(f<e.length))return A.a(e,f)
d=e[f]
o=g==null
c=o?a7:g.d7()
if(c==null){b=B.b.i(n)
c=A.fQ(a9,B.b.i(m),!0,b)}if(o)g=c
for(o=c.a,o=o.gG(o);o.D();){a=o.gM()
a0=a.gaQ()
a1=a.gaM()
b=a0-j
a2=a1-i
a3=l+b*r+a2*q
a4=k-b*q+a2*r
b=!1
if(a3>=0)if(a4>=0){a2=d.a
a5=a2==null
a6=a5?a7:a2.a
if(a3<(a6==null?0:a6)){b=a5?a7:a2.b
b=a4<(b==null?0:b)}}if(b)c.bK(a0,a1,d.dX(a3,a4,B.aw))}}g.toString
return g},
rJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaD(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.a3)(s),++p){o=s[p]
n=q==null
m=n?f:q.d7()
if(m==null){l=o.a
k=l==null
j=k?f:l.b
if(j==null)j=0
l=k?f:l.a
m=A.fQ(o,l==null?0:l,!0,j)}if(n)q=m
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
n=n==null?f:n.O(h,i-g,f)
m.bK(g,h,n==null?new A.H():n);++g}++h}}q.toString
return q},
rH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaD(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.a3)(s),++p){o=s[p]
n=o.a
m=n==null
l=m?f:n.a
k=(l==null?0:l)-1
n=m?f:n.b
j=(n==null?0:n)-1
n=q==null
i=n?f:q.d7()
if(i==null)i=A.bI(o,!0,!0)
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
m=m==null?f:m.O(k-g,n,f)
i.bK(g,h,m==null?new A.H():m);++g}++h}}q.toString
return q},
rI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaD(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.a3)(s),++p){o=s[p]
n=a.a
n=n==null?f:n.a
m=(n==null?0:n)-1
n=q==null
l=n?f:q.d7()
if(l==null){k=o.a
j=k==null
i=j?f:k.b
if(i==null)i=0
k=j?f:k.a
l=A.fQ(o,k==null?0:k,!0,i)}if(n)q=l
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
k=k==null?f:k.O(n,g,f)
l.bK(g,h,k==null?new A.H():k);++g}++h}}q.toString
return q},
kx(a){var s
a=(a&-a)>>>0
s=a!==0?31:32
if((a&65535)!==0)s-=16
if((a&16711935)!==0)s-=8
if((a&252645135)!==0)s-=4
if((a&858993459)!==0)s-=2
return(a&1431655765)!==0?s-1:s},
tv(a){var s
$.m9().h(0,0,a)
s=$.oh()
if(0>=s.length)return A.a(s,0)
return s[0]},
nW(a,b,c,d){return(B.a.J(a,0,255)|B.a.J(b,0,255)<<8|B.a.J(c,0,255)<<16|B.a.J(d,0,255)<<24)>>>0},
b6(a,b,c){var s,r,q,p,o=b.gu(b),n=b.gK(),m=a.gT(),l=m==null?null:m.gK()
if(l==null)l=a.gK()
s=a.gu(a)
if(o===1)b.h(0,0,A.i6(B.b.bH(a.gu(a)>2?a.gah():a.l(0,0)),l,n))
else if(o<=s)for(r=0;r<o;++r)b.h(0,r,A.i6(a.l(0,r),l,n))
else if(s===2){q=A.i6(a.l(0,0),l,n)
if(o===3){b.h(0,0,q)
b.h(0,1,q)
b.h(0,2,q)}else{c=A.i6(a.l(0,1),l,n)
b.h(0,0,q)
b.h(0,1,q)
b.h(0,2,q)
b.h(0,3,c)}}else{for(r=0;r<s;++r)b.h(0,r,A.i6(a.l(0,r),l,n))
p=s===1?b.l(0,0):0
for(r=s;r<o;++r)b.h(0,r,r===3?c:p)}return b},
aN(a,b,c,d,e){var s,r,q=a.gT(),p=q==null?null:q.gK()
if(p==null)p=a.gK()
q=e==null
s=q?null:e.gK()
c=s==null?c:s
if(c==null)c=a.gK()
s=q?null:e.gu(e)
d=s==null?d:s
if(d==null)d=a.gu(a)
if(b==null)b=0
if(c===p&&d===a.gu(a)){if(q)return a.I()
e.ac(a)
return e}switch(c.a){case 3:if(q)r=new A.bF(new Uint8Array(d))
else r=e
return A.b6(a,r,b)
case 0:return A.b6(a,q?new A.cS(d,0):e,b)
case 1:return A.b6(a,q?new A.cU(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.cW(d,new Uint8Array(q))}else r=e
return A.b6(a,r,b)
case 4:if(q)r=new A.cT(new Uint16Array(d))
else r=e
return A.b6(a,r,b)
case 5:if(q)r=new A.cV(new Uint32Array(d))
else r=e
return A.b6(a,r,b)
case 6:if(q)r=new A.cQ(new Int8Array(d))
else r=e
return A.b6(a,r,b)
case 7:if(q)r=new A.cO(new Int16Array(d))
else r=e
return A.b6(a,r,b)
case 8:if(q)r=new A.cP(new Int32Array(d))
else r=e
return A.b6(a,r,b)
case 9:if(q)r=new A.cL(new Uint16Array(d))
else r=e
return A.b6(a,r,b)
case 10:if(q)r=new A.cM(new Float32Array(d))
else r=e
return A.b6(a,r,b)
case 11:if(q)r=new A.cN(new Float64Array(d))
else r=e
return A.b6(a,r,b)}},
X(a){return 0.299*a.gm()+0.587*a.gt()+0.114*a.gq()},
nO(a,b,c,d,e){var s=1-d/255
B.c.h(e,0,B.b.aE(255*(1-a/255)*s))
B.c.h(e,1,B.b.aE(255*(1-b/255)*s))
B.c.h(e,2,B.b.aE(255*(1-c/255)*s))},
K(a){var s,r,q,p=$.m8()
p.$flags&2&&A.b(p)
p[0]=a
p=$.og()
if(0>=p.length)return A.a(p,0)
s=p[0]
if(a===0)return s>>>16
if($.Q==null)A.T()
r=s>>>23&511
p=$.mq.iW()
if(!(r<p.length))return A.a(p,r)
r=p[r]
if(r!==0){q=s&8388607
return r+(q+4095+(q>>>13&1)>>>13)}return A.oO(s)},
oO(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.br(o+(B.a.Y(1,s-1)-1)+(B.a.a2(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
T(){var s,r,q,p,o,n=$.Q
if(n!=null)return n
s=new Uint32Array(65536)
$.Q=J.mb(B.o.gA(s),0,null)
n=new Uint16Array(512)
$.mq.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.oP(r)
n=$.Q
n.toString
return n},
oP(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{while((p&1024)===0){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0}},B={}
var w=[A,J,B]
var $={}
A.lg.prototype={}
J.fU.prototype={
U(a,b){return a===b},
gH(a){return A.eI(a)},
B(a){return"Instance of '"+A.hq(a)+"'"},
gaG(a){return A.cD(A.lV(this))}}
J.h7.prototype={
B(a){return String(a)},
gH(a){return a?519018:218159},
gaG(a){return A.cD(t.y)},
$iL:1,
$iW:1}
J.ed.prototype={
U(a,b){return null==b},
B(a){return"null"},
gH(a){return 0},
$iL:1}
J.ee.prototype={$iY:1}
J.bL.prototype={
gH(a){return 0},
B(a){return String(a)}}
J.hn.prototype={}
J.du.prototype={}
J.bo.prototype={
B(a){var s=a[$.nY()]
if(s==null)s=a[$.m5()]
if(s==null)return this.fY(a)
return"JavaScript function for "+J.fo(s)},
$ic3:1}
J.dd.prototype={
gH(a){return 0},
B(a){return String(a)}}
J.de.prototype={
gH(a){return 0},
B(a){return String(a)}}
J.r.prototype={
N(a,b){A.a5(a).c.a(b)
a.$flags&1&&A.b(a,29)
a.push(b)},
fA(a,b){var s
a.$flags&1&&A.b(a,"removeAt",1)
s=a.length
if(b>=s)throw A.h(A.n0(b,null))
return a.splice(b,1)[0]},
dK(a,b){A.a5(a).p("e<1>").a(b)
a.$flags&1&&A.b(a,"addAll",2)
this.hm(a,b)
return},
hm(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.h(A.aD(a))
for(r=0;r<s;++r)a.push(b[r])},
da(a){a.$flags&1&&A.b(a,"clear","clear")
a.length=0},
fB(a,b){return A.eN(a,0,A.i4(b,"count",t.p),A.a5(a).c)},
dh(a,b){return A.eN(a,b,null,A.a5(a).c)},
cA(a,b){var s,r,q
A.a5(a).p("1(1,1)").a(b)
s=a.length
if(s===0)throw A.h(A.h4())
if(0>=s)return A.a(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.h(A.aD(a))}return r},
bb(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
b9(a,b,c){if(b<0||b>a.length)throw A.h(A.ak(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.h(A.ak(c,b,a.length,"end",null))
if(b===c)return A.j([],A.a5(a))
return A.j(a.slice(b,c),A.a5(a))},
gft(a){var s=a.length
if(s>0)return a[s-1]
throw A.h(A.h4())},
ao(a,b,c,d,e){var s,r,q,p,o
A.a5(a).p("e<1>").a(d)
a.$flags&2&&A.b(a,5)
A.be(b,c,a.length)
s=c-b
if(s===0)return
A.bt(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.l2(d,e).fC(0,!1)
q=0}p=J.a1(r)
if(q+s>p.gu(r))throw A.h(A.mG())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.l(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.l(r,q+o)},
aF(a,b,c,d){var s
A.a5(a).p("1?").a(d)
a.$flags&2&&A.b(a,"fillRange")
A.be(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
f6(a,b){var s,r
A.a5(a).p("W(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.h(A.aD(a))}return!1},
e0(a,b){var s,r,q,p,o,n=A.a5(a)
n.p("f(1,1)?").a(b)
a.$flags&2&&A.b(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.rm()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.fM()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dJ(b,2))
if(p>0)this.jd(a,p)},
e_(a){return this.e0(a,null)},
jd(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
c0(a,b){var s
for(s=0;s<a.length;++s)if(J.aB(a[s],b))return!0
return!1},
gak(a){return a.length===0},
gfp(a){return a.length!==0},
B(a){return A.lf(a,"[","]")},
gG(a){return new J.bX(a,a.length,A.a5(a).p("bX<1>"))},
gH(a){return A.eI(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.b(a,"set length","change the length of")
if(b<0)throw A.h(A.ak(b,0,null,"newLength",null))
if(b>a.length)A.a5(a).c.a(null)
a.length=b},
l(a,b){if(!(b>=0&&b<a.length))throw A.h(A.kz(a,b))
return a[b]},
h(a,b,c){A.a5(a).c.a(c)
a.$flags&2&&A.b(a)
if(!(b>=0&&b<a.length))throw A.h(A.kz(a,b))
a[b]=c},
$iaj:1,
$iA:1,
$ie:1,
$iq:1}
J.h5.prototype={
kf(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.hq(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.iG.prototype={}
J.bX.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a3(q)
throw A.h(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iB:1}
J.dc.prototype={
bE(a,b){var s
A.dF(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gdS(b)
if(this.gdS(a)===s)return 0
if(this.gdS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdS(a){return a===0?1/a<0:a<0},
i(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.h(A.bf(""+a+".toInt()"))},
b3(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.h(A.bf(""+a+".ceil()"))},
bH(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.h(A.bf(""+a+".floor()"))},
aE(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.h(A.bf(""+a+".round()"))},
J(a,b,c){if(this.bE(b,c)>0)throw A.h(A.bV(b))
if(this.bE(a,b)<0)return b
if(this.bE(a,c)>0)return c
return a},
cC(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.h(A.ak(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.ac(A.bf("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.p.dg("0",o)},
B(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a_(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
az(a,b){A.dF(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eY(a,b)},
V(a,b){return(a|0)===a?a/b|0:this.eY(a,b)},
eY(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.h(A.bf("Result of truncating division is "+A.C(s)+": "+A.C(a)+" ~/ "+b))},
Y(a,b){if(b<0)throw A.h(A.bV(b))
return b>31?0:a<<b>>>0},
S(a,b){return b>31?0:a<<b>>>0},
br(a,b){var s
if(b<0)throw A.h(A.bV(b))
if(a>0)s=this.a1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j(a,b){var s
if(a>0)s=this.a1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a2(a,b){if(0>b)throw A.h(A.bV(b))
return this.a1(a,b)},
a1(a,b){return b>31?0:a>>>b},
gaG(a){return A.cD(t.O)},
$iaX:1,
$il:1,
$ik:1}
J.ec.prototype={
av(a,b){var s=this.Y(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gaG(a){return A.cD(t.p)},
$iL:1,
$if:1}
J.h8.prototype={
gaG(a){return A.cD(t.i)},
$iL:1}
J.cc.prototype={
e1(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
c5(a,b,c){return a.substring(b,A.be(b,c,a.length))},
fF(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.p0(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.p1(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
dg(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.h(B.cB)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bE(a,b){var s
A.b4(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
B(a){return a},
gH(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaG(a){return A.cD(t.N)},
gu(a){return a.length},
$iaj:1,
$iL:1,
$iaX:1,
$imV:1,
$iE:1}
A.dz.prototype={
gG(a){var s=this.a
return new A.dN(s.gG(s),A.m(this).p("dN<1,2>"))},
gu(a){var s=this.a
return s.gu(s)},
gak(a){var s=this.a
return s.gak(s)},
B(a){var s=this.a
return s.B(s)}}
A.dN.prototype={
D(){return this.a.D()},
gM(){return this.$ti.y[1].a(this.a.gM())},
$iB:1}
A.bY.prototype={}
A.eZ.prototype={$iA:1}
A.bZ.prototype={
dL(a,b,c){return new A.bZ(this.a,this.$ti.p("@<1,2>").aI(b).aI(c).p("bZ<1,2,3,4>"))},
l(a,b){return this.$ti.p("4?").a(this.a.l(0,b))},
aP(a,b){this.a.aP(0,new A.ik(this,this.$ti.p("~(3,4)").a(b)))},
gbl(){var s=this.$ti
return A.ow(this.a.gbl(),s.c,s.y[2])},
gu(a){var s=this.a
return s.gu(s)},
gak(a){var s=this.a
return s.gak(s)}}
A.ik.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.p("~(1,2)")}}
A.df.prototype={
B(a){return"LateInitializationError: "+this.a}}
A.aW.prototype={
gu(a){return this.a.length},
l(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.jg.prototype={}
A.A.prototype={}
A.a7.prototype={
gG(a){var s=this
return new A.bq(s,s.gu(s),A.m(s).p("bq<a7.E>"))},
gak(a){return this.gu(this)===0},
cA(a,b){var s,r,q,p=this
A.m(p).p("a7.E(a7.E,a7.E)").a(b)
s=p.gu(p)
if(s===0)throw A.h(A.h4())
r=p.bb(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.bb(0,q))
if(s!==p.gu(p))throw A.h(A.aD(p))}return r}}
A.cu.prototype={
hg(a,b,c,d){var s,r=this.b
A.bt(r,"start")
s=this.c
if(s!=null){A.bt(s,"end")
if(r>s)throw A.h(A.ak(r,0,s,"start",null))}},
gi9(){var s=J.ba(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjh(){var s=J.ba(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.ba(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
bb(a,b){var s=this,r=s.gjh()+b
if(b<0||r>=s.gi9())throw A.h(A.lc(b,s.gu(0),s,"index"))
return J.md(s.a,r)},
dh(a,b){var s,r,q=this
A.bt(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dQ(q.$ti.p("dQ<1>"))
return A.eN(q.a,s,r,q.$ti.c)},
fC(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.a1(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.h6(0,n):J.mH(0,n)}r=A.S(s,m.bb(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.c.h(r,q,m.bb(n,o+q))
if(m.gu(n)<l)throw A.h(A.aD(p))}return r}}
A.bq.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s,r=this,q=r.a,p=J.a1(q),o=p.gu(q)
if(r.b!==o)throw A.h(A.aD(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.bb(q,s);++r.c
return!0},
$iB:1}
A.eh.prototype={
gG(a){return new A.ei(J.fn(this.a),this.b,A.m(this).p("ei<1,2>"))},
gu(a){return J.ba(this.a)},
gak(a){return J.op(this.a)}}
A.ei.prototype={
D(){var s=this,r=s.b
if(r.D()){s.a=s.c.$1(r.gM())
return!0}s.a=null
return!1},
gM(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iB:1}
A.au.prototype={
gu(a){return J.ba(this.a)},
bb(a,b){return this.b.$1(J.md(this.a,b))}}
A.bg.prototype={
gG(a){return new A.eX(J.fn(this.a),this.b,this.$ti.p("eX<1>"))}}
A.eX.prototype={
D(){var s,r
for(s=this.a,r=this.b;s.D();)if(r.$1(s.gM()))return!0
return!1},
gM(){return this.a.gM()},
$iB:1}
A.dQ.prototype={
gG(a){return B.cu},
gak(a){return!0},
gu(a){return 0}}
A.dR.prototype={
D(){return!1},
gM(){throw A.h(A.h4())},
$iB:1}
A.aq.prototype={}
A.bz.prototype={
h(a,b,c){A.m(this).p("bz.E").a(c)
throw A.h(A.bf("Cannot modify an unmodifiable list"))},
ao(a,b,c,d,e){A.m(this).p("e<bz.E>").a(d)
throw A.h(A.bf("Cannot modify an unmodifiable list"))},
by(a,b,c,d){return this.ao(0,b,c,d,0)},
aF(a,b,c,d){A.m(this).p("bz.E?").a(d)
throw A.h(A.bf("Cannot modify an unmodifiable list"))}}
A.dv.prototype={}
A.bT.prototype={$r:"+(1,2)",$s:1}
A.fb.prototype={$r:"+preview,samples(1,2)",$s:2}
A.dE.prototype={$r:"+(1,2,3)",$s:3}
A.cA.prototype={$r:"+(1,2,3,4)",$s:4}
A.dP.prototype={
dL(a,b,c){var s=A.m(this)
return A.mS(this,s.c,s.y[1],b,c)},
gak(a){return this.gu(this)===0},
B(a){return A.ll(this)},
$ia8:1}
A.c4.prototype={
cX(){var s=this,r=s.$map
if(r==null){r=new A.ef(s.$ti.p("ef<1,2>"))
A.nQ(s.a,r)
s.$map=r}return r},
l(a,b){return this.cX().l(0,b)},
aP(a,b){this.$ti.p("~(1,2)").a(b)
this.cX().aP(0,b)},
gbl(){var s=this.cX()
return new A.bp(s,A.m(s).p("bp<1>"))},
gu(a){return this.cX().a}}
A.j1.prototype={
$0(){return B.b.bH(1000*this.a.now())},
$S:14}
A.eL.prototype={}
A.jn.prototype={
bv(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.et.prototype={
B(a){return"Null check operator used on a null value"}}
A.hd.prototype={
B(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hK.prototype={
B(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.iX.prototype={
B(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.fd.prototype={
B(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idr:1}
A.bE.prototype={
B(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.nX(r==null?"unknown":r)+"'"},
$ic3:1,
gkp(){return this},
$C:"$1",
$R:1,
$D:null}
A.fu.prototype={$C:"$0",$R:0}
A.fv.prototype={$C:"$2",$R:2}
A.hF.prototype={}
A.hE.prototype={
B(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.nX(s)+"'"}}
A.cK.prototype={
U(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cK))return!1
return this.$_target===b.$_target&&this.a===b.a},
gH(a){return(A.i9(this.a)^A.eI(this.$_target))>>>0},
B(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hq(this.a)+"'")}}
A.hC.prototype={
B(a){return"RuntimeError: "+this.a}}
A.b_.prototype={
gu(a){return this.a},
gak(a){return this.a===0},
gbl(){return new A.bp(this,A.m(this).p("bp<1>"))},
ag(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jM(a)},
jM(a){var s=this.d
if(s==null)return!1
return this.cu(s[this.ct(a)],a)>=0},
dK(a,b){A.m(this).p("a8<1,2>").a(b).aP(0,new A.iN(this))},
l(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.jN(b)},
jN(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ct(a)]
r=this.cu(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.m(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.e6(s==null?q.b=q.dB():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.e6(r==null?q.c=q.dB():r,b,c)}else q.jP(b,c)},
jP(a,b){var s,r,q,p,o=this,n=A.m(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dB()
r=o.ct(a)
q=s[r]
if(q==null)s[r]=[o.dC(a,b)]
else{p=o.cu(q,a)
if(p>=0)q[p].b=b
else q.push(o.dC(a,b))}},
cb(a,b){var s=this
if(typeof b=="string")return s.eS(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.eS(s.c,b)
else return s.jO(b)},
jO(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ct(a)
r=n[s]
q=o.cu(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f0(p)
if(r.length===0)delete n[s]
return p.b},
aP(a,b){var s,r,q=this
A.m(q).p("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.h(A.aD(q))
s=s.c}},
e6(a,b,c){var s,r=A.m(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dC(b,c)
else s.b=c},
eS(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f0(s)
delete a[b]
return s.b},
eH(){this.r=this.r+1&1073741823},
dC(a,b){var s=this,r=A.m(s),q=new A.iR(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.eH()
return q},
f0(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.eH()},
ct(a){return J.b9(a)&1073741823},
cu(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aB(a[r].a,b))return r
return-1},
B(a){return A.ll(this)},
dB(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ilj:1}
A.iN.prototype={
$2(a,b){var s=this.a,r=A.m(s)
s.h(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.m(this.a).p("~(1,2)")}}
A.iR.prototype={}
A.bp.prototype={
gu(a){return this.a.a},
gak(a){return this.a.a===0},
gG(a){var s=this.a
return new A.R(s,s.r,s.e,this.$ti.p("R<1>"))}}
A.R.prototype={
gM(){return this.d},
D(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iB:1}
A.iS.prototype={
gu(a){return this.a.a},
gak(a){return this.a.a===0},
gG(a){var s=this.a
return new A.at(s,s.r,s.e,this.$ti.p("at<1>"))}}
A.at.prototype={
gM(){return this.d},
D(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iB:1}
A.ef.prototype={
ct(a){return A.rV(a)&1073741823},
cu(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aB(a[r].a,b))return r
return-1}}
A.kJ.prototype={
$1(a){return this.a(a)},
$S:16}
A.kK.prototype={
$2(a,b){return this.a(a,b)},
$S:43}
A.kL.prototype={
$1(a){return this.a(A.b4(a))},
$S:23}
A.aK.prototype={
B(a){return this.eZ(!1)},
eZ(a){var s,r,q,p,o,n=this.ig(),m=this.cW(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.mY(o):l+A.C(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ig(){var s,r=this.$s
while($.k6.length<=r)B.c.N($.k6,null)
s=$.k6[r]
if(s==null){s=this.hB()
B.c.h($.k6,r,s)}return s},
hB(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.bJ(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.c.h(j,q,r[s])}}return A.mQ(j,k)}}
A.cz.prototype={
cW(){return[this.a,this.b]},
U(a,b){if(b==null)return!1
return b instanceof A.cz&&this.$s===b.$s&&J.aB(this.a,b.a)&&J.aB(this.b,b.b)},
gH(a){return A.hj(this.$s,this.a,this.b,B.z)}}
A.dC.prototype={
cW(){return[this.a,this.b,this.c]},
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.dC&&s.$s===b.$s&&J.aB(s.a,b.a)&&J.aB(s.b,b.b)&&J.aB(s.c,b.c)},
gH(a){var s=this
return A.hj(s.$s,s.a,s.b,s.c)}}
A.dD.prototype={
cW(){return this.a},
U(a,b){if(b==null)return!1
return b instanceof A.dD&&this.$s===b.$s&&A.qI(this.a,b.a)},
gH(a){return A.hj(this.$s,A.n(this.a),B.z,B.z)}}
A.jM.prototype={
iW(){var s=this.b
if(s===this)throw A.h(A.mM(""))
return s}}
A.cd.prototype={
gaG(a){return B.kh},
d9(a,b,c){A.ay(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
fe(a){return this.d9(a,0,null)},
fb(a,b,c){A.ay(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
d8(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
fc(a){return this.d8(a,0,null)},
f9(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,2)
return new Int16Array(a,b,c)},
fd(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
fa(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,4)
return new Int32Array(a,b,c)},
f8(a,b,c){A.ay(a,b,c)
c=B.a.V(a.byteLength-b,4)
return new Float32Array(a,b,c)},
f7(a,b,c){var s
A.ay(a,b,c)
s=new DataView(a,b,c)
return s},
$iL:1,
$icd:1}
A.eo.prototype={
gA(a){if(((a.$flags|0)&2)!==0)return new A.kc(a.buffer)
else return a.buffer},
iu(a,b,c,d){var s=A.ak(b,0,c,d,null)
throw A.h(s)},
ef(a,b,c,d){if(b>>>0!==b||b>c)this.iu(a,b,c,d)},
$iZ:1}
A.kc.prototype={
d9(a,b,c){var s=A.ph(this.a,b,c)
s.$flags=3
return s},
fe(a){return this.d9(0,0,null)},
fb(a,b,c){var s=A.pb(this.a,b,c)
s.$flags=3
return s},
d8(a,b,c){var s=A.pd(this.a,b,c)
s.$flags=3
return s},
fc(a){return this.d8(0,0,null)},
f9(a,b,c){var s=A.p7(this.a,b,c)
s.$flags=3
return s},
fd(a,b,c){var s=A.pf(this.a,b,c)
s.$flags=3
return s},
fa(a,b,c){var s=A.p9(this.a,b,c)
s.$flags=3
return s},
f8(a,b,c){var s=A.p6(this.a,b,c)
s.$flags=3
return s},
f7(a,b,c){var s=A.p3(this.a,b,c)
s.$flags=3
return s}}
A.hi.prototype={
gaG(a){return B.ki},
$iL:1}
A.ae.prototype={
gu(a){return a.length},
eT(a,b,c,d,e){var s,r,q
t.gu.a(d)
s=a.length
this.ef(a,b,s,"start")
this.ef(a,c,s,"end")
if(b>c)throw A.h(A.ak(b,0,c,null,null))
r=c-b
if(e<0)throw A.h(A.bj(e,null))
q=d.length
if(q-e<r)throw A.h(A.lG("Not enough elements"))
if(e!==0||q!==r)d=d.subarray(e,e+r)
a.set(d,b)},
$iaj:1,
$iaH:1}
A.bM.prototype={
l(a,b){A.bC(b,a,a.length)
return a[b]},
h(a,b,c){A.cB(c)
a.$flags&2&&A.b(a)
A.bC(b,a,a.length)
a[b]=c},
ao(a,b,c,d,e){t.bM.a(d)
a.$flags&2&&A.b(a,5)
if(t.d4.b(d)){this.eT(a,b,c,d,e)
return}this.e2(a,b,c,d,e)},
by(a,b,c,d){return this.ao(a,b,c,d,0)},
$iA:1,
$ie:1,
$iq:1}
A.aI.prototype={
h(a,b,c){A.w(c)
a.$flags&2&&A.b(a)
A.bC(b,a,a.length)
a[b]=c},
ao(a,b,c,d,e){t.Y.a(d)
a.$flags&2&&A.b(a,5)
if(t.bc.b(d)){this.eT(a,b,c,d,e)
return}this.e2(a,b,c,d,e)},
by(a,b,c,d){return this.ao(a,b,c,d,0)},
$iA:1,
$ie:1,
$iq:1}
A.ej.prototype={
gaG(a){return B.kj},
b9(a,b,c){return new Float32Array(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1,
$iiu:1}
A.ek.prototype={
gaG(a){return B.kk},
b9(a,b,c){return new Float64Array(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1,
$il8:1}
A.el.prototype={
gaG(a){return B.kl},
l(a,b){A.bC(b,a,a.length)
return a[b]},
b9(a,b,c){return new Int16Array(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1,
$iiF:1}
A.em.prototype={
gaG(a){return B.km},
l(a,b){A.bC(b,a,a.length)
return a[b]},
b9(a,b,c){return new Int32Array(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1,
$ie7:1}
A.en.prototype={
gaG(a){return B.kn},
l(a,b){A.bC(b,a,a.length)
return a[b]},
b9(a,b,c){return new Int8Array(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1,
$ile:1}
A.ep.prototype={
gaG(a){return B.kp},
l(a,b){A.bC(b,a,a.length)
return a[b]},
b9(a,b,c){return new Uint16Array(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1,
$ilI:1}
A.eq.prototype={
gaG(a){return B.kq},
l(a,b){A.bC(b,a,a.length)
return a[b]},
b9(a,b,c){return new Uint32Array(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1,
$ibx:1}
A.er.prototype={
gaG(a){return B.kr},
gu(a){return a.length},
l(a,b){A.bC(b,a,a.length)
return a[b]},
b9(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.b5(b,c,a.length)))},
$iL:1}
A.ce.prototype={
gaG(a){return B.ks},
gu(a){return a.length},
l(a,b){A.bC(b,a,a.length)
return a[b]},
b9(a,b,c){return new Uint8Array(a.subarray(b,A.b5(b,c,a.length)))},
fW(a,b){return this.b9(a,b,null)},
$iL:1,
$ice:1,
$iby:1}
A.f6.prototype={}
A.f7.prototype={}
A.f8.prototype={}
A.f9.prototype={}
A.b3.prototype={
p(a){return A.fi(v.typeUniverse,this,a)},
aI(a){return A.np(v.typeUniverse,this,a)}}
A.hV.prototype={}
A.i0.prototype={
B(a){return A.aL(this.a,null)}}
A.hT.prototype={
B(a){return this.a}}
A.fe.prototype={$ibv:1}
A.jH.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
A.jG.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:32}
A.jI.prototype={
$0(){this.a.$0()},
$S:10}
A.jJ.prototype={
$0(){this.a.$0()},
$S:10}
A.k8.prototype={
hk(a,b){if(self.setTimeout!=null)self.setTimeout(A.dJ(new A.k9(this,b),0),a)
else throw A.h(A.bf("`setTimeout()` not found."))}}
A.k9.prototype={
$0(){this.b.$0()},
$S:2}
A.bb.prototype={
B(a){return A.C(this.a)},
$iP:1,
gce(){return this.b}}
A.hS.prototype={
fh(a){var s=this.a
if((s.a&30)!==0)throw A.h(A.lG("Future already completed"))
s.eb(A.rl(a,null))}}
A.eY.prototype={}
A.f_.prototype={
jR(a){if((this.c&15)!==6)return!0
return this.b.b.dU(t.al.a(this.d),a.a,t.y,t.K)},
jK(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.k9(q,m,a.b,o,n,t.m)
else p=l.dU(t.E.a(q),m,o,n)
try{o=r.$ti.p("2/").a(p)
return o}catch(s){if(t.eK.b(A.bD(s))){if((r.c&1)!==0)throw A.h(A.bj("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.h(A.bj("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aT.prototype={
kc(a,b,c){var s,r,q=this.$ti
q.aI(c).p("1/(2)").a(a)
s=$.ab
if(s===B.A){if(!t.Q.b(b)&&!t.E.b(b))throw A.h(A.l4(b,"onError",u.c))}else{c.p("@<0/>").aI(q.c).p("1(2)").a(a)
b=A.rE(b,s)}r=new A.aT(s,c.p("aT<0>"))
this.e7(new A.f_(r,3,a,b,q.p("@<1>").aI(c).p("f_<1,2>")))
return r},
jf(a){this.a=this.a&1|16
this.c=a},
cO(a){this.a=a.a&30|this.a&1
this.c=a.c},
e7(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.e7(a)
return}r.cO(s)}A.i3(null,null,r.b,t.M.a(new A.jS(r,a)))}},
eM(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.eM(a)
return}m.cO(n)}l.a=m.d3(a)
A.i3(null,null,m.b,t.M.a(new A.jW(l,m)))}},
d2(){var s=t.F.a(this.c)
this.c=null
return this.d3(s)},
d3(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
hA(a){var s,r=this
r.$ti.c.a(a)
s=r.d2()
r.a=8
r.c=a
A.dA(r,s)},
hz(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.d2()
q.cO(a)
A.dA(q,r)},
ej(a){var s=this.d2()
this.jf(a)
A.dA(this,s)},
ho(a){var s=this.$ti
s.p("1/").a(a)
if(s.p("cY<1>").b(a)){this.hx(a)
return}this.hp(a)},
hp(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.i3(null,null,s.b,t.M.a(new A.jU(s,a)))},
hx(a){A.lM(this.$ti.p("cY<1>").a(a),this,!1)
return},
eb(a){this.a^=2
A.i3(null,null,this.b,t.M.a(new A.jT(this,a)))},
$icY:1}
A.jS.prototype={
$0(){A.dA(this.a,this.b)},
$S:2}
A.jW.prototype={
$0(){A.dA(this.b,this.a.a)},
$S:2}
A.jV.prototype={
$0(){A.lM(this.a.a,this.b,!0)},
$S:2}
A.jU.prototype={
$0(){this.a.hA(this.b)},
$S:2}
A.jT.prototype={
$0(){this.a.ej(this.b)},
$S:2}
A.jZ.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.k8(t.fO.a(q.d),t.z)}catch(p){s=A.bD(p)
r=A.fm(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.l5(q)
n=k.a
n.c=new A.bb(q,o)
q=n}q.b=!0
return}if(j instanceof A.aT&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.aT){m=k.b.a
l=new A.aT(m.b,m.$ti)
j.kc(new A.k_(l,m),new A.k0(l),t.aT)
q=k.a
q.c=l
q.b=!1}},
$S:2}
A.k_.prototype={
$1(a){this.a.hz(this.b)},
$S:15}
A.k0.prototype={
$2(a,b){A.i2(a)
t.m.a(b)
this.a.ej(new A.bb(a,b))},
$S:49}
A.jY.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dU(o.p("2/(1)").a(p.d),m,o.p("2/"),n)}catch(l){s=A.bD(l)
r=A.fm(l)
q=s
p=r
if(p==null)p=A.l5(q)
o=this.a
o.c=new A.bb(q,p)
o.b=!0}},
$S:2}
A.jX.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.jR(s)&&p.a.e!=null){p.c=p.a.jK(s)
p.b=!1}}catch(o){r=A.bD(o)
q=A.fm(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.l5(p)
m=l.b
m.c=new A.bb(p,n)
p=m}p.b=!0}},
$S:2}
A.hQ.prototype={}
A.fj.prototype={$inc:1}
A.hZ.prototype={
ka(a){var s,r,q
t.M.a(a)
try{if(B.A===$.ab){a.$0()
return}A.nE(null,null,this,a,t.aT)}catch(q){s=A.bD(q)
r=A.fm(q)
A.lY(A.i2(s),t.m.a(r))}},
jo(a){return new A.k7(this,t.M.a(a))},
k8(a,b){b.p("0()").a(a)
if($.ab===B.A)return a.$0()
return A.nE(null,null,this,a,b)},
dU(a,b,c,d){c.p("@<0>").aI(d).p("1(2)").a(a)
d.a(b)
if($.ab===B.A)return a.$1(b)
return A.rG(null,null,this,a,b,c,d)},
k9(a,b,c,d,e,f){d.p("@<0>").aI(e).aI(f).p("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ab===B.A)return a.$2(b,c)
return A.rF(null,null,this,a,b,c,d,e,f)}}
A.k7.prototype={
$0(){return this.a.ka(this.b)},
$S:2}
A.kv.prototype={
$0(){A.oF(this.a,this.b)},
$S:2}
A.f0.prototype={
gu(a){return this.a},
gak(a){return this.a===0},
gbl(){return new A.f1(this,this.$ti.p("f1<1>"))},
ag(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.hC(a)},
hC(a){var s=this.d
if(s==null)return!1
return this.ci(this.ex(s,a),a)>=0},
l(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.nf(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.nf(q,b)
return r}else return this.hy(b)},
hy(a){var s,r,q=this.d
if(q==null)return null
s=this.ex(q,a)
r=this.ci(s,a)
return r<0?null:s[r+1]},
h(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eh(s==null?m.b=A.lN():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eh(r==null?m.c=A.lN():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.lN()
p=A.i9(b)&1073741823
o=q[p]
if(o==null){A.lO(q,p,[b,c]);++m.a
m.e=null}else{n=m.ci(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aP(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.p("~(1,2)").a(b)
s=m.ei()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.l(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.h(A.aD(m))}},
ei(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.S(i.a,null,!1,t.z)
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
eh(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.lO(a,b,c)},
ex(a,b){return a[A.i9(b)&1073741823]}}
A.f3.prototype={
ci(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.f1.prototype={
gu(a){return this.a.a},
gak(a){return this.a.a===0},
gG(a){var s=this.a
return new A.f2(s,s.ei(),this.$ti.p("f2<1>"))}}
A.f2.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.h(A.aD(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iB:1}
A.f4.prototype={
gG(a){var s=this,r=new A.f5(s,s.r,s.$ti.p("f5<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gak(a){return this.a===0},
N(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.eg(s==null?q.b=A.lP():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.eg(r==null?q.c=A.lP():r,b)}else return q.hl(b)},
hl(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.lP()
r=J.b9(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.dl(a)]
else{if(p.ci(q,a)>=0)return!1
q.push(p.dl(a))}return!0},
eg(a,b){this.$ti.c.a(b)
if(t.br.a(a[b])!=null)return!1
a[b]=this.dl(b)
return!0},
dl(a){var s=this,r=new A.hY(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
ci(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aB(a[r].a,b))return r
return-1}}
A.hY.prototype={}
A.f5.prototype={
gM(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.h(A.aD(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.p("1?").a(r.a)
s.c=r.b
return!0}},
$iB:1}
A.iT.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:35}
A.G.prototype={
gG(a){return new A.bq(a,this.gu(a),A.b7(a).p("bq<G.E>"))},
bb(a,b){return this.l(a,b)},
gak(a){return this.gu(a)===0},
gfp(a){return this.gu(a)!==0},
c0(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(this.l(a,s)===b)return!0
if(r!==this.gu(a))throw A.h(A.aD(a))}return!1},
dh(a,b){return A.eN(a,b,null,A.b7(a).p("G.E"))},
fB(a,b){return A.eN(a,0,A.i4(b,"count",t.p),A.b7(a).p("G.E"))},
b9(a,b,c){var s,r=this.gu(a)
A.be(b,c,r)
A.be(b,c,this.gu(a))
s=A.b7(a).p("G.E")
s=A.u(A.eN(a,b,c,s),s)
return s},
aF(a,b,c,d){var s
A.b7(a).p("G.E?").a(d)
A.be(b,c,this.gu(a))
for(s=b;s<c;++s)this.h(a,s,d)},
ao(a,b,c,d,e){var s,r,q,p,o
A.b7(a).p("e<G.E>").a(d)
A.be(b,c,this.gu(a))
s=c-b
if(s===0)return
A.bt(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.l2(d,e).fC(0,!1)
r=0}p=J.a1(q)
if(r+s>p.gu(q))throw A.h(A.mG())
if(r<b)for(o=s-1;o>=0;--o)this.h(a,b+o,p.l(q,r+o))
else for(o=0;o<s;++o)this.h(a,b+o,p.l(q,r+o))},
by(a,b,c,d){return this.ao(a,b,c,d,0)},
fO(a,b,c){A.b7(a).p("e<G.E>").a(c)
this.by(a,b,b+c.length,c)},
B(a){return A.lf(a,"[","]")},
$iA:1,
$ie:1,
$iq:1}
A.U.prototype={
dL(a,b,c){var s=A.m(this)
return A.mS(this,s.p("U.K"),s.p("U.V"),b,c)},
aP(a,b){var s,r,q,p=A.m(this)
p.p("~(U.K,U.V)").a(b)
for(s=this.gbl(),s=s.gG(s),p=p.p("U.V");s.D();){r=s.gM()
q=this.l(0,r)
b.$2(r,q==null?p.a(q):q)}},
gu(a){var s=this.gbl()
return s.gu(s)},
gak(a){var s=this.gbl()
return s.gak(s)},
B(a){return A.ll(this)},
$ia8:1}
A.iV.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.C(a)
r.a=(r.a+=s)+": "
s=A.C(b)
r.a+=s},
$S:20}
A.dq.prototype={
gak(a){return this.a===0},
B(a){return A.lf(this,"{","}")},
$iA:1,
$ie:1}
A.fc.prototype={}
A.hW.prototype={
l(a,b){var s,r=this.b
if(r==null)return this.c.l(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.hD(b):s}},
gu(a){return this.b==null?this.c.a:this.cQ().length},
gak(a){return this.gu(0)===0},
gbl(){if(this.b==null){var s=this.c
return new A.bp(s,A.m(s).p("bp<1>"))}return new A.hX(this)},
aP(a,b){var s,r,q,p,o=this
t.fH.a(b)
if(o.b==null)return o.c.aP(0,b)
s=o.cQ()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.kj(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.h(A.aD(o))}},
cQ(){var s=t.bE.a(this.c)
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
hD(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.kj(this.a[a])
return this.b[a]=s}}
A.hX.prototype={
gu(a){return this.a.gu(0)},
bb(a,b){var s=this.a
if(s.b==null)s=s.gbl().bb(0,b)
else{s=s.cQ()
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]}return s},
gG(a){var s=this.a
if(s.b==null){s=s.gbl()
s=s.gG(s)}else{s=s.cQ()
s=new J.bX(s,s.length,A.a5(s).p("bX<1>"))}return s}}
A.ke.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:11}
A.kd.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:11}
A.ka.prototype={
bu(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.be(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.h(A.bc("Invalid value in input: "+p,null,null))
return this.hE(a,0,r)}}return A.dt(a,0,r)},
hE(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.V((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.dL.prototype={
gca(){return B.ct}}
A.ih.prototype={
bu(a){var s
t.L.a(a)
s=a.length
if(s===0)return""
s=new A.jL("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").jF(a,0,s,!0)
s.toString
return A.dt(s,0,null)}}
A.jL.prototype={
jF(a,b,c,d){var s,r,q,p,o
t.L.a(a)
s=this.a
r=(s&3)+(c-b)
q=B.a.V(r,3)
p=q*4
if(r-q*3>0)p+=4
o=new Uint8Array(p)
this.a=A.qy(this.b,a,b,c,!0,o,0,s)
if(p>0)return o
return null}}
A.ig.prototype={
bu(a){var s,r,q,p=A.be(0,null,a.length)
if(0===p)return new Uint8Array(0)
s=new A.jK()
r=s.dN(a,0,p)
r.toString
q=s.a
if(q<-1)A.ac(A.bc("Missing padding character",a,p))
if(q>0)A.ac(A.bc("Invalid length, must be multiple of four",a,p))
s.a=-1
return r}}
A.jK.prototype={
dN(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.nd(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.qv(a,b,c,q)
r.a=A.qx(a,b,c,s,0,r.a)
return s}}
A.ap.prototype={}
A.fA.prototype={}
A.fC.prototype={}
A.eg.prototype={
B(a){var s=A.fD(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hf.prototype={
B(a){return"Cyclic error in JSON stringify"}}
A.he.prototype={
ju(a,b){var s=A.rC(a,this.gjB().a)
return s},
jE(a,b){var s=A.qB(a,this.gca().b,null)
return s},
gca(){return B.da},
gjB(){return B.d9}}
A.iP.prototype={}
A.iO.prototype={}
A.k3.prototype={
fI(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.p.c5(a,r,q)
r=q+1
o=A.V(92)
s.a+=o
o=A.V(117)
s.a+=o
o=A.V(100)
s.a+=o
o=p>>>8&15
o=A.V(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.V(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.V(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.p.c5(a,r,q)
r=q+1
o=A.V(92)
s.a+=o
switch(p){case 8:o=A.V(98)
s.a+=o
break
case 9:o=A.V(116)
s.a+=o
break
case 10:o=A.V(110)
s.a+=o
break
case 12:o=A.V(102)
s.a+=o
break
case 13:o=A.V(114)
s.a+=o
break
default:o=A.V(117)
s.a+=o
o=A.V(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.V(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.V(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.p.c5(a,r,q)
r=q+1
o=A.V(92)
s.a+=o
o=A.V(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.p.c5(a,r,m)},
dj(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.h(new A.hf(a,null))}B.c.N(s,a)},
df(a){var s,r,q,p,o=this
if(o.fH(a))return
o.dj(a)
try{s=o.b.$1(a)
if(!o.fH(s)){q=A.mK(a,null,o.geK())
throw A.h(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.bD(p)
q=A.mK(a,r,o.geK())
throw A.h(q)}},
fH(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.B(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.fI(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dj(a)
q.km(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dj(a)
r=q.kn(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
km(a){var s,r,q=this.c
q.a+="["
s=J.a1(a)
if(s.gfp(a)){this.df(s.l(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.df(s.l(a,r))}}q.a+="]"},
kn(a){var s,r,q,p,o,n,m=this,l={}
if(a.gak(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.S(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aP(0,new A.k4(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.fI(A.b4(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.df(r[n])}p.a+="}"
return!0}}
A.k4.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.c.h(s,r.a++,a)
B.c.h(s,r.a++,b)},
$S:20}
A.k2.prototype={
geK(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.hg.prototype={
bQ(a){var s
t.L.a(a)
s=B.db.bu(a)
return s}}
A.iQ.prototype={}
A.hL.prototype={
jt(a,b){t.L.a(a)
return(b===!0?B.ku:B.kt).bu(a)}}
A.hM.prototype={
bu(a){return new A.i1(this.a).ek(t.L.a(a),0,null,!0)}}
A.i1.prototype={
ek(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.be(b,c,a.length)
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.qU(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.qT(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dq(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.qV(o)
l.b=0
throw A.h(A.bc(m,a,p+l.c))}return n},
dq(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.V(b+c,2)
r=q.dq(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dq(a,s,c,d)}return q.jx(a,b,c,d)},
jx(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.ct(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.V(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.V(h)
e.a+=p
break
case 65:p=A.V(h)
e.a+=p;--d
break
default:p=A.V(h)
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
p=A.V(a[l])
e.a+=p}else{p=A.dt(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.V(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.c0.prototype={
U(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.c0)if(this.a===b.a)s=this.b===b.b
return s},
gH(a){return A.hj(this.a,this.b,B.z,B.z)},
bE(a,b){var s
t.dy.a(b)
s=B.a.bE(this.a,b.a)
if(s!==0)return s
return B.a.bE(this.b,b.b)},
B(a){var s=this,r=A.oD(A.pq(s)),q=A.fB(A.po(s)),p=A.fB(A.pk(s)),o=A.fB(A.pl(s)),n=A.fB(A.pn(s)),m=A.fB(A.pp(s)),l=A.mn(A.pm(s)),k=s.b,j=k===0?"":A.mn(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaX:1}
A.jO.prototype={
B(a){return this.ad()}}
A.P.prototype={
gce(){return A.pj(this)}}
A.fq.prototype={
B(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fD(s)
return"Assertion failed"}}
A.bv.prototype={}
A.aV.prototype={
gdt(){return"Invalid argument"+(!this.a?"(s)":"")},
gds(){return""},
B(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.C(p),n=s.gdt()+q+o
if(!s.a)return n
return n+s.gds()+": "+A.fD(s.gdR())},
gdR(){return this.b}}
A.bs.prototype={
gdR(){return A.nu(this.b)},
gdt(){return"RangeError"},
gds(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.C(q):""
else if(q==null)s=": Not greater than or equal to "+A.C(r)
else if(q>r)s=": Not in inclusive range "+A.C(r)+".."+A.C(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.C(r)
return s}}
A.fR.prototype={
gdR(){return A.w(this.b)},
gdt(){return"RangeError"},
gds(){if(A.w(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$ibs:1,
gu(a){return this.f}}
A.eP.prototype={
B(a){return"Unsupported operation: "+this.a}}
A.hJ.prototype={
B(a){return"UnimplementedError: "+this.a}}
A.ds.prototype={
B(a){return"Bad state: "+this.a}}
A.fy.prototype={
B(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fD(s)+"."}}
A.hk.prototype={
B(a){return"Out of Memory"},
gce(){return null},
$iP:1}
A.eM.prototype={
B(a){return"Stack Overflow"},
gce(){return null},
$iP:1}
A.jP.prototype={
B(a){return"Exception: "+this.a}}
A.as.prototype={
B(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.p.c5(e,0,75)+"..."
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
k=""}return g+l+B.p.c5(e,i,j)+k+"\n"+B.p.dg(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.C(f)+")"):g}}
A.e.prototype={
cA(a,b){var s,r
A.m(this).p("e.E(e.E,e.E)").a(b)
s=this.gG(this)
if(!s.D())throw A.h(A.h4())
r=s.gM()
while(s.D())r=b.$2(r,s.gM())
return r},
gu(a){var s,r=this.gG(this)
for(s=0;r.D();)++s
return s},
gak(a){return!this.gG(this).D()},
bb(a,b){var s,r
A.bt(b,"index")
s=this.gG(this)
for(r=b;s.D();){if(r===0)return s.gM();--r}throw A.h(A.lc(b,b-r,this,"index"))},
B(a){return A.oZ(this,"(",")")}}
A.av.prototype={
gH(a){return A.D.prototype.gH.call(this,0)},
B(a){return"null"}}
A.D.prototype={$iD:1,
U(a,b){return this===b},
gH(a){return A.eI(this)},
B(a){return"Instance of '"+A.hq(this)+"'"},
gaG(a){return A.t8(this)},
toString(){return this.B(this)}}
A.i_.prototype={
B(a){return""},
$idr:1}
A.jh.prototype={
gjD(){var s,r=this.b
if(r==null)r=$.lv.$0()
s=r-this.a
if($.m6()===1000)return s
return B.a.V(s,1000)}}
A.ct.prototype={
gu(a){return this.a.length},
B(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ipC:1}
A.iW.prototype={
B(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.kP.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.p("1/?").a(this.b.p("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.ac(A.lG("Future already completed"))
s.ho(r.p("1/").a(a))
return null},
$S:12}
A.kQ.prototype={
$1(a){if(a==null)return this.a.fh(new A.iW(a===undefined))
return this.a.fh(a)},
$S:12}
A.ky.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.nD(a))return a
s=this.a
a.toString
if(s.ag(a))return s.l(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.ac(A.ak(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.i4(!0,"isUtc",t.y)
return new A.c0(r,0,!0)}if(a instanceof RegExp)throw A.h(A.bj("structured clone of RegExp",null))
if(a instanceof Promise)return A.tn(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.I(p,p)
s.h(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.al(n),p=s.gG(n);p.D();)m.push(A.nP(p.gM()))
for(l=0;l<s.gu(n);++l){k=s.l(n,l)
if(!(l<m.length))return A.a(m,l)
j=m[l]
if(k!=null)o.h(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.h(0,a,o)
h=A.w(a.length)
for(s=J.al(i),l=0;l<h;++l)o.push(this.$1(s.l(i,l)))
return o}return a},
$S:47}
A.iw.prototype={
h2(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a1.length
for(s=0;s<a0;++s){r=a1[s]
if(r>a.b)a.b=r
if(r<a.c)a.c=r}r=a.b
if(r>15)throw A.h(B.cU)
q=r+1
p=new Uint16Array(q)
for(o=0;o<a0;++o){n=a1[o]
if(n!==0){if(!(n>=0&&n<q))return A.a(p,n)
m=p[n]
if(!(n<q))return A.a(p,n)
p[n]=m+1}}for(l=1,k=1;k<=r;++k){l=(l<<1>>>0)-p[k]
if(l<0)throw A.h(B.d_)}if(l>0)q=r>(a2?0:1)
else q=!1
if(q)throw A.h(B.cZ)
j=B.a.Y(1,r)
r=a.a=new Uint32Array(j)
for(q=a.b,m=a1.length,i=1,h=0,g=2;i<=q;){for(f=i<<16,s=0;s<a0;++s){if(!(s<m))return A.a(a1,s)
if(a1[s]===i){for(e=h,d=0,c=0;c<i;++c){d=(d<<1|e&1)>>>0
e=e>>>1}for(b=(f|s)>>>0,c=d;c<j;c+=g){if(!(c>=0&&c<j))return A.a(r,c)
r[c]=b}++h}}++i
h=h<<1>>>0
g=g<<1>>>0}}}
A.jF.prototype={}
A.kg.prototype={
jz(a,b,c,d,e){var s,r=!1,q=a.a
a.a=B.as
try{s=A.ta("zlib",!1,r,new A.kh(this,a,b,!1,!1))
return s}finally{a.sjp(q)}},
hG(a,b,c,d){var s,r,q,p,o,n,m=a.c,l=a.d
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
if(B.a.a_(q*256+p,31)!==0)return!1
if((p>>>5&1)!==0){a.k()
return!1}m=new A.dh(new Uint8Array(32768),B.ar)
o=new A.iE(a,m,!0)
o.io()
m=o.c
n=J.a_(B.f.gA(m.c),m.c.byteOffset,m.b)
if(!o.f){b.aW(n)
return!1}m=a.b
if((m==null?0:m.length-a.c)<4){b.aW(n)
return!1}a.k()
break A}if(n!=null)b.aW(n)
return!0}}
A.kh.prototype={
$0(){var s=this
return s.a.hG(s.b,s.c,s.d,s.e)},
$S:46}
A.iE.prototype={
gbs(){var s=this.a
if(s==null)return s
s.d===$&&A.d()
return s},
io(){var s,r,q,p=this
p.w=p.r=0
if(p.gbs()==null)return
s=p.c
if(!(s instanceof A.dh)){p.d=s
p.c=A.lm(32768)}try{for(;;){r=p.gbs()
q=r.c
r=r.d
r===$&&A.d()
if(!(q<r))break
if(!p.iA())return
p.ev(32768)}}finally{p.ev(0)
p.c=s
p.d=null}},
ev(a){var s,r,q,p,o=this.d
if(o==null)return
s=this.c
r=s.b-a
if(r<(a===0?1:1048576))return
q=s.dV()
o.aW(A.n7(q,0,r))
p=A.lm(2097152)
p.aW(A.n7(q,r,null))
this.c=p},
iA(){var s,r,q,p=this,o=p.gbs()
if(o!=null){s=o.c
r=o.d
r===$&&A.d()
r=s>=r
s=r}else s=!0
if(s)return!1
q=p.ba(3)
s=(q&1)===0
switch(B.a.j(q,1)){case 0:if(p.iK()===-1)return!1
break
case 1:if(p.eo($.o_(),$.nZ())===-1)return!1
break
case 2:if(p.iB()===-1)return!1
break
default:return!1}if(!s)p.f=!0
return s},
ba(a){var s,r,q,p,o=this
if(a===0)return 0
while(s=o.w,s<a){s=o.gbs()
r=s.c
s=s.d
s===$&&A.d()
if(r>=s)return-1
s=o.gbs()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=o.r
r=o.w
o.r=(s|B.a.Y(q,r))>>>0
o.w=r+8}r=o.r
p=B.a.S(1,a)
o.r=B.a.a1(r,a)
o.w=s-a
return(r&p-1)>>>0},
dF(a){var s,r,q,p,o,n,m=this,l=a.a
l===$&&A.d()
s=a.b
while(m.w<s){r=m.gbs()
q=r.c
r=r.d
r===$&&A.d()
if(q>=r)break
r=m.gbs()
q=r.b
q.toString
r=r.c++
if(!(r>=0&&r<q.length))return A.a(q,r)
p=q[r]
r=m.r
q=m.w
m.r=(r|B.a.Y(p,q))>>>0
m.w=q+8}r=m.r
q=(r&B.a.Y(1,s)-1)>>>0
if(!(q<l.length))return A.a(l,q)
o=l[q]
n=o>>>16
if(n===0||n>m.w)return-1
m.r=B.a.a1(r,n)
m.w-=n
return o&65535},
iK(){var s,r,q,p=this
p.w=p.r=0
s=p.ba(16)
if(s!==(p.ba(16)^65535)>>>0)return-1
if(s>p.gbs().gu(0))return-1
r=p.gbs()
q=r.fX(s,r.c)
r.c=r.c+q.gu(0)
p.c.ko(q)
return 0},
iB(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ba(5)
if(f===-1)return-1
f+=257
if(f>286)return-1
s=g.ba(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=g.ba(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=g.ba(3)
if(o===-1)return-1
n=B.iD[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=g.eX(q,!0)
if(m==null)return-1
n=f+s
l=new Uint8Array(n)
k=J.a_(B.f.gA(l),0,f)
j=J.a_(B.f.gA(l),f,s)
if(g.ip(n,m,l)===-1)return-1
i=g.eW(k)
n=i==null
h=n?null:g.eW(j)
if(n||h==null)return-1
return g.eo(i,h)},
eX(a,b){var s,r
t.L.a(a)
try{s=A.la(a,b)
return s}catch(r){if(A.bD(r) instanceof A.as)throw r
else throw r}},
eW(a){return this.eX(a,!1)},
eo(a,b){var s,r,q,p,o,n,m,l,k,j=this
for(;;){s=j.dF(a)
if(s<0||s>285)return-1
if(s===256)break
if(s<256){j.c.C(s&255)
continue}r=s-257
if(!(r>=0&&r<31))return A.a(B.bV,r)
q=j.ba(B.bV[r])
if(q<0)return-1
if(!(r<29))return A.a(B.bM,r)
p=B.bM[r]
o=j.dF(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.bs,o)
n=j.ba(B.bs[o])
if(n<0)return-1
m=B.iY[o]+n
if(m<1||m>j.c.b)return-1
j.c.ki(m,p+q)}while(p=j.w,p>=8){j.w=p-8
p=j.gbs()
l=p.c
if(1>=l)p.c=0
else{k=p.d
k===$&&A.d()
if(1<=l-k)p.c=k
else p.c=l-1}}return 0},
ip(a,b,c){var s,r,q,p,o,n,m,l,k=this
for(s=0,r=0;r<a;){q=k.dF(b)
if(q===-1)return-1
p=0
switch(q){case 16:if(r===0)return-1
o=k.ba(2)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=s}break
case 17:o=k.ba(3)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
case 18:o=k.ba(7)
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
A.jE.prototype={
bR(a){var s,r
t.L.a(a)
s=A.lm(32768)
B.cD.jz(A.ld(a,B.as,null,null),s,!1,null,!1)
r=s.dV()
return r}}
A.cJ.prototype={}
A.fp.prototype={}
A.ie.prototype={}
A.dM.prototype={
ad(){return"ByteOrder."+this.b}}
A.jN.prototype={}
A.fS.prototype={
gu(a){var s=this.b
return s==null?0:s.length-this.c},
fX(a,b){var s=this.b
if(s==null)return A.ld(A.j([],t.t),B.ar,null,null)
return A.ld(s,this.a,a,b)},
F(){var s,r=this.b
r.toString
s=this.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
return r[s]}}
A.fT.prototype={
k(){var s=this,r=s.F(),q=s.F(),p=s.F(),o=s.F()
if(s.a===B.as)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
sjp(a){this.a=t.fA.a(a)}}
A.dh.prototype={
dV(){return J.a_(B.f.gA(this.c),this.c.byteOffset,this.b)},
C(a){var s,r,q=this
if(q.b===q.c.length)q.iz()
s=q.c
r=q.b++
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a},
kj(a,b){var s,r,q,p,o=this
t.L.a(a)
b=a.length
while(s=o.b,r=s+b,q=o.c,p=q.length,r>p)o.cZ(r-p)
B.f.by(q,s,r,a)
o.b+=b},
aW(a){return this.kj(a,null)},
ko(a){var s,r,q,p,o,n,m=this
for(;;){s=m.b
r=a.b
q=r==null
p=q?0:r.length-a.c
o=m.c
n=o.length
if(!(s+p>n))break
m.cZ(s+(q?0:r.length-a.c)-n)}if(!q)B.f.ao(o,s,s+a.gu(0),r,a.c)
m.b=m.b+a.gu(0)},
ki(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
while(s=i.b,r=s+b,q=i.c,p=q.length,r>p)i.cZ(r-p)
o=s-a
if(a>=b)B.f.ao(q,s,r,q,o)
else for(n=q.$flags|0,m=o;s<r;s=l,m=k){l=s+1
k=m+1
if(!(m>=0&&m<p))return A.a(q,m)
j=q[m]
n&2&&A.b(q)
if(!(s>=0))return A.a(q,s)
q[s]=j}i.b+=b},
cZ(a){var s,r=this.c,q=r.length,p=q+(a==null?1:a),o=q===0?32768:q*2
if(o<p)o=p
s=new Uint8Array(o)
B.f.by(s,0,q,r)
this.c=s},
iz(){return this.cZ(null)},
gu(a){return this.b}}
A.hl.prototype={}
A.il.prototype={
ad(){return"Channel."+this.b}}
A.O.prototype={
D(){var s=this.b
return++this.a<s.gu(s)},
gM(){return this.b.l(0,this.a)},
$iB:1}
A.c_.prototype={
ad(){return"ChannelOrder."+this.b}}
A.cL.prototype={
I(){return new A.cL(new Uint16Array(A.z(this.a)))},
gK(){return B.E},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.Q
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=A.K(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gP(){return this.gm()},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]
r=$.Q
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
sm(a){var s,r=this.a,q=r.length
if(q!==0){s=A.K(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gt(){var s,r=this.a
if(r.length>1){r=r[1]
s=$.Q
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
st(a){var s,r=this.a
if(r.length>1){s=A.K(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gq(){var s,r=this.a
if(r.length>2){r=r[2]
s=$.Q
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
sq(a){var s,r=this.a
if(r.length>2){s=A.K(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s,r=this.a
if(r.length>3){r=r[3]
s=$.Q
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gX(){return this.gv()/1},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){s=A.K(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cM.prototype={
I(){return new A.cM(new Float32Array(A.z(this.a)))},
gK(){return B.J},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.b(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=a}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s=this.a
if(s.length>1){s.$flags&2&&A.b(s)
s[1]=a}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s=this.a
if(s.length>2){s.$flags&2&&A.b(s)
s[2]=a}},
gv(){var s=this.a
return s.length>3?s[3]:1},
gX(){return this.gv()/1},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cN.prototype={
I(){return new A.cN(new Float64Array(A.z(this.a)))},
gK(){return B.L},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.b(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=a}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s=this.a
if(s.length>1){s.$flags&2&&A.b(s)
s[1]=a}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s=this.a
if(s.length>2){s.$flags&2&&A.b(s)
s[2]=a}},
gv(){var s=this.a
return s.length>3?s[3]:1},
gX(){return this.gv()/1},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cO.prototype={
I(){return new A.cO(new Int16Array(A.z(this.a)))},
gK(){return B.N},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.i(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s,r=this.a
if(r.length>1){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s,r=this.a
if(r.length>2){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gX(){return this.gv()/32767},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.i(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cP.prototype={
I(){return new A.cP(new Int32Array(A.z(this.a)))},
gK(){return B.O},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s=this.a,r=s.length
if(r!==0){A.w(a)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=a}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s,r=this.a
if(r.length>1){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s,r=this.a
if(r.length>2){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gX(){return this.gv()/2147483647},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.i(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cQ.prototype={
I(){return new A.cQ(new Int8Array(A.z(this.a)))},
gK(){return B.M},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.i(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s,r=this.a
if(r.length>1){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s,r=this.a
if(r.length>2){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gX(){return this.gv()/127},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.i(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cS.prototype={
I(){var s=this.b
s===$&&A.d()
return new A.cS(this.a,s)},
gK(){return B.w},
gT(){return null},
bV(a){var s
if(a<this.a){s=this.b
s===$&&A.d()
s=B.a.a2(s,7-a)&1}else s=0
return s},
bM(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.d()
this.b=b!==0?(s|B.a.Y(1,a))>>>0:(s&~(B.a.Y(1,a)&255))>>>0},
l(a,b){return this.bV(b)},
h(a,b,c){return this.bM(b,c)},
gP(){return this.bV(0)},
gm(){return this.bV(0)},
sm(a){this.bM(0,a)},
gt(){return this.bV(1)},
st(a){this.bM(1,a)},
gq(){return this.bV(2)},
sq(a){this.bM(2,a)},
gv(){return this.bV(3)},
gX(){return this.bV(3)/1},
gah(){return A.X(this)},
ac(a){this.a8(a.gm(),a.gt(),a.gq(),a.gv())},
a8(a,b,c,d){var s=this
s.bM(0,a)
s.bM(1,b)
s.bM(2,c)
s.bM(3,d)},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1,
gu(a){return this.a}}
A.cT.prototype={
I(){return new A.cT(new Uint16Array(A.z(this.a)))},
gK(){return B.l},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.i(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s,r=this.a
if(r.length>1){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s,r=this.a
if(r.length>2){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gX(){return this.gv()/65535},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.i(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cU.prototype={
I(){var s=this.b
s===$&&A.d()
return new A.cU(this.a,s)},
gK(){return B.B},
gT(){return null},
bW(a){var s
if(a<this.a){s=this.b
s===$&&A.d()
s=B.a.a2(s,6-(a<<1>>>0))&3}else s=0
return s},
bN(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.bg,a)
s=B.bg[a]
r=B.b.i(b)
q=this.b
q===$&&A.d()
this.b=(q&s|B.a.Y(r&3,6-(a<<1>>>0)))>>>0},
l(a,b){return this.bW(b)},
h(a,b,c){return this.bN(b,c)},
gP(){return this.bW(0)},
gm(){return this.bW(0)},
sm(a){this.bN(0,a)},
gt(){return this.bW(1)},
st(a){this.bN(1,a)},
gq(){return this.bW(2)},
sq(a){this.bN(2,a)},
gv(){return this.bW(3)},
gX(){return this.bW(3)/3},
gah(){return A.X(this)},
ac(a){this.a8(a.gm(),a.gt(),a.gq(),a.gv())},
a8(a,b,c,d){var s=this
s.bN(0,a)
s.bN(1,b)
s.bN(2,c)
s.bN(3,d)},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1,
gu(a){return this.a}}
A.cV.prototype={
I(){return new A.cV(new Uint32Array(A.z(this.a)))},
gK(){return B.K},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.i(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s,r=this.a
if(r.length>1){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s,r=this.a
if(r.length>2){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:0},
gX(){return this.gv()/4294967295},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.i(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.cW.prototype={
I(){return new A.cW(this.a,new Uint8Array(A.z(this.b)))},
gK(){return B.C},
gT(){return null},
bX(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.a2(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.a2(s[1],4-((a&1)<<2))&15}}return s},
bP(a,b){var s,r,q,p
if(a>=this.a)return
s=B.a.J(B.b.i(b),0,15)
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
l(a,b){return this.bX(b)},
h(a,b,c){return this.bP(b,c)},
gP(){return this.bX(0)},
gm(){return this.bX(0)},
sm(a){this.bP(0,a)},
gt(){return this.bX(1)},
st(a){this.bP(1,a)},
gq(){return this.bX(2)},
sq(a){this.bP(2,a)},
gv(){return this.bX(3)},
gX(){return this.bX(3)/15},
gah(){return A.X(this)},
ac(a){this.a8(a.gm(),a.gt(),a.gq(),a.gv())},
a8(a,b,c,d){var s=this
s.bP(0,a)
s.bP(1,b)
s.bP(2,c)
s.bP(3,d)},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1,
gu(a){return this.a}}
A.bF.prototype={
fZ(a,b,c,d){var s,r=this.a
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
I(){return new A.bF(new Uint8Array(A.z(this.a)))},
gK(){return B.e},
gu(a){return this.a.length},
gT(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gP(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gm(){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
sm(a){var s,r=this.a,q=r.length
if(q!==0){s=B.b.i(a)
r.$flags&2&&A.b(r)
if(0>=q)return A.a(r,0)
r[0]=s}},
gt(){var s=this.a
return s.length>1?s[1]:0},
st(a){var s,r=this.a
if(r.length>1){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[1]=s}},
gq(){var s=this.a
return s.length>2?s[2]:0},
sq(a){var s,r=this.a
if(r.length>2){s=B.b.i(a)
r.$flags&2&&A.b(r)
r[2]=s}},
gv(){var s=this.a
return s.length>3?s[3]:255},
gX(){return this.gv()/255},
gah(){return A.X(this)},
ac(a){var s,r,q=this
q.sm(a.gm())
q.st(a.gt())
q.sq(a.gq())
s=a.gv()
r=q.a
if(r.length>3){s=B.b.i(s)
r.$flags&2&&A.b(r)
r[3]=s}},
gG(a){return new A.O(this)},
U(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===this.a.length){s=b.gH(b)
r=A.u(this,A.m(this).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.fw.prototype={}
A.cR.prototype={}
A.dO.prototype={
I(){return new A.dO(this.a)},
gK(){return B.e},
gu(a){return 4},
gT(){return null},
l(a,b){var s
if(b>=0&&b<4){s=b<<3>>>0
s=B.a.a1((this.a&B.a.S(255,s))>>>0,s)}else s=0
return s},
h(a,b,c){},
ac(a){},
gP(){return this.l(0,0)},
gm(){return this.l(0,0)},
sm(a){},
gt(){return this.l(0,1)},
st(a){},
gq(){return this.l(0,2)},
sq(a){},
gv(){return this.l(0,3)},
gX(){return this.gv()/255},
gah(){return A.X(this)},
gG(a){return new A.O(this)},
U(a,b){var s,r,q=this
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gu(b)===q.gu(q)){s=b.gH(b)
r=A.u(q,A.m(q).p("e.E"))
s=s===A.n(r)}return s},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
$iy:1}
A.fz.prototype={
gv(){return 255},
gX(){return 1},
gu(a){return 3}}
A.ar.prototype={
ad(){return"Format."+this.b}}
A.fs.prototype={
ad(){return"BlendMode."+this.b}}
A.c1.prototype={
cJ(a){var s=$.ma()
if(!s.ag(a))return"<unknown>"
return s.l(0,a).a},
B(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=new A.R(s,s.r,s.e,A.m(s).p("R<1>")),q=t.p,p=t.r,o=t.N,n=t.P,m="";r.D();){l=r.d
m+=l+"\n"
k=s.l(0,l)
for(l=k.a,l=new A.R(l,l.r,l.e,A.m(l).p("R<1>"));l.D();){j=l.d
i=k.l(0,j)
m=i==null?m+("\t"+e.cJ(j)+"\n"):m+("\t"+e.cJ(j)+": "+i.B(0)+"\n")}for(l=k.b.a,j=new A.R(l,l.r,l.e,A.m(l).p("R<1>"));j.D();){h=j.d
m+=h+"\n"
if(!l.ag(h))l.h(0,h,new A.aG(A.I(q,p),new A.aO(A.I(o,n))))
g=l.l(0,h)
for(h=g.a,h=new A.R(h,h.r,h.e,A.m(h).p("R<1>"));h.D();){f=h.d
i=g.l(0,f)
m=i==null?m+("\t"+e.cJ(f)+"\n"):m+("\t"+e.cJ(f)+": "+i.B(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
aL(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="exif",a7="interop",a8=a9.b
a9.b=!0
a9.aB(19789)
a9.aB(42)
a9.aJ(8)
s=a5.a
if(s.l(0,"ifd0")==null)s.h(0,"ifd0",new A.aG(A.I(t.p,t.r),new A.aO(A.I(t.N,t.P))))
r=s.l(0,"ifd1")
q=a5.b
p=q!=null&&q.length!==0&&r!=null
if(p){r.h(0,513,A.lb(0))
r.h(0,514,A.lb(q.length))}else if(r!=null){o=r.a
o.cb(0,513)
o.cb(0,514)}n=A.j(["ifd0"],t.s)
for(o=new A.R(s,s.r,s.e,A.m(s).p("R<1>"));o.D();){m=o.d
if(m!=="ifd0")B.c.N(n,m)}o=t.N
m=t.p
l=A.I(o,m)
for(k=n.length,j=t.r,i=t.P,h=8,g=0;g<n.length;n.length===k||(0,A.a3)(n),++g){f=n[g]
e=s.l(0,f)
e.toString
l.h(0,f,h)
d=e.b.a
if(d.ag(a6)){c=new Uint32Array(1)
c[0]=0
e.h(0,34665,new A.aZ(c))}else e.a.cb(0,34665)
if(d.ag(a7)){c=new Uint32Array(1)
c[0]=0
e.h(0,40965,new A.aZ(c))}else e.a.cb(0,40965)
if(d.ag("gps")){c=new Uint32Array(1)
c[0]=0
e.h(0,34853,new A.aZ(c))}else e.a.cb(0,34853)
e=e.a
h+=2+12*e.a+4
for(e=new A.at(e,e.r,e.e,A.m(e).p("at<2>"));e.D();){c=e.d
b=c.gaA().a
if(!(b<14))return A.a(B.t,b)
a=B.t[b]*c.gu(c)
if(a>4)h+=a}for(e=new A.R(d,d.r,d.e,A.m(d).p("R<1>"));e.D();){c=e.d
if(!d.ag(c))d.h(0,c,new A.aG(A.I(m,j),new A.aO(A.I(o,i))))
b=d.l(0,c)
b.toString
l.h(0,c,h)
b=b.a
a0=2+12*b.a
for(c=new A.at(b,b.r,b.e,A.m(b).p("at<2>"));c.D();){b=c.d
a1=b.gaA().a
if(!(a1<14))return A.a(B.t,a1)
a=B.t[a1]*b.gu(b)
if(a>4)a0+=a}h+=a0}}if(p)r.l(0,513).bi(h)
a2=n.length
for(k=a2-1,a3=0;a3<a2;++a3){if(!(a3<n.length))return A.a(n,a3)
f=n[a3]
a4=s.l(0,f)
e=a4.b.a
if(e.ag(a6)){d=a4.l(0,34665)
d.toString
c=l.l(0,a6)
c.toString
d.bi(c)}if(e.ag(a7)){d=a4.l(0,40965)
d.toString
c=l.l(0,a7)
c.toString
d.bi(c)}if(e.ag("gps")){d=a4.l(0,34853)
d.toString
c=l.l(0,"gps")
c.toString
d.bi(c)}d=l.l(0,f)
d.toString
a5.f4(a9,a4,d+2+12*a4.a.a+4)
if(a3===k)a9.aJ(0)
else{d=a3+1
if(!(d<n.length))return A.a(n,d)
d=l.l(0,n[d])
d.toString
a9.aJ(d)}a5.f5(a9,a4)
for(d=new A.R(e,e.r,e.e,A.m(e).p("R<1>"));d.D();){c=d.d
if(!e.ag(c))e.h(0,c,new A.aG(A.I(m,j),new A.aO(A.I(o,i))))
b=e.l(0,c)
b.toString
c=l.l(0,c)
c.toString
a5.f4(a9,b,c+2+12*b.a.a)
a5.f5(a9,b)}}if(p)a9.aW(q)
a9.b=a8},
f4(a,b,c){var s,r,q,p,o,n,m=b.a
a.aB(m.a)
for(m=new A.R(m,m.r,m.e,A.m(m).p("R<1>"));m.D();){s=m.d
r=b.l(0,s)
r.toString
q=s===273
p=q&&r.gaA()===B.F?B.n:r.gaA()
o=q&&r.gaA()===B.F?1:r.gu(r)
a.aB(s)
a.aB(p.a)
a.aJ(o)
s=r.gaA().a
if(!(s<14))return A.a(B.t,s)
n=B.t[s]*r.gu(r)
if(n<=4){r.aL(a)
while(n<4){a.C(0);++n}}else{a.aJ(c)
c+=n}}return c},
f5(a,b){var s,r,q
for(s=b.a,s=new A.at(s,s.r,s.e,A.m(s).p("at<2>"));s.D();){r=s.d
q=r.gaA().a
if(!(q<14))return A.a(B.t,q)
if(B.t[q]*r.gu(r)>4)r.aL(a)}},
c3(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="Length must be a non-negative integer: ",c5=c6.e
c6.e=!0
s=c6.d
a2=c6.n()
if(a2===18761){c6.e=!1
if(c6.n()!==42){c6.e=c5
return!1}}else if(a2===19789){c6.e=!0
if(c6.n()!==42){c6.e=c5
return!1}}else return!1
r=c6.k()
q=0
a3=c3.a
a4=t.cO
a5=c6.c
a6=t.p
a7=t.r
a8=t.N
a9=t.P
for(;;){b0=r
if(typeof b0!=="number")return b0.fM()
if(!(b0>0))break
try{b0=s
b1=r
if(typeof b0!=="number")return b0.b6()
if(typeof b1!=="number")return A.cG(b1)
b1=b0+b1
c6.d=b1
if(a5-b1<2)break
p=new A.aG(A.I(a6,a7),new A.aO(A.I(a8,a9)))
o=c6.n()
b0=o
if(typeof b0!=="number")return b0.dg()
if(b0*12>a5-c6.d)break
n=o
b0=n
if(b0<0)A.ac(A.bj(c4+A.C(b0),null))
m=A.j(new Array(b0),a4)
l=0
for(;;){b0=l
b1=n
if(typeof b0!=="number")return b0.fN()
if(typeof b1!=="number")return A.cG(b1)
if(!(b0<b1))break
J.x(m,l,c3.eO(c6,s))
b0=l
if(typeof b0!=="number")return b0.b6()
l=b0+1}k=m
for(b0=k,b1=b0.length,b2=0;b2<b0.length;b0.length===b1||(0,A.a3)(b0),++b2){j=b0[b2]
if(j.b!=null){b3=j.a
b4=j.b
b4.toString
J.x(p,b3,b4)}}a3.h(0,"ifd"+A.C(q),p)
b0=q
if(typeof b0!=="number")return b0.b6()
q=b0+1
i=c6.k()
if(J.aB(i,r))break
else r=i}catch(b5){break}}for(b0=new A.at(a3,a3.r,a3.e,A.m(a3).p("at<2>"));b0.D();){h=b0.d
for(b1=B.bX.gbl(),b1=b1.gG(b1);b1.D();){g=b1.gM()
b3=A.w(g)
if(h.a.ag(b3))try{f=J.c(h,g).i(0)
b3=s
b4=f
if(typeof b3!=="number")return b3.b6()
if(typeof b4!=="number")return A.cG(b4)
c6.d=b3+b4
e=new A.aG(A.I(a6,a7),new A.aO(A.I(a8,a9)))
d=c6.n()
c=d
b4=c
if(b4<0)A.ac(A.bj(c4+A.C(b4),null))
b=A.j(new Array(b4),a4)
a=0
for(;;){b3=a
b4=c
if(typeof b3!=="number")return b3.fN()
if(typeof b4!=="number")return A.cG(b4)
if(!(b3<b4))break
J.x(b,a,c3.eO(c6,s))
b3=a
if(typeof b3!=="number")return b3.b6()
a=b3+1}a0=b
for(b3=a0,b4=b3.length,b2=0;b2<b3.length;b3.length===b4||(0,A.a3)(b3),++b2){a1=b3[b2]
if(a1.b!=null){b6=a1.a
b7=a1.b
b7.toString
J.x(e,b6,b7)}}b3=h.b
b4=B.bX.l(0,g)
b4.toString
b3.a.h(0,b4,a9.a(e))}catch(b5){continue}}}c3.b=null
b8=a3.l(0,"ifd1")
if(b8!=null){a3=b8.a
a3=a3.ag(513)&&a3.ag(514)}else a3=!1
if(a3){b9=b8.l(0,513).i(0)
c0=b8.l(0,514).i(0)
a3=s
if(typeof a3!=="number")return a3.b6()
c1=a3+b9
if(c0>0){a3=s
if(typeof a3!=="number")return A.cG(a3)
a3=c1>=a3&&c1+c0<=a5}else a3=!1
if(a3){c2=c6.d
c6.d=c1
c3.b=c6.al(c0).a3()
c6.d=c2}}c6.e=c5
return!1},
eO(a,b){var s,r,q,p,o,n,m,l=a.n(),k=a.n(),j=a.k(),i=new A.hU(l,null)
if(k>=14)return i
s=B.bB[k]
r=j*B.t[k]
q=a.d
if((r>4?a.d=a.k()+b:q)+r>a.c)return i
p=a.al(r)
switch(s.a){case 0:break
case 6:i.b=new A.bH(new Int8Array(A.z(J.l1(B.f.gA(p.a3()),0,j))))
break
case 1:i.b=new A.bm(new Uint8Array(A.z(p.al(j).a3())))
break
case 7:i.b=new A.d3(new Uint8Array(A.z(p.al(j).a3())))
break
case 2:i.b=new A.c6(j===0?"":p.af(j-1))
break
case 3:i.b=A.mB(p,j)
break
case 4:i.b=A.mw(p,j)
break
case 5:i.b=A.mx(p,j)
break
case 10:i.b=A.mz(p,j)
break
case 8:i.b=A.mA(p,j)
break
case 9:i.b=A.my(p,j)
break
case 11:i.b=A.mC(p,j)
break
case 12:i.b=A.mv(p,j)
break
case 13:if(j===1){o=new A.d1(0)
n=p.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=n
n=$.a6()
if(0>=n.length)return A.a(n,0)
o.a=n[0]
i.b=o}break}a.d=q+4
return i}}
A.hU.prototype={}
A.fE.prototype={}
A.aO.prototype={
h3(a){a.a.aP(0,new A.iy(this))},
gak(a){var s,r=this.a
if(r.a===0)return!0
for(r=new A.at(r,r.r,r.e,A.m(r).p("at<2>"));r.D();){s=r.d
if(!(s.a.a===0&&s.b.gak(0)))return!1}return!0},
l(a,b){var s=this.a
if(!s.ag(b))s.h(0,b,new A.aG(A.I(t.p,t.r),new A.aO(A.I(t.N,t.P))))
s=s.l(0,b)
s.toString
return s}}
A.iy.prototype={
$2(a,b){var s
A.b4(a)
s=A.mu(t.P.a(b))
this.a.a.h(0,a,s)
return s},
$S:13}
A.aG.prototype={
js(a){a.a.aP(0,new A.iz(this))
a.b.a.aP(0,new A.iA(this))},
l(a,b){var s=this.a.l(0,b)
return s},
h(a,b,c){this.a.h(0,b,c)},
gc2(){var s=this.a.l(0,274)
return s==null?null:s.i(0)},
sc2(a){this.a.cb(0,274)}}
A.iz.prototype={
$2(a,b){var s
A.w(a)
s=t.r.a(b).I()
this.a.a.h(0,a,s)
return s},
$S:24}
A.iA.prototype={
$2(a,b){var s
A.b4(a)
s=A.mu(t.P.a(b))
this.a.b.a.h(0,a,s)
return s},
$S:13}
A.ag.prototype={
ad(){return"IfdValueType."+this.b}}
A.a4.prototype={
a5(a,b){A.w(b)
return 0},
i(a){return this.a5(0,0)},
bf(){return new Uint8Array(0)},
B(a){return""},
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.a4&&s.gaA()===b.gaA()&&s.gu(s)===b.gu(b)&&s.gH(s)===b.gH(b)},
gH(a){return 0},
bi(a){}}
A.bm.prototype={
I(){return new A.bm(new Uint8Array(A.z(this.a)))},
gaA(){return B.b0},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bm){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.a5(0,0)},
bi(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bf(){return this.a},
aL(a){a.aW(this.a)},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.c6.prototype={
I(){return new A.c6(this.a)},
gaA(){return B.k},
gu(a){return this.a.length+1},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c6){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.p.gH(s)===B.p.gH(r)}else s=!1
return s},
gH(a){return B.p.gH(this.a)},
bf(){return new Uint8Array(A.z(new A.aW(this.a)))},
aL(a){a.aW(new A.aW(this.a))
a.C(0)},
B(a){return this.a}}
A.cb.prototype={
h8(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.n()
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.cb(new Uint16Array(A.z(this.a)))},
gaA(){return B.j},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cb){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.a5(0,0)},
bi(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bf(){return J.ad(B.Z.gA(this.a))},
aL(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.aB(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.aZ.prototype={
h5(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.k()
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.aZ(new Uint32Array(A.z(this.a)))},
gaA(){return B.n},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.aZ){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.a5(0,0)},
bi(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bf(){return J.ad(B.o.gA(this.a))},
aL(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.aJ(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.c7.prototype={
I(){return new A.c7(A.lk(this.a,!0,t.k))},
gaA(){return B.r},
gu(a){return this.a.length},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].i(0)},
i(a){return this.a5(0,0)},
U(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.c7){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.n(s)===A.n(q)}else s=!1
return s},
gH(a){return A.n(this.a)},
aL(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a3)(s),++q){p=s[q]
a.aJ(p.a)
a.aJ(p.b)}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].B(0)}else s=A.C(s)
return s}}
A.bH.prototype={
I(){return new A.bH(new Int8Array(A.z(this.a)))},
gaA(){return B.b5},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bH){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.a5(0,0)},
bi(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bf(){return J.ad(B.aF.gA(this.a))},
aL(a){a.aW(J.a_(B.aF.gA(this.a),0,null))},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.ca.prototype={
h7(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.n()
o=$.an()
o.$flags&2&&A.b(o)
o[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.ca(new Int16Array(A.z(this.a)))},
gaA(){return B.b6},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.ca){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.a5(0,0)},
bi(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bf(){return J.ad(B.aE.gA(this.a))},
aL(a){var s,r,q,p=new Int16Array(1),o=J.mc(B.aE.gA(p),0,null),n=this.a,m=n.length
for(s=o.length,r=0;r<m;++r){q=n[r]
if(0>=1)return A.a(p,0)
p[0]=q
if(0>=s)return A.a(o,0)
a.aB(o[0])}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.c8.prototype={
h6(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.k()
o=$.M()
o.$flags&2&&A.b(o)
o[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.c8(new Int32Array(A.z(this.a)))},
gaA(){return B.b7},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c8){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.a5(0,0)},
bi(a){var s=this.a
s.$flags&2&&A.b(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bf(){return J.ad(B.Y.gA(this.a))},
aL(a){var s,r,q,p=this.a,o=p.length
for(s=0;s<o;++s){r=p[s]
q=$.ic()
q.$flags&2&&A.b(q)
q[0]=r
r=$.l0()
if(0>=r.length)return A.a(r,0)
a.aJ(r[0])}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.C(s)
return s}}
A.c9.prototype={
I(){return new A.c9(A.lk(this.a,!0,t.k))},
gaA(){return B.b1},
gu(a){return this.a.length},
U(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.c9){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.n(s)===A.n(q)}else s=!1
return s},
gH(a){return A.n(this.a)},
a5(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].i(0)},
i(a){return this.a5(0,0)},
aL(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a3)(s),++q){p=s[q]
o=$.ic()
o.$flags&2&&A.b(o)
o[0]=p.a
n=$.l0()
if(0>=n.length)return A.a(n,0)
a.aJ(n[0])
o[0]=p.b
a.aJ(n[0])}},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].B(0)}else s=A.C(s)
return s}}
A.d2.prototype={
h9(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.k()
o=$.M()
o.$flags&2&&A.b(o)
o[0]=p
p=$.bW()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
I(){return new A.d2(new Float32Array(A.z(this.a)))},
gaA(){return B.b2},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.d2){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
bf(){return J.ad(B.aj.gA(this.a))},
aL(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.kk(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.C(s[0])}else s=A.C(s)
return s}}
A.d0.prototype={
h4(a,b){var s,r
for(s=this.a,r=0;r<b;++r)B.ak.h(s,r,a.de())},
I(){return new A.d0(new Float64Array(A.z(this.a)))},
gaA(){return B.b3},
gu(a){return this.a.length},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.d0){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
bf(){return J.ad(B.ak.gA(this.a))},
aL(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.kl(r[s])},
B(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.C(s[0])}else s=A.C(s)
return s}}
A.d3.prototype={
I(){return new A.d3(new Uint8Array(A.z(this.a)))},
gaA(){return B.F},
gu(a){return this.a.length},
bf(){return this.a},
U(a,b){var s,r
if(b==null)return!1
if(b instanceof A.d3){s=this.a
r=b.a
s=s.length===r.length&&A.n(s)===A.n(r)}else s=!1
return s},
gH(a){return A.n(this.a)},
aL(a){a.aW(this.a)},
B(a){return"<data>"}}
A.d1.prototype={
I(){return A.lb(this.a)},
gaA(){return B.b4},
gu(a){return 1},
U(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.d1)s=this.a===b.a
return s},
gH(a){return this.a},
a5(a,b){if(A.w(b)!==0)throw A.h(A.px("Ifd tags must have exactly one entry (the offset)"))
return this.a},
i(a){return this.a5(0,0)},
bi(a){this.a=a},
bf(){var s=this.a
return new Uint8Array(A.z(A.j([B.a.j(s,24),B.a.j(s,16),B.a.j(s,8),s],t.t)))},
aL(a){a.aJ(this.a)},
B(a){return"Ifd@"+this.a}}
A.af.prototype={
ad(){return"BmpCompression."+this.b}}
A.ij.prototype={}
A.bk.prototype={
e3(a,b){var s,r,q,p,o,n,m,l=this,k=l.d,j=k<=40
if(j){s=l.r
s=s===B.ap||s===B.aq}else s=!0
if(s){s=l.as=a.k()
r=A.kx(s)
l.CW=r
q=B.a.a2(s,r)
s=q>0
l.cx=s?255/q:0
r=l.at=a.k()
p=A.kx(r)
l.cy=p
o=B.a.a2(r,p)
l.db=s?255/o:0
r=l.ax=a.k()
p=A.kx(r)
l.dx=p
n=B.a.a2(r,p)
l.dy=s?255/n:0
if(!j||l.r===B.aq){j=l.ay=a.k()
s=A.kx(j)
l.fr=s
m=B.a.a2(j,s)
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
if(l.f<=8)l.jY(a)},
gcs(){var s=this.d
if(s!==40)if(s===124){s=this.ay
s===$&&A.d()
s=s===0}else s=!1
else s=!0
return s},
gL(){return Math.abs(this.c)},
jY(a){var s,r,q,p,o,n=this,m=n.z
if(m===0)m=B.a.S(1,n.f)
n.ch=new A.b0(new Uint8Array(m*3),m,3)
for(s=0;s<m;++s){r=J.c(a.a,a.d++)
q=J.c(a.a,a.d++)
p=J.c(a.a,a.d++)
o=J.c(a.a,a.d++)
n.ch.cK(s,p,q,r,o)}},
jy(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.dX.a(b)
if(j.ch!=null){s=j.f
if(s===1){r=a.F()
for(q=7;q>=0;--q)b.$4(B.a.br(r,q)&1,0,0,0)
return}else if(s===2){r=a.F()
for(q=6;q>=0;q-=2)b.$4(B.a.br(r,q)&2,0,0,0)}else if(s===4){r=a.F()
b.$4(B.a.j(r,4)&15,0,0,0)
b.$4(r&15,0,0,0)
return}else if(s===8){b.$4(a.F(),0,0,0)
return}}s=j.r
if(s===B.ap&&j.f===32){p=a.k()
s=j.as
s===$&&A.d()
o=j.CW
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.cx
s===$&&A.d()
n=B.b.i(o*s)
s=j.at
s===$&&A.d()
o=j.cy
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.db
s===$&&A.d()
m=B.b.i(o*s)
s=j.ax
s===$&&A.d()
o=j.dx
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.dy
s===$&&A.d()
l=B.b.i(o*s)
if(j.gcs())k=255
else{s=j.ay
s===$&&A.d()
o=j.fr
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.fx
s===$&&A.d()
k=B.b.i(o*s)}return b.$4(n,m,l,k)}else{o=j.f
if(o===32&&s===B.aP){l=a.F()
m=a.F()
n=a.F()
k=a.F()
return b.$4(n,m,l,j.gcs()?255:k)}else if(o===24){l=a.F()
m=a.F()
return b.$4(a.F(),m,l,255)}else if(o===16){p=a.n()
s=j.as
s===$&&A.d()
o=j.CW
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.cx
s===$&&A.d()
n=B.b.i(o*s)
s=j.at
s===$&&A.d()
o=j.cy
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.db
s===$&&A.d()
m=B.b.i(o*s)
s=j.ax
s===$&&A.d()
o=j.dx
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.dy
s===$&&A.d()
l=B.b.i(o*s)
if(j.gcs())k=255
else{s=j.ay
s===$&&A.d()
o=j.fr
o===$&&A.d()
o=B.a.a2((p&s)>>>0,o)
s=j.fx
s===$&&A.d()
k=B.b.i(o*s)}return b.$4(n,m,l,k)}else throw A.h(A.o("Unsupported bitsPerPixel ("+o+") or compression ("+s.B(0)+")."))}},
$iJ:1,
gR(){return this.b}}
A.ft.prototype={
bk(a){var s,r
if(!A.mh(A.t(a,!1,null,0))||a.length<18)return!1
s=A.t(a,!1,null,0)
s.d+=14
r=s.k()
return r>=12&&r<=124},
aw(a){var s
if(!this.bk(a))return null
s=A.t(a,!1,null,0)
this.a=s
return this.b=A.os(s,null)},
aj(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.b
if(a0==null)return new A.bn(a,a,a,a,0,B.i,0,0)
s=b.a
s===$&&A.d()
r=a0.a.b
r===$&&A.d()
s.d=r
q=a0.f
r=a0.b
p=B.a.V(r*q+31,32)*4
s=b.c
if(s)o=4
else if(q===1||q===4||q===8)o=1
else{n=q===32?4:3
o=n}if(s)m=B.e
else if(q===1)m=B.w
else{if(q===2)n=B.B
else if(q===4)n=B.C
else n=B.e
m=n}l=s?a:a0.ch
k=A.N(a,a,m,0,B.i,a0.gL(),a,0,o,l,B.e,r,!1)
for(j=k.gL()-1,s=a0.c,r=1/s<0,n=s<0,s=s===0;j>=0;--j){i={}
if(!(s?r:n))h=j
else{g=k.a
g=g==null?a:g.b
h=(g==null?0:g)-1-j}g=b.a
f=g.am(p)
g.d=g.d+(f.c-f.d)
g=k.a
e=g==null
d=e?a:g.a
if(d==null)d=0
i.a=0
c=e?a:g.O(0,h,a)
if(c==null)c=new A.H()
while(i.a<d)a0.jy(f,new A.ii(i,b,d,a0,c))}return k},
aV(a,b){if(this.aw(a)==null)return null
return this.aj(0)}}
A.ii.prototype={
$4(a,b,c,d){var s,r,q=this,p=q.a
if(p.a<q.c){s=q.b.c&&q.d.ch!=null
r=q.e
if(s){s=q.d
r.a8(s.ch.aT(a),s.ch.aS(a),s.ch.aR(a),s.ch.aY(a))}else r.a8(a,b,c,d)
r.D();++p.a}},
$S:39}
A.io.prototype={}
A.J.prototype={}
A.im.prototype={}
A.ip.prototype={}
A.fF.prototype={}
A.e8.prototype={
cv(){return this.w},
bg(a,b,c,d,e){throw A.h(A.o("B44 compression not yet supported."))},
cc(a,b,c){return this.bg(a,b,c,null,null)},
B(a){return A.C(this.r)+" "+this.x}}
A.cX.prototype={
ad(){return"ExrChannelType."+this.b}}
A.c2.prototype={
ad(){return"ExrChannelName."+this.b}}
A.fG.prototype={
h_(a){var s=this,r=a.cz()
s.a=r
if(r.length===0)return
r=a.k()
if(!(r<3))return A.a(B.br,r)
s.c=B.br[r]
a.F()
a.d+=3
s.f=a.k()
s.r=a.k()
r=s.a
if(r==="R"){s.w=!0
s.b=B.cH}else if(r==="G"){s.w=!0
s.b=B.cI}else if(r==="B"){s.w=!0
s.b=B.cJ}else if(r==="A"){s.w=!0
s.b=B.cK}else{s.w=!1
s.b=B.cL}switch(s.c.a){case 0:s.d=4
break
case 1:s.d=2
break
case 2:s.d=4
break}}}
A.aY.prototype={
ad(){return"ExrCompressorType."+this.b}}
A.bl.prototype={
bg(a,b,c,d,e){throw A.h(A.o("Unsupported compression type"))},
cc(a,b,c){return this.bg(a,b,c,null,null)}}
A.fV.prototype={}
A.fH.prototype={
sfu(a){this.c=t.T.a(a)}}
A.dT.prototype={
e4(a){var s,r,q,p,o=this,n=A.t(a,!1,null,0)
if(n.k()!==20000630)throw A.h(A.o("File is not an OpenEXR image file."))
s=o.d=n.F()
if(s!==2)throw A.h(A.o("Cannot read version "+s+" image files."))
s=o.e=n.be()
if((s&4294967289)>>>0!==0)throw A.h(A.o("The file format version number's flag field contains unrecognized flags."))
if((s&16)===0){r=o.c
q=A.mE(r.length,(s&2)!==0,n)
if(q.w>0)B.c.N(r,q)}else for(s=o.c;;){q=A.mE(s.length,(o.e&2)!==0,n)
if(q.w<=0)break
B.c.N(s,q)}s=o.c
r=s.length
if(r===0)throw A.h(A.o("Error reading image header"))
for(p=0;p<s.length;s.length===r||(0,A.a3)(s),++p)s[p].jX(n)
o.j1(n)},
j1(a){var s,r,q,p,o=this
for(s=o.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a3)(s),++q){p=s[q]
o.a=Math.max(o.a,p.w)
o.b=Math.max(o.b,p.x)
if(p.db)o.ja(p,a)
else o.j9(p,a)}},
ja(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=this.e
b5===$&&A.d()
s=(b5&16)!==0
b5=b6.b
b5.toString
r=b6.CW
q=b6.ay
p=A.p(b7,b4,0)
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
if(s)if(p.k()!==n)throw A.h(A.o("Invalid Image Data"))
e=p.k()
d=p.k()
p.k()
p.k()
c=p.am(p.k())
p.d=p.d+(c.c-c.d)
g=b6.dy
g.toString
b=d*g
a=b6.dx
a.toString
g=r.bg(c,e*a,b,a,g)
a=g.length
a=Math.min(a,a)
a0=new A.ai(g,0,a,0,!1)
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
switch(g.a){case 1:g=a0.n()
b0=$.Q
b0=b0!=null?b0:A.T()
if(!(g<b0.length))return A.a(b0,g)
b1=b0[g]
break
case 2:b1=a0.n()
break
case 0:b1=a0.k()
break
default:b1=b4}g=a7.d
g===$&&A.d()
a4+=g
g=a7.w
g===$&&A.d()
if(g){g=b5.a
b2=g==null?b4:g.O(a8,b,b4)
if(b2==null)b2=new A.H()
g=a7.b
g===$&&A.d()
b2.h(0,g.a,b1)}else{g=a7.a
g===$&&A.d()
b0=b5.b
b3=b0!=null?b0.l(0,g):b4
if(b3!=null)b3.a4(a8,b,b1,0,0)}}}++a5;++b}++f;++h}++i}++j;++l}++m}},
j9(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=this.e
a7===$&&A.d()
s=(a7&16)!==0
a7=a8.b
a7.toString
r=a8.CW
q=a8.ay
if(0>=q.length)return A.a(q,0)
p=q[0]
o=a8.cx
n=A.p(a9,a6,0)
for(q=p.length,m=a8.c,l=r!=null,k=0,j=0;j<q;++j){n.d=p[j]
if(s)if(n.k()!==3.141592653589793)throw A.h(A.o("Invalid Image Data"))
i=n.k()
h=$.M()
h.$flags&2&&A.b(h)
h[0]=i
i=$.a6()
if(0>=i.length)return A.a(i,0)
h[0]=n.k()
g=n.am(i[0])
n.d=n.d+(g.c-g.d)
if(l){i=r.cc(g,0,k)
h=i.length
f=new A.ai(i,0,Math.min(h,h),0,!1)}else f=g
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
switch(i.a){case 1:i=f.n()
h=$.Q
h=h!=null?h:A.T()
if(!(i<h.length))return A.a(h,i)
a3=h[i]
break
case 2:a3=f.n()
break
case 0:a3=f.k()
break
default:a3=a6}i=a0.d
i===$&&A.d()
b+=i
i=a0.w
i===$&&A.d()
if(i){i=a7.a
a4=i==null?a6:i.O(a2,k,a6)
if(a4==null)a4=new A.H()
i=a0.b
i===$&&A.d()
a4.h(0,i.a,a3)}else{i=a0.a
i===$&&A.d()
h=a7.b
a5=h!=null?h.l(0,i):a6
if(a5!=null)a5.a4(a2,k,a3,0,0)}}}++c;++k}}},
$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.dU.prototype={
h0(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=A.I(t.N,t.w)
for(s=a3.e,r=t.t,q=t.L,p=a3.c,o=B.E;;){n=a8.cz()
if(n.length===0)break
a8.cz()
m=a8.am(a8.k())
a8.d=a8.d+(m.c-m.d)
s.h(0,n,new A.fF())
switch(n){case"channels":for(;;){l=new A.fG()
l.h_(m)
k=l.a
k===$&&A.d()
if(k.length===0)break
j=l.w
j===$&&A.d()
if(j){++a3.d
k=l.c
k===$&&A.d()
if(k===B.at)o=B.E
else o=k===B.au?B.J:B.K}else{j=l.c
j===$&&A.d()
if(j===B.at){j=a3.w
i=a3.x
a5.h(0,k,new A.d4(new Uint16Array(j*i),j,i,1))}else if(j===B.au){j=a3.w
i=a3.x
a5.h(0,k,new A.d5(new Float32Array(j*i),j,i,1))}else if(j===B.aX){j=a3.w
i=a3.x
a5.h(0,k,new A.d9(new Uint32Array(j*i),j,i,1))}}B.c.N(p,l)}break
case"chromaticities":k=new Float32Array(8)
a3.at=k
j=m.k()
i=$.M()
i.$flags&2&&A.b(i)
i[0]=j
j=$.bW()
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
if(!(k>=0&&k<8))return A.a(B.bD,k)
a3.ax=B.bD[k]
break
case"dataWindow":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.a6()
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
k=$.a6()
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
k=$.bW()
if(0>=k.length)return A.a(k,0)
break
case"screenWindowCenter":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.bW()
if(0>=k.length)return A.a(k,0)
j[0]=m.k()
break
case"screenWindowWidth":k=m.k()
j=$.M()
j.$flags&2&&A.b(j)
j[0]=k
k=$.bW()
if(0>=k.length)return A.a(k,0)
break
case"tiles":a3.dx=m.k()
a3.dy=m.k()
f=J.c(m.a,m.d++)
a3.fr=f&15
a3.fx=B.a.j(f,4)&15
break
case"type":e=m.cz()
if(e!=="deepscanline")if(e!=="deeptile")throw A.h(A.o("EXR Invalid type: "+e))
break
default:break}}s=a3.w
a3.b=A.N(a4,a4,o,0,B.i,a3.x,a4,0,a3.d,a4,B.e,s,!1)
for(s=new A.R(a5,a5.r,a5.e,a5.$ti.p("R<1>"));s.D();){r=s.d
q=a3.b
q.toString
k=a5.l(0,r)
k.toString
q.fP(r,k)}if(a3.db){s={}
r=a3.r
r===$&&A.d()
a3.id=a3.hv(r[0],r[2],r[1],r[3])
r=a3.r
a3.k1=a3.hw(r[0],r[2],r[1],r[3])
if(a3.fr!==2)a3.k1=1
r=a3.id
r.toString
q=a3.r
a3.fy=a3.ee(r,q[0],q[2],a3.dx,a3.fx)
q=a3.k1
q.toString
r=a3.r
a3.go=a3.ee(q,r[1],r[3],a3.dy,a3.fx)
r=a3.hu()
a3.k2=r
q=a3.dx
q.toString
q=r*q
a3.k3=q
a3.CW=A.mo(a3.ax,a3,q,a3.dy)
s.a=s.b=0
q=a3.id
q.toString
r=a3.k1
r.toString
a3.ay=A.mP(q*r,new A.is(s,a3),t.bv)}else{s=a3.x
r=a3.ch=new Uint32Array(s+1)
for(q=p.length,k=a3.r,j=a3.w,d=0;d<q;++d){c=p[d]
i=c.d
i===$&&A.d()
h=c.f
h===$&&A.d()
b=B.a.az(i*j,h)
for(i=c.r,a=0;a<s;++a){k===$&&A.d()
h=k[1]
i===$&&A.d()
if(B.a.a_(a+h,i)===0)r[a]=r[a]+b}}for(a0=0,a=0;a<s;++a)a0=Math.max(a0,r[a])
s=A.mo(a3.ax,a3,a0,a4)
a3.CW=s
s=a3.cx=s.cv()
r=a3.ch
q=r.length
p=new Uint32Array(q)
a3.cy=p
for(--q,a1=0,a2=0;a2<=q;++a2){if(B.a.a_(a2,s)===0)a1=0
p[a2]=a1
a1+=r[a2]}s=B.a.az(a3.x+s,s)
a3.ay=A.j([new Uint32Array(s-1)],t.hh)}},
hv(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.w(r)
s=(q===0?o.cU(r):o.cN(r))+1
break
case 2:p=b-a+1
s=(o.fx===0?o.cU(p):o.cN(p))+1
break
default:throw A.h(A.o("Unknown LevelMode format."))}return s},
hw(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.w(r)
s=(q===0?o.cU(r):o.cN(r))+1
break
case 2:p=d-c+1
s=(o.fx===0?o.cU(p):o.cN(p))+1
break
default:throw A.h(A.o("Unknown LevelMode format."))}return s},
cU(a){var s
for(s=0;a>1;){++s
a=B.a.j(a,1)}return s},
cN(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.j(a,1)}return s+r},
hu(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p].d
o===$&&A.d()
q+=o}return q},
ee(a,b,c,d,e){var s,r,q,p,o,n,m=J.am(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.S(1,q)
o=B.a.az(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.az(n+d-1,d)}return m}}
A.is.prototype={
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
$S:27}
A.fW.prototype={
jX(a){var s,r,q,p,o,n=this
if(n.db)for(s=0;s<n.ay.length;++s){r=0
for(;;){q=n.ay
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
p=a.dT()
q.$flags&2&&A.b(q)
q[r]=p;++r}}else{q=n.ay
if(0>=q.length)return A.a(q,0)
o=q[0].length
for(s=0;s<o;++s){q=n.ay
if(0>=q.length)return A.a(q,0)
q=q[0]
p=a.dT()
q.$flags&2&&A.b(q)
if(!(s<q.length))return A.a(q,s)
q[s]=p}}}}
A.fX.prototype={
hc(a,b,c){var s,r,q,p=this,o=a.c.length,n=J.am(o,t.eO)
for(s=0;s<o;++s)n[s]=new A.fa()
p.y=t.gR.a(n)
r=p.w
r.toString
q=B.a.V(r*p.x,2)
p.z=new Uint16Array(q)},
cv(){return this.x},
bg(a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
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
i=B.a.az(a7,q)
h=B.a.az(s,q)
q=i*q<a7?0:1
q=h-i+q
j.c=q
p=k.r
p===$&&A.d()
i=B.a.az(a8,p)
h=B.a.az(r,p)
g=i*p<a8?0:1
g=h-i+g
j.d=g
j.e=p
p=k.d
p===$&&A.d()
p=p/2|0
j.f=p
m+=q*g*p}f=a6.n()
e=a6.n()
if(e>=8192)throw A.h(A.o("Error in header for PIZ-compressed data (invalid bitmap size)."))
d=new Uint8Array(8192)
if(f<=e){c=a6.al(e-f+1)
b=c.c-c.d
for(a=f,l=0;l<b;++l,a=a0){a0=a+1
q=J.c(c.a,c.d+l)
if(!(a<8192))return A.a(d,a)
d[a]=q}}a1=new Uint16Array(65536)
a2=a5.je(d,a1)
A.oJ(a6,a6.k(),a5.z,m)
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
A.oN(p,g+a,a3,q,a4,a3*q,a2);++a}}q=a5.z
q.toString
a5.hn(a1,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.eu(!1,q*a5.x+73728)}q.a=0
for(;a8<=r;++a8)for(l=0;l<n;++l){q=a5.y
q===$&&A.d()
if(!(l<q.length))return A.a(q,l)
j=q[l]
q=j.e
q===$&&A.d()
if(B.a.a_(a8,q)!==0)continue
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
q.aB(p[g])}}q=a5.r
return J.a_(B.f.gA(q.c),0,q.a)},
cc(a,b,c){return this.bg(a,b,c,null,null)},
hn(a,b,c){var s,r,q,p=t.L
p.a(a)
p.a(b)
for(p=b.length,s=b.$flags|0,r=0;r<c;++r){if(!(r<p))return A.a(b,r)
q=b[r]
if(!(q>=0&&q<65536))return A.a(a,q)
q=a[q]
s&2&&A.b(b)
b[r]=q}},
je(a,b){var s,r,q,p,o,n
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
A.fa.prototype={}
A.fY.prototype={
cv(){return this.x},
bg(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.D.bR(a4.a3()),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.eu(!1,a1.x*a3)}a3.a=0
s=A.j([0,0,0,0],t.t)
r=new Uint32Array(1)
q=J.a_(B.o.gA(r),0,null)
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
if(B.a.a_(a6,g)!==0)continue
g=h.f
g===$&&A.d()
f=B.a.az(a5,g)
e=B.a.az(p,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(r,0)
r[0]=0
g=h.c
g===$&&A.d()
switch(g.a){case 0:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.C(q[a0])}}break
case 1:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
j=s[1]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
r[0]=r[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.C(q[a0])}}break
case 2:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.C(q[a0])}}break}}a3=a1.y
return J.a_(B.f.gA(a3.c),0,a3.a)},
cc(a,b,c){return this.bg(a,b,c,null,null)}}
A.fZ.prototype={
cv(){return 1},
bg(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.eu(!1,(b-a0.d)*2)
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
p=$.ao()
p.$flags&2&&A.b(p)
p[0]=q
q=$.aA()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m)a.C(J.c(a0.a,a0.d++))}else for(n=o;m=n-1,n>=0;n=m)a.C(J.c(a0.a,a0.d++))}l=J.a_(B.f.gA(a.c),0,a.a)
k=l.length
for(b=l.$flags|0,j=1;j<k;++j){q=l[j-1]
p=l[j]
b&2&&A.b(l)
l[j]=q+p-128}b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.V(k+1,2)
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
cc(a,b,c){return this.bg(a,b,c,null,null)},
B(a){return A.C(this.w)}}
A.e9.prototype={
cv(){return this.x},
bg(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.D.bR(a.a3())
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
p=B.a.V(o+1,2)
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
cc(a,b,c){return this.bg(a,b,c,null,null)},
B(a){return A.C(this.w)}}
A.ir.prototype={
aw(a){var s=new A.dT(A.j([],t.U))
s.e4(a)
return this.a=s},
aj(a){var s=this.a
if(s==null)return null
s=s.c
if(!(a<s.length))return A.a(s,a)
return s[a].b},
aV(a,b){this.a=A.oL(a)
return this.aj(0)}}
A.dX.prototype={
jI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d===0&&e.c!=null){s=e.c
s.toString
return s}for(s=e.b,r=e.d,q=-1,p=-1,o=0;o<s;++o){n=r.aT(o)
m=r.aS(o)
l=r.aR(o)
k=r.aY(o)
if(n===a&&m===b&&l===c&&k===d)return o
j=a-n
i=b-m
h=c-l
g=d-k
f=j*j+i*i+h*h+g*g
if(p===-1){p=o
q=f}else if(f<q){p=o
q=f}}return p},
dW(){var s,r,q,p,o,n,m,l=this
if(l.c==null)return l.d
s=l.d
r=s.a
q=new A.b0(new Uint8Array(r*4),r,4)
for(p=0;p<r;++p){o=s.aT(p)
n=s.aS(p)
m=s.aR(p)
q.cK(p,o,n,m,p===l.c?0:255)}return q}}
A.dY.prototype={
h1(a){var s,r,q,p,o,n,m=this
m.a=a.n()
m.b=a.n()
m.c=a.n()
m.d=a.n()
s=a.F()
m.e=(s&64)!==0
if((s&128)!==0){m.f=A.mr(B.a.S(1,(s&7)+1))
for(r=0;q=m.f,r<q.b;++r){p=J.c(a.a,a.d++)
o=J.c(a.a,a.d++)
n=J.c(a.a,a.d++)
q.d.b8(r,p,o,n)}}m.y=a.d-a.b}}
A.h_.prototype={}
A.dZ.prototype={$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.iv.prototype={
aw(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.f=A.t(a,!1,null,0)
i.a=new A.dZ(A.j([],t.b))
if(!i.eA())return null
try{while(p=i.f,o=p.d,o<p.c){n=p.a
p.d=o+1
s=J.c(n,o)
switch(s){case 44:r=i.eV()
if(r==null){p=i.a
return p}p=r
p.r=i.e
p.w=i.c
if(i.b!==0){if(r.f==null&&i.a.e!=null){p=i.a.e
o=p.a
n=p.b
m=p.c
p=p.d
r.f=new A.dX(o,n,m,new A.b0(new Uint8Array(A.z(p.c)),p.a,p.b))}if(r.f!=null)r.f.c=i.d}B.c.N(i.a.r,r)
break
case 33:p=i.f
q=J.c(p.a,p.d++)
if(J.aB(q,255)){p=i.f
if(p.af(J.c(p.a,p.d++))==="NETSCAPE2.0"){l=J.c(p.a,p.d++)
k=J.c(p.a,p.d++)
if(l===3&&k===1)i.r=p.n()}else i.d4()}else if(J.aB(q,249)){p=i.f
p.toString
i.iX(p)}else i.d4()
break
case 59:p=i.a
return p
default:break}}}catch(j){}return i.a},
iX(a){var s,r,q,p=this
a.F()
s=a.F()
p.e=a.n()
p.d=a.F()
a.F()
p.c=B.a.j(s,2)&7
p.b=s&1
r=a.cL(1,0)
if(J.c(r.a,r.d)===44){++a.d
q=p.eV()
if(q==null)return
q.r=p.e
q.w=p.c
r=p.b!==0
q.x=r?p.d:-1
if(r){r=q.f
if(r==null&&p.a.e!=null){r=p.a.e
r.toString
r=q.f=A.oS(r)}if(r!=null)r.c=p.d}B.c.N(p.a.r,q)}},
aj(a){var s,r,q,p=this,o=p.f
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r)return null
q=s[a]
s=q.y
s===$&&A.d()
o.d=s
return p.hU(q)},
aV(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null
if(a5.aw(a7)==null)return a6
s=a5.a.r.length
if(s===1)return a5.aj(0)
for(s=t.p,r=a6,q=r,p=0;o=a5.a.r,p<o.length;++p){a8=o[p]
n=a5.aj(p)
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
if(o){q.b2(n)
r=n
continue}g=a8.f
if(!(g!=null)){o=a5.a.e
o.toString
g=o}o=j?a6:k.a
if(o==null)o=0
m=j?a6:k.b
if(m==null)m=0
f=A.N(a6,a6,B.e,0,B.i,m,a6,0,1,g.dW(),B.e,o,!1)
o=a8.w
if(o===2){o=f.a
e=o==null?a6:J.ad(o.gA(o))
if(e==null){o=f.a
o=o==null?a6:o.gA(o)
if(o==null)o=B.f.gA(new Uint8Array(0))
e=J.ad(o)}o=a8.x
m=e.length-1
if(o!==-1)B.f.aF(e,0,m,o)
else{o=a5.a.c.a
l=o.length
if(l!==0){if(0>=l)return A.a(o,0)
o=o[0]}else o=0
B.f.aF(e,0,m,o)}}else if(o!==3)if(a8.f!=null){o=r.a
d=o==null?a6:o.gT()
c=A.I(s,s)
for(o=d.a,b=0;b<o;++b)c.h(0,b,g.jI(d.aT(b),d.aS(b),d.aR(b),d.aY(b)))
o=f.a
a=o==null?a6:J.ad(o.gA(o))
if(a==null){o=f.a
o=o==null?a6:o.gA(o)
if(o==null)o=B.f.gA(new Uint8Array(0))
a=J.ad(o)}o=r.a
a0=o==null?a6:J.ad(o.gA(o))
if(a0==null){o=r.a
o=o==null?a6:o.gA(o)
if(o==null)o=B.f.gA(new Uint8Array(0))
a0=J.ad(o)}for(a1=a.length,o=a0.length,m=a.$flags|0,a2=0;a2<a1;++a2){if(!(a2<o))return A.a(a0,a2)
a3=c.l(0,a0[a2])
if(a3!=null&&a3!==-1){m&2&&A.b(a)
a[a2]=a3}}}f.y=n.y
for(o=n.a,o=o.gG(o);o.D();){a4=o.gM()
if(a4.gv()!==0){m=a4.gaQ()
l=a8.a
l===$&&A.d()
k=a4.gaM()
j=a8.b
j===$&&A.d()
f.bK(m+l,k+j,a4)}}q.b2(f)
r=f}return q},
eV(){var s,r=this.f
if(r.d>=r.c)return null
s=new A.h_()
s.h1(r);++this.f.d
this.d4()
return s},
hU(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(i.w==null){i.w=new Uint8Array(256)
i.x=new Uint8Array(4095)
i.y=new Uint8Array(4096)
i.z=new Uint32Array(4096)}s=i.Q=i.f.F()
r=B.a.Y(1,s)
i.dy=r;++r
i.dx=r
i.db=r+1;++s
i.cy=s
i.cx=B.a.Y(1,s)
i.ay=0
i.CW=4098
i.at=i.ax=0
s=i.w
s.toString
s.$flags&2&&A.b(s)
s[0]=0
s=i.z
s.toString
B.o.aF(s,0,4096,4098)
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
n=A.N(h,h,B.e,0,B.i,r,h,0,1,o.dW(),B.e,s,!1)
m=new Uint8Array(s)
s=a.e
s===$&&A.d()
if(s){s=a.b
s===$&&A.d()
for(r=s+r,l=0,k=0;l<4;++l)for(j=s+B.dc[l];j<r;j+=B.et[l],++k){if(!i.eB(m))return n
i.f1(n,j,o,m)}}else for(j=0;j<r;++j){if(!i.eB(m))return n
i.f1(n,j,o,m)}return n},
f1(a,b,c,d){var s,r,q,p=d.length
for(s=0;s<p;++s){r=d[s]
q=a.a
if(q!=null)q.a4(s,b,r,0,0)}},
eA(){var s,r,q,p,o,n=this,m=n.f.af(6)
if(m!=="GIF87a"&&m!=="GIF89a")return!1
s=n.a
s.toString
s.a=n.f.n()
s=n.a
s.toString
s.b=n.f.n()
r=n.f.F()
s=n.a
s.toString
s.c=new A.bF(new Uint8Array(A.z(A.j([n.f.F()],t.t))));++n.f.d
if((r&128)!==0){s=n.a
s.toString
s.e=A.mr(B.a.S(1,(r&7)+1))
for(q=0;q<n.a.e.b;++q){s=n.f
p=J.c(s.a,s.d++)
s=n.f
o=J.c(s.a,s.d++)
s=n.f
r=J.c(s.a,s.d++)
n.a.e.d.b8(q,p,o,r)}}n.a.toString
return!0},
eB(a){var s=this,r=s.as
r.toString
s.as=r-a.length
if(!s.i4(a))return!1
if(s.as===0)s.d4()
return!0},
d4(){var s,r,q,p=this.f
if(p.d>=p.c)return!0
s=p.F()
for(;;){if(s!==0){p=this.f
p=p.d<p.c}else p=!1
if(!p)break
p=this.f
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
s=J.c(q,r)}return!0},
i4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
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
r=p}}for(f=a.$flags|0;r<s;){n=g.ch=g.i3()
if(n==null)return!1
q=g.dx
if(n===q)return!1
o=g.dy
if(n===o){for(o=g.z,m=0;m<=4095;++m){o.toString
o.$flags&2&&A.b(o)
o[m]=4098}g.db=q+1
q=g.Q+1
g.cy=q
g.cx=B.a.Y(1,q)
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
o=g.dA(q,n,o)
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
q=g.dA(o,q,i)
j.$flags&2&&A.b(j)
j[l]=q}else{j===$&&A.d()
k.toString
q=g.dA(o,k,i)
j.$flags&2&&A.b(j)
j[l]=q}}q=g.ch
q.toString
g.CW=q}}return!0},
i3(){var s,r,q,p,o=this
if(o.cy>12)return null
while(s=o.ax,r=o.cy,s<r){s=o.hr()
s.toString
r=o.at
q=o.ax
o.at=(r|B.a.Y(s,q))>>>0
o.ax=q+8}q=o.at
if(!(r>=0&&r<13))return A.a(B.bk,r)
p=B.bk[r]
o.at=B.a.a1(q,r)
o.ax=s-r
s=o.db
if(s<4097){++s
o.db=s
s=s>o.cx&&r<12}else s=!1
if(s){o.cx=o.cx<<1>>>0
o.cy=r+1}return q&p},
dA(a,b,c){var s,r,q=0
for(;;){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
hr(){var s,r,q=this,p=q.w,o=p[0],n=p.$flags|0
if(o===0){o=q.f.F()
n&2&&A.b(p)
p[0]=o
p=q.w
o=p[0]
if(o===0)return null
B.f.by(p,1,1+o,q.f.al(o).a3())
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
A.d_.prototype={
ad(){return"IcoType."+this.b}}
A.fO.prototype={$iJ:1,
gR(){return 0},
gL(){return 0}}
A.fP.prototype={}
A.fN.prototype={
gL(){return B.a.V(A.bk.prototype.gL.call(this),2)},
gcs(){return!(this.d===40&&this.f===32)&&A.bk.prototype.gcs.call(this)}}
A.ix.prototype={
aw(a){var s=A.t(a,!1,null,0)
this.a=s
return this.b=A.mt(s)},
aV(a,b){var s,r,q,p=this
if(p.aw(a)==null)return null
s=p.b.e.length
if(s===1)return p.aj(0)
for(r=null,q=0;q<p.b.e.length;++q){b=p.aj(q)
if(b==null)continue
if(r==null){b.w=B.i
r=b}else r.b2(b)}return r},
aj(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=this.a
if(a9!=null){s=this.b
s=s==null||b0>=s.d}else s=!0
if(s)return a8
s=this.b.e
if(!(b0<s.length))return A.a(s,b0)
r=s[b0]
s=a9.a
a9=a9.b+r.e
q=r.d
p=J.l3(s,a9,a9+q)
o=new A.ho(A.mF())
t.D.a(p)
if(o.bk(p))return o.bQ(p)
n=A.eu(!1,14)
n.aB(19778)
n.aJ(q)
n.aJ(0)
n.aJ(0)
a9=A.t(p,!1,a8,0)
s=A.mg(A.t(J.a_(B.f.gA(n.c),0,n.a),!1,a8,0))
q=a9.d
m=a9.k()
l=a9.k()
k=$.M()
k.$flags&2&&A.b(k)
k[0]=l
l=$.a6()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=a9.k()
l=l[0]
i=a9.n()
h=a9.n()
g=a9.k()
if(g>=14)A.ac(A.o("Unsupported BMP compression type: "+g))
if(!(g<14))return A.a(B.ah,g)
g=B.ah[g]
a9.k()
k[0]=a9.k()
k[0]=a9.k()
k=a9.k()
a9.k()
f=new A.fN(s,j,l,m,i,h,g,k,q)
f.e3(a9,s)
if(m!==40&&i!==1)return a8
e=k===0&&h<=8?40+4*B.a.S(1,h):40+4*k
s.b=e
n.a-=4
n.aJ(e)
d=A.t(p,!1,a8,0)
c=new A.io(!0)
c.a=d
c.b=f
b=c.aj(0)
if(h>=32)return b
a=32-B.a.a_(j,32)
a0=B.a.V(a===32?j:j+a,8)
for(a9=l<0,s=l===0,l=1/l<0,a1=0;a1<B.a.V(A.bk.prototype.gL.call(f),2);++a1){if(!(s?l:a9))a2=a1
else{q=b.a
q=q==null?a8:q.b
a2=(q==null?0:q)-1-a1}a3=d.am(a0)
d.d=d.d+(a3.c-a3.d)
q=b.a
a4=q==null?a8:q.O(0,a2,a8)
if(a4==null)a4=new A.H()
for(a5=0;a5<j;){a6=J.c(a3.a,a3.d++)
a7=7
for(;;){if(!(a7>-1&&a5<j))break
if((a6&B.a.Y(1,a7))>>>0!==0)a4.sv(0)
a4.D();++a5;--a7}}}return b}}
A.fx.prototype={}
A.bG.prototype={}
A.c5.prototype={}
A.e2.prototype={}
A.kB.prototype={
$5(a,b,c,d,e){return this.a.a4(this.b-a,b,c,d,e)},
$S:4}
A.kC.prototype={
$5(a,b,c,d,e){return this.a.a4(this.b-a,this.c-b,c,d,e)},
$S:4}
A.kD.prototype={
$5(a,b,c,d,e){return this.a.a4(a,this.b-b,c,d,e)},
$S:4}
A.kE.prototype={
$5(a,b,c,d,e){return this.a.a4(b,a,c,d,e)},
$S:4}
A.kF.prototype={
$5(a,b,c,d,e){return this.a.a4(this.b-b,a,c,d,e)},
$S:4}
A.kG.prototype={
$5(a,b,c,d,e){return this.a.a4(this.b-b,this.c-a,c,d,e)},
$S:4}
A.kH.prototype={
$5(a,b,c,d,e){return this.a.a4(b,this.b-a,c,d,e)},
$S:4}
A.iH.prototype={}
A.bK.prototype={}
A.iJ.prototype={
kh(a){var s,r,q,p,o,n=this,m=A.t(t.L.a(a),!0,null,0)
n.a=m
s=m.cL(2,0)
if(J.c(s.a,s.d)!==255||J.c(s.a,s.d+1)!==216)return!1
if(n.bz()!==216)return!1
r=n.bz()
q=!1
p=!1
for(;;){if(r!==217){m=n.a
m=m.d<m.c}else m=!1
if(!m)break
o=n.a.n()
if(o<2)break
m=n.a
m.d=m.d+(o-2)
switch(r){case 192:case 193:case 194:q=!0
break
case 218:p=!0
break}r=n.bz()}return q&&p},
jW(a){var s,r,q,p,o,n,m,l=this
l.a=A.t(t.L.a(a),!0,null,0)
if(l.bz()!==216)return null
s=new A.hb()
r=l.bz()
q=!1
p=!1
for(;;){if(r!==217){o=l.a
o=o.d<o.c}else o=!1
if(!o)break
switch(r){case 192:case 193:case 194:n=l.a.n()
if(n<2)A.ac(A.o("Invalid Block"))
o=l.a
a=o.am(n-2)
o.d=o.d+(a.c-a.d)
l.eP(r,a)
q=!0
break
case 218:l.eU()
p=!0
break
default:l.eU()
break}r=l.bz()}o=l.d
if(o!=null){m=o.e
m.toString
s.a=m
o=o.d
o.toString
s.b=o}o=l.d=null
B.c.da(l.y)
return q&&p?s:o},
c3(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.a=A.t(t.L.a(a),!0,null,0)
h.iR()
if(h.y.length!==1)throw A.h(A.o("Only single frame JPEGs supported"))
s=h.d
for(r=s.z,q=s.y,p=h.as,o=0;o<r.length;++o){n=q.l(0,r[o])
m=n.a
l=s.f
k=n.b
j=s.r
i=h.hs(s,n)
if(m===l)m=0
else m=m===1&&l===4?2:1
if(k===j)l=0
else l=k===1&&j===4?2:1
B.c.N(p,new A.fx(i,m,l))}},
iR(){var s,r,q,p,o,n,m=this
if(m.bz()!==216)throw A.h(A.o("Start Of Image marker not found."))
s=m.bz()
for(;;){if(s!==217){r=m.a
r===$&&A.d()
r=r.d<r.c}else r=!1
if(!r)break
r=m.a
r===$&&A.d()
q=r.n()
if(q<2)A.ac(A.o("Invalid Block"))
r=m.a
p=r.am(q-2)
o=r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:m.iS(s,p)
break
case 219:m.iU(p)
break
case 192:case 193:case 194:m.eP(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.h(A.o("Unhandled frame type "+B.a.cC(s,16)))
case 196:m.iT(p)
break
case 221:m.e=p.n()
break
case 218:m.j8(p)
break
case 255:if(J.c(r.a,o)!==255)--m.a.d
break
default:n=!1
if(J.c(r.a,o+-3)===255){r=m.a
if(J.c(r.a,r.d+-2)>=192){r=m.a
r=J.c(r.a,r.d+-2)<=254}else r=n}else r=n
if(r){m.a.d-=3
break}if(s!==0)throw A.h(A.o("Unknown JPEG marker "+B.a.cC(s,16)))
break}s=m.bz()}},
eU(){var s,r=this.a
r===$&&A.d()
s=r.n()
if(s<2)throw A.h(A.o("Invalid Block"))
r=this.a
r.d=r.d+(s-2)},
bz(){var s,r=this,q=r.a
q===$&&A.d()
if(q.d>=q.c)return 0
do{do{s=r.a.F()
if(s!==255){q=r.a
q=q.d<q.c}else q=!1}while(q)
q=r.a
if(q.d>=q.c)return s
do{s=r.a.F()
if(s===255){q=r.a
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.a
q=q.d<q.c}else q=!1}while(q)
return s},
j0(a){var s
for(s=0;s<12;++s)if(J.c(a.a,a.d++)!==B.jf[s])return
this.r=new A.cZ("ICC_PROFILE",B.av,a.a3())},
iV(a){if(a.k()!==1165519206)return
if(a.n()!==0)return
this.w.c3(a)},
iS(a,b){var s,r,q,p,o,n=this,m=b
if(a===224){s=m
r=!1
if(J.c(s.a,s.d)===74){s=m
if(J.c(s.a,s.d+1)===70){s=m
if(J.c(s.a,s.d+2)===73){s=m
if(J.c(s.a,s.d+3)===70){s=m
s=J.c(s.a,s.d+4)===0}else s=r}else s=r}else s=r}else s=r
if(s){s=new A.iM()
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
m.cL(14+3*r*q,14)}}else if(a===225)n.iV(m)
else if(a===226)n.j0(m)
else if(a===238){s=m
r=!1
if(J.c(s.a,s.d)===65){s=m
if(J.c(s.a,s.d+1)===100){s=m
if(J.c(s.a,s.d+2)===111){s=m
if(J.c(s.a,s.d+3)===98){s=m
if(J.c(s.a,s.d+4)===101){s=m
s=J.c(s.a,s.d+5)===0}else s=r}else s=r}else s=r}else s=r}else s=r
if(s){p=new A.iH()
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
n.c=p}}else if(a===254)try{m.k0()}catch(o){}},
iU(a){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=this.x;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
o=J.c(p,q)
n=B.a.j(o,4)
o&=15
if(o>=4)throw A.h(A.o("Invalid number of quantization tables"))
if(r[o]==null)B.c.h(r,o,new Int16Array(64))
m=r[o]
for(q=n!==0,l=0;l<64;++l){k=q?a.n():J.c(a.a,a.d++)
m.toString
p=$.ia()
if(!(l<p.length))return A.a(p,l)
p=p[l]
m.$flags&2&&A.b(m)
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.h(A.o("Bad length for DQT block"))},
eP(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.d!=null)throw A.h(A.o("Duplicate JPG frame data found."))
s=A.I(t.p,t.d2)
r=A.j([],t.t)
q=new A.ha(s,r)
q.b=a===194
q.c=b.F()
q.d=b.n()
q.e=b.n()
p=b.F()
for(o=i.x,n=0;n<p;++n){m=J.c(b.a,b.d++)
l=J.c(b.a,b.d++)
k=B.a.j(l,4)
j=J.c(b.a,b.d++)
B.c.N(r,m)
s.h(0,m,new A.bK(k&15,l&15,o,j))}q.jU()
i.d=q
B.c.N(i.y,q)},
iT(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.Q,q=this.z;p=a.d,p<s;){o=a.a
a.d=p+1
n=J.c(o,p)
m=new Uint8Array(16)
for(l=0,k=0;k<16;++k){p=J.c(a.a,a.d++)
if(!(k<16))return A.a(m,k)
m[k]=p
l+=m[k]}j=a.am(l)
a.d=a.d+(j.c-j.d)
i=j.a3()
if((n&16)!==0){n-=16
h=q}else h=r
if(h.length<=n)B.c.su(h,n+1)
B.c.h(h,n,this.ix(m,i))}},
j8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a.F()
if(b<1||b>4)throw A.h(A.o("Invalid SOS block"))
s=c.d
s.toString
r=A.j([],t.b7)
for(q=c.z,p=c.Q,o=s.y,n=t.g8,m=0;m<b;++m){l=J.c(a.a,a.d++)
k=J.c(a.a,a.d++)
if(!o.ag(l))throw A.h(A.o("Invalid Component in SOS block"))
j=o.l(0,l)
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
j.x=n.a(g)}B.c.N(r,j)}f=a.F()
e=a.F()
d=a.F()
q=B.a.j(d,4)
p=c.a
p===$&&A.d()
q=new A.hc(p,s,r,c.e,f,e,q&15,d&15)
p=s.w
p===$&&A.d()
q.f=p
q.r=s.b
q.bF()},
ix(a,b){var s,r,q,p,o,n,m,l,k=A.j([],t.gb),j=16
for(;;){if(!(j>0&&a[j-1]===0))break;--j}s=t.en
B.c.N(k,new A.dB(A.S(2,null,!1,s)))
if(0>=k.length)return A.a(k,0)
r=k[0]
for(q=b.length,p=0,o=0;o<j;){for(n=0;n<a[o];++n){if(0>=k.length)return A.a(k,-1)
r=k.pop()
m=r.b
if(!(p>=0&&p<q))return A.a(b,p)
B.c.h(r.a,m,new A.e2(b[p]))
while(m=r.b,m>0){if(0>=k.length)return A.a(k,-1)
r=k.pop()}r.b=m+1
B.c.N(k,r)
for(;k.length<=o;r=l){m=A.S(2,null,!1,s)
l=new A.dB(m)
B.c.N(k,l)
B.c.h(r.a,r.b,new A.c5(m))}++p}++o
if(o<j){m=A.S(2,null,!1,s)
l=new A.dB(m)
B.c.N(k,l)
B.c.h(r.a,r.b,new A.c5(m))
r=l}}if(0>=k.length)return A.a(k,0)
return k[0].a},
hs(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.e
a===$&&A.d()
s=a1.f
s===$&&A.d()
r=a<<3>>>0
q=new Int32Array(64)
p=new Uint8Array(64)
o=s*8
n=A.S(o,null,!1,t.aD)
for(m=a1.c,l=a1.d,k=0,j=0;j<s;++j){i=j<<3>>>0
for(h=0;h<8;++h,k=g){g=k+1
B.c.h(n,k,new Uint8Array(r))}for(f=0;f<a;++f){if(!(l>=0&&l<4))return A.a(m,l)
e=m[l]
e.toString
d=a1.r
d===$&&A.d()
if(!(j<d.length))return A.a(d,j)
d=d[j]
if(!(f<d.length))return A.a(d,f)
A.to(e,d[f],p,q)
c=f<<3>>>0
for(e=c+8,b=0;b<8;++b){d=i+b
if(!(d<o))return A.a(n,d)
d=n[d]
if(d!=null)B.f.ao(d,c,e,p,b<<3>>>0)}}}return n}}
A.dB.prototype={}
A.ha.prototype={
jU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.m(s).p("R<1>"),q=new A.R(s,s.r,s.e,r);q.D();){p=s.l(0,q.d)
a.f=Math.max(a.f,p.a)
a.r=Math.max(a.r,p.b)}q=a.e
q.toString
a.w=B.b.b3(q/8/a.f)
q=a.d
q.toString
a.x=B.b.b3(q/8/a.r)
for(r=new A.R(s,s.r,s.e,r),q=t.fv,o=t.an,n=t.f0;r.D();){m=s.l(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.b.b3(B.b.b3(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.b.b3(B.b.b3(l/8)*i/a.r)
g=a.w*k
f=a.x*i
e=J.am(f,n)
for(d=0;d<f;++d){c=J.am(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.r=q.a(e)}}}
A.hb.prototype={$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.iM.prototype={}
A.hc.prototype={
bF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.y,a0=a.length,a1=b.r
a1.toString
if(a1)if(b.Q===0)s=b.at===0?b.ghQ():b.ghS()
else s=b.at===0?b.ghH():b.ghJ()
else s=b.ghN()
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
j=B.a.az(o,k)
i=B.a.a_(o,k)
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
for(f=0;f<g;++f)for(e=0;e<h;++e)b.hV(m,s,o,f,e)}++o;++l}}b.ch=0
if(o>=p)break
d=J.c(r.a,r.d)
c=J.c(r.a,r.d+1)
if(d===255)if(c>=208&&c<=215)r.d+=2
else break}},
bZ(){var s,r=this,q=r.ch
if(q>0){--q
r.ch=q
return B.a.br(r.ay,q)&1}q=r.a
if(q.d>=q.c)return null
s=q.F()
r.ay=s
if(s===255)if(q.F()!==0)return null
r.ch=7
return B.a.j(r.ay,7)&1},
cl(a){var s,r,q=new A.c5(t.g8.a(a))
while(s=this.bZ(),s!=null){if(q instanceof A.c5){r=q.a
if(s>>>0!==s||s>=2)return A.a(r,s)
q=r[s]}if(q instanceof A.e2)return q.a}return null},
dH(a){var s,r
for(s=0;a>0;){r=this.bZ()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
cn(a){var s
if(a==null)return 0
if(a===1)return this.bZ()===1?1:-1
s=this.dH(a)
if(s==null)return 0
if(s>=B.a.Y(1,a-1))return s
return s+B.a.S(-1,a)+1},
hO(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=a.w
s===$&&A.d()
r=k.cl(s)
q=r===0?0:k.cn(r)
s=a.y
s===$&&A.d()
s+=q
a.y=s
b.$flags&2&&A.b(b)
b[0]=s
for(p=1;p<64;){s=a.x
s===$&&A.d()
o=k.cl(s)
if(o==null)break
n=o&15
m=o>>>4
if(n===0){if(m<15)break
p+=16
continue}p+=m
n=k.cn(n)
s=$.ia()
if(!(p>=0&&p<s.length))return A.a(s,p)
l=s[p]
b.$flags&2&&A.b(b)
if(!(l<64))return A.a(b,l)
b[l]=n;++p}},
hR(a,b){var s,r,q
t.L.a(b)
s=a.w
s===$&&A.d()
r=this.cl(s)
q=r===0?0:B.a.S(this.cn(r),this.ax)
s=a.y
s===$&&A.d()
s+=q
a.y=s
b.$flags&2&&A.b(b)
b[0]=s},
hT(a,b){var s,r
t.L.a(b)
s=b[0]
r=this.bZ()
r.toString
r=B.a.S(r,this.ax)
b.$flags&2&&A.b(b)
b[0]=(s|r)>>>0},
hI(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=k.CW
if(s>0){k.CW=s-1
return}r=k.Q
q=k.as
for(s=k.ax;r<=q;){p=a.x
p===$&&A.d()
p=k.cl(p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){s=k.dH(n)
s.toString
k.CW=s+B.a.S(1,n)-1
break}r+=16
continue}r+=n
p=$.ia()
if(!(r>=0&&r<p.length))return A.a(p,r)
m=p[r]
p=k.cn(o)
l=B.a.S(1,s)
b.$flags&2&&A.b(b)
if(!(m<64))return A.a(b,m)
b[m]=p*l;++r}},
hK(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.L.a(b)
s=j.Q
r=j.as
A:for(q=j.ax,p=0;s<=r;){o=$.ia()
if(!(s>=0&&s<o.length))return A.a(o,s)
n=o[s]
o=j.cx
switch(o){case 0:o=a.x
o===$&&A.d()
m=j.cl(o)
if(m==null)throw A.h(A.o("Invalid progressive encoding"))
l=m&15
p=m>>>4
if(l===0)if(p<15){o=j.dH(p)
o.toString
j.CW=o+B.a.S(1,p)
j.cx=4}else{j.cx=1
p=16}else{if(l!==1)throw A.h(A.o("invalid ACn encoding"))
j.cy=j.cn(l)
j.cx=p!==0?2:3}continue A
case 1:case 2:if(!(n<64))return A.a(b,n)
k=b[n]
if(k!==0){o=j.bZ()
o.toString
o=B.a.S(o,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=k+o}else{--p
if(p===0)j.cx=o===2?3:0}break
case 3:if(!(n<64))return A.a(b,n)
o=b[n]
if(o!==0){k=j.bZ()
k.toString
k=B.a.S(k,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=o+k}else{o=j.cy
o===$&&A.d()
o=B.a.S(o,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=o
j.cx=0}break
case 4:if(!(n<64))return A.a(b,n)
o=b[n]
if(o!==0){k=j.bZ()
k.toString
k=B.a.S(k,q)
b.$flags&2&&A.b(b)
if(!(n<64))return A.a(b,n)
b[n]=o+k}break}++s}if(j.cx===4)if(--j.CW===0)j.cx=0},
hV(a,b,c,d,e){var s,r,q,p,o
t.fb.a(b)
s=this.f
s===$&&A.d()
r=B.a.az(c,s)*a.b+d
q=B.a.a_(c,s)*a.a+e
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
A.h9.prototype={
bk(a){var s=a.length,r=!0
if(s>=2){if(0>=s)return A.a(a,0)
if(a[0]===255){if(1>=s)return A.a(a,1)
s=a[1]!==216}else s=r}else s=r
if(s)return!1
return A.lh().kh(a)},
aw(a){A.t(a,!0,null,0)
return A.lh().jW(a)},
aV(a,b){var s=A.lh()
s.c3(a)
if(s.y.length!==1)throw A.h(A.o("only single frame JPEGs supported"))
return A.t6(s)},
bQ(a){return this.aV(a,null)}}
A.iI.prototype={
ad(){return"JpegChroma."+this.b}}
A.iK.prototype={
fR(a){a=B.a.i(B.a.J(a,1,100))
if(this.at===a)return
this.is(a<50?B.b.bH(5000/a):B.a.bH(200-a*2))
this.at=a},
dc(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=A.eu(!0,8192)
b2.bC(b3,216)
b2.bC(b3,224)
b3.aB(16)
b3.C(74)
b3.C(70)
b3.C(73)
b3.C(70)
b3.C(0)
b3.C(1)
b3.C(1)
b3.C(0)
b3.aB(1)
b3.aB(1)
b3.C(0)
b3.C(0)
b2.jl(b3,b4.gbG())
s=b4.c
if(s!=null){b2.bC(b3,226)
r=s.jC()
q=A.j([73,67,67,95,80,82,79,70,73,76,69,0],t.t)
b3.aB(14+r.length)
b3.aW(q)
b3.aW(r)}b2.jk(b3)
s=b4.gR()
p=b4.gL()
b2.bC(b3,192)
b3.aB(17)
b3.C(8)
b3.aB(p)
b3.aB(s)
b3.C(3)
b3.C(1)
s=b5===B.V
b3.C(s?17:34)
b3.C(0)
b3.C(2)
b3.C(17)
b3.C(1)
b3.C(3)
b3.C(17)
b3.C(1)
b2.jj(b3)
b2.bC(b3,218)
b3.aB(12)
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
o=b4.gR()
n=b4.gL()
if(s){m=new Float32Array(64)
l=new Float32Array(64)
k=new Float32Array(64)
for(s=b2.c,p=b2.d,j=0,i=0,h=0,g=0;g<n;g+=8)for(f=0;f<o;f+=8){b2.cf(b4,f,g,o,n,m,l,k,B.U)
e=b2.e
d=b2.r
d===$&&A.d()
j=b2.bA(b3,m,s,j,e,d)
d=b2.f
e=b2.w
e===$&&A.d()
i=b2.bA(b3,l,p,i,d,e)
h=b2.bA(b3,k,p,h,b2.f,b2.w)}}else{s=t.h4
m=J.bJ(4,s)
for(c=0;c<4;++c)m[c]=new Float32Array(64)
l=J.bJ(4,s)
for(c=0;c<4;++c)l[c]=new Float32Array(64)
k=J.bJ(4,s)
for(c=0;c<4;++c)k[c]=new Float32Array(64)
b=new Float32Array(64)
a=new Float32Array(64)
for(s=b2.c,p=b2.d,j=0,i=0,h=0,g=0;g<n;g+=16)for(e=g+8,f=0;f<o;f+=16){d=m[0]
a0=l[0]
a1=k[0]
b2.cf(b4,f,g,o,n,d,a0,a1,B.U)
a2=f+8
a3=m[1]
a4=l[1]
a5=k[1]
b2.cf(b4,a2,g,o,n,a3,a4,a5,B.U)
a6=m[2]
a7=l[2]
a8=k[2]
b2.cf(b4,f,e,o,n,a6,a7,a8,B.U)
a9=m[3]
b0=l[3]
b1=k[3]
b2.cf(b4,a2,e,o,n,a9,b0,b1,B.U)
b2.eu(b,a0,a4,a7,b0)
b2.eu(a,a1,a5,a8,b1)
b1=b2.e
a8=b2.r
a8===$&&A.d()
j=b2.bA(b3,a9,s,b2.bA(b3,a6,s,b2.bA(b3,a3,s,b2.bA(b3,d,s,j,b1,a8),b2.e,b2.r),b2.e,b2.r),b2.e,b2.r)
a8=b2.f
b1=b2.w
b1===$&&A.d()
i=b2.bA(b3,b,p,i,a8,b1)
h=b2.bA(b3,a,p,h,b2.f,b2.w)}}s=b2.ay
if(s>=0){++s
b2.bB(b3,A.j([B.a.Y(1,s)-1,s],t.t))}b2.bC(b3,217)
return J.a_(B.f.gA(b3.c),0,b3.a)},
cf(a,b,c,d,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(s=this.as,r=c+1,q=0;q<64;++q){p=q>>>3
o=c+p
n=b+(q&7)
if(o>=a0)o-=r+p-a0
if(n>=d)n-=n-d+1
m=a.a
l=m==null?null:m.O(n,o,null)
if(l==null)l=new A.H()
if(l.gK()!==B.e)l=l.b4(B.e)
if(l.gu(l)>3){k=l.gX()
j=1-k
l.sm(B.b.aE(l.gm()*k+a4.l(0,0)*j))
l.st(B.b.aE(l.gt()*k+a4.l(0,1)*j))
l.sq(B.b.aE(l.gq()*k+a4.l(0,2)*j))}i=B.b.i(l.gm())
h=B.b.i(l.gt())
g=B.b.i(l.gq())
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
eu(a,b,c,d,e){var s,r,q,p,o,n,m,l
for(s=a.$flags|0,r=0;r<64;++r){if(r<32)q=B.a.a_(r,8)<4?b:c
else q=B.a.a_(r,8)<4?d:e
p=(B.a.V(B.a.a_(r,32),8)<<4>>>0)+(B.a.a_(r,4)<<1>>>0)
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
bC(a,b){a.C(255)
a.C(b&255)},
is(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.a,r=s.$flags|0,q=0;q<64;++q){p=B.b.bH((B.hP[q]*a+50)/100)
if(p<1)p=1
else if(p>255)p=255
o=B.W[q]
r&2&&A.b(s)
if(!(o<64))return A.a(s,o)
s[o]=p}for(r=b.b,o=r.$flags|0,n=0;n<64;++n){m=B.b.bH((B.ee[n]*a+50)/100)
if(m<1)m=1
else if(m>255)m=255
l=B.W[n]
o&2&&A.b(r)
if(!(l<64))return A.a(r,l)
r[l]=m}for(o=b.c,l=o.$flags|0,k=b.d,j=k.$flags|0,i=0,h=0;h<8;++h)for(g=0;g<8;++g){if(!(i>=0&&i<64))return A.a(B.W,i)
f=B.W[i]
if(!(f<64))return A.a(s,f)
e=s[f]
d=B.bj[h]
c=B.bj[g]
l&2&&A.b(o)
o[i]=1/(e*d*c*8)
f=r[f]
j&2&&A.b(k)
k[i]=1/(f*d*c*8);++i}},
cP(a,b){var s,r,q,p,o,n,m,l=t.L
l.a(a)
l.a(b)
l=t.t
s=A.j([A.j([],l)],t.ca)
for(r=b.length,q=0,p=0,o=1;o<=16;++o){for(n=1;n<=a[o];++n){if(!(p>=0&&p<r))return A.a(b,p)
m=b[p]
if(s.length<=m)B.c.su(s,m+1)
B.c.h(s,m,A.j([q,o],l));++p;++q}q*=2}return s},
iq(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.y,r=this.x,q=t.t,p=1,o=2,n=1;n<=15;++n){for(m=p;m<o;++m){l=32767+m
B.c.h(s,l,n)
B.c.h(r,l,A.j([m,n],q))}for(l=o-1,k=-l,j=-p;k<=j;++k){i=32767+k
B.c.h(s,i,n)
B.c.h(r,i,A.j([l+k,n],q))}p=p<<1>>>0
o=o<<1>>>0}},
it(){var s,r,q
for(s=this.as,r=s.$flags|0,q=0;q<256;++q){r&2&&A.b(s)
s[q]=19595*q
s[q+256]=38470*q
s[q+512]=7471*q+32768
s[q+768]=-11059*q
s[q+1024]=-21709*q
s[q+1280]=32768*q+8421375
s[q+1536]=-27439*q
s[q+1792]=-5329*q}},
ie(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=t.H
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
B.c.h(d5,r,d4>0?B.b.i(d4+0.5):B.b.i(d4-0.5))}return d5},
jl(a,b){var s,r
if(b.gak(0))return
s=A.eu(!1,8192)
b.aL(s)
r=J.a_(B.f.gA(s.c),0,s.a)
this.bC(a,225)
a.aB(r.length+8)
a.aJ(1165519206)
a.aB(0)
a.aW(r)},
jk(a){var s,r,q
this.bC(a,219)
a.aB(132)
a.C(0)
for(s=this.a,r=0;r<64;++r)a.C(s[r])
a.C(1)
for(s=this.b,q=0;q<64;++q)a.C(s[q])},
jj(a){var s,r,q,p,o,n,m,l
this.bC(a,196)
a.aB(418)
a.C(0)
for(s=0;s<16;){++s
a.C(B.bW[s])}for(r=0;r<=11;++r)a.C(B.a8[r])
a.C(16)
for(q=0;q<16;){++q
a.C(B.bc[q])}for(p=0;p<=161;++p)a.C(B.bl[p])
a.C(1)
for(o=0;o<16;){++o
a.C(B.bx[o])}for(n=0;n<=11;++n)a.C(B.a8[n])
a.C(17)
for(m=0;m<16;){++m
a.C(B.bq[m])}for(l=0;l<=161;++l)a.C(B.bG[l])},
bA(a,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.H
b.a(a0)
b.a(a1)
t.fl.a(a3)
t.d.a(a4)
b=a4.length
if(0>=b)return A.a(a4,0)
s=a4[0]
if(240>=b)return A.a(a4,240)
r=a4[240]
q=c.ie(a0,a1)
for(b=c.Q,p=0;p<64;++p)B.c.h(b,B.W[p],q[p])
o=b[0]
o.toString
n=o-a2
if(n===0){if(0>=a3.length)return A.a(a3,0)
m=a3[0]
m.toString
c.bB(a,m)}else{l=32767+n
a3.toString
m=c.y
if(!(l>=0&&l<65535))return A.a(m,l)
m=m[l]
m.toString
if(!(m<a3.length))return A.a(a3,m)
m=a3[m]
m.toString
c.bB(a,m)
m=c.x[l]
m.toString
c.bB(a,m)}k=63
for(;;){if(!(k>0&&b[k]===0))break;--k}if(k===0){s.toString
c.bB(a,s)
return o}for(m=c.y,j=c.x,i=1;i<=k;){h=i
for(;;){if(!(h>=0&&h<64))return A.a(b,h)
if(!(b[h]===0&&h<=k))break;++h}g=h-i
if(g>=16){f=B.a.j(g,4)
for(e=1;e<=f;++e){r.toString
c.bB(a,r)}g&=15}d=b[h]
d.toString
l=32767+d
if(!(l>=0&&l<65535))return A.a(m,l)
d=m[l]
d.toString
d=(g<<4>>>0)+d
if(!(d<a4.length))return A.a(a4,d)
d=a4[d]
d.toString
c.bB(a,d)
d=j[l]
d.toString
c.bB(a,d)
i=h+1}if(k!==63){s.toString
c.bB(a,s)}return o},
bB(a,b){var s,r,q,p=this
t.L.a(b)
s=b.length
if(0>=s)return A.a(b,0)
r=b[0]
if(1>=s)return A.a(b,1)
q=b[1]-1
while(q>=0){if((r&B.a.Y(1,q))>>>0!==0)p.ax=(p.ax|B.a.Y(1,p.ay))>>>0;--q
if(--p.ay<0){s=p.ax
if(s===255){a.C(255)
a.C(0)}else a.C(s)
p.ay=7
p.ax=0}}}}
A.di.prototype={
ad(){return"PngDisposeMode."+this.b}}
A.eG.prototype={
ad(){return"PngBlendMode."+this.b}}
A.eH.prototype={}
A.h0.prototype={}
A.bN.prototype={
ad(){return"PngFilterType."+this.b}}
A.hp.prototype={
sT(a){this.w=t.di.a(a)},
ske(a){this.x=t.T.a(a)},
$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.h1.prototype={}
A.ho.prototype={
bk(a){var s,r=A.t(a,!0,null,0).al(8)
for(s=0;s<8;++s)if(J.c(r.a,r.d+s)!==B.bL[s])return!1
return!0},
aw(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=A.t(b7,!0,b5,0)
b4.d=b6
s=b6.al(8)
for(r=0;r<8;++r)if(J.c(s.a,s.d+r)!==B.bL[r])return b5
for(b6=b4.a,q=b6.cy,p=t.t,o=b6.db,n=t.L,m=b6.ax;;){l=b4.d
k=l.d-l.b
j=l.k()
i=b4.d.af(4)
switch(i){case"tEXt":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
g=h.a3()
f=g.length
for(r=0;r<f;++r)if(g[r]===0){l=r+1
m.h(0,B.aT.bQ(new Uint8Array(g.subarray(0,A.b5(0,r,f)))),B.aT.bQ(new Uint8Array(g.subarray(l,A.b5(l,b5,f)))))
break}b4.d.d+=4
break
case"pHYs":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
e=A.p(h,b5,0)
e.k()
e.k()
J.c(e.a,e.d++)
b4.d.d+=4
break
case"IHDR":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
d=A.p(h,b5,0)
c=d.a3()
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
switch(l){case 0:if(!B.c.c0(A.j([1,2,4,8,16],p),b6.c))return b5
break
case 2:if(!B.c.c0(A.j([8,16],p),b6.c))return b5
break
case 3:if(!B.c.c0(A.j([1,2,4,8],p),b6.c))return b5
break
case 4:if(!B.c.c0(A.j([8,16],p),b6.c))return b5
break
case 6:if(!B.c.c0(A.j([8,16],p),b6.c))return b5
break}if(b4.d.k()!==A.cE(n.a(c),A.cE(new A.aW(i),0)))throw A.h(A.o("Invalid "+i+" checksum"))
break
case"PLTE":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
b6.sT(h.a3())
if(b4.d.k()!==A.cE(n.a(n.a(b6.w)),A.cE(new A.aW(i),0)))throw A.h(A.o("Invalid "+i+" checksum"))
break
case"tRNS":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
b6.ske(h.a3())
b=b4.d.k()
l=b6.x
l.toString
if(b!==A.cE(n.a(l),A.cE(new A.aW(i),0)))throw A.h(A.o("Invalid "+i+" checksum"))
break
case"IEND":b4.d.d+=4
break
case"gAMA":if(j!==4)throw A.h(A.o("Invalid gAMA chunk"))
b4.d.k()
b4.d.d+=4
break
case"IDAT":B.c.N(o,k)
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
a3=b4.d.n()
a4=b4.d.n()
l=b4.d
a5=J.c(l.a,l.d++)
l=b4.d
a6=J.c(l.a,l.d++)
if(!(a5>=0&&a5<3))return A.a(B.bb,a5)
l=B.bb[a5]
if(!(a6>=0&&a6<2))return A.a(B.by,a6)
a7=B.by[a6]
B.c.N(q,new A.h0(A.j([],p),a,a0,a1,a2,a3,a4,l,a7))
b4.d.d+=4
break
case"fdAT":b4.d.k()
B.c.N(B.c.gft(q).y,k)
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
if(l!=null){l=B.f.c0(l,a8)?0:255
a7=new Uint8Array(4)
a7[0]=b0
a7[1]=b2
a7[2]=b3
a7[3]=l
b6.z=new A.cR(a7)}else{l=new Uint8Array(3)
l[0]=b0
l[1]=b2
l[2]=b3
b6.z=new A.fw(l)}}else if(l===0||l===4){b4.d.n()
j-=2}else if(l===2||l===6){l=b4.d
l.n()
l.n()
l.n()
j-=24}if(j>0)b4.d.d+=j
b4.d.d+=4
break
case"iCCP":b6.Q=b4.d.cz()
l=b4.d
J.c(l.a,l.d++)
l=b6.Q
a7=b4.d
h=a7.am(j-(l.length+2))
a7.d=a7.d+(h.c-h.d)
b6.at=h.a3()
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
aj(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=null,b8=b5.a,b9=b8.a,c0=b8.b,c1=b8.cy,c2=c1.length
if(c2===0||c3===0){r=A.j([],t.gN)
c1=b8.db
q=c1.length
for(c2=t.L,p=0,o=0;o<q;++o){n=b5.d
n===$&&A.d()
if(!(o<c1.length))return A.a(c1,o)
n.d=c1[o]
m=n.k()
l=b5.d.af(4)
n=b5.d
k=n.am(m)
n.d=n.d+(k.c-k.d)
j=k.a3()
p+=j.length
B.c.N(r,j)
if(b5.d.k()!==A.cE(c2.a(j),A.cE(new A.aW(l),0)))throw A.h(A.o("Invalid "+l+" checksum"))}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.a3)(r),++h){j=r[h]
J.me(b7,i,j)
i+=j.length}}else{if(c3>=c2)throw A.h(A.o("Invalid Frame Number: "+c3))
if(!(c3<c2))return A.a(c1,c3)
g=c1[c3]
b9=g.b
c0=g.c
r=A.j([],t.gN)
for(c1=g.y,p=0,o=0;o<c1.length;++o){c2=b5.d
c2===$&&A.d()
c2.d=c1[o]
m=c2.k()
c2=b5.d
c2.af(4)
c2.d+=4
c2=b5.d
k=c2.am(m-4)
c2.d=c2.d+(k.c-k.d)
j=k.a3()
p+=j.length
B.c.N(r,j)}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.a3)(r),++h){j=r[h]
J.me(b7,i,j)
i+=j.length}}c1=b8.d
f=1
if(!(c1===3))if(!(c1===0)){if(c1===4)c1=2
else c1=c1===6?4:3
f=c1}s=null
try{s=B.D.bR(b7)}catch(e){return b6}d=A.t(s,!0,b6,0)
b5.c=b5.b=0
c=b6
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
b=c2/3|0
a=b8.x
n=a!=null
a0=n?a.length:0
a1=n?4:3
c=new A.b0(new Uint8Array(b*a1),b,a1)
for(n=a1===4,o=0,a2=0;o<b;++o,a2+=3){if(n&&o<a0){if(!(o<a.length))return A.a(a,o)
a3=a[o]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
c.cK(o,a4,a5,c1[a6],a3)}}}if(b8.d===0&&b8.x!=null&&c==null&&b8.c<=8){a=b8.x
a7=a.length
c1=b8.c
b=B.a.Y(1,c1)
c2=b*4
n=new Uint8Array(c2)
c=new A.b0(n,b,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(o=0;o<b;++o){a9=o*a8
c.cK(o,a9,a9,a9,255)}for(o=0;o<a7;o+=2){c1=a[o]
a4=o+1
if(!(a4<a7))return A.a(a,a4)
b0=(c1&255)<<8|a[a4]&255
if(b0<b){c1=b0*4+3
if(!(c1<c2))return A.a(n,c1)
n[c1]=0}}}c1=b8.c
if(c1===1)b1=B.w
else if(c1===2)b1=B.B
else{if(c1===4)c2=B.C
else c2=c1===16?B.l:B.e
b1=c2}c2=b8.d
if(c2===0&&b8.x!=null&&c1>8)f=4
b2=A.N(b6,b6,b1,0,B.i,c0,b6,0,c2===2&&b8.x!=null?4:f,c,B.e,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.bY(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.bY(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.bY(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.bY(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.bY(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.bY(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.bY(d,b2,0,1,1,2,b9,c0>>>1)}else b5.iM(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.cZ(b8.Q,B.d2,c1)
b8=b8.ax
if(b8.a!==0)b2.jn(b8)
return b2},
aV(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(b.aw(t.D.a(a0))==null)return a
s=b.a
r=s.cy
q=r.length
if(q===0){s=b.aj(0)
s.toString
return s}for(q=t.g,p=a,o=p,n=0;n<s.CW;++n){if(!(n<r.length))return A.a(r,n)
a1=r[n]
m=b.aj(n)
if(m==null)continue
if(o==null||p==null){o=m.fi(m.gbT())
l=a1.f
o.y=B.b.i((l===0||a1.r===0?0:l/a1.r)*1000)
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
j=j===(i==null?0:i)&&a1.d===0&&a1.e===0&&a1.x===B.c_}else j=!1
if(j){l=a1.f
m.y=B.b.i((l===0||a1.r===0?0:l/a1.r)*1000)
o.b2(m)
p=m
continue}d=o.x
if(d===$)d=o.x=A.j([],q)
if(!(l<d.length))return A.a(d,l)
p=A.bI(d[l],!1,!1)
c=k.w
if(c===B.c1){l=k.d
j=k.e
i=s.z
if(i==null){i=new Uint8Array(4)
h=new A.cR(i)
i[0]=0
i[1]=0
i[2]=0
i[3]=0
i=h}A.t2(p,!1,i,l,l+k.b-1,j,j+k.c-1)}else if(c===B.c2&&n>1){l=n-2
d=o.x
if(d===$)d=o.x=A.j([],q)
if(!(l>=0&&l<d.length))return A.a(d,l)
j=k.d
i=k.e
h=k.b
g=k.c
p=A.i5(p,d[l],B.T,g,h,j,i,g,h,j,i)}l=a1.f
p.y=B.b.i((l===0||a1.r===0?0:l/a1.r)*1000)
l=a1.x===B.c0?B.T:B.ao
p=A.i5(p,m,l,a,a,a1.d,a1.e,a,a,a,a)
o.b2(p)}return o},
bQ(a){return this.aV(a,null)},
bY(a4,a5,a6,a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
if(a3===4)s=2
else if(a3===2)s=3
else{a3=a3===6?4:1
s=a3}r=s*a2.c
q=B.a.j(r+7,3)
p=B.a.j(r*b0+7,3)
o=A.j([null,null],t.ff)
n=A.j([0,0,0,0],t.t)
for(a2=a8>1,m=a8-a6,l=a7,k=0,j=0;k<b1;++k,l+=a9,++a1.e){a3=J.c(a4.a,a4.d++)
if(!(a3>=0&&a3<5))return A.a(B.ag,a3)
i=B.ag[a3]
h=a4.am(p)
a4.d=a4.d+(h.c-h.d)
B.c.h(o,j,h.a3())
if(!(j>=0&&j<2))return A.a(o,j)
g=o[j]
j=1-j
f=o[j]
g.toString
a1.f_(i,q,g,f)
a1.c=a1.b=0
a3=g.length
e=new A.ai(g,0,Math.min(a3,a3),0,!0)
for(a3=m<=1,d=a6,c=0;c<b0;++c,d+=a8){a1.eR(e,n)
b=a5.a
b=b==null?null:b.O(d,l,null)
a1.dJ(b==null?new A.H():b,n)
if(!a3||a2)for(a=0;a<a8;++a)for(b=l+a,a0=0;a0<m;++a0)a1.dJ(a5.ab(d+a0,b),n)}}},
iM(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)s=2
else if(a0===2)s=3
else{a0=a0===6?4:1
s=a0}r=s*a.c
q=a.a
p=a.b
o=B.a.j(q*r+7,3)
n=B.a.j(r+7,3)
m=A.S(o,0,!1,t.p)
l=A.j([m,m],t.S)
k=A.j([0,0,0,0],t.t)
a=a2.a
j=a.gG(a)
j.D()
for(i=0,h=0;i<p;++i,h=e){a=J.c(a1.a,a1.d++)
if(!(a>=0&&a<5))return A.a(B.ag,a)
g=B.ag[a]
f=a1.am(o)
a1.d=a1.d+(f.c-f.d)
B.c.h(l,h,f.a3())
if(!(h>=0&&h<2))return A.a(l,h)
e=1-h
b.f_(g,n,l[h],l[e])
b.c=b.b=0
a=l[h]
a0=a.length
d=new A.ai(a,0,Math.min(a0,a0),0,!0)
for(c=0;c<q;++c){b.eR(d,k)
b.dJ(j.gM(),k)
j.D()}}},
f_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(c)
t.T.a(d)
s=c.length
switch(a.a){case 0:break
case 1:for(r=J.al(c),q=b;q<s;++q){p=c.length
if(!(q<p))return A.a(c,q)
o=c[q]
n=q-b
if(!(n>=0&&n<p))return A.a(c,n)
r.h(c,q,o+c[n]&255)}break
case 2:for(r=J.al(c),p=d!=null,q=0;q<s;++q){if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
r.h(c,q,c[q]+m&255)}break
case 3:for(r=J.al(c),p=d!=null,q=0;q<s;++q){if(q<b)l=0
else{o=q-b
if(!(o>=0&&o<c.length))return A.a(c,o)
l=c[o]}if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
r.h(c,q,c[q]+B.a.j(l+m,1)&255)}break
case 4:for(r=J.al(c),p=d==null,o=!p,q=0;q<s;++q){n=q<b
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
r.h(c,q,c[q]+e&255)}break}},
bj(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.F()
if(b===16)return a.n()
for(s=a.c;r=n.c,r<b;){r=a.d
if(r>=s)throw A.h(A.o("Invalid PNG data."))
q=a.a
a.d=r+1
p=J.c(q,r)
r=n.c
n.b=B.a.Y(p,r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a2(n.b,s)
n.c=s
return r&o},
eR(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.c.h(b,0,q.bj(a,s.c))
return
case 2:B.c.h(b,0,q.bj(a,s.c))
B.c.h(b,1,q.bj(a,s.c))
B.c.h(b,2,q.bj(a,s.c))
return
case 3:B.c.h(b,0,q.bj(a,s.c))
return
case 4:B.c.h(b,0,q.bj(a,s.c))
B.c.h(b,1,q.bj(a,s.c))
return
case 6:B.c.h(b,0,q.bj(a,s.c))
B.c.h(b,1,q.bj(a,s.c))
B.c.h(b,2,q.bj(a,s.c))
B.c.h(b,3,q.bj(a,s.c))
return}throw A.h(A.o("Invalid color type: "+r+"."))},
dJ(a,b){var s,r,q,p,o,n,m,l,k,j
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
a.a8(p,p,p,p!==((q&255)<<24|r&255)>>>0?a.gE():0)
return}a.ap(b[0],0,0)
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
if(o!==((q&255)<<8|m&255)||p!==((l&255)<<8|k&255)||n!==((j&255)<<8|s&255)){a.a8(o,p,n,a.gE())
return}}a.ap(o,p,n)
return
case 3:a.sP(b[0])
return
case 4:a.ap(b[0],b[1],0)
return
case 6:a.a8(b[0],b[1],b[2],b[3])
return}throw A.h(A.o("Invalid color type: "+r+"."))}}
A.bO.prototype={
ad(){return"PnmFormat."+this.b}}
A.bP.prototype={
gR(){return this.a},
gL(){return this.b}}
A.j_.prototype={
bk(a){var s
this.b=A.t(a,!1,null,0)
s=this.cY()
if(s==="P1"||s==="P2"||s==="P5"||s==="P3"||s==="P6")return!0
return!1},
aV(a,b){if(this.aw(a)==null)return null
return this.aj(0)},
aw(a){var s,r,q=this
q.b=A.t(a,!1,null,0)
s=q.cY()
if(s==="P1"){r=q.a=new A.bP(B.a_)
r.e=B.c3}else if(s==="P2"){r=q.a=new A.bP(B.a_)
r.e=B.c4}else if(s==="P5"){r=q.a=new A.bP(B.a_)
r.e=B.aG}else if(s==="P3"){r=q.a=new A.bP(B.a_)
r.e=B.c5}else if(s==="P6"){r=q.a=new A.bP(B.a_)
r.e=B.aH}else return q.b=null
r.a=q.cm()
r=q.a
r.toString
r.b=q.cm()
r=q.a
if(r.a===0||r.b===0)return q.a=q.b=null
return r},
aj(a){var s,r,q,p,o,n=this,m=null,l=n.a
if(l==null)return m
s=l.e
if(s===B.c3){s=l.a
r=A.N(m,m,B.w,0,B.i,l.b,m,0,1,m,B.e,s,!1)
for(l=r.a,l=l.gG(l);l.D();){q=l.gM()
if(n.cY()==="1")q.ap(1,1,1)
else q.ap(0,0,0)}return r}else if(s===B.c4||s===B.aG){p=n.cm()
if(p===0)return m
l=n.a
s=l.a
l=l.b
r=A.N(m,m,n.fn(p),0,B.i,l,m,0,1,m,B.e,s,!1)
for(l=r.a,l=l.gG(l);l.D();){q=l.gM()
o=n.d1(n.a.e,p)
q.ap(o,o,o)}return r}else if(s===B.c5||s===B.aH){p=n.cm()
if(p===0)return m
l=n.a
s=l.a
l=l.b
r=A.N(m,m,n.fn(p),0,B.i,l,m,0,3,m,B.e,s,!1)
for(l=r.a,l=l.gG(l);l.D();)l.gM().ap(n.d1(n.a.e,p),n.d1(n.a.e,p),n.d1(n.a.e,p))
return r}return m},
fn(a){if(a>255)return B.l
if(a>15)return B.e
if(a>3)return B.C
if(a>1)return B.B
return B.w},
d1(a,b){if(a===B.aG||a===B.aH)return this.b.F()
return this.cm()},
cm(){var s,r,q=this.cY()
if(J.ba(q)===0)return 0
try{s=A.tf(q)
return s}catch(r){return 0}},
cY(){var s,r,q,p,o=this.b
if(o==null)return""
s=this.c
if(s.length!==0)return B.c.fA(s,0)
r=B.p.fF(o.k_())
if(r.length===0)return""
while(B.p.e1(r,"#"))r=B.p.fF(this.b.fz(70))
o=t.cc
q=A.u(new A.bg(A.j(r.split(" "),t.s),t.bB.a(new A.j0()),o),o.p("e.E"))
for(o=q.length,p=0;p<o;++p)if(B.p.e1(q[p],"#")){B.c.su(q,p)
break}B.c.dK(s,q)
if(s.length===0)return""
return B.c.fA(s,0)}}
A.j0.prototype={
$1(a){return A.b4(a)!==""},
$S:22}
A.hr.prototype={
sjL(a){t.T.a(a)},
sfS(a){t.T.a(a)},
sk5(a){t.T.a(a)},
sk6(a){t.T.a(a)}}
A.hs.prototype={
sbD(a){t.T.a(a)},
sbI(a){t.T.a(a)}}
A.bd.prototype={}
A.hv.prototype={
sbD(a){t.T.a(a)},
sbI(a){t.T.a(a)}}
A.hw.prototype={
sbD(a){t.T.a(a)},
sbI(a){t.T.a(a)}}
A.hz.prototype={
sbD(a){t.T.a(a)},
sbI(a){t.T.a(a)}}
A.hA.prototype={
sbD(a){t.T.a(a)},
sbI(a){t.T.a(a)}}
A.eJ.prototype={}
A.hy.prototype={}
A.j3.prototype={
hd(a){var s,r,q,p,o=this
a.n()
a.n()
a.n()
a.n()
s=B.a.V(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=o.e
p=a.n()
q.$flags&2&&A.b(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.f
q=a.n()
p.$flags&2&&A.b(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=o.r
p=a.n()
q.$flags&2&&A.b(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.w
q=a.n()
p.$flags&2&&A.b(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.cr.prototype={
fw(a,b,c,d,e,f,g){if(a.c-a.d<2)return
if(e==null)e=a.n()
switch(e){case 0:d.toString
this.j7(a,b,c,d)
break
case 1:if(f==null)f=this.j4(a,c)
d.toString
this.j6(a,b,c,d,f,g)
break
default:throw A.h(A.o("Unsupported compression: "+e))}},
jZ(a,b,c,d){return this.fw(a,b,c,d,null,null,0)},
j4(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.n()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
j7(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.f.aF(s,0,r,255)
return}this.c=a.al(r).a3()},
j6(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
if(d===16)l*=2
s=new Uint8Array(l)
this.c=s
r=f*c
q=e.length
if(r>=q){B.f.aF(s,0,l,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.am(e[r])
a.d=a.d+(m.c-m.d)
s=this.c
s.toString
this.i_(m,s,p)
p+=b}},
i_(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
a.d=q+1
q=J.c(p,q)
p=$.ao()
p.$flags&2&&A.b(p)
p[0]=q
q=$.aA()
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
A.b2.prototype={
ad(){return"PsdColorMode."+this.b}}
A.ht.prototype={
he(a){var s,r,q=this
q.as=A.t(a,!0,null,0)
q.iP()
if(q.c!==943870035)return
s=q.as.k()
q.as.al(s)
s=q.as.k()
q.at=q.as.al(s)
s=q.as.k()
q.ax=q.as.al(s)
r=q.as
q.ay=r.al(r.c-r.d)},
bF(){var s,r=this
if(r.c===943870035){s=r.as
s===$&&A.d()
s=s==null}else s=!0
if(s)return!1
r.j2()
r.j3()
r.j5()
r.ay=r.ax=r.at=r.as=null
return!0},
fl(){if(!this.bF())return null
return this.k7()},
k7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=a0.y
if(a2!=null)return a2
a2=a0.a
a2=A.N(a1,a1,B.e,0,B.i,a0.b,a1,0,4,a1,B.e,a2,!1)
a0.y=a2
a2.da(0)
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
g=h==null?a1:h.O(i,l,a1)
if(g==null)g=new A.H()
f=B.b.i(g.gm())
e=B.b.i(g.gt())
d=B.b.i(g.gq())
c=B.b.i(g.gv())
j.toString
if(j>=0&&j<a0.a&&q&&m<a0.b){h=r.b
h.toString
b=a0.y.a
a=b==null?a1:b.O(h+i,k,a1)
if(a==null)a=new A.H()
a0.hq(B.b.i(a.gm()),B.b.i(a.gt()),B.b.i(a.gq()),B.b.i(a.gv()),f,e,d,c,o,p,a)}++i;++j}++l;++m}}a2=a0.y
a2.toString
return a2},
hq(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n=h/255*j
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
case 1768188278:p=A.j5(a,e)
q=A.j5(b,f)
r=A.j5(c,g)
s=h
break
case 1818391150:p=A.j7(a,e)
q=A.j7(b,f)
r=A.j7(c,g)
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
case 1935897198:p=A.lC(a,e)
q=A.lC(b,f)
r=A.lC(c,g)
s=h
break
case 1684633120:p=A.j6(a,e)
q=A.j6(b,f)
r=A.j6(c,g)
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
case 1870030194:p=A.lA(a,e,d,h)
q=A.lA(b,f,d,h)
r=A.lA(c,g,d,h)
s=h
break
case 1934387572:p=A.lD(a,e)
q=A.lD(b,f)
r=A.lD(c,g)
s=h
break
case 1749838196:p=A.ly(a,e)
q=A.ly(b,f)
r=A.ly(c,g)
s=h
break
case 1984719220:p=A.lE(a,e)
q=A.lE(b,f)
r=A.lE(c,g)
s=h
break
case 1816947060:p=A.lz(a,e)
q=A.lz(b,f)
r=A.lz(c,g)
s=h
break
case 1884055924:p=A.lB(a,e)
q=A.lB(b,f)
r=A.lB(c,g)
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
case 1936553316:p=A.lx(a,e)
q=A.lx(b,f)
r=A.lx(c,g)
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
k.sm(B.b.i(a*o+p*n))
k.st(B.b.i(b*o+q*n))
k.sq(B.b.i(c*o+r*n))
k.sv(B.b.i(d*o+s*n))},
iP(){var s,r,q=this,p=q.as
p===$&&A.d()
q.c=p.k()
p=q.as.n()
q.d=p
if(p!==1){q.c=0
return}s=q.as.al(6)
for(r=0;r<6;++r)if(J.c(s.a,s.d+r)!==0){q.c=0
return}q.e=q.as.n()
q.b=q.as.k()
q.a=q.as.k()
q.f=q.as.n()
p=q.as.n()
if(!(p<8))return A.a(B.bU,p)
q.r=B.bU[p]},
j2(){var s,r,q,p,o,n,m=this,l=m.at
l.d=l.b
for(l=m.z;s=m.at,s.d<s.c;){r=s.k()
q=m.at.n()
s=m.at
p=J.c(s.a,s.d++)
m.at.af(p)
if((p&1)===0)++m.at.d
p=m.at.k()
s=m.at
o=s.am(p)
n=s.d+(o.c-o.d)
s.d=n
if((p&1)===1)s.d=n+1
if(r===943868237)l.h(0,q,new A.hu())}},
j3(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.ax
h.d=h.b
s=h.k()
if((s&1)!==0)++s
r=i.ax.al(s)
h=i.w
B.c.da(h)
if(s>0){q=r.n()
p=$.an()
p.$flags&2&&A.b(p)
p[0]=q
q=$.az()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0)o=-o
for(q=t.N,p=t.ha,n=t.e,m=t.af,l=0;l<o;++l){k=new A.hx(A.I(q,p),A.j([],n),A.j([],m))
k.hf(r)
B.c.N(h,k)}}for(l=0;l<h.length;++l)h[l].jV(r,i)
s=i.ax.k()
j=i.ax.al(s)
if(s>0){j.n()
j.n()
j.n()
j.n()
j.n()
j.n()
j.F()}},
j5(){var s,r,q,p,o,n,m=this,l=m.ay
l.d=l.b
s=l.n()
if(s===1){l=m.b
r=m.e
r===$&&A.d()
q=l*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=m.ay.n()}else p=null
m.x=t.eS.a(A.j([],t.c))
o=0
for(;;){l=m.e
l===$&&A.d()
if(!(o<l))break
l=m.x
r=m.ay
r.toString
n=o===3?-1:o
n=new A.cr(n)
n.fw(r,m.a,m.b,m.f,s,p,o)
B.c.N(l,n);++o}m.y=A.n_(m.r,m.f,m.a,m.b,m.x)},
$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.hu.prototype={}
A.hx.prototype={
hf(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a4.k(),a3=$.M()
a3.$flags&2&&A.b(a3)
a3[0]=a2
a2=$.a6()
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
s=a4.n()
for(r=0;r<s;++r){a2=a4.n()
a3=$.an()
a3.$flags&2&&A.b(a3)
a3[0]=a2
a2=$.az()
if(0>=a2.length)return A.a(a2,0)
q=a2[0]
a4.k()
B.c.N(a1.as,new A.cr(q))}p=a4.k()
if(p!==943868237)throw A.h(A.o("Invalid PSD layer signature: "+B.a.cC(p,16)))
a1.r=a4.k()
a1.w=a4.F()
a4.F()
a1.y=a4.F()
if(a4.F()!==0)throw A.h(A.o("Invalid PSD layer data"))
o=a4.k()
n=a4.al(o)
if(o>0){o=n.k()
if(o>0){m=n.al(o)
a2=m.d
m.k()
m.k()
m.k()
m.k()
m.F()
m.F()
if(m.c-a2===20)m.d+=2
else{m.F()
m.F()
m.k()
m.k()
m.k()
m.k()}}o=n.k()
if(o>0)new A.j3().hd(n.al(o))
o=n.F()
n.af(o)
l=4-B.a.a_(o,4)-1
if(l>0)n.d+=l
for(a2=n.c,a3=a1.ay,k=a1.cy,j=t.t,i=t.cE;n.d<a2;){p=n.k()
if(p!==943868237)throw A.h(A.o("PSD invalid signature for layer additional data: "+B.a.cC(p,16)))
h=n.af(4)
o=n.k()
g=n.am(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a3.h(0,h,A.pw(h,g))
if(h==="lrFX"){e=A.p(i.a(a3.l(0,"lrFX")).b,null,0)
e.n()
d=e.n()
for(c=0;c<d;++c){e.af(4)
b=e.af(4)
a=e.k()
if(b==="dsdw"){a0=new A.hs()
B.c.N(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbD(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
e.af(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
a0.sbI(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))}else if(b==="isdw"){a0=new A.hw()
B.c.N(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbD(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
e.af(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
a0.sbI(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))}else if(b==="oglw"){a0=new A.hz()
B.c.N(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbD(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
e.af(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
if(a0.a===2)a0.sbI(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))}else if(b==="iglw"){a0=new A.hv()
B.c.N(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbD(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
e.af(8)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
if(a0.a===2){J.c(e.a,e.d++)
a0.sbI(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))}}else if(b==="bevl"){a0=new A.hr()
B.c.N(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.af(8)
e.af(8)
a0.sjL(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
a0.sfS(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
J.c(e.a,e.d++)
if(a0.a===2){a0.sk5(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
a0.sk6(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))}}else if(b==="sofi"){a0=new A.hA()
B.c.N(k,a0)
a0.a=e.k()
e.af(4)
a0.sbD(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))
J.c(e.a,e.d++)
J.c(e.a,e.d++)
a0.sbI(A.j([e.n(),e.n(),e.n(),e.n(),e.n()],j))}else e.d+=a}}}}},
jV(a,b){var s,r,q,p,o,n=this,m=0
for(;;){s=n.as
s===$&&A.d()
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.d()
q=n.f
q===$&&A.d()
s.jZ(a,r,q,b.f);++m}r=b.r
q=b.f
p=n.e
p===$&&A.d()
o=n.f
o===$&&A.d()
n.cx=A.n_(r,q,p,o,s)}}
A.dk.prototype={}
A.j4.prototype={
aV(a,b){var s,r,q,p=null,o=A.lw(a)
this.a=o
s=1
if(s===1){o=o.fl()
return o}for(r=p,q=0;q<s;++q){o=this.a
b=o==null?p:o.fl()
if(b==null)continue
if(r==null){b.w=B.aZ
r=b}else r.b2(b)}return r},
aw(a){return this.a=A.lw(a)}}
A.hB.prototype={}
A.dn.prototype={}
A.aw.prototype={
b6(a,b){var s=this
return new A.aw(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)}}
A.dl.prototype={$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.dm.prototype={$iJ:1,
gL(){return this.f},
gR(){return this.r}}
A.eK.prototype={$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.aQ.prototype={
sco(a){var s=this.a,r=this.b+1
s.$flags&2&&A.b(s)
if(!(r<s.length))return A.a(s,r)
s[r]=a},
cF(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.q,s)
return new A.dn(B.q[s],B.q[q>>>4&31],B.v[q&15])}else return new A.dn(B.v[q>>>7&15],B.v[q>>>3&15],B.ai[q&7])},
cH(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.q,s)
return new A.aw(B.q[s],B.q[q>>>4&31],B.v[q&15],255)}else return new A.aw(B.v[q>>>7&15],B.v[q>>>3&15],B.ai[q&7],B.ai[q>>>11&7])},
cG(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.q,s)
return new A.dn(B.q[s],B.q[q>>>5&31],B.q[q&31])}else return new A.dn(B.v[q>>>8&15],B.v[q>>>4&15],B.v[q&15])},
cI(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.q,s)
return new A.aw(B.q[s],B.q[q>>>5&31],B.q[q&31],255)}else return new A.aw(B.v[q>>>8&15],B.v[q>>>4&15],B.v[q&15],B.ai[q>>>12&7])},
cj(){var s=this,r=s.c?1:0,q=s.d,p=s.e?1:0,o=s.f,n=s.r?1:0
return(r|(q&16383)<<1|p<<15|(o&32767)<<16|n<<31)>>>0},
bt(){var s,r=this,q=r.a,p=r.b+1
if(!(p<q.length))return A.a(q,p)
s=q[p]
r.c=(s&1)===1
r.sco(r.cj())
r.d=s>>>1&16383
r.sco(r.cj())
r.e=(s>>>15&1)===1
r.sco(r.cj())
r.f=s>>>16&32767
r.sco(r.cj())
r.r=(s>>>31&1)===1
r.sco(r.cj())}}
A.j8.prototype={
aw(a){var s,r=this,q=a.length,p=q-(q>>>1&1431655765)>>>0
p=(p&858993459)+(p>>>2&858993459)
if((p+(p>>>4)>>>0&252645135)*16843009>>>0>>>24===1){s=r.hM(a)
if(s!=null){r.a=a
return r.b=s}}s=r.hZ(a)
if(s!=null){r.a=a
return r.b=s}s=r.hX(a)
if(s!=null){r.a=a
return r.b=s}return null},
hZ(a){var s,r,q=A.t(a,!1,null,0)
if(q.k()!==52)return null
if(q.k()!==55727696)return null
s=A.j([0,0,0,0],t.t)
r=new A.dm(s)
q.k()
r.b=q.k()
B.c.h(s,0,q.F())
B.c.h(s,1,q.F())
B.c.h(s,2,q.F())
B.c.h(s,3,q.F())
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
hX(a){var s,r,q=A.t(a,!1,null,0)
if(q.k()!==52)return null
s=new A.dl()
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
hM(a){var s,r,q,p,o,n,m=null,l=a.length,k=A.t(a,!1,m,0)
if(k.k()!==0)return m
s=new A.eK()
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
if((B.a.S(64,n)&l)>>>0!==0){p=B.a.S(16,o)
q=1
break}if((B.a.S(128,n)&l)>>>0!==0){p=B.a.S(16,o)
break}++o}if(o===10)return m}if((q+1)*2===4)return m
s.b=s.a=p
return s},
aj(a){var s,r,q=this,p=q.b
if(p==null||q.a==null)return null
if(p instanceof A.eK){p=p.a
s=q.b.gL()
r=q.a
r.toString
return q.dr(p,s,r)}else if(p instanceof A.dl){p=q.a
p.toString
return q.hW(p)}else if(p instanceof A.dm){p=q.a
p.toString
return q.hY(p)}return null},
aV(a,b){if(this.aw(a)==null)return null
return this.aj(0)},
hW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=a.length
if(e<52||g.b==null)return f
s=g.b
s.toString
t.fi.a(s)
r=A.t(a,!1,f,0)
r.d+=52
q=s.Q
if(q<1)q=(s.d&4096)!==0?6:1
if(q!==1)return f
p=s.a
o=s.b
if(p*o*s.f/8>e-52)return f
switch(s.d&255){case 16:n=A.N(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();){m=s.gM()
l=J.c(r.a,r.d++)
k=J.c(r.a,r.d++)
m.sm(k&240)
m.st((k&15)<<4)
m.sq(l&240)
m.sv((l&15)<<4)}return n
case 17:n=A.N(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();){m=s.gM()
j=r.n()
i=(j&1)!==0?255:0
m.sm(j>>>8&248)
m.st(j>>>3&248)
m.sq((j&62)<<2)
m.sv(i)}return n
case 18:n=A.N(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();){m=s.gM()
m.sm(J.c(r.a,r.d++))
m.st(J.c(r.a,r.d++))
m.sq(J.c(r.a,r.d++))
m.sv(J.c(r.a,r.d++))}return n
case 19:n=A.N(f,f,B.e,0,B.i,o,f,0,3,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();){m=s.gM()
j=r.n()
m.sm(j>>>8&248)
m.st(j>>>3&252)
m.sq((j&31)<<3)}return n
case 20:n=A.N(f,f,B.e,0,B.i,o,f,0,3,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();){m=s.gM()
j=r.n()
m.sm((j&31)<<3)
m.st(j>>>2&248)
m.sq(j>>>7&248)}return n
case 21:n=A.N(f,f,B.e,0,B.i,o,f,0,3,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();){m=s.gM()
m.sm(J.c(r.a,r.d++))
m.st(J.c(r.a,r.d++))
m.sq(J.c(r.a,r.d++))}return n
case 22:n=A.N(f,f,B.e,0,B.i,o,f,0,1,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();)s.gM().sm(J.c(r.a,r.d++))
return n
case 23:n=A.N(f,f,B.e,0,B.i,o,f,0,4,f,B.e,p,!1)
for(s=n.a,s=s.gG(s);s.D();){m=s.gM()
i=J.c(r.a,r.d++)
h=J.c(r.a,r.d++)
m.sm(h)
m.st(h)
m.sq(h)
m.sv(i)}return n
case 24:return f
case 25:return s.y===0?g.er(p,o,r.a3()):g.dr(p,o,r.a3())}return f},
hY(a){var s,r=this.b
if(!(r instanceof A.dm))return null
s=A.t(a,!1,null,0)
s.d=(s.d+=52)+r.Q
if(r.c[0]===0)switch(r.b){case 2:return this.er(r.r,r.f,s.a3())
case 3:return this.dr(r.r,r.f,s.a3())}return null},
er(c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.N(b6,b6,B.e,0,B.i,c7,b6,0,3,b6,B.e,c6,!1),b8=c6/4|0,b9=b8-1,c0=J.aC(B.f.gA(c8),0,null),c1=new A.aQ(c0),c2=new A.aQ(J.aC(B.f.gA(c8),0,null)),c3=new A.aQ(J.aC(B.f.gA(c8),0,null)),c4=new A.aQ(J.aC(B.f.gA(c8),0,null)),c5=new A.aQ(J.aC(B.f.gA(c8),0,null))
for(s=c0.length,r=0,q=0;r<b8;++r,q+=4)for(p=0,o=0;p<b8;++p,o+=4){c1.b=A.br(p,r)<<1>>>0
c1.bt()
n=c1.b
if(!(n<s))return A.a(c0,n)
m=c0[n]
l=c1.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&b9)>>>0
h=(i+1&b9)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&b9)>>>0
e=(f+1&b9)>>>0
c2.b=A.br(f,i)<<1>>>0
c2.bt()
c3.b=A.br(e,i)<<1>>>0
c3.bt()
c4.b=A.br(f,h)<<1>>>0
c4.bt()
c5.b=A.br(e,h)<<1>>>0
c5.bt()
d=c2.cF()
if(!(k>=0&&k<16))return A.a(B.m,k)
c=B.m[k][0]
b=c3.cF()
a=B.m[k][1]
a0=c4.cF()
a1=B.m[k][2]
a2=c5.cF()
a3=B.m[k][3]
a4=c2.cG()
a5=B.m[k][0]
a6=c3.cG()
a7=B.m[k][1]
a8=c4.cG()
a9=B.m[k][2]
b0=c5.cG()
b1=B.m[k][3]
b2=B.bI[l+m&3]
b3=b2[0]
b4=b2[1]
b5=b7.a
if(b5!=null)b5.a4(g+o,n,(d.a*c+b.a*a+a0.a*a1+a2.a*a3)*b3+(a4.a*a5+a6.a*a7+a8.a*a9+b0.a*b1)*b4>>>7,(d.b*c+b.b*a+a0.b*a1+a2.b*a3)*b3+(a4.b*a5+a6.b*a7+a8.b*a9+b0.b*b1)*b4>>>7,(d.c*c+b.c*a+a0.c*a1+a2.c*a3)*b3+(a4.c*a5+a6.c*a7+a8.c*a9+b0.c*b1)*b4>>>7)
m=m>>>2;++k}}}return b7},
dr(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=A.N(a4,a4,B.e,0,B.i,b5,a4,0,4,a4,B.e,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.aC(B.f.gA(b6),0,null),a9=new A.aQ(a8),b0=new A.aQ(J.aC(B.f.gA(b6),0,null)),b1=new A.aQ(J.aC(B.f.gA(b6),0,null)),b2=new A.aQ(J.aC(B.f.gA(b6),0,null)),b3=new A.aQ(J.aC(B.f.gA(b6),0,null))
for(s=a8.length,r=0,q=0;r<a6;++r,q+=4)for(p=0,o=0;p<a6;++p,o+=4){a9.b=A.br(p,r)<<1>>>0
a9.bt()
n=a9.b
if(!(n<s))return A.a(a8,n)
m=a8[n]
l=a9.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&a7)>>>0
h=(i+1&a7)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&a7)>>>0
e=(f+1&a7)>>>0
b0.b=A.br(f,i)<<1>>>0
b0.bt()
b1.b=A.br(e,i)<<1>>>0
b1.bt()
b2.b=A.br(f,h)<<1>>>0
b2.bt()
b3.b=A.br(e,h)<<1>>>0
b3.bt()
d=b0.cH()
if(!(k>=0&&k<16))return A.a(B.m,k)
c=B.m[k][0]
b=b1.cH()
a=B.m[k][1]
a=new A.aw(d.a*c,d.b*c,d.c*c,d.d*c).b6(0,new A.aw(b.a*a,b.b*a,b.c*a,b.d*a))
b=b2.cH()
c=B.m[k][2]
c=a.b6(0,new A.aw(b.a*c,b.b*c,b.c*c,b.d*c))
b=b3.cH()
a=B.m[k][3]
a0=c.b6(0,new A.aw(b.a*a,b.b*a,b.c*a,b.d*a))
a=b0.cI()
b=B.m[k][0]
c=b1.cI()
d=B.m[k][1]
d=new A.aw(a.a*b,a.b*b,a.c*b,a.d*b).b6(0,new A.aw(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.cI()
b=B.m[k][2]
b=d.b6(0,new A.aw(c.a*b,c.b*b,c.c*b,c.d*b))
c=b3.cI()
d=B.m[k][3]
a1=b.b6(0,new A.aw(c.a*d,c.b*d,c.c*d,c.d*d))
a2=B.bI[l+m&3]
d=a2[0]
c=a2[1]
b=a2[2]
a=a2[3]
a3=a5.a
if(a3!=null)a3.ai(g+o,n,a0.a*d+a1.a*c>>>7,a0.b*d+a1.b*c>>>7,a0.c*d+a1.c*c>>>7,a0.d*b+a1.d*a>>>7)
m=m>>>2;++k}}}return a5}}
A.eO.prototype={
c3(a){var s,r,q=this
if(a.c-a.d<18)return
q.a=a.F()
q.b=a.F()
s=a.F()
if(s<12){if(!(s>=0))return A.a(B.bF,s)
r=B.bF[s]}else r=B.am
q.c=r
a.n()
q.e=a.n()
q.f=a.F()
a.n()
a.n()
q.x=a.n()
q.y=a.n()
q.z=a.F()
q.Q=a.F()},
fs(){var s=this,r=s.z
if(r!==8&&r!==16&&r!==24&&r!==32)return!1
r=s.c
if(r===B.H||r===B.I){if(s.e>256||s.b!==1)return!1
r=s.f
if(r!==16&&r!==24&&r!==32)return!1}else if(s.b===1)return!1
return!0},
$iJ:1,
gR(){return this.x},
gL(){return this.y}}
A.ax.prototype={
ad(){return"TgaImageType."+this.b}}
A.jj.prototype={
aV(a,b){if(this.aw(a)==null)return null
return this.aj(0)},
aw(a){var s,r,q,p,o=this
o.a=new A.eO(B.am)
s=A.t(a,!1,null,0)
o.b=s
r=s.al(18)
o.a.c3(r)
s=o.a
if(!s.fs())return null
q=o.b
q.d+=s.a
p=s.c
if(p===B.H||p===B.I)s.as=q.al(s.e*B.a.j(s.f,3)).a3()
s=o.a
s.ax=o.b.d
return s},
aj(a){var s=this,r=s.a
if(r==null)return null
r=r.c
if(r===B.cb)return s.eq()
else if(r===B.ca||r===B.I)return s.i0()
else if(r===B.H)return s.eq()
return null},
em(a,b){var s,r,q,p,o,n,m,l=this,k=A.t(a,!1,null,0),j=l.a.f
if(j===16){j=l.b
j===$&&A.d()
s=j.n()
r=s>>>7&248
q=s>>>2&248
p=(s&31)<<3
o=(s&32768)!==0?0:255
for(n=0;n<l.a.e;++n){b.bq(n,r)
b.bp(n,q)
b.bo(n,p)
b.bn(n,o)}}else{m=j===32
for(n=0;n<l.a.e;++n){p=J.c(k.a,k.d++)
q=J.c(k.a,k.d++)
r=J.c(k.a,k.d++)
o=m?J.c(k.a,k.d++):255
b.bq(n,r)
b.bp(n,q)
b.bo(n,p)
b.bn(n,o)}}},
i0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.a,b=c.z,a=b===16,a0=a||b===32,a1=c.x,a2=c.y,a3=a0?4:3
c=c.c
s=A.N(d,d,B.e,0,B.i,a2,d,0,a3,d,B.e,a1,c===B.H||c===B.I)
c=s.a
if((c==null?d:c.gT())!=null){c=e.a.as
c.toString
a1=s.a
a1=a1==null?d:a1.gT()
a1.toString
e.em(c,a1)}r=s.gR()
q=s.gL()-1
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
if(a1!=null)a1.aH(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}else{a1=e.b
if(a){i=a1.n()
l=i>>>7&248
h=i>>>2&248
g=(i&31)<<3
f=(i&32768)!==0?0:255
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.ai(p,q,l,h,g,f)
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
if(a1!=null)a1.ai(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}}else if(c)for(k=0;k<n;++k){a1=e.b
l=J.c(a1.a,a1.d++)
j=p+1
a1=s.a
if(a1!=null)a1.aH(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}else if(a)for(k=0;k<n;++k){i=e.b.n()
f=(i&32768)!==0?0:255
j=p+1
a1=s.a
if(a1!=null)a1.ai(p,q,i>>>7&248,i>>>2&248,(i&31)<<3,f)
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
if(a1!=null)a1.ai(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}if(p>=r){--q
if(q<0)break
p=0}}return s},
eq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b
b===$&&A.d()
s=d.a
b.d=s.ax
r=s.z
b=r===16
q=!0
if(!b)if(r!==32){p=s.c
if(p===B.H||p===B.I){p=s.f
p=p===16||p===32}else p=!1
q=p}p=s.x
o=s.y
n=q?4:3
s=s.c
m=A.N(c,c,B.e,0,B.i,o,c,0,n,c,B.e,p,s===B.H||s===B.I)
s=d.a
p=s.c
if(p===B.H||p===B.I){s=s.as
s.toString
p=m.a
p=p==null?c:p.gT()
p.toString
d.em(s,p)}if(r===8)for(l=m.gL()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
b=d.b
j=J.c(b.a,b.d++)
b=m.a
if(b!=null)b.aH(k,l,j);++k}}else if(b)for(l=m.gL()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
i=d.b.n()
h=(i&32768)!==0?0:255
b=m.a
if(b!=null)b.ai(k,l,i>>>7&248,i>>>2&248,(i&31)<<3,h);++k}}else for(l=m.gL()-1;l>=0;--l){k=0
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
if(b!=null)b.ai(k,l,e,f,g,h);++k}}return m}}
A.jk.prototype={
ae(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.F()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.Y(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.y,q)
r=p+(o&B.y[q])
a-=q
n.c=8
n.b=J.c(s.a,s.d++)}if(a>0){if(q===0){n.c=8
n.b=s.F()}s=B.a.Y(r,a)
q=n.b
p=n.c-a
q=B.a.br(q,p)
if(!(a<9))return A.a(B.y,a)
r=s+(q&B.y[a])
n.c=p}return r}}
A.hG.prototype={
B(a){var s=this,r=s.a,q=$.ma().l(0,r)
if(q!=null)return q.a+": "+s.b.B(0)+" "+s.c
return"<"+r+">: "+s.b.B(0)+" "+s.c},
bd(){var s,r,q,p,o=this,n=o.e
if(n!=null)return n
n=o.f
n.d=o.d
s=o.c
r=o.b
if(r!==B.d){q=r.a
if(!(q<14))return A.a(B.t,q)
q=B.t[q]}else q=0
p=n.al(s*q)
switch(r.a){case 1:return o.e=new A.bm(new Uint8Array(A.z(p.al(s).a3())))
case 2:return o.e=new A.c6(s===0?"":p.af(s-1))
case 7:return o.e=new A.bm(new Uint8Array(A.z(p.al(s).a3())))
case 3:return o.e=A.mB(p,s)
case 4:return o.e=A.mw(p,s)
case 5:return o.e=A.mx(p,s)
case 11:return o.e=A.mC(p,s)
case 12:return o.e=A.mv(p,s)
case 6:return o.e=new A.bH(new Int8Array(A.z(J.l1(B.f.gA(p.a3()),0,s))))
case 8:return o.e=A.mA(p,s)
case 9:return o.e=A.my(p,s)
case 10:return o.e=A.mz(p,s)
case 13:case 0:return null}}}
A.jm.prototype={
jv(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.V(p.a+7,8)
for(r=0,q=0;q<d;++q){p.dn(a,r,c)
r+=s}},
dn(a,b,c){var s,r,q,p,o,n,m,l,k=this
k.d=0
for(s=k.a,r=!0;c<s;){while(r){q=k.bO(10)
if(!(q<1024))return A.a(B.ad,q)
p=B.ad[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|k.aU(2))>>>0
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
n=B.a.j(p,1)
c+=B.a.j(p,4)&4095
k.aC(4-(n&7))}else if(o===0)throw A.h(A.o("TIFFFaxDecoder0"))
else if(o===15)throw A.h(A.o("TIFFFaxDecoder1"))
else{c+=B.a.j(p,5)&2047
k.aC(10-o)
if((p&1)===0){B.c.h(k.f,k.d++,c)
r=!1}}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}while(!r){q=k.aU(4)
if(!(q<16))return A.a(B.a7,q)
p=B.a7[q]
m=p>>>5&2047
l=!0
if(m===100){q=k.bO(9)
if(!(q<512))return A.a(B.a9,q)
p=B.a9[q]
o=B.a.j(p,1)&15
m=B.a.j(p,5)&2047
if(o===12){k.aC(5)
q=k.aU(4)
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
n=B.a.j(p,1)
m=B.a.j(p,4)&4095
k.b1(a,b,c,m)
c+=m
k.aC(4-(n&7))}else if(o===15)throw A.h(A.o("TIFFFaxDecoder2"))
else{k.b1(a,b,c,m)
c+=m
k.aC(9-o)
if((p&1)===0){B.c.h(k.f,k.d++,c)
r=l}}}else{if(m===200){q=k.aU(2)
if(!(q<4))return A.a(B.a6,q)
p=B.a6[q]
m=p>>>5&2047
k.b1(a,b,c,m)
c+=m
k.aC(2-(p>>>1&15))
B.c.h(k.f,k.d++,c)}else{k.b1(a,b,c,m)
c+=m
k.aC(4-(p>>>1&15))
B.c.h(k.f,k.d++,c)}r=l}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}}B.c.h(k.f,k.d++,c)},
jw(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.V(s+7,8)
q=A.S(2,null,!1,t.I)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.eN()!==1)throw A.h(A.o("TIFFFaxDecoder3"))
a0.dn(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.eN()===0){n=a0.e
a0.e=a0.f
a0.f=n
a0.y=0
m=a3
l=-1
k=!0
j=0
for(;;){m.toString
if(!(m<s))break
a0.eC(l,k,q)
i=q[0]
h=q[1]
g=a0.aU(7)
if(!(g<128))return A.a(B.ab,g)
g=B.ab[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.b1(a1,p,m,h-m)}a0.aC(7-e)
m=h
l=m}else if(f===1){a0.aC(7-e)
d=j+1
c=d+1
if(k){m+=a0.cS()
B.c.h(a0.f,j,m)
b=a0.cR()
a0.b1(a1,p,m,b)
m+=b
B.c.h(a0.f,d,m)}else{b=a0.cR()
a0.b1(a1,p,m,b)
m+=b
B.c.h(a0.f,j,m)
m+=a0.cS()
B.c.h(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.h(a0.f,j,a)
k=!k
if(k)a0.b1(a1,p,m,a-m)
a0.aC(7-e)}else throw A.h(A.o("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.c.h(a0.f,j,m)
a0.d=j+1}else a0.dn(a1,p,a3)
p+=r}},
jA(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a4.r=a6
a4.z=4
a4.x=a4.w=0
s=a4.a
r=B.a.V(s+7,8)
q=A.S(2,null,!1,t.I)
p=a4.f
a4.d=0
a4.d=1
B.c.h(p,0,s)
B.c.h(p,a4.d++,s)
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
a4.eC(k,j,q)
h=q[0]
g=q[1]
f=a4.aU(7)
if(!(f<128))return A.a(B.ab,f)
f=B.ab[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a4.b1(a5,o,l,g-l)}a4.aC(7-d)
l=g
k=l}else if(e===1){a4.aC(7-d)
c=i+1
b=c+1
if(j){l+=a4.cS()
B.c.h(m,i,l)
a=a4.cR()
a4.b1(a5,o,l,a)
l+=a
B.c.h(m,c,l)}else{a=a4.cR()
a4.b1(a5,o,l,a)
l+=a
B.c.h(m,i,l)
l+=a4.cS()
B.c.h(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.c.h(m,i,a0)
j=!j
if(j)a4.b1(a5,o,l,a0-l)
a4.aC(7-d)
l=a0
i=c
k=l}else if(e===11){if(a4.aU(3)!==7)throw A.h(A.o("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;j=a3){while(a4.aU(1)!==1)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
a3=a4.aU(1)===0
if(a3){if(!j){c=i+1
B.c.h(m,i,l)
i=c}}else if(j){c=i+1
B.c.h(m,i,l)
i=c}j=a3
a2=!0}a3=a1===5
if(a3){if(!j){c=i+1
B.c.h(m,i,l)
i=c}l+=a1}else{l+=a1
c=i+1
B.c.h(m,i,l)
a4.b1(a5,o,l,1);++l
i=c}}}else throw A.h(A.o("TIFFFaxDecoder5 "+e))}B.c.h(m,i,l)
a4.d=i+1
o+=r}},
cS(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.bO(10)
if(!(q<1024))return A.a(B.ad,q)
p=B.ad[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|m.aU(2))>>>0
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
n=B.a.j(p,1)
s+=B.a.j(p,4)&4095
m.aC(4-(n&7))}else if(o===0)throw A.h(A.o("TIFFFaxDecoder0"))
else if(o===15)throw A.h(A.o("TIFFFaxDecoder1"))
else{s+=B.a.j(p,5)&2047
m.aC(10-o)
if((p&1)===0)r=!1}}return s},
cR(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.aU(4)
if(!(q<16))return A.a(B.a7,q)
p=B.a7[q]
o=p>>>5&2047
if(o===100){q=l.bO(9)
if(!(q<512))return A.a(B.a9,q)
p=B.a9[q]
n=B.a.j(p,1)&15
m=B.a.j(p,5)
if(n===12){l.aC(5)
q=l.aU(4)
if(!(q<16))return A.a(B.G,q)
p=B.G[q]
m=B.a.j(p,1)
s+=B.a.j(p,4)&4095
l.aC(4-(m&7))}else if(n===15)throw A.h(A.o("TIFFFaxDecoder2"))
else{s+=m&2047
l.aC(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.aU(2)
if(!(q<4))return A.a(B.a6,q)
p=B.a6[q]
s+=p>>>5&2047
l.aC(2-(p>>>1&15))}else{s+=o
l.aC(4-(p>>>1&15))}r=!0}}return s},
eN(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.bO(12)!==1)throw A.h(A.o("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.bO(s)!==0)throw A.h(A.o(p))
if(s<4)if(q.bO(8)!==0)throw A.h(A.o(p))
while(r=q.bO(8),r!==1)if(r!==0)throw A.h(A.o(p))}if(q.at===0)return 1
else return q.aU(1)},
eC(a,b,c){var s,r,q,p,o,n,m=this
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
B.c.h(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.c.h(c,1,s[n])}},
b1(a,b,c,d){var s,r,q,p,o,n=8*b+A.w(c),m=n+d,l=B.a.j(n,3),k=n&7
if(k>0){s=B.a.Y(1,7-k)
r=J.c(a.a,a.d+l)
for(;;){if(!(s>0&&n<m))break
r=(r|s)>>>0
s=s>>>1;++n}a.h(0,l,r)}l=B.a.j(n,3)
for(q=m-7;n<q;l=p){p=l+1
J.x(a.a,a.d+l,255)
n+=8}while(n<m){l=B.a.j(n,3)
q=J.c(a.a,a.d+l)
o=B.a.Y(1,7-(n&7))
J.x(a.a,a.d+l,(q|o)>>>0);++n}},
bO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
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
n=B.S[J.c(e.a,e.d+(q+2))&255]}}}else throw A.h(A.o("TIFFFaxDecoder7"))
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
h=B.a.Y(m&B.y[l],k)
if(!(i>=0))return A.a(B.Q,i)
g=B.a.a2(o&B.Q[i],8-i)
if(j!==0){g=B.a.Y(g,j)
if(!(j<9))return A.a(B.Q,j)
g|=B.a.a2(n&B.Q[j],8-j)
f.x=e+1
f.w=j}else if(i===8){f.w=0
f.x=e+1}else f.w=i
return(h|g)>>>0},
aU(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.r
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
o=B.S[J.c(h.a,h.d+(q+1))&255]}}else throw A.h(A.o("TIFFFaxDecoder7"))
h=i.w
h.toString
m=8-h
l=a-m
k=m-a
if(k>=0){if(!(m>=0&&m<9))return A.a(B.y,m)
j=B.a.a2(n&B.y[m],k)
h+=a
i.w=h
if(h===8){i.w=0
h=i.x
h.toString
i.x=h+1}}else{if(!(m>=0&&m<9))return A.a(B.y,m)
j=B.a.Y(n&B.y[m],-k)
if(!(l>=0&&l<9))return A.a(B.Q,l)
j=(j|B.a.a2(o&B.Q[l],8-l))>>>0
h=i.x
h.toString
i.x=h+1
i.w=l}return j},
aC(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s}}
A.hH.prototype={
hh(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=A.p(a0,c,0),a=a0.n()
for(s=d.a,r=0;r<a;++r){q=a0.n()
p=a0.n()
o=a0.k()
if(p>13){a0.d+=4
continue}n=B.bB[p]
if(o*B.t[p]>4)m=a0.k()
else{m=a0.d
a0.d=m+4}l=new A.hG(q,n,o,m,b)
s.h(0,q,l)
if(q===256){k=l.bd()
k=k==null?c:k.i(0)
d.b=k==null?0:k}else if(q===257){k=l.bd()
k=k==null?c:k.i(0)
d.c=k==null?0:k}else if(q===262){j=l.bd()
i=j==null?c:j.i(0)
if(i==null)i=17
if(i<17){if(!(i>=0))return A.a(B.bv,i)
d.d=B.bv[i]}else d.d=B.aL}else if(q===259){k=l.bd()
k=k==null?c:k.i(0)
d.e=k==null?0:k}else if(q===258){k=l.bd()
k=k==null?c:k.i(0)
d.f=k==null?0:k}else if(q===277){k=l.bd()
k=k==null?c:k.i(0)
d.r=k==null?0:k}else if(q===317){k=l.bd()
k=k==null?c:k.i(0)
d.Q=k==null?0:k}else if(q===339){k=l.bd()
j=k==null?c:k.i(0)
if(j==null)j=0
if(!(j>=0&&j<4))return A.a(B.bz,j)
d.x=B.bz[j]}else if(q===320){j=l.bd()
if(j!=null){k=J.on(B.f.gA(j.bf()))
d.id=k
d.k1=0
k=k.length/3|0
d.k2=k
d.k3=k*2}}}k=d.id
h=k!=null
if(h&&d.d===B.aM)d.r=1
if(d.b===0||d.c===0)return
if(h&&d.f===8){g=k.length
for(h=k.$flags|0,r=0;r<g;++r){f=k[r]
h&2&&A.b(k)
k[r]=f>>>8}}if(d.d===B.aK)d.z=!0
d.w=d.r
if(s.ag(324)){d.ay=d.c9(322)
d.ch=d.c9(323)
d.CW=d.d0(324)
d.cx=d.d0(325)}else{d.ay=d.d_(322,d.b)
if(!s.ag(278))d.ch=d.d_(323,d.c)
else{e=d.c9(278)
if(e===-1)d.ch=d.c
else d.ch=e}d.CW=d.d0(273)
d.cx=d.d0(279)}k=d.b
h=d.ay
d.cy=B.a.az(k+h-1,h)
h=d.c
k=d.ch
d.db=B.a.az(h+k-1,k)
d.dy=d.d_(266,1)
d.fr=d.c9(292)
d.fx=d.c9(293)
d.c9(338)
switch(d.d.a){case 0:case 1:s=d.f
if(s===1&&d.r===1)d.y=B.aJ
else if(s===4&&d.r===1)d.y=B.jY
else if(B.a.a_(s,8)===0){s=d.r
if(s===1)d.y=B.jZ
else if(s===2)d.y=B.k_
else d.y=B.a1}break
case 2:if(B.a.a_(d.f,8)===0){s=d.r
if(s===3)d.y=B.cd
else if(s===4)d.y=B.k1
else d.y=B.a1}break
case 3:s=!1
if(d.r===1)if(d.id!=null){s=d.f
s=s===4||s===8||s===16}if(s)d.y=B.k0
break
case 4:if(d.f===1&&d.r===1)d.y=B.aJ
break
case 6:if(d.e===7&&d.f===8&&d.r===3)d.y=B.cd
else{if(s.ag(530)){j=s.l(0,530).bd()
d.as=j.i(0)
s=d.at=j.a5(0,1)}else s=d.at=d.as=2
k=d.as
k===$&&A.d()
if(k*s===1)d.y=B.a1
else if(d.f===8&&d.r===3)d.y=B.k2}break
case 5:if(B.a.a_(d.f,8)===0)d.y=B.a1
s=d.r
if(s===4)d.w=3
else if(s===5)d.w=4
break
default:if(B.a.a_(d.f,8)===0)d.y=B.a1
break}},
bQ(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.x,a1=a0===B.a0,a2=a0===B.h
a0=b.f
if(a0===1)s=B.w
else if(a0===2)s=B.B
else{if(a0===4)a0=B.C
else if(a1&&a0===16)a0=B.E
else if(a1&&a0===32)a0=B.J
else if(a1&&a0===64)a0=B.L
else if(a2&&a0===8)a0=B.M
else if(a2&&a0===16)a0=B.N
else if(a2&&a0===32)a0=B.O
else if(a0===16)a0=B.l
else a0=a0===32?B.K:B.e
s=a0}r=b.id!=null&&b.d===B.aM
q=r?3:b.w
a0=b.b
p=A.N(a,a,s,0,B.i,b.c,a,0,q,a,s,a0,r)
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
a0.b8(f,l,o[h],o[i])}}e=0
d=0
for(;;){a0=b.db
a0===$&&A.d()
if(!(e<a0))break
c=0
for(;;){a0=b.cy
a0===$&&A.d()
if(!(c<a0))break
b.i1(a3,p,c,e);++c;++d}++e}return p},
i1(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null
if(b0.y===B.aJ){b0.hP(b2,b3,b4,b5)
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
else if(p===5){r=A.t(new Uint8Array(j),!1,b1,0)
q=A.mR()
try{q.fk(A.p(b2,s,0),r.a)}catch(i){}if(b0.Q===2)for(h=0;h<b0.ch;++h){g=b0.r
p=b0.ay
f=g*(h*p+1)
e=p*g
for(;g<e;++g){p=r
m=J.c(p.a,p.d+f)
k=r
d=b0.r
d=J.c(k.a,k.d+(f-d))
J.x(p.a,p.d+f,m+d);++f}}}else if(p===32773){r=A.t(new Uint8Array(j),!1,b1,0)
b0.ep(b2,j,r.a)}else if(p===32946)r=A.t(B.D.bR(b2.cB(0,0,s)),!1,b1,0)
else if(p===8)r=A.t(B.D.bR(b2.cB(0,0,s)),!1,b1,0)
else if(p===6||p===7){b0.iw(new A.h9().bQ(t.D.a(b2.cB(0,0,s))),b3,n,l,b0.ay,b0.ch)
return}else throw A.h(A.o("Unsupported Compression Type: "+p))
c=A.j([0,0,0],t.t)
for(b=l,a=0;a<b0.ch;++a,++b)for(a0=n,a1=0;a1<b0.ay;++a1,++a0){p=r
if(p.d>=p.c||a0>=b0.b||b>=b0.c)break
p=b0.r
if(p===1){p=b0.x
if(p===B.a0){p=b0.f
if(p===32){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.bW()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else if(p===64)a2=r.de()
else if(p===16){p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a2=m[p]}else a2=0
if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.aH(a0,b,a2)}}else{m=b0.f
if(m===8)if(p===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else{p=r
a2=J.c(p.a,p.d++)}else if(m===16)if(p===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else a2=r.n()
else if(m===32)if(p===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a2=p[0]}else a2=r.k()
else a2=0
if(b0.d===B.aK){p=b3.a
a3=p==null?b1:p.gE()
a2=(a3==null?0:a3)-a2}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.aH(a0,b,a2)}}}else if(p===2){p=b0.f
if(p===8){if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else{p=r
a4=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else{p=r
a5=J.c(p.a,p.d++)}}else if(p===16){if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else a4=r.n()
if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.n()}else if(p===32){if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else a4=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.k()}else{a4=0
a5=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.a4(a0,b,a4,a5,0)}}else if(p===3){p=b0.x
if(p===B.a0){p=b0.f
if(p===32){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.bW()
if(0>=p.length)return A.a(p,0)
a6=p[0]
m[0]=r.k()
a7=p[0]
m[0]=r.k()
a8=p[0]}else{a7=0
a8=0
if(p===64)a6=r.de()
else if(p===16){p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a6=m[p]
p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a8=m[p]}else a6=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.a4(a0,b,a6,a7,a8)}}else{m=b0.f
if(m===8){if(p===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
a6=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else{p=r
a7=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else{p=r
a8=J.c(p.a,p.d++)}}else if(m===16){if(p===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.n()
if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.n()
if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.n()}else if(m===32){if(p===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()}else{a6=0
a7=0
a8=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.a4(a0,b,a6,a7,a8)}}}else if(p>=4)if(b0.x===B.a0){p=b0.f
if(p===32){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.bW()
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
if(p===64)a6=r.de()
else if(p===16){p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a6=m[p]
p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.n()
m=$.Q
m=m!=null?m:A.T()
if(!(p<m.length))return A.a(m,p)
a9=m[p]}else a6=0}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.ai(a0,b,a6,a7,a8,a9)}}else{p=b3.a
a5=p==null?b1:p.gE()
if(a5==null)a5=0
p=b0.f
if(p===8){if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
a6=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else{p=r
a7=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else{p=r
a8=J.c(p.a,p.d++)}if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else{p=r
a9=J.c(p.a,p.d++)}if(b0.r===5)if(b0.x===B.h){p=r
p=J.c(p.a,p.d++)
m=$.ao()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aA()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else{p=r
a5=J.c(p.a,p.d++)}}else if(p===16){if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.n()
if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.n()
if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.n()
if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.n()
if(b0.r===5)if(b0.x===B.h){p=r.n()
m=$.an()
m.$flags&2&&A.b(m)
m[0]=p
p=$.az()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.n()}else if(p===32){if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()
if(b0.r===5)if(b0.x===B.h){p=r.k()
m=$.M()
m.$flags&2&&A.b(m)
m[0]=p
p=$.a6()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.k()}else{a6=0
a7=0
a8=0
a9=0}if(b0.d===B.ce){A.nO(a6,a7,a8,a9,c)
a6=c[0]
a7=c[1]
a8=c[2]
a9=a5}if(a0<b0.b&&b<b0.c){p=b3.a
if(p!=null)p.ai(a0,b,a6,a7,a8,a9)}}}}else throw A.h(A.o("Unsupported bitsPerSample: "+p))},
iw(a,b,c,d,e,f){var s,r,q,p
for(s=0;s<f;++s)for(r=s+d,q=0;q<e;++q){p=a.a
p=p==null?null:p.O(q,s,null)
if(p==null)p=new A.H()
b.bK(q+c,r,p)}},
hP(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=a2.cy
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
if(n===32773){l=B.a.a_(a4,8)===0?B.a.V(a4,8)*p:(B.a.V(a4,8)+1)*p
s=A.t(new Uint8Array(a4*p),!1,a3,0)
a2.ep(a5,l,s.a)}else if(n===5){s=A.t(new Uint8Array(a4*p),!1,a3,0)
A.mR().fk(A.p(a5,m,0),s.a)
if(a2.Q===2)for(k=0;k<a2.c;++k){j=a2.r
i=j*(k*a2.b+1)
for(;j<a2.b*a2.r;++j){a4=s
p=J.c(a4.a,a4.d+i)
n=s
h=a2.r
h=J.c(n.a,n.d+(i-h))
J.x(a4.a,a4.d+i,p+h);++i}}}else if(n===2){s=A.t(new Uint8Array(a4*p),!1,a3,0)
try{A.lH(a2.dy,a4,p).jv(s,a5,0,a2.ch)}catch(g){}}else if(n===3){s=A.t(new Uint8Array(a4*p),!1,a3,0)
try{A.lH(a2.dy,a4,p).jw(s,a5,0,a2.ch,a2.fr)}catch(g){}}else if(n===4){s=A.t(new Uint8Array(a4*p),!1,a3,0)
try{A.lH(a2.dy,a4,p).jA(s,a5,0,a2.ch,a2.fx)}catch(g){}}else if(n===8)s=A.t(B.D.bR(a5.cB(0,0,m)),!1,a3,0)
else if(n===32946)s=A.t(B.D.bR(a5.cB(0,0,m)),!1,a3,0)
else if(n===1)s=a5
else throw A.h(A.o("Unsupported Compression Type: "+n))
f=new A.jk(s)
e=a6.gE()
a4=a2.z
d=a4?e:0
c=a4?0:e
for(b=o,a=0;a<a2.ch;++a,++b){for(a0=q,a1=0;a1<a2.ay;++a1,++a0){a4=a6.a
p=a4==null
n=p?a3:a4.b
if(b<(n==null?0:n)){a4=p?a3:a4.a
a4=a0>=(a4==null?0:a4)}else a4=!0
if(a4)break
a4=f.ae(1)
p=a6.a
if(a4===0){if(p!=null)p.a4(a0,b,d,0,0)}else if(p!=null)p.a4(a0,b,c,0,0)}f.c=0}},
ep(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.L.a(c)
for(s=J.al(c),r=0,q=0;q<b;){p=r+1
o=J.c(a.a,a.d+r)
n=$.ao()
n.$flags&2&&A.b(n)
n[0]=o
o=$.aA()
if(0>=o.length)return A.a(o,0)
m=o[0]
if(m>=0&&m<=127)for(o=m+1,r=p,l=0;l<o;++l,q=k,r=p){k=q+1
p=r+1
s.h(c,q,J.c(a.a,a.d+r))}else{o=m<=-1&&m>=-127
r=p+1
if(o){j=J.c(a.a,a.d+p)
for(o=-m+1,l=0;l<o;++l,q=k){k=q+1
s.h(c,q,j)}}}}},
d_(a,b){var s=this.a
if(!s.ag(a))return b
s=s.l(0,a).bd()
s=s==null?null:s.i(0)
return s==null?0:s},
c9(a){return this.d_(a,0)},
d0(a){var s,r=this.a
if(!r.ag(a))return null
s=r.l(0,a)
r=s.bd()
r.toString
return A.mP(s.c,r.gbw(r),t.p)}}
A.cv.prototype={
ad(){return"TiffFormat."+this.b}}
A.a9.prototype={
ad(){return"TiffPhotometricType."+this.b}}
A.aS.prototype={
ad(){return"TiffImageType."+this.b}}
A.hI.prototype={$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.iU.prototype={
fk(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
k.r=b
s=J.ba(b)
k.w=0
r=t.D.a(a.a)
k.e=r
q=k.f=r.length
k.b=a.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.h(A.o("Invalid LZW Data"))
k.eG()
k.d=k.c=0
p=k.dz()
r=k.x
o=0
for(;;){if(!(p!==257&&k.w<s))break
if(p===256){k.eG()
p=k.dz()
k.as=0
if(p===257)break
J.x(k.r,k.w++,p)
o=p}else{q=k.Q
q.toString
if(p<q){k.eE(p)
q=k.as
q===$&&A.d()
n=q-1
for(;n>=0;--n){q=k.r
m=k.w++
if(!(n<4096))return A.a(r,n)
J.x(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.e8(o,r[q])}else{k.eE(o)
q=k.as
q===$&&A.d()
n=q-1
for(;n>=0;--n){q=k.r
m=k.w++
if(!(n<4096))return A.a(r,n)
J.x(q,m,r[n])}q=k.r
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.x(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.e8(o,r[l])}o=p}p=k.dz()}},
e8(a,b){var s,r=this,q=r.y
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
eE(a){var s,r,q,p,o,n,m,l=this
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
dz(){var s,r,q,p,o=this,n=o.b,m=o.f
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
n=B.a.a2(o.c,n)
r-=9
if(!(r>=0&&r<4))return A.a(B.bf,r)
return n&B.bf[r]},
eG(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.o.aF(s,0,4096,4098)
for(s=q.y,r=0;r<256;++r){s.$flags&2&&A.b(s)
s[r]=r}q.a=9
q.Q=258}}
A.jl.prototype={
aw(a){var s=this,r=A.t(a,!1,null,0)
s.c=r
r=s.dG(r)
s.a=r
if(r!=null)s.b=A.iq(A.t(a,!1,null,0))
return s.a},
aj(a){var s,r,q=this.a
if(q==null)return null
q=q.f
if(!(a<q.length))return A.a(q,a)
q=q[a]
s=this.c
s===$&&A.d()
r=q.bQ(s)
q=this.b
if(q!=null)r.e=q
return r},
aV(a,b){var s,r,q,p=this,o=null,n=A.t(a,!1,o,0)
p.c=n
n=p.a=p.dG(n)
if(n==null)return o
s=n.f.length
r=p.aj(0)
if(r==null)return o
r.e=A.iq(A.t(a,!1,o,0))
r.w=B.aZ
for(q=1;q<s;++q)r.b2(p.aj(q))
return r},
dG(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=A.j([],t.aU),g=new A.hI(h),f=a.n()
if(f!==18761&&f!==19789)return i
if(f===19789)a.e=!0
else a.e=!1
q=a.n()
g.d=q
if(q!==42)return i
p=a.k()
o=A.p(a,i,0)
o.d=p
s=o
for(q=t.p,n=t.cV;p!==0;){r=null
try{m=new A.hH(A.I(q,n),B.aL,B.cc,B.k3)
m.hh(s)
r=m
l=r
if(!(l.b!==0&&l.c!==0))break}catch(k){break}B.c.N(h,r)
l=h.length
if(l===1){if(0>=l)return A.a(h,0)
j=h[0]
g.a=j.b
if(0>=l)return A.a(h,0)
g.b=j.c}p=s.k()
if(p!==0)s.d=p}return h.length!==0?g:i}}
A.jp.prototype={
cp(){var s,r=this.a,q=r.be()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.be()!==2752925)return!1
s=this.b
s.a=r.n()
s.b=r.n()
return!0},
bF(){var s,r,q,p=this,o=null
if(!p.ik())return o
s=p.b
r=s.a
p.d=A.N(o,o,B.e,0,B.i,s.b,o,0,4,o,B.e,r,!1)
p.ir()
if(!p.iD())return o
s=s.w
if(s.length!==0){q=A.t(new A.aW(s),!1,o,0)
s=p.d
s.toString
s.e=A.iq(q)}return p.d},
ik(){var s,r,q,p,o=this
if(!o.cp())return!1
o.fr=A.qk()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.c.h(s,r,new A.hP(q,p,new Int32Array(2)))}o.y=o.Q=0
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
p=A.n9(s.am(p))
o.c=p
s.d+=q.d
p.Z(1)
o.c.Z(1)
o.iJ(o.x,o.fr)
o.iC()
if(!o.iF(s))return!1
o.iH()
o.c.Z(1)
o.iG()
return!0},
iJ(a,b){var s,r,q,p=this,o=p.c
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
iC(){var s,r,q,p=this,o=p.w,n=p.c
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
p.c1=n
return!0},
iF(a){var s,r,q,p,o,n,m,l=a.c-a.d,k=this.c
k===$&&A.d()
k=B.a.S(1,k.Z(2))
this.cy=k
s=k-1
r=s*3
if(l<r)return!1
for(k=this.db,q=0,p=0;p<s;++p,r=n){o=a.cL(3,q)
n=r+((J.c(o.a,o.d)|J.c(o.a,o.d+1)<<8|J.c(o.a,o.d+2)<<16)>>>0)
if(n>l)n=l
m=new A.eR(a.bU(n-r,r))
m.b=254
m.c=0
m.d=-8
B.c.h(k,p,m)
q+=3}B.c.h(k,s,A.n9(a.bU(l-r,a.d-a.b+r)))
return r<l},
iH(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.d()
s=e.Z(7)
r=f.c.Z(1)!==0?f.c.cd(4):0
q=f.c.Z(1)!==0?f.c.cd(4):0
p=f.c.Z(1)!==0?f.c.cd(4):0
o=f.c.Z(1)!==0?f.c.cd(4):0
n=f.c.Z(1)!==0?f.c.cd(4):0
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
g=B.az[g]
i.$flags&2&&A.b(i)
i[0]=g
if(j<0)g=0
else g=j>127?127:j
i[1]=B.aA[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
i=B.az[i]
g.$flags&2&&A.b(g)
g[0]=i*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.aA[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
g=B.az[g]
i.$flags&2&&A.b(i)
i[0]=g
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.aA[g]}},
iG(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.d()
n=o.a7(B.iL[s][r][q][p])!==0?m.c.Z(8):B.dX[s][r][q][p]
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
iL(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c1
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.dO
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
ir(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b,e=f.at
if(e!=null)h.dP=e
s=J.am(4,t.e6)
for(e=t.ao,r=0;r<4;++r)s[r]=A.j([new A.bA(),new A.bA()],e)
h.dO=t.gS.a(s)
e=h.at
e.toString
s=J.am(e,t.dE)
for(q=0;q<e;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.eV(p,o,new Uint8Array(8))}h.k2=t.cC.a(s)
h.ok=new Uint8Array(832)
e=h.at
e.toString
h.go=new Uint8Array(4*e)
p=h.p4=16*e
o=h.R8=8*e
n=h.c1
n.toString
if(!(n<3))return A.a(B.a5,n)
m=B.a5[n]
l=m*p
k=(m/2|0)*o
h.p1=A.t(new Uint8Array(16*p+l),!1,g,l)
p=8*o+k
h.p2=A.t(new Uint8Array(p),!1,g,k)
h.p3=A.t(new Uint8Array(p),!1,g,k)
f=f.a
h.RG=A.t(new Uint8Array(f),!1,g,0)
j=f+1>>>1
h.rx=A.t(new Uint8Array(j),!1,g,0)
h.ry=A.t(new Uint8Array(j),!1,g,0)
if(n===2)h.ch=h.ay=0
else{f=B.a.V(h.y-m,16)
h.ay=f
p=B.a.V(h.Q-m,16)
h.ch=p
if(f<0)h.ay=0
if(p<0)h.ch=0}f=B.a.V(h.as+15+m,16)
h.cx=f
p=B.a.V(h.z+15+m,16)
h.CW=p
if(p>e)h.CW=e
p=h.ax
p.toString
if(f>p)h.cx=p
i=e+1
s=J.am(i,t.ai)
for(q=0;q<i;++q)s[q]=new A.eT()
h.k3=t.eQ.a(s)
f=h.at
f.toString
s=J.am(f,t.gU)
for(q=0;q<f;++q){e=new Int16Array(384)
s[q]=new A.eU(e,new Uint8Array(16))}h.cq=t.db.a(s)
f=h.at
f.toString
h.k4=t.ge.a(A.S(f,g,!1,t.aj))
h.iL()
A.pL()
h.e=new A.jq()
return!0},
iD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
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
k=e.cq
k===$&&A.d()
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.d()
p=p.a7(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.a7(m.a[1]):2+o.a7(m.a[2])}p=e.fx
p===$&&A.d()
if(p){p=e.c
p===$&&A.d()
o=e.fy
o===$&&A.d()
h=p.a7(o)!==0}else h=!1
e.iE()
if(!h)h=e.iI(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.d()
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.c1
p.toString
if(p>0){p=e.k4
p===$&&A.d()
o=e.y1
m=e.dO
m===$&&A.d()
k=e.k1
k===$&&A.d()
if(!(k<m.length))return A.a(m,k)
k=m[k]
m=i.b
m===$&&A.d()
B.c.h(p,o,k[m?1:0])
p=e.k4
o=e.y1
if(!(o<p.length))return A.a(p,o)
g=p[o]
g.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.d()
if(0>=p.length)return A.a(p,0)
p=p[0]
p.b=p.a=0
B.f.aF(s,0,4,0)
e.y1=0
e.jc()
p=e.c1
p.toString
f=!1
if(p>0){p=e.y2
o=e.ch
o===$&&A.d()
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}}if(!e.ii(f))return!1
p=++e.y2}return!0},
jc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a4.y2,a7=a4.ok
a7===$&&A.d()
s=A.t(a7,!1,a5,40)
r=A.t(a7,!1,a5,584)
q=A.t(a7,!1,a5,600)
a7=a6>0
p=0
for(;;){o=a4.at
o.toString
if(!(p<o))break
o=a4.cq
o===$&&A.d()
if(!(p<o.length))return A.a(o,p)
n=o[p]
if(p>0){for(m=-1;m<16;++m){o=m*32
s.bc(o-4,4,s,o+12)}for(m=-1;m<8;++m){o=m*32
l=o-4
o+=4
r.bc(l,4,r,o)
q.bc(l,4,q,o)}}else{for(m=0;m<16;++m)J.x(s.a,s.d+(m*32-1),129)
for(m=0;m<8;++m){o=m*32-1
J.x(r.a,r.d+o,129)
J.x(q.a,q.d+o,129)}if(a7){J.x(q.a,q.d+-33,129)
J.x(r.a,r.d+-33,129)
J.x(s.a,s.d+-33,129)}}o=a4.k2
o===$&&A.d()
if(!(p<o.length))return A.a(o,p)
k=o[p]
j=n.a
i=n.e
if(a7){s.bS(-32,16,k.a)
r.bS(-32,8,k.b)
q.bS(-32,8,k.c)}else if(p===0){o=s.a
l=s.d+-33
J.bi(o,l,l+21,127)
l=r.a
o=r.d+-33
J.bi(l,o,o+9,127)
o=q.a
l=q.d+-33
J.bi(o,l,l+9,127)}o=n.b
o===$&&A.d()
if(o){h=A.p(s,a5,-16)
g=h.cD()
if(a7){o=a4.at
o.toString
if(p>=o-1){o=k.a[15]
l=h.a
f=h.d
J.bi(l,f,f+4,o)}else{o=a4.k2
l=p+1
if(!(l<o.length))return A.a(o,l)
h.bS(0,4,o[l].a)}}o=g.length
if(0>=o)return A.a(g,0)
e=g[0]
g.$flags&2&&A.b(g)
if(96>=o)return A.a(g,96)
g[96]=e
g[64]=e
g[32]=e
for(o=n.c,d=0;d<16;++d,i=i<<2>>>0){c=A.p(s,a5,B.bS[d])
l=o[d]
if(!(l<10))return A.a(B.bH,l)
B.bH[l].$1(c)
i.toString
l=d*16
a4.es(i,new A.ai(j,l,Math.min(384,384),l,!1),c)}}else{o=A.nb(p,a6,n.c[0])
o.toString
if(!(o<7))return A.a(B.bR,o)
B.bR[o].$1(s)
if(i!==0)for(d=0;d<16;++d,i=i<<2>>>0){c=A.p(s,a5,B.bS[d])
i.toString
o=d*16
a4.es(i,new A.ai(j,o,Math.min(384,384),o,!1),c)}}o=n.f
o===$&&A.d()
l=A.nb(p,a6,n.d)
l.toString
if(!(l<7))return A.a(B.aB,l)
B.aB[l].$1(r)
B.aB[l].$1(q)
l=Math.min(384,384)
b=new A.ai(j,256,l,256,!1)
if((o&255)!==0){f=a4.e
if((o&170)!==0){f===$&&A.d()
f.bx(b,r)
f.bx(A.p(b,a5,16),A.p(r,a5,4))
a=A.p(b,a5,32)
a0=A.p(r,a5,128)
f.bx(a,a0)
f.bx(A.p(a,a5,16),A.p(a0,a5,4))}else{f===$&&A.d()
f.fE(b,r)}}a1=new A.ai(j,320,l,320,!1)
o=o>>>8
if((o&255)!==0){l=a4.e
if((o&170)!==0){l===$&&A.d()
l.bx(a1,q)
l.bx(A.p(a1,a5,16),A.p(q,a5,4))
o=A.p(a1,a5,32)
f=A.p(q,a5,128)
l.bx(o,f)
l.bx(A.p(o,a5,16),A.p(f,a5,4))}else{l===$&&A.d()
l.fE(a1,q)}}o=a4.ax
o.toString
if(a6<o-1){B.f.ao(k.a,0,16,s.a3(),480)
B.f.ao(k.b,0,8,r.a3(),224)
B.f.ao(k.c,0,8,q.a3(),224)}a2=p*16
a3=p*8
for(m=0;m<16;++m){o=a4.p4
o.toString
l=a4.p1
l===$&&A.d()
l.bc(a2+m*o,16,s,m*32)}for(m=0;m<8;++m){o=a4.R8
o.toString
l=a4.p2
l===$&&A.d()
f=m*32
l.bc(a3+m*o,8,r,f)
o=a4.R8
o.toString
l=a4.p3
l===$&&A.d()
l.bc(a3+m*o,8,q,f)}++p}},
es(a,b,c){var s,r,q,p,o,n
switch(a>>>30){case 3:s=this.e
s===$&&A.d()
s.kd(b,c,!1)
break
case 2:this.e===$&&A.d()
r=J.c(b.a,b.d)+4
q=B.a.av(B.a.j(J.c(b.a,b.d+4)*35468,16),32)
p=B.a.av(B.a.j(J.c(b.a,b.d+4)*85627,16),32)
o=B.a.av(B.a.j(J.c(b.a,b.d+1)*35468,16),32)
n=B.a.av(B.a.j(J.c(b.a,b.d+1)*85627,16),32)
A.js(c,0,r+p,n,o)
A.js(c,1,r+q,n,o)
A.js(c,2,r-q,n,o)
A.js(c,3,r-p,n,o)
break
case 1:s=this.e
s===$&&A.d()
s.cE(b,c)
break
default:break}},
i6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.p4,e=h.k4
e===$&&A.d()
if(!(a>=0&&a<e.length))return A.a(e,a)
e=e[a]
e.toString
s=h.p1
s===$&&A.d()
r=A.p(s,g,a*16)
q=e.b
p=e.a
if(p===0)return
if(h.c1===1){if(a>0){s=h.e
s===$&&A.d()
f.toString
s.dY(r,f,p+4)}if(e.c){s=h.e
s===$&&A.d()
f.toString
s.fT(r,f,p)}if(b>0){s=h.e
s===$&&A.d()
f.toString
s.dZ(r,f,p+4)}if(e.c){e=h.e
e===$&&A.d()
f.toString
e.fU(r,f,p)}}else{o=h.R8
s=h.p2
s===$&&A.d()
n=a*8
m=A.p(s,g,n)
s=h.p3
s===$&&A.d()
l=A.p(s,g,n)
k=e.d
if(a>0){s=h.e
s===$&&A.d()
f.toString
n=p+4
s.c8(r,1,f,16,n,q,k)
o.toString
s.c8(m,1,o,8,n,q,k)
s.c8(l,1,o,8,n,q,k)}if(e.c){s=h.e
s===$&&A.d()
f.toString
s.jJ(r,f,p,q,k)
o.toString
j=A.p(m,g,4)
i=A.p(l,g,4)
s.c7(j,1,o,8,p,q,k)
s.c7(i,1,o,8,p,q,k)}if(b>0){s=h.e
s===$&&A.d()
f.toString
n=p+4
s.c8(r,f,1,16,n,q,k)
o.toString
s.c8(m,o,1,8,n,q,k)
s.c8(l,o,1,8,n,q,k)}if(e.c){e=h.e
e===$&&A.d()
f.toString
e.kg(r,f,p,q,k)
o.toString
s=4*o
j=A.p(m,g,s)
i=A.p(l,g,s)
e.c7(j,o,1,8,p,q,k)
e.c7(i,o,1,8,p,q,k)}}},
ih(){var s,r=this,q=r.ay
q===$&&A.d()
s=q
for(;;){q=r.CW
q.toString
if(!(s<q))break
r.i6(s,r.y2);++s}},
ii(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.c1
a1.toString
if(!(a1<3))return A.a(B.a5,a1)
s=B.a5[a1]
a1=a.p4
a1.toString
r=s*a1
a1=a.R8
a1.toString
q=(s/2|0)*a1
a1=a.p1
a1===$&&A.d()
p=-r
o=A.p(a1,a0,p)
a1=a.p2
a1===$&&A.d()
n=-q
m=A.p(a1,a0,n)
a1=a.p3
a1===$&&A.d()
l=A.p(a1,a0,n)
k=a.y2
a1=a.cx
a1.toString
j=k*16
i=(k+1)*16
if(a2)a.ih()
if(k!==0){j-=s
a.to=A.p(o,a0,0)
a.x1=A.p(m,a0,0)
a.x2=A.p(l,a0,0)}else{a.to=A.p(a.p1,a0,0)
a.x1=A.p(a.p2,a0,0)
a.x2=A.p(a.p3,a0,0)}a1=k<a1-1
if(a1)i-=s
h=a.as
if(i>h)i=h
a.xr=null
if(a.dP!=null&&j<i){g=a.xr=a.i2(j,i-j)
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
a.iQ(j-f,a.z-b,i-j)}if(a1){a1=a.p1
g=a.p4
g.toString
a1.bc(p,r,o,16*g)
g=a.p2
p=a.R8
p.toString
g.bc(n,q,m,8*p)
p=a.p3
g=a.R8
g.toString
p.bc(n,q,l,8*g)}return!0},
iQ(a,b,c){if(b<=0||c<=0)return!1
this.i8(a,b,c)
this.i7(a,b,c)
return!0},
dk(a){var s
if((a&-4194304)>>>0===0)s=B.a.j(a,14)
else s=a<0?0:255
return s},
d6(a,b,c,d){var s=19077*a
d.h(0,0,this.dk(s+26149*c+-3644112))
d.h(0,1,this.dk(s-6419*b-13320*c+2229552))
d.h(0,2,this.dk(s+33050*b+-4527440))},
d5(a7,a8,a9,b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.jB(),a2=b5-1,a3=B.a.j(a2,1),a4=a1.$2(J.c(a9.a,a9.d),J.c(b0.a,b0.d)),a5=a1.$2(J.c(b1.a,b1.d),J.c(b2.a,b2.d)),a6=B.a.j(3*a4+a5+131074,2)
a.d6(J.c(a7.a,a7.d),a6&255,a6>>>16,b3)
b3.h(0,3,255)
s=a8!=null
if(s){a6=B.a.j(3*a5+a4+131074,2)
r=J.c(a8.a,a8.d)
b4.toString
a.d6(r,a6&255,a6>>>16,b4)
b4.h(0,3,255)}for(q=1;q<=a3;++q,a5=o,a4=p){p=a1.$2(J.c(a9.a,a9.d+q),J.c(b0.a,b0.d+q))
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
e=A.p(b3,a0,f)
i=19077*i
d=i+26149*g+-3644112
if((d&-4194304)>>>0===0)c=B.a.j(d,14)
else c=d<0?0:255
J.x(e.a,e.d,c)
g=i-6419*h-13320*g+2229552
if((g&-4194304)>>>0===0)c=B.a.j(g,14)
else c=g<0?0:255
J.x(e.a,e.d+1,c)
i=i+33050*h+-4527440
if((i&-4194304)>>>0===0)c=B.a.j(i,14)
else c=i<0?0:255
J.x(e.a,e.d+2,c)
J.x(e.a,e.d+3,255)
i=J.c(a7.a,a7.d+r)
h=k&255
g=k>>>16
e=r*4
d=A.p(b3,a0,e)
i=19077*i
b=i+26149*g+-3644112
if((b&-4194304)>>>0===0)c=B.a.j(b,14)
else c=b<0?0:255
J.x(d.a,d.d,c)
g=i-6419*h-13320*g+2229552
if((g&-4194304)>>>0===0)c=B.a.j(g,14)
else c=g<0?0:255
J.x(d.a,d.d+1,c)
i=i+33050*h+-4527440
if((i&-4194304)>>>0===0)c=B.a.j(i,14)
else c=i<0?0:255
J.x(d.a,d.d+2,c)
J.x(d.a,d.d+3,255)
if(s){a6=B.a.j(l+a5,1)
k=B.a.j(m+o,1)
j=J.c(a8.a,a8.d+j)
i=a6&255
h=a6>>>16
b4.toString
f=A.p(b4,a0,f)
j=19077*j
g=j+26149*h+-3644112
if((g&-4194304)>>>0===0)c=B.a.j(g,14)
else c=g<0?0:255
J.x(f.a,f.d,c)
h=j-6419*i-13320*h+2229552
if((h&-4194304)>>>0===0)c=B.a.j(h,14)
else c=h<0?0:255
J.x(f.a,f.d+1,c)
j=j+33050*i+-4527440
if((j&-4194304)>>>0===0)c=B.a.j(j,14)
else c=j<0?0:255
J.x(f.a,f.d+2,c)
J.x(f.a,f.d+3,255)
r=J.c(a8.a,a8.d+r)
j=k&255
i=k>>>16
e=A.p(b4,a0,e)
r=19077*r
h=r+26149*i+-3644112
if((h&-4194304)>>>0===0)c=B.a.j(h,14)
else c=h<0?0:255
J.x(e.a,e.d,c)
i=r-6419*j-13320*i+2229552
if((i&-4194304)>>>0===0)c=B.a.j(i,14)
else c=i<0?0:255
J.x(e.a,e.d+1,c)
r=r+33050*j+-4527440
if((r&-4194304)>>>0===0)c=B.a.j(r,14)
else c=r<0?0:255
J.x(e.a,e.d+2,c)
J.x(e.a,e.d+3,255)}}if((b5&1)===0){a6=B.a.j(3*a4+a5+131074,2)
r=J.c(a7.a,a7.d+a2)
j=a2*4
i=A.p(b3,a0,j)
a.d6(r,a6&255,a6>>>16,i)
i.h(0,3,255)
if(s){a6=B.a.j(3*a5+a4+131074,2)
a2=J.c(a8.a,a8.d+a2)
b4.toString
j=A.p(b4,a0,j)
a.d6(a2,a6&255,a6>>>16,j)
j.h(0,3,255)}}},
i7(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.xr
if(j==null)return
s=A.p(j,null,0)
if(a===0){r=c-1
q=a}else{q=a-1
s.d=s.d-k.b.a
r=c}j=k.Q
p=k.as
if(j+a+c===p)r=p-j-q
for(j=k.b,o=0;o<r;++o){for(p=o+q,n=0;n<b;++n){m=J.c(s.a,s.d+n)
l=k.d.a
l=l==null?null:l.O(n,p,null);(l==null?new A.H():l).sv(m)}s.d=s.d+j.a}},
i8(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=J.a_(g.d.gA(0),0,null),d=g.b.a,c=A.t(e,!1,f,a*d*4),b=g.to
b===$&&A.d()
s=A.p(b,f,0)
b=g.x1
b===$&&A.d()
r=A.p(b,f,0)
b=g.x2
b===$&&A.d()
q=A.p(b,f,0)
p=a+a1
o=B.a.j(a0+1,1)
n=d*4
d=g.rx
d===$&&A.d()
m=A.p(d,f,0)
d=g.ry
d===$&&A.d()
l=A.p(d,f,0)
if(a===0){g.d5(s,f,r,q,r,q,c,f,a0)
k=a1}else{d=g.RG
d===$&&A.d()
g.d5(d,s,m,l,r,q,A.p(c,f,-n),c,a0)
k=a1+1}m.sA(0,r.a)
l.sA(0,q.a)
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
g.d5(A.p(s,f,-i),s,m,l,r,q,A.p(c,f,b),c,a0)}d=s.d
b=g.p4
b.toString
s.d=d+b
if(g.Q+p<g.as){d=g.RG
d===$&&A.d()
d.bS(0,a0,s)
g.rx.bS(0,o,r)
g.ry.bS(0,o,q);--k}else if((p&1)===0)g.d5(s,f,r,q,r,q,A.p(c,f,n),f,a0)
return k},
i2(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.b,h=i.a,g=i.b
if(a<0||b<=0||a+b>g)return null
if(a===0){i=h*g
j.dQ=new Uint8Array(i)
s=j.dP
r=new A.jC(s,h,g)
q=s.F()
p=r.d=q&3
r.e=B.a.j(q,2)&3
r.f=B.a.j(q,4)&3
r.r=B.a.j(q,6)&3
if(r.gfq())if(p===0){if(s.c-s.d<i)r.r=1}else if(p===1){o=new A.dy(B.a2,A.j([],t.J))
o.a=h
o.b=g
i=A.j([],t.V)
p=A.j([],t.gk)
n=new Uint32Array(2)
m=new A.hN(s,n)
n=m.e=J.a_(B.o.gA(n),0,null)
l=s.F()
n.$flags&2&&A.b(n)
if(0>=n.length)return A.a(n,0)
n[0]=l
l=s.F()
n.$flags&2&&A.b(n)
if(1>=n.length)return A.a(n,1)
n[1]=l
l=s.F()
n.$flags&2&&A.b(n)
if(2>=n.length)return A.a(n,2)
n[2]=l
l=s.F()
n.$flags&2&&A.b(n)
if(3>=n.length)return A.a(n,3)
n[3]=l
l=s.F()
n.$flags&2&&A.b(n)
if(4>=n.length)return A.a(n,4)
n[4]=l
l=s.F()
n.$flags&2&&A.b(n)
if(5>=n.length)return A.a(n,5)
n[5]=l
l=s.F()
n.$flags&2&&A.b(n)
if(6>=n.length)return A.a(n,6)
n[6]=l
s=s.F()
n.$flags&2&&A.b(n)
if(7>=n.length)return A.a(n,7)
n[7]=s
m.b=!1
p=new A.h2(m,o,i,p)
p.dy=h
p.fr=g
r.x=p
p.cg(h,g,!0)
i=r.x
s=i.ch
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
i=s[0].a===B.cg&&i.iv()}else i=!1
if(i){r.y=!0
i=r.x
s=i.c
k=s.a*s.b
i.db=0
s=B.a.a_(k,4)
s=new Uint8Array(k+(4-s))
i.cy=s
i.cx=J.aC(B.f.gA(s),0,null)}else{r.y=!1
r.x.e9(h)}}else r.r=1
j.fm=r}i=j.fm
if(i!=null)if(!i.w){s=j.dQ
s===$&&A.d()
if(!i.dN(a,b,s))return null}i=j.dQ
i===$&&A.d()
return A.t(i,!1,null,a*h)},
iI(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr.b,a4=a2.dy,a5=a2.k1
a5===$&&A.d()
if(!(a5<4))return A.a(a4,a5)
s=a4[a5]
a5=a2.cq
a5===$&&A.d()
a4=a2.y1
if(!(a4<a5.length))return A.a(a5,a4)
r=a5[a4]
q=A.t(r.a,!1,null,0)
a4=a2.k3
a4===$&&A.d()
if(0>=a4.length)return A.a(a4,0)
p=a4[0]
q.jS(0,q.c-q.d,0)
a4=r.b
a4===$&&A.d()
if(!a4){o=A.t(new Int16Array(16),!1,null,0)
a4=a6.b
a5=p.b
if(1>=a3.length)return A.a(a3,1)
n=a2.dw(a7,a3[1],a4+a5,s.b,0,o)
a6.b=p.b=n>0?1:0
if(n>1)a2.ji(o,q)
else{m=B.a.j(J.c(o.a,o.d)+3,3)
for(l=0;l<256;l+=16)J.x(q.a,q.d+l,m)}k=a3[0]
j=1}else{if(3>=a3.length)return A.a(a3,3)
k=a3[3]
j=0}i=a6.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a2.dw(a7,k,e+(i&1),s.a,j,q)
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
i=B.a.a1(a6.a,a5)
h=B.a.a1(p.a,a5)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c){if(2>=a4)return A.a(a3,2)
n=a2.dw(a7,a3[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a5=J.c(q.a,q.d)!==0?1:0
if(n>3)a5=3
else if(n>1)a5=2
d=(d<<2|a5)>>>0
q.d+=16}i=i>>>2
h=h>>>1|e<<5}a0=(a0|B.a.S(d,4*a1))>>>0
a=(a|B.a.S(i<<4>>>0,a1))>>>0
b=(b|B.a.S(h&240,a1))>>>0}a6.a=a
p.a=b
r.e=g
r.f=a0
if((a0&43690)===0)s.toString
return(g|a0)>>>0===0},
ji(a,b){var s,r,q,p,o,n,m,l,k,j,i=new Int32Array(16)
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
J.x(b.a,b.d+k,p)
p=B.a.j(l+m,3)
J.x(b.a,b.d+(k+16),p)
p=B.a.j(q-n,3)
J.x(b.a,b.d+(k+32),p)
p=B.a.j(l-m,3)
J.x(b.a,b.d+(k+48),p)
k+=64}},
il(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.a7(b[3])===0)s=a.a7(b[4])===0?2:3+a.a7(b[5])
else if(a.a7(b[6])===0)s=a.a7(b[7])===0?5+a.a7(159):7+2*a.a7(165)+a.a7(145)
else{r=a.a7(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.a7(b[q])
if(!(p<4))return A.a(B.bh,p)
o=B.bh[p]
n=o.length
for(s=0,m=0;m<n;++m)s+=s+a.a7(o[m])
s+=3+B.a.S(8,p)}return s},
dw(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.c7.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.a7(q[0])===0)return e
while(a.a7(q[1])===0){++e
if(!(e>=0&&e<17))return A.a(B.af,e)
r=B.af[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.af,p)
r=B.af[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.a7(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.il(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.bC,e)
r=B.bC[e]
m=a.b
m===$&&A.d()
l=a.ec(B.a.j(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.ac,m)
k=B.ac[m]
a.b=B.bJ[m]
m=a.d
m===$&&A.d()
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.x(f.a,f.d+r,m*j)}return 16},
iE(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.cq
d===$&&A.d()
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.d()
h=h.a7(145)===0
s.b=h
if(!h){if(i.c.a7(156)!==0)r=i.c.a7(128)!==0?1:3
else r=i.c.a7(163)!==0?2:0
h=s.c
h.$flags&2&&A.b(h)
h[0]=r
f.toString
B.f.aF(f,g,g+4,r)
B.f.aF(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.bE,d)
d=B.bE[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.a7(m[0])
if(!(l<18))return A.a(B.aa,l)
k=B.aa[l]
while(k>0){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.a7(m[k])
if(!(d>=0&&d<18))return A.a(B.aa,d)
k=B.aa[d]}r=-k
f.$flags&2&&A.b(f)
f[h]=r}j=p+4
f.toString
B.f.ao(q,p,j,f,g)
e.$flags&2&&A.b(e)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.a7(142)===0)h=0
else if(i.c.a7(114)===0)h=2
else h=i.c.a7(183)!==0?1:3
s.d=h}}
A.jB.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:29}
A.eR.prototype={
Z(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.Y(this.a7(128),r))>>>0
return s},
cd(a){var s=this.Z(a)
return this.Z(1)===1?-s:s},
a7(a){var s,r=this,q=r.b
q===$&&A.d()
s=r.ec(B.a.j(q*a,8))
if(r.b<=126)r.jg()
return s},
ec(a){var s,r,q,p,o,n=this,m=n.d
m===$&&A.d()
if(m<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.F()
m=n.c
m===$&&A.d()
n.c=(p|m<<8)>>>0
m=n.d+8
n.d=m
o=m}else{if(q<r){m=s.F()
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
if(B.a.br(m,o)>a){s=n.b
s===$&&A.d()
r=a+1
n.b=s-r
n.c=m-B.a.Y(r,o)
return 1}else{n.b=a
return 0}},
jg(){var s,r=this,q=r.b
q===$&&A.d()
if(!(q>=0&&q<128))return A.a(B.ac,q)
s=B.ac[q]
r.b=B.bJ[q]
q=r.d
q===$&&A.d()
r.d=q-s}}
A.jq.prototype={
dZ(a,b,c){var s,r=A.p(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.eI(r,b,c))this.cT(r,b)}},
dY(a,b,c){var s,r=A.p(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.eI(r,1,c))this.cT(r,1)}},
fU(a,b,c){var s,r,q=A.p(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.dZ(q,b,c)}},
fT(a,b,c){var s,r=A.p(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.dY(r,b,c)}},
kg(a,b,c,d,e){var s,r,q=A.p(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.c7(q,b,1,16,c,d,e)}},
jJ(a,b,c,d,e){var s,r=A.p(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.c7(r,1,b,16,c,d,e)}},
c8(a,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.p(a,null,0)
for(s=-3*a0,r=-2*a0,q=-a0,p=2*a0;o=a2-1,a2>0;a2=o){if(this.eJ(b,a0,a3,a4))if(this.eF(b,a0,a5))this.cT(b,a0)
else{n=J.c(b.a,b.d+s)
m=J.c(b.a,b.d+r)
l=J.c(b.a,b.d+q)
k=J.c(b.a,b.d)
j=J.c(b.a,b.d+a0)
i=J.c(b.a,b.d+p)
h=$.kZ()
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
g=$.aF()
h=255+n+c
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.x(b.a,b.d+s,h)
h=$.aF()
g=255+m+d
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.x(b.a,b.d+r,g)
g=$.aF()
h=255+l+e
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.x(b.a,b.d+q,h)
h=$.aF()
g=255+k-e
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.x(b.a,b.d,g)
g=$.aF()
h=255+j-d
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.x(b.a,b.d+a0,h)
h=$.aF()
g=255+i-c
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.x(b.a,b.d+p,g)}b.d+=a1}},
c7(a,b,c,d,e,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.p(a,null,0)
for(s=-2*b,r=-b;q=d-1,d>0;d=q){if(this.eJ(f,b,e,a0))if(this.eF(f,b,a1))this.cT(f,b)
else{p=J.c(f.a,f.d+s)
o=J.c(f.a,f.d+r)
n=J.c(f.a,f.d)
m=J.c(f.a,f.d+b)
l=3*(n-o)
k=$.l_()
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
j=$.aF()
k=255+p+g
if(!(k>=0&&k<766))return A.a(j,k)
k=j[k]
J.x(f.a,f.d+s,k)
k=$.aF()
j=255+o+h
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.x(f.a,f.d+r,j)
j=$.aF()
k=255+n-i
if(!(k>=0&&k<766))return A.a(j,k)
k=j[k]
J.x(f.a,f.d,k)
k=$.aF()
j=255+m-g
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.x(f.a,f.d+b,j)}f.d+=c}},
cT(a,b){var s,r,q,p=J.c(a.a,a.d+-2*b),o=-b,n=J.c(a.a,a.d+o),m=J.c(a.a,a.d),l=J.c(a.a,a.d+b),k=$.kZ(),j=1020+p-l
if(!(j>=0&&j<2041))return A.a(k,j)
s=3*(m-n)+k[j]
j=$.l_()
k=112+B.a.av(B.a.j(s+4,3),32)
if(!(k>=0&&k<225))return A.a(j,k)
r=j[k]
k=112+B.a.av(B.a.j(s+3,3),32)
if(!(k>=0&&k<225))return A.a(j,k)
q=j[k]
k=$.aF()
j=255+n+q
if(!(j>=0&&j<766))return A.a(k,j)
a.h(0,o,k[j])
j=$.aF()
k=255+m-r
if(!(k>=0&&k<766))return A.a(j,k)
a.h(0,0,j[k])},
eF(a,b,c){var s=J.c(a.a,a.d+-2*b),r=J.c(a.a,a.d+-b),q=J.c(a.a,a.d),p=J.c(a.a,a.d+b),o=$.ib(),n=255+s-r
if(!(n>=0&&n<511))return A.a(o,n)
if(o[n]<=c){n=255+p-q
if(!(n>=0&&n<511))return A.a(o,n)
n=o[n]>c
o=n}else o=!0
return o},
eI(a,b,c){var s,r=J.c(a.a,a.d+-2*b),q=J.c(a.a,a.d+-b),p=J.c(a.a,a.d),o=J.c(a.a,a.d+b),n=$.ib(),m=255+q-p
if(!(m>=0&&m<511))return A.a(n,m)
m=n[m]
n=$.kY()
s=255+r-o
if(!(s>=0&&s<511))return A.a(n,s)
return 2*m+n[s]<=c},
eJ(a,b,c,d){var s,r,q,p=J.c(a.a,a.d+-4*b),o=J.c(a.a,a.d+-3*b),n=J.c(a.a,a.d+-2*b),m=J.c(a.a,a.d+-b),l=J.c(a.a,a.d),k=J.c(a.a,a.d+b),j=J.c(a.a,a.d+2*b),i=J.c(a.a,a.d+3*b),h=$.ib(),g=255+m-l
if(!(g>=0&&g<511))return A.a(h,g)
g=h[g]
s=$.kY()
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
bx(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new Int32Array(16)
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
A.bR(b,g,0,0,o+i)
A.bR(b,g,1,0,n+j)
A.bR(b,g,2,0,n-j)
A.bR(b,g,3,0,o-i);++r
g+=32}},
kd(a,b,c){this.bx(a,b)
if(c)this.bx(A.p(a,null,16),A.p(b,null,4))},
cE(a,b){var s,r,q=J.c(a.a,a.d)+4
for(s=0;s<4;++s)for(r=0;r<4;++r)A.bR(b,0,r,s,q)},
fE(a,b){var s=this,r=null
if(J.c(a.a,a.d)!==0)s.cE(a,b)
if(J.c(a.a,a.d+16)!==0)s.cE(A.p(a,r,16),A.p(b,r,4))
if(J.c(a.a,a.d+32)!==0)s.cE(A.p(a,r,32),A.p(b,r,128))
if(J.c(a.a,a.d+48)!==0)s.cE(A.p(a,r,48),A.p(b,r,132))}}
A.jv.prototype={}
A.jy.prototype={}
A.jA.prototype={}
A.eQ.prototype={}
A.jz.prototype={}
A.jr.prototype={}
A.bA.prototype={}
A.eT.prototype={}
A.hP.prototype={}
A.eU.prototype={}
A.eV.prototype={}
A.eS.prototype={
cp(){var s,r,q,p,o=this,n=o.b
if(n.ae(8)!==47)return!1
s=n.ae(14)+1
r=n.ae(14)+1
q=n.ae(1)
o.dy=s
o.fr=r
p=o.c
p.f=B.an
p.a=s
p.b=r
p.d=q!==0
if(n.ae(3)!==0)return!1
return!0},
bF(){var s,r,q,p,o,n=this,m=null
n.f=0
if(!n.cp())return m
n.cg(n.dy,n.fr,!0)
n.e9(n.dy)
s=n.dy
n.d=A.N(m,m,B.e,0,B.i,n.fr,m,0,4,m,B.e,s,!1)
s=n.cx
s.toString
r=n.c
q=r.a
p=r.b
if(!n.dm(s,q,p,p,n.giN()))return m
s=r.w
if(s.length!==0){o=A.t(new A.aW(s),!1,m,0)
s=n.d
s.toString
s.e=A.iq(o)}return n.d},
e9(a){var s,r=this,q=r.c
q=q.a*q.b+a
s=new Uint32Array(q+a*16)
r.cx=s
r.cy=J.a_(B.o.gA(s),0,null)
r.db=q
return!0},
jb(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.ae(2)
q=l.CW
p=B.a.S(1,r)
if((q&p)>>>0!==0)return!1
l.CW=(q|p)>>>0
o=new A.hO(B.cf)
B.c.N(l.ch,o)
if(!(r<4))return A.a(B.bO,r)
q=B.bO[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.ae(3)+2
o.e=s
o.d=l.cg(A.bS(o.b,s),A.bS(o.c,o.e),!1)
break
case 3:n=s.ae(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.c.h(a,0,A.bS(o.b,m))
o.e=m
o.d=l.cg(n,1,!1)
l.ib(n,o)
break
case 2:break}return!0},
cg(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c)for(s=k.b,r=t.t,q=b,p=a;s.ae(1)!==0;){o=A.j([p,q],r)
if(!k.jb(o))throw A.h(A.o("Invalid Transform"))
p=o[0]
q=o[1]}else{q=b
p=a}s=k.b
if(s.ae(1)!==0){n=s.ae(4)
if(!(n>=1&&n<=11))throw A.h(A.o("Invalid Color Cache"))}else n=0
if(!k.iZ(p,q,n,c))throw A.h(A.o("Invalid Huffman Codes"))
if(n>0){s=B.a.S(1,n)
k.w=s
k.x=new A.jw(new Uint32Array(s),32-n)}else k.w=0
s=k.c
s.a=p
s.b=q
m=k.z
k.Q=A.bS(p,m)
k.y=m===0?4294967295:B.a.S(1,m)-1
if(c){k.f=0
return null}l=new Uint32Array(p*q)
if(!k.dm(l,p,q,q,null))throw A.h(A.o("Failed to decode image data."))
k.f=0
return l},
dm(b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
t.e7.a(b9)
s=b4.f
r=B.a.az(s,b6)
q=B.a.a_(s,b6)
p=b4.ez(q,r)
o=b4.f
n=b6*b7
m=b6*b8
s=b4.w
l=280+s
k=s>0?b4.x:null
j=b4.y
for(s=b5.length,i=b4.b,h=b9!=null,g=b5.$flags|0,f=o;o<m;){if((q&j)>>>0===0){e=b4.ck(b4.as,b4.Q,b4.z,q,r)
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
a1=B.a.a2(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}q=c}continue}if(i.a>=32)i.c_()
if(p.e){a2=i.cw()&63
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
a1=B.a.a2(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}q=c}continue}}else a4=p.c4(0,i)
if(a4<256){if(p.b){d=p.c
g&2&&A.b(b5)
if(!(o>=0&&o<s))return A.a(b5,o)
b5[o]=(d|a4<<8)>>>0}else{a5=p.c4(1,i)
if(i.a>=32)i.c_()
a6=A.nW(p.c4(2,i),a4,a5,p.c4(3,i))
g&2&&A.b(b5)
if(!(o>=0&&o<s))return A.a(b5,o)
b5[o]=a6}++o;++q
if(q>=b6){++r
if(h&&r<=b8)b9.$2(r,!0)
if(k!=null)for(d=k.b,b=k.a,a=b.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b5,f)
a0=b5[f]
a1=B.a.a2(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}q=c}}else if(a4<280){a7=b4.cV(a4-256)
a8=p.c4(4,i)
if(i.a>=32)i.c_()
a9=b4.eL(b6,b4.cV(a8))
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
if(h&&r<=b8)b9.$2(r,!0)}if((q&j)>>>0!==0){e=b4.ck(b4.as,b4.Q,b4.z,q,r)
d=b4.ax
if(!(e<d.length))return A.a(d,e)
p=d[e]}if(k!=null)for(d=k.b,b=k.a,a=b.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b5,f)
a0=b5[f]
a1=B.a.a2(a0*506832829>>>0,d)
a&2&&A.b(b)
if(!(a1<b.length))return A.a(b,a1)
b[a1]=a0;++f}}else if(a4<l){a1=a4-280
while(f<o){k.toString
if(!(f>=0&&f<s))return A.a(b5,f)
d=b5[f]
b2=B.a.a2(d*506832829>>>0,k.b)
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
a1=B.a.a2(b3*506832829>>>0,a)
a0&2&&A.b(d)
if(!(a1<b))return A.a(d,a1)
d[a1]=b3;++f}q=c}}else return!1}if(h)b9.$2(r>b8?b8:r,!1)
b4.f=o
return!0},
iv(){var s,r,q,p,o,n,m,l
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
ic(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b&&B.a.a_(a,16)!==0)return
s=g.r
r=a-s
q=g.dy
p=q*s
while(r>0){o=r>16?16:r
n=q*o
m=q*s
l=g.db
g.ea(s,o,p)
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
hL(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=B.a.az(h,a0),f=B.a.a_(h,a0),e=i.ez(f,g),d=i.f,c=a0*a1,b=a0*a2,a=i.y
h=i.b
for(;;){if(!(!h.b&&d<b))break
if((f&a)>>>0===0){s=i.ck(i.as,i.Q,i.z,f,g)
r=i.ax
if(!(s<r.length))return A.a(r,s)
e=r[s]}if(h.a>=32)h.c_()
q=e.c4(0,h)
if(q<256){r=i.cy
r===$&&A.d()
r.$flags&2&&A.b(r)
if(!(d>=0&&d<r.length))return A.a(r,d)
r[d]=q;++d;++f
if(f>=a0){++g
if(B.a.a_(g,16)===0)i.du(g)
f=0}}else if(q<280){p=i.cV(q-256)
o=e.c4(4,h)
if(h.a>=32)h.c_()
n=i.eL(a0,i.cV(o))
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
if(B.a.a_(g,16)===0)i.du(g)}if(d<b&&(f&a)>>>0!==0){s=i.ck(i.as,i.Q,i.z,f,g)
r=i.ax
if(!(s<r.length))return A.a(r,s)
e=r[s]}}else return!1}i.du(g)
i.f=d
return!0},
du(a){var s,r,q=this,p=q.r,o=a-p,n=q.cy
n===$&&A.d()
s=A.t(n,!1,null,q.c.a*p)
if(o>0){n=q.dx
n.toString
r=A.t(n,!1,null,q.dy*p)
n=q.ch
if(0>=n.length)return A.a(n,0)
n[0].jq(p,p+o,s,r)}q.r=a},
iO(a,b){var s,r,q,p,o,n,m=this,l=m.c.a,k=m.r
if(b)if(B.a.a_(a,16)!==0)return
s=a-k
if(s<=0){m.r=a
return}m.ea(k,s,l*k)
for(r=m.db,q=m.r,p=0;p<s;++p,++q)for(o=0;o<m.dy;++o,++r){l=m.cx
if(!(r>=0&&r<l.length))return A.a(l,r)
n=l[r]
l=m.d.a
if(l!=null)l.ai(o,q,n>>>16&255,n>>>8&255,n&255,n>>>24&255)}m.r=a},
ea(a,b,c){var s,r=this,q=r.ch,p=q.length,o=r.c.a,n=a+b,m=r.db,l=r.cx
l.toString
B.o.ao(l,m,m+o*b,l,c)
for(;s=p-1,p>0;p=s){if(!(s>=0&&s<q.length))return A.a(q,s)
o=q[s]
l=r.cx
l.toString
o.jQ(a,n,l,m,l,m)}},
iZ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=1,c=null
if(a1&&e.b.ae(1)!==0){s=2+e.b.ae(3)
r=A.bS(a,s)
q=A.bS(b,s)
p=r*q
o=e.cg(r,q,!1)
if(o==null)return!1
e.z=s
for(n=o.length,m=o.$flags|0,l=d,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
j=o[k]>>>8&65535
m&2&&A.b(o)
o[k]=j
if(j>=l)l=j+1}if(l>1000||l>a*b){c=new Int32Array(1)
B.Y.aF(c,0,1,255)
for(d=0,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
i=o[k]
if(!(i<1))return A.a(c,i)
if(c[i]===-1){h=d+1
c[i]=d
d=h}g=c[i]
m&2&&A.b(o)
o[k]=g}}else d=l}else{o=null
l=1}if(e.b.b)return!1
f=e.j_(a0,d,l,c)
if(f==null)return!1
e.as=o
e.at=d
e.ax=f
return!0},
dI(a,b,c,d,e,f){var s,r=a.a,q=a.b,p=d
do{p-=c
s=q+(b+p)
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
s.a=e
s.b=f}while(p>0)},
iy(a,b,c){var s=B.a.Y(1,b-c)
while(b<15){s-=a[b]
if(s<=0)break;++b
s=s<<1>>>0}return b-c},
eD(a,b){var s=B.a.Y(1,b-1)
while((a&s)>>>0!==0)s=s>>>1
return s!==0?((a&s-1)>>>0)+s:a},
ed(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.a.S(1,a6),a3=new Int32Array(16),a4=new Int32Array(16)
for(s=a7.length,r=0;r<a8;++r){if(!(r<s))return A.a(a7,r)
q=a7[r]
if(q>15)return 0
if(!(q>=0))return A.a(a3,q)
a3[q]=a3[q]+1}if(a3[0]===a8)return 0
a4[1]=0
for(p=1;p<15;p=o){q=a3[p]
if(q>B.a.S(1,p))return 0
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
a1.dI(a5,0,1,a2,0,a9[0])}return a2}l=a2-1
for(s=a5==null,k=0,j=1,i=1,r=0,p=1,h=2;p<=a6;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
if(!(p<16))return A.a(a3,p)
i-=a3[p]
if(i<0)return 0
if(s)continue
for(g=p&255;a3[p]>0;a3[p]=a3[p]-1,r=f){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a1.dI(a5,k,h,a2,g,a9[r])
k=a1.eD(k,p)}}for(p=a6+1,s=!s,e=a2,d=0,c=4294967295,h=2;p<=15;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
i-=a3[p]
if(i<0)return 0
for(g=p-a6&255;a3[p]>0;a3[p]=a3[p]-1){b=(k&l)>>>0
if(b!==c){if(s)d+=e
a=a1.iy(a3,p,a6)
e=B.a.Y(1,a)
a2+=e
if(s){q=a5.a
m=a5.b+b
if(!(m>=0&&m<q.length))return A.a(q,m)
m=q[m]
m.a=a+a6&255
m.b=d-b}c=b}if(s){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a0=a9[r]
a1.dI(a5,d+B.a.a1(k,a6),h,e,g,a0)
r=f}k=a1.eD(k,p)}}if(j!==2*a4[15]-1)return 0
return a2},
f2(a,b,c,d){var s,r,q,p,o,n,m=this.ed(null,b,c,d,null)
if(m===0||a==null)return m
s=a.b
r=s.d
q=s.e
if(r+m>=q){p=new A.e1()
if(m>q)q=m
o=A.l9(q)
p.e=q
p.b=p.a=o
a.b=p
s=p}n=new Uint16Array(d)
this.ed(s.b,b,c,d,n)
return m},
iY(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new A.fL(new A.e1())
c.e5(128)
if(this.f2(c,7,a,19)===0)return!1
s=this.b
if(s.ae(1)!==0){r=2+s.ae(2+2*s.ae(3))
if(r>b)return!1}else r=b
for(q=8,p=0;p<b;r=o){o=r-1
if(r===0)break
if(s.a>=32)s.c_()
n=c.b.a
n.toString
m=n.a
n=n.b+(s.cw()&127)
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
if(!(i<3))return A.a(B.bd,i)
h=B.bd[i]
g=B.dG[i]
f=s.ae(h)+g
if(p+f>b)return!1
e=k===16?q:0
for(n=a0.$flags|0;d=f-1,f>0;f=d,p=j){j=p+1
n&2&&A.b(a0)
if(!(p>=0&&p<a0.length))return A.a(a0,p)
a0[p]=e}}}return!0},
eQ(a,b,c){var s,r,q,p,o,n,m,l=this.b,k=l.ae(1)
B.Y.aF(b,0,a,0)
if(k!==0){s=l.ae(1)
r=l.ae(l.ae(1)===0?1:8)
b.$flags&2&&A.b(b)
q=b.length
if(!(r<q))return A.a(b,r)
b[r]=1
if(s+1===2){r=l.ae(8)
if(!(r<q))return A.a(b,r)
b[r]=1}p=!0}else{o=new Int32Array(19)
n=l.ae(4)+4
for(m=0;m<n;++m){if(!(m<19))return A.a(B.bA,m)
s=B.bA[m]
q=l.ae(3)
if(!(s<19))return A.a(o,s)
o[s]=q}p=this.iY(o,a,b)}return p&&!l.b?this.f2(c,8,b,a):0},
cM(a,b,c){var s=c.a,r=a.a
c.a=s+r
c.b=(c.b|B.a.S(a.b,b))>>>0
return r},
ht(a){var s,r,q,p,o,n,m,l,k,j,i=this
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
j=B.a.a1(o,i.cM(k,8,n))
if(1>=r)return A.a(s,1)
m=s[1]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.a1(j,i.cM(l[m],16,n))
if(2>=r)return A.a(s,2)
m=s[2]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.a1(j,i.cM(l[m],0,n))
if(3>=r)return A.a(s,3)
m=s[3]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
B.a.a1(j,i.cM(l[m],24,n))}}},
j_(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a9>0,a8=280+(a7?B.a.S(1,a9):0)
if(!(a9<12))return A.a(B.bm,a9)
s=B.bm[a9]
r=b2==null
if(r&&b0!==b1)return a6
q=new Int32Array(a8)
p=J.am(b0,t.ct)
for(o=0;o<b0;++o)p[o]=A.oU()
n=new A.fL(new A.e1())
n.e5(b0*s)
a5.ay=n
for(n=!r,m=0;m<b1;++m){if(n){if(!(m<b2.length))return A.a(b2,m)
l=b2[m]===-1}else l=!1
if(l)for(k=0;k<5;++k){j=B.bo[k]
if(a5.eQ(k===0&&a7?j+B.a.S(1,a9):j,q,a6)===0)return a6}else{if(r)l=m
else{if(!(m<b2.length))return A.a(b2,m)
l=b2[m]}if(!(l>=0&&l<b0))return A.a(p,l)
i=p[l]
h=i.a
for(l=h.length,g=0,f=!0,e=0,k=0;k<5;++k){j=B.bo[k]
if(k===0&&a7)j+=B.a.S(1,a9)
d=a5.eQ(j,q,a5.ay)
c=a5.ay.b.b
c.toString
B.c.h(h,k,c)
if(d===0)return a6
if(f&&B.ht[k]===1){if(!(k<l))return A.a(h,k)
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
c.b=new A.e0(b.a,b.b+d)
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
if(l)a5.ht(i)}}return p},
cV(a){var s
if(a<4)return a+1
s=B.a.j(a-2,1)
return B.a.S(2+(a&1),s)+this.b.ae(s)+1},
eL(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.bp,s)
r=B.bp[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
ib(a,b){var s,r,q,p,o,n,m,l,k=B.a.S(1,B.a.a1(8,b.e)),j=new Uint32Array(k),i=b.d
i.toString
s=J.a_(B.o.gA(i),0,null)
r=J.a_(B.o.gA(j),0,null)
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
ck(a,b,c,d,e){var s
if(c===0||a==null)return 0
s=b*B.a.j(e,c)+B.a.j(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
ez(a,b){var s=this,r=s.ck(s.as,s.Q,s.z,a,b),q=s.ax
if(!(r<q.length))return A.a(q,r)
return q[r]}}
A.h2.prototype={
jH(a,b){return this.ic(a,b)}}
A.hN.prototype={
cw(){var s,r,q,p=this.a
if(p<32){s=this.d
r=B.a.a2(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.X,p)
q=r+((s&B.X[p])>>>0)*(B.X[32-p]+1)}else{s=this.d
q=p===32?s[1]:B.a.a2(s[1],p-32)}return q},
ae(a){var s,r,q=this
if(!q.b&&a<25){s=q.cw()
if(!(a<33))return A.a(B.X,a)
r=B.X[a]
q.a+=a
q.c_()
return(s&r)>>>0}else{q.b=!0
throw A.h(A.o("Not enough data in input."))}},
c_(){var s,r,q,p=this,o=p.c,n=p.d,m=n.$flags|0,l=o.c
for(;;){if(!(p.a>=8&&o.d<l))break
s=J.c(o.a,o.d++)
r=n[0]
q=n[1]
m&2&&A.b(n)
n[0]=(r>>>8)+(q&255)*16777216
n[1]=q>>>8
n[1]=(n[1]|s*16777216)>>>0
p.a-=8}}}
A.jw.prototype={}
A.cw.prototype={
ad(){return"VP8LImageTransformType."+this.b}}
A.hO.prototype={
jQ(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.jm(e,f,(b-a)*n)
break
case 0:o.jT(a,b,c,d,e,f)
if(b!==o.c){s=f-n
B.o.ao(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.jr(a,b,c,d,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.bS(n,o.e)
p=f+r*n-q
B.o.ao(e,p,p+q,c,f)
o.fg(a,b,c,p,e,f)}else o.fg(a,b,c,d,e,f)
break}},
jq(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.a1(8,m),k=this.b,j=this.d
if(l<8){s=B.a.S(1,m)-1
r=B.a.S(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){p=J.c(c.a,c.d);++c.d}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.x(d.a,d.d,m>>>8&255);++d.d
p=B.a.j(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){n=J.c(c.a,c.d);++c.d
if(!(n>=0&&n<j.length))return A.a(j,n)
m=j[n]
J.x(d.a,d.d,m>>>8&255);++d.d}},
fg(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.a1(8,j),h=this.b,g=this.d
if(i<8){s=B.a.S(1,j)-1
r=B.a.S(1,i)-1
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
o=B.a.a1(o,i)}}else for(j=c.length,q=e.$flags|0,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
q&2&&A.b(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k}},
jr(a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.b,a1=a.e,a2=B.a.S(1,a1)-1,a3=A.bS(a0,a1),a4=B.a.j(a5,a.e)*a3
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
i=$.ao()
i.$flags&2&&A.b(i)
i[0]=j
j=$.aA()
if(0>=j.length)return A.a(j,0)
h=j[0]
i[0]=k
g=j[0]
f=$.ic()
f.$flags&2&&A.b(f)
f[0]=h*g
e=$.l0()
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
c6(a,b){return(((a&4278255360)>>>0)+((b&4278255360)>>>0)&4278255360|(a&16711935)+(b&16711935)&16711935)>>>0},
jT(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=4278190080,b0=a8.b
if(b1===0){s=b3.length
if(!(b4<s))return A.a(b3,b4)
r=a8.c6(b3[b4],a9)
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
m=a8.c6(b3[k],m)
k=o+l
r&2&&A.b(b5)
if(!(k<q))return A.a(b5,k)
b5[k]=m}b4+=b0
b6+=b0;++b1}s=a8.e
j=B.a.S(1,s)
i=j-1
h=A.bS(b0,s)
g=B.a.j(b1,a8.e)*h
for(s=b3.length,r=~i,q=b5.length,f=b1;f<b2;){k=b6-b0
if(!(k>=0&&k<q))return A.a(b5,k)
e=b5[k]
if(!(b4<s))return A.a(b3,b4)
k=a8.c6(b3[b4],e)
b5.$flags&2&&A.b(b5)
if(!(b6<q))return A.a(b5,b6)
b5[b6]=k
for(d=g,c=1;c<b0;c=a1,d=b){k=a8.d
b=d+1
if(!(d<k.length))return A.a(k,d)
a=k[d]>>>8&15
a0=$.qj[a]
a1=((c&r)>>>0)+j
if(a1>b0)a1=b0
a2=b4+c
k=b6+c
a3=k-b0
a4=a1-c
if(a===0)for(a5=b5.$flags|0,l=0;l<a4;++l){a6=k+l
a7=a2+l
if(!(a7>=0&&a7<s))return A.a(b3,a7)
a7=a8.c6(b3[a7],a9)
a5&2&&A.b(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=a7}else if(a===1){a5=k-1
if(!(a5>=0&&a5<q))return A.a(b5,a5)
m=b5[a5]
for(a5=b5.$flags|0,l=0;l<a4;++l){a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
m=a8.c6(b3[a6],m)
a6=k+l
a5&2&&A.b(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=m}}else for(l=0;l<a4;++l){a5=k+l
a6=a5-1
if(!(a6>=0&&a6<q))return A.a(b5,a6)
e=a0.$3(b5[a6],b5,a3+l)
a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
a6=a8.c6(b3[a6],e)
b5.$flags&2&&A.b(b5)
if(!(a5>=0&&a5<q))return A.a(b5,a5)
b5[a5]=a6}}b4+=b0
b6+=b0;++f
if((f&i)>>>0===0)g+=h}},
jm(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=a.$flags|0,q=0;q<c;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a[p]
n=o>>>8&255
r&2&&A.b(a)
a[p]=(o&4278255360|(o&16711935)+(n<<16|n)&16711935)>>>0}}}
A.jC.prototype={
gfq(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
dN(a,b,c){var s,r,q,p,o,n,m=this
if(!m.gfq())return!1
s=m.e
if(!(s<4))return A.a(B.bT,s)
r=B.bT[s]
if(m.d===0){s=m.b
q=a*s
p=m.a
B.f.ao(c,q,b*s,p.a,p.d-p.b+q)}else{s=a+b
p=m.x
p===$&&A.d()
p.dx=c
o=p.c
if(m.y)s=p.hL(o.a,o.b,s)
else{n=p.cx
n.toString
p=p.dm(n,o.a,o.b,s,t.d6.a(p.gjG()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,a,b,c)}if(m.f===1)if(!m.i5(c,m.b,m.c,a,b))return!1
if(a+b>=m.c)m.w=!0
return!0},
i5(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.eW.prototype={
hi(a,b){var s=this,r=a.F()
s.r=0
s.f=(r&1)!==0
s.w=a.d-a.b
s.x=b-16}}
A.h3.prototype={}
A.fJ.prototype={}
A.fK.prototype={}
A.e0.prototype={
gu(a){return this.a.length-this.b}}
A.e_.prototype={
c4(a,b){var s,r,q,p,o,n=b.cw()&255,m=this.a
if(!(a<m.length))return A.a(m,a)
s=m[a]
r=s.a
q=s.b+n
if(!(q<r.length))return A.a(r,q)
p=r[q].a-8
if(p>0){b.a+=8
o=b.cw()
m=m[a]
s=m.a
r=m.b+n
if(!(r<s.length))return A.a(s,r)
n=n+s[r].b+((o&B.a.Y(1,p)-1)>>>0)}else m=s
s=b.a
r=m.a
m=m.b+n
if(!(m>=0&&m<r.length))return A.a(r,m)
m=r[m]
b.a=s+m.a
return m.b}}
A.e1.prototype={}
A.fL.prototype={
e5(a){var s=this.b=this.a,r=A.l9(a)
s.e=a
s.b=s.a=r}}
A.dx.prototype={
ad(){return"WebPFormat."+this.b}}
A.dy.prototype={$iJ:1,
gR(){return this.a},
gL(){return this.b}}
A.ea.prototype={}
A.jD.prototype={
bk(a){var s=A.t(t.L.a(a),!1,null,0)
this.b=s
if(!this.ey(s))return!1
return!0},
aw(a){var s,r=this,q=null,p=A.t(t.L.a(a),!1,q,0)
r.b=p
if(!r.ey(p))return q
p=new A.ea(B.a2,A.j([],t.J))
r.a=p
s=r.b
s.toString
if(!r.f3(s,p))return q
p=r.a
switch(p.f.a){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.lL(s,p).cp())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.lJ(s,p).cp())return q
p=r.a
p.as=p.z.length
return p
case 0:throw A.h(A.o("Unknown format for WebP"))}},
aj(a){var s,r,q,p=this,o=p.b
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
return p.en(o.bU(s,r),a)}r=s.f
if(r===B.an)return A.lL(o.bU(s.ch,s.ay),s).bF()
else if(r===B.aO)return A.lJ(o.bU(s.ch,s.ay),s).bF()
return null},
aV(a,b){var s,r,q,p,o,n,m,l,k=this,j=null
if(k.aw(t.L.a(a))==null)return j
s=k.a.e
if(!s)return k.aj(0)
for(r=j,q=r,p=0;s=k.a,p<s.as;++p){s=s.z
if(!(p<s.length))return A.a(s,p)
b=s[p]
o=k.aj(p)
if(o==null)continue
o.y=b.e
if(q==null||r==null){s=k.a
n=s.a
s=s.b
m=o.gbT()
l=o.a
l=l==null?j:l.gK()
if(l==null)l=B.e
q=A.N(j,j,l,o.y,B.i,s,j,0,m,j,B.e,n,!1)
r=q}else{r=A.bI(r,!1,!1)
s=b.f
s===$&&A.d()
if(s){s=r.a
if(s!=null)s.aO(0,j)}}A.i5(r,o,B.T,j,j,b.a,b.b,j,j,j,j)
q.b2(r)}return q},
en(a,b){var s,r,q,p=null,o=A.j([],t.J),n=new A.ea(B.a2,o)
if(!this.f3(a,n))return p
s=n.f
if(s===B.a2)return p
n.as=this.a.as
if(n.e){s=o.length
if(b>=s)return p
r=o[b]
o=r.x
o===$&&A.d()
s=r.w
s===$&&A.d()
return this.en(a.bU(o,s),b)}else{q=a.bU(n.ch,n.ay)
if(s===B.an)return A.lL(q,n).bF()
else if(s===B.aO)return A.lJ(q,n).bF()}return p},
ey(a){if(a.af(4)!=="RIFF")return!1
a.k()
if(a.af(4)!=="WEBP")return!1
return!0},
f3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=a.c,r=a.b;a.d<s;){q=a.af(4)
p=a.k()
o=p+1>>>1<<1>>>0
n=a.d
m=n-r
switch(q){case"VP8X":if(!this.im(a,b))return!1
break
case"VP8 ":b.ay=m
b.ch=p
b.f=B.aO
break
case"VP8L":b.ay=m
b.ch=p
b.f=B.an
break
case"ALPH":b.toString
n=a.a
l=a.e
k=J.a1(n)
j=k.gu(n)
k=k.gu(n)
n=new A.ai(n,0,Math.min(j,k),0,l)
b.at=n
n.d=a.d
a.d+=o
break
case"ANIM":b.f=B.kx
i=a.k()
n=new Uint8Array(4)
n[0]=i>>>8&255
n[1]=i>>>16&255
n[2]=i>>>24&255
n[3]=i&255
a.n()
break
case"ANMF":if(!this.ij(a,b,p))return!1
break
case"ICCP":b.toString
h=a.am(p)
a.d=n+(h.c-h.d)
h.a3()
break
case"EXIF":b.toString
b.w=a.af(p)
break
case"XMP ":b.toString
a.af(p)
break
default:a.d=n+o
break}n=a.d
g=o-(n-r-m)
if(g>0)a.d=n+g}if(!b.d)b.d=b.at!=null
return b.f!==B.a2},
im(a,b){var s,r,q,p,o=a.F()
if((o&192)!==0)return!1
s=B.a.j(o,4)
r=B.a.j(o,1)
if((o&1)!==0)return!1
if(a.be()!==0)return!1
q=a.be()
p=a.be()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
ij(a,b,c){var s,r=a.be(),q=a.be()
a.be()
a.be()
s=new A.h3(r*2,q*2,a.be())
s.hi(a,c)
if(s.r!==0)return!1
B.c.N(b.z,s)
return!0}}
A.fM.prototype={
ad(){return"IccProfileCompression."+this.b}}
A.cZ.prototype={
jC(){var s,r=this
if(r.b===B.av)return r.c
s=B.D.bR(r.c)
r.c=s
r.b=B.av
return s}}
A.fI.prototype={
ad(){return"FrameType."+this.b}}
A.bn.prototype={
gaD(){var s=this.x
return s===$?this.x=A.j([],t.g):s},
hb(a,b,c,d){var s,r,q,p=this,o=a.gK(),n=a.gbT(),m=a.a
p.el(d,b,o,n,m==null?null:m.gT())
o=a.b
if(o!=null)p.b=A.hh(o,t.N,t.w)
o=a.d
if(o!=null){n=t.N
p.d=A.hh(o,n,n)}B.c.N(p.gaD(),p)
if(!c){s=a.gaD().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.j([],o)
if(!(r<q.length))return A.a(q,r)
p.b2(A.fQ(q[r],b,!1,d))}}},
ha(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.b=A.hh(n,t.N,t.w)
n=a.d
if(n!=null){s=t.N
o.d=A.hh(n,s,s)}B.c.N(o.gaD(),o)
if(!b&&a.gaD().length>1){r=a.gaD().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$)p=a.x=A.j([],n)
if(!(q<p.length))return A.a(p,q)
o.b2(A.bI(p[q],!1,!1))}}},
b2(a){var s=this
if(a==null)a=A.bI(s,!0,!0)
a.z=s.gaD().length
if(s.gaD().length===0||B.c.gft(s.gaD())!==a)B.c.N(s.gaD(),a)
return a},
d7(){return this.b2(null)},
el(a,b,c,d,e){var s,r,q=this,p=null
switch(c.a){case 0:if(e==null){s=B.b.b3(a*d/8)
r=new A.d6($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b3(a/8)
r=new A.d6($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.b3(a*(d<<1>>>0)/8)
r=new A.d8($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b3(a/4)
r=new A.d8($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.b3(a*1.5):B.b.b3(a/2)
r=new A.da($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b3(a/2)
r=new A.da($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.mD(a,b,d)
else q.a=new A.db(new Uint8Array(a*b),e,a,b,1)
break
case 4:s=a*b
if(e==null)q.a=new A.d7(new Uint16Array(s*d),p,a,b,d)
else q.a=new A.d7(new Uint16Array(s),e,a,b,1)
break
case 5:q.a=A.oX(a,b,d)
break
case 6:q.a=new A.e6(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.e4(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.e5(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=A.oV(a,b,d)
break
case 10:q.a=A.oW(a,b,d)
break
case 11:q.a=new A.e3(new Float64Array(a*b*4*d),a,b,d)
break}},
B(a){var s=this
return"Image("+s.gR()+", "+s.gL()+", "+s.gK().b+", "+s.gbT()+")"},
gR(){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gL(){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gK(){var s=this.a
s=s==null?null:s.gK()
return s==null?B.e:s},
gbG(){var s=this.e
return s==null?this.e=new A.c1(A.I(t.N,t.P)):s},
fP(a,b){var s=this,r=s.b;(r==null?s.b=A.I(t.N,t.w):r).h(0,a,b)
if(s.b.a===0)s.b=null},
gG(a){var s=this.a
return s.gG(s)},
gA(a){var s=this.a
s=s==null?null:s.gA(s)
if(s==null)s=B.f.gA(new Uint8Array(0))
return s},
a3(){var s=this.a
s=s==null?null:J.ad(s.gA(s))
return s==null?J.ad(this.gA(0)):s},
gbT(){var s=this.a
s=s==null?null:s.gT()
s=s==null?null:s.b
if(s==null){s=this.a
s=s==null?null:s.c}return s==null?0:s},
gcr(){var s=this.a
return(s==null?null:s.gT())!=null},
fo(a,b){return a>=0&&b>=0&&a<this.gR()&&b<this.gL()},
aN(a,b,c,d){var s=this.a
s=s==null?null:s.aN(a,b,c,d)
if(s==null)s=new A.bF(new Uint8Array(0))
return s},
O(a,b,c){var s
A.w(a)
A.w(b)
s=this.a
s=s==null?null:s.O(a,b,c)
return s==null?new A.H():s},
aK(a,b){return this.O(a,b,null)},
ab(a,b){if(a<0||a>=this.gR()||b<0||b>=this.gL())return new A.H()
return this.O(a,b,null)},
dX(a,b,c){switch(c.a){case 0:return this.ab(B.b.i(a),B.b.i(b))
case 1:case 3:return this.fL(a,b)
case 2:return this.fK(a,b)}},
fL(a,b){var s,r,q,p,o,n,m=this,l=B.b.i(a),k=l-(a>=0?0:1),j=k+1
l=B.b.i(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.iD(a-k,b-s)
q=m.ab(k,s)
p=r>=m.gL()?q:m.ab(k,r)
o=j>=m.gR()?q:m.ab(j,s)
n=j>=m.gR()||r>=m.gL()?q:m.ab(j,r)
return m.aN(l.$4(q.gm(),o.gm(),p.gm(),n.gm()),l.$4(q.gt(),o.gt(),p.gt(),n.gt()),l.$4(q.gq(),o.gq(),p.gq(),n.gq()),l.$4(q.gv(),o.gv(),p.gv(),n.gv()))},
fK(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=this,c7=B.b.i(d2),c8=c7-(d2>=0?0:1),c9=c8-1,d0=c8+1,d1=c8+2
c7=B.b.i(d3)
s=c7-(d3>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d2-c8
n=d3-s
c7=new A.iC()
m=c6.ab(c8,s)
l=c9<0
k=!l
j=!k||r<0?m:c6.ab(c9,r)
i=l?m:c6.ab(c8,r)
h=r<0
g=h||d0>=c6.gR()?m:c6.ab(d0,r)
f=d1>=c6.gR()||h?m:c6.ab(d1,r)
e=c7.$5(o,j.gm(),i.gm(),g.gm(),f.gm())
d=c7.$5(o,j.gt(),i.gt(),g.gt(),f.gt())
c=c7.$5(o,j.gq(),i.gq(),g.gq(),f.gq())
b=c7.$5(o,j.gv(),i.gv(),g.gv(),f.gv())
a=l?m:c6.ab(c9,s)
a0=d0>=c6.gR()?m:c6.ab(d0,s)
a1=d1>=c6.gR()?m:c6.ab(d1,s)
a2=c7.$5(o,a.gm(),m.gm(),a0.gm(),a1.gm())
a3=c7.$5(o,a.gt(),m.gt(),a0.gt(),a1.gt())
a4=c7.$5(o,a.gq(),m.gq(),a0.gq(),a1.gq())
a5=c7.$5(o,a.gv(),m.gv(),a0.gv(),a1.gv())
a6=!k||q>=c6.gL()?m:c6.ab(c9,q)
a7=q>=c6.gL()?m:c6.ab(c8,q)
a8=d0>=c6.gR()||q>=c6.gL()?m:c6.ab(d0,q)
a9=d1>=c6.gR()||q>=c6.gL()?m:c6.ab(d1,q)
b0=c7.$5(o,a6.gm(),a7.gm(),a8.gm(),a9.gm())
b1=c7.$5(o,a6.gt(),a7.gt(),a8.gt(),a9.gt())
b2=c7.$5(o,a6.gq(),a7.gq(),a8.gq(),a9.gq())
b3=c7.$5(o,a6.gv(),a7.gv(),a8.gv(),a9.gv())
b4=!k||p>=c6.gL()?m:c6.ab(c9,p)
b5=p>=c6.gL()?m:c6.ab(c8,p)
b6=d0>=c6.gR()||p>=c6.gL()?m:c6.ab(d0,p)
b7=d1>=c6.gR()||p>=c6.gL()?m:c6.ab(d1,p)
b8=c7.$5(o,b4.gm(),b5.gm(),b6.gm(),b7.gm())
b9=c7.$5(o,b4.gt(),b5.gt(),b6.gt(),b7.gt())
c0=c7.$5(o,b4.gq(),b5.gq(),b6.gq(),b7.gq())
c1=c7.$5(o,b4.gv(),b5.gv(),b6.gv(),b7.gv())
c2=c7.$5(n,e,a2,b0,b8)
c3=c7.$5(n,d,a3,b1,b9)
c4=c7.$5(n,c,a4,b2,c0)
c5=c7.$5(n,b,a5,b3,c1)
return c6.aN(B.b.i(c2),B.b.i(c3),B.b.i(c4),B.b.i(c5))},
bK(a,b,c){var s
if(t.dv.b(c))if(c.gb5().gT()!=null)if(this.gcr()){s=this.a
if(s!=null)s.a4(a,b,c.gP(),0,0)
return}s=this.a
if(s!=null)s.ai(a,b,c.gm(),c.gt(),c.gq(),c.gv())},
a4(a,b,c,d,e){var s=this.a
return s==null?null:s.a4(a,b,c,d,e)},
gE(){var s=this.a
s=s==null?null:s.gE()
return s==null?0:s},
aO(a,b){var s=this.a
return s==null?null:s.aO(0,b)},
da(a){return this.aO(0,null)},
fj(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.gK()
if(a9==null)a9=a5.gbT()
s=B.bY.l(0,a7)
a8=s
r=!1
if(a7===a5.gK())if(a9===a5.gbT()){q=a5.a
r=(q==null?a6:q.gT())==null}if(r){p=A.bI(a5,!1,!1)
return p}for(r=a5.gaD(),q=r.length,o=t.N,n=t.p,m=a6,l=0;l<r.length;r.length===q||(0,A.a3)(r),++l,m=d){k=r[l]
j=k.a
i=j==null
h=i?a6:j.a
if(h==null)h=0
j=i?a6:j.b
if(j==null)j=0
i=k.e
i=i==null?a6:A.dS(i)
g=k.c
if(g==null)g=a6
else{f=g.a
e=g.b
g=g.c
g=new A.cZ(f,e,new Uint8Array(g.subarray(0,A.b5(0,a6,g.length))))}f=k.w
e=k.r
p=A.N(a6,i,a7,k.y,f,j,g,e,a9,a6,B.e,h,!1)
j=k.d
p.skb(j!=null?A.hh(j,o,o):a6)
if(m!=null){m.b2(p)
d=m}else d=p
j=p.a
c=j==null?a6:j.gT()
j=p.a
j=j==null?a6:j.gT()
b=j==null?a6:j.gK()
if(b==null)b=a7
j=k.a
if(c!=null){a=A.I(n,n)
a0=j==null?a6:j.O(0,0,a6)
if(a0==null)a0=new A.H()
for(j=p.a,j=j.gG(j),a1=a6,a2=0;j.D();){a3=j.gM()
a4=A.nW(B.b.bH(a0.gaa()*255),B.b.bH(a0.ga6()*255),B.b.bH(a0.ga9()*255),0)
if(a.ag(a4)){i=a.l(0,a4)
i.toString
a3.sP(i)}else{a.h(0,a4,a2)
a3.sP(a2)
a1=A.aN(a0,a8,b,a9,a1)
c.b8(a2,a1.gm(),a1.gt(),a1.gq());++a2}a0.D()}}else{a0=j==null?a6:j.O(0,0,a6)
if(a0==null)a0=new A.H()
for(j=p.a,j=j.gG(j);j.D();){A.aN(a0,a8,a6,a6,j.gM())
a0.D()}}}m.toString
return m},
fi(a){return this.fj(null,a)},
jn(a){var s,r,q,p
t.ck.a(a)
if(this.d==null){s=t.N
this.d=A.I(s,s)}for(s=new A.R(a,a.r,a.e,A.m(a).p("R<1>"));s.D();){r=s.d
q=this.d
q.toString
p=a.l(0,r)
p.toString
q.h(0,r,p)}},
hF(a,b,c){var s,r=65536
switch(b.a){case 0:return null
case 1:return null
case 2:return null
case 3:s=a===B.l?r:256
return new A.b0(new Uint8Array(s*c),s,c)
case 4:s=a===B.l?r:256
return new A.eB(new Uint16Array(s*c),s,c)
case 5:s=a===B.l?r:256
return new A.eC(new Uint32Array(s*c),s,c)
case 6:s=a===B.l?r:256
return new A.eA(new Int8Array(s*c),s,c)
case 7:s=a===B.l?r:256
return new A.ey(new Int16Array(s*c),s,c)
case 8:s=a===B.l?r:256
return new A.ez(new Int32Array(s*c),s,c)
case 9:s=a===B.l?r:256
return new A.ev(new Uint16Array(s*c),s,c)
case 10:s=a===B.l?r:256
return new A.ew(new Float32Array(s*c),s,c)
case 11:s=a===B.l?r:256
return new A.ex(new Float64Array(s*c),s,c)}},
skb(a){this.d=t.cZ.a(a)}}
A.iD.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:25}
A.iC.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:26}
A.ah.prototype={
gT(){return null},
fJ(a,b){var s,r,q,p,o,n,m,l=this
if(b==null)return J.ad(l.gA(l))
s=l.c
if(s===4){s=b===B.cE
if(s||b===B.aV||b===B.aU){r=a?l:l.I()
if(s)for(s=r.gG(r);s.D();){q=s.gM()
p=q.gm()
o=q.gt()
n=q.gq()
q.sm(q.gv())
q.st(n)
q.sq(o)
q.sv(p)}else if(b===B.aV)for(s=r.gG(r);s.D();){q=s.gM()
p=q.gm()
o=q.gt()
n=q.gq()
q.sm(q.gv())
q.st(p)
q.sq(o)
q.sv(n)}else if(b===B.aU)for(s=r.gG(r);s.D();){q=s.gM()
p=q.gm()
o=q.gt()
n=q.gq()
m=q.gv()
q.sm(n)
q.st(o)
q.sq(p)
q.sv(m)}return J.ad(r.gA(r))}}else if(s===3)if(b===B.cG){r=a?l:l.I()
for(s=r.gG(r);s.D();){q=s.gM()
p=q.gm()
q.sm(q.gq())
q.sq(p)}return J.ad(r.gA(r))}return J.ad(l.gA(l))}}
A.d4.prototype={
an(a){var s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.z(r))
return new A.d4(r,s.a,s.b,s.c)},
I(){return this.an(!1)},
gK(){return B.E},
gA(a){return B.Z.gA(this.d)},
gG(a){return A.ln(this)},
b7(a,b,c,d,e){return A.b1(A.ln(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gE(){return 1},
aN(a,b,c,d){var s=new Uint16Array(4),r=new A.cL(s)
s[0]=A.K(a)
s[1]=A.K(b)
s[2]=A.K(c)
s[3]=A.K(d)
s=r
return s},
O(a,b,c){if(c==null||!(c instanceof A.cf)||c.d!==this)c=A.ln(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=A.K(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.K(c)
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
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.K(c)
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
B(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.d5.prototype={
an(a){var s=this,r=s.d
if(a)r=new Float32Array(r.length)
else r=new Float32Array(A.z(r))
return new A.d5(r,s.a,s.b,s.c)},
I(){return this.an(!1)},
gK(){return B.J},
gA(a){return B.aj.gA(this.d)},
gG(a){return A.lo(this)},
b7(a,b,c,d,e){return A.b1(A.lo(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gE(){return 1},
aN(a,b,c,d){var s=new Float32Array(4),r=new A.cM(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
O(a,b,c){if(c==null||!(c instanceof A.cg)||c.d!==this)c=A.lo(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
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
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
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
B(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.e3.prototype={
an(a){var s=this,r=s.d
if(a)r=new Float64Array(r.length)
else r=new Float64Array(A.z(r))
return new A.e3(r,s.a,s.b,s.c)},
I(){return this.an(!1)},
gK(){return B.L},
gA(a){return B.ak.gA(this.d)},
gu(a){return this.d.byteLength},
gG(a){return A.lp(this)},
b7(a,b,c,d,e){return A.b1(A.lp(this),b,c,d,e)},
gE(){return 1},
aN(a,b,c,d){var s=new Float64Array(4),r=new A.cN(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
O(a,b,c){if(c==null||!(c instanceof A.ch)||c.d!==this)c=A.lp(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
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
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
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
B(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.e4.prototype={
an(a){var s=this,r=s.d
if(a)r=new Int16Array(r.length)
else r=new Int16Array(A.z(r))
return new A.e4(r,s.a,s.b,s.c)},
I(){return this.an(!1)},
gK(){return B.N},
gA(a){return B.aE.gA(this.d)},
gG(a){return A.lq(this)},
b7(a,b,c,d,e){return A.b1(A.lq(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gE(){return 32767},
aN(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int16Array(4),n=new A.cO(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
O(a,b,c){if(c==null||!(c instanceof A.ci)||c.d!==this)c=A.lq(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.i(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.i(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.i(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
B(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.e5.prototype={
an(a){var s=this,r=s.d
if(a)r=new Int32Array(r.length)
else r=new Int32Array(A.z(r))
return new A.e5(r,s.a,s.b,s.c)},
I(){return this.an(!1)},
gK(){return B.O},
gA(a){return B.Y.gA(this.d)},
gG(a){return A.lr(this)},
b7(a,b,c,d,e){return A.b1(A.lr(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gE(){return 2147483647},
aN(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int32Array(4),n=new A.cP(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
O(a,b,c){if(c==null||!(c instanceof A.cj)||c.d!==this)c=A.lr(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.i(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.i(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.i(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
B(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.e6.prototype={
an(a){var s=this,r=s.d
if(a)r=new Int8Array(r.length)
else r=new Int8Array(A.z(r))
return new A.e6(r,s.a,s.b,s.c)},
I(){return this.an(!1)},
gK(){return B.M},
gA(a){return B.aF.gA(this.d)},
gG(a){return A.ls(this)},
b7(a,b,c,d,e){return A.b1(A.ls(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gE(){return 127},
aN(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int8Array(4),n=new A.cQ(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
O(a,b,c){if(c==null||!(c instanceof A.ck)||c.d!==this)c=A.ls(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.i(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.i(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.i(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
B(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.d6.prototype={
kq(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.m3()
this.d=s},
an(a){var s,r=this,q=r.d
if(a){q===$&&A.d()
q=new Uint8Array(q.length)}else{q===$&&A.d()
q=new Uint8Array(A.z(q))}s=r.f
s=s==null?null:s.I()
return new A.d6(q,r.e,s,r.a,r.b,r.c)},
I(){return this.an(!1)},
gK(){return B.w},
gu(a){var s=this.d
s===$&&A.d()
return s.byteLength},
gE(){var s=this.f
s=s==null?null:s.gE()
return s==null?1:s},
gA(a){var s=this.d
s===$&&A.d()
return B.f.gA(s)},
gG(a){return A.eD(this)},
b7(a,b,c,d,e){return A.b1(A.eD(this),b,c,d,e)},
aN(a,b,c,d){var s=new A.cS(4,0)
s.a8(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
O(a,b,c){if(c==null||!(c instanceof A.cl)||c.f!==this)c=A.eD(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eD(r):s).a0(a,b)
r.r.aq(0,c)},
a4(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eD(r):s).a0(a,b)
r.r.ap(c,d,e)},
ai(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eD(r):s).a0(a,b)
r.r.a8(c,d,e,f)},
B(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){},
gT(){return this.f}}
A.d7.prototype={
an(a){var s,r=this,q=r.d
if(a)q=new Uint16Array(q.length)
else q=new Uint16Array(A.z(q))
s=r.e
s=s==null?null:s.I()
return new A.d7(q,s,r.a,r.b,r.c)},
I(){return this.an(!1)},
gK(){return B.l},
gA(a){return B.Z.gA(this.d)},
gE(){var s=this.e
s=s==null?null:s.gE()
return s==null?65535:s},
gG(a){return A.lt(this)},
b7(a,b,c,d,e){return A.b1(A.lt(this),b,c,d,e)},
gu(a){return this.d.byteLength},
aN(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint16Array(4),n=new A.cT(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
O(a,b,c){if(c==null||!(c instanceof A.cm)||c.d!==this)c=A.lt(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.i(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.i(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.i(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
B(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){},
gT(){return this.e}}
A.d8.prototype={
kr(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.m3()
this.d=s},
an(a){var s,r=this,q=r.d
if(a){q===$&&A.d()
q=new Uint8Array(q.length)}else{q===$&&A.d()
q=new Uint8Array(A.z(q))}s=r.f
s=s==null?null:s.I()
return new A.d8(q,r.e,s,r.a,r.b,r.c)},
I(){return this.an(!1)},
gK(){return B.B},
gA(a){var s=this.d
s===$&&A.d()
return B.f.gA(s)},
gG(a){return A.eE(this)},
b7(a,b,c,d,e){return A.b1(A.eE(this),b,c,d,e)},
gu(a){var s=this.d
s===$&&A.d()
return s.byteLength},
gE(){var s=this.f
s=s==null?null:s.gE()
return s==null?3:s},
aN(a,b,c,d){var s=new A.cU(4,0)
s.a8(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
O(a,b,c){if(c==null||!(c instanceof A.cn)||c.f!==this)c=A.eE(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eE(r):s).a0(a,b)
r.r.ar(0,c)},
a4(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eE(r):s).a0(a,b)
r.r.ap(c,d,e)},
ai(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eE(r):s).a0(a,b)
r.r.a8(c,d,e,f)},
B(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){},
gT(){return this.f}}
A.d9.prototype={
an(a){var s=this,r=s.d
if(a)r=new Uint32Array(r.length)
else r=new Uint32Array(A.z(r))
return new A.d9(r,s.a,s.b,s.c)},
I(){return this.an(!1)},
gK(){return B.K},
gA(a){return B.o.gA(this.d)},
gE(){return 4294967295},
gG(a){return A.lu(this)},
b7(a,b,c,d,e){return A.b1(A.lu(this),b,c,d,e)},
gu(a){return this.d.byteLength},
aN(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint32Array(4),n=new A.cV(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
O(a,b,c){if(c==null||!(c instanceof A.co)||c.d!==this)c=A.lu(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.i(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.i(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.i(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
B(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){}}
A.da.prototype={
ks(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.m3()
this.d=s},
an(a){var s,r=this,q=r.d
if(a){q===$&&A.d()
q=new Uint8Array(q.length)}else{q===$&&A.d()
q=new Uint8Array(A.z(q))}s=r.f
s=s==null?null:s.I()
return new A.da(q,r.e,s,r.a,r.b,r.c)},
I(){return this.an(!1)},
gK(){return B.C},
gA(a){var s=this.d
s===$&&A.d()
return B.f.gA(s)},
gG(a){return A.eF(this)},
b7(a,b,c,d,e){return A.b1(A.eF(this),b,c,d,e)},
gu(a){var s=this.d
s===$&&A.d()
return s.byteLength},
gE(){var s=this.f
s=s==null?null:s.gE()
return s==null?15:s},
aN(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new A.cW(4,new Uint8Array(2))
o.a8(s,r,q,p)
s=o
return s},
O(a,b,c){if(c==null||!(c instanceof A.cp)||c.e!==this)c=A.eF(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eF(r):s).a0(a,b)
r.r.au(0,c)},
a4(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eF(r):s).a0(a,b)
r.r.ap(c,d,e)},
ai(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.eF(r):s).a0(a,b)
r.r.a8(c,d,e,f)},
B(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){},
gT(){return this.f}}
A.db.prototype={
an(a){var s,r=this,q=r.d
if(a)q=new Uint8Array(q.length)
else q=new Uint8Array(A.z(q))
s=r.e
s=s==null?null:s.I()
return new A.db(q,s,r.a,r.b,r.c)},
I(){return this.an(!1)},
gK(){return B.e},
gA(a){return B.f.gA(this.d)},
gG(a){return A.iZ(this)},
b7(a,b,c,d,e){return A.b1(A.iZ(this),b,c,d,e)},
gu(a){return this.d.byteLength},
gE(){var s=this.e
s=s==null?null:s.gE()
return s==null?255:s},
aN(a,b,c,d){var s=A.oC(B.b.i(B.b.J(a,0,255)),B.b.i(B.b.J(b,0,255)),B.b.i(B.b.J(c,0,255)),B.b.i(B.b.J(d,0,255)))
return s},
O(a,b,c){if(c==null||!(c instanceof A.cq)||c.d!==this)c=A.iZ(this)
c.a0(a,b)
return c},
aK(a,b){return this.O(a,b,null)},
aH(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.i(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
a4(a,b,c,d,e){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.i(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
ai(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.i(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.i(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.i(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.i(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
B(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
aO(a,b){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===1){k=l.d
B.f.aF(k,0,k.length,0)}else if(k===2){s=J.mc(B.f.gA(l.d),0,null)
B.Z.aF(s,0,s.length,0)}else if(k===4){r=J.aC(B.f.gA(l.d),0,null)
B.o.aF(r,0,r.length,0)}else for(q=A.iZ(l),k=q.d,p=k.c>0,k=k.d,o=k.$flags|0;q.D();){if(p){n=q.c
m=B.b.i(B.a.J(0,0,255))
o&2&&A.b(k)
if(!(n>=0&&n<k.length))return A.a(k,n)
k[n]=m}q.st(0)
q.sq(0)}},
gT(){return this.e}}
A.eb.prototype={
ad(){return"Interpolation."+this.b}}
A.aP.prototype={}
A.ev.prototype={
I(){return new A.ev(new Uint16Array(A.z(this.c)),this.a,this.b)},
gK(){return B.E},
gE(){return 1},
W(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=A.K(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b8(a,b,c,d){var s,r,q,p,o=this.b
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
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s,r
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
r=$.Q
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
return r[s]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Q
s=s!=null?s:A.T()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.ew.prototype={
I(){return new A.ew(new Float32Array(A.z(this.c)),this.a,this.b)},
gK(){return B.J},
gE(){return 1},
W(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
b8(a,b,c,d){var s,r,q,p=this.b
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
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.ex.prototype={
I(){return new A.ex(new Float64Array(A.z(this.c)),this.a,this.b)},
gK(){return B.L},
gE(){return 1},
W(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
b8(a,b,c,d){var s,r,q,p=this.b
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
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.ey.prototype={
I(){return new A.ey(new Int16Array(A.z(this.c)),this.a,this.b)},
gK(){return B.N},
gE(){return 32767},
W(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b8(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.ez.prototype={
I(){return new A.ez(new Int32Array(A.z(this.c)),this.a,this.b)},
gK(){return B.O},
gE(){return 2147483647},
W(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b8(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.eA.prototype={
I(){return new A.eA(new Int8Array(A.z(this.c)),this.a,this.b)},
gK(){return B.M},
gE(){return 127},
W(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b8(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.eB.prototype={
I(){return new A.eB(new Uint16Array(A.z(this.c)),this.a,this.b)},
gK(){return B.l},
gE(){return 65535},
W(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b8(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.eC.prototype={
I(){return new A.eC(new Uint32Array(A.z(this.c)),this.a,this.b)},
gK(){return B.K},
gE(){return 4294967295},
W(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b8(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aS(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aR(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.b0.prototype={
I(){return A.mU(this)},
gK(){return B.e},
gE(){return 255},
W(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.i(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b8(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
cK(a,b,c,d,e){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.a.i(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.a.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){r=a+2
p=B.a.i(d)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>3){o=a+3
r=B.a.i(e)
if(!(o<q))return A.a(s,o)
s[o]=r}}}},
aX(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aT(a){var s,r
a*=this.b
s=this.c
r=s.length
if(a>=r)return 0
if(!(a>=0))return A.a(s,a)
return s[a]},
aS(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aR(a){var s,r,q=this.b
if(q<3)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+2
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aY(a){var s,r,q=this.b
if(q<4)return 255
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+3
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
bq(a,b){return this.W(a,0,b)},
bp(a,b){return this.W(a,1,b)},
bo(a,b){return this.W(a,2,b)},
bn(a,b){return this.W(a,3,b)}}
A.cf.prototype={
I(){var s=this
return new A.cf(s.a,s.b,s.c,s.d)},
gK(){return B.E},
gu(a){return this.d.c},
gT(){return null},
gE(){return 1},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=A.K(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sm(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.K(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=A.K(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Q
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
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
r=r!=null?r:A.T()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q,p=this.d
if(p.c>3){s=this.gt()
p=p.d
r=this.c+3
q=A.K(s)
p.$flags&2&&A.b(p)
if(!(r>=0&&r<p.length))return A.a(p,r)
p[r]=q}},
gaa(){return this.gm()/1},
saa(a){this.sm(a)},
ga6(){return this.gt()/1},
sa6(a){this.st(a)},
ga9(){return this.gq()/1},
sa9(a){this.sq(a)},
gX(){return this.gv()/1},
sX(a){this.sv(a)},
gah(){return A.X(this)},
ac(a){var s=this
if(s.d.c>0){s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())}},
ap(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
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
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cf){s=A.u(n,A.m(n).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.cg.prototype={
I(){var s=this
return new A.cg(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gE(){return 1},
gK(){return B.J},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sm(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gq(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
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
gaa(){return this.gm()/1},
saa(a){this.sm(a)},
ga6(){return this.gt()/1},
sa6(a){this.st(a)},
ga9(){return this.gq()/1},
sa9(a){this.sq(a)},
gX(){return this.gv()/1},
sX(a){this.sv(a)},
gah(){return A.X(this)},
ac(a){var s=this
s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())},
ap(a,b,c){var s,r,q=this.d,p=q.d,o=this.c
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
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cg){s=A.u(n,A.m(n).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.ch.prototype={
I(){var s=this
return new A.ch(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gE(){return 1},
gK(){return B.L},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sm(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gq(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
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
gaa(){return this.gm()/1},
saa(a){this.sm(a)},
ga6(){return this.gt()/1},
sa6(a){this.st(a)},
ga9(){return this.gq()/1},
sa9(a){this.sq(a)},
gX(){return this.gv()/1},
sX(a){this.sv(a)},
gah(){return A.X(this)},
ac(a){var s=this
s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())},
ap(a,b,c){var s,r,q=this.d,p=q.d,o=this.c
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
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ch){s=A.u(n,A.m(n).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.ci.prototype={
I(){var s=this
return new A.ci(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gE(){return 32767},
gK(){return B.N},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sm(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
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
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gm()/32767},
saa(a){this.sm(a*32767)},
ga6(){return this.gt()/32767},
sa6(a){this.st(a*32767)},
ga9(){return this.gq()/32767},
sa9(a){this.sq(a*32767)},
gX(){return this.gv()/32767},
sX(a){this.sv(a*32767)},
gah(){return A.X(this)},
ac(a){var s=this
s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())},
ap(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ci){s=A.u(n,A.m(n).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.cj.prototype={
I(){var s=this
return new A.cj(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gE(){return 2147483647},
gK(){return B.O},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sm(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
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
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gm()/2147483647},
saa(a){this.sm(a*2147483647)},
ga6(){return this.gt()/2147483647},
sa6(a){this.st(a*2147483647)},
ga9(){return this.gq()/2147483647},
sa9(a){this.sq(a*2147483647)},
gX(){return this.gv()/2147483647},
sX(a){this.sv(a*2147483647)},
gah(){return A.X(this)},
ac(a){var s=this
s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())},
ap(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cj){s=A.u(n,A.m(n).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.ck.prototype={
I(){var s=this
return new A.ck(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gE(){return 127},
gK(){return B.M},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sm(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
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
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gm()/127},
saa(a){this.sm(a*127)},
ga6(){return this.gt()/127},
sa6(a){this.st(a*127)},
ga9(){return this.gq()/127},
sa9(a){this.sq(a*127)},
gX(){return this.gv()/127},
sX(a){this.sv(a*127)},
gah(){return A.X(this)},
ac(a){var s=this
s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())},
ap(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.ck){s=A.u(n,A.m(n).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.hm.prototype={
D(){var s=this,r=s.a
if(r.gaQ()+1>s.d){r.a0(s.b,r.gaM()+1)
return r.gaM()<=s.e}return r.D()},
gM(){return this.a},
$iB:1}
A.cl.prototype={
I(){var s=this
return new A.cl(s.a,s.b,s.c,s.d,s.e,s.f)},
gu(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.f.f},
gE(){return this.f.gE()},
gK(){return B.w},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.f
r=b*s.e
q.e=r
s=a*s.c
q.c=r+B.a.j(s,3)
q.d=s&7},
gM(){return this},
D(){var s,r=this,q=++r.a,p=r.f
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
dD(a){var s,r,q=this.c,p=7-(this.d+a)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.d()
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.a2(s[q],p)&1},
aZ(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dD(a):0
else s=r.aX(this.dD(0),a)
return s},
aq(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=7-(this.d+a)
if(r<0){++s
r+=8}q=m.d
q===$&&A.d()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.J(B.b.i(b),0,1)
if(!(r>=0&&r<8))return A.a(B.bt,r)
n=B.bt[r]
q=B.a.Y(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
l(a,b){return this.aZ(b)},
h(a,b,c){return this.aq(b,c)},
gP(){return this.dD(0)},
sP(a){this.aq(0,a)},
gm(){return this.aZ(0)},
sm(a){this.aq(0,a)},
gt(){return this.aZ(1)},
st(a){this.aq(1,a)},
gq(){return this.aZ(2)},
sq(a){this.aq(2,a)},
gv(){return this.aZ(3)},
sv(a){this.aq(3,a)},
gaa(){return this.aZ(0)/this.f.gE()},
saa(a){this.aq(0,a*this.f.gE())},
ga6(){return this.aZ(1)/this.f.gE()},
sa6(a){this.aq(1,a*this.f.gE())},
ga9(){return this.aZ(2)/this.f.gE()},
sa9(a){this.aq(2,a*this.f.gE())},
gX(){return this.aZ(3)/this.f.gE()},
sX(a){this.aq(3,a*this.f.gE())},
gah(){return A.X(this)},
ac(a){var s=this
s.aq(0,a.gm())
s.aq(1,a.gt())
s.aq(2,a.gq())
s.aq(3,a.gv())},
ap(a,b,c){var s=this,r=s.f.c
if(r>0){s.aq(0,a)
if(r>1){s.aq(1,b)
if(r>2)s.aq(2,c)}}},
a8(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.aq(0,a)
if(r>1){s.aq(1,b)
if(r>2){s.aq(2,c)
if(r>3)s.aq(3,d)}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cl){s=A.u(p,A.m(p).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.aZ(0)!==s.l(b,0))return!1
if(q>1){if(p.aZ(1)!==s.l(b,1))return!1
if(q>2){if(p.aZ(2)!==s.l(b,2))return!1
if(q>3)if(p.aZ(3)!==s.l(b,3))return!1}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.f}}
A.cm.prototype={
I(){var s=this
return new A.cm(s.a,s.b,s.c,s.d)},
gu(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.d.e},
gE(){return this.d.gE()},
gK(){return B.l},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bh(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aX(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
l(a,b){return this.bh(b)},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aT(r[s])
r=s}return r},
sm(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d,q=r.e
if(q==null)if(r.c>1){r=r.d
q=this.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aS(r[s])
r=s}return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d,q=r.e
if(q==null)if(r.c>2){r=r.d
q=this.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aR(r[s])
r=s}return r},
sq(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
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
s=q.aY(r[s])
r=s}return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gm()/this.d.gE()},
saa(a){this.sm(a*this.d.gE())},
ga6(){return this.gt()/this.d.gE()},
sa6(a){this.st(a*this.d.gE())},
ga9(){return this.gq()/this.d.gE()},
sa9(a){this.sq(a*this.d.gE())},
gX(){return this.gv()/this.d.gE()},
sX(a){this.sv(a*this.d.gE())},
gah(){return A.X(this)},
ac(a){var s=this
s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())},
ap(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cm){s=A.u(p,A.m(p).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.bh(0)!==s.l(b,0))return!1
if(q>1){if(p.bh(1)!==s.l(b,1))return!1
if(q>2){if(p.bh(2)!==s.l(b,2))return!1
if(q>3)if(p.bh(3)!==s.l(b,3))return!1}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.cn.prototype={
I(){var s=this
return new A.cn(s.a,s.b,s.c,s.d,s.e,s.f)},
gu(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.f.f},
gE(){return this.f.gE()},
gK(){return B.B},
gff(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.gff()
r=b*p.f.e
p.e=r
q=a*s
p.c=r+B.a.j(q,3)
p.d=q&7},
gM(){return this},
D(){var s=this,r=++s.a,q=s.f
if(r===q.a){s.a=0
r=++s.b
s.d=0;++s.c
s.e=s.e+q.e
return r<q.b}if(q.f!=null||q.c===1){if((s.d+=2)>7){s.d=0;++s.c}}else{r*=s.gff()
s.d=r&7
s.c=s.e+B.a.j(r,3)}r=s.c
q=q.d
q===$&&A.d()
return r<q.length},
dE(a){var s,r=this.c,q=6-(this.d+(a<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.d()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a2(s[r],q)&3},
b_(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dE(a):0
else s=r.aX(this.dE(0),a)
return s},
ar(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=6-(this.d+(a<<1>>>0))
if(r<0){++s
r+=8}q=m.d
q===$&&A.d()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.J(B.b.i(b),0,3)
q=B.a.j(r,1)
if(!(q<4))return A.a(B.ba,q)
n=B.ba[q]
q=B.a.Y(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
l(a,b){return this.b_(b)},
h(a,b,c){return this.ar(b,c)},
gP(){return this.dE(0)},
sP(a){this.ar(0,a)},
gm(){return this.b_(0)},
sm(a){this.ar(0,a)},
gt(){return this.b_(1)},
st(a){this.ar(1,a)},
gq(){return this.b_(2)},
sq(a){this.ar(2,a)},
gv(){return this.b_(3)},
sv(a){this.ar(3,a)},
gaa(){return this.b_(0)/this.f.gE()},
saa(a){this.ar(0,a*this.f.gE())},
ga6(){return this.b_(1)/this.f.gE()},
sa6(a){this.ar(1,a*this.f.gE())},
ga9(){return this.b_(2)/this.f.gE()},
sa9(a){this.ar(2,a*this.f.gE())},
gX(){return this.b_(3)/this.f.gE()},
sX(a){this.ar(3,a*this.f.gE())},
gah(){return A.X(this)},
ac(a){var s=this
s.ar(0,a.gm())
s.ar(1,a.gt())
s.ar(2,a.gq())
s.ar(3,a.gv())},
ap(a,b,c){var s=this,r=s.f.c
if(r>0){s.ar(0,a)
if(r>1){s.ar(1,b)
if(r>2)s.ar(2,c)}}},
a8(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.ar(0,a)
if(r>1){s.ar(1,b)
if(r>2){s.ar(2,c)
if(r>3)s.ar(3,d)}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cn){s=A.u(p,A.m(p).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.b_(0)!==s.l(b,0))return!1
if(q>1){if(p.b_(1)!==s.l(b,1))return!1
if(q>2){if(p.b_(2)!==s.l(b,2))return!1
if(q>3)if(p.b_(3)!==s.l(b,3))return!1}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.f}}
A.co.prototype={
I(){var s=this
return new A.co(s.a,s.b,s.c,s.d)},
gu(a){return this.d.c},
gT(){return null},
gE(){return 4294967295},
gK(){return B.K},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gP(){return this.gm()},
sP(a){this.sm(a)},
gm(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sm(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gq(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(a)
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
r=B.b.i(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gaa(){return this.gm()/4294967295},
saa(a){this.sm(a*4294967295)},
ga6(){return this.gt()/4294967295},
sa6(a){this.st(a*4294967295)},
ga9(){return this.gq()/4294967295},
sa9(a){this.sq(a*4294967295)},
gX(){return this.gv()/4294967295},
sX(a){this.sv(a*4294967295)},
gah(){return A.X(this)},
ac(a){var s=this
s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())},
ap(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.co){s=A.u(n,A.m(n).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=J.a1(b)
r=n.d
q=r.c
if(s.gu(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.cp.prototype={
I(){var s=this
return new A.cp(s.a,s.b,s.c,s.d,s.e)},
gu(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.e.f},
gE(){return this.e.gE()},
gK(){return B.C},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q,p=this
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
gM(){return this},
D(){var s,r,q,p=this,o=p.e
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
dv(a){var s,r=this.c,q=4-(this.d+(a<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.d()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a2(s[r],q)&15},
b0(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.dv(a):0
else s=r.aX(this.dv(0),a)
return s},
au(a,b){var s,r,q,p,o,n,m=this.e
if(a>=m.c)return
s=this.c
r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}q=m.d
q===$&&A.d()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.J(B.b.i(b),0,15)
n=r===4?15:240
q=B.a.Y(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
l(a,b){return this.b0(b)},
h(a,b,c){return this.au(b,c)},
gP(){return this.dv(0)},
sP(a){this.au(0,a)},
gm(){return this.b0(0)},
sm(a){this.au(0,a)},
gt(){return this.b0(1)},
st(a){this.au(1,a)},
gq(){return this.b0(2)},
sq(a){this.au(2,a)},
gv(){return this.b0(3)},
sv(a){this.au(3,a)},
gaa(){return this.b0(0)/this.e.gE()},
saa(a){this.au(0,a*this.e.gE())},
ga6(){return this.b0(1)/this.e.gE()},
sa6(a){this.au(1,a*this.e.gE())},
ga9(){return this.b0(2)/this.e.gE()},
sa9(a){this.au(2,a*this.e.gE())},
gX(){return this.b0(3)/this.e.gE()},
sX(a){this.au(3,a*this.e.gE())},
gah(){return A.X(this)},
ac(a){var s=this
s.au(0,a.gm())
s.au(1,a.gt())
s.au(2,a.gq())
s.au(3,a.gv())},
ap(a,b,c){var s=this,r=s.e.c
if(r>0){s.au(0,a)
if(r>1){s.au(1,b)
if(r>2)s.au(2,c)}}},
a8(a,b,c,d){var s=this,r=s.e.c
if(r>0){s.au(0,a)
if(r>1){s.au(1,b)
if(r>2){s.au(2,c)
if(r>3)s.au(3,d)}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cp){s=A.u(p,A.m(p).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){q=p.e.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.b0(0)!==s.l(b,0))return!1
if(q>1){if(p.b0(1)!==s.l(b,1))return!1
if(q>2){if(p.b0(2)!==s.l(b,2))return!1
if(q>3)if(p.b0(3)!==s.l(b,3))return!1}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.e}}
A.cq.prototype={
I(){var s=this
return new A.cq(s.a,s.b,s.c,s.d)},
gu(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gT(){return this.d.e},
gE(){return this.d.gE()},
gK(){return B.e},
gaQ(){return this.a},
gaM(){return this.b},
a0(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gM(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bh(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aX(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
l(a,b){return this.bh(b)},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.i(B.b.J(c,0,255))
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gP(){var s=this.d.d,r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
sP(a){var s=this.d.d,r=this.c,q=B.b.i(B.b.J(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q},
gm(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aT(r[s])
r=s}return r},
sm(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(B.b.J(a,0,255))
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this,q=r.d,p=q.e
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
s=p.aS(q[s])
q=s}return q},
st(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.i(B.b.J(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.i(B.b.J(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gq(){var s,r=this,q=r.d,p=q.e
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
s=p.aR(q[s])
q=s}return q},
sq(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.i(B.b.J(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.i(B.b.J(a,0,255))
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
s=p.aY(q[s])
q=s}return q},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.i(B.b.J(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.i(B.b.J(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gaa(){return this.gm()/this.d.gE()},
saa(a){this.sm(a*this.d.gE())},
ga6(){return this.gt()/this.d.gE()},
sa6(a){this.st(a*this.d.gE())},
ga9(){return this.gq()/this.d.gE()},
sa9(a){this.sq(a*this.d.gE())},
gX(){return this.gv()/this.d.gE()},
sX(a){this.sv(a*this.d.gE())},
gah(){return this.d.c===2?this.gm():A.X(this)},
ac(a){var s=this
if(s.d.e!=null)s.sP(a.gP())
else{s.sm(a.gm())
s.st(a.gt())
s.sq(a.gq())
s.sv(a.gv())}},
ap(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a8(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gG(a){return new A.O(this)},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cq){s=A.u(p,A.m(p).p("e.E"))
s=A.n(s)
r=A.u(b,A.m(b).p("e.E"))
return s===A.n(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.a1(b)
if(s.gu(b)!==q)return!1
if(p.bh(0)!==s.l(b,0))return!1
if(q>1){if(p.bh(1)!==s.l(b,1))return!1
if(q>2){if(p.bh(2)!==s.l(b,2))return!1
if(q>3)if(p.bh(3)!==s.l(b,3))return!1}}return!0}return!1},
gH(a){var s=A.u(this,A.m(this).p("e.E"))
return A.n(s)},
b4(a){return A.aN(this,null,a,null,null)},
$iB:1,
$iy:1,
$iv:1,
gb5(){return this.d}}
A.H.prototype={
I(){return new A.H()},
gb5(){return $.o0()},
gaQ(){return 0},
gaM(){return 0},
gu(a){return 0},
gE(){return 0},
gK(){return B.e},
gT(){return null},
l(a,b){return 0},
h(a,b,c){},
gP(){return 0},
sP(a){},
gm(){return 0},
sm(a){},
gt(){return 0},
st(a){},
gq(){return 0},
sq(a){},
gv(){return 0},
sv(a){},
gaa(){return 0},
saa(a){},
ga6(){return 0},
sa6(a){},
ga9(){return 0},
sa9(a){},
gX(){return 0},
sX(a){},
gah(){return 0},
ac(a){},
ap(a,b,c){},
a8(a,b,c,d){},
a0(a,b){},
gM(){return this},
D(){return!1},
U(a,b){if(b==null)return!1
return b instanceof A.H},
gH(a){return 0},
gG(a){return new A.O(this)},
b4(a){return this},
$iB:1,
$iy:1,
$iv:1}
A.it.prototype={
ad(){return"FlipDirection."+this.b}}
A.iB.prototype={
B(a){return"ImageException: "+this.a}}
A.ai.prototype={
gu(a){return this.c-this.d},
h(a,b,c){J.x(this.a,this.d+b,c)
return c},
bc(a,b,c,d){var s=this.a,r=J.al(s),q=this.d+a
if(c instanceof A.ai)r.ao(s,q,q+b,c.a,c.d+d)
else r.ao(s,q,q+b,t.L.a(c),d)},
bS(a,b,c){return this.bc(a,b,c,0)},
jS(a,b,c){var s=this.a,r=this.d+a
J.bi(s,r,r+b,c)},
di(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.t(s.a,s.e,a,r+b)},
am(a){return this.di(a,0,null)},
bU(a,b){return this.di(a,0,b)},
cL(a,b){return this.di(a,b,null)},
F(){return J.c(this.a,this.d++)},
al(a){var s=this.am(a)
this.d=this.d+(s.c-s.d)
return s},
af(a){var s,r,q,p,o,n=this
if(a==null){s=A.j([],t.t)
for(r=n.c;q=n.d,q<r;){p=n.a
n.d=q+1
o=J.c(p,q)
if(o===0)return A.dt(s,0,null)
B.c.N(s,o)}throw A.h(A.o("EOF reached without finding string terminator (length: "+A.C(a)+")"))}return A.dt(n.al(a).a3(),0,null)},
cz(){return this.af(null)},
fz(a){var s,r,q,p,o=this,n=A.j([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.c(q,r)
B.c.N(n,p)
if(p===10||n.length>=a)return A.dt(n,0,null)}return A.dt(n,0,null)},
k_(){return this.fz(256)},
k0(){var s,r,q,p,o=this,n=A.j([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.c(q,r)
if(p===0){t.L.a(n)
return new A.i1(!0).ek(n,0,null,!0)}B.c.N(n,p)}return B.cC.jt(n,!0)},
n(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255
if(s.e)return r<<8|q
return q<<8|r},
be(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255,p=J.c(s.a,s.d++)&255
if(s.e)return p|q<<8|r<<16
return r|q<<8|p<<16},
k(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255,p=J.c(s.a,s.d++)&255,o=J.c(s.a,s.d++)&255
if(s.e)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
de(){return A.tv(this.dT())},
dT(){var s=this,r=J.c(s.a,s.d++)&255,q=J.c(s.a,s.d++)&255,p=J.c(s.a,s.d++)&255,o=J.c(s.a,s.d++)&255,n=J.c(s.a,s.d++)&255,m=J.c(s.a,s.d++)&255,l=J.c(s.a,s.d++)&255,k=J.c(s.a,s.d++)&255
if(s.e)return(B.a.S(r,56)|B.a.S(q,48)|B.a.S(p,40)|B.a.S(o,32)|n<<24|m<<16|l<<8|k)>>>0
return(B.a.S(k,56)|B.a.S(l,48)|B.a.S(m,40)|B.a.S(n,32)|o<<24|p<<16|q<<8|r)>>>0},
cB(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.fD(b,c)
s=r.b+r.d+b
return J.l3(q,s,c<=0?r.c:s+c)},
fD(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return J.a_(B.f.gA(p),p.byteOffset+r.d+a,q)
s=r.d+a
s=J.l3(p,s,s+q)
return new Uint8Array(A.z(s))},
a3(){return this.fD(0,null)},
cD(){var s=this.a
if(t.D.b(s))return J.aC(B.f.gA(s),s.byteOffset+this.d,null)
return J.aC(B.f.gA(this.a3()),0,null)},
sA(a,b){this.a=t.L.a(b)}}
A.iY.prototype={
C(a){var s,r,q=this
if(q.a===q.c.length)q.ia()
s=q.c
r=q.a++
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
aW(a){var s,r,q,p,o,n=this
t.L.a(a)
s=J.ba(a)
while(r=n.a,q=r+s,p=n.c,o=p.length,q>o)n.ew(q-o)
B.f.by(p,r,q,a)
n.a+=s},
aB(a){var s=this
if(s.b){s.C(B.a.j(a,8)&255)
s.C(a&255)
return}s.C(a&255)
s.C(B.a.j(a,8)&255)},
aJ(a){var s=this
if(s.b){s.C(B.a.j(a,24)&255)
s.C(B.a.j(a,16)&255)
s.C(B.a.j(a,8)&255)
s.C(a&255)
return}s.C(a&255)
s.C(B.a.j(a,8)&255)
s.C(B.a.j(a,16)&255)
s.C(B.a.j(a,24)&255)},
kk(a){var s,r,q=this,p=new Float32Array(1)
p[0]=a
s=J.a_(B.aj.gA(p),0,null)
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
kl(a){var s,r,q=this,p=new Float64Array(1)
p[0]=a
s=J.a_(B.ak.gA(p),0,null)
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
ew(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.f.by(p,0,q,r)
this.c=p},
ia(){return this.ew(null)},
gu(a){return this.a}}
A.dp.prototype={
i(a){var s=this.b
return s===0?0:B.a.az(this.a,s)},
U(a,b){if(b==null)return!1
return b instanceof A.dp&&this.a===b.a&&this.b===b.b},
gH(a){return A.hj(this.a,this.b,B.z,B.z)},
B(a){return""+this.a+"/"+this.b}}
A.aR.prototype={
bJ(){return A.j([this.a,this.b,this.c],t.t)},
gdd(){var s,r,q,p,o=new A.ja(),n=o.$1(this.a),m=o.$1(this.b),l=o.$1(this.c),k=0.2126729*n+0.7151522*m+0.072175*l
o=new A.j9()
s=o.$1(k)
if(typeof s!=="number")return A.cG(s)
r=o.$1((0.4124564*n+0.3575761*m+0.1804375*l)/0.95047)
q=o.$1(k)
if(typeof r!=="number")return r.fV()
if(typeof q!=="number")return A.cG(q)
p=o.$1(k)
o=o.$1((0.0193339*n+0.119192*m+0.9503041*l)/1.08883)
if(typeof p!=="number")return p.fV()
if(typeof o!=="number")return A.cG(o)
return new A.dE(116*s-16,500*(r-q),200*(p-o))}}
A.ja.prototype={
$1(a){var s=a/255
return s<=0.04045?s/12.92:Math.pow((s+0.055)/1.055,2.4)},
$S:19}
A.j9.prototype={
$1(a){return a>0.008856451679035631?Math.pow(a,0.3333333333333333):a*841/108+0.13793103448275862},
$S:28}
A.cs.prototype={
bJ(){var s=this,r=s.a
return A.dg(["rgb",A.j([r.a,r.b,r.c],t.t),"spread",s.b,"dark",s.c,"glare",s.d],t.N,t.X)}}
A.hD.prototype={
ad(){return"ScanDetectFailure."+this.b}}
A.jb.prototype={
bJ(){var s=this
return A.dg(["quad",s.a.bJ(),"confidence",s.b,"observed",s.c,"residual",s.d,"pitch",s.e],t.N,t.X)}}
A.bQ.prototype={}
A.jQ.prototype={
hj(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
for(s=b1.a*b1.b,r=b1.e,q=r.$flags|0,p=b1.f,o=p.$flags|0,n=b1.r,m=n.$flags|0,l=b2.length,k=b1.c,j=k.$flags|0,i=b1.d,h=i.$flags|0,g=0,f=0;g<s;++g,f+=3){if(!(f<l))return A.a(b2,f)
e=b2[f]
d=f+1
if(!(d<l))return A.a(b2,d)
c=b2[d]
d=f+2
if(!(d<l))return A.a(b2,d)
b=b2[d]
a=Math.max(e,Math.max(c,b))
a0=Math.min(e,Math.min(c,b))
j&2&&A.b(k)
if(!(g<k.length))return A.a(k,g)
k[g]=a/255
d=a===0?0:(a-a0)/a
h&2&&A.b(i)
if(!(g<i.length))return A.a(i,g)
i[g]=d
d=$.oi()
a1=d.length
if(!(e<a1))return A.a(d,e)
a2=d[e]
if(!(c<a1))return A.a(d,c)
a3=d[c]
if(!(b<a1))return A.a(d,b)
a4=d[b]
a5=(0.4124564*a2+0.3575761*a3+0.1804375*a4)/0.95047
a6=0.2126729*a2+0.7151522*a3+0.072175*a4
a7=(0.0193339*a2+0.119192*a3+0.9503041*a4)/1.08883
a8=a5>0.008856451679035631?Math.pow(a5,0.3333333333333333):a5*841/108+0.13793103448275862
a9=a6>0.008856451679035631?Math.pow(a6,0.3333333333333333):a6*841/108+0.13793103448275862
b0=a7>0.008856451679035631?Math.pow(a7,0.3333333333333333):a7*841/108+0.13793103448275862
q&2&&A.b(r)
if(!(g<r.length))return A.a(r,g)
r[g]=116*a9-16
o&2&&A.b(p)
if(!(g<p.length))return A.a(p,g)
p[g]=500*(a8-a9)
m&2&&A.b(n)
if(!(g<n.length))return A.a(n,g)
n[g]=200*(a9-b0)}}}
A.hR.prototype={
gbL(){var s,r=this,q=r.r
if(q===$){s=Math.sqrt(r.c)
r.r!==$&&A.tt()
r.r=s
q=s}return q}}
A.kn.prototype={
$2(a,b){var s,r,q,p,o=this.a,n=o.e,m=n.length
if(!(b>=0&&b<m))return A.a(n,b)
s=n[b]
if(!(a>=0&&a<m))return A.a(n,a)
r=(s-n[a])*0.5
n=o.f
s=n.length
if(!(b<s))return A.a(n,b)
m=n[b]
if(!(a<s))return A.a(n,a)
q=m-n[a]
o=o.r
n=o.length
if(!(b<n))return A.a(o,b)
m=o[b]
if(!(a<n))return A.a(o,a)
p=m-o[a]
return Math.sqrt(r*r+q*q+p*p)},
$S:48}
A.k5.prototype={
bm(a,b,c){var s=this.a,r=s[6]*b+s[7]*c+1
return new A.bT((s[0]*b+s[1]*c+s[2])/r,(s[3]*b+s[4]*c+s[5])/r)},
dM(a,b){return this.bm(0,(b+0.5)/3,(a+0.5)/3)},
gfv(){var s=this.dM(1,1),r=this.dM(1,2),q=this.dM(2,1),p=s.a,o=s.b
return(Math.sqrt(Math.pow(r.a-p,2)+Math.pow(r.b-o,2))+Math.sqrt(Math.pow(q.a-p,2)+Math.pow(q.b-o,2)))/2}}
A.kt.prototype={
$1(a){return!isFinite(A.cB(a))},
$S:30}
A.jR.prototype={}
A.kk.prototype={
$1(a){return A.w(a)>=0},
$S:31}
A.kl.prototype={
$1(a){var s
A.w(a)
s=this.a
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a].gbL()},
$S:19}
A.km.prototype={
$2(a,b){return A.cB(a)+A.cB(b)},
$S:9}
A.ks.prototype={
$2(a,b){var s=t.at
s.a(a)
s.a(b)
return B.b.bE(a.a[3],b.a[3])},
$S:33}
A.kr.prototype={
$1(a){var s,r=this,q=r.b,p=a.a*q/r.c,o=a.b*q/r.d
q=r.e
s=-q
if(!(p<s)){q=1+q
q=p>q||o<s||o>q}else q=!0
if(q)r.a.a=!0
return new A.aJ(B.b.J(p,0,1),B.b.J(o,0,1))},
$S:34}
A.ko.prototype={
$2(a,b){return A.cB(a)+A.cB(b)},
$S:9}
A.kp.prototype={
$1(a){return Math.pow(A.cB(a)-this.a,2)},
$S:42}
A.kq.prototype={
$2(a,b){return A.dF(a)+A.dF(b)},
$S:36}
A.aJ.prototype={
bJ(){return A.j([this.a,this.b],t.u)}}
A.jd.prototype={
bJ(){var s=this.a,r=A.a5(s),q=r.p("au<1,q<l>>")
s=A.u(new A.au(s,r.p("q<l>(1)").a(new A.je()),q),q.p("a7.E"))
return s},
gfG(){var s,r,q,p,o,n,m,l,k,j,i,h=this.a
if(B.c.f6(h,new A.jf()))return!1
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
A.je.prototype={
$1(a){t.x.a(a)
return A.j([a.a,a.b],t.u)},
$S:37}
A.jf.prototype={
$1(a){var s,r
t.x.a(a)
s=a.a
if(isFinite(s)){r=a.b
s=!isFinite(r)||s<0||s>1||r<0||r>1}else s=!0
return s},
$S:38}
A.jc.prototype={
bm(a,b,c){var s,r,q,p,o,n,m=this,l=m.r
l===$&&A.d()
s=m.w
s===$&&A.d()
r=l*b+s*c+1
s=m.a
s===$&&A.d()
l=m.b
l===$&&A.d()
q=m.c
q===$&&A.d()
p=m.d
p===$&&A.d()
o=m.e
o===$&&A.d()
n=m.f
n===$&&A.d()
return new A.aJ((s*b+l*c+q)/r,(p*b+o*c+n)/r)}}
A.kX.prototype={
$1(a){return t.bq.a(a).bJ()},
$S:18}
A.ki.prototype={
$1(a){return t.bq.a(a).bJ()},
$S:18}
A.kw.prototype={
$2(a,b){var s=this.a.bm(0,a,b),r=this.b,q=r.aK(B.a.J(B.b.aE(s.a*(r.gR()-1)),0,r.gR()-1),B.a.J(B.b.aE(s.b*(r.gL()-1)),0,r.gL()-1))
return new A.aR(B.b.i(q.gm()),B.b.i(q.gt()),B.b.i(q.gq()))},
$S:40}
A.kW.prototype={
$1(a){var s,r,q
t.Y.a(a)
s=A.u(a,a.$ti.p("a7.E"))
B.c.e_(s)
r=s.length
q=r/2|0
if(!(q<r))return A.a(s,q)
return s[q]},
$S:41}
A.kR.prototype={
$1(a){return t.l.a(a).a},
$S:7}
A.kS.prototype={
$1(a){return t.l.a(a).b},
$S:7}
A.kT.prototype={
$1(a){return t.l.a(a).c},
$S:7}
A.kU.prototype={
$1(a){var s,r,q,p,o,n
t.l.a(a)
s=a.a/255
r=a.b/255
q=a.c/255
p=Math.max(s,Math.max(r,q))
o=p-Math.min(s,Math.min(r,q))
if(o>1e-9)if(p===s)n=60*B.b.a_((r-q)/o,6)
else n=p===r?60*((q-s)/o+2):60*((s-r)/o+4)
else n=0
B.b.a_(n+360,360)
return p<0.1},
$S:17}
A.kV.prototype={
$1(a){t.l.a(a)
return a.a>250&&a.b>250&&a.c>250},
$S:17}
A.kN.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.nP(A.nt(a).data)
if(typeof l!="string")return
p=t.N
o=t.X
s=t.f.a(B.aS.ju(l,null)).dL(0,p,o)
r=null
try{r=A.tr(s)}catch(n){q=A.bD(n)
r=A.dg(["error",A.C(q)],p,o)}m=r
o=A.mN(p,o)
o.dK(0,m)
m=s
o.h(0,"id",m.$ti.p("4?").a(m.a.l(0,"id")))
this.a.postMessage(B.aS.jE(o,null))},
$S:44};(function aliases(){var s=J.bL.prototype
s.fY=s.B
s=A.G.prototype
s.e2=s.ao})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers.installStaticTearOff
s(J,"rm","p_",45)
r(A,"rz","pi",14)
q(A,"rS","qs",8)
q(A,"rT","qt",8)
q(A,"rU","qu",8)
r(A,"nK","rN",2)
q(A,"rX","r6",16)
p(A.a4.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.bm.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.cb.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.aZ.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.c7.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.bH.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.ca.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.c8.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.c9.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
p(A.d1.prototype,"gbw",1,0,null,["$1","$0"],["a5","i"],3,0,0)
var m
o(m=A.hc.prototype,"ghN","hO",5)
o(m,"ghQ","hR",5)
o(m,"ghS","hT",5)
o(m,"ghH","hI",5)
o(m,"ghJ","hK",5)
q(A,"tF","pR",0)
q(A,"ty","pJ",0)
q(A,"tw","pH",0)
q(A,"tD","pP",0)
q(A,"tE","pQ",0)
q(A,"tC","pO",0)
q(A,"tB","pN",0)
q(A,"tA","pM",0)
q(A,"tH","pT",0)
q(A,"tG","pS",0)
q(A,"tz","pK",0)
q(A,"tx","pI",0)
q(A,"tS","q3",0)
q(A,"tQ","q1",0)
q(A,"tI","pU",0)
q(A,"tK","pW",0)
q(A,"tJ","pV",0)
q(A,"tL","pX",0)
q(A,"tT","q4",0)
q(A,"tR","q2",0)
q(A,"tM","pY",0)
q(A,"tN","pZ",0)
q(A,"tO","q_",0)
q(A,"tP","q0",0)
o(A.eS.prototype,"giN","iO",21)
o(A.h2.prototype,"gjG","jH",21)
n(A,"m4",3,null,["$3"],["q5"],1,0)
n(A,"tU",3,null,["$3"],["q6"],1,0)
n(A,"tZ",3,null,["$3"],["qb"],1,0)
n(A,"u_",3,null,["$3"],["qc"],1,0)
n(A,"u0",3,null,["$3"],["qd"],1,0)
n(A,"u1",3,null,["$3"],["qe"],1,0)
n(A,"u2",3,null,["$3"],["qf"],1,0)
n(A,"u3",3,null,["$3"],["qg"],1,0)
n(A,"u4",3,null,["$3"],["qh"],1,0)
n(A,"u5",3,null,["$3"],["qi"],1,0)
n(A,"tV",3,null,["$3"],["q7"],1,0)
n(A,"tW",3,null,["$3"],["q8"],1,0)
n(A,"tX",3,null,["$3"],["q9"],1,0)
n(A,"tY",3,null,["$3"],["qa"],1,0)
p(A.bn.prototype,"gfQ",0,5,null,["$5"],["a4"],4,0,0)
n(A,"u7",6,null,["$6"],["qp"],6,0)
n(A,"u8",6,null,["$6"],["qq"],6,0)
n(A,"u6",6,null,["$6"],["qo"],6,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.D,null)
q(A.D,[A.lg,J.fU,A.eL,J.bX,A.e,A.dN,A.U,A.bE,A.P,A.G,A.jg,A.bq,A.ei,A.eX,A.dR,A.aq,A.bz,A.aK,A.dP,A.jn,A.iX,A.fd,A.iR,A.R,A.at,A.jM,A.kc,A.b3,A.hV,A.i0,A.k8,A.bb,A.hS,A.f_,A.aT,A.hQ,A.fj,A.f2,A.dq,A.hY,A.f5,A.fA,A.ap,A.jL,A.jK,A.k3,A.i1,A.c0,A.jO,A.hk,A.eM,A.jP,A.as,A.av,A.i_,A.jh,A.ct,A.iW,A.iw,A.jF,A.iE,A.jE,A.jN,A.fT,A.hl,A.O,A.aO,A.hU,A.fE,A.aG,A.a4,A.ij,A.bk,A.im,A.J,A.ip,A.fF,A.bl,A.fG,A.fH,A.dT,A.dU,A.fa,A.dX,A.dY,A.dZ,A.fO,A.fP,A.fx,A.bG,A.iH,A.bK,A.iJ,A.dB,A.ha,A.hb,A.iM,A.hc,A.eH,A.hp,A.bd,A.dk,A.j3,A.cr,A.ht,A.hu,A.hx,A.hB,A.dl,A.dm,A.eK,A.aQ,A.eO,A.jk,A.hG,A.jm,A.hH,A.hI,A.iU,A.jp,A.eR,A.jq,A.jv,A.jy,A.jA,A.eQ,A.jz,A.jr,A.bA,A.eT,A.hP,A.eU,A.eV,A.eS,A.hN,A.jw,A.hO,A.jC,A.eW,A.fJ,A.fK,A.e0,A.e_,A.e1,A.fL,A.dy,A.cZ,A.aP,A.hm,A.iB,A.ai,A.iY,A.dp,A.aR,A.cs,A.jb,A.bQ,A.jQ,A.hR,A.k5,A.jR,A.aJ,A.jd,A.jc])
q(J.fU,[J.h7,J.ed,J.ee,J.dd,J.de,J.dc,J.cc])
q(J.ee,[J.bL,J.r,A.cd,A.eo])
q(J.bL,[J.hn,J.du,J.bo])
r(J.h5,A.eL)
r(J.iG,J.r)
q(J.dc,[J.ec,J.h8])
q(A.e,[A.dz,A.A,A.eh,A.bg,A.cL,A.cM,A.cN,A.cO,A.cP,A.cQ,A.cS,A.cT,A.cU,A.cV,A.cW,A.bF,A.dO,A.bn,A.ah,A.cf,A.cg,A.ch,A.ci,A.cj,A.ck,A.cl,A.cm,A.cn,A.co,A.cp,A.cq,A.H])
r(A.bY,A.dz)
r(A.eZ,A.bY)
q(A.U,[A.bZ,A.b_,A.f0,A.hW])
q(A.bE,[A.fv,A.fu,A.hF,A.kJ,A.kL,A.jH,A.jG,A.k_,A.kP,A.kQ,A.ky,A.ii,A.is,A.kB,A.kC,A.kD,A.kE,A.kF,A.kG,A.kH,A.j0,A.iD,A.iC,A.ja,A.j9,A.kt,A.kk,A.kl,A.kr,A.kp,A.je,A.jf,A.kX,A.ki,A.kW,A.kR,A.kS,A.kT,A.kU,A.kV,A.kN])
q(A.fv,[A.ik,A.iN,A.kK,A.k0,A.iT,A.iV,A.k4,A.iy,A.iz,A.iA,A.jB,A.kn,A.km,A.ks,A.ko,A.kq,A.kw])
q(A.P,[A.df,A.bv,A.hd,A.hK,A.hC,A.hT,A.eg,A.fq,A.aV,A.eP,A.hJ,A.ds,A.fy])
r(A.dv,A.G)
r(A.aW,A.dv)
q(A.A,[A.a7,A.dQ,A.bp,A.iS,A.f1])
q(A.a7,[A.cu,A.au,A.hX])
q(A.aK,[A.cz,A.dC,A.dD])
q(A.cz,[A.bT,A.fb])
r(A.dE,A.dC)
r(A.cA,A.dD)
r(A.c4,A.dP)
q(A.fu,[A.j1,A.jI,A.jJ,A.k9,A.jS,A.jW,A.jV,A.jU,A.jT,A.jZ,A.jY,A.jX,A.k7,A.kv,A.ke,A.kd,A.kh])
r(A.et,A.bv)
q(A.hF,[A.hE,A.cK])
r(A.ef,A.b_)
q(A.eo,[A.hi,A.ae])
q(A.ae,[A.f6,A.f8])
r(A.f7,A.f6)
r(A.bM,A.f7)
r(A.f9,A.f8)
r(A.aI,A.f9)
q(A.bM,[A.ej,A.ek])
q(A.aI,[A.el,A.em,A.en,A.ep,A.eq,A.er,A.ce])
r(A.fe,A.hT)
r(A.eY,A.hS)
r(A.hZ,A.fj)
r(A.f3,A.f0)
r(A.fc,A.dq)
r(A.f4,A.fc)
q(A.fA,[A.ka,A.ih,A.ig,A.iP,A.iO,A.hM])
q(A.ap,[A.dL,A.fC,A.he])
r(A.hf,A.eg)
r(A.k2,A.k3)
q(A.fC,[A.hg,A.hL])
r(A.iQ,A.ka)
q(A.aV,[A.bs,A.fR])
r(A.kg,A.jF)
r(A.cJ,A.as)
q(A.cJ,[A.fp,A.ie])
q(A.jO,[A.dM,A.il,A.c_,A.ar,A.fs,A.ag,A.af,A.cX,A.c2,A.aY,A.d_,A.iI,A.di,A.eG,A.bN,A.bO,A.b2,A.ax,A.cv,A.a9,A.aS,A.cw,A.dx,A.fM,A.fI,A.eb,A.it,A.hD])
r(A.fS,A.fT)
r(A.dh,A.hl)
q(A.bF,[A.fw,A.cR])
r(A.fz,A.dO)
r(A.c1,A.aO)
q(A.a4,[A.bm,A.c6,A.cb,A.aZ,A.c7,A.bH,A.ca,A.c8,A.c9,A.d2,A.d0,A.d3,A.d1])
q(A.im,[A.ft,A.ir,A.iv,A.ix,A.h9,A.ho,A.j_,A.j4,A.j8,A.jj,A.jl,A.jD])
r(A.io,A.ft)
r(A.fV,A.bl)
q(A.fV,[A.e8,A.fX,A.fY,A.fZ,A.e9])
r(A.fW,A.dU)
r(A.h_,A.dY)
r(A.fN,A.bk)
q(A.bG,[A.c5,A.e2])
r(A.iK,A.ip)
r(A.h0,A.eH)
r(A.h1,A.hp)
r(A.bP,A.J)
q(A.bd,[A.hr,A.hs,A.hv,A.hw,A.hz,A.hA])
q(A.dk,[A.eJ,A.hy])
q(A.hB,[A.dn,A.aw])
r(A.h2,A.eS)
r(A.h3,A.eW)
r(A.ea,A.dy)
q(A.ah,[A.d4,A.d5,A.e3,A.e4,A.e5,A.e6,A.d6,A.d7,A.d8,A.d9,A.da,A.db])
q(A.aP,[A.ev,A.ew,A.ex,A.ey,A.ez,A.eA,A.eB,A.eC,A.b0])
s(A.dv,A.bz)
s(A.f6,A.G)
s(A.f7,A.aq)
s(A.f8,A.G)
s(A.f9,A.aq)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",l:"double",k:"num",E:"String",W:"bool",av:"Null",q:"List",D:"Object",a8:"Map",Y:"JSObject"},mangledNames:{},types:["~(ai)","f(f,bx,f)","~()","f([f])","~(f,f,k,k,k)","~(bK,q<f>)","~(f,f,f,f,f,by)","f(aR)","~(~())","l(l,l)","av()","@()","~(@)","~(E,aG)","f()","av(@)","@(@)","W(aR)","a8<E,D?>(cs)","l(f)","~(D?,D?)","~(f,W)","W(E)","@(E)","~(f,a4)","k(k,k,k,k)","k(k,k,k,k,k)","bx(f)","l(l)","f(f,f)","W(l)","W(f)","av(~())","f(+(f,l,l,l),+(f,l,l,l))","aJ(+(l,l))","~(@,@)","k(k,k)","q<l>(aJ)","W(aJ)","~(k,k,k,k)","aR(l,l)","f(e<f>)","k(l)","@(@,E)","av(Y)","f(@,@)","W()","D?(D?)","l(f,f)","av(D,dr)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.bT&&a.b(c.a)&&b.b(c.b),"2;preview,samples":(a,b)=>c=>c instanceof A.fb&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.dE&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.cA&&A.tl(a,b.a)}}
A.qQ(v.typeUniverse,JSON.parse('{"bo":"bL","hn":"bL","du":"bL","uf":"cd","h7":{"W":[],"L":[]},"ed":{"L":[]},"ee":{"Y":[]},"bL":{"Y":[]},"r":{"q":["1"],"A":["1"],"Y":[],"e":["1"],"aj":["1"]},"h5":{"eL":[]},"iG":{"r":["1"],"q":["1"],"A":["1"],"Y":[],"e":["1"],"aj":["1"]},"bX":{"B":["1"]},"dc":{"l":[],"k":[],"aX":["k"]},"ec":{"l":[],"f":[],"k":[],"aX":["k"],"L":[]},"h8":{"l":[],"k":[],"aX":["k"],"L":[]},"cc":{"E":[],"aX":["E"],"mV":[],"aj":["@"],"L":[]},"dz":{"e":["2"]},"dN":{"B":["2"]},"bY":{"dz":["1","2"],"e":["2"],"e.E":"2"},"eZ":{"bY":["1","2"],"dz":["1","2"],"A":["2"],"e":["2"],"e.E":"2"},"bZ":{"U":["3","4"],"a8":["3","4"],"U.K":"3","U.V":"4"},"df":{"P":[]},"aW":{"G":["f"],"bz":["f"],"q":["f"],"A":["f"],"e":["f"],"G.E":"f","bz.E":"f"},"A":{"e":["1"]},"a7":{"A":["1"],"e":["1"]},"cu":{"a7":["1"],"A":["1"],"e":["1"],"a7.E":"1","e.E":"1"},"bq":{"B":["1"]},"eh":{"e":["2"],"e.E":"2"},"ei":{"B":["2"]},"au":{"a7":["2"],"A":["2"],"e":["2"],"a7.E":"2","e.E":"2"},"bg":{"e":["1"],"e.E":"1"},"eX":{"B":["1"]},"dQ":{"A":["1"],"e":["1"],"e.E":"1"},"dR":{"B":["1"]},"dv":{"G":["1"],"bz":["1"],"q":["1"],"A":["1"],"e":["1"]},"bT":{"cz":[],"aK":[]},"fb":{"cz":[],"aK":[]},"dE":{"dC":[],"aK":[]},"cA":{"dD":[],"aK":[]},"dP":{"a8":["1","2"]},"c4":{"dP":["1","2"],"a8":["1","2"]},"et":{"bv":[],"P":[]},"hd":{"P":[]},"hK":{"P":[]},"fd":{"dr":[]},"bE":{"c3":[]},"fu":{"c3":[]},"fv":{"c3":[]},"hF":{"c3":[]},"hE":{"c3":[]},"cK":{"c3":[]},"hC":{"P":[]},"b_":{"U":["1","2"],"lj":["1","2"],"a8":["1","2"],"U.K":"1","U.V":"2"},"bp":{"A":["1"],"e":["1"],"e.E":"1"},"R":{"B":["1"]},"iS":{"A":["1"],"e":["1"],"e.E":"1"},"at":{"B":["1"]},"ef":{"b_":["1","2"],"U":["1","2"],"lj":["1","2"],"a8":["1","2"],"U.K":"1","U.V":"2"},"cz":{"aK":[]},"dC":{"aK":[]},"dD":{"aK":[]},"cd":{"Y":[],"L":[]},"eo":{"Y":[],"Z":[]},"hi":{"Y":[],"Z":[],"L":[]},"ae":{"aH":["1"],"Y":[],"Z":[],"aj":["1"]},"bM":{"G":["l"],"ae":["l"],"q":["l"],"aH":["l"],"A":["l"],"Y":[],"Z":[],"aj":["l"],"e":["l"],"aq":["l"]},"aI":{"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"]},"ej":{"bM":[],"iu":[],"G":["l"],"ae":["l"],"q":["l"],"aH":["l"],"A":["l"],"Y":[],"Z":[],"aj":["l"],"e":["l"],"aq":["l"],"L":[],"G.E":"l"},"ek":{"bM":[],"l8":[],"G":["l"],"ae":["l"],"q":["l"],"aH":["l"],"A":["l"],"Y":[],"Z":[],"aj":["l"],"e":["l"],"aq":["l"],"L":[],"G.E":"l"},"el":{"aI":[],"iF":[],"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"],"L":[],"G.E":"f"},"em":{"aI":[],"e7":[],"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"],"L":[],"G.E":"f"},"en":{"aI":[],"le":[],"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"],"L":[],"G.E":"f"},"ep":{"aI":[],"lI":[],"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"],"L":[],"G.E":"f"},"eq":{"aI":[],"bx":[],"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"],"L":[],"G.E":"f"},"er":{"aI":[],"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"],"L":[],"G.E":"f"},"ce":{"aI":[],"by":[],"G":["f"],"ae":["f"],"q":["f"],"aH":["f"],"A":["f"],"Y":[],"Z":[],"aj":["f"],"e":["f"],"aq":["f"],"L":[],"G.E":"f"},"hT":{"P":[]},"fe":{"bv":[],"P":[]},"bb":{"P":[]},"eY":{"hS":["1"]},"aT":{"cY":["1"]},"fj":{"nc":[]},"hZ":{"fj":[],"nc":[]},"f0":{"U":["1","2"],"a8":["1","2"]},"f3":{"f0":["1","2"],"U":["1","2"],"a8":["1","2"],"U.K":"1","U.V":"2"},"f1":{"A":["1"],"e":["1"],"e.E":"1"},"f2":{"B":["1"]},"f4":{"dq":["1"],"A":["1"],"e":["1"]},"f5":{"B":["1"]},"G":{"q":["1"],"A":["1"],"e":["1"]},"U":{"a8":["1","2"]},"dq":{"A":["1"],"e":["1"]},"fc":{"dq":["1"],"A":["1"],"e":["1"]},"hW":{"U":["E","@"],"a8":["E","@"],"U.K":"E","U.V":"@"},"hX":{"a7":["E"],"A":["E"],"e":["E"],"a7.E":"E","e.E":"E"},"dL":{"ap":["q<f>","E"],"ap.S":"q<f>"},"fC":{"ap":["E","q<f>"]},"eg":{"P":[]},"hf":{"P":[]},"he":{"ap":["D?","E"],"ap.S":"D?"},"hg":{"ap":["E","q<f>"],"ap.S":"E"},"hL":{"ap":["E","q<f>"],"ap.S":"E"},"c0":{"aX":["c0"]},"l":{"k":[],"aX":["k"]},"f":{"k":[],"aX":["k"]},"q":{"A":["1"],"e":["1"]},"k":{"aX":["k"]},"E":{"aX":["E"],"mV":[]},"fq":{"P":[]},"bv":{"P":[]},"aV":{"P":[]},"bs":{"P":[]},"fR":{"bs":[],"P":[]},"eP":{"P":[]},"hJ":{"P":[]},"ds":{"P":[]},"fy":{"P":[]},"hk":{"P":[]},"eM":{"P":[]},"i_":{"dr":[]},"ct":{"pC":[]},"fS":{"fT":[]},"dh":{"hl":[]},"O":{"B":["k"]},"cL":{"y":[],"e":["k"],"e.E":"k"},"cM":{"y":[],"e":["k"],"e.E":"k"},"cN":{"y":[],"e":["k"],"e.E":"k"},"cO":{"y":[],"e":["k"],"e.E":"k"},"cP":{"y":[],"e":["k"],"e.E":"k"},"cQ":{"y":[],"e":["k"],"e.E":"k"},"cS":{"y":[],"e":["k"],"e.E":"k"},"cT":{"y":[],"e":["k"],"e.E":"k"},"cU":{"y":[],"e":["k"],"e.E":"k"},"cV":{"y":[],"e":["k"],"e.E":"k"},"cW":{"y":[],"e":["k"],"e.E":"k"},"bF":{"y":[],"e":["k"],"e.E":"k"},"fw":{"y":[],"e":["k"],"e.E":"k"},"cR":{"y":[],"e":["k"],"e.E":"k"},"dO":{"y":[],"e":["k"],"e.E":"k"},"fz":{"y":[],"e":["k"],"e.E":"k"},"c1":{"aO":[]},"bm":{"a4":[]},"c6":{"a4":[]},"cb":{"a4":[]},"aZ":{"a4":[]},"c7":{"a4":[]},"bH":{"a4":[]},"ca":{"a4":[]},"c8":{"a4":[]},"c9":{"a4":[]},"d2":{"a4":[]},"d0":{"a4":[]},"d3":{"a4":[]},"d1":{"a4":[]},"bk":{"J":[]},"e8":{"bl":[]},"fV":{"bl":[]},"dT":{"J":[]},"fW":{"dU":[]},"fX":{"bl":[]},"fY":{"bl":[]},"fZ":{"bl":[]},"e9":{"bl":[]},"h_":{"dY":[]},"dZ":{"J":[]},"fO":{"J":[]},"fN":{"bk":[],"J":[]},"c5":{"bG":[]},"e2":{"bG":[]},"hb":{"J":[]},"h0":{"eH":[]},"hp":{"J":[]},"h1":{"J":[]},"bP":{"J":[]},"hr":{"bd":[]},"hs":{"bd":[]},"hv":{"bd":[]},"hw":{"bd":[]},"hz":{"bd":[]},"hA":{"bd":[]},"eJ":{"dk":[]},"hy":{"dk":[]},"ht":{"J":[]},"dl":{"J":[]},"dm":{"J":[]},"eK":{"J":[]},"eO":{"J":[]},"hI":{"J":[]},"h3":{"eW":[]},"dy":{"J":[]},"ea":{"dy":[],"J":[]},"bn":{"e":["v"],"e.E":"v"},"ah":{"e":["v"]},"d4":{"ah":[],"e":["v"],"e.E":"v"},"d5":{"ah":[],"e":["v"],"e.E":"v"},"e3":{"ah":[],"e":["v"],"e.E":"v"},"e4":{"ah":[],"e":["v"],"e.E":"v"},"e5":{"ah":[],"e":["v"],"e.E":"v"},"e6":{"ah":[],"e":["v"],"e.E":"v"},"d6":{"ah":[],"e":["v"],"e.E":"v"},"d7":{"ah":[],"e":["v"],"e.E":"v"},"d8":{"ah":[],"e":["v"],"e.E":"v"},"d9":{"ah":[],"e":["v"],"e.E":"v"},"da":{"ah":[],"e":["v"],"e.E":"v"},"db":{"ah":[],"e":["v"],"e.E":"v"},"ev":{"aP":[]},"ew":{"aP":[]},"ex":{"aP":[]},"ey":{"aP":[]},"ez":{"aP":[]},"eA":{"aP":[]},"eB":{"aP":[]},"eC":{"aP":[]},"b0":{"aP":[]},"cf":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"cg":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"ch":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"ci":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"cj":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"ck":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"hm":{"B":["v"]},"cl":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"cm":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"cn":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"co":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"cp":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"cq":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"H":{"v":[],"y":[],"e":["k"],"B":["v"],"e.E":"k"},"ov":{"Z":[]},"le":{"q":["f"],"A":["f"],"Z":[],"e":["f"]},"by":{"q":["f"],"A":["f"],"Z":[],"e":["f"]},"pF":{"q":["f"],"A":["f"],"Z":[],"e":["f"]},"iF":{"q":["f"],"A":["f"],"Z":[],"e":["f"]},"lI":{"q":["f"],"A":["f"],"Z":[],"e":["f"]},"e7":{"q":["f"],"A":["f"],"Z":[],"e":["f"]},"bx":{"q":["f"],"A":["f"],"Z":[],"e":["f"]},"iu":{"q":["l"],"A":["l"],"Z":[],"e":["l"]},"l8":{"q":["l"],"A":["l"],"Z":[],"e":["l"]},"v":{"y":[],"B":["v"],"e":["k"]}}'))
A.qP(v.typeUniverse,JSON.parse('{"dv":1,"ae":1,"fc":1,"fA":2,"hB":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a0
return{n:s("bb"),A:s("dL"),fA:s("dM"),G:s("y"),e8:s("aX<@>"),dy:s("c0"),gw:s("A<@>"),C:s("P"),aX:s("fF"),gV:s("fH"),h4:s("iu"),Z:s("c3"),ct:s("e_"),gj:s("fJ"),ak:s("fK"),fa:s("e0"),gx:s("fP"),P:s("aG"),r:s("a4"),w:s("ah"),an:s("e7"),bM:s("e<l>"),hf:s("e<@>"),Y:s("e<f>"),eB:s("r<fx>"),g9:s("r<fG>"),U:s("r<dU>"),b:s("r<dY>"),V:s("r<e_>"),g:s("r<bn>"),b7:s("r<bK>"),W:s("r<q<q<q<f>>>>"),o:s("r<q<q<f>>>"),bC:s("r<q<+(f,l,l)>>"),S:s("r<q<f>>"),dm:s("r<eH>"),c:s("r<cr>"),af:s("r<bd>"),e:s("r<hx>"),fD:s("r<+(l,l)>"),g7:s("r<+(f,l,l)>"),eV:s("r<+(l,l,l,l)>"),ci:s("r<+(f,l,l,l)>"),ej:s("r<aR>"),h:s("r<aJ>"),h7:s("r<cs>"),s:s("r<E>"),aU:s("r<hH>"),gN:s("r<by>"),ao:s("r<bA>"),gk:s("r<hO>"),J:s("r<eW>"),R:s("r<hR>"),cO:s("r<hU>"),gb:s("r<dB>"),u:s("r<l>"),gn:s("r<@>"),t:s("r<f>"),f8:s("r<ha?>"),ca:s("r<q<f>?>"),hh:s("r<bx?>"),ff:s("r<by?>"),cA:s("r<k>"),B:s("r<~(ai)>"),aP:s("aj<@>"),v:s("ed"),q:s("Y"),cj:s("bo"),ez:s("aH<@>"),d2:s("bK"),f0:s("q<e7>"),fv:s("q<q<e7>>"),gS:s("q<q<bA>>"),eS:s("q<cr>"),c7:s("q<eQ>"),e6:s("q<bA>"),eQ:s("q<eT>"),db:s("q<eU>"),cC:s("q<eV>"),H:s("q<l>"),j:s("q<@>"),L:s("q<f>"),g8:s("q<bG?>"),d:s("q<q<f>?>"),ge:s("q<bA?>"),gR:s("q<fa?>"),cP:s("q<f?>"),ck:s("a8<E,E>"),f:s("a8<@,@>"),gE:s("au<l,k>"),d4:s("bM"),bc:s("aI"),gu:s("ae<@>"),bm:s("ce"),a:s("av"),K:s("D"),dv:s("v"),fW:s("cr"),fh:s("hu"),cE:s("eJ"),ha:s("dk"),fi:s("dl"),b8:s("bs"),k:s("dp"),gT:s("uh"),bQ:s("+()"),at:s("+(f,l,l,l)"),l:s("aR"),x:s("aJ"),m:s("dr"),bq:s("cs"),N:s("E"),fe:s("cu<+(f,l,l,l)>"),cV:s("hG"),cl:s("L"),eK:s("bv"),bv:s("bx"),D:s("by"),bI:s("du"),dd:s("eQ"),ai:s("eT"),gU:s("eU"),dE:s("eV"),cc:s("bg<E>"),_:s("aT<@>"),hg:s("f3<D?,D?>"),eO:s("fa"),y:s("W"),al:s("W(D)"),bB:s("W(E)"),i:s("l"),z:s("@"),fO:s("@()"),E:s("@(D)"),Q:s("@(D,dr)"),p:s("f"),eH:s("cY<av>?"),en:s("bG?"),aR:s("iF?"),bX:s("Y?"),bE:s("q<@>?"),T:s("q<f>?"),eA:s("q<bG?>?"),fl:s("q<q<f>?>?"),di:s("q<f?>?"),cZ:s("a8<E,E>?"),X:s("D?"),dk:s("E?"),aD:s("by?"),eW:s("eR?"),aj:s("bA?"),dP:s("hP?"),F:s("f_<@,@>?"),br:s("hY?"),fQ:s("W?"),cD:s("l?"),I:s("f?"),cg:s("k?"),e7:s("~(f,W)?"),O:s("k"),bS:s("k(l)"),aT:s("~"),M:s("~()"),fb:s("~(bK,q<f>)"),fH:s("~(E,@)"),d6:s("~(f,W)"),dX:s("~(k,k,k,k)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.d5=J.fU.prototype
B.c=J.r.prototype
B.a=J.ec.prototype
B.b=J.dc.prototype
B.p=J.cc.prototype
B.d7=J.bo.prototype
B.d8=J.ee.prototype
B.aj=A.ej.prototype
B.ak=A.ek.prototype
B.aE=A.el.prototype
B.Y=A.em.prototype
B.aF=A.en.prototype
B.Z=A.ep.prototype
B.o=A.eq.prototype
B.f=A.ce.prototype
B.bZ=J.hn.prototype
B.aN=J.du.prototype
B.ao=new A.fs(0,"direct")
B.T=new A.fs(1,"alpha")
B.aP=new A.af(0,"none")
B.ap=new A.af(3,"bitfields")
B.aq=new A.af(6,"alphaBitfields")
B.ar=new A.dM(0,"littleEndian")
B.as=new A.dM(1,"bigEndian")
B.ct=new A.ih()
B.a3=new A.dL()
B.cs=new A.ig()
B.cu=new A.dR(A.a0("dR<0&>"))
B.aQ=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cv=function() {
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
B.cA=function(getTagFallback) {
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
B.cw=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cz=function(hooks) {
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
B.cy=function(hooks) {
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
B.cx=function(hooks) {
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
B.aR=function(hooks) { return hooks; }

B.aS=new A.he()
B.aT=new A.hg()
B.cB=new A.hk()
B.z=new A.jg()
B.cC=new A.hL()
B.D=new A.jE()
B.A=new A.hZ()
B.a4=new A.i_()
B.cD=new A.kg()
B.aU=new A.c_(1,"bgra")
B.cE=new A.c_(2,"abgr")
B.aV=new A.c_(3,"argb")
B.cF=new A.c_(4,"rgb")
B.cG=new A.c_(5,"bgr")
B.aW=new A.il(4,"luminance")
B.U=new A.fz(4294967295)
B.cH=new A.c2(0,"red")
B.cI=new A.c2(1,"green")
B.cJ=new A.c2(2,"blue")
B.cK=new A.c2(3,"alpha")
B.cL=new A.c2(4,"other")
B.aX=new A.cX(0,"uint")
B.at=new A.cX(1,"half")
B.au=new A.cX(2,"float")
B.aY=new A.aY(0,"none")
B.cT=new A.it(2,"both")
B.cU=new A.as("Invalid Huffman code length",null,null)
B.cV=new A.as("Khung ph\u1ea3i l\u1ed3i, \u0111\u1ee7 l\u1edbn v\xe0 kh\xf4ng giao nhau.",null,null)
B.cW=new A.as("C\u1ea7n \u1ea3nh JPEG/PNG r\xf5 n\xe9t, t\u1eeb 90 px v\xe0 kh\xf4ng qu\xe1 20 megapixel.",null,null)
B.cX=new A.as("G\xf3c \u1ea3nh qu\xe1 h\u1eb9p",null,null)
B.cY=new A.as("C\u1ea7n b\u1ed1n g\xf3c",null,null)
B.cZ=new A.as("Incomplete Huffman table",null,null)
B.d_=new A.as("Oversubscribed Huffman table",null,null)
B.d0=new A.as("Kh\xf4ng \u0111\u1ecdc \u0111\u01b0\u1ee3c \u1ea3nh. D\xf9ng JPEG ho\u1eb7c PNG.",null,null)
B.d1=new A.as("\u1ea2nh v\u01b0\u1ee3t 16 MB. H\xe3y ch\u1ecdn \u1ea3nh nh\u1ecf h\u01a1n.",null,null)
B.w=new A.ar(0,"uint1")
B.B=new A.ar(1,"uint2")
B.J=new A.ar(10,"float32")
B.L=new A.ar(11,"float64")
B.C=new A.ar(2,"uint4")
B.e=new A.ar(3,"uint8")
B.l=new A.ar(4,"uint16")
B.K=new A.ar(5,"uint32")
B.M=new A.ar(6,"int8")
B.N=new A.ar(7,"int16")
B.O=new A.ar(8,"int32")
B.E=new A.ar(9,"float16")
B.aZ=new A.fI(1,"page")
B.i=new A.fI(2,"sequence")
B.av=new A.fM(0,"none")
B.d2=new A.fM(1,"deflate")
B.b_=new A.d_(2,"cur")
B.d=new A.ag(0,"none")
B.b0=new A.ag(1,"byte")
B.b1=new A.ag(10,"sRational")
B.b2=new A.ag(11,"single")
B.b3=new A.ag(12,"double")
B.b4=new A.ag(13,"ifd")
B.k=new A.ag(2,"ascii")
B.j=new A.ag(3,"short")
B.n=new A.ag(4,"long")
B.r=new A.ag(5,"rational")
B.b5=new A.ag(6,"sByte")
B.F=new A.ag(7,"undefined")
B.b6=new A.ag(8,"sShort")
B.b7=new A.ag(9,"sLong")
B.aw=new A.eb(0,"nearest")
B.d6=new A.eb(1,"linear")
B.b8=new A.eb(3,"average")
B.V=new A.iI(0,"yuv444")
B.d9=new A.iO(null)
B.da=new A.iP(null)
B.db=new A.iQ(!1)
B.a5=s([0,2,8],t.t)
B.dc=s([0,4,2,1],t.t)
B.d3=new A.d_(0,"invalid")
B.d4=new A.d_(1,"ico")
B.de=s([B.d3,B.d4,B.b_],A.a0("r<d_>"))
B.ba=s([252,243,207,63],t.t)
B.jF=new A.di(0,"none")
B.c1=new A.di(1,"background")
B.c2=new A.di(2,"previous")
B.bb=s([B.jF,B.c1,B.c2],A.a0("r<di>"))
B.a6=s([292,260,226,226],t.t)
B.bc=s([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],t.t)
B.bd=s([2,3,7],t.t)
B.a7=s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],t.t)
B.dG=s([3,3,11],t.t)
B.aC=s([128,128,128,128,128,128,128,128,128,128,128],t.t)
B.bi=s([B.aC,B.aC,B.aC],t.S)
B.eq=s([253,136,254,255,228,219,128,128,128,128,128],t.t)
B.fj=s([189,129,242,255,227,213,255,219,128,128,128],t.t)
B.fo=s([106,126,227,252,214,209,255,255,128,128,128],t.t)
B.hK=s([B.eq,B.fj,B.fo],t.S)
B.hR=s([1,98,248,255,236,226,255,255,128,128,128],t.t)
B.dM=s([181,133,238,254,221,234,255,154,128,128,128],t.t)
B.dK=s([78,134,202,247,198,180,255,219,128,128,128],t.t)
B.ie=s([B.hR,B.dM,B.dK],t.S)
B.el=s([1,185,249,255,243,255,128,128,128,128,128],t.t)
B.hO=s([184,150,247,255,236,224,128,128,128,128,128],t.t)
B.j4=s([77,110,216,255,236,230,128,128,128,128,128],t.t)
B.hg=s([B.el,B.hO,B.j4],t.S)
B.ho=s([1,101,251,255,241,255,128,128,128,128,128],t.t)
B.eo=s([170,139,241,252,236,209,255,255,128,128,128],t.t)
B.hu=s([37,116,196,243,228,255,255,255,128,128,128],t.t)
B.e7=s([B.ho,B.eo,B.hu],t.S)
B.fA=s([1,204,254,255,245,255,128,128,128,128,128],t.t)
B.jj=s([207,160,250,255,238,128,128,128,128,128,128],t.t)
B.ji=s([102,103,231,255,211,171,128,128,128,128,128],t.t)
B.eL=s([B.fA,B.jj,B.ji],t.S)
B.e0=s([1,152,252,255,240,255,128,128,128,128,128],t.t)
B.jo=s([177,135,243,255,234,225,128,128,128,128,128],t.t)
B.hb=s([80,129,211,255,194,224,128,128,128,128,128],t.t)
B.hJ=s([B.e0,B.jo,B.hb],t.S)
B.bn=s([1,1,255,128,128,128,128,128,128,128,128],t.t)
B.i5=s([246,1,255,128,128,128,128,128,128,128,128],t.t)
B.fX=s([255,128,128,128,128,128,128,128,128,128,128],t.t)
B.jx=s([B.bn,B.i5,B.fX],t.S)
B.eF=s([B.bi,B.hK,B.ie,B.hg,B.e7,B.eL,B.hJ,B.jx],t.o)
B.j6=s([198,35,237,223,193,187,162,160,145,155,62],t.t)
B.ep=s([131,45,198,221,172,176,220,157,252,221,1],t.t)
B.j5=s([68,47,146,208,149,167,221,162,255,223,128],t.t)
B.fJ=s([B.j6,B.ep,B.j5],t.S)
B.ig=s([1,149,241,255,221,224,255,255,128,128,128],t.t)
B.iw=s([184,141,234,253,222,220,255,199,128,128,128],t.t)
B.fT=s([81,99,181,242,176,190,249,202,255,255,128],t.t)
B.iT=s([B.ig,B.iw,B.fT],t.S)
B.iK=s([1,129,232,253,214,197,242,196,255,255,128],t.t)
B.jg=s([99,121,210,250,201,198,255,202,128,128,128],t.t)
B.hL=s([23,91,163,242,170,187,247,210,255,255,128],t.t)
B.fZ=s([B.iK,B.jg,B.hL],t.S)
B.f_=s([1,200,246,255,234,255,128,128,128,128,128],t.t)
B.iH=s([109,178,241,255,231,245,255,255,128,128,128],t.t)
B.dw=s([44,130,201,253,205,192,255,255,128,128,128],t.t)
B.iX=s([B.f_,B.iH,B.dw],t.S)
B.dV=s([1,132,239,251,219,209,255,165,128,128,128],t.t)
B.df=s([94,136,225,251,218,190,255,255,128,128,128],t.t)
B.iM=s([22,100,174,245,186,161,255,199,128,128,128],t.t)
B.hm=s([B.dV,B.df,B.iM],t.S)
B.iv=s([1,182,249,255,232,235,128,128,128,128,128],t.t)
B.hD=s([124,143,241,255,227,234,128,128,128,128,128],t.t)
B.fg=s([35,77,181,251,193,211,255,205,128,128,128],t.t)
B.fq=s([B.iv,B.hD,B.fg],t.S)
B.jy=s([1,157,247,255,236,231,255,255,128,128,128],t.t)
B.eE=s([121,141,235,255,225,227,255,255,128,128,128],t.t)
B.iI=s([45,99,188,251,195,217,255,224,128,128,128],t.t)
B.e6=s([B.jy,B.eE,B.iI],t.S)
B.dg=s([1,1,251,255,213,255,128,128,128,128,128],t.t)
B.dA=s([203,1,248,255,255,128,128,128,128,128,128],t.t)
B.ix=s([137,1,177,255,224,255,128,128,128,128,128],t.t)
B.e1=s([B.dg,B.dA,B.ix],t.S)
B.io=s([B.fJ,B.iT,B.fZ,B.iX,B.hm,B.fq,B.e6,B.e1],t.o)
B.eP=s([253,9,248,251,207,208,255,192,128,128,128],t.t)
B.i6=s([175,13,224,243,193,185,249,198,255,255,128],t.t)
B.jw=s([73,17,171,221,161,179,236,167,255,234,128],t.t)
B.hZ=s([B.eP,B.i6,B.jw],t.S)
B.ik=s([1,95,247,253,212,183,255,255,128,128,128],t.t)
B.h4=s([239,90,244,250,211,209,255,255,128,128,128],t.t)
B.j3=s([155,77,195,248,188,195,255,255,128,128,128],t.t)
B.iu=s([B.ik,B.h4,B.j3],t.S)
B.fC=s([1,24,239,251,218,219,255,205,128,128,128],t.t)
B.i8=s([201,51,219,255,196,186,128,128,128,128,128],t.t)
B.h3=s([69,46,190,239,201,218,255,228,128,128,128],t.t)
B.ii=s([B.fC,B.i8,B.h3],t.S)
B.fm=s([1,191,251,255,255,128,128,128,128,128,128],t.t)
B.hs=s([223,165,249,255,213,255,128,128,128,128,128],t.t)
B.hQ=s([141,124,248,255,255,128,128,128,128,128,128],t.t)
B.iJ=s([B.fm,B.hs,B.hQ],t.S)
B.fL=s([1,16,248,255,255,128,128,128,128,128,128],t.t)
B.eC=s([190,36,230,255,236,255,128,128,128,128,128],t.t)
B.er=s([149,1,255,128,128,128,128,128,128,128,128],t.t)
B.dW=s([B.fL,B.eC,B.er],t.S)
B.hN=s([1,226,255,128,128,128,128,128,128,128,128],t.t)
B.i1=s([247,192,255,128,128,128,128,128,128,128,128],t.t)
B.j2=s([240,128,255,128,128,128,128,128,128,128,128],t.t)
B.dC=s([B.hN,B.i1,B.j2],t.S)
B.iW=s([1,134,252,255,255,128,128,128,128,128,128],t.t)
B.hC=s([213,62,250,255,255,128,128,128,128,128,128],t.t)
B.jm=s([55,93,255,128,128,128,128,128,128,128,128],t.t)
B.hM=s([B.iW,B.hC,B.jm],t.S)
B.eh=s([B.hZ,B.iu,B.ii,B.iJ,B.dW,B.dC,B.hM,B.bi],t.o)
B.hE=s([202,24,213,235,186,191,220,160,240,175,255],t.t)
B.en=s([126,38,182,232,169,184,228,174,255,187,128],t.t)
B.dY=s([61,46,138,219,151,178,240,170,255,216,128],t.t)
B.is=s([B.hE,B.en,B.dY],t.S)
B.ha=s([1,112,230,250,199,191,247,159,255,255,128],t.t)
B.e5=s([166,109,228,252,211,215,255,174,128,128,128],t.t)
B.hq=s([39,77,162,232,172,180,245,178,255,255,128],t.t)
B.iq=s([B.ha,B.e5,B.hq],t.S)
B.hc=s([1,52,220,246,198,199,249,220,255,255,128],t.t)
B.eJ=s([124,74,191,243,183,193,250,221,255,255,128],t.t)
B.ff=s([24,71,130,219,154,170,243,182,255,255,128],t.t)
B.ip=s([B.hc,B.eJ,B.ff],t.S)
B.fd=s([1,182,225,249,219,240,255,224,128,128,128],t.t)
B.jl=s([149,150,226,252,216,205,255,171,128,128,128],t.t)
B.jC=s([28,108,170,242,183,194,254,223,255,255,128],t.t)
B.jd=s([B.fd,B.jl,B.jC],t.S)
B.jD=s([1,81,230,252,204,203,255,192,128,128,128],t.t)
B.iE=s([123,102,209,247,188,196,255,233,128,128,128],t.t)
B.j0=s([20,95,153,243,164,173,255,203,128,128,128],t.t)
B.iF=s([B.jD,B.iE,B.j0],t.S)
B.fQ=s([1,222,248,255,216,213,128,128,128,128,128],t.t)
B.hB=s([168,175,246,252,235,205,255,255,128,128,128],t.t)
B.fi=s([47,116,215,255,211,212,255,255,128,128,128],t.t)
B.ey=s([B.fQ,B.hB,B.fi],t.S)
B.fP=s([1,121,236,253,212,214,255,255,128,128,128],t.t)
B.hd=s([141,84,213,252,201,202,255,219,128,128,128],t.t)
B.hX=s([42,80,160,240,162,185,255,205,128,128,128],t.t)
B.fs=s([B.fP,B.hd,B.hX],t.S)
B.js=s([244,1,255,128,128,128,128,128,128,128,128],t.t)
B.dd=s([238,1,255,128,128,128,128,128,128,128,128],t.t)
B.i2=s([B.bn,B.js,B.dd],t.S)
B.du=s([B.is,B.iq,B.ip,B.jd,B.iF,B.ey,B.fs,B.i2],t.o)
B.dX=s([B.eF,B.io,B.eh,B.du],t.W)
B.bf=s([511,1023,2047,4095],t.t)
B.bg=s([63,207,243,252],t.t)
B.ee=s([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],t.t)
B.a8=s([0,1,2,3,4,5,6,7,8,9,10,11],t.t)
B.et=s([8,8,4,2],t.t)
B.dq=s([173,148,140],t.t)
B.dr=s([176,155,140,135],t.t)
B.dn=s([180,157,141,134,130],t.t)
B.dz=s([254,254,243,230,196,177,153,140,133,130,129],t.t)
B.bh=s([B.dq,B.dr,B.dn,B.dz],t.S)
B.bj=s([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379],t.u)
B.bk=s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],t.t)
B.bl=s([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],t.t)
B.t=s([0,1,1,2,4,8,1,1,2,4,8,4,8,4],t.t)
B.bm=s([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],t.t)
B.bo=s([280,256,256,256,40],t.t)
B.W=s([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],t.t)
B.a9=s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],t.t)
B.az=s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],t.t)
B.bp=s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],t.t)
B.aA=s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],t.t)
B.bq=s([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],t.t)
B.br=s([B.aX,B.at,B.au],A.a0("r<cX>"))
B.bs=s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],t.t)
B.bt=s([254,253,251,247,239,223,191,127],t.t)
B.aB=s([A.tM(),A.tE(),A.tT(),A.tR(),A.tO(),A.tN(),A.tP()],t.B)
B.aK=new A.a9(0,"whiteIsZero")
B.k4=new A.a9(1,"blackIsZero")
B.kb=new A.a9(2,"rgb")
B.aM=new A.a9(3,"palette")
B.kc=new A.a9(4,"transparencyMask")
B.ce=new A.a9(5,"cmyk")
B.kd=new A.a9(6,"yCbCr")
B.ke=new A.a9(7,"reserved7")
B.kf=new A.a9(8,"cieLab")
B.kg=new A.a9(9,"iccLab")
B.k5=new A.a9(10,"ituLab")
B.k6=new A.a9(11,"logL")
B.k7=new A.a9(12,"logLuv")
B.k8=new A.a9(13,"colorFilterArray")
B.k9=new A.a9(14,"linearRaw")
B.ka=new A.a9(15,"depth")
B.aL=new A.a9(16,"unknown")
B.bv=s([B.aK,B.k4,B.kb,B.aM,B.kc,B.ce,B.kd,B.ke,B.kf,B.kg,B.k5,B.k6,B.k7,B.k8,B.k9,B.ka,B.aL],A.a0("r<a9>"))
B.bx=s([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],t.t)
B.c_=new A.eG(0,"source")
B.c0=new A.eG(1,"over")
B.by=s([B.c_,B.c0],A.a0("r<eG>"))
B.jX=new A.cv(0,"invalid")
B.cc=new A.cv(1,"uint")
B.h=new A.cv(2,"int")
B.a0=new A.cv(3,"float")
B.bz=s([B.jX,B.cc,B.h,B.a0],A.a0("r<cv>"))
B.bA=s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],t.t)
B.aa=s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],t.t)
B.bB=s([B.d,B.b0,B.k,B.j,B.n,B.r,B.b5,B.F,B.b6,B.b7,B.b1,B.b2,B.b3,B.b4],A.a0("r<ag>"))
B.bC=s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],t.t)
B.cM=new A.aY(1,"rle")
B.cN=new A.aY(2,"zips")
B.cO=new A.aY(3,"zip")
B.cP=new A.aY(4,"piz")
B.cQ=new A.aY(5,"pxr24")
B.cR=new A.aY(6,"b44")
B.cS=new A.aY(7,"b44a")
B.bD=s([B.aY,B.cM,B.cN,B.cO,B.cP,B.cQ,B.cR,B.cS],A.a0("r<aY>"))
B.hU=s([231,120,48,89,115,113,120,152,112],t.t)
B.dv=s([152,179,64,126,170,118,46,70,95],t.t)
B.h2=s([175,69,143,80,85,82,72,155,103],t.t)
B.dP=s([56,58,10,171,218,189,17,13,152],t.t)
B.hp=s([114,26,17,163,44,195,21,10,173],t.t)
B.hA=s([121,24,80,195,26,62,44,64,85],t.t)
B.hl=s([144,71,10,38,171,213,144,34,26],t.t)
B.iO=s([170,46,55,19,136,160,33,206,71],t.t)
B.f0=s([63,20,8,114,114,208,12,9,226],t.t)
B.fB=s([81,40,11,96,182,84,29,16,36],t.t)
B.dh=s([B.hU,B.dv,B.h2,B.dP,B.hp,B.hA,B.hl,B.iO,B.f0,B.fB],t.S)
B.eB=s([134,183,89,137,98,101,106,165,148],t.t)
B.iz=s([72,187,100,130,157,111,32,75,80],t.t)
B.hH=s([66,102,167,99,74,62,40,234,128],t.t)
B.dB=s([41,53,9,178,241,141,26,8,107],t.t)
B.fx=s([74,43,26,146,73,166,49,23,157],t.t)
B.f8=s([65,38,105,160,51,52,31,115,128],t.t)
B.fb=s([104,79,12,27,217,255,87,17,7],t.t)
B.h0=s([87,68,71,44,114,51,15,186,23],t.t)
B.ir=s([47,41,14,110,182,183,21,17,194],t.t)
B.i4=s([66,45,25,102,197,189,23,18,22],t.t)
B.j1=s([B.eB,B.iz,B.hH,B.dB,B.fx,B.f8,B.fb,B.h0,B.ir,B.i4],t.S)
B.hT=s([88,88,147,150,42,46,45,196,205],t.t)
B.hr=s([43,97,183,117,85,38,35,179,61],t.t)
B.fh=s([39,53,200,87,26,21,43,232,171],t.t)
B.fW=s([56,34,51,104,114,102,29,93,77],t.t)
B.hh=s([39,28,85,171,58,165,90,98,64],t.t)
B.f4=s([34,22,116,206,23,34,43,166,73],t.t)
B.di=s([107,54,32,26,51,1,81,43,31],t.t)
B.iR=s([68,25,106,22,64,171,36,225,114],t.t)
B.eA=s([34,19,21,102,132,188,16,76,124],t.t)
B.ja=s([62,18,78,95,85,57,50,48,51],t.t)
B.eN=s([B.hT,B.hr,B.fh,B.fW,B.hh,B.f4,B.di,B.iR,B.eA,B.ja],t.S)
B.he=s([193,101,35,159,215,111,89,46,111],t.t)
B.eg=s([60,148,31,172,219,228,21,18,111],t.t)
B.dU=s([112,113,77,85,179,255,38,120,114],t.t)
B.j7=s([40,42,1,196,245,209,10,25,109],t.t)
B.fN=s([88,43,29,140,166,213,37,43,154],t.t)
B.f6=s([61,63,30,155,67,45,68,1,209],t.t)
B.fn=s([100,80,8,43,154,1,51,26,71],t.t)
B.dE=s([142,78,78,16,255,128,34,197,171],t.t)
B.h9=s([41,40,5,102,211,183,4,1,221],t.t)
B.eT=s([51,50,17,168,209,192,23,25,82],t.t)
B.eM=s([B.he,B.eg,B.dU,B.j7,B.fN,B.f6,B.fn,B.dE,B.h9,B.eT],t.S)
B.fe=s([138,31,36,171,27,166,38,44,229],t.t)
B.eK=s([67,87,58,169,82,115,26,59,179],t.t)
B.id=s([63,59,90,180,59,166,93,73,154],t.t)
B.iZ=s([40,40,21,116,143,209,34,39,175],t.t)
B.dJ=s([47,15,16,183,34,223,49,45,183],t.t)
B.em=s([46,17,33,183,6,98,15,32,183],t.t)
B.jE=s([57,46,22,24,128,1,54,17,37],t.t)
B.fp=s([65,32,73,115,28,128,23,128,205],t.t)
B.hG=s([40,3,9,115,51,192,18,6,223],t.t)
B.fv=s([87,37,9,115,59,77,64,21,47],t.t)
B.h8=s([B.fe,B.eK,B.id,B.iZ,B.dJ,B.em,B.jE,B.fp,B.hG,B.fv],t.S)
B.jr=s([104,55,44,218,9,54,53,130,226],t.t)
B.e4=s([64,90,70,205,40,41,23,26,57],t.t)
B.ic=s([54,57,112,184,5,41,38,166,213],t.t)
B.f5=s([30,34,26,133,152,116,10,32,134],t.t)
B.i_=s([39,19,53,221,26,114,32,73,255],t.t)
B.eR=s([31,9,65,234,2,15,1,118,73],t.t)
B.h7=s([75,32,12,51,192,255,160,43,51],t.t)
B.f7=s([88,31,35,67,102,85,55,186,85],t.t)
B.fG=s([56,21,23,111,59,205,45,37,192],t.t)
B.fH=s([55,38,70,124,73,102,1,34,98],t.t)
B.jv=s([B.jr,B.e4,B.ic,B.f5,B.i_,B.eR,B.h7,B.f7,B.fG,B.fH],t.S)
B.fF=s([125,98,42,88,104,85,117,175,82],t.t)
B.fa=s([95,84,53,89,128,100,113,101,45],t.t)
B.hv=s([75,79,123,47,51,128,81,171,1],t.t)
B.e2=s([57,17,5,71,102,57,53,41,49],t.t)
B.i7=s([38,33,13,121,57,73,26,1,85],t.t)
B.jk=s([41,10,67,138,77,110,90,47,114],t.t)
B.h5=s([115,21,2,10,102,255,166,23,6],t.t)
B.eD=s([101,29,16,10,85,128,101,196,26],t.t)
B.fl=s([57,18,10,102,102,213,34,20,43],t.t)
B.fM=s([117,20,15,36,163,128,68,1,26],t.t)
B.h_=s([B.fF,B.fa,B.hv,B.e2,B.i7,B.jk,B.h5,B.eD,B.fl,B.fM],t.S)
B.ft=s([102,61,71,37,34,53,31,243,192],t.t)
B.jh=s([69,60,71,38,73,119,28,222,37],t.t)
B.fw=s([68,45,128,34,1,47,11,245,171],t.t)
B.dm=s([62,17,19,70,146,85,55,62,70],t.t)
B.jA=s([37,43,37,154,100,163,85,160,1],t.t)
B.je=s([63,9,92,136,28,64,32,201,85],t.t)
B.iC=s([75,15,9,9,64,255,184,119,16],t.t)
B.eI=s([86,6,28,5,64,255,25,248,1],t.t)
B.i3=s([56,8,17,132,137,255,55,116,128],t.t)
B.dZ=s([58,15,20,82,135,57,26,121,40],t.t)
B.hk=s([B.ft,B.jh,B.fw,B.dm,B.jA,B.je,B.iC,B.eI,B.i3,B.dZ],t.S)
B.hy=s([164,50,31,137,154,133,25,35,218],t.t)
B.eH=s([51,103,44,131,131,123,31,6,158],t.t)
B.jc=s([86,40,64,135,148,224,45,183,128],t.t)
B.h1=s([22,26,17,131,240,154,14,1,209],t.t)
B.ej=s([45,16,21,91,64,222,7,1,197],t.t)
B.j_=s([56,21,39,155,60,138,23,102,213],t.t)
B.ju=s([83,12,13,54,192,255,68,47,28],t.t)
B.hI=s([85,26,85,85,128,128,32,146,171],t.t)
B.fY=s([18,11,7,63,144,171,4,4,246],t.t)
B.eO=s([35,27,10,146,174,171,12,26,128],t.t)
B.fR=s([B.hy,B.eH,B.jc,B.h1,B.ej,B.j_,B.ju,B.hI,B.fY,B.eO],t.S)
B.im=s([190,80,35,99,180,80,126,54,45],t.t)
B.iN=s([85,126,47,87,176,51,41,20,32],t.t)
B.i9=s([101,75,128,139,118,146,116,128,85],t.t)
B.iy=s([56,41,15,176,236,85,37,9,62],t.t)
B.e_=s([71,30,17,119,118,255,17,18,138],t.t)
B.hj=s([101,38,60,138,55,70,43,26,142],t.t)
B.fU=s([146,36,19,30,171,255,97,27,20],t.t)
B.hS=s([138,45,61,62,219,1,81,188,64],t.t)
B.j8=s([32,41,20,117,151,142,20,21,163],t.t)
B.iP=s([112,19,12,61,195,128,48,4,24],t.t)
B.ih=s([B.im,B.iN,B.i9,B.iy,B.e_,B.hj,B.fU,B.hS,B.j8,B.iP],t.S)
B.bE=s([B.dh,B.j1,B.eN,B.eM,B.h8,B.jv,B.h_,B.hk,B.fR,B.ih],t.o)
B.am=new A.ax(0,"none")
B.H=new A.ax(1,"palette")
B.cb=new A.ax(2,"rgb")
B.jR=new A.ax(3,"gray")
B.jS=new A.ax(4,"reserved4")
B.jT=new A.ax(5,"reserved5")
B.jU=new A.ax(6,"reserved6")
B.jV=new A.ax(7,"reserved7")
B.jW=new A.ax(8,"reserved8")
B.I=new A.ax(9,"paletteRle")
B.ca=new A.ax(10,"rgbRle")
B.jQ=new A.ax(11,"grayRle")
B.bF=s([B.am,B.H,B.cb,B.jR,B.jS,B.jT,B.jU,B.jV,B.jW,B.I,B.ca,B.jQ],A.a0("r<ax>"))
B.bG=s([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250],t.t)
B.ht=s([0,1,1,1,0],t.t)
B.bH=s([A.tw(),A.tD(),A.tF(),A.ty(),A.tB(),A.tH(),A.tA(),A.tG(),A.tx(),A.tz()],t.B)
B.ay=s([8,0,8,0],t.t)
B.e3=s([5,3,5,3],t.t)
B.dH=s([3,5,3,5],t.t)
B.b9=s([0,8,0,8],t.t)
B.be=s([4,4,4,4],t.t)
B.dT=s([4,4,0,0],t.t)
B.bI=s([B.ay,B.e3,B.dH,B.b9,B.ay,B.be,B.dT,B.b9],t.S)
B.ab=s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],t.t)
B.hP=s([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],t.t)
B.P=s([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],t.t)
B.bJ=s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],t.t)
B.ac=s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],t.t)
B.G=s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],t.t)
B.ad=s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],t.t)
B.ia=s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],t.t)
B.af=s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],t.t)
B.jG=new A.bN(0,"none")
B.jH=new A.bN(1,"sub")
B.jI=new A.bN(2,"up")
B.jJ=new A.bN(3,"average")
B.jK=new A.bN(4,"paeth")
B.ag=s([B.jG,B.jH,B.jI,B.jJ,B.jK],A.a0("r<bN>"))
B.x=s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],t.t)
B.y=s([0,1,3,7,15,31,63,127,255],t.t)
B.iD=s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],t.t)
B.u=s([255,255,255,255,255,255,255,255,255,255,255],t.t)
B.R=s([B.u,B.u,B.u],t.S)
B.fV=s([176,246,255,255,255,255,255,255,255,255,255],t.t)
B.jn=s([223,241,252,255,255,255,255,255,255,255,255],t.t)
B.ex=s([249,253,253,255,255,255,255,255,255,255,255],t.t)
B.h6=s([B.fV,B.jn,B.ex],t.S)
B.fD=s([255,244,252,255,255,255,255,255,255,255,255],t.t)
B.fr=s([234,254,254,255,255,255,255,255,255,255,255],t.t)
B.bN=s([253,255,255,255,255,255,255,255,255,255,255],t.t)
B.eG=s([B.fD,B.fr,B.bN],t.S)
B.jb=s([255,246,254,255,255,255,255,255,255,255,255],t.t)
B.i0=s([239,253,254,255,255,255,255,255,255,255,255],t.t)
B.bK=s([254,255,254,255,255,255,255,255,255,255,255],t.t)
B.iA=s([B.jb,B.i0,B.bK],t.S)
B.bu=s([255,248,254,255,255,255,255,255,255,255,255],t.t)
B.eX=s([251,255,254,255,255,255,255,255,255,255,255],t.t)
B.hz=s([B.bu,B.eX,B.u],t.S)
B.ax=s([255,253,254,255,255,255,255,255,255,255,255],t.t)
B.hx=s([251,254,254,255,255,255,255,255,255,255,255],t.t)
B.f3=s([B.ax,B.hx,B.bK],t.S)
B.dN=s([255,254,253,255,254,255,255,255,255,255,255],t.t)
B.fz=s([250,255,254,255,254,255,255,255,255,255,255],t.t)
B.ae=s([254,255,255,255,255,255,255,255,255,255,255],t.t)
B.fO=s([B.dN,B.fz,B.ae],t.S)
B.fk=s([B.R,B.h6,B.eG,B.iA,B.hz,B.f3,B.fO,B.R],t.o)
B.dt=s([217,255,255,255,255,255,255,255,255,255,255],t.t)
B.fS=s([225,252,241,253,255,255,254,255,255,255,255],t.t)
B.ib=s([234,250,241,250,253,255,253,254,255,255,255],t.t)
B.iQ=s([B.dt,B.fS,B.ib],t.S)
B.aD=s([255,254,255,255,255,255,255,255,255,255,255],t.t)
B.ez=s([223,254,254,255,255,255,255,255,255,255,255],t.t)
B.ek=s([238,253,254,254,255,255,255,255,255,255,255],t.t)
B.hY=s([B.aD,B.ez,B.ek],t.S)
B.fu=s([249,254,255,255,255,255,255,255,255,255,255],t.t)
B.j9=s([B.bu,B.fu,B.u],t.S)
B.iS=s([255,253,255,255,255,255,255,255,255,255,255],t.t)
B.hw=s([247,254,255,255,255,255,255,255,255,255,255],t.t)
B.hn=s([B.iS,B.hw,B.u],t.S)
B.ef=s([252,255,255,255,255,255,255,255,255,255,255],t.t)
B.dD=s([B.ax,B.ef,B.u],t.S)
B.bP=s([255,254,254,255,255,255,255,255,255,255,255],t.t)
B.ei=s([B.bP,B.bN,B.u],t.S)
B.hW=s([255,254,253,255,255,255,255,255,255,255,255],t.t)
B.bw=s([250,255,255,255,255,255,255,255,255,255,255],t.t)
B.ed=s([B.hW,B.bw,B.ae],t.S)
B.dQ=s([B.iQ,B.hY,B.j9,B.hn,B.dD,B.ei,B.ed,B.R],t.o)
B.ij=s([186,251,250,255,255,255,255,255,255,255,255],t.t)
B.eU=s([234,251,244,254,255,255,255,255,255,255,255],t.t)
B.iB=s([251,251,243,253,254,255,254,255,255,255,255],t.t)
B.f1=s([B.ij,B.eU,B.iB],t.S)
B.eZ=s([236,253,254,255,255,255,255,255,255,255,255],t.t)
B.hV=s([251,253,253,254,254,255,255,255,255,255,255],t.t)
B.fI=s([B.ax,B.eZ,B.hV],t.S)
B.il=s([254,254,254,255,255,255,255,255,255,255,255],t.t)
B.eV=s([B.bP,B.il,B.u],t.S)
B.iG=s([254,254,255,255,255,255,255,255,255,255,255],t.t)
B.eY=s([B.aD,B.iG,B.ae],t.S)
B.bQ=s([B.u,B.ae,B.u],t.S)
B.dO=s([B.f1,B.fI,B.eV,B.eY,B.bQ,B.R,B.R,B.R],t.o)
B.fy=s([248,255,255,255,255,255,255,255,255,255,255],t.t)
B.f9=s([250,254,252,254,255,255,255,255,255,255,255],t.t)
B.eS=s([248,254,249,253,255,255,255,255,255,255,255],t.t)
B.fK=s([B.fy,B.f9,B.eS],t.S)
B.dL=s([255,253,253,255,255,255,255,255,255,255,255],t.t)
B.iV=s([246,253,253,255,255,255,255,255,255,255,255],t.t)
B.f2=s([252,254,251,254,254,255,255,255,255,255,255],t.t)
B.iU=s([B.dL,B.iV,B.f2],t.S)
B.jz=s([255,254,252,255,255,255,255,255,255,255,255],t.t)
B.eQ=s([248,254,253,255,255,255,255,255,255,255,255],t.t)
B.ec=s([253,255,254,254,255,255,255,255,255,255,255],t.t)
B.hF=s([B.jz,B.eQ,B.ec],t.S)
B.jt=s([255,251,254,255,255,255,255,255,255,255,255],t.t)
B.hf=s([245,251,254,255,255,255,255,255,255,255,255],t.t)
B.hi=s([253,253,254,255,255,255,255,255,255,255,255],t.t)
B.eu=s([B.jt,B.hf,B.hi],t.S)
B.ev=s([255,251,253,255,255,255,255,255,255,255,255],t.t)
B.fE=s([252,253,254,255,255,255,255,255,255,255,255],t.t)
B.it=s([B.ev,B.fE,B.aD],t.S)
B.e8=s([255,252,255,255,255,255,255,255,255,255,255],t.t)
B.jq=s([249,255,254,255,255,255,255,255,255,255,255],t.t)
B.fc=s([255,255,254,255,255,255,255,255,255,255,255],t.t)
B.dl=s([B.e8,B.jq,B.fc],t.S)
B.jB=s([255,255,253,255,255,255,255,255,255,255,255],t.t)
B.eW=s([B.jB,B.bw,B.u],t.S)
B.eb=s([B.fK,B.iU,B.hF,B.eu,B.it,B.dl,B.eW,B.bQ],t.o)
B.iL=s([B.fk,B.dQ,B.dO,B.eb],t.W)
B.ch=new A.af(1,"rle8")
B.cm=new A.af(2,"rle4")
B.cn=new A.af(4,"jpeg")
B.co=new A.af(5,"png")
B.cp=new A.af(7,"reserved7")
B.cq=new A.af(8,"reserved8")
B.cr=new A.af(9,"reserved9")
B.ci=new A.af(10,"reserved10")
B.cj=new A.af(11,"cmyk")
B.ck=new A.af(12,"cmykRle8")
B.cl=new A.af(13,"cmykRle4")
B.ah=s([B.aP,B.ch,B.cm,B.ap,B.cn,B.co,B.aq,B.cp,B.cq,B.cr,B.ci,B.cj,B.ck,B.cl],A.a0("r<af>"))
B.Q=s([0,128,192,224,240,248,252,254,255],t.t)
B.bL=s([137,80,78,71,13,10,26,10],t.t)
B.X=s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],t.t)
B.bM=s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],t.t)
B.iY=s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],t.t)
B.cf=new A.cw(0,"predictor")
B.kv=new A.cw(1,"crossColor")
B.kw=new A.cw(2,"subtractGreen")
B.cg=new A.cw(3,"colorIndexing")
B.bO=s([B.cf,B.kv,B.kw,B.cg],A.a0("r<cw>"))
B.v=s([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],t.t)
B.jf=s([73,67,67,95,80,82,79,70,73,76,69,0],t.t)
B.bR=s([A.tI(),A.tC(),A.tS(),A.tQ(),A.tK(),A.tJ(),A.tL()],t.B)
B.bS=s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],t.t)
B.bT=s([null,A.u7(),A.u8(),A.u6()],A.a0("r<~(f,f,f,f,f,by)?>"))
B.ai=s([0,36,72,109,145,182,218,255],t.t)
B.q=s([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],t.t)
B.jp=s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],t.t)
B.jL=new A.b2(0,"bitmap")
B.c6=new A.b2(1,"grayscale")
B.jM=new A.b2(2,"indexed")
B.c7=new A.b2(3,"rgb")
B.c8=new A.b2(4,"cmyk")
B.jN=new A.b2(5,"multiChannel")
B.jO=new A.b2(6,"duoTone")
B.c9=new A.b2(7,"lab")
B.bU=s([B.jL,B.c6,B.jM,B.c7,B.c8,B.jN,B.jO,B.c9],A.a0("r<b2>"))
B.bV=s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],t.t)
B.bW=s([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],t.t)
B.dy=s([2,6,2,6],t.t)
B.e9=s([6,2,6,2],t.t)
B.dx=s([2,2,6,6],t.t)
B.ds=s([1,3,3,9],t.t)
B.dR=s([4,0,12,0],t.t)
B.dF=s([3,1,9,3],t.t)
B.es=s([8,8,0,0],t.t)
B.dS=s([4,12,0,0],t.t)
B.dp=s([16,0,0,0],t.t)
B.dk=s([12,4,0,0],t.t)
B.ea=s([6,6,2,2],t.t)
B.dI=s([3,9,1,3],t.t)
B.dj=s([12,0,4,0],t.t)
B.ew=s([9,3,3,1],t.t)
B.m=s([B.be,B.dy,B.ay,B.e9,B.dx,B.ds,B.dR,B.dF,B.es,B.dS,B.dp,B.dk,B.ea,B.dI,B.dj,B.ew],t.S)
B.S=s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],t.t)
B.bX=new A.c4([34665,"exif",40965,"interop",34853,"gps"],A.a0("c4<f,E>"))
B.bY=new A.c4([B.w,1,B.B,3,B.C,15,B.e,255,B.l,65535,B.K,4294967295,B.M,127,B.N,32767,B.O,2147483647,B.E,1,B.J,1,B.L,1],A.a0("c4<ar,f>"))
B.a_=new A.bO(0,"invalid")
B.c3=new A.bO(1,"pbm")
B.c4=new A.bO(2,"pgm2")
B.aG=new A.bO(3,"pgm5")
B.c5=new A.bO(4,"ppm3")
B.aH=new A.bO(5,"ppm6")
B.al=new A.hD(0,"noCube")
B.aI=new A.hD(1,"partial")
B.jP=new A.bQ(null,B.al,0)
B.aJ=new A.aS(0,"bilevel")
B.jY=new A.aS(1,"gray4bit")
B.jZ=new A.aS(2,"gray")
B.k_=new A.aS(3,"grayAlpha")
B.k0=new A.aS(4,"palette")
B.cd=new A.aS(5,"rgb")
B.k1=new A.aS(6,"rgba")
B.k2=new A.aS(7,"yCbCrSub")
B.a1=new A.aS(8,"generic")
B.k3=new A.aS(9,"invalid")
B.kh=A.b8("u9")
B.ki=A.b8("ov")
B.kj=A.b8("iu")
B.kk=A.b8("l8")
B.kl=A.b8("iF")
B.km=A.b8("e7")
B.kn=A.b8("le")
B.ko=A.b8("D")
B.kp=A.b8("lI")
B.kq=A.b8("bx")
B.kr=A.b8("pF")
B.ks=A.b8("by")
B.kt=new A.hM(!1)
B.ku=new A.hM(!0)
B.a2=new A.dx(0,"undefined")
B.aO=new A.dx(1,"lossy")
B.an=new A.dx(2,"lossless")
B.kx=new A.dx(3,"animated")})();(function staticFields(){$.k1=null
$.aM=A.j([],A.a0("r<D>"))
$.mX=null
$.j2=0
$.lv=A.rz()
$.mk=null
$.mj=null
$.nT=null
$.nJ=null
$.nV=null
$.kA=null
$.kM=null
$.m0=null
$.k6=A.j([],A.a0("r<q<D>?>"))
$.dG=null
$.fk=null
$.fl=null
$.lX=!1
$.ab=B.A
$.nI=null
$.lS=null
$.lT=null
$.na=!1
$.qj=A.j([A.m4(),A.tU(),A.tZ(),A.u_(),A.u0(),A.u1(),A.u2(),A.u3(),A.u4(),A.u5(),A.tV(),A.tW(),A.tX(),A.tY(),A.m4(),A.m4()],A.a0("r<f(f,bx,f)>"))
$.Q=null
$.mq=A.qz()})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ub","nY",()=>A.nS("_$dart_dartClosure"))
s($,"ua","m5",()=>A.nS("_$dart_dartClosure_dartJSInterop"))
s($,"uT","oj",()=>A.j([new J.h5()],A.a0("r<eL>")))
s($,"uj","o1",()=>A.bw(A.jo({
toString:function(){return"$receiver$"}})))
s($,"uk","o2",()=>A.bw(A.jo({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ul","o3",()=>A.bw(A.jo(null)))
s($,"um","o4",()=>A.bw(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"up","o7",()=>A.bw(A.jo(void 0)))
s($,"uq","o8",()=>A.bw(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"uo","o6",()=>A.bw(A.n5(null)))
s($,"un","o5",()=>A.bw(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"us","oa",()=>A.bw(A.n5(void 0)))
s($,"ur","o9",()=>A.bw(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"uy","m7",()=>A.qr())
s($,"uD","of",()=>A.es(4096))
s($,"uB","od",()=>new A.ke().$0())
s($,"uC","oe",()=>new A.kd().$0())
s($,"uA","oc",()=>A.pa(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))
s($,"uz","ob",()=>A.es(0))
s($,"uR","id",()=>A.i9(B.ko))
s($,"ui","m6",()=>{A.pr()
return $.j2})
s($,"ud","o_",()=>A.la(B.jp,!1))
s($,"uc","nZ",()=>A.la(B.ia,!1))
s($,"uV","ma",()=>{var q=null,p="ISOSpeed"
return A.dg([11,A.i("ProcessingSoftware",B.k,q),254,A.i("SubfileType",B.n,1),255,A.i("OldSubfileType",B.n,1),256,A.i("ImageWidth",B.n,1),257,A.i("ImageLength",B.n,1),258,A.i("BitsPerSample",B.j,1),259,A.i("Compression",B.j,1),262,A.i("PhotometricInterpretation",B.j,1),263,A.i("Thresholding",B.j,1),264,A.i("CellWidth",B.j,1),265,A.i("CellLength",B.j,1),266,A.i("FillOrder",B.j,1),269,A.i("DocumentName",B.k,q),270,A.i("ImageDescription",B.k,q),271,A.i("Make",B.k,q),272,A.i("Model",B.k,q),273,A.i("StripOffsets",B.n,q),274,A.i("Orientation",B.j,1),277,A.i("SamplesPerPixel",B.j,1),278,A.i("RowsPerStrip",B.n,1),279,A.i("StripByteCounts",B.n,1),280,A.i("MinSampleValue",B.j,1),281,A.i("MaxSampleValue",B.j,1),282,A.i("XResolution",B.r,1),283,A.i("YResolution",B.r,1),284,A.i("PlanarConfiguration",B.j,1),285,A.i("PageName",B.k,q),286,A.i("XPosition",B.r,1),287,A.i("YPosition",B.r,1),290,A.i("GrayResponseUnit",B.j,1),291,A.i("GrayResponseCurve",B.d,q),292,A.i("T4Options",B.d,q),293,A.i("T6Options",B.d,q),296,A.i("ResolutionUnit",B.j,1),297,A.i("PageNumber",B.j,2),300,A.i("ColorResponseUnit",B.d,q),301,A.i("TransferFunction",B.j,768),305,A.i("Software",B.k,q),306,A.i("DateTime",B.k,q),315,A.i("Artist",B.k,q),316,A.i("HostComputer",B.k,q),317,A.i("Predictor",B.j,1),318,A.i("WhitePoint",B.r,2),319,A.i("PrimaryChromaticities",B.r,6),320,A.i("ColorMap",B.j,q),321,A.i("HalftoneHints",B.j,2),322,A.i("TileWidth",B.n,1),323,A.i("TileLength",B.n,1),324,A.i("TileOffsets",B.n,q),325,A.i("TileByteCounts",B.d,q),326,A.i("BadFaxLines",B.d,q),327,A.i("CleanFaxData",B.d,q),328,A.i("ConsecutiveBadFaxLines",B.d,q),332,A.i("InkSet",B.d,q),333,A.i("InkNames",B.d,q),334,A.i("NumberofInks",B.d,q),336,A.i("DotRange",B.d,q),337,A.i("TargetPrinter",B.k,q),338,A.i("ExtraSamples",B.d,q),339,A.i("SampleFormat",B.j,1),340,A.i("SMinSampleValue",B.d,q),341,A.i("SMaxSampleValue",B.d,q),342,A.i("TransferRange",B.d,q),343,A.i("ClipPath",B.d,q),512,A.i("JPEGProc",B.d,q),513,A.i("JPEGInterchangeFormat",B.d,q),514,A.i("JPEGInterchangeFormatLength",B.d,q),529,A.i("YCbCrCoefficients",B.r,3),530,A.i("YCbCrSubSampling",B.j,1),531,A.i("YCbCrPositioning",B.j,1),532,A.i("ReferenceBlackWhite",B.r,6),700,A.i("ApplicationNotes",B.j,1),18246,A.i("Rating",B.j,1),33421,A.i("CFARepeatPatternDim",B.d,q),33422,A.i("CFAPattern",B.d,q),33423,A.i("BatteryLevel",B.d,q),33432,A.i("Copyright",B.k,q),33434,A.i("ExposureTime",B.r,1),33437,A.i("FNumber",B.r,q),33723,A.i("IPTC-NAA",B.n,1),34665,A.i("ExifOffset",B.d,q),34675,A.i("InterColorProfile",B.d,q),34850,A.i("ExposureProgram",B.j,1),34852,A.i("SpectralSensitivity",B.k,q),34853,A.i("GPSOffset",B.d,q),34855,A.i(p,B.n,1),34856,A.i("OECF",B.d,q),34864,A.i("SensitivityType",B.j,1),34866,A.i("RecommendedExposureIndex",B.n,1),34867,A.i(p,B.n,1),36864,A.i("ExifVersion",B.F,q),36867,A.i("DateTimeOriginal",B.k,q),36868,A.i("DateTimeDigitized",B.k,q),36880,A.i("OffsetTime",B.k,q),36881,A.i("OffsetTimeOriginal",B.k,q),36882,A.i("OffsetTimeDigitized",B.k,q),37121,A.i("ComponentsConfiguration",B.F,q),37122,A.i("CompressedBitsPerPixel",B.d,q),37377,A.i("ShutterSpeedValue",B.d,q),37378,A.i("ApertureValue",B.d,q),37379,A.i("BrightnessValue",B.d,q),37380,A.i("ExposureBiasValue",B.d,q),37381,A.i("MaxApertureValue",B.d,q),37382,A.i("SubjectDistance",B.d,q),37383,A.i("MeteringMode",B.d,q),37384,A.i("LightSource",B.d,q),37385,A.i("Flash",B.d,q),37386,A.i("FocalLength",B.d,q),37396,A.i("SubjectArea",B.d,q),37500,A.i("MakerNote",B.F,q),37510,A.i("UserComment",B.F,q),37520,A.i("SubSecTime",B.d,q),37521,A.i("SubSecTimeOriginal",B.d,q),37522,A.i("SubSecTimeDigitized",B.d,q),40091,A.i("XPTitle",B.d,q),40092,A.i("XPComment",B.d,q),40093,A.i("XPAuthor",B.d,q),40094,A.i("XPKeywords",B.d,q),40095,A.i("XPSubject",B.d,q),40960,A.i("FlashPixVersion",B.d,q),40961,A.i("ColorSpace",B.j,1),40962,A.i("ExifImageWidth",B.j,1),40963,A.i("ExifImageLength",B.j,1),40964,A.i("RelatedSoundFile",B.d,q),40965,A.i("InteroperabilityOffset",B.d,q),41483,A.i("FlashEnergy",B.d,q),41484,A.i("SpatialFrequencyResponse",B.d,q),41486,A.i("FocalPlaneXResolution",B.d,q),41487,A.i("FocalPlaneYResolution",B.d,q),41488,A.i("FocalPlaneResolutionUnit",B.d,q),41492,A.i("SubjectLocation",B.d,q),41493,A.i("ExposureIndex",B.d,q),41495,A.i("SensingMethod",B.d,q),41728,A.i("FileSource",B.d,q),41729,A.i("SceneType",B.d,q),41730,A.i("CVAPattern",B.d,q),41985,A.i("CustomRendered",B.d,q),41986,A.i("ExposureMode",B.d,q),41987,A.i("WhiteBalance",B.d,q),41988,A.i("DigitalZoomRatio",B.d,q),41989,A.i("FocalLengthIn35mmFilm",B.d,q),41990,A.i("SceneCaptureType",B.d,q),41991,A.i("GainControl",B.d,q),41992,A.i("Contrast",B.d,q),41993,A.i("Saturation",B.d,q),41994,A.i("Sharpness",B.d,q),41995,A.i("DeviceSettingDescription",B.d,q),41996,A.i("SubjectDistanceRange",B.d,q),42016,A.i("ImageUniqueID",B.d,q),42032,A.i("CameraOwnerName",B.k,q),42033,A.i("BodySerialNumber",B.k,q),42034,A.i("LensSpecification",B.d,q),42035,A.i("LensMake",B.k,q),42036,A.i("LensModel",B.k,q),42037,A.i("LensSerialNumber",B.k,q),42240,A.i("Gamma",B.r,1),50341,A.i("PrintIM",B.d,q),59932,A.i("Padding",B.d,q),59933,A.i("OffsetSchema",B.d,q),65e3,A.i("OwnerName",B.k,q),65001,A.i("SerialNumber",B.k,q)],t.p,A.a0("fE"))})
s($,"ue","ia",()=>A.pg(A.j([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],t.t)))
r($,"ut","ib",()=>A.es(511))
r($,"uu","kY",()=>A.es(511))
r($,"uw","kZ",()=>A.mT(2041))
r($,"ux","l_",()=>A.mT(225))
r($,"uv","aF",()=>A.es(766))
s($,"ug","o0",()=>A.mD(0,0,0))
s($,"uP","ao",()=>A.es(1))
s($,"uQ","aA",()=>A.oY(B.f.gA($.ao()),0,null))
s($,"uI","an",()=>A.pc(1))
s($,"uJ","az",()=>J.ol(B.Z.gA($.an()),0,null))
s($,"uK","M",()=>A.pe(1))
s($,"uM","a6",()=>J.om(B.o.gA($.M()),0,null))
s($,"uL","bW",()=>A.oQ(B.o.gA($.M())))
s($,"uG","ic",()=>A.p8(1))
s($,"uH","l0",()=>A.n6(B.Y.gA($.ic()),0))
s($,"uE","m8",()=>A.p4(1))
s($,"uF","og",()=>A.n6(B.aj.gA($.m8()),0))
s($,"uN","m9",()=>A.pE(1))
s($,"uO","oh",()=>{var q=$.m9()
return A.oR(q.gA(q))})
s($,"uS","oi",()=>{var q,p,o=A.j([],t.u)
for(q=0;q<256;++q){p=q/255
o.push(p<=0.04045?p/12.92:A.tm((p+0.055)/1.055,2.4))}return A.p5(o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.cd,SharedArrayBuffer:A.cd,ArrayBufferView:A.eo,DataView:A.hi,Float32Array:A.ej,Float64Array:A.ek,Int16Array:A.el,Int32Array:A.em,Int8Array:A.en,Uint16Array:A.ep,Uint32Array:A.eq,Uint8ClampedArray:A.er,CanvasPixelArray:A.er,Uint8Array:A.ce})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.f6.$nativeSuperclassTag="ArrayBufferView"
A.f7.$nativeSuperclassTag="ArrayBufferView"
A.bM.$nativeSuperclassTag="ArrayBufferView"
A.f8.$nativeSuperclassTag="ArrayBufferView"
A.f9.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.tj
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=rubik_scan_worker.js.map
