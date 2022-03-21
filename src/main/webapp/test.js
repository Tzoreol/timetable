(this["webpackJsonpbagar-helper"] =
    this["webpackJsonpbagar-helper"] || []).push([
    [0],
    {
        11: function (e, t, n) {
            "use strict";
            (function (e) {
                var c,
                    a = n(12),
                    r = n(2),
                    s = n(13),
                    o = n(14),
                    l = n(4),
                    i = n(21),
                    d = n(20),
                    h = n(19),
                    b = n(1),
                    u = n.n(b),
                    j = (n(28), n(15)),
                    p = n(3),
                    O = n(0),
                    f = [
                        "Water",
                        "Fire",
                        "Wood",
                        "Earth",
                        "Metal",
                        "Ice",
                        "Thund",
                        "Wind",
                        "Dark",
                        "Cristal",
                        "Mist",
                        "Lava",
                        "Sand",
                        "Rock",
                        "Salt",
                        "Fungal",
                        "Vermin",
                    ],
                    g = [
                        [1, 1, 0, -1, 1, -1, 0, 0, 1, -1, 1, 1, 0, 1, -1, -1, 0],
                        [-1, 0, 1, 0, 1, 1, 0, 0, -1, -1, 0, 0, 0, -1, 0, 1, 1],
                        [1, 0, -1, 1, -1, 0, 0, 0, 0, -1, 1, -1, 0, 1, 0, 0, 0],
                        [1, 1, -1, 0, 0, -1, 1, 0, -1, -1, 0, 0, 1, 0, 0, 0, 1],
                        [0, -1, 1, 1, -1, -1, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 1],
                        [0, 0, 1, -1, -1, -1, 0, 1, -1, 1, 1, 0, 0, 1, -1, 0, 0],
                        [1, 0, -1, -1, 1, 1, 1, 0, 0, 1, -1, 0, -1, -1, 0, 0, 1],
                        [-1, -1, 1, 0, -1, 0, 1, 1, 1, -1, 1, -1, 1, -1, 0, 0, 0],
                        [0, 1, -1, 1, 0, 0, -1, -1, 1, 1, -1, 1, 0, 0, 1, 0, -1],
                        [-1, -1, 1, 1, 1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1],
                        [1, 0, -1, 0, 0, 1, 0, 0, 1, -1, 1, 0, 0, 0, 0, 1, 0],
                        [0, -1, 0, -1, -1, 1, 0, 0, 1, 1, 0, 0, 0, -1, 0, 1, 1],
                        [1, 1, -1, 0, -1, -1, 0, 1, 0, 1, 0, -1, 0, -1, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, -1, -1, -1, 0, 1, 0, -1, 0, -1, 0],
                        [0, 0, -1, 0, 1, 1, 0, -1, -1, -1, -1, 0, 0, 0, 0, 1, 0],
                        [0, 0, 1, 1, -1, -1, 0, 1, 1, 1, 1, 0, -1, 0, -1, 1, 1],
                        [-1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, -1, 0, 1, 1],
                    ],
                    y = [],
                    v = e.Twitch;
                g.forEach(function (e, t) {
                    y[t] = Object(h.a)(
                        e.map(function (e) {
                            return 2 * e;
                        })
                    );
                }),
                    g.forEach(function (e, t) {
                        e.forEach(function (e, n) {
                            t === n ? (y[n][t] = 0) : (y[n][t] -= e);
                        });
                    });
                var x = (function (e) {
                    Object(i.a)(n, e);
                    var t = Object(d.a)(n);
                    function n(e) {
                        var c;
                        return (
                            Object(s.a)(this, n),
                                ((c = t.call(this, e)).state = {
                                    hoverI: null,
                                    hoverJ: null,
                                    selectedCols: {},
                                    scoreRows: [],
                                    nbTypes: 17,
                                }),
                                (c.handleMouseOver = c.handleMouseOver.bind(Object(l.a)(c))),
                                (c.handleMouseOut = c.handleMouseOut.bind(Object(l.a)(c))),
                                (c.handleSelectType = c.handleSelectType.bind(Object(l.a)(c))),
                                (c.handleSelectTypeReset = c.handleSelectTypeReset.bind(
                                    Object(l.a)(c)
                                )),
                                (c.handleSelectNbTypes = c.handleSelectNbTypes.bind(
                                    Object(l.a)(c)
                                )),
                                c
                        );
                    }
                    return (
                        Object(o.a)(n, [
                            {
                                key: "typesStrengths",
                                get: function () {
                                    return y.slice(0, this.state.nbTypes);
                                },
                            },
                            {
                                key: "computeScoreRows",
                                value: function (e) {
                                    var t = [];
                                    return (
                                        (e = Object.keys(e).filter(function (t) {
                                            return !!e[t];
                                        })),
                                            console.log(e),
                                            f.forEach(function (n, c) {
                                                (t[c] = 0),
                                                    e.forEach(function (e) {
                                                        t[c] +=
                                                            Math.sign(y[c][e]) *
                                                            Math.pow(Math.abs(y[c][e]), 0.5);
                                                    });
                                            }),
                                            t.slice(0, this.state.nbTypes)
                                    );
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = new v.Embed("twitch-embed", {
                                        width: "100%",
                                        height: "100%",
                                        channel: "shakawah",
                                        layout: "video",
                                        autoplay: !1,
                                    });
                                    e.addEventListener(v.Embed.VIDEO_READY, function () {
                                        e.getPlayer().play();
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        n = this.state,
                                        c = n.scoreRows,
                                        a = c[0];
                                    c.forEach(function (e, t) {
                                        e > a && (t, (a = e));
                                    });
                                    var r = this.typesStrengths;
                                    return Object(O.jsx)("div", {
                                        className: "App ".concat(t.className),
                                        children: Object(O.jsxs)(p.b, {
                                            direction: "row",
                                            className: "fullh",
                                            children: [
                                                Object(O.jsx)(p.a, {
                                                    grow: 1,
                                                    children: Object(O.jsxs)(p.b, {
                                                        direction: "column",
                                                        className: "fullh",
                                                        children: [
                                                            Object(O.jsxs)(p.a, {
                                                                grow: 0,
                                                                children: [
                                                                    "Number of types",
                                                                    " ",
                                                                    Object(O.jsx)("button", {
                                                                        className: "nbtypes-btn ".concat(
                                                                            5 === n.nbTypes ? "selected" : ""
                                                                        ),
                                                                        "data-nbtypes": 5,
                                                                        onClick: this.handleSelectNbTypes,
                                                                        children: "5",
                                                                    }),
                                                                    Object(O.jsx)("button", {
                                                                        className: "nbtypes-btn ".concat(
                                                                            9 === n.nbTypes ? "selected" : ""
                                                                        ),
                                                                        "data-nbtypes": 9,
                                                                        onClick: this.handleSelectNbTypes,
                                                                        children: "9",
                                                                    }),
                                                                    Object(O.jsx)("button", {
                                                                        className: "nbtypes-btn ".concat(
                                                                            13 === n.nbTypes ? "selected" : ""
                                                                        ),
                                                                        "data-nbtypes": 13,
                                                                        onClick: this.handleSelectNbTypes,
                                                                        children: "13",
                                                                    }),
                                                                    Object(O.jsx)("button", {
                                                                        className: "nbtypes-btn ".concat(
                                                                            17 === n.nbTypes ? "selected" : ""
                                                                        ),
                                                                        "data-nbtypes": 17,
                                                                        onClick: this.handleSelectNbTypes,
                                                                        children: "17",
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(O.jsx)(p.a, {
                                                                grow: 1,
                                                                children: Object(O.jsx)("div", {
                                                                    id: "twitch-embed",
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                Object(O.jsx)(p.a, {
                                                    grow: 0,
                                                    children: Object(O.jsxs)(p.b, {
                                                        direction: "column",
                                                        className: "fullh",
                                                        children: [
                                                            Object(O.jsx)(p.a, {
                                                                grow: 0,
                                                                children: Object(O.jsxs)("table", {
                                                                    cellPadding: "0",
                                                                    cellSpacing: "0",
                                                                    children: [
                                                                        Object(O.jsx)("thead", {
                                                                            children: this.renderHeader(),
                                                                        }),
                                                                        Object(O.jsx)("tbody", {
                                                                            children: r.map(function (t, r) {
                                                                                return (
                                                                                    (t = t.slice(0, n.nbTypes)),
                                                                                        Object(O.jsxs)(
                                                                                            "tr",
                                                                                            {
                                                                                                children: [
                                                                                                    t.map(function (t, c) {
                                                                                                        return Object(O.jsx)(
                                                                                                            "td",
                                                                                                            {
                                                                                                                className: "strength_"
                                                                                                                    .concat(t, " ")
                                                                                                                    .concat(
                                                                                                                        n.hoverJ === c
                                                                                                                            ? "hover"
                                                                                                                            : "",
                                                                                                                        " "
                                                                                                                    )
                                                                                                                    .concat(
                                                                                                                        n.selectedCols[c]
                                                                                                                            ? "selected"
                                                                                                                            : ""
                                                                                                                    ),
                                                                                                                "data-i": r,
                                                                                                                "data-j": c,
                                                                                                                onClick:
                                                                                                                e.handleSelectType,
                                                                                                                onContextMenu:
                                                                                                                e.handleSelectTypeReset,
                                                                                                                onMouseOver:
                                                                                                                e.handleMouseOver,
                                                                                                                onMouseOut:
                                                                                                                e.handleMouseOut,
                                                                                                                children:
                                                                                                                    0 === t ? "-" : t,
                                                                                                            },
                                                                                                            "col".concat(c)
                                                                                                        );
                                                                                                    }),
                                                                                                    Object(O.jsx)("td", {
                                                                                                        className:
                                                                                                            "text-left row-name ".concat(
                                                                                                                c[r] &&
                                                                                                                (c[r] > 0
                                                                                                                    ? "wins"
                                                                                                                    : 0 === c[r]
                                                                                                                        ? "neutral"
                                                                                                                        : "loses")
                                                                                                            ),
                                                                                                        children: f[r],
                                                                                                    }),
                                                                                                    Object(O.jsx)("td", {
                                                                                                        className: "text-left score",
                                                                                                        children:
                                                                                                            c[r] &&
                                                                                                            Math.round(10 * c[r]) / 10,
                                                                                                    }),
                                                                                                    Object(O.jsx)("td", {
                                                                                                        className: "text-left",
                                                                                                        children:
                                                                                                            c[r] === a ? "BEST" : "",
                                                                                                    }),
                                                                                                ],
                                                                                            },
                                                                                            "line".concat(r)
                                                                                        )
                                                                                );
                                                                            }),
                                                                        }),
                                                                        Object(O.jsx)("tfoot", {
                                                                            children: this.renderHeader(),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            Object(O.jsx)(p.a, {
                                                                grow: 1,
                                                                style: { alignSelf: "flex-start" },
                                                                children: Object(O.jsx)("iframe", {
                                                                    style: { border: "none" },
                                                                    src: "https://www.twitch.tv/embed/shakawah/chat?darkpopout&parent=bagar-helper.vercel.app",
                                                                    height: "100%",
                                                                    width: "400",
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    });
                                },
                            },
                            {
                                key: "renderScoreTable2",
                                value: function () {
                                    var e = [-3, -2, -1, 0, 1, 2, 3];
                                    return Object(O.jsxs)("table", {
                                        children: [
                                            Object(O.jsx)("thead", {
                                                children: Object(O.jsxs)("tr", {
                                                    children: [
                                                        Object(O.jsx)("td", {}),
                                                        e.map(function (e) {
                                                            return Object(O.jsx)("td", { children: e });
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            Object(O.jsx)("tbody", {
                                                children: e.map(function (t) {
                                                    return Object(O.jsxs)("tr", {
                                                        children: [
                                                            Object(O.jsx)("td", { children: t }),
                                                            e.map(function (e) {
                                                                return e < t
                                                                    ? Object(O.jsx)("td", {})
                                                                    : Object(O.jsx)("td", {
                                                                        children: Math.round(10 * (t + e)) / 10,
                                                                    });
                                                            }),
                                                        ],
                                                    });
                                                }),
                                            }),
                                        ],
                                    });
                                },
                            },
                            {
                                key: "renderHeader",
                                value: function () {
                                    var e = this,
                                        t = (this.props, this.state),
                                        n = f.slice(0, t.nbTypes);
                                    return Object(O.jsx)("tr", {
                                        children: n.map(function (n, c) {
                                            return Object(O.jsx)(
                                                "td",
                                                {
                                                    className: "type-header "
                                                        .concat(t.selectedCols[c] ? "selected" : "", " ")
                                                        .concat(t.hoverJ === c ? "hover" : "", " "),
                                                    "data-j": c,
                                                    onClick: e.handleSelectType,
                                                    children: n,
                                                },
                                                n
                                            );
                                        }),
                                    });
                                },
                            },
                            {
                                key: "handleSelectNbTypes",
                                value: function (e) {
                                    var t = parseInt(e.target.getAttribute("data-nbtypes"));
                                    this.setState(function (e) {
                                        return Object(r.a)(
                                            Object(r.a)({}, e),
                                            {},
                                            { nbTypes: t, selectedCols: {}, scoreRows: [] }
                                        );
                                    });
                                },
                            },
                            {
                                key: "handleMouseOver",
                                value: function (e) {
                                    var t = parseInt(e.target.getAttribute("data-i")),
                                        n = parseInt(e.target.getAttribute("data-j"));
                                    this.setState(function (e) {
                                        return Object(r.a)(
                                            Object(r.a)({}, e),
                                            {},
                                            { hoverI: t, hoverJ: n }
                                        );
                                    });
                                },
                            },
                            {
                                key: "handleMouseOut",
                                value: function (e) {
                                    parseInt(e.target.getAttribute("data-i")),
                                        parseInt(e.target.getAttribute("data-j"));
                                    this.setState(function (e) {
                                        return Object(r.a)(
                                            Object(r.a)({}, e),
                                            {},
                                            { hoverI: null, hoverJ: null }
                                        );
                                    });
                                },
                            },
                            {
                                key: "handleSelectTypeReset",
                                value: function (e) {
                                    var t = this;
                                    e.persist(),
                                        e.preventDefault(),
                                        this.setState(
                                            function (e) {
                                                return Object(r.a)(
                                                    Object(r.a)({}, e),
                                                    {},
                                                    { selectedCols: {} }
                                                );
                                            },
                                            function () {
                                                t.handleSelectType(e);
                                            }
                                        );
                                },
                            },
                            {
                                key: "handleSelectType",
                                value: function (e) {
                                    var t = this,
                                        n = parseInt(e.target.getAttribute("data-j"));
                                    this.setState(function (e) {
                                        var c = Object(r.a)({}, e.selectedCols);
                                        c[n] = !c[n];
                                        var a = t.computeScoreRows(c);
                                        return Object(r.a)(
                                            Object(r.a)({}, e),
                                            {},
                                            { scoreRows: a, selectedCols: c }
                                        );
                                    });
                                },
                            },
                        ]),
                            n
                    );
                })(u.a.Component);
                (x = Object(j.a)(x)(
                    c ||
                    (c = Object(a.a)([
                        "\n& {\n  .nbtypes-btn {\n    background: #444;\n    color: #fff;\n    border: solid 1px #333;\n    cursor: pointer;\n    font-size: 1em;\n    &:hover {\n      background: #595;\n    }\n    &.selected {\n      background: #00aa00;\n    }\n  }\n  td {\n    font-size: 10px;\n    padding: 4px 6px;\n    font-weight: 700;\n    \n    &.row-name {\n      &.wins {\n        color: #30a030;\n      }\n      &.neutral {\n        color: #aaa;\n      }\n      &.loses {\n        color: #aa0000;\n      }\n    }\n\n    &.type-header {\n      cursor: pointer;\n      &:hover, &.hover {\n        background: #333;\n      }\n      \n      &.selected {\n        background: #666;\n        color: #222;\n      }\n    }\n    \n    &.strength_0, &.strength_1, &.strength_-1, &.strength_2, &.strength_-2, &.strength_3, &.strength_-3 {\n      cursor: pointer;\n      opacity: 0.5;\n      width: 30px;\n      &.hover {\n        opacity: 0.8;\n      }\n      &.selected {\n        opacity: 1.0;\n      }\n    }\n    &.strength_0 {\n      background: #333;\n    }\n    &.strength_1 {\n      background: #30a030;\n      color: #005500;\n    }\n    &.strength_-1 {\n      background: #bb0000;\n      color: #300000;\n    }\n    &.strength_2 {\n      background: #108010;\n      color: #005500;\n    }\n    &.strength_-2 {\n      background: #990000;\n      color: #300000;\n    }\n    &.strength_3 {\n      background: #007000;\n      color: #00ff00;\n    }\n    &.strength_-3 {\n      background: #900000;\n      color: #ff0000;\n    }\n    \n    &.score {\n      width: 30px;\n    }\n  }\n}\n",
                    ]))
                )),
                    (t.a = x);
            }.call(this, n(27)));
        },
        26: function (e, t, n) {},
        28: function (e, t, n) {},
        36: function (e, t, n) {
            "use strict";
            n.r(t);
            var c = n(1),
                a = n.n(c),
                r = n(10),
                s = n.n(r),
                o = (n(26), n(11)),
                l = function (e) {
                    e &&
                    e instanceof Function &&
                    n
                        .e(3)
                        .then(n.bind(null, 38))
                        .then(function (t) {
                            var n = t.getCLS,
                                c = t.getFID,
                                a = t.getFCP,
                                r = t.getLCP,
                                s = t.getTTFB;
                            n(e), c(e), a(e), r(e), s(e);
                        });
                },
                i = n(0);
            s.a.render(
                Object(i.jsx)(a.a.StrictMode, { children: Object(i.jsx)(o.a, {}) }),
                document.getElementById("root")
            ),
                l();
        },
    },
    [[36, 1, 2]],
]);