Object.extend = function(A, C) {
    if (!A) {
        return C
    }
    for (var B in C) {
        if (!A[B]) {
            A[B] = C[B]
        }
    }
    return A
};
Object.stringify || (Object.stringify = function(B) {
    if (window.JSON && JSON.stringify) {
        return JSON.stringify(B)
    }
    var C = [];
    for (var A in this) {
        if (typeof this[A] == "function") {
            continue
        }
        C.push('"' + A + '":' + this[A])
    }
    return "{" + C.join(",") + "}"
});
String.prototype.startsWith || (String.prototype.startsWith = function(A) {
    if (this.substring(0, 1) == A) {
        return true
    }
    return false
});
String.prototype.endsWith || (String.prototype.endsWith = function(A) {
    if (this.substring(this.length - 1) == A) {
        return true
    }
    return false
});
String.prototype.linkStartsWith || (String.prototype.linkStartsWith = function(A) {
    if (this.indexOf(A) == 0) {
        return true
    }
    return false
});
String.prototype.linkEndsWith || (String.prototype.linkEndsWith = function(B) {
    var A = new RegExp(".*" + B + "$");
    if (A.test(this)) {
        return true
    }
    return false
});
String.prototype.trim || (String.prototype.trim = function() {
    var A = /^\s+|\s+$/g;
    return this.replace(A, "")
});
String.prototype.tl || (String.prototype.tl = function() {
    var A = /^\s+/g;
    return this.replace(A, "")
});
String.prototype.tr || (String.prototype.tr = function() {
    var A = /\s+$/g;
    return this.replace(A, "")
});
String.prototype.isNull || (String.prototype.isNull = function() {
    if (this && this.length > 0) {
        return false
    }
    return true
});
String.prototype.parseJson || (String.prototype.parseJson = function() {
    if (window.JSON && JSON.parse) {
        return JSON.parse(this)
    }
    return (new Function("return " + this + ";"))()
});
String.prototype.size || (String.prototype.size = function() {
    var A = 0;
    var B = this.split("");
    for (var C = 0; C < B.length; C++) {
        if (/[u4e00-u9fa5]+/g.test(B[C])) {
            A += 1
        } else {
            A += 2
        }
    }
    return A
});
Array.prototype.each || (Array.prototype.each = function(C, A) {
    for (var B = 0; B < this.length; B++) {
        C.call(this[B], B, this[B], A)
    }
});
Array.prototype.removeIndex || (Array.prototype.removeIndex = function(B) {
    for (var A = 0; A < this.length; A++) {
        if (A == B) {
            this.splice(A, 1);
            A--;
            break
        }
    }
});
Array.prototype.remove || (Array.prototype.remove = function(A) {
    for (var B = 0; B < this.length; B++) {
        if (this[B] == A) {
            this.splice(B, 1);
            B--
        }
    }
});
Array.prototype.distinct || (Array.prototype.distinct = function() {
    for (var A = 0; A < this.length; A++) {
        for (var B = A + 1; B < this.length; B++) {
            if (this[A] == this[B]) {
                this.splice(A, 1);
                A--
            }
        }
    }
});
Array.prototype.removeAll || (Array.prototype.removeAll = function() {
    for (var A = 0; A < this.length; A++) {
        this.splice(A, 1);
        A--
    }
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(A) {
    for (var B = 0; B < this.length; B++) {
        if (this[B] == A) {
            return B
        }
    }
    return - 1
});
Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(A) {
    for (var B = this.length - 1; B >= 0; B--) {
        if (this[B] == A) {
            return B
        }
    }
    return - 1
});
Array.prototype.maxValue || (Array.prototype.maxValue = function() {
    var A = 0;
    function B(C) {
        for (var D = 0; D < C.length; D++) {
            if (C[D] instanceof Array) {
                B(C[D])
            } else {
                if (A < C[D]) {
                    A = C[D]
                }
            }
        }
    }
    B(this);
    return A
});
Array.prototype.minValue || (Array.prototype.minValue = function() {
    var A = 9999999;
    function B(C) {
        for (var D = 0; D < C.length; D++) {
            if (C[D] instanceof Array) {
                B(C[D])
            } else {
                if (A > C[D]) {
                    A = C[D]
                }
            }
        }
    }
    B(this);
    return A
});
Array.prototype.sortValue || (Array.prototype.sortValue = function(E) {
    var B = null;
    function C(G, H) {
        if (this[G] < this[H]) {
            B = this[G];
            this[G] = this[H];
            this[H] = B
        }
    }
    function A(G, H) {
        if (this[G] > this[H]) {
            B = this[G];
            this[G] = this[H];
            this[H] = B
        }
    }
    var D = E == "desc" ? C: A;
    function F(G) {
        for (var H = 0; H < G.length; H++) {
            if (G[H] instanceof Array) {
                F(G[H])
            } else {
                for (var I = H + 1; I < G.length; I++) {
                    D.call(G, H, I)
                }
            }
        }
    }
    F(this);
    return this
});
$.css3 = function() {
    var A = window.navigator.userAgent.toLowerCase();
    if (A.indexOf("msie 5.0") != -1 || A.indexOf("msie 6.0") != -1 || A.indexOf("msie 7.0") != -1 || A.indexOf("msie 8.0") != -1) {
        return false
    }
    return true
};
$.browse = function(B) {
    var A = window.navigator.userAgent.toLowerCase();
    return A.indexOf(B) != -1
};
$.rnd = function(B, A) {
    return Math.floor(Math.random() * (A + 1 - B) + B)
};
$.rotateEnd = function(A) {
    var B = "onorientationchange" in window,
    C = B ? "orientationchange": "resize";
    window.addEventListener(C,
    function() {
        var E = document.documentElement.clientWidth || document.body.clientWidth,
        D = document.documentElement.clientHeight || document.body.clientHeight;
        A && A(E > D ? "horizontal": "vertical")
    },
    false)
}; (function(A) {
    A.fn.addEvent = function(C, B) {
        var E = this[0];
        var D;
        if (E.addEventListener) {
            E.addEventListener(C, (D = function(G) {
                var F = B.call(E, G);
                if (F == false) {
                    G.cancelBubble = true;
                    G.preventDefault = false
                }
            }), false)
        } else {
            E.attachEvent("on" + C, (D = function(G) {
                var F = B.call(E, event);
                if (F == false) {
                    event.cancelBubble = true;
                    return false
                }
            }))
        }
    };
    A.fn.removeEvent = function(D, C, B) {
        if (D.removeEventListener) {
            D.removeEventListener(C, B, false)
        } else {
            D.detachEvent("on" + C, B)
        }
    };
    A.fn.addMouseWheel = function(B) {
        var D = this[0];
        function C(F) {
            var G = F || event,
            E = false;
            E = G.wheelDelta ? G.wheelDelta < 0 : G.detail > 0;
            B(E, G);
            G.preventDefault && G.preventDefault();
            return false
        }
        if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
            D.addEventListener("DOMMouseScroll", C, false)
        } else {
            this.addEvent("mousewheel", C)
        }
    };
    A.fn.sliderbase = function(B) {
        var C = {
            box: ".list",
            item: ".swiper-slide",
            init: null,
            fnChange: null,
            fnEnd: null
        };
        B = Object.extend(B, C);
        this.each(function(D, E) {
            var F = A(E); (function(H) {
                var I = H.find(B.item);
                if (I.length <= 1) {
                    return
                }
                var G = I.parent(),
                J = I[0].offsetWidth;
                ulwidth = J * I.length,
                left = 0;
                B.init && B.init.call(H, I);
                H.index = 0;
                G[0].innerHTML += G[0].innerHTML;
                G.css("width", ulwidth * 2);
                H.on("startMove",
                function(M, O) {
                    var K = O.obj,
                    N = O.iTarget,
                    L = O.fnEnd;
                    clearInterval(K.timer);
                    K.timer = setInterval(function() {
                        var P = true;
                        var Q = (N - left) / 4;
                        Q = Q > 0 ? Math.ceil(Q) : Math.floor(Q);
                        left += Q;
                        if (left != N) {
                            P = false
                        }
                        if (left < 0) {
                            K.style.left = left % ulwidth + "px"
                        } else {
                            K.style.left = (left % ulwidth - ulwidth) % ulwidth + "px"
                        }
                        if (P) {
                            clearInterval(K.timer);
                            L && L.call(H)
                        }
                    },
                    30)
                });
                H.on("prev",
                function(K) {
                    H.index = H.index - 1;
                    H.trigger("startMove", {
                        obj: G[0],
                        iTarget: -(H.index * J),
                        fnEnd: B.fnChange
                    })
                });
                H.on("next",
                function(K) {
                    H.index = H.index + 1;
                    H.trigger("startMove", {
                        obj: G[0],
                        iTarget: -(H.index * J),
                        fnEnd: B.fnChange
                    })
                });
                H.on("setIndex",
                function(K, L) {
                    H.trigger("startMove", {
                        obj: G[0],
                        iTarget: -(L * J),
                        fnEnd: B.fnChange
                    })
                });
                B.fnEnd && B.fnEnd.call(H, I)
            })(F)
        })
    };
    A.fn.fadesliderbase = function(B) {
        var C = {
            item: ".swiper-slide",
            init: null,
            fnChange: null,
            fnEnd: null,
            speed: 600
        };
        B = Object.extend(B, C);
        this.each(function(D, E) {
            var F = A(E); (function(H) {
                H.oindex = H.index = 0;
                var I = H.find(B.item);
                var G = I.length;
                H.on("prev",
                function(J) {
                    H.oindex = H.index;
                    H.index = H.index - 1;
                    if (H.index == 0) {
                        H.index = G - 1
                    }
                    H.trigger("trans")
                });
                H.on("next",
                function(J) {
                    H.oindex = H.index;
                    H.index = H.index + 1;
                    if (H.index > G - 1) {
                        H.index = 0
                    }
                    H.trigger("trans")
                });
                H.on("trans",
                function(J) {
                    I.eq(H.index).css("z-index", 10).fadeIn(B.speed);
                    if (H.index == H.oindex) {
                        return
                    }
                    I.eq(H.oindex).css("z-index", 0).fadeOut(B.speed);
                    B.fnChange && B.fnChange.call(H)
                });
                B.init && B.init.call(H, I)
            })(F)
        })
    };
    A.fn.loadHtml = function(B) {
        this.each(function(F, C) {
            var E = A(C);
            var D = B.url || E.attr("data-url");
            A.get(D + "?rn=" + new Date().getSeconds(),
            function(G) {
                B.fnEnd && B.fnEnd.call(E, G)
            })
        })
    };
    A.fn.open = function(B) {
        var C = {
            t: 0,
            l: 0,
            w: 200,
            h: 310,
            effect: "center",
            speed: 200,
            fnEnd: null
        };
        B = Object.extend(B, C);
        this.each(function(D, E) {
            $current = A(E); (function(F) {
                F.on("center",
                function(G) {
                    F.css("position", "absolute");
                    F.css("left", B.l);
                    F.css("top", B.t);
                    F.css("width", 0);
                    F.css("height", 0);
                    F.show();
                    F.animate({
                        width: B.w,
                        height: B.h,
                        marginLeft: -B.w / 2,
                        marginTop: -B.h / 2
                    },
                    B.speed, B.fnEnd)
                });
                F.on("hide",
                function(G) {
                    F.animate({
                        width: 0,
                        height: 0,
                        marginLeft: 0,
                        marginTop: 0
                    },
                    B.speed,
                    function() {
                        F.remove()
                    })
                });
                F.trigger(B.effect)
            })($current)
        })
    };
    A.fn.onload = function(B) {
        var C = this[0];
        C.onload = function() {
            B && B.call(C);
            C.onreadystatechange = null
        };
        C.onreadystatechange = function(D) {
            if (C.readyState == "complete") {
                B && B.call(C);
                C.onload = null
            }
        }
    };
    A.fn.iframe = function(C) {
        var D = {
            fnEnd: null,
            url: ""
        };
        C = Object.extend(C, D);
        var B = document.createElement("iframe");
        B.src = C.url;
        B.style.width = this.width() + "px";
        B.style.height = this.height() + "px";
        B.style.border = 0;
        B.scrolling = "no";
        B.style.overflow = "hidden";
        B.style.position = "relative";
        this[0].appendChild(B);
        C.fnEnd && C.fnEnd.call(B)
    };
    A.fn.center = function() {
        var C = this;
        function B() {
            if (A.browse("msie 6.0")) {
                C.css("position", "absolute");
                A(window).scroll(function(D) {
                    setTimeout(function() {
                        var F = document.documentElement.scrollTop || document.body.scrollTop;
                        var E = document.documentElement.clientHeight - C.height();
                        C[0].style.top = F + E + "px"
                    },
                    300)
                })
            } else {
                C.css("position", "fixed")
            }
            C.css("left", "50%");
            C.css("top", "50%");
            C.css("margin-left", -(C.width() / 2));
            C.css("margin-top", -(C.height() / 2));
            C.css("zIndex", 100)
        }
        A(window).resize(B).trigger("resize");
        return C
    };
    A.fn.back = function(D) {
        var E = {
            color: "#000",
            opacity: 0.5,
            fnEnd: null
        };
        D = Object.extend(D, E);
        var B = this;
        var F = A("<div>").css("background-color", D.color).css("opacity", D.opacity).css("filter", "alpha(opacity=" + (D.opacity * 100) + ")").css("position", "absolute").css("zIndex", 0).css("top", 0).css("left", 0);
        document.body.appendChild(F[0]);
        function C() {
            F.css("width", document.documentElement.clientWidth || document.body.clientWidth).css("height", document.documentElement.scrollHeight)
        }
        B.on("hide",
        function() {
            F.remove()
        });
        D.fnEnd && D.fnEnd.call(B);
        A(window).resize(C).trigger("resize");
        return B
    };
    A.fn.addClass3 = function(B, E) {
        var C = this[0];
        var D = B.charAt(0).toUpperCase() + B.substring(1);
        C.style["Webkit" + D] = E;
        C.style["ms" + D] = E;
        C.style["Moz" + D] = E;
        C.style["O" + D] = E;
        C.style[D] = E;
        return this
    };
    A.fn.touches = function(D) {
        var E = {
            init: null,
            touchstart: null,
            touchmove: null,
            touchend: null
        };
        D = Object.extend(D, E);
        var C = this,
        B = C[0];
        B.addEventListener("touchstart",
        function(G) {
            D.touchstart && D.touchstart.call(C, G);
            function F(I) {
                D.touchmove && D.touchmove.call(C, I)
            }
            function H(I) {
                D.touchend && D.touchend.call(C, I);
                document.removeEventListener("touchmove", F, false);
                document.removeEventListener("touchend", H, false)
            }
            document.addEventListener("touchmove", F, false);
            document.addEventListener("touchend", H, false);
            return false
        },
        false);
        D.init && D.init.call(C)
    };
    A.fn.touchePressed = function(C) {
        var D = {
            on: null,
            off: null
        };
        C = Object.extend(C, D);
        var B = this;
        B.interval = B.index = 0;
        B.touches({
            touchstart: function(F) {
                var E = B.attr("data-preventdefault");
                if (!E || E.indexOf(F.targetTouches[0].target.tagName.toLowerCase()) == -1) {
                    F.preventDefault()
                }
                B.index = 0;
                clearInterval(B.interval);
                this.interval = setInterval(function() {
                    B.index++;
                    C.on && C.on.call(B)
                },
                1000)
            },
            touchend: function(E) {
                clearInterval(B.interval);
                C.off && C.off.call(B)
            }
        })
    };
    A.fn.toucheDelete = function(C) {
        var D = {
            time: 1,
            onEnd: null,
            offEnd: null
        };
        var B = this;
        C = Object.extend(C, D);
        B.touchePressed({
            on: function(E) {
                if (B.index > C.time) {
                    clearInterval(B.interval);
                    C.onEnd && C.onEnd.call(B)
                }
            },
            off: function(E) {
                C.offEnd && C.offEnd.call(B)
            }
        })
    }
})(jQuery); (function(A) {
    A.fn.imgload = function() {
        var C = this;
        function B(G, F, I, H) {
            return (G <= I && F >= I) || (G <= H && F >= H) || (I <= G && H >= G) || (I <= F && H >= F)
        }
        function D(F) {
            return F.attr("src") != F.attr("data-src")
        }
        function E() {
            var F = document.documentElement.scrollTop || document.body.scrollTop;
            C.each(function(K, I) {
                var G = A(I);
                var H = parseInt(G.css("height"));
                var J = G.position();
                if (G.attr("data-src") && D(G) && B(F, F + document.documentElement.clientHeight, J.top, J.top + H)) {
                    G.attr("src", G.attr("data-src")).css({
                        "opacity": "0"
                    },
                    {
                        "filter": "alpha(opacity=0)"
                    }).onload(function() {
                        G.animate({
                            "opacity": 100
                        })
                    })
                }
            })
        }
        A(window).scroll(E).trigger("scroll")
    };
    A.fn.sliderBox = function(B) {
        var C = {
            index: -1,
            onlyOne: false,
            loadEnd: null,
            click: null,
            clickEnd: null,
            animateEnd: null
        };
        B = Object.extend(B, C);
        var G = -1;
        if (B.index) {
            if (typeof B.index == "number") {
                G = B.index - 1
            } else {
                G = B.index
            }
        } else {
            this.parents("ul,div").each(function(M, K) {
                var L = A(K);
                if (L.attr("data-index") != undefined) {
                    G = parseInt(L.attr("data-index"))
                }
            })
        }
        var F = A(this[0]);
        var D = this;
        D.each(function(M, L) {
            var K = A(L).next();
            K.attr("data-height", K.height())
        });
        var H = [],
        I = null,
        E = null;
        function J(M, K) {
            var O = A(K);
            var N = O.next(),
            L = parseInt(N.attr("data-height"));
            if (B.onlyOne && I && I.attr("index") != O.attr("index")) {
                I.next().stop().animate({
                    height: 0
                },
                function() {
                    B.animateEnd && B.animateEnd.call(O)
                });
                E = I;
                I = null
            }
            N.animate({
                height: N.height() == 0 ? L: 0
            },
            "fast",
            function() {
                if (N.height() > 0) {
                    N.height("100%").removeClass("height")
                }
            });
            B.clickEnd && B.clickEnd.call(O, {
                k: N.height() == 0 ? "down": "up",
                temp: E
            });
            I = O
        }
        F.off("slider");
        F.on("slider", J);
        this.each(function(M, K) {
            var L = A(K);
            L.unbind("click").bind("click",
            function(N) {
                N.preventDefault();
                if (B.click == null) {
                    F.trigger("slider", A(this))
                } else {
                    B.click.call(L, F)
                }
                return false
            });
            if (G != M && G != "all") {
                L.next().height(0)
            } else {
                I = L;
                H.push(M)
            }
            L.attr("index", M)
        });
        if (H.length > 0) {
            B.loadEnd && B.loadEnd.call(this, H)
        }
    };
    A.fn.top = function(D) {
        var E = {
            speed: 40,
            scroll: null
        };
        D = Object.extend(D, E);
        var B = this;
        function C() {
            var F = document.documentElement.scrollTop || document.body.scrollTop;
            var G = document.documentElement.clientHeight || document.body.clientHeight;
            if (F - G >= 0) {
                B.show()
            } else {
                B.hide()
            }
            D.scroll && D.scroll.call(B, F)
        }
        B.click(function() {
            var G = document.documentElement.clientHeight || document.body.clientHeight;
            var F = document.documentElement.scrollHeight || document.body.scrollHeight;
            clearInterval(B.interval);
            B.interval = setInterval(function() {
                var H = document.documentElement.scrollTop || document.body.scrollTop;
                if (H <= 0) {
                    clearInterval(B.interval)
                }
                window.scrollBy(0, -(F / G * D.speed))
            },
            30)
        });
        A(window).scroll(C).trigger("scroll")
    };
    A.fn.location = function(E) {
        var G = {
            key: "span",
            clickEnd: null
        };
        E = Object.extend(E, G);
        var D = {};
        var F = this.attr("data-location");
        if (!F) {
            return
        }
        this.parent().find("." + F + " " + E.key).each(function(K, I) {
            var J = A(I),
            H = J.attr("data-key");
            if (H) {
                D[H] = J.position().top
            }
        });
        var B = this.find("a");
        B.each(function(J, H) {
            var I = A(H);
            I.attr("data-top", D[I.html()])
        });
        function C(J) {
            var L = A(this);
            J.preventDefault();
            var I = parseInt(L.attr("data-top"));
            var H = 0;
            function K() {
                var M = I / 5;
                H += M;
                window.scrollBy(0, M);
                if (H >= I) {
                    clearInterval(J.interval)
                }
            }
            if (I > 0) {
                J.interval = setInterval(K, 30)
            }
            E.clickEnd && E.clickEnd.call(L);
            return false
        }
        B.unbind("click").bind("click", C)
    };
    A.fn.sliderMenu = function(D) {
        var F = {
            init: null,
            clickEnd: null
        };
        D = Object.extend(D, F);
        var C = this,
        E = A("." + C.attr("data-menu"));
        function B(H, G) {
            while (G) {
                if (G == H) {
                    return true
                }
                G = G.parentNode
            }
            return false
        }
        A(window).touches({
            touchstart: function(H) {
                var I = B(C[0], H.targetTouches[0].target);
                var G = B(E[0], H.targetTouches[0].target);
                var J = "none";
                if (I && !G) {
                    J = E[0].style.display == "none" ? "block": "none"
                } else {
                    if (!I && G) {
                        J = E[0].style.display = "block"
                    } else {
                        J = E[0].style.display = "none"
                    }
                }
                D.clickEnd && D.clickEnd.call(C, E, J)
            }
        });
        D.init && D.init.call(E)
    };
    A.fn.swipe = function(C) {
        var D = {
            show: "swipeLeft-block"
        };
        C = Object.extend(C, D);
        this.each(function(H, F) {
            var G = A(F); (function(I) {
                var J = A("." + I.attr("data-swipe")),
                K = J.children(1);
                I.click(function() {
                    if (!K.hasClass(C.show)) {
                        J.css("zIndex", 200);
                        K.addClass(C.show);
                        J.prev().show()
                    }
                });
                J.prev().click(function() {
                    K.removeClass(C.show);
                    J.prev().hide()
                })
            })(G)
        });
        var E = A(document).height();
        var B = A(".leftPopup").height();
        B = (E > B) ? E: B;
        A(".leftmask, .leftPopup").css("height", B)
    };
    A.fn.navigate = function(B) {
        var C = {
            sandAjax: null,
            selectFn: null,
            init: null,
            speed: 100
        };
        B = Object.extend(B, C);
        var M = this,
        I = [];
        M.rows = 0;
        var E = [],
        D = 0,
        H = 0,
        K = 0;
        var J = M.first();
        J.on("to",
        function(Q, N) {
            var P = I.sortValue(function(S, T) {
                if (this[S].top > this[T].top) {
                    temp = this[S];
                    this[S] = this[T];
                    this[T] = temp
                }
            });
            var R = A(P).eq(N),
            O = R[0].top;
            A("html,body").animate({
                scrollTop: O
            },
            B.speed)
        });
        var G = document.body.clientHeight > document.documentElement.clientHeight ? document.documentElement.clientHeight != 0 ? document.documentElement.clientHeight: document.body.clientHeight: document.body.clientHeight,
        L = document.body.scrollHeight > document.documentElement.scrollHeight ? document.documentElement.scrollHeight != 0 ? document.documentElement.scrollHeight: document.body.scrollHeight: document.body.scrollHeight;
        function F() {
            var P = null;
            E = I.sortValue(function(T, U) {
                if (this[T].top > this[U].top) {
                    P = this[T];
                    this[T] = this[U];
                    this[U] = P
                }
            });
            var N = A(window).scrollTop(),
            R = E[0].top;
            var O = N > H ? "down": "up";
            switch (O) {
            case "down":
                if ((N + G) >= I[I.length - 1].top) {
                    B.selectFn && B.selectFn.call(I[I.length - 1], I.length - 1)
                } else {
                    for (var Q = 0; Q < I.length; Q++) {
                        if (N >= I[Q].top - I[Q].h) {
                            B.selectFn && B.selectFn.call(M, Q)
                        }
                    }
                }
                break;
            default:
                for (var Q = 0; Q < I.length; Q++) {
                    var S = I[Q - 1] ? Q - 1 : Q;
                    if (N <= I[Q].top && N >= I[S].top) {
                        B.selectFn && B.selectFn.call(M, S)
                    }
                }
                break
            }
            H = N
        }
        M.each(function(P, N) {
            var O = A(N);
            O.on("succeed",
            function(R, S) {
                var Q = A(S);
                if (M.length - 1 == M.rows) {
                    M.each(function(V, T) {
                        var U = A(T);
                        I.push({
                            section: U,
                            top: U.offset().top,
                            h: U.height()
                        })
                    });
                    A(window).scroll(F).trigger("scroll");
                    B.init && B.init.call(J)
                }
                M.rows++
            });
            O.index = P;
            if (O.attr("data-ajax") == "true") {
                B.sandAjax && B.sandAjax.call(O)
            } else {
                O.trigger("succeed", O)
            }
        })
    };
    A.fn.gesture = function(B) {
        var C = {
            items: "a",
            selectFn: null,
            top: 0,
            offsetTop: 0,
            init: null,
            delay: 60
        };
        B = Object.extend(B, C);
        var D = this.find(B.items);
        var H = D.eq(0).height();
        var J = this,
        G = 0,
        I = "",
        F = 0,
        E = [];
        J.on("compareTop",
        function(N, L) {
            var O = L.type != "touchstart";
            if (!O) {
                E.length = 0;
                D.each(function(V, U) {
                    E.push({
                        key: U.innerHTML,
                        top: U.offsetTop + B.offsetTop
                    })
                })
            }
            var Q = L.targetTouches[0].pageY - (document.body.scrollTop + B.top);
            var R = Q > G ? "down": "up";
            if (R == "down") {
                var S = [];
                for (var K = 0; K < E.length; K++) {
                    if (Q >= E[K].top) {
                        S.push(E[K].key)
                    }
                }
                var M = S[S.length - 1];
                if (M && M != I) {
                    clearTimeout(F);
                    if (O) {
                        F = setTimeout(function() {
                            B.selectFn && B.selectFn(M)
                        },
                        B.delay)
                    } else {
                        B.selectFn && B.selectFn(M)
                    }
                }
                I = M
            } else {
                var T = [];
                for (var K = 0; K < E.length; K++) {
                    var P = E[K - 1] ? K - 1 : K;
                    if (Q < H) {
                        T.push(E[0].key)
                    } else {
                        if (Q - H <= E[K].top && Q - H >= E[P].top) {
                            T.push(E[K].key)
                        }
                    }
                }
                var M = T[T.length - 1];
                if (M && M != I) {
                    clearTimeout(F);
                    if (O) {
                        F = setTimeout(function() {
                            B.selectFn && B.selectFn(M)
                        },
                        B.delay)
                    } else {
                        B.selectFn && B.selectFn(M)
                    }
                }
                I = M
            }
            G = Q
        });
        B.init && B.init.call(J)
    };
    A.fn.scrollbarX = function(B) {
        var D = {
            current: ".current",
            init: null,
            touchmove: null,
            touchstart: null,
            touchend: null,
            space: 10
        };
        B = Object.extend(B, D);
        var P = this,
        N = 0,
        K = {};
        var O = P.find(B.current),
        M = P.width(),
        H = O.first().children(0),
        F = H.width(),
        J = P.width(),
        E = parseInt(P.attr("data-min")),
        I = parseInt(P.attr("data-max")),
        G = J / I;
        function L(Q) {
            return parseInt((1 - parseInt(J - Q) / J) * I)
        }
        O.each(function(S, Q) {
            var R = A(Q);
            R.on("setindex",
            function(U, V) {
                var T = V * G;
                R.width(T);
                R.X = T
            });
            R.dragX({
                onstart: function(U, X) {
                    var T = parseInt(R.attr("data-index") || 0);
                    var V = R.attr("data-site") || "left";
                    var W = K[V];
                    B.touchstart && B.touchstart.call(R, {
                        current: T,
                        min: W.min,
                        max: W.max
                    })
                },
                onmove: function(U) {
                    var T = L(U, J);
                    var V = R.attr("data-site") || "left";
                    var W = K[V];
                    if (T < W.min || T > W.max) {
                        return
                    }
                    if (T < W.min) {
                        T = W.min
                    }
                    if (T > W.max) {
                        T = W.max
                    }
                    R.width(U);
                    B.touchmove && B.touchmove.call(R, {
                        current: T,
                        min: W.min,
                        max: W.max
                    });
                    if (O.length > 1) {
                        if (V == "left") {
                            K["right"] = {
                                min: T + B.space,
                                max: I
                            }
                        } else {
                            K["left"] = {
                                min: E,
                                max: T - B.space
                            }
                        }
                    }
                    R.attr("data-index", T)
                },
                onend: function(T) {
                    B.touchend && B.touchend.call(R)
                }
            })
        });
        function C() {
            F = H.width();
            J = P.width();
            G = J / I;
            B.init && B.init.call(P);
            O.each(function(R, Q) { (function(T) {
                    var S = T.attr("data-index") || 0;
                    T.trigger("setindex", S)
                })(A(Q))
            });
            K = {};
            if (O.length > 1) {
                O.each(function(U, R) {
                    var T = A(R);
                    var S = T.attr("data-site") || "left";
                    var Q = parseInt(T.attr("data-index") || 0);
                    if (S == "left") {
                        K["right"] = {
                            min: Q + B.space,
                            max: I
                        }
                    } else {
                        if (S == "right") {
                            K["left"] = {
                                min: E,
                                max: Q - B.space
                            }
                        }
                    }
                })
            } else {
                K["left"] = {
                    min: E,
                    max: I
                }
            }
        }
        A(window).resize(C).trigger("resize")
    };
    A.fn.scrollbarY = function(B) {
        var C = {
            current: ".current",
            init: null,
            touchmove: null,
            touchstart: null,
            touchend: null
        };
        B = Object.extend(B, C);
        var N = this,
        J = N.find(B.current),
        G = N.height(),
        F = J.children(0),
        I = F.height(),
        E = N.height(),
        D = parseInt(N.attr("data-min")),
        H = parseInt(N.attr("data-max")),
        K = E / H,
        L = 0;
        function M(O) {
            return parseInt((1 - parseInt(E - O) / E) * H)
        }
        N.dragY({
            onstart: function(P, O) {
                if (L < D) {
                    L = D
                }
                if (L > H) {
                    L = H
                }
                B.touchstart && B.touchstart.call(J, {
                    current: L,
                    min: D,
                    max: H
                })
            },
            onmove: function(O) {
                L = M(O, E);
                if (L < D || L > H) {
                    return
                }
                J.height(O);
                B.touchmove && B.touchmove.call(N, {
                    current: L,
                    min: D,
                    max: H
                })
            },
            onend: function(O) {
                B.touchend && B.touchend.call(N)
            }
        });
        N.on("setindex",
        function(P, Q) {
            var O = Q * K;
            J.height(O);
            N.Y = O;
            L = Q
        }).trigger("setindex", parseInt(J.attr("data-index")));
        B.init && B.init.call(N)
    };
    A.fn.sliderbutton = function(B) {
        var C = {
            init: null,
            transition: "all 0.5s ease-out",
            selectfn: null
        };
        B = Object.extend(B, C);
        this.each(function(E, D) { (function(H) {
                var J = H.children(0),
                I = J.children(0),
                K = I.width(),
                F = J.parent().width(),
                G = H.attr("data-index");
                J.addClass3("transition", B.transition);
                H.dragBtnX({
                    width: K,
                    onstart: function(L, M) {
                        J.cx = M
                    },
                    onmove: function(L) {
                        if (L < K) {
                            L = K
                        } else {
                            if (L > F) {
                                L = F
                            }
                        }
                        if (L > F / 2 || L < F / 2) {
                            J.width(L);
                            J.transitionEnd({
                                end: function() {
                                    B.selectfn && B.selectfn.call(H, L == K ? "left": "right")
                                }
                            })
                        }
                    },
                    onend: function(L, M) {
                        if (M == J.cx) {
                            L = M <= K ? F: K
                        } else {
                            if (L > F - F / 4) {
                                L = F
                            } else {
                                if (L <= F - F / 4) {
                                    L = K
                                }
                            }
                        }
                        J.width(L);
                        J.transitionEnd({
                            end: function() {
                                B.selectfn && B.selectfn.call(H, L == K ? "left": "right")
                            }
                        })
                    }
                });
                H.on("setIndex",
                function(M, N) {
                    var L = N == "left" ? K: F;
                    J.width(L);
                    J.transitionEnd({
                        end: function() {
                            B.selectfn && B.selectfn.call(H, N)
                        }
                    })
                }).trigger("setIndex", G);
                B.init && B.init.call(H)
            })(A(D))
        })
    };
    A.fn.audio = function(B) {
        var D = {
            v: "audio",
            loop: false,
            init: null,
            onended: null
        };
        B = Object.extend(B, D);
        var C = this;
        var E = document.createElement(B.v),
        I = A(E);
        var H = C.attr("data-url").split(",");
        for (var G = 0; G < H.length; G++) {
            var F = document.createElement("source");
            F.src = H[G];
            E.appendChild(F)
        }
        if (B.loop) {
            I.attr("loop", "")
        }
        I.on("play",
        function(J) {
            E.play()
        });
        I.on("stop",
        function(J) {
            E.currentTime = 0;
            E.pause()
        });
        I.on("pause",
        function(J) {
            E.pause()
        }).trigger("pause");
        I.on("volume",
        function(K, J) {
            if (J <= 0) {
                J = 0
            } else {
                if (J >= 10) {
                    J = 10
                }
            }
            E.volume = J
        });
        E.addEventListener("ended",
        function() {
            B.onended && B.onended.call(I)
        },
        false);
        this[0].appendChild(E);
        E.addEventListener("canplay",
        function() {
            B.init && B.init.call(I)
        },
        false)
    }
})(jQuery);
$(function() {
    var C = $("body"),
    B = C.find(".fixed-nav"),
    J = B.find("a"),
    G = C.find(".alert");
    $.rotateEnd(function(N) {
        switch (N) {
        case "horizontal":
            B.hide();
            break;
        case "vertical":
            B.show();
            break
        }
    });
    var E = $(".phone-title", C);
    var D = [];
    for (var A = 0; A < E.length; A++) {
        D.push(E[A].getAttribute("data-key"))
    }
    var M = E.eq(0),
    K = false;
    var I = B.find(".rows-box"),
    H = I.find("a");
    var F = H.length * H.height();
    I.height(F);
    B.height(F);
    var L = document.documentElement.clientHeight;
    B[0].style.top = L / 2 - F / 2 + "px";
    E.navigate({
        speed: 100,
        init: function() {
            var N = this;
            B.gesture({
                offsetTop: L / 2 - F / 2,
                top: 0,
                init: function() {
                    var O = this;
                    B.touches({
                        touchstart: function(P) {
                            P.preventDefault();
                            K = true;
                            O.trigger("compareTop", P)
                        },
                        touchmove: function(P) {
                            O.trigger("compareTop", P)
                        },
                        touchend: function() {
                            K = false;
                            setTimeout(function() {
                                G.hide()
                            },
                            200)
                        }
                    });
                    M.on("select",
                    function(P, Q) {
                        J.removeClass("current");
                        J.eq(Q).addClass("current")
                    });
                    B.css("opacity", 1)
                },
                selectFn: function(O) {
                    var Q = D.indexOf(O);
                    if (Q !== -1) {
                        N.trigger("to", Q)
                    }
                    var P = J.eq(Q);
                    G.html("<span>" + O + "</span>");
                    G.show();
                    M.trigger("select", Q)
                }
            })
        }
    });
    B.show()
});