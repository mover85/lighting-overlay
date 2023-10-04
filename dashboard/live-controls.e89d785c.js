let t,e,i,r,n,s;var o,a,l,c,d,h,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u={},f={},m=p.parcelRequire5971;null==m&&((m=function(t){if(t in u)return u[t].exports;if(t in f){var e=f[t];delete f[t];var i={id:t,exports:{}};return u[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){f[t]=e},p.parcelRequire5971=m),m.register("flzy3",function(t,e){/** Used to stand-in for `undefined` hash values. */var i,r="__lodash_hash_undefined__",n="[object Arguments]",s="[object Boolean]",o="[object Date]",a="[object Function]",l="[object GeneratorFunction]",c="[object Map]",d="[object Number]",h="[object Object]",u="[object Promise]",f="[object RegExp]",m="[object Set]",_="[object String]",y="[object Symbol]",v="[object WeakMap]",g="[object ArrayBuffer]",b="[object DataView]",w="[object Float32Array]",x="[object Float64Array]",C="[object Int8Array]",S="[object Int16Array]",P="[object Int32Array]",A="[object Uint8Array]",E="[object Uint8ClampedArray]",z="[object Uint16Array]",O="[object Uint32Array]",T=/\w*$/,M=/^\[object .+?Constructor\]$/,H=/^(?:0|[1-9]\d*)$/,I={};I[n]=I["[object Array]"]=I[g]=I[b]=I[s]=I[o]=I[w]=I[x]=I[C]=I[S]=I[P]=I[c]=I[d]=I[h]=I[f]=I[m]=I[_]=I[y]=I[A]=I[E]=I[z]=I[O]=!0,I["[object Error]"]=I[a]=I[v]=!1;/** Detect free variable `global` from Node.js. */var k="object"==typeof p&&p&&p.Object===Object&&p,N="object"==typeof self&&self&&self.Object===Object&&self,$=k||N||Function("return this")(),R=e&&!e.nodeType&&e,L=R&&t&&!t.nodeType&&t,D=L&&L.exports===R;/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function V(t,e){return(// Don't return `map.set` because it's not chainable in IE 11.
t.set(e[0],e[1]),t)}/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function F(t,e){return(// Don't return `set.add` because it's not chainable in IE 11.
t.add(e),t)}/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function j(t,e,i,r){var n=-1,s=t?t.length:0;for(r&&s&&(i=t[++n]);++n<s;)i=e(i,t[n],n,t);return i}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function U(t){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function B(t){var e=-1,i=Array(t.size);return t.forEach(function(t,r){i[++e]=[r,t]}),i}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function q(t,e){return function(i){return t(e(i))}}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function Y(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=t}),i}/** Used for built-in method references. */var J=Array.prototype,G=Function.prototype,X=Object.prototype,W=$["__core-js_shared__"],K=(i=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",Z=G.toString,Q=X.hasOwnProperty,tt=X.toString,te=RegExp("^"+Z.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ti=D?$.Buffer:void 0,tr=$.Symbol,tn=$.Uint8Array,ts=q(Object.getPrototypeOf,Object),to=Object.create,ta=X.propertyIsEnumerable,tl=J.splice,tc=Object.getOwnPropertySymbols,td=ti?ti.isBuffer:void 0,th=q(Object.keys,Object),tp=tk($,"DataView"),tu=tk($,"Map"),tf=tk($,"Promise"),tm=tk($,"Set"),t_=tk($,"WeakMap"),ty=tk(Object,"create"),tv=tL(tp),tg=tL(tu),tb=tL(tf),tw=tL(tm),tx=tL(t_),tC=tr?tr.prototype:void 0,tS=tC?tC.valueOf:void 0;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tP(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tA(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tE(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tz(t){this.__data__=new tA(t)}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function tO(t,e,i){var r=t[e];Q.call(t,e)&&tD(r,i)&&(void 0!==i||e in t)||(t[e]=i)}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function tT(t,e){for(var i=t.length;i--;)if(tD(t[i][0],e))return i;return -1}/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function tM(t){var e=new t.constructor(t.byteLength);return new tn(e).set(new tn(t)),e}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function tH(t,e,i,r){i||(i={});for(var n=-1,s=e.length;++n<s;){var o=e[n],a=r?r(i[o],t[o],o,i,t):void 0;tO(i,o,void 0===a?t[o]:a)}return i}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function tI(t,e){var i,r=t.__data__;return("string"==(i=typeof e)||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==e:null===e)?r["string"==typeof e?"string":"hash"]:r.map}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function tk(t,e){var i=null==t?void 0:t[e];return!(!tB(i)||K&&K in i)&&(tU(i)||U(i)?te:M).test(tL(i))?i:void 0}// Add methods to `Hash`.
tP.prototype.clear=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=ty?ty(null):{}},tP.prototype.delete=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){return this.has(t)&&delete this.__data__[t]},tP.prototype.get=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){var e=this.__data__;if(ty){var i=e[t];return i===r?void 0:i}return Q.call(e,t)?e[t]:void 0},tP.prototype.has=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){var e=this.__data__;return ty?void 0!==e[t]:Q.call(e,t)},tP.prototype.set=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(t,e){return this.__data__[t]=ty&&void 0===e?r:e,this},// Add methods to `ListCache`.
tA.prototype.clear=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[]},tA.prototype.delete=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){var e=this.__data__,i=tT(e,t);return!(i<0)&&(i==e.length-1?e.pop():tl.call(e,i,1),!0)},tA.prototype.get=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){var e=this.__data__,i=tT(e,t);return i<0?void 0:e[i][1]},tA.prototype.has=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){return tT(this.__data__,t)>-1},tA.prototype.set=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(t,e){var i=this.__data__,r=tT(i,t);return r<0?i.push([t,e]):i[r][1]=e,this},// Add methods to `MapCache`.
tE.prototype.clear=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.__data__={hash:new tP,map:new(tu||tA),string:new tP}},tE.prototype.delete=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){return tI(this,t).delete(t)},tE.prototype.get=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){return tI(this,t).get(t)},tE.prototype.has=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){return tI(this,t).has(t)},tE.prototype.set=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(t,e){return tI(this,t).set(t,e),this},// Add methods to `Stack`.
tz.prototype.clear=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new tA},tz.prototype.delete=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){return this.__data__.delete(t)},tz.prototype.get=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){return this.__data__.get(t)},tz.prototype.has=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){return this.__data__.has(t)},tz.prototype.set=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(t,e){var i=this.__data__;if(i instanceof tA){var r=i.__data__;if(!tu||r.length<199)return r.push([t,e]),this;i=this.__data__=new tE(r)}return i.set(t,e),this};/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var tN=tc?q(tc,Object):/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function(){return[]},t$=/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(t){return tt.call(t)};/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function tR(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function tL(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function tD(t,e){return t===e||t!=t&&e!=e}(tp&&t$(new tp(new ArrayBuffer(1)))!=b||tu&&t$(new tu)!=c||tf&&t$(tf.resolve())!=u||tm&&t$(new tm)!=m||t_&&t$(new t_)!=v)&&(t$=function(t){var e=tt.call(t),i=e==h?t.constructor:void 0,r=i?tL(i):void 0;if(r)switch(r){case tv:return b;case tg:return c;case tb:return u;case tw:return m;case tx:return v}return e});/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var tV=Array.isArray;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function tF(t){var e;return null!=t&&"number"==typeof(e=t.length)&&e>-1&&e%1==0&&e<=9007199254740991&&!tU(t)}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var tj=td||/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1};/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function tU(t){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var e=tB(t)?tt.call(t):"";return e==a||e==l}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function tB(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function tq(t){return tF(t)?/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(t,e){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var i,r=tV(t)||t&&"object"==typeof t&&tF(t)&&Q.call(t,"callee")&&(!ta.call(t,"callee")||tt.call(t)==n)?/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(t,e){for(var i=-1,r=Array(t);++i<t;)r[i]=e(i);return r}(t.length,String):[],s=r.length,o=!!s;for(var a in t)Q.call(t,a)&&!(o&&("length"==a||(i=null==(i=s)?9007199254740991:i)&&("number"==typeof a||H.test(a))&&a>-1&&a%1==0&&a<i))&&r.push(a);return r}(t):/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(t){if(!tR(t))return th(t);var e=[];for(var i in Object(t))Q.call(t,i)&&"constructor"!=i&&e.push(i);return e}(t)}t.exports=/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */function(t){return(/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function t(e,i,r,p,u,v,M){if(p&&(H=v?p(e,u,v,M):p(e)),void 0!==H)return H;if(!tB(e))return e;var H,k=tV(e);if(k){if(N=e.length,$=e.constructor(N),N&&"string"==typeof e[0]&&Q.call(e,"index")&&($.index=e.index,$.input=e.input),H=$,!i)return(/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function(t,e){var i=-1,r=t.length;for(e||(e=Array(r));++i<r;)e[i]=t[i];return e}(e,H))}else{var N,$,R,L,D,q,J=t$(e),G=J==a||J==l;if(tj(e))return(/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function(t,e){if(e)return t.slice();var i=new t.constructor(t.length);return t.copy(i),i}(e,i));if(J==h||J==n||G&&!v){if(U(e))return v?e:{};if(H="function"!=typeof(R=G?{}:e).constructor||tR(R)?{}:tB(L=ts(R))?to(L):{},!i)return D=(q=H)&&tH(e,tq(e),q),tH(e,tN(e),D)}else{if(!I[J])return v?e:{};H=/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function(t,e,i,r){var n,a,l,h=t.constructor;switch(e){case g:return tM(t);case s:case o:return new h(+t);case b:return n=r?tM(t.buffer):t.buffer,new t.constructor(n,t.byteOffset,t.byteLength);case w:case x:case C:case S:case P:case A:case E:case z:case O:return a=r?tM(t.buffer):t.buffer,new t.constructor(a,t.byteOffset,t.length);case c:return j(r?i(B(t),!0):B(t),V,new t.constructor);case d:case _:return new h(t);case f:return(l=new t.constructor(t.source,T.exec(t))).lastIndex=t.lastIndex,l;case m:return j(r?i(Y(t),!0):Y(t),F,new t.constructor);case y:return tS?Object(tS.call(t)):{}}}(e,J,t,i)}}// Check for circular references and return its corresponding clone.
M||(M=new tz);var X=M.get(e);if(X)return X;if(M.set(e,H),!k){var W,K,Z=r?(K=tq(W=e),tV(W)?K:/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function(t,e){for(var i=-1,r=e.length,n=t.length;++i<r;)t[n+i]=e[i];return t}(K,tN(W))):tq(e)}return(/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function(t,e){for(var i=-1,r=t?t.length:0;++i<r&&!1!==e(t[i],i,t););}(Z||e,function(n,s){Z&&(n=e[s=n]),// Recursively populate clone (susceptible to call stack limits).
tO(H,s,t(n,i,r,p,s,e,M))}),H)}(t,!1,!0))}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=window,y=_.ShadowRoot&&(void 0===_.ShadyCSS||_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol(),g=new WeakMap;class b{constructor(t,e,i){if(this._$cssResult$=!0,i!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(y&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=g.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&g.set(e,t))}return t}toString(){return this.cssText}}const w=t=>new b("string"==typeof t?t:t+"",void 0,v),x=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new b(i,t,v)},C=(t,e)=>{y?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),r=_.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)})},S=y?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return w(e)})(t):t,P=window,A=P.trustedTypes,E=A?A.emptyScript:"",z=P.reactiveElementPolyfillSupport,O={toAttribute(t,e){switch(e){case Boolean:t=t?E:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},T=(t,e)=>e!==t&&(e==e||t==t),M={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:T},H="finalized";class I extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){let n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||M}static finalize(){if(this.hasOwnProperty(H))return!1;this[H]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(S(t))}else void 0!==t&&e.push(S(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return C(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=M){var r;let n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){let s=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:O).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;let r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){let t=r.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:O;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||T)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}I[H]=!0,I.elementProperties=new Map,I.elementStyles=[],I.shadowRootOptions={mode:"open"},null==z||z({ReactiveElement:I}),(null!==(a=P.reactiveElementVersions)&&void 0!==a?a:P.reactiveElementVersions=[]).push("1.6.3");const k=window,N=k.trustedTypes,$=N?N.createPolicy("lit-html",{createHTML:t=>t}):void 0,R="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,D="?"+L,V=`<${D}>`,F=document,j=()=>F.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,B=Array.isArray,q=t=>B(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),Y="[ 	\n\f\r]",J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,X=/>/g,W=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,Z=/"/g,Q=/^(?:script|style|textarea|title)$/i,tt=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),te=tt(1),ti=(tt(2),Symbol.for("lit-noChange")),tr=Symbol.for("lit-nothing"),tn=new WeakMap,ts=F.createTreeWalker(F,129,null,!1);function to(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const ta=(t,e)=>{let i=t.length-1,r=[],n,s=2===e?"<svg>":"",o=J;for(let e=0;e<i;e++){let i=t[e],a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(l=o.exec(i)));)d=o.lastIndex,o===J?"!--"===l[1]?o=G:void 0!==l[1]?o=X:void 0!==l[2]?(Q.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=W):void 0!==l[3]&&(o=W):o===W?">"===l[0]?(o=null!=n?n:J,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?W:'"'===l[3]?Z:K):o===Z||o===K?o=W:o===G||o===X?o=J:(o=W,n=void 0);let h=o===W&&t[e+1].startsWith("/>")?" ":"";s+=o===J?i+V:c>=0?(r.push(a),i.slice(0,c)+R+i.slice(c)+L+h):i+L+(-2===c?(r.push(void 0),e):h)}return[to(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class tl{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0,o=t.length-1,a=this.parts,[l,c]=ta(t,e);if(this.el=tl.createElement(l,i),ts.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=ts.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){let t=[];for(let e of r.getAttributeNames())if(e.endsWith(R)||e.startsWith(L)){let i=c[s++];if(t.push(e),void 0!==i){let t=r.getAttribute(i.toLowerCase()+R).split(L),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?tu:"?"===e[1]?tm:"@"===e[1]?t_:tp})}else a.push({type:6,index:n})}for(let e of t)r.removeAttribute(e)}if(Q.test(r.tagName)){let t=r.textContent.split(L),e=t.length-1;if(e>0){r.textContent=N?N.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],j()),ts.nextNode(),a.push({type:2,index:++n});r.append(t[e],j())}}}else if(8===r.nodeType){if(r.data===D)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(L,t+1));)a.push({type:7,index:n}),t+=L.length-1}}n++}}static createElement(t,e){let i=F.createElement("template");return i.innerHTML=t,i}}function tc(t,e,i=t,r){var n,s,o;if(e===ti)return e;let a=void 0!==r?null===(n=i._$Co)||void 0===n?void 0:n[r]:i._$Cl,l=U(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===l?a=void 0:(a=new l(t))._$AT(t,i,r),void 0!==r?(null!==(o=i._$Co)&&void 0!==o?o:i._$Co=[])[r]=a:i._$Cl=a),void 0!==a&&(e=tc(t,a._$AS(t,e.values),a,r)),e}class td{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:F).importNode(i,!0);ts.currentNode=n;let s=ts.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new th(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new ty(s,this,t)),this._$AV.push(e),l=r[++a]}o!==(null==l?void 0:l.index)&&(s=ts.nextNode(),o++)}return ts.currentNode=F,n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class th{constructor(t,e,i,r){var n;this.type=2,this._$AH=tr,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){U(t=tc(this,t,e))?t===tr||null==t||""===t?(this._$AH!==tr&&this._$AR(),this._$AH=tr):t!==this._$AH&&t!==ti&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):q(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tr&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(F.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=tl.createElement(to(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new td(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=tn.get(t.strings);return void 0===e&&tn.set(t.strings,e=new tl(t)),e}T(t){B(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,r=0;for(let n of t)r===e.length?e.push(i=new th(this.k(j()),this.k(j()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class tp{constructor(t,e,i,r,n){this.type=1,this._$AH=tr,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=tr}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){let n=this.strings,s=!1;if(void 0===n)(s=!U(t=tc(this,t,e,0))||t!==this._$AH&&t!==ti)&&(this._$AH=t);else{let r,o;let a=t;for(t=n[0],r=0;r<n.length-1;r++)(o=tc(this,a[i+r],e,r))===ti&&(o=this._$AH[r]),s||(s=!U(o)||o!==this._$AH[r]),o===tr?t=tr:t!==tr&&(t+=(null!=o?o:"")+n[r+1]),this._$AH[r]=o}s&&!r&&this.j(t)}j(t){t===tr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tu extends tp{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tr?void 0:t}}const tf=N?N.emptyScript:"";class tm extends tp{constructor(){super(...arguments),this.type=4}j(t){t&&t!==tr?this.element.setAttribute(this.name,tf):this.element.removeAttribute(this.name)}}class t_ extends tp{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=tc(this,t,e,0))&&void 0!==i?i:tr)===ti)return;let r=this._$AH,n=t===tr&&r!==tr||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==tr&&(r===tr||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ty{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tc(this,t)}}const tv=k.litHtmlPolyfillSupport;null==tv||tv(tl,th),(null!==(l=k.litHtmlVersions)&&void 0!==l?l:k.litHtmlVersions=[]).push("2.8.0");const tg=(t,e,i)=>{var r,n;let s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e,o=s._$litPart$;if(void 0===o){let t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new th(e.insertBefore(j(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o};class tb extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tg(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return ti}}tb.finalized=!0,tb._$litElement$=!0,null===(c=globalThis.litElementHydrateSupport)||void 0===c||c.call(globalThis,{LitElement:tb});const tw=globalThis.litElementPolyfillSupport;null==tw||tw({LitElement:tb}),(null!==(d=globalThis.litElementVersions)&&void 0!==d?d:globalThis.litElementVersions=[]).push("3.3.3");let tx=0;function tC(){t=null,tx=0}const tS=Symbol("haunted.phase"),tP=Symbol("haunted.hook"),tA=Symbol("haunted.update"),tE=Symbol("haunted.commit"),tz=Symbol("haunted.effects"),tO=Symbol("haunted.layoutEffects"),tT="haunted.context";class tM{update;host;virtual;[tP];[tz];[tO];constructor(t,e){this.update=t,this.host=e,this[tP]=new Map,this[tz]=[],this[tO]=[]}run(e){t=this;let i=e();return tC(),i}_runEffects(e){let i=this[e];for(let e of(t=this,i))e.call(this);tC()}runEffects(){this._runEffects(tz)}runLayoutEffects(){this._runEffects(tO)}teardown(){this[tP].forEach(t=>{"function"==typeof t.teardown&&t.teardown()})}}const tH=Promise.resolve().then.bind(Promise.resolve());function tI(){let t,e=[];function i(){t=null;let i=e;e=[];for(var r=0,n=i.length;r<n;r++)i[r]()}return function(r){e.push(r),null==t&&(t=tH(i))}}const tk=tI(),tN=tI();class t${renderer;host;state;[tS];_updateQueued;constructor(t,e){this.renderer=t,this.host=e,this.state=new tM(this.update.bind(this),e),this[tS]=null,this._updateQueued=!1}update(){this._updateQueued||(tk(()=>{let t=this.handlePhase(tA);tN(()=>{this.handlePhase(tE,t),tN(()=>{this.handlePhase(tz)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,e){switch(this[tS]=t,t){case tE:this.commit(e),this.runEffects(tO);return;case tA:return this.render();case tz:return this.runEffects(tz)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}const tR=(t="")=>t.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");class tL{id;state;constructor(t,e){this.id=t,this.state=e}}function tD(e,...i){let r=tx++,n=t[tP],s=n.get(r);return s||(s=new e(r,t,...i),n.set(r,s)),s.update(...i)}function tV(t){return tD.bind(null,t)}function tF(t){return tV(class extends tL{callback;lastValues;values;_teardown;constructor(e,i,r,n){super(e,i),t(i,this)}update(t,e){this.callback=t,this.values=e}call(){(!this.values||this.hasChanged())&&this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function tj(t,e){t[tz].push(e)}/**
 * @function
 * @param {() => void} effect - callback function that runs each time dependencies change
 * @param {unknown[]} [dependencies] - list of dependencies to the effect
 * @return {void}
 */const tU=tF(tj),tB=tV(class extends tL{Context;value;_ranEffect;_unsubscribe;constructor(t,e,i){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,tj(e,this)}update(t){if(this.state.virtual)throw Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){let e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent(tT,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:i=null,value:r}=e;this.value=i?r:t.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}}),tq=tV(class extends tL{value;values;constructor(t,e,i,r){super(t,e),this.value=i(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((t,e)=>this.values[e]!==t)}}),tY=(t,e)=>tq(()=>t,e);tF(/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function(t,e){t[tO].push(e)});/**
 * @function
 * @template {*} T
 * @param {T} [initialState] - Optional initial state
 * @return {readonly [state: T, updaterFn: StateUpdater<T>]} stateTuple - Tuple of current state and state updater function
 */const tJ=tV(class extends tL{args;constructor(t,e,i){super(t,e),this.updater=this.updater.bind(this),"function"==typeof i&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){if("function"==typeof t){let e=t,[i]=this.args;t=e(i)}this.makeArgs(t),this.state.update()}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Promise.resolve(),tV(class extends tL{reducer;currentState;constructor(t,e,i,r,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==n?n(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tG={ATTRIBUTE:1,CHILD:2},tX=t=>(...e)=>({_$litDirective$:t,values:e});class tW{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:tK}={O:R,P:L,A:D,C:1,M:ta,L:td,R:q,D:tc,I:th,V:tp,H:tm,N:t_,U:tu,F:ty},tZ=(t,e)=>{var i;let r=t._$AN;if(void 0===r)return!1;for(let t of r)null===(i=t._$AO)||void 0===i||i.call(t,e,!1),tZ(t,e);return!0},tQ=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===(null==i?void 0:i.size))},t1=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),t5(e)}};function t0(t){void 0!==this._$AN?(tQ(this),this._$AM=t,t1(this)):this._$AM=t}function t2(t,e=!1,i=0){let r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(e){if(Array.isArray(r))for(let t=i;t<r.length;t++)tZ(r[t],!1),tQ(r[t]);else null!=r&&(tZ(r,!1),tQ(r))}else tZ(this,t)}}const t5=t=>{var e,i;t.type==tG.CHILD&&(null!==(e=t._$AP)&&void 0!==e||(t._$AP=t2),null!==(i=t._$AQ)&&void 0!==i||(t._$AQ=t0))};Array.prototype.includes,new WeakMap,new WeakMap;const{component:t4,createContext:t3}=function({render:t}){let e=function(t){class e extends t${frag;constructor(t,e,i){super(t,i||e),this.frag=e}commit(e){t(e,this.frag)}}return function(t,i,r){let n=(r||i||{}).baseElement||HTMLElement,{observedAttributes:s=[],useShadowDOM:o=!0,shadowRootInit:a={}}=r||i||{};class l extends n{_scheduler;static get observedAttributes(){return t.observedAttributes||s||[]}constructor(){super(),!1===o?this._scheduler=new e(t,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new e(t,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(t,e,i){if(e===i)return;let r=""===i||i;Reflect.set(this,tR(t),r)}}let c=new Proxy(n.prototype,{getPrototypeOf:t=>t,set(t,e,i,r){let n;if(e in t)return(n=Object.getOwnPropertyDescriptor(t,e))&&n.set?n.set.call(r,i):Reflect.set(t,e,i,r),!0;if("symbol"==typeof e||"_"===e[0])n={enumerable:!0,configurable:!0,writable:!0,value:i};else{let t,e;t=i,e=!1,n=Object.freeze({enumerable:!0,configurable:!0,get:()=>t,set(i){// Avoid scheduling update when prop value hasn't changed
(!e||t!==i)&&(e=!0,t=i,this._scheduler&&this._scheduler.update())}})}return Object.defineProperty(r,e,n),n.set&&n.set.call(r,i),!0}});return Object.setPrototypeOf(l.prototype,c),l}}(t);return{component:e,createContext:t=>{let i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.listeners=new Set,this.addEventListener(tT,this)}disconnectedCallback(){this.removeEventListener(tT,this)}handleEvent(t){let{detail:e}=t;e.Context===i&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}unsubscribe(t){this.listeners.delete(t)}set value(t){for(let e of(this._value=t,this.listeners))e(t)}get value(){return this._value}},Consumer:e(function({render:t}){let e=tB(i);return t(e)}),defaultValue:t};return i}}}({render:tg}),t6=tX(class extends tW{constructor(t){var e;if(super(t),t.type!==tG.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.it){for(let r in this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)!e[r]||(null===(i=this.nt)||void 0===i?void 0:i.has(r))||this.it.add(r);return this.render(e)}let n=t.element.classList;for(let t in this.it.forEach(t=>{t in e||(n.remove(t),this.it.delete(t))}),e){let i=!!e[t];i===this.it.has(t)||(null===(r=this.nt)||void 0===r?void 0:r.has(t))||(i?(n.add(t),this.it.add(t)):(n.remove(t),this.it.delete(t)))}return ti}});var t8=m("flzy3");/**
 * Subscribe to a replicant, returns tuple of the replicant value and `setValue` function.
 * The component using this function gets re-rendered when the value is updated.
 * The `setValue` function can be used to update replicant value.
 * @param replicantName The name of the replicant to use
 * @param initialValue Initial value to pass to `useState` function
 * @param options Options object.  Currently supports the optional `namespace` option
 */const t9=(t,e,i)=>{let[r,n]=tJ(e),s=i&&{defaultValue:i.defaultValue,persistent:i.persistent,schemaPath:i.schemaPath},o=i&&i.namespace?nodecg.Replicant(t,i.namespace,s):nodecg.Replicant(t,s),a=t=>{n(e=>t!==e?t:(t8&&t8.__esModule?t8.default:t8)(t))};return tU(()=>(o.on("change",a),()=>{o.removeListener("change",a)}),[o]),[r,t=>{o.value=t}]};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */var t7=function(t,e){return(t7=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},et=function(){return(et=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function ee(t,e,i,r){var n,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o}function ei(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=t=>e=>"function"==typeof e?(customElements.define(t,e),e):((t,e)=>{let{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e),en=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}},es=(t,e,i)=>{e.constructor.createProperty(i,t)};function eo(t){return(e,i)=>void 0!==i?es(t,e,i):en(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ea(t){return eo({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const el=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){let r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(s.finisher=function(e){t(e,r)}),s}{let n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ec(t,e){return el({descriptor:i=>{let r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){let e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}null!=(null===(h=window.HTMLSlotElement)||void 0===h?void 0:h.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const ed=x`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/** @soyCompatible */let eh=class extends tb{/** @soyTemplate */render(){return te`<span><slot></slot></span>`}};eh.styles=[ed],eh=ee([er("mwc-icon")],eh);const ep=()=>{};document.addEventListener("x",ep,{get passive(){return!1}}),document.removeEventListener("x",ep);class eu extends tb{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}/**
     * Create and attach the MDC Foundation to the instance
     */createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *//**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ef=/** @class */function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports every
// CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){// Classes extending MDCFoundation should implement this method to return an object which exports all
// of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){// Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
// way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
// validation.
return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){// Subclasses should override this method to perform initialization routines (registering events, etc.)
},t.prototype.destroy=function(){// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
},t}(),em={// Ripple is a special case where the "root" component is really a "mixin" of sorts,
// given that it's an 'upgrade' to an existing component. That being said it is the root
// CSS class that all other CSS classes derive from.
BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},e_={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ey={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},ev=["touchstart","pointerdown","mousedown","keydown"],eg=["touchend","pointerup","mouseup","contextmenu"],eb=[],ew=/** @class */function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(t){r.activateImpl(t)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}t7(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return em},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return e_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ey},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,n=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(s),// Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(n),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},/**
     * @param evt Optional event containing position information.
     */e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},/**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},/**
     * supportsPressRipple Passed from init to save a redundant function call
     */e.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var r=ei(ev),n=r.next();!n.done;n=r.next()){var s=n.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=ei(eg),n=r.next();!n.done;n=r.next()){var s=n.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}},e.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=ei(ev),r=i.next();!r.done;r=i.next()){var n=r.value;this.adapter.deregisterInteractionHandler(n,this.activateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=ei(eg),r=i.next();!r.done;r=i.next()){var n=r.value;this.adapter.deregisterDocumentInteractionHandler(n,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings;Object.keys(i).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(i[e],null)})},e.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){// Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
var r=this.previousActivationEvent;if(!(r&&void 0!==t&&r.type!==t.type)){if(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&eb.length>0&&eb.some(function(t){return e.adapter.containsEventTarget(t)})){// Immediately reset activation state, while preserving logic that prevents touch follow-on events
this.resetActivationState();return}void 0!==t&&(eb.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){// Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
eb=[],!i.wasElementMadeActive&&void 0!==t&&(" "===t.key||32===t.keyCode)&&(// If space was pressed, try again within an rAF call to detect :active, because different UAs report
// active states inconsistently when they're called within event handling code:
// - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
// - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
// We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
// variable is set within a rAF callback for a submit button interaction (#2241).
i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,s=e.cssClasses,o=s.FG_DEACTIVATION,a=s.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",d="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),p=h.startPoint,u=h.endPoint;c=p.x+"px, "+p.y+"px",d=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(r,c),this.adapter.updateCssVariable(n,d),// Cancel any ongoing activation/deactivation animations
clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),// Force layout in order to re-trigger the animation.
this.adapter.computeBoundingRect(),this.adapter.addClass(a),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},l)},e.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,i=e.activationEvent;return{startPoint:// Center the element around the start point.
t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,n,s=e.x,o=e.y,a=s+i.left,l=o+i.top;return"touchstart"===t.type?(r=t.changedTouches[0].pageX-a,n=t.changedTouches[0].pageY-l):(r=t.pageX-a,n=t.pageY-l),{x:r,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,n=r.hasDeactivationUXRun,s=r.isActivated;(n||!s)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(i)},ey.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),// Touch devices may fire additional events for the same interaction within a short time.
// Store the previous event until it's safe to assume that subsequent events are for new interactions.
setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,e=this.activationState;// This can happen in scenarios such as when you have a keyup event that blurs the element.
if(e.isActivated){var i=et({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(this.frame.width,2)+Math.pow(this.frame.height,2))+e.numbers.PADDING;// Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
var i=Math.floor(t*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,n=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},e}(ef);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ex="important",eC=" !"+ex,eS=tX(class extends tW{constructor(t){var e;if(super(t),t.type!==tG.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ht){for(let t in this.ht=new Set,e)this.ht.add(t);return this.render(e)}for(let t in this.ht.forEach(t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}),e){let r=e[t];if(null!=r){this.ht.add(t);let e="string"==typeof r&&r.endsWith(eC);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?ex:""):i[t]=r}}return ti}});class eP extends eu{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=ew}get isActive(){var t;return((t=this.parentElement||this).matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>void 0,deregisterInteractionHandler:()=>void 0,registerDocumentInteractionHandler:()=>void 0,deregisterDocumentInteractionHandler:()=>void 0,registerResizeHandler:()=>void 0,deregisterResizeHandler:()=>void 0,updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation(()=>{this.mdcFoundation.activate(t)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}/**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}/** @soyTemplate */render(){let t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return te`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${t6(i)}"
          style="${eS({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}ee([ec(".mdc-ripple-surface")],eP.prototype,"mdcRoot",void 0),ee([eo({type:Boolean})],eP.prototype,"primary",void 0),ee([eo({type:Boolean})],eP.prototype,"accent",void 0),ee([eo({type:Boolean})],eP.prototype,"unbounded",void 0),ee([eo({type:Boolean})],eP.prototype,"disabled",void 0),ee([eo({type:Boolean})],eP.prototype,"activated",void 0),ee([eo({type:Boolean})],eP.prototype,"selected",void 0),ee([eo({type:Boolean})],eP.prototype,"internalUseStateLayerCustomProperties",void 0),ee([ea()],eP.prototype,"hovering",void 0),ee([ea()],eP.prototype,"bgFocused",void 0),ee([ea()],eP.prototype,"fgActivation",void 0),ee([ea()],eP.prototype,"fgDeactivation",void 0),ee([ea()],eP.prototype,"fgScale",void 0),ee([ea()],eP.prototype,"fgSize",void 0),ee([ea()],eP.prototype,"translateStart",void 0),ee([ea()],eP.prototype,"translateEnd",void 0),ee([ea()],eP.prototype,"leftPos",void 0),ee([ea()],eP.prototype,"topPos",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const eA=x`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;/** @soyCompatible */let eE=class extends eP{};eE.styles=[eA],eE=ee([er("mwc-ripple")],eE);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */class ez{constructor(/** Function that returns a `mwc-ripple` */t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eO=t=>null!=t?t:tr;class eT extends tb{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new ez(()=>(this.shouldRenderRipple=!0,this.ripple))}/** @soyTemplate */renderOverlay(){return te``}/** @soyTemplate */renderRipple(){let t=this.raised||this.unelevated;return this.shouldRenderRipple?te`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){let t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){let t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}/** @soyTemplate */getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}/**
     * @soyTemplate
     * @soyAttributes buttonAttributes: #button
     * @soyClasses buttonClasses: #button
     */render(){return te`
      <button
          id="button"
          class="mdc-button ${t6(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${eO(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${t6({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}/** @soyTemplate */renderIcon(){return te`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(t){let e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}eT.shadowRootOptions={mode:"open",delegatesFocus:!0},ee([function(t,e,i){if(void 0!==e)return(/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * TypeScript version of the decorator
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */function(t,e,i){let r=t.constructor;if(!i){/**
         * lit uses internal properties with two leading underscores to
         * provide storage for accessors
         */let t=`__${e}`;if(!(i=r.getPropertyDescriptor(e,t)))throw Error("@ariaProperty must be used after a @property decorator")}// descriptor must exist at this point, reassign so typescript understands
let n=i,s="";if(!n.set)throw Error(`@ariaProperty requires a setter for ${e}`);// TODO(b/202853219): Remove this check when internal tooling is
// compatible
// tslint:disable-next-line:no-any bail if applied to internal generated class
if(t.dispatchWizEvent)return i;let o={configurable:!0,enumerable:!0,set(t){if(""===s){let t=r.getPropertyOptions(e);// if attribute is not a string, use `name` instead
s="string"==typeof t.attribute?t.attribute:e}this.hasAttribute(s)&&this.removeAttribute(s),n.set.call(this,t)}};return n.get&&(o.get=function(){return n.get.call(this)}),o}(t,e,i));throw Error("@ariaProperty only supports TypeScript Decorators")},eo({type:String,attribute:"aria-haspopup"})],eT.prototype,"ariaHasPopup",void 0),ee([eo({type:Boolean,reflect:!0})],eT.prototype,"raised",void 0),ee([eo({type:Boolean,reflect:!0})],eT.prototype,"unelevated",void 0),ee([eo({type:Boolean,reflect:!0})],eT.prototype,"outlined",void 0),ee([eo({type:Boolean})],eT.prototype,"dense",void 0),ee([eo({type:Boolean,reflect:!0})],eT.prototype,"disabled",void 0),ee([eo({type:Boolean,attribute:"trailingicon"})],eT.prototype,"trailingIcon",void 0),ee([eo({type:Boolean,reflect:!0})],eT.prototype,"fullwidth",void 0),ee([eo({type:String})],eT.prototype,"icon",void 0),ee([eo({type:String})],eT.prototype,"label",void 0),ee([eo({type:Boolean})],eT.prototype,"expandContent",void 0),ee([ec("#button")],eT.prototype,"buttonElement",void 0),ee([el({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("mwc-ripple")},enumerable:!0,configurable:!0})})],eT.prototype,"ripple",void 0),ee([ea()],eT.prototype,"shouldRenderRipple",void 0),ee([(o={passive:!0},el({finisher:(t,e)=>{Object.assign(t.prototype[e],o)}}))],eT.prototype,"handleRippleActivate",null);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const eM=x`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;/** @soyCompatible */let eH=class extends eT{};eH.styles=[eM],eH=ee([er("mwc-button")],eH);const eI=(t,e)=>{let i=Math.ceil(t);return Math.floor(Math.random()*(Math.floor(e)-i+1)+i);// The maximum is inclusive and the minimum is inclusive
},ek=t4(()=>{let[t]=t9("nowPlaying",{artUrl:"",title:"",artist:"",album:""}),[e]=t9("nowPlayingPaused",!1),[i,r]=tJ("Waiting for data...");tU(()=>{""!==t.title&&r(t.title)},[t.title]);let n=tY(()=>nodecg.sendMessage("toggleNowPlaying",!e),[e]),s=tY(()=>{let t=eI(1,50);nodecg.sendMessage("nowPlaying",{title:`Test title ${t}`,artist:`Test artist ${t}`,album:`Test album ${t}`})},[]);return te`
  <style>
    :host {
      display: var(--layout-vertical_-_display);
      flex-direction: var(--layout-vertical_-_flex-direction);
    }

    .marquee {
      font-weight: 500;
      font-size: 24px;
      flex-grow: 1;
      word-break: break-word;
      word-wrap: break-word;
      margin-bottom: 0.5em;
    }

    .row {
      display: var(--layout-horizontal_-_display);
      justify-content: var(--layout-end-justified_-_justify-content);
    }

    .row :last-child {
      margin-right: 0;
    }

    mwc-button {
      width: 152px;
      margin-right: 1em;
      --mdc-theme-on-primary: white;
      --mdc-theme-primary: #645ba6;
      --mdc-ripple-focus-opacity: 0;
    }

    .toggle.active {
      --mdc-theme-primary: #928bc1;
    }
  </style>

  <div class="marquee">${i}</div>
  <div class="row">
    <mwc-button class="toggle ${t6({active:e})}" raised @click="${()=>n()}" label="Pause"></mwc-button>
    <mwc-button raised @click="${()=>s()}" label="Test"></mwc-button>
  </div>
  `});customElements.define("dash-nowplaying",ek);const eN=!(window.ShadyDOM&&window.ShadyDOM.inUse);/**
 * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
 */function e$(t){e=(!t||!t.shimcssproperties)&&(eN||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const eR=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?e=window.ShadyCSS.nativeCss:window.ShadyCSS?(e$(window.ShadyCSS),// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=void 0):e$(window.WebComponents&&window.WebComponents.flags);const eL=/** @type {boolean} */e;/** @unrestricted */class eD{constructor(){/** @type {number} */this.start=0,/** @type {number} */this.end=0,/** @type {StyleNode} */this.previous=null,/** @type {StyleNode} */this.parent=null,/** @type {Array<StyleNode>} */this.rules=null,/** @type {string} */this.parsedCssText="",/** @type {string} */this.cssText="",/** @type {boolean} */this.atRule=!1,/** @type {number} */this.type=0,/** @type {string} */this.keyframesName="",/** @type {string} */this.selector="",/** @type {string} */this.parsedSelector=""}}function eV(t){return(// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {!StyleNode}
 */function t(e,i){let r=i.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
r=(r=(r=(r=i.substring(t,e.start-1)).replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})).replace(eB.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=r.trim();e.atRule=0===n.indexOf(eJ),e.atRule?0===n.indexOf(eY)?e.type=eF.MEDIA_RULE:n.match(eB.keyframesRule)&&(e.type=eF.KEYFRAMES_RULE,e.keyframesName=e.selector.split(eB.multipleSpaces).pop()):0===n.indexOf(eq)?e.type=eF.MIXIN_RULE:e.type=eF.STYLE_RULE}let n=e.rules;if(n)for(let e=0,r=n.length,s;e<r&&(s=n[e]);e++)t(s,i);return e}(// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {!StyleNode}
 */function(t){let e=new eD;e.start=0,e.end=t.length;let i=e;for(let r=0,n=t.length;r<n;r++)if(t[r]===ej){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;(i=new eD).start=r+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[r]===eU&&(i.end=r+1,i=i.parent||e);return e}(t=t.replace(eB.comments,"").replace(eB.port,"")),t))}const eF={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ej="{",eU="}",eB={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},eq="--",eY="@media",eJ="@",eG=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,eX=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,eW=/@media\s(.*)/,eK=new Set;function eZ(t,e){return t?("string"==typeof t&&(t=eV(t)),e&&e1(t,e),function t(e,i,r=""){// calc rule cssText
let n="";if(e.cssText||e.rules){let r,o=e.rules;if(o&&!((r=o[0])&&r.selector&&0===r.selector.indexOf(eq)))for(let e=0,r=o.length,s;e<r&&(s=o[e]);e++)n=t(s,i,n);else{var s;(n=(n=i?e.cssText:(0,e.cssText).replace(eB.customProp,"").replace(eB.mixinProp,"").replace(eB.mixinApply,"").replace(eB.varApply,"")).trim())&&(n="  "+n+"\n")}}return n&&(e.selector&&(r+=e.selector+" "+ej+"\n"),r+=n,e.selector&&(r+=eU+"\n\n")),r}(t,eL)):""}function eQ(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=eV(t.textContent)),t.__cssRules||null}function e1(t,e,i,r){if(!t)return;let n=!1,s=t.type;if(r&&s===eF.MEDIA_RULE){let e=t.selector.match(eW);e&&!window.matchMedia(e[1]).matches&&(n=!0)}s===eF.STYLE_RULE?e(t):i&&s===eF.KEYFRAMES_RULE?i(t):s===eF.MIXIN_RULE&&(n=!0);let o=t.rules;if(o&&!n)for(let t=0,n=o.length,s;t<n&&(s=o[t]);t++)e1(s,e,i,r)}window.ShadyDOM&&window.ShadyDOM.wrap||(t=>t);const e0="css-build";function e2(t){return""!==function(t){if(void 0!==i)return i;if(void 0===t.__cssBuild){// try attribute first, as it is the common case
let e=t.getAttribute(e0);if(e)t.__cssBuild=e;else{let e=function(t){let e="template"===t.localName?/** @type {!HTMLTemplateElement} */t.content.firstChild:t.firstChild;if(e instanceof Comment){let t=e.textContent.trim().split(":");if(t[0]===e0)return t[1]}return""}(t);""!==e&&/**
 * @param {!HTMLElement} element
 */function(t){let e="template"===t.localName?/** @type {!HTMLTemplateElement} */t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}(t)}function e5(t,e){// remove previous properties
for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function e4(t,e){/**
   * @const {string}
   */let i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}const e3=/;\s*/m,e6=/^\s*(initial)|(inherit)\s*$/,e8=/\s*!important/;// map of mixin to property names
// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
class e9{constructor(){/** @type {!Object<string, !MixinMapEntry>} */this._map={}}/**
   * @param {string} name
   * @param {!PropertyEntry} props
   */set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}/**
   * @param {string} name
   * @return {MixinMapEntry}
   */get(t){return t=t.trim(),this._map[t]||null}}/**
 * Callback for when an element is marked invalid
 * @type {?function(string)}
 */let e7=null;/** @unrestricted */class it{constructor(){/** @type {?string} */this._currentElement=null,/** @type {HTMLMetaElement} */this._measureElement=null,this._map=new e9}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */detectMixin(t){return function(t){let e=eX.test(t)||eG.test(t);return eX.lastIndex=0,eG.lastIndex=0,e}(t)}/**
   * Gather styles into one style for easier processing
   * @param {!HTMLTemplateElement} template
   * @return {HTMLStyleElement}
   */gatherStyles(t){let e=function(t){/** @type {!Array<string>} */let e=[],i=/** @type {!NodeList<!HTMLStyleElement>} */t.querySelectorAll("style");for(let t=0;t<i.length;t++){let r=i[t];r.hasAttribute("shady-unscoped")?eN||(!function(t){let e=t.textContent;if(!eK.has(e)){eK.add(e);let t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}(t.content);if(e){let i=/** @type {!HTMLStyleElement} */document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}/**
   * @param {!HTMLTemplateElement} template
   * @param {string} elementName
   * @return {StyleNode}
   */transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));/** @type {HTMLStyleElement} */let i=t._gatheredStyle;return i?this.transformStyle(i,e):null}/**
   * @param {!HTMLStyleElement} style
   * @param {string} elementName
   * @return {StyleNode}
   */transformStyle(t,e=""){let i=eQ(t);return this.transformRules(i,e),t.textContent=eZ(i),i}/**
   * @param {!HTMLStyleElement} style
   * @return {StyleNode}
   */transformCustomStyle(t){let e=eQ(t);return e1(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=eZ(e),e}/**
   * @param {StyleNode} rules
   * @param {string} elementName
   */transformRules(t,e){this._currentElement=e,e1(t,t=>{this.transformRule(t)}),this._currentElement=null}/**
   * @param {!StyleNode} rule
   */transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}/**
   * @param {string} cssText
   * @param {!StyleNode} rule
   * @return {string}
   */transformCssText(t,e){// consume mixins
return(// produce variables
t=t.replace(eG,(t,i,r,n)=>this._produceCssProperties(t,i,r,n,e)),this._consumeCssProperties(t,e))}/**
   * @param {string} property
   * @return {string}
   */_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=/** @type {HTMLMetaElement} */document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}/**
   * Walk over all rules before this rule to find fallbacks for mixins
   *
   * @param {!StyleNode} startRule
   * @return {!Object}
   */_fallbacksFromPreviousRules(t){// find the "top" rule
let e=t;for(;e.parent;)e=e.parent;let i={},r=!1;return e1(e,e=>{// stop when we hit the input rule
(r=r||e===t)||e.selector!==t.selector||Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}/**
   * replace mixin consumption with variable consumption
   * @param {string} text
   * @param {!StyleNode=} rule
   * @return {string}
   */_consumeCssProperties(t,e){/** @type {Array} */let i=null;// loop over text until all mixins with defintions have been applied
for(;i=eX.exec(t);){let r=i[0],n=i[1],s=i.index,o=s+r.indexOf("@apply"),a=s+r.length,l=t.slice(0,o),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(n,d);// use regex match position to replace mixin, keep linear processing time
t=`${l}${h}${c}`,eX.lastIndex=s+h.length}return t}/**
   * produce variable consumption at the site of mixin consumption
   * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
   * Example:
   *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
   *
   * @param {string} mixinName
   * @param {Object} fallbacks
   * @return {string}
   */_atApplyToCssProperties(t,e){t=t.replace(e3,"");let i=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){let n,s,o;this._currentElement&&(r.dependants[this._currentElement]=!0);let a=r.properties;for(n in a)o=e&&e[n],s=[n,": var(",t,"_-_",n],o&&s.push(",",o.replace(e8,"")),s.push(")"),e8.test(a[n])&&s.push(" !important"),i.push(s.join(""))}return i.join("; ")}/**
   * @param {string} property
   * @param {string} value
   * @return {string}
   */_replaceInitialOrInherit(t,e){let i=e6.exec(e);return i&&(// replace `initial` with the concrete initial value for this property
e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}/**
   * "parse" a mixin definition into a map of properties and values
   * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
   * @param {string} text
   * @param {boolean=} replaceInitialOrInherit
   * @return {!Object<string, string>}
   */_cssTextToMap(t,e=!1){let i,r,n=t.split(";"),s={};for(let t=0,o,a;t<n.length;t++)(o=n[t])&&(a=o.split(":")).length>1&&(i=a[0].trim(),// some properties may have ':' in the value, like data urls
r=a.slice(1).join(":"),e&&(r=this._replaceInitialOrInherit(i,r)),s[i]=r);return s}/**
   * @param {MixinMapEntry} mixinEntry
   */_invalidateMixinEntry(t){if(e7)for(let e in t.dependants)e!==this._currentElement&&e7(e)}/**
   * @param {string} matchText
   * @param {string} propertyName
   * @param {?string} valueProperty
   * @param {?string} valueMixin
   * @param {!StyleNode} rule
   * @return {string}
   */_produceCssProperties(t,e,i,r,n){let s,o;if(i&&function t(e,i){// find 'var('
let r=e.indexOf("var(");if(-1===r)return i(e,"","","");//${prefix}var(${inner})${suffix}
let n=function(t,e){let i=0;for(let r=e,n=t.length;r<n;r++)if("("===t[r])i++;else if(")"===t[r]&&0==--i)return r;return -1}(e,r+3),s=e.substring(r+4,n),o=e.substring(0,r),a=t(e.substring(n+1),i),l=s.indexOf(",");return(// value and fallback args should be trimmed to match in property lookup
-1===l?i(o,s.trim(),"",a):i(o,s.substring(0,l).trim(),s.substring(l+1).trim(),a))}(i,(t,e)=>{e&&this._map.get(e)&&(r=`@apply ${e};`)}),!r)return t;let a=this._consumeCssProperties(""+r,n),l=t.slice(0,t.indexOf("--")),c=this._cssTextToMap(a,!0),d=c,h=this._map.get(e),p=h&&h.properties;p?// and this is what we want.
d=Object.assign(Object.create(p),c):this._map.set(e,d);let u=[],f=!1;for(s in d)void 0===(o=c[s])&&(o="initial"),!p||s in p||(f=!0),u.push(`${e}_-_${s}: ${o}`);return f&&this._invalidateMixinEntry(h),h&&(h.properties=d),i&&(l=`${t};${l}`),`${l}${u.join("; ")};`}}/* exports *//* eslint-disable no-self-assign */it.prototype.detectMixin=it.prototype.detectMixin,it.prototype.transformStyle=it.prototype.transformStyle,it.prototype.transformCustomStyle=it.prototype.transformCustomStyle,it.prototype.transformRules=it.prototype.transformRules,it.prototype.transformRule=it.prototype.transformRule,it.prototype.transformTemplate=it.prototype.transformTemplate,it.prototype._separator="_-_",/* eslint-enable no-self-assign */Object.defineProperty(it.prototype,"invalidCallback",{/** @return {?function(string)} */get:()=>e7,/** @param {?function(string)} cb */set(t){e7=t}});var ie={};/*
 * Utilities for handling invalidating apply-shim mixins for a given template.
 *
 * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
 * The template
 *//** @const {string} */const ii="_applyShimCurrentVersion",ir="_applyShimNextVersion",is="_applyShimValidatingVersion",io=Promise.resolve();function ia(t){let e=ie[t];e&&(// default the current version to 0
e[ii]=e[ii]||0,// ensure the "validating for" flag exists
e[is]=e[is]||0,// increment the next version
e[ir]=(e[ir]||0)+1)}/** @type {Promise<void>} */let il=null,ic=window.HTMLImports&&window.HTMLImports.whenReady||null;function id(t){requestAnimationFrame(function(){ic?ic(t):(il||(il=new Promise(t=>{r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),il.then(function(){t&&t()}))})}const ih="__seenByShadyCSS",ip="__shadyCSSCachedStyle";/** @type {?function(!HTMLStyleElement)} */let iu=null,im=null;class i_{constructor(){/** @type {!Array<!CustomStyleProvider>} */this.customStyles=[],this.enqueued=!1,id(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}/**
   * Queue a validation for new custom styles to batch style recalculations
   */enqueueDocumentValidation(){!this.enqueued&&im&&(this.enqueued=!0,id(im))}/**
   * @param {!HTMLStyleElement} style
   */addCustomStyle(t){t[ih]||(t[ih]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}/**
   * @param {!CustomStyleProvider} customStyle
   * @return {HTMLStyleElement}
   */getStyleForCustomStyle(t){return t[ip]?t[ip]:t.getStyle?t.getStyle():t}/**
   * @return {!Array<!CustomStyleProvider>}
   */processStyles(){let t=this.customStyles;for(let e=0;e<t.length;e++){let i=t[e];if(i[ip])continue;let r=this.getStyleForCustomStyle(i);if(r){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
let t=/** @type {!HTMLStyleElement} */r.__appliedElement||r;iu&&iu(t),i[ip]=t}}return t}}/* eslint-disable no-self-assign */i_.prototype.addCustomStyle=i_.prototype.addCustomStyle,i_.prototype.getStyleForCustomStyle=i_.prototype.getStyleForCustomStyle,i_.prototype.processStyles=i_.prototype.processStyles,/* eslint-enable no-self-assign */Object.defineProperties(i_.prototype,{transformCallback:{/** @return {?function(!HTMLStyleElement)} */get:()=>iu,/** @param {?function(!HTMLStyleElement)} fn */set(t){iu=t}},validateCallback:{/** @return {?function()} */get:()=>im,/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set(t){let e=!1;im||(e=!0),im=t,e&&this.enqueueDocumentValidation()}}});/** @const {ApplyShim} */const iy=new it;if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){let t=new class{constructor(){/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null,iy.invalidCallback=ia}ensure(){!this.customStyleInterface&&window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{iy.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}/**
   * @param {!HTMLTemplateElement} template
   * @param {string} elementName
   */prepareTemplate(t,e){if(this.ensure(),e2(t))return;ie[e]=t;let i=iy.transformTemplate(t,e);// save original style ast to use for revalidating instances
t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&iy.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}/**
   * @param {HTMLElement} element
   * @param {Object=} properties
   */styleSubtree(t,e){if(this.ensure(),e&&e5(t,e),t.shadowRoot){this.styleElement(t);let e=/** @type {!ParentNode} */t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(/** @type {HTMLElement} */e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(/** @type {HTMLElement} */e[t])}}/**
   * @param {HTMLElement} element
   */styleElement(t){let e,i,r;this.ensure();let{is:n}=(e=t.localName,i="",r="",e?e.indexOf("-")>-1?i=e:(r=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=/** @type {?} */t.is,r=/** @type {?} */t.extends),{is:i,typeExtension:r}),s=ie[n];if(!(s&&e2(s))&&s&&s[ii]!==s[ir]){// only revalidate template once
!(s[ii]!==s[ir]&&s[is]===s[ir])&&(this.prepareTemplate(s,n),// remember that the current "next version" is the reason for this validation cycle
s[is]=s[ir],s._validating||(s._validating=!0,io.then(function(){// sync the current version to let future invalidations cause a refresh cycle
s[ii]=s[ir],s._validating=!1})));// update this element instance
let e=t.shadowRoot;if(e){let t=/** @type {HTMLStyleElement} */e.querySelector("style");t&&(// reuse the template's style ast, it has all the original css text
t.__cssRules=s._styleAst,t.textContent=eZ(s._styleAst))}}}/**
   * @param {Object=} properties
   */styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}},e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */// eslint-disable-next-line @typescript-eslint/no-unused-vars
prepareTemplate(e,i,r){t.flushCustomStyles(),t.prepareTemplate(e,i)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom(t,e){},/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},/**
     * @param {!HTMLElement} element
     */styleElement(e){t.flushCustomStyles(),t.styleElement(e)},/**
     * @param {Object=} properties
     */styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:(t,e)=>e4(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:eL,nativeShadow:eN,cssBuild:i,disableRuntime:eR},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=iy,/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 *//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//* eslint-disable no-unused-vars *//**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
 * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
 *
 * @param {?} prop Property name
 * @param {*} obj Reference object
 * @return {string} Potentially renamed property name
 */window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let iv=/(url\()([^)]*)(\))/g,ig=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ib(t,e){if(t&&ig.test(t)||"//"===t)return t;// Lazy feature detection.
if(void 0===n){n=!1;try{let t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){// silently fail
}}if(e||(e=document.baseURI||window.location.href),n)try{return new URL(t,e).href}catch(e){// Bad url or baseURI structure. Do not attempt to resolve.
return t}return s||((s=document.implementation.createHTMLDocument("temp")).base=s.createElement("base"),s.head.appendChild(s.base),s.anchor=s.createElement("a"),s.body.appendChild(s.anchor)),s.base.href=e,s.anchor.href=t,s.anchor.href||t}function iw(t,e){return t.replace(iv,function(t,i,r,n){return i+"'"+ib(r.replace(/["']/g,""),e)+"'"+n})}function ix(t){return t.substring(0,t.lastIndexOf("/")+1)}const iC=!window.ShadyDOM||!window.ShadyDOM.inUse;window.ShadyCSS&&window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback;const iS=iC&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&// Since spec may change, feature detect exact API we need
(()=>{try{let t=new CSSStyleSheet;t.replaceSync("");let e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let iP=window.Polymer&&window.Polymer.rootPath||ix(document.baseURI||window.location.href),iA=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,iE=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,iz=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,iO=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,iT=window.Polymer&&window.Polymer.legacyOptimizations||!1,iM=window.Polymer&&window.Polymer.legacyWarnings||!1,iH=window.Polymer&&window.Polymer.syncInitialRender||!1,iI=window.Polymer&&window.Polymer.legacyUndefined||!1,ik=window.Polymer&&window.Polymer.orderedComputed||!1,iN=window.Polymer&&window.Polymer.removeNestedTemplates||!1,i$=window.Polymer&&window.Polymer.fastDomIf||!1,iR=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,iL=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,iD=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,iV=0;/**
 * @constructor
 * @extends {Function}
 * @private
 */function iF(){}/** @type {(WeakMap | undefined)} */iF.prototype.__mixinApplications,/** @type {(Object | undefined)} */iF.prototype.__mixinSet;const ij=function(t){let e=/** @type {!MixinFunction} */t.__mixinApplications;e||(e=new WeakMap,/** @type {!MixinFunction} */t.__mixinApplications=e);// maintain a unique id for each mixin
let i=iV++;return function(r){let n=/** @type {!MixinFunction} */r.__mixinSet;if(n&&n[i])return r;let s=e,o=s.get(r);if(!o){o=/** @type {!Function} */t(r),s.set(r,o);// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
let e=Object.create(/** @type {!MixinFunction} */o.__mixinSet||n||null);e[i]=!0,/** @type {!MixinFunction} */o.__mixinSet=e}return o}};/* eslint-enable valid-jsdoc *//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * Module with utilities for collection CSS text from `<templates>`, external
 * stylesheets, and `dom-module`s.
 *
 * @summary Module with utilities for collection CSS text from various sources.
 *//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let iU={},iB={};/**
 * Sets a dom-module into the global registry by id.
 *
 * @param {string} id dom-module id
 * @param {DomModule} module dom-module instance
 * @return {void}
 */function iq(t,e){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
iU[t]=iB[t.toLowerCase()]=e}/**
 * Retrieves a dom-module from the global registry by id.
 *
 * @param {string} id dom-module id
 * @return {DomModule!} dom-module instance
 */function iY(t){return iU[t]||iB[t.toLowerCase()]}class iJ extends HTMLElement{/** @override */static get observedAttributes(){return["id"]}/**
   * Retrieves the element specified by the css `selector` in the module
   * registered by `id`. For example, this.import('foo', 'img');
   * @param {string} id The id of the dom-module in which to search.
   * @param {string=} selector The css selector by which to find the element.
   * @return {Element} Returns the element which matches `selector` in the
   * module registered at the specified `id`.
   *
   * @export
   * @nocollapse Referred to indirectly in style-gather.js
   */static import(t,e){if(t){let i=iY(t);return i&&e?i.querySelector(e):i}return null}/* eslint-disable no-unused-vars *//**
   * @param {string} name Name of attribute.
   * @param {?string} old Old value of attribute.
   * @param {?string} value Current value of attribute.
   * @param {?string} namespace Attribute namespace.
   * @return {void}
   * @override
   */attributeChangedCallback(t,e,i,r){e!==i&&this.register()}/* eslint-enable no-unused-args *//**
   * The absolute URL of the original location of this `dom-module`.
   *
   * This value will differ from this element's `ownerDocument` in the
   * following ways:
   * - Takes into account any `assetpath` attribute added during bundling
   *   to indicate the original location relative to the bundled location
   * - Uses the HTMLImports polyfill's `importForElement` API to ensure
   *   the path is relative to the import document's location since
   *   `ownerDocument` is not currently polyfilled
   */get assetpath(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accommodate polyfilled HTMLImports
let t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=ib(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ix(e)}return this.__assetpath}/**
   * Registers the dom-module at a given id. This method should only be called
   * when a dom-module is imperatively created. For
   * example, `document.createElement('dom-module').register('foo')`.
   * @param {string=} id The id at which to register the dom-module.
   * @return {void}
   */register(t){if(t=t||this.id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(iz&&void 0!==iY(t))throw iq(t,null),Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,iq(t,this),this.querySelector("style")&&console.warn("dom-module %s has style outside template",this.id)}}}iJ.prototype.modules=iU,customElements.define("dom-module",iJ);const iG="shady-unscoped";/**
 * @param {string} moduleId .
 * @return {?DomModule} .
 */function iX(t){return iJ.import(t)}function iW(t){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
let e=t.body?t.body:t,i=iw(e.textContent,t.baseURI),r=document.createElement("style");return r.textContent=i,r}function iK(t,e){if(!t._styles){let i=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let n=r[t],s=n.getAttribute("include");s&&i.push(...(function(t){let e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...function(t){let e=iX(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){let t=[];// module imports: <link rel="import" type="css">
t.push(...iZ(e));// include css from the first template in the module
let i=/** @type {?HTMLTemplateElement} */e.querySelector("template");i&&t.push(...iK(i,/** @type {templateWithAssetPath} */e.assetpath)),e._styles=t}return e._styles}(e[t]));return i})(s).filter(function(t,e,i){return i.indexOf(t)===e})),e&&(n.textContent=iw(n.textContent,/** @type {string} */e)),i.push(n)}t._styles=i}return t._styles}/**
 * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
 * @return {!Array<!HTMLStyleElement>} Array of contained styles
 */function iZ(t){let e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let r=i[t];if(r.import){let t=r.import,i=r.hasAttribute(iG);if(i&&!t._unscopedStyle){let e=iW(t);e.setAttribute(iG,""),t._unscopedStyle=e}else t._style||(t._style=iW(t));e.push(i?t._unscopedStyle:t._style)}}return e}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 *//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//* eslint-disable valid-jsdoc *//**
 * Node wrapper to ensure ShadowDOM safe operation regardless of polyfill
 * presence or mode. Note that with the introduction of `ShadyDOM.noPatch`,
 * a node wrapper must be used to access ShadowDOM API.
 * This is similar to using `Polymer.dom` but relies exclusively
 * on the presence of the ShadyDOM polyfill rather than requiring the loading
 * of legacy (Polymer.dom) API.
 * @type {function(Node):Node}
 */const iQ=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i1(t){return t.indexOf(".")>=0}function i0(t){let e=t.indexOf(".");return -1===e?t:t.slice(0,e)}function i2(t,e){//     base.startsWith(path + '.');
return 0===t.indexOf(e+".")}function i5(t,e){//     path.startsWith(base + '.');
return 0===e.indexOf(t+".")}function i4(t,e,i){return e+i.slice(t.length)}function i3(t){if(!Array.isArray(t))return t;{let e=[];for(let i=0;i<t.length;i++){let r=t[i].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}}function i6(t){return Array.isArray(t)?i3(t).split("."):t.toString().split(".")}function i8(t,e,i){let r=t,n=i6(e);// Loop over path parts[0..n-1] and dereference
for(let t=0;t<n.length;t++){if(!r)return;r=r[n[t]]}return i&&(i.path=n.join(".")),r}function i9(t,e,i){let r=t,n=i6(e),s=n[n.length-1];if(n.length>1){// Loop over path parts[0..n-2] and dereference
for(let t=0;t<n.length-1;t++)if(!(r=r[n[t]]))return;// Set value to object at end of path
r[s]=i}else r[e]=i;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const i7={},rt=/-[a-z]/g,re=/([A-Z])/g;function ri(t){return i7[t]||(i7[t]=0>t.indexOf("-")?t:t.replace(rt,t=>t[1].toUpperCase()))}function rr(t){return i7[t]||(i7[t]=t.replace(re,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * @fileoverview
 *
 * This module provides a number of strategies for enqueuing asynchronous
 * tasks. Each sub-module provides a standard `run(fn)` interface that returns a
 * handle, and a `cancel(handle)` interface for canceling async tasks before
 * they run.
 *
 * @summary Module that provides a number of strategies for enqueuing
 * asynchronous tasks.
 */// Microtask implemented using Mutation Observer
let rn=0,rs=0,ro=[],ra=0,rl=!1,rc=document.createTextNode("");new window.MutationObserver(function(){rl=!1;let t=ro.length;for(let e=0;e<t;e++){let t=ro[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}ro.splice(0,t),rs+=t}).observe(rc,{characterData:!0});/**
 * Async interface wrapper around `setTimeout`.
 *
 * @namespace
 * @summary Async interface wrapper around `setTimeout`.
 */const rd={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run:(t,e)=>window.setTimeout(t,e),/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(t){window.clearTimeout(t)}},rh={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run:t=>(rl||(rl=!0,rc.textContent=ra++),ro.push(t),rn++),/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(t){let e=t-rs;if(e>=0){if(!ro[e])throw Error("invalid async handle: "+t);ro[e]=null}}},rp=ij(/**
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */t=>/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */class extends t{/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     * @nocollapse
     */static createProperties(t){let e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}/**
     * Returns an attribute name that corresponds to the given property.
     * The attribute name is the lowercased property name. Override to
     * customize this mapping.
     * @param {string} property Property to convert
     * @return {string} Attribute name corresponding to the given property.
     *
     * @protected
     * @nocollapse
     */static attributeNameForProperty(t){return t.toLowerCase()}/**
     * Override point to provide a type to which to deserialize a value to
     * a given property.
     * @param {string} name Name of property
     *
     * @protected
     * @nocollapse
     */static typeForProperty(t){}/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}/**
     * Adds the given `property` to a map matching attribute names
     * to property names, using `attributeNameForProperty`. This map is
     * used when deserializing attribute values to properties.
     *
     * @param {string} property Name of the property
     * @override
     */_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));// This check is technically not correct; it's an optimization that
    // assumes that if a _property_ name is already in the map (note this is
    // an attr->property map), the property mapped directly to the attribute
    // and it has already been mapped.  This would fail if
    // `attributeNameForProperty` were overridden such that this was not the
    // case.
    let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}/**
     * Defines a property accessor for the given property.
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created
     * @return {void}
     * @override
     */_definePropertyAccessor(t,e){Object.defineProperty(this,t,{/* eslint-disable valid-jsdoc *//** @this {PropertiesChanged} */get(){// Inline for perf instead of using `_getProperty`
    return this.__data[t]},/** @this {PropertiesChanged} */set:e?function(){}:function(e){// Inline for perf instead of using `_setProperty`
    this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),/** @type {boolean} */this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,/** @type {number} */// NOTE: used to track re-entrant calls to `_flushProperties`
    this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}/**
     * Lifecycle callback called when properties are enabled via
     * `_enableProperties`.
     *
     * Users may override this function to implement behavior that is
     * dependent on the element having its property data initialized, e.g.
     * from defaults (initialized from `constructor`, `_initializeProperties`),
     * `attributeChangedCallback`, or values propagated from host e.g. via
     * bindings.  `super.ready()` must be called to ensure the data system
     * becomes enabled.
     *
     * @return {void}
     * @public
     * @override
     */ready(){this.__dataReady=!0,this._flushProperties()}/**
     * Initializes the local storage for property accessors.
     *
     * Provided as an override point for performing any setup work prior
     * to initializing the property accessor system.
     *
     * @return {void}
     * @protected
     * @override
     */_initializeProperties(){// Capture instance properties; these will be set into accessors
    // during first flush. Don't set them here, since we want
    // these to overwrite defaults/constructor assignments
    for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}/**
     * Called at ready time with bag of instance properties that overwrote
     * accessors when the element upgraded.
     *
     * The default implementation sets these properties back into the
     * setter at ready time.  This method is provided as an override
     * point for customizing or providing more efficient initialization.
     *
     * @param {Object} props Bag of property values that were overwritten
     *   when creating property accessors.
     * @return {void}
     * @protected
     * @override
     */_initializeInstanceProperties(t){Object.assign(this,t)}/**
     * Updates the local storage for a property (via `_setPendingProperty`)
     * and enqueues a `_proeprtiesChanged` callback.
     *
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @return {void}
     * @protected
     * @override
     */_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}/**
     * Returns the value for the given property.
     * @param {string} property Name of property
     * @return {*} Value for the given property
     * @protected
     * @override
     */_getProperty(t){return this.__data[t]}/* eslint-disable no-unused-vars *//**
     * Updates the local storage for a property, records the previous value,
     * and adds it to the set of "pending changes" that will be passed to the
     * `_propertiesChanged` callback.  This method does not enqueue the
     * `_propertiesChanged` callback.
     *
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @param {boolean=} ext Not used here; affordance for closure
     * @return {boolean} Returns true if the property changed
     * @protected
     * @override
     */_setPendingProperty(t,e,i){let r=this.__data[t],n=this._shouldPropertyChange(t,e,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),n}/* eslint-enable *//**
     * @param {string} property Name of the property
     * @return {boolean} Returns true if the property is pending.
     */_isPropertyPending(t){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(t))}/**
     * Marks the properties as invalid, and enqueues an async
     * `_propertiesChanged` callback.
     *
     * @return {void}
     * @protected
     * @override
     */_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,rh.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}/**
     * Call to enable property accessor processing. Before this method is
     * called accessor values will be set but side effects are
     * queued. When called, any pending side effects occur immediately.
     * For elements, generally `connectedCallback` is a normal spot to do so.
     * It is safe to call this method multiple times as it only turns on
     * property accessors once.
     *
     * @return {void}
     * @protected
     * @override
     */_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}/**
     * Calls the `_propertiesChanged` callback with the current set of
     * pending changes (and old values recorded when pending changes were
     * set), and resets the pending set of changes. Generally, this method
     * should not be called in user code.
     *
     * @return {void}
     * @protected
     * @override
     */_flushProperties(){this.__dataCounter++;let t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}/**
     * Called in `_flushProperties` to determine if `_propertiesChanged`
     * should be called. The default implementation returns true if
     * properties are pending. Override to customize when
     * `_propertiesChanged` is called.
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {?Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {?Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {boolean} true if changedProps is truthy
     * @override
     */_shouldPropertiesChange(t,e,i){return!!e}/**
     * Callback called when any properties with accessors created via
     * `_createPropertyAccessor` have been set.
     *
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {?Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {?Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {void}
     * @protected
     * @override
     */_propertiesChanged(t,e,i){}/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */_shouldPropertyChange(t,e,i){return i!==e&&// This ensures (old==NaN, value==NaN) always returns false
    (i==i||e==e)}/**
     * Implements native Custom Elements `attributeChangedCallback` to
     * set an attribute value to a property via `_attributeToProperty`.
     *
     * @param {string} name Name of attribute that changed
     * @param {?string} old Old attribute value
     * @param {?string} value New attribute value
     * @param {?string} namespace Attribute namespace.
     * @return {void}
     * @suppress {missingProperties} Super may or may not implement the callback
     * @override
     */attributeChangedCallback(t,e,i,r){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,r)}/**
     * Deserializes an attribute to its associated property.
     *
     * This method calls the `_deserializeValue` method to convert the string to
     * a typed value.
     *
     * @param {string} attribute Name of attribute to deserialize.
     * @param {?string} value of the attribute.
     * @param {*=} type type to deserialize to, defaults to the value
     * returned from `typeForProperty`
     * @return {void}
     * @override
     */_attributeToProperty(t,e,i){if(!this.__serializing){let r=this.__dataAttributes,n=r&&r[t]||t;this[n]=this._deserializeValue(e,i||this.constructor.typeForProperty(n))}}/**
     * Serializes a property to its associated attribute.
     *
     * @suppress {invalidCasts} Closure can't figure out `this` is an element.
     *
     * @param {string} property Property name to reflect.
     * @param {string=} attribute Attribute name to reflect to.
     * @param {*=} value Property value to refect.
     * @return {void}
     * @override
     */_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(/** @type {!HTMLElement} */this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}/**
     * Sets a typed value to an HTML attribute on a node.
     *
     * This method calls the `_serializeValue` method to convert the typed
     * value to a string.  If the `_serializeValue` method returns `undefined`,
     * the attribute will be removed (this is the default for boolean
     * type `false`).
     *
     * @param {Element} node Element to set attribute to.
     * @param {*} value Value to serialize.
     * @param {string} attribute Attribute name to serialize to.
     * @return {void}
     * @override
     */_valueToNodeAttribute(t,e,i){let r=this._serializeValue(e);("class"===i||"name"===i||"slot"===i)&&(t=iQ(t)),void 0===r?t.removeAttribute(i):t.setAttribute(i,// excludes `TrustedScript`.
    ""===r&&window.trustedTypes?/** @type {?} */window.trustedTypes.emptyScript:r)}/**
     * Converts a typed JavaScript value to a string.
     *
     * This method is called when setting JS property values to
     * HTML attributes.  Users may override this method to provide
     * serialization for custom types.
     *
     * @param {*} value Property value to serialize.
     * @return {string | undefined} String serialized from the provided
     * property  value.
     * @override
     */_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}/**
     * Converts a string to a typed JavaScript value.
     *
     * This method is called when reading HTML attribute values to
     * JS properties.  Users may override this method to provide
     * deserialization for custom `type`s. Types for `Boolean`, `String`,
     * and `Number` convert attributes to the expected types.
     *
     * @param {?string} value Value to deserialize.
     * @param {*=} type Type to deserialize the string to.
     * @return {*} Typed value deserialized from the provided string.
     * @override
     */_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),ru={};let rf=HTMLElement.prototype;for(;rf;){let t=Object.getOwnPropertyNames(rf);for(let e=0;e<t.length;e++)ru[t[e]]=!0;rf=Object.getPrototypeOf(rf)}const rm=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1,r_=ij(t=>{/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */let e=rp(t);return(/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertyAccessors}
   * @extends {base}
   * @unrestricted
   */class extends e{/**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     * @nocollapse
     */static createPropertiesForAttributes(){let t=/** @type {?} */this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(ri(t[e]))}/**
     * Returns an attribute name that corresponds to the given property.
     * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
     * @param {string} property Property to convert
     * @return {string} Attribute name corresponding to the given property.
     *
     * @protected
     * @nocollapse
     */static attributeNameForProperty(t){return rr(t)}/**
     * Overrides PropertiesChanged implementation to initialize values for
     * accessors created for values that already existed on the element
     * prototype.
     *
     * @return {void}
     * @protected
     * @override
     */_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}/**
     * Called at instance time with bag of properties that were overwritten
     * by accessors on the prototype when accessors were created.
     *
     * The default implementation sets these properties back into the
     * setter at instance time.  This method is provided as an override
     * point for customizing or providing more efficient initialization.
     *
     * @param {Object} props Bag of property values that were overwritten
     *   when creating property accessors.
     * @return {void}
     * @protected
     * @override
     */_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}/**
     * Ensures the element has the given attribute. If it does not,
     * assigns the given value to the attribute.
     *
     * @suppress {invalidCasts} Closure can't figure out `this` is infact an
     *     element
     *
     * @param {string} attribute Name of attribute to ensure is set.
     * @param {string} value of the attribute.
     * @return {void}
     * @override
     */_ensureAttribute(t,e){/** @type {!HTMLElement} */this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}/**
     * Overrides PropertiesChanged implemention to serialize objects as JSON.
     *
     * @param {*} value Property value to serialize.
     * @return {string | undefined} String serialized from the provided property
     *     value.
     * @override
     */_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(rm(t))/**
               * Here `value` isn't actually a string, but it should be
               * passed into APIs that normally expect a string, like
               * elem.setAttribute.
               */return /** @type {?} */t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}/**
     * Converts a string to a typed JavaScript value.
     *
     * This method is called by Polymer when reading HTML attribute values to
     * JS properties.  Users may override this method on Polymer element
     * prototypes to provide deserialization for custom `type`s.  Note,
     * the `type` argument is the value of the `type` field provided in the
     * `properties` configuration object for a given property, and is
     * by convention the constructor for the type to deserialize.
     *
     *
     * @param {?string} value Attribute value to deserialize.
     * @param {*=} type Type to deserialize the string to.
     * @return {*} Typed value deserialized from the provided string.
     * @override
     */_deserializeValue(t,e){/**
       * @type {*}
       */let i;switch(e){case Object:try{i=JSON.parse(/** @type {string} */t)}catch(e){// allow non-JSON literals like Strings and Numbers
i=t}break;case Array:try{i=JSON.parse(/** @type {string} */t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}/* eslint-enable no-fallthrough *//**
     * Overrides PropertiesChanged implementation to save existing prototype
     * property value so that it can be reset.
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created
     *
     * When calling on a prototype, any overwritten values are saved in
     * `__dataProto`, and it is up to the subclasser to decide how/when
     * to set those properties back into the accessor.  When calling on an
     * instance, the overwritten value is set via `_setPendingProperty`,
     * and the user should call `_invalidateProperties` or `_flushProperties`
     * for the values to take effect.
     * @protected
     * @return {void}
     * @override
     */_definePropertyAccessor(t,e){!/**
 * Used to save the value of a property that will be overridden with
 * an accessor. If the `model` is a prototype, the values will be saved
 * in `__dataProto`, and it's up to the user (or downstream mixin) to
 * decide how/when to set these values back into the accessors.
 * If `model` is already an instance (it has a `__data` property), then
 * the value will be set as a pending property, meaning the user should
 * call `_invalidateProperties` or `_flushProperties` to take effect
 *
 * @param {Object} model Prototype or instance
 * @param {string} property Name of property
 * @return {void}
 * @private
 */function(t,e){// Don't read/store value for any native properties since they could throw
if(!ru[e]){let i=t[e];void 0!==i&&(t.__data?// It is the user's responsibility to call _flushProperties
t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}/**
     * Returns true if this library created an accessor for the given property.
     *
     * @param {string} property Property name
     * @return {boolean} True if an accessor was created
     * @override
     */_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}/**
     * Returns true if the specified property has a pending change.
     *
     * @param {string} prop Property name
     * @return {boolean} True if property has a pending change
     * @protected
     * @override
     */_isPropertyPending(t){return!!(this.__dataPending&&t in this.__dataPending)}})}),ry={"dom-if":!0,"dom-repeat":!0};let rv=!1,rg=!1;/**
 * Copies an attribute from one element to another, converting the value to a
 * `TrustedScript` if it is named like a Polymer template event listener.
 *
 * @param {!Element} dest The element to set the attribute on
 * @param {!Element} src The element to read the attribute from
 * @param {string} name The name of the attribute
 */const rb=(()=>{/**
   * This `TrustedTypePolicy` is used to work around a Chrome bug in the Trusted
   * Types API where any attribute that starts with `on` may only be set to a
   * `TrustedScript` value, even if that attribute would not cause an event
   * listener to be created. (See https://crbug.com/993268 for details.)
   *
   * Polymer's template system allows `<dom-if>` and `<dom-repeat>` to be
   * written using the `<template is="...">` syntax, even if there is no UA
   * support for custom element extensions of built-in elements. In doing so, it
   * copies attributes from the original `<template>` to a newly created
   * `<dom-if>` or `<dom-repeat>`, which can trigger the bug mentioned above if
   * any of those attributes uses Polymer's `on-` syntax for event listeners.
   * (Note, the value of these `on-` listeners is not evaluated as script: it is
   * the name of a member function of a component that will be used as the event
   * listener.)
   *
   * @type {!TrustedTypePolicy|undefined}
   */let t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,i,r)=>{let n=i.getAttribute(r);if(t&&r.startsWith("on-")){e.setAttribute(r,t.createScript(n,r));return}e.setAttribute(r,n)}})(),rw=ij(/**
     * @template T
     * @param {function(new:T)} superClass Class to apply mixin to.
     * @return {function(new:T)} superClass with mixin applied.
     */t=>/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_TemplateStamp}
   */class extends t{/**
     * Scans a template to produce template metadata.
     *
     * Template-specific metadata are stored in the object returned, and node-
     * specific metadata are stored in objects in its flattened `nodeInfoList`
     * array.  Only nodes in the template that were parsed as nodes of
     * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
     * contains an `index` (`childNodes` index in parent) and optionally
     * `parent`, which points to node info of its parent (including its index).
     *
     * The template metadata object returned from this method has the following
     * structure (many fields optional):
     *
     * ```js
     *   {
     *     // Flattened list of node metadata (for nodes that generated metadata)
     *     nodeInfoList: [
     *       {
     *         // `id` attribute for any nodes with id's for generating `$` map
     *         id: {string},
     *         // `on-event="handler"` metadata
     *         events: [
     *           {
     *             name: {string},   // event name
     *             value: {string},  // handler method name
     *           }, ...
     *         ],
     *         // Notes when the template contained a `<slot>` for shady DOM
     *         // optimization purposes
     *         hasInsertionPoint: {boolean},
     *         // For nested `<template>`` nodes, nested template metadata
     *         templateInfo: {object}, // nested template metadata
     *         // Metadata to allow efficient retrieval of instanced node
     *         // corresponding to this metadata
     *         parentInfo: {number},   // reference to parent nodeInfo>
     *         parentIndex: {number},  // index in parent's `childNodes` collection
     *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
     *       },
     *       ...
     *     ],
     *     // When true, the template had the `strip-whitespace` attribute
     *     // or was nested in a template with that setting
     *     stripWhitespace: {boolean},
     *     // For nested templates, nested template content is moved into
     *     // a document fragment stored here; this is an optimization to
     *     // avoid the cost of nested template cloning
     *     content: {DocumentFragment}
     *   }
     * ```
     *
     * This method kicks off a recursive treewalk as follows:
     *
     * ```
     *    _parseTemplate <---------------------+
     *      _parseTemplateContent              |
     *        _parseTemplateNode  <------------|--+
     *          _parseTemplateNestedTemplate --+  |
     *          _parseTemplateChildNodes ---------+
     *          _parseTemplateNodeAttributes
     *            _parseTemplateNodeAttribute
     *
     * ```
     *
     * These methods may be overridden to add custom metadata about templates
     * to either `templateInfo` or `nodeInfo`.
     *
     * Note that this method may be destructive to the template, in that
     * e.g. event annotations may be removed after being noted in the
     * template metadata.
     *
     * @param {!HTMLTemplateElement} template Template to parse
     * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
     *   template, for parsing nested templates
     * @return {!TemplateInfo} Parsed template metadata
     * @nocollapse
     */static _parseTemplate(t,e){// since a template may be re-used, memo-ize metadata
    if(!t._templateInfo){// TODO(rictic): fix typing
    let /** ? */i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=!!e,i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),// TODO(rictic): fix typing
    this._parseTemplateContent(t,i,/** @type {?} */{parent:null})}return t._templateInfo}/**
     * See docs for _parseTemplateNode.
     *
     * @param {!HTMLTemplateElement} template .
     * @param {!TemplateInfo} templateInfo .
     * @param {!NodeInfo} nodeInfo .
     * @return {boolean} .
     * @nocollapse
     */static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}/**
     * Parses template node and adds template and node metadata based on
     * the current node, and its `childNodes` and `attributes`.
     *
     * This method may be overridden to add custom node or template specific
     * metadata based on this node.
     *
     * @param {Node} node Node to parse
     * @param {!TemplateInfo} templateInfo Template metadata for current template
     * @param {!NodeInfo} nodeInfo Node metadata for current template.
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @nocollapse
     */static _parseTemplateNode(t,e,i){let r=!1;// Checking `nodeInfo.noted` allows a child node of this node (who gets
    // access to `parentInfo`) to cause the parent to be noted, which
    // otherwise has no return path via `_parseTemplateChildNodes` (used by
    // some optimizations)
    return"template"!=/** @type {!HTMLTemplateElement} */t.localName||t.hasAttribute("preserve-content")?"slot"===t.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(t,e,i)||r,function(){if(!rv){rv=!0;let t=document.createElement("textarea");t.placeholder="a",rg=t.placeholder===t.textContent}return rg}()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null),t.firstChild&&this._parseTemplateChildNodes(t,e,i),t.hasAttributes&&t.hasAttributes()&&(r=this._parseTemplateNodeAttributes(t,e,i)||r),r||i.noted}/**
     * Parses template child nodes for the given root node.
     *
     * This method also wraps whitelisted legacy template extensions
     * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
     * wrappers, collapses text nodes, and strips whitespace from the template
     * if the `templateInfo.stripWhitespace` setting was provided.
     *
     * @param {Node} root Root node whose `childNodes` will be parsed
     * @param {!TemplateInfo} templateInfo Template metadata for current template
     * @param {!NodeInfo} nodeInfo Node metadata for current template.
     * @return {void}
     */static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let r=t.firstChild,n=0,s;r;r=s){if("template"==r.localName&&(r=function(t){let e=t.getAttribute("is");if(e&&ry[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){let{name:e}=i.attributes[0];rb(t,i,e),i.removeAttribute(e)}}return t}(r)),// collapse adjacent textNodes: fixes an IE issue that can cause
    // text nodes to be inexplicably split =(
    // note that root.normalize() should work but does not so we do this
    // manually.
    s=r.nextSibling,r.nodeType===Node.TEXT_NODE){let /** Node */i=s;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,s=i.nextSibling,t.removeChild(i),i=s;// optionally strip whitespace
    if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let o=/** @type {!NodeInfo} */{parentIndex:n,parentInfo:i};this._parseTemplateNode(r,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),r.parentNode&&n++}}/**
     * Parses template content for the given nested `<template>`.
     *
     * Nested template info is stored as `templateInfo` in the current node's
     * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
     * It will then be the responsibility of the host to set it back to the
     * template and for users stamping nested templates to use the
     * `_contentForTemplate` method to retrieve the content for this template
     * (an optimization to avoid the cost of cloning nested template content).
     *
     * @param {HTMLTemplateElement} node Node to parse (a <template>)
     * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
     *   that includes the template `node`
     * @param {!NodeInfo} nodeInfo Node metadata for current template.
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @nocollapse
     */static _parseTemplateNestedTemplate(t,e,i){let r=this._parseTemplate(/** @type {!HTMLTemplateElement} */t,e);return(r.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),i.templateInfo=r,!0}/**
     * Parses template node attributes and adds node metadata to `nodeInfo`
     * for nodes of interest.
     *
     * @param {Element} node Node to parse
     * @param {!TemplateInfo} templateInfo Template metadata for current
     *     template
     * @param {!NodeInfo} nodeInfo Node metadata for current template.
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @nocollapse
     */static _parseTemplateNodeAttributes(t,e,i){// Make copy of original attribute list, since the order may change
    // as attributes are added and removed
    let r=!1,n=Array.from(t.attributes);for(let s=n.length-1,o;o=n[s];s--)r=this._parseTemplateNodeAttribute(t,e,i,o.name,o.value)||r;return r}/**
     * Parses a single template node attribute and adds node metadata to
     * `nodeInfo` for attributes of interest.
     *
     * This implementation adds metadata for `on-event="handler"` attributes
     * and `id` attributes.
     *
     * @param {Element} node Node to parse
     * @param {!TemplateInfo} templateInfo Template metadata for current template
     * @param {!NodeInfo} nodeInfo Node metadata for current template.
     * @param {string} name Attribute name
     * @param {string} value Attribute value
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @nocollapse
     */static _parseTemplateNodeAttribute(t,e,i,r,n){return(// events (on-*)
    "on-"===r.slice(0,3)?(t.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0))}/**
     * Returns the `content` document fragment for a given template.
     *
     * For nested templates, Polymer performs an optimization to cache nested
     * template content to avoid the cost of cloning deeply nested templates.
     * This method retrieves the cached content for a given template.
     *
     * @param {HTMLTemplateElement} template Template to retrieve `content` for
     * @return {DocumentFragment} Content fragment
     * @nocollapse
     */static _contentForTemplate(t){let e=/** @type {HTMLTemplateElementWithInfo} */t._templateInfo;return e&&e.content||t.content}/**
     * Clones the provided template content and returns a document fragment
     * containing the cloned dom.
     *
     * The template is parsed (once and memoized) using this library's
     * template parsing features, and provides the following value-added
     * features:
     * * Adds declarative event listeners for `on-event="handler"` attributes
     * * Generates an "id map" for all nodes with id's under `$` on returned
     *   document fragment
     * * Passes template info including `content` back to templates as
     *   `_templateInfo` (a performance optimization to avoid deep template
     *   cloning)
     *
     * Note that the memoized template parsing process is destructive to the
     * template: attributes for bindings and declarative event listeners are
     * removed after being noted in notes, and any nested `<template>.content`
     * is removed and stored in notes as well.
     *
     * @param {!HTMLTemplateElement} template Template to stamp
     * @param {TemplateInfo=} templateInfo Optional template info associated
     *   with the template to be stamped; if omitted the template will be
     *   automatically parsed.
     * @return {!StampedTemplate} Cloned template content
     * @override
     */_stampTemplate(t,e){// Polyfill support: bootstrap the template if it has not already been
    t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=// Accepting the `templateInfo` via an argument allows for creating
    // instances of the `templateInfo` by the caller, useful for adding
    // instance-time information to the prototypical data
    (e=e||this.constructor._parseTemplate(t)).nodeInfoList,r=e.content||t.content,n=/** @type {DocumentFragment} */document.importNode(r,!0);// NOTE: ShadyDom optimization indicating there is an insertion point
    n.__noInsertionPoint=!e.hasInsertionPoint;let s=n.nodeList=Array(i.length);n.$={};for(let t=0,r=i.length,d;t<r&&(d=i[t]);t++){var o,a,l,c;let i=s[t]=function t(e,i){// recursively ascend tree until we hit root
    let r=i.parentInfo&&t(e,i.parentInfo);// unwind the stack, returning the indexed node at each level
    if(!r)return e;// (http://jsperf.com/childnodes-lookup)
    for(let t=r.firstChild,e=0;t;t=t.nextSibling)if(i.parentIndex===e++)return t}(n,d);o=n.$,(a=d).id&&(o[a.id]=i),l=d,c=e,l.templateInfo&&(// Give the node an instance of this templateInfo and set its parent
    i._templateInfo=l.templateInfo,i._parentTemplateInfo=c),// install event listeners (from event annotations)
    function(t,e,i){if(i.events&&i.events.length)for(let r=0,n=i.events,s;r<n.length&&(s=n[r]);r++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}(this,i,d)}return n}/**
     * Adds an event listener by method name for the event provided.
     *
     * This method generates a handler function that looks up the method
     * name at handling time.
     *
     * @param {!EventTarget} node Node to add listener on
     * @param {string} eventName Name of event
     * @param {string} methodName Name of method
     * @param {*=} context Context the method will be called on (defaults
     *   to `node`)
     * @return {Function} Generated handler function
     * @override
     */_addMethodEventListenerToNode(t,e,i,r){var n;let s=(// Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    n=(n=r=r||t)._methodHost||n,function(t){n[i]?n[i](t,t.detail):console.warn("listener method `"+i+"` not defined")});return this._addEventListenerToNode(t,e,s),s}/**
     * Override point for adding custom or simulated event handling.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}/**
     * Override point for adding custom or simulated event handling.
     *
     * @param {!EventTarget} node Node to remove event listener from
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to remove
     * @return {void}
     * @override
     */_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}});// Monotonically increasing unique ID used for de-duping effects triggered
// from multiple properties in the same turn
let rx=0;const rC=[],rS={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},rP="__computeInfo",rA=/[A-Z]/;/**
 * Ensures that the model has an own-property map of effects for the given type.
 * The model may be a prototype or an instance.
 *
 * Property effects are stored as arrays of effects by property in a map,
 * by named type on the model. e.g.
 *
 *   __computeEffects: {
 *     foo: [ ... ],
 *     bar: [ ... ]
 *   }
 *
 * If the model does not yet have an effect map for the type, one is created
 * and returned.  If it does, but it is not an own property (i.e. the
 * prototype had effects), the the map is deeply cloned and the copy is
 * set on the model and returned, ready for new effects to be added.
 *
 * @param {Object} model Prototype or instance
 * @param {string} type Property effect type
 * @param {boolean=} cloneArrays Clone any arrays assigned to the map when
 *   extending a superclass map onto this subclass
 * @return {Object} The own-property map of effects for the given type
 * @private
 */function rE(t,e,i){let r=t[e];if(r){if(!t.hasOwnProperty(e)&&(r=t[e]=Object.create(t[e]),i))for(let t in r){let e=r[t],i=r[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else r=t[e]={};return r}// -- effects ----------------------------------------------
/**
 * Runs all effects of a given type for the given set of property changes
 * on an instance.
 *
 * @param {!Polymer_PropertyEffects} inst The instance with effects to run
 * @param {?Object} effects Object map of property-to-Array of effects
 * @param {?Object} props Bag of current property changes
 * @param {?Object=} oldProps Bag of previous values for changed properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function rz(t,e,i,r,n,s){if(e){let o=!1,a=rx++;for(let l in i){let c=e[n?i0(l):l];if(c)for(let e=0,d=c.length,h;e<d&&(h=c[e]);e++)(!h.info||h.info.lastRun!==a)&&(!n||rO(l,h.trigger))&&(h.info&&(h.info.lastRun=a),h.fn(t,l,i,r,h.info,n,s),o=!0)}return o}return!1}/**
 * Determines whether a property/path that has changed matches the trigger
 * criteria for an effect.  A trigger is a descriptor with the following
 * structure, which matches the descriptors returned from `parseArg`.
 * e.g. for `foo.bar.*`:
 * ```
 * trigger: {
 *   name: 'a.b',
 *   structured: true,
 *   wildcard: true
 * }
 * ```
 * If no trigger is given, the path is deemed to match.
 *
 * @param {string} path Path or property that changed
 * @param {?DataTrigger} trigger Descriptor
 * @return {boolean} Whether the path matched the trigger
 */function rO(t,e){if(!e)return!0;{let i=/** @type {string} */e.name;return i==t||!!(e.structured&&i2(i,t))||!!(e.wildcard&&i5(i,t))}}/**
 * Implements the "observer" effect.
 *
 * Calls the method with `info.methodName` on the instance, passing the
 * new and old values.
 *
 * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
 * @param {string} property Name of property
 * @param {Object} props Bag of current property changes
 * @param {Object} oldProps Bag of previous values for changed properties
 * @param {?} info Effect metadata
 * @return {void}
 * @private
 */function rT(t,e,i,r,n){let s="string"==typeof n.method?t[n.method]:n.method,o=n.property;s?s.call(t,t.__data[o],r[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}/**
 * Dispatches {property}-changed events to indicate a property (or path)
 * changed.
 *
 * @param {!Polymer_PropertyEffects} inst The element from which to fire the
 *     event
 * @param {string} eventName The name of the event to send
 *     ('{property}-changed')
 * @param {*} value The value of the changed property
 * @param {string | null | undefined} path If a sub-path of this property
 *     changed, the path that changed (optional).
 * @return {void}
 * @private
 * @suppress {invalidCasts}
 */function rM(t,e,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),iQ(/** @type {!HTMLElement} */t).dispatchEvent(new CustomEvent(e,{detail:n}))}/**
 * Implements the "notify" effect.
 *
 * Dispatches a non-bubbling event named `info.eventName` on the instance
 * with a detail object containing the new `value`.
 *
 * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
 * @param {string} property Name of property
 * @param {Object} props Bag of current property changes
 * @param {Object} oldProps Bag of previous values for changed properties
 * @param {?} info Effect metadata
 * @param {boolean} hasPaths True with `props` contains one or more paths
 * @return {void}
 * @private
 */function rH(t,e,i,r,n,s){let o=(s?i0(e):e)!=e?e:null,a=o?i8(t,o):t.__data[e];o&&void 0===a&&(a=i[e]),rM(t,n.eventName,a,o)}/**
 * Implements the "reflect" effect.
 *
 * Sets the attribute named `info.attrName` to the given property value.
 *
 * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
 * @param {string} property Name of property
 * @param {Object} props Bag of current property changes
 * @param {Object} oldProps Bag of previous values for changed properties
 * @param {?} info Effect metadata
 * @return {void}
 * @private
 */function rI(t,e,i,r,n){let s=t.__data[e];iA&&(s=iA(s,n.attrName,"attribute",/** @type {Node} */t)),t._propertyToAttribute(e,n.attrName,s)}/**
 * Inserts a computed effect into a queue, given the specified order. Performs
 * the insert using a binary search.
 *
 * Used by `orderedComputed: true` computed property algorithm.
 *
 * @param {Object} info Property effects metadata
 * @param {Array<Object>} queue Ordered queue of effects
 * @param {Map<string,number>} order Map of computed property name->topological
 *   sort order
 */const rk=(t,e,i)=>{let r=0,n=e.length-1,s=-1;for(;r<=n;){let o=r+n>>1,a=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(a<0)r=o+1;else if(a>0)n=o-1;else{s=o;break}}s<0&&(s=n+1),e.splice(s,0,t)},rN=(t,e,i,r,n)=>{let s=n?i0(t):t,o=e[s];if(o)for(let e=0;e<o.length;e++){let s=o[e];s.info.lastRun!==rx&&(!n||rO(t,s.trigger))&&(s.info.lastRun=rx,rk(s.info,i,r))}};/**
 * Implements the "computed property" effect by running the method with the
 * values of the arguments specified in the `info` object and setting the
 * return value to the computed property specified.
 *
 * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
 * @param {string} property Name of property
 * @param {?Object} changedProps Bag of current property changes
 * @param {?Object} oldProps Bag of previous values for changed properties
 * @param {?} info Effect metadata
 * @return {boolean} True when the property being computed changed
 * @private
 */function r$(t,e,i,r,n){// Dirty check dependencies and run if any invalid
let s=rV(t,e,i,r,n);// Abort if method returns a no-op result
if(s===rC)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,s,!0):(t[o]=s,!1)}// -- bindings ----------------------------------------------
/**
 * Adds binding metadata to the current `nodeInfo`, and binding effects
 * for all part dependencies to `templateInfo`.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {NodeInfo} nodeInfo Node metadata for current template node
 * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
 * @param {string} target Target property name
 * @param {!Array<!BindingPart>} parts Array of binding part metadata
 * @param {string=} literal Literal text surrounding binding parts (specified
 *   only for 'property' bindings, since these must be initialized as part
 *   of boot-up)
 * @return {void}
 * @private
 */function rR(t,e,i,r,n,s,o){// Create binding metadata and add to nodeInfo
i.bindings=i.bindings||[];let /** Binding */a={kind:r,target:n,parts:s,literal:o,isCompound:1!==s.length};// Add listener info to binding metadata
if(i.bindings.push(a),a.target&&"attribute"!=a.kind&&"text"!=a.kind&&!a.isCompound&&"{"===a.parts[0].mode){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||rr(n)+"-changed",a.listenerNegate=e}// Add "propagate" property effects to templateInfo
let l=e.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let r=a.parts[i];r.compoundIndex=i,/**
 * Adds property effects to the given `templateInfo` for the given binding
 * part.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {!Binding} binding Binding metadata
 * @param {!BindingPart} part Binding part metadata
 * @param {number} index Index into `nodeInfoList` for this node
 * @return {void}
 */function(t,e,i,r,n){if(!r.literal){if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let s=r.dependencies,o={index:n,binding:i,part:r,evaluator:t};for(let i=0;i<s.length;i++){let r=s[i];"string"==typeof r&&((r=rJ(r)).wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:rL,info:o,trigger:r})}}}}(t,e,a,r,l)}}/**
 * Implements the "binding" (property/path binding) effect.
 *
 * Note that binding syntax is overridable via `_parseBindings` and
 * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
 * non-literal parts returned from `_parseBindings`.  However,
 * there is no support for _path_ bindings via custom binding parts,
 * as this is specific to Polymer's path binding syntax.
 *
 * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
 * @param {string} path Name of property
 * @param {Object} props Bag of current property changes
 * @param {Object} oldProps Bag of previous values for changed properties
 * @param {?} info Effect metadata
 * @param {boolean} hasPaths True with `props` contains one or more paths
 * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
 *   metadata
 * @return {void}
 * @private
 */function rL(t,e,i,r,n,s,o){let a=o[n.index],l=n.binding,c=n.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(s&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=i[e];e=i4(c.source,l.target,e),a._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(a)}else{let o=n.evaluator._evaluateBinding(t,c,e,i,r,s);// Propagate value to child
// Abort if value is a no-op result
o!==rC&&/**
 * Sets the value for an "binding" (binding) effect to a node,
 * either as a property or attribute.
 *
 * @param {!Polymer_PropertyEffects} inst The instance owning the binding effect
 * @param {Node} node Target node for binding
 * @param {!Binding} binding Binding metadata
 * @param {!BindingPart} part Binding part metadata
 * @param {*} value Value to set
 * @return {void}
 * @private
 */function(t,e,i,r,n){if(n=/**
 * Transforms an "binding" effect value based on compound & negation
 * effect metadata, as well as handling for special-case properties
 *
 * @param {Node} node Node the value will be set to
 * @param {*} value Value to set
 * @param {!Binding} binding Binding metadata
 * @param {!BindingPart} part Binding part metadata
 * @return {*} Transformed value to set
 * @private
 */function(t,e,i,r){if(i.isCompound){let n=t.__dataCompoundStorage[i.target];n[r.compoundIndex]=e,e=n.join("")}return"attribute"!==i.kind&&("textContent"===i.target||"value"===i.target&&("input"===t.localName||"textarea"===t.localName))&&(e=void 0==e?"":e),e}(e,n,i,r),iA&&(n=iA(n,i.target,i.kind,e)),"attribute"==i.kind)t._valueToNodeAttribute(/** @type {Element} */e,n,i.target);else{// Property binding
let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[rS.READ_ONLY]||!e[rS.READ_ONLY][r])&&e._setPendingProperty(r,n)&&t._enqueueClient(e):// equivalent to the "apply config" phase, which only set managed props
t._setUnmanagedPropertyToNode(e,r,n)}}(t,a,l,c,o)}}// -- for method-based effects (complexObserver & computed) --------------
/**
 * Adds property effects for each argument in the method signature (and
 * optionally, for the method name if `dynamic` is true) that calls the
 * provided effect function.
 *
 * @param {Element | Object} model Prototype or instance
 * @param {!MethodSignature} sig Method signature metadata
 * @param {string} type Type of property effect to add
 * @param {Function} effectFn Function to run when arguments change
 * @param {*=} methodInfo Effect-specific information to be included in
 *   method effect metadata
 * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
 *   method names should be included as a dependency to the effect. Note,
 *   defaults to true if the signature is static (sig.static is true).
 * @return {!Object} Effect metadata for this method effect
 * @private
 */function rD(t,e,i,r,n,s){s=e.static||s&&("object"!=typeof s||s[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:s};for(let n=0,s;n<e.args.length&&(s=e.args[n]);n++)s.literal||t._addPropertyEffect(s.rootProperty,i,{fn:r,info:o,trigger:s});return s&&t._addPropertyEffect(e.methodName,i,{fn:r,info:o}),o}/**
 * Calls a method with arguments marshaled from properties on the instance
 * based on the method signature contained in the effect metadata.
 *
 * Multi-property observers, computed properties, and inline computing
 * functions call this function to invoke the method, then use the return
 * value accordingly.
 *
 * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
 * @param {string} property Name of property
 * @param {Object} props Bag of current property changes
 * @param {Object} oldProps Bag of previous values for changed properties
 * @param {?} info Effect metadata
 * @return {*} Returns the return value from the method invocation
 * @private
 */function rV(t,e,i,r,n){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
let s=t._methodHost||t,o=s[n.methodName];if(o){let r=t._marshalArgs(n.args,e,i);return r===rC?rC:o.apply(s,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const rF=[],rj="(?:[a-zA-Z_$][\\w.:$\\-*]*)",rU="(?:("+rj+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",rB=RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+rj+"\\s*"+("(?:\\(\\s*(?:(?:"+rU+"(?:,\\s*")+rU)+")*)?)\\)\\s*)?)(?:]]|}})","g");/**
 * Create a string from binding parts of all the literal parts
 *
 * @param {!Array<BindingPart>} parts All parts to stringify
 * @return {string} String made from the literal parts
 */function rq(t){let e="";for(let i=0;i<t.length;i++)e+=t[i].literal||"";return e}/**
 * Parses an expression string for a method signature, and returns a metadata
 * describing the method in terms of `methodName`, `static` (whether all the
 * arguments are literals), and an array of `args`
 *
 * @param {string} expression The expression to parse
 * @return {?MethodSignature} The method metadata object if a method expression was
 *   found, otherwise `undefined`
 * @private
 */function rY(t){// tries to match valid javascript property names
let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:rF};return e[2].trim()?/**
 * Parses an array of arguments and sets the `args` property of the supplied
 * signature metadata object. Sets the `static` property to false if any
 * argument is a non-literal.
 *
 * @param {!Array<string>} argList Array of argument names
 * @param {!MethodSignature} sig Method signature metadata object
 * @return {!MethodSignature} The updated signature metadata object
 * @private
 */function(t,e){return e.args=t.map(function(t){let i=rJ(t);return i.literal||(e.static=!1),i},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t):t}return null}/**
 * Parses an individual argument, and returns an argument metadata object
 * with the following fields:
 *
 *   {
 *     value: 'prop',        // property/path or literal value
 *     literal: false,       // whether argument is a literal
 *     structured: false,    // whether the property is a path
 *     rootProperty: 'prop', // the root property of the path
 *     wildcard: false       // whether the argument was a wildcard '.*' path
 *   }
 *
 * @param {string} rawArg The string value of the argument
 * @return {!MethodArg} Argument metadata object
 * @private
 */function rJ(t){// clean up whitespace
let e=t.trim()// replace comma entity with comma
.replace(/&comma;/g,",")// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return!i.literal&&(i.rootProperty=i0(e),// detect structured path (has dots)
i.structured=i1(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function rG(t,e,i){let r=i8(t,i);return void 0===r&&(r=e[i]),r}// data api
/**
 * Sends array splice notifications (`.splices` and `.length`)
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {Array} splices Array of splice records
 * @return {void}
 * @private
 */function rX(t,e,i,r){let n={indexSplices:r};iI&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(i+".splices",n),t.notifyPath(i+".length",e.length),iI&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}/**
 * Creates a splice record and sends an array splice notification for
 * the described mutation
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {number} index Index at which the array mutation occurred
 * @param {number} addedCount Number of added items
 * @param {Array} removed Array of removed items
 * @return {void}
 * @private
 */function rW(t,e,i,r,n,s){rX(t,e,i,[{index:r,addedCount:n,removed:s,object:e,type:"splice"}])}const rK=ij(t=>{/**
   * @constructor
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */let e=rw(r_(t));return(/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertyEffects}
   * @extends {propertyEffectsBase}
   * @unrestricted
   */class extends e{constructor(){super(),/** @type {boolean} */// Used to identify users of this mixin, ala instanceof
this.__isPropertyEffectsClient=!0,/** @type {boolean} */this.__dataClientsReady,/** @type {Array} */this.__dataPendingClients,/** @type {Object} */this.__dataToNotify,/** @type {Object} */this.__dataLinkedPaths,/** @type {boolean} */this.__dataHasPaths,/** @type {Object} */this.__dataCompoundStorage,/** @type {Polymer_PropertyEffects} */this.__dataHost,/** @type {!Object} */this.__dataTemp,/** @type {boolean} */this.__dataClientsInitialized,/** @type {!Object} */this.__data,/** @type {!Object|null} */this.__dataPending,/** @type {!Object} */this.__dataOld,/** @type {Object} */this.__computeEffects,/** @type {Object} */this.__computeInfo,/** @type {Object} */this.__reflectEffects,/** @type {Object} */this.__notifyEffects,/** @type {Object} */this.__propagateEffects,/** @type {Object} */this.__observeEffects,/** @type {Object} */this.__readOnly,/** @type {!TemplateInfo} */this.__templateInfo,/** @type {boolean} */this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return rS}/**
     * @override
     * @return {void}
     */_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(rZ.length){let t=rZ[rZ.length-1];t._enqueueClient(this),// This ensures even non-bound elements have a host set, as
// long as they upgrade synchronously
this.__dataHost=t}}/**
     * Overrides `PropertyAccessors` implementation to provide a
     * more efficient implementation of initializing properties from
     * the prototype on the instance.
     *
     * @override
     * @param {Object} props Properties to initialize on the prototype
     * @return {void}
     */_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}/**
     * Overrides `PropertyAccessors` implementation to avoid setting
     * `_setProperty`'s `shouldNotify: true`.
     *
     * @override
     * @param {Object} props Properties to initialize on the instance
     * @return {void}
     */_initializeInstanceProperties(t){let e=this[rS.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}// Prototype setup ----------------------------------------
/**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==rS.READ_ONLY);// effects are accumulated into arrays per property based on type
let r=rE(this,e,!0)[t];r||(r=this[e][t]=[]),r.push(i)}/**
     * Removes the given property effect.
     *
     * @override
     * @param {string} property Property the effect was associated with
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object to remove
     * @return {void}
     */_removePropertyEffect(t,e,i){let r=rE(this,e,!0)[t],n=r.indexOf(i);n>=0&&r.splice(n,1)}/**
     * Returns whether the current prototype/instance has a property effect
     * of a certain type.
     *
     * @override
     * @param {string} property Property name
     * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasPropertyEffect(t,e){let i=this[e];return!!(i&&i[t])}/**
     * Returns whether the current prototype/instance has a "read only"
     * accessor for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,rS.READ_ONLY)}/**
     * Returns whether the current prototype/instance has a "notify"
     * property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasNotifyEffect(t){return this._hasPropertyEffect(t,rS.NOTIFY)}/**
     * Returns whether the current prototype/instance has a "reflect to
     * attribute" property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasReflectEffect(t){return this._hasPropertyEffect(t,rS.REFLECT)}/**
     * Returns whether the current prototype/instance has a "computed"
     * property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasComputedEffect(t){return this._hasPropertyEffect(t,rS.COMPUTE)}// Runtime ----------------------------------------
/**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @override
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */_setPendingPropertyOrPath(t,e,i,r){if(r||i0(Array.isArray(t)?t[0]:t)!==t){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!r){let i=i8(this,t);// Use property-accessor's simpler dirty check
if(!(t=i9(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(/**@type{string}*/t,e,i))return!/**
 * Computes path changes based on path links set up using the `linkPaths`
 * API.
 *
 * @param {!Polymer_PropertyEffects} inst The instance whose props are changing
 * @param {string} path Path that has changed
 * @param {*} value Value of changed path
 * @return {void}
 * @private
 */function(t,e,i){let r=t.__dataLinkedPaths;if(r){let n;for(let s in r){let o=r[s];i5(s,e)?(n=i4(s,o,e),t._setPendingPropertyOrPath(n,i,!0,!0)):i5(o,e)&&(n=i4(o,s,e),t._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,/**@type{string}*/t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(/**@type{string}*/t,e,i);this[t]=e}return!1}/**
     * Applies a value to a non-Polymer element/node's property.
     *
     * The implementation makes a best-effort at binding interop:
     * Some native element properties have side-effects when
     * re-setting the same value (e.g. setting `<input>.value` resets the
     * cursor position), so we do a dirty-check before setting the value.
     * However, for better interop with non-Polymer custom elements that
     * accept objects, we explicitly re-set object changes coming from the
     * Polymer world (which may include deep object changes without the
     * top reference changing), erring on the side of providing more
     * information.
     *
     * Users may override this method to provide alternate approaches.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */_setUnmanagedPropertyToNode(t,e,i){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
(i!==t[e]||"object"==typeof i)&&("className"===e&&(t=iQ(t)),t[e]=i)}/**
     * Overrides the `PropertiesChanged` implementation to introduce special
     * dirty check logic depending on the property & value being set:
     *
     * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
     *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
     * 2. Object set to simple property (e.g. 'prop': {...})
     *    Stored in `__dataTemp` and `__data`, dirty checked against
     *    `__dataTemp` by default implementation of `_shouldPropertyChange`
     * 3. Primitive value set to simple property (e.g. 'prop': 42)
     *    Stored in `__data`, dirty checked against `__data`
     *
     * The dirty-check is important to prevent cycles due to two-way
     * notification, but paths and objects are only dirty checked against any
     * previous value set during this turn via a "temporary cache" that is
     * cleared when the last `_propertiesChanged` exits. This is so:
     * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
     *    due to array mutations like shift/unshift/splice; this is fine
     *    since path changes are dirty-checked at user entry points like `set`
     * b. dirty-checking for objects only lasts one turn to allow the user
     *    to mutate the object in-place and re-set it with the same identity
     *    and have all sub-properties re-propagated in a subsequent turn.
     *
     * The temp cache is not necessarily sufficient to prevent invalid array
     * paths, since a splice can happen during the same turn (with pathological
     * user code); we could introduce a "fixup" for temporarily cached array
     * paths if needed: https://github.com/Polymer/polymer/issues/4227
     *
     * @override
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify True if property should fire notification
     *   event (applies only for `notify: true` properties)
     * @return {boolean} Returns true if the property changed
     */_setPendingProperty(t,e,i){let r=this.__dataHasPaths&&i1(t),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[t]=e,(r||this[rS.NOTIFY]&&this[rS.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}/**
     * Overrides base implementation to ensure all accessors set `shouldNotify`
     * to true, for per-property notification tracking.
     *
     * @override
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @return {void}
     */_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}/**
     * Overrides `PropertyAccessor`'s default async queuing of
     * `_propertiesChanged`: if `__dataReady` is false (has not yet been
     * manually flushed), the function no-ops; otherwise flushes
     * `_propertiesChanged` synchronously.
     *
     * @override
     * @return {void}
     */_invalidateProperties(){this.__dataReady&&this._flushProperties()}/**
     * Enqueues the given client on a list of pending clients, whose
     * pending property changes can later be flushed via a call to
     * `_flushClients`.
     *
     * @override
     * @param {Object} client PropertyEffects client to enqueue
     * @return {void}
     * @protected
     */_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}/**
     * Flushes any clients previously enqueued via `_enqueueClient`, causing
     * their `_flushProperties` method to run.
     *
     * @override
     * @return {void}
     * @protected
     */_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=!0)}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}/**
     * Perform any initial setup on client dom. Called before the first
     * `_flushProperties` call on client dom and before any element
     * observers are called.
     *
     * @override
     * @return {void}
     * @protected
     */_readyClients(){this.__enableOrFlushClients()}/**
     * Sets a bag of property changes to this instance, and
     * synchronously processes all effects of the properties as a batch.
     *
     * Property names must be simple properties, not paths.  Batched
     * path propagation is not supported.
     *
     * @override
     * @param {Object} props Bag of one or more key-value pairs whose key is
     *   a property and value is the new value to set for that property.
     * @param {boolean=} setReadOnly When true, any private values set in
     *   `props` will be set. By default, `setProperties` will not set
     *   `readOnly: true` root properties.
     * @return {void}
     * @public
     */setProperties(t,e){for(let i in t)!e&&this[rS.READ_ONLY]&&this[rS.READ_ONLY][i]||// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}/**
     * Overrides `PropertyAccessors` so that property accessor
     * side effects are not enabled until after client dom is fully ready.
     * Also calls `_flushClients` callback to ensure client dom is enabled
     * that was not enabled as a result of flushing properties.
     *
     * @override
     * @return {void}
     */ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}/**
     * Implements `PropertyAccessors`'s properties changed callback.
     *
     * Runs each class of effects for the batch of changed properties in
     * a specific order (compute, propagate, reflect, observe, notify).
     *
     * @override
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {?Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {?Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {void}
     */_propertiesChanged(t,e,i){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
let r,n=this.__dataHasPaths;this.__dataHasPaths=!1,// Compute properties
/**
 * Runs "computed" effects for a set of changed properties.
 *
 * This method differs from the generic `runEffects` method in that it
 * continues to run computed effects based on the output of each pass until
 * there are no more newly computed properties.  This ensures that all
 * properties that will be computed by the initial set of changes are
 * computed before other effects (binding propagation, observers, and notify)
 * run.
 *
 * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
 * @param {?Object} changedProps Bag of changed properties
 * @param {?Object} oldProps Bag of previous values for changed properties
 * @param {boolean} hasPaths True with `props` contains one or more paths
 * @return {void}
 * @private
 */function(t,e,i,r){let n=t[rS.COMPUTE];if(n){if(ik){let s;// Runs computed effects in efficient order by keeping a topologically-
// sorted queue of compute effects to run, and inserting subsequently
// invalidated effects as they are run
rx++;let o=/**
 * Generates and retrieves a memoized map of computed property name to its
 * topologically-sorted order.
 *
 * The map is generated by first assigning a "dependency count" to each property
 * (defined as number properties it depends on, including its method for
 * "dynamic functions"). Any properties that have no dependencies are added to
 * the `ready` queue, which are properties whose order can be added to the final
 * order map. Properties are popped off the `ready` queue one by one and a.) added as
 * the next property in the order map, and b.) each property that it is a
 * dependency for has its dep count decremented (and if that property's dep
 * count goes to zero, it is added to the `ready` queue), until all properties
 * have been visited and ordered.
 *
 * Used by `orderedComputed: true` computed property algorithm.
 *
 * @param {!Polymer_PropertyEffects} inst The instance to retrieve the computed
 *   effect order for.
 * @return {Map<string,number>} Map of computed property name->topological sort
 *   order
 */function(t){let e=t.constructor.__orderedComputedDeps;if(!e){let i;e=new Map;let r=t[rS.COMPUTE],{counts:n,ready:s,total:o}=/**
 * Generates a map of property-to-dependency count (`counts`, where "dependency
 * count" is the number of dependencies a given property has assuming it is a
 * computed property, otherwise 0).  It also returns a pre-populated list of
 * `ready` properties that have no dependencies and a `total` count, which is
 * used for error-checking the graph.
 *
 * Used by `orderedComputed: true` computed property algorithm.
 *
 * @param {!Polymer_PropertyEffects} inst The instance to generate dependency
 *   counts for.
 * @return {!Object} Object containing `counts` map (property-to-dependency
 *   count) and pre-populated `ready` array of properties that had zero
 *   dependencies.
 */function(t){let e=t[rP],i={},r=t[rS.COMPUTE],n=[],s=0;// Count dependencies for each computed property
for(let t in e){let r=e[t];// Be sure to add the method name itself in case of "dynamic functions"
s+=i[t]=r.args.filter(t=>!t.literal).length+(r.dynamicFn?1:0)}// Build list of ready properties (that aren't themselves computed)
for(let t in r)e[t]||n.push(t);return{counts:i,ready:n,total:s}}(t);for(;i=s.shift();){e.set(i,e.size);let t=r[i];t&&t.forEach(t=>{// Note `methodInfo` is where the computed property name is stored
let e=t.info.methodInfo;--o,0==--n[e]&&s.push(e)})}0!==o&&console.warn(`Computed graph for ${/** @type {HTMLElement} */t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}(t),a=[];for(let t in e)rN(t,n,a,o,r);for(;s=a.shift();)r$(t,"",e,i,s)&&rN(s.methodInfo,n,a,o,r);Object.assign(/** @type {!Object} */i,t.__dataOld),Object.assign(/** @type {!Object} */e,t.__dataPending),t.__dataPending=null}else{// Original Polymer 2.x computed effects order, which continues running
// effects until no further computed properties have been invalidated
let s=e;for(;rz(t,n,s,i,r);)Object.assign(/** @type {!Object} */i,t.__dataOld),Object.assign(/** @type {!Object} */e,t.__dataPending),s=t.__dataPending,t.__dataPending=null}}}(this,e,i,n),// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
r=this.__dataToNotify,this.__dataToNotify=null,// Propagate properties to clients
this._propagatePropertyChanges(e,i,n),// Flush clients
this._flushClients(),// Reflect properties
rz(this,this[rS.REFLECT],e,i,n),// Observe properties
rz(this,this[rS.OBSERVE],e,i,n),r&&/**
 * Runs "notify" effects for a set of changed properties.
 *
 * This method differs from the generic `runEffects` method in that it
 * will dispatch path notification events in the case that the property
 * changed was a path and the root property for that path didn't have a
 * "notify" effect.  This is to maintain 1.0 behavior that did not require
 * `notify: true` to ensure object sub-property notifications were
 * sent.
 *
 * @param {!Polymer_PropertyEffects} inst The instance with effects to run
 * @param {Object} notifyProps Bag of properties to notify
 * @param {Object} props Bag of current property changes
 * @param {Object} oldProps Bag of previous values for changed properties
 * @param {boolean} hasPaths True with `props` contains one or more paths
 * @return {void}
 * @private
 */function(t,e,i,r,n){// Notify
let s,o,a=t[rS.NOTIFY],l=rx++;// Try normal notify effects; if none, fall back to try path notification
for(let o in e)e[o]&&(a&&/**
 * Runs a list of effects for a given property.
 *
 * @param {!Polymer_PropertyEffects} inst The instance with effects to run
 * @param {!Object} effects Object map of property-to-Array of effects
 * @param {number} dedupeId Counter used for de-duping effects
 * @param {string} prop Name of changed property
 * @param {*} props Changed properties
 * @param {*} oldProps Old properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function(t,e,i,r,n,s,o,a){let l=!1,c=e[o?i0(r):r];if(c)for(let e=0,a=c.length,d;e<a&&(d=c[e]);e++)(!d.info||d.info.lastRun!==i)&&(!o||rO(r,d.trigger))&&(d.info&&(d.info.lastRun=i),d.fn(t,r,n,s,d.info,o,void 0),l=!0);return l}(t,a,l,o,i,r,n)?s=!0:n&&/**
 * Dispatches {property}-changed events with path information in the detail
 * object to indicate a sub-path of the property was changed.
 *
 * @param {!Polymer_PropertyEffects} inst The element from which to fire the
 *     event
 * @param {string} path The path that was changed
 * @param {Object} props Bag of current property changes
 * @return {boolean} Returns true if the path was notified
 * @private
 */function(t,e,i){let r=i0(e);return r!==e&&(rM(t,rr(r)+"-changed",i[e],e),!0)}(t,o,i)&&(s=!0));s&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,r,e,i,n),1==this.__dataCounter&&(this.__dataTemp={});// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
     * Called to propagate any property changes to stamped template nodes
     * managed by this element.
     *
     * @override
     * @param {Object} changedProps Bag of changed properties
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @return {void}
     * @protected
     */_propagatePropertyChanges(t,e,i){this[rS.PROPAGATE]&&rz(this,this[rS.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,r){let n=(e,r)=>{rz(this,t.propertyEffects,e,i,r,t.nodeList);for(let n=t.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,e,i,r)};t.runEffects?t.runEffects(n,e,r):n(e,r)}/**
     * Aliases one data path as another, such that path notifications from one
     * are routed to the other.
     *
     * @override
     * @param {string | !Array<string|number>} to Target path to link.
     * @param {string | !Array<string|number>} from Source path to link.
     * @return {void}
     * @public
     */linkPaths(t,e){t=i3(t),e=i3(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}/**
     * Removes a data path alias previously established with `_linkPaths`.
     *
     * Note, the path to unlink should be the target (`to`) used when
     * linking the paths.
     *
     * @override
     * @param {string | !Array<string|number>} path Target path to unlink.
     * @return {void}
     * @public
     */unlinkPaths(t){t=i3(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}/**
     * Notify that an array has changed.
     *
     * Example:
     *
     *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
     *     ...
     *     this.items.splice(1, 1, {name: 'Sam'});
     *     this.items.push({name: 'Bob'});
     *     this.notifySplices('items', [
     *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1,
     *         object: this.items, type: 'splice' },
     *       { index: 3, removed: [], addedCount: 1,
     *         object: this.items, type: 'splice'}
     *     ]);
     *
     * @param {string} path Path that should be notified.
     * @param {Array} splices Array of splice records indicating ordered
     *   changes that occurred to the array. Each record should have the
     *   following fields:
     *    * index: index at which the change occurred
     *    * removed: array of items that were removed from this index
     *    * addedCount: number of new items added at this index
     *    * object: a reference to the array in question
     *    * type: the string literal 'splice'
     *
     *   Note that splice records _must_ be normalized such that they are
     *   reported in index order (raw results from `Object.observe` are not
     *   ordered and must be normalized/merged before notifying).
     *
     * @override
     * @return {void}
     * @public
     */notifySplices(t,e){let i={path:""};rX(this,i8(this,t,i),i.path,e)}/**
     * Convenience method for reading a value from a path.
     *
     * Note, if any part in the path is undefined, this method returns
     * `undefined` (this method does not throw when dereferencing undefined
     * paths).
     *
     * @override
     * @param {(string|!Array<(string|number)>)} path Path to the value
     *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
     *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
     *   bracketed expressions are not supported; string-based path parts
     *   *must* be separated by dots.  Note that when dereferencing array
     *   indices, the index may be used as a dotted part directly
     *   (e.g. `users.12.name` or `['users', 12, 'name']`).
     * @param {Object=} root Root object from which the path is evaluated.
     * @return {*} Value at the path, or `undefined` if any part of the path
     *   is undefined.
     * @public
     */get(t,e){return i8(e||this,t)}/**
     * Convenience method for setting a value to a path and notifying any
     * elements bound to the same path.
     *
     * Note, if any part in the path except for the last is undefined,
     * this method does nothing (this method does not throw when
     * dereferencing undefined paths).
     *
     * @override
     * @param {(string|!Array<(string|number)>)} path Path to the value
     *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
     *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
     *   bracketed expressions are not supported; string-based path parts
     *   *must* be separated by dots.  Note that when dereferencing array
     *   indices, the index may be used as a dotted part directly
     *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
     * @param {*} value Value to set at the specified path.
     * @param {Object=} root Root object from which the path is evaluated.
     *   When specified, no notification will occur.
     * @return {void}
     * @public
     */set(t,e,i){i?i9(i,t,e):(!this[rS.READ_ONLY]||!this[rS.READ_ONLY][/** @type {string} */t])&&this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}/**
     * Adds items onto the end of the array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.push`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @param {...*} items Items to push onto array
     * @return {number} New length of the array.
     * @public
     */push(t,...e){let i={path:""},r=i8(this,t,i),n=r.length,s=r.push(...e);return e.length&&rW(this,r,i.path,n,e.length,[]),s}/**
     * Removes an item from the end of array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.pop`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @return {*} Item that was removed.
     * @public
     */pop(t){let e={path:""},i=i8(this,t,e),r=!!i.length,n=i.pop();return r&&rW(this,i,e.path,i.length,0,[n]),n}/**
     * Starting from the start index specified, removes 0 or more items
     * from the array and inserts 0 or more new items in their place.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.splice`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @param {number} start Index from which to start removing/inserting.
     * @param {number=} deleteCount Number of items to remove.
     * @param {...*} items Items to insert into array.
     * @return {!Array} Array of removed items.
     * @public
     */splice(t,e,i,...r){let n,s={path:""},o=i8(this,t,s);return e<0?e=o.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2==arguments.length?o.splice(e):o.splice(e,i,...r),(r.length||n.length)&&rW(this,o,s.path,e,r.length,n),n}/**
     * Removes an item from the beginning of array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.pop`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @return {*} Item that was removed.
     * @public
     */shift(t){let e={path:""},i=i8(this,t,e),r=!!i.length,n=i.shift();return r&&rW(this,i,e.path,0,0,[n]),n}/**
     * Adds items onto the beginning of the array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.push`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @param {...*} items Items to insert info array
     * @return {number} New length of the array.
     * @public
     */unshift(t,...e){let i={path:""},r=i8(this,t,i),n=r.unshift(...e);return e.length&&rW(this,r,i.path,0,e.length,[]),n}/**
     * Notify that a path has changed.
     *
     * Example:
     *
     *     this.item.user.name = 'Bob';
     *     this.notifyPath('item.user.name');
     *
     * @override
     * @param {string} path Path that should be notified.
     * @param {*=} value Value at the path (optional).
     * @return {void}
     * @public
     */notifyPath(t,e){/** @type {string} */let i;if(1==arguments.length){// Get value if not supplied
let r={path:""};e=i8(this,t,r),i=r.path}else i=Array.isArray(t)?i3(t):/** @type{string} */t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}/**
     * Equivalent to static `createReadOnlyProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @param {boolean=} protectedSetter Creates a custom protected setter
     *   when `true`.
     * @return {void}
     * @protected
     */_createReadOnlyProperty(t,e){this._addPropertyEffect(t,rS.READ_ONLY),e&&(this["_set"+(t[0].toUpperCase()+t.substring(1))]=/** @this {PropertyEffects} */function(e){this._setProperty(t,e)})}/**
     * Equivalent to static `createPropertyObserver` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @param {string|function(*,*)} method Function or name of observer method
     *     to call
     * @param {boolean=} dynamicFn Whether the method name should be included as
     *   a dependency to the effect.
     * @return {void}
     * @protected
     */_createPropertyObserver(t,e,i){let r={property:t,method:e,dynamicFn:!!i};this._addPropertyEffect(t,rS.OBSERVE,{fn:rT,info:r,trigger:{name:t}}),i&&this._addPropertyEffect(/** @type {string} */e,rS.OBSERVE,{fn:rT,info:r,trigger:{name:e}})}/**
     * Equivalent to static `createMethodObserver` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating
     *   whether method names should be included as a dependency to the effect.
     * @return {void}
     * @protected
     */_createMethodObserver(t,e){let i=rY(t);if(!i)throw Error("Malformed observer expression '"+t+"'");rD(this,i,rS.OBSERVE,rV,null,e)}/**
     * Equivalent to static `createNotifyingProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @return {void}
     * @protected
     */_createNotifyingProperty(t){this._addPropertyEffect(t,rS.NOTIFY,{fn:rH,info:{eventName:rr(t)+"-changed",property:t}})}/**
     * Equivalent to static `createReflectedProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @return {void}
     * @protected
     * @suppress {missingProperties} go/missingfnprops
     */_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,rS.REFLECT,{fn:rI,info:{attrName:e}})}/**
     * Equivalent to static `createComputedProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Name of computed property to set
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating
     *   whether method names should be included as a dependency to the effect.
     * @return {void}
     * @protected
     */_createComputedProperty(t,e,i){let r=rY(e);if(!r)throw Error("Malformed computed expression '"+e+"'");let n=rD(this,r,rS.COMPUTE,r$,t,i);// Effects are normally stored as map of dependency->effect, but for
// ordered computation, we also need tree of computedProp->dependencies
rE(this,rP)[t]=n}/**
     * Gather the argument values for a method specified in the provided array
     * of argument metadata.
     *
     * The `path` and `value` arguments are used to fill in wildcard descriptor
     * when the method is being called as a result of a path notification.
     *
     * @param {!Array<!MethodArg>} args Array of argument metadata
     * @param {string} path Property/path name that triggered the method effect
     * @param {Object} props Bag of current property changes
     * @return {!Array<*>} Array of argument values
     * @private
     */_marshalArgs(t,e,i){let r=this.__data,n=[];for(let s=0,o=t.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:c,literal:d}=t[s];if(!d){if(l){let t=i5(o,e),n=rG(r,i,t?e:o);c={path:t?e:o,value:n,base:t?i8(r,o):n}}else c=a?rG(r,i,o):r[o]}// When the `legacyUndefined` flag is enabled, pass a no-op value
// so that the observer, computed property, or compound binding is aborted.
if(iI&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return rC;n[s]=c}return n}// -- static class methods ------------
/**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @nocollapse
     */static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}/**
     * Creates a single-property observer for the given property.
     *
     * @param {string} property Property name
     * @param {string|function(*,*)} method Function or name of observer method to call
     * @param {boolean=} dynamicFn Whether the method name should be included as
     *   a dependency to the effect.
     * @return {void}
     * @protected
     * @nocollapse
     */static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}/**
     * Creates a multi-property "method observer" based on the provided
     * expression, which should be a string in the form of a normal JavaScript
     * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
     * should correspond to a property or path in the context of this
     * prototype (or instance), or may be a literal string or number.
     *
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating
     * @return {void}
     *   whether method names should be included as a dependency to the effect.
     * @protected
     * @nocollapse
     */static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}/**
     * Causes the setter for the given property to dispatch `<property>-changed`
     * events to notify of changes to the property.
     *
     * @param {string} property Property name
     * @return {void}
     * @protected
     * @nocollapse
     */static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}/**
     * Creates a read-only accessor for the given property.
     *
     * To set the property, use the protected `_setProperty` API.
     * To create a custom protected setter (e.g. `_setMyProp()` for
     * property `myProp`), pass `true` for `protectedSetter`.
     *
     * Note, if the property will have other property effects, this method
     * should be called first, before adding other effects.
     *
     * @param {string} property Property name
     * @param {boolean=} protectedSetter Creates a custom protected setter
     *   when `true`.
     * @return {void}
     * @protected
     * @nocollapse
     */static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}/**
     * Causes the setter for the given property to reflect the property value
     * to a (dash-cased) attribute of the same name.
     *
     * @param {string} property Property name
     * @return {void}
     * @protected
     * @nocollapse
     */static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}/**
     * Creates a computed property whose value is set to the result of the
     * method described by the given `expression` each time one or more
     * arguments to the method changes.  The expression should be a string
     * in the form of a normal JavaScript function signature:
     * `'methodName(arg1, [..., argn])'`
     *
     * @param {string} property Name of computed property to set
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
     *   method names should be included as a dependency to the effect.
     * @return {void}
     * @protected
     * @nocollapse
     */static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}/**
     * Parses the provided template to ensure binding effects are created
     * for them, and then ensures property accessors are created for any
     * dependent properties in the template.  Binding effects for bound
     * templates are stored in a linked list on the instance so that
     * templates can be efficiently stamped and unstamped.
     *
     * @param {!HTMLTemplateElement} template Template containing binding
     *   bindings
     * @return {!TemplateInfo} Template metadata object
     * @protected
     * @nocollapse
     */static bindTemplate(t){return this.prototype._bindTemplate(t)}// -- binding ----------------------------------------------
/*
     * Overview of binding flow:
     *
     * During finalization (`instanceBinding==false`, `wasPreBound==false`):
     *  `_bindTemplate(t, false)` called directly during finalization - parses
     *  the template (for the first time), and then assigns that _prototypical_
     *  template info to `__preboundTemplateInfo` _on the prototype_; note in
     *  this case `wasPreBound` is false; this is the first time we're binding
     *  it, thus we create accessors.
     *
     * During first stamping (`instanceBinding==true`, `wasPreBound==true`):
     *   `_stampTemplate` calls `_bindTemplate(t, true)`: the `templateInfo`
     *   returned matches the prebound one, and so this is `wasPreBound == true`
     *   state; thus we _skip_ creating accessors, but _do_ create an instance
     *   of the template info to serve as the start of our linked list (needs to
     *   be an instance, not the prototypical one, so that we can add `nodeList`
     *   to it to contain the `nodeInfo`-ordered list of instance nodes for
     *   bindings, and so we can chain runtime-stamped template infos off of
     *   it). At this point, the call to `_stampTemplate` calls
     *   `applyTemplateInfo` for each nested `<template>` found during parsing
     *   to hand prototypical `_templateInfo` to them; we also pass the _parent_
     *   `templateInfo` to the `<template>` so that we have the instance-time
     *   parent to link the `templateInfo` under in the case it was
     *   runtime-stamped.
     *
     * During subsequent runtime stamping (`instanceBinding==true`,
     *   `wasPreBound==false`): `_stampTemplate` calls `_bindTemplate(t, true)`
     *   - here `templateInfo` is guaranteed to _not_ match the prebound one,
     *   because it was either a different template altogether, or even if it
     *   was the same template, the step above created a instance of the info;
     *   in this case `wasPreBound == false`, so we _do_ create accessors, _and_
     *   link a instance into the linked list.
     *//**
     * Equivalent to static `bindTemplate` API but can be called on an instance
     * to add effects at runtime.  See that method for full API docs.
     *
     * This method may be called on the prototype (for prototypical template
     * binding, to avoid creating accessors every instance) once per prototype,
     * and will be called with `runtimeBinding: true` by `_stampTemplate` to
     * create and link an instance of the template metadata associated with a
     * particular stamping.
     *
     * @override
     * @param {!HTMLTemplateElement} template Template containing binding
     * bindings
     * @param {boolean=} instanceBinding When false (default), performs
     * "prototypical" binding of the template and overwrites any previously
     * bound template for the class. When true (as passed from
     * `_stampTemplate`), the template info is instanced and linked into the
     * list of bound templates.
     * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
     * this is an instance of the prototypical template info
     * @protected
     * @suppress {missingProperties} go/missingfnprops
     */_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),r=this.__preBoundTemplateInfo==i;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!r)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e){if(// For instance-time binding, create instance of template metadata
// and link into tree of templates if necessary
(i=/** @type {!TemplateInfo} */Object.create(i)).wasPreBound=r,this.__templateInfo){// Append this template info onto the end of its parent template's
// list, which will determine the tree structure via which property
// effects are run; if this template was not nested in another
// template, use the root template (the first stamped one) as the
// parent. Note, `parent` is the `templateInfo` instance for this
// template's parent (containing) template, which was set up in
// `applyTemplateInfo`.  While a given template's `parent` is set
// apriori, it is only added to the parent's child list at the point
// that it is being bound, since a template may or may not ever be
// stamped, and may be stamped more than once (in which case instances
// of the template info will be in the tree under its parent more than
// once).
let e=t._parentTemplateInfo||this.__templateInfo,r=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:e.firstChild=i}else this.__templateInfo=i}else this.__preBoundTemplateInfo=i;return i}/**
     * Adds a property effect to the given template metadata, which is run
     * at the "propagate" stage of `_propertiesChanged` when the template
     * has been bound to the element via `_bindTemplate`.
     *
     * The `effect` object should match the format in `_addPropertyEffect`.
     *
     * @param {Object} templateInfo Template metadata to add effect to
     * @param {string} prop Property that should trigger the effect
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @nocollapse
     */static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(i)}/**
     * Stamps the provided template and performs instance-time setup for
     * Polymer template features, including data bindings, declarative event
     * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
     * is returned containing the stamped DOM, ready for insertion into the
     * DOM.
     *
     * This method may be called more than once; however note that due to
     * `shadycss` polyfill limitations, only styles from templates prepared
     * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
     * to the shadow root and support CSS custom properties), and note that
     * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
     * any styles required by in runtime-stamped templates must be included
     * in the main element template.
     *
     * @param {!HTMLTemplateElement} template Template to stamp
     * @param {TemplateInfo=} templateInfo Optional bound template info associated
     *   with the template to be stamped; if omitted the template will be
     *   automatically bound.
     * @return {!StampedTemplate} Cloned template content
     * @override
     * @protected
     */_stampTemplate(t,e){e=e||/** @type {!TemplateInfo} */this._bindTemplate(t,!0),// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
rZ.push(this);let i=super._stampTemplate(t,e);// Capture child nodes to allow unstamping of non-prototypical templates
if(rZ.pop(),// Add template-instance-specific data to instanced templateInfo
e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,!// Setup compound storage, 2-way listeners, and dataHost for bindings
/**
 * Setup compound binding storage structures, notify listeners, and dataHost
 * references onto the bound nodeList.
 *
 * @param {!Polymer_PropertyEffects} inst Instance that bas been previously
 *     bound
 * @param {TemplateInfo} templateInfo Template metadata
 * @return {void}
 * @private
 */function(t,e){// Setup compound storage, dataHost, and notify listeners
let{nodeList:i,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let n=r[e],s=i[e],o=n.bindings;if(o)for(let e=0;e<o.length;e++){let i=o[e];/**
 * Initializes `__dataCompoundStorage` local storage on a bound node with
 * initial literal data for compound bindings, and sets the joined
 * literal parts to the bound property.
 *
 * When changes to compound parts occur, they are first set into the compound
 * storage array for that property, and then the array is joined to result in
 * the final value set to the property/attribute.
 *
 * @param {Node} node Bound node to initialize
 * @param {Binding} binding Binding metadata
 * @return {void}
 * @private
 */(function(t,e){if(e.isCompound){// Create compound storage map
let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,n=Array(r.length);for(let t=0;t<r.length;t++)n[t]=r[t].literal;let s=e.target;i[s]=n,e.literal&&"property"==e.kind&&("className"===s&&(t=iQ(t)),t[s]=e.literal)}})(s,i),/**
 * Adds a 2-way binding notification event listener to the node specified
 *
 * @param {Object} node Child element to add listener to
 * @param {!Polymer_PropertyEffects} inst Host element instance to handle
 *     notification event
 * @param {Binding} binding Binding metadata
 * @return {void}
 * @private
 */function(t,e,i){if(i.listenerEvent){let r=i.parts[0];t.addEventListener(i.listenerEvent,function(t){var n,s,o;let a,l,c;n=i.target,s=r.source,o=r.negate,(c=(l=/** @type {Object} */t.detail)&&l.path)?(s=i4(n,s,c),a=l&&l.value):a=t.currentTarget[n],a=o?!a:a,e[rS.READ_ONLY]&&e[rS.READ_ONLY][s]||!e._setPendingPropertyOrPath(s,a,!0,!!c)||l&&l.queueProperty||e._invalidateProperties()})}}(s,t,i)}// This ensures all bound elements have a host set, regardless
// of whether they upgrade synchronous to creation
s.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}/**
     * Removes and unbinds the nodes previously contained in the provided
     * DocumentFragment returned from `_stampTemplate`.
     *
     * @override
     * @param {!StampedTemplate} dom DocumentFragment previously returned
     *   from `_stampTemplate` associated with the nodes to be removed
     * @return {void}
     * @protected
     */_removeBoundDom(t){// Unlink template info; Note that while the child is unlinked from its
// parent list, a template's `parent` reference is never removed, since
// this is is determined by the tree structure and applied at
// `applyTemplateInfo` time.
let e=t.templateInfo,{previousSibling:i,nextSibling:r,parent:n}=e;i?i.nextSibling=r:n&&(n.firstChild=r),r?r.previousSibling=i:n&&(n.lastChild=i),e.nextSibling=e.previousSibling=null;// Remove stamped nodes
let s=e.childNodes;for(let t=0;t<s.length;t++){let e=s[t];iQ(iQ(e).parentNode).removeChild(e)}}/**
     * Overrides default `TemplateStamp` implementation to add support for
     * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
     * array is added to `nodeInfo` and populated with binding metadata
     * with information capturing the binding target, and a `parts` array
     * with one or more metadata objects capturing the source(s) of the
     * binding.
     *
     * @param {Node} node Node to parse
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {NodeInfo} nodeInfo Node metadata for current template node
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _parseTemplateNode(t,i,r){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
let n=e._parseTemplateNode.call(this,t,i,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
t.textContent=rq(e)||" ",rR(this,i,r,"text","textContent",e),n=!0)}return n}/**
     * Overrides default `TemplateStamp` implementation to add support for
     * parsing bindings from attributes.  A `bindings`
     * array is added to `nodeInfo` and populated with binding metadata
     * with information capturing the binding target, and a `parts` array
     * with one or more metadata objects capturing the source(s) of the
     * binding.
     *
     * @param {Element} node Node to parse
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {NodeInfo} nodeInfo Node metadata for current template node
     * @param {string} name Attribute name
     * @param {string} value Attribute value
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _parseTemplateNodeAttribute(t,i,r,n,s){let o=this._parseBindings(s,i);if(!o)//     Change back to just super.methodCall()
return e._parseTemplateNodeAttribute.call(this,t,i,r,n,s);{// Attribute or property
let e=n,s="property";rA.test(n)?s="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),s="attribute");// Initialize attribute bindings with any literal parts
let a=rq(o);return a&&"attribute"==s&&("class"==n&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(n)),t.setAttribute(n,a)),"attribute"==s&&"disable-upgrade$"==e&&t.setAttribute(n,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),// Remove annotation
t.removeAttribute(e),"property"===s&&(n=ri(n)),rR(this,i,r,s,n,o,a),!0}}/**
     * Overrides default `TemplateStamp` implementation to add support for
     * binding the properties that a nested template depends on to the template
     * as `_host_<property>`.
     *
     * @param {Node} node Node to parse
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {NodeInfo} nodeInfo Node metadata for current template node
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _parseTemplateNestedTemplate(t,i,r){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
let n=e._parseTemplateNestedTemplate.call(this,t,i,r),s=t.parentNode,o=r.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;// Remove nested template and redirect its host bindings & templateInfo
// onto the parent (dom-if/repeat element)'s nodeInfo
iN&&(a||l)&&(s.removeChild(t),// Use the parent's nodeInfo (for the dom-if/repeat) to record the
// templateInfo, and use that for any host property bindings below
(r=r.parentInfo).templateInfo=o,// Ensure the parent dom-if/repeat is noted since it now may have host
// bindings; it may not have been if it did not have its own bindings
r.noted=!0,n=!1);// Merge host props into outer template and add bindings
let c=o.hostProps;if(i$&&a)c&&(i.hostProps=Object.assign(i.hostProps||{},c),iN||(r.parentInfo.noted=!0));else for(let t in c){let e=[{mode:"{",source:t,dependencies:[t],hostProp:!0}];rR(this,i,r,"property","_host_"+t,e)}return n}/**
     * Called to parse text in a template (either attribute values or
     * textContent) into binding metadata.
     *
     * Any overrides of this method should return an array of binding part
     * metadata  representing one or more bindings found in the provided text
     * and any "literal" text in between.  Any non-literal parts will be passed
     * to `_evaluateBinding` when any dependencies change.  The only required
     * fields of each "part" in the returned array are as follows:
     *
     * - `dependencies` - Array containing trigger metadata for each property
     *   that should trigger the binding to update
     * - `literal` - String containing text if the part represents a literal;
     *   in this case no `dependencies` are needed
     *
     * Additional metadata for use by `_evaluateBinding` may be provided in
     * each part object as needed.
     *
     * The default implementation handles the following types of bindings
     * (one or more may be intermixed with literal strings):
     * - Property binding: `[[prop]]`
     * - Path binding: `[[object.prop]]`
     * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
     * - Two-way property or path bindings (supports negation):
     *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
     * - Inline computed method (supports negation):
     *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
     *
     * The default implementation uses a regular expression for best
     * performance. However, the regular expression uses a white-list of
     * allowed characters in a data-binding, which causes problems for
     * data-bindings that do use characters not in this white-list.
     *
     * Instead of updating the white-list with all allowed characters,
     * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
     * that uses a state machine instead. This state machine is able to handle
     * all characters. However, it is slightly less performant, therefore we
     * extracted it into a separate optional mixin.
     *
     * @param {string} text Text to parse from attribute or textContent
     * @param {Object} templateInfo Current template metadata
     * @return {Array<!BindingPart>} Array of binding part metadata
     * @protected
     * @nocollapse
     */static _parseBindings(t,e){let i,r=[],n=0;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
for(;null!==(i=rB.exec(t));){i.index>n&&r.push({literal:t.slice(n,i.index)});// Add binding part
let s=i[1][0],o=!!i[2],a=i[3].trim(),l=!1,c="",d=-1;"{"==s&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=rY(a),p=[];if(h){// Inline computed function
let{args:t,methodName:i}=h;for(let e=0;e<t.length;e++){let i=t[e];i.literal||p.push(i)}let r=e.dynamicFns;(r&&r[i]||h.static)&&(p.push(i),h.dynamicFn=!0)}else p.push(a);r.push({source:a,mode:s,negate:o,customEvent:l,signature:h,dependencies:p,event:c}),n=rB.lastIndex}// Add a final literal part
if(n&&n<t.length){let e=t.substring(n);e&&r.push({literal:e})}return r.length?r:null}/**
     * Called to evaluate a previously parsed binding part based on a set of
     * one or more changed dependencies.
     *
     * @param {!Polymer_PropertyEffects} inst Element that should be used as
     *     scope for binding dependencies
     * @param {BindingPart} part Binding part metadata
     * @param {string} path Property/path that triggered this effect
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @return {*} Value the binding part evaluated to
     * @protected
     * @nocollapse
     */static _evaluateBinding(t,e,i,r,n,s){let o;return o=e.signature?rV(t,i,r,n,e.signature):i!=e.source?i8(t,e.source):s&&i1(i)?i8(t,i):t.__data[i],e.negate&&(o=!o),o}})}),rZ=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * Total number of Polymer element instances created.
 * @type {number}
 */let rQ=0;const r1=[],r0=ij(t=>{/**
  * @constructor
  * @implements {Polymer_PropertiesChanged}
  * @private
  */let e=rp(t);/**
  * Returns the super class constructor for the given class, if it is an
  * instance of the PropertiesMixin.
  *
  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
  * @return {?PropertiesMixinConstructor} Super class constructor
  */function i(t){let e=Object.getPrototypeOf(t);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return e.prototype instanceof n?/** @type {!PropertiesMixinConstructor} */e:null}/**
  * Returns a memoized version of the `properties` object for the
  * given class. Properties not in object format are converted to at
  * least {type}.
  *
  * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
  * @return {Object} Memoized properties object
  */function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){let i=t.properties;i&&(e=/**
 * Creates a copy of `props` with each property normalized such that
 * upgraded it is an object with at least a type property { type: Type}.
 *
 * @param {!Object} props Properties to normalize
 * @return {!Object} Copy of input `props` with normalized properties that
 * are in the form {type: Type}
 * @private
 */function(t){let e={};for(let i in t){let r=t[i];e[i]="function"==typeof r?{type:r}:r}return e}(i))}t.__ownProperties=e}return t.__ownProperties}/**
  * @polymer
  * @mixinClass
  * @extends {base}
  * @implements {Polymer_PropertiesMixin}
  * @unrestricted
  */class n extends e{/**
    * Implements standard custom elements getter to observes the attributes
    * listed in `properties`.
    * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
    * @nocollapse
    */static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){var t;t=this.prototype,r1.push(t);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}/**
    * Finalizes an element definition, including ensuring any super classes
    * are also finalized. This includes ensuring property
    * accessors exist on the element prototype. This method calls
    * `_finalizeClass` to finalize each constructor in the prototype chain.
    * @return {void}
    * @nocollapse
    */static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){let t=i(/** @type {!PropertiesMixinConstructor} */this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}/**
    * Finalize an element class. This includes ensuring property
    * accessors exist on the element prototype. This method is called by
    * `finalize` and finalizes the class constructor.
    *
    * @protected
    * @nocollapse
    */static _finalizeClass(){let t=r(/** @type {!PropertiesMixinConstructor} */this);t&&/** @type {?} */this.createProperties(t)}/**
    * Returns a memoized version of all properties, including those inherited
    * from super classes. Properties not in object format are converted to
    * at least {type}.
    *
    * @return {Object} Object containing properties for this class
    * @protected
    * @nocollapse
    */static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){let t=i(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},t&&t._properties,r(/** @type {PropertiesMixinConstructor} */this))}return this.__properties}/**
    * Overrides `PropertiesChanged` method to return type specified in the
    * static `properties` object for the given property.
    * @param {string} name Name of property
    * @return {*} Type to which to deserialize attribute
    *
    * @protected
    * @nocollapse
    */static typeForProperty(t){let e=this._properties[t];return e&&e.type}/**
    * Overrides `PropertiesChanged` method and adds a call to
    * `finalize` which lazily configures the element's property accessors.
    * @override
    * @return {void}
    */_initializeProperties(){rQ++,this.constructor.finalize(),super._initializeProperties()}/**
    * Called when the element is added to a document.
    * Calls `_enableProperties` to turn on property system from
    * `PropertiesChanged`.
    * @suppress {missingProperties} Super may or may not implement the callback
    * @return {void}
    * @override
    */connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}/**
    * Called when the element is removed from a document
    * @suppress {missingProperties} Super may or may not implement the callback
    * @return {void}
    * @override
    */disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),r2=window.ShadyCSS&&window.ShadyCSS.cssBuild,r5=ij(t=>{/**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @extends {HTMLElement}
   * @private
   */let e=r0(rK(t));return(/**
   * @polymer
   * @mixinClass
   * @unrestricted
   * @implements {Polymer_ElementMixin}
   * @extends {polymerElementBase}
   */class extends e{/**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     * @nocollapse
     */static get polymerElementVersion(){return"3.5.1"}/**
     * Override of PropertiesMixin _finalizeClass to create observers and
     * find the template.
     * @return {void}
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _finalizeClass(){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
e._finalizeClass.call(this);let t=(this.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",this))||(this.__ownObservers=this.hasOwnProperty(JSCompiler_renameProperty("observers",this))?/** @type {PolymerElementConstructor} */this.observers:null),this.__ownObservers);t&&this.createObservers(t,this._properties),this._prepareTemplate()}/** @nocollapse */static _prepareTemplate(){// note: create "working" template that is finalized at instance time
let t=/** @type {PolymerElementConstructor} */this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):iT||(t=t.cloneNode(!0))),/** @override */this.prototype._template=t}/**
     * Override of PropertiesChanged createProperties to create accessors
     * and property effects for all of the properties.
     * @param {!Object} props .
     * @return {void}
     * @protected
     * @nocollapse
     */static createProperties(t){for(let r in t){var e,i;e=/** @type {?} */this.prototype,(i=t[r]).computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):e._createComputedProperty(r,i.computed,t)),i.readOnly&&!e._hasReadOnlyEffect(r)?e._createReadOnlyProperty(r,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(r)?e._createReflectedProperty(r):!1===i.reflectToAttribute&&e._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),i.notify&&!e._hasNotifyEffect(r)?e._createNotifyingProperty(r):!1===i.notify&&e._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),i.observer&&e._createPropertyObserver(r,i.observer,t[i.observer]),// always create the mapping from attribute back to property for deserialization.
e._addPropertyToAttributeMap(r)}}/**
     * Creates observers for the given `observers` array.
     * Leverages `PropertyEffects` to create observers.
     * @param {Object} observers Array of observer descriptors for
     *   this class
     * @param {Object} dynamicFns Object containing keys for any properties
     *   that are functions and should trigger the effect when the function
     *   reference is changed
     * @return {void}
     * @protected
     * @nocollapse
     */static createObservers(t,e){let i=this.prototype;for(let r=0;r<t.length;r++)i._createMethodObserver(t[r],e)}/**
     * Returns the template that will be stamped into this element's shadow root.
     *
     * If a `static get is()` getter is defined, the default implementation will
     * return the first `<template>` in a `dom-module` whose `id` matches this
     * element's `is` (note that a `_template` property on the class prototype
     * takes precedence over the `dom-module` template, to maintain legacy
     * element semantics; a subclass will subsequently fall back to its super
     * class template if neither a `prototype._template` or a `dom-module` for
     * the class's `is` was found).
     *
     * Users may override this getter to return an arbitrary template
     * (in which case the `is` getter is unnecessary). The template returned
     * must be an `HTMLTemplateElement`.
     *
     * Note that when subclassing, if the super class overrode the default
     * implementation and the subclass would like to provide an alternate
     * template via a `dom-module`, it should override this getter and
     * return `DomModule.import(this.is, 'template')`.
     *
     * If a subclass would like to modify the super class template, it should
     * clone it rather than modify it in place.  If the getter does expensive
     * work such as cloning/modifying a template, it should memoize the
     * template for maximum performance:
     *
     *   let memoizedTemplate;
     *   class MySubClass extends MySuperClass {
     *     static get template() {
     *       if (!memoizedTemplate) {
     *         memoizedTemplate = super.template.cloneNode(true);
     *         let subContent = document.createElement('div');
     *         subContent.textContent = 'This came from MySubClass';
     *         memoizedTemplate.content.appendChild(subContent);
     *       }
     *       return memoizedTemplate;
     *     }
     *   }
     *
     * @return {!HTMLTemplateElement|string} Template to be stamped
     * @nocollapse
     */static get template(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=// callback or info object), prefer that first. Note that `null` is
// used as a sentinel to indicate "no template" and can be used to
// override a super template, whereas `undefined` is used as a
// sentinel to mean "fall-back to default template lookup" via
// dom-module and/or super.template.
void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&/**
   * Look up template from dom-module for element
   *
   * @param {string} is Element name to look up
   * @return {?HTMLTemplateElement|undefined} Template found in dom module, or
   *   undefined if not found
   * @protected
   */function(t){let e=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(t&&(!iz||iO)&&(e=iJ.import(t,"template"),iz&&!e))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template}return this._template}/**
     * Set the template.
     *
     * @param {!HTMLTemplateElement|string} value Template to set.
     * @nocollapse
     */static set template(t){this._template=t}/**
     * Path matching the url from which the element was imported.
     *
     * This path is used to resolve url's in template style cssText.
     * The `importPath` property is also set on element instances and can be
     * used to create bindings relative to the import path.
     *
     * For elements defined in ES modules, users should implement
     * `static get importMeta() { return import.meta; }`, and the default
     * implementation of `importPath` will  return `import.meta.url`'s path.
     * For elements defined in HTML imports, this getter will return the path
     * to the document containing a `dom-module` element matching this
     * element's static `is` property.
     *
     * Note, this path should contain a trailing `/`.
     *
     * @return {string} The import path for this element class
     * @suppress {missingProperties}
     * @nocollapse
     */static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){let t=this.importMeta;if(t)this._importPath=ix(t.url);else{let t=iJ.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),/** @type {HTMLTemplateElement} */this._template,/** @type {string} */this._importPath,/** @type {string} */this.rootPath,/** @type {string} */this.importPath,/** @type {StampedTemplate | HTMLElement | ShadowRoot} */this.root,/** @type {!Object<string, !Element>} */this.$}/**
     * Overrides the default `PropertyAccessors` to ensure class
     * metaprogramming related to property accessors and effects has
     * completed (calls `finalize`).
     *
     * It also initializes any property defaults provided via `value` in
     * `properties` metadata.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts,missingProperties} go/missingfnprops
     */_initializeProperties(){this.constructor.finalize(),// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName),super._initializeProperties(),// set path defaults
this.rootPath=iP,this.importPath=this.constructor.importPath;// apply property defaults...
let t=/**
   * Returns a list of properties with default values.
   * This list is created as an optimization since it is a subset of
   * the list returned from `_properties`.
   * This list is used in `_initializeProperties` to set property defaults.
   *
   * @param {PolymerElementConstructor} constructor Element class
   * @return {PolymerElementProperties} Flattened properties for this class
   *   that have default values
   * @private
   */function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let r=e[i];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}/**
     * Determines if a property dfeault can be applied. For example, this
     * prevents a default from being applied when a property that has no
     * accessor is overridden by its host before upgrade (e.g. via a binding).
     * @override
     * @param {string} property Name of the property
     * @return {boolean} Returns true if the property default can be applied.
     */_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}/**
     * Gather style text for a style element in the template.
     *
     * @param {string} cssText Text containing styling to process
     * @param {string} baseURI Base URI to rebase CSS paths against
     * @return {string} The processed CSS text
     * @protected
     * @nocollapse
     */static _processStyleText(t,e){return iw(t,e)}/**
    * Configures an element `proto` to function with a given `template`.
    * The element name `is` and extends `ext` must be specified for ShadyCSS
    * style scoping.
    *
    * @param {string} is Tag name (or type extension name) for this element
    * @return {void}
    * @protected
    * @nocollapse
    */static _finalizeTemplate(t){/** @const {HTMLTemplateElement} */let e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;let i=this.importPath,r=i?ib(i):"";!// e.g. support `include="module-name"`, and ShadyCSS
/**
   * Process all style elements in the element template. Styles with the
   * `include` attribute are processed such that any styles in
   * the associated "style modules" are included in the element template.
   * @param {PolymerElementConstructor} klass Element class
   * @param {!HTMLTemplateElement} template Template to process
   * @param {string} is Name of element
   * @param {string} baseURI Base URI for element
   * @private
   */function(t,e,i,r){if(!r2){let n;let s=e.content.querySelectorAll("style"),o=iK(e),a=(n=iX(i))?iZ(n):[],l=e.content.firstElementChild;for(let i=0;i<a.length;i++){let n=a[i];n.textContent=t._processStyleText(n.textContent,r),e.content.insertBefore(n,l)}// keep track of the last "concrete" style in the template we have encountered
let c=0;// ensure all gathered styles are actually in this template.
for(let e=0;e<o.length;e++){let i=o[e],n=s[c];n!==i?(i=i.cloneNode(!0),n.parentNode.insertBefore(i,n)):c++,i.textContent=t._processStyleText(i.textContent,r)}}// Support for `adoptedStylesheets` relies on using native Shadow DOM
// and built CSS. Built CSS is required because runtime transformation of
// `@apply` is not supported. This is because ShadyCSS relies on being able
// to update a `style` element in the element template and this is
// removed when using `adoptedStyleSheets`.
// Note, it would be more efficient to allow style includes to become
// separate stylesheets; however, because of `@apply` these are
// potentially not shareable and sharing the ones that could be shared
// would require some coordination. To keep it simple, all the includes
// and styles are collapsed into a single shareable stylesheet.
if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),iD&&r2&&iS){// Remove styles in template and make a shareable stylesheet
let i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}(this,e,t,r),this.prototype._bindTemplate(e)}}/**
     * Provides a default implementation of the standard Custom Elements
     * `connectedCallback`.
     *
     * The default implementation enables the property effects system and
     * flushes any pending properties, and updates shimmed CSS properties
     * when using the ShadyCSS scoping/custom properties polyfill.
     *
     * @override
     * @suppress {missingProperties, invalidCasts} Super may or may not
     *     implement the callback
     * @return {void}
     */connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this),super.connectedCallback()}/**
     * Stamps the element template.
     *
     * @return {void}
     * @override
     */ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}/**
     * Implements `PropertyEffects`'s `_readyClients` call. Attaches
     * element dom by calling `_attachDom` with the dom stamped from the
     * element's template via `_stampTemplate`. Note that this allows
     * client dom to be attached to the element prior to any observers
     * running.
     *
     * @return {void}
     * @override
     */_readyClients(){this._template&&(this.root=this._attachDom(/** @type {StampedTemplate} */this.root)),// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
super._readyClients()}/**
     * Attaches an element's stamped dom to itself. By default,
     * this method creates a `shadowRoot` and adds the dom to it.
     * However, this method may be overridden to allow an element
     * to put its dom in another location.
     *
     * @override
     * @throws {Error}
     * @suppress {missingReturn}
     * @param {StampedTemplate} dom to attach to the element.
     * @return {ShadowRoot} node to which the dom has been attached.
     */_attachDom(t){let e=iQ(this);if(e.attachShadow)return t?(!e.shadowRoot&&(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),iH&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}/**
     * When using the ShadyCSS scoping and custom property shim, causes all
     * shimmed styles in this element (and its subtree) to be updated
     * based on current custom property values.
     *
     * The optional parameter overrides inline custom property styles with an
     * object of properties where the keys are CSS properties, and the values
     * are strings.
     *
     * Example: `this.updateStyles({'--color': 'blue'})`
     *
     * These properties are retained unless a value of `null` is set.
     *
     * Note: This function does not support updating CSS mixins.
     * You can not dynamically change the value of an `@apply`.
     *
     * @override
     * @param {Object=} properties Bag of custom property key/values to
     *   apply to this element.
     * @return {void}
     * @suppress {invalidCasts}
     */updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,t)}/**
     * Rewrites a given URL relative to a base URL. The base URL defaults to
     * the original location of the document containing the `dom-module` for
     * this element. This method will return the same URL before and after
     * bundling.
     *
     * Note that this function performs no resolution for URLs that start
     * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
     * URL resolution, use `window.URL`.
     *
     * @override
     * @param {string} url URL to resolve.
     * @param {string=} base Optional base URL to resolve against, defaults
     * to the element's `importPath`
     * @return {string} Rewritten URL relative to base
     */resolveUrl(t,e){return!e&&this.importPath&&(e=ib(this.importPath)),ib(t,e)}/**
     * Overrides `PropertyEffects` to add map of dynamic functions on
     * template info, for consumption by `PropertyEffects` template binding
     * code. This map determines which method templates should have accessors
     * created for them.
     *
     * @param {!HTMLTemplateElement} template Template
     * @param {!TemplateInfo} templateInfo Template metadata for current template
     * @param {!NodeInfo} nodeInfo Node metadata for current template.
     * @return {boolean} .
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _parseTemplateContent(t,i,r){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,r)}/**
     * Overrides `PropertyEffects` to warn on use of undeclared properties in
     * template.
     *
     * @param {Object} templateInfo Template metadata to add effect to
     * @param {string} prop Property that should trigger the effect
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _addTemplatePropertyEffect(t,i,r){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return!iM||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,r)}})});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * @fileoverview
 *
 * Module for adding listeners to a node for the following normalized
 * cross-platform "gesture" events:
 * - `down` - mouse or touch went down
 * - `up` - mouse or touch went up
 * - `tap` - mouse click or finger tap
 * - `track` - mouse drag or touch move
 *
 * @summary Module for adding cross-platform gesture event listeners.
 *//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r4{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}/**
   * Sets the scheduler; that is, a module with the Async interface,
   * a callback and optional arguments to be passed to the run function
   * from the async module.
   *
   * @param {!AsyncInterface} asyncModule Object with Async interface.
   * @param {function()} callback Callback to run.
   * @return {void}
   */setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,r3.delete(this),this._callback()})}/**
   * Cancels an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */cancel(){this.isActive()&&(this._cancelAsync(),// Canceling a debouncer removes its spot from the flush queue,
// so if a debouncer is manually canceled and re-debounced, it
// will reset its flush order (this is a very minor difference from 1.x)
// Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
r3.delete(this))}/**
   * Cancels a debouncer's async callback.
   *
   * @return {void}
   */_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(/** @type {number} */this._timer),this._timer=null)}/**
   * Flushes an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */flush(){this.isActive()&&(this.cancel(),this._callback())}/**
   * Returns true if the debouncer is active.
   *
   * @return {boolean} True if active.
   */isActive(){return null!=this._timer}/**
   * Creates a debouncer if no debouncer is passed as a parameter
   * or it cancels an active debouncer otherwise. The following
   * example shows how a debouncer can be called multiple times within a
   * microtask and "debounced" such that the provided callback function is
   * called once. Add this method to a custom element:
   *
   * ```js
   * import {microTask} from '@polymer/polymer/lib/utils/async.js';
   * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
   * // ...
   *
   * _debounceWork() {
   *   this._debounceJob = Debouncer.debounce(this._debounceJob,
   *       microTask, () => this._doWork());
   * }
   * ```
   *
   * If the `_debounceWork` method is called multiple times within the same
   * microtask, the `_doWork` function will be called only once at the next
   * microtask checkpoint.
   *
   * Note: In testing it is often convenient to avoid asynchrony. To accomplish
   * this with a debouncer, you can use `enqueueDebouncer` and
   * `flush`. For example, extend the above example by adding
   * `enqueueDebouncer(this._debounceJob)` at the end of the
   * `_debounceWork` method. Then in a test, call `flush` to ensure
   * the debouncer has completed.
   *
   * @param {Debouncer?} debouncer Debouncer object.
   * @param {!AsyncInterface} asyncModule Object with Async interface
   * @param {function()} callback Callback to run.
   * @return {!Debouncer} Returns a debouncer object.
   */static debounce(t,e,i){return t instanceof r4?// enqueued, to maintain 1.x flush order
t._cancelAsync():t=new r4,t.setConfig(e,i),t}}let r3=new Set;const r6=function(t){r3.add(t)},r8=function(){let t=!!r3.size;return(// If new debouncers are added while flushing, Set.forEach will ensure
// newly added ones are also flushed
r3.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t)};// detect native touch action support
let r9="string"==typeof document.head.style.touchAction,r7="__polymerGestures",nt="__polymerGesturesHandled",ne="__polymerGesturesTouchAction",ni=["mousedown","mousemove","mouseup","click"],nr=[0,1,4,2],nn=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();/**
 * @param {string} name Possible mouse event name
 * @return {boolean} true if mouse event, false if not
 */function ns(t){return ni.indexOf(t)>-1}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */// check for passive event listeners
