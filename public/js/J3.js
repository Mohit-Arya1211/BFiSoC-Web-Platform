/**
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */
! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
	"use strict";

	function e(e, t) {
		var a = [],
			i = 0;
		if (e && !t && e instanceof r) return e;
		if (e)
			if ("string" == typeof e) {
				var s, n, o = e.trim();
				if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
					var l = "div";
					for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = o, i = 0; i < n.childNodes.length; i += 1) a.push(n.childNodes[i])
				} else
					for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
			} else if (e.nodeType || e === window || e === document) a.push(e);
		else if (e.length > 0 && e[0].nodeType)
			for (i = 0; i < e.length; i += 1) a.push(e[i]);
		return new r(a)
	}

	function t(e) {
		for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
		return t
	}

	function a() {
		var e = "onwheel" in d;
		if (!e) {
			var t = d.createElement("div");
			t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
		}
		return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e
	}
	var i, s = i = "undefined" == typeof window ? {
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			getComputedStyle: function () {
				return {}
			},
			Image: function () {},
			Date: function () {},
			screen: {}
		} : window,
		r = function (e) {
			for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
			return t.length = e.length, this
		};
	e.fn = r.prototype, e.Class = r, e.Dom7 = r;
	"resize scroll".split(" ");
	var n = {
		addClass: function (e) {
			var t = this;
			if (void 0 === e) return this;
			for (var a = e.split(" "), i = 0; i < a.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.add(a[i]);
			return this
		},
		removeClass: function (e) {
			for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.remove(a[i]);
			return this
		},
		hasClass: function (e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function (e) {
			for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
				for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
			return this
		},
		attr: function (e, t) {
			var a = arguments,
				i = this;
			if (1 !== arguments.length || "string" != typeof e) {
				for (var s = 0; s < this.length; s += 1)
					if (2 === a.length) i[s].setAttribute(e, t);
					else
						for (var r in e) i[s][r] = e[r], i[s].setAttribute(r, e[r]);
				return this
			}
			if (this[0]) return this[0].getAttribute(e)
		},
		removeAttr: function (e) {
			for (var t = this, a = 0; a < this.length; a += 1) t[a].removeAttribute(e);
			return this
		},
		data: function (e, t) {
			var a, i = this;
			if (void 0 !== t) {
				for (var s = 0; s < this.length; s += 1)(a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
				return this
			}
			if (a = this[0]) {
				if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
				var r = a.getAttribute("data-" + e);
				if (r) return r
			}
		},
		transform: function (e) {
			for (var t = this, a = 0; a < this.length; a += 1) {
				var i = t[a].style;
				i.webkitTransform = e, i.transform = e
			}
			return this
		},
		transition: function (e) {
			var t = this;
			"string" != typeof e && (e += "ms");
			for (var a = 0; a < this.length; a += 1) {
				var i = t[a].style;
				i.webkitTransitionDuration = e, i.transitionDuration = e
			}
			return this
		},
		on: function () {
			function t(t) {
				var a = t.target;
				if (a) {
					var i = t.target.dom7EventData || [];
					if (i.unshift(t), e(a).is(o)) l.apply(a, i);
					else
						for (var s = e(a).parents(), r = 0; r < s.length; r += 1) e(s[r]).is(o) && l.apply(s[r], i)
				}
			}

			function a(e) {
				var t = e && e.target ? e.target.dom7EventData || [] : [];
				t.unshift(e), l.apply(this, t)
			}
			for (var i = this, s = [], r = arguments.length; r--;) s[r] = arguments[r];
			var n = s[0],
				o = s[1],
				l = s[2],
				d = s[3];
			if ("function" == typeof s[1]) {
				var p;
				n = (p = s)[0], l = p[1], d = p[2], o = void 0
			}
			d || (d = !1);
			for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
				var v = i[h];
				if (o)
					for (c = 0; c < u.length; c += 1) v.dom7LiveListeners || (v.dom7LiveListeners = []), v.dom7LiveListeners.push({
						type: n,
						listener: l,
						proxyListener: t
					}), v.addEventListener(u[c], t, d);
				else
					for (c = 0; c < u.length; c += 1) v.dom7Listeners || (v.dom7Listeners = []), v.dom7Listeners.push({
						type: n,
						listener: l,
						proxyListener: a
					}), v.addEventListener(u[c], a, d)
			}
			return this
		},
		off: function () {
			for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i = t[0],
				s = t[1],
				r = t[2],
				n = t[3];
			if ("function" == typeof t[1]) {
				var o;
				i = (o = t)[0], r = o[1], n = o[2], s = void 0
			}
			n || (n = !1);
			for (var l = i.split(" "), d = 0; d < l.length; d += 1)
				for (var p = 0; p < this.length; p += 1) {
					var c = e[p];
					if (s) {
						if (c.dom7LiveListeners)
							for (var u = 0; u < c.dom7LiveListeners.length; u += 1) r ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n) : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n)
					} else if (c.dom7Listeners)
						for (var h = 0; h < c.dom7Listeners.length; h += 1) r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n)
				}
			return this
		},
		trigger: function () {
			for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
				for (var n = 0; n < this.length; n += 1) {
					var o = void 0;
					try {
						o = new window.CustomEvent(i[r], {
							detail: s,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(o = document.createEvent("Event")).initEvent(i[r], !0, !0), o.detail = s
					}
					e[n].dom7EventData = t.filter(function (e, t) {
						return t > 0
					}), e[n].dispatchEvent(o), e[n].dom7EventData = [], delete e[n].dom7EventData
				}
			return this
		},
		transitionEnd: function (e) {
			function t(r) {
				if (r.target === this)
					for (e.call(this, r), a = 0; a < i.length; a += 1) s.off(i[a], t)
			}
			var a, i = ["webkitTransitionEnd", "transitionend"],
				s = this;
			if (e)
				for (a = 0; a < i.length; a += 1) s.on(i[a], t);
			return this
		},
		outerWidth: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function () {
			if (this.length > 0) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					a = document.body,
					i = e.clientTop || a.clientTop || 0,
					s = e.clientLeft || a.clientLeft || 0,
					r = e === window ? window.scrollY : e.scrollTop,
					n = e === window ? window.scrollX : e.scrollLeft;
				return {
					top: t.top + r - i,
					left: t.left + n - s
				}
			}
			return null
		},
		css: function (e, t) {
			var a, i = this;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (var s in e) i[a].style[s] = e[s];
					return this
				}
				if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) i[a].style[e] = t;
				return this
			}
			return this
		},
		each: function (e) {
			var t = this;
			if (!e) return this;
			for (var a = 0; a < this.length; a += 1)
				if (!1 === e.call(t[a], a, t[a])) return t;
			return this
		},
		html: function (e) {
			var t = this;
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var a = 0; a < this.length; a += 1) t[a].innerHTML = e;
			return this
		},
		text: function (e) {
			var t = this;
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var a = 0; a < this.length; a += 1) t[a].textContent = e;
			return this
		},
		is: function (t) {
			var a, i, s = this[0];
			if (!s || void 0 === t) return !1;
			if ("string" == typeof t) {
				if (s.matches) return s.matches(t);
				if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
				if (s.msMatchesSelector) return s.msMatchesSelector(t);
				for (a = e(t), i = 0; i < a.length; i += 1)
					if (a[i] === s) return !0;
				return !1
			}
			if (t === document) return s === document;
			if (t === window) return s === window;
			if (t.nodeType || t instanceof r) {
				for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1)
					if (a[i] === s) return !0;
				return !1
			}
			return !1
		},
		index: function () {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			var t, a = this.length;
			return e > a - 1 ? new r([]) : e < 0 ? (t = a + e, new r(t < 0 ? [] : [this[t]])) : new r([this[e]])
		},
		append: function () {
			for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
			for (var i, s = 0; s < t.length; s += 1) {
				i = t[s];
				for (var n = 0; n < this.length; n += 1)
					if ("string" == typeof i) {
						var o = document.createElement("div");
						for (o.innerHTML = i; o.firstChild;) e[n].appendChild(o.firstChild)
					} else if (i instanceof r)
					for (var l = 0; l < i.length; l += 1) e[n].appendChild(i[l]);
				else e[n].appendChild(i)
			}
			return this
		},
		prepend: function (e) {
			var t, a, i = this;
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var s = document.createElement("div");
					for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
				} else if (e instanceof r)
				for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
			else i[t].insertBefore(e, i[t].childNodes[0]);
			return this
		},
		next: function (t) {
			return new r(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
		},
		nextAll: function (t) {
			var a = [],
				i = this[0];
			if (!i) return new r([]);
			for (; i.nextElementSibling;) {
				var s = i.nextElementSibling;
				t ? e(s).is(t) && a.push(s) : a.push(s), i = s
			}
			return new r(a)
		},
		prev: function (t) {
			if (this.length > 0) {
				var a = this[0];
				return new r(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : [])
			}
			return new r([])
		},
		prevAll: function (t) {
			var a = [],
				i = this[0];
			if (!i) return new r([]);
			for (; i.previousElementSibling;) {
				var s = i.previousElementSibling;
				t ? e(s).is(t) && a.push(s) : a.push(s), i = s
			}
			return new r(a)
		},
		parent: function (a) {
			for (var i = this, s = [], r = 0; r < this.length; r += 1) null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
			return e(t(s))
		},
		parents: function (a) {
			for (var i = this, s = [], r = 0; r < this.length; r += 1)
				for (var n = i[r].parentNode; n;) a ? e(n).is(a) && s.push(n) : s.push(n), n = n.parentNode;
			return e(t(s))
		},
		closest: function (e) {
			var t = this;
			return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function (e) {
			for (var t = this, a = [], i = 0; i < this.length; i += 1)
				for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1) a.push(s[n]);
			return new r(a)
		},
		children: function (a) {
			for (var i = this, s = [], n = 0; n < this.length; n += 1)
				for (var o = i[n].childNodes, l = 0; l < o.length; l += 1) a ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l]) : 1 === o[l].nodeType && s.push(o[l]);
			return new r(t(s))
		},
		remove: function () {
			for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
			return this
		},
		add: function () {
			for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
			var i, s, r = this;
			for (i = 0; i < t.length; i += 1) {
				var n = e(t[i]);
				for (s = 0; s < n.length; s += 1) r[r.length] = n[s], r.length += 1
			}
			return r
		},
		styles: function () {
			return this[0] ? window.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(n).forEach(function (t) {
		e.fn[t] = n[t]
	});
	var o, l = {
			deleteProps: function (e) {
				var t = e;
				Object.keys(t).forEach(function (e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				})
			},
			nextTick: function (e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function () {
				return Date.now()
			},
			getTranslate: function (e, t) {
				void 0 === t && (t = "x");
				var a, i, r, n = s.getComputedStyle(e, null);
				return s.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
					return e.replace(",", ".")
				}).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : a = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
			},
			parseUrlQuery: function (e) {
				var t, a, i, r, n = {},
					o = e || s.location.href;
				if ("string" == typeof o && o.length)
					for (r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
							return "" !== e
						})).length, t = 0; t < r; t += 1) i = a[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
				return n
			},
			isObject: function (e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function () {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
					var s = e[i];
					if (void 0 !== s && null !== s)
						for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
							var d = r[n],
								p = Object.getOwnPropertyDescriptor(s, d);
							void 0 !== p && p.enumerable && (l.isObject(a[d]) && l.isObject(s[d]) ? l.extend(a[d], s[d]) : !l.isObject(a[d]) && l.isObject(s[d]) ? (a[d] = {}, l.extend(a[d], s[d])) : a[d] = s[d])
						}
				}
				return a
			}
		},
		d = o = "undefined" == typeof document ? {
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: {
				blur: function () {},
				nodeName: ""
			},
			querySelector: function () {
				return {}
			},
			querySelectorAll: function () {
				return []
			},
			createElement: function () {
				return {
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		p = {
			touch: s.Modernizr && !0 === s.Modernizr.touch || !!("ontouchstart" in s || s.DocumentTouch && d instanceof s.DocumentTouch),
			transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || function () {
				var e = d.createElement("div").style;
				return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
			}(),
			flexbox: function () {
				for (var e = d.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
					if (t[a] in e) return !0;
				return !1
			}(),
			observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
			passiveListener: function () {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function () {
							e = !0
						}
					});
					s.addEventListener("testPassiveListener", null, t)
				} catch (e) {}
				return e
			}(),
			gestures: "ongesturestart" in s
		},
		c = function (e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
				t.on(e, t.params.on[e])
			})
		},
		u = {
			components: {}
		};
	c.prototype.on = function (e, t) {
		var a = this;
		return "function" != typeof t ? a : (e.split(" ").forEach(function (e) {
			a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t)
		}), a)
	}, c.prototype.once = function (e, t) {
		function a() {
			for (var s = [], r = arguments.length; r--;) s[r] = arguments[r];
			t.apply(i, s), i.off(e, a)
		}
		var i = this;
		return "function" != typeof t ? i : i.on(e, a)
	}, c.prototype.off = function (e, t) {
		var a = this;
		return e.split(" ").forEach(function (e) {
			void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function (i, s) {
				i === t && a.eventsListeners[e].splice(s, 1)
			})
		}), a
	}, c.prototype.emit = function () {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var a = this;
		if (!a.eventsListeners) return a;
		var i, s, r;
		return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), r = a) : (i = e[0].events, s = e[0].data, r = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
			if (a.eventsListeners[e]) {
				var t = [];
				a.eventsListeners[e].forEach(function (e) {
					t.push(e)
				}), t.forEach(function (e) {
					e.apply(r, s)
				})
			}
		}), a
	}, c.prototype.useModulesParams = function (e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function (a) {
			var i = t.modules[a];
			i.params && l.extend(e, i.params)
		})
	}, c.prototype.useModules = function (e) {
		void 0 === e && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function (a) {
			var i = t.modules[a],
				s = e[a] || {};
			i.instance && Object.keys(i.instance).forEach(function (e) {
				var a = i.instance[e];
				t[e] = "function" == typeof a ? a.bind(t) : a
			}), i.on && t.on && Object.keys(i.on).forEach(function (e) {
				t.on(e, i.on[e])
			}), i.create && i.create.bind(t)(s)
		})
	}, u.components.set = function (e) {
		var t = this;
		t.use && t.use(e)
	}, c.installModule = function (e) {
		for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
		var i = this;
		i.prototype.modules || (i.prototype.modules = {});
		var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();
		return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
			i.prototype[t] = e.proto[t]
		}), e.static && Object.keys(e.static).forEach(function (t) {
			i[t] = e.static[t]
		}), e.install && e.install.apply(i, t), i
	}, c.use = function (e) {
		for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
		var i = this;
		return Array.isArray(e) ? (e.forEach(function (e) {
			return i.installModule(e)
		}), i) : i.installModule.apply(i, [e].concat(t))
	}, Object.defineProperties(c, u);
	var h = {
			updateSize: function () {
				var e, t, a = this,
					i = a.$el;
				e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), l.extend(a, {
					width: e,
					height: t,
					size: a.isHorizontal() ? e : t
				}))
			},
			updateSlides: function () {
				var e = this,
					t = e.params,
					a = e.$wrapperEl,
					i = e.size,
					s = e.rtl,
					r = e.wrongRTL,
					n = a.children("." + e.params.slideClass),
					o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length,
					d = [],
					c = [],
					u = [],
					h = t.slidesOffsetBefore;
				"function" == typeof h && (h = t.slidesOffsetBefore.call(e));
				var v = t.slidesOffsetAfter;
				"function" == typeof v && (v = t.slidesOffsetAfter.call(e));
				var f = o,
					m = e.snapGrid.length,
					g = e.snapGrid.length,
					b = t.spaceBetween,
					w = -h,
					y = 0,
					x = 0;
				if (void 0 !== i) {
					"string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, s ? n.css({
						marginLeft: "",
						marginTop: ""
					}) : n.css({
						marginRight: "",
						marginBottom: ""
					});
					var T;
					t.slidesPerColumn > 1 && (T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
					for (var E, S = t.slidesPerColumn, C = T / S, M = C - (t.slidesPerColumn * C - o), z = 0; z < o; z += 1) {
						E = 0;
						var P = n.eq(z);
						if (t.slidesPerColumn > 1) {
							var k = void 0,
								$ = void 0,
								I = void 0;
							"column" === t.slidesPerColumnFill ? (I = z - ($ = Math.floor(z / S)) * S, ($ > M || $ === M && I === S - 1) && (I += 1) >= S && (I = 0, $ += 1), k = $ + I * T / S, P.css({
								"-webkit-box-ordinal-group": k,
								"-moz-box-ordinal-group": k,
								"-ms-flex-order": k,
								"-webkit-order": k,
								order: k
							})) : $ = z - (I = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", I)
						}
						"none" !== P.css("display") && ("auto" === t.slidesPerView ? (E = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0), t.roundLengths && (E = Math.floor(E))) : (E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), n[z] && (e.isHorizontal() ? n[z].style.width = E + "px" : n[z].style.height = E + "px")), n[z] && (n[z].swiperSlideSize = E), u.push(E), t.centeredSlides ? (w = w + E / 2 + y / 2 + b, 0 === y && 0 !== z && (w = w - i / 2 - b), 0 === z && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), x % t.slidesPerGroup == 0 && d.push(w), c.push(w)) : (x % t.slidesPerGroup == 0 && d.push(w), c.push(w), w = w + E + b), e.virtualSize += E + b, y = E, x += 1)
					}
					e.virtualSize = Math.max(e.virtualSize, i) + v;
					var L;
					if (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : a.css({
							height: e.virtualSize + t.spaceBetween + "px"
						})), t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : a.css({
							height: e.virtualSize + t.spaceBetween + "px"
						}), t.centeredSlides)) {
						L = [];
						for (var D = 0; D < d.length; D += 1) d[D] < e.virtualSize + d[0] && L.push(d[D]);
						d = L
					}
					if (!t.centeredSlides) {
						L = [];
						for (var O = 0; O < d.length; O += 1) d[O] <= e.virtualSize - i && L.push(d[O]);
						d = L, Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
					}
					0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? n.css({
						marginLeft: b + "px"
					}) : n.css({
						marginRight: b + "px"
					}) : n.css({
						marginBottom: b + "px"
					})), l.extend(e, {
						slides: n,
						snapGrid: d,
						slidesGrid: c,
						slidesSizesGrid: u
					}), o !== f && e.emit("slidesLengthChange"), d.length !== m && e.emit("snapGridLengthChange"), c.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
				}
			},
			updateAutoHeight: function () {
				var e, t = this,
					a = [],
					i = 0;
				if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
					for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
						var s = t.activeIndex + e;
						if (s > t.slides.length) break;
						a.push(t.slides.eq(s)[0])
					} else a.push(t.slides.eq(t.activeIndex)[0]);
				for (e = 0; e < a.length; e += 1)
					if (void 0 !== a[e]) {
						var r = a[e].offsetHeight;
						i = r > i ? r : i
					}
				i && t.$wrapperEl.css("height", i + "px")
			},
			updateSlidesOffset: function () {
				for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop
			},
			updateSlidesProgress: function (e) {
				void 0 === e && (e = this.translate || 0);
				var t = this,
					a = t.params,
					i = t.slides,
					s = t.rtl;
				if (0 !== i.length) {
					void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
					var r = -e;
					s && (r = e), i.removeClass(a.slideVisibleClass);
					for (var n = 0; n < i.length; n += 1) {
						var o = i[n],
							l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
						if (a.watchSlidesVisibility) {
							var d = -(r - o.swiperSlideOffset),
								p = d + t.slidesSizesGrid[n];
							(d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass)
						}
						o.progress = s ? -l : l
					}
				}
			},
			updateProgress: function (e) {
				void 0 === e && (e = this.translate || 0);
				var t = this,
					a = t.params,
					i = t.maxTranslate() - t.minTranslate(),
					s = t.progress,
					r = t.isBeginning,
					n = t.isEnd,
					o = r,
					d = n;
				0 === i ? (s = 0, r = !0, n = !0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = s >= 1), l.extend(t, {
					progress: s,
					isBeginning: r,
					isEnd: n
				}), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", s)
			},
			updateSlidesClasses: function () {
				var e = this,
					t = e.slides,
					a = e.params,
					i = e.$wrapperEl,
					s = e.activeIndex,
					r = e.realIndex,
					n = e.virtual && a.virtual.enabled;
				t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
				var o;
				(o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass), a.loop && (o.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
				var l = o.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
				a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
				var d = o.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
				a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass), a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass))
			},
			updateActiveIndex: function (e) {
				var t, a = this,
					i = a.rtl ? a.translate : -a.translate,
					s = a.slidesGrid,
					r = a.snapGrid,
					n = a.params,
					o = a.activeIndex,
					d = a.realIndex,
					p = a.snapIndex,
					c = e;
				if (void 0 === c) {
					for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : i >= s[u] && i < s[u + 1] && (c = u + 1) : i >= s[u] && (c = u);
					n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
				}
				if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / n.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== o) {
					var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
					l.extend(a, {
						snapIndex: t,
						realIndex: h,
						previousIndex: o,
						activeIndex: c
					}), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit("slideChange")
				} else t !== p && (a.snapIndex = t, a.emit("snapIndexChange"))
			},
			updateClickedSlide: function (t) {
				var a = this,
					i = a.params,
					s = e(t.target).closest("." + i.slideClass)[0],
					r = !1;
				if (s)
					for (var n = 0; n < a.slides.length; n += 1) a.slides[n] === s && (r = !0);
				if (!s || !r) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
				a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = e(s).index(), i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
			}
		},
		v = {
			getTranslate: function (e) {
				void 0 === e && (e = this.isHorizontal() ? "x" : "y");
				var t = this,
					a = t.params,
					i = t.rtl,
					s = t.translate,
					r = t.$wrapperEl;
				if (a.virtualTranslate) return i ? -s : s;
				var n = l.getTranslate(r[0], e);
				return i && (n = -n), n || 0
			},
			setTranslate: function (e, t) {
				var a = this,
					i = a.rtl,
					s = a.params,
					r = a.$wrapperEl,
					n = a.progress,
					o = 0,
					l = 0;
				a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (p.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.translate = a.isHorizontal() ? o : l;
				var d = a.maxTranslate() - a.minTranslate();
				(0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
			},
			minTranslate: function () {
				return -this.snapGrid[0]
			},
			maxTranslate: function () {
				return -this.snapGrid[this.snapGrid.length - 1]
			}
		},
		f = {
			setTransition: function (e, t) {
				var a = this;
				a.$wrapperEl.transition(e), a.emit("setTransition", e, t)
			},
			transitionStart: function (e) {
				void 0 === e && (e = !0);
				var t = this,
					a = t.activeIndex,
					i = t.params,
					s = t.previousIndex;
				i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit("slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
			},
			transitionEnd: function (e) {
				void 0 === e && (e = !0);
				var t = this,
					a = t.activeIndex,
					i = t.previousIndex;
				t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
			}
		},
		m = function () {
			return {
				isSafari: function () {
					var e = s.navigator.userAgent.toLowerCase();
					return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
				}(),
				isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
				ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled,
				ieTouch: s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1 || s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1,
				lteIE9: function () {
					var e = d.createElement("div");
					return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
				}()
			}
		}(),
		g = {
			slideTo: function (e, t, a, i) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
				var s = this,
					r = e;
				r < 0 && (r = 0);
				var n = s.params,
					o = s.snapGrid,
					l = s.slidesGrid,
					d = s.previousIndex,
					p = s.activeIndex,
					c = s.rtl,
					u = s.$wrapperEl,
					h = Math.floor(r / n.slidesPerGroup);
				h >= o.length && (h = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
				var v = -o[h];
				if (s.updateProgress(v), n.normalizeSlideIndex)
					for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
				return !(!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r || (c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), 1) : (0 === t || m.lteIE9 ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a)) : (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.animating || (s.animating = !0, u.transitionEnd(function () {
					s && !s.destroyed && s.transitionEnd(a)
				}))), 0)))
			},
			slideNext: function (e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					r = i.animating;
				return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
			},
			slidePrev: function (e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					r = i.animating;
				return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
			},
			slideReset: function (e, t, a) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this;
				return i.slideTo(i.activeIndex, e, t, a)
			},
			slideToClickedSlide: function () {
				var t, a = this,
					i = a.params,
					s = a.$wrapperEl,
					r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
					n = a.clickedIndex;
				if (i.loop) {
					if (a.animating) return;
					t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2 ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
						a.slideTo(n)
					})) : a.slideTo(n) : n > a.slides.length - r ? (a.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
						a.slideTo(n)
					})) : a.slideTo(n)
				} else a.slideTo(n)
			}
		},
		b = {
			loopCreate: function () {
				var t = this,
					a = t.params,
					i = t.$wrapperEl;
				i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
				var s = i.children("." + a.slideClass);
				if (a.loopFillGroupWithBlank) {
					var r = a.slidesPerGroup - s.length % a.slidesPerGroup;
					if (r !== a.slidesPerGroup) {
						for (var n = 0; n < r; n += 1) {
							var o = e(d.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
							i.append(o)
						}
						s = i.children("." + a.slideClass)
					}
				}
				"auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10), t.loopedSlides += a.loopAdditionalSlides, t.loopedSlides > s.length && (t.loopedSlides = s.length);
				var l = [],
					p = [];
				s.each(function (a, i) {
					var r = e(i);
					a < t.loopedSlides && p.push(i), a < s.length && a >= s.length - t.loopedSlides && l.push(i), r.attr("data-swiper-slide-index", a)
				});
				for (var c = 0; c < p.length; c += 1) i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
				for (var u = l.length - 1; u >= 0; u -= 1) i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass))
			},
			loopFix: function () {
				var e, t = this,
					a = t.params,
					i = t.activeIndex,
					s = t.slides,
					r = t.loopedSlides,
					n = t.allowSlidePrev,
					o = t.allowSlideNext;
				t.allowSlidePrev = !0, t.allowSlideNext = !0, i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = n, t.allowSlideNext = o
			},
			loopDestroy: function () {
				var e = this,
					t = e.$wrapperEl,
					a = e.params,
					i = e.slides;
				t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
			}
		},
		w = {
			setGrabCursor: function (e) {
				var t = this;
				if (!p.touch && t.params.simulateTouch) {
					var a = t.el;
					a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab"
				}
			},
			unsetGrabCursor: function () {
				var e = this;
				p.touch || (e.el.style.cursor = "")
			}
		},
		y = {
			appendSlide: function (e) {
				var t = this,
					a = t.$wrapperEl,
					i = t.params;
				if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
					for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
				else a.append(e);
				i.loop && t.loopCreate(), i.observer && p.observer || t.update()
			},
			prependSlide: function (e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && t.loopDestroy();
				var r = s + 1;
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
					r = s + e.length
				} else i.prepend(e);
				a.loop && t.loopCreate(), a.observer && p.observer || t.update(), t.slideTo(r, 0, !1)
			},
			removeSlide: function (e) {
				var t = this,
					a = t.params,
					i = t.$wrapperEl,
					s = t.activeIndex;
				a.loop && (t.loopDestroy(), t.slides = i.children("." + a.slideClass));
				var r, n = s;
				if ("object" == typeof e && "length" in e) {
					for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
					n = Math.max(n, 0)
				} else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
				a.loop && t.loopCreate(), a.observer && p.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
			},
			removeAllSlides: function () {
				for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
				e.removeSlide(t)
			}
		},
		x = function () {
			var e = s.navigator.userAgent,
				t = {
					ios: !1,
					android: !1,
					androidChrome: !1,
					desktop: !1,
					windows: !1,
					iphone: !1,
					ipod: !1,
					ipad: !1,
					cordova: s.cordova || s.phonegap,
					phonegap: s.cordova || s.phonegap
				},
				a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
				i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				r = e.match(/(iPad).*OS\s([\d_]+)/),
				n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || o || n) && (t.os = "ios", t.ios = !0), o && !n && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), n && (t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
				var l = t.osVersion.split("."),
					p = d.querySelector('meta[name="viewport"]');
				t.minimalUi = !t.webView && (n || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0
			}
			return t.pixelRatio = s.devicePixelRatio || 1, t
		}(),
		T = function (t) {
			var a = this,
				i = a.touchEventsData,
				s = a.params,
				r = a.touches,
				n = t;
			if (n.originalEvent && (n = n.originalEvent), i.isTouchEvent = "touchstart" === n.type, (i.isTouchEvent || !("which" in n) || 3 !== n.which) && (!i.isTouched || !i.isMoved))
				if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0]) a.allowClick = !0;
				else if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
				r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
				var o = r.currentX,
					p = r.currentY;
				if (!(x.ios && !x.cordova && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold && o >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
					if (l.extend(i, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0
						}), r.startX = o, r.startY = p, i.touchStartTime = l.now(), a.allowClick = !0, a.updateSize(), a.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== n.type) {
						var c = !0;
						e(n.target).is(i.formElements) && (c = !1), d.activeElement && e(d.activeElement).is(i.formElements) && d.activeElement.blur(), c && a.allowTouchMove && n.preventDefault()
					}
					a.emit("touchStart", n)
				}
			}
		},
		E = function (t) {
			var a = this,
				i = a.touchEventsData,
				s = a.params,
				r = a.touches,
				n = a.rtl,
				o = t;
			if (o.originalEvent && (o = o.originalEvent), !i.isTouchEvent || "mousemove" !== o.type) {
				var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
					c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
				if (o.preventedByNestedSwiper) return r.startX = p, void(r.startY = c);
				if (!a.allowTouchMove) return a.allowClick = !1, void(i.isTouched && (l.extend(r, {
					startX: p,
					startY: c,
					currentX: p,
					currentY: c
				}), i.touchStartTime = l.now()));
				if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
					if (a.isVertical()) {
						if (c < r.startY && a.translate <= a.maxTranslate() || c > r.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
					} else if (p < r.startX && a.translate <= a.maxTranslate() || p > r.startX && a.translate >= a.minTranslate()) return;
				if (i.isTouchEvent && d.activeElement && o.target === d.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(a.allowClick = !1);
				if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
					r.currentX = p, r.currentY = c;
					var u = r.currentX - r.startX,
						h = r.currentY - r.startY;
					if (void 0 === i.isScrolling) {
						var v;
						a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle)
					}
					if (i.isScrolling && a.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isTouched)
						if (i.isScrolling) i.isTouched = !1;
						else if (i.startMoving) {
						a.allowClick = !1, o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
						var f = a.isHorizontal() ? u : h;
						r.diff = f, f *= s.touchRatio, n && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
						var m = !0,
							g = s.resistanceRatio;
						if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < a.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, g))), m && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
							if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
							if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
						}
						s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
							position: r[a.isHorizontal() ? "startX" : "startY"],
							time: i.touchStartTime
						}), i.velocities.push({
							position: r[a.isHorizontal() ? "currentX" : "currentY"],
							time: l.now()
						})), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
					}
				}
			}
		},
		S = function (e) {
			var t = this,
				a = t.touchEventsData,
				i = t.params,
				s = t.touches,
				r = t.rtl,
				n = t.$wrapperEl,
				o = t.slidesGrid,
				d = t.snapGrid,
				p = e;
			if (p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), a.allowTouchCallbacks = !1, a.isTouched) {
				i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
				var c = l.now(),
					u = c - a.touchStartTime;
				if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), u < 300 && c - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = l.nextTick(function () {
						t && !t.destroyed && t.emit("click", p)
					}, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", p))), a.lastClickTime = l.now(), l.nextTick(function () {
						t.destroyed || (t.allowClick = !0)
					}), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, void(a.isMoved = !1);
				a.isTouched = !1, a.isMoved = !1;
				var h;
				if (h = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
					if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
					if (h > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
					if (i.freeModeMomentum) {
						if (a.velocities.length > 1) {
							var v = a.velocities.pop(),
								f = a.velocities.pop(),
								m = v.position - f.position,
								g = v.time - f.time;
							t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || l.now() - v.time > 300) && (t.velocity = 0)
						} else t.velocity = 0;
						t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
						var b = 1e3 * i.freeModeMomentumRatio,
							w = t.velocity * b,
							y = t.translate + w;
						r && (y = -y);
						var x, T = !1,
							E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
						if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate();
						else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), x = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.minTranslate();
						else if (i.freeModeSticky) {
							for (var S, C = 0; C < d.length; C += 1)
								if (d[C] > -y) {
									S = C;
									break
								}
							y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1])
						}
						if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
						else if (i.freeModeSticky) return void t.slideReset();
						i.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating = !0, n.transitionEnd(function () {
							t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), n.transitionEnd(function () {
								t && !t.destroyed && t.transitionEnd()
							}))
						})) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating || (t.animating = !0, n.transitionEnd(function () {
							t && !t.destroyed && t.transitionEnd()
						}))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
					}(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
				} else {
					for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? h >= o[P] && h < o[P + i.slidesPerGroup] && (M = P, z = o[P + i.slidesPerGroup] - o[P]) : h >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
					var k = (h - o[M]) / z;
					if (u > i.longSwipesMs) {
						if (!i.longSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
					} else {
						if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
						"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
					}
				}
			}
		},
		C = function () {
			var e = this,
				t = e.params,
				a = e.el;
			if (!a || 0 !== a.offsetWidth) {
				t.breakpoints && e.setBreakpoint();
				var i = e.allowSlideNext,
					s = e.allowSlidePrev;
				if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
					var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
					e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
				} else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
				e.allowSlidePrev = s, e.allowSlideNext = i
			}
		},
		M = function (e) {
			var t = this;
			t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
		},
		z = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			iOSEdgeSwipeDetection: !1,
			iOSEdgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: .5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !0,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0
		},
		P = {
			update: h,
			translate: v,
			transition: f,
			slide: g,
			loop: b,
			grabCursor: w,
			manipulation: y,
			events: {
				attachEvents: function () {
					var e = this,
						t = e.params,
						a = e.touchEvents,
						i = e.el,
						s = e.wrapperEl;
					e.onTouchStart = T.bind(e), e.onTouchMove = E.bind(e), e.onTouchEnd = S.bind(e), e.onClick = M.bind(e);
					var r = "container" === t.touchEventsTarget ? i : s,
						n = !!t.nested;
					if (m.ie) r.addEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);
					else {
						if (p.touch) {
							var o = !("touchstart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, p.passiveListener ? {
								passive: !1,
								capture: n
							} : n), r.addEventListener(a.end, e.onTouchEnd, o)
						}(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), d.addEventListener("mousemove", e.onTouchMove, n), d.addEventListener("mouseup", e.onTouchEnd, !1))
					}(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", C)
				},
				detachEvents: function () {
					var e = this,
						t = e.params,
						a = e.touchEvents,
						i = e.el,
						s = e.wrapperEl,
						r = "container" === t.touchEventsTarget ? i : s,
						n = !!t.nested;
					if (m.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);
					else {
						if (p.touch) {
							var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
						}(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !p.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), d.removeEventListener("mousemove", e.onTouchMove, n), d.removeEventListener("mouseup", e.onTouchEnd, !1))
					}(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", C)
				}
			},
			breakpoints: {
				setBreakpoint: function () {
					var e = this,
						t = e.activeIndex,
						a = e.loopedSlides;
					void 0 === a && (a = 0);
					var i = e.params,
						s = i.breakpoints;
					if (s && (!s || 0 !== Object.keys(s).length)) {
						var r = e.getBreakpoint(s);
						if (r && e.currentBreakpoint !== r) {
							var n = r in s ? s[r] : e.originalParams,
								o = i.loop && n.slidesPerView !== i.slidesPerView;
							l.extend(e.params, n), l.extend(e, {
								allowTouchMove: e.params.allowTouchMove,
								allowSlideNext: e.params.allowSlideNext,
								allowSlidePrev: e.params.allowSlidePrev
							}), e.currentBreakpoint = r, o && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", n)
						}
					}
				},
				getBreakpoint: function (e) {
					if (e) {
						var t = !1,
							a = [];
						Object.keys(e).forEach(function (e) {
							a.push(e)
						}), a.sort(function (e, t) {
							return parseInt(e, 10) - parseInt(t, 10)
						});
						for (var i = 0; i < a.length; i += 1) {
							var r = a[i];
							r >= s.innerWidth && !t && (t = r)
						}
						return t || "max"
					}
				}
			},
			classes: {
				addClasses: function () {
					var e = this,
						t = e.classNames,
						a = e.params,
						i = e.rtl,
						r = e.$el,
						n = [];
					n.push(a.direction), a.freeMode && n.push("free-mode"), p.flexbox || n.push("no-flexbox"), a.autoHeight && n.push("autoheight"), i && n.push("rtl"), a.slidesPerColumn > 1 && n.push("multirow"), x.android && n.push("android"), x.ios && n.push("ios"), (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) && n.push("wp8-" + a.direction), n.forEach(function (e) {
						t.push(a.containerModifierClass + e)
					}), r.addClass(t.join(" "))
				},
				removeClasses: function () {
					var e = this,
						t = e.$el,
						a = e.classNames;
					t.removeClass(a.join(" "))
				}
			},
			images: {
				loadImage: function (e, t, a, i, r, n) {
					function o() {
						n && n()
					}
					var l;
					e.complete && r ? o() : t ? ((l = new s.Image).onload = o, l.onerror = o, i && (l.sizes = i), a && (l.srcset = a), t && (l.src = t)) : o()
				},
				preloadImages: function () {
					var e = this;
					e.imagesToLoad = e.$el.find("img");
					for (var t = 0; t < e.imagesToLoad.length; t += 1) {
						var a = e.imagesToLoad[t];
						e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function () {
							void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
						})
					}
				}
			}
		},
		k = {},
		$ = function (t) {
			function a() {
				for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
				var n, o;
				if (1 === i.length && i[0].constructor && i[0].constructor === Object) o = i[0];
				else {
					var d;
					n = (d = i)[0], o = d[1]
				}
				o || (o = {}), o = l.extend({}, o), n && !o.el && (o.el = n), t.call(this, o), Object.keys(P).forEach(function (e) {
					Object.keys(P[e]).forEach(function (t) {
						a.prototype[t] || (a.prototype[t] = P[e][t])
					})
				});
				var c = this;
				void 0 === c.modules && (c.modules = {}), Object.keys(c.modules).forEach(function (e) {
					var t = c.modules[e];
					if (t.params) {
						var a = Object.keys(t.params)[0],
							i = t.params[a];
						if ("object" != typeof i) return;
						if (!(a in o && "enabled" in i)) return;
						!0 === o[a] && (o[a] = {
							enabled: !0
						}), "object" != typeof o[a] || "enabled" in o[a] || (o[a].enabled = !0), o[a] || (o[a] = {
							enabled: !1
						})
					}
				});
				var u = l.extend({}, z);
				c.useModulesParams(u), c.params = l.extend({}, u, k, o), c.originalParams = l.extend({}, c.params), c.passedParams = l.extend({}, o);
				var h = e(c.params.el);
				if (n = h[0]) {
					if (h.length > 1) {
						var v = [];
						return h.each(function (e, t) {
							var i = l.extend({}, o, {
								el: t
							});
							v.push(new a(i))
						}), v
					}
					n.swiper = c, h.data("swiper", c);
					var f = h.children("." + c.params.wrapperClass);
					return l.extend(c, {
						$el: h,
						el: n,
						$wrapperEl: f,
						wrapperEl: f[0],
						classNames: [],
						slides: e(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function () {
							return "horizontal" === c.params.direction
						},
						isVertical: function () {
							return "vertical" === c.params.direction
						},
						rtl: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
						wrongRTL: "-webkit-box" === f.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: c.params.allowSlideNext,
						allowSlidePrev: c.params.allowSlidePrev,
						touchEvents: function () {
							var e = ["touchstart", "touchmove", "touchend"],
								t = ["mousedown", "mousemove", "mouseup"];
							return s.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : s.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]), {
								start: p.touch || !c.params.simulateTouch ? e[0] : t[0],
								move: p.touch || !c.params.simulateTouch ? e[1] : t[1],
								end: p.touch || !c.params.simulateTouch ? e[2] : t[2]
							}
						}(),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements: "input, select, option, textarea, button, video",
							lastClickTime: l.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: c.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), c.useModules(), c.params.init && c.init(), c
				}
			}
			t && (a.__proto__ = t), a.prototype = Object.create(t && t.prototype), a.prototype.constructor = a;
			var i = {
				extendedDefaults: {},
				defaults: {},
				Class: {},
				$: {}
			};
			return a.prototype.slidesPerViewDynamic = function () {
				var e = this,
					t = e.params,
					a = e.slides,
					i = e.slidesGrid,
					s = e.size,
					r = e.activeIndex,
					n = 1;
				if (t.centeredSlides) {
					for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, (l += a[d].swiperSlideSize) > s && (o = !0));
					for (var p = r - 1; p >= 0; p -= 1) a[p] && !o && (n += 1, (l += a[p].swiperSlideSize) > s && (o = !0))
				} else
					for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
				return n
			}, a.prototype.update = function () {
				function e() {
					a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
				}
				var t = this;
				if (t && !t.destroyed) {
					t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
					var a;
					t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update")
				}
			}, a.prototype.init = function () {
				var e = this;
				e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
			}, a.prototype.destroy = function (e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var a = this,
					i = a.params,
					s = a.$el,
					r = a.$wrapperEl,
					n = a.slides;
				a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
					a.off(e)
				}), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), l.deleteProps(a)), a.destroyed = !0
			}, a.extendDefaults = function (e) {
				l.extend(k, e)
			}, i.extendedDefaults.get = function () {
				return k
			}, i.defaults.get = function () {
				return z
			}, i.Class.get = function () {
				return t
			}, i.$.get = function () {
				return e
			}, Object.defineProperties(a, i), a
		}(c),
		I = {
			name: "device",
			proto: {
				device: x
			},
			static: {
				device: x
			}
		},
		L = {
			name: "support",
			proto: {
				support: p
			},
			static: {
				support: p
			}
		},
		D = {
			name: "browser",
			proto: {
				browser: m
			},
			static: {
				browser: m
			}
		},
		O = {
			name: "resize",
			create: function () {
				var e = this;
				l.extend(e, {
					resize: {
						resizeHandler: function () {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function () {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					s.addEventListener("resize", e.resize.resizeHandler), s.addEventListener("orientationchange", e.resize.orientationChangeHandler)
				},
				destroy: function () {
					var e = this;
					s.removeEventListener("resize", e.resize.resizeHandler), s.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
				}
			}
		},
		A = {
			func: s.MutationObserver || s.WebkitMutationObserver,
			attach: function (e, t) {
				void 0 === t && (t = {});
				var a = this,
					i = new(0, A.func)(function (e) {
						e.forEach(function (e) {
							a.emit("observerUpdate", e)
						})
					});
				i.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), a.observer.observers.push(i)
			},
			init: function () {
				var e = this;
				if (p.observer && e.params.observer) {
					if (e.params.observeParents)
						for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
					e.observer.attach(e.$el[0], {
						childList: !1
					}), e.observer.attach(e.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function () {
				var e = this;
				e.observer.observers.forEach(function (e) {
					e.disconnect()
				}), e.observer.observers = []
			}
		},
		H = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1
			},
			create: function () {
				var e = this;
				l.extend(e, {
					observer: {
						init: A.init.bind(e),
						attach: A.attach.bind(e),
						destroy: A.destroy.bind(e),
						observers: []
					}
				})
			},
			on: {
				init: function () {
					this.observer.init()
				},
				destroy: function () {
					this.observer.destroy()
				}
			}
		},
		N = {
			update: function (e) {
				function t() {
					a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load()
				}
				var a = this,
					i = a.params,
					s = i.slidesPerView,
					r = i.slidesPerGroup,
					n = i.centeredSlides,
					o = a.virtual,
					d = o.from,
					p = o.to,
					c = o.slides,
					u = o.slidesGrid,
					h = o.renderSlide,
					v = o.offset;
				a.updateActiveIndex();
				var f, m = a.activeIndex || 0;
				f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
				var g, b;
				n ? (g = Math.floor(s / 2) + r, b = Math.floor(s / 2) + r) : (g = s + (r - 1), b = r);
				var w = Math.max((m || 0) - b, 0),
					y = Math.min((m || 0) + g, c.length - 1),
					x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
				if (l.extend(a.virtual, {
						from: w,
						to: y,
						offset: x,
						slidesGrid: a.slidesGrid
					}), d === w && p === y && !e) return a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"), void a.updateProgress();
				if (a.params.virtual.renderExternal) return a.params.virtual.renderExternal.call(a, {
					offset: x,
					from: w,
					to: y,
					slides: function () {
						for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
						return e
					}()
				}), void t();
				var T = [],
					E = [];
				if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
				else
					for (var S = d; S <= p; S += 1)(S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
				for (var C = 0; C < c.length; C += 1) C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C), C < d && T.push(C)));
				E.forEach(function (e) {
					a.$wrapperEl.append(h(c[e], e))
				}), T.sort(function (e, t) {
					return e < t
				}).forEach(function (e) {
					a.$wrapperEl.prepend(h(c[e], e))
				}), a.$wrapperEl.children(".swiper-slide").css(f, x + "px"), t()
			},
			renderSlide: function (t, a) {
				var i = this,
					s = i.params.virtual;
				if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
				var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
				return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a), s.cache && (i.virtual.cache[a] = r), r
			},
			appendSlide: function (e) {
				var t = this;
				t.virtual.slides.push(e), t.virtual.update(!0)
			},
			prependSlide: function (e) {
				var t = this;
				if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
					var a = t.virtual.cache,
						i = {};
					Object.keys(a).forEach(function (e) {
						i[e + 1] = a[e]
					}), t.virtual.cache = i
				}
				t.virtual.update(!0), t.slideNext(0)
			}
		},
		X = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					virtual: {
						update: N.update.bind(e),
						appendSlide: N.appendSlide.bind(e),
						prependSlide: N.prependSlide.bind(e),
						renderSlide: N.renderSlide.bind(e),
						slides: e.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if (e.params.virtual.enabled) {
						e.classNames.push(e.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						l.extend(e.params, t), l.extend(e.originalParams, t), e.virtual.update()
					}
				},
				setTranslate: function () {
					var e = this;
					e.params.virtual.enabled && e.virtual.update()
				}
			}
		},
		Y = {
			handle: function (e) {
				var t = this,
					a = e;
				a.originalEvent && (a = a.originalEvent);
				var i = a.keyCode || a.charCode;
				if (!t.allowSlideNext && (t.isHorizontal() && 39 === i || t.isVertical() && 40 === i)) return !1;
				if (!t.allowSlidePrev && (t.isHorizontal() && 37 === i || t.isVertical() && 38 === i)) return !1;
				if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
					if (37 === i || 39 === i || 38 === i || 40 === i) {
						var r = !1;
						if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
						var n = {
								left: s.pageXOffset,
								top: s.pageYOffset
							},
							o = s.innerWidth,
							l = s.innerHeight,
							p = t.$el.offset();
						t.rtl && (p.left -= t.$el[0].scrollLeft);
						for (var c = [
								[p.left, p.top],
								[p.left + t.width, p.top],
								[p.left, p.top + t.height],
								[p.left + t.width, p.top + t.height]
							], u = 0; u < c.length; u += 1) {
							var h = c[u];
							h[0] >= n.left && h[0] <= n.left + o && h[1] >= n.top && h[1] <= n.top + l && (r = !0)
						}
						if (!r) return
					}
					t.isHorizontal() ? (37 !== i && 39 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === i && !t.rtl || 37 === i && t.rtl) && t.slideNext(), (37 === i && !t.rtl || 39 === i && t.rtl) && t.slidePrev()) : (38 !== i && 40 !== i || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === i && t.slideNext(), 38 === i && t.slidePrev()), t.emit("keyPress", i)
				}
			},
			enable: function () {
				var t = this;
				t.keyboard.enabled || (e(d).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
			},
			disable: function () {
				var t = this;
				t.keyboard.enabled && (e(d).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
			}
		},
		G = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					keyboard: {
						enabled: !1,
						enable: Y.enable.bind(e),
						disable: Y.disable.bind(e),
						handle: Y.handle.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.keyboard.enabled && e.keyboard.enable()
				},
				destroy: function () {
					var e = this;
					e.keyboard.enabled && e.keyboard.disable()
				}
			}
		},
		B = {
			lastScrollTime: l.now(),
			event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel",
			normalize: function (e) {
				var t = 0,
					a = 0,
					i = 0,
					s = 0;
				return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
					spinX: t,
					spinY: a,
					pixelX: i,
					pixelY: s
				}
			},
			handle: function (e) {
				var t = e,
					a = this,
					i = a.params.mousewheel;
				t.originalEvent && (t = t.originalEvent);
				var r = 0,
					n = a.rtl ? -1 : 1,
					o = B.normalize(t);
				if (i.forceToAxis)
					if (a.isHorizontal()) {
						if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
						r = o.pixelX * n
					} else {
						if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
						r = o.pixelY
					}
				else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
				if (0 === r) return !0;
				if (i.invert && (r = -r), a.params.freeMode) {
					var d = a.getTranslate() + r * i.sensitivity,
						p = a.isBeginning,
						c = a.isEnd;
					if (d >= a.minTranslate() && (d = a.minTranslate()), d <= a.maxTranslate() && (d = a.maxTranslate()), a.setTransition(0), a.setTranslate(d), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!p && a.isBeginning || !c && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = l.nextTick(function () {
							a.slideReset()
						}, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(), 0 === d || d === a.maxTranslate()) return !0
				} else {
					if (l.now() - a.mousewheel.lastScrollTime > 60)
						if (r < 0)
							if (a.isEnd && !a.params.loop || a.animating) {
								if (i.releaseOnEdges) return !0
							} else a.slideNext(), a.emit("scroll", t);
					else if (a.isBeginning && !a.params.loop || a.animating) {
						if (i.releaseOnEdges) return !0
					} else a.slidePrev(), a.emit("scroll", t);
					a.mousewheel.lastScrollTime = (new s.Date).getTime()
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			enable: function () {
				var t = this;
				if (!B.event) return !1;
				if (t.mousewheel.enabled) return !1;
				var a = t.$el;
				return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(B.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
			},
			disable: function () {
				var t = this;
				if (!B.event) return !1;
				if (!t.mousewheel.enabled) return !1;
				var a = t.$el;
				return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(B.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
			}
		},
		V = {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					mousewheel: {
						enabled: !1,
						enable: B.enable.bind(e),
						disable: B.disable.bind(e),
						handle: B.handle.bind(e),
						lastScrollTime: l.now()
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.mousewheel.enabled && e.mousewheel.enable()
				},
				destroy: function () {
					var e = this;
					e.mousewheel.enabled && e.mousewheel.disable()
				}
			}
		},
		R = {
			update: function () {
				var e = this,
					t = e.params.navigation;
				if (!e.params.loop) {
					var a = e.navigation,
						i = a.$nextEl,
						s = a.$prevEl;
					s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
				}
			},
			init: function () {
				var t = this,
					a = t.params.navigation;
				if (a.nextEl || a.prevEl) {
					var i, s;
					a.nextEl && (i = e(a.nextEl), t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))), a.prevEl && (s = e(a.prevEl), t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))), i && i.length > 0 && i.on("click", function (e) {
						e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
					}), s && s.length > 0 && s.on("click", function (e) {
						e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
					}), l.extend(t.navigation, {
						$nextEl: i,
						nextEl: i && i[0],
						$prevEl: s,
						prevEl: s && s[0]
					})
				}
			},
			destroy: function () {
				var e = this,
					t = e.navigation,
					a = t.$nextEl,
					i = t.$prevEl;
				a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass))
			}
		},
		W = {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden"
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					navigation: {
						init: R.init.bind(e),
						update: R.update.bind(e),
						destroy: R.destroy.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.navigation.init(), e.navigation.update()
				},
				toEdge: function () {
					this.navigation.update()
				},
				fromEdge: function () {
					this.navigation.update()
				},
				destroy: function () {
					this.navigation.destroy()
				},
				click: function (t) {
					var a = this,
						i = a.navigation,
						s = i.$nextEl,
						r = i.$prevEl;
					!a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
				}
			}
		},
		F = {
			update: function () {
				var t = this,
					a = t.rtl,
					i = t.params.pagination;
				if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
					var s, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
						n = t.pagination.$el,
						o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
					if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
						var l = t.pagination.bullets;
						if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), n.length > 1) l.each(function (t, a) {
							var r = e(a);
							r.index() === s && (r.addClass(i.bulletActiveClass), i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
						});
						else {
							var d = l.eq(s);
							d.addClass(i.bulletActiveClass), i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
						}
						if (i.dynamicBullets) {
							var p = Math.min(l.length, 5),
								c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize,
								u = a ? "right" : "left";
							l.css(t.isHorizontal() ? u : "top", c + "px")
						}
					}
					if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)), "progressbar" === i.type) {
						var h = (s + 1) / o,
							v = h,
							f = 1;
						t.isHorizontal() || (f = h, v = 1), n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")").transition(t.params.speed)
					}
					"custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0])
				}
			},
			render: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						s = "";
					if ("bullets" === t.type) {
						for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
						i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
					}
					"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
				}
			},
			init: function () {
				var t = this,
					a = t.params.pagination;
				if (a.el) {
					var i = e(a.el);
					0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)), "bullets" === a.type && a.clickable && i.addClass(a.clickableClass), i.addClass(a.modifierClass + a.type), "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"), a.clickable && i.on("click", "." + a.bulletClass, function (a) {
						a.preventDefault();
						var i = e(this).index() * t.params.slidesPerGroup;
						t.params.loop && (i += t.loopedSlides), t.slideTo(i)
					}), l.extend(t.pagination, {
						$el: i,
						el: i[0]
					}))
				}
			},
			destroy: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var a = e.pagination.$el;
					a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
				}
			}
		},
		j = {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					type: "bullets",
					dynamicBullets: !1,
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					clickableClass: "swiper-pagination-clickable"
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					pagination: {
						init: F.init.bind(e),
						render: F.render.bind(e),
						update: F.update.bind(e),
						destroy: F.destroy.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.pagination.init(), e.pagination.render(), e.pagination.update()
				},
				activeIndexChange: function () {
					var e = this;
					e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
				},
				snapIndexChange: function () {
					var e = this;
					e.params.loop || e.pagination.update()
				},
				slidesLengthChange: function () {
					var e = this;
					e.params.loop && (e.pagination.render(), e.pagination.update())
				},
				snapGridLengthChange: function () {
					var e = this;
					e.params.loop || (e.pagination.render(), e.pagination.update())
				},
				destroy: function () {
					this.pagination.destroy()
				},
				click: function (t) {
					var a = this;
					a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
				}
			}
		},
		q = {
			setTranslate: function () {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = e.rtl,
						i = e.progress,
						s = t.dragSize,
						r = t.trackSize,
						n = t.$dragEl,
						o = t.$el,
						l = e.params.scrollbar,
						d = s,
						c = (r - s) * i;
					a && e.isHorizontal() ? (c = -c) > 0 ? (d = s - c, c = 0) : -c + s > r && (d = r + c) : c < 0 ? (d = s + c, c = 0) : c + s > r && (d = r - c), e.isHorizontal() ? (p.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"), n[0].style.width = d + "px") : (p.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
						o[0].style.opacity = 0, o.transition(400)
					}, 1e3))
				}
			},
			setTransition: function (e) {
				var t = this;
				t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
			},
			updateSize: function () {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						a = t.$dragEl,
						i = t.$el;
					a[0].style.width = "", a[0].style.height = "";
					var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						n = e.size / e.virtualSize,
						o = n * (r / e.size);
					s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), l.extend(t, {
						trackSize: r,
						divider: n,
						moveDivider: o,
						dragSize: s
					})
				}
			},
			setDragPosition: function (e) {
				var t, a = this,
					i = a.scrollbar,
					s = i.$el,
					r = i.dragSize,
					n = i.trackSize;
				t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[a.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), a.rtl && (t = 1 - t);
				var o = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
				a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses()
			},
			onDragStart: function (e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar,
					s = t.$wrapperEl,
					r = i.$el,
					n = i.$dragEl;
				t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
			},
			onDragMove: function (e) {
				var t = this,
					a = t.scrollbar,
					i = t.$wrapperEl,
					s = a.$el,
					r = a.$dragEl;
				t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e))
			},
			onDragEnd: function (e) {
				var t = this,
					a = t.params.scrollbar,
					i = t.scrollbar.$el;
				t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = l.nextTick(function () {
					i.css("opacity", 0), i.transition(400)
				}, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideReset())
			},
			enableDraggable: function () {
				var t = this;
				if (t.params.scrollbar.el) {
					var a = t.scrollbar.$el,
						i = p.touch ? a[0] : document;
					a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
				}
			},
			disableDraggable: function () {
				var t = this;
				if (t.params.scrollbar.el) {
					var a = t.scrollbar.$el,
						i = p.touch ? a[0] : document;
					a.off(t.scrollbar.dragEvents.start), e(i).off(t.scrollbar.dragEvents.move), e(i).off(t.scrollbar.dragEvents.end)
				}
			},
			init: function () {
				var t = this;
				if (t.params.scrollbar.el) {
					var a = t.scrollbar,
						i = t.$el,
						s = t.touchEvents,
						r = t.params.scrollbar,
						n = e(r.el);
					t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));
					var o = n.find(".swiper-scrollbar-drag");
					0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'), n.append(o)), t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || p.touch ? s : {
						start: "mousedown",
						move: "mousemove",
						end: "mouseup"
					}, l.extend(a, {
						$el: n,
						el: n[0],
						$dragEl: o,
						dragEl: o[0]
					}), r.draggable && a.enableDraggable()
				}
			},
			destroy: function () {
				this.scrollbar.disableDraggable()
			}
		},
		K = {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					scrollbar: {
						init: q.init.bind(e),
						destroy: q.destroy.bind(e),
						updateSize: q.updateSize.bind(e),
						setTranslate: q.setTranslate.bind(e),
						setTransition: q.setTransition.bind(e),
						enableDraggable: q.enableDraggable.bind(e),
						disableDraggable: q.disableDraggable.bind(e),
						setDragPosition: q.setDragPosition.bind(e),
						onDragStart: q.onDragStart.bind(e),
						onDragMove: q.onDragMove.bind(e),
						onDragEnd: q.onDragEnd.bind(e),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
				},
				update: function () {
					this.scrollbar.updateSize()
				},
				resize: function () {
					this.scrollbar.updateSize()
				},
				observerUpdate: function () {
					this.scrollbar.updateSize()
				},
				setTranslate: function () {
					this.scrollbar.setTranslate()
				},
				setTransition: function (e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function () {
					this.scrollbar.destroy()
				}
			}
		},
		U = {
			setTransform: function (t, a) {
				var i = this,
					s = i.rtl,
					r = e(t),
					n = s ? -1 : 1,
					o = r.attr("data-swiper-parallax") || "0",
					l = r.attr("data-swiper-parallax-x"),
					d = r.attr("data-swiper-parallax-y"),
					p = r.attr("data-swiper-parallax-scale"),
					c = r.attr("data-swiper-parallax-opacity");
				if (l || d ? (l = l || "0", d = d || "0") : i.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px", void 0 !== c && null !== c) {
					var u = c - (c - 1) * (1 - Math.abs(a));
					r[0].style.opacity = u
				}
				if (void 0 === p || null === p) r.transform("translate3d(" + l + ", " + d + ", 0px)");
				else {
					var h = p - (p - 1) * (1 - Math.abs(a));
					r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")")
				}
			},
			setTranslate: function () {
				var t = this,
					a = t.$el,
					i = t.slides,
					s = t.progress,
					r = t.snapGrid;
				a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
					t.parallax.setTransform(a, s)
				}), i.each(function (a, i) {
					var n = i.progress;
					t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
						t.parallax.setTransform(a, n)
					})
				})
			},
			setTransition: function (t) {
				void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (a, i) {
					var s = e(i),
						r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
					0 === t && (r = 0), s.transition(r)
				})
			}
		},
		_ = {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					parallax: {
						setTransform: U.setTransform.bind(e),
						setTranslate: U.setTranslate.bind(e),
						setTransition: U.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					this.params.watchSlidesProgress = !0
				},
				init: function () {
					var e = this;
					e.params.parallax && e.parallax.setTranslate()
				},
				setTranslate: function () {
					var e = this;
					e.params.parallax && e.parallax.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					t.params.parallax && t.parallax.setTransition(e)
				}
			}
		},
		Z = {
			getDistanceBetweenTouches: function (e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					a = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					s = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
			},
			onGestureStart: function (t) {
				var a = this,
					i = a.params.zoom,
					s = a.zoom,
					r = s.gesture;
				if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !p.gestures) {
					if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
					s.fakeGestureTouched = !0, r.scaleStart = Z.getDistanceBetweenTouches(t)
				}
				r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this), 0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), a.zoom.isScaling = !0) : r.$imageEl = void 0
			},
			onGestureChange: function (e) {
				var t = this,
					a = t.params.zoom,
					i = t.zoom,
					s = i.gesture;
				if (!p.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureMoved = !0, s.scaleMove = Z.getDistanceBetweenTouches(e)
				}
				s.$imageEl && 0 !== s.$imageEl.length && (p.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
			},
			onGestureEnd: function (e) {
				var t = this,
					a = t.params.zoom,
					i = t.zoom,
					s = i.gesture;
				if (!p.gestures) {
					if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
					i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
				}
				s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
			},
			onTouchStart: function (e) {
				var t = this.zoom,
					a = t.gesture,
					i = t.image;
				a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (x.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function (e) {
				var t = this,
					a = t.zoom,
					i = a.gesture,
					s = a.image,
					r = a.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
					s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX), t.rtl && (s.startY = -s.startY));
					var n = s.width * a.scale,
						o = s.height * a.scale;
					if (!(n < i.slideWidth && o < i.slideHeight)) {
						if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
							if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
							if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
						}
						e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function () {
				var e = this.zoom,
					t = e.gesture,
					a = e.image,
					i = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
					a.isTouched = !1, a.isMoved = !1;
					var s = 300,
						r = 300,
						n = i.x * s,
						o = a.currentX + n,
						l = i.y * r,
						d = a.currentY + l;
					0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
					var p = Math.max(s, r);
					a.currentX = o, a.currentY = d;
					var c = a.width * e.scale,
						u = a.height * e.scale;
					a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
				}
			},
			onTransitionEnd: function () {
				var e = this,
					t = e.zoom,
					a = t.gesture;
				a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
			},
			toggle: function (e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function (t) {
				var a = this,
					i = a.zoom,
					s = a.params.zoom,
					r = i.gesture,
					n = i.image;
				if (r.$slideEl || (r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass)), r.$imageEl && 0 !== r.$imageEl.length) {
					r.$slideEl.addClass("" + s.zoomedSlideClass);
					var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;
					void 0 === n.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = n.touchesStart.x, l = n.touchesStart.y), i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, t ? (x = r.$slideEl[0].offsetWidth, T = r.$slideEl[0].offsetHeight, d = r.$slideEl.offset().left + x / 2 - o, p = r.$slideEl.offset().top + T / 2 - l, h = r.$imageEl[0].offsetWidth, v = r.$imageEl[0].offsetHeight, f = h * i.scale, m = v * i.scale, w = -(g = Math.min(x / 2 - f / 2, 0)), y = -(b = Math.min(T / 2 - m / 2, 0)), c = d * i.scale, u = p * i.scale, c < g && (c = g), c > w && (c = w), u < b && (u = b), u > y && (u = y)) : (c = 0, u = 0), r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
				}
			},
			out: function () {
				var t = this,
					a = t.zoom,
					i = t.params.zoom,
					s = a.gesture;
				s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (a.scale = 1, a.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
			},
			enable: function () {
				var t = this,
					a = t.zoom;
				if (!a.enabled) {
					a.enabled = !0;
					var i = t.slides,
						s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					p.gestures ? (i.on("gesturestart", a.onGestureStart, s), i.on("gesturechange", a.onGestureChange, s), i.on("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s), i.on(t.touchEvents.move, a.onGestureChange, s), i.on(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
						var r = e(s);
						r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove)
					})
				}
			},
			disable: function () {
				var t = this,
					a = t.zoom;
				if (a.enabled) {
					t.zoom.enabled = !1;
					var i = t.slides,
						s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					p.gestures ? (i.off("gesturestart", a.onGestureStart, s), i.off("gesturechange", a.onGestureChange, s), i.off("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s), i.off(t.touchEvents.move, a.onGestureChange, s), i.off(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
						var r = e(s);
						r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove)
					})
				}
			}
		},
		Q = {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function () {
				var e = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
							isTouched: void 0,
							isMoved: void 0,
							currentX: void 0,
							currentY: void 0,
							minX: void 0,
							minY: void 0,
							maxX: void 0,
							maxY: void 0,
							width: void 0,
							height: void 0,
							startX: void 0,
							startY: void 0,
							touchesStart: {},
							touchesCurrent: {}
						},
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (a) {
					t[a] = Z[a].bind(e)
				}), l.extend(e, {
					zoom: t
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.zoom.enabled && e.zoom.enable()
				},
				destroy: function () {
					this.zoom.disable()
				},
				touchStart: function (e) {
					var t = this;
					t.zoom.enabled && t.zoom.onTouchStart(e)
				},
				touchEnd: function (e) {
					var t = this;
					t.zoom.enabled && t.zoom.onTouchEnd(e)
				},
				doubleTap: function (e) {
					var t = this;
					t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
				},
				transitionEnd: function () {
					var e = this;
					e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
				}
			}
		},
		J = {
			loadInSlide: function (t, a) {
				void 0 === a && (a = !0);
				var i = this,
					s = i.params.lazy;
				if (void 0 !== t && 0 !== i.slides.length) {
					var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
						n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
					!r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (t, n) {
						var o = e(n);
						o.addClass(s.loadingClass);
						var l = o.attr("data-background"),
							d = o.attr("data-src"),
							p = o.attr("data-srcset"),
							c = o.attr("data-sizes");
						i.loadImage(o[0], d || l, p, c, !1, function () {
							if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
								if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && a) {
									var e = r.attr("data-swiper-slide-index");
									if (r.hasClass(i.params.slideDuplicateClass)) {
										var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
										i.lazy.loadInSlide(t.index(), !1)
									} else {
										var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										i.lazy.loadInSlide(n.index(), !1)
									}
								}
								i.emit("lazyImageReady", r[0], o[0])
							}
						}), i.emit("lazyImageLoad", r[0], o[0])
					})
				}
			},
			load: function () {
				function t(e) {
					if (l) {
						if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (n[e]) return !0;
					return !1
				}

				function a(t) {
					return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
				}
				var i = this,
					s = i.$wrapperEl,
					r = i.params,
					n = i.slides,
					o = i.activeIndex,
					l = i.virtual && r.virtual.enabled,
					d = r.lazy,
					p = r.slidesPerView;
				if ("auto" === p && (p = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) s.children("." + r.slideVisibleClass).each(function (t, a) {
					var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
					i.lazy.loadInSlide(s)
				});
				else if (p > 1)
					for (var c = o; c < o + p; c += 1) t(c) && i.lazy.loadInSlide(c);
				else i.lazy.loadInSlide(o);
				if (d.loadPrevNext)
					if (p > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
						for (var u = d.loadPrevNextAmount, h = p, v = Math.min(o + h + Math.max(u, h), n.length), f = Math.max(o - Math.max(h, u), 0), m = o + p; m < v; m += 1) t(m) && i.lazy.loadInSlide(m);
						for (var g = f; g < o; g += 1) t(g) && i.lazy.loadInSlide(g)
					} else {
						var b = s.children("." + r.slideNextClass);
						b.length > 0 && i.lazy.loadInSlide(a(b));
						var w = s.children("." + r.slidePrevClass);
						w.length > 0 && i.lazy.loadInSlide(a(w))
					}
			}
		},
		ee = {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					lazy: {
						initialImageLoaded: !1,
						load: J.load.bind(e),
						loadInSlide: J.loadInSlide.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
				},
				init: function () {
					var e = this;
					e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
				},
				scroll: function () {
					var e = this;
					e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
				},
				resize: function () {
					var e = this;
					e.params.lazy.enabled && e.lazy.load()
				},
				scrollbarDragMove: function () {
					var e = this;
					e.params.lazy.enabled && e.lazy.load()
				},
				transitionStart: function () {
					var e = this;
					e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
				},
				transitionEnd: function () {
					var e = this;
					e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
				}
			}
		},
		te = {
			LinearSpline: function (e, t) {
				var a = function () {
					var e, t, a;
					return function (i, s) {
						for (t = -1, e = i.length; e - t > 1;) i[a = e + t >> 1] <= s ? t = a : e = a;
						return e
					}
				}();
				this.x = e, this.y = t, this.lastIndex = e.length - 1;
				var i, s;
				return this.interpolate = function (e) {
					return e ? (s = a(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
				}, this
			},
			getInterpolateFunction: function (e) {
				var t = this;
				t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid))
			},
			setTranslate: function (e, t) {
				function a(e) {
					var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
					"slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), s = -r.controller.spline.interpolate(-t)), s && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), s = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, r), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				var i, s, r = this,
					n = r.controller.control;
				if (Array.isArray(n))
					for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof $ && a(n[o]);
				else n instanceof $ && t !== n && a(n)
			},
			setTransition: function (e, t) {
				function a(t) {
					t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
						r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
					}))
				}
				var i, s = this,
					r = s.controller.control;
				if (Array.isArray(r))
					for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof $ && a(r[i]);
				else r instanceof $ && t !== r && a(r)
			}
		},
		ae = {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					controller: {
						control: e.params.controller.control,
						getInterpolateFunction: te.getInterpolateFunction.bind(e),
						setTranslate: te.setTranslate.bind(e),
						setTransition: te.setTransition.bind(e)
					}
				})
			},
			on: {
				update: function () {
					var e = this;
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				resize: function () {
					var e = this;
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				observerUpdate: function () {
					var e = this;
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				setTranslate: function (e, t) {
					var a = this;
					a.controller.control && a.controller.setTranslate(e, t)
				},
				setTransition: function (e, t) {
					var a = this;
					a.controller.control && a.controller.setTransition(e, t)
				}
			}
		},
		ie = {
			makeElFocusable: function (e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function (e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function (e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function (e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function (e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function (t) {
				var a = this,
					i = a.params.a11y;
				if (13 === t.keyCode) {
					var s = e(t.target);
					a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)), a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)), a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click()
				}
			},
			notify: function (e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function () {
				var e = this;
				if (!e.params.loop) {
					var t = e.navigation,
						a = t.$nextEl,
						i = t.$prevEl;
					i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
				}
			},
			updatePagination: function () {
				var t = this,
					a = t.params.a11y;
				t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, s) {
					var r = e(s);
					t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
				})
			},
			init: function () {
				var e = this;
				e.$el.append(e.a11y.liveRegion);
				var t, a, i = e.params.a11y;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
			},
			destroy: function () {
				var e = this;
				e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
				var t, a;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), a && a.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
			}
		},
		se = {
			name: "a11y",
			params: {
				a11y: {
					enabled: !1,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function () {
				var t = this;
				l.extend(t, {
					a11y: {
						liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(ie).forEach(function (e) {
					t.a11y[e] = ie[e].bind(t)
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
				},
				toEdge: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.updateNavigation()
				},
				fromEdge: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.updateNavigation()
				},
				paginationUpdate: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.updatePagination()
				},
				destroy: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.destroy()
				}
			}
		},
		re = {
			init: function () {
				var e = this;
				if (e.params.history) {
					if (!s.history || !s.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
					var t = e.history;
					t.initialized = !0, t.paths = re.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState))
				}
			},
			destroy: function () {
				var e = this;
				e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState)
			},
			setHistoryPopState: function () {
				var e = this;
				e.history.paths = re.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
			},
			getPathValues: function () {
				var e = s.location.pathname.slice(1).split("/").filter(function (e) {
						return "" !== e
					}),
					t = e.length;
				return {
					key: e[t - 2],
					value: e[t - 1]
				}
			},
			setHistory: function (e, t) {
				var a = this;
				if (a.history.initialized && a.params.history.enabled) {
					var i = a.slides.eq(t),
						r = re.slugify(i.attr("data-history"));
					s.location.pathname.includes(e) || (r = e + "/" + r);
					var n = s.history.state;
					n && n.value === r || (a.params.history.replaceState ? s.history.replaceState({
						value: r
					}, null, r) : s.history.pushState({
						value: r
					}, null, r))
				}
			},
			slugify: function (e) {
				return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function (e, t, a) {
				var i = this;
				if (t)
					for (var s = 0, r = i.slides.length; s < r; s += 1) {
						var n = i.slides.eq(s);
						if (re.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
							var o = n.index();
							i.slideTo(o, e, a)
						}
					} else i.slideTo(0, e, a)
			}
		},
		ne = {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					history: {
						init: re.init.bind(e),
						setHistory: re.setHistory.bind(e),
						setHistoryPopState: re.setHistoryPopState.bind(e),
						scrollToSlide: re.scrollToSlide.bind(e),
						destroy: re.destroy.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.history.enabled && e.history.init()
				},
				destroy: function () {
					var e = this;
					e.params.history.enabled && e.history.destroy()
				},
				transitionEnd: function () {
					var e = this;
					e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
				}
			}
		},
		oe = {
			onHashCange: function () {
				var e = this,
					t = d.location.hash.replace("#", "");
				t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
			},
			setHash: function () {
				var e = this;
				if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
					if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
					else {
						var t = e.slides.eq(e.activeIndex),
							a = t.attr("data-hash") || t.attr("data-history");
						d.location.hash = a || ""
					}
			},
			init: function () {
				var t = this;
				if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
					t.hashNavigation.initialized = !0;
					var a = d.location.hash.replace("#", "");
					if (a)
						for (var i = 0, r = t.slides.length; i < r; i += 1) {
							var n = t.slides.eq(i);
							if ((n.attr("data-hash") || n.attr("data-history")) === a && !n.hasClass(t.params.slideDuplicateClass)) {
								var o = n.index();
								t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
							}
						}
					t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange)
				}
			},
			destroy: function () {
				var t = this;
				t.params.hashNavigation.watchState && e(s).off("hashchange", t.hashNavigation.onHashCange)
			}
		},
		le = {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					hashNavigation: {
						initialized: !1,
						init: oe.init.bind(e),
						destroy: oe.destroy.bind(e),
						setHash: oe.setHash.bind(e),
						onHashCange: oe.onHashCange.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.hashNavigation.enabled && e.hashNavigation.init()
				},
				destroy: function () {
					var e = this;
					e.params.hashNavigation.enabled && e.hashNavigation.destroy()
				},
				transitionEnd: function () {
					var e = this;
					e.hashNavigation.initialized && e.hashNavigation.setHash()
				}
			}
		},
		de = {
			run: function () {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					a = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = l.nextTick(function () {
					e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
				}, a)
			},
			start: function () {
				var e = this;
				return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
			},
			stop: function () {
				var e = this;
				return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
			},
			pause: function (e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 === e ? (t.autoplay.paused = !1, t.autoplay.run()) : t.$wrapperEl.transitionEnd(function () {
					t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
				})))
			}
		},
		pe = {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					disableOnInteraction: !0,
					stopOnLastSlide: !1
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					autoplay: {
						running: !1,
						paused: !1,
						run: de.run.bind(e),
						start: de.start.bind(e),
						stop: de.stop.bind(e),
						pause: de.pause.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.autoplay.enabled && e.autoplay.start()
				},
				beforeTransitionStart: function (e, t) {
					var a = this;
					a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
				},
				sliderFirstMove: function () {
					var e = this;
					e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
				},
				destroy: function () {
					var e = this;
					e.autoplay.running && e.autoplay.stop()
				}
			}
		},
		ce = {
			setTranslate: function () {
				for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
					var i = e.slides.eq(a),
						s = -i[0].swiperSlideOffset;
					e.params.virtualTranslate || (s -= e.translate);
					var r = 0;
					e.isHorizontal() || (r = s, s = 0);
					var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: n
					}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
				}
			},
			setTransition: function (e) {
				var t = this,
					a = t.slides,
					i = t.$wrapperEl;
				if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
					var s = !1;
					a.transitionEnd(function () {
						if (!s && t && !t.destroyed) {
							s = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
						}
					})
				}
			}
		},
		ue = {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					fadeEffect: {
						setTranslate: ce.setTranslate.bind(e),
						setTransition: ce.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("fade" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						l.extend(e.params, t), l.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					var e = this;
					"fade" === e.params.effect && e.fadeEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"fade" === t.params.effect && t.fadeEffect.setTransition(e)
				}
			}
		},
		he = {
			setTranslate: function () {
				var t, a = this,
					i = a.$el,
					s = a.$wrapperEl,
					r = a.slides,
					n = a.width,
					o = a.height,
					l = a.rtl,
					d = a.size,
					p = a.params.cubeEffect,
					c = a.isHorizontal(),
					u = a.virtual && a.params.virtual.enabled,
					h = 0;
				p.shadow && (c ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({
					height: n + "px"
				})) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
				for (var v = 0; v < r.length; v += 1) {
					var f = r.eq(v),
						g = v;
					u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
					var b = 90 * g,
						w = Math.floor(b / 360);
					l && (b = -b, w = Math.floor(-b / 360));
					var y = Math.max(Math.min(f[0].progress, 1), -1),
						x = 0,
						T = 0,
						E = 0;
					g % 4 == 0 ? (x = 4 * -w * d, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -w * d) : (g - 2) % 4 == 0 ? (x = d + 4 * w * d, E = d) : (g - 3) % 4 == 0 && (x = -d, E = 3 * d + 4 * d * w), l && (x = -x), c || (T = x, x = 0);
					var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
					if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(S), p.slideShadows) {
						var C = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
							M = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
						0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0))
					}
				}
				if (s.css({
						"-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + d / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + d / 2 + "px",
						"transform-origin": "50% 50% -" + d / 2 + "px"
					}), p.shadow)
					if (c) t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
					else {
						var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
							P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
							k = p.shadowScale,
							$ = p.shadowScale / P,
							I = p.shadowOffset;
						t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)")
					}
				var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;
				s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)")
			},
			setTransition: function (e) {
				var t = this,
					a = t.$el;
				t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
			}
		},
		ve = {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					cubeEffect: {
						setTranslate: he.setTranslate.bind(e),
						setTransition: he.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("cube" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						l.extend(e.params, t), l.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					var e = this;
					"cube" === e.params.effect && e.cubeEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"cube" === t.params.effect && t.cubeEffect.setTransition(e)
				}
			}
		},
		fe = {
			setTranslate: function () {
				for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
					var s = a.eq(i),
						r = s[0].progress;
					t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
					var n = -180 * r,
						o = 0,
						l = -s[0].swiperSlideOffset,
						d = 0;
					if (t.isHorizontal() ? t.rtl && (n = -n) : (d = l, l = 0, o = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length, t.params.flipEffect.slideShadows) {
						var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
							c = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
						0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
					}
					s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
				}
			},
			setTransition: function (e) {
				var t = this,
					a = t.slides,
					i = t.activeIndex,
					s = t.$wrapperEl;
				if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
					var r = !1;
					a.eq(i).transitionEnd(function () {
						if (!r && t && !t.destroyed) {
							r = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a])
						}
					})
				}
			}
		},
		me = {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					flipEffect: {
						setTranslate: fe.setTranslate.bind(e),
						setTransition: fe.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("flip" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						l.extend(e.params, t), l.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					var e = this;
					"flip" === e.params.effect && e.flipEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"flip" === t.params.effect && t.flipEffect.setTransition(e)
				}
			}
		},
		ge = {
			setTranslate: function () {
				for (var t = this, a = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, n = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, p = l ? a / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, u = o.depth, h = 0, v = s.length; h < v; h += 1) {
					var f = s.eq(h),
						g = n[h],
						b = (p - f[0].swiperSlideOffset - g / 2) / g * o.modifier,
						w = l ? c * b : 0,
						y = l ? 0 : c * b,
						x = -u * Math.abs(b),
						T = l ? 0 : o.stretch * b,
						E = l ? o.stretch * b : 0;
					Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0);
					var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
					if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
						var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
							M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
						0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = b > 0 ? b : 0), M.length && (M[0].style.opacity = -b > 0 ? -b : 0)
					}
				}
				m.ie && (r[0].style.perspectiveOrigin = p + "px 50%")
			},
			setTransition: function (e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		be = {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function () {
				var e = this;
				l.extend(e, {
					coverflowEffect: {
						setTranslate: ge.setTranslate.bind(e),
						setTransition: ge.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function () {
					var e = this;
					"coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
				}
			}
		};
	return $.use([I, L, D, O, H, X, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, ve, me, be]), $
});
//# sourceMappingURL=swiper.min.js.map


/**
 * Filterizr is a jQuery plugin that sorts, shuffles and applies stunning filters over
 * responsive galleries using CSS3 transitions and custom CSS effects.
 *
 * @author Yiotis Kaltsikis
 * @see {@link http://yiotis.net/filterizr}
 * @version 1.2.5
 * @license MIT License
 */
! function (t, i) {
	"use strict";
	if (!i) throw new Error("Filterizr requires jQuery to work.");
	var r = function (t) {
		this.init(t)
	};
	r.prototype = {
		init: function (t) {
			this.root = {
				x: 0,
				y: 0,
				w: t
			}
		},
		fit: function (t) {
			var i, r, n, e = t.length,
				o = e > 0 ? t[0].h : 0;
			for (this.root.h = o, i = 0; i < e; i++) n = t[i], (r = this.findNode(this.root, n.w, n.h)) ? n.fit = this.splitNode(r, n.w, n.h) : n.fit = this.growDown(n.w, n.h)
		},
		findNode: function (t, i, r) {
			return t.used ? this.findNode(t.right, i, r) || this.findNode(t.down, i, r) : i <= t.w && r <= t.h ? t : null
		},
		splitNode: function (t, i, r) {
			return t.used = !0, t.down = {
				x: t.x,
				y: t.y + r,
				w: t.w,
				h: t.h - r
			}, t.right = {
				x: t.x + i,
				y: t.y,
				w: t.w - i,
				h: r
			}, t
		},
		growDown: function (t, i) {
			var r;
			return this.root = {
				used: !0,
				x: 0,
				y: 0,
				w: this.root.w,
				h: this.root.h + i,
				down: {
					x: 0,
					y: this.root.h,
					w: this.root.w,
					h: i
				},
				right: this.root
			}, (r = this.findNode(this.root, t, i)) ? this.splitNode(r, t, i) : null
		}
	}, i.fn.filterizr = function () {
		var t = this,
			r = arguments;
		if (t._fltr || (t._fltr = i.fn.filterizr.prototype.init(t, "object" == typeof r[0] ? r[0] : void 0)), "string" == typeof r[0]) {
			if (r[0].lastIndexOf("_") > -1) throw new Error("Filterizr error: You cannot call private methods");
			if ("function" != typeof t._fltr[r[0]]) throw new Error("Filterizr error: There is no such function");
			t._fltr[r[0]](r[1], r[2])
		}
		return t
	}, i.fn.filterizr.prototype = {
		init: function (t, r) {
			var n = i(t).extend(i.fn.filterizr.prototype);
			return n.options = {
				animationDuration: .5,
				callbacks: {
					onFilteringStart: function () {},
					onFilteringEnd: function () {},
					onShufflingStart: function () {},
					onShufflingEnd: function () {},
					onSortingStart: function () {},
					onSortingEnd: function () {}
				},
				delay: 0,
				delayMode: "progressive",
				easing: "ease-out",
				filter: "all",
				filterOutCss: {
					opacity: 0,
					transform: "scale(0.5)"
				},
				filterInCss: {
					opacity: 1,
					transform: "scale(1)"
				},
				layout: "sameSize",
				setupControls: !0
			}, 0 === arguments.length && (r = n.options), 1 === arguments.length && "object" == typeof arguments[0] && (r = arguments[0]), r && n.setOptions(r), n.css({
				padding: 0,
				position: "relative"
			}), n._lastCategory = 0, n._isAnimating = !1, n._isShuffling = !1, n._isSorting = !1, n._mainArray = n._getFiltrItems(), n._subArrays = n._makeSubarrays(), n._activeArray = n._getCollectionByFilter(n.options.filter), n._toggledCategories = {}, n._typedText = i("input[data-search]").val() || "", n._uID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
				var i = 16 * Math.random() | 0;
				return ("x" == t ? i : 3 & i | 8).toString(16)
			}), n._setupEvents(), n.options.setupControls && n._setupControls(), n.filter(n.options.filter), n
		},
		filter: function (t) {
			var i = this,
				r = i._getCollectionByFilter(t);
			i.options.filter = t, i.trigger("filteringStart"), i._handleFiltering(r), i._isSearchActivated() && i.search(i._typedText)
		},
		toggleFilter: function (t) {
			var i = this,
				r = [];
			i.trigger("filteringStart"), t && (i._toggledCategories[t] ? delete i._toggledCategories[t] : i._toggledCategories[t] = !0), i._multifilterModeOn() ? (r = i._makeMultifilterArray(), i._handleFiltering(r), i._isSearchActivated() && i.search(i._typedText)) : (i.filter("all"), i._isSearchActivated() && i.search(i._typedText))
		},
		search: function (t) {
			var i = this,
				r = i._multifilterModeOn() ? i._makeMultifilterArray() : i._getCollectionByFilter(i.options.filter),
				n = [],
				e = 0;
			if (i._isSearchActivated())
				for (e = 0; e < r.length; e++) r[e].text().toLowerCase().indexOf(t.toLowerCase()) > -1 && n.push(r[e]);
			if (n.length > 0) i._handleFiltering(n);
			else if (i._isSearchActivated())
				for (e = 0; e < i._activeArray.length; e++) i._activeArray[e]._filterOut();
			else i._handleFiltering(r)
		},
		shuffle: function () {
			var t = this;
			t._isAnimating = !0, t._isShuffling = !0, t.trigger("shufflingStart"), t._mainArray = t._fisherYatesShuffle(t._mainArray), t._subArrays = t._makeSubarrays();
			var i = t._multifilterModeOn() ? t._makeMultifilterArray() : t._getCollectionByFilter(t.options.filter);
			t._isSearchActivated() ? t.search(t._typedText) : t._placeItems(i)
		},
		sort: function (t, i) {
			var r = this;
			if (t = t || "domIndex", i = i || "asc", r._isAnimating = !0, r._isSorting = !0, r.trigger("sortingStart"), "domIndex" !== t && "sortData" !== t && "w" !== t && "h" !== t)
				for (var n = 0; n < r._mainArray.length; n++) r._mainArray[n][t] = r._mainArray[n].data(t);
			r._mainArray.sort(r._comparator(t, i)), r._subArrays = r._makeSubarrays();
			var e = r._multifilterModeOn() ? r._makeMultifilterArray() : r._getCollectionByFilter(r.options.filter);
			r._isSearchActivated() ? r.search(r._typedText) : r._placeItems(e)
		},
		setOptions: function (t) {
			var i = this,
				r = 0;
			for (var n in t) i.options[n] = t[n];
			if (i._mainArray && (t.animationDuration || t.delay || t.easing || t.delayMode))
				for (r = 0; r < i._mainArray.length; r++) i._mainArray[r].css("transition", "all " + i.options.animationDuration + "s " + i.options.easing + " " + i._mainArray[r]._calcDelay() + "ms");
			t.callbacks && (t.callbacks.onFilteringStart || (i.options.callbacks.onFilteringStart = function () {}), t.callbacks.onFilteringEnd || (i.options.callbacks.onFilteringEnd = function () {}), t.callbacks.onShufflingStart || (i.options.callbacks.onShufflingStart = function () {}), t.callbacks.onShufflingEnd || (i.options.callbacks.onShufflingEnd = function () {}), t.callbacks.onSortingStart || (i.options.callbacks.onSortingStart = function () {}), t.callbacks.onSortingEnd || (i.options.callbacks.onSortingEnd = function () {})), i.options.filterInCss.transform || (i.options.filterInCss.transform = "translate3d(0,0,0)"), i.options.filterOutCss.transform || (i.options.filterOutCss.transform = "translate3d(0,0,0)")
		},
		_getFiltrItems: function () {
			var t = this,
				r = i(t.find(".filtr-item")),
				e = [];
			return i.each(r, function (r, o) {
				var a = i(o).extend(n)._init(r, t);
				e.push(a)
			}), e
		},
		_makeSubarrays: function () {
			for (var t = this, i = [], r = 0; r < t._lastCategory; r++) i.push([]);
			for (r = 0; r < t._mainArray.length; r++)
				if ("object" == typeof t._mainArray[r]._category)
					for (var n = t._mainArray[r]._category.length, e = 0; e < n; e++) i[t._mainArray[r]._category[e] - 1].push(t._mainArray[r]);
				else i[t._mainArray[r]._category - 1].push(t._mainArray[r]);
			return i
		},
		_makeMultifilterArray: function () {
			for (var t = this, i = [], r = {}, n = 0; n < t._mainArray.length; n++) {
				var e = t._mainArray[n],
					o = !1,
					a = e.domIndex in r == !1;
				if (Array.isArray(e._category)) {
					for (var s = 0; s < e._category.length; s++)
						if (e._category[s] in t._toggledCategories) {
							o = !0;
							break
						}
				} else e._category in t._toggledCategories && (o = !0);
				a && o && (r[e.domIndex] = !0, i.push(e))
			}
			return i
		},
		_setupControls: function () {
			var t = this;
			i("*[data-filter]").click(function () {
				var r = i(this).data("filter");
				t.options.filter !== r && t.filter(r)
			}), i("*[data-multifilter]").click(function () {
				var r = i(this).data("multifilter");
				"all" === r ? (t._toggledCategories = {}, t.filter("all")) : t.toggleFilter(r)
			}), i("*[data-shuffle]").click(function () {
				t.shuffle()
			}), i("*[data-sortAsc]").click(function () {
				var r = i("*[data-sortOrder]").val();
				t.sort(r, "asc")
			}), i("*[data-sortDesc]").click(function () {
				var r = i("*[data-sortOrder]").val();
				t.sort(r, "desc")
			}), i("input[data-search]").keyup(function () {
				t._typedText = i(this).val(), t._delayEvent(function () {
					t.search(t._typedText)
				}, 250, t._uID)
			})
		},
		_setupEvents: function () {
			var r = this;
			i(t).resize(function () {
				r._delayEvent(function () {
					r.trigger("resizeFiltrContainer")
				}, 250, r._uID)
			}), r.on("resizeFiltrContainer", function () {
				r._multifilterModeOn() ? r.toggleFilter() : r.filter(r.options.filter)
			}).on("filteringStart", function () {
				r.options.callbacks.onFilteringStart()
			}).on("filteringEnd", function () {
				r.options.callbacks.onFilteringEnd()
			}).on("shufflingStart", function () {
				r._isShuffling = !0, r.options.callbacks.onShufflingStart()
			}).on("shufflingEnd", function () {
				r.options.callbacks.onShufflingEnd(), r._isShuffling = !1
			}).on("sortingStart", function () {
				r._isSorting = !0, r.options.callbacks.onSortingStart()
			}).on("sortingEnd", function () {
				r.options.callbacks.onSortingEnd(), r._isSorting = !1
			})
		},
		_calcItemPositions: function () {
			var t = this,
				n = t._activeArray,
				e = 0,
				o = Math.round(t.width() / t.find(".filtr-item").outerWidth()),
				a = 0,
				s = n[0].outerWidth(),
				l = 0,
				f = 0,
				u = 0,
				c = 0,
				g = 0,
				_ = [];
			if ("packed" === t.options.layout) {
				i.each(t._activeArray, function (t, i) {
					i._updateDimensions()
				});
				var h = new r(t.outerWidth());
				for (h.fit(t._activeArray), c = 0; c < n.length; c++) _.push({
					left: n[c].fit.x,
					top: n[c].fit.y
				});
				e = h.root.h
			}
			if ("horizontal" === t.options.layout)
				for (a = 1, c = 1; c <= n.length; c++) s = n[c - 1].outerWidth(), l = n[c - 1].outerHeight(), _.push({
					left: f,
					top: u
				}), f += s, e < l && (e = l);
			else if ("vertical" === t.options.layout) {
				for (c = 1; c <= n.length; c++) l = n[c - 1].outerHeight(), _.push({
					left: f,
					top: u
				}), u += l;
				e = u
			} else if ("sameHeight" === t.options.layout) {
				a = 1;
				var d = t.outerWidth();
				for (c = 1; c <= n.length; c++) {
					s = n[c - 1].width();
					var p = n[c - 1].outerWidth(),
						y = 0;
					n[c] && (y = n[c].width()), _.push({
						left: f,
						top: u
					}), (g = f + s + y) > d ? (g = 0, f = 0, u += n[0].outerHeight(), a++) : f += p
				}
				e = a * n[0].outerHeight()
			} else if ("sameWidth" === t.options.layout) {
				for (c = 1; c <= n.length; c++) {
					if (_.push({
							left: f,
							top: u
						}), c % o == 0 && a++, f += s, u = 0, a > 0)
						for (g = a; g > 0;) u += n[c - o * g].outerHeight(), g--;
					c % o == 0 && (f = 0)
				}
				for (c = 0; c < o; c++) {
					for (var m = 0, v = c; n[v];) m += n[v].outerHeight(), v += o;
					m > e ? (e = m, m = 0) : m = 0
				}
			} else if ("sameSize" === t.options.layout) {
				for (c = 1; c <= n.length; c++) _.push({
					left: f,
					top: u
				}), f += s, c % o == 0 && (u += n[0].outerHeight(), f = 0);
				e = (a = Math.ceil(n.length / o)) * n[0].outerHeight()
			}
			return t.css("height", e), _
		},
		_handleFiltering: function (t) {
			for (var i = this, r = i._getArrayOfUniqueItems(i._activeArray, t), n = 0; n < r.length; n++) r[n]._filterOut();
			i._activeArray = t, i._placeItems(t)
		},
		_multifilterModeOn: function () {
			var t = this;
			return Object.keys(t._toggledCategories).length > 0
		},
		_isSearchActivated: function () {
			return this._typedText.length > 0
		},
		_placeItems: function (t) {
			var i = this;
			i._isAnimating = !0, i._itemPositions = i._calcItemPositions();
			for (var r = 0; r < t.length; r++) t[r]._filterIn(i._itemPositions[r])
		},
		_getCollectionByFilter: function (t) {
			var i = this;
			return "all" === t ? i._mainArray : i._subArrays[t - 1]
		},
		_makeDeepCopy: function (t) {
			var i = {};
			for (var r in t) i[r] = t[r];
			return i
		},
		_comparator: function (t, i) {
			return function (r, n) {
				return "asc" === i ? r[t] < n[t] ? -1 : r[t] > n[t] ? 1 : 0 : "desc" === i ? n[t] < r[t] ? -1 : n[t] > r[t] ? 1 : 0 : void 0
			}
		},
		_getArrayOfUniqueItems: function (t, i) {
			var r, n, e = [],
				o = {},
				a = i.length;
			for (r = 0; r < a; r++) o[i[r].domIndex] = !0;
			for (a = t.length, r = 0; r < a; r++)(n = t[r]).domIndex in o || e.push(n);
			return e
		},
		_delayEvent: function () {
			var t = {};
			return function (i, r, n) {
				if (null === n) throw Error("UniqueID needed");
				t[n] && clearTimeout(t[n]), t[n] = setTimeout(i, r)
			}
		}(),
		_fisherYatesShuffle: function (t) {
			for (var i, r, n = t.length; n;) r = Math.floor(Math.random() * n--), i = t[n], t[n] = t[r], t[r] = i;
			return t
		}
	};
	var n = {
		_init: function (t, i) {
			var r = this;
			return r._parent = i, r._category = r._getCategory(), r._lastPos = {}, r.domIndex = t, r.sortData = r.data("sort"), r.w = 0, r.h = 0, r._isFilteredOut = !0, r._filteringOut = !1, r._filteringIn = !1, r.css(i.options.filterOutCss).css({
				"-webkit-backface-visibility": "hidden",
				perspective: "1000px",
				"-webkit-perspective": "1000px",
				"-webkit-transform-style": "preserve-3d",
				position: "absolute",
				transition: "all " + i.options.animationDuration + "s " + i.options.easing + " " + r._calcDelay() + "ms"
			}), r.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
				r._onTransitionEnd()
			}), r
		},
		_updateDimensions: function () {
			var t = this;
			t.w = t.outerWidth(), t.h = t.outerHeight()
		},
		_calcDelay: function () {
			var t = this,
				i = 0;
			return "progressive" === t._parent.options.delayMode ? i = t._parent.options.delay * t.domIndex : t.domIndex % 2 == 0 && (i = t._parent.options.delay), i
		},
		_getCategory: function () {
			var t = this,
				i = t.data("category");
			if ("string" == typeof i) {
				i = i.split(", ");
				for (var r = 0; r < i.length; r++) {
					if (isNaN(parseInt(i[r]))) throw new Error("Filterizr: the value of data-category must be a number, starting from value 1 and increasing.");
					parseInt(i[r]) > t._parent._lastCategory && (t._parent._lastCategory = parseInt(i[r]))
				}
			} else i > t._parent._lastCategory && (t._parent._lastCategory = i);
			return i
		},
		_onTransitionEnd: function () {
			var t = this;
			t._filteringOut ? (i(t).addClass("filteredOut"), t._isFilteredOut = !0, t._filteringOut = !1) : t._filteringIn && (t._isFilteredOut = !1, t._filteringIn = !1), t._parent._isAnimating && (t._parent._isShuffling ? t._parent.trigger("shufflingEnd") : t._parent._isSorting ? t._parent.trigger("sortingEnd") : t._parent.trigger("filteringEnd"), t._parent._isAnimating = !1)
		},
		_filterOut: function () {
			var t = this,
				i = t._parent._makeDeepCopy(t._parent.options.filterOutCss);
			i.transform += " translate3d(" + t._lastPos.left + "px," + t._lastPos.top + "px, 0)", t.css(i), t.css("pointer-events", "none"), t._filteringOut = !0
		},
		_filterIn: function (t) {
			var r = this,
				n = r._parent._makeDeepCopy(r._parent.options.filterInCss);
			i(r).removeClass("filteredOut"), r._filteringIn = !0, r._lastPos = t, r.css("pointer-events", "auto"), n.transform += " translate3d(" + t.left + "px," + t.top + "px, 0)", r.css(n)
		}
	}
}(this, jQuery);
/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this = this;
(function (v, p) {
	"function" === typeof define && define.amd ? define([], p) : "object" === typeof module && module.exports ? module.exports = p() : v.anime = p()
})(this, function () {
	function v(a) {
		if (!g.col(a)) try {
			return document.querySelectorAll(a)
		} catch (b) {}
	}

	function p(a) {
		return a.reduce(function (a, d) {
			return a.concat(g.arr(d) ? p(d) : d)
		}, [])
	}

	function w(a) {
		if (g.arr(a)) return a;
		g.str(a) && (a = v(a) || a);
		return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
	}

	function F(a, b) {
		return a.some(function (a) {
			return a === b
		})
	}

	function A(a) {
		var b = {},
			d;
		for (d in a) b[d] = a[d];
		return b
	}

	function G(a, b) {
		var d = A(a),
			c;
		for (c in a) d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
		return d
	}

	function B(a, b) {
		var d = A(a),
			c;
		for (c in b) d[c] = g.und(a[c]) ? b[c] : a[c];
		return d
	}

	function S(a) {
		a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, d, h) {
			return b + b + d + d + h + h
		});
		var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
		a = parseInt(b[1], 16);
		var d = parseInt(b[2], 16),
			b = parseInt(b[3], 16);
		return "rgb(" + a + "," + d + "," + b + ")"
	}

	function T(a) {
		function b(a, b, c) {
			0 >
				c && (c += 1);
			1 < c && --c;
			return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
		}
		var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
		a = parseInt(d[1]) / 360;
		var c = parseInt(d[2]) / 100,
			d = parseInt(d[3]) / 100;
		if (0 == c) c = d = a = d;
		else {
			var e = .5 > d ? d * (1 + c) : d + c - d * c,
				l = 2 * d - e,
				c = b(l, e, a + 1 / 3),
				d = b(l, e, a);
			a = b(l, e, a - 1 / 3)
		}
		return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")"
	}

	function x(a) {
		if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2]
	}

	function U(a) {
		if (-1 < a.indexOf("translate")) return "px";
		if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg"
	}

	function H(a, b) {
		return g.fnc(a) ? a(b.target, b.id, b.total) : a
	}

	function C(a, b) {
		if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
	}

	function I(a, b) {
		if (g.dom(a) && F(V, b)) return "transform";
		if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute";
		if (g.dom(a) && "transform" !== b && C(a, b)) return "css";
		if (null != a[b]) return "object"
	}

	function W(a, b) {
		var d = U(b),
			d = -1 < b.indexOf("scale") ?
			1 : 0 + d;
		a = a.style.transform;
		if (!a) return d;
		for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);) e.push(c[1]), l.push(c[2]);
		a = l.filter(function (a, c) {
			return e[c] === b
		});
		return a.length ? a[0] : d
	}

	function J(a, b) {
		switch (I(a, b)) {
			case "transform":
				return W(a, b);
			case "css":
				return C(a, b);
			case "attribute":
				return a.getAttribute(b)
		}
		return a[b] || 0
	}

	function K(a, b) {
		var d = /^(\*=|\+=|-=)/.exec(a);
		if (!d) return a;
		b = parseFloat(b);
		a = parseFloat(a.replace(d[0], ""));
		switch (d[0][0]) {
			case "+":
				return b + a;
			case "-":
				return b - a;
			case "*":
				return b *
					a
		}
	}

	function D(a) {
		return g.obj(a) && a.hasOwnProperty("totalLength")
	}

	function X(a, b) {
		function d(c) {
			c = void 0 === c ? 0 : c;
			return a.el.getPointAtLength(1 <= b + c ? b + c : 0)
		}
		var c = d(),
			e = d(-1),
			l = d(1);
		switch (a.property) {
			case "x":
				return c.x;
			case "y":
				return c.y;
			case "angle":
				return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI
		}
	}

	function L(a, b) {
		var d = /-?\d*\.?\d+/g;
		a = D(a) ? a.totalLength : a;
		if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;
		else {
			var c = x(a);
			a = c ? a.substr(0, a.length - c.length) : a;
			b = b ? a + b : a
		}
		b += "";
		return {
			original: b,
			numbers: b.match(d) ? b.match(d).map(Number) : [0],
			strings: b.split(d)
		}
	}

	function Y(a, b) {
		return b.reduce(function (b, c, e) {
			return b + a[e - 1] + c
		})
	}

	function M(a) {
		return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function (a, d, c) {
			return c.indexOf(a) === d
		})
	}

	function Z(a) {
		var b = M(a);
		return b.map(function (a, c) {
			return {
				target: a,
				id: c,
				total: b.length
			}
		})
	}

	function aa(a, b) {
		var d = A(b);
		if (g.arr(a)) {
			var c = a.length;
			2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = {
				value: a
			}
		}
		return w(a).map(function (a, c) {
			c = c ? 0 : b.delay;
			a = g.obj(a) && !D(a) ? a : {
				value: a
			};
			g.und(a.delay) && (a.delay = c);
			return a
		}).map(function (a) {
			return B(a, d)
		})
	}

	function ba(a, b) {
		var d = {},
			c;
		for (c in a) {
			var e = H(a[c], b);
			g.arr(e) && (e = e.map(function (a) {
				return H(a, b)
			}), 1 === e.length && (e = e[0]));
			d[c] = e
		}
		d.duration = parseFloat(d.duration);
		d.delay = parseFloat(d.delay);
		return d
	}

	function ca(a) {
		return g.arr(a) ? y.apply(this, a) : N[a]
	}

	function da(a, b) {
		var d;
		return a.tweens.map(function (c) {
			c = ba(c, b);
			var e = c.value,
				l = J(b.target, a.name),
				h = d ? d.to.original : l,
				h = g.arr(e) ? e[0] : h,
				m = K(g.arr(e) ?
					e[1] : e, h),
				l = x(m) || x(h) || x(l);
			c.isPath = D(e);
			c.from = L(h, l);
			c.to = L(m, l);
			c.start = d ? d.end : a.offset;
			c.end = c.start + c.delay + c.duration;
			c.easing = ca(c.easing);
			c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;
			g.col(c.from.original) && (c.round = 1);
			return d = c
		})
	}

	function ea(a, b) {
		return p(a.map(function (a) {
			return b.map(function (b) {
				var c = I(a.target, b.name);
				if (c) {
					var d = da(b, a);
					b = {
						type: c,
						property: b.name,
						animatable: a,
						tweens: d,
						duration: d[d.length - 1].end,
						delay: d[0].delay
					}
				} else b = void 0;
				return b
			})
		})).filter(function (a) {
			return !g.und(a)
		})
	}

	function O(a, b, d) {
		var c = "delay" === a ? Math.min : Math.max;
		return b.length ? c.apply(Math, b.map(function (b) {
			return b[a]
		})) : d[a]
	}

	function fa(a) {
		var b = G(ga, a),
			d = G(ha, a),
			c = Z(a.targets),
			e = [],
			g = B(b, d),
			h;
		for (h in a) g.hasOwnProperty(h) || "targets" === h || e.push({
			name: h,
			offset: g.offset,
			tweens: aa(a[h], d)
		});
		a = ea(c, e);
		return B(b, {
			children: [],
			animatables: c,
			animations: a,
			duration: O("duration", a, d),
			delay: O("delay", a, d)
		})
	}

	function n(a) {
		function b() {
			return window.Promise && new Promise(function (a) {
				return Q = a
			})
		}

		function d(a) {
			return f.reversed ?
				f.duration - a : a
		}

		function c(a) {
			for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
				var g = d[b],
					h = g.animatable,
					m = g.tweens;
				e.tween = m.filter(function (b) {
					return a < b.end
				})[0] || m[m.length - 1];
				e.isPath$1 = e.tween.isPath;
				e.round = e.tween.round;
				e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);
				m = Y(e.tween.to.numbers.map(function (a) {
					return function (b, c) {
						c = a.isPath$1 ? 0 : a.tween.from.numbers[c];
						b = c + a.eased * (b - c);
						a.isPath$1 && (b = X(a.tween.value,
							b));
						a.round && (b = Math.round(b * a.round) / a.round);
						return b
					}
				}(e)), e.tween.to.strings);
				ia[g.type](h.target, g.property, m, c, h.id);
				g.currentValue = m;
				b++;
				e = {
					isPath$1: e.isPath$1,
					tween: e.tween,
					eased: e.eased,
					round: e.round
				}
			}
			if (c)
				for (var k in c) E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[E] = c[k].join(" ");
			f.currentTime = a;
			f.progress = a / f.duration * 100
		}

		function e(a) {
			if (f[a]) f[a](f)
		}

		function g() {
			f.remaining && !0 !== f.remaining && f.remaining--
		}

		function h(a) {
			var h = f.duration,
				l = f.offset,
				n = f.delay,
				P = f.currentTime,
				q = f.reversed,
				r = d(a),
				r = Math.min(Math.max(r, 0), h);
			if (f.children) {
				var p = f.children;
				if (r >= f.currentTime)
					for (var u = 0; u < p.length; u++) p[u].seek(r);
				else
					for (u = p.length; u--;) p[u].seek(r)
			}
			r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e("begin")), e("run")) : (r <= l && 0 !== P && (c(0), q && g()), r >= h && P !== h && (c(h), q || g()));
			a >= h && (f.remaining ? (t = m, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), "Promise" in window && (Q(), R = b()), f.completed || (f.completed = !0, e("complete"))),
				k = 0);
			e("update")
		}
		a = void 0 === a ? {} : a;
		var m, t, k = 0,
			Q = null,
			R = b(),
			f = fa(a);
		f.reset = function () {
			var a = f.direction,
				b = f.loop;
			f.currentTime = 0;
			f.progress = 0;
			f.paused = !0;
			f.began = !1;
			f.completed = !1;
			f.reversed = "reverse" === a;
			f.remaining = "alternate" === a && 1 === b ? 2 : b;
			for (a = f.children.length; a--;) b = f.children[a], b.seek(b.offset), b.reset()
		};
		f.tick = function (a) {
			m = a;
			t || (t = m);
			h((k + m - t) * n.speed)
		};
		f.seek = function (a) {
			h(d(a))
		};
		f.pause = function () {
			var a = q.indexOf(f); - 1 < a && q.splice(a, 1);
			f.paused = !0
		};
		f.play = function () {
			f.paused && (f.paused = !1, t = 0, k = d(f.currentTime), q.push(f), z || ja())
		};
		f.reverse = function () {
			f.reversed = !f.reversed;
			t = 0;
			k = d(f.currentTime)
		};
		f.restart = function () {
			f.pause();
			f.reset();
			f.play()
		};
		f.finished = R;
		f.reset();
		f.autoplay && f.play();
		return f
	}
	var ga = {
			update: void 0,
			begin: void 0,
			run: void 0,
			complete: void 0,
			loop: 1,
			direction: "normal",
			autoplay: !0,
			offset: 0
		},
		ha = {
			duration: 1E3,
			delay: 0,
			easing: "easeOutElastic",
			elasticity: 500,
			round: 0
		},
		V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
		E, g = {
			arr: function (a) {
				return Array.isArray(a)
			},
			obj: function (a) {
				return -1 < Object.prototype.toString.call(a).indexOf("Object")
			},
			svg: function (a) {
				return a instanceof SVGElement
			},
			dom: function (a) {
				return a.nodeType || g.svg(a)
			},
			str: function (a) {
				return "string" === typeof a
			},
			fnc: function (a) {
				return "function" === typeof a
			},
			und: function (a) {
				return "undefined" === typeof a
			},
			hex: function (a) {
				return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
			},
			rgb: function (a) {
				return /^rgb/.test(a)
			},
			hsl: function (a) {
				return /^hsl/.test(a)
			},
			col: function (a) {
				return g.hex(a) ||
					g.rgb(a) || g.hsl(a)
			}
		},
		y = function () {
			function a(a, d, c) {
				return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a
			}
			return function (b, d, c, e) {
				if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
					var g = new Float32Array(11);
					if (b !== d || c !== e)
						for (var h = 0; 11 > h; ++h) g[h] = a(.1 * h, b, c);
					return function (h) {
						if (b === d && c === e) return h;
						if (0 === h) return 0;
						if (1 === h) return 1;
						for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k) m += .1;
						--k;
						var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1,
							l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
						if (.001 <= l) {
							for (m = 0; 4 > m; ++m) {
								l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
								if (0 === l) break;
								var n = a(k, b, c) - h,
									k = k - n / l
							}
							h = k
						} else if (0 === l) h = k;
						else {
							var k = m,
								m = m + .1,
								f = 0;
							do n = k + (m - k) / 2, l = a(n, b, c) - h, 0 < l ? m = n : k = n; while (1e-7 < Math.abs(l) && 10 > ++f);
							h = n
						}
						return a(h, d, e)
					}
				}
			}
		}(),
		N = function () {
			function a(a, b) {
				return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b)
			}
			var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
				d = {
					In: [
						[.55, .085, .68, .53],
						[.55, .055, .675, .19],
						[.895, .03, .685, .22],
						[.755, .05, .855, .06],
						[.47, 0, .745, .715],
						[.95, .05, .795, .035],
						[.6, .04, .98,
							.335
						],
						[.6, -.28, .735, .045], a
					],
					Out: [
						[.25, .46, .45, .94],
						[.215, .61, .355, 1],
						[.165, .84, .44, 1],
						[.23, 1, .32, 1],
						[.39, .575, .565, 1],
						[.19, 1, .22, 1],
						[.075, .82, .165, 1],
						[.175, .885, .32, 1.275],
						function (b, c) {
							return 1 - a(1 - b, c)
						}
					],
					InOut: [
						[.455, .03, .515, .955],
						[.645, .045, .355, 1],
						[.77, 0, .175, 1],
						[.86, 0, .07, 1],
						[.445, .05, .55, .95],
						[1, 0, 0, 1],
						[.785, .135, .15, .86],
						[.68, -.55, .265, 1.55],
						function (b, c) {
							return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2
						}
					]
				},
				c = {
					linear: y(.25, .25, .75, .75)
				},
				e = {},
				l;
			for (l in d) e.type = l, d[e.type].forEach(function (a) {
				return function (d,
					e) {
					c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d)
				}
			}(e)), e = {
				type: e.type
			};
			return c
		}(),
		ia = {
			css: function (a, b, d) {
				return a.style[b] = d
			},
			attribute: function (a, b, d) {
				return a.setAttribute(b, d)
			},
			object: function (a, b, d) {
				return a[b] = d
			},
			transform: function (a, b, d, c, e) {
				c[e] || (c[e] = []);
				c[e].push(b + "(" + d + ")")
			}
		},
		q = [],
		z = 0,
		ja = function () {
			function a() {
				z = requestAnimationFrame(b)
			}

			function b(b) {
				var c = q.length;
				if (c) {
					for (var d = 0; d < c;) q[d] && q[d].tick(b), d++;
					a()
				} else cancelAnimationFrame(z), z = 0
			}
			return a
		}();
	n.version = "2.0.2";
	n.speed = 1;
	n.running = q;
	n.remove = function (a) {
		a = M(a);
		for (var b = q.length; b--;)
			for (var d = q[b], c = d.animations, e = c.length; e--;) F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause())
	};
	n.getValue = J;
	n.path = function (a, b) {
		var d = g.str(a) ? v(a)[0] : a,
			c = b || 100;
		return function (a) {
			return {
				el: d,
				property: a,
				totalLength: d.getTotalLength() * (c / 100)
			}
		}
	};
	n.setDashoffset = function (a) {
		var b = a.getTotalLength();
		a.setAttribute("stroke-dasharray", b);
		return b
	};
	n.bezier = y;
	n.easings = N;
	n.timeline = function (a) {
		var b = n(a);
		b.pause();
		b.duration = 0;
		b.add = function (a) {
			b.children.forEach(function (a) {
				a.began = !0;
				a.completed = !0
			});
			w(a).forEach(function (a) {
				var c = b.duration,
					d = a.offset;
				a.autoplay = !1;
				a.offset = g.und(d) ? c : K(d, c);
				b.seek(a.offset);
				a = n(a);
				a.duration > c && (b.duration = a.duration);
				a.began = !0;
				b.children.push(a)
			});
			b.reset();
			b.seek(0);
			b.autoplay && b.restart();
			return b
		};
		return b
	};
	n.random = function (a, b) {
		return Math.floor(Math.random() * (b - a + 1)) + a
	};
	return n
});

// Unite Gallery, Version: 1.7.45, released 27 Feb 2017 

function debugLine(e, t, i) {
	e === !0 && (e = "true"), e === !1 && (e = "false");
	var n = e;
	if ("object" == typeof e) {
		n = "";
		for (name in e) {
			var r = e[name];
			n += " " + name + ": " + r
		}
	}
	if (1 != t || i || (n += " " + Math.random()), 1 == i) {
		var o = jQuery("#debug_line");
		o.width(200), o.height() >= 500 && o.html("");
		var a = o.html();
		n = a + "<br> -------------- <br>" + n
	}
	jQuery("#debug_line").show().html(n)
}

function debugSide(e) {
	var t = "";
	for (name in e) {
		var i = e[name];
		t += name + " : " + i + "<br>"
	}
	jQuery("#debug_side").show().html(t)
}

function trace(e) {
	"undefined" != typeof console && console.log(e)
}

function UGFunctions() {
	function e(e, t, i) {
		t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
	}
	var t = null,
		i = this,
		n = {
			starTime: 0,
			arrThemes: [],
			isTouchDevice: -1,
			isRgbaSupported: -1,
			timeCache: {},
			dataCache: {},
			lastEventType: "",
			lastEventTime: 0,
			lastTouchStartElement: null,
			touchThreshold: 700,
			handle: null
		};
	this.debugVar = "", this.z__________FULL_SCREEN___________ = function () {}, this.toFullscreen = function (e, t) {
		if (e.requestFullscreen) e.requestFullscreen();
		else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
		else if (e.webkitRequestFullscreen) e.webkitRequestFullscreen();
		else {
			if (!e.msRequestFullscreen) return !1;
			e.msRequestFullscreen()
		}
		return !0
	}, this.exitFullscreen = function () {
		if (0 == i.isFullScreen()) return !1;
		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.cancelFullScreen) document.cancelFullScreen();
		else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
		else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		else {
			if (!document.msExitFullscreen) return !1;
			document.msExitFullscreen()
		}
		return !0
	}, this.addFullScreenChangeEvent = function (t) {
		document.webkitCancelFullScreen ? e("webkitfullscreenchange", document, t) : document.msExitFullscreen ? e("MSFullscreenChange", document, t) : document.mozCancelFullScreen ? e("mozfullscreenchange", document, t) : e("fullscreenchange", document, t)
	}, this.destroyFullScreenChangeEvent = function () {
		jQuery(document).unbind("fullscreenChange"), jQuery(document).unbind("mozfullscreenchange"), jQuery(document).unbind("webkitfullscreenchange"), jQuery(document).unbind("MSFullscreenChange")
	}, this.getFullScreenElement = function () {
		var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
		return e
	}, this.isFullScreen = function () {
		var e = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
		return e = e ? !0 : !1
	}, this.z__________GET_PROPS___________ = function () {}, this.getBrowserPrefix = function () {
		if (null !== t) return t;
		var e = ["webkit", "Moz", "ms", "O"],
			i = document.createElement("div");
		for (var n in e) {
			var r = e[n];
			if (r + "Transform" in i.style) return r = r.toLowerCase(), t = r, r
		}
		return t = "", ""
	}, this.getImageInsideParentDataByImage = function (e, t, n) {
		var r = e.parent(),
			o = i.getImageOriginalSize(e),
			a = i.getImageInsideParentData(r, o.width, o.height, t, n);
		return a
	}, this.getImageInsideParentData = function (e, t, i, n, r, o, a) {
		if (!r) var r = {};
		var s = {};
		if ("undefined" == typeof o) var o = e.width();
		if ("undefined" == typeof a) var a = e.height();
		r.padding_left && (o -= r.padding_left), r.padding_right && (o -= r.padding_right), r.padding_top && (a -= r.padding_top), r.padding_bottom && (a -= r.padding_bottom);
		var l = null,
			u = "100%",
			d = null,
			_ = null,
			g = "display:block;margin:0px auto;";
		if (t > 0 && i > 0) {
			if ("down" == n && o > t && a > i) u = i, l = t, _ = (o - l) / 2, d = (a - u) / 2;
			else if ("fill" == n) {
				var c = t / i;
				u = a, l = u * c, o > l ? (l = o, u = l / c, _ = 0, d = Math.round((u - a) / 2 * -1)) : (d = 0, _ = Math.round((l - o) / 2 * -1))
			} else {
				var c = t / i;
				u = a, l = u * c, d = 0, _ = (o - l) / 2, "fitvert" != n && l > o && (l = o, u = l / c, _ = 0, d = (a - u) / 2)
			}
			l = Math.floor(l), u = Math.floor(u), d = Math.floor(d), _ = Math.floor(_), g = "position:absolute;"
		}
		return r.padding_top && (d += r.padding_top), r.padding_left && (_ += r.padding_left), s.imageWidth = l, s.imageHeight = u, s.imageTop = d, s.imageLeft = _, s.imageRight = _ + l, 0 == d || "100%" == u ? s.imageBottom = null : s.imageBottom = d + u, s.style = g, s
	}, this.getElementCenterPosition = function (e, t) {
		var n = e.parent(),
			r = i.getElementSize(e),
			o = i.getElementSize(n),
			a = o.width,
			s = o.height;
		t && void 0 !== t.padding_top && (s -= t.padding_top), t && void 0 !== t.padding_bottom && (s -= t.padding_bottom), t && void 0 !== t.padding_left && (a -= t.padding_left), t && void 0 !== t.padding_right && (a -= t.padding_right);
		var l = {};
		return l.left = Math.round((a - r.width) / 2), l.top = Math.round((s - r.height) / 2), t && void 0 !== t.padding_top && (l.top += t.padding_top), t && void 0 !== t.padding_left && (l.left += t.padding_left), l
	}, this.getElementCenterPoint = function (e, t) {
		if (!t) var t = !1;
		var n = i.getElementSize(e),
			r = {};
		return r.x = n.width / 2, r.y = n.height / 2, 1 == t && (r.x += n.left, r.y += n.top), r.x = Math.round(r.x), r.y = Math.round(r.y), r
	}, this.getMousePosition = function (e, t) {
		var i = {
			pageX: e.pageX,
			pageY: e.pageY,
			clientX: e.clientX,
			clientY: e.clientY
		};
		if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length > 0 && (i.pageX = e.originalEvent.touches[0].pageX, i.pageY = e.originalEvent.touches[0].pageY, i.clientX = e.originalEvent.touches[0].clientX, i.clientY = e.originalEvent.touches[0].clientY), t) {
			var n = t.offset();
			i.mouseX = i.pageX - n.left, i.mouseY = i.pageY - n.top
		}
		return i
	}, this.getMouseElementPoint = function (e, t) {
		var n = {
				x: e.pageX,
				y: e.pageY
			},
			r = i.getElementLocalPoint(n, t);
		return r
	}, this.getElementLocalPoint = function (e, t) {
		var i = {},
			n = t.offset();
		return i.x = Math.round(e.x - n.left), i.y = Math.round(e.y - n.top), i
	}, this.getImageOriginalSize = function (e, t, i) {
		if ("undefined" != typeof t && "undefined" != typeof i) return {
			width: t,
			height: i
		};
		var n = e[0];
		if ("undefined" == typeof n) throw new Error("getImageOriginalSize error - Image not found");
		var r = {};
		if ("undefined" == typeof n.naturalWidth) {
			if ("number" == typeof e.data("naturalWidth")) {
				var r = {};
				return r.width = e.data("naturalWidth"), r.height = e.data("naturalHeight"), r
			}
			var o = new Image;
			return o.src = n.src, o.complete ? (r.width = o.width, r.height = o.height, e.data("naturalWidth", r.width), e.data("naturalHeight", r.height), r) : {
				width: 0,
				height: 0
			}
		}
		return r.width = n.naturalWidth, r.height = n.naturalHeight, r
	}, this.getimageRatio = function (e) {
		var t = i.getImageOriginalSize(e),
			n = i.getElementSize(e),
			r = n.width / t.width;
		return r
	}, this.isImageFitParent = function (e) {
		var t = e.parent(),
			n = i.getElementSize(e),
			r = i.getElementSize(t);
		return n.width <= r.width && n.height <= r.height ? !0 : !1
	}, this.getElementSize = function (e) {
		if (void 0 === e) throw new Error("Can't get size, empty element");
		var t = e.position();
		return t.height = e.outerHeight(), t.width = e.outerWidth(), t.left = Math.round(t.left), t.top = Math.round(t.top), t.right = t.left + t.width, t.bottom = t.top + t.height, t
	}, this.isElementBiggerThenParent = function (e) {
		var t = e.parent(),
			n = i.getElementSize(e),
			r = i.getElementSize(t);
		return n.width > r.width || n.height > r.height ? !0 : !1
	}, this.isPointInsideElement = function (e, t) {
		var i = e.x >= 0 && e.x < t.width;
		if (0 == i) return !1;
		var n = e.y >= 0 && e.y < t.height;
		return 0 == n ? !1 : !0
	}, this.getElementRelativePos = function (e, t, n, r) {
		if (!r) var r = e.parent();
		if ("number" == typeof e) var o = {
			width: e,
			height: e
		};
		else var o = i.getElementSize(e);
		var a = i.getElementSize(r);
		switch (t) {
			case "top":
			case "left":
				t = 0, n && (t += n);
				break;
			case "center":
				t = Math.round((a.width - o.width) / 2), n && (t += n);
				break;
			case "right":
				t = a.width - o.width, n && (t -= n);
				break;
			case "middle":
				t = Math.round((a.height - o.height) / 2), n && (t += n);
				break;
			case "bottom":
				t = a.height - o.height, n && (t -= n)
		}
		return t
	}, this.z_________SET_ELEMENT_PROPS_______ = function () {}, this.zoomImageInsideParent = function (e, t, n, r, o, a, s) {
		if (!n) var n = 1.2;
		if (!o) var o = "fit";
		var l, u, d, _, g = n,
			c = e.parent(),
			h = i.getElementSize(e),
			p = i.getImageOriginalSize(e),
			f = !1,
			m = 0,
			v = 0,
			b = 0,
			y = 0;
		if (r) {
			var I = i.getMouseElementPoint(r, e);
			f = i.isPointInsideElement(I, h), b = I.x, y = I.y
		} else f = !1;
		if (0 == f) {
			var w = i.getElementCenterPoint(e);
			b = w.x, y = w.y
		}
		if (1 == t) l = h.height * g, u = h.width * g, 0 != b && (m = -(b * g - b)), 0 != y && (v = -(y * g - y));
		else {
			l = h.height / g, u = h.width / g;
			var E = i.getImageInsideParentData(c, p.width, p.height, o, s);
			if (u < E.imageWidth) return i.scaleImageFitParent(e, p.width, p.height, o, s), !0;
			1 == f && (0 != b && (m = -(b / g - b)), 0 != y && (v = -(y / g - y)))
		}
		if (a) {
			var T = 1;
			if (0 != p.width && (T = u / p.width), T > a) return !1
		}
		if (i.setElementSize(e, u, l), 0 == t && 0 == f) {
			var S = i.getElementCenterPosition(e);
			d = S.left, _ = S.top
		} else d = h.left + m, _ = h.top + v;
		return i.placeElement(e, d, _), !0
	}, this.placeElement = function (e, t, n, r, o, a) {
		if (0 == jQuery.isNumeric(t) || 0 == jQuery.isNumeric(n)) {
			if (!a) var a = e.parent();
			var s = i.getElementSize(e),
				l = i.getElementSize(a)
		}
		if (0 == jQuery.isNumeric(t)) switch (t) {
			case "left":
				t = 0, r && (t += r);
				break;
			case "center":
				t = Math.round((l.width - s.width) / 2), r && (t += r);
				break;
			case "right":
				t = l.width - s.width, r && (t -= r)
		}
		if (0 == jQuery.isNumeric(n)) switch (n) {
			case "top":
				n = 0, o && (n += o);
				break;
			case "middle":
			case "center":
				n = Math.round((l.height - s.height) / 2), o && (n += o);
				break;
			case "bottom":
				n = l.height - s.height, o && (n -= o)
		}
		var u = {
			position: "absolute",
			margin: "0px"
		};
		null !== t && (u.left = t), null !== n && (u.top = n), e.css(u)
	}, this.placeElementInParentCenter = function (e) {
		i.placeElement(e, "center", "middle")
	}, this.setElementSizeAndPosition = function (e, t, i, n, r) {
		var o = {
			width: n + "px",
			height: r + "px",
			left: t + "px",
			top: i + "px",
			position: "absolute",
			margin: "0px"
		};
		e.css(o)
	}, this.setElementSize = function (e, t, i) {
		var n = {
			width: t + "px"
		};
		null !== i && "undefined" != typeof i && (n.height = i + "px"), e.css(n)
	}, this.cloneElementSizeAndPos = function (e, t, n, r, o) {
		var a = e.position();
		if (void 0 == a) throw new Error("Can't get size, empty element");
		n === !0 ? (a.height = e.outerHeight(), a.width = e.outerWidth()) : (a.height = e.height(), a.width = e.width()), a.left = Math.round(a.left), a.top = Math.round(a.top), r && (a.left += r), o && (a.top += o), i.setElementSizeAndPosition(t, a.left, a.top, a.width, a.height)
	}, this.placeImageInsideParent = function (e, t, n, r, o, a) {
		var s = i.getImageInsideParentData(t, n, r, o, a),
			l = "<img";
		null !== s.imageWidth && (l += " width = '" + s.imageWidth + "'", s.style += "width:" + s.imageWidth + ";"), null != s.imageHeight && ("100%" == s.imageHeight ? (l += " height = '" + s.imageHeight + "'", s.style += "height:" + s.imageHeight + ";") : (l += " height = '" + s.imageHeight + "'", s.style += "height:" + s.imageHeight + "px;")), null !== s.imageTop && (s.style += "top:" + s.imageTop + "px;"), null !== s.imageLeft && (s.style += "left:" + s.imageLeft + "px;"), e = i.escapeDoubleSlash(e), l += " style='" + s.style + "'", l += ' src="' + e + '"', l += ">", t.html(l);
		var u = t.children("img");
		return u
	}, this.scaleImageCoverParent = function (e, t, n) {
		if ("number" == typeof t) var r = t,
			o = n;
		else var r = t.outerWidth(),
			o = t.outerHeight();
		var a = i.getImageOriginalSize(e),
			s = a.width,
			l = a.height,
			u = s / l,
			d = o,
			_ = d * u,
			g = 0,
			c = 0;
		r > _ ? (_ = r, d = _ / u, c = 0, g = Math.round((d - o) / 2 * -1)) : (g = 0, c = Math.round((_ - r) / 2 * -1)), _ = Math.round(_), d = Math.round(d), e.css({
			width: _ + "px",
			height: d + "px",
			left: c + "px",
			top: g + "px"
		})
	}, this.scaleImageFitParent = function (e, t, n, r, o) {
		var a = e.parent(),
			s = i.getImageInsideParentData(a, t, n, r, o),
			l = !1,
			u = {};
		return null !== s.imageWidth && (l = !0, e.removeAttr("width"), u.width = s.imageWidth + "px"), null != s.imageHeight && (l = !0, e.removeAttr("height"), u.height = s.imageHeight + "px"), null !== s.imageTop && (l = !0, u.top = s.imageTop + "px"), null !== s.imageLeft && (l = !0, u.left = s.imageLeft + "px"), 1 == l && (u.position = "absolute", u.margin = "0px 0px", e.css(u)), s
	}, this.scaleImageByHeight = function (e, t, n, r) {
		var o = i.getImageOriginalSize(e, n, r),
			a = o.width / o.height,
			s = Math.round(t * a);
		t = Math.round(t), i.setElementSize(e, s, t)
	}, this.scaleImageByWidth = function (e, t, n, r) {
		var o = i.getImageOriginalSize(e, n, r),
			a = o.width / o.height,
			s = Math.round(t / a);
		t = Math.round(t), i.setElementSize(e, t, s)
	}, this.scaleImageExactSizeInParent = function (e, t, n, r, o, a) {
		var s = e.parent(),
			l = i.getElementSize(s);
		l.width < r && (r = l.width), l.height < o && (o = l.height);
		var u = i.getImageInsideParentData(null, t, n, a, null, r, o),
			d = r,
			_ = o,
			g = u.imageLeft,
			c = u.imageLeft,
			h = u.imageTop,
			p = u.imageTop,
			f = Math.round((l.width - r) / 2),
			m = Math.round((l.height - o) / 2),
			v = u.imageWidth + g + c,
			b = r - v;
		0 != b && (c += b);
		var y = u.imageHeight + h + p,
			b = o - y;
		0 != b && (p += b), e.removeAttr("width"), e.removeAttr("height");
		var I = {
			position: "absolute",
			margin: "0px 0px"
		};
		I.width = d + "px", I.height = _ + "px", I.left = f + "px", I.top = m + "px", I["padding-left"] = g + "px", I["padding-top"] = h + "px", I["padding-right"] = c + "px", I["padding-bottom"] = p + "px", e.css(I);
		var w = {};
		return w.imageWidth = d, w.imageHeight = _, w
	}, this.showElement = function (e, t, i) {
		e.show().fadeTo(0, 1), t && t.show().fadeTo(0, 1), i && i.show().fadeTo(0, 1)
	}, this.z_________GALLERY_RELATED_FUNCTIONS_______ = function () {}, this.disableButton = function (e, t) {
		if (!t) var t = "ug-button-disabled";
		0 == i.isButtonDisabled(e, t) && e.addClass(t)
	}, this.convertCustomPrefixOptions = function (e, t, i) {
		if (!t) return e;
		var n = {};
		return jQuery.each(e, function (e, r) {
			if (0 === e.indexOf(t + "_" + i + "_")) {
				var o = e.replace(t + "_" + i + "_", i + "_");
				n[o] = r
			} else n[e] = r
		}), n
	}, this.enableButton = function (e, t) {
		if (!t) var t = "ug-button-disabled";
		1 == i.isButtonDisabled(e, t) && e.removeClass(t)
	}, this.isButtonDisabled = function (e, t) {
		if (!t) var t = "ug-button-disabled";
		return e.hasClass(t) ? !0 : !1
	}, this.z_________MATH_FUNCTIONS_______ = function () {}, this.normalizeSetting = function (e, t, i, n, r, o) {
		if (!o) var o = !1;
		var a = (r - i) / (n - i);
		return r = e + (t - e) * a, 1 == o && (e > r && (r = e), r > t && (r = t)), r
	}, this.getNormalizedValue = function (e, t, i, n, r) {
		var o = (r - e) / (t - e);
		return r = e + (n - i) * o
	}, this.getDistance = function (e, t, i, n) {
		var r = Math.round(Math.sqrt(Math.abs((i - e) * (i - e) + (n - t) * (n - t))));
		return r
	}, this.getMiddlePoint = function (e, t, i, n) {
		var r = {};
		return r.x = e + Math.round((i - e) / 2), r.y = t + Math.round((n - t) / 2), r
	}, this.getNumItemsInSpace = function (e, t, i) {
		var n = Math.floor((e + i) / (t + i));
		return n
	}, this.getNumItemsInSpaceRound = function (e, t, i) {
		var n = Math.round((e + i) / (t + i));
		return n
	}, this.getSpaceByNumItems = function (e, t, i) {
		var n = e * t + (e - 1) * i;
		return n
	}, this.getItemSizeInSpace = function (e, t, i) {
		var n = Math.floor((e - (t - 1) * i) / t);
		return n
	}, this.getColX = function (e, t, i) {
		var n = e * (t + i);
		return n
	}, this.getColByIndex = function (e, t) {
		var i = t % e;
		return i
	}, this.getColRowByIndex = function (e, t) {
		var i = Math.floor(e / t),
			n = Math.floor(e % t);
		return {
			col: n,
			row: i
		}
	}, this.getIndexByRowCol = function (e, t, i) {
		if (0 > e) return -1;
		if (0 > t) return -1;
		var n = e * i + t;
		return n
	}, this.getPrevRowSameColIndex = function (e, t) {
		var n = i.getColRowByIndex(e, t),
			r = i.getIndexByRowCol(n.row - 1, n.col, t);
		return r
	}, this.getNextRowSameColIndex = function (e, t) {
		var n = i.getColRowByIndex(e, t),
			r = i.getIndexByRowCol(n.row + 1, n.col, t);
		return r
	}, this.z_________DATA_FUNCTIONS_______ = function () {}, this.setGlobalData = function (e, t) {
		jQuery.data(document.body, e, t)
	}, this.getGlobalData = function (e) {
		var t = jQuery.data(document.body, e);
		return t
	}, this.z_________EVENT_DATA_FUNCTIONS_______ = function () {}, this.handleScrollTop = function (e) {
		if (0 == i.isTouchDevice()) return null;
		var t = i.getStoredEventData(e),
			r = 15,
			o = 15;
		if (null === t.scrollDir && (Math.abs(t.diffMouseX) > r ? t.scrollDir = "hor" : Math.abs(t.diffMouseY) > o && Math.abs(t.diffMouseY) > Math.abs(t.diffMouseX) && (t.scrollDir = "vert", t.scrollStartY = t.lastMouseClientY, t.scrollOrigin = jQuery(document).scrollTop(), n.dataCache[e].scrollStartY = t.lastMouseClientY, n.dataCache[e].scrollOrigin = t.scrollOrigin), n.dataCache[e].scrollDir = t.scrollDir), "vert" !== t.scrollDir) return t.scrollDir;
		var a = (jQuery(document).scrollTop(), t.scrollOrigin - (t.lastMouseClientY - t.scrollStartY));
		return a >= 0 && jQuery(document).scrollTop(a), t.scrollDir
	}, this.wasVerticalScroll = function (e) {
		var t = i.getStoredEventData(e);
		return "vert" === t.scrollDir ? !0 : !1
	}, this.storeEventData = function (e, t, r) {
		var o = i.getMousePosition(e),
			a = jQuery.now(),
			s = {
				startTime: a,
				lastTime: a,
				startMouseX: o.pageX,
				startMouseY: o.pageY,
				lastMouseX: o.pageX,
				lastMouseY: o.pageY,
				startMouseClientY: o.clientY,
				lastMouseClientY: o.clientY,
				scrollTop: jQuery(document).scrollTop(),
				scrollDir: null
			};
		r && (s = jQuery.extend(s, r)), n.dataCache[t] = s
	}, this.updateStoredEventData = function (e, t, r) {
		if (!n.dataCache[t]) throw new Error("updateEventData error: must have stored cache object");
		var o = n.dataCache[t],
			a = i.getMousePosition(e);
		o.lastTime = jQuery.now(), void 0 !== a.pageX && (o.lastMouseX = a.pageX, o.lastMouseY = a.pageY, o.lastMouseClientY = a.clientY), r && (o = jQuery.extend(o, r)), n.dataCache[t] = o
	}, this.getStoredEventData = function (e, t) {
		if (!n.dataCache[e]) throw new Error("updateEventData error: must have stored cache object");
		var i = n.dataCache[e];
		return i.diffMouseX = i.lastMouseX - i.startMouseX, i.diffMouseY = i.lastMouseY - i.startMouseY, i.diffMouseClientY = i.lastMouseClientY - i.startMouseClientY, i.diffTime = i.lastTime - i.startTime, t === !0 ? (i.startMousePos = i.lastMouseY, i.lastMousePos = i.lastMouseY, i.diffMousePos = i.diffMouseY) : (i.startMousePos = i.lastMouseX, i.lastMousePos = i.lastMouseX, i.diffMousePos = i.diffMouseX), i
	}, this.isApproveStoredEventClick = function (e, t) {
		if (!n.dataCache[e]) return !0;
		var r = i.getStoredEventData(e, t),
			o = Math.abs(r.diffMousePos);
		return r.diffTime > 400 ? !1 : o > 30 ? !1 : !0
	}, this.clearStoredEventData = function (e) {
		n.dataCache[e] = null
	}, this.z_________CHECK_SUPPORT_FUNCTIONS_______ = function () {}, this.isCanvasExists = function () {
		var e = jQuery('<canvas width="500" height="500" > </canvas>')[0];
		return "function" == typeof e.getContext ? !0 : !1
	}, this.isScrollbarExists = function () {
		var e = window.innerWidth > document.documentElement.clientWidth;
		return e
	}, this.isTouchDevice = function () {
		if (-1 !== n.isTouchDevice) return n.isTouchDevice;
		try {
			document.createEvent("TouchEvent"), n.isTouchDevice = !0
		} catch (e) {
			n.isTouchDevice = !1
		}
		return n.isTouchDevice
	}, this.isRgbaSupported = function () {
		if (-1 !== n.isRgbaSupported) return n.isRgbaSupported;
		var e = document.getElementsByTagName("script")[0],
			t = e.style.color;
		try {
			e.style.color = "rgba(1,5,13,0.44)"
		} catch (i) {}
		var r = e.style.color != t;
		return e.style.color = t, n.isRgbaSupported = r, r
	}, this.z_________GENERAL_FUNCTIONS_______ = function () {}, this.checkMinJqueryVersion = function (e) {
		for (var t = jQuery.fn.jquery.split("."), i = e.split("."), n = 0, r = t.length; r > n; n++) {
			var o = parseInt(t[n]),
				a = parseInt(i[n]);
			if ("undefined" == typeof i[n]) return !0;
			if (a > o) return !1;
			if (o > a) return !0
		}
		return !0
	}, this.getCssSizeParam = function (e) {
		return jQuery.isNumeric(e) ? e + "px" : e
	}, this.convertHexToRGB = function (e, t) {
		var i = e.replace("#", "");
		return i === e ? e : (r = parseInt(i.substring(0, 2), 16), g = parseInt(i.substring(2, 4), 16), b = parseInt(i.substring(4, 6), 16), result = "rgba(" + r + "," + g + "," + b + "," + t + ")", result)
	}, this.timestampToString = function (e) {
		var t = new Date(e),
			i = t.getDate() + "/" + t.getMonth();
		return i += " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds()
	}, this.getArrTouches = function (e) {
		var t = [];
		return e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length > 0 && (t = e.originalEvent.touches), t
	}, this.getArrTouchPositions = function (e) {
		for (var t = [], i = 0; i < e.length; i++) {
			var n = {
				pageX: e[i].pageX,
				pageY: e[i].pageY
			};
			t.push(n)
		}
		return t
	}, this.startTimeDebug = function () {
		n.starTime = jQuery.now()
	}, this.showTimeDebug = function () {
		var e = jQuery.now(),
			t = e - n.starTime;
		debugLine({
			"Time Passed": t
		}, !0)
	}, this.initProgressIndicator = function (e, t, n) {
		switch ("bar" != e && 0 == i.isCanvasExists() && (e = "bar"), e) {
			case "bar":
				var r = new UGProgressBar;
				r.putHidden(n, t);
				break;
			default:
			case "pie":
				var r = new UGProgressPie;
				r.putHidden(n, t);
				break;
			case "pie2":
				t.type_fill = !0;
				var r = new UGProgressPie;
				r.putHidden(n, t)
		}
		return r
	}, this.setButtonMobileReady = function (e) {
		e.on("touchstart", function (e) {
			jQuery(this).addClass("ug-nohover")
		}), e.on("mousedown touchend", function (e) {
			return e.stopPropagation(), e.stopImmediatePropagation(), !1
		})
	}, this.registerTheme = function (e) {
		n.arrThemes.push(e)
	}, this.getArrThemes = function () {
		return n.arrThemes
	}, this.isThemeRegistered = function (e) {
		return -1 !== jQuery.inArray(e, n.arrThemes) ? !0 : !1
	}, this.getFirstRegisteredTheme = function () {
		if (0 == n.arrThemes.length) return "";
		var e = n.arrThemes[0];
		return e
	}, this.isTimePassed = function (e, t) {
		if (!t) var t = 100;
		var i = jQuery.now();
		0 == n.timeCache.hasOwnProperty(e) ? lastTime = 0 : lastTime = n.timeCache[e];
		var r = i - lastTime;
		return n.timeCache[e] = i, t >= r ? !1 : !0
	}, this.whenContiniousEventOver = function (e, t, i) {
		if (!i) var i = 300;
		1 == n.timeCache.hasOwnProperty(e) && null != n.timeCache[e] && (clearTimeout(n.timeCache[e]), n.timeCache[e] = null), n.timeCache[e] = setTimeout(t, i)
	}, this.validateClickTouchstartEvent = function (e) {
		var t = !0,
			i = jQuery.now() - n.lastEventTime;
		return "click" == e && "touchstart" == n.lastEventType && 1e3 > i && (t = !1), n.lastEventTime = jQuery.now(), n.lastEventType = e, t
	}, this.addClassOnHover = function (e, t) {
		if (!t) var t = "ug-button-hover";
		e.hover(function () {
			jQuery(this).addClass(t)
		}, function () {
			jQuery(this).removeClass(t)
		})
	}, this.destroyButton = function (e) {
		e.off("mouseenter"), e.off("mouseleave"), e.off("click"), e.off("touchstart"), e.off("touchend"), e.off("mousedown"), e.off("tap")
	}, this.setButtonOnClick = function (e, t) {
		i.setButtonMobileReady(e), e.on("click touchstart", function (e) {
			return objThis = jQuery(this), e.stopPropagation(), e.stopImmediatePropagation(), 0 == i.validateClickTouchstartEvent(e.type) ? !0 : void t(objThis, e)
		})
	}, this.setButtonOnTap = function (e, t) {
		e.on("tap", t), 0 == i.isTouchDevice() ? e.on("click", function (e) {
			var t = jQuery(this);
			return 0 == i.validateClickTouchstartEvent(e.type) ? !0 : void t.trigger("tap")
		}) : (e.on("touchstart", function (e) {
			var t = jQuery(this);
			t.addClass("ug-nohover"), n.lastTouchStartElement = jQuery(this), n.lastEventTime = jQuery.now()
		}), e.on("touchend", function (e) {
			var t = jQuery(this);
			if (0 == t.is(n.lastTouchStartElement)) return !0;
			if (!n.lastEventTime) return !0;
			var i = jQuery.now() - n.lastEventTime;
			return i > n.touchThreshold ? !0 : void t.trigger("tap")
		}))
	}, this.loadJs = function (e, t) {
		t === !0 && (e = location.protocol + "//" + e);
		var i = document.createElement("script");
		i.src = e;
		var n = document.getElementsByTagName("script")[0];
		n.parentNode.insertBefore(i, n)
	}, this.loadCss = function (e, t) {
		t === !0 && (e = location.protocol + "//" + e);
		var i = document.createElement("link");
		i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(i)
	}, this.addEvent = function (e, t, i) {
		"undefined" != typeof e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i)
	}, this.checkImagesLoaded = function (e, t, i) {
		function n(e, n) {
			r++, "function" == typeof i && setTimeout(function () {
				i(e, n)
			}), r == o && "function" == typeof t && setTimeout(function () {
				t()
			})
		}
		var r = 0,
			o = e.length;
		return 0 == o && t ? (t(), !1) : void setTimeout(function () {
			for (var t = 0; o > t; t++) {
				var i = e[t];
				if (void 0 !== i.naturalWidth && 0 !== i.naturalWidth) n(e[t], !1);
				else {
					var r = jQuery("<img/>");
					r.data("index", t), r.on("load", function () {
						var t = jQuery(this).data("index");
						n(e[t], !1)
					}), r.on("error", function () {
						var t = jQuery(this).data("index");
						n(e[t], !0)
					}), r.attr("src", i.src)
				}
			}
		})
	}, this.waitForWidth = function (e, t) {
		var i = e.width();
		return 0 != i ? (t(), !1) : void(n.handle = setInterval(function () {
			i = e.width(), 0 != i && (clearInterval(n.handle), t())
		}, 300))
	}, this.arrayShuffle = function (e) {
		if ("object" != typeof e) return e;
		for (var t, i, n = e.length; n; t = parseInt(Math.random() * n), i = e[--n], e[n] = e[t], e[t] = i);
		return e
	}, this.getObjectLength = function (e) {
		var t = 0;
		for (var i in e) t++;
		return t
	}, this.normalizePercent = function (e) {
		return 0 > e && (e = 0), e > 1 && (e = 1), e
	}, this.stripTags = function (e) {
		var t = e.replace(/(<([^>]+)>)/gi, "");
		return t
	}, this.escapeDoubleSlash = function (e) {
		return e.replace('"', '"')
	}, this.htmlentitles = function (e) {
		var t = jQuery("<div/>").text(e).html();
		return t
	}, this.z_________END_GENERAL_FUNCTIONS_______ = function () {}
}

function UGThumbsGeneral() {
	function e(e, t) {
		var i = w[e],
			n = "";
		0 == C.customThumbs && (n = " ug-thumb-generated");
		var r = i.index + 1,
			o = "style='z-index:" + r + ";'",
			a = "<div class='ug-thumb-wrapper" + n + "' " + o + "></div>";
		if (1 == j.thumb_wrapper_as_link) {
			var s = i.link;
			"" == i.link && (s = "javascript:void(0)");
			var l = "";
			1 == j.thumb_link_newpage && i.link && (l = " target='_blank'");
			var a = "<a href='" + s + "'" + l + " class='ug-thumb-wrapper" + n + "'></a>"
		}
		var u = jQuery(a),
			d = i.objThumbImage;
		if (0 == C.customThumbs) {
			if (1 == j.thumb_show_loader && d) {
				var _ = "ug-thumb-loader-dark";
				"bright" == j.thumb_loader_type && (_ = "ug-thumb-loader-bright"), u.append("<div class='ug-thumb-loader " + _ + "'></div>"), u.append("<div class='ug-thumb-error' style='display:none'></div>")
			}
			if (d) {
				if (d.addClass("ug-thumb-image"), 1 == j.thumb_image_overlay_effect) {
					var g = d.clone().appendTo(u);
					g.addClass("ug-thumb-image-overlay " + t).removeClass("ug-thumb-image"), g.fadeTo(0, 0), i.objImageOverlay = g
				}
				u.append(d)
			}
		}
		return C.isEffectBorder && u.append("<div class='ug-thumb-border-overlay'></div>"), C.isEffectOverlay && u.append("<div class='ug-thumb-overlay'></div>"), E.append(u), C.customThumbs && C.funcSetCustomThumbHtml(u, i), w[e].objThumbWrapper = u, u
	}

	function t(e, t, i, n) {
		var r = {
				width: e + "px",
				height: t + "px"
			},
			o = {
				width: e - C.thumbInnerReduce + "px",
				height: t - C.thumbInnerReduce + "px"
			},
			a = ".ug-thumb-loader, .ug-thumb-error, .ug-thumb-border-overlay, .ug-thumb-overlay";
		i ? (n !== !0 && i.css(r), i.find(a).css(o)) : (E.children(".ug-thumb-wrapper").css(r), E.find(a).css(o))
	}

	function i(e, t, i, n) {
		if (!n) var n = !1;
		P.isFakeFullscreen() && (n = !0);
		var r = e.children(".ug-thumb-border-overlay"),
			o = {};
		o["border-width"] = t + "px", 0 != t && (o["border-color"] = i), n && n === !0 ? (r.css(o), 0 == t ? r.hide() : r.show()) : (0 == t ? r.stop().fadeOut(j.thumb_transition_duration) : r.show().stop().fadeIn(j.thumb_transition_duration), l(r, o))
	}

	function n(e, t, i) {
		var n = e.children(".ug-thumb-overlay"),
			r = j.thumb_transition_duration;
		i && i === !0 && (r = 0), t ? n.stop(!0).fadeTo(r, C.colorOverlayOpacity) : n.stop(!0).fadeTo(r, 0)
	}

	function r(e, t, i) {
		var n = e.children("img.ug-thumb-image"),
			r = e.children("img.ug-thumb-image-overlay"),
			o = j.thumb_transition_duration;
		i && i === !0 && (o = 0), t ? r.stop(!0).fadeTo(o, 1) : (n.fadeTo(0, 1), r.stop(!0).fadeTo(o, 0))
	}

	function o(e, t) {
		if (C.isEffectBorder && i(e, j.thumb_selected_border_width, j.thumb_selected_border_color, t), C.isEffectOverlay) {
			var o = 1 == j.thumb_overlay_reverse ? !0 : !1;
			n(e, o, t)
		}
		C.isEffectImage && r(e, !1, t), S.trigger(T.events.SETSELECTEDSTYLE, e)
	}

	function a(e) {
		var t = T.getItemByThumb(e);
		return t.isLoaded = !0, t.isThumbImageLoaded = !1, 1 == C.customThumbs ? (S.trigger(T.events.IMAGELOADERROR, e), !0) : (e.children(".ug-thumb-loader").hide(), void e.children(".ug-thumb-error").show())
	}

	function s(e) {
		if (j.thumb_round_corners_radius <= 0) return !1;
		var t = {
			"border-radius": j.thumb_round_corners_radius + "px"
		};
		e ? (e.css(t), e.find(".ug-thumb-border-overlay").css(t)) : E.find(".ug-thumb-wrapper, .ug-thumb-wrapper .ug-thumb-border-overlay").css(t)
	}

	function l(e, t) {
		e.stop(!0).animate(t, {
			duration: j.thumb_transition_duration,
			easing: j.thumb_transition_easing,
			queue: !1
		})
	}

	function u(e) {
		1 == c(e) ? o(e, !0, "redraw") : T.setThumbNormalStyle(e, !0, "redraw")
	}

	function d(e, i, n) {
		if (1 == j.thumb_fixed_size) x.scaleImageCoverParent(i, e);
		else {
			"height" == j.thumb_resize_by ? x.scaleImageByHeight(i, j.thumb_height) : x.scaleImageByWidth(i, j.thumb_width);
			var r = x.getElementSize(i);
			x.placeElement(i, 0, 0), t(r.width, r.height, e)
		}
		e.children(".ug-thumb-loader").hide(), i.show(), 0 == j.thumb_image_overlay_effect ? i.fadeTo(0, 1) : (1 == j.thumb_image_overlay_effect && _(i), i.fadeTo(0, 0), u(e)), S.trigger(T.events.AFTERPLACEIMAGE, e)
	}

	function _(e) {
		var t = e.siblings(".ug-thumb-image-overlay");
		if (0 == t.length) return !1;
		var i = x.getElementSize(e),
			n = {
				width: i.width + "px",
				height: i.height + "px",
				left: i.left + "px",
				top: i.top + "px"
			};
		t.css(n), 0 == C.customThumbs && t.fadeTo(0, 1)
	}

	function g() {
		var e = "",
			t = j.thumb_image_overlay_type.split(",");
		for (var i in t) {
			var n = t[i];
			switch (n) {
				case "bw":
					e += " ug-bw-effect";
					break;
				case "blur":
					e += " ug-blur-effect";
					break;
				case "sepia":
					e += " ug-sepia-effect"
			}
		}
		return e
	}

	function c(e) {
		return e.hasClass("ug-thumb-selected") ? !0 : !1
	}

	function h(e, i) {
		i = jQuery(i);
		var n = (T.getItemByThumb(i), x.getElementSize(i));
		t(n.width, n.height, i, !0), u(i)
	}

	function p(e) {
		return 1 == C.touchEnabled ? (objThumbs.off("mouseenter").off("mouseleave"), !0) : void(0 == c(e) && T.setThumbOverStyle(e))
	}

	function f(e) {
		return 1 == C.touchEnabled ? !0 : void(0 == c(e) && T.setThumbNormalStyle(e, !1))
	}

	function m(e, t) {
		if (!t) var t = !1;
		var i = jQuery(e),
			n = i.parents(".ug-thumb-wrapper");
		return 0 == n.parent().length ? !1 : (objItem = T.getItemByThumb(n), 1 == objItem.isLoaded && t === !1 ? !1 : (T.triggerImageLoadedEvent(n, i), void(1 == C.customThumbs ? S.trigger(T.events.PLACEIMAGE, [n, i]) : d(n, i, objItem))))
	}

	function v(e, t, i) {
		objItem = T.getItemByThumb(t), objItem.isLoaded = !0, objItem.isThumbImageLoaded = !0;
		var n = x.getImageOriginalSize(i);
		objItem.thumbWidth = n.width, objItem.thumbHeight = n.height, objItem.thumbRatioByWidth = n.width / n.height, objItem.thumbRatioByHeight = n.height / n.width, t.addClass("ug-thumb-ratio-set")
	}
	var b, y, I, w, E, T = this,
		S = jQuery(T),
		P = new UniteGalleryMain,
		x = new UGFunctions;
	this.type = {
		GET_THUMBS_ALL: "all",
		GET_THUMBS_RATIO: "ratio",
		GET_THUMBS_NO_RATIO: "no_ratio",
		GET_THUMBS_NEW: "new"
	}, this.events = {
		SETOVERSTYLE: "thumbmouseover",
		SETNORMALSTYLE: "thumbmouseout",
		SETSELECTEDSTYLE: "thumbsetselected",
		PLACEIMAGE: "thumbplaceimage",
		AFTERPLACEIMAGE: "thumb_after_place_image",
		IMAGELOADERROR: "thumbimageloaderror",
		THUMB_IMAGE_LOADED: "thumb_image_loaded"
	};
	var j = {
			thumb_width: 88,
			thumb_height: 50,
			thumb_fixed_size: !0,
			thumb_resize_by: "height",
			thumb_border_effect: !0,
			thumb_border_width: 0,
			thumb_border_color: "#000000",
			thumb_over_border_width: 0,
			thumb_over_border_color: "#d9d9d9",
			thumb_selected_border_width: 1,
			thumb_selected_border_color: "#d9d9d9",
			thumb_round_corners_radius: 0,
			thumb_color_overlay_effect: !0,
			thumb_overlay_color: "#000000",
			thumb_overlay_opacity: .4,
			thumb_overlay_reverse: !1,
			thumb_image_overlay_effect: !1,
			thumb_image_overlay_type: "bw",
			thumb_transition_duration: 200,
			thumb_transition_easing: "easeOutQuad",
			thumb_show_loader: !0,
			thumb_loader_type: "dark",
			thumb_wrapper_as_link: !1,
			thumb_link_newpage: !1
		},
		C = {
			touchEnabled: !1,
			num_thumbs_checking: 0,
			customThumbs: !1,
			funcSetCustomThumbHtml: null,
			isEffectBorder: !1,
			isEffectOverlay: !1,
			isEffectImage: !1,
			colorOverlayOpacity: 1,
			thumbInnerReduce: 0,
			allowOnResize: !0,
			classNewThumb: "ug-new-thumb"
		},
		A = {
			timeout_thumb_check: 100,
			thumb_max_check_times: 600,
			eventSizeChange: "thumb_size_change"
		};
	this.init = function (e, t) {
		y = e.getObjects(), P = e, b = jQuery(e), I = y.g_objWrapper, w = y.g_arrItems, j = jQuery.extend(j, t), C.isEffectBorder = j.thumb_border_effect, C.isEffectOverlay = j.thumb_color_overlay_effect, C.isEffectImage = j.thumb_image_overlay_effect
	}, this._____________EXTERNAL_SETTERS__________ = function () {}, this.setHtmlThumbs = function (t, i) {
		if (E = t, 1 == C.isEffectImage) var n = g();
		if (i !== !0)
			for (var r = P.getNumItems(), o = 0; r > o; o++) e(o, n);
		else {
			var a = T.getThumbs();
			a.removeClass(C.classNewThumb);
			var s = P.getNewAddedItemsIndexes();
			jQuery.each(s, function (t, i) {
				var r = e(i, n);
				r.addClass(C.classNewThumb)
			})
		}
	}, this.setThumbNormalStyle = function (e, t, o) {
		if (1 == C.customThumbs && e.removeClass("ug-thumb-over"), C.isEffectBorder && i(e, j.thumb_border_width, j.thumb_border_color, t), C.isEffectOverlay) {
			var a = 1 == j.thumb_overlay_reverse ? !1 : !0;
			n(e, a, t)
		}
		C.isEffectImage && r(e, !0, t), S.trigger(T.events.SETNORMALSTYLE, e)
	}, this.setThumbOverStyle = function (e) {
		if (1 == C.customThumbs && e.addClass("ug-thumb-over"), C.isEffectBorder && i(e, j.thumb_over_border_width, j.thumb_over_border_color), C.isEffectOverlay) {
			var t = 1 == j.thumb_overlay_reverse ? !0 : !1;
			n(e, t)
		}
		1 == C.isEffectImage && r(e, !1), S.trigger(T.events.SETOVERSTYLE, e)
	}, this.setHtmlProperties = function (e) {
		if (!e) var e = T.getThumbs();
		if (0 == C.customThumbs) {
			1 == j.thumb_fixed_size && t(j.thumb_width, j.thumb_height, e), s(e)
		}
		if (e.each(function () {
				var e = jQuery(this);
				u(e)
			}), C.isEffectOverlay && j.thumb_overlay_color) {
			var i = {};
			if (x.isRgbaSupported()) {
				var n = x.convertHexToRGB(j.thumb_overlay_color, j.thumb_overlay_opacity);
				i["background-color"] = n
			} else i["background-color"] = j.thumb_overlay_color, C.colorOverlayOpacity = j.thumb_overlay_opacity;
			e.find(".ug-thumb-overlay").css(i)
		}
	}, this.setThumbSelected = function (e) {
		return 1 == C.customThumbs && e.removeClass("ug-thumb-over"), 1 == c(e) ? !0 : (e.addClass("ug-thumb-selected"), void o(e))
	}, this.setThumbUnselected = function (e) {
		e.removeClass("ug-thumb-selected"), T.setThumbNormalStyle(e, !1, "set unselected")
	}, this.setOptions = function (e) {
		j = jQuery.extend(j, e)
	}, this.setThumbInnerReduce = function (e) {
		C.thumbInnerReduce = e
	}, this.setCustomThumbs = function (e, t, i) {
		if (C.customThumbs = !0, "function" != typeof e) throw new Error("The argument should be function");
		C.funcSetCustomThumbHtml = e, -1 == jQuery.inArray("overlay", t) && (C.isEffectOverlay = !1), -1 == jQuery.inArray("border", t) && (C.isEffectBorder = !1), C.isEffectImage = !1, i && i.allow_onresize === !1 && (C.allowOnResize = !1)
	}, this._____________EXTERNAL_GETTERS__________ = function () {}, this.getOptions = function () {
		return j
	}, this.getNumThumbs = function () {
		var e = w.length;
		return e
	}, this.getThumbImage = function (e) {
		var t = e.find(".ug-thumb-image");
		return t
	}, this.getThumbByIndex = function (e) {
		var t = T.getThumbs();
		if (e >= t.length || 0 > e) throw new Error("Wrong thumb index");
		var i = jQuery(t[e]);
		return i
	}, this.getThumbs = function (e) {
		var t = ".ug-thumb-wrapper",
			i = ".ug-thumb-ratio-set";
		switch (e) {
			default:
				case T.type.GET_THUMBS_ALL:
				var n = E.children(t);
			break;
			case T.type.GET_THUMBS_NO_RATIO:
					var n = E.children(t).not(i);
				break;
			case T.type.GET_THUMBS_RATIO:
					var n = E.children(t + i);
				break;
			case T.type.GET_THUMBS_NEW:
					var n = E.children("." + C.classNewThumb)
		}
		return n
	}, this.getItemByThumb = function (e) {
		var t = e.data("index");
		void 0 === t && (t = e.index());
		var i = w[t];
		return i
	}, this.isThumbLoaded = function (e) {
		var t = T.getItemByThumb(e);
		return t.isLoaded
	}, this.getGlobalThumbSize = function () {
		var e = {
			width: j.thumb_width,
			height: j.thumb_height
		};
		return e
	}, this._____________EXTERNAL_OTHERS__________ = function () {}, this.initEvents = function () {
		var e = ".ug-thumb-wrapper";
		1 == C.allowOnResize && I.on(A.eventSizeChange, h), S.on(T.events.THUMB_IMAGE_LOADED, v), E.on("touchstart", e, function () {
			C.touchEnabled = !0, E.off("mouseenter").off("mouseleave")
		}), E.on("mouseenter", e, function (e) {
			var t = jQuery(this);
			p(t)
		}), E.on("mouseleave", e, function (e) {
			var t = jQuery(this);
			f(t)
		})
	}, this.destroy = function () {
		var e = ".ug-thumb-wrapper";
		E.off("touchstart", e), I.off(A.eventSizeChange), E.off("mouseenter", e), E.off("mouseleave", e), S.off(T.events.THUMB_IMAGE_LOADED)
	}, this.loadThumbsImages = function () {
		var e = E.find(".ug-thumb-image");
		x.checkImagesLoaded(e, null, function (e, t) {
			if (0 == t) m(e, !0);
			else {
				var i = jQuery(e).parent();
				a(i)
			}
		})
	}, this.triggerImageLoadedEvent = function (e, t) {
		S.trigger(T.events.THUMB_IMAGE_LOADED, [e, t])
	}, this.hideThumbs = function () {
		E.find(".ug-thumb-wrapper").hide()
	}
}

function UGThumbsStrip() {
	function e(e, i) {
		S = e.getObjects(), z = e, z.attachThumbsPanel("strip", O), T = jQuery(e), P = S.g_objWrapper, x = S.g_arrItems, k = jQuery.extend(k, i), H = k.strip_vertical_type, 1 == H && (k = jQuery.extend(k, D), k = jQuery.extend(k, i), i.thumb_resize_by = "width"), N.init(e, i), t()
	}

	function t() {
		var e = N.getOptions();
		R.isNotFixedThumbs = e.thumb_fixed_size === !1, H = k.strip_vertical_type
	}

	function n() {
		N.setHtmlProperties(), o(), l(), s(), 0 == R.isRunOnce && (1 == k.strip_control_touch && (M = new UGTouchThumbsControl, M.init(O)), 1 == k.strip_control_avia && (A = new UGAviaControl, A.init(O)), p(), N.loadThumbsImages(), y()), R.isRunOnce = !0
	}

	function r(e) {
		G.stripSize = e, 0 == H ? G.stripActiveSize = G.stripSize - k.strip_padding_left - k.strip_padding_right : G.stripActiveSize = G.stripSize - k.strip_padding_top - k.strip_padding_bottom, G.stripActiveSize < 0 && (G.stripActiveSize = 0)
	}

	function o() {
		var e = C.children(".ug-thumb-wrapper"),
			t = jQuery(e[0]),
			i = t.outerWidth(),
			n = t.outerHeight(),
			o = N.getOptions();
		0 == H ? (G.thumbSize = i, 1 == o.thumb_fixed_size ? G.thumbSecondSize = n : G.thumbSecondSize = o.thumb_height, r(j.width()), G.stripInnerSize = C.width()) : (G.thumbSize = n, 1 == o.thumb_fixed_size ? G.thumbSecondSize = i : G.thumbSecondSize = o.thumb_width, r(j.height()), G.stripInnerSize = C.height())
	}

	function a(e) {
		0 == H ? C.width(e) : C.height(e), G.stripInnerSize = e, p(), jQuery(O).trigger(O.events.INNER_SIZE_CHANGE)
	}

	function s() {
		var e = C.children(".ug-thumb-wrapper"),
			t = 0,
			n = 0;
		for (0 == H && (n = k.strip_padding_top), i = 0; i < e.length; i++) {
			var r = jQuery(e[i]);
			if (1 == R.isNotFixedThumbs) {
				if (objItem = N.getItemByThumb(r), 0 == objItem.isLoaded) continue;
				r.show()
			}
			L.placeElement(r, t, n), 0 == H ? t += r.outerWidth() + k.strip_space_between_thumbs : n += r.outerHeight() + k.strip_space_between_thumbs
		}
		if (0 == H) var o = t - k.strip_space_between_thumbs;
		else var o = n - k.strip_space_between_thumbs;
		a(o)
	}

	function l() {
		if (0 == H) {
			var e = G.thumbSecondSize,
				t = {};
			t.height = e + "px";
			var i = {};
			i.height = e + "px"
		} else {
			var n = G.thumbSecondSize,
				t = {};
			t.width = n + "px";
			var i = {};
			i.width = n + "px"
		}
		j.css(t), C.css(i)
	}

	function u(e) {
		var t = O.getInnerStripPos(),
			i = t + e;
		i = O.fixInnerStripLimits(i), O.positionInnerStrip(i, !0)
	}

	function d(e) {
		var t = E(e),
			i = -1 * t.min;
		i = O.fixInnerStripLimits(i), O.positionInnerStrip(i, !0)
	}

	function _(e) {
		var t = E(e),
			i = -1 * t.max + G.stripSize;
		i = O.fixInnerStripLimits(i), O.positionInnerStrip(i, !0)
	}

	function g(e) {
		if (0 == I()) return !1;
		var t = w(),
			i = E(e);
		if (i.min < t.minPosThumbs) {
			var n = e.prev();
			d(n.length ? n : e)
		} else if (i.max > t.maxPosThumbs) {
			var r = e.next();
			_(r.length ? r : e)
		}
	}

	function c() {
		var e = z.getSelectedItem();
		if (null == e) return !0;
		var t = e.objThumbWrapper;
		t && g(t)
	}

	function h() {
		if (0 == I()) return !1;
		var e = O.getInnerStripPos(),
			t = O.fixInnerStripLimits(e);
		e != t && O.positionInnerStrip(t, !0)
	}

	function p() {
		var e = I();
		1 == e ? (A && A.enable(), M && M.enable()) : (A && A.disable(), M && M.disable())
	}

	function f() {
		return I() ? !1 : void(0 == H ? L.placeElement(C, k.strip_thumbs_align, 0) : L.placeElement(C, 0, k.strip_thumbs_align))
	}

	function m(e) {
		if (O.isTouchMotionActive()) {
			var t = M.isSignificantPassed();
			if (1 == t) return !0
		}
		var i = N.getItemByThumb(e);
		z.selectItem(i)
	}

	function v() {
		clearTimeout(R.handle), R.handle = setTimeout(function () {
			s()
		}, 50)
	}

	function b() {
		var e = z.getSelectedItem();
		N.setThumbSelected(e.objThumbWrapper), g(e.objThumbWrapper)
	}

	function y() {
		N.initEvents();
		var e = j.find(".ug-thumb-wrapper");
		e.on("click touchend", function (e) {
			var t = jQuery(this);
			m(t)
		}), T.on(z.events.ITEM_CHANGE, b), R.isNotFixedThumbs && jQuery(N).on(N.events.AFTERPLACEIMAGE, v)
	}

	function I() {
		return G.stripInnerSize > G.stripActiveSize ? !0 : !1
	}

	function w() {
		var e = {},
			t = O.getInnerStripPos();
		return e.minPosThumbs = -1 * t + 1, e.maxPosThumbs = -1 * t + G.stripSize - 1, e
	}

	function E(e) {
		var t = {},
			i = e.position();
		return 0 == H ? (t.min = i.left, t.max = i.left + G.thumbSize) : (t.min = i.top, t.max = i.top + G.thumbSize), t
	}
	var T, S, P, x, j, C, A, M, O = this,
		z = new UniteGalleryMain,
		L = new UGFunctions,
		H = !1,
		N = new UGThumbsGeneral,
		L = new UGFunctions,
		k = {
			strip_vertical_type: !1,
			strip_thumbs_align: "left",
			strip_space_between_thumbs: 6,
			strip_thumb_touch_sensetivity: 15,
			strip_scroll_to_thumb_duration: 500,
			strip_scroll_to_thumb_easing: "easeOutCubic",
			strip_control_avia: !0,
			strip_control_touch: !0,
			strip_padding_top: 0,
			strip_padding_bottom: 0,
			strip_padding_left: 0,
			strip_padding_right: 0
		},
		R = {
			isRunOnce: !1,
			is_placed: !1,
			isNotFixedThumbs: !1,
			handle: null
		},
		G = {
			stripSize: 0,
			stripActiveSize: 0,
			stripInnerSize: 0,
			thumbSize: 0,
			thumbSecondSize: 0
		};
	this.events = {
		STRIP_MOVE: "stripmove",
		INNER_SIZE_CHANGE: "size_change"
	};
	var D = {
		strip_thumbs_align: "top",
		thumb_resize_by: "width"
	};
	this.setHtml = function (e) {
		if (!e) {
			var e = P;
			null != k.parent_container && (e = k.parent_container)
		}
		e.append("<div class='ug-thumbs-strip'><div class='ug-thumbs-strip-inner'></div></div>"), j = e.children(".ug-thumbs-strip"), C = j.children(".ug-thumbs-strip-inner"), N.setHtmlThumbs(C), 1 == R.isNotFixedThumbs && N.hideThumbs()
	}, this.destroy = function () {
		var e = j.find(".ug-thumb-wrapper");
		e.off("click"), e.off("touchend"), T.off(z.events.ITEM_CHANGE), jQuery(N).off(N.events.AFTERPLACEIMAGE), M && M.destroy(), A && A.destroy(), N.destroy()
	}, this.________EXTERNAL_GENERAL___________ = function () {}, this.init = function (t, i) {
		e(t, i)
	}, this.run = function () {
		n()
	}, this.positionInnerStrip = function (e, t) {
		if (void 0 === t) var t = !1;
		if (0 == H) var i = {
			left: e + "px"
		};
		else var i = {
			top: e + "px"
		};
		0 == t ? (C.css(i), O.triggerStripMoveEvent()) : (O.triggerStripMoveEvent(), C.stop(!0).animate(i, {
			duration: k.strip_scroll_to_thumb_duration,
			easing: k.strip_scroll_to_thumb_easing,
			queue: !1,
			progress: function () {
				O.triggerStripMoveEvent()
			},
			always: function () {
				O.triggerStripMoveEvent()
			}
		}))
	}, this.triggerStripMoveEvent = function () {
		jQuery(O).trigger(O.events.STRIP_MOVE)
	}, this.isTouchMotionActive = function () {
		if (!M) return !1;
		var e = M.isTouchActive();
		return e
	}, this.isItemThumbVisible = function (e) {
		var t = e.objThumbWrapper,
			i = t.position(),
			n = -1 * O.getInnerStripPos();
		if (0 == H) var r = n + G.stripSize,
			o = i.left,
			a = i.left + t.width();
		else var r = n + G.stripSize,
			o = i.top,
			a = i.top + t.height();
		var s = !1;
		return a >= n && r >= o && (s = !0), s
	}, this.getInnerStripPos = function () {
		return 0 == H ? C.position().left : C.position().top
	}, this.getInnerStripLimits = function () {
		var e = {};
		return 0 == H ? e.maxPos = k.strip_padding_left : e.maxPos = k.strip_padding_top, e.minPos = -(G.stripInnerSize - G.stripActiveSize), e
	}, this.fixInnerStripLimits = function (e) {
		var t = O.getInnerStripLimits();
		return e > t.maxPos && (e = t.maxPos), e < t.minPos && (e = t.minPos), e
	}, this.scrollForeward = function () {
		u(-G.stripSize)
	}, this.scrollBack = function () {
		u(G.stripSize)
	}, this.________EXTERNAL_SETTERS___________ = function () {}, this.setOptions = function (e) {
		k = jQuery.extend(k, e), N.setOptions(e), t()
	}, this.setSizeVertical = function (e) {
		if (0 == H) throw new Error("setSizeVertical error, the strip size is not vertical");
		var t = G.thumbSecondSize,
			i = {};
		i.width = t + "px", i.height = e + "px", j.css(i), r(e);
		var n = {};
		n.width = t + "px", n.left = "0px", n.top = "0px", C.css(n), R.is_placed = !0, p()
	}, this.setSizeHorizontal = function (e) {
		if (1 == H) throw new Error("setSizeHorizontal error, the strip size is not horizontal");
		var t = G.thumbSecondSize + k.strip_padding_top + k.strip_padding_bottom,
			i = {};
		i.width = e + "px", i.height = t + "px", j.css(i), r(e);
		var n = k.strip_padding_left,
			o = {};
		o.height = t + "px", o.left = n + "px", o.top = "0px", C.css(o), R.is_placed = !0, p()
	}, this.setPosition = function (e, t, i, n) {
		L.placeElement(j, e, t, i, n)
	}, this.resize = function (e) {
		0 == H ? (j.width(e), G.stripActiveSize = e - k.strip_padding_left - k.strip_padding_right) : (j.height(e), G.stripActiveSize = e - k.strip_padding_top - k.strip_padding_bottom), r(e), p(), h(), f(), c()
	}, this.setThumbUnselected = function (e) {
		N.setThumbUnselected(e)
	}, this.setCustomThumbs = function (e) {
		N.setCustomThumbs(e)
	}, this.________EXTERNAL_GETTERS___________ = function () {}, this.getObjects = function () {
		var e = N.getOptions(),
			t = jQuery.extend(k, e),
			i = {
				g_gallery: z,
				g_objGallery: T,
				g_objWrapper: P,
				g_arrItems: x,
				g_objStrip: j,
				g_objStripInner: C,
				g_aviaControl: A,
				g_touchThumbsControl: M,
				isVertical: H,
				g_options: t,
				g_thumbs: N
			};
		return i
	}, this.getObjThumbs = function () {
		return N
	}, this.getSelectedThumb = function () {
		var e = z.getSelectedItemIndex();
		return -1 == e ? null : N.getThumbByIndex(e)
	}, this.getSizeAndPosition = function () {
		var e = L.getElementSize(j);
		return e
	}, this.getHeight = function () {
		var e = j.outerHeight();
		return e
	}, this.getWidth = function () {
		var e = j.outerWidth();
		return e
	}, this.getSizes = function () {
		return G
	}, this.isVertical = function () {
		return H
	}, this.isPlaced = function () {
		return R.is_placed
	}, this.isMoveEnabled = function () {
		var e = I();
		return e
	}
}

function UGTouchThumbsControl() {
	function e() {
		var e = jQuery.now(),
			t = {};
		return t.passedTime = T.lastTime - T.startTime, t.lastActiveTime = e - T.buttonReleaseTime, t.passedDistance = T.lastPos - T.startPos, t.passedDistanceAbs = Math.abs(t.passedDistance), t
	}

	function t() {
		E.thumb_touch_slowFactor = w.normalizeSetting(5e-5, .01, 1, 100, y.strip_thumb_touch_sensetivity, !0)
	}

	function i(e) {
		return 0 == I ? w.getMousePosition(e).pageX : w.getMousePosition(e).pageY
	}

	function n(e) {
		var t = T.mousePos - e,
			i = T.innerPos - t,
			n = h.getInnerStripLimits();
		if (i > n.maxPos) {
			var r = i - n.maxPos;
			i = n.maxPos + r / 3
		}
		if (i < n.minPos) {
			var r = n.minPos - i;
			i = n.minPos - r / 3
		}
		h.positionInnerStrip(i)
	}

	function r(e) {
		var t = h.getInnerStripPos();
		T.mousePos = e, T.innerPos = t, T.lastPortionPos = t, T.lastDeltaTime = 0, T.lastDeltaPos = 0, T.startTime = jQuery.now(), T.startPos = T.innerPos, T.lastTime = T.startTime, T.lastPos = T.startPos, T.speed = 0
	}

	function o() {
		var e = jQuery.now(),
			t = e - T.lastTime;
		t >= E.touch_portion_time && (T.lastDeltaTime = e - T.lastTime, T.lastDeltaTime > E.touch_portion_time && (T.lastDeltaTime = E.touch_portion_time), T.lastDeltaPos = T.lastPos - T.lastPortionPos, T.lastPortionPos = T.lastPos, T.lastTime = e)
	}

	function a() {
		var e = E.thumb_touch_slowFactor,
			t = E.minDeltaTime,
			i = E.minPath,
			n = h.getInnerStripPos(),
			r = jQuery.now(),
			o = r - T.lastTime,
			a = n - T.lastPortionPos;
		t > o && T.lastDeltaTime > 0 && (o = T.lastDeltaTime, a = T.lastDeltaPos + a), t > o && (o = t);
		var l = a > 0 ? 1 : -1,
			u = 0;
		o > 0 && (u = a / o);
		var d = u * u / (2 * e) * l;
		Math.abs(d) <= i && (d = 0);
		var _ = h.getInnerStripPos(),
			g = _ + d,
			c = h.fixInnerStripLimits(g),
			p = h.getInnerStripLimits(),
			f = E.limitsBreakAddition,
			m = !1,
			v = c;
		if (g > p.maxPos && (m = !0, c = f, f > g && (c = g)), g < p.minPos) {
			m = !0;
			var y = p.minPos - f;
			c = y, g > y && (c = g)
		}
		var w = c - _,
			S = Math.abs(Math.round(u / e));
		if (0 != d && (S = S * w / d), _ != c) {
			var P = {
				left: c + "px"
			};
			1 == I && (P = {
				top: c + "px"
			}), b.animate(P, {
				duration: S,
				easing: E.animationEasing,
				queue: !0,
				progress: s
			})
		}
		if (1 == m) {
			var x = E.returnAnimateSpeed,
				j = {
					left: v + "px"
				};
			1 == I && (j = {
				top: v + "px"
			}), b.animate(j, {
				duration: x,
				easing: E.returnAnimationEasing,
				queue: !0,
				progress: s
			})
		}
	}

	function s() {
		T.lastPos = h.getInnerStripPos(), h.triggerStripMoveEvent()
	}

	function l() {
		return 1 == T.loop_active ? !0 : (T.loop_active = !0, void(T.handle = setInterval(o, 10)))
	}

	function u(e) {
		if (0 == T.loop_active) return !0;
		if (e) {
			var t = i(e);
			a(t)
		}
		T.loop_active = !1, T.handle = clearInterval(T.handle)
	}

	function d(e) {
		return 0 == T.isControlEnabled ? !0 : (T.buttonReleaseTime = jQuery.now(), 0 == T.touch_active ? (u(e), !0) : (e.preventDefault(), T.touch_active = !1, u(e), void v.removeClass("ug-dragging")))
	}

	function _(e) {
		if (0 == T.isControlEnabled) return !0;
		e.preventDefault(), T.touch_active = !0;
		var t = i(e);
		b.stop(!0), r(t), l(), v.addClass("ug-dragging")
	}

	function g(e) {
		if (0 == T.isControlEnabled) return !0;
		if (0 == T.touch_active) return !0;
		if (e.preventDefault(), 0 == e.buttons) return T.touch_active = !1, u(e), !0;
		var t = i(e);
		T.lastPos = h.getInnerStripPos(), n(t), o()
	}

	function c() {
		v.bind("mousedown touchstart", _), jQuery(window).add("body").bind("mouseup touchend", d), jQuery("body").bind("mousemove touchmove", g)
	}
	var h, p, f, m, v, b, y, I, w = new UGFunctions,
		E = {
			touch_portion_time: 200,
			thumb_touch_slowFactor: 0,
			minDeltaTime: 70,
			minPath: 10,
			limitsBreakAddition: 30,
			returnAnimateSpeed: 500,
			animationEasing: "easeOutCubic",
			returnAnimationEasing: "easeOutCubic"
		},
		T = {
			touch_active: !1,
			loop_active: !1,
			mousePos: 0,
			innerPos: 0,
			startPos: 0,
			startTime: 0,
			lastTime: 0,
			buttonReleaseTime: 0,
			lastPos: 0,
			lastPortionPos: 0,
			lastDeltaTime: 0,
			lastDeltaPos: 0,
			speed: 0,
			handle: "",
			touchEnabled: !1,
			isControlEnabled: !0
		};
	this.enable = function () {
		T.isControlEnabled = !0
	}, this.disable = function () {
		T.isControlEnabled = !1
	}, this.init = function (e) {
		h = e, m = e.getObjects(), p = m.g_gallery, f = m.g_objGallery, v = m.g_objStrip, b = m.g_objStripInner, y = m.g_options, I = m.isVertical, t(), c()
	}, this.isSignificantPassed = function () {
		var t = e();
		return t.passedTime > 300 ? !0 : t.passedDistanceAbs > 30 ? !0 : !1
	}, this.isTouchActive = function () {
		if (1 == T.touch_active) return !0;
		if (1 == b.is(":animated")) return !0;
		var t = e();
		return t.lastActiveTime < 50 ? !0 : !1
	}, this.destroy = function () {
		v.unbind("mousedown"), v.unbind("touchstart"), jQuery(window).add("body").unbind("mouseup").unbind("touchend"), jQuery("body").unbind("mousemove").unbind("touchmove")
	}
}

function UGPanelsBase() {
	function e(e, t) {
		switch (n.orientation) {
			case "right":
			case "left":
				var i = {
					left: e + "px"
				};
				break;
			case "top":
			case "bottom":
				var i = {
					top: e + "px"
				}
		}
		o.stop(!0).animate(i, {
			duration: 300,
			easing: "easeInOutQuad",
			queue: !1,
			complete: function () {
				t && t()
			}
		})
	}

	function t(e) {
		switch (n.orientation) {
			case "right":
			case "left":
				g.placeElement(o, e, null);
				break;
			case "top":
			case "bottom":
				g.placeElement(o, null, e)
		}
	}

	function i() {
		s.trigger(r.events.FINISH_MOVE)
	}
	var n, r, o, a, s, l, u, d = new UniteGalleryMain,
		_ = this,
		g = new UGFunctions;
	this.init = function (e, t, i, o, l) {
		n = t, r = i, d = e, a = o, s = l, u = jQuery(d)
	}, this.setHtml = function (e) {
		if (o = e, "strip" == n.panelType) var t = a.strippanel_enable_handle;
		else var t = a.gridpanel_enable_handle;
		if (1 == t && (l = new UGPanelHandle, l.init(r, o, a, n.panelType, d), l.setHtml()), n.isDisabledAtStart === !0) {
			var i = "<div class='ug-overlay-disabled'></div>";
			o.append(i), setTimeout(function () {
				o.children(".ug-overlay-disabled").hide()
			}, n.disabledAtStartTimeout)
		}
	}, this.placeElements = function () {
		l && l.placeHandle()
	}, this.initEvents = function () {
		l && (l.initEvents(), u.on(d.events.SLIDER_ACTION_START, function () {
			l.hideHandle()
		}), u.on(d.events.SLIDER_ACTION_END, function () {
			l.showHandle()
		}))
	}, this.destroy = function () {
		l && (l.destroy(), u.off(d.events.SLIDER_ACTION_START), u.off(d.events.SLIDER_ACTION_END))
	}, this.openPanel = function (a) {
		if (!a) var a = !1;
		return o.is(":animated") ? !1 : 0 == n.isClosed ? !1 : (n.isClosed = !1, s.trigger(r.events.OPEN_PANEL), void(a === !1 ? e(n.originalPos, i) : (t(n.originalPos), i())))
	}, this.closePanel = function (a) {
		if (!a) var a = !1;
		if (o.is(":animated")) return !1;
		if (1 == n.isClosed) return !1;
		var l = _.getClosedPanelDest();
		n.isClosed = !0, s.trigger(r.events.CLOSE_PANEL), a === !1 ? e(l, i) : (t(l), i())
	}, this.setClosedState = function (e) {
		n.originalPos = e, s.trigger(r.events.CLOSE_PANEL), n.isClosed = !0
	}, this.setOpenedState = function (e) {
		s.trigger(r.events.OPEN_PANEL), n.isClosed = !1
	}, this.getClosedPanelDest = function () {
		var e, t = g.getElementSize(o);
		switch (n.orientation) {
			case "left":
				n.originalPos = t.left, e = -n.panelWidth;
				break;
			case "right":
				n.originalPos = t.left;
				var i = d.getSize();
				e = i.width;
				break;
			case "top":
				n.originalPos = t.top, e = -n.panelHeight;
				break;
			case "bottom":
				n.originalPos = t.top;
				var i = d.getSize();
				e = i.height
		}
		return e
	}, this.isPanelClosed = function () {
		return n.isClosed
	}, this.setDisabledAtStart = function (e) {
		return 0 >= e ? !1 : (n.isDisabledAtStart = !0, void(n.disabledAtStartTimeout = e))
	}
}

function UGPanelHandle() {
	function e() {
		s.removeClass("ug-button-hover")
	}

	function t() {
		s.addClass("ug-button-closed")
	}

	function i() {
		s.removeClass("ug-button-closed")
	}

	function n(e) {
		return e.stopPropagation(), e.stopImmediatePropagation(), 0 == l.validateClickTouchstartEvent(e.type) ? !0 : void(a.isPanelClosed() ? a.openPanel() : a.closePanel())
	}

	function r() {
		var e = a.getOrientation();
		switch (e) {
			case "right":
			case "left":
				"top" != u.panel_handle_align && "bottom" != u.panel_handle_align && (u.panel_handle_align = "top");
				break;
			case "bottom":
				"left" != u.panel_handle_align && "right" != u.panel_handle_align && (u.panel_handle_align = "left");
				break;
			case "top":
				"left" != u.panel_handle_align && "right" != u.panel_handle_align && (u.panel_handle_align = "right")
		}
	}
	var o, a, s, l = new UGFunctions,
		u = {
			panel_handle_align: "top",
			panel_handle_offset: 0,
			panel_handle_skin: 0
		};
	this.init = function (e, t, i, n, r) {
		switch (a = e, o = t, n) {
			case "grid":
				u.panel_handle_align = i.gridpanel_handle_align, u.panel_handle_offset = i.gridpanel_handle_offset, u.panel_handle_skin = i.gridpanel_handle_skin;
				break;
			case "strip":
				u.panel_handle_align = i.strippanel_handle_align, u.panel_handle_offset = i.strippanel_handle_offset, u.panel_handle_skin = i.strippanel_handle_skin;
				break;
			default:
				throw new Error("Panel handle error: wrong panel type: " + n)
		}
		var s = r.getOptions(),
			l = s.gallery_skin;
		"" == u.panel_handle_skin && (u.panel_handle_skin = l)
	}, this.setHtml = function () {
		var e = a.getOrientation(),
			t = "ug-panel-handle-tip";
		switch (e) {
			case "right":
				t += " ug-handle-tip-left";
				break;
			case "left":
				t += " ug-handle-tip-right";
				break;
			case "bottom":
				t += " ug-handle-tip-top";
				break;
			case "top":
				t += " ug-handle-tip-bottom"
		}
		o.append("<div class='" + t + " ug-skin-" + u.panel_handle_skin + "'></div>"), s = o.children(".ug-panel-handle-tip")
	}, this.initEvents = function () {
		l.addClassOnHover(s), s.bind("click touchstart", n), jQuery(a).on(a.events.OPEN_PANEL, function () {
			e(), i()
		}), jQuery(a).on(a.events.CLOSE_PANEL, function () {
			e(), t()
		})
	}, this.destroy = function () {
		l.destroyButton(s), jQuery(a).off(a.events.OPEN_PANEL), jQuery(a).off(a.events.CLOSE_PANEL)
	}, this.placeHandle = function () {
		var e = l.getElementSize(s);
		r();
		var t = a.getOrientation();
		switch (t) {
			case "left":
				l.placeElement(s, "right", u.panel_handle_align, -e.width);
				break;
			case "right":
				l.placeElement(s, -e.width, u.panel_handle_align, 0, u.panel_handle_offset);
				break;
			case "top":
				l.placeElement(s, u.panel_handle_align, "bottom", u.panel_handle_offset, -e.height);
				break;
			case "bottom":
				l.placeElement(s, u.panel_handle_align, "top", u.panel_handle_offset, -e.height);
				break;
			default:
				throw new Error("Wrong panel orientation: " + t)
		}
	}, this.hideHandle = function () {
		1 == s.is(":visible") && s.hide()
	}, this.showHandle = function () {
		0 == s.is(":visible") && s.show()
	}
}

function UGStripPanel() {
	function e(e, t) {
		T = e, m = jQuery(T), j = jQuery.extend(j, t);
		var i = !1;
		1 == j.strippanel_vertical_type && (j = jQuery.extend(j, C), i = !0), 0 == j.strippanel_enable_buttons && (j = jQuery.extend(j, A), i = !0), 1 == i && (j = jQuery.extend(j, t));
		var n = T.getOptions(),
			r = n.gallery_skin;
		"" == j.strippanel_buttons_skin && (j.strippanel_buttons_skin = r), v = T.getElement(), x.init(T, M, w, j, E), P = new UGThumbsStrip, P.init(T, j)
	}

	function t() {
		if (0 == j.strippanel_vertical_type) {
			if (0 == M.panelWidth) throw new Error("Strip panel error: The width not set, please set width")
		} else if (0 == M.panelHeight) throw new Error("Strip panel error: The height not set, please set height");
		if (null == M.orientation) throw new Error("Wrong orientation, please set panel orientation before run");
		return !0
	}

	function i() {
		return 1 == M.isFirstRun && 0 == t() ? !1 : (P.run(), s(), d(), f(), M.isFirstRun = !1, void c())
	}

	function n(e) {
		if (!e) var e = v;
		if (e.append("<div class='ug-strip-panel'></div>"), b = e.children(".ug-strip-panel"), 1 == j.strippanel_enable_buttons) {
			var t = "ug-strip-arrow-left",
				i = "ug-strip-arrow-right";
			1 == j.strippanel_vertical_type && (t = "ug-strip-arrow-up", i = "ug-strip-arrow-down"), b.append("<div class='ug-strip-arrow " + t + " ug-skin-" + j.strippanel_buttons_skin + "'><div class='ug-strip-arrow-tip'></div></div>"), b.append("<div class='ug-strip-arrow " + i + " ug-skin-" + j.strippanel_buttons_skin + "'><div class='ug-strip-arrow-tip'></div></div>")
		}
		x.setHtml(b), P.setHtml(b), 1 == j.strippanel_enable_buttons && (I = b.children("." + t), y = b.children("." + i)), r()
	}

	function r() {
		"" != j.strippanel_background_color && b.css("background-color", j.strippanel_background_color)
	}

	function o() {
		var e = P.getHeight(),
			t = M.panelWidth;
		if (y) {
			I.height(e), y.height(e);
			var i = I.children(".ug-strip-arrow-tip");
			S.placeElement(i, "center", "middle");
			var n = y.children(".ug-strip-arrow-tip");
			S.placeElement(n, "center", "middle")
		}
		var r = e + j.strippanel_padding_top + j.strippanel_padding_bottom;
		b.width(t), b.height(r), M.panelHeight = r;
		var o = t - j.strippanel_padding_left - j.strippanel_padding_right;
		if (y) {
			var a = y.outerWidth();
			o = o - 2 * a - 2 * j.strippanel_padding_buttons
		}
		P.resize(o)
	}

	function a() {
		var e = P.getWidth(),
			t = M.panelHeight;
		if (y) {
			I.width(e), y.width(e);
			var i = I.children(".ug-strip-arrow-tip");
			S.placeElement(i, "center", "middle");
			var n = y.children(".ug-strip-arrow-tip");
			S.placeElement(n, "center", "middle")
		}
		var r = e + j.strippanel_padding_left + j.strippanel_padding_right;
		b.width(r), b.height(t), M.panelWidth = r;
		var o = t - j.strippanel_padding_top - j.strippanel_padding_bottom;
		if (y) {
			var a = y.outerHeight();
			o = o - 2 * a - 2 * j.strippanel_padding_buttons
		}
		P.resize(o)
	}

	function s() {
		0 == j.strippanel_vertical_type ? o() : a()
	}

	function l() {
		y && (S.placeElement(I, "left", "top", j.strippanel_padding_left, j.strippanel_padding_top), S.placeElement(y, "right", "top", j.strippanel_padding_right, j.strippanel_padding_top));
		var e = j.strippanel_padding_left;
		y && (e += y.outerWidth() + j.strippanel_padding_buttons), P.setPosition(e, j.strippanel_padding_top)
	}

	function u() {
		y && (S.placeElement(I, "left", "top", j.strippanel_padding_left, j.strippanel_padding_top), S.placeElement(y, "left", "bottom", j.strippanel_padding_left, j.strippanel_padding_bottom));
		var e = j.strippanel_padding_top;
		y && (e += y.outerHeight() + j.strippanel_padding_buttons), P.setPosition(j.strippanel_padding_left, e)
	}

	function d() {
		0 == j.strippanel_vertical_type ? l() : u(), x.placeElements()
	}

	function _(e) {
		return S.isButtonDisabled(e) ? !0 : void("advance_item" == j.strippanel_buttons_role ? T.nextItem() : P.scrollForeward())
	}

	function g(e) {
		return S.isButtonDisabled(e) ? !0 : void("advance_item" == j.strippanel_buttons_role ? T.prevItem() : P.scrollBack())
	}

	function c() {
		if (!y) return !0;
		if (0 == P.isMoveEnabled()) return S.disableButton(I), S.disableButton(y), !0;
		var e = P.getInnerStripLimits(),
			t = P.getInnerStripPos();
		t >= e.maxPos ? S.disableButton(I) : S.enableButton(I), t <= e.minPos ? S.disableButton(y) : S.enableButton(y)
	}

	function h() {
		c()
	}

	function p() {
		T.isLastItem() ? S.disableButton(y) : S.enableButton(y), T.isFirstItem() ? S.disableButton(I) : S.enableButton(I)
	}

	function f() {
		if (1 == M.isEventsInited) return !1;
		if (M.isEventsInited = !0, y)
			if (S.addClassOnHover(y, "ug-button-hover"), S.addClassOnHover(I, "ug-button-hover"), S.setButtonOnClick(I, g), S.setButtonOnClick(y, _), "advance_item" != j.strippanel_buttons_role) jQuery(P).on(P.events.STRIP_MOVE, h), jQuery(P).on(P.events.INNER_SIZE_CHANGE, c), m.on(T.events.SIZE_CHANGE, c);
			else {
				var e = T.getOptions();
				0 == e.gallery_carousel && jQuery(T).on(T.events.ITEM_CHANGE, p)
			}
		x.initEvents()
	}
	var m, v, b, y, I, w = this,
		E = jQuery(this),
		T = new UniteGalleryMain,
		S = new UGFunctions,
		P = new UGThumbsStrip,
		x = new UGPanelsBase;
	this.events = {
		FINISH_MOVE: "gridpanel_move_finish",
		OPEN_PANEL: "open_panel",
		CLOSE_PANEL: "close_panel"
	};
	var j = {
			strippanel_vertical_type: !1,
			strippanel_padding_top: 8,
			strippanel_padding_bottom: 8,
			strippanel_padding_left: 0,
			strippanel_padding_right: 0,
			strippanel_enable_buttons: !0,
			strippanel_buttons_skin: "",
			strippanel_padding_buttons: 2,
			strippanel_buttons_role: "scroll_strip",
			strippanel_enable_handle: !0,
			strippanel_handle_align: "top",
			strippanel_handle_offset: 0,
			strippanel_handle_skin: "",
			strippanel_background_color: ""
		},
		C = {
			strip_vertical_type: !0,
			strippanel_padding_left: 8,
			strippanel_padding_right: 8,
			strippanel_padding_top: 0,
			strippanel_padding_bottom: 0
		},
		A = {
			strippanel_padding_left: 8,
			strippanel_padding_right: 8,
			strippanel_padding_top: 8,
			strippanel_padding_bottom: 8
		},
		M = {
			panelType: "strip",
			panelWidth: 0,
			panelHeight: 0,
			isEventsInited: !1,
			isClosed: !1,
			orientation: null,
			originalPos: null,
			isFirstRun: !0
		};
	this.destroy = function () {
		y && (S.destroyButton(y), S.destroyButton(I), jQuery(P).off(P.events.STRIP_MOVE), jQuery(T).off(T.events.ITEM_CHANGE), jQuery(T).off(T.events.SIZE_CHANGE)), x.destroy(), P.destroy()
	}, this.getOrientation = function () {
		return M.orientation
	}, this.setOrientation = function (e) {
		M.orientation = e
	}, this.init = function (t, i) {
		e(t, i)
	}, this.run = function () {
		i()
	}, this.setHtml = function (e) {
		n(e)
	}, this.getElement = function () {
		return b
	}, this.getSize = function () {
		var e = S.getElementSize(b);
		return e
	}, this.setWidth = function (e) {
		M.panelWidth = e
	}, this.setHeight = function (e) {
		M.panelHeight = e
	}, this.resize = function (e) {
		w.setWidth(e), s(), d()
	}, this.__________Functions_From_Base_____ = function () {}, this.isPanelClosed = function () {
		return x.isPanelClosed()
	}, this.getClosedPanelDest = function () {
		return x.getClosedPanelDest()
	}, this.openPanel = function (e) {
		x.openPanel(e)
	}, this.closePanel = function (e) {
		x.closePanel(e)
	}, this.setOpenedState = function (e) {
		x.setOpenedState(e)
	}, this.setClosedState = function (e) {
		x.setClosedState(e)
	}, this.setCustomThumbs = function (e) {
		P.setCustomThumbs(e)
	}, this.setDisabledAtStart = function (e) {
		x.setDisabledAtStart(e)
	}
}

function UGGridPanel() {
	function e(e, i) {
		x = e, t(), i && i.vertical_scroll && (M.gridpanel_vertical_scroll = i.vertical_scroll), M = jQuery.extend(M, i), 1 == L.isHorType ? (M = jQuery.extend(M, z), M = jQuery.extend(M, i)) : 1 == M.gridpanel_vertical_scroll && (M = jQuery.extend(M, O), M = jQuery.extend(M, i), M.grid_panes_direction = "bottom");
		var n = x.getOptions(),
			r = n.gallery_skin;
		"" == M.gridpanel_arrows_skin && (M.gridpanel_arrows_skin = r);
		var o = e.getObjects();
		I = o.g_objWrapper, A.init(x, L, S, M, P), C = new UGThumbsGrid, C.init(x, M)
	}

	function t() {
		if (null == L.orientation) throw new Error("Wrong orientation, please set panel orientation before run")
	}

	function i() {
		t(), o(), C.run(), l(), u(), y(), d()
	}

	function n() {
		I.append("<div class='ug-grid-panel'></div>"), w = I.children(".ug-grid-panel"), L.isHorType ? (w.append("<div class='grid-arrow grid-arrow-left-hortype ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), w.append("<div class='grid-arrow grid-arrow-right-hortype ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), T = w.children(".grid-arrow-left-hortype"), E = w.children(".grid-arrow-right-hortype")) : 0 == M.gridpanel_vertical_scroll ? (w.append("<div class='grid-arrow grid-arrow-left ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), w.append("<div class='grid-arrow grid-arrow-right ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), T = w.children(".grid-arrow-left"), E = w.children(".grid-arrow-right")) : (w.append("<div class='grid-arrow grid-arrow-up ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), w.append("<div class='grid-arrow grid-arrow-down ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), T = w.children(".grid-arrow-up"), E = w.children(".grid-arrow-down")), A.setHtml(w), T.fadeTo(0, 0), E.fadeTo(0, 0), C.setHtml(w), r()
	}

	function r() {
		"" != M.gridpanel_background_color && w.css("background-color", M.gridpanel_background_color)
	}

	function o() {
		"center" == M.gridpanel_grid_align && (M.gridpanel_grid_align = "middle")
	}

	function a() {
		var e = M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom,
			t = L.panelHeight - e;
		if (0 == M.gridpanel_arrows_always_on) {
			var i = C.getNumPanesEstimationByHeight(t);
			if (1 == i) return t
		}
		var n = j.getElementSize(E),
			r = n.height,
			e = r + M.gridpanel_arrows_padding_vert;
		return 1 == M.gridpanel_vertical_scroll && (e *= 2), e += M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom, t = L.panelHeight - e
	}

	function s() {
		var e = M.gridpanel_padding_border_left + M.gridpanel_padding_border_right,
			t = L.panelWidth - e;
		if (0 == M.gridpanel_arrows_always_on) {
			var i = C.getNumPanesEstimationByWidth(t);
			if (1 == i) return t
		}
		var n = j.getElementSize(E),
			r = n.width;
		return e += 2 * (r + M.gridpanel_arrows_padding_hor), t = L.panelWidth - e
	}

	function l() {
		var e = !1;
		if (1 == M.gridpanel_arrows_always_on) e = !0;
		else {
			var t = C.getNumPanes();
			t > 1 && (e = !0)
		}
		1 == e ? (E.show().fadeTo(0, 1), T.show().fadeTo(0, 1), L.arrowsVisible = !0) : (E.hide(), T.hide(), L.arrowsVisible = !1)
	}

	function u() {
		var e = C.getSize();
		1 == L.isHorType ? L.panelHeight = e.height + M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom : L.panelWidth = e.width + M.gridpanel_padding_border_left + M.gridpanel_padding_border_right, j.setElementSize(w, L.panelWidth, L.panelHeight)
	}

	function d() {
		return 1 == L.isEventsInited ? !1 : (L.isEventsInited = !0, T && (j.addClassOnHover(T), C.attachPrevPaneButton(T)), E && (j.addClassOnHover(E), C.attachNextPaneButton(E)), void A.initEvents())
	}

	function _() {
		var e = M.gridpanel_padding_border_left;
		return e
	}

	function g() {
		var e = M.gridpanel_grid_align,
			t = 0;
		switch (e) {
			case "top":
				t = M.gridpanel_padding_border_top;
				break;
			case "bottom":
				t = M.gridpanel_padding_border_bottom
		}
		var i = _(),
			n = C.getElement();
		j.placeElement(n, i, e, 0, t)
	}

	function c() {
		var e, t, i, n, r = j.getElementSize(T),
			o = C.getSize();
		switch (M.gridpanel_grid_align) {
			default:
				case "top":
				e = M.gridpanel_padding_border_top + r.height + M.gridpanel_arrows_padding_vert;
			break;
			case "middle":
					e = "middle";
				break;
			case "bottom":
					e = L.panelHeight - o.height - r.height - M.gridpanel_padding_border_bottom - M.gridpanel_arrows_padding_vert
		}
		var a = _(),
			s = C.getElement();
		j.placeElement(s, a, e);
		var o = C.getSize();
		switch (M.gridpanel_arrows_align_vert) {
			default:
				case "center":
				case "middle":
				t = (o.top - r.height) / 2,
			i = o.bottom + (L.panelHeight - o.bottom - r.height) / 2,
			n = 0;
			break;
			case "grid":
					t = o.top - r.height - M.gridpanel_arrows_padding_vert_vert,
				i = o.bottom + M.gridpanel_arrows_padding_vert,
				n = 0;
				break;
			case "border":
					case "borders":
					t = M.gridpanel_padding_border_top,
				i = "bottom",
				n = M.gridpanel_padding_border_bottom
		}
		j.placeElement(T, "center", t), j.placeElement(E, "center", i, 0, n)
	}

	function h() {
		1 == L.arrowsVisible ? c() : g()
	}

	function p() {
		var e, t, i, n, r = j.getElementSize(T),
			o = C.getSize(),
			a = M.gridpanel_padding_border_top;
		switch (M.gridpanel_grid_align) {
			case "middle":
				switch (M.gridpanel_arrows_align_vert) {
					default: var s = o.height + M.gridpanel_arrows_padding_vert + r.height;a = (L.panelHeight - s) / 2;
					break;
					case "border":
							case "borders":
							var l = L.panelHeight - r.height - M.gridpanel_padding_border_bottom;a = (l - o.height) / 2
				}
				break;
			case "bottom":
				var s = o.height + r.height + M.gridpanel_arrows_padding_vert;
				a = L.panelHeight - s - M.gridpanel_padding_border_bottom
		}
		var u = C.getElement(),
			d = _();
		j.placeElement(u, d, a);
		var o = C.getSize();
		switch (M.gridpanel_arrows_align_vert) {
			default:
				case "center":
				case "middle":
				e = o.bottom + (L.panelHeight - o.bottom - r.height) / 2,
			i = 0;
			break;
			case "grid":
					e = o.bottom + M.gridpanel_arrows_padding_vert,
				i = 0;
				break;
			case "border":
					case "borders":
					e = "bottom",
				i = M.gridpanel_padding_border_bottom
		}
		t = -r.width / 2 - M.gridpanel_space_between_arrows / 2, j.placeElement(T, "center", e, t, i);
		var n = Math.abs(t);
		j.placeElement(E, "center", e, n, i)
	}

	function f() {
		1 == L.arrowsVisible ? p() : g()
	}

	function m() {
		var e, t, i, n, r = j.getElementSize(T),
			o = C.getSize();
		switch (M.gridpanel_grid_align) {
			default:
				case "left":
				e = M.gridpanel_padding_border_left + M.gridpanel_arrows_padding_hor + r.width;
			break;
			case "middle":
					case "center":
					e = "center";
				break;
			case "right":
					e = L.panelWidth - o.width - r.width - M.gridpanel_padding_border_right - M.gridpanel_arrows_padding_hor
		}
		var a = C.getElement();
		switch (j.placeElement(a, e, M.gridpanel_padding_border_top), o = C.getSize(), M.gridpanel_arrows_align_vert) {
			default:
				case "center":
				case "middle":
				n = (o.height - r.height) / 2 + o.top;
			break;
			case "top":
					n = M.gridpanel_padding_border_top + M.gridpanel_arrows_padding_vert;
				break;
			case "bottom":
					n = L.panelHeight - M.gridpanel_padding_border_bottom - M.gridpanel_arrows_padding_vert - r.height
		}
		switch (M.gridpanel_arrows_align_hor) {
			default:
				case "borders":
				t = M.gridpanel_padding_border_left,
			i = L.panelWidth - M.gridpanel_padding_border_right - r.width;
			break;
			case "grid":
					t = o.left - M.gridpanel_arrows_padding_hor - r.width,
				i = o.right + M.gridpanel_arrows_padding_hor;
				break;
			case "center":
					t = (o.left - r.width) / 2,
				i = o.right + (L.panelWidth - o.right - r.width) / 2
		}
		j.placeElement(T, t, n), j.placeElement(E, i, n)
	}

	function v() {
		var e, t = C.getSize();
		switch (M.gridpanel_grid_align) {
			default:
				case "left":
				e = M.gridpanel_padding_border_left;
			break;
			case "middle":
					case "center":
					e = "center";
				break;
			case "right":
					e = L.panelWidth - t.width - M.gridpanel_padding_border_right
		}
		var i = C.getElement();
		j.placeElement(i, e, M.gridpanel_padding_border_top)
	}

	function b() {
		1 == L.arrowsVisible ? m() : v()
	}

	function y() {
		0 == L.isHorType ? 1 == M.gridpanel_vertical_scroll ? h() : f() : b(), A.placeElements()
	}
	var I, w, E, T, S = this,
		P = jQuery(this),
		x = new UniteGalleryMain,
		j = new UGFunctions,
		C = new UGThumbsGrid,
		A = new UGPanelsBase;
	this.events = {
		FINISH_MOVE: "gridpanel_move_finish",
		OPEN_PANEL: "open_panel",
		CLOSE_PANEL: "close_panel"
	};
	var M = {
			gridpanel_vertical_scroll: !0,
			gridpanel_grid_align: "middle",
			gridpanel_padding_border_top: 10,
			gridpanel_padding_border_bottom: 4,
			gridpanel_padding_border_left: 10,
			gridpanel_padding_border_right: 10,
			gridpanel_arrows_skin: "",
			gridpanel_arrows_align_vert: "middle",
			gridpanel_arrows_padding_vert: 4,
			gridpanel_arrows_align_hor: "center",
			gridpanel_arrows_padding_hor: 10,
			gridpanel_space_between_arrows: 20,
			gridpanel_arrows_always_on: !1,
			gridpanel_enable_handle: !0,
			gridpanel_handle_align: "top",
			gridpanel_handle_offset: 0,
			gridpanel_handle_skin: "",
			gridpanel_background_color: ""
		},
		O = {
			gridpanel_grid_align: "middle",
			gridpanel_padding_border_top: 2,
			gridpanel_padding_border_bottom: 2
		},
		z = {
			gridpanel_grid_align: "center"
		},
		L = {
			panelType: "grid",
			isHorType: !1,
			arrowsVisible: !1,
			panelHeight: 0,
			panelWidth: 0,
			originalPosX: null,
			isEventsInited: !1,
			isClosed: !1,
			orientation: null
		};
	this.destroy = function () {
		T && j.destroyButton(T), E && j.destroyButton(E), A.destroy(), C.destroy()
	}, this.getOrientation = function () {
		return L.orientation
	}, this.setOrientation = function (e) {
		switch (L.orientation = e, e) {
			case "right":
			case "left":
				L.isHorType = !1;
				break;
			case "top":
			case "bottom":
				L.isHorType = !0;
				break;
			default:
				throw new Error("Wrong grid panel orientation: " + e)
		}
	}, this.setHeight = function (e) {
		if (1 == L.isHorType) throw new Error("setHeight is not appliable to this orientatio (" + L.orientation + "). Please use setWidth");
		L.panelHeight = e;
		var t = a();
		C.setMaxHeight(t)
	}, this.setWidth = function (e) {
		if (0 == L.isHorType) throw new Error("setWidth is not appliable to this orientatio (" + L.orientation + "). Please use setHeight");
		L.panelWidth = e;
		var t = s();
		C.setMaxWidth(t)
	}, this.init = function (t, i) {
		e(t, i)
	}, this.setHtml = function () {
		n()
	}, this.run = function () {
		i()
	}, this.getElement = function () {
		return w
	}, this.getSize = function () {
		var e = j.getElementSize(w);
		return e
	}, this.__________Functions_From_Base_____ = function () {}, this.isPanelClosed = function () {
		return A.isPanelClosed()
	}, this.getClosedPanelDest = function () {
		return A.getClosedPanelDest()
	}, this.openPanel = function (e) {
		A.openPanel(e)
	}, this.closePanel = function (e) {
		A.closePanel(e)
	}, this.setOpenedState = function (e) {
		A.setOpenedState(e)
	}, this.setClosedState = function (e) {
		A.setClosedState(e)
	}, this.setDisabledAtStart = function (e) {
		A.setDisabledAtStart(e)
	}
}

function UGThumbsGrid() {
	function e(e, t, i) {
		if (N = e.getObjects(), B = e, B.attachThumbsPanel("grid", Q), H = jQuery(e), k = N.g_objWrapper, R = N.g_arrItems, i === !0 && (X.isTilesMode = !0), X.numThumbs = R.length, _(t), 1 == X.isTilesMode) {
			U.setFixedMode(), U.setApproveClickFunction(x), U.init(e, V);
			var n = U.getOptions();
			X.tileMaxHeight = n.tile_height, X.tileMaxWidth = n.tile_width, Y = U.getObjThumbs()
		} else t.thumb_fixed_size = !0, Y.init(e, t)
	}

	function t(e) {
		var t = k;
		e && (t = e), t.append("<div class='ug-thumbs-grid'><div class='ug-thumbs-grid-inner'></div></div>"), G = t.children(".ug-thumbs-grid"), D = G.children(".ug-thumbs-grid-inner"), 1 == X.isTilesMode ? U.setHtml(D) : Y.setHtmlThumbs(D)
	}

	function n() {
		if (0 == X.isHorizontal) {
			if (0 == X.gridHeight) throw new Error("You must set height before run.")
		} else if (0 == X.gridWidth) throw new Error("You must set width before run.")
	}

	function r() {
		var e = B.getSelectedItem();
		if (n(), 1 == X.isFirstTimeRun) L(), 1 == X.isTilesMode ? (a(), u(), U.run()) : (Y.setHtmlProperties(), u(), Y.loadThumbsImages());
		else if (1 == X.isTilesMode) {
			var t = a();
			1 == t && (u(), U.run())
		}
		if (p(), 1 == X.isFirstTimeRun && X.isTilesMode) {
			var i = Y.getThumbs();
			i.each(function (e, t) {
				k.trigger(X.eventSizeChange, jQuery(t))
			}), i.fadeTo(0, 1)
		}
		null != e && d(e.index), W.trigger(Q.events.PANE_CHANGE, X.currentPane), X.isFirstTimeRun = !1
	}

	function o() {
		if (1 == X.isTilesMode) var e = U.getGlobalTileSize();
		else var e = Y.getGlobalThumbSize();
		return e
	}

	function a() {
		if (0 == X.isTilesMode) throw new Error("Dynamic size can be set only in tiles mode");
		var e = !1,
			t = B.isMobileMode(),
			i = X.spaceBetweenCols;
		1 == t ? (X.spaceBetweenCols = V.grid_space_between_mobile, X.spaceBetweenRows = V.grid_space_between_mobile) : (X.spaceBetweenCols = V.grid_space_between_cols, X.spaceBetweenRows = V.grid_space_between_rows), X.spaceBetweenCols != i && (e = !0);
		var n = o(),
			r = n.width,
			a = X.tileMaxWidth,
			s = F.getNumItemsInSpace(X.gridWidth, X.tileMaxWidth, X.spaceBetweenCols);
		return s < V.grid_min_cols && (a = F.getItemSizeInSpace(X.gridWidth, V.grid_min_cols, X.spaceBetweenCols)), U.setTileSizeOptions(a), a != r && (e = !0), e
	}

	function s() {
		var e = o(),
			t = e.height,
			i = X.gridWidth,
			n = V.grid_num_rows * t + (V.grid_num_rows - 1) * X.spaceBetweenRows + 2 * V.grid_padding;
		X.gridHeight = n, F.setElementSize(G, i, n), F.setElementSize(D, i, n), X.innerWidth = i, X.innerHeight = n
	}

	function l() {
		var e = o(),
			t = e.width,
			i = V.grid_num_cols * t + (V.grid_num_cols - 1) * X.spaceBetweenCols + 2 * V.grid_padding,
			n = X.gridHeight;
		X.gridWidth = i, F.setElementSize(G, i, n), F.setElementSize(D, i, n), X.innerWidth = i, X.innerHeight = n
	}

	function u() {
		0 == X.isHorizontal ? l() : s()
	}

	function d(e) {
		var t = T(e);
		return -1 == t ? !1 : void Q.gotoPane(t, "scroll")
	}

	function _(e) {
		V = jQuery.extend(V, e), Y.setOptions(e), X.isNavigationVertical = "top" == V.grid_panes_direction || "bottom" == V.grid_panes_direction, X.spaceBetweenCols = V.grid_space_between_cols, X.spaceBetweenRows = V.grid_space_between_rows
	}

	function g() {
		var e = D.children(".ug-thumb-wrapper"),
			t = 0,
			n = 0,
			r = 0,
			o = 0,
			a = 0,
			s = 0;
		X.innerWidth = 0, X.numPanes = 1, X.arrPanes = [], X.numThumbsInPane = 0, X.arrPanes.push(o);
		var l = e.length;
		for (i = 0; i < l; i++) {
			var u = jQuery(e[i]);
			F.placeElement(u, t, n);
			var d = u.outerWidth(),
				_ = u.outerHeight();
			t > a && (a = t);
			var g = n + _;
			g > s && (s = g);
			var c = a + d;
			c > X.innerWidth && (X.innerWidth = c), t += d + X.spaceBetweenCols, r++, r >= V.grid_num_cols && (n += _ + X.spaceBetweenRows, t = o, r = 0), 1 == X.numPanes && X.numThumbsInPane++, n + _ > X.gridHeight && (n = 0, o = X.innerWidth + X.spaceBetweenCols, t = o, r = 0, 1 == X.isMaxHeight && 1 == X.numPanes && (X.gridHeight = s, G.height(X.gridHeight)), i < l - 1 && (X.numPanes++, X.arrPanes.push(o)))
		}
		D.width(X.innerWidth), 1 == X.isMaxHeight && 1 == X.numPanes && (X.gridHeight = s, G.height(s))
	}

	function c() {
		var e = D.children(".ug-thumb-wrapper"),
			t = 0,
			n = 0,
			r = 0,
			o = 0,
			a = 0,
			s = 0;
		X.innerWidth = 0, X.numPanes = 1, X.arrPanes = [], X.numThumbsInPane = 0, X.arrPanes.push(a);
		var l = e.length;
		for (i = 0; i < l; i++) {
			var u = jQuery(e[i]);
			F.placeElement(u, t, n);
			var d = u.outerWidth(),
				_ = u.outerHeight();
			t += d + X.spaceBetweenCols;
			var g = n + _;
			g > r && (r = g), o++, o >= V.grid_num_cols && (n += _ + X.spaceBetweenRows, t = a, o = 0), 1 == X.numPanes && X.numThumbsInPane++, g = n + _;
			var c = s + X.gridHeight;
			g > c && (1 == X.isMaxHeight && 1 == X.numPanes && (X.gridHeight = r, G.height(X.gridHeight), c = X.gridHeight), n = c + X.spaceBetweenRows, s = n, a = 0, t = a, o = 0, i < l - 1 && (X.numPanes++, X.arrPanes.push(n)))
		}
		D.height(r), X.innerHeight = r, 1 == X.isMaxHeight && 1 == X.numPanes && (X.gridHeight = r, G.height(r))
	}

	function h() {
		var e = D.children(".ug-thumb-wrapper"),
			t = V.grid_padding,
			n = V.grid_padding,
			r = n,
			o = t,
			a = 0,
			s = 0,
			l = 0,
			u = 0,
			d = 0;
		X.innerWidth = 0, X.numPanes = 1, X.arrPanes = [], X.numThumbsInPane = 0, X.arrPanes.push(t - V.grid_padding);
		var _ = e.length;
		for (i = 0; i < _; i++) {
			var g = jQuery(e[i]),
				c = g.outerWidth(),
				h = g.outerHeight();
			o - t + c > X.gridWidth && (d++, r = 0, d >= V.grid_num_rows ? (d = 0, t = o, r = n, l = 0, 1 == X.numPanes && (X.gridWidth = a + V.grid_padding, G.width(X.gridWidth), X.gridHeight = u + V.grid_padding, G.height(X.gridHeight)), X.numPanes++, X.arrPanes.push(t - V.grid_padding)) : (o = t, r = l + X.spaceBetweenRows)), F.placeElement(g, o, r);
			var p = o + c;
			p > a && (a = p);
			var f = r + h;
			f > l && (l = f), f > u && (u = f), f > s && (s = f);
			var p = a + c;
			p > X.innerWidth && (X.innerWidth = p), o += c + X.spaceBetweenCols, 1 == X.numPanes && X.numThumbsInPane++
		}
		X.innerWidth = a + V.grid_padding, X.innerHeight = u + V.grid_padding, D.width(X.innerWidth), D.height(X.innerHeight), 1 == X.numPanes && (X.gridWidth = a + V.grid_padding, X.gridHeight = u + V.grid_padding, G.width(X.gridWidth), G.height(X.gridHeight))
	}

	function p() {
		0 == X.isHorizontal ? X.isNavigationVertical ? c() : g() : h()
	}

	function f(e) {
		if (0 > e || e >= X.numThumbs) throw new Error("Thumb not exists: " + e);
		return !0
	}

	function m(e) {
		if (e >= X.numPanes || 0 > e) throw new Error("Pane " + index + " doesn't exists.");
		return !0
	}

	function v(e) {
		var t = w(e);
		return 0 == t ? !1 : void D.css(t)
	}

	function b(e) {
		var t = w(e);
		return 0 == t ? !1 : void D.stop(!0).animate(t, {
			duration: V.grid_transition_duration,
			easing: V.grid_transition_easing,
			queue: !1
		})
	}

	function y() {
		var e = -X.arrPanes[X.currentPane];
		b(e)
	}

	function I() {
		return 1 == X.isNavigationVertical ? X.gridHeight : X.gridWidth
	}

	function w(e) {
		var t = {};
		return 1 == X.isNavigationVertical ? t.top = e + "px" : t.left = e + "px", t
	}

	function E() {
		var e = F.getElementSize(D);
		return 1 == X.isNavigationVertical ? e.top : e.left
	}

	function T(e) {
		if (0 == f(e)) return -1;
		var t = Math.floor(e / X.numThumbsInPane);
		return t
	}

	function S() {
		if (1 == X.numPanes) return !1;
		var e = F.getStoredEventData(X.storedEventID),
			t = e.diffTime,
			i = E(),
			n = Math.abs(i - e.startInnerPos);
		return n > 30 ? !0 : n > 5 && t > 300 ? !0 : !1
	}

	function P() {
		var e = F.getStoredEventData(X.storedEventID),
			t = E();
		diffPos = Math.abs(e.startInnerPos - t);
		var i = I(),
			n = Math.round(3 * i / 8);
		return diffPos >= n ? !0 : e.diffTime < 300 && diffPos > 25 ? !0 : !1
	}

	function x() {
		if (1 == X.numPanes) return !0;
		var e = F.isApproveStoredEventClick(X.storedEventID, X.isNavigationVertical);
		return e
	}

	function j(e) {
		if (1 == S()) return !0;
		var t = jQuery(this),
			i = Y.getItemByThumb(t);
		B.selectItem(i)
	}

	function C(e) {
		if (1 == X.numPanes) return !0;
		if (1 == X.touchActive) return !0;
		0 == X.isTilesMode && e.preventDefault(), X.touchActive = !0;
		var t = {
			startInnerPos: E()
		};
		F.storeEventData(e, X.storedEventID, t)
	}

	function A() {
		if (0 == V.grid_vertical_scroll_ondrag) return !1;
		if (1 == X.isNavigationVertical) return !1;
		var e = F.handleScrollTop(X.storedEventID);
		return "vert" === e ? !0 : !1
	}

	function M(e) {
		if (0 == X.touchActive) return !0;
		e.preventDefault(), F.updateStoredEventData(e, X.storedEventID);
		var t = F.getStoredEventData(X.storedEventID, X.isNavigationVertical),
			i = A();
		if (i) return !0;
		var n = t.diffMousePos,
			r = t.startInnerPos + n,
			o = n > 0 ? "prev" : "next",
			a = X.arrPanes[X.numPanes - 1];
		0 == V.grid_carousel && r > 0 && "prev" == o && (r /= 3), 0 == V.grid_carousel && -a > r && "next" == o && (r = t.startInnerPos + n / 3), v(r)
	}

	function O(e) {
		if (0 == X.touchActive) return !0;
		F.updateStoredEventData(e, X.storedEventID);
		var t = F.getStoredEventData(X.storedEventID, X.isNavigationVertical);
		if (X.touchActive = !1, 0 == P()) return y(), !0;
		var i = E(),
			n = i - t.startInnerPos,
			r = n > 0 ? "prev" : "next";
		"next" == r ? 0 == V.grid_carousel && Q.isLastPane() ? y() : Q.nextPane() : 0 == V.grid_carousel && Q.isFirstPane() ? y() : Q.prevPane()
	}

	function z() {
		var e = B.getSelectedItem();
		Y.setThumbSelected(e.objThumbWrapper), d(e.index)
	}

	function L() {
		if (0 == X.isTilesMode) {
			Y.initEvents();
			var e = G.find(".ug-thumb-wrapper");
			e.on("click touchend", j), H.on(B.events.ITEM_CHANGE, z)
		} else U.initEvents();
		G.bind("mousedown touchstart", C), jQuery("body").bind("mousemove touchmove", M), jQuery(window).add("body").bind("mouseup touchend", O)
	}
	var H, N, k, R, G, D, Q = this,
		W = jQuery(this),
		B = new UniteGalleryMain,
		F = new UGFunctions,
		Y = new UGThumbsGeneral,
		U = new UGTileDesign,
		V = {
			grid_panes_direction: "left",
			grid_num_cols: 2,
			grid_min_cols: 2,
			grid_num_rows: 2,
			grid_space_between_cols: 10,
			grid_space_between_rows: 10,
			grid_space_between_mobile: 10,
			grid_transition_duration: 300,
			grid_transition_easing: "easeInOutQuad",
			grid_carousel: !1,
			grid_padding: 0,
			grid_vertical_scroll_ondrag: !1
		};
	this.events = {
		PANE_CHANGE: "pane_change"
	};
	var X = {
		eventSizeChange: "thumb_size_change",
		isHorizontal: !1,
		isMaxHeight: !1,
		isMaxWidth: !1,
		gridHeight: 0,
		gridWidth: 0,
		innerWidth: 0,
		innerHeight: 0,
		numPanes: 0,
		arrPanes: 0,
		numThumbs: 0,
		currentPane: 0,
		numThumbsInPane: 0,
		isNavigationVertical: !1,
		touchActive: !1,
		startScrollPos: 0,
		isFirstTimeRun: !0,
		isTilesMode: !1,
		storedEventID: "thumbsgrid",
		tileMaxWidth: null,
		tileMaxHeight: null,
		spaceBetweenCols: null,
		spaceBetweenRows: null
	};
	this.destroy = function () {
		if (0 == X.isTilesMode) {
			var e = G.find(".ug-thumb-wrapper");
			e.off("click"), e.off("touchend"), H.on(B.events.ITEM_CHANGE), Y.destroy()
		} else U.destroy();
		G.unbind("mousedown"), G.unbind("touchstart"), jQuery("body").unbind("mousemove"), jQuery("body").unbind("touchmove"), jQuery(window).add("body").unbind("touchend"), jQuery(window).add("body").unbind("mouseup"), W.off(Q.events.PANE_CHANGE)
	}, this.__________EXTERNAL_GENERAL_________ = function () {}, this.setThumbUnselected = function (e) {
		Y.setThumbUnselected(e)
	}, this.isItemThumbVisible = function (e) {
		var t = e.index,
			i = T(t);
		return i == X.currentPane ? !0 : !1
	}, this.__________EXTERNAL_API_________ = function () {}, this.getNumPanesEstimationByHeight = function (e) {
		if (1 == X.isTilesMode) var t = V.tile_height;
		else var i = Y.getOptions(),
			t = i.thumb_height;
		var n = Y.getNumThumbs(),
			r = Math.ceil(n / V.grid_num_cols),
			o = r * t + (r - 1) * X.spaceBetweenRows,
			a = Math.ceil(o / e);
		return a
	}, this.getNumPanesEstimationByWidth = function (e) {
		if (X.isTilesMode) var t = V.tile_width;
		else var i = Y.getOptions(),
			t = i.thumb_width;
		var n = Y.getNumThumbs(),
			r = Math.ceil(n / V.grid_num_rows),
			o = r * t + (r - 1) * X.spaceBetweenCols,
			a = Math.ceil(o / e);
		return a
	}, this.getHeightEstimationByWidth = function (e) {
		if (0 == X.isTilesMode) throw new Error("This function works only with tiles mode");
		var t = Y.getNumThumbs(),
			i = F.getNumItemsInSpace(e, V.tile_width, X.spaceBetweenCols),
			n = Math.ceil(t / i);
		n > V.grid_num_rows && (n = V.grid_num_rows);
		var r = F.getSpaceByNumItems(n, V.tile_height, X.spaceBetweenRows);
		return r += 2 * V.grid_padding
	}, this.getElement = function () {
		return G
	}, this.getSize = function () {
		var e = F.getElementSize(G);
		return e
	}, this.getNumPanes = function () {
		return X.numPanes
	}, this.isFirstPane = function () {
		return 0 == X.currentPane ? !0 : !1
	}, this.isLastPane = function () {
		return X.currentPane == X.numPanes - 1 ? !0 : !1
	}, this.getPaneInfo = function () {
		var e = {
			pane: X.currentPane,
			total: X.numPanes
		};
		return e
	}, this.getPane = function () {
		return X.currentPane
	}, this.setWidth = function (e) {
		X.gridWidth = e, X.isHorizontal = !0
	}, this.setMaxWidth = function (e) {
		X.gridWidth = e, X.isMaxWidth = !0, X.isHorizontal = !0
	}, this.setHeight = function (e) {
		X.gridHeight = e, X.isHorizontal = !1
	}, this.setMaxHeight = function (e) {
		X.gridHeight = e, X.isMaxHeight = !0, X.isHorizontal = !1
	}, this.gotoPane = function (e, t) {
		if (0 == m(e)) return !1;
		if (e == X.currentPane) return !1;
		var i = -X.arrPanes[e];
		X.currentPane = e, b(i), W.trigger(Q.events.PANE_CHANGE, e)
	}, this.nextPane = function () {
		var e = X.currentPane + 1;
		if (e >= X.numPanes) {
			if (0 == V.grid_carousel) return !0;
			e = 0
		}
		Q.gotoPane(e, "next")
	}, this.prevPane = function () {
		var e = X.currentPane - 1;
		return 0 > e && (e = X.numPanes - 1, 0 == V.grid_carousel) ? !1 : void Q.gotoPane(e, "prev")
	}, this.attachNextPaneButton = function (e) {
		return F.setButtonOnClick(e, Q.nextPane), 1 == V.grid_carousel ? !0 : (Q.isLastPane() && e.addClass("ug-button-disabled"), void W.on(Q.events.PANE_CHANGE, function () {
			Q.isLastPane() ? e.addClass("ug-button-disabled") : e.removeClass("ug-button-disabled")
		}))
	}, this.attachPrevPaneButton = function (e) {
		return F.setButtonOnClick(e, Q.prevPane), 1 == V.grid_carousel ? !0 : (Q.isFirstPane() && e.addClass("ug-button-disabled"), void W.on(Q.events.PANE_CHANGE, function () {
			Q.isFirstPane() ? e.addClass("ug-button-disabled") : e.removeClass("ug-button-disabled")
		}))
	}, this.attachBullets = function (e) {
		e.setActive(X.currentPane), jQuery(e).on(e.events.BULLET_CLICK, function (t, i) {
			Q.gotoPane(i, "theme"), e.setActive(i)
		}), jQuery(Q).on(Q.events.PANE_CHANGE, function (t, i) {
			e.setActive(i)
		})
	}, this.getObjTileDesign = function () {
		return U
	}, this.init = function (t, i, n) {
		e(t, i, n)
	}, this.run = function () {
		r()
	}, this.setHtml = function (e) {
		t(e)
	}
}

function UGTiles() {
	function e(e, i) {
		g_objects = e.getObjects(), oe = e, K = jQuery(e), J = g_objects.g_objWrapper, ee = g_objects.g_arrItems, de = jQuery.extend(de, i), t(), se.init(e, de), le = se.getObjThumbs()
	}

	function t() {
		de.tiles_min_columns < 1 && (de.tiles_min_columns = 1), 0 != de.tiles_max_columns && de.tiles_max_columns < de.tiles_min_columns && (de.tiles_max_columns = de.tiles_min_columns)
	}

	function i(e) {
		if (!e)
			if ($) e = $;
			else var e = J;
		$ = e;
		var t = de.tiles_type;
		e.addClass("ug-tiletype-" + t), se.setHtml(e), e.children(".ug-thumb-wrapper").hide()
	}

	function n() {
		if ($.addClass("ug-tiles-rest-mode"), _e.isTransInited = !0, 1 == de.tiles_enable_transition) {
			$.addClass("ug-tiles-transit");
			var e = se.getOptions();
			1 == e.tile_enable_image_effect && 0 == e.tile_image_effect_reverse && $.addClass("ug-tiles-transit-overlays"), _e.isTransActive = !0
		}
	}

	function r() {
		return ae.getElementSize($).width
	}

	function o() {
		return 0 == _e.isTransInited ? !1 : ($.addClass("ug-tiles-transition-active"), $.removeClass("ug-tiles-rest-mode"), 0 == _e.isTransActive ? !1 : void se.disableEvents())
	}

	function a() {
		return 0 == _e.isTransInited ? !1 : ($.removeClass("ug-tiles-transition-active"), void $.addClass("ug-tiles-rest-mode"))
	}

	function s() {
		1 == _e.isTransActive ? (setTimeout(function () {
			se.enableEvents(), se.triggerSizeChangeEventAllTiles(), a()
		}, 800), _e.handle && clearTimeout(_e.handle), _e.handle = setTimeout(function () {
			a(), se.triggerSizeChangeEventAllTiles(), _e.handle = null
		}, 2e3)) : (se.triggerSizeChangeEventAllTiles(), a())
	}

	function l() {
		ue.colWidth = (ue.availWidth - ue.colGap * (ue.numCols - 1)) / ue.numCols, ue.colWidth = Math.floor(ue.colWidth), ue.totalWidth = ae.getSpaceByNumItems(ue.numCols, ue.colWidth, ue.colGap)
	}

	function u() {
		if (ue.colWidth = de.tiles_col_width, ue.minCols = de.tiles_min_columns, ue.maxCols = de.tiles_max_columns, 0 == oe.isMobileMode() ? ue.colGap = de.tiles_space_between_cols : ue.colGap = de.tiles_space_between_cols_mobile, ue.galleryWidth = r(), ue.availWidth = ue.galleryWidth, 1 == de.tiles_include_padding && (ue.availWidth = ue.galleryWidth - 2 * ue.colGap), 1 == de.tiles_exact_width) ue.numCols = ae.getNumItemsInSpace(ue.availWidth, ue.colWidth, ue.colGap), ue.maxCols > 0 && ue.numCols > ue.maxCols && (ue.numCols = ue.maxCols), ue.numCols < ue.minCols ? (ue.numCols = ue.minCols, l()) : ue.totalWidth = ue.numCols * (ue.colWidth + ue.colGap) - ue.colGap;
		else {
			var e = ae.getNumItemsInSpaceRound(ue.availWidth, ue.colWidth, ue.colGap);
			e < ue.minCols ? e = ue.minCols : 0 != ue.maxCols && e > ue.maxCols && (e = ue.maxCols), ue.numCols = e, l()
		}
		switch (de.tiles_align) {
			case "center":
			default:
				ue.addX = Math.round((ue.galleryWidth - ue.totalWidth) / 2);
				break;
			case "left":
				ue.addX = 0;
				break;
			case "right":
				ue.addX = ue.galleryWidth - ue.totalWidth
		}
		for (ue.arrPosx = [], col = 0; col < ue.numCols; col++) {
			var t = ae.getColX(col, ue.colWidth, ue.colGap);
			ue.arrPosx[col] = t + ue.addX
		}
	}

	function d() {
		ue.maxColHeight = 0, ue.colHeights = [0]
	}

	function _() {
		var e = 0,
			t = 999999999;
		for (col = 0; col < ue.numCols; col++) {
			if (void 0 == ue.colHeights[col] || 0 == ue.colHeights[col]) return col;
			ue.colHeights[col] < t && (e = col, t = ue.colHeights[col])
		}
		return e
	}

	function g(e, t, i, n) {
		if (null === n || "undefined" == typeof n) var n = _();
		var r = 0;
		void 0 !== ue.colHeights[n] && (r = ue.colHeights[n]);
		var o = se.getTileHeightByWidth(ue.colWidth, e);
		if (null === o) {
			if (1 == de.tiles_enable_transition) throw new Error("Can't know tile height, please turn off transition");
			var a = ae.getElementSize(e);
			o = a.height
		}
		var s = ue.arrPosx[n];
		ae.placeElement(e, s, r);
		var l = r + o;
		ue.colHeights[n] = l + ue.colGap, ue.maxColHeight < l && (ue.maxColHeight = l), 1 == t && e.show().fadeTo(0, 1), 1 == i && $.height(ue.maxColHeight)
	}

	function c(e) {
		e || (e = !1), u(), d();
		var t = le.getThumbs(le.type.GET_THUMBS_RATIO);
		o(), se.resizeAllTiles(ue.colWidth, se.resizemode.VISIBLE_ELEMENTS, t);
		for (var i = 0; i < t.length; i++) {
			var n = jQuery(t[i]),
				r = void 0;
			1 == de.tiles_keep_order && (r = ae.getColByIndex(ue.numCols, i)), g(n, e, !1, r)
		}
		s();
		var a = $.height();
		1 == _e.isTransActive && a > ue.maxColHeight ? setTimeout(function () {
			$.height(ue.maxColHeight)
		}, 700) : $.height(ue.maxColHeight)
	}

	function h(e) {
		var t = e.index(),
			i = oe.getItem(t);
		if (i.ordered_placed === !0) return !1;
		var n = ae.getPrevRowSameColIndex(t, ue.numCols);
		if (0 > n) return !0;
		var r = oe.getItem(n);
		return r.ordered_placed === !0 ? !0 : !1
	}

	function p(e, t) {
		if (t !== !0) {
			var i = h(e);
			if (0 == i) return !1
		}
		var n = e.index(),
			r = ae.getColByIndex(ue.numCols, n),
			o = oe.getItem(n);
		se.resizeTile(e, ue.colWidth), g(e, !0, !0, r), o.ordered_placed = !0;
		var a = oe.getNumItems(),
			s = ae.getNextRowSameColIndex(n, ue.numCols);
		if (s >= a) return !1;
		var l = le.getThumbByIndex(s),
			u = oe.getItem(s);
		le.isThumbLoaded(l);
		le.isThumbLoaded(l) && !u.ordered_placed && p(l, !0)
	}

	function f(e, t) {
		if (1 == t) return !1;
		e = jQuery(e);
		var i = jQuery(e).parent();
		le.triggerImageLoadedEvent(i, e), 1 == de.tiles_keep_order ? p(i) : (se.resizeTile(i, ue.colWidth), g(i, !0, !0))
	}

	function m() {
		var e = le.getThumbs(le.type.GET_THUMBS_NO_RATIO);
		if (!e || 0 == e.length) return !1;
		if (_e.isAllLoaded = !1, 1 == _e.isFirstPlaced) {
			u(), d();
			var t = Math.abs(ue.galleryWidth - ue.totalWidth);
			if (1 == de.tiles_set_initial_height && 0 == ae.isScrollbarExists() && 25 > t) {
				var i = (e.length, Math.ceil(e.length / ue.numCols)),
					r = i * de.tiles_col_width * .75;
				$.height(r), u()
			}
		}
		e.fadeTo(0, 0);
		var o = e.find("img.ug-thumb-image"),
			a = ue.numCols,
			s = ue.galleryWidth;
		ae.checkImagesLoaded(o, function () {
			u(), (a != ue.numCols || s != ue.galleryWidth) && c(!1), n(), re.trigger(ne.events.ALL_TILES_LOADED)
		}, function (e, t) {
			1 == _e.isFirstPlaced && oe.triggerEvent(ne.events.TILES_FIRST_PLACED), f(e, t)
		})
	}

	function v() {
		var e = r(),
			t = le.getThumbs(!0),
			i = de.tiles_justified_row_height,
			n = [],
			o = 0,
			a = de.tiles_justified_space_between,
			s = t.length;
		jQuery.each(t, function (e, t) {
			t = jQuery(t);
			var r = le.getItemByThumb(t),
				a = r.thumbWidth,
				s = r.thumbHeight;
			s !== i && (a = Math.floor(r.thumbRatioByWidth * i)), n[e] = a, o += a
		});
		var l = Math.ceil(o / e);
		l > s && (l = s);
		var u = o / l,
			d = [],
			_ = 0,
			g = [],
			c = [],
			h = 0,
			p = 0;
		jQuery.each(t, function (e, t) {
			var i = n[e];
			h + i / 2 > (p + 1) * u && (g[d.length] = _, d.push(c), c = [], _ = 0, p++), h += i, _ += i, c.push(t)
		}), g[d.length] = _, d.push(c);
		var f = [],
			m = [],
			v = 0;
		jQuery.each(d, function (t, r) {
			var o = (r.length, g[t]),
				s = (r.length - 1) * a,
				l = (e - s) / o,
				u = Math.round(i * l);
			v += u, t > 0 && (v += a), m.push(u);
			var d = u / i,
				_ = [],
				c = s;
			jQuery.each(r, function (e, t) {
				var i = jQuery(t),
					r = i.index(),
					o = n[r],
					a = Math.round(o * d);
				_[e] = a, c += a
			});
			var h = c - e;
			jQuery.each(_, function (e, t) {
				return 0 == h ? !1 : (0 > h ? (_[e] = t + 1, h++) : (_[e] = t - 1, h--), void(e == _.length - 1 && 0 != h && (_[e] -= h)))
			}), f[t] = _
		});
		var b = {
			arrRows: d,
			arrRowWidths: f,
			arrRowHeights: m,
			gap: a,
			totalHeight: v
		};
		return b
	}

	function b(e) {
		if (!e) var e = !1;
		var t = r(),
			i = v();
		$.height(i.totalHeight);
		var n = r();
		n != t && (i = v()), o();
		var a = 0,
			l = 0;
		jQuery.each(i.arrRows, function (t, n) {
			var r = i.arrRowWidths[t],
				o = i.arrRowHeights[t],
				s = 0;
			jQuery.each(n, function (t, n) {
				var u = jQuery(n),
					d = o,
					_ = r[t];
				se.resizeTile(u, _, d, se.resizemode.VISIBLE_ELEMENTS), ae.placeElement(u, s, a), s += _, s > l && (l = s), s += i.gap, 1 == e && jQuery(n).show()
			}), a += o + i.gap
		}), s()
	}

	function y() {
		var e = jQuery(J).find("img.ug-thumb-image"),
			t = le.getThumbs();
		_e.isAllLoaded = !1, t.fadeTo(0, 0), ae.checkImagesLoaded(e, function () {
			setTimeout(function () {
				b(!0), t.fadeTo(0, 1), oe.triggerEvent(ne.events.TILES_FIRST_PLACED), n(), re.trigger(ne.events.ALL_TILES_LOADED)
			})
		}, function (e, t) {
			e = jQuery(e);
			var i = jQuery(e).parent();
			le.triggerImageLoadedEvent(i, e)
		})
	}

	function I() {
		var e = jQuery(J).find("img.ug-thumb-image"),
			t = le.getThumbs();
		_e.isAllLoaded = !1, t.fadeTo(0, 0), ae.checkImagesLoaded(e, function () {
			1 == oe.isMobileMode() ? c(!0) : E(!0), oe.triggerEvent(ne.events.TILES_FIRST_PLACED), n(), re.trigger(ne.events.ALL_TILES_LOADED)
		}, function (e, t) {
			e = jQuery(e);
			var i = jQuery(e).parent();
			le.triggerImageLoadedEvent(i, e)
		})
	}

	function w() {
		var e = r();
		ge.galleryWidth = e, te = {}, ge.colWidth = de.tiles_nested_col_width, ge.optimalTileWidth = de.tiles_nested_optimal_tile_width, ge.currentGap = de.tiles_space_between_cols, 1 == oe.isMobileMode() && (ge.currentGap = de.tiles_space_between_cols_mobile), null == ge.colWidth ? ge.colWidth = Math.floor(ge.optimalTileWidth / ge.nestedOptimalCols) : ge.optimalTileWidth > ge.colWidth ? ge.nestedOptimalCols = Math.ceil(ge.optimalTileWidth / ge.colWidth) : ge.nestedOptimalCols = 1, ge.maxColumns = ae.getNumItemsInSpace(e, ge.colWidth, ge.currentGap), ge.colWidth = ae.getItemSizeInSpace(e, ge.maxColumns, ge.currentGap), ge.gridY = 0, ie = [];
		var t = le.getThumbs(!0);
		switch (t.each(function () {
			var e = jQuery(this),
				t = T(e);
			ie.push(t)
		}), ge.optimalTileWidth > ge.colWidth ? ge.nestedOptimalCols = Math.ceil(ge.optimalTileWidth / ge.colWidth) : ge.nestedOptimalCols = 1, ge.totalWidth = ge.maxColumns * (ge.colWidth + ge.currentGap) - ge.currentGap, de.tiles_align) {
			case "center":
			default:
				ge.addX = Math.round((ge.galleryWidth - ge.totalWidth) / 2);
				break;
			case "left":
				ge.addX = 0;
				break;
			case "right":
				ge.addX = ge.galleryWidth - ge.totalWidth
		}
		ge.maxGridY = 0
	}

	function E(e) {
		var t = r();
		w(), x();
		var i = ge.maxGridY * (ge.colWidth + ge.currentGap) - ge.currentGap;
		$.height(i);
		var n = r();
		n != t && (w(), x()), 0 == de.tiles_nested_debug && U(e)
	}

	function T(e) {
		var t, i, n = {},
			r = ge.colWidth,
			o = ge.currentGap,
			a = se.getTileImageSize(e),
			s = e.index(),
			l = Math.ceil(S(s) * (1 * ge.nestedOptimalCols / 3) + 2 * ge.nestedOptimalCols / 3),
			u = a.width,
			d = a.height,
			_ = u / d;
		return u > d ? (t = l, i = Math.round(t / _), 0 == i && (i = 1)) : (i = l, t = Math.round(i * _), 0 == t && (t = 1)), n.dimWidth = t, n.dimHeight = i, n.width = t * r + o * (t - 1), n.height = i * r + o * (i - 1), n.imgWidth = u, n.imgHeight = d, n.left = 0, n.top = 0, n
	}

	function S(e) {
		return Math.abs(Math.sin(Math.abs(1e3 * Math.sin(e))))
	}

	function P(e, t) {
		if (0 == t) {
			for (var i = ge.currentItem; i < ie.length; i++) j(i, !0);
			ge.currentItem = ie.length - 1
		} else j(ge.currentItem, !0);
		for (var i = 0; i <= ge.currentItem; i++) V(i, !0);
		ge.currentItem++
	}

	function x(e) {
		if (1 == de.tiles_nested_debug) return "undefined" == typeof e && (e = !0), P(!0, e), !1;
		for (var t = 0; t < ie.length; t++) j(t, !0)
	}

	function j(e, t) {
		if (!t) var t = !1;
		ge.maxColHeight = 0;
		for (var i = ae.getObjectLength(te), n = ge.gridY; i + 1 >= n; n++) {
			for (var r = 0; r < ge.maxColumns; r++)
				if (0 == Q(ge.gridY) || 0 == F(ge.gridY, r)) {
					var o = D(r);
					return void C(e, o, r)
				}
			ge.gridY++
		}
	}

	function C(e, t, i) {
		var n = jQuery.extend(!0, {}, ie[e]),
			r = n.dimWidth,
			o = t - n.dimWidth,
			a = ge.nestedOptimalCols,
			s = t <= n.dimWidth || .33 * a >= o || a >= t;
		if (s) N(e, t);
		else if (a >= o) a >= 4 ? 1 == G(Math.floor(t / 2), i) ? N(e, Math.floor(t / 2) + 1) : N(e, Math.floor(t / 2)) : N(objImage, t);
		else if (1 == G(r, i)) switch (r >= a) {
			case !0:
				N(e, r - 1);
				break;
			case !1:
				N(e, r + 1)
		}
		n = jQuery.extend(!0, {}, ie[e]);
		var l = L(e, n.dimWidth, i);
		if (ge.columnsValueToEnableHeightResize <= l[0] && ge.maxColumns >= 2 * ge.nestedOptimalCols) {
			var u = H(i, n),
				d = k(e, u.newHeight, !0);
			ie[e].dimHeight = d.dimHeight;
			var _ = z(l, d.dimWidth, i),
				g = A(_),
				c = !1;
			g >= 2 && (c = !0), u.newHeight >= n.dimHeight && (n = k(e, u.newHeight, !0));
			var h = M(u.idToResize, u.newHeight, n.dimHeight);
			n.top = ge.gridY, n.left = i, h.push({
				tileID: e,
				sizes: n
			});
			var p = R(h),
				f = R(_);
			return f > p || 1 == c ? void O(h) : void O(_)
		}
		n.left = i, n.top = ge.gridY, ie[e] = n, W(e, n, i, ge.gridY), ge.maxGridY = n.top + n.dimHeight
	}

	function A(e) {
		for (var t = 0, i = 0, n = 0; n < e.length - 1; n++) {
			var r = e[n].sizes,
				o = -1,
				a = -1;
			Q(r.top + r.dimHeight) && ge.maxColumns > r.left + r.dimWidth && (o = te[r.top + r.dimHeight - 1][r.left + r.dimWidth], a = te[r.top + r.dimHeight][r.left + r.dimWidth]), o != a && t++
		}
		for (var n = 0; n < e.length - 1; n++) {
			var r = e[n].sizes,
				o = -1,
				a = -1;
			Q(r.top + r.dimHeight) && r.left - 1 >= 0 && (o = te[r.top + r.dimHeight - 1][r.left - 1], a = te[r.top + r.dimHeight][r.left - 1]), o != a && i++
		}
		return Math.max(i, t)
	}

	function M(e, t, i) {
		var n = ie[e],
			r = n.dimHeight,
			o = (n.dimWidth, n.left),
			a = n.top,
			s = (parseInt(a / (ge.colWidth + ge.currentGap)), parseInt(o / (ge.colWidth + ge.currentGap)), r - t + i),
			l = k(e, s, !0),
			u = [];
		return u.push({
			tileID: e,
			sizes: l
		}), u
	}

	function O(e) {
		for (var t = 0; t < e.length; t++) {
			var i = e[t].sizes,
				n = e[t].tileID;
			ie[n] = jQuery.extend(!0, {}, i), W(n, i, i.left, i.top)
		}
	}

	function z(e, t) {
		for (var i = 0, n = 0, r = [], o = 0, a = 0, s = 0; s < e[1].length; s++) {
			var l = e[1][s],
				u = ie[e[1][s]];
			if (n += u.dimHeight, 0 != s) i += u.dimHeight, r.push([l, u.dimHeight]);
			else {
				var d = N(l, t, !0);
				i += d.dimHeight, r.push([e[1][s], d.dimHeight])
			}
		}
		o = u.left, a = u.top;
		for (var _ = n, g = [], s = r.length - 1; s >= 0; s--) {
			var c, l = r[s][0];
			0 != s ? (c = Math.max(Math.round(1 * n / 3), Math.floor(r[s][1] * (n / i))), _ -= c, d = k(l, c, !0), d.left = o, d.top = a, g.push({
				tileID: l,
				sizes: d
			}), a += d.dimHeight) : (c = _, d = k(l, c, !0), d.left = o, d.top = a, g.push({
				tileID: l,
				sizes: d
			}))
		}
		return g
	}

	function L(e, t, i) {
		var n = ge.gridY - 1,
			r = 0,
			o = 0,
			a = 1,
			s = [],
			l = [];
		if (s.push(e), n >= 0) {
			for (o = 0; n >= 0;) {
				if (r = te[n][i], "undefined" != typeof te[n][i - 1] && te[n][i - 1] == te[n][i] || "undefined" != typeof te[n][i + t] && te[n][i + t - 1] == te[n][i + t] || te[n][i] != te[n][i + t - 1]) return l.push(a), l.push(s), l;
				o != r && (a++, s.push(r)), n--, o = r
			}
			return l.push(a), l.push(s), l
		}
		return [0, []]
	}

	function H(e, t) {
		var i = 0,
			n = 0,
			r = t.dimWidth,
			o = t.dimHeight,
			a = 0,
			s = 0,
			l = jQuery.map(te, function (e, t) {
				return [e]
			});
		if ("undefined" == typeof l[ge.gridY] || "undefined" == typeof l[ge.gridY][e - 1]) n = 0;
		else
			for (var u = 0;;) {
				if ("undefined" == typeof te[ge.gridY + u] || -1 == te[ge.gridY + u][e - 1]) break;
				a = te[ge.gridY + u][e - 2], u++, n++
			}
		if ("undefined" == typeof l[ge.gridY] || "undefined" == typeof l[ge.gridY][e + r]) i = 0;
		else
			for (u = 0;;) {
				if ("undefined" == typeof te[ge.gridY + u] || -1 == te[ge.gridY + u][e + r]) break;
				s = te[ge.gridY + u][e + r + 1], u++, i++
			}
		var d = 0,
			_ = 0;
		Math.abs(o - n) < Math.abs(o - i) && 0 != n ? (d = n, _ = a) : 0 != i ? (d = i, _ = s) : d = o;
		var g = {
			newHeight: d,
			idToResize: _
		};
		return g
	}

	function N(e, t, i) {
		i || (i = !1);
		var n = ge.colWidth,
			r = ge.currentGap,
			o = ie[e],
			a = o.imgWidth,
			s = o.imgHeight,
			l = a / s;
		if (dimWidth = t, dimHeight = Math.round(dimWidth / l), 1 == i) {
			var u = jQuery.extend(!0, {}, o);
			return u.dimWidth = dimWidth, u.dimHeight = dimHeight, u.width = dimWidth * n + r * (dimWidth - 1), u.height = dimHeight * n + r * (dimHeight - 1), u
		}
		o.dimWidth = dimWidth, o.dimHeight = dimHeight, o.width = dimWidth * n + r * (dimWidth - 1), o.height = dimHeight * n + r * (dimHeight - 1)
	}

	function k(e, t, i) {
		i || (i = !1);
		var n = ie[e],
			r = n.dimWidth,
			o = ge.colWidth,
			a = ge.currentGap;
		if (1 == i) {
			var s = jQuery.extend(!0, {}, n);
			return s.dimHeight = t, s.width = r * o + a * (r - 1), s.height = t * o + a * (t - 1), s
		}
		n.dimHeight = t, n.width = r * o + a * (r - 1), n.height = t * o + a * (t - 1)
	}

	function R(e) {
		for (var t = 0, i = 0, n = 0; n < e.length; n++) {
			var r = ie[e[n].tileID];
			if (0 == r.dimHeight || 0 == r.height) return;
			resizeVal = r.dimWidth / r.dimHeight / (r.imgWidth / r.imgHeight), resizeVal < 1 && (resizeVal = 1 / resizeVal), t += resizeVal, i++
		}
		return t / i
	}

	function G(e, t) {
		var i = ge.gridY - 1;
		return 0 >= i || 0 == Q(i) ? !1 : te[i][t + e - 1] != te[i][t + e] ? !0 : !1
	}

	function D(e) {
		var t = e,
			i = 0;
		if (1 == Q(ge.gridY))
			for (; 0 == F(ge.gridY, t);) i++, t++;
		else i = ge.maxColumns;
		return i
	}

	function Q(e) {
		return "undefined" == typeof te[e] ? !1 : !0
	}

	function W(e, t, i, n) {
		for (var r = 0; r < t.dimHeight; r++)
			for (var o = 0; o < t.dimWidth; o++) 0 == Q(n + r) && B(n + r), Y(n + r, i + o, e)
	}

	function B(e) {
		te[e] = new Object;
		for (var t = 0; t < ge.maxColumns; t++) te[e][t] = -1
	}

	function F(e, t) {
		return -1 != te[e][t]
	}

	function Y(e, t, i) {
		te[e][t] = i
	}

	function U(e) {
		if (!e) var e = !1;
		o();
		for (var t = 0; t < ie.length; t++) V(t, e);
		$.height(ge.maxColHeight), s()
	}

	function V(e, t) {
		var i = le.getThumbByIndex(e),
			n = ie[e],
			r = n.top * (ge.colWidth + ge.currentGap),
			o = ge.addX + n.left * (ge.colWidth + ge.currentGap);
		se.resizeTile(i, n.width, n.height, se.resizemode.VISIBLE_ELEMENTS), ae.placeElement(i, o, r), r + n.height > ge.maxColHeight && (ge.maxColHeight = r + n.height), 1 == t && i.fadeTo(0, 1)
	}

	function X() {
		if (1 == _e.isFirstTimeRun) return !0;
		if (0 == _e.isAllLoaded) return !1;
		switch (de.tiles_type) {
			case "columns":
				c(!1);
				break;
			case "justified":
				b(!1);
				break;
			case "nested":
				var e = oe.isMobileMode();
				1 == e ? c(!1) : E(!1)
		}
	}

	function Z() {
		re.on(ne.events.ALL_TILES_LOADED, function () {
			_e.isAllLoaded = !0
		}), K.on(oe.events.SIZE_CHANGE, X), K.on(ne.events.TILES_FIRST_PLACED, function () {
			_e.isFirstPlaced = !1
		}), se.initEvents()
	}

	function q() {
		switch (J.children(".ug-tile").show(), 1 == _e.isFirstTimeRun && Z(), se.run(), de.tiles_type) {
			default:
				case "columns":
				m();
			break;
			case "justified":
					y();
				break;
			case "nested":
					I()
		}
		_e.isFirstTimeRun = !1
	}
	var K, J, $, ee, te, ie, ne = this,
		re = jQuery(this),
		oe = new UniteGalleryMain,
		ae = new UGFunctions,
		se = new UGTileDesign,
		le = new UGThumbsGeneral,
		ue = {},
		de = {
			tiles_type: "columns",
			tiles_col_width: 250,
			tiles_align: "center",
			tiles_exact_width: !1,
			tiles_space_between_cols: 3,
			tiles_space_between_cols_mobile: 3,
			tiles_include_padding: !0,
			tiles_min_columns: 2,
			tiles_max_columns: 0,
			tiles_keep_order: !1,
			tiles_set_initial_height: !0,
			tiles_justified_row_height: 150,
			tiles_justified_space_between: 3,
			tiles_nested_optimal_tile_width: 250,
			tiles_nested_col_width: null,
			tiles_nested_debug: !1,
			tiles_enable_transition: !0
		};
	this.events = {
		THUMB_SIZE_CHANGE: "thumb_size_change",
		TILES_FIRST_PLACED: "tiles_first_placed",
		ALL_TILES_LOADED: "all_tiles_loaded"
	};
	var _e = {
			isFirstTimeRun: !0,
			handle: null,
			isTransActive: !1,
			isTransInited: !1,
			isFirstPlaced: !0,
			isAllLoaded: !1
		},
		ge = {
			colWidth: null,
			nestedOptimalCols: 5,
			gridY: 0,
			maxColumns: 0,
			columnsValueToEnableHeightResize: 3,
			resizeLeftRightToColumn: !0,
			currentItem: 0,
			currentGap: null,
			optimalTileWidth: null,
			maxGridY: 0
		};
	this.destroy = function () {
		K.off(oe.events.SIZE_CHANGE), se.destroy(), K.off(ne.events.TILES_FIRST_PLACED)
	}, this.init = function (t, i) {
		e(t, i)
	}, this.setHtml = function (e) {
		i(e)
	}, this.getObjTileDesign = function () {
		return se
	}, this.run = function () {
		q()
	}, this.runNewItems = function () {
		if (!$) throw new Error("Can't run new items - parent not set");
		switch (se.setHtml($, !0), se.run(!0), de.tiles_type) {
			case "columns":
				m();
				break;
			default:
			case "justified":
			case "nested":
				throw new Error("Tiles type: " + de.tiles_type + " not support load more yet")
		}
	}
}

function UGTileDesign() {
	function e(e, i) {
		D = e, L = jQuery(e);
		var r = D.getObjects();
		N = r.g_objWrapper, k = D.getArrItems(), B = jQuery.extend(B, F), B = jQuery.extend(B, i), t(), W.init(e, B);
		var o = {
				allow_onresize: !1
			},
			a = ["overlay"];
		Y.funcCustomTileHtml && (a = []), W.setCustomThumbs(n, a, o);
		var s = W.getOptions();
		B = jQuery.extend(B, s), Y.ratioByWidth = B.tile_width / B.tile_height, Y.ratioByHeight = B.tile_height / B.tile_width, B.tile_size_by == R.sizeby.GLOBAL_RATIO && Y.isTextpanelOutside && (Y.hasImageContainer = !0)
	}

	function t() {
		if (1 == B.tile_enable_overlay ? (B.thumb_overlay_opacity = B.tile_overlay_opacity, B.thumb_overlay_color = B.tile_overlay_color) : 0 == B.tile_enable_icons ? B.thumb_color_overlay_effect = !1 : B.thumb_overlay_opacity = 0, B.tile_as_link && (B.thumb_wrapper_as_link = !0, B.thumb_link_newpage = B.tile_link_newpage), 1 == B.tile_enable_outline && 0 == B.tile_enable_border && (B.tile_enable_outline = !1), Y.tileInnerReduce = 0, B.tile_enable_border && (Y.tileInnerReduce = 2 * B.tile_border_width, W.setThumbInnerReduce(Y.tileInnerReduce)), Y.isSaparateIcons = !Q.isRgbaSupported(), 1 == B.tile_enable_textpanel) {
			switch (B.tile_textpanel_position) {
				case "top":
					B.tile_textpanel_align = "top";
				case "bottom":
					Y.isTextpanelOutside = !0, B.tile_textpanel_always_on = !0, B.tile_textpanel_offset = 0;
					break;
				case "inside_top":
					B.tile_textpanel_align = "top";
					break;
				case "middle":
					B.tile_textpanel_align = "middle", B.tile_textpanel_appear_type = "fade"
			}
			0 == B.tile_textpanel_always_on && (Y.isSaparateIcons = !0)
		}
		0 != B.tile_textpanel_offset && (B.tile_textpanel_appear_type = "fade", B.tile_textpanel_margin = B.tile_textpanel_offset), "title_and_desc" == B.tile_textpanel_source && (B.tile_textpanel_enable_description = !0,
			B.tile_textpanel_desc_style_as_title = !0)
	}

	function i() {
		var e = D.isMobileMode();
		switch (Y.isTextPanelHidden = !1, 1 == e && 0 == B.tile_textpanel_always_on && (Y.isTextPanelHidden = !0), Y.isVideoplayIconAlwaysOn = B.tile_videoplay_icon_always_on, B.tile_videoplay_icon_always_on) {
			case "always":
				Y.isVideoplayIconAlwaysOn = !0;
				break;
			case "never":
				Y.isVideoplayIconAlwaysOn = !1;
				break;
			case "mobile_only":
				Y.isVideoplayIconAlwaysOn = 1 == e ? !0 : !1;
				break;
			case "desktop_only":
				Y.isVideoplayIconAlwaysOn = 0 == e ? !0 : !1
		}
	}

	function n(e, t) {
		if (e.addClass("ug-tile"), Y.funcCustomTileHtml) return Y.funcCustomTileHtml(e, t), !1;
		var i = "";
		1 == Y.hasImageContainer && (i += "<div class='ug-image-container ug-trans-enabled'>");
		var n = "ug-thumb-image";
		(0 == B.tile_enable_image_effect || 1 == B.tile_image_effect_reverse) && (n += " ug-trans-enabled");
		var r = Q.stripTags(t.title);
		r = Q.htmlentitles(r), i += '<img src="' + Q.escapeDoubleSlash(t.urlThumb) + "\" alt='" + r + "' class='" + n + "'>", 1 == Y.hasImageContainer && (i += "</div>"), e.append(i), B.tile_size_by == R.sizeby.GLOBAL_RATIO && e.fadeTo(0, 0);
		var o = {};
		if (1 == B.tile_enable_background && (o["background-color"] = B.tile_background_color), 1 == B.tile_enable_border && (o["border-width"] = B.tile_border_width + "px", o["border-style"] = "solid", o["border-color"] = B.tile_border_color, B.tile_border_radius && (o["border-radius"] = B.tile_border_radius + "px")), 1 == B.tile_enable_outline && (o.outline = "1px solid " + B.tile_outline_color), 1 == B.tile_enable_shadow) {
			var a = B.tile_shadow_h + "px ";
			a += B.tile_shadow_v + "px ", a += B.tile_shadow_blur + "px ", a += B.tile_shadow_spread + "px ", a += B.tile_shadow_color, o["box-shadow"] = a
		}
		e.css(o);
		var s = "";
		if (B.tile_enable_icons) {
			if (0 == B.tile_as_link && 1 == B.tile_enable_action) {
				var l = "ug-button-play ug-icon-zoom";
				"image" != t.type && (l = "ug-button-play ug-icon-play"), s += "<div class='ug-tile-icon " + l + "' style='display:none'></div>"
			}
			if (t.link && 1 == B.tile_show_link_icon || 1 == B.tile_as_link)
				if (0 == B.tile_as_link) {
					var u = "";
					1 == B.tile_link_newpage && (u = " target='_blank'"), s += "<a href='" + t.link + "'" + u + " class='ug-tile-icon ug-icon-link'></a>"
				} else s += "<div class='ug-tile-icon ug-icon-link' style='display:none'></div>";
			var _ = Y.isSaparateIcons;
			if (0 == _ && "image" != t.type && 1 == Y.isVideoplayIconAlwaysOn && (_ = !0), _) var g = e;
			else var g = e.children(".ug-thumb-overlay");
			g.append(s);
			var c = g.children("." + l);
			0 == c.length ? c = null : c.hide();
			var h = g.children(".ug-icon-link");
			0 == h.length ? h = null : h.hide(), h || 1 != B.tile_enable_action || e.addClass("ug-tile-clickable")
		} else 1 == B.tile_enable_action && e.addClass("ug-tile-clickable");
		if (1 == B.tile_enable_image_effect) {
			var p = "";
			0 == B.tile_image_effect_reverse && (p = " ug-trans-enabled");
			var f = "<div class='ug-tile-image-overlay" + p + "' >",
				m = " ug-" + B.tile_image_effect_type + "-effect";
			f += '<img src="' + Q.escapeDoubleSlash(t.urlThumb) + "\" alt='" + t.title + "' class='" + m + p + "'>", f += "</div>", e.append(f), 1 == B.tile_image_effect_reverse && e.children(".ug-tile-image-overlay").fadeTo(0, 0)
		}
		if (1 == B.tile_enable_textpanel) {
			var v = new UGTextPanel;
			v.init(D, B, "tile");
			var b = "";
			(1 == B.tile_textpanel_always_on || 1 == Y.isTextpanelOutside) && (b = "ug-trans-enabled"), v.appendHTML(e, b);
			var y = t.title,
				I = "";
			switch (B.tile_textpanel_source) {
				case "desc":
				case "description":
					y = t.description;
					break;
				case "desc_title":
					"" != t.description && (y = t.description);
					break;
				case "title_and_desc":
					y = t.title, I = t.description
			}
			if (v.setTextPlain(y, I), 0 == B.tile_textpanel_always_on && v.getElement().fadeTo(0, 0), e.data("objTextPanel", v), 1 == B.tile_textpanel_always_on) {
				var w = d(e);
				w.css("z-index", 2)
			}
			if (1 == Y.isTextpanelOutside) {
				var E = "<div class='ug-tile-cloneswrapper'></div>";
				e.append(E);
				var T = e.children(".ug-tile-cloneswrapper"),
					S = new UGTextPanel;
				S.init(D, B, "tile"), S.appendHTML(T), S.setTextPlain(y, I), e.data("objTextPanelClone", S)
			}
		}
		null !== t.addHtml && e.append(t.addHtml)
	}

	function r(e) {
		var t = e.children(".ug-tile-image-overlay");
		return t
	}

	function o(e) {
		var t = e.children(".ug-thumb-overlay");
		return t
	}

	function a(e) {
		if (0 == Y.hasImageContainer) return null;
		var t = e.children(".ug-image-container");
		return t
	}

	function s(e) {
		var t = e.find(".ug-tile-image-overlay img");
		return t
	}

	function l(e) {
		var t = e.data("objTextPanel");
		return t
	}

	function u(e) {
		var t = e.data("objTextPanelClone");
		return t
	}

	function d(e) {
		var t = e.children(".ug-textpanel");
		return t
	}

	function _(e) {
		var t = e.find(".ug-tile-cloneswrapper .ug-textpanel");
		if (0 == t.length) throw new Error("text panel cloned element not found");
		return t
	}

	function g(e) {
		if (1 == Y.isTextpanelOutside) var t = _(e);
		else var t = d(e);
		if (!t) return 0;
		var i = Q.getElementSize(t);
		return i.height
	}

	function c(e) {
		var t = e.find(".ug-icon-link");
		return 0 == t.length ? null : t
	}

	function h(e) {
		var t = Y.ratioByHeight;
		switch (B.tile_size_by) {
			default: t = Y.ratioByHeight;
			break;
			case R.sizeby.IMAGE_RATIO:
					if (!e) throw new Error("tile should be given for tile ratio");
				var i = R.getItemByTile(e);
				if ("undefined" != typeof i.thumbRatioByHeight) {
					if (0 == i.thumbRatioByHeight) throw trace(i), new Error("the item ratio not inited yet");
					t = i.thumbRatioByHeight
				}
				break;
			case R.sizeby.CUSTOM:
					return null
		}
		return t
	}

	function p(e) {
		var t = e.find(".ug-button-play");
		return 0 == t.length ? null : t
	}

	function f(e) {
		return e.hasClass("ug-thumb-over") ? !0 : !1
	}

	function m(e) {
		return e.hasClass("ug-tile-clickable")
	}

	function v(e) {
		return 1 == B.tile_enable_icons && 1 == Y.isVideoplayIconAlwaysOn && "image" != e.type ? !0 : !1
	}

	function b(e, t, i, n) {
		var o = r(e),
			l = R.getTileImage(e),
			u = s(e);
		t -= Y.tileInnerReduce, i -= Y.tileInnerReduce;
		var d = null;
		if (1 == Y.isTextpanelOutside) {
			var _ = g(e);
			if (i -= _, "top" == B.tile_textpanel_position && (d = _), 1 == Y.hasImageContainer) {
				var c = a(e);
				Q.setElementSize(c, t, i), null !== d && Q.placeElement(c, 0, d)
			}
		}
		if (0 == B.tile_enable_image_effect) Q.scaleImageCoverParent(l, t, i), 0 == Y.hasImageContainer && null !== d && Q.placeElement(l, 0, d);
		else {
			var h = "nothing";
			n === !0 && 0 == Y.isTextpanelOutside && (h = 1 == B.tile_image_effect_reverse ? "effect" : "image"), "effect" != h && (Q.setElementSize(o, t, i), null !== d && Q.placeElement(o, 0, d), Q.scaleImageCoverParent(u, t, i)), "image" != h && (1 == Y.hasImageContainer ? Q.scaleImageCoverParent(l, t, i) : "effect" == h ? (Q.scaleImageCoverParent(l, t, i), null !== d && Q.placeElement(l, 0, d)) : Q.cloneElementSizeAndPos(u, l, !1, null, d))
		}
	}

	function y(e, t, i, n) {
		var r = null;
		if (i && (r = i - Y.tileInnerReduce), n && (n -= Y.tileInnerReduce), "clone" == t) {
			var o = u(e);
			o.refresh(!0, !0, r);
			var a = R.getItemByTile(e);
			return a.textPanelCloneSizeSet = !0, !1
		}
		var s = l(e);
		if (!s) return !1;
		var d = null;
		1 == Y.isTextpanelOutside && (d = g(e)), s.refresh(!1, !0, r, d);
		var _ = 1 == B.tile_textpanel_always_on || "fade" == B.tile_textpanel_appear_type;
		if (_)
			if (1 == Y.isTextpanelOutside && n && "bottom" == B.tile_textpanel_position) {
				var c = n - d;
				s.positionPanel(c)
			} else s.positionPanel()
	}

	function I(e) {
		var t = (R.getItemByTile(e), p(e)),
			i = c(e),
			n = Q.getElementSize(e);
		b(e, n.width, n.height), 1 == B.tile_enable_textpanel && y(e, "regular", n.width, n.height);
		var r = n.width - Y.tileInnerReduce,
			a = n.height - Y.tileInnerReduce,
			s = 0;
		if (1 == Y.isTextpanelOutside) {
			var l = g(e);
			a -= l, "top" == B.tile_textpanel_position && (s = l)
		}
		var u = o(e);
		if (Q.setElementSizeAndPosition(u, 0, s, r, a), t || i) {
			var _ = 0;
			if (1 == B.tile_enable_textpanel && 0 == Y.isTextPanelHidden && 0 == Y.isTextpanelOutside) {
				var h = d(e),
					f = Q.getElementSize(h);
				f.height > 0 && (_ = Math.floor(f.height / 2 * -1))
			}
		}
		if (t && i) {
			var m = Q.getElementSize(t),
				v = Q.getElementSize(i),
				I = B.tile_space_between_icons,
				w = m.width + I + v.width,
				E = Math.floor((n.width - w) / 2);
			I > E && (I = Math.floor((n.width - m.width - v.width) / 3), w = m.width + I + v.width, E = Math.floor((n.width - w) / 2)), Q.placeElement(t, E, "middle", 0, _), Q.placeElement(i, E + m.width + I, "middle", 0, _)
		} else t && Q.placeElement(t, "center", "middle", 0, _), i && Q.placeElement(i, "center", "middle", 0, _);
		t && t.show(), i && i.show()
	}

	function w(e, t) {
		var i = (R.getItemByTile(e), r(e)),
			n = B.thumb_transition_duration;
		if (0 == B.tile_image_effect_reverse) {
			var o = R.getTileImage(e);
			t ? (o.fadeTo(0, 1), i.stop(!0).fadeTo(n, 0)) : i.stop(!0).fadeTo(n, 1)
		} else t ? i.stop(!0).fadeTo(n, 1) : i.stop(!0).fadeTo(n, 0)
	}

	function E(e, t) {
		var i = B.thumb_transition_duration,
			n = d(e);
		if (!n) return !0;
		if ("slide" == B.tile_textpanel_appear_type) {
			var r = Q.getElementSize(n);
			if (0 == r.width) return !1;
			var o = -r.height,
				a = 0,
				s = {},
				l = {},
				u = "bottom";
			"inside_top" == B.tile_textpanel_position && (u = "top"), s[u] = o + "px", l[u] = a + "px", 1 == t ? (n.fadeTo(0, 1), 0 == n.is(":animated") && n.css(s), l.opacity = 1, n.stop(!0).animate(l, i)) : n.stop(!0).animate(s, i)
		} else 1 == t ? n.stop(!0).fadeTo(i, 1) : n.stop(!0).fadeTo(i, 0)
	}

	function T(e, t, i) {
		var n = B.thumb_transition_duration;
		i && i === !0 && (n = 0);
		var r = p(e),
			o = c(e),
			a = t ? 1 : 0;
		r && r.stop(!0).fadeTo(n, a), o && o.stop(!0).fadeTo(n, a)
	}

	function S(e, t) {
		if (t = jQuery(t), B.tile_enable_image_effect && w(t, !0), 1 == B.tile_enable_textpanel && 0 == B.tile_textpanel_always_on && 0 == Y.isTextPanelHidden && E(t, !0), Y.isSaparateIcons && 1 == B.tile_enable_icons) {
			var i = 1 == B.thumb_overlay_reverse,
				n = R.getItemByTile(t);
			0 == v(n) && T(t, i, !1)
		}
	}

	function P(e, t) {
		if (t = jQuery(t), B.tile_enable_image_effect && w(t, !1), 1 == B.tile_enable_textpanel && 0 == B.tile_textpanel_always_on && E(t, !1), 1 == Y.isSaparateIcons && 1 == B.tile_enable_icons) {
			var i = 1 == B.thumb_overlay_reverse ? !1 : !0,
				n = R.getItemByTile(t);
			0 == v(n) ? T(t, i, !1) : T(t, !0, !0)
		}
	}

	function x(e) {
		var t = W.getThumbs().not(e);
		t.each(function (e, t) {
			W.setThumbNormalStyle(jQuery(t))
		})
	}

	function j(e, t, i) {
		return t = jQuery(t), 1 == B.tile_visible_before_image && t.data("image_placed") !== !0 && i !== !0 ? !0 : (I(t), void W.setThumbNormalStyle(t))
	}

	function C(e, t, i) {
		I(t), i.fadeTo(0, 1), t.data("image_placed", !0)
	}

	function A(e) {
		return 1 == m(e) ? (G.trigger(R.events.TILE_CLICK, e), !0) : void(0 == f(e) && (x(e), W.setThumbOverStyle(e)))
	}

	function M(e) {
		var t = jQuery(this),
			i = t.prop("tagName").toLowerCase(),
			n = !0;
		if (Y.funcParentApproveClick && 0 == Y.funcParentApproveClick() && (n = !1), "a" == i) 0 == n && e.preventDefault();
		else if (0 == f(t)) 1 == n && A(t);
		else {
			if (0 == m(t)) return !0;
			1 == n && G.trigger(R.events.TILE_CLICK, t)
		}
	}

	function O(e) {
		e.stopPropagation();
		var t = jQuery(this).parents(".ug-tile"),
			i = !0;
		return Y.funcParentApproveClick && 0 == Y.funcParentApproveClick() && (i = !1), 0 == f(t) ? (A(t), !0) : 1 == i ? (G.trigger(R.events.TILE_CLICK, t), !1) : void 0
	}

	function z(e) {
		var t = jQuery(this).parents(".ug-tile");
		Y.funcParentApproveClick && 0 == Y.funcParentApproveClick() && e.preventDefault(), 0 == f(t) && 0 == B.tile_as_link && (e.preventDefault(), A(t))
	}
	var L, H, N, k, R = this,
		G = jQuery(this),
		D = new UniteGalleryMain,
		Q = new UGFunctions,
		W = new UGThumbsGeneral;
	this.resizemode = {
		FULL: "full",
		WRAPPER_ONLY: "wrapper_only",
		VISIBLE_ELEMENTS: "visible_elements"
	}, this.sizeby = {
		GLOBAL_RATIO: "global_ratio",
		TILE_RATIO: "tile_ratio",
		IMAGE_RATIO: "image_ratio",
		CUSTOM: "custom"
	}, this.events = {
		TILE_CLICK: "tile_click"
	};
	var B = {
			tile_width: 250,
			tile_height: 200,
			tile_size_by: R.sizeby.IMAGE_RATIO,
			tile_visible_before_image: !1,
			tile_enable_background: !0,
			tile_background_color: "#F0F0F0",
			tile_enable_border: !1,
			tile_border_width: 3,
			tile_border_color: "#F0F0F0",
			tile_border_radius: 0,
			tile_enable_outline: !1,
			tile_outline_color: "#8B8B8B",
			tile_enable_shadow: !1,
			tile_shadow_h: 1,
			tile_shadow_v: 1,
			tile_shadow_blur: 3,
			tile_shadow_spread: 2,
			tile_shadow_color: "#8B8B8B",
			tile_enable_action: !0,
			tile_as_link: !1,
			tile_link_newpage: !0,
			tile_enable_overlay: !0,
			tile_overlay_opacity: .4,
			tile_overlay_color: "#000000",
			tile_enable_icons: !0,
			tile_show_link_icon: !1,
			tile_videoplay_icon_always_on: "never",
			tile_space_between_icons: 26,
			tile_enable_image_effect: !1,
			tile_image_effect_type: "bw",
			tile_image_effect_reverse: !1,
			tile_enable_textpanel: !1,
			tile_textpanel_source: "title",
			tile_textpanel_always_on: !1,
			tile_textpanel_appear_type: "slide",
			tile_textpanel_position: "inside_bottom",
			tile_textpanel_offset: 0
		},
		F = {
			thumb_color_overlay_effect: !0,
			thumb_overlay_reverse: !0,
			thumb_image_overlay_effect: !1,
			tile_textpanel_enable_description: !1,
			tile_textpanel_bg_opacity: .6,
			tile_textpanel_padding_top: 8,
			tile_textpanel_padding_bottom: 8
		},
		Y = {
			ratioByHeight: 0,
			ratioByWidth: 0,
			eventSizeChange: "thumb_size_change",
			funcCustomTileHtml: null,
			funcCustomPositionElements: null,
			funcParentApproveClick: null,
			isSaparateIcons: !1,
			tileInnerReduce: 0,
			isTextpanelOutside: !1,
			hasImageContainer: !1,
			isVideoplayIconAlwaysOn: !1,
			isTextPanelHidden: !1
		};
	this.loadTileImage = function (e) {
		var t = R.getTileImage(e);
		Q.checkImagesLoaded(t, null, function (t, i) {
			C(null, e, jQuery(t))
		})
	}, this.setHtml = function (e, t) {
		H = e, t !== !0 && i(), W.setHtmlThumbs(e, t)
	}, this.initEvents = function () {
		W.initEvents(), jQuery(W).on(W.events.SETOVERSTYLE, S), jQuery(W).on(W.events.SETNORMALSTYLE, P), jQuery(W).on(W.events.PLACEIMAGE, C), N.on(Y.eventSizeChange, j), H.on("click", ".ug-tile", M), H.on("click", ".ug-tile .ug-button-play", O), H.on("click", ".ug-tile .ug-icon-link", z)
	}, this.destroy = function () {
		if (H.off("click", ".ug-tile"), H.off("click", ".ug-tile .ug-button-play"), H.off("click", ".ug-tile .ug-icon-link"), jQuery(W).off(W.events.SETOVERSTYLE), jQuery(W).off(W.events.SETNORMALSTYLE), jQuery(W).off(W.events.PLACEIMAGE), N.off(Y.eventSizeChange), 1 == B.tile_enable_textpanel) {
			var e = W.getThumbs();
			jQuery.each(e, function (e, t) {
				var i = l(jQuery(t));
				i && i.destroy()
			})
		}
		W.destroy()
	}, this.init = function (t, i, n) {
		e(t, i, n)
	}, this.setFixedMode = function () {
		B.tile_size_by = R.sizeby.GLOBAL_RATIO, B.tile_visible_before_image = !0
	}, this.setApproveClickFunction = function (e) {
		Y.funcParentApproveClick = e
	}, this.resizeTile = function (e, t, i, n) {
		if (1 == Y.isTextpanelOutside && y(e, "clone", t), t) {
			if (!i) var i = R.getTileHeightByWidth(t, e)
		} else var t = B.tile_width,
			i = B.tile_height;
		switch (Q.setElementSize(e, t, i), n) {
			default:
				case R.resizemode.FULL:
				R.triggerSizeChangeEvent(e, !0);
			break;
			case R.resizemode.WRAPPER_ONLY:
					return !0;
			case R.resizemode.VISIBLE_ELEMENTS:
					if (Y.funcCustomTileHtml) return R.triggerSizeChangeEvent(e, !0), !0;b(e, t, i, !0),
				1 == B.tile_enable_textpanel && 1 == B.tile_textpanel_always_on && t && y(e, "regular", t, i)
		}
	}, this.resizeAllTiles = function (e, t, n) {
		i();
		var r = null;
		if (B.tile_size_by == R.sizeby.GLOBAL_RATIO && (r = R.getTileHeightByWidth(e)), !n) var n = W.getThumbs();
		n.each(function (i, n) {
			R.resizeTile(jQuery(n), e, r, t)
		})
	}, this.triggerSizeChangeEvent = function (e, t) {
		if (!e) return !1;
		if (!t) var t = !1;
		N.trigger(Y.eventSizeChange, [e, t])
	}, this.triggerSizeChangeEventAllTiles = function (e) {
		var t = W.getThumbs();
		t.each(function () {
			var t = jQuery(this);
			R.triggerSizeChangeEvent(t, e)
		})
	}, this.disableEvents = function () {
		var e = W.getThumbs();
		e.css("pointer-events", "none")
	}, this.enableEvents = function () {
		var e = W.getThumbs();
		e.css("pointer-events", "auto")
	}, this.setOptions = function (e) {
		B = jQuery.extend(B, e), W.setOptions(e)
	}, this.setTileSizeOptions = function (e) {
		if (B.tile_size_by !== R.sizeby.GLOBAL_RATIO) throw new Error("setNewTileOptions works with global ration only");
		B.tile_width = e, B.tile_height = Math.floor(e * Y.ratioByHeight)
	}, this.setCustomFunctions = function (e, t) {
		Y.funcCustomTileHtml = e, Y.funcCustomPositionElements = t
	}, this.run = function (e) {
		var t = W.type.GET_THUMBS_ALL;
		e === !0 && (t = W.type.GET_THUMBS_NEW);
		var i = W.getThumbs(t);
		B.tile_size_by == R.sizeby.GLOBAL_RATIO && R.resizeAllTiles(B.tile_width, R.resizemode.WRAPPER_ONLY, i), 1 == B.tile_enable_image_effect && 0 == B.tile_image_effect_reverse && i.children(".ug-thumb-image").fadeTo(0, 0), W.setHtmlProperties(i), 1 == B.tile_visible_before_image && (i.children(".ug-thumb-image").fadeTo(0, 0), W.loadThumbsImages())
	}, this._____________EXTERNAL_GETTERS____________ = function () {}, this.getObjThumbs = function () {
		return W
	}, this.getOptions = function () {
		return B
	}, this.getTileImage = function (e) {
		var t = e.find("img.ug-thumb-image");
		return t
	}, this.getItemByTile = function (e) {
		return W.getItemByThumb(e)
	}, this.getTileHeightByWidth = function (e, t) {
		var i = h(t);
		if (null === i) return null;
		var n = Math.floor((e - Y.tileInnerReduce) * i) + Y.tileInnerReduce;
		return t && 1 == Y.isTextpanelOutside && B.tile_size_by == R.sizeby.IMAGE_RATIO && (n += g(t)), n
	}, this.getTileImageSize = function (e) {
		var t = R.getItemByTile(e);
		if (!t.thumbWidth || !t.thumbHeight) throw new Error("Can't get image size - image not inited.");
		var i = {
			width: t.thumbWidth,
			height: t.thumbHeight
		};
		return i
	}, this.getGlobalTileSize = function () {
		if (B.tile_size_by != R.sizeby.GLOBAL_RATIO) throw new Error("The size has to be global ratio");
		var e = {
			width: B.tile_width,
			height: B.tile_height
		};
		return e
	}
}

function UGAviaControl() {
	function e(e) {
		return 0 == p ? e.pageX : e.pageY
	}

	function t(t) {
		jQuery("body").on("touchstart", function (e) {
			return 0 == f.isControlEnabled ? !0 : void(f.touchEnabled = !0)
		}), jQuery("body").mousemove(function (t) {
			if (0 == f.isControlEnabled) return !0;
			if (1 == f.touchEnabled) return jQuery("body").off("mousemove"), !0;
			f.isMouseInsideStrip = g.ismouseover();
			var i = u.isTouchMotionActive();
			if (1 == f.isMouseInsideStrip && 0 == i) {
				var n = e(t);
				l(n)
			} else a()
		})
	}

	function i(e) {
		var t = h.strip_padding_top,
			i = (h.strip_padding_bottom, g.height()),
			n = c.height();
		if (i > n) return null;
		var r = g.offset(),
			o = r.top,
			a = e - o - t;
		if (0 > a) return null;
		var s = h.thumb_height,
			l = i - h.thumb_height,
			u = l - s;
		s > a && (a = s), a > l && (a = l);
		var d = (a - s) / u,
			_ = (n - i) * d;
		return _ = -1 * Math.round(_) + t
	}

	function n(e) {
		var t = h.strip_padding_left,
			i = h.strip_padding_right,
			n = g.width() - t - i,
			r = c.width();
		if (n > r) return null;
		var o = g.offset(),
			a = o.left,
			s = e - a - t,
			l = h.thumb_width,
			u = n - h.thumb_width,
			d = u - l;
		l > s && (s = l), s > u && (s = u);
		var _ = (s - l) / d,
			p = (r - n) * _;
		return p = -1 * Math.round(p) + t
	}

	function r() {
		if (0 == f.is_strip_moving) return !1;
		var e = u.getInnerStripPos();
		Math.floor(e) == Math.floor(f.strip_finalPos) && a();
		var t, i = Math.abs(f.strip_finalPos - e);
		1 > i ? t = i : (t = i / 4, t > 0 && 1 > t && (t = 1)), f.strip_finalPos < e && (t = -1 * t);
		var n = e + t;
		u.positionInnerStrip(n)
	}

	function o() {
		return 1 == f.isStripMoving ? !1 : (f.isStripMoving = !0, void(f.handle_timeout = setInterval(r, 10)))
	}

	function a() {
		return 0 == f.isStripMoving ? !1 : (f.isStripMoving = !1, void(f.handle_timeout = clearInterval(f.handle_timeout)))
	}

	function s(e) {
		return 0 == p ? n(e) : i(e)
	}

	function l(e) {
		var t = s(e);
		return null === t ? !1 : (f.is_strip_moving = !0, f.strip_finalPos = t, void o())
	}
	var u, d, _, g, c, h, p, f = {
		touchEnabled: !1,
		isMouseInsideStrip: !1,
		strip_finalPos: 0,
		handle_timeout: "",
		isStripMoving: !1,
		isControlEnabled: !0
	};
	this.enable = function () {
		f.isControlEnabled = !0
	}, this.disable = function () {
		f.isControlEnabled = !1
	}, this.init = function (e) {
		u = e, _ = e.getObjects(), d = _.g_gallery, g = _.g_objStrip, c = _.g_objStripInner, h = _.g_options, p = _.isVertical, t()
	}, this.destroy = function () {
		jQuery("body").off("touchstart"), jQuery("body").off("mousemove")
	}
}

function UGSlider() {
	function e(e, t, n) {
		me = e, n && (he = n, t = we.convertCustomPrefixOptions(t, he, "slider")), te = jQuery(e);
		var r = me.getObjects();
		if (ie = r.g_objWrapper, ne = r.g_objThumbs, t.hasOwnProperty("slider_progress_indicator_type") && (Se.slider_progress_indicator_type = t.slider_progress_indicator_type), "bar" == Se.slider_progress_indicator_type && (Se = jQuery.extend(Se, Pe)), t && pe.setOptions(t), i(), 1 == Se.slider_enable_bullets) {
			ye = new UGBullets;
			var o = {
				bullets_skin: Se.slider_bullets_skin,
				bullets_space_between: Se.slider_bullets_space_between
			};
			ye.init(me, o)
		}
		Se.slider_enable_text_panel && (Te = new UGTextPanel, Te.init(me, Se, "slider")), Se.slider_enable_zoom_panel && (ce = new UGZoomButtonsPanel, ce.init(pe, Se));
		var a = me.getGalleryID();
		Ie.init(Se, !1, a)
	}

	function t() {
		if (1 == xe.isRunOnce) return !1;
		if (xe.isRunOnce = !0, Se.slider_background_color) {
			var e = Se.slider_background_color;
			1 != Se.slider_background_opacity && (e = we.convertHexToRGB(e, Se.slider_background_opacity)), re.css("background-color", e)
		} else 1 != Se.slider_background_opacity && (e = we.convertHexToRGB("#000000", Se.slider_background_opacity), re.css("background-color", e));
		1 == Se.slider_control_swipe && (_e = new UGTouchSliderControl, _e.init(pe, Se)), 1 == Se.slider_control_zoom && (ge = new UGZoomSliderControl, ge.init(pe, Se)), Te && Te.run(), X()
	}

	function i() {
		var e = me.getOptions(),
			t = e.gallery_skin;
		"" == Se.slider_bullets_skin && (Se.slider_bullets_skin = t), "" == Se.slider_arrows_skin && (Se.slider_arrows_skin = t), "" == Se.slider_zoompanel_skin && (Se.slider_zoompanel_skin = t), "" == Se.slider_play_button_skin && (Se.slider_play_button_skin = t), "" == Se.slider_fullscreen_button_skin && (Se.slider_fullscreen_button_skin = t), Se.video_enable_closebutton = Se.slider_video_enable_closebutton, "zoom" != e.gallery_mousewheel_role && (Se.slider_zoom_mousewheel = !1)
	}

	function n(e, t) {
		var i = "ug-type-square";
		"round" == Se.slider_videoplay_button_type && (i = "ug-type-round");
		var n = "";
		return n += "<div class='ug-slide-wrapper ug-slide" + t + "'>", n += "<div class='ug-item-wrapper'></div>", n += "<div class='ug-slider-preloader " + e + "'></div>", n += "<div class='ug-button-videoplay " + i + "' style='display:none'></div>", n += "</div>"
	}

	function r(e) {
		e && (ie = e);
		var t = Z(),
			i = (me.getOptions(), "<div class='ug-slider-wrapper'>");
		if (i += "<div class='ug-slider-inner'>", i += n(t, 1), i += n(t, 2), i += n(t, 3), i += "</div>", 1 == Se.slider_enable_arrows && (i += "<div class='ug-slider-control ug-arrow-left ug-skin-" + Se.slider_arrows_skin + "'></div>", i += "<div class='ug-slider-control ug-arrow-right ug-skin-" + Se.slider_arrows_skin + "'></div>"), 1 == Se.slider_enable_play_button && (i += "<div class='ug-slider-control ug-button-play ug-skin-" + Se.slider_play_button_skin + "'></div>"), 1 == Se.slider_enable_fullscreen_button && (i += "<div class='ug-slider-control ug-button-fullscreen ug-skin-" + Se.slider_fullscreen_button_skin + "'></div>"), i += "</div>", ie.append(i), re = ie.children(".ug-slider-wrapper"), oe = re.children(".ug-slider-inner"), ae = oe.children(".ug-slide1"), se = oe.children(".ug-slide2"), le = oe.children(".ug-slide3"), ae.data("slidenum", 1), se.data("slidenum", 2), le.data("slidenum", 3), ye && ye.appendHTML(re), 1 == Se.slider_enable_arrows && (ue = re.children(".ug-arrow-left"), de = re.children(".ug-arrow-right")), 1 == Se.slider_enable_play_button && (ve = re.children(".ug-button-play")), 1 == Se.slider_enable_fullscreen_button && (be = re.children(".ug-button-fullscreen")), 1 == Se.slider_enable_progress_indicator) {
			Ee = we.initProgressIndicator(Se.slider_progress_indicator_type, Se, re);
			var r = Ee.getType();
			"bar" == r && "pie" == Se.slider_progress_indicator_type && (Se.slider_progress_indicator_type = "bar", Se = jQuery.extend(Se, Pe)), me.setProgressIndicator(Ee)
		}
		if (1 == Se.slider_enable_text_panel && (Te.appendHTML(re), 0 == Se.slider_textpanel_always_on)) {
			var o = Te.getElement();
			o.hide().data("isHidden", !0), xe.isTextPanelSaparateHover = !0
		}
		1 == Se.slider_enable_zoom_panel && ce.appendHTML(re), Ie.setHtml(oe)
	}

	function o(e) {
		var t = J(e);
		we.placeElementInParentCenter(t);
		var i = $(e);
		we.placeElementInParentCenter(i)
	}

	function a() {
		if (ye && (objBullets = ye.getElement(), we.placeElement(objBullets, Se.slider_bullets_align_hor, Se.slider_bullets_align_vert, Se.slider_bullets_offset_hor, Se.slider_bullets_offset_vert), we.placeElement(objBullets, Se.slider_bullets_align_hor, Se.slider_bullets_align_vert, Se.slider_bullets_offset_hor, Se.slider_bullets_offset_vert)), 1 == Se.slider_enable_arrows && (we.placeElement(ue, Se.slider_arrow_left_align_hor, Se.slider_arrow_left_align_vert, Se.slider_arrow_left_offset_hor, Se.slider_arrow_left_offset_vert), we.placeElement(de, Se.slider_arrow_right_align_hor, Se.slider_arrow_left_align_vert, Se.slider_arrow_right_offset_hor, Se.slider_arrow_right_offset_vert)), 0 == Se.slider_controls_always_on && M(!0), Ee) {
			var e = Ee.getElement();
			if ("bar" == Se.slider_progress_indicator_type) {
				var t = re.width();
				Ee.setSize(t), we.placeElement(e, "left", Se.slider_progress_indicator_align_vert, 0, Se.slider_progress_indicator_offset_vert)
			} else we.placeElement(e, Se.slider_progress_indicator_align_hor, Se.slider_progress_indicator_align_vert, Se.slider_progress_indicator_offset_hor, Se.slider_progress_indicator_offset_vert)
		}
		Te && Te.positionPanel(), s(), o(ae), o(se), o(le), C()
	}

	function s() {
		if (ve && we.placeElement(ve, Se.slider_play_button_align_hor, Se.slider_play_button_align_vert, Se.slider_play_button_offset_hor, Se.slider_play_button_offset_vert), be && we.placeElement(be, Se.slider_fullscreen_button_align_hor, Se.slider_fullscreen_button_align_vert, Se.slider_fullscreen_button_offset_hor, Se.slider_fullscreen_button_offset_vert), ce) {
			var e = ce.getElement();
			we.placeElement(e, Se.slider_zoompanel_align_hor, Se.slider_zoompanel_align_vert, Se.slider_zoompanel_offset_hor, Se.slider_zoompanel_offset_vert)
		}
	}

	function l() {
		var e, t, i, n, r = pe.getSlidesReference(),
			o = 0,
			a = 0,
			s = 0;
		i = pe.isSlideHasItem(r.objNextSlide), n = pe.isSlideHasItem(r.objPrevSlide), n ? (s = r.objPrevSlide.outerWidth(), r.objPrevSlide.css("z-index", 1)) : r.objPrevSlide.hide(), t = s + r.objCurrentSlide.outerWidth(), e = t, i ? (e = t + r.objNextSlide.outerWidth(), r.objPrevSlide.css("z-index", 2)) : r.objNextSlide.hide(), r.objCurrentSlide.css("z-index", 3), we.placeElement(r.objCurrentSlide, s, o), oe.css({
			left: -s + "px",
			width: e + "px"
		}), n && (we.placeElement(r.objPrevSlide, a, o), we.showElement(r.objPrevSlide)), i && (we.showElement(r.objNextSlide), we.placeElement(r.objNextSlide, t, o))
	}

	function u(e) {
		var t = e.data("index");
		if (void 0 === t || null == t) return !1;
		var i = me.getItem(t);
		return i ? void f(e, i) : !1
	}

	function d(e) {
		e.stop(!0).show(100)
	}

	function _(e) {
		e.stop(!0).hide(100)
	}

	function g(e, t) {
		var i = Se.slider_image_border_width;
		if (10 >= i) return i;
		var n = we.getElementSize(e),
			r = n.width,
			o = n.height;
		if (t && (t.hasOwnProperty("imageWidth") && (r = t.imageWidth), t.hasOwnProperty("imageHeight") && (o = t.imageHeight)), 0 >= r) return i;
		var a = o > r ? r : o,
			s = 2 * i,
			l = s / a;
		if (l < Se.slider_image_border_maxratio) return i;
		var i = a * Se.slider_image_border_maxratio / 2;
		return i = Math.round(i)
	}

	function c(e, t, i) {
		var n = {};
		if (1 == Se.slider_image_border) {
			n["border-style"] = "solid";
			var r = g(e, i);
			n["border-width"] = r + "px", n["border-color"] = Se.slider_image_border_color, n["border-radius"] = Se.slider_image_border_radius
		}
		"image" != t && 1 == Se.slider_video_constantsize && (n["background-color"] = "#000000"), 1 == Se.slider_image_shadow && (n["box-shadow"] = "3px 3px 10px 0px #353535"), e.css(n)
	}

	function h(e, t) {
		var i = Se.slider_video_constantsize_width,
			n = Se.slider_video_constantsize_height,
			r = Se.slider_video_constantsize_scalemode,
			o = we.scaleImageExactSizeInParent(e, t.imageWidth, t.imageHeight, i, n, r);
		return o
	}

	function p(e, t, i) {
		var n = e.children(".ug-item-wrapper"),
			r = J(e);
		if ("undefined" == typeof t.urlImage || "" == t.urlImage) throw new Error("The slide don't have big image defined ( data-image='imageurl' ). Please check gallery items.", "showbig");
		var o = t.urlImage,
			a = e.data("urlImage");
		e.data("urlImage", o);
		var s = pe.getScaleMode(e),
			l = pe.getSlideType(e);
		if (objPadding = pe.getObjImagePadding(), a == o && i !== !0) {
			var u = n.children("img");
			(0 == t.imageWidth || 0 == t.imageHeight) && me.checkFillImageSize(u, t);
			var g = {};
			g = "image" != l && 1 == Se.slider_video_constantsize ? h(u, t) : we.scaleImageFitParent(u, t.imageWidth, t.imageHeight, s, objPadding), c(u, l, g), fe.trigger(pe.events.AFTER_PUT_IMAGE, e)
		} else if (u = we.placeImageInsideParent(o, n, t.imageWidth, t.imageHeight, s, objPadding), 1 == t.isBigImageLoaded) {
			if (u.fadeTo(0, 1), _(r), "image" != l && 1 == Se.slider_video_constantsize) var g = h(u, t);
			else var g = we.getImageInsideParentData(n, t.imageWidth, t.imageHeight, s, objPadding);
			u.css("width", g.imageWidth + "px"), c(u, l, g), fe.trigger(pe.events.AFTER_PUT_IMAGE, e)
		} else u.fadeTo(0, 0), d(r), e.data("isLoading", !0), pe.isSlideCurrent(e) && fe.trigger(pe.events.CURRENTSLIDE_LOAD_START), u.data("itemIndex", t.index), u.on("load", function () {
			var e = jQuery(this),
				t = e.data("itemIndex");
			e.fadeTo(0, 1);
			var i = e.parent().parent(),
				n = pe.getSlideType(i),
				r = J(i),
				o = pe.getObjImagePadding(),
				a = pe.getScaleMode(i);
			_(r), i.data("isLoading", !1), pe.isSlideCurrent(i) && fe.trigger(pe.events.CURRENTSLIDE_LOAD_END), me.onItemBigImageLoaded(null, e);
			var s = me.getItem(t),
				l = {};
			"image" != n && 1 == Se.slider_video_constantsize ? h(e, s) : l = we.scaleImageFitParent(e, s.imageWidth, s.imageHeight, a, o), e.fadeTo(0, 1), c(e, n, l), fe.trigger(pe.events.AFTER_PUT_IMAGE, i)
		})
	}

	function f(e, t) {
		try {
			var i = e.children(".ug-item-wrapper");
			if (null == t) return i.html(""), e.removeData("index"), e.removeData("type"), e.removeData("urlImage"), !1;
			e.data("index");
			e.data("index", t.index), e.data("type", t.type), 1 == Se.slider_enable_links && "image" == t.type && (t.link ? e.addClass("ug-slide-clickable") : e.removeClass("ug-slide-clickable")), p(e, t);
			var n = $(e);
			switch (t.type) {
				case "image":
					n.hide();
					break;
				default:
					n.show()
			}
		} catch (r) {
			throw "undefined" != typeof r.fileName && "showbig" == r.fileName && me.showErrorMessageReplaceGallery(r.message), i.html(""), new Error(r)
		}
	}

	function m() {
		if (!Te) return !1;
		if (1 == b()) return !1;
		var e = Te.getElement(),
			t = 0;
		(1 == xe.isTextPanelSaparateHover || 1 == Se.slider_textpanel_always_on) && (t = Se.slider_controls_appear_duration), e.stop().fadeTo(t, 0), e.data("isHidden", !0)
	}

	function v() {
		if (!Te) return !1;
		if (0 == b()) return !1;
		var e = Te.getElement(),
			t = 0;
		(1 == xe.isTextPanelSaparateHover || 1 == Se.slider_textpanel_always_on) && (e.show(), Te.positionElements(), t = Se.slider_controls_appear_duration), e.stop().show().fadeTo(t, 1), e.data("isHidden", !1)
	}

	function b() {
		var e = Te.getElement(),
			t = e.data("isHidden");
		return t === !1 ? !1 : !0
	}

	function y(e, t) {
		if (void 0 == t) var t = pe.getCurrentSlide();
		var i = pe.getSlideType(t);
		if (i != e) throw new Error("Wrong slide type: " + i + ", should be: " + e);
		return !0
	}

	function I() {
		var e = pe.getCurrentSlide(),
			t = pe.getSlideImage(e),
			i = we.getElementSize(e),
			n = i.left,
			r = i.top;
		if (1 == Se.slider_video_constantsize) {
			var o = we.getElementSize(t);
			n += o.left, r += o.top
		} else n += Se.slider_video_padding_left, r += Se.slider_video_padding_top;
		Ie.setPosition(n, r)
	}

	function w() {
		var e = Se.slider_video_constantsize_width,
			t = Se.slider_video_constantsize_height;
		Ie.setSize(e, t);
		var i = Ie.getObject();
		c(i, "video")
	}

	function E(e, t, i) {
		fe.trigger(pe.events.TRANSITION_START);
		var n = Se.slider_transition;
		switch (i && (n = i), pe.stopSlideAction(null, !0), n) {
			default:
				case "fade":
				P(t);
			break;
			case "slide":
					T(e, t);
				break;
			case "lightbox_open":
					P(t, !1, !0)
		}
	}

	function T(e, t) {
		var i = pe.isAnimating();
		if (1 == i) return xe.itemWaiting = t, !0;
		null != xe.itemWaiting && (xe.itemWaiting = null);
		var n = pe.getSlidesReference();
		switch (e) {
			case "right":
				f(n.objPrevSlide, t), l();
				var r = we.getElementSize(n.objPrevSlide),
					o = -r.left;
				pe.switchSlideNums("right");
				break;
			case "left":
				f(n.objNextSlide, t), l();
				var a = we.getElementSize(n.objNextSlide),
					o = -a.left;
				pe.switchSlideNums("left");
				break;
			default:
				throw new Error("wrong direction: " + e)
		}
		var s = Se.slider_transition_speed,
			u = Se.slider_transition_easing,
			d = {
				duration: s,
				easing: u,
				queue: !1,
				always: function () {
					if (pe.stopSlideAction(), Ie.hide(), null != xe.itemWaiting) {
						var e = K(xe.itemWaiting);
						T(e, xe.itemWaiting)
					} else pe.placeNabourItems(), fe.trigger(pe.events.TRANSITION_END)
				}
			};
		oe.animate({
			left: o + "px"
		}, d)
	}

	function S(e, t, i) {
		i ? e.fadeTo(Se.slider_transition_speed, t, i) : e.fadeTo(Se.slider_transition_speed, t)
	}

	function P(e, t, i) {
		if (!t) var t = !1;
		var n = pe.getSlidesReference();
		f(n.objNextSlide, e);
		var r = we.getElementSize(n.objCurrentSlide);
		we.placeElement(n.objNextSlide, r.left, r.top);
		var o = xe.numCurrent;
		if (xe.numCurrent = xe.numNext, xe.numNext = o, fe.trigger(pe.events.ITEM_CHANGED), n.objNextSlide.stop(!0), n.objCurrentSlide.stop(!0), 1 == t) n.objCurrentSlide.fadeTo(0, 0), n.objNextSlide.fadeTo(0, 1), pe.placeNabourItems(), fe.trigger(pe.events.TRANSITION_END), i !== !0 && Ie.hide();
		else {
			if (n.objNextSlide.fadeTo(0, 0), S(n.objCurrentSlide, 0, function () {
					pe.placeNabourItems(), fe.trigger(pe.events.TRANSITION_END), i !== !0 && Ie.hide()
				}), 1 == Ie.isVisible()) {
				var a = Ie.getObject();
				S(a, 0)
			}
			S(n.objNextSlide, 1)
		}
	}

	function x() {
		1 == Se.slider_fullscreen_button_mobilehide && be && be.hide(), 1 == Se.slider_play_button_mobilehide && ve && ve.hide(), 1 == Se.slider_zoompanel_mobilehide && ce && ce.getElement().hide()
	}

	function j() {
		1 == Se.slider_fullscreen_button_mobilehide && be && be.show(), 1 == Se.slider_play_button_mobilehide && ve && ve.show(), 1 == Se.slider_zoompanel_mobilehide && ce && ce.getElement().show()
	}

	function C() {
		var e = me.isMobileMode();
		e ? x() : j()
	}

	function A() {
		var e = re.children(".ug-slider-control");
		return e
	}

	function M(e) {
		if (0 == we.isTimePassed("sliderControlsToggle")) return !1;
		if (0 == xe.isControlsVisible) return !1;
		if (!e) var e = !1;
		var t = A();
		e === !0 ? t.stop().fadeTo(0, 0).hide() : t.stop().fadeTo(Se.slider_controls_appear_duration, 0, function () {
			t.hide()
		}), xe.isControlsVisible = !1
	}

	function O(e) {
		if (0 == we.isTimePassed("sliderControlsToggle")) return !1;
		if (1 == xe.isControlsVisible) return !0;
		if (!e) var e = !1;
		var t = A();
		e === !0 ? t.stop().show() : (t.stop().show().fadeTo(0, 0), t.fadeTo(Se.slider_controls_appear_duration, 1)), xe.isControlsVisible = !0
	}

	function z() {
		0 == xe.isControlsVisible ? O() : M()
	}

	function L(e) {
		if (e == xe.currentControlsMode) return !1;
		switch (e) {
			case "image":
				ce && ce.getElement().show();
				break;
			case "video":
				ce && ce.getElement().hide();
				break;
			default:
				throw new Error("wrong controld mode: " + e)
		}
		xe.currentControlsMode = e
	}

	function H(e, t, i) {
		var n = me.getSelectedItem();
		pe.setItem(n, !1, i);
		var r = n.index;
		ye && ye.setActive(r), Te && 0 == xe.isTextPanelSaparateHover && v(), L("image" == n.type ? "image" : "video")
	}

	function N(e, t) {
		me.selectItem(t)
	}

	function k(e) {
		return _e && 0 == _e.isTapEventOccured(e) ? !0 : void fe.trigger(pe.events.CLICK, e)
	}

	function R() {
		var e = pe.getCurrentSlide(),
			t = e.hasClass("ug-slide-clickable"),
			i = pe.getCurrentItem();
		return t ? (0 == Se.slider_links_newpage ? location.href = i.link : window.open(i.link, "_blank"), !0) : void(0 == Se.slider_controls_always_on && 1 == Se.slider_controls_appear_ontap && 1 == pe.isCurrentSlideType("image") && (z(), Te && 1 == Se.slider_textpanel_always_on && pe.isCurrentSlideType("image") && pe.isCurrentSlideImageFit() && v()))
	}

	function G(e) {
		Te && pe.isCurrentSlideType("image") && 0 == pe.isCurrentSlideImageFit() && m()
	}

	function D() {
		O()
	}

	function Q() {
		M()
	}

	function W(e) {
		var t = e.parent();
		pe.startSlideAction(t)
	}

	function B() {
		me.isPlayMode() && me.pausePlaying(), fe.trigger(pe.events.ACTION_START)
	}

	function F() {
		me.isPlayMode() && me.continuePlaying(), fe.trigger(pe.events.ACTION_END)
	}

	function Y(e, t, i) {
		ae.data("index") == t && (objItem = me.getItem(t), p(ae, objItem, !0)), se.data("index") == t && (objItem = me.getItem(t), p(se, objItem, !0)), le.data("index") == t && (objItem = me.getItem(t), p(le, objItem, !0))
	}

	function U(e, t) {
		t = jQuery(t);
		var i = pe.getSlideImage(t),
			n = $(t),
			r = we.getElementSize(i);
		we.placeElement(n, "center", "middle", r.left, r.top, i)
	}

	function V(e) {
		var t = $(e);
		we.addClassOnHover(t), we.setButtonOnClick(t, W)
	}

	function X() {
		te.on(me.events.ITEM_IMAGE_UPDATED, Y), te.on(me.events.ITEM_CHANGE, H), ye && jQuery(ye).on(ye.events.BULLET_CLICK, N), 1 == Se.slider_enable_arrows && (we.addClassOnHover(de, "ug-arrow-hover"), we.addClassOnHover(ue, "ug-arrow-hover"), me.setNextButton(de), me.setPrevButton(ue)), 0 == Se.slider_controls_always_on && re.hover(D, Q), re.on("touchend click", k), fe.on(pe.events.CLICK, R), Te && 1 == xe.isTextPanelSaparateHover && re.hover(v, m), ve && (we.addClassOnHover(ve, "ug-button-hover"), me.setPlayButton(ve)), be && (we.addClassOnHover(be, "ug-button-hover"), me.setFullScreenToggleButton(be)), ge && fe.on(pe.events.ZOOM_CHANGE, G), ce && ce.initEvents(), Ie.initEvents(), jQuery(Ie).on(Ie.events.SHOW, B), jQuery(Ie).on(Ie.events.HIDE, F), V(ae), V(se), V(le), fe.on(pe.events.AFTER_PUT_IMAGE, U), re.on("mouseenter", ".ug-item-wrapper img", function (e) {
			fe.trigger(pe.events.IMAGE_MOUSEENTER)
		}), re.on("mouseleave", ".ug-item-wrapper img", function (e) {
			var t = pe.isMouseInsideSlideImage(e);
			0 == t && fe.trigger(pe.events.IMAGE_MOUSELEAVE)
		})
	}

	function Z() {
		var e;
		switch (Se.slider_loader_type) {
			default:
				case 1:
				e = "ug-loader1";
			break;
			case 2:
					e = "ug-loader2";
				break;
			case 3:
					e = "ug-loader3";
				break;
			case 4:
					e = "ug-loader4";
				break;
			case 5:
					e = "ug-loader5";
				break;
			case 6:
					e = "ug-loader6";
				break;
			case 7:
					e = "ug-loader7";
				break;
			case 8:
					e = "ug-loader8";
				break;
			case 9:
					e = "ug-loader9"
		}
		return "black" == Se.slider_loader_color && (e += " ug-loader-black"), e
	}

	function q(e) {
		switch (e) {
			case 1:
				return ae;
			case 2:
				return se;
			case 3:
				return le;
			default:
				throw new Error("wrong num: " + e)
		}
	}

	function K(e) {
		var t = pe.getSlidesReference(),
			i = t.objCurrentSlide.data("index"),
			n = e.index,
			r = "left";
		return i > n && (r = "right"), r
	}

	function J(e) {
		if (!e) var e = pe.getCurrentSlide();
		var t = e.children(".ug-slider-preloader");
		return t
	}

	function $(e) {
		var t = e.children(".ug-button-videoplay");
		return t
	}

	function ee(e) {
		if (!e) var e = pe.getCurrentSlide();
		var t = e.data("index");
		if (void 0 == t) return null;
		var i = me.getItem(t);
		return i
	}
	var te, ie, ne, re, oe, ae, se, le, ue, de, _e, ge, ce, he, pe = this,
		fe = jQuery(pe),
		me = new UniteGalleryMain,
		ve = null,
		be = null,
		ye = null,
		Ie = new UGVideoPlayer,
		we = new UGFunctions,
		Ee = null,
		Te = null;
	this.events = {
		ITEM_CHANGED: "item_changed",
		BEFORE_SWITCH_SLIDES: "before_switch",
		BEFORE_RETURN: "before_return",
		AFTER_RETURN: "after_return",
		ZOOM_START: "slider_zoom_start",
		ZOOM_END: "slider_zoom_end",
		ZOOMING: "slider_zooming",
		ZOOM_CHANGE: "slider_zoom_change",
		START_DRAG: "start_drag",
		AFTER_DRAG_CHANGE: "after_drag_change",
		ACTION_START: "action_start",
		ACTION_END: "action_end",
		CLICK: "slider_click",
		TRANSITION_START: "slider_transition_start",
		TRANSITION_END: "slider_transition_end",
		AFTER_PUT_IMAGE: "after_put_image",
		IMAGE_MOUSEENTER: "slider_image_mouseenter",
		IMAGE_MOUSELEAVE: "slider_image_mouseleave",
		CURRENTSLIDE_LOAD_START: "slider_current_loadstart",
		CURRENTSLIDE_LOAD_END: "slider_current_loadend"
	};
	var Se = {
			slider_scale_mode: "fill",
			slider_scale_mode_media: "fill",
			slider_scale_mode_fullscreen: "down",
			slider_item_padding_top: 0,
			slider_item_padding_bottom: 0,
			slider_item_padding_left: 0,
			slider_item_padding_right: 0,
			slider_background_color: "",
			slider_background_opacity: 1,
			slider_image_padding_top: 0,
			slider_image_padding_bottom: 0,
			slider_image_padding_left: 0,
			slider_image_padding_right: 0,
			slider_image_border: !1,
			slider_image_border_width: 10,
			slider_image_border_color: "#ffffff",
			slider_image_border_radius: 0,
			slider_image_border_maxratio: .35,
			slider_image_shadow: !1,
			slider_video_constantsize: !1,
			slider_video_constantsize_scalemode: "fit",
			slider_video_constantsize_width: 854,
			slider_video_constantsize_height: 480,
			slider_video_padding_top: 0,
			slider_video_padding_bottom: 0,
			slider_video_padding_left: 0,
			slider_video_padding_right: 0,
			slider_video_enable_closebutton: !0,
			slider_transition: "slide",
			slider_transition_speed: 300,
			slider_transition_easing: "easeInOutQuad",
			slider_control_swipe: !0,
			slider_control_zoom: !0,
			slider_zoom_mousewheel: !0,
			slider_vertical_scroll_ondrag: !1,
			slider_loader_type: 1,
			slider_loader_color: "white",
			slider_enable_links: !0,
			slider_links_newpage: !1,
			slider_enable_bullets: !1,
			slider_bullets_skin: "",
			slider_bullets_space_between: -1,
			slider_bullets_align_hor: "center",
			slider_bullets_align_vert: "bottom",
			slider_bullets_offset_hor: 0,
			slider_bullets_offset_vert: 10,
			slider_enable_arrows: !0,
			slider_arrows_skin: "",
			slider_arrow_left_align_hor: "left",
			slider_arrow_left_align_vert: "middle",
			slider_arrow_left_offset_hor: 20,
			slider_arrow_left_offset_vert: 0,
			slider_arrow_right_align_hor: "right",
			slider_arrow_right_align_vert: "middle",
			slider_arrow_right_offset_hor: 20,
			slider_arrow_right_offset_vert: 0,
			slider_enable_progress_indicator: !0,
			slider_progress_indicator_type: "pie",
			slider_progress_indicator_align_hor: "right",
			slider_progress_indicator_align_vert: "top",
			slider_progress_indicator_offset_hor: 10,
			slider_progress_indicator_offset_vert: 10,
			slider_enable_play_button: !0,
			slider_play_button_skin: "",
			slider_play_button_align_hor: "left",
			slider_play_button_align_vert: "top",
			slider_play_button_offset_hor: 40,
			slider_play_button_offset_vert: 8,
			slider_play_button_mobilehide: !1,
			slider_enable_fullscreen_button: !0,
			slider_fullscreen_button_skin: "",
			slider_fullscreen_button_align_hor: "left",
			slider_fullscreen_button_align_vert: "top",
			slider_fullscreen_button_offset_hor: 11,
			slider_fullscreen_button_offset_vert: 9,
			slider_fullscreen_button_mobilehide: !1,
			slider_enable_zoom_panel: !0,
			slider_zoompanel_skin: "",
			slider_zoompanel_align_hor: "left",
			slider_zoompanel_align_vert: "top",
			slider_zoompanel_offset_hor: 12,
			slider_zoompanel_offset_vert: 92,
			slider_zoompanel_mobilehide: !1,
			slider_controls_always_on: !1,
			slider_controls_appear_ontap: !0,
			slider_controls_appear_duration: 300,
			slider_enable_text_panel: !0,
			slider_textpanel_always_on: !0,
			slider_videoplay_button_type: "square"
		},
		Pe = {
			slider_progress_indicator_align_hor: "left",
			slider_progress_indicator_align_vert: "bottom",
			slider_progress_indicator_offset_hor: 0,
			slider_progress_indicator_offset_vert: 0
		},
		xe = {
			isRunOnce: !1,
			isTextPanelSaparateHover: !1,
			numPrev: 1,
			numCurrent: 2,
			numNext: 3,
			isControlsVisible: !0,
			currentControlsMode: "image"
		};
	this.switchSlideNums = function (e) {
		switch (fe.trigger(pe.events.BEFORE_SWITCH_SLIDES), e) {
			case "left":
				var t = xe.numCurrent;
				xe.numCurrent = xe.numNext, xe.numNext = xe.numPrev, xe.numPrev = t;
				break;
			case "right":
				var t = xe.numCurrent;
				xe.numCurrent = xe.numPrev, xe.numPrev = xe.numNext, xe.numNext = t;
				break;
			default:
				throw new Error("wrong direction: " + e)
		}
		fe.trigger(pe.events.ITEM_CHANGED)
	}, this.destroy = function () {
		fe.off(pe.events.AFTER_PUT_IMAGE), te.off(me.events.ITEM_IMAGE_UPDATED), te.off(me.events.ITEM_CHANGE), ye && jQuery(ye).on(ye.events.BULLET_CLICK), re.off("mouseenter"), re.off("mouseleave"), re.off("touchend"), re.off("click"), fe.off(pe.events.CLICK), ge && fe.off(pe.events.ZOOM_CHANGE), fe.off(pe.events.BEFORE_SWITCH_SLIDES), jQuery(Ie).off(Ie.events.SHOW), jQuery(Ie).off(Ie.events.HIDE), Ie.destroy(), re.off("mouseenter", ".ug-item-wrapper img"), re.off("mouseleave", ".ug-item-wrapper img")
	}, this.________EXTERNAL_GENERAL___________ = function () {}, this.init = function (t, i, n) {
		e(t, i, n)
	}, this.getSlideImage = function (e) {
		if (!e) var e = pe.getCurrentSlide();
		var t = e.find(".ug-item-wrapper img");
		return t
	}, this.setHtml = function (e) {
		r(e)
	}, this.run = function () {
		t()
	}, this.isInnerInPlace = function () {
		var e = pe.getSlidesReference(),
			t = we.getElementSize(e.objCurrentSlide),
			i = -t.left,
			n = we.getElementSize(oe);
		return i == n.left ? !0 : !1
	}, this.isAnimating = function () {
		var e = oe.is(":animated");
		return e
	}, this.isSlideCurrent = function (e) {
		var t = e.data("slidenum");
		return xe.numCurrent == t ? !0 : !1
	}, this.isSlideHasItem = function (e) {
		var t = e.data("index");
		return void 0 === t || null === t ? !1 : !0
	}, this.getObjImagePadding = function () {
		var e = {
			padding_top: Se.slider_image_padding_top,
			padding_bottom: Se.slider_image_padding_bottom,
			padding_left: Se.slider_image_padding_left,
			padding_right: Se.slider_image_padding_right
		};
		return e
	}, this.getSlidesReference = function () {
		var e = {
			objPrevSlide: q(xe.numPrev),
			objNextSlide: q(xe.numNext),
			objCurrentSlide: q(xe.numCurrent)
		};
		return e
	}, this.getCurrentSlide = function () {
		var e = pe.getSlidesReference();
		return e.objCurrentSlide
	}, this.getCurrentItemIndex = function () {
		var e = pe.getSlidesReference(),
			t = e.objCurrentSlide.data("index");
		return (null === t || void 0 === t) && (t = -1), t
	}, this.getCurrentItem = function () {
		var e = pe.getCurrentItemIndex();
		if (-1 == e) return null;
		var t = me.getItem(e);
		return t
	}, this.getSlideType = function (e) {
		void 0 == e && (e = pe.getCurrentSlide());
		var t = e.data("type");
		return t
	}, this.isMouseInsideSlideImage = function (e) {
		var t = pe.getSlideImage(),
			i = we.getMousePosition(e);
		void 0 === i.pageX && (i = _e.getLastMousePos());
		var n = we.getMouseElementPoint(i, t),
			r = we.getElementSize(t);
		return isMouseInside = we.isPointInsideElement(n, r), isMouseInside
	}, this.isCurrentSlideType = function (e) {
		var t = pe.getSlideType();
		return t == e ? !0 : !1
	}, this.isCurrentSlideLoadingImage = function () {
		var e = pe.getCurrentSlide(),
			t = e.data("isLoading");
		return t === !0 ? !0 : !1
	}, this.setItem = function (e, t, i) {
		var n = pe.getSlidesReference(),
			r = n.objCurrentSlide.data("index"),
			o = e.index;
		if (o == r) return !0;
		var a = void 0 == r;
		if (a) f(n.objCurrentSlide, e), pe.placeNabourItems();
		else {
			var s = "left";
			me.getNumItems();
			"next" == i ? s = "left" : "prev" == i || r > o ? s = "right" : r > o && (s = "right"), E(s, e, t)
		}
	}, this.placeNabourItems = function () {
		var e = pe.getSlidesReference(),
			t = e.objCurrentSlide.data("index"),
			i = me.getPrevItem(t),
			n = me.getNextItem(t);
		f(e.objNextSlide, n), f(e.objPrevSlide, i), l()
	}, this.________EXTERNAL_API___________ = function () {}, this.stopSlideAction = function (e, t) {
		e || (e = pe.getCurrentSlide()), t === !0 ? Ie.pause() : Ie.hide()
	}, this.startSlideAction = function (e) {
		e || (e = pe.getCurrentSlide());
		var t = ee(e);
		if ("image" == t.type) return !0;
		switch (1 == Se.slider_video_constantsize && w(), I(), Ie.show(), t.type) {
			case "youtube":
				Ie.playYoutube(t.videoid);
				break;
			case "vimeo":
				Ie.playVimeo(t.videoid);
				break;
			case "html5video":
				Ie.playHtml5Video(t.videoogv, t.videowebm, t.videomp4, t.urlImage);
				break;
			case "soundcloud":
				Ie.playSoundCloud(t.trackid);
				break;
			case "wistia":
				Ie.playWistia(t.videoid)
		}
	}, this.getScaleMode = function (e) {
		if (!e) var e = pe.getCurrentSlide();
		var t = pe.getSlideType(e);
		return "image" != t ? Se.slider_scale_mode_media : Se.slider_scale_mode == Se.slider_scale_mode_fullscreen ? Se.slider_scale_mode : 1 == me.isFullScreen() ? Se.slider_scale_mode_fullscreen : Se.slider_scale_mode
	}, this.getObjects = function () {
		var e = {
			g_objSlider: re,
			g_objInner: oe,
			g_options: Se,
			g_objZoomSlider: ge
		};
		return e
	}, this.getObjZoom = function () {
		return ge
	}, this.getOptions = function () {
		return Se
	}, this.getElement = function () {
		return re
	}, this.getVideoObject = function () {
		return Ie
	}, this.isCurrentSlideImageFit = function () {
		var e = pe.getCurrentSlide();
		pe.getSlideType(e);
		y("image", e);
		var t = pe.getSlideImage(e);
		if (0 == t.length) return !1;
		var i = we.isImageFitParent(t);
		return i
	}, this.isCurrentImageInPlace = function () {
		var e = pe.getSlideImage();
		if (0 == e.length) return !1;
		var t = pe.getScaleMode(),
			i = pe.getObjImagePadding(),
			n = ee(),
			r = e.parent(),
			o = we.getImageInsideParentData(r, n.imageWidth, n.imageHeight, t, i),
			a = we.getElementSize(e),
			s = !1;
		return o.imageWidth == a.width && (s = !0), s
	}, this.isSlideActionActive = function () {
		return Ie.isVisible()
	}, this.isSwiping = function () {
		if (!_e) return !1;
		var e = _e.isTouchActive();
		return e
	}, this.isPreloading = function () {
		var e = J();
		return e.is(":visible") ? !0 : !1
	}, this.setOptions = function (e) {
		he && (e = we.convertCustomPrefixOptions(e, he, "slider")), Se = jQuery.extend(Se, e)
	}, this.setSize = function (e, t) {
		if (0 > e || 0 > t) return !0;
		var i = {};
		i.width = e + "px", i.height = t + "px", re.css(i);
		var n = {};
		n.height = t + "px", n.top = "0px", n.left = "0px", oe.css(n);
		var r = {};
		r.height = t + "px", r.width = e + "px", ae.css(r), se.css(r), le.css(r);
		var o = e - Se.slider_item_padding_left - Se.slider_item_padding_right,
			s = t - Se.slider_item_padding_top - Se.slider_item_padding_bottom,
			d = {};
		d.width = o + "px", d.height = s + "px", d.top = Se.slider_item_padding_top + "px", d.left = Se.slider_item_padding_left + "px", re.find(".ug-item-wrapper").css(d), Te && Te.setSizeByParent(), a(), u(ae), u(se), u(le), l();
		var _ = pe.getSlideType();
		if ("image" != _ && 1 == Se.slider_video_constantsize) w();
		else {
			var g = e - Se.slider_video_padding_left - Se.slider_video_padding_right,
				c = t - Se.slider_video_padding_top - Se.slider_video_padding_bottom;
			Ie.setSize(g, c)
		}
		I()
	}, this.refreshSlideItems = function () {
		return 1 == pe.isAnimating() ? !0 : (u(ae), u(se), u(le), void l())
	}, this.isMouseOver = function () {
		return re.ismouseover()
	}, this.setPosition = function (e, t) {
		we.placeElement(re, e, t)
	}, this.zoomIn = function () {
		return ge ? void ge.zoomIn() : !0
	}, this.zoomOut = function () {
		return ge ? void ge.zoomOut() : !0
	}, this.zoomBack = function () {
		return ge ? void ge.zoomBack() : !0
	}
}

function UGTextPanel() {
	function e(e, t) {
		if (!t) var t = v.textpanel_padding_top;
		var i = t;
		if (d) {
			var n = i;
			f.placeElement(d, 0, n);
			var o = d.is(":visible");
			if (1 == o) {
				var a = f.getElementSize(d),
					i = a.bottom;
				i > 0 && (b.lastTitleBottom = i)
			} else {
				var i = 20;
				b.lastTitleBottom > 0 && (i = b.lastTitleBottom)
			}
		}
		var s = "";
		if (_ && (s = jQuery.trim(_.text())), "" != s) {
			var l = i;
			d && (l += v.textpanel_padding_title_description), f.placeElement(_, 0, l);
			var u = jQuery(_).is(":visible");
			if (1 == u) {
				var g = f.getElementSize(_);
				i = g.bottom, g.height > 0 && (b.lastDescHeight = g.height)
			} else {
				var c = 16;
				b.lastDescHeight > 0 && (c = b.lastDescHeight), i = l + c
			}
		}
		if (!v.textpanel_height && 1 == b.setInternalHeight) {
			var h = i + v.textpanel_padding_bottom;
			r(h, e)
		}
	}

	function t() {
		var e = 0;
		if (d && (e += d.outerHeight()), _) {
			var t = "";
			_ && (t = jQuery.trim(_.text())), "" != t && (d && (e += v.textpanel_padding_title_description), e += _.outerHeight())
		}
		return e
	}

	function i() {
		var i = t(),
			n = (c.height() - i) / 2;
		e(!1, n)
	}

	function n() {
		var i = t(),
			n = c.height() - i - v.textpanel_padding_bottom;
		e(!1, n)
	}

	function r(e, t) {
		if (!t) var t = !1;
		if (1 == t) {
			if (g) {
				var i = g.height();
				e > i && g.height(e)
			}
			var n = {
				height: e + "px"
			};
			l.add(c).animate(n, v.textpanel_fade_duration)
		} else g && g.height(e), l.add(c).height(e)
	}

	function o() {
		if (1 == v.textpanel_enable_bg) {
			g = l.children(".ug-textpanel-bg"), g.fadeTo(0, v.textpanel_bg_opacity);
			var e = {
				"background-color": v.textpanel_bg_color
			};
			e = jQuery.extend(e, v.textpanel_bg_css), g.css(e)
		}
		if (1 == v.textpanel_enable_title) {
			d = c.children(".ug-textpanel-title");
			var t = {};
			null !== v.textpanel_title_color && (t.color = v.textpanel_title_color), null !== v.textpanel_title_font_family && (t["font-family"] = v.textpanel_title_font_family), null !== v.textpanel_title_text_align && (t["text-align"] = v.textpanel_title_text_align), null !== v.textpanel_title_font_size && (t["font-size"] = v.textpanel_title_font_size + "px"), null !== v.textpanel_title_bold && (v.textpanel_title_bold === !0 ? t["font-weight"] = "bold" : t["font-weight"] = "normal"), v.textpanel_css_title && (t = jQuery.extend(t, v.textpanel_css_title)), d.css(t)
		}
		if (1 == v.textpanel_enable_description) {
			_ = c.children(".ug-textpanel-description");
			var i = {};
			null !== v.textpanel_desc_color && (i.color = v.textpanel_desc_color), null !== v.textpanel_desc_font_family && (i["font-family"] = v.textpanel_desc_font_family), null !== v.textpanel_desc_text_align && (i["text-align"] = v.textpanel_desc_text_align), null !== v.textpanel_desc_font_size && (i["font-size"] = v.textpanel_desc_font_size + "px"), null !== v.textpanel_desc_bold && (v.textpanel_desc_bold === !0 ? i["font-weight"] = "bold" : i["font-weight"] = "normal"), v.textpanel_css_title && (i = jQuery.extend(i, v.textpanel_css_description)), _.css(i)
		}
	}

	function a() {
		var e = h.getSelectedItem();
		p.setText(e.title, e.description)
	}

	function s() {
		jQuery(h).on(h.events.ITEM_CHANGE, a)
	}
	var l, u, d, _, g, c, h, p = this,
		f = new UGFunctions,
		m = "",
		v = {
			textpanel_align: "bottom",
			textpanel_margin: 0,
			textpanel_text_valign: "middle",
			textpanel_padding_top: 10,
			textpanel_padding_bottom: 10,
			textpanel_height: null,
			textpanel_padding_title_description: 5,
			textpanel_padding_right: 11,
			textpanel_padding_left: 11,
			textpanel_fade_duration: 200,
			textpanel_enable_title: !0,
			textpanel_enable_description: !0,
			textpanel_enable_bg: !0,
			textpanel_bg_color: "#000000",
			textpanel_bg_opacity: .4,
			textpanel_title_color: null,
			textpanel_title_font_family: null,
			textpanel_title_text_align: null,
			textpanel_title_font_size: null,
			textpanel_title_bold: null,
			textpanel_css_title: {},
			textpanel_desc_color: null,
			textpanel_desc_font_family: null,
			textpanel_desc_text_align: null,
			textpanel_desc_font_size: null,
			textpanel_desc_bold: null,
			textpanel_css_description: {},
			textpanel_desc_style_as_title: !1,
			textpanel_bg_css: {}
		},
		b = {
			isFirstTime: !0,
			setInternalHeight: !0,
			lastTitleBottom: 0,
			lastDescHeight: 0
		};
	this.positionElements = function (t) {
		if (!v.textpanel_height || "top" == v.textpanel_text_valign) return e(t), !1;
		switch (v.textpanel_text_valign) {
			default:
				case "top":
				e(!1);
			break;
			case "bottom":
					n();
				break;
			case "center":
					case "middle":
					i()
		}
	}, this.init = function (e, t, i) {
		if (h = e, i && (m = i, t = f.convertCustomPrefixOptions(t, m, "textpanel")), t && (v = jQuery.extend(v, t)), 0 == v.textpanel_enable_title && 0 == v.textpanel_enable_description) throw new Error("Textpanel Error: The title or description must be enabled");
		v.textpanel_height && v.textpanel_height < 0 && (v.textpanel_height = null), 1 == v.textpanel_desc_style_as_title && (v.textpanel_desc_color || (v.textpanel_desc_color = v.textpanel_title_color), v.textpanel_desc_bold || (v.textpanel_desc_bold = v.textpanel_title_bold), v.textpanel_desc_font_family || (v.textpanel_desc_font_family = v.textpanel_title_font_family), v.textpanel_desc_font_size || (v.textpanel_desc_font_size = v.textpanel_title_font_size), v.textpanel_desc_text_align || (v.textpanel_desc_text_align = v.textpanel_title_text_align))
	}, this.appendHTML = function (e, t) {
		u = e, t = t ? " " + t : "";
		var i = "<div class='ug-textpanel" + t + "'>";
		1 == v.textpanel_enable_bg && (i += "<div class='ug-textpanel-bg" + t + "'></div>"), i += "<div class='ug-textpanel-textwrapper" + t + "'>", 1 == v.textpanel_enable_title && (i += "<div class='ug-textpanel-title" + t + "'></div>"), 1 == v.textpanel_enable_description && (i += "<div class='ug-textpanel-description" + t + "'></div>"), i += "</div></div>", e.append(i), l = e.children(".ug-textpanel"), c = l.children(".ug-textpanel-textwrapper"), o()
	}, this.destroy = function () {
		jQuery(h).off(h.events.ITEM_CHANGE)
	}, this.run = function () {
		p.setSizeByParent(), s()
	}, this.setPanelSize = function (e, t) {
		if (b.setInternalHeight = !0, t) b.setInternalHeight = !1;
		else var t = 80;
		v.textpanel_height && (t = v.textpanel_height), l.width(e), l.height(t), g && (g.width(e), g.height(t));
		var i = e - v.textpanel_padding_left - v.textpanel_padding_right,
			n = v.textpanel_padding_left;
		f.setElementSizeAndPosition(c, n, 0, i, t), d && d.width(i), _ && _.width(i), 0 == b.isFirstTime && p.positionElements(!1)
	}, this.setSizeByParent = function () {
		var e = f.getElementSize(u);
		p.setPanelSize(e.width)
	}, this.setTextPlain = function (e, t) {
		d && d.html(e), _ && _.html(t)
	}, this.setText = function (e, t) {
		1 == b.isFirstTime ? (p.setTextPlain(e, t), b.isFirstTime = !1, p.positionElements(!1)) : c.stop().fadeTo(v.textpanel_fade_duration, 0, function () {
			p.setTextPlain(e, t), p.positionElements(!0), jQuery(this).fadeTo(v.textpanel_fade_duration, 1)
		})
	}, this.positionPanel = function (e, t) {
		var i = {};
		if (void 0 !== e && null !== e) i.top = e, i.bottom = "auto";
		else switch (v.textpanel_align) {
			case "top":
				i.top = v.textpanel_margin + "px";
				break;
			case "bottom":
				i.top = "auto", i.bottom = v.textpanel_margin + "px";
				break;
			case "middle":
				i.top = f.getElementRelativePos(l, "middle", v.textpanel_margin)
		}
		void 0 !== t && null !== t && (i.left = t), l.css(i)
	}, this.setOptions = function (e) {
		m && (e = f.convertCustomPrefixOptions(e, m, "textpanel")), v = jQuery.extend(v, e)
	}, this.getElement = function () {
		return l
	}, this.getSize = function () {
		var e = f.getElementSize(l);
		return e
	}, this.refresh = function (e, t, i, n) {
		o(), i ? p.setPanelSize(i, n) : p.setSizeByParent(), p.positionElements(!1), t !== !0 && p.positionPanel(), e === !0 && p.show()
	}, this.hide = function () {
		l.hide()
	}, this.show = function () {
		l.show()
	}, this.getOptions = function () {
		return v
	}, this.getOption = function (e) {
		return 0 == v.hasOwnProperty(e) ? null : v[e]
	}
}

function UGZoomButtonsPanel() {
	function e(e) {
		return e ? e.hasClass("ug-zoompanel-button-disabled") ? !0 : !1 : !0
	}

	function t(e) {
		e && e.addClass("ug-zoompanel-button-disabled")
	}

	function i(e) {
		e && e.removeClass("ug-zoompanel-button-disabled")
	}

	function n() {
		if (0 == d.isCurrentSlideType("image")) return !0;
		var n = d.isCurrentSlideImageFit();
		1 == n ? 0 == e(s) && (t(s), t(l)) : 1 == e(s) && (i(s), i(l))
	}
	var r, o, a, s, l, u = this,
		d = new UGSlider,
		_ = new UGFunctions,
		g = {
			slider_zoompanel_skin: ""
		};
	this.init = function (e, t) {
		d = e, t && (g = jQuery.extend(g, t))
	}, this.appendHTML = function (e) {
		o = e;
		var t = "<div class='ug-slider-control ug-zoompanel ug-skin-" + g.slider_zoompanel_skin + "'>";
		t += "<div class='ug-zoompanel-button ug-zoompanel-plus'></div>", t += "<div class='ug-zoompanel-button ug-zoompanel-minus ug-zoompanel-button-disabled'></div>", t += "<div class='ug-zoompanel-button ug-zoompanel-return ug-zoompanel-button-disabled'></div>", t += "</div>", e.append(t), r = e.children(".ug-zoompanel"), a = r.children(".ug-zoompanel-plus"), s = r.children(".ug-zoompanel-minus"), l = r.children(".ug-zoompanel-return")
	}, this.setObjects = function (e, t, i) {
		a = e, s = t, l = i, s && s.addClass("ug-zoompanel-button-disabled"), l && l.addClass("ug-zoompanel-button-disabled")
	}, this.getElement = function () {
		return r
	}, u.initEvents = function () {
		_.addClassOnHover(a, "ug-button-hover"), _.addClassOnHover(s, "ug-button-hover"), _.addClassOnHover(l, "ug-button-hover"), _.setButtonOnClick(a, function () {
			return 1 == e(a) ? !0 : void d.zoomIn()
		}), _.setButtonOnClick(s, function () {
			return 1 == e(s) ? !0 : void d.zoomOut()
		}), _.setButtonOnClick(l, function () {
			return 1 == e(l) ? !0 : void d.zoomBack()
		}), jQuery(d).on(d.events.ZOOM_CHANGE, n), jQuery(d).on(d.events.ITEM_CHANGED, n)
	}
}

function UGBullets() {
	function e() {
		var e = "",
			t = ""; - 1 != h.bullets_space_between && (t = " style='margin-left:" + h.bullets_space_between + "px'");
		for (var i = 0; u > i; i++) e += 0 == i ? "<div class='ug-bullet'></div>" : "<div class='ug-bullet'" + t + "></div>";
		if (o.html(e), !s) {
			var n = o.find(".ug-bullet:first-child");
			n.length && (s = n.width())
		}
	}

	function t(e) {
		if (1 == l.isActive(e)) return !0;
		var t = e.index();
		jQuery(l).trigger(l.events.BULLET_CLICK, t)
	}

	function i() {
		var e = o.children(".ug-bullet");
		g.setButtonOnClick(e, t), e.on("mousedown mouseup", function (e) {
			return !1
		})
	}

	function n(e) {
		if (0 > e || e >= u) throw new Error("wrong bullet index: " + e)
	}

	function r() {
		if (1 == c.isInited) return !0;
		throw new Error("The bullets are not inited!")
	}
	var o, a, s, l = this,
		u = 0,
		d = new UniteGalleryMain,
		_ = -1,
		g = new UGFunctions,
		c = {
			isInited: !1
		},
		h = {
			bullets_skin: "",
			bullets_addclass: "",
			bullets_space_between: -1
		};
	this.events = {
		BULLET_CLICK: "bullet_click"
	}, this.init = function (e, t, i) {
		d = e, u = i ? i : d.getNumItems(), c.isInited = !0, h = jQuery.extend(h, t), "" == h.bullets_skin && (h.bullets_skin = h.gallery_skin)
	}, this.getBulletsWidth = function () {
		if (0 == u) return 0;
		if (!s) return 0;
		var e = u * s + (u - 1) * h.bullets_space_between;
		return e
	}, this.appendHTML = function (t) {
		a = t, r();
		var n = "";
		"" != h.bullets_addclass && (n = " " + h.bullets_addclass);
		var s = "<div class='ug-slider-control ug-bullets ug-skin-" + h.bullets_skin + n + "'>";
		s += "</div>", o = jQuery(s), t.append(o), e(), i()
	}, this.updateNumBullets = function (t) {
		u = t, e(), i()
	}, this.getElement = function () {
		return o
	}, this.setActive = function (e) {
		r(), n(e);
		var t = o.children(".ug-bullet");
		t.removeClass("ug-bullet-active");
		var i = jQuery(t[e]);
		i.addClass("ug-bullet-active"), _ = e
	}, this.isActive = function (e) {
		if (n(e), "number" != typeof e) var t = e;
		else var t = o.children(".ug-bullet")[e];
		return t.hasClass("ug-bullet-active") ? !0 : !1
	}, this.getNumBullets = function () {
		return u
	}
}

function UGProgressBar() {
	var e, t, i = this,
		n = 0,
		r = new UGFunctions,
		o = {
			slider_progressbar_color: "#ffffff",
			slider_progressbar_opacity: .6,
			slider_progressbar_line_width: 5
		};
	this.put = function (i, n) {
		n && (o = jQuery.extend(o, n)), i.append("<div class='ug-progress-bar'><div class='ug-progress-bar-inner'></div></div>"), e = i.children(".ug-progress-bar"), t = e.children(".ug-progress-bar-inner"), t.css("background-color", o.slider_progressbar_color), e.height(o.slider_progressbar_line_width), t.height(o.slider_progressbar_line_width), t.width("0%");
		var r = o.slider_progressbar_opacity,
			a = t[0];
		a.style.opacity = r, a.style.filter = "alpha(opacity=" + 100 * r + ")"
	}, this.putHidden = function (t, n) {
		i.put(t, n), e.hide()
	}, this.getElement = function () {
		return e
	}, this.setSize = function (n) {
		e.width(n), t.width(n), i.draw()
	}, this.setPosition = function (t, i, n, o) {
		r.placeElement(e, t, i, n, o)
	}, this.draw = function () {
		var e = 100 * n;
		t.width(e + "%")
	}, this.setProgress = function (e) {
		n = r.normalizePercent(e), i.draw()
	}, this.getType = function () {
		return "bar"
	}
}

function UGProgressPie() {
	function e(e) {
		if (!e) var e = 0;
		var t = Math.min(a.slider_progresspie_width, a.slider_progresspie_height) / 2,
			n = i[0].getContext("2d");
		0 == r && (r = !0, n.rotate(1.5 * Math.PI), n.translate(-2 * t, 0)), n.clearRect(0, 0, a.slider_progresspie_width, a.slider_progresspie_height);
		var o = a.slider_progresspie_width / 2,
			s = a.slider_progresspie_height / 2,
			l = 0,
			u = e * Math.PI * 2;
		if (1 == a.slider_progresspie_type_fill) n.beginPath(), n.moveTo(o, s), n.arc(o, s, t, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color1, n.fill(), n.closePath();
		else {
			n.globalCompositeOperation = "source-over", n.beginPath(), n.moveTo(o, s), n.arc(o, s, t, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color1, n.fill(), n.closePath(), n.globalCompositeOperation = "destination-out";
			var d = t - a.slider_progresspie_stroke_width;
			n.beginPath(), n.moveTo(o, s), n.arc(o, s, d, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color1, n.fill(), n.closePath()
		}
		1 == a.slider_progresspie_type_fill && (l = u, u = 2 * Math.PI, n.beginPath(), n.arc(o, s, t, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color2, n.fill(), n.closePath())
	}
	var t, i, n = this,
		r = !1,
		o = new UGFunctions,
		a = {
			slider_progresspie_type_fill: !1,
			slider_progresspie_color1: "#B5B5B5",
			slider_progresspie_color2: "#E5E5E5",
			slider_progresspie_stroke_width: 6,
			slider_progresspie_width: 30,
			slider_progresspie_height: 30
		};
	this.put = function (e, t) {
		t && (a = jQuery.extend(a, t)), e.append("<canvas class='ug-canvas-pie' width='" + a.slider_progresspie_width + "' height='" + a.slider_progresspie_height + "'></canvas>"), i = e.children(".ug-canvas-pie")
	}, this.putHidden = function (t, r) {
		n.put(t, r), e(.1), i.hide()
	}, this.getElement = function () {
		return i
	}, this.setPosition = function (e, t) {
		o.placeElement(i, e, t)
	}, this.getSize = function () {
		var e = {
			width: a.slider_progresspie_width,
			height: a.slider_progresspie_height
		};
		return e
	}, this.setProgress = function (i) {
		i = o.normalizePercent(i), t = i, e(i)
	}, this.getType = function () {
		return "pie"
	}
}

function UGTouchSliderControl() {
	function e(e) {
		if (!e) var e = m.getSlidesReference();
		var t = v.getElementSize(e.objCurrentSlide),
			i = -t.left,
			n = v.getElementSize(h),
			r = i - n.left;
		return r
	}

	function t() {
		var t = m.getSlidesReference(),
			i = e(t),
			n = Math.round(3 * t.objCurrentSlide.width() / 8);
		if (Math.abs(i) >= n) return !0;
		var r = Math.abs(b.lastMouseX - b.startMouseX);
		Math.abs(b.lastMouseY - b.startMouseY);
		if (20 > r) return !1;
		var o = jQuery.now(),
			a = o - b.startTime;
		return 500 > a ? !0 : !1
	}

	function i(e) {
		if (1 == m.isInnerInPlace()) return !1;
		if (p.trigger(m.events.BEFORE_RETURN), !e) var e = m.getSlidesReference();
		var t = v.getElementSize(e.objCurrentSlide),
			i = -t.left;
		h.animate({
			left: i + "px"
		}, {
			duration: f.slider_transition_return_speed,
			easing: f.slider_transition_continuedrag_easing,
			queue: !1,
			progress: function (e, t, n) {
				if (1 == b.isDragVideo) {
					var r = v.getElementSize(h),
						o = r.left,
						a = o - i,
						s = b.videoStartX + a;
					b.videoObject.css("left", s)
				}
			},
			complete: function () {
				p.trigger(m.events.AFTER_RETURN)
			}
		})
	}

	function n(e) {
		m.getVideoObject().hide(), m.switchSlideNums(e), m.placeNabourItems()
	}

	function r() {
		var t = m.getSlidesReference(),
			r = e(t);
		if (0 == r) return !1;
		var o = r > 0 ? "left" : "right",
			a = !1;
		switch (o) {
			case "right":
				if (m.isSlideHasItem(t.objPrevSlide)) var s = v.getElementSize(t.objPrevSlide),
					l = -s.left;
				else a = !0;
				break;
			case "left":
				if (m.isSlideHasItem(t.objNextSlide)) var u = v.getElementSize(t.objNextSlide),
					l = -u.left;
				else a = !0
		}
		1 == a ? i(t) : h.stop().animate({
			left: l + "px"
		}, {
			duration: f.slider_transition_continuedrag_speed,
			easing: f.slider_transition_continuedrag_easing,
			queue: !1,
			progress: function () {
				if (1 == b.isDragVideo) {
					var e = v.getElementSize(h),
						t = e.left,
						i = t - b.startPosx,
						n = b.videoStartX + i;
					b.videoObject.css("left", n)
				}
			},
			always: function () {
				n(o), p.trigger(m.events.AFTER_DRAG_CHANGE)
			}
		})
	}

	function o(e) {
		var t = b.lastMouseX - b.startMouseX;
		if (0 == t) return !0;
		var i = 0 > t ? "left" : "right",
			n = m.getObjZoom();
		if (n) {
			var r = n.isPanEnabled(e, i);
			if (1 == r) return b.isInitDataValid = !1, !0;
			if (0 == b.isInitDataValid) return a(e), !0
		}
		var o = b.startPosx + t;
		if (t > 0 && o > 0) o /= 3;
		else if (0 > t) {
			var s = o + h.width(),
				l = c.width();
			l > s && (o = b.startPosx + t / 3)
		}
		if (0 == b.isDragging && (b.isDragging = !0, p.trigger(m.events.START_DRAG)), h.css("left", o + "px"), 1 == b.isDragVideo) {
			var u = o - b.startPosx,
				d = b.videoStartX + u;
			b.videoObject.css("left", d)
		}
	}

	function a(e) {
		var t = v.getMousePosition(e);
		b.startMouseX = t.pageX, b.startMouseY = t.pageY, b.lastMouseX = b.startMouseX, b.lastMouseY = b.startMouseY, b.startTime = jQuery.now();
		var i = v.getArrTouches(e);
		b.startArrTouches = v.getArrTouchPositions(i);
		var n = v.getElementSize(h);
		b.startPosx = n.left, b.isInitDataValid = !0, b.isDragVideo = !1, v.storeEventData(e, b.storedEventID)
	}

	function s(e) {
		b.touch_active = !1
	}

	function l(e, t) {
		b.touch_active = !0, a(t)
	}

	function u(e) {
		e.preventDefault(), b.isDragging = !1, 1 == m.isAnimating() && h.stop(!0, !0);
		var t = v.getArrTouches(e);
		return t.length > 1 ? (1 == b.touch_active && s("1"), !0) : 1 == b.touch_active ? !0 : void l("1", e)
	}

	function d(e) {
		if (0 == b.touch_active) return !0;
		if (0 == e.buttons) return s("2"), r(), !0;
		v.updateStoredEventData(e, b.storedEventID), e.preventDefault();
		var t = v.getMousePosition(e);
		b.lastMouseX = t.pageX, b.lastMouseY = t.pageY;
		var i = null;
		1 == f.slider_vertical_scroll_ondrag && (i = v.handleScrollTop(b.storedEventID)), "vert" !== i && o(e)
	}

	function _(e) {
		var n = v.getArrTouches(e),
			o = n.length,
			a = m.isInnerInPlace();
		if (1 == a && 0 == b.touch_active && 0 == o) return !0;
		if (0 == o && 1 == b.touch_active) {
			s("3");
			var u = !1,
				d = v.wasVerticalScroll(b.storedEventID);
			0 == d && (u = t()), 1 == u ? r() : i()
		} else 1 == o && 0 == b.touch_active && l("2", e)
	}

	function g() {
		c.bind("mousedown touchstart", u), jQuery("body").bind("mousemove touchmove", d), jQuery(window).add("body").bind("mouseup touchend", _)
	}
	var c, h, p, f, m = new UGSlider,
		v = new UGFunctions,
		f = {
			slider_transition_continuedrag_speed: 250,
			slider_transition_continuedrag_easing: "linear",
			slider_transition_return_speed: 300,
			slider_transition_return_easing: "easeInOutQuad"
		},
		b = {
			touch_active: !1,
			startMouseX: 0,
			startMouseY: 0,
			lastMouseX: 0,
			lastMouseY: 0,
			startPosx: 0,
			startTime: 0,
			isInitDataValid: !1,
			slides: null,
			lastNumTouches: 0,
			isDragging: !1,
			storedEventID: "touchSlider",
			videoStartX: 0,
			isDragVideo: !1,
			videoObject: null
		};
	this.isTapEventOccured = function (t) {
		var i = v.getArrTouches(t),
			n = i.length;
		if (0 != n || 0 != b.lastNumTouches) return b.lastNumTouches = n, !1;
		b.lastNumTouches = n;
		var r = m.getSlidesReference(),
			o = (e(r), Math.abs(b.lastMouseX - b.startMouseX)),
			a = Math.abs(b.lastMouseY - b.startMouseY),
			s = jQuery.now(),
			l = s - b.startTime;
		return 20 > o && 50 > a && 500 > l ? !0 : !1
	}, this.init = function (e, t) {
		m = e, p = jQuery(m), g_objects = e.getObjects(), c = g_objects.g_objSlider, h = g_objects.g_objInner, f = jQuery.extend(f, t), g()
	}, this.getLastMousePos = function () {
		var e = {
			pageX: b.lastMouseX,
			pageY: b.lastMouseY
		};
		return e
	}, this.isTouchActive = function () {
		return b.touch_active
	}
}

function UGZoomSliderControl() {
	function e(e, t) {
		E = e, w = jQuery(E), g_objects = e.getObjects(), y = g_objects.g_objSlider, I = g_objects.g_objInner, S = jQuery.extend(S, t), b()
	}

	function t() {
		var e = E.getScaleMode();
		return "down" != e && (e = "fit"), e
	}

	function i() {
		var e = jQuery.now(),
			i = e - P.storeImageLastTime;
		if (20 > i) return !1;
		var n = E.getSlidesReference();
		if (P.objSlide = n.objCurrentSlide, P.objImage = n.objCurrentSlide.find("img"), 0 == P.objImage.length) return !1;
		P.objImageSize = T.getElementSize(P.objImage), P.objParent = P.objImage.parent(), P.objParentSize = T.getElementSize(P.objParent);
		var r = t();
		objPadding = E.getObjImagePadding(), P.objFitImageSize = T.getImageInsideParentDataByImage(P.objImage, r, objPadding);
		var e = jQuery.now();
		return P.storeImageLastTime = e, !0
	}

	function n(e, i) {
		var n = E.getSlidesReference(),
			r = n.objCurrentSlide.find("img"),
			o = t();
		w.trigger(E.events.ZOOM_START);
		var a = !0,
			s = E.getObjImagePadding();
		if ("back" == e) {
			var l = T.getImageOriginalSize(r);
			T.scaleImageFitParent(r, l.width, l.height, o, s)
		} else {
			var u = "in" == e ? !0 : !1;
			a = T.zoomImageInsideParent(r, u, S.slider_zoom_step, i, o, S.slider_zoom_max_ratio, s)
		}
		1 == a && (w.trigger(E.events.ZOOMING), w.trigger(E.events.ZOOM_CHANGE), w.trigger(E.events.ZOOM_END))
	}

	function r(e, t, i) {
		var n = T.getArrTouches(t);
		if (i === !0) {
			if (1 != n.length) return !1
		} else if (n.length > 1) return !1;
		return T.isElementBiggerThenParent(e) ? !0 : !1
	}

	function o(e) {
		var t = T.getMousePosition(e);
		P.startMouseX = t.pageX, P.startMouseY = t.pageY, P.lastMouseX = P.startMouseX, P.lastMouseY = P.startMouseY, P.startImageX = P.objImageSize.left, P.startImageY = P.objImageSize.top, P.panXActive = P.objImageSize.width > P.objParentSize.width,
			P.panYActive = P.objImageSize.height > P.objParentSize.height
	}

	function a(e) {
		P.isPanActive = !0, o(e)
	}

	function s(e) {
		if (void 0 == P.objImage || 0 == P.objImage.length) return !0;
		var t = T.getMousePosition(e),
			i = (t.pageX - P.startMouseX, t.pageY - P.startMouseY, t.pageX - P.lastMouseX),
			n = t.pageY - P.lastMouseY,
			r = 0 > i ? "left" : "right",
			o = 0 > n ? "up" : "down";
		P.lastMouseX = t.pageX, P.lastMouseY = t.pageY;
		var a = T.getElementSize(P.objImage);
		0 == P.panYActive ? n = 0 : "down" == o && a.top > 0 ? n /= 3 : "up" == o && a.bottom < P.objParentSize.height && (n /= 3), 0 == P.panXActive || 0 == E.isInnerInPlace() ? i = 0 : "right" == r && a.left > 0 ? i /= 3 : "left" == r && a.right < P.objParentSize.width && (i /= 3);
		var s = a.left + i,
			l = a.top + n;
		T.placeElement(P.objImage, s, l)
	}

	function l() {
		var e = !1,
			t = !1,
			i = 0,
			n = 0,
			r = T.getElementSize(P.objImage),
			o = E.getObjImagePadding(),
			a = T.getElementCenterPosition(P.objImage, o);
		P.panXActive = P.objImageSize.width > P.objParentSize.width, P.panYActive = P.objImageSize.height > P.objParentSize.height, 1 == P.panYActive ? r.top > 0 ? (n = 0, t = !0) : r.bottom < P.objParentSize.height && (n = P.objParentSize.height - r.height, t = !0) : r.top != a.top && (t = !0, n = a.top), 1 == P.panXActive ? r.left > 0 ? (i = 0, e = !0) : r.right < P.objParentSize.width && (i = P.objParentSize.width - r.width, e = !0) : r.left != a.left && (e = !0, i = a.left);
		var s = {};
		1 == t && (s.top = n + "px"), 1 == e && (s.left = i + "px"), (1 == t || 1 == e) && P.objImage.animate(s, {
			duration: S.slider_zoom_return_pan_duration,
			easing: S.slider_zoom_return_pan_easing,
			queue: !1
		})
	}

	function u() {
		return P.objImage && P.objImage.is(":animated") ? !0 : !1
	}

	function d(e) {
		P.isZoomActive = !0, P.startDistance = T.getDistance(e[0].pageX, e[0].pageY, e[1].pageX, e[1].pageY), 0 == P.startDistance && (P.startDistance = 1), P.startMiddlePoint = T.getMiddlePoint(e[0].pageX, e[0].pageY, e[1].pageX, e[1].pageY), P.objImageSize = T.getElementSize(P.objImage), P.startImageX = P.objImageSize.left, P.startImageY = P.objImageSize.top, P.imageOrientPoint = T.getElementLocalPoint(P.startMiddlePoint, P.objImage);
		var t = T.isPointInsideElement(P.imageOrientPoint, P.objImageSize);
		0 == t && (P.imageOrientPoint = T.getElementCenterPoint(P.objImage)), w.trigger(E.events.ZOOM_START)
	}

	function _(e) {
		if (0 == P.isZoomActive) return !1;
		var t = T.getArrTouches(e);
		2 != t.length && (P.isZoomActive = !1, w.trigger(E.events.ZOOM_END))
	}

	function g(e) {
		if (1 == P.isZoomActive) return !0;
		var t = T.getArrTouches(e);
		return 2 != t.length ? !0 : void d(t)
	}

	function c(e) {
		var t = T.getArrTouches(e),
			i = T.getDistance(t[0].pageX, t[0].pageY, t[1].pageX, t[1].pageY),
			n = i / P.startDistance,
			r = T.getMiddlePoint(t[0].pageX, t[0].pageY, t[1].pageX, t[1].pageY),
			o = P.objImageSize.width * n,
			a = P.objImageSize.height * n,
			s = T.getImageOriginalSize(P.objImage),
			l = 1;
		if (s.width > 0 && (l = o / s.width), l > S.slider_zoom_max_ratio) return !0;
		panX = -(P.imageOrientPoint.x * n - P.imageOrientPoint.x), panY = -(P.imageOrientPoint.y * n - P.imageOrientPoint.y);
		var u = r.x - P.startMiddlePoint.x,
			d = r.y - P.startMiddlePoint.y,
			_ = P.startImageX + panX + u,
			g = P.startImageY + panY + d;
		T.setElementSizeAndPosition(P.objImage, _, g, o, a), w.trigger(E.events.ZOOMING), w.trigger(E.events.ZOOM_CHANGE)
	}

	function h() {
		if (void 0 == P.objImage || 0 == P.objImage.length) return !0;
		var e = T.getElementSize(P.objImage);
		if (e.width < P.objFitImageSize.imageWidth) {
			P.objImage.css({
				position: "absolute",
				margin: "none"
			});
			var t = {
				top: P.objFitImageSize.imageTop + "px",
				left: P.objFitImageSize.imageLeft + "px",
				width: P.objFitImageSize.imageWidth + "px",
				height: P.objFitImageSize.imageHeight + "px"
			};
			P.objImage.animate(t, {
				duration: S.slider_zoom_return_pan_duration,
				easing: S.slider_zoom_return_pan_easing,
				queue: !1
			})
		} else l()
	}

	function p(e) {
		if (0 == E.isCurrentSlideType("image")) return !0;
		i();
		return void 0 == P.objImage || 0 == P.objImage.length ? !0 : (e.preventDefault(), 1 == u() && P.objImage.stop(!0), 1 == P.isZoomActive ? _(e) : g(e), void(1 == P.isZoomActive ? P.isPanActive = !1 : 1 == r(P.objImage, e) && 1 == P.isZoomedOnce && a(e)))
	}

	function f(e) {
		if (0 == E.isCurrentSlideType("image")) return !0;
		var t = jQuery(e.target);
		if (1 == t.data("ug-button")) return !1;
		i();
		if (void 0 == P.objImage || 0 == P.objImage.length) return !0;
		var n = P.isPanActive,
			o = P.isZoomActive;
		if (0 == E.isInnerInPlace()) return P.isZoomActive = !1, P.isPanActive = !1, !0;
		if (1 == P.isZoomActive ? _(e) : g(e), 1 == P.isZoomActive) P.isPanActive = !1;
		else {
			var s = r(P.objImage, e, !0);
			1 == P.isPanActive ? P.isPanActive = !1 : 1 == s && a(e)
		}(n || o) && 0 == P.isZoomActive && 0 == P.isPanActive && h()
	}

	function m(e) {
		return 0 == E.isCurrentSlideType("image") ? !0 : void(1 == P.isZoomActive ? c(e) : 1 == P.isPanActive && s(e))
	}

	function v(e, t, i, r) {
		if (0 == S.slider_zoom_mousewheel) return !0;
		if (0 == E.isCurrentSlideType("image")) return !0;
		e.preventDefault();
		var o = t > 0,
			a = T.getMousePosition(e),
			s = 1 == o ? "in" : "out";
		n(s, a)
	}

	function b() {
		y.on("mousewheel", v), y.bind("mousedown touchstart", p), jQuery("body").bind("mousemove touchmove", m), jQuery(window).add("body").bind("mouseup touchend", f), w.bind(E.events.BEFORE_RETURN, function () {
			h()
		}), w.bind(E.events.ITEM_CHANGED, function () {
			P.isZoomedOnce = !1
		}), w.bind(E.events.ZOOM_CHANGE, function () {
			P.isZoomedOnce = !0
		})
	}
	var y, I, w, E = new UGSlider,
		T = new UGFunctions,
		S = {
			slider_zoom_step: 1.2,
			slider_zoom_max_ratio: 6,
			slider_zoom_return_pan_duration: 400,
			slider_zoom_return_pan_easing: "easeOutCubic"
		},
		P = {
			isPanActive: !1,
			startMouseX: 0,
			startMouseY: 0,
			lastMouseX: 0,
			lastMouseY: 0,
			startImageX: 0,
			startImageY: 0,
			panXActive: !1,
			panYActive: !1,
			objImage: null,
			objImageSize: null,
			objParent: null,
			objParentSize: null,
			objSlide: null,
			storeImageLastTime: 0,
			isZoomActive: !1,
			startDistance: 0,
			startMiddlePoint: null,
			imageOrientPoint: null,
			objFitImageSize: null,
			isZoomedOnce: !1
		};
	this.________EXTERNAL_____________ = function () {}, this.isPanEnabled = function (e, t) {
		if (i(), void 0 == P.objImage || 0 == P.objImage.length) return !1;
		if (0 == P.isZoomedOnce) return !1;
		if (0 == r(P.objImage, e)) return !1;
		if (0 == E.isInnerInPlace()) return !1;
		if ("left" == t) {
			if (P.objImageSize.right <= P.objParentSize.width) return !1
		} else if (P.objImageSize.left >= 0) return !1;
		return !0
	}, this.init = function (t, i) {
		e(t, i)
	}, this.zoomIn = function () {
		n("in")
	}, this.zoomOut = function () {
		n("out")
	}, this.zoomBack = function () {
		n("back")
	}
}

function UGWistiaAPI() {
	function e() {
		return "undefined" != typeof Wistia
	}

	function t(e, t, n, o, a) {
		r = null, s = !1;
		var l = e + "_video",
			u = "<div id='" + l + "' class='wistia_embed' style='width:" + n + ";height:" + o + ";' data-video-width='" + n + "' data-video-height='" + o + "'>&nbsp;</div>";
		jQuery("#" + e).html(u), r = Wistia.embed(t, {
			version: "v1",
			videoWidth: n,
			videoHeight: o,
			container: l,
			autoPlay: a
		}), s = !0, i()
	}

	function i() {
		r.bind("play", function () {
			a.trigger(o.events.START_PLAYING)
		}), r.bind("pause", function () {
			a.trigger(o.events.STOP_PLAYING)
		}), r.bind("end", function () {
			a.trigger(o.events.STOP_PLAYING), a.trigger(o.events.VIDEO_ENDED)
		})
	}
	this.isAPILoaded = !1;
	var n, r, o = this,
		a = jQuery(this),
		s = !1;
	this.events = {
		START_PLAYING: "start_playing",
		STOP_PLAYING: "stop_playing",
		VIDEO_ENDED: "video_ended"
	}, this.loadAPI = function () {
		return 1 == g_ugWistiaAPI.isAPILoaded ? !0 : e() ? (g_ugWistiaAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("fast.wistia.com/assets/external/E-v1.js", !0), void(g_ugWistiaAPI.isAPILoaded = !0))
	}, this.doCommand = function (e) {
		if (null == r) return !1;
		if (0 == s) return !1;
		switch (e) {
			case "play":
				r.play();
				break;
			case "pause":
				r.pause()
		}
	}, this.pause = function () {
		o.doCommand("pause")
	}, this.play = function () {
		o.doCommand("play")
	}, this.putVideo = function (i, r, o, a, s) {
		return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function () {
			e() && (t(i, r, o, a, s), clearInterval(n))
		}, 500)))
	}, this.isPlayerReady = function () {
		return s && r ? !0 : !1
	}
}

function UGSoundCloudAPI() {
	function e() {
		return "undefined" != typeof SC
	}

	function t(e, t, n, a, s) {
		r = null, g_isPlayerReady = !1;
		var l = e + "_iframe",
			u = location.protocol + "//w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/" + t;
		u += "&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_artwork=true&show_comments=false&amp;show_playcount=true&amp;show_user=false&amp;hide_related=true&amp;visual=true&amp;start_track=0&amp;callback=true", u += s === !0 ? "&amp;auto_play=true" : "&amp;auto_play=false";
		var d = "<iframe id='" + l + "' src=" + u + " width='" + n + "' height='" + a + "' frameborder='0' scrolling='no' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
		jQuery("#" + e).html(d), r = SC.Widget(l), r.bind(SC.Widget.Events.READY, function () {
			r && (g_isPlayerReady = !0, i())
		}), o = e
	}

	function i() {
		r.bind(SC.Widget.Events.PLAY, function () {
			s.trigger(a.events.START_PLAYING)
		}), r.bind(SC.Widget.Events.PAUSE, function () {
			s.trigger(a.events.STOP_PLAYING)
		}), r.bind(SC.Widget.Events.FINISH, function () {
			s.trigger(a.events.STOP_PLAYING), s.trigger(a.events.VIDEO_ENDED)
		})
	}
	this.isAPILoaded = !1;
	var n, r, o, a = this,
		s = jQuery(this);
	this.events = {
		START_PLAYING: "start_playing",
		STOP_PLAYING: "stop_playing",
		VIDEO_ENDED: "video_ended"
	}, this.loadAPI = function () {
		return 1 == g_ugSoundCloudAPI.isAPILoaded ? !0 : e() ? (g_ugSoundCloudAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("w.soundcloud.com/player/api.js", !0), void(g_ugSoundCloudAPI.isAPILoaded = !0))
	}, this.putSound = function (i, r, o, a, s) {
		return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function () {
			e() && (t(i, r, o, a, s), clearInterval(n))
		}, 500)))
	}, this.doCommand = function (e) {
		if (null == r) return !1;
		if (0 == g_isPlayerReady) return !1;
		switch (e) {
			case "play":
				r.play();
				break;
			case "pause":
				r.pause()
		}
	}, this.pause = function () {
		a.doCommand("pause")
	}, this.play = function () {
		a.doCommand("play")
	}, this.destroy = function () {
		g_isPlayerReady = !1, r = null, o && (jQuery("#" + o).html(""), o = null)
	}
}

function UGHtml5MediaAPI() {
	function e() {
		return "undefined" != typeof mejs
	}

	function t(e, t, n, o, a) {
		r = null, g_isPlayerReady = !1;
		var s = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/flashmediaelement-cdn.swf",
			l = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/silverlightmediaelement.xap",
			u = e + "_video",
			d = "";
		a && a === !0 && (d = "autoplay='autoplay'");
		var _ = "";
		t.posterImage && (_ = "poster='" + t.posterImage + "'");
		var g = "<video id='" + u + "' width='" + n + "' height='" + o + "'  controls='controls' preload='none' " + d + " " + _ + ">";
		"" != t.mp4 && (g += "<source type='video/mp4' src='" + t.mp4 + "' />"), "" != t.webm && (g += "<source type='video/webm' src='" + t.webm + "' />"), "" != t.ogv && (g += "<source type='video/ogg' src='" + t.ogv + "' />"), g += "<object width='" + n + "' height='" + o + "' type='application/x-shockwave-flash' data='" + s + "'>", g += "<param name='movie' value='" + s + "' />", g += "<param name='flashvars' value='controls=true&file=" + t.mp4 + "' />", g += "</object>", g += "</video>", jQuery("#" + e).html(g), new MediaElement(u, {
			enablePluginDebug: !1,
			flashName: s,
			silverlightName: l,
			success: function (e, t) {
				g_isPlayerReady = !0, r = e, 0 == a && r.pause(), i()
			},
			error: function (e) {
				trace(e)
			}
		})
	}

	function i() {
		g_ugFunctions.addEvent(r, "play", function () {
			a.trigger(o.events.START_PLAYING)
		}), g_ugFunctions.addEvent(r, "pause", function () {
			a.trigger(o.events.STOP_PLAYING)
		}), g_ugFunctions.addEvent(r, "ended", function () {
			a.trigger(o.events.STOP_PLAYING), a.trigger(o.events.VIDEO_ENDED)
		})
	}
	this.isAPILoaded = !1;
	var n, r, o = this,
		a = jQuery(this);
	this.events = {
		START_PLAYING: "start_playing",
		STOP_PLAYING: "stop_playing",
		VIDEO_ENDED: "video_ended"
	}, this.loadAPI = function () {
		return 1 == g_ugHtml5MediaAPI.isAPILoaded ? !0 : e() ? (g_ugHtml5MediaAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelement.min.js", !0), g_ugFunctions.loadCss("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelementplayer.min.css", !0), void(g_ugHtml5MediaAPI.isAPILoaded = !0))
	}, this.putVideo = function (i, r, o, a, s) {
		return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function () {
			e() && (t(i, r, o, a, s), clearInterval(n))
		}, 500)))
	}, this.doCommand = function (e) {
		if (null == r) return !1;
		if (0 == g_isPlayerReady) return !1;
		switch (e) {
			case "play":
				r.play();
				break;
			case "pause":
				r.pause()
		}
	}, this.pause = function () {
		o.doCommand("pause")
	}, this.play = function () {
		o.doCommand("play")
	}
}

function UGVimeoAPI() {
	function e() {
		return "undefined" != typeof Froogaloop
	}

	function t(e, t, n, o, a) {
		s = null, l = !1;
		var u = location.protocol + "//player.vimeo.com/video/" + t + "?api=1";
		a === !0 && (u += "&amp;byline=0&amp;autoplay=1&amp;title=0&amp;portrait=0");
		var d = "<iframe src=" + u + " width='" + n + "' height='" + o + "' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
		jQuery("#" + e).html(d);
		var _ = jQuery("#" + e + " iframe")[0];
		s = Froogaloop(_), s.addEvent("ready", function () {
			s && (l = !0, i())
		}), r = e
	}

	function i() {
		return s ? (s.addEvent("cuechange", function () {
			1 == u && o.play()
		}), s.addEvent("play", function () {
			a.trigger(o.events.START_PLAYING)
		}), s.addEvent("pause", function () {
			a.trigger(o.events.STOP_PLAYING)
		}), void s.addEvent("finish", function () {
			a.trigger(o.events.STOP_PLAYING), a.trigger(o.events.VIDEO_ENDED)
		})) : !1
	}
	this.isAPILoaded = !1;
	var n, r, o = this,
		a = jQuery(this),
		s = null,
		l = !1,
		u = !1;
	this.events = {
		START_PLAYING: "start_playing",
		STOP_PLAYING: "stop_playing",
		VIDEO_ENDED: "video_ended"
	}, this.loadAPI = function () {
		return 1 == g_ugVimeoAPI.isAPILoaded ? !0 : e() ? (g_ugVimeoAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("f.vimeocdn.com/js/froogaloop2.min.js", !0), void(g_ugVimeoAPI.isAPILoaded = !0))
	}, this.doCommand = function (e) {
		if (null == s) return !1;
		if (0 == l) return !1;
		switch (e) {
			default: s.api(e)
		}
	}, this.pause = function () {
		o.doCommand("pause")
	}, this.play = function () {
		o.doCommand("play")
	}, this.destroy = function () {
		s && (s.api("unload"), s = null, l = !1), r && jQuery("#" + r).html("")
	}, this.putVideo = function (i, r, o, a, s) {
		return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function () {
			e() && (t(i, r, o, a, s), clearInterval(n))
		}, 500)))
	}, this.isPlayerReady = function () {
		return l && s ? !0 : !1
	}, this.changeVideo = function (e, t) {
		return 0 == o.isPlayerReady() ? !1 : (u = t, void s.api("loadVideo", e))
	}, this.getVideoImages = function (e, t, i) {
		var n = location.protocol + "//vimeo.com/api/v2/video/" + e + ".json";
		jQuery.get(n, {}, function (e) {
			var n = {};
			n.preview = e[0].thumbnail_large, n.thumb = e[0].thumbnail_medium, i(t, n)
		})
	}
}

function UGYoutubeAPI() {
	function e(e, t, r, a, u) {
		s && l && s.destroy();
		var d = {
			controls: 2,
			showinfo: _.video_youtube_showinfo,
			rel: 0
		};
		u === !0 && (d.autoplay = 1), l = !1, s = new YT.Player(e, {
			height: a,
			width: r,
			videoId: t,
			playerVars: d,
			events: {
				onReady: i,
				onStateChange: n
			}
		}), o = e
	}

	function t() {
		return "undefined" != typeof YT && "undefined" != typeof YT.Player ? !0 : !1
	}

	function i() {
		l = !0
	}

	function n() {
		if ("function" != typeof s.getPlayerState) return trace("Youtube API error: can't get player state"), !1;
		var e = s.getPlayerState();
		switch (e) {
			case YT.PlayerState.PLAYING:
				u.trigger(a.events.START_PLAYING);
				break;
			case YT.PlayerState.ENDED:
				u.trigger(a.events.STOP_PLAYING), u.trigger(a.events.VIDEO_ENDED);
				break;
			default:
				d == YT.PlayerState.PLAYING && u.trigger(a.events.STOP_PLAYING)
		}
		d = e
	}
	this.isAPILoaded = !1;
	var r, o, a = this,
		s = null,
		l = !1,
		u = jQuery(this),
		d = -1,
		_ = {
			video_youtube_showinfo: !0
		};
	this.events = {
		START_PLAYING: "start_playing",
		STOP_PLAYING: "stop_playing",
		VIDEO_ENDED: "video_ended"
	}, this.setOptions = function (e) {
		_ = jQuery.extend(_, e)
	}, this.putVideo = function (i, n, o, a, s) {
		return t() ? (e(i, n, o, a, s), !0) : (this.loadAPI(), void(r = setInterval(function () {
			t() && (e(i, n, o, a, s), clearInterval(r))
		}, 500)))
	}, this.loadAPI = function () {
		return 1 == g_ugYoutubeAPI.isAPILoaded ? !0 : "undefined" != typeof YT ? (g_ugYoutubeAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("https://www.youtube.com/player_api", !1), void(g_ugYoutubeAPI.isAPILoaded = !0))
	}, this.doCommand = function (e, t) {
		if (!s) return !0;
		if (0 == l) return !1;
		switch (e) {
			case "play":
				if ("function" != typeof s.playVideo) return !1;
				s.playVideo();
				break;
			case "pause":
				if ("function" != typeof s.pauseVideo) return !1;
				s.pauseVideo();
				break;
			case "seek":
				if ("function" != typeof s.seekTo) return !1;
				s.seekTo(t);
				break;
			case "stopToBeginning":
				var i = s.getPlayerState();
				switch (s.pauseVideo(), i) {
					case YT.PlayerState.PLAYING:
					case YT.PlayerState.ENDED:
					case YT.PlayerState.PAUSED:
						s.seekTo(0)
				}
		}
	}, this.play = function () {
		a.doCommand("play")
	}, this.pause = function () {
		a.doCommand("pause")
	}, this.destroy = function () {
		try {
			s && (l = !1, s.clearVideo(), s.destroy())
		} catch (e) {
			jQuery("#" + o).html("")
		}
	}, this.stopToBeginning = function () {
		a.doCommand("stopToBeginning")
	}, this.changeVideo = function (e, t) {
		return 0 == a.isPlayerReady() ? !1 : void(t && 1 == t ? s.loadVideoById(e, 0, "large") : s.cueVideoById(e, 0, "large"))
	}, this.isPlayerReady = function () {
		return l && s ? !0 : !1
	}, this.getVideoImages = function (e) {
		var t = {};
		return t.preview = "https://i.ytimg.com/vi/" + e + "/sddefault.jpg", t.thumb = "https://i.ytimg.com/vi/" + e + "/default.jpg", t
	}
}

function UGVideoPlayer() {
	function e() {
		h.hide()
	}

	function t() {
		p.trigger(h.events.PLAY_START), _ && _.hide()
	}

	function i() {
		p.trigger(h.events.PLAY_STOP), _ && _.show()
	}

	function n() {
		p.trigger(h.events.VIDEO_ENDED)
	}

	function r() {
		_ && (f.setButtonMobileReady(_), f.setButtonOnClick(_, e)), jQuery(m).on(m.events.START_PLAYING, t), jQuery(m).on(m.events.STOP_PLAYING, i), jQuery(m).on(m.events.VIDEO_ENDED, n), jQuery(v).on(v.events.START_PLAYING, t), jQuery(v).on(v.events.STOP_PLAYING, i), jQuery(v).on(v.events.VIDEO_ENDED, n), jQuery(b).on(b.events.START_PLAYING, t), jQuery(b).on(b.events.STOP_PLAYING, i), jQuery(b).on(b.events.VIDEO_ENDED, n), jQuery(y).on(y.events.START_PLAYING, t), jQuery(y).on(y.events.STOP_PLAYING, i), jQuery(y).on(y.events.VIDEO_ENDED, n), jQuery(I).on(I.events.START_PLAYING, t), jQuery(I).on(I.events.STOP_PLAYING, i), jQuery(I).on(I.events.VIDEO_ENDED, n)
	}

	function o(e) {
		var t = ["youtube", "vimeo", "html5", "soundcloud", "wistia"];
		for (var i in t) {
			var n = t[i];
			if (n != e) switch (n) {
				case "youtube":
					m.pause(), m.destroy(), l.hide();
					break;
				case "vimeo":
					v.pause(), v.destroy(), u.hide();
					break;
				case "html5":
					b.pause(), d.hide();
					break;
				case "soundcloud":
					y.pause(), y.destroy(), g.hide();
					break;
				case "wistia":
					I.pause(), c.hide()
			}
		}
	}
	var a, s, l, u, d, _, g, c, h = this,
		p = jQuery(this),
		f = new UGFunctions,
		m = new UGYoutubeAPI,
		v = new UGVimeoAPI,
		b = new UGHtml5MediaAPI,
		y = new UGSoundCloudAPI,
		I = new UGWistiaAPI,
		w = null,
		E = {
			video_enable_closebutton: !0
		};
	this.events = {
		SHOW: "video_show",
		HIDE: "video_hide",
		PLAY_START: "video_play_start",
		PLAY_STOP: "video_play_stop",
		VIDEO_ENDED: "video_ended"
	};
	var T = {
		standAloneMode: !1,
		youtubeInnerID: "",
		vimeoPlayerID: "",
		html5PlayerID: "",
		wistiaPlayerID: "",
		soundCloudPlayerID: ""
	};
	this.init = function (e, t, i) {
		if (a = i, !a) throw new Error("missing gallery ID for video player, it's a must!");
		E = jQuery.extend(E, e), m.setOptions(E), t && 1 == t && (T.standAloneMode = !0)
	}, this.setHtml = function (e) {
		T.youtubeInnerID = a + "_youtube_inner", T.vimeoPlayerID = a + "_videoplayer_vimeo", T.html5PlayerID = a + "_videoplayer_html5", T.wistiaPlayerID = a + "_videoplayer_wistia", T.soundCloudPlayerID = a + "_videoplayer_soundcloud";
		var t = "<div class='ug-videoplayer' style='display:none'>";
		t += "<div class='ug-videoplayer-wrapper ug-videoplayer-youtube' style='display:none'><div id='" + T.youtubeInnerID + "'></div></div>", t += "<div id='" + T.vimeoPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-vimeo' style='display:none'></div>", t += "<div id='" + T.html5PlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-html5'></div>", t += "<div id='" + T.soundCloudPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-soundcloud'></div>", t += "<div id='" + T.wistiaPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-wistia'></div>", 0 == T.standAloneMode && 1 == E.video_enable_closebutton && (t += "<div class='ug-videoplayer-button-close'></div>"), t += "</div>", e.append(t), s = e.children(".ug-videoplayer"), l = s.children(".ug-videoplayer-youtube"), u = s.children(".ug-videoplayer-vimeo"), d = s.children(".ug-videoplayer-html5"), g = s.children(".ug-videoplayer-soundcloud"), c = s.children(".ug-videoplayer-wistia"), 0 == T.standAloneMode && 1 == E.video_enable_closebutton && (_ = s.children(".ug-videoplayer-button-close"))
	}, this.destroy = function () {
		_ && (_.off("click"), _.off("touchend")), jQuery(m).off(m.events.START_PLAYING), jQuery(m).off(m.events.STOP_PLAYING), jQuery(v).off(v.events.START_PLAYING), jQuery(v).off(v.events.STOP_PLAYING), jQuery(b).off(b.events.START_PLAYING), jQuery(b).off(b.events.STOP_PLAYING), jQuery(y).off(y.events.START_PLAYING, t), jQuery(y).off(y.events.STOP_PLAYING, i), jQuery(I).off(I.events.START_PLAYING, t), jQuery(I).off(I.events.STOP_PLAYING, i), w = null
	}, this.initEvents = function () {
		r()
	}, this.setSize = function (e, t) {
		f.setElementSize(s, e, t), _ && f.placeElement(_, "right", "top")
	}, this.setPosition = function (e, t) {
		f.placeElement(s, e, t)
	}, this.getObject = function () {
		return s
	}, this.show = function () {
		return 1 == h.isVisible() ? !0 : (s.show(), s.fadeTo(0, 1), _ && _.show(), void p.trigger(h.events.SHOW))
	}, this.hide = function () {
		return 0 == h.isVisible() ? !0 : (o(), w = null, s.hide(), void p.trigger(h.events.HIDE))
	}, this.getActiveAPI = function () {
		switch (w) {
			case "youtube":
				return m;
			case "vimeo":
				return v;
			case "wistia":
				return I;
			case "soundcloud":
				return y;
			case "html5":
				return b;
			default:
				return null
		}
	}, this.pause = function () {
		var e = h.getActiveAPI();
		return null == e ? !1 : void("function" == typeof e.pause && e.pause())
	}, this.isVisible = function () {
		return s.is(":visible")
	}, this.playYoutube = function (e, t) {
		if ("undefined" == typeof t) var t = !0;
		o("youtube"), l.show();
		var i = l.children("#" + T.youtubeInnerID);
		0 == i.length && l.append("<div id='" + T.youtubeInnerID + "'></div>"), 1 == m.isPlayerReady() && 1 == T.standAloneMode ? m.changeVideo(e, t) : m.putVideo(T.youtubeInnerID, e, "100%", "100%", t), w = "youtube"
	}, this.playVimeo = function (e, t) {
		if ("undefined" == typeof t) var t = !0;
		o("vimeo"), u.show(), v.putVideo(T.vimeoPlayerID, e, "100%", "100%", t), w = "vimeo"
	}, this.playHtml5Video = function (e, t, i, n, r) {
		if ("undefined" == typeof r) var r = !0;
		o("html5"), d.show();
		var a = {
			ogv: e,
			webm: t,
			mp4: i,
			posterImage: n
		};
		b.putVideo(T.html5PlayerID, a, "100%", "100%", r), w = "html5"
	}, this.playSoundCloud = function (e, t) {
		if ("undefined" == typeof t) var t = !0;
		o("soundcloud"), g.show(), y.putSound(T.soundCloudPlayerID, e, "100%", "100%", t), w = "soundcloud"
	}, this.playWistia = function (e, t) {
		if ("undefined" == typeof t) var t = !0;
		o("wistia"), c.show(), I.putVideo(T.wistiaPlayerID, e, "100%", "100%", t), w = "wistia"
	}
}

function ugCheckForMinJQueryVersion() {
	var e = g_ugFunctions.checkMinJqueryVersion("1.8.0");
	if (0 == e) throw new Error("The gallery can run from jquery 1.8 You have jQuery " + jQuery.fn.jquery + " Please update your jQuery library.")
}

function ugCheckForErrors(e, t) {
	function i() {
		if ("undefined" == typeof jQuery) throw new Error("jQuery library not included")
	}

	function n() {
		if ("function" == typeof jQuery.fn.unitegallery) return !0;
		var e = "You have some jquery.js library include that comes after the gallery files js include.";
		throw e += "<br> This include eliminates the gallery libraries, and make it not work.", "cms" == t ? (e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Gallery Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.") : e += "<br><br> Please find and remove this jquery.js include and the gallery will work. <br> * There should be only one jquery.js include before all other js includes in the page.", new Error(e)
	}
	try {
		"jquery" == t ? (i(), ugCheckForMinJQueryVersion()) : (ugCheckForMinJQueryVersion(), n())
	} catch (r) {
		var o = r.message;
		if (o = "Unite Gallery Error: " + o, o = "<div style='font-size:16px;color:#BC0C06;max-width:900px;border:1px solid red;padding:10px;'>" + o + "</div>", "jquery" == t) {
			var a = document.getElementById(e);
			a.innerHTML = o, a.style.display = "block"
		} else jQuery(e).show().html(o);
		return !1
	}
	return !0
}

function UniteGalleryMain() {
	function __________INIT_GALLERY_______() {}

	function getThemeFunction(e) {
		var t = e;
		return -1 == t.indexOf("UGTheme_") && (t = "UGTheme_" + t), t
	}

	function initTheme(objCustomOptions) {
		if (objCustomOptions.hasOwnProperty("gallery_theme")) g_options.gallery_theme = objCustomOptions.gallery_theme;
		else {
			var defaultTheme = g_options.gallery_theme;
			0 == g_ugFunctions.isThemeRegistered(defaultTheme) && (g_options.gallery_theme = g_ugFunctions.getFirstRegisteredTheme())
		}
		var themeFunction = getThemeFunction(g_options.gallery_theme);
		try {
			g_options.gallery_theme = eval(themeFunction)
		} catch (e) {}
		g_options.gallery_theme = eval(themeFunction), g_objTheme = new g_options.gallery_theme, g_objTheme.init(t, objCustomOptions)
	}

	function resetOptions() {
		g_options = jQuery.extend({}, g_temp.originalOptions), g_selectedItemIndex = -1, g_selectedItem = null, g_objSlider = void 0, g_objThumbs = void 0, g_objSlider = void 0
	}

	function checkForStartupErrors() {
		try {
			ugCheckForMinJQueryVersion()
		} catch (e) {
			throwErrorShowMessage(e.message)
		}
		"object" == typeof g_objWrapper.outerWidth() && throwErrorShowMessage("You have some buggy script. most chances jquery-ui.js that destroy jquery outerWidth, outerHeight functions. The gallery can't run. Please update jquery-ui.js to latest version."), setTimeout(function () {
			ugCheckForErrors(g_galleryID, "cms")
		}, 5e3)
	}

	function runGallery(e, i, n, r) {
		var o = "object" == typeof i;
		if (o && (g_temp.objCustomOptions = i), 1 == g_temp.isRunFirstTime) {
			if (g_galleryID = e, g_objWrapper = jQuery(g_galleryID), 0 == g_objWrapper.length) return trace("div with id: " + g_galleryID + " not found"), !1;
			g_objParent = g_objWrapper.parent(), checkForStartupErrors(), g_temp.originalOptions = jQuery.extend({}, g_options), o && (g_options = jQuery.extend(g_options, i)), 1 == g_options.gallery_enable_cache && g_options.gallery_initial_catid && cacheItems(g_options.gallery_initial_catid), t.setSizeClass();
			var a = g_objWrapper.children();
			fillItemsArray(a), loadAPIs(), g_objWrapper.find("img").fadeTo(0, 0).hide(), g_objWrapper.show(), clearInitData()
		} else if (t.destroy(), resetOptions(), g_options = jQuery.extend(g_options, g_temp.objCustomOptions), n) {
			if (r && 1 == g_options.gallery_enable_cache && cacheItems(r, n), "noitems" == n) return showErrorMessage("No items in this category", ""), !1;
			g_objWrapper.html(n);
			var a = g_objWrapper.children();
			fillItemsArray(a), loadAPIs(), g_objWrapper.children().fadeTo(0, 0).hide(), g_objWrapper.show(), clearInitData()
		}
		1 == g_temp.isRunFirstTime && 1 == g_options.gallery_enable_tabs && (g_objTabs = new UGTabs, g_objTabs.init(t, g_options)), 1 == g_temp.isRunFirstTime && 1 == g_options.gallery_enable_loadmore && (g_objLoadMore = new UGLoadMore, g_objLoadMore.init(t, g_options)), o && modifyInitParams(g_temp.objCustomOptions), validateParams(), 1 == g_options.gallery_shuffle && t.shuffleItems(), initTheme(g_temp.objCustomOptions), setGalleryHtml(), setHtmlObjectsProperties();
		var s = g_objWrapper.width();
		0 == s ? g_functions.waitForWidth(g_objWrapper, runGalleryActually) : runGalleryActually()
	}

	function runGalleryActually() {
		t.setSizeClass(), 0 == g_temp.isFreestyleMode && 1 == g_options.gallery_preserve_ratio && setHeightByOriginalRatio(), g_objTheme.run(), g_objTabs && g_temp.isRunFirstTime && g_objTabs.run(), preloadBigImages(), initEvents(), g_numItems > 0 && t.selectItem(0), 1 == g_options.gallery_autoplay && t.startPlayMode(), g_temp.isRunFirstTime = !1
	}

	function showErrorMessage(e, t) {
		if ("undefined" == typeof t) var t = "<b>Unite Gallery Error: </b>";
		else t = "<b>" + t + ": </b>";
		e = t + e;
		var i = "<div class='ug-error-message-wrapper'><div class='ug-error-message'>" + e + "</div></div>";
		g_objWrapper.children().remove(), g_objWrapper.html(i), g_objWrapper.show()
	}

	function throwErrorShowMessage(e) {
		throw showErrorMessage(e), new Error(e)
	}

	function modifyInitParams() {
		g_options.gallery_images_preload_type || (g_options.gallery_images_preload_type = "minimal"), (void 0 == g_options.gallery_min_height || g_options.gallery_height < g_options.gallery_min_height) && (g_options.gallery_min_height = 0), (void 0 == g_options.gallery_min_width || g_options.gallery_width < g_options.gallery_min_width) && (g_options.gallery_min_width = 0)
	}

	function validateParams() {
		if (!g_options.gallery_theme) throw new Error("The gallery can't run without theme");
		if (jQuery.isNumeric(g_options.gallery_height) && g_options.gallery_height < g_options.gallery_min_height) throw new Error("The <b>gallery_height</b> option must be bigger then <b>gallery_min_height option</b>");
		if (g_options.gallery_width < g_options.gallery_min_width) throw new Error("The <b>gallery_width</b> option must be bigger then <b>gallery_min_width option</b>")
	}

	function setGalleryHtml() {
		g_objWrapper.addClass("ug-gallery-wrapper"), g_objWrapper.append("<div class='ug-overlay-disabled' style='display:none'></div>"), t.setSizeClass()
	}

	function clearInitData() {
		g_objWrapper.children().remove()
	}

	function storeLastSize() {
		var e = t.getSize();
		g_temp.lastWidth = e.width, g_temp.lastHeight = e.height
	}

	function setHeightByOriginalRatio() {
		var e = t.getSize(),
			i = e.width / e.height;
		if (i != e.orig_ratio) {
			var n = e.width / e.orig_ratio;
			n = Math.round(n), n < g_options.gallery_min_height && (n = g_options.gallery_min_height), g_objWrapper.height(n)
		}
	}

	function setHtmlObjectsProperties() {
		var e = g_functions.getCssSizeParam(g_options.gallery_width),
			t = {
				"max-width": e,
				"min-width": g_functions.getCssSizeParam(g_options.gallery_min_width)
			};
		if (0 == g_temp.isFreestyleMode) {
			var i = g_functions.getCssSizeParam(g_options.gallery_height);
			t.height = i
		} else t.overflow = "visible";
		g_options.gallery_background_color && (t["background-color"] = g_options.gallery_background_color), g_objWrapper.css(t)
	}

	function fillItemByChild(e) {
		var i = t.isMobileMode(),
			n = e.prop("tagName").toLowerCase(),
			r = "";
		if ("a" == n) {
			r = e.attr("href"), e = e.children();
			var n = e.prop("tagName").toLowerCase()
		}
		var o = e.data("type");
		void 0 == o && (o = "image");
		var a = {};
		if (a.type = o, "img" == n) {
			var s = e.data("lazyload-src");
			s && "" != s && (e.attr("src", s), jQuery.removeData(e, "lazyload-src"));
			var l = e.data("image"),
				u = e.data("thumb");
			"undefined" == typeof l && (l = null), "undefined" == typeof u && (u = null);
			var d = e.attr("src");
			l || (l = d), u || (u = d), u || (u = l), l || (l = u), a.urlThumb = u, a.urlImage = l, a.title = e.attr("alt"), a.objThumbImage = e, a.objThumbImage.attr("src", a.urlThumb)
		} else {
			if ("image" == o) throw trace("Problematic gallery item found:"), trace(e), trace("Please look for some third party js script that could add this item to the gallery"), new Error("The item should not be image type");
			a.urlThumb = e.data("thumb"), a.title = e.data("title"), a.objThumbImage = null, a.urlImage = e.data("image")
		}
		if (1 == i) {
			var _ = e.data("thumb-mobile");
			"undefined" != typeof _ && "" != _ && (a.urlThumb = _, "img" == n && e.attr("src", a.urlThumb));
			var g = e.data("image-mobile");
			"undefined" != typeof g && "" != g && (a.urlImage = g)
		}
		a.link = r, a.description = e.attr("title"), a.description || (a.description = e.data("description")), a.description || (a.description = ""), a.isNewAdded = !1, a.isLoaded = !1, a.isThumbImageLoaded = !1, a.objPreloadImage = null, a.isBigImageLoadStarted = !1, a.isBigImageLoaded = !1, a.isBigImageLoadError = !1, a.imageWidth = 0, a.imageHeight = 0, a.thumbWidth = 0, a.thumbHeight = 0, a.thumbRatioByWidth = 0, a.thumbRatioByHeight = 0;
		var c = e.data("width"),
			h = e.data("height");
		c && "number" == typeof c && h && "number" == typeof h && (a.thumbWidth = c, a.thumbHeight = h, a.thumbRatioByWidth = c / h, a.thumbRatioByHeight = h / c), a.addHtml = null;
		var p = void 0 == a.urlImage || "" == a.urlImage,
			f = void 0 == a.urlThumb || "" == a.urlThumb;
		switch (a.type) {
			case "youtube":
				if (a.videoid = e.data("videoid"), p || f) {
					var m = g_ugYoutubeAPI.getVideoImages(a.videoid);
					p && (a.urlImage = m.preview), f && (a.urlThumb = m.thumb, "img" == n && e.attr("src", a.urlThumb))
				}
				g_temp.isYoutubePresent = !0;
				break;
			case "vimeo":
				a.videoid = e.data("videoid"), g_temp.isVimeoPresent = !0;
				break;
			case "html5video":
				a.videoogv = e.data("videoogv"), a.videowebm = e.data("videowebm"), a.videomp4 = e.data("videomp4"), g_temp.isHtml5VideoPresent = !0;
				break;
			case "soundcloud":
				a.trackid = e.data("trackid"), g_temp.isSoundCloudPresent = !0;
				break;
			case "wistia":
				a.videoid = e.data("videoid"), g_temp.isWistiaPresent = !0;
				break;
			case "custom":
				var v = e.children("img");
				v.length && (v = jQuery(v[0]), a.urlThumb = v.attr("src"), a.title = v.attr("alt"), a.objThumbImage = v);
				var b = e.children().not("img:first-child");
				b.length && (a.addHtml = b.clone())
		}
		return a.objThumbImage && (a.objThumbImage.removeAttr("data-description", ""), a.objThumbImage.removeAttr("data-image", ""), a.objThumbImage.removeAttr("data-thumb", ""), a.objThumbImage.removeAttr("title", "")), a
	}

	function fillItemsArray(e, t) {
		if (t !== !0) g_arrItems = [];
		else
			for (var i = 0; g_numItems > i; i++) g_arrItems[i].isNewAdded = !1;
		for (var i = 0; i < e.length; i++) {
			var n = jQuery(e[i]),
				r = fillItemByChild(n);
			numIndex = g_arrItems.length, r.index = numIndex, t === !0 && (r.isNewAdded = !0), g_arrItems.push(r)
		}
		g_numItems = g_arrItems.length
	}

	function loadAPIs() {
		g_temp.isYoutubePresent && g_ugYoutubeAPI.loadAPI(), g_temp.isVimeoPresent && g_ugVimeoAPI.loadAPI(), g_temp.isHtml5VideoPresent && g_ugHtml5MediaAPI.loadAPI(), g_temp.isSoundCloudPresent && g_ugSoundCloudAPI.loadAPI(), g_temp.isWistiaPresent && g_ugWistiaAPI.loadAPI()
	}

	function preloadBigImages() {
		if ("visible" != g_options.gallery_images_preload_type || g_objThumbs || (g_options.gallery_images_preload_type = "minimal"), 1 == g_temp.isAllItemsPreloaded) return !0;
		switch (g_options.gallery_images_preload_type) {
			default:
				case "minimal":
				break;
			case "all":
					jQuery(g_arrItems).each(function () {
					preloadItemImage(this)
				});
				break;
			case "visible":
					jQuery(g_arrItems).each(function () {
					var e = this,
						t = g_objThumbs.isItemThumbVisible(e);
					1 == t && preloadItemImage(e)
				})
		}
	}

	function checkPreloadItemImage(e) {
		if (1 == e.isBigImageLoadStarted || 1 == e.isBigImageLoaded || 1 == e.isBigImageLoadError) return !1;
		switch (g_options.gallery_images_preload_type) {
			default:
				case "minimal":
				break;
			case "all":
					preloadItemImage(e);
				break;
			case "visible":
					var t = g_objThumbs.isItemThumbVisible(e);1 == t && preloadItemImage(e)
		}
	}

	function preloadItemImage(e) {
		if (1 == e.isBigImageLoadStarted || 1 == e.isBigImageLoaded || 1 == e.isBigImageLoadError) return !0;
		var i = e.urlImage;
		return "" == i || void 0 == i ? (e.isBigImageLoadError = !0, !1) : (e.isBigImageLoadStarted = !0, e.objPreloadImage = jQuery("<img/>").attr("src", i), e.objPreloadImage.data("itemIndex", e.index), e.objPreloadImage.on("load", t.onItemBigImageLoaded), e.objPreloadImage.on("error", function () {
			var e = jQuery(this),
				i = e.data("itemIndex"),
				n = g_arrItems[i];
			n.isBigImageLoadError = !0, n.isBigImageLoaded = !1;
			var r = jQuery(this).attr("src");
			console.log("Can't load image: " + r), g_objGallery.trigger(t.events.ITEM_IMAGE_UPDATED, [i, n.urlImage]), n.objThumbImage.attr("src", n.urlThumb)
		}), void checkAllItemsStartedPreloading())
	}

	function preloadNearBigImages(e) {
		if (1 == g_temp.isAllItemsPreloaded) return !1;
		if (!e) var e = g_selectedItem;
		if (!e) return !0;
		var t = e.index,
			i = t - 1,
			n = t + 1;
		i > 0 && preloadItemImage(g_arrItems[i]), g_numItems > n && preloadItemImage(g_arrItems[n])
	}

	function checkAllItemsStartedPreloading() {
		if (1 == g_temp.isAllItemsPreloaded) return !1;
		for (var e in g_arrItems)
			if (0 == g_arrItems[e].isBigImageLoadStarted) return !1;
		g_temp.isAllItemsPreloaded = !0
	}

	function __________END_INIT_GALLERY_______() {}

	function __________EVENTS_____________() {}

	function onSliderMouseEnter(e) {
		1 == g_options.gallery_pause_on_mouseover && 0 == t.isFullScreen() && 1 == g_temp.isPlayMode && g_objSlider && 0 == g_objSlider.isSlideActionActive() && t.pausePlaying()
	}

	function onSliderMouseLeave(e) {
		if (1 == g_options.gallery_pause_on_mouseover && 1 == g_temp.isPlayMode && g_objSlider && 0 == g_objSlider.isSlideActionActive()) {
			var i = g_objSlider.isCurrentSlideLoadingImage();
			0 == i && t.continuePlaying()
		}
	}

	function onKeyPress(e) {
		var i = jQuery(e.target);
		if (i.is("textarea") || i.is("select") || i.is("input")) return !0;
		var n = e.charCode ? e.charCode : e.keyCode ? e.keyCode : e.which ? e.which : 0,
			r = !0;
		switch (n) {
			case 39:
				t.nextItem();
				break;
			case 37:
				t.prevItem();
				break;
			default:
				r = !1
		}
		1 == r && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()), g_objGallery.trigger(t.events.GALLERY_KEYPRESS, [n, e])
	}

	function onGalleryResized() {
		var e = t.getSize();
		if (0 == e.width) return !0;
		t.setSizeClass();
		var e = t.getSize();
		if (e.width != g_temp.lastWidth || 0 == g_temp.isFreestyleMode && e.height != g_temp.lastHeight) {
			var i = !1;
			if (g_temp.funcCustomHeight) {
				var n = g_temp.funcCustomHeight(e);
				n && (g_objWrapper.height(n), i = !0)
			}
			0 == i && 1 == g_options.gallery_preserve_ratio && 0 == g_temp.isFreestyleMode && setHeightByOriginalRatio(), storeLastSize(), g_objGallery.trigger(t.events.SIZE_CHANGE)
		}
	}

	function onThumbsChange(e) {
		"visible" == g_options.gallery_images_preload_type && 0 == g_temp.isAllItemsPreloaded && preloadBigImages()
	}

	function onFullScreenChange() {
		var e = g_functions.isFullScreen(),
			i = e ? t.events.ENTER_FULLSCREEN : t.events.EXIT_FULLSCREEN,
			n = g_functions.getGlobalData("fullscreenID");
		return g_galleryID !== n ? !0 : (e ? g_objWrapper.addClass("ug-fullscreen") : g_objWrapper.removeClass("ug-fullscreen"), g_objGallery.trigger(i), void onGalleryResized())
	}

	function onItemImageUpdated(e, i) {
		var n = t.getItem(i);
		checkPreloadItemImage(n)
	}

	function onCurrentSlideImageLoadEnd() {
		1 == t.isPlayMode() && t.continuePlaying()
	}

	function initEvents() {
		if (g_objWrapper.on("dragstart", function (e) {
				e.preventDefault()
			}), g_objGallery.on(t.events.ITEM_IMAGE_UPDATED, onItemImageUpdated), g_objThumbs) switch (g_temp.thumbsType) {
			case "strip":
				jQuery(g_objThumbs).on(g_objThumbs.events.STRIP_MOVE, onThumbsChange);
				break;
			case "grid":
				jQuery(g_objThumbs).on(g_objThumbs.events.PANE_CHANGE, onThumbsChange)
		}
		if ("advance" == g_options.gallery_mousewheel_role && 0 == g_temp.isFreestyleMode && g_objWrapper.on("mousewheel", t.onGalleryMouseWheel), storeLastSize(), jQuery(window).resize(function () {
				g_objWrapper.css("width", "auto"), g_functions.whenContiniousEventOver("gallery_resize", onGalleryResized, g_temp.resizeDelay)
			}), setTimeout(function () {
				setInterval(onGalleryResized, 2e3)
			}, 1e4), g_functions.addFullScreenChangeEvent(onFullScreenChange), g_objSlider) {
			if (jQuery(g_objSlider).on(g_objSlider.events.ITEM_CHANGED, function () {
					var e = g_objSlider.getCurrentItemIndex(); - 1 != e && t.selectItem(e)
				}), 1 == g_options.gallery_pause_on_mouseover) {
				var e = g_objSlider.getElement();
				e.hover(onSliderMouseEnter, onSliderMouseLeave), g_objGallery.on(t.events.ENTER_FULLSCREEN, function () {
					onSliderMouseLeave()
				})
			}
			retriggerEvent(g_objSlider, g_objSlider.events.ACTION_START, t.events.SLIDER_ACTION_START), retriggerEvent(g_objSlider, g_objSlider.events.ACTION_END, t.events.SLIDER_ACTION_END), jQuery(g_objSlider).on(g_objSlider.events.CURRENTSLIDE_LOAD_END, onCurrentSlideImageLoadEnd)
		}
		1 == g_options.gallery_control_keyboard && jQuery(document).keydown(onKeyPress)
	}

	function __________GENERAL_______() {}

	function cacheItems(e, t) {
		if (t) {
			var i = t;
			"noitems" != i && (i = jQuery(t).clone())
		} else var i = g_objWrapper.children().clone();
		g_objCache[e] = i
	}

	function removeAllSizeClasses(e) {
		e || (e = g_objWrapper), e.removeClass("ug-under-480"), e.removeClass("ug-under-780"), e.removeClass("ug-under-960")
	}

	function retriggerEvent(e, t, i) {
		jQuery(e).on(t, function (e) {
			g_objGallery.trigger(i, [this])
		})
	}

	function advanceNextStep() {
		var e = jQuery.now(),
			i = e - g_temp.playTimeLastStep;
		g_temp.playTimeLastStep = e;
		var n = t.isGalleryVisible();
		if (0 == n) return !1;
		if (g_temp.playTimePassed += i, g_temp.objProgress) {
			var r = g_temp.playTimePassed / g_options.gallery_play_interval;
			g_temp.objProgress.setProgress(r)
		}
		g_temp.playTimePassed >= g_options.gallery_play_interval && (t.nextItem(), g_temp.playTimePassed = 0)
	}

	function unselectSeletedItem() {
		return null == g_selectedItem ? !0 : (g_objThumbs && g_objThumbs.setThumbUnselected(g_selectedItem.objThumbWrapper), g_selectedItem = null, void(g_selectedItemIndex = -1))
	}

	function toFakeFullScreen() {
		jQuery("body").addClass("ug-body-fullscreen"), g_objWrapper.addClass("ug-fake-fullscreen"), g_temp.isFakeFullscreen = !0, g_objGallery.trigger(t.events.ENTER_FULLSCREEN), g_objGallery.trigger(t.events.SIZE_CHANGE)
	}

	function exitFakeFullscreen() {
		jQuery("body").removeClass("ug-body-fullscreen"), g_objWrapper.removeClass("ug-fake-fullscreen"), g_temp.isFakeFullscreen = !1, g_objGallery.trigger(t.events.EXIT_FULLSCREEN), g_objGallery.trigger(t.events.SIZE_CHANGE)
	}
	var t = this,
		g_galleryID, g_objGallery = jQuery(t),
		g_objWrapper, g_objParent, g_objThumbs, g_objSlider, g_functions = new UGFunctions,
		g_objTabs, g_objLoadMore, g_arrItems = [],
		g_numItems, g_selectedItem = null,
		g_selectedItemIndex = -1,
		g_objTheme, g_objCache = {};
	this.events = {
		ITEM_CHANGE: "item_change",
		SIZE_CHANGE: "size_change",
		ENTER_FULLSCREEN: "enter_fullscreen",
		EXIT_FULLSCREEN: "exit_fullscreen",
		START_PLAY: "start_play",
		STOP_PLAY: "stop_play",
		PAUSE_PLAYING: "pause_playing",
		CONTINUE_PLAYING: "continue_playing",
		SLIDER_ACTION_START: "slider_action_start",
		SLIDER_ACTION_END: "slider_action_end",
		ITEM_IMAGE_UPDATED: "item_image_updated",
		GALLERY_KEYPRESS: "gallery_keypress",
		GALLERY_BEFORE_REQUEST_ITEMS: "gallery_before_request_items",
		OPEN_LIGHTBOX: "open_lightbox",
		CLOSE_LIGHTBOX: "close_lightbox"
	};
	var g_options = {
			gallery_width: 900,
			gallery_height: 500,
			gallery_min_width: 150,
			gallery_min_height: 100,
			gallery_theme: "default",
			gallery_skin: "default",
			gallery_images_preload_type: "minimal",
			gallery_autoplay: !1,
			gallery_play_interval: 3e3,
			gallery_pause_on_mouseover: !0,
			gallery_mousewheel_role: "zoom",
			gallery_control_keyboard: !0,
			gallery_carousel: !0,
			gallery_preserve_ratio: !0,
			gallery_background_color: "",
			gallery_debug_errors: !1,
			gallery_shuffle: !1,
			gallery_urlajax: null,
			gallery_enable_tabs: !1,
			gallery_enable_loadmore: !1,
			gallery_enable_cache: !0,
			gallery_initial_catid: ""
		},
		g_temp = {
			objCustomOptions: {},
			isAllItemsPreloaded: !1,
			isFreestyleMode: !1,
			lastWidth: 0,
			lastHeigh: 0,
			handleResize: null,
			isInited: !1,
			isPlayMode: !1,
			isPlayModePaused: !1,
			playTimePassed: 0,
			playTimeLastStep: 0,
			playHandle: "",
			playStepInterval: 33,
			objProgress: null,
			isFakeFullscreen: !1,
			thumbsType: null,
			isYoutubePresent: !1,
			isVimeoPresent: !1,
			isHtml5VideoPresent: !1,
			isSoundCloudPresent: !1,
			isWistiaPresent: !1,
			resizeDelay: 100,
			isRunFirstTime: !0,
			originalOptions: {},
			funcCustomHeight: null
		};
	this.onItemBigImageLoaded = function (e, t) {
		if (!t) var t = jQuery(this);
		var i = t.data("itemIndex"),
			n = g_arrItems[i];
		n.isBigImageLoaded = !0;
		var r = g_functions.getImageOriginalSize(t);
		n.imageWidth = r.width, n.imageHeight = r.height
	}, this.checkFillImageSize = function (e, t) {
		if (!t) {
			var i = e.data("itemIndex");
			if (void 0 === i) throw new Error("Wrong image given to gallery.checkFillImageSize");
			var t = g_arrItems[i]
		}
		var n = g_functions.getImageOriginalSize(e);
		t.imageWidth = n.width, t.imageHeight = n.height
	}, this.setFreestyleMode = function () {
		g_temp.isFreestyleMode = !0
	}, this.attachThumbsPanel = function (e, t) {
		g_temp.thumbsType = e, g_objThumbs = t
	}, this.initSlider = function (e, i) {
		if (!e) var e = {};
		e = jQuery.extend(g_temp.objCustomOptions, e), g_objSlider = new UGSlider, g_objSlider.init(t, e, i)
	}, this.onGalleryMouseWheel = function (e, i, n, r) {
		e.preventDefault(), i > 0 ? t.prevItem() : t.nextItem()
	}, this.destroy = function () {
		if (g_objWrapper.off("dragstart"), g_objGallery.off(t.events.ITEM_IMAGE_UPDATED), g_objThumbs) switch (g_temp.thumbsType) {
			case "strip":
				jQuery(g_objThumbs).off(g_objThumbs.events.STRIP_MOVE);
				break;
			case "grid":
				jQuery(g_objThumbs).off(g_objThumbs.events.PANE_CHANGE)
		}
		if (g_objWrapper.off("mousewheel"), jQuery(window).off("resize"), g_functions.destroyFullScreenChangeEvent(), g_objSlider) {
			jQuery(g_objSlider).off(g_objSlider.events.ITEM_CHANGED);
			var e = g_objSlider.getElement();
			e.off("mouseenter"), e.off("mouseleave"), g_objGallery.off(t.events.ENTER_FULLSCREEN), jQuery(g_objSlider).off(g_objSlider.events.ACTION_START), jQuery(g_objSlider).off(g_objSlider.events.ACTION_END), jQuery(g_objSlider).off(g_objSlider.events.CURRENTSLIDE_LOAD_END)
		}
		1 == g_options.gallery_control_keyboard && jQuery(document).off("keydown"), g_objTheme && "function" == typeof g_objTheme.destroy && g_objTheme.destroy(), g_objWrapper.html("")
	}, this.getArrItems = function () {
		return g_arrItems
	}, this.getObjects = function () {
		var e = {
			g_galleryID: g_galleryID,
			g_objWrapper: g_objWrapper,
			g_objThumbs: g_objThumbs,
			g_objSlider: g_objSlider,
			g_options: g_options,
			g_arrItems: g_arrItems,
			g_numItems: g_numItems
		};
		return e
	}, this.getObjSlider = function () {
		return g_objSlider
	}, this.getItem = function (e) {
		if (0 > e) throw new Error("item with index: " + e + " not found");
		if (e >= g_numItems) throw new Error("item with index: " + e + " not found");
		return g_arrItems[e]
	}, this.getWidth = function () {
		var e = t.getSize();
		return e.width
	}, this.getHeight = function () {
		var e = t.getSize();
		return e.height
	}, this.getSize = function () {
		var e = g_functions.getElementSize(g_objWrapper);
		return e.orig_width = g_options.gallery_width, e.orig_height = g_options.gallery_height, e.orig_ratio = e.orig_width / e.orig_height, e
	}, this.getGalleryID = function () {
		var e = g_galleryID.replace("#", "");
		return e
	}, this.getNextItem = function (e, t) {
		"object" == typeof e && (e = e.index);
		var i = e + 1;
		if (t !== !0 && 1 == g_numItems) return null;
		if (i >= g_numItems) {
			if (1 != g_options.gallery_carousel && t !== !0) return null;
			i = 0
		}
		var n = g_arrItems[i];
		return n
	}, this.getPrevItem = function (e) {
		"object" == typeof e && (e = e.index);
		var t = e - 1;
		if (0 > t) {
			if (1 != g_options.gallery_carousel && forceCarousel !== !0) return null;
			t = g_numItems - 1
		}
		var i = g_arrItems[t];
		return i
	}, this.getSelectedItem = function () {
		return g_selectedItem
	}, this.getSelectedItemIndex = function () {
		return g_selectedItemIndex
	}, this.getNumItems = function () {
		return g_numItems
	}, this.isLastItem = function () {
		return g_selectedItemIndex == g_numItems - 1 ? !0 : !1
	}, this.isFirstItem = function () {
		return 0 == g_selectedItemIndex ? !0 : !1
	}, this.getOptions = function () {
		return g_options
	}, this.getElement = function () {
		return g_objWrapper
	}, this.___________SET_CONTROLS___________ = function () {}, this.setNextButton = function (e) {
		e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.nextItem)
	}, this.setPrevButton = function (e) {
		e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.prevItem)
	}, this.setFullScreenToggleButton = function (e) {
		e.data("ug-button", !0), g_functions.setButtonOnTap(e, t.toggleFullscreen), g_objGallery.on(t.events.ENTER_FULLSCREEN, function () {
			e.addClass("ug-fullscreenmode")
		}), g_objGallery.on(t.events.EXIT_FULLSCREEN, function () {
			e.removeClass("ug-fullscreenmode")
		})
	}, this.destroyFullscreenButton = function (e) {
		g_functions.destroyButton(e), g_objGallery.off(t.events.ENTER_FULLSCREEN), g_objGallery.off(t.events.EXIT_FULLSCREEN)
	}, this.setPlayButton = function (e) {
		e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.togglePlayMode), g_objGallery.on(t.events.START_PLAY, function () {
			e.addClass("ug-stop-mode")
		}), g_objGallery.on(t.events.STOP_PLAY, function () {
			e.removeClass("ug-stop-mode")
		})
	}, this.destroyPlayButton = function (e) {
		g_functions.destroyButton(e), g_objGallery.off(t.events.START_PLAY), g_objGallery.off(t.events.STOP_PLAY)
	}, this.setProgressIndicator = function (e) {
		g_temp.objProgress = e
	}, this.setTextContainers = function (e, i) {
		g_objGallery.on(t.events.ITEM_CHANGE, function () {
			var n = t.getSelectedItem();
			e.html(n.title), i.html(n.description)
		})
	}, this.showDisabledOverlay = function () {
		g_objWrapper.children(".ug-overlay-disabled").show()
	}, this.hideDisabledOverlay = function () {
		g_objWrapper.children(".ug-overlay-disabled").hide()
	}, this.___________END_SET_CONTROLS___________ = function () {}, this.___________PLAY_MODE___________ = function () {}, this.startPlayMode = function () {
		if (g_temp.isPlayMode = !0, g_temp.isPlayModePaused = !1, g_temp.playTimePassed = 0, g_temp.playTimeLastStep = jQuery.now(), g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval), g_temp.objProgress) {
			var e = g_temp.objProgress.getElement();
			g_temp.objProgress.setProgress(0), e.show()
		}
		g_objGallery.trigger(t.events.START_PLAY), g_objSlider && 1 == g_objSlider.isCurrentSlideLoadingImage() && t.pausePlaying()
	}, this.resetPlaying = function () {
		return 0 == g_temp.isPlayMode ? !0 : (g_temp.playTimePassed = 0, void(g_temp.playTimeLastStep = jQuery.now()))
	}, this.pausePlaying = function () {
		return 1 == g_temp.isPlayModePaused ? !0 : (g_temp.isPlayModePaused = !0, clearInterval(g_temp.playHandle), void g_objGallery.trigger(t.events.PAUSE_PLAYING))
	}, this.continuePlaying = function () {
		return 0 == g_temp.isPlayModePaused ? !0 : (g_temp.isPlayModePaused = !1, g_temp.playTimeLastStep = jQuery.now(), void(g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval)))
	}, this.stopPlayMode = function () {
		if (g_temp.isPlayMode = !1, clearInterval(g_temp.playHandle), g_temp.playTimePassed = 0, g_temp.objProgress) {
			var e = g_temp.objProgress.getElement();
			e.hide()
		}
		g_objGallery.trigger(t.events.STOP_PLAY)
	}, this.isPlayMode = function () {
		return g_temp.isPlayMode
	}, this.togglePlayMode = function () {
		0 == t.isPlayMode() ? t.startPlayMode() : t.stopPlayMode()
	}, this.___________GENERAL_EXTERNAL___________ = function () {}, this.shuffleItems = function () {
		g_arrItems = g_functions.arrayShuffle(g_arrItems);
		for (var e in g_arrItems) g_arrItems[e].index = parseInt(e)
	}, this.setOptions = function (e) {
		g_options = jQuery.extend(g_options, e)
	}, this.selectItem = function (e, i) {
		"number" == typeof e && (e = t.getItem(e));
		var n = e.index;
		if (n == g_selectedItemIndex) return !0;
		if (unselectSeletedItem(), g_selectedItem = e, g_selectedItemIndex = n, g_objGallery.trigger(t.events.ITEM_CHANGE, [e, i]), 1 == g_temp.isPlayMode) {
			t.resetPlaying();
			var r = g_objSlider.isCurrentSlideLoadingImage();
			1 == r && t.pausePlaying()
		}
	}, this.nextItem = function () {
		var e = g_selectedItemIndex + 1;
		return 0 == g_numItems ? !0 : 0 == g_options.gallery_carousel && e >= g_numItems ? !0 : (e >= g_numItems && (e = 0), void t.selectItem(e, "next"))
	}, this.prevItem = function () {
		var e = g_selectedItemIndex - 1;
		return -1 == g_selectedItemIndex && (e = 0), 0 == g_numItems ? !0 : 0 == g_options.gallery_carousel && 0 > e ? !0 : (0 > e && (e = g_numItems - 1), void t.selectItem(e, "prev"))
	}, this.isFullScreen = function () {
		return 1 == g_temp.isFakeFullscreen ? !0 : 1 == g_functions.isFullScreen() ? !0 : !1
	}, this.isFakeFullscreen = function () {
		return g_temp.isFakeFullscreen
	}, this.toFullScreen = function () {
		g_functions.setGlobalData("fullscreenID", g_galleryID);
		var e = g_objWrapper.get(0),
			t = g_functions.toFullscreen(e);
		0 == t && toFakeFullScreen()
	}, this.exitFullScreen = function () {
		1 == g_temp.isFakeFullscreen ? exitFakeFullscreen() : g_functions.exitFullscreen()
	}, this.toggleFullscreen = function () {
		0 == t.isFullScreen() ? t.toFullScreen() : t.exitFullScreen()
	}, this.resize = function (e, t, i) {
		g_objWrapper.css("width", "auto"), g_objWrapper.css("max-width", e + "px"), t && g_objWrapper.height(t), i || i === !0 || onGalleryResized()
	}, this.setSizeClass = function (e, i) {
		if (!e) var e = g_objWrapper;
		if (!i) var n = t.getSize(),
			i = n.width;
		if (0 == i) var i = jQuery(window).width();
		var r = "";
		return 480 >= i ? r = "ug-under-480" : 780 >= i ? r = "ug-under-780" : 960 > i && (r = "ug-under-960"), 1 == e.hasClass(r) ? !0 : (removeAllSizeClasses(e), void("" != r && e.addClass(r)))
	}, this.isMobileMode = function () {
		return g_objWrapper.hasClass("ug-under-480") ? !0 : !1
	}, this.isSmallWindow = function () {
		var e = jQuery(window).width();
		return e ? 480 >= e ? !0 : !1 : !0
	}, this.isGalleryVisible = function () {
		var e = g_objWrapper.is(":visible");
		return e
	}, this.changeItems = function (e, t) {
		if (!e) var e = "noitems";
		runGallery(g_galleryID, "nochange", e, t)
	}, this.addItems = function (e) {
		if (!e || 0 == e.length) return !1;
		var t = g_objWrapper.children(".ug-newitems-wrapper");
		0 == t.length && g_objWrapper.append("<div class='ug-newitems-wrapper' style='display:none'></div>"), t = g_objWrapper.children(".ug-newitems-wrapper"), t.append(e);
		var i = jQuery(t.children());
		if (fillItemsArray(i, !0), loadAPIs(), !g_objTheme || "function" != typeof g_objTheme.addItems) throw new Error("addItems function not found in the theme");
		t.remove(), g_objTheme.addItems()
	}, this.getNewAddedItemsIndexes = function () {
		var e = [];
		return jQuery.each(g_arrItems, function (t, i) {
			1 == i.isNewAdded && e.push(t)
		}), e
	}, this.showErrorMessageReplaceGallery = function (e) {
		showErrorMessage(e)
	}, this.setFuncCustomHeight = function (e) {
		g_temp.funcCustomHeight = e
	}, this.__________EXTERNAL_EVENTS_______ = function () {}, this.triggerEvent = function (e, t) {
		t ? ("array" != jQuery.type(t) && (t = [t]), g_objGallery.trigger(e, t)) : g_objGallery.trigger(e)
	}, this.onEvent = function (e, t) {
		g_objGallery.on(e, t)
	}, this.destroyEvent = function (e) {
		g_objGallery.off(e)
	}, this.__________AJAX_REQUEST_______ = function () {}, this.ajaxRequest = function (e, t, i, n) {
		if (!i || "function" != typeof i) throw new Error("ajaxRequest error: success function should be passed");
		var r = g_options.gallery_urlajax;
		if (!r || "" == r) throw new Error("ajaxRequest error: Ajax url don't passed");
		if ("undefined" == typeof t) var t = {};
		var o = {
			action: "unitegallery_ajax_action",
			client_action: e,
			galleryID: g_galleryID,
			data: t
		};
		jQuery.ajax({
			type: "post",
			url: g_options.gallery_urlajax,
			dataType: "json",
			data: o,
			success: function (e) {
				if (!e) throw new Error("Empty ajax response!");
				if (-1 == e || 0 === e) throw new Error("ajax error!!!");
				if ("undefined" == typeof e.success) throw new Error("ajax error!!!");
				return 0 == e.success ? (showErrorMessage(e.message, "ajax error"), !1) : void i(e)
			},
			error: function (e, t, i) {
				console.log("Ajax Error!!! " + t), responseText = e.responseText, n && "function" == typeof n ? n(responseText) : trace(responseText)
			}
		})
	}, this.requestNewItems = function (e, i, n) {
		var r = g_options.gallery_enable_cache;
		if (n || (n = e), 1 == i && (r = !1), 1 == r && g_objCache.hasOwnProperty(n)) {
			var o = g_objCache[n];
			t.changeItems(o, n)
		} else g_objGallery.trigger(t.events.GALLERY_BEFORE_REQUEST_ITEMS), t.ajaxRequest("front_get_cat_items", {
			catid: e
		}, function (e) {
			var i = e.html;
			t.changeItems(i, n)
		})
	}, this.run = function (e, t) {
		g_options.gallery_debug_errors;
		if (t && t.hasOwnProperty("gallery_debug_errors") && (g_options.gallery_debug_errors = t.gallery_debug_errors), 1 == g_options.gallery_debug_errors) try {
			runGallery(e, t)
		} catch (i) {
			if ("object" == typeof i) {
				var n = i.message,
					r = i.lineNumber,
					o = i.fileName;
				i.stack;
				n += " <br><br> in file: " + o, n += " <b> line " + r + "</b>", trace(i)
			} else var n = i;
			n = n.replace("Error:", ""), showErrorMessage(n)
		} else runGallery(e, t)
	}
}

function UGLightbox() {
	function e(e, i) {
		ie = e, U = jQuery(e), ae = jQuery.extend(ae, le), ae = jQuery.extend(ae, i), se.originalOptions = jQuery.extend({}, ae), "compact" == ae.lightbox_type && (se.isCompact = !0, ae = jQuery.extend(ae, ue), ae = jQuery.extend(ae, i)), t(), 1 == se.putSlider ? (ie.initSlider(ae, "lightbox"), g_objects = e.getObjects(), ne = g_objects.g_objSlider) : ne = null, 1 == ae.lightbox_show_textpanel ? oe.init(ie, ae, "lightbox") : oe = null
	}

	function t() {
		1 == se.isCompact && 1 == ae.lightbox_show_textpanel && (ae.lightbox_slider_image_padding_bottom = se.initTextPanelHeight), 1 == se.isCompact && "inside" == ae.lightbox_arrows_position && (se.isArrowsInside = !0), 1 == se.isArrowsInside && 0 == ae.lightbox_arrows_inside_alwayson && (se.isArrowsOnHoverMode = !0), 0 == ae.lightbox_show_textpanel && (se.isTopPanelEnabled = !1, se.topPanelHeight = 0, ae.lightbox_slider_image_padding_top = 0)
	}

	function i() {
		var e = "",
			t = "";
		1 == se.isCompact && (t = " ug-lightbox-compact"), e += "<div class='ug-gallery-wrapper ug-lightbox" + t + "'>", e += "<div class='ug-lightbox-overlay'></div>", 0 == se.isCompact && se.isTopPanelEnabled ? (e += "<div class='ug-lightbox-top-panel'>", e += "<div class='ug-lightbox-top-panel-overlay'></div>", ae.lightbox_show_numbers && (e += "<div class='ug-lightbox-numbers'></div>"), e += "</div>") : ae.lightbox_show_numbers && (e += "<div class='ug-lightbox-numbers'></div>"), e += "<div class='ug-lightbox-button-close'></div>", e += "<div class='ug-lightbox-arrow-left'></div>", e += "<div class='ug-lightbox-arrow-right'></div>", e += "</div>", V = jQuery(e), jQuery("body").append(V), ne && ne.setHtml(V), X = V.children(".ug-lightbox-overlay"), 0 == se.isCompact && 1 == se.isTopPanelEnabled && ($ = V.children(".ug-lightbox-top-panel"), 0 == $.length && ($ = null)), K = V.find(".ug-lightbox-button-close"), ae.lightbox_show_numbers && (J = V.find(".ug-lightbox-numbers")), Z = V.children(".ug-lightbox-arrow-left"), q = V.children(".ug-lightbox-arrow-right"), oe && ($ ? oe.appendHTML($) : oe.appendHTML(V))
	}

	function n() {
		if (null !== ae.lightbox_overlay_color && X.css("background-color", ae.lightbox_overlay_color), null !== ae.lightbox_overlay_opacity && X.fadeTo(0, ae.lightbox_overlay_opacity), $ && null !== ae.lightbox_top_panel_opacity && $.children(".ug-lightbox-top-panel-overlay").fadeTo(0, ae.lightbox_top_panel_opacity), J) {
			var e = {};
			null !== ae.lightbox_numbers_size && (e["font-size"] = ae.lightbox_numbers_size + "px"), ae.lightbox_numbers_color && (e.color = ae.lightbox_numbers_color), null !== ae.lightbox_numbers_padding_right && (e["padding-right"] = ae.lightbox_numbers_padding_right + "px"), null !== ae.lightbox_numbers_padding_top && (e["padding-top"] = ae.lightbox_numbers_padding_top + "px"), J.css(e)
		}
	}

	function r(e) {
		if (!ne) return !0;
		var t = {
			slider_image_padding_top: e
		};
		ne.setOptions(t), ne.refreshSlideItems()
	}

	function o(e) {
		if (!$) return !1;
		if (!oe) return !1;
		var t = $.height();
		if (0 == t) return !1;
		if (0 == $.is(":visible")) return !1;
		var i = t,
			n = oe.getSize(),
			o = n.height;
		t != se.topPanelHeight && (i = se.topPanelHeight), o > i && (i = o), t != i && ($.height(i), ne && 0 == ne.isAnimating() && r(i))
	}

	function a(e) {
		var t = {},
			i = ae.lightbox_textpanel_width,
			n = 47,
			r = 40,
			a = e.width - n - r;
		i > a ? (t.textpanel_padding_left = n, t.textpanel_padding_right = r, t.textpanel_title_text_align = "center", t.textpanel_desc_text_align = "center") : (t.textpanel_padding_left = Math.floor((e.width - i) / 2), t.textpanel_padding_right = t.textpanel_padding_left, t.textpanel_title_text_align = "left", t.textpanel_desc_text_align = "left", ae.lightbox_textpanel_title_text_align && (t.textpanel_title_text_align = ae.lightbox_textpanel_desc_text_align), ae.lightbox_textpanel_desc_text_align && (t.textpanel_desc_text_align = ae.lightbox_textpanel_desc_text_align)), oe.setOptions(t), oe.refresh(!0, !0), o("positionTextPanelWide"), oe.positionPanel()
	}

	function s() {
		return $ ? void $.hide() : !1
	}

	function l() {
		return $ ? void $.show() : !1
	}

	function u(e) {
		if (0 == se.isOpened) return !1;
		if (!oe) return !1;
		if (!ne) return !1;
		var t = re.getElementSize(V),
			i = oe.getSize();
		if (0 == i.width || i.height > 120) return !1;
		if (!e) var n = ne.getSlideImage(),
			e = re.getElementSize(n);
		if (0 == e.height || 0 == e.width) return !1;
		var r = e.bottom + i.height;
		if (r < t.height) return !1;
		var o = ne.getOptions(),
			a = i.height;
		if (a != o.slider_image_padding_bottom) {
			var s = {
				slider_image_padding_bottom: a
			};
			if (0 == ne.isAnimating()) return ne.setOptions(s), ne.refreshSlideItems(), !0
		}
		return !1
	}

	function d(e, t) {
		if (!e) var i = ne.getSlideImage(),
			e = re.getElementSize(i);
		se.textPanelTop = e.bottom, t === !0 && oe.positionPanel(se.textPanelTop, se.textPanelLeft)
	}

	function _(e) {
		var t = (re.getElementSize(V), ne.getSlideImage()),
			i = re.getElementSize(t);
		if (0 == i.width) return !1;
		se.textPanelLeft = i.left, se.textPanelTop = i.bottom;
		var n = i.width;
		if (J) {
			var r = re.getElementSize(J);
			n -= r.width;
			var o = i.right - r.width;
			re.placeElement(J, o, se.textPanelTop)
		}
		oe && (oe.show(), oe.refresh(!0, !0, n), d(i));
		var a = u(i);
		0 == a && (se.positionFrom = "handleCompactTextpanelSizes", oe && (oe.positionPanel(se.textPanelTop, se.textPanelLeft), e === !0 && (e(), j())))
	}

	function g() {
		if (0 == ne.isCurrentSlideType("image")) return !0;
		var e = 1 == ne.isCurrentImageInPlace();
		return e
	}

	function c(e, t) {
		if (0 == se.isArrowsInside) return !1;
		if (!Z) return !1;
		var i = g();
		if (Z.show(), q.show(), se.positionFrom = "positionArrowsInside", 1 == se.isArrowsOnHoverMode && 1 == i && 0 == y() && I(!0), 0 == i) var n = re.getElementRelativePos(Z, "left", ae.lightbox_arrows_offset),
			r = re.getElementRelativePos(Z, "middle"),
			o = re.getElementRelativePos(q, "right", ae.lightbox_arrows_offset),
			a = r;
		else var s = ne.getSlideImage(),
			l = re.getElementSize(s),
			n = (re.getElementSize(ne.getElement()), re.getElementRelativePos(Z, "left", 0, s) + l.left + ae.lightbox_arrows_inside_offset),
			r = re.getElementRelativePos(Z, "middle", 0, s) + l.top,
			o = re.getElementRelativePos(Z, "right", 0, s) + l.left - ae.lightbox_arrows_inside_offset,
			a = r;
		if (t === !0) {
			var u = {
					left: n,
					top: r
				},
				d = {
					left: o,
					top: a
				};
			Z.stop().animate(u, {
				duration: se.fadeDuration
			}), q.stop().animate(d, {
				duration: se.fadeDuration
			})
		} else Z.stop(), q.stop(), re.placeElement(Z, n, r), re.placeElement(q, o, a);
		1 == e && E(t)
	}

	function h(e, t) {
		se.positionFrom = null;
		var i = g(),
			n = 2,
			r = re.getElementRelativePos(K, "right", 2, V);
		if (0 == i) var o = n,
			a = r;
		else {
			var s = ne.getSlideImage(),
				l = re.getElementSize(s),
				u = re.getElementSize(ne.getElement()),
				d = re.getElementSize(K);
			u.top == u.height && (u.top = 0);
			var a = u.left + l.right - d.width / 2 + ae.lightbox_compact_closebutton_offsetx,
				o = u.top + l.top - d.height / 2 - ae.lightbox_compact_closebutton_offsety;
			n > o && (o = n), a > r && (a = r)
		}
		if (t === !0) {
			var _ = {
				left: a,
				top: o
			};
			K.stop().animate(_, {
				duration: se.fadeDuration
			})
		} else K.stop(), re.placeElement(K, a, o);
		e === !0 && T(t)
	}

	function p() {
		K && K.stop().fadeTo(se.fadeDuration, 0), v(), b(), se.positionFrom = "hideCompactElements", 1 == se.isArrowsInside && I()
	}

	function f() {
		K && K.hide(), Z && 1 == se.isArrowsInside && (Z.hide(), q.hide()), J && J.hide(), oe && oe.hide()
	}

	function m() {
		var e = re.getElementSize(V);
		$ && re.setElementSizeAndPosition($, 0, 0, e.width, se.topPanelHeight), Z && 0 == se.isArrowsInside && (1 == ae.lightbox_hide_arrows_onvideoplay && (Z.show(), q.show()), re.placeElement(Z, "left", "middle", ae.lightbox_arrows_offset), re.placeElement(q, "right", "middle", ae.lightbox_arrows_offset)), 0 == se.isCompact && re.placeElement(K, "right", "top", 2, 2), oe && (se.positionFrom = "positionElements", 0 == se.isCompact ? a(e) : (x(), j()));
		var t = e.width,
			i = e.height,
			n = 0,
			r = 0;
		if (ne) {
			if ($) {
				var o = $.height(),
					s = {
						slider_image_padding_top: o
					};
				ne.setOptions(s)
			}
			ne.setSize(t, i), ne.setPosition(r, n)
		}
	}

	function v() {
		oe && oe.getElement().stop().fadeTo(se.fadeDuration, 0)
	}

	function b() {
		J && J.stop().fadeTo(se.fadeDuration, 0)
	}

	function y() {
		if (!se.lastMouseX) return !0;
		var e = {
				pageX: se.lastMouseX,
				pageY: se.lastMouseY
			},
			t = ne.isMouseInsideSlideImage(e);
		return t
	}

	function I(e, t) {
		return Z ? 1 == se.isArrowsOnHoverMode && t === !1 ? (1 == y(), !0) : void(e === !0 ? (Z.stop().fadeTo(0, 0), q.stop().fadeTo(0, 0)) : (Z.stop().fadeTo(se.fadeDuration, 0), q.stop().fadeTo(se.fadeDuration, 0))) : !1
	}

	function w() {
		if (!Z) return !0;
		if (0 == Z.is(":visible")) return !0;
		var e = Z.css("opacity");
		return 1 != e ? !0 : !1
	}

	function E(e, t) {
		return Z ? 1 == se.isArrowsOnHoverMode && t !== !0 && 1 == g() ? !0 : 1 == ne.isSwiping() ? !0 : (e !== !0 && (Z.stop(), q.stop()), Z.fadeTo(se.fadeDuration, 1), void q.fadeTo(se.fadeDuration, 1)) : !1
	}

	function T(e) {
		e !== !0 && K.stop(), K.fadeTo(se.fadeDuration, 1)
	}

	function S(e) {
		if (!oe) return !1;
		if (!e) var e = ne.getCurrentItem();
		oe.setTextPlain(e.title, e.description)
	}

	function P(e) {
		if (!J) return !1;
		if (!e) var e = ne.getCurrentItem();
		var t = ie.getNumItems(),
			i = e.index + 1;
		J.html(i + " / " + t)
	}

	function x() {
		return oe ? void oe.getElement().show().stop().fadeTo(se.fadeDuration, 1) : !1
	}

	function j() {
		J && J.stop().fadeTo(se.fadeDuration, 1)
	}

	function C() {
		return 0 == se.isCompact ? !0 : void p()
	}

	function A() {
		if (0 == se.isCompact) return !0;
		if (se.positionFrom = "onZoomChange", h(!1, !0), c(!1, !0), 1 == se.isCompact) {
			var e = ne.isCurrentSlideType("image") && 1 == ne.isCurrentImageInPlace();
			0 == e ? (v(), b()) : (se.positionFrom = "onZoomChange", x(), j())
		}
	}

	function M() {
		if (0 == se.isCompact) return !0;
		se.positionFrom = "onSliderAfterReturn", h(!0), c(!0);
		var e = u();
		0 == e && _(), x(), j()
	}

	function O(e, t) {
		return t = jQuery(t), 0 == se.isCompact ? !0 : 0 == ne.isSlideCurrent(t) ? !0 : (se.positionFrom = "onSliderAfterPutImage", h(!0), c(!0), void _())
	}

	function z() {
		var e = ne.getOptions(),
			t = e.slider_image_padding_top;
		if ($) {
			var i = $.height();
			i != t && r(i)
		}
		if (1 == se.isCompact) {
			if (S(), P(), se.positionFrom = "onSliderTransitionEnd", h(!0), c(!0), 0 == ne.isSlideActionActive()) {
				var n = u();
				0 == n && _()
			}
			x(), j()
		}
	}

	function L(e, t) {
		0 == se.isCompact ? (J && P(t), oe && (S(t), 0 == se.isRightNowOpened && (oe.positionElements(!1), o("onchange"), oe.positionPanel()))) : 0 == ne.isAnimating() && (oe && S(t), J && P(t)), 0 == se.isSliderChangedOnce && (se.isSliderChangedOnce = !0, te.trigger(ee.events.LIGHTBOX_INIT))
	}

	function H(e, t) {
		var i = ne.getSlideType();
		if ("image" != i && 0 == se.isCompact && ne.isSlideActionActive()) return !0;
		var n = ne.isPreloading();
		if (1 == n) return ee.close("slider"), !0;
		if (1 == ae.lightbox_close_on_emptyspace) {
			var r = ne.isMouseInsideSlideImage(t);
			0 == r && ee.close("slider_inside")
		}
	}

	function N() {
		m()
	}

	function k() {
		$ ? s() : J && J.hide(), Z && 1 == ae.lightbox_hide_arrows_onvideoplay && (Z.hide(), q.hide())
	}

	function R() {
		$ ? (l(), o("onStopVideo")) : J && J.show(), Z && 1 == ae.lightbox_hide_arrows_onvideoplay && (Z.show(), q.show())
	}

	function G(e, t, i) {
		var n = !1;
		switch (t) {
			case 27:
				1 == se.isOpened && ee.close("keypress");
				break;
			case 38:
			case 40:
			case 33:
			case 34:
				n = !0
		}
		1 == se.isOpened && 1 == n && i.preventDefault()
	}

	function D() {
		1 == se.isArrowsOnHoverMode && E(!1, !0)
	}

	function Q(e) {
		se.positionFrom = "hideCompactElements", 1 == se.isArrowsOnHoverMode && 1 == g() && I(!1, !0)
	}

	function W(e) {
		se.lastMouseX = e.pageX, se.lastMouseY = e.pageY;
		var t = w();
		1 == t && y() && 0 == ne.isAnimating() && (se.positionFrom = "onMouseMove", Z && 0 == Z.is(":animated") && E(!1, !0))
	}

	function B(e, t, i, n) {
		if (0 == se.isOpened) return !0;
		switch (ae.gallery_mousewheel_role) {
			default:
				case "zoom":
				var r = ne.getSlideType();
			"image" != r && e.preventDefault();
			break;
			case "none":
					e.preventDefault();
				break;
			case "advance":
					ie.onGalleryMouseWheel(e, t, i, n)
		}
	}

	function F() {
		if (X.on("touchstart", function (e) {
				e.preventDefault()
			}), X.on("touchend", function (e) {
				ee.close("overlay")
			}), re.addClassOnHover(q, "ug-arrow-hover"), re.addClassOnHover(Z, "ug-arrow-hover"), re.addClassOnHover(K), ie.setNextButton(q), ie.setPrevButton(Z), K.click(function () {
				ee.close("button")
			}), U.on(ie.events.ITEM_CHANGE, L), ne) {
			jQuery(ne).on(ne.events.TRANSITION_END, z), jQuery(ne).on(ne.events.CLICK, H);
			var e = ne.getVideoObject();
			jQuery(e).on(e.events.PLAY_START, k), jQuery(e).on(e.events.PLAY_STOP, R), jQuery(ne).on(ne.events.START_DRAG, C), jQuery(ne).on(ne.events.TRANSITION_START, C), jQuery(ne).on(ne.events.AFTER_DRAG_CHANGE, M), jQuery(ne).on(ne.events.AFTER_RETURN, M), jQuery(ne).on(ne.events.AFTER_PUT_IMAGE, O), jQuery(ne).on(ne.events.ZOOM_CHANGE, A), jQuery(ne).on(ne.events.IMAGE_MOUSEENTER, D), jQuery(ne).on(ne.events.IMAGE_MOUSELEAVE, Q)
		}
		jQuery(window).resize(function () {
			return 0 == se.isOpened ? !0 : void re.whenContiniousEventOver("lightbox_resize", N, 100)
		}), U.on(ie.events.GALLERY_KEYPRESS, G), 1 == se.isArrowsOnHoverMode && jQuery(document).bind("mousemove", W), V.on("mousewheel", B)
	}

	function Y() {
		se.isCompact = !1, t(), se.isArrowsInside = !1, se.isArrowsOnHoverMode = !1, ae = jQuery.extend({}, se.originalOptions), ae.lightbox_arrows_position = "sides", ne.setOptions(ae)
	}
	var U, V, X, Z, q, K, J, $, ee = this,
		te = jQuery(this),
		ie = new UniteGalleryMain,
		ne = new UGSlider,
		re = new UGFunctions,
		oe = new UGTextPanel,
		ae = {
			lightbox_type: "wide",
			lightbox_show_textpanel: !0,
			lightbox_textpanel_width: 550,
			lightbox_hide_arrows_onvideoplay: !0,
			lightbox_arrows_position: "sides",
			lightbox_arrows_offset: 10,
			lightbox_arrows_inside_offset: 10,
			lightbox_arrows_inside_alwayson: !1,
			lightbox_overlay_color: null,
			lightbox_overlay_opacity: 1,
			lightbox_top_panel_opacity: null,
			lightbox_show_numbers: !0,
			lightbox_numbers_size: null,
			lightbox_numbers_color: null,
			lightbox_numbers_padding_top: null,
			lightbox_numbers_padding_right: null,
			lightbox_compact_closebutton_offsetx: 1,
			lightbox_compact_closebutton_offsety: 1,
			lightbox_close_on_emptyspace: !0
		};
	this.events = {
		LIGHTBOX_INIT: "lightbox_init"
	};
	var se = {
			topPanelHeight: 44,
			initTextPanelHeight: 26,
			isOpened: !1,
			isRightNowOpened: !1,
			putSlider: !0,
			isCompact: !1,
			fadeDuration: 300,
			positionFrom: null,
			textPanelTop: null,
			textPanelLeft: null,
			isArrowsInside: !1,
			isArrowsOnHoverMode: !1,
			lastMouseX: null,
			lastMouseY: null,
			originalOptions: null,
			isSliderChangedOnce: !1,
			isTopPanelEnabled: !0
		},
		le = {
			lightbox_slider_controls_always_on: !0,
			lightbox_slider_enable_bullets: !1,
			lightbox_slider_enable_arrows: !1,
			lightbox_slider_enable_progress_indicator: !1,
			lightbox_slider_enable_play_button: !1,
			lightbox_slider_enable_fullscreen_button: !1,
			lightbox_slider_enable_zoom_panel: !1,
			lightbox_slider_enable_text_panel: !1,
			lightbox_slider_scale_mode_media: "down",
			lightbox_slider_scale_mode: "down",
			lightbox_slider_loader_type: 3,
			lightbox_slider_loader_color: "black",
			lightbox_slider_transition: "fade",
			lightbox_slider_image_padding_top: se.topPanelHeight,
			lightbox_slider_image_padding_bottom: 0,
			lightbox_slider_video_padding_top: 0,
			lightbox_slider_video_padding_bottom: 0,
			lightbox_textpanel_align: "middle",
			lightbox_textpanel_padding_top: 5,
			lightbox_textpanel_padding_bottom: 5,
			slider_video_constantsize: !1,
			lightbox_slider_image_border: !1,
			lightbox_textpanel_enable_title: !0,
			lightbox_textpanel_enable_description: !1,
			lightbox_textpanel_desc_style_as_title: !0,
			lightbox_textpanel_enable_bg: !1,
			video_enable_closebutton: !1,
			lightbox_slider_video_enable_closebutton: !1,
			video_youtube_showinfo: !1,
			lightbox_slider_enable_links: !1
		},
		ue = {
			lightbox_overlay_opacity: .6,
			lightbox_slider_image_border: !0,
			lightbox_slider_image_shadow: !0,
			lightbox_slider_image_padding_top: 30,
			lightbox_slider_image_padding_bottom: 30,
			slider_video_constantsize: !0,
			lightbox_textpanel_align: "bottom",
			lightbox_textpanel_title_text_align: "left",
			lightbox_textpanel_desc_text_align: "left",
			lightbox_textpanel_padding_left: 10,
			lightbox_textpanel_padding_right: 10
		};
	this.destroy = function () {
		if (jQuery(document).unbind("mousemove"), X.off("touchstart"), X.off("touchend"), K.off("click"), U.off(ie.events.ITEM_CHANGE), ne) {
			jQuery(ne).off(ne.events.TRANSITION_END), jQuery(ne).off(ne.events.CLICK), jQuery(ne).off(ne.events.START_DRAG), jQuery(ne).off(ne.events.TRANSITION_START), jQuery(ne).off(ne.events.AFTER_DRAG_CHANGE), jQuery(ne).off(ne.events.AFTER_RETURN);
			var e = ne.getVideoObject();
			jQuery(e).off(e.events.PLAY_START), jQuery(e).off(e.events.PLAY_STOP), jQuery(ne).on(ne.events.IMAGE_MOUSEENTER, D), jQuery(ne).on(ne.events.IMAGE_MOUSELEAVE, Q), ne.destroy()
		}
		jQuery(window).unbind("resize"), U.off(ie.events.GALLERY_KEYPRESS, G), V.off("mousewheel"), V.remove()
	}, this.open = function (e) {
		var t = ie.getItem(e);
		if (se.isOpened = !0, se.isRightNowOpened = !0, setTimeout(function () {
				se.isRightNowOpened = !1
			}, 100), ne && ne.setItem(t, "lightbox_open"), oe && oe.setTextPlain(t.title, t.description), X.stop().fadeTo(0, 0), V.show(), V.fadeTo(0, 1), X.stop().fadeTo(se.fadeDuration, ae.lightbox_overlay_opacity), m(), 1 == se.isCompact) {
			var i = ne.isPreloading();
			1 == i ? f() : 1 == se.isArrowsInside && (Z.hide(), q.hide())
		}
		ne && ne.startSlideAction(), U.trigger(ie.events.OPEN_LIGHTBOX, t)
	}, this.close = function (e) {
		se.isOpened = !1, 1 == se.isCompact && p(), ne && ne.stopSlideAction();
		var t = ne.getSlideType();
		"image" != t ? V.hide() : V.fadeTo(se.fadeDuration, 0, function () {
			V.hide()
		}), U.trigger(ie.events.CLOSE_LIGHTBOX)
	}, this.init = function (t, i) {
		e(t, i)
	}, this.putHtml = function () {
		var e = ie.isSmallWindow();
		e && 1 == se.isCompact && Y(), i()
	}, this.run = function () {
		n(), ne && ne.run(), F()
	}
}

function UGCarousel() {
	function e(e, t) {
		g_objects = e.getObjects(), W = e, H = jQuery(e), N = g_objects.g_objWrapper, k = g_objects.g_arrItems, U = jQuery.extend(U, t), F.setFixedMode(), F.setApproveClickFunction(L), F.init(e, U), Y = F.getObjThumbs(), U = F.getOptions(), V.initTileWidth = U.tile_width, V.initTileHeight = U.tile_height, V.tileWidth = U.tile_width
	}

	function t(e) {
		if (!e) var e = N;
		var t = "<div class='ug-carousel-wrapper'><div class='ug-carousel-inner'></div></div>";
		N.append(t), R = N.children(".ug-carousel-wrapper"), G = R.children(".ug-carousel-inner"), F.setHtml(G), Y.getThumbs().fadeTo(0, 1)
	}

	function i(e, t) {
		if (!t) var t = V.initTileHeight / V.initTileWidth * e;
		V.tileWidth = e;
		var i = {
			tile_width: e,
			tile_height: t
		};
		F.setOptions(i), U.tile_width = e, U.tile_height = t, F.resizeAllTiles(e), m(!0)
	}

	function n() {
		if (null === V.carouselMaxWidth) throw new Error("The carousel width not set");
		if (V.tileWidth < V.initTileWidth) {
			var e = V.carouselMaxWidth - 2 * U.carousel_padding;
			e > V.initTileWidth && (e = V.initTileWidth), i(e);
			var t = B.getNumItemsInSpace(V.carouselMaxWidth, e, U.carousel_space_between_tiles)
		} else {
			var t = B.getNumItemsInSpace(V.carouselMaxWidth, V.tileWidth, U.carousel_space_between_tiles);
			if (0 >= t) {
				t = 1;
				var e = V.carouselMaxWidth - 2 * U.carousel_padding;
				i(e)
			}
		}
		var n = B.getSpaceByNumItems(t, V.tileWidth, U.carousel_space_between_tiles);
		n += 2 * U.carousel_padding, R.width(n), 1 == V.isFirstTimeRun ? (z(), F.run(), jQuery.each(k, function (e, t) {
			t.objThumbWrapper.data("index", e), N.trigger(V.eventSizeChange, [t.objThumbWrapper, !0]), t.objTileOriginal = t.objThumbWrapper.clone(!0, !0)
		}), m(!0), 1 == U.carousel_autoplay && D.startAutoplay()) : (1 == U.carousel_autoplay && D.pauseAutoplay(), w(0, !1), 1 == U.carousel_autoplay && D.startAutoplay()), P(), V.isFirstTimeRun = !1
	}

	function r() {
		return B.getElementSize(G).left
	}

	function o(e) {
		return B.getMousePosition(e).pageX
	}

	function a() {
		var e = G.children(".ug-thumb-wrapper");
		return e
	}

	function s(e) {
		var t = B.getNumItemsInSpace(e, V.tileWidth, U.carousel_space_between_tiles);
		return t
	}

	function l() {
		return a().length
	}

	function u(e) {
		v(e);
		var t = a(),
			i = jQuery(t[e]);
		return i
	}

	function d() {
		return G.children(".ug-thumb-wrapper").first()
	}

	function _() {
		return G.children(".ug-thumb-wrapper").last()
	}

	function g(e, t, i) {
		var n = e.data("index");
		if (void 0 == n) throw new Error("every tile should have index!");
		for (var r = [], o = 0; t > o; o++) {
			if ("prev" == i) var a = W.getPrevItem(n, !0);
			else var a = W.getNextItem(n, !0);
			if (!a) throw new Error("the item to add is empty");
			var s = a.objTileOriginal.clone(!0, !0);
			n = a.index, s.addClass("cloned"), r.push(s)
		}
		return r
	}

	function c() {
		var e = B.getElementSize(R),
			t = B.getElementSize(G),
			i = t.width - e.width + t.left,
			n = V.sideSpace - i;
		return n
	}

	function h() {
		var e = -r(),
			t = V.sideSpace - e;
		return t
	}

	function p() {
		var e = B.getElementSize(R);
		return e.width
	}

	function f() {
		var e = p(),
			t = s(e);
		return t
	}

	function m(e) {
		if (!e) var e = !1;
		var t, i = a(),
			n = 0,
			r = 0;
		return jQuery.each(i, function (e, o) {
			o = jQuery(o), B.placeElement(o, n, 0);
			var a = B.getElementSize(o);
			n += a.width + U.carousel_space_between_tiles, r = Math.max(r, a.height), e == i.length - 1 && (t = a.right)
		}), G.width(t), r += 2 * U.carousel_padding, e === !0 && (G.height(r), R.height(r)), w(V.numCurrent, !1), t
	}

	function v(e) {
		if (e > a().length - 1) throw new Error("Wrogn tile number: " + e)
	}

	function b(e, t) {
		if ("left" == t) var i = d();
		else var i = _();
		var n = "left" == t ? "prev" : "next",
			r = g(i, e, n);
		jQuery.each(r, function (e, i) {
			"left" == t ? G.prepend(i) : G.append(i), N.trigger(V.eventSizeChange, i), F.loadTileImage(i)
		})
	}

	function y(e, t) {
		v(n);
		for (var i = a(), n = i.length, r = 0; e > r; r++) "left" == t ? jQuery(i[r]).remove() : jQuery(i[n - 1 - r]).remove()
	}

	function I(e) {
		var t = {
			left: e + "px"
		};
		G.css(t)
	}

	function w(e, t, i) {
		if (void 0 === t) {
			var t = !0;
			if (G.is(":animated")) return !0
		}
		var n = u(e),
			r = B.getElementSize(n),
			o = -r.left + U.carousel_padding,
			a = {
				left: o + "px"
			};
		if (t === !0) {
			var s = U.carousel_scroll_duration,
				l = U.carousel_scroll_easing;
			i === !0 && (s = V.scrollShortDuration, l = V.scrollShortEasing), G.stop(!0).animate(a, {
				duration: s,
				easing: l,
				queue: !1,
				complete: function () {
					V.numCurrent = e, S(!0)
				}
			})
		} else V.numCurrent = e, G.css(a)
	}

	function E() {
		var e = -r(),
			t = s(e),
			i = B.getElementSize(u(t)).left,
			n = B.getElementSize(u(t + 1)).left;
		return Math.abs(i - e) < Math.abs(n - e) ? t : t + 1
	}

	function T() {
		var e = E();
		w(e, !0, !0)
	}

	function S() {
		var e = h(),
			t = c(),
			i = 0,
			n = 0,
			r = 0,
			o = 0,
			a = l();
		if (e > V.spaceActionSize) i = s(e), b(i, "left"), V.numCurrent += i;
		else if (e < -V.spaceActionSize) {
			var r = s(Math.abs(e));
			y(r, "left"), V.numCurrent -= r
		}
		if (t > V.spaceActionSize ? (n = s(t), b(n, "right")) : t < -V.spaceActionSize && (o = s(Math.abs(t)), y(o, "right")), o > a) throw new Error("Can't remove more then num tiles");
		var u = !1;
		return (i || n || r || o) && (m(), u = !0), u
	}

	function P(e) {
		B.placeElement(G, 0, U.carousel_padding), S()
	}

	function x() {
		"left" == U.carousel_autoplay_direction ? D.scrollRight(1) : D.scrollLeft(1)
	}

	function j(e) {
		return 1 == V.touchActive ? !0 : (V.touchActive = !0, D.pauseAutoplay(), V.startTime = jQuery.now(), V.startMousePos = o(e), V.startInnerPos = r(), V.lastTime = V.startTime, V.lastMousePos = V.startMousePos, void B.storeEventData(e, V.storedEventID))
	}

	function C(e) {
		if (0 == V.touchActive) return !0;
		B.updateStoredEventData(e, V.storedEventID), e.preventDefault();
		var t = null;
		if (1 == U.carousel_vertical_scroll_ondrag && (t = B.handleScrollTop(V.storedEventID)), "vert" === t) return !0;
		V.lastMousePos = o(e);
		var i = V.lastMousePos - V.startMousePos,
			n = V.startInnerPos + i,
			r = i > 0 ? "prev" : "next",
			a = B.getElementSize(G).width;
		n > 0 && "prev" == r && (n /= 3), -a > n && "next" == r && (n = V.startInnerPos + i / 3), I(n)
	}

	function A(e) {
		return 0 == V.touchActive ? !0 : (V.touchActive = !1, T(), void D.unpauseAutoplay())
	}

	function M(e) {
		return 0 == U.carousel_autoplay_pause_onhover ? !0 : void(1 == V.isPlayMode && 0 == V.isPaused && D.pauseAutoplay())
	}

	function O(e) {
		return 0 == U.carousel_autoplay_pause_onhover ? !0 : void D.unpauseAutoplay()
	}

	function z() {
		F.initEvents(), R.bind("mousedown touchstart", j), jQuery("body").bind("mousemove touchmove", C), jQuery(window).add("body").bind("mouseup touchend", A), R.hover(M, O)
	}

	function L() {
		var e = V.lastTime - V.startTime,
			t = Math.abs(V.lastMousePos - V.startMousePos);
		return e > 300 ? !1 : t > 30 ? !1 : !0
	}
	var H, N, k, R, G, D = this,
		Q = jQuery(this),
		W = new UniteGalleryMain,
		B = new UGFunctions,
		F = new UGTileDesign,
		Y = new UGThumbsGeneral,
		U = {
			carousel_padding: 8,
			carousel_space_between_tiles: 20,
			carousel_navigation_numtiles: 3,
			carousel_scroll_duration: 500,
			carousel_scroll_easing: "easeOutCubic",
			carousel_autoplay: !0,
			carousel_autoplay_timeout: 3e3,
			carousel_autoplay_direction: "right",
			carousel_autoplay_pause_onhover: !0,
			carousel_vertical_scroll_ondrag: !1
		};
	this.events = {
		START_PLAY: "carousel_start_play",
		PAUSE_PLAY: "carousel_pause_play",
		STOP_PLAY: "carousel_stop_play"
	};
	var V = {
		eventSizeChange: "thumb_size_change",
		isFirstTimeRun: !0,
		carouselMaxWidth: null,
		tileWidth: 0,
		initTileWidth: 0,
		initTileHeight: 0,
		sideSpace: 1500,
		spaceActionSize: 500,
		numCurrent: 0,
		touchActive: !1,
		startInnerPos: 0,
		lastTime: 0,
		startTime: 0,
		startMousePos: 0,
		lastMousePos: 0,
		scrollShortDuration: 200,
		scrollShortEasing: "easeOutQuad",
		handle: null,
		isPlayMode: !1,
		isPaused: !1,
		storedEventID: "carousel"
	};
	this.startAutoplay = function () {
		V.isPlayMode = !0, V.isPaused = !1, Q.trigger(D.events.START_PLAY), V.handle && clearInterval(V.handle), V.handle = setInterval(x, U.carousel_autoplay_timeout)
	}, this.unpauseAutoplay = function () {
		return 0 == V.isPlayMode ? !0 : 0 == V.isPaused ? !0 : void D.startAutoplay()
	}, this.pauseAutoplay = function () {
		return 0 == V.isPlayMode ? !0 : (V.isPaused = !0, V.handle && clearInterval(V.handle), void Q.trigger(D.events.PAUSE_PLAY))
	}, this.stopAutoplay = function () {
		return 0 == V.isPlayMode ? !0 : (V.isPaused = !1, V.isPlayMode = !1, V.handle && clearInterval(V.handle), void Q.trigger(D.events.STOP_PLAY))
	}, this.destroy = function () {
		V.handle && clearInterval(V.handle), Q.off(D.events.START_PLAY), Q.off(D.events.STOP_PLAY), R.unbind("mousedown"), R.unbind("touchstart"), jQuery("body").unbind("mousemove"), jQuery("body").unbind("touchmove"), jQuery(window).add("body").unbind("mouseup").unbind("touchend"), R.off("mouseenter").off("mouseleave"), F.destroy()
	}, this.init = function (t, i, n) {
		n && this.setMaxWidth(n), e(t, i)
	}, this.setMaxWidth = function (e) {
		V.carouselMaxWidth = e
	}, this.setHtml = function (e) {
		t(e)
	}, this.getElement = function () {
		return R
	}, this.getObjTileDesign = function () {
		return F
	}, this.getEstimatedHeight = function () {
		var e = U.tile_height + 2 * U.carousel_padding;
		return e
	}, this.run = function () {
		n()
	}, this.scrollRight = function (e) {
		if (!e || "object" == typeof e) var e = U.carousel_navigation_numtiles;
		var t = f();
		e > t && (e = t);
		var i = V.numCurrent - e;
		0 >= i && (i = 0), w(i)
	}, this.scrollLeft = function (e) {
		if (!e || "object" == typeof e) var e = U.carousel_navigation_numtiles;
		var t = f();
		e > t && (e = t);
		var i = l(),
			n = V.numCurrent + e;
		n >= i && (n = i - 1), w(n)
	}, this.setScrollLeftButton = function (e) {
		B.setButtonMobileReady(e), B.setButtonOnClick(e, D.scrollLeft)
	}, this.setScrollRightButton = function (e) {
		B.setButtonMobileReady(e), B.setButtonOnClick(e, D.scrollRight)
	}, this.setPlayPauseButton = function (e) {
		B.setButtonMobileReady(e), 1 == V.isPlayMode && 0 == V.isPaused && e.addClass("ug-pause-icon"), Q.on(D.events.START_PLAY, function () {
			e.addClass("ug-pause-icon")
		}), Q.on(D.events.STOP_PLAY, function () {
			e.removeClass("ug-pause-icon")
		}), B.setButtonOnClick(e, function () {
			0 == V.isPlayMode || 1 == V.isPaused ? D.startAutoplay() : D.stopAutoplay()
		})
	}
}

function UGTabs() {
	function e(e, t) {
		u = e, a = jQuery(u), d = jQuery.extend(d, t), "select" == d.tabs_type ? l = jQuery(d.tabs_container) : s = jQuery(d.tabs_container + " .ug-tab")
	}

	function t() {
		o()
	}

	function i(e) {
		u.requestNewItems(e)
	}

	function n() {
		var e = d.tabs_class_selected,
			t = jQuery(this);
		if (t.hasClass(e)) return !0;
		s.not(t).removeClass(e), t.addClass(e);
		var n = t.data("catid");
		return n ? void i(n) : !0
	}

	function r() {
		var e = jQuery(this),
			t = e.val();
		return t ? void i(t) : !0
	}

	function o() {
		"select" == d.tabs_type ? l.change(r) : s.click(n)
	}
	var a, s, l, u = (jQuery(this), new UniteGalleryMain),
		d = (new UGFunctions, {
			tabs_type: "tabs",
			tabs_container: "#ug_tabs",
			tabs_class_selected: "ug-tab-selected"
		});
	this.events = {}, this.destroy = function () {
		l && l.off("change"), s && s.off("click")
	}, this.init = function (t, i) {
		e(t, i)
	}, this.run = function () {
		t()
	}
}

function UG_API(e) {
	function t(e) {
		var t = {
				index: e.index,
				title: e.title,
				description: e.description,
				urlImage: e.urlImage,
				urlThumb: e.urlThumb
			},
			i = e.objThumbImage.data();
		for (var n in i) {
			switch (n) {
				case "image":
				case "description":
					continue
			}
			t[n] = i[n]
		}
		return t
	}
	var i, n = this,
		r = (jQuery(n), new UniteGalleryMain),
		o = [];
	r = e, i = jQuery(e), this.events = {
		API_INIT_FUNCTIONS: "api_init",
		API_ON_EVENT: "api_on_event"
	}, this.on = function (e, a, s) {
		switch (s !== !0 && o.push({
			event: e,
			func: a
		}), e) {
			case "item_change":
				i.on(r.events.ITEM_CHANGE, function () {
					var e = r.getSelectedItem(),
						i = t(e);
					a(i.index, i)
				});
				break;
			case "resize":
				i.on(r.events.SIZE_CHANGE, a);
				break;
			case "enter_fullscreen":
				i.on(r.events.ENTER_FULLSCREEN, a);
				break;
			case "exit_fullscreen":
				i.on(r.events.EXIT_FULLSCREEN, a);
				break;
			case "play":
				i.on(r.events.START_PLAY, a);
				break;
			case "stop":
				i.on(r.events.STOP_PLAY, a);
				break;
			case "pause":
				i.on(r.events.PAUSE_PLAYING, a);
				break;
			case "continue":
				i.on(r.events.CONTINUE_PLAYING, a);
				break;
			case "open_lightbox":
				i.on(r.events.OPEN_LIGHTBOX, a);
				break;
			case "close_lightbox":
				i.on(r.events.CLOSE_LIGHTBOX, a);
				break;
			default:
				console && console.log("wrong api event: " + e)
		}
		i.trigger(n.events.API_ON_EVENT, [e, a])
	}, this.play = function () {
		r.startPlayMode()
	}, this.stop = function () {
		r.stopPlayMode()
	}, this.togglePlay = function () {
		r.togglePlayMode()
	}, this.enterFullscreen = function () {
		r.toFullScreen()
	}, this.exitFullscreen = function () {
		r.exitFullScreen()
	}, this.toggleFullscreen = function () {
		r.toggleFullscreen()
	}, this.resetZoom = function () {
		var e = r.getObjSlider();
		return e ? void e.zoomBack() : !1
	}, this.zoomIn = function () {
		var e = r.getObjSlider();
		return e ? void e.zoomIn() : !1
	}, this.zoomOut = function () {
		var e = r.getObjSlider();
		return e ? void e.zoomOut() : !1
	}, this.nextItem = function () {
		r.nextItem()
	}, this.prevItem = function () {
		r.prevItem()
	}, this.selectItem = function (e) {
		r.selectItem(e)
	}, this.resize = function (e, t) {
		t ? r.resize(e, t) : r.resize(e)
	}, this.getItem = function (e) {
		var i = r.getItem(e),
			n = t(i);
		return n
	}, this.getNumItems = function () {
		var e = r.getNumItems();
		return e
	}, this.reloadGallery = function (e) {
		if (!e) var e = {};
		r.run(null, e), o.map(function (e) {
			n.on(e.event, e.func, !0)
		})
	}, this.destroy = function () {
		r.destroy()
	}, i.trigger(n.events.API_INIT_FUNCTIONS, n)
}

function UGLoadMore() {
	function e() {
		return o = jQuery("#" + _.loadmore_container), 0 == o.length ? !1 : (a = o.find(".ug-loadmore-button"), 0 == a.length ? !1 : (s = o.find(".ug-loadmore-loader"), 0 == s.length ? !1 : (l = o.find(".ug-loadmore-error"), 0 == l.length ? !1 : void(d.isInited = !0))))
	}

	function t() {
		o.show()
	}

	function i() {
		a.hide(), s.show();
		var e = {
			numitems: u.getNumItems()
		};
		u.ajaxRequest("front_loadmore", e, function (e) {
			s.hide();
			var t = e.html_items,
				i = e.show_loadmore;
			1 == i ? (a.blur().show(), s.hide()) : o.hide(), u.addItems(t)
		}, function (e) {
			e = "Ajax Error!" + e, s.hide(), l.show(), l.html(e)
		})
	}

	function n() {
		u.onEvent("tiles_first_placed", t), a.click(i)
	}
	var r, o, a, s, l, u = (jQuery(this), new UniteGalleryMain),
		d = (new UGFunctions, {
			isInited: !1
		}),
		_ = {
			loadmore_container: "ug_loadmore_wrapper"
		};
	this.events = {}, this.destroy = function () {
		return 0 == d.isInited ? !1 : void 0
	}, this.init = function (t, i) {
		return u = t, r = jQuery(u), _ = jQuery.extend(_, i), e(), 0 == d.isInited ? (trace("load more not inited, something is wrong"), !1) : void n()
	}
}
var g_ugFunctions = new UGFunctions;
! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
	function t(t) {
		var a = t || window.event,
			s = l.call(arguments, 1),
			u = 0,
			d = 0,
			_ = 0,
			g = 0;
		if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (_ = -1 * a.detail), "wheelDelta" in a && (_ = a.wheelDelta), "wheelDeltaY" in a && (_ = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * _, _ = 0), u = 0 === _ ? d : _, "deltaY" in a && (_ = -1 * a.deltaY, u = _), "deltaX" in a && (d = a.deltaX, 0 === _ && (u = -1 * d)), 0 !== _ || 0 !== d) {
			if (1 === a.deltaMode) {
				var c = e.data(this, "mousewheel-line-height");
				u *= c, _ *= c, d *= c
			} else if (2 === a.deltaMode) {
				var h = e.data(this, "mousewheel-page-height");
				u *= h, _ *= h, d *= h
			}
			return g = Math.max(Math.abs(_), Math.abs(d)), (!o || o > g) && (o = g, n(a, g) && (o /= 40)), n(a, g) && (u /= 40, d /= 40, _ /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), _ = Math[_ >= 1 ? "floor" : "ceil"](_ / o), t.deltaX = d, t.deltaY = _, t.deltaFactor = o, t.deltaMode = 0, s.unshift(t, u, d, _), r && clearTimeout(r), r = setTimeout(i, 200), (e.event.dispatch || e.event.handle).apply(this, s)
		}
	}

	function i() {
		o = null
	}

	function n(e, t) {
		return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
	}
	var r, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		l = Array.prototype.slice;
	if (e.event.fixHooks)
		for (var u = a.length; u;) e.event.fixHooks[a[--u]] = e.event.mouseHooks;
	var d = e.event.special.mousewheel = {
		version: "3.1.9",
		setup: function () {
			if (this.addEventListener)
				for (var i = s.length; i;) this.addEventListener(s[--i], t, !1);
			else this.onmousewheel = t;
			e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var e = s.length; e;) this.removeEventListener(s[--e], t, !1);
			else this.onmousewheel = null
		},
		getLineHeight: function (t) {
			return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
		},
		getPageHeight: function (t) {
			return e(t).height()
		},
		settings: {
			adjustOldDeltas: !0
		}
	};
	e.fn.extend({
		mousewheel: function (e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function (e) {
			return this.unbind("mousewheel", e)
		}
	})
}),
function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], function (t) {
		return e(t)
	}) : "object" == typeof module && "object" == typeof module.exports ? exports = e(require("jquery")) : e(jQuery)
}(function (e) {
	function t(e) {
		var t = 7.5625,
			i = 2.75;
		return 1 / i > e ? t * e * e : 2 / i > e ? t * (e -= 1.5 / i) * e + .75 : 2.5 / i > e ? t * (e -= 2.25 / i) * e + .9375 : t * (e -= 2.625 / i) * e + .984375
	}
	e.easing.jswing = e.easing.swing;
	var i = Math.pow,
		n = Math.sqrt,
		r = Math.sin,
		o = Math.cos,
		a = Math.PI,
		s = 1.70158,
		l = 1.525 * s,
		u = s + 1,
		d = 2 * a / 3,
		_ = 2 * a / 4.5;
	e.extend(e.easing, {
		def: "easeOutQuad",
		swing: function (t) {
			return e.easing[e.easing.def](t)
		},
		easeInQuad: function (e) {
			return e * e
		},
		easeOutQuad: function (e) {
			return 1 - (1 - e) * (1 - e)
		},
		easeInOutQuad: function (e) {
			return .5 > e ? 2 * e * e : 1 - i(-2 * e + 2, 2) / 2
		},
		easeInCubic: function (e) {
			return e * e * e
		},
		easeOutCubic: function (e) {
			return 1 - i(1 - e, 3)
		},
		easeInOutCubic: function (e) {
			return .5 > e ? 4 * e * e * e : 1 - i(-2 * e + 2, 3) / 2
		},
		easeInQuart: function (e) {
			return e * e * e * e
		},
		easeOutQuart: function (e) {
			return 1 - i(1 - e, 4)
		},
		easeInOutQuart: function (e) {
			return .5 > e ? 8 * e * e * e * e : 1 - i(-2 * e + 2, 4) / 2
		},
		easeInQuint: function (e) {
			return e * e * e * e * e
		},
		easeOutQuint: function (e) {
			return 1 - i(1 - e, 5)
		},
		easeInOutQuint: function (e) {
			return .5 > e ? 16 * e * e * e * e * e : 1 - i(-2 * e + 2, 5) / 2
		},
		easeInSine: function (e) {
			return 1 - o(e * a / 2)
		},
		easeOutSine: function (e) {
			return r(e * a / 2)
		},
		easeInOutSine: function (e) {
			return -(o(a * e) - 1) / 2
		},
		easeInExpo: function (e) {
			return 0 === e ? 0 : i(2, 10 * e - 10)
		},
		easeOutExpo: function (e) {
			return 1 === e ? 1 : 1 - i(2, -10 * e)
		},
		easeInOutExpo: function (e) {
			return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? i(2, 20 * e - 10) / 2 : (2 - i(2, -20 * e + 10)) / 2
		},
		easeInCirc: function (e) {
			return 1 - n(1 - i(e, 2))
		},
		easeOutCirc: function (e) {
			return n(1 - i(e - 1, 2))
		},
		easeInOutCirc: function (e) {
			return .5 > e ? (1 - n(1 - i(2 * e, 2))) / 2 : (n(1 - i(-2 * e + 2, 2)) + 1) / 2
		},
		easeInElastic: function (e) {
			return 0 === e ? 0 : 1 === e ? 1 : -i(2, 10 * e - 10) * r((10 * e - 10.75) * d)
		},
		easeOutElastic: function (e) {
			return 0 === e ? 0 : 1 === e ? 1 : i(2, -10 * e) * r((10 * e - .75) * d) + 1
		},
		easeInOutElastic: function (e) {
			return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? -(i(2, 20 * e - 10) * r((20 * e - 11.125) * _)) / 2 : i(2, -20 * e + 10) * r((20 * e - 11.125) * _) / 2 + 1
		},
		easeInBack: function (e) {
			return u * e * e * e - s * e * e
		},
		easeOutBack: function (e) {
			return 1 + u * i(e - 1, 3) + s * i(e - 1, 2)
		},
		easeInOutBack: function (e) {
			return .5 > e ? i(2 * e, 2) * (2 * (l + 1) * e - l) / 2 : (i(2 * e - 2, 2) * ((l + 1) * (2 * e - 2) + l) + 2) / 2
		},
		easeInBounce: function (e) {
			return 1 - t(1 - e)
		},
		easeOutBounce: t,
		easeInOutBounce: function (e) {
			return .5 > e ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2
		}
	})
}), ! function (e, t) {
	function i(e, t, i) {
		var n = _[t.type] || {};
		return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
	}

	function n(t) {
		var i = u(),
			n = i._rgba = [];
		return t = t.toLowerCase(), h(l, function (e, r) {
			var o, a = r.re.exec(t),
				s = a && r.parse(a),
				l = r.space || "rgba";
			return s ? (o = i[l](s), i[d[l].cache] = o[d[l].cache], n = i._rgba = o._rgba, !1) : void 0
		}), n.length ? ("0,0,0,0" === n.join() && e.extend(n, o.transparent), i) : o[t]
	}

	function r(e, t, i) {
		return i = (i + 1) % 1, 1 > 6 * i ? e + (t - e) * i * 6 : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e
	}
	if ("undefined" == typeof e.cssHooks) return !1;
	var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
		s = /^([\-+])=\s*(\d+\.?\d*)/,
		l = [{
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function (e) {
				return [e[1], e[2], e[3], e[4]]
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function (e) {
				return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
			}
		}, {
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function (e) {
				return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
			}
		}, {
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function (e) {
				return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function (e) {
				return [e[1], e[2] / 100, e[3] / 100, e[4]]
			}
		}],
		u = e.Color = function (t, i, n, r) {
			return new e.Color.fn.parse(t, i, n, r)
		},
		d = {
			rgba: {
				props: {
					red: {
						idx: 0,
						type: "byte"
					},
					green: {
						idx: 1,
						type: "byte"
					},
					blue: {
						idx: 2,
						type: "byte"
					}
				}
			},
			hsla: {
				props: {
					hue: {
						idx: 0,
						type: "degrees"
					},
					saturation: {
						idx: 1,
						type: "percent"
					},
					lightness: {
						idx: 2,
						type: "percent"
					}
				}
			}
		},
		_ = {
			"byte": {
				floor: !0,
				max: 255
			},
			percent: {
				max: 1
			},
			degrees: {
				mod: 360,
				floor: !0
			}
		},
		g = u.support = {},
		c = e("<p>")[0],
		h = e.each;
	c.style.cssText = "background-color:rgba(1,1,1,.5)", g.rgba = c.style.backgroundColor.indexOf("rgba") > -1, h(d, function (e, t) {
		t.cache = "_" + e, t.props.alpha = {
			idx: 3,
			type: "percent",
			def: 1
		}
	}), u.fn = e.extend(u.prototype, {
		parse: function (r, a, s, l) {
			if (r === t) return this._rgba = [null, null, null, null], this;
			(r.jquery || r.nodeType) && (r = e(r).css(a), a = t);
			var _ = this,
				g = e.type(r),
				c = this._rgba = [];
			return a !== t && (r = [r, a, s, l], g = "array"), "string" === g ? this.parse(n(r) || o._default) : "array" === g ? (h(d.rgba.props, function (e, t) {
				c[t.idx] = i(r[t.idx], t)
			}), this) : "object" === g ? (r instanceof u ? h(d, function (e, t) {
				r[t.cache] && (_[t.cache] = r[t.cache].slice())
			}) : h(d, function (t, n) {
				var o = n.cache;
				h(n.props, function (e, t) {
					if (!_[o] && n.to) {
						if ("alpha" === e || null == r[e]) return;
						_[o] = n.to(_._rgba)
					}
					_[o][t.idx] = i(r[e], t, !0)
				}), _[o] && e.inArray(null, _[o].slice(0, 3)) < 0 && (_[o][3] = 1, n.from && (_._rgba = n.from(_[o])))
			}), this) : void 0
		},
		is: function (e) {
			var t = u(e),
				i = !0,
				n = this;
			return h(d, function (e, r) {
				var o, a = t[r.cache];
				return a && (o = n[r.cache] || r.to && r.to(n._rgba) || [], h(r.props, function (e, t) {
					return null != a[t.idx] ? i = a[t.idx] === o[t.idx] : void 0
				})), i
			}), i
		},
		_space: function () {
			var e = [],
				t = this;
			return h(d, function (i, n) {
				t[n.cache] && e.push(i)
			}), e.pop()
		},
		transition: function (e, t) {
			var n = u(e),
				r = n._space(),
				o = d[r],
				a = 0 === this.alpha() ? u("transparent") : this,
				s = a[o.cache] || o.to(a._rgba),
				l = s.slice();
			return n = n[o.cache], h(o.props, function (e, r) {
				var o = r.idx,
					a = s[o],
					u = n[o],
					d = _[r.type] || {};
				null !== u && (null === a ? l[o] = u : (d.mod && (u - a > d.mod / 2 ? a += d.mod : a - u > d.mod / 2 && (a -= d.mod)), l[o] = i((u - a) * t + a, r)))
			}), this[r](l)
		},
		blend: function (t) {
			if (1 === this._rgba[3]) return this;
			var i = this._rgba.slice(),
				n = i.pop(),
				r = u(t)._rgba;
			return u(e.map(i, function (e, t) {
				return (1 - n) * r[t] + n * e
			}))
		},
		toRgbaString: function () {
			var t = "rgba(",
				i = e.map(this._rgba, function (e, t) {
					return null == e ? t > 2 ? 1 : 0 : e
				});
			return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
		},
		toHslaString: function () {
			var t = "hsla(",
				i = e.map(this.hsla(), function (e, t) {
					return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
				});
			return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
		},
		toHexString: function (t) {
			var i = this._rgba.slice(),
				n = i.pop();
			return t && i.push(~~(255 * n)), "#" + e.map(i, function (e) {
				return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
			}).join("")
		},
		toString: function () {
			return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
		}
	}), u.fn.parse.prototype = u.fn, d.hsla.to = function (e) {
		if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
		var t, i, n = e[0] / 255,
			r = e[1] / 255,
			o = e[2] / 255,
			a = e[3],
			s = Math.max(n, r, o),
			l = Math.min(n, r, o),
			u = s - l,
			d = s + l,
			_ = .5 * d;
		return t = l === s ? 0 : n === s ? 60 * (r - o) / u + 360 : r === s ? 60 * (o - n) / u + 120 : 60 * (n - r) / u + 240, i = 0 === u ? 0 : .5 >= _ ? u / d : u / (2 - d), [Math.round(t) % 360, i, _, null == a ? 1 : a]
	}, d.hsla.from = function (e) {
		if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
		var t = e[0] / 360,
			i = e[1],
			n = e[2],
			o = e[3],
			a = .5 >= n ? n * (1 + i) : n + i - n * i,
			s = 2 * n - a;
		return [Math.round(255 * r(s, a, t + 1 / 3)), Math.round(255 * r(s, a, t)), Math.round(255 * r(s, a, t - 1 / 3)), o]
	}, h(d, function (n, r) {
		var o = r.props,
			a = r.cache,
			l = r.to,
			d = r.from;
		u.fn[n] = function (n) {
			if (l && !this[a] && (this[a] = l(this._rgba)), n === t) return this[a].slice();
			var r, s = e.type(n),
				_ = "array" === s || "object" === s ? n : arguments,
				g = this[a].slice();
			return h(o, function (e, t) {
				var n = _["object" === s ? e : t.idx];
				null == n && (n = g[t.idx]), g[t.idx] = i(n, t)
			}), d ? (r = u(d(g)), r[a] = g, r) : u(g)
		}, h(o, function (t, i) {
			u.fn[t] || (u.fn[t] = function (r) {
				var o, a = e.type(r),
					l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : n,
					u = this[l](),
					d = u[i.idx];
				return "undefined" === a ? d : ("function" === a && (r = r.call(this, d), a = e.type(r)), null == r && i.empty ? this : ("string" === a && (o = s.exec(r), o && (r = d + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), u[i.idx] = r, this[l](u)))
			})
		})
	}), u.hook = function (t) {
		var i = t.split(" ");
		h(i, function (t, i) {
			e.cssHooks[i] = {
				set: function (t, r) {
					var o, a, s = "";
					if ("transparent" !== r && ("string" !== e.type(r) || (o = n(r)))) {
						if (r = u(o || r), !g.rgba && 1 !== r._rgba[3]) {
							for (a = "backgroundColor" === i ? t.parentNode : t;
								("" === s || "transparent" === s) && a && a.style;) try {
								s = e.css(a, "backgroundColor"), a = a.parentNode
							} catch (l) {}
							r = r.blend(s && "transparent" !== s ? s : "_default")
						}
						r = r.toRgbaString()
					}
					try {
						t.style[i] = r
					} catch (l) {}
				}
			}, e.fx.step[i] = function (t) {
				t.colorInit || (t.start = u(t.elem, i), t.end = u(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
			}
		})
	}, u.hook(a), e.cssHooks.borderColor = {
		expand: function (e) {
			var t = {};
			return h(["Top", "Right", "Bottom", "Left"], function (i, n) {
				t["border" + n + "Color"] = e
			}), t
		}
	}, o = e.Color.names = {
		aqua: "#00ffff",
		black: "#000000",
		blue: "#0000ff",
		fuchsia: "#ff00ff",
		gray: "#808080",
		green: "#008000",
		lime: "#00ff00",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		purple: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		teal: "#008080",
		white: "#ffffff",
		yellow: "#ffff00",
		transparent: [null, null, null, 0],
		_default: "#ffffff"
	}
}(jQuery), ! function (e) {
	function t() {
		try {
			var i = this === document ? e(this) : e(this).contents()
		} catch (n) {
			return !1
		}
		i.mousemove(function (t) {
			e.mlp = {
				x: t.pageX,
				y: t.pageY
			}
		}), i.find("iframe").on("load", t)
	}
	e.mlp = {
		x: 0,
		y: 0
	}, e(t), e.fn.ismouseover = function () {
		var t = !1;
		return this.eq(0).each(function () {
			var i = e(this).is("iframe") ? e(this).contents().find("body") : e(this),
				n = i.offset();
			t = n.left <= e.mlp.x && n.left + i.outerWidth() > e.mlp.x && n.top <= e.mlp.y && n.top + i.outerHeight() > e.mlp.y
		}), t
	}
}(jQuery);
var g_ugYoutubeAPI = new UGYoutubeAPI,
	g_ugVimeoAPI = new UGVimeoAPI,
	g_ugHtml5MediaAPI = new UGHtml5MediaAPI,
	g_ugSoundCloudAPI = new UGSoundCloudAPI,
	g_ugWistiaAPI = new UGWistiaAPI;
jQuery.fn.unitegallery = function (e) {
	var t = jQuery(this),
		i = "#" + t.attr("id");
	if (!e) var e = {};
	var n = new UniteGalleryMain;
	n.run(i, e);
	var r = new UG_API(n);
	return r
};

function UGTheme_tiles() {
	function e(e, n) {
		p = e, T = jQuery.extend(T, E), T = jQuery.extend(T, n), t(), p.setOptions(T), p.setFreestyleMode(), d = e.getObjects(), l = jQuery(e), _ = d.g_objWrapper, c.init(e, T), f.init(e, T), y = c.getObjTileDesign()
	}

	function t() {
		switch (1 == T.theme_enable_preloader && (v.showPreloader = !0), T.theme_appearance_order) {
			default:
				case "normal":
				break;
			case "shuffle":
					p.shuffleItems();
				break;
			case "keep":
					T.tiles_keep_order = !0
		}
	}

	function n() {
		_.addClass("ug-theme-tiles"), _.append("<div class='ug-tiles-wrapper' style='position:relative'></div>"), 1 == v.showPreloader && (_.append("<div class='ug-tiles-preloader ug-preloader-trans'></div>"), h = _.children(".ug-tiles-preloader"), h.fadeTo(0, 0)), g = _.children(".ug-tiles-wrapper"), T.theme_gallery_padding && _.css({
			"padding-left": T.theme_gallery_padding + "px",
			"padding-right": T.theme_gallery_padding + "px"
		}), c.setHtml(g), f.putHtml()
	}

	function i() {
		h && (h.fadeTo(0, 1), _.height(T.theme_preloading_height), m.placeElement(h, "center", T.theme_preloader_vertpos)), u(), c.run(), f.run()
	}

	function r() {
		n(), i()
	}

	function o(e, t) {
		t = jQuery(t);
		var n = y.getItemByTile(t),
			i = n.index;
		f.open(i)
	}

	function s() {
		if (g.hide(), h) {
			h.show();
			var e = m.getElementSize(h),
				t = e.bottom + 30;
			_.height(t)
		}
	}

	function a() {
		null !== T.theme_auto_open && (f.open(T.theme_auto_open), T.theme_auto_open = null)
	}

	function u() {
		h && p.onEvent(c.events.TILES_FIRST_PLACED, function () {
			_.height("auto"), h.hide()
		}), jQuery(y).on(y.events.TILE_CLICK, o), l.on(p.events.GALLERY_BEFORE_REQUEST_ITEMS, s), jQuery(f).on(f.events.LIGHTBOX_INIT, a)
	}
	var l, d, _, h, g, p = new UniteGalleryMain,
		c = new UGTiles,
		f = new UGLightbox,
		m = new UGFunctions,
		y = new UGTileDesign,
		T = {
			theme_enable_preloader: !0,
			theme_preloading_height: 200,
			theme_preloader_vertpos: 100,
			theme_gallery_padding: 0,
			theme_appearance_order: "normal",
			theme_auto_open: null
		},
		E = {
			gallery_width: "100%"
		},
		v = {
			showPreloader: !1
		};
	this.destroy = function () {
		jQuery(y).off(y.events.TILE_CLICK), p.destroyEvent(c.events.TILES_FIRST_PLACED), l.off(p.events.GALLERY_BEFORE_REQUEST_ITEMS), jQuery(f).off(f.events.LIGHTBOX_INIT), c.destroy(), f.destroy()
	}, this.run = function () {
		r()
	}, this.addItems = function () {
		c.runNewItems()
	}, this.init = function (t, n) {
		e(t, n)
	}
}
"undefined" != typeof g_ugFunctions ? g_ugFunctions.registerTheme("default") : jQuery(document).ready(function () {
	g_ugFunctions.registerTheme("default")
}), "undefined" != typeof g_ugFunctions ? g_ugFunctions.registerTheme("tiles") : jQuery(document).ready(function () {
	g_ugFunctions.registerTheme("tiles")
});

/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JÃ¶rn Zaefferer; Licensed MIT */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	a.extend(a.fn, {
		validate: function (b) {
			if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
				c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.on("submit.validate", function (b) {
				function d() {
					var d, e;
					return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
				}
				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function () {
			var b, c, d;
			return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
				b = c.element(this) && b, d = d.concat(c.errorList)
			}), c.errorList = d), b
		},
		rules: function (b, c) {
			var d, e, f, g, h, i, j = this[0];
			if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
				case "add":
					a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
					break;
				case "remove":
					return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
						i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
					}), i) : (delete e[j.name], f)
			}
			return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
				required: h
			}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
				remote: h
			})), g
		}
	}), a.extend(a.expr[":"], {
		blank: function (b) {
			return !a.trim("" + a(b).val())
		},
		filled: function (b) {
			return !!a.trim("" + a(b).val())
		},
		unchecked: function (b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function (b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function (b, c) {
		return 1 === arguments.length ? function () {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function (a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function (b, c) {
				var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
			},
			onclick: function (a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function (b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function b(b) {
					var c = a.data(this.form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function (b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function (b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function () {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function () {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function (b) {
				var c = this.clean(b),
					d = this.validationTargetFor(c),
					e = !0;
				return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
			},
			showErrors: function (b) {
				if (b) {
					a.extend(this.errorMap, b), this.errorList = [];
					for (var c in b) this.errorList.push({
						message: b[c],
						element: this.findByName(c)[0]
					});
					this.successList = a.grep(this.successList, function (a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function () {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
				var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				if (this.settings.unhighlight)
					for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
				else c.removeClass(this.settings.errorClass)
			},
			numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			},
			objectLength: function (a) {
				var b, c = 0;
				for (b in a) c++;
				return c
			},
			hideErrors: function () {
				this.hideThese(this.toHide)
			},
			hideThese: function (a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function () {
				return 0 === this.size()
			},
			size: function () {
				return this.errorList.length
			},
			focusInvalid: function () {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {}
			},
			findLastActive: function () {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function (a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function () {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
					return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
				})
			},
			clean: function (b) {
				return a(b)[0]
			},
			errors: function () {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			reset: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
			},
			prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function (a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function (b) {
				var c, d = a(b),
					e = b.type;
				return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function (b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f = a(b).rules(),
					g = a.map(f, function (a, b) {
						return b
					}).length,
					h = !1,
					i = this.elementValue(b);
				for (d in f) {
					e = {
						method: d,
						parameters: f[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
							h = !0;
							continue
						}
						if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (j) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
					}
				}
				if (!h) return this.objectLength(f) && this.successList.push(b), !0
			},
			customDataMessage: function (b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function (a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function () {
				for (var a = 0; a < arguments.length; a++)
					if (void 0 !== arguments[a]) return arguments[a];
				return void 0
			},
			defaultMessage: function (b, c) {
				return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
			},
			formatAndAdd: function (b, c) {
				var d = this.defaultMessage(b, c.method),
					e = /\$?\{(\d+)\}/g;
				"function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
					message: d,
					element: b,
					method: c.method
				}), this.errorMap[b.name] = d, this.submitted[b.name] = d
			},
			addWrapper: function (a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function () {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function () {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function () {
				return a(this.errorList).map(function () {
					return this.element
				})
			},
			showLabel: function (b, c) {
				var d, e, f, g = this.errorsFor(b),
					h = this.idOrName(b),
					i = a(b).attr("aria-describedby");
				g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
					c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
				}))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
			},
			errorsFor: function (b) {
				var c = this.idOrName(b),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			idOrName: function (a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function (b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function (a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function (b) {
				return a(this.currentForm).find("[name='" + b + "']")
			},
			getLength: function (b, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function (a, b) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
			},
			dependTypes: {
				"boolean": function (a) {
					return a
				},
				string: function (b, c) {
					return !!a(b, c.form).length
				},
				"function": function (a, b) {
					return a(b)
				}
			},
			optional: function (b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function (a) {
				this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
			},
			stopRequest: function (b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function (b) {
				return a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, "remote")
				})
			},
			destroy: function () {
				this.resetForm(), a(this.currentForm).off(".validate").removeData("validator")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function (b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function (b) {
			var c = {},
				d = a(b).attr("class");
			return d && a.each(d.split(" "), function () {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		normalizeAttributeRule: function (a, b, c, d) {
			/min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
		},
		attributeRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
			return e
		},
		staticRules: function (b) {
			var c = {},
				d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function (b, c) {
			return a.each(b, function (d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case "string":
							f = !!a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
				}
			}), a.each(b, function (d, e) {
				b[d] = a.isFunction(e) ? e(c) : e
			}), a.each(["minlength", "maxlength"], function () {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function () {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function (b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function () {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function (b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function (b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
			},
			email: function (a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function (a, b) {
				return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
			},
			date: function (a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function (a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function (a, b) {
				return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function (a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			creditcard: function (a, b) {
				if (this.optional(b)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(a)) return !1;
				var c, d, e = 0,
					f = 0,
					g = !1;
				if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
				for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
				return e % 10 === 0
			},
			minlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || d >= e
			},
			rangelength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function (a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function (a, b, c) {
				return this.optional(b) || c >= a
			},
			range: function (a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			equalTo: function (b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function () {
					a(c).valid()
				}), b === e.val()
			},
			remote: function (b, c, d) {
				if (this.optional(c)) return "dependency-mismatch";
				var e, f, g = this.previousValue(c);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
					url: d
				} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: f,
					context: e.currentForm,
					success: function (d) {
						var f, h, i, j = d === !0 || "true" === d;
						e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	});
	var b, c = {};
	a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function (d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	})
});