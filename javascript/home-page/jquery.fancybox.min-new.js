! function (e, t, i, n) {
    "use strict";
    var a = i("html"),
        s = i(e),
        o = i(t),
        r = i.fancybox = function () {
            r.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        c = null,
        d = t.createTouch !== n,
        h = function (e) {
            return e && e.hasOwnProperty && e instanceof i
        },
        p = function (e) {
            return e && "string" === i.type(e)
        },
        u = function (e) {
            return p(e) && e.indexOf("%") > 0
        },
        f = function (e) {
            return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        },
        g = function (e, t) {
            var i = parseInt(e, 10) || 0;
            return t && u(e) && (i = r.getViewport()[t] / 100 * i), Math.ceil(i)
        },
        m = function (e, t) {
            return g(e, t) + "px"
        };
    i.extend(r, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !d,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + " ></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeChange: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (e, t) {
            return e && (i.isPlainObject(t) || (t = {}), !1 !== r.close(!0)) ? (i.isArray(e) || (e = h(e) ? i(e).get() : [e]), i.each(e, function (a, s) {
                var o, l, c, d, u, f, g, m = {};
                "object" === i.type(s) && (s.nodeType && (s = i(s)), h(s) ? (m = {
                    href: s.data("fancybox-href") || s.attr("href"),
                    title: s.data("fancybox-title") || s.attr("title"),
                    isDom: !0,
                    element: s
                }, i.metadata && i.extend(!0, m, s.metadata())) : m = s), o = t.href || m.href || (p(s) ? s : null), l = t.title !== n ? t.title : m.title || "", c = t.content || m.content, d = c ? "html" : t.type || m.type, !d && m.isDom && (d = s.data("fancybox-type"), d || (u = s.prop("class").match(/fancybox\.(\w+)/), d = u ? u[1] : null)), p(o) && (d || (r.isImage(o) ? d = "image" : r.isSWF(o) ? d = "swf" : "#" === o.charAt(0) ? d = "inline" : p(s) && (d = "html", c = s)), "ajax" === d && (f = o.split(/\s+/, 2), o = f.shift(), g = f.shift())), c || ("inline" === d ? o ? c = i(p(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : m.isDom && (c = s) : "html" === d ? c = o : d || o || !m.isDom || (d = "inline", c = s)), i.extend(m, {
                    href: o,
                    type: d,
                    content: c,
                    title: l,
                    selector: g
                }), e[a] = m
            }), r.opts = i.extend(!0, {}, r.defaults, t), t.keys !== n && (r.opts.keys = t.keys ? i.extend({}, r.defaults.keys, t.keys) : !1), r.group = e, r._start(r.opts.index)) : void 0
        },
        cancel: function () {
            var e = r.coming;
            e && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(e))
        },
        close: function (e) {
            r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && e !== !0 ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
        },
        play: function (e) {
            var t = function () {
                    clearTimeout(r.player.timer)
                },
                i = function () {
                    t(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
                },
                n = function () {
                    t(), o.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
                },
                a = function () {
                    r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, o.bind({
                        "onCancel.player beforeClose.player": n,
                        "onUpdate.player": i,
                        "beforeLoad.player": t
                    }), i(), r.trigger("onPlayStart"))
                };
            e === !0 || !r.player.isActive && e !== !1 ? a() : n()
        },
        next: function (e) {
            var t = r.current;
            t && (p(e) || (e = t.direction.next), r.jumpto(t.index + 1, e, "next"))
        },
        prev: function (e) {
            var t = r.current;
            t && (p(e) || (e = t.direction.prev), r.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function (e, t, i) {
            var a = r.current;
            a && (e = g(e), r.direction = t || a.direction[e >= a.index ? "next" : "prev"], r.router = i || "jumpto", a.loop && (0 > e && (e = a.group.length + e % a.group.length), e %= a.group.length), a.group[e] !== n && (r.cancel(), r._start(e)))
        },
        reposition: function (e, t) {
            var n, a = r.current,
                s = a ? a.wrap : null;
            s && (n = r._getPosition(t), e && "scroll" === e.type ? (delete n.position, s.stop(!0, !0).animate(n, 200)) : (s.css(n), a.pos = i.extend({}, a.dim, n)))
        },
        update: function (e) {
            var t = e && e.type,
                i = !t || "orientationchange" === t;
            i && (clearTimeout(c), c = null), r.isOpen && !c && (c = setTimeout(function () {
                var n = r.current;
                n && !r.isClosing && (r.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && r._setDimension(), "scroll" === t && n.canShrink || r.reposition(e), r.trigger("onUpdate"), c = null)
            }, i && !d ? 0 : 300))
        },
        toggle: function (e) {
            r.isOpen && (r.current.fitToView = "boolean" === i.type(e) ? e : !r.current.fitToView, d && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), r.update())
        },
        hideLoading: function () {
            o.unbind(".loading"), i("#fancybox-loading").remove()
        },
        showLoading: function () {
            var e, t;
            r.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), o.bind("keydown.loading", function (e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), r.cancel())
            }), r.defaults.fixed || (t = r.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function () {
            var t = r.current && r.current.locked || !1,
                i = {
                    x: s.scrollLeft(),
                    y: s.scrollTop()
                };
            return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : s.width(), i.h = d && e.innerHeight ? e.innerHeight : s.height()), i
        },
        unbindEvents: function () {
            r.wrap && h(r.wrap) && r.wrap.unbind(".fb"), o.unbind(".fb"), s.unbind(".fb")
        },
        bindEvents: function () {
            var e, t = r.current;
            t && (s.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), r.update), e = t.keys, e && o.bind("keydown.fb", function (a) {
                var s = a.which || a.keyCode,
                    o = a.target || a.srcElement;
                return 27 === s && r.coming ? !1 : (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(e, function (e, o) {
                    return t.group.length > 1 && o[s] !== n ? (r[e](o[s]), a.preventDefault(), !1) : i.inArray(s, o) > -1 ? (r[e](), a.preventDefault(), !1) : void 0
                }), void 0)
            }), i.fn.mousewheel && t.mouseWheel && r.wrap.bind("mousewheel.fb", function (e, n, a, s) {
                for (var o = e.target || null, l = i(o), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = f(l[0]), l = i(l).parent();
                0 === n || c || r.group.length > 1 && !t.canShrink && (s > 0 || a > 0 ? r.prev(s > 0 ? "down" : "left") : (0 > s || 0 > a) && r.next(0 > s ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function (e, t) {
            var n, a = t || r.coming || r.current;
            if (a) {
                if (i.isFunction(a[e]) && (n = a[e].apply(a, Array.prototype.slice.call(arguments, 1))), n === !1) return !1;
                a.helpers && i.each(a.helpers, function (t, n) {
                    n && r.helpers[t] && i.isFunction(r.helpers[t][e]) && r.helpers[t][e](i.extend(!0, {}, r.helpers[t].defaults, n), a)
                }), o.trigger(e)
            }
        },
        isImage: function (e) {
            return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (e) {
            return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (e) {
            var t, n, a, s, o, l = {};
            if (e = g(e), t = r.group[e] || null, !t) return !1;
            if (l = i.extend(!0, {}, r.opts, t), s = l.margin, o = l.padding, "number" === i.type(s) && (l.margin = [s, s, s, s]), "number" === i.type(o) && (l.padding = [o, o, o, o]), l.modal && i.extend(!0, l, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = r.group, l.index = e, r.coming = l, !1 === r.trigger("beforeLoad")) return r.coming = null, void 0;
            if (a = l.type, n = l.href, !a) return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = e, r[r.router](r.direction)) : !1;
            if (r.isActive = !0, ("image" === a || "swf" === a) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === a && (l.aspectRatio = !0), "iframe" === a && d && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + a + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
                    skin: i(".fancybox-skin", l.wrap),
                    outer: i(".fancybox-outer", l.wrap),
                    inner: i(".fancybox-inner", l.wrap)
                }), i.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                    l.skin.css("padding" + t, m(l.padding[e]))
                }), r.trigger("onReady"), "inline" === a || "html" === a) {
                if (!l.content || !l.content.length) return r._error("content")
            } else if (!n) return r._error("href");
            "image" === a ? r._loadImage() : "ajax" === a ? r._loadAjax() : "iframe" === a ? r._loadIframe() : r._afterLoad()
        },
        _error: function (e) {
            i.extend(r.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: r.coming.tpl.error
            }), r._afterLoad()
        },
        _loadImage: function () {
            var e = r.imgPreload = new Image;
            e.onload = function () {
                this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
            }, e.onerror = function () {
                this.onload = this.onerror = null, r._error("image")
            }, e.src = r.coming.href, e.complete !== !0 && r.showLoading()
        },
        _loadAjax: function () {
            var e = r.coming;
            r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                url: e.href,
                error: function (e, t) {
                    r.coming && "abort" !== t ? r._error("ajax", e) : r.hideLoading()
                },
                success: function (t, i) {
                    "success" === i && (e.content = t, r._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var e = r.coming,
                t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
            i(e.wrap).bind("onReset", function () {
                try {
                    i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (r.showLoading(), t.one("load", function () {
                i(this).data("ready", 1), d || i(this).bind("load.fb", r.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || r._afterLoad()
        },
        _preloadImages: function () {
            var e, t, i = r.group,
                n = r.current,
                a = i.length,
                s = n.preload ? Math.min(n.preload, a - 1) : 0;
            for (t = 1; s >= t; t += 1) e = i[(n.index + t) % a], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function () {
            var e, t, n, a, s, o, l = r.coming,
                c = r.current,
                d = "fancybox-placeholder";
            if (r.hideLoading(), l && r.isActive !== !1) {
                if (!1 === r.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), r.coming = null, void 0;
                switch (c && (r.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), r.unbindEvents(), e = l, t = l.content, n = l.type, a = l.scrolling, i.extend(r, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: c
                }), s = e.href, n) {
                    case "inline":
                    case "ajax":
                    case "html":
                        e.selector ? t = i("<div>").html(t).find(e.selector) : h(t) && (t.data(d) || t.data(d, i('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function () {
                            i(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
                        }));
                        break;
                    case "image":
                        t = e.tpl.image.replace("{href}", s);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', o = "", i.each(e.swf, function (e, i) {
                            t += '<param name="' + e + '" value="' + i + '"></param>', o += " " + e + '="' + i + '"'
                        }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                }
                h(t) && t.parent().is(e.inner) || e.inner.append(t), r.trigger("beforeShow"), e.inner.css("overflow", "yes" === a ? "scroll" : "no" === a ? "hidden" : a), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? c.prevMethod && r.transitions[c.prevMethod]() : i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? e.nextMethod : e.openMethod](), r._preloadImages()
            }
        },
        _setDimension: function () {
            var e, t, n, a, s, o, l, c, d, h, p, f, v, w, b, y = r.getViewport(),
                x = 0,
                _ = !1,
                k = !1,
                j = r.wrap,
                C = r.skin,
                I = r.inner,
                T = r.current,
                S = T.width,
                W = T.height,
                H = T.minWidth,
                L = T.minHeight,
                D = T.maxWidth,
                A = T.maxHeight,
                P = T.scrolling,
                B = T.scrollOutside ? T.scrollbarWidth : 0,
                M = T.margin,
                R = g(M[1] + M[3]),
                O = g(M[0] + M[2]);
            if (j.add(C).add(I).width("auto").height("auto").removeClass("fancybox-tmp"), e = g(C.outerWidth(!0) - C.width()), t = g(C.outerHeight(!0) - C.height()), n = R + e, a = O + t, s = u(S) ? (y.w - n) * g(S) / 100 : S, o = u(W) ? (y.h - a) * g(W) / 100 : W, "iframe" === T.type) {
                if (w = T.content, T.autoHeight && 1 === w.data("ready")) try {
                    w[0].contentWindow.document.location && (I.width(s).height(9999), b = w.contents().find("body"), B && b.css("overflow-x", "hidden"), o = b.outerHeight(!0))
                } catch (E) {}
            } else(T.autoWidth || T.autoHeight) && (I.addClass("fancybox-tmp"), T.autoWidth || I.width(s), T.autoHeight || I.height(o), T.autoWidth && (s = I.width()), T.autoHeight && (o = I.height()), I.removeClass("fancybox-tmp"));
            if (S = g(s), W = g(o), d = s / o, H = g(u(H) ? g(H, "w") - n : H), D = g(u(D) ? g(D, "w") - n : D), L = g(u(L) ? g(L, "h") - a : L), A = g(u(A) ? g(A, "h") - a : A), l = D, c = A, T.fitToView && (D = Math.min(y.w - n, D), A = Math.min(y.h - a, A)), f = y.w - R, v = y.h - O, T.aspectRatio ? (S > D && (S = D, W = g(S / d)), W > A && (W = A, S = g(W * d)), H > S && (S = H, W = g(S / d)), L > W && (W = L, S = g(W * d))) : (S = Math.max(H, Math.min(S, D)), T.autoHeight && "iframe" !== T.type && (I.width(S), W = I.height()), W = Math.max(L, Math.min(W, A))), T.fitToView)
                if (I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height(), T.aspectRatio)
                    for (;
                        (h > f || p > v) && S > H && W > L && !(x++ > 19);) W = Math.max(L, Math.min(A, W - 10)), S = g(W * d), H > S && (S = H, W = g(S / d)), S > D && (S = D, W = g(S / d)), I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height();
                else S = Math.max(H, Math.min(S, S - (h - f))), W = Math.max(L, Math.min(W, W - (p - v)));
            B && "auto" === P && o > W && f > S + e + B && (S += B), I.width(S).height(W), j.width(S + e), h = j.width(), p = j.height(), _ = (h > f || p > v) && S > H && W > L, k = T.aspectRatio ? l > S && c > W && s > S && o > W : (l > S || c > W) && (s > S || o > W), i.extend(T, {
                dim: {
                    width: m(h),
                    height: m(p)
                },
                origWidth: s,
                origHeight: o,
                canShrink: _,
                canExpand: k,
                wPadding: e,
                hPadding: t,
                wrapSpace: p - C.outerHeight(!0),
                skinSpace: C.height() - W
            }), !w && T.autoHeight && W > L && A > W && !k && I.height("auto")
        },
        _getPosition: function (e) {
            var t = r.current,
                i = r.getViewport(),
                n = t.margin,
                a = r.wrap.width() + n[1] + n[3],
                s = r.wrap.height() + n[0] + n[2],
                o = {
                    position: "absolute",
                    top: n[0],
                    left: n[3]
                };
            return t.autoCenter && t.fixed && !e && s <= i.h && a <= i.w ? o.position = "fixed" : t.locked || (o.top += i.y, o.left += i.x), o.top = m(Math.max(o.top, o.top + (i.h - s) * t.topRatio)), o.left = m(Math.max(o.left, o.left + (i.w - a) * t.leftRatio)), o
        },
        _afterZoomIn: function () {
            var e = r.current;
            e && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("fancybox-opened"), r.update(), (e.closeClick || e.nextClick && r.group.length > 1) && r.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), r[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && i(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function (e) {
                e.preventDefault(), r.close()
            }), e.arrows && r.group.length > 1 && ((e.loop || e.index > 0) && i(e.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (e.loop || e.index < r.group.length - 1) && i(e.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
        },
        _afterZoomOut: function (e) {
            e = e || r.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(r, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), r.trigger("afterClose", e)
        }
    }), r.transitions = {
        getOrigPosition: function () {
            var e = r.current,
                t = e.element,
                i = e.orig,
                n = {},
                a = 50,
                s = 50,
                o = e.hPadding,
                l = e.wPadding,
                c = r.getViewport();
            return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), h(i) ? (n = i.offset(), i.is("img") && (a = i.outerWidth(), s = i.outerHeight())) : (n.top = c.y + (c.h - s) * e.topRatio, n.left = c.x + (c.w - a) * e.leftRatio), ("fixed" === r.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = {
                top: m(n.top - o * e.topRatio),
                left: m(n.left - l * e.leftRatio),
                width: m(a + l),
                height: m(s + o)
            }
        },
        step: function (e, t) {
            var i, n, a, s = t.prop,
                o = r.current,
                l = o.wrapSpace,
                c = o.skinSpace;
            ("width" === s || "height" === s) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), r.isClosing && (i = 1 - i), n = "width" === s ? o.wPadding : o.hPadding, a = e - n, r.skin[s](g("width" === s ? a : a - l * i)), r.inner[s](g("width" === s ? a : a - l * i - c * i)))
        },
        zoomIn: function () {
            var e = r.current,
                t = e.pos,
                n = e.openEffect,
                a = "elastic" === n,
                s = i.extend({
                    opacity: 1
                }, t);
            delete s.position, a ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), r.wrap.css(t).animate(s, {
                duration: "none" === n ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: a ? this.step : null,
                complete: r._afterZoomIn
            })
        },
        zoomOut: function () {
            var e = r.current,
                t = e.closeEffect,
                i = "elastic" === t,
                n = {
                    opacity: .1
                };
            i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: i ? this.step : null,
                complete: r._afterZoomOut
            })
        },
        changeIn: function () {
            var e, t = r.current,
                i = t.nextEffect,
                n = t.pos,
                a = {
                    opacity: 1
                },
                s = r.direction,
                o = 200;
            n.opacity = .1, "elastic" === i && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (n[e] = m(g(n[e]) - o), a[e] = "+=" + o + "px") : (n[e] = m(g(n[e]) + o), a[e] = "-=" + o + "px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(a, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: r._afterZoomIn
            })
        },
        changeOut: function () {
            var e = r.previous,
                t = e.prevEffect,
                n = {
                    opacity: .1
                },
                a = r.direction,
                s = 200;
            "elastic" === t && (n["down" === a || "up" === a ? "top" : "left"] = ("up" === a || "left" === a ? "-" : "+") + "=" + s + "px"), e.wrap.animate(n, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function () {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    }, r.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !d,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: i("html"),
        create: function (e) {
            e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : e.parent), this.fixed = !1, e.fixed && r.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (e) {
            var t = this;
            e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                return i(e.target).hasClass("fancybox-overlay") ? (r.isActive ? r.close() : t.close(), !1) : void 0
            }), this.overlay.css(e.css).show()
        },
        close: function () {
            var e, t;
            s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function () {
            var e, i = "100%";
            this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (i = o.width())) : o.width() > s.width() && (i = o.width()), this.overlay.width(i).height(o.height())
        },
        onReady: function (e, t) {
            var n = this.overlay;
            i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = o.height() > s.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (e, t) {
            var n, a;
            t.locked && (this.margin !== !1 && (i("*").filter(function () {
                return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = s.scrollTop(), a = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(n).scrollLeft(a)), this.open(e)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (e) {
            this.overlay && !r.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
        }
    }, r.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function (e) {
            var t, n, a = r.current,
                s = a.title,
                o = e.type;
            if (i.isFunction(s) && (s = s.call(a.element, a)), p(s) && "" !== i.trim(s)) {
                switch (t = i('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + s + "</div>"), o) {
                    case "inside":
                        n = r.skin;
                        break;
                    case "outside":
                        n = r.wrap;
                        break;
                    case "over":
                        n = r.inner;
                        break;
                    default:
                        n = r.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](n)
            }
        }
    }, i.fn.fancybox = function (e) {
        var t, n = i(this),
            a = this.selector || "",
            s = function (s) {
                var o, l, c = i(this).blur(),
                    d = t;
                s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || c.is(".fancybox-wrap") || (o = e.groupAttr || "data-fancybox-group", l = c.attr(o), l || (o = "rel", l = c.get(0)[o]), l && "" !== l && "nofollow" !== l && (c = a.length ? i(a) : n, c = c.filter("[" + o + '="' + l + '"]'), d = c.index(this)), e.index = d, r.open(c, e) !== !1 && s.preventDefault())
            };
        return e = e || {}, t = e.index || 0, a && e.live !== !1 ? o.undelegate(a, "click.fb-start").delegate(a + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : n.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, o.ready(function () {
        var t, s;
        i.scrollbarWidth === n && (i.scrollbarWidth = function () {
            var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                n = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), n
        }), i.support.fixedPosition === n && (i.support.fixedPosition = function () {
            var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
            return e.remove(), t
        }()), i.extend(r.defaults, {
            scrollbarWidth: i.scrollbarWidth(),
            fixed: i.support.fixedPosition,
            parent: i("body")
        }), t = i(e).width(), a.addClass("fancybox-lock-test"), s = i(e).width(), a.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery);