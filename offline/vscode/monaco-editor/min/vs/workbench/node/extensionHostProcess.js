/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["exports", "require", "vs/base/common/winjs.base", "vs/base/common/uri", "vs/base/common/event", "vs/workbench/api/node/extHost.protocol", "vs/platform/instantiation/common/instantiation", "vs/workbench/api/node/extHostTypes", "vs/base/common/strings", "vs/base/common/async", "vs/base/common/platform", "vs/base/common/errors", "vs/base/common/objects", "vs/base/common/paths", "vs/base/common/lifecycle", "path", "vs/base/common/arrays", "vs/nls!vs/workbench/node/extensionHostProcess", "vs/nls", "vs/workbench/api/node/extHostTypeConverters", "vs/base/common/map", "vs/base/common/types", "vs/platform/registry/common/platform", "vs/platform/configuration/common/configuration", "vs/base/common/severity", "vs/editor/common/modes/languageConfiguration", "vs/editor/common/model", "vs/platform/configuration/common/configurationRegistry", "vs/base/common/glob", "vs/base/common/decorators", "vs/editor/common/model/wordHelper", "vs/platform/files/common/files", "vs/base/parts/ipc/common/ipc", "vs/platform/environment/common/environment", "vs/platform/editor/common/editor", "vs/base/common/assert", "vs/workbench/api/node/extHostExtensionActivator", "vs/base/common/resources", "vs/editor/common/services/modelService", "vs/workbench/services/textfile/common/textfiles", "vs/editor/common/modes", "vs/base/common/cancellation", "vs/base/node/pfs", "os", "vs/platform/log/common/log", "vs/base/common/htmlContent", "vs/editor/common/modes/supports", "vs/editor/common/services/modeService", "vs/editor/common/modes/languageSelector", "vs/platform/contextkey/common/contextkey", "vs/editor/common/core/range", "vs/editor/common/core/position", "child_process", "net", "vs/platform/log/node/spdlogService", "vs/platform/node/package", "vs/platform/node/product", "vs/base/common/mime", "vs/editor/common/modes/modesRegistry", "vs/editor/common/modes/supports/richEditBrackets", "vs/base/common/uuid", "vs/platform/configuration/common/configurationModels", "vs/platform/search/common/search", "vs/platform/workspace/common/workspace", "vs/base/common/labels", "vs/base/common/marshalling", "vs/workbench/api/node/extHostDocumentData", "vs/workbench/common/editor", "vs/base/common/network", "vs/workbench/api/node/extHostDiagnostics", "vs/base/common/linkedList", "vs/base/common/functional", "vs/workbench/api/node/extHostTextEditor", "vs/base/common/idGenerator", "vs/nls!vs/base/node/processes", "vs/base/node/processes", "vs/base/parts/ipc/node/ipc.cp", "vs/nls!vs/editor/common/config/editorOptions", "vs/editor/common/config/editorOptions", "vs/nls!vs/editor/common/modes/modesRegistry", "vs/nls!vs/platform/configuration/common/configurationRegistry", "vs/nls!vs/platform/workspaces/common/workspaces", "vs/nls!vs/workbench/api/node/extHostDiagnostics", "vs/nls!vs/workbench/api/node/extHostExtensionActivator", "vs/nls!vs/workbench/api/node/extHostTask", "vs/nls!vs/workbench/api/node/extHostTreeViews", "vs/base/common/json", "vs/base/node/stdFork", "vs/base/common/processes", "vs/nls!vs/workbench/node/extensionHostMain", "vs/editor/common/services/resourceConfiguration", "vs/workbench/node/extensionHostMain", "vs/base/parts/ipc/node/ipc.net", "vs/base/common/date", "vs/base/common/scrollable", "vs/platform/keybinding/common/keybinding", "vs/editor/common/core/uint", "vs/base/node/console", "vs/workbench/services/untitled/common/untitledEditorService", "vs/base/node/decoder", "vs/workbench/services/search/node/searchService", "vs/platform/environment/node/environmentService", "crypto", "vs/platform/progress/common/progress", "vs/base/node/flow", "vs/editor/common/modes/languageFeatureRegistry", "vs/platform/jsonschemas/common/jsonContributionRegistry", "vs/editor/common/modes/supports/characterPair", "vs/editor/common/modes/supports/indentRules", "vs/editor/common/modes/supports/onEnter", "assert", "vs/platform/statusbar/common/statusbar", "vs/platform/telemetry/common/telemetry", "vs/platform/telemetry/common/telemetryUtils", "vs/platform/workspaces/common/workspaces", "vs/editor/common/modes/tokenizationRegistry", "vs/base/node/extfs", "vs/workbench/api/node/extHostHeapService", "vs/workbench/api/node/extHostLogService", "vs/workbench/api/node/extHostTreeViews", "fs", "vs/editor/common/modes/supports/electricCharacter", "vs/workbench/api/node/extHostFileSystemEventService", "vs/editor/common/modes/languageConfigurationRegistry", "vs/workbench/common/editor/textEditorModel", "vs/workbench/parts/tasks/common/tasks", "vs/workbench/services/backup/common/backup", "vs/workbench/services/configuration/common/configurationModels", "vs/workbench/api/node/extHostConfiguration", "vs/workbench/services/extensions/node/extensionDescriptionRegistry", "vs/workbench/services/extensions/node/lazyPromise", "vs/workbench/services/extensions/node/proxyIdentifier", "vs/editor/common/viewModel/prefixSumComputer", "vs/workbench/api/node/extHostDebugService", "vs/workbench/api/node/extHostDecorations", "vs/editor/common/model/mirrorTextModel", "vs/workbench/api/node/extHostDialogs", "vs/workbench/api/node/extHostDocumentContentProviders", "vs/workbench/api/node/extHostFileSystem", "vs/workbench/api/node/extHostLanguages", "vs/workbench/api/node/extHostMessageService", "vs/workbench/api/node/extHostOutputService", "vs/workbench/api/node/extHostQuickOpen", "vs/workbench/api/node/extHostSCM", "vs/workbench/api/node/extHostStatusBar", "vs/workbench/api/node/extHostStorage", "vs/workbench/api/node/extHostTask", "vs/workbench/api/node/extHostTerminalService", "vs/workbench/api/node/extHostWindow", "vs/workbench/api/node/extHostWorkspace", "vs/workbench/services/extensions/node/rpcProtocol", "vs/workbench/services/hash/common/hashService", "vs/workbench/services/search/node/searchIpc", "vs/nls!vs/base/common/severity", "vs/base/common/comparers", "vs/workbench/api/node/extHostApiCommands", "vs/workbench/api/node/extHostCommands", "vs/workbench/api/node/extHostDocumentSaveParticipant", "vs/workbench/api/node/extHostDocuments", "vs/workbench/api/node/extHostLanguageFeatures", "vs/workbench/api/node/extHostProgress", "vs/base/node/paths", "vs/workbench/api/node/extHostDocumentsAndEditors", "vs/workbench/api/node/extHostTextEditors", "vs/workbench/api/node/extHost.api.impl", "vs/workbench/api/node/extHostExtensionService", "vs/workbench/common/editor/untitledEditorModel", "vs/workbench/common/editor/untitledEditorInput", "spdlog", "string_decoder", "vs/base/common/winjs.base.raw", "native-watchdog", "vs/workbench/node/extensionHostProcess"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[35], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ok = function(e, t) {
        if (!e || null === e) throw new Error(t ? "Assertion failed (" + t + ")" : "Assertion Failed")
      }
    }), define(e[93], t([1, 0]), function(e, t) {
      "use strict";

      function n(e) {
        return e < 10 ? "0" + e : String(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.toLocalISOString = function(e) {
        return e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
      }
    }), define(e[29], t([1, 0]), function(e, t) {
      "use strict";

      function n(e) {
        return function(t, n, r) {
          var i = null,
            o = null;
          if ("function" == typeof r.value ? (i = "value", o = r.value) : "function" == typeof r.get && (i = "get", o = r.get), !o) throw new Error("not supported");
          r[i] = e(o, n)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createDecorator = n, t.memoize = function(e, t, n) {
        var r = null,
          i = null;
        if ("function" == typeof n.value ? (r = "value",
            i = n.value) : "function" == typeof n.get && (r = "get", i = n.get), !i) throw new Error("not supported");
        var o = "$memoize$" + t;
        n[r] = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return this.hasOwnProperty(o) || Object.defineProperty(this, o, {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: i.apply(this, e)
          }), this[o]
        }
      }, t.debounce = function(e) {
        return n(function(t, n) {
          var r = "$debounce$" + n;
          return function() {
            for (var n = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
            clearTimeout(this[r]), this[r] = setTimeout(function() {
              return t.apply(n, i)
            }, e)
          }
        })
      }
    }), define(e[71], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.once = function(e) {
        var t, n = this,
          r = !1;
        return function() {
          return r ? t : (r = !0, t = e.apply(n, arguments))
        }
      }
    }), define(e[73], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e(e) {
          this._prefix = e, this._lastId = 0
        }
        return e.prototype.nextId = function() {
          return this._prefix + ++this._lastId
        }, e
      }();
      t.IdGenerator = n,
        t.defaultGenerator = new n("id#")
    }), define(e[86], t([1, 0]), function(e, t) {
      "use strict";

      function n(e, t) {
        function n(t, n) {
          for (var r = 0, i = 0; r < t || !n;) {
            var o = e.charCodeAt(a);
            if (o >= 48 && o <= 57) i = 16 * i + o - 48;
            else if (o >= 65 && o <= 70) i = 16 * i + o - 65 + 10;
            else {
              if (!(o >= 97 && o <= 102)) break;
              i = 16 * i + o - 97 + 10
            }
            a++, r++
          }
          return r < t && (i = -1), i
        }

        function s() {
          if (d = "", h = u.None, f = a, a >= l) return f = l, p = c.EOF;
          var t = e.charCodeAt(a);
          if (r(t)) {
            do {
              a++, d += String.fromCharCode(t), t = e.charCodeAt(a)
            } while (r(t));
            return p = c.Trivia
          }
          if (i(t)) return a++, d += String.fromCharCode(t), 13 === t && 10 === e.charCodeAt(a) && (a++, d += "\n"), p = c.LineBreakTrivia;
          switch (t) {
            case 123:
              return a++, p = c.OpenBraceToken;
            case 125:
              return a++, p = c.CloseBraceToken;
            case 91:
              return a++, p = c.OpenBracketToken;
            case 93:
              return a++, p = c.CloseBracketToken;
            case 58:
              return a++, p = c.ColonToken;
            case 44:
              return a++, p = c.CommaToken;
            case 34:
              return a++, d = function() {
                for (var t = "", r = a;;) {
                  if (a >= l) {
                    t += e.substring(r, a), h = u.UnexpectedEndOfString;
                    break
                  }
                  var o = e.charCodeAt(a);
                  if (34 === o) {
                    t += e.substring(r, a), a++;
                    break
                  }
                  if (92 !== o) {
                    if (o >= 0 && o <= 31) {
                      if (i(o)) {
                        t += e.substring(r, a), h = u.UnexpectedEndOfString;
                        break
                      }
                      h = u.InvalidCharacter
                    }
                    a++
                  } else {
                    if (t += e.substring(r, a), ++a >= l) {
                      h = u.UnexpectedEndOfString;
                      break
                    }
                    switch (o = e.charCodeAt(a++)) {
                      case 34:
                        t += '"';
                        break;
                      case 92:
                        t += "\\";
                        break;
                      case 47:
                        t += "/";
                        break;
                      case 98:
                        t += "\b";
                        break;
                      case 102:
                        t += "\f";
                        break;
                      case 110:
                        t += "\n";
                        break;
                      case 114:
                        t += "\r";
                        break;
                      case 116:
                        t += "\t";
                        break;
                      case 117:
                        var s = n(4, !0);
                        s >= 0 ? t += String.fromCharCode(s) : h = u.InvalidUnicode;
                        break;
                      default:
                        h = u.InvalidEscapeCharacter
                    }
                    r = a
                  }
                }
                return t
              }(), p = c.StringLiteral;
            case 47:
              var s = a - 1;
              if (47 === e.charCodeAt(a + 1)) {
                for (a += 2; a < l && !i(e.charCodeAt(a));) a++;
                return d = e.substring(s, a), p = c.LineCommentTrivia
              }
              if (42 === e.charCodeAt(a + 1)) {
                a += 2;
                for (var g = l - 1, m = !1; a < g;) {
                  if (42 === e.charCodeAt(a) && 47 === e.charCodeAt(a + 1)) {
                    a += 2, m = !0;
                    break
                  }
                  a++
                }
                return m || (a++, h = u.UnexpectedEndOfComment), d = e.substring(s, a), p = c.BlockCommentTrivia
              }
              return d += String.fromCharCode(t), a++, p = c.Unknown;
            case 45:
              if (d += String.fromCharCode(t), ++a === l || !o(e.charCodeAt(a))) return p = c.Unknown;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return d += function() {
                var t = a;
                if (48 === e.charCodeAt(a)) a++;
                else
                  for (a++; a < e.length && o(e.charCodeAt(a));) a++;
                if (a < e.length && 46 === e.charCodeAt(a)) {
                  if (!(++a < e.length && o(e.charCodeAt(a)))) return h = u.UnexpectedEndOfNumber, e.substring(t, a);
                  for (a++; a < e.length && o(e.charCodeAt(a));) a++
                }
                var n = a;
                if (a < e.length && (69 === e.charCodeAt(a) || 101 === e.charCodeAt(a)))
                  if ((++a < e.length && 43 === e.charCodeAt(a) || 45 === e.charCodeAt(a)) && a++, a < e.length && o(e.charCodeAt(a))) {
                    for (a++; a < e.length && o(e.charCodeAt(a));) a++;
                    n = a
                  } else h = u.UnexpectedEndOfNumber;
                return e.substring(t, n)
              }(), p = c.NumericLiteral;
            default:
              for (; a < l && function(e) {
                  if (r(e) || i(e)) return !1;
                  switch (e) {
                    case 125:
                    case 93:
                    case 123:
                    case 91:
                    case 34:
                    case 58:
                    case 44:
                      return !1
                  }
                  return !0
                }(t);) a++, t = e.charCodeAt(a);
              if (f !== a) {
                switch (d = e.substring(f, a)) {
                  case "true":
                    return p = c.TrueKeyword;
                  case "false":
                    return p = c.FalseKeyword;
                  case "null":
                    return p = c.NullKeyword
                }
                return p = c.Unknown
              }
              return d += String.fromCharCode(t), a++, p = c.Unknown
          }
        }
        void 0 === t && (t = !1);
        var a = 0,
          l = e.length,
          d = "",
          f = 0,
          p = c.Unknown,
          h = u.None;
        return {
          setPosition: function(e) {
            a = e, d = "", f = 0, p = c.Unknown, h = u.None
          },
          getPosition: function() {
            return a
          },
          scan: t ? function() {
            var e;
            do {
              e = s()
            } while (e >= c.LineCommentTrivia && e <= c.Trivia);
            return e
          } : s,
          getToken: function() {
            return p
          },
          getTokenValue: function() {
            return d
          },
          getTokenOffset: function() {
            return f
          },
          getTokenLength: function() {
            return a - f
          },
          getTokenError: function() {
            return h
          }
        }
      }

      function r(e) {
        return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || 5760 === e || e >= 8192 && e <= 8203 || 8239 === e || 8287 === e || 12288 === e || 65279 === e
      }

      function i(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e
      }

      function o(e) {
        return e >= 48 && e <= 57
      }

      function s(e) {
        if ("array" === e.type) return e.children.map(s);
        if ("object" === e.type) {
          for (var t = {}, n = 0, r = e.children; n < r.length; n++) {
            var i = r[n];
            t[i.children[0].value] = s(i.children[1])
          }
          return t
        }
        return e.value
      }

      function a(e, t, r) {
        function i(e) {
          return e ? function() {
            return e(p.getTokenOffset(), p.getTokenLength())
          } : function() {
            return !0
          }
        }

        function o(e) {
          return e ? function(t) {
            return e(t, p.getTokenOffset(), p.getTokenLength())
          } : function() {
            return !0
          }
        }

        function s() {
          for (;;) {
            var e = p.scan();
            switch (e) {
              case c.LineCommentTrivia:
              case c.BlockCommentTrivia:
                S && a(d.InvalidSymbol);
                break;
              case c.Unknown:
                a(d.InvalidSymbol);
                break;
              case c.Trivia:
              case c.LineBreakTrivia:
                break;
              default:
                return e
            }
          }
        }

        function a(e, t, n) {
          if (void 0 === t && (t = []), void 0 === n && (n = []), C(e), t.length + n.length > 0)
            for (var r = p.getToken(); r !== c.EOF;) {
              if (-1 !== t.indexOf(r)) {
                s();
                break
              }
              if (-1 !== n.indexOf(r)) break;
              r = s()
            }
        }

        function u(e) {
          var t = p.getTokenValue();
          return e ? _(t) : g(t), s(), !0
        }

        function l() {
          return p.getToken() !== c.StringLiteral ? (a(d.PropertyNameExpected, [], [c.CloseBraceToken, c.CommaToken]), !1) : (u(!1), p.getToken() === c.ColonToken ? (b(":"), s(), f() || a(d.ValueExpected, [], [c.CloseBraceToken, c.CommaToken])) : a(d.ColonExpected, [], [c.CloseBraceToken, c.CommaToken]), !0)
        }

        function f() {
          switch (p.getToken()) {
            case c.OpenBracketToken:
              return function() {
                v(), s();
                for (var e = !1; p.getToken() !== c.CloseBracketToken && p.getToken() !== c.EOF;) {
                  if (p.getToken() === c.CommaToken) {
                    if (e || a(d.ValueExpected, [], []), b(","), s(), p.getToken() === c.CloseBracketToken && E) break
                  } else e && a(d.CommaExpected, [], []);
                  f() || a(d.ValueExpected, [], [c.CloseBracketToken, c.CommaToken]), e = !0
                }
                return y(), p.getToken() !== c.CloseBracketToken ? a(d.CloseBracketExpected, [c.CloseBracketToken], []) : s(), !0
              }();
            case c.OpenBraceToken:
              return function() {
                h(), s();
                for (var e = !1; p.getToken() !== c.CloseBraceToken && p.getToken() !== c.EOF;) {
                  if (p.getToken() === c.CommaToken) {
                    if (e || a(d.ValueExpected, [], []), b(","), s(), p.getToken() === c.CloseBraceToken && E) break
                  } else e && a(d.CommaExpected, [], []);
                  l() || a(d.ValueExpected, [], [c.CloseBraceToken, c.CommaToken]), e = !0
                }
                return m(), p.getToken() !== c.CloseBraceToken ? a(d.CloseBraceExpected, [c.CloseBraceToken], []) : s(), !0
              }();
            case c.StringLiteral:
              return u(!0);
            default:
              return function() {
                switch (p.getToken()) {
                  case c.NumericLiteral:
                    var e = 0;
                    try {
                      "number" != typeof(e = JSON.parse(p.getTokenValue())) && (a(d.InvalidNumberFormat), e = 0)
                    } catch (e) {
                      a(d.InvalidNumberFormat)
                    }
                    _(e);
                    break;
                  case c.NullKeyword:
                    _(null);
                    break;
                  case c.TrueKeyword:
                    _(!0);
                    break;
                  case c.FalseKeyword:
                    _(!1);
                    break;
                  default:
                    return !1
                }
                return s(), !0
              }()
          }
        }
        var p = n(e, !1),
          h = i(t.onObjectBegin),
          g = o(t.onObjectProperty),
          m = i(t.onObjectEnd),
          v = i(t.onArrayBegin),
          y = i(t.onArrayEnd),
          _ = o(t.onLiteralValue),
          b = o(t.onSeparator),
          C = o(t.onError),
          S = r && r.disallowComments,
          E = r && r.allowTrailingComma;
        return s(), p.getToken() === c.EOF || (f() ? (p.getToken() !== c.EOF && a(d.EndOfFileExpected, [], []), !0) : (a(d.ValueExpected, [], []), !1))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u;
      ! function(e) {
        e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter"
      }(u = t.ScanError || (t.ScanError = {}));
      var c;
      ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken",
          e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.EOF = 16] = "EOF"
      }(c = t.SyntaxKind || (t.SyntaxKind = {})), t.createScanner = n;
      var l;
      ! function(e) {
        e[e.nullCharacter = 0] = "nullCharacter", e[e.maxAsciiCharacter = 127] = "maxAsciiCharacter", e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.lineSeparator = 8232] = "lineSeparator", e[e.paragraphSeparator = 8233] = "paragraphSeparator", e[e.nextLine = 133] = "nextLine", e[e.space = 32] = "space", e[e.nonBreakingSpace = 160] = "nonBreakingSpace", e[e.enQuad = 8192] = "enQuad", e[e.emQuad = 8193] = "emQuad", e[e.enSpace = 8194] = "enSpace", e[e.emSpace = 8195] = "emSpace",
          e[e.threePerEmSpace = 8196] = "threePerEmSpace", e[e.fourPerEmSpace = 8197] = "fourPerEmSpace", e[e.sixPerEmSpace = 8198] = "sixPerEmSpace", e[e.figureSpace = 8199] = "figureSpace", e[e.punctuationSpace = 8200] = "punctuationSpace", e[e.thinSpace = 8201] = "thinSpace", e[e.hairSpace = 8202] = "hairSpace", e[e.zeroWidthSpace = 8203] = "zeroWidthSpace", e[e.narrowNoBreakSpace = 8239] = "narrowNoBreakSpace", e[e.ideographicSpace = 12288] = "ideographicSpace", e[e.mathematicalSpace = 8287] = "mathematicalSpace", e[e.ogham = 5760] = "ogham", e[e._ = 95] = "_", e[e.$ = 36] = "$", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w",
          e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.ampersand = 38] = "ampersand", e[e.asterisk = 42] = "asterisk", e[e.at = 64] = "at", e[e.backslash = 92] = "backslash", e[e.bar = 124] = "bar", e[e.caret = 94] = "caret", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.closeParen = 41] = "closeParen", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.equals = 61] = "equals", e[e.exclamation = 33] = "exclamation", e[e.greaterThan = 62] = "greaterThan", e[e.lessThan = 60] = "lessThan", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.openParen = 40] = "openParen", e[e.percent = 37] = "percent",
          e[e.plus = 43] = "plus", e[e.question = 63] = "question", e[e.semicolon = 59] = "semicolon", e[e.singleQuote = 39] = "singleQuote", e[e.slash = 47] = "slash", e[e.tilde = 126] = "tilde", e[e.backspace = 8] = "backspace", e[e.formFeed = 12] = "formFeed", e[e.byteOrderMark = 65279] = "byteOrderMark", e[e.tab = 9] = "tab", e[e.verticalTab = 11] = "verticalTab"
      }(l || (l = {}));
      var d;
      ! function(e) {
        e[e.InvalidSymbol = 0] = "InvalidSymbol", e[e.InvalidNumberFormat = 1] = "InvalidNumberFormat", e[e.PropertyNameExpected = 2] = "PropertyNameExpected", e[e.ValueExpected = 3] = "ValueExpected", e[e.ColonExpected = 4] = "ColonExpected", e[e.CommaExpected = 5] = "CommaExpected", e[e.CloseBraceExpected = 6] = "CloseBraceExpected", e[e.CloseBracketExpected = 7] = "CloseBracketExpected", e[e.EndOfFileExpected = 8] = "EndOfFileExpected"
      }(d = t.ParseErrorCode || (t.ParseErrorCode = {})), t.parse = function(e, t, n) {
        function r(e) {
          Array.isArray(o) ? o.push(e) : i && (o[i] = e)
        }
        void 0 === t && (t = []);
        var i = null,
          o = [],
          s = [];
        return a(e, {
          onObjectBegin: function() {
            var e = {};
            r(e), s.push(o), o = e, i = null
          },
          onObjectProperty: function(e) {
            i = e
          },
          onObjectEnd: function() {
            o = s.pop()
          },
          onArrayBegin: function() {
            var e = [];
            r(e), s.push(o), o = e, i = null
          },
          onArrayEnd: function() {
            o = s.pop()
          },
          onLiteralValue: r,
          onError: function(e) {
            t.push({
              error: e
            })
          }
        }, n), o[0]
      }, t.parseTree = function(e, t, n) {
        function r(e) {
          "property" === o.type && (o.length = e - o.offset, o = o.parent)
        }

        function i(e) {
          return o.children.push(e), e
        }
        void 0 === t && (t = []);
        var o = {
          type: "array",
          offset: -1,
          length: -1,
          children: []
        };
        a(e, {
          onObjectBegin: function(e) {
            o = i({
              type: "object",
              offset: e,
              length: -1,
              parent: o,
              children: []
            })
          },
          onObjectProperty: function(e, t, n) {
            (o = i({
              type: "property",
              offset: t,
              length: -1,
              parent: o,
              children: []
            })).children.push({
              type: "string",
              value: e,
              offset: t,
              length: n,
              parent: o
            })
          },
          onObjectEnd: function(e, t) {
            o.length = e + t - o.offset, o = o.parent, r(e + t)
          },
          onArrayBegin: function(e, t) {
            o = i({
              type: "array",
              offset: e,
              length: -1,
              parent: o,
              children: []
            })
          },
          onArrayEnd: function(e, t) {
            o.length = e + t - o.offset, o = o.parent, r(e + t)
          },
          onLiteralValue: function(e, t, n) {
            i({
              type: function(e) {
                switch (typeof e) {
                  case "boolean":
                    return "boolean";
                  case "number":
                    return "number";
                  case "string":
                    return "string";
                  default:
                    return "null"
                }
              }(e),
              offset: t,
              length: n,
              parent: o,
              value: e
            }), r(t + n)
          },
          onSeparator: function(e, t, n) {
            "property" === o.type && (":" === e ? o.columnOffset = t : "," === e && r(t))
          },
          onError: function(e) {
            t.push({
              error: e
            })
          }
        }, n);
        var s = o.children[0];
        return s && delete s.parent, s
      }, t.findNodeAtLocation = function(e, t) {
        if (e) {
          for (var n = e, r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            if ("string" == typeof o) {
              if ("object" !== n.type) return;
              for (var s = !1, a = 0, u = n.children; a < u.length; a++) {
                var c = u[a];
                if (c.children[0].value === o) {
                  n = c.children[1], s = !0;
                  break
                }
              }
              if (!s) return
            } else {
              var l = o;
              if ("array" !== n.type || l < 0 || l >= n.children.length) return;
              n = n.children[l]
            }
          }
          return n
        }
      }, t.getNodeValue = s, t.visit = a
    }), define(e[14], t([1, 0, 71]), function(e, t, n) {
      "use strict";

      function r(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return Array.isArray(e) ? (e.forEach(function(e) {
          return e && e.dispose()
        }), []) : 0 !== t.length ? (r(e), r(t), []) : e ? (e.dispose(), e) : void 0
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.empty = Object.freeze({
        dispose: function() {}
      }), t.isDisposable = function(e) {
        return "function" == typeof e.dispose && 0 === e.dispose.length
      }, t.dispose = r, t.combinedDisposable = function(e) {
        return {
          dispose: function() {
            return r(e)
          }
        }
      }, t.toDisposable = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return {
          dispose: function() {
            for (var t = 0, n = e; t < n.length; t++)(0, n[t])()
          }
        }
      };
      var i = function() {
        function e() {
          this._toDispose = []
        }
        return e.prototype.dispose = function() {
          this._toDispose = r(this._toDispose)
        }, e.prototype._register = function(e) {
          return this._toDispose.push(e), e
        }, e
      }();
      t.Disposable = i;
      var o = function() {
        function e() {
          this.references = Object.create(null)
        }
        return e.prototype.acquire = function(e) {
          var t = this,
            r = this.references[e];
          r || (r = this.references[e] = {
            counter: 0,
            object: this.createReferencedObject(e)
          });
          var i = r.object,
            o = n.once(function() {
              0 == --r.counter && (t.destroyReferencedObject(r.object), delete t.references[e])
            });
          return r.counter++, {
            object: i,
            dispose: o
          }
        }, e
      }();
      t.ReferenceCollection = o;
      var s = function() {
        function e(e) {
          this.object = e
        }
        return e.prototype.dispose = function() {}, e
      }();
      t.ImmortalReference = s
    }),
    define(e[70], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
          return function(e) {
            this.element = e
          }
        }(),
        r = function() {
          function e() {}
          return e.prototype.isEmpty = function() {
            return !this._first
          }, e.prototype.clear = function() {
            this._first = void 0, this._last = void 0
          }, e.prototype.unshift = function(e) {
            return this.insert(e, !1)
          }, e.prototype.push = function(e) {
            return this.insert(e, !0)
          }, e.prototype.insert = function(e, t) {
            var r = this,
              i = new n(e);
            if (this._first)
              if (t) {
                var o = this._last;
                this._last = i, i.prev = o, o.next = i
              } else {
                var s = this._first;
                this._first = i, i.next = s, s.prev = i
              }
            else this._first = i, this._last = i;
            return function() {
              for (var e = r._first; e instanceof n; e = e.next)
                if (e === i) {
                  if (e.prev && e.next) {
                    var t = e.prev;
                    t.next = e.next, e.next.prev = t
                  } else e.prev || e.next ? e.next ? e.prev || (r._first = r._first.next, r._first.prev = void 0) : (r._last = r._last.prev, r._last.next = void 0) : (r._first = void 0, r._last = void 0);
                  break
                }
            }
          }, e.prototype.iterator = function() {
            var e = {
                done: void 0,
                value: void 0
              },
              t = this._first;
            return {
              next: function() {
                return t ? (e.done = !1, e.value = t.element, t = t.next) : (e.done = !0, e.value = void 0), e
              }
            }
          }, e.prototype.toArray = function() {
            for (var e = [], t = this._first; t instanceof n; t = t.next) e.push(t.element);
            return e
          }, e
        }();
      t.LinkedList = r
    }), define(e[68], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data"
      }(t.Schemas || (t.Schemas = {}))
    }), define(e[10], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = !1,
        r = !1,
        i = !1,
        o = !1,
        s = !1,
        a = !1,
        u = void 0,
        c = void 0;
      if (t.LANGUAGE_DEFAULT = "en", "object" == typeof process) {
        n = "win32" === process.platform, r = "darwin" === process.platform, i = "linux" === process.platform, o = !n && 0 === process.getuid();
        var l = process.env.VSCODE_NLS_CONFIG;
        if (l) try {
          var d = JSON.parse(l),
            f = d.availableLanguages["*"];
          u = d.locale,
            c = f || t.LANGUAGE_DEFAULT
        } catch (e) {}
        s = !0
      } else if ("object" == typeof navigator) {
        var p = navigator.userAgent;
        n = p.indexOf("Windows") >= 0, r = p.indexOf("Macintosh") >= 0, i = p.indexOf("Linux") >= 0, a = !0, c = u = navigator.language
      }
      var h;
      ! function(e) {
        e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows"
      }(h = t.Platform || (t.Platform = {}));
      var g = h.Web;
      s && (r ? g = h.Mac : n ? g = h.Windows : i && (g = h.Linux)), t.isWindows = n, t.isMacintosh = r, t.isLinux = i, t.isRootUser = o, t.isNative = s, t.isWeb = a, t.platform = g, t.language = c, t.locale = u;
      var m = "object" == typeof self ? self : global;
      t.globals = m, t.setTimeout = m.setTimeout.bind(m), t.clearTimeout = m.clearTimeout.bind(m), t.setInterval = m.setInterval.bind(m), t.clearInterval = m.clearInterval.bind(m);
      ! function(e) {
        e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux"
      }(t.OperatingSystem || (t.OperatingSystem = {})), t.OS = r ? 2 : n ? 1 : 3;
      ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
      }(t.AccessibilitySupport || (t.AccessibilitySupport = {}))
    }),
    define(e[88], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.stdout = 0] = "stdout", e[e.stderr = 1] = "stderr"
      }(t.Source || (t.Source = {}));
      ! function(e) {
        e[e.Success = 0] = "Success", e[e.Unknown = 1] = "Unknown", e[e.AccessDenied = 2] = "AccessDenied", e[e.ProcessNotFound = 3] = "ProcessNotFound"
      }(t.TerminateResponseCode || (t.TerminateResponseCode = {}))
    }), define(e[21], t([1, 0]), function(e, t) {
      "use strict";

      function n(e) {
        return Array.isArray ? Array.isArray(e) : !(!e || typeof e.length !== c.number || e.constructor !== Array)
      }

      function r(e) {
        return typeof e === c.string || e instanceof String
      }

      function i(e) {
        return !(typeof e !== c.object || null === e || Array.isArray(e) || e instanceof RegExp || e instanceof Date)
      }

      function o(e) {
        return typeof e === c.undefined
      }

      function s(e) {
        return o(e) || null === e
      }

      function a(e) {
        return typeof e === c.function
      }

      function u(e, t) {
        if (r(t)) {
          if (typeof e !== t) throw new Error("argument does not match constraint: typeof " + t)
        } else if (a(t)) {
          if (e instanceof t) return;
          if (!s(e) && e.constructor === t) return;
          if (1 === t.length && !0 === t.call(void 0, e)) return;
          throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = {
        number: "number",
        string: "string",
        undefined: "undefined",
        object: "object",
        function: "function"
      };
      t.isArray = n, t.isString = r, t.isStringArray = function(e) {
        return n(e) && e.every(function(e) {
          return r(e)
        })
      }, t.isObject = i, t.isNumber = function(e) {
        return (typeof e === c.number || e instanceof Number) && !isNaN(e)
      }, t.isBoolean = function(e) {
        return !0 === e || !1 === e
      }, t.isUndefined = o, t.isUndefinedOrNull = s;
      var l = Object.prototype.hasOwnProperty;
      t.isEmptyObject = function(e) {
          if (!i(e)) return !1;
          for (var t in e)
            if (l.call(e, t)) return !1;
          return !0
        }, t.isFunction = a, t.areFunctions = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return e && e.length > 0 && e.every(a)
        }, t.validateConstraints = function(e, t) {
          for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) u(e[r], t[r])
        }, t.validateConstraint = u,
        t.create = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          var r = Object.create(e.prototype);
          return e.apply(r, t), r
        }
    }), define(e[12], t([1, 0, 21]), function(e, t, n) {
      "use strict";

      function r(e) {
        if (!e || "object" != typeof e) return e;
        if (e instanceof RegExp) return e;
        var t = Array.isArray(e) ? [] : {};
        return Object.keys(e).forEach(function(n) {
          e[n] && "object" == typeof e[n] ? t[n] = r(e[n]) : t[n] = e[n]
        }), t
      }

      function i(e, t, r) {
        if (n.isUndefinedOrNull(e)) return e;
        var o = t(e);
        if (void 0 !== o) return o;
        if (n.isArray(e)) {
          for (var s = [], a = 0; a < e.length; a++) s.push(i(e[a], t, r));
          return s
        }
        if (n.isObject(e)) {
          if (r.indexOf(e) >= 0) throw new Error("Cannot clone recursive data-structure");
          r.push(e);
          var c = {};
          for (var l in e) u.call(e, l) && (c[l] = i(e[l], t, r));
          return r.pop(), c
        }
        return e
      }

      function o(e, t, r) {
        return void 0 === r && (r = !0), n.isObject(e) ? (n.isObject(t) && Object.keys(t).forEach(function(i) {
          i in e ? r && (n.isObject(e[i]) && n.isObject(t[i]) ? o(e[i], t[i], r) : e[i] = t[i]) : e[i] = t[i]
        }), e) : t
      }

      function s(e, t) {
        if (e === t) return !0;
        if (null === e || void 0 === e || null === t || void 0 === t) return !1;
        if (typeof e != typeof t) return !1;
        if ("object" != typeof e) return !1;
        if (Array.isArray(e) !== Array.isArray(t)) return !1;
        var n, r;
        if (Array.isArray(e)) {
          if (e.length !== t.length) return !1;
          for (n = 0; n < e.length; n++)
            if (!s(e[n], t[n])) return !1
        } else {
          var i = [];
          for (r in e) i.push(r);
          i.sort();
          var o = [];
          for (r in t) o.push(r);
          if (o.sort(), !s(i, o)) return !1;
          for (n = 0; n < i.length; n++)
            if (!s(e[i[n]], t[i[n]])) return !1
        }
        return !0
      }

      function a(e) {
        for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = !0;
        return t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.deepClone = r, t.deepFreeze = function(e) {
        if (!e || "object" != typeof e) return e;
        for (var t = [e]; t.length > 0;) {
          var n = t.shift();
          Object.freeze(n);
          for (var r in n)
            if (u.call(n, r)) {
              var i = n[r];
              "object" != typeof i || Object.isFrozen(i) || t.push(i)
            }
        }
        return e
      };
      var u = Object.prototype.hasOwnProperty;
      t.cloneAndChange = function(e, t) {
        return i(e, t, [])
      }, t.mixin = o, t.assign = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.forEach(function(t) {
          return Object.keys(t).forEach(function(n) {
            return e[n] = t[n]
          })
        }), e
      }, t.equals = s, t.arrayToHash = a, t.createKeywordMatcher = function(e, t) {
        void 0 === t && (t = !1), t && (e = e.map(function(e) {
          return e.toLowerCase()
        }));
        var n = a(e);
        return t ? function(e) {
          return void 0 !== n[e.toLowerCase()] && n.hasOwnProperty(e.toLowerCase())
        } : function(e) {
          return void 0 !== n[e] && n.hasOwnProperty(e)
        }
      }, t.safeStringify = function(e) {
        var t = [];
        return JSON.stringify(e, function(e, r) {
          if (n.isObject(r) || Array.isArray(r)) {
            if (-1 !== t.indexOf(r)) return "[Circular]";
            t.push(r)
          }
          return r
        })
      }, t.getOrDefault = function(e, t, n) {
        void 0 === n && (n = null);
        var r = t(e);
        return void 0 === r ? n : r
      }, t.distinct = function(e, t) {
        var n = Object.create(null);
        return e && t ? (Object.keys(t).forEach(function(r) {
          var i = e[r],
            o = t[r];
          s(i, o) || (n[r] = o)
        }), n) : n
      }
    });
  var n = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    };
    return function(t, n) {
      function r() {
        this.constructor = t
      }
      e(t, n),
        t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
  }();
  define(e[3], t([1, 0, 10]), function(e, t, r) {
      "use strict";

      function i(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
      }

      function o(e) {
        var t;
        return t = e.authority && e.path && "file" === e.scheme ? "//" + e.authority + e.path : p.test(e.path) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, r.isWindows && (t = t.replace(/\//g, "\\")), t
      }

      function s(e, t) {
        var n = t ? function(e) {
            return e.replace(/[#?]/, i)
          } : function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, i)
          },
          r = [],
          o = e.scheme,
          s = e.authority,
          a = e.path,
          u = e.query,
          c = e.fragment;
        if (o && r.push(o, ":"), (s || "file" === o) && r.push("//"), s) {
          if (-1 !== (m = s.indexOf("@"))) {
            var f = s.substr(0, m);
            s = s.substr(m + 1), -1 === (m = f.indexOf(":")) ? r.push(n(f)) : r.push(n(f.substr(0, m)), ":", n(f.substr(m + 1))), r.push("@")
          } - 1 === (m = (s = s.toLowerCase()).indexOf(":")) ? r.push(n(s)) : r.push(n(s.substr(0, m)), s.substr(m))
        }
        if (a) {
          var p = h.exec(a);
          p && (a = p[1] ? "/" + p[2].toLowerCase() + a.substr(3) : p[2].toLowerCase() + a.substr(2));
          for (var g = 0;;) {
            var m = a.indexOf(d, g);
            if (-1 === m) {
              r.push(n(a.substring(g)));
              break
            }
            r.push(n(a.substring(g, m)), d), g = m + 1
          }
        }
        return u && r.push("?", n(u)), c && r.push("#", n(c)), r.join(l)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = /^\w[\w\d+.-]*$/,
        u = /^\//,
        c = /^\/\//,
        l = "",
        d = "/",
        f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        p = /^\/[a-zA-Z]:/,
        h = /^(\/)?([A-Z]:)/,
        g = /^[a-zA-Z]:/,
        m = function() {
          function e(e, t, n, r, i) {
            "object" == typeof e ? (this.scheme = e.scheme || l, this.authority = e.authority || l, this.path = e.path || l, this.query = e.query || l, this.fragment = e.fragment || l) : (this.scheme = e || l, this.authority = t || l, this.path = n || l, this.query = r || l, this.fragment = i || l, function(e) {
              if (e.scheme && !a.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
              if (e.path)
                if (e.authority) {
                  if (!u.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
                } else if (c.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
            }(this))
          }
          return e.isUri = function(t) {
            return t instanceof e || !!t && ("string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme)
          }, Object.defineProperty(e.prototype, "fsPath", {
            get: function() {
              return o(this)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.with = function(e) {
            if (!e) return this;
            var t = e.scheme,
              n = e.authority,
              r = e.path,
              i = e.query,
              o = e.fragment;
            return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === r ? r = this.path : null === r && (r = l), void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new v(t, n, r, i, o)
          }, e.parse = function(e) {
            var t = f.exec(e);
            return t ? new v(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l)) : new v(l, l, l, l, l)
          }, e.file = function(e) {
            var t = l;
            if (r.isWindows && (e = e.replace(/\\/g, d)), e[0] === d && e[1] === d) {
              var n = e.indexOf(d, 2); - 1 === n ? (t = e.substring(2), e = d) : (t = e.substring(2, n), e = e.substring(n) || d)
            }
            return g.test(e) ? e = d + e : e[0] !== d && (e = d + e), new v("file", t, e, l, l)
          }, e.from = function(e) {
            return new v(e.scheme, e.authority, e.path, e.query, e.fragment)
          }, e.prototype.toString = function(e) {
            return void 0 === e && (e = !1), s(this, e)
          }, e.prototype.toJSON = function() {
            var e = {
              $mid: 1,
              fsPath: this.fsPath,
              external: this.toString()
            };
            return this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
          }, e.revive = function(t) {
            if (t) {
              if (t instanceof e) return t;
              var n = new v(t);
              return n._fsPath = t.fsPath, n._formatted = t.external, n
            }
            return t
          }, e
        }();
      t.default = m;
      var v = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._formatted = null, t._fsPath = null, t
        }
        return n(t, e), Object.defineProperty(t.prototype, "fsPath", {
          get: function() {
            return this._fsPath || (this._fsPath = o(this)), this._fsPath
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.toString = function(e) {
          return void 0 === e && (e = !1), e ? s(this, !0) : (this._formatted || (this._formatted = s(this, !1)), this._formatted)
        }, t
      }(m)
    }), define(e[20], t([1, 0, 3]), function(e, t, r) {
      "use strict";

      function i(e) {
        var t = [];
        return e.forEach(function(e) {
          return t.push(e)
        }), t
      }

      function o(e) {
        var t = [];
        return e.forEach(function(e, n) {
          return t.push(n)
        }), t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.values = i, t.keys = o, t.getOrSet = function(e, t, n) {
        var r = e.get(t);
        return void 0 === r && (r = n, e.set(t, r)), r
      };
      var s = function() {
        function e() {
          this._value = "", this._pos = 0
        }
        return e.prototype.reset = function(e) {
          return this._value = e, this._pos = 0, this
        }, e.prototype.next = function() {
          return this._pos += 1, this
        }, e.prototype.join = function(e) {
          return e.join("")
        }, e.prototype.hasNext = function() {
          return this._pos < this._value.length - 1
        }, e.prototype.cmp = function(e) {
          return e.charCodeAt(0) - this._value.charCodeAt(this._pos)
        }, e.prototype.value = function() {
          return this._value[this._pos]
        }, e
      }();
      t.StringIterator = s;
      var a = function() {
        function e() {}
        return e.prototype.reset = function(e) {
          return this._value = e.replace(/\\$|\/$/, ""), this._from = 0, this._to = 0, this.next()
        }, e.prototype.hasNext = function() {
          return this._to < this._value.length
        }, e.prototype.join = function(e) {
          return e.join("/")
        }, e.prototype.next = function() {
          this._from = this._to;
          for (var t = !0; this._to < this._value.length; this._to++) {
            var n = this._value.charCodeAt(this._to);
            if (n === e._fwd || n === e._bwd) {
              if (!t) break;
              this._from++
            } else t = !1
          }
          return this
        }, e.prototype.cmp = function(e) {
          for (var t = 0, n = e.length, r = this._from; t < n && r < this._to;) {
            var i = e.charCodeAt(t) - this._value.charCodeAt(r);
            if (0 !== i) return i;
            t += 1, r += 1
          }
          return n === this._to - this._from ? 0 : t < n ? -1 : 1
        }, e.prototype.value = function() {
          return this._value.substring(this._from, this._to)
        }, e._fwd = "/".charCodeAt(0), e._bwd = "\\".charCodeAt(0), e
      }();
      t.PathIterator = a;
      var u = function() {
          function e() {}
          return e.prototype.isEmpty = function() {
            return !(this.left || this.mid || this.right || this.element)
          }, e
        }(),
        c = function() {
          function e(e) {
            this._iter = e
          }
          return e.forPaths = function() {
            return new e(new a)
          }, e.forStrings = function() {
            return new e(new s)
          }, e.prototype.clear = function() {
            this._root = void 0
          }, e.prototype.set = function(e, t) {
            var n, r = this._iter.reset(e);
            for (this._root || (this._root = new u, this._root.str = r.value()), n = this._root;;) {
              var i = r.cmp(n.str);
              if (i > 0) n.left || (n.left = new u, n.left.str = r.value()), n = n.left;
              else if (i < 0) n.right || (n.right = new u, n.right.str = r.value()), n = n.right;
              else {
                if (!r.hasNext()) break;
                r.next(), n.mid || (n.mid = new u, n.mid.str = r.value()), n = n.mid
              }
            }
            var o = n.element;
            return n.element = t, o
          }, e.prototype.get = function(e) {
            for (var t = this._iter.reset(e), n = this._root; n;) {
              var r = t.cmp(n.str);
              if (r > 0) n = n.left;
              else if (r < 0) n = n.right;
              else {
                if (!t.hasNext()) break;
                t.next(), n = n.mid
              }
            }
            return n ? n.element : void 0
          }, e.prototype.delete = function(e) {
            for (var t = this._iter.reset(e), n = [], r = this._root; r;) {
              var i = t.cmp(r.str);
              if (i > 0) n.push([1, r]), r = r.left;
              else if (i < 0) n.push([-1, r]), r = r.right;
              else {
                if (!t.hasNext()) {
                  for (r.element = void 0; n.length > 0 && r.isEmpty();) {
                    var o = n.pop(),
                      s = o[0],
                      a = o[1];
                    switch (s) {
                      case 1:
                        a.left = void 0;
                        break;
                      case 0:
                        a.mid = void 0;
                        break;
                      case -1:
                        a.right = void 0
                    }
                    r = a
                  }
                  break
                }
                t.next(), n.push([0, r]), r = r.mid
              }
            }
          }, e.prototype.findSubstr = function(e) {
            for (var t, n = this._iter.reset(e), r = this._root; r;) {
              var i = n.cmp(r.str);
              if (i > 0) r = r.left;
              else if (i < 0) r = r.right;
              else {
                if (!n.hasNext()) break;
                n.next(), t = r.element || t, r = r.mid
              }
            }
            return r && r.element || t
          }, e.prototype.findSuperstr = function(t) {
            for (var n = this._iter.reset(t), r = this._root; r;) {
              var i = n.cmp(r.str);
              if (i > 0) r = r.left;
              else if (i < 0) r = r.right;
              else {
                if (!n.hasNext()) {
                  if (!r.mid) return;
                  var o = new e(this._iter);
                  return o._root = r.mid, o
                }
                n.next(), r = r.mid
              }
            }
          }, e.prototype.forEach = function(e) {
            this._forEach(this._root, [], e)
          }, e.prototype._forEach = function(e, t, n) {
            e && (this._forEach(e.left, t, n), t.push(e.str), e.element && n(e.element, this._iter.join(t)), this._forEach(e.mid, t, n), t.pop(),
              this._forEach(e.right, t, n))
          }, e
        }();
      t.TernarySearchTree = c;
      var l = function() {
        function e(e) {
          this.ignoreCase = e, this.map = new Map
        }
        return e.prototype.set = function(e, t) {
          this.map.set(this.toKey(e), t)
        }, e.prototype.get = function(e) {
          return this.map.get(this.toKey(e))
        }, e.prototype.has = function(e) {
          return this.map.has(this.toKey(e))
        }, Object.defineProperty(e.prototype, "size", {
          get: function() {
            return this.map.size
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.clear = function() {
          this.map.clear()
        }, e.prototype.delete = function(e) {
          return this.map.delete(this.toKey(e))
        }, e.prototype.forEach = function(e) {
          this.map.forEach(e)
        }, e.prototype.values = function() {
          return i(this.map)
        }, e.prototype.toKey = function(e) {
          var t = e.toString();
          return this.ignoreCase && (t = t.toLowerCase()), t
        }, e
      }();
      t.ResourceMap = l;
      var d = function(e) {
        function t() {
          return e.call(this) || this
        }
        return n(t, e), t.prototype.keys = function() {
          return o(this.map).map(function(e) {
            return r.default.parse(e)
          })
        }, t
      }(l);
      t.StrictResourceMap = d;
      var f;
      ! function(e) {
        e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld",
          e[e.AsNew = 2] = "AsNew"
      }(f = t.Touch || (t.Touch = {}));
      var p = function() {
        function e() {
          this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0
        }
        return e.prototype.clear = function() {
            this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0
          }, e.prototype.isEmpty = function() {
            return !this._head && !this._tail
          }, Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._size
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.has = function(e) {
            return this._map.has(e)
          }, e.prototype.get = function(e, t) {
            void 0 === t && (t = f.None);
            var n = this._map.get(e);
            if (n) return t !== f.None && this.touch(n, t), n.value
          }, e.prototype.set = function(e, t, n) {
            void 0 === n && (n = f.None);
            var r = this._map.get(e);
            if (r) r.value = t, n !== f.None && this.touch(r, n);
            else {
              switch (r = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0
              }, n) {
                case f.None:
                  this.addItemLast(r);
                  break;
                case f.AsOld:
                  this.addItemFirst(r);
                  break;
                case f.AsNew:
                default:
                  this.addItemLast(r)
              }
              this._map.set(e, r), this._size++
            }
          }, e.prototype.delete = function(e) {
            return !!this.remove(e)
          }, e.prototype.remove = function(e) {
            var t = this._map.get(e);
            if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value
          }, e.prototype.shift = function() {
            if (this._head || this._tail) {
              if (!this._head || !this._tail) throw new Error("Invalid list");
              var e = this._head;
              return this._map.delete(e.key), this.removeItem(e), this._size--, e.value
            }
          }, e.prototype.forEach = function(e, t) {
            for (var n = this._head; n;) t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this), n = n.next
          }, e.prototype.values = function() {
            for (var e = [], t = this._head; t;) e.push(t.value), t = t.next;
            return e
          }, e.prototype.keys = function() {
            for (var e = [], t = this._head; t;) e.push(t.key), t = t.next;
            return e
          }, e.prototype.trimOld = function(e) {
            if (!(e >= this.size))
              if (0 !== e) {
                for (var t = this._head, n = this.size; t && n > e;) this._map.delete(t.key), t = t.next, n--;
                this._head = t, this._size = n, t.previous = void 0
              } else this.clear()
          }, e.prototype.addItemFirst = function(e) {
            if (this._head || this._tail) {
              if (!this._head) throw new Error("Invalid list");
              e.next = this._head, this._head.previous = e
            } else this._tail = e;
            this._head = e
          },
          e.prototype.addItemLast = function(e) {
            if (this._head || this._tail) {
              if (!this._tail) throw new Error("Invalid list");
              e.previous = this._tail, this._tail.next = e
            } else this._head = e;
            this._tail = e
          }, e.prototype.removeItem = function(e) {
            if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
            else if (e === this._head) this._head = e.next;
            else if (e === this._tail) this._tail = e.previous;
            else {
              var t = e.next,
                n = e.previous;
              if (!t || !n) throw new Error("Invalid list");
              t.previous = n, n.next = t
            }
          }, e.prototype.touch = function(e, t) {
            if (!this._head || !this._tail) throw new Error("Invalid list");
            if (t === f.AsOld || t === f.AsNew)
              if (t === f.AsOld) {
                if (e === this._head) return;
                var n = e.next,
                  r = e.previous;
                e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e
              } else if (t === f.AsNew) {
              if (e === this._tail) return;
              var n = e.next,
                r = e.previous;
              e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e
            }
          }, e
      }();
      t.LinkedMap = p;
      var h = function(e) {
        function t(t, n) {
          void 0 === n && (n = 1);
          var r = e.call(this) || this;
          return r._limit = t, r._ratio = Math.min(Math.max(0, n), 1), r
        }
        return n(t, e), Object.defineProperty(t.prototype, "limit", {
          get: function() {
            return this._limit
          },
          set: function(e) {
            this._limit = e, this.checkTrim()
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "ratio", {
          get: function() {
            return this._ratio
          },
          set: function(e) {
            this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim()
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.get = function(t) {
          return e.prototype.get.call(this, t, f.AsNew)
        }, t.prototype.peek = function(t) {
          return e.prototype.get.call(this, t, f.None)
        }, t.prototype.set = function(t, n) {
          e.prototype.set.call(this, t, n, f.AsNew), this.checkTrim()
        }, t.prototype.checkTrim = function() {
          this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio))
        }, t
      }(p);
      t.LRUCache = h
    }), define(e[65], t([1, 0, 3]), function(e, t, n) {
      "use strict";

      function r(e, t) {
        return t instanceof RegExp ? {
          $mid: 2,
          source: t.source,
          flags: (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "")
        } : t
      }

      function i(e, t) {
        if (!e || t > 200) return e;
        if ("object" == typeof e) {
          switch (e.$mid) {
            case 1:
              return n.default.revive(e);
            case 2:
              return new RegExp(e.source, e.flags)
          }
          for (var r in e) Object.hasOwnProperty.call(e, r) && (e[r] = i(e[r], t + 1))
        }
        return e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.stringify = function(e) {
        return JSON.stringify(e, r)
      }, t.parse = function(e) {
        var t = JSON.parse(e);
        return t = i(t, 0)
      }, t.revive = i
    }), define(e[8], t([1, 0, 20]), function(e, t, n) {
      "use strict";

      function r(e) {
        return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, "\\$&")
      }

      function i(e, t) {
        if (!e || !t) return e;
        var n = t.length;
        if (0 === n || 0 === e.length) return e;
        for (var r = 0; e.indexOf(t, r) === r;) r += n;
        return e.substring(r)
      }

      function o(e, t) {
        if (!e || !t) return e;
        var n = t.length,
          r = e.length;
        if (0 === n || 0 === r) return e;
        for (var i = r, o = -1;;) {
          if (-1 === (o = e.lastIndexOf(t, i - 1)) || o + n !== i) break;
          if (0 === o) return "";
          i = o
        }
        return e.substring(0, i)
      }

      function s(e, n, r) {
        if (!t.canNormalize || !e) return e;
        var i = r.get(e);
        if (i) return i;
        var o;
        return o = y.test(e) ? e.normalize(n) : e, r.set(e, o), o
      }

      function a(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
      }

      function u(e) {
        return e >= 97 && e <= 122
      }

      function c(e) {
        return e >= 65 && e <= 90
      }

      function l(e) {
        return u(e) || c(e)
      }

      function d(e, t, n) {
        if (void 0 === n && (n = e.length), "string" != typeof e || "string" != typeof t) return !1;
        for (var r = 0; r < n; r++) {
          var i = e.charCodeAt(r),
            o = t.charCodeAt(r);
          if (i !== o)
            if (l(i) && l(o)) {
              var s = Math.abs(i - o);
              if (0 !== s && 32 !== s) return !1
            } else if (String.fromCharCode(i).toLowerCase() !== String.fromCharCode(o).toLowerCase()) return !1
        }
        return !0
      }

      function f(e, t, n, r, i, o) {
        for (; t < n && i < o;) {
          if (e[t] !== r[i]) return !1;
          t += 1, i += 1
        }
        return !0
      }

      function p(e) {
        return (e = +e) >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65281 && e <= 65374
      }

      function h(e) {
        return e && e.length > 0 && 65279 === e.charCodeAt(0)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.empty = "", t.isFalsyOrWhitespace = function(e) {
        return !e || "string" != typeof e || 0 === e.trim().length
      }, t.pad = function(e, t, n) {
        void 0 === n && (n = "0");
        for (var r = "" + e, i = [r], o = r.length; o < t; o++) i.push(n);
        return i.reverse().join("")
      };
      var g = /{(\d+)}/g;
      t.format = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return 0 === t.length ? e : e.replace(g, function(e, n) {
          var r = parseInt(n, 10);
          return isNaN(r) || r < 0 || r >= t.length ? e : t[r]
        })
      }, t.escape = function(e) {
        return e.replace(/[<|>|&]/g, function(e) {
          switch (e) {
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case "&":
              return "&amp;";
            default:
              return e
          }
        })
      }, t.escapeRegExpCharacters = r, t.trim = function(e, t) {
        return void 0 === t && (t = " "), o(i(e, t), t)
      }, t.ltrim = i, t.rtrim = o, t.convertSimple2RegExpPattern = function(e) {
        return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*")
      }, t.stripWildcards = function(e) {
        return e.replace(/\*/g, "")
      }, t.startsWith = function(e, t) {
        if (e.length < t.length) return !1;
        for (var n = 0; n < t.length; n++)
          if (e[n] !== t[n]) return !1;
        return !0
      }, t.endsWith = function(e, t) {
        var n = e.length - t.length;
        return n > 0 ? e.indexOf(t, n) === n : 0 === n && e === t
      }, t.createRegExp = function(e, t, n) {
        if (void 0 === n && (n = {}), !e) throw new Error("Cannot create regex from empty string");
        t || (e = r(e)),
          n.wholeWord && (/\B/.test(e.charAt(0)) || (e = "\\b" + e), /\B/.test(e.charAt(e.length - 1)) || (e += "\\b"));
        var i = "";
        return n.global && (i += "g"), n.matchCase || (i += "i"), n.multiline && (i += "m"), new RegExp(e, i)
      }, t.regExpLeadsToEndlessLoop = function(e) {
        return "^" !== e.source && "^$" !== e.source && "$" !== e.source && "^\\s*$" !== e.source && e.exec("") && 0 === e.lastIndex
      }, t.regExpContainsBackreference = function(e) {
        return !!e.match(/([^\\]|^)(\\\\)*\\\d+/)
      }, t.canNormalize = "function" == typeof "".normalize;
      var m = new n.LRUCache(1e4);
      t.normalizeNFC = function(e) {
        return s(e, "NFC", m)
      };
      var v = new n.LRUCache(1e4);
      t.normalizeNFD = function(e) {
        return s(e, "NFD", v)
      };
      var y = /[^\u0000-\u0080]/;
      t.firstNonWhitespaceIndex = function(e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t);
          if (32 !== r && 9 !== r) return t
        }
        return -1
      }, t.getLeadingWhitespace = function(e, t, n) {
        void 0 === t && (t = 0), void 0 === n && (n = e.length);
        for (var r = t; r < n; r++) {
          var i = e.charCodeAt(r);
          if (32 !== i && 9 !== i) return e.substring(t, r)
        }
        return e.substring(t, n)
      }, t.lastNonWhitespaceIndex = function(e, t) {
        void 0 === t && (t = e.length - 1);
        for (var n = t; n >= 0; n--) {
          var r = e.charCodeAt(n);
          if (32 !== r && 9 !== r) return n
        }
        return -1
      }, t.compare = a, t.compareIgnoreCase = function(e, t) {
        for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
          var i = e.charCodeAt(r),
            o = t.charCodeAt(r);
          if (i !== o) {
            c(i) && (i += 32), c(o) && (o += 32);
            var s = i - o;
            if (0 !== s) return u(i) && u(o) ? s : a(e.toLowerCase(), t.toLowerCase())
          }
        }
        return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
      }, t.equalsIgnoreCase = function(e, t) {
        return (e ? e.length : 0) === (t ? t.length : 0) && d(e, t)
      }, t.beginsWithIgnoreCase = function(e, t) {
        var n = t.length;
        return !(t.length > e.length) && d(e, t, n)
      }, t.commonPrefixLength = function(e, t) {
        var n, r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++)
          if (e.charCodeAt(n) !== t.charCodeAt(n)) return n;
        return r
      }, t.commonSuffixLength = function(e, t) {
        var n, r = Math.min(e.length, t.length),
          i = e.length - 1,
          o = t.length - 1;
        for (n = 0; n < r; n++)
          if (e.charCodeAt(i - n) !== t.charCodeAt(o - n)) return n;
        return r
      }, t.overlap = function(e, t) {
        var n = e.length,
          r = t.length,
          i = n - r;
        if (0 === i) return e === t ? n : 0;
        for (i < 0 && (r += i, i = 0); i < n && r > 0;) {
          if (f(e, i, n, t, 0, r)) return r;
          r -= 1, i += 1
        }
        return 0
      }, t.isHighSurrogate = function(e) {
        return 55296 <= e && e <= 56319
      }, t.isLowSurrogate = function(e) {
        return 56320 <= e && e <= 57343
      };
      var _ = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return _.test(e)
      };
      var b = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
      t.containsEmoji = function(e) {
        return b.test(e)
      };
      var C = /^[\t\n\r\x20-\x7E]*$/;
      t.isBasicASCII = function(e) {
        return C.test(e)
      }, t.containsFullWidthCharacter = function(e) {
        for (var t = 0, n = e.length; t < n; t++)
          if (p(e.charCodeAt(t))) return !0;
        return !1
      }, t.isFullWidthCharacter = p, t.lcut = function(e, n) {
        if (e.length < n) return e;
        for (var r = /\b/g, i = 0; r.test(e) && !(e.length - r.lastIndex < n);) i = r.lastIndex, r.lastIndex += 1;
        return e.substring(i).replace(/^\s/, t.empty)
      };
      var S = /\x1B\x5B[12]?K/g,
        E = /\x1b\[\d+m/g,
        x = /\x1b\[0?m/g;
      t.removeAnsiEscapeCodes = function(e) {
        return e && (e = (e = (e = e.replace(S, "")).replace(E, "")).replace(x, "")), e
      }, t.UTF8_BOM_CHARACTER = String.fromCharCode(65279), t.startsWithUTF8BOM = h, t.stripUTF8BOM = function(e) {
        return h(e) ? e.substr(1) : e
      }, t.safeBtoa = function(e) {
        return btoa(encodeURIComponent(e))
      }, t.repeat = function(e, t) {
        for (var n = "", r = 0; r < t; r++) n += e;
        return n
      }, t.fuzzyContains = function(e, t) {
        if (!e || !t) return !1;
        if (e.length < t.length) return !1;
        for (var n = t.length, r = e.toLowerCase(), i = 0, o = -1; i < n;) {
          var s = r.indexOf(t[i], o + 1);
          if (s < 0) return !1;
          o = s, i++
        }
        return !0
      }, t.containsUppercaseCharacter = function(e, t) {
        return void 0 === t && (t = !1), !!e && (t && (e = e.replace(/\\./g, "")), e.toLowerCase() !== e)
      }
    }),
    define(e[13], t([1, 0, 10, 8]), function(e, t, n, r) {
      "use strict";

      function i(e) {
        var t = ~e.lastIndexOf("/") || ~e.lastIndexOf("\\");
        return 0 === t ? e : ~t == e.length - 1 ? i(e.substring(0, e.length - 1)) : e.substr(1 + ~t)
      }

      function o(e, t) {
        if (null === e || void 0 === e) return e;
        var r = e.length;
        if (0 === r) return ".";
        var i = n.isWindows && t;
        if (function(e, t) {
            return t ? !d.test(e) : !l.test(e)
          }(e, i)) return e;
        for (var o = i ? "\\" : "/", u = a(e, o), c = u.length, f = !1, p = "", h = u.length; h <= r; h++)
          if (h === r || 47 === e.charCodeAt(h) || 92 === e.charCodeAt(h)) {
            if (s(e, c, h, "..")) {
              var g = p.lastIndexOf(o),
                m = p.slice(g + 1);
              (u || m.length > 0) && ".." !== m && (p = -1 === g ? "" : p.slice(0, g), f = !0)
            } else s(e, c, h, ".") && (u || p || h < r - 1) && (f = !0);
            if (!f) {
              var v = e.slice(c, h);
              "" !== p && p[p.length - 1] !== o && (p += o), p += v
            }
            c = h + 1, f = !1
          }
        return u + p
      }

      function s(e, t, n, r) {
        return t + r.length === n && e.indexOf(r, t) === t
      }

      function a(e, t) {
        if (void 0 === t && (t = "/"), !e) return "";
        var n = e.length,
          r = e.charCodeAt(0);
        if (47 === r || 92 === r) {
          if ((47 === (r = e.charCodeAt(1)) || 92 === r) && 47 !== (r = e.charCodeAt(2)) && 92 !== r) {
            for (var i = 3, o = i; i < n && (47 !== (r = e.charCodeAt(i)) && 92 !== r); i++);
            if (r = e.charCodeAt(i + 1), o !== i && 47 !== r && 92 !== r)
              for (i += 1; i < n; i++)
                if (47 === (r = e.charCodeAt(i)) || 92 === r) return e.slice(0, i + 1).replace(/[\\/]/g, t)
          }
          return t
        }
        if ((r >= 65 && r <= 90 || r >= 97 && r <= 122) && 58 === e.charCodeAt(1)) return 47 === (r = e.charCodeAt(2)) || 92 === r ? e.slice(0, 2) + t : e.slice(0, 2);
        var s = e.indexOf("://");
        if (-1 !== s)
          for (s += 3; s < n; s++)
            if (47 === (r = e.charCodeAt(s)) || 92 === r) return e.slice(0, s + 1);
        return ""
      }

      function u(e) {
        if (!e) return !1;
        var t = e.charCodeAt(0);
        if (47 === t || 92 === t) return !0;
        if ((t >= 65 && t <= 90 || t >= 97 && t <= 122) && e.length > 2 && 58 === e.charCodeAt(1)) {
          var n = e.charCodeAt(2);
          if (47 === n || 92 === n) return !0
        }
        return !1
      }

      function c(e) {
        return e && 47 === e.charCodeAt(0)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.sep = "/", t.nativeSep = n.isWindows ? "\\" : "/", t.dirname = function(e) {
        var r = ~e.lastIndexOf("/") || ~e.lastIndexOf("\\");
        if (0 === r) return ".";
        if (0 == ~r) return e[0];
        var i = e.substring(0, ~r);
        return n.isWindows && ":" === i[i.length - 1] && (i += t.nativeSep), i
      }, t.basename = i, t.extname = function(e) {
        var t = ~(e = i(e)).lastIndexOf(".");
        return t ? e.substring(~t) : ""
      };
      var l = /(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/,
        d = /(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/;
      t.normalize = o, t.getRoot = a, t.join = function() {
        for (var e = "", n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          if (n > 0) {
            var i = e.charCodeAt(e.length - 1);
            if (47 !== i && 92 !== i) {
              var s = r.charCodeAt(0);
              47 !== s && 92 !== s && (e += t.sep)
            }
          }
          e += r
        }
        return o(e)
      }, t.isUNC = function(e) {
        if (!n.isWindows) return !1;
        if (!e || e.length < 5) return !1;
        var t = e.charCodeAt(0);
        if (92 !== t) return !1;
        if (92 !== (t = e.charCodeAt(1))) return !1;
        for (var r = 2, i = r; r < e.length && 92 !== (t = e.charCodeAt(r)); r++);
        return i !== r && (t = e.charCodeAt(r + 1), !isNaN(t) && 92 !== t)
      };
      var f = n.isWindows ? /[\\/:\*\?"<>\|]/g : /[\\/]/g,
        p = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
      t.isValidBasename = function(e) {
        return !(!e || 0 === e.length || /^\s+$/.test(e) || (f.lastIndex = 0, f.test(e) || n.isWindows && p.test(e) || "." === e || ".." === e || n.isWindows && "." === e[e.length - 1] || n.isWindows && e.length !== e.trim().length))
      }, t.isEqual = function(e, t, n) {
        var i = e === t;
        return !n || i ? i : !(!e || !t) && r.equalsIgnoreCase(e, t)
      }, t.isEqualOrParent = function(e, n, i) {
        if (e === n) return !0;
        if (!e || !n) return !1;
        if (n.length > e.length) return !1;
        if (i) {
          if (!r.beginsWithIgnoreCase(e, n)) return !1;
          if (n.length === e.length) return !0;
          var o = n.length;
          return n.charAt(n.length - 1) === t.nativeSep && o--, e.charAt(o) === t.nativeSep
        }
        return n.charAt(n.length - 1) !== t.nativeSep && (n += t.nativeSep), 0 === e.indexOf(n)
      }, t.isAbsolute = function(e) {
        return n.isWindows ? u(e) : c(e)
      }, t.isAbsolute_win32 = u, t.isAbsolute_posix = c
    }), define(e[154], t([1, 0, 8, 13]), function(e, t, n, r) {
      "use strict";

      function i(e, t, n) {
        if (void 0 === n && (n = !1), l) {
          var r = e || "",
            i = t || "",
            s = l.compare(r, i);
          return d && 0 === s && r !== i ? r < i ? -1 : 1 : s
        }
        return o(e, t, n)
      }

      function o(e, t, n) {
        void 0 === n && (n = !1), n || (e = e && e.toLowerCase(), t = t && t.toLowerCase());
        var r = a(e),
          i = r[0],
          o = r[1],
          s = a(t),
          u = s[0],
          c = s[1];
        return i !== u ? i < u ? -1 : 1 : o === c ? 0 : o < c ? -1 : 1
      }

      function s(e, t) {
        if (l) {
          var n = a(e),
            r = n[0],
            i = n[1],
            o = a(t),
            s = o[0],
            u = o[1],
            c = l.compare(i, u);
          if (0 === c) {
            if (d && i !== u) return i < u ? -1 : 1;
            if (c = l.compare(r, s),
              d && 0 === c && r !== s) return r < s ? -1 : 1
          }
          return c
        }
        return function(e, t) {
          var n = a(e && e.toLowerCase()),
            r = n[0],
            i = n[1],
            o = a(t && t.toLowerCase()),
            s = o[0],
            u = o[1];
          if (i !== u) return i < u ? -1 : 1;
          if (r === s) return 0;
          return r < s ? -1 : 1
        }(e, t)
      }

      function a(e) {
        var t = e ? f.exec(e) : [];
        return [t && t[1] || "", t && t[3] || ""]
      }

      function u(e, t, n) {
        return void 0 === n && (n = !1), n || (e = e && e.toLowerCase(), t = t && t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1
      }

      function c(e, t, r) {
        var i = e.toLowerCase(),
          o = t.toLowerCase(),
          s = n.startsWith(i, r),
          a = n.startsWith(o, r);
        if (s !== a) return s ? -1 : 1;
        if (s && a) {
          if (i.length < o.length) return -1;
          if (i.length > o.length) return 1
        }
        return 0
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l, d;
      t.setFileNameComparer = function(e) {
        l = e, d = e.resolvedOptions().numeric
      }, t.compareFileNames = i;
      var f = /^(.*?)(\.([^.]*))?$/;
      t.noIntlCompareFileNames = o, t.compareFileExtensions = s, t.comparePaths = function(e, t, n) {
        void 0 === n && (n = !1);
        for (var o, s, a = e.split(r.nativeSep), c = t.split(r.nativeSep), l = a.length - 1, d = c.length - 1, f = 0;; f++) {
          if (o = l === f, s = d === f, o && s) return i(a[f], c[f], n);
          if (o) return -1;
          if (s) return 1;
          var p = u(a[f], c[f], n);
          if (0 !== p) return p
        }
      }, t.compareAnything = function(e, t, r) {
        var o = e.toLowerCase(),
          s = t.toLowerCase(),
          a = c(e, t, r);
        if (a) return a;
        var u = n.endsWith(o, r);
        if (u !== n.endsWith(s, r)) return u ? -1 : 1;
        var l = i(o, s);
        return 0 !== l ? l : o.localeCompare(s)
      }, t.compareByPrefix = c
    }), define(e[64], t([1, 0, 3, 10, 13, 8]), function(e, t, n, r, i, o) {
      "use strict";

      function s(e) {
        return r.isWindows && e && ":" === e[1]
      }

      function a(e) {
        return s(e) ? e.charAt(0).toUpperCase() + e.slice(1) : e
      }

      function u(e, t) {
        return e && (r.isMacintosh || r.isLinux) && i.isEqualOrParent(e, t, !r.isLinux) && (e = "~" + e.substr(t.length)), e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getPathLabel = function(e, t, c) {
        if (!e) return null;
        if ("string" == typeof e && (e = n.default.file(e)), "file" !== e.scheme && "untitled" !== e.scheme) return e.authority + e.path;
        var l = t ? t.getWorkspaceFolder(e) : null;
        if (l) {
          var d = t.getWorkspace().folders.length > 1,
            f = void 0;
          if (f = i.isEqual(l.uri.fsPath, e.fsPath, !r.isLinux) ? "" : i.normalize(o.ltrim(e.fsPath.substr(l.uri.fsPath.length), i.nativeSep), !0), d) {
            var p = i.basename(l.uri.fsPath);
            f = f ? i.join(p, f) : p
          }
          return f
        }
        if (s(e.fsPath)) return i.normalize(a(e.fsPath), !0);
        var h = i.normalize(e.fsPath, !0);
        return !r.isWindows && c && (h = u(h, c.userHome)), h
      }, t.getBaseLabel = function(e) {
        if (!e) return null;
        "string" == typeof e && (e = n.default.file(e));
        var t = i.basename(e.fsPath) || e.fsPath;
        return s(t) ? a(t) : t
      }, t.normalizeDriveLetter = a, t.tildify = u, t.untildify = function(e, t) {
        return e.replace(/^~($|\/|\\)/, t + "$1")
      };
      var c = "…",
        l = "\\\\",
        d = "~";
      t.shorten = function(e) {
        for (var t = new Array(e.length), n = !1, r = 0; r < e.length; r++) {
          var s = e[r];
          if ("" !== s)
            if (s) {
              n = !0;
              var a = "";
              0 === s.indexOf(l) ? (a = s.substr(0, s.indexOf(l) + l.length), s = s.substr(s.indexOf(l) + l.length)) : 0 === s.indexOf(i.nativeSep) ? (a = s.substr(0, s.indexOf(i.nativeSep) + i.nativeSep.length), s = s.substr(s.indexOf(i.nativeSep) + i.nativeSep.length)) : 0 === s.indexOf(d) && (a = s.substr(0, s.indexOf(d) + d.length), s = s.substr(s.indexOf(d) + d.length));
              for (var u = s.split(i.nativeSep), f = 1; n && f <= u.length; f++)
                for (var p = u.length - f; n && p >= 0; p--) {
                  n = !1;
                  for (var h = u.slice(p, p + f).join(i.nativeSep), g = 0; !n && g < e.length; g++)
                    if (g !== r && e[g] && e[g].indexOf(h) > -1) {
                      var m = p + f === u.length,
                        v = p > 0 && e[g].indexOf(i.nativeSep) > -1 ? i.nativeSep + h : h,
                        y = o.endsWith(e[g], v);
                      n = !m || y
                    }
                  if (!n) {
                    var _ = "";
                    (o.endsWith(u[0], ":") || "" !== a) && (1 === p && (p = 0, f++, h = u[0] + i.nativeSep + h), p > 0 && (_ = u[0] + i.nativeSep), _ = a + _), p > 0 && (_ = _ + c + i.nativeSep), _ += h, p + f < u.length && (_ = _ + i.nativeSep + c), t[r] = _
                  }
                }
              n && (t[r] = s)
            } else t[r] = s;
          else t[r] = "." + i.nativeSep
        }
        return t
      };
      var f;
      ! function(e) {
        e[e.TEXT = 0] = "TEXT", e[e.VARIABLE = 1] = "VARIABLE", e[e.SEPARATOR = 2] = "SEPARATOR"
      }(f || (f = {})), t.template = function(e, t) {
        void 0 === t && (t = Object.create(null));
        for (var n, r = [], i = !1, o = "", s = 0; s < e.length; s++)
          if ("$" === (n = e[s]) || i && "{" === n) o && r.push({
            value: o,
            type: f.TEXT
          }), o = "", i = !0;
          else if ("}" === n && i) {
          var a = t[o];
          if ("string" == typeof a) a.length && r.push({
            value: a,
            type: f.VARIABLE
          });
          else if (a) {
            var u = r[r.length - 1];
            u && u.type === f.SEPARATOR || r.push({
              value: a.label,
              type: f.SEPARATOR
            })
          }
          o = "", i = !1
        } else o += n;
        return o && !i && r.push({
          value: o,
          type: f.TEXT
        }), r.filter(function(e, t) {
          return e.type !== f.SEPARATOR || [r[t - 1], r[t + 1]].every(function(e) {
            return e && e.type === f.VARIABLE && e.value.length > 0
          })
        }).map(function(e) {
          return e.value
        }).join("")
      }, t.mnemonicMenuLabel = function(e, t) {
        return r.isMacintosh || t ? e.replace(/\(&&\w\)|&&/g, "") : e.replace(/&&/g, "&")
      }, t.mnemonicButtonLabel = function(e) {
        return r.isMacintosh ? e.replace(/\(&&\w\)|&&/g, "") : e.replace(/&&/g, r.isWindows ? "&" : "_")
      }, t.unmnemonicLabel = function(e) {
        return e.replace(/&/g, "&&")
      }
    }), define(e[37], t([1, 0, 13, 8]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.basenameOrAuthority = function(e) {
        return n.basename(e.fsPath) || e.authority
      }, t.isEqualOrParent = function(e, t, r) {
        return e.scheme === t.scheme && e.authority === t.authority && n.isEqualOrParent(e.fsPath, t.fsPath, r)
      }, t.isEqual = function(e, t, n) {
        return !(e !== t) || !(!e || !t) && (n ? r.equalsIgnoreCase(e.toString(), t.toString()) : e.toString() === t.toString())
      }, t.dirname = function(e) {
        return e.with({
          path: n.dirname(e.path)
        })
      }
    }), define(e[60], t([1, 0]), function(e, t) {
      "use strict";

      function r() {
        return new s
      }

      function i(e) {
        return a.test(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function() {
          function e(e) {
            this._value = e
          }
          return e.prototype.asHex = function() {
            return this._value
          }, e
        }(),
        s = function(e) {
          function t() {
            return e.call(this, [t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), "-", t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), "-", "4", t._randomHex(), t._randomHex(), t._randomHex(), "-", t._oneOf(t._timeHighBits), t._randomHex(), t._randomHex(), t._randomHex(), "-", t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex()].join("")) || this
          }
          return n(t, e), t._oneOf = function(e) {
            return e[Math.floor(e.length * Math.random())]
          }, t._randomHex = function() {
            return t._oneOf(t._chars)
          }, t._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], t._timeHighBits = ["8", "9", "a", "b"], t
        }(o);
      t.v4 = r;
      var a = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      t.isUUID = i, t.parse = function(e) {
        if (!i(e)) throw new Error("invalid uuid");
        return new o(e)
      }, t.generateUuid = function() {
        return r().asHex()
      }
    }),
    function() {
      var e = {};
      e["WinJS/Core/_WinJS"] = {};
      var t = function(t, n, r) {
        var i = {},
          o = !1,
          s = n.map(function(t) {
            return "exports" === t ? (o = !0, i) : e[t]
          }),
          a = r.apply({}, s);
        e[t] = o ? i : a
      };
      t("WinJS/Core/_Global", [], function() {
          "use strict";
          return "undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {}
        }), t("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function(e) {
          "use strict";
          return {
            hasWinRT: !!e.Windows,
            markSupportedForProcessing: function(e) {
              return e.supportedForProcessing = !0, e
            },
            _setImmediate: e.setImmediate ? e.setImmediate.bind(e) : function(t) {
              e.setTimeout(t, 0)
            }
          }
        }), t("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function(e) {
          "use strict";
          return e.msWriteProfilerMark || function() {}
        }),
        t("WinJS/Core/_Base", ["WinJS/Core/_WinJS", "WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_WriteProfilerMark"], function(e, t, n, r) {
          "use strict";

          function i(e, t, n) {
            var r, i, o, s = Object.keys(t),
              a = Array.isArray(e);
            for (i = 0, o = s.length; i < o; i++) {
              var u = s[i],
                c = 95 !== u.charCodeAt(0),
                l = t[u];
              !l || "object" != typeof l || void 0 === l.value && "function" != typeof l.get && "function" != typeof l.set ? c ? a ? e.forEach(function(e) {
                e[u] = l
              }) : e[u] = l : (r = r || {})[u] = {
                value: l,
                enumerable: c,
                configurable: !0,
                writable: !0
              } : (void 0 === l.enumerable && (l.enumerable = c), n && l.setName && "function" == typeof l.setName && l.setName(n + "." + u), (r = r || {})[u] = l)
            }
            r && (a ? e.forEach(function(e) {
              Object.defineProperties(e, r)
            }) : Object.defineProperties(e, r))
          }
          return function() {
              function n(n, r) {
                var i = n || {};
                if (r) {
                  var o = r.split(".");
                  i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));
                  for (var s = 0, a = o.length; s < a; s++) {
                    var u = o[s];
                    i[u] || Object.defineProperty(i, u, {
                      value: {},
                      writable: !1,
                      enumerable: !0,
                      configurable: !0
                    }), i = i[u]
                  }
                }
                return i
              }

              function o(e, t, r) {
                var o = n(e, t);
                return r && i(o, r, t || "<ANONYMOUS>"), o
              }
              var s = e;
              s.Namespace || (s.Namespace = Object.create(Object.prototype));
              var a = {
                uninitialized: 1,
                working: 2,
                initialized: 3
              };
              Object.defineProperties(s.Namespace, {
                defineWithParent: {
                  value: o,
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                },
                define: {
                  value: function(e, n) {
                    return o(t, e, n)
                  },
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                },
                _lazy: {
                  value: function(e) {
                    var t, n, i = a.uninitialized;
                    return {
                      setName: function(e) {
                        t = e
                      },
                      get: function() {
                        switch (i) {
                          case a.initialized:
                            return n;
                          case a.uninitialized:
                            i = a.working;
                            try {
                              r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e()
                            } finally {
                              r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = a.uninitialized
                            }
                            return e = null, i = a.initialized, n;
                          case a.working:
                            throw "Illegal: reentrancy on initialization";
                          default:
                            throw "Illegal"
                        }
                      },
                      set: function(e) {
                        switch (i) {
                          case a.working:
                            throw "Illegal: reentrancy on initialization";
                          default:
                            i = a.initialized, n = e
                        }
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  },
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                },
                _moduleDefine: {
                  value: function(e, r, o) {
                    var s = [e],
                      a = null;
                    return r && (a = n(t, r), s.push(a)), i(s, o, r || "<ANONYMOUS>"), a
                  },
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                }
              })
            }(),
            function() {
              function t(e, t, r) {
                return e = e || function() {}, n.markSupportedForProcessing(e), t && i(e.prototype, t), r && i(e, r), e
              }
              e.Namespace.define("WinJS.Class", {
                define: t,
                derive: function(e, r, o, s) {
                  if (e) {
                    r = r || function() {};
                    var a = e.prototype;
                    return r.prototype = Object.create(a), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", {
                      value: r,
                      writable: !0,
                      configurable: !0,
                      enumerable: !0
                    }), o && i(r.prototype, o), s && i(r, s), r
                  }
                  return t(r, o, s)
                },
                mix: function(e) {
                  e = e || function() {};
                  var t, n;
                  for (t = 1, n = arguments.length; t < n; t++) i(e.prototype, arguments[t]);
                  return e
                }
              })
            }(), {
              Namespace: e.Namespace,
              Class: e.Class
            }
        }), t("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function(e) {
          "use strict";
          var t = e.Class.derive(Error, function(e, t) {
            this.name = e, this.message = t || e
          }, {}, {
            supportedForProcessing: !1
          });
          return e.Namespace.define("WinJS", {
            ErrorFromName: t
          }), t
        }), t("WinJS/Core/_Events", ["exports", "WinJS/Core/_Base"], function(e, t) {
          "use strict";

          function n(e) {
            var t = "_on" + e + "state";
            return {
              get: function() {
                var e = this[t];
                return e && e.userHandler
              },
              set: function(n) {
                var r = this[t];
                n ? (r || (r = {
                  wrapper: function(e) {
                    return r.userHandler(e)
                  },
                  userHandler: n
                }, Object.defineProperty(this, t, {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }), this.addEventListener(e, r.wrapper, !1)), r.userHandler = n) : r && (this.removeEventListener(e, r.wrapper, !1), this[t] = null)
              },
              enumerable: !0
            }
          }
          var r = t.Class.define(function(e, t, n) {
              this.detail = t, this.target = n, this.timeStamp = Date.now(), this.type = e
            }, {
              bubbles: {
                value: !1,
                writable: !1
              },
              cancelable: {
                value: !1,
                writable: !1
              },
              currentTarget: {
                get: function() {
                  return this.target
                }
              },
              defaultPrevented: {
                get: function() {
                  return this._preventDefaultCalled
                }
              },
              trusted: {
                value: !1,
                writable: !1
              },
              eventPhase: {
                value: 0,
                writable: !1
              },
              target: null,
              timeStamp: null,
              type: null,
              preventDefault: function() {
                this._preventDefaultCalled = !0
              },
              stopImmediatePropagation: function() {
                this._stopImmediatePropagationCalled = !0
              },
              stopPropagation: function() {}
            }, {
              supportedForProcessing: !1
            }),
            i = {
              _listeners: null,
              addEventListener: function(e, t, n) {
                n = n || !1,
                  this._listeners = this._listeners || {};
                for (var r = this._listeners[e] = this._listeners[e] || [], i = 0, o = r.length; i < o; i++) {
                  var s = r[i];
                  if (s.useCapture === n && s.listener === t) return
                }
                r.push({
                  listener: t,
                  useCapture: n
                })
              },
              dispatchEvent: function(e, t) {
                var n = this._listeners && this._listeners[e];
                if (n) {
                  for (var i = new r(e, t, this), o = 0, s = (n = n.slice(0, n.length)).length; o < s && !i._stopImmediatePropagationCalled; o++) n[o].listener(i);
                  return i.defaultPrevented || !1
                }
                return !1
              },
              removeEventListener: function(e, t, n) {
                n = n || !1;
                var r = this._listeners && this._listeners[e];
                if (r)
                  for (var i = 0, o = r.length; i < o; i++) {
                    var s = r[i];
                    if (s.listener === t && s.useCapture === n) {
                      r.splice(i, 1), 0 === r.length && delete this._listeners[e];
                      break
                    }
                  }
              }
            };
          t.Namespace._moduleDefine(e, "WinJS.Utilities", {
            _createEventProperty: n,
            createEventProperties: function() {
              for (var e = {}, t = 0, r = arguments.length; t < r; t++) {
                var i = arguments[t];
                e["on" + i] = n(i)
              }
              return e
            },
            eventMixin: i
          })
        }), t("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function(e) {
          "use strict";

          function t(e) {
            return e
          }
          return {
            _traceAsyncOperationStarting: e.Debug && e.Debug.msTraceAsyncOperationStarting && e.Debug.msTraceAsyncOperationStarting.bind(e.Debug) || t,
            _traceAsyncOperationCompleted: e.Debug && e.Debug.msTraceAsyncOperationCompleted && e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug) || t,
            _traceAsyncCallbackStarting: e.Debug && e.Debug.msTraceAsyncCallbackStarting && e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug) || t,
            _traceAsyncCallbackCompleted: e.Debug && e.Debug.msTraceAsyncCallbackCompleted && e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug) || t
          }
        }), t("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_Base", "WinJS/Core/_ErrorFromName", "WinJS/Core/_Events", "WinJS/Core/_Trace"], function(e, t, n, r, i, o) {
          "use strict";

          function s() {}

          function a(e, t) {
            var n;
            n = t && "object" == typeof t && "function" == typeof t.then ? I : M, e._value = t, e._setState(n)
          }

          function u(e, t, n, r, i, o) {
            return {
              exception: e,
              error: t,
              promise: n,
              handler: o,
              id: r,
              parent: i
            }
          }

          function c(e, t, n, r) {
            var i = n._isException,
              o = n._errorId;
            return u(i ? t : null, i ? null : t, e, o, n, r)
          }

          function l(e, t, n) {
            var r = n._isException,
              i = n._errorId;
            return b(e, i, r), u(r ? t : null, r ? null : t, e, i, n)
          }

          function d(e, t) {
            var n = ++H;
            return b(e, n), u(null, t, e, n)
          }

          function f(e, t) {
            var n = ++H;
            return b(e, n, !0), u(t, null, e, n)
          }

          function p(e, t, n, r) {
            _(e, {
              c: t,
              e: n,
              p: r,
              asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done")
            })
          }

          function h(e, t, n, r) {
            e._value = t, v(e, t, n, r), e._setState(F)
          }

          function g(t, n) {
            var r = t._value,
              i = t._listeners;
            if (i) {
              t._listeners = null;
              var s, a;
              for (s = 0, a = Array.isArray(i) ? i.length : 1; s < a; s++) {
                var u = 1 === a ? i : i[s],
                  c = u.c,
                  l = u.promise;
                if (o._traceAsyncOperationCompleted(u.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), l) {
                  o._traceAsyncCallbackStarting(u.asyncOpID);
                  try {
                    l._setCompleteValue(c ? c(r) : r)
                  } catch (e) {
                    l._setExceptionValue(e)
                  } finally {
                    o._traceAsyncCallbackCompleted()
                  }
                  l._state !== I && l._listeners && n.push(l)
                } else K.prototype.done.call(t, c)
              }
            }
          }

          function m(t, n) {
            var r = t._value,
              i = t._listeners;
            if (i) {
              t._listeners = null;
              var s, a;
              for (s = 0, a = Array.isArray(i) ? i.length : 1; s < a; s++) {
                var u = 1 === a ? i : i[s],
                  l = u.e,
                  d = u.promise,
                  f = e.Debug && (r && r.name === P ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
                if (o._traceAsyncOperationCompleted(u.asyncOpID, f), d) {
                  var p = !1;
                  try {
                    l ? (o._traceAsyncCallbackStarting(u.asyncOpID), p = !0, l.handlesOnError || v(d, r, c, t, l), d._setCompleteValue(l(r))) : d._setChainedErrorValue(r, t)
                  } catch (e) {
                    d._setExceptionValue(e)
                  } finally {
                    p && o._traceAsyncCallbackCompleted()
                  }
                  d._state !== I && d._listeners && n.push(d)
                } else U.prototype.done.call(t, null, l)
              }
            }
          }

          function v(e, t, n, r, i) {
            if (x._listeners[w]) {
              if (t instanceof Error && t.message === P) return;
              x.dispatchEvent(w, n(e, t, r, i))
            }
          }

          function y(e, t) {
            var n = e._listeners;
            if (n) {
              var r, i;
              for (r = 0, i = Array.isArray(n) ? n.length : 1; r < i; r++) {
                var o = 1 === i ? n : n[r],
                  s = o.p;
                if (s) try {
                  s(t)
                } catch (e) {}
                o.c || o.e || !o.promise || o.promise._progress(t)
              }
            }
          }

          function _(e, t) {
            var n = e._listeners;
            n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n
          }

          function b(e, t, n) {
            e._isException = n || !1, e._errorId = t
          }

          function C(e, t, n, r) {
            e._value = t, v(e, t, n, r), e._setState(j)
          }

          function S(e, t) {
            var n;
            n = t && "object" == typeof t && "function" == typeof t.then ? I : N, e._value = t, e._setState(n)
          }

          function E(e, t, n, r) {
            var i = new V(e);
            return _(e, {
              promise: i,
              c: t,
              e: n,
              p: r,
              asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then")
            }), i
          }
          e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
          var x = new(n.Class.mix(n.Class.define(null, {}, {
            supportedForProcessing: !1
          }), i.eventMixin));
          x._listeners = {};
          var w = "error",
            P = "Canceled",
            D = !1,
            T = {
              promise: 1,
              thenPromise: 2,
              errorPromise: 4,
              exceptionPromise: 8,
              completePromise: 16
            };
          T.all = T.promise | T.thenPromise | T.errorPromise | T.exceptionPromise | T.completePromise;
          var O, k, I, L, A, R, M, N, F, j, H = 1;
          O = {
            name: "created",
            enter: function(e) {
              e._setState(k)
            },
            cancel: s,
            done: s,
            then: s,
            _completed: s,
            _error: s,
            _notify: s,
            _progress: s,
            _setCompleteValue: s,
            _setErrorValue: s
          }, k = {
            name: "working",
            enter: s,
            cancel: function(e) {
              e._setState(A)
            },
            done: p,
            then: E,
            _completed: a,
            _error: h,
            _notify: s,
            _progress: y,
            _setCompleteValue: S,
            _setErrorValue: C
          }, I = {
            name: "waiting",
            enter: function(e) {
              var t = e._value;
              if (t instanceof V && t._state !== j && t._state !== N) _(t, {
                promise: e
              });
              else {
                var n = function(r) {
                  t._errorId ? e._chainedError(r, t) : (v(e, r, c, t, n), e._error(r))
                };
                n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e))
              }
            },
            cancel: function(e) {
              e._setState(L)
            },
            done: p,
            then: E,
            _completed: a,
            _error: h,
            _notify: s,
            _progress: y,
            _setCompleteValue: S,
            _setErrorValue: C
          }, L = {
            name: "waiting_canceled",
            enter: function(e) {
              e._setState(R);
              var t = e._value;
              t.cancel && t.cancel()
            },
            cancel: s,
            done: p,
            then: E,
            _completed: a,
            _error: h,
            _notify: s,
            _progress: y,
            _setCompleteValue: S,
            _setErrorValue: C
          }, A = {
            name: "canceled",
            enter: function(e) {
              e._setState(R), e._cancelAction()
            },
            cancel: s,
            done: p,
            then: E,
            _completed: a,
            _error: h,
            _notify: s,
            _progress: y,
            _setCompleteValue: S,
            _setErrorValue: C
          }, R = {
            name: "canceling",
            enter: function(e) {
              var t = new Error(P);
              t.name = t.message, e._value = t, e._setState(F)
            },
            cancel: s,
            done: s,
            then: s,
            _completed: s,
            _error: s,
            _notify: s,
            _progress: s,
            _setCompleteValue: s,
            _setErrorValue: s
          }, M = {
            name: "complete_notify",
            enter: function(e) {
              if (e.done = K.prototype.done, e.then = K.prototype.then,
                e._listeners)
                for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
              e._setState(N)
            },
            cancel: s,
            done: null,
            then: null,
            _completed: s,
            _error: s,
            _notify: g,
            _progress: s,
            _setCompleteValue: s,
            _setErrorValue: s
          }, N = {
            name: "success",
            enter: function(e) {
              e.done = K.prototype.done, e.then = K.prototype.then, e._cleanupAction()
            },
            cancel: s,
            done: null,
            then: null,
            _completed: s,
            _error: s,
            _notify: g,
            _progress: s,
            _setCompleteValue: s,
            _setErrorValue: s
          }, F = {
            name: "error_notify",
            enter: function(e) {
              if (e.done = U.prototype.done, e.then = U.prototype.then, e._listeners)
                for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
              e._setState(j)
            },
            cancel: s,
            done: null,
            then: null,
            _completed: s,
            _error: s,
            _notify: m,
            _progress: s,
            _setCompleteValue: s,
            _setErrorValue: s
          }, j = {
            name: "error",
            enter: function(e) {
              e.done = U.prototype.done, e.then = U.prototype.then, e._cleanupAction()
            },
            cancel: s,
            done: null,
            then: null,
            _completed: s,
            _error: s,
            _notify: m,
            _progress: s,
            _setCompleteValue: s,
            _setErrorValue: s
          };
          var W, B = n.Class.define(null, {
              _listeners: null,
              _nextState: null,
              _state: null,
              _value: null,
              cancel: function() {
                this._state.cancel(this), this._run()
              },
              done: function(e, t, n) {
                this._state.done(this, e, t, n)
              },
              then: function(e, t, n) {
                return this._state.then(this, e, t, n)
              },
              _chainedError: function(e, t) {
                var n = this._state._error(this, e, l, t);
                return this._run(), n
              },
              _completed: function(e) {
                var t = this._state._completed(this, e);
                return this._run(), t
              },
              _error: function(e) {
                var t = this._state._error(this, e, d);
                return this._run(), t
              },
              _progress: function(e) {
                this._state._progress(this, e)
              },
              _setState: function(e) {
                this._nextState = e
              },
              _setCompleteValue: function(e) {
                this._state._setCompleteValue(this, e), this._run()
              },
              _setChainedErrorValue: function(e, t) {
                var n = this._state._setErrorValue(this, e, l, t);
                return this._run(), n
              },
              _setExceptionValue: function(e) {
                var t = this._state._setErrorValue(this, e, f);
                return this._run(), t
              },
              _run: function() {
                for (; this._nextState;) this._state = this._nextState, this._nextState = null, this._state.enter(this)
              }
            }, {
              supportedForProcessing: !1
            }),
            V = n.Class.derive(B, function(e) {
              D && (!0 === D || D & T.thenPromise) && (this._stack = q._getStack()), this._creator = e,
                this._setState(O), this._run()
            }, {
              _creator: null,
              _cancelAction: function() {
                this._creator && this._creator.cancel()
              },
              _cleanupAction: function() {
                this._creator = null
              }
            }, {
              supportedForProcessing: !1
            }),
            U = n.Class.define(function(e) {
              D && (!0 === D || D & T.errorPromise) && (this._stack = q._getStack()), this._value = e, v(this, e, d)
            }, {
              cancel: function() {},
              done: function(e, t) {
                var n = this._value;
                if (t) try {
                  t.handlesOnError || v(null, n, c, this, t);
                  var r = t(n);
                  return void(r && "object" == typeof r && "function" == typeof r.done && r.done())
                } catch (e) {
                  n = e
                }
                n instanceof Error && n.message === P || q._doneHandler(n)
              },
              then: function(e, t) {
                if (!t) return this;
                var n, r = this._value;
                try {
                  t.handlesOnError || v(null, r, c, this, t), n = new K(t(r))
                } catch (e) {
                  n = e === r ? this : new z(e)
                }
                return n
              }
            }, {
              supportedForProcessing: !1
            }),
            z = n.Class.derive(U, function(e) {
              D && (!0 === D || D & T.exceptionPromise) && (this._stack = q._getStack()), this._value = e, v(this, e, f)
            }, {}, {
              supportedForProcessing: !1
            }),
            K = n.Class.define(function(e) {
              if (D && (!0 === D || D & T.completePromise) && (this._stack = q._getStack()),
                e && "object" == typeof e && "function" == typeof e.then) {
                var t = new V(null);
                return t._setCompleteValue(e), t
              }
              this._value = e
            }, {
              cancel: function() {},
              done: function(e) {
                if (e) try {
                  var t = e(this._value);
                  t && "object" == typeof t && "function" == typeof t.done && t.done()
                } catch (e) {
                  q._doneHandler(e)
                }
              },
              then: function(e) {
                try {
                  var t = e ? e(this._value) : this._value;
                  return t === this._value ? this : new K(t)
                } catch (e) {
                  return new z(e)
                }
              }
            }, {
              supportedForProcessing: !1
            }),
            q = n.Class.derive(B, function(e, t) {
              D && (!0 === D || D & T.promise) && (this._stack = q._getStack()), this._oncancel = t, this._setState(O), this._run();
              try {
                e(this._completed.bind(this), this._error.bind(this), this._progress.bind(this))
              } catch (e) {
                this._setExceptionValue(e)
              }
            }, {
              _oncancel: null,
              _cancelAction: function() {
                try {
                  if (!this._oncancel) throw new Error("Promise did not implement oncancel");
                  this._oncancel()
                } catch (e) {
                  e.message, e.stack;
                  x.dispatchEvent("error", e)
                }
              },
              _cleanupAction: function() {
                this._oncancel = null
              }
            }, {
              addEventListener: function(e, t, n) {
                x.addEventListener(e, t, n)
              },
              any: function(e) {
                return new q(function(t, n) {
                  var r = Object.keys(e);
                  0 === r.length && t();
                  var i = 0;
                  r.forEach(function(o) {
                    q.as(e[o]).then(function() {
                      t({
                        key: o,
                        value: e[o]
                      })
                    }, function(s) {
                      s instanceof Error && s.name === P ? ++i === r.length && t(q.cancel) : n({
                        key: o,
                        value: e[o]
                      })
                    })
                  })
                }, function() {
                  Object.keys(e).forEach(function(t) {
                    var n = q.as(e[t]);
                    "function" == typeof n.cancel && n.cancel()
                  })
                })
              },
              as: function(e) {
                return e && "object" == typeof e && "function" == typeof e.then ? e : new K(e)
              },
              cancel: {
                get: function() {
                  return W = W || new U(new r(P))
                }
              },
              dispatchEvent: function(e, t) {
                return x.dispatchEvent(e, t)
              },
              is: function(e) {
                return e && "object" == typeof e && "function" == typeof e.then
              },
              join: function(e) {
                return new q(function(t, n, r) {
                  var i = Object.keys(e),
                    o = Array.isArray(e) ? [] : {},
                    s = Array.isArray(e) ? [] : {},
                    a = 0,
                    u = i.length,
                    c = function(e) {
                      if (0 == --u) {
                        var a = Object.keys(o).length;
                        if (0 === a) t(s);
                        else {
                          var c = 0;
                          i.forEach(function(e) {
                            var t = o[e];
                            t instanceof Error && t.name === P && c++
                          }), c === a ? t(q.cancel) : n(o)
                        }
                      } else r({
                        Key: e,
                        Done: !0
                      })
                    };
                  i.forEach(function(t) {
                    var n = e[t];
                    void 0 === n ? a++ : q.then(n, function(e) {
                      s[t] = e, c(t)
                    }, function(e) {
                      o[t] = e,
                        c(t)
                    })
                  }), 0 !== (u -= a) || t(s)
                }, function() {
                  Object.keys(e).forEach(function(t) {
                    var n = q.as(e[t]);
                    "function" == typeof n.cancel && n.cancel()
                  })
                })
              },
              removeEventListener: function(e, t, n) {
                x.removeEventListener(e, t, n)
              },
              supportedForProcessing: !1,
              then: function(e, t, n, r) {
                return q.as(e).then(t, n, r)
              },
              thenEach: function(e, t, n, r) {
                var i = Array.isArray(e) ? [] : {};
                return Object.keys(e).forEach(function(o) {
                  i[o] = q.as(e[o]).then(t, n, r)
                }), q.join(i)
              },
              timeout: function(n, r) {
                var i = function(n) {
                  var r;
                  return new q(function(i) {
                    n ? r = e.setTimeout(i, n) : t._setImmediate(i)
                  }, function() {
                    r && e.clearTimeout(r)
                  })
                }(n);
                return r ? function(e, t) {
                  var n = function() {
                    e.cancel()
                  };
                  return e.then(function() {
                    t.cancel()
                  }), t.then(n, n), t
                }(i, r) : i
              },
              wrap: function(e) {
                return new K(e)
              },
              wrapError: function(e) {
                return new U(e)
              },
              _veryExpensiveTagWithStack: {
                get: function() {
                  return D
                },
                set: function(e) {
                  D = e
                }
              },
              _veryExpensiveTagWithStack_tag: T,
              _getStack: function() {
                if (e.Debug && e.Debug.debuggerEnabled) try {
                  throw new Error
                } catch (e) {
                  return e.stack
                }
              },
              _cancelBlocker: function(e, t) {
                if (!q.is(e)) return q.wrap(e);
                var n, r, i = new q(function(e, t) {
                  n = e, r = t
                }, function() {
                  n = null, r = null, t && t()
                });
                return e.then(function(e) {
                  n && n(e)
                }, function(e) {
                  r && r(e)
                }), i
              }
            });
          return Object.defineProperties(q, i.createEventProperties(w)), q._doneHandler = function(e) {
            t._setImmediate(function() {
              throw e
            })
          }, {
            PromiseStateMachine: B,
            Promise: q,
            state_created: O
          }
        }), t("WinJS/Promise", ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"], function(e, t) {
          "use strict";
          return e.Namespace.define("WinJS", {
            Promise: t.Promise
          }), t.Promise
        });
      var n = e["WinJS/Core/_WinJS"];
      "undefined" == typeof exports && "function" == typeof define && define.amd ? define("vs/base/common/winjs.base.raw", n) : module.exports = n, "undefined" != typeof process && "function" == typeof process.nextTick && (e["WinJS/Core/_BaseCoreUtils"]._setImmediate = function(e) {
        return process.nextTick(e)
      })
    }(), define(e[2], t([170]), function(e) {
      "use strict";
      return {
        Promise: e.Promise,
        TPromise: e.Promise,
        PPromise: e.Promise
      }
    });
  var r = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
        function s(e) {
          try {
            u(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function a(e) {
          try {
            u(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function u(e) {
          e.done ? i(e.value) : new n(function(t) {
            t(e.value)
          }).then(s, a)
        }
        u((r = r.apply(e, t || [])).next())
      })
    },
    i = this && this.__generator || function(e, t) {
      function n(n) {
        return function(s) {
          return function(n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
              switch (i = 0, o && (n = [0, o.value]), n[0]) {
                case 0:
                case 1:
                  o = n;
                  break;
                case 4:
                  return a.label++, {
                    value: n[1],
                    done: !1
                  };
                case 5:
                  a.label++, i = n[1], n = [0];
                  continue;
                case 7:
                  n = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    a.label = n[1];
                    break
                  }
                  if (6 === n[0] && a.label < o[1]) {
                    a.label = o[1], o = n;
                    break
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(n);
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              n = t.call(e, a)
            } catch (e) {
              n = [6, e], i = 0
            } finally {
              r = o = 0
            }
            if (5 & n[0]) throw n[1];
            return {
              value: n[0] ? n[1] : void 0,
              done: !0
            }
          }([n, s])
        }
      }
      var r, i, o, s, a = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1]
        },
        trys: [],
        ops: []
      };
      return s = {
        next: n(0),
        throw: n(1),
        return: n(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
      }), s
    };
  define(e[16], t([1, 0, 2]), function(e, t, n) {
      "use strict";

      function o(e, t) {
        var n = 0,
          r = e.length;
        if (0 === r) return 0;
        for (; n < r;) {
          var i = Math.floor((n + r) / 2);
          t(e[i]) ? r = i : n = i + 1
        }
        return n
      }

      function s(e, t) {
        return a(e, t), e
      }

      function a(e, t) {
        if (!(e.length <= 1)) {
          var n = e.length / 2 | 0,
            r = e.slice(0, n),
            i = e.slice(n);
          a(r, t), a(i, t);
          for (var o = 0, s = 0, u = 0; o < r.length && s < i.length;) {
            var c = t(r[o], i[s]);
            e[u++] = c <= 0 ? r[o++] : i[s++]
          }
          for (; o < r.length;) e[u++] = r[o++];
          for (; s < i.length;) e[u++] = i[s++]
        }
      }

      function u(e, t, n) {
        function r(e, t, n) {
          if (0 !== t || 0 !== n.length) {
            var r = i[i.length - 1];
            r && r.start + r.deleteCount === e ? (r.deleteCount += t, (o = r.toInsert).push.apply(o, n)) : i.push({
              start: e,
              deleteCount: t,
              toInsert: n
            });
            var o
          }
        }
        for (var i = [], o = 0, s = 0;;) {
          if (o === e.length) {
            r(o, 0, t.slice(s));
            break
          }
          if (s === t.length) {
            r(o, e.length - o, []);
            break
          }
          var a = e[o],
            u = t[s],
            c = n(a, u);
          0 === c ? (o += 1,
            s += 1) : c < 0 ? (r(o, 1, []), o += 1) : c > 0 && (r(o, 0, [u]), s += 1)
        }
        return i
      }

      function c(e, t, n, r, i) {
        for (var s = function(i) {
            var s = e[r];
            if (t(s, n[i - 1]) < 0) {
              n.pop();
              var a = o(n, function(e) {
                return t(s, e) < 0
              });
              n.splice(a, 0, s)
            }
          }, a = n.length; r < i; r++) s(a)
      }

      function l(e, t) {
        for (var n = 0; n < e.length; n++) {
          if (t(e[n])) return n
        }
        return -1
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.tail = function(e, t) {
        return void 0 === t && (t = 0), e[e.length - (1 + t)]
      }, t.equals = function(e, t, n) {
        if (void 0 === n && (n = function(e, t) {
            return e === t
          }), e.length !== t.length) return !1;
        for (var r = 0, i = e.length; r < i; r++)
          if (!n(e[r], t[r])) return !1;
        return !0
      }, t.binarySearch = function(e, t, n) {
        for (var r = 0, i = e.length - 1; r <= i;) {
          var o = (r + i) / 2 | 0,
            s = n(e[o], t);
          if (s < 0) r = o + 1;
          else {
            if (!(s > 0)) return o;
            i = o - 1
          }
        }
        return -(r + 1)
      }, t.findFirst = o, t.mergeSort = s, t.groupBy = function(e, t) {
        for (var n, r = [], i = 0, o = s(e.slice(0), t); i < o.length; i++) {
          var a = o[i];
          n && 0 === t(n[0], a) ? n.push(a) : (n = [a], r.push(n))
        }
        return r
      }, t.sortedDiff = u, t.delta = function(e, t, n) {
        for (var r = [], i = [], o = 0, s = u(e, t, n); o < s.length; o++) {
          var a = s[o];
          r.push.apply(r, e.slice(a.start, a.start + a.deleteCount)), i.push.apply(i, a.toInsert)
        }
        return {
          removed: r,
          added: i
        }
      }, t.top = function(e, t, n) {
        if (0 === n) return [];
        var r = e.slice(0, n).sort(t);
        return c(e, t, r, n, e.length), r
      }, t.topAsync = function(e, t, o, s) {
        var a = this;
        if (0 === o) return n.TPromise.as([]);
        var u = !1;
        return new n.TPromise(function(n, l) {
          r(a, void 0, void 0, function() {
            var n, r, a, l;
            return i(this, function(i) {
              switch (i.label) {
                case 0:
                  n = e.length, r = e.slice(0, o).sort(t), a = o, l = Math.min(o + s, n), i.label = 1;
                case 1:
                  return a < n ? a > o ? [4, new Promise(function(e) {
                    return setTimeout(e)
                  })] : [3, 3] : [3, 5];
                case 2:
                  i.sent(), i.label = 3;
                case 3:
                  if (u) throw new Error("canceled");
                  c(e, t, r, a, l), i.label = 4;
                case 4:
                  return a = l, l = Math.min(l + s, n), [3, 1];
                case 5:
                  return [2, r]
              }
            })
          }).then(n, l)
        }, function() {
          u = !0
        })
      }, t.coalesce = function(e) {
        return e ? e.filter(function(e) {
          return !!e
        }) : e
      }, t.move = function(e, t, n) {
        e.splice(n, 0, e.splice(t, 1)[0])
      }, t.isFalsyOrEmpty = function(e) {
        return !Array.isArray(e) || 0 === e.length
      }, t.distinct = function(e, t) {
        if (!t) return e.filter(function(t, n) {
          return e.indexOf(t) === n
        });
        var n = Object.create(null);
        return e.filter(function(e) {
          var r = t(e);
          return !n[r] && (n[r] = !0, !0)
        })
      }, t.uniqueFilter = function(e) {
        var t = Object.create(null);
        return function(n) {
          var r = e(n);
          return !t[r] && (t[r] = !0, !0)
        }
      }, t.firstIndex = l, t.first = function(e, t, n) {
        void 0 === n && (n = null);
        var r = l(e, t);
        return r < 0 ? n : e[r]
      }, t.commonPrefixLength = function(e, t, n) {
        void 0 === n && (n = function(e, t) {
          return e === t
        });
        for (var r = 0, i = 0, o = Math.min(e.length, t.length); i < o && n(e[i], t[i]); i++) r++;
        return r
      }, t.flatten = function(e) {
        return [].concat.apply([], e)
      }, t.range = function(e, t) {
        var n = "number" == typeof t ? e : 0;
        "number" == typeof t ? n = e : (n = 0, t = e);
        var r = [];
        if (n <= t)
          for (i = n; i < t; i++) r.push(i);
        else
          for (var i = n; i > t; i--) r.push(i);
        return r
      }, t.fill = function(e, t, n) {
        void 0 === n && (n = []);
        for (var r = 0; r < e; r++) n[r] = t();
        return n
      }, t.index = function(e, t, n) {
        return void 0 === n && (n = function(e) {
          return e
        }), e.reduce(function(e, r) {
          var i = t(r);
          return e[i] = n(r, e[i]), e
        }, Object.create(null))
      }, t.insert = function(e, t) {
        return e.push(t),
          function() {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
          }
      }, t.arrayInsert = function(e, t, n) {
        var r = e.slice(0, t),
          i = e.slice(t);
        return r.concat(n, i)
      }
    }), define(e[11], t([1, 0, 10, 21, 2]), function(e, t, n, r, i) {
      "use strict";

      function o(e) {
        s(e) || t.errorHandler.onUnexpectedError(e)
      }

      function s(e) {
        return e instanceof Error && e.name === c && e.message === c
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {};
      i.TPromise.addEventListener("error", function(e) {
        var t = e.detail,
          n = t.id;
        t.parent ? t.handler && a && delete a[n] : (a[n] = t, 1 === Object.keys(a).length && setTimeout(function() {
          var e = a;
          a = {}, Object.keys(e).forEach(function(t) {
            var n = e[t];
            n.exception ? o(n.exception) : n.error && o(n.error), console.log("WARNING: Promise with no error callback:" + n.id), console.log(n), n.exception && console.log(n.exception.stack)
          })
        }, 0))
      });
      var u = function() {
        function e() {
          this.listeners = [], this.unexpectedErrorHandler = function(e) {
            n.setTimeout(function() {
              if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
              throw e
            }, 0)
          }
        }
        return e.prototype.addListener = function(e) {
          var t = this;
          return this.listeners.push(e),
            function() {
              t._removeListener(e)
            }
        }, e.prototype.emit = function(e) {
          this.listeners.forEach(function(t) {
            t(e)
          })
        }, e.prototype._removeListener = function(e) {
          this.listeners.splice(this.listeners.indexOf(e), 1)
        }, e.prototype.setUnexpectedErrorHandler = function(e) {
          this.unexpectedErrorHandler = e
        }, e.prototype.getUnexpectedErrorHandler = function() {
          return this.unexpectedErrorHandler
        }, e.prototype.onUnexpectedError = function(e) {
          this.unexpectedErrorHandler(e), this.emit(e)
        }, e.prototype.onUnexpectedExternalError = function(e) {
          this.unexpectedErrorHandler(e)
        }, e
      }();
      t.ErrorHandler = u, t.errorHandler = new u, t.setUnexpectedErrorHandler = function(e) {
        t.errorHandler.setUnexpectedErrorHandler(e)
      }, t.onUnexpectedError = o, t.onUnexpectedExternalError = function(e) {
        s(e) || t.errorHandler.onUnexpectedExternalError(e)
      }, t.transformErrorForSerialization = function(e) {
        if (e instanceof Error) return {
          $isError: !0,
          name: e.name,
          message: e.message,
          stack: e.stacktrace || e.stack
        };
        return e
      };
      var c = "Canceled";
      t.isPromiseCanceledError = s, t.canceled = function() {
        var e = new Error(c);
        return e.name = e.message, e
      }, t.illegalArgument = function(e) {
        return e ? new Error("Illegal argument: " + e) : new Error("Illegal argument")
      }, t.illegalState = function(e) {
        return e ? new Error("Illegal state: " + e) : new Error("Illegal state")
      }, t.readonly = function(e) {
        return e ? new Error("readonly property '" + e + " cannot be changed'") : new Error("readonly property cannot be changed")
      }, t.disposed = function(e) {
        var t = new Error(e + " has been disposed");
        return t.name = "DISPOSED", t
      }, t.create = function(e, t) {
        void 0 === t && (t = {});
        var n = new Error(e);
        return r.isNumber(t.severity) && (n.severity = t.severity), t.actions && (n.actions = t.actions), n
      }, t.getErrorMessage = function(e) {
        return e ? e.message ? e.message : e.stack ? e.stack.split("\n")[0] : String(e) : "Error"
      }
    }), define(e[4], t([1, 0, 14, 2, 71, 11, 70]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a(e) {
        return function(t, n, r) {
          void 0 === n && (n = null);
          var i = e(function(e) {
            return i.dispose(), t.call(n, e)
          }, null, r);
          return i
        }
      }

      function u(e, t) {
        return function(n, r, i) {
          return void 0 === r && (r = null), e(function(e) {
            return n.call(r, t(e))
          }, null, i)
        }
      }

      function c(e, t) {
        return function(n, r, i) {
          return void 0 === r && (r = null), e(function(e) {
            t(e), n.call(r, e)
          }, null, i)
        }
      }

      function l(e, t) {
        return function(n, r, i) {
          return void 0 === r && (r = null), e(function(e) {
            return t(e) && n.call(r, e)
          }, null, i)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var d;
      ! function(e) {
        var t = {
          dispose: function() {}
        };
        e.None = function() {
          return t
        }
      }(d || (d = {})), t.default = d;
      var f = function() {
        function e(e) {
          this._options = e
        }
        return Object.defineProperty(e.prototype, "event", {
          get: function() {
            var t = this;
            return this._event || (this._event = function(n, r, i) {
              t._listeners || (t._listeners = new s.LinkedList);
              var o = t._listeners.isEmpty();
              o && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t);
              var a = t._listeners.push(r ? [n, r] : n);
              o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r);
              var u;
              return u = {
                dispose: function() {
                  u.dispose = e._noop, t._disposed || (a(),
                    t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t))
                }
              }, Array.isArray(i) && i.push(u), u
            }), this._event
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.fire = function(e) {
          if (this._listeners) {
            this._deliveryQueue || (this._deliveryQueue = []);
            for (var t = this._listeners.iterator(), n = t.next(); !n.done; n = t.next()) this._deliveryQueue.push([n.value, e]);
            for (; this._deliveryQueue.length > 0;) {
              var r = this._deliveryQueue.shift(),
                i = r[0],
                s = r[1];
              try {
                "function" == typeof i ? i.call(void 0, s) : i[0].call(i[1], s)
              } catch (n) {
                o.onUnexpectedError(n)
              }
            }
          }
        }, e.prototype.dispose = function() {
          this._listeners && (this._listeners = void 0), this._deliveryQueue && (this._deliveryQueue.length = 0), this._disposed = !0
        }, e._noop = function() {}, e
      }();
      t.Emitter = f;
      var p = function() {
        function e() {
          var e = this;
          this.hasListeners = !1, this.events = [], this.emitter = new f({
            onFirstListenerAdd: function() {
              return e.onFirstListenerAdd()
            },
            onLastListenerRemove: function() {
              return e.onLastListenerRemove()
            }
          })
        }
        return Object.defineProperty(e.prototype, "event", {
          get: function() {
            return this.emitter.event
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.add = function(e) {
          var t = this,
            r = {
              event: e,
              listener: null
            };
          this.events.push(r), this.hasListeners && this.hook(r);
          return n.toDisposable(i.once(function() {
            t.hasListeners && t.unhook(r);
            var e = t.events.indexOf(r);
            t.events.splice(e, 1)
          }))
        }, e.prototype.onFirstListenerAdd = function() {
          var e = this;
          this.hasListeners = !0, this.events.forEach(function(t) {
            return e.hook(t)
          })
        }, e.prototype.onLastListenerRemove = function() {
          var e = this;
          this.hasListeners = !1, this.events.forEach(function(t) {
            return e.unhook(t)
          })
        }, e.prototype.hook = function(e) {
          var t = this;
          e.listener = e.event(function(e) {
            return t.emitter.fire(e)
          })
        }, e.prototype.unhook = function(e) {
          e.listener.dispose(), e.listener = null
        }, e.prototype.dispose = function() {
          this.emitter.dispose()
        }, e
      }();
      t.EventMultiplexer = p, t.fromCallback = function(e) {
          var t, n = new f({
            onFirstListenerAdd: function() {
              return t = e(function(e) {
                return n.fire(e)
              })
            },
            onLastListenerRemove: function() {
              return t.dispose()
            }
          });
          return n.event
        },
        t.fromPromise = function(e) {
          var t = new f,
            n = !1;
          return e.then(null, function() {
            return null
          }).then(function() {
            n ? t.fire() : setTimeout(function() {
              return t.fire()
            }, 0)
          }), n = !0, t.event
        }, t.toPromise = function(e) {
          return new r.TPromise(function(t) {
            var n = e(function(e) {
              n.dispose(), t(e)
            })
          })
        }, t.once = a, t.anyEvent = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return function(t, r, i) {
            return void 0 === r && (r = null), n.combinedDisposable(e.map(function(e) {
              return e(function(e) {
                return t.call(r, e)
              }, null, i)
            }))
          }
        }, t.debounceEvent = function(e, t, n, r) {
          void 0 === n && (n = 100), void 0 === r && (r = !1);
          var i, o = void 0,
            s = void 0,
            a = 0,
            u = new f({
              onFirstListenerAdd: function() {
                i = e(function(e) {
                  a++, o = t(o, e), r && !s && u.fire(o), clearTimeout(s), s = setTimeout(function() {
                    var e = o;
                    o = void 0, s = void 0, (!r || a > 1) && u.fire(e), a = 0
                  }, n)
                })
              },
              onLastListenerRemove: function() {
                i.dispose()
              }
            });
          return u.event
        };
      var h = function() {
        function e() {
          this.buffers = []
        }
        return e.prototype.wrapEvent = function(e) {
          var t = this;
          return function(n, r, i) {
            return e(function(e) {
              var i = t.buffers[t.buffers.length - 1];
              i ? i.push(function() {
                return n.call(r, e)
              }) : n.call(r, e)
            }, void 0, i)
          }
        }, e.prototype.bufferEvents = function(e) {
          var t = [];
          this.buffers.push(t), e(), this.buffers.pop(), t.forEach(function(e) {
            return e()
          })
        }, e
      }();
      t.EventBufferer = h, t.mapEvent = u, t.forEach = c, t.filterEvent = l;
      var g = function() {
        function e(e) {
          this._event = e
        }
        return Object.defineProperty(e.prototype, "event", {
          get: function() {
            return this._event
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.map = function(t) {
          return new e(u(this._event, t))
        }, e.prototype.forEach = function(t) {
          return new e(c(this._event, t))
        }, e.prototype.filter = function(t) {
          return new e(l(this._event, t))
        }, e.prototype.on = function(e, t, n) {
          return this._event(e, t, n)
        }, e
      }();
      t.chain = function(e) {
        return new g(e)
      }, t.stopwatch = function(e) {
        var t = (new Date).getTime();
        return u(a(e), function(e) {
          return (new Date).getTime() - t
        })
      }, t.buffer = function(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = []), n = n.slice();
        var r = e(function(e) {
            n ? n.push(e) : o.fire(e)
          }),
          i = function() {
            n.forEach(function(e) {
                return o.fire(e)
              }),
              n = null
          },
          o = new f({
            onFirstListenerAdd: function() {
              r || (r = e(function(e) {
                return o.fire(e)
              }))
            },
            onFirstListenerDidAdd: function() {
              n && (t ? setTimeout(i) : i())
            },
            onLastListenerRemove: function() {
              r.dispose(), r = null
            }
          });
        return o.event
      }, t.echo = function(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = []), n = n.slice(), e(function(e) {
          n.push(e), i.fire(e)
        });
        var r = function(e, t) {
            return n.forEach(function(n) {
              return e.call(t, n)
            })
          },
          i = new f({
            onListenerDidAdd: function(e, n, i) {
              t ? setTimeout(function() {
                return r(n, i)
              }) : r(n, i)
            }
          });
        return i.event
      };
      var m = function() {
        function e() {
          this.emitter = new f, this.event = this.emitter.event, this.disposable = n.empty
        }
        return Object.defineProperty(e.prototype, "input", {
          set: function(e) {
            this.disposable.dispose(), this.disposable = e(this.emitter.fire, this.emitter)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.dispose = function() {
          this.disposable.dispose(), this.emitter.dispose()
        }, e
      }();
      t.Relay = m, t.fromNodeEventEmitter = function(e, t, n) {
        void 0 === n && (n = function(e) {
          return e
        });
        var r = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return i.fire(n.apply(void 0, e))
          },
          i = new f({
            onFirstListenerAdd: function() {
              return e.on(t, r)
            },
            onLastListenerRemove: function() {
              return e.removeListener(t, r)
            }
          });
        return i.event
      }
    }), define(e[41], t([1, 0, 4]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r, i = Object.freeze(function(e, t) {
        var n = setTimeout(e.bind(t), 0);
        return {
          dispose: function() {
            clearTimeout(n)
          }
        }
      });
      ! function(e) {
        e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: n.default.None
        }), e.Cancelled = Object.freeze({
          isCancellationRequested: !0,
          onCancellationRequested: i
        })
      }(r = t.CancellationToken || (t.CancellationToken = {}));
      var o = function() {
          function e() {
            this._isCancelled = !1
          }
          return e.prototype.cancel = function() {
              this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this._emitter = void 0))
            }, Object.defineProperty(e.prototype, "isCancellationRequested", {
              get: function() {
                return this._isCancelled
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "onCancellationRequested", {
              get: function() {
                return this._isCancelled ? i : (this._emitter || (this._emitter = new n.Emitter), this._emitter.event)
              },
              enumerable: !0,
              configurable: !0
            }), e
        }(),
        s = function() {
          function e() {}
          return Object.defineProperty(e.prototype, "token", {
            get: function() {
              return this._token || (this._token = new o), this._token
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.cancel = function() {
            this._token ? this._token instanceof o && this._token.cancel() : this._token = r.Cancelled
          }, e.prototype.dispose = function() {
            this.cancel()
          }, e
        }();
      t.CancellationTokenSource = s
    }), define(e[9], t([1, 0, 11, 10, 2, 41, 14, 4]), function(e, t, r, i, o, s, a, u) {
      "use strict";

      function c(e) {
        return e && "function" == typeof e.then
      }

      function l(e, t) {
        return new o.TPromise(function(n, i, o) {
          e.done(function(e) {
            try {
              t(e)
            } catch (e) {
              r.onUnexpectedError(e)
            }
            n(e)
          }, function(e) {
            try {
              t(e)
            } catch (e) {
              r.onUnexpectedError(e)
            }
            i(e)
          }, function(e) {
            o(e)
          })
        }, function() {
          e.cancel()
        })
      }

      function d(e) {
        function t(r) {
          void 0 !== r && null !== r && n.push(r);
          var i = e.length ? e.pop()() : null;
          return i ? i.then(t) : o.TPromise.as(n)
        }
        var n = [];
        return e = e.reverse(), o.TPromise.as(null).then(t)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isThenable = c, t.toThenable = function(e) {
        return c(e) ? e : o.TPromise.as(e)
      }, t.asWinJsPromise = function(e) {
        var t = new s.CancellationTokenSource;
        return new o.TPromise(function(n, r, i) {
          var s = e(t.token);
          s instanceof o.TPromise ? s.then(n, r, i) : c(s) ? s.then(n, r) : n(s)
        }, function() {
          t.cancel()
        })
      }, t.wireCancellationToken = function(e, t, n) {
        var i = e.onCancellationRequested(function() {
          return t.cancel()
        });
        return n && (t = t.then(void 0, function(e) {
          if (!r.isPromiseCanceledError(e)) return o.TPromise.wrapError(e)
        })), l(t, function() {
          return i.dispose()
        })
      };
      var f = function() {
        function e() {
          this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null
        }
        return e.prototype.queue = function(e) {
          var t = this;
          if (this.activePromise) {
            if (this.queuedPromiseFactory = e, !this.queuedPromise) {
              var n = function() {
                t.queuedPromise = null;
                var e = t.queue(t.queuedPromiseFactory);
                return t.queuedPromiseFactory = null, e
              };
              this.queuedPromise = new o.TPromise(function(e, r, i) {
                t.activePromise.then(n, n, i).done(e)
              }, function() {
                t.activePromise.cancel()
              })
            }
            return new o.TPromise(function(e, n, r) {
              t.queuedPromise.then(e, n, r)
            }, function() {})
          }
          return this.activePromise = e(), new o.TPromise(function(e, n, r) {
            t.activePromise.done(function(n) {
              t.activePromise = null, e(n)
            }, function(e) {
              t.activePromise = null, n(e)
            }, r)
          }, function() {
            t.activePromise.cancel()
          })
        }, e
      }();
      t.Throttler = f;
      var p = function() {
        function e() {
          this.current = o.TPromise.wrap(null)
        }
        return e.prototype.queue = function(e) {
          return this.current = this.current.then(function() {
            return e()
          })
        }, e
      }();
      t.SimpleThrottler = p;
      var h = function() {
        function e(e) {
          this.defaultDelay = e, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null
        }
        return e.prototype.trigger = function(e, t) {
          var n = this;
          return void 0 === t && (t = this.defaultDelay), this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new o.TPromise(function(e) {
            n.onSuccess = e
          }, function() {}).then(function() {
            n.completionPromise = null,
              n.onSuccess = null;
            var e = n.task;
            return n.task = null, e()
          })), this.timeout = setTimeout(function() {
            n.timeout = null, n.onSuccess(null)
          }, t), this.completionPromise
        }, e.prototype.isTriggered = function() {
          return null !== this.timeout
        }, e.prototype.cancel = function() {
          this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(), this.completionPromise = null)
        }, e.prototype.cancelTimeout = function() {
          null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
        }, e
      }();
      t.Delayer = h;
      var g = function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return n.throttler = new f, n
        }
        return n(t, e), t.prototype.trigger = function(t, n) {
          var r = this;
          return e.prototype.trigger.call(this, function() {
            return r.throttler.queue(t)
          }, n)
        }, t
      }(h);
      t.ThrottledDelayer = g;
      var m = function() {
        function e() {
          var e = this;
          this._isOpen = !1, this._promise = new o.TPromise(function(t, n, r) {
            e._completePromise = t
          }, function() {
            console.warn("You should really not try to cancel this ready promise!")
          })
        }
        return e.prototype.isOpen = function() {
          return this._isOpen
        }, e.prototype.open = function() {
          this._isOpen = !0, this._completePromise(!0)
        }, e.prototype.wait = function() {
          return this._promise
        }, e
      }();
      t.Barrier = m;
      var v = function(e) {
        function t(t) {
          var n, i, o, s = this;
          return s = e.call(this, function(e, t, r) {
            n = e, i = t, o = r
          }, function() {
            i(r.canceled())
          }) || this, t.then(n, i, o), s
        }
        return n(t, e), t
      }(o.TPromise);
      t.ShallowCancelThenPromise = v, t.timeout = function(e) {
        return new o.Promise(function(t) {
          return setTimeout(t, e)
        })
      }, t.always = l, t.sequence = d, t.first = function(e, t) {
        void 0 === t && (t = function(e) {
          return !!e
        }), e = e.reverse().slice();
        var n = function() {
          return 0 === e.length ? o.TPromise.as(null) : e.pop()().then(function(e) {
            return t(e) ? o.TPromise.as(e) : n()
          })
        };
        return n()
      };
      var y = function() {
        function e(e) {
          this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onFinished = new u.Emitter
        }
        return Object.defineProperty(e.prototype, "onFinished", {
          get: function() {
            return this._onFinished.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "size", {
          get: function() {
            return this.runningPromises + this.outstandingPromises.length
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.queue = function(e) {
          var t = this;
          return new o.TPromise(function(n, r, i) {
            t.outstandingPromises.push({
              factory: e,
              c: n,
              e: r,
              p: i
            }), t.consume()
          })
        }, e.prototype.consume = function() {
          for (var e = this; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism;) {
            var t = this.outstandingPromises.shift();
            this.runningPromises++;
            var n = t.factory();
            n.done(t.c, t.e, t.p), n.done(function() {
              return e.consumed()
            }, function() {
              return e.consumed()
            })
          }
        }, e.prototype.consumed = function() {
          this.runningPromises--, this.outstandingPromises.length > 0 ? this.consume() : this._onFinished.fire()
        }, e.prototype.dispose = function() {
          this._onFinished.dispose()
        }, e
      }();
      t.Limiter = y;
      var _ = function(e) {
        function t() {
          return e.call(this, 1) || this
        }
        return n(t, e), t
      }(y);
      t.Queue = _;
      var b = function() {
        function e() {
          this.queues = Object.create(null)
        }
        return e.prototype.queueFor = function(e) {
          var t = this,
            n = e.toString();
          if (!this.queues[n]) {
            var r = new _;
            r.onFinished(function() {
              r.dispose(), delete t.queues[n]
            }), this.queues[n] = r
          }
          return this.queues[n]
        }, e
      }();
      t.ResourceQueue = b, t.setDisposableTimeout = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = setTimeout.apply(void 0, [e, t].concat(n));
        return {
          dispose: function() {
            clearTimeout(i)
          }
        }
      };
      var C = function(e) {
        function t() {
          var t = e.call(this) || this;
          return t._token = -1, t
        }
        return n(t, e), t.prototype.dispose = function() {
          this.cancel(), e.prototype.dispose.call(this)
        }, t.prototype.cancel = function() {
          -1 !== this._token && (i.clearTimeout(this._token), this._token = -1)
        }, t.prototype.cancelAndSet = function(e, t) {
          var n = this;
          this.cancel(), this._token = i.setTimeout(function() {
            n._token = -1, e()
          }, t)
        }, t.prototype.setIfNotSet = function(e, t) {
          var n = this; - 1 === this._token && (this._token = i.setTimeout(function() {
            n._token = -1, e()
          }, t))
        }, t
      }(a.Disposable);
      t.TimeoutTimer = C;
      var S = function(e) {
        function t() {
          var t = e.call(this) || this;
          return t._token = -1, t
        }
        return n(t, e), t.prototype.dispose = function() {
            this.cancel(), e.prototype.dispose.call(this)
          },
          t.prototype.cancel = function() {
            -1 !== this._token && (i.clearInterval(this._token), this._token = -1)
          }, t.prototype.cancelAndSet = function(e, t) {
            this.cancel(), this._token = i.setInterval(function() {
              e()
            }, t)
          }, t
      }(a.Disposable);
      t.IntervalTimer = S;
      var E = function() {
        function e(e, t) {
          this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this)
        }
        return e.prototype.dispose = function() {
          this.cancel(), this.runner = null
        }, e.prototype.cancel = function() {
          this.isScheduled() && (i.clearTimeout(this.timeoutToken), this.timeoutToken = -1)
        }, e.prototype.schedule = function(e) {
          void 0 === e && (e = this.timeout), this.cancel(), this.timeoutToken = i.setTimeout(this.timeoutHandler, e)
        }, e.prototype.isScheduled = function() {
          return -1 !== this.timeoutToken
        }, e.prototype.onTimeout = function() {
          this.timeoutToken = -1, this.runner && this.runner()
        }, e
      }();
      t.RunOnceScheduler = E, t.nfcall = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return new o.TPromise(function(n, r) {
          return e.apply(void 0, t.concat([function(e, t) {
            return e ? r(e) : n(t)
          }]))
        }, function() {
          return null
        })
      }, t.ninvoke = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        return new o.TPromise(function(r, i) {
          return t.call.apply(t, [e].concat(n, [function(e, t) {
            return e ? i(e) : r(t)
          }]))
        }, function() {
          return null
        })
      };
      var x = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.throttle = function(e) {
          var t = this;
          return this.suspended = !0, l(e, function() {
            return t.resume()
          })
        }, t.prototype.fire = function(t) {
          return this.suspended ? (this.lastEvent = t, void(this.hasLastEvent = !0)) : e.prototype.fire.call(this, t)
        }, t.prototype.resume = function() {
          this.suspended = !1, this.hasLastEvent && this.fire(this.lastEvent), this.hasLastEvent = !1, this.lastEvent = void 0
        }, t
      }(u.Emitter);
      t.ThrottledEmitter = x
    }), define(e[28], t([1, 0, 16, 8, 13, 20, 2]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a(e) {
        switch (e) {
          case 0:
            return "";
          case 1:
            return b + "*?";
          default:
            return "(?:" + _ + "|" + b + "+" + _ + "|" + _ + b + "+)*?"
        }
      }

      function u(e, t) {
        if (!e) return [];
        for (var n, r = [], i = !1, o = !1, s = "", a = 0; a < e.length; a++) {
          switch (n = e[a]) {
            case t:
              if (!i && !o) {
                r.push(s), s = "";
                continue
              }
              break;
            case "{":
              i = !0;
              break;
            case "}":
              i = !1;
              break;
            case "[":
              o = !0;
              break;
            case "]":
              o = !1
          }
          s += n
        }
        return s && r.push(s), r
      }

      function c(e) {
        if (!e) return "";
        var t = "",
          n = u(e, y);
        if (n.every(function(e) {
            return e === v
          })) t = ".*";
        else {
          var i = !1;
          n.forEach(function(e, o) {
            if (e !== v) {
              for (var s, l = !1, d = "", f = !1, p = "", h = 0; h < e.length; h++)
                if ("}" !== (s = e[h]) && l) d += s;
                else if (!f || "]" === s && p) switch (s) {
                case "{":
                  l = !0;
                  continue;
                case "[":
                  f = !0;
                  continue;
                case "}":
                  var g = "(?:" + u(d, ",").map(function(e) {
                    return c(e)
                  }).join("|") + ")";
                  t += g, l = !1, d = "";
                  break;
                case "]":
                  t += "[" + p + "]", f = !1, p = "";
                  break;
                case "?":
                  t += b;
                  continue;
                case "*":
                  t += a(1);
                  continue;
                default:
                  t += r.escapeRegExpCharacters(s)
              } else {
                p += "-" === s ? s : "^" !== s && "!" !== s || p ? s === y ? "" : r.escapeRegExpCharacters(s) : "^"
              }
              o < n.length - 1 && n[o + 1] !== v && (t += _), i = !1
            } else i || (t += a(2), i = !0)
          })
        }
        return t
      }

      function l(e, t) {
        if (!e) return k;
        var i;
        i = "string" != typeof e ? e.pattern : e;
        var o = (i = i.trim()) + "_" + !!t.trimForExclusions,
          s = T.get(o);
        if (s) return d(s, e);
        var a;
        if (S.test(i)) {
          var u = i.substr(4);
          s = function(e, t) {
            return e && r.endsWith(e, u) ? i : null
          }
        } else s = (a = E.exec(f(i, t))) ? function(e, t) {
          var n = "/" + e,
            i = "\\" + e,
            o = function(o, s) {
              return o ? s ? s === e ? t : null : o === e || r.endsWith(o, n) || r.endsWith(o, i) ? t : null : null
            },
            s = [e];
          return o.basenames = s, o.patterns = [t], o.allBasenames = s, o
        }(a[1], i) : (t.trimForExclusions ? w : x).test(i) ? function(e, t) {
          var r = m(e.slice(1, -1).split(",").map(function(e) {
              return l(e, t)
            }).filter(function(e) {
              return e !== k
            }), e),
            i = r.length;
          if (!i) return k;
          if (1 === i) return r[0];
          var o = function(t, n) {
              for (var i = 0, o = r.length; i < o; i++)
                if (r[i](t, n)) return e;
              return null
            },
            s = n.first(r, function(e) {
              return !!e.allBasenames
            });
          s && (o.allBasenames = s.allBasenames);
          var a = r.reduce(function(e, t) {
            return t.allPaths ? e.concat(t.allPaths) : e
          }, []);
          a.length && (o.allPaths = a);
          return o
        }(i, t) : (a = P.exec(f(i, t))) ? p(a[1].substr(1), i, !0) : (a = D.exec(f(i, t))) ? p(a[1], i, !1) : function(e) {
          try {
            var t = new RegExp("^" + c(e) + "$");
            return function(n, r) {
              return t.lastIndex = 0, n && t.test(n) ? e : null
            }
          } catch (e) {
            return k
          }
        }(i);
        return T.set(o, s), d(s, e)
      }

      function d(e, t) {
        return "string" == typeof t ? e : function(n, r) {
          return i.isEqualOrParent(n, t.base) ? e(i.normalize(t.pathToRelative(t.base, n)), r) : null
        }
      }

      function f(e, t) {
        return t.trimForExclusions && r.endsWith(e, "/**") ? e.substr(0, e.length - 2) : e
      }

      function p(e, t, n) {
        var o = i.nativeSep !== i.sep ? e.replace(C, i.nativeSep) : e,
          s = i.nativeSep + o,
          a = n ? function(e, n) {
            return e && (e === o || r.endsWith(e, s)) ? t : null
          } : function(e, n) {
            return e && e === o ? t : null
          };
        return a.allPaths = [(n ? "*/" : "./") + e], a
      }

      function h(e, t) {
        if (void 0 === t && (t = {}), !e) return O;
        if ("string" == typeof e || g(e)) {
          var r = l(e, t);
          if (r === k) return O;
          var o = function(e, t) {
            return !!r(e, t)
          };
          return r.allBasenames && (o.allBasenames = r.allBasenames), r.allPaths && (o.allPaths = r.allPaths), o
        }
        return function(e, t) {
          var r = m(Object.getOwnPropertyNames(e).map(function(n) {
              return function(e, t, n) {
                if (!1 === t) return k;
                var r = l(e, n);
                if (r === k) return k;
                if ("boolean" == typeof t) return r;
                if (t) {
                  var i = t.when;
                  if ("string" == typeof i) {
                    var o = function(t) {
                        var n = i.replace("$(basename)", t.name);
                        return -1 !== t.siblings.indexOf(n) ? e : null
                      },
                      a = function(e, t, n) {
                        if (!r(e, t)) return null;
                        var i = n();
                        return i ? s.TPromise.is(i) ? i.then(o) : o(i) : null
                      };
                    return a.requiresSiblings = !0, a
                  }
                }
                return r
              }(n, e[n], t)
            }).filter(function(e) {
              return e !== k
            })),
            o = r.length;
          if (!o) return k;
          if (!r.some(function(e) {
              return e.requiresSiblings
            })) {
            if (1 === o) return r[0];
            var a = function(e, t, n) {
                for (var i = 0, o = r.length; i < o; i++) {
                  var s = r[i](e, t);
                  if (s) return s
                }
                return null
              },
              u = n.first(r, function(e) {
                return !!e.allBasenames
              });
            u && (a.allBasenames = u.allBasenames);
            var c = r.reduce(function(e, t) {
              return t.allPaths ? e.concat(t.allPaths) : e
            }, []);
            return c.length && (a.allPaths = c), a
          }
          var d = function(e, t, n) {
              function o(n) {
                if (n && n.length) {
                  t || (t = i.basename(e));
                  var r = t.substr(0, t.length - i.extname(e).length);
                  return {
                    siblings: n,
                    name: r
                  }
                }
              }

              function a() {
                if (!c) {
                  c = !0;
                  var e = n();
                  u = s.TPromise.is(e) ? e.then(o) : o(e)
                }
                return u
              }
              for (var u, c = !n, l = 0, d = r.length; l < d; l++) {
                var f = r[l](e, t, a);
                if (f) return f
              }
              return null
            },
            f = n.first(r, function(e) {
              return !!e.allBasenames
            });
          f && (d.allBasenames = f.allBasenames);
          var p = r.reduce(function(e, t) {
            return t.allPaths ? e.concat(t.allPaths) : e
          }, []);
          p.length && (d.allPaths = p);
          return d
        }(e, t)
      }

      function g(e) {
        var t = e;
        return t && "string" == typeof t.base && "string" == typeof t.pattern && "function" == typeof t.pathToRelative
      }

      function m(e, t) {
        var n = e.filter(function(e) {
          return !!e.basenames
        });
        if (n.length < 2) return e;
        var r, i = n.reduce(function(e, t) {
          return e.concat(t.basenames)
        }, []);
        if (t) {
          r = [];
          for (var o = 0, s = i.length; o < s; o++) r.push(t)
        } else r = n.reduce(function(e, t) {
          return e.concat(t.patterns)
        }, []);
        var a = function(e, t) {
          if (!e) return null;
          if (!t) {
            var n = void 0;
            for (n = e.length; n > 0; n--) {
              var o = e.charCodeAt(n - 1);
              if (47 === o || 92 === o) break
            }
            t = e.substr(n)
          }
          var s = i.indexOf(t);
          return -1 !== s ? r[s] : null
        };
        a.basenames = i, a.patterns = r, a.allBasenames = i;
        var u = e.filter(function(e) {
          return !e.basenames
        });
        return u.push(a), u
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getEmptyExpression = function() {
        return Object.create(null)
      };
      var v = "**",
        y = "/",
        _ = "[/\\\\]",
        b = "[^/\\\\]",
        C = /\//g;
      t.splitGlobAware = u;
      var S = /^\*\*\/\*\.[\w\.-]+$/,
        E = /^\*\*\/([\w\.-]+)\/?$/,
        x = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/,
        w = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/,
        P = /^\*\*((\/[\w\.-]+)+)\/?$/,
        D = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
        T = new o.LRUCache(1e4),
        O = function() {
          return !1
        },
        k = function() {
          return null
        };
      t.match = function(e, t, n) {
        return !(!e || !t) && h(e)(t, void 0, n)
      }, t.parse = h, t.isRelativePattern = g, t.parseToAsync = function(e, t) {
        var n = h(e, t);
        return function(e, t, r) {
          var i = n(e, t, r);
          return i instanceof s.TPromise ? i : s.TPromise.as(i)
        }
      }, t.getBasenameTerms = function(e) {
        return e.allBasenames || []
      }, t.getPathTerms = function(e) {
        return e.allPaths || []
      }
    }), define(e[45], t([1, 0, 16]), function(e, t, n) {
      "use strict";

      function r(e) {
        return i(e) ? !e.value : !Array.isArray(e) || e.every(r)
      }

      function i(e) {
        return e instanceof s || !(!e || "object" != typeof e) && ("string" == typeof e.value && ("boolean" == typeof e.isTrusted || void 0 === e.isTrusted))
      }

      function o(e, t) {
        return e === t || !(!e || !t) && (e.value === t.value && e.isTrusted === t.isTrusted)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {
        function e(e) {
          void 0 === e && (e = ""), this.value = e
        }
        return e.prototype.appendText = function(e) {
          return this.value += e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"), this
        }, e.prototype.appendMarkdown = function(e) {
          return this.value += e, this
        }, e.prototype.appendCodeblock = function(e, t) {
          return this.value += "\n```", this.value += e, this.value += "\n", this.value += t, this.value += "\n```\n", this
        }, e
      }();
      t.MarkdownString = s, t.isEmptyMarkdownString = r, t.isMarkdownString = i, t.markedStringsEquals = function(e, t) {
        return !e && !t || !(!e || !t) && (Array.isArray(e) && Array.isArray(t) ? n.equals(e, t, o) : !(!i(e) || !i(t)) && o(e, t))
      }, t.removeMarkdownEscapes = function(e) {
        return e ? e.replace(/\\([\\`*_{}[\]()#+\-.!])/g, "$1") : e
      }
    }), define(e[57], t([1, 0, 13, 8, 28]), function(e, t, n, r, i) {
      "use strict";

      function o(e, t) {
        void 0 === t && (t = !1);
        var r = function(e) {
          return {
            id: e.id,
            mime: e.mime,
            filename: e.filename,
            extension: e.extension,
            filepattern: e.filepattern,
            firstline: e.firstline,
            userConfigured: e.userConfigured,
            filenameLowercase: e.filename ? e.filename.toLowerCase() : void 0,
            extensionLowercase: e.extension ? e.extension.toLowerCase() : void 0,
            filepatternLowercase: e.filepattern ? e.filepattern.toLowerCase() : void 0,
            filepatternOnPath: !!e.filepattern && e.filepattern.indexOf(n.sep) >= 0
          }
        }(e);
        c.push(r), r.userConfigured ? d.push(r) : l.push(r), t && !r.userConfigured && c.forEach(function(e) {
          e.mime === r.mime || e.userConfigured || (r.extension && e.extension === r.extension && console.warn("Overwriting extension <<" + r.extension + ">> to now point to mime <<" + r.mime + ">>"), r.filename && e.filename === r.filename && console.warn("Overwriting filename <<" + r.filename + ">> to now point to mime <<" + r.mime + ">>"), r.filepattern && e.filepattern === r.filepattern && console.warn("Overwriting filepattern <<" + r.filepattern + ">> to now point to mime <<" + r.mime + ">>"), r.firstline && e.firstline === r.firstline && console.warn("Overwriting firstline <<" + r.firstline + ">> to now point to mime <<" + r.mime + ">>"))
        })
      }

      function s(e, i) {
        if (!e) return [t.MIME_UNKNOWN];
        e = e.toLowerCase();
        var o = n.basename(e),
          s = a(e, o, d);
        if (s) return [s, t.MIME_TEXT];
        var u = a(e, o, l);
        if (u) return [u, t.MIME_TEXT];
        if (i) {
          var f = function(e) {
            r.startsWithUTF8BOM(e) && (e = e.substr(1));
            if (e.length > 0)
              for (var t = 0; t < c.length; ++t) {
                var n = c[t];
                if (n.firstline) {
                  var i = e.match(n.firstline);
                  if (i && i.length > 0) return n.mime
                }
              }
            return null
          }(i);
          if (f) return [f, t.MIME_TEXT]
        }
        return [t.MIME_UNKNOWN]
      }

      function a(e, t, n) {
        for (var o, s, a, u = n.length - 1; u >= 0; u--) {
          var c = n[u];
          if (t === c.filenameLowercase) {
            o = c;
            break
          }
          if (c.filepattern && (!s || c.filepattern.length > s.filepattern.length)) {
            var l = c.filepatternOnPath ? e : t;
            i.match(c.filepatternLowercase, l) && (s = c)
          }
          c.extension && (!a || c.extension.length > a.extension.length) && r.endsWith(t, c.extensionLowercase) && (a = c)
        }
        return o ? o.mime : s ? s.mime : a ? a.mime : null
      }

      function u(e) {
        return !e || ("string" == typeof e ? e === t.MIME_BINARY || e === t.MIME_TEXT || e === t.MIME_UNKNOWN : 1 === e.length && u(e[0]))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MIME_TEXT = "text/plain", t.MIME_BINARY = "application/octet-stream", t.MIME_UNKNOWN = "application/unknown";
      var c = [],
        l = [],
        d = [];
      t.registerTextMime = o, t.clearTextMimes = function(e) {
        e ? (c = c.filter(function(e) {
          return !e.userConfigured
        }), d = []) : (c = [], l = [], d = [])
      }, t.guessMimeTypes = s, t.isUnspecific = u, t.suggestFilename = function(e, t) {
        for (var n = 0; n < c.length; n++) {
          var r = c[n];
          if (!r.userConfigured && r.id === e && r.extension) return t + r.extension
        }
        return t
      }
    }), define(e[94], t([1, 0, 14, 4]), function(e, t, r, i) {
      "use strict";

      function o(e, t) {
        var n = t - e;
        return function(t) {
          return e + n * function(e) {
            return 1 - function(e) {
              return Math.pow(e, 3)
            }(1 - e)
          }(t)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible"
      }(t.ScrollbarVisibility || (t.ScrollbarVisibility = {}));
      var s = function() {
        function e(e, t, n, r, i, o) {
          t |= 0, n |= 0, r |= 0, i |= 0, o |= 0, (e |= 0) < 0 && (e = 0), n + e > t && (n = t - e), n < 0 && (n = 0), r < 0 && (r = 0), o + r > i && (o = i - r), o < 0 && (o = 0), this.width = e, this.scrollWidth = t, this.scrollLeft = n, this.height = r, this.scrollHeight = i, this.scrollTop = o
        }
        return e.prototype.equals = function(e) {
          return this.width === e.width && this.scrollWidth === e.scrollWidth && this.scrollLeft === e.scrollLeft && this.height === e.height && this.scrollHeight === e.scrollHeight && this.scrollTop === e.scrollTop
        }, e.prototype.withScrollDimensions = function(t) {
          return new e(void 0 !== t.width ? t.width : this.width, void 0 !== t.scrollWidth ? t.scrollWidth : this.scrollWidth, this.scrollLeft, void 0 !== t.height ? t.height : this.height, void 0 !== t.scrollHeight ? t.scrollHeight : this.scrollHeight, this.scrollTop)
        }, e.prototype.withScrollPosition = function(t) {
          return new e(this.width, this.scrollWidth, void 0 !== t.scrollLeft ? t.scrollLeft : this.scrollLeft, this.height, this.scrollHeight, void 0 !== t.scrollTop ? t.scrollTop : this.scrollTop)
        }, e.prototype.createScrollEvent = function(e) {
          var t = this.width !== e.width,
            n = this.scrollWidth !== e.scrollWidth,
            r = this.scrollLeft !== e.scrollLeft,
            i = this.height !== e.height,
            o = this.scrollHeight !== e.scrollHeight,
            s = this.scrollTop !== e.scrollTop;
          return {
            width: this.width,
            scrollWidth: this.scrollWidth,
            scrollLeft: this.scrollLeft,
            height: this.height,
            scrollHeight: this.scrollHeight,
            scrollTop: this.scrollTop,
            widthChanged: t,
            scrollWidthChanged: n,
            scrollLeftChanged: r,
            heightChanged: i,
            scrollHeightChanged: o,
            scrollTopChanged: s
          }
        }, e
      }();
      t.ScrollState = s;
      var a = function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return r._onScroll = r._register(new i.Emitter), r.onScroll = r._onScroll.event, r._smoothScrollDuration = t, r._scheduleAtNextAnimationFrame = n, r._state = new s(0, 0, 0, 0, 0, 0), r._smoothScrolling = null, r
        }
        return n(t, e), t.prototype.dispose = function() {
            this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), e.prototype.dispose.call(this)
          }, t.prototype.setSmoothScrollDuration = function(e) {
            this._smoothScrollDuration = e
          }, t.prototype.validateScrollPosition = function(e) {
            return this._state.withScrollPosition(e)
          }, t.prototype.getScrollDimensions = function() {
            return this._state
          }, t.prototype.setScrollDimensions = function(e) {
            var t = this._state.withScrollDimensions(e);
            this._setState(t), this._smoothScrolling && this._smoothScrolling.acceptScrollDimensions(this._state)
          },
          t.prototype.getFutureScrollPosition = function() {
            return this._smoothScrolling ? this._smoothScrolling.to : this._state
          }, t.prototype.getCurrentScrollPosition = function() {
            return this._state
          }, t.prototype.setScrollPositionNow = function(e) {
            var t = this._state.withScrollPosition(e);
            this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), this._setState(t)
          }, t.prototype.setScrollPositionSmooth = function(e) {
            var t = this;
            if (0 === this._smoothScrollDuration) return this.setScrollPositionNow(e);
            if (this._smoothScrolling) {
              e = {
                scrollLeft: void 0 === e.scrollLeft ? this._smoothScrolling.to.scrollLeft : e.scrollLeft,
                scrollTop: void 0 === e.scrollTop ? this._smoothScrolling.to.scrollTop : e.scrollTop
              };
              r = this._state.withScrollPosition(e);
              if (this._smoothScrolling.to.scrollLeft === r.scrollLeft && this._smoothScrolling.to.scrollTop === r.scrollTop) return;
              var n = this._smoothScrolling.combine(this._state, r, this._smoothScrollDuration);
              this._smoothScrolling.dispose(), this._smoothScrolling = n
            } else {
              var r = this._state.withScrollPosition(e);
              this._smoothScrolling = c.start(this._state, r, this._smoothScrollDuration)
            }
            this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(function() {
              t._smoothScrolling && (t._smoothScrolling.animationFrameDisposable = null, t._performSmoothScrolling())
            })
          }, t.prototype._performSmoothScrolling = function() {
            var e = this,
              t = this._smoothScrolling.tick(),
              n = this._state.withScrollPosition(t);
            if (this._setState(n), t.isDone) return this._smoothScrolling.dispose(), void(this._smoothScrolling = null);
            this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(function() {
              e._smoothScrolling && (e._smoothScrolling.animationFrameDisposable = null, e._performSmoothScrolling())
            })
          }, t.prototype._setState = function(e) {
            var t = this._state;
            t.equals(e) || (this._state = e, this._onScroll.fire(this._state.createScrollEvent(t)))
          }, t
      }(r.Disposable);
      t.Scrollable = a;
      var u = function() {
        return function(e, t, n) {
          this.scrollLeft = e, this.scrollTop = t, this.isDone = n
        }
      }();
      t.SmoothScrollingUpdate = u;
      var c = function() {
        function e(e, t, n, r) {
          this.from = e, this.to = t, this.duration = r, this._startTime = n, this.animationFrameDisposable = null, this._initAnimations()
        }
        return e.prototype._initAnimations = function() {
          this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height)
        }, e.prototype._initAnimation = function(e, t, n) {
          if (Math.abs(e - t) > 2.5 * n) {
            var r = void 0,
              i = void 0;
            return e < t ? (r = e + .75 * n, i = t - .75 * n) : (r = e - .75 * n, i = t + .75 * n),
              function(e, t, n) {
                return function(r) {
                  return r < n ? e(r / n) : t((r - n) / (1 - n))
                }
              }(o(e, r), o(i, t), .33)
          }
          return o(e, t)
        }, e.prototype.dispose = function() {
          null !== this.animationFrameDisposable && (this.animationFrameDisposable.dispose(), this.animationFrameDisposable = null)
        }, e.prototype.acceptScrollDimensions = function(e) {
          this.to = e.withScrollPosition(this.to), this._initAnimations()
        }, e.prototype.tick = function() {
          return this._tick(Date.now())
        }, e.prototype._tick = function(e) {
          var t = (e - this._startTime) / this.duration;
          if (t < 1) {
            var n = this.scrollLeft(t),
              r = this.scrollTop(t);
            return new u(n, r, !1)
          }
          return new u(this.to.scrollLeft, this.to.scrollTop, !0)
        }, e.prototype.combine = function(t, n, r) {
          return e.start(t, n, r)
        }, e.start = function(t, n, r) {
          r += 10;
          return new e(t, n, Date.now() - 10, r)
        }, e
      }();
      t.SmoothScrollingOperation = c
    }), define(e[97], t([1, 0, 3]), function(e, t, n) {
      "use strict";

      function r(e) {
        var t, n = [];
        try {
          var r = JSON.parse(e.arguments),
            i = r[r.length - 1];
          i && i.__$stack && (r.pop(), t = i.__$stack), n.push.apply(n, r)
        } catch (t) {
          n.push("Unable to log remote console arguments", e.arguments)
        }
        return {
          args: n,
          stack: t
        }
      }

      function i(e) {
        if ("string" != typeof e) return i(r(e).stack);
        var t = e;
        if (t) {
          var o = t.split("\n")[0],
            s = /at [^\/]*((?:(?:[a-zA-Z]+:)|(?:[\/])|(?:\\\\))(?:.+)):(\d+):(\d+)/.exec(o);
          if (s && 4 === s.length) return {
            uri: n.default.file(s[1]),
            line: Number(s[2]),
            column: Number(s[3])
          }
        }
      }

      function o(e) {
        return "color: " + e
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isRemoteConsoleLog = function(e) {
          var t = e;
          return t && "string" == typeof t.type && "string" == typeof t.severity
        }, t.parse = r,
        t.getFirstFrame = i, t.log = function(e, t) {
          var n = r(e),
            i = n.args,
            s = n.stack,
            a = "string" == typeof i[0] && 1 === i.length,
            u = s && s.split("\n")[0];
          u && (u = "(" + u.trim() + ")");
          var c = [];
          c = "string" == typeof i[0] ? u && a ? ["%c[" + t + "] %c" + i[0] + " %c" + u, o("blue"), o("black"), o("grey")] : ["%c[" + t + "] %c" + i[0], o("blue"), o("black")].concat(i.slice(1)) : ["%c[" + t + "]%", o("blue")].concat(i), u && !a && c.push(u), console[e.severity].apply(console, c)
        }
    }), define(e[99], t([1, 0, 169]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          void 0 === e && (e = "utf8"), this.stringDecoder = new n.StringDecoder(e), this.remaining = null
        }
        return e.prototype.write = function(e) {
            var t = [],
              n = this.remaining ? this.remaining + this.stringDecoder.write(e) : this.stringDecoder.write(e);
            if (n.length < 1) return t;
            for (var r, i = 0, o = i; o < n.length;)
              if (13 === (r = n.charCodeAt(o)) || 10 === r) {
                if (t.push(n.substring(i, o)), ++o < n.length) {
                  var s = r;
                  r = n.charCodeAt(o), (13 === s && 10 === r || 10 === s && 13 === r) && o++
                }
                i = o
              } else o++;
            return this.remaining = i < n.length ? n.substr(i) : null, t
          },
          e.prototype.end = function() {
            return this.remaining
          }, e
      }();
      t.LineDecoder = r
    }), define(e[104], t([1, 0, 110]), function(e, t, n) {
      "use strict";

      function r(e, t, i) {
        if (n.ok(e, "Missing first parameter"), n.ok("function" == typeof t, "Second parameter must be a function that is called for each element"), n.ok("function" == typeof i, "Third parameter must be a function that is called on error and success"), "function" == typeof e) try {
          e(function(e, n) {
            e ? i(e, null) : r(n, t, i)
          })
        } catch (e) {
          i(e, null)
        } else {
          var o = [],
            s = function(n) {
              if (n < e.length) try {
                t(e[n], function(e, t) {
                  !0 !== e && !1 !== e || (t = e, e = null), e ? i(e, null) : (t && o.push(t), process.nextTick(function() {
                    s(n + 1)
                  }))
                }, n, e.length)
              } catch (e) {
                i(e, null)
              } else i(null, o)
            };
          s(0)
        }
      }

      function i(e) {
        ! function(e) {
          n.ok(e.length > 1, "Need at least one error handler and one function to process sequence"), e.forEach(function(e) {
            n.ok("function" == typeof e)
          });
          var t = e.splice(0, 1)[0],
            i = null;
          r(e, function(e, t) {
            var n = function(e, n) {
              !0 !== e && !1 !== e || (n = e, e = null), e ? t(e, null) : (i = n, t(null, null))
            };
            try {
              e.call(n, i)
            } catch (e) {
              t(e, null)
            }
          }, function(e, n) {
            e && t(e)
          })
        }(Array.isArray(e) ? e : Array.prototype.slice.call(arguments))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.parallel = function(e, t, n) {
        var r = new Array(e.length),
          i = new Array(e.length),
          o = !1,
          s = 0;
        if (0 === e.length) return n(null, []);
        e.forEach(function(a, u) {
          t(a, function(t, a) {
            if (t ? (o = !0, r[u] = null, i[u] = t) : (r[u] = a, i[u] = null), ++s === e.length) return n(o ? i : null, r)
          })
        })
      }, t.loop = r, t.sequence = i
    }), define(e[116], t([1, 0, 60, 8, 10, 104, 120, 15, 2, 9]), function(e, t, n, r, i, o, s, a, u, c) {
      "use strict";

      function l(e) {
        return i.isMacintosh ? s.readdirSync(e).map(function(e) {
          return r.normalizeNFC(e)
        }) : s.readdirSync(e)
      }

      function d(e, t) {
        return i.isMacintosh ? s.readdir(e, function(e, n) {
          return e ? t(e, null) : t(null, n.map(function(e) {
            return r.normalizeNFC(e)
          }))
        }) : s.readdir(e, t)
      }

      function f(e, t, n, r) {
        r || (r = Object.create(null)), s.stat(e, function(i, o) {
          if (i) return n(i);
          if (!o.isDirectory()) return function(e, t, n, r) {
            var i = !1,
              o = s.createReadStream(e),
              a = s.createWriteStream(t, {
                mode: n
              }),
              u = function(e) {
                i || (i = !0, r(e))
              };
            o.on("error", u), a.on("error", u),
              o.on("end", function() {
                a.end(function() {
                  i || (i = !0, s.chmod(t, n, r))
                })
              }), o.pipe(a, {
                end: !1
              })
          }(e, t, 511 & o.mode, n);
          if (r[e]) return n(null);
          r[e] = !0;
          var u = function() {
            d(e, function(i, o) {
              _(o, function(n, i) {
                f(a.join(e, n), a.join(t, n), function(e) {
                  return i(e, void 0)
                }, r)
              }, n)
            })
          };
          p(t, 511 & o.mode).done(u, u)
        })
      }

      function p(e, t) {
        var n = function() {
          return c.nfcall(s.mkdir, e, t).then(null, function(t) {
            return "EEXIST" === t.code ? c.nfcall(s.stat, e).then(function(t) {
              return t.isDirectory ? null : u.TPromise.wrapError(new Error("'" + e + "' exists and is not a directory."))
            }) : u.TPromise.wrapError(t)
          })
        };
        return e === a.dirname(e) ? u.TPromise.as(!0) : n().then(null, function(r) {
          return "ENOENT" === r.code ? p(a.dirname(e), t).then(n) : u.TPromise.wrapError(r)
        })
      }

      function h(e, t) {
        if ("\\" === e || "/" === e) return t(new Error("Will not delete root!"));
        s.exists(e, function(n) {
          n ? s.lstat(e, function(n, r) {
            if (n || !r) t(n);
            else if (!r.isDirectory() || r.isSymbolicLink()) {
              var i = r.mode;
              128 & i ? s.unlink(e, t) : s.chmod(e, 128 | i, function(n) {
                n ? t(n) : s.unlink(e, t)
              })
            } else d(e, function(n, r) {
              if (n || !r) t(n);
              else if (0 === r.length) s.rmdir(e, t);
              else {
                var i = null,
                  o = r.length;
                r.forEach(function(n) {
                  h(a.join(e, n), function(n) {
                    o--, n && (i = i || n), 0 === o && (i ? t(i) : s.rmdir(e, t))
                  })
                })
              }
            })
          }) : t(null)
        })
      }

      function g(e) {
        try {
          var t = s.lstatSync(e);
          t.isDirectory() && !t.isSymbolicLink() ? (l(e).forEach(function(t) {
            return g(a.join(e, t))
          }), s.rmdirSync(e)) : s.unlinkSync(e)
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw e
        }
      }

      function m(e) {
        if (!e) return {
          mode: 438,
          flag: "w"
        };
        var t = {
          mode: e.mode,
          flag: e.flag
        };
        return "number" != typeof t.mode && (t.mode = 438), "string" != typeof t.flag && (t.flag = "w"), t
      }

      function v(e) {
        var t = a.dirname(e);
        if (e === t) return e;
        var n = (a.basename(e) || e).toLowerCase();
        try {
          var r = l(t).filter(function(e) {
            return e.toLowerCase() === n
          });
          if (1 === r.length) {
            if (o = v(t)) return a.join(o, r[0])
          } else if (r.length > 1) {
            var i = r.indexOf(n);
            if (i >= 0) {
              var o = v(t);
              if (o) return a.join(o, r[i])
            }
          }
        } catch (e) {}
        return null
      }

      function y(e) {
        return r.rtrim(a.normalize(e), a.sep)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var _ = o.loop;
      t.readdirSync = l, t.readdir = d, t.copy = f,
        t.mkdirp = p, t.del = function(e, t, i, o) {
          s.exists(e, function(u) {
            if (!u) return i(null);
            s.stat(e, function(u, c) {
              if (u || !c) return i(u);
              if ("." === e[e.length - 1] || r.endsWith(e, "./") || r.endsWith(e, ".\\")) return h(e, i);
              var l = a.join(t, n.generateUuid());
              s.rename(e, l, function(t) {
                if (t) return h(e, i);
                i(null), h(l, function(e) {
                  e && console.error(e), o && o(e)
                })
              })
            })
          })
        }, t.delSync = g, t.mv = function(e, t, n) {
          function i(e) {
            if (e) return n(e);
            s.stat(t, function(e, r) {
              return e ? n(e) : r.isDirectory() ? n(null) : void s.open(t, "a", null, function(e, t) {
                if (e) return n(e);
                s.futimes(t, r.atime, new Date, function(e) {
                  if (e) return n(e);
                  s.close(t, n)
                })
              })
            })
          }
          if (e === t) return n(null);
          s.rename(e, t, function(o) {
            return o ? o && e.toLowerCase() !== t.toLowerCase() && "EXDEV" === o.code || r.endsWith(e, ".") ? f(e, t, function(t) {
              if (t) return n(t);
              h(e, i)
            }) : n(o) : i(null)
          })
        };
      var b = !0;
      t.writeFileAndFlush = function(e, t, n, r) {
        if (n = m(n), !b) return s.writeFile(e, t, n, r);
        s.open(e, n.flag, n.mode, function(e, n) {
          if (e) return r(e);
          s.writeFile(n, t, function(e) {
            if (e) return s.close(n, function() {
              return r(e)
            });
            s.fdatasync(n, function(e) {
              return e && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", e), b = !1), s.close(n, function(e) {
                return r(e)
              })
            })
          })
        })
      }, t.writeFileAndFlushSync = function(e, t, n) {
        if (n = m(n), !b) return s.writeFileSync(e, t, n);
        var r = s.openSync(e, n.flag, n.mode);
        try {
          s.writeFileSync(r, t);
          try {
            s.fdatasyncSync(r)
          } catch (e) {
            console.warn("[node.js fs] fdatasyncSync is now disabled for this session because it failed: ", e), b = !1
          }
        } finally {
          s.closeSync(r)
        }
      }, t.realcaseSync = v, t.realpathSync = function(e) {
        try {
          return s.realpathSync(e)
        } catch (n) {
          var t = y(e);
          return s.accessSync(t, s.constants.R_OK), t
        }
      }, t.realpath = function(e, t) {
        return s.realpath(e, function(n, r) {
          if (!n) return t(null, r);
          var i = y(e);
          return s.access(i, s.constants.R_OK, function(e) {
            return t(e, i)
          })
        })
      }, t.watch = function(e, t) {
        var n = s.watch(e);
        return n.on("change", function(e, n) {
          var o = null;
          n && (o = n.toString(), i.isMacintosh && (o = r.normalizeNFC(o))), t(e, o)
        }), n
      }
    }), define(e[161], t([1, 0, 3]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n.default.parse(e.toUrl("paths")).fsPath,
        i = e.__$__nodeRequire(r);
      t.getAppDataPath = i.getAppDataPath, t.getDefaultUserDataPath = i.getDefaultUserDataPath
    }), define(e[42], t([1, 0, 2, 116, 15, 9, 120, 43, 10, 4]), function(e, t, n, r, i, o, s, a, u, c) {
      "use strict";

      function l(e) {
        return o.nfcall(r.readdir, e)
      }

      function d(e) {
        return p(e).then(function(t) {
          return t.isDirectory() && !t.isSymbolicLink() ? l(e).then(function(t) {
            return n.TPromise.join(t.map(function(t) {
              return d(i.join(e, t))
            }))
          }).then(function() {
            return h(e)
          }) : g(e)
        }, function(e) {
          if ("ENOENT" !== e.code) return n.TPromise.wrapError(e)
        })
      }

      function f(e) {
        return o.nfcall(s.stat, e)
      }

      function p(e) {
        return o.nfcall(s.lstat, e)
      }

      function h(e) {
        return o.nfcall(s.rmdir, e)
      }

      function g(e) {
        return o.nfcall(s.unlink, e)
      }

      function m(e, t, n) {
        return function(e) {
          var t = y[e];
          if (!t) {
            t = new o.Queue, y[e] = t;
            c.once(t.onFinished)(function() {
              delete y[e], t.dispose()
            })
          }
          return t
        }(function(e) {
          var t = e;
          (u.isWindows || u.isMacintosh) && (t = t.toLowerCase());
          return t
        }(e)).queue(function() {
          return o.nfcall(r.writeFileAndFlush, e, t, n)
        })
      }

      function v(e) {
        return f(e).then(function(e) {
          return e.isDirectory()
        }, function() {
          return !1
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.readdir = l, t.exists = function(e) {
        return new n.TPromise(function(t) {
          return s.exists(e, t)
        })
      }, t.chmod = function(e, t) {
        return o.nfcall(s.chmod, e, t)
      }, t.mkdirp = r.mkdirp, t.rimraf = d, t.realpath = function(e) {
        return o.nfcall(r.realpath, e)
      }, t.stat = f, t.lstat = p, t.rename = function(e, t) {
        return o.nfcall(s.rename, e, t)
      }, t.rmdir = h, t.unlink = g, t.symlink = function(e, t, n) {
        return o.nfcall(s.symlink, e, t, n)
      }, t.readlink = function(e) {
        return o.nfcall(s.readlink, e)
      }, t.touch = function(e) {
        var t = Date.now() / 1e3;
        return o.nfcall(s.utimes, e, t, t)
      }, t.truncate = function(e, t) {
        return o.nfcall(s.truncate, e, t)
      }, t.readFile = function(e, t) {
        return o.nfcall(s.readFile, e, t)
      };
      var y = Object.create(null);
      t.writeFile = m, t.readDirsInDir = function(e) {
        return l(e).then(function(t) {
          return n.TPromise.join(t.map(function(t) {
            return v(i.join(e, t))
          })).then(function(e) {
            return t.filter(function(t, n) {
              return e[n]
            })
          })
        })
      }, t.dirExists = v, t.fileExists = function(e) {
        return f(e).then(function(e) {
          return e.isFile()
        }, function() {
          return !1
        })
      };
      var _ = a.tmpdir();
      t.del = function(e, t) {
        return void 0 === t && (t = _), o.nfcall(r.del, e, t)
      }, t.whenDeleted = function(e) {
        return new n.TPromise(function(t) {
          var n = !1,
            r = setInterval(function() {
              n || (n = !0, s.exists(e, function(e) {
                n = !1, e || (clearInterval(r), t(null))
              }))
            }, 1e3)
        })
      }
    }), define(e[87], t([1, 0, 15, 43, 53, 52, 3]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a() {
        var e = "vscode-" + function(e) {
          for (var t = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], n = "", r = 0; r < e; r++) n += t[Math.floor(t.length * Math.random())];
          return n
        }(40);
        return "win32" === process.platform ? "\\\\.\\pipe\\" + e + "-sock" : n.join(r.tmpdir(), e + ".sock")
      }

      function u(t, n, r, u) {
        var c, l = !1,
          d = function(e) {
            l || (l = !0, u(e, null))
          },
          f = a(),
          p = a(),
          h = a(),
          g = function(e, t, n, r) {
            var i = {};
            for (var o in e) i[o] = e[o];
            return i.STDIN_PIPE_NAME = t, i.STDOUT_PIPE_NAME = n, i.STDERR_PIPE_NAME = r, i.ELECTRON_RUN_AS_NODE = "1",
              i.ELECTRON_NO_ASAR = "1", i
          }(r.env || process.env, f, p, h),
          m = i.createServer(function(e) {
            c.stderr = e
          });
        m.listen(h);
        var v = i.createServer(function(e) {
          e.once("data", function(t) {
            c.stdin = i.connect(f), c.stdout = e,
              function(e) {
                l || (l = !0, u(null, e))
              }(c)
          })
        });
        v.listen(p);
        var y = !1,
          _ = function() {
            y || (y = !0, process.removeListener("exit", _), v.close(), m.close())
          },
          b = s.default.parse(e.toUrl("./stdForkStart.js")).fsPath;
        (c = o.fork(b, [t].concat(n), {
          silent: !0,
          cwd: r.cwd,
          env: g,
          execArgv: r.execArgv
        })).once("error", function(e) {
          _(), d(e)
        }), c.once("exit", function(e) {
          _(), d(e)
        }), process.once("exit", _)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.fork = u
    }), define(e[32], t([1, 0, 2, 14, 4]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o;
      ! function(e) {
        e[e.RequestCommon = 0] = "RequestCommon", e[e.RequestCancel = 1] = "RequestCancel", e[e.ResponseInitialize = 2] = "ResponseInitialize", e[e.ResponseSuccess = 3] = "ResponseSuccess", e[e.ResponseProgress = 4] = "ResponseProgress", e[e.ResponseError = 5] = "ResponseError",
          e[e.ResponseErrorObj = 6] = "ResponseErrorObj"
      }(o || (o = {}));
      var s;
      ! function(e) {
        e[e.Uninitialized = 0] = "Uninitialized", e[e.Idle = 1] = "Idle"
      }(s || (s = {}));
      var a = function() {
        function e(e) {
          var t = this;
          this.protocol = e, this.channels = Object.create(null), this.activeRequests = Object.create(null), this.protocolListener = this.protocol.onMessage(function(e) {
            return t.onMessage(e)
          }), this.protocol.send({
            type: o.ResponseInitialize
          })
        }
        return e.prototype.registerChannel = function(e, t) {
          this.channels[e] = t
        }, e.prototype.onMessage = function(e) {
          switch (e.type) {
            case o.RequestCommon:
              this.onCommonRequest(e);
              break;
            case o.RequestCancel:
              this.onCancelRequest(e)
          }
        }, e.prototype.onCommonRequest = function(e) {
          var t, i = this,
            s = this.channels[e.channelName];
          try {
            t = s.call(e.name, e.arg)
          } catch (e) {
            t = n.TPromise.wrapError(e)
          }
          var a = e.id,
            u = t.then(function(t) {
              i.protocol.send({
                id: a,
                data: t,
                type: o.ResponseSuccess
              }), delete i.activeRequests[e.id]
            }, function(t) {
              t instanceof Error ? i.protocol.send({
                id: a,
                data: {
                  message: t.message,
                  name: t.name,
                  stack: t.stack ? t.stack.split("\n") : void 0
                },
                type: o.ResponseError
              }) : i.protocol.send({
                id: a,
                data: t,
                type: o.ResponseErrorObj
              }), delete i.activeRequests[e.id]
            }, function(e) {
              i.protocol.send({
                id: a,
                data: e,
                type: o.ResponseProgress
              })
            });
          this.activeRequests[e.id] = r.toDisposable(function() {
            return u.cancel()
          })
        }, e.prototype.onCancelRequest = function(e) {
          var t = this.activeRequests[e.id];
          t && (t.dispose(), delete this.activeRequests[e.id])
        }, e.prototype.dispose = function() {
          var e = this;
          this.protocolListener.dispose(), this.protocolListener = null, Object.keys(this.activeRequests).forEach(function(t) {
            e.activeRequests[t].dispose()
          }), this.activeRequests = null
        }, e
      }();
      t.ChannelServer = a;
      var u = function() {
        function e(e) {
          var t = this;
          this.protocol = e, this.state = s.Uninitialized, this.activeRequests = [], this.bufferedRequests = [], this.handlers = Object.create(null), this.lastRequestId = 0, this.protocolListener = this.protocol.onMessage(function(e) {
            return t.onMessage(e)
          })
        }
        return e.prototype.getChannel = function(e) {
          var t = this;
          return {
            call: function(n, r) {
              return t.request(e, n, r)
            }
          }
        }, e.prototype.request = function(e, t, n) {
          var r = this,
            i = {
              raw: {
                id: this.lastRequestId++,
                type: o.RequestCommon,
                channelName: e,
                name: t,
                arg: n
              }
            },
            a = this.state === s.Uninitialized ? this.bufferRequest(i) : this.doRequest(i);
          return this.activeRequests.push(a), a.then(null, function(e) {
            return null
          }).done(function() {
            return r.activeRequests = r.activeRequests.filter(function(e) {
              return e !== a
            })
          }), a
        }, e.prototype.doRequest = function(e) {
          var t = this,
            r = e.raw.id;
          return new n.TPromise(function(n, i, s) {
            t.handlers[r] = function(e) {
              switch (e.type) {
                case o.ResponseSuccess:
                  delete t.handlers[r], n(e.data);
                  break;
                case o.ResponseError:
                  delete t.handlers[r];
                  var a = new Error(e.data.message);
                  a.stack = e.data.stack, a.name = e.data.name, i(a);
                  break;
                case o.ResponseErrorObj:
                  delete t.handlers[r], i(e.data);
                  break;
                case o.ResponseProgress:
                  s(e.data)
              }
            }, t.send(e.raw)
          }, function() {
            return t.send({
              id: r,
              type: o.RequestCancel
            })
          })
        }, e.prototype.bufferRequest = function(e) {
          var t = this,
            r = null;
          return new n.TPromise(function(n, i, o) {
            t.bufferedRequests.push(e), e.flush = function() {
              e.flush = null, r = t.doRequest(e).then(n, i, o)
            }
          }, function() {
            if (e.flush = null, t.state === s.Uninitialized) {
              var n = t.bufferedRequests.indexOf(e); - 1 !== n && t.bufferedRequests.splice(n, 1)
            } else r && (r.cancel(), r = null)
          })
        }, e.prototype.onMessage = function(e) {
          if (function(e) {
              return e >= o.ResponseInitialize
            }(e.type)) {
            if (this.state === s.Uninitialized && e.type === o.ResponseInitialize) return this.state = s.Idle, this.bufferedRequests.forEach(function(e) {
              return e.flush && e.flush()
            }), void(this.bufferedRequests = null);
            var t = this.handlers[e.id];
            t && t(e)
          }
        }, e.prototype.send = function(e) {
          try {
            this.protocol.send(e)
          } catch (e) {}
        }, e.prototype.dispose = function() {
          this.protocolListener.dispose(), this.protocolListener = null, this.activeRequests.forEach(function(e) {
            return e.cancel()
          }), this.activeRequests = []
        }, e
      }();
      t.ChannelClient = u;
      var c = function() {
        function e(e) {
          var t = this;
          this.channels = Object.create(null), this.channelClients = Object.create(null), this.onClientAdded = new i.Emitter, e(function(e) {
            var n = e.protocol,
              r = e.onDidClientDisconnect;
            i.once(n.onMessage)(function(e) {
              var i = new a(n),
                o = new u(n);
              Object.keys(t.channels).forEach(function(e) {
                return i.registerChannel(e, t.channels[e])
              }), t.channelClients[e] = o, t.onClientAdded.fire(e), r(function() {
                i.dispose(), o.dispose(), delete t.channelClients[e]
              })
            })
          })
        }
        return e.prototype.getChannel = function(e, t) {
          var r = this;
          return {
            call: function(i, o) {
              var s = t.route(i, o);
              return s ? r.getClient(s).then(function(t) {
                return t.getChannel(e).call(i, o)
              }) : n.TPromise.wrapError(new Error("Client id should be provided"))
            }
          }
        }, e.prototype.registerChannel = function(e, t) {
          this.channels[e] = t
        }, e.prototype.getClient = function(e) {
          var t = this,
            r = this.channelClients[e];
          return r ? n.TPromise.as(r) : new n.TPromise(function(n) {
            i.once(i.filterEvent(t.onClientAdded.event, function(t) {
              return t === e
            }))(function() {
              return n(t.channelClients[e])
            })
          })
        }, e.prototype.dispose = function() {
          this.channels = Object.create(null), this.channelClients = Object.create(null), this.onClientAdded.dispose()
        }, e
      }();
      t.IPCServer = c;
      var l = function() {
        function e(e, t) {
          e.send(t), this.channelClient = new u(e), this.channelServer = new a(e)
        }
        return e.prototype.getChannel = function(e) {
          return this.channelClient.getChannel(e)
        }, e.prototype.registerChannel = function(e, t) {
          this.channelServer.registerChannel(e, t)
        }, e.prototype.dispose = function() {
          this.channelClient.dispose(), this.channelClient = null, this.channelServer.dispose(), this.channelServer = null
        }, e
      }();
      t.IPCClient = l, t.getDelayedChannel = function(e) {
        return {
          call: function(t, n) {
            return e.then(function(e) {
              return e.call(t, n)
            })
          }
        }
      }, t.getNextTickChannel = function(e) {
        var t = !1;
        return {
          call: function(r, i) {
            return t ? e.call(r, i) : n.TPromise.timeout(0).then(function() {
              return t = !0
            }).then(function() {
              return e.call(r, i)
            })
          }
        }
      }, t.eventToCall = function(e, t) {
        void 0 === t && (t = function(e) {
          return e
        });
        var r;
        return new n.TPromise(function(n, i, o) {
          return r = e(function(e) {
            return o(t(e))
          })
        }, function() {
          return r.dispose()
        })
      }, t.eventFromCall = function(e, t, n, r) {
        void 0 === n && (n = null), void 0 === r && (r = function(e) {
          return e
        });
        var o, s = new i.Emitter({
          onFirstListenerAdd: function() {
            o = e.call(t, n).then(null, function(e) {
              return null
            }, function(e) {
              return s.fire(r(e))
            })
          },
          onLastListenerRemove: function() {
            o.cancel(), o = null
          }
        });
        return s.event
      }
    }), define(e[92], t([1, 0, 53, 2, 4, 32, 15, 43, 60]), function(e, t, r, i, o, s, a, u, c) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.generateRandomPipeName = function() {
        var e = c.generateUuid();
        return "win32" === process.platform ? "\\\\.\\pipe\\vscode-" + e + "-sock" : a.join(u.tmpdir(), "vscode-" + e + ".sock")
      };
      var l = function() {
        function e(t) {
          var n = this;
          this._socket = t, this._onMessage = new o.Emitter, this.onMessage = this._onMessage.event, this._writeBuffer = new(function() {
            function e() {
              this._data = [], this._totalLength = 0
            }
            return e.prototype.add = function(e, t) {
              var n = 0 === this._totalLength;
              return this._data.push(e, t), this._totalLength += e.length + t.length, n
            }, e.prototype.take = function() {
              var e = Buffer.concat(this._data, this._totalLength);
              return this._data.length = 0, this._totalLength = 0, e
            }, e
          }());
          var r = [],
            i = 0,
            s = {
              readHead: !0,
              bodyIsJson: !1,
              bodyLen: -1
            };
          t.on("data", function(t) {
            for (r.push(t), i += t.length; i > 0;) {
              if (s.readHead) {
                if (!(i >= e._headerLen)) break;
                o = Buffer.concat(r);
                s.bodyIsJson = 1 === o.readInt8(0), s.bodyLen = o.readInt32BE(1), s.readHead = !1;
                u = o.slice(e._headerLen);
                i = u.length, r = [u]
              }
              if (!s.readHead) {
                if (!(i >= s.bodyLen)) break;
                var o, a = (o = Buffer.concat(r)).toString("utf8", 0, s.bodyLen);
                s.bodyIsJson && (a = JSON.parse(a)), n._onMessage.fire(a);
                var u = o.slice(s.bodyLen);
                i = u.length, r = [u], s.bodyIsJson = !1, s.bodyLen = -1, s.readHead = !0
              }
            }
          })
        }
        return e.prototype.send = function(t) {
          var n = Buffer.alloc(e._headerLen);
          "string" != typeof t && (t = JSON.stringify(t), n.writeInt8(1, 0));
          var r = Buffer.from(t);
          n.writeInt32BE(r.length, 1), this._writeSoon(n, r)
        }, e.prototype._writeSoon = function(e, t) {
          var n = this;
          this._writeBuffer.add(e, t) && setImmediate(function() {
            n._socket.destroyed || n._socket.write(n._writeBuffer.take())
          })
        }, e._headerLen = 17, e
      }();
      t.Protocol = l;
      var d = function(e) {
        function t(n) {
          var r = e.call(this, t.toClientConnectionEvent(n)) || this;
          return r.server = n, r
        }
        return n(t, e), t.toClientConnectionEvent = function(e) {
          var t = o.fromNodeEventEmitter(e, "connection");
          return o.mapEvent(t, function(e) {
            return {
              protocol: new l(e),
              onDidClientDisconnect: o.once(o.fromNodeEventEmitter(e, "close"))
            }
          })
        }, t.prototype.dispose = function() {
          e.prototype.dispose.call(this), this.server.close(), this.server = null
        }, t
      }(s.IPCServer);
      t.Server = d;
      var f = function(e) {
        function t(t, n) {
          var r = e.call(this, new l(t), n) || this;
          return r.socket = t, r._onClose = new o.Emitter, t.once("close", function() {
            return r._onClose.fire()
          }), r
        }
        return n(t, e), Object.defineProperty(t.prototype, "onClose", {
          get: function() {
            return this._onClose.event
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.dispose = function() {
          e.prototype.dispose.call(this), this.socket.end(), this.socket = null
        }, t
      }(s.IPCClient);
      t.Client = f, t.serve = function(e) {
        return new i.TPromise(function(t, n) {
          var i = r.createServer();
          i.on("error", n), i.listen(e, function() {
            i.removeListener("error", n), t(new d(i))
          })
        })
      }, t.connect = function(e, t) {
        return new i.TPromise(function(n, i) {
          var o = r.createConnection(e, function() {
            o.removeListener("error", i), n(new f(o, t))
          });
          o.once("error", i)
        })
      }
    }), define(e[51], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e(e, t) {
          this.lineNumber = e, this.column = t
        }
        return e.prototype.equals = function(t) {
          return e.equals(this, t)
        }, e.equals = function(e, t) {
          return !e && !t || !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column
        }, e.prototype.isBefore = function(t) {
          return e.isBefore(this, t)
        }, e.isBefore = function(e, t) {
          return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column < t.column
        }, e.prototype.isBeforeOrEqual = function(t) {
          return e.isBeforeOrEqual(this, t)
        }, e.isBeforeOrEqual = function(e, t) {
          return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column <= t.column
        }, e.compare = function(e, t) {
          var n = 0 | e.lineNumber,
            r = 0 | t.lineNumber;
          if (n === r) {
            return (0 | e.column) - (0 | t.column)
          }
          return n - r
        }, e.prototype.clone = function() {
          return new e(this.lineNumber, this.column)
        }, e.prototype.toString = function() {
          return "(" + this.lineNumber + "," + this.column + ")"
        }, e.lift = function(t) {
          return new e(t.lineNumber, t.column)
        }, e.isIPosition = function(e) {
          return e && "number" == typeof e.lineNumber && "number" == typeof e.column
        }, e
      }();
      t.Position = n
    }), define(e[50], t([1, 0, 51]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e, t, n, r) {
          e > n || e === n && t > r ? (this.startLineNumber = n, this.startColumn = r, this.endLineNumber = e, this.endColumn = t) : (this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r)
        }
        return e.prototype.isEmpty = function() {
          return e.isEmpty(this)
        }, e.isEmpty = function(e) {
          return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn
        }, e.prototype.containsPosition = function(t) {
          return e.containsPosition(this, t)
        }, e.containsPosition = function(e, t) {
          return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && (!(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn))
        }, e.prototype.containsRange = function(t) {
          return e.containsRange(this, t)
        }, e.containsRange = function(e, t) {
          return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && (!(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && (!(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn)))
        }, e.prototype.plusRange = function(t) {
          return e.plusRange(this, t)
        }, e.plusRange = function(t, n) {
          var r, i, o, s;
          return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, s = t.endColumn), new e(r, i, o, s)
        }, e.prototype.intersectRanges = function(t) {
          return e.intersectRanges(this, t)
        }, e.intersectRanges = function(t, n) {
          var r = t.startLineNumber,
            i = t.startColumn,
            o = t.endLineNumber,
            s = t.endColumn,
            a = n.startLineNumber,
            u = n.startColumn,
            c = n.endLineNumber,
            l = n.endColumn;
          return r < a ? (r = a, i = u) : r === a && (i = Math.max(i, u)), o > c ? (o = c, s = l) : o === c && (s = Math.min(s, l)), r > o ? null : r === o && i > s ? null : new e(r, i, o, s)
        }, e.prototype.equalsRange = function(t) {
          return e.equalsRange(this, t)
        }, e.equalsRange = function(e, t) {
          return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn
        }, e.prototype.getEndPosition = function() {
          return new n.Position(this.endLineNumber, this.endColumn)
        }, e.prototype.getStartPosition = function() {
          return new n.Position(this.startLineNumber, this.startColumn)
        }, e.prototype.toString = function() {
          return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"
        }, e.prototype.setEndPosition = function(t, n) {
          return new e(this.startLineNumber, this.startColumn, t, n)
        }, e.prototype.setStartPosition = function(t, n) {
          return new e(t, n, this.endLineNumber, this.endColumn)
        }, e.prototype.collapseToStart = function() {
          return e.collapseToStart(this)
        }, e.collapseToStart = function(t) {
          return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn)
        }, e.fromPositions = function(t, n) {
          return void 0 === n && (n = t), new e(t.lineNumber, t.column, n.lineNumber, n.column)
        }, e.lift = function(t) {
          return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null
        }, e.isIRange = function(e) {
          return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn
        }, e.areIntersectingOrTouching = function(e, t) {
          return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn)
        }, e.compareRangesUsingStarts = function(e, t) {
          var n = 0 | e.startLineNumber,
            r = 0 | t.startLineNumber;
          if (n === r) {
            var i = 0 | e.startColumn,
              o = 0 | t.startColumn;
            if (i === o) {
              var s = 0 | e.endLineNumber,
                a = 0 | t.endLineNumber;
              if (s === a) {
                return (0 | e.endColumn) - (0 | t.endColumn)
              }
              return s - a
            }
            return i - o
          }
          return n - r
        }, e.compareRangesUsingEnds = function(e, t) {
          return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber
        }, e.spansMultipleLines = function(e) {
          return e.endLineNumber > e.startLineNumber
        }, e
      }();
      t.Range = r
    }), define(e[96], t([1, 0]), function(e, t) {
      "use strict";

      function n(e) {
        return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e, t, n) {
          for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++) r[i] = n;
          this._data = r, this.rows = e, this.cols = t
        }
        return e.prototype.get = function(e, t) {
          return this._data[e * this.cols + t]
        }, e.prototype.set = function(e, t, n) {
          this._data[e * this.cols + t] = n
        }, e
      }();
      t.Uint8Matrix = r;
      ! function(e) {
        e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER",
          e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32"
      }(t.Constants || (t.Constants = {})), t.toUint8 = function(e) {
        return e < 0 ? 0 : e > 255 ? 255 : 0 | e
      }, t.toUint32 = n, t.toUint32Array = function(e) {
        for (var t = e.length, r = new Uint32Array(t), i = 0; i < t; i++) r[i] = n(e[i]);
        return r
      }
    }), define(e[26], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full"
      }(t.OverviewRulerLane || (t.OverviewRulerLane = {}));
      ! function(e) {
        e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF"
      }(t.EndOfLinePreference || (t.EndOfLinePreference = {}));
      ! function(e) {
        e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF"
      }(t.DefaultEndOfLine || (t.DefaultEndOfLine = {}));
      ! function(e) {
        e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF"
      }(t.EndOfLineSequence || (t.EndOfLineSequence = {}));
      var n = function() {
        function e(e) {
          this.tabSize = 0 | e.tabSize,
            this.insertSpaces = Boolean(e.insertSpaces), this.defaultEOL = 0 | e.defaultEOL, this.trimAutoWhitespace = Boolean(e.trimAutoWhitespace)
        }
        return e.prototype.equals = function(e) {
          return this.tabSize === e.tabSize && this.insertSpaces === e.insertSpaces && this.defaultEOL === e.defaultEOL && this.trimAutoWhitespace === e.trimAutoWhitespace
        }, e.prototype.createChangeEvent = function(e) {
          return {
            tabSize: this.tabSize !== e.tabSize,
            insertSpaces: this.insertSpaces !== e.insertSpaces,
            trimAutoWhitespace: this.trimAutoWhitespace !== e.trimAutoWhitespace
          }
        }, e
      }();
      t.TextModelResolvedOptions = n;
      var r = function() {
        return function(e, t) {
          this.range = e, this.matches = t
        }
      }();
      t.FindMatch = r;
      ! function(e) {
        e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter"
      }(t.TrackedRangeStickiness || (t.TrackedRangeStickiness = {}));
      var i = function() {
        return function(e, t, n, r) {
          this.reverseEdits = e,
            this.rawChanges = t, this.changes = n, this.trimAutoWhitespaceLineNumbers = r
        }
      }();
      t.ApplyEditsResult = i
    }), define(e[30], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?", t.DEFAULT_WORD_REGEXP = function(e) {
        void 0 === e && (e = "");
        for (var n = "(-?\\d*\\.\\d\\w*)|([^", r = 0; r < t.USUAL_WORD_SEPARATORS.length; r++) e.indexOf(t.USUAL_WORD_SEPARATORS[r]) >= 0 || (n += "\\" + t.USUAL_WORD_SEPARATORS[r]);
        return n += "\\s]+)", new RegExp(n, "g")
      }(), t.ensureValidWordDefinition = function(e) {
        var n = t.DEFAULT_WORD_REGEXP;
        if (e && e instanceof RegExp)
          if (e.global) n = e;
          else {
            var r = "g";
            e.ignoreCase && (r += "i"), e.multiline && (r += "m"), n = new RegExp(e.source, r)
          }
        return n.lastIndex = 0, n
      }, t.getWordAtText = function(e, t, n, r) {
        t.lastIndex = 0;
        var i = t.exec(n);
        if (!i) return null;
        var o = i[0].indexOf(" ") >= 0 ? function(e, t, n, r) {
          var i = e - 1 - r;
          t.lastIndex = 0;
          for (var o; o = t.exec(n);) {
            if (o.index > i) return null;
            if (t.lastIndex >= i) return {
              word: o[0],
              startColumn: r + 1 + o.index,
              endColumn: r + 1 + t.lastIndex
            }
          }
          return null
        }(e, t, n, r) : function(e, t, n, r) {
          var i = e - 1 - r,
            o = n.lastIndexOf(" ", i - 1) + 1,
            s = n.indexOf(" ", i); - 1 === s && (s = n.length), t.lastIndex = o;
          for (var a; a = t.exec(n);)
            if (a.index <= i && t.lastIndex >= i) return {
              word: a[0],
              startColumn: r + 1 + a.index,
              endColumn: r + 1 + t.lastIndex
            };
          return null
        }(e, t, n, r);
        return t.lastIndex = 0, o
      }
    }), define(e[25], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent"
      }(t.IndentAction || (t.IndentAction = {}));
      var n = function() {
        function e(e) {
          if (this.open = e.open, this.close = e.close, this._standardTokenMask = 0, Array.isArray(e.notIn))
            for (var t = 0, n = e.notIn.length; t < n; t++) {
              switch (e.notIn[t]) {
                case "string":
                  this._standardTokenMask |= 2;
                  break;
                case "comment":
                  this._standardTokenMask |= 1;
                  break;
                case "regex":
                  this._standardTokenMask |= 4
              }
            }
        }
        return e.prototype.isOK = function(e) {
          return 0 == (this._standardTokenMask & e)
        }, e
      }();
      t.StandardAutoClosingPairConditional = n
    }), define(e[48], t([1, 0, 28]), function(e, t, n) {
      "use strict";

      function r(e, t, i) {
        if (Array.isArray(e)) {
          for (var o = 0, s = 0, a = e; s < a.length; s++) {
            var u = r(a[s], t, i);
            if (10 === u) return u;
            u > o && (o = u)
          }
          return o
        }
        if ("string" == typeof e) return "*" === e ? 5 : e === i ? 10 : 0;
        if (e) {
          var c = e.language,
            l = e.pattern,
            d = e.scheme,
            o = 0;
          if (d)
            if (d === t.scheme) o = 10;
            else {
              if ("*" !== d) return 0;
              o = 5
            }
          if (c)
            if (c === i) o = 10;
            else {
              if ("*" !== c) return 0;
              o = Math.max(o, 5)
            }
          if (l) {
            if (l !== t.fsPath && !n.match(l, t.fsPath)) return 0;
            o = 10
          }
          return o
        }
        return 0
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.score = r
    }), define(e[105], t([1, 0, 4, 48]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e() {
          this._clock = 0, this._entries = [], this._onDidChange = new n.Emitter
        }
        return Object.defineProperty(e.prototype, "onDidChange", {
          get: function() {
            return this._onDidChange.event
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.register = function(e, t) {
          var n = this,
            r = {
              selector: e,
              provider: t,
              _score: -1,
              _time: this._clock++
            };
          return this._entries.push(r), this._lastCandidate = void 0,
            this._onDidChange.fire(this._entries.length), {
              dispose: function() {
                if (r) {
                  var e = n._entries.indexOf(r);
                  e >= 0 && (n._entries.splice(e, 1), n._lastCandidate = void 0, n._onDidChange.fire(n._entries.length), r = void 0)
                }
              }
            }
        }, e.prototype.has = function(e) {
          return this.all(e).length > 0
        }, e.prototype.all = function(e) {
          if (!e || e.isTooLargeForHavingARichMode()) return [];
          this._updateScores(e);
          for (var t = [], n = 0, r = this._entries; n < r.length; n++) {
            var i = r[n];
            i._score > 0 && t.push(i.provider)
          }
          return t
        }, e.prototype.ordered = function(e) {
          var t = [];
          return this._orderedForEach(e, function(e) {
            return t.push(e.provider)
          }), t
        }, e.prototype.orderedGroups = function(e) {
          var t, n, r = [];
          return this._orderedForEach(e, function(e) {
            t && n === e._score ? t.push(e.provider) : (n = e._score, t = [e.provider], r.push(t))
          }), r
        }, e.prototype._orderedForEach = function(e, t) {
          if (e && !e.isTooLargeForHavingARichMode()) {
            this._updateScores(e);
            for (var n = 0; n < this._entries.length; n++) {
              var r = this._entries[n];
              r._score > 0 && t(r)
            }
          }
        }, e.prototype._updateScores = function(t) {
          var n = {
            uri: t.uri.toString(),
            language: t.getLanguageIdentifier().language
          };
          if (!this._lastCandidate || this._lastCandidate.language !== n.language || this._lastCandidate.uri !== n.uri) {
            this._lastCandidate = n;
            for (var i = 0, o = this._entries; i < o.length; i++) {
              var s = o[i];
              s._score = r.score(s.selector, t.uri, t.getLanguageIdentifier().language)
            }
            this._entries.sort(e._compareByScoreAndTime)
          }
        }, e._compareByScoreAndTime = function(e, t) {
          return e._score < t._score ? 1 : e._score > t._score ? -1 : e._time < t._time ? 1 : e._time > t._time ? -1 : 0
        }, e
      }();
      t.default = i
    }), define(e[107], t([1, 0, 25]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          e.autoClosingPairs ? this._autoClosingPairs = e.autoClosingPairs.map(function(e) {
            return new n.StandardAutoClosingPairConditional(e)
          }) : e.brackets ? this._autoClosingPairs = e.brackets.map(function(e) {
            return new n.StandardAutoClosingPairConditional({
              open: e[0],
              close: e[1]
            })
          }) : this._autoClosingPairs = [], this._surroundingPairs = e.surroundingPairs || this._autoClosingPairs
        }
        return e.prototype.getAutoClosingPairs = function() {
          return this._autoClosingPairs
        }, e.prototype.shouldAutoClosePair = function(e, t, n) {
          if (0 === t.getTokenCount()) return !0;
          for (var r = t.findTokenIndexAtOffset(n - 2), i = t.getStandardTokenType(r), o = 0; o < this._autoClosingPairs.length; ++o) {
            var s = this._autoClosingPairs[o];
            if (s.open === e) return s.isOK(i)
          }
          return !1
        }, e.prototype.getSurroundingPairs = function() {
          return this._surroundingPairs
        }, e
      }();
      t.CharacterPairSupport = r
    }), define(e[108], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.INCREASE_MASK = 1] = "INCREASE_MASK", e[e.DECREASE_MASK = 2] = "DECREASE_MASK", e[e.INDENT_NEXTLINE_MASK = 4] = "INDENT_NEXTLINE_MASK", e[e.UNINDENT_MASK = 8] = "UNINDENT_MASK"
      }(t.IndentConsts || (t.IndentConsts = {}));
      var n = function() {
        function e(e) {
          this._indentationRules = e
        }
        return e.prototype.shouldIncrease = function(e) {
            return !!(this._indentationRules && this._indentationRules.increaseIndentPattern && this._indentationRules.increaseIndentPattern.test(e))
          },
          e.prototype.shouldDecrease = function(e) {
            return !!(this._indentationRules && this._indentationRules.decreaseIndentPattern && this._indentationRules.decreaseIndentPattern.test(e))
          }, e.prototype.shouldIndentNextLine = function(e) {
            return !!(this._indentationRules && this._indentationRules.indentNextLinePattern && this._indentationRules.indentNextLinePattern.test(e))
          }, e.prototype.shouldIgnore = function(e) {
            return !!(this._indentationRules && this._indentationRules.unIndentedLinePattern && this._indentationRules.unIndentedLinePattern.test(e))
          }, e.prototype.getIndentMetadata = function(e) {
            var t = 0;
            return this.shouldIncrease(e) && (t += 1), this.shouldDecrease(e) && (t += 2), this.shouldIndentNextLine(e) && (t += 4), this.shouldIgnore(e) && (t += 8), t
          }, e
      }();
      t.IndentRulesSupport = n
    }), define(e[109], t([1, 0, 11, 8, 25]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function() {
        function e(t) {
          (t = t || {}).brackets = t.brackets || [
            ["(", ")"],
            ["{", "}"],
            ["[", "]"]
          ], this._brackets = t.brackets.map(function(t) {
            return {
              open: t[0],
              openRegExp: e._createOpenBracketRegExp(t[0]),
              close: t[1],
              closeRegExp: e._createCloseBracketRegExp(t[1])
            }
          }), this._regExpRules = t.regExpRules || []
        }
        return e.prototype.onEnter = function(e, t, n) {
            for (var r = 0, o = this._regExpRules.length; r < o; r++) {
              var s = this._regExpRules[r];
              if (s.beforeText.test(t)) {
                if (!s.afterText) return s.action;
                if (s.afterText.test(n)) return s.action
              }
            }
            if (t.length > 0 && n.length > 0)
              for (var r = 0, o = this._brackets.length; r < o; r++) {
                if ((a = this._brackets[r]).openRegExp.test(t) && a.closeRegExp.test(n)) return {
                  indentAction: i.IndentAction.IndentOutdent
                }
              }
            if (t.length > 0)
              for (var r = 0, o = this._brackets.length; r < o; r++) {
                var a = this._brackets[r];
                if (a.openRegExp.test(t)) return {
                  indentAction: i.IndentAction.Indent
                }
              }
            return null
          }, e._createOpenBracketRegExp = function(t) {
            var n = r.escapeRegExpCharacters(t);
            return /\B/.test(n.charAt(0)) || (n = "\\b" + n), n += "\\s*$", e._safeRegExp(n)
          }, e._createCloseBracketRegExp = function(t) {
            var n = r.escapeRegExpCharacters(t);
            return /\B/.test(n.charAt(n.length - 1)) || (n += "\\b"), n = "^\\s*" + n, e._safeRegExp(n)
          },
          e._safeRegExp = function(e) {
            try {
              return new RegExp(e)
            } catch (e) {
              return n.onUnexpectedError(e), null
            }
          }, e
      }();
      t.OnEnterSupport = o
    }), define(e[59], t([1, 0, 8, 50]), function(e, t, n, r) {
      "use strict";

      function i(e, t) {
        var n = {};
        return function(r) {
          var i = e(r);
          return n.hasOwnProperty(i) || (n[i] = t(r)), n[i]
        }
      }

      function o(e) {
        var t = "(" + e.map(n.escapeRegExpCharacters).join(")|(") + ")";
        return n.createRegExp(t, !0)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {
        return function(e, t, n, r, i) {
          this.languageIdentifier = e, this.open = t, this.close = n, this.forwardRegex = r, this.reversedRegex = i
        }
      }();
      t.RichEditBracket = s;
      var a = function() {
        return function(e, t) {
          var n = this;
          this.brackets = t.map(function(t) {
            return new s(e, t[0], t[1], u({
              open: t[0],
              close: t[1]
            }), c({
              open: t[0],
              close: t[1]
            }))
          }), this.forwardRegex = l(this.brackets), this.reversedRegex = d(this.brackets), this.textIsBracket = {}, this.textIsOpenBracket = {};
          var r = 0;
          this.brackets.forEach(function(e) {
            n.textIsBracket[e.open.toLowerCase()] = e, n.textIsBracket[e.close.toLowerCase()] = e,
              n.textIsOpenBracket[e.open.toLowerCase()] = !0, n.textIsOpenBracket[e.close.toLowerCase()] = !1, r = Math.max(r, e.open.length), r = Math.max(r, e.close.length)
          }), this.maxBracketLength = r
        }
      }();
      t.RichEditBrackets = a;
      var u = i(function(e) {
          return e.open + ";" + e.close
        }, function(e) {
          return o([e.open, e.close])
        }),
        c = i(function(e) {
          return e.open + ";" + e.close
        }, function(e) {
          return o([f(e.open), f(e.close)])
        }),
        l = i(function(e) {
          return e.map(function(e) {
            return e.open + ";" + e.close
          }).join(";")
        }, function(e) {
          var t = [];
          return e.forEach(function(e) {
            t.push(e.open), t.push(e.close)
          }), o(t)
        }),
        d = i(function(e) {
          return e.map(function(e) {
            return e.open + ";" + e.close
          }).join(";")
        }, function(e) {
          var t = [];
          return e.forEach(function(e) {
            t.push(f(e.open)), t.push(f(e.close))
          }), o(t)
        }),
        f = function() {
          var e = null,
            t = null;
          return function(n) {
            return e !== n && (t = function(e) {
              for (var t = "", n = e.length - 1; n >= 0; n--) t += e.charAt(n);
              return t
            }(e = n)), t
          }
        }(),
        p = function() {
          function e() {}
          return e._findPrevBracketInText = function(e, t, n, i) {
            var o = n.match(e);
            if (!o) return null;
            var s = n.length - o.index,
              a = o[0].length,
              u = i + s;
            return new r.Range(t, u - a + 1, t, u + 1)
          }, e.findPrevBracketInToken = function(e, t, n, r, i) {
            var o = f(n).substring(n.length - i, n.length - r);
            return this._findPrevBracketInText(e, t, o, r)
          }, e.findNextBracketInText = function(e, t, n, i) {
            var o = n.match(e);
            if (!o) return null;
            var s = o.index,
              a = o[0].length,
              u = i + s;
            return new r.Range(t, u + 1, t, u + 1 + a)
          }, e.findNextBracketInToken = function(e, t, n, r, i) {
            var o = n.substring(r, i);
            return this.findNextBracketInText(e, t, o, r)
          }, e
        }();
      t.BracketsUtils = p
    }), define(e[115], t([1, 0, 4]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e() {
          this._onDidChange = new n.Emitter, this.onDidChange = this._onDidChange.event, this._map = Object.create(null), this._colorMap = null
        }
        return e.prototype.fire = function(e) {
            this._onDidChange.fire({
              changedLanguages: e,
              changedColorMap: !1
            })
          }, e.prototype.register = function(e, t) {
            var n = this;
            return this._map[e] = t, this.fire([e]), {
              dispose: function() {
                n._map[e] === t && (delete n._map[e], n.fire([e]))
              }
            }
          },
          e.prototype.get = function(e) {
            return this._map[e] || null
          }, e.prototype.setColorMap = function(e) {
            this._colorMap = e, this._onDidChange.fire({
              changedLanguages: Object.keys(this._map),
              changedColorMap: !0
            })
          }, e.prototype.getColorMap = function() {
            return this._colorMap
          }, e.prototype.getDefaultBackground = function() {
            return this._colorMap[2]
          }, e
      }();
      t.TokenizationRegistryImpl = r
    }), define(e[40], t([1, 0, 105, 115]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText"
      }(t.LanguageId || (t.LanguageId = {}));
      var i = function() {
        return function(e, t) {
          this.language = e, this.id = t
        }
      }();
      t.LanguageIdentifier = i;
      ! function(e) {
        e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline"
      }(t.FontStyle || (t.FontStyle = {}));
      ! function(e) {
        e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground"
      }(t.ColorId || (t.ColorId = {}));
      ! function(e) {
        e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment",
          e[e.String = 2] = "String", e[e.RegEx = 4] = "RegEx"
      }(t.StandardTokenType || (t.StandardTokenType = {}));
      ! function(e) {
        e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 1792] = "TOKEN_TYPE_MASK", e[e.FONT_STYLE_MASK = 14336] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 8372224] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4286578688] = "BACKGROUND_MASK", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 14] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 23] = "BACKGROUND_OFFSET"
      }(t.MetadataConsts || (t.MetadataConsts = {}));
      var o = function() {
        function e() {}
        return e.getLanguageId = function(e) {
          return (255 & e) >>> 0
        }, e.getTokenType = function(e) {
          return (1792 & e) >>> 8
        }, e.getFontStyle = function(e) {
          return (14336 & e) >>> 11
        }, e.getForeground = function(e) {
          return (8372224 & e) >>> 14
        }, e.getBackground = function(e) {
          return (4286578688 & e) >>> 23
        }, e.getClassNameFromMetadata = function(e) {
          var t = "mtk" + this.getForeground(e),
            n = this.getFontStyle(e);
          return 1 & n && (t += " mtki"),
            2 & n && (t += " mtkb"), 4 & n && (t += " mtku"), t
        }, e.getInlineStyleFromMetadata = function(e, t) {
          var n = this.getForeground(e),
            r = this.getFontStyle(e),
            i = "color: " + t[n] + ";";
          return 1 & r && (i += "font-style: italic;"), 2 & r && (i += "font-weight: bold;"), 4 & r && (i += "text-decoration: underline;"), i
        }, e
      }();
      t.TokenMetadata = o;
      ! function(e) {
        e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter"
      }(t.SuggestTriggerKind || (t.SuggestTriggerKind = {}));
      ! function(e) {
        e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write"
      }(t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
      var s;
      ! function(e) {
        e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array",
          e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter"
      }(s = t.SymbolKind || (t.SymbolKind = {})), t.symbolKindToCssClass = function() {
          var e = Object.create(null);
          return e[s.File] = "file", e[s.Module] = "module", e[s.Namespace] = "namespace", e[s.Package] = "package", e[s.Class] = "class", e[s.Method] = "method", e[s.Property] = "property", e[s.Field] = "field", e[s.Constructor] = "constructor", e[s.Enum] = "enum", e[s.Interface] = "interface", e[s.Function] = "function", e[s.Variable] = "variable", e[s.Constant] = "constant", e[s.String] = "string", e[s.Number] = "number", e[s.Boolean] = "boolean", e[s.Array] = "array", e[s.Object] = "object", e[s.Key] = "key", e[s.Null] = "null", e[s.EnumMember] = "enum-member", e[s.Struct] = "struct", e[s.Event] = "event", e[s.Operator] = "operator", e[s.TypeParameter] = "type-parameter",
            function(t) {
              return e[t] || "property"
            }
        }(), t.ReferenceProviderRegistry = new n.default, t.RenameProviderRegistry = new n.default,
        t.SuggestRegistry = new n.default, t.SignatureHelpProviderRegistry = new n.default, t.HoverProviderRegistry = new n.default, t.DocumentSymbolProviderRegistry = new n.default, t.DocumentHighlightProviderRegistry = new n.default, t.DefinitionProviderRegistry = new n.default, t.ImplementationProviderRegistry = new n.default, t.TypeDefinitionProviderRegistry = new n.default, t.CodeLensProviderRegistry = new n.default, t.CodeActionProviderRegistry = new n.default, t.DocumentFormattingEditProviderRegistry = new n.default, t.DocumentRangeFormattingEditProviderRegistry = new n.default, t.OnTypeFormattingEditProviderRegistry = new n.default, t.LinkProviderRegistry = new n.default, t.ColorProviderRegistry = new n.default, t.TokenizationRegistry = new r.TokenizationRegistryImpl
    }), define(e[46], t([1, 0, 40]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createScopedLineTokens = function(e, t) {
        for (var n = e.getCount(), i = e.findTokenIndexAtOffset(t), o = e.getLanguageId(i), s = i; s + 1 < n && e.getLanguageId(s + 1) === o;) s++;
        for (var a = i; a > 0 && e.getLanguageId(a - 1) === o;) a--;
        return new r(e, o, a, s + 1, e.getStartOffset(a), e.getEndOffset(s))
      };
      var r = function() {
        function e(e, t, n, r, i, o) {
          this._actual = e, this.languageId = t, this._firstTokenIndex = n, this._lastTokenIndex = r, this.firstCharOffset = i, this._lastCharOffset = o
        }
        return e.prototype.getLineContent = function() {
          return this._actual.getLineContent().substring(this.firstCharOffset, this._lastCharOffset)
        }, e.prototype.getTokenCount = function() {
          return this._lastTokenIndex - this._firstTokenIndex
        }, e.prototype.findTokenIndexAtOffset = function(e) {
          return this._actual.findTokenIndexAtOffset(e + this.firstCharOffset) - this._firstTokenIndex
        }, e.prototype.getStandardTokenType = function(e) {
          return this._actual.getStandardTokenType(e + this._firstTokenIndex)
        }, e
      }();
      t.ScopedLineTokens = r;
      var i;
      ! function(e) {
        e[e.value = 7] = "value"
      }(i || (i = {})), t.ignoreBracketsInToken = function(e) {
        return 0 != (7 & e)
      }
    }), define(e[121], t([1, 0, 46, 59, 25]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function() {
        function e(e, t, n) {
          n = n || {}, this._richEditBrackets = e, this._complexAutoClosePairs = t.filter(function(e) {
            return e.open.length > 1 && !!e.close
          }).map(function(e) {
            return new i.StandardAutoClosingPairConditional(e)
          }), n.docComment && this._complexAutoClosePairs.push(new i.StandardAutoClosingPairConditional({
            open: n.docComment.open,
            close: n.docComment.close
          }))
        }
        return e.prototype.getElectricCharacters = function() {
          var e = [];
          if (this._richEditBrackets)
            for (var t = 0, n = this._richEditBrackets.brackets.length; t < n; t++) {
              var r = this._richEditBrackets.brackets[t],
                i = r.close.charAt(r.close.length - 1);
              e.push(i)
            }
          for (var o = 0, s = this._complexAutoClosePairs; o < s.length; o++) {
            var a = s[o];
            e.push(a.open.charAt(a.open.length - 1))
          }
          return e = e.filter(function(e, t, n) {
            return n.indexOf(e) === t
          })
        }, e.prototype.onElectricCharacter = function(e, t, n) {
          return this._onElectricAutoClose(e, t, n) || this._onElectricAutoIndent(e, t, n)
        }, e.prototype._onElectricAutoIndent = function(e, t, i) {
          if (!this._richEditBrackets || 0 === this._richEditBrackets.brackets.length) return null;
          var o = t.findTokenIndexAtOffset(i - 1);
          if (n.ignoreBracketsInToken(t.getStandardTokenType(o))) return null;
          var s = this._richEditBrackets.reversedRegex,
            a = t.getLineContent().substring(0, i - 1) + e,
            u = r.BracketsUtils.findPrevBracketInToken(s, 1, a, 0, a.length);
          if (!u) return null;
          var c = a.substring(u.startColumn - 1, u.endColumn - 1);
          c = c.toLowerCase();
          if (this._richEditBrackets.textIsOpenBracket[c]) return null;
          var l = a.substring(0, u.startColumn - 1);
          return /^\s*$/.test(l) ? {
            matchOpenBracket: c
          } : null
        }, e.prototype._onElectricAutoClose = function(e, t, n) {
          if (!this._complexAutoClosePairs.length) return null;
          for (var r = t.getLineContent(), i = 0, o = this._complexAutoClosePairs.length; i < o; i++) {
            var s = this._complexAutoClosePairs[i];
            if (e === s.open.charAt(s.open.length - 1)) {
              if (r.substring(r.length - s.open.length + 1) + e === s.open) {
                var a = t.findTokenIndexAtOffset(n - 1),
                  u = t.getStandardTokenType(a);
                if (s.isOK(u) && !(r.indexOf(s.close, n - 1) >= 0)) return {
                  appendText: s.close
                }
              }
            }
          }
          return null
        }, e
      }();
      t.BracketElectricCharacterSupport = o
    }),
    define(e[123], t([1, 0, 107, 121, 109, 108, 59, 4, 11, 8, 30, 46, 50, 25]), function(e, t, n, r, i, o, s, a, u, c, l, d, f, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var h = function() {
        function e(t, r, i) {
          this._languageIdentifier = t, this._brackets = null, this._electricCharacter = null;
          var s = null;
          r && (s = r._conf), this._conf = e._mergeConf(s, i), this.onEnter = e._handleOnEnter(this._conf), this.comments = e._handleComments(this._conf), this.characterPair = new n.CharacterPairSupport(this._conf), this.wordDefinition = this._conf.wordPattern || l.DEFAULT_WORD_REGEXP, this.indentationRules = this._conf.indentationRules, this._conf.indentationRules && (this.indentRulesSupport = new o.IndentRulesSupport(this._conf.indentationRules)), this.foldingRules = this._conf.folding || {}
        }
        return Object.defineProperty(e.prototype, "brackets", {
            get: function() {
              return !this._brackets && this._conf.brackets && (this._brackets = new s.RichEditBrackets(this._languageIdentifier, this._conf.brackets)), this._brackets
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "electricCharacter", {
            get: function() {
              if (!this._electricCharacter) {
                var e = [];
                this._conf.autoClosingPairs ? e = this._conf.autoClosingPairs : this._conf.brackets && (e = this._conf.brackets.map(function(e) {
                  return {
                    open: e[0],
                    close: e[1]
                  }
                })), this._electricCharacter = new r.BracketElectricCharacterSupport(this.brackets, e, this._conf.__electricCharacterSupport)
              }
              return this._electricCharacter
            },
            enumerable: !0,
            configurable: !0
          }), e._mergeConf = function(e, t) {
            return {
              comments: e ? t.comments || e.comments : t.comments,
              brackets: e ? t.brackets || e.brackets : t.brackets,
              wordPattern: e ? t.wordPattern || e.wordPattern : t.wordPattern,
              indentationRules: e ? t.indentationRules || e.indentationRules : t.indentationRules,
              onEnterRules: e ? t.onEnterRules || e.onEnterRules : t.onEnterRules,
              autoClosingPairs: e ? t.autoClosingPairs || e.autoClosingPairs : t.autoClosingPairs,
              surroundingPairs: e ? t.surroundingPairs || e.surroundingPairs : t.surroundingPairs,
              folding: e ? t.folding || e.folding : t.folding,
              __electricCharacterSupport: e ? t.__electricCharacterSupport || e.__electricCharacterSupport : t.__electricCharacterSupport
            }
          }, e._handleOnEnter = function(e) {
            var t = {},
              n = !0;
            return e.brackets && (n = !1, t.brackets = e.brackets), e.indentationRules && (n = !1), e.onEnterRules && (n = !1, t.regExpRules = e.onEnterRules), n ? null : new i.OnEnterSupport(t)
          }, e._handleComments = function(e) {
            var t = e.comments;
            if (!t) return null;
            var n = {};
            if (t.lineComment && (n.lineCommentToken = t.lineComment), t.blockComment) {
              var r = t.blockComment,
                i = r[0],
                o = r[1];
              n.blockCommentStartToken = i, n.blockCommentEndToken = o
            }
            return n
          }, e
      }();
      t.RichEditSupport = h;
      var g = function() {
        return function() {}
      }();
      t.LanguageConfigurationChangeEvent = g;
      var m = function() {
        function e() {
          this._onDidChange = new a.Emitter, this.onDidChange = this._onDidChange.event, this._entries = []
        }
        return e.prototype.register = function(e, t) {
            var n = this,
              r = this._getRichEditSupport(e.id),
              i = new h(e, r, t);
            return this._entries[e.id] = i, this._onDidChange.fire({
              languageIdentifier: e
            }), {
              dispose: function() {
                n._entries[e.id] === i && (n._entries[e.id] = r,
                  n._onDidChange.fire({
                    languageIdentifier: e
                  }))
              }
            }
          }, e.prototype._getRichEditSupport = function(e) {
            return this._entries[e] || null
          }, e.prototype.getIndentationRules = function(e) {
            var t = this._entries[e];
            return t ? t.indentationRules || null : null
          }, e.prototype._getElectricCharacterSupport = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? t.electricCharacter || null : null
          }, e.prototype.getElectricCharacters = function(e) {
            var t = this._getElectricCharacterSupport(e);
            return t ? t.getElectricCharacters() : []
          }, e.prototype.onElectricCharacter = function(e, t, n) {
            var r = d.createScopedLineTokens(t, n - 1),
              i = this._getElectricCharacterSupport(r.languageId);
            return i ? i.onElectricCharacter(e, r, n - r.firstCharOffset) : null
          }, e.prototype.getComments = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? t.comments || null : null
          }, e.prototype._getCharacterPairSupport = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? t.characterPair || null : null
          }, e.prototype.getAutoClosingPairs = function(e) {
            var t = this._getCharacterPairSupport(e);
            return t ? t.getAutoClosingPairs() : []
          }, e.prototype.getSurroundingPairs = function(e) {
            var t = this._getCharacterPairSupport(e);
            return t ? t.getSurroundingPairs() : []
          }, e.prototype.shouldAutoClosePair = function(e, t, n) {
            var r = d.createScopedLineTokens(t, n - 1),
              i = this._getCharacterPairSupport(r.languageId);
            return !!i && i.shouldAutoClosePair(e, r, n - r.firstCharOffset)
          }, e.prototype.getWordDefinition = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? l.ensureValidWordDefinition(t.wordDefinition || null) : l.ensureValidWordDefinition(null)
          }, e.prototype.getFoldingRules = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? t.foldingRules : {}
          }, e.prototype.getIndentRulesSupport = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? t.indentRulesSupport || null : null
          }, e.prototype.getPrecedingValidLine = function(e, t, n) {
            var r = e.getLanguageIdAtPosition(t, 0);
            if (t > 1) {
              var i = t - 1,
                o = -1;
              for (i = t - 1; i >= 1; i--) {
                if (e.getLanguageIdAtPosition(i, 0) !== r) return o;
                var s = e.getLineContent(i);
                if (!n.shouldIgnore(s) && !/^\s+$/.test(s) && "" !== s) return i;
                o = i
              }
            }
            return -1
          },
          e.prototype.getInheritIndentForLine = function(e, t, n) {
            void 0 === n && (n = !0);
            var r = this.getIndentRulesSupport(e.getLanguageIdentifier().id);
            if (!r) return null;
            if (t <= 1) return {
              indentation: "",
              action: null
            };
            var i = this.getPrecedingValidLine(e, t, r);
            if (i < 0) return null;
            if (i < 1) return {
              indentation: "",
              action: null
            };
            var o = e.getLineContent(i);
            if (r.shouldIncrease(o) || r.shouldIndentNextLine(o)) return {
              indentation: c.getLeadingWhitespace(o),
              action: p.IndentAction.Indent,
              line: i
            };
            if (r.shouldDecrease(o)) return {
              indentation: c.getLeadingWhitespace(o),
              action: null,
              line: i
            };
            if (1 === i) return {
              indentation: c.getLeadingWhitespace(e.getLineContent(i)),
              action: null,
              line: i
            };
            var s = i - 1,
              a = r.getIndentMetadata(e.getLineContent(s));
            if (!(3 & a) && 4 & a) {
              for (var u = 0, l = s - 1; l > 0; l--)
                if (!r.shouldIndentNextLine(e.getLineContent(l))) {
                  u = l;
                  break
                }
              return {
                indentation: c.getLeadingWhitespace(e.getLineContent(u + 1)),
                action: null,
                line: u + 1
              }
            }
            if (n) return {
              indentation: c.getLeadingWhitespace(e.getLineContent(i)),
              action: null,
              line: i
            };
            for (l = i; l > 0; l--) {
              var d = e.getLineContent(l);
              if (r.shouldIncrease(d)) return {
                indentation: c.getLeadingWhitespace(d),
                action: p.IndentAction.Indent,
                line: l
              };
              if (r.shouldIndentNextLine(d)) {
                for (var u = 0, f = l - 1; f > 0; f--)
                  if (!r.shouldIndentNextLine(e.getLineContent(l))) {
                    u = f;
                    break
                  }
                return {
                  indentation: c.getLeadingWhitespace(e.getLineContent(u + 1)),
                  action: null,
                  line: u + 1
                }
              }
              if (r.shouldDecrease(d)) return {
                indentation: c.getLeadingWhitespace(d),
                action: null,
                line: l
              }
            }
            return {
              indentation: c.getLeadingWhitespace(e.getLineContent(1)),
              action: null,
              line: 1
            }
          }, e.prototype.getGoodIndentForLine = function(e, t, n, r) {
            var i = this.getIndentRulesSupport(t);
            if (!i) return null;
            var o = this.getInheritIndentForLine(e, n),
              s = e.getLineContent(n);
            if (o) {
              var a = o.line;
              if (void 0 !== a) {
                var l = this._getOnEnterSupport(t),
                  d = null;
                try {
                  d = l.onEnter("", e.getLineContent(a), "")
                } catch (e) {
                  u.onUnexpectedError(e)
                }
                if (d) {
                  var f = c.getLeadingWhitespace(e.getLineContent(a));
                  return d.removeText && (f = f.substring(0, f.length - d.removeText)),
                    d.indentAction === p.IndentAction.Indent || d.indentAction === p.IndentAction.IndentOutdent ? f = r.shiftIndent(f) : d.indentAction === p.IndentAction.Outdent && (f = r.unshiftIndent(f)), i.shouldDecrease(s) && (f = r.unshiftIndent(f)), d.appendText && (f += d.appendText), c.getLeadingWhitespace(f)
                }
              }
              return i.shouldDecrease(s) ? o.action === p.IndentAction.Indent ? o.indentation : r.unshiftIndent(o.indentation) : o.action === p.IndentAction.Indent ? r.shiftIndent(o.indentation) : o.indentation
            }
            return null
          }, e.prototype.getIndentForEnter = function(e, t, n, r) {
            e.forceTokenization(t.startLineNumber);
            var i, o, s = e.getLineTokens(t.startLineNumber),
              a = d.createScopedLineTokens(s, t.startColumn - 1),
              u = a.getLineContent(),
              l = !1;
            if (a.firstCharOffset > 0 && s.getLanguageId(0) !== a.languageId ? (l = !0, i = u.substr(0, t.startColumn - 1 - a.firstCharOffset)) : i = s.getLineContent().substring(0, t.startColumn - 1), t.isEmpty()) o = u.substr(t.startColumn - 1 - a.firstCharOffset);
            else {
              o = this.getScopedLineTokens(e, t.endLineNumber, t.endColumn).getLineContent().substr(t.endColumn - 1 - a.firstCharOffset)
            }
            var f = this.getIndentRulesSupport(a.languageId);
            if (!f) return null;
            var h = i,
              g = c.getLeadingWhitespace(i);
            if (!r && !l) {
              var m = this.getInheritIndentForLine(e, t.startLineNumber);
              f.shouldDecrease(i) && m && (g = m.indentation, m.action !== p.IndentAction.Indent && (g = n.unshiftIndent(g))), h = g + c.ltrim(c.ltrim(i, " "), "\t")
            }
            var v = {
                getLineTokens: function(t) {
                  return e.getLineTokens(t)
                },
                getLanguageIdentifier: function() {
                  return e.getLanguageIdentifier()
                },
                getLanguageIdAtPosition: function(t, n) {
                  return e.getLanguageIdAtPosition(t, n)
                },
                getLineContent: function(n) {
                  return n === t.startLineNumber ? h : e.getLineContent(n)
                }
              },
              y = c.getLeadingWhitespace(s.getLineContent()),
              _ = this.getInheritIndentForLine(v, t.startLineNumber + 1);
            if (!_) {
              var b = l ? y : g;
              return {
                beforeEnter: b,
                afterEnter: b
              }
            }
            var C = l ? y : _.indentation;
            return _.action === p.IndentAction.Indent && (C = n.shiftIndent(C)), f.shouldDecrease(o) && (C = n.unshiftIndent(C)), {
              beforeEnter: l ? y : g,
              afterEnter: C
            }
          }, e.prototype.getIndentActionForType = function(e, t, n, r) {
            var i = this.getScopedLineTokens(e, t.startLineNumber, t.startColumn),
              o = this.getIndentRulesSupport(i.languageId);
            if (!o) return null;
            var s, a = i.getLineContent(),
              u = a.substr(0, t.startColumn - 1 - i.firstCharOffset);
            if (t.isEmpty()) s = a.substr(t.startColumn - 1 - i.firstCharOffset);
            else {
              s = this.getScopedLineTokens(e, t.endLineNumber, t.endColumn).getLineContent().substr(t.endColumn - 1 - i.firstCharOffset)
            }
            if (!o.shouldDecrease(u + s) && o.shouldDecrease(u + n + s)) {
              var c = this.getInheritIndentForLine(e, t.startLineNumber, !1);
              if (!c) return null;
              var l = c.indentation;
              return c.action !== p.IndentAction.Indent && (l = r.unshiftIndent(l)), l
            }
            return null
          }, e.prototype.getIndentMetadata = function(e, t) {
            var n = this.getIndentRulesSupport(e.getLanguageIdentifier().id);
            return n ? t < 1 || t > e.getLineCount() ? null : n.getIndentMetadata(e.getLineContent(t)) : null
          }, e.prototype._getOnEnterSupport = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? t.onEnter || null : null
          }, e.prototype.getRawEnterActionAtPosition = function(e, t, n) {
            var r = this.getEnterAction(e, new f.Range(t, n, t, n));
            return r ? r.enterAction : null
          }, e.prototype.getEnterAction = function(e, t) {
            var n = this.getIndentationAtPosition(e, t.startLineNumber, t.startColumn),
              r = this.getScopedLineTokens(e, t.startLineNumber, t.startColumn),
              i = this._getOnEnterSupport(r.languageId);
            if (!i) return null;
            var o, s = r.getLineContent(),
              a = s.substr(0, t.startColumn - 1 - r.firstCharOffset);
            if (t.isEmpty()) o = s.substr(t.startColumn - 1 - r.firstCharOffset);
            else {
              o = this.getScopedLineTokens(e, t.endLineNumber, t.endColumn).getLineContent().substr(t.endColumn - 1 - r.firstCharOffset)
            }
            var c = t.startLineNumber,
              l = "";
            if (c > 1 && 0 === r.firstCharOffset) {
              var d = this.getScopedLineTokens(e, c - 1);
              d.languageId === r.languageId && (l = d.getLineContent())
            }
            var f = null;
            try {
              f = i.onEnter(l, a, o)
            } catch (e) {
              u.onUnexpectedError(e)
            }
            return f ? (f.appendText || (f.indentAction === p.IndentAction.Indent || f.indentAction === p.IndentAction.IndentOutdent ? f.appendText = "\t" : f.appendText = ""), f.removeText && (n = n.substring(0, n.length - f.removeText)), {
              enterAction: f,
              indentation: n
            }) : null
          },
          e.prototype.getIndentationAtPosition = function(e, t, n) {
            var r = e.getLineContent(t),
              i = c.getLeadingWhitespace(r);
            return i.length > n - 1 && (i = i.substring(0, n - 1)), i
          }, e.prototype.getScopedLineTokens = function(e, t, n) {
            e.forceTokenization(t);
            var r = e.getLineTokens(t),
              i = isNaN(n) ? e.getLineMaxColumn(t) - 1 : n - 1;
            return d.createScopedLineTokens(r, i)
          }, e.prototype.getBracketsSupport = function(e) {
            var t = this._getRichEditSupport(e);
            return t ? t.brackets || null : null
          }, e
      }();
      t.LanguageConfigurationRegistryImpl = m, t.LanguageConfigurationRegistry = new m
    }), define(e[132], t([1, 0, 96]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        return function(e, t) {
          this.index = e, this.remainder = t
        }
      }();
      t.PrefixSumIndexOfResult = r;
      var i = function() {
        function e(e) {
          this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1
        }
        return e.prototype.getCount = function() {
          return this.values.length
        }, e.prototype.insertValues = function(e, t) {
          e = n.toUint32(e);
          var r = this.values,
            i = this.prefixSum,
            o = t.length;
          return 0 !== o && (this.values = new Uint32Array(r.length + o), this.values.set(r.subarray(0, e), 0), this.values.set(r.subarray(e), e + o), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
        }, e.prototype.changeValue = function(e, t) {
          return e = n.toUint32(e), t = n.toUint32(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0)
        }, e.prototype.removeValues = function(e, t) {
          e = n.toUint32(e), t = n.toUint32(t);
          var r = this.values,
            i = this.prefixSum;
          if (e >= r.length) return !1;
          var o = r.length - e;
          return t >= o && (t = o), 0 !== t && (this.values = new Uint32Array(r.length - t), this.values.set(r.subarray(0, e), 0), this.values.set(r.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1),
            this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
        }, e.prototype.getTotalValue = function() {
          return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1)
        }, e.prototype.getAccumulatedValue = function(e) {
          return e < 0 ? 0 : (e = n.toUint32(e), this._getAccumulatedValue(e))
        }, e.prototype._getAccumulatedValue = function(e) {
          if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
          var t = this.prefixSumValidIndex[0] + 1;
          0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
          for (var n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
          return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e]
        }, e.prototype.getIndexOf = function(e) {
          e = Math.floor(e), this.getTotalValue();
          for (var t, n, i, o = 0, s = this.values.length - 1; o <= s;)
            if (t = o + (s - o) / 2 | 0, n = this.prefixSum[t], i = n - this.values[t], e < i) s = t - 1;
            else {
              if (!(e >= n)) break;
              o = t + 1
            }
          return new r(t, e - i)
        }, e
      }();
      t.PrefixSumComputer = i;
      var o = function() {
        function e(e) {
          this._cacheAccumulatedValueStart = 0, this._cache = null, this._actual = new i(e), this._bustCache()
        }
        return e.prototype._bustCache = function() {
          this._cacheAccumulatedValueStart = 0, this._cache = null
        }, e.prototype.insertValues = function(e, t) {
          this._actual.insertValues(e, t) && this._bustCache()
        }, e.prototype.changeValue = function(e, t) {
          this._actual.changeValue(e, t) && this._bustCache()
        }, e.prototype.removeValues = function(e, t) {
          this._actual.removeValues(e, t) && this._bustCache()
        }, e.prototype.getTotalValue = function() {
          return this._actual.getTotalValue()
        }, e.prototype.getAccumulatedValue = function(e) {
          return this._actual.getAccumulatedValue(e)
        }, e.prototype.getIndexOf = function(e) {
          if (e = Math.floor(e), null !== this._cache) {
            var t = e - this._cacheAccumulatedValueStart;
            if (t >= 0 && t < this._cache.length) return this._cache[t]
          }
          return this._actual.getIndexOf(e)
        }, e.prototype.warmUpCache = function(e, t) {
          for (var n = [], r = e; r <= t; r++) n[r - e] = this.getIndexOf(r);
          this._cache = n, this._cacheAccumulatedValueStart = e
        }, e
      }();
      t.PrefixSumComputerWithCache = o
    }),
    define(e[135], t([1, 0, 132, 51]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e, t, n, r) {
          this._uri = e, this._lines = t, this._eol = n, this._versionId = r
        }
        return e.prototype.dispose = function() {
          this._lines.length = 0
        }, Object.defineProperty(e.prototype, "version", {
          get: function() {
            return this._versionId
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getText = function() {
          return this._lines.join(this._eol)
        }, e.prototype.onEvents = function(e) {
          e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);
          for (var t = e.changes, n = 0, i = t.length; n < i; n++) {
            var o = t[n];
            this._acceptDeleteRange(o.range), this._acceptInsertText(new r.Position(o.range.startLineNumber, o.range.startColumn), o.text)
          }
          this._versionId = e.versionId
        }, e.prototype._ensureLineStarts = function() {
          if (!this._lineStarts) {
            for (var e = this._eol.length, t = this._lines.length, r = new Uint32Array(t), i = 0; i < t; i++) r[i] = this._lines[i].length + e;
            this._lineStarts = new n.PrefixSumComputer(r)
          }
        }, e.prototype._setLineText = function(e, t) {
          this._lines[e] = t, this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length)
        }, e.prototype._acceptDeleteRange = function(e) {
          if (e.startLineNumber !== e.endLineNumber) this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
          else {
            if (e.startColumn === e.endColumn) return;
            this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1))
          }
        }, e.prototype._acceptInsertText = function(e, t) {
          if (0 !== t.length) {
            var n = t.split(/\r\n|\r|\n/);
            if (1 !== n.length) {
              n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
              for (var r = new Uint32Array(n.length - 1), i = 1; i < n.length; i++) this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
              this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r)
            } else this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1))
          }
        }, e
      }();
      t.MirrorTextModel = i
    }), define(e[153], t([18, 17]), function(e, t) {
      return e.create("vs/base/common/severity", t)
    }), define(e[24], t([1, 0, 153, 8]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i;
      ! function(e) {
        e[e.Ignore = 0] = "Ignore", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
      }(i || (i = {})),
      function(e) {
        var t = "error",
          i = "warning",
          o = "warn",
          s = "info",
          a = Object.create(null);
        a[e.Error] = n.localize(0, null), a[e.Warning] = n.localize(1, null), a[e.Info] = n.localize(2, null), e.fromValue = function(n) {
          return n ? r.equalsIgnoreCase(t, n) ? e.Error : r.equalsIgnoreCase(i, n) || r.equalsIgnoreCase(o, n) ? e.Warning : r.equalsIgnoreCase(s, n) ? e.Info : e.Ignore : e.Ignore
        }, e.toString = function(e) {
          return a[e] || r.empty
        }, e.compare = function(e, t) {
          return t - e
        }
      }(i || (i = {})), t.default = i
    }), define(e[74], t([18, 17]), function(e, t) {
      return e.create("vs/base/node/processes", t)
    }), define(e[75], t([1, 0, 15, 52, 87, 74, 2, 21, 3, 12, 13, 10, 99, 88]), function(e, t, r, i, o, s, a, u, c, l, d, f, p, h) {
      "use strict";

      function g(t, n) {
        if (f.isWindows) try {
          var r = {
            stdio: ["pipe", "pipe", "ignore"]
          };
          n && (r.cwd = n), i.execFileSync("taskkill", ["/T", "/F", "/PID", t.pid.toString()], r)
        } catch (e) {
          return {
            success: !1,
            error: e,
            code: e.status ? function(e) {
              switch (e) {
                case 0:
                  return h.TerminateResponseCode.Success;
                case 1:
                  return h.TerminateResponseCode.AccessDenied;
                case 128:
                  return h.TerminateResponseCode.ProcessNotFound;
                default:
                  return h.TerminateResponseCode.Unknown
              }
            }(e.status) : h.TerminateResponseCode.Unknown
          }
        } else if (f.isLinux || f.isMacintosh) try {
          var o = c.default.parse(e.toUrl("vs/base/node/terminateProcess.sh")).fsPath,
            s = i.spawnSync(o, [t.pid.toString()]);
          if (s.error) return {
            success: !1,
            error: s.error
          }
        } catch (e) {
          return {
            success: !1,
            error: e
          }
        } else t.kill("SIGKILL");
        return {
          success: !0
        }
      }

      function m() {
        return process.env.comspec || "cmd.exe"
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var v = i.exec,
        y = i.spawn;
      t.Source = h.Source, t.TerminateResponseCode = h.TerminateResponseCode, t.terminateProcess = g, t.getWindowsShell = m;
      var _ = function() {
        function e(e, t, n, r) {
          var i = this;
          if (r) this.cmd = e, this.args = t, this.shell = n, this.options = r;
          else if (n && t) this.module = e, this.args = t, this.shell = !1, this.options = n;
          else {
            var o = e;
            this.cmd = o.command, this.shell = o.isShellCommand, this.args = o.args.slice(0), this.options = o.options || {}
          }
          if (this.childProcess = null, this.terminateRequested = !1, this.options.env) {
            var s = Object.create(null);
            Object.keys(process.env).forEach(function(e) {
              s[e] = process.env[e]
            }), Object.keys(this.options.env).forEach(function(e) {
              s[e] = i.options.env[e]
            }), this.options.env = s
          }
        }
        return e.prototype.getSanitizedCommand = function() {
          var t = this.cmd.toLowerCase(),
            n = t.lastIndexOf(r.sep);
          return -1 !== n && (t = t.substring(n + 1)), e.WellKnowCommands[t] ? t : "other"
        }, e.prototype.start = function() {
          var e = this;
          return f.isWindows && (this.options && this.options.cwd && d.isUNC(this.options.cwd) || !this.options && !this.options.cwd && d.isUNC(process.cwd())) ? a.TPromise.wrapError(new Error(s.localize(0, null))) : this.useExec().then(function(t) {
            var n, r, i, s = new a.PPromise(function(e, t, o) {
              n = e, r = t, i = o
            });
            if (t) {
              var c = e.cmd;
              e.args && (c = c + " " + e.args.join(" ")), e.childProcess = v(c, e.options, function(t, o, s) {
                e.childProcess = null;
                var a = t;
                a && a.killed ? r({
                  killed: e.terminateRequested,
                  stdout: o.toString(),
                  stderr: s.toString()
                }) : e.handleExec(n, i, t, o, s)
              })
            } else {
              var d = null,
                p = function(t) {
                  e.childProcess = null, e.childProcessPromise = null, e.handleClose(t, n, i, r);
                  var o = {
                    terminated: e.terminateRequested
                  };
                  u.isNumber(t) && (o.cmdCode = t), n(o)
                };
              if (e.shell && f.isWindows) {
                var h = l.deepClone(e.options);
                h.windowsVerbatimArguments = !0, h.detached = !1;
                var g = !1,
                  _ = !1,
                  b = [],
                  C = e.ensureQuotes(e.cmd);
                b.push(C.value), g = C.quoted, e.args && e.args.forEach(function(t) {
                  C = e.ensureQuotes(t), b.push(C.value), _ = _ && C.quoted
                });
                var S = ["/s", "/c"];
                g ? _ ? S.push('"' + b.join(" ") + '"') : b.length > 1 ? S.push('"' + b[0] + '" ' + b.slice(1).join(" ")) : S.push('"' + b[0] + '"') : S.push(b.join(" ")), d = y(m(), S, h)
              } else e.cmd ? d = y(e.cmd, e.args, e.options) : e.module && (e.childProcessPromise = new a.TPromise(function(t, s, a) {
                o.fork(e.module, e.args, e.options, function(o, a) {
                  if (o) return s(o), void r({
                    terminated: e.terminateRequested,
                    error: o
                  });
                  e.childProcess = a, e.childProcess.on("close", p), e.handleSpawn(a, n, i, r, !1), t(a)
                })
              }));
              d && (e.childProcess = d, e.childProcessPromise = a.TPromise.as(d), d.on("error", function(t) {
                e.childProcess = null, r({
                  terminated: e.terminateRequested,
                  error: t
                })
              }), d.pid && (e.childProcess.on("close", p), e.handleSpawn(d, n, i, r, !0)))
            }
            return s
          })
        }, e.prototype.handleClose = function(e, t, n, r) {}, e.prototype.ensureQuotes = function(t) {
          return e.regexp.test(t) ? {
            value: '"' + t + '"',
            quoted: !0
          } : {
            value: t,
            quoted: t.length > 0 && '"' === t[0] && '"' === t[t.length - 1]
          }
        }, Object.defineProperty(e.prototype, "pid", {
          get: function() {
            return this.childProcessPromise.then(function(e) {
              return e.pid
            }, function(e) {
              return -1
            })
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.terminate = function() {
          var e = this;
          return this.childProcessPromise ? this.childProcessPromise.then(function(t) {
            e.terminateRequested = !0;
            var n = g(t, e.options.cwd);
            return n.success && (e.childProcess = null), n
          }, function(e) {
            return {
              success: !0
            }
          }) : a.TPromise.as({
            success: !0
          })
        }, e.prototype.useExec = function() {
          var e = this;
          return new a.TPromise(function(t, n, r) {
            e.shell && f.isWindows || t(!1);
            var i = y(m(), ["/s", "/c"]);
            i.on("error", function(e) {
              t(!0)
            }), i.on("exit", function(e) {
              t(!1)
            })
          })
        }, e.WellKnowCommands = {
          ant: !0,
          cmake: !0,
          eslint: !0,
          gradle: !0,
          grunt: !0,
          gulp: !0,
          jake: !0,
          jenkins: !0,
          jshint: !0,
          make: !0,
          maven: !0,
          msbuild: !0,
          msc: !0,
          nmake: !0,
          npm: !0,
          rake: !0,
          tsc: !0,
          xbuild: !0
        }, e.regexp = /^[^"].* .*[^"]/, e
      }();
      t.AbstractProcess = _;
      var b = function(e) {
        function t(t, n, r, i) {
          return e.call(this, t, n, r, i) || this
        }
        return n(t, e),
          t.prototype.handleExec = function(e, t, n, r, i) {
            [r, i].forEach(function(e, n) {
              var r = new p.LineDecoder;
              r.write(e).forEach(function(e) {
                t({
                  line: e,
                  source: 0 === n ? h.Source.stdout : h.Source.stderr
                })
              });
              var i = r.end();
              i && t({
                line: i,
                source: 0 === n ? h.Source.stdout : h.Source.stderr
              })
            }), e({
              terminated: this.terminateRequested,
              error: n
            })
          }, t.prototype.handleSpawn = function(e, t, n, r, i) {
            var o = this;
            this.stdoutLineDecoder = new p.LineDecoder, this.stderrLineDecoder = new p.LineDecoder, e.stdout.on("data", function(e) {
              o.stdoutLineDecoder.write(e).forEach(function(e) {
                return n({
                  line: e,
                  source: h.Source.stdout
                })
              })
            }), e.stderr.on("data", function(e) {
              o.stderrLineDecoder.write(e).forEach(function(e) {
                return n({
                  line: e,
                  source: h.Source.stderr
                })
              })
            })
          }, t.prototype.handleClose = function(e, t, n, r) {
            [this.stdoutLineDecoder.end(), this.stderrLineDecoder.end()].forEach(function(e, t) {
              e && n({
                line: e,
                source: 0 === t ? h.Source.stdout : h.Source.stderr
              })
            })
          }, t
      }(_);
      t.LineProcess = b, t.createQueuedSender = function(e) {
        var t = [],
          n = !1,
          r = function(i) {
            n ? t.push(i) : e.send(i, function(e) {
              if (e && console.error(e), n = !1, t.length > 0) {
                var i = t.slice(0);
                t = [], i.forEach(function(e) {
                  return r(e)
                })
              }
            }) && !f.isWindows || (n = !0)
          };
        return {
          send: r
        }
      }
    }), define(e[76], t([1, 0, 52, 2, 9, 12, 4, 75, 32, 97]), function(e, t, r, i, o, s, a, u, c, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var d = function(e) {
        function t() {
          var t = e.call(this, {
            send: function(e) {
              try {
                process.send(e)
              } catch (e) {}
            },
            onMessage: a.fromNodeEventEmitter(process, "message", function(e) {
              return e
            })
          }) || this;
          return process.once("disconnect", function() {
            return t.dispose()
          }), t
        }
        return n(t, e), t
      }(c.ChannelServer);
      t.Server = d;
      var f = function() {
        function e(e, t) {
          this.modulePath = e, this.options = t;
          var n = t && t.timeout ? t.timeout : 6e4;
          this.disposeDelayer = new o.Delayer(n), this.activeRequests = [], this.child = null, this._client = null, this.channels = Object.create(null)
        }
        return e.prototype.getChannel = function(e) {
          var t = this;
          return {
            call: function(n, r) {
              return t.request(e, n, r)
            }
          }
        }, e.prototype.request = function(e, t, n) {
          var r = this;
          if (!this.disposeDelayer) return i.TPromise.wrapError(new Error("disposed"));
          this.disposeDelayer.cancel();
          var o = (this.channels[e] || (this.channels[e] = this.client.getChannel(e))).call(t, n),
            s = new i.TPromise(function(e, t, n) {
              o.then(e, t, n).done(function() {
                r.activeRequests && (r.activeRequests.splice(r.activeRequests.indexOf(s), 1), 0 === r.activeRequests.length && r.disposeDelayer.trigger(function() {
                  return r.disposeClient()
                }))
              })
            }, function() {
              return o.cancel()
            });
          return this.activeRequests.push(s), s
        }, Object.defineProperty(e.prototype, "client", {
          get: function() {
            var e = this;
            if (!this._client) {
              var t = this.options && this.options.args ? this.options.args : [],
                n = Object.create(null);
              n.env = s.assign(s.deepClone(process.env), {
                  VSCODE_PARENT_PID: String(process.pid)
                }), this.options && this.options.env && (n.env = s.assign(n.env, this.options.env)), this.options && this.options.freshExecArgv && (n.execArgv = []), this.options && "number" == typeof this.options.debug && (n.execArgv = ["--nolazy", "--inspect=" + this.options.debug]), this.options && "number" == typeof this.options.debugBrk && (n.execArgv = ["--nolazy", "--inspect-brk=" + this.options.debugBrk]),
                this.child = r.fork(this.modulePath, t, n);
              var i = new a.Emitter;
              a.fromNodeEventEmitter(this.child, "message", function(e) {
                return e
              })(function(t) {
                if (l.isRemoteConsoleLog(t)) return l.log(t, "IPC Library: " + e.options.serverName), null;
                i.fire(t)
              });
              var o = this.options.useQueue ? u.createQueuedSender(this.child) : this.child,
                d = {
                  send: function(t) {
                    return e.child && e.child.connected && o.send(t)
                  },
                  onMessage: i.event
                };
              this._client = new c.ChannelClient(d);
              var f = function() {
                return e.disposeClient()
              };
              process.once("exit", f), this.child.on("error", function(t) {
                return console.warn('IPC "' + e.options.serverName + '" errored with ' + t)
              }), this.child.on("exit", function(t, n) {
                process.removeListener("exit", f), e.activeRequests && (e.activeRequests.forEach(function(e) {
                  return e.cancel()
                }), e.activeRequests = []), 0 !== t && "SIGTERM" !== n && (console.warn('IPC "' + e.options.serverName + '" crashed with exit code ' + t), e.disposeDelayer.cancel(), e.disposeClient())
              })
            }
            return this._client
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.disposeClient = function() {
          this._client && (this.child.kill(), this.child = null, this._client = null, this.channels = Object.create(null))
        }, e.prototype.dispose = function() {
          this.disposeDelayer.cancel(), this.disposeDelayer = null, this.disposeClient(), this.activeRequests = null
        }, e
      }();
      t.Client = f
    }), define(e[77], t([18, 17]), function(e, t) {
      return e.create("vs/editor/common/config/editorOptions", t)
    });
  var o = this && this.__assign || Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
    }
    return e
  };
  define(e[78], t([1, 0, 77, 10, 94, 30]), function(e, t, n, r, i, s) {
    "use strict";

    function a(e, t) {
      return void 0 === e ? t : "false" !== e && Boolean(e)
    }

    function u(e, t) {
      return "string" != typeof e ? t : e
    }

    function c(e, t, n) {
      return "string" != typeof e ? t : -1 === n.indexOf(e) ? t : e
    }

    function l(e, t, n, r) {
      var i;
      return void 0 === e ? i = t : (i = parseInt(e, 10), isNaN(i) && (i = t)), i = Math.max(n, i), 0 | (i = Math.min(r, i))
    }

    function d(e, t) {
      if ("string" != typeof e) return t;
      switch (e) {
        case "hidden":
          return i.ScrollbarVisibility.Hidden;
        case "visible":
          return i.ScrollbarVisibility.Visible;
        default:
          return i.ScrollbarVisibility.Auto
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f;
    ! function(e) {
      e[e.None = 0] = "None", e[e.Small = 1] = "Small", e[e.Large = 2] = "Large", e[e.SmallBlocks = 3] = "SmallBlocks", e[e.LargeBlocks = 4] = "LargeBlocks"
    }(f = t.RenderMinimap || (t.RenderMinimap = {}));
    var p;
    ! function(e) {
      e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent"
    }(p = t.WrappingIndent || (t.WrappingIndent = {}));
    var h;
    ! function(e) {
      e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid"
    }(h = t.TextEditorCursorBlinkingStyle || (t.TextEditorCursorBlinkingStyle = {})), t.blinkingStyleToString = function(e) {
      if (e === h.Blink) return "blink";
      if (e === h.Expand) return "expand";
      if (e === h.Phase) return "phase";
      if (e === h.Smooth) return "smooth";
      if (e === h.Solid) return "solid";
      throw new Error("blinkingStyleToString: Unknown blinkingStyle")
    };
    var g;
    ! function(e) {
      e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline",
        e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin"
    }(g = t.TextEditorCursorStyle || (t.TextEditorCursorStyle = {})), t.cursorStyleToString = function(e) {
      if (e === g.Line) return "line";
      if (e === g.Block) return "block";
      if (e === g.Underline) return "underline";
      if (e === g.LineThin) return "line-thin";
      if (e === g.BlockOutline) return "block-outline";
      if (e === g.UnderlineThin) return "underline-thin";
      throw new Error("cursorStyleToString: Unknown cursorStyle")
    };
    ! function(e) {
      e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom"
    }(t.RenderLineNumbersType || (t.RenderLineNumbersType = {}));
    var m = function() {
      function e(e) {
        this.canUseLayerHinting = e.canUseLayerHinting, this.pixelRatio = e.pixelRatio, this.editorClassName = e.editorClassName, this.lineHeight = 0 | e.lineHeight, this.readOnly = e.readOnly, this.accessibilitySupport = e.accessibilitySupport, this.multiCursorModifier = e.multiCursorModifier, this.wordSeparators = e.wordSeparators,
          this.autoClosingBrackets = e.autoClosingBrackets, this.autoIndent = e.autoIndent, this.useTabStops = e.useTabStops, this.tabFocusMode = e.tabFocusMode, this.dragAndDrop = e.dragAndDrop, this.emptySelectionClipboard = e.emptySelectionClipboard, this.layoutInfo = e.layoutInfo, this.fontInfo = e.fontInfo, this.viewInfo = e.viewInfo, this.wrappingInfo = e.wrappingInfo, this.contribInfo = e.contribInfo
      }
      return e.prototype.equals = function(t) {
        return this.canUseLayerHinting === t.canUseLayerHinting && this.pixelRatio === t.pixelRatio && this.editorClassName === t.editorClassName && this.lineHeight === t.lineHeight && this.readOnly === t.readOnly && this.accessibilitySupport === t.accessibilitySupport && this.multiCursorModifier === t.multiCursorModifier && this.wordSeparators === t.wordSeparators && this.autoClosingBrackets === t.autoClosingBrackets && this.autoIndent === t.autoIndent && this.useTabStops === t.useTabStops && this.tabFocusMode === t.tabFocusMode && this.dragAndDrop === t.dragAndDrop && this.emptySelectionClipboard === t.emptySelectionClipboard && e._equalsLayoutInfo(this.layoutInfo, t.layoutInfo) && this.fontInfo.equals(t.fontInfo) && e._equalsViewOptions(this.viewInfo, t.viewInfo) && e._equalsWrappingInfo(this.wrappingInfo, t.wrappingInfo) && e._equalsContribOptions(this.contribInfo, t.contribInfo)
      }, e.prototype.createChangeEvent = function(t) {
        return {
          canUseLayerHinting: this.canUseLayerHinting !== t.canUseLayerHinting,
          pixelRatio: this.pixelRatio !== t.pixelRatio,
          editorClassName: this.editorClassName !== t.editorClassName,
          lineHeight: this.lineHeight !== t.lineHeight,
          readOnly: this.readOnly !== t.readOnly,
          accessibilitySupport: this.accessibilitySupport !== t.accessibilitySupport,
          multiCursorModifier: this.multiCursorModifier !== t.multiCursorModifier,
          wordSeparators: this.wordSeparators !== t.wordSeparators,
          autoClosingBrackets: this.autoClosingBrackets !== t.autoClosingBrackets,
          autoIndent: this.autoIndent !== t.autoIndent,
          useTabStops: this.useTabStops !== t.useTabStops,
          tabFocusMode: this.tabFocusMode !== t.tabFocusMode,
          dragAndDrop: this.dragAndDrop !== t.dragAndDrop,
          emptySelectionClipboard: this.emptySelectionClipboard !== t.emptySelectionClipboard,
          layoutInfo: !e._equalsLayoutInfo(this.layoutInfo, t.layoutInfo),
          fontInfo: !this.fontInfo.equals(t.fontInfo),
          viewInfo: !e._equalsViewOptions(this.viewInfo, t.viewInfo),
          wrappingInfo: !e._equalsWrappingInfo(this.wrappingInfo, t.wrappingInfo),
          contribInfo: !e._equalsContribOptions(this.contribInfo, t.contribInfo)
        }
      }, e._equalsLayoutInfo = function(e, t) {
        return e.width === t.width && e.height === t.height && e.glyphMarginLeft === t.glyphMarginLeft && e.glyphMarginWidth === t.glyphMarginWidth && e.glyphMarginHeight === t.glyphMarginHeight && e.lineNumbersLeft === t.lineNumbersLeft && e.lineNumbersWidth === t.lineNumbersWidth && e.lineNumbersHeight === t.lineNumbersHeight && e.decorationsLeft === t.decorationsLeft && e.decorationsWidth === t.decorationsWidth && e.decorationsHeight === t.decorationsHeight && e.contentLeft === t.contentLeft && e.contentWidth === t.contentWidth && e.contentHeight === t.contentHeight && e.renderMinimap === t.renderMinimap && e.minimapWidth === t.minimapWidth && e.viewportColumn === t.viewportColumn && e.verticalScrollbarWidth === t.verticalScrollbarWidth && e.horizontalScrollbarHeight === t.horizontalScrollbarHeight && this._equalsOverviewRuler(e.overviewRuler, t.overviewRuler)
      }, e._equalsOverviewRuler = function(e, t) {
        return e.width === t.width && e.height === t.height && e.top === t.top && e.right === t.right
      }, e._equalsViewOptions = function(e, t) {
        return e.extraEditorClassName === t.extraEditorClassName && e.disableMonospaceOptimizations === t.disableMonospaceOptimizations && this._equalsNumberArrays(e.rulers, t.rulers) && e.ariaLabel === t.ariaLabel && e.renderLineNumbers === t.renderLineNumbers && e.renderCustomLineNumbers === t.renderCustomLineNumbers && e.selectOnLineNumbers === t.selectOnLineNumbers && e.glyphMargin === t.glyphMargin && e.revealHorizontalRightPadding === t.revealHorizontalRightPadding && e.roundedSelection === t.roundedSelection && e.overviewRulerLanes === t.overviewRulerLanes && e.overviewRulerBorder === t.overviewRulerBorder && e.cursorBlinking === t.cursorBlinking && e.mouseWheelZoom === t.mouseWheelZoom && e.cursorStyle === t.cursorStyle && e.lineCursorWidth === t.lineCursorWidth && e.hideCursorInOverviewRuler === t.hideCursorInOverviewRuler && e.scrollBeyondLastLine === t.scrollBeyondLastLine && e.smoothScrolling === t.smoothScrolling && e.stopRenderingLineAfter === t.stopRenderingLineAfter && e.renderWhitespace === t.renderWhitespace && e.renderControlCharacters === t.renderControlCharacters && e.fontLigatures === t.fontLigatures && e.renderIndentGuides === t.renderIndentGuides && e.renderLineHighlight === t.renderLineHighlight && this._equalsScrollbarOptions(e.scrollbar, t.scrollbar) && this._equalsMinimapOptions(e.minimap, t.minimap) && e.fixedOverflowWidgets === t.fixedOverflowWidgets
      }, e._equalsScrollbarOptions = function(e, t) {
        return e.arrowSize === t.arrowSize && e.vertical === t.vertical && e.horizontal === t.horizontal && e.useShadows === t.useShadows && e.verticalHasArrows === t.verticalHasArrows && e.horizontalHasArrows === t.horizontalHasArrows && e.handleMouseWheel === t.handleMouseWheel && e.horizontalScrollbarSize === t.horizontalScrollbarSize && e.horizontalSliderSize === t.horizontalSliderSize && e.verticalScrollbarSize === t.verticalScrollbarSize && e.verticalSliderSize === t.verticalSliderSize && e.mouseWheelScrollSensitivity === t.mouseWheelScrollSensitivity
      }, e._equalsMinimapOptions = function(e, t) {
        return e.enabled === t.enabled && e.showSlider === t.showSlider && e.renderCharacters === t.renderCharacters && e.maxColumn === t.maxColumn
      }, e._equalsNumberArrays = function(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (e[n] !== t[n]) return !1;
        return !0
      }, e._equalFindOptions = function(e, t) {
        return e.seedSearchStringFromSelection === t.seedSearchStringFromSelection && e.autoFindInSelection === t.autoFindInSelection && e.globalFindClipboard === t.globalFindClipboard
      }, e._equalsWrappingInfo = function(e, t) {
        return e.inDiffEditor === t.inDiffEditor && e.isDominatedByLongLines === t.isDominatedByLongLines && e.isWordWrapMinified === t.isWordWrapMinified && e.isViewportWrapping === t.isViewportWrapping && e.wrappingColumn === t.wrappingColumn && e.wrappingIndent === t.wrappingIndent && e.wordWrapBreakBeforeCharacters === t.wordWrapBreakBeforeCharacters && e.wordWrapBreakAfterCharacters === t.wordWrapBreakAfterCharacters && e.wordWrapBreakObtrusiveCharacters === t.wordWrapBreakObtrusiveCharacters
      }, e._equalsContribOptions = function(t, n) {
        return t.selectionClipboard === n.selectionClipboard && t.hover === n.hover && t.links === n.links && t.contextmenu === n.contextmenu && e._equalsQuickSuggestions(t.quickSuggestions, n.quickSuggestions) && t.quickSuggestionsDelay === n.quickSuggestionsDelay && t.parameterHints === n.parameterHints && t.iconsInSuggestions === n.iconsInSuggestions && t.formatOnType === n.formatOnType && t.formatOnPaste === n.formatOnPaste && t.suggestOnTriggerCharacters === n.suggestOnTriggerCharacters && t.acceptSuggestionOnEnter === n.acceptSuggestionOnEnter && t.acceptSuggestionOnCommitCharacter === n.acceptSuggestionOnCommitCharacter && t.snippetSuggestions === n.snippetSuggestions && t.wordBasedSuggestions === n.wordBasedSuggestions && t.suggestFontSize === n.suggestFontSize && t.suggestLineHeight === n.suggestLineHeight && t.selectionHighlight === n.selectionHighlight && t.occurrencesHighlight === n.occurrencesHighlight && t.codeLens === n.codeLens && t.folding === n.folding && t.showFoldingControls === n.showFoldingControls && t.matchBrackets === n.matchBrackets && this._equalFindOptions(t.find, n.find) && t.colorDecorators === n.colorDecorators && t.lightbulbEnabled === n.lightbulbEnabled
      }, e._equalsQuickSuggestions = function(e, t) {
        return "boolean" == typeof e ? "boolean" == typeof t && e === t : "boolean" != typeof t && (e.comments === t.comments && e.other === t.other && e.strings === t.strings)
      }, e
    }();
    t.InternalEditorOptions = m;
    var v = function() {
      function e() {}
      return e.validate = function(e, t) {
        var n = e.wordWrap;
        !0 === n ? n = "on" : !1 === n && (n = "off"), n = c(n, t.wordWrap, ["off", "on", "wordWrapColumn", "bounded"]);
        var i, o = this._sanitizeViewInfo(e, t.viewInfo),
          s = this._sanitizeContribInfo(e, t.contribInfo);
        "string" == typeof e.multiCursorModifier && (i = "ctrlCmd" === e.multiCursorModifier ? r.isMacintosh ? "metaKey" : "ctrlKey" : "altKey");
        var d = c(i, t.multiCursorModifier, ["altKey", "metaKey", "ctrlKey"]);
        return {
          inDiffEditor: a(e.inDiffEditor, t.inDiffEditor),
          wordSeparators: u(e.wordSeparators, t.wordSeparators),
          lineNumbersMinChars: l(e.lineNumbersMinChars, t.lineNumbersMinChars, 1, 10),
          lineDecorationsWidth: void 0 === e.lineDecorationsWidth ? t.lineDecorationsWidth : e.lineDecorationsWidth,
          readOnly: a(e.readOnly, t.readOnly),
          mouseStyle: c(e.mouseStyle, t.mouseStyle, ["text", "default", "copy"]),
          disableLayerHinting: a(e.disableLayerHinting, t.disableLayerHinting),
          automaticLayout: a(e.automaticLayout, t.automaticLayout),
          wordWrap: n,
          wordWrapColumn: l(e.wordWrapColumn, t.wordWrapColumn, 1, 1073741824),
          wordWrapMinified: a(e.wordWrapMinified, t.wordWrapMinified),
          wrappingIndent: function(e, t) {
            return "string" != typeof e ? t : "indent" === e ? p.Indent : "same" === e ? p.Same : p.None
          }(e.wrappingIndent, t.wrappingIndent),
          wordWrapBreakBeforeCharacters: u(e.wordWrapBreakBeforeCharacters, t.wordWrapBreakBeforeCharacters),
          wordWrapBreakAfterCharacters: u(e.wordWrapBreakAfterCharacters, t.wordWrapBreakAfterCharacters),
          wordWrapBreakObtrusiveCharacters: u(e.wordWrapBreakObtrusiveCharacters, t.wordWrapBreakObtrusiveCharacters),
          autoClosingBrackets: a(e.autoClosingBrackets, t.autoClosingBrackets),
          autoIndent: a(e.autoIndent, t.autoIndent),
          dragAndDrop: a(e.dragAndDrop, t.dragAndDrop),
          emptySelectionClipboard: a(e.emptySelectionClipboard, t.emptySelectionClipboard),
          useTabStops: a(e.useTabStops, t.useTabStops),
          multiCursorModifier: d,
          accessibilitySupport: c(e.accessibilitySupport, t.accessibilitySupport, ["auto", "on", "off"]),
          viewInfo: o,
          contribInfo: s
        }
      }, e._sanitizeScrollbarOpts = function(e, t, n) {
        if ("object" != typeof e) return t;
        var r = l(e.horizontalScrollbarSize, t.horizontalScrollbarSize, 0, 1e3),
          i = l(e.verticalScrollbarSize, t.verticalScrollbarSize, 0, 1e3);
        return {
          vertical: d(e.vertical, t.vertical),
          horizontal: d(e.horizontal, t.horizontal),
          arrowSize: l(e.arrowSize, t.arrowSize, 0, 1e3),
          useShadows: a(e.useShadows, t.useShadows),
          verticalHasArrows: a(e.verticalHasArrows, t.verticalHasArrows),
          horizontalHasArrows: a(e.horizontalHasArrows, t.horizontalHasArrows),
          horizontalScrollbarSize: r,
          horizontalSliderSize: l(e.horizontalSliderSize, r, 0, 1e3),
          verticalScrollbarSize: i,
          verticalSliderSize: l(e.verticalSliderSize, i, 0, 1e3),
          handleMouseWheel: a(e.handleMouseWheel, t.handleMouseWheel),
          mouseWheelScrollSensitivity: n
        }
      }, e._sanitizeMinimapOpts = function(e, t) {
        return "object" != typeof e ? t : {
          enabled: a(e.enabled, t.enabled),
          showSlider: c(e.showSlider, t.showSlider, ["always", "mouseover"]),
          renderCharacters: a(e.renderCharacters, t.renderCharacters),
          maxColumn: l(e.maxColumn, t.maxColumn, 1, 1e4)
        }
      }, e._santizeFindOpts = function(e, t) {
        return "object" != typeof e ? t : {
          seedSearchStringFromSelection: a(e.seedSearchStringFromSelection, t.seedSearchStringFromSelection),
          autoFindInSelection: a(e.autoFindInSelection, t.autoFindInSelection),
          globalFindClipboard: a(e.globalFindClipboard, t.globalFindClipboard)
        }
      }, e._sanitizeViewInfo = function(e, t) {
        var n = [];
        if (Array.isArray(e.rulers)) {
          for (var r = 0, i = e.rulers.length; r < i; r++) n.push(l(e.rulers[r], 0, 0, 1e4));
          n.sort()
        }
        var o = t.renderLineNumbers,
          s = t.renderCustomLineNumbers;
        if (void 0 !== e.lineNumbers) {
          var d = e.lineNumbers;
          !0 === d ? d = "on" : !1 === d && (d = "off"), "function" == typeof d ? (o = 4, s = d) : o = "interval" === d ? 3 : "relative" === d ? 2 : "on" === d ? 1 : 0
        }
        var f = a(e.fontLigatures, t.fontLigatures),
          p = a(e.disableMonospaceOptimizations, t.disableMonospaceOptimizations) || f,
          m = e.renderWhitespace;
        !0 === m ? m = "boundary" : !1 === m && (m = "none"),
          m = c(e.renderWhitespace, t.renderWhitespace, ["none", "boundary", "all"]);
        var v = e.renderLineHighlight;
        !0 === v ? v = "line" : !1 === v && (v = "none"), v = c(e.renderLineHighlight, t.renderLineHighlight, ["none", "gutter", "line", "all"]);
        var y = function(e, t) {
            var n = parseFloat(e);
            return isNaN(n) && (n = t), n
          }(e.mouseWheelScrollSensitivity, t.scrollbar.mouseWheelScrollSensitivity),
          _ = this._sanitizeScrollbarOpts(e.scrollbar, t.scrollbar, y),
          b = this._sanitizeMinimapOpts(e.minimap, t.minimap);
        return {
          extraEditorClassName: u(e.extraEditorClassName, t.extraEditorClassName),
          disableMonospaceOptimizations: p,
          rulers: n,
          ariaLabel: u(e.ariaLabel, t.ariaLabel),
          renderLineNumbers: o,
          renderCustomLineNumbers: s,
          selectOnLineNumbers: a(e.selectOnLineNumbers, t.selectOnLineNumbers),
          glyphMargin: a(e.glyphMargin, t.glyphMargin),
          revealHorizontalRightPadding: l(e.revealHorizontalRightPadding, t.revealHorizontalRightPadding, 0, 1e3),
          roundedSelection: a(e.roundedSelection, t.roundedSelection),
          overviewRulerLanes: l(e.overviewRulerLanes, t.overviewRulerLanes, 0, 3),
          overviewRulerBorder: a(e.overviewRulerBorder, t.overviewRulerBorder),
          cursorBlinking: function(e, t) {
            if ("string" != typeof e) return t;
            switch (e) {
              case "blink":
                return h.Blink;
              case "smooth":
                return h.Smooth;
              case "phase":
                return h.Phase;
              case "expand":
                return h.Expand;
              case "visible":
              case "solid":
                return h.Solid
            }
            return h.Blink
          }(e.cursorBlinking, t.cursorBlinking),
          mouseWheelZoom: a(e.mouseWheelZoom, t.mouseWheelZoom),
          cursorStyle: function(e, t) {
            return "string" != typeof e ? t : "line" === e ? g.Line : "block" === e ? g.Block : "underline" === e ? g.Underline : "line-thin" === e ? g.LineThin : "block-outline" === e ? g.BlockOutline : "underline-thin" === e ? g.UnderlineThin : g.Line
          }(e.cursorStyle, t.cursorStyle),
          lineCursorWidth: l(e.lineCursorWidth, t.lineCursorWidth, 1, Number.MAX_VALUE),
          hideCursorInOverviewRuler: a(e.hideCursorInOverviewRuler, t.hideCursorInOverviewRuler),
          scrollBeyondLastLine: a(e.scrollBeyondLastLine, t.scrollBeyondLastLine),
          smoothScrolling: a(e.smoothScrolling, t.smoothScrolling),
          stopRenderingLineAfter: l(e.stopRenderingLineAfter, t.stopRenderingLineAfter, -1, 1073741824),
          renderWhitespace: m,
          renderControlCharacters: a(e.renderControlCharacters, t.renderControlCharacters),
          fontLigatures: f,
          renderIndentGuides: a(e.renderIndentGuides, t.renderIndentGuides),
          renderLineHighlight: v,
          scrollbar: _,
          minimap: b,
          fixedOverflowWidgets: a(e.fixedOverflowWidgets, t.fixedOverflowWidgets)
        }
      }, e._sanitizeContribInfo = function(e, t) {
        var n;
        n = "object" == typeof e.quickSuggestions ? o({
          other: !0
        }, e.quickSuggestions) : a(e.quickSuggestions, t.quickSuggestions);
        var r = this._santizeFindOpts(e.find, t.find);
        return {
          selectionClipboard: a(e.selectionClipboard, t.selectionClipboard),
          hover: a(e.hover, t.hover),
          links: a(e.links, t.links),
          contextmenu: a(e.contextmenu, t.contextmenu),
          quickSuggestions: n,
          quickSuggestionsDelay: l(e.quickSuggestionsDelay, t.quickSuggestionsDelay, -1073741824, 1073741824),
          parameterHints: a(e.parameterHints, t.parameterHints),
          iconsInSuggestions: a(e.iconsInSuggestions, t.iconsInSuggestions),
          formatOnType: a(e.formatOnType, t.formatOnType),
          formatOnPaste: a(e.formatOnPaste, t.formatOnPaste),
          suggestOnTriggerCharacters: a(e.suggestOnTriggerCharacters, t.suggestOnTriggerCharacters),
          acceptSuggestionOnEnter: "string" == typeof e.acceptSuggestionOnEnter ? c(e.acceptSuggestionOnEnter, t.acceptSuggestionOnEnter, ["on", "smart", "off"]) : e.acceptSuggestionOnEnter ? "on" : "off",
          acceptSuggestionOnCommitCharacter: a(e.acceptSuggestionOnCommitCharacter, t.acceptSuggestionOnCommitCharacter),
          snippetSuggestions: c(e.snippetSuggestions, t.snippetSuggestions, ["top", "bottom", "inline", "none"]),
          wordBasedSuggestions: a(e.wordBasedSuggestions, t.wordBasedSuggestions),
          suggestFontSize: l(e.suggestFontSize, t.suggestFontSize, 0, 1e3),
          suggestLineHeight: l(e.suggestLineHeight, t.suggestLineHeight, 0, 1e3),
          selectionHighlight: a(e.selectionHighlight, t.selectionHighlight),
          occurrencesHighlight: a(e.occurrencesHighlight, t.occurrencesHighlight),
          codeLens: a(e.codeLens, t.codeLens) && a(e.referenceInfos, !0),
          folding: a(e.folding, t.folding),
          showFoldingControls: c(e.showFoldingControls, t.showFoldingControls, ["always", "mouseover"]),
          matchBrackets: a(e.matchBrackets, t.matchBrackets),
          find: r,
          colorDecorators: a(e.colorDecorators, t.colorDecorators),
          lightbulbEnabled: a(!!e.lightbulb && e.lightbulb.enabled, t.lightbulbEnabled)
        }
      }, e
    }();
    t.EditorOptionsValidator = v;
    var y = function() {
      function e() {}
      return e._tweakValidatedOptions = function(e, t) {
        var r = 2 === t,
          i = 1 === t;
        return {
          inDiffEditor: e.inDiffEditor,
          wordSeparators: e.wordSeparators,
          lineNumbersMinChars: e.lineNumbersMinChars,
          lineDecorationsWidth: e.lineDecorationsWidth,
          readOnly: e.readOnly,
          mouseStyle: e.mouseStyle,
          disableLayerHinting: e.disableLayerHinting,
          automaticLayout: e.automaticLayout,
          wordWrap: e.wordWrap,
          wordWrapColumn: e.wordWrapColumn,
          wordWrapMinified: e.wordWrapMinified,
          wrappingIndent: e.wrappingIndent,
          wordWrapBreakBeforeCharacters: e.wordWrapBreakBeforeCharacters,
          wordWrapBreakAfterCharacters: e.wordWrapBreakAfterCharacters,
          wordWrapBreakObtrusiveCharacters: e.wordWrapBreakObtrusiveCharacters,
          autoClosingBrackets: e.autoClosingBrackets,
          autoIndent: e.autoIndent,
          dragAndDrop: e.dragAndDrop,
          emptySelectionClipboard: e.emptySelectionClipboard,
          useTabStops: e.useTabStops,
          multiCursorModifier: e.multiCursorModifier,
          accessibilitySupport: e.accessibilitySupport,
          viewInfo: {
            extraEditorClassName: e.viewInfo.extraEditorClassName,
            disableMonospaceOptimizations: e.viewInfo.disableMonospaceOptimizations,
            rulers: e.viewInfo.rulers,
            ariaLabel: i ? n.localize(0, null) : e.viewInfo.ariaLabel,
            renderLineNumbers: e.viewInfo.renderLineNumbers,
            renderCustomLineNumbers: e.viewInfo.renderCustomLineNumbers,
            selectOnLineNumbers: e.viewInfo.selectOnLineNumbers,
            glyphMargin: e.viewInfo.glyphMargin,
            revealHorizontalRightPadding: e.viewInfo.revealHorizontalRightPadding,
            roundedSelection: !r && e.viewInfo.roundedSelection,
            overviewRulerLanes: e.viewInfo.overviewRulerLanes,
            overviewRulerBorder: e.viewInfo.overviewRulerBorder,
            cursorBlinking: e.viewInfo.cursorBlinking,
            mouseWheelZoom: e.viewInfo.mouseWheelZoom,
            cursorStyle: e.viewInfo.cursorStyle,
            lineCursorWidth: e.viewInfo.lineCursorWidth,
            hideCursorInOverviewRuler: e.viewInfo.hideCursorInOverviewRuler,
            scrollBeyondLastLine: e.viewInfo.scrollBeyondLastLine,
            smoothScrolling: e.viewInfo.smoothScrolling,
            stopRenderingLineAfter: e.viewInfo.stopRenderingLineAfter,
            renderWhitespace: r ? "none" : e.viewInfo.renderWhitespace,
            renderControlCharacters: !r && e.viewInfo.renderControlCharacters,
            fontLigatures: !r && e.viewInfo.fontLigatures,
            renderIndentGuides: !r && e.viewInfo.renderIndentGuides,
            renderLineHighlight: e.viewInfo.renderLineHighlight,
            scrollbar: e.viewInfo.scrollbar,
            minimap: {
              enabled: !r && e.viewInfo.minimap.enabled,
              renderCharacters: e.viewInfo.minimap.renderCharacters,
              showSlider: e.viewInfo.minimap.showSlider,
              maxColumn: e.viewInfo.minimap.maxColumn
            },
            fixedOverflowWidgets: e.viewInfo.fixedOverflowWidgets
          },
          contribInfo: {
            selectionClipboard: e.contribInfo.selectionClipboard,
            hover: e.contribInfo.hover,
            links: !r && e.contribInfo.links,
            contextmenu: e.contribInfo.contextmenu,
            quickSuggestions: e.contribInfo.quickSuggestions,
            quickSuggestionsDelay: e.contribInfo.quickSuggestionsDelay,
            parameterHints: e.contribInfo.parameterHints,
            iconsInSuggestions: e.contribInfo.iconsInSuggestions,
            formatOnType: e.contribInfo.formatOnType,
            formatOnPaste: e.contribInfo.formatOnPaste,
            suggestOnTriggerCharacters: e.contribInfo.suggestOnTriggerCharacters,
            acceptSuggestionOnEnter: e.contribInfo.acceptSuggestionOnEnter,
            acceptSuggestionOnCommitCharacter: e.contribInfo.acceptSuggestionOnCommitCharacter,
            snippetSuggestions: e.contribInfo.snippetSuggestions,
            wordBasedSuggestions: e.contribInfo.wordBasedSuggestions,
            suggestFontSize: e.contribInfo.suggestFontSize,
            suggestLineHeight: e.contribInfo.suggestLineHeight,
            selectionHighlight: !r && e.contribInfo.selectionHighlight,
            occurrencesHighlight: !r && e.contribInfo.occurrencesHighlight,
            codeLens: !r && e.contribInfo.codeLens,
            folding: !r && e.contribInfo.folding,
            showFoldingControls: e.contribInfo.showFoldingControls,
            matchBrackets: !r && e.contribInfo.matchBrackets,
            find: e.contribInfo.find,
            colorDecorators: e.contribInfo.colorDecorators,
            lightbulbEnabled: e.contribInfo.lightbulbEnabled
          }
        }
      }, e.createInternalEditorOptions = function(e, t) {
        var n;
        n = "auto" === t.accessibilitySupport ? e.accessibilitySupport : "on" === t.accessibilitySupport ? 2 : 1;
        var r, i = this._tweakValidatedOptions(t, n);
        if ("string" == typeof i.lineDecorationsWidth && /^\d+(\.\d+)?ch$/.test(i.lineDecorationsWidth)) {
          r = parseFloat(i.lineDecorationsWidth.substr(0, i.lineDecorationsWidth.length - 2)) * e.fontInfo.typicalHalfwidthCharacterWidth
        } else r = l(i.lineDecorationsWidth, 0, 0, 1e3);
        i.contribInfo.folding && (r += 16);
        var o = _.compute({
            outerWidth: e.outerWidth,
            outerHeight: e.outerHeight,
            showGlyphMargin: i.viewInfo.glyphMargin,
            lineHeight: e.fontInfo.lineHeight,
            showLineNumbers: 0 !== i.viewInfo.renderLineNumbers,
            lineNumbersMinChars: i.lineNumbersMinChars,
            lineNumbersDigitCount: e.lineNumbersDigitCount,
            lineDecorationsWidth: r,
            typicalHalfwidthCharacterWidth: e.fontInfo.typicalHalfwidthCharacterWidth,
            maxDigitWidth: e.fontInfo.maxDigitWidth,
            verticalScrollbarWidth: i.viewInfo.scrollbar.verticalScrollbarSize,
            horizontalScrollbarHeight: i.viewInfo.scrollbar.horizontalScrollbarSize,
            scrollbarArrowSize: i.viewInfo.scrollbar.arrowSize,
            verticalScrollbarHasArrows: i.viewInfo.scrollbar.verticalHasArrows,
            minimap: i.viewInfo.minimap.enabled,
            minimapRenderCharacters: i.viewInfo.minimap.renderCharacters,
            minimapMaxColumn: i.viewInfo.minimap.maxColumn,
            pixelRatio: e.pixelRatio
          }),
          s = null,
          a = i.wordWrap,
          u = i.wordWrapColumn,
          c = i.wordWrapMinified;
        s = 2 === n ? {
          isWordWrapMinified: !1,
          isViewportWrapping: !1,
          wrappingColumn: -1
        } : c && e.isDominatedByLongLines ? {
          isWordWrapMinified: !0,
          isViewportWrapping: !0,
          wrappingColumn: Math.max(1, o.viewportColumn)
        } : "on" === a ? {
          isWordWrapMinified: !1,
          isViewportWrapping: !0,
          wrappingColumn: Math.max(1, o.viewportColumn)
        } : "bounded" === a ? {
          isWordWrapMinified: !1,
          isViewportWrapping: !0,
          wrappingColumn: Math.min(Math.max(1, o.viewportColumn), u)
        } : "wordWrapColumn" === a ? {
          isWordWrapMinified: !1,
          isViewportWrapping: !1,
          wrappingColumn: u
        } : {
          isWordWrapMinified: !1,
          isViewportWrapping: !1,
          wrappingColumn: -1
        };
        var d = {
            inDiffEditor: i.inDiffEditor,
            isDominatedByLongLines: e.isDominatedByLongLines,
            isWordWrapMinified: s.isWordWrapMinified,
            isViewportWrapping: s.isViewportWrapping,
            wrappingColumn: s.wrappingColumn,
            wrappingIndent: i.wrappingIndent,
            wordWrapBreakBeforeCharacters: i.wordWrapBreakBeforeCharacters,
            wordWrapBreakAfterCharacters: i.wordWrapBreakAfterCharacters,
            wordWrapBreakObtrusiveCharacters: i.wordWrapBreakObtrusiveCharacters
          },
          f = "monaco-editor";
        return i.viewInfo.extraEditorClassName && (f += " " + i.viewInfo.extraEditorClassName), e.extraEditorClassName && (f += " " + e.extraEditorClassName), i.viewInfo.fontLigatures && (f += " enable-ligatures"), "default" === i.mouseStyle ? f += " mouse-default" : "copy" === i.mouseStyle && (f += " mouse-copy"), new m({
          canUseLayerHinting: !i.disableLayerHinting,
          pixelRatio: e.pixelRatio,
          editorClassName: f,
          lineHeight: e.fontInfo.lineHeight,
          readOnly: i.readOnly,
          accessibilitySupport: n,
          multiCursorModifier: i.multiCursorModifier,
          wordSeparators: i.wordSeparators,
          autoClosingBrackets: i.autoClosingBrackets,
          autoIndent: i.autoIndent,
          useTabStops: i.useTabStops,
          tabFocusMode: !!i.readOnly || e.tabFocusMode,
          dragAndDrop: i.dragAndDrop,
          emptySelectionClipboard: i.emptySelectionClipboard && e.emptySelectionClipboard,
          layoutInfo: o,
          fontInfo: e.fontInfo,
          viewInfo: i.viewInfo,
          wrappingInfo: d,
          contribInfo: i.contribInfo
        })
      }, e
    }();
    t.InternalEditorOptionsFactory = y;
    var _ = function() {
      function e() {}
      return e.compute = function(e) {
        var t = 0 | e.outerWidth,
          n = 0 | e.outerHeight,
          r = e.showGlyphMargin,
          i = 0 | e.lineHeight,
          o = e.showLineNumbers,
          s = 0 | e.lineNumbersMinChars,
          a = 0 | e.lineNumbersDigitCount,
          u = 0 | e.lineDecorationsWidth,
          c = e.typicalHalfwidthCharacterWidth,
          l = e.maxDigitWidth,
          d = 0 | e.verticalScrollbarWidth,
          p = e.verticalScrollbarHasArrows,
          h = 0 | e.scrollbarArrowSize,
          g = 0 | e.horizontalScrollbarHeight,
          m = e.minimap,
          v = e.minimapRenderCharacters,
          y = 0 | e.minimapMaxColumn,
          _ = e.pixelRatio,
          b = 0;
        if (o) {
          var C = Math.max(a, s);
          b = Math.round(C * l)
        }
        var S = 0;
        r && (S = i);
        var E, x, w, P = 0 + S,
          D = P + b,
          T = D + u,
          O = t - S - b - u;
        if (m) {
          var k = void 0;
          _ >= 2 ? (E = v ? f.Large : f.LargeBlocks, k = 2 / _) : (E = v ? f.Small : f.SmallBlocks, k = 1 / _);
          (x = Math.max(0, Math.floor((O - d) * k / (c + k)))) / k > y && (x = Math.floor(y * k)), w = O - x
        } else x = 0, E = f.None, w = O;
        var I = Math.max(1, Math.floor((w - d) / c)),
          L = p ? h : 0;
        return {
          width: t,
          height: n,
          glyphMarginLeft: 0,
          glyphMarginWidth: S,
          glyphMarginHeight: n,
          lineNumbersLeft: P,
          lineNumbersWidth: b,
          lineNumbersHeight: n,
          decorationsLeft: D,
          decorationsWidth: u,
          decorationsHeight: n,
          contentLeft: T,
          contentWidth: w,
          contentHeight: n,
          renderMinimap: E,
          minimapWidth: x,
          viewportColumn: I,
          verticalScrollbarWidth: d,
          horizontalScrollbarHeight: g,
          overviewRuler: {
            top: L,
            width: d,
            height: n - 2 * L,
            right: 0
          }
        }
      }, e
    }();
    t.EditorLayoutProvider = _;
    t.EDITOR_FONT_DEFAULTS = {
      fontFamily: r.isMacintosh ? "Menlo, Monaco, 'Courier New', monospace" : r.isLinux ? "'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'" : "Consolas, 'Courier New', monospace",
      fontWeight: "normal",
      fontSize: r.isMacintosh ? 12 : 14,
      lineHeight: 0,
      letterSpacing: 0
    }, t.EDITOR_MODEL_DEFAULTS = {
      tabSize: 4,
      insertSpaces: !0,
      detectIndentation: !0,
      trimAutoWhitespace: !0
    }, t.EDITOR_DEFAULTS = {
      inDiffEditor: !1,
      wordSeparators: s.USUAL_WORD_SEPARATORS,
      lineNumbersMinChars: 5,
      lineDecorationsWidth: 10,
      readOnly: !1,
      mouseStyle: "text",
      disableLayerHinting: !1,
      automaticLayout: !1,
      wordWrap: "off",
      wordWrapColumn: 80,
      wordWrapMinified: !0,
      wrappingIndent: p.Same,
      wordWrapBreakBeforeCharacters: "([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋",
      wordWrapBreakAfterCharacters: " \t})]?|&,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣",
      wordWrapBreakObtrusiveCharacters: ".",
      autoClosingBrackets: !0,
      autoIndent: !0,
      dragAndDrop: !0,
      emptySelectionClipboard: !0,
      useTabStops: !0,
      multiCursorModifier: "altKey",
      accessibilitySupport: "auto",
      viewInfo: {
        extraEditorClassName: "",
        disableMonospaceOptimizations: !1,
        rulers: [],
        ariaLabel: n.localize(1, null),
        renderLineNumbers: 1,
        renderCustomLineNumbers: null,
        selectOnLineNumbers: !0,
        glyphMargin: !0,
        revealHorizontalRightPadding: 30,
        roundedSelection: !0,
        overviewRulerLanes: 2,
        overviewRulerBorder: !0,
        cursorBlinking: h.Blink,
        mouseWheelZoom: !1,
        cursorStyle: g.Line,
        lineCursorWidth: 2,
        hideCursorInOverviewRuler: !1,
        scrollBeyondLastLine: !0,
        smoothScrolling: !1,
        stopRenderingLineAfter: 1e4,
        renderWhitespace: "none",
        renderControlCharacters: !1,
        fontLigatures: !1,
        renderIndentGuides: !0,
        renderLineHighlight: "line",
        scrollbar: {
          vertical: i.ScrollbarVisibility.Auto,
          horizontal: i.ScrollbarVisibility.Auto,
          arrowSize: 11,
          useShadows: !0,
          verticalHasArrows: !1,
          horizontalHasArrows: !1,
          horizontalScrollbarSize: 10,
          horizontalSliderSize: 10,
          verticalScrollbarSize: 14,
          verticalSliderSize: 14,
          handleMouseWheel: !0,
          mouseWheelScrollSensitivity: 1
        },
        minimap: {
          enabled: !0,
          showSlider: "mouseover",
          renderCharacters: !0,
          maxColumn: 120
        },
        fixedOverflowWidgets: !1
      },
      contribInfo: {
        selectionClipboard: !0,
        hover: !0,
        links: !0,
        contextmenu: !0,
        quickSuggestions: {
          other: !0,
          comments: !1,
          strings: !1
        },
        quickSuggestionsDelay: 10,
        parameterHints: !0,
        iconsInSuggestions: !0,
        formatOnType: !1,
        formatOnPaste: !1,
        suggestOnTriggerCharacters: !0,
        acceptSuggestionOnEnter: "on",
        acceptSuggestionOnCommitCharacter: !0,
        snippetSuggestions: "inline",
        wordBasedSuggestions: !0,
        suggestFontSize: 0,
        suggestLineHeight: 0,
        selectionHighlight: !0,
        occurrencesHighlight: !0,
        codeLens: !0,
        folding: !0,
        showFoldingControls: "mouseover",
        matchBrackets: !0,
        find: {
          seedSearchStringFromSelection: !0,
          autoFindInSelection: !1,
          globalFindClipboard: !0
        },
        colorDecorators: !0,
        lightbulbEnabled: !0
      }
    }
  }), define(e[79], t([18, 17]), function(e, t) {
    return e.create("vs/editor/common/modes/modesRegistry", t)
  }), define(e[80], t([18, 17]), function(e, t) {
    return e.create("vs/platform/configuration/common/configurationRegistry", t)
  }), define(e[81], t([18, 17]), function(e, t) {
    return e.create("vs/platform/workspaces/common/workspaces", t)
  }), define(e[82], t([18, 17]), function(e, t) {
    return e.create("vs/workbench/api/node/extHostDiagnostics", t)
  }), define(e[83], t([18, 17]), function(e, t) {
    return e.create("vs/workbench/api/node/extHostExtensionActivator", t)
  }), define(e[84], t([18, 17]), function(e, t) {
    return e.create("vs/workbench/api/node/extHostTask", t)
  }), define(e[85], t([18, 17]), function(e, t) {
    return e.create("vs/workbench/api/node/extHostTreeViews", t)
  }), define(e[89], t([18, 17]), function(e, t) {
    return e.create("vs/workbench/node/extensionHostMain", t)
  }), define(e[6], t([1, 0]), function(e, t) {
    "use strict";

    function n(e, t, n, r) {
      t[i.DI_TARGET] === t ? t[i.DI_DEPENDENCIES].push({
        id: e,
        index: n,
        optional: r
      }) : (t[i.DI_DEPENDENCIES] = [{
        id: e,
        index: n,
        optional: r
      }], t[i.DI_TARGET] = t)
    }

    function r(e) {
      if (i.serviceIds.has(e)) return i.serviceIds.get(e);
      var t = function(e, r, i) {
        if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
        n(t, e, i, !1)
      };
      return t.toString = function() {
        return e
      }, i.serviceIds.set(e, t), t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i;
    ! function(e) {
      e.serviceIds = new Map, e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies", e.getServiceDependencies = function(t) {
        return t[e.DI_DEPENDENCIES] || []
      }
    }(i = t._util || (t._util = {})), t.IInstantiationService = r("instantiationService"), t.createDecorator = r, t.optional = function(e) {
      return function(t, r, i) {
        if (3 !== arguments.length) throw new Error("@optional-decorator can only be used to decorate a parameter");
        n(e, t, i, !0)
      }
    }
  }), define(e[47], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IModeService = n.createDecorator("modeService")
  }), define(e[38], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IModelService = n.createDecorator("modelService")
  }), define(e[90], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ITextResourceConfigurationService = n.createDecorator("textResourceConfigurationService")
  }), define(e[49], t([1, 0, 6]), function(e, t, r) {
    "use strict";

    function i(e, t) {
      var n = e.getType(),
        r = t.getType();
      if (n !== r) return n - r;
      switch (n) {
        case o.Defined:
        case o.Not:
        case o.Equals:
        case o.NotEquals:
          return e.cmp(t);
        default:
          throw new Error("Unknown ContextKeyExpr!")
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o;
    ! function(e) {
      e[e.Defined = 1] = "Defined", e[e.Not = 2] = "Not", e[e.Equals = 3] = "Equals", e[e.NotEquals = 4] = "NotEquals", e[e.And = 5] = "And"
    }(o = t.ContextKeyExprType || (t.ContextKeyExprType = {}));
    var s = function() {
      function e() {}
      return e.has = function(e) {
        return new a(e)
      }, e.equals = function(e, t) {
        return new u(e, t)
      }, e.notEquals = function(e, t) {
        return new c(e, t)
      }, e.not = function(e) {
        return new l(e)
      }, e.and = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new d(e)
      }, e.deserialize = function(e) {
        var t = this;
        if (!e) return null;
        var n = e.split("&&");
        return new d(n.map(function(e) {
          return t._deserializeOne(e)
        })).normalize()
      }, e._deserializeOne = function(e) {
        if ((e = e.trim()).indexOf("!=") >= 0) {
          t = e.split("!=");
          return new c(t[0].trim(), this._deserializeValue(t[1]))
        }
        if (e.indexOf("==") >= 0) {
          var t = e.split("==");
          return new u(t[0].trim(), this._deserializeValue(t[1]))
        }
        return /^\!\s*/.test(e) ? new l(e.substr(1).trim()) : new a(e)
      }, e._deserializeValue = function(e) {
        if ("true" === (e = e.trim())) return !0;
        if ("false" === e) return !1;
        var t = /^'([^']*)'$/.exec(e);
        return t ? t[1].trim() : e
      }, e
    }();
    t.ContextKeyExpr = s;
    var a = function() {
      function e(e) {
        this.key = e
      }
      return e.prototype.getType = function() {
        return o.Defined
      }, e.prototype.cmp = function(e) {
        return this.key < e.key ? -1 : this.key > e.key ? 1 : 0
      }, e.prototype.equals = function(t) {
        return t instanceof e && this.key === t.key
      }, e.prototype.evaluate = function(e) {
        return !!e.getValue(this.key)
      }, e.prototype.normalize = function() {
        return this
      }, e.prototype.serialize = function() {
        return this.key
      }, e.prototype.keys = function() {
        return [this.key]
      }, e
    }();
    t.ContextKeyDefinedExpr = a;
    var u = function() {
      function e(e, t) {
        this.key = e, this.value = t
      }
      return e.prototype.getType = function() {
        return o.Equals
      }, e.prototype.cmp = function(e) {
        return this.key < e.key ? -1 : this.key > e.key ? 1 : this.value < e.value ? -1 : this.value > e.value ? 1 : 0
      }, e.prototype.equals = function(t) {
        return t instanceof e && (this.key === t.key && this.value === t.value)
      }, e.prototype.evaluate = function(e) {
        return e.getValue(this.key) == this.value
      }, e.prototype.normalize = function() {
        return "boolean" == typeof this.value ? this.value ? new a(this.key) : new l(this.key) : this
      }, e.prototype.serialize = function() {
        return "boolean" == typeof this.value ? this.normalize().serialize() : this.key + " == '" + this.value + "'"
      }, e.prototype.keys = function() {
        return [this.key]
      }, e
    }();
    t.ContextKeyEqualsExpr = u;
    var c = function() {
      function e(e, t) {
        this.key = e, this.value = t
      }
      return e.prototype.getType = function() {
        return o.NotEquals
      }, e.prototype.cmp = function(e) {
        return this.key < e.key ? -1 : this.key > e.key ? 1 : this.value < e.value ? -1 : this.value > e.value ? 1 : 0
      }, e.prototype.equals = function(t) {
        return t instanceof e && (this.key === t.key && this.value === t.value)
      }, e.prototype.evaluate = function(e) {
        return e.getValue(this.key) != this.value
      }, e.prototype.normalize = function() {
        return "boolean" == typeof this.value ? this.value ? new l(this.key) : new a(this.key) : this
      }, e.prototype.serialize = function() {
        return "boolean" == typeof this.value ? this.normalize().serialize() : this.key + " != '" + this.value + "'"
      }, e.prototype.keys = function() {
        return [this.key]
      }, e
    }();
    t.ContextKeyNotEqualsExpr = c;
    var l = function() {
      function e(e) {
        this.key = e
      }
      return e.prototype.getType = function() {
        return o.Not
      }, e.prototype.cmp = function(e) {
        return this.key < e.key ? -1 : this.key > e.key ? 1 : 0
      }, e.prototype.equals = function(t) {
        return t instanceof e && this.key === t.key
      }, e.prototype.evaluate = function(e) {
        return !e.getValue(this.key)
      }, e.prototype.normalize = function() {
        return this
      }, e.prototype.serialize = function() {
        return "!" + this.key
      }, e.prototype.keys = function() {
        return [this.key]
      }, e
    }();
    t.ContextKeyNotExpr = l;
    var d = function() {
      function e(t) {
        this.expr = e._normalizeArr(t)
      }
      return e.prototype.getType = function() {
        return o.And
      }, e.prototype.equals = function(t) {
        if (t instanceof e) {
          if (this.expr.length !== t.expr.length) return !1;
          for (var n = 0, r = this.expr.length; n < r; n++)
            if (!this.expr[n].equals(t.expr[n])) return !1;
          return !0
        }
        return !1
      }, e.prototype.evaluate = function(e) {
        for (var t = 0, n = this.expr.length; t < n; t++)
          if (!this.expr[t].evaluate(e)) return !1;
        return !0
      }, e._normalizeArr = function(t) {
        var n = [];
        if (t) {
          for (var r = 0, o = t.length; r < o; r++) {
            var s = t[r];
            s && ((s = s.normalize()) && (s instanceof e ? n = n.concat(s.expr) : n.push(s)))
          }
          n.sort(i)
        }
        return n
      }, e.prototype.normalize = function() {
        return 0 === this.expr.length ? null : 1 === this.expr.length ? this.expr[0] : this
      }, e.prototype.serialize = function() {
        return 0 === this.expr.length ? "" : 1 === this.expr.length ? this.normalize().serialize() : this.expr.map(function(e) {
          return e.serialize()
        }).join(" && ")
      }, e.prototype.keys = function() {
        for (var e = [], t = 0, n = this.expr; t < n.length; t++) {
          var r = n[t];
          e.push.apply(e, r.keys())
        }
        return e
      }, e
    }();
    t.ContextKeyAndExpr = d;
    var f = function(e) {
      function t(t, n) {
        var r = e.call(this, t) || this;
        return r._defaultValue = n, r
      }
      return n(t, e), t.prototype.bindTo = function(e) {
        return e.createKey(this.key, this._defaultValue)
      }, t.prototype.getValue = function(e) {
        return e.getContextKeyValue(this.key)
      }, t.prototype.toNegated = function() {
        return s.not(this.key)
      }, t.prototype.isEqualTo = function(e) {
        return s.equals(this.key, e)
      }, t.prototype.notEqualsTo = function(e) {
        return s.notEquals(this.key, e)
      }, t
    }(a);
    t.RawContextKey = f, t.IContextKeyService = r.createDecorator("contextKeyService"), t.SET_CONTEXT_COMMAND_ID = "setContext"
  }), define(e[34], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IEditorService = n.createDecorator("editorService");
    var r;
    ! function(e) {
      e[e.ONE = 0] = "ONE", e[e.TWO = 1] = "TWO", e[e.THREE = 2] = "THREE"
    }(r = t.Position || (t.Position = {})), t.POSITIONS = [r.ONE, r.TWO, r.THREE];
    ! function(e) {
      e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT"
    }(t.Direction || (t.Direction = {}));
    ! function(e) {
      e[e.SHORT = 0] = "SHORT", e[e.MEDIUM = 1] = "MEDIUM", e[e.LONG = 2] = "LONG"
    }(t.Verbosity || (t.Verbosity = {}))
  }), define(e[33], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IEnvironmentService = n.createDecorator("environmentService")
  }), define(e[31], t([1, 0, 13, 10, 6, 8, 37]), function(e, t, r, i, o, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IFileService = o.createDecorator("fileService");
    ! function(e) {
      e[e.File = 0] = "File", e[e.Dir = 1] = "Dir", e[e.Symlink = 2] = "Symlink"
    }(t.FileType || (t.FileType = {}));
    ! function(e) {
      e[e.CREATE = 0] = "CREATE", e[e.DELETE = 1] = "DELETE", e[e.MOVE = 2] = "MOVE", e[e.COPY = 3] = "COPY", e[e.IMPORT = 4] = "IMPORT"
    }(t.FileOperation || (t.FileOperation = {}));
    var u = function() {
      function e(e, t, n) {
        this._resource = e, this._operation = t, this._target = n
      }
      return Object.defineProperty(e.prototype, "resource", {
          get: function() {
            return this._resource
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "target", {
          get: function() {
            return this._target
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "operation", {
          get: function() {
            return this._operation
          },
          enumerable: !0,
          configurable: !0
        }), e
    }();
    t.FileOperationEvent = u;
    var c;
    ! function(e) {
      e[e.UPDATED = 0] = "UPDATED", e[e.ADDED = 1] = "ADDED", e[e.DELETED = 2] = "DELETED"
    }(c = t.FileChangeType || (t.FileChangeType = {}));
    var l = function() {
      function e(e) {
        this._changes = e
      }
      return Object.defineProperty(e.prototype, "changes", {
        get: function() {
          return this._changes
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.contains = function(e, t) {
        return !!e && this._changes.some(function(n) {
          return n.type === t && (t === c.DELETED ? a.isEqualOrParent(e, n.resource, !i.isLinux) : a.isEqual(e, n.resource, !i.isLinux))
        })
      }, e.prototype.getAdded = function() {
        return this.getOfType(c.ADDED)
      }, e.prototype.gotAdded = function() {
        return this.hasType(c.ADDED)
      }, e.prototype.getDeleted = function() {
        return this.getOfType(c.DELETED)
      }, e.prototype.gotDeleted = function() {
        return this.hasType(c.DELETED)
      }, e.prototype.getUpdated = function() {
        return this.getOfType(c.UPDATED)
      }, e.prototype.gotUpdated = function() {
        return this.hasType(c.UPDATED)
      }, e.prototype.getOfType = function(e) {
        return this._changes.filter(function(t) {
          return t.type === e
        })
      }, e.prototype.hasType = function(e) {
        return this._changes.some(function(t) {
          return t.type === e
        })
      }, e
    }();
    t.FileChangesEvent = l, t.isParent = function(e, t, n) {
      return !(!e || !t || e === t) && !(t.length > e.length) && (t.charAt(t.length - 1) !== r.nativeSep && (t += r.nativeSep), n ? s.beginsWithIgnoreCase(e, t) : 0 === e.indexOf(t))
    }, t.indexOf = function(e, t, n) {
      return t.length > e.length ? -1 : e === t ? 0 : (n && (e = e.toLowerCase(), t = t.toLowerCase()), e.indexOf(t))
    };
    var d = function(e) {
      function t(t, n, r) {
        var i = e.call(this, t) || this;
        return i.fileOperationResult = n, i.options = r, i
      }
      return n(t, e), t
    }(Error);
    t.FileOperationError = d;
    ! function(e) {
      e[e.FILE_IS_BINARY = 0] = "FILE_IS_BINARY", e[e.FILE_IS_DIRECTORY = 1] = "FILE_IS_DIRECTORY", e[e.FILE_NOT_FOUND = 2] = "FILE_NOT_FOUND", e[e.FILE_NOT_MODIFIED_SINCE = 3] = "FILE_NOT_MODIFIED_SINCE", e[e.FILE_MODIFIED_SINCE = 4] = "FILE_MODIFIED_SINCE", e[e.FILE_MOVE_CONFLICT = 5] = "FILE_MOVE_CONFLICT", e[e.FILE_READ_ONLY = 6] = "FILE_READ_ONLY",
        e[e.FILE_PERMISSION_DENIED = 7] = "FILE_PERMISSION_DENIED", e[e.FILE_TOO_LARGE = 8] = "FILE_TOO_LARGE", e[e.FILE_INVALID_PATH = 9] = "FILE_INVALID_PATH"
    }(t.FileOperationResult || (t.FileOperationResult = {})), t.AutoSaveConfiguration = {
      OFF: "off",
      AFTER_DELAY: "afterDelay",
      ON_FOCUS_CHANGE: "onFocusChange",
      ON_WINDOW_CHANGE: "onWindowChange"
    }, t.HotExitConfiguration = {
      OFF: "off",
      ON_EXIT: "onExit",
      ON_EXIT_AND_WINDOW_CLOSE: "onExitAndWindowClose"
    }, t.CONTENT_CHANGE_EVENT_BUFFER_DELAY = 1e3, t.FILES_ASSOCIATIONS_CONFIG = "files.associations", t.FILES_EXCLUDE_CONFIG = "files.exclude", t.SUPPORTED_ENCODINGS = {
      utf8: {
        labelLong: "UTF-8",
        labelShort: "UTF-8",
        order: 1,
        alias: "utf8bom"
      },
      utf8bom: {
        labelLong: "UTF-8 with BOM",
        labelShort: "UTF-8 with BOM",
        encodeOnly: !0,
        order: 2,
        alias: "utf8"
      },
      utf16le: {
        labelLong: "UTF-16 LE",
        labelShort: "UTF-16 LE",
        order: 3
      },
      utf16be: {
        labelLong: "UTF-16 BE",
        labelShort: "UTF-16 BE",
        order: 4
      },
      windows1252: {
        labelLong: "Western (Windows 1252)",
        labelShort: "Windows 1252",
        order: 5
      },
      iso88591: {
        labelLong: "Western (ISO 8859-1)",
        labelShort: "ISO 8859-1",
        order: 6
      },
      iso88593: {
        labelLong: "Western (ISO 8859-3)",
        labelShort: "ISO 8859-3",
        order: 7
      },
      iso885915: {
        labelLong: "Western (ISO 8859-15)",
        labelShort: "ISO 8859-15",
        order: 8
      },
      macroman: {
        labelLong: "Western (Mac Roman)",
        labelShort: "Mac Roman",
        order: 9
      },
      cp437: {
        labelLong: "DOS (CP 437)",
        labelShort: "CP437",
        order: 10
      },
      windows1256: {
        labelLong: "Arabic (Windows 1256)",
        labelShort: "Windows 1256",
        order: 11
      },
      iso88596: {
        labelLong: "Arabic (ISO 8859-6)",
        labelShort: "ISO 8859-6",
        order: 12
      },
      windows1257: {
        labelLong: "Baltic (Windows 1257)",
        labelShort: "Windows 1257",
        order: 13
      },
      iso88594: {
        labelLong: "Baltic (ISO 8859-4)",
        labelShort: "ISO 8859-4",
        order: 14
      },
      iso885914: {
        labelLong: "Celtic (ISO 8859-14)",
        labelShort: "ISO 8859-14",
        order: 15
      },
      windows1250: {
        labelLong: "Central European (Windows 1250)",
        labelShort: "Windows 1250",
        order: 16
      },
      iso88592: {
        labelLong: "Central European (ISO 8859-2)",
        labelShort: "ISO 8859-2",
        order: 17
      },
      cp852: {
        labelLong: "Central European (CP 852)",
        labelShort: "CP 852",
        order: 18
      },
      windows1251: {
        labelLong: "Cyrillic (Windows 1251)",
        labelShort: "Windows 1251",
        order: 19
      },
      cp866: {
        labelLong: "Cyrillic (CP 866)",
        labelShort: "CP 866",
        order: 20
      },
      iso88595: {
        labelLong: "Cyrillic (ISO 8859-5)",
        labelShort: "ISO 8859-5",
        order: 21
      },
      koi8r: {
        labelLong: "Cyrillic (KOI8-R)",
        labelShort: "KOI8-R",
        order: 22
      },
      koi8u: {
        labelLong: "Cyrillic (KOI8-U)",
        labelShort: "KOI8-U",
        order: 23
      },
      iso885913: {
        labelLong: "Estonian (ISO 8859-13)",
        labelShort: "ISO 8859-13",
        order: 24
      },
      windows1253: {
        labelLong: "Greek (Windows 1253)",
        labelShort: "Windows 1253",
        order: 25
      },
      iso88597: {
        labelLong: "Greek (ISO 8859-7)",
        labelShort: "ISO 8859-7",
        order: 26
      },
      windows1255: {
        labelLong: "Hebrew (Windows 1255)",
        labelShort: "Windows 1255",
        order: 27
      },
      iso88598: {
        labelLong: "Hebrew (ISO 8859-8)",
        labelShort: "ISO 8859-8",
        order: 28
      },
      iso885910: {
        labelLong: "Nordic (ISO 8859-10)",
        labelShort: "ISO 8859-10",
        order: 29
      },
      iso885916: {
        labelLong: "Romanian (ISO 8859-16)",
        labelShort: "ISO 8859-16",
        order: 30
      },
      windows1254: {
        labelLong: "Turkish (Windows 1254)",
        labelShort: "Windows 1254",
        order: 31
      },
      iso88599: {
        labelLong: "Turkish (ISO 8859-9)",
        labelShort: "ISO 8859-9",
        order: 32
      },
      windows1258: {
        labelLong: "Vietnamese (Windows 1258)",
        labelShort: "Windows 1258",
        order: 33
      },
      gbk: {
        labelLong: "Chinese (GBK)",
        labelShort: "GBK",
        order: 34
      },
      gb18030: {
        labelLong: "Chinese (GB18030)",
        labelShort: "GB18030",
        order: 35
      },
      cp950: {
        labelLong: "Traditional Chinese (Big5)",
        labelShort: "Big5",
        order: 36
      },
      big5hkscs: {
        labelLong: "Traditional Chinese (Big5-HKSCS)",
        labelShort: "Big5-HKSCS",
        order: 37
      },
      shiftjis: {
        labelLong: "Japanese (Shift JIS)",
        labelShort: "Shift JIS",
        order: 38
      },
      eucjp: {
        labelLong: "Japanese (EUC-JP)",
        labelShort: "EUC-JP",
        order: 39
      },
      euckr: {
        labelLong: "Korean (EUC-KR)",
        labelShort: "EUC-KR",
        order: 40
      },
      windows874: {
        labelLong: "Thai (Windows 874)",
        labelShort: "Windows 874",
        order: 41
      },
      iso885911: {
        labelLong: "Latin/Thai (ISO 8859-11)",
        labelShort: "ISO 8859-11",
        order: 42
      },
      koi8ru: {
        labelLong: "Cyrillic (KOI8-RU)",
        labelShort: "KOI8-RU",
        order: 43
      },
      koi8t: {
        labelLong: "Tajik (KOI8-T)",
        labelShort: "KOI8-T",
        order: 44
      },
      gb2312: {
        labelLong: "Simplified Chinese (GB 2312)",
        labelShort: "GB 2312",
        order: 45
      },
      cp865: {
        labelLong: "Nordic DOS (CP 865)",
        labelShort: "CP 865",
        order: 46
      },
      cp850: {
        labelLong: "Western European DOS (CP 850)",
        labelShort: "CP 850",
        order: 47
      }
    };
    ! function(e) {
      e[e.FILE = 0] = "FILE", e[e.FOLDER = 1] = "FOLDER", e[e.ROOT_FOLDER = 2] = "ROOT_FOLDER"
    }(t.FileKind || (t.FileKind = {}))
  }), define(e[95], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    ! function(e) {
      e[e.Default = 1] = "Default", e[e.User = 2] = "User"
    }(t.KeybindingSource || (t.KeybindingSource = {})), t.IKeybindingService = n.createDecorator("keybindingService")
  });
  var s = this && this.__decorate || function(e, t, n, r) {
      var i, o = arguments.length,
        s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
      else
        for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
      return o > 3 && s && Object.defineProperty(t, n, s), s
    },
    a = this && this.__param || function(e, t) {
      return function(n, r) {
        t(n, r, e)
      }
    };
  define(e[44], t([1, 0, 33, 6, 10]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        t.ILogService = r.createDecorator("logService");
      var o;
      ! function(e) {
        e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.Off = 6] = "Off"
      }(o = t.LogLevel || (t.LogLevel = {}));
      var u = function() {
        function e(e) {
          this.level = o.Error, this.setLevel(e.logLevel), this.useColors = !i.isWindows
        }
        return e.prototype.setLevel = function(e) {
          this.level = e
        }, e.prototype.getLevel = function() {
          return this.level
        }, e.prototype.trace = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Trace && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
        }, e.prototype.debug = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Debug && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
        }, e.prototype.info = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Info && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
        }, e.prototype.warn = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Warning && (this.useColors ? console.warn.apply(console, ["[93m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.warn.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
        }, e.prototype.error = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Error && (this.useColors ? console.error.apply(console, ["[91m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.error.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
        }, e.prototype.critical = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Critical && (this.useColors ? console.error.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.error.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
        }, e.prototype.dispose = function() {}, e = s([a(0, n.IEnvironmentService)], e)
      }();
      t.ConsoleLogMainService = u;
      var c = function() {
        function e(e) {
          this.level = o.Error, this.setLevel(e.logLevel)
        }
        return e.prototype.setLevel = function(e) {
            this.level = e
          }, e.prototype.getLevel = function() {
            return this.level
          }, e.prototype.trace = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            this.level <= o.Trace && console.log.apply(console, ["%cTRACE", "color: #888", e].concat(t))
          },
          e.prototype.debug = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            this.level <= o.Debug && console.log.apply(console, ["%cDEBUG", "background: #eee; color: #888", e].concat(t))
          }, e.prototype.info = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            this.level <= o.Info && console.log.apply(console, ["%c INFO", "color: #33f", e].concat(t))
          }, e.prototype.warn = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            this.level <= o.Warning && console.log.apply(console, ["%c WARN", "color: #993", e].concat(t))
          }, e.prototype.error = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            this.level <= o.Error && console.log.apply(console, ["%c  ERR", "color: #f33", e].concat(t))
          }, e.prototype.critical = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            this.level <= o.Critical && console.log.apply(console, ["%cCRITI", "background: #f33; color: white", e].concat(t))
          }, e.prototype.dispose = function() {}, e = s([a(0, n.IEnvironmentService)], e)
      }();
      t.ConsoleLogService = c;
      var l = function() {
        function e(e) {
          this.logServices = e
        }
        return e.prototype.setLevel = function(e) {
          for (var t = 0, n = this.logServices; t < n.length; t++) {
            n[t].setLevel(e)
          }
        }, e.prototype.getLevel = function() {
          for (var e = 0, t = this.logServices; e < t.length; e++) {
            return t[e].getLevel()
          }
          return o.Info
        }, e.prototype.trace = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          for (var r = 0, i = this.logServices; r < i.length; r++) {
            var o = i[r];
            o.trace.apply(o, [e].concat(t))
          }
        }, e.prototype.debug = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          for (var r = 0, i = this.logServices; r < i.length; r++) {
            var o = i[r];
            o.debug.apply(o, [e].concat(t))
          }
        }, e.prototype.info = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          for (var r = 0, i = this.logServices; r < i.length; r++) {
            var o = i[r];
            o.info.apply(o, [e].concat(t))
          }
        }, e.prototype.warn = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          for (var r = 0, i = this.logServices; r < i.length; r++) {
            var o = i[r];
            o.warn.apply(o, [e].concat(t))
          }
        }, e.prototype.error = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          for (var r = 0, i = this.logServices; r < i.length; r++) {
            var o = i[r];
            o.error.apply(o, [e].concat(t))
          }
        }, e.prototype.critical = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          for (var r = 0, i = this.logServices; r < i.length; r++) {
            var o = i[r];
            o.critical.apply(o, [e].concat(t))
          }
        }, e.prototype.dispose = function() {
          for (var e = 0, t = this.logServices; e < t.length; e++) {
            t[e].dispose()
          }
        }, e
      }();
      t.MultiplexLogService = l;
      var d = function() {
        function e() {}
        return e.prototype.setLevel = function(e) {}, e.prototype.getLevel = function() {
          return o.Info
        }, e.prototype.trace = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, e.prototype.debug = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, e.prototype.info = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, e.prototype.warn = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, e.prototype.error = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, e.prototype.critical = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, e.prototype.dispose = function() {}, e
      }();
      t.NullLogService = d
    }), define(e[54], t([1, 0, 15, 44, 168]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createSpdLogService = function(e, t, s) {
        try {
          i.setAsyncMode(8192, 2e3);
          var a = s ? n.join(t.logsPath, s) : t.logsPath,
            u = n.join(a, e + ".log"),
            c = new i.RotatingLogger(e, u, 5242880, 6);
          return c.setLevel(0), new o(c, t.logLevel)
        } catch (e) {
          console.error(e)
        }
        return new r.NullLogService
      };
      var o = function() {
        function e(e, t) {
          void 0 === t && (t = r.LogLevel.Error), this.logger = e, this.level = t
        }
        return e.prototype.setLevel = function(e) {
          this.level = e
        }, e.prototype.getLevel = function() {
          return this.level
        }, e.prototype.trace = function() {
          this.level <= r.LogLevel.Trace && this.logger.trace(this.format(arguments))
        }, e.prototype.debug = function() {
          this.level <= r.LogLevel.Debug && this.logger.debug(this.format(arguments))
        }, e.prototype.info = function() {
          this.level <= r.LogLevel.Info && this.logger.info(this.format(arguments))
        }, e.prototype.warn = function() {
          this.level <= r.LogLevel.Warning && this.logger.warn(this.format(arguments))
        }, e.prototype.error = function() {
          if (this.level <= r.LogLevel.Error) {
            var e = arguments[0];
            if (e instanceof Error) {
              var t = Array.prototype.slice.call(arguments);
              t[0] = e.stack, this.logger.error(this.format(t))
            } else this.logger.error(this.format(arguments))
          }
        }, e.prototype.critical = function() {
          this.level <= r.LogLevel.Critical && this.logger.critical(this.format(arguments))
        }, e.prototype.dispose = function() {
          this.logger.flush(), this.logger.drop()
        }, e.prototype.format = function(e) {
          for (var t = "", n = 0; n < e.length; n++) {
            var r = e[n];
            if ("object" == typeof r) try {
              r = JSON.stringify(r)
            } catch (e) {}
            t += (n > 0 ? " " : "") + r
          }
          return t
        }, e
      }()
    }), define(e[55], t([1, 0, 15, 3]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
        o = n.join(i, "package.json");
      t.default = e.__$__nodeRequire(o)
    }),
    define(e[56], t([1, 0, 15, 3]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
        o = n.join(i, "product.json"),
        s = e.__$__nodeRequire(o);
      process.env.VSCODE_DEV && (s.nameShort += " Dev", s.nameLong += " Dev", s.dataFolderName += "-dev"), t.default = s
    }), define(e[101], t([1, 0, 102, 161, 43, 15, 3, 29, 55, 56, 44, 93, 10]), function(e, t, n, r, i, o, a, u, c, l, d, f, p) {
      "use strict";

      function h(e, t) {
        return p.isWindows ? function(e, t) {
          return "\\\\.\\pipe\\" + n.createHash("md5").update(e).digest("hex") + "-" + c.default.version + "-" + t + "-sock"
        }(e, t) : function(e, t) {
          return b ? o.join(b, c.default.name + "-" + c.default.version + "-" + t + ".sock") : o.join(e, c.default.version + "-" + t + ".sock")
        }(e, t)
      }

      function g(e, t) {
        return v(e.debugPluginHost, e.debugBrkPluginHost, 5870, t, e.debugId)
      }

      function m(e, t) {
        return v(e.debugSearch, e.debugBrkSearch, 5876, t)
      }

      function v(e, t, n, r, i) {
        var o = t || e,
          s = Number(o) || (r ? null : n);
        return {
          port: s,
          break: !!s && Boolean(!!t),
          debugId: i
        }
      }

      function y(e, t) {
        if (e) {
          var n = o.resolve(e);
          return o.normalize(e) === n ? n : o.resolve(t.env.VSCODE_CWD || t.cwd(), e)
        }
      }

      function _(e, t) {
        return y(e["user-data-dir"], t) || o.resolve(r.getDefaultUserDataPath(t.platform))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var b = process.env.XDG_RUNTIME_DIR,
        C = function() {
          function t(e, t) {
            if (this._args = e, this._execPath = t, !process.env.VSCODE_LOGS) {
              var n = f.toLocalISOString(new Date).replace(/-|:|\.\d+Z$/g, "");
              process.env.VSCODE_LOGS = o.join(this.userDataPath, "logs", n)
            }
            this.logsPath = process.env.VSCODE_LOGS
          }
          return Object.defineProperty(t.prototype, "args", {
              get: function() {
                return this._args
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "appRoot", {
              get: function() {
                return o.dirname(a.default.parse(e.toUrl("")).fsPath)
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "execPath", {
              get: function() {
                return this._execPath
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "cliPath", {
              get: function() {
                return function(e, t, n) {
                  return p.isWindows ? n ? o.join(o.dirname(e), "bin", l.default.applicationName + ".cmd") : o.join(t, "scripts", "code-cli.bat") : p.isLinux ? n ? o.join(o.dirname(e), "bin", "" + l.default.applicationName) : o.join(t, "scripts", "code-cli.sh") : n ? o.join(t, "bin", "code") : o.join(t, "scripts", "code-cli.sh")
                }(this.execPath, this.appRoot, this.isBuilt)
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "userHome", {
              get: function() {
                return i.homedir()
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "userDataPath", {
              get: function() {
                return _(this._args, process)
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "appNameLong", {
              get: function() {
                return l.default.nameLong
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "appQuality", {
              get: function() {
                return l.default.quality
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "appSettingsHome", {
              get: function() {
                return o.join(this.userDataPath, "User")
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "appSettingsPath", {
              get: function() {
                return o.join(this.appSettingsHome, "settings.json")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "settingsSearchBuildId", {
              get: function() {
                return l.default.settingsSearchBuildId
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "settingsSearchUrl", {
              get: function() {
                return l.default.settingsSearchUrl
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "appKeybindingsPath", {
              get: function() {
                return o.join(this.appSettingsHome, "keybindings.json")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "isExtensionDevelopment", {
              get: function() {
                return !!this._args.extensionDevelopmentPath
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "backupHome", {
              get: function() {
                return o.join(this.userDataPath, "Backups")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "backupWorkspacesPath", {
              get: function() {
                return o.join(this.backupHome, "workspaces.json")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "workspacesHome", {
              get: function() {
                return o.join(this.userDataPath, "Workspaces")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "installSourcePath", {
              get: function() {
                return o.join(this.userDataPath, "installSource")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "extensionsPath", {
              get: function() {
                return y(this._args["extensions-dir"], process) || process.env.VSCODE_EXTENSIONS || o.join(this.userHome, l.default.dataFolderName, "extensions")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "extensionDevelopmentPath", {
              get: function() {
                return this._args.extensionDevelopmentPath ? o.normalize(this._args.extensionDevelopmentPath) : this._args.extensionDevelopmentPath
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "extensionTestsPath", {
              get: function() {
                return this._args.extensionTestsPath ? o.normalize(this._args.extensionTestsPath) : this._args.extensionTestsPath
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "disableExtensions", {
              get: function() {
                return this._args["disable-extensions"]
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "skipGettingStarted", {
              get: function() {
                return this._args["skip-getting-started"]
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "skipReleaseNotes", {
              get: function() {
                return this._args["skip-release-notes"]
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "skipAddToRecentlyOpened", {
              get: function() {
                return this._args["skip-add-to-recently-opened"]
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "debugExtensionHost", {
              get: function() {
                return g(this._args, this.isBuilt)
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "debugSearch", {
              get: function() {
                return m(this._args, this.isBuilt)
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "isBuilt", {
              get: function() {
                return !process.env.VSCODE_DEV
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "verbose", {
              get: function() {
                return this._args.verbose
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "logLevel", {
              get: function() {
                if (this.verbose) return d.LogLevel.Trace;
                if ("string" == typeof this._args.log) {
                  switch (this._args.log.toLowerCase()) {
                    case "trace":
                      return d.LogLevel.Trace;
                    case "debug":
                      return d.LogLevel.Debug;
                    case "info":
                      return d.LogLevel.Info;
                    case "warn":
                      return d.LogLevel.Warning;
                    case "error":
                      return d.LogLevel.Error;
                    case "critical":
                      return d.LogLevel.Critical;
                    case "off":
                      return d.LogLevel.Off
                  }
                }
                return d.LogLevel.Info
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "wait", {
              get: function() {
                return this._args.wait
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "logExtensionHostCommunication", {
              get: function() {
                return this._args.logExtensionHostCommunication
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "performance", {
              get: function() {
                return this._args.performance
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "status", {
              get: function() {
                return this._args.status
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "mainIPCHandle", {
              get: function() {
                return h(this.userDataPath, "main")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "sharedIPCHandle", {
              get: function() {
                return h(this.userDataPath, "shared")
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "nodeCachedDataDir", {
              get: function() {
                return this.isBuilt ? o.join(this.userDataPath, "CachedData", l.default.commit || new Array(41).join("0")) : void 0
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "disableUpdates", {
              get: function() {
                return !!this._args["disable-updates"]
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(t.prototype, "disableCrashReporter", {
              get: function() {
                return !!this._args["disable-crash-reporter"]
              },
              enumerable: !0,
              configurable: !0
            }), s([u.memoize], t.prototype, "appRoot", null), s([u.memoize], t.prototype, "cliPath", null), s([u.memoize], t.prototype, "userHome", null),
            s([u.memoize], t.prototype, "userDataPath", null), s([u.memoize], t.prototype, "appSettingsHome", null), s([u.memoize], t.prototype, "appSettingsPath", null), s([u.memoize], t.prototype, "settingsSearchBuildId", null), s([u.memoize], t.prototype, "settingsSearchUrl", null), s([u.memoize], t.prototype, "appKeybindingsPath", null), s([u.memoize], t.prototype, "isExtensionDevelopment", null), s([u.memoize], t.prototype, "backupHome", null), s([u.memoize], t.prototype, "backupWorkspacesPath", null), s([u.memoize], t.prototype, "workspacesHome", null), s([u.memoize], t.prototype, "installSourcePath", null), s([u.memoize], t.prototype, "extensionsPath", null), s([u.memoize], t.prototype, "extensionDevelopmentPath", null), s([u.memoize], t.prototype, "extensionTestsPath", null), s([u.memoize], t.prototype, "debugExtensionHost", null), s([u.memoize], t.prototype, "debugSearch", null), s([u.memoize], t.prototype, "logLevel", null), s([u.memoize], t.prototype, "mainIPCHandle", null), s([u.memoize], t.prototype, "sharedIPCHandle", null), s([u.memoize], t.prototype, "nodeCachedDataDir", null), t
        }();
      t.EnvironmentService = C, t.parseExtensionHostPort = g, t.parseSearchPort = m, t.parseDebugPort = v, t.parseUserDataDir = _
    }), define(e[103], t([1, 0, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IProgressService = n.createDecorator("progressService"), t.emptyProgress = Object.freeze({
        report: function() {}
      });
      var r = function() {
        function e(e) {
          this._callback = e
        }
        return Object.defineProperty(e.prototype, "value", {
          get: function() {
            return this._value
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.report = function(e) {
          this._value = e, this._callback(this._value)
        }, e
      }();
      t.Progress = r;
      ! function(e) {
        e[e.Scm = 1] = "Scm", e[e.Window = 10] = "Window"
      }(t.ProgressLocation || (t.ProgressLocation = {})), t.IProgressService2 = n.createDecorator("progressService2")
    }), define(e[22], t([1, 0, 21, 35]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e() {
          this.data = {}
        }
        return e.prototype.add = function(e, t) {
          r.ok(n.isString(e)), r.ok(n.isObject(t)),
            r.ok(!this.data.hasOwnProperty(e), "There is already an extension with this id"), this.data[e] = t
        }, e.prototype.knows = function(e) {
          return this.data.hasOwnProperty(e)
        }, e.prototype.as = function(e) {
          return this.data[e] || null
        }, e
      }();
      t.Registry = new i
    }), define(e[58], t([1, 0, 79, 4, 22, 123, 40]), function(e, t, n, r, i, o, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Extensions = {
        ModesRegistry: "editor.modesRegistry"
      };
      var a = function() {
        function e() {
          this._onDidAddLanguages = new r.Emitter, this.onDidAddLanguages = this._onDidAddLanguages.event, this._languages = []
        }
        return e.prototype.registerLanguage = function(e) {
          this._languages.push(e), this._onDidAddLanguages.fire([e])
        }, e.prototype.registerLanguages = function(e) {
          this._languages = this._languages.concat(e), this._onDidAddLanguages.fire(e)
        }, e.prototype.getLanguages = function() {
          return this._languages.slice(0)
        }, e
      }();
      t.EditorModesRegistry = a, t.ModesRegistry = new a, i.Registry.add(t.Extensions.ModesRegistry, t.ModesRegistry), t.PLAINTEXT_MODE_ID = "plaintext",
        t.PLAINTEXT_LANGUAGE_IDENTIFIER = new s.LanguageIdentifier(t.PLAINTEXT_MODE_ID, 1), t.ModesRegistry.registerLanguage({
          id: t.PLAINTEXT_MODE_ID,
          extensions: [".txt", ".gitignore"],
          aliases: [n.localize(0, null), "text"],
          mimetypes: ["text/plain"]
        }), o.LanguageConfigurationRegistry.register(t.PLAINTEXT_LANGUAGE_IDENTIFIER, {
          brackets: [
            ["(", ")"],
            ["[", "]"],
            ["{", "}"]
          ]
        })
    }), define(e[106], t([1, 0, 22, 4]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Extensions = {
        JSONContribution: "base.contributions.json"
      };
      var i = new(function() {
        function e() {
          this._onDidChangeSchema = new r.Emitter, this.onDidChangeSchema = this._onDidChangeSchema.event, this.schemasById = {}
        }
        return e.prototype.registerSchema = function(e, t) {
          this.schemasById[function(e) {
            return e.length > 0 && "#" === e.charAt(e.length - 1) ? e.substring(0, e.length - 1) : e
          }(e)] = t, this._onDidChangeSchema.fire(e)
        }, e.prototype.getSchemaContributions = function() {
          return {
            schemas: this.schemasById
          }
        }, e
      }());
      n.Registry.add(t.Extensions.JSONContribution, i)
    }),
    define(e[27], t([1, 0, 80, 4, 22, 21, 8, 106, 12]), function(e, t, n, r, i, o, s, a, u) {
      "use strict";

      function c(e) {
        return t.OVERRIDE_PROPERTY_PATTERN.test(e) ? n.localize(3, null, e) : void 0 !== m.getConfigurationProperties()[e] ? n.localize(4, null, e) : null
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Extensions = {
        Configuration: "base.contributions.configuration"
      };
      var l;
      ! function(e) {
        e[e.WINDOW = 1] = "WINDOW", e[e.RESOURCE = 2] = "RESOURCE"
      }(l = t.ConfigurationScope || (t.ConfigurationScope = {})), t.settingsSchema = {
        properties: {},
        patternProperties: {},
        additionalProperties: !1,
        errorMessage: "Unknown configuration setting"
      }, t.resourceSettingsSchema = {
        properties: {},
        patternProperties: {},
        additionalProperties: !1,
        errorMessage: "Unknown configuration setting"
      }, t.editorConfigurationSchemaId = "vscode://schemas/settings/editor";
      var d = i.Registry.as(a.Extensions.JSONContribution),
        f = function() {
          function e() {
            this.overrideIdentifiers = [], this._onDidRegisterConfiguration = new r.Emitter, this.onDidRegisterConfiguration = this._onDidRegisterConfiguration.event,
              this.configurationContributors = [], this.editorConfigurationSchema = {
                properties: {},
                patternProperties: {},
                additionalProperties: !1,
                errorMessage: "Unknown editor configuration setting"
              }, this.configurationProperties = {}, this.excludedConfigurationProperties = {}, this.computeOverridePropertyPattern(), d.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema)
          }
          return e.prototype.registerConfiguration = function(e, t) {
              void 0 === t && (t = !0), this.registerConfigurations([e], [], t)
            }, e.prototype.registerConfigurations = function(e, t, n) {
              var r = this;
              void 0 === n && (n = !0);
              var i = this.toConfiguration(t);
              i && e.push(i);
              var o = [];
              e.forEach(function(e) {
                o.push.apply(o, r.validateAndRegisterProperties(e, n)), r.configurationContributors.push(e), r.registerJSONConfiguration(e), r.updateSchemaForOverrideSettingsConfiguration(e)
              }), this._onDidRegisterConfiguration.fire(o)
            }, e.prototype.notifyConfigurationSchemaUpdated = function(e) {
              d.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema)
            },
            e.prototype.registerOverrideIdentifiers = function(e) {
              (t = this.overrideIdentifiers).push.apply(t, e), this.updateOverridePropertyPatternKey();
              var t
            }, e.prototype.toConfiguration = function(e) {
              for (var r = {
                  id: "defaultOverrides",
                  title: n.localize(0, null),
                  properties: {}
                }, i = 0, o = e; i < o.length; i++) {
                var s = o[i];
                for (var a in s.defaults) {
                  var u = s.defaults[a];
                  t.OVERRIDE_PROPERTY_PATTERN.test(a) && "object" == typeof u && (r.properties[a] = {
                    type: "object",
                    default: u,
                    description: n.localize(1, null, a),
                    $ref: t.editorConfigurationSchemaId
                  })
                }
              }
              return Object.keys(r.properties).length ? r : null
            }, e.prototype.validateAndRegisterProperties = function(e, t, n, r) {
              void 0 === t && (t = !0), void 0 === n && (n = l.WINDOW), void 0 === r && (r = !1), n = void 0 !== e.scope && null !== e.scope ? e.scope : n, r = e.overridable || r;
              var i = [],
                s = e.properties;
              if (s)
                for (var a in s) {
                  var u = void 0;
                  if (t && (u = c(a))) console.warn(u), delete s[a];
                  else {
                    var d = s[a],
                      f = d.default;
                    o.isUndefined(f) && (d.default = function(e) {
                      switch (Array.isArray(e) ? e[0] : e) {
                        case "boolean":
                          return !1;
                        case "integer":
                        case "number":
                          return 0;
                        case "string":
                          return "";
                        case "array":
                          return [];
                        case "object":
                          return {};
                        default:
                          return null
                      }
                    }(d.type)), r && (d.overridable = !0), void 0 === d.scope && (d.scope = n), !s[a].hasOwnProperty("included") || s[a].included ? (this.configurationProperties[a] = s[a], i.push(a)) : (this.excludedConfigurationProperties[a] = s[a], delete s[a])
                  }
                }
              var p = e.allOf;
              if (p)
                for (var h = 0, g = p; h < g.length; h++) {
                  var m = g[h];
                  i.push.apply(i, this.validateAndRegisterProperties(m, t, n, r))
                }
              return i
            }, e.prototype.getConfigurations = function() {
              return this.configurationContributors
            }, e.prototype.getConfigurationProperties = function() {
              return this.configurationProperties
            }, e.prototype.getExcludedConfigurationProperties = function() {
              return this.excludedConfigurationProperties
            }, e.prototype.registerJSONConfiguration = function(e) {
              function n(e) {
                var r = e.properties;
                if (r)
                  for (var i in r) t.settingsSchema.properties[i] = r[i], t.resourceSettingsSchema.properties[i] = u.deepClone(r[i]), r[i].scope !== l.RESOURCE && (t.resourceSettingsSchema.properties[i].doNotSuggest = !0);
                var o = e.allOf;
                o && o.forEach(n)
              }
              n(e)
            },
            e.prototype.updateSchemaForOverrideSettingsConfiguration = function(e) {
              e.id !== p && (this.update(e), d.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema))
            }, e.prototype.updateOverridePropertyPatternKey = function() {
              var e = t.settingsSchema.patternProperties[this.overridePropertyPattern];
              e || (e = {
                type: "object",
                description: n.localize(2, null),
                errorMessage: "Unknown Identifier. Use language identifiers",
                $ref: t.editorConfigurationSchemaId
              }), delete t.settingsSchema.patternProperties[this.overridePropertyPattern], this.computeOverridePropertyPattern(), t.settingsSchema.patternProperties[this.overridePropertyPattern] = e, t.resourceSettingsSchema.patternProperties[this.overridePropertyPattern] = e
            }, e.prototype.update = function(e) {
              var t = this,
                n = e.properties;
              if (n)
                for (var r in n) n[r].overridable && (this.editorConfigurationSchema.properties[r] = this.getConfigurationProperties()[r]);
              var i = e.allOf;
              i && i.forEach(function(e) {
                return t.update(e)
              })
            }, e.prototype.computeOverridePropertyPattern = function() {
              this.overridePropertyPattern = this.overrideIdentifiers.length ? g.replace("${0}", this.overrideIdentifiers.map(function(e) {
                return s.createRegExp(e, !1).source
              }).join("|")) : h
            }, e
        }(),
        p = "override",
        h = "\\[.*\\]$",
        g = "\\[(${0})\\]$";
      t.OVERRIDE_PROPERTY_PATTERN = new RegExp(h);
      var m = new f;
      i.Registry.add(t.Extensions.Configuration, m), t.validateProperty = c, t.getScopes = function(e) {
        var t = m.getConfigurationProperties();
        return e.map(function(e) {
          return t[e].scope
        })
      }
    }), define(e[23], t([1, 0, 12, 21, 3, 22, 6, 27]), function(e, t, n, r, i, o, s, a) {
      "use strict";

      function u(e, t) {
        var n = Object.create(null);
        for (var r in e) c(n, r, e[r], t);
        return n
      }

      function c(e, t, n, r) {
        for (var i = t.split("."), o = i.pop(), s = e, a = 0; a < i.length; a++) {
          var u = i[a],
            c = s[u];
          switch (typeof c) {
            case "undefined":
              c = s[u] = Object.create(null);
              break;
            case "object":
              break;
            default:
              return void r("Ignoring " + t + " as " + i.slice(0, a + 1).join(".") + " is " + JSON.stringify(c))
          }
          s = c
        }
        "object" == typeof s ? s[o] = n : r("Ignoring " + t + " as " + i.join(".") + " is " + JSON.stringify(s))
      }

      function l(e, t) {
        var n = t.shift();
        if (0 !== t.length) {
          if (-1 !== Object.keys(e).indexOf(n)) {
            var r = e[n];
            "object" != typeof r || Array.isArray(r) || (l(r, t), 0 === Object.keys(r).length && delete e[n])
          }
        } else delete e[n]
      }

      function d(e, t, n) {
        var r = function(e, t) {
          for (var n = e, r = 0; r < t.length; r++) {
            if ("object" != typeof n || null === n) return;
            n = n[t[r]]
          }
          return n
        }(e, t.split("."));
        return void 0 === r ? n : r
      }

      function f(e, t, n) {
        Object.keys(t).forEach(function(i) {
          i in e ? r.isObject(e[i]) && r.isObject(t[i]) ? f(e[i], t[i], n) : n && (e[i] = t[i]) : e[i] = t[i]
        })
      }

      function p(e) {
        return e.substring(1, e.length - 1)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IConfigurationService = s.createDecorator("configurationService"), t.isConfigurationOverrides = function(e) {
        return e && "object" == typeof e && (!e.overrideIdentifier || "string" == typeof e.overrideIdentifier) && (!e.resource || e.resource instanceof i.default)
      };
      ! function(e) {
        e[e.USER = 1] = "USER", e[e.WORKSPACE = 2] = "WORKSPACE", e[e.WORKSPACE_FOLDER = 3] = "WORKSPACE_FOLDER", e[e.DEFAULT = 4] = "DEFAULT", e[e.MEMORY = 5] = "MEMORY"
      }(t.ConfigurationTarget || (t.ConfigurationTarget = {})),
      t.compare = function(e, t) {
        for (var r = t.keys.filter(function(t) {
            return -1 === e.keys.indexOf(t)
          }), i = e.keys.filter(function(e) {
            return -1 === t.keys.indexOf(e)
          }), o = [], s = 0, a = e.keys; s < a.length; s++) {
          var u = a[s],
            c = d(e.contents, u),
            l = d(t.contents, u);
          n.equals(c, l) || o.push(u)
        }
        return {
          added: r,
          removed: i,
          updated: o
        }
      }, t.toOverrides = function(e, t) {
        for (var n = [], r = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties(), i = 0, s = Object.keys(e); i < s.length; i++) {
          var c = s[i];
          if (a.OVERRIDE_PROPERTY_PATTERN.test(c)) {
            var l = {};
            for (var d in e[c]) r[d] && r[d].overridable && (l[d] = e[c][d]);
            n.push({
              identifiers: [p(c).trim()],
              contents: u(l, t)
            })
          }
        }
        return n
      }, t.toValuesTree = u, t.addToValueTree = c, t.removeFromValueTree = function(e, t) {
        l(e, t.split("."))
      }, t.getConfigurationValue = d, t.merge = f, t.getConfigurationKeys = function() {
        var e = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties();
        return Object.keys(e)
      }, t.getDefaultValues = function() {
        var e = Object.create(null),
          t = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties();
        for (var n in t) c(e, n, t[n].default, function(e) {
          return console.error("Conflict in default settings: " + e)
        });
        return e
      }, t.overrideIdentifierFromKey = p, t.keyFromOverrideIdentifier = function(e) {
        return "[" + e + "]"
      }
    }), define(e[61], t([1, 0, 86, 20, 16, 21, 12, 3, 27, 23]), function(e, t, r, i, o, s, a, u, c, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var d = function() {
        function e(e, t, n) {
          void 0 === e && (e = {}), void 0 === t && (t = []), void 0 === n && (n = []), this._contents = e, this._keys = t, this._overrides = n, this.isFrozen = !1
        }
        return Object.defineProperty(e.prototype, "contents", {
            get: function() {
              return this.checkAndFreeze(this._contents)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "overrides", {
            get: function() {
              return this.checkAndFreeze(this._overrides)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "keys", {
            get: function() {
              return this.checkAndFreeze(this._keys)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.getValue = function(e) {
            return e ? l.getConfigurationValue(this.contents, e) : this.contents
          },
          e.prototype.override = function(t) {
            var n = this.getContentsForOverrideIdentifer(t);
            if (!n || "object" != typeof n || !Object.keys(n).length) return this;
            for (var r = {}, i = 0, s = o.distinct(Object.keys(this.contents).concat(Object.keys(n))); i < s.length; i++) {
              var u = s[i],
                c = this.contents[u],
                l = n[u];
              l && ("object" == typeof c && "object" == typeof l ? (c = a.deepClone(c), this.mergeContents(c, l)) : c = l), r[u] = c
            }
            return new e(r)
          }, e.prototype.merge = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            for (var r = a.deepClone(this.contents), i = a.deepClone(this.overrides), s = this.keys.slice(), u = 0, c = t; u < c.length; u++) {
              var l = c[u];
              this.mergeContents(r, l.contents);
              for (var d = function(e) {
                  var t = i.filter(function(t) {
                    return o.equals(t.identifiers, e.identifiers)
                  })[0];
                  t ? f.mergeContents(t.contents, e.contents) : i.push(e)
                }, f = this, p = 0, h = l.overrides; p < h.length; p++) {
                d(h[p])
              }
              for (var g = 0, m = l.keys; g < m.length; g++) {
                var v = m[g]; - 1 === s.indexOf(v) && s.push(v)
              }
            }
            return new e(r, s, i)
          }, e.prototype.freeze = function() {
            return this.isFrozen = !0, this
          },
          e.prototype.mergeContents = function(e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var i = r[n];
              i in e && s.isObject(e[i]) && s.isObject(t[i]) ? this.mergeContents(e[i], t[i]) : e[i] = a.deepClone(t[i])
            }
          }, e.prototype.checkAndFreeze = function(e) {
            return this.isFrozen && !Object.isFrozen(e) ? a.deepFreeze(e) : e
          }, e.prototype.getContentsForOverrideIdentifer = function(e) {
            for (var t = 0, n = this.overrides; t < n.length; t++) {
              var r = n[t];
              if (-1 !== r.identifiers.indexOf(e)) return r.contents
            }
            return null
          }, e.prototype.toJSON = function() {
            return {
              contents: this.contents,
              overrides: this.overrides,
              keys: this.keys
            }
          }, e.prototype.setValue = function(e, t) {
            this.addKey(e), l.addToValueTree(this.contents, e, t, function(e) {
              throw new Error(e)
            })
          }, e.prototype.removeValue = function(e) {
            this.removeKey(e) && l.removeFromValueTree(this.contents, e)
          }, e.prototype.addKey = function(e) {
            for (var t = this.keys.length, n = 0; n < t; n++) 0 === e.indexOf(this.keys[n]) && (t = n);
            this.keys.splice(t, 1, e)
          }, e.prototype.removeKey = function(e) {
            var t = this.keys.indexOf(e);
            return -1 !== t && (this.keys.splice(t, 1), !0)
          }, e
      }();
      t.ConfigurationModel = d;
      var f = function(e) {
        function t() {
          for (var t = l.getDefaultValues(), n = l.getConfigurationKeys(), r = [], i = 0, o = Object.keys(t); i < o.length; i++) {
            var s = o[i];
            c.OVERRIDE_PROPERTY_PATTERN.test(s) && r.push({
              identifiers: [l.overrideIdentifierFromKey(s).trim()],
              contents: l.toValuesTree(t[s], function(e) {
                return console.error("Conflict in default settings file: " + e)
              })
            })
          }
          return e.call(this, t, n, r) || this
        }
        return n(t, e), t
      }(d);
      t.DefaultConfigurationModel = f;
      var p = function() {
        function e(e) {
          this._name = e, this._configurationModel = null, this._parseErrors = []
        }
        return Object.defineProperty(e.prototype, "configurationModel", {
          get: function() {
            return this._configurationModel || new d
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "errors", {
          get: function() {
            return this._parseErrors
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.parse = function(e) {
          var t = this.parseContent(e),
            n = this.parseRaw(t);
          this._configurationModel = new d(n.contents, n.keys, n.overrides)
        }, e.prototype.parseContent = function(e) {
          function t(e) {
            Array.isArray(o) ? o.push(e) : i && (o[i] = e)
          }
          var n = {},
            i = null,
            o = [],
            s = [],
            a = [],
            u = {
              onObjectBegin: function() {
                var e = {};
                t(e), s.push(o), o = e, i = null
              },
              onObjectProperty: function(e) {
                i = e
              },
              onObjectEnd: function() {
                o = s.pop()
              },
              onArrayBegin: function() {
                var e = [];
                t(e), s.push(o), o = e, i = null
              },
              onArrayEnd: function() {
                o = s.pop()
              },
              onLiteralValue: t,
              onError: function(e) {
                a.push({
                  error: e
                })
              }
            };
          if (e) try {
            r.visit(e, u), n = o[0] || {}
          } catch (e) {
            console.error("Error while parsing settings file " + this._name + ": " + e), this._parseErrors = [e]
          }
          return n
        }, e.prototype.parseRaw = function(e) {
          var t = this;
          return {
            contents: l.toValuesTree(e, function(e) {
              return console.error("Conflict in settings file " + t._name + ": " + e)
            }),
            keys: Object.keys(e),
            overrides: l.toOverrides(e, function(e) {
              return console.error("Conflict in settings file " + t._name + ": " + e)
            })
          }
        }, e
      }();
      t.ConfigurationModelParser = p;
      var h = function() {
        function e(e, t, n, r, o, s) {
          void 0 === n && (n = new d), void 0 === r && (r = new i.StrictResourceMap), void 0 === o && (o = new d), void 0 === s && (s = new i.StrictResourceMap), this._defaultConfiguration = e,
            this._userConfiguration = t, this._workspaceConfiguration = n, this._folderConfigurations = r, this._memoryConfiguration = o, this._memoryConfigurationByResource = s, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations = new i.StrictResourceMap
        }
        return e.prototype.getValue = function(e, t, n) {
            return this.getConsolidateConfigurationModel(t, n).getValue(e)
          }, e.prototype.updateValue = function(e, t, n) {
            void 0 === n && (n = {});
            var r;
            n.resource ? (r = this._memoryConfigurationByResource.get(n.resource)) || (r = new d, this._memoryConfigurationByResource.set(n.resource, r)) : r = this._memoryConfiguration, void 0 === t ? r.removeValue(e) : r.setValue(e, t), n.resource || (this._workspaceConsolidatedConfiguration = null)
          }, e.prototype.inspect = function(e, t, n) {
            var r = this.getConsolidateConfigurationModel(t, n),
              i = this.getFolderConfigurationModelForResource(t.resource, n),
              o = t.resource ? this._memoryConfigurationByResource.get(t.resource) || this._memoryConfiguration : this._memoryConfiguration;
            return {
              default: t.overrideIdentifier ? this._defaultConfiguration.freeze().override(t.overrideIdentifier).getValue(e) : this._defaultConfiguration.freeze().getValue(e),
              user: t.overrideIdentifier ? this._userConfiguration.freeze().override(t.overrideIdentifier).getValue(e) : this._userConfiguration.freeze().getValue(e),
              workspace: n ? t.overrideIdentifier ? this._workspaceConfiguration.freeze().override(t.overrideIdentifier).getValue(e) : this._workspaceConfiguration.freeze().getValue(e) : void 0,
              workspaceFolder: i ? t.overrideIdentifier ? i.freeze().override(t.overrideIdentifier).getValue(e) : i.freeze().getValue(e) : void 0,
              memory: t.overrideIdentifier ? o.freeze().override(t.overrideIdentifier).getValue(e) : o.freeze().getValue(e),
              value: r.getValue(e)
            }
          }, e.prototype.keys = function(e) {
            var t = this.getFolderConfigurationModelForResource(null, e);
            return {
              default: this._defaultConfiguration.freeze().keys,
              user: this._userConfiguration.freeze().keys,
              workspace: this._workspaceConfiguration.freeze().keys,
              workspaceFolder: t ? t.freeze().keys : []
            }
          },
          e.prototype.updateDefaultConfiguration = function(e) {
            this._defaultConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
          }, e.prototype.updateUserConfiguration = function(e) {
            this._userConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
          }, e.prototype.updateWorkspaceConfiguration = function(e) {
            this._workspaceConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
          }, e.prototype.updateFolderConfiguration = function(e, t) {
            this._folderConfigurations.set(e, t), this._foldersConsolidatedConfigurations.delete(e)
          }, e.prototype.deleteFolderConfiguration = function(e) {
            this.folders.delete(e), this._foldersConsolidatedConfigurations.delete(e)
          }, Object.defineProperty(e.prototype, "defaults", {
            get: function() {
              return this._defaultConfiguration
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "user", {
            get: function() {
              return this._userConfiguration
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "workspace", {
            get: function() {
              return this._workspaceConfiguration
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "folders", {
            get: function() {
              return this._folderConfigurations
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "memory", {
            get: function() {
              return this._memoryConfiguration
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "memoryByResource", {
            get: function() {
              return this._memoryConfigurationByResource
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.getConsolidateConfigurationModel = function(e, t) {
            var n = this.getConsolidatedConfigurationModelForResource(e, t);
            return e.overrideIdentifier ? n.override(e.overrideIdentifier) : n
          }, e.prototype.getConsolidatedConfigurationModelForResource = function(e, t) {
            var n = e.resource,
              r = this.getWorkspaceConsolidatedConfiguration();
            if (t && n) {
              var i = t.getFolder(n);
              i && (r = this.getFolderConsolidatedConfiguration(i.uri) || r);
              var o = this._memoryConfigurationByResource.get(n);
              o && (r = r.merge(o))
            }
            return r
          }, e.prototype.getWorkspaceConsolidatedConfiguration = function() {
            return this._workspaceConsolidatedConfiguration || (this._workspaceConsolidatedConfiguration = this._defaultConfiguration.merge(this._userConfiguration).merge(this._workspaceConfiguration).merge(this._memoryConfiguration).freeze()), this._workspaceConsolidatedConfiguration
          }, e.prototype.getFolderConsolidatedConfiguration = function(e) {
            var t = this._foldersConsolidatedConfigurations.get(e);
            if (!t) {
              var n = this.getWorkspaceConsolidatedConfiguration(),
                r = this._folderConfigurations.get(e);
              r ? (t = n.merge(r).freeze(), this._foldersConsolidatedConfigurations.set(e, t)) : t = n
            }
            return t
          }, e.prototype.getFolderConfigurationModelForResource = function(e, t) {
            if (t && e) {
              var n = t.getFolder(e);
              if (n) return this._folderConfigurations.get(n.uri)
            }
            return null
          }, e.prototype.toData = function() {
            var e = this;
            return {
              defaults: {
                contents: this._defaultConfiguration.contents,
                overrides: this._defaultConfiguration.overrides,
                keys: this._defaultConfiguration.keys
              },
              user: {
                contents: this._userConfiguration.contents,
                overrides: this._userConfiguration.overrides,
                keys: this._userConfiguration.keys
              },
              workspace: {
                contents: this._workspaceConfiguration.contents,
                overrides: this._workspaceConfiguration.overrides,
                keys: this._workspaceConfiguration.keys
              },
              folders: this._folderConfigurations.keys().reduce(function(t, n) {
                var r = e._folderConfigurations.get(n),
                  i = r.contents,
                  o = r.overrides,
                  s = r.keys;
                return t[n.toString()] = {
                  contents: i,
                  overrides: o,
                  keys: s
                }, t
              }, Object.create({}))
            }
          }, e.prototype.allKeys = function(e) {
            var t = this.keys(e),
              n = t.default.slice(),
              r = function(e) {
                for (var t = 0, r = e; t < r.length; t++) {
                  var i = r[t]; - 1 === n.indexOf(i) && n.push(i)
                }
              };
            r(t.user), r(t.workspace);
            for (var i = 0, o = this.folders.keys(); i < o.length; i++) {
              var s = o[i];
              r(this.folders.get(s).keys)
            }
            return n
          }, e.parse = function(t) {
            return new e(e.parseConfigurationModel(t.defaults), e.parseConfigurationModel(t.user), e.parseConfigurationModel(t.workspace), Object.keys(t.folders).reduce(function(n, r) {
              return n.set(u.default.parse(r), e.parseConfigurationModel(t.folders[r])), n
            }, new i.StrictResourceMap))
          }, e.parseConfigurationModel = function(e) {
            return new d(e.contents, e.keys, e.overrides).freeze()
          }, e
      }();
      t.Configuration = h;
      var g = function() {
        function e() {}
        return e.prototype.doesConfigurationContains = function(e, t) {
          for (var n, r = e.contents, i = l.toValuesTree((o = {}, o[t] = !0, o), function() {});
            "object" == typeof i && (n = Object.keys(i)[0]);) {
            if (!(r = r[n])) return !1;
            i = i[n]
          }
          return !0;
          var o
        }, e.prototype.updateKeys = function(e, t, n) {
          for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            e.setValue(o, {})
          }
        }, e
      }();
      t.AbstractConfigurationChangeEvent = g;
      var m = function(e) {
        function t(t, n) {
          void 0 === t && (t = new d), void 0 === n && (n = new i.StrictResourceMap);
          var r = e.call(this) || this;
          return r._changedConfiguration = t, r._changedConfigurationByResource = n, r
        }
        return n(t, e), Object.defineProperty(t.prototype, "changedConfiguration", {
            get: function() {
              return this._changedConfiguration
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "changedConfigurationByResource", {
            get: function() {
              return this._changedConfigurationByResource
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.change = function(e, n) {
            if (e instanceof t) {
              this._changedConfiguration = this._changedConfiguration.merge(e._changedConfiguration);
              for (var r = 0, i = e._changedConfigurationByResource.keys(); r < i.length; r++) {
                var o = i[r],
                  s = this.getOrSetChangedConfigurationForResource(o);
                s = s.merge(e._changedConfigurationByResource.get(o)), this._changedConfigurationByResource.set(o, s)
              }
            } else this.changeWithKeys(e, n);
            return this
          }, t.prototype.telemetryData = function(e, t) {
            return this._source = e, this._sourceConfig = t, this
          }, Object.defineProperty(t.prototype, "affectedKeys", {
            get: function() {
              var e = this._changedConfiguration.keys.slice();
              return this._changedConfigurationByResource.forEach(function(t) {
                return e.push.apply(e, t.keys)
              }), o.distinct(e)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "source", {
            get: function() {
              return this._source
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "sourceConfig", {
            get: function() {
              return this._sourceConfig
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.affectsConfiguration = function(e, t) {
            var n = [this._changedConfiguration];
            if (t) {
              var r = this._changedConfigurationByResource.get(t);
              r && n.push(r)
            } else n.push.apply(n, this._changedConfigurationByResource.values());
            for (var i = 0, o = n; i < o.length; i++) {
              var s = o[i];
              if (this.doesConfigurationContains(s, e)) return !0
            }
            return !1
          }, t.prototype.changeWithKeys = function(e, t) {
            var n = t ? this.getOrSetChangedConfigurationForResource(t) : this._changedConfiguration;
            this.updateKeys(n, e)
          }, t.prototype.getOrSetChangedConfigurationForResource = function(e) {
            var t = this._changedConfigurationByResource.get(e);
            return t || (t = new d, this._changedConfigurationByResource.set(e, t)), t
          }, t
      }(g);
      t.ConfigurationChangeEvent = m
    }), define(e[62], t([1, 0, 12, 13, 28, 6]), function(e, t, n, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ID = "searchService", t.ISearchService = o.createDecorator(t.ID);
      ! function(e) {
        e[e.File = 1] = "File",
          e[e.Text = 2] = "Text"
      }(t.QueryType || (t.QueryType = {}));
      var s = function() {
        return function(e) {
          this.resource = e, this.lineMatches = []
        }
      }();
      t.FileMatch = s;
      var a = function() {
        return function(e, t, n) {
          this.preview = e, this.lineNumber = t, this.offsetAndLengths = n
        }
      }();
      t.LineMatch = a, t.getExcludes = function(e) {
        var t = e && e.files && e.files.exclude,
          r = e && e.search && e.search.exclude;
        if (t || r) {
          if (!t || !r) return t || r;
          var i = Object.create(null);
          return i = n.mixin(i, n.deepClone(t)), i = n.mixin(i, n.deepClone(r), !0)
        }
      }, t.pathIncludedInQuery = function(e, t) {
        return (!e.excludePattern || !i.match(e.excludePattern, t)) && !(e.includePattern && !i.match(e.includePattern, t)) && (!e.usingSearchPaths || e.folderQueries.every(function(e) {
          var n = e.folder.fsPath;
          return !(!r.isEqualOrParent(t, n) || e.includePattern && !i.match(e.includePattern, t))
        }))
      }
    }), define(e[111], t([1, 0, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IStatusbarService = n.createDecorator("statusbarService");
      ! function(e) {
        e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT"
      }(t.StatusbarAlignment || (t.StatusbarAlignment = {}))
    }), define(e[112], t([1, 0, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ITelemetryService = n.createDecorator("telemetryService")
    }), define(e[113], t([1, 0, 2, 57, 13, 23, 95]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a(e, t) {
        return t.onDidChangeConfiguration(function(t) {
          t.source !== o.ConfigurationTarget.DEFAULT && (e.publicLog("updateConfiguration", {
            configurationSource: o.ConfigurationTarget[t.source],
            configurationKeys: function(e) {
              if (!e) return [];
              var t = [];
              return u(t, "", e), t
            }(t.sourceConfig)
          }), e.publicLog("updateConfigurationValues", {
            configurationSource: o.ConfigurationTarget[t.source],
            configurationValues: function(e, t) {
              if (!e) return [];
              return t.reduce(function(t, n) {
                var r = n.split(".").reduce(function(e, t) {
                  return e && "object" == typeof e ? e[t] : void 0
                }, e);
                return void 0 !== r && t.push((i = {}, i[n] = r, i)), t;
                var i
              }, [])
            }(t.sourceConfig, c)
          }))
        })
      }

      function u(e, t, n) {
        n && "object" == typeof n && !Array.isArray(n) ? Object.keys(n).forEach(function(r) {
          return u(e, t ? t + "." + r : r, n[r])
        }) : e.push(t)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.NullTelemetryService = new(function() {
        function e() {}
        return e.prototype.publicLog = function(e, t) {
          return n.TPromise.wrap(null)
        }, e.prototype.getTelemetryInfo = function() {
          return n.TPromise.wrap({
            instanceId: "someValue.instanceId",
            sessionId: "someValue.sessionId",
            machineId: "someValue.machineId"
          })
        }, e
      }()), t.combinedAppender = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return {
          log: function(t, n) {
            return e.forEach(function(e) {
              return e.log(t, n)
            })
          }
        }
      }, t.NullAppender = {
        log: function() {
          return null
        }
      }, t.telemetryURIDescriptor = function(e, t) {
        var n = e && e.fsPath;
        return n ? {
          mimeType: r.guessMimeTypes(n).join(", "),
          ext: i.extname(n),
          path: t(n)
        } : {}
      };
      var c = ["editor.tabCompletion", "editor.fontFamily", "editor.fontWeight", "editor.fontSize", "editor.lineHeight", "editor.letterSpacing", "editor.lineNumbers", "editor.rulers", "editor.wordSeparators", "editor.tabSize", "editor.insertSpaces", "editor.detectIndentation", "editor.roundedSelection", "editor.scrollBeyondLastLine", "editor.minimap.enabled", "editor.minimap.renderCharacters", "editor.minimap.maxColumn", "editor.find.seedSearchStringFromSelection", "editor.find.autoFindInSelection", "editor.wordWrap", "editor.wordWrapColumn", "editor.wrappingIndent", "editor.mouseWheelScrollSensitivity", "editor.multiCursorModifier", "editor.quickSuggestions", "editor.quickSuggestionsDelay", "editor.parameterHints", "editor.autoClosingBrackets", "editor.autoIndent", "editor.formatOnType", "editor.formatOnPaste", "editor.suggestOnTriggerCharacters", "editor.acceptSuggestionOnEnter", "editor.acceptSuggestionOnCommitCharacter", "editor.snippetSuggestions", "editor.emptySelectionClipboard", "editor.wordBasedSuggestions", "editor.suggestFontSize", "editor.suggestLineHeight", "editor.selectionHighlight", "editor.occurrencesHighlight", "editor.overviewRulerLanes", "editor.overviewRulerBorder", "editor.cursorBlinking", "editor.cursorStyle", "editor.mouseWheelZoom", "editor.fontLigatures", "editor.hideCursorInOverviewRuler", "editor.renderWhitespace", "editor.renderControlCharacters", "editor.renderIndentGuides", "editor.renderLineHighlight", "editor.codeLens", "editor.folding", "editor.showFoldingControls", "editor.matchBrackets", "editor.glyphMargin", "editor.useTabStops", "editor.trimAutoWhitespace", "editor.stablePeek", "editor.dragAndDrop", "editor.formatOnSave", "editor.colorDecorators", "window.zoomLevel", "files.autoSave", "files.hotExit", "files.associations", "workbench.statusBar.visible", "files.trimTrailingWhitespace", "git.confirmSync", "workbench.sideBar.location", "window.openFilesInNewWindow", "javascript.validate.enable", "window.restoreWindows", "extensions.autoUpdate", "files.eol", "explorer.openEditors.visible", "workbench.editor.enablePreview", "files.autoSaveDelay", "workbench.editor.showTabs", "files.encoding", "files.autoGuessEncoding", "git.enabled", "http.proxyStrictSSL", "terminal.integrated.fontFamily", "workbench.editor.enablePreviewFromQuickOpen", "workbench.editor.swipeToNavigate", "php.builtInCompletions.enable", "php.validate.enable", "php.validate.run", "workbench.welcome.enabled", "workbench.startupEditor"];
      t.configurationTelemetry = a, t.keybindingsTelemetry = function(e, t) {
        return t.onDidUpdateKeybindings(function(t) {
          t.source === s.KeybindingSource.User && t.keybindings && e.publicLog("updateKeybindings", {
            bindings: t.keybindings.map(function(e) {
              return {
                key: e.key,
                command: e.command,
                when: e.when,
                args: !!e.args || void 0
              }
            })
          })
        })
      }
    }), define(e[114], t([1, 0, 6, 31, 81, 13, 10, 64]), function(e, t, n, r, i, o, s, a) {
      "use strict";

      function u(e) {
        return e && "object" == typeof e && "string" == typeof e.path && (!e.name || "string" == typeof e.name)
      }

      function c(e) {
        return e && "object" == typeof e && "string" == typeof e.uri && (!e.name || "string" == typeof e.name)
      }

      function l(e) {
        return "string" == typeof e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IWorkspacesMainService = n.createDecorator("workspacesMainService"), t.IWorkspacesService = n.createDecorator("workspacesService"), t.WORKSPACE_EXTENSION = "code-workspace", t.WORKSPACE_FILTER = [{
        name: i.localize(0, null),
        extensions: [t.WORKSPACE_EXTENSION]
      }], t.UNTITLED_WORKSPACE_NAME = "workspace.json", t.isStoredWorkspaceFolder = function(e) {
        return u(e) || c(e)
      }, t.isRawFileWorkspaceFolder = u, t.isRawUriWorkspaceFolder = c, t.getWorkspaceLabel = function(e, n, u) {
        if (l(e)) return a.tildify(e, n.userHome);
        if (r.isParent(e.configPath, n.workspacesHome, !s.isLinux)) return i.localize(1, null);
        var c = o.basename(e.configPath),
          d = c.substr(0, c.length - t.WORKSPACE_EXTENSION.length - 1);
        return u && u.verbose ? i.localize(2, null, a.getPathLabel(o.join(o.dirname(e.configPath), d), null, n)) : i.localize(3, null, d)
      }, t.isSingleFolderWorkspaceIdentifier = l, t.isWorkspaceIdentifier = function(e) {
        var t = e;
        return t && "string" == typeof t.id && "string" == typeof t.configPath
      }
    }), define(e[63], t([1, 0, 3, 13, 37, 6, 20, 114, 16, 10]), function(e, t, n, r, i, o, s, a, u, c) {
      "use strict";

      function l(e, t) {
        var o = function(e, t) {
          return e.map(function(e, i) {
            var o;
            if (a.isRawFileWorkspaceFolder(e)) o = function(e, t) {
              if (e) {
                if (r.isAbsolute(e)) return n.default.file(e);
                if (t) return t.with({
                  path: r.join(t.path, e)
                })
              }
              return null
            }(e.path, t);
            else if (a.isRawUriWorkspaceFolder(e)) try {
              o = n.default.parse(e.uri)
            } catch (e) {
              console.warn(e)
            }
            if (o) return new f({
              uri: o,
              name: e.name,
              index: i
            }, e)
          })
        }(e, t);
        return function(e) {
          return u.distinct(e, function(e) {
            return c.isLinux ? e.uri.toString() : e.uri.toString().toLowerCase()
          })
        }(u.coalesce(o)).map(function(e, t) {
          var n = e.uri,
            r = e.raw,
            o = e.name;
          return new f({
            uri: n,
            name: o || i.basenameOrAuthority(n),
            index: t
          }, r)
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IWorkspaceContextService = o.createDecorator("contextService");
      ! function(e) {
        e[e.EMPTY = 1] = "EMPTY", e[e.FOLDER = 2] = "FOLDER", e[e.WORKSPACE = 3] = "WORKSPACE"
      }(t.WorkbenchState || (t.WorkbenchState = {}));
      var d = function() {
        function e(e, t, n, r, i) {
          void 0 === t && (t = ""), void 0 === n && (n = []), void 0 === r && (r = null), this._id = e, this._name = t, this._configuration = r, this._ctime = i, this._foldersMap = s.TernarySearchTree.forPaths(), this.folders = n
        }
        return e.prototype.update = function(e) {
          this._id = e.id, this._name = e.name, this._configuration = e.configuration, this._ctime = e.ctime, this.folders = e.folders
        }, Object.defineProperty(e.prototype, "folders", {
          get: function() {
            return this._folders
          },
          set: function(e) {
            this._folders = e,
              this.updateFoldersMap()
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
          get: function() {
            return this._id
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "ctime", {
          get: function() {
            return this._ctime
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "name", {
          get: function() {
            return this._name
          },
          set: function(e) {
            this._name = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "configuration", {
          get: function() {
            return this._configuration
          },
          set: function(e) {
            this._configuration = e
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getFolder = function(e) {
          return e ? this._foldersMap.findSubstr(e.toString()) : null
        }, e.prototype.updateFoldersMap = function() {
          this._foldersMap = s.TernarySearchTree.forPaths();
          for (var e = 0, t = this.folders; e < t.length; e++) {
            var n = t[e];
            this._foldersMap.set(n.uri.toString(), n)
          }
        }, e.prototype.toJSON = function() {
          return {
            id: this.id,
            folders: this.folders,
            name: this.name
          }
        }, e
      }();
      t.Workspace = d;
      var f = function() {
        function e(e, t) {
          this.raw = t, this.uri = e.uri,
            this.index = e.index, this.name = e.name
        }
        return e.prototype.toResource = function(e) {
          return this.uri.with({
            path: r.join(this.uri.path, e)
          })
        }, e.prototype.toJSON = function() {
          return {
            uri: this.uri,
            name: this.name,
            index: this.index
          }
        }, e
      }();
      t.WorkspaceFolder = f, t.toWorkspaceFolders = l
    }), define(e[36], t([1, 0, 83, 24, 2]), function(e, t, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = Object.hasOwnProperty,
        a = o.TPromise.wrap(void 0),
        u = function() {
          function e(e, t, n, r) {
            this.startup = e, this.codeLoadingTime = t, this.activateCallTime = n, this.activateResolvedTime = r
          }
          return e.NONE = new e(!1, -1, -1, -1), e
        }();
      t.ExtensionActivationTimes = u;
      var c = function() {
        function e(e) {
          this._startup = e, this._codeLoadingStart = -1, this._codeLoadingStop = -1, this._activateCallStart = -1, this._activateCallStop = -1, this._activateResolveStart = -1, this._activateResolveStop = -1
        }
        return e.prototype._delta = function(e, t) {
          return -1 === e || -1 === t ? -1 : t - e
        }, e.prototype.build = function() {
          return new u(this._startup, this._delta(this._codeLoadingStart, this._codeLoadingStop), this._delta(this._activateCallStart, this._activateCallStop), this._delta(this._activateResolveStart, this._activateResolveStop))
        }, e.prototype.codeLoadingStart = function() {
          this._codeLoadingStart = Date.now()
        }, e.prototype.codeLoadingStop = function() {
          this._codeLoadingStop = Date.now()
        }, e.prototype.activateCallStart = function() {
          this._activateCallStart = Date.now()
        }, e.prototype.activateCallStop = function() {
          this._activateCallStop = Date.now()
        }, e.prototype.activateResolveStart = function() {
          this._activateResolveStart = Date.now()
        }, e.prototype.activateResolveStop = function() {
          this._activateResolveStop = Date.now()
        }, e
      }();
      t.ExtensionActivationTimesBuilder = c;
      var l = function() {
        return function(e, t, n, r, i) {
          this.activationFailed = e, this.activationTimes = t, this.module = n, this.exports = r, this.subscriptions = i
        }
      }();
      t.ActivatedExtension = l;
      var d = function(e) {
        function t(t) {
          return e.call(this, !1, t, {
            activate: void 0,
            deactivate: void 0
          }, void 0, []) || this
        }
        return n(t, e), t
      }(l);
      t.EmptyExtension = d;
      var f = function(e) {
        function t(t) {
          return e.call(this, !0, t, {
            activate: void 0,
            deactivate: void 0
          }, void 0, []) || this
        }
        return n(t, e), t
      }(l);
      t.FailedExtension = f;
      var p = function() {
        return function(e, t) {
          this.startup = e, this.activationEvent = t
        }
      }();
      t.ExtensionActivatedByEvent = p;
      var h = function() {
        return function(e) {
          this.startup = e
        }
      }();
      t.ExtensionActivatedByAPI = h;
      var g = function() {
        function e(e, t) {
          this._registry = e, this._host = t, this._activatingExtensions = {}, this._activatedExtensions = {}, this._alreadyActivatedEvents = Object.create(null)
        }
        return e.prototype.isActivated = function(e) {
          return s.call(this._activatedExtensions, e)
        }, e.prototype.getActivatedExtension = function(e) {
          if (!s.call(this._activatedExtensions, e)) throw new Error("Extension `" + e + "` is not known or not activated");
          return this._activatedExtensions[e]
        }, e.prototype.activateByEvent = function(e, t) {
          var n = this;
          if (this._alreadyActivatedEvents[e]) return a;
          var r = this._registry.getExtensionDescriptionsForActivationEvent(e);
          return this._activateExtensions(r, t, 0).then(function() {
            n._alreadyActivatedEvents[e] = !0
          })
        }, e.prototype.activateById = function(e, t) {
          var n = this._registry.getExtensionDescription(e);
          if (!n) throw new Error("Extension `" + e + "` is not known");
          return this._activateExtensions([n], t, 0)
        }, e.prototype._handleActivateRequest = function(e, t, n) {
          for (var o = void 0 === e.extensionDependencies ? [] : e.extensionDependencies, a = !0, c = 0, l = o.length; c < l; c++) {
            var d = o[c],
              p = this._registry.getExtensionDescription(d);
            if (!p) return this._host.showMessage(i.default.Error, r.localize(0, null, d, e.id)), void(this._activatedExtensions[e.id] = new f(u.NONE));
            if (s.call(this._activatedExtensions, d)) {
              if (this._activatedExtensions[d].activationFailed) return this._host.showMessage(i.default.Error, r.localize(1, null, d, e.id)), void(this._activatedExtensions[e.id] = new f(u.NONE))
            } else a = !1, t[d] = p
          }
          a ? t[e.id] = e : n.push(e)
        }, e.prototype._activateExtensions = function(e, t, n) {
          var a = this;
          if (0 === e.length) return o.TPromise.as(void 0);
          if (0 === (e = e.filter(function(e) {
              return !s.call(a._activatedExtensions, e.id)
            })).length) return o.TPromise.as(void 0);
          if (n > 10) {
            for (var c = 0, l = e.length; c < l; c++) this._host.showMessage(i.default.Error, r.localize(2, null, e[c].id)), this._activatedExtensions[e[c].id] = new f(u.NONE);
            return o.TPromise.as(void 0)
          }
          for (var d = Object.create(null), p = [], c = 0, l = e.length; c < l; c++) this._handleActivateRequest(e[c], d, p);
          for (var c = 0, l = p.length; c < l; c++) d[p[c].id] && delete d[p[c].id];
          var h = Object.keys(d).map(function(e) {
            return d[e]
          });
          return 0 === p.length ? o.TPromise.join(h.map(function(e) {
            return a._activateExtension(e, t)
          })).then(function(e) {}) : this._activateExtensions(h, t, n + 1).then(function(e) {
            return a._activateExtensions(p, t, n + 1)
          })
        }, e.prototype._activateExtension = function(e, t) {
          var n = this;
          return s.call(this._activatedExtensions, e.id) ? o.TPromise.as(void 0) : s.call(this._activatingExtensions, e.id) ? this._activatingExtensions[e.id] : (this._activatingExtensions[e.id] = this._host.actualActivateExtension(e, t).then(null, function(t) {
            return n._host.showMessage(i.default.Error, r.localize(3, null, e.id, t.message)), console.error("Activating extension `" + e.id + "` failed: ", t.message), console.log("Here is the error stack: ", t.stack), new f(u.NONE)
          }).then(function(t) {
            n._activatedExtensions[e.id] = t, delete n._activatingExtensions[e.id]
          }), this._activatingExtensions[e.id])
        }, e
      }();
      t.ExtensionsActivator = g
    }), define(e[117], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e() {
          this._data = new Map
        }
        return e.prototype.keep = function(t) {
          var n = e._idPool++;
          return this._data.set(n, t), n
        }, e.prototype.delete = function(e) {
          return this._data.delete(e)
        }, e.prototype.get = function(e) {
          return this._data.get(e)
        }, e.prototype.$onGarbageCollection = function(e) {
          for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t];
            this.delete(r)
          }
        }, e._idPool = 0, e
      }();
      t.ExtHostHeapService = n
    }), define(e[118], t([1, 0, 15, 2, 42, 4, 54, 29]), function(e, t, n, r, i, o, a, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = function() {
        function e(e) {
          this._environmentService = e, this._loggers = new Map
        }
        return e.prototype.getExtLogger = function(e) {
          if (!this._loggers.has(e)) {
            var t = a.createSpdLogService(e, this._environmentService, e),
              r = n.join(this._environmentService.logsPath, e);
            this._loggers.set(e, new l(t, r))
          }
          return this._loggers.get(e)
        }, e
      }();
      t.ExtHostLogService = c;
      var l = function() {
        function e(e, t) {
          this._logService = e, this._logDirectory = t, this._currentLevel = this._logService.getLevel(), this._onDidChangeLogLevel = new o.Emitter, this.onDidChangeLogLevel = this._onDidChangeLogLevel.event
        }
        return Object.defineProperty(e.prototype, "currentLevel", {
          get: function() {
            return this._currentLevel
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "logDirectory", {
          get: function() {
            var e = this;
            return i.dirExists(this._logDirectory).then(function(t) {
              return t ? r.TPromise.wrap(null) : i.mkdirp(e._logDirectory)
            }).then(function() {
              return e._logDirectory
            })
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.trace = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return (r = this._logService).trace.apply(r, [e].concat(t));
          var r
        }, e.prototype.debug = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return (r = this._logService).debug.apply(r, [e].concat(t));
          var r
        }, e.prototype.info = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return (r = this._logService).info.apply(r, [e].concat(t));
          var r
        }, e.prototype.warn = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return (r = this._logService).warn.apply(r, [e].concat(t));
          var r
        }, e.prototype.error = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return (r = this._logService).error.apply(r, [e].concat(t));
          var r
        }, e.prototype.critical = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return (r = this._logService).critical.apply(r, [e].concat(t));
          var r
        }, s([u.memoize], e.prototype, "logDirectory", null), e
      }();
      t.ExtHostLogger = l
    }), define(e[119], t([1, 0, 85, 3, 4, 2, 14, 9, 16]), function(e, t, r, i, o, s, a, u, c) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = function() {
        function e(e, t) {
          var n = this;
          this._proxy = e, this.commands = t, this.treeViews = new Map, t.registerArgumentProcessor({
            processArgument: function(e) {
              return e && e.$treeViewId && e.$treeItemHandle ? n.convertArgument(e) : e
            }
          })
        }
        return e.prototype.registerTreeDataProvider = function(e, t) {
          var n = this,
            r = new d(e, t, this._proxy, this.commands.converter);
          return this.treeViews.set(e, r), {
            dispose: function() {
              n.treeViews.delete(e), r.dispose()
            }
          }
        }, e.prototype.$getElements = function(e) {
          var t = this.treeViews.get(e);
          return t ? t.getChildren() : s.TPromise.wrapError(new Error(r.localize(0, null, e)))
        }, e.prototype.$getChildren = function(e, t) {
          var n = this.treeViews.get(e);
          return n ? n.getChildren(t) : s.TPromise.wrapError(new Error(r.localize(1, null, e)))
        }, e.prototype.convertArgument = function(e) {
          var t = this.treeViews.get(e.$treeViewId);
          return t ? t.getExtensionElement(e.$treeItemHandle) : null
        }, e
      }();
      t.ExtHostTreeViews = l;
      var d = function(e) {
        function t(t, n, r, i) {
          var s = e.call(this) || this;
          return s.viewId = t, s.dataProvider = n, s.proxy = r, s.commands = i,
            s._itemHandlePool = 0, s.elements = new Map, s.nodes = new Map, s.proxy.$registerView(t), n.onDidChangeTreeData && s._register(o.debounceEvent(n.onDidChangeTreeData, function(e, t) {
              return e ? e.concat([t]) : [t]
            }, 200)(function(e) {
              return s._refresh(e)
            })), s
        }
        return n(t, e), t.prototype.getChildren = function(e) {
          var t, n = this;
          return e && !(t = this.getExtensionElement(e)) ? s.TPromise.wrapError(new Error(r.localize(2, null, e))) : u.asWinJsPromise(function() {
            return n.dataProvider.getChildren(t)
          }).then(function(r) {
            return r = c.coalesce(r || []), s.TPromise.join(r.map(function(t, r) {
              var i = n.nodes.get(t);
              return n.resolveElement(t, i ? i.handle : "" + ++n._itemHandlePool, e).then(function(r) {
                return r && (i || (n.nodes.set(t, {
                  handle: r.handle,
                  parentHandle: e,
                  childrenHandles: void 0
                }), n.elements.set(r.handle, t))), r
              })
            })).then(function(e) {
              return n.updateChildren(c.coalesce(e), t)
            })
          })
        }, t.prototype.getExtensionElement = function(e) {
          return this.elements.get(e)
        }, t.prototype._refresh = function(e) {
          if (e.some(function(e) {
              return !e
            })) this.proxy.$refresh(this.viewId);
          else {
            var t = this.getHandlesToRefresh(e);
            t.length && this.refreshHandles(t)
          }
        }, t.prototype.resolveElement = function(e, t, n) {
          var r = this;
          return u.asWinJsPromise(function() {
            return r.dataProvider.getTreeItem(e)
          }).then(function(i) {
            return r.massageTreeItem(e, i, t, n)
          })
        }, t.prototype.massageTreeItem = function(e, t, n, r) {
          if (!t) return null;
          var i = this.getLightIconPath(t);
          return {
            handle: n,
            parentHandle: r,
            label: t.label,
            command: t.command ? this.commands.toInternal(t.command) : void 0,
            contextValue: t.contextValue,
            icon: i,
            iconDark: this.getDarkIconPath(t) || i,
            collapsibleState: t.collapsibleState
          }
        }, t.prototype.getLightIconPath = function(e) {
          if (e.iconPath) return "string" == typeof e.iconPath || e.iconPath instanceof i.default ? this.getIconPath(e.iconPath) : this.getIconPath(e.iconPath.light)
        }, t.prototype.getDarkIconPath = function(e) {
          if (e.iconPath && e.iconPath.dark) return this.getIconPath(e.iconPath.dark)
        }, t.prototype.getIconPath = function(e) {
          return e instanceof i.default ? e.toString() : i.default.file(e).toString()
        }, t.prototype.getHandlesToRefresh = function(e) {
          for (var t = this, n = new Set, r = 0, i = e; r < i.length; r++) {
            var o = i[r],
              s = this.nodes.get(o);
            if (s && !n.has(s.handle)) {
              for (var a = s; a && a.parentHandle && !n.has(a.parentHandle);) {
                var u = this.elements.get(a.parentHandle);
                a = this.nodes.get(u)
              }
              a.parentHandle || n.add(s.handle)
            }
          }
          var c = [];
          return n.forEach(function(e) {
            var r = t.elements.get(e),
              i = t.nodes.get(r);
            i && !n.has(i.parentHandle) && c.push(e)
          }), c
        }, t.prototype.refreshHandles = function(e) {
          var t = this,
            n = {},
            r = [];
          return e.forEach(function(e) {
            var i = t.getExtensionElement(e),
              o = t.nodes.get(i);
            r.push(t.resolveElement(i, e, o.parentHandle).then(function(t) {
              n[e] = t
            }))
          }), s.TPromise.join(r).then(function(e) {
            t.proxy.$refresh(t.viewId, n)
          })
        }, t.prototype.updateChildren = function(e, t) {
          var n = [];
          if (t) {
            var r = this.nodes.get(t);
            n = r.childrenHandles || [], r.childrenHandles = e.map(function(e) {
              return e.handle
            })
          } else this.nodes.forEach(function(e) {
            e.parentHandle || n.push(e.handle)
          });
          for (var i = function(t) {
              var n = o.elements.get(t);
              n && e.every(function(e) {
                return e.handle !== t
              }) && o.clear(n)
            }, o = this, s = 0, a = n; s < a.length; s++) {
            i(a[s])
          }
          return e
        }, t.prototype.clear = function(e) {
          var t = this.nodes.get(e);
          if (t.childrenHandles)
            for (var n = 0, r = t.childrenHandles; n < r.length; n++) {
              var i = r[n],
                o = this.elements.get(i);
              o && this.clear(o)
            }
          this.nodes.delete(e), this.elements.delete(t.handle)
        }, t.prototype.dispose = function() {
          this.elements.clear(), this.nodes.clear()
        }, t
      }(a.Disposable)
    }), define(e[7], t([1, 0, 102, 3, 11, 45, 15]), function(e, t, r, i, o, s, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u = function() {
        function e(e) {
          this._callOnDispose = e
        }
        return e.from = function() {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new e(function() {
            if (t) {
              for (var e = 0, n = t; e < n.length; e++) {
                var r = n[e];
                r && "function" == typeof r.dispose && r.dispose()
              }
              t = void 0
            }
          })
        }, e.prototype.dispose = function() {
          "function" == typeof this._callOnDispose && (this._callOnDispose(), this._callOnDispose = void 0)
        }, e
      }();
      t.Disposable = u;
      var c = function() {
        function e(e, t) {
          if (e < 0) throw o.illegalArgument("line must be non-negative");
          if (t < 0) throw o.illegalArgument("character must be non-negative");
          this._line = e, this._character = t
        }
        return e.Min = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (var n = e.pop(), r = 0, i = e; r < i.length; r++) {
              var o = i[r];
              o.isBefore(n) && (n = o)
            }
            return n
          }, e.Max = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (var n = e.pop(), r = 0, i = e; r < i.length; r++) {
              var o = i[r];
              o.isAfter(n) && (n = o)
            }
            return n
          }, e.isPosition = function(t) {
            if (!t) return !1;
            if (t instanceof e) return !0;
            var n = t,
              r = n.line,
              i = n.character;
            return "number" == typeof r && "number" == typeof i
          }, Object.defineProperty(e.prototype, "line", {
            get: function() {
              return this._line
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "character", {
            get: function() {
              return this._character
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.isBefore = function(e) {
            return this._line < e._line || !(e._line < this._line) && this._character < e._character
          }, e.prototype.isBeforeOrEqual = function(e) {
            return this._line < e._line || !(e._line < this._line) && this._character <= e._character
          }, e.prototype.isAfter = function(e) {
            return !this.isBeforeOrEqual(e)
          },
          e.prototype.isAfterOrEqual = function(e) {
            return !this.isBefore(e)
          }, e.prototype.isEqual = function(e) {
            return this._line === e._line && this._character === e._character
          }, e.prototype.compareTo = function(e) {
            return this._line < e._line ? -1 : this._line > e.line ? 1 : this._character < e._character ? -1 : this._character > e._character ? 1 : 0
          }, e.prototype.translate = function(t, n) {
            if (void 0 === n && (n = 0), null === t || null === n) throw o.illegalArgument();
            var r;
            return void 0 === t ? r = 0 : "number" == typeof t ? r = t : (r = "number" == typeof t.lineDelta ? t.lineDelta : 0, n = "number" == typeof t.characterDelta ? t.characterDelta : 0), 0 === r && 0 === n ? this : new e(this.line + r, this.character + n)
          }, e.prototype.with = function(t, n) {
            if (void 0 === n && (n = this.character), null === t || null === n) throw o.illegalArgument();
            var r;
            return void 0 === t ? r = this.line : "number" == typeof t ? r = t : (r = "number" == typeof t.line ? t.line : this.line, n = "number" == typeof t.character ? t.character : this.character), r === this.line && n === this.character ? this : new e(r, n)
          }, e.prototype.toJSON = function() {
            return {
              line: this.line,
              character: this.character
            }
          }, e
      }();
      t.Position = c;
      var l = function() {
        function e(e, t, n, r) {
          var i, o;
          if ("number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof r ? (i = new c(e, t), o = new c(n, r)) : e instanceof c && t instanceof c && (i = e, o = t), !i || !o) throw new Error("Invalid arguments");
          i.isBefore(o) ? (this._start = i, this._end = o) : (this._start = o, this._end = i)
        }
        return e.isRange = function(t) {
          return t instanceof e || !!t && (c.isPosition(t.start) && c.isPosition(t.end))
        }, Object.defineProperty(e.prototype, "start", {
          get: function() {
            return this._start
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "end", {
          get: function() {
            return this._end
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.contains = function(t) {
          return t instanceof e ? this.contains(t._start) && this.contains(t._end) : t instanceof c && (!t.isBefore(this._start) && !this._end.isBefore(t))
        }, e.prototype.isEqual = function(e) {
          return this._start.isEqual(e._start) && this._end.isEqual(e._end)
        }, e.prototype.intersection = function(t) {
          var n = c.Max(t.start, this._start),
            r = c.Min(t.end, this._end);
          if (!n.isAfter(r)) return new e(n, r)
        }, e.prototype.union = function(t) {
          if (this.contains(t)) return this;
          if (t.contains(this)) return t;
          return new e(c.Min(t.start, this._start), c.Max(t.end, this.end))
        }, Object.defineProperty(e.prototype, "isEmpty", {
          get: function() {
            return this._start.isEqual(this._end)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "isSingleLine", {
          get: function() {
            return this._start.line === this._end.line
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.with = function(t, n) {
          if (void 0 === n && (n = this.end), null === t || null === n) throw o.illegalArgument();
          var r;
          return t ? c.isPosition(t) ? r = t : (r = t.start || this.start, n = t.end || this.end) : r = this.start, r.isEqual(this._start) && n.isEqual(this.end) ? this : new e(r, n)
        }, e.prototype.toJSON = function() {
          return [this.start, this.end]
        }, e
      }();
      t.Range = l;
      var d = function(e) {
        function t(t, n, r, i) {
          var o, s, a = this;
          if ("number" == typeof t && "number" == typeof n && "number" == typeof r && "number" == typeof i ? (o = new c(t, n), s = new c(r, i)) : t instanceof c && n instanceof c && (o = t, s = n), !o || !s) throw new Error("Invalid arguments");
          return a = e.call(this, o, s) || this, a._anchor = o, a._active = s, a
        }
        return n(t, e), t.isSelection = function(e) {
          return e instanceof t || !!e && (l.isRange(e) && c.isPosition(e.anchor) && c.isPosition(e.active) && "boolean" == typeof e.isReversed)
        }, Object.defineProperty(t.prototype, "anchor", {
          get: function() {
            return this._anchor
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "active", {
          get: function() {
            return this._active
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "isReversed", {
          get: function() {
            return this._anchor === this._end
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.toJSON = function() {
          return {
            start: this.start,
            end: this.end,
            active: this.active,
            anchor: this.anchor
          }
        }, t
      }(l);
      t.Selection = d;
      ! function(e) {
        e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF"
      }(t.EndOfLine || (t.EndOfLine = {}));
      var f = function() {
        function e(e, t) {
          this.range = e, this.newText = t
        }
        return e.isTextEdit = function(t) {
          return t instanceof e || !!t && (l.isRange(t) && "string" == typeof t.newText)
        }, e.replace = function(t, n) {
          return new e(t, n)
        }, e.insert = function(t, n) {
          return e.replace(new l(t, t), n)
        }, e.delete = function(t) {
          return e.replace(t, "")
        }, e.setEndOfLine = function(t) {
          var n = new e(void 0, void 0);
          return n.newEol = t, n
        }, Object.defineProperty(e.prototype, "range", {
          get: function() {
            return this._range
          },
          set: function(e) {
            if (e && !l.isRange(e)) throw o.illegalArgument("range");
            this._range = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "newText", {
          get: function() {
            return this._newText || ""
          },
          set: function(e) {
            if (e && "string" != typeof e) throw o.illegalArgument("newText");
            this._newText = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "newEol", {
          get: function() {
            return this._newEol
          },
          set: function(e) {
            if (e && "number" != typeof e) throw o.illegalArgument("newEol");
            this._newEol = e
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.toJSON = function() {
          return {
            range: this.range,
            newText: this.newText,
            newEol: this._newEol
          }
        }, e
      }();
      t.TextEdit = f;
      var p = function() {
        function e() {
          this._values = [], this._index = new Map
        }
        return e.prototype.replace = function(e, t, n) {
          var r = new f(t, n),
            i = this.get(e);
          i ? i.push(r) : this.set(e, [r])
        }, e.prototype.insert = function(e, t, n) {
          this.replace(e, new l(t, t), n)
        }, e.prototype.delete = function(e, t) {
          this.replace(e, t, "")
        }, e.prototype.has = function(e) {
          return this._index.has(e.toString())
        }, e.prototype.set = function(e, t) {
          var n = this._index.get(e.toString());
          if (void 0 === n) {
            var r = this._values.push([e, t]);
            this._index.set(e.toString(), r - 1)
          } else this._values[n][1] = t
        }, e.prototype.get = function(e) {
          var t = this._index.get(e.toString());
          return void 0 !== t && this._values[t][1]
        }, e.prototype.entries = function() {
          return this._values
        }, Object.defineProperty(e.prototype, "size", {
          get: function() {
            return this._values.length
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.toJSON = function() {
          return this._values
        }, e
      }();
      t.WorkspaceEdit = p;
      var h = function() {
        function e(e) {
          this._tabstop = 1, this.value = e || ""
        }
        return e.isSnippetString = function(t) {
            return t instanceof e || !!t && "string" == typeof t.value
          }, e._escape = function(e) {
            return e.replace(/\$|}|\\/g, "\\$&")
          },
          e.prototype.appendText = function(t) {
            return this.value += e._escape(t), this
          }, e.prototype.appendTabstop = function(e) {
            return void 0 === e && (e = this._tabstop++), this.value += "$", this.value += e, this
          }, e.prototype.appendPlaceholder = function(t, n) {
            if (void 0 === n && (n = this._tabstop++), "function" == typeof t) {
              var r = new e;
              r._tabstop = this._tabstop, t(r), this._tabstop = r._tabstop, t = r.value
            } else t = e._escape(t);
            return this.value += "${", this.value += n, this.value += ":", this.value += t, this.value += "}", this
          }, e.prototype.appendVariable = function(t, n) {
            if ("function" == typeof n) {
              var r = new e;
              r._tabstop = this._tabstop, n(r), this._tabstop = r._tabstop, n = r.value
            } else "string" == typeof n && (n = n.replace(/\$|}/g, "\\$&"));
            return this.value += "${", this.value += t, n && (this.value += ":", this.value += n), this.value += "}", this
          }, e
      }();
      t.SnippetString = h;
      var g;
      ! function(e) {
        e[e.Hint = 3] = "Hint", e[e.Information = 2] = "Information", e[e.Warning = 1] = "Warning", e[e.Error = 0] = "Error"
      }(g = t.DiagnosticSeverity || (t.DiagnosticSeverity = {}));
      var m = function() {
        function e(e, t) {
          if (this.uri = e,
            t)
            if (t instanceof l) this.range = t;
            else {
              if (!(t instanceof c)) throw new Error("Illegal argument");
              this.range = new l(t, t)
            }
          else;
        }
        return e.isLocation = function(t) {
          return t instanceof e || !!t && (l.isRange(t.range) && i.default.isUri(t.uri))
        }, e.prototype.toJSON = function() {
          return {
            uri: this.uri,
            range: this.range
          }
        }, e
      }();
      t.Location = m;
      var v = function() {
        function e(e, t, n) {
          void 0 === n && (n = g.Error), this.range = e, this.message = t, this.severity = n
        }
        return e.prototype.toJSON = function() {
          return {
            severity: g[this.severity],
            message: this.message,
            range: this.range,
            source: this.source,
            code: this.code
          }
        }, e
      }();
      t.Diagnostic = v;
      var y = function() {
        return function(e, t) {
          if (!e) throw new Error("Illegal argument, contents must be defined");
          Array.isArray(e) ? this.contents = e : (s.isMarkdownString(e), this.contents = [e]), this.range = t
        }
      }();
      t.Hover = y;
      var _;
      ! function(e) {
        e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write"
      }(_ = t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
      var b = function() {
        function e(e, t) {
          void 0 === t && (t = _.Text), this.range = e, this.kind = t
        }
        return e.prototype.toJSON = function() {
          return {
            range: this.range,
            kind: _[this.kind]
          }
        }, e
      }();
      t.DocumentHighlight = b;
      var C;
      ! function(e) {
        e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter"
      }(C = t.SymbolKind || (t.SymbolKind = {}));
      var S = function() {
        function e(e, t, n, r, i) {
          this.name = e, this.kind = t, this.containerName = i, "string" == typeof n && (this.containerName = n), r instanceof m ? this.location = r : n instanceof l && (this.location = new m(r, n))
        }
        return e.prototype.toJSON = function() {
          return {
            name: this.name,
            kind: C[this.kind],
            location: this.location,
            containerName: this.containerName
          }
        }, e
      }();
      t.SymbolInformation = S;
      var E = function() {
        return function(e, t) {
          this.title = e, this.edit = t
        }
      }();
      t.CodeAction = E;
      var x = function() {
        function e(e, t) {
          this.range = e, this.command = t
        }
        return Object.defineProperty(e.prototype, "isResolved", {
          get: function() {
            return !!this.command
          },
          enumerable: !0,
          configurable: !0
        }), e
      }();
      t.CodeLens = x;
      var w = function() {
        function e(e) {
          this.value = e || ""
        }
        return e.prototype.appendText = function(e) {
          return this.value += e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"), this
        }, e.prototype.appendMarkdown = function(e) {
          return this.value += e, this
        }, e.prototype.appendCodeblock = function(e, t) {
          return void 0 === t && (t = ""), this.value += "\n```", this.value += t, this.value += "\n", this.value += e, this.value += "\n```\n", this
        }, e
      }();
      t.MarkdownString = w;
      var P = function() {
        return function(e, t) {
          this.label = e, this.documentation = t
        }
      }();
      t.ParameterInformation = P;
      var D = function() {
        return function(e, t) {
          this.label = e,
            this.documentation = t, this.parameters = []
        }
      }();
      t.SignatureInformation = D;
      var T = function() {
        return function() {
          this.signatures = []
        }
      }();
      t.SignatureHelp = T;
      ! function(e) {
        e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter"
      }(t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
      var O;
      ! function(e) {
        e[e.Text = 0] = "Text", e[e.Method = 1] = "Method", e[e.Function = 2] = "Function", e[e.Constructor = 3] = "Constructor", e[e.Field = 4] = "Field", e[e.Variable = 5] = "Variable", e[e.Class = 6] = "Class", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Unit = 10] = "Unit", e[e.Value = 11] = "Value", e[e.Enum = 12] = "Enum", e[e.Keyword = 13] = "Keyword", e[e.Snippet = 14] = "Snippet", e[e.Color = 15] = "Color", e[e.File = 16] = "File", e[e.Reference = 17] = "Reference", e[e.Folder = 18] = "Folder", e[e.EnumMember = 19] = "EnumMember", e[e.Constant = 20] = "Constant", e[e.Struct = 21] = "Struct", e[e.Event = 22] = "Event", e[e.Operator = 23] = "Operator", e[e.TypeParameter = 24] = "TypeParameter"
      }(O = t.CompletionItemKind || (t.CompletionItemKind = {}));
      var k = function() {
        function e(e, t) {
          this.label = e, this.kind = t
        }
        return e.prototype.toJSON = function() {
          return {
            label: this.label,
            kind: O[this.kind],
            detail: this.detail,
            documentation: this.documentation,
            sortText: this.sortText,
            filterText: this.filterText,
            insertText: this.insertText,
            textEdit: this.textEdit
          }
        }, e
      }();
      t.CompletionItem = k;
      var I = function() {
        return function(e, t) {
          void 0 === e && (e = []), void 0 === t && (t = !1), this.items = e, this.isIncomplete = t
        }
      }();
      t.CompletionList = I;
      ! function(e) {
        e[e.Active = -1] = "Active", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Three = 3] = "Three"
      }(t.ViewColumn || (t.ViewColumn = {}));
      ! function(e) {
        e[e.Left = 1] = "Left", e[e.Right = 2] = "Right"
      }(t.StatusBarAlignment || (t.StatusBarAlignment = {}));
      ! function(e) {
        e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative"
      }(t.TextEditorLineNumbersStyle || (t.TextEditorLineNumbersStyle = {}));
      ! function(e) {
        e[e.Manual = 1] = "Manual", e[e.AfterDelay = 2] = "AfterDelay", e[e.FocusOut = 3] = "FocusOut"
      }(t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {}));
      ! function(e) {
        e[e.Default = 0] = "Default", e[e.InCenter = 1] = "InCenter",
          e[e.InCenterIfOutsideViewport = 2] = "InCenterIfOutsideViewport", e[e.AtTop = 3] = "AtTop"
      }(t.TextEditorRevealType || (t.TextEditorRevealType = {}));
      ! function(e) {
        e[e.Keyboard = 1] = "Keyboard", e[e.Mouse = 2] = "Mouse", e[e.Command = 3] = "Command"
      }(t.TextEditorSelectionChangeKind || (t.TextEditorSelectionChangeKind = {}));
      ! function(e) {
        e[e.OpenOpen = 0] = "OpenOpen", e[e.ClosedClosed = 1] = "ClosedClosed", e[e.OpenClosed = 2] = "OpenClosed", e[e.ClosedOpen = 3] = "ClosedOpen"
      }(t.DecorationRangeBehavior || (t.DecorationRangeBehavior = {})),
      function(e) {
        e.fromValue = function(t) {
          switch (t) {
            case "keyboard":
              return e.Keyboard;
            case "mouse":
              return e.Mouse;
            case "api":
              return e.Command
          }
        }
      }(t.TextEditorSelectionChangeKind || (t.TextEditorSelectionChangeKind = {}));
      var L = function() {
        return function(e, t) {
          if (t && !(t instanceof i.default)) throw o.illegalArgument("target");
          if (!l.isRange(e) || e.isEmpty) throw o.illegalArgument("range");
          this.range = e, this.target = t
        }
      }();
      t.DocumentLink = L;
      var A = function() {
        return function(e, t, n, r) {
          this.red = e, this.green = t, this.blue = n, this.alpha = r
        }
      }();
      t.Color = A;
      var R = function() {
        return function(e, t) {
          if (t && !(t instanceof A)) throw o.illegalArgument("color");
          if (!l.isRange(e) || e.isEmpty) throw o.illegalArgument("range");
          this.range = e, this.color = t
        }
      }();
      t.ColorInformation = R;
      var M = function() {
        return function(e) {
          if (!e || "string" != typeof e) throw o.illegalArgument("label");
          this.label = e
        }
      }();
      t.ColorPresentation = M;
      ! function(e) {
        e[e.RGB = 0] = "RGB", e[e.HEX = 1] = "HEX", e[e.HSL = 2] = "HSL"
      }(t.ColorFormat || (t.ColorFormat = {}));
      ! function(e) {
        e[e.Always = 1] = "Always", e[e.Silent = 2] = "Silent", e[e.Never = 3] = "Never"
      }(t.TaskRevealKind || (t.TaskRevealKind = {}));
      ! function(e) {
        e[e.Shared = 1] = "Shared", e[e.Dedicated = 2] = "Dedicated", e[e.New = 3] = "New"
      }(t.TaskPanelKind || (t.TaskPanelKind = {}));
      var N = function() {
        function e(e, t) {
          if ("string" != typeof e) throw o.illegalArgument("name");
          if ("string" != typeof t) throw o.illegalArgument("name");
          this._id = e
        }
        return Object.defineProperty(e.prototype, "id", {
            get: function() {
              return this._id
            },
            enumerable: !0,
            configurable: !0
          }), e.Clean = new e("clean", "Clean"), e.Build = new e("build", "Build"),
          e.Rebuild = new e("rebuild", "Rebuild"), e.Test = new e("test", "Test"), e
      }();
      t.TaskGroup = N;
      var F = function() {
        function e(e, t, n) {
          if ("string" != typeof e) throw o.illegalArgument("process");
          this._process = e, void 0 !== t && (Array.isArray(t) ? (this._args = t, this._options = n) : this._options = t), void 0 === this._args && (this._args = [])
        }
        return Object.defineProperty(e.prototype, "process", {
          get: function() {
            return this._process
          },
          set: function(e) {
            if ("string" != typeof e) throw o.illegalArgument("process");
            this._process = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "args", {
          get: function() {
            return this._args
          },
          set: function(e) {
            Array.isArray(e) || (e = []), this._args = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "options", {
          get: function() {
            return this._options
          },
          set: function(e) {
            this._options = e
          },
          enumerable: !0,
          configurable: !0
        }), e
      }();
      t.ProcessExecution = F;
      var j = function() {
        function e(e, t) {
          if ("string" != typeof e) throw o.illegalArgument("commandLine");
          this._commandLine = e, this._options = t
        }
        return Object.defineProperty(e.prototype, "commandLine", {
          get: function() {
            return this._commandLine
          },
          set: function(e) {
            if ("string" != typeof e) throw o.illegalArgument("commandLine");
            this._commandLine = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "options", {
          get: function() {
            return this._options
          },
          set: function(e) {
            this._options = e
          },
          enumerable: !0,
          configurable: !0
        }), e
      }();
      t.ShellExecution = j;
      var H;
      ! function(e) {
        e[e.Global = 1] = "Global", e[e.Workspace = 2] = "Workspace"
      }(H = t.TaskScope || (t.TaskScope = {}));
      var W = function() {
        function e(e, t, n, r, i, o) {
          this.definition = e;
          var s;
          "string" == typeof t ? (this.name = t, this.source = n, this.execution = r, s = i) : (t === H.Global || H.Workspace, this.target = t, this.name = n, this.source = r, this.execution = i, s = o), "string" == typeof s ? (this._problemMatchers = [s], this._hasDefinedMatchers = !0) : Array.isArray(s) ? (this._problemMatchers = s, this._hasDefinedMatchers = !0) : (this._problemMatchers = [], this._hasDefinedMatchers = !1), this._isBackground = !1
        }
        return Object.defineProperty(e.prototype, "definition", {
          get: function() {
            return this._definition
          },
          set: function(e) {
            if (void 0 === e || null === e) throw o.illegalArgument("Kind can't be undefined or null");
            this._definitionKey = void 0, this._definition = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "definitionKey", {
          get: function() {
            if (!this._definitionKey) {
              var e = r.createHash("md5");
              e.update(JSON.stringify(this._definition)), this._definitionKey = e.digest("hex")
            }
            return this._definitionKey
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "scope", {
          get: function() {
            return this._scope
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "target", {
          set: function(e) {
            this._scope = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "name", {
          get: function() {
            return this._name
          },
          set: function(e) {
            if ("string" != typeof e) throw o.illegalArgument("name");
            this._name = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "execution", {
          get: function() {
            return this._execution
          },
          set: function(e) {
            null === e && (e = void 0), this._execution = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "problemMatchers", {
          get: function() {
            return this._problemMatchers
          },
          set: function(e) {
            if (!Array.isArray(e)) return this._problemMatchers = [], void(this._hasDefinedMatchers = !1);
            this._problemMatchers = e, this._hasDefinedMatchers = !0
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "hasDefinedMatchers", {
          get: function() {
            return this._hasDefinedMatchers
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "isBackground", {
          get: function() {
            return this._isBackground
          },
          set: function(e) {
            !0 !== e && !1 !== e && (e = !1), this._isBackground = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "source", {
          get: function() {
            return this._source
          },
          set: function(e) {
            if ("string" != typeof e || 0 === e.length) throw o.illegalArgument("source must be a string of length > 0");
            this._source = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "group", {
          get: function() {
            return this._group
          },
          set: function(e) {
            this._group = void 0 !== e && null !== e ? e : void 0
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "presentationOptions", {
          get: function() {
            return this._presentationOptions
          },
          set: function(e) {
            null === e && (e = void 0), this._presentationOptions = e
          },
          enumerable: !0,
          configurable: !0
        }), e
      }();
      t.Task = W;
      ! function(e) {
        e[e.SourceControl = 1] = "SourceControl", e[e.Window = 10] = "Window"
      }(t.ProgressLocation || (t.ProgressLocation = {}));
      var B = function() {
        return function(e, t) {
          void 0 === t && (t = V.None), this.label = e, this.collapsibleState = t
        }
      }();
      t.TreeItem = B;
      var V;
      ! function(e) {
        e[e.None = 0] = "None", e[e.Collapsed = 1] = "Collapsed", e[e.Expanded = 2] = "Expanded"
      }(V = t.TreeItemCollapsibleState || (t.TreeItemCollapsibleState = {}));
      var U = function() {
        return function(e) {
          this.id = e
        }
      }();
      t.ThemeColor = U;
      ! function(e) {
        e[e.Global = 1] = "Global", e[e.Workspace = 2] = "Workspace", e[e.WorkspaceFolder = 3] = "WorkspaceFolder"
      }(t.ConfigurationTarget || (t.ConfigurationTarget = {}));
      var z = function() {
        function e(e, t) {
          if (!("string" == typeof e || e && i.default.isUri(e.uri))) throw o.illegalArgument("base");
          if ("string" != typeof t) throw o.illegalArgument("pattern");
          this.base = "string" == typeof e ? e : e.uri.fsPath, this.pattern = t
        }
        return e.prototype.pathToRelative = function(e, t) {
          return a.relative(e, t)
        }, e
      }();
      t.RelativePattern = z;
      var K = function() {
        return function(e, t, n) {
          this.enabled = e, this.condition = t, this.hitCondition = n, this.condition = t, this.hitCondition = n
        }
      }();
      t.Breakpoint = K;
      var q = function(e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, n, r) || this;
          return o.location = i, o
        }
        return n(t, e), t
      }(K);
      t.SourceBreakpoint = q;
      var $ = function(e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, n, r) || this;
          return o.functionName = i, o
        }
        return n(t, e), t
      }(K);
      t.FunctionBreakpoint = $;
      ! function(e) {
        e[e.Trace = 1] = "Trace", e[e.Debug = 2] = "Debug", e[e.Info = 3] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 5] = "Error", e[e.Critical = 6] = "Critical", e[e.Off = 7] = "Off"
      }(t.LogLevel || (t.LogLevel = {}))
    }), define(e[66], t([1, 0, 35, 8, 135, 7, 30, 2]), function(e, t, r, i, o, s, a, u) {
      "use strict";

      function c(e) {
        return l.get(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = new Map;
      t.setWordDefinitionFor = function(e, t) {
        l.set(e, t)
      }, t.getWordDefinitionFor = c;
      var d = function(e) {
        function t(t, n, r, i, o, s, a) {
          var u = e.call(this, n, r, i, s) || this;
          return u._textLines = [], u._isDisposed = !1, u._proxy = t, u._languageId = o, u._isDirty = a, u
        }
        return n(t, e), t.prototype.dispose = function() {
          r.ok(!this._isDisposed), this._isDisposed = !0, this._isDirty = !1
        }, t.prototype.equalLines = function(e) {
          var t = e.length;
          if (t !== this._lines.length) return !1;
          for (var n = 0; n < t; n++)
            if (e[n] !== this._lines[n]) return !1;
          return !0
        }, Object.defineProperty(t.prototype, "document", {
          get: function() {
            if (!this._document) {
              var e = this;
              this._document = {
                get uri() {
                  return e._uri
                },
                get fileName() {
                  return e._uri.fsPath
                },
                get isUntitled() {
                  return "file" !== e._uri.scheme
                },
                get languageId() {
                  return e._languageId
                },
                get version() {
                  return e._versionId
                },
                get isClosed() {
                  return e._isDisposed
                },
                get isDirty() {
                  return e._isDirty
                },
                save: function() {
                  return e._save()
                },
                getText: function(t) {
                  return t ? e._getTextInRange(t) : e.getText()
                },
                get eol() {
                  return "\n" === e._eol ? s.EndOfLine.LF : s.EndOfLine.CRLF
                },
                get lineCount() {
                  return e._lines.length
                },
                lineAt: function(t) {
                  return e._lineAt(t)
                },
                offsetAt: function(t) {
                  return e._offsetAt(t)
                },
                positionAt: function(t) {
                  return e._positionAt(t)
                },
                validateRange: function(t) {
                  return e._validateRange(t)
                },
                validatePosition: function(t) {
                  return e._validatePosition(t)
                },
                getWordRangeAtPosition: function(t, n) {
                  return e._getWordRangeAtPosition(t, n)
                }
              }
            }
            return Object.freeze(this._document)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype._acceptLanguageId = function(e) {
          r.ok(!this._isDisposed), this._languageId = e
        }, t.prototype._acceptIsDirty = function(e) {
          r.ok(!this._isDisposed), this._isDirty = e
        }, t.prototype._save = function() {
          return this._isDisposed ? u.TPromise.wrapError(new Error("Document has been closed")) : this._proxy.$trySaveDocument(this._uri)
        }, t.prototype._getTextInRange = function(e) {
          var t = this._validateRange(e);
          if (t.isEmpty) return "";
          if (t.isSingleLine) return this._lines[t.start.line].substring(t.start.character, t.end.character);
          var n = this._eol,
            r = t.start.line,
            i = t.end.line,
            o = [];
          o.push(this._lines[r].substring(t.start.character));
          for (var s = r + 1; s < i; s++) o.push(this._lines[s]);
          return o.push(this._lines[i].substring(0, t.end.character)), o.join(n)
        }, t.prototype._lineAt = function(e) {
          var t;
          if (e instanceof s.Position ? t = e.line : "number" == typeof e && (t = e), t < 0 || t >= this._lines.length) throw new Error("Illegal value for `line`");
          var n = this._textLines[t];
          if (!n || n.lineNumber !== t || n.text !== this._lines[t]) {
            var r = this._lines[t],
              i = /^(\s*)/.exec(r)[1].length,
              o = new s.Range(t, 0, t, r.length),
              a = t < this._lines.length - 1 ? new s.Range(t, 0, t + 1, 0) : o;
            n = Object.freeze({
              lineNumber: t,
              range: o,
              rangeIncludingLineBreak: a,
              text: r,
              firstNonWhitespaceCharacterIndex: i,
              isEmptyOrWhitespace: i === r.length
            }), this._textLines[t] = n
          }
          return n
        }, t.prototype._offsetAt = function(e) {
          return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getAccumulatedValue(e.line - 1) + e.character
        }, t.prototype._positionAt = function(e) {
          e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
          var t = this._lineStarts.getIndexOf(e),
            n = this._lines[t.index].length;
          return new s.Position(t.index, Math.min(t.remainder, n))
        }, t.prototype._validateRange = function(e) {
          if (!(e instanceof s.Range)) throw new Error("Invalid argument");
          var t = this._validatePosition(e.start),
            n = this._validatePosition(e.end);
          return t === e.start && n === e.end ? e : new s.Range(t.line, t.character, n.line, n.character)
        }, t.prototype._validatePosition = function(e) {
          if (!(e instanceof s.Position)) throw new Error("Invalid argument");
          var t = e.line,
            n = e.character,
            r = !1;
          if (t < 0) t = 0, n = 0, r = !0;
          else if (t >= this._lines.length) t = this._lines.length - 1, n = this._lines[t].length, r = !0;
          else {
            var i = this._lines[t].length;
            n < 0 ? (n = 0, r = !0) : n > i && (n = i, r = !0)
          }
          return r ? new s.Position(t, n) : e
        }, t.prototype._getWordRangeAtPosition = function(e, t) {
          var n = this._validatePosition(e);
          t ? i.regExpLeadsToEndlessLoop(t) && (console.warn("[getWordRangeAtPosition]: ignoring custom regexp '" + t.source + "' because it matches the empty string."), t = c(this._languageId)) : t = c(this._languageId);
          var r = a.getWordAtText(n.character + 1, a.ensureValidWordDefinition(t), this._lines[n.line], 0);
          if (r) return new s.Range(n.line, r.startColumn - 1, n.line, r.endColumn - 1)
        }, t
      }(o.MirrorTextModel);
      t.ExtHostDocumentData = d
    }), define(e[122], t([1, 0, 4, 7, 28, 3]), function(e, t, n, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {
          function e(e, t, s, a, u) {
            var c = this;
            this._onDidCreate = new n.Emitter, this._onDidChange = new n.Emitter, this._onDidDelete = new n.Emitter, this._config = 0, s && (this._config += 1), a && (this._config += 2), u && (this._config += 4);
            var l = i.parse(t),
              d = e(function(e) {
                if (!s)
                  for (var t = 0, n = e.created; t < n.length; t++) {
                    var r = n[t],
                      i = o.default.revive(r);
                    l(i.fsPath) && c._onDidCreate.fire(i)
                  }
                if (!a)
                  for (var d = 0, f = e.changed; d < f.length; d++) {
                    var p = f[d],
                      i = o.default.revive(p);
                    l(i.fsPath) && c._onDidChange.fire(i)
                  }
                if (!u)
                  for (var h = 0, g = e.deleted; h < g.length; h++) {
                    var m = g[h],
                      i = o.default.revive(m);
                    l(i.fsPath) && c._onDidDelete.fire(i)
                  }
              });
            this._disposable = r.Disposable.from(this._onDidCreate, this._onDidChange, this._onDidDelete, d)
          }
          return Object.defineProperty(e.prototype, "ignoreCreateEvents", {
            get: function() {
              return Boolean(1 & this._config)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "ignoreChangeEvents", {
            get: function() {
              return Boolean(2 & this._config)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "ignoreDeleteEvents", {
            get: function() {
              return Boolean(4 & this._config)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.dispose = function() {
            this._disposable.dispose()
          }, Object.defineProperty(e.prototype, "onDidCreate", {
            get: function() {
              return this._onDidCreate.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onDidChange", {
            get: function() {
              return this._onDidChange.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onDidDelete", {
            get: function() {
              return this._onDidDelete.event
            },
            enumerable: !0,
            configurable: !0
          }), e
        }(),
        a = function() {
          function e() {
            this._emitter = new n.Emitter
          }
          return e.prototype.createFileSystemWatcher = function(e, t, n, r) {
              return new s(this._emitter.event, e, t, n, r)
            },
            e.prototype.$onFileEvent = function(e) {
              this._emitter.fire(e)
            }, e
        }();
      t.ExtHostFileSystemEventService = a
    }), define(e[67], t([1, 0, 2, 4, 12, 21, 14, 49, 22]), function(e, t, r, i, o, s, a, u, c) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TextCompareEditorVisible = new u.RawContextKey("textCompareEditorVisible", !1);
      var l;
      ! function(e) {
        e[e.SAVE = 0] = "SAVE", e[e.DONT_SAVE = 1] = "DONT_SAVE", e[e.CANCEL = 2] = "CANCEL"
      }(l = t.ConfirmResult || (t.ConfirmResult = {})), t.TEXT_DIFF_EDITOR_ID = "workbench.editors.textDiffEditor", t.BINARY_DIFF_EDITOR_ID = "workbench.editors.binaryResourceDiffEditor";
      var d = function() {
        function e() {
          this._onDidChangeDirty = new i.Emitter, this._onDidChangeLabel = new i.Emitter, this._onDispose = new i.Emitter, this.disposed = !1
        }
        return Object.defineProperty(e.prototype, "onDidChangeDirty", {
            get: function() {
              return this._onDidChangeDirty.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onDidChangeLabel", {
            get: function() {
              return this._onDidChangeLabel.event
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "onDispose", {
            get: function() {
              return this._onDispose.event
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.getResource = function() {
            return null
          }, e.prototype.getName = function() {
            return null
          }, e.prototype.getDescription = function(e) {
            return null
          }, e.prototype.getTitle = function(e) {
            return this.getName()
          }, e.prototype.getPreferredEditorId = function(e) {
            return e && e.length > 0 ? e[0] : null
          }, e.prototype.getTelemetryDescriptor = function() {
            return {
              typeId: this.getTypeId()
            }
          }, e.prototype.isDirty = function() {
            return !1
          }, e.prototype.confirmSave = function() {
            return r.TPromise.wrap(l.DONT_SAVE)
          }, e.prototype.save = function() {
            return r.TPromise.as(!0)
          }, e.prototype.revert = function(e) {
            return r.TPromise.as(!0)
          }, e.prototype.close = function() {
            this.dispose()
          }, e.prototype.supportsSplitEditor = function() {
            return !0
          }, e.prototype.matches = function(e) {
            return this === e
          }, e.prototype.dispose = function() {
            this.disposed = !0, this._onDispose.fire(), this._onDidChangeDirty.dispose(), this._onDidChangeLabel.dispose(), this._onDispose.dispose()
          },
          e.prototype.isDisposed = function() {
            return this.disposed
          }, e
      }();
      t.EditorInput = d;
      var f = function() {
        function e(e, t, n) {
          this._input = e, this._options = t, this._position = n
        }
        return Object.defineProperty(e.prototype, "input", {
          get: function() {
            return this._input
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "options", {
          get: function() {
            return this._options
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "position", {
          get: function() {
            return this._position
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.prevent = function(e) {
          this.override = e
        }, e.prototype.isPrevented = function() {
          return this.override
        }, e
      }();
      t.EditorOpeningEvent = f;
      ! function(e) {
        e[e.Encode = 0] = "Encode", e[e.Decode = 1] = "Decode"
      }(t.EncodingMode || (t.EncodingMode = {}));
      var p = function(e) {
        function t(t, n, r, i) {
          var o = e.call(this) || this;
          return o.name = t, o.description = n, o._details = r, o._master = i, o._toUnbind = [], o.registerListeners(), o
        }
        return n(t, e), Object.defineProperty(t.prototype, "master", {
            get: function() {
              return this._master
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "details", {
            get: function() {
              return this._details
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.isDirty = function() {
            return this.master.isDirty()
          }, t.prototype.confirmSave = function() {
            return this.master.confirmSave()
          }, t.prototype.save = function() {
            return this.master.save()
          }, t.prototype.revert = function() {
            return this.master.revert()
          }, t.prototype.getTelemetryDescriptor = function() {
            var t = this.master.getTelemetryDescriptor();
            return o.assign(t, e.prototype.getTelemetryDescriptor.call(this))
          }, t.prototype.registerListeners = function() {
            var e = this,
              t = i.once(this.details.onDispose);
            this._toUnbind.push(t(function() {
              e.isDisposed() || e.dispose()
            }));
            var n = i.once(this.master.onDispose);
            this._toUnbind.push(n(function() {
              e.isDisposed() || e.dispose()
            })), this._toUnbind.push(this.master.onDidChangeDirty(function() {
              return e._onDidChangeDirty.fire()
            })), this._toUnbind.push(this.master.onDidChangeLabel(function() {
              return e._onDidChangeLabel.fire()
            }))
          }, Object.defineProperty(t.prototype, "toUnbind", {
            get: function() {
              return this._toUnbind
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.resolve = function(e) {
            return r.TPromise.as(null)
          }, t.prototype.getTypeId = function() {
            return t.ID
          }, t.prototype.getName = function() {
            return this.name
          }, t.prototype.getDescription = function() {
            return this.description
          }, t.prototype.supportsSplitEditor = function() {
            return !1
          }, t.prototype.matches = function(n) {
            if (!0 === e.prototype.matches.call(this, n)) return !0;
            if (n) {
              if (!(n instanceof t)) return !1;
              var r = n;
              return this.details.matches(r.details) && this.master.matches(r.master)
            }
            return !1
          }, t.prototype.dispose = function() {
            this._toUnbind = a.dispose(this._toUnbind), e.prototype.dispose.call(this)
          }, t.ID = "workbench.editorinputs.sidebysideEditorInput", t
      }(d);
      t.SideBySideEditorInput = p;
      var h = function(e) {
        function t() {
          var t = e.call(this) || this;
          return t._onDispose = new i.Emitter, t
        }
        return n(t, e), Object.defineProperty(t.prototype, "onDispose", {
            get: function() {
              return this._onDispose.event
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.load = function() {
            return r.TPromise.as(this)
          },
          t.prototype.isResolved = function() {
            return !0
          }, t.prototype.dispose = function() {
            this._onDispose.fire(), this._onDispose.dispose(), e.prototype.dispose.call(this)
          }, t
      }(a.Disposable);
      t.EditorModel = h;
      var g = function() {
        function e() {}
        return e.create = function(t) {
          var n = new e;
          return n.preserveFocus = t.preserveFocus, n.forceOpen = t.forceOpen, n.revealIfVisible = t.revealIfVisible, n.revealIfOpened = t.revealIfOpened, n.pinned = t.pinned, n.index = t.index, n.inactive = t.inactive, n
        }, e
      }();
      t.EditorOptions = g;
      var m = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.from = function(e) {
          return e && e.options ? t.create(e.options) : null
        }, t.create = function(e) {
          void 0 === e && (e = Object.create(null));
          var n = new t;
          if (e.selection) {
            var r = e.selection;
            n.selection(r.startLineNumber, r.startColumn, r.endLineNumber, r.endColumn)
          }
          return e.viewState && (n.editorViewState = e.viewState), e.forceOpen && (n.forceOpen = !0), e.revealIfVisible && (n.revealIfVisible = !0), e.revealIfOpened && (n.revealIfOpened = !0), e.preserveFocus && (n.preserveFocus = !0),
            e.revealInCenterIfOutsideViewport && (n.revealInCenterIfOutsideViewport = !0), e.pinned && (n.pinned = !0), e.inactive && (n.inactive = !0), "number" == typeof e.index && (n.index = e.index), n
        }, t.prototype.hasOptionsDefined = function() {
          return !!this.editorViewState || !s.isUndefinedOrNull(this.startLineNumber) && !s.isUndefinedOrNull(this.startColumn)
        }, t.prototype.selection = function(e, t, n, r) {
          return void 0 === n && (n = e), void 0 === r && (r = t), this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r, this
        }, t.fromEditor = function(e, n) {
          var r = t.create(n);
          return r.editorViewState = e.saveViewState(), r
        }, t.prototype.apply = function(e, t) {
          return this.applyViewState(e, t)
        }, t.prototype.applyViewState = function(e, t) {
          var n = !1;
          if (this.editorViewState) e.restoreViewState(this.editorViewState), n = !0;
          else if (!s.isUndefinedOrNull(this.startLineNumber) && !s.isUndefinedOrNull(this.startColumn)) {
            if (s.isUndefinedOrNull(this.endLineNumber) || s.isUndefinedOrNull(this.endColumn)) {
              var r = {
                lineNumber: this.startLineNumber,
                column: this.startColumn
              };
              e.setPosition(r), this.revealInCenterIfOutsideViewport ? e.revealPositionInCenterIfOutsideViewport(r, t) : e.revealPositionInCenter(r, t)
            } else {
              var i = {
                startLineNumber: this.startLineNumber,
                startColumn: this.startColumn,
                endLineNumber: this.endLineNumber,
                endColumn: this.endColumn
              };
              e.setSelection(i), this.revealInCenterIfOutsideViewport ? e.revealRangeInCenterIfOutsideViewport(i, t) : e.revealRangeInCenter(i, t)
            }
            n = !0
          }
          return n
        }, t
      }(g);
      t.TextEditorOptions = m, t.EditorOpenPositioning = {
        LEFT: "left",
        RIGHT: "right",
        FIRST: "first",
        LAST: "last"
      }, t.OPEN_POSITIONING_CONFIG = "workbench.editor.openPositioning", t.ActiveEditorMovePositioning = {
        FIRST: "first",
        LAST: "last",
        LEFT: "left",
        RIGHT: "right",
        CENTER: "center",
        POSITION: "position"
      }, t.ActiveEditorMovePositioningBy = {
        TAB: "tab",
        GROUP: "group"
      }, t.EditorCommands = {
        MoveActiveEditor: "moveActiveEditor"
      }, t.toResource = function(e, t) {
        if (!e) return null;
        t && t.supportSideBySide && e instanceof p && (e = e.master);
        var n = e.getResource();
        if (!t || !t.filter) return n;
        if (!n) return null;
        var r, i;
        return Array.isArray(t.filter) ? (r = t.filter.indexOf("file") >= 0, i = t.filter.indexOf("untitled") >= 0) : (r = "file" === t.filter, i = "untitled" === t.filter), r && "file" === n.scheme ? n : i && "untitled" === n.scheme ? n : null
      };
      var v = function() {
        function e() {
          this.editorInputFactoryConstructors = Object.create(null), this.editorInputFactoryInstances = Object.create(null)
        }
        return e.prototype.setInstantiationService = function(e) {
          this.instantiationService = e;
          for (var t in this.editorInputFactoryConstructors) {
            var n = this.editorInputFactoryConstructors[t];
            this.createEditorInputFactory(t, n)
          }
          this.editorInputFactoryConstructors = {}
        }, e.prototype.createEditorInputFactory = function(e, t) {
          var n = this.instantiationService.createInstance(t);
          this.editorInputFactoryInstances[e] = n
        }, e.prototype.registerFileInputFactory = function(e) {
          this.fileInputFactory = e
        }, e.prototype.getFileInputFactory = function() {
          return this.fileInputFactory
        }, e.prototype.registerEditorInputFactory = function(e, t) {
          this.instantiationService ? this.createEditorInputFactory(e, t) : this.editorInputFactoryConstructors[e] = t
        }, e.prototype.getEditorInputFactory = function(e) {
          return this.editorInputFactoryInstances[e]
        }, e
      }();
      t.Extensions = {
        EditorInputFactories: "workbench.contributions.editor.inputFactories"
      }, c.Registry.add(t.Extensions.EditorInputFactories, new v)
    }), define(e[124], t([1, 0, 2, 26, 67, 47, 38]), function(e, t, r, i, o, u, c) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = function(e) {
        function t(t, n, r) {
          var i = e.call(this) || this;
          return i.modelService = t, i.modeService = n, r && i.handleExistingModel(r), i
        }
        return n(t, e), t.prototype.handleExistingModel = function(e) {
          var t = this.modelService.getModel(e);
          if (!t) throw new Error("Document with resource " + e.toString() + " does not exist");
          this.textEditorModelHandle = e, this.registerModelDisposeListener(t)
        }, t.prototype.registerModelDisposeListener = function(e) {
          var t = this;
          this.modelDisposeListener && this.modelDisposeListener.dispose(), this.modelDisposeListener = e.onWillDispose(function() {
            t.textEditorModelHandle = null, t.dispose()
          })
        }, Object.defineProperty(t.prototype, "textEditorModel", {
          get: function() {
            return this.textEditorModelHandle ? this.modelService.getModel(this.textEditorModelHandle) : null
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.createTextEditorModel = function(e, t, n) {
          var i = this.getFirstLineText(e),
            o = this.getOrCreateMode(this.modeService, n, i);
          return r.TPromise.as(this.doCreateTextEditorModel(e, o, t))
        }, t.prototype.doCreateTextEditorModel = function(e, t, n) {
          var r = n && this.modelService.getModel(n);
          return r ? (this.modelService.updateModel(r, e), this.modelService.setMode(r, t)) : (r = this.modelService.createModel(e, t, n), this.createdEditorModel = !0, this.registerModelDisposeListener(r)), this.textEditorModelHandle = r.uri, this
        }, t.prototype.getFirstLineText = function(e) {
          if ("string" == typeof e) {
            var t = e.substr(0, 100),
              n = t.indexOf("\r");
            n < 0 && (n = t.length);
            var r = t.indexOf("\n");
            return r < 0 && (r = t.length), t.substr(0, Math.min(n, r))
          }
          return e.getFirstLineText(100)
        }, t.prototype.getOrCreateMode = function(e, t, n) {
          return e.getOrCreateMode(t)
        }, t.prototype.updateTextEditorModel = function(e) {
          this.textEditorModel && this.modelService.updateModel(this.textEditorModel, e)
        }, t.prototype.getValue = function() {
          var e = this.textEditorModel;
          return e ? e.getValue(i.EndOfLinePreference.TextDefined, !0) : null
        }, t.prototype.isResolved = function() {
          return !!this.textEditorModelHandle
        }, t.prototype.dispose = function() {
          this.modelDisposeListener && (this.modelDisposeListener.dispose(), this.modelDisposeListener = null), this.textEditorModelHandle && this.createdEditorModel && this.modelService.destroyModel(this.textEditorModelHandle), this.textEditorModelHandle = null, this.createdEditorModel = !1, e.prototype.dispose.call(this)
        }, t = s([a(0, c.IModelService), a(1, u.IModeService)], t)
      }(o.EditorModel);
      t.BaseTextEditorModel = l
    }), define(e[125], t([1, 0, 21, 12]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.Always = 1] = "Always", e[e.Silent = 2] = "Silent", e[e.Never = 3] = "Never"
      }(t.RevealKind || (t.RevealKind = {})),
      function(e) {
        e.fromString = function(t) {
          switch (t.toLowerCase()) {
            case "always":
              return e.Always;
            case "silent":
              return e.Silent;
            case "never":
              return e.Never;
            default:
              return e.Always
          }
        }
      }(t.RevealKind || (t.RevealKind = {}));
      ! function(e) {
        e[e.Shared = 1] = "Shared", e[e.Dedicated = 2] = "Dedicated", e[e.New = 3] = "New"
      }(t.PanelKind || (t.PanelKind = {})),
      function(e) {
        e.fromString = function(t) {
          switch (t.toLowerCase()) {
            case "shared":
              return e.Shared;
            case "dedicated":
              return e.Dedicated;
            case "new":
              return e.New;
            default:
              return e.Shared
          }
        }
      }(t.PanelKind || (t.PanelKind = {}));
      ! function(e) {
        e[e.Shell = 1] = "Shell", e[e.Process = 2] = "Process"
      }(t.RuntimeType || (t.RuntimeType = {})),
      function(e) {
        e.fromString = function(t) {
          switch (t.toLowerCase()) {
            case "shell":
              return e.Shell;
            case "process":
            default:
              return e.Process
          }
        }
      }(t.RuntimeType || (t.RuntimeType = {}));
      ! function(e) {
        e.Clean = "clean", e.Build = "build", e.Rebuild = "rebuild", e.Test = "test", e.is = function(t) {
          return t === e.Clean || t === e.Build || t === e.Rebuild || t === e.Test
        }
      }(t.TaskGroup || (t.TaskGroup = {}));
      var i;
      ! function(e) {
        e[e.Global = 1] = "Global",
          e[e.Workspace = 2] = "Workspace", e[e.Folder = 3] = "Folder"
      }(i = t.TaskScope || (t.TaskScope = {}));
      var o;
      ! function(e) {
        e.Workspace = "workspace", e.Extension = "extension", e.InMemory = "inMemory"
      }(o = t.TaskSourceKind || (t.TaskSourceKind = {}));
      ! function(e) {
        e.default = "default", e.user = "user"
      }(t.GroupType || (t.GroupType = {}));
      var s;
      ! function(e) {
        e.is = function(e) {
          var t = e;
          return t && "custom" === t.type
        }
      }(s = t.CustomTask || (t.CustomTask = {}));
      ! function(e) {
        e.is = function(e) {
          var t = e;
          return t && t.configures && n.isString(t.configures.type) && void 0 === e.command
        }
      }(t.ConfiguringTask || (t.ConfiguringTask = {}));
      var a;
      ! function(e) {
        e.is = function(e) {
          var t = e;
          return t && t.defines && n.isString(t.defines.type) && void 0 !== t.command
        }
      }(a = t.ContributedTask || (t.ContributedTask = {}));
      var u;
      ! function(e) {
        e.is = function(e) {
          var t = e;
          return t && t._source && t._source.kind === o.InMemory
        }
      }(u = t.InMemoryTask || (t.InMemoryTask = {}));
      var c;
      ! function(e) {
        function t(e) {
          return s.is(e) ? e._source.config.workspaceFolder : a.is(e) ? e._source.workspaceFolder : void 0
        }
        e.getRecentlyUsedKey = function(e) {
          if (!u.is(e)) {
            if (s.is(e)) {
              var t = e._source.config.workspaceFolder;
              if (!t) return;
              return n = {
                type: "custom",
                folder: t.uri.toString(),
                id: e.identifier
              }, JSON.stringify(n)
            }
            if (a.is(e)) {
              var n = {
                type: "contributed",
                scope: e._source.scope,
                id: e._id
              };
              return e._source.scope === i.Folder && e._source.workspaceFolder && (n.folder = e._source.workspaceFolder.uri.toString()), JSON.stringify(n)
            }
          }
        }, e.getMapKey = function(e) {
          if (s.is(e)) return (t = e._source.config.workspaceFolder) ? t.uri.toString() + "|" + e._id : e._id;
          if (a.is(e)) {
            var t = e._source.workspaceFolder;
            return t ? e._source.scope.toString() + "|" + t.uri.toString() + "|" + e._id : e._source.scope.toString() + "|" + e._id
          }
          return e._id
        }, e.getWorkspaceFolder = t, e.clone = function(e) {
          return r.assign({}, e)
        }, e.getTelemetryKind = function(e) {
          return a.is(e) ? "extension" : s.is(e) ? e._source.customizes ? "workspace>extension" : "workspace" : u.is(e) ? "composite" : "unknown"
        }, e.matches = function(e, t) {
          return t === e._label || t === e.identifier
        }, e.getQualifiedLabel = function(e) {
          var n = t(e);
          return n ? e._label + " (" + n.name + ")" : e._label
        }
      }(c = t.Task || (t.Task = {}));
      ! function(e) {
        e[e.Process = 1] = "Process", e[e.Terminal = 2] = "Terminal"
      }(t.ExecutionEngine || (t.ExecutionEngine = {})),
      function(e) {
        e._default = e.Terminal
      }(t.ExecutionEngine || (t.ExecutionEngine = {}));
      ! function(e) {
        e[e.V0_1_0 = 1] = "V0_1_0", e[e.V2_0_0 = 2] = "V2_0_0"
      }(t.JsonSchemaVersion || (t.JsonSchemaVersion = {}));
      var l = function() {
        function e(e) {
          this._order = new Map;
          for (var t = 0; t < e.length; t++) this._order.set(e[t].uri.toString(), t)
        }
        return e.prototype.compare = function(e, t) {
          var n = c.getWorkspaceFolder(e),
            r = c.getWorkspaceFolder(t);
          if (n && r) {
            var i = this._order.get(n.uri.toString());
            i = void 0 === i ? 0 : i + 1;
            var o = this._order.get(r.uri.toString());
            return o = void 0 === o ? 0 : o + 1, i === o ? e._label.localeCompare(t._label) : i - o
          }
          return !n && r ? -1 : n && !r ? 1 : 0
        }, e
      }();
      t.TaskSorter = l;
      var d;
      ! function(e) {
        e.Active = "active", e.Inactive = "inactive", e.Terminated = "terminated", e.Changed = "changed"
      }(d = t.TaskEventKind || (t.TaskEventKind = {}));
      var f;
      ! function(e) {
        e.SingleRun = "singleRun", e.Background = "background"
      }(f = t.TaskRunType || (t.TaskRunType = {}));
      ! function(e) {
        e.create = function(e, t) {
          return t ? Object.freeze({
            kind: e,
            taskId: t._id,
            taskName: t.name,
            runType: t.isBackground ? f.Background : f.SingleRun,
            group: t.group,
            __task: t
          }) : Object.freeze({
            kind: d.Changed
          })
        }
      }(t.TaskEvent || (t.TaskEvent = {}))
    }), define(e[126], t([1, 0, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IBackupFileService = n.createDecorator("backupFileService"), t.BACKUP_FILE_RESOLVE_OPTIONS = {
        acceptTextOnly: !0,
        encoding: "utf-8"
      }, t.BACKUP_FILE_UPDATE_OPTIONS = {
        encoding: "utf-8"
      }
    }), define(e[127], t([1, 0, 12, 23, 61, 22, 27, 20]), function(e, t, r, i, o, s, a, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = function(e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, n, r) || this;
          return o._unsupportedKeys = i, o
        }
        return n(t, e), Object.defineProperty(t.prototype, "unsupportedKeys", {
          get: function() {
            return this._unsupportedKeys
          },
          enumerable: !0,
          configurable: !0
        }), t
      }(o.ConfigurationModel);
      t.WorkspaceSettingsModel = c;
      var l = function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return n._folders = [],
            n._workspaceSettingsModelParser = new f(t), n
        }
        return n(t, e), Object.defineProperty(t.prototype, "folders", {
          get: function() {
            return this._folders
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "workspaceSettingsModel", {
          get: function() {
            return this._workspaceSettingsModelParser.folderSettingsModel
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.reprocessWorkspaceSettings = function() {
          this._workspaceSettingsModelParser.reprocess()
        }, t.prototype.parseRaw = function(t) {
          return this._folders = t.folders || [], this._workspaceSettingsModelParser.parse(t.settings), e.prototype.parseRaw.call(this, t)
        }, t
      }(o.ConfigurationModelParser);
      t.WorkspaceConfigurationModelParser = l;
      var d = function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return r.scope = n, r
        }
        return n(t, e), t.prototype.parseRaw = function(e) {
          var t = this,
            n = i.toValuesTree(e, function(e) {
              return console.error("Conflict in settings file " + t._name + ": " + e)
            }),
            r = Object.create(null);
          r[this.scope] = n;
          return {
            contents: r,
            keys: Object.keys(e).map(function(e) {
              return t.scope + "." + e
            }),
            overrides: []
          }
        }, t
      }(o.ConfigurationModelParser);
      t.StandaloneConfigurationModelParser = d;
      var f = function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return r.configurationScope = n, r
        }
        return n(t, e), t.prototype.parse = function(e) {
          this._raw = "string" == typeof e ? this.parseContent(e) : e, this.parseWorkspaceSettings(this._raw)
        }, Object.defineProperty(t.prototype, "configurationModel", {
          get: function() {
            return this._workspaceSettingsModel || new c({}, [], [], [])
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "folderSettingsModel", {
          get: function() {
            return this.configurationModel
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.reprocess = function() {
          this.parse(this._raw)
        }, t.prototype.parseWorkspaceSettings = function(e) {
          var t = [],
            n = {},
            r = s.Registry.as(a.Extensions.Configuration).getConfigurationProperties();
          for (var i in e) this.isNotExecutable(i, r) ? void 0 !== this.configurationScope && this.getScope(i, r) !== this.configurationScope || (n[i] = e[i]) : t.push(i);
          var o = this.parseRaw(n);
          this._workspaceSettingsModel = new c(o.contents, o.keys, o.overrides, t)
        }, t.prototype.getScope = function(e, t) {
          var n = t[e];
          return n ? n.scope : a.ConfigurationScope.WINDOW
        }, t.prototype.isNotExecutable = function(e, t) {
          var n = t[e];
          return !n || !n.isExecutable
        }, t
      }(o.ConfigurationModelParser);
      t.FolderSettingsModelParser = f;
      var p = function(e) {
        function t(t, n, r, i, o, s, a) {
          var u = e.call(this, t, n, r, i, o, s) || this;
          return u._workspace = a, u
        }
        return n(t, e), t.prototype.getValue = function(t, n) {
            return void 0 === n && (n = {}), e.prototype.getValue.call(this, t, n, this._workspace)
          }, t.prototype.inspect = function(t, n) {
            return void 0 === n && (n = {}), e.prototype.inspect.call(this, t, n, this._workspace)
          }, t.prototype.keys = function() {
            return e.prototype.keys.call(this, this._workspace)
          }, t.prototype.compareAndUpdateUserConfiguration = function(t) {
            var n = this,
              s = i.compare(this.user, t),
              a = s.added,
              u = s.updated,
              c = s.removed,
              l = a.concat(u, c);
            if (l.length) {
              var d = l.map(function(e) {
                return n.getValue(e)
              });
              e.prototype.updateUserConfiguration.call(this, t), l = l.filter(function(e, t) {
                return !r.equals(d[t], n.getValue(e))
              })
            }
            return (new o.ConfigurationChangeEvent).change(l)
          }, t.prototype.compareAndUpdateWorkspaceConfiguration = function(t) {
            var n = this,
              s = i.compare(this.workspace, t),
              a = s.added,
              u = s.updated,
              c = s.removed,
              l = a.concat(u, c);
            if (l.length) {
              var d = l.map(function(e) {
                return n.getValue(e)
              });
              e.prototype.updateWorkspaceConfiguration.call(this, t), l = l.filter(function(e, t) {
                return !r.equals(d[t], n.getValue(e))
              })
            }
            return (new o.ConfigurationChangeEvent).change(l)
          }, t.prototype.compareAndUpdateFolderConfiguration = function(t, n) {
            var s = this,
              a = this.folders.get(t);
            if (a) {
              var u = i.compare(a, n),
                c = u.added,
                l = u.updated,
                d = u.removed,
                f = c.concat(l, d);
              if (f.length) {
                var p = f.map(function(e) {
                  return s.getValue(e, {
                    resource: t
                  })
                });
                e.prototype.updateFolderConfiguration.call(this, t, n), f = f.filter(function(e, n) {
                  return !r.equals(p[n], s.getValue(e, {
                    resource: t
                  }))
                })
              }
              return (new o.ConfigurationChangeEvent).change(f, t)
            }
            return e.prototype.updateFolderConfiguration.call(this, t, n), (new o.ConfigurationChangeEvent).change(n.keys, t)
          },
          t.prototype.compareAndDeleteFolderConfiguration = function(t) {
            if (this._workspace && this._workspace.folders.length > 0 && this._workspace.folders[0].uri.toString() === t.toString()) return new o.ConfigurationChangeEvent;
            var n = this.folders.get(t).keys;
            return e.prototype.deleteFolderConfiguration.call(this, t), (new o.ConfigurationChangeEvent).change(n, t)
          }, t.prototype.compare = function(e) {
            for (var t = this, n = [], i = function(i) {
                (!r.equals(o.getValue(i), e.getValue(i)) || o._workspace && o._workspace.folders.some(function(n) {
                  return !r.equals(t.getValue(i, {
                    resource: n.uri
                  }), e.getValue(i, {
                    resource: n.uri
                  }))
                })) && n.push(i)
              }, o = this, s = 0, a = this.allKeys(); s < a.length; s++) {
              i(a[s])
            }
            return n
          }, t.prototype.allKeys = function() {
            return e.prototype.allKeys.call(this, this._workspace)
          }, t
      }(o.Configuration);
      t.Configuration = p;
      var h = function(e) {
        function t(t, n, r) {
          var i = e.call(this) || this;
          return i._configuration = t, i.source = n, i.sourceConfig = r, i._changedConfiguration = null, i
        }
        return n(t, e), Object.defineProperty(t.prototype, "changedConfiguration", {
          get: function() {
            return this._changedConfiguration || (this._changedConfiguration = new o.ConfigurationModel, this.updateKeys(this._changedConfiguration, this.affectedKeys)), this._changedConfiguration
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "changedConfigurationByResource", {
          get: function() {
            return new u.StrictResourceMap
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "affectedKeys", {
          get: function() {
            return this._configuration.allKeys()
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.affectsConfiguration = function(e, t) {
          return this.doesConfigurationContains(this.changedConfiguration, e)
        }, t
      }(o.AbstractConfigurationChangeEvent);
      t.AllKeysConfigurationChangeEvent = h;
      var g = function() {
        function e(e, t) {
          this.configurationChangeEvent = e, this.workspace = t
        }
        return Object.defineProperty(e.prototype, "changedConfiguration", {
          get: function() {
            return this.configurationChangeEvent.changedConfiguration
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "changedConfigurationByResource", {
          get: function() {
            return this.configurationChangeEvent.changedConfigurationByResource
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "affectedKeys", {
          get: function() {
            return this.configurationChangeEvent.affectedKeys
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "source", {
          get: function() {
            return this.configurationChangeEvent.source
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "sourceConfig", {
          get: function() {
            return this.configurationChangeEvent.sourceConfig
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.affectsConfiguration = function(e, t) {
          if (this.configurationChangeEvent.affectsConfiguration(e, t)) return !0;
          if (t && this.workspace) {
            var n = this.workspace.getFolder(t);
            if (n) return this.configurationChangeEvent.affectsConfiguration(e, n.uri)
          }
          return !1
        }, e
      }();
      t.WorkspaceConfigurationChangeEvent = g
    }), define(e[128], t([1, 0, 12, 3, 4, 7, 23, 61, 127, 20, 27]), function(e, t, n, r, i, o, s, a, u, c, l) {
      "use strict";

      function d(e, t) {
        if (t) {
          for (var n = t.split("."), r = e, i = 0; r && i < n.length; i++) r = r[n[i]];
          return r
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var f = function() {
        function e(e, t, n) {
          this._onDidChangeConfiguration = new i.Emitter, this._proxy = e, this._extHostWorkspace = t, this._configuration = a.Configuration.parse(n), this._readConfigurationScopes(n.configurationScopes)
        }
        return Object.defineProperty(e.prototype, "onDidChangeConfiguration", {
          get: function() {
            return this._onDidChangeConfiguration && this._onDidChangeConfiguration.event
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.$acceptConfigurationChanged = function(e, t) {
          this._configuration = a.Configuration.parse(e), this._onDidChangeConfiguration.fire(this._toConfigurationChangeEvent(t))
        }, e.prototype.getConfiguration = function(e, t, r) {
          var i = this,
            a = n.deepClone(e ? d(this._configuration.getValue(null, {
              resource: t
            }, this._extHostWorkspace.workspace), e) : this._configuration.getValue(null, {
              resource: t
            }, this._extHostWorkspace.workspace));
          e && this._validateConfigurationAccess(e, t, r);
          var u = {
            has: function(e) {
              return void 0 !== d(a, e)
            },
            get: function(n, o) {
              i._validateConfigurationAccess(e ? e + "." + n : n, t, r);
              var s = d(a, n);
              return void 0 === s && (s = o), s
            },
            update: function(n, r, a) {
              n = e ? e + "." + n : n;
              var u = function(e) {
                if (void 0 === e || null === e) return null;
                if ("boolean" == typeof e) return e ? s.ConfigurationTarget.USER : s.ConfigurationTarget.WORKSPACE;
                switch (e) {
                  case o.ConfigurationTarget.Global:
                    return s.ConfigurationTarget.USER;
                  case o.ConfigurationTarget.Workspace:
                    return s.ConfigurationTarget.WORKSPACE;
                  case o.ConfigurationTarget.WorkspaceFolder:
                    return s.ConfigurationTarget.WORKSPACE_FOLDER
                }
              }(a);
              return void 0 !== r ? i._proxy.$updateConfigurationOption(u, n, r, t) : i._proxy.$removeConfigurationOption(u, n, t)
            },
            inspect: function(r) {
              r = e ? e + "." + r : r;
              var o = n.deepClone(i._configuration.inspect(r, {
                resource: t
              }, i._extHostWorkspace.workspace));
              if (o) return {
                key: r,
                defaultValue: o.default,
                globalValue: o.user,
                workspaceValue: o.workspace,
                workspaceFolderValue: o.workspaceFolder
              }
            }
          };
          return "object" == typeof a && n.mixin(u, a, !1), Object.freeze(u)
        }, e.prototype._validateConfigurationAccess = function(e, t, n) {
          var r = this._configurationScopes.get(e),
            i = n ? "[" + n + "] " : "";
          l.ConfigurationScope.RESOURCE !== r ? l.ConfigurationScope.WINDOW !== r || t && console.warn(i + "Accessing a window scoped configuration for a resource is not expected. To associate '" + e + "' to a resource, define its scope to 'resource' in configuration contributions in 'package.json'.") : void 0 === t && console.warn(i + "Accessing a resource scoped configuration without providing a resource is not expected. To get the effective value for '" + e + "', provide the URI of a resource or 'null' for any resource.")
        }, e.prototype._readConfigurationScopes = function(e) {
          if (this._configurationScopes = new Map, e.length) {
            var t = this._configuration.keys(this._extHostWorkspace.workspace).default;
            if (t.length === e.length)
              for (var n = 0; n < t.length; n++) this._configurationScopes.set(t[n], e[n])
          }
        }, e.prototype._toConfigurationChangeEvent = function(e) {
          for (var t = new a.ConfigurationModel(e.changedConfiguration.contents, e.changedConfiguration.keys, e.changedConfiguration.overrides), n = new c.StrictResourceMap, i = 0, o = Object.keys(e.changedConfigurationByResource); i < o.length; i++) {
            var s = o[i],
              l = r.default.parse(s),
              d = e.changedConfigurationByResource[s];
            n.set(l, new a.ConfigurationModel(d.contents, d.keys, d.overrides))
          }
          var f = new u.WorkspaceConfigurationChangeEvent(new a.ConfigurationChangeEvent(t, n), this._extHostWorkspace.workspace);
          return Object.freeze({
            affectsConfiguration: function(e, t) {
              return f.affectsConfiguration(e, t)
            }
          })
        }, e
      }();
      t.ExtHostConfiguration = f
    }), define(e[129], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.hasOwnProperty,
        r = function() {
          function e(e) {
            this._extensionsMap = {}, this._extensionsArr = [], this._activationMap = {};
            for (var t = 0, r = e.length; t < r; t++) {
              var i = e[t];
              if (n.call(this._extensionsMap, i.id)) console.error("Extension `" + i.id + "` is already registered");
              else if (this._extensionsMap[i.id] = i,
                this._extensionsArr.push(i), Array.isArray(i.activationEvents))
                for (var o = 0, s = i.activationEvents.length; o < s; o++) {
                  var a = i.activationEvents[o];
                  this._activationMap[a] = this._activationMap[a] || [], this._activationMap[a].push(i)
                }
            }
          }
          return e.prototype.containsActivationEvent = function(e) {
            return n.call(this._activationMap, e)
          }, e.prototype.getExtensionDescriptionsForActivationEvent = function(e) {
            return n.call(this._activationMap, e) ? this._activationMap[e].slice(0) : []
          }, e.prototype.getAllExtensionDescriptions = function() {
            return this._extensionsArr.slice(0)
          }, e.prototype.getExtensionDescription = function(e) {
            return n.call(this._extensionsMap, e) ? this._extensionsMap[e] : null
          }, e
        }();
      t.ExtensionDescriptionRegistry = r
    }), define(e[130], t([1, 0, 2, 11]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e) {
          this._onCancel = e, this._actual = null, this._actualOk = null, this._actualErr = null, this._hasValue = !1, this._value = null, this._hasErr = !1, this._err = null, this._isCanceled = !1
        }
        return e.prototype._ensureActual = function() {
          var e = this;
          return this._actual || (this._actual = new n.TPromise(function(t, n) {
            e._actualOk = t, e._actualErr = n
          }, this._onCancel), this._hasValue && this._actualOk(this._value), this._hasErr && this._actualErr(this._err)), this._actual
        }, e.prototype.resolveOk = function(e) {
          this._isCanceled || this._hasErr || (this._hasValue = !0, this._value = e, this._actual && this._actualOk(e))
        }, e.prototype.resolveErr = function(e) {
          this._isCanceled || this._hasValue || (this._hasErr = !0, this._err = e, this._actual ? this._actualErr(e) : r.onUnexpectedError(e))
        }, e.prototype.then = function(e, t) {
          if (!this._isCanceled) return this._ensureActual().then(e, t)
        }, e.prototype.done = function(e, t) {
          this._isCanceled || this._ensureActual().done(e, t)
        }, e.prototype.cancel = function() {
          this._hasValue || this._hasErr || (this._isCanceled = !0, this._actual ? this._actual.cancel() : this._onCancel())
        }, e
      }();
      t.LazyPromise = i
    }), define(e[131], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        return function(e, t, n) {
          this.isMain = e, this.id = t, this.isFancy = n
        }
      }();
      t.ProxyIdentifier = n;
      ! function(e) {
        e[e.NativeJSON = 0] = "NativeJSON", e[e.CustomMarshaller = 1] = "CustomMarshaller"
      }(t.ProxyType || (t.ProxyType = {})), t.createMainContextProxyIdentifier = function(e, t) {
        return void 0 === t && (t = 0), new n(!0, "m" + e, 1 === t)
      }, t.createExtHostContextProxyIdentifier = function(e, t) {
        return void 0 === t && (t = 0), new n(!1, "e" + e, 1 === t)
      }
    }), define(e[5], t([1, 0, 131]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.Default = 0] = "Default", e[e.InCenter = 1] = "InCenter", e[e.InCenterIfOutsideViewport = 2] = "InCenterIfOutsideViewport", e[e.AtTop = 3] = "AtTop"
      }(t.TextEditorRevealType || (t.TextEditorRevealType = {}));
      ! function(e) {
        e.name = "$ident", e.mixin = function(t, n) {
          return Object.defineProperty(t, e.name, {
            value: n,
            enumerable: !0
          }), t
        }, e.of = function(t) {
          return t[e.name]
        }
      }(t.ObjectIdentifier || (t.ObjectIdentifier = {}));
      var r = function() {
        function e() {}
        return e.mixin = function(t) {
          return t._id = e._n++, t
        }, e._n = 0, e
      }();
      t.IdObject = r, t.MainContext = {
        MainThreadCommands: n.createMainContextProxyIdentifier("MainThreadCommands"),
        MainThreadConfiguration: n.createMainContextProxyIdentifier("MainThreadConfiguration"),
        MainThreadDebugService: n.createMainContextProxyIdentifier("MainThreadDebugService"),
        MainThreadDecorations: n.createMainContextProxyIdentifier("MainThreadDecorations"),
        MainThreadDiagnostics: n.createMainContextProxyIdentifier("MainThreadDiagnostics"),
        MainThreadDialogs: n.createMainContextProxyIdentifier("MainThreadDiaglogs"),
        MainThreadDocuments: n.createMainContextProxyIdentifier("MainThreadDocuments"),
        MainThreadDocumentContentProviders: n.createMainContextProxyIdentifier("MainThreadDocumentContentProviders"),
        MainThreadEditors: n.createMainContextProxyIdentifier("MainThreadEditors"),
        MainThreadErrors: n.createMainContextProxyIdentifier("MainThreadErrors"),
        MainThreadTreeViews: n.createMainContextProxyIdentifier("MainThreadTreeViews"),
        MainThreadLanguageFeatures: n.createMainContextProxyIdentifier("MainThreadLanguageFeatures"),
        MainThreadLanguages: n.createMainContextProxyIdentifier("MainThreadLanguages"),
        MainThreadMessageService: n.createMainContextProxyIdentifier("MainThreadMessageService"),
        MainThreadOutputService: n.createMainContextProxyIdentifier("MainThreadOutputService"),
        MainThreadProgress: n.createMainContextProxyIdentifier("MainThreadProgress"),
        MainThreadQuickOpen: n.createMainContextProxyIdentifier("MainThreadQuickOpen"),
        MainThreadStatusBar: n.createMainContextProxyIdentifier("MainThreadStatusBar"),
        MainThreadStorage: n.createMainContextProxyIdentifier("MainThreadStorage"),
        MainThreadTelemetry: n.createMainContextProxyIdentifier("MainThreadTelemetry"),
        MainThreadTerminalService: n.createMainContextProxyIdentifier("MainThreadTerminalService"),
        MainThreadWorkspace: n.createMainContextProxyIdentifier("MainThreadWorkspace"),
        MainThreadFileSystem: n.createMainContextProxyIdentifier("MainThreadFileSystem"),
        MainThreadExtensionService: n.createMainContextProxyIdentifier("MainThreadExtensionService"),
        MainThreadSCM: n.createMainContextProxyIdentifier("MainThreadSCM"),
        MainThreadTask: n.createMainContextProxyIdentifier("MainThreadTask", 1),
        MainThreadWindow: n.createMainContextProxyIdentifier("MainThreadWindow")
      }, t.ExtHostContext = {
        ExtHostCommands: n.createExtHostContextProxyIdentifier("ExtHostCommands"),
        ExtHostConfiguration: n.createExtHostContextProxyIdentifier("ExtHostConfiguration"),
        ExtHostDiagnostics: n.createExtHostContextProxyIdentifier("ExtHostDiagnostics"),
        ExtHostDebugService: n.createExtHostContextProxyIdentifier("ExtHostDebugService"),
        ExtHostDecorations: n.createExtHostContextProxyIdentifier("ExtHostDecorations"),
        ExtHostDocumentsAndEditors: n.createExtHostContextProxyIdentifier("ExtHostDocumentsAndEditors"),
        ExtHostDocuments: n.createExtHostContextProxyIdentifier("ExtHostDocuments"),
        ExtHostDocumentContentProviders: n.createExtHostContextProxyIdentifier("ExtHostDocumentContentProviders"),
        ExtHostDocumentSaveParticipant: n.createExtHostContextProxyIdentifier("ExtHostDocumentSaveParticipant"),
        ExtHostEditors: n.createExtHostContextProxyIdentifier("ExtHostEditors"),
        ExtHostTreeViews: n.createExtHostContextProxyIdentifier("ExtHostTreeViews"),
        ExtHostFileSystem: n.createExtHostContextProxyIdentifier("ExtHostFileSystem"),
        ExtHostFileSystemEventService: n.createExtHostContextProxyIdentifier("ExtHostFileSystemEventService"),
        ExtHostHeapService: n.createExtHostContextProxyIdentifier("ExtHostHeapMonitor"),
        ExtHostLanguageFeatures: n.createExtHostContextProxyIdentifier("ExtHostLanguageFeatures"),
        ExtHostQuickOpen: n.createExtHostContextProxyIdentifier("ExtHostQuickOpen"),
        ExtHostExtensionService: n.createExtHostContextProxyIdentifier("ExtHostExtensionService"),
        ExtHostTerminalService: n.createExtHostContextProxyIdentifier("ExtHostTerminalService"),
        ExtHostSCM: n.createExtHostContextProxyIdentifier("ExtHostSCM"),
        ExtHostTask: n.createExtHostContextProxyIdentifier("ExtHostTask", 1),
        ExtHostWorkspace: n.createExtHostContextProxyIdentifier("ExtHostWorkspace"),
        ExtHostWindow: n.createExtHostContextProxyIdentifier("ExtHostWindow")
      }
    }),
    define(e[133], t([1, 0, 2, 4, 9, 5, 3, 7]), function(e, t, n, r, i, o, s, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u = function() {
        function e(e, t) {
          var n = this;
          this._debugSessions = new Map, this._workspace = t, this._handleCounter = 0, this._handlers = new Map, this._onDidStartDebugSession = new r.Emitter, this._onDidTerminateDebugSession = new r.Emitter, this._onDidChangeActiveDebugSession = new r.Emitter, this._onDidReceiveDebugSessionCustomEvent = new r.Emitter, this._debugServiceProxy = e.getProxy(o.MainContext.MainThreadDebugService), this._onDidChangeBreakpoints = new r.Emitter({
            onFirstListenerAdd: function() {
              n.startBreakpoints()
            }
          }), this._activeDebugConsole = new l(this._debugServiceProxy), this._breakpoints = new Map, this._breakpointEventsActive = !1
        }
        return Object.defineProperty(e.prototype, "onDidStartDebugSession", {
          get: function() {
            return this._onDidStartDebugSession.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidTerminateDebugSession", {
          get: function() {
            return this._onDidTerminateDebugSession.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidChangeActiveDebugSession", {
          get: function() {
            return this._onDidChangeActiveDebugSession.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeDebugSession", {
          get: function() {
            return this._activeDebugSession
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidReceiveDebugSessionCustomEvent", {
          get: function() {
            return this._onDidReceiveDebugSessionCustomEvent.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeDebugConsole", {
          get: function() {
            return this._activeDebugConsole
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.startBreakpoints = function() {
          this._breakpointEventsActive || (this._breakpointEventsActive = !0, this._debugServiceProxy.$startBreakpointEvents())
        }, Object.defineProperty(e.prototype, "onDidChangeBreakpoints", {
          get: function() {
            return this._onDidChangeBreakpoints.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "breakpoints", {
          get: function() {
            this.startBreakpoints();
            var e = [];
            return this._breakpoints.forEach(function(t) {
              return e.push(t)
            }), e
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.$acceptBreakpointsDelta = function(e) {
          var t = this,
            n = [],
            r = [],
            i = [];
          e.added && (n = e.added.map(function(e) {
            var n = t.fromWire(e);
            return t._breakpoints.set(e.id, n), n
          })), e.removed && (r = e.removed.map(function(e) {
            var n = t._breakpoints.get(e);
            return n && t._breakpoints.delete(e), n
          })), e.changed && (i = e.changed.map(function(e) {
            var n = t.fromWire(e);
            return t._breakpoints.set(e.id, n), n
          })), this._onDidChangeBreakpoints.fire(Object.freeze({
            added: Object.freeze(n || []),
            removed: Object.freeze(r || []),
            changed: Object.freeze(i || [])
          }))
        }, e.prototype.fromWire = function(e) {
          if ("function" === e.type) return new a.FunctionBreakpoint(e.enabled, e.condition, e.hitCondition, e.functionName);
          var t = s.default.revive(e.uri);
          return new a.SourceBreakpoint(e.enabled, e.condition, e.hitCondition, new a.Location(t, new a.Position(e.line, e.character)))
        }, e.prototype.registerDebugConfigurationProvider = function(e, t) {
          var n = this;
          if (!t) return new a.Disposable(function() {});
          var r = this.nextHandle();
          return this._handlers.set(r, t), this._debugServiceProxy.$registerDebugConfigurationProvider(e, !!t.provideDebugConfigurations, !!t.resolveDebugConfiguration, r), new a.Disposable(function() {
            n._handlers.delete(r), n._debugServiceProxy.$unregisterDebugConfigurationProvider(r)
          })
        }, e.prototype.$provideDebugConfigurations = function(e, t) {
          var r = this,
            o = this._handlers.get(e);
          return o ? o.provideDebugConfigurations ? i.asWinJsPromise(function(e) {
            return o.provideDebugConfigurations(r.getFolder(t), e)
          }) : n.TPromise.wrapError(new Error("handler has no method provideDebugConfigurations")) : n.TPromise.wrapError(new Error("no handler found"))
        }, e.prototype.$resolveDebugConfiguration = function(e, t, r) {
          var o = this,
            s = this._handlers.get(e);
          return s ? s.resolveDebugConfiguration ? i.asWinJsPromise(function(e) {
            return s.resolveDebugConfiguration(o.getFolder(t), r, e)
          }) : n.TPromise.wrapError(new Error("handler has no method resolveDebugConfiguration")) : n.TPromise.wrapError(new Error("no handler found"))
        }, e.prototype.startDebugging = function(e, t) {
          return this._debugServiceProxy.$startDebugging(e ? e.uri : void 0, t)
        }, e.prototype.$acceptDebugSessionStarted = function(e, t, n) {
          var r = this._debugSessions.get(e);
          r || (r = new c(this._debugServiceProxy, e, t, n), this._debugSessions.set(e, r)), this._onDidStartDebugSession.fire(r)
        }, e.prototype.$acceptDebugSessionTerminated = function(e, t, n) {
          var r = this._debugSessions.get(e);
          r || (r = new c(this._debugServiceProxy, e, t, n), this._debugSessions.set(e, r)), this._onDidTerminateDebugSession.fire(r), this._debugSessions.delete(e)
        }, e.prototype.$acceptDebugSessionActiveChanged = function(e, t, n) {
          e ? (this._activeDebugSession = this._debugSessions.get(e), this._activeDebugSession || (this._activeDebugSession = new c(this._debugServiceProxy, e, t, n), this._debugSessions.set(e, this._activeDebugSession))) : this._activeDebugSession = void 0,
            this._onDidChangeActiveDebugSession.fire(this._activeDebugSession)
        }, e.prototype.$acceptDebugSessionCustomEvent = function(e, t, n, r) {
          var i = this._debugSessions.get(e);
          i || (i = new c(this._debugServiceProxy, e, t, n), this._debugSessions.set(e, i));
          var o = {
            session: i,
            event: r.event,
            body: r.body
          };
          this._onDidReceiveDebugSessionCustomEvent.fire(o)
        }, e.prototype.getFolder = function(e) {
          if (e) {
            var t = s.default.revive(e).toString(),
              n = this._workspace.getWorkspaceFolders().filter(function(e) {
                return e.uri.toString() === t
              });
            if (n && n.length > 0) return n[0]
          }
        }, e.prototype.nextHandle = function() {
          return this._handleCounter++
        }, e
      }();
      t.ExtHostDebugService = u;
      var c = function() {
        function e(e, t, n, r) {
          this._debugServiceProxy = e, this._id = t, this._type = n, this._name = r
        }
        return Object.defineProperty(e.prototype, "id", {
          get: function() {
            return this._id
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "type", {
          get: function() {
            return this._type
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "name", {
          get: function() {
            return this._name
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.customRequest = function(e, t) {
          return this._debugServiceProxy.$customDebugAdapterRequest(this._id, e, t)
        }, e
      }();
      t.ExtHostDebugSession = c;
      var l = function() {
        function e(e) {
          this._debugServiceProxy = e
        }
        return e.prototype.append = function(e) {
          this._debugServiceProxy.$appendDebugConsole(e)
        }, e.prototype.appendLine = function(e) {
          this.append(e + "\n")
        }, e
      }();
      t.ExtHostDebugConsole = l
    }), define(e[134], t([1, 0, 3, 5, 2, 7, 9]), function(e, t, n, r, i, o, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = function() {
        function e(e) {
          this._provider = new Map, this._proxy = e.getProxy(r.MainContext.MainThreadDecorations)
        }
        return e.prototype.registerDecorationProvider = function(t, n) {
            var r = this,
              i = e._handlePool++;
            this._provider.set(i, t), this._proxy.$registerDecorationProvider(i, n);
            var s = t.onDidChangeDecorations(function(e) {
              r._proxy.$onDidChange(i, e ? Array.isArray(e) ? e : [e] : null)
            });
            return new o.Disposable(function() {
              s.dispose(), r._proxy.$unregisterDecorationProvider(i), r._provider.delete(i)
            })
          },
          e.prototype.$provideDecorations = function(e) {
            var t = this,
              r = Object.create(null);
            return i.TPromise.join(e.map(function(e) {
              var i = e.handle,
                o = e.uri,
                a = e.id,
                u = t._provider.get(i);
              return s.asWinJsPromise(function(e) {
                return u.provideDecoration(n.default.revive(o), e)
              }).then(function(e) {
                r[a] = e && [e.priority, e.bubble, e.title, e.abbreviation, e.color, e.source]
              }, function(e) {
                console.error(e)
              })
            })).then(function() {
              return r
            })
          }, e._handlePool = 0, e
      }();
      t.ExtHostDecorations = a
    }), define(e[69], t([1, 0, 82, 3, 24, 5, 7, 16]), function(e, t, r, i, o, s, a, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = function() {
        function e(e, t) {
          this._isDisposed = !1, this._data = new Map, this._name = e, this._proxy = t
        }
        return e.prototype.dispose = function() {
            this._isDisposed || (this._proxy.$clear(this.name), this._proxy = void 0, this._data = void 0, this._isDisposed = !0)
          }, Object.defineProperty(e.prototype, "name", {
            get: function() {
              return this._checkDisposed(), this._name
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.set = function(t, n) {
            if (t) {
              this._checkDisposed();
              var s;
              if (t instanceof i.default) {
                if (!n) return void this.delete(t);
                this._data.set(t.toString(), n), s = [t]
              } else if (Array.isArray(t)) {
                s = [];
                var c = void 0;
                u.mergeSort(t, e._compareIndexedTuplesByUri);
                for (var l = 0, d = t; l < d.length; l++) {
                  var f = d[l],
                    p = f[0],
                    h = f[1];
                  c && p.toString() === c.toString() || (c && 0 === this._data.get(c.toString()).length && this._data.delete(c.toString()), c = p, s.push(p), this._data.set(p.toString(), [])), h ? (w = this._data.get(p.toString())).push.apply(w, h) : this._data.get(p.toString()).length = 0
                }
              }
              for (var g = [], m = 0, v = s; m < v.length; m++) {
                var p = v[m],
                  y = void 0,
                  _ = this._data.get(p.toString());
                if (_)
                  if (_.length > e._maxDiagnosticsPerFile) {
                    y = [];
                    var b = [a.DiagnosticSeverity.Error, a.DiagnosticSeverity.Warning, a.DiagnosticSeverity.Information, a.DiagnosticSeverity.Hint];
                    e: for (var C = 0; C < 4; C++)
                      for (var S = 0, E = _; S < E.length; S++) {
                        var x = E[S];
                        if (x.severity === b[C]) {
                          if (y.push(e.toMarkerData(x)) === e._maxDiagnosticsPerFile) break e
                        }
                      }
                    y.push({
                      severity: o.default.Error,
                      message: r.localize(0, null, _.length - e._maxDiagnosticsPerFile),
                      startLineNumber: y[y.length - 1].startLineNumber,
                      startColumn: y[y.length - 1].startColumn,
                      endLineNumber: y[y.length - 1].endLineNumber,
                      endColumn: y[y.length - 1].endColumn
                    })
                  } else y = _.map(e.toMarkerData);
                g.push([p, y])
              }
              this._proxy.$changeMany(this.name, g);
              var w
            } else this.clear()
          }, e.prototype.delete = function(e) {
            this._checkDisposed(), this._data.delete(e.toString()), this._proxy.$changeMany(this.name, [
              [e, void 0]
            ])
          }, e.prototype.clear = function() {
            this._checkDisposed(), this._data.clear(), this._proxy.$clear(this.name)
          }, e.prototype.forEach = function(e, t) {
            var n = this;
            this._checkDisposed(), this._data.forEach(function(r, o) {
              var s = i.default.parse(o);
              e.apply(t, [s, n.get(s), n])
            })
          }, e.prototype.get = function(e) {
            this._checkDisposed();
            var t = this._data.get(e.toString());
            if (Array.isArray(t)) return Object.freeze(t.slice(0))
          }, e.prototype.has = function(e) {
            return this._checkDisposed(), Array.isArray(this._data.get(e.toString()))
          }, e.prototype._checkDisposed = function() {
            if (this._isDisposed) throw new Error("illegal state - object is disposed")
          },
          e.toMarkerData = function(t) {
            var n = t.range;
            return {
              startLineNumber: n.start.line + 1,
              startColumn: n.start.character + 1,
              endLineNumber: n.end.line + 1,
              endColumn: n.end.character + 1,
              message: t.message,
              source: t.source,
              severity: e._convertDiagnosticsSeverity(t.severity),
              code: String(t.code)
            }
          }, e._convertDiagnosticsSeverity = function(e) {
            switch (e) {
              case 0:
                return o.default.Error;
              case 1:
                return o.default.Warning;
              case 2:
                return o.default.Info;
              case 3:
                return o.default.Ignore;
              default:
                return o.default.Error
            }
          }, e._compareIndexedTuplesByUri = function(e, t) {
            return e[0].toString() < t[0].toString() ? -1 : e[0].toString() > t[0].toString() ? 1 : 0
          }, e._maxDiagnosticsPerFile = 250, e
      }();
      t.DiagnosticCollection = c;
      var l = function() {
        function e(e) {
          this._proxy = e.getProxy(s.MainContext.MainThreadDiagnostics), this._collections = []
        }
        return e.prototype.createDiagnosticCollection = function(t) {
          t || (t = "_generated_diagnostic_collection_name_#" + e._idPool++);
          var r = this._collections,
            i = this._proxy;
          return new(function(e) {
            function o() {
              var n = e.call(this, t, i) || this;
              return r.push(n), n
            }
            return n(o, e), o.prototype.dispose = function() {
              e.prototype.dispose.call(this);
              var t = r.indexOf(this); - 1 !== t && r.splice(t, 1)
            }, o
          }(c))
        }, e.prototype.forEach = function(e) {
          this._collections.forEach(e)
        }, e._idPool = 0, e
      }();
      t.ExtHostDiagnostics = l
    }), define(e[136], t([1, 0, 3, 5]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e) {
          this._proxy = e.getProxy(r.MainContext.MainThreadDialogs)
        }
        return e.prototype.showOpenDialog = function(e) {
          return this._proxy.$showOpenDialog(e).then(function(e) {
            return e && e.map(n.default.file)
          })
        }, e.prototype.showSaveDialog = function(e) {
          return this._proxy.$showSaveDialog(e).then(function(e) {
            return e && n.default.file(e)
          })
        }, e
      }();
      t.ExtHostDialogs = i
    }), define(e[137], t([1, 0, 11, 3, 7, 2, 9, 5]), function(e, t, n, r, i, o, s, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u = function() {
        function e(e, t) {
          this._documentContentProviders = new Map, this._proxy = e.getProxy(a.MainContext.MainThreadDocumentContentProviders), this._documentsAndEditors = t
        }
        return e.prototype.dispose = function() {}, e.prototype.registerTextDocumentContentProvider = function(t, r) {
          var o = this;
          if ("file" === t || "untitled" === t) throw new Error("scheme '" + t + "' already registered");
          var s = e._handlePool++;
          this._documentContentProviders.set(s, r), this._proxy.$registerTextContentProvider(s, t);
          var a;
          return "function" == typeof r.onDidChange && (a = r.onDidChange(function(e) {
            o._documentsAndEditors.getDocument(e.toString()) && o.$provideTextDocumentContent(s, e).then(function(t) {
              var n = o._documentsAndEditors.getDocument(e.toString());
              if (n) {
                var r = t.split(/\r\n|\r|\n/);
                return n.equalLines(r) ? void 0 : o._proxy.$onVirtualDocumentChange(e, t)
              }
            }, n.onUnexpectedError)
          })), new i.Disposable(function() {
            o._documentContentProviders.delete(s) && o._proxy.$unregisterTextContentProvider(s), a && (a.dispose(), a = void 0)
          })
        }, e.prototype.$provideTextDocumentContent = function(e, t) {
          var n = this._documentContentProviders.get(e);
          return n ? s.asWinJsPromise(function(e) {
            return n.provideTextDocumentContent(r.default.revive(t), e)
          }) : o.TPromise.wrapError(new Error("unsupported uri-scheme: " + t.scheme))
        }, e._handlePool = 0, e
      }();
      t.ExtHostDocumentContentProvider = u
    }), define(e[138], t([1, 0, 3, 2, 5, 9]), function(e, t, n, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {
        function e(e) {
          this._provider = new Map, this._handlePool = 0, this._proxy = e.getProxy(i.MainContext.MainThreadFileSystem)
        }
        return e.prototype.registerFileSystemProvider = function(e, t) {
            var n = this,
              r = this._handlePool++;
            this._provider.set(r, t), this._proxy.$registerFileSystemProvider(r, e), this._proxy.$onDidAddFileSystemRoot(t.root);
            var i;
            return t.onDidChange && (i = t.onDidChange(function(e) {
              return n._proxy.$onFileSystemChange(r, e)
            })), {
              dispose: function() {
                i && i.dispose(), n._provider.delete(r), n._proxy.$unregisterFileSystemProvider(r)
              }
            }
          }, e.prototype.$utimes = function(e, t, r, i) {
            var s = this;
            return o.asWinJsPromise(function(o) {
              return s._provider.get(e).utimes(n.default.revive(t), r, i)
            })
          }, e.prototype.$stat = function(e, t) {
            var r = this;
            return o.asWinJsPromise(function(i) {
              return r._provider.get(e).stat(n.default.revive(t))
            })
          }, e.prototype.$read = function(e, t, r, i, s) {
            var a = this,
              u = {
                report: function(n) {
                  a._proxy.$reportFileChunk(e, t, [].slice.call(n))
                }
              };
            return o.asWinJsPromise(function(t) {
              return a._provider.get(e).read(n.default.revive(s), r, i, u)
            })
          }, e.prototype.$write = function(e, t, r) {
            var i = this;
            return o.asWinJsPromise(function(o) {
              return i._provider.get(e).write(n.default.revive(t), Buffer.from(r))
            })
          }, e.prototype.$unlink = function(e, t) {
            var r = this;
            return o.asWinJsPromise(function(i) {
              return r._provider.get(e).unlink(n.default.revive(t))
            })
          }, e.prototype.$move = function(e, t, r) {
            var i = this;
            return o.asWinJsPromise(function(o) {
              return i._provider.get(e).move(n.default.revive(t), n.default.revive(r))
            })
          }, e.prototype.$mkdir = function(e, t) {
            var r = this;
            return o.asWinJsPromise(function(i) {
              return r._provider.get(e).mkdir(n.default.revive(t))
            })
          }, e.prototype.$readdir = function(e, t) {
            var r = this;
            return o.asWinJsPromise(function(i) {
              return r._provider.get(e).readdir(n.default.revive(t))
            })
          },
          e.prototype.$rmdir = function(e, t) {
            var r = this;
            return o.asWinJsPromise(function(i) {
              return r._provider.get(e).rmdir(n.default.revive(t))
            })
          }, e.prototype.$findFiles = function(e, t, n) {
            var i = this,
              s = this._provider.get(e);
            if (!s.findFiles) return r.TPromise.as(void 0);
            var a = {
              report: function(n) {
                i._proxy.$handleFindMatch(e, t, n)
              }
            };
            return o.asWinJsPromise(function(e) {
              return s.findFiles(n, a, e)
            })
          }, e.prototype.$findInFiles = function(e, t, n) {
            var i = this,
              s = this._provider.get(e);
            if (!s.findInFiles) return r.TPromise.as(void 0);
            var a = {
              report: function(n) {
                i._proxy.$handleFindMatch(e, t, [n.uri, {
                  lineNumber: 1 + n.range.start.line,
                  preview: n.preview.leading + n.preview.matching + n.preview.trailing,
                  offsetAndLengths: [
                    [n.preview.leading.length, n.preview.matching.length]
                  ]
                }])
              }
            };
            return o.asWinJsPromise(function(e) {
              return s.findInFiles(n.pattern, n.isRegExp, a, e)
            })
          }, e
      }();
      t.ExtHostFileSystem = s
    }), define(e[139], t([1, 0, 5]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          this._proxy = e.getProxy(n.MainContext.MainThreadLanguages)
        }
        return e.prototype.getLanguages = function() {
          return this._proxy.$getLanguages()
        }, e
      }();
      t.ExtHostLanguages = r
    }), define(e[140], t([1, 0, 5]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          this._proxy = e.getProxy(n.MainContext.MainThreadMessageService)
        }
        return e.prototype.showMessage = function(e, t, n, r, i) {
          var o, s = {
            extension: e
          };
          "string" == typeof r || function(e) {
            return e && e.title
          }(r) ? o = [r].concat(i) : (s.modal = r && r.modal, o = i);
          for (var a = [], u = 0; u < o.length; u++) {
            var c = o[u];
            if ("string" == typeof c) a.push({
              title: c,
              handle: u,
              isCloseAffordance: !1
            });
            else if ("object" == typeof c) {
              var l = c.title,
                d = c.isCloseAffordance;
              a.push({
                title: l,
                isCloseAffordance: d,
                handle: u
              })
            } else console.warn("Invalid message item:", c)
          }
          return this._proxy.$showMessage(t, n, s, a).then(function(e) {
            if ("number" == typeof e) return o[e]
          })
        }, e
      }();
      t.ExtHostMessageService = r
    }), define(e[141], t([1, 0, 5]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(t, n) {
          this._name = t, this._id = "extension-output-#" + e._idPool++, this._proxy = n
        }
        return Object.defineProperty(e.prototype, "name", {
          get: function() {
            return this._name
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.dispose = function() {
          var e = this;
          this._disposed || this._proxy.$dispose(this._id, this._name).then(function() {
            e._disposed = !0
          })
        }, e.prototype.append = function(e) {
          this._proxy.$append(this._id, this._name, e)
        }, e.prototype.appendLine = function(e) {
          this.append(e + "\n")
        }, e.prototype.clear = function() {
          this._proxy.$clear(this._id, this._name)
        }, e.prototype.show = function(e, t) {
          "boolean" == typeof e && (t = e), this._proxy.$reveal(this._id, this._name, t)
        }, e.prototype.hide = function() {
          this._proxy.$close(this._id)
        }, e._idPool = 1, e
      }();
      t.ExtHostOutputChannel = r;
      var i = function() {
        function e(e) {
          this._proxy = e.getProxy(n.MainContext.MainThreadOutputService)
        }
        return e.prototype.createOutputChannel = function(e) {
          if (e = e.trim()) return new r(e, this._proxy);
          throw new Error("illegal argument `name`. must not be falsy")
        }, e
      }();
      t.ExtHostOutputService = i
    }), define(e[142], t([1, 0, 2, 9, 41, 5]), function(e, t, n, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {
        function e(e, t, n) {
          this._proxy = e.getProxy(o.MainContext.MainThreadQuickOpen), this._workspace = t, this._commands = n
        }
        return e.prototype.showQuickPick = function(e, t, o) {
          var s = this;
          void 0 === o && (o = i.CancellationToken.None), this._onDidSelectItem = void 0;
          var a = n.TPromise.wrap(e),
            u = this._proxy.$show({
              autoFocus: {
                autoFocusFirstEntry: !0
              },
              placeHolder: t && t.placeHolder,
              matchOnDescription: t && t.matchOnDescription,
              matchOnDetail: t && t.matchOnDetail,
              ignoreFocusLost: t && t.ignoreFocusOut
            }),
            c = n.TPromise.any([u, a]).then(function(e) {
              if ("0" !== e.key) return a.then(function(e) {
                for (var n = [], r = 0; r < e.length; r++) {
                  var i = e[r],
                    o = void 0,
                    a = void 0,
                    c = void 0;
                  "string" == typeof i ? o = i : (o = i.label, a = i.description, c = i.detail), n.push({
                    label: o,
                    description: a,
                    handle: r,
                    detail: c
                  })
                }
                return t && "function" == typeof t.onDidSelectItem && (s._onDidSelectItem = function(n) {
                    t.onDidSelectItem(e[n])
                  }), s._proxy.$setItems(n),
                  u.then(function(t) {
                    if ("number" == typeof t) return e[t]
                  })
              }, function(e) {
                return s._proxy.$setError(e), n.TPromise.wrapError(e)
              })
            });
          return r.wireCancellationToken(o, c, !0)
        }, e.prototype.$onItemSelected = function(e) {
          this._onDidSelectItem && this._onDidSelectItem(e)
        }, e.prototype.showInput = function(e, t) {
          void 0 === t && (t = i.CancellationToken.None), this._validateInput = e && e.validateInput;
          var n = this._proxy.$input(e, "function" == typeof this._validateInput);
          return r.wireCancellationToken(t, n, !0)
        }, e.prototype.$validateInput = function(e) {
          var t = this;
          if (this._validateInput) return r.asWinJsPromise(function(n) {
            return t._validateInput(e)
          })
        }, e.prototype.showWorkspaceFolderPick = function(e, t) {
          var n = this;
          return void 0 === t && (t = i.CancellationToken.None), this._commands.executeCommand("_workbench.pickWorkspaceFolder", [e]).then(function(e) {
            if (e) return n._workspace.getWorkspaceFolders().filter(function(t) {
              return t.uri.toString() === e.uri.toString()
            })[0]
          })
        }, e
      }();
      t.ExtHostQuickOpen = s
    });
  i = this && this.__generator || function(e, t) {
    function n(n) {
      return function(s) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return a.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                a.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  a = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  a.label = n[1];
                  break
                }
                if (6 === n[0] && a.label < o[1]) {
                  a.label = o[1], o = n;
                  break
                }
                if (o && a.label < o[2]) {
                  a.label = o[2], a.ops.push(n);
                  break
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue
            }
            n = t.call(e, a)
          } catch (e) {
            n = [6, e], i = 0
          } finally {
            r = o = 0
          }
          if (5 & n[0]) throw n[1];
          return {
            value: n[0] ? n[1] : void 0,
            done: !0
          }
        }([n, s])
      }
    }
    var r, i, o, s, a = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }), s
  };
  define(e[143], t([1, 0, 3, 2, 4, 29, 14, 9, 5, 16, 154, 44]), function(e, t, n, o, u, c, l, d, f, p, h, g) {
      "use strict";

      function m(e) {
        if (e) return "string" == typeof e.iconPath ? n.default.file(e.iconPath).toString() : e.iconPath ? "" + e.iconPath : void 0
      }

      function v(e, t) {
        if (!e.iconPath && !t.iconPath) return 0;
        if (!e.iconPath) return -1;
        if (!t.iconPath) return 1;
        var n = "string" == typeof e.iconPath ? e.iconPath : e.iconPath.fsPath,
          r = "string" == typeof t.iconPath ? t.iconPath : t.iconPath.fsPath;
        return h.comparePaths(n, r)
      }

      function y(e, t) {
        var n = h.comparePaths(e.resourceUri.fsPath, t.resourceUri.fsPath, !0);
        if (0 !== n) return n;
        if (e.decorations && t.decorations) n = function(e, t) {
          var n = 0;
          if (e.strikeThrough !== t.strikeThrough) return e.strikeThrough ? 1 : -1;
          if (e.faded !== t.faded) return e.faded ? 1 : -1;
          if (e.tooltip !== t.tooltip) return (e.tooltip || "").localeCompare(t.tooltip);
          if (0 !== (n = v(e, t))) return n;
          if (e.light && t.light) n = v(e.light, t.light);
          else {
            if (e.light) return 1;
            if (t.light) return -1
          }
          if (0 !== n) return n;
          if (e.dark && t.dark) n = v(e.dark, t.dark);
          else {
            if (e.dark) return 1;
            if (t.dark) return -1
          }
          return n
        }(e.decorations, t.decorations);
        else {
          if (e.decorations) return 1;
          if (t.decorations) return -1
        }
        return n
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var _ = function() {
        function e(e, t) {
          this._proxy = e, this._sourceControlHandle = t, this._value = "", this._onDidChange = new u.Emitter, this._placeholder = ""
        }
        return Object.defineProperty(e.prototype, "value", {
          get: function() {
            return this._value
          },
          set: function(e) {
            this._proxy.$setInputBoxValue(this._sourceControlHandle, e), this.updateValue(e)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidChange", {
          get: function() {
            return this._onDidChange.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "placeholder", {
          get: function() {
            return this._placeholder
          },
          set: function(e) {
            this._proxy.$setInputBoxPlaceholder(this._sourceControlHandle, e), this._placeholder = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "lineWarningLength", {
          get: function() {
            return this._lineWarningLength
          },
          set: function(e) {
            this._proxy.$setLineWarningLength(this._sourceControlHandle, e), this._lineWarningLength = e
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.$onInputBoxValueChange = function(e) {
          this.updateValue(e)
        }, e.prototype.updateValue = function(e) {
          this._value = e, this._onDidChange.fire(e)
        }, e
      }();
      t.ExtHostSCMInputBox = _;
      var b = function() {
          function e(t, n, r, i, o) {
            this._proxy = t, this._commands = n, this._sourceControlHandle = r, this._id = i, this._label = o, this._resourceHandlePool = 0, this._resourceStates = [], this._resourceStatesMap = new Map, this._resourceStatesCommandsMap = new Map, this._onDidUpdateResourceStates = new u.Emitter, this.onDidUpdateResourceStates = this._onDidUpdateResourceStates.event, this._onDidDispose = new u.Emitter, this.onDidDispose = this._onDidDispose.event, this._handlesSnapshot = [], this._resourceSnapshot = [], this._hideWhenEmpty = void 0, this.handle = e._handlePool++, this._disposables = [], this._proxy.$registerGroup(r, this.handle, i, o)
          }
          return Object.defineProperty(e.prototype, "id", {
              get: function() {
                return this._id
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "label", {
              get: function() {
                return this._label
              },
              set: function(e) {
                this._label = e, this._proxy.$updateGroupLabel(this._sourceControlHandle, this.handle, e)
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(e.prototype, "hideWhenEmpty", {
              get: function() {
                return this._hideWhenEmpty
              },
              set: function(e) {
                this._hideWhenEmpty = e, this._proxy.$updateGroup(this._sourceControlHandle, this.handle, {
                  hideWhenEmpty: e
                })
              },
              enumerable: !0,
              configurable: !0
            }), Object.defineProperty(e.prototype, "resourceStates", {
              get: function() {
                return this._resourceStates.slice()
              },
              set: function(e) {
                this._resourceStates = e.slice(), this._onDidUpdateResourceStates.fire()
              },
              enumerable: !0,
              configurable: !0
            }), e.prototype.getResourceState = function(e) {
              return this._resourceStatesMap.get(e)
            }, e.prototype.$executeResourceCommand = function(e) {
              return r(this, void 0, o.TPromise, function() {
                var t, n;
                return i(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return (t = this._resourceStatesCommandsMap.get(e)) ? [4, (n = this._commands).executeCommand.apply(n, [t.command].concat(t.arguments))] : [2];
                    case 1:
                      return r.sent(), [2]
                  }
                })
              })
            }, e.prototype._takeResourceStateSnapshot = function() {
              for (var e = this, t = this._resourceStates.slice().sort(y), n = p.sortedDiff(this._resourceSnapshot, t, y).map(function(t) {
                  var n = t.toInsert.map(function(t) {
                    var n = e._resourceHandlePool++;
                    e._resourceStatesMap.set(n, t);
                    var r = t.resourceUri.toString(),
                      i = m(t.decorations),
                      o = t.decorations && m(t.decorations.light) || i,
                      s = t.decorations && m(t.decorations.dark) || i,
                      a = [];
                    t.command && e._resourceStatesCommandsMap.set(n, t.command), (o || s) && a.push(o), s !== o && a.push(s);
                    return {
                      rawResource: [n, r, a, t.decorations && t.decorations.tooltip || "", t.decorations && !!t.decorations.strikeThrough, t.decorations && !!t.decorations.faded, t.decorations && t.decorations.source || void 0, t.decorations && t.decorations.letter || void 0, t.decorations && t.decorations.color || void 0],
                      handle: n
                    }
                  });
                  return {
                    start: t.start,
                    deleteCount: t.deleteCount,
                    toInsert: n
                  }
                }), r = n.map(function(e) {
                  return [e.start, e.deleteCount, e.toInsert.map(function(e) {
                    return e.rawResource
                  })]
                }), i = 0, o = n.reverse(); i < o.length; i++)
                for (var s = o[i], a = s.start, u = s.deleteCount, c = s.toInsert.map(function(e) {
                    return e.handle
                  }), l = 0, d = (h = this._handlesSnapshot).splice.apply(h, [a, u].concat(c)); l < d.length; l++) {
                  var f = d[l];
                  this._resourceStatesMap.delete(f), this._resourceStatesCommandsMap.delete(f)
                }
              return this._resourceSnapshot = t, r;
              var h
            }, e.prototype.dispose = function() {
              this._proxy.$unregisterGroup(this._sourceControlHandle, this.handle), this._disposables = l.dispose(this._disposables), this._onDidDispose.fire()
            }, e._handlePool = 0, e
        }(),
        C = function() {
          function e(t, n, r, i, o) {
            this._proxy = t, this._commands = n, this._id = r, this._label = i, this._rootUri = o, this._groups = new Map, this._count = void 0, this._quickDiffProvider = void 0, this._commitTemplate = void 0, this._acceptInputCommand = void 0, this._statusBarCommands = void 0, this.handle = e._handlePool++, this.updatedResourceGroups = new Set, this._inputBox = new _(this._proxy, this.handle),
              this._proxy.$registerSourceControl(this.handle, r, i, o && o.toString())
          }
          return Object.defineProperty(e.prototype, "id", {
            get: function() {
              return this._id
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "label", {
            get: function() {
              return this._label
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "rootUri", {
            get: function() {
              return this._rootUri
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "inputBox", {
            get: function() {
              return this._inputBox
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "count", {
            get: function() {
              return this._count
            },
            set: function(e) {
              this._count = e, this._proxy.$updateSourceControl(this.handle, {
                count: e
              })
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "quickDiffProvider", {
            get: function() {
              return this._quickDiffProvider
            },
            set: function(e) {
              this._quickDiffProvider = e, this._proxy.$updateSourceControl(this.handle, {
                hasQuickDiffProvider: !!e
              })
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "commitTemplate", {
            get: function() {
              return this._commitTemplate
            },
            set: function(e) {
              this._commitTemplate = e, this._proxy.$updateSourceControl(this.handle, {
                commitTemplate: e
              })
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "acceptInputCommand", {
            get: function() {
              return this._acceptInputCommand
            },
            set: function(e) {
              this._acceptInputCommand = e;
              var t = this._commands.converter.toInternal(e);
              this._proxy.$updateSourceControl(this.handle, {
                acceptInputCommand: t
              })
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "statusBarCommands", {
            get: function() {
              return this._statusBarCommands
            },
            set: function(e) {
              var t = this;
              this._statusBarCommands = e;
              var n = (e || []).map(function(e) {
                return t._commands.converter.toInternal(e)
              });
              this._proxy.$updateSourceControl(this.handle, {
                statusBarCommands: n
              })
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.createResourceGroup = function(e, t) {
            var n = this,
              r = new b(this._proxy, this._commands, this.handle, e, t),
              i = r.onDidUpdateResourceStates(function() {
                n.updatedResourceGroups.add(r), n.eventuallyUpdateResourceStates()
              });
            return u.once(r.onDidDispose)(function() {
              n.updatedResourceGroups.delete(r), i.dispose(), n._groups.delete(r.handle)
            }), this._groups.set(r.handle, r), r
          }, e.prototype.eventuallyUpdateResourceStates = function() {
            var e = [];
            this.updatedResourceGroups.forEach(function(t) {
              var n = t._takeResourceStateSnapshot();
              0 !== n.length && e.push([t.handle, n])
            }), e.length > 0 && this._proxy.$spliceResourceStates(this.handle, e), this.updatedResourceGroups.clear()
          }, e.prototype.getResourceGroup = function(e) {
            return this._groups.get(e)
          }, e.prototype.dispose = function() {
            this._groups.forEach(function(e) {
              return e.dispose()
            }), this._proxy.$unregisterSourceControl(this.handle)
          }, e._handlePool = 0, s([c.debounce(100)], e.prototype, "eventuallyUpdateResourceStates", null), e
        }(),
        S = function() {
          function e(e, t, n) {
            var r = this;
            this._commands = t, this.logService = n, this._sourceControls = new Map, this._sourceControlsByExtension = new Map, this._onDidChangeActiveProvider = new u.Emitter, this._proxy = e.getProxy(f.MainContext.MainThreadSCM), t.registerArgumentProcessor({
              processArgument: function(e) {
                if (e && 3 === e.$mid) {
                  if (!(n = r._sourceControls.get(e.sourceControlHandle))) return e;
                  var t = n.getResourceGroup(e.groupHandle);
                  return t ? t.getResourceState(e.handle) : e
                }
                if (e && 4 === e.$mid) {
                  return (n = r._sourceControls.get(e.sourceControlHandle)) ? n.getResourceGroup(e.groupHandle) : e
                }
                if (e && 5 === e.$mid) {
                  var n = r._sourceControls.get(e.handle);
                  return n || e
                }
                return e
              }
            })
          }
          return Object.defineProperty(e.prototype, "onDidChangeActiveProvider", {
            get: function() {
              return this._onDidChangeActiveProvider.event
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.createSourceControl = function(t, n, r, i) {
            this.logService.trace("ExtHostSCM#createSourceControl", t.id, n, r, i);
            var o = e._handlePool++,
              s = new C(this._proxy, this._commands, n, r, i);
            this._sourceControls.set(o, s);
            var a = this._sourceControlsByExtension.get(t.id) || [];
            return a.push(s), this._sourceControlsByExtension.set(t.id, a), s
          }, e.prototype.getLastInputBox = function(e) {
            this.logService.trace("ExtHostSCM#getLastInputBox", e.id);
            var t = this._sourceControlsByExtension.get(e.id),
              n = t && t[t.length - 1];
            return n && n.inputBox
          }, e.prototype.$provideOriginalResource = function(e, t) {
            this.logService.trace("ExtHostSCM#$provideOriginalResource", e, t);
            var r = this._sourceControls.get(e);
            return r && r.quickDiffProvider ? d.asWinJsPromise(function(e) {
              return r.quickDiffProvider.provideOriginalResource(n.default.parse(t), e)
            }).then(function(e) {
              return e && e.toString()
            }) : o.TPromise.as(null)
          }, e.prototype.$onInputBoxValueChange = function(e, t) {
            this.logService.trace("ExtHostSCM#$onInputBoxValueChange", e);
            var n = this._sourceControls.get(e);
            return n ? (n.inputBox.$onInputBoxValueChange(t), o.TPromise.as(null)) : o.TPromise.as(null)
          }, e.prototype.$executeResourceCommand = function(e, t, n) {
            return r(this, void 0, o.TPromise, function() {
              var r, o;
              return i(this, function(i) {
                switch (i.label) {
                  case 0:
                    return this.logService.trace("ExtHostSCM#$executeResourceCommand", e, t, n), (r = this._sourceControls.get(e)) ? (o = r.getResourceGroup(t)) ? [4, o.$executeResourceCommand(n)] : [2] : [2];
                  case 1:
                    return i.sent(), [2]
                }
              })
            })
          }, e._handlePool = 0, e = s([a(2, g.ILogService)], e)
        }();
      t.ExtHostSCM = S
    }), define(e[144], t([1, 0, 111, 7, 5]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function() {
        function e(t, n, i, o) {
          void 0 === i && (i = r.StatusBarAlignment.Left), this._id = e.ID_GEN++, this._proxy = t, this._alignment = i, this._priority = o, this._extensionId = n
        }
        return Object.defineProperty(e.prototype, "id", {
            get: function() {
              return this._id
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "alignment", {
            get: function() {
              return this._alignment
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "priority", {
            get: function() {
              return this._priority
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "text", {
            get: function() {
              return this._text
            },
            set: function(e) {
              this._text = e, this.update()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "tooltip", {
            get: function() {
              return this._tooltip
            },
            set: function(e) {
              this._tooltip = e, this.update()
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "color", {
            get: function() {
              return this._color
            },
            set: function(e) {
              this._color = e, this.update()
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "command", {
            get: function() {
              return this._command
            },
            set: function(e) {
              this._command = e, this.update()
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.show = function() {
            this._visible = !0, this.update()
          }, e.prototype.hide = function() {
            clearTimeout(this._timeoutHandle), this._visible = !1, this._proxy.$dispose(this.id)
          }, e.prototype.update = function() {
            var e = this;
            !this._disposed && this._visible && (clearTimeout(this._timeoutHandle), this._timeoutHandle = setTimeout(function() {
              e._timeoutHandle = void 0, e._proxy.$setEntry(e.id, e._extensionId, e.text, e.tooltip, e.command, e.color, e._alignment === r.StatusBarAlignment.Left ? n.StatusbarAlignment.LEFT : n.StatusbarAlignment.RIGHT, e._priority)
            }, 0))
          }, e.prototype.dispose = function() {
            this.hide(), this._disposed = !0
          }, e.ID_GEN = 0, e
      }();
      t.ExtHostStatusBarEntry = o;
      var s = function() {
          function e(e) {
            this._messages = [],
              this._item = e.createStatusBarEntry(void 0, r.StatusBarAlignment.Left, Number.MIN_VALUE)
          }
          return e.prototype.dispose = function() {
            this._messages.length = 0, this._item.dispose()
          }, e.prototype.setMessage = function(e) {
            var t = this,
              n = {
                message: e
              };
            return this._messages.unshift(n), this._update(), new r.Disposable(function() {
              var e = t._messages.indexOf(n);
              e >= 0 && (t._messages.splice(e, 1), t._update())
            })
          }, e.prototype._update = function() {
            this._messages.length > 0 ? (this._item.text = this._messages[0].message, this._item.show()) : this._item.hide()
          }, e
        }(),
        a = function() {
          function e(e) {
            this._proxy = e.getProxy(i.MainContext.MainThreadStatusBar), this._statusMessage = new s(this)
          }
          return e.prototype.createStatusBarEntry = function(e, t, n) {
            return new o(this._proxy, e, t, n)
          }, e.prototype.setStatusBarMessage = function(e, t) {
            var n, i = this._statusMessage.setMessage(e);
            return "number" == typeof t ? n = setTimeout(function() {
              return i.dispose()
            }, t) : void 0 !== t && t.then(function() {
              return i.dispose()
            }, function() {
              return i.dispose()
            }), new r.Disposable(function() {
              i.dispose(),
                clearTimeout(n)
            })
          }, e
        }();
      t.ExtHostStatusBar = a
    }), define(e[145], t([1, 0, 5]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          this._proxy = e.getProxy(n.MainContext.MainThreadStorage)
        }
        return e.prototype.getValue = function(e, t, n) {
          return this._proxy.$getValue(e, t).then(function(e) {
            return e || n
          })
        }, e.prototype.setValue = function(e, t, n) {
          return this._proxy.$setValue(e, t, n)
        }, e
      }();
      t.ExtHostStorage = r
    }), define(e[146], t([1, 0, 84, 2, 12, 9, 125, 5, 7]), function(e, t, n, r, i, o, s, a, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c;
      ! function(e) {
        e.from = function(e) {
          if (void 0 === e || null === e) return s.RevealKind.Always;
          switch (e) {
            case u.TaskRevealKind.Silent:
              return s.RevealKind.Silent;
            case u.TaskRevealKind.Never:
              return s.RevealKind.Never
          }
          return s.RevealKind.Always
        }
      }(c || (c = {}));
      var l;
      ! function(e) {
        e.from = function(e) {
          if (void 0 === e || null === e) return s.PanelKind.Shared;
          switch (e) {
            case u.TaskPanelKind.Dedicated:
              return s.PanelKind.Dedicated;
            case u.TaskPanelKind.New:
              return s.PanelKind.New;
            default:
              return s.PanelKind.Shared
          }
        }
      }(l || (l = {}));
      var d;
      ! function(e) {
        e.from = function(e) {
          return void 0 === e || null === e ? {
            reveal: s.RevealKind.Always,
            echo: !0,
            focus: !1,
            panel: s.PanelKind.Shared
          } : {
            reveal: c.from(e.reveal),
            echo: void 0 === e.echo || !!e.echo,
            focus: !!e.focus,
            panel: l.from(e.panel)
          }
        }
      }(d || (d = {}));
      var f;
      ! function(e) {
        e.from = function(e) {
          if (void 0 !== e && null !== e) {
            for (var t = 0, n = e; t < n.length; t++)
              if ("string" != typeof n[t]) return [];
            return e
          }
        }
      }(f || (f = {}));
      var p;
      ! function(e) {
        e.from = function(e) {
          if (void 0 !== e && null !== e) {
            var t = {};
            return "string" == typeof e.cwd && (t.cwd = e.cwd), e.env && (t.env = Object.create(null), Object.keys(e.env).forEach(function(n) {
                var r = e.env[n];
                "string" == typeof r && (t.env[n] = r)
              })),
              function(e) {
                return e && "string" == typeof e.executable
              }(e) && (t.shell = h.from(e)), t
          }
        }
      }(p || (p = {}));
      var h;
      ! function(e) {
        e.from = function(e) {
          if (void 0 !== e && null !== e && e.executable) return {
            executable: e.executable,
            args: f.from(e.shellArgs)
          }
        }
      }(h || (h = {}));
      var g;
      ! function(e) {
        function t(e, t, r) {
          if (void 0 === e || null === e) return [];
          for (var o = [], a = 0, c = e; a < c.length; a++) {
            var l = function(e, t, r) {
              if ("string" != typeof e.name) return;
              var o, a = e.execution;
              if (a instanceof u.ProcessExecution) o = function(e) {
                if ("string" != typeof e.process) return;
                var t = {
                  name: e.process,
                  args: f.from(e.args),
                  runtime: s.RuntimeType.Process,
                  suppressTaskName: !0,
                  presentation: void 0
                };
                e.options && (t.options = p.from(e.options));
                return t
              }(a);
              else {
                if (!(a instanceof u.ShellExecution)) return;
                o = function(e) {
                  if ("string" != typeof e.commandLine) return;
                  var t = {
                    name: e.commandLine,
                    runtime: s.RuntimeType.Shell,
                    presentation: void 0
                  };
                  e.options && (t.options = p.from(e.options));
                  return t
                }(a)
              }
              if (void 0 === o) return;
              o.presentation = d.from(e.presentationOptions);
              var c, l, h = e.scope;
              void 0 === h ? (l = s.TaskScope.Folder, c = t) : h === u.TaskScope.Global ? l = s.TaskScope.Global : h === u.TaskScope.Workspace ? l = s.TaskScope.Workspace : (l = s.TaskScope.Folder, c = h);
              var g = {
                kind: s.TaskSourceKind.Extension,
                label: "string" == typeof e.source ? e.source : r.name,
                extension: r.id,
                scope: l,
                workspaceFolder: void 0
              };
              g.__workspaceFolder = c ? c.uri : void 0;
              var m = n.localize(0, null, g.label, e.name),
                v = e.definitionKey,
                y = e.definition,
                _ = r.id + "." + v,
                b = {
                  _key: v,
                  type: y.type
                };
              i.assign(b, y);
              return {
                _id: _,
                _source: g,
                _label: m,
                type: y.type,
                defines: b,
                name: e.name,
                identifier: m,
                group: e.group ? e.group.id : void 0,
                command: o,
                isBackground: !!e.isBackground,
                problemMatchers: e.problemMatchers.slice(),
                hasDefinedMatchers: e.hasDefinedMatchers
              }
            }(c[a], t, r);
            l && o.push(l)
          }
          return o
        }
        e.from = t
      }(g || (g = {}));
      var m = function() {
        function e(e, t) {
          this._proxy = e.getProxy(a.MainContext.MainThreadTask), this._extHostWorkspace = t, this._handleCounter = 0, this._handlers = new Map
        }
        return e.prototype.registerTaskProvider = function(e, t) {
          var n = this;
          if (!t) return new u.Disposable(function() {});
          var r = this.nextHandle();
          return this._handlers.set(r, {
            provider: t,
            extension: e
          }), this._proxy.$registerTaskProvider(r), new u.Disposable(function() {
            n._handlers.delete(r), n._proxy.$unregisterTaskProvider(r)
          })
        }, e.prototype.$provideTasks = function(e) {
          var t = this,
            n = this._handlers.get(e);
          return n ? o.asWinJsPromise(function(e) {
            return n.provider.provideTasks(e)
          }).then(function(e) {
            var r = t._extHostWorkspace.getWorkspaceFolders();
            return {
              tasks: g.from(e, r && r.length > 0 ? r[0] : void 0, n.extension),
              extension: n.extension
            }
          }) : r.TPromise.wrapError(new Error("no handler found"))
        }, e.prototype.nextHandle = function() {
          return this._handleCounter++
        }, e
      }();
      t.ExtHostTask = m
    }), define(e[147], t([1, 0, 4, 5]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e, t, n, r, i, o, s) {
          var a = this;
          this._name = t, this._queuedRequests = [], this._proxy = e, this._pidPromise = new Promise(function(e) {
            a._pidPromiseComplete = e
          }), this._proxy.$createTerminal(t, n, r, i, o, s).then(function(e) {
            a._id = e, a._queuedRequests.forEach(function(e) {
              e.run(a._proxy, a._id)
            }), a._queuedRequests = []
          })
        }
        return Object.defineProperty(e.prototype, "name", {
          get: function() {
            return this._checkDisposed(), this._name
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "processId", {
          get: function() {
            return this._checkDisposed(), this._pidPromise
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.sendText = function(e, t) {
          void 0 === t && (t = !0), this._checkDisposed(), this._queueApiRequest(this._proxy.$sendText, [e, t])
        }, e.prototype.show = function(e) {
          this._checkDisposed(), this._queueApiRequest(this._proxy.$show, [e])
        }, e.prototype.hide = function() {
          this._checkDisposed(), this._queueApiRequest(this._proxy.$hide, [])
        }, e.prototype.dispose = function() {
          this._disposed || (this._disposed = !0, this._queueApiRequest(this._proxy.$dispose, []))
        }, e.prototype._setProcessId = function(e) {
          this._pidPromiseComplete(e), this._pidPromiseComplete = null
        }, e.prototype._queueApiRequest = function(e, t) {
          var n = new s(e, t);
          this._id ? n.run(this._proxy, this._id) : this._queuedRequests.push(n)
        }, e.prototype._checkDisposed = function() {
          if (this._disposed) throw new Error("Terminal has already been disposed")
        }, e
      }();
      t.ExtHostTerminal = i;
      var o = function() {
        function e(e) {
          this._onDidCloseTerminal = new n.Emitter, this._proxy = e.getProxy(r.MainContext.MainThreadTerminalService), this._terminals = []
        }
        return e.prototype.createTerminal = function(e, t, n) {
          var r = new i(this._proxy, e, t, n);
          return this._terminals.push(r), r
        }, e.prototype.createTerminalFromOptions = function(e) {
          var t = new i(this._proxy, e.name, e.shellPath, e.shellArgs, e.cwd, e.env);
          return this._terminals.push(t), t
        }, Object.defineProperty(e.prototype, "onDidCloseTerminal", {
          get: function() {
            return this._onDidCloseTerminal && this._onDidCloseTerminal.event
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.$acceptTerminalClosed = function(e) {
          var t = this._getTerminalIndexById(e);
          if (null !== t) {
            var n = this._terminals.splice(t, 1)[0];
            this._onDidCloseTerminal.fire(n)
          }
        }, e.prototype.$acceptTerminalProcessId = function(e, t) {
          var n = this._getTerminalById(e);
          n && n._setProcessId(t)
        }, e.prototype._getTerminalById = function(e) {
          var t = this._getTerminalIndexById(e);
          return null !== t ? this._terminals[t] : null
        }, e.prototype._getTerminalIndexById = function(e) {
          var t = null;
          return this._terminals.some(function(n, r) {
            return n._id === e && (t = r, !0)
          }), t
        }, e
      }();
      t.ExtHostTerminalService = o;
      var s = function() {
        function e(e, t) {
          this._callback = e, this._args = t
        }
        return e.prototype.run = function(e, t) {
          this._callback.apply(e, [t].concat(this._args))
        }, e
      }()
    }), define(e[148], t([1, 0, 4, 5]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(t) {
          var i = this;
          this._onDidChangeWindowState = new n.Emitter, this.onDidChangeWindowState = this._onDidChangeWindowState.event, this._state = e.InitialState, this._proxy = t.getProxy(r.MainContext.MainThreadWindow), this._proxy.$getWindowVisibility().then(function(e) {
            return i.$onDidChangeWindowFocus(e)
          })
        }
        return Object.defineProperty(e.prototype, "state", {
          get: function() {
            return this._state
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.$onDidChangeWindowFocus = function(e) {
          e !== this._state.focused && (this._state = o({}, this._state, {
            focused: e
          }), this._onDidChangeWindowState.fire(this._state))
        }, e.InitialState = {
          focused: !0
        }, e
      }();
      t.ExtHostWindow = i
    }), define(e[149], t([1, 0, 3, 4, 13, 16, 15, 63, 5, 8, 20]), function(e, t, r, i, o, s, a, u, c, l, d) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var f = function(e) {
          function t(t, n, r) {
            var i = e.call(this, t, n, r) || this;
            return i._workspaceFolders = [], i._structure = d.TernarySearchTree.forPaths(), i.folders.forEach(function(e) {
              var t = {
                name: e.name,
                uri: e.uri,
                index: e.index
              };
              i._workspaceFolders.push(t), i._structure.set(t.uri.toString(), t)
            }), i
          }
          return n(t, e), t.fromData = function(e) {
            if (e) {
              return new t(e.id, e.name, e.folders.map(function(e) {
                var t = e.uri,
                  n = e.name,
                  i = e.index;
                return new u.WorkspaceFolder({
                  name: n,
                  index: i,
                  uri: r.default.revive(t)
                })
              }))
            }
            return null
          }, Object.defineProperty(t.prototype, "workspaceFolders", {
            get: function() {
              return this._workspaceFolders.slice(0)
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.getWorkspaceFolder = function(e, t) {
            return t && this._structure.get(e.toString()) && (e = e.with({
              path: a.dirname(e.path)
            })), this._structure.findSubstr(e.toString())
          }, t
        }(u.Workspace),
        p = function() {
          function e(e, t) {
            this._onDidChangeWorkspace = new i.Emitter, this.onDidChangeWorkspace = this._onDidChangeWorkspace.event, this._proxy = e.getProxy(c.MainContext.MainThreadWorkspace), this._workspace = f.fromData(t)
          }
          return Object.defineProperty(e.prototype, "workspace", {
            get: function() {
              return this._workspace
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.getWorkspaceFolders = function() {
            return this._workspace ? this._workspace.workspaceFolders.slice(0) : void 0
          }, e.prototype.getWorkspaceFolder = function(e, t) {
            if (this._workspace) return this._workspace.getWorkspaceFolder(e, t)
          }, e.prototype.getPath = function() {
            if (this._workspace) {
              var e = this._workspace.folders;
              if (0 !== e.length) return e[0].uri.fsPath
            }
          }, e.prototype.getRelativePath = function(e, t) {
            var n;
            if ("string" == typeof e ? n = e : void 0 !== e && (n = e.fsPath), !n) return n;
            var i = this.getWorkspaceFolder("string" == typeof e ? r.default.file(e) : e, !0);
            if (!i) return n;
            void 0 === t && (t = this.workspace.folders.length > 1);
            var s = a.relative(i.uri.fsPath, n);
            return t && (s = i.name + "/" + s), o.normalize(s, !0)
          }, e.prototype.$acceptWorkspaceData = function(t) {
            var n = this._workspace ? this._workspace.workspaceFolders.sort(e._compareWorkspaceFolder) : [];
            this._workspace = f.fromData(t);
            var r = this._workspace ? this._workspace.workspaceFolders.sort(e._compareWorkspaceFolder) : [],
              i = s.delta(n, r, e._compareWorkspaceFolder),
              o = i.added,
              a = i.removed;
            this._onDidChangeWorkspace.fire(Object.freeze({
              added: Object.freeze(o),
              removed: Object.freeze(a)
            }))
          }, e._compareWorkspaceFolder = function(e, t) {
            return l.compare(e.uri.toString(), t.uri.toString())
          }, e.prototype.findFiles = function(t, n, i, o) {
            var s, a, u = this,
              c = e._requestIdPool++;
            t && ("string" == typeof t ? s = t : (s = t.pattern, a = t.base));
            var l;
            n && (l = "string" == typeof n ? n : n.pattern);
            var d = this._proxy.$startSearch(s, a, l, i, c);
            return o && o.onCancellationRequested(function() {
              return u._proxy.$cancelSearch(c)
            }), d.then(function(e) {
              return e.map(r.default.revive)
            })
          }, e.prototype.saveAll = function(e) {
            return this._proxy.$saveAll(e)
          }, e._requestIdPool = 0, e
        }();
      t.ExtHostWorkspace = p
    }), define(e[150], t([1, 0, 2, 65, 11, 130]), function(e, t, n, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {
        function e(e) {
          var t = this;
          this._isDisposed = !1, this._locals = Object.create(null),
            this._proxies = Object.create(null), this._lastMessageId = 0, this._invokedHandlers = Object.create(null), this._pendingRPCReplies = {}, this._multiplexor = new u(e, function(e) {
              return t._receiveOneMessage(e)
            })
        }
        return e.prototype.dispose = function() {
            var e = this;
            this._isDisposed = !0, Object.keys(this._pendingRPCReplies).forEach(function(t) {
              e._pendingRPCReplies[t].resolveErr(i.canceled())
            })
          }, e.prototype.getProxy = function(e) {
            return this._proxies[e.id] || (this._proxies[e.id] = this._createProxy(e.id, e.isFancy)), this._proxies[e.id]
          }, e.prototype._createProxy = function(e, t) {
            var n = this,
              r = {
                get: function(r, i) {
                  return r[i] || 36 !== i.charCodeAt(0) || (r[i] = function() {
                    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                    return n._remoteCall(e, i, r, t)
                  }), r[i]
                }
              };
            return new Proxy(Object.create(null), r)
          }, e.prototype.set = function(e, t) {
            return this._locals[e.id] = t, t
          }, e.prototype.assertRegistered = function(e) {
            for (var t = 0, n = e.length; t < n; t++) {
              var r = e[t];
              if (!this._locals[r.id]) throw new Error("Missing actor " + r.id + " (isMain: " + r.isMain + ")")
            }
          },
          e.prototype._receiveOneMessage = function(e) {
            if (!this._isDisposed) {
              var t = JSON.parse(e);
              switch (t.type) {
                case 1:
                  this._receiveRequest(t);
                  break;
                case 2:
                  this._receiveRequest(r.revive(t, 0));
                  break;
                case 3:
                  this._receiveCancel(t);
                  break;
                case 4:
                  this._receiveReply(t);
                  break;
                case 5:
                  this._receiveReply(r.revive(t, 0));
                  break;
                case 6:
                  this._receiveReplyErr(t)
              }
            }
          }, e.prototype._receiveRequest = function(e) {
            var t = this,
              n = e.id,
              r = e.proxyId,
              i = 2 === e.type;
            this._invokedHandlers[n] = this._invokeHandler(r, e.method, e.args), this._invokedHandlers[n].then(function(e) {
              delete t._invokedHandlers[n], i ? t._multiplexor.send(c.fancyReplyOK(n, e)) : t._multiplexor.send(c.replyOK(n, e))
            }, function(e) {
              delete t._invokedHandlers[n], t._multiplexor.send(c.replyErr(n, e))
            })
          }, e.prototype._receiveCancel = function(e) {
            var t = e.id;
            this._invokedHandlers[t] && this._invokedHandlers[t].cancel()
          }, e.prototype._receiveReply = function(e) {
            var t = e.id;
            if (this._pendingRPCReplies.hasOwnProperty(t)) {
              var n = this._pendingRPCReplies[t];
              delete this._pendingRPCReplies[t], n.resolveOk(e.res)
            }
          },
          e.prototype._receiveReplyErr = function(e) {
            var t = e.id;
            if (this._pendingRPCReplies.hasOwnProperty(t)) {
              var n = this._pendingRPCReplies[t];
              delete this._pendingRPCReplies[t];
              var r = null;
              e.err && e.err.$isError && ((r = new Error).name = e.err.name, r.message = e.err.message, r.stack = e.err.stack), n.resolveErr(r)
            }
          }, e.prototype._invokeHandler = function(e, t, r) {
            try {
              return n.TPromise.as(this._doInvokeHandler(e, t, r))
            } catch (e) {
              return n.TPromise.wrapError(e)
            }
          }, e.prototype._doInvokeHandler = function(e, t, n) {
            if (!this._locals[e]) throw new Error("Unknown actor " + e);
            var r = this._locals[e],
              i = r[t];
            if ("function" != typeof i) throw new Error("Unknown method " + t + " on actor " + e);
            return i.apply(r, n)
          }, e.prototype._remoteCall = function(e, t, r, s) {
            var a = this;
            if (this._isDisposed) return n.TPromise.wrapError(i.canceled());
            var u = String(++this._lastMessageId),
              l = new o.LazyPromise(function() {
                a._multiplexor.send(c.cancel(u))
              });
            return this._pendingRPCReplies[u] = l, s ? this._multiplexor.send(c.fancyRequest(u, e, t, r)) : this._multiplexor.send(c.request(u, e, t, r)), l
          }, e
      }();
      t.RPCProtocol = s;
      var a, u = function() {
          function e(e, t) {
            this._protocol = e, this._sendAccumulatedBound = this._sendAccumulated.bind(this), this._messagesToSend = [], this._protocol.onMessage(function(e) {
              for (var n = 0, r = e.length; n < r; n++) t(e[n])
            })
          }
          return e.prototype._sendAccumulated = function() {
            var e = this._messagesToSend;
            this._messagesToSend = [], this._protocol.send(e)
          }, e.prototype.send = function(e) {
            0 === this._messagesToSend.length && process.nextTick(this._sendAccumulatedBound), this._messagesToSend.push(e)
          }, e
        }(),
        c = function() {
          function e() {}
          return e.cancel = function(e) {
            return '{"type":3,"id":"' + e + '"}'
          }, e.request = function(e, t, n, r) {
            return '{"type":1,"id":"' + e + '","proxyId":"' + t + '","method":"' + n + '","args":' + JSON.stringify(r) + "}"
          }, e.fancyRequest = function(e, t, n, i) {
            return '{"type":2,"id":"' + e + '","proxyId":"' + t + '","method":"' + n + '","args":' + r.stringify(i) + "}"
          }, e.replyOK = function(e, t) {
            return void 0 === t ? '{"type":4,"id":"' + e + '"}' : '{"type":4,"id":"' + e + '","res":' + JSON.stringify(t) + "}"
          }, e.fancyReplyOK = function(e, t) {
            return void 0 === t ? '{"type":4,"id":"' + e + '"}' : '{"type":5,"id":"' + e + '","res":' + r.stringify(t) + "}"
          }, e.replyErr = function(e, t) {
            return t instanceof Error ? '{"type":6,"id":"' + e + '","err":' + JSON.stringify(i.transformErrorForSerialization(t)) + "}" : '{"type":6,"id":"' + e + '","err":null}'
          }, e
        }();
      ! function(e) {
        e[e.Request = 1] = "Request", e[e.FancyRequest = 2] = "FancyRequest", e[e.Cancel = 3] = "Cancel", e[e.Reply = 4] = "Reply", e[e.FancyReply = 5] = "FancyReply", e[e.ReplyErr = 6] = "ReplyErr"
      }(a || (a = {}))
    }), define(e[151], t([1, 0, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IHashService = n.createDecorator("hashService")
    }), define(e[152], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e(e) {
          this.service = e
        }
        return e.prototype.call = function(e, t) {
          switch (e) {
            case "fileSearch":
              return this.service.fileSearch(t);
            case "textSearch":
              return this.service.textSearch(t);
            case "clearCache":
              return this.service.clearCache(t);
            case "fetchTelemetry":
              return this.service.fetchTelemetry()
          }
        }, e
      }();
      t.SearchChannel = n;
      var r = function() {
        function e(e) {
          this.channel = e
        }
        return e.prototype.fileSearch = function(e) {
          return this.channel.call("fileSearch", e)
        }, e.prototype.textSearch = function(e) {
          return this.channel.call("textSearch", e)
        }, e.prototype.clearCache = function(e) {
          return this.channel.call("clearCache", e)
        }, e.prototype.fetchTelemetry = function() {
          return this.channel.call("fetchTelemetry")
        }, e
      }();
      t.SearchChannelClient = r
    }), define(e[39], t([1, 0, 6, 49]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e[e.SAVED = 0] = "SAVED", e[e.DIRTY = 1] = "DIRTY", e[e.PENDING_SAVE = 2] = "PENDING_SAVE", e[e.CONFLICT = 3] = "CONFLICT", e[e.ORPHAN = 4] = "ORPHAN", e[e.ERROR = 5] = "ERROR"
      }(t.ModelState || (t.ModelState = {}));
      ! function(e) {
        e[e.DIRTY = 0] = "DIRTY", e[e.SAVING = 1] = "SAVING", e[e.SAVE_ERROR = 2] = "SAVE_ERROR", e[e.SAVED = 3] = "SAVED", e[e.REVERTED = 4] = "REVERTED", e[e.ENCODING = 5] = "ENCODING", e[e.CONTENT_CHANGE = 6] = "CONTENT_CHANGE", e[e.ORPHANED_CHANGE = 7] = "ORPHANED_CHANGE"
      }(t.StateChange || (t.StateChange = {}));
      var i = function() {
        function e(e, t) {
          this._resource = e.getResource(), this._kind = t
        }
        return Object.defineProperty(e.prototype, "resource", {
          get: function() {
            return this._resource
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "kind", {
          get: function() {
            return this._kind
          },
          enumerable: !0,
          configurable: !0
        }), e
      }();
      t.TextFileModelChangeEvent = i, t.TEXT_FILE_SERVICE_ID = "textFileService", t.AutoSaveContext = new r.RawContextKey("config.files.autoSave", void 0);
      ! function(e) {
        e[e.OFF = 0] = "OFF", e[e.AFTER_SHORT_DELAY = 1] = "AFTER_SHORT_DELAY", e[e.AFTER_LONG_DELAY = 2] = "AFTER_LONG_DELAY", e[e.ON_FOCUS_CHANGE = 3] = "ON_FOCUS_CHANGE", e[e.ON_WINDOW_CHANGE = 4] = "ON_WINDOW_CHANGE"
      }(t.AutoSaveMode || (t.AutoSaveMode = {}));
      ! function(e) {
        e[e.EXPLICIT = 1] = "EXPLICIT", e[e.AUTO = 2] = "AUTO", e[e.FOCUS_CHANGE = 3] = "FOCUS_CHANGE", e[e.WINDOW_CHANGE = 4] = "WINDOW_CHANGE"
      }(t.SaveReason || (t.SaveReason = {})), t.ITextFileService = n.createDecorator(t.TEXT_FILE_SERVICE_ID)
    }), define(e[19], t([1, 0, 24, 40, 7, 34, 26, 3, 103, 39, 45]), function(e, t, n, r, i, o, s, a, u, c, l) {
      "use strict";

      function d(e) {
        if (e) {
          var t = e.start,
            n = e.end;
          return {
            startLineNumber: t.line + 1,
            startColumn: t.character + 1,
            endLineNumber: n.line + 1,
            endColumn: n.character + 1
          }
        }
      }

      function f(e) {
        if (e) {
          var t = e.startLineNumber,
            n = e.startColumn,
            r = e.endLineNumber,
            o = e.endColumn;
          return new i.Range(t - 1, n - 1, r - 1, o - 1)
        }
      }

      function p(e) {
        return 0 === e.length || !! function(e) {
          return void 0 !== e.range
        }(e[0])
      }

      function h(e) {
        if ("string" == typeof e) return e;
        if (function(e) {
            var t = e;
            return t && "string" == typeof t.base && "string" == typeof t.pattern
          }(e)) return new i.RelativePattern(e.base, e.pattern)
      }

      function g(e) {
        return "string" == typeof e ? e : e ? {
          language: e.language,
          scheme: e.scheme,
          pattern: h(e.pattern)
        } : void 0
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.toSelection = function(e) {
        var t = e.selectionStartLineNumber,
          n = e.selectionStartColumn,
          r = e.positionLineNumber,
          o = e.positionColumn,
          s = new i.Position(t - 1, n - 1),
          a = new i.Position(r - 1, o - 1);
        return new i.Selection(s, a)
      }, t.fromSelection = function(e) {
        var t = e.anchor,
          n = e.active;
        return {
          selectionStartLineNumber: t.line + 1,
          selectionStartColumn: t.character + 1,
          positionLineNumber: n.line + 1,
          positionColumn: n.character + 1
        }
      }, t.fromRange = d, t.toRange = f, t.toPosition = function(e) {
        return new i.Position(e.lineNumber - 1, e.column - 1)
      }, t.fromPosition = function(e) {
        return {
          lineNumber: e.line + 1,
          column: e.character + 1
        }
      }, t.fromDiagnosticSeverity = function(e) {
        switch (e) {
          case i.DiagnosticSeverity.Error:
            return n.default.Error;
          case i.DiagnosticSeverity.Warning:
            return n.default.Warning;
          case i.DiagnosticSeverity.Information:
            return n.default.Info;
          case i.DiagnosticSeverity.Hint:
            return n.default.Ignore
        }
        return n.default.Error
      }, t.toDiagnosticSeverty = function(e) {
        switch (e) {
          case n.default.Info:
            return i.DiagnosticSeverity.Information;
          case n.default.Warning:
            return i.DiagnosticSeverity.Warning;
          case n.default.Error:
            return i.DiagnosticSeverity.Error;
          case n.default.Ignore:
            return i.DiagnosticSeverity.Hint
        }
        return i.DiagnosticSeverity.Error
      }, t.fromViewColumn = function(e) {
        var t = o.Position.ONE;
        return "number" != typeof e || (e === i.ViewColumn.Two ? t = o.Position.TWO : e === i.ViewColumn.Three ? t = o.Position.THREE : e === i.ViewColumn.Active && (t = void 0)), t
      }, t.toViewColumn = function(e) {
        if ("number" == typeof e) return e === o.Position.ONE ? i.ViewColumn.One : e === o.Position.TWO ? i.ViewColumn.Two : e === o.Position.THREE ? i.ViewColumn.Three : void 0
      }, t.isDecorationOptionsArr = p;
      var m;
      ! function(e) {
        e.fromMany = function(t) {
          return t.map(e.from)
        }, e.from = function(e) {
          if (function(e) {
              return e && "object" == typeof e && "string" == typeof e.language && "string" == typeof e.value
            }(e)) return {
            value: "```" + e.language + "\n" + e.value + "\n```\n"
          };
          return l.isMarkdownString(e) ? e : "string" == typeof e ? {
            value: e
          } : {
            value: ""
          }
        }, e.to = function(e) {
          var t = new l.MarkdownString(e.value);
          return t.isTrusted = e.isTrusted, t
        }, e.fromStrict = function(t) {
          if (t) return "string" == typeof t ? t : e.from(t)
        }
      }(m = t.MarkdownString || (t.MarkdownString = {})), t.fromRangeOrRangeWithMessage = function(e) {
        return p(e) ? e.map(function(e) {
          return {
            range: d(e.range),
            hoverMessage: Array.isArray(e.hoverMessage) ? m.fromMany(e.hoverMessage) : e.hoverMessage && m.from(e.hoverMessage),
            renderOptions: e.renderOptions
          }
        }) : e.map(function(e) {
          return {
            range: d(e)
          }
        })
      }, t.TextEdit = {
        from: function(e) {
          return {
            text: e.newText,
            eol: C.from(e.newEol),
            range: d(e.range)
          }
        },
        to: function(e) {
          var t = new i.TextEdit(f(e.range), e.text);
          return t.newEol = C.to(e.eol), t
        }
      };
      ! function(e) {
        e.from = function(e) {
          for (var t = {
              edits: []
            }, n = 0, r = e.entries(); n < r.length; n++)
            for (var i = r[n], o = i[0], s = 0, a = i[1]; s < a.length; s++) {
              var u = a[s];
              t.edits.push({
                resource: o,
                newText: u.newText,
                range: d(u.range)
              })
            }
          return t
        }, e.to = function(e) {
          for (var t = new i.WorkspaceEdit, n = 0, r = e.edits; n < r.length; n++) {
            var o = r[n];
            t.replace(o.resource, f(o.range), o.newText)
          }
          return t
        }
      }(t.WorkspaceEdit || (t.WorkspaceEdit = {}));
      var v;
      ! function(e) {
        var t = Object.create(null);
        t[i.SymbolKind.File] = r.SymbolKind.File, t[i.SymbolKind.Module] = r.SymbolKind.Module, t[i.SymbolKind.Namespace] = r.SymbolKind.Namespace, t[i.SymbolKind.Package] = r.SymbolKind.Package, t[i.SymbolKind.Class] = r.SymbolKind.Class,
          t[i.SymbolKind.Method] = r.SymbolKind.Method, t[i.SymbolKind.Property] = r.SymbolKind.Property, t[i.SymbolKind.Field] = r.SymbolKind.Field, t[i.SymbolKind.Constructor] = r.SymbolKind.Constructor, t[i.SymbolKind.Enum] = r.SymbolKind.Enum, t[i.SymbolKind.Interface] = r.SymbolKind.Interface, t[i.SymbolKind.Function] = r.SymbolKind.Function, t[i.SymbolKind.Variable] = r.SymbolKind.Variable, t[i.SymbolKind.Constant] = r.SymbolKind.Constant, t[i.SymbolKind.String] = r.SymbolKind.String, t[i.SymbolKind.Number] = r.SymbolKind.Number, t[i.SymbolKind.Boolean] = r.SymbolKind.Boolean, t[i.SymbolKind.Array] = r.SymbolKind.Array, t[i.SymbolKind.Object] = r.SymbolKind.Object, t[i.SymbolKind.Key] = r.SymbolKind.Key, t[i.SymbolKind.Null] = r.SymbolKind.Null, t[i.SymbolKind.EnumMember] = r.SymbolKind.EnumMember, t[i.SymbolKind.Struct] = r.SymbolKind.Struct, t[i.SymbolKind.Event] = r.SymbolKind.Event, t[i.SymbolKind.Operator] = r.SymbolKind.Operator, t[i.SymbolKind.TypeParameter] = r.SymbolKind.TypeParameter, e.from = function(e) {
            return t[e] || r.SymbolKind.Property
          }, e.to = function(e) {
            for (var n in t)
              if (t[n] === e) return Number(n);
            return i.SymbolKind.Property
          }
      }(v = t.SymbolKind || (t.SymbolKind = {})), t.fromSymbolInformation = function(e) {
        return {
          name: e.name,
          kind: v.from(e.kind),
          containerName: e.containerName,
          location: t.location.from(e.location)
        }
      }, t.toSymbolInformation = function(e) {
        return new i.SymbolInformation(e.name, v.to(e.kind), e.containerName, t.location.to(e.location))
      }, t.location = {
        from: function(e) {
          return {
            range: e.range && d(e.range),
            uri: e.uri
          }
        },
        to: function(e) {
          return new i.Location(e.uri, f(e.range))
        }
      }, t.fromHover = function(e) {
        return {
          range: d(e.range),
          contents: m.fromMany(e.contents)
        }
      }, t.toHover = function(e) {
        return new i.Hover(e.contents.map(m.to), f(e.range))
      }, t.toDocumentHighlight = function(e) {
        return new i.DocumentHighlight(f(e.range), e.kind)
      };
      var y;
      ! function(e) {
        e.from = function(e) {
          switch (e) {
            case r.SuggestTriggerKind.TriggerCharacter:
              return i.CompletionTriggerKind.TriggerCharacter;
            case r.SuggestTriggerKind.Invoke:
            default:
              return i.CompletionTriggerKind.Invoke
          }
        }
      }(y = t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
      ! function(e) {
        e.from = function(e) {
          return {
            triggerKind: y.from(e.triggerKind),
            triggerCharacter: e.triggerCharacter
          }
        }
      }(t.CompletionContext || (t.CompletionContext = {})), t.CompletionItemKind = {
        from: function(e) {
          switch (e) {
            case i.CompletionItemKind.Method:
              return "method";
            case i.CompletionItemKind.Function:
              return "function";
            case i.CompletionItemKind.Constructor:
              return "constructor";
            case i.CompletionItemKind.Field:
              return "field";
            case i.CompletionItemKind.Variable:
              return "variable";
            case i.CompletionItemKind.Class:
              return "class";
            case i.CompletionItemKind.Interface:
              return "interface";
            case i.CompletionItemKind.Struct:
              return "struct";
            case i.CompletionItemKind.Module:
              return "module";
            case i.CompletionItemKind.Property:
              return "property";
            case i.CompletionItemKind.Unit:
              return "unit";
            case i.CompletionItemKind.Value:
              return "value";
            case i.CompletionItemKind.Constant:
              return "constant";
            case i.CompletionItemKind.Enum:
              return "enum";
            case i.CompletionItemKind.EnumMember:
              return "enum-member";
            case i.CompletionItemKind.Keyword:
              return "keyword";
            case i.CompletionItemKind.Snippet:
              return "snippet";
            case i.CompletionItemKind.Text:
              return "text";
            case i.CompletionItemKind.Color:
              return "color";
            case i.CompletionItemKind.File:
              return "file";
            case i.CompletionItemKind.Reference:
              return "reference";
            case i.CompletionItemKind.Folder:
              return "folder";
            case i.CompletionItemKind.Event:
              return "event";
            case i.CompletionItemKind.Operator:
              return "operator";
            case i.CompletionItemKind.TypeParameter:
              return "type-parameter"
          }
          return "property"
        },
        to: function(e) {
          return e ? i.CompletionItemKind[e.charAt(0).toUpperCase() + e.substr(1)] : i.CompletionItemKind.Property
        }
      };
      ! function(e) {
        e.to = function(e, n) {
          var r = new i.CompletionItem(n.label);
          r.insertText = n.insertText, r.kind = t.CompletionItemKind.to(n.type), r.detail = n.detail, r.documentation = l.isMarkdownString(n.documentation) ? m.to(n.documentation) : n.documentation, r.sortText = n.sortText, r.filterText = n.filterText;
          var o = "number" == typeof n.overwriteBefore ? n.overwriteBefore : 0,
            s = new i.Position(e.line, Math.max(0, e.character - o)),
            a = e;
          return "number" == typeof n.overwriteAfter && (a = new i.Position(e.line, e.character + n.overwriteAfter)), r.range = new i.Range(s, a), "textmate" === n.snippetType ? r.insertText = new i.SnippetString(n.insertText) : (r.insertText = n.insertText, r.textEdit = new i.TextEdit(r.range, r.insertText)), r
        }
      }(t.Suggest || (t.Suggest = {}));
      var _;
      ! function(e) {
        e.from = function(e) {
          return {
            label: e.label,
            documentation: m.fromStrict(e.documentation)
          }
        }, e.to = function(e) {
          return {
            label: e.label,
            documentation: l.isMarkdownString(e.documentation) ? m.to(e.documentation) : e.documentation
          }
        }
      }(_ = t.ParameterInformation || (t.ParameterInformation = {}));
      var b;
      ! function(e) {
        e.from = function(e) {
          return {
            label: e.label,
            documentation: m.fromStrict(e.documentation),
            parameters: e.parameters && e.parameters.map(_.from)
          }
        }, e.to = function(e) {
          return {
            label: e.label,
            documentation: l.isMarkdownString(e.documentation) ? m.to(e.documentation) : e.documentation,
            parameters: e.parameters && e.parameters.map(_.to)
          }
        }
      }(b = t.SignatureInformation || (t.SignatureInformation = {}));
      ! function(e) {
        e.from = function(e) {
          return {
            activeSignature: e.activeSignature,
            activeParameter: e.activeParameter,
            signatures: e.signatures && e.signatures.map(b.from)
          }
        }, e.to = function(e) {
          return {
            activeSignature: e.activeSignature,
            activeParameter: e.activeParameter,
            signatures: e.signatures && e.signatures.map(b.to)
          }
        }
      }(t.SignatureHelp || (t.SignatureHelp = {}));
      ! function(e) {
        e.from = function(e) {
          return {
            range: d(e.range),
            url: e.target && e.target.toString()
          }
        }, e.to = function(e) {
          return new i.DocumentLink(f(e.range), e.url && a.default.parse(e.url))
        }
      }(t.DocumentLink || (t.DocumentLink = {}));
      ! function(e) {
        e.to = function(e) {
          return {
            label: e.label,
            textEdit: e.textEdit ? t.TextEdit.to(e.textEdit) : void 0,
            additionalTextEdits: e.additionalTextEdits ? e.additionalTextEdits.map(function(e) {
              return t.TextEdit.to(e)
            }) : void 0
          }
        }, e.from = function(e) {
          return {
            label: e.label,
            textEdit: e.textEdit ? t.TextEdit.from(e.textEdit) : void 0,
            additionalTextEdits: e.additionalTextEdits ? e.additionalTextEdits.map(function(e) {
              return t.TextEdit.from(e)
            }) : void 0
          }
        }
      }(t.ColorPresentation || (t.ColorPresentation = {}));
      ! function(e) {
        e.to = function(e) {
          switch (e) {
            case c.SaveReason.AUTO:
              return i.TextDocumentSaveReason.AfterDelay;
            case c.SaveReason.EXPLICIT:
              return i.TextDocumentSaveReason.Manual;
            case c.SaveReason.FOCUS_CHANGE:
            case c.SaveReason.WINDOW_CHANGE:
              return i.TextDocumentSaveReason.FocusOut
          }
        }
      }(t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {}));
      var C;
      ! function(e) {
        e.from = function(e) {
          return e === i.EndOfLine.CRLF ? s.EndOfLineSequence.CRLF : e === i.EndOfLine.LF ? s.EndOfLineSequence.LF : void 0
        }, e.to = function(e) {
          return e === s.EndOfLineSequence.CRLF ? i.EndOfLine.CRLF : e === s.EndOfLineSequence.LF ? i.EndOfLine.LF : void 0
        }
      }(C = t.EndOfLine || (t.EndOfLine = {}));
      ! function(e) {
        e.from = function(e) {
          switch (e) {
            case i.ProgressLocation.SourceControl:
              return u.ProgressLocation.Scm;
            case i.ProgressLocation.Window:
              return u.ProgressLocation.Window
          }
        }
      }(t.ProgressLocation || (t.ProgressLocation = {})),
      t.toTextEditorOptions = function(e) {
        if (e) return {
          pinned: "boolean" == typeof e.preview ? !e.preview : void 0,
          preserveFocus: e.preserveFocus,
          selection: "object" == typeof e.selection ? d(e.selection) : void 0
        }
      }, t.toGlobPattern = h, t.toLanguageSelector = function(e) {
        return Array.isArray(e) ? e.map(function(e) {
          return g(e)
        }) : g(e)
      }
    }), define(e[155], t([1, 0, 3, 2, 19, 7]), function(e, t, n, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = function() {
        function e(e) {
          this._disposables = [], this._commands = e
        }
        return e.register = function(t) {
          return new e(t).registerCommands()
        }, e.prototype.registerCommands = function() {
          var e = this;
          this._register("vscode.executeWorkspaceSymbolProvider", this._executeWorkspaceSymbolProvider, {
              description: "Execute all workspace symbol provider.",
              args: [{
                name: "query",
                description: "Search string",
                constraint: String
              }],
              returns: "A promise that resolves to an array of SymbolInformation-instances."
            }), this._register("vscode.executeDefinitionProvider", this._executeDefinitionProvider, {
              description: "Execute all definition provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position of a symbol",
                constraint: o.Position
              }],
              returns: "A promise that resolves to an array of Location-instances."
            }), this._register("vscode.executeImplementationProvider", this._executeImplementationProvider, {
              description: "Execute all implementation providers.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position of a symbol",
                constraint: o.Position
              }],
              returns: "A promise that resolves to an array of Location-instance."
            }), this._register("vscode.executeHoverProvider", this._executeHoverProvider, {
              description: "Execute all hover provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position of a symbol",
                constraint: o.Position
              }],
              returns: "A promise that resolves to an array of Hover-instances."
            }),
            this._register("vscode.executeDocumentHighlights", this._executeDocumentHighlights, {
              description: "Execute document highlight provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position in a text document",
                constraint: o.Position
              }],
              returns: "A promise that resolves to an array of DocumentHighlight-instances."
            }), this._register("vscode.executeReferenceProvider", this._executeReferenceProvider, {
              description: "Execute reference provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position in a text document",
                constraint: o.Position
              }],
              returns: "A promise that resolves to an array of Location-instances."
            }), this._register("vscode.executeDocumentRenameProvider", this._executeDocumentRenameProvider, {
              description: "Execute rename provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position in a text document",
                constraint: o.Position
              }, {
                name: "newName",
                description: "The new symbol name",
                constraint: String
              }],
              returns: "A promise that resolves to a WorkspaceEdit."
            }), this._register("vscode.executeSignatureHelpProvider", this._executeSignatureHelpProvider, {
              description: "Execute signature help provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position in a text document",
                constraint: o.Position
              }, {
                name: "triggerCharacter",
                description: "(optional) Trigger signature help when the user types the character, like `,` or `(`",
                constraint: function(e) {
                  return void 0 === e || "string" == typeof e
                }
              }],
              returns: "A promise that resolves to SignatureHelp."
            }), this._register("vscode.executeDocumentSymbolProvider", this._executeDocumentSymbolProvider, {
              description: "Execute document symbol provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }],
              returns: "A promise that resolves to an array of SymbolInformation-instances."
            }),
            this._register("vscode.executeCompletionItemProvider", this._executeCompletionItemProvider, {
              description: "Execute completion item provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position in a text document",
                constraint: o.Position
              }, {
                name: "triggerCharacter",
                description: "(optional) Trigger completion when the user types the character, like `,` or `(`",
                constraint: function(e) {
                  return void 0 === e || "string" == typeof e
                }
              }],
              returns: "A promise that resolves to a CompletionList-instance."
            }), this._register("vscode.executeCodeActionProvider", this._executeCodeActionProvider, {
              description: "Execute code action provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "range",
                description: "Range in a text document",
                constraint: o.Range
              }],
              returns: "A promise that resolves to an array of Command-instances."
            }), this._register("vscode.executeCodeLensProvider", this._executeCodeLensProvider, {
              description: "Execute CodeLens provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }],
              returns: "A promise that resolves to an array of CodeLens-instances."
            }), this._register("vscode.executeFormatDocumentProvider", this._executeFormatDocumentProvider, {
              description: "Execute document format provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "options",
                description: "Formatting options"
              }],
              returns: "A promise that resolves to an array of TextEdits."
            }), this._register("vscode.executeFormatRangeProvider", this._executeFormatRangeProvider, {
              description: "Execute range format provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "range",
                description: "Range in a text document",
                constraint: o.Range
              }, {
                name: "options",
                description: "Formatting options"
              }],
              returns: "A promise that resolves to an array of TextEdits."
            }), this._register("vscode.executeFormatOnTypeProvider", this._executeFormatOnTypeProvider, {
              description: "Execute document format provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }, {
                name: "position",
                description: "Position in a text document",
                constraint: o.Position
              }, {
                name: "ch",
                description: "Character that got typed",
                constraint: String
              }, {
                name: "options",
                description: "Formatting options"
              }],
              returns: "A promise that resolves to an array of TextEdits."
            }), this._register("vscode.executeLinkProvider", this._executeDocumentLinkProvider, {
              description: "Execute document link provider.",
              args: [{
                name: "uri",
                description: "Uri of a text document",
                constraint: n.default
              }],
              returns: "A promise that resolves to an array of DocumentLink-instances."
            }), this._register("vscode.previewHtml", function(t, n, r, o) {
              return e._commands.executeCommand("_workbench.previewHtml", t, "number" == typeof n && i.fromViewColumn(n), r, o)
            }, {
              description: "\n\t\t\t\t\tRender the html of the resource in an editor view.\n\n\t\t\t\t\tSee [working with the html preview](https://code.visualstudio.com/docs/extensionAPI/vscode-api-commands#working-with-the-html-preview) for more information about the html preview's intergration with the editor and for best practices for extension authors.\n\t\t\t\t",
              args: [{
                name: "uri",
                description: "Uri of the resource to preview.",
                constraint: function(e) {
                  return e instanceof n.default || "string" == typeof e
                }
              }, {
                name: "column",
                description: "(optional) Column in which to preview.",
                constraint: function(e) {
                  return void 0 === e || "number" == typeof e && "string" == typeof o.ViewColumn[e]
                }
              }, {
                name: "label",
                description: "(optional) An human readable string that is used as title for the preview.",
                constraint: function(e) {
                  return "string" == typeof e || void 0 === e
                }
              }, {
                name: "options",
                description: "(optional) Options for controlling webview environment.",
                constraint: function(e) {
                  return "object" == typeof e || void 0 === e
                }
              }]
            }),
            this._register("vscode.openFolder", function(t, n) {
              return t ? e._commands.executeCommand("_files.windowOpen", [t.fsPath], n) : e._commands.executeCommand("_files.pickFolderAndOpen", n)
            }, {
              description: "Open a folder in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder unless the newWindow parameter is set to true.",
              args: [{
                name: "uri",
                description: "(optional) Uri of the folder to open. If not provided, a native dialog will ask the user for the folder",
                constraint: function(e) {
                  return void 0 === e || e instanceof n.default
                }
              }, {
                name: "newWindow",
                description: "(optional) Whether to open the folder in a new window or the same. Defaults to opening in the same window.",
                constraint: function(e) {
                  return void 0 === e || "boolean" == typeof e
                }
              }]
            }), this._register("vscode.diff", function(t, n, r, o) {
              return e._commands.executeCommand("_workbench.diff", [t, n, r, void 0, i.toTextEditorOptions(o), o ? i.fromViewColumn(o.viewColumn) : void 0])
            }, {
              description: "Opens the provided resources in the diff editor to compare their contents.",
              args: [{
                name: "left",
                description: "Left-hand side resource of the diff editor",
                constraint: n.default
              }, {
                name: "right",
                description: "Right-hand side resource of the diff editor",
                constraint: n.default
              }, {
                name: "title",
                description: "(optional) Human readable title for the diff editor",
                constraint: function(e) {
                  return void 0 === e || "string" == typeof e
                }
              }, {
                name: "options",
                description: "(optional) Editor options, see vscode.TextDocumentShowOptions"
              }]
            }), this._register("vscode.open", function(t, n) {
              var r, o;
              return n && ("number" == typeof n ? o = i.fromViewColumn(n) : (r = i.toTextEditorOptions(n), o = i.fromViewColumn(n.viewColumn))), e._commands.executeCommand("_workbench.open", [t, r, o])
            }, {
              description: "Opens the provided resource in the editor. Can be a text or binary file, or a http(s) url. If you need more control over the options for opening a text file, use vscode.window.showTextDocument instead.",
              args: [{
                name: "resource",
                description: "Resource to open",
                constraint: n.default
              }, {
                name: "columnOrOptions",
                description: "(optional) Either the column in which to open or editor options, see vscode.TextDocumentShowOptions",
                constraint: function(e) {
                  return void 0 === e || "number" == typeof e || "object" == typeof e
                }
              }]
            })
        }, e.prototype._register = function(e, t, n) {
          var r = this._commands.registerCommand(e, t, this, n);
          this._disposables.push(r)
        }, e.prototype._executeWorkspaceSymbolProvider = function(e) {
          return this._commands.executeCommand("_executeWorkspaceSymbolProvider", {
            query: e
          }).then(function(e) {
            var t = [];
            if (Array.isArray(e))
              for (var n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                t.push.apply(t, o[1].map(i.toSymbolInformation))
              }
            return t
          })
        }, e.prototype._executeDefinitionProvider = function(e, t) {
          var n = {
            resource: e,
            position: t && i.fromPosition(t)
          };
          return this._commands.executeCommand("_executeDefinitionProvider", n).then(function(e) {
            if (Array.isArray(e)) return e.map(i.location.to)
          })
        }, e.prototype._executeImplementationProvider = function(e, t) {
          var n = {
            resource: e,
            position: t && i.fromPosition(t)
          };
          return this._commands.executeCommand("_executeImplementationProvider", n).then(function(e) {
            if (Array.isArray(e)) return e.map(i.location.to)
          })
        }, e.prototype._executeHoverProvider = function(e, t) {
          var n = {
            resource: e,
            position: t && i.fromPosition(t)
          };
          return this._commands.executeCommand("_executeHoverProvider", n).then(function(e) {
            if (Array.isArray(e)) return e.map(i.toHover)
          })
        }, e.prototype._executeDocumentHighlights = function(e, t) {
          var n = {
            resource: e,
            position: t && i.fromPosition(t)
          };
          return this._commands.executeCommand("_executeDocumentHighlights", n).then(function(e) {
            if (Array.isArray(e)) return e.map(i.toDocumentHighlight)
          })
        }, e.prototype._executeReferenceProvider = function(e, t) {
          var n = {
            resource: e,
            position: t && i.fromPosition(t)
          };
          return this._commands.executeCommand("_executeReferenceProvider", n).then(function(e) {
            if (Array.isArray(e)) return e.map(i.location.to)
          })
        }, e.prototype._executeDocumentRenameProvider = function(e, t, n) {
          var s = {
            resource: e,
            position: t && i.fromPosition(t),
            newName: n
          };
          return this._commands.executeCommand("_executeDocumentRenameProvider", s).then(function(e) {
            if (e) {
              if (e.rejectReason) return r.TPromise.wrapError(new Error(e.rejectReason));
              for (var t = new o.WorkspaceEdit, n = 0, s = e.edits; n < s.length; n++) {
                var a = s[n];
                t.replace(a.resource, i.toRange(a.range), a.newText)
              }
              return t
            }
          })
        }, e.prototype._executeSignatureHelpProvider = function(e, t, n) {
          var r = {
            resource: e,
            position: t && i.fromPosition(t),
            triggerCharacter: n
          };
          return this._commands.executeCommand("_executeSignatureHelpProvider", r).then(function(e) {
            if (e) return i.SignatureHelp.to(e)
          })
        }, e.prototype._executeCompletionItemProvider = function(e, t, n) {
          var r = {
            resource: e,
            position: t && i.fromPosition(t),
            triggerCharacter: n
          };
          return this._commands.executeCommand("_executeCompletionItemProvider", r).then(function(e) {
            if (e) {
              var n = e.suggestions.map(function(e) {
                return i.Suggest.to(t, e)
              });
              return new o.CompletionList(n, e.incomplete)
            }
          })
        }, e.prototype._executeDocumentSymbolProvider = function(e) {
          var t = {
            resource: e
          };
          return this._commands.executeCommand("_executeDocumentSymbolProvider", t).then(function(e) {
            if (e && Array.isArray(e.entries)) return e.entries.map(i.toSymbolInformation)
          })
        }, e.prototype._executeCodeActionProvider = function(e, t) {
          var n = this,
            r = {
              resource: e,
              range: i.fromRange(t)
            };
          return this._commands.executeCommand("_executeCodeActionProvider", r).then(function(e) {
            if (Array.isArray(e)) return e.map(function(e) {
              if (e._isSynthetic) return n._commands.converter.fromInternal(e.command);
              return new o.CodeAction(e.title, i.WorkspaceEdit.to(e.edit))
            })
          })
        }, e.prototype._executeCodeLensProvider = function(e) {
          var t = this,
            n = {
              resource: e
            };
          return this._commands.executeCommand("_executeCodeLensProvider", n).then(function(e) {
            if (Array.isArray(e)) return e.map(function(e) {
              return new o.CodeLens(i.toRange(e.range), t._commands.converter.fromInternal(e.command))
            })
          })
        }, e.prototype._executeFormatDocumentProvider = function(e, t) {
          var n = {
            resource: e,
            options: t
          };
          return this._commands.executeCommand("_executeFormatDocumentProvider", n).then(function(e) {
            if (Array.isArray(e)) return e.map(function(e) {
              return new o.TextEdit(i.toRange(e.range), e.text)
            })
          })
        }, e.prototype._executeFormatRangeProvider = function(e, t, n) {
          var r = {
            resource: e,
            range: i.fromRange(t),
            options: n
          };
          return this._commands.executeCommand("_executeFormatRangeProvider", r).then(function(e) {
            if (Array.isArray(e)) return e.map(function(e) {
              return new o.TextEdit(i.toRange(e.range), e.text)
            })
          })
        }, e.prototype._executeFormatOnTypeProvider = function(e, t, n, r) {
          var s = {
            resource: e,
            position: i.fromPosition(t),
            ch: n,
            options: r
          };
          return this._commands.executeCommand("_executeFormatOnTypeProvider", s).then(function(e) {
            if (Array.isArray(e)) return e.map(function(e) {
              return new o.TextEdit(i.toRange(e.range), e.text)
            })
          })
        }, e.prototype._executeDocumentLinkProvider = function(e) {
          return this._commands.executeCommand("_executeLinkProvider", e).then(function(e) {
            if (Array.isArray(e)) return e.map(i.DocumentLink.to)
          })
        }, e
      }();
      t.ExtHostApiCommands = s
    }), define(e[156], t([1, 0, 21, 7, 19, 12, 5, 16, 65]), function(e, t, n, r, i, o, s, a, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = function() {
        function e(e, t, n) {
          this._commands = new Map, this._proxy = e.getProxy(s.MainContext.MainThreadCommands), this._logService = n, this._converter = new l(this, t), this._argumentProcessors = [{
            processArgument: function(e) {
              return u.revive(e, 0)
            }
          }]
        }
        return Object.defineProperty(e.prototype, "converter", {
          get: function() {
            return this._converter
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.registerArgumentProcessor = function(e) {
          this._argumentProcessors.push(e)
        }, e.prototype.registerCommand = function(e, t, n, i) {
          var o = this;
          if (this._logService.trace("ExtHostCommands#registerCommand", e), !e.trim().length) throw new Error("invalid id");
          if (this._commands.has(e)) throw new Error("command '" + e + "' already exists");
          return this._commands.set(e, {
            callback: t,
            thisArg: n,
            description: i
          }), this._proxy.$registerCommand(e), new r.Disposable(function() {
            o._commands.delete(e) && o._proxy.$unregisterCommand(e)
          })
        }, e.prototype.executeCommand = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return this._logService.trace("ExtHostCommands#executeCommand", e), this._commands.has(e) ? this._executeContributedCommand(e, t) : (t = o.cloneAndChange(t, function(e) {
            return e instanceof r.Position ? i.fromPosition(e) : e instanceof r.Range ? i.fromRange(e) : e instanceof r.Location ? i.location.from(e) : Array.isArray(e) ? void 0 : e
          }), this._proxy.$executeCommand(e, t).then(function(e) {
            return u.revive(e, 0)
          }))
        }, e.prototype._executeContributedCommand = function(e, t) {
          var r = this._commands.get(e),
            i = r.callback,
            o = r.thisArg,
            s = r.description;
          if (s)
            for (var a = 0; a < s.args.length; a++) try {
              n.validateConstraint(t[a], s.args[a].constraint)
            } catch (t) {
              return Promise.reject(new Error("Running the contributed command:'" + e + "' failed. Illegal argument '" + s.args[a].name + "' - " + s.args[a].description))
            }
          try {
            var u = i.apply(o, t);
            return Promise.resolve(u)
          } catch (t) {
            return this._logService.error(t, e), Promise.reject(new Error("Running the contributed command:'" + e + "' failed."))
          }
        }, e.prototype.$executeContributedCommand = function(e) {
          for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          return this._commands.has(e) ? (n = n.map(function(e) {
            return t._argumentProcessors.reduce(function(e, t) {
              return t.processArgument(e)
            }, e)
          }), this._executeContributedCommand(e, n)) : Promise.reject(new Error("Contributed command '" + e + "' does not exist."))
        }, e.prototype.getCommands = function(e) {
          return void 0 === e && (e = !1), this._logService.trace("ExtHostCommands#getCommands", e), this._proxy.$getCommands().then(function(t) {
            return e && (t = t.filter(function(e) {
              return "_" !== e[0]
            })), t
          })
        }, e.prototype.$getContributedCommandHandlerDescriptions = function() {
          var e = Object.create(null);
          return this._commands.forEach(function(t, n) {
            var r = t.description;
            r && (e[n] = r)
          }), Promise.resolve(e)
        }, e
      }();
      t.ExtHostCommands = c;
      var l = function() {
        function e(e, t) {
          this._commands = e,
            this._heap = t, this._commands.registerCommand("_internal_command_delegation", this._executeConvertedCommand, this)
        }
        return e.prototype.toInternal = function(e) {
          if (e) {
            var t = {
              id: e.command,
              title: e.title
            };
            if (e.command && !a.isFalsyOrEmpty(e.arguments)) {
              var n = this._heap.keep(e);
              s.ObjectIdentifier.mixin(t, n), t.id = "_internal_command_delegation", t.arguments = [n]
            }
            return e.tooltip && (t.tooltip = e.tooltip), t
          }
        }, e.prototype.fromInternal = function(e) {
          if (e) {
            var t = s.ObjectIdentifier.of(e);
            return "number" == typeof t ? this._heap.get(t) : {
              command: e.id,
              title: e.title,
              arguments: e.arguments
            }
          }
        }, e.prototype._executeConvertedCommand = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = this._heap.get(e[0]);
          return (r = this._commands).executeCommand.apply(r, [n.command].concat(n.arguments));
          var r
        }, e
      }();
      t.CommandsConverter = l
    }), define(e[157], t([1, 0, 3, 9, 11, 7, 19, 70]), function(e, t, n, r, i, o, s, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u = function() {
        function e(e, t, n, r) {
          void 0 === r && (r = {
              timeout: 1500,
              errors: 3
            }),
            this._logService = e, this._documents = t, this._mainThreadEditors = n, this._thresholds = r, this._callbacks = new a.LinkedList, this._badListeners = new WeakMap
        }
        return e.prototype.dispose = function() {
          this._callbacks.clear()
        }, e.prototype.getOnWillSaveTextDocumentEvent = function(e) {
          var t = this;
          return function(n, r, i) {
            var o = {
              dispose: t._callbacks.push([n, r, e])
            };
            return Array.isArray(i) && i.push(o), o
          }
        }, e.prototype.$participateInSave = function(e, t) {
          var i = this,
            o = n.default.revive(e),
            a = this._callbacks.toArray(),
            u = !1,
            c = setTimeout(function() {
              return u = !0
            }, this._thresholds.timeout),
            l = r.sequence(a.map(function(e) {
              return function() {
                if (!u) {
                  var n = i._documents.getDocumentData(o).document;
                  return i._deliverEventAsyncAndBlameBadListeners(e, {
                    document: n,
                    reason: s.TextDocumentSaveReason.to(t)
                  })
                }
              }
            }));
          return r.always(l, function() {
            return clearTimeout(c)
          })
        }, e.prototype._deliverEventAsyncAndBlameBadListeners = function(e, t) {
          var n = this,
            r = e[0],
            i = e[1],
            o = e[2];
          return this._badListeners.get(r) > this._thresholds.errors ? Promise.resolve(!1) : this._deliverEventAsync(r, i, t).then(function() {
            return !0
          }, function(e) {
            if (n._logService.error("[onWillSaveTextDocument]", o.id), n._logService.error(e), !(e instanceof Error) || "concurrent_edits" !== e.message) {
              var t = n._badListeners.get(r);
              n._badListeners.set(r, t ? t + 1 : 1)
            }
            return !1
          })
        }, e.prototype._deliverEventAsync = function(e, t, n) {
          var r = this,
            a = [],
            u = n.document,
            c = n.reason,
            l = u.version,
            d = Object.freeze({
              document: u,
              reason: c,
              waitUntil: function(e) {
                if (Object.isFrozen(a)) throw i.illegalState("waitUntil can not be called async");
                a.push(Promise.resolve(e))
              }
            });
          try {
            e.apply(t, [d])
          } catch (e) {
            return Promise.reject(e)
          }
          return Object.freeze(a), new Promise(function(e, t) {
            var n = setTimeout(function() {
              return t(new Error("timeout"))
            }, r._thresholds.timeout);
            return Promise.all(a).then(function(t) {
              clearTimeout(n), e(t)
            }).catch(function(e) {
              clearTimeout(n), t(e)
            })
          }).then(function(e) {
            for (var t = {
                resource: u.uri,
                edits: []
              }, n = 0, i = e; n < i.length; n++) {
              var a = i[n];
              if (Array.isArray(a) && a.every(function(e) {
                  return e instanceof o.TextEdit
                }))
                for (var c = 0, d = a; c < d.length; c++) {
                  var f = d[c],
                    p = f.newText,
                    h = f.newEol,
                    g = f.range;
                  t.edits.push({
                    range: g && s.fromRange(g),
                    newText: p,
                    newEol: s.EndOfLine.from(h)
                  })
                }
            }
            if (0 !== t.edits.length) return l === u.version ? r._mainThreadEditors.$tryApplyWorkspaceEdit([t]) : Promise.reject(new Error("concurrent_edits"))
          })
        }, e
      }();
      t.ExtHostDocumentSaveParticipant = u
    }), define(e[158], t([1, 0, 4, 3, 14, 19, 2, 5, 66]), function(e, t, n, r, i, o, s, a, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = function() {
        function e(e, t) {
          var r = this;
          this._onDidAddDocument = new n.Emitter, this._onDidRemoveDocument = new n.Emitter, this._onDidChangeDocument = new n.Emitter, this._onDidSaveDocument = new n.Emitter, this.onDidAddDocument = this._onDidAddDocument.event, this.onDidRemoveDocument = this._onDidRemoveDocument.event, this.onDidChangeDocument = this._onDidChangeDocument.event, this.onDidSaveDocument = this._onDidSaveDocument.event, this._documentLoader = new Map,
            this._proxy = e.getProxy(a.MainContext.MainThreadDocuments), this._documentsAndEditors = t, this._toDispose = [this._documentsAndEditors.onDidRemoveDocuments(function(e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var i = n[t];
                r._onDidRemoveDocument.fire(i.document)
              }
            }), this._documentsAndEditors.onDidAddDocuments(function(e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var i = n[t];
                r._onDidAddDocument.fire(i.document)
              }
            })]
        }
        return e.prototype.dispose = function() {
          i.dispose(this._toDispose)
        }, e.prototype.getAllDocumentData = function() {
          return this._documentsAndEditors.allDocuments()
        }, e.prototype.getDocumentData = function(e) {
          if (e) {
            var t = this._documentsAndEditors.getDocument(e.toString());
            return t || void 0
          }
        }, e.prototype.ensureDocumentData = function(e) {
          var t = this,
            n = this._documentsAndEditors.getDocument(e.toString());
          if (n) return s.TPromise.as(n);
          var r = this._documentLoader.get(e.toString());
          return r || (r = this._proxy.$tryOpenDocument(e).then(function() {
            return t._documentLoader.delete(e.toString()), t._documentsAndEditors.getDocument(e.toString())
          }, function(n) {
            return t._documentLoader.delete(e.toString()), s.TPromise.wrapError(n)
          }), this._documentLoader.set(e.toString(), r)), r
        }, e.prototype.createDocumentData = function(e) {
          return this._proxy.$tryCreateDocument(e).then(function(e) {
            return r.default.revive(e)
          })
        }, e.prototype.$acceptModelModeChanged = function(e, t, n) {
          var r = this._documentsAndEditors.getDocument(e);
          this._onDidRemoveDocument.fire(r.document), r._acceptLanguageId(n), this._onDidAddDocument.fire(r.document)
        }, e.prototype.$acceptModelSaved = function(e) {
          var t = this._documentsAndEditors.getDocument(e);
          this.$acceptDirtyStateChanged(e, !1), this._onDidSaveDocument.fire(t.document)
        }, e.prototype.$acceptDirtyStateChanged = function(e, t) {
          var n = this._documentsAndEditors.getDocument(e);
          n._acceptIsDirty(t), this._onDidChangeDocument.fire({
            document: n.document,
            contentChanges: []
          })
        }, e.prototype.$acceptModelChanged = function(e, t, n) {
          var r = this._documentsAndEditors.getDocument(e);
          r._acceptIsDirty(n), r.onEvents(t), this._onDidChangeDocument.fire({
            document: r.document,
            contentChanges: t.changes.map(function(e) {
              return {
                range: o.toRange(e.range),
                rangeLength: e.rangeLength,
                text: e.text
              }
            })
          })
        }, e.prototype.setWordDefinitionFor = function(e, t) {
          u.setWordDefinitionFor(e, t)
        }, e
      }();
      t.ExtHostDocuments = c
    }), define(e[159], t([1, 0, 3, 2, 12, 19, 7, 69, 9, 5, 8, 16]), function(e, t, n, r, i, o, s, a, u, c, l, d) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var f = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideDocumentSymbols = function(e) {
            var t = this,
              n = this._documents.getDocumentData(e).document;
            return u.asWinJsPromise(function(e) {
              return t._provider.provideDocumentSymbols(n, e)
            }).then(function(e) {
              if (Array.isArray(e)) return e.map(function(e) {
                return c.IdObject.mixin(o.fromSymbolInformation(e))
              })
            })
          }, e
        }(),
        p = function() {
          function e(e, t, n, r) {
            this._documents = e, this._commands = t, this._heapService = n, this._provider = r
          }
          return e.prototype.provideCodeLenses = function(e) {
            var t = this,
              n = this._documents.getDocumentData(e).document;
            return u.asWinJsPromise(function(e) {
              return t._provider.provideCodeLenses(n, e)
            }).then(function(e) {
              if (Array.isArray(e)) return e.map(function(e) {
                var n = t._heapService.keep(e);
                return c.ObjectIdentifier.mixin({
                  range: o.fromRange(e.range),
                  command: t._commands.toInternal(e.command)
                }, n)
              })
            })
          }, e.prototype.resolveCodeLens = function(t, n) {
            var i = this,
              o = this._heapService.get(c.ObjectIdentifier.of(n));
            if (o) {
              return ("function" != typeof this._provider.resolveCodeLens || o.isResolved ? r.TPromise.as(o) : u.asWinJsPromise(function(e) {
                return i._provider.resolveCodeLens(o, e)
              })).then(function(t) {
                return t = t || o, n.command = i._commands.toInternal(t.command || e._badCmd), n
              })
            }
          }, e._badCmd = {
            command: "missing",
            title: "<<MISSING COMMAND>>"
          }, e
        }(),
        h = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideDefinition = function(e, t) {
            var n = this,
              r = this._documents.getDocumentData(e).document,
              i = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return n._provider.provideDefinition(r, i, e)
            }).then(function(e) {
              return Array.isArray(e) ? e.map(o.location.from) : e ? o.location.from(e) : void 0
            })
          }, e
        }(),
        g = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideImplementation = function(e, t) {
            var n = this,
              r = this._documents.getDocumentData(e).document,
              i = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return n._provider.provideImplementation(r, i, e)
            }).then(function(e) {
              return Array.isArray(e) ? e.map(o.location.from) : e ? o.location.from(e) : void 0
            })
          }, e
        }(),
        m = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideTypeDefinition = function(e, t) {
            var n = this,
              r = this._documents.getDocumentData(e).document,
              i = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return n._provider.provideTypeDefinition(r, i, e)
            }).then(function(e) {
              return Array.isArray(e) ? e.map(o.location.from) : e ? o.location.from(e) : void 0
            })
          }, e
        }(),
        v = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideHover = function(e, t) {
            var n = this,
              r = this._documents.getDocumentData(e).document,
              i = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return n._provider.provideHover(r, i, e)
            }).then(function(e) {
              if (e && !d.isFalsyOrEmpty(e.contents)) return e.range || (e.range = r.getWordRangeAtPosition(i)), e.range || (e.range = new s.Range(i, i)), o.fromHover(e)
            })
          }, e
        }(),
        y = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideDocumentHighlights = function(t, n) {
            var r = this,
              i = this._documents.getDocumentData(t).document,
              s = o.toPosition(n);
            return u.asWinJsPromise(function(e) {
              return r._provider.provideDocumentHighlights(i, s, e)
            }).then(function(t) {
              if (Array.isArray(t)) return t.map(e._convertDocumentHighlight)
            })
          }, e._convertDocumentHighlight = function(e) {
            return {
              range: o.fromRange(e.range),
              kind: e.kind
            }
          }, e
        }(),
        _ = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideReferences = function(e, t, n) {
            var r = this,
              i = this._documents.getDocumentData(e).document,
              s = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return r._provider.provideReferences(i, s, n, e)
            }).then(function(e) {
              if (Array.isArray(e)) return e.map(o.location.from)
            })
          }, e
        }(),
        b = function() {
          function e(e, t, n, r) {
            this._documents = e, this._commands = t, this._diagnostics = n, this._provider = r
          }
          return e.prototype.provideCodeActions = function(t, n) {
            var r = this,
              i = this._documents.getDocumentData(t).document,
              s = o.toRange(n),
              c = [];
            return this._diagnostics.forEach(function(e) {
              if (e.has(t))
                for (var n = 0, r = e.get(t); n < r.length; n++) {
                  var i = r[n];
                  s.contains(i.range) && c.push(i)
                }
            }), u.asWinJsPromise(function(e) {
              return r._provider.provideCodeActions(i, s, {
                diagnostics: c
              }, e)
            }).then(function(t) {
              if (!d.isFalsyOrEmpty(t)) {
                for (var n = [], i = 0, s = t; i < s.length; i++) {
                  var u = s[i];
                  u && (e._isCommand(u) ? n.push({
                    _isSynthetic: !0,
                    title: u.title,
                    command: r._commands.toInternal(u)
                  }) : n.push({
                    title: u.title,
                    command: u.command && r._commands.toInternal(u.command),
                    diagnostics: u.diagnostics && u.diagnostics.map(a.DiagnosticCollection.toMarkerData),
                    edit: u.edit && o.WorkspaceEdit.from(u.edit)
                  }))
                }
                return n
              }
            })
          }, e._isCommand = function(e) {
            return "string" == typeof e.command && "string" == typeof e.title
          }, e
        }(),
        C = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideDocumentFormattingEdits = function(e, t) {
            var n = this,
              r = this._documents.getDocumentData(e).document;
            return u.asWinJsPromise(function(e) {
              return n._provider.provideDocumentFormattingEdits(r, t, e)
            }).then(function(e) {
              if (Array.isArray(e)) return e.map(o.TextEdit.from)
            })
          }, e
        }(),
        S = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideDocumentRangeFormattingEdits = function(e, t, n) {
            var r = this,
              i = this._documents.getDocumentData(e).document,
              s = o.toRange(t);
            return u.asWinJsPromise(function(e) {
              return r._provider.provideDocumentRangeFormattingEdits(i, s, n, e)
            }).then(function(e) {
              if (Array.isArray(e)) return e.map(o.TextEdit.from)
            })
          }, e
        }(),
        E = function() {
          function e(e, t) {
            this.autoFormatTriggerCharacters = [], this._documents = e, this._provider = t
          }
          return e.prototype.provideOnTypeFormattingEdits = function(e, t, n, r) {
            var i = this,
              s = this._documents.getDocumentData(e).document,
              a = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return i._provider.provideOnTypeFormattingEdits(s, a, n, r, e)
            }).then(function(e) {
              if (Array.isArray(e)) return e.map(o.TextEdit.from)
            })
          }, e
        }(),
        x = function() {
          function e(e) {
            this._symbolCache = Object.create(null), this._resultCache = Object.create(null), this._provider = e
          }
          return e.prototype.provideWorkspaceSymbols = function(e) {
            var t = this,
              n = c.IdObject.mixin({
                symbols: []
              });
            return u.asWinJsPromise(function(n) {
              return t._provider.provideWorkspaceSymbols(e, n)
            }).then(function(e) {
              if (!d.isFalsyOrEmpty(e))
                for (var r = 0, i = e; r < i.length; r++) {
                  var s = i[r];
                  if (s)
                    if (s.name) {
                      var a = c.IdObject.mixin(o.fromSymbolInformation(s));
                      t._symbolCache[a._id] = s, n.symbols.push(a)
                    } else console.warn("INVALID SymbolInformation, lacks name", s)
                }
            }).then(function() {
              return n.symbols.length > 0 && (t._resultCache[n._id] = [n.symbols[0]._id, n.symbols[n.symbols.length - 1]._id]), n
            })
          }, e.prototype.resolveWorkspaceSymbol = function(e) {
            var t = this;
            if ("function" != typeof this._provider.resolveWorkspaceSymbol) return r.TPromise.as(e);
            var n = this._symbolCache[e._id];
            return n ? u.asWinJsPromise(function(e) {
              return t._provider.resolveWorkspaceSymbol(n, e)
            }).then(function(t) {
              return t && i.mixin(e, o.fromSymbolInformation(t), !0)
            }) : void 0
          }, e.prototype.releaseWorkspaceSymbols = function(e) {
            var t = this._resultCache[e];
            if (t) {
              for (var n = t[0], r = t[1]; n <= r; n++) delete this._symbolCache[n];
              delete this._resultCache[e]
            }
          }, e
        }(),
        w = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideRenameEdits = function(e, t, n) {
            var i = this,
              s = this._documents.getDocumentData(e).document,
              a = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return i._provider.provideRenameEdits(s, a, n, e)
            }).then(function(e) {
              if (e) return o.WorkspaceEdit.from(e)
            }, function(e) {
              return "string" == typeof e ? {
                edits: void 0,
                rejectReason: e
              } : e instanceof Error && "string" == typeof e.message ? {
                edits: void 0,
                rejectReason: e.message
              } : r.TPromise.wrapError(e)
            })
          }, e
        }(),
        P = function() {
          function e(e, t, n) {
            this._cache = new Map,
              this._idPool = 0, this._documents = e, this._commands = t, this._provider = n
          }
          return e.supportsResolving = function(e) {
            return "function" == typeof e.resolveCompletionItem
          }, e.prototype.provideCompletionItems = function(e, t, n) {
            var r = this,
              i = this._documents.getDocumentData(e).document,
              a = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return r._provider.provideCompletionItems(i, a, e, o.CompletionContext.from(n))
            }).then(function(e) {
              var t, n = r._idPool++,
                o = {
                  _id: n,
                  suggestions: []
                };
              if (e) {
                Array.isArray(e) ? t = new s.CompletionList(e) : (t = e, o.incomplete = t.isIncomplete);
                for (var u = (i.getWordRangeAtPosition(a) || new s.Range(a, a)).with({
                    end: a
                  }), c = 0; c < t.items.length; c++) {
                  var l = r._convertCompletionItem(t.items[c], a, u, c, n);
                  l && o.suggestions.push(l)
                }
                return r._cache.set(n, t.items), o
              }
            })
          }, e.prototype.resolveCompletionItem = function(e, t, n) {
            var a = this;
            if ("function" != typeof this._provider.resolveCompletionItem) return r.TPromise.as(n);
            var c = n,
              l = c._parentId,
              d = c._id,
              f = this._cache.has(l) && this._cache.get(l)[d];
            return f ? u.asWinJsPromise(function(e) {
              return a._provider.resolveCompletionItem(f, e)
            }).then(function(r) {
              if (!r) return n;
              var u = a._documents.getDocumentData(e).document,
                c = o.toPosition(t),
                f = (u.getWordRangeAtPosition(c) || new s.Range(c, c)).with({
                  end: c
                }),
                p = a._convertCompletionItem(r, c, f, d, l);
              return p && i.mixin(n, p, !0), n
            }) : r.TPromise.as(n)
          }, e.prototype.releaseCompletionItems = function(e) {
            this._cache.delete(e)
          }, e.prototype._convertCompletionItem = function(e, t, n, r, i) {
            if ("string" == typeof e.label && 0 !== e.label.length) {
              var a = {
                _id: r,
                _parentId: i,
                label: e.label,
                type: o.CompletionItemKind.from(e.kind),
                detail: e.detail,
                documentation: e.documentation,
                filterText: e.filterText,
                sortText: e.sortText,
                insertText: void 0,
                additionalTextEdits: e.additionalTextEdits && e.additionalTextEdits.map(o.TextEdit.from),
                command: this._commands.toInternal(e.command),
                commitCharacters: e.commitCharacters
              };
              e.textEdit ? (a.insertText = e.textEdit.newText, a.snippetType = "internal") : "string" == typeof e.insertText ? (a.insertText = e.insertText,
                a.snippetType = "internal") : e.insertText instanceof s.SnippetString ? (a.insertText = e.insertText.value, a.snippetType = "textmate") : (a.insertText = e.label, a.snippetType = "internal");
              var u;
              if (u = e.textEdit ? e.textEdit.range : e.range ? e.range : n, a.overwriteBefore = t.character - u.start.character, a.overwriteAfter = u.end.character - t.character, u.isSingleLine && u.start.line === t.line) return a;
              console.warn("INVALID text edit -> must be single line and on the same line")
            } else console.warn("INVALID text edit -> must have at least a label")
          }, e
        }(),
        D = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideSignatureHelp = function(e, t) {
            var n = this,
              r = this._documents.getDocumentData(e).document,
              i = o.toPosition(t);
            return u.asWinJsPromise(function(e) {
              return n._provider.provideSignatureHelp(r, i, e)
            }).then(function(e) {
              if (e) return o.SignatureHelp.from(e)
            })
          }, e
        }(),
        T = function() {
          function e(e, t, n) {
            this._documents = e, this._heapService = t, this._provider = n
          }
          return e.prototype.provideLinks = function(e) {
            var t = this,
              n = this._documents.getDocumentData(e).document;
            return u.asWinJsPromise(function(e) {
              return t._provider.provideDocumentLinks(n, e)
            }).then(function(e) {
              if (Array.isArray(e)) {
                for (var n = [], r = 0, i = e; r < i.length; r++) {
                  var s = i[r],
                    a = o.DocumentLink.from(s),
                    u = t._heapService.keep(s);
                  c.ObjectIdentifier.mixin(a, u), n.push(a)
                }
                return n
              }
            })
          }, e.prototype.resolveLink = function(e) {
            var t = this;
            if ("function" == typeof this._provider.resolveDocumentLink) {
              var n = c.ObjectIdentifier.of(e),
                r = this._heapService.get(n);
              if (r) return u.asWinJsPromise(function(e) {
                return t._provider.resolveDocumentLink(r, e)
              }).then(function(e) {
                if (e) return o.DocumentLink.from(e)
              })
            }
          }, e
        }(),
        O = function() {
          function e(e, t) {
            this._documents = e, this._provider = t
          }
          return e.prototype.provideColors = function(e) {
            var t = this,
              n = this._documents.getDocumentData(e).document;
            return u.asWinJsPromise(function(e) {
              return t._provider.provideDocumentColors(n, e)
            }).then(function(e) {
              if (!Array.isArray(e)) return [];
              return e.map(function(e) {
                return {
                  color: [e.color.red, e.color.green, e.color.blue, e.color.alpha],
                  range: o.fromRange(e.range)
                }
              })
            })
          }, e.prototype.provideColorPresentations = function(e, t) {
            var n = this,
              r = this._documents.getDocumentData(e).document,
              i = o.toRange(t.range),
              a = new s.Color(t.color[0], t.color[1], t.color[2], t.color[3]);
            return u.asWinJsPromise(function(e) {
              return n._provider.provideColorPresentations(a, {
                document: r,
                range: i
              }, e)
            }).then(function(e) {
              return e.map(o.ColorPresentation.from)
            })
          }, e
        }(),
        k = function() {
          function e(e, t, n, r, i) {
            this._adapter = new Map, this._proxy = e.getProxy(c.MainContext.MainThreadLanguageFeatures), this._documents = t, this._commands = n, this._heapService = r, this._diagnostics = i
          }
          return e.prototype._createDisposable = function(e) {
              var t = this;
              return new s.Disposable(function() {
                t._adapter.delete(e), t._proxy.$unregister(e)
              })
            }, e.prototype._nextHandle = function() {
              return e._handlePool++
            }, e.prototype._withAdapter = function(e, t, n) {
              var i = this._adapter.get(e);
              return i instanceof t ? n(i) : r.TPromise.wrapError(new Error("no adapter found"))
            },
            e.prototype._addNewAdapter = function(e) {
              var t = this._nextHandle();
              return this._adapter.set(t, e), t
            }, e.prototype.registerDocumentSymbolProvider = function(e, t) {
              var n = this._addNewAdapter(new f(this._documents, t));
              return this._proxy.$registerOutlineSupport(n, e), this._createDisposable(n)
            }, e.prototype.$provideDocumentSymbols = function(e, t) {
              return this._withAdapter(e, f, function(e) {
                return e.provideDocumentSymbols(n.default.revive(t))
              })
            }, e.prototype.registerCodeLensProvider = function(e, t) {
              var n = this,
                r = this._nextHandle(),
                i = "function" == typeof t.onDidChangeCodeLenses ? this._nextHandle() : void 0;
              this._adapter.set(r, new p(this._documents, this._commands.converter, this._heapService, t)), this._proxy.$registerCodeLensSupport(r, e, i);
              var o = this._createDisposable(r);
              if (void 0 !== i) {
                var a = t.onDidChangeCodeLenses(function(e) {
                  return n._proxy.$emitCodeLensEvent(i)
                });
                o = s.Disposable.from(o, a)
              }
              return o
            }, e.prototype.$provideCodeLenses = function(e, t) {
              return this._withAdapter(e, p, function(e) {
                return e.provideCodeLenses(n.default.revive(t))
              })
            },
            e.prototype.$resolveCodeLens = function(e, t, r) {
              return this._withAdapter(e, p, function(e) {
                return e.resolveCodeLens(n.default.revive(t), r)
              })
            }, e.prototype.registerDefinitionProvider = function(e, t) {
              var n = this._addNewAdapter(new h(this._documents, t));
              return this._proxy.$registerDeclaractionSupport(n, e), this._createDisposable(n)
            }, e.prototype.$provideDefinition = function(e, t, r) {
              return this._withAdapter(e, h, function(e) {
                return e.provideDefinition(n.default.revive(t), r)
              })
            }, e.prototype.registerImplementationProvider = function(e, t) {
              var n = this._addNewAdapter(new g(this._documents, t));
              return this._proxy.$registerImplementationSupport(n, e), this._createDisposable(n)
            }, e.prototype.$provideImplementation = function(e, t, r) {
              return this._withAdapter(e, g, function(e) {
                return e.provideImplementation(n.default.revive(t), r)
              })
            }, e.prototype.registerTypeDefinitionProvider = function(e, t) {
              var n = this._addNewAdapter(new m(this._documents, t));
              return this._proxy.$registerTypeDefinitionSupport(n, e), this._createDisposable(n)
            },
            e.prototype.$provideTypeDefinition = function(e, t, r) {
              return this._withAdapter(e, m, function(e) {
                return e.provideTypeDefinition(n.default.revive(t), r)
              })
            }, e.prototype.registerHoverProvider = function(e, t, n) {
              var r = this._addNewAdapter(new v(this._documents, t));
              return this._proxy.$registerHoverProvider(r, e), this._createDisposable(r)
            }, e.prototype.$provideHover = function(e, t, r) {
              return this._withAdapter(e, v, function(e) {
                return e.provideHover(n.default.revive(t), r)
              })
            }, e.prototype.registerDocumentHighlightProvider = function(e, t) {
              var n = this._addNewAdapter(new y(this._documents, t));
              return this._proxy.$registerDocumentHighlightProvider(n, e), this._createDisposable(n)
            }, e.prototype.$provideDocumentHighlights = function(e, t, r) {
              return this._withAdapter(e, y, function(e) {
                return e.provideDocumentHighlights(n.default.revive(t), r)
              })
            }, e.prototype.registerReferenceProvider = function(e, t) {
              var n = this._addNewAdapter(new _(this._documents, t));
              return this._proxy.$registerReferenceSupport(n, e), this._createDisposable(n)
            },
            e.prototype.$provideReferences = function(e, t, r, i) {
              return this._withAdapter(e, _, function(e) {
                return e.provideReferences(n.default.revive(t), r, i)
              })
            }, e.prototype.registerCodeActionProvider = function(e, t) {
              var n = this._addNewAdapter(new b(this._documents, this._commands.converter, this._diagnostics, t));
              return this._proxy.$registerQuickFixSupport(n, e), this._createDisposable(n)
            }, e.prototype.$provideCodeActions = function(e, t, r) {
              return this._withAdapter(e, b, function(e) {
                return e.provideCodeActions(n.default.revive(t), r)
              })
            }, e.prototype.registerDocumentFormattingEditProvider = function(e, t) {
              var n = this._addNewAdapter(new C(this._documents, t));
              return this._proxy.$registerDocumentFormattingSupport(n, e), this._createDisposable(n)
            }, e.prototype.$provideDocumentFormattingEdits = function(e, t, r) {
              return this._withAdapter(e, C, function(e) {
                return e.provideDocumentFormattingEdits(n.default.revive(t), r)
              })
            }, e.prototype.registerDocumentRangeFormattingEditProvider = function(e, t) {
              var n = this._addNewAdapter(new S(this._documents, t));
              return this._proxy.$registerRangeFormattingSupport(n, e), this._createDisposable(n)
            }, e.prototype.$provideDocumentRangeFormattingEdits = function(e, t, r, i) {
              return this._withAdapter(e, S, function(e) {
                return e.provideDocumentRangeFormattingEdits(n.default.revive(t), r, i)
              })
            }, e.prototype.registerOnTypeFormattingEditProvider = function(e, t, n) {
              var r = this._addNewAdapter(new E(this._documents, t));
              return this._proxy.$registerOnTypeFormattingSupport(r, e, n), this._createDisposable(r)
            }, e.prototype.$provideOnTypeFormattingEdits = function(e, t, r, i, o) {
              return this._withAdapter(e, E, function(e) {
                return e.provideOnTypeFormattingEdits(n.default.revive(t), r, i, o)
              })
            }, e.prototype.registerWorkspaceSymbolProvider = function(e) {
              var t = this._addNewAdapter(new x(e));
              return this._proxy.$registerNavigateTypeSupport(t), this._createDisposable(t)
            }, e.prototype.$provideWorkspaceSymbols = function(e, t) {
              return this._withAdapter(e, x, function(e) {
                return e.provideWorkspaceSymbols(t)
              })
            }, e.prototype.$resolveWorkspaceSymbol = function(e, t) {
              return this._withAdapter(e, x, function(e) {
                return e.resolveWorkspaceSymbol(t)
              })
            }, e.prototype.$releaseWorkspaceSymbols = function(e, t) {
              this._withAdapter(e, x, function(e) {
                return e.releaseWorkspaceSymbols(t)
              })
            }, e.prototype.registerRenameProvider = function(e, t) {
              var n = this._addNewAdapter(new w(this._documents, t));
              return this._proxy.$registerRenameSupport(n, e), this._createDisposable(n)
            }, e.prototype.$provideRenameEdits = function(e, t, r, i) {
              return this._withAdapter(e, w, function(e) {
                return e.provideRenameEdits(n.default.revive(t), r, i)
              })
            }, e.prototype.registerCompletionItemProvider = function(e, t, n) {
              var r = this._addNewAdapter(new P(this._documents, this._commands.converter, t));
              return this._proxy.$registerSuggestSupport(r, e, n, P.supportsResolving(t)), this._createDisposable(r)
            }, e.prototype.$provideCompletionItems = function(e, t, r, i) {
              return this._withAdapter(e, P, function(e) {
                return e.provideCompletionItems(n.default.revive(t), r, i)
              })
            }, e.prototype.$resolveCompletionItem = function(e, t, r, i) {
              return this._withAdapter(e, P, function(e) {
                return e.resolveCompletionItem(n.default.revive(t), r, i)
              })
            }, e.prototype.$releaseCompletionItems = function(e, t) {
              this._withAdapter(e, P, function(e) {
                return e.releaseCompletionItems(t)
              })
            }, e.prototype.registerSignatureHelpProvider = function(e, t, n) {
              var r = this._addNewAdapter(new D(this._documents, t));
              return this._proxy.$registerSignatureHelpProvider(r, e, n), this._createDisposable(r)
            }, e.prototype.$provideSignatureHelp = function(e, t, r) {
              return this._withAdapter(e, D, function(e) {
                return e.provideSignatureHelp(n.default.revive(t), r)
              })
            }, e.prototype.registerDocumentLinkProvider = function(e, t) {
              var n = this._addNewAdapter(new T(this._documents, this._heapService, t));
              return this._proxy.$registerDocumentLinkProvider(n, e), this._createDisposable(n)
            }, e.prototype.$provideDocumentLinks = function(e, t) {
              return this._withAdapter(e, T, function(e) {
                return e.provideLinks(n.default.revive(t))
              })
            }, e.prototype.$resolveDocumentLink = function(e, t) {
              return this._withAdapter(e, T, function(e) {
                return e.resolveLink(t)
              })
            },
            e.prototype.registerColorProvider = function(e, t) {
              var n = this._addNewAdapter(new O(this._documents, t));
              return this._proxy.$registerDocumentColorProvider(n, e), this._createDisposable(n)
            }, e.prototype.$provideDocumentColors = function(e, t) {
              return this._withAdapter(e, O, function(e) {
                return e.provideColors(n.default.revive(t))
              })
            }, e.prototype.$provideColorPresentations = function(e, t, r) {
              return this._withAdapter(e, O, function(e) {
                return e.provideColorPresentations(n.default.revive(t), r)
              })
            }, e._serializeRegExp = function(e) {
              if (void 0 !== e) return null === e ? null : {
                pattern: e.source,
                flags: (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "")
              }
            }, e._serializeIndentationRule = function(t) {
              if (void 0 !== t) return null === t ? null : {
                decreaseIndentPattern: e._serializeRegExp(t.decreaseIndentPattern),
                increaseIndentPattern: e._serializeRegExp(t.increaseIndentPattern),
                indentNextLinePattern: e._serializeRegExp(t.indentNextLinePattern),
                unIndentedLinePattern: e._serializeRegExp(t.unIndentedLinePattern)
              }
            }, e._serializeOnEnterRule = function(t) {
              return {
                beforeText: e._serializeRegExp(t.beforeText),
                afterText: e._serializeRegExp(t.afterText),
                action: t.action
              }
            }, e._serializeOnEnterRules = function(t) {
              if (void 0 !== t) return null === t ? null : t.map(e._serializeOnEnterRule)
            }, e.prototype.setLanguageConfiguration = function(t, n) {
              var r = n.wordPattern;
              if (r && l.regExpLeadsToEndlessLoop(r)) throw new Error("Invalid language configuration: wordPattern '" + r + "' is not allowed to match the empty string.");
              r ? this._documents.setWordDefinitionFor(t, r) : this._documents.setWordDefinitionFor(t, null);
              var i = this._nextHandle(),
                o = {
                  comments: n.comments,
                  brackets: n.brackets,
                  wordPattern: e._serializeRegExp(n.wordPattern),
                  indentationRules: e._serializeIndentationRule(n.indentationRules),
                  onEnterRules: e._serializeOnEnterRules(n.onEnterRules),
                  __electricCharacterSupport: n.__electricCharacterSupport,
                  __characterPairSupport: n.__characterPairSupport
                };
              return this._proxy.$setLanguageConfiguration(i, t, o), this._createDisposable(i)
            }, e._handlePool = 0, e
        }();
      t.ExtHostLanguageFeatures = k
    }),
    define(e[160], t([1, 0, 19]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          this._handles = 0, this._proxy = e
        }
        return e.prototype.withProgress = function(e, t, r) {
          var i = this._handles++,
            o = t.title,
            s = t.location;
          return this._proxy.$startProgress(i, {
            location: n.ProgressLocation.from(s),
            title: o,
            tooltip: e.name
          }), this._withProgress(i, r)
        }, e.prototype._withProgress = function(e, t) {
          var n, r = this,
            i = {
              report: function(t) {
                r._proxy.$progressReport(e, t)
              }
            };
          try {
            n = t(i, null)
          } catch (t) {
            throw this._proxy.$progressEnd(e), t
          }
          return n.then(function(t) {
            return r._proxy.$progressEnd(e)
          }, function(t) {
            return r._proxy.$progressEnd(e)
          }), n
        }, e
      }();
      t.ExtHostProgress = r
    }), define(e[72], t([1, 0, 35, 11, 73, 2, 7, 19]), function(e, t, n, r, i, o, a, u) {
      "use strict";

      function c(e, t) {
        return void 0 === t && (t = "Refer to the documentation for further details."),
          function(n, r, i) {
            var o = i.value;
            return i.value = function() {
              for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
              return console.warn("[Deprecation Warning] method '" + e + "' is deprecated and should no longer be used. " + t), o.apply(this, n)
            }, i
          }
      }

      function l(e) {
        e.then(null, function(e) {
          console.warn(e)
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var d = function() {
        function e(t, n) {
          this.key = e._Keys.nextId(), this._proxy = t, this._proxy.$registerTextEditorDecorationType(this.key, n)
        }
        return e.prototype.dispose = function() {
          this._proxy.$removeTextEditorDecorationType(this.key)
        }, e._Keys = new i.IdGenerator("TextEditorDecorationType"), e
      }();
      t.TextEditorDecorationType = d;
      var f = function() {
        function e(e, t) {
          this._document = e, this._documentVersionId = e.version, this._collectedEdits = [], this._setEndOfLine = 0, this._undoStopBefore = t.undoStopBefore, this._undoStopAfter = t.undoStopAfter
        }
        return e.prototype.finalize = function() {
          return {
            documentVersionId: this._documentVersionId,
            edits: this._collectedEdits,
            setEndOfLine: this._setEndOfLine,
            undoStopBefore: this._undoStopBefore,
            undoStopAfter: this._undoStopAfter
          }
        }, e.prototype.replace = function(e, t) {
          var n = null;
          if (e instanceof a.Position) n = new a.Range(e, e);
          else {
            if (!(e instanceof a.Range)) throw new Error("Unrecognized location");
            n = e
          }
          this._pushEdit(n, t, !1)
        }, e.prototype.insert = function(e, t) {
          this._pushEdit(new a.Range(e, e), t, !0)
        }, e.prototype.delete = function(e) {
          var t = null;
          if (!(e instanceof a.Range)) throw new Error("Unrecognized location");
          t = e, this._pushEdit(t, null, !0)
        }, e.prototype._pushEdit = function(e, t, n) {
          var r = this._document.validateRange(e);
          this._collectedEdits.push({
            range: r,
            text: t,
            forceMoveMarkers: n
          })
        }, e.prototype.setEndOfLine = function(e) {
          if (e !== a.EndOfLine.LF && e !== a.EndOfLine.CRLF) throw r.illegalArgument("endOfLine");
          this._setEndOfLine = e
        }, e
      }();
      t.TextEditorEdit = f;
      var p = function() {
        function e(e, t, n) {
          this._proxy = e, this._id = t, this._accept(n)
        }
        return e.prototype._accept = function(e) {
          this._tabSize = e.tabSize, this._insertSpaces = e.insertSpaces, this._cursorStyle = e.cursorStyle, this._lineNumbers = e.lineNumbers
        }, Object.defineProperty(e.prototype, "tabSize", {
          get: function() {
            return this._tabSize
          },
          set: function(e) {
            var t = this._validateTabSize(e);
            if (null !== t) {
              if ("number" == typeof t) {
                if (this._tabSize === t) return;
                this._tabSize = t
              }
              l(this._proxy.$trySetOptions(this._id, {
                tabSize: t
              }))
            }
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._validateTabSize = function(e) {
          if ("auto" === e) return "auto";
          if ("number" == typeof e) {
            return (t = Math.floor(e)) > 0 ? t : null
          }
          if ("string" == typeof e) {
            var t = parseInt(e, 10);
            return isNaN(t) ? null : t > 0 ? t : null
          }
          return null
        }, Object.defineProperty(e.prototype, "insertSpaces", {
          get: function() {
            return this._insertSpaces
          },
          set: function(e) {
            var t = this._validateInsertSpaces(e);
            if ("boolean" == typeof t) {
              if (this._insertSpaces === t) return;
              this._insertSpaces = t
            }
            l(this._proxy.$trySetOptions(this._id, {
              insertSpaces: t
            }))
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._validateInsertSpaces = function(e) {
          return "auto" === e ? "auto" : "false" !== e && Boolean(e)
        }, Object.defineProperty(e.prototype, "cursorStyle", {
          get: function() {
            return this._cursorStyle
          },
          set: function(e) {
            this._cursorStyle !== e && (this._cursorStyle = e, l(this._proxy.$trySetOptions(this._id, {
              cursorStyle: e
            })))
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "lineNumbers", {
          get: function() {
            return this._lineNumbers
          },
          set: function(e) {
            this._lineNumbers !== e && (this._lineNumbers = e, l(this._proxy.$trySetOptions(this._id, {
              lineNumbers: e
            })))
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.assign = function(e) {
          var t = {},
            n = !1;
          if (void 0 !== e.tabSize) {
            var r = this._validateTabSize(e.tabSize);
            "auto" === r ? (n = !0, t.tabSize = r) : "number" == typeof r && this._tabSize !== r && (this._tabSize = r, n = !0, t.tabSize = r)
          }
          if (void 0 !== e.insertSpaces) {
            var i = this._validateInsertSpaces(e.insertSpaces);
            "auto" === i ? (n = !0, t.insertSpaces = i) : this._insertSpaces !== i && (this._insertSpaces = i, n = !0, t.insertSpaces = i)
          }
          void 0 !== e.cursorStyle && this._cursorStyle !== e.cursorStyle && (this._cursorStyle = e.cursorStyle, n = !0, t.cursorStyle = e.cursorStyle), void 0 !== e.lineNumbers && this._lineNumbers !== e.lineNumbers && (this._lineNumbers = e.lineNumbers, n = !0, t.lineNumbers = e.lineNumbers), n && l(this._proxy.$trySetOptions(this._id, t))
        }, e
      }();
      t.ExtHostTextEditorOptions = p;
      var h = function() {
        function e(e, t, n, r, i, o) {
          this._disposed = !1, this._proxy = e, this._id = t, this._documentData = n, this._selections = r, this._options = new p(this._proxy, this._id, i), this._viewColumn = o
        }
        return Object.defineProperty(e.prototype, "id", {
          get: function() {
            return this._id
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.dispose = function() {
          n.ok(!this._disposed), this._disposed = !0
        }, e.prototype.show = function(e) {
          this._proxy.$tryShowEditor(this._id, u.fromViewColumn(e))
        }, e.prototype.hide = function() {
          this._proxy.$tryHideEditor(this._id)
        }, Object.defineProperty(e.prototype, "document", {
          get: function() {
            return this._documentData.document
          },
          set: function(e) {
            throw r.readonly("document")
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "options", {
          get: function() {
            return this._options
          },
          set: function(e) {
            this._disposed || this._options.assign(e)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._acceptOptions = function(e) {
          n.ok(!this._disposed), this._options._accept(e)
        }, Object.defineProperty(e.prototype, "viewColumn", {
          get: function() {
            return this._viewColumn
          },
          set: function(e) {
            throw r.readonly("viewColumn")
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._acceptViewColumn = function(e) {
          n.ok(!this._disposed), this._viewColumn = e
        }, Object.defineProperty(e.prototype, "selection", {
          get: function() {
            return this._selections && this._selections[0]
          },
          set: function(e) {
            if (!(e instanceof a.Selection)) throw r.illegalArgument("selection");
            this._selections = [e], this._trySetSelection()
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "selections", {
          get: function() {
            return this._selections
          },
          set: function(e) {
            if (!Array.isArray(e) || e.some(function(e) {
                return !(e instanceof a.Selection)
              })) throw r.illegalArgument("selections");
            this._selections = e, this._trySetSelection()
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.setDecorations = function(e, t) {
          var n = this;
          this._runOnProxy(function() {
            if (u.isDecorationOptionsArr(t)) return n._proxy.$trySetDecorations(n._id, e.key, u.fromRangeOrRangeWithMessage(t));
            for (var r = new Array(4 * t.length), i = 0, o = t.length; i < o; i++) {
              var s = t[i];
              r[4 * i] = s.start.line + 1, r[4 * i + 1] = s.start.character + 1, r[4 * i + 2] = s.end.line + 1, r[4 * i + 3] = s.end.character + 1
            }
            return n._proxy.$trySetDecorationsFast(n._id, e.key, r)
          })
        }, e.prototype.revealRange = function(e, t) {
          var n = this;
          this._runOnProxy(function() {
            return n._proxy.$tryRevealRange(n._id, u.fromRange(e), t || a.TextEditorRevealType.Default)
          })
        }, e.prototype._trySetSelection = function() {
          var e = this,
            t = this._selections.map(u.fromSelection);
          return this._runOnProxy(function() {
            return e._proxy.$trySetSelections(e._id, t)
          })
        }, e.prototype._acceptSelections = function(e) {
          n.ok(!this._disposed), this._selections = e
        }, e.prototype.edit = function(e, t) {
          if (void 0 === t && (t = {
              undoStopBefore: !0,
              undoStopAfter: !0
            }), this._disposed) return o.TPromise.wrapError(new Error("TextEditor#edit not possible on closed editors"));
          var n = new f(this._documentData.document, t);
          return e(n), this._applyEdit(n)
        }, e.prototype._applyEdit = function(e) {
          var t = e.finalize(),
            n = t.edits.map(function(e) {
              return e.range
            });
          n.sort(function(e, t) {
            return e.end.line === t.end.line ? e.end.character === t.end.character ? e.start.line === t.start.line ? e.start.character - t.start.character : e.start.line - t.start.line : e.end.character - t.end.character : e.end.line - t.end.line
          });
          for (var r = 0, i = n.length - 1; r < i; r++) {
            var s = n[r].end;
            if (n[r + 1].start.isBefore(s)) return o.TPromise.wrapError(new Error("Overlapping ranges are not allowed!"))
          }
          var a = t.edits.map(function(e) {
            return {
              range: u.fromRange(e.range),
              text: e.text,
              forceMoveMarkers: e.forceMoveMarkers
            }
          });
          return this._proxy.$tryApplyEdits(this._id, t.documentVersionId, a, {
            setEndOfLine: t.setEndOfLine,
            undoStopBefore: t.undoStopBefore,
            undoStopAfter: t.undoStopAfter
          })
        }, e.prototype.insertSnippet = function(e, t, n) {
          if (void 0 === n && (n = {
              undoStopBefore: !0,
              undoStopAfter: !0
            }), this._disposed) return o.TPromise.wrapError(new Error("TextEditor#insertSnippet not possible on closed editors"));
          var r;
          if (!t || Array.isArray(t) && 0 === t.length) r = this._selections.map(u.fromRange);
          else if (t instanceof a.Position) {
            var i = u.fromPosition(t);
            r = [{
              startLineNumber: f = i.lineNumber,
              startColumn: p = i.column,
              endLineNumber: f,
              endColumn: p
            }]
          } else if (t instanceof a.Range) r = [u.fromRange(t)];
          else {
            r = [];
            for (var s = 0, c = t; s < c.length; s++) {
              var l = c[s];
              if (l instanceof a.Range) r.push(u.fromRange(l));
              else {
                var d = u.fromPosition(l),
                  f = d.lineNumber,
                  p = d.column;
                r.push({
                  startLineNumber: f,
                  startColumn: p,
                  endLineNumber: f,
                  endColumn: p
                })
              }
            }
          }
          return this._proxy.$tryInsertSnippet(this._id, e.value, r, n)
        }, e.prototype._runOnProxy = function(e) {
          var t = this;
          return this._disposed ? (console.warn("TextEditor is closed/disposed"), o.TPromise.as(void 0)) : e().then(function() {
            return t
          }, function(e) {
            return e instanceof Error && "DISPOSED" === e.name || console.warn(e), null
          })
        }, s([c("TextEditor.show")], e.prototype, "show", null), s([c("TextEditor.hide")], e.prototype, "hide", null), e
      }();
      t.ExtHostTextEditor = h
    }), define(e[162], t([1, 0, 4, 14, 5, 66, 72, 110, 19, 3]), function(e, t, n, r, i, o, s, a, u, c) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = function() {
        function e(e) {
          this._mainContext = e, this._editors = new Map, this._documents = new Map,
            this._onDidAddDocuments = new n.Emitter, this._onDidRemoveDocuments = new n.Emitter, this._onDidChangeVisibleTextEditors = new n.Emitter, this._onDidChangeActiveTextEditor = new n.Emitter, this.onDidAddDocuments = this._onDidAddDocuments.event, this.onDidRemoveDocuments = this._onDidRemoveDocuments.event, this.onDidChangeVisibleTextEditors = this._onDidChangeVisibleTextEditors.event, this.onDidChangeActiveTextEditor = this._onDidChangeActiveTextEditor.event
        }
        return e.prototype.$acceptDocumentsAndEditorsDelta = function(e) {
          var t = [],
            n = [],
            l = [];
          if (e.removedDocuments)
            for (var d = 0, f = e.removedDocuments; d < f.length; d++) {
              var p = f[d],
                h = this._documents.get(p);
              this._documents.delete(p), t.push(h)
            }
          if (e.addedDocuments)
            for (var g = 0, m = e.addedDocuments; g < m.length; g++) {
              var h = m[g],
                v = c.default.revive(h.uri);
              a.ok(!this._documents.has(v.toString()), "document '" + v + " already exists!'");
              E = new o.ExtHostDocumentData(this._mainContext.getProxy(i.MainContext.MainThreadDocuments), v, h.lines, h.EOL, h.modeId, h.versionId, h.isDirty);
              this._documents.set(v.toString(), E),
                n.push(E)
            }
          if (e.removedEditors)
            for (var y = 0, _ = e.removedEditors; y < _.length; y++) {
              var p = _[y],
                b = this._editors.get(p);
              this._editors.delete(p), l.push(b)
            }
          if (e.addedEditors)
            for (var C = 0, S = e.addedEditors; C < S.length; C++) {
              var h = S[C],
                v = c.default.revive(h.documentUri);
              a.ok(this._documents.has(v.toString()), "document '" + v + "' does not exist"), a.ok(!this._editors.has(h.id), "editor '" + h.id + "' already exists!");
              var E = this._documents.get(v.toString()),
                b = new s.ExtHostTextEditor(this._mainContext.getProxy(i.MainContext.MainThreadEditors), h.id, E, h.selections.map(u.toSelection), h.options, u.toViewColumn(h.editorPosition));
              this._editors.set(h.id, b)
            }
          void 0 !== e.newActiveEditor && (a.ok(null === e.newActiveEditor || this._editors.has(e.newActiveEditor), "active editor '" + e.newActiveEditor + "' does not exist"), this._activeEditorId = e.newActiveEditor), r.dispose(t), r.dispose(l), e.removedDocuments && this._onDidRemoveDocuments.fire(t), e.addedDocuments && this._onDidAddDocuments.fire(n),
            (e.removedEditors || e.addedEditors) && this._onDidChangeVisibleTextEditors.fire(this.allEditors()), void 0 !== e.newActiveEditor && this._onDidChangeActiveTextEditor.fire(this.activeEditor())
        }, e.prototype.getDocument = function(e) {
          return this._documents.get(e)
        }, e.prototype.allDocuments = function() {
          var e = [];
          return this._documents.forEach(function(t) {
            return e.push(t)
          }), e
        }, e.prototype.getEditor = function(e) {
          return this._editors.get(e)
        }, e.prototype.activeEditor = function() {
          return this._activeEditorId ? this._editors.get(this._activeEditorId) : void 0
        }, e.prototype.allEditors = function() {
          var e = [];
          return this._editors.forEach(function(t) {
            return e.push(t)
          }), e
        }, e
      }();
      t.ExtHostDocumentsAndEditors = l
    }), define(e[163], t([1, 0, 4, 9, 7, 19, 72, 34, 5]), function(e, t, n, r, i, o, s, a, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = function() {
        function e(e, t) {
          var r = this;
          this._onDidChangeTextEditorSelection = new n.Emitter, this._onDidChangeTextEditorOptions = new n.Emitter, this._onDidChangeTextEditorViewColumn = new n.Emitter,
            this._onDidChangeActiveTextEditor = new n.Emitter, this._onDidChangeVisibleTextEditors = new n.Emitter, this.onDidChangeTextEditorSelection = this._onDidChangeTextEditorSelection.event, this.onDidChangeTextEditorOptions = this._onDidChangeTextEditorOptions.event, this.onDidChangeTextEditorViewColumn = this._onDidChangeTextEditorViewColumn.event, this.onDidChangeActiveTextEditor = this._onDidChangeActiveTextEditor.event, this.onDidChangeVisibleTextEditors = this._onDidChangeVisibleTextEditors.event, this._proxy = e.getProxy(u.MainContext.MainThreadEditors), this._extHostDocumentsAndEditors = t, this._extHostDocumentsAndEditors.onDidChangeVisibleTextEditors(function(e) {
              return r._onDidChangeVisibleTextEditors.fire(e)
            }), this._extHostDocumentsAndEditors.onDidChangeActiveTextEditor(function(e) {
              return r._onDidChangeActiveTextEditor.fire(e)
            })
        }
        return e.prototype.getActiveTextEditor = function() {
          return this._extHostDocumentsAndEditors.activeEditor()
        }, e.prototype.getVisibleTextEditors = function() {
          return this._extHostDocumentsAndEditors.allEditors()
        }, e.prototype.showTextDocument = function(e, t, n) {
          var r, i = this;
          return r = "number" == typeof t ? {
            position: o.fromViewColumn(t),
            preserveFocus: n
          } : "object" == typeof t ? {
            position: o.fromViewColumn(t.viewColumn),
            preserveFocus: t.preserveFocus,
            selection: "object" == typeof t.selection ? o.fromRange(t.selection) : void 0,
            pinned: "boolean" == typeof t.preview ? !t.preview : void 0
          } : {
            position: a.Position.ONE,
            preserveFocus: !1
          }, this._proxy.$tryShowTextDocument(e.uri, r).then(function(t) {
            var n = i._extHostDocumentsAndEditors.getEditor(t);
            if (n) return n;
            throw new Error("Failed to show text document " + e.uri.toString() + ", should show in editor #" + t)
          })
        }, e.prototype.createTextEditorDecorationType = function(e) {
          return new s.TextEditorDecorationType(this._proxy, e)
        }, e.prototype.applyWorkspaceEdit = function(e) {
          for (var t = [], n = 0, r = e.entries(); n < r.length; n++) {
            var i = r[n],
              s = i[0],
              a = i[1],
              u = this._extHostDocumentsAndEditors.getDocument(s.toString()),
              c = void 0;
            u && (c = u.version);
            for (var l = {
                resource: s,
                modelVersionId: c,
                edits: []
              }, d = 0, f = a; d < f.length; d++) {
              var p = f[d];
              l.edits.push({
                newText: p.newText,
                newEol: o.EndOfLine.from(p.newEol),
                range: p.range && o.fromRange(p.range)
              })
            }
            t.push(l)
          }
          return this._proxy.$tryApplyWorkspaceEdit(t)
        }, e.prototype.$acceptOptionsChanged = function(e, t) {
          var n = this._extHostDocumentsAndEditors.getEditor(e);
          n._acceptOptions(t), this._onDidChangeTextEditorOptions.fire({
            textEditor: n,
            options: t
          })
        }, e.prototype.$acceptSelectionsChanged = function(e, t) {
          var n = i.TextEditorSelectionChangeKind.fromValue(t.source),
            r = t.selections.map(o.toSelection),
            s = this._extHostDocumentsAndEditors.getEditor(e);
          s._acceptSelections(r), this._onDidChangeTextEditorSelection.fire({
            textEditor: s,
            selections: r,
            kind: n
          })
        }, e.prototype.$acceptEditorPositionData = function(e) {
          for (var t in e) {
            var n = this._extHostDocumentsAndEditors.getEditor(t),
              r = o.toViewColumn(e[t]);
            n.viewColumn !== r && (n._acceptViewColumn(r), this._onDidChangeTextEditorViewColumn.fire({
              textEditor: n,
              viewColumn: r
            }))
          }
        }, e.prototype.getDiffInformation = function(e) {
          return r.toThenable(this._proxy.$getDiffInformation(e))
        }, e
      }();
      t.ExtHostEditors = c
    });
  i = this && this.__generator || function(e, t) {
    function n(n) {
      return function(s) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return a.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                a.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  a = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  a.label = n[1];
                  break
                }
                if (6 === n[0] && a.label < o[1]) {
                  a.label = o[1], o = n;
                  break
                }
                if (o && a.label < o[2]) {
                  a.label = o[2], a.ops.push(n);
                  break
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue
            }
            n = t.call(e, a)
          } catch (e) {
            n = [6, e], i = 0
          } finally {
            r = o = 0
          }
          if (5 & n[0]) throw n[1];
          return {
            value: n[0] ? n[1] : void 0,
            done: !0
          }
        }([n, s])
      }
    }
    var r, i, o, s, a = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return s = {
        next: n(0),
        throw: n(1),
        return: n(2)
      },
      "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
      }), s
  };
  define(e[164], t([1, 0, 4, 48, 10, 11, 56, 55, 122, 162, 158, 137, 157, 69, 119, 142, 160, 143, 117, 144, 156, 141, 147, 140, 163, 139, 159, 155, 146, 133, 148, 7, 3, 24, 2, 41, 13, 5, 25, 78, 136, 138, 31, 134, 19, 36, 16, 26]), function(e, t, n, o, s, a, u, c, l, d, f, p, h, g, m, v, y, _, b, C, S, E, x, w, P, D, T, O, k, I, L, A, R, M, N, F, j, H, W, B, V, U, z, K, q, $, G, J) {
    "use strict";

    function Q(e) {
      throw new Error("[" + e.id + "]: Proposed API is only available when running out of dev or with the following command line switch: --enable-proposed-api " + e.id)
    }

    function X(e, t) {
      return e.enableProposedApi ? t : Q
    }

    function Y(t, n) {
      return t.getExtensionPathIndex().then(function(t) {
        return function(t, n) {
          var r, i = new Map,
            o = e.__$__nodeRequire("module"),
            s = o._load;
          o._load = function(e, o, a) {
            if ("vscode" !== e) return s.apply(this, arguments);
            var u = n.findSubstr(o.filename);
            if (u) {
              var c = i.get(u.id);
              return c || (c = t(u), i.set(u.id, c)), c
            }
            return r || (r = t(ee)), r
          }
        }(n, t)
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.checkProposedApiEnabled = function(e) {
      e.enableProposedApi || Q(e)
    }, t.createApiFactory = function(e, t, j, $, Q, Y) {
      var ee = t.set(H.ExtHostContext.ExtHostHeapService, new b.ExtHostHeapService),
        te = t.set(H.ExtHostContext.ExtHostDecorations, new K.ExtHostDecorations(t)),
        ne = t.set(H.ExtHostContext.ExtHostDocumentsAndEditors, new d.ExtHostDocumentsAndEditors(t)),
        re = t.set(H.ExtHostContext.ExtHostDocuments, new f.ExtHostDocuments(t, ne)),
        ie = t.set(H.ExtHostContext.ExtHostDocumentContentProviders, new p.ExtHostDocumentContentProvider(t, ne)),
        oe = t.set(H.ExtHostContext.ExtHostDocumentSaveParticipant, new h.ExtHostDocumentSaveParticipant(Y, re, t.getProxy(H.MainContext.MainThreadEditors))),
        se = t.set(H.ExtHostContext.ExtHostEditors, new P.ExtHostEditors(t, ne)),
        ae = t.set(H.ExtHostContext.ExtHostCommands, new S.ExtHostCommands(t, ee, Y)),
        ue = t.set(H.ExtHostContext.ExtHostTreeViews, new m.ExtHostTreeViews(t.getProxy(H.MainContext.MainThreadTreeViews), ae));
      t.set(H.ExtHostContext.ExtHostWorkspace, j);
      var ce = t.set(H.ExtHostContext.ExtHostDebugService, new I.ExtHostDebugService(t, j));
      t.set(H.ExtHostContext.ExtHostConfiguration, $);
      var le = t.set(H.ExtHostContext.ExtHostDiagnostics, new g.ExtHostDiagnostics(t)),
        de = t.set(H.ExtHostContext.ExtHostLanguageFeatures, new T.ExtHostLanguageFeatures(t, re, ae, ee, le)),
        fe = t.set(H.ExtHostContext.ExtHostFileSystem, new U.ExtHostFileSystem(t)),
        pe = t.set(H.ExtHostContext.ExtHostFileSystemEventService, new l.ExtHostFileSystemEventService),
        he = t.set(H.ExtHostContext.ExtHostQuickOpen, new v.ExtHostQuickOpen(t, j, ae)),
        ge = t.set(H.ExtHostContext.ExtHostTerminalService, new x.ExtHostTerminalService(t)),
        me = t.set(H.ExtHostContext.ExtHostSCM, new _.ExtHostSCM(t, ae, Y)),
        ve = t.set(H.ExtHostContext.ExtHostTask, new k.ExtHostTask(t, j)),
        ye = t.set(H.ExtHostContext.ExtHostWindow, new L.ExtHostWindow(t));
      t.set(H.ExtHostContext.ExtHostExtensionService, Q);
      var _e = Object.keys(H.ExtHostContext).map(function(e) {
        return H.ExtHostContext[e]
      });
      t.assertRegistered(_e);
      var be = new w.ExtHostMessageService(t),
        Ce = new V.ExtHostDialogs(t),
        Se = new C.ExtHostStatusBar(t),
        Ee = new y.ExtHostProgress(t.getProxy(H.MainContext.MainThreadProgress)),
        xe = new E.ExtHostOutputService(t),
        we = new D.ExtHostLanguages(t);
      return O.ExtHostApiCommands.register(ae),
        function(t) {
          var l = this;
          !G.isFalsyOrEmpty(u.default.extensionAllowedProposedApi) && u.default.extensionAllowedProposedApi.indexOf(t.id) >= 0 ? t.enableProposedApi = !0 : t.enableProposedApi && !t.isBuiltin && (!e.environment.enableProposedApiForAll && e.environment.enableProposedApiFor.indexOf(t.id) < 0 ? (t.enableProposedApi = !1, console.error("Extension '" + t.id + " cannot use PROPOSED API (must started out of dev or enabled via --enable-proposed-api)")) : console.warn("Extension '" + t.id + "' uses PROPOSED API which is subject to change and removal without notice."));
          var d = {
              registerCommand: function(e, t, n) {
                return ae.registerCommand(e, t, n)
              },
              registerTextEditorCommand: function(e, t, n) {
                return ae.registerCommand(e, function() {
                  for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                  var o = se.getActiveTextEditor();
                  if (o) return o.edit(function(e) {
                    r.unshift(o, e), t.apply(n, r)
                  }).then(function(t) {
                    t || console.warn("Edits from command " + e + " were not applied.")
                  }, function(t) {
                    console.warn("An error occurred while running command " + e, t)
                  });
                  console.warn("Cannot execute " + e + " because there is no active text editor.")
                })
              },
              registerDiffInformationCommand: X(t, function(e, t, n) {
                return ae.registerCommand(e, function() {
                  for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
                  return r(l, void 0, void 0, function() {
                    var r, s;
                    return i(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return (r = se.getActiveTextEditor()) ? [4, se.getDiffInformation(r.id)] : (console.warn("Cannot execute " + e + " because there is no active text editor."), [2, void 0]);
                        case 1:
                          return s = i.sent(), t.apply(n, [s].concat(o)), [2]
                      }
                    })
                  })
                })
              }),
              executeCommand: function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return ae.executeCommand.apply(ae, [e].concat(t))
              },
              getCommands: function(e) {
                return void 0 === e && (e = !1), ae.getCommands(e)
              }
            },
            f = Object.freeze({
              get machineId() {
                return e.telemetryInfo.machineId
              },
              get sessionId() {
                return e.telemetryInfo.sessionId
              },
              get language() {
                return s.language
              },
              get appName() {
                return u.default.nameLong
              },
              get appRoot() {
                return e.environment.appRoot
              }
            }),
            p = {
              getExtension: function(e) {
                var t = Q.getExtensionDescription(e);
                if (t) return new Z(Q, t)
              },
              get all() {
                return Q.getAllExtensionDescriptions().map(function(e) {
                  return new Z(Q, e)
                })
              }
            },
            h = {
              createDiagnosticCollection: function(e) {
                return le.createDiagnosticCollection(e)
              },
              getLanguages: function() {
                return we.getLanguages()
              },
              match: function(e, t) {
                return o.score(q.toLanguageSelector(e), t.uri, t.languageId)
              },
              registerCodeActionsProvider: function(e, t) {
                return de.registerCodeActionProvider(e, t)
              },
              registerCodeLensProvider: function(e, t) {
                return de.registerCodeLensProvider(e, t)
              },
              registerDefinitionProvider: function(e, t) {
                return de.registerDefinitionProvider(e, t)
              },
              registerImplementationProvider: function(e, t) {
                return de.registerImplementationProvider(e, t)
              },
              registerTypeDefinitionProvider: function(e, t) {
                return de.registerTypeDefinitionProvider(e, t)
              },
              registerHoverProvider: function(e, n) {
                return de.registerHoverProvider(e, n, t.id)
              },
              registerDocumentHighlightProvider: function(e, t) {
                return de.registerDocumentHighlightProvider(e, t)
              },
              registerReferenceProvider: function(e, t) {
                return de.registerReferenceProvider(e, t)
              },
              registerRenameProvider: function(e, t) {
                return de.registerRenameProvider(e, t)
              },
              registerDocumentSymbolProvider: function(e, t) {
                return de.registerDocumentSymbolProvider(e, t)
              },
              registerWorkspaceSymbolProvider: function(e) {
                return de.registerWorkspaceSymbolProvider(e)
              },
              registerDocumentFormattingEditProvider: function(e, t) {
                return de.registerDocumentFormattingEditProvider(e, t)
              },
              registerDocumentRangeFormattingEditProvider: function(e, t) {
                return de.registerDocumentRangeFormattingEditProvider(e, t)
              },
              registerOnTypeFormattingEditProvider: function(e, t, n) {
                for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                return de.registerOnTypeFormattingEditProvider(e, t, [n].concat(r))
              },
              registerSignatureHelpProvider: function(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                return de.registerSignatureHelpProvider(e, t, n)
              },
              registerCompletionItemProvider: function(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                return de.registerCompletionItemProvider(e, t, n)
              },
              registerDocumentLinkProvider: function(e, t) {
                return de.registerDocumentLinkProvider(e, t)
              },
              registerColorProvider: function(e, t) {
                return de.registerColorProvider(e, t)
              },
              setLanguageConfiguration: function(e, t) {
                return de.setLanguageConfiguration(e, t)
              }
            },
            g = {
              get activeTextEditor() {
                return se.getActiveTextEditor()
              },
              get visibleTextEditors() {
                return se.getVisibleTextEditors()
              },
              showTextDocument: function(e, t, n) {
                return (R.default.isUri(e) ? N.TPromise.wrap(m.openTextDocument(e)) : N.TPromise.wrap(e)).then(function(e) {
                  return se.showTextDocument(e, t, n)
                })
              },
              createTextEditorDecorationType: function(e) {
                return se.createTextEditorDecorationType(e)
              },
              onDidChangeActiveTextEditor: function(e, t, n) {
                return se.onDidChangeActiveTextEditor(e, t, n)
              },
              onDidChangeVisibleTextEditors: function(e, t, n) {
                return se.onDidChangeVisibleTextEditors(e, t, n)
              },
              onDidChangeTextEditorSelection: function(e, t, n) {
                return se.onDidChangeTextEditorSelection(e, t, n)
              },
              onDidChangeTextEditorOptions: function(e, t, n) {
                return se.onDidChangeTextEditorOptions(e, t, n)
              },
              onDidChangeTextEditorViewColumn: function(e, t, n) {
                return se.onDidChangeTextEditorViewColumn(e, t, n)
              },
              onDidCloseTerminal: function(e, t, n) {
                return ge.onDidCloseTerminal(e, t, n)
              },
              get state() {
                return ye.state
              },
              onDidChangeWindowState: function(e, t, n) {
                return ye.onDidChangeWindowState(e, t, n)
              },
              showInformationMessage: function(e, n) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                return be.showMessage(t, M.default.Info, e, n, r)
              },
              showWarningMessage: function(e, n) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                return be.showMessage(t, M.default.Warning, e, n, r)
              },
              showErrorMessage: function(e, n) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                return be.showMessage(t, M.default.Error, e, n, r)
              },
              showQuickPick: function(e, t, n) {
                return he.showQuickPick(e, t, n)
              },
              showWorkspaceFolderPick: function(e) {
                return he.showWorkspaceFolderPick(e)
              },
              showInputBox: function(e, t) {
                return he.showInput(e, t)
              },
              showOpenDialog: function(e) {
                return Ce.showOpenDialog(e)
              },
              showSaveDialog: function(e) {
                return Ce.showSaveDialog(e)
              },
              createStatusBarItem: function(e, n) {
                return Se.createStatusBarEntry(t.id, e, n)
              },
              setStatusBarMessage: function(e, t) {
                return Se.setStatusBarMessage(e, t)
              },
              withScmProgress: function(e) {
                return console.warn("[Deprecation Warning] function 'withScmProgress' is deprecated and should no longer be used. Use 'withProgress' instead."), Ee.withProgress(t, {
                  location: A.ProgressLocation.SourceControl
                }, function(t, n) {
                  return e({
                    report: function(e) {}
                  })
                })
              },
              withProgress: function(e, n) {
                return Ee.withProgress(t, e, n)
              },
              createOutputChannel: function(e) {
                return xe.createOutputChannel(e)
              },
              createTerminal: function(e, t, n) {
                return "object" == typeof e ? ge.createTerminalFromOptions(e) : ge.createTerminal(e, t, n)
              },
              registerTreeDataProvider: function(e, t) {
                return ue.registerTreeDataProvider(e, t)
              },
              sampleFunction: X(t, function() {
                return be.showMessage(t, M.default.Info, "Hello Proposed Api!", {}, [])
              }),
              registerDecorationProvider: X(t, function(e) {
                return te.registerDecorationProvider(e, t.id)
              })
            },
            m = {
              get rootPath() {
                return j.getPath()
              },
              set rootPath(e) {
                throw a.readonly()
              },
              getWorkspaceFolder: function(e) {
                return j.getWorkspaceFolder(e)
              },
              get workspaceFolders() {
                return j.getWorkspaceFolders()
              },
              get name() {
                return j.workspace ? j.workspace.name : void 0
              },
              set name(e) {
                throw a.readonly()
              },
              onDidChangeWorkspaceFolders: function(e, t, n) {
                return j.onDidChangeWorkspace(e, t, n)
              },
              asRelativePath: function(e, t) {
                return j.getRelativePath(e, t)
              },
              findFiles: function(e, t, n, r) {
                return j.findFiles(q.toGlobPattern(e), q.toGlobPattern(t), n, r)
              },
              saveAll: function(e) {
                return j.saveAll(e)
              },
              applyEdit: function(e) {
                return se.applyWorkspaceEdit(e)
              },
              createFileSystemWatcher: function(e, t, n, r) {
                return pe.createFileSystemWatcher(q.toGlobPattern(e), t, n, r)
              },
              get textDocuments() {
                return re.getAllDocumentData().map(function(e) {
                  return e.document
                })
              },
              set textDocuments(e) {
                throw a.readonly()
              },
              openTextDocument: function(e) {
                var t, n = e;
                if ("string" == typeof e) t = N.TPromise.as(R.default.file(e));
                else if (e instanceof R.default) t = N.TPromise.as(e);
                else {
                  if (n && "object" != typeof n) throw new Error("illegal argument - uriOrFileNameOrOptions");
                  t = re.createDocumentData(n)
                }
                return t.then(function(e) {
                  return re.ensureDocumentData(e).then(function() {
                    var t = re.getDocumentData(e);
                    return t && t.document
                  })
                })
              },
              onDidOpenTextDocument: function(e, t, n) {
                return re.onDidAddDocument(e, t, n)
              },
              onDidCloseTextDocument: function(e, t, n) {
                return re.onDidRemoveDocument(e, t, n)
              },
              onDidChangeTextDocument: function(e, t, n) {
                return re.onDidChangeDocument(e, t, n)
              },
              onDidSaveTextDocument: function(e, t, n) {
                return re.onDidSaveDocument(e, t, n)
              },
              onWillSaveTextDocument: function(e, n, r) {
                return oe.getOnWillSaveTextDocumentEvent(t)(e, n, r)
              },
              onDidChangeConfiguration: function(e, t, n) {
                return $.onDidChangeConfiguration(e, t, n)
              },
              getConfiguration: function(e, n) {
                return n = 1 === arguments.length ? void 0 : n, $.getConfiguration(e, n, t.id)
              },
              registerTextDocumentContentProvider: function(e, t) {
                return ie.registerTextDocumentContentProvider(e, t)
              },
              registerTaskProvider: function(e, n) {
                return ve.registerTaskProvider(t, n)
              },
              registerFileSystemProvider: X(t, function(e, t) {
                return fe.registerFileSystemProvider(e, t)
              })
            },
            v = {
              get inputBox() {
                return me.getLastInputBox(t)
              },
              createSourceControl: function(e, n, r) {
                return me.createSourceControl(t, e, n, r)
              }
            },
            y = {
              get activeDebugSession() {
                return ce.activeDebugSession
              },
              get activeDebugConsole() {
                return ce.activeDebugConsole
              },
              get breakpoints() {
                return ce.breakpoints
              },
              onDidStartDebugSession: function(e, t, n) {
                return ce.onDidStartDebugSession(e, t, n)
              },
              onDidTerminateDebugSession: function(e, t, n) {
                return ce.onDidTerminateDebugSession(e, t, n)
              },
              onDidChangeActiveDebugSession: function(e, t, n) {
                return ce.onDidChangeActiveDebugSession(e, t, n)
              },
              onDidReceiveDebugSessionCustomEvent: function(e, t, n) {
                return ce.onDidReceiveDebugSessionCustomEvent(e, t, n)
              },
              onDidChangeBreakpoints: X(t, function(e, t, n) {
                return ce.onDidChangeBreakpoints(e, t, n)
              }),
              startDebugging: function(e, t) {
                return ce.startDebugging(e, t)
              },
              registerDebugConfigurationProvider: function(e, t) {
                return ce.registerDebugConfigurationProvider(e, t)
              }
            };
          return {
            version: c.default.version,
            commands: d,
            env: f,
            extensions: p,
            languages: h,
            window: g,
            workspace: m,
            scm: v,
            debug: y,
            Breakpoint: A.Breakpoint,
            CancellationTokenSource: F.CancellationTokenSource,
            CodeAction: A.CodeAction,
            CodeLens: A.CodeLens,
            Color: A.Color,
            ColorPresentation: A.ColorPresentation,
            ColorInformation: A.ColorInformation,
            EndOfLine: A.EndOfLine,
            CompletionItem: A.CompletionItem,
            CompletionItemKind: A.CompletionItemKind,
            CompletionList: A.CompletionList,
            CompletionTriggerKind: A.CompletionTriggerKind,
            Diagnostic: A.Diagnostic,
            DiagnosticSeverity: A.DiagnosticSeverity,
            Disposable: A.Disposable,
            DocumentHighlight: A.DocumentHighlight,
            DocumentHighlightKind: A.DocumentHighlightKind,
            DocumentLink: A.DocumentLink,
            EventEmitter: n.Emitter,
            FunctionBreakpoint: A.FunctionBreakpoint,
            Hover: A.Hover,
            IndentAction: W.IndentAction,
            Location: A.Location,
            LogLevel: A.LogLevel,
            MarkdownString: A.MarkdownString,
            OverviewRulerLane: J.OverviewRulerLane,
            ParameterInformation: A.ParameterInformation,
            Position: A.Position,
            Range: A.Range,
            Selection: A.Selection,
            SignatureHelp: A.SignatureHelp,
            SignatureInformation: A.SignatureInformation,
            SnippetString: A.SnippetString,
            SourceBreakpoint: A.SourceBreakpoint,
            StatusBarAlignment: A.StatusBarAlignment,
            SymbolInformation: A.SymbolInformation,
            SymbolKind: A.SymbolKind,
            TextDocumentSaveReason: A.TextDocumentSaveReason,
            TextEdit: A.TextEdit,
            TextEditorCursorStyle: B.TextEditorCursorStyle,
            TextEditorLineNumbersStyle: A.TextEditorLineNumbersStyle,
            TextEditorRevealType: A.TextEditorRevealType,
            TextEditorSelectionChangeKind: A.TextEditorSelectionChangeKind,
            DecorationRangeBehavior: A.DecorationRangeBehavior,
            Uri: R.default,
            ViewColumn: A.ViewColumn,
            WorkspaceEdit: A.WorkspaceEdit,
            ProgressLocation: A.ProgressLocation,
            TreeItemCollapsibleState: A.TreeItemCollapsibleState,
            TreeItem: A.TreeItem,
            ThemeColor: A.ThemeColor,
            TaskRevealKind: A.TaskRevealKind,
            TaskPanelKind: A.TaskPanelKind,
            TaskGroup: A.TaskGroup,
            ProcessExecution: A.ProcessExecution,
            ShellExecution: A.ShellExecution,
            TaskScope: A.TaskScope,
            Task: A.Task,
            ConfigurationTarget: A.ConfigurationTarget,
            RelativePattern: A.RelativePattern,
            FileChangeType: z.FileChangeType,
            FileType: z.FileType
          }
        }
    };
    var Z = function() {
      function e(e, t) {
        this._extensionService = e, this.id = t.id, this.extensionPath = j.normalize(t.extensionFolderPath, !0), this.packageJSON = t
      }
      return Object.defineProperty(e.prototype, "isActive", {
        get: function() {
          return this._extensionService.isActivated(this.id)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "exports", {
        get: function() {
          return this._extensionService.getExtensionExports(this.id)
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.activate = function() {
        var e = this;
        return this._extensionService.activateById(this.id, new $.ExtensionActivatedByAPI(!1)).then(function() {
          return e.exports
        })
      }, e
    }();
    t.initializeExtensionApi = Y;
    var ee = {
      id: "nullExtensionDescription",
      name: "Null Extension Description",
      publisher: "vscode",
      activationEvents: void 0,
      contributes: void 0,
      enableProposedApi: !1,
      engines: void 0,
      extensionDependencies: void 0,
      extensionFolderPath: void 0,
      isBuiltin: !1,
      main: void 0,
      version: void 0
    }
  }), define(e[165], t([1, 0, 14, 15, 42, 24, 2, 129, 145, 164, 5, 36, 20, 9, 118]), function(e, t, n, r, i, o, s, a, u, c, l, d, f, p, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var g = function() {
        function e(e, t, n) {
          var r = this;
          this._id = e, this._shared = t, this._storage = n, this._init = this._storage.getValue(this._shared, this._id, Object.create(null)).then(function(e) {
            return r._value = e, r
          })
        }
        return Object.defineProperty(e.prototype, "whenReady", {
          get: function() {
            return this._init
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.get = function(e, t) {
          var n = this._value[e];
          return void 0 === n && (n = t), n
        }, e.prototype.update = function(e, t) {
          return this._value[e] = t, this._storage.setValue(this._shared, this._id, this._value).then(function() {
            return !0
          })
        }, e
      }(),
      m = function() {
        function e(e, t) {
          var n = this;
          this._workspace = e, this._environment = t, this._ready = this._getOrCreateWorkspaceStoragePath().then(function(e) {
            return n._value = e
          })
        }
        return Object.defineProperty(e.prototype, "whenReady", {
          get: function() {
            return this._ready
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.value = function(e) {
          if (this._value) return r.join(this._value, e.id)
        }, e.prototype._getOrCreateWorkspaceStoragePath = function() {
          if (!this._workspace) return s.TPromise.as(void 0);
          var e = this._workspace.id,
            t = r.join(this._environment.appSettingsHome, "workspaceStorage", e);
          return i.dirExists(t).then(function(e) {
            return e ? t : i.mkdirp(t).then(function(e) {
              return t
            }, function(e) {})
          })
        }, e
      }(),
      v = function() {
        function t(e, t, n, r, i, s) {
          var f = this;
          this._barrier = new p.Barrier, this._registry = new a.ExtensionDescriptionRegistry(e.extensions), this._logService = i, this._mainThreadTelemetry = t.getProxy(l.MainContext.MainThreadTelemetry), this._storage = new u.ExtHostStorage(t), this._storagePath = new m(e.workspace, e.environment), this._proxy = t.getProxy(l.MainContext.MainThreadExtensionService), this._activator = null, this._extHostLogService = new h.ExtHostLogService(s);
          var g = c.createApiFactory(e, t, n, r, this, i);
          c.initializeExtensionApi(this, g).then(function() {
            f._activator = new d.ExtensionsActivator(f._registry, {
              showMessage: function(e, t) {
                switch (f._proxy.$localShowMessage(e, t), e) {
                  case o.default.Error:
                    console.error(t);
                    break;
                  case o.default.Warning:
                    console.warn(t);
                    break;
                  default:
                    console.log(t)
                }
              },
              actualActivateExtension: function(e, t) {
                return f._activateExtension(e, t)
              }
            }), f._barrier.open()
          })
        }
        return t.prototype.onExtensionAPIReady = function() {
            return this._barrier.wait()
          }, t.prototype.isActivated = function(e) {
            return !!this._barrier.isOpen() && this._activator.isActivated(e)
          }, t.prototype.activateByEvent = function(e, t) {
            var n = this,
              r = new d.ExtensionActivatedByEvent(t, e);
            return this._barrier.isOpen() ? this._activator.activateByEvent(e, r) : this._barrier.wait().then(function() {
              return n._activator.activateByEvent(e, r)
            })
          }, t.prototype.activateById = function(e, t) {
            var n = this;
            return this._barrier.isOpen() ? this._activator.activateById(e, t) : this._barrier.wait().then(function() {
              return n._activator.activateById(e, t)
            })
          },
          t.prototype.getAllExtensionDescriptions = function() {
            return this._registry.getAllExtensionDescriptions()
          }, t.prototype.getExtensionDescription = function(e) {
            return this._registry.getExtensionDescription(e)
          }, t.prototype.getExtensionExports = function(e) {
            return this._barrier.isOpen() ? this._activator.getActivatedExtension(e).exports : null
          }, t.prototype.getExtensionPathIndex = function() {
            if (!this._extensionPathIndex) {
              var e = f.TernarySearchTree.forPaths(),
                t = this.getAllExtensionDescriptions().map(function(t) {
                  if (t.main) return i.realpath(t.extensionFolderPath).then(function(n) {
                    return e.set(n, t)
                  })
                });
              this._extensionPathIndex = s.TPromise.join(t).then(function() {
                return e
              })
            }
            return this._extensionPathIndex
          }, t.prototype.deactivate = function(e) {
            var t = s.TPromise.as(void 0);
            if (!this._barrier.isOpen()) return t;
            if (!this._activator.isActivated(e)) return t;
            var r = this._activator.getActivatedExtension(e);
            if (!r) return t;
            try {
              "function" == typeof r.module.deactivate && (t = s.TPromise.wrap(r.module.deactivate()).then(null, function(e) {
                return s.TPromise.as(void 0)
              }))
            } catch (e) {}
            try {
              n.dispose(r.subscriptions)
            } catch (e) {}
            return t
          }, t.prototype.addMessage = function(e, t, n) {
            this._proxy.$addMessage(e, t, n)
          }, t.prototype._activateExtension = function(e, t) {
            var n = this;
            return this._doActivateExtension(e, t).then(function(r) {
              var i = r.activationTimes,
                o = t instanceof d.ExtensionActivatedByEvent ? t.activationEvent : null;
              return n._proxy.$onExtensionActivated(e.id, i.startup, i.codeLoadingTime, i.activateCallTime, i.activateResolvedTime, o), r
            }, function(t) {
              throw n._proxy.$onExtensionActivationFailed(e.id), t
            })
          }, t.prototype._doActivateExtension = function(n, r) {
            var i = this,
              o = function(e) {
                return {
                  id: e.id,
                  name: e.name,
                  publisherDisplayName: e.publisher,
                  activationEvents: e.activationEvents ? e.activationEvents.join(",") : null,
                  isBuiltin: e.isBuiltin
                }
              }(n);
            if (this._mainThreadTelemetry.$publicLog("activatePlugin", o), !n.main) return s.TPromise.as(new d.EmptyExtension(d.ExtensionActivationTimes.NONE));
            this._logService.info("ExtensionService#_doActivateExtension " + n.id + " " + JSON.stringify(r));
            var a = new d.ExtensionActivationTimesBuilder(r.startup);
            return s.TPromise.join([function(t, n, r) {
              var i = null;
              r.codeLoadingStart(), t.info("ExtensionService#loadCommonJSModule " + n);
              try {
                i = e.__$__nodeRequire(n)
              } catch (e) {
                return s.TPromise.wrapError(e)
              } finally {
                r.codeLoadingStop()
              }
              return s.TPromise.as(i)
            }(this._logService, n.main, a), this._loadExtensionContext(n)]).then(function(e) {
              return t._callActivate(i._logService, n.id, e[0], e[1], a)
            }, function(e) {
              return e[0] ? s.TPromise.wrapError(e[0]) : e[1] ? s.TPromise.wrapError(e[1]) : void 0
            })
          }, t.prototype._loadExtensionContext = function(e) {
            var t = this,
              n = new g(e.id, !0, this._storage),
              i = new g(e.id, !1, this._storage);
            return this._logService.trace("ExtensionService#loadExtensionContext " + e.id), s.TPromise.join([n.whenReady, i.whenReady, this._storagePath.whenReady]).then(function() {
              var o = t;
              return Object.freeze({
                globalState: n,
                workspaceState: i,
                subscriptions: [],
                get extensionPath() {
                  return e.extensionFolderPath
                },
                storagePath: t._storagePath.value(e),
                asAbsolutePath: function(t) {
                  return r.join(e.extensionFolderPath, t)
                },
                get logger() {
                  return c.checkProposedApiEnabled(e), o._extHostLogService.getExtLogger(e.id)
                }
              })
            })
          }, t._callActivate = function(e, t, n, r, i) {
            return n = n || {
              activate: void 0,
              deactivate: void 0
            }, this._callActivateOptional(e, t, n, r, i).then(function(e) {
              return new d.ActivatedExtension(!1, i.build(), n, e, r.subscriptions)
            })
          }, t._callActivateOptional = function(e, t, n, r, i) {
            if ("function" != typeof n.activate) return s.TPromise.as(n);
            try {
              i.activateCallStart(), e.trace("ExtensionService#_callActivateOptional " + t);
              var o = n.activate.apply(global, [r]);
              return i.activateCallStop(), i.activateResolveStart(), s.TPromise.as(o).then(function(e) {
                return i.activateResolveStop(), e
              })
            } catch (e) {
              return s.TPromise.wrapError(e)
            }
          }, t.prototype.$activateByEvent = function(e) {
            return this.activateByEvent(e, !1)
          }, t
      }();
    t.ExtHostExtensionService = v
  }), define(e[166], t([1, 0, 14, 2, 124, 58, 26, 31, 47, 38, 4, 9, 126, 39, 90]), function(e, t, r, i, o, u, c, l, d, f, p, h, g, m, v) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var y = function(e) {
      function t(n, r, i, o, s, a, u, c, l, d) {
        var f = e.call(this, u, a) || this;
        return f.modeId = n, f.resource = r, f.hasAssociatedFilePath = i, f.initialValue = o, f.preferredEncoding = s, f.backupFileService = c, f.textFileService = l, f.configurationService = d, f.dirty = !1, f.versionId = 0, f.toDispose = [], f._onDidChangeContent = new p.Emitter, f.toDispose.push(f._onDidChangeContent), f._onDidChangeDirty = new p.Emitter, f.toDispose.push(f._onDidChangeDirty), f._onDidChangeEncoding = new p.Emitter, f.toDispose.push(f._onDidChangeEncoding), f.contentChangeEventScheduler = new h.RunOnceScheduler(function() {
          return f._onDidChangeContent.fire()
        }, t.DEFAULT_CONTENT_CHANGE_BUFFER_DELAY), f.toDispose.push(f.contentChangeEventScheduler), f.registerListeners(), f
      }
      return n(t, e), Object.defineProperty(t.prototype, "onDidChangeContent", {
          get: function() {
            return this._onDidChangeContent.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "onDidChangeDirty", {
          get: function() {
            return this._onDidChangeDirty.event
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "onDidChangeEncoding", {
          get: function() {
            return this._onDidChangeEncoding.event
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.getOrCreateMode = function(t, n, r) {
          return n && n !== u.PLAINTEXT_MODE_ID ? e.prototype.getOrCreateMode.call(this, t, n, r) : t.getOrCreateModeByFilenameOrFirstLine(this.resource.fsPath, r)
        }, t.prototype.registerListeners = function() {
          var e = this;
          this.toDispose.push(this.configurationService.onDidChangeConfiguration(function(t) {
            return e.onConfigurationChange()
          }))
        }, t.prototype.onConfigurationChange = function() {
          var e = this.configurationService.getValue(this.resource, "files.encoding");
          this.configuredEncoding !== e && (this.configuredEncoding = e, this.preferredEncoding || this._onDidChangeEncoding.fire())
        }, t.prototype.getVersionId = function() {
          return this.versionId
        }, t.prototype.getValue = function() {
          return this.textEditorModel ? this.textEditorModel.getValue(c.EndOfLinePreference.TextDefined, !0) : null
        }, t.prototype.getModeId = function() {
          return this.textEditorModel ? this.textEditorModel.getLanguageIdentifier().language : null
        }, t.prototype.getEncoding = function() {
          return this.preferredEncoding || this.configuredEncoding
        }, t.prototype.setEncoding = function(e) {
          var t = this.getEncoding();
          this.preferredEncoding = e, t !== this.preferredEncoding && this._onDidChangeEncoding.fire()
        }, t.prototype.isDirty = function() {
          return this.dirty
        }, t.prototype.setDirty = function(e) {
          this.dirty !== e && (this.dirty = e, this._onDidChangeDirty.fire())
        }, t.prototype.getResource = function() {
          return this.resource
        }, t.prototype.revert = function() {
          this.setDirty(!1), this.contentChangeEventScheduler.schedule()
        }, t.prototype.load = function() {
          var e = this;
          return this.backupFileService.loadBackupResource(this.resource).then(function(t) {
            return t ? e.textFileService.resolveTextContent(t, g.BACKUP_FILE_RESOLVE_OPTIONS).then(function(t) {
              return e.backupFileService.parseBackupContent(t.value)
            }) : null
          }).then(function(t) {
            return e.setDirty(e.hasAssociatedFilePath || !!t), e.doLoad(t || e.initialValue || "").then(function(t) {
              return e.configuredEncoding = e.configurationService.getValue(e.resource, "files.encoding"), e.toDispose.push(e.textEditorModel.onDidChangeContent(function() {
                return e.onModelContentChanged()
              })), e.toDispose.push(e.textEditorModel.onDidChangeLanguage(function() {
                return e.onConfigurationChange()
              })), t
            })
          })
        }, t.prototype.doLoad = function(e) {
          var t = this;
          return this.textEditorModel ? (this.updateTextEditorModel(e), i.TPromise.as(this)) : this.createTextEditorModel(e, this.resource, this.modeId).then(function(e) {
            return t
          })
        }, t.prototype.onModelContentChanged = function() {
          this.versionId++, this.hasAssociatedFilePath || 1 !== this.textEditorModel.getLineCount() || "" !== this.textEditorModel.getLineContent(1) ? this.setDirty(!0) : this.setDirty(!1), this.contentChangeEventScheduler.schedule()
        }, t.prototype.dispose = function() {
          e.prototype.dispose.call(this), this.toDispose = r.dispose(this.toDispose)
        }, t.DEFAULT_CONTENT_CHANGE_BUFFER_DELAY = l.CONTENT_CHANGE_EVENT_BUFFER_DELAY,
        t = s([a(5, d.IModeService), a(6, f.IModelService), a(7, g.IBackupFileService), a(8, m.ITextFileService), a(9, v.ITextResourceConfigurationService)], t)
    }(o.BaseTextEditorModel);
    t.UntitledEditorModel = y
  }), define(e[167], t([1, 0, 2, 57, 29, 64, 58, 13, 37, 67, 166, 6, 63, 14, 4, 39, 113, 33, 34, 151]), function(e, t, r, i, o, u, c, l, d, f, p, h, g, m, v, y, _, b, C, S) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var E = function(e) {
      function t(t, n, r, i, o, s, a, u, c, l) {
        var d = e.call(this) || this;
        return d.resource = t, d.modeId = r, d.initialValue = i, d.preferredEncoding = o, d.instantiationService = s, d.contextService = a, d.textFileService = u, d.environmentService = c, d.hashService = l, d._hasAssociatedFilePath = n, d.toUnbind = [], d._onDidModelChangeContent = new v.Emitter, d._onDidModelChangeEncoding = new v.Emitter, d
      }
      return n(t, e), Object.defineProperty(t.prototype, "hasAssociatedFilePath", {
          get: function() {
            return this._hasAssociatedFilePath
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "onDidModelChangeContent", {
          get: function() {
            return this._onDidModelChangeContent.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "onDidModelChangeEncoding", {
          get: function() {
            return this._onDidModelChangeEncoding.event
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.getTypeId = function() {
          return t.ID
        }, t.prototype.getResource = function() {
          return this.resource
        }, t.prototype.getModeId = function() {
          return this.cachedModel ? this.cachedModel.getModeId() : this.modeId
        }, t.prototype.getName = function() {
          return this.hasAssociatedFilePath ? d.basenameOrAuthority(this.resource) : this.resource.path
        }, Object.defineProperty(t.prototype, "shortDescription", {
          get: function() {
            return l.basename(u.getPathLabel(d.dirname(this.resource), void 0, this.environmentService))
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "mediumDescription", {
          get: function() {
            return u.getPathLabel(d.dirname(this.resource), this.contextService, this.environmentService)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "longDescription", {
          get: function() {
            return u.getPathLabel(d.dirname(this.resource), void 0, this.environmentService)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.getDescription = function(e) {
          if (void 0 === e && (e = C.Verbosity.MEDIUM), !this.hasAssociatedFilePath) return null;
          var t;
          switch (e) {
            case C.Verbosity.SHORT:
              t = this.shortDescription;
              break;
            case C.Verbosity.LONG:
              t = this.longDescription;
              break;
            case C.Verbosity.MEDIUM:
            default:
              t = this.mediumDescription
          }
          return t
        }, Object.defineProperty(t.prototype, "shortTitle", {
          get: function() {
            return this.getName()
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "mediumTitle", {
          get: function() {
            return u.getPathLabel(this.resource, this.contextService, this.environmentService)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "longTitle", {
          get: function() {
            return u.getPathLabel(this.resource, void 0, this.environmentService)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.getTitle = function(e) {
          if (!this.hasAssociatedFilePath) return this.getName();
          var t;
          switch (e) {
            case C.Verbosity.SHORT:
              t = this.shortTitle;
              break;
            case C.Verbosity.MEDIUM:
              t = this.mediumTitle;
              break;
            case C.Verbosity.LONG:
              t = this.longTitle
          }
          return t
        }, t.prototype.isDirty = function() {
          return this.cachedModel ? this.cachedModel.isDirty() : !this.isDisposed() && this.hasAssociatedFilePath
        }, t.prototype.confirmSave = function() {
          return this.textFileService.confirmSave([this.resource])
        }, t.prototype.save = function() {
          return this.textFileService.save(this.resource)
        }, t.prototype.revert = function() {
          return this.cachedModel && this.cachedModel.revert(), this.dispose(), r.TPromise.as(!0)
        }, t.prototype.suggestFileName = function() {
          if (!this.hasAssociatedFilePath && this.cachedModel) {
            var e = this.cachedModel.getModeId();
            if (e !== c.PLAINTEXT_MODE_ID) return i.suggestFilename(e, this.getName())
          }
          return this.getName()
        }, t.prototype.getEncoding = function() {
          return this.cachedModel ? this.cachedModel.getEncoding() : this.preferredEncoding
        }, t.prototype.setEncoding = function(e, t) {
          this.preferredEncoding = e, this.cachedModel && this.cachedModel.setEncoding(e)
        }, t.prototype.resolve = function() {
          return this.modelResolve ? this.modelResolve : (this.cachedModel = this.createModel(), this.modelResolve = this.cachedModel.load(), this.modelResolve)
        }, t.prototype.createModel = function() {
          var e = this,
            t = this.instantiationService.createInstance(p.UntitledEditorModel, this.modeId, this.resource, this.hasAssociatedFilePath, this.initialValue, this.preferredEncoding);
          return this.toUnbind.push(t.onDidChangeContent(function() {
            return e._onDidModelChangeContent.fire()
          })), this.toUnbind.push(t.onDidChangeDirty(function() {
            return e._onDidChangeDirty.fire()
          })), this.toUnbind.push(t.onDidChangeEncoding(function() {
            return e._onDidModelChangeEncoding.fire()
          })), t
        }, t.prototype.getTelemetryDescriptor = function() {
          var t = this,
            n = e.prototype.getTelemetryDescriptor.call(this);
          return n.resource = _.telemetryURIDescriptor(this.getResource(), function(e) {
            return t.hashService.createSHA1(e)
          }), n
        }, t.prototype.matches = function(n) {
          if (!0 === e.prototype.matches.call(this, n)) return !0;
          if (n instanceof t) {
            return n.resource.toString() === this.resource.toString()
          }
          return !1
        },
        t.prototype.dispose = function() {
          this._onDidModelChangeContent.dispose(), this._onDidModelChangeEncoding.dispose(), m.dispose(this.toUnbind), this.cachedModel && (this.cachedModel.dispose(), this.cachedModel = null), this.modelResolve = void 0, e.prototype.dispose.call(this)
        }, t.ID = "workbench.editors.untitledEditorInput", s([o.memoize], t.prototype, "shortDescription", null), s([o.memoize], t.prototype, "mediumDescription", null), s([o.memoize], t.prototype, "longDescription", null), s([o.memoize], t.prototype, "shortTitle", null), s([o.memoize], t.prototype, "mediumTitle", null), s([o.memoize], t.prototype, "longTitle", null), t = s([a(5, h.IInstantiationService), a(6, g.IWorkspaceContextService), a(7, y.ITextFileService), a(8, b.IEnvironmentService), a(9, S.IHashService)], t)
    }(f.EditorInput);
    t.UntitledEditorInput = E
  }), define(e[98], t([1, 0, 3, 6, 16, 167, 23, 4, 20, 68]), function(e, t, n, r, i, o, u, c, l, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IUntitledEditorService = r.createDecorator("untitledEditorService"), t.UNTITLED_SCHEMA = "untitled";
    var f = function() {
      function e(e, t) {
        this.instantiationService = e, this.configurationService = t, this.mapResourceToInput = new l.ResourceMap, this.mapResourceToAssociatedFilePath = new l.ResourceMap, this._onDidChangeContent = new c.Emitter, this._onDidChangeDirty = new c.Emitter, this._onDidChangeEncoding = new c.Emitter, this._onDidDisposeModel = new c.Emitter
      }
      return Object.defineProperty(e.prototype, "onDidDisposeModel", {
          get: function() {
            return this._onDidDisposeModel.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidChangeContent", {
          get: function() {
            return this._onDidChangeContent.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidChangeDirty", {
          get: function() {
            return this._onDidChangeDirty.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidChangeEncoding", {
          get: function() {
            return this._onDidChangeEncoding.event
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.get = function(e) {
          return this.mapResourceToInput.get(e)
        }, e.prototype.getAll = function(e) {
          var t = this;
          return e ? i.coalesce(e.map(function(e) {
            return t.get(e)
          })) : this.mapResourceToInput.values()
        }, e.prototype.exists = function(e) {
          return this.mapResourceToInput.has(e)
        }, e.prototype.revertAll = function(e, t) {
          var n = [];
          return this.getAll(e).forEach(function(e) {
            e && (e.revert(), e.dispose(), n.push(e.getResource()))
          }), n
        }, e.prototype.isDirty = function(e) {
          var t = this.get(e);
          return t && t.isDirty()
        }, e.prototype.getDirty = function(e) {
          var t = this;
          return (e ? e.map(function(e) {
            return t.get(e)
          }).filter(function(e) {
            return !!e
          }) : this.mapResourceToInput.values()).filter(function(e) {
            return e.isDirty()
          }).map(function(e) {
            return e.getResource()
          })
        }, e.prototype.loadOrCreate = function(e) {
          return void 0 === e && (e = Object.create(null)), this.createOrGet(e.resource, e.modeId, e.initialValue, e.encoding).resolve()
        }, e.prototype.createOrGet = function(e, n, r, i) {
          var o = !1;
          return e && (o = e.scheme === d.Schemas.file, e = e.with({
              scheme: t.UNTITLED_SCHEMA
            }), o && this.mapResourceToAssociatedFilePath.set(e, !0)),
            e && this.mapResourceToInput.has(e) ? this.mapResourceToInput.get(e) : this.doCreate(e, o, n, r, i)
        }, e.prototype.doCreate = function(e, r, i, s, a) {
          var u = this;
          if (!e) {
            var l = this.mapResourceToInput.size + 1;
            do {
              e = n.default.from({
                scheme: t.UNTITLED_SCHEMA,
                path: "Untitled-" + l
              }), l++
            } while (this.mapResourceToInput.has(e))
          }
          if (!i && !r) {
            var d = this.configurationService.getValue();
            d.files && d.files.defaultLanguage && (i = d.files.defaultLanguage)
          }
          var f = this.instantiationService.createInstance(o.UntitledEditorInput, e, r, i, s, a),
            p = f.onDidModelChangeContent(function() {
              u._onDidChangeContent.fire(e)
            }),
            h = f.onDidChangeDirty(function() {
              u._onDidChangeDirty.fire(e)
            }),
            g = f.onDidModelChangeEncoding(function() {
              u._onDidChangeEncoding.fire(e)
            }),
            m = f.onDispose(function() {
              u._onDidDisposeModel.fire(e)
            });
          return c.once(f.onDispose)(function() {
            u.mapResourceToInput.delete(f.getResource()), u.mapResourceToAssociatedFilePath.delete(f.getResource()), p.dispose(), h.dispose(), g.dispose(), m.dispose()
          }), this.mapResourceToInput.set(e, f), f
        },
        e.prototype.hasAssociatedFilePath = function(e) {
          return this.mapResourceToAssociatedFilePath.has(e)
        }, e.prototype.suggestFileName = function(e) {
          var t = this.get(e);
          return t ? t.suggestFileName() : void 0
        }, e.prototype.getEncoding = function(e) {
          var t = this.get(e);
          return t ? t.getEncoding() : void 0
        }, e.prototype.dispose = function() {
          this._onDidChangeContent.dispose(), this._onDidChangeDirty.dispose(), this._onDidChangeEncoding.dispose(), this._onDidDisposeModel.dispose()
        }, e = s([a(0, r.IInstantiationService), a(1, u.IConfigurationService)], e)
    }();
    t.UntitledEditorService = f
  }), define(e[100], t([1, 0, 2, 3, 12, 8, 32, 76, 62, 98, 38, 23, 152, 33, 20, 112, 11, 68]), function(e, t, n, r, i, o, u, c, l, d, f, p, h, g, m, v, y, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var b = function() {
      function e(e, t, n, r, i) {
        this.modelService = e, this.untitledEditorService = t, this.telemetryService = r, this.configurationService = i, this.searchProvider = [], this.diskSearch = new C(!n.isBuilt || n.verbose, void 0, n.debugSearch), this.registerSearchResultProvider(this.diskSearch)
      }
      return e.prototype.registerSearchResultProvider = function(e) {
        var t = this;
        return this.searchProvider.push(e), {
          dispose: function() {
            var n = t.searchProvider.indexOf(e);
            n >= 0 && t.searchProvider.splice(n, 1)
          }
        }
      }, e.prototype.extendQuery = function(e) {
        var t = this.configurationService.getValue();
        if (!e.fileEncoding) {
          var n = t && t.files && t.files.encoding;
          e.fileEncoding = n
        }
        if (!e.disregardExcludeSettings) {
          var r = i.deepClone(t && t.files && t.files.exclude);
          r && (e.excludePattern ? i.mixin(e.excludePattern, r, !1) : e.excludePattern = r)
        }
      }, e.prototype.search = function(e) {
        var t = this;
        this.forwardTelemetry();
        var r;
        return new n.PPromise(function(i, o, s) {
          var a = t.getLocalResults(e);
          process.nextTick(function() {
            return a.values().filter(function(e) {
              return !!e
            }).forEach(s)
          });
          var u = t.searchProvider.map(function(t) {
            return n.TPromise.wrap(t.search(e)).then(function(e) {
              return e
            }, function(e) {
              o(e)
            }, function(e) {
              e.resource ? a.has(e.resource) || s(e) : s(e)
            })
          });
          r = n.TPromise.join(u).then(function(e) {
            for (var t = {
                limitHit: !1,
                results: [],
                stats: void 0
              }, n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              if (i) {
                t.stats = i.stats || t.stats, t.limitHit = i.limitHit || t.limitHit;
                for (var o = 0, s = i.results; o < s.length; o++) {
                  var u = s[o];
                  a.has(u.resource) || t.results.push(u)
                }
              }
            }
            return t
          }).then(i, o)
        }, function() {
          return r && r.cancel()
        })
      }, e.prototype.getLocalResults = function(e) {
        var t = this,
          n = new m.ResourceMap;
        if (e.type === l.QueryType.Text) {
          this.modelService.getModels().forEach(function(r) {
            var i = r.uri;
            if (i) {
              if ("untitled" === i.scheme) {
                if (!t.untitledEditorService.exists(i)) return
              } else if ("file" !== i.scheme) return;
              if (t.matches(i, e)) {
                var o = r.findMatches(e.contentPattern.pattern, !1, e.contentPattern.isRegExp, e.contentPattern.isCaseSensitive, e.contentPattern.isWordMatch ? e.contentPattern.wordSeparators : null, !1, e.maxResults);
                if (o.length) {
                  var s = new l.FileMatch(i);
                  n.set(i, s), o.forEach(function(e) {
                    s.lineMatches.push(new l.LineMatch(r.getLineContent(e.range.startLineNumber), e.range.startLineNumber - 1, [
                      [e.range.startColumn - 1, e.range.endColumn - e.range.startColumn]
                    ]))
                  })
                } else n.set(i, null)
              }
            }
          })
        }
        return n
      }, e.prototype.matches = function(e, t) {
        if (t.filePattern) {
          if ("file" !== e.scheme) return !1;
          if (!o.fuzzyContains(e.fsPath, o.stripWildcards(t.filePattern).toLowerCase())) return !1
        }
        return (!t.includePattern || "file" === e.scheme) && l.pathIncludedInQuery(t, e.fsPath)
      }, e.prototype.clearCache = function(e) {
        return this.diskSearch.clearCache(e)
      }, e.prototype.forwardTelemetry = function() {
        var e = this;
        this.forwardingTelemetry || (this.forwardingTelemetry = this.diskSearch.fetchTelemetry().then(null, y.onUnexpectedError, function(t) {
          e.telemetryService.publicLog(t.eventName, t.data)
        }))
      }, e = s([a(0, f.IModelService), a(1, d.IUntitledEditorService), a(2, g.IEnvironmentService), a(3, v.ITelemetryService), a(4, p.IConfigurationService)], e)
    }();
    t.SearchService = b;
    var C = function() {
      function t(t, n, i) {
        void 0 === n && (n = 36e5);
        var o = {
          serverName: "Search",
          timeout: n,
          args: ["--type=searchService"],
          freshExecArgv: !0,
          env: {
            AMD_ENTRYPOINT: "vs/workbench/services/search/node/searchApp",
            PIPE_LOGGING: "true",
            VERBOSE_LOGGING: t
          }
        };
        i && (i.break && i.port ? o.debugBrk = i.port : !i.break && i.port && (o.debug = i.port));
        var s = new c.Client(r.default.parse(e.toUrl("bootstrap")).fsPath, o),
          a = u.getNextTickChannel(s.getChannel("search"));
        this.raw = new h.SearchChannelClient(a)
      }
      return t.prototype.search = function(e) {
        var n, r = {
          folderQueries: [],
          extraFiles: [],
          filePattern: e.filePattern,
          excludePattern: e.excludePattern,
          includePattern: e.includePattern,
          maxResults: e.maxResults,
          exists: e.exists,
          sortByScore: e.sortByScore,
          cacheKey: e.cacheKey,
          useRipgrep: e.useRipgrep,
          disregardIgnoreFiles: e.disregardIgnoreFiles,
          ignoreSymlinks: e.ignoreSymlinks
        };
        if (e.folderQueries)
          for (var i = 0, o = e.folderQueries; i < o.length; i++) {
            var s = o[i];
            s.folder.scheme === _.Schemas.file && r.folderQueries.push({
              excludePattern: s.excludePattern,
              includePattern: s.includePattern,
              fileEncoding: s.fileEncoding,
              disregardIgnoreFiles: s.disregardIgnoreFiles,
              folder: s.folder.fsPath
            })
          }
        if (e.extraFileResources)
          for (var a = 0, u = e.extraFileResources; a < u.length; a++) {
            var c = u[a];
            c.scheme === _.Schemas.file && r.extraFiles.push(c.fsPath)
          }
        return e.type === l.QueryType.Text && (r.contentPattern = e.contentPattern),
          n = e.type === l.QueryType.File ? this.raw.fileSearch(r) : this.raw.textSearch(r), t.collectResults(n)
      }, t.collectResults = function(e) {
        var t = this,
          r = [];
        return new n.PPromise(function(n, i, o) {
          e.done(function(e) {
            n({
              limitHit: e.limitHit,
              results: r,
              stats: e.stats
            })
          }, i, function(e) {
            if (Array.isArray(e)) {
              var n = e.map(function(e) {
                return t.createFileMatch(e)
              });
              r = r.concat(n), n.forEach(o)
            } else if (e.path) {
              var i = t.createFileMatch(e);
              r.push(i), o(i)
            } else o(e)
          })
        }, function() {
          return e.cancel()
        })
      }, t.createFileMatch = function(e) {
        var t = new l.FileMatch(r.default.file(e.path));
        if (e.lineMatches)
          for (var n = 0; n < e.lineMatches.length; n++) t.lineMatches.push(new l.LineMatch(e.lineMatches[n].preview, e.lineMatches[n].lineNumber, e.lineMatches[n].offsetAndLengths));
        return t
      }, t.prototype.clearCache = function(e) {
        return this.raw.clearCache(e)
      }, t.prototype.fetchTelemetry = function() {
        return this.raw.fetchTelemetry()
      }, t
    }();
    t.DiskSearch = C
  });
  i = this && this.__generator || function(e, t) {
    function n(n) {
      return function(s) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return a.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                a.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  a = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  a.label = n[1];
                  break
                }
                if (6 === n[0] && a.label < o[1]) {
                  a.label = o[1], o = n;
                  break
                }
                if (o && a.label < o[2]) {
                  a.label = o[2], a.ops.push(n);
                  break
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue
            }
            n = t.call(e, a)
          } catch (e) {
            n = [6, e], i = 0
          } finally {
            r = o = 0
          }
          if (5 & n[0]) throw n[1];
          return {
            value: n[0] ? n[1] : void 0,
            done: !0
          }
        }([n, s])
      }
    }
    var r, i, o, s, a = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }), s
  };
  define(e[91], t([1, 0, 89, 42, 2, 15, 165, 128, 149, 62, 100, 5, 11, 171, 36, 101, 54, 14, 150, 3]), function(e, t, n, o, s, a, u, c, l, d, f, p, h, g, m, v, y, _, b, C) {
    "use strict";

    function S(e) {
      (e || 0 === e) && (process.exitCode = e), process._exiting || (process._exiting = !0, process.emit("exit", process.exitCode || 0)), g.exit(process.exitCode || 0)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.exit = S;
    var E = function() {
      function t(e, t) {
        this._isTerminating = !1, this.disposables = [], this._environment = t.environment, this._workspace = t.workspace;
        ! function(e) {
          process.exit = function(t) {
            if (e) S(t);
            else {
              var n = new Error("An extension called process.exit() and this was prevented.");
              console.warn(n.stack)
            }
          }, process.crash = function() {
            var e = new Error("An extension called process.crash() and this was prevented.");
            console.warn(e.stack)
          }
        }(!!this._environment.extensionTestsPath);
        var n = new b.RPCProtocol(e),
          r = new l.ExtHostWorkspace(n, t.workspace),
          i = new v.EnvironmentService(t.args, t.execPath);
        this._logService = y.createSpdLogService("exthost" + t.windowId, i),
          this.disposables.push(this._logService), this._logService.info("extension host started"), this._logService.trace("initData", t), this._extHostConfiguration = new c.ExtHostConfiguration(n.getProxy(p.MainContext.MainThreadConfiguration), r, t.configuration), this._extensionService = new u.ExtHostExtensionService(t, n, r, this._extHostConfiguration, this._logService, i);
        var o = new WeakMap;
        this._extensionService.getExtensionPathIndex().then(function(e) {
          Error.prepareStackTrace = function(t, n) {
            for (var r, i, s = "", a = 0, u = n; a < u.length; a++) {
              var c = u[a];
              s += "\n\tat " + c.toString(), i = c.getFileName(), !r && i && (r = e.findSubstr(i))
            }
            return o.set(t, r), (t.name || "Error") + ": " + (t.message || "") + s
          }
        });
        var s = n.getProxy(p.MainContext.MainThreadExtensionService),
          a = n.getProxy(p.MainContext.MainThreadErrors);
        h.setUnexpectedErrorHandler(function(e) {
          var t = h.transformErrorForSerialization(e),
            n = o.get(e);
          n ? s.$onExtensionRuntimeError(n.id, t) : a.$onUnexpectedError(t)
        })
      }
      return t.prototype.start = function() {
          var e = this;
          return this._extensionService.onExtensionAPIReady().then(function() {
            return e.handleEagerExtensions()
          }).then(function() {
            return e.handleExtensionTests()
          }).then(function() {
            e._logService.info("eager extensions activated")
          })
        }, t.prototype.terminate = function() {
          var e = this;
          if (!this._isTerminating) {
            this._isTerminating = !0, this.disposables = _.dispose(this.disposables), h.setUnexpectedErrorHandler(function(e) {});
            var t = [];
            try {
              t = this._extensionService.getAllExtensionDescriptions().map(function(e) {
                return e.id
              }).filter(function(t) {
                return e._extensionService.isActivated(t)
              }).map(function(t) {
                return e._extensionService.deactivate(t)
              })
            } catch (e) {}
            var n = s.TPromise.join(t).then(function() {});
            setTimeout(function() {
              s.TPromise.any([s.TPromise.timeout(4e3), n]).then(function() {
                return S()
              }, function() {
                return S()
              })
            }, 1e3)
          }
        }, t.prototype.handleEagerExtensions = function() {
          return this._extensionService.activateByEvent("*", !0).then(null, function(e) {
            console.error(e)
          }), this.handleWorkspaceContainsEagerExtensions()
        },
        t.prototype.handleWorkspaceContainsEagerExtensions = function() {
          var e = this;
          return this._workspace && 0 !== this._workspace.folders.length ? s.TPromise.join(this._extensionService.getAllExtensionDescriptions().map(function(t) {
            return e.handleWorkspaceContainsEagerExtension(t)
          })).then(function() {}) : s.TPromise.as(null)
        }, t.prototype.handleWorkspaceContainsEagerExtension = function(e) {
          var t = this,
            n = e.activationEvents;
          if (!n) return s.TPromise.as(void 0);
          for (var r = [], i = [], o = 0; o < n.length; o++)
            if (/^workspaceContains:/.test(n[o])) {
              var a = n[o].substr("workspaceContains:".length);
              a.indexOf("*") >= 0 || a.indexOf("?") >= 0 ? i.push(a) : r.push(a)
            }
          if (0 === r.length && 0 === i.length) return s.TPromise.as(void 0);
          var u = s.TPromise.join(r.map(function(n) {
              return t.activateIfFileName(e.id, n)
            })).then(function() {}),
            c = this.activateIfGlobPatterns(e.id, i);
          return s.TPromise.join([u, c]).then(function() {})
        }, t.prototype.activateIfFileName = function(e, t) {
          return r(this, void 0, s.TPromise, function() {
            var n, r, s;
            return i(this, function(i) {
              switch (i.label) {
                case 0:
                  n = 0,
                    r = this._workspace.folders, i.label = 1;
                case 1:
                  return n < r.length ? (s = r[n].uri, [4, o.exists(a.join(C.default.revive(s).fsPath, t))]) : [3, 4];
                case 2:
                  if (i.sent()) return [2, this._extensionService.activateById(e, new m.ExtensionActivatedByEvent(!0, "workspaceContains:" + t)).done(null, function(e) {
                    return console.error(e)
                  })];
                  i.label = 3;
                case 3:
                  return n++, [3, 1];
                case 4:
                  return [2, void 0]
              }
            })
          })
        }, t.prototype.activateIfGlobPatterns = function(e, t) {
          return r(this, void 0, s.TPromise, function() {
            var n, r, o, a, u, c, l;
            return i(this, function(i) {
              switch (i.label) {
                case 0:
                  return 0 === t.length ? [2, s.TPromise.as(void 0)] : (this._diskSearch || (this._diskSearch = new f.DiskSearch(!1, 1e3)), n = {}, t.forEach(function(e) {
                    n[e] = !0
                  }), r = this._workspace.folders.map(function(e) {
                    return {
                      folder: C.default.revive(e.uri)
                    }
                  }), o = this._extHostConfiguration.getConfiguration("search"), a = o.get("useRipgrep", !0), u = o.get("followSymlinks", !0), c = {
                    folderQueries: r,
                    type: d.QueryType.File,
                    exists: !0,
                    includePattern: n,
                    useRipgrep: a,
                    ignoreSymlinks: !u
                  }, [4, this._diskSearch.search(c)]);
                case 1:
                  return (l = i.sent()).limitHit ? [2, this._extensionService.activateById(e, new m.ExtensionActivatedByEvent(!0, "workspaceContains:" + t.join(","))).done(null, function(e) {
                    return console.error(e)
                  })] : [2, s.TPromise.as(void 0)]
              }
            })
          })
        }, t.prototype.handleExtensionTests = function() {
          var t = this;
          if (!this._environment.extensionTestsPath || !this._environment.extensionDevelopmentPath) return s.TPromise.as(null);
          var r, i;
          try {
            r = e.__$__nodeRequire(this._environment.extensionTestsPath)
          } catch (e) {
            i = e
          }
          return r && "function" == typeof r.run ? new s.TPromise(function(e, n) {
            r.run(t._environment.extensionTestsPath, function(r, i) {
              r ? n(r.toString()) : e(null), t.gracefulExit(i && i > 0 ? 1 : 0)
            })
          }) : (this.gracefulExit(1), s.TPromise.wrapError(new Error(i ? i.toString() : n.localize(0, null, this._environment.extensionTestsPath))))
        }, t.prototype.gracefulExit = function(e) {
          setTimeout(function() {
            return S(e)
          }, 500)
        }, t
    }();
    t.ExtensionHostMain = E
  }), define(e[172], t([1, 0, 11, 91, 92, 53, 4]), function(e, t, n, r, i, o, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function() {
      r.exit()
    };
    ! function() {
      if (process.env.VSCODE_PREVENT_FOREIGN_INSPECT)
        for (var e = 0; e < process.execArgv.length; e++)
          if (process.execArgv[e].match(/--inspect-brk=\d+|--inspect=\d+/)) {
            process.execArgv.splice(e, 1);
            break
          }
    }(),
    function() {
      var e = process.env.VSCODE_IPC_HOOK_EXTHOST;
      return new Promise(function(t, n) {
        var r = o.createConnection(e, function() {
          r.removeListener("error", n), t(new i.Protocol(r))
        });
        r.once("error", n)
      }).then(function(e) {
        return new(function() {
          function t() {
            var t = this;
            this._terminating = !1, this.onMessage = s.filterEvent(e.onMessage, function(e) {
              return "__$terminate" !== e.type || (t._terminating = !0, a(), !1)
            })
          }
          return t.prototype.send = function(t) {
            this._terminating || e.send(t)
          }, t
        }())
      })
    }().then(function(e) {
      return function(e) {
        return new Promise(function(t, r) {
          var i = e.onMessage(function(r) {
            i.dispose();
            var o = JSON.parse(r),
              s = [];
            process.on("unhandledRejection", function(e, t) {
              s.push(t), setTimeout(function() {
                var r = s.indexOf(t);
                r >= 0 && (s.splice(r, 1), console.warn("rejected promise not handled within 1 second"), n.onUnexpectedError(e))
              }, 1e3)
            }), process.on("rejectionHandled", function(e) {
              var t = s.indexOf(e);
              t >= 0 && s.splice(t, 1)
            }), process.on("uncaughtException", function(e) {
              n.onUnexpectedError(e)
            }), setInterval(function() {
              try {
                process.kill(o.parentPid, 0)
              } catch (e) {
                a()
              }
            }, 5e3), e.send("initialized"), t({
              protocol: e,
              initData: o
            })
          });
          e.send("ready")
        })
      }(e)
    }).then(function(e) {
      var t = new r.ExtensionHostMain(e.protocol, e.initData);
      return a = function() {
        return t.terminate()
      }, t.start()
    }).catch(function(e) {
      return console.error(e)
    })
  })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\workbench\node\extensionHostProcess.js.map