let t,e,r,i,n,s;var o,a,l,h,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d={},c={},p=u.parcelRequire5971;null==p&&((p=function(t){if(t in d)return d[t].exports;if(t in c){var e=c[t];delete c[t];var r={id:t,exports:{}};return d[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){c[t]=e},u.parcelRequire5971=p),p.register("flzy3",function(t,e){/** Used to stand-in for `undefined` hash values. */var r,i="__lodash_hash_undefined__",n="[object Arguments]",s="[object Boolean]",o="[object Date]",a="[object Function]",l="[object GeneratorFunction]",h="[object Map]",d="[object Number]",c="[object Object]",p="[object Promise]",_="[object RegExp]",f="[object Set]",m="[object String]",y="[object Symbol]",g="[object WeakMap]",v="[object ArrayBuffer]",b="[object DataView]",w="[object Float32Array]",C="[object Float64Array]",P="[object Int8Array]",S="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",T="[object Uint8ClampedArray]",E="[object Uint16Array]",O="[object Uint32Array]",N=/\w*$/,M=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,I={};I[n]=I["[object Array]"]=I[v]=I[b]=I[s]=I[o]=I[w]=I[C]=I[P]=I[S]=I[A]=I[h]=I[d]=I[c]=I[_]=I[f]=I[m]=I[y]=I[x]=I[T]=I[E]=I[O]=!0,I["[object Error]"]=I[a]=I[g]=!1;/** Detect free variable `global` from Node.js. */var $="object"==typeof u&&u&&u.Object===Object&&u,D="object"==typeof self&&self&&self.Object===Object&&self,R=$||D||Function("return this")(),L=e&&!e.nodeType&&e,F=L&&t&&!t.nodeType&&t,z=F&&F.exports===L;/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function H(t,e){return(// Don't return `map.set` because it's not chainable in IE 11.
t.set(e[0],e[1]),t)}/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function j(t,e){return(// Don't return `set.add` because it's not chainable in IE 11.
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
 */function U(t,e,r,i){var n=-1,s=t?t.length:0;for(i&&s&&(r=t[++n]);++n<s;)r=e(r,t[n],n,t);return r}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function B(t){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function q(t){var e=-1,r=Array(t.size);return t.forEach(function(t,i){r[++e]=[i,t]}),r}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function Y(t,e){return function(r){return t(e(r))}}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function V(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}/** Used for built-in method references. */var X=Array.prototype,J=Function.prototype,W=Object.prototype,G=R["__core-js_shared__"],Q=(r=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",Z=J.toString,K=W.hasOwnProperty,tt=W.toString,te=RegExp("^"+Z.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tr=z?R.Buffer:void 0,ti=R.Symbol,tn=R.Uint8Array,ts=Y(Object.getPrototypeOf,Object),to=Object.create,ta=W.propertyIsEnumerable,tl=X.splice,th=Object.getOwnPropertySymbols,tu=tr?tr.isBuffer:void 0,td=Y(Object.keys,Object),tc=t$(R,"DataView"),tp=t$(R,"Map"),t_=t$(R,"Promise"),tf=t$(R,"Set"),tm=t$(R,"WeakMap"),ty=t$(Object,"create"),tg=tF(tc),tv=tF(tp),tb=tF(t_),tw=tF(tf),tC=tF(tm),tP=ti?ti.prototype:void 0,tS=tP?tP.valueOf:void 0;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tA(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tx(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tT(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function tE(t){this.__data__=new tx(t)}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function tO(t,e,r){var i=t[e];K.call(t,e)&&tz(i,r)&&(void 0!==r||e in t)||(t[e]=r)}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function tN(t,e){for(var r=t.length;r--;)if(tz(t[r][0],e))return r;return -1}/**
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
 */function tk(t,e,r,i){r||(r={});for(var n=-1,s=e.length;++n<s;){var o=e[n],a=i?i(r[o],t[o],o,r,t):void 0;tO(r,o,void 0===a?t[o]:a)}return r}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function tI(t,e){var r,i=t.__data__;return("string"==(r=typeof e)||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?i["string"==typeof e?"string":"hash"]:i.map}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function t$(t,e){var r=null==t?void 0:t[e];return!(!tq(r)||Q&&Q in r)&&(tB(r)||B(r)?te:M).test(tF(r))?r:void 0}// Add methods to `Hash`.
tA.prototype.clear=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=ty?ty(null):{}},tA.prototype.delete=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){return this.has(t)&&delete this.__data__[t]},tA.prototype.get=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){var e=this.__data__;if(ty){var r=e[t];return r===i?void 0:r}return K.call(e,t)?e[t]:void 0},tA.prototype.has=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){var e=this.__data__;return ty?void 0!==e[t]:K.call(e,t)},tA.prototype.set=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(t,e){return this.__data__[t]=ty&&void 0===e?i:e,this},// Add methods to `ListCache`.
tx.prototype.clear=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[]},tx.prototype.delete=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){var e=this.__data__,r=tN(e,t);return!(r<0)&&(r==e.length-1?e.pop():tl.call(e,r,1),!0)},tx.prototype.get=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){var e=this.__data__,r=tN(e,t);return r<0?void 0:e[r][1]},tx.prototype.has=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){return tN(this.__data__,t)>-1},tx.prototype.set=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(t,e){var r=this.__data__,i=tN(r,t);return i<0?r.push([t,e]):r[i][1]=e,this},// Add methods to `MapCache`.
tT.prototype.clear=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.__data__={hash:new tA,map:new(tp||tx),string:new tA}},tT.prototype.delete=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){return tI(this,t).delete(t)},tT.prototype.get=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){return tI(this,t).get(t)},tT.prototype.has=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){return tI(this,t).has(t)},tT.prototype.set=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(t,e){return tI(this,t).set(t,e),this},// Add methods to `Stack`.
tE.prototype.clear=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new tx},tE.prototype.delete=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(t){return this.__data__.delete(t)},tE.prototype.get=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(t){return this.__data__.get(t)},tE.prototype.has=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(t){return this.__data__.has(t)},tE.prototype.set=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(t,e){var r=this.__data__;if(r instanceof tx){var i=r.__data__;if(!tp||i.length<199)return i.push([t,e]),this;r=this.__data__=new tT(i)}return r.set(t,e),this};/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var tD=th?Y(th,Object):/**
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
 */function(){return[]},tR=/**
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
 */function tL(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||W)}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function tF(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}/**
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
 */function tz(t,e){return t===e||t!=t&&e!=e}(tc&&tR(new tc(new ArrayBuffer(1)))!=b||tp&&tR(new tp)!=h||t_&&tR(t_.resolve())!=p||tf&&tR(new tf)!=f||tm&&tR(new tm)!=g)&&(tR=function(t){var e=tt.call(t),r=e==c?t.constructor:void 0,i=r?tF(r):void 0;if(i)switch(i){case tg:return b;case tv:return h;case tb:return p;case tw:return f;case tC:return g}return e});/**
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
 */var tH=Array.isArray;/**
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
 */function tj(t){var e;return null!=t&&"number"==typeof(e=t.length)&&e>-1&&e%1==0&&e<=9007199254740991&&!tB(t)}/**
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
 */var tU=tu||/**
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
 */function tB(t){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var e=tq(t)?tt.call(t):"";return e==a||e==l}/**
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
 */function tq(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}/**
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
 */function tY(t){return tj(t)?/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(t,e){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var r,i=tH(t)||t&&"object"==typeof t&&tj(t)&&K.call(t,"callee")&&(!ta.call(t,"callee")||tt.call(t)==n)?/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(t,e){for(var r=-1,i=Array(t);++r<t;)i[r]=e(r);return i}(t.length,String):[],s=i.length,o=!!s;for(var a in t)K.call(t,a)&&!(o&&("length"==a||(r=null==(r=s)?9007199254740991:r)&&("number"==typeof a||k.test(a))&&a>-1&&a%1==0&&a<r))&&i.push(a);return i}(t):/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(t){if(!tL(t))return td(t);var e=[];for(var r in Object(t))K.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=/**
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
 */function t(e,r,i,u,p,g,M){if(u&&(k=g?u(e,p,g,M):u(e)),void 0!==k)return k;if(!tq(e))return e;var k,$=tH(e);if($){if(D=e.length,R=e.constructor(D),D&&"string"==typeof e[0]&&K.call(e,"index")&&(R.index=e.index,R.input=e.input),k=R,!r)return(/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function(t,e){var r=-1,i=t.length;for(e||(e=Array(i));++r<i;)e[r]=t[r];return e}(e,k))}else{var D,R,L,F,z,Y,X=tR(e),J=X==a||X==l;if(tU(e))return(/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(e,r));if(X==c||X==n||J&&!g){if(B(e))return g?e:{};if(k="function"!=typeof(L=J?{}:e).constructor||tL(L)?{}:tq(F=ts(L))?to(F):{},!r)return z=(Y=k)&&tk(e,tY(e),Y),tk(e,tD(e),z)}else{if(!I[X])return g?e:{};k=/**
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
 */function(t,e,r,i){var n,a,l,u=t.constructor;switch(e){case v:return tM(t);case s:case o:return new u(+t);case b:return n=i?tM(t.buffer):t.buffer,new t.constructor(n,t.byteOffset,t.byteLength);case w:case C:case P:case S:case A:case x:case T:case E:case O:return a=i?tM(t.buffer):t.buffer,new t.constructor(a,t.byteOffset,t.length);case h:return U(i?r(q(t),!0):q(t),H,new t.constructor);case d:case m:return new u(t);case _:return(l=new t.constructor(t.source,N.exec(t))).lastIndex=t.lastIndex,l;case f:return U(i?r(V(t),!0):V(t),j,new t.constructor);case y:return tS?Object(tS.call(t)):{}}}(e,X,t,r)}}// Check for circular references and return its corresponding clone.
M||(M=new tE);var W=M.get(e);if(W)return W;if(M.set(e,k),!$){var G,Q,Z=i?(Q=tY(G=e),tH(G)?Q:/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function(t,e){for(var r=-1,i=e.length,n=t.length;++r<i;)t[n+r]=e[r];return t}(Q,tD(G))):tY(e)}return(/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function(t,e){for(var r=-1,i=t?t.length:0;++r<i&&!1!==e(t[r],r,t););}(Z||e,function(n,s){Z&&(n=e[s=n]),// Recursively populate clone (susceptible to call stack limits).
tO(k,s,t(n,r,i,u,s,e,M))}),k)}(t,!1,!0))}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=window,f=_.ShadowRoot&&(void 0===_.ShadyCSS||_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,m=Symbol(),y=new WeakMap;class g{constructor(t,e,r){if(this._$cssResult$=!0,r!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(f&&void 0===t){let r=void 0!==e&&1===e.length;r&&(t=y.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&y.set(e,t))}return t}toString(){return this.cssText}}const v=t=>new g("string"==typeof t?t:t+"",void 0,m),b=(t,e)=>{f?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let r=document.createElement("style"),i=_.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)})},w=f?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return v(e)})(t):t,C=window,P=C.trustedTypes,S=P?P.emptyScript:"",A=C.reactiveElementPolyfillSupport,x={toAttribute(t,e){switch(e){case Boolean:t=t?S:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},T=(t,e)=>e!==t&&(e==e||t==t),E={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:T},O="finalized";class N extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let i=this._$Ep(r,e);void 0!==i&&(this._$Ev.set(i,r),t.push(i))}),t}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||E}static finalize(){if(this.hasOwnProperty(O))return!1;this[O]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let t of r)e.unshift(w(t))}else void 0!==t&&e.push(w(t));return e}static _$Ep(t,e){let r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return b(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=E){var i;let n=this.constructor._$Ep(t,r);if(void 0!==n&&!0===r.reflect){let s=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:x).toAttribute(e,r.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var r;let i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){let t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:x;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||T)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,r=this._$AL;try{(e=this.shouldUpdate(r))?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}N[O]=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},null==A||A({ReactiveElement:N}),(null!==(tR=C.reactiveElementVersions)&&void 0!==tR?tR:C.reactiveElementVersions=[]).push("1.6.3");const M=window,k=M.trustedTypes,I=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,R="?"+D,L=`<${R}>`,F=document,z=()=>F.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,U=t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),B="[ 	\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,V=/>/g,X=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,W=/"/g,G=/^(?:script|style|textarea|title)$/i,Q=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Z=Q(1),K=(Q(2),Symbol.for("lit-noChange")),tt=Symbol.for("lit-nothing"),te=new WeakMap,tr=F.createTreeWalker(F,129,null,!1);function ti(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(e):e}const tn=(t,e)=>{let r=t.length-1,i=[],n,s=2===e?"<svg>":"",o=q;for(let e=0;e<r;e++){let r=t[e],a,l,h=-1,u=0;for(;u<r.length&&(o.lastIndex=u,null!==(l=o.exec(r)));)u=o.lastIndex,o===q?"!--"===l[1]?o=Y:void 0!==l[1]?o=V:void 0!==l[2]?(G.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=X):void 0!==l[3]&&(o=X):o===X?">"===l[0]?(o=null!=n?n:q,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?X:'"'===l[3]?W:J):o===W||o===J?o=X:o===Y||o===V?o=q:(o=X,n=void 0);let d=o===X&&t[e+1].startsWith("/>")?" ":"";s+=o===q?r+L:h>=0?(i.push(a),r.slice(0,h)+$+r.slice(h)+D+d):r+D+(-2===h?(i.push(void 0),e):d)}return[ti(t,s+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class ts{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0,o=t.length-1,a=this.parts,[l,h]=tn(t,e);if(this.el=ts.createElement(l,r),tr.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=tr.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){let t=[];for(let e of i.getAttributeNames())if(e.endsWith($)||e.startsWith(D)){let r=h[s++];if(t.push(e),void 0!==r){let t=i.getAttribute(r.toLowerCase()+$).split(D),e=/([.?@])?(.*)/.exec(r);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?tu:"?"===e[1]?tc:"@"===e[1]?tp:th})}else a.push({type:6,index:n})}for(let e of t)i.removeAttribute(e)}if(G.test(i.tagName)){let t=i.textContent.split(D),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],z()),tr.nextNode(),a.push({type:2,index:++n});i.append(t[e],z())}}}else if(8===i.nodeType){if(i.data===R)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(D,t+1));)a.push({type:7,index:n}),t+=D.length-1}}n++}}static createElement(t,e){let r=F.createElement("template");return r.innerHTML=t,r}}function to(t,e,r=t,i){var n,s,o;if(e===K)return e;let a=void 0!==i?null===(n=r._$Co)||void 0===n?void 0:n[i]:r._$Cl,l=H(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===l?a=void 0:(a=new l(t))._$AT(t,r,i),void 0!==i?(null!==(o=r._$Co)&&void 0!==o?o:r._$Co=[])[i]=a:r._$Cl=a),void 0!==a&&(e=to(t,a._$AS(t,e.values),a,i)),e}class ta{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:r},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:F).importNode(r,!0);tr.currentNode=n;let s=tr.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new tl(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new t_(s,this,t)),this._$AV.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(s=tr.nextNode(),o++)}return tr.currentNode=F,n}v(t){let e=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tl{constructor(t,e,r,i){var n;this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){H(t=to(this,t,e))?t===tt||null==t||""===t?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):U(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tt&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(F.createTextNode(t)),this._$AH=t}g(t){var e;let{values:r,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ts.createElement(ti(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(r);else{let t=new ta(n,this),e=t.u(this.options);t.v(r),this.$(e),this._$AH=t}}_$AC(t){let e=te.get(t.strings);return void 0===e&&te.set(t.strings,e=new ts(t)),e}T(t){j(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let n of t)i===e.length?e.push(r=new tl(this.k(z()),this.k(z()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class th{constructor(t,e,r,i,n){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=tt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){let n=this.strings,s=!1;if(void 0===n)(s=!H(t=to(this,t,e,0))||t!==this._$AH&&t!==K)&&(this._$AH=t);else{let i,o;let a=t;for(t=n[0],i=0;i<n.length-1;i++)(o=to(this,a[r+i],e,i))===K&&(o=this._$AH[i]),s||(s=!H(o)||o!==this._$AH[i]),o===tt?t=tt:t!==tt&&(t+=(null!=o?o:"")+n[i+1]),this._$AH[i]=o}s&&!i&&this.j(t)}j(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tu extends th{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tt?void 0:t}}const td=k?k.emptyScript:"";class tc extends th{constructor(){super(...arguments),this.type=4}j(t){t&&t!==tt?this.element.setAttribute(this.name,td):this.element.removeAttribute(this.name)}}class tp extends th{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=to(this,t,e,0))&&void 0!==r?r:tt)===K)return;let i=this._$AH,n=t===tt&&i!==tt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==tt&&(i===tt||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class t_{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){to(this,t)}}const tf=M.litHtmlPolyfillSupport;null==tf||tf(ts,tl),(null!==(tL=M.litHtmlVersions)&&void 0!==tL?tL:M.litHtmlVersions=[]).push("2.8.0");const tm=(t,e,r)=>{var i,n;let s=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e,o=s._$litPart$;if(void 0===o){let t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new tl(e.insertBefore(z(),t),t,void 0,null!=r?r:{})}return o._$AI(t),o};class ty extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tm(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return K}}ty.finalized=!0,ty._$litElement$=!0,null===(tF=globalThis.litElementHydrateSupport)||void 0===tF||tF.call(globalThis,{LitElement:ty});const tg=globalThis.litElementPolyfillSupport;function tv(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tb(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}null==tg||tg({LitElement:ty}),(null!==(tz=globalThis.litElementVersions)&&void 0!==tz?tz:globalThis.litElementVersions=[]).push("3.3.3");/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var tw,tC,tP,tS,tA,tx,tT,tE,tO,tN,tM,tk,tI,t$,tD,tR,tL,tF,tz,tH,tj,tU,tB,tq,tY,tV,tX,tJ,tW,/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */tG,tQ={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},tZ={duration:.5,overwrite:!1,delay:0},tK=2*Math.PI,t0=tK/4,t1=0,t2=Math.sqrt,t5=Math.cos,t3=Math.sin,t8=function(t){return"string"==typeof t},t9=function(t){return"function"==typeof t},t6=function(t){return"number"==typeof t},t4=function(t){return void 0===t},t7=function(t){return"object"==typeof t},et=function(t){return!1!==t},ee=function(){return"undefined"!=typeof window},er=function(t){return t9(t)||t8(t)},ei="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},en=Array.isArray,es=/(?:-?\.?\d|\.)+/gi,eo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ea=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,el=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eh=/[+-]=-?[.\d]+/,eu=/[^,'"\[\]\s]+/gi,ed=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ec={},ep={},e_=function(t){return(ep=eB(t,ec))&&iL},ef=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},em=function(t,e){return!e&&console.warn(t)},ey=function(t,e){return t&&(ec[t]=e)&&ep&&(ep[t]=e)||ec},eg=function(){return 0},ev={suppressEvents:!0,isStart:!0,kill:!1},eb={suppressEvents:!0,kill:!1},ew={suppressEvents:!0},eC={},eP=[],eS={},eA={},ex={},eT=30,eE=[],eO="",eN=function(t){var e,r,i=t[0];if(t7(i)||t9(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(// find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
r=eE.length;r--&&!eE[r].targetTest(i););e=eE[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new rQ(t[r],e)))||t.splice(r,1);return t},eM=function(t){return t._gsap||eN(rp(t))[0]._gsap},ek=function(t,e,r){return(r=t[e])&&t9(r)?t[e]():t4(r)&&t.getAttribute&&t.getAttribute(e)||r},eI=function(t,e){return(t=t.split(",")).forEach(e)||t},e$=function(t){return Math.round(1e5*t)/1e5||0},eD=function(t){return Math.round(1e7*t)/1e7||0},eR=function(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i},eL=function(t,e){for(//searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
var r=e.length,i=0;0>t.indexOf(e[i])&&++i<r;);return i<r},eF=function(){var t,e,r=eP.length,i=eP.slice(0);for(t=0,eS={},eP.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},ez=function(t,e,r,i){eP.length&&!tj&&eF(),t.render(e,r,i||tj&&e<0&&(t._initted||t._startAt)),eP.length&&!tj&&eF()},eH=function(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(eu).length<2?e:t8(t)?t.trim():t},ej=function(t){return t},eU=function(t,e){for(var r in e)r in t||(t[r]=e[r]);return t},eB=function(t,e){for(var r in e)t[r]=e[r];return t},eq=function t(e,r){for(var i in r)"__proto__"!==i&&"constructor"!==i&&"prototype"!==i&&(e[i]=t7(r[i])?t(e[i]||(e[i]={}),r[i]):r[i]);return e},eY=function(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i},eV=function(t){var e,r=t.parent||tB,i=t.keyframes?(e=en(t.keyframes),function(t,r){for(var i in r)i in t||"duration"===i&&e||"ease"===i||(t[i]=r[i])}):eU;if(et(t.inherit))for(;r;)i(t,r.vars.defaults),r=r.parent||r._dp;return t},eX=function(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0},eJ=function(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var s,o=t[i];if(n)for(s=e[n];o&&o[n]>s;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},eW=function(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,s=e._next;n?n._next=s:t[r]===e&&(t[r]=s),s?s._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null},eG=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},eQ=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(// performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
var r=t;r;)r._dirty=1,r=r.parent;return t},eZ=function(t){for(var e=t.parent;e&&e.parent;)//sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
e._dirty=1,e.totalDuration(),e=e.parent;return t},eK=function(t,e,r,i){return t._startAt&&(tj?t._startAt.revert(eb):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},e0=function(t){return t._repeat?e1(t._tTime,t=t.duration()+t._rDelay)*t:0},e1=function(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},e2=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},e5=function(t){return t._end=eD(t._start+(t._tDur/Math.abs(t._ts||t._rts||1e-8)||0))},e3=function(t,e){// adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=eD(r._time-(t._ts>0?e/t._ts:-(((t._dirty?t.totalDuration():t._tDur)-e)/t._ts))),e5(t),r._dirty||eQ(r,t)),t},/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/e8=function(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(// in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
r=e2(t.rawTime(),e),(!e._dur||rh(0,e.totalDuration(),r)-e._tTime>1e-8)&&e.render(r,!0)),eQ(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){//in case any of the ancestors had completed but should now be enabled...
if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-.00000001;// helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
}},e9=function(t,e,r,i){return e.parent&&eG(e),e._start=eD((t6(r)?r:r||t!==tB?ro(t,r,e):t._time)+e._delay),e._end=eD(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),eJ(t,e,"_first","_last",t._sort?"_start":0),rt(e)||(t._recent=e),i||e8(t,e),t._ts<0&&e3(t,t._tTime),t},e6=function(t,e){return(ec.ScrollTrigger||ef("scrollTrigger",e))&&ec.ScrollTrigger.create(e,t)},e4=function(t,e,r,i,n){return(it(t,e,n),t._initted)?!r&&t._pt&&!tj&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&tJ!==rR.frame?(eP.push(t),t._lazy=[n,i],1):void 0:1},e7=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(0>r.rawTime()||t(r))},rt=function(t){var e=t.data;return"isFromStart"===e||"isStart"===e},re=function(t,e,r,i){var n,s,o,a=t.ratio,l=e<0||!e&&(!t._start&&e7(t)&&!(!t._initted&&rt(t))||(t._ts<0||t._dp._ts<0)&&!rt(t))?0:1,h=t._rDelay,u=0;if(h&&t._repeat&&(s=e1(// in case there's a zero-duration tween that has a repeat with a repeatDelay
u=rh(0,t._tDur,e),h),t._yoyo&&1&s&&(l=1-l),s!==e1(t._tTime,h)&&(// if iteration changed
a=1-l,t.vars.repeatRefresh&&t._initted&&t.invalidate())),l!==a||tj||i||1e-8===t._zTime||!e&&t._zTime){if(!t._initted&&e4(t,e,i,r,u))return;for(o=t._zTime,t._zTime=e||(r?1e-8:0),r||(r=e&&!o),t.ratio=l,t._from&&(l=1-l),t._time=0,t._tTime=u,n=t._pt;n;)n.r(l,n.d),n=n._next;e<0&&eK(t,e,r,!0),t._onUpdate&&!r&&rS(t,"onUpdate"),u&&t._repeat&&!r&&t.parent&&rS(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===l&&(l&&eG(t,1),r||tj||(rS(t,l?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},rr=function(t,e,r){var i;if(r>e)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}},ri=function(t,e,r,i){var n=t._repeat,s=eD(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=n?n<0?1e10:eD(s*(n+1)+t._rDelay*n):s,o>0&&!i&&e3(t,t._tTime=t._tDur*o),t.parent&&e5(t),r||eQ(t.parent,t),t},rn=function(t){return t instanceof rK?eQ(t):ri(t,t._dur)},rs={_start:0,endTime:eg,totalDuration:eg},ro=function t(e,r,i){var n,s,o,a=e.labels,l=e._recent||rs,h=e.duration()>=1e8?l.endTime(!1):e._dur;return t8(r)&&(isNaN(r)||r in a)?(//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
s=r.charAt(0),o="%"===r.substr(-1),n=r.indexOf("="),"<"===s||">"===s)?(n>=0&&(r=r.replace(/=/,"")),("<"===s?l._start:l.endTime(l._repeat>=0))+(parseFloat(r.substr(1))||0)*(o?(n<0?l:i).totalDuration()/100:1)):n<0?(r in a||(a[r]=h),a[r]):(s=parseFloat(r.charAt(n-1)+r.substr(n+1)),o&&i&&(s=s/100*(en(i)?i[0]:i).totalDuration()),n>1?t(e,r.substr(0,n-1),i)+s:h+s):null==r?h:+r},ra=function(t,e,r){var i,n,s=t6(e[1]),o=(s?2:1)+(t<2?0:1),a=e[o];if(s&&(a.duration=e[1]),a.parent=r,t){for(i=a,n=r;n&&!("immediateRender"in i);)// inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
i=n.vars.defaults||{},n=et(n.vars.inherit)&&n.parent;a.immediateRender=et(i.immediateRender),t<2?a.runBackwards=1:a.startAt=e[o-1]}return new il(e[0],a,e[o+1])},rl=function(t,e){return t||0===t?e(t):e},rh=function(t,e,r){return r<t?t:r>e?e:r},ru=function(t,e){return t8(t)&&(e=ed.exec(t))?e[1]:""},rd=[].slice,rc=function(t,e){return t&&t7(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&t7(t[0]))&&!t.nodeType&&t!==tq},rp=function(t,e,r){var i;return tU&&!e&&tU.selector?tU.selector(t):t8(t)&&!r&&(tY||!rL())?rd.call((e||tV).querySelectorAll(t),0):en(t)?(void 0===i&&(i=[]),t.forEach(function(t){var e;return t8(t)&&!r||rc(t,1)?(e=i).push.apply(e,rp(t)):i.push(t)})||i):rc(t)?rd.call(t,0):t?[t]:[]},r_=function(t){return t=rp(t)[0]||em("Invalid scope")||{},function(e){var r=t.current||t.nativeElement||t;return rp(e,r.querySelectorAll?r:r===t?em("Invalid scope")||tV.createElement("div"):t)}},rf=function(t){return t.sort(function(){return .5-Math.random()})},//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
rm=function(t){if(t9(t))return t;var e=t7(t)?t:{each:t},r=rV(e.ease),i=e.from||0,n=parseFloat(e.base)||0,s={},o=i>0&&i<1,a=isNaN(i)||o,l=e.axis,h=i,u=i;return t8(i)?h=u=({center:.5,edges:.5,end:1})[i]||0:!o&&a&&(h=i[0],u=i[1]),function(t,o,d){var c,p,_,f,m,y,g,v,b,w=(d||e).length,C=s[w];if(!C){if(!(b="auto"===e.grid?0:(e.grid||[1,1e8])[1])){for(g=-1e8;g<(g=d[b++].getBoundingClientRect().left)&&b<w;);b--}for(y=0,C=s[w]=[],c=a?Math.min(b,w)*h-.5:i%b,p=1e8===b?0:a?w*u/b-.5:i/b|0,g=0,v=1e8;y<w;y++)_=y%b-c,f=p-(y/b|0),C[y]=m=l?Math.abs("y"===l?f:_):t2(_*_+f*f),m>g&&(g=m),m<v&&(v=m);"random"===i&&rf(C),C.max=g-v,C.min=v,C.v=w=(parseFloat(e.amount)||parseFloat(e.each)*(b>w?w-1:l?"y"===l?w/b:b:Math.max(b,w/b))||0)*("edges"===i?-1:1),C.b=w<0?n-w:n,C.u=ru(e.amount||e.each)||0,r=r&&w<0?rq(r):r}return w=(C[t]-C.min)/C.max||0,eD(C.b+(r?r(w):w)*C.v)+C.u;//round in order to work around floating point errors
}},ry=function(t){//pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
var e=Math.pow(10,((t+"").split(".")[1]||"").length);//to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
return function(r){var i=eD(Math.round(parseFloat(r)/t)*t*e);return(i-i%1)/e+(t6(r)?0:ru(r));// n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
}},rg=function(t,e){var r,i,n=en(t);return!n&&t7(t)&&(r=n=t.radius||1e8,t.values?(i=!t6((t=rp(t.values))[0]))&&(r*=r):t=ry(t.increment)),rl(e,n?t9(t)?function(e){return Math.abs((i=t(e))-e)<=r?i:e}:function(e){for(var n,s,o=parseFloat(i?e.x:e),a=parseFloat(i?e.y:0),l=1e8,h=0,u=t.length;u--;)(n=i?(n=t[u].x-o)*n+(s=t[u].y-a)*s:Math.abs(t[u]-o))<l&&(l=n,h=u);return h=!r||l<=r?t[h]:e,i||h===e||t6(e)?h:h+ru(e)}:ry(t))},rv=function(t,e,r,i){return rl(en(t)?!e:!0===r?(r=0,!1):!i,function(){return en(t)?t[~~(Math.random()*t.length)]:(i=(r=r||1e-5)<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})},rb=function(t,e,r){return rl(r,function(r){return t[~~e(r)]})},rw=function(t){for(//replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
var e,r,i,n,s=0,o="";~(e=t.indexOf("random(",s));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?eu:es),o+=t.substr(s,e-s)+rv(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),s=i+1;return o+t.substr(s,t.length-s)},rC=function(t,e,r,i,n){var s=e-t,o=i-r;return rl(n,function(e){return r+((e-t)/s*o||0)})},rP=function(t,e,r){//used for nextLabel() and previousLabel()
var i,n,s,o=t.labels,a=1e8;for(i in o)(n=o[i]-e)<0==!!r&&n&&a>(n=Math.abs(n))&&(s=i,a=n);return s},rS=function(t,e,r){var i,n,s,o=t.vars,a=o[e],l=tU,h=t._ctx;if(a)return i=o[e+"Params"],n=o.callbackScope||t,r&&eP.length&&eF(),h&&(tU=h),s=i?a.apply(n,i):a.call(n),tU=l,s},rA=function(t){return eG(t),t.scrollTrigger&&t.scrollTrigger.kill(!!tj),1>t.progress()&&rS(t,"onInterrupt"),t},rx=[],rT=function(t){if(ee()&&t){var e=// edge case: some build tools may pass in a null/undefined value
(t=!t.name&&t.default||t).name,r=t9(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:eg,render:ig,add:r6,kill:ib,modifier:iv,rawVars:0},s={targetTest:0,get:0,getSetter:ip,aliases:{},register:0};if(rL(),t!==i){if(eA[e])return;eU(i,eU(eY(t,n),s)),eB(i.prototype,eB(n,eY(t,s))),eA[i.prop=e]=i,t.targetTest&&(eE.push(i),eC[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ey(e,i),t.register&&t.register(iL,i,iP)}else t&&rx.push(t)},rE={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
rO=function(t,e,r){return(6*(t+=t<0?1:t>1?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*255+.5|0},rN=function(t,e,r){var i,n,s,o,a,l,h,u,d,c,p=t?t6(t)?[t>>16,t>>8&255,255&t]:0:rE.black;if(!p){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),rE[t])p=rE[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+//for shorthand like #9F0 or #9F0F (could have alpha)
(i=t.charAt(1))+i+(n=t.charAt(2))+n+(s=t.charAt(3))+s+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[// hex with alpha, like #fd5e53ff
(p=parseInt(t.substr(1,6),16))>>16,p>>8&255,255&p,parseInt(t.substr(7),16)/255];p=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t]}else if("hsl"===t.substr(0,3)){if(p=c=t.match(es),e){if(~t.indexOf("="))return(//if relative values are found, just return the raw strings with the relative prefixes in place.
p=t.match(eo),r&&p.length<4&&(p[3]=1),p)}else o=+p[0]%360/360,a=+p[1]/100,n=(l=+p[2]/100)<=.5?l*(a+1):l+a-l*a,i=2*l-n,p.length>3&&(p[3]*=1),p[0]=rO(o+1/3,i,n),p[1]=rO(o,i,n),p[2]=rO(o-1/3,i,n)}else p=t.match(es)||rE.transparent;p=p.map(Number)}return e&&!c&&(l=((h=Math.max(i=p[0]/255,n=p[1]/255,s=p[2]/255))+(u=Math.min(i,n,s)))/2,h===u?o=a=0:(d=h-u,a=l>.5?d/(2-h-u):d/(h+u),o=(h===i?(n-s)/d+(n<s?6:0):h===n?(s-i)/d+2:(i-n)/d+4)*60),p[0]=~~(o+.5),p[1]=~~(100*a+.5),p[2]=~~(100*l+.5)),r&&p.length<4&&(p[3]=1),p},rM=function(t){// strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
var e=[],r=[],i=-1;return t.split(rI).forEach(function(t){var n=t.match(ea)||[];e.push.apply(e,n),r.push(i+=n.length+1)}),e.c=r,e},rk=function(t,e,r){var i,n,s,o,a="",l=(t+a).match(rI),h=e?"hsla(":"rgba(",u=0;if(!l)return t;if(l=l.map(function(t){return(t=rN(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(s=rM(t),(i=r.c).join(a)!==s.c.join(a)))for(o=(n=t.replace(rI,"1").split(ea)).length-1;u<o;u++)a+=n[u]+(~i.indexOf(u)?l.shift()||h+"0,0,0,0)":(s.length?s:l.length?l:r).shift());if(!n)for(o=(n=t.split(rI)).length-1;u<o;u++)a+=n[u]+l[u];return a+n[o]},rI=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in rE)e+="|"+t+"\\b";return RegExp(e+")","gi")}(),r$=/hsl[a]?\(/,rD=function(t){var e,r=t.join(" ");if(rI.lastIndex=0,rI.test(r))return e=r$.test(r),t[1]=rk(t[1],e),t[0]=rk(t[0],e,rM(t[1])),!0},rR=(tT=Date.now,tE=500,tO=33,tM=tN=tT(),tk=1e3/240,tI=1e3/240,t$=[],tD=function t(e){var r,i,n,s,o=tT()-tM,a=!0===e;if(o>tE&&(tN+=o-tO),tM+=o,((r=(n=tM-tN)-tI)>0||a)&&(s=++tS.frame,tA=n-1e3*tS.time,tS.time=n/=1e3,tI+=r+(r>=tk?4:tk-r),i=1),a||(tw=tC(t)),i)for(tx=0;tx<t$.length;tx++)t$[tx](n,tA,s,e)},tS={time:0,frame:0,tick:function(){tD(!0)},deltaRatio:function(t){return tA/(1e3/(t||60))},wake:function(){tX&&(!tY&&ee()&&(tV=(tq=tY=window).document||{},ec.gsap=iL,(tq.gsapVersions||(tq.gsapVersions=[])).push(iL.version),e_(ep||tq.GreenSockGlobals||!tq.gsap&&tq||{}),tP=tq.requestAnimationFrame,rx.forEach(rT)),tw&&tS.sleep(),tC=tP||function(t){return setTimeout(t,tI-1e3*tS.time+1|0)},tG=1,tD(2))},sleep:function(){(tP?tq.cancelAnimationFrame:clearTimeout)(tw),tG=0,tC=eg},lagSmoothing:function(t,e){tO=Math.min(e||33,tE=t||1/0)},fps:function(t){tk=1e3/(t||240),tI=1e3*tS.time+tk},add:function(t,e,r){var i=e?function(e,r,n,s){t(e,r,n,s),tS.remove(i)}:t;return tS.remove(t),t$[r?"unshift":"push"](i),rL(),i},remove:function(t,e){~(e=t$.indexOf(t))&&t$.splice(e,1)&&tx>=e&&tx--},_listeners:t$}),rL=function(){return!tG&&rR.wake()},/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/rF={},rz=/^[\d.\-M][\d.\-,\s]/,rH=/["']/g,rj=function(t){for(//takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
var e,r,i,n={},s=t.substr(1,t.length-3).split(":"),o=s[0],a=1,l=s.length;a<l;a++)r=s[a],e=a!==l-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[o]=isNaN(i)?i.replace(rH,"").trim():+i,o=r.substr(e+1).trim();return n},rU=function(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)},rB=function(t){//name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
var e=(t+"").split("("),r=rF[e[0]];return r&&e.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[rj(e[1])]:rU(t).split(",").map(eH)):rF._CE&&rz.test(t)?rF._CE("",t):r},rq=function(t){return function(e){return 1-t(1-e)}},rY=function t(e,r){for(var i,n=e._first;n;)n instanceof rK?t(n,r):!n.vars.yoyoEase||n._yoyo&&n._repeat||n._yoyo===r||(n.timeline?t(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},rV=function(t,e){return t&&(t9(t)?t:rF[t]||rB(t))||e},rX=function(t,e,r,i){void 0===r&&(r=function(t){return 1-e(1-t)}),void 0===i&&(i=function(t){return t<.5?e(2*t)/2:1-e((1-t)*2)/2});var n,s={easeIn:e,easeOut:r,easeInOut:i};return eI(t,function(t){for(var e in rF[t]=ec[t]=s,rF[n=t.toLowerCase()]=r,s)rF[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=rF[t+"."+e]=s[e]}),s},rJ=function(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t((e-.5)*2)/2}},rW=function t(e,r,i){var n=r>=1?r:1,s=(i||(e?.3:.45))/(r<1?r:1),o=s/tK*(Math.asin(1/n)||0),a=function(t){return 1===t?1:n*Math.pow(2,-10*t)*t3((t-o)*s)+1},l="out"===e?a:"in"===e?function(t){return 1-a(1-t)}:rJ(a);return s=tK/s,l.config=function(r,i){return t(e,r,i)},l},rG=function t(e,r){void 0===r&&(r=1.70158);var i=function(t){return t?--t*t*((r+1)*t+r)+1:0},n="out"===e?i:"in"===e?function(t){return 1-i(1-t)}:rJ(i);return n.config=function(r){return t(e,r)},n};// a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
eI("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;rX(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow((1-t)*2,r)/2})}),rF.Linear.easeNone=rF.none=rF.Linear.easeIn,rX("Elastic",rW("in"),rW("out"),rW()),r1=2*(r0=1/2.75),r2=2.5*r0,rX("Bounce",function(t){return 1-r5(1-t)},r5=function(t){return t<r0?7.5625*t*t:t<r1?7.5625*Math.pow(t-1.5/2.75,2)+.75:t<r2?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*Math.pow(t-2.625/2.75,2)+.984375}),rX("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),rX("Circ",function(t){return-(t2(1-t*t)-1)}),rX("Sine",function(t){return 1===t?1:-t5(t*t0)+1}),rX("Back",rG("in"),rG("out"),rG()),rF.SteppedEase=rF.steps=ec.SteppedEase={config:function(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*rh(0,.99999999,t)|0)+n)*r}}},tZ.ease=rF["quad.out"],eI("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return eO+=t+","+t+"Params,"});var rQ=function(t,e){this.id=t1++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ek,this.set=e?e.getSetter:ip},rZ=/*#__PURE__*/function(){function t(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(// TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ri(this,+t.duration,1,1),this.data=t.data,tU&&(this._ctx=tU,tU.data.push(this)),tG||rR.wake()}var e=t.prototype;return e.delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,ri(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,e){if(rL(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
for(e3(this,t),!r._dp||r.parent||e8(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:-((r.totalDuration()-r._tTime)/r._ts))&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&e9(this._dp,this,this._start-this._delay)}return this._tTime===t&&(this._dur||e)&&(!this._initted||1e-8!==Math.abs(this._zTime))&&(t||this._initted||!this.add&&!this._ptLookup)||(// check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
this._ts||(this._pTime=t),//if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
//   this._lock = 1;
ez(this,t,e)),this},e.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+e0(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time;// note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
},e.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(1&this.iteration())?1-t:t)+e0(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?e1(this._tTime,r)+1:1}// potential future addition:
,e.timeScale=function(t){if(!arguments.length)return -.00000001===this._rts?0:this._rts;// recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
if(this._rts===t)return this;var e=this.parent&&this._ts?e2(this.parent._time,this):this._tTime;// make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
return(// future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
//(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
// prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
this._rts=+t||0,this._ts=this._ps||-.00000001===t?0:this._rts,this.totalTime(rh(-Math.abs(this._delay),this._tDur,e),!0),e5(this),eZ(this))},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rL(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&1e-8!==Math.abs(this._zTime)&&(this._tTime-=1e-8)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&e9(e,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(et(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var e=this.parent||this._dp;// _dp = detached parent
return e?t&&(!this._ts||this._repeat&&this._time&&1>this.totalProgress())?this._tTime%(this._dur+this._rDelay):this._ts?e2(e.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){void 0===t&&(t=ew);var e=tj;return tj=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),tj=e,this},e.globalTime=function(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(t):r;// the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,rn(this)):-2===this._repeat?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var e=this._time;return this._rDelay=t,rn(this),e?this.time(e):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,e){return this.totalTime(ro(this,t),et(e))},e.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,et(e))},e.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},e.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},e.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-.00000001:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-.00000001,this},e.isActive=function(){var t,e=this.parent||this._dp,r=this._start;return!!(!e||this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-1e-8)},e.eventCallback=function(t,e,r){var i=this.vars;return arguments.length>1?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},e.then=function(t){var e=this;return new Promise(function(r){var i=t9(t)?t:ej,n=function(){var t=e.then;e.then=null,t9(i)&&(i=i(e))&&(i.then||i===e)&&(e.then=t),r(i),e.then=t};e._initted&&1===e.totalProgress()&&e._ts>=0||!e._tTime&&e._ts<0?n():e._prom=n})},e.kill=function(){rA(this)},t}();eU(rZ.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-.00000001,_prom:0,_ps:!1,_rts:1});var rK=/*#__PURE__*/function(t){function e(e,r){var i;return void 0===e&&(e={}),(i=t.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=et(e.sortChildren),tB&&e9(e.parent||tB,tv(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&e6(tv(i),e.scrollTrigger),i}tb(e,t);var r=e.prototype;return r.to=function(t,e,r){return ra(0,arguments,this),this},r.from=function(t,e,r){return ra(1,arguments,this),this},r.fromTo=function(t,e,r,i){return ra(2,arguments,this),this},r.set=function(t,e,r){return e.duration=0,e.parent=this,eV(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new il(t,e,ro(this,r),1),this},r.call=function(t,e,r){return e9(this,il.delayedCall(0,t,e),r)}//ONLY for backward compatibility! Maybe delete?
,r.staggerTo=function(t,e,r,i,n,s,o){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=s,r.onCompleteParams=o,r.parent=this,new il(t,r,ro(this,n)),this},r.staggerFrom=function(t,e,r,i,n,s,o){return r.runBackwards=1,eV(r).immediateRender=et(r.immediateRender),this.staggerTo(t,e,r,i,n,s,o)},r.staggerFromTo=function(t,e,r,i,n,s,o,a){return i.startAt=r,eV(i).immediateRender=et(i.immediateRender),this.staggerTo(t,e,i,n,s,o,a)},r.render=function(t,e,r){var i,n,s,o,a,l,h,u,d,c,p,_,f=this._time,m=this._dirty?this.totalDuration():this._tDur,y=this._dur,g=t<=0?0:eD(t),v=this._zTime<0!=t<0&&(this._initted||!y);if(this!==tB&&g>m&&t>=0&&(g=m),g!==this._tTime||r||v){if(f!==this._time&&y&&(//if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
g+=this._time-f,t+=this._time-f),i=g,d=this._start,l=!(u=this._ts),v&&(y||(f=this._zTime),(t||!e)&&(this._zTime=t)),this._repeat){if(//adjust the time for repeats and yoyos
p=this._yoyo,a=y+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*a+t,e,r);/*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */if(i=eD(g%a),g===m?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
o=this._repeat,i=y):((o=~~(g/a))&&o===g/a&&(i=y,o--),i>y&&(i=y)),c=e1(this._tTime,a),!f&&this._tTime&&c!==o&&this._tTime-c*a-this._dur<=0&&(c=o),p&&1&o&&(i=y-i,_=1),o!==c&&!this._lock){var b=p&&1&c,w=b===(p&&1&o);if(o<c&&(b=!b),f=b?0:g%y?y:g,this._lock=1,this.render(f||(_?0:eD(o*a)),e,!y)._lock=0,this._tTime=g,!e&&this.parent&&rS(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1),f&&f!==this._time||!this._ts!==l||this.vars.onRepeat&&!this.parent&&!this._act||(y=this._dur,m=this._tDur,w&&(this._lock=2,f=b?y:-.0001,this.render(f,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!l))return this;//in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
rY(this,_)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=rr(this,eD(f),eD(i)))&&(g-=i-(i=h._start)),this._tTime=g,this._time=i,this._act=!u,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,f=0),!f&&i&&!e&&!o&&(rS(this,"onStart"),this._tTime!==g))return this;if(i>=f&&t>=0)for(n=this._first;n;){if(s=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(n._ts>0?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!l){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
h=0,s&&(g+=this._zTime=-.00000001);break}}n=s}else{n=this._last;for(var C=t<0?t:i;n;){if(s=n._prev,(n._act||C<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(n._ts>0?(C-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(C-n._start)*n._ts,e,r||tj&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!l){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
h=0,s&&(g+=this._zTime=C?-.00000001:1e-8);break}}n=s}}if(h&&!e&&(this.pause(),h.render(i>=f?0:-.00000001)._zTime=i>=f?1:-1,this._ts))return(//the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
this._start=d,e5(this),this.render(t,e,r));this._onUpdate&&!e&&rS(this,"onUpdate",!0),(g===m&&this._tTime>=this.totalDuration()||!g&&f)&&(d===this._start||Math.abs(u)!==Math.abs(this._ts))&&!this._lock&&(// remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
(t||!y)&&(g===m&&this._ts>0||!g&&this._ts<0)&&eG(this,1),e||t<0&&!f||!g&&!f&&m||(rS(this,g===m&&t>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<m&&this.timeScale()>0)&&this._prom()))}return this},r.add=function(t,e){var r=this;if(t6(e)||(e=ro(this,e,t)),!(t instanceof rZ)){if(en(t))return t.forEach(function(t){return r.add(t,e)}),this;if(t8(t))return this.addLabel(t,e);if(!t9(t))return this;t=il.delayedCall(0,t)}return this!==t?e9(this,t,e):this;//don't allow a timeline to be added to itself as a child!
},r.getChildren=function(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-1e8);for(var n=[],s=this._first;s;)s._start>=i&&(s instanceof il?e&&n.push(s):(r&&n.push(s),t&&n.push.apply(n,s.getChildren(!0,e,r)))),s=s._next;return n},r.getById=function(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},r.remove=function(t){return t8(t)?this.removeLabel(t):t9(t)?this.killTweensOf(t):(eW(this,t),t===this._recent&&(this._recent=this._last),eQ(this))},r.totalTime=function(e,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=eD(rR.time-(this._ts>0?e/this._ts:-((this.totalDuration()-e)/this._ts)))),t.prototype.totalTime.call(this,e,r),this._forcing=0,this):this._tTime},r.addLabel=function(t,e){return this.labels[t]=ro(this,e),this},r.removeLabel=function(t){return delete this.labels[t],this},r.addPause=function(t,e,r){var i=il.delayedCall(0,e||eg,r);return i.data="isPause",this._hasPause=1,e9(this,i,ro(this,t))},r.removePause=function(t){var e=this._first;for(t=ro(this,t);e;)e._start===t&&"isPause"===e.data&&eG(e),e=e._next},r.killTweensOf=function(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)r3!==i[n]&&i[n].kill(t,e);return this},r.getTweensOf=function(t,e){for(var r,i=[],n=rp(t),s=this._first,o=t6(e);s;)s instanceof il?eL(s._targets,n)&&(o?(!r3||s._initted&&s._ts)&&s.globalTime(0)<=e&&s.globalTime(s.totalDuration())>e:!e||s.isActive())&&i.push(s):(r=s.getTweensOf(n,e)).length&&i.push.apply(i,r),s=s._next;return i}// potential future feature - targets() on timelines
,r.tweenTo=function(t,e){e=e||{};var r,i=this,n=ro(i,t),s=e,o=s.startAt,a=s.onStart,l=s.onStartParams,h=s.immediateRender,u=il.to(i,eU({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(o&&"time"in o?o.time:i._time))/i.timeScale())||1e-8,onStart:function(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(o&&"time"in o?o.time:i._time))/i.timeScale());u._dur!==t&&ri(u,t,0,1).render(u._time,!0,!0),r=1}a&&a.apply(u,l||[])}},e));return h?u.render(0):u},r.tweenFromTo=function(t,e,r){return this.tweenTo(e,eU({startAt:{time:ro(this,t)}},r))},r.recent=function(){return this._recent},r.nextLabel=function(t){return void 0===t&&(t=this._time),rP(this,ro(this,t))},r.previousLabel=function(t){return void 0===t&&(t=this._time),rP(this,ro(this,t),1)},r.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+1e-8)},r.shiftChildren=function(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,s=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in s)s[i]>=r&&(s[i]+=t);return eQ(this)},r.invalidate=function(e){var r=this._first;for(this._lock=0;r;)r.invalidate(e),r=r._next;return t.prototype.invalidate.call(this,e)},r.clear=function(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),eQ(this)},r.totalDuration=function(t){var e,r,i,n=0,s=this._last,o=1e8;if(arguments.length)return this.timeScale((this._repeat<0?this.duration():this.totalDuration())/(this.reversed()?-t:t));if(this._dirty){for(i=this.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),(r=s._start)>o&&this._sort&&s._ts&&!this._lock?(//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
this._lock=1,e9(this,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
n-=r,(!i&&!this._dp||i&&i.smoothChildTiming)&&(this._start+=r/this._ts,this._time-=r,this._tTime-=r),this.shiftChildren(-r,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=e;ri(this,this===tB&&this._time>n?this._time:n,1,1),this._dirty=0}return this._tDur},e.updateRoot=function(t){if(tB._ts&&(ez(tB,e2(t,tB)),tJ=rR.frame),rR.frame>=eT){eT+=tQ.autoSleep||120;var e=tB._first;if((!e||!e._ts)&&tQ.autoSleep&&rR._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||rR.sleep()}}},e}(rZ);eU(rK.prototype,{_lock:0,_hasPause:0,_forcing:0});var r0,r1,r2,r5,r3,r8,r9=function(t,e,r,i,n,s,o){//note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
var a,l,h,u,d,c,p,_,f=new iP(this._pt,t,e,0,1,iy,null,n),m=0,y=0;for(f.b=r,f.e=i,r+="",i+="",(p=~i.indexOf("random("))&&(i=rw(i)),s&&(s(_=[r,i],t,e),r=_[0],i=_[1]),l=r.match(el)||[];a=el.exec(i);)u=a[0],d=i.substring(m,a.index),h?h=(h+1)%5:"rgba("===d.substr(-5)&&(h=1),u!==l[y++]&&(c=parseFloat(l[y-1])||0,f._pt={_next:f._pt,p:d||1===y?d:",",//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
s:c,c:"="===u.charAt(1)?eR(c,u)-c:parseFloat(u)-c,m:h&&h<4?Math.round:0},m=el.lastIndex);return f.c=m<i.length?i.substring(m,i.length):"",f.fp=o,(eh.test(i)||p)&&(f.e=0),this._pt=f,f},r6=function(t,e,r,i,n,s,o,a,l,h){t9(i)&&(i=i(n||0,t,s));var u,d=t[e],c="get"!==r?r:t9(d)?l?t[e.indexOf("set")||!t9(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,p=t9(d)?l?id:iu:ih;if(t8(i)&&(~i.indexOf("random(")&&(i=rw(i)),"="===i.charAt(1)&&((u=eR(c,i)+(ru(c)||0))||0===u)&&(i=u)),!h||c!==i||r8)return isNaN(c*i)||""===i?(d||e in t||ef(e,i),r9.call(this,t,e,c,i,p,a||tQ.stringFilter,l)):(// fun fact: any number multiplied by "" is evaluated as the number 0!
u=new iP(this._pt,t,e,+c||0,i-(c||0),"boolean"==typeof d?im:i_,0,p),l&&(u.fp=l),o&&u.modifier(o,this,t),this._pt=u)},r4=function(t,e,r,i,n){if(t9(t)&&(t=is(t,n,e,r,i)),!t7(t)||t.style&&t.nodeType||en(t)||ei(t))return t8(t)?is(t,n,e,r,i):t;var s,o={};for(s in t)o[s]=is(t[s],n,e,r,i);return o},r7=function(t,e,r,i,n,s){var o,a,l,h;if(eA[t]&&!1!==(o=new eA[t]).init(n,o.rawVars?e[t]:r4(e[t],i,n,s,r),r,i,s)&&(r._pt=a=new iP(r._pt,n,t,0,1,o.render,o,0,o.priority),r!==tW))for(l=r._ptLookup[r._targets.indexOf(n)],h=o._props.length;h--;)l[o._props[h]]=a;return o},it=function t(e,r,i){var n,s,o,a,l,h,u,d,c,p,_,f,m,y=e.vars,g=y.ease,v=y.startAt,b=y.immediateRender,w=y.lazy,C=y.onUpdate,P=y.onUpdateParams,S=y.callbackScope,A=y.runBackwards,x=y.yoyoEase,T=y.keyframes,E=y.autoRevert,O=e._dur,N=e._startAt,M=e._targets,k=e.parent,I=k&&"nested"===k.data?k.vars.targets:M,$="auto"===e._overwrite&&!tH,D=e.timeline;if(!D||T&&g||(g="none"),e._ease=rV(g,tZ.ease),e._yEase=x?rq(rV(!0===x?g:x,tZ.ease)):0,x&&e._yoyo&&!e._repeat&&(//there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
x=e._yEase,e._yEase=e._ease,e._ease=x),e._from=!D&&!!y.runBackwards,!D||T&&!y.stagger){if(f=//if there's an internal timeline, skip all the parsing because we passed that task down the chain.
(d=M[0]?eM(M[0]).harness:0)&&y[d.prop],n=eY(y,eC),N&&(N._zTime<0&&N.progress(1),r<0&&A&&b&&!E?N.render(-1,!0):N.revert(A&&O?eb:ev),// don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
N._lazy=0),v){if(eG(e._startAt=il.set(M,eU({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!N&&et(w),startAt:null,delay:0,onUpdate:C,onUpdateParams:P,callbackScope:S,stagger:0},v))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(tj||!b&&!E)&&e._startAt.revert(eb),b&&O&&r<=0&&i<=0){// check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
r&&(e._zTime=r);return;//we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
}}else if(A&&O&&!N){if(r&&(b=!1),o=eU({overwrite:!1,data:"isFromStart",//we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
lazy:b&&!N&&et(w),immediateRender:b,//zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
stagger:0,parent:k//ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
},n),f&&(o[d.prop]=f),eG(e._startAt=il.set(M,o)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(tj?e._startAt.revert(eb):e._startAt.render(-1,!0)),e._zTime=r,b){if(!r)return}else t(e._startAt,1e-8,1e-8);//ensures that the initial values are recorded
}for(s=0,e._pt=e._ptCache=0,w=O&&et(w)||w&&!O;s<M.length;s++){if(u=(l=M[s])._gsap||eN(M)[s]._gsap,e._ptLookup[s]=p={},eS[u.id]&&eP.length&&eF(),_=I===M?s:I.indexOf(l),d&&!1!==(c=new d).init(l,f||n,e,_,I)&&(e._pt=a=new iP(e._pt,l,c.name,0,1,c.render,c,0,c.priority),c._props.forEach(function(t){p[t]=a}),c.priority&&(h=1)),!d||f)for(o in n)eA[o]&&(c=r7(o,n,e,_,l,I))?c.priority&&(h=1):p[o]=a=r6.call(e,l,o,"get",n[o],_,I,0,y.stringFilter);e._op&&e._op[s]&&e.kill(l,e._op[s]),$&&e._pt&&(r3=e,tB.killTweensOf(l,p,e.globalTime(r)),m=!e.parent,r3=0),e._pt&&w&&(eS[u.id]=1)}h&&iC(e),e._onInit&&e._onInit(e)}e._onUpdate=C,e._initted=(!e._op||e._pt)&&!m,T&&r<=0&&D.render(1e8,!0,!0)},ie=function(t,e,r,i,n,s,o){var a,l,h,u,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],h=t._ptLookup,u=t._targets.length;u--;){if((a=h[u][e])&&a.d&&a.d._pt)for(// it's a plugin, so find the nested PropTween
a=a.d._pt;a&&a.p!==e&&a.fp!==e;)a=a._next;if(!a)return(// there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
// if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
r8=1,t.vars[e]="+=0",it(t,o),r8=0,1);d.push(a)}for(u=d.length;u--;)(a=(l=d[u])._pt||l).s=(i||0===i)&&!n?i:a.s+(i||0)+s*a.c,a.c=r-a.s,l.e&&(l.e=e$(r)+ru(l.e)),l.b&&(l.b=a.s+ru(l.b))},ir=function(t,e){var r,i,n,s,o=t[0]?eM(t[0]).harness:0,a=o&&o.aliases;if(!a)return e;for(i in r=eB({},e),a)if(i in r)for(n=(s=a[i].split(",")).length;n--;)r[s[n]]=r[i];return r},ii=function(t,e,r,i){var n,s,o=e.ease||i||"power1.inOut";if(en(e))s=r[t]||(r[t]=[]),e.forEach(function(t,r){return s.push({t:r/(e.length-1)*100,v:t,e:o})});else for(n in e)s=r[n]||(r[n]=[]),"ease"===n||s.push({t:parseFloat(t),v:e[n],e:o})},is=function(t,e,r,i,n){return t9(t)?t.call(e,r,i,n):t8(t)&&~t.indexOf("random(")?rw(t):t},io=eO+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ia={};eI(io+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return ia[t]=1});var il=/*#__PURE__*/function(t){function e(e,r,i,n){"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,a,l,h,u,d,c,p,_=(s=t.call(this,n?r:eV(r))||this).vars,f=_.duration,m=_.delay,y=_.immediateRender,g=_.stagger,v=_.overwrite,b=_.keyframes,w=_.defaults,C=_.scrollTrigger,P=_.yoyoEase,S=r.parent||tB,A=(en(e)||ei(e)?t6(e[0]):"length"in r)?[e]:rp(e);if(s._targets=A.length?eN(A):em("GSAP target "+e+" not found. https://greensock.com",!tQ.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=v,b||g||er(f)||er(m)){if(r=s.vars,(o=s.timeline=new rK({data:"nested",defaults:w||{},targets:S&&"nested"===S.data?S.vars.targets:A})).kill(),o.parent=o._dp=tv(s),o._start=0,g||er(f)||er(m)){if(h=A.length,c=g&&rm(g),t7(g))//users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
for(u in g)~io.indexOf(u)&&(p||(p={}),p[u]=g[u]);for(a=0;a<h;a++)(l=eY(r,ia)).stagger=0,P&&(l.yoyoEase=P),p&&eB(l,p),d=A[a],l.duration=+is(f,tv(s),a,d,A),l.delay=(+is(m,tv(s),a,d,A)||0)-s._delay,!g&&1===h&&l.delay&&(// if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
s._delay=m=l.delay,s._start+=m,l.delay=0),o.to(d,l,c?c(a,d,A):0),o._ease=rF.none;o.duration()?f=m=0:s.timeline=0}else if(b){eV(eU(o.vars.defaults,{ease:"none"})),o._ease=rV(b.ease||r.ease||"none");var x,T,E,O=0;if(en(b))b.forEach(function(t){return o.to(A,t,">")}),o.duration();else{for(u in l={},b)"ease"===u||"easeEach"===u||ii(u,b[u],l,b.easeEach);for(u in l)for(a=0,x=l[u].sort(function(t,e){return t.t-e.t}),O=0;a<x.length;a++)(E={ease:(T=x[a]).e,duration:(T.t-(a?x[a-1].t:0))/100*f})[u]=T.v,o.to(A,E,O),O+=E.duration;o.duration()<f&&o.to({},{duration:f-o.duration()})}}f||s.duration(f=o.duration())}else s.timeline=0;//speed optimization, faster lookups (no going up the prototype chain)
return!0!==v||tH||(r3=tv(s),tB.killTweensOf(A),r3=0),e9(S,tv(s),i),r.reversed&&s.reverse(),r.paused&&s.paused(!0),(y||!f&&!b&&s._start===eD(S._time)&&et(y)&&function t(e){return!e||e._ts&&t(e.parent)}(tv(s))&&"nested"!==S.data)&&(s._tTime=-.00000001,s.render(Math.max(0,-m)||0)),C&&e6(tv(s),C),s}tb(e,t);var r=e.prototype;return r.render=function(t,e,r){var i,n,s,o,a,l,h,u,d,c=this._time,p=this._tDur,_=this._dur,f=t<0,m=t>p-1e-8&&!f?p:t<1e-8?0:t;if(_){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(//this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
i=m,u=this.timeline,this._repeat){if(//adjust the time for repeats and yoyos
o=_+this._rDelay,this._repeat<-1&&f)return this.totalTime(100*o+t,e,r);if(i=eD(m%o),m===p?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
s=this._repeat,i=_):((s=~~(m/o))&&s===m/o&&(i=_,s--),i>_&&(i=_)),(l=this._yoyo&&1&s)&&(d=this._yEase,i=_-i),a=e1(this._tTime,o),i===c&&!r&&this._initted)return(//could be during the repeatDelay part. No need to render and fire callbacks.
this._tTime=m,this);s===a||(u&&this._yEase&&rY(u,l),!this.vars.repeatRefresh||l||this._lock||(this._lock=r=1,this.render(eD(o*s),!0).invalidate()._lock=0))}if(!this._initted){if(e4(this,f?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(_!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(d||this._ease)(i/_),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&!s&&(rS(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;u&&u.render(t<0?t:!i&&l?-.00000001:u._dur*u._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(f&&eK(this,t,e,r),rS(this,"onUpdate")),this._repeat&&s!==a&&this.vars.onRepeat&&!e&&this.parent&&rS(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(f&&!this._onUpdate&&eK(this,t,!0,!0),(t||!_)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&eG(this,1),!e&&!(f&&!c)&&(m||c||l)&&(// if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
rS(this,m===p?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom()))}}else re(this,t,e,r);return this},r.targets=function(){return this._targets},r.invalidate=function(e){return(e&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e))},r.resetTo=function(t,e,r,i){tG||rR.wake(),this._ts||this.play();var n=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return(// possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
// if (_isObject(property)) { // performance optimization
// 	for (p in property) {
// 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
// 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
// 		}
// 	}
// } else {
(this._initted||it(this,n),ie(this,t,e,r,i,this._ease(n/this._dur),n))?this.resetTo(t,e,r,i):(//}
e3(this,0),this.parent||eJ(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))// if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
)},r.kill=function(t,e){if(void 0===e&&(e="all"),!t&&(!e||"all"===e))return this._lazy=this._pt=0,this.parent?rA(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,r3&&!0!==r3.vars.overwrite)._first||rA(this),this.parent&&r!==this.timeline.totalDuration()&&ri(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,s,o,a,l,h,u=this._targets,d=t?rp(t):u,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&eX(u,d))return"all"===e&&(this._pt=0),rA(this);for(i=this._op=this._op||[],"all"!==e&&(t8(e)&&(a={},eI(e,function(t){return a[t]=1}),e=a),e=ir(u,e)),h=u.length;h--;)if(~d.indexOf(u[h]))for(a in n=c[h],"all"===e?(i[h]=e,o=n,s={}):(s=i[h]=i[h]||{},o=e),o)(l=n&&n[a])&&("kill"in l.d&&!0!==l.d.kill(a)||eW(this,l,"_pt"),delete n[a]),"all"!==s&&(s[a]=1);return this._initted&&!this._pt&&p&&rA(this),this},e.to=function(t,r){return new e(t,r,arguments[2])},e.from=function(t,e){return ra(1,arguments)},e.delayedCall=function(t,r,i,n){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:r,onReverseComplete:r,onCompleteParams:i,onReverseCompleteParams:i,callbackScope:n});// we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
},e.fromTo=function(t,e,r){return ra(2,arguments)},e.set=function(t,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(t,r)},e.killTweensOf=function(t,e,r){return tB.killTweensOf(t,e,r)},e}(rZ);eU(il.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
eI("staggerTo,staggerFrom,staggerFromTo",function(t){il[t]=function(){var e=new rK,r=rd.call(arguments,0);return r.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,r)}});/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */var ih=function(t,e,r){return t[e]=r},iu=function(t,e,r){return t[e](r)},id=function(t,e,r,i){return t[e](i.fp,r)},ic=function(t,e,r){return t.setAttribute(e,r)},ip=function(t,e){return t9(t[e])?iu:t4(t[e])&&t.setAttribute?ic:ih},i_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},im=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},iy=function(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+i,r=r._next;i+=e.c;//we use the "c" of the PropTween to store the final chunk of non-numeric text.
}e.set(e.t,e.p,i,e)},ig=function(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},iv=function(t,e,r,i){for(var n,s=this._pt;s;)n=s._next,s.p===i&&s.modifier(t,e,r),s=n},ib=function(t){for(var e,r,i=this._pt;i;)r=i._next,(i.p!==t||i.op)&&i.op!==t?i.dep||(e=1):eW(this,i,"_pt"),i=r;return!e},iw=function(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)},iC=function(t){for(var e,r,i,n,s=t._pt;s;){for(e=s._next,r=i;r&&r.pr>s.pr;)r=r._next;(s._prev=r?r._prev:n)?s._prev._next=s:i=s,(s._next=r)?r._prev=s:n=s,s=e}t._pt=i},iP=/*#__PURE__*/function(){function t(t,e,r,i,n,s,o,a,l){this.t=e,this.s=i,this.c=n,this.p=r,this.r=s||i_,this.d=o||this,this.set=a||ih,this.pr=l||0,this._next=t,t&&(t._prev=this)}return t.prototype.modifier=function(t,e,r){this.mSet=this.mSet||this.set,this.set=iw,this.m=t,this.mt=r,this.tween=e},t}();//PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
eI(eO+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return eC[t]=1}),ec.TweenMax=ec.TweenLite=il,ec.TimelineLite=ec.TimelineMax=rK,tB=new rK({sortChildren:!1,defaults:tZ,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),tQ.stringFilter=rD;var iS=[],iA={},ix=[],iT=0,iE=0,iO=function(t){return(iA[t]||ix).map(function(t){return t()})},iN=function(){var t=Date.now(),e=[];t-iT>2&&(iO("matchMediaInit"),iS.forEach(function(t){var r,i,n,s,o=t.queries,a=t.conditions;for(i in o)(r=tq.matchMedia(o[i]).matches)&&(n=1),r!==a[i]&&(a[i]=r,s=1);s&&(t.revert(),n&&e.push(t))}),iO("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t)}),iT=t,iO("matchMedia"))},iM=/*#__PURE__*/function(){function t(t,e){this.selector=e&&r_(e),this.data=[],this._r=[],this.isReverted=!1,this.id=iE++,t&&this.add(t)}var e=t.prototype;return e.add=function(t,e,r){t9(t)&&(r=e,e=t,t=t9);var i=this,n=function(){var t,n=tU,s=i.selector;return n&&n!==i&&n.data.push(i),r&&(i.selector=r_(r)),tU=i,t=e.apply(i,arguments),t9(t)&&i._r.push(t),tU=n,i.selector=s,i.isReverted=!1,t};return i.last=n,t===t9?n(i):t?i[t]=n:n},e.ignore=function(t){var e=tU;tU=null,t(this),tU=e},e.getTweens=function(){var e=[];return this.data.forEach(function(r){return r instanceof t?e.push.apply(e,r.getTweens()):r instanceof il&&!(r.parent&&"nested"===r.parent.data)&&e.push(r)}),e},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,e){var r=this;if(t){var i=this.getTweens();this.data.forEach(function(t){// Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(e){return e.t.revert(t)}),this.data.forEach(function(e){return!(e instanceof il)&&e.revert&&e.revert(t)}),this._r.forEach(function(e){return e(t,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),e)for(var n=iS.length;n--;)iS[n].id===this.id&&iS.splice(n,1)},e.revert=function(t){this.kill(t||{})},t}(),ik=/*#__PURE__*/function(){function t(t){this.contexts=[],this.scope=t}var e=t.prototype;return e.add=function(t,e,r){t7(t)||(t={matches:t});var i,n,s,o=new iM(0,r||this.scope),a=o.conditions={};for(n in tU&&!o.selector&&(o.selector=tU.selector),this.contexts.push(o),e=o.add("onMatch",e),o.queries=t,t)"all"===n?s=1:(i=tq.matchMedia(t[n]))&&(0>iS.indexOf(o)&&iS.push(o),(a[n]=i.matches)&&(s=1),i.addListener?i.addListener(iN):i.addEventListener("change",iN));return s&&e(o),this}// refresh() {
,e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(e){return e.kill(t,!0)})},t}(),iI={registerPlugin:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return rT(t)})},timeline:function(t){return new rK(t)},getTweensOf:function(t,e){return tB.getTweensOf(t,e)},getProperty:function(t,e,r,i){t8(t)&&(t=rp(t)[0]);var n=eM(t||{}).get,s=r?ej:eH;return"native"===r&&(r=""),t?e?s((eA[e]&&eA[e].get||n)(t,e,r,i)):function(e,r,i){return s((eA[e]&&eA[e].get||n)(t,e,r,i))}:t},quickSetter:function(t,e,r){if((t=rp(t)).length>1){var i=t.map(function(t){return iL.quickSetter(t,e,r)}),n=i.length;return function(t){for(var e=n;e--;)i[e](t)}}t=t[0]||{};var s=eA[e],o=eM(t),a=o.harness&&(o.harness.aliases||{})[e]||e,l=s?function(e){var i=new s;tW._pt=0,i.init(t,r?e+r:e,tW,0,[t]),i.render(1,i),tW._pt&&ig(1,tW)}:o.set(t,a);return s?l:function(e){return l(t,a,r?e+r:e,o,1)}},quickTo:function(t,e,r){var i,n=iL.to(t,eB(((i={})[e]="+=0.1",i.paused=!0,i),r||{})),s=function(t,r,i){return n.resetTo(e,t,r,i)};return s.tween=n,s},isTweening:function(t){return tB.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=rV(t.ease,tZ.ease)),eq(tZ,t||{})},config:function(t){return eq(tQ,t||{})},registerEffect:function(t){var e=t.name,r=t.effect,i=t.plugins,n=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach(function(t){return t&&!eA[t]&&!ec[t]&&em(e+" effect requires "+t+" plugin.")}),ex[e]=function(t,e,i){return r(rp(t),eU(e||{},n),i)},s&&(rK.prototype[e]=function(t,r,i){return this.add(ex[e](t,t7(r)?r:(i=r)&&{},this),i)})},registerEase:function(t,e){rF[t]=rV(e)},parseEase:function(t,e){return arguments.length?rV(t,e):rF},getById:function(t){return tB.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var r,i,n=new rK(t);for(n.smoothChildTiming=et(t.smoothChildTiming),tB.remove(n),n._dp=0,n._time=n._tTime=tB._time,r=tB._first;r;)i=r._next,(e||!(!r._dur&&r instanceof il&&r.vars.onComplete===r._targets[0]))&&e9(n,r,r._start-r._delay),r=i;return e9(tB,n,0),n},context:function(t,e){return t?new iM(t,e):tU},matchMedia:function(t){return new ik(t)},matchMediaRefresh:function(){return iS.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||iN()},addEventListener:function(t,e){var r=iA[t]||(iA[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function(t,e){var r=iA[t],i=r&&r.indexOf(e);i>=0&&r.splice(i,1)},utils:{wrap:function t(e,r,i){// NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
var n=r-e;return en(e)?rb(e,t(0,e.length),r):rl(i,function(t){return(n+(t-e)%n)%n+e})},wrapYoyo:function t(e,r,i){var n=r-e,s=2*n;return en(e)?rb(e,t(0,e.length-1),r):rl(i,function(t){return t=(s+(t-e)%s)%s||0,e+(t>n?s-t:t)})},distribute:rm,random:rv,snap:rg,normalize:function(t,e,r){return rC(t,e,0,1,r)},getUnit:ru,clamp:function(t,e,r){return rl(r,function(r){return rh(t,e,r)})},splitColor:rN,toArray:rp,selector:r_,mapRange:rC,pipe:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function(t,e){return function(r){return t(parseFloat(r))+(e||ru(r))}},interpolate:function t(e,r,i,n){var s=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!s){var o,a,l,h,u,d=t8(e),c={};if(!0===i&&(n=1)&&(i=null),d)e={p:e},r={p:r};else if(en(e)&&!en(r)){for(a=1,l=[],u=(h=e.length)-2;a<h;a++)l.push(t(e[a-1],e[a]));//build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
h--,s=function(t){var e=Math.min(u,~~(t*=h));return l[e](t-e)},i=r}else n||(e=eB(en(e)?[]:{},e));if(!l){for(o in r)r6.call(c,e,o,"get",r[o]);s=function(t){return ig(t,c)||(d?e.p:e)}}}return rl(i,s)},shuffle:rf},install:e_,effects:ex,ticker:rR,updateRoot:rK.updateRoot,plugins:eA,globalTimeline:tB,core:{PropTween:iP,globals:ey,Tween:il,Timeline:rK,Animation:rZ,getCache:eM,_removeLinkedListItem:eW,reverting:function(){return tj},context:function(t){return t&&tU&&(tU.data.push(t),t._ctx=tU),tU},suppressOverwrites:function(t){return tH=t}}};eI("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return iI[t]=il[t]}),rR.add(rK.updateRoot),tW=iI.to({},{duration:0});var i$=function(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r},iD=function(t,e){var r,i,n,s=t._targets;for(r in e)for(i=s.length;i--;)(n=t._ptLookup[i][r])&&(n=n.d)&&(n._pt&&(n=i$(n,r)),n&&n.modifier&&n.modifier(e[r],t,s[i],r))},iR=function(t,e){return{name:t,rawVars:1,//don't pre-process function-based values or "random()" strings.
init:function(t,r,i){i._onInit=function(t){var i,n;if(t8(r)&&(i={},eI(r,function(t){return i[t]=1}),r=i),e){for(n in i={},r)i[n]=e(r[n]);r=i}iD(t,r)}}}},iL=iI.registerPlugin({name:"attr",init:function(t,e,r,i,n){var s,o,a;for(s in this.tween=r,e)a=t.getAttribute(s)||"",(o=this.add(t,"setAttribute",(a||0)+"",e[s],i,n,0,0,s)).op=s,o.b=a,this._props.push(s)},render:function(t,e){for(var r=e._pt;r;)tj?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},iR("roundProps",ry),iR("modifiers"),iR("snap",rg))||iI;//register core plugins
il.version=rK.version=iL.version="3.12.2",tX=1,ee()&&rL(),rF.Power0,rF.Power1,rF.Power2,rF.Power3,rF.Power4,rF.Linear,rF.Quad,rF.Cubic,rF.Quart,rF.Quint,rF.Strong,rF.Elastic,rF.Back,rF.SteppedEase,rF.Bounce,rF.Sine,rF.Expo,rF.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var iF,iz,iH,ij,iU,iB,iq,iY={},iV=180/Math.PI,iX=Math.PI/180,iJ=Math.atan2,iW=/([A-Z])/g,iG=/(left|right|width|margin|padding|x)/i,iQ=/[\s,\(]\S/,iZ={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},iK=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},i0=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},i1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},i2=function(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)},i5=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},i3=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},i8=function(t,e,r){return t.style[e]=r},i9=function(t,e,r){return t.style.setProperty(e,r)},i6=function(t,e,r){return t._gsap[e]=r},i4=function(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r},i7=function(t,e,r,i,n){var s=t._gsap;s.scaleX=s.scaleY=r,s.renderTransform(n,s)},nt=function(t,e,r,i,n){var s=t._gsap;s[e]=r,s.renderTransform(n,s)},ne="transform",nr=ne+"Origin",ni=function t(e,r){var i=this,n=this.target,s=n.style;if(e in iY&&s){if(this.tfm=this.tfm||{},"transform"===e)return iZ.transform.split(",").forEach(function(e){return t.call(i,e,r)});if(~(e=iZ[e]||e).indexOf(",")?e.split(",").forEach(function(t){return i.tfm[t]=nw(n,t)}):this.tfm[e]=n._gsap.x?n._gsap[e]:nw(n,e),this.props.indexOf(ne)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(nr,r,"")),e=ne}(s||r)&&this.props.push(e,r,s[e])},nn=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ns=function(){var t,e,r=this.props,i=this.target,n=i.style,s=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(iW,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)s[e]=this.tfm[e];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=iB())&&t.isStart||n[ne]||(nn(n),s.uncache=1)}},no=function(t,e){var r={target:t,props:[],revert:ns,save:ni};return t._gsap||iL.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r},na=function(t,e){var r=iF.createElementNS?iF.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):iF.createElement(t);//some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
return r.style?r:iF.createElement(t);//some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},nl=function t(e,r,i){var n=getComputedStyle(e);return n[r]||n.getPropertyValue(r.replace(iW,"-$1").toLowerCase())||n.getPropertyValue(r)||!i&&t(e,nu(r)||r,1)||"";//css variables may not need caps swapped out for dashes and lowercase.
},nh="O,Moz,ms,Ms,Webkit".split(","),nu=function(t,e,r){var i=(e||ij).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(nh[n]+t in i););return n<0?null:(3===n?"ms":n>=0?nh[n]:"")+t},nd=function(){"undefined"!=typeof window&&window.document&&(iz=(iF=window.document).documentElement,ij=na("div")||{style:{}},na("div"),nr=(ne=nu(ne))+"Origin",ij.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",iq=!!nu("perspective"),iB=iL.core.reverting,iH=1)},nc=function t(e){//works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
var r,i=na("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,o=this.style.cssText;if(iz.appendChild(i),i.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(t){}else this._gsapBBox&&(r=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),iz.removeChild(i),this.style.cssText=o,r},np=function(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])},n_=function(t){var e;try{e=t.getBBox();//Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
}catch(r){e=nc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===nc||(e=nc.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+np(t,["x","cx","x1"])||0,y:+np(t,["y","cy","y1"])||0,width:0,height:0}},nf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&n_(t))},nm=function(t,e){if(e){var r=t.style;e in iY&&e!==nr&&(e=ne),r.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),r.removeProperty(e.replace(iW,"-$1").toLowerCase())):r.removeAttribute(e)}},ny=function(t,e,r,i,n,s){var o=new iP(t._pt,e,r,0,1,s?i3:i5);return t._pt=o,o.b=i,o.e=n,t._props.push(r),o},ng={deg:1,rad:1,turn:1},nv={grid:1,flex:1},nb=function t(e,r,i,n){var s,o,a,l,h=parseFloat(i)||0,u=(i+"").trim().substr((h+"").length)||"px",d=ij.style,c=iG.test(r),p="svg"===e.tagName.toLowerCase(),_=(p?"client":"offset")+(c?"Width":"Height"),f="px"===n,m="%"===n;return n===u||!h||ng[n]||ng[u]?h:("px"===u||f||(h=t(e,r,i,"px")),l=e.getCTM&&nf(e),(m||"%"===u)&&(iY[r]||~r.indexOf("adius")))?(s=l?e.getBBox()[c?"width":"height"]:e[_],e$(m?h/s*100:h/100*s)):(d[c?"width":"height"]=100+(f?u:n),o=~r.indexOf("adius")||"em"===n&&e.appendChild&&!p?e:e.parentNode,l&&(o=(e.ownerSVGElement||{}).parentNode),o&&o!==iF&&o.appendChild||(o=iF.body),(a=o._gsap)&&m&&a.width&&c&&a.time===rR.time&&!a.uncache)?e$(h/a.width*100):((m||"%"===u)&&!nv[nl(o,"display")]&&(d.position=nl(e,"position")),o===e&&(d.position="static"),o.appendChild(ij),s=ij[_],o.removeChild(ij),d.position="absolute",c&&m&&((a=eM(o)).time=rR.time,a.width=o[_]),e$(f?s*h/100:s&&h?100/s*h:0))},nw=function(t,e,r,i){var n;return iH||nd(),e in iZ&&"transform"!==e&&~(e=iZ[e]).indexOf(",")&&(e=e.split(",")[0]),iY[e]&&"transform"!==e?(n=nI(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:n$(nl(t,nr))+" "+n.zOrigin+"px"):(!(n=t.style[e])||"auto"===n||i||~(n+"").indexOf("calc("))&&(n=nx[e]&&nx[e](t,e,r)||nl(t,e)||ek(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?nb(t,e,n,r)+r:n},nC=function(t,e,r,i){// note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
if(!r||"none"===r){// some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
var n=nu(e,t,1),s=n&&nl(t,n,1);s&&s!==r?(e=n,r=s):"borderColor"===e&&(r=nl(t,"borderTopColor"));// Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
}var o,a,l,h,u,d,c,p,_,f,m,y=new iP(this._pt,t.style,e,0,1,iy),g=0,v=0;if(y.b=r,y.e=i,r+="","auto"==(i+="")&&(t.style[e]=i,i=nl(t,e)||i,t.style[e]=r),rD(o=[r,i]),r=o[0],i=o[1],l=r.match(ea)||[],(i.match(ea)||[]).length){for(;a=ea.exec(i);)c=a[0],_=i.substring(g,a.index),u?u=(u+1)%5:("rgba("===_.substr(-5)||"hsla("===_.substr(-5))&&(u=1),c!==(d=l[v++]||"")&&(h=parseFloat(d)||0,m=d.substr((h+"").length),"="===c.charAt(1)&&(c=eR(h,c)+m),p=parseFloat(c),f=c.substr((p+"").length),g=ea.lastIndex-f.length,f||(//if something like "perspective:300" is passed in and we must add a unit to the end
f=f||tQ.units[e]||m,g!==i.length||(i+=f,y.e+=f)),m!==f&&(h=nb(t,e,d,f)||0),// these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
y._pt={_next:y._pt,p:_||1===v?_:",",//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
s:h,c:p-h,m:u&&u<4||"zIndex"===e?Math.round:0});y.c=g<i.length?i.substring(g,i.length):"";//we use the "c" of the PropTween to store the final part of the string (after the last number)
}else y.r="display"===e&&"none"===i?i3:i5;return eh.test(i)&&(y.e=0),this._pt=y,y},nP={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nS=function(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return("top"===r||"bottom"===r||"left"===i||"right"===i)&&(//the user provided them in the wrong order, so flip them
t=r,r=i,i=t),e[0]=nP[r]||r,e[1]=nP[i]||i,e.join(" ")},nA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,s=e.t,o=s.style,a=e.u,l=s._gsap;if("all"===a||!0===a)o.cssText="",i=1;else for(n=(a=a.split(",")).length;--n>-1;)iY[r=a[n]]&&(i=1,r="transformOrigin"===r?nr:ne),nm(s,r);i&&(nm(s,ne),l&&(l.svg&&s.removeAttribute("transform"),nI(s,1),l.uncache=1,nn(o)))}},nx={clearProps:function(t,e,r,i,n){if("isFromStart"!==n.data){var s=t._pt=new iP(t._pt,e,r,0,0,nA);return s.u=i,s.pr=-10,s.tween=n,t._props.push(r),1}}},/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */nT=[1,0,0,1,0,0],nE={},nO=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},nN=function(t){var e=nl(t,ne);return nO(e)?nT:e.substr(7).match(eo).map(e$)},nM=function(t,e){var r,i,n,s,o=t._gsap||eM(t),a=t.style,l=nN(t);return o.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?nT:l:(l!==nT||t.offsetParent||t===iz||o.svg||(//note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
n=a.display,a.display="block",(r=t.parentNode)&&t.offsetParent||(// note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
s=1,i=t.nextElementSibling,iz.appendChild(t)),l=nN(t),n?a.display=n:nm(t,"display"),s&&(i?r.insertBefore(t,i):r?r.appendChild(t):iz.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},nk=function(t,e,r,i,n,s){var o,a,l,h,u=t._gsap,d=n||nM(t,!0),c=u.xOrigin||0,p=u.yOrigin||0,_=u.xOffset||0,f=u.yOffset||0,m=d[0],y=d[1],g=d[2],v=d[3],b=d[4],w=d[5],C=e.split(" "),P=parseFloat(C[0])||0,S=parseFloat(C[1])||0;r?d!==nT&&(a=m*v-y*g)&&(//if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
l=P*(v/a)+S*(-g/a)+(g*w-v*b)/a,h=P*(-y/a)+S*(m/a)-(m*w-y*b)/a,P=l,S=h):(P=(o=n_(t)).x+(~C[0].indexOf("%")?P/100*o.width:P),S=o.y+(~(C[1]||C[0]).indexOf("%")?S/100*o.height:S)),i||!1!==i&&u.smooth?(b=P-c,w=S-p,u.xOffset=_+(b*m+w*g)-b,u.yOffset=f+(b*y+w*v)-w):u.xOffset=u.yOffset=0,u.xOrigin=P,u.yOrigin=S,u.smooth=!!i,u.origin=e,u.originIsAbsolute=!!r,t.style[nr]="0px 0px",s&&(ny(s,u,"xOrigin",c,P),ny(s,u,"yOrigin",p,S),ny(s,u,"xOffset",_,u.xOffset),ny(s,u,"yOffset",f,u.yOffset)),t.setAttribute("data-svg-origin",P+" "+S)},nI=function(t,e){var r=t._gsap||new rQ(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,s,o,a,l,h,u,d,c,p,_,f,m,y,g,v,b,w,C,P,S,A,x,T,E,O,N,M,k,I,$,D=t.style,R=r.scaleX<0,L=getComputedStyle(t),F=nl(t,nr)||"0";return i=n=s=l=h=u=d=c=p=0,o=a=1,r.svg=!!(t.getCTM&&nf(t)),L.translate&&(("none"!==L.translate||"none"!==L.scale||"none"!==L.rotate)&&(D[ne]=("none"!==L.translate?"translate3d("+(L.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==L.rotate?"rotate("+L.rotate+") ":"")+("none"!==L.scale?"scale("+L.scale.split(" ").join(",")+") ":"")+("none"!==L[ne]?L[ne]:"")),D.scale=D.rotate=D.translate="none"),m=nM(t,r.svg),r.svg&&(r.uncache?(// if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
T=t.getBBox(),F=r.xOrigin-T.x+"px "+(r.yOrigin-T.y)+"px",x=""):x=!e&&t.getAttribute("data-svg-origin"),nk(t,x||F,!!x||r.originIsAbsolute,!1!==r.smooth,m)),_=r.xOrigin||0,f=r.yOrigin||0,m!==nT&&(b=m[0],w=m[1],C=m[2],P=m[3],i=S=m[4],n=A=m[5],6===m.length?(o=Math.sqrt(b*b+w*w),a=Math.sqrt(P*P+C*C),l=b||w?iJ(w,b)*iV:0,(d=C||P?iJ(C,P)*iV+l:0)&&(a*=Math.abs(Math.cos(d*iX))),r.svg&&(i-=_-(_*b+f*C),n-=f-(_*w+f*P))):($=m[6],k=m[7],O=m[8],N=m[9],M=m[10],I=m[11],i=m[12],n=m[13],s=m[14],h=(y=iJ($,M))*iV,y&&(x=S*(g=Math.cos(-y))+O*(v=Math.sin(-y)),T=A*g+N*v,E=$*g+M*v,O=-(S*v)+O*g,N=-(A*v)+N*g,M=-($*v)+M*g,I=-(k*v)+I*g,S=x,A=T,$=E),u=(y=iJ(-C,M))*iV,y&&(x=b*(g=Math.cos(-y))-O*(v=Math.sin(-y)),T=w*g-N*v,E=C*g-M*v,I=P*v+I*g,b=x,w=T,C=E),l=(y=iJ(w,b))*iV,y&&(x=b*(g=Math.cos(y))+w*(v=Math.sin(y)),T=S*g+A*v,w=w*g-b*v,A=A*g-S*v,b=x,S=T),h&&Math.abs(h)+Math.abs(l)>359.9&&(//when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
h=l=0,u=180-u),o=e$(Math.sqrt(b*b+w*w+C*C)),a=e$(Math.sqrt(A*A+$*$)),d=Math.abs(y=iJ(S,A))>2e-4?y*iV:0,p=I?1/(I<0?-I:I):0),r.svg&&(//sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
x=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!nO(nl(t,ne)),x&&t.setAttribute("transform",x))),Math.abs(d)>90&&270>Math.abs(d)&&(R?(o*=-1,d+=l<=0?180:-180,l+=l<=0?180:-180):(a*=-1,d+=d<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=s+"px",r.scaleX=e$(o),r.scaleY=e$(a),r.rotation=e$(l)+"deg",r.rotationX=e$(h)+"deg",r.rotationY=e$(u)+"deg",r.skewX=d+"deg",r.skewY=c+"deg",r.transformPerspective=p+"px",(r.zOrigin=parseFloat(F.split(" ")[2])||0)&&(D[nr]=n$(F)),r.xOffset=r.yOffset=0,r.force3D=tQ.force3D,r.renderTransform=r.svg?nz:iq?nF:nR,r.uncache=0,r},n$=function(t){return(t=t.split(" "))[0]+" "+t[1]},nD=function(t,e,r){var i=ru(e);return e$(parseFloat(e)+parseFloat(nb(t,"x",r+"px",i)))+i},nR=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,nF(t,e)},nL="0deg",nF=function(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,s=r.x,o=r.y,a=r.z,l=r.rotation,h=r.rotationY,u=r.rotationX,d=r.skewX,c=r.skewY,p=r.scaleX,_=r.scaleY,f=r.transformPerspective,m=r.force3D,y=r.target,g=r.zOrigin,v="",b="auto"===m&&t&&1!==t||!0===m;// Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
if(g&&(u!==nL||h!==nL)){var w,C=parseFloat(h)*iX,P=Math.sin(C),S=Math.cos(C);s=nD(y,s,-(P*(w=Math.cos(C=parseFloat(u)*iX))*g)),o=nD(y,o,-(-Math.sin(C)*g)),a=nD(y,a,-(S*w*g)+g)}"0px"!==f&&(v+="perspective("+f+") "),(i||n)&&(v+="translate("+i+"%, "+n+"%) "),(b||"0px"!==s||"0px"!==o||"0px"!==a)&&(v+="0px"!==a||b?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+") "),l!==nL&&(v+="rotate("+l+") "),h!==nL&&(v+="rotateY("+h+") "),u!==nL&&(v+="rotateX("+u+") "),(d!==nL||c!==nL)&&(v+="skew("+d+", "+c+") "),(1!==p||1!==_)&&(v+="scale("+p+", "+_+") "),y.style[ne]=v||"translate(0, 0)"},nz=function(t,e){var r,i,n,s,o,a=e||this,l=a.xPercent,h=a.yPercent,u=a.x,d=a.y,c=a.rotation,p=a.skewX,_=a.skewY,f=a.scaleX,m=a.scaleY,y=a.target,g=a.xOrigin,v=a.yOrigin,b=a.xOffset,w=a.yOffset,C=a.forceCSS,P=parseFloat(u),S=parseFloat(d);c=parseFloat(c),p=parseFloat(p),(_=parseFloat(_))&&(p+=//for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
_=parseFloat(_),c+=_),c||p?(c*=iX,p*=iX,r=Math.cos(c)*f,i=Math.sin(c)*f,n=-(Math.sin(c-p)*m),s=Math.cos(c-p)*m,p&&(_*=iX,n*=o=Math.sqrt(1+(o=Math.tan(p-_))*o),s*=o,_&&(r*=o=Math.sqrt(1+(o=Math.tan(_))*o),i*=o)),r=e$(r),i=e$(i),n=e$(n),s=e$(s)):(r=f,s=m,i=n=0),(P&&!~(u+"").indexOf("px")||S&&!~(d+"").indexOf("px"))&&(P=nb(y,"x",u,"px"),S=nb(y,"y",d,"px")),(g||v||b||w)&&(P=e$(P+g-(g*r+v*n)+b),S=e$(S+v-(g*i+v*s)+w)),(l||h)&&(P=e$(P+l/100*//The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
(o=y.getBBox()).width),S=e$(S+h/100*o.height)),o="matrix("+r+","+i+","+n+","+s+","+P+","+S+")",y.setAttribute("transform",o),C&&(y.style[ne]=o)},nH=function(t,e,r,i,n){var s,o,a=t8(n),l=parseFloat(n)*(a&&~n.indexOf("rad")?iV:1)-i,h=i+l+"deg";return a&&("short"===(s=n.split("_")[1])&&(l%=360)!=l%180&&(l+=l<0?360:-360),"cw"===s&&l<0?l=(l+36e9)%360-360*~~(l/360):"ccw"===s&&l>0&&(l=(l-36e9)%360-360*~~(l/360))),t._pt=o=new iP(t._pt,e,r,i,l,i0),o.e=h,o.u="deg",t._props.push(r),o},nj=function(t,e){// Internet Explorer doesn't have Object.assign(), so we recreate it here.
for(var r in e)t[r]=e[r];return t},nU=function(t,e,r){//for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
var i,n,s,o,a,l,h,u=nj({},r._gsap),d=r.style;for(n in u.svg?(s=r.getAttribute("transform"),r.setAttribute("transform",""),d[ne]=e,i=nI(r,1),nm(r,ne),r.setAttribute("transform",s)):(s=getComputedStyle(r)[ne],d[ne]=e,i=nI(r,1),d[ne]=s),iY)(s=u[n])!==(o=i[n])&&0>"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)&&(a=ru(s)!==(h=ru(o))?nb(r,n,s,h):parseFloat(s),l=parseFloat(o),t._pt=new iP(t._pt,i,n,a,l-a,iK),t._pt.u=h||0,t._props.push(n));nj(i,u)};// handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
eI("padding,margin,Width,Radius",function(t,e){var r="Right",i="Bottom",n="Left",s=(e<3?["Top",r,i,n]:["Top"+n,"Top"+r,i+r,i+n]).map(function(r){return e<2?t+r:"border"+r+t});nx[e>1?"border"+t:t]=function(t,e,r,i,n){var o,a;if(arguments.length<4)return 5===(a=// getter, passed target, property, and unit (from _get())
(o=s.map(function(e){return nw(t,e,r)})).join(" ")).split(o[0]).length?o[0]:a;o=(i+"").split(" "),a={},s.forEach(function(t,e){return a[t]=o[e]=o[e]||o[(e-1)/2|0]}),t.init(e,a,n)}});var nB={name:"css",register:nd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,r,i,n){var s,o,a,l,h,u,d,c,p,_,f,m,y,g,v,b,w=this._props,C=t.style,P=r.vars.startAt;for(d in iH||nd(),this.styles=this.styles||no(t),b=this.styles.props,this.tween=r,e)if("autoRound"!==d&&(o=e[d],!(eA[d]&&r7(d,e,r,i,t,n)))){if(h=typeof o,u=nx[d],"function"===h&&(h=typeof(o=o.call(r,i,t,n))),"string"===h&&~o.indexOf("random(")&&(o=rw(o)),u)u(this,t,d,o,r)&&(v=1);else if("--"===d.substr(0,2))//CSS variable
s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",rI.lastIndex=0,rI.test(s)||(// colors don't have units
c=ru(s),p=ru(o)),p?c!==p&&(s=nb(t,d,s,p)+p):c&&(o+=c),this.add(C,"setProperty",s,o,i,n,0,0,d),w.push(d),b.push(d,0,C[d]);else if("undefined"!==h){if(P&&d in P?(t8(// in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
s="function"==typeof P[d]?P[d].call(r,i,t,n):P[d])&&~s.indexOf("random(")&&(s=rw(s)),ru(s+"")||(s+=tQ.units[d]||ru(nw(t,d))||""),"="===(s+"").charAt(1)&&(s=nw(t,d))):s=nw(t,d),l=parseFloat(s),(_="string"===h&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),a=parseFloat(o),d in iZ&&("autoAlpha"===d&&(1===l&&"hidden"===nw(t,"visibility")&&a&&(l=0),b.push("visibility",0,C.visibility),ny(this,C,"visibility",l?"inherit":"hidden",a?"inherit":"hidden",!a)),"scale"!==d&&"transform"!==d&&~(d=iZ[d]).indexOf(",")&&(d=d.split(",")[0])),f=d in iY){if(this.styles.save(d),m||((y=t._gsap).renderTransform&&!e.parseTransform||nI(t,e.parseTransform),g=!1!==e.smoothOrigin&&y.smooth,(m=this._pt=new iP(this._pt,C,ne,0,1,y.renderTransform,y,0,-1)).dep=1),"scale"===d)this._pt=new iP(this._pt,y,"scaleY",y.scaleY,(_?eR(y.scaleY,_+a):a)-y.scaleY||0,iK),this._pt.u=0,w.push("scaleY",d),d+="X";else if("transformOrigin"===d){b.push(nr,0,C[nr]),o=nS(o),y.svg?nk(t,o,0,g,0,this):((p=parseFloat(o.split(" ")[2])||0)!==y.zOrigin&&ny(this,y,"zOrigin",y.zOrigin,p),ny(this,C,d,n$(s),n$(o)));continue}else if("svgOrigin"===d){nk(t,o,1,g,0,this);continue}else if(d in nE){nH(this,y,d,l,_?eR(l,_+o):o);continue}else if("smoothOrigin"===d){ny(this,y,"smooth",y.smooth,o);continue}else if("force3D"===d){y[d]=o;continue}else if("transform"===d){nU(this,o,t);continue}}else d in C||(d=nu(d)||d);if(f||(a||0===a)&&(l||0===l)&&!iQ.test(o)&&d in C)c=(s+"").substr((l+"").length),a||(a=0),p=ru(o)||(d in tQ.units?tQ.units[d]:c),c!==p&&(l=nb(t,d,s,p)),this._pt=new iP(this._pt,f?y:C,d,l,(_?eR(l,_+a):a)-l,f||"px"!==p&&"zIndex"!==d||!1===e.autoRound?iK:i2),this._pt.u=p||0,c!==p&&"%"!==p&&(//when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
this._pt.b=s,this._pt.r=i1);else if(d in C)nC.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,i,n);else if("parseTransform"!==d){ef(d,o);continue}f||(d in C?b.push(d,0,C[d]):b.push(d,1,s||t[d])),w.push(d)}}v&&iC(this)},render:function(t,e){if(e.tween._time||!iB())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:nw,aliases:iZ,getSetter:function(t,e,r){//returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
var i=iZ[e];return i&&0>i.indexOf(",")&&(e=i),e in iY&&e!==nr&&(t._gsap.x||nw(t,"x"))?r&&iU===r?"scale"===e?i4:i6:(iU=r||{},"scale"===e?i7:nt):t.style&&!t4(t.style[e])?i8:~e.indexOf("-")?i9:ip(t,e)},core:{_removeProperty:nm,_getMatrix:nM}};iL.utils.checkPrefix=nu,iL.core.getStyleSaver=no,h=eI((a="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(l="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){iY[t]=1}),eI(l,function(t){tQ.units[t]="deg",nE[t]=1}),iZ[h[13]]=a+","+l,eI("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");iZ[e[1]]=h[e[0]]}),eI("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){tQ.units[t]="px"}),iL.registerPlugin(nB);var nq=iL.registerPlugin(nB)||iL;nq.core.Tween;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:nY}={O:$,P:D,A:R,C:1,M:tn,L:ta,R:U,D:to,I:tl,V:th,H:tc,N:tp,U:tu,F:t_},nV=t=>void 0===t.strings;class nX{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nJ=(t,e)=>{var r;let i=t._$AN;if(void 0===i)return!1;for(let t of i)null===(r=t._$AO)||void 0===r||r.call(t,e,!1),nJ(t,e);return!0},nW=t=>{let e,r;do{if(void 0===(e=t._$AM))break;(r=e._$AN).delete(t),t=e}while(0===(null==r?void 0:r.size))},nG=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),nK(e)}};function nQ(t){void 0!==this._$AN?(nW(this),this._$AM=t,nG(this)):this._$AM=t}function nZ(t,e=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(e){if(Array.isArray(i))for(let t=r;t<i.length;t++)nJ(i[t],!1),nW(i[t]);else null!=i&&(nJ(i,!1),nW(i))}else nJ(this,t)}}const nK=t=>{var e,r;2==t.type&&(null!==(e=t._$AP)&&void 0!==e||(t._$AP=nZ),null!==(r=t._$AQ)&&void 0!==r||(t._$AQ=nQ))};class n0 extends nX{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),nG(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?null===(r=this.reconnected)||void 0===r||r.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(nJ(this,t),nW(this))}setValue(t){if(nV(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n1=()=>new n2;class n2{}const n5=new WeakMap,n3=(o=class extends n0{render(t){return tt}update(t,[e]){var r;let i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=null===(r=t.options)||void 0===r?void 0:r.host,this.ot(this.lt=t.element)),tt}ot(t){var e;if("function"==typeof this.G){let r=null!==(e=this.dt)&&void 0!==e?e:globalThis,i=n5.get(r);void 0===i&&(i=new WeakMap,n5.set(r,i)),void 0!==i.get(this.G)&&this.G.call(this.dt,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,r;return"function"==typeof this.G?null===(e=n5.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(r=this.G)||void 0===r?void 0:r.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}},(...t)=>({_$litDirective$:o,values:t})),n8=!(window.ShadyDOM&&window.ShadyDOM.inUse);/**
 * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
 */function n9(e){t=(!e||!e.shimcssproperties)&&(n8||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(e=window.ShadyCSS.cssBuild);const n6=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?t=window.ShadyCSS.nativeCss:window.ShadyCSS?(n9(window.ShadyCSS),// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=void 0):n9(window.WebComponents&&window.WebComponents.flags);const n4=/** @type {boolean} */t;/** @unrestricted */class n7{constructor(){/** @type {number} */this.start=0,/** @type {number} */this.end=0,/** @type {StyleNode} */this.previous=null,/** @type {StyleNode} */this.parent=null,/** @type {Array<StyleNode>} */this.rules=null,/** @type {string} */this.parsedCssText="",/** @type {string} */this.cssText="",/** @type {boolean} */this.atRule=!1,/** @type {number} */this.type=0,/** @type {string} */this.keyframesName="",/** @type {string} */this.selector="",/** @type {string} */this.parsedSelector=""}}function st(t){return(// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {!StyleNode}
 */function t(e,r){let i=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
i=(i=(i=(i=r.substring(t,e.start-1)).replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})).replace(sn.multipleSpaces," ")).substring(i.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=i.trim();e.atRule=0===n.indexOf(sa),e.atRule?0===n.indexOf(so)?e.type=se.MEDIA_RULE:n.match(sn.keyframesRule)&&(e.type=se.KEYFRAMES_RULE,e.keyframesName=e.selector.split(sn.multipleSpaces).pop()):0===n.indexOf(ss)?e.type=se.MIXIN_RULE:e.type=se.STYLE_RULE}let n=e.rules;if(n)for(let e=0,i=n.length,s;e<i&&(s=n[e]);e++)t(s,r);return e}(// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {!StyleNode}
 */function(t){let e=new n7;e.start=0,e.end=t.length;let r=e;for(let i=0,n=t.length;i<n;i++)if(t[i]===sr){r.rules||(r.rules=[]);let t=r,e=t.rules[t.rules.length-1]||null;(r=new n7).start=i+1,r.parent=t,r.previous=e,t.rules.push(r)}else t[i]===si&&(r.end=i+1,r=r.parent||e);return e}(t=t.replace(sn.comments,"").replace(sn.port,"")),t))}const se={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},sr="{",si="}",sn={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ss="--",so="@media",sa="@",sl=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,sh=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,su=/@media\s(.*)/,sd=new Set;function sc(t,e){return t?("string"==typeof t&&(t=st(t)),e&&s_(t,e),function t(e,r,i=""){// calc rule cssText
let n="";if(e.cssText||e.rules){let i,o=e.rules;if(o&&!((i=o[0])&&i.selector&&0===i.selector.indexOf(ss)))for(let e=0,i=o.length,s;e<i&&(s=o[e]);e++)n=t(s,r,n);else{var s;(n=(n=r?e.cssText:(0,e.cssText).replace(sn.customProp,"").replace(sn.mixinProp,"").replace(sn.mixinApply,"").replace(sn.varApply,"")).trim())&&(n="  "+n+"\n")}}return n&&(e.selector&&(i+=e.selector+" "+sr+"\n"),i+=n,e.selector&&(i+=si+"\n\n")),i}(t,n4)):""}function sp(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=st(t.textContent)),t.__cssRules||null}function s_(t,e,r,i){if(!t)return;let n=!1,s=t.type;if(i&&s===se.MEDIA_RULE){let e=t.selector.match(su);e&&!window.matchMedia(e[1]).matches&&(n=!0)}s===se.STYLE_RULE?e(t):r&&s===se.KEYFRAMES_RULE?r(t):s===se.MIXIN_RULE&&(n=!0);let o=t.rules;if(o&&!n)for(let t=0,n=o.length,s;t<n&&(s=o[t]);t++)s_(s,e,r,i)}window.ShadyDOM&&window.ShadyDOM.wrap||(t=>t);const sf="css-build";function sm(t){return""!==function(t){if(void 0!==e)return e;if(void 0===t.__cssBuild){// try attribute first, as it is the common case
let e=t.getAttribute(sf);if(e)t.__cssBuild=e;else{let e=function(t){let e="template"===t.localName?/** @type {!HTMLTemplateElement} */t.content.firstChild:t.firstChild;if(e instanceof Comment){let t=e.textContent.trim().split(":");if(t[0]===sf)return t[1]}return""}(t);""!==e&&/**
 * @param {!HTMLElement} element
 */function(t){let e="template"===t.localName?/** @type {!HTMLTemplateElement} */t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}(t)}function sy(t,e){// remove previous properties
for(let r in e)null===r?t.style.removeProperty(r):t.style.setProperty(r,e[r])}function sg(t,e){/**
   * @const {string}
   */let r=window.getComputedStyle(t).getPropertyValue(e);return r?r.trim():""}const sv=/;\s*/m,sb=/^\s*(initial)|(inherit)\s*$/,sw=/\s*!important/;// map of mixin to property names
// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
class sC{constructor(){/** @type {!Object<string, !MixinMapEntry>} */this._map={}}/**
   * @param {string} name
   * @param {!PropertyEntry} props
   */set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}/**
   * @param {string} name
   * @return {MixinMapEntry}
   */get(t){return t=t.trim(),this._map[t]||null}}/**
 * Callback for when an element is marked invalid
 * @type {?function(string)}
 */let sP=null;/** @unrestricted */class sS{constructor(){/** @type {?string} */this._currentElement=null,/** @type {HTMLMetaElement} */this._measureElement=null,this._map=new sC}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */detectMixin(t){return function(t){let e=sh.test(t)||sl.test(t);return sh.lastIndex=0,sl.lastIndex=0,e}(t)}/**
   * Gather styles into one style for easier processing
   * @param {!HTMLTemplateElement} template
   * @return {HTMLStyleElement}
   */gatherStyles(t){let e=function(t){/** @type {!Array<string>} */let e=[],r=/** @type {!NodeList<!HTMLStyleElement>} */t.querySelectorAll("style");for(let t=0;t<r.length;t++){let i=r[t];i.hasAttribute("shady-unscoped")?n8||(!function(t){let e=t.textContent;if(!sd.has(e)){sd.add(e);let t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}(t.content);if(e){let r=/** @type {!HTMLStyleElement} */document.createElement("style");return r.textContent=e,t.content.insertBefore(r,t.content.firstChild),r}return null}/**
   * @param {!HTMLTemplateElement} template
   * @param {string} elementName
   * @return {StyleNode}
   */transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));/** @type {HTMLStyleElement} */let r=t._gatheredStyle;return r?this.transformStyle(r,e):null}/**
   * @param {!HTMLStyleElement} style
   * @param {string} elementName
   * @return {StyleNode}
   */transformStyle(t,e=""){let r=sp(t);return this.transformRules(r,e),t.textContent=sc(r),r}/**
   * @param {!HTMLStyleElement} style
   * @return {StyleNode}
   */transformCustomStyle(t){let e=sp(t);return s_(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=sc(e),e}/**
   * @param {StyleNode} rules
   * @param {string} elementName
   */transformRules(t,e){this._currentElement=e,s_(t,t=>{this.transformRule(t)}),this._currentElement=null}/**
   * @param {!StyleNode} rule
   */transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}/**
   * @param {string} cssText
   * @param {!StyleNode} rule
   * @return {string}
   */transformCssText(t,e){// consume mixins
return(// produce variables
t=t.replace(sl,(t,r,i,n)=>this._produceCssProperties(t,r,i,n,e)),this._consumeCssProperties(t,e))}/**
   * @param {string} property
   * @return {string}
   */_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=/** @type {HTMLMetaElement} */document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}/**
   * Walk over all rules before this rule to find fallbacks for mixins
   *
   * @param {!StyleNode} startRule
   * @return {!Object}
   */_fallbacksFromPreviousRules(t){// find the "top" rule
let e=t;for(;e.parent;)e=e.parent;let r={},i=!1;return s_(e,e=>{// stop when we hit the input rule
(i=i||e===t)||e.selector!==t.selector||Object.assign(r,this._cssTextToMap(e.parsedCssText))}),r}/**
   * replace mixin consumption with variable consumption
   * @param {string} text
   * @param {!StyleNode=} rule
   * @return {string}
   */_consumeCssProperties(t,e){/** @type {Array} */let r=null;// loop over text until all mixins with defintions have been applied
for(;r=sh.exec(t);){let i=r[0],n=r[1],s=r.index,o=s+i.indexOf("@apply"),a=s+i.length,l=t.slice(0,o),h=t.slice(a),u=e?this._fallbacksFromPreviousRules(e):{};Object.assign(u,this._cssTextToMap(l));let d=this._atApplyToCssProperties(n,u);// use regex match position to replace mixin, keep linear processing time
t=`${l}${d}${h}`,sh.lastIndex=s+d.length}return t}/**
   * produce variable consumption at the site of mixin consumption
   * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
   * Example:
   *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
   *
   * @param {string} mixinName
   * @param {Object} fallbacks
   * @return {string}
   */_atApplyToCssProperties(t,e){t=t.replace(sv,"");let r=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){let n,s,o;this._currentElement&&(i.dependants[this._currentElement]=!0);let a=i.properties;for(n in a)o=e&&e[n],s=[n,": var(",t,"_-_",n],o&&s.push(",",o.replace(sw,"")),s.push(")"),sw.test(a[n])&&s.push(" !important"),r.push(s.join(""))}return r.join("; ")}/**
   * @param {string} property
   * @param {string} value
   * @return {string}
   */_replaceInitialOrInherit(t,e){let r=sb.exec(e);return r&&(// replace `initial` with the concrete initial value for this property
e=r[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}/**
   * "parse" a mixin definition into a map of properties and values
   * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
   * @param {string} text
   * @param {boolean=} replaceInitialOrInherit
   * @return {!Object<string, string>}
   */_cssTextToMap(t,e=!1){let r,i,n=t.split(";"),s={};for(let t=0,o,a;t<n.length;t++)(o=n[t])&&(a=o.split(":")).length>1&&(r=a[0].trim(),// some properties may have ':' in the value, like data urls
i=a.slice(1).join(":"),e&&(i=this._replaceInitialOrInherit(r,i)),s[r]=i);return s}/**
   * @param {MixinMapEntry} mixinEntry
   */_invalidateMixinEntry(t){if(sP)for(let e in t.dependants)e!==this._currentElement&&sP(e)}/**
   * @param {string} matchText
   * @param {string} propertyName
   * @param {?string} valueProperty
   * @param {?string} valueMixin
   * @param {!StyleNode} rule
   * @return {string}
   */_produceCssProperties(t,e,r,i,n){let s,o;if(r&&function t(e,r){// find 'var('
let i=e.indexOf("var(");if(-1===i)return r(e,"","","");//${prefix}var(${inner})${suffix}
let n=function(t,e){let r=0;for(let i=e,n=t.length;i<n;i++)if("("===t[i])r++;else if(")"===t[i]&&0==--r)return i;return -1}(e,i+3),s=e.substring(i+4,n),o=e.substring(0,i),a=t(e.substring(n+1),r),l=s.indexOf(",");return(// value and fallback args should be trimmed to match in property lookup
-1===l?r(o,s.trim(),"",a):r(o,s.substring(0,l).trim(),s.substring(l+1).trim(),a))}(r,(t,e)=>{e&&this._map.get(e)&&(i=`@apply ${e};`)}),!i)return t;let a=this._consumeCssProperties(""+i,n),l=t.slice(0,t.indexOf("--")),h=this._cssTextToMap(a,!0),u=h,d=this._map.get(e),c=d&&d.properties;c?// and this is what we want.
u=Object.assign(Object.create(c),h):this._map.set(e,u);let p=[],_=!1;for(s in u)void 0===(o=h[s])&&(o="initial"),!c||s in c||(_=!0),p.push(`${e}_-_${s}: ${o}`);return _&&this._invalidateMixinEntry(d),d&&(d.properties=u),r&&(l=`${t};${l}`),`${l}${p.join("; ")};`}}/* exports *//* eslint-disable no-self-assign */sS.prototype.detectMixin=sS.prototype.detectMixin,sS.prototype.transformStyle=sS.prototype.transformStyle,sS.prototype.transformCustomStyle=sS.prototype.transformCustomStyle,sS.prototype.transformRules=sS.prototype.transformRules,sS.prototype.transformRule=sS.prototype.transformRule,sS.prototype.transformTemplate=sS.prototype.transformTemplate,sS.prototype._separator="_-_",/* eslint-enable no-self-assign */Object.defineProperty(sS.prototype,"invalidCallback",{/** @return {?function(string)} */get:()=>sP,/** @param {?function(string)} cb */set(t){sP=t}});var sA={};/*
 * Utilities for handling invalidating apply-shim mixins for a given template.
 *
 * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
 * The template
 *//** @const {string} */const sx="_applyShimCurrentVersion",sT="_applyShimNextVersion",sE="_applyShimValidatingVersion",sO=Promise.resolve();function sN(t){let e=sA[t];e&&(// default the current version to 0
e[sx]=e[sx]||0,// ensure the "validating for" flag exists
e[sE]=e[sE]||0,// increment the next version
e[sT]=(e[sT]||0)+1)}/** @type {Promise<void>} */let sM=null,sk=window.HTMLImports&&window.HTMLImports.whenReady||null;function sI(t){requestAnimationFrame(function(){sk?sk(t):(sM||(sM=new Promise(t=>{r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),sM.then(function(){t&&t()}))})}const s$="__seenByShadyCSS",sD="__shadyCSSCachedStyle";/** @type {?function(!HTMLStyleElement)} */let sR=null,sL=null;class sF{constructor(){/** @type {!Array<!CustomStyleProvider>} */this.customStyles=[],this.enqueued=!1,sI(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}/**
   * Queue a validation for new custom styles to batch style recalculations
   */enqueueDocumentValidation(){!this.enqueued&&sL&&(this.enqueued=!0,sI(sL))}/**
   * @param {!HTMLStyleElement} style
   */addCustomStyle(t){t[s$]||(t[s$]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}/**
   * @param {!CustomStyleProvider} customStyle
   * @return {HTMLStyleElement}
   */getStyleForCustomStyle(t){return t[sD]?t[sD]:t.getStyle?t.getStyle():t}/**
   * @return {!Array<!CustomStyleProvider>}
   */processStyles(){let t=this.customStyles;for(let e=0;e<t.length;e++){let r=t[e];if(r[sD])continue;let i=this.getStyleForCustomStyle(r);if(i){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
let t=/** @type {!HTMLStyleElement} */i.__appliedElement||i;sR&&sR(t),r[sD]=t}}return t}}/* eslint-disable no-self-assign */sF.prototype.addCustomStyle=sF.prototype.addCustomStyle,sF.prototype.getStyleForCustomStyle=sF.prototype.getStyleForCustomStyle,sF.prototype.processStyles=sF.prototype.processStyles,/* eslint-enable no-self-assign */Object.defineProperties(sF.prototype,{transformCallback:{/** @return {?function(!HTMLStyleElement)} */get:()=>sR,/** @param {?function(!HTMLStyleElement)} fn */set(t){sR=t}},validateCallback:{/** @return {?function()} */get:()=>sL,/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set(t){let e=!1;sL||(e=!0),sL=t,e&&this.enqueueDocumentValidation()}}});/** @const {ApplyShim} */const sz=new sS;if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){let t=new class{constructor(){/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null,sz.invalidCallback=sN}ensure(){!this.customStyleInterface&&window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{sz.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}/**
   * @param {!HTMLTemplateElement} template
   * @param {string} elementName
   */prepareTemplate(t,e){if(this.ensure(),sm(t))return;sA[e]=t;let r=sz.transformTemplate(t,e);// save original style ast to use for revalidating instances
t._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let r=t[e],i=this.customStyleInterface.getStyleForCustomStyle(r);i&&sz.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}/**
   * @param {HTMLElement} element
   * @param {Object=} properties
   */styleSubtree(t,e){if(this.ensure(),e&&sy(t,e),t.shadowRoot){this.styleElement(t);let e=/** @type {!ParentNode} */t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(/** @type {HTMLElement} */e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(/** @type {HTMLElement} */e[t])}}/**
   * @param {HTMLElement} element
   */styleElement(t){let e,r,i;this.ensure();let{is:n}=(e=t.localName,r="",i="",e?e.indexOf("-")>-1?r=e:(i=e,r=t.getAttribute&&t.getAttribute("is")||""):(r=/** @type {?} */t.is,i=/** @type {?} */t.extends),{is:r,typeExtension:i}),s=sA[n];if(!(s&&sm(s))&&s&&s[sx]!==s[sT]){// only revalidate template once
!(s[sx]!==s[sT]&&s[sE]===s[sT])&&(this.prepareTemplate(s,n),// remember that the current "next version" is the reason for this validation cycle
s[sE]=s[sT],s._validating||(s._validating=!0,sO.then(function(){// sync the current version to let future invalidations cause a refresh cycle
s[sx]=s[sT],s._validating=!1})));// update this element instance
let e=t.shadowRoot;if(e){let t=/** @type {HTMLStyleElement} */e.querySelector("style");t&&(// reuse the template's style ast, it has all the original css text
t.__cssRules=s._styleAst,t.textContent=sc(s._styleAst))}}}/**
   * @param {Object=} properties
   */styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}},r=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */// eslint-disable-next-line @typescript-eslint/no-unused-vars
prepareTemplate(e,r,i){t.flushCustomStyles(),t.prepareTemplate(e,r)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles(t,e,r){window.ShadyCSS.prepareTemplate(t,e,r)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom(t,e){},/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree(e,r){t.flushCustomStyles(),t.styleSubtree(e,r)},/**
     * @param {!HTMLElement} element
     */styleElement(e){t.flushCustomStyles(),t.styleElement(e)},/**
     * @param {Object=} properties
     */styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:(t,e)=>sg(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:n4,nativeShadow:n8,cssBuild:e,disableRuntime:n6},r&&(window.ShadyCSS.CustomStyleInterface=r)}window.ShadyCSS.ApplyShim=sz,/**
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
*/let sH=/(url\()([^)]*)(\))/g,sj=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function sU(t,e){if(t&&sj.test(t)||"//"===t)return t;// Lazy feature detection.
if(void 0===i){i=!1;try{let t=new URL("b","http://a");t.pathname="c%20d",i="http://a/c%20d"===t.href}catch(t){// silently fail
}}if(e||(e=document.baseURI||window.location.href),i)try{return new URL(t,e).href}catch(e){// Bad url or baseURI structure. Do not attempt to resolve.
return t}return n||((n=document.implementation.createHTMLDocument("temp")).base=n.createElement("base"),n.head.appendChild(n.base),n.anchor=n.createElement("a"),n.body.appendChild(n.anchor)),n.base.href=e,n.anchor.href=t,n.anchor.href||t}function sB(t,e){return t.replace(sH,function(t,r,i,n){return r+"'"+sU(i.replace(/["']/g,""),e)+"'"+n})}function sq(t){return t.substring(0,t.lastIndexOf("/")+1)}const sY=!window.ShadyDOM||!window.ShadyDOM.inUse;window.ShadyCSS&&window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback;const sV=sY&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&// Since spec may change, feature detect exact API we need
(()=>{try{let t=new CSSStyleSheet;t.replaceSync("");let e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let sX=window.Polymer&&window.Polymer.rootPath||sq(document.baseURI||window.location.href),sJ=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,sW=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,sG=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,sQ=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,sZ=window.Polymer&&window.Polymer.legacyOptimizations||!1,sK=window.Polymer&&window.Polymer.legacyWarnings||!1,s0=window.Polymer&&window.Polymer.syncInitialRender||!1,s1=window.Polymer&&window.Polymer.legacyUndefined||!1,s2=window.Polymer&&window.Polymer.orderedComputed||!1,s5=window.Polymer&&window.Polymer.removeNestedTemplates||!1,s3=window.Polymer&&window.Polymer.fastDomIf||!1,s8=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,s9=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,s6=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,s4=0;/**
 * @constructor
 * @extends {Function}
 * @private
 */function s7(){}/** @type {(WeakMap | undefined)} */s7.prototype.__mixinApplications,/** @type {(Object | undefined)} */s7.prototype.__mixinSet;const ot=function(t){let e=/** @type {!MixinFunction} */t.__mixinApplications;e||(e=new WeakMap,/** @type {!MixinFunction} */t.__mixinApplications=e);// maintain a unique id for each mixin
let r=s4++;return function(i){let n=/** @type {!MixinFunction} */i.__mixinSet;if(n&&n[r])return i;let s=e,o=s.get(i);if(!o){o=/** @type {!Function} */t(i),s.set(i,o);// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
let e=Object.create(/** @type {!MixinFunction} */o.__mixinSet||n||null);e[r]=!0,/** @type {!MixinFunction} */o.__mixinSet=e}return o}};/* eslint-enable valid-jsdoc *//**
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
*/let oe={},or={};/**
 * Sets a dom-module into the global registry by id.
 *
 * @param {string} id dom-module id
 * @param {DomModule} module dom-module instance
 * @return {void}
 */function oi(t,e){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
oe[t]=or[t.toLowerCase()]=e}/**
 * Retrieves a dom-module from the global registry by id.
 *
 * @param {string} id dom-module id
 * @return {DomModule!} dom-module instance
 */function on(t){return oe[t]||or[t.toLowerCase()]}class os extends HTMLElement{/** @override */static get observedAttributes(){return["id"]}/**
   * Retrieves the element specified by the css `selector` in the module
   * registered by `id`. For example, this.import('foo', 'img');
   * @param {string} id The id of the dom-module in which to search.
   * @param {string=} selector The css selector by which to find the element.
   * @return {Element} Returns the element which matches `selector` in the
   * module registered at the specified `id`.
   *
   * @export
   * @nocollapse Referred to indirectly in style-gather.js
   */static import(t,e){if(t){let r=on(t);return r&&e?r.querySelector(e):r}return null}/* eslint-disable no-unused-vars *//**
   * @param {string} name Name of attribute.
   * @param {?string} old Old value of attribute.
   * @param {?string} value Current value of attribute.
   * @param {?string} namespace Attribute namespace.
   * @return {void}
   * @override
   */attributeChangedCallback(t,e,r,i){e!==r&&this.register()}/* eslint-enable no-unused-args *//**
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
let t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=sU(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=sq(e)}return this.__assetpath}/**
   * Registers the dom-module at a given id. This method should only be called
   * when a dom-module is imperatively created. For
   * example, `document.createElement('dom-module').register('foo')`.
   * @param {string=} id The id at which to register the dom-module.
   * @return {void}
   */register(t){if(t=t||this.id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(sG&&void 0!==on(t))throw oi(t,null),Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,oi(t,this),this.querySelector("style")&&console.warn("dom-module %s has style outside template",this.id)}}}os.prototype.modules=oe,customElements.define("dom-module",os);const oo="shady-unscoped";/**
 * @param {string} moduleId .
 * @return {?DomModule} .
 */function oa(t){return os.import(t)}function ol(t){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
let e=t.body?t.body:t,r=sB(e.textContent,t.baseURI),i=document.createElement("style");return i.textContent=r,i}function oh(t,e){if(!t._styles){let r=[],i=t.content.querySelectorAll("style");for(let t=0;t<i.length;t++){let n=i[t],s=n.getAttribute("include");s&&r.push(...(function(t){let e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...function(t){let e=oa(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){let t=[];// module imports: <link rel="import" type="css">
t.push(...ou(e));// include css from the first template in the module
let r=/** @type {?HTMLTemplateElement} */e.querySelector("template");r&&t.push(...oh(r,/** @type {templateWithAssetPath} */e.assetpath)),e._styles=t}return e._styles}(e[t]));return r})(s).filter(function(t,e,r){return r.indexOf(t)===e})),e&&(n.textContent=sB(n.textContent,/** @type {string} */e)),r.push(n)}t._styles=r}return t._styles}/**
 * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
 * @return {!Array<!HTMLStyleElement>} Array of contained styles
 */function ou(t){let e=[],r=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<r.length;t++){let i=r[t];if(i.import){let t=i.import,r=i.hasAttribute(oo);if(r&&!t._unscopedStyle){let e=ol(t);e.setAttribute(oo,""),t._unscopedStyle=e}else t._style||(t._style=ol(t));e.push(r?t._unscopedStyle:t._style)}}return e}/**
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
 */const od=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function oc(t){return t.indexOf(".")>=0}function op(t){let e=t.indexOf(".");return -1===e?t:t.slice(0,e)}function o_(t,e){//     base.startsWith(path + '.');
return 0===t.indexOf(e+".")}function of(t,e){//     path.startsWith(base + '.');
return 0===e.indexOf(t+".")}function om(t,e,r){return e+r.slice(t.length)}function oy(t){if(!Array.isArray(t))return t;{let e=[];for(let r=0;r<t.length;r++){let i=t[r].toString().split(".");for(let t=0;t<i.length;t++)e.push(i[t])}return e.join(".")}}function og(t){return Array.isArray(t)?oy(t).split("."):t.toString().split(".")}function ov(t,e,r){let i=t,n=og(e);// Loop over path parts[0..n-1] and dereference
for(let t=0;t<n.length;t++){if(!i)return;i=i[n[t]]}return r&&(r.path=n.join(".")),i}function ob(t,e,r){let i=t,n=og(e),s=n[n.length-1];if(n.length>1){// Loop over path parts[0..n-2] and dereference
for(let t=0;t<n.length-1;t++)if(!(i=i[n[t]]))return;// Set value to object at end of path
i[s]=r}else i[e]=r;return n.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ow={},oC=/-[a-z]/g,oP=/([A-Z])/g;function oS(t){return ow[t]||(ow[t]=0>t.indexOf("-")?t:t.replace(oC,t=>t[1].toUpperCase()))}function oA(t){return ow[t]||(ow[t]=t.replace(oP,"-$1").toLowerCase())}/**
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
let ox=0,oT=0,oE=[],oO=0,oN=!1,oM=document.createTextNode("");new window.MutationObserver(function(){oN=!1;let t=oE.length;for(let e=0;e<t;e++){let t=oE[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}oE.splice(0,t),oT+=t}).observe(oM,{characterData:!0});/**
 * Async interface wrapper around `setTimeout`.
 *
 * @namespace
 * @summary Async interface wrapper around `setTimeout`.
 */const ok={/**
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
   */cancel(t){window.clearTimeout(t)}},oI={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run:t=>(oN||(oN=!0,oM.textContent=oO++),oE.push(t),ox++),/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(t){let e=t-oT;if(e>=0){if(!oE[e])throw Error("invalid async handle: "+t);oE[e]=null}}},o$=ot(/**
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
     */static createProperties(t){let e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}/**
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
     */_setPendingProperty(t,e,r){let i=this.__data[t],n=this._shouldPropertyChange(t,e,i);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=i),this.__data[t]=e,this.__dataPending[t]=e),n}/* eslint-enable *//**
     * @param {string} property Name of the property
     * @return {boolean} Returns true if the property is pending.
     */_isPropertyPending(t){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(t))}/**
     * Marks the properties as invalid, and enqueues an async
     * `_propertiesChanged` callback.
     *
     * @return {void}
     * @protected
     * @override
     */_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,oI.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}/**
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
     */_flushProperties(){this.__dataCounter++;let t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r)),this.__dataCounter--}/**
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
     */_shouldPropertiesChange(t,e,r){return!!e}/**
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
     */_propertiesChanged(t,e,r){}/**
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
     */_shouldPropertyChange(t,e,r){return r!==e&&// This ensures (old==NaN, value==NaN) always returns false
    (r==r||e==e)}/**
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
     */attributeChangedCallback(t,e,r,i){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,i)}/**
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
     */_attributeToProperty(t,e,r){if(!this.__serializing){let i=this.__dataAttributes,n=i&&i[t]||t;this[n]=this._deserializeValue(e,r||this.constructor.typeForProperty(n))}}/**
     * Serializes a property to its associated attribute.
     *
     * @suppress {invalidCasts} Closure can't figure out `this` is an element.
     *
     * @param {string} property Property name to reflect.
     * @param {string=} attribute Attribute name to reflect to.
     * @param {*=} value Property value to refect.
     * @return {void}
     * @override
     */_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(/** @type {!HTMLElement} */this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}/**
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
     */_valueToNodeAttribute(t,e,r){let i=this._serializeValue(e);("class"===r||"name"===r||"slot"===r)&&(t=od(t)),void 0===i?t.removeAttribute(r):t.setAttribute(r,// excludes `TrustedScript`.
    ""===i&&window.trustedTypes?/** @type {?} */window.trustedTypes.emptyScript:i)}/**
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
     */_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),oD={};let oR=HTMLElement.prototype;for(;oR;){let t=Object.getOwnPropertyNames(oR);for(let e=0;e<t.length;e++)oD[t[e]]=!0;oR=Object.getPrototypeOf(oR)}const oL=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1,oF=ot(t=>{/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */let e=o$(t);return(/**
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
     */static createPropertiesForAttributes(){let t=/** @type {?} */this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(oS(t[e]))}/**
     * Returns an attribute name that corresponds to the given property.
     * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
     * @param {string} property Property to convert
     * @return {string} Attribute name corresponding to the given property.
     *
     * @protected
     * @nocollapse
     */static attributeNameForProperty(t){return oA(t)}/**
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
     */_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(oL(t))/**
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
       */let r;switch(e){case Object:try{r=JSON.parse(/** @type {string} */t)}catch(e){// allow non-JSON literals like Strings and Numbers
r=t}break;case Array:try{r=JSON.parse(/** @type {string} */t)}catch(e){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}/* eslint-enable no-fallthrough *//**
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
if(!oD[e]){let r=t[e];void 0!==r&&(t.__data?// It is the user's responsibility to call _flushProperties
t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}/**
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
     */_isPropertyPending(t){return!!(this.__dataPending&&t in this.__dataPending)}})}),oz={"dom-if":!0,"dom-repeat":!0};let oH=!1,oj=!1;/**
 * Copies an attribute from one element to another, converting the value to a
 * `TrustedScript` if it is named like a Polymer template event listener.
 *
 * @param {!Element} dest The element to set the attribute on
 * @param {!Element} src The element to read the attribute from
 * @param {string} name The name of the attribute
 */const oU=(()=>{/**
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
   */let t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,r,i)=>{let n=r.getAttribute(i);if(t&&i.startsWith("on-")){e.setAttribute(i,t.createScript(n,i));return}e.setAttribute(i,n)}})(),oB=ot(/**
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
    let /** ? */r=t._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!e,r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),// TODO(rictic): fix typing
    this._parseTemplateContent(t,r,/** @type {?} */{parent:null})}return t._templateInfo}/**
     * See docs for _parseTemplateNode.
     *
     * @param {!HTMLTemplateElement} template .
     * @param {!TemplateInfo} templateInfo .
     * @param {!NodeInfo} nodeInfo .
     * @return {boolean} .
     * @nocollapse
     */static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}/**
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
     */static _parseTemplateNode(t,e,r){let i=!1;// Checking `nodeInfo.noted` allows a child node of this node (who gets
    // access to `parentInfo`) to cause the parent to be noted, which
    // otherwise has no return path via `_parseTemplateChildNodes` (used by
    // some optimizations)
    return"template"!=/** @type {!HTMLTemplateElement} */t.localName||t.hasAttribute("preserve-content")?"slot"===t.localName&&(e.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(t,e,r)||i,function(){if(!oH){oH=!0;let t=document.createElement("textarea");t.placeholder="a",oj=t.placeholder===t.textContent}return oj}()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null),t.firstChild&&this._parseTemplateChildNodes(t,e,r),t.hasAttributes&&t.hasAttributes()&&(i=this._parseTemplateNodeAttributes(t,e,r)||i),i||r.noted}/**
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
     */static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let i=t.firstChild,n=0,s;i;i=s){if("template"==i.localName&&(i=function(t){let e=t.getAttribute("is");if(e&&oz[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;){let{name:e}=r.attributes[0];oU(t,r,e),r.removeAttribute(e)}}return t}(i)),// collapse adjacent textNodes: fixes an IE issue that can cause
    // text nodes to be inexplicably split =(
    // note that root.normalize() should work but does not so we do this
    // manually.
    s=i.nextSibling,i.nodeType===Node.TEXT_NODE){let /** Node */r=s;for(;r&&r.nodeType===Node.TEXT_NODE;)i.textContent+=r.textContent,s=r.nextSibling,t.removeChild(r),r=s;// optionally strip whitespace
    if(e.stripWhiteSpace&&!i.textContent.trim()){t.removeChild(i);continue}}let o=/** @type {!NodeInfo} */{parentIndex:n,parentInfo:r};this._parseTemplateNode(i,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),i.parentNode&&n++}}/**
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
     */static _parseTemplateNestedTemplate(t,e,r){let i=this._parseTemplate(/** @type {!HTMLTemplateElement} */t,e);return(i.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),r.templateInfo=i,!0}/**
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
     */static _parseTemplateNodeAttributes(t,e,r){// Make copy of original attribute list, since the order may change
    // as attributes are added and removed
    let i=!1,n=Array.from(t.attributes);for(let s=n.length-1,o;o=n[s];s--)i=this._parseTemplateNodeAttribute(t,e,r,o.name,o.value)||i;return i}/**
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
     */static _parseTemplateNodeAttribute(t,e,r,i,n){return(// events (on-*)
    "on-"===i.slice(0,3)?(t.removeAttribute(i),r.events=r.events||[],r.events.push({name:i.slice(3),value:n}),!0):"id"===i&&(r.id=n,!0))}/**
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
    t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let r=// Accepting the `templateInfo` via an argument allows for creating
    // instances of the `templateInfo` by the caller, useful for adding
    // instance-time information to the prototypical data
    (e=e||this.constructor._parseTemplate(t)).nodeInfoList,i=e.content||t.content,n=/** @type {DocumentFragment} */document.importNode(i,!0);// NOTE: ShadyDom optimization indicating there is an insertion point
    n.__noInsertionPoint=!e.hasInsertionPoint;let s=n.nodeList=Array(r.length);n.$={};for(let t=0,i=r.length,u;t<i&&(u=r[t]);t++){var o,a,l,h;let r=s[t]=function t(e,r){// recursively ascend tree until we hit root
    let i=r.parentInfo&&t(e,r.parentInfo);// unwind the stack, returning the indexed node at each level
    if(!i)return e;// (http://jsperf.com/childnodes-lookup)
    for(let t=i.firstChild,e=0;t;t=t.nextSibling)if(r.parentIndex===e++)return t}(n,u);o=n.$,(a=u).id&&(o[a.id]=r),l=u,h=e,l.templateInfo&&(// Give the node an instance of this templateInfo and set its parent
    r._templateInfo=l.templateInfo,r._parentTemplateInfo=h),// install event listeners (from event annotations)
    function(t,e,r){if(r.events&&r.events.length)for(let i=0,n=r.events,s;i<n.length&&(s=n[i]);i++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}(this,r,u)}return n}/**
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
     */_addMethodEventListenerToNode(t,e,r,i){var n;let s=(// Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    n=(n=i=i||t)._methodHost||n,function(t){n[r]?n[r](t,t.detail):console.warn("listener method `"+r+"` not defined")});return this._addEventListenerToNode(t,e,s),s}/**
     * Override point for adding custom or simulated event handling.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}/**
     * Override point for adding custom or simulated event handling.
     *
     * @param {!EventTarget} node Node to remove event listener from
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to remove
     * @return {void}
     * @override
     */_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}});// Monotonically increasing unique ID used for de-duping effects triggered
// from multiple properties in the same turn
let oq=0;const oY=[],oV={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},oX="__computeInfo",oJ=/[A-Z]/;/**
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
 */function oW(t,e,r){let i=t[e];if(i){if(!t.hasOwnProperty(e)&&(i=t[e]=Object.create(t[e]),r))for(let t in i){let e=i[t],r=i[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}else i=t[e]={};return i}// -- effects ----------------------------------------------
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
 */function oG(t,e,r,i,n,s){if(e){let o=!1,a=oq++;for(let l in r){let h=e[n?op(l):l];if(h)for(let e=0,u=h.length,d;e<u&&(d=h[e]);e++)(!d.info||d.info.lastRun!==a)&&(!n||oQ(l,d.trigger))&&(d.info&&(d.info.lastRun=a),d.fn(t,l,r,i,d.info,n,s),o=!0)}return o}return!1}/**
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
 */function oQ(t,e){if(!e)return!0;{let r=/** @type {string} */e.name;return r==t||!!(e.structured&&o_(r,t))||!!(e.wildcard&&of(r,t))}}/**
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
 */function oZ(t,e,r,i,n){let s="string"==typeof n.method?t[n.method]:n.method,o=n.property;s?s.call(t,t.__data[o],i[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}/**
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
 */function oK(t,e,r,i){let n={value:r,queueProperty:!0};i&&(n.path=i),od(/** @type {!HTMLElement} */t).dispatchEvent(new CustomEvent(e,{detail:n}))}/**
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
 */function o0(t,e,r,i,n,s){let o=(s?op(e):e)!=e?e:null,a=o?ov(t,o):t.__data[e];o&&void 0===a&&(a=r[e]),oK(t,n.eventName,a,o)}/**
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
 */function o1(t,e,r,i,n){let s=t.__data[e];sJ&&(s=sJ(s,n.attrName,"attribute",/** @type {Node} */t)),t._propertyToAttribute(e,n.attrName,s)}/**
 * Inserts a computed effect into a queue, given the specified order. Performs
 * the insert using a binary search.
 *
 * Used by `orderedComputed: true` computed property algorithm.
 *
 * @param {Object} info Property effects metadata
 * @param {Array<Object>} queue Ordered queue of effects
 * @param {Map<string,number>} order Map of computed property name->topological
 *   sort order
 */const o2=(t,e,r)=>{let i=0,n=e.length-1,s=-1;for(;i<=n;){let o=i+n>>1,a=r.get(e[o].methodInfo)-r.get(t.methodInfo);if(a<0)i=o+1;else if(a>0)n=o-1;else{s=o;break}}s<0&&(s=n+1),e.splice(s,0,t)},o5=(t,e,r,i,n)=>{let s=n?op(t):t,o=e[s];if(o)for(let e=0;e<o.length;e++){let s=o[e];s.info.lastRun!==oq&&(!n||oQ(t,s.trigger))&&(s.info.lastRun=oq,o2(s.info,r,i))}};/**
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
 */function o3(t,e,r,i,n){// Dirty check dependencies and run if any invalid
let s=o4(t,e,r,i,n);// Abort if method returns a no-op result
if(s===oY)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,s,!0):(t[o]=s,!1)}// -- bindings ----------------------------------------------
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
 */function o8(t,e,r,i,n,s,o){// Create binding metadata and add to nodeInfo
r.bindings=r.bindings||[];let /** Binding */a={kind:i,target:n,parts:s,literal:o,isCompound:1!==s.length};// Add listener info to binding metadata
if(r.bindings.push(a),a.target&&"attribute"!=a.kind&&"text"!=a.kind&&!a.isCompound&&"{"===a.parts[0].mode){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||oA(n)+"-changed",a.listenerNegate=e}// Add "propagate" property effects to templateInfo
let l=e.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let i=a.parts[r];i.compoundIndex=r,/**
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
 */function(t,e,r,i,n){if(!i.literal){if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,o={index:n,binding:r,part:i,evaluator:t};for(let r=0;r<s.length;r++){let i=s[r];"string"==typeof i&&((i=as(i)).wildcard=!0),t._addTemplatePropertyEffect(e,i.rootProperty,{fn:o9,info:o,trigger:i})}}}}(t,e,a,i,l)}}/**
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
 */function o9(t,e,r,i,n,s,o){let a=o[n.index],l=n.binding,h=n.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(s&&h.source&&e.length>h.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=r[e];e=om(h.source,l.target,e),a._setPendingPropertyOrPath(e,i,!1,!0)&&t._enqueueClient(a)}else{let o=n.evaluator._evaluateBinding(t,h,e,r,i,s);// Propagate value to child
// Abort if value is a no-op result
o!==oY&&/**
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
 */function(t,e,r,i,n){if(n=/**
 * Transforms an "binding" effect value based on compound & negation
 * effect metadata, as well as handling for special-case properties
 *
 * @param {Node} node Node the value will be set to
 * @param {*} value Value to set
 * @param {!Binding} binding Binding metadata
 * @param {!BindingPart} part Binding part metadata
 * @return {*} Transformed value to set
 * @private
 */function(t,e,r,i){if(r.isCompound){let n=t.__dataCompoundStorage[r.target];n[i.compoundIndex]=e,e=n.join("")}return"attribute"!==r.kind&&("textContent"===r.target||"value"===r.target&&("input"===t.localName||"textarea"===t.localName))&&(e=void 0==e?"":e),e}(e,n,r,i),sJ&&(n=sJ(n,r.target,r.kind,e)),"attribute"==r.kind)t._valueToNodeAttribute(/** @type {Element} */e,n,r.target);else{// Property binding
let i=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?(!e[oV.READ_ONLY]||!e[oV.READ_ONLY][i])&&e._setPendingProperty(i,n)&&t._enqueueClient(e):// equivalent to the "apply config" phase, which only set managed props
t._setUnmanagedPropertyToNode(e,i,n)}}(t,a,l,h,o)}}// -- for method-based effects (complexObserver & computed) --------------
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
 */function o6(t,e,r,i,n,s){s=e.static||s&&("object"!=typeof s||s[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:s};for(let n=0,s;n<e.args.length&&(s=e.args[n]);n++)s.literal||t._addPropertyEffect(s.rootProperty,r,{fn:i,info:o,trigger:s});return s&&t._addPropertyEffect(e.methodName,r,{fn:i,info:o}),o}/**
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
 */function o4(t,e,r,i,n){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
let s=t._methodHost||t,o=s[n.methodName];if(o){let i=t._marshalArgs(n.args,e,r);return i===oY?oY:o.apply(s,i)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const o7=[],at="(?:[a-zA-Z_$][\\w.:$\\-*]*)",ae="(?:("+at+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",ar=RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+at+"\\s*"+("(?:\\(\\s*(?:(?:"+ae+"(?:,\\s*")+ae)+")*)?)\\)\\s*)?)(?:]]|}})","g");/**
 * Create a string from binding parts of all the literal parts
 *
 * @param {!Array<BindingPart>} parts All parts to stringify
 * @return {string} String made from the literal parts
 */function ai(t){let e="";for(let r=0;r<t.length;r++)e+=t[r].literal||"";return e}/**
 * Parses an expression string for a method signature, and returns a metadata
 * describing the method in terms of `methodName`, `static` (whether all the
 * arguments are literals), and an array of `args`
 *
 * @param {string} expression The expression to parse
 * @return {?MethodSignature} The method metadata object if a method expression was
 *   found, otherwise `undefined`
 * @private
 */function an(t){// tries to match valid javascript property names
let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:o7};return e[2].trim()?/**
 * Parses an array of arguments and sets the `args` property of the supplied
 * signature metadata object. Sets the `static` property to false if any
 * argument is a non-literal.
 *
 * @param {!Array<string>} argList Array of argument names
 * @param {!MethodSignature} sig Method signature metadata object
 * @return {!MethodSignature} The updated signature metadata object
 * @private
 */function(t,e){return e.args=t.map(function(t){let r=as(t);return r.literal||(e.static=!1),r},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t):t}return null}/**
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
 */function as(t){// clean up whitespace
let e=t.trim()// replace comma entity with comma
.replace(/&comma;/g,",")// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},i=e[0];switch("-"===i&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return!r.literal&&(r.rootProperty=op(e),// detect structured path (has dots)
r.structured=oc(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function ao(t,e,r){let i=ov(t,r);return void 0===i&&(i=e[r]),i}// data api
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
 */function aa(t,e,r,i){let n={indexSplices:i};s1&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(r+".splices",n),t.notifyPath(r+".length",e.length),s1&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}/**
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
 */function al(t,e,r,i,n,s){aa(t,e,r,[{index:i,addedCount:n,removed:s,object:e,type:"splice"}])}const ah=ot(t=>{/**
   * @constructor
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */let e=oB(oF(t));return(/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertyEffects}
   * @extends {propertyEffectsBase}
   * @unrestricted
   */class extends e{constructor(){super(),/** @type {boolean} */// Used to identify users of this mixin, ala instanceof
this.__isPropertyEffectsClient=!0,/** @type {boolean} */this.__dataClientsReady,/** @type {Array} */this.__dataPendingClients,/** @type {Object} */this.__dataToNotify,/** @type {Object} */this.__dataLinkedPaths,/** @type {boolean} */this.__dataHasPaths,/** @type {Object} */this.__dataCompoundStorage,/** @type {Polymer_PropertyEffects} */this.__dataHost,/** @type {!Object} */this.__dataTemp,/** @type {boolean} */this.__dataClientsInitialized,/** @type {!Object} */this.__data,/** @type {!Object|null} */this.__dataPending,/** @type {!Object} */this.__dataOld,/** @type {Object} */this.__computeEffects,/** @type {Object} */this.__computeInfo,/** @type {Object} */this.__reflectEffects,/** @type {Object} */this.__notifyEffects,/** @type {Object} */this.__propagateEffects,/** @type {Object} */this.__observeEffects,/** @type {Object} */this.__readOnly,/** @type {!TemplateInfo} */this.__templateInfo,/** @type {boolean} */this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return oV}/**
     * @override
     * @return {void}
     */_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(au.length){let t=au[au.length-1];t._enqueueClient(this),// This ensures even non-bound elements have a host set, as
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
     */_initializeInstanceProperties(t){let e=this[oV.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}// Prototype setup ----------------------------------------
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
     */_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==oV.READ_ONLY);// effects are accumulated into arrays per property based on type
let i=oW(this,e,!0)[t];i||(i=this[e][t]=[]),i.push(r)}/**
     * Removes the given property effect.
     *
     * @override
     * @param {string} property Property the effect was associated with
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object to remove
     * @return {void}
     */_removePropertyEffect(t,e,r){let i=oW(this,e,!0)[t],n=i.indexOf(r);n>=0&&i.splice(n,1)}/**
     * Returns whether the current prototype/instance has a property effect
     * of a certain type.
     *
     * @override
     * @param {string} property Property name
     * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasPropertyEffect(t,e){let r=this[e];return!!(r&&r[t])}/**
     * Returns whether the current prototype/instance has a "read only"
     * accessor for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,oV.READ_ONLY)}/**
     * Returns whether the current prototype/instance has a "notify"
     * property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasNotifyEffect(t){return this._hasPropertyEffect(t,oV.NOTIFY)}/**
     * Returns whether the current prototype/instance has a "reflect to
     * attribute" property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasReflectEffect(t){return this._hasPropertyEffect(t,oV.REFLECT)}/**
     * Returns whether the current prototype/instance has a "computed"
     * property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */_hasComputedEffect(t){return this._hasPropertyEffect(t,oV.COMPUTE)}// Runtime ----------------------------------------
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
     */_setPendingPropertyOrPath(t,e,r,i){if(i||op(Array.isArray(t)?t[0]:t)!==t){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!i){let r=ov(this,t);// Use property-accessor's simpler dirty check
if(!(t=ob(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(/**@type{string}*/t,e,r))return!/**
 * Computes path changes based on path links set up using the `linkPaths`
 * API.
 *
 * @param {!Polymer_PropertyEffects} inst The instance whose props are changing
 * @param {string} path Path that has changed
 * @param {*} value Value of changed path
 * @return {void}
 * @private
 */function(t,e,r){let i=t.__dataLinkedPaths;if(i){let n;for(let s in i){let o=i[s];of(s,e)?(n=om(s,o,e),t._setPendingPropertyOrPath(n,r,!0,!0)):of(o,e)&&(n=om(o,s,e),t._setPendingPropertyOrPath(n,r,!0,!0))}}}(this,/**@type{string}*/t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(/**@type{string}*/t,e,r);this[t]=e}return!1}/**
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
     */_setUnmanagedPropertyToNode(t,e,r){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
(r!==t[e]||"object"==typeof r)&&("className"===e&&(t=od(t)),t[e]=r)}/**
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
     */_setPendingProperty(t,e,r){let i=this.__dataHasPaths&&oc(t),n=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),i?this.__dataTemp[t]=e:this.__data[t]=e,// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[t]=e,(i||this[oV.NOTIFY]&&this[oV.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}/**
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
__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}/**
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
     */setProperties(t,e){for(let r in t)!e&&this[oV.READ_ONLY]&&this[oV.READ_ONLY][r]||// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}/**
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
     */_propertiesChanged(t,e,r){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
let i,n=this.__dataHasPaths;this.__dataHasPaths=!1,// Compute properties
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
 */function(t,e,r,i){let n=t[oV.COMPUTE];if(n){if(s2){let s;// Runs computed effects in efficient order by keeping a topologically-
// sorted queue of compute effects to run, and inserting subsequently
// invalidated effects as they are run
oq++;let o=/**
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
 */function(t){let e=t.constructor.__orderedComputedDeps;if(!e){let r;e=new Map;let i=t[oV.COMPUTE],{counts:n,ready:s,total:o}=/**
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
 */function(t){let e=t[oX],r={},i=t[oV.COMPUTE],n=[],s=0;// Count dependencies for each computed property
for(let t in e){let i=e[t];// Be sure to add the method name itself in case of "dynamic functions"
s+=r[t]=i.args.filter(t=>!t.literal).length+(i.dynamicFn?1:0)}// Build list of ready properties (that aren't themselves computed)
for(let t in i)e[t]||n.push(t);return{counts:r,ready:n,total:s}}(t);for(;r=s.shift();){e.set(r,e.size);let t=i[r];t&&t.forEach(t=>{// Note `methodInfo` is where the computed property name is stored
let e=t.info.methodInfo;--o,0==--n[e]&&s.push(e)})}0!==o&&console.warn(`Computed graph for ${/** @type {HTMLElement} */t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}(t),a=[];for(let t in e)o5(t,n,a,o,i);for(;s=a.shift();)o3(t,"",e,r,s)&&o5(s.methodInfo,n,a,o,i);Object.assign(/** @type {!Object} */r,t.__dataOld),Object.assign(/** @type {!Object} */e,t.__dataPending),t.__dataPending=null}else{// Original Polymer 2.x computed effects order, which continues running
// effects until no further computed properties have been invalidated
let s=e;for(;oG(t,n,s,r,i);)Object.assign(/** @type {!Object} */r,t.__dataOld),Object.assign(/** @type {!Object} */e,t.__dataPending),s=t.__dataPending,t.__dataPending=null}}}(this,e,r,n),// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
i=this.__dataToNotify,this.__dataToNotify=null,// Propagate properties to clients
this._propagatePropertyChanges(e,r,n),// Flush clients
this._flushClients(),// Reflect properties
oG(this,this[oV.REFLECT],e,r,n),// Observe properties
oG(this,this[oV.OBSERVE],e,r,n),i&&/**
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
 */function(t,e,r,i,n){// Notify
let s,o,a=t[oV.NOTIFY],l=oq++;// Try normal notify effects; if none, fall back to try path notification
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
 */function(t,e,r,i,n,s,o,a){let l=!1,h=e[o?op(i):i];if(h)for(let e=0,a=h.length,u;e<a&&(u=h[e]);e++)(!u.info||u.info.lastRun!==r)&&(!o||oQ(i,u.trigger))&&(u.info&&(u.info.lastRun=r),u.fn(t,i,n,s,u.info,o,void 0),l=!0);return l}(t,a,l,o,r,i,n)?s=!0:n&&/**
 * Dispatches {property}-changed events with path information in the detail
 * object to indicate a sub-path of the property was changed.
 *
 * @param {!Polymer_PropertyEffects} inst The element from which to fire the
 *     event
 * @param {string} path The path that was changed
 * @param {Object} props Bag of current property changes
 * @return {boolean} Returns true if the path was notified
 * @private
 */function(t,e,r){let i=op(e);return i!==e&&(oK(t,oA(i)+"-changed",r[e],e),!0)}(t,o,r)&&(s=!0));s&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,i,e,r,n),1==this.__dataCounter&&(this.__dataTemp={});// ----------------------------
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
     */_propagatePropertyChanges(t,e,r){this[oV.PROPAGATE]&&oG(this,this[oV.PROPAGATE],t,e,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,r)}_runEffectsForTemplate(t,e,r,i){let n=(e,i)=>{oG(this,t.propertyEffects,e,r,i,t.nodeList);for(let n=t.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,e,r,i)};t.runEffects?t.runEffects(n,e,i):n(e,i)}/**
     * Aliases one data path as another, such that path notifications from one
     * are routed to the other.
     *
     * @override
     * @param {string | !Array<string|number>} to Target path to link.
     * @param {string | !Array<string|number>} from Source path to link.
     * @return {void}
     * @public
     */linkPaths(t,e){t=oy(t),e=oy(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}/**
     * Removes a data path alias previously established with `_linkPaths`.
     *
     * Note, the path to unlink should be the target (`to`) used when
     * linking the paths.
     *
     * @override
     * @param {string | !Array<string|number>} path Target path to unlink.
     * @return {void}
     * @public
     */unlinkPaths(t){t=oy(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}/**
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
     */notifySplices(t,e){let r={path:""};aa(this,ov(this,t,r),r.path,e)}/**
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
     */get(t,e){return ov(e||this,t)}/**
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
     */set(t,e,r){r?ob(r,t,e):(!this[oV.READ_ONLY]||!this[oV.READ_ONLY][/** @type {string} */t])&&this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}/**
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
     */push(t,...e){let r={path:""},i=ov(this,t,r),n=i.length,s=i.push(...e);return e.length&&al(this,i,r.path,n,e.length,[]),s}/**
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
     */pop(t){let e={path:""},r=ov(this,t,e),i=!!r.length,n=r.pop();return i&&al(this,r,e.path,r.length,0,[n]),n}/**
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
     */splice(t,e,r,...i){let n,s={path:""},o=ov(this,t,s);return e<0?e=o.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2==arguments.length?o.splice(e):o.splice(e,r,...i),(i.length||n.length)&&al(this,o,s.path,e,i.length,n),n}/**
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
     */shift(t){let e={path:""},r=ov(this,t,e),i=!!r.length,n=r.shift();return i&&al(this,r,e.path,0,0,[n]),n}/**
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
     */unshift(t,...e){let r={path:""},i=ov(this,t,r),n=i.unshift(...e);return e.length&&al(this,i,r.path,0,e.length,[]),n}/**
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
     */notifyPath(t,e){/** @type {string} */let r;if(1==arguments.length){// Get value if not supplied
let i={path:""};e=ov(this,t,i),r=i.path}else r=Array.isArray(t)?oy(t):/** @type{string} */t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}/**
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
     */_createReadOnlyProperty(t,e){this._addPropertyEffect(t,oV.READ_ONLY),e&&(this["_set"+(t[0].toUpperCase()+t.substring(1))]=/** @this {PropertyEffects} */function(e){this._setProperty(t,e)})}/**
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
     */_createPropertyObserver(t,e,r){let i={property:t,method:e,dynamicFn:!!r};this._addPropertyEffect(t,oV.OBSERVE,{fn:oZ,info:i,trigger:{name:t}}),r&&this._addPropertyEffect(/** @type {string} */e,oV.OBSERVE,{fn:oZ,info:i,trigger:{name:e}})}/**
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
     */_createMethodObserver(t,e){let r=an(t);if(!r)throw Error("Malformed observer expression '"+t+"'");o6(this,r,oV.OBSERVE,o4,null,e)}/**
     * Equivalent to static `createNotifyingProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @return {void}
     * @protected
     */_createNotifyingProperty(t){this._addPropertyEffect(t,oV.NOTIFY,{fn:o0,info:{eventName:oA(t)+"-changed",property:t}})}/**
     * Equivalent to static `createReflectedProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @return {void}
     * @protected
     * @suppress {missingProperties} go/missingfnprops
     */_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,oV.REFLECT,{fn:o1,info:{attrName:e}})}/**
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
     */_createComputedProperty(t,e,r){let i=an(e);if(!i)throw Error("Malformed computed expression '"+e+"'");let n=o6(this,i,oV.COMPUTE,o3,t,r);// Effects are normally stored as map of dependency->effect, but for
// ordered computation, we also need tree of computedProp->dependencies
oW(this,oX)[t]=n}/**
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
     */_marshalArgs(t,e,r){let i=this.__data,n=[];for(let s=0,o=t.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:h,literal:u}=t[s];if(!u){if(l){let t=of(o,e),n=ao(i,r,t?e:o);h={path:t?e:o,value:n,base:t?ov(i,o):n}}else h=a?ao(i,r,o):i[o]}// When the `legacyUndefined` flag is enabled, pass a no-op value
// so that the observer, computed property, or compound binding is aborted.
if(s1&&!this._overrideLegacyUndefined&&void 0===h&&t.length>1)return oY;n[s]=h}return n}// -- static class methods ------------
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
     */static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}/**
     * Creates a single-property observer for the given property.
     *
     * @param {string} property Property name
     * @param {string|function(*,*)} method Function or name of observer method to call
     * @param {boolean=} dynamicFn Whether the method name should be included as
     *   a dependency to the effect.
     * @return {void}
     * @protected
     * @nocollapse
     */static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}/**
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
     */static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}/**
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
     */_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),i=this.__preBoundTemplateInfo==r;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!i)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e){if(// For instance-time binding, create instance of template metadata
// and link into tree of templates if necessary
(r=/** @type {!TemplateInfo} */Object.create(r)).wasPreBound=i,this.__templateInfo){// Append this template info onto the end of its parent template's
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
let e=t._parentTemplateInfo||this.__templateInfo,i=e.lastChild;r.parent=e,e.lastChild=r,r.previousSibling=i,i?i.nextSibling=r:e.firstChild=r}else this.__templateInfo=r}else this.__preBoundTemplateInfo=r;return r}/**
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
     */static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let i=t.propertyEffects=t.propertyEffects||{};(i[e]=i[e]||[]).push(r)}/**
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
au.push(this);let r=super._stampTemplate(t,e);// Capture child nodes to allow unstamping of non-prototypical templates
if(au.pop(),// Add template-instance-specific data to instanced templateInfo
e.nodeList=r.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=r.firstChild;e;e=e.nextSibling)t.push(e)}return r.templateInfo=e,!// Setup compound storage, 2-way listeners, and dataHost for bindings
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
let{nodeList:r,nodeInfoList:i}=e;if(i.length)for(let e=0;e<i.length;e++){let n=i[e],s=r[e],o=n.bindings;if(o)for(let e=0;e<o.length;e++){let r=o[e];/**
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
let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,n=Array(i.length);for(let t=0;t<i.length;t++)n[t]=i[t].literal;let s=e.target;r[s]=n,e.literal&&"property"==e.kind&&("className"===s&&(t=od(t)),t[s]=e.literal)}})(s,r),/**
 * Adds a 2-way binding notification event listener to the node specified
 *
 * @param {Object} node Child element to add listener to
 * @param {!Polymer_PropertyEffects} inst Host element instance to handle
 *     notification event
 * @param {Binding} binding Binding metadata
 * @return {void}
 * @private
 */function(t,e,r){if(r.listenerEvent){let i=r.parts[0];t.addEventListener(r.listenerEvent,function(t){var n,s,o;let a,l,h;n=r.target,s=i.source,o=i.negate,(h=(l=/** @type {Object} */t.detail)&&l.path)?(s=om(n,s,h),a=l&&l.value):a=t.currentTarget[n],a=o?!a:a,e[oV.READ_ONLY]&&e[oV.READ_ONLY][s]||!e._setPendingPropertyOrPath(s,a,!0,!!h)||l&&l.queueProperty||e._invalidateProperties()})}}(s,t,r)}// This ensures all bound elements have a host set, regardless
// of whether they upgrade synchronous to creation
s.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),r}/**
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
let e=t.templateInfo,{previousSibling:r,nextSibling:i,parent:n}=e;r?r.nextSibling=i:n&&(n.firstChild=i),i?i.previousSibling=r:n&&(n.lastChild=r),e.nextSibling=e.previousSibling=null;// Remove stamped nodes
let s=e.childNodes;for(let t=0;t<s.length;t++){let e=s[t];od(od(e).parentNode).removeChild(e)}}/**
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
     */static _parseTemplateNode(t,r,i){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
let n=e._parseTemplateNode.call(this,t,r,i);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,r);e&&(// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
t.textContent=ai(e)||" ",o8(this,r,i,"text","textContent",e),n=!0)}return n}/**
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
     */static _parseTemplateNodeAttribute(t,r,i,n,s){let o=this._parseBindings(s,r);if(!o)//     Change back to just super.methodCall()
return e._parseTemplateNodeAttribute.call(this,t,r,i,n,s);{// Attribute or property
let e=n,s="property";oJ.test(n)?s="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),s="attribute");// Initialize attribute bindings with any literal parts
let a=ai(o);return a&&"attribute"==s&&("class"==n&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(n)),t.setAttribute(n,a)),"attribute"==s&&"disable-upgrade$"==e&&t.setAttribute(n,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),// Remove annotation
t.removeAttribute(e),"property"===s&&(n=oS(n)),o8(this,r,i,s,n,o,a),!0}}/**
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
     */static _parseTemplateNestedTemplate(t,r,i){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
let n=e._parseTemplateNestedTemplate.call(this,t,r,i),s=t.parentNode,o=i.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;// Remove nested template and redirect its host bindings & templateInfo
// onto the parent (dom-if/repeat element)'s nodeInfo
s5&&(a||l)&&(s.removeChild(t),// Use the parent's nodeInfo (for the dom-if/repeat) to record the
// templateInfo, and use that for any host property bindings below
(i=i.parentInfo).templateInfo=o,// Ensure the parent dom-if/repeat is noted since it now may have host
// bindings; it may not have been if it did not have its own bindings
i.noted=!0,n=!1);// Merge host props into outer template and add bindings
let h=o.hostProps;if(s3&&a)h&&(r.hostProps=Object.assign(r.hostProps||{},h),s5||(i.parentInfo.noted=!0));else for(let t in h){let e=[{mode:"{",source:t,dependencies:[t],hostProp:!0}];o8(this,r,i,"property","_host_"+t,e)}return n}/**
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
     */static _parseBindings(t,e){let r,i=[],n=0;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
for(;null!==(r=ar.exec(t));){r.index>n&&i.push({literal:t.slice(n,r.index)});// Add binding part
let s=r[1][0],o=!!r[2],a=r[3].trim(),l=!1,h="",u=-1;"{"==s&&(u=a.indexOf("::"))>0&&(h=a.substring(u+2),a=a.substring(0,u),l=!0);let d=an(a),c=[];if(d){// Inline computed function
let{args:t,methodName:r}=d;for(let e=0;e<t.length;e++){let r=t[e];r.literal||c.push(r)}let i=e.dynamicFns;(i&&i[r]||d.static)&&(c.push(r),d.dynamicFn=!0)}else c.push(a);i.push({source:a,mode:s,negate:o,customEvent:l,signature:d,dependencies:c,event:h}),n=ar.lastIndex}// Add a final literal part
if(n&&n<t.length){let e=t.substring(n);e&&i.push({literal:e})}return i.length?i:null}/**
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
     */static _evaluateBinding(t,e,r,i,n,s){let o;return o=e.signature?o4(t,r,i,n,e.signature):r!=e.source?ov(t,e.source):s&&oc(r)?ov(t,r):t.__data[r],e.negate&&(o=!o),o}})}),au=[];/**
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
 */let ad=0;const ac=[],ap=ot(t=>{/**
  * @constructor
  * @implements {Polymer_PropertiesChanged}
  * @private
  */let e=o$(t);/**
  * Returns the super class constructor for the given class, if it is an
  * instance of the PropertiesMixin.
  *
  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
  * @return {?PropertiesMixinConstructor} Super class constructor
  */function r(t){let e=Object.getPrototypeOf(t);// Note, the `PropertiesMixin` class below only refers to the class
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
  */function i(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){let r=t.properties;r&&(e=/**
 * Creates a copy of `props` with each property normalized such that
 * upgraded it is an object with at least a type property { type: Type}.
 *
 * @param {!Object} props Properties to normalize
 * @return {!Object} Copy of input `props` with normalized properties that
 * are in the form {type: Type}
 * @private
 */function(t){let e={};for(let r in t){let i=t[r];e[r]="function"==typeof i?{type:i}:i}return e}(r))}t.__ownProperties=e}return t.__ownProperties}/**
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
    */static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){var t;t=this.prototype,ac.push(t);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}/**
    * Finalizes an element definition, including ensuring any super classes
    * are also finalized. This includes ensuring property
    * accessors exist on the element prototype. This method calls
    * `_finalizeClass` to finalize each constructor in the prototype chain.
    * @return {void}
    * @nocollapse
    */static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){let t=r(/** @type {!PropertiesMixinConstructor} */this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}/**
    * Finalize an element class. This includes ensuring property
    * accessors exist on the element prototype. This method is called by
    * `finalize` and finalizes the class constructor.
    *
    * @protected
    * @nocollapse
    */static _finalizeClass(){let t=i(/** @type {!PropertiesMixinConstructor} */this);t&&/** @type {?} */this.createProperties(t)}/**
    * Returns a memoized version of all properties, including those inherited
    * from super classes. Properties not in object format are converted to
    * at least {type}.
    *
    * @return {Object} Object containing properties for this class
    * @protected
    * @nocollapse
    */static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){let t=r(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},t&&t._properties,i(/** @type {PropertiesMixinConstructor} */this))}return this.__properties}/**
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
    */_initializeProperties(){ad++,this.constructor.finalize(),super._initializeProperties()}/**
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
    */disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),a_=window.ShadyCSS&&window.ShadyCSS.cssBuild,af=ot(t=>{/**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @extends {HTMLElement}
   * @private
   */let e=ap(ah(t));return(/**
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
let t=/** @type {PolymerElementConstructor} */this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):sZ||(t=t.cloneNode(!0))),/** @override */this.prototype._template=t}/**
     * Override of PropertiesChanged createProperties to create accessors
     * and property effects for all of the properties.
     * @param {!Object} props .
     * @return {void}
     * @protected
     * @nocollapse
     */static createProperties(t){for(let i in t){var e,r;e=/** @type {?} */this.prototype,(r=t[i]).computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(i)?console.warn(`Cannot redefine computed property '${i}'.`):e._createComputedProperty(i,r.computed,t)),r.readOnly&&!e._hasReadOnlyEffect(i)?e._createReadOnlyProperty(i,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(i)&&console.warn(`Cannot make readOnly property '${i}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(i)?e._createReflectedProperty(i):!1===r.reflectToAttribute&&e._hasReflectEffect(i)&&console.warn(`Cannot make reflected property '${i}' non-reflected.`),r.notify&&!e._hasNotifyEffect(i)?e._createNotifyingProperty(i):!1===r.notify&&e._hasNotifyEffect(i)&&console.warn(`Cannot make notify property '${i}' non-notify.`),r.observer&&e._createPropertyObserver(i,r.observer,t[r.observer]),// always create the mapping from attribute back to property for deserialization.
e._addPropertyToAttributeMap(i)}}/**
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
     */static createObservers(t,e){let r=this.prototype;for(let i=0;i<t.length;i++)r._createMethodObserver(t[i],e)}/**
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
if(t&&(!sG||sQ)&&(e=os.import(t,"template"),sG&&!e))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
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
     */static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){let t=this.importMeta;if(t)this._importPath=sq(t.url);else{let t=os.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),/** @type {HTMLTemplateElement} */this._template,/** @type {string} */this._importPath,/** @type {string} */this.rootPath,/** @type {string} */this.importPath,/** @type {StampedTemplate | HTMLElement | ShadowRoot} */this.root,/** @type {!Object<string, !Element>} */this.$}/**
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
this.rootPath=sX,this.importPath=this.constructor.importPath;// apply property defaults...
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
   */function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let i=e[r];"value"in i&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=i)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof r.value?r.value.call(this):r.value;// Set via `_setProperty` if there is an accessor, to enable
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
     */static _processStyleText(t,e){return sB(t,e)}/**
    * Configures an element `proto` to function with a given `template`.
    * The element name `is` and extends `ext` must be specified for ShadyCSS
    * style scoping.
    *
    * @param {string} is Tag name (or type extension name) for this element
    * @return {void}
    * @protected
    * @nocollapse
    */static _finalizeTemplate(t){/** @const {HTMLTemplateElement} */let e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;let r=this.importPath,i=r?sU(r):"";!// e.g. support `include="module-name"`, and ShadyCSS
/**
   * Process all style elements in the element template. Styles with the
   * `include` attribute are processed such that any styles in
   * the associated "style modules" are included in the element template.
   * @param {PolymerElementConstructor} klass Element class
   * @param {!HTMLTemplateElement} template Template to process
   * @param {string} is Name of element
   * @param {string} baseURI Base URI for element
   * @private
   */function(t,e,r,i){if(!a_){let n;let s=e.content.querySelectorAll("style"),o=oh(e),a=(n=oa(r))?ou(n):[],l=e.content.firstElementChild;for(let r=0;r<a.length;r++){let n=a[r];n.textContent=t._processStyleText(n.textContent,i),e.content.insertBefore(n,l)}// keep track of the last "concrete" style in the template we have encountered
let h=0;// ensure all gathered styles are actually in this template.
for(let e=0;e<o.length;e++){let r=o[e],n=s[h];n!==r?(r=r.cloneNode(!0),n.parentNode.insertBefore(r,n)):h++,r.textContent=t._processStyleText(r.textContent,i)}}// Support for `adoptedStylesheets` relies on using native Shadow DOM
// and built CSS. Built CSS is required because runtime transformation of
// `@apply` is not supported. This is because ShadyCSS relies on being able
// to update a `style` element in the element template and this is
// removed when using `adoptedStyleSheets`.
// Note, it would be more efficient to allow style includes to become
// separate stylesheets; however, because of `@apply` these are
// potentially not shareable and sharing the ones that could be shared
// would require some coordination. To keep it simple, all the includes
// and styles are collapsed into a single shareable stylesheet.
if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r),s6&&a_&&sV){// Remove styles in template and make a shareable stylesheet
let r=e.content.querySelectorAll("style");if(r){let e="";Array.from(r).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}(this,e,t,i),this.prototype._bindTemplate(e)}}/**
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
     */_attachDom(t){let e=od(this);if(e.attachShadow)return t?(!e.shadowRoot&&(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),s0&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}/**
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
     */resolveUrl(t,e){return!e&&this.importPath&&(e=sU(this.importPath)),sU(t,e)}/**
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
     */static _parseTemplateContent(t,r,i){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return r.dynamicFns=r.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,r,i)}/**
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
     */static _addTemplatePropertyEffect(t,r,i){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return!sK||r in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,r,i)}})});/**
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
*/class am{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}/**
   * Sets the scheduler; that is, a module with the Async interface,
   * a callback and optional arguments to be passed to the run function
   * from the async module.
   *
   * @param {!AsyncInterface} asyncModule Object with Async interface.
   * @param {function()} callback Callback to run.
   * @return {void}
   */setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ay.delete(this),this._callback()})}/**
   * Cancels an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */cancel(){this.isActive()&&(this._cancelAsync(),// Canceling a debouncer removes its spot from the flush queue,
// so if a debouncer is manually canceled and re-debounced, it
// will reset its flush order (this is a very minor difference from 1.x)
// Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
ay.delete(this))}/**
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
   */static debounce(t,e,r){return t instanceof am?// enqueued, to maintain 1.x flush order
t._cancelAsync():t=new am,t.setConfig(e,r),t}}let ay=new Set;const ag=function(t){ay.add(t)},av=function(){let t=!!ay.size;return(// If new debouncers are added while flushing, Set.forEach will ensure
// newly added ones are also flushed
ay.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t)};// detect native touch action support
let ab="string"==typeof document.head.style.touchAction,aw="__polymerGestures",aC="__polymerGesturesHandled",aP="__polymerGesturesTouchAction",aS=["mousedown","mousemove","mouseup","click"],aA=[0,1,4,2],ax=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();/**
 * @param {string} name Possible mouse event name
 * @return {boolean} true if mouse event, false if not
 */function aT(t){return aS.indexOf(t)>-1}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */// check for passive event listeners
let aE=!1;/**
 * Generate settings for event listeners, dependant on `passiveTouchGestures`
 *
 * @param {string} eventName Event name to determine if `{passive}` option is
 *   needed
 * @return {{passive: boolean} | undefined} Options to use for addEventListener
 *   and removeEventListener
 */function aO(t){if(!aT(t)&&"touchend"!==t)return ab&&aE&&sW?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){aE=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();// Check for touch-only devices
let aN=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */const aM=[],ak={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},aI={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
let a$=function(t){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
let e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(// skip synthetic mouse events
t[aC]={skip:!0},"click"===t.type)){let e=!1,r=aH(t);for(let t=0;t<r.length;t++){if(r[t].nodeType===Node.ELEMENT_NODE){if("label"===r[t].localName)aM.push(/** @type {!HTMLLabelElement} */r[t]);else if(ak[/** @type {!HTMLElement} */r[t].localName]){let i=/**
 * @param {HTMLElement} el Element that may be labelled.
 * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
 */function(t){let e=Array.prototype.slice.call(/** @type {HTMLInputElement} */t.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!e.length){e=[];try{let r=t.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(t.id){let i=r.querySelectorAll(`label[for = '${t.id}']`);for(let t=0;t<i.length;t++)e.push(/** @type {!HTMLLabelElement} */i[t])}}catch(t){// Either:
// 1. el.getRootNode() failed.
// 2. el.id cannot be used in `querySelectorAll`
// In both cases, do nothing.
}}return e}(/** @type {!HTMLElement} */r[t]);// check if one of the clicked labels is labelling this element
for(let t=0;t<i.length;t++)e=e||aM.indexOf(i[t])>-1}}if(r[t]===aL.mouse.target)return}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(e)return;t.preventDefault(),t.stopPropagation()}};/**
 * @param {boolean=} setup True to add, false to remove.
 * @return {void}
 */function aD(t){let e=aN?["click"]:aS;for(let r=0,i;r<e.length;r++)i=e[r],t?(// reset clickLabels array
aM.length=0,document.addEventListener(i,a$,!0)):document.removeEventListener(i,a$,!0)}/**
 * @param {MouseEvent} ev event to test for left mouse button down
 * @return {boolean} has left mouse button down
 */function aR(t){let e=t.type;// exit early if the event is not a mouse event
if(!aT(e))return!1;// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if("mousemove"!==e)// ev.button is 0 in mousedown/mouseup/click for left button activation
return 0===(void 0===t.button?0:t.button);{// allow undefined for testing events
let e=void 0===t.buttons?1:t.buttons;// buttons is a bitmask, check that the left button bit is set (1)
return t instanceof window.MouseEvent&&!ax&&(e=aA[t.which]||0),!!(1&e)}}let aL={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function aF(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function az(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener("touchend",function(t){aL.mouse.mouseIgnoreJob||aD(!0),aL.mouse.target=aH(t)[0],aL.mouse.mouseIgnoreJob=am.debounce(aL.mouse.mouseIgnoreJob,ok.after(2500),function(){aD(),aL.mouse.target=null,aL.mouse.mouseIgnoreJob=null})},!!aE&&{passive:!0});/**
 * Returns the composedPath for the given event.
 * @param {Event} event to process
 * @return {!Array<!EventTarget>} Path of the event
 */const aH=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],aj={},aU=[];/**
 * a cheaper check than ev.composedPath()[0];
 *
 * @private
 * @param {Event|Touch} ev Event.
 * @return {EventTarget} Returns the event target.
 */function aB(t){let e=aH(/** @type {?Event} */t);// It shouldn't be, but sometimes path is empty (window on Safari).
return e.length>0?e[0]:t.target}/**
 * @private
 * @param {Event} ev Event.
 * @return {void}
 */function aq(t){let e;let r=t.type,i=t.currentTarget[aw];if(!i)return;let n=i[r];if(n){if(!t[aC]&&(t[aC]={},"touch"===r.slice(0,5))){let e=t.changedTouches[0];if("touchstart"===r&&1===t.touches.length&&(aL.touch.id=e.identifier),aL.touch.id!==e.identifier)return;ab||"touchstart"!==r&&"touchmove"!==r||/**
 * @private
 * @param {TouchEvent} ev Event.
 * @return {void}
 */function(t){let e=t.changedTouches[0],r=t.type;if("touchstart"===r)aL.touch.x=e.clientX,aL.touch.y=e.clientY,aL.touch.scrollDecided=!1;else if("touchmove"===r){if(aL.touch.scrollDecided)return;aL.touch.scrollDecided=!0;let r=function(t){let e="auto",r=aH(t);for(let t=0,i;t<r.length;t++)if((i=r[t])[aP]){e=i[aP];break}return e}(t),i=!1,n=Math.abs(aL.touch.x-e.clientX),s=Math.abs(aL.touch.y-e.clientY);t.cancelable&&("none"===r?i=!0:"pan-x"===r?i=s>n:"pan-y"===r&&(i=n>s)),i?t.preventDefault():aJ("track")}}(t)}// used to ignore synthetic mouse events
if(!(e=t[aC]).skip){// reset recognizer state
for(let r=0,i;r<aU.length;r++)n[(i=aU[r]).name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();// enforce gesture recognizer order
for(let i=0,s;i<aU.length;i++)n[(s=aU[i]).name]&&!e[s.name]&&(e[s.name]=!0,s[r](t))}}}function aY(t){aU.push(t);for(let e=0;e<t.emits.length;e++)aj[t.emits[e]]=t}function aV(t,e){ab&&t instanceof HTMLElement&&oI.run(()=>{t.style.touchAction=e}),t[aP]=e}/**
 * Dispatches an event on the `target` element of `type` with the given
 * `detail`.
 * @private
 * @param {!EventTarget} target The element on which to fire an event.
 * @param {string} type The type of event to fire.
 * @param {!Object=} detail The detail object to populate on the event.
 * @return {void}
 */function aX(t,e,r){let i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});// forward `preventDefault` in a clean way
if(i.detail=r,od(/** @type {!Node} */t).dispatchEvent(i),i.defaultPrevented){let t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function aJ(t){let e=/**
 * @private
 * @param {string} evName Event name.
 * @return {Object} Returns the gesture for the given event name.
 */function(t){for(let e=0,r;e<aU.length;e++){r=aU[e];for(let e=0;e<r.emits.length;e++)if(r.emits[e]===t)return r}return null}(t);e.info&&(e.info.prevent=!0)}/**
 * @param {string} type
 * @param {EventTarget} target
 * @param {Event|Touch} event
 * @param {Event=} preventer
 * @return {void}
 */function aW(t,e,r,i){e&&aX(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:function(t){return aJ(t)}})}/**
 * @param {!GestureInfo} info
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */function aG(t,e,r){if(t.prevent)return!1;if(t.started)return!0;let i=Math.abs(t.x-e),n=Math.abs(t.y-r);return i>=5||n>=5}/**
 * @param {!GestureInfo} info
 * @param {?EventTarget} target
 * @param {Touch} touch
 * @return {void}
 */function aQ(t,e,r){if(!e)return;let i=t.moves[t.moves.length-2],n=t.moves[t.moves.length-1],s=n.x-t.x,o=n.y-t.y,a,l=0;i&&(a=n.x-i.x,l=n.y-i.y),aX(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover:function(){return function(t,e){let r=document.elementFromPoint(t,e),i=r;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
for(;// on Safari, elementFromPoint may return the shadowRoot host
i&&i.shadowRoot&&!window.ShadyDOM&&i!==(i=i.shadowRoot.elementFromPoint(t,e));)i&&(r=i);return r}(r.clientX,r.clientY)}})}/**
 * @param {!GestureInfo} info
 * @param {Event | Touch} e
 * @param {Event=} preventer
 * @return {void}
 */function aZ(t,e,r){let i=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),s=aB(r||e);!(!s||aI[/** @type {!HTMLElement} */s.localName]&&s.hasAttribute("disabled"))&&(isNaN(i)||isNaN(n)||i<=25&&n<=25||function(t){if("click"===t.type){// ev.detail is 0 for HTMLElement.click in most browsers
if(0===t.detail)return!0;// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
let e=aB(t);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!e.nodeType||/** @type {Element} */e.nodeType!==Node.ELEMENT_NODE)return!0;let r=/** @type {Element} */e.getBoundingClientRect(),i=t.pageX,n=t.pageY;// ev is a synthetic click if the position is outside the bounding box of the target
return!(i>=r.left&&i<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(e))&&!t.prevent&&aX(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r})}/* eslint-disable valid-jsdoc */aY({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){az(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(t){if(!aR(t))return;let e=aB(t),r=this;aF(this.info,function(t){aR(t)||(aW("up",e,t),az(r.info))},function(t){aR(t)&&aW("up",e,t),az(r.info)}),aW("down",e,t)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(t){aW("down",aB(t),t.changedTouches[0],t)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(t){aW("up",aB(t),t.changedTouches[0],t)}}),aY({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],/** @this {GestureInfo} */addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,az(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(t){if(!aR(t))return;let e=aB(t),r=this,i=function(t){let i=t.clientX,n=t.clientY;aG(r.info,i,n)&&(// first move is 'start', subsequent moves are 'move', mouseup is 'end'
r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&aJ("tap"),r.info.addMove({x:i,y:n}),aR(t)||(// always fire "end"
r.info.state="end",az(r.info)),e&&aQ(r.info,e,t),r.info.started=!0)};// add temporary document listeners as mouse retargets
aF(this.info,i,function(t){r.info.started&&i(t),// remove the temporary listeners
az(r.info)}),this.info.x=t.clientX,this.info.y=t.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchmove:function(t){let e=aB(t),r=t.changedTouches[0],i=r.clientX,n=r.clientY;aG(this.info,i,n)&&("start"===this.info.state&&aJ("tap"),this.info.addMove({x:i,y:n}),aQ(this.info,e,r),this.info.state="track",this.info.started=!0)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(t){let e=aB(t),r=t.changedTouches[0];// only trackend if track was started and not aborted
this.info.started&&(// reset started state on up
this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),aQ(this.info,e,r))}}),aY({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(t){aR(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */click:function(t){aR(t)&&aZ(this.info,t)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(t){aZ(this.info,t.changedTouches[0],t)}});const aK=ot(t=>/**
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
     */_addEventListenerToNode(t,e,r){(!aj[e]||(/**
 * automate the event listeners for the native events
 *
 * @private
 * @param {!EventTarget} node Node on which to add the event.
 * @param {string} evType Event type to add.
 * @param {function(!Event)} handler Event handler function.
 * @return {void}
 */function(t,e,r){let i=aj[e],n=i.deps,s=i.name,o=t[aw];o||(t[aw]=o={});for(let e=0,r,i;e<n.length;e++)r=n[e],aN&&aT(r)&&"click"!==r||((i=o[r])||(o[r]=i={_count:0}),0===i._count&&t.addEventListener(r,aq,aO(r)),i[s]=(i[s]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,r),i.touchAction&&aV(t,i.touchAction)}(t,e,r),0))&&super._addEventListenerToNode(t,e,r)}/**
     * Remove the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to remove event listener from
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to remove
     * @return {void}
     * @override
     */_removeEventListenerFromNode(t,e,r){(!aj[e]||(/**
 * automate event listener removal for native events
 *
 * @private
 * @param {!EventTarget} node Node on which to remove the event.
 * @param {string} evType Event type to remove.
 * @param {function(!Event): void} handler Event handler function.
 * @return {void}
 */function(t,e,r){let i=aj[e],n=i.deps,s=i.name,o=t[aw];if(o)for(let e=0,r,i;e<n.length;e++)(i=o[r=n[e]])&&i[s]&&(i[s]=(i[s]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(r,aq,aO(r)));t.removeEventListener(e,r)}(t,e,r),0))&&super._removeEventListenerFromNode(t,e,r)}}),a0=/:host\(:dir\((ltr|rtl)\)\)/g,a1=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,a2=/:dir\((?:ltr|rtl)\)/,a5=!!(window.ShadyDOM&&window.ShadyDOM.inUse),a3=[];/** @type {?MutationObserver} */let a8=null,a9="";function a6(){a9=document.documentElement.getAttribute("dir")}/**
 * @param {!Polymer_DirMixin} instance Instance to set RTL status on
 */function a4(t){t.__autoDirOptOut||/** @type {!HTMLElement} */t.setAttribute("dir",a9)}function a7(){a6(),a9=document.documentElement.getAttribute("dir");for(let t=0;t<a3.length;t++)a4(a3[t])}const lt=ot(t=>{a5||a8||(a6(),(a8=new MutationObserver(a7)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));/**
   * @constructor
   * @implements {Polymer_PropertyAccessors}
   * @private
   */let e=oF(t);/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DirMixin}
   */class r extends e{/**
     * @param {string} cssText .
     * @param {string} baseURI .
     * @return {string} .
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */static _processStyleText(t,r){return(// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
t=e._processStyleText.call(this,t,r),!a5&&a2.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t)}/**
     * Replace `:dir` in the given CSS text
     *
     * @param {string} text CSS text to replace DIR
     * @return {string} Modified CSS
     * @nocollapse
     */static _replaceDirInCssText(t){let e=t;return(e=e.replace(a0,':host([dir="$1"])')).replace(a1,':host([dir="$2"]) $1')}constructor(){super(),/** @type {boolean} */this.__autoDirOptOut=!1}/**
     * @override
     * @suppress {invalidCasts} Closure doesn't understand that `this` is an
     *     HTMLElement
     * @return {void}
     */ready(){super.ready(),this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute("dir")}/**
     * @override
     * @suppress {missingProperties} If it exists on elementBase, it can be
     *   super'd
     * @return {void}
     */connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(a8&&a8.takeRecords().length&&a7(),a3.push(this),a4(this))}/**
     * @override
     * @suppress {missingProperties} If it exists on elementBase, it can be
     *   super'd
     * @return {void}
     */disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){let t=a3.indexOf(this);t>-1&&a3.splice(t,1)}}}return r.__activateDir=!1,r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function le(){document.body.removeAttribute("unresolved")}/**
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
*/function lr(t,e,r){return{index:t,removed:e,addedCount:r}}function li(t,e){return(/**
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
 */function(t,e,r,i,n,s){let o,a=0,l=0,h=Math.min(r-e,s-n);if(0==e&&0==n&&(a=function(t,e,r){for(let n=0;n<r;n++){var i;if(t[n]!==e[n])return n}return r}(t,i,h)),r==t.length&&s==i.length&&(l=function(t,e,r){var i;let n=t.length,s=e.length,o=0;for(;o<r&&t[--n]===e[--s];)o++;return o}(t,i,h-a)),e+=a,n+=a,r-=l,s-=l,r-e==0&&s-n==0)return[];if(e==r){for(o=lr(e,[],0);n<s;)o.removed.push(i[n++]);return[o]}if(n==s)return[lr(e,[],r-e)];let u=// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function(t){let e=t.length-1,r=t[0].length-1,i=t[e][r],n=[];for(;e>0||r>0;){let s;if(0==e){n.push(2),r--;continue}if(0==r){n.push(3),e--;continue}let o=t[e-1][r-1],a=t[e-1][r],l=t[e][r-1];(s=a<l?a<o?a:o:l<o?l:o)==o?(o==i?n.push(0):(n.push(1),i=o),e--,r--):s==a?(n.push(3),e--,i=a):(n.push(2),r--,i=l)}return n.reverse(),n}(// Note: This function is *based* on the computation of the Levenshtein
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
function(t,e,r,i,n,s){// "Deletion" columns
let o=s-n+1,a=r-e+1,l=Array(o);// "Addition" rows. Initialize null column.
for(let t=0;t<o;t++)l[t]=Array(a),l[t][0]=t;// Initialize null row
for(let t=0;t<a;t++)l[0][t]=t;for(let r=1;r<o;r++)for(let s=1;s<a;s++){var h;if(t[e+s-1]===i[n+r-1])l[r][s]=l[r-1][s-1];else{let t=l[r-1][s]+1,e=l[r][s-1]+1;l[r][s]=t<e?t:e}}return l}(t,e,r,i,n,s));o=void 0;let d=[],c=e,p=n;for(let t=0;t<u.length;t++)switch(u[t]){case 0:o&&(d.push(o),o=void 0),c++,p++;break;case 1:o||(o=lr(c,[],0)),o.addedCount++,c++,o.removed.push(i[p]),p++;break;case 2:o||(o=lr(c,[],0)),o.addedCount++,c++;break;case 3:o||(o=lr(c,[],0)),o.removed.push(i[p]),p++}return o&&d.push(o),d}(t,0,t.length,e,0,e.length))}/**
 * Returns true if `node` is a slot element
 * @param {!Node} node Node to test.
 * @return {boolean} Returns true if the given `node` is a slot
 * @private
 */function ln(t){return"slot"===t.localName}"interactive"===document.readyState||"complete"===document.readyState?le():window.addEventListener("DOMContentLoaded",le);let ls=class{/**
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
static getFlattenedNodes(t){let e=od(t);return ln(t)?e.assignedNodes({flatten:!0}):Array.from(e.childNodes).map(t=>ln(t)?od(t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}/**
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
   */connect(){ln(this._target)?this._listenSlots([this._target]):od(this._target).children&&(this._listenSlots(od(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}/**
   * Deactivates the flattened nodes observer. After calling this method
   * the observer callback will not be called when changes to flattened nodes
   * occur. The `connect` method may be subsequently called to reactivate
   * the observer.
   *
   * @return {void}
   * @override
   */disconnect(){ln(this._target)?this._unlistenSlots([this._target]):od(this._target).children&&(this._unlistenSlots(od(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}/**
   * @return {void}
   * @private
   */_schedule(){this._scheduled||(this._scheduled=!0,oI.run(()=>this.flush()))}/**
   * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
   * @return {void}
   * @private
   */_processMutations(t){this._processSlotMutations(t),this.flush()}/**
   * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
   * @return {void}
   * @private
   */_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let r=t[e];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}/**
   * Flushes the observer causing any pending changes to be immediately
   * delivered the observer callback. By default these changes are delivered
   * asynchronously at the next microtask checkpoint.
   *
   * @return {boolean} Returns true if any pending changes caused the observer
   * callback to run.
   */flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),r=li(e,this._effectiveNodes);// process removals
for(let e=0,i;e<r.length&&(i=r[e]);e++)for(let e=0,r;e<i.removed.length&&(r=i.removed[e]);e++)t.removedNodes.push(r);// process adds
for(let i=0,n;i<r.length&&(n=r[i]);i++)for(let r=n.index;r<n.index+n.addedCount;r++)t.addedNodes.push(e[r]);// update cache
this._effectiveNodes=e;let i=!1;return(t.addedNodes.length||t.removedNodes.length)&&(i=!0,this.callback.call(this._target,t)),i}/**
   * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
   * @return {void}
   * @private
   */_listenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];ln(r)&&r.addEventListener("slotchange",this._boundSchedule)}}/**
   * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
   * @return {void}
   * @private
   */_unlistenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];ln(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const lo=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=av();while(t||e)},la=Element.prototype,ll=la.matches||la.matchesSelector||la.mozMatchesSelector||la.msMatchesSelector||la.oMatchesSelector||la.webkitMatchesSelector,lh=function(t,e){return ll.call(t,e)};/**
 * Node API wrapper class returned from `Polymer.dom.(target)` when
 * `target` is a `Node`.
 * @implements {PolymerDomApi}
 * @unrestricted
 */class lu{/**
   * @param {!Node} node Node for which to create a Polymer.dom helper object.
   */constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}/**
   * Returns an instance of `FlattenedNodesObserver` that
   * listens for node changes on this element.
   *
   * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
   *   of this element changes
   * @return {!PolymerDomApi.ObserveHandle} Observer instance
   * @override
   */observeNodes(t){return new ls(/** @type {!HTMLElement} */this.node,t)}/**
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
   */deepContains(t){if(od(this.node).contains(t))return!0;let e=t,r=t.ownerDocument;// walk from node to `this` or `document`
for(;e&&e!==r&&e!==this.node;)e=od(e).parentNode||od(e).host;return e===this.node}/**
   * Returns the root node of this node.  Equivalent to `getRootNode()`.
   *
   * @return {!Node} Top most element in the dom tree in which the node
   * exists. If the node is connected to a document this is either a
   * shadowRoot or the document; otherwise, it may be the node
   * itself or a node or document fragment containing it.
   * @override
   */getOwnerRoot(){return od(this.node).getRootNode()}/**
   * For slot elements, returns the nodes assigned to the slot; otherwise
   * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
   *
   * @return {!Array<!Node>} Array of assigned nodes
   * @override
   */getDistributedNodes(){return"slot"===this.node.localName?od(this.node).assignedNodes({flatten:!0}):[]}/**
   * Returns an array of all slots this element was distributed to.
   *
   * @return {!Array<!HTMLSlotElement>} Description
   * @override
   */getDestinationInsertionPoints(){let t=[],e=od(this.node).assignedSlot;for(;e;)t.push(e),e=od(e).assignedSlot;return t}/**
   * Calls `importNode` on the `ownerDocument` for this node.
   *
   * @param {!Node} node Node to import
   * @param {boolean} deep True if the node should be cloned deeply during
   *   import
   * @return {Node} Clone of given node imported to this owner document
   */importNode(t,e){return od(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(t,e)}/**
   * @return {!Array<!Node>} Returns a flattened list of all child nodes and
   * nodes assigned to child slots.
   * @override
   */getEffectiveChildNodes(){return ls.getFlattenedNodes(/** @type {!HTMLElement} */this.node)}/**
   * Returns a filtered list of flattened child elements for this element based
   * on the given selector.
   *
   * @param {string} selector Selector to filter nodes against
   * @return {!Array<!HTMLElement>} List of flattened child elements
   * @override
   */queryDistributedElements(t){let e=this.getEffectiveChildNodes(),r=[];for(let i=0,n=e.length,s;i<n&&(s=e[i]);i++)s.nodeType===Node.ELEMENT_NODE&&lh(s,t)&&r.push(s);return r}/**
   * For shadow roots, returns the currently focused element within this
   * shadow root.
   *
   * return {Node|undefined} Currently focused element
   * @override
   */get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function ld(t,e){for(let r=0;r<e.length;r++){let i=e[r];Object.defineProperty(t,i,{get:function(){return /** @type {DomApiNative} */this.node[i]},configurable:!0})}}class lc{constructor(t){this.event=t}/**
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
 */lu.prototype.cloneNode,/**
 * @function
 * @param {!Node} node
 * @return {!Node}
 */lu.prototype.appendChild,/**
 * @function
 * @param {!Node} newChild
 * @param {Node} refChild
 * @return {!Node}
 */lu.prototype.insertBefore,/**
 * @function
 * @param {!Node} node
 * @return {!Node}
 */lu.prototype.removeChild,/**
 * @function
 * @param {!Node} oldChild
 * @param {!Node} newChild
 * @return {!Node}
 */lu.prototype.replaceChild,/**
 * @function
 * @param {string} name
 * @param {string} value
 * @return {void}
 */lu.prototype.setAttribute,/**
 * @function
 * @param {string} name
 * @return {void}
 */lu.prototype.removeAttribute,/**
 * @function
 * @param {string} selector
 * @return {?Element}
 */lu.prototype.querySelector,/**
 * @function
 * @param {string} selector
 * @return {!NodeList<!Element>}
 */lu.prototype.querySelectorAll,/** @type {?Node} */lu.prototype.parentNode,/** @type {?Node} */lu.prototype.firstChild,/** @type {?Node} */lu.prototype.lastChild,/** @type {?Node} */lu.prototype.nextSibling,/** @type {?Node} */lu.prototype.previousSibling,/** @type {?HTMLElement} */lu.prototype.firstElementChild,/** @type {?HTMLElement} */lu.prototype.lastElementChild,/** @type {?HTMLElement} */lu.prototype.nextElementSibling,/** @type {?HTMLElement} */lu.prototype.previousElementSibling,/** @type {!Array<!Node>} */lu.prototype.childNodes,/** @type {!Array<!HTMLElement>} */lu.prototype.children,/** @type {?DOMTokenList} */lu.prototype.classList,/** @type {string} */lu.prototype.textContent,/** @type {string} */lu.prototype.innerHTML;let lp=lu;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){/**
   * @private
   * @extends {HTMLElement}
   */class t extends window.ShadyDOM.Wrapper{}// copy bespoke API onto wrapper
Object.getOwnPropertyNames(lu.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=lu.prototype[e])}),// Note, `classList` is here only for legacy compatibility since it does not
// trigger distribution in v1 Shadow DOM.
ld(t.prototype,["classList"]),lp=t,Object.defineProperties(lc.prototype,{// Returns the "lowest" node in the same root as the event's currentTarget.
// When in `noPatch` mode, this must be calculated by walking the event's
// path.
localTarget:{get(){let t=this.event.currentTarget,e=t&&l_(t).getOwnerRoot(),r=this.path;for(let t=0;t<r.length;t++){let i=r[t];if(l_(i).getOwnerRoot()===e)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!// Methods that can provoke distribution or must return the logical, not
// composed tree.
function(t,e){for(let r=0;r<e.length;r++){let i=e[r];/* eslint-disable valid-jsdoc */t[i]=/** @this {DomApiNative} */function(){return this.node[i].apply(this.node,arguments)};/* eslint-enable */}}(lu.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),// Properties that should return the logical, not composed tree. Note, `classList`
// is here only for legacy compatibility since it does not trigger distribution
// in v1 Shadow DOM.
ld(lu.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function(t,e){for(let r=0;r<e.length;r++){let i=e[r];Object.defineProperty(t,i,{/**
       * @this {DomApiNative}
       * @return {*} .
       */get:function(){return this.node[i]},/**
       * @this {DomApiNative}
       * @param {*} value .
       */set:function(t){this.node[i]=t},configurable:!0})}}(lu.prototype,["textContent","innerHTML","className"]);const l_=function(t){if((t=t||document)instanceof lp||t instanceof lc)return /** @type {!DomApi} */t;let e=t.__domApi;return e||(e=t instanceof Event?new lc(t):new lp(/** @type {Node} */t),t.__domApi=e),e},lf=window.ShadyDOM,lm=window.ShadyCSS;/**
 * Return true if node scope is correct.
 *
 * @param {!Element} node Node to check scope
 * @param {!Node} scope Scope reference
 * @return {boolean} True if node is in scope
 */function ly(t,e){return od(t).getRootNode()===e}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const lg="disable-upgrade",lv=t=>{for(;t;){let e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};ot(t=>{/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   * @private
   */let e=af(t),r=lv(e);return(/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DisableUpgradeMixin}
   */class extends e{constructor(){super(),/** @type {boolean|undefined} */this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat(lg)}// Prevent element from initializing properties when it's upgrade disabled.
/** @override */_initializeProperties(){this.hasAttribute(lg)?this.__isUpgradeDisabled=!0:super._initializeProperties()}// Prevent element from enabling properties when it's upgrade disabled.
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
     */attributeChangedCallback(t,e,r,i){t==lg?this.__isUpgradeDisabled&&null==r&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,od(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,r,/** @type {null|string} */i)}// Prevent element from connecting when it's upgrade disabled.
// This prevents user code in `attached` from being called.
/** @override */connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}// Prevent element from disconnecting when it's upgrade disabled.
// This avoids allowing user code `detached` from being called without a
// paired call to `attached`.
/** @override */disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}})});const lb="disable-upgrade";let lw=window.ShadyCSS;const lC=ot(t=>{// TODO(kschaaf): Note, the `@implements {Polymer_DirMixin}` is required here
// (rather than on legacyElementBase) for unknown reasons.
/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @implements {Polymer_GestureEventListeners}
   * @implements {Polymer_DirMixin}
   * @extends {HTMLElement}
   * @private
   */let e=aK(af(t)),r=a_?e:lt(e),i=lv(r),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};/**
   * @polymer
   * @mixinClass
   * @extends {legacyElementBase}
   * @implements {Polymer_LegacyElementMixin}
   * @unrestricted
   */class s extends r{constructor(){super(),/** @type {boolean} */this.isAttached,/** @type {?WeakMap<!Element, !Object<string, !Function>>} */this.__boundListeners,/** @type {?Object<string, ?Function>} */this._debouncers,// NOTE: Inlined for perf from version of DisableUpgradeMixin.
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
     */__attributeReaction(t,e,r){(this.__dataAttributes&&this.__dataAttributes[t]||t===lb)&&this.attributeChangedCallback(t,e,r,null)}/**
     * Sets the value of an attribute.
     * @override
     */setAttribute(t,e){if(s9&&!this._legacyForceObservedAttributes){let r=this.getAttribute(t);super.setAttribute(t,e),// value coerced to String for closure's benefit
this.__attributeReaction(t,r,String(e))}else super.setAttribute(t,e)}/**
     * Removes an attribute.
     * @override
     */removeAttribute(t){if(s9&&!this._legacyForceObservedAttributes){let e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
static get observedAttributes(){if(!s9||this.prototype._legacyForceObservedAttributes)return i.call(this).concat(lb);// Ensure this element is property registered with the telemetry system.
if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){var t;this.__observedAttributes=[],t=this.prototype,ac.push(t)}return this.__observedAttributes}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
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
     */attributeChangedCallback(t,e,r,i){e!==r&&(t==lb?this.__isUpgradeDisabled&&null==r&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,od(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,r,i),this.attributeChanged(t,e,r)))}/**
     * Legacy callback called during `attributeChangedChallback`, for overriding
     * by the user.
     * @param {string} name Name of attribute.
     * @param {?string} old Old value of attribute.
     * @param {?string} value Current value of attribute.
     * @return {void}
     * @override
     */attributeChanged(t,e,r){}/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for class initialization via the `_registered` callback.
     * This is called only when the first instance of the element is created.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts}
     */_initializeProperties(){// NOTE: Inlined for perf from version of DisableUpgradeMixin.
// Only auto-use disable-upgrade if legacyOptimizations is set.
if(sZ&&this.hasAttribute(lb))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),// backstop in case the `_registered` implementation does not set this
t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=/** @type {HTMLElement} */this,this.created(),!s9||this._legacyForceObservedAttributes||(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
this._applyListeners()}}_takeAttributes(){let t=this.attributes;for(let e=0,r=t.length;e<r;e++){let r=t[e];this.__attributeReaction(r.name,null,r.value)}}/**
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
     */reflectPropertyToAttribute(t,e,r){this._propertyToAttribute(t,e,r)}/**
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
     */serializeValueToAttribute(t,e,r){this._valueToNodeAttribute(/** @type {Element} */r||this,t,e)}/**
     * Copies own properties (including accessor descriptors) from a source
     * object to a target object.
     *
     * @param {Object} prototype Target object to copy properties to.
     * @param {Object} api Source object to copy properties from.
     * @return {Object} prototype object that was passed as first argument.
     * @override
     */extend(t,e){if(!(t&&e))return t||e;let r=Object.getOwnPropertyNames(e);for(let i=0,n;i<r.length&&(n=r[i]);i++){let r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r)}return t}/**
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
     */mixin(t,e){for(let r in e)t[r]=e[r];return t}/**
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
     */fire(t,e,r){r=r||{},e=null==e?{}:e;let i=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:!!r.cancelable,composed:void 0===r.composed||r.composed});return i.detail=e,od(r.node||this).dispatchEvent(i),i}/**
     * Convenience method to add an event listener on a given element,
     * late bound to a named method on this element.
     *
     * @param {?EventTarget} node Element to add event listener to.
     * @param {string} eventName Name of event to listen for.
     * @param {string} methodName Name of handler method on `this` to call.
     * @return {void}
     * @override
     */listen(t,e,r){t=/** @type {!EventTarget} */t||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),n=i.get(t);n||(n={},i.set(t,n));let s=e+r;n[s]||(n[s]=this._addMethodEventListenerToNode(/** @type {!Node} */t,e,r,this))}/**
     * Convenience method to remove an event listener from a given element,
     * late bound to a named method on this element.
     *
     * @param {?EventTarget} node Element to remove event listener from.
     * @param {string} eventName Name of event to stop listening to.
     * @param {string} methodName Name of handler method on `this` to not call
     anymore.
     * @return {void}
     * @override
     */unlisten(t,e,r){t=/** @type {!EventTarget} */t||this;let i=this.__boundListeners&&this.__boundListeners.get(/** @type {!Element} */t),n=e+r,s=i&&i[n];s&&(this._removeEventListenerFromNode(/** @type {!Node} */t,e,s),i[n]=/** @type {?} */null)}/**
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
     */setScrollDirection(t,e){aV(/** @type {!Element} */e||this,n[t]||"auto")}/* **** End Events **** *//**
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
     */get domHost(){let t=od(this).getRootNode();return t instanceof DocumentFragment?/** @type {ShadowRoot} */t.host:t}/**
     * Force this element to distribute its children to its local dom.
     * This should not be necessary as of Polymer 2.0.2 and is provided only
     * for backwards compatibility.
     * @return {void}
     * @override
     */distributeContent(){let t=l_(/** @type {Element} */this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}/**
     * Returns a list of nodes that are the effective childNodes. The effective
     * childNodes list is the same as the element's childNodes except that
     * any `<content>` elements are replaced with the list of nodes distributed
     * to the `<content>`, the result of its `getDistributedNodes` method.
     * @return {!Array<!Node>} List of effective child nodes.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an
     *     HTMLElement
     * @override
     */getEffectiveChildNodes(){let t=l_(/** @type {Element} */this);return t.getEffectiveChildNodes()}/**
     * Returns a list of nodes distributed within this element that match
     * `selector`. These can be dom children or elements distributed to
     * children that are insertion points.
     * @param {string} selector Selector to run.
     * @return {!Array<!Node>} List of distributed elements that match selector.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an
     * HTMLElement
     * @override
     */queryDistributedElements(t){let e=l_(/** @type {Element} */this);return e.queryDistributedElements(t)}/**
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
     */getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let r=0,i;i=t[r];r++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}/**
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
let e=this.root.querySelector(t||"slot");return e?l_(e).getDistributedNodes():[]}/**
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
     */isLightDescendant(t){return /** @type {Node} */this!==t&&od(this).contains(t)&&od(this).getRootNode()===od(t).getRootNode()}/**
     * Checks whether an element is in this element's local DOM tree.
     *
     * @param {!Element} node The element to be checked.
     * @return {boolean} true if node is in this element's local DOM tree.
     * @override
     */isLocalDescendant(t){return this.root===od(t).getRootNode()}/**
     * No-op for backwards compatibility. This should now be handled by
     * ShadyCss library.
     * @param  {!Element} container Container element to scope
     * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
     * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
     * @override
     */scopeSubtree(t,e=!1){return function(t,e=!1){// If using native ShadowDOM, abort
if(!lf||!lm||!lf.handlesDynamicScoping)return null;let r=lm.ScopingShim;// if ScopingShim is not available, abort
if(!r)return null;// capture correct scope for container
let i=r.scopeForNode(t),n=od(t).getRootNode(),s=t=>{if(!ly(t,n))return;// NOTE: native qSA does not honor scoped DOM, but it is faster, and the same behavior as Polymer v1
let e=Array.from(lf.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){let s=e[t];if(!ly(s,n))continue;let o=r.currentScopeForNode(s);o!==i&&(""!==o&&r.unscopeNode(s,o),r.scopeNode(s,i))}};if(// scope everything in container
s(t),!e)return null;{let e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){let r=t[e];for(let t=0;t<r.addedNodes.length;t++){let e=r.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&s(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}}(t,e)}/**
     * Returns the computed style value for the given property.
     * @param {string} property The css property name.
     * @return {string} Returns the computed css property value for the given
     * `property`.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an
     *     HTMLElement
     * @override
     */getComputedStyleValue(t){return lw.getComputedStyleValue(/** @type {!Element} */this,t)}// debounce
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
     */debounce(t,e,r){return this._debouncers=this._debouncers||{},this._debouncers[t]=am.debounce(this._debouncers[t],r>0?ok.after(r):oI,e.bind(this))}/**
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
     */async(t,e){return e>0?ok.run(t.bind(this),e):~oI.run(t.bind(this))}/**
     * Cancels an async operation started with `async`.
     *
     * @param {number} handle Handle returned from original `async` call to
     *   cancel.
     * @return {void}
     * @override
     */cancelAsync(t){t<0?oI.cancel(~t):ok.cancel(t)}// other
/**
     * Convenience method for creating an element and configuring it.
     *
     * @param {string} tag HTML element tag to create.
     * @param {Object=} props Object of properties to configure on the
     *    instance.
     * @return {!Element} Newly created and configured element.
     * @override
     */create(t,e){let r=document.createElement(t);if(e){if(r.setProperties)r.setProperties(e);else for(let t in e)r[t]=e[t]}return r}/**
     * Polyfill for Element.prototype.matches, which is sometimes still
     * prefixed.
     *
     * @param {string} selector Selector to test.
     * @param {!Element=} node Element to test the selector against.
     * @return {boolean} Whether the element matches the selector.
     * @override
     */elementMatches(t,e){return lh(e||this,t)}/**
     * Toggles an HTML attribute on or off.
     *
     * @param {string} name HTML attribute name
     * @param {boolean=} bool Boolean to force the attribute on or off.
     *    When unspecified, the state of the attribute will be reversed.
     * @return {boolean} true if the attribute now exists
     * @override
     */toggleAttribute(t,e){let r=/** @type {Element} */this;return(3==arguments.length&&(r=/** @type {Element} */arguments[2]),1==arguments.length&&(e=!r.hasAttribute(t)),e)?(od(r).setAttribute(t,""),!0):(od(r).removeAttribute(t),!1)}/**
     * Toggles a CSS class on or off.
     *
     * @param {string} name CSS class name
     * @param {boolean=} bool Boolean to force the class on or off.
     *    When unspecified, the state of the class will be reversed.
     * @param {Element=} node Node to target.  Defaults to `this`.
     * @return {void}
     * @override
     */toggleClass(t,e,r){r=/** @type {Element} */r||this,1==arguments.length&&(e=!r.classList.contains(t)),e?r.classList.add(t):r.classList.remove(t)}/**
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
     */translate3d(t,e,r,i){i=/** @type {Element} */i||this,this.transform("translate3d("+t+","+e+","+r+")",i)}/**
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
     */arrayDelete(t,e){let r;if(Array.isArray(t)){if((r=t.indexOf(e))>=0)return t.splice(r,1)}else if((r=ov(this,t).indexOf(e))>=0)return this.splice(t,r,1);return null}// logging
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
     */_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return s.prototype.is="",s}),lP={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},lS={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},lA=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},lS);function lx(t,e,r,i){for(let n in!function(t,e,r){let i=t._noAccessors,n=Object.getOwnPropertyNames(t);for(let s=0;s<n.length;s++){let o=n[s];if(!(o in r)){if(i)e[o]=t[o];else{let r=Object.getOwnPropertyDescriptor(t,o);r&&(// ensure property is configurable so that a later behavior can
// re-configure it.
r.configurable=!0,Object.defineProperty(e,o,r))}}}}(e,t,i),lP)e[n]&&(r[n]=r[n]||[],r[n].push(e[n]))}/**
 * Copies property descriptors from source to target, overwriting all fields
 * of any previous descriptor for a property *except* for `value`, which is
 * merged in from the target if it does not exist on the source.
 *
 * @param {*} target Target properties object
 * @param {*} source Source properties object
 */function lT(t,e){for(let r in e){let i=t[r],n=e[r];!("value"in n)&&i&&"value"in i?t[r]=Object.assign({value:i.value},n):t[r]=n}}const lE=lC(HTMLElement),lO=function(t){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
let e;return e="function"==typeof t?t:lO.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,/** @type {!HTMLElement} */e),e};/**
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
function lN(t,e,r,i,n){let s;n&&(s="object"==typeof r&&null!==r)&&(i=t.__dataTemp[e]);// Strict equality check, but return false for NaN===NaN
let o=i!==r&&(i==i||r==r);return s&&o&&(t.__dataTemp[e]=r),o}lO.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let r=e?e(lE):lE;return(// decorate klass with registration info
(r=/* Note about construction and extension of legacy classes.
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
 */function(t,e,r){let i;let n={};/** @private */class s extends e{// explicitly not calling super._finalizeClass
/** @nocollapse */static _finalizeClass(){// if calling via a subclass that hasn't been generated, pass through to super
if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){// interleave properties and observers per behavior and `info`
if(i)for(let t=0,e;t<i.length;t++)(e=i[t]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),// make sure to prepare the element template
this._prepareTemplate()}else //     Change back to just super.methodCall()
e._finalizeClass.call(this)}/** @nocollapse */static get properties(){let e={};if(i)for(let t=0;t<i.length;t++)lT(e,i[t].properties);return lT(e,t.properties),e}/** @nocollapse */static get observers(){let e=[];if(i)for(let t=0,r;t<i.length;t++)(r=i[t]).observers&&(e=e.concat(r.observers));return t.observers&&(e=e.concat(t.observers)),e}/**
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
super._registered(),sZ&&o(t);// make sure legacy lifecycle is called on the *element*'s prototype
// and not the generated class prototype; if the element has been
// extended, these are *not* the same.
let e=Object.getPrototypeOf(this),r=n.beforeRegister;if(r)for(let t=0;t<r.length;t++)r[t].call(e);if(r=n.registered)for(let t=0;t<r.length;t++)r[t].call(e)}}/**
     * @return {void}
     */_applyListeners(){super._applyListeners();let t=n.listeners;if(t)for(let e=0;e<t.length;e++){let r=t[e];if(r)for(let t in r)this._addMethodEventListenerToNode(this,t,r[t])}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
     * @return {void}
     */_ensureAttributes(){let t=n.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){let r=t[e];for(let t in r)this._ensureAttribute(t,r[t])}super._ensureAttributes()}/**
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
     */attributeChanged(t,e,r){super.attributeChanged();let i=n.attributeChanged;if(i)for(let n=0;n<i.length;n++)i[n].call(this,t,e,r)}}// apply behaviors, note actual copying is done lazily at first instance creation
if(r){Array.isArray(r)||(r=[r]);let t=e.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
i=/**
 * @param {Array} behaviors List of behaviors to flatten.
 * @param {Array=} list Target list to flatten behaviors into.
 * @param {Array=} exclude List of behaviors to exclude from the list.
 * @return {!Array} Returns the list of flattened behaviors.
 */function t(e,r,i){r=r||[];for(let n=e.length-1;n>=0;n--){let s=e[n];s?Array.isArray(s)?t(s,r):0>r.indexOf(s)&&(!i||0>i.indexOf(s))&&r.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return r}(r,null,t),s.prototype.behaviors=t?t.concat(r):i}let o=e=>{i&&// NOTE:
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
function(t,e,r){for(let i=0;i<e.length;i++)lx(t,e[i],r,lA)}(e,i,n),lx(e,t,n,lS)};return sZ||o(s.prototype),s.generatedFrom=t,s}(t,r,t.behaviors)).is=r.prototype.is=t.is,r)};const lM=ot(t=>/**
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
     */_shouldPropertyChange(t,e,r){return lN(this,t,e,r,!0)}}),lk=ot(t=>/**
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
     */_shouldPropertyChange(t,e,r){return lN(this,t,e,r,this.mutableData)}});// Export for use by legacy behavior
lM._mutablePropertyChange=lN;// Base class for HTMLTemplateElement extension that has property effects
// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
let lI=null;/**
 * @constructor
 * @extends {HTMLTemplateElement}
 * @private
 */function l$(){return lI}l$.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l$,writable:!0}});/**
 * @constructor
 * @implements {Polymer_PropertyEffects}
 * @extends {HTMLTemplateElementExtension}
 * @private
 */const lD=ah(l$),lR=lM(lD),lL=ah(class{});function lF(t,e){for(let r=0;r<e.length;r++){let i=e[r];// Ignore non-changes
if(!!t!=!!i.__hideTemplateChildren__){// clear and restore text
if(i.nodeType===Node.TEXT_NODE)t?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName){if(t)i.__polymerReplaced__=document.createComment("hidden-slot"),od(od(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{let t=i.__polymerReplaced__;t&&od(od(t).parentNode).replaceChild(i,t)}}else i.style&&(t?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__)}i.__hideTemplateChildren__=t,i._showHideChildren&&i._showHideChildren(t)}}/**
 * @polymer
 * @customElement
 * @appliesMixin PropertyEffects
 * @unrestricted
 */class lz extends lL{constructor(t){super(),this._configureProperties(t),/** @type {!StampedTemplate} */this.root=this._stampTemplate(this.__dataHost);// Save list of stamped children
let e=[];/** @suppress {invalidCasts} */this.children=/** @type {!NodeList} */e;// Polymer 1.x did not use `Polymer.dom` here so not bothering.
for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}/**
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
   */_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)// events this template instance as `model`
this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,r(t)});else{// Otherwise delegate to the template's host (which could be)
// another template instance
let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,r)}}/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hide Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */_showHideChildren(t){lF(t,this.children)}/**
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
   */_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}/**
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
   */dispatchEvent(t){return!0}}/** @type {!DataTemplate} */lz.prototype.__dataHost,/** @type {!TemplatizeOptions} */lz.prototype.__templatizeOptions,/** @type {!Polymer_PropertyEffects} */lz.prototype._methodHost,/** @type {!Object} */lz.prototype.__templatizeOwner,/** @type {!Object} */lz.prototype.__hostProps;/**
 * @constructor
 * @extends {TemplateInstanceBase}
 * @implements {Polymer_MutableData}
 * @private
 */const lH=lM(// TemplateInstanceBase is a constructor function.
/** @type {function(new:TemplateInstanceBase)} */lz);function lj(t){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
let e=t.__dataHost;return e&&e._methodHost||e}function lU(t,e,r){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(sG&&!lj(t))throw Error("strictTemplatePolicy: template owner not trusted");if(r=/** @type {!TemplatizeOptions} */r||{},t.__templatizeOwner)throw Error("A <template> can only be templatized once");t.__templatizeOwner=e;let i=e?e.constructor:lz,n=i._parseTemplate(t),s=n.templatizeInstanceClass;if(!s){var o;let e,i;e=(o=r).mutableData?lH:lz,lU.mixin&&(e=lU.mixin(e)),/** @override */(i=class extends e{}).prototype.__templatizeOptions=o,i.prototype._bindTemplate(t),function(t,e,r,i){let n=r.hostProps||{};for(let e in i.instanceProps){delete n[e];let r=i.notifyInstanceProp;r&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e){return function(t,r,i){e.call(t.__templatizeOwner,t,r,i[r])}}(0,r)})}if(i.forwardHostProp&&e.__dataHost)for(let e in n)r.hasHostProps||(r.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}})}(i,t,n,o),s=i,n.templatizeInstanceClass=s}let a=lj(t);!// Host property forwarding must be installed onto template instance
/**
 * Adds propagate effects from the template to the template instance for
 * properties that the host binds to the template using the `_host_` prefix.
 *
 * @suppress {missingProperties} class.prototype is not defined for some reason
 */function(t,e,r,i){let n=r.forwardHostProp;if(n&&e.hasHostProps){// Under the `removeNestedTemplates` optimization, a custom element like
// `dom-if` or `dom-repeat` can itself be treated as the "template"; this
// flag is used to switch between upgrading a `<template>` to be a property
// effects client vs. adding the effects directly to the custom element
let o="template"==t.localName,a=e.templatizeTemplateClass;if(!a){if(o){/**
         * @constructor
         * @extends {DataTemplate}
         */let t=r.mutableData?lR:lD;a=e.templatizeTemplateClass=// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */class extends t{}}else{/**
         * @constructor
         * @extends {PolymerElement}
         */let r=t.constructor;a=e.templatizeTemplateClass=// Create a cached subclass of the base custom element class onto which
// to put the template-specific propagate effects
// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */class extends r{}}// Add template - >instances effects
// and host <- template effects
let s=e.hostProps;for(let t in s)a.prototype._addPropertyEffect("_host_"+t,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:/* eslint-enable valid-jsdoc */function(t,e){return function(t,r,i){e.call(t.__templatizeOwner,r.substring(6),i[r])}}(0,n)}),a.prototype._createNotifyingProperty("_host_"+t);sK&&i&&function(t,e,r){let i=r.constructor._properties,{propertyEffects:n}=t,{instanceProps:s}=e;for(let t in n)// host (`methodHost`), unless they are instance props or static functions
if(!i[t]&&!(s&&s[t])){let e=n[t];for(let r=0;r<e.length;r++){let{part:i}=e[r].info;if(!(i.signature&&i.signature.static)){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,r,i)}if(t.__dataProto&&// to not be since this is a vanilla template we just added effects to
Object.assign(t.__data,t.__dataProto),o){var s;s=a,lI=t,Object.setPrototypeOf(t,s.prototype),new s,lI=null,// Clear any pending data for performance
t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}else{// Swizzle the cached subclass prototype onto the custom element
Object.setPrototypeOf(t,a.prototype);// Check for any pre-bound instance host properties, and do the
// instance property delete/assign dance for those (directly into data;
// not need to go through accessor since they are pulled at instance time)
let r=e.hostProps;for(let e in r)if((e="_host_"+e)in t){let r=t[e];delete t[e],t.__data[e]=r}}}}(t,n,r,a);// Subclass base class and add reference for this specific template
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
 */let lB=!1;function lq(){if(sZ&&!sY){if(!lB){lB=!0;let t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
 * @constructor
 * @extends {HTMLElement}
 * @implements {Polymer_PropertyEffects}
 * @implements {Polymer_OptionalMutableData}
 * @implements {Polymer_GestureEventListeners}
 * @private
 */const lY=aK(lk(ah(HTMLElement)));customElements.define("dom-bind",class extends lY{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),sG)throw Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}/* eslint-disable no-unused-vars *//**
   * @override
   * @param {string} name Name of attribute that changed
   * @param {?string} old Old attribute value
   * @param {?string} value New attribute value
   * @param {?string} namespace Attribute namespace.
   * @return {void}
   */attributeChangedCallback(t,e,r,i){// assumes only one observed attribute
this.mutableData=!0}/**
   * @override
   * @return {void}
   */connectedCallback(){lq()||(this.style.display="none"),this.render()}/**
   * @override
   * @return {void}
   */disconnectedCallback(){this.__removeChildren()}__insertChildren(){od(od(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}/**
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
 */const lV=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});/**
 * Class representing a static string value which can be used to filter
 * strings by asseting that they have been created via this class. The
 * `value` property returns the string passed to the constructor.
 */class lX{/**
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {!Array<*>} values Variable parts of tagged template literal
   */constructor(t,e){lW(t,e);let r=e.reduce((e,r,i)=>e+lJ(r)+t[i+1],t[0]);/** @type {string} */this.value=r.toString()}/**
   * @return {string} LiteralString string value
   * @override
   */toString(){return this.value}}/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */function lJ(t){if(t instanceof lX)return /** @type {!LiteralString} */t.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}/**
 * @param {!ITemplateArray} strings Constant parts of tagged template literal
 * @param {!Array<*>} values Array of values from quasis
 */const lW=(t,e)=>{// Note: if/when https://github.com/tc39/proposal-array-is-template-object
// is standardized, use that instead when available, as it can perform an
// unforgable check (though of course, the function itself can be forged).
if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)// calling the html template tag function as a regular function.
//
throw TypeError("Invalid call to the html template tag")},lG=af(HTMLElement),lQ=lk(lG);class lZ extends lQ{// Not needed to find template; can be removed once the analyzer
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
       */renderedItemCount:{type:Number,notify:!s8,readOnly:!0},/**
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
if(super.connectedCallback(),lq()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=od(od(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);// Restart chunking if one was in progress when disconnected
this.__chunkingId&&this.__render()}}__ensureTemplatized(){// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){let t=this.template=/** @type {!HTMLTemplateElement} *//** @type {!HTMLElement} */this._templateInfo?this:/** @type {!HTMLTemplateElement} */this.querySelector("template");if(!t){// Wait until childList changes and template should be there by then
let t=new MutationObserver(()=>{if(this.querySelector("template"))t.disconnect(),this.__render();else throw Error("dom-repeat requires a <template> child")});return t.observe(this,{childList:!0}),!1}// Template instance props that should be excluded from forwarding
let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=lU(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function(t,e){let r=this.__instances;for(let i=0,n;i<r.length&&(n=r[i]);i++)n.forwardHostProp(t,e)},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function(t,e,r){var i;if((i=this.as)===e||o_(i,e)||of(i,e)){let i=t[this.itemsIndexAs];e==this.as&&(this.items[i]=r);let n=om(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,e);this.notifyPath(n,r)}}})}return!0}__getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=this.__getMethodHost();return function(){return e[t].apply(e,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(t){if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
let e=this.__observePaths;for(let r=0;r<e.length;r++)0===t.indexOf(e[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}/**
   * @param {function(this:DomRepeat)} fn Function to debounce.
   * @param {number=} delay Delay in ms to debounce by.
   */__debounceRender(t,e=0){this.__renderDebouncer=am.debounce(this.__renderDebouncer,e>0?ok.after(e):oI,t.bind(this)),ag(this.__renderDebouncer)}/**
   * Forces the element to render its content. Normally rendering is
   * asynchronous to a provoking change. This is done for efficiency so
   * that multiple changes trigger only a single render. The render method
   * should be called if, for example, template rendering is required to
   * validate application state.
   * @return {void}
   */render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render),lo()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[],e=this.__sortAndFilterItems(t),r=this.__calculateLimit(e.length);// Create, update, and/or remove instances
this.__updateInstances(t,r,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),// Set rendered item count
this._setRenderedItemCount(this.__instances.length),(!s8||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){// Generate array maping the instance index to the items array index
let e=Array(t.length);for(let r=0;r<t.length;r++)e[r]=r;return this.__filterFn&&(e=e.filter((e,r,i)=>this.__filterFn(t[e],r,i))),this.__sortFn&&e.sort((e,r)=>this.__sortFn(t[e],t[r])),e}__calculateLimit(t){let e=t,r=this.__instances.length;// When chunking, we increase the limit from the currently rendered count
// by the chunk count that is re-calculated after each rAF (with special
// cases for resetting the limit to initialCount after changing items)
if(this.initialCount){let i;this.__chunkCount&&(!this.__itemsArrayChanged||this.reuseChunkedInstances)?(// The number of new instances that will be created is based on the
// existing instances, the new list size, and the chunk size
i=Math.min(Math.max(t-r,0),this.__chunkCount),// Update the limit based on how many new items we're making, limited
// buy the total size of the list
e=Math.min(r+i,t)):(// Subtract off any existing instances to determine the number of
// instances that will be created
i=Math.max(// Limit next render to the initial count
(e=Math.min(t,this.initialCount))-r,0),// Initialize the chunk size with how many items we're creating
this.__chunkCount=i||1),// Record some state about chunking for use in `__continueChunking`
this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio of
// target/actual frame time.  Only modify chunk size if our measurement
// reflects the cost of a creating a full chunk's worth of instances; this
// avoids scaling up the chunk size if we e.g. quickly re-rendered instances
// in place
if(this.__shouldMeasureChunk){let t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}// Enqueue a new render if we haven't reached the full size of the list
this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,r){let i;// items->inst map kept for item path forwarding
let n=this.__itemsIdxToInstIdx={};// Generate instances and assign items
for(i=0;i<e;i++){let e=this.__instances[i],s=r[i],o=t[s];n[s]=i,e?(e._setPendingProperty(this.as,o),e._setPendingProperty(this.indexAs,i),e._setPendingProperty(this.itemsIndexAs,s),e._flushProperties()):this.__insertInstance(o,i,s)}// Remove any extra instances from previous state
for(let t=this.__instances.length-1;t>=i;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t],r=od(e.root);for(let t=0;t<e.children.length;t++){let i=e.children[t];r.appendChild(i)}return e}__attachInstance(t,e){let r=this.__instances[t];// Note, this is pre-wrapped as an optimization
e.insertBefore(r.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,r){let i={};return i[this.as]=t,i[this.indexAs]=e,i[this.itemsIndexAs]=r,new this.__ctor(i)}__insertInstance(t,e,r){let i=this.__stampInstance(t,e,r),n=this.__instances[e+1],s=n?n.children[0]:this;return od(od(this).parentNode).insertBefore(i.root,s),this.__instances[e]=i,i}// Implements extension point from Templatize mixin
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
__handleItemPath(t,e){let r=t.slice(6),i=r.indexOf("."),n=i<0?r:r.substring(0,i);// 'items.'.length == 6
// If path was index into array...
if(n==parseInt(n,10)){let t=i<0?"":r.substring(i+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(t);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
let s=this.__itemsIdxToInstIdx[n],o=this.__instances[s];if(o){let r=this.as+(t?"."+t:"");// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
o._setPendingPropertyOrPath(r,e,!1,!0),o._flushProperties()}return!0}}/**
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
   */modelForElement(t){return function(t,e){let r;for(;e;)// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(r=e.__dataHost?e:e.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(r.__dataHost==t)return r;e=r.__dataHost}else // a __templatizeInstance is found
e=od(e).parentNode;return null}(this.template,t)}}customElements.define(lZ.is,lZ);/**
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
 */class lK extends lG{// Not needed to find template; can be removed once the analyzer
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
this.__renderDebouncer=am.debounce(this.__renderDebouncer,oI,()=>this.__render()),ag(this.__renderDebouncer)}/**
   * @override
   * @return {void}
   */disconnectedCallback(){super.disconnectedCallback();let t=od(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||od(t).host)||this.__teardownInstance()}/**
   * @override
   * @return {void}
   */connectedCallback(){super.connectedCallback(),lq()||(this.style.display="none"),this.if&&this.__debounceRender()}/**
   * Ensures a template has been assigned to `this.__template`.  If it has not
   * yet been, it querySelectors for it in its children and if it does not yet
   * exist (e.g. in parser-generated case), opens a mutation observer and
   * waits for it to appear (returns false if it has not yet been found,
   * otherwise true).  In the `removeNestedTemplates` case, the "template" will
   * be the `dom-if` element itself.
   *
   * @return {boolean} True when a template has been found, false otherwise
   */__ensureTemplate(){if(!this.__template){let t=/** @type {!HTMLTemplateElement} *//** @type {!HTMLElement} */this._templateInfo?this:od(this).querySelector("template");if(!t){// Wait until childList changes and template should be there by then
let t=new MutationObserver(()=>{if(od(this).querySelector("template"))t.disconnect(),this.__render();else throw Error("dom-if requires a <template> child")});return t.observe(this,{childList:!0}),!1}this.__template=t}return!0}/**
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
   */__ensureInstance(){let t=od(this).parentNode;if(this.__hasInstance()){// Move instance children if necessary
let e=this.__getInstanceNodes();if(e&&e.length&&od(this).previousSibling!==e[e.length-1])for(let r=0,i;r<e.length&&(i=e[r]);r++)od(t).insertBefore(i,this)}else{// Guard against element being detached while render was queued
if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}/**
   * Forces the element to render its content. Normally rendering is
   * asynchronous to a provoking change. This is done for efficiency so
   * that multiple changes trigger only a single render. The render method
   * should be called if, for example, template rendering is required to
   * validate application state.
   *
   * @return {void}
   */render(){lo()}/**
   * Performs the key rendering steps:
   * 1. Ensure a template instance has been stamped (when true)
   * 2. Remove the template instance (when false and restamp:true)
   * 3. Sync the hidden state of the instance nodes with the if/restamp state
   * 4. Fires the `dom-change` event when necessary
   *
   * @return {void}
   */__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!s8||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}// Ideally these would be annotated as abstract methods in an abstract class,
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
   */_showHideChildren(){}}const l0=s3?/**
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
 */class extends lK{constructor(){super(),this.__instance=null,this.__syncInfo=null}/**
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
   */__createAndInsertInstance(t){let e=this.__dataHost||this;if(sG&&!this.__dataHost)throw Error("strictTemplatePolicy: template owner not trusted");// Pre-bind and link the template into the effects system
let r=e._bindTemplate(/** @type {!HTMLTemplateElement} */this.__template,!0);// Install runEffects hook that prevents running property effects
// (and any nested template effects) when the `if` is false
r.runEffects=(t,e,r)=>{let i=this.__syncInfo;if(this.if)i&&(// If there were properties received while the `if` was false, it is
// important to sync the hidden state with the element _first_, so that
// new bindings to e.g. `textContent` do not get stomped on by
// pre-hidden values if `_showHideChildren` were to be called later at
// the next render. Clearing `__invalidProps` here ensures
// `_showHideChildren`'s call to `__syncHostProperties` no-ops, so
// that we don't call `runEffects` more often than necessary.
this.__syncInfo=null,this._showHideChildren(),e=Object.assign(i.changedProps,e)),t(e,r);else // runEffects method to sync them, so that we can replay them once `if`
// becomes true
if(this.__instance){if(i||(i=this.__syncInfo={runEffects:t,changedProps:{}}),r)// like [[obj.foo]] bindings run after a `set('obj.foo', v)`, but
// note that path notifications like `set('obj.foo.bar', v)` will
// not propagate. Since batched path notifications are not
// supported, we cannot simply accumulate path notifications. This
// is equivalent to the non-fastDomIf case, which stores root(p) in
// __invalidProps.
for(let t in e){let e=op(t);i.changedProps[e]=this.__dataHost[e]}else Object.assign(i.changedProps,e)}},// Stamp the template, and set its DocumentFragment to the "instance"
this.__instance=e._stampTemplate(/** @type {!HTMLTemplateElement} */this.__template,r),od(t).insertBefore(this.__instance,this)}/**
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
   */_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,lF(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:/**
 * The "legacy" implementation of `dom-if`, implemented using `Templatizer`.
 *
 * In this version, `this.__instance` is the `TemplateInstance` returned
 * from the templatized constructor.
 */class extends lK{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}/**
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
   */__createAndInsertInstance(t){this.__ctor||(this.__ctor=lU(/** @type {!HTMLTemplateElement} */this.__template,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:!0,/**
             * @param {string} prop Property to forward
             * @param {*} value Value of property
             * @this {DomIfLegacy}
             */forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[op(t)]=!0))}})),// Create and insert the instance
this.__instance=new this.__ctor,od(t).insertBefore(this.__instance.root,this)}/**
   * Implementation of abstract API needed by DomIfBase.
   *
   * Removes the instance and any nodes it created.
   *
   * @override
   * @return {void}
   */__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){// use first child parent, for case when dom-if may have been detached
let e=od(t[0]).parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(e){e=od(e);for(let r=0,i;r<t.length&&(i=t[r]);r++)e.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}/**
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
   */_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(l0.is,l0);/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {Polymer_ArraySelectorMixin}
 * @private
 */let l1=ot(t=>{/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @private
   */let e=af(t);return(/**
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
         */toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let r=e.path;if(r==JSCompiler_renameProperty("items",this)){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
let r=e.base||[],i=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),i){let t=li(r,i);this.__applySplices(t)}this.__lastItems=r,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)// deselect any removed items and adjust selected indices
this.__applySplices(e.value.indexSplices);else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
let t=r.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);0>t.indexOf(".")&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;// Adjust selected indices and mark removals
for(let r=0;r<t.length;r++){let i=t[r];e.forEach((t,r)=>{t<i.index||(t>=i.index+i.removed.length?e.set(r,t+i.addedCount-i.removed.length):e.set(r,-1))});for(let t=0;t<i.addedCount;t++){let r=i.index+t;e.has(this.items[r])&&e.set(this.items[r],r)}}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
let r=0;e.forEach((t,i)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null,e.delete(i)):r++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}/**
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
     */isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((r,i)=>{e==t++&&this.deselect(i)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}/**
     * Deselects the given item if it is already selected.
     *
     * @override
     * @param {*} item Item from `items` array to deselect
     * @return {void}
     */deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let r;this.__selectedMap.delete(t),this.multi&&(r=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null}}/**
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
     */selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}})})(lG);/**
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
 */class l2 extends l1{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"array-selector"}static get template(){return null}}customElements.define(l2.is,l2);const l5=new sF;window.ShadyCSS||(window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate(t,e,r){},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom(t,e){},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles(t,e,r){},/**
     * @param {Element} element
     * @param {Object=} properties
     */styleSubtree(t,e){l5.processStyles(),sy(t,e)},/**
     * @param {Element} element
     */// eslint-disable-next-line @typescript-eslint/no-unused-vars
styleElement(t){l5.processStyles()},/**
     * @param {Object=} properties
     */styleDocument(t){l5.processStyles(),sy(document.body,t)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:(t,e)=>sg(t,e),flushCustomStyles(){},nativeCss:n4,nativeShadow:n8,cssBuild:e,disableRuntime:n6}),window.ShadyCSS.CustomStyleInterface=l5;const l3="include",l8=window.ShadyCSS.CustomStyleInterface;class l9 extends HTMLElement{constructor(){super(),this._style=null,l8.addCustomStyle(this)}/**
   * Returns the light-DOM `<style>` child this element wraps.  Upon first
   * call any style modules referenced via the `include` attribute will be
   * concatenated to this element's `<style>`.
   *
   * @export
   * @return {HTMLStyleElement} This element's light-DOM `<style>`
   */getStyle(){if(this._style)return this._style;let t=/** @type {HTMLStyleElement} */this.querySelector("style");if(!t)return null;this._style=t;let e=t.getAttribute(l3);return e&&(t.removeAttribute(l3),/** @suppress {deprecated} */t.textContent=function(t){let e=t.trim().split(/\s+/),r="";for(let t=0;t<e.length;t++)r+=function(t){let e=oa(t);if(e&&void 0===e._cssText){// module imports: <link rel="import" type="css">
let t=/**
 * @deprecated
 * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
 * @return {string} Concatenated CSS content from links in the dom-module
 */function(t){let e="",r=ou(t);for(let t=0;t<r.length;t++)e+=r[t].textContent;return e}(e),r=/** @type {?HTMLTemplateElement} */e.querySelector("template");r&&(t+=function(t,e){let r="",i=oh(t,e);// if element is a template, get content from its .content
for(let t=0;t<i.length;t++){let e=i[t];e.parentNode&&e.parentNode.removeChild(e),r+=e.textContent}return r}(r,/** @type {templateWithAssetPath} */e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}(e[t]);return r}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",l9),lM._mutablePropertyChange,lC(HTMLElement).prototype,lO({_template:(function(t,...e){lW(t,e);let r=/** @type {!HTMLTemplateElement} */document.createElement("template"),i=e.reduce((e,r,i)=>e+/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */function(t){if(t instanceof HTMLTemplateElement)// contains untrusted content that was believed to be sanitized.
    // However we can't just use the XMLSerializer here because it misencodes
    // `>` characters inside style tags.
    // For an example of an actual case that hit this encoding issue,
    // see b/198592167
    return /** @type {!HTMLTemplateElement } */t.innerHTML;if(t instanceof lX)return lJ(t);throw Error(`non-template value passed to Polymer's html function: ${t}`)}(r)+t[i+1],t[0]);return lV&&(i=lV.createHTML(i)),r.innerHTML=i,r})`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{/**
     * The URL of an image.
     */src:{type:String,value:""},/**
     * A short text alternative for the image.
     */alt:{type:String,value:null},/**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */crossorigin:{type:String,value:null},/**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */preventLoad:{type:Boolean,value:!1},/**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */sizing:{type:String,value:null,reflectToAttribute:!0},/**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */position:{type:String,value:"center"},/**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */preload:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholder:{type:String,value:null,observer:"_placeholderChanged"},/**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */fade:{type:Boolean,value:!1},/**
     * Read-only value that is true when the image is loaded.
     */loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that indicates that the last set `src` failed to load.
     */error:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */width:{observer:"_widthChanged",type:Number,value:null},/**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(t,e){var r=this._resolveSrc(t);r!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===t||e?this._setLoading(!1):(this._resolvedSrc=r,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0)),this._setLoaded(!1),this._setError(!1))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var t=this.$.sizedImgDiv.style,e=this.$.placeholder.style;t.backgroundSize=e.backgroundSize=this.sizing,t.backgroundPosition=e.backgroundPosition=this.sizing?this.position:"",t.backgroundRepeat=e.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(t){var e=sU(t,this.$.baseURIAnchor.href);return e.length>=2&&"/"===e[0]&&"/"!==e[1]&&// https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
(e=(location.origin||location.protocol+"//"+location.host)+e),e}});let l6=0;function l4(){s=null,l6=0}const l7=Symbol("haunted.phase"),ht=Symbol("haunted.hook"),he=Symbol("haunted.update"),hr=Symbol("haunted.commit"),hi=Symbol("haunted.effects"),hn=Symbol("haunted.layoutEffects"),hs="haunted.context";class ho{update;host;virtual;[ht];[hi];[hn];constructor(t,e){this.update=t,this.host=e,this[ht]=new Map,this[hi]=[],this[hn]=[]}run(t){s=this;let e=t();return l4(),e}_runEffects(t){let e=this[t];for(let t of(s=this,e))t.call(this);l4()}runEffects(){this._runEffects(hi)}runLayoutEffects(){this._runEffects(hn)}teardown(){this[ht].forEach(t=>{"function"==typeof t.teardown&&t.teardown()})}}const ha=Promise.resolve().then.bind(Promise.resolve());function hl(){let t,e=[];function r(){t=null;let r=e;e=[];for(var i=0,n=r.length;i<n;i++)r[i]()}return function(i){e.push(i),null==t&&(t=ha(r))}}const hh=hl(),hu=hl();class hd{renderer;host;state;[l7];_updateQueued;constructor(t,e){this.renderer=t,this.host=e,this.state=new ho(this.update.bind(this),e),this[l7]=null,this._updateQueued=!1}update(){this._updateQueued||(hh(()=>{let t=this.handlePhase(he);hu(()=>{this.handlePhase(hr,t),hu(()=>{this.handlePhase(hi)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,e){switch(this[l7]=t,t){case hr:this.commit(e),this.runEffects(hn);return;case he:return this.render();case hi:return this.runEffects(hi)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}const hc=(t="")=>t.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");class hp{id;state;constructor(t,e){this.id=t,this.state=e}}function h_(t,...e){let r=l6++,i=s[ht],n=i.get(r);return n||(n=new t(r,s,...e),i.set(r,n)),n.update(...e)}function hf(t){return h_.bind(null,t)}function hm(t){return hf(class extends hp{callback;lastValues;values;_teardown;constructor(e,r,i,n){super(e,r),t(r,this)}update(t,e){this.callback=t,this.values=e}call(){(!this.values||this.hasChanged())&&this.run(),this.lastValues=this.values}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function hy(t,e){t[hi].push(e)}/**
 * @function
 * @param {() => void} effect - callback function that runs each time dependencies change
 * @param {unknown[]} [dependencies] - list of dependencies to the effect
 * @return {void}
 */const hg=hm(hy),hv=hf(class extends hp{Context;value;_ranEffect;_unsubscribe;constructor(t,e,r){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,hy(e,this)}update(t){if(this.state.virtual)throw Error("can't be used with virtual components");return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){let e={Context:t,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent(hs,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:r=null,value:i}=e;this.value=r?i:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}}),hb=hf(class extends hp{value;values;constructor(t,e,r,i){super(t,e),this.value=r(),this.values=i}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((t,e)=>this.values[e]!==t)}}),hw=(t,e)=>hb(()=>t,e);hm(/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function(t,e){t[hn].push(e)});/**
 * @function
 * @template {*} T
 * @param {T} [initialState] - Optional initial state
 * @return {readonly [state: T, updaterFn: StateUpdater<T>]} stateTuple - Tuple of current state and state updater function
 */const hC=hf(class extends hp{args;constructor(t,e,r){super(t,e),this.updater=this.updater.bind(this),"function"==typeof r&&(r=r()),this.makeArgs(r)}update(){return this.args}updater(t){if("function"==typeof t){let e=t,[r]=this.args;t=e(r)}this.makeArgs(t),this.state.update()}makeArgs(t){this.args=Object.freeze([t,this.updater])}});Promise.resolve(),hf(class extends hp{reducer;currentState;constructor(t,e,r,i,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==n?n(i):i}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});/**
 * @function
 * @template T
 * @param   {T} initialValue
 * @return  {{ current: T }} Ref
 */const hP=t=>hb(()=>({current:t}),[]),{component:hS,createContext:hA}=(Array.prototype.includes,new WeakMap,new WeakMap,function({render:t}){let e=function(t){class e extends hd{frag;constructor(t,e,r){super(t,r||e),this.frag=e}commit(e){t(e,this.frag)}}return function(t,r,i){let n=(i||r||{}).baseElement||HTMLElement,{observedAttributes:s=[],useShadowDOM:o=!0,shadowRootInit:a={}}=i||r||{};class l extends n{_scheduler;static get observedAttributes(){return t.observedAttributes||s||[]}constructor(){super(),!1===o?this._scheduler=new e(t,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new e(t,this.shadowRoot,this))}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(t,e,r){if(e===r)return;let i=""===r||r;Reflect.set(this,hc(t),i)}}let h=new Proxy(n.prototype,{getPrototypeOf:t=>t,set(t,e,r,i){let n;if(e in t)return(n=Object.getOwnPropertyDescriptor(t,e))&&n.set?n.set.call(i,r):Reflect.set(t,e,r,i),!0;if("symbol"==typeof e||"_"===e[0])n={enumerable:!0,configurable:!0,writable:!0,value:r};else{let t,e;t=r,e=!1,n=Object.freeze({enumerable:!0,configurable:!0,get:()=>t,set(r){// Avoid scheduling update when prop value hasn't changed
(!e||t!==r)&&(e=!0,t=r,this._scheduler&&this._scheduler.update())}})}return Object.defineProperty(i,e,n),n.set&&n.set.call(i,r),!0}});return Object.setPrototypeOf(l.prototype,h),l}}(t);return{component:e,createContext:t=>{let r={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.listeners=new Set,this.addEventListener(hs,this)}disconnectedCallback(){this.removeEventListener(hs,this)}handleEvent(t){let{detail:e}=t;e.Context===r&&(e.value=this.value,e.unsubscribe=this.unsubscribe.bind(this,e.callback),this.listeners.add(e.callback),t.stopPropagation())}unsubscribe(t){this.listeners.delete(t)}set value(t){for(let e of(this._value=t,this.listeners))e(t)}get value(){return this._value}},Consumer:e(function({render:t}){let e=hv(r);return t(e)}),defaultValue:t};return r}}}({render:tm}));var hx=p("flzy3");/**
 * Subscribe to a replicant, returns tuple of the replicant value and `setValue` function.
 * The component using this function gets re-rendered when the value is updated.
 * The `setValue` function can be used to update replicant value.
 * @param replicantName The name of the replicant to use
 * @param initialValue Initial value to pass to `useState` function
 * @param options Options object.  Currently supports the optional `namespace` option
 */const hT=(t,e,r)=>{let[i,n]=hC(e),s=r&&{defaultValue:r.defaultValue,persistent:r.persistent,schemaPath:r.schemaPath},o=r&&r.namespace?nodecg.Replicant(t,r.namespace,s):nodecg.Replicant(t,s),a=t=>{n(e=>t!==e?t:(hx&&hx.__esModule?hx.default:hx)(t))};return hg(()=>(o.on("change",a),()=>{o.removeListener("change",a)}),[o]),[i,t=>{o.value=t}]},hE=t=>{let e=window.getComputedStyle(t),r=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return t.clientWidth-r};var hO={};hO=new URL(p("MvNHK").resolve("c0VRY"),import.meta.url).toString();const hN=hS(()=>{let[t]=hT("nowPlaying",{artUrl:"",title:"",artist:"",album:""}),{title:e,artist:r,album:i,artUrl:n}=t,[s]=hT("nowPlayingShowing",!1),o=hP(nq.timeline()),a=hP(n1()),l=hP(n1()),h=hP(n1());hg(()=>{let t=a.current.value.querySelector(".title"),e=t.scrollWidth,r=hE(a.current.value);e>r?nq.set(t,{scaleX:r/e}):nq.set(t,{scaleX:1})},[e]),hg(()=>{let t=a.current.value.querySelector(".artist"),e=t.scrollWidth,r=hE(a.current.value);e>r?nq.set(t,{scaleX:r/e}):nq.set(t,{scaleX:1})},[r]),hg(()=>{let t=a.current.value.querySelector(".album"),e=t.scrollWidth,r=hE(a.current.value);e>r?nq.set(t,{scaleX:r/e}):nq.set(t,{scaleX:1})},[i]);let u=hw(()=>{// Prevent first "call" from getting ignored
o.current.to({},.01,{}),o.current.to(h.current.value,{duration:.5,height:"100%",ease:"Power1.easeInOut"}),o.current.add("stuffIn"),o.current.to(l.current.value,{duration:.4,x:"0%",ease:"Power1.easeOut"},"stuffIn"),o.current.to(a.current.value,{duration:.7,x:"0%",ease:"Power1.easeOut"},"stuffIn")},[]),d=hw(()=>{o.current.add("stuffOut"),o.current.to(l.current.value,{duration:.4,x:"100%",ease:"Power1.easeIn"},"stuffOut+=0.3"),o.current.to(a.current.value,{duration:.7,x:"-100%",ease:"Power1.easeIn"},"stuffOut"),o.current.to(h.current.value,{duration:.5,height:"0%",ease:"Power1.easeInOut"})},[]);return hg(()=>{s?u():d()},[s,u,d]),Z`
    <style>
      :host {
        display: flex;
        position: absolute;
        bottom: 88px;
        left: 88px;
      }

      .fullHeight {
        height: 120px;
      }

      .cull {
        overflow: hidden;
      }

      .centerFlex {
        display: flex;
        align-items: center;
      }

      .background {
        background-color: rgba(0, 0, 0, 0.75);
      }

      .art {
        width: 120px;
        background-position: center;
        background-size: contain;
        background-color: #D3C9C9;
        transform: translateX(100%);
      }

      .line {
        width: 3px;
        height: 0;
        background-color: #ac09ff;
      }

      .details {
        display: flex;
        flex-direction: column;
        padding: 1.2em 2em 1em 1em;
        color: #E4E4E4;
        white-space: nowrap;
        max-width: 500px;
        box-sizing: border-box;
        transform: translateX(-100%);
      }

      .title {
        font-size: 30px;
        line-height: 34px;
        transform-origin: left;
        font-weight: 600;
        margin: 0 0 0.25em 0;
      }

      .artist {
        font-size: 20px;
        line-height: 22px;
        transform-origin: left;
        margin: 0 0 0.25em 0;
      }

      .album {
        font-size: 18px;
        line-height: 22px;
        transform-origin: left;
        margin: 0;
      }
    </style>

    <div class="cull fullHeight">
      <iron-image
        class="art fullHeight"
        sizing="contain"
        src="${n}"
        placeholder="${new URL(hO)}"
        preload
        fade
        ${n3(l.current)}
      >
      </iron-image>
    </div>
    <div class="cull fullHeight centerFlex">
      <div class="line" ${n3(h.current)}></div>
    </div>
    <div class="cull">
      <div class="details background fullHeight" ${n3(a.current)}>
        <div>
          <p class="title">&#9834; ${e}</p>
          <p class="artist">${r}</p>
          <p class="album">${i}</p>
        </div>
      </div>
    </div>
  `});customElements.define("element-nowplaying",hN);//# sourceMappingURL=index.92e11468.js.map

//# sourceMappingURL=index.92e11468.js.map
