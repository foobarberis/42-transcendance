/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa = this || self;
function b(a, c) {
    a = a.split(".");
    var d = aa;
    a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
    for (var y; a.length && (y = a.shift()); ) a.length || void 0 === c ? (d[y] && d[y] !== Object.prototype[y] ? (d = d[y]) : (d = d[y] = {})) : (d[y] = c);
}
var e,
    f = document.getElementById("gameModeScreen"),
    g = document.getElementById("controlModeScreen"),
    ba = document.getElementById("gameOptionsScreen"),
    h = document.getElementById("difficultyScreen"),
    ca = document.getElementById("onePlayerInstructionsDiv"),
    da = document.getElementById("twoPlayersInstructionsDiv"),
    k = document.getElementById("gameArea"),
    l = document.getElementById("gameScreen"),
    m = document.getElementById("gameCanvas"),
    ea = document.getElementById("player1Score"),
    fa = document.getElementById("player2Score"),
    n = document.getElementById("pauseDiv"),
    p = document.getElementById("endGameScreen"),
    ha = document.getElementById("winsStats"),
    q = m.getContext("2d"),
    r = !1,
    t,
    u = 0,
    v,
    w,
    x,
    z = 0,
    A,
    B = !0,
    C = 0,
    D = 0,
    ia = 1,
    E = 10,
    F = 0,
    G = 0,
    H = null,
    I,
    J,
    K = !1,
    L = !1,
    M = !0,
    N = 10,
    O = !0,
    P = 0,
    Q = new Audio("paddleBounce.mp3"),
    R,
    S = 0,
    T = 0,
    ja = 1e3 / 60;
function U(a) {
    this.c = a;
    this.a = m.height / 2 - v / 2;
    this.width = w;
    this.height = v;
    this.b = 0;
}
U.prototype.f = function () {
    return this.a + this.height / 2;
};
function ka() {
    this.c = this.i = 0;
    this.h = !1;
    this.height = this.width = w;
    this.a = m.width / 2;
    this.b = m.height / 2 - this.height / 2 + (Math.floor(4 * Math.random()) + 1);
    this.g = !0;
    V(this, 0, !0);
}
function V(a, c, d) {
    c *= Math.PI / 4;
    d = d && O ? E / 2 : E;
    a.i = (a.g ? 1 : -1) * Math.cos(c) * d;
    a.c = Math.sin(c) * d;
}
ka.prototype.f = function () {
    return this.b + this.height / 2;
};
function la() {
    D = 0;
    Q.volume = 1;
    650 > ma() && (k.style.width = 0.98 * ma() + "px");
    480 > na() ? ((k.style.height = 0.98 * na() + "px"), (w = (15 * k.offsetHeight) / 480)) : (w = 15);
    m.width = k.offsetWidth;
    m.height = k.offsetHeight;
    f.style.display = "flex";
    g.style.display = "none";
    ba.style.display = "none";
    h.style.display = "none";
    l.style.display = "none";
    p.style.display = "none";
    ca.style.display = "none";
    da.style.display = "none";
    var a = oa("pgwins");
    T = S = 0;
    a ? (a = a.split("~")) && 2 == a.length && ((S = Number(a[0])), (T = Number(a[1]))) : pa();
    qa();
    (a = oa("pgopts")) && (a = a.split("~")) && 5 == a.length && ((r = 0 == Number(a[0]) ? !1 : !0), (z = Number(a[1])), (N = Number(a[2])), (O = 0 == Number(a[3]) ? !1 : !0), (P = Number(a[4])), ra());
    if ("ontouchstart" in window || navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) (C = 0.25), h.appendChild(document.getElementById("soundButtonWrapper")), W(!0);
}
b("ShowMainScreen", la);
function qa() {
    ha.innerHTML = S + " OF " + T;
}
b("SwitchSound", function () {
    r = !r;
    ra();
});
function ra() {
    document.getElementById("soundButton").classList.remove("soundOn");
    document.getElementById("soundButton").classList.remove("soundOff");
    document.getElementById("soundButton").classList.add(r ? "soundOn" : "soundOff");
    sa();
}
function W(a) {
    D = 1;
    (B = a)
        ? ((document.getElementById("easyDifficultyButton").innerHTML = '<span class="buttonKey">(e)&nbsp;</span>Easy'), (document.getElementById("hardDifficultyButton").innerHTML = '<span class="buttonKey">(h)&nbsp;</span>Hard'))
        : ((document.getElementById("easyDifficultyButton").innerHTML = '<span class="buttonKey">(s)&nbsp;</span>Slow'), (document.getElementById("hardDifficultyButton").innerHTML = '<span class="buttonKey">(f)&nbsp;</span>Fast'));
    ca.style.display = B ? "block" : "none";
    da.style.display = B ? "none" : "block";
    0.25 == C ? X(0.25) : B ? ((f.style.display = "none"), (l.style.display = "none"), (p.style.display = "none"), (g.style.display = B ? "flex" : "none"), (h.style.display = B ? "none" : "flex")) : X(0);
}
b("SetIsOnePlayerMode", W);
function X(a) {
    D = 2;
    C = a;
    m.removeEventListener("mousemove", ta);
    m.removeEventListener("touchstart", ua);
    m.removeEventListener("touchend", va);
    1 == C ? m.addEventListener("mousemove", ta) : 0.25 == C && (m.addEventListener("touchstart", ua), m.addEventListener("touchend", va));
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "flex";
    l.style.display = "none";
    p.style.display = "none";
}
b("SetControlMode", X);
function Y(a) {
    ia = a;
    wa();
}
b("SetDifficulty", Y);
function wa() {
    D = 3;
    K = !0;
    f.style.display = "none";
    h.style.display = "none";
    l.style.display = "block";
    p.style.display = "none";
    m.style.cursor = "none";
    F = 0;
    ea.innerHTML = F;
    G = 0;
    fa.innerHTML = G;
    M = !0;
    switch (ia) {
        case 0:
            A = 8;
            E = B ? 11 : 8;
            x = 0.1;
            break;
        case 1:
            A = B ? 8 : 10;
            E = B ? 11 : 10;
            x = 0.13;
            break;
        case 2:
            A = B ? 8 : 12;
            E = B ? 11 : 12;
            x = 0.16;
            break;
        default:
            (A = B ? 8 : 10), (E = B ? 11 : 10), (x = 0.13);
    }
    A += z;
    e = new ka();
    v = 5 * w;
    I = new U(2 * w);
    J = new U(m.width - 3 * w);
    t = m.height - w - J.height;
    R = m.getBoundingClientRect().top;
    q.fillStyle = "lightgray";
    q.fillRect(0, 0, m.width, w);
    q.fillRect(0, m.height - w, m.width, m.height);
    xa();
    H = setInterval(xa, ja);
}
b("StartGame", wa);
function ya(a) {
    D = 4;
    L = !1;
    n.style.display = "none";
    null != H && (clearInterval(H), (H = null), (K = !1));
    B && (2 == a && (S += 1), 0 != a && (T += 1), za("pgwins", S + "~" + T));
    qa();
    p.style.display = "flex";
    m.style.cursor = "pointer";
    p.classList.remove("player1WonMessagePosition");
    p.classList.remove("player2WonMessagePosition");
    p.classList.add(1 == a ? "player1WonMessagePosition" : "player2WonMessagePosition");
}
function xa() {
    if (!L) {
        q.clearRect(0, w, m.width, m.height - 2 * w);
        B && (I.a += (e.f() - I.f()) * x);
        I.a += I.b;
        J.a += J.b;
        I.a < w ? (I.a = w) : I.a > t && (I.a = t);
        J.a < w ? (J.a = w) : J.a > t && (J.a = t);
        q.fillStyle = "lightgray";
        q.fillRect(I.c, I.a, I.width, I.height);
        q.fillRect(J.c, J.a, J.width, J.height);
        e.a += e.i;
        e.b += e.c;
        e.b < w ? ((e.b = w), (e.c *= -1), r && Q.play()) : e.b + w > m.height - w && ((e.b = m.height - 2 * w), (e.c *= -1), r && Q.play());
        if ((0 > e.a || e.a > m.width) && !e.h) {
            e.h = !0;
            if (0 > e.a) {
                G += 1;
                fa.innerHTML = G;
                var a = 1;
            } else (F += 1), (ea.innerHTML = F), (a = 2);
            (F >= N || G >= N) && ya(F > G ? 1 : 2);
            setTimeout(function () {
                M = 0 == P ? !M : 2 == P ? 2 == a : 1 == a;
                var d = e;
                d.g = M;
                d.a = m.width / 2;
                d.b = Math.floor(Math.random() * (m.height / 2 - d.height / 2)) + 100;
                V(d, Math.floor(100 * Math.random()) / 100, !0);
                d.h = !1;
            }, 450);
        }
        u = e.g
            ? e.a < J.c + J.width && e.a + e.width > J.c && e.b < J.a + J.height && e.b + e.height > J.a
                ? e.a > J.c + J.width / 2
                    ? 1
                    : 2
                : 0
            : e.a < I.c + I.width && e.a + e.width > I.c && e.b < I.a + I.height && e.b + e.height > I.a
            ? e.a + e.width < I.c + I.width / 2
                ? 1
                : 2
            : 0;
        if (0 != u) {
            if (2 == u) {
                var c = e.g ? J : I;
                e.g = !e.g;
                V(e, (e.f() - c.f()) / (c.height / 2), !1);
            } else 1 == u && (e.c *= -1);
            r && Q.play();
        }
        K && q.fillRect(e.a, e.b, e.width, e.height);
        for (c = w; c < m.height - w; c += 2 * w) q.fillRect(m.width / 2 - w / 2, c, w, w);
    }
}
function ta(a) {
    1 == C && K && ((a = a.clientY - R), a < w ? (J.a = w) : (J.a = a > m.height - w ? m.height - w : a));
}
document.addEventListener("keydown", function (a) {
    var c = a.which || a.keyCode;
    3 == D && 0 == C
        ? (38 === c ? ((J.b = -A), a.preventDefault()) : 40 === c && ((J.b = A), a.preventDefault()), 83 !== c || B)
            ? 88 !== c || B || (I.b = A)
            : (I.b = -A)
        : 0 == D
        ? 49 === c
            ? W(!0)
            : 50 === c && W(!1)
        : 1 == D
        ? 77 === c
            ? X(1)
            : 75 === c && X(0)
        : 2 == D
        ? 69 === c || 83 == c
            ? Y(0)
            : 77 === c
            ? Y(1)
            : (72 === c || 70 == c) && Y(2)
        : 4 == D && 82 === c && wa();
});
document.addEventListener("keyup", function (a) {
    a = a.which || a.keyCode;
    27 === a && (K && ya(0), la());
    K && 80 == a && ((L = !L) ? ((L = !0), (n.style.display = "block")) : ((L = !1), (n.style.display = "none")));
    if (0 == C && K) {
        if (38 === a || 40 === a) J.b = 0;
        if (83 === a || 88 === a) I.b = 0;
    }
});
function ua(a) {
    if (0.25 == C && K) {
        var c = "undefined" === typeof a.j ? a : a.j;
        (c.touches[0] || c.changedTouches[0]).clientY - R < J.f() ? (J.b = -A) : (J.b = A);
        a.preventDefault();
    }
}
function va(a) {
    0.25 == C && K && ((J.b = 0), a.preventDefault());
}
function Z() {
    D = 5;
    sa();
    f.style.display = "none";
    ba.style.display = "block";
    document.getElementById("score3").classList.remove("selected");
    document.getElementById("score5").classList.remove("selected");
    document.getElementById("score10").classList.remove("selected");
    document.getElementById("score15").classList.remove("selected");
    document.getElementById("score20").classList.remove("selected");
    document.getElementById("serve0").classList.remove("selected");
    document.getElementById("serve1").classList.remove("selected");
    document.getElementById("serve1").classList.remove("selected");
    document.getElementById("sense0").classList.remove("selected");
    document.getElementById("sense1").classList.remove("selected");
    document.getElementById("sense2").classList.remove("selected");
    document.getElementById("starts0").classList.remove("selected");
    document.getElementById("starts1").classList.remove("selected");
    document.getElementById("starts2").classList.remove("selected");
    3 == N
        ? document.getElementById("score3").classList.add("selected")
        : 5 == N
        ? document.getElementById("score5").classList.add("selected")
        : 10 == N
        ? document.getElementById("score10").classList.add("selected")
        : 15 == N
        ? document.getElementById("score16").classList.add("selected")
        : 20 == N && document.getElementById("score20").classList.add("selected");
    O ? document.getElementById("serve1").classList.add("selected") : document.getElementById("serve0").classList.add("selected");
    -3 == z ? document.getElementById("sense0").classList.add("selected") : 0 == z ? document.getElementById("sense1").classList.add("selected") : 3 == z && document.getElementById("sense2").classList.add("selected");
    0 == P ? document.getElementById("starts0").classList.add("selected") : 1 == P ? document.getElementById("starts1").classList.add("selected") : 2 == P && document.getElementById("starts2").classList.add("selected");
}
b("OpenOptions", Z);
b("SetScoreToWin", function (a) {
    N = a;
    Z();
});
b("SetServeSlow", function (a) {
    O = a;
    Z();
});
b("SetKeyboardSensitivity", function (a) {
    z = a;
    Z();
});
b("SetStarts", function (a) {
    P = a;
    Z();
});
function sa() {
    za("pgopts", (r ? 1 : 0) + "~" + z + "~" + N + "~" + (O ? 1 : 0) + "~" + P);
}
b("ResetOptions", function () {
    z = 0;
    N = 10;
    O = !0;
    P = 0;
    Z();
});
function pa() {
    T = S = 0;
    za("pgwins", "0~0");
    qa();
}
b("ResetLifetime", pa);
function za(a, c) {
    var d = new Date();
    d.setDate(d.getDate() + 365);
    document.cookie = a + "=" + (c + ("; expires=" + d.toUTCString())) + ";path=/";
}
function oa(a) {
    var c = document.cookie,
        d = c.indexOf(" " + a + "=");
    -1 == d && (d = c.indexOf(a + "="));
    -1 == d ? (c = null) : ((d = c.indexOf("=", d) + 1), (a = c.indexOf(";", d)), -1 == a && (a = c.length), (c = c.substring(d, a)));
    return c;
}
b("GotoSolitaire", function () {
    window.open("https://www.solitairebliss.com");
});
function ma() {
    return null != window.innerWidth ? window.innerWidth : null != document.body ? document.body.clientWidth : null;
}
function na() {
    return null != window.innerHeight ? window.innerHeight : null != document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
}
