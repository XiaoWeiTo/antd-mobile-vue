(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d5a6a33"],{"11e9":function(t,e,n){var a=n("52a7"),r=n("4630"),o=n("6821"),i=n("6a99"),c=n("69a8"),s=n("c69a"),d=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?d:function(t,e){if(t=o(t),e=i(e,!0),s)try{return d(t,e)}catch(n){}if(c(t,e))return r(!a.f.call(t,e),t[e])}},2638:function(t,e,n){"use strict";function a(){return a=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},a.apply(this,arguments)}var r=["attrs","props","domProps"],o=["class","style","directives"],i=["on","nativeOn"],c=function(t){return t.reduce(function(t,e){for(var n in e)if(t[n])if(-1!==r.indexOf(n))t[n]=a({},t[n],e[n]);else if(-1!==o.indexOf(n)){var c=t[n]instanceof Array?t[n]:[t[n]],d=e[n]instanceof Array?e[n]:[e[n]];t[n]=c.concat(d)}else if(-1!==i.indexOf(n))for(var l in e[n])if(t[n][l]){var u=t[n][l]instanceof Array?t[n][l]:[t[n][l]],f=e[n][l]instanceof Array?e[n][l]:[e[n][l]];t[n][l]=u.concat(f)}else t[n][l]=e[n][l];else if("hook"==n)for(var p in e[n])t[n][p]=t[n][p]?s(t[n][p],e[n][p]):e[n][p];else t[n]=e[n];else t[n]=e[n];return t},{})},s=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=c},"5dbc":function(t,e,n){var a=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var o,i=e.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&a(o)&&r&&r(t,o),t}},"63de":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],o=n("d225"),i=n("b0b4"),c=n("308d"),s=n("6bb5"),d=n("4e2b"),l=n("9ab4"),u=n("8bbf"),f=n.n(u),p=n("65d9"),b=n.n(p),h=n("e85d"),v=n("acf4"),y=n.n(v),m=n("a040"),O=n.n(m);f.a.use(h["a"]);var g=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.title=y.a,t.props=O.a,t}return Object(d["a"])(e,t),Object(i["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(f.a);g=l["b"]([b()({name:"ComponentDemo"})],g);var j=g,k=j,C=(n("9ee9"),n("2877")),_=Object(C["a"])(k,a,r,!1,null,"6420d6b9",null);e["default"]=_.exports},"8b97":function(t,e,n){var a=n("d3f4"),r=n("cb7c"),o=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},"9ee9":function(t,e,n){"use strict";var a=n("e3d5"),r=n.n(a);r.a},a040:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>checked</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>color</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>name</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>platform</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n</tbody></table>\n"},aa77:function(t,e,n){var a=n("5ca1"),r=n("be13"),o=n("79e5"),i=n("fdef"),c="["+i+"]",s="​",d=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),u=function(t,e,n){var r={},c=o(function(){return!!i[t]()||s[t]()!=s}),d=r[t]=c?e(f):i[t];n&&(r[n]=d),a(a.P+a.F*c,"String",r)},f=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},acf4:function(t,e){t.exports='<h1 id="开关--m-switch">开关  m-switch</h1>\n'},b084:function(t,e,n){},c5f6:function(t,e,n){"use strict";var a=n("7726"),r=n("69a8"),o=n("2d95"),i=n("5dbc"),c=n("6a99"),s=n("79e5"),d=n("9093").f,l=n("11e9").f,u=n("86cc").f,f=n("aa77").trim,p="Number",b=a[p],h=b,v=b.prototype,y=o(n("2aeb")(v))==p,m="trim"in String.prototype,O=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():f(e,3);var n,a,r,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var i,s=e.slice(2),d=0,l=s.length;d<l;d++)if(i=s.charCodeAt(d),i<48||i>r)return NaN;return parseInt(s,a)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof b&&(y?s(function(){v.valueOf.call(n)}):o(n)!=p)?i(new h(O(e)),n,b):O(e)};for(var g,j=n("9e1e")?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;j.length>k;k++)r(h,g=j[k])&&!r(b,g)&&u(b,g,l(h,g));b.prototype=v,v.constructor=b,n("2aba")(a,p,b)}},e3d5:function(t,e,n){},e85d:function(t,e,n){"use strict";var a=n("2638"),r=n.n(a),o=n("a4bb"),i=n.n(o),c=n("bd86"),s=(n("7f7f"),n("d225")),d=n("b0b4"),l=n("308d"),u=n("6bb5"),f=n("4e2b"),p=n("9ab4"),b=n("4d26"),h=n.n(b),v=n("8bbf"),y=n.n(v),m=n("65d9"),O=n.n(m),g=n("60a3"),j=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.stateValue=t.value,t}return Object(f["a"])(e,t),Object(d["a"])(e,[{key:"valueChanged",value:function(t){this.stateValue=t}},{key:"stateValueChanged",value:function(t){this.$emit("input",t),this.$emit("change",t)}},{key:"onChange",value:function(t){this.stateValue=t.target.checked}},{key:"onClick",value:function(t){var e;e=t&&t.target&&void 0!==t.target.checked?t.target.checked:this.value,this.stateValue=e}},{key:"render",value:function(){var t=arguments[0],e=this,n=e.prefixCls,a=e.name,o=e.disabled,s=e.platform,d=e.color,l=p["c"](e,["prefixCls","name","disabled","platform","color"]),u=h()(n,Object(c["a"])({},"".concat(n,"-android"),"android"===s)),f=h()("checkbox",Object(c["a"])({},"checkbox-disabled",o)),b=i()(l).reduce(function(t,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(t[e]=l[e]),t},{}),v={};return d&&this.stateValue&&(v.backgroundColor=d),t("label",{class:u},[t("input",r()([{attrs:{type:"checkbox",name:a,disabled:o},class:"".concat(n,"-checkbox"),domProps:{checked:this.stateValue,value:this.stateValue?"on":"off"},on:{change:this.onChange}},o?{}:{onClick:this.onClick.bind(this)},{},b])),t("div",r()([{class:f,style:v},o?{onClick:this.onClick.bind(this)}:{}]))])}}]),e}(y.a);p["b"]([Object(g["d"])({type:Boolean,default:!1})],j.prototype,"disabled",void 0),p["b"]([Object(g["d"])({type:String})],j.prototype,"color",void 0),p["b"]([Object(g["d"])({type:String})],j.prototype,"name",void 0),p["b"]([Object(g["d"])({type:String,default:"am-switch"})],j.prototype,"prefixCls",void 0),p["b"]([Object(g["d"])({type:String,default:"ios"})],j.prototype,"platform",void 0),p["b"]([Object(g["d"])({type:Boolean})],j.prototype,"value",void 0),p["b"]([Object(g["g"])("value")],j.prototype,"valueChanged",null),p["b"]([Object(g["g"])("stateValue")],j.prototype,"stateValueChanged",null),j=p["b"]([O()({name:"MSwitch"})],j);var k=j,C=n("5176"),_=n.n(C),x=(n("ac6a"),n("6cf1")),w=x["a"].Item,I=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.state={value:t.value},t}return Object(f["a"])(e,t),Object(d["a"])(e,[{key:"valueChanged",value:function(t){this.state.value=t}},{key:"stateValueChanged",value:function(t,e){this.$emit("input",t),t!==e&&this.$emit("change",t)}},{key:"onClick",value:function(t){this.disabled||this.$emit("click")}},{key:"render",value:function(){var t=this,e=arguments[0],n=this.$props,a=n.listPrefixCls,o=n.disabled,i=n.switchProps,s=p["c"](n,["listPrefixCls","disabled","switchProps"]),d=s.prefixCls,l=h()("".concat(d,"-item"),Object(c["a"])({},"".concat(d,"-item-disabled"),!0===o)),u={};["name","disabled"].forEach(function(e){e in t.$props&&(u[e]=t.$props[e])});var f=e(k,r()([{},{attrs:_()({},i,u,this.$attrs)},{on:{click:this.onClick},model:{value:t.state.value,callback:function(e){t.state.value=e}}}]));return e(w,r()([{},{attrs:_()({},s)},{attrs:{prefixCls:a,extra:f},class:l}]),[this.$slots.default])}}]),e}(y.a);p["b"]([Object(g["d"])({default:"am-switch"})],I.prototype,"prefixCls",void 0),p["b"]([Object(g["d"])({default:"am-list"})],I.prototype,"listPrefixCls",void 0),p["b"]([Object(g["d"])({default:function(){return{}}})],I.prototype,"switchProps",void 0),p["b"]([Object(g["d"])({type:Boolean,default:!1})],I.prototype,"disabled",void 0),p["b"]([Object(g["d"])({type:Boolean,default:!1})],I.prototype,"value",void 0),p["b"]([Object(g["d"])({type:String})],I.prototype,"title",void 0),p["b"]([Object(g["g"])("value")],I.prototype,"valueChanged",null),p["b"]([Object(g["g"])("state.value")],I.prototype,"stateValueChanged",null),I=p["b"]([O()({name:"SwitchItem"})],I);var E=I,N=(n("658b"),n("b084"),k);N.install=function(t){t.component("MSwitch",k),t.component("MSwitchItem",E)};e["a"]=N},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-3d5a6a33.27d5516c.js.map