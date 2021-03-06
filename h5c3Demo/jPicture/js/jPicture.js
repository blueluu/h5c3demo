/*!
 * jPicture v1.0.0
 *
 * Copyright 2017, Frank Chao
 * Released under the MIT license
 *
 * Released on: July 04, 2017
 */
!
function(c) {
	if ("undefined" === typeof jQuery) throw Error("jPicture's Javascript requires jQuery !");
	"function" === typeof define && define.amd ? define(["jquery"],
	function(d) {
		return c(d)
	}) : "object" === typeof module && "object" === typeof module.exports ? exports = c(require("jquery")) : c(jQuery)
} (function(c) {
	var d = c.fn.jquery.split(".");
	if (1 === ~~d[0] && 11 > ~~d[1]) throw Error("jPicture's Javascript requires at least jQuery v1.11.0 !");
	window.jPicture = function(d, m) {
		var x = navigator.userAgent.toLowerCase().match(/(windows nt|macintosh)/) ? !0 : !1;
		c(function() {
			c(d).each(function() {
				function d(a) {
					"fade" == n && (a = -1 == a ? f - 1 : a == f ? 0 : a, l.eq(a).stop().fadeIn(700).siblings().stop().fadeOut(700,
					function() {
						v(a);
						b.data("cacheIndex", a)
					}));
					"slide" == n && (c.easing.easeInOutQuart = function(a, b, c, d, e) {
						return 1 > (b /= e / 2) ? d / 2 * b * b * b * b + c: -d / 2 * ((b -= 2) * b * b * b - 2) + c
					},
					e.is(":animated") || e.stop().animate({
						left: -(g * a + g) + "px"
					},
					700, "easeInOutQuart",
					function() { - 1 == a && (e.css("left", "-" + g * f + "px"), a = f - 1);
						a == f && (e.css("left", "-" + g + "px"), a = 0);
						v(a);
						b.data("cacheIndex", a)
					}))
				}
				function v(a) {
					t.eq(a).addClass("active").siblings().removeClass("active")
				}
				var b = c(this),
				g = b.width(),
				h = b.height(),
				n = m.type || "fade",
				p = m.arrow,
				q = m.dot,
				r = m.autoplay;
				b.addClass("jPicture-container").children().first().addClass("jPicture-inner").children().addClass("jPicture-part");
				b.on("selectstart",
				function() {
					return ! 1
				}).data("cacheIndex", 0);
				var e = b.find(".jPicture-inner"),
				l = b.find(".jPicture-part"),
				k = b.find("img, a"),
				f = e.find("img").length;
				l.add(k).width(g).height(h);
				h = "";
				for (k = 0; k < f; k++) h += "\x3cb\x3e\x3c/b\x3e";
				e.after("\x3cdiv class\x3d'jPicture-dot'\x3e" + h + "\x3c/div\x3e");
				var u = b.find(".jPicture-dot"),
				t = u.find("b");
				u.each(function() {
					c(this).css("marginLeft", -c(this).outerWidth(!0) / 2 + "px")
				});
				t.first().addClass("active");
				b.append("\x3cb class\x3d'jPicture-prev'\x3e\x3c/b\x3e\x3cb class\x3d'jPicture-next'\x3e\x3c/b\x3e");
				h = b.find(".jPicture-prev");
				k = b.find(".jPicture-next");
				"boolean" !== typeof p || p || h.add(k).hide();
				"boolean" !== typeof q || q || u.hide();
				"fade" == n && (e.addClass("jPicture-fade"), l.first().show());
				"slide" == n && (l = e.find(".jPicture-part"), p = l.first(), q = l.last(), e.addClass("jPicture-slide").width(g * (f + 2)).append(p.clone(!0)).prepend(q.clone(!0)).css("left", -g + "px"));
				t.click(function() {
					var a = c(this).index();
					d(a);
					b.data("cacheIndex", a)
				});
				h.click(function() {
					var a = b.data("cacheIndex");
					a--;
					d(a)
				});
				k.click(function() {
					var a = b.data("cacheIndex");
					a++;
					d(a)
				});
				if (r && "number" === typeof r) {
					var w = setInterval(function() {
						var a = b.data("cacheIndex");
						a++;
						d(a)
					},
					r);
					x && b.mouseenter(function() {
						clearInterval(w)
					}).mouseleave(function() {
						w = setInterval(function() {
							var a = b.data("cacheIndex");
							a++;
							d(a)
						},
						r)
					})
				}
			})
		})
	}
});