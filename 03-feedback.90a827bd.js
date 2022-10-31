!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},o=function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),g=Object.prototype.toString,y=Math.max,p=Math.min,b=function(){return m.Date.now()};function h(e,t,n){var r,o,i,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function g(e){return c=e,f=setTimeout(S,t),s?m(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function S(){var e=b();if(h(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?p(n,i-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?m(e):(r=o=void 0,a)}function w(){var e=b(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return g(l);if(d)return f=setTimeout(S,t),m(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=O(t)||0,j(n)&&(s=!!n.leading,i=(d="maxWait"in n)?y(O(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?a:T(b())},w}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=l.test(t);return r||c.test(t)?s(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(u);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),h(e,t,{leading:r,maxWait:t,trailing:o})};var S="feedback-form-state",T=document.querySelector(".feedback-form"),w={};T.addEventListener("submit",(function(e){e.preventDefault(),T[0].value&&T[1].value?(console.log(w),e.currentTarget.reset(),o(S)):alert("All fields must be filled!")})),T.addEventListener("input",e(t)((function(){w={email:T[0].value,message:T[1].value},r(S,w)}),500)),(w=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(S))&&(T[0].value=w.email,T[1].value=w.message)}();
//# sourceMappingURL=03-feedback.90a827bd.js.map