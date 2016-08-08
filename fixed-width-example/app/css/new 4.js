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