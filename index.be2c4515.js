var t;function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function e(t){var r=t.split(""),e=[],n="";return r.forEach(function(t){t===t.toUpperCase()&&(e.push(n),n=""),n?n+=t:n+=t.toUpperCase()}),e.push(n),e.join(" ")}((function(t){if(Array.isArray(t))return r(t)})(t=document.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(t){var r=t.id,n=t.name,o=document.createElement("label");t.parentElement.appendChild(o),o.classList.add("field-label"),o.textContent=e(n),o.setAttribute("for","".concat(r)),t.setAttribute("placeholder","".concat(e(n)))});
//# sourceMappingURL=index.be2c4515.js.map