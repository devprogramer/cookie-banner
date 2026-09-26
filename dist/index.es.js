import { useEffect as e, useState as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
var i = {
	banner: "_banner_wepgr_1",
	text: "_text_wepgr_24",
	link: "_link_wepgr_32",
	actions: "_actions_wepgr_37",
	acceptBtn: "_acceptBtn_wepgr_43",
	declineBtn: "_declineBtn_wepgr_44",
	consentBtn: "_consentBtn_wepgr_85"
}, a = "cookieConsent", o = 15552e3;
function s() {
	if (typeof document > "u") return null;
	let e = document.cookie.split(";").map((e) => e.trim()).find((e) => e.startsWith(`${a}=`));
	if (!e) return null;
	let t = e.split("=")[1];
	return t === "accepted" || t === "declined" ? t : null;
}
function c(e) {
	document.cookie = `${a}=${e}; max-age=${o}; path=/; SameSite=Lax`;
}
//#endregion
//#region src/components/CookieBanner.tsx
function l({ text: a }) {
	let [o, l] = t(!1);
	return e(() => {
		s() === null && l(!0);
	}, []), o ? /* @__PURE__ */ r("div", {
		className: i.banner,
		role: "dialog",
		"aria-label": "Cookie consent",
		children: [/* @__PURE__ */ r("p", {
			className: i.text,
			children: [
				a,
				" ",
				/* @__PURE__ */ n("a", {
					href: "/cookies/",
					className: i.link,
					children: "Cookies Policy"
				}),
				"."
			]
		}), /* @__PURE__ */ r("div", {
			className: i.actions,
			children: [/* @__PURE__ */ n("button", {
				type: "button",
				className: i.declineBtn,
				onClick: () => {
					c("declined"), l(!1);
				},
				children: "Decline"
			}), /* @__PURE__ */ n("button", {
				type: "button",
				className: i.acceptBtn,
				onClick: () => {
					c("accepted"), l(!1);
				},
				children: "Accept"
			})]
		})]
	}) : null;
}
var u = { consentBtn: "_consentBtn_1m3ef_2" };
//#endregion
//#region src/components/CookieSettingsButton.tsx
function d({ className: r }) {
	let [i, a] = t(null);
	e(() => {
		a(s());
	}, []);
	let o = () => {
		let e = i === "accepted" ? "declined" : "accepted";
		c(e), a(e);
	}, l = i === "accepted" ? "Decline cookies" : "Accept cookies";
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: `${u.consentBtn} ${r || ""}`.trim(),
		onClick: o,
		children: l
	});
}
//#endregion
export { l as CookieBanner, d as CookieSettingsButton };
