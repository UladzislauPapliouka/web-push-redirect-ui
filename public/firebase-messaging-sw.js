(() => {
    
    var e = function (e, t, n, r) {
        return new (n || (n = Promise))((function (o, i) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((r = r.apply(e, t || [])).next())
        }))
    }, t = function (e, t) {
        var n, r, o, i, s = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(a) {
            return function (c) {
                return function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, a[0] && (s = 0)), s;) try {
                        if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                        switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {value: a[1], done: !1};
                            case 5:
                                s.label++, r = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (e) {
                        a = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {value: a[0] ? a[1] : void 0, done: !0}
                }([a, c])
            }
        }
    }, n = function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function () {
                return e && r >= e.length && (e = void 0), {value: e && e[r++], done: !e}
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }, r = (globalThis.innerWidth, function (e, t) {
        console.debug("path: ".concat(t, ",\n\n  "), e)
    }), o = function (e, t, n, r) {
        return new (n || (n = Promise))((function (o, i) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((r = r.apply(e, t || [])).next())
        }))
    }, i = function (e, t) {
        var n, r, o, i, s = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function a(a) {
            return function (c) {
                return function (a) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, a[0] && (s = 0)), s;) try {
                        if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                        switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {value: a[1], done: !1};
                            case 5:
                                s.label++, r = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (e) {
                        a = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {value: a[0] ? a[1] : void 0, done: !0}
                }([a, c])
            }
        }
    }, s = new BroadcastChannel("ednaWidget-channel"), a = "".concat("1.4.0", ".").concat("517");
    a = "".concat(a), r({}, "(worker script started)"), r(Notification.permission, "Notification.permission"), s.postMessage({type: "getDeviceAddress"}), s.addEventListener("message", (function (e) {
        "getDeviceAddress" === e.data.type && (self.deviceAddress = e.data.payload)
    }));
    var c = function (e) {
        return o(void 0, void 0, void 0, (function () {
            var t, n;
            return i(this, (function (o) {
                switch (o.label) {
                    case 0:
                        return r(e, "(fetchShortPushReceived called)"), [4, fetch("https://pushservertest.edna.id/push-test/service/messages/pushReceived", {
                            method: "POST",
                            headers: {"Content-Type": "application/json", Accept: "application/json"},
                            body: e
                        })];
                    case 1:
                        return t = o.sent(), r(t, "(API_SHORT_PUSH_RECEIVED called)"), [4, t.json()];
                    case 2:
                        return n = o.sent(), r(n, "(API_SHORT_PUSH_RECEIVED jsonned)"), n.systemError && console.log("onError", {
                            errorCode: n.systemError.errorCode,
                            errorDescription: n.systemError.errorDescription
                        }), [2]
                }
            }))
        }))
    };
    self.addEventListener("push", (function (e) {
        var t, n, a;
        return o(this, void 0, void 0, (function () {
            var u, l, d, f, h, p;
            return i(this, (function (v) {
                return r(e.data, "(push event fired)"), u = null === (t = e.data) || void 0 === t ? void 0 : t.json(), l = null !== (a = null === (n = e.data) || void 0 === n ? void 0 : n.json().data) && void 0 !== a ? a : {}, r(l, "(push event fired)"), d = l.newMessagesAvailable, s.postMessage({
                    type: "badge",
                    unreadCount: d
                }), f = l.title && "Default" !== l.title ? l.title : l.body, r(f, "(notification title)"), h = {
                    icon: l.icon,
                    image: l.image,
                    body: l.body,
                    data: l,
                    actions: l.actions && JSON.parse(l.actions)
                }, r(f, "(notification options)"), p = JSON.stringify({
                    serverMessageId: [l.serverMessageId],
                    sessionKey: l.sessionKey
                }), r(p, "(short push body)"), l.onlyPush ? (r({}, "(before show in ui)"), s.postMessage({
                    type: "show_in_UI",
                    payload: u
                }), l.stopTime < Date.now() ? [2, c(p)] : [2, e.waitUntil(self.registration.showNotification(f, h).then((function (e) {
                    return r(e, "(event.waintUntil short push)"), c(p)
                })).catch((function (e) {
                    return console.log("onError", {text: "Error while working with Short Push", error: e})
                })))]) : l.onlyPush ? [2] : l.stopTime < Date.now() ? [2, c(p)] : [2, e.waitUntil(c(p).then((function () {
                    return function (e) {
                        return o(void 0, void 0, void 0, (function () {
                            var t, n, o;
                            return i(this, (function (i) {
                                switch (i.label) {
                                    case 0:
                                        return r(e, "(fetchLongPushText called)"), t = JSON.stringify({
                                            deviceAddress: {deviceAddress: self.deviceAddress || e.data.deviceAddress},
                                            batchSize: 100,
                                            syncToken: "null",
                                            sessionKey: e.data.sessionKey
                                        }), [4, fetch("https://pushservertest.edna.ru/push-test/service/messages/syncWithEnrichment", {
                                            method: "POST",
                                            headers: {"Content-Type": "application/json", Accept: "application/json"},
                                            body: t
                                        })];
                                    case 1:
                                        return n = i.sent(), r(n, "(API_LONG_PUSH_TEXT called)"), [4, n.json()];
                                    case 2:
                                        return o = i.sent(), r(o, "(API_LONG_PUSH_TEXT jsonned)"), [2, o]
                                }
                            }))
                        }))
                    }(u).then((function (e) {
                        r(e, "(event.waintUntil long push)");
                        var t = e.pushMessage.pop();
                        u.longPush = t, h.body = t.fullMessage;
                        var n = JSON.stringify({
                            deviceAddress: {deviceAddress: self.deviceAddress || u.data.deviceAddress},
                            receivedMessageId: [t.messageId]
                        });
                        return r(n, "(event.waintUntil long push)"), self.registration.showNotification(f, h).then((function (e) {
                            return r(e, "(showNotification event)"), function (e) {
                                return o(void 0, void 0, void 0, (function () {
                                    return i(this, (function (t) {
                                        return r(e, "(fetchLongPushReceived called)"), [2, fetch("https://pushservertest.edna.id/push-test/service/messages/received", {
                                            method: "POST",
                                            headers: {"Content-Type": "application/json", Accept: "application/json"},
                                            body: e
                                        })]
                                    }))
                                }))
                            }(n)
                        }))
                    })).catch((function (e) {
                        return console.log("onError", {text: "Error while working with Long Push", error: e})
                    }))
                })).catch((function (e) {
                    return console.log("onError", {text: "Error while working with Short Push", error: e})
                })))]
            }))
        }))
    })), self.addEventListener("notificationclick", (function (r) {
        var o = this;
        r.notification.close(), r.waitUntil(e(o, void 0, void 0, (function () {
            var e, o, i, s, a, c, u, l, d;
            return t(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return r.action ? [4, this.clients.openWindow(r.action)] : [3, 2];
                    case 1:
                        return t.sent(), [2];
                    case 2:
                        return (null === (d = r.notification.data) || void 0 === d ? void 0 : d.deeplink) ? [4, this.clients.openWindow(r.notification.data.deeplink)] : [3, 4];
                    case 3:
                        return e = t.sent(), this.setTimeout((function () {
                            null == e || e.postMessage(JSON.parse(JSON.stringify(r.notification.data)))
                        }), 2e3), [2];
                    case 4:
                        return [4, this.clients.matchAll({type: "window", includeUncontrolled: !0})];
                    case 5:
                        o = t.sent(), t.label = 6;
                    case 6:
                        t.trys.push([6, 11, 12, 13]), i = n(o), s = i.next(), t.label = 7;
                    case 7:
                        return s.done ? [3, 10] : (a = s.value).url && "focus" in a ? [4, a.focus()] : [3, 9];
                    case 8:
                        return t.sent(), [2];
                    case 9:
                        return s = i.next(), [3, 7];
                    case 10:
                        return [3, 13];
                    case 11:
                        return c = t.sent(), u = {error: c}, [3, 13];
                    case 12:
                        try {
                            s && !s.done && (l = i.return) && l.call(i)
                        } finally {
                            if (u) throw u.error
                        }
                        return [7];
                    case 13:
                        return [4, this.clients.openWindow("/")];
                    case 14:
                        return t.sent(), [2]
                }
            }))
        })))
    }))
})();