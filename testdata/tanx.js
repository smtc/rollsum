/*!2015-06-24 15:13 */
function tanxssp_show_m(a) {
  document.getElementById("tanx-a-" + a.i || "") || (document.write("<a style='display:none' id='tanx-a-" + a.i + "'></a>"), a.sync = !0), a.sync && (window.tanx_ssp_temp_adobj_m = a), mKSLITE.use("tanxmobile-main", function(b) {
    b("tanxmobile-main").run(a)
  })
}

function TANX_SHOW(a) {
    function b(b) {
      var c = "http" + ("https:" === location.protocol ? "s" : "") + ":" + b;
      if (!document.getElementById("tanx-a-" + a.i || "")) return void document.write("<script src='" + c + "'></script>");
      var d = document.createElement("script"),
        e = document.getElementsByTagName("head")[0];
      d.charset = "utf-8", d.async = !0, d.src = c, e.insertBefore(d, e.firstChild)
    }
    a.m ? window.tanxssp_show_m ? tanxssp_show_m(a) : (window.tanx_ssp_onload_m = window.tanx_ssp_onload_m || [], window.tanx_ssp_onload_m.push(a), b("//atanx.alicdn.com/t/tanxmobile/tanxssp.js")) : window.tanxssp_show ? tanxssp_show(a) : (window.tanx_ssp_onload = window.tanx_ssp_onload || [], window.tanx_ssp_onload.push(a), b("//atanx.alicdn.com/t/tanxssp.js"))
  }! function(a, b, c) {
    function d(a) {
      var b = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
        c = /\\\\/g,
        d = [];
      return a.replace(c, "").replace(b, function(a, b, c) {
        c && d.push(c)
      }), d
    }
    if (a[b] === c) {
      a[b] = {};
      var e = a.mKSLITEonLoad;
      b = a[b], b.Config = {
        debug: 0
      };
      var f = a.document,
        g = Object.prototype.toString,
        h = function(a, b, d, e) {
          if (!b || !a) return a;
          d === c && (d = !0);
          var f, g, h;
          if (e && (h = e.length))
            for (f = 0; h > f; f++) g = e[f], g in b && (!d && g in a || (a[g] = b[g]));
          else
            for (g in b) !d && g in a || (a[g] = b[g]);
          return a
        },
        i = f.getElementsByTagName("head")[0] || f.documentElement,
        j = 0,
        k = 2,
        l = 4;
      h(b, {
        _init: function() {
          b.Env = {
            mods: {},
            fns: {},
            _loadQueue: {}
          }, b.declare("kslite", [], function(require, exports) {
            exports = b.mix(exports, b, !0, ["getScript", "clone", "mix", "multiAsync", "extend", "iA", "iF", "iPO", "iS"])
          }), b.use("kslite", function() {});
          var c;
          if (a.mKSLITEonLoad = {
              push: function(a) {
                a && b.iF(a) && a(b)
              }
            }, e && b.iA(e))
            for (c = 0; c < e.length; c++) b.iF(e[c]) && e[c](b)
        },
        mix: h,
        clone: function(a) {
          var c, d, e = a;
          if (a && ((c = b.iA(a)) || b.iPO(a))) {
            e = c ? [] : {};
            for (d in a) a.hasOwnProperty(d) && (e[d] = b.clone(a[d]))
          }
          return e
        },
        extend: function(a, b, c, d) {
          if (!b || !a) return a;
          var e = Object.prototype,
            f = function(a) {
              function b() {}
              return b.prototype = a, new b
            },
            g = b.prototype,
            i = f(g);
          return a.prototype = i, i.constructor = a, a.superclass = g, b !== Object && g.constructor === e.constructor && (g.constructor = b), c && h(i, c), d && h(a, d), a
        },
        getScript: function(a) {
          var b = f.createElement("script");
          return b.src = a, b.async = !0, i.insertBefore(b, i.firstChild), b
        },
        iF: function(a) {
          return "[object Function]" === g.call(a)
        },
        iA: function(a) {
          return "[object Array]" === g.call(a)
        },
        iS: function(a) {
          return "[object String]" === g.call(a)
        },
        iPO: function(a) {
          return a && "[object Object]" === g.call(a) && !a.nodeType && !a.setInterval
        },
        add: function(a, c, d) {
          var e, f = b.Env.mods;
          if (!(f[a] && f[a].status > j)) return e = {
            name: a,
            fn: c || null,
            status: k
          }, b.iA(d) && (d = {
            requires: d
          }), h(e, d), f[a] = e, b
        },
        use: function(a, c) {
          a = a.split(","), b._aMs(a, function() {
            c && c(b.require)
          })
        },
        _aMs: function(a, c) {
          var d, e = {};
          for (d = 0; d < a.length; d++) e[a[d]] = {
            f: b._aM,
            a: a[d]
          };
          b.multiAsync(e, c)
        },
        _aM: function(a, c) {
          function d(a) {
            a.status != l && (a.fn && a.fn(b, b.require(a.name), b._ns(a.name)), a.status = l), c()
          }
          var e, f, g = b.Env.mods;
          if (e = g[a], !e || e.status === j) throw new Error("[" + a + "] undefined");
          f = e.requires, b.iA(f) && f.length > 0 ? b._aMs(f, function() {
            d(e)
          }) : d(e)
        },
        multiAsync: function(a, c) {
          function d() {
            var b, d = {};
            for (b in a) {
              if (!a[b].c) return;
              d[b] = a[b].r
            }
            c(d)
          }
          var e, f = !1;
          for (e in a) f = !0;
          f || c({});
          for (e in a) a.hasOwnProperty(e) && ! function() {
            var c = a[e];
            c.f.call(c.c || b, c.a, function(a) {
              c.r = a, c.c = !0, d()
            })
          }()
        },
        _ns: function(a) {
          var c, d = a.split("-"),
            e = b.Env.fns;
          for (c = 0; c < d.length; c++) e[d[c]] = e[d[c]] || {}, e = e[d[c]];
          return e
        },
        require: function(a) {
          var c = b._ns(a);
          return c.exports = c.exports || {}, c.exports
        },
        declare: function() {
          var a, c, e, f, g;
          for (a = 0; a < arguments.length; a++) c = arguments[a], b.iS(c) ? e = c : b.iA(c) ? f = c : b.iF(c) && (g = c, f = d(g.toString()));
          b.add(e, function(a, exports, b) {
            g(a.require, exports, b)
          }, f)
        }
      }), b._init()
    }
  }(window, "mKSLITE"), mKSLITE.declare("tanxmobile-main", function(require, exports) {
    var a = require("tanxmobile-utils"),
      b = require("tanxmobile-params").Def,
      c = require("tanxmobile-params").pvid,
      d = require("tanxmobile-request").Def,
      e = require("tanxmobile-config");
    exports.run = function(f) {
      e.ready(function() {
        var e = {};
        a.mix(e, b()), a.mix(e, {
          pvid: c
        }), a.mix(e, f), d(e)
      })
    }
  }), mKSLITE.declare("tanxmobile-config", function(require, exports) {
    var a = {},
      b = {},
      c = !1;
    a.mapAdType = {
      1: "txt",
      2: "pic",
      5: "txtlink",
      6: "tuwen",
      7: "js",
      8: "html",
      98: "iframehtml"
    }, a.mapDisType = {
      1: "static",
      2: "couplet",
      3: "rightfloat",
      4: "floatwin",
      5: "popwin",
      6: "common",
      7: "backdisplay",
      8: "channel",
      9: "search",
      10: "topic",
      11: "video",
      201: "static",
      202: "floatwin",
      203: "xiaobashou"
    }, a.ali = ["taobao.com", "alimama.com", "alibaba.com", "alipay.com", "alisoft.com", "linezing.com", "tanx.com", "mmstat.com", "etao.com", "tmall.com"], a.sc = "sc1", a.mc = "mc1", a.kws = ["wd", "p", "q", "keyword", "kw", "w", "key", "word", "query", "name"], b.cache = void 0, b.win = window, b.d = document, b.maxwin = null, b._maxwin = function(a) {
      if (a) return void(b.maxwin = a);
      a = b.win;
      try {
        top != a && top.location && top.location.href && (a = top)
      } catch (c) {}
      b.maxwin = a
    }, b.ali = function() {
      var c, d = b.d.domain.split("."),
        e = a.ali;
      return d.length > 1 && (c = "@" + d[d.length - 2] + "." + d[d.length - 1], ("@" + e.join("@")).indexOf(c) > -1) ? !0 : !1
    }(), b.frm = function() {
      return top != window
    }(), b.data = {}, b.laterShowData = {}, b.units = [], b.addUnit = function(a) {
      var c = (new Date).getTime(),
        d = {};
      d.w = window, d.pid = a.pid, d.t = c, b.units.push(d)
    }, b.plusUnitCount = function(c) {
      for (var d = 0, e = 0; e < b.units.length; e++)
        if (b.units[e].pid == c.pid && (d += 1), d > 1) return;
      var f = a.sc;
      b.data[f] ? b.data[f] ++ : b.data[f] = 1
    }, b.ref_url = null, b.getRef_url = function() {
      if (b.ref_url) return b.ref_url;
      var a = location.href;
      return b.frm && (a = b.win == b.maxwin ? b.d.referrer : top.location.href, "" === a && (a = location.href)), b.ref_url = a, a
    }, b.r = function() {
      var a = "";
      try {
        a = top.document.referrer
      } catch (b) {}
      return null === a && (a = ""), a
    }(), b.ua = function() {
      function a(a) {
        var b = 0;
        return parseFloat(a.replace(/\./g, function() {
          return 0 === b++ ? "." : ""
        }))
      }
      var b, c = navigator.userAgent,
        d = new RegExp(["iPad", "iPod", "iPhone", "SymbianOS", "Series60", "SymbOS", "Symbian", "MeeGo", "Android", "Windows Phone", "Windows CE", "BlackBerry", "BB10", "PlayBook", "hp-tablet"].join("|"), "i"),
        e = "",
        f = "",
        g = "";
      return e = c.match(d), e && (e = e[0]), "iPad" === e || "iPod" === e || "iPhone" === e ? (g = e, e = "iOS", b = c.match(/OS ([^\s]*)/), b && b[1] && (f = a(b[1].replace("_", ".")))) : "Android" === e ? (g = "Android", b = c.match(/Android ([^\s]*);/), b && b[1] && (f = a(b[1]))) : "Windows Phone" === e ? (g = "WinPhone", b = c.match(/Windows Phone( OS)? ([^\s]*);/), b && b[2] && (f = a(b[2]))) : (b = c.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (e = f = encodeURIComponent(b[0].toLowerCase())), {
        pf: g,
        os: e || "",
        osv: f || "",
        pc: e ? 0 : 1
      }
    }(), exports.c = a, exports.r = b, exports.ready = function(a) {
      if (c) return a();
      var d = setTimeout(function() {
        b._maxwin(window), c = !0, a()
      }, 50);
      b._maxwin(), clearTimeout(d), c = !0, a()
    }, exports.ready(function() {})
  }), mKSLITE.declare("tanxmobile-utils", function(require, exports) {
    var a = {};
    a.mix = mKSLITE.mix, a.getScript = mKSLITE.getScript, a.syncScript = function(a, b) {
        document.write('<script charset="' + (b || "gbk") + '" src="' + a + '"></script>')
      }, a.encode = function(a) {
        return encodeURIComponent(a + "")
      }, a.decode = function(a) {
        return decodeURIComponent(a + "")
      }, a.getAttr = function(b, c) {
        return a.trim(b.getAttribute(c.toLowerCase(), 2) || "") || ""
      }, a.setAttr = function(b, c, d) {
        b.setAttribute(c.toLowerCase(), a.trim(d + ""))
      }, a.$ = function(a) {
        return document.getElementById(a)
      }, a.tanxId = function(b) {
        return a.$("tanx-a-" + b)
      }, a.tanxSId = function(a) {
        return "tanx-a-" + a
      }, a.css = function(a, b, c) {
        return c ? (a.style[b] = c, c) : window.getComputedStyle ? window.getComputedStyle(a, null).getPropertyValue(b) : a.currentStyle ? a.currentStyle[b] : void 0
      }, a.each = function(a, b) {
        if (a.length && a.slice)
          for (var c = 0, d = a.length; d > c; c++) b(a[c], c);
        else
          for (var e in a) a.hasOwnProperty(e) && b(a[e], e)
      }, a.trim = function(a) {
        var b;
        try {
          b = a.trim()
        } catch (c) {
          for (var a = a.replace(/^\s\s*/, ""), d = /\s/, e = a.length; d.test(a.charAt(--e)););
          b = a.slice(0, e + 1)
        }
        return b
      }, a.show = function(b) {
        var c = a.getAttr(b, "_tanx_old_display") || "";
        a.css(b, "display", c)
      }, a.hide = function(b) {
        b && (a.setAttr(b, "_tanx_old_display", a.css(b, "display")), a.css(b, "display", "none"))
      }, "undefined" == typeof HTMLElement || HTMLElement.prototype.insertAdjacentElement || (HTMLElement.prototype.insertAdjacentElement = function(a, b) {
        switch (a.toLowerCase()) {
          case "beforebegin":
            this.parentNode.insertBefore(b, this);
            break;
          case "afterbegin":
            this.insertBefore(b, this.firstChild)
        }
      }, HTMLElement.prototype.insertAdjacentHTML = function(a, b) {
        var c = this.ownerDocument.createRange();
        c.setStartBefore(this);
        var d = c.createContextualFragment(b);
        this.insertAdjacentElement(a, d)
      }), a.showAd = function(a, b, c, d) {
        b ? window.setTimeout(function() {
          var c = document.getElementById(b);
          try {
            c.insertAdjacentHTML("beforebegin", a), "function" == typeof d && d()
          } catch (e) {
            c = c.parentNode, c.insertAdjacentHTML("beforebegin", a), "function" == typeof d && d()
          }
        }, 0) : c ? window.setTimeout(function() {
          try {
            c.insertAdjacentHTML("afterbegin", a), "function" == typeof d && d()
          } catch (b) {
            c = c.parentNode, c.insertAdjacentHTML("afterbegin", a), "function" == typeof d && d()
          }
        }, 0) : (document.write(a), "function" == typeof d && d())
      },
      function(b, c) {
        c.addEventListener ? (a.addEvent = function(a, b, c) {
          a.addEventListener(b, c, !1)
        }, a.removeEvent = function(a, b, c) {
          a.removeEventListener(b, c, !1)
        }) : c.attachEvent ? (a.addEvent = function(a, b, c) {
          a["e" + b + c] = c, a[b + c] = function() {
            a["e" + b + c](window.event)
          }, a.attachEvent("on" + b, a[b + c])
        }, a.removeEvent = function(a, b, c) {
          a.detachEvent("on" + b, a[b + c]), a[b + c] = null
        }) : (a.addEvent = function(a, c, d) {
          a["on" + c] = d.call(a, b.event)
        }, a.removeEvent = function(a, b) {
          a["on" + b] = null
        })
      }(window, document), a.tagName = function(a) {
        return a && a.tagName ? a.tagName.toLowerCase() : null
      }, a.each(a, function(a, b) {
        exports[b] = a
      })
  }), mKSLITE.declare("tanxmobile-request", function(require, exports) {
    function a(a) {
      i();
      var b = "jsonp_callback_" + parseInt(1e5 * Math.random(), 10);
      k[b] = function(c) {
        j(c), h(c, a);
        var d = {
          elConId: "tanxmobile-outer-con" + c.pid,
          clickUrl: c.clickurl,
          data: c.data,
          height: c.height,
          pid: c.pid,
          width: c.width
        };
        if (k.tanx_ssp_load_ad && k.tanx_ssp_load_ad.length)
          for (var e = 0, f = k.tanx_ssp_load_ad.length; f > e; e++)
            if (k.tanx_ssp_load_ad[e][c.pid]) try {
              k.tanx_ssp_load_ad[e][c.pid](d)
            } catch (g) {}
        try {
          k[b] = null, delete k[b]
        } catch (g) {}
      }, a.cb = b, a.ai = f.units.length - 1;
      var d = a.cas,
        e = ["i", "cb", "callback", "ep", "userid", "o", "f", "n", "ds", "r", "cah", "caw", "ccd", "ctz", "chl", "cja", "cpl", "cmm", "cf", "cg", "pvid", "ai", "ac", d, "os", "uc_param_str", "cas", "cbh", "cbw", "dx", "u", "osv", "ori", "dpr", "pf", "k", "tt"],
        l = [];
      return g.each(e, function(b) {
        a[b] !== c && l.push(b + "=" + g.encode(a[b]))
      }), l.join("&")
    }

    function b(a) {
      var b = !1;
      if (f.data.sc1 > 4) return !0;
      for (var c = 0, d = f.units.length; d > c; c++)
        if (a.i == f.units[c].i) {
          b = !0;
          break
        }
      return b || f.units.push({
        i: a.i,
        sync: a.sync
      }), b
    }
    var c, d, e = require("tanxmobile-config"),
      f = e.r,
      g = require("tanxmobile-utils"),
      h = require("tanxmobile-show").show,
      i = require("tanxmobile-acookie").Def,
      j = require("tanxssp-ws2subway").Def,
      k = window;
    k.null_data && (d = k.null_data), k.null_data = function() {
      d && d()
    }, exports.Def = function(c) {
      if (b(c) || f.ua.pc) return !1;
      var d = a(c),
        e = c.sd.split("/")[1] ? "http://" + c.sd + "?" + d : "http://" + c.sd + "/ex?" + d;
      c.sync ? g.syncScript(e) : g.getScript(e)
    }
  }), mKSLITE.declare("tanxmobile-params", function(require, exports) {
    function a() {
      return {
        ctz: -((new Date).getTimezoneOffset() / 60)
      }
    }

    function b() {
      return {
        chl: history.length
      }
    }

    function c() {
      var a, b = 0,
        c = 0;
      return u && u.body && (a = u.body, b = a.clientHeight, c = a.clientWidth), {
        cbh: b,
        cbw: c
      }
    }

    function d() {
      var a = window.screen,
        b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = 0;
      try {
        b = a.width, c = a.height, d = a.availHeight, e = a.availWidth, f = a.colorDepth
      } catch (g) {}
      return {
        ds: b + "x" + c,
        cah: d,
        caw: e,
        ccd: f
      }
    }

    function e() {
      var a = "";
      try {
        a = u.title
      } catch (b) {}
      return {
        tt: a
      }
    }

    function f() {
      function a(a, b) {
        var c, d = "",
          e = 1;
        if (e = Math.floor(a.length / b), 1 == e) d = a.substr(0, b);
        else
          for (c = 0; b > c; c++) d += a.substr(c * e, 1);
        return d
      }
      var b, c, d, e, f = "",
        g = "",
        h = location,
        i = "";
      if (p.ali)
        for (b = (" " + document.cookie).split(";"), c = 0; c < b.length; c++)
          if (0 === b[c].indexOf(" cna=")) {
            g = b[c].substr(5, 24);
            break
          }
      if ("" === g) {
        var j = h.search.length > 9 ? h.search : (h.pathname.length > 9 ? h.pathname : h.href).substr(1);
        for (b = document.cookie.split(";"), c = 0; c < b.length; c++) b[c].split("=").length > 1 && (i += b[c].split("=")[1]);
        i.length < 16 && (i += "0123456789abcdef"), g = a(j, 8) + a(i, 16)
      }
      for (c = 1; 32 >= c; c++) d = t.floor(16 * t.random()), g && c <= g.length && (e = g.charCodeAt(c - 1), d = (d + e) % 16), f += d.toString(16), 1 === c && "a" > f && (f = "a");
      return {
        cg: f
      }
    }

    function g() {
      var a = t.floor(1e4 * t.random()) + 10001;
      try {
        p.sid ? a = p.sid : (a -= 10001, p.sid = a)
      } catch (b) {}
      return {
        ac: a
      }
    }

    function h() {
      var a, b, c, d, e, f = 0,
        g = 16,
        h = 0,
        i = q[0] || 4973;
      for (c = 1; g >= c; c++) a = t.random(), b = t.random(), t.pow(a, 2) + t.pow(b, 2) <= 1 && f++, 12 >= c && (h += a);
      d = "pr" + String.fromCharCode(97 + f), e = t.round(h * i) | (u.body ? u.body.clientWidth : 0) << 16;
      var j = {};
      return j[d] = e, j.cas = d, j
    }

    function i() {
      var a = p.data[q.sc] || 1;
      return {
        dx: a ? a : ""
      }
    }

    function j() {
      return {
        u: p.getRef_url()
      }
    }

    function k() {
      return {
        r: p.r
      }
    }

    function l(a) {
      var b, c, d, e = q.kws;
      if (a)
        for (b = 0; b < e.length; b++)
          if (c = new RegExp("[^1-9a-zA-Z]" + e[b] + "=([^&]*)"), d = a.match(c), d && (c = new RegExp("^[0-9]*$"), null === d[1].match(c))) return d[1];
      return ""
    }

    function m() {
      var a = l(p.u);
      return "" === a && p.r && (a = l(p.r)), {
        k: a
      }
    }

    function n() {
      var a = s.os,
        b = window.orientation;
      return "Android" === a && (b = 0 === b || 180 === b ? "0" : "1"), "iOS" === a && (b = 90 === b || -90 === b ? "0" : "1"), {
        os: s.os.toLowerCase(),
        osv: s.osv,
        pf: s.pf.toLowerCase(),
        ori: b,
        dpr: 1e3 * (window.devicePixelRatio || 1) | 0
      }
    }

    function o() {
      var a = window.navigator.userAgent;
      return a.indexOf("UCBrowser") > -1 ? {
        uc_param_str: "ei"
      } : void 0
    }
    var p = require("tanxmobile-config").r,
      q = require("tanxmobile-config").c,
      r = require("tanxmobile-utils"),
      s = p.ua,
      t = Math,
      u = p.maxwin.document;
    exports.pvid = function() {
      function a() {
        try {
          var a = p.maxwin,
            f = a[b],
            g = a.navigator[b],
            h = window.localStorage;
          if (f) return f;
          if (g) return g;
          if (h) {
            var i = h.getItem(b);
            if (i && c - i.split("::")[1] <= e) return i.split("::")[0]
          }
          a[b] = d, a.navigator[b] = d, h && h.setItem(b, d + "::" + c)
        } catch (j) {}
        return d
      }
      var b = "tanx_ssp_pvid",
        c = (new Date).getTime(),
        d = f().cg,
        e = 2e3;
      return a()
    }(), exports.Def = function() {
      var l = {};
      return r.each([a(), b(), c(), d(), e(), f(), g(), h(), i(), j(), n(), k(), m(), o()], function(a) {
        r.mix(l, a)
      }), l
    }
  }), mKSLITE.declare("tanxmobile-show", function(require, exports) {
    var a, b, c = require("tanxmobile-display").Def,
      d = require("tanxmobile-feedback").Def,
      e = window,
      f = document,
      g = mKSLITE;
    exports.show = function(e, f) {
      a = f.a, b = f.r || "1", e.stdwidth && e.stdheight && (e.stdwidth != e.width || e.stdheight != e.height) && (e.adSpaceWidth = e.width, e.adSpaceHeight = e.height, e.paddingLeft = 0, e.paddingTop = 0, e.stdheight < e.height && (e.height = e.stdheight, e.paddingTop = (e.adSpaceHeight - 2 - e.height) / 2), e.stdwidth < e.width && (e.width = e.stdwidth, e.paddingLeft = (e.adSpaceWidth - 2 - e.width) / 2), e.adSpaceWidth -= e.paddingLeft + 2, e.adSpaceHeight -= e.paddingTop + 2, e.height > e.adSpaceHeight && (e.height = e.adSpaceHeight), e.width > e.adSpaceWidth && (e.width = e.adSpaceWidth)), "203" != e.distype && (e = exports.convertSize(e)), c(e, b), d(e)
    }, exports.convertSize = function(c) {
      var d, h = {
          mm_26944620_3314320_23392916: 1,
          mm_31042000_2881994_23306082: 1,
          mm_26632279_7316033_24136101: 1,
          mm_54206473_7304016_24114217: 1,
          mm_54206473_7304016_24128119: 1,
          mm_32549094_3284069_26614719: 1,
          mm_54206473_7304016_24756412: 1,
          mm_54206473_7304016_24754470: 1,
          mm_54206473_7304016_26796002: 1,
          mm_12229823_1573806_27356118: 1,
          mm_31442535_2978450_25620338: 1,
          mm_1_2_3: 1
        },
        i = {};
      if (g.iPO(window.tanx_c)) {
        var j = window.tanx_c;
        d = j[c.pid], d && ("PARENT" === d.widthEl ? a = "1" : "WIDTH" === d.widthEl && (a = "2"), "TURE" === d.response ? b = "1" : "WIDTH" === d.response && (a = "3"))
      }
      if (a) {
        if (1 == a || 3 == a) {
          var k = f.getElementById("tanx-a-" + c.pid);
          k.parentNode.insertBefore(function() {
            var a = f.createElement("div");
            return a.id = "tanx_preview_" + c.pid, a.style.cssText = "width:100%; font-size:0; display:block; border:none; margin:none;", a
          }(), k), i.width = 0 | f.getElementById("tanx_preview_" + c.pid).scrollWidth
        }
        var l = i.width ? i.width : Math.max(320, e.innerWidth);
        if (l && (h.hasOwnProperty(c.pid) || 1 == a || 2 == a)) {
          var m = Math.round(l * c.height / c.width);
          c.orgwidth = c.width, c.orgheight = c.height, c.width = l, c.height = m
        }
        l && 3 == a && (c.orgwidth = c.width, c.orgheight = c.height, c.width = l)
      }
      var n = f.getElementById("tanx_preview_" + c.pid);
      return n && n.parentNode.removeChild(n), c
    }
  }), mKSLITE.declare("tanxmobile-feedback", function(require, exports) {
    exports.Def = function(a) {
      if (void 0 !== a.feedback && "" !== a.feedback) {
        var b = window["tanxmobile-feedback-cache"] || (window["tanxmobile-feedback-cache"] = {}),
          c = new Image;
        b[a.pid] = c, c.onload = c.onerror = function() {
          c.onload = c.onerror = null, c = null, delete b[a.pid]
        };
        var d = "?";
        a.feedback.indexOf("?") > -1 && (d = "&"), c.src = a.feedback + d + "tanxssp_t=" + parseInt(1e5 * Math.random(), 10)
      }
    }
  }), mKSLITE.declare("tanxmobile-resize", function(require, exports) {
    function a(a, b, c) {
      if (c.indexOf("<!--TanxR-->") < 0) return c;
      var d = Math.random().toString(36).substring(2);
      return c = c.replace(/{{creativeID}}/i, d), c += "<script>(function(w,d){var originalSize={w:" + a + ",h:" + b + '};var gw;var Timer;function windowResizeHandler(){var width = d.getElementsByTagName("html")[0].clientWidth;if(width==gw)return;gw=width;var height = Math.round(originalSize.h*width/originalSize.w);var c=d.getElementById("' + d + '");c.style.cssText+=";width:"+width+"px;height:"+height+"px"};d.addEventListener("DOMContentLoaded", function() {windowResizeHandler();});w.addEventListener("resize",function(){if(Timer){clearTimeout(Timer);};Timer=setTimeout(function(){windowResizeHandler()},200)})})(window,document)</script>'
    }
    exports.Def = a
  }), mKSLITE.declare("tanxmobile-display", function(require, exports) {
    function a(a, b) {
      if (b.insertAdjacentHTML) b.insertAdjacentHTML("beforebegin", a);
      else {
        var c = document.createElement("div");
        c.innerHTML = a, b.parentNode.insertBefore(c.getElementsByTagName("iframe")[0], b)
      }
    }

    function b(b, c, d, f) {
      var g = "tanx_frameanchor_" + b;
      f = i(c, d, f);
      var h = '<!doctype html><html><head><meta name="viewport" content="width=device-width"><meta charset=gbk /></head><body style="margin:0;padding:0">' + f + "</body></html>";
      e.$(g) && ! function j(f) {
        if (f > 20) return !1;
        var i = "tanxmobile-outer-iframe" + b,
          k = '<iframe id="' + i + '" width="' + c + '" height="' + d + '" style="display:none"',
          l = " src=\"javascript:void((function(){try{var d=document;d.open();d.domain='" + document.domain + "';d.write('');d.close();}catch(e){}})())\"",
          m = ' border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0"  style="border: 0pt none;"></iframe>',
          n = k;
        navigator.userAgent.toLowerCase().indexOf("msie") > -1 && document.domain != location.hostname && (n += l), n += m;
        var o = e.$(g);
        a(n, o), setTimeout(function() {
          try {
            var b = document.getElementById(i),
              c = b.contentWindow.document;
            c.open("text/html", "replace"), c.write(h), setTimeout(function() {
              c.close()
            }, 20), b.style.display = "", "none" == b.style.display && setTimeout(function() {
              b.style.display = ""
            }, 10)
          } catch (d) {
            b.parentNode.removeChild(b), n = k + l + m, a(n, o), f ? f++ : f = 1, j(f)
          }
        }, 20)
      }()
    }

    function c(a) {
      function b(a) {
        var b, c = mKSLITE.require("tanxmobile-show"),
          e = c.convertSize(a);
        if (mKSLITE.iPO(window.tanx_c)) {
          var f = window.tanx_c[a.pid];
          f && f.custom_height && /^\d{1,5}(\.\d{1,2}|)\w{2,3}$/.test(f.custom_height) && (b = f.custom_height)
        }
        d.width = e.width, b ? d.style.height = b : d.height = e.height, d.parentNode.style.height = b ? b : e.height + "px"
      }
      var c, d = document.getElementById("tanxmobile-outer-iframe" + a.pid);
      if (d)
        if (window.matchMedia && -1 == window.navigator.userAgent.indexOf("UCBrowser")) {
          var e = window.matchMedia("(orientation: portrait)");
          e.addListener(function() {
            b(a)
          })
        } else window.addEventListener("resize", function() {
          c && clearTimeout(c), c = setTimeout(function() {
            b(a)
          }, 200)
        })
    }
    var d = require("tanxmobile-template").Def,
      e = require("tanxmobile-utils"),
      f = require("tanxmobile-config").c.mapAdType,
      g = require("tanxmobile-config").r,
      h = require("tanxmobile-config").c.mapDisType,
      i = require("tanxmobile-resize").Def,
      j = {},
      k = {};
    j.iframehtml = function(a, c) {
      var f = e.tanxSId(a.pid);
      e.showAd(d(a), f, null, function() {
        b(a.pid, a.width, a.height, a.data), c && c()
      })
    }, k.floatwin = function(a) {
      var b = document.getElementById("tanxmobile-outer-con" + a.pid),
        c = a.disconfig.floatwinstyle,
        d = 27.6 * a.width / 320,
        e = 18 * d / 27.6;
      b.style.position = "fixed", b.style[c] = "0", b.style.left = "0", b.style["z-index"] = "2147483647", navigator.userAgent.indexOf("Android 2.3") > -1 && (b.children[0].style.position = "fixed", b.children[0].style.left = "0", b.children[0].style[c] = "0");
      var f = document.createElement("a");
      f.href = "javascript:void(0);", f.style.width = d + "px", f.style.height = e + "px", f.style.position = "absolute", f.style.display = "block", f.style.top = "bottom" == c ? "-" + e + "px" : a.height + "px", f.style.right = "0", f.style.background = "bottom" == c ? 'url("http://gtms04.alicdn.com/tps/i4/TB1mNJvHFXXXXbKaXXXxE6PHFXX-60-39.png") 0 0 no-repeat' : 'url("http://gtms04.alicdn.com/tps/i4/TB1bHpLHFXXXXcfapXXxE6PHFXX-60-39.png") 0 0 no-repeat', f.style["background-size"] = d + "px " + e + "px", f.onclick = function() {
        b.style.display = "none"
      }, b.appendChild(f)
    }, k.xiaobashou = function(a) {
      var b = document.getElementById("tanxmobile-outer-con" + a.pid),
        c = a.orgwidth || a.width,
        d = 24,
        e = a.orgwidth || a.width,
        f = a.orgheight || a.height;
      b.style.position = "fixed", b.style.bottom = "50%", b.style.right = "0", b.style["z-index"] = "2147483647", b.style.width = e + "px", b.style.height = f + "px", navigator.userAgent.indexOf("Android 2.3") > -1 && (b.children[0].style.position = "fixed", b.children[0].style.right = "0", b.children[0].style.bottom = "50%"), b.children[0].style.width = e + "px", b.children[0].style.height = f + "px";
      var g = document.createElement("a");
      g.href = "javascript:void(0);", g.style.width = c + "px", g.style.height = d + "px", g.style.position = "absolute", g.style.display = "block", g.style["font-size"] = "12px", g.style["line-height"] = "24px", g.style["text-align"] = "center", g.style.background = "#ccc", g.style.color = "#fff", g.style.top = f + "px", g.style.right = "0", g.innerHTML = "\u5173\u95ed", g.onclick = function() {
        b.style.display = "none"
      }, b.appendChild(g)
    }, exports.Def = function(a, b) {
      var i = e.tanxSId(a.pid),
        l = f[a.adboardtype],
        m = h[a.distype],
        n = !1;
      if ("html" == l && "static" == m) {
        for (var o = 0, p = g.units.length; p > o; o++)
          if (g.units[o].i === a.pid) {
            n = g.units[o].sync;
            break
          }
        return n ? document.write(d(a)) : e.showAd(d(a), i, null, function() {}), !1
      }
      j[l] ? j[l](a, function() {
        b && 203 != a.distype && c(a)
      }) : e.showAd(d(a), i, null, function() {
        b && 203 != a.distype && c(a)
      }), k[m] && setTimeout(function() {
        k[m](a)
      }, 0)
    }
  }), mKSLITE.declare("tanxmobile-template", function(require, exports) {
    function a(a) {
      var b;
      if (mKSLITE.iPO(window.tanx_c)) {
        var c = window.tanx_c[a.pid];
        c && c.custom_height && /^\d{1,5}(\.\d{1,2}|)\w{2,3}$/.test(c.custom_height) && (b = c.custom_height)
      }
      return b
    }

    function b(b, c) {
      var f = d[b.adboardtype],
        g = e[b.distype];
      if ("html" == f && "static" == g) return c;
      if (b.adSpaceWidth && b.adSpaceHeight) return '<ins style="display:inline-block;overflow:hidden;text-align:left;padding:0;margin:0;border:1px solid #e5e5e5;width:' + b.adSpaceWidth + "px;height:" + b.adSpaceHeight + "px;*zoom:1;*display:inline;background:#F3F3F3;padding-left:" + b.paddingLeft + "px;padding-top:" + b.paddingTop + 'px" id="tanxmobile-outer-con' + b.pid + '">' + c + "</ins>";
      var h, i, j = a(b);
      return h = parseInt(b.width, 10) <= 1 ? "auto" : b.width + "px", i = j ? j : parseInt(b.height, 10) <= 1 ? "auto" : b.height + "px", '<ins style="padding:0;margin:0;height:' + i + ';width:100%;display:block;text-align:center;" id="tanxmobile-outer-con' + b.pid + '">' + c + "</ins>"
    }
    var c = require("tanxmobile-utils"),
      d = require("tanxmobile-config").c.mapAdType,
      e = require("tanxmobile-config").c.mapDisType,
      f = require("tanxmobile-userconfig").Def,
      g = {};
    g.txt = {
      tmpl: function(a) {
        return '<a href="' + a.clickurl + '" target="_blank">' + a.data + "</a>"
      }
    }, g.txtlink = g.txt, g.pic = {
      tmpl: function(a) {
        return '<a href="' + a.clickurl + '" target="_blank"><img border=0 src="' + a.data + '" width="' + a.width + 'px" height="' + a.height + 'px"/></a>'
      }
    }, g.tuwen = {
      tmpl: function(b) {
        var c = "pid=" + b.pid + "&imei=" + f.sn + "&webview=" + f.webview + ("" !== f.config ? "&config=" + f : ""),
          d = "",
          e = a(b);
        return e && (d += "height:" + e), c = -1 == b.data.indexOf("?") ? "?" + c : "&" + c, '<iframe id="tanxmobile-outer-iframe' + b.pid + '" name="tanxmobile-outer-iframe' + b.pid + '" src="' + b.data + c + '" width="' + b.width + '" height="' + b.height + '" border="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="' + d + '"></iframe>'
      }
    }, g.iframehtml = {
      tmpl: function(a) {
        return "<a style='display:none !important;' id='tanx_frameanchor_" + a.pid + "'></a>"
      }
    }, g.html = {
      tmpl: function(a) {
        return '<div style="text-align:center;display:block;font-size:0;width:' + a.width + "px;height:" + a.height + 'px;"><div style="display: inline-block;position:relative;margin:0 auto;"> ' + a.data + "</div></div>"
      }
    };
    var h = "http://img.alimama.cn/defboards/domainbind/2/",
      i = {};
    c.each(["760x90", "468x60", "250x60", "728x90", "950x90", "658x60", "120x600", "336x280", "300x250", "290x200", "120x60", "100x100", "120x240", "160x600", "180x250", "250x300", "360x190", "250x250", "200x200"], function(a) {
      i[a] = h + a + ".jpg"
    }), exports.Def = function(a) {
      "1" === a.unregist && (a.clickurl = "http://a.alimama.cn", i[a.width + "x" + a.height] ? a.data = i[a.width + "x" + a.height] : a.data = "http://img.alimama.cn/defboards/domainbind/2/200x200.jpg", a.distype = "1", a.adboardtype = "2");
      var c = d[a.adboardtype];
      return "0" === a.width && (a.width = "auto"), "0" === a.height && (a.height = "auto"), b(a, g[c].tmpl(a))
    }
  }), mKSLITE.declare("tanxmobile-userconfig", function(require, exports) {
    var a = window.tanx_c || {},
      b = "string" == typeof a.config && "" !== a.config.replace(/^\s+|\s+$/g, "") ? a.config : "",
      c = a.sn && /\w+/.test(a.sn) ? a.sn : "",
      d = a.webview ? "1" : "";
    exports.Def = {
      sn: c,
      imei: c,
      webview: d,
      config: b
    }
  }), mKSLITE.declare("tanxmobile-acookie", function(require, exports) {
    function a() {
      var a;
      try {
        a = window.localStorage
      } catch (b) {}
      return a ? (a = window.localStorage, {
        setkey: function(b, c) {
          try {
            a.setItem(b, c)
          } catch (d) {
            return !1
          }
          return !0
        },
        getkey: function(b) {
          try {
            return a.getItem(b)
          } catch (c) {
            return
          }
        }
      }) : {
        setkey: function() {},
        getkey: function() {}
      }
    }
    var b = !1;
    exports.Def = function() {
      if (!b) {
        b = !0;
        var c = a(),
          d = "tanxssp_acookie_expires",
          e = c.getkey(d);
        if (e && e > (new Date).getTime()) return !1;
        c.setkey(d, (new Date).getTime() + 36e5);
        var f = document,
          g = f.createElement("iframe");
        g.style.cssText = "width:0;height:0;display:none", g.src = "http://cdn.tanx.com/t/acookie/acbeacon2.html", f.body.insertBefore(g, f.body.firstChild)
      }
    }
  }), mKSLITE.declare("tanxssp-ws2subway", function(require, exports) {
    var a = require("tanxmobile-config").r;
    exports.Def = function(b) {
      var c = (b.data.indexOf("?") > 0 ? "&" : "?") + "u=" + encodeURIComponent(a.getRef_url()) + "&r=" + encodeURIComponent(a.r) + "&tp=" + b.tproduct + "&tsid=" + (b.tsid || "");
      ("2" == b.tproduct && "3" == b.icon || "4" == b.tproduct && b.data.match(/^<iframe /i)) && (b.data = b.data.replace(/src="((https?:)?\/\/([^\/]+).*?)"/i, 'src="$1' + c + '"')), "3" == b.tproduct && (b.data += c)
    }
  }),
  function() {
    if (window.tanx_ssp_temp_adobj_m) {
      var a = window.tanx_ssp_temp_adobj_m;
      try {
        window.tanx_ssp_temp_adobj_m = null, delete window.tanx_ssp_temp_adobj_m
      } catch (b) {}
      mKSLITE.use("tanxmobile-main", function(b) {
        b("tanxmobile-main").run(a)
      })
    }
    if (window.tanx_ssp_temp_show_obj) {
      var c = window.tanx_ssp_temp_show_obj;
      try {
        window.tanx_ssp_temp_show_obj = null, delete window.tanx_ssp_temp_show_obj
      } catch (b) {}
      try {
        mKSLITE.use("tanxmobile-display", function(a) {
          a("tanxmobile-display").Def(c)
        })
      } catch (b) {}
    }
  }(),
  function(a, b) {
    var c = a.TANX_ONLOAD;
    if (c && b.iA(c))
      for (var d = 0; d < c.length; d++) b.iPO(c[d]) && TANX_SHOW(c[d]);
    a.TANX_ONLOAD = {
      push: function(a) {
        a && b.iPO(a) && TANX_SHOW(a)
      }
    }
  }(window, mKSLITE),
  function(a, b) {
    var c = a.tanx_ssp_onload_m;
    if (c && b.iA(c))
      for (var d = 0; d < c.length; d++) b.iPO(c[d]) && tanxssp_show_m(c[d]);
    a.tanx_ssp_onload_m = {
      push: function(a) {
        a && b.iPO(a) && tanxssp_show_m(a)
      }
    }
  }(window, mKSLITE);