let no=!1;/**
 * Generate settings for event listeners, dependant on `passiveTouchGestures`
 *
 * @param {string} eventName Event name to determine if `{passive}` option is
 *   needed
 * @return {{passive: boolean} | undefined} Options to use for addEventListener
 *   and removeEventListener
 */function na(t){if(!ns(t)&&"touchend"!==t)return r9&&no&&iE?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){no=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();// Check for touch-only devices
let nl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */const nc=[],nd={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},nh={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
let np=function(t){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
let e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(// skip synthetic mouse events
t[nt]={skip:!0},"click"===t.type)){let e=!1,i=nv(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE){if("label"===i[t].localName)nc.push(/** @type {!HTMLLabelElement} */i[t]);else if(nd[/** @type {!HTMLElement} */i[t].localName]){let r=/**
 * @param {HTMLElement} el Element that may be labelled.
 * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
 */function(t){let e=Array.prototype.slice.call(/** @type {HTMLInputElement} */t.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!e.length){e=[];try{let i=t.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(t.id){let r=i.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<r.length;t++)e.push(/** @type {!HTMLLabelElement} */r[t])}}catch(t){// Either:
// 1. el.getRootNode() failed.
// 2. el.id cannot be used in `querySelectorAll`
// In both cases, do nothing.
}}return e}(/** @type {!HTMLElement} */i[t]);// check if one of the clicked labels is labelling this element
for(let t=0;t<r.length;t++)e=e||nc.indexOf(r[t])>-1}}if(i[t]===nm.mouse.target)return}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(e)return;t.preventDefault(),t.stopPropagation()}};/**
 * @param {boolean=} setup True to add, false to remove.
 * @return {void}
 */function nu(t){let e=nl?["click"]:ni;for(let i=0,r;i<e.length;i++)r=e[i],t?(// reset clickLabels array
nc.length=0,document.addEventListener(r,np,!0)):document.removeEventListener(r,np,!0)}/**
 * @param {MouseEvent} ev event to test for left mouse button down
 * @return {boolean} has left mouse button down
 */function nf(t){let e=t.type;// exit early if the event is not a mouse event
if(!ns(e))return!1;// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if("mousemove"!==e)// ev.button is 0 in mousedown/mouseup/click for left button activation
return 0===(void 0===t.button?0:t.button);{// allow undefined for testing events
let e=void 0===t.buttons?1:t.buttons;// buttons is a bitmask, check that the left button bit is set (1)
return t instanceof window.MouseEvent&&!nn&&(e=nr[t.which]||0),!!(1&e)}}let nm={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function n_(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function ny(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener("touchend",function(t){nm.mouse.mouseIgnoreJob||nu(!0),nm.mouse.target=nv(t)[0],nm.mouse.mouseIgnoreJob=r4.debounce(nm.mouse.mouseIgnoreJob,rd.after(2500),function(){nu(),nm.mouse.target=null,nm.mouse.mouseIgnoreJob=null})},!!no&&{passive:!0});/**
 * Returns the composedPath for the given event.
 * @param {Event} event to process
 * @return {!Array<!EventTarget>} Path of the event
 */const nv=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],ng={},nb=[];/**
 * a cheaper check than ev.composedPath()[0];
 *
 * @private
 * @param {Event|Touch} ev Event.
 * @return {EventTarget} Returns the event target.
 */function nw(t){let e=nv(/** @type {?Event} */t);// It shouldn't be, but sometimes path is empty (window on Safari).
return e.length>0?e[0]:t.target}/**
 * @private
 * @param {Event} ev Event.
 * @return {void}
 */function nx(t){let e;let i=t.type,r=t.currentTarget[r7];if(!r)return;let n=r[i];if(n){if(!t[nt]&&(t[nt]={},"touch"===i.slice(0,5))){let e=t.changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(nm.touch.id=e.identifier),nm.touch.id!==e.identifier)return;r9||"touchstart"!==i&&"touchmove"!==i||/**
 * @private
 * @param {TouchEvent} ev Event.
 * @return {void}
 */function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)nm.touch.x=e.clientX,nm.touch.y=e.clientY,nm.touch.scrollDecided=!1;else if("touchmove"===i){if(nm.touch.scrollDecided)return;nm.touch.scrollDecided=!0;let i=function(t){let e="auto",i=nv(t);for(let t=0,r;t<i.length;t++)if((r=i[t])[ne]){e=r[ne];break}return e}(t),r=!1,n=Math.abs(nm.touch.x-e.clientX),s=Math.abs(nm.touch.y-e.clientY);t.cancelable&&("none"===i?r=!0:"pan-x"===i?r=s>n:"pan-y"===i&&(r=n>s)),r?t.preventDefault():nA("track")}}(t)}// used to ignore synthetic mouse events
if(!(e=t[nt]).skip){// reset recognizer state
for(let i=0,r;i<nb.length;i++)n[(r=nb[i]).name]&&!e[r.name]&&r.flow&&r.flow.start.indexOf(t.type)>-1&&r.reset&&r.reset();// enforce gesture recognizer order
for(let r=0,s;r<nb.length;r++)n[(s=nb[r]).name]&&!e[s.name]&&(e[s.name]=!0,s[i](t))}}}function nC(t){nb.push(t);for(let e=0;e<t.emits.length;e++)ng[t.emits[e]]=t}function nS(t,e){r9&&t instanceof HTMLElement&&rh.run(()=>{t.style.touchAction=e}),t[ne]=e}/**
 * Dispatches an event on the `target` element of `type` with the given
 * `detail`.
 * @private
 * @param {!EventTarget} target The element on which to fire an event.
 * @param {string} type The type of event to fire.
 * @param {!Object=} detail The detail object to populate on the event.
 * @return {void}
 */function nP(t,e,i){let r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});// forward `preventDefault` in a clean way
if(r.detail=i,iQ(/** @type {!Node} */t).dispatchEvent(r),r.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function nA(t){let e=/**
 * @private
 * @param {string} evName Event name.
 * @return {Object} Returns the gesture for the given event name.
 */function(t){for(let e=0,i;e<nb.length;e++){i=nb[e];for(let e=0;e<i.emits.length;e++)if(i.emits[e]===t)return i}return null}(t);e.info&&(e.info.prevent=!0)}/**
 * @param {string} type
 * @param {EventTarget} target
 * @param {Event|Touch} event
 * @param {Event=} preventer
 * @return {void}
 */function nE(t,e,i,r){e&&nP(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(t){return nA(t)}})}/**
 * @param {!GestureInfo} info
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */function nz(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let r=Math.abs(t.x-e),n=Math.abs(t.y-i);return r>=5||n>=5}/**
 * @param {!GestureInfo} info
 * @param {?EventTarget} target
 * @param {Touch} touch
 * @return {void}
 */function nO(t,e,i){if(!e)return;let r=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],s=n.x-t.x,o=n.y-t.y,a,l=0;r&&(a=n.x-r.x,l=n.y-r.y),nP(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),r=i;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
for(;// on Safari, elementFromPoint may return the shadowRoot host
r&&r.shadowRoot&&!window.ShadyDOM&&r!==(r=r.shadowRoot.elementFromPoint(t,e));)r&&(i=r);return i}(i.clientX,i.clientY)}})}/**
 * @param {!GestureInfo} info
 * @param {Event | Touch} e
 * @param {Event=} preventer
 * @return {void}
 */function nT(t,e,i){let r=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),s=nw(i||e);!(!s||nh[/** @type {!HTMLElement} */s.localName]&&s.hasAttribute("disabled"))&&(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(t){if("click"===t.type){// ev.detail is 0 for HTMLElement.click in most browsers
if(0===t.detail)return!0;// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
let e=nw(t);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!e.nodeType||/** @type {Element} */e.nodeType!==Node.ELEMENT_NODE)return!0;let i=/** @type {Element} */e.getBoundingClientRect(),r=t.pageX,n=t.pageY;// ev is a synthetic click if the position is outside the bounding box of the target
return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(e))&&!t.prevent&&nP(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i})}/* eslint-disable valid-jsdoc */nC({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){ny(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(t){if(!nf(t))return;let e=nw(t),i=this;n_(this.info,function(t){nf(t)||(nE("up",e,t),ny(i.info))},function(t){nf(t)&&nE("up",e,t),ny(i.info)}),nE("down",e,t)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(t){nE("down",nw(t),t.changedTouches[0],t)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(t){nE("up",nw(t),t.changedTouches[0],t)}}),nC({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],/** @this {GestureInfo} */addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ny(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(t){if(!nf(t))return;let e=nw(t),i=this,r=function(t){let r=t.clientX,n=t.clientY;nz(i.info,r,n)&&(// first move is 'start', subsequent moves are 'move', mouseup is 'end'
i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&nA("tap"),i.info.addMove({x:r,y:n}),nf(t)||(// always fire "end"
i.info.state="end",ny(i.info)),e&&nO(i.info,e,t),i.info.started=!0)};// add temporary document listeners as mouse retargets
n_(this.info,r,function(t){i.info.started&&r(t),// remove the temporary listeners
ny(i.info)}),this.info.x=t.clientX,this.info.y=t.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchmove:function(t){let e=nw(t),i=t.changedTouches[0],r=i.clientX,n=i.clientY;nz(this.info,r,n)&&("start"===this.info.state&&nA("tap"),this.info.addMove({x:r,y:n}),nO(this.info,e,i),this.info.state="track",this.info.started=!0)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(t){let e=nw(t),i=t.changedTouches[0];// only trackend if track was started and not aborted
this.info.started&&(// reset started state on up
this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),nO(this.info,e,i))}}),nC({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(t){nf(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */click:function(t){nf(t)&&nT(this.info,t)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(t){nT(this.info,t.changedTouches[0],t)}});const nM=ij(t=>/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_GestureEventListeners}
   */class extends t{/**
     * Add the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */_addEventListenerToNode(t,e,i){(!ng[e]||(/**
 * automate the event listeners for the native events
 *
 * @private
 * @param {!EventTarget} node Node on which to add the event.
 * @param {string} evType Event type to add.
 * @param {function(!Event)} handler Event handler function.
 * @return {void}
 */function(t,e,i){let r=ng[e],n=r.deps,s=r.name,o=t[r7];o||(t[r7]=o={});for(let e=0,i,r;e<n.length;e++)i=n[e],nl&&ns(i)&&"click"!==i||((r=o[i])||(o[i]=r={_count:0}),0===r._count&&t.addEventListener(i,nx,na(i)),r[s]=(r[s]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,i),r.touchAction&&nS(t,r.touchAction)}(t,e,i),0))&&super._addEventListenerToNode(t,e,i)}/**
     * Remove the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to remove event listener from
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to remove
     * @return {void}
     * @override
     */_removeEventListenerFromNode(t,e,i){(!ng[e]||(/**
 * automate event listener removal for native events
 *
 * @private
 * @param {!EventTarget} node Node on which to remove the event.
 * @param {string} evType Event type to remove.
 * @param {function(!Event): void} handler Event handler function.
 * @return {void}
 */function(t,e,i){let r=ng[e],n=r.deps,s=r.name,o=t[r7];if(o)for(let e=0,i,r;e<n.length;e++)(r=o[i=n[e]])&&r[s]&&(r[s]=(r[s]||1)-1,r._count=(r._count||1)-1,0===r._count&&t.removeEventListener(i,nx,na(i)));t.removeEventListener(e,i)}(t,e,i),0))&&super._removeEventListenerFromNode(t,e,i)}}),nH=/:host\(:dir\((ltr|rtl)\)\)/g,nI=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,nk=/:dir\((?:ltr|rtl)\)/,nN=!!(window.ShadyDOM&&window.ShadyDOM.inUse),n$=[];/** @type {?MutationObserver} */let nR=null,nL="";function nD(){nL=document.documentElement.getAttribute("dir")}/**
 * @param {!Polymer_DirMixin} instance Instance to set RTL status on
 */function nV(t){t.__autoDirOptOut||/** @type {!HTMLElement} */t.setAttribute("dir",nL)}function nF(){nD(),nL=document.documentElement.getAttribute("dir");for(let t=0;t<n$.length;t++)nV(n$[t])}const nj=ij(t=>{nN||nR||(nD(),(nR=new MutationObserver(nF)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));/**
   * @constructor
   * @implements {Polymer_PropertyAccessors}
   * @private
   */let e=r_(t);/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DirMixin}
   */class i extends e{/**
     * @param {string} cssText .
     * @param {string} baseURI .
     * @return {string} .
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _processStyleText(t,i){return(// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
t=e._processStyleText.call(this,t,i),!nN&&nk.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t)}/**
     * Replace `:dir` in the given CSS text
     *
     * @param {string} text CSS text to replace DIR
     * @return {string} Modified CSS
     * @nocollapse
     */static _replaceDirInCssText(t){let e=t;return(e=e.replace(nH,':host([dir="$1"])')).replace(nI,':host([dir="$2"]) $1')}constructor(){super(),/** @type {boolean} */this.__autoDirOptOut=!1}/**
     * @override
     * @suppress {invalidCasts} Closure doesn't understand that `this` is an
     *     HTMLElement
     * @return {void}
     */ready(){super.ready(),this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute("dir")}/**
     * @override
     * @suppress {missingProperties} If it exists on elementBase, it can be
     *   super'd
     * @return {void}
     */connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(nR&&nR.takeRecords().length&&nF(),n$.push(this),nV(this))}/**
     * @override
     * @suppress {missingProperties} If it exists on elementBase, it can be
     *   super'd
     * @return {void}
     */disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){let t=n$.indexOf(this);t>-1&&n$.splice(t,1)}}}return i.__activateDir=!1,i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function nU(){document.body.removeAttribute("unresolved")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function nB(t,e,i){return{index:t,removed:e,addedCount:i}}function nq(t,e){return(/**
 * Splice Projection functions:
 *
 * A splice map is a representation of how a previous array of items
 * was transformed into a new array of items. Conceptually it is a list of
 * tuples of
 *
 *   <index, removed, addedCount>
 *
 * which are kept in ascending index order of. The tuple represents that at
 * the |index|, |removed| sequence of items were removed, and counting forward
 * from |index|, |addedCount| items were added.
 *//**
 * Lacking individual splice mutation information, the minimal set of
 * splices can be synthesized given the previous state and final state of an
 * array. The basic approach is to calculate the edit distance matrix and
 * choose the shortest path through it.
 *
 * Complexity: O(l * p)
 *   l: The length of the current array
 *   p: The length of the old array
 *
 * @param {!Array} current The current "changed" array for which to
 * calculate splices.
 * @param {number} currentStart Starting index in the `current` array for
 * which splices are calculated.
 * @param {number} currentEnd Ending index in the `current` array for
 * which splices are calculated.
 * @param {!Array} old The original "unchanged" array to compare `current`
 * against to determine splices.
 * @param {number} oldStart Starting index in the `old` array for
 * which splices are calculated.
 * @param {number} oldEnd Ending index in the `old` array for
 * which splices are calculated.
 * @return {!Array} Returns an array of splice record objects. Each of these
 * contains: `index` the location where the splice occurred; `removed`
 * the array of removed items from this location; `addedCount` the number
 * of items added at this location.
 */function(t,e,i,r,n,s){let o,a=0,l=0,c=Math.min(i-e,s-n);if(0==e&&0==n&&(a=function(t,e,i){for(let n=0;n<i;n++){var r;if(t[n]!==e[n])return n}return i}(t,r,c)),i==t.length&&s==r.length&&(l=function(t,e,i){var r;let n=t.length,s=e.length,o=0;for(;o<i&&t[--n]===e[--s];)o++;return o}(t,r,c-a)),e+=a,n+=a,i-=l,s-=l,i-e==0&&s-n==0)return[];if(e==i){for(o=nB(e,[],0);n<s;)o.removed.push(r[n++]);return[o]}if(n==s)return[nB(e,[],i-e)];let d=// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function(t){let e=t.length-1,i=t[0].length-1,r=t[e][i],n=[];for(;e>0||i>0;){let s;if(0==e){n.push(2),i--;continue}if(0==i){n.push(3),e--;continue}let o=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];(s=a<l?a<o?a:o:l<o?l:o)==o?(o==r?n.push(0):(n.push(1),r=o),e--,i--):s==a?(n.push(3),e--,r=a):(n.push(2),i--,r=l)}return n.reverse(),n}(// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function(t,e,i,r,n,s){// "Deletion" columns
let o=s-n+1,a=i-e+1,l=Array(o);// "Addition" rows. Initialize null column.
for(let t=0;t<o;t++)l[t]=Array(a),l[t][0]=t;// Initialize null row
for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<o;i++)for(let s=1;s<a;s++){var c;if(t[e+s-1]===r[n+i-1])l[i][s]=l[i-1][s-1];else{let t=l[i-1][s]+1,e=l[i][s-1]+1;l[i][s]=t<e?t:e}}return l}(t,e,i,r,n,s));o=void 0;let h=[],p=e,u=n;for(let t=0;t<d.length;t++)switch(d[t]){case 0:o&&(h.push(o),o=void 0),p++,u++;break;case 1:o||(o=nB(p,[],0)),o.addedCount++,p++,o.removed.push(r[u]),u++;break;case 2:o||(o=nB(p,[],0)),o.addedCount++,p++;break;case 3:o||(o=nB(p,[],0)),o.removed.push(r[u]),u++}return o&&h.push(o),h}(t,0,t.length,e,0,e.length))}/**
 * Returns true if `node` is a slot element
 * @param {!Node} node Node to test.
 * @return {boolean} Returns true if the given `node` is a slot
 * @private
 */function nY(t){return"slot"===t.localName}"interactive"===document.readyState||"complete"===document.readyState?nU():window.addEventListener("DOMContentLoaded",nU);let nJ=class{/**
   * Returns the list of flattened nodes for the given `node`.
   * This list consists of a node's children and, for any children
   * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
   *      return the list of flattened nodes.
   * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
   * @nocollapse See https://github.com/google/closure-compiler/issues/2763
   */// eslint-disable-next-line
static getFlattenedNodes(t){let e=iQ(t);return nY(t)?e.assignedNodes({flatten:!0}):Array.from(e.childNodes).map(t=>nY(t)?iQ(t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}/**
   * @param {!HTMLElement} target Node on which to listen for changes.
   * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
   * or removals from the target's list of flattened nodes.
   */// eslint-disable-next-line
constructor(t,e){/**
     * @type {MutationObserver}
     * @private
     */this._shadyChildrenObserver=null,/**
     * @type {MutationObserver}
     * @private
     */this._nativeChildrenObserver=null,this._connected=!1,/**
     * @type {!HTMLElement}
     * @private
     */this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,/**
     * @type {function()}
     * @private
     */this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}/**
   * Activates an observer. This method is automatically called when
   * a `FlattenedNodesObserver` is created. It should only be called to
   * re-activate an observer that has been deactivated via the `disconnect` method.
   *
   * @return {void}
   */connect(){nY(this._target)?this._listenSlots([this._target]):iQ(this._target).children&&(this._listenSlots(iQ(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}/**
   * Deactivates the flattened nodes observer. After calling this method
   * the observer callback will not be called when changes to flattened nodes
   * occur. The `connect` method may be subsequently called to reactivate
   * the observer.
   *
   * @return {void}
   * @override
   */disconnect(){nY(this._target)?this._unlistenSlots([this._target]):iQ(this._target).children&&(this._unlistenSlots(iQ(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}/**
   * @return {void}
   * @private
   */_schedule(){this._scheduled||(this._scheduled=!0,rh.run(()=>this.flush()))}/**
   * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
   * @return {void}
   * @private
   */_processMutations(t){this._processSlotMutations(t),this.flush()}/**
   * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
   * @return {void}
   * @private
   */_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}/**
   * Flushes the observer causing any pending changes to be immediately
   * delivered the observer callback. By default these changes are delivered
   * asynchronously at the next microtask checkpoint.
   *
   * @return {boolean} Returns true if any pending changes caused the observer
   * callback to run.
   */flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=nq(e,this._effectiveNodes);// process removals
for(let e=0,r;e<i.length&&(r=i[e]);e++)for(let e=0,i;e<r.removed.length&&(i=r.removed[e]);e++)t.removedNodes.push(i);// process adds
for(let r=0,n;r<i.length&&(n=i[r]);r++)for(let i=n.index;i<n.index+n.addedCount;i++)t.addedNodes.push(e[i]);// update cache
this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}/**
   * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
   * @return {void}
   * @private
   */_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];nY(i)&&i.addEventListener("slotchange",this._boundSchedule)}}/**
   * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
   * @return {void}
   * @private
   */_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];nY(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nG=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=r8();while(t||e)},nX=Element.prototype,nW=nX.matches||nX.matchesSelector||nX.mozMatchesSelector||nX.msMatchesSelector||nX.oMatchesSelector||nX.webkitMatchesSelector,nK=function(t,e){return nW.call(t,e)};/**
 * Node API wrapper class returned from `Polymer.dom.(target)` when
 * `target` is a `Node`.
 * @implements {PolymerDomApi}
 * @unrestricted
 */class nZ{/**
   * @param {!Node} node Node for which to create a Polymer.dom helper object.
   */constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}/**
   * Returns an instance of `FlattenedNodesObserver` that
   * listens for node changes on this element.
   *
   * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
   *   of this element changes
   * @return {!PolymerDomApi.ObserveHandle} Observer instance
   * @override
   */observeNodes(t){return new nJ(/** @type {!HTMLElement} */this.node,t)}/**
   * Disconnects an observer previously created via `observeNodes`
   *
   * @param {!PolymerDomApi.ObserveHandle} observerHandle Observer instance
   *   to disconnect.
   * @return {void}
   * @override
   */unobserveNodes(t){t.disconnect()}/**
   * Provided as a backwards-compatible API only.  This method does nothing.
   * @return {void}
   */notifyObserver(){}/**
   * Returns true if the provided node is contained with this element's
   * light-DOM children or shadow root, including any nested shadow roots
   * of children therein.
   *
   * @param {Node} node Node to test
   * @return {boolean} Returns true if the given `node` is contained within
   *   this element's light or shadow DOM.
   * @override
   */deepContains(t){if(iQ(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;// walk from node to `this` or `document`
for(;e&&e!==i&&e!==this.node;)e=iQ(e).parentNode||iQ(e).host;return e===this.node}/**
   * Returns the root node of this node.  Equivalent to `getRootNode()`.
   *
   * @return {!Node} Top most element in the dom tree in which the node
   * exists. If the node is connected to a document this is either a
   * shadowRoot or the document; otherwise, it may be the node
   * itself or a node or document fragment containing it.
   * @override
   */getOwnerRoot(){return iQ(this.node).getRootNode()}/**
   * For slot elements, returns the nodes assigned to the slot; otherwise
   * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
   *
   * @return {!Array<!Node>} Array of assigned nodes
   * @override
   */getDistributedNodes(){return"slot"===this.node.localName?iQ(this.node).assignedNodes({flatten:!0}):[]}/**
   * Returns an array of all slots this element was distributed to.
   *
   * @return {!Array<!HTMLSlotElement>} Description
   * @override
   */getDestinationInsertionPoints(){let t=[],e=iQ(this.node).assignedSlot;for(;e;)t.push(e),e=iQ(e).assignedSlot;return t}/**
   * Calls `importNode` on the `ownerDocument` for this node.
   *
   * @param {!Node} node Node to import
   * @param {boolean} deep True if the node should be cloned deeply during
   *   import
   * @return {Node} Clone of given node imported to this owner document
   */importNode(t,e){return iQ(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(t,e)}/**
   * @return {!Array<!Node>} Returns a flattened list of all child nodes and
   * nodes assigned to child slots.
   * @override
   */getEffectiveChildNodes(){return nJ.getFlattenedNodes(/** @type {!HTMLElement} */this.node)}/**
   * Returns a filtered list of flattened child elements for this element based
   * on the given selector.
   *
   * @param {string} selector Selector to filter nodes against
   * @return {!Array<!HTMLElement>} List of flattened child elements
   * @override
   */queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let r=0,n=e.length,s;r<n&&(s=e[r]);r++)s.nodeType===Node.ELEMENT_NODE&&nK(s,t)&&i.push(s);return i}/**
   * For shadow roots, returns the currently focused element within this
   * shadow root.
   *
   * return {Node|undefined} Currently focused element
   * @override
   */get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function nQ(t,e){for(let i=0;i<e.length;i++){let r=e[i];Object.defineProperty(t,r,{get:function(){return /** @type {DomApiNative} */this.node[r]},configurable:!0})}}class n1{constructor(t){this.event=t}/**
   * Returns the first node on the `composedPath` of this event.
   *
   * @return {!EventTarget} The node this event was dispatched to
   */get rootTarget(){return this.path[0]}/**
   * Returns the local (re-targeted) target for this event.
   *
   * @return {!EventTarget} The local (re-targeted) target for this event.
   */get localTarget(){return this.event.target}/**
   * Returns the `composedPath` for this event.
   * @return {!Array<!EventTarget>} The nodes this event propagated through
   */get path(){return this.event.composedPath()}}/**
 * @function
 * @param {boolean=} deep
 * @return {!Node}
 */nZ.prototype.cloneNode,/**
 * @function
 * @param {!Node} node
 * @return {!Node}
 */nZ.prototype.appendChild,/**
 * @function
 * @param {!Node} newChild
 * @param {Node} refChild
 * @return {!Node}
 */nZ.prototype.insertBefore,/**
 * @function
 * @param {!Node} node
 * @return {!Node}
 */nZ.prototype.removeChild,/**
 * @function
 * @param {!Node} oldChild
 * @param {!Node} newChild
 * @return {!Node}
 */nZ.prototype.replaceChild,/**
 * @function
 * @param {string} name
 * @param {string} value
 * @return {void}
 */nZ.prototype.setAttribute,/**
 * @function
 * @param {string} name
 * @return {void}
 */nZ.prototype.removeAttribute,/**
 * @function
 * @param {string} selector
 * @return {?Element}
 */nZ.prototype.querySelector,/**
 * @function
 * @param {string} selector
 * @return {!NodeList<!Element>}
 */nZ.prototype.querySelectorAll,/** @type {?Node} */nZ.prototype.parentNode,/** @type {?Node} */nZ.prototype.firstChild,/** @type {?Node} */nZ.prototype.lastChild,/** @type {?Node} */nZ.prototype.nextSibling,/** @type {?Node} */nZ.prototype.previousSibling,/** @type {?HTMLElement} */nZ.prototype.firstElementChild,/** @type {?HTMLElement} */nZ.prototype.lastElementChild,/** @type {?HTMLElement} */nZ.prototype.nextElementSibling,/** @type {?HTMLElement} */nZ.prototype.previousElementSibling,/** @type {!Array<!Node>} */nZ.prototype.childNodes,/** @type {!Array<!HTMLElement>} */nZ.prototype.children,/** @type {?DOMTokenList} */nZ.prototype.classList,/** @type {string} */nZ.prototype.textContent,/** @type {string} */nZ.prototype.innerHTML;let n0=nZ;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){/**
   * @private
   * @extends {HTMLElement}
   */class t extends window.ShadyDOM.Wrapper{}// copy bespoke API onto wrapper
Object.getOwnPropertyNames(nZ.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=nZ.prototype[e])}),// Note, `classList` is here only for legacy compatibility since it does not
// trigger distribution in v1 Shadow DOM.
nQ(t.prototype,["classList"]),n0=t,Object.defineProperties(n1.prototype,{// Returns the "lowest" node in the same root as the event's currentTarget.
// When in `noPatch` mode, this must be calculated by walking the event's
// path.
localTarget:{get(){let t=this.event.currentTarget,e=t&&n2(t).getOwnerRoot(),i=this.path;for(let t=0;t<i.length;t++){let r=i[t];if(n2(r).getOwnerRoot()===e)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!// Methods that can provoke distribution or must return the logical, not
// composed tree.
function(t,e){for(let i=0;i<e.length;i++){let r=e[i];/* eslint-disable valid-jsdoc */t[r]=/** @this {DomApiNative} */function(){return this.node[r].apply(this.node,arguments)};/* eslint-enable */}}(nZ.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),// Properties that should return the logical, not composed tree. Note, `classList`
// is here only for legacy compatibility since it does not trigger distribution
// in v1 Shadow DOM.
nQ(nZ.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(t,e){for(let i=0;i<e.length;i++){let r=e[i];Object.defineProperty(t,r,{/**
       * @this {DomApiNative}
       * @return {*} .
       */get:function(){return this.node[r]},/**
       * @this {DomApiNative}
       * @param {*} value .
       */set:function(t){this.node[r]=t},configurable:!0})}}(nZ.prototype,["textContent","innerHTML","className"]);const n2=function(t){if((t=t||document)instanceof n0||t instanceof n1)return /** @type {!DomApi} */t;let e=t.__domApi;return e||(e=t instanceof Event?new n1(t):new n0(/** @type {Node} */t),t.__domApi=e),e},n5=window.ShadyDOM,n4=window.ShadyCSS;/**
 * Return true if node scope is correct.
 *
 * @param {!Element} node Node to check scope
 * @param {!Node} scope Scope reference
 * @return {boolean} True if node is in scope
 */function n3(t,e){return iQ(t).getRootNode()===e}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const n6="disable-upgrade",n8=t=>{for(;t;){let e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};ij(t=>{/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   * @private
   */let e=r5(t),i=n8(e);return(/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DisableUpgradeMixin}
   */class extends e{constructor(){super(),/** @type {boolean|undefined} */this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(n6)}// Prevent element from initializing properties when it's upgrade disabled.
/** @override */_initializeProperties(){this.hasAttribute(n6)?this.__isUpgradeDisabled=!0:super._initializeProperties()}// Prevent element from enabling properties when it's upgrade disabled.
// Normally overriding connectedCallback would be enough, but dom-* elements
/** @override */_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}// If the element starts upgrade-disabled and a property is set for
// which an accessor exists, the default should not be applied.
// This additional check is needed because defaults are applied via
// `_initializeProperties` which is called after initial properties
// have been set when the element starts upgrade-disabled.
/** @override */_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}/**
     * @override
     * @param {string} name Attribute name.
     * @param {?string} old The previous value for the attribute.
     * @param {?string} value The new value for the attribute.
     * @param {?string} namespace The XML namespace for the attribute.
     * @return {void}
     */attributeChangedCallback(t,e,i,r){t==n6?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,iQ(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,i,/** @type {null|string} */r)}// Prevent element from connecting when it's upgrade disabled.
// This prevents user code in `attached` from being called.
/** @override */connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}// Prevent element from disconnecting when it's upgrade disabled.
// This avoids allowing user code `detached` from being called without a
// paired call to `attached`.
/** @override */disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}})});const n9="disable-upgrade";let n7=window.ShadyCSS;const st=ij(t=>{// TODO(kschaaf): Note, the `@implements {Polymer_DirMixin}` is required here
// (rather than on legacyElementBase) for unknown reasons.
/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @implements {Polymer_GestureEventListeners}
   * @implements {Polymer_DirMixin}
   * @extends {HTMLElement}
   * @private
   */let e=nM(r5(t)),i=r2?e:nj(e),r=n8(i),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};/**
   * @polymer
   * @mixinClass
   * @extends {legacyElementBase}
   * @implements {Polymer_LegacyElementMixin}
   * @unrestricted
   */class s extends i{constructor(){super(),/** @type {boolean} */this.isAttached,/** @type {?WeakMap<!Element, !Object<string, !Function>>} */this.__boundListeners,/** @type {?Object<string, ?Function>} */this._debouncers,// NOTE: Inlined for perf from version of DisableUpgradeMixin.
/** @type {boolean|undefined} */this.__isUpgradeDisabled,/** @type {boolean|undefined} */this.__needsAttributesAtConnected,/** @type {boolean|undefined} */this._legacyForceObservedAttributes}/**
     * Forwards `importMeta` from the prototype (i.e. from the info object
     * passed to `Polymer({...})`) to the static API.
     *
     * @return {!Object} The `import.meta` object set on the prototype
     * @suppress {missingProperties} `this` is always in the instance in
     *  closure for some reason even in a static method, rather than the class
     * @nocollapse
     */static get importMeta(){return this.prototype.importMeta}/**
     * Legacy callback called during the `constructor`, for overriding
     * by the user.
     * @override
     * @return {void}
     */created(){}/**
     * Processes an attribute reaction when the `legacyNoObservedAttributes`
     * setting is in use.
     * @param {string} name Name of attribute that changed
     * @param {?string} old Old attribute value
     * @param {?string} value New attribute value
     * @return {void}
     */__attributeReaction(t,e,i){(this.__dataAttributes&&this.__dataAttributes[t]||t===n9)&&this.attributeChangedCallback(t,e,i,null)}/**
     * Sets the value of an attribute.
     * @override
     */setAttribute(t,e){if(iL&&!this._legacyForceObservedAttributes){let i=this.getAttribute(t);super.setAttribute(t,e),// value coerced to String for closure's benefit
this.__attributeReaction(t,i,String(e))}else super.setAttribute(t,e)}/**
     * Removes an attribute.
     * @override
     */removeAttribute(t){if(iL&&!this._legacyForceObservedAttributes){let e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
static get observedAttributes(){if(!iL||this.prototype._legacyForceObservedAttributes)return r.call(this).concat(n9);// Ensure this element is property registered with the telemetry system.
if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){var t;this.__observedAttributes=[],t=this.prototype,r1.push(t)}return this.__observedAttributes}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
// Prevent element from enabling properties when it's upgrade disabled.
// Normally overriding connectedCallback would be enough, but dom-* elements
/** @override */_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
// If the element starts upgrade-disabled and a property is set for
// which an accessor exists, the default should not be applied.
// This additional check is needed because defaults are applied via
// `_initializeProperties` which is called after initial properties
// have been set when the element starts upgrade-disabled.
/** @override */_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}/**
     * Provides an implementation of `connectedCallback`
     * which adds Polymer legacy API's `attached` method.
     * @return {void}
     * @override
     */connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}/**
     * Legacy callback called during `connectedCallback`, for overriding
     * by the user.
     * @override
     * @return {void}
     */attached(){}/**
     * Provides an implementation of `disconnectedCallback`
     * which adds Polymer legacy API's `detached` method.
     * @return {void}
     * @override
     */disconnectedCallback(){// NOTE: Inlined for perf from version of DisableUpgradeMixin.
this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}/**
     * Legacy callback called during `disconnectedCallback`, for overriding
     * by the user.
     * @override
     * @return {void}
     */detached(){}/**
     * Provides an override implementation of `attributeChangedCallback`
     * which adds the Polymer legacy API's `attributeChanged` method.
     * @param {string} name Name of attribute.
     * @param {?string} old Old value of attribute.
     * @param {?string} value Current value of attribute.
     * @param {?string} namespace Attribute namespace.
     * @return {void}
     * @override
     */attributeChangedCallback(t,e,i,r){e!==i&&(t==n9?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,iQ(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,i,r),this.attributeChanged(t,e,i)))}/**
     * Legacy callback called during `attributeChangedChallback`, for overriding
     * by the user.
     * @param {string} name Name of attribute.
     * @param {?string} old Old value of attribute.
     * @param {?string} value Current value of attribute.
     * @return {void}
     * @override
     */attributeChanged(t,e,i){}/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for class initialization via the `_registered` callback.
     * This is called only when the first instance of the element is created.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts}
     */_initializeProperties(){// NOTE: Inlined for perf from version of DisableUpgradeMixin.
// Only auto-use disable-upgrade if legacyOptimizations is set.
if(iT&&this.hasAttribute(n9))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),// backstop in case the `_registered` implementation does not set this
t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=/** @type {HTMLElement} */this,this.created(),!iL||this._legacyForceObservedAttributes||(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
this._applyListeners()}}_takeAttributes(){let t=this.attributes;for(let e=0,i=t.length;e<i;e++){let i=t[e];this.__attributeReaction(i.name,null,i.value)}}/**
     * Called automatically when an element is initializing.
     * Users may override this method to perform class registration time
     * work. The implementation should ensure the work is performed
     * only once for the class.
     * @protected
     * @return {void}
     * @override
     */_registered(){}/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for installing `hostAttributes` and `listeners`.
     *
     * @return {void}
     * @override
     */ready(){this._ensureAttributes(),super.ready()}/**
     * Ensures an element has required attributes. Called when the element
     * is being readied via `ready`. Users should override to set the
     * element's required attributes. The implementation should be sure
     * to check and not override existing attributes added by
     * the user of the element. Typically, setting attributes should be left
     * to the element user and not done here; reasonable exceptions include
     * setting aria roles and focusability.
     * @protected
     * @return {void}
     * @override
     */_ensureAttributes(){}/**
     * Adds element event listeners. Called when the element
     * is being readied via `ready`. Users should override to
     * add any required element event listeners.
     * In performance critical elements, the work done here should be kept
     * to a minimum since it is done before the element is rendered. In
     * these elements, consider adding listeners asynchronously so as not to
     * block render.
     * @protected
     * @return {void}
     * @override
     */_applyListeners(){}/**
     * Converts a typed JavaScript value to a string.
     *
     * Note this method is provided as backward-compatible legacy API
     * only.  It is not directly called by any Polymer features. To customize
     * how properties are serialized to attributes for attribute bindings and
     * `reflectToAttribute: true` properties as well as this method, override
     * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
     *
     * @param {*} value Value to deserialize
     * @return {string | undefined} Serialized value
     * @override
     */serialize(t){return this._serializeValue(t)}/**
     * Converts a string to a typed JavaScript value.
     *
     * Note this method is provided as backward-compatible legacy API
     * only.  It is not directly called by any Polymer features.  To customize
     * how attributes are deserialized to properties for in
     * `attributeChangedCallback`, override `_deserializeValue` method
     * provided by `Polymer.PropertyAccessors`.
     *
     * @param {string} value String to deserialize
     * @param {*} type Type to deserialize the string to
     * @return {*} Returns the deserialized value in the `type` given.
     * @override
     */deserialize(t,e){return this._deserializeValue(t,e)}/**
     * Serializes a property to its associated attribute.
     *
     * Note this method is provided as backward-compatible legacy API
     * only.  It is not directly called by any Polymer features.
     *
     * @param {string} property Property name to reflect.
     * @param {string=} attribute Attribute name to reflect.
     * @param {*=} value Property value to reflect.
     * @return {void}
     * @override
     */reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}/**
     * Sets a typed value to an HTML attribute on a node.
     *
     * Note this method is provided as backward-compatible legacy API
     * only.  It is not directly called by any Polymer features.
     *
     * @param {*} value Value to serialize.
     * @param {string} attribute Attribute name to serialize to.
     * @param {Element} node Element to set attribute to.
     * @return {void}
     * @override
     */serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(/** @type {Element} */i||this,t,e)}/**
     * Copies own properties (including accessor descriptors) from a source
     * object to a target object.
     *
     * @param {Object} prototype Target object to copy properties to.
     * @param {Object} api Source object to copy properties from.
     * @return {Object} prototype object that was passed as first argument.
     * @override
     */extend(t,e){if(!(t&&e))return t||e;let i=Object.getOwnPropertyNames(e);for(let r=0,n;r<i.length&&(n=i[r]);r++){let i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i)}return t}/**
     * Copies props from a source object to a target object.
     *
     * Note, this method uses a simple `for...in` strategy for enumerating
     * properties.  To ensure only `ownProperties` are copied from source
     * to target and that accessor implementations are copied, use `extend`.
     *
     * @param {!Object} target Target object to copy properties to.
     * @param {!Object} source Source object to copy properties from.
     * @return {!Object} Target object that was passed as first argument.
     * @override
     */mixin(t,e){for(let i in e)t[i]=e[i];return t}/**
     * Sets the prototype of an object.
     *
     * Note this method is provided as backward-compatible legacy API
     * only.  It is not directly called by any Polymer features.
     * @param {Object} object The object on which to set the prototype.
     * @param {Object} prototype The prototype that will be set on the given
     * `object`.
     * @return {Object} Returns the given `object` with its prototype set
     * to the given `prototype` object.
     * @override
     */chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}/* **** Begin Template **** *//**
     * Calls `importNode` on the `content` of the `template` specified and
     * returns a document fragment containing the imported content.
     *
     * @param {HTMLTemplateElement} template HTML template element to instance.
     * @return {!DocumentFragment} Document fragment containing the imported
     *   template content.
     * @override
     * @suppress {missingProperties} go/missingfnprops
     */instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return /** @type {!DocumentFragment} */document.importNode(e,!0)}/* **** Begin Events **** *//**
     * Dispatches a custom event with an optional detail value.
     *
     * @param {string} type Name of event type.
     * @param {*=} detail Detail value containing event-specific
     *   payload.
     * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined),
     *     composed: (boolean|undefined) }=}
     *  options Object specifying options.  These may include:
     *  `bubbles` (boolean, defaults to `true`),
     *  `cancelable` (boolean, defaults to false), and
     *  `node` on which to fire the event (HTMLElement, defaults to `this`).
     * @return {!Event} The new event that was fired.
     * @override
     */fire(t,e,i){i=i||{},e=null==e?{}:e;let r=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:!!i.cancelable,composed:void 0===i.composed||i.composed});return r.detail=e,iQ(i.node||this).dispatchEvent(r),r}/**
     * Convenience method to add an event listener on a given element,
     * late bound to a named method on this element.
     *
     * @param {?EventTarget} node Element to add event listener to.
     * @param {string} eventName Name of event to listen for.
     * @param {string} methodName Name of handler method on `this` to call.
     * @return {void}
     * @override
     */listen(t,e,i){t=/** @type {!EventTarget} */t||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(t);n||(n={},r.set(t,n));let s=e+i;n[s]||(n[s]=this._addMethodEventListenerToNode(/** @type {!Node} */t,e,i,this))}/**
     * Convenience method to remove an event listener from a given element,
     * late bound to a named method on this element.
     *
     * @param {?EventTarget} node Element to remove event listener from.
     * @param {string} eventName Name of event to stop listening to.
     * @param {string} methodName Name of handler method on `this` to not call
     anymore.
     * @return {void}
     * @override
     */unlisten(t,e,i){t=/** @type {!EventTarget} */t||this;let r=this.__boundListeners&&this.__boundListeners.get(/** @type {!Element} */t),n=e+i,s=r&&r[n];s&&(this._removeEventListenerFromNode(/** @type {!Node} */t,e,s),r[n]=/** @type {?} */null)}/**
     * Override scrolling behavior to all direction, one direction, or none.
     *
     * Valid scroll directions:
     *   - 'all': scroll in any direction
     *   - 'x': scroll only in the 'x' direction
     *   - 'y': scroll only in the 'y' direction
     *   - 'none': disable scrolling for this node
     *
     * @param {string=} direction Direction to allow scrolling
     * Defaults to `all`.
     * @param {Element=} node Element to apply scroll direction setting.
     * Defaults to `this`.
     * @return {void}
     * @override
     */setScrollDirection(t,e){nS(/** @type {!Element} */e||this,n[t]||"auto")}/* **** End Events **** *//**
     * Convenience method to run `querySelector` on this local DOM scope.
     *
     * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
     *
     * @param {string} slctr Selector to run on this local DOM scope
     * @return {Element} Element found by the selector, or null if not found.
     * @override
     */$$(t){// Note, no need to `wrap` this because root is always patched
return this.root.querySelector(t)}/**
     * Return the element whose local dom within which this element
     * is contained. This is a shorthand for
     * `this.getRootNode().host`.
     * @this {Element}
     * @return {?Node} The element whose local dom within which this element is
     * contained.
     * @override
     */get domHost(){let t=iQ(this).getRootNode();return t instanceof DocumentFragment?/** @type {ShadowRoot} */t.host:t}/**
     * Force this element to distribute its children to its local dom.
     * This should not be necessary as of Polymer 2.0.2 and is provided only
     * for backwards compatibility.
     * @return {void}
     * @override
     */distributeContent(){let t=n2(/** @type {Element} */this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}/**
     * Returns a list of nodes that are the effective childNodes. The effective
     * childNodes list is the same as the element's childNodes except that
     * any `<content>` elements are replaced with the list of nodes distributed
     * to the `<content>`, the result of its `getDistributedNodes` method.
     * @return {!Array<!Node>} List of effective child nodes.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an
     *     HTMLElement
     * @override
     */getEffectiveChildNodes(){let t=n2(/** @type {Element} */this);return t.getEffectiveChildNodes()}/**
     * Returns a list of nodes distributed within this element that match
     * `selector`. These can be dom children or elements distributed to
     * children that are insertion points.
     * @param {string} selector Selector to run.
     * @return {!Array<!Node>} List of distributed elements that match selector.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an
     * HTMLElement
     * @override
     */queryDistributedElements(t){let e=n2(/** @type {Element} */this);return e.queryDistributedElements(t)}/**
     * Returns a list of elements that are the effective children. The effective
     * children list is the same as the element's children except that
     * any `<content>` elements are replaced with the list of elements
     * distributed to the `<content>`.
     *
     * @return {!Array<!Node>} List of effective children.
     * @override
     */getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(/** @type {!Node} */t){return t.nodeType===Node.ELEMENT_NODE})}/**
     * Returns a string of text content that is the concatenation of the
     * text content's of the element's effective childNodes (the elements
     * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
     *
     * @return {string} List of effective children.
     * @override
     */getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i=0,r;r=t[i];i++)r.nodeType!==Node.COMMENT_NODE&&e.push(r.textContent);return e.join("")}/**
     * Returns the first effective childNode within this element that
     * match `selector`. These can be dom child nodes or elements distributed
     * to children that are insertion points.
     * @param {string} selector Selector to run.
     * @return {Node} First effective child node that matches selector.
     * @override
     */queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}/**
     * Returns a list of effective childNodes within this element that
     * match `selector`. These can be dom child nodes or elements distributed
     * to children that are insertion points.
     * @param {string} selector Selector to run.
     * @return {!Array<!Node>} List of effective child nodes that match
     *     selector.
     * @override
     */queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}/**
     * Returns a list of nodes distributed to this element's `<slot>`.
     *
     * If this element contains more than one `<slot>` in its local DOM,
     * an optional selector may be passed to choose the desired content.
     *
     * @param {string=} slctr CSS selector to choose the desired
     *   `<slot>`.  Defaults to `content`.
     * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
     * @override
     */getContentChildNodes(t){// Note, no need to `wrap` this because root is always
let e=this.root.querySelector(t||"slot");return e?n2(e).getDistributedNodes():[]}/**
     * Returns a list of element children distributed to this element's
     * `<slot>`.
     *
     * If this element contains more than one `<slot>` in its
     * local DOM, an optional selector may be passed to choose the desired
     * content.  This method differs from `getContentChildNodes` in that only
     * elements are returned.
     *
     * @param {string=} slctr CSS selector to choose the desired
     *   `<content>`.  Defaults to `content`.
     * @return {!Array<!HTMLElement>} List of distributed nodes for the
     *   `<slot>`.
     * @suppress {invalidCasts}
     * @override
     */getContentChildren(t){return /** @type {!Array<!HTMLElement>} */this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}/**
     * Checks whether an element is in this element's light DOM tree.
     *
     * @param {?Node} node The element to be checked.
     * @return {boolean} true if node is in this element's light DOM tree.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an
     * HTMLElement
     * @override
     */isLightDescendant(t){return /** @type {Node} */this!==t&&iQ(this).contains(t)&&iQ(this).getRootNode()===iQ(t).getRootNode()}/**
     * Checks whether an element is in this element's local DOM tree.
     *
     * @param {!Element} node The element to be checked.
     * @return {boolean} true if node is in this element's local DOM tree.
     * @override
     */isLocalDescendant(t){return this.root===iQ(t).getRootNode()}/**
     * No-op for backwards compatibility. This should now be handled by
     * ShadyCss library.
     * @param  {!Element} container Container element to scope
     * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
     * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
     * @override
     */scopeSubtree(t,e=!1){return function(t,e=!1){// If using native ShadowDOM, abort
if(!n5||!n4||!n5.handlesDynamicScoping)return null;let i=n4.ScopingShim;// if ScopingShim is not available, abort
if(!i)return null;// capture correct scope for container
let r=i.scopeForNode(t),n=iQ(t).getRootNode(),s=t=>{if(!n3(t,n))return;// NOTE: native qSA does not honor scoped DOM, but it is faster, and the same behavior as Polymer v1
let e=Array.from(n5.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){let s=e[t];if(!n3(s,n))continue;let o=i.currentScopeForNode(s);o!==r&&(""!==o&&i.unscopeNode(s,o),i.scopeNode(s,r))}};if(// scope everything in container
s(t),!e)return null;{let e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){let i=t[e];for(let t=0;t<i.addedNodes.length;t++){let e=i.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&s(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}}(t,e)}/**
     * Returns the computed style value for the given property.
     * @param {string} property The css property name.
     * @return {string} Returns the computed css property value for the given
     * `property`.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an
     *     HTMLElement
     * @override
     */getComputedStyleValue(t){return n7.getComputedStyleValue(/** @type {!Element} */this,t)}// debounce
/**
     * Call `debounce` to collapse multiple requests for a named task into
     * one invocation which is made after the wait time has elapsed with
     * no new request.  If no wait time is given, the callback will be called
     * at microtask timing (guaranteed before paint).
     *
     *     debouncedClickAction(e) {
     *       // will not call `processClick` more than once per 100ms
     *       this.debounce('click', function() {
     *        this.processClick();
     *       } 100);
     *     }
     *
     * @param {string} jobName String to identify the debounce job.
     * @param {function():void} callback Function that is called (with `this`
     *   context) when the wait time elapses.
     * @param {number=} wait Optional wait time in milliseconds (ms) after the
     *   last signal that must elapse before invoking `callback`
     * @return {!Object} Returns a debouncer object on which exists the
     * following methods: `isActive()` returns true if the debouncer is
     * active; `cancel()` cancels the debouncer if it is active;
     * `flush()` immediately invokes the debounced callback if the debouncer
     * is active.
     * @override
     */debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=r4.debounce(this._debouncers[t],i>0?rd.after(i):rh,e.bind(this))}/**
     * Returns whether a named debouncer is active.
     *
     * @param {string} jobName The name of the debouncer started with `debounce`
     * @return {boolean} Whether the debouncer is active (has not yet fired).
     * @override
     */isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!!(e&&e.isActive())}/**
     * Immediately calls the debouncer `callback` and inactivates it.
     *
     * @param {string} jobName The name of the debouncer started with `debounce`
     * @return {void}
     * @override
     */flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}/**
     * Cancels an active debouncer.  The `callback` will not be called.
     *
     * @param {string} jobName The name of the debouncer started with `debounce`
     * @return {void}
     * @override
     */cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}/**
     * Runs a callback function asynchronously.
     *
     * By default (if no waitTime is specified), async callbacks are run at
     * microtask timing, which will occur before paint.
     *
     * @param {!Function} callback The callback function to run, bound to
     *     `this`.
     * @param {number=} waitTime Time to wait before calling the
     *   `callback`.  If unspecified or 0, the callback will be run at microtask
     *   timing (before paint).
     * @return {number} Handle that may be used to cancel the async job.
     * @override
     */async(t,e){return e>0?rd.run(t.bind(this),e):~rh.run(t.bind(this))}/**
     * Cancels an async operation started with `async`.
     *
     * @param {number} handle Handle returned from original `async` call to
     *   cancel.
     * @return {void}
     * @override
     */cancelAsync(t){t<0?rh.cancel(~t):rd.cancel(t)}// other
/**
     * Convenience method for creating an element and configuring it.
     *
     * @param {string} tag HTML element tag to create.
     * @param {Object=} props Object of properties to configure on the
     *    instance.
     * @return {!Element} Newly created and configured element.
     * @override
     */create(t,e){let i=document.createElement(t);if(e){if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t]}return i}/**
     * Polyfill for Element.prototype.matches, which is sometimes still
     * prefixed.
     *
     * @param {string} selector Selector to test.
     * @param {!Element=} node Element to test the selector against.
     * @return {boolean} Whether the element matches the selector.
     * @override
     */elementMatches(t,e){return nK(e||this,t)}/**
     * Toggles an HTML attribute on or off.
     *
     * @param {string} name HTML attribute name
     * @param {boolean=} bool Boolean to force the attribute on or off.
     *    When unspecified, the state of the attribute will be reversed.
     * @return {boolean} true if the attribute now exists
     * @override
     */toggleAttribute(t,e){let i=/** @type {Element} */this;return(3==arguments.length&&(i=/** @type {Element} */arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e)?(iQ(i).setAttribute(t,""),!0):(iQ(i).removeAttribute(t),!1)}/**
     * Toggles a CSS class on or off.
     *
     * @param {string} name CSS class name
     * @param {boolean=} bool Boolean to force the class on or off.
     *    When unspecified, the state of the class will be reversed.
     * @param {Element=} node Node to target.  Defaults to `this`.
     * @return {void}
     * @override
     */toggleClass(t,e,i){i=/** @type {Element} */i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}/**
     * Cross-platform helper for setting an element's CSS `transform` property.
     *
     * @param {string} transformText Transform setting.
     * @param {Element=} node Element to apply the transform to.
     * Defaults to `this`
     * @return {void}
     * @override
     */transform(t,e){(e=/** @type {Element} */e||this).style.webkitTransform=t,e.style.transform=t}/**
     * Cross-platform helper for setting an element's CSS `translate3d`
     * property.
     *
     * @param {number|string} x X offset.
     * @param {number|string} y Y offset.
     * @param {number|string} z Z offset.
     * @param {Element=} node Element to apply the transform to.
     * Defaults to `this`.
     * @return {void}
     * @override
     */translate3d(t,e,i,r){r=/** @type {Element} */r||this,this.transform("translate3d("+t+","+e+","+i+")",r)}/**
     * Removes an item from an array, if it exists.
     *
     * If the array is specified by path, a change notification is
     * generated, so that observers, data bindings and computed
     * properties watching that path can update.
     *
     * If the array is passed directly, **no change
     * notification is generated**.
     *
     * @param {string | !Array<number|string>} arrayOrPath Path to array from
     *     which to remove the item
     *   (or the array itself).
     * @param {*} item Item to remove.
     * @return {Array} Array containing item removed.
     * @override
     */arrayDelete(t,e){let i;if(Array.isArray(t)){if((i=t.indexOf(e))>=0)return t.splice(i,1)}else if((i=i8(this,t).indexOf(e))>=0)return this.splice(t,i,1);return null}// logging
/**
     * Facades `console.log`/`warn`/`error` as override point.
     *
     * @param {string} level One of 'log', 'warn', 'error'
     * @param {Array} args Array of strings or objects to log
     * @return {void}
     * @override
     */_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}/**
     * Facades `console.log` as an override point.
     *
     * @param {...*} args Array of strings or objects to log
     * @return {void}
     * @override
     */_log(...t){this._logger("log",t)}/**
     * Facades `console.warn` as an override point.
     *
     * @param {...*} args Array of strings or objects to log
     * @return {void}
     * @override
     */_warn(...t){this._logger("warn",t)}/**
     * Facades `console.error` as an override point.
     *
     * @param {...*} args Array of strings or objects to log
     * @return {void}
     * @override
     */_error(...t){this._logger("error",t)}/**
     * Formats a message using the element type an a method name.
     *
     * @param {string} methodName Method name to associate with message
     * @param {...*} args Array of strings or objects to log
     * @return {!Array} Array with formatting information for `console`
     *   logging.
     * @override
     */_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return s.prototype.is="",s}),se={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},si={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},sr=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},si);function sn(t,e,i,r){for(let n in!function(t,e,i){let r=t._noAccessors,n=Object.getOwnPropertyNames(t);for(let s=0;s<n.length;s++){let o=n[s];if(!(o in i)){if(r)e[o]=t[o];else{let i=Object.getOwnPropertyDescriptor(t,o);i&&(// ensure property is configurable so that a later behavior can
// re-configure it.
i.configurable=!0,Object.defineProperty(e,o,i))}}}}(e,t,r),se)e[n]&&(i[n]=i[n]||[],i[n].push(e[n]))}/**
 * Copies property descriptors from source to target, overwriting all fields
 * of any previous descriptor for a property *except* for `value`, which is
 * merged in from the target if it does not exist on the source.
 *
 * @param {*} target Target properties object
 * @param {*} source Source properties object
 */function ss(t,e){for(let i in e){let r=t[i],n=e[i];!("value"in n)&&r&&"value"in r?t[i]=Object.assign({value:r.value},n):t[i]=n}}const so=st(HTMLElement),sa=function(t){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
let e;return e="function"==typeof t?t:sa.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,/** @type {!HTMLElement} */e),e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * Module for preparing and stamping instances of templates that utilize
 * Polymer's data-binding and declarative event listener features.
 *
 * Example:
 *
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     let TemplateClass = Templatize.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = new TemplateClass({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. element's shadow DOM
 *     this.shadowRoot.appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * The `options` dictionary passed to `templatize` allows for customizing
 * features of the generated template class, including how outer-scope host
 * properties should be forwarded into template instances, how any instance
 * properties added into the template's scope should be notified out to
 * the host, and whether the instance should be decorated as a "parent model"
 * of any event handlers.
 *
 *     // Customize property forwarding and event model decoration
 *     let TemplateClass = Templatize.templatize(template, this, {
 *       parentModel: true,
 *       forwardHostProp(property, value) {...},
 *       instanceProps: {...},
 *       notifyInstanceProp(instance, property, value) {...},
 *     });
 *
 * @summary Module for preparing and stamping instances of templates
 *   utilizing Polymer templating features.
 *//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/// Common implementation for mixin & behavior
function sl(t,e,i,r,n){let s;n&&(s="object"==typeof i&&null!==i)&&(r=t.__dataTemp[e]);// Strict equality check, but return false for NaN===NaN
let o=r!==i&&(r==r||i==i);return s&&o&&(t.__dataTemp[e]=i),o}sa.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(so):so;return(// decorate klass with registration info
(i=/* Note about construction and extension of legacy classes.
  [Changed in Q4 2018 to optimize performance.]

  When calling `Polymer` or `mixinBehaviors`, the generated class below is
  made. The list of behaviors was previously made into one generated class per
  behavior, but this is no longer the case as behaviors are now called
  manually. Note, there may *still* be multiple generated classes in the
  element's prototype chain if extension is used with `mixinBehaviors`.

  The generated class is directly tied to the info object and behaviors
  used to create it. That list of behaviors is filtered so it's only the
  behaviors not active on the superclass. In order to call through to the
  entire list of lifecycle methods, it's important to call `super`.

  The element's `properties` and `observers` are controlled via the finalization
  mechanism provided by `PropertiesMixin`. `Properties` and `observers` are
  collected by manually traversing the prototype chain and merging.

  To limit changes, the `_registered` method is called via `_initializeProperties`
  and not `_finalizeClass`.

*//**
 * @param {!PolymerInit} info Polymer info object
 * @param {function(new:HTMLElement)} Base base class to extend with info object
 * @param {Object=} behaviors behaviors to copy into the element
 * @return {function(new:HTMLElement)} Generated class
 * @suppress {checkTypes}
 * @private
 */function(t,e,i){let r;let n={};/** @private */class s extends e{// explicitly not calling super._finalizeClass
/** @nocollapse */static _finalizeClass(){// if calling via a subclass that hasn't been generated, pass through to super
if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){// interleave properties and observers per behavior and `info`
if(r)for(let t=0,e;t<r.length;t++)(e=r[t]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),// make sure to prepare the element template
this._prepareTemplate()}else //     Change back to just super.methodCall()
e._finalizeClass.call(this)}/** @nocollapse */static get properties(){let e={};if(r)for(let t=0;t<r.length;t++)ss(e,r[t].properties);return ss(e,t.properties),e}/** @nocollapse */static get observers(){let e=[];if(r)for(let t=0,i;t<r.length;t++)(i=r[t]).observers&&(e=e.concat(i.observers));return t.observers&&(e=e.concat(t.observers)),e}/**
     * @return {void}
     */created(){super.created();let t=n.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}/**
     * @return {void}
     */_registered(){/* NOTE: `beforeRegister` is called here for bc, but the behavior
        is different than in 1.x. In 1.0, the method was called *after*
        mixing prototypes together but *before* processing of meta-objects.
        However, dynamic effects can still be set here and can be done either
        in `beforeRegister` or `registered`. It is no longer possible to set
        `is` in `beforeRegister` as you could in 1.x.
      */// only proceed if the generated class' prototype has not been registered.
let t=s.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,// ensure superclass is registered first.
super._registered(),iT&&o(t);// make sure legacy lifecycle is called on the *element*'s prototype
// and not the generated class prototype; if the element has been
// extended, these are *not* the same.
let e=Object.getPrototypeOf(this),i=n.beforeRegister;if(i)for(let t=0;t<i.length;t++)i[t].call(e);if(i=n.registered)for(let t=0;t<i.length;t++)i[t].call(e)}}/**
     * @return {void}
     */_applyListeners(){super._applyListeners();let t=n.listeners;if(t)for(let e=0;e<t.length;e++){let i=t[e];if(i)for(let t in i)this._addMethodEventListenerToNode(this,t,i[t])}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
     * @return {void}
     */_ensureAttributes(){let t=n.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){let i=t[e];for(let t in i)this._ensureAttribute(t,i[t])}super._ensureAttributes()}/**
     * @return {void}
     */ready(){super.ready();let t=n.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}/**
     * @return {void}
     */attached(){super.attached();let t=n.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}/**
     * @return {void}
     */detached(){super.detached();let t=n.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}/**
     * Implements native Custom Elements `attributeChangedCallback` to
     * set an attribute value to a property via `_attributeToProperty`.
     *
     * @param {string} name Name of attribute that changed
     * @param {?string} old Old attribute value
     * @param {?string} value New attribute value
     * @return {void}
     */attributeChanged(t,e,i){super.attributeChanged();let r=n.attributeChanged;if(r)for(let n=0;n<r.length;n++)r[n].call(this,t,e,i)}}// apply behaviors, note actual copying is done lazily at first instance creation
if(i){Array.isArray(i)||(i=[i]);let t=e.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
r=/**
 * @param {Array} behaviors List of behaviors to flatten.
 * @param {Array=} list Target list to flatten behaviors into.
 * @param {Array=} exclude List of behaviors to exclude from the list.
 * @return {!Array} Returns the list of flattened behaviors.
 */function t(e,i,r){i=i||[];for(let n=e.length-1;n>=0;n--){let s=e[n];s?Array.isArray(s)?t(s,i):0>i.indexOf(s)&&(!r||0>r.indexOf(s))&&i.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,t),s.prototype.behaviors=t?t.concat(i):r}let o=e=>{r&&// NOTE:
// 1.x
// Behaviors were mixed in *in reverse order* and de-duped on the fly.
// The rule was that behavior properties were copied onto the element
// prototype if and only if the property did not already exist.
// Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
// (1), B, (2), A, (3) C. This means prototype properties win over
// B properties win over A win over C. This mirrors what would happen
// with inheritance if element extended B extended A extended C.
//
// Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
// `behaviors` array was [C, A, B].
// Behavior lifecycle methods were called in behavior array order
// followed by the element, e.g. (1) C.created, (2) A.created,
// (3) B.created, (4) element.created. There was no support for
// super, and "super-behavior" methods were callable only by name).
//
// 2.x
// Behaviors are made into proper mixins which live in the
// element's prototype chain. Behaviors are placed in the element prototype
// eldest to youngest and de-duped youngest to oldest:
// So, first [A, B, C, A, B] becomes [C, A, B] then,
// the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
// (3) class(A), (4) class(B), (5) class(Polymer({...})).
// Result:
// This means element properties win over B properties win over A win
// over C. (same as 1.x)
// If lifecycle is called (super then me), order is
// (1) C.created, (2) A.created, (3) B.created, (4) element.created
// (again same as 1.x)
function(t,e,i){for(let r=0;r<e.length;r++)sn(t,e[r],i,sr)}(e,r,n),sn(e,t,n,si)};return iT||o(s.prototype),s.generatedFrom=t,s}(t,i,t.behaviors)).is=i.prototype.is=t.is,i)};const sc=ij(t=>/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */class extends t{/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */_shouldPropertyChange(t,e,i){return sl(this,t,e,i,!0)}}),sd=ij(t=>/**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */class extends t{/** @nocollapse */static get properties(){return{/**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */mutableData:Boolean}}/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * When `this.mutableData` is true on this instance, this method
     * pulls the value to dirty check against from the `__dataTemp` cache
     * (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */_shouldPropertyChange(t,e,i){return sl(this,t,e,i,this.mutableData)}});// Export for use by legacy behavior
sc._mutablePropertyChange=sl;// Base class for HTMLTemplateElement extension that has property effects
// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
let sh=null;/**
 * @constructor
 * @extends {HTMLTemplateElement}
 * @private
 */function sp(){return sh}sp.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:sp,writable:!0}});/**
 * @constructor
 * @implements {Polymer_PropertyEffects}
 * @extends {HTMLTemplateElementExtension}
 * @private
 */const su=rK(sp),sf=sc(su),sm=rK(class{});function s_(t,e){for(let i=0;i<e.length;i++){let r=e[i];// Ignore non-changes
if(!!t!=!!r.__hideTemplateChildren__){// clear and restore text
if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName){if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),iQ(iQ(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{let t=r.__polymerReplaced__;t&&iQ(iQ(t).parentNode).replaceChild(r,t)}}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__)}r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}/**
 * @polymer
 * @customElement
 * @appliesMixin PropertyEffects
 * @unrestricted
 */class sy extends sm{constructor(t){super(),this._configureProperties(t),/** @type {!StampedTemplate} */this.root=this._stampTemplate(this.__dataHost);// Save list of stamped children
let e=[];/** @suppress {invalidCasts} */this.children=/** @type {!NodeList} */e;// Polymer 1.x did not use `Polymer.dom` here so not bothering.
for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}/**
   * Configure the given `props` by calling `_setPendingProperty`. Also
   * sets any properties stored in `__hostProps`.
   * @private
   * @param {Object} props Object of property name-value pairs to set.
   * @return {void}
   */_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(let e in t)this._setPendingProperty(e,t[e])}/**
   * Forwards a host property to this instance.  This method should be
   * called on instances from the `options.forwardHostProp` callback
   * to propagate changes of host properties to each instance.
   *
   * Note this method enqueues the change, which are flushed as a batch.
   *
   * @param {string} prop Property or path name
   * @param {*} value Value of the property to forward
   * @return {void}
   */forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}/**
   * Override point for adding custom or simulated event handling.
   *
   * @override
   * @param {!Node} node Node to add event listener to
   * @param {string} eventName Name of event
   * @param {function(!Event):void} handler Listener function to add
   * @return {void}
   */_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)// events this template instance as `model`
