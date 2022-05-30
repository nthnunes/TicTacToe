$(document).ready(function () {
  var e,
    t,
    n,
    i,
    f,
    o,
    a = 0,
    c = !0;
  function u() {
    var n = Array.from(Array(9).keys());
    for (let e = 0; e < $("td").length; e++) $("td span").html("");
    function o(e, t) {
      return (
        (e[0] == t && e[1] == t && e[2] == t) ||
        (e[3] == t && e[4] == t && e[5] == t) ||
        (e[6] == t && e[7] == t && e[8] == t) ||
        (e[0] == t && e[3] == t && e[6] == t) ||
        (e[1] == t && e[4] == t && e[7] == t) ||
        (e[2] == t && e[5] == t && e[8] == t) ||
        (e[0] == t && e[4] == t && e[8] == t) ||
        (e[2] == t && e[4] == t && e[6] == t)
      );
    }
    function c(e) {
      return e.filter((e) => "O" != e && "X" != e);
    }
    function s(n, i) {
      var f = c(n);
      if (o(n, e)) return { score: -10 };
      if (o(n, t)) return { score: 10 };
      if (0 === f.length) return { score: 0 };
      for (var a, u = [], l = 0; l < f.length; l++) {
        var d = {};
        if (((d.index = n[f[l]]), (n[f[l]] = i), i == t)) {
          var r = s(n, e);
          d.score = r.score;
        } else {
          r = s(n, t);
          d.score = r.score;
        }
        (n[f[l]] = d.index), u.push(d);
      }
      if (i === t) {
        var $ = -1e4;
        for (l = 0; l < u.length; l++)
          u[l].score > $ && (($ = u[l].score), (a = l));
      } else for ($ = 1e4, l = 0; l < u.length; l++) u[l].score < $ && (($ = u[l].score), (a = l));
      return u[a];
    }
    if (($("td").off("click"), Math.floor(2 * Math.random())))
      $("td").on("click", function () {
        $(this).find("span").hide().html(i).fadeIn("slow"),
          $(this).off("click"),
          (n[$(this).attr("id")] = e);
        let o = s(n, t);
        (n[o.index] = t),
          setTimeout(() => {
            $("#" + o.index)
              .find("span")
              .hide()
              .html(f)
              .fadeIn("slow"),
              $("#" + o.index).off("click");
            var e = [
              [n[0], n[1], n[2]],
              [n[3], n[4], n[5]],
              [n[6], n[7], n[8]],
              [n[0], n[3], n[6]],
              [n[1], n[4], n[7]],
              [n[2], n[5], n[8]],
              [n[0], n[4], n[8]],
              [n[2], n[4], n[6]]
            ],
              i = e.filter((e) => e[0] === e[1] && e[0] === e[2]),
              s = c(n);
            if (0 !== i.length) {
              (a += 1), "X" === t ? $("#xWin").text(a) : $("#oWin").text(a);
              var l = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
              ],
                d = [];
              e.forEach(function (e, t) {
                e[0] === e[1] && e[0] === e[2] && d.push(t);
              }),
                setTimeout(function () {
                  for (let e = 0; e < l[d[0]].length; e++)
                    $("#" + l[d[0]][e])
                      .find("span")
                      .fadeOut("slow");
                  setTimeout(function () {
                    $("#game").fadeOut("500", function () {
                      $("#win")
                        .fadeIn("1000", function () {
                          u();
                        })
                        .css("display", "flex"),
                        setTimeout(function () {
                          $("#win").fadeOut("500", function () {
                            $("#game").fadeIn("1000", function () { });
                          });
                        }, 500);
                    });
                  }, 500);
                }, 200);
            } else
              0 === s.length &&
                setTimeout(function () {
                  $("#game").fadeOut("500", function () {
                    $("#tie")
                      .fadeIn("1000", function () {
                        u();
                      })
                      .css("display", "flex"),
                      setTimeout(function () {
                        $("#tie").fadeOut("500", function () {
                          $("#game").fadeIn("1000", function () { });
                        });
                      }, 500);
                  });
                }, 500);
          }, 1e3);
      });
    else {
      var l = s(n, t),
        d = "#" + l.index;
      $("#" + l.index)
        .find("span")
        .hide()
        .html(f)
        .fadeIn("slow"),
        (n[l.index] = t),
        $("td")
          .not(d)
          .on("click", function (o) {
            if ($(o.target).is(d)) return void o.preventDefault();
            $(this).find("span").hide().html(i).fadeIn("slow"),
              $(this).off("click"),
              (n[$(this).attr("id")] = e);
            let l = s(n, t);
            setTimeout(() => {
              $("#" + l.index)
                .find("span")
                .hide()
                .html(f)
                .fadeIn("slow"),
                $("#" + l.index).off("click"),
                (n[l.index] = t);
              var e = [
                [n[0], n[1], n[2]],
                [n[3], n[4], n[5]],
                [n[6], n[7], n[8]],
                [n[0], n[3], n[6]],
                [n[1], n[4], n[7]],
                [n[2], n[5], n[8]],
                [n[0], n[4], n[8]],
                [n[2], n[4], n[6]]
              ],
                i = e.filter((e) => e[0] === e[1] && e[0] === e[2]),
                o = c(n);
              if (0 !== i.length) {
                (a += 1), "X" === t ? $("#xWin").text(a) : $("#oWin").text(a);
                var s = [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [2, 4, 6]
                ],
                  d = [];
                e.forEach(function (e, t) {
                  e[0] === e[1] && e[0] === e[2] && d.push(t);
                }),
                  setTimeout(function () {
                    for (let e = 0; e < s[d[0]].length; e++)
                      $("#" + s[d[0]][e])
                        .find("span")
                        .fadeOut("slow");
                    setTimeout(function () {
                      $("#game").fadeOut("500", function () {
                        $("#win")
                          .fadeIn("1000", function () {
                            u();
                          })
                          .css("display", "flex"),
                          setTimeout(function () {
                            $("#win").fadeOut("500", function () {
                              $("#game").fadeIn("1000", function () { });
                            });
                          }, 500);
                      });
                    }, 500);
                  }, 200);
              } else
                0 === o.length &&
                  setTimeout(function () {
                    $("#game").fadeOut("500", function () {
                      $("#tie")
                        .fadeIn("1000", function () {
                          u();
                        })
                        .css("display", "flex"),
                        setTimeout(function () {
                          $("#tie").fadeOut("500", function () {
                            $("#game").fadeIn("1000", function () { });
                          });
                        }, 500);
                    });
                  }, 500);
            }, 1e3);
          });
    }
  }
  function s() {
    function n(e) {
      return e.filter((e) => "O" != e && "X" != e);
    }
    c = !0;
    var f = Array.from(Array(9).keys());
    for (let e = 0; e < $("td").length; e++) $("td span").html("");
    $("td").off("click"),
      $("td").on("click", function () {
        if (c) {
          $(this).find("span").hide().html(i).fadeIn("slow"),
            $(this).off("click"),
            (f[$(this).attr("id")] = e),
            (c = !1);
          var a = (l = [
            [f[0], f[1], f[2]],
            [f[3], f[4], f[5]],
            [f[6], f[7], f[8]],
            [f[0], f[3], f[6]],
            [f[1], f[4], f[7]],
            [f[2], f[5], f[8]],
            [f[0], f[4], f[8]],
            [f[2], f[4], f[6]]
          ]).filter((e) => e[0] === e[1] && e[0] === e[2]),
            u = n(f);
          setTimeout(function () {
            if (0 !== a.length) {
              var e = a[0][0];
              if ("X" === e) {
                let e = Number($("#xWin").text());
                $("#xWin").text((e += 1));
              } else {
                let e = Number($("#oWin").text());
                $("#oWin").text((e += 1));
              }
              var t = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
              ],
                n = [];
              l.forEach(function (e, t) {
                e[0] === e[1] && e[0] === e[2] && n.push(t);
              }),
                setTimeout(function () {
                  for (let e = 0; e < t[n[0]].length; e++)
                    $("#" + t[n[0]][e])
                      .find("span")
                      .fadeOut("slow");
                  setTimeout(function () {
                    let t;
                    (t = "X" === e ? "#displayXWon" : "#displayOWon"),
                      $("#game").fadeOut("500", function () {
                        $(t)
                          .fadeIn("1000", function () {
                            s();
                          })
                          .css("display", "flex"),
                          setTimeout(function () {
                            $(t).fadeOut("500", function () {
                              $("#game").fadeIn("1000", function () { });
                            });
                          }, 500);
                      });
                  }, 500);
                }, 200);
            } else
              0 === u.length &&
                setTimeout(function () {
                  $("#game").fadeOut("500", function () {
                    $("#tie")
                      .fadeIn("1000", function () {
                        s();
                      })
                      .css("display", "flex"),
                      setTimeout(function () {
                        $("#tie").fadeOut("500", function () {
                          $("#game").fadeIn("1000", function () { });
                        });
                      }, 500);
                  });
                }, 500);
          }, 200);
        } else {
          $(this).find("span").hide().html(o).fadeIn("slow"),
            (f[$(this).attr("id")] = t),
            $(this).off("click"),
            (c = !0);
          var l;
          (a = (l = [
            [f[0], f[1], f[2]],
            [f[3], f[4], f[5]],
            [f[6], f[7], f[8]],
            [f[0], f[3], f[6]],
            [f[1], f[4], f[7]],
            [f[2], f[5], f[8]],
            [f[0], f[4], f[8]],
            [f[2], f[4], f[6]]
          ]).filter((e) => e[0] === e[1] && e[0] === e[2])),
            (u = n(f));
          setTimeout(function () {
            if (0 !== a.length) {
              var e = a[0][0];
              if ("X" === e) {
                let e = Number($("#xWin").text());
                $("#xWin").text((e += 1));
              } else {
                let e = Number($("#oWin").text());
                $("#oWin").text((e += 1));
              }
              var t = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
              ],
                n = [];
              l.forEach(function (e, t) {
                e[0] === e[1] && e[0] === e[2] && n.push(t);
              }),
                setTimeout(function () {
                  for (let e = 0; e < t[n[0]].length; e++)
                    $("#" + t[n[0]][e])
                      .find("span")
                      .fadeOut("slow");
                  setTimeout(function () {
                    let t;
                    (t = "X" === e ? "#displayXWon" : "#displayOWon"),
                      $("#game").fadeOut("500", function () {
                        $(t)
                          .fadeIn("1000", function () {
                            s();
                          })
                          .css("display", "flex"),
                          setTimeout(function () {
                            $(t).fadeOut("500", function () {
                              $("#game").fadeIn("1000", function () { });
                            });
                          }, 500);
                      });
                  }, 500);
                }, 200);
            } else
              0 === u.length &&
                setTimeout(function () {
                  $("#game").fadeOut("500", function () {
                    $("#tie")
                      .fadeIn("1000", function () {
                        s();
                      })
                      .css("display", "flex"),
                      setTimeout(function () {
                        $("#tie").fadeOut("500", function () {
                          $("#game").fadeIn("1000", function () { });
                        });
                      }, 500);
                  });
                }, 500);
          }, 200);
        }
      });
  }
  $("#vsAI").on("click", function (e) {
    e.preventDefault(),
      (n = !0),
      $("#mode").fadeOut(500, function () {
        $("#pickSide").fadeIn(500).css("display", "flex");
      });
  }),
    $("#vsP").on("click", function (e) {
      e.preventDefault(),
        (n = !1),
        $("#mode").fadeOut(500, function () {
          $("#pickSide").fadeIn(500).css("display", "flex");
        });
    }),
    $("#pickSide a:nth-of-type(1)").on("click", function (a) {
      a.preventDefault(),
        (e = "X"),
        (i = '<i class="fas fa-times fa-3x"></i>'),
        (t = "O"),
        (o = f = '<i class="far fa-circle fa-3x"></i>'),
        $("#pickSide").fadeOut(500, function () {
          $("#game").fadeIn(500).css("display", "block");
        }),
        n ? u() : s();
    }),
    $("#pickSide a:nth-of-type(2)").on("click", function (a) {
      a.preventDefault(),
        (e = "O"),
        (i = '<i class="far fa-circle fa-3x"></i>'),
        (t = "X"),
        (o = f = '<i class="fas fa-times fa-3x"></i>'),
        $("#pickSide").fadeOut(500, function () {
          $("#game").fadeIn(500).css("display", "block");
        }),
        n ? u() : s();
    }),
    $("#reset").on("click", function (e) {
      e.preventDefault(),
        $("#game").fadeOut(500, function () {
          $("#mode").fadeIn(500).css("display", "flex");
        }),
        (n = !0),
        (a = 0),
        0,
        0,
        $("#xWin").text(a),
        $("#oWin").text(a);
    });
});