this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{// Otherwise delegate to the template's host (which could be)
// another template instance
let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,i)}}/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hide Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */_showHideChildren(t){s_(t,this.children)}/**
   * Overrides default property-effects implementation to intercept
   * textContent bindings while children are "hidden" and cache in
   * private storage for later retrieval.
   *
   * @override
   * @param {!Node} node The node to set a property on
   * @param {string} prop The property to set
   * @param {*} value The value to set
   * @return {void}
   * @protected
   */_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}/**
   * Find the parent model of this template instance.  The parent model
   * is either another templatize instance that had option `parentModel: true`,
   * or else the host element.
   *
   * @return {!Polymer_PropertyEffects} The parent model of this instance
   */get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do // `model.__dataHost.__dataHost` is the template's host
t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel)this.__parentModel=t}return t}/**
   * Stub of HTMLElement's `dispatchEvent`, so that effects that may
   * dispatch events safely no-op.
   *
   * @param {Event} event Event to dispatch
   * @return {boolean} Always true.
   * @override
   */dispatchEvent(t){return!0}}/** @type {!DataTemplate} */sy.prototype.__dataHost,/** @type {!TemplatizeOptions} */sy.prototype.__templatizeOptions,/** @type {!Polymer_PropertyEffects} */sy.prototype._methodHost,/** @type {!Object} */sy.prototype.__templatizeOwner,/** @type {!Object} */sy.prototype.__hostProps;/**
 * @constructor
 * @extends {TemplateInstanceBase}
 * @implements {Polymer_MutableData}
 * @private
 */const sv=sc(// TemplateInstanceBase is a constructor function.
/** @type {function(new:TemplateInstanceBase)} */sy);function sg(t){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
let e=t.__dataHost;return e&&e._methodHost||e}function sb(t,e,i){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(iz&&!sg(t))throw Error("strictTemplatePolicy: template owner not trusted");if(i=/** @type {!TemplatizeOptions} */i||{},t.__templatizeOwner)throw Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=e?e.constructor:sy,n=r._parseTemplate(t),s=n.templatizeInstanceClass;if(!s){var o;let e,r;e=(o=i).mutableData?sv:sy,sb.mixin&&(e=sb.mixin(e)),/** @override */(r=class extends e{}).prototype.__templatizeOptions=o,r.prototype._bindTemplate(t),function(t,e,i,r){let n=i.hostProps||{};for(let e in r.instanceProps){delete n[e];let i=r.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e){return function(t,i,r){e.call(t.__templatizeOwner,t,i,r[i])}}(0,i)})}if(r.forwardHostProp&&e.__dataHost)for(let e in n)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(r,t,n,o),s=r,n.templatizeInstanceClass=s}let a=sg(t);!// Host property forwarding must be installed onto template instance
/**
 * Adds propagate effects from the template to the template instance for
 * properties that the host binds to the template using the `_host_` prefix.
 *
 * @suppress {missingProperties} class.prototype is not defined for some reason
 */function(t,e,i,r){let n=i.forwardHostProp;if(n&&e.hasHostProps){// Under the `removeNestedTemplates` optimization, a custom element like
// `dom-if` or `dom-repeat` can itself be treated as the "template"; this
// flag is used to switch between upgrading a `<template>` to be a property
// effects client vs. adding the effects directly to the custom element
let o="template"==t.localName,a=e.templatizeTemplateClass;if(!a){if(o){/**
         * @constructor
         * @extends {DataTemplate}
         */let t=i.mutableData?sf:su;a=e.templatizeTemplateClass=// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */class extends t{}}else{/**
         * @constructor
         * @extends {PolymerElement}
         */let i=t.constructor;a=e.templatizeTemplateClass=// Create a cached subclass of the base custom element class onto which
// to put the template-specific propagate effects
// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */class extends i{}}// Add template - >instances effects
// and host <- template effects
let s=e.hostProps;for(let t in s)a.prototype._addPropertyEffect("_host_"+t,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:/* eslint-enable valid-jsdoc */function(t,e){return function(t,i,r){e.call(t.__templatizeOwner,i.substring(6),r[i])}}(0,n)}),a.prototype._createNotifyingProperty("_host_"+t);iM&&r&&function(t,e,i){let r=i.constructor._properties,{propertyEffects:n}=t,{instanceProps:s}=e;for(let t in n)// host (`methodHost`), unless they are instance props or static functions
if(!r[t]&&!(s&&s[t])){let e=n[t];for(let i=0;i<e.length;i++){let{part:r}=e[i].info;if(!(r.signature&&r.signature.static)){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,i,r)}if(t.__dataProto&&// to not be since this is a vanilla template we just added effects to
Object.assign(t.__data,t.__dataProto),o){var s;s=a,sh=t,Object.setPrototypeOf(t,s.prototype),new s,sh=null,// Clear any pending data for performance
t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}else{// Swizzle the cached subclass prototype onto the custom element
Object.setPrototypeOf(t,a.prototype);// Check for any pre-bound instance host properties, and do the
// instance property delete/assign dance for those (directly into data;
// not need to go through accessor since they are pulled at instance time)
let i=e.hostProps;for(let e in i)if((e="_host_"+e)in t){let i=t[e];delete t[e],t.__data[e]=i}}}}(t,n,i,a);// Subclass base class and add reference for this specific template
/** @private */let l=class extends s{};return(/** @override */l.prototype._methodHost=a,/** @override */l.prototype.__dataHost=/** @type {!DataTemplate} */t,/** @override */l.prototype.__templatizeOwner=/** @type {!Object} */e,/** @override */l.prototype.__hostProps=n.hostProps,l)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * @fileoverview
 *
 * Module to hide `<dom-bind>`, `<dom-if>`, and `<dom-repeat>` elements
 * optimally in ShadyDOM
 */let sw=!1;function sx(){if(iT&&!iC){if(!sw){sw=!0;let t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
 * @constructor
 * @extends {HTMLElement}
 * @implements {Polymer_PropertyEffects}
 * @implements {Polymer_OptionalMutableData}
 * @implements {Polymer_GestureEventListeners}
 * @private
 */const sC=nM(sd(rK(HTMLElement)));customElements.define("dom-bind",class extends sC{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),iz)throw Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}/* eslint-disable no-unused-vars *//**
   * @override
   * @param {string} name Name of attribute that changed
   * @param {?string} old Old attribute value
   * @param {?string} value New attribute value
   * @param {?string} namespace Attribute namespace.
   * @return {void}
   */attributeChangedCallback(t,e,i,r){// assumes only one observed attribute
this.mutableData=!0}/**
   * @override
   * @return {void}
   */connectedCallback(){sx()||(this.style.display="none"),this.render()}/**
   * @override
   * @return {void}
   */disconnectedCallback(){this.__removeChildren()}__insertChildren(){iQ(iQ(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}/**
   * Forces the element to render its content. This is typically only
   * necessary to call if HTMLImports with the async attribute are used.
   * @return {void}
   */render(){let t;if(!this.__children){if(!(t=/** @type {?HTMLTemplateElement} */t||this.querySelector("template"))){// Wait until childList changes and template should be there by then
let e=new MutationObserver(()=>{if(t=/** @type {HTMLTemplateElement} */this.querySelector("template"))e.disconnect(),this.render();else throw Error("dom-bind requires a <template> child")});e.observe(this,{childList:!0});return}this.root=this._stampTemplate(/** @type {!HTMLTemplateElement} */t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * Our TrustedTypePolicy for HTML which is declared using the Polymer html
 * template tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 *
 * @type {!TrustedTypePolicy|undefined}
 */const sS=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});/**
 * Class representing a static string value which can be used to filter
 * strings by asseting that they have been created via this class. The
 * `value` property returns the string passed to the constructor.
 */class sP{/**
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {!Array<*>} values Variable parts of tagged template literal
   */constructor(t,e){sz(t,e);let i=e.reduce((e,i,r)=>e+sA(i)+t[r+1],t[0]);/** @type {string} */this.value=i.toString()}/**
   * @return {string} LiteralString string value
   * @override
   */toString(){return this.value}}/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */function sA(t){if(t instanceof sP)return /** @type {!LiteralString} */t.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const sE=function(t,...e){sz(t,e);let i=/** @type {!HTMLTemplateElement} */document.createElement("template"),r=e.reduce((e,i,r)=>e+/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */function(t){if(t instanceof HTMLTemplateElement)// contains untrusted content that was believed to be sanitized.
    // However we can't just use the XMLSerializer here because it misencodes
    // `>` characters inside style tags.
    // For an example of an actual case that hit this encoding issue,
    // see b/198592167
    return /** @type {!HTMLTemplateElement } */t.innerHTML;if(t instanceof sP)return sA(t);throw Error(`non-template value passed to Polymer's html function: ${t}`)}(i)+t[r+1],t[0]);return sS&&(r=sS.createHTML(r)),i.innerHTML=r,i},sz=(t,e)=>{// Note: if/when https://github.com/tc39/proposal-array-is-template-object
// is standardized, use that instead when available, as it can perform an
// unforgable check (though of course, the function itself can be forged).
if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)// calling the html template tag function as a regular function.
//
throw TypeError("Invalid call to the html template tag")},sO=r5(HTMLElement),sT=sd(sO);class sM extends sT{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"dom-repeat"}static get template(){return null}static get properties(){/**
     * Fired whenever DOM is added or removed by this template (by
     * default, rendering occurs lazily).  To force immediate rendering, call
     * `render`.
     *
     * @event dom-change
     */return{/**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */items:{type:Array},/**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */as:{type:String,value:"item"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */indexAs:{type:String,value:"index"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */itemsIndexAs:{type:String,value:"itemsIndex"},/**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */sort:{type:Function,observer:"__sortChanged"},/**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */filter:{type:Function,observer:"__filterChanged"},/**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */observe:{type:String,observer:"__observeChanged"},/**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */delay:Number,/**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */renderedItemCount:{type:Number,notify:!iR,readOnly:!0},/**
       * When greater than zero, defines an initial count of template instances
       * to render after setting the `items` array, before the next paint, and
       * puts the `dom-repeat` into "chunking mode".  The remaining items (and
       * any future items as a result of pushing onto the array) will be created
       * and rendered incrementally at each animation frame thereof until all
       * instances have been rendered.
       */initialCount:{type:Number},/**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},/**
       * When the global `suppressTemplateNotifications` setting is used, setting
       * `notifyDomChange: true` will enable firing `dom-change` events on this
       * element.
       */notifyDomChange:{type:Boolean},/**
       * When chunking is enabled via `initialCount` and the `items` array is
       * set to a new array, this flag controls whether the previously rendered
       * instances are reused or not.
       *
       * When `true`, any previously rendered template instances are updated in
       * place to their new item values synchronously in one shot, and then any
       * further items (if any) are chunked out.  When `false`, the list is
       * returned back to its `initialCount` (any instances over the initial
       * count are discarded) and the remainder of the list is chunked back in.
       * Set this to `true` to avoid re-creating the list and losing scroll
       * position, although note that when changing the list to completely
       * different data the render thread will be blocked until all existing
       * instances are updated to their new data.
       */reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,/** @type {?function(new:TemplateInstanceBase, Object=)} */this.__ctor=null,this.__isDetached=!0,this.template=null,/** @type {TemplateInfo} */this._templateInfo}/**
   * @override
   * @return {void}
   */disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}/**
   * @override
   * @return {void}
   */connectedCallback(){// only perform attachment if the element was previously detached.
if(super.connectedCallback(),sx()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=iQ(iQ(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);// Restart chunking if one was in progress when disconnected
this.__chunkingId&&this.__render()}}__ensureTemplatized(){// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){let t=this.template=/** @type {!HTMLTemplateElement} *//** @type {!HTMLElement} */this._templateInfo?this:/** @type {!HTMLTemplateElement} */this.querySelector("template");if(!t){// Wait until childList changes and template should be there by then
let t=new MutationObserver(()=>{if(this.querySelector("template"))t.disconnect(),this.__render();else throw Error("dom-repeat requires a <template> child")});return t.observe(this,{childList:!0}),!1}// Template instance props that should be excluded from forwarding
let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=sb(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function(t,e){let i=this.__instances;for(let r=0,n;r<i.length&&(n=i[r]);r++)n.forwardHostProp(t,e)},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function(t,e,i){var r;if((r=this.as)===e||i2(r,e)||i5(r,e)){let r=t[this.itemsIndexAs];e==this.as&&(this.items[r]=i);let n=i4(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,e);this.notifyPath(n,i)}}})}return!0}__getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=this.__getMethodHost();return function(){return e[t].apply(e,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(t){if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}/**
   * @param {function(this:DomRepeat)} fn Function to debounce.
   * @param {number=} delay Delay in ms to debounce by.
   */__debounceRender(t,e=0){this.__renderDebouncer=r4.debounce(this.__renderDebouncer,e>0?rd.after(e):rh,t.bind(this)),r6(this.__renderDebouncer)}/**
   * Forces the element to render its content. Normally rendering is
   * asynchronous to a provoking change. This is done for efficiency so
   * that multiple changes trigger only a single render. The render method
   * should be called if, for example, template rendering is required to
   * validate application state.
   * @return {void}
   */render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render),nG()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[],e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);// Create, update, and/or remove instances
this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),// Set rendered item count
this._setRenderedItemCount(this.__instances.length),(!iR||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){// Generate array maping the instance index to the items array index
let e=Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((e,i,r)=>this.__filterFn(t[e],i,r))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i])),e}__calculateLimit(t){let e=t,i=this.__instances.length;// When chunking, we increase the limit from the currently rendered count
// by the chunk count that is re-calculated after each rAF (with special
// cases for resetting the limit to initialCount after changing items)
if(this.initialCount){let r;this.__chunkCount&&(!this.__itemsArrayChanged||this.reuseChunkedInstances)?(// The number of new instances that will be created is based on the
// existing instances, the new list size, and the chunk size
r=Math.min(Math.max(t-i,0),this.__chunkCount),// Update the limit based on how many new items we're making, limited
// buy the total size of the list
e=Math.min(i+r,t)):(// Subtract off any existing instances to determine the number of
// instances that will be created
r=Math.max(// Limit next render to the initial count
(e=Math.min(t,this.initialCount))-i,0),// Initialize the chunk size with how many items we're creating
this.__chunkCount=r||1),// Record some state about chunking for use in `__continueChunking`
this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio of
// target/actual frame time.  Only modify chunk size if our measurement
// reflects the cost of a creating a full chunk's worth of instances; this
// avoids scaling up the chunk size if we e.g. quickly re-rendered instances
// in place
if(this.__shouldMeasureChunk){let t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}// Enqueue a new render if we haven't reached the full size of the list
this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){let r;// items->inst map kept for item path forwarding
let n=this.__itemsIdxToInstIdx={};// Generate instances and assign items
for(r=0;r<e;r++){let e=this.__instances[r],s=i[r],o=t[s];n[s]=r,e?(e._setPendingProperty(this.as,o),e._setPendingProperty(this.indexAs,r),e._setPendingProperty(this.itemsIndexAs,s),e._flushProperties()):this.__insertInstance(o,r,s)}// Remove any extra instances from previous state
for(let t=this.__instances.length-1;t>=r;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t],i=iQ(e.root);for(let t=0;t<e.children.length;t++){let r=e.children[t];i.appendChild(r)}return e}__attachInstance(t,e){let i=this.__instances[t];// Note, this is pre-wrapped as an optimization
e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(t,e,i){let r=this.__stampInstance(t,e,i),n=this.__instances[e+1],s=n?n.children[0]:this;return iQ(iQ(this).parentNode).insertBefore(r.root,s),this.__instances[e]=r,r}// Implements extension point from Templatize mixin
/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
__handleItemPath(t,e){let i=t.slice(6),r=i.indexOf("."),n=r<0?i:i.substring(0,r);// 'items.'.length == 6
// If path was index into array...
if(n==parseInt(n,10)){let t=r<0?"":i.substring(r+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(t);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
let s=this.__itemsIdxToInstIdx[n],o=this.__instances[s];if(o){let i=this.as+(t?"."+t:"");// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
o._setPendingPropertyOrPath(i,e,!1,!0),o._flushProperties()}return!0}}/**
   * Returns the item associated with a given element stamped by
   * this `dom-repeat`.
   *
   * Note, to modify sub-properties of the item,
   * `modelForElement(el).set('item.<sub-prop>', value)`
   * should be used.
   *
   * @param {!HTMLElement} el Element for which to return the item.
   * @return {*} Item associated with the element.
   */itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}/**
   * Returns the inst index for a given element stamped by this `dom-repeat`.
   * If `sort` is provided, the index will reflect the sorted order (rather
   * than the original array order).
   *
   * @param {!HTMLElement} el Element for which to return the index.
   * @return {?number} Row index associated with the element (note this may
   *   not correspond to the array index if a user `sort` is applied).
   */indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model
   * should be used to manipulate data associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {!HTMLElement} el Element for which to return a template model.
   * @return {TemplateInstanceBase} Model representing the binding scope for
   *   the element.
   */modelForElement(t){return function(t,e){let i;for(;e;)// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(i=e.__dataHost?e:e.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(i.__dataHost==t)return i;e=i.__dataHost}else // a __templatizeInstance is found
e=iQ(e).parentNode;return null}(this.template,t)}}customElements.define(sM.is,sM);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
 * @customElement
 * @polymer
 * @extends PolymerElement
 * @summary Base class for dom-if element; subclassed into concrete
 *   implementation.
 */class sH extends sO{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"dom-if"}static get template(){return null}static get properties(){return{/**
       * Fired whenever DOM is added or removed/hidden by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       *//**
       * A boolean indicating whether this template should stamp.
       */if:{type:Boolean,observer:"__debounceRender"},/**
       * When true, elements will be removed from DOM and discarded when `if`
       * becomes false and re-created and added back to the DOM when `if`
       * becomes true.  By default, stamped elements will be hidden but left
       * in the DOM when `if` becomes false, which is generally results
       * in better performance.
       */restamp:{type:Boolean,observer:"__debounceRender"},/**
       * When the global `suppressTemplateNotifications` setting is used, setting
       * `notifyDomChange: true` will enable firing `dom-change` events on this
       * element.
       */notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,/** @type {!HTMLTemplateElement|undefined} */this.__template,/** @type {!TemplateInfo|undefined} */this._templateInfo}__debounceRender(){// Render is async for 2 reasons:
// 1. To eliminate dom creation trashing if user code thrashes `if` in the
//    same turn. This was more common in 1.x where a compound computed
//    property could result in the result changing multiple times, but is
//    mitigated to a large extent by batched property processing in 2.x.
// 2. To avoid double object propagation when a bag including values bound
//    to the `if` property as well as one or more hostProps could enqueue
//    the <dom-if> to flush before the <template>'s host property
//    forwarding. In that scenario creating an instance would result in
//    the host props being set once, and then the enqueued changes on the
//    template would set properties a second time, potentially causing an
//    object to be set to an instance more than once.  Creating the
//    instance async from flushing data ensures this doesn't happen. If
//    we wanted a sync option in the future, simply having <dom-if> flush
//    (or clear) its template's pending host properties before creating
//    the instance would also avoid the problem.
this.__renderDebouncer=r4.debounce(this.__renderDebouncer,rh,()=>this.__render()),r6(this.__renderDebouncer)}/**
   * @override
   * @return {void}
   */disconnectedCallback(){super.disconnectedCallback();let t=iQ(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||iQ(t).host)||this.__teardownInstance()}/**
   * @override
   * @return {void}
   */connectedCallback(){super.connectedCallback(),sx()||(this.style.display="none"),this.if&&this.__debounceRender()}/**
   * Ensures a template has been assigned to `this.__template`.  If it has not
   * yet been, it querySelectors for it in its children and if it does not yet
   * exist (e.g. in parser-generated case), opens a mutation observer and
   * waits for it to appear (returns false if it has not yet been found,
   * otherwise true).  In the `removeNestedTemplates` case, the "template" will
   * be the `dom-if` element itself.
   *
   * @return {boolean} True when a template has been found, false otherwise
   */__ensureTemplate(){if(!this.__template){let t=/** @type {!HTMLTemplateElement} *//** @type {!HTMLElement} */this._templateInfo?this:iQ(this).querySelector("template");if(!t){// Wait until childList changes and template should be there by then
let t=new MutationObserver(()=>{if(iQ(this).querySelector("template"))t.disconnect(),this.__render();else throw Error("dom-if requires a <template> child")});return t.observe(this,{childList:!0}),!1}this.__template=t}return!0}/**
   * Ensures a an instance of the template has been created and inserted. This
   * method may return false if the template has not yet been found or if
   * there is no `parentNode` to insert the template into (in either case,
   * connection or the template-finding mutation observer firing will queue
   * another render, causing this method to be called again at a more
   * appropriate time).
   *
   * Subclasses should implement the following methods called here:
   * - `__hasInstance`
   * - `__createAndInsertInstance`
   * - `__getInstanceNodes`
   *
   * @return {boolean} True if the instance was created, false otherwise.
   */__ensureInstance(){let t=iQ(this).parentNode;if(this.__hasInstance()){// Move instance children if necessary
let e=this.__getInstanceNodes();if(e&&e.length&&iQ(this).previousSibling!==e[e.length-1])for(let i=0,r;i<e.length&&(r=e[i]);i++)iQ(t).insertBefore(r,this)}else{// Guard against element being detached while render was queued
if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}/**
   * Forces the element to render its content. Normally rendering is
   * asynchronous to a provoking change. This is done for efficiency so
   * that multiple changes trigger only a single render. The render method
   * should be called if, for example, template rendering is required to
   * validate application state.
   *
   * @return {void}
   */render(){nG()}/**
   * Performs the key rendering steps:
   * 1. Ensure a template instance has been stamped (when true)
   * 2. Remove the template instance (when false and restamp:true)
   * 3. Sync the hidden state of the instance nodes with the if/restamp state
   * 4. Fires the `dom-change` event when necessary
   *
   * @return {void}
   */__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!iR||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}// Ideally these would be annotated as abstract methods in an abstract class,
// but closure compiler is finnicky
/* eslint-disable valid-jsdoc *//**
   * Abstract API to be implemented by subclass: Returns true if a template
   * instance has been created and inserted.
   *
   * @protected
   * @return {boolean} True when an instance has been created.
   */__hasInstance(){}/**
   * Abstract API to be implemented by subclass: Returns the child nodes stamped
   * from a template instance.
   *
   * @protected
   * @return {Array<Node>} Array of child nodes stamped from the template
   * instance.
   */__getInstanceNodes(){}/**
   * Abstract API to be implemented by subclass: Creates an instance of the
   * template and inserts it into the given parent node.
   *
   * @protected
   * @param {Node} parentNode The parent node to insert the instance into
   * @return {void}
   */__createAndInsertInstance(t){}/**
   * Abstract API to be implemented by subclass: Removes nodes created by an
   * instance of a template and any associated cleanup.
   *
   * @protected
   * @return {void}
   */__teardownInstance(){}/**
   * Abstract API to be implemented by subclass: Shows or hides any template
   * instance childNodes based on the `if` state of the element and its
   * `__hideTemplateChildren__` property.
   *
   * @protected
   * @return {void}
   */_showHideChildren(){}}const sI=i$?/**
 * The version of DomIf used when `fastDomIf` setting is in use, which is
 * optimized for first-render (but adds a tax to all subsequent property updates
 * on the host, whether they were used in a given `dom-if` or not).
 *
 * This implementation avoids use of `Templatizer`, which introduces a new scope
 * (a non-element PropertyEffects instance), which is not strictly necessary
 * since `dom-if` never introduces new properties to its scope (unlike
 * `dom-repeat`). Taking advantage of this fact, the `dom-if` reaches up to its
 * `__dataHost` and stamps the template directly from the host using the host's
 * runtime `_stampTemplate` API, which binds the property effects of the
 * template directly to the host. This both avoids the intermediary
 * `Templatizer` instance, but also avoids the need to bind host properties to
 * the `<template>` element and forward those into the template instance.
 *
 * In this version of `dom-if`, the `this.__instance` method is the
 * `DocumentFragment` returned from `_stampTemplate`, which also serves as the
 * handle for later removing it using the `_removeBoundDom` method.
 */class extends sH{constructor(){super(),this.__instance=null,this.__syncInfo=null}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * @override
   * @return {boolean} True when an instance has been created.
   */__hasInstance(){return!!this.__instance}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * @override
   * @return {Array<Node>} Array of child nodes stamped from the template
   * instance.
   */__getInstanceNodes(){return this.__instance.templateInfo.childNodes}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * Stamps the template by calling `_stampTemplate` on the `__dataHost` of this
   * element and then inserts the resulting nodes into the given `parentNode`.
   *
   * @override
   * @param {Node} parentNode The parent node to insert the instance into
   * @return {void}
   */__createAndInsertInstance(t){let e=this.__dataHost||this;if(iz&&!this.__dataHost)throw Error("strictTemplatePolicy: template owner not trusted");// Pre-bind and link the template into the effects system
let i=e._bindTemplate(/** @type {!HTMLTemplateElement} */this.__template,!0);// Install runEffects hook that prevents running property effects
// (and any nested template effects) when the `if` is false
i.runEffects=(t,e,i)=>{let r=this.__syncInfo;if(this.if)r&&(// If there were properties received while the `if` was false, it is
// important to sync the hidden state with the element _first_, so that
// new bindings to e.g. `textContent` do not get stomped on by
// pre-hidden values if `_showHideChildren` were to be called later at
// the next render. Clearing `__invalidProps` here ensures
// `_showHideChildren`'s call to `__syncHostProperties` no-ops, so
// that we don't call `runEffects` more often than necessary.
this.__syncInfo=null,this._showHideChildren(),e=Object.assign(r.changedProps,e)),t(e,i);else // runEffects method to sync them, so that we can replay them once `if`
// becomes true
if(this.__instance){if(r||(r=this.__syncInfo={runEffects:t,changedProps:{}}),i)// like [[obj.foo]] bindings run after a `set('obj.foo', v)`, but
// note that path notifications like `set('obj.foo.bar', v)` will
// not propagate. Since batched path notifications are not
// supported, we cannot simply accumulate path notifications. This
// is equivalent to the non-fastDomIf case, which stores root(p) in
// __invalidProps.
for(let t in e){let e=i0(t);r.changedProps[e]=this.__dataHost[e]}else Object.assign(r.changedProps,e)}},// Stamp the template, and set its DocumentFragment to the "instance"
this.__instance=e._stampTemplate(/** @type {!HTMLTemplateElement} */this.__template,i),iQ(t).insertBefore(this.__instance,this)}/**
   * Run effects for any properties that changed while the `if` was false.
   *
   * @return {void}
   */__syncHostProperties(){let t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * Remove the instance and any nodes it created.  Uses the `__dataHost`'s
   * runtime `_removeBoundDom` method.
   *
   * @override
   * @return {void}
   */__teardownInstance(){let t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * Shows or hides the template instance top level child nodes. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   *
   * @override
   * @return {void}
   * @protected
   * @suppress {visibility}
   */_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,s_(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:/**
 * The "legacy" implementation of `dom-if`, implemented using `Templatizer`.
 *
 * In this version, `this.__instance` is the `TemplateInstance` returned
 * from the templatized constructor.
 */class extends sH{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * @override
   * @return {boolean} True when an instance has been created.
   */__hasInstance(){return!!this.__instance}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * @override
   * @return {Array<Node>} Array of child nodes stamped from the template
   * instance.
   */__getInstanceNodes(){return this.__instance.children}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * Stamps the template by creating a new instance of the templatized
   * constructor (which is created lazily if it does not yet exist), and then
   * inserts its resulting `root` doc fragment into the given `parentNode`.
   *
   * @override
   * @param {Node} parentNode The parent node to insert the instance into
   * @return {void}
   */__createAndInsertInstance(t){this.__ctor||(this.__ctor=sb(/** @type {!HTMLTemplateElement} */this.__template,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:!0,/**
             * @param {string} prop Property to forward
             * @param {*} value Value of property
             * @this {DomIfLegacy}
             */forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[i0(t)]=!0))}})),// Create and insert the instance
this.__instance=new this.__ctor,iQ(t).insertBefore(this.__instance.root,this)}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * Removes the instance and any nodes it created.
   *
   * @override
   * @return {void}
   */__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){// use first child parent, for case when dom-if may have been detached
let e=iQ(t[0]).parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(e){e=iQ(e);for(let i=0,r;i<t.length&&(r=t[i]);i++)e.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}/**
   * Forwards any properties that changed while the `if` was false into the
   * template instance and flushes it.
   *
   * @return {void}
   */__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in this.__invalidProps=null,t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   *
   * @override
   * @protected
   * @return {void}
   * @suppress {visibility}
   */_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(sI.is,sI);/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {Polymer_ArraySelectorMixin}
 * @private
 */let sk=ij(t=>{/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @private
   */let e=r5(t);return(/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_ArraySelectorMixin}
   * @unrestricted
   */class extends e{static get properties(){return{/**
         * An array containing items from which selection will be made.
         */items:{type:Array},/**
         * When `true`, multiple items may be selected at once (in this case,
         * `selected` is an array of currently selected items).  When `false`,
         * only one item may be selected at a time.
         */multi:{type:Boolean,value:!1},/**
         * When `multi` is true, this is an array that contains any selected.
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object|?Array<!Object>}
         */selected:{type:Object,notify:!0},/**
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object}
         */selectedItem:{type:Object,notify:!0},/**
         * When `true`, calling `select` on an item that is already selected
         * will deselect the item.
         */toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
let i=e.base||[],r=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),r){let t=nq(i,r);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)// deselect any removed items and adjust selected indices
this.__applySplices(e.value.indexSplices);else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
let t=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);0>t.indexOf(".")&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;// Adjust selected indices and mark removals
for(let i=0;i<t.length;i++){let r=t[i];e.forEach((t,i)=>{t<r.index||(t>=r.index+r.removed.length?e.set(i,t+r.addedCount-r.removed.length):e.set(i,-1))});for(let t=0;t<r.addedCount;t++){let i=r.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
let i=0;e.forEach((t,r)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(r)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}/**
     * Clears the selection state.
     * @override
     * @return {void}
     */clearSelection(){// Unbind previous selection
this.__dataLinkedPaths={},// The selected map stores 3 pieces of information:
// key: items array object
// value: items array index
// order: selected array index
this.__selectedMap=new Map,// Initialize selection
this.selected=this.multi?[]:null,this.selectedItem=null}/**
     * Returns whether the item is currently selected.
     *
     * @override
     * @param {*} item Item from `items` array to test
     * @return {boolean} Whether the item is selected
     */isSelected(t){return this.__selectedMap.has(t)}/**
     * Returns whether the item is currently selected.
     *
     * @override
     * @param {number} idx Index from `items` array to test
     * @return {boolean} Whether the item is selected
     */isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,r)=>{e==t++&&this.deselect(r)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}/**
     * Deselects the given item if it is already selected.
     *
     * @override
     * @param {*} item Item from `items` array to deselect
     * @return {void}
     */deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}/**
     * Deselects the given index if it is already selected.
     *
     * @override
     * @param {number} idx Index from `items` array to deselect
     * @return {void}
     */deselectIndex(t){this.deselect(this.items[t])}/**
     * Selects the given item.  When `toggle` is true, this will automatically
     * deselect the item if already selected.
     *
     * @override
     * @param {*} item Item from `items` array to select
     * @return {void}
     */select(t){this.selectIndex(this.items.indexOf(t))}/**
     * Selects the given index.  When `toggle` is true, this will automatically
     * deselect the item if already selected.
     *
     * @override
     * @param {number} idx Index from `items` array to select
     * @return {void}
     */selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}})})(sO);/**
 * Element implementing the `ArraySelector` mixin, which records
 * dynamic associations between item paths in a master `items` array and a
 * `selected` array such that path changes to the master array (at the host)
 * element or elsewhere via data-binding) are correctly propagated to items
 * in the selected array and vice-versa.
 *
 * The `items` property accepts an array of user data, and via the
 * `select(item)` and `deselect(item)` API, updates the `selected` property
 * which may be bound to other parts of the application, and any changes to
 * sub-fields of `selected` item(s) will be kept in sync with items in the
 * `items` array.  When `multi` is false, `selected` is a property
 * representing the last selected item.  When `multi` is true, `selected`
 * is an array of multiply selected items.
 *
 * Example:
 *
 * ```js
 * import {PolymerElement} from '@polymer/polymer';
 * import '@polymer/polymer/lib/elements/array-selector.js';
 *
 * class EmployeeList extends PolymerElement {
 *   static get _template() {
 *     return html`
 *         <div> Employee list: </div>
 *         <dom-repeat id="employeeList" items="{{employees}}">
 *           <template>
 *             <div>First name: <span>{{item.first}}</span></div>
 *               <div>Last name: <span>{{item.last}}</span></div>
 *               <button on-click="toggleSelection">Select</button>
 *           </template>
 *         </dom-repeat>
 *
 *         <array-selector id="selector"
 *                         items="{{employees}}"
 *                         selected="{{selected}}"
 *                         multi toggle></array-selector>
 *
 *         <div> Selected employees: </div>
 *         <dom-repeat items="{{selected}}">
 *           <template>
 *             <div>First name: <span>{{item.first}}</span></div>
 *             <div>Last name: <span>{{item.last}}</span></div>
 *           </template>
 *         </dom-repeat>`;
 *   }
 *   static get is() { return 'employee-list'; }
 *   static get properties() {
 *     return {
 *       employees: {
 *         value() {
 *           return [
 *             {first: 'Bob', last: 'Smith'},
 *             {first: 'Sally', last: 'Johnson'},
 *             ...
 *           ];
 *         }
 *       }
 *     };
 *   }
 *   toggleSelection(e) {
 *     const item = this.$.employeeList.itemForElement(e.target);
 *     this.$.selector.select(item);
 *   }
 * }
 * ```
 *
 * @polymer
 * @customElement
 * @extends {baseArraySelector}
 * @appliesMixin ArraySelectorMixin
 * @summary Custom element that links paths between an input `items` array and
 *   an output `selected` item or array based on calls to its selection API.
 */class sN extends sk{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"array-selector"}static get template(){return null}}customElements.define(sN.is,sN);const s$=new i_;window.ShadyCSS||(window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate(t,e,i){},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom(t,e){},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles(t,e,i){},/**
     * @param {Element} element
     * @param {Object=} properties
     */styleSubtree(t,e){s$.processStyles(),e5(t,e)},/**
     * @param {Element} element
     */// eslint-disable-next-line @typescript-eslint/no-unused-vars
styleElement(t){s$.processStyles()},/**
     * @param {Object=} properties
     */styleDocument(t){s$.processStyles(),e5(document.body,t)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:(t,e)=>e4(t,e),flushCustomStyles(){},nativeCss:eL,nativeShadow:eN,cssBuild:i,disableRuntime:eR}),window.ShadyCSS.CustomStyleInterface=s$;const sR="include",sL=window.ShadyCSS.CustomStyleInterface;class sD extends HTMLElement{constructor(){super(),this._style=null,sL.addCustomStyle(this)}/**
   * Returns the light-DOM `<style>` child this element wraps.  Upon first
   * call any style modules referenced via the `include` attribute will be
   * concatenated to this element's `<style>`.
   *
   * @export
   * @return {HTMLStyleElement} This element's light-DOM `<style>`
   */getStyle(){if(this._style)return this._style;let t=/** @type {HTMLStyleElement} */this.querySelector("style");if(!t)return null;this._style=t;let e=t.getAttribute(sR);return e&&(t.removeAttribute(sR),/** @suppress {deprecated} */t.textContent=function(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=function(t){let e=iX(t);if(e&&void 0===e._cssText){// module imports: <link rel="import" type="css">
let t=/**
 * @deprecated
 * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
 * @return {string} Concatenated CSS content from links in the dom-module
 */function(t){let e="",i=iZ(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}(e),i=/** @type {?HTMLTemplateElement} */e.querySelector("template");i&&(t+=function(t,e){let i="",r=iK(t,e);// if element is a template, get content from its .content
for(let t=0;t<r.length;t++){let e=r[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,/** @type {templateWithAssetPath} */e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}(e[t]);return i}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",sD),sc._mutablePropertyChange;const sV=st(HTMLElement).prototype,sF=sE`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;sF.setAttribute("style","display: none;"),document.head.appendChild(sF.content);var sj=document.createElement("style");sj.textContent="[hidden] { display: none !important; }",document.head.appendChild(sj);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class sU{/**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */constructor(t){sU[" "](t),/** @type {string} */this.type=t&&t.type||"default",/** @type {string|null|undefined} */this.key=t&&t.key,t&&"value"in t&&/** @type {*} */(this.value=t.value)}/** @return {*} */get value(){var t=this.type,e=this.key;if(t&&e)return sU.types[t]&&sU.types[t][e]}/** @param {*} value */set value(t){var e=this.type,i=this.key;e&&i&&(e=sU.types[e]=sU.types[e]||{},null==t?delete e[i]:e[i]=t)}/** @return {!Array<*>} */get list(){if(this.type){var t=sU.types[this.type];return t?Object.keys(t).map(function(t){return sB[this.type][t]},this):[]}}/**
   * @param {string} key
   * @return {*}
   */byKey(t){return this.key=t,this.value}}// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
sU[" "]=function(){},sU.types={};var sB=sU.types;sa({is:"iron-meta",properties:{/**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */type:{type:String,value:"default"},/**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */key:{type:String},/**
     * The meta-data to store or retrieve.
     * @type {*}
     */value:{type:String,notify:!0},/**
     * If true, `value` is set to the iron-meta instance itself.
     */self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var r=new sU({type:t,key:e});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},/**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */byKey:function(t){return new sU({type:this.type,key:t}).value}}),sa({_template:sE`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{/**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */icon:{type:String},/**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */theme:{type:String},/**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */src:{type:String},/**
     * @type {!IronMeta}
     */_meta:{value:sV.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},/** @suppress {visibility} */_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&n2(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=/** @type {?Polymer.Iconset} */this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,n2(this.root).appendChild(this._img))}}),sa({is:"iron-iconset-svg",properties:{/**
     * The name of the iconset.
     */name:{type:String,observer:"_nameChanged"},/**
     * The size of an individual icon. Note that icons must be square.
     */size:{type:Number,value:24},/**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */rtlMirroring:{type:Boolean,value:!1},/**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new sU({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},/**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(t){return this.name+":"+t},this)},/**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */applyIcon:function(t,e){// Remove old svg element
this.removeIcon(t);// install new svg element
var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){// insert svg element into shadow root, if it exists
var r=n2(t.root||t);return r.insertBefore(i,r.childNodes[0]),t._svgIcon=i}return null},/**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */removeIcon:function(t){// Remove old svg element
t._svgIcon&&(n2(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},/**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */_targetIsRTL:function(t){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction}return this.__targetIsRTL},/**
   *
   * When name is changed, register iconset metadata
   *
   */_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},/**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */_createIconMap:function(){// Objects chained to Object.prototype (`{}`) have members. Specifically,
// on FF there is a `watch` method that confuses the icon map, so we
// need to use a null-based object here.
var t=Object.create(null);return n2(this).querySelectorAll("[id]").forEach(function(e){t[e.id]=e}),t},/**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */_cloneIcon:function(t,e){return(// create the icon map on-demand, since the iconset itself has no discrete
// signal to know when it's children are fully parsed
this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e))},/**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */_prepareSvgClone:function(t,e,i){if(t){var r=t.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=r.getAttribute("viewBox")||"0 0 "+e+" "+e,o="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&r.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",s),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),// TODO(dfreedm): `pointer-events: none` works around
// https://crbug.com/370136
// TODO(sjmiles): inline style may not be ideal, but avoids requiring a
// shadow-root
n.style.cssText=o,n.appendChild(r).removeAttribute("id"),n}return null}});const sq=sE`<iron-iconset-svg name="social" size="24">
<svg><defs>
<g id="cake"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"></path></g>
<g id="domain"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
<g id="group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="group-add"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></g>
<g id="location-city"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></g>
<g id="mood"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="mood-bad"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="notifications"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g>
<g id="notifications-active"><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path></g>
<g id="notifications-none"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></g>
<g id="notifications-off"><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"></path></g>
<g id="notifications-paused"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"></path></g>
<g id="pages"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"></path></g>
<g id="party-mode"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"></path></g>
<g id="people"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="people-outline"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></g>
<g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-add"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-outline"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="plus-one"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"></path></g>
<g id="poll"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="public"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></g>
<g id="school"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></g>
<g id="sentiment-dissatisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path></g>
<g id="sentiment-neutral"><path d="M9 14h6v1.5H9z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="sentiment-satisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"></path></g>
<g id="sentiment-very-dissatisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="sentiment-very-satisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></g>
<g id="whatshot"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(sq.content);/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const sY=sE`<iron-iconset-svg name="av" size="24">
<svg><defs>
<g id="add-to-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></g>
<g id="airplay"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="album"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="art-track"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></g>
<g id="av-timer"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></g>
<g id="branding-watermark"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></g>
<g id="call-to-action"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></g>
<g id="closed-caption"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></g>
<g id="equalizer"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></g>
<g id="explicit"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></g>
<g id="fast-forward"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></g>
<g id="fast-rewind"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></g>
<g id="featured-play-list"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></g>
<g id="featured-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></g>
<g id="fiber-dvr"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></g>
<g id="fiber-manual-record"><circle cx="12" cy="12" r="8"></circle></g>
<g id="fiber-new"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></g>
<g id="fiber-pin"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></g>
<g id="fiber-smart-record"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></g>
<g id="forward-10"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="forward-30"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></g>
<g id="forward-5"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></g>
<g id="games"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="hd"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></g>
<g id="hearing"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"></path></g>
<g id="high-quality"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></g>
<g id="library-add"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="library-books"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></g>
<g id="library-music"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></g>
<g id="loop"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-none"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-off"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></g>
<g id="movie"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="music-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path></g>
<g id="new-releases"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="not-interested"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="note"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></g>
<g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>
<g id="pause-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></g>
<g id="pause-circle-outline"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></g>
<g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>
<g id="play-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></g>
<g id="play-circle-outline"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="playlist-add"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></g>
<g id="playlist-add-check"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></g>
<g id="playlist-play"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></g>
<g id="queue"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="queue-music"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></g>
<g id="queue-play-next"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></g>
<g id="radio"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></g>
<g id="recent-actors"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></g>
<g id="remove-from-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></g>
<g id="repeat"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>
<g id="repeat-one"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></g>
<g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>
<g id="replay-10"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-30"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-5"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></g>
<g id="shuffle"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></g>
<g id="skip-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></g>
<g id="skip-previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></g>
<g id="slow-motion-video"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></g>
<g id="snooze"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></g>
<g id="sort-by-alpha"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></g>
<g id="stop"><path d="M6 6h12v12H6z"></path></g>
<g id="subscriptions"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></g>
<g id="subtitles"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></g>
<g id="surround-sound"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="video-call"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
<g id="video-label"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></g>
<g id="video-library"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
<g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
<g id="videocam-off"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></g>
<g id="volume-down"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></g>
<g id="volume-mute"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></g>
<g id="volume-off"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></g>
<g id="volume-up"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g>
<g id="web"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></g>
<g id="web-asset"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(sY.content);const sJ=t4(({icon:t,label:e})=>te`
  <style>
    :host {
      display: var(--layout-vertical_-_display);
      flex-direction: var(--layout-vertical_-_flex-direction);
    }

    .header {
      color: var(--dash-section-color, black);
      margin-bottom: 12px;
      display: var(--layout-horizontal_-_display);
      flex-direction: var(--layout-horizontal_-_flex-direction);
      align-items: var(--layout-center-center_-_align-items);
      justify-content: var(--layout-center-center_-_justify-content);
    }

    .icon {
      width: 36px;
      height: 36px;
      margin-right: 4px;
    }

    .label {
      font-weight: 900;
      font-size: 36px;
      text-transform: uppercase;
    }
  </style>

  <div class="header">
    <iron-icon class="icon" icon="${t}"></iron-icon>
    <div class="label">${e}</div>
  </div>

  <slot></slot>
`,{observedAttributes:["icon","label"]});customElements.define("dash-section",sJ);//# sourceMappingURL=live-controls.e89d785c.js.map

//# sourceMappingURL=live-controls.e89d785c.js.map
