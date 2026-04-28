module.exports = [
"[project]/src/utils/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "discountPrice",
    ()=>discountPrice,
    "formatKey",
    ()=>formatKey,
    "removeTagInText",
    ()=>removeTagInText,
    "wowAnimation",
    ()=>wowAnimation
]);
const wowAnimation = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
function discountPrice(price, discount) {
    return price - price * discount / 100;
}
const formatKey = (key)=>{
    return key.replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str)=>str.toUpperCase()); // Capitalize first letter
};
const removeTagInText = (text)=>{
    return text.replace(/(<([^>]+)>)/gi, "");
};
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/context/global-context.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalContext",
    ()=>GlobalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const GlobalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(null);
}),
"[project]/src/components/provider/global-context-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$global$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/global-context.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function GlobalContextProvider({ children }) {
    const [showAnnounceDetailsModal, setShowAnnounceDetailsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAnnounceAddEditModal, setShowAnnounceAddEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [announceEditMode, setAnnounceEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleAnnounceDetailsModal() {
        setShowAnnounceDetailsModal(!showAnnounceDetailsModal);
    }
    function handleAnnounceAddEditModal(edit) {
        if (edit) {
            setAnnounceEditMode(edit); // Set the edit data if it's passed
        } else {
            setAnnounceEditMode(null); // Clear the edit mode if no edit data is provided
        }
        setShowAnnounceAddEditModal(!showAnnounceAddEditModal); // Toggle the modal visibility
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$global$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobalContext"].Provider, {
        value: {
            announceEditMode,
            handleAnnounceAddEditModal,
            handleAnnounceDetailsModal,
            showAnnounceAddEditModal,
            showAnnounceDetailsModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/provider/global-context-provider.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/provider/main-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$global$2d$context$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/provider/global-context-provider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function MainProvider({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wowAnimation"])();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$provider$2f$global$2d$context$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/provider/main-provider.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/svg/search-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchSvgThree",
    ()=>SearchSvgThree,
    "SearchSvgTwo",
    ()=>SearchSvgTwo,
    "default",
    ()=>SearchSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SearchSvg({ clr = "currentColor" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.22221 13.4444C10.6586 13.4444 13.4444 10.6586 13.4444 7.22221C13.4444 3.78578 10.6586 1 7.22221 1C3.78578 1 1 3.78578 1 7.22221C1 10.6586 3.78578 13.4444 7.22221 13.4444Z",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/search-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.0004 15L11.6171 11.6167",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/search-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/search-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function SearchSvgTwo({ clr = "currentColor" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.4 13.4L17 17",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/search-svg.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.4 8.19999C15.4 4.22354 12.1765 1 8.20001 1C4.22357 1 1.00002 4.22354 1.00002 8.19999C1.00002 12.1764 4.22357 15.4 8.20001 15.4C12.1765 15.4 15.4 12.1764 15.4 8.19999Z",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/search-svg.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/search-svg.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function SearchSvgThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.9493 14.95L18.9993 19",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/search-svg.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.2 9.09999C17.2 4.62649 13.5735 1 9.10005 1C4.62655 1 1.00006 4.62649 1.00006 9.09999C1.00006 13.5735 4.62655 17.2 9.10005 17.2C13.5735 17.2 17.2 13.5735 17.2 9.09999Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/search-svg.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/search-svg.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/shape-line.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeLine",
    ()=>ShapeLine,
    "ShapeLineThree",
    ()=>ShapeLineThree,
    "ShapeLineTwo",
    ()=>ShapeLineTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ShapeLine() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "180",
        height: "13",
        viewBox: "0 0 180 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M173.163 12.3756C97.1838 -3.8242 30.6496 5.67799 7.32494 12.2553C5.30414 12.8252 2.43544 12.6722 0.917529 11.9135C-0.600387 11.1549 -0.192718 10.0779 1.82808 9.50807C27.5427 2.25675 98.002 -7.60121 177.683 9.38783C179.881 9.85641 180.65 10.9051 179.402 11.7301C178.154 12.5552 175.361 12.8442 173.163 12.3756Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/shape-line.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/shape-line.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function ShapeLineTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "tp-underline-shape-4",
        width: "150",
        height: "11",
        viewBox: "0 0 150 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M144.302 10.313C80.9865 -3.18683 25.5413 4.73166 6.10412 10.2128C4.42012 10.6877 2.02954 10.5601 0.764608 9.92793C-0.500322 9.29573 -0.160598 8.39826 1.5234 7.92339C22.9523 1.88063 81.6684 -6.33434 148.069 7.82319C149.901 8.21367 150.542 9.08758 149.502 9.77512C148.462 10.4627 146.134 10.7035 144.302 10.313Z",
            fill: "#161613"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/shape-line.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/shape-line.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function ShapeLineThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "56",
        height: "12",
        viewBox: "0 0 56 12",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M44.6676 3.10058L46.9036 3.387C48.2789 3.52894 49.4253 3.76758 50.3904 3.90389L51.709 4.10139L52.764 4.29745C53.3858 4.40373 53.8641 4.47152 54.2284 4.50771C55.6849 4.66108 55.3148 4.29581 55.3847 3.99066C55.4546 3.68551 55.9213 3.54043 54.4947 2.99627C54.1386 2.86569 53.664 2.70744 53.0363 2.51851L51.9747 2.20082L50.6386 1.90668C49.667 1.6963 48.4761 1.4235 47.0608 1.24348L44.7631 0.921418C43.9284 0.826773 43.047 0.771273 42.0907 0.683279C37.6099 0.352541 33.1078 0.450859 28.6458 0.976889C23.8124 1.55476 19.0545 2.64719 14.4531 4.23561C10.79 5.47781 7.26053 7.08365 3.91744 9.02911C2.91326 9.59973 1.94192 10.2263 1.00802 10.9059C0.339753 11.3792 -0.00550771 11.6689 0.0328932 11.7241C0.232129 12.0658 6.3368 8.20753 15.0078 5.70215C19.5654 4.34996 24.2431 3.44171 28.9755 2.99008C33.33 2.58198 37.7111 2.54154 42.0723 2.86921L44.6465 3.09442",
            fill: "#FF296A"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/shape-line.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/shape-line.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/arrow-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownArrow",
    ()=>DownArrow,
    "DownArrowThree",
    ()=>DownArrowThree,
    "DownArrowTwo",
    ()=>DownArrowTwo,
    "NextArrow",
    ()=>NextArrow,
    "NextArrowFive",
    ()=>NextArrowFive,
    "NextArrowFour",
    ()=>NextArrowFour,
    "NextArrowThree",
    ()=>NextArrowThree,
    "NextArrowTwo",
    ()=>NextArrowTwo,
    "PrevArrow",
    ()=>PrevArrow,
    "PrevArrowFive",
    ()=>PrevArrowFive,
    "PrevArrowFour",
    ()=>PrevArrowFour,
    "PrevArrowThree",
    ()=>PrevArrowThree,
    "PrevArrowTwo",
    ()=>PrevArrowTwo,
    "RightArrow",
    ()=>RightArrow,
    "RightArrowFive",
    ()=>RightArrowFive,
    "RightArrowFour",
    ()=>RightArrowFour,
    "RightArrowSeven",
    ()=>RightArrowSeven,
    "RightArrowSix",
    ()=>RightArrowSix,
    "RightArrowThree",
    ()=>RightArrowThree,
    "RightArrowTwo",
    ()=>RightArrowTwo,
    "RightSmArrow",
    ()=>RightSmArrow,
    "RightSmArrowThree",
    ()=>RightSmArrowThree,
    "RightSmArrowTwo",
    ()=>RightSmArrowTwo,
    "UpArrow",
    ()=>UpArrow,
    "UpArrowTwo",
    ()=>UpArrowTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function UpArrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 13L13 1",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1H13V13",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function UpArrowTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.00195 9.00098L9.00195 1.00098",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.00195 1.00098H9.00195V9.00098",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function DownArrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "7",
        viewBox: "0 0 12 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.15067 0.653687C1.33329 0.4674 1.61907 0.450465 1.82045 0.602881L1.87814 0.653687L6 4.85839L10.1219 0.653687C10.3045 0.4674 10.5903 0.450465 10.7916 0.602881L10.8493 0.653687C11.032 0.839974 11.0486 1.13148 10.8991 1.3369L10.8493 1.39575L6.36374 5.97131C6.18111 6.1576 5.89534 6.17454 5.69396 6.02212L5.63626 5.97131L1.15067 1.39575C0.949778 1.19084 0.949778 0.858603 1.15067 0.653687Z",
            fill: "white",
            stroke: "white",
            strokeWidth: "0.5"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/arrow-svg.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function DownArrowTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "10",
        height: "6",
        viewBox: "0 0 10 6",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1L5 5L9 1",
            stroke: "black",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/arrow-svg.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
function DownArrowThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "123",
        viewBox: "0 0 20 123",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 113C14.4726 113 9.99998 117.473 9.99998 123",
                stroke: "#B1040E",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 123C10 117.473 5.52736 113 -1.96429e-05 113",
                stroke: "#B1040E",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9.5",
                width: "1",
                height: "120",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
function RightSmArrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "6",
        height: "10",
        viewBox: "0 0 6 10",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 9L5 5L1 1",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/arrow-svg.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
function RightSmArrowTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6H11",
                stroke: "#fff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 1L11 6L6 11",
                stroke: "#fff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
function RightSmArrowThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6H11",
                stroke: "#AB0C2F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 1L11 6L6 11",
                stroke: "#AB0C2F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
function RightArrow({ clr = "white" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 7H13",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 1L13 7L7 13",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
function RightArrowTwo({ clr = "#161613" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6H11",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 1L11 6L6 11",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
function RightArrowThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 10H19",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 1L19 10L10 19",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
function RightArrowFour() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "11",
        viewBox: "0 0 14 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.71533 1L13 5.28471L8.71533 9.56941",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 5.28473H12.88",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
function RightArrowFive() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "14",
        viewBox: "0 0 19 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.8042 1L17.8042 7L11.8042 13",
                stroke: "white",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 7H17.6359",
                stroke: "white",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
function RightArrowSix({ clr = "#AB0C2F" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "12",
        viewBox: "0 0 16 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.0034 1L15.0034 6L10.0034 11",
                stroke: clr,
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6H14.8633",
                stroke: clr,
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
function RightArrowSeven() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "8",
        height: "12",
        viewBox: "0 0 8 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.5 11L6.5 6L1.5 1",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/arrow-svg.tsx",
            lineNumber: 369,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 362,
        columnNumber: 5
    }, this);
}
function PrevArrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 6H1",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 1L1 6L6 11",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
function NextArrow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6H11",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 1L11 6L6 11",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 409,
        columnNumber: 5
    }, this);
}
function PrevArrowTwo({ cls = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: cls,
        width: "7",
        height: "12",
        viewBox: "0 0 7 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 11L1 6L6 1",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/arrow-svg.tsx",
            lineNumber: 444,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 436,
        columnNumber: 5
    }, this);
}
function NextArrowTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "7",
        height: "12",
        viewBox: "0 0 7 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 11L6 6L1 1",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/arrow-svg.tsx",
            lineNumber: 464,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 457,
        columnNumber: 5
    }, this);
}
function PrevArrowThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "13",
        viewBox: "0 0 15 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.00017 6.77879L14 6.77879",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.24316 11.9999L0.999899 6.77922L6.24316 1.55762",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
function NextArrowThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "13",
        viewBox: "0 0 15 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.9998 6.77883L1 6.77883",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.75684 1.55767L14.0001 6.7784L8.75684 12",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 504,
        columnNumber: 5
    }, this);
}
function PrevArrowFour() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "34",
        height: "18",
        viewBox: "0 0 34 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M33 9H0.999999",
                stroke: "currentCOlor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 1L1 9L9 17",
                stroke: "currentCOlor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 531,
        columnNumber: 5
    }, this);
}
function NextArrowFour() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "34",
        height: "18",
        viewBox: "0 0 34 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 9H33",
                stroke: "currentCOlor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M25 1L33 9L25 17",
                stroke: "currentCOlor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 558,
        columnNumber: 5
    }, this);
}
function PrevArrowFive() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "10",
        viewBox: "0 0 15 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.25001 4.99988L13.5 4.99988",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.25 1.25L2.20711 4.29289C1.87378 4.62622 1.70711 4.79289 1.70711 5C1.70711 5.2071 1.87378 5.37377 2.20711 5.7071L5.25 8.74999",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 585,
        columnNumber: 5
    }, this);
}
function NextArrowFive() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "10",
        viewBox: "0 0 15 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.75 4.99988L1.5 4.99988",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.75 1.25L12.7929 4.29289C13.1262 4.62622 13.2929 4.79289 13.2929 5C13.2929 5.2071 13.1262 5.37377 12.7929 5.7071L9.75 8.74999",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/arrow-svg.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/arrow-svg.tsx",
        lineNumber: 594,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/shape.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shape",
    ()=>Shape,
    "ShapeTwo",
    ()=>ShapeTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Shape() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "535",
        height: "589",
        viewBox: "0 0 535 589",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            opacity: "0.7",
            d: "M672.795 521.502C795.919 462.123 941.766 315.053 575.585 407.022C209.405 498.991 663.448 296.262 821.272 155.066C984.981 8.6419 29.9011 198.484 51.0545 348.604C72.2078 498.724 448.9 347.441 415.406 56.2717",
            stroke: "#B91A3D",
            strokeWidth: "100",
            strokeLinecap: "square"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/shape.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/shape.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function ShapeTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "846",
        height: "579",
        viewBox: "0 0 846 579",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "line-2",
                d: "M212.745 593.864C358.949 649.758 822.546 792.326 466.431 560.525C110.316 328.724 477.436 405.184 743.017 461.029C1008.6 516.874 193.087 -40.2421 69.0387 93.5502C-55.0097 227.343 493.91 431.765 484.946 51.9085",
                stroke: "url(#paint0_linear_311_1041)",
                strokeWidth: "100",
                strokeLinecap: "square"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/shape.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "paint0_linear_311_1041",
                    x1: "769.255",
                    y1: "703.159",
                    x2: "-110.567",
                    y2: "48.8101",
                    gradientUnits: "userSpaceOnUse"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/shape.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/svg/shape.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/shape.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/author.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthorSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AuthorSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 14.5V13C13 12.2044 12.6839 11.4413 12.1213 10.8787C11.5587 10.3161 10.7956 10 10 10H4C3.20435 10 2.44129 10.3161 1.87868 10.8787C1.31607 11.4413 1 12.2044 1 13V14.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/author.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/author.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/author.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/clock-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClockSvgThree",
    ()=>ClockSvgThree,
    "ClockSvgTwo",
    ()=>ClockSvgTwo,
    "default",
    ()=>ClockSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ClockSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/clock-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 3.6001V7.5001L10.1 8.8001",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/clock-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/clock-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function ClockSvgTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/clock-svg.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3.7998V7.9998L10.8 9.3998",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/clock-svg.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/clock-svg.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function ClockSvgThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/clock-svg.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3.7998V7.9998L10.8 9.3998",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/clock-svg.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/clock-svg.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/email.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailFour",
    ()=>EmailFour,
    "EmailThree",
    ()=>EmailThree,
    "EmailTwo",
    ()=>EmailTwo,
    "default",
    ()=>Email
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Email() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "16",
        viewBox: "0 0 18 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 5.40039L10.496 7.40015C9.672 8.05607 8.32 8.05607 7.496 7.40015L5 5.40039",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 11.4004H5.8",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 8.19922H3.4",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/email.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function EmailTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "12",
        viewBox: "0 0 14 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.2 1.01465H11.8C12.46 1.01465 13 1.55465 13 2.21465V9.41465C13 10.0746 12.46 10.6146 11.8 10.6146H2.2C1.54 10.6146 1 10.0746 1 9.41465V2.21465C1 1.55465 1.54 1.01465 2.2 1.01465Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 2.21436L7 6.41436L1 2.21436",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/email.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function EmailThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "15",
        viewBox: "0 0 18 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.6 1H15.4C16.28 1 17 1.72 17 2.6V12.2C17 13.08 16.28 13.8 15.4 13.8H2.6C1.72 13.8 1 13.08 1 12.2V2.6C1 1.72 1.72 1 2.6 1Z",
                stroke: "#57595F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 2.6001L9 8.2001L1 2.6001",
                stroke: "#57595F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/email.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
function EmailFour() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "12",
        viewBox: "0 0 14 12",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.2 1H11.8C12.46 1 13 1.54 13 2.2V9.4C13 10.06 12.46 10.6 11.8 10.6H2.2C1.54 10.6 1 10.06 1 9.4V2.2C1 1.54 1.54 1 2.2 1Z",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 2.19995L7 6.39995L1 2.19995",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/email.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/email.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/cart-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cart",
    ()=>Cart,
    "CartThree",
    ()=>CartThree,
    "CartTwo",
    ()=>CartTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Cart() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "22",
        viewBox: "0 0 20 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.87331 20.4999H14.2211C17.2875 20.4999 19.6399 19.3923 18.9717 14.9346L18.1937 8.89345C17.7818 6.66919 16.363 5.81793 15.1182 5.81793H4.93967C3.67652 5.81793 2.34013 6.73326 1.86416 8.89345L1.08613 14.9346C0.518621 18.8889 2.80695 20.4999 5.87331 20.4999Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.73156 5.59824C5.73156 3.21216 7.66585 1.27787 10.0519 1.27787V1.27787C11.2009 1.273 12.3045 1.72603 13.1187 2.53679C13.9329 3.34754 14.3906 4.44923 14.3906 5.59824V5.59824",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.08973 10.1017H7.1355",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.9257 10.1017H12.9714",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/cart-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function CartTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "22",
        height: "20",
        viewBox: "0 0 22 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.4882 14.5522H9.01749C8.01305 14.5522 7.12301 13.8275 6.85456 12.7904L3.99076 2.02566C3.82861 1.40283 3.2962 0.970144 2.69354 0.970144H0.450424C0.20179 0.970144 0 0.752832 0 0.485072C0 0.217312 0.20179 0 0.450424 0H2.69354C3.69798 0 4.58802 0.724698 4.85647 1.76178L5.42131 3.88058H20.2682C20.6997 3.88058 21.0952 4.09401 21.3519 4.46654C21.6096 4.83908 21.6861 5.30863 21.5618 5.75296L19.6241 12.8835C19.3124 13.8886 18.4557 14.5522 17.4882 14.5522ZM5.67895 4.85072L7.72117 12.5265C7.88242 13.1493 8.41483 13.582 9.01749 13.582H17.4882C18.0593 13.582 18.5836 13.1755 18.7638 12.5944L20.6997 5.47549C20.7411 5.32706 20.715 5.17087 20.6294 5.04669C20.5438 4.92154 20.4123 4.85072 20.2682 4.85072H5.67895Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.97114 20C8.94222 20 8.10547 19.1633 8.10547 18.1343C8.10547 17.1054 8.94222 16.2687 9.97114 16.2687C11.0001 16.2687 11.8368 17.1054 11.8368 18.1343C11.8368 19.1633 11.0001 20 9.97114 20ZM9.97114 17.2015C9.45621 17.2015 9.0383 17.6204 9.0383 18.1343C9.0383 18.6483 9.45621 19.0672 9.97114 19.0672C10.4861 19.0672 10.904 18.6483 10.904 18.1343C10.904 17.6204 10.4861 17.2015 9.97114 17.2015Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.2807 20C15.2518 20 14.415 19.1633 14.415 18.1343C14.415 17.1054 15.2518 16.2687 16.2807 16.2687C17.3096 16.2687 18.1464 17.1054 18.1464 18.1343C18.1464 19.1633 17.3096 20 16.2807 20ZM16.2807 17.2015C15.7658 17.2015 15.3479 17.6204 15.3479 18.1343C15.3479 18.6483 15.7658 19.0672 16.2807 19.0672C16.7956 19.0672 17.2135 18.6483 17.2135 18.1343C17.2135 17.6204 16.7956 17.2015 16.2807 17.2015Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/cart-svg.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function CartThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "18",
        viewBox: "0 0 17 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.07918 12.2H10.8141C14.3574 12.2 14.8963 9.94466 15.5499 6.65524C15.7384 5.70647 15.8327 5.23208 15.606 4.91603C15.3793 4.59998 14.9448 4.59998 14.0758 4.59998H3.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 72,
                columnNumber: 100
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.08297 12.2L3.01325 2.21194C2.8375 1.49968 2.20585 1 1.48122 1H0.740234",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 72,
                columnNumber: 340
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.77401 12.2H5.44916C4.37267 12.2 3.5 13.121 3.5 14.2571C3.5 14.4465 3.64544 14.6 3.82486 14.6H12.5803",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 72,
                columnNumber: 488
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "7.05938",
                cy: "15.8",
                rx: "1.18438",
                ry: "1.2",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 72,
                columnNumber: 689
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12.5809",
                cy: "15.8",
                rx: "1.18438",
                ry: "1.2",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/cart-svg.tsx",
                lineNumber: 72,
                columnNumber: 785
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/cart-svg.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/wishlist-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WishlistSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function WishlistSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M11.9733 0.5H3.78189C1.97198 0.5 0.501953 1.97852 0.501953 3.77994V15.7526C0.501953 17.2821 1.5981 17.9279 2.94067 17.1886L7.08733 14.8859C7.52919 14.6394 8.24295 14.6394 8.67632 14.8859L12.823 17.1886C14.1655 17.9364 15.2617 17.2906 15.2617 15.7526V3.77994C15.2532 1.97852 13.7832 0.5 11.9733 0.5Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/wishlist-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.0031 8.48736H5.75448C5.40609 8.48736 5.11719 8.19845 5.11719 7.85006C5.11719 7.50168 5.40609 7.21277 5.75448 7.21277H10.0031C10.3515 7.21277 10.6404 7.50168 10.6404 7.85006C10.6404 8.19845 10.3515 8.48736 10.0031 8.48736Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/wishlist-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/wishlist-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/user-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserSvgFive",
    ()=>UserSvgFive,
    "UserSvgFour",
    ()=>UserSvgFour,
    "UserSvgSix",
    ()=>UserSvgSix,
    "UserSvgThree",
    ()=>UserSvgThree,
    "UserSvgTwo",
    ()=>UserSvgTwo,
    "default",
    ()=>UserSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function UserSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M7.98015 8.78062C10.4049 8.78062 12.3705 6.81501 12.3705 4.39031C12.3705 1.96561 10.4049 0 7.98015 0C5.55545 0 3.58984 1.96561 3.58984 4.39031C3.58984 6.81501 5.55545 8.78062 7.98015 8.78062Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.98158 10.9755C3.58249 10.9755 0 13.9258 0 17.5609C0 17.8068 0.193174 18 0.439031 18H15.5241C15.77 18 15.9632 17.8068 15.9632 17.5609C15.9632 13.9258 12.3807 10.9755 7.98158 10.9755Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/user-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function UserSvgTwo({ clr = '#94928E' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "15",
        viewBox: "0 0 13 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.57134 7.5C8.36239 7.5 9.81432 6.04493 9.81432 4.25C9.81432 2.45507 8.36239 1 6.57134 1C4.7803 1 3.32837 2.45507 3.32837 4.25C3.32837 6.04493 4.7803 7.5 6.57134 7.5Z",
                stroke: clr,
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.1426 14C12.1426 11.4845 9.64553 9.44995 6.57119 9.44995C3.49684 9.44995 0.999756 11.4845 0.999756 14",
                stroke: clr,
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/user-svg.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function UserSvgThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "19",
        viewBox: "0 0 17 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.40947 9.14901C10.6598 9.14901 12.484 7.32479 12.484 5.07451C12.484 2.82422 10.6598 1 8.40947 1C6.15918 1 4.33496 2.82422 4.33496 5.07451C4.33496 7.32479 6.15918 9.14901 8.40947 9.14901Z",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.4102 17.298C15.4102 14.1444 12.2728 11.5937 8.41016 11.5937C4.54752 11.5937 1.41016 14.1444 1.41016 17.298",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/user-svg.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function UserSvgFour() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.07223 7.468C7.03023 7.462 6.97623 7.462 6.92823 7.468C5.87223 7.432 5.03223 6.568 5.03223 5.506C5.03223 4.42 5.90823 3.538 7.00023 3.538C8.08623 3.538 8.96823 4.42 8.96823 5.506C8.96223 6.568 8.12823 7.432 7.07223 7.468Z",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.0441 11.428C9.97605 12.406 8.56005 13 7.00005 13C5.44005 13 4.02405 12.406 2.95605 11.428C3.01605 10.864 3.37605 10.312 4.01805 9.88C5.66205 8.788 8.35005 8.788 9.98205 9.88C10.6241 10.312 10.9841 10.864 11.0441 11.428Z",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/user-svg.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
function UserSvgFive() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "19",
        viewBox: "0 0 17 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.5 17.6C15.5 14.504 12.3626 12 8.5 12C4.63737 12 1.5 14.504 1.5 17.6",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/user-svg.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function UserSvgSix() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "18",
        viewBox: "0 0 19 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M6.81288 0C4.45984 0 2.54688 1.91701 2.54688 4.27502C2.54688 6.58804 4.35207 8.46005 6.70511 8.54105C6.77696 8.53205 6.84881 8.53205 6.90269 8.54105C6.92066 8.54105 6.92964 8.54105 6.9476 8.54105C6.95658 8.54105 6.95658 8.54105 6.96556 8.54105C9.26472 8.46005 11.0699 6.58804 11.0789 4.27502C11.0789 1.91701 9.16592 0 6.81288 0Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.3851 10.935C8.87934 9.26094 4.79295 9.26094 2.26927 10.935C1.12867 11.7 0.5 12.735 0.5 13.842C0.5 14.949 1.12867 15.975 2.26029 16.731C3.51764 17.577 5.17016 18 6.82267 18C8.47519 18 10.1277 17.577 11.3851 16.731C12.5167 15.966 13.1453 14.94 13.1453 13.824C13.1364 12.717 12.5167 11.691 11.3851 10.935Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M16.6871 4.8062C16.8308 6.55222 15.5914 8.08222 13.876 8.28923C13.8671 8.28923 13.8671 8.28923 13.8581 8.28923H13.8311C13.7773 8.28923 13.7234 8.28922 13.6785 8.30722C12.8073 8.35223 12.008 8.07322 11.4062 7.56022C12.3313 6.73222 12.8612 5.49021 12.7534 4.1402C12.6905 3.4112 12.4391 2.74519 12.0619 2.17819C12.4031 2.00719 12.7983 1.89919 13.2025 1.86319C14.9628 1.71019 16.5344 3.02419 16.6871 4.8062Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.4895 13.1311C18.4177 14.0041 17.8609 14.7601 16.9268 15.2731C16.0287 15.7681 14.8971 16.0021 13.7745 15.9751C14.4211 15.3901 14.7983 14.6611 14.8702 13.8871C14.96 12.7711 14.4301 11.7001 13.3703 10.8451C12.7686 10.3681 12.0681 9.99007 11.3047 9.71107C13.2895 9.13506 15.7862 9.52206 17.322 10.7641C18.1483 11.4301 18.5704 12.2671 18.4895 13.1311Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/user-svg.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/user-svg.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/enrollment-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnrollmentSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function EnrollmentSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M13.4349 9.71387V13.9033C13.4349 14.9826 12.593 16.1383 11.581 16.4782L8.86831 17.379C8.3921 17.5404 7.61825 17.5404 7.15054 17.379L4.43782 16.4782C3.41736 16.1383 2.58398 14.9826 2.58398 13.9033L2.59249 9.71387L6.35118 12.1613C7.26959 12.7646 8.78328 12.7646 9.70169 12.1613L13.4349 9.71387Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/enrollment-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.7945 4.29218L9.70074 0.952512C8.78233 0.349163 7.26865 0.349163 6.35023 0.952512L1.23093 4.29218C-0.41031 5.35441 -0.41031 7.75931 1.23093 8.83004L2.59154 9.71382L6.35023 12.1612C7.26865 12.7646 8.78233 12.7646 9.70074 12.1612L13.4339 9.71382L14.5989 8.94901V11.5494C14.5989 11.8978 14.8881 12.1867 15.2367 12.1867C15.5854 12.1867 15.8745 11.8978 15.8745 11.5494V7.36841C16.2147 6.27218 15.866 4.9975 14.7945 4.29218Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/enrollment-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/enrollment-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/setting-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingTwoSvg",
    ()=>SettingTwoSvg,
    "default",
    ()=>SettingSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SettingSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.60509 10.2644C6.32151 10.2644 5.2832 9.26439 5.2832 8.00839C5.2832 6.75239 6.32151 5.74438 7.60509 5.74438C8.88867 5.74438 9.90245 6.75239 9.90245 8.00839C9.90245 9.26439 8.88867 10.2644 7.60509 10.2644Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/setting-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M14.9841 9.896C14.8288 9.656 14.608 9.416 14.3219 9.264C14.093 9.152 13.9458 8.968 13.815 8.752C13.398 8.064 13.6433 7.16 14.3382 6.752C15.1558 6.296 15.4174 5.28 14.9432 4.488L14.3955 3.544C13.9294 2.752 12.9075 2.472 12.0981 2.936C11.3786 3.32 10.4548 3.064 10.0378 2.384C9.90702 2.16 9.83344 1.92 9.84979 1.68C9.87432 1.368 9.77621 1.072 9.62905 0.832C9.32655 0.336 8.77878 0 8.17378 0H7.02101C6.42419 0.016 5.87642 0.336 5.57392 0.832C5.41858 1.072 5.32865 1.368 5.345 1.68C5.36135 1.92 5.28777 2.16 5.15696 2.384C4.74 3.064 3.81615 3.32 3.10487 2.936C2.28731 2.472 1.27352 2.752 0.799336 3.544L0.251567 4.488C-0.214445 5.28 0.0471757 6.296 0.856566 6.752C1.5515 7.16 1.79677 8.064 1.38798 8.752C1.249 8.968 1.10184 9.152 0.872917 9.264C0.594945 9.416 0.349675 9.656 0.218865 9.896C-0.0836348 10.392 -0.0672835 11.016 0.235216 11.536L0.799336 12.496C1.10184 13.008 1.66596 13.328 2.2546 13.328C2.53258 13.328 2.8596 13.248 3.12122 13.088C3.32561 12.952 3.57088 12.904 3.84068 12.904C4.65007 12.904 5.32865 13.568 5.345 14.36C5.345 15.28 6.09716 16 7.04554 16H8.15743C9.09763 16 9.84979 15.28 9.84979 14.36C9.87432 13.568 10.5529 12.904 11.3623 12.904C11.6239 12.904 11.8692 12.952 12.0817 13.088C12.3434 13.248 12.6622 13.328 12.9484 13.328C13.5288 13.328 14.093 13.008 14.3955 12.496L14.9678 11.536C15.2621 11 15.2866 10.392 14.9841 9.896Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/setting-svg.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/setting-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function SettingTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.60314 10.2645C6.31956 10.2645 5.28125 9.26451 5.28125 8.00851C5.28125 6.75251 6.31956 5.74451 7.60314 5.74451C8.88672 5.74451 9.9005 6.75251 9.9005 8.00851C9.9005 9.26451 8.88672 10.2645 7.60314 10.2645Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/setting-svg.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M14.9841 9.896C14.8288 9.656 14.608 9.416 14.3219 9.264C14.093 9.152 13.9458 8.968 13.815 8.752C13.398 8.064 13.6433 7.16 14.3382 6.752C15.1558 6.296 15.4174 5.28 14.9432 4.488L14.3955 3.544C13.9294 2.752 12.9075 2.472 12.0981 2.936C11.3786 3.32 10.4548 3.064 10.0378 2.384C9.90702 2.16 9.83344 1.92 9.84979 1.68C9.87432 1.368 9.77621 1.072 9.62905 0.832C9.32655 0.336 8.77878 0 8.17378 0H7.02101C6.42419 0.016 5.87642 0.336 5.57392 0.832C5.41858 1.072 5.32865 1.368 5.345 1.68C5.36135 1.92 5.28777 2.16 5.15696 2.384C4.74 3.064 3.81615 3.32 3.10487 2.936C2.28731 2.472 1.27352 2.752 0.799336 3.544L0.251567 4.488C-0.214445 5.28 0.0471757 6.296 0.856566 6.752C1.5515 7.16 1.79677 8.064 1.38798 8.752C1.249 8.968 1.10184 9.152 0.872917 9.264C0.594945 9.416 0.349675 9.656 0.218865 9.896C-0.0836348 10.392 -0.0672835 11.016 0.235216 11.536L0.799336 12.496C1.10184 13.008 1.66596 13.328 2.2546 13.328C2.53258 13.328 2.8596 13.248 3.12122 13.088C3.32561 12.952 3.57088 12.904 3.84068 12.904C4.65007 12.904 5.32865 13.568 5.345 14.36C5.345 15.28 6.09716 16 7.04554 16H8.15743C9.09763 16 9.84979 15.28 9.84979 14.36C9.87432 13.568 10.5529 12.904 11.3623 12.904C11.6239 12.904 11.8692 12.952 12.0817 13.088C12.3434 13.248 12.6622 13.328 12.9484 13.328C13.5288 13.328 14.093 13.008 14.3955 12.496L14.9678 11.536C15.2621 11 15.2866 10.392 14.9841 9.896Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/setting-svg.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/setting-svg.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/order-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function OrderSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "16",
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M14.2903 2.86564H13.9703L11.2667 0.16198C11.0507 -0.0539932 10.6987 -0.0539932 10.4748 0.16198C10.2588 0.377953 10.2588 0.729909 10.4748 0.953881L12.3865 2.86564H4.61149L6.52325 0.953881C6.73922 0.737908 6.73922 0.385952 6.52325 0.16198C6.30727 -0.0539932 5.95532 -0.0539932 5.73135 0.16198L3.03568 2.86564H2.71572C1.99581 2.86564 0.5 2.86564 0.5 4.91339C0.5 5.68929 0.65998 6.20122 0.995938 6.53718C1.18791 6.73716 1.41989 6.84114 1.66785 6.89714C1.89982 6.95313 2.14779 6.96113 2.38776 6.96113H14.6102C14.8582 6.96113 15.0902 6.94513 15.3141 6.89714C15.9861 6.73716 16.498 6.25722 16.498 4.91339C16.498 2.86564 15.0022 2.86564 14.2903 2.86564Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/order-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.6193 6.96103H2.38886C2.15688 6.96103 1.90092 6.95303 1.66895 6.88904L2.67682 13.0403C2.90079 14.4161 3.50072 15.9999 6.16438 15.9999H10.6518C13.3475 15.9999 13.8274 14.6481 14.1154 13.1363L15.3232 6.88904C15.0993 6.94503 14.8593 6.96103 14.6193 6.96103ZM8.50009 13.2002C6.62833 13.2002 5.10052 11.6724 5.10052 9.80067C5.10052 9.47272 5.37248 9.20075 5.70044 9.20075C6.0284 9.20075 6.30037 9.47272 6.30037 9.80067C6.30037 11.0165 7.28424 12.0004 8.50009 12.0004C9.71594 12.0004 10.6998 11.0165 10.6998 9.80067C10.6998 9.47272 10.9718 9.20075 11.2997 9.20075C11.6277 9.20075 11.8997 9.47272 11.8997 9.80067C11.8997 11.6724 10.3719 13.2002 8.50009 13.2002Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/order-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/order-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/review-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ReviewSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "16",
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M9.2432 0.516728L11.1181 4.28454C11.2563 4.55752 11.5199 4.74709 11.824 4.78922L16.0354 5.40258C16.2813 5.43712 16.5045 5.56687 16.6553 5.76487C16.8044 5.96034 16.8684 6.20804 16.8322 6.45153C16.8027 6.65374 16.7075 6.84079 16.5618 6.98402L13.5102 9.94215C13.287 10.1486 13.1859 10.4544 13.2398 10.7535L13.9912 14.9123C14.0712 15.4144 13.7385 15.8879 13.2398 15.9831C13.0343 16.016 12.8238 15.9814 12.6385 15.8871L8.88186 13.9299C8.60306 13.7892 8.27373 13.7892 7.99493 13.9299L4.23834 15.8871C3.77676 16.1322 3.20485 15.9654 2.94796 15.5105C2.85278 15.3293 2.81909 15.1229 2.85025 14.9215L3.60157 10.7619C3.65548 10.4637 3.55356 10.1562 3.3312 9.94973L0.279593 6.99328C-0.0834322 6.64279 -0.094382 6.06565 0.255167 5.70252C0.262747 5.69494 0.27117 5.68651 0.279593 5.67809C0.424466 5.53065 0.614823 5.43712 0.820341 5.41269L5.03177 4.79848C5.33499 4.75551 5.59863 4.56763 5.73761 4.29296L7.54515 0.516728C7.70603 0.193195 8.03957 -0.00817085 8.40176 0.000254489H8.51462C8.8288 0.0381685 9.10254 0.232794 9.2432 0.516728Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/review-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.41433 13.8249C8.25121 13.83 8.0923 13.8738 7.94936 13.9522L4.21113 15.905C3.75373 16.1232 3.20637 15.9538 2.94992 15.5164C2.85491 15.3378 2.82044 15.133 2.85239 14.9324L3.59903 10.7816C3.64947 10.4799 3.54858 10.1731 3.32913 9.96072L0.276158 7.00503C-0.08623 6.65022 -0.0929565 6.06784 0.261864 5.7046C0.266909 5.69954 0.271113 5.69533 0.276158 5.69111C0.420776 5.54784 0.607436 5.45344 0.808388 5.42395L5.02335 4.80365C5.32857 4.76488 5.59342 4.57441 5.72795 4.29797L7.56007 0.474205C7.73411 0.165741 8.06791 -0.0179882 8.42105 0.0013961C8.41433 0.251707 8.41433 13.6547 8.41433 13.8249Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/review-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/review-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/dashboard-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DashboardSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M16.0041 5.216V1.584C16.0041 0.456 15.4921 0 14.2201 0H10.9881C9.7161 0 9.2041 0.456 9.2041 1.584V5.208C9.2041 6.344 9.7161 6.792 10.9881 6.792H14.2201C15.4921 6.8 16.0041 6.344 16.0041 5.216Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dashboard-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.0041 14.216V10.984C16.0041 9.71195 15.4921 9.19995 14.2201 9.19995H10.9881C9.7161 9.19995 9.2041 9.71195 9.2041 10.984V14.216C9.2041 15.488 9.7161 16 10.9881 16H14.2201C15.4921 16 16.0041 15.488 16.0041 14.216Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dashboard-svg.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.8 5.216V1.584C6.8 0.456 6.288 0 5.016 0H1.784C0.512 0 0 0.456 0 1.584V5.208C0 6.344 0.512 6.792 1.784 6.792H5.016C6.288 6.8 6.8 6.344 6.8 5.216Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dashboard-svg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M6.8 14.216V10.984C6.8 9.71195 6.288 9.19995 5.016 9.19995H1.784C0.512 9.19995 0 9.71195 0 10.984V14.216C0 15.488 0.512 16 1.784 16H5.016C6.288 16 6.8 15.488 6.8 14.216Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dashboard-svg.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/dashboard-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/quiz-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function QuizSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "16",
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M15.6046 14.1807H10.543C10.0491 14.1807 9.64746 14.5887 9.64746 15.0903C9.64746 15.5929 10.0491 16 10.543 16H15.6046C16.0984 16 16.5001 15.5929 16.5001 15.0903C16.5001 14.5887 16.0984 14.1807 15.6046 14.1807Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/quiz-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.99695 3.47017L11.7933 7.34584C11.909 7.43852 11.9288 7.60861 11.8385 7.7271L6.15226 15.1363C5.79481 15.594 5.26805 15.853 4.70366 15.8625L1.59953 15.9008C1.43397 15.9027 1.28911 15.788 1.25149 15.6237L0.546005 12.5564C0.423721 11.9926 0.546005 11.4097 0.90345 10.9606L6.61788 3.51604C6.71006 3.3966 6.88031 3.37557 6.99695 3.47017Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/quiz-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M13.9408 5.03598L13.0162 6.19027C12.9231 6.3078 12.7556 6.32691 12.6399 6.23327C11.5159 5.3236 8.63749 2.98922 7.83888 2.34232C7.72224 2.24676 7.70625 2.07668 7.80031 1.95819L8.69204 0.850724C9.501 -0.190813 10.912 -0.286367 12.0501 0.621394L13.3576 1.66293C13.8938 2.08337 14.2513 2.63758 14.3735 3.22046C14.5146 3.86162 14.3641 4.49132 13.9408 5.03598Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/quiz-svg.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/quiz-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/question-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionTwoSvg",
    ()=>QuestionTwoSvg,
    "default",
    ()=>QuestionSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function QuestionSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "16",
        viewBox: "0 0 17 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/question-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 4.80005V8.00005",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/question-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 11.2H8.507",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/question-svg.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/question-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function QuestionTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M12.75 13.6H9.35L5.56749 16.116C5.00649 16.49 4.25 16.0905 4.25 15.4105V13.6C1.7 13.6 0 11.9 0 9.35V4.25C0 1.7 1.7 0 4.25 0H12.75C15.3 0 17 1.7 17 4.25V9.35C17 11.9 15.3 13.6 12.75 13.6Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/question-svg.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5016 8.22793C8.1531 8.22793 7.8641 7.93893 7.8641 7.59043V7.41196C7.8641 6.42596 8.58659 5.94145 8.85859 5.75445C9.17309 5.54195 9.27508 5.39746 9.27508 5.17646C9.27508 4.75146 8.9266 4.40293 8.5016 4.40293C8.0766 4.40293 7.72813 4.75146 7.72813 5.17646C7.72813 5.52496 7.43913 5.81396 7.09063 5.81396C6.74213 5.81396 6.45312 5.52496 6.45312 5.17646C6.45312 4.04596 7.3711 3.12793 8.5016 3.12793C9.6321 3.12793 10.5501 4.04596 10.5501 5.17646C10.5501 6.14546 9.83611 6.62994 9.57261 6.80844C9.24111 7.02944 9.1391 7.17396 9.1391 7.41196V7.59043C9.1391 7.94743 8.8501 8.22793 8.5016 8.22793Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/question-svg.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.50469 10.3443C8.14769 10.3443 7.86719 10.0553 7.86719 9.70684C7.86719 9.35834 8.15619 9.06934 8.50469 9.06934C8.85319 9.06934 9.14219 9.35834 9.14219 9.70684C9.14219 10.0553 8.86169 10.3443 8.50469 10.3443Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/question-svg.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/question-svg.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/logout-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoutSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LogoutSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "18",
        viewBox: "0 0 17 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M9.94863 0C10.3714 0 10.7222 0.341829 10.7222 0.773613V17.2264C10.7222 17.6492 10.3804 18 9.94863 18C4.65028 18 0.953125 14.3028 0.953125 9.0045C0.953125 3.70615 4.65927 0 9.94863 0Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/logout-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.5143 8.58188L13.9596 6.01816C13.6987 5.75729 13.2669 5.75729 13.006 6.01816C12.7452 6.27903 12.7452 6.71082 13.006 6.97169L14.4093 8.37498H5.80064C5.43182 8.37498 5.12598 8.68083 5.12598 9.04965C5.12598 9.41846 5.43182 9.72431 5.80064 9.72431H14.4093L13.006 11.1276C12.7452 11.3885 12.7452 11.8203 13.006 12.0811C13.141 12.2161 13.3119 12.279 13.4828 12.279C13.6537 12.279 13.8246 12.2161 13.9596 12.0811L16.5143 9.51741C16.7752 9.26554 16.7752 8.84275 16.5143 8.58188Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/logout-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/logout-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/category-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryTwoSvg",
    ()=>CategoryTwoSvg,
    "default",
    ()=>CategorySvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CategorySvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "color",
                d: "M13.9998 4.564V1.386C13.9998 0.399 13.5518 0 12.4388 0H9.6108C8.4978 0 8.0498 0.399 8.0498 1.386V4.557C8.0498 5.551 8.4978 5.943 9.6108 5.943H12.4388C13.5518 5.95 13.9998 5.551 13.9998 4.564Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M13.9998 12.439V9.611C13.9998 8.498 13.5518 8.05 12.4388 8.05H9.6108C8.4978 8.05 8.0498 8.498 8.0498 9.611V12.439C8.0498 13.552 8.4978 14 9.6108 14H12.4388C13.5518 14 13.9998 13.552 13.9998 12.439Z",
                fill: "#1A73E8"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M5.95 4.564V1.386C5.95 0.399 5.502 0 4.389 0H1.561C0.448 0 0 0.399 0 1.386V4.557C0 5.551 0.448 5.943 1.561 5.943H4.389C5.502 5.95 5.95 5.551 5.95 4.564Z",
                fill: "#1A73E8"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "color",
                d: "M5.95 12.439V9.611C5.95 8.498 5.502 8.05 4.389 8.05H1.561C0.448 8.05 0 8.498 0 9.611V12.439C0 13.552 0.448 14 1.561 14H4.389C5.502 14 5.95 13.552 5.95 12.439Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/category-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function CategoryTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.1998 4.80017H4.7998V11.2002H11.1998V4.80017Z",
                fill: "#23344D"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.4 15.9998C3.72 15.9998 4.8 14.9198 4.8 13.5998V11.1998H2.4C1.08 11.1998 0 12.2798 0 13.5998C0 14.9198 1.08 15.9998 2.4 15.9998Z",
                fill: "#23344D"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.4 4.8H4.8V2.4C4.8 1.08 3.72 0 2.4 0C1.08 0 0 1.08 0 2.4C0 3.72 1.08 4.8 2.4 4.8Z",
                fill: "#23344D"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.2002 4.8H13.6002C14.9202 4.8 16.0002 3.72 16.0002 2.4C16.0002 1.08 14.9202 0 13.6002 0C12.2802 0 11.2002 1.08 11.2002 2.4V4.8Z",
                fill: "#23344D"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.6002 15.9998C14.9202 15.9998 16.0002 14.9198 16.0002 13.5998C16.0002 12.2798 14.9202 11.1998 13.6002 11.1998H11.2002V13.5998C11.2002 14.9198 12.2802 15.9998 13.6002 15.9998Z",
                fill: "#23344D"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/category-svg.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/category-svg.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/lessons-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LessonsSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LessonsSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "14",
        viewBox: "0 0 15 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.9228 10.0426V2.29411C13.9228 1.51825 13.2949 0.953997 12.5252 1.01445H12.4847C11.1276 1.12529 9.07163 1.82055 7.91706 2.53596L7.80567 2.6065C7.62337 2.71733 7.30935 2.71733 7.11692 2.6065L6.9549 2.50573C5.81046 1.79033 3.75452 1.1152 2.3974 1.00437C1.62768 0.943911 0.999756 1.51827 0.999756 2.28405V10.0426C0.999756 10.6573 1.50613 11.2417 2.12393 11.3122L2.30622 11.3425C3.70386 11.5238 5.87126 12.2392 7.10685 12.9143L7.1372 12.9244C7.30937 13.0252 7.59293 13.0252 7.75498 12.9244C8.99057 12.2393 11.1681 11.5339 12.5758 11.3425L12.7885 11.3122C13.4164 11.2417 13.9228 10.6674 13.9228 10.0426Z",
                stroke: "#94928E",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/lessons-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.46118 2.81787V12.4506",
                stroke: "#94928E",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/lessons-svg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/lessons-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/join-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function JoinSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "14",
        viewBox: "0 0 16 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.70732 0.75H8.39024C9.65603 0.75 10.333 1.00147 10.7145 1.38301C11.0961 1.76456 11.3476 2.44153 11.3476 3.70732V9.95122C11.3476 11.217 11.0961 11.894 10.7145 12.2755C10.333 12.6571 9.65603 12.9085 8.39024 12.9085H3.70732C2.53342 12.9085 1.82979 12.5071 1.40543 11.9979C0.961765 11.4655 0.75 10.7255 0.75 9.95122V3.70732C0.75 2.44153 1.00147 1.76456 1.38301 1.38301C1.76456 1.00147 2.44153 0.75 3.70732 0.75Z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/join-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.21976 6.34479C8.03014 6.34479 8.68708 5.68785 8.68708 4.87747C8.68708 4.0671 8.03014 3.41016 7.21976 3.41016C6.40938 3.41016 5.75244 4.0671 5.75244 4.87747C5.75244 5.68785 6.40938 6.34479 7.21976 6.34479Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/join-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.6712 10.4795L13.6684 10.4775L12.8476 9.90073V3.75854L13.6676 3.18235C13.6677 3.18227 13.6678 3.18219 13.668 3.18211C14.021 2.93474 14.2801 2.87809 14.4413 2.87174C14.6067 2.86523 14.7268 2.9096 14.7996 2.94693C14.8665 2.98117 14.9706 3.05164 15.0602 3.19079C15.1476 3.3265 15.2501 3.57203 15.2501 4.00427V9.66281C15.2501 10.095 15.1476 10.3406 15.0602 10.4763C14.9706 10.6154 14.8665 10.6859 14.7996 10.7202L14.7996 10.7201L14.7922 10.724C14.7375 10.7528 14.6301 10.7938 14.4781 10.7938C14.3158 10.7938 14.0436 10.7437 13.6712 10.4795Z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/join-svg.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/join-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/plus-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MinusSvg",
    ()=>MinusSvg,
    "MinusTwoSvg",
    ()=>MinusTwoSvg,
    "PlusFiveSvg",
    ()=>PlusFiveSvg,
    "PlusFourSvg",
    ()=>PlusFourSvg,
    "PlusThreeSvg",
    ()=>PlusThreeSvg,
    "PlusTwoSvg",
    ()=>PlusTwoSvg,
    "default",
    ()=>PlusSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PlusSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-plus",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "19"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/plus-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function PlusTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "14",
        viewBox: "0 0 15 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.21924 7H13.3836",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.30176 13V1",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/plus-svg.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function PlusThreeSvg({ clr = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 1V11",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6H11",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/plus-svg.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function MinusSvg({ clr = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "2",
        viewBox: "0 0 14 2",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1H13",
            stroke: clr,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/plus-svg.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/plus-svg.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function PlusFourSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "11",
        height: "12",
        viewBox: "0 0 11 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6H10",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.5 10.5V1.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/plus-svg.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
function PlusFiveSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "21",
        height: "20",
        viewBox: "0 0 21 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5 6V14",
                stroke: "#556DF5",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.5 10H14.5",
                stroke: "#556DF5",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/plus-svg.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/plus-svg.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
function MinusTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "11",
        height: "2",
        viewBox: "0 0 11 2",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1H10",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/plus-svg.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/plus-svg.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/check-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckTwoSvg",
    ()=>CheckTwoSvg,
    "UnCheckSvg",
    ()=>UnCheckSvg,
    "default",
    ()=>CheckSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CheckSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "11",
        viewBox: "0 0 14 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            opacity: "0.6",
            d: "M13 1.01465L4.75 9.26465L1 5.51465",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/check-svg.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/check-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function CheckTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "8",
        viewBox: "0 0 10 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 1L3.5 6.5L1 4",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/check-svg.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/check-svg.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function UnCheckSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "8",
        height: "8",
        viewBox: "0 0 8 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 1L1 7",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/check-svg.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1L7 7",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/check-svg.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/check-svg.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/process-line-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessLineSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ProcessLineSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "870",
        height: "296",
        viewBox: "0 0 870 296",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#filter0_d_516_680)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "line-dash-path",
                    d: "M853.342 22.8886C854.385 23.2522 855.525 22.7015 855.888 21.6585C856.252 20.6155 855.701 19.4752 854.658 19.1116L853.342 22.8886ZM14.152 252.812C59.9228 274.241 96.2684 275.577 128.165 265.915C159.937 256.29 187.097 235.798 214.555 214.069C269.584 170.519 326.272 121.65 425.637 139.967L426.363 136.033C325.014 117.35 266.977 167.481 212.073 210.932C184.563 232.702 157.954 252.711 127.005 262.086C96.1797 271.424 60.8521 270.26 15.848 249.189L14.152 252.812ZM425.637 139.967C526.964 158.646 583.008 110.792 639.044 67.9641C667.097 46.524 695.075 26.3894 728.82 16.0213C762.488 5.67726 802.067 5.01068 853.342 22.8886L854.658 19.1116C802.683 0.989483 762.227 1.57293 727.646 12.1977C693.144 22.7983 664.661 43.3512 636.616 64.7861C580.456 107.708 525.749 154.354 426.363 136.033L425.637 139.967Z",
                    fill: "url(#paint0_linear_516_680)"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/process-line-svg.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "filter0_d_516_680",
                        x: "0.151855",
                        y: "0.742432",
                        width: "869.849",
                        height: "294.924",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                dy: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0.0666667 0 0 0 0 0.0862745 0 0 0 0 0.113725 0 0 0 0.2 0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_516_680"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_516_680",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svg/process-line-svg.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_516_680",
                        x1: "17.0171",
                        y1: "231.999",
                        x2: "833.375",
                        y2: "56.1402",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.48739",
                                stopColor: "#09B1AB"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#FDBF62"
                            }, void 0, false, {
                                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/svg/process-line-svg.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/svg/process-line-svg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/process-line-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/circle-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CircleSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "tp-circle-svg",
        xmlns: "http://www.w3.org/2000/svg",
        width: "152",
        height: "152",
        viewBox: "0 0 152 152",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                id: "tp-cicle-path-934",
                fill: "#F0EC51",
                d: "M18,76a58,58,0,1,1,58,58A58,58,0,0,1,18,76"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/circle-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                className: "tp-circle-text",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                    xlinkHref: "#tp-cicle-path-934",
                    children: "STOP WISHING • START DOING"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/circle-svg.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/svg/circle-svg.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/circle-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/play-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioPlayerSvg",
    ()=>AudioPlayerSvg,
    "PlaySvg",
    ()=>PlaySvg,
    "PlayTwoSvg",
    ()=>PlayTwoSvg,
    "VideoPlayerFourSvg",
    ()=>VideoPlayerFourSvg,
    "VideoPlayerSvg",
    ()=>VideoPlayerSvg,
    "VideoPlayerThreeSvg",
    ()=>VideoPlayerThreeSvg,
    "VideoPlayerTwoSvg",
    ()=>VideoPlayerTwoSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PlaySvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "tp-svg--play",
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "22",
        viewBox: "0 0 18 22",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1L16.5556 11L1 21V1Z",
            fill: "#010F1C",
            stroke: "#161613",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/play-svg.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/play-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function PlayTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "18",
        viewBox: "0 0 14 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 1.83167C0 1.0405 0.875246 0.562658 1.54076 0.990487L12.6915 8.15882C13.3038 8.55246 13.3038 9.44754 12.6915 9.84118L1.54076 17.0095C0.875246 17.4373 0 16.9595 0 16.1683V1.83167Z",
            fill: "#031F42"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/play-svg.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/play-svg.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function VideoPlayerSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "14",
        viewBox: "0 0 12 14",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 7.00012L0 0.0719185L0 13.9283L12 7.00012Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/play-svg.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/play-svg.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function VideoPlayerTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.67773 9.00041V7.81641C6.67773 6.28841 7.75773 5.67241 9.07773 6.43241L10.1017 7.02441L11.1257 7.61641C12.4457 8.37641 12.4457 9.62441 11.1257 10.3844L10.1017 10.9764L9.07773 11.5684C7.75773 12.3284 6.67773 11.7044 6.67773 10.1844V9.00041Z",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/play-svg.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function VideoPlayerThreeSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.61133 7.50075V6.53875C5.61133 5.29725 6.48883 4.79675 7.56133 5.41425L8.39333 5.89525L9.22533 6.37625C10.2978 6.99375 10.2978 8.00775 9.22533 8.62525L8.39333 9.10625L7.56133 9.58725C6.48883 10.2048 5.61133 9.69775 5.61133 8.46275V7.50075Z",
                stroke: "#6C7275",
                strokeWidth: "1.2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z",
                stroke: "#6C7275",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/play-svg.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function VideoPlayerFourSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "15",
        viewBox: "0 0 18 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M13.5 14.4H4.5C1.8 14.4 0 12.6 0 9.9V4.5C0 1.8 1.8 0 4.5 0H13.5C16.2 0 18 1.8 18 4.5V9.9C18 12.6 16.2 14.4 13.5 14.4Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.96871 4.28506L11.6406 5.88599C12.6574 6.50256 12.6574 7.49773 11.6406 8.1143L8.96871 9.71522C7.88701 10.3642 7 9.86666 7 8.60107V5.3884C7 4.13363 7.88701 3.63604 8.96871 4.28506Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/play-svg.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
function AudioPlayerSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 12.6667V8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8V12.6667",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 13.4444C15 13.857 14.8361 14.2527 14.5444 14.5444C14.2527 14.8361 13.857 15 13.4444 15H12.6667C12.2541 15 11.8584 14.8361 11.5667 14.5444C11.275 14.2527 11.1111 13.857 11.1111 13.4444V11.1111C11.1111 10.6985 11.275 10.3029 11.5667 10.0112C11.8584 9.71943 12.2541 9.55554 12.6667 9.55554H15V13.4444ZM1 13.4444C1 13.857 1.16389 14.2527 1.45561 14.5444C1.74733 14.8361 2.143 15 2.55556 15H3.33333C3.74589 15 4.14155 14.8361 4.43328 14.5444C4.725 14.2527 4.88889 13.857 4.88889 13.4444V11.1111C4.88889 10.6985 4.725 10.3029 4.43328 10.0112C4.14155 9.71943 3.74589 9.55554 3.33333 9.55554H1V13.4444Z",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/play-svg.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/play-svg.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/close-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseFiveSvg",
    ()=>CloseFiveSvg,
    "CloseFourSvg",
    ()=>CloseFourSvg,
    "CloseThreeSvg",
    ()=>CloseThreeSvg,
    "CloseTwoSvg",
    ()=>CloseTwoSvg,
    "default",
    ()=>CloseSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CloseSvg({ clr = "white" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 1L1 9",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1L9 9",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/close-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function CloseTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 1L1 9",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1L9 9",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/close-svg.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function CloseThreeSvg({ clr = "currentColor" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "svg-2",
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 1L1 11",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1L11 11",
                stroke: clr,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/close-svg.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function CloseFourSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 1L1 13",
                stroke: "#757C8E",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1L13 13",
                stroke: "#757C8E",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/close-svg.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function CloseFiveSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 1L1 15",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1L15 15",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/close-svg.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/close-svg.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/home-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function HomeSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "14",
        viewBox: "0 0 17 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/home-svg.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/home-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/link-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LinkSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LinkSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.0171 15.4763C19.3693 14.6103 18.5427 13.8936 17.5936 13.3751C16.6444 12.8565 15.5949 12.5481 14.5161 12.4709C13.4373 12.3936 12.3545 12.5493 11.3411 12.9273C10.3278 13.3053 9.40756 13.8968 8.64292 14.6617L4.11739 19.1873C2.74345 20.6098 1.9832 22.5151 2.00039 24.4927C2.01757 26.4703 2.81082 28.3621 4.20927 29.7606C5.60772 31.159 7.49949 31.9523 9.47712 31.9694C11.4548 31.9866 13.36 31.2264 14.7826 29.8524L17.3772 27.2729",
                stroke: "#031F42",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/link-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.983 18.4933C14.6308 19.3594 15.4574 20.076 16.4065 20.5946C17.3557 21.1132 18.4052 21.4215 19.484 21.4988C20.5628 21.5761 21.6456 21.4204 22.659 21.0424C23.6723 20.6644 24.5925 20.0729 25.3572 19.3079L29.8827 14.7824C31.2567 13.3599 32.0169 11.4546 31.9997 9.47696C31.9825 7.49933 31.1893 5.60756 29.7908 4.20911C28.3924 2.81066 26.5006 2.01742 24.523 2.00023C22.5454 1.98305 20.6401 2.74329 19.2175 4.11723L16.638 6.69679",
                stroke: "#031F42",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/link-svg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/link-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/quote-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function QuoteSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "44",
        height: "40",
        viewBox: "0 0 44 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M44 1.05264L39.9691 0L25.2477 37.0175L28.0518 40L41.1959 36.8421L44 1.05264Z",
                fill: "#031F42"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/quote-svg.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.7523 1.05264L14.7214 0L0 37.0175L2.80408 40L15.9482 36.8421L18.7523 1.05264Z",
                fill: "#031F42"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/quote-svg.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/quote-svg.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/share-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ShareSvg({ clr = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 5.40002C12.1046 5.40002 13.0001 4.52697 13.0001 3.45001C13.0001 2.37305 12.1046 1.5 11 1.5C9.89545 1.5 9 2.37305 9 3.45001C9 4.52697 9.89545 5.40002 11 5.40002Z",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/share-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.00005 9.95007C4.10464 9.95007 5.00009 9.07702 5.00009 8.00006C5.00009 6.9231 4.10464 6.05005 3.00005 6.05005C1.89545 6.05005 1 6.9231 1 8.00006C1 9.07702 1.89545 9.95007 3.00005 9.95007Z",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/share-svg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 14.5001C12.1046 14.5001 13.0001 13.6271 13.0001 12.5501C13.0001 11.4731 12.1046 10.6001 11 10.6001C9.89545 10.6001 9 11.4731 9 12.5501C9 13.6271 9.89545 14.5001 11 14.5001Z",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/share-svg.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.72656 8.98157L9.28 11.5686",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/share-svg.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.27333 4.4314L4.72656 7.01841",
                stroke: clr,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/share-svg.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/share-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/dots-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotsTwoSvg",
    ()=>DotsTwoSvg,
    "default",
    ()=>DotsSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DotsSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.5",
                d: "M1 5.21053C1 3.22567 1 2.23323 1.61662 1.61662C2.23323 1 3.22567 1 5.21053 1C7.19539 1 8.18782 1 8.80444 1.61662C9.42105 2.23323 9.42105 3.22567 9.42105 5.21053C9.42105 7.19539 9.42105 8.18782 8.80444 8.80444C8.18782 9.42105 7.19539 9.42105 5.21053 9.42105C3.22567 9.42105 2.23323 9.42105 1.61662 8.80444C1 8.18782 1 7.19539 1 5.21053Z",
                stroke: "#5169F1",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dots-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.5",
                d: "M12.5781 16.7896C12.5781 14.8048 12.5781 13.8123 13.1947 13.1957C13.8114 12.5791 14.8038 12.5791 16.7887 12.5791C18.7735 12.5791 19.7659 12.5791 20.3826 13.1957C20.9992 13.8123 20.9992 14.8048 20.9992 16.7896C20.9992 18.7745 20.9992 19.7669 20.3826 20.3835C19.7659 21.0002 18.7735 21.0002 16.7887 21.0002C14.8038 21.0002 13.8114 21.0002 13.1947 20.3835C12.5781 19.7669 12.5781 18.7745 12.5781 16.7896Z",
                stroke: "#5169F1",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dots-svg.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 16.7894C1 14.8045 1 13.8121 1.61662 13.1955C2.23323 12.5789 3.22567 12.5789 5.21053 12.5789C7.19539 12.5789 8.18782 12.5789 8.80444 13.1955C9.42105 13.8121 9.42105 14.8045 9.42105 16.7894C9.42105 18.7742 9.42105 19.7667 8.80444 20.3833C8.18782 20.9999 7.19539 20.9999 5.21053 20.9999C3.22567 20.9999 2.23323 20.9999 1.61662 20.3833C1 19.7667 1 18.7742 1 16.7894Z",
                stroke: "#5169F1",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dots-svg.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.5781 5.21053C12.5781 3.22567 12.5781 2.23323 13.1947 1.61662C13.8114 1 14.8038 1 16.7887 1C18.7735 1 19.7659 1 20.3826 1.61662C20.9992 2.23323 20.9992 3.22567 20.9992 5.21053C20.9992 7.19539 20.9992 8.18782 20.3826 8.80444C19.7659 9.42105 18.7735 9.42105 16.7887 9.42105C14.8038 9.42105 13.8114 9.42105 13.1947 8.80444C12.5781 8.18782 12.5781 7.19539 12.5781 5.21053Z",
                stroke: "#5169F1",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dots-svg.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/dots-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function DotsTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 10.5C15.8284 10.5 16.5 9.82843 16.5 9C16.5 8.17157 15.8284 7.5 15 7.5C14.1716 7.5 13.5 8.17157 13.5 9C13.5 9.82843 14.1716 10.5 15 10.5Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dots-svg.tsx",
                lineNumber: 40,
                columnNumber: 100
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15C16.5 14.1716 15.8284 13.5 15 13.5C14.1716 13.5 13.5 14.1716 13.5 15C13.5 15.8284 14.1716 16.5 15 16.5Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dots-svg.tsx",
                lineNumber: 40,
                columnNumber: 278
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 22.5C15.8284 22.5 16.5 21.8284 16.5 21C16.5 20.1716 15.8284 19.5 15 19.5C14.1716 19.5 13.5 20.1716 13.5 21C13.5 21.8284 14.1716 22.5 15 22.5Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/dots-svg.tsx",
                lineNumber: 40,
                columnNumber: 461
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/dots-svg.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/reply-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReplySvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ReplySvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "10",
        viewBox: "0 0 14 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 1L1 5L5 9",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/reply-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 5.00024L9 5.00024C10.3333 5.00024 13 5.80025 13 9.00025",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/reply-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/reply-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/menu-line.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function MenuLine() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "14",
        viewBox: "0 0 30 14",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                y: "6",
                width: "30",
                height: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/menu-line.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                className: "width",
                width: "20",
                height: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/menu-line.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                className: "width",
                y: "12",
                width: "14",
                height: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/menu-line.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/menu-line.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/programs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MajorPrograms",
    ()=>MajorPrograms,
    "MinorsPrograms",
    ()=>MinorsPrograms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function MajorPrograms() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.4678 3.47313L14.1996 0.341915C13.133 -0.113972 11.5206 -0.113972 10.4539 0.341915L3.18568 3.47313C1.35002 4.26493 1.07715 5.34466 1.07715 5.92052C1.07715 6.49638 1.35002 7.57611 3.18568 8.36791L10.4539 11.4991C10.9872 11.7271 11.657 11.847 12.3268 11.847C12.9965 11.847 13.6663 11.7271 14.1996 11.4991L21.4678 8.36791C23.3035 7.57611 23.5764 6.49638 23.5764 5.92052C23.5764 5.34466 23.3159 4.26493 21.4678 3.47313Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M12.3265 18.0495C11.8552 18.0495 11.3839 17.9536 10.9498 17.7736L2.59008 14.1745C1.31256 13.6226 0.320312 12.147 0.320312 10.7913C0.320312 10.2995 0.729615 9.90356 1.23814 9.90356C1.74667 9.90356 2.15597 10.2995 2.15597 10.7913C2.15597 11.4392 2.71411 12.279 3.33427 12.5429L11.694 16.142C12.0909 16.31 12.5498 16.31 12.9467 16.142L21.3064 12.5429C21.9265 12.279 22.4847 11.4512 22.4847 10.7913C22.4847 10.2995 22.894 9.90356 23.4025 9.90356C23.911 9.90356 24.3203 10.2995 24.3203 10.7913C24.3203 12.135 23.3281 13.6226 22.0505 14.1745L13.6909 17.7736C13.2692 17.9536 12.7978 18.0495 12.3265 18.0495Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M12.3265 24C11.8552 24 11.3839 23.904 10.9498 23.724L2.59008 20.1249C1.21334 19.5371 0.320312 18.2054 0.320312 16.7418C0.320312 16.2499 0.729615 15.854 1.23814 15.854C1.74667 15.854 2.15597 16.2499 2.15597 16.7418C2.15597 17.4976 2.61489 18.1814 3.33427 18.4933L11.694 22.0924C12.0909 22.2604 12.5498 22.2604 12.9467 22.0924L21.3064 18.4933C22.0133 18.1934 22.4847 17.4976 22.4847 16.7418C22.4847 16.2499 22.894 15.854 23.4025 15.854C23.911 15.854 24.3203 16.2499 24.3203 16.7418C24.3203 18.2054 23.4273 19.5251 22.0505 20.1249L13.6909 23.724C13.2692 23.904 12.7978 24 12.3265 24Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/programs.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function MinorsPrograms() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.7993 7.2002H7.19922V16.8002H16.7993V7.2002Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M3.60002 23.9998C5.58003 23.9998 7.20003 22.3798 7.20003 20.3998V16.7998H3.60002C1.62001 16.7998 0 18.4198 0 20.3998C0 22.3798 1.62001 23.9998 3.60002 23.9998Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M3.60002 7.20003H7.20003V3.60002C7.20003 1.62001 5.58003 0 3.60002 0C1.62001 0 0 1.62001 0 3.60002C0 5.58003 1.62001 7.20003 3.60002 7.20003Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M16.8008 7.20003H20.4008C22.3808 7.20003 24.0008 5.58003 24.0008 3.60002C24.0008 1.62001 22.3808 0 20.4008 0C18.4208 0 16.8008 1.62001 16.8008 3.60002V7.20003Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M20.4008 23.9998C22.3808 23.9998 24.0008 22.3798 24.0008 20.3998C24.0008 18.4198 22.3808 16.7998 20.4008 16.7998H16.8008V20.3998C16.8008 22.3798 18.4208 23.9998 20.4008 23.9998Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/programs.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/programs.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/hand-check.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HandCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function HandCheck() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "13",
        viewBox: "0 0 16 13",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.92006 3.56018H0.64002C0.286729 3.56018 0 3.75123 0 3.98739V10.8142C0 11.0494 0.286729 11.2404 0.64002 11.2404H1.92006C2.27335 11.2404 2.56008 11.0494 2.56008 10.8132V3.98643C2.56008 3.75123 2.27335 3.56018 1.92006 3.56018Z",
                fill: "#161613"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/hand-check.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.4462 10.19C10.4462 9.95097 10.3866 9.72544 10.2815 9.52751C10.6581 9.27232 10.9057 8.84094 10.9057 8.35196C10.9057 8.11257 10.8464 7.88698 10.7416 7.68911C11.1179 7.43387 11.3652 7.00268 11.3652 6.51396C11.3652 6.36811 11.3432 6.2274 11.3023 6.09495H14.0818C14.8633 6.09495 15.5008 5.45754 15.5008 4.67595C15.5008 3.89435 14.8633 3.25694 14.0818 3.25694H8.70373L8.98679 3.03179C9.61071 2.54701 9.70937 1.65176 9.21681 1.04119C8.73502 0.423294 7.84836 0.320604 7.23789 0.804966L2.76642 3.94416L2.55371 4.09349V4.35338V10.4721V10.6598L2.6772 10.8011C3.10105 11.2862 3.72517 11.609 4.43222 11.609H9.02723C9.80883 11.609 10.4462 10.9716 10.4462 10.19Z",
                stroke: "#161613"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/hand-check.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/hand-check.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/tuition-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArtDesignSvg",
    ()=>ArtDesignSvg,
    "BusinessSvg",
    ()=>BusinessSvg,
    "ComputerScienceSvg",
    ()=>ComputerScienceSvg,
    "EconomicsSvg",
    ()=>EconomicsSvg,
    "ManagementSvg",
    ()=>ManagementSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function EconomicsSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "28",
        viewBox: "0 0 24 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.1808 15.21H9.81999C9.25062 15.21 8.78906 15.6577 8.78906 16.21V26.9999C8.78906 27.5522 9.25062 27.9999 9.81999 27.9999H14.1808C14.7502 27.9999 15.2117 27.5522 15.2117 26.9999V16.21C15.2117 15.6577 14.7502 15.21 14.1808 15.21Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.39175 9.39997H1.03093C0.895417 9.39951 0.761148 9.42507 0.635859 9.47516C0.510569 9.52526 0.396735 9.5989 0.300911 9.69185C0.205087 9.7848 0.129168 9.89522 0.077525 10.0167C0.0258823 10.1383 -0.000463116 10.2685 6.16053e-06 10.4V26.9999C-2.97329e-05 27.1313 0.0266112 27.2613 0.0784074 27.3827C0.130204 27.504 0.206139 27.6143 0.301877 27.7071C0.397614 27.8 0.511277 27.8737 0.636371 27.9239C0.761465 27.9741 0.895539 28 1.03093 27.9999H5.39175C5.66492 27.9992 5.92668 27.8936 6.11984 27.7062C6.313 27.5188 6.42188 27.2649 6.42267 26.9999V10.4C6.42271 10.2686 6.39607 10.1386 6.34428 10.0172C6.29248 9.8959 6.21655 9.78565 6.12081 9.69278C6.02507 9.59991 5.91141 9.52626 5.78631 9.47601C5.66122 9.42577 5.52714 9.39993 5.39175 9.39997Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.9699 19.8151H18.6091C18.3359 19.8158 18.0741 19.9214 17.881 20.1088C17.6878 20.2962 17.5789 20.5501 17.5781 20.8151V27.0001C17.5789 27.265 17.6878 27.5189 17.881 27.7063C18.0741 27.8937 18.3359 27.9993 18.6091 28.0001H22.9699C23.1053 28.0001 23.2393 27.9742 23.3644 27.924C23.4895 27.8738 23.6032 27.8001 23.6989 27.7072C23.7947 27.6144 23.8706 27.5041 23.9224 27.3828C23.9742 27.2614 24.0008 27.1314 24.0008 27.0001V20.8151C24.0008 20.6837 23.9742 20.5537 23.9224 20.4323C23.8706 20.311 23.7947 20.2007 23.6989 20.1079C23.6032 20.015 23.4895 19.9413 23.3644 19.8911C23.2393 19.8409 23.1053 19.815 22.9699 19.8151Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.20959 4.31811C3.36938 4.31814 3.5257 4.36339 3.65938 4.44832C3.79305 4.53325 3.89827 4.65417 3.96214 4.79626C4.02601 4.93834 4.04575 5.09542 4.01894 5.24822C3.99214 5.40103 3.91995 5.54293 3.81123 5.65653C3.7025 5.77012 3.56197 5.85048 3.40686 5.88775C3.25175 5.92501 3.0888 5.91757 2.93799 5.86632C2.78718 5.81508 2.65505 5.72227 2.55782 5.59926C2.46059 5.47625 2.40247 5.3284 2.39059 5.17382C2.37866 5.04302 2.31417 4.92201 2.21106 4.83693C2.10794 4.75184 1.97446 4.70951 1.83944 4.71906C1.70443 4.72862 1.5787 4.7893 1.4894 4.888C1.40011 4.98669 1.35441 5.1155 1.36218 5.2466C1.39205 5.61069 1.53549 5.95734 1.77342 6.24043C2.01135 6.52351 2.33249 6.72963 2.69413 6.83135V7.13649C2.69413 7.2691 2.74844 7.39628 2.84511 7.49004C2.94178 7.58381 3.07289 7.63649 3.2096 7.63649C3.34631 7.63649 3.47742 7.58381 3.57408 7.49004C3.67075 7.39628 3.72506 7.2691 3.72506 7.13649V6.83149C4.15332 6.71201 4.52261 6.44638 4.76484 6.08356C5.00707 5.72074 5.10591 5.28521 5.04312 4.85727C4.98033 4.42933 4.76016 4.03783 4.4232 3.75497C4.08625 3.4721 3.65522 3.31694 3.2096 3.3181C3.05104 3.31808 2.89589 3.27352 2.76287 3.18981C2.62986 3.10611 2.52468 2.98683 2.46004 2.84639C2.3954 2.70596 2.37406 2.55037 2.39861 2.39843C2.42315 2.24648 2.49253 2.10468 2.59836 1.99016C2.70419 1.87563 2.84194 1.79328 2.99498 1.75306C3.14801 1.71283 3.30978 1.71645 3.46074 1.76347C3.61171 1.81049 3.7454 1.89891 3.84568 2.01804C3.94596 2.13717 4.00853 2.28192 4.02583 2.4348C4.03271 2.50036 4.05288 2.56394 4.08519 2.62191C4.11749 2.67987 4.16129 2.73107 4.21406 2.77256C4.26683 2.81405 4.32754 2.84501 4.39269 2.86366C4.45784 2.88231 4.52616 2.88829 4.5937 2.88124C4.66124 2.87419 4.72667 2.85427 4.78625 2.8226C4.84582 2.79094 4.89835 2.74816 4.94082 2.69674C4.98329 2.64531 5.01486 2.58625 5.03372 2.52295C5.05258 2.45964 5.05835 2.39335 5.0507 2.32788C5.01108 1.9747 4.86379 1.64102 4.62765 1.36946C4.39151 1.09791 4.07725 0.90084 3.72504 0.803434V0.499999C3.72504 0.367391 3.67073 0.240215 3.57406 0.146447C3.4774 0.0526784 3.34629 0 3.20958 0C3.07287 0 2.94176 0.0526784 2.84509 0.146447C2.74842 0.240215 2.69411 0.367391 2.69411 0.499999V0.804929C2.26962 0.927899 1.90473 1.19458 1.6658 1.55646C1.42688 1.91834 1.32981 2.35139 1.39223 2.77683C1.45465 3.20227 1.67243 3.59185 2.00595 3.87471C2.33947 4.15756 2.76658 4.3149 3.20959 4.31811Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.8107 14.4245L20.4263 14.1215C20.5618 14.105 20.6851 14.0373 20.7694 13.9331C20.8537 13.829 20.8923 13.6967 20.8768 13.5651L20.5612 11.0285C20.5532 10.9632 20.5321 10.9001 20.4989 10.8428C20.4658 10.7854 20.4213 10.735 20.368 10.6943C20.3148 10.6537 20.2538 10.6236 20.1885 10.6059C20.1232 10.5881 20.055 10.583 19.9877 10.5909C19.9204 10.5988 19.8554 10.6194 19.7963 10.6517C19.7373 10.684 19.6854 10.7273 19.6436 10.779C19.6018 10.8308 19.571 10.89 19.5528 10.9534C19.5347 11.0167 19.5296 11.0829 19.5378 11.1482L19.7024 12.4713L8.38792 5.45677C8.27275 5.38783 8.13424 5.36559 8.0023 5.39484C7.87036 5.42408 7.75557 5.50248 7.6827 5.6131C7.60982 5.72372 7.58471 5.85771 7.61277 5.98613C7.64084 6.11456 7.71984 6.22713 7.83272 6.29955L19.0772 13.2707L17.6884 13.4314C17.5542 13.4489 17.4325 13.517 17.3496 13.6208C17.2667 13.7247 17.2292 13.856 17.2453 13.9864C17.2613 14.1168 17.3296 14.2359 17.4354 14.3179C17.5412 14.3999 17.676 14.4382 17.8107 14.4245Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/tuition-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function ManagementSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.294 15.333C9.34569 15.0255 8.44039 15.4389 7.62796 15.909L4.30717 17.8306L6.76639 22.1736L7.37925 21.82C7.48391 21.7599 7.603 21.7477 7.71113 21.7765L14.2483 23.5259C15.0723 23.7466 15.8516 23.6468 16.5802 23.1986C19.5862 21.3536 22.5886 19.5026 25.5924 17.654C26.0493 17.3729 26.1085 16.6048 25.8378 16.1689C25.2407 15.2073 23.5868 16.0079 22.8997 16.4079L17.9336 19.2988C17.5402 19.5277 17.1356 19.6732 16.7157 19.7437C16.3011 19.8133 15.8742 19.8085 15.4306 19.7376L14.8447 19.6426C14.8226 19.639 14.8006 19.6358 14.7789 19.6305C13.6632 19.4014 12.5825 19.0528 11.484 18.7586C11.2492 18.6959 11.1098 18.4548 11.1725 18.2201C11.2352 17.9854 11.4765 17.846 11.7113 17.9088C12.7853 18.1964 13.8498 18.542 14.9386 18.7671C15.4917 18.8347 15.948 18.6603 16.1016 18.0877C16.2408 17.5683 15.9131 17.0788 15.4222 16.9088C13.9308 16.6359 12.4833 16.1129 11.3451 15.7017C10.9491 15.5586 10.5912 15.4293 10.294 15.333ZM16.1374 7.31622C16.397 7.05686 16.8216 7.05686 17.0811 7.31622L17.7572 7.99196L19.5864 6.16365C19.8459 5.90429 20.2706 5.90429 20.5301 6.16365C20.7896 6.42301 20.7896 6.84743 20.5301 7.10679L18.242 9.39364C17.9112 9.7243 17.4686 9.58991 17.1753 9.29669L16.1374 8.25941C15.8779 7.99999 15.8779 7.57558 16.1374 7.31622ZM24.2866 6.42588C24.137 5.79732 23.8877 5.19684 23.5487 4.64674L24.0621 3.49125L22.6992 2.12904L21.5427 2.64237C20.9924 2.30367 20.3919 2.05455 19.7631 1.90497L19.3089 0.72548H17.3814L16.9272 1.90497C16.2984 2.05455 15.6979 2.30367 15.1476 2.64237L13.9911 2.12904L12.6282 3.49131L13.1417 4.64701C12.8028 5.19706 12.5536 5.79737 12.4039 6.42582L11.2239 6.8798V8.80627L12.4038 9.26014C12.5534 9.88869 12.8027 10.4892 13.1417 11.0393L12.6282 12.1947L13.9912 13.5569L15.1476 13.0436C15.698 13.3823 16.2984 13.6314 16.9272 13.7809L17.3814 14.9604H19.3089L19.763 13.7812C20.3919 13.6317 20.9927 13.3825 21.5431 13.0437L22.6992 13.5569L24.0621 12.1946L23.5485 11.0388C23.8873 10.4888 24.1366 9.88864 24.2862 9.26019L25.4663 8.80621V6.87974L24.2866 6.42588ZM18.3337 11.5583C16.2448 11.5583 14.5514 9.86579 14.5514 7.77801C14.5514 5.69018 16.2448 3.9977 18.3337 3.9977C20.4226 3.9977 22.1161 5.69018 22.1161 7.77801C22.1161 9.86579 20.4226 11.5583 18.3337 11.5583ZM7.14647 7.72378L7.75201 9.31778C7.77018 9.36567 7.8126 9.39645 7.86377 9.39893L9.56768 9.48195C9.68358 9.48757 9.731 9.63352 9.64056 9.70613L8.31089 10.7743C8.2709 10.8064 8.2547 10.8562 8.2682 10.9057L8.71575 12.551C8.74616 12.6628 8.62205 12.753 8.52494 12.6895L7.09761 11.7557C7.0547 11.7276 7.00237 11.7276 6.95946 11.7557L5.53218 12.6895C5.43512 12.753 5.31096 12.6629 5.34137 12.551L5.78893 10.9057C5.80237 10.8562 5.78623 10.8064 5.74624 10.7743L4.41657 9.70613C4.32612 9.63346 4.37355 9.48757 4.48944 9.48195L6.19335 9.39893C6.24458 9.39645 6.28694 9.36567 6.30517 9.31778L6.91065 7.72378C6.95153 7.61599 7.10554 7.61599 7.14647 7.72378ZM7.14647 0.0808475L7.75195 1.67484C7.77018 1.72274 7.81254 1.75351 7.86377 1.75599L9.56762 1.83901C9.68352 1.84463 9.73095 1.99058 9.6405 2.06319L8.31083 3.13136C8.2709 3.16346 8.2547 3.21323 8.26814 3.26272L8.7157 4.90802C8.74616 5.01989 8.622 5.11007 8.52489 5.0466L7.09761 4.11276C7.0547 4.08468 7.00231 4.08468 6.95946 4.11276L5.53218 5.0466C5.43512 5.11013 5.31091 5.01995 5.34137 4.90802L5.78893 3.26272C5.80237 3.21328 5.78617 3.16351 5.74624 3.13136L4.41657 2.06319C4.32612 1.99058 4.3736 1.84463 4.48944 1.83901L6.19335 1.75599C6.24458 1.75351 6.28694 1.72274 6.30512 1.67484L6.91065 0.0808475C6.95153 -0.0269492 7.10549 -0.0269492 7.14647 0.0808475ZM6.85673 24.1216L2.76031 16.8874C2.56223 16.5376 2.11384 16.4134 1.76384 16.6113L0.370496 17.3995C0.0204929 17.5975 -0.103776 18.0456 0.0943052 18.3954L4.19078 25.6297C4.38886 25.9795 4.83724 26.1037 5.18725 25.9057L6.58059 25.1176C6.93049 24.9196 7.05481 24.4714 6.85673 24.1216ZM1.9649 18.9557C1.69306 18.9954 1.44044 18.8074 1.40067 18.5357C1.36096 18.264 1.54907 18.0115 1.82096 17.9717C2.0928 17.932 2.34542 18.1201 2.38519 18.3918C2.4249 18.6635 2.23674 18.916 1.9649 18.9557Z",
            fill: "#B1040E"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/tuition-svg.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/tuition-svg.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function BusinessSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "22",
        height: "23",
        viewBox: "0 0 22 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.9993 5.73195C20.0641 4.69778 18.5019 4.18069 16.2355 4.18069H15.9715V4.13668C15.9715 2.28838 15.9715 0 11.8348 0H10.1625C6.02581 0 6.02581 2.29938 6.02581 4.13668V4.19169H5.76177C3.48439 4.19169 1.93314 4.70878 0.997984 5.74295C-0.0911965 6.95315 -0.0581912 8.58142 0.051827 9.6926L0.0628288 9.76961L0.172847 10.9248C0.183849 10.9358 0.205853 10.9578 0.227856 10.9688C0.590916 11.2109 0.964978 11.4529 1.36104 11.6729C1.51507 11.7719 1.6801 11.86 1.84512 11.948C3.72643 12.9821 5.79478 13.6753 7.89612 14.0163C7.99514 15.0505 8.44621 16.2607 10.8556 16.2607C13.265 16.2607 13.7381 15.0615 13.8151 13.9943C16.0595 13.6313 18.2268 12.8501 20.1852 11.7059C20.2512 11.6729 20.2952 11.6399 20.3502 11.6069C20.8563 11.3209 21.3293 11.0128 21.7914 10.6718C21.8134 10.6608 21.8354 10.6388 21.8464 10.6168L21.8904 10.2207L21.9454 9.7036C21.9565 9.63759 21.9564 9.58258 21.9675 9.50557C22.0555 8.39439 22.0335 6.87614 20.9993 5.73195ZM12.1978 13.2682C12.1978 14.4344 12.1978 14.6104 10.8446 14.6104C9.49139 14.6104 9.49139 14.4014 9.49139 13.2792V11.893H12.1978V13.2682ZM7.59907 4.18069V4.13668C7.59907 2.26638 7.59907 1.57326 10.1625 1.57326H11.8348C14.3982 1.57326 14.3982 2.27738 14.3982 4.13668V4.19169H7.59907V4.18069Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M20.3512 11.5849C20.2962 11.6179 20.2411 11.6509 20.1861 11.6839C18.2278 12.8281 16.0605 13.5982 13.8161 13.9723C13.7281 15.0285 13.266 16.2387 10.8566 16.2387C8.4472 16.2387 7.98512 15.0395 7.89711 13.9943C5.79576 13.6642 3.72742 12.9711 1.8461 11.9259C1.68108 11.8379 1.51605 11.7499 1.36202 11.6509C0.965959 11.4309 0.591897 11.1888 0.228837 10.9468C0.206834 10.9358 0.18483 10.9138 0.173828 10.9028L0.844939 18.065C1.07598 20.2543 1.97813 22.5097 6.81893 22.5097H15.2023C20.0431 22.5097 20.9453 20.2543 21.1763 18.054L21.8694 10.5947C21.8584 10.6167 21.8364 10.6387 21.8144 10.6497C21.3413 10.9908 20.8572 11.3098 20.3512 11.5849Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/tuition-svg.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
function ComputerScienceSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.57913 24C6.23695 24 5.9596 23.7226 5.9596 23.3805C5.9596 23.0383 6.23695 22.7609 6.57913 22.7609H8.95947C9.1259 21.8177 9.20005 20.7737 9.11956 19.837H1.75055C0.783683 19.837 0 19.0533 0 18.0864V4.08889C0 3.12202 0.783683 2.33834 1.75055 2.33834H9.98695L10.0419 2.24328L12.8998 3.89326L9.05205 10.5577L6.19413 8.90775L9.35741 3.42867H1.75055C1.38552 3.42867 1.09033 3.72386 1.09033 4.08889V16.0637H23.2943V4.08889C23.2943 3.72386 22.9992 3.42867 22.6341 3.42867C19.7819 3.42867 16.9298 3.42867 14.0776 3.42867L10.5375 1.38476L10.8605 0.825293C11.3161 0.036109 12.3253 -0.234304 13.1144 0.221324C13.8586 0.650982 14.1414 1.5728 13.7892 2.33829H22.6342C23.601 2.33829 24.3847 3.12197 24.3847 4.08884V18.0864C24.3847 19.0533 23.601 19.837 22.6341 19.837H15.2091C15.1305 20.7737 15.2175 21.8177 15.3969 22.7609H17.7844C18.1266 22.7609 18.4039 23.0382 18.4039 23.3804C18.4039 23.7226 18.1266 24 17.7844 24H6.57913V24ZM18.8632 9.86828C18.8632 9.59474 18.6418 9.37265 18.3675 9.37265H13.2334C12.9597 9.37265 12.7378 9.59474 12.7378 9.86828C12.7378 10.1418 12.9597 10.3639 13.2334 10.3639H18.3675C18.6418 10.364 18.8632 10.1418 18.8632 9.86828ZM7.01731 12.0186L8.30857 11.2731L5.94627 9.90922V12.0237C5.70609 12.0581 5.52147 12.2646 5.52147 12.5142C5.52147 12.788 5.74336 13.0099 6.01709 13.0099H18.3675C18.6412 13.0099 18.8631 12.788 18.8631 12.5142C18.8631 12.2405 18.6412 12.0186 18.3675 12.0186H7.01731Z",
            fill: "#B1040E"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/tuition-svg.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/tuition-svg.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function ArtDesignSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "26",
        viewBox: "0 0 24 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.1377 11.5114C19.1627 11.8363 19.0502 12.1738 18.8002 12.4238L11.2756 19.9485C9.61312 21.6109 7.9382 21.6109 6.26327 19.9485L1.25099 14.9362C0.401025 14.0737 -0.0239568 13.2113 0.00104216 12.3488H0.088538L18.9877 11.5239L19.1377 11.5114Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M18.7992 10.7488L9.61208 1.5617L8.52463 0.474256C8.16215 0.111772 7.56217 0.111772 7.19969 0.474256C6.8372 0.83674 6.8372 1.43671 7.19969 1.7992L8.28714 2.88664L1.24995 9.92384C0.449981 10.7238 0.0249989 11.5363 0 12.3487H0.0874958L18.9867 11.5238L19.1367 11.5113C19.1242 11.2363 18.9992 10.9488 18.7992 10.7488Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.4993 25.8858H1.24996C0.737482 25.8858 0.3125 25.4608 0.3125 24.9483C0.3125 24.4358 0.737482 24.0109 1.24996 24.0109H17.4993C18.0117 24.0109 18.4367 24.4358 18.4367 24.9483C18.4367 25.4608 18.0117 25.8858 17.4993 25.8858Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.6873 15.9236C21.3624 15.5736 20.7624 15.5736 20.4374 15.9236C20.0499 16.3486 18.125 18.5235 18.125 20.1609C18.125 21.7858 19.4374 23.0983 21.0624 23.0983C22.6873 23.0983 23.9997 21.7858 23.9997 20.1609C23.9997 18.5235 22.0748 16.3486 21.6873 15.9236Z",
                fill: "#B1040E"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tuition-svg.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/tuition-svg.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/location.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationFive",
    ()=>LocationFive,
    "LocationFour",
    ()=>LocationFour,
    "LocationThree",
    ()=>LocationThree,
    "LocationTwo",
    ()=>LocationTwo,
    "default",
    ()=>Location
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Location() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "17",
        viewBox: "0 0 14 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.53162 0.93677C5.71647 -0.332725 8.40201 -0.310536 10.5664 0.994893C12.7094 2.32691 14.0119 4.70417 13.9999 7.26143C13.9499 9.80192 12.5533 12.19 10.8075 14.0361C9.79981 15.1064 8.6726 16.0528 7.44883 16.856C7.32279 16.9289 7.18474 16.9777 7.04147 17C6.90359 16.9941 6.7693 16.9534 6.65074 16.8814C4.78242 15.6745 3.14333 14.134 1.81233 12.3339C0.698586 10.8313 0.0658344 9.01599 0 7.13441L0.00498621 6.86068C0.0959219 4.40464 1.42479 2.16093 3.53162 0.93677ZM7.90725 5.03476C7.01906 4.65723 5.99503 4.86234 5.31331 5.55434C4.63158 6.24633 4.42663 7.28871 4.79415 8.19477C5.16168 9.10082 6.02917 9.69183 6.99159 9.69183C7.62209 9.69636 8.22817 9.44381 8.67479 8.99046C9.12141 8.53711 9.37147 7.92062 9.36924 7.27837C9.37259 6.29802 8.79544 5.4123 7.90725 5.03476Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/location.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function LocationTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.375 6.72727C12.375 11.1818 6.6875 15 6.6875 15C6.6875 15 1 11.1818 1 6.72727C1 5.20831 1.59922 3.75155 2.66583 2.67748C3.73244 1.60341 5.17908 1 6.6875 1C8.19592 1 9.64256 1.60341 10.7092 2.67748C11.7758 3.75155 12.375 5.20831 12.375 6.72727Z",
                stroke: "#84807B",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.6888 8.63654C7.73584 8.63654 8.58464 7.78181 8.58464 6.72745C8.58464 5.67309 7.73584 4.81836 6.6888 4.81836C5.64176 4.81836 4.79297 5.67309 4.79297 6.72745C4.79297 7.78181 5.64176 8.63654 6.6888 8.63654Z",
                stroke: "#84807B",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/location.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function LocationThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "17",
        viewBox: "0 0 15 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 7.13636C14 11.9091 7.5 16 7.5 16C7.5 16 1 11.9091 1 7.13636C1 5.5089 1.68482 3.94809 2.90381 2.7973C4.12279 1.64651 5.77609 1 7.5 1C9.22391 1 10.8772 1.64651 12.0962 2.7973C13.3152 3.94809 14 5.5089 14 7.13636Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.49992 9.18173C8.69654 9.18173 9.66659 8.26595 9.66659 7.13627C9.66659 6.0066 8.69654 5.09082 7.49992 5.09082C6.3033 5.09082 5.33325 6.0066 5.33325 7.13627C5.33325 8.26595 6.3033 9.18173 7.49992 9.18173Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/location.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function LocationFour() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_6207_333)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 6.6665C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.6665C2 5.07521 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.07521 14 6.6665Z",
                        stroke: "#57595F",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/location.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z",
                        stroke: "#57595F",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/location.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_6207_333",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/location.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/location.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/location.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
function LocationFive() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.99377 10.1461C9.39262 10.1461 10.5266 9.0283 10.5266 7.64946C10.5266 6.27061 9.39262 5.15283 7.99377 5.15283C6.59493 5.15283 5.46094 6.27061 5.46094 7.64946C5.46094 9.0283 6.59493 10.1461 7.99377 10.1461Z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.19707 6.1933C2.79633 -0.736432 13.2118 -0.72843 14.803 6.2013C15.7365 10.2663 13.1712 13.7072 10.9225 15.8357C9.29079 17.3881 6.70924 17.3881 5.06939 15.8357C2.8288 13.7072 0.263493 10.2583 1.19707 6.1933Z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/location.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/location.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/worksheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Worksheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Worksheet() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M15.3 6.9615H12.8435C10.829 6.9615 9.1885 5.321 9.1885 3.3065V0.85C9.1885 0.3825 8.806 0 8.3385 0H4.7345C2.1165 0 0 1.7 0 4.7345V12.2655C0 15.3 2.1165 17 4.7345 17H11.4155C14.0335 17 16.15 15.3 16.15 12.2655V7.8115C16.15 7.344 15.7675 6.9615 15.3 6.9615Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/worksheet.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.3055 0.178445C10.957 -0.170055 10.3535 0.0679453 10.3535 0.552445V3.51894C10.3535 4.75994 11.4075 5.78845 12.691 5.78845C13.4985 5.79695 14.6205 5.79695 15.581 5.79695C16.0655 5.79695 16.3205 5.22745 15.9805 4.88745C14.7565 3.65495 12.5635 1.43645 11.3055 0.178445Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/worksheet.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.3498 9.98765H4.2498C3.9013 9.98765 3.6123 9.69865 3.6123 9.35015C3.6123 9.00165 3.9013 8.71265 4.2498 8.71265H9.3498C9.6983 8.71265 9.9873 9.00165 9.9873 9.35015C9.9873 9.69865 9.6983 9.98765 9.3498 9.98765Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/worksheet.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.6498 13.3875H4.2498C3.9013 13.3875 3.6123 13.0985 3.6123 12.75C3.6123 12.4015 3.9013 12.1125 4.2498 12.1125H7.6498C7.9983 12.1125 8.2873 12.4015 8.2873 12.75C8.2873 13.0985 7.9983 13.3875 7.6498 13.3875Z",
                fill: "#292D32"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/worksheet.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/worksheet.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/tel-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelSvgThree",
    ()=>TelSvgThree,
    "TelSvgTwo",
    ()=>TelSvgTwo,
    "default",
    ()=>TelSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function TelSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.058 7.87487C13.671 7.87487 13.365 7.55987 13.365 7.18187C13.365 6.84887 13.032 6.15587 12.474 5.55287C11.925 4.96787 11.322 4.62587 10.818 4.62587C10.431 4.62587 10.125 4.31087 10.125 3.93287C10.125 3.55487 10.44 3.23987 10.818 3.23987C11.718 3.23987 12.663 3.72587 13.491 4.59887C14.265 5.41787 14.76 6.43487 14.76 7.17287C14.76 7.55987 14.445 7.87487 14.058 7.87487Z",
                fill: "#FFF7F1"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tel-svg.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.3058 7.875C16.9188 7.875 16.6128 7.56 16.6128 7.182C16.6128 3.987 14.0118 1.395 10.8258 1.395C10.4388 1.395 10.1328 1.08 10.1328 0.702C10.1328 0.324 10.4388 0 10.8168 0C14.7768 0 17.9988 3.222 17.9988 7.182C17.9988 7.56 17.6838 7.875 17.3058 7.875Z",
                fill: "#FFF7F1"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tel-svg.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M8.811 10.989L5.868 13.932C5.544 13.644 5.229 13.347 4.923 13.041C3.996 12.105 3.159 11.124 2.412 10.098C1.674 9.072 1.08 8.046 0.648 7.029C0.216 6.003 0 5.022 0 4.086C0 3.474 0.108 2.889 0.324 2.349C0.54 1.8 0.882 1.296 1.359 0.846C1.935 0.279 2.565 0 3.231 0C3.483 0 3.735 0.0540001 3.96 0.162C4.194 0.27 4.401 0.432 4.563 0.666L6.651 3.609C6.813 3.834 6.93 4.041 7.011 4.239C7.092 4.428 7.137 4.617 7.137 4.788C7.137 5.004 7.074 5.22 6.948 5.427C6.831 5.634 6.66 5.85 6.444 6.066L5.76 6.777C5.661 6.876 5.616 6.993 5.616 7.137C5.616 7.209 5.625 7.272 5.643 7.344C5.67 7.416 5.697 7.47 5.715 7.524C5.877 7.821 6.156 8.208 6.552 8.676C6.957 9.144 7.389 9.621 7.857 10.098C8.181 10.413 8.496 10.719 8.811 10.989Z",
                fill: "#FFF7F1"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tel-svg.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.9728 14.6969C17.9728 14.9489 17.9278 15.2099 17.8378 15.4619C17.8108 15.5339 17.7838 15.6059 17.7478 15.6779C17.5948 16.0019 17.3968 16.3079 17.1358 16.5959C16.6948 17.0819 16.2088 17.4329 15.6598 17.6579C15.6508 17.6579 15.6418 17.6669 15.6328 17.6669C15.1018 17.8829 14.5258 17.9999 13.9048 17.9999C12.9868 17.9999 12.0058 17.7839 10.9708 17.3429C9.93584 16.9019 8.90084 16.3079 7.87484 15.5609C7.52384 15.2999 7.17284 15.0389 6.83984 14.7599L9.78284 11.8169C10.0348 12.0059 10.2598 12.1499 10.4488 12.2489C10.4938 12.2669 10.5478 12.2939 10.6108 12.3209C10.6828 12.3479 10.7548 12.3569 10.8358 12.3569C10.9888 12.3569 11.1058 12.3029 11.2048 12.2039L11.8888 11.5289C12.1138 11.3039 12.3298 11.1329 12.5368 11.0249C12.7438 10.8989 12.9508 10.8359 13.1758 10.8359C13.3468 10.8359 13.5268 10.8719 13.7248 10.9529C13.9228 11.0339 14.1298 11.1509 14.3548 11.3039L17.3338 13.4189C17.5678 13.5809 17.7298 13.7699 17.8288 13.9949C17.9188 14.2199 17.9728 14.4449 17.9728 14.6969Z",
                fill: "#FFF7F1"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tel-svg.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/tel-svg.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function TelSvgTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10.291 3.86696C10.9924 4.00354 11.637 4.34592 12.1424 4.85028C12.6477 5.35463 12.9907 5.99801 13.1276 6.69808M10.291 1C11.7483 1.16158 13.1072 1.81291 14.1446 2.84704C15.182 3.88118 15.8363 5.23665 16 6.69091M15.2819 12.4105V14.5607C15.2827 14.7603 15.2417 14.9579 15.1616 15.1408C15.0815 15.3237 14.964 15.4879 14.8166 15.6228C14.6692 15.7578 14.4952 15.8605 14.3058 15.9244C14.1163 15.9884 13.9156 16.0121 13.7164 15.9942C11.5067 15.7545 9.38404 15.0009 7.5191 13.7938C5.78402 12.6934 4.31297 11.2251 3.21043 9.49336C1.99681 7.62353 1.24154 5.49467 1.00583 3.27923C0.987883 3.08103 1.01148 2.88127 1.07513 2.69267C1.13877 2.50407 1.24106 2.33076 1.37549 2.18378C1.50992 2.0368 1.67353 1.91937 1.85592 1.83896C2.03831 1.75855 2.23548 1.71693 2.43487 1.71674H4.58921C4.93771 1.71332 5.27557 1.83649 5.53981 2.06331C5.80406 2.29012 5.97665 2.6051 6.02543 2.94953C6.11636 3.63765 6.28499 4.31329 6.52811 4.96357C6.62472 5.22011 6.64564 5.49891 6.58836 5.76695C6.53109 6.03498 6.39803 6.28101 6.20496 6.47589L5.29296 7.38614C6.31523 9.18053 7.8038 10.6663 9.60163 11.6866L10.5136 10.7763C10.7089 10.5836 10.9554 10.4508 11.2239 10.3936C11.4925 10.3365 11.7718 10.3574 12.0288 10.4538C12.6804 10.6964 13.3573 10.8648 14.0467 10.9555C14.3956 11.0046 14.7142 11.18 14.9419 11.4483C15.1696 11.7165 15.2906 12.059 15.2819 12.4105Z",
            stroke: "#57595F",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/tel-svg.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/tel-svg.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function TelSvgThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "18",
        viewBox: "0 0 15 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.9148 5V13C13.9148 16.2 13.1076 17 9.87892 17H5.03587C1.80717 17 1 16.2 1 13V5C1 1.8 1.80717 1 5.03587 1H9.87892C13.1076 1 13.9148 1.8 13.9148 5Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tel-svg.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M9.08026 3.80054H5.85156",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tel-svg.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M7.45425 14.6795C8.14522 14.6795 8.70537 14.1243 8.70537 13.4395C8.70537 12.7546 8.14522 12.1995 7.45425 12.1995C6.76327 12.1995 6.20312 12.7546 6.20312 13.4395C6.20312 14.1243 6.76327 14.6795 7.45425 14.6795Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tel-svg.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/tel-svg.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/calender-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalenderThreeSvg",
    ()=>CalenderThreeSvg,
    "CalenderTwoSvg",
    ()=>CalenderTwoSvg,
    "default",
    ()=>CalenderSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CalenderSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.4444 2.55554H2.55556C1.69645 2.55554 1 3.25199 1 4.1111V15C1 15.8591 1.69645 16.5555 2.55556 16.5555H13.4444C14.3036 16.5555 15 15.8591 15 15V4.1111C15 3.25199 14.3036 2.55554 13.4444 2.55554Z",
                stroke: "#B8BABC",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.1113 1V4.11111",
                stroke: "#B8BABC",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.88867 1V4.11111",
                stroke: "#B8BABC",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 7.22223H15",
                stroke: "#B8BABC",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/calender-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function CalenderTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "16",
        viewBox: "0 0 15 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M1.06836 6.18262H13.5451",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M10.4102 8.91699H10.4194",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M7.30273 8.91699H7.312",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M4.1875 8.91699H4.19676",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M10.4102 11.6377H10.4194",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M7.30273 11.6377H7.312",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M4.1875 11.6377H4.19676",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.1289 1V3.30355",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.47656 1V3.30355",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.2668 2.10547H4.33967C2.28399 2.10547 1 3.25062 1 5.35559V11.6903C1 13.8284 2.28399 15 4.33967 15H10.2603C12.3225 15 13.6 13.8483 13.6 11.7433V5.35559C13.6065 3.25062 12.329 2.10547 10.2668 2.10547Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/calender-svg.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function CalenderThreeSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.6667 2.33325H2.33333C1.59695 2.33325 1 2.93021 1 3.66659V12.9999C1 13.7363 1.59695 14.3333 2.33333 14.3333H11.6667C12.403 14.3333 13 13.7363 13 12.9999V3.66659C13 2.93021 12.403 2.33325 11.6667 2.33325Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 136,
                columnNumber: 100
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.66602 1V3.66667",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 136,
                columnNumber: 404
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.33398 1V3.66667",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 136,
                columnNumber: 520
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6.33325H13",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/calender-svg.tsx",
                lineNumber: 136,
                columnNumber: 636
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/calender-svg.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/world-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorldSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function WorldSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 10H19",
                stroke: "#2D4CFF",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/world-svg.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z",
                stroke: "#2D4CFF",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/world-svg.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.9999 1C12.2511 3.46452 13.5304 6.66283 13.5999 10C13.5304 13.3372 12.2511 16.5355 9.9999 19C7.74875 16.5355 6.46942 13.3372 6.3999 10C6.46942 6.66283 7.74875 3.46452 9.9999 1Z",
                stroke: "#2D4CFF",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/world-svg.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/world-svg.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/tutor-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TutorIconOne",
    ()=>TutorIconOne,
    "TutorIconThree",
    ()=>TutorIconThree,
    "TutorIconTwo",
    ()=>TutorIconTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function TutorIconOne() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "42",
        height: "30",
        viewBox: "0 0 42 30",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M40.4192 10.2148C41.0286 10.0341 41.1715 9.69793 41.1841 9.44579C41.1967 9.20197 41.0958 8.8616 40.5285 8.60946L23.9112 1.2085C22.8773 0.746307 21.8225 0.162038 20.6373 0.0318053C19.3346 -0.111111 18.0821 0.250341 16.9222 0.662205C11.0847 2.21724 7.66372 3.90242 2.00272 5.97435C0.56532 6.49972 -0.153302 7.33597 0.0274239 8.26481C0.182943 9.06753 0.956179 9.4836 1.60766 9.75675C4.28478 10.8788 7.10473 11.7194 9.80698 12.602C8.04189 15.0731 7.09205 17.8174 6.85251 21.2006C6.83991 21.3898 6.95334 21.5621 7.12986 21.6251L19.7631 26.1471H19.7715C19.8135 26.1639 19.8598 26.1723 19.9059 26.1723C19.9522 26.1723 19.9983 26.1639 20.0404 26.1471H20.0488L32.682 21.6251C32.8626 21.5621 32.9762 21.3898 32.9594 21.2006C32.7324 18.0234 32.2491 15.7456 30.4252 13.1862L37.1241 11.1941C37.0779 14.0982 37.0485 13.9259 36.9981 16.9686C35.9978 17.0905 35.1742 17.6327 34.7539 18.4689C34.5522 18.864 34.4556 19.3136 34.4556 19.7634C34.4556 20.3433 34.6152 20.9317 34.9347 21.4361C35.2372 21.9151 35.6786 22.3018 36.1786 22.5665C35.4684 24.6427 35.0818 26.5339 34.3674 28.5385C34.1446 29.1521 34.4136 29.5976 35.1197 29.6522L39.6417 29.9967C40.3561 30.0514 40.9403 29.4084 40.8016 28.694C40.3352 26.2775 39.8266 24.3526 39.1668 22.5077C39.4736 22.3311 39.7509 22.1042 39.9736 21.8268C40.7134 20.9275 40.8521 19.5826 40.3099 18.5487C39.8559 17.6788 38.9188 17.0736 37.8387 16.9601C37.8933 13.8039 37.9186 14.0519 37.9689 10.9419L40.4192 10.2148ZM24.4029 11.7908C24.5079 11.753 24.6298 11.8076 24.6676 11.9168C24.7096 12.0303 24.6508 12.1479 24.5415 12.1858L21.2845 13.3373C21.1752 13.3751 21.0575 13.3163 21.0155 13.207C20.9776 13.0977 21.0365 12.9801 21.1458 12.9381L24.4029 11.7908ZM19.2462 7.67222C19.9985 7.28136 20.9273 7.57971 21.5703 8.11349C22.1334 8.58417 22.0746 9.21457 21.4484 9.51712C20.944 9.76095 19.8388 9.76095 19.2462 9.45831C18.3721 9.00864 18.4898 8.06728 19.2462 7.67222ZM5.45736 8.60097C4.46131 8.23112 4.44862 7.5335 4.95299 7.09215C5.16312 6.90722 5.42367 6.819 5.65061 6.73498L11.9672 4.48653C12.0807 4.44872 12.1983 4.50334 12.2362 4.61264C12.274 4.72195 12.2193 4.84378 12.1101 4.88159L5.78932 7.13004C5.58759 7.20566 5.38166 7.27716 5.23042 7.40739C5.12111 7.50401 5.02449 7.67642 5.0623 7.82346C5.11691 8.00418 5.35233 8.11349 5.60439 8.20599L10.8115 10.1265C10.9208 10.1686 10.9754 10.2904 10.9375 10.3997C10.8955 10.5091 10.7736 10.5636 10.6644 10.5216L5.45736 8.60097ZM11.8748 10.9881C11.8075 11.0805 11.6773 11.1016 11.5847 11.0301L11.3284 10.841C11.2318 10.7737 11.2149 10.6393 11.2821 10.5468C11.3536 10.4544 11.4838 10.4334 11.5763 10.5049L11.8327 10.694C11.9252 10.7611 11.9462 10.8956 11.8748 10.9881ZM32.098 20.9442L19.9061 25.3066L7.71413 20.9442C7.98736 17.7754 8.92872 15.1949 10.6392 12.8793C12.005 13.3332 13.3709 13.8164 14.6947 14.367C16.3674 15.0646 18.0232 15.8673 19.8514 15.9051C21.1627 15.9303 22.352 15.5816 23.6128 15.2075L29.568 13.4382C31.3541 15.8548 31.8668 17.9897 32.098 20.9442ZM31.6315 7.41159C31.5852 7.5209 31.4633 7.56711 31.3583 7.5209L25.5712 4.9951C25.4661 4.94889 25.4199 4.82706 25.4661 4.71775C25.5124 4.61272 25.6343 4.56643 25.7435 4.61272L31.5263 7.13852C31.6315 7.18465 31.6777 7.30657 31.6315 7.41159ZM39.9779 28.8536C40.0074 29.0175 39.8771 29.1687 39.7048 29.1561L35.1828 28.8116H35.1618C35.8888 26.7648 36.2586 24.9367 36.9647 22.8564C37.4396 22.9657 37.8935 22.9572 38.3894 22.827C39.0239 24.6173 39.5199 26.4959 39.9779 28.8536Z",
            fill: "#4661FD"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/tutor-icon.tsx",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/tutor-icon.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
function TutorIconTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "40",
        height: "35",
        viewBox: "0 0 40 35",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M39.3297 8.95436C38.2787 6.05524 36.3219 3.46143 33.826 1.64819C32.6919 0.828561 31.6342 0.393957 30.6654 0.341927C30.6522 0.339971 30.6044 0.335567 30.5919 0.337764C28.7768 0.27233 27.7574 1.48872 26.6763 2.91316C26.5294 3.0761 23.8914 6.89565 19.0609 9.99224C19.0575 9.99713 19.0533 9.99786 19.0499 10.0027C19.0499 10.0027 19.0458 10.0035 19.0417 10.0042L13.1065 14.2937C13.103 14.2985 13.0996 14.3035 13.0955 14.3042C13.0962 14.3084 13.0921 14.3091 13.0879 14.3098C8.63483 17.9182 4.15945 19.2385 3.98062 19.3172C2.82944 19.7129 1.52826 20.1566 0.771168 21.2325C0.0106555 22.3133 -0.0701696 23.8226 0.53298 25.7128C1.47055 28.649 3.32119 31.3215 5.74388 33.2291C6.9478 34.1777 8.43587 34.9392 9.91817 34.5751C11.2413 34.256 12.1375 33.1427 12.9246 32.1643C13.1484 31.9277 15.8468 28.2562 20.9053 24.7766C20.9094 24.7759 20.9087 24.7717 20.9087 24.7717C20.9467 24.7436 22.2013 23.8413 22.2013 23.8413C22.53 26.6536 23.1218 29.2567 24.092 32.1829C24.1469 32.3489 24.2999 32.4632 24.4727 32.4713C24.6455 32.4795 24.8083 32.3822 24.879 32.2241L25.9627 29.8181L28.9244 32.1833C29.0495 32.2855 29.2245 32.306 29.3785 32.2317C29.5234 32.1547 29.6163 32.0012 29.6086 31.8356C29.4931 29.0671 29.0812 26.4879 28.6117 23.996C31.3646 25.5411 32.118 26.0723 35.936 27.5112C36.0918 27.5693 36.265 27.5302 36.3818 27.4154C36.4979 27.2965 36.5358 27.1226 36.4789 26.9699L35.1623 23.415L37.783 23.1414C37.9555 23.1238 38.1007 22.9996 38.1484 22.8328C38.192 22.6666 38.1299 22.4847 37.9916 22.3806C35.5217 20.5455 33.2351 19.1666 30.677 17.9726C32.3658 17.0065 34.1213 16.1744 35.9287 15.4915L36.0656 15.4417C37.7852 14.7957 39.2849 14.1415 39.7077 12.3362L39.7111 12.3313C39.7192 12.3042 39.7224 12.2737 39.7264 12.2473C39.9193 11.3265 39.7939 10.2263 39.3297 8.95436ZM12.2703 31.637C11.5278 32.5519 10.7612 33.5009 9.71837 33.7577C8.72463 34.0015 7.56942 33.5968 6.26549 32.5672C3.97619 30.7604 2.22408 28.2333 1.33576 25.4554C0.817628 23.8289 0.861364 22.5702 1.46094 21.7191C2.06051 20.8679 3.17577 20.487 4.25016 20.1177C4.47673 20.0178 8.72937 18.771 13.1514 15.3266C14.6277 19.4231 16.8948 22.4891 19.9096 24.4508C15.19 27.8107 12.8066 31.0583 12.2703 31.637ZM19.5298 21.2278C19.4607 21.3214 19.3326 21.3483 19.2348 21.2798C17.3817 19.9787 16.0499 17.9644 15.5817 15.7465C15.5578 15.635 15.6282 15.5241 15.7438 15.4994C15.858 15.4665 15.9703 15.5451 15.995 15.6608C16.4401 17.7715 17.7087 19.6941 19.4779 20.9328C19.5714 21.0019 19.5949 21.1349 19.5298 21.2278ZM20.4663 21.898C20.4069 21.9985 20.2761 22.0344 20.1757 21.975L19.8221 21.7675C19.7216 21.708 19.6858 21.5773 19.7452 21.4769C19.8045 21.3764 19.9361 21.3447 20.0365 21.4041L20.39 21.6116C20.4905 21.671 20.5215 21.7983 20.4663 21.898ZM33.734 4.40611C34.3063 4.78499 34.8148 5.31222 35.2055 5.92446C35.5083 6.40226 35.933 6.94007 36.1259 7.54865C36.3025 8.11292 36.2605 8.87008 35.7608 9.29228C35.0705 9.87237 34.215 9.46635 33.5545 8.85458C32.9612 8.30803 32.4529 7.66085 32.0417 6.93213C31.8365 6.56991 31.5961 6.08111 31.5729 5.53681C31.5432 4.88233 31.8686 4.29799 32.3677 4.11576C32.7616 3.9693 33.2244 4.06756 33.734 4.40611ZM29.8249 4.05444C29.7966 3.40826 30.0167 2.83392 30.4198 2.47157C30.9164 2.03277 31.6679 1.99448 32.1266 2.3848C32.2168 2.45892 32.2277 2.59402 32.1537 2.68424C32.079 2.77022 31.9438 2.78121 31.8536 2.70717C31.5613 2.45887 31.0325 2.49637 30.703 2.79007C30.3948 3.05862 30.2243 3.52564 30.2458 4.0359C30.283 4.90326 30.7947 5.69133 31.2465 6.38273C31.3112 6.48266 31.2827 6.61197 31.1868 6.67598C31.0868 6.74072 30.9576 6.71212 30.8936 6.61626C30.4354 5.91305 29.8653 5.03687 29.8249 4.05444ZM28.7136 30.9396L26.065 28.8191C25.9609 28.7389 25.8308 28.7061 25.7042 28.7413C25.5768 28.7723 25.4723 28.8593 25.4158 28.9764L24.5596 30.8753C23.7521 28.2632 23.2613 25.8692 22.9838 23.2749C23.827 22.6635 26.3962 20.8096 27.0375 20.3409C27.141 20.8796 27.2446 21.4183 27.3537 21.9645C27.9224 24.8245 28.5063 27.7717 28.7136 30.9396ZM35.7674 14.6505L35.6312 14.7045C32.4457 15.9045 29.4168 17.5566 26.6124 19.6062C23.5308 17.7035 21.2403 14.6501 19.7955 10.5138C24.5831 7.36908 27.2056 3.58234 27.349 3.4243C27.5709 3.12807 27.7971 2.83116 28.0351 2.55366C27.8989 3.4815 28.1715 4.37168 28.4686 5.13327C29.6901 8.24658 31.8028 10.8985 34.5681 12.8056C35.2647 13.2825 36.1122 13.7885 37.1157 13.9158C37.2205 13.9272 37.3198 13.9312 37.4224 13.9303C36.9161 14.2165 36.3382 14.4384 35.7674 14.6505Z",
            fill: "#4661FD"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/tutor-icon.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/tutor-icon.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
function TutorIconThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "40",
        height: "34",
        viewBox: "0 0 40 34",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M31.4756 14.7773C31.3388 10.8337 29.045 7.03179 25.6202 5.07197C22.1954 3.11214 17.7554 3.06067 14.2861 4.94056C10.8168 6.82045 8.43548 10.5682 8.20721 14.5076L5.70099 13.2139C6.17619 8.56316 9.09653 4.23212 13.2298 2.04788C17.3632 -0.136354 22.5868 -0.108774 26.6969 2.11884C30.8069 4.34645 33.6814 8.70819 34.1076 13.3636L31.4756 14.7773Z",
                fill: "#4661FD"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tutor-icon.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.4715 33.0031C19.1403 33.1232 19.8577 33.0557 20.4322 32.7038C20.8011 32.4781 21.0908 32.1416 21.2675 31.7557C25.3887 32.2859 29.4964 30.4481 31.8856 27.3931C32.606 27.9455 33.5419 28.2458 34.4986 28.2458C35.1876 28.2458 35.8859 28.0919 36.5183 27.7687C40.1388 25.9177 40.0733 20.3507 39.9671 18.6883C39.8535 16.9129 39.222 15.3712 38.1888 14.3474C37.2042 13.3722 35.8248 12.8524 34.4733 12.9277C33.9111 8.25525 31.0403 3.99911 26.8955 1.75257C22.6341 -0.557383 17.322 -0.586085 13.0353 1.67953C8.82345 3.90522 5.8894 8.19649 5.32031 12.9208C4.03821 12.9077 2.74529 13.4219 1.81124 14.3474C0.77801 15.3712 0.146462 16.9129 0.0329329 18.6883C-0.0733005 20.3506 -0.138805 25.9177 3.48171 27.7687C4.11406 28.0919 4.81199 28.2458 5.50095 28.2458C6.81776 28.2458 8.1017 27.6831 8.82802 26.6655C9.44698 25.7989 9.63579 24.7505 9.76399 23.8358C9.99554 22.1869 10.0908 20.5077 10.0473 18.8448C10.0143 17.5792 9.88939 16.2515 9.20733 15.1166C9.0469 14.8496 8.85215 14.6046 8.6376 14.3776C8.90996 10.6408 11.189 7.09286 14.4849 5.3071C17.8259 3.49624 22.1162 3.54627 25.4132 5.43386C28.695 7.31166 30.9038 10.9582 31.0555 14.7356C30.9619 14.8585 30.872 14.9843 30.7924 15.1166C30.1109 16.2518 29.9859 17.5792 29.9529 18.8446C29.9094 20.5078 30.0046 22.187 30.2362 23.8359C30.3644 24.7504 30.5532 25.7989 31.1721 26.6655C31.2069 26.7143 31.2489 26.7569 31.2862 26.8036C29.0213 29.7585 25.1524 31.386 21.4558 30.9404C21.4635 30.396 21.2515 29.8521 20.8706 29.4738C20.4661 29.0723 19.9224 28.8843 19.4434 28.7533C18.8131 28.581 18.164 28.4601 17.5145 28.394C17.1019 28.3515 16.6648 28.3362 16.2522 28.5004C15.4461 28.8219 14.9818 29.7841 15.1958 30.6909C15.5901 32.3628 17.8025 32.8834 18.4715 33.0031ZM37.7567 25.5407L31.1392 16.3567C31.2341 16.0742 31.3531 15.8018 31.5069 15.546C31.6067 15.3799 31.7254 15.2262 31.8516 15.0786L38.4382 24.2159C38.2523 24.6952 38.026 25.1407 37.7567 25.5407ZM38.6063 23.7369L32.1451 14.7732C32.4692 14.4728 32.8472 14.2293 33.2582 14.0548L39.0023 22.0229C38.9119 22.6145 38.782 23.1915 38.6063 23.7369ZM37.6019 14.9395C38.4407 15.7703 38.9678 17.0232 39.1093 18.4832L35.8102 13.9015C36.4758 14.089 37.1003 14.4424 37.6019 14.9395ZM34.3831 13.7633C34.4991 13.7527 34.6151 13.7474 34.7315 13.7474C34.8914 13.7474 35.0509 13.7607 35.2098 13.7804L39.1591 19.2649C39.1817 19.9707 39.1575 20.6992 39.0806 21.4192L33.6659 13.9082C33.8997 13.8386 34.139 13.7858 34.3831 13.7633ZM2.39805 14.9395C2.89682 14.445 3.51715 14.0946 4.1786 13.9065L0.89202 18.4707C1.0353 17.0162 1.56165 15.7679 2.39805 14.9395ZM0.841429 19.2534L4.78249 13.7803C5.05909 13.7456 5.33875 13.7379 5.61648 13.7633C5.85861 13.7856 6.09577 13.8379 6.32772 13.9064L0.918478 21.4099C0.84175 20.689 0.818338 19.9598 0.841429 19.2534ZM0.996329 22.0141L6.73582 14.0525C7.1472 14.2265 7.52547 14.4693 7.85019 14.7692L1.3912 23.7296C1.21585 23.1836 1.08629 22.6061 0.996329 22.0141ZM8.93866 23.7199C8.82393 24.5369 8.65908 25.4681 8.15005 26.1813C7.61094 26.9354 6.67601 27.3681 5.69 27.4137L9.05523 22.7418C9.0206 23.0686 8.98428 23.3952 8.93866 23.7199ZM9.12779 21.9289L5.18569 27.4016C4.73174 27.3612 4.27914 27.2404 3.86094 27.0265C3.85156 27.0217 3.8433 27.0152 3.834 27.0103L9.21751 19.5411C9.22008 20.3368 9.19001 21.1339 9.12779 21.9289ZM9.2127 18.8355L3.47554 26.7953C3.10584 26.5487 2.78322 26.2402 2.50003 25.8862L9.00096 16.8641C9.14712 17.5016 9.19482 18.1753 9.2127 18.8355ZM8.8584 16.3493L2.2397 25.5349C1.97071 25.1345 1.74445 24.6888 1.55893 24.2092L8.14395 15.074C8.27183 15.223 8.39186 15.3782 8.49272 15.5461C8.64521 15.7995 8.76379 16.0693 8.8584 16.3493ZM25.8273 4.71035C22.2841 2.68318 17.6768 2.62946 14.0877 4.57421C10.7229 6.39757 8.34054 9.93013 7.86165 13.7221C7.34676 13.3747 6.76404 13.1254 6.15013 13.0038C6.68803 8.61661 9.51753 4.48105 13.4244 2.41643C17.4074 0.312368 22.5381 0.338826 26.4984 2.48538C30.3543 4.57533 33.1267 8.6939 33.6485 13.0502C32.9854 13.213 32.3604 13.5183 31.8313 13.9405C31.4225 10.1606 29.1312 6.60122 25.8273 4.71035ZM30.9972 16.8722L37.496 25.8914C37.2125 26.2449 36.8893 26.5526 36.5192 26.7986L30.7869 18.8456C30.8045 18.1851 30.8518 17.5107 30.9972 16.8722ZM30.7824 19.5517L36.1606 27.0137C36.1531 27.0176 36.1465 27.0228 36.139 27.0266C35.7184 27.2415 35.2632 27.3623 34.8068 27.402L30.873 21.9408C30.8106 21.1455 30.7802 20.348 30.7824 19.5517ZM31.0613 23.7199C31.0163 23.3995 30.9806 23.0772 30.9462 22.7547L34.3017 27.4131C33.3185 27.3657 32.3874 26.9339 31.8499 26.1813C31.3408 25.4681 31.1761 24.5369 31.0613 23.7199ZM16.5606 29.2748C16.793 29.182 17.0766 29.1871 17.4298 29.2229C18.0337 29.2846 18.6372 29.3971 19.2236 29.5572C19.6163 29.6648 20.0167 29.8006 20.2829 30.0651C20.8301 30.6081 20.7049 31.5602 19.9976 31.9929C19.6415 32.2108 19.152 32.2782 18.6181 32.1828C17.5007 31.9827 16.2277 31.4355 16.0072 30.4997C15.8895 30.002 16.143 29.441 16.5606 29.2748Z",
                fill: "#4661FD"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tutor-icon.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.746 16.7134C17.11 17.5694 16.3275 18.2311 15.4989 18.9316C14.9133 19.427 14.3074 19.9394 13.7629 20.5239C13.5696 20.731 13.6359 21.0668 13.8919 21.1858C14.8159 21.6149 16.3336 21.5091 17.4201 21.446C17.8918 21.4188 18.3369 21.3931 18.6918 21.3996C18.9119 21.3937 19.1117 21.2206 19.1162 20.9906C19.1203 20.7605 18.9376 20.5705 18.7072 20.5662C18.321 20.5593 17.86 20.5859 17.3717 20.614C16.5545 20.6614 15.5869 20.7176 14.8601 20.6022C15.2406 20.2416 15.6434 19.9008 16.0373 19.568C16.865 18.8677 17.7212 18.1435 18.415 17.2107C18.966 16.4697 19.2924 15.8208 19.4409 15.1689C19.6411 14.2934 19.4946 13.4276 19.0384 12.794C18.3165 11.7899 16.8328 11.4658 15.6625 12.0573C14.6228 12.582 13.924 13.7414 13.8834 15.0108C13.8757 15.2407 14.0563 15.4332 14.2863 15.4407C14.5088 15.4554 14.709 15.2681 14.716 15.0376C14.7469 14.0834 15.2784 13.1847 16.0381 12.8011C16.839 12.3968 17.8811 12.6117 18.3621 13.2807C18.6738 13.7139 18.7735 14.3501 18.6286 14.983C18.5062 15.5187 18.2258 16.0685 17.746 16.7134Z",
                fill: "#4661FD"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tutor-icon.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26.7539 18.947C26.7632 18.717 26.5846 18.5232 26.3547 18.5138C25.9184 18.4959 25.4814 18.484 25.0435 18.4782C25.0273 18.1914 24.849 15.0301 24.7603 13.3801C24.7505 13.1996 24.6256 13.046 24.451 12.9998C24.274 12.9522 24.0917 13.0248 23.9936 13.1766C22.7196 15.153 21.6689 16.9721 20.2096 18.7799C20.105 18.9093 20.0875 19.0887 20.1652 19.2359C20.2429 19.3834 20.4009 19.4694 20.5669 19.4571C21.789 19.36 23.0232 19.3099 24.2549 19.3071C24.2904 19.9432 24.3253 20.579 24.3595 21.2144C24.3717 21.4366 24.5556 21.6087 24.7754 21.6087C24.7831 21.6087 24.7904 21.6085 24.7981 21.6081C25.0281 21.5957 25.2042 21.3993 25.192 21.1696C25.1583 20.5509 25.1244 19.9315 25.0899 19.3122C25.5009 19.3183 25.9115 19.3297 26.3204 19.3463C26.5683 19.354 26.745 19.1769 26.7539 18.947ZM21.436 18.5612C22.3568 17.3355 23.1562 16.062 23.9985 14.7216C24.0558 15.7636 24.0955 16.4631 24.2084 18.4738C23.2835 18.477 22.3573 18.5061 21.436 18.5612Z",
                fill: "#4661FD"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tutor-icon.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.5155 1.84614C18.5462 1.00926 14.2571 2.22401 11.317 5.01598C11.2336 5.09536 11.2303 5.22717 11.3097 5.31063C11.3883 5.39393 11.5209 5.39762 11.6044 5.31833C14.4464 2.61936 18.5947 1.44614 22.4293 2.25392C22.5408 2.27709 22.6526 2.20613 22.6763 2.093C22.6998 1.98043 22.6278 1.86995 22.5155 1.84614Z",
                fill: "#4661FD"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tutor-icon.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.6874 5.71618L10.2951 6.05227C10.2077 6.12716 10.1975 6.25857 10.2724 6.34612C10.3466 6.43287 10.4776 6.44418 10.5662 6.36889L10.9585 6.03239C11.046 5.95751 11.0562 5.82586 10.9813 5.73855C10.906 5.65147 10.7745 5.64129 10.6874 5.71618Z",
                fill: "#4661FD"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/tutor-icon.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/tutor-icon.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/ongoing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ongoing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Ongoing() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "16",
        viewBox: "0 0 15 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.445 15.0008V13.4452C13.445 12.6201 13.1172 11.8287 12.5337 11.2452C11.9502 10.6618 11.1589 10.334 10.3337 10.334H4.11124C3.28609 10.334 2.49473 10.6618 1.91126 11.2452C1.32779 11.8287 1 12.6201 1 13.4452V15.0008",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/ongoing.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.22257 7.22248C8.94085 7.22248 10.3338 5.82953 10.3338 4.11124C10.3338 2.39295 8.94085 1 7.22257 1C5.50428 1 4.11133 2.39295 4.11133 4.11124C4.11133 5.82953 5.50428 7.22248 7.22257 7.22248Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/ongoing.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/ongoing.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/svg/social-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BehanceSvg",
    ()=>BehanceSvg,
    "DribbleSvg",
    ()=>DribbleSvg,
    "FbSvg",
    ()=>FbSvg,
    "GoogleSvg",
    ()=>GoogleSvg,
    "InstagramSvg",
    ()=>InstagramSvg,
    "TwitterSvg",
    ()=>TwitterSvg,
    "YoutubeSvg",
    ()=>YoutubeSvg,
    "YoutubeTwoSvg",
    ()=>YoutubeTwoSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FbSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "17",
        viewBox: "0 0 12 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.84416 7.66625C1.14576 7.66625 1 7.80329 1 8.4599V9.65038C1 10.307 1.14576 10.444 1.84416 10.444H3.53247V15.2059C3.53247 15.8625 3.67823 15.9996 4.37662 15.9996H6.06494C6.76333 15.9996 6.90909 15.8625 6.90909 15.2059V10.444H8.80481C9.33449 10.444 9.47097 10.3472 9.61649 9.86841L9.97827 8.67793C10.2275 7.85769 10.0739 7.66625 9.16659 7.66625H6.90909V5.68212C6.90909 5.2438 7.28703 4.88847 7.75325 4.88847H10.1558C10.8542 4.88847 11 4.75143 11 4.09482V2.50752C11 1.8509 10.8542 1.71387 10.1558 1.71387H7.75325C5.42217 1.71387 3.53247 3.49052 3.53247 5.68212V7.66625H1.84416Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/social-svg.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
function InstagramSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 8C1 4.70017 1 3.05025 2.02513 2.02513C3.05025 1 4.70017 1 8 1C11.2998 1 12.9497 1 13.9749 2.02513C15 3.05025 15 4.70017 15 8C15 11.2998 15 12.9497 13.9749 13.9749C12.9497 15 11.2998 15 8 15C4.70017 15 3.05025 15 2.02513 13.9749C1 12.9497 1 11.2998 1 8Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.3132 7.99987C11.3132 9.83113 9.82869 11.3157 7.99743 11.3157C6.16617 11.3157 4.68164 9.83113 4.68164 7.99987C4.68164 6.16861 6.16617 4.68408 7.99743 4.68408C9.82869 4.68408 11.3132 6.16861 11.3132 7.99987Z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.0605 3.94727L12.0516 3.94727",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
function TwitterSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "15",
        viewBox: "0 0 18 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 12.6C2.41203 13.4168 4.05142 13.8 5.8 13.8C10.9846 13.8 15.2093 9.69 15.3937 4.55038L17 1.4L14.3167 1.8C13.7526 1.30211 13.0116 1 12.2 1C10.1421 1 8.60055 3.01387 9.09675 4.98403C6.25427 5.16742 3.67894 3.41704 2.18954 1.08418C1.20118 4.44148 2.11703 8.48488 4.6 10.9764C4.6 11.9176 2.2 12.4791 1 12.6Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/social-svg.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
function YoutubeSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "17",
        viewBox: "0 0 19 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 15.9998C11.0382 15.9998 12.5133 15.8478 13.8804 15.5692C15.588 15.2211 16.4418 15.0471 17.2209 14.0453C18 13.0436 18 11.8937 18 9.59382V7.95579C18 5.65593 18 4.50599 17.2209 3.50427C16.4418 2.50255 15.588 2.32851 13.8804 1.98043C12.5133 1.70176 11.0382 1.5498 9.5 1.5498C7.96177 1.5498 6.48666 1.70176 5.11957 1.98043C3.41201 2.32851 2.55823 2.50255 1.77911 3.50427C1 4.50599 1 5.65593 1 7.95579V9.59382C1 11.8937 1 13.0436 1.77911 14.0453C2.55823 15.0471 3.41201 15.2211 5.11957 15.5692C6.48666 15.8478 7.96177 15.9998 9.5 15.9998Z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.869 9.04075C12.7428 9.55572 12.0717 9.92556 10.7293 10.6653C9.26933 11.4698 8.53934 11.872 7.94805 11.717C7.74779 11.6646 7.56334 11.5723 7.40846 11.4471C6.95117 11.0773 6.95117 10.3098 6.95117 8.7748C6.95117 7.23977 6.95117 6.47226 7.40846 6.10255C7.56334 5.97734 7.74779 5.88505 7.94805 5.83256C8.53934 5.67759 9.26933 6.07984 10.7293 6.88434C12.0717 7.62404 12.7428 7.99389 12.869 8.50886C12.9119 8.68407 12.9119 8.86553 12.869 9.04075Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
function GoogleSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "mr-10",
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.5642 11.7235C21.5642 10.8961 21.4957 10.2924 21.3474 9.66626H11.707V13.4005H17.3657C17.2517 14.3285 16.6356 15.7261 15.2665 16.6652L15.2473 16.7902L18.2954 19.1044L18.5066 19.125C20.4461 17.3696 21.5642 14.7869 21.5642 11.7235",
                fill: "#4285F4"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.7039 21.5625C14.4761 21.5625 16.8035 20.668 18.5034 19.1251L15.2633 16.6653C14.3963 17.2579 13.2326 17.6716 11.7039 17.6716C8.98861 17.6716 6.68407 15.9163 5.86257 13.4901L5.74215 13.5001L2.5727 15.9039L2.53125 16.0168C4.21972 19.3039 7.68797 21.5625 11.7039 21.5625Z",
                fill: "#34A853"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.86404 13.4901C5.64728 12.864 5.52183 12.1931 5.52183 11.5C5.52183 10.8067 5.64728 10.1359 5.85263 9.50984L5.84689 9.37649L2.63771 6.93405L2.53271 6.983C1.83681 8.34704 1.4375 9.87881 1.4375 11.5C1.4375 13.1212 1.83681 14.6528 2.53271 16.0169L5.86404 13.4901",
                fill: "#FBBC05"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.7039 5.32831C13.632 5.32831 14.9325 6.14448 15.6741 6.82654L18.5719 4.05375C16.7922 2.43257 14.4762 1.4375 11.7039 1.4375C7.688 1.4375 4.21973 3.69595 2.53125 6.98301L5.85118 9.50985C6.6841 7.08367 8.98865 5.32831 11.7039 5.32831",
                fill: "#EB4335"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
function DribbleSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.50589 12.7494C4.57662 16.336 9.16278 17.5648 12.7494 15.4941C14.2113 14.65 15.2816 13.388 15.8962 11.9461C16.7895 9.85066 16.7208 7.37526 15.4941 5.25063C14.2674 3.12599 12.1581 1.82872 9.89669 1.55462C8.34063 1.366 6.71259 1.66183 5.25063 2.50589C1.66403 4.57662 0.435172 9.16278 2.50589 12.7494Z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.7127 15.4292C12.7127 15.4292 12.0086 10.4867 10.5011 7.87559C8.99362 5.26451 5.28935 2.57155 5.28935 2.57155M5.68449 15.6124C6.79553 12.2606 12.34 8.54524 16.3975 9.43537M12.311 2.4082C11.1953 5.72344 5.75732 9.38453 1.71875 8.58915",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
function BehanceSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "11",
        viewBox: "0 0 18 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 5.5715H6.33342C7.62867 5.5715 8.61917 6.56199 8.61917 7.85725C8.61917 9.15251 7.62867 10.143 6.33342 10.143H1.76192C1.30477 10.143 1 9.83823 1 9.38108V1.76192C1 1.30477 1.30477 1 1.76192 1H5.5715C6.86676 1 7.85725 1.99049 7.85725 3.28575C7.85725 4.58101 6.86676 5.5715 5.5715 5.5715H1Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.9062 7.09454H17.0016C17.0016 5.41832 15.6301 4.04688 13.9539 4.04688C12.2777 4.04688 10.9062 5.41832 10.9062 7.09454ZM10.9062 7.09454C10.9062 8.77076 12.2777 10.1422 13.9539 10.1422H15.2492",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.1125 1.44434H11.668",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
function YoutubeTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "14",
        viewBox: "0 0 18 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.75 13H5.25C3 13 1.5 11.5 1.5 9.25V4.75C1.5 2.5 3 1 5.25 1H12.75C15 1 16.5 2.5 16.5 4.75V9.25C16.5 11.5 15 13 12.75 13Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.70676 5.14837L10.8006 6.40465C11.5543 6.90716 11.5543 7.66093 10.8006 8.16344L8.70676 9.41972C7.86923 9.92224 7.19922 9.50348 7.19922 8.5822V6.06964C7.19922 4.98086 7.86923 4.64585 8.70676 5.14837Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/social-svg.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/social-svg.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/eye.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseEye",
    ()=>CloseEye,
    "CloseEyeThree",
    ()=>CloseEyeThree,
    "CloseEyeTwo",
    ()=>CloseEyeTwo,
    "OpenEye",
    ()=>OpenEye,
    "OpenEyeThree",
    ()=>OpenEyeThree,
    "OpenEyeTwo",
    ()=>OpenEyeTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function OpenEye() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "14",
        viewBox: "0 0 18 14",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6.77778C1 6.77778 3.90909 1 9 1C14.0909 1 17 6.77778 17 6.77778C17 6.77778 14.0909 12.5556 9 12.5556C3.90909 12.5556 1 6.77778 1 6.77778Z",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.00018 8.94466C10.2052 8.94466 11.182 7.97461 11.182 6.77799C11.182 5.58138 10.2052 4.61133 9.00018 4.61133C7.79519 4.61133 6.81836 5.58138 6.81836 6.77799C6.81836 7.97461 7.79519 8.94466 9.00018 8.94466Z",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/eye.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
function OpenEyeTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "11",
        viewBox: "0 0 16 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.6808 4.83159C14.8936 5.13001 15 5.27922 15 5.5001C15 5.72097 14.8936 5.87018 14.6808 6.16861C13.7245 7.50949 11.2825 10.4001 8 10.4001C4.71755 10.4001 2.27547 7.50949 1.31923 6.16861C1.10641 5.87018 1 5.72097 1 5.5001C1 5.27922 1.10641 5.13001 1.31923 4.83159C2.27547 3.49071 4.71754 0.600098 8 0.600098C11.2825 0.600098 13.7245 3.49071 14.6808 4.83159Z",
                stroke: "#5169F1",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.0999 5.49985C10.0999 4.34005 9.1597 3.39985 7.9999 3.39985C6.8401 3.39985 5.8999 4.34005 5.8999 5.49985C5.8999 6.65965 6.8401 7.59985 7.9999 7.59985C9.1597 7.59985 10.0999 6.65965 10.0999 5.49985Z",
                stroke: "#5169F1",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/eye.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
function OpenEyeThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "12",
        viewBox: "0 0 15 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.4851 4.007C11.8669 1.4641 9.49912 0 7.00525 0C5.75832 0 4.54641 0.364273 3.43958 1.04378C2.33275 1.7303 1.338 2.73205 0.525394 4.007C-0.175131 5.10683 -0.175131 6.89317 0.525394 7.99299C2.14361 10.5429 4.51138 12 7.00525 12C8.25219 12 9.4641 11.6357 10.5709 10.9562C11.6778 10.2697 12.6725 9.26795 13.4851 7.99299C14.1856 6.90018 14.1856 5.10683 13.4851 4.007ZM7.00525 8.83363C5.43608 8.83363 4.17513 7.56567 4.17513 6.0035C4.17513 4.44133 5.43608 3.17338 7.00525 3.17338C8.57443 3.17338 9.83538 4.44133 9.83538 6.0035C9.83538 7.56567 8.57443 8.83363 7.00525 8.83363Z",
                fill: "#24A148"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M7.00431 3.99976C5.90449 3.99976 5.00781 4.89643 5.00781 6.00326C5.00781 7.10308 5.90449 7.99976 7.00431 7.99976C8.10413 7.99976 9.00781 7.10308 9.00781 6.00326C9.00781 4.90343 8.10413 3.99976 7.00431 3.99976Z",
                fill: "#24A148"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/eye.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
function CloseEye() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "19",
        height: "18",
        viewBox: "0 0 19 18",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.8822 11.7457C6.72311 11.7457 6.56402 11.6871 6.43842 11.5615C5.7518 10.8749 5.375 9.9622 5.375 8.99926C5.375 6.99803 6.99943 5.3736 9.00066 5.3736C9.9636 5.3736 10.8763 5.7504 11.5629 6.43701C11.6801 6.55424 11.7471 6.71333 11.7471 6.8808C11.7471 7.04827 11.6801 7.20736 11.5629 7.32459L7.32599 11.5615C7.20039 11.6871 7.0413 11.7457 6.8822 11.7457ZM9.00066 6.6296C7.69442 6.6296 6.631 7.69302 6.631 8.99926C6.631 9.41793 6.73986 9.81985 6.94082 10.1715L10.1729 6.93941C9.82125 6.73845 9.41933 6.6296 9.00066 6.6296Z",
                fill: "#1C274C"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.5",
                d: "M3.63816 14.4503C3.49582 14.4503 3.3451 14.4001 3.22787 14.2996C2.33192 13.5376 1.52808 12.5998 0.841463 11.5112C-0.0461127 10.1296 -0.0461127 7.87721 0.841463 6.48723C2.88456 3.28861 5.8571 1.44647 8.99711 1.44647C10.8393 1.44647 12.6563 2.08285 14.2472 3.28024C14.5235 3.48957 14.5821 3.88312 14.3728 4.15944C14.1635 4.43576 13.7699 4.49437 13.4936 4.28504C12.1204 3.24674 10.5629 2.70248 8.99711 2.70248C6.29252 2.70248 3.70515 4.32691 1.89651 7.16547C1.2685 8.14516 1.2685 9.85332 1.89651 10.833C2.52451 11.8127 3.24462 12.6584 4.04009 13.345C4.29966 13.5711 4.33315 13.9646 4.10707 14.2326C3.98984 14.3749 3.814 14.4503 3.63816 14.4503Z",
                fill: "#1C274C"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.5",
                d: "M9.00382 16.552C7.89017 16.552 6.80163 16.3259 5.75496 15.8821C5.43678 15.7482 5.28606 15.3797 5.42003 15.0616C5.554 14.7434 5.92243 14.5927 6.24062 14.7266C7.12819 15.1034 8.05764 15.296 8.99545 15.296C11.7 15.296 14.2874 13.6716 16.0961 10.833C16.7241 9.85333 16.7241 8.14517 16.0961 7.16548C15.8365 6.75519 15.5518 6.36164 15.2503 5.99321C15.0326 5.72527 15.0745 5.33172 15.3425 5.10564C15.6104 4.88793 16.0039 4.92142 16.23 5.19775C16.5566 5.59967 16.8748 6.03508 17.1595 6.48724C18.047 7.86885 18.047 10.1213 17.1595 11.5113C15.1164 14.7099 12.1438 16.552 9.00382 16.552Z",
                fill: "#1C274C"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.58061 12.5747C9.28754 12.5747 9.01959 12.3654 8.96098 12.0639C8.89399 11.7206 9.12007 11.3941 9.46338 11.3355C10.3845 11.168 11.1548 10.3976 11.3223 9.47657C11.3893 9.13327 11.7158 8.91556 12.0591 8.97417C12.4024 9.04116 12.6285 9.36772 12.5615 9.71103C12.2936 11.1596 11.1381 12.3068 9.69783 12.5747C9.65597 12.5663 9.62247 12.5747 9.58061 12.5747Z",
                fill: "#1C274C"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.625908 18.0007C0.466815 18.0007 0.307721 17.9421 0.18212 17.8165C-0.0607068 17.5736 -0.0607068 17.1717 0.18212 16.9289L6.43702 10.674C6.67984 10.4312 7.08177 10.4312 7.32459 10.674C7.56742 10.9168 7.56742 11.3188 7.32459 11.5616L1.0697 17.8165C0.944096 17.9421 0.785002 18.0007 0.625908 18.0007Z",
                fill: "#1C274C"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.122 7.50881C10.9629 7.50881 10.8038 7.45019 10.6782 7.32459C10.4354 7.08177 10.4354 6.67984 10.6782 6.43702L16.9331 0.182121C17.1759 -0.0607068 17.5779 -0.0607068 17.8207 0.182121C18.0635 0.424948 18.0635 0.826869 17.8207 1.0697L11.5658 7.32459C11.4402 7.45019 11.2811 7.50881 11.122 7.50881Z",
                fill: "#1C274C"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/eye.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
function CloseEyeTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.52538 5.00264C0.868466 4.4565 1.26056 3.96638 1.66667 3.52527L4.30632 6.16493C4.2223 6.42399 4.17329 6.70406 4.17329 6.99814C4.17329 8.56653 5.44061 9.82684 7.002 9.82684C7.29607 9.82684 7.57614 9.77783 7.83521 9.69381L10.2578 12.1164C9.23556 12.6906 8.12928 12.9916 7.002 12.9916C5.75569 12.9916 4.54438 12.6275 3.43811 11.9484C2.33183 11.2622 1.33758 10.261 0.52538 8.98663C-0.174794 7.89436 -0.174794 6.10191 0.52538 5.00264Z",
                fill: "#BCBDBF"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.58315 5.58363L8.41185 8.41234C8.76894 8.04825 9 7.54412 9 6.99798C9 5.89871 8.10378 4.99548 6.9975 4.99548C6.45136 4.99548 5.94724 5.22654 5.58315 5.58363Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.62216 2.62196L4.99575 4.99556C5.50688 4.47743 6.21405 4.16935 6.99825 4.16935C8.56664 4.16935 9.82696 5.43667 9.82696 6.99806C9.82696 7.78225 9.51188 8.48943 9.00075 9.00056L11.3673 11.3742H11.3743C12.1515 10.744 12.8657 9.93879 13.4749 8.98656C14.175 7.88728 14.175 6.10183 13.4749 5.00256C12.6627 3.72824 11.6684 2.72699 10.5621 2.04082C9.45586 1.36865 8.24456 0.997559 6.99825 0.997559C5.43686 0.997559 3.92448 1.5717 2.62216 2.62196Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.99566 6.99867C4.99566 8.09794 5.89188 9.00117 6.99816 9.00117C7.04017 9.00117 7.07518 9.00117 7.11719 8.98717L5.00966 6.87964C4.99566 6.92165 4.99566 6.95666 4.99566 6.99867Z",
                fill: "#BCBDBF"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.157133 0.157539C0.367186 -0.0525131 0.710272 -0.0525131 0.920324 0.157539L13.8386 13.0828C14.0486 13.2928 14.0486 13.6359 13.8386 13.846C13.7335 13.944 13.6005 14 13.4605 14C13.3204 14 13.1874 13.944 13.0824 13.839L0.157133 0.913728C-0.0599213 0.703676 -0.0599213 0.367592 0.157133 0.157539Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/eye.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
function CloseEyeThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 13 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M0.486178 4.6454C0.804758 4.13828 1.16885 3.68316 1.54594 3.27356L3.99706 5.72467C3.91904 5.96523 3.87352 6.2253 3.87352 6.49837C3.87352 7.95473 5.05032 9.12502 6.50018 9.12502C6.77325 9.12502 7.03331 9.07951 7.27387 9.00149L9.52344 11.2511C8.5742 11.7842 7.54694 12.0638 6.50018 12.0638C5.34289 12.0638 4.21811 11.7257 3.19085 11.095C2.1636 10.4579 1.24037 9.52812 0.486178 8.34483C-0.163983 7.33057 -0.163983 5.66616 0.486178 4.6454Z",
                fill: "#24A148"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.18268 5.18493L7.80933 7.81159C8.14092 7.4735 8.35547 7.00539 8.35547 6.49826C8.35547 5.4775 7.52326 4.63879 6.496 4.63879C5.98888 4.63879 5.52076 4.85335 5.18268 5.18493Z",
                fill: "#24A148"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.43486 2.43465L4.63891 4.6387C5.11353 4.15758 5.77019 3.87151 6.49837 3.87151C7.95474 3.87151 9.12503 5.0483 9.12503 6.49816C9.12503 7.22634 8.83246 7.88301 8.35784 8.35763L10.5554 10.5617H10.5619C11.2836 9.97653 11.9467 9.22884 12.5124 8.34462C13.1625 7.32387 13.1625 5.66595 12.5124 4.6452C11.7582 3.4619 10.835 2.53217 9.8077 1.89501C8.78045 1.27086 7.65566 0.92627 6.49837 0.92627C5.04851 0.92627 3.64416 1.4594 2.43486 2.43465Z",
                fill: "#24A148"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M4.63938 6.49859C4.63938 7.51934 5.47159 8.35805 6.49885 8.35805C6.53786 8.35805 6.57037 8.35805 6.60938 8.34505L4.65239 6.38806C4.63938 6.42707 4.63938 6.45958 4.63938 6.49859Z",
                fill: "#24A148"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.145631 0.146287C0.340679 -0.0487622 0.659259 -0.0487622 0.854308 0.146287L12.8498 12.1483C13.0449 12.3433 13.0449 12.6619 12.8498 12.857C12.7523 12.948 12.6288 13 12.4987 13C12.3687 13 12.2452 12.948 12.1476 12.8505L0.145631 0.848462C-0.0559196 0.653413 -0.0559196 0.341335 0.145631 0.146287Z",
                fill: "#24A148"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/eye.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/eye.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/grid-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterSvg",
    ()=>FilterSvg,
    "GridSvg",
    ()=>GridSvg,
    "ListSvg",
    ()=>ListSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GridSvg({ clr = "currentColor" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.66667 1H1V5.66667H5.66667V1Z",
                stroke: clr,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.9997 1H8.33301V5.66667H12.9997V1Z",
                stroke: clr,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.9997 8.33337H8.33301V13H12.9997V8.33337Z",
                stroke: clr,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.66667 8.33337H1V13H5.66667V8.33337Z",
                stroke: clr,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/grid-list.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
function ListSvg({ clr = "currentColor" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 16 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 7.11108H1",
                stroke: clr,
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 1H1",
                stroke: clr,
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 13.2222H1",
                stroke: clr,
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/grid-list.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
function FilterSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "15",
        viewBox: "0 0 16 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.9998 3.44995H10.7998",
                stroke: "#5169F1",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.8 3.44995H1",
                stroke: "#5169F1",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.60039 5.9C7.95349 5.9 9.05039 4.8031 9.05039 3.45C9.05039 2.0969 7.95349 1 6.60039 1C5.24729 1 4.15039 2.0969 4.15039 3.45C4.15039 4.8031 5.24729 5.9 6.60039 5.9Z",
                stroke: "#5169F1",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.0002 11.15H12.2002",
                stroke: "#5169F1",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.2 11.15H1",
                stroke: "#5169F1",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.4002 13.6C10.7533 13.6 11.8502 12.503 11.8502 11.15C11.8502 9.79685 10.7533 8.69995 9.4002 8.69995C8.0471 8.69995 6.9502 9.79685 6.9502 11.15C6.9502 12.503 8.0471 13.6 9.4002 13.6Z",
                stroke: "#5169F1",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/grid-list.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/grid-list.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/profile-icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadSvg",
    ()=>DownloadSvg,
    "DownloadTwoSvg",
    ()=>DownloadTwoSvg,
    "GiftBoxSvg",
    ()=>GiftBoxSvg,
    "HeartSvg",
    ()=>HeartSvg,
    "OrderBoxSvg",
    ()=>OrderBoxSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DownloadSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        enableBackground: "new 0 0 512 512",
        viewBox: "0 0 512 512",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m334.52 286.41c3.21 3.21 3.21 8.42 0 11.63l-71.73 71.73c-1.48 2.16-3.97 3.59-6.79 3.59-.03 0-.07 0-.1 0s-.07 0-.1 0c-2.11 0-4.21-.8-5.82-2.41l-72.5-72.5c-3.21-3.21-3.21-8.42 0-11.63s8.42-3.21 11.63 0l58.66 58.66v-198.62c0-4.54 3.68-8.23 8.23-8.23 4.54 0 8.23 3.68 8.23 8.23v198.21l58.66-58.66c3.21-3.21 8.42-3.21 11.63 0zm117.29-226.22c39.34 38.21 58.47 100.39 60.19 195.66v.3c-1.72 95.28-20.85 157.46-60.19 195.66-38.21 39.34-100.39 58.47-195.66 60.19-.05 0-.1 0-.15 0s-.1 0-.15 0c-95.28-1.72-157.46-20.85-195.66-60.19-39.34-38.21-58.47-100.38-60.19-195.66 0-.1 0-.2 0-.3 1.72-95.28 20.85-157.46 60.19-195.66 38.21-39.34 100.39-58.47 195.66-60.19h.3c95.27 1.72 157.45 20.85 195.66 60.19zm43.73 195.81c-1.65-90.63-19.22-149.13-55.28-184.09-.06-.06-.12-.12-.18-.18-34.95-36.06-93.45-53.62-184.08-55.27-90.63 1.65-149.13 19.22-184.09 55.28-.06.06-.12.12-.18.18-36.06 34.95-53.62 93.44-55.27 184.08 1.65 90.63 19.22 149.13 55.28 184.09l.18.18c34.95 36.06 93.45 53.62 184.09 55.28 90.63-1.65 149.13-19.22 184.09-55.28l.18-.18c36.04-34.96 53.61-93.45 55.26-184.09z"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/profile-icons.tsx",
            lineNumber: 4,
            columnNumber: 71
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/profile-icons.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
function DownloadTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "13",
        viewBox: "0 0 14 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 8.23975V10.7466C13 11.079 12.8595 11.3979 12.6095 11.6329C12.3594 11.868 12.0203 12.0001 11.6667 12.0001H2.33333C1.97971 12.0001 1.64057 11.868 1.39052 11.6329C1.14048 11.3979 1 11.079 1 10.7466V8.23975",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.3327 5.38704L6.99935 8.52063L3.66602 5.38704",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 1V8.52061",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/profile-icons.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
function OrderBoxSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M472.916,224H448.007a24.534,24.534,0,0,0-23.417-18H398V140.976a6.86,6.86,0,0,0-3.346-6.062L207.077,26.572a6.927,6.927,0,0,0-6.962,0L12.48,134.914A6.981,6.981,0,0,0,9,140.976V357.661a7,7,0,0,0,3.5,6.062L200.154,472.065a7,7,0,0,0,3.5.938,7.361,7.361,0,0,0,3.6-.938L306,415.108v41.174A29.642,29.642,0,0,0,335.891,486H472.916A29.807,29.807,0,0,0,503,456.282v-202.1A30.2,30.2,0,0,0,472.916,224Zm-48.077-4A10.161,10.161,0,0,1,435,230.161v.678A10.161,10.161,0,0,1,424.839,241H384.161A10.161,10.161,0,0,1,374,230.839v-.678A10.161,10.161,0,0,1,384.161,220ZM203.654,40.717l77.974,45.018L107.986,185.987,30.013,140.969ZM197,453.878,23,353.619V153.085L197,253.344Zm6.654-212.658-81.668-47.151L295.628,93.818,377.3,140.969ZM306,254.182V398.943l-95,54.935V253.344L384,153.085V206h.217A24.533,24.533,0,0,0,360.8,224H335.891A30.037,30.037,0,0,0,306,254.182Zm183,202.1A15.793,15.793,0,0,1,472.916,472H335.891A15.628,15.628,0,0,1,320,456.282v-202.1A16.022,16.022,0,0,1,335.891,238h25.182a23.944,23.944,0,0,0,23.144,17H424.59a23.942,23.942,0,0,0,23.143-17h25.183A16.186,16.186,0,0,1,489,254.182Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M343.949,325h7.327a7,7,0,1,0,0-14H351V292h19.307a6.739,6.739,0,0,0,6.655,4.727A7.019,7.019,0,0,0,384,289.743v-4.71A7.093,7.093,0,0,0,376.924,278H343.949A6.985,6.985,0,0,0,337,285.033v32.975A6.95,6.95,0,0,0,343.949,325Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 1125
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M344,389h33a7,7,0,0,0,7-7V349a7,7,0,0,0-7-7H344a7,7,0,0,0-7,7v33A7,7,0,0,0,344,389Zm7-33h19v19H351Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 1356
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M351.277,439H351V420h18.929a7.037,7.037,0,0,0,14.071.014v-6.745A7.3,7.3,0,0,0,376.924,406H343.949A7.191,7.191,0,0,0,337,413.269v32.975A6.752,6.752,0,0,0,343.949,453h7.328a7,7,0,1,0,0-14Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 1468
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M393.041,286.592l-20.5,20.5-6.236-6.237a7,7,0,1,0-9.9,9.9l11.187,11.186a7,7,0,0,0,9.9,0l25.452-25.452a7,7,0,0,0-9.9-9.9Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 1667
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M393.041,415.841l-20.5,20.5-6.236-6.237a7,7,0,1,0-9.9,9.9l11.187,11.186a7,7,0,0,0,9.9,0l25.452-25.452a7,7,0,0,0-9.9-9.9Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 1800
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M464.857,295H420.891a7,7,0,0,0,0,14h43.966a7,7,0,0,0,0-14Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 1933
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M464.857,359H420.891a7,7,0,0,0,0,14h43.966a7,7,0,0,0,0-14Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 2004
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M464.857,423H420.891a7,7,0,0,0,0,14h43.966a7,7,0,0,0,0-14Z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 20,
                columnNumber: 2075
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/profile-icons.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
function HeartSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 -20 480 480",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/profile-icons.tsx",
            lineNumber: 26,
            columnNumber: 73
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/profile-icons.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
function GiftBoxSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m352.742 291.476h-263.963l228.58-145.334a6 6 0 0 0 1.844-8.284l-22.647-35.618a36.285 36.285 0 0 0 -50.033-11.14l-32.165 20.451 2.548-12.191a34.314 34.314 0 1 0 -66.987-14.914l-16.71 75.054-55.951-12.454a34.315 34.315 0 0 0 -21 65.026l-34.458 21.91a36.285 36.285 0 0 0 -11.14 50.032l22.647 35.619a6 6 0 0 0 8.283 1.845l21.08-13.4v151.888a36.285 36.285 0 0 0 36.246 36.244h223.584a36.285 36.285 0 0 0 36.244-36.244v-162.49a6 6 0 0 0 -6.002-6zm-99.78-190.248a24.084 24.084 0 0 1 12.961-3.794 24.481 24.481 0 0 1 5.316.587 24.09 24.09 0 0 1 15.19 10.658l19.428 30.555-94.5 60.086-32.436-51.014zm-91.33-14.173a22.314 22.314 0 1 1 43.545 9.775l-4.926 23.564-53.667 34.249zm7.16 67.69 32.436 51.014-54.76 34.816-32.435-51.014zm-117.821 37.768a22.314 22.314 0 0 1 23.679-33.754l48.485 10.794-53.822 33.739-4.362-.972a22.168 22.168 0 0 1 -13.98-9.807zm-10.755 115.619-19.427-30.556a24.272 24.272 0 0 1 7.45-33.467l75.667-48.109 32.435 51.014zm116.353 176.078h-57.653a24.272 24.272 0 0 1 -24.244-24.244v-156.49h81.9zm76.264 0h-64.264v-180.734h64.264zm113.909-24.244a24.272 24.272 0 0 1 -24.242 24.244h-77.667v-180.734h101.909z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m419.833 236.971 2.87-16.735a6 6 0 0 0 -8.703-6.325l-15.028 7.9-15.029-7.9a6 6 0 0 0 -8.706 6.325l2.87 16.735-12.158 11.85a6 6 0 0 0 3.325 10.235l16.8 2.442 7.514 15.225a6 6 0 0 0 10.762 0l7.513-15.225 16.8-2.442a6 6 0 0 0 3.325-10.235zm-12.817 13.1a6 6 0 0 0 -4.518 3.282l-3.529 7.152-3.53-7.152a6 6 0 0 0 -4.517-3.282l-7.894-1.147 5.712-5.567a6 6 0 0 0 1.726-5.311l-1.349-7.862 7.06 3.711a5.994 5.994 0 0 0 5.584 0l7.059-3.711-1.348 7.862a6 6 0 0 0 1.725 5.311l5.712 5.567z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 1165
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m488.841 154.3-16.5-4.01-6.051-15.863a6 6 0 0 0 -10.714-1.012l-8.911 14.453-16.957.853a6 6 0 0 0 -4.272 9.876l10.991 12.941-4.427 16.39a6 6 0 0 0 8.073 7.115l15.7-6.454 14.227 9.277a6 6 0 0 0 9.261-5.479l-1.285-16.93 13.213-10.657a6 6 0 0 0 -2.348-10.5zm-20.856 13.8a6 6 0 0 0 -2.216 5.125l.6 7.953-6.681-4.359a6 6 0 0 0 -5.559-.524l-7.376 3.032 2.08-7.7a6 6 0 0 0 -1.219-5.449l-5.163-6.079 7.966-.4a6 6 0 0 0 4.807-2.842l4.185-6.789 2.842 7.452a6 6 0 0 0 4.189 3.691l7.751 1.884z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 1653
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m400.6 56.763-4.429 16.39a6 6 0 0 0 8.073 7.116l15.7-6.455 14.221 9.279a6 6 0 0 0 9.261-5.48l-1.285-16.93 13.216-10.658a6 6 0 0 0 -2.348-10.5l-16.5-4.009-6.05-15.864a6 6 0 0 0 -10.714-1.01l-8.91 14.452-16.958.852a6 6 0 0 0 -4.273 9.876zm13.991-11.844a6 6 0 0 0 4.806-2.843l4.186-6.789 2.842 7.452a6 6 0 0 0 4.189 3.692l7.75 1.883-6.208 5.006a6 6 0 0 0 -2.217 5.125l.6 7.954-6.681-4.359a6 6 0 0 0 -5.559-.524l-7.376 3.032 2.08-7.7a6 6 0 0 0 -1.219-5.45l-5.163-6.08z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 2146
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m291.746 237.835c-13.546 8.525-20.164 18.855-20.439 19.291a6 6 0 0 0 10.134 6.427c.9-1.4 22.609-34.215 69.86-22.527a6 6 0 0 0 2.883-11.648c-29.072-7.193-50.001.628-62.438 8.457z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 2623
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m405.6 174.293a6 6 0 0 0 4.6-11.084c-42.714-17.727-73.759-4.452-92.28 9.808a112.488 112.488 0 0 0 -29.868 35.246 6 6 0 1 0 10.748 5.337 101.191 101.191 0 0 1 26.44-31.075c23.288-17.925 50.325-20.697 80.36-8.232z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 2813
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m338.178 129.844a6 6 0 0 0 3.862 7.555 90.163 90.163 0 0 0 25.438 3.676c10.034 0 21.623-1.811 32.015-7.971 13.6-8.058 22.32-21.787 25.934-40.8a6 6 0 1 0 -11.789-2.24c-2.938 15.461-9.738 26.46-20.211 32.69-19.921 11.853-47.267 3.367-47.7 3.229a6 6 0 0 0 -7.549 3.861z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 3037
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m258.867 284.873a10.806 10.806 0 1 0 -10.805-10.806 10.819 10.819 0 0 0 10.805 10.806zm0-12a1.195 1.195 0 1 1 -1.194 1.194 1.2 1.2 0 0 1 1.194-1.194z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 3316
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m343.887 88.873a10.806 10.806 0 1 0 -10.806-10.806 10.818 10.818 0 0 0 10.806 10.806zm0-12a1.195 1.195 0 1 1 -1.195 1.194 1.2 1.2 0 0 1 1.195-1.194z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 3478
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m496.194 80.633a10.806 10.806 0 1 0 10.806 10.805 10.817 10.817 0 0 0 -10.806-10.805zm0 12a1.195 1.195 0 1 1 1.195-1.195 1.2 1.2 0 0 1 -1.195 1.195z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 3639
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m254.444 224.027a10.806 10.806 0 1 0 -10.8 10.806 10.817 10.817 0 0 0 10.8-10.806zm-10.8 1.2a1.195 1.195 0 1 1 1.194-1.2 1.2 1.2 0 0 1 -1.199 1.195z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 3800
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m478.4 230.812a10.806 10.806 0 1 0 10.806 10.806 10.818 10.818 0 0 0 -10.806-10.806zm0 12a1.194 1.194 0 1 1 1.195-1.194 1.2 1.2 0 0 1 -1.195 1.194z"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/profile-icons.tsx",
                lineNumber: 32,
                columnNumber: 3961
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/profile-icons.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/address-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BillingAddress",
    ()=>BillingAddress,
    "ShippingAddress",
    ()=>ShippingAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function BillingAddress() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        enableBackground: "new 0 0 32 32",
        viewBox: "0 0 32 32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m31.494 23.128-.959-.844v-3.708c0-1.315-1.067-2.382-2.382-2.382-1.144 0-2.126.813-2.34 1.937l-.821-.721c-.954-.835-2.378-.835-3.332 0l-6.5 5.717c-.307.276-.332.748-.057 1.055.262.292.704.331 1.014.091v5.326c.001 1.187.963 2.149 2.15 2.15h10.119c1.187-.001 2.148-.963 2.149-2.15v-5.326c.323.257.793.204 1.05-.119.248-.311.208-.763-.091-1.026zm-4.227-4.552c-.016-.488.366-.897.854-.913s.897.366.913.854c.001.02.001.04 0 .059v2.389l-1.767-1.554zm-2.625 11.671h-2.5v-1.748c.001-.613.497-1.109 1.11-1.11h.285c.613.001 1.109.497 1.11 1.11zm4.393-.648c0 .171-.068.336-.189.457h-.004c-.122.123-.287.191-.46.191h-2.24v-1.748c-.002-1.441-1.169-2.608-2.61-2.61h-.285c-1.441.002-2.608 1.169-2.61 2.61v1.746h-2.373c-.359-.001-.649-.291-.65-.65v-6.63l5.035-4.428c.387-.339.965-.339 1.352 0l5.034 4.426z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/address-svg.tsx",
                    lineNumber: 3,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m21.106 22.318c0 1.226.993 2.219 2.219 2.219s2.219-.994 2.219-2.219v-.001c-.002-1.225-.994-2.217-2.219-2.218-1.226 0-2.219.993-2.219 2.219zm2.938-.001c-.002.396-.323.716-.719.717v.002c-.397 0-.719-.322-.719-.719s.322-.719.719-.719.719.322.719.719z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/address-svg.tsx",
                    lineNumber: 3,
                    columnNumber: 871
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m23.001 10.145c0-.414-.336-.75-.75-.75h-15.462c-.414 0-.75.336-.75.75s.336.75.75.75h15.463c.414-.001.749-.336.749-.75z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/address-svg.tsx",
                    lineNumber: 3,
                    columnNumber: 1130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m6.789 14.216c-.414 0-.75.336-.75.75s.336.75.75.75h10.572c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/address-svg.tsx",
                    lineNumber: 3,
                    columnNumber: 1260
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m12.075 19.039h-5.286c-.414 0-.75.336-.75.75s.336.75.75.75h5.286c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/address-svg.tsx",
                    lineNumber: 3,
                    columnNumber: 1371
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m11.556 30.247h-9.03c-.427-.001-.772-.346-.773-.773v-25.653c.001-.27.142-.52.372-.661l2.11-1.283c.268-.164.609-.148.862.039l1.404 1.037c.749.558 1.764.598 2.554.1l1.9-1.183c.26-.163.593-.156.846.018l1.629 1.111c.766.527 1.776.532 2.547.013l1.692-1.133c.255-.171.587-.175.846-.009l1.836 1.171c.783.504 1.796.476 2.55-.072l1.425-1.027c.265-.191.622-.195.891-.01l1.736 1.2c.21.144.335.382.335.637v8.089c0 .414.336.75.75.75s.75-.336.75-.75v-8.093c-.001-.748-.37-1.449-.987-1.872l-1.733-1.194c-.792-.544-1.839-.532-2.619.028l-1.425 1.025c-.256.186-.6.196-.867.025l-1.836-1.17c-.761-.485-1.736-.474-2.486.028l-1.692 1.133c-.262.177-.606.177-.868 0l-1.63-1.119c-.746-.509-1.722-.529-2.488-.05l-1.896 1.181c-.269.169-.614.155-.868-.034l-1.406-1.037c-.742-.55-1.744-.593-2.531-.11l-2.11 1.279c-.677.414-1.09 1.15-1.093 1.943v25.653c.001 1.255 1.018 2.272 2.273 2.273h9.03c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/address-svg.tsx",
                    lineNumber: 3,
                    columnNumber: 1489
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/svg/address-svg.tsx",
            lineNumber: 3,
            columnNumber: 68
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/address-svg.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
function ShippingAddress() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 64 64",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            id: "ad",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m50 49c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/address-svg.tsx",
                        lineNumber: 10,
                        columnNumber: 48
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m13 55c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/address-svg.tsx",
                        lineNumber: 10,
                        columnNumber: 181
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m62 47.278v-8.653c0-.612-.184-1.203-.533-1.708l-7.452-10.763c-.933-1.349-2.47-2.154-4.111-2.154h-7.61l1.742-3.049c1.285-1.731 1.963-3.788 1.963-5.951 0-5.514-4.486-10-10-10-1.791 0-3.547.479-5.081 1.385-.476.281-.633.895-.352 1.37s.893.632 1.37.353c1.225-.725 2.63-1.107 4.063-1.107 4.411 0 8 3.589 8 8 0 1.748-.554 3.408-1.601 4.802-.025.033-.048.068-.069.104l-6.331 11.078-6.33-11.077c-.021-.036-.044-.071-.069-.104-1.047-1.394-1.601-3.055-1.601-4.803 0-1.897.676-3.736 1.902-5.179.358-.42.307-1.052-.114-1.409-.421-.358-1.052-.308-1.41.114-1.534 1.803-2.379 4.103-2.379 6.474 0 1.781.467 3.486 1.346 5h-23.343c-1.654 0-3 1.346-3 3v27c0 1.654 1.346 3 3 3h2.08c.488 3.386 3.401 6 6.92 6s6.432-2.614 6.92-6h9.223c.552 0 1-.447 1-1s-.448-1-1-1h-9.223c-.488-3.386-3.401-6-6.92-6s-6.432 2.614-6.92 6h-2.08c-.551 0-1-.448-1-1v-9h26c.552 0 1-.447 1-1s-.448-1-1-1h-26v-16.001c0-.552.449-1 1-1h24.563l6.569 11.496c.178.312.509.504.868.504s.69-.192.868-.504l1.132-1.981v7.485h-5c-.552 0-1 .447-1 1s.448 1 1 1h5v10h-5.5c-.552 0-1 .447-1 1s.448 1 1 1h10.58c.488 3.386 3.401 6 6.92 6s6.432-2.614 6.92-6h4.08c1.103 0 2-.897 2-2v-2c0-.737-.405-1.375-1-1.722zm-49-.278c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm46.784-9h-15.784v-8h10.245zm-18.632-12h8.753c.984 0 1.906.483 2.466 1.293l.49.707h-8.86c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h16v7h-5.111c-1.263-1.235-2.988-2-4.889-2s-3.627.765-4.889 2h-5.111v-18.985l1.152-2.015zm-1.152 23h3.685c-.297.622-.503 1.294-.605 2h-3.08zm10 8c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm11-6h-4.08c-.102-.706-.308-1.378-.605-2h4.685z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/address-svg.tsx",
                        lineNumber: 10,
                        columnNumber: 314
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m36 21c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/address-svg.tsx",
                        lineNumber: 10,
                        columnNumber: 1915
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m43 43h4c.552 0 1-.447 1-1s-.448-1-1-1h-4c-.552 0-1 .447-1 1s.448 1 1 1z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg/address-svg.tsx",
                        lineNumber: 10,
                        columnNumber: 2054
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/svg/address-svg.tsx",
                lineNumber: 10,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/svg/address-svg.tsx",
            lineNumber: 10,
            columnNumber: 34
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/address-svg.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/lock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Lock() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                fill: "white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.00391 5.99976V4.49982C3.00391 2.01742 3.75388 0 7.50373 0C11.2536 0 12.0036 2.01742 12.0036 4.49982V5.99976"
                }, void 0, false, {
                    fileName: "[project]/src/components/svg/lock.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/svg/lock.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.80391 5.99976C1.80391 6.66251 2.34116 7.19976 3.00391 7.19976C3.66665 7.19976 4.20391 6.66251 4.20391 5.99976H1.80391ZM10.8036 5.99976C10.8036 6.66251 11.3408 7.19976 12.0036 7.19976C12.6663 7.19976 13.2036 6.66251 13.2036 5.99976H10.8036ZM4.20391 5.99976V4.49982H1.80391V5.99976H4.20391ZM4.20391 4.49982C4.20391 3.33041 4.39189 2.55626 4.78214 2.07179C5.12724 1.64337 5.83418 1.2 7.50373 1.2V-1.2C5.42342 -1.2 3.88045 -0.634662 2.9131 0.566233C1.99091 1.71107 1.80391 3.18683 1.80391 4.49982H4.20391ZM7.50373 1.2C9.17327 1.2 9.88022 1.64337 10.2253 2.07179C10.6156 2.55626 10.8036 3.33041 10.8036 4.49982H13.2036C13.2036 3.18683 13.0165 1.71107 12.0944 0.566233C11.127 -0.634662 9.58404 -1.2 7.50373 -1.2V1.2ZM10.8036 4.49982V5.99976H13.2036V4.49982H10.8036Z",
                fill: "#4F5158",
                mask: "url(#path-1-inside-1_1461_6599)"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/lock.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.77485 10.4997C8.77485 11.2038 8.20405 11.7746 7.49993 11.7746C6.7958 11.7746 6.225 11.2038 6.225 10.4997C6.225 9.79556 6.7958 9.22476 7.49993 9.22476C8.20405 9.22476 8.77485 9.79556 8.77485 10.4997Z",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/lock.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.2496 14.4001H3.74985C2.24562 14.4001 1.54591 14.1976 1.17423 13.8259C0.802561 13.4542 0.6 12.7545 0.6 11.2503V9.75034C0.6 8.24611 0.802561 7.5464 1.17423 7.17472C1.54591 6.80305 2.24562 6.60049 3.74985 6.60049H11.2496C12.7538 6.60049 13.4535 6.80305 13.8252 7.17472C14.1968 7.5464 14.3994 8.24611 14.3994 9.75034V11.2503C14.3994 12.7545 14.1968 13.4542 13.8252 13.8259C13.4535 14.1976 12.7538 14.4001 11.2496 14.4001Z",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/lock.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/lock.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/document.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentTwo",
    ()=>DocumentTwo,
    "default",
    ()=>Document
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Document() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 7.4C1 4.38301 1 2.87452 1.99584 1.93726C2.99167 1 4.59445 1 7.8 1H8.41818C11.0271 1 12.3316 1 13.2375 1.63827C13.4971 1.82114 13.7275 2.03802 13.9218 2.28231C14.6 3.13494 14.6 4.36269 14.6 6.81818V8.85455C14.6 11.2251 14.6 12.4104 14.2249 13.357C13.6217 14.8789 12.3463 16.0793 10.7293 16.6469C9.7235 17 8.46415 17 5.94545 17C4.5062 17 3.78657 17 3.21182 16.7982C2.28783 16.4739 1.559 15.7879 1.21437 14.9183C1 14.3773 1 13.7 1 12.3455V7.4Z",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.6016 9C14.6016 10.4728 13.4077 11.6667 11.9349 11.6667C11.4023 11.6667 10.7743 11.5733 10.2565 11.7121C9.79635 11.8354 9.43695 12.1948 9.31366 12.6549C9.1749 13.1728 9.26823 13.8007 9.26823 14.3333C9.26823 15.8061 8.07432 17 6.60156 17",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.60156 5H10.2016",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.60156 8.2002H7.00156",
                stroke: "#4F5158",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/document.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
function DocumentTwo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M14.2663 6.552H11.9757C10.0973 6.552 8.56768 5.008 8.56768 3.112V0.8C8.56768 0.36 8.21102 0 7.77511 0H4.41461C1.9735 0 0 1.6 0 4.456V11.544C0 14.4 1.9735 16 4.41461 16H10.6442C13.0853 16 15.0588 14.4 15.0588 11.544V7.352C15.0588 6.912 14.7022 6.552 14.2663 6.552Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5439 0.168092C10.219 -0.159908 9.65625 0.0640922 9.65625 0.520092V3.31209C9.65625 4.48009 10.639 5.44809 11.8358 5.44809C12.5888 5.45609 13.6349 5.45609 14.5306 5.45609C14.9823 5.45609 15.2201 4.92009 14.9031 4.60009C13.7618 3.44009 11.7169 1.35209 10.5439 0.168092Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.71703 9.4002H3.96161C3.63666 9.4002 3.36719 9.1282 3.36719 8.8002C3.36719 8.4722 3.63666 8.2002 3.96161 8.2002H8.71703C9.04199 8.2002 9.31146 8.4722 9.31146 8.8002C9.31146 9.1282 9.04199 9.4002 8.71703 9.4002Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.13189 12.6H3.96161C3.63666 12.6 3.36719 12.328 3.36719 12C3.36719 11.672 3.63666 11.4 3.96161 11.4H7.13189C7.45685 11.4 7.72632 11.672 7.72632 12C7.72632 12.328 7.45685 12.6 7.13189 12.6Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/document.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/document.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/star.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarThree",
    ()=>StarThree,
    "StarTwo",
    ()=>StarTwo,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Star() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M11.9376 8.84884C11.7434 9.03675 11.6541 9.3085 11.6984 9.57502L12.365 13.2583C12.4213 13.5705 12.2893 13.8864 12.0276 14.0668C11.7711 14.254 11.4299 14.2764 11.1502 14.1267L7.82888 12.3974C7.7134 12.336 7.58517 12.303 7.45393 12.2993H7.25071C7.18022 12.3098 7.11123 12.3322 7.04824 12.3667L3.72617 14.1042C3.56194 14.1866 3.37597 14.2158 3.19374 14.1866C2.7498 14.1027 2.45359 13.6805 2.52633 13.2351L3.19374 9.55181C3.23798 9.28305 3.14875 9.0098 2.95452 8.8189L0.246625 6.19868C0.0201542 5.97933 -0.0585855 5.64993 0.044901 5.35273C0.145388 5.05627 0.401854 4.83991 0.711564 4.79125L4.43858 4.25149C4.72204 4.22229 4.97101 4.0501 5.09849 3.79557L6.74078 0.434207C6.77977 0.359344 6.83001 0.29047 6.89076 0.232076L6.95825 0.179672C6.99349 0.140743 7.03399 0.108552 7.07898 0.0823496L7.16072 0.0524043L7.2882 0H7.60391C7.88588 0.0291967 8.13409 0.197639 8.26383 0.44918L9.92786 3.79557C10.0478 4.04037 10.2811 4.21031 10.5503 4.25149L14.2773 4.79125C14.5922 4.83617 14.8555 5.05327 14.9597 5.35273C15.0579 5.65293 14.9732 5.98233 14.7422 6.19868L11.9376 8.84884Z",
            fill: "#FFB21D"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/star.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/star.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
function StarTwo({ clr = '#FFB21D' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "12",
        viewBox: "0 0 13 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10.2155 7.46476C10.0519 7.62328 9.97674 7.85253 10.014 8.07736L10.5754 11.1845C10.6228 11.4479 10.5117 11.7144 10.2913 11.8666C10.0753 12.0245 9.78792 12.0434 9.55235 11.9171L6.75528 10.4582C6.65802 10.4065 6.55003 10.3787 6.43951 10.3755H6.26836C6.209 10.3844 6.1509 10.4033 6.09785 10.4324L3.30014 11.8982C3.16183 11.9676 3.00521 11.9923 2.85175 11.9676C2.47788 11.8969 2.22842 11.5407 2.28968 11.1649L2.85175 8.05778C2.88901 7.83106 2.81385 7.60054 2.65029 7.4395L0.369807 5.22912C0.179082 5.04408 0.112771 4.76621 0.199923 4.51549C0.284549 4.2654 0.500535 4.08289 0.761359 4.04184L3.9001 3.5865C4.13882 3.56187 4.34849 3.41661 4.45585 3.20189L5.83892 0.366291C5.87176 0.303138 5.91407 0.245036 5.96522 0.195776L6.02206 0.151569C6.05174 0.118729 6.08585 0.0915728 6.12374 0.069469L6.19258 0.0442076L6.29994 0H6.56581C6.80327 0.0246299 7.01231 0.166726 7.12157 0.378922L8.52295 3.20189C8.62399 3.4084 8.8204 3.55176 9.04712 3.5865L12.1859 4.04184C12.4511 4.07973 12.6728 4.26287 12.7606 4.51549C12.8433 4.76873 12.7719 5.04661 12.5774 5.22912L10.2155 7.46476Z",
            fill: clr
        }, void 0, false, {
            fileName: "[project]/src/components/svg/star.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/star.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
function StarThree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "11",
        height: "10",
        viewBox: "0 0 11 10",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.392 6.22064C8.25546 6.35273 8.19273 6.54377 8.22383 6.73113L8.69249 9.32043C8.73203 9.53989 8.63924 9.76198 8.45526 9.88881C8.27497 10.0204 8.0351 10.0362 7.83847 9.93092L5.50362 8.71521C5.42243 8.67205 5.33229 8.6489 5.24003 8.64627H5.09717C5.04761 8.65363 4.99911 8.66942 4.95483 8.69363L2.61946 9.91513C2.50401 9.97302 2.37327 9.99354 2.24516 9.97302C1.93308 9.91408 1.72484 9.61725 1.77598 9.30412L2.24516 6.71481C2.27627 6.52588 2.21353 6.33379 2.077 6.19959L0.173374 4.3576C0.0141682 4.2034 -0.0411849 3.97184 0.0315649 3.76291C0.102206 3.5545 0.282499 3.4024 0.500222 3.3682L3.12027 2.98875C3.31954 2.96822 3.49456 2.84718 3.58418 2.66824L4.73869 0.305243C4.7661 0.252615 4.80142 0.204197 4.84413 0.163147L4.89157 0.126307C4.91635 0.0989408 4.94482 0.0763107 4.97645 0.0578909L5.03391 0.0368396L5.12353 0H5.34547C5.54368 0.0205249 5.71818 0.138938 5.80938 0.315768L6.97918 2.66824C7.06352 2.84034 7.22747 2.9598 7.41673 2.98875L10.0368 3.3682C10.2582 3.39977 10.4432 3.55239 10.5165 3.76291C10.5856 3.97395 10.526 4.20551 10.3636 4.3576L8.392 6.22064Z",
            fill: "#FFB21D"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/star.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/star.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/like-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisLikeSvg",
    ()=>DisLikeSvg,
    "LikeSvg",
    ()=>LikeSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LikeSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "16",
        viewBox: "0 0 18 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 8.41134C1 7.5017 1.7165 6.76428 2.60034 6.76428C3.9261 6.76428 5.00084 7.8704 5.00084 9.23487V12.529C5.00084 13.8935 3.9261 14.9996 2.60034 14.9996C1.7165 14.9996 1 14.2622 1 13.3525V8.41134Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/like-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.7805 4.54633L11.5674 5.25463C11.3928 5.83503 11.3055 6.12523 11.3727 6.35442C11.427 6.53984 11.5462 6.69966 11.7087 6.80482C11.9096 6.9348 12.2134 6.9348 12.821 6.9348H13.1443C15.2008 6.9348 16.229 6.9348 16.7147 7.56131C16.7702 7.63291 16.8196 7.70904 16.8623 7.7889C17.2359 8.48765 16.8111 9.42893 15.9616 11.3115C15.182 13.0391 14.7922 13.9029 14.0684 14.4113C13.9984 14.4605 13.9264 14.507 13.8526 14.5505C13.0906 15 12.1465 15 10.2583 15H9.84879C7.56121 15 6.41742 15 5.70675 14.2913C4.99609 13.5827 4.99609 12.4421 4.99609 10.1609V9.3591C4.99609 8.16029 4.99609 7.56088 5.20281 7.01226C5.40953 6.46363 5.80535 6.01253 6.59699 5.11033L9.87081 1.37928C9.95292 1.28571 9.99398 1.23892 10.0302 1.2065C10.3681 0.903878 10.8895 0.937941 11.1849 1.28193C11.2166 1.31878 11.2512 1.37052 11.3203 1.47397C11.4285 1.63581 11.4826 1.71672 11.5298 1.79689C11.9518 2.51458 12.0795 3.36712 11.8862 4.17648C11.8646 4.26687 11.8365 4.36008 11.7805 4.54633Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/like-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/like-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
function DisLikeSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "16",
        viewBox: "0 0 18 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 7.58866C1 8.4983 1.7165 9.23572 2.60034 9.23572C3.9261 9.23572 5.00084 8.1296 5.00084 6.76513V3.47101C5.00084 2.10654 3.9261 1.00042 2.60034 1.00042C1.7165 1.00042 1 1.73784 1 2.64748V7.58866Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/like-svg.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.7805 11.4537L11.5674 10.7454C11.3928 10.165 11.3055 9.87477 11.3727 9.64558C11.427 9.46016 11.5462 9.30034 11.7087 9.19518C11.9096 9.0652 12.2134 9.0652 12.821 9.0652H13.1443C15.2008 9.0652 16.229 9.0652 16.7147 8.43869C16.7702 8.36709 16.8196 8.29096 16.8623 8.2111C17.2359 7.51235 16.8111 6.57107 15.9616 4.6885C15.182 2.96092 14.7922 2.09713 14.0684 1.5887C13.9984 1.53947 13.9264 1.49305 13.8526 1.44953C13.0906 1 12.1465 1 10.2583 1H9.84879C7.56121 1 6.41742 1 5.70675 1.70867C4.99609 2.41734 4.99609 3.55794 4.99609 5.83912V6.6409C4.99609 7.83971 4.99609 8.43912 5.20281 8.98774C5.40953 9.53637 5.80535 9.98747 6.59699 10.8897L9.87081 14.6207C9.95292 14.7143 9.99398 14.7611 10.0302 14.7935C10.3681 15.0961 10.8895 15.0621 11.1849 14.7181C11.2166 14.6812 11.2512 14.6295 11.3203 14.526C11.4285 14.3642 11.4826 14.2833 11.5298 14.2031C11.9518 13.4854 12.0795 12.6329 11.8862 11.8235C11.8646 11.7331 11.8365 11.6399 11.7805 11.4537Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/like-svg.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/like-svg.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/course-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CertificateSvg",
    ()=>CertificateSvg,
    "DeadLineSvg",
    ()=>DeadLineSvg,
    "DurationSvg",
    ()=>DurationSvg,
    "LanguageSvg",
    ()=>LanguageSvg,
    "LectureSvg",
    ()=>LectureSvg,
    "SkillLevelSvg",
    ()=>SkillLevelSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LectureSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.5 1C12.6415 1 16 4.35775 16 8.5C16 12.6423 12.6415 16 8.5 16C4.35775 16 1 12.6423 1 8.5C1 4.35775 4.35775 1 8.5 1Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.8692 8.49618C10.8692 7.85581 7.58703 5.80721 7.2147 6.17556C6.84237 6.54391 6.80657 10.4137 7.2147 10.8168C7.62283 11.2213 10.8692 9.13655 10.8692 8.49618Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/course-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
function DurationSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3.80005V8.00005L10.8 9.40005",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/course-svg.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
function SkillLevelSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "11",
        height: "14",
        viewBox: "0 0 11 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.5 13V5.5",
                stroke: "#4F5158",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13V1",
                stroke: "#4F5158",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 13V10",
                stroke: "#4F5158",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/course-svg.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
function LanguageSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "17",
        viewBox: "0 0 16 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15.5C11.866 15.5 15 12.366 15 8.5C15 4.63401 11.866 1.5 8 1.5C4.13401 1.5 1 4.63401 1 8.5C1 12.366 4.13401 15.5 8 15.5Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 8.5H15",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.99727 1.5C9.74816 3.41685 10.7432 5.90442 10.7973 8.5C10.7432 11.0956 9.74816 13.5832 7.99727 15.5C6.24637 13.5832 5.25134 11.0956 5.19727 8.5C5.25134 5.90442 6.24637 3.41685 7.99727 1.5Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/course-svg.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
function DeadLineSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "16",
        viewBox: "0 0 15 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M1.06836 6.18286H13.5451",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M10.4102 8.91675H10.4194",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M7.30273 8.91675H7.312",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M4.1875 8.91675H4.19676",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M10.4102 11.6375H10.4194",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M7.30273 11.6375H7.312",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M4.1875 11.6375H4.19676",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.1289 1V3.30355",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.47656 1V3.30355",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.2668 2.10535H4.33967C2.28399 2.10535 1 3.2505 1 5.35547V11.6902C1 13.8283 2.28399 14.9999 4.33967 14.9999H10.2603C12.3225 14.9999 13.6 13.8481 13.6 11.7432V5.35547C13.6065 3.2505 12.329 2.10535 10.2668 2.10535Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/course-svg.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
function CertificateSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.721 6.64274C14.721 7.8116 14.3744 8.88373 13.7779 9.77851C12.9073 11.0683 11.5289 11.9792 9.9247 12.2129C9.65063 12.2613 9.36849 12.2855 9.07829 12.2855C8.78809 12.2855 8.50596 12.2613 8.23188 12.2129C6.62773 11.9792 5.24929 11.0683 4.37869 9.77851C3.78217 8.88373 3.43555 7.8116 3.43555 6.64274C3.43555 3.52311 5.95866 1 9.07829 1C12.1979 1 14.721 3.52311 14.721 6.64274Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M16.5341 14.2766L15.2041 14.591C14.9058 14.6636 14.672 14.8893 14.6075 15.1875L14.3254 16.3725C14.1722 17.0174 13.35 17.2109 12.9228 16.703L9.07766 12.2856L5.23253 16.7111C4.80529 17.2189 3.98307 17.0255 3.82991 16.3806L3.54777 15.1956C3.47522 14.8973 3.24145 14.6636 2.95125 14.5991L1.62117 14.2847C1.00853 14.1396 0.790885 13.3738 1.23424 12.9304L4.37806 9.78662C5.24865 11.0764 6.6271 11.9873 8.23125 12.2211C8.50532 12.2694 8.78746 12.2936 9.07766 12.2936C9.36786 12.2936 9.64999 12.2694 9.92407 12.2211C11.5282 11.9873 12.9067 11.0764 13.7773 9.78662L16.9211 12.9304C17.3644 13.3657 17.1468 14.1315 16.5341 14.2766Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M9.54557 4.20822L10.0212 5.15942C10.0857 5.2884 10.2549 5.41738 10.4081 5.44156L11.2706 5.58665C11.8188 5.67533 11.9478 6.07838 11.5528 6.47338L10.8837 7.14243C10.7709 7.25529 10.7064 7.47295 10.7467 7.63417L10.9401 8.46446C11.0933 9.11741 10.7467 9.37535 10.1663 9.02872L9.36017 8.55312C9.21507 8.46445 8.97324 8.46445 8.82814 8.55312L8.02203 9.02872C7.44163 9.36728 7.09501 9.11741 7.24817 8.46446L7.44163 7.63417C7.47388 7.48101 7.41745 7.25529 7.3046 7.14243L6.63553 6.47338C6.24054 6.07838 6.36951 5.68339 6.91766 5.58665L7.7802 5.44156C7.9253 5.41738 8.09458 5.2884 8.15907 5.15942L8.63467 4.20822C8.86844 3.69231 9.28762 3.69231 9.54557 4.20822Z",
                stroke: "#4F5158",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/course-svg.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/course-svg.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/delete-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DeleteSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3.09998L11.5869 9.11504C11.4813 10.6519 11.4285 11.4203 11.0005 11.9727C10.7889 12.2458 10.5164 12.4764 10.2005 12.6496C9.56141 13 8.706 13 6.99517 13C5.28208 13 4.42554 13 3.78604 12.6489C3.46987 12.4754 3.19733 12.2445 2.98579 11.9709C2.55792 11.4175 2.5063 10.648 2.40307 9.10907L2 3.09998",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/delete-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 3.09998H1",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/delete-svg.tsx",
                lineNumber: 6,
                columnNumber: 389
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.70239 3.1L9.24728 2.25504C8.94496 1.69375 8.7938 1.41311 8.53305 1.23808C8.47521 1.19926 8.41397 1.16473 8.34992 1.13482C8.06118 1 7.71465 1 7.02159 1C6.31113 1 5.95589 1 5.66236 1.14047C5.59731 1.1716 5.53523 1.20754 5.47677 1.2479C5.213 1.43002 5.06566 1.72093 4.77098 2.30276L4.36719 3.1",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/delete-svg.tsx",
                lineNumber: 6,
                columnNumber: 482
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.33594 9.70007L5.33594 6.10007",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/delete-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.66406 9.69998L8.66406 6.09998",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/delete-svg.tsx",
                lineNumber: 7,
                columnNumber: 125
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/delete-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/draft-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraftTwoSvg",
    ()=>DraftTwoSvg,
    "default",
    ()=>DraftSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DraftSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.8 5.19995L1 6.99995L2.8 8.79995",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.19922 2.8L6.99922 1L8.79922 2.8",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.79922 11.2L6.99922 13L5.19922 11.2",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.1992 5.19995L12.9992 6.99995L11.1992 8.79995",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 7H13",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 1V13",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/draft-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
function DraftTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "15",
        viewBox: "0 0 13 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6.2C1 3.7487 1 2.52304 1.80912 1.76152C2.61823 1 3.92049 1 6.525 1H7.02727C9.14706 1 10.2069 1 10.943 1.51859C11.1539 1.66718 11.3411 1.84339 11.499 2.04188C12.05 2.73464 12.05 3.73218 12.05 5.72727V7.38182C12.05 9.30788 12.05 10.2709 11.7452 11.0401C11.2552 12.2766 10.2189 13.2519 8.90507 13.7131C8.08784 14 7.06462 14 5.01818 14C3.84879 14 3.26409 14 2.7971 13.8361C2.04636 13.5725 1.45419 13.0152 1.17418 12.3086C1 11.8691 1 11.3188 1 10.2182V6.2Z",
                stroke: "currentColor",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.0469 7.5C12.0469 8.69662 11.0768 9.66667 9.88021 9.66667C9.44745 9.66667 8.93725 9.59084 8.51649 9.70358C8.14264 9.80375 7.85063 10.0958 7.75046 10.4696C7.63771 10.8904 7.71354 11.4006 7.71354 11.8333C7.71354 13.03 6.74349 14 5.54688 14",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.92188 4.25049H8.47187",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.92188 6.84937H5.87187",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/draft-svg.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/draft-svg.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/pen-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PenThreeSvg",
    ()=>PenThreeSvg,
    "PenTwoSvg",
    ()=>PenTwoSvg,
    "default",
    ()=>PenSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PenSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.74422 2.63127C9.19134 2.14685 9.41489 1.90464 9.65245 1.76336C10.2256 1.42246 10.9315 1.41185 11.5142 1.73539C11.7557 1.86948 11.9862 2.10487 12.447 2.57566C12.9079 3.04644 13.1383 3.28183 13.2696 3.52856C13.5863 4.12387 13.5759 4.84487 13.2422 5.43042C13.1039 5.67309 12.8668 5.90146 12.3926 6.35821L6.75038 11.7926C5.85173 12.6581 5.4024 13.0909 4.84084 13.3102C4.27927 13.5296 3.66192 13.5134 2.42722 13.4811L2.25923 13.4768C1.88334 13.4669 1.6954 13.462 1.58615 13.338C1.4769 13.214 1.49182 13.0226 1.52165 12.6397L1.53785 12.4318C1.6218 11.3541 1.66378 10.8153 1.87422 10.3309C2.08466 9.84657 2.44766 9.45328 3.17366 8.6667L8.74422 2.63127Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.09375 2.69922L12.2938 6.89922",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.69531 13.5L13.4953 13.5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/pen-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
function PenTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "13",
        viewBox: "0 0 14 13",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.24422 2.037C8.69134 1.59294 8.91489 1.37092 9.15245 1.24141C9.72565 0.928917 10.4315 0.9192 11.0142 1.21578C11.2557 1.33869 11.4862 1.55447 11.947 1.98602C12.4079 2.41757 12.6383 2.63335 12.7696 2.85951C13.0863 3.40522 13.0759 4.06614 12.7422 4.60289C12.6039 4.82534 12.3668 5.03468 11.8926 5.45336L6.25038 10.4349C5.35173 11.2283 4.9024 11.625 4.34084 11.8261C3.77927 12.0271 3.16192 12.0123 1.92722 11.9827L1.75923 11.9787C1.38334 11.9697 1.1954 11.9652 1.08615 11.8515C0.976902 11.7379 0.991817 11.5624 1.02165 11.2114L1.03785 11.0208C1.1218 10.033 1.16378 9.53902 1.37422 9.09502C1.58466 8.65102 1.94766 8.29051 2.67366 7.56948L8.24422 2.037Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.59375 2.09924L11.7938 5.94924",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.19531 12L12.9953 12",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/pen-svg.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
function PenThreeSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M10.5803 1.08704H4.33259C1.62472 1.08704 0 2.70391 0 5.41963V11.6595C0 14.3831 1.62472 15.9999 4.33259 15.9999H10.5725C13.2882 15.9999 14.905 14.3831 14.905 11.6673V5.41963C14.9129 2.70391 13.2882 1.08704 10.5803 1.08704Z",
                fill: "#4F5158"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.9281 1.07141C13.5231 -0.341394 12.1496 -0.37279 10.7054 1.07141L9.81847 1.95048C9.73998 2.02897 9.71643 2.13886 9.74783 2.24089C10.2973 4.16387 11.8356 5.70225 13.7586 6.25168C13.7822 6.25952 13.8214 6.25952 13.845 6.25952C13.9234 6.25952 14.0019 6.22813 14.0569 6.17319L14.9281 5.29411C15.6423 4.57986 15.9955 3.89701 15.9955 3.19846C15.9955 2.49206 15.6423 1.7935 14.9281 1.07141Z",
                fill: "#4F5158"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.4497 6.91107C12.2378 6.80903 12.0337 6.70699 11.8453 6.58926C11.6884 6.49507 11.5314 6.39304 11.3823 6.28315C11.2567 6.20467 11.1154 6.08693 10.9741 5.9692C10.9584 5.96135 10.9113 5.92211 10.8485 5.85931C10.6052 5.66309 10.3462 5.39623 10.1029 5.10582C10.0872 5.09012 10.0401 5.04303 10.0009 4.97239C9.92236 4.88605 9.80463 4.73692 9.7026 4.5721C9.61626 4.46221 9.51422 4.30523 9.42004 4.14041C9.3023 3.94418 9.20027 3.74796 9.10608 3.54389C9.00405 3.32412 8.92556 3.12005 8.85492 2.92383L4.63221 7.14653C4.3575 7.42124 4.09064 7.93927 4.0357 8.32387L3.69819 10.6628C3.62755 11.1573 3.76098 11.6204 4.06709 11.9265C4.3261 12.1855 4.6793 12.319 5.07175 12.319C5.15809 12.319 5.24442 12.3111 5.33076 12.3033L7.66188 11.9736C8.04648 11.9187 8.56451 11.6596 8.83922 11.3771L13.0619 7.15438C12.8657 7.09159 12.6695 7.00525 12.4497 6.91107Z",
                fill: "#4F5158"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/pen-svg.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/pen-svg.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/duplicate-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DuplicateSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DuplicateSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.7992 5.19995H6.39922C5.73648 5.19995 5.19922 5.73721 5.19922 6.39995V11.8C5.19922 12.4627 5.73648 13 6.39922 13H11.7992C12.462 13 12.9992 12.4627 12.9992 11.8V6.39995C12.9992 5.73721 12.462 5.19995 11.7992 5.19995Z",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/duplicate-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.8 8.8H2.2C1.88174 8.8 1.57652 8.67357 1.35147 8.44853C1.12643 8.22348 1 7.91826 1 7.6V2.2C1 1.88174 1.12643 1.57652 1.35147 1.35147C1.57652 1.12643 1.88174 1 2.2 1H7.6C7.91826 1 8.22348 1.12643 8.44853 1.35147C8.67357 1.57652 8.8 1.88174 8.8 2.2V2.8",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/duplicate-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/duplicate-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/info-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoTwoSvg",
    ()=>InfoTwoSvg,
    "default",
    ()=>InfoSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function InfoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z",
                stroke: "#757C8E",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/info-svg.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 5.5V8.5",
                stroke: "#757C8E",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/info-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 11.5H8.507",
                stroke: "#757C8E",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/info-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/info-svg.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
function InfoTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",
                stroke: "#8F9195",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/info-svg.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 5.19995V7.99995",
                stroke: "#8F9195",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/info-svg.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 10.8H8.007",
                stroke: "#8F9195",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/info-svg.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/info-svg.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/refresh-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefreshSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function RefreshSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 1C4.136 1 1 4.136 1 8C1 11.864 4.136 15 8 15C11.864 15 15 11.864 15 8",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/refresh-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.69922 7.29969L14.4392 1.55969",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/refresh-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.006 4.381V1H11.625",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/refresh-svg.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/refresh-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/camera-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraSvg",
    ()=>CameraSvg,
    "CameraTwoSvg",
    ()=>CameraTwoSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CameraSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "38",
        height: "38",
        viewBox: "0 0 38 38",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "19",
                r: "18",
                fill: "white",
                stroke: "#E6E8F0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/camera-svg.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.352 13.5172L23.272 13.3463C23.056 12.9034 22.808 12.3907 22.656 12.0954C22.288 11.3962 21.656 11.0078 20.88 11H17.112C16.336 11.0078 15.712 11.3962 15.344 12.0954C15.184 12.4062 14.912 12.9656 14.688 13.424L14.64 13.5172C14.616 13.5794 14.552 13.6104 14.488 13.6104C12.56 13.6104 11 15.1332 11 16.9978V21.6127C11 23.4772 12.56 25 14.488 25H23.512C25.432 25 27 23.4772 27 21.6127V16.9978C27 15.1332 25.432 13.6104 23.512 13.6104C23.44 13.6104 23.384 13.5716 23.352 13.5172Z",
                fill: "#303651"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/camera-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.0035 15.9806C19.8435 15.9806 20.6355 16.2992 21.2275 16.8741C21.8195 17.4568 22.1475 18.2259 22.1475 19.0339C22.1395 19.8808 21.7875 20.6421 21.2195 21.1937C20.6515 21.7454 19.8675 22.0872 19.0035 22.0872C18.1635 22.0872 17.3795 21.7687 16.7795 21.1937C16.1875 20.6111 15.8595 19.8497 15.8595 19.0339C15.8515 18.2259 16.1795 17.4646 16.7715 16.8819C17.3715 16.2992 18.1635 15.9806 19.0035 15.9806ZM19.0035 17.146C18.4835 17.146 17.9955 17.3402 17.6195 17.7054C17.2515 18.0628 17.0515 18.5367 17.0595 19.0262V19.0339C17.0595 19.5389 17.2595 20.0128 17.6275 20.3702C17.9955 20.7276 18.4835 20.9218 19.0035 20.9218C20.0755 20.9218 20.9395 20.075 20.9475 19.0339C20.9475 18.5289 20.7475 18.055 20.3795 17.6976C20.0115 17.3402 19.5235 17.146 19.0035 17.146ZM23.4915 15.7942C23.8915 15.7942 24.2195 16.1127 24.2195 16.5012C24.2195 16.8896 23.8915 17.2004 23.4915 17.2004C23.0915 17.2004 22.7715 16.8896 22.7715 16.5012C22.7715 16.1127 23.0915 15.7942 23.4915 15.7942Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/camera-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/camera-svg.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
function CameraTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "16",
        viewBox: "0 0 18 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.624 2.8768L13.539 2.68146C13.3095 2.17536 13.046 1.58935 12.8845 1.25194C12.4935 0.45283 11.822 0.00887902 10.9975 0H6.994C6.1695 0.00887902 5.5065 0.45283 5.1155 1.25194C4.9455 1.6071 4.6565 2.24639 4.4185 2.77026L4.3675 2.8768C4.342 2.94784 4.274 2.98335 4.206 2.98335C2.1575 2.98335 0.5 4.72364 0.5 6.85461V12.1287C0.5 14.2597 2.1575 16 4.206 16H13.794C15.834 16 17.5 14.2597 17.5 12.1287V6.85461C17.5 4.72364 15.834 2.98335 13.794 2.98335C13.7175 2.98335 13.658 2.93896 13.624 2.8768Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/camera-svg.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.00471 5.69173C9.89721 5.69173 10.7387 6.05577 11.3677 6.71282C11.9967 7.37875 12.3452 8.25777 12.3452 9.18119C12.3367 10.149 11.9627 11.0191 11.3592 11.6496C10.7557 12.28 9.92271 12.6706 9.00471 12.6706C8.11221 12.6706 7.27921 12.3066 6.64171 11.6496C6.01271 10.9836 5.66421 10.1135 5.66421 9.18119C5.65571 8.25777 6.00421 7.38763 6.63321 6.7217C7.27071 6.05577 8.11221 5.69173 9.00471 5.69173ZM9.00471 7.02359C8.45221 7.02359 7.93371 7.24556 7.53421 7.66288C7.14321 8.07131 6.93071 8.61293 6.93921 9.17231V9.18119C6.93921 9.75833 7.15171 10.2999 7.54271 10.7084C7.93371 11.1168 8.45221 11.3388 9.00471 11.3388C10.1437 11.3388 11.0617 10.371 11.0702 9.18119C11.0702 8.60405 10.8577 8.06243 10.4667 7.654C10.0757 7.24556 9.55721 7.02359 9.00471 7.02359ZM13.7732 5.47864C14.1982 5.47864 14.5467 5.84268 14.5467 6.28663C14.5467 6.73058 14.1982 7.08574 13.7732 7.08574C13.3482 7.08574 13.0082 6.73058 13.0082 6.28663C13.0082 5.84268 13.3482 5.47864 13.7732 5.47864Z",
                fill: "#333333"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/camera-svg.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/camera-svg.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/upload-svg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadTwoSvg",
    ()=>UploadTwoSvg,
    "default",
    ()=>UploadSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function UploadSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.49372 8.93415L0.811853 10.733C0.771427 10.4884 0.75 10.2223 0.75 9.93382V4.06733C0.75 2.94238 1.08242 2.13441 1.60842 1.60842C2.13441 1.08242 2.94238 0.75 4.06733 0.75H9.93382C11.0588 0.75 11.8667 1.08242 12.3927 1.60842C12.9187 2.13441 13.2512 2.94238 13.2512 4.06733V6.70275C12.4225 6.07233 11.1927 6.09857 10.3975 6.78145C10.3974 6.78153 10.3973 6.7816 10.3972 6.78168L7.48523 9.28066L7.48496 9.28088C7.21999 9.50849 6.75316 9.50849 6.48819 9.28088L6.48228 9.27581L6.47627 9.27086L6.2457 9.08098C5.48405 8.42351 4.32392 8.37449 3.49481 8.93341C3.49444 8.93366 3.49408 8.9339 3.49372 8.93415Z",
                stroke: "#556DF5",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/upload-svg.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.90051 5.86792C5.82069 5.86792 6.56665 5.12196 6.56665 4.20178C6.56665 3.2816 5.82069 2.53564 4.90051 2.53564C3.98033 2.53564 3.23438 3.2816 3.23438 4.20178C3.23438 5.12196 3.98033 5.86792 4.90051 5.86792Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/upload-svg.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.9997 8.32917V9.93231C13.9997 12.4805 12.4806 13.9996 9.93241 13.9996H4.06593C2.28078 13.9996 0.992674 13.2506 0.390625 11.9205L0.467631 11.8645L3.91191 9.55428C4.47196 9.17624 5.26302 9.21825 5.76007 9.65228L5.99809 9.8483C6.54413 10.3173 7.4262 10.3173 7.97225 9.8483L10.8845 7.34909C11.4305 6.88005 12.3126 6.88005 12.8587 7.34909L13.9997 8.32917Z",
                fill: "#556DF5"
            }, void 0, false, {
                fileName: "[project]/src/components/svg/upload-svg.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg/upload-svg.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
function UploadTwoSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16.6111 8.5008L9.46692 15.635C8.59171 16.509 7.40466 17 6.16692 17C4.92917 17 3.74212 16.509 2.86691 15.635C1.99169 14.761 1.5 13.5756 1.5 12.3396C1.5 11.1036 1.99169 9.9182 2.86691 9.04421L10.0111 1.91C10.5946 1.32734 11.3859 1 12.2111 1C13.0363 1 13.8276 1.32734 14.4111 1.91C14.9946 2.49266 15.3224 3.28292 15.3224 4.10693C15.3224 4.93094 14.9946 5.7212 14.4111 6.30386L7.25914 13.4381C6.96741 13.7294 6.57172 13.8931 6.15914 13.8931C5.74656 13.8931 5.35088 13.7294 5.05914 13.4381C4.7674 13.1467 4.6035 12.7516 4.6035 12.3396C4.6035 11.9276 4.7674 11.5325 5.05914 11.2411L11.6592 4.6581",
            stroke: "#556DF5",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/svg/upload-svg.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/svg/upload-svg.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$search$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/search-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$shape$2d$line$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/shape-line.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$arrow$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/arrow-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$shape$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/shape.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$author$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/author.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$clock$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/clock-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$email$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/email.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$cart$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/cart-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$wishlist$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/wishlist-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$user$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/user-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$enrollment$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/enrollment-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$setting$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/setting-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$order$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/order-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$review$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/review-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$dashboard$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/dashboard-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$quiz$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/quiz-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$question$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/question-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$logout$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/logout-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$category$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/category-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$lessons$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/lessons-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$join$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/join-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$plus$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/plus-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$check$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/check-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$process$2d$line$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/process-line-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$circle$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/circle-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$play$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/play-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$close$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/close-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$home$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/home-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$link$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/link-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$quote$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/quote-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$share$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/share-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$dots$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/dots-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$reply$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/reply-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$menu$2d$line$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/menu-line.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$programs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/programs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$hand$2d$check$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/hand-check.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$tuition$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/tuition-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$location$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/location.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$worksheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/worksheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$tel$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/tel-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$calender$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/calender-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$world$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/world-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$tutor$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/tutor-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$ongoing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/ongoing.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$social$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/social-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$eye$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/eye.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$grid$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/grid-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$profile$2d$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/profile-icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$address$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/address-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$lock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/lock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$document$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/document.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$star$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/star.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$like$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/like-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$course$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/course-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$delete$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/delete-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$draft$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/draft-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$pen$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/pen-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$duplicate$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/duplicate-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$info$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/info-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$refresh$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/refresh-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$camera$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/camera-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$upload$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/upload-svg.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/src/components/svg/search-svg.tsx [app-ssr] (ecmascript) <export default as SearchSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$search$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$search$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/search-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/data/course-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "all_courses",
    ()=>all_courses,
    "gym_course_data",
    ()=>gym_course_data,
    "high_school_course_data",
    ()=>high_school_course_data,
    "online_courses_data",
    ()=>online_courses_data
]);
const online_courses_data = [
    {
        id: 1,
        author_img: "/assets/img/teacher/teacher-5.png",
        author_name: "Hilary Ouse",
        title: "Interior design concepts <br /> Masterclass",
        thumbnail: "/assets/img/course/course-thumb-1.jpg",
        category: "Art & Design",
        price: 84,
        avg_rating: 5,
        discount: 25,
        lessons: 12,
        students: 45,
        total_rating: 5,
        language: "English",
        progress: 60
    },
    {
        id: 2,
        author_img: "/assets/img/teacher/teacher-2.png",
        author_name: "Joss Sticks",
        title: "Starting seo as your home <br/> based business",
        thumbnail: "/assets/img/course/course-thumb-5.jpg",
        category: "Development",
        price: 54,
        avg_rating: 4,
        discount: 5,
        lessons: 15,
        students: 20,
        total_rating: 10,
        language: "English",
        progress: 80
    },
    {
        id: 3,
        author_img: "/assets/img/teacher/teacher-3.png",
        author_name: "Purpleson",
        title: "Grow personal financial security <br/> thinking & principles",
        thumbnail: "/assets/img/course/course-thumb-2.jpg",
        category: "Machine Learning",
        price: 92,
        avg_rating: 4.5,
        discount: 10,
        lessons: 16,
        students: 52,
        total_rating: 15,
        language: "Russian",
        progress: 50
    },
    {
        id: 4,
        author_img: "/assets/img/teacher/teacher-5.png",
        author_name: "Benjamin",
        title: "The complete guide to build <br/> restful API application",
        thumbnail: "/assets/img/course/course-thumb-4.jpg",
        category: "Marketing",
        price: 45,
        avg_rating: 4.8,
        discount: 0,
        lessons: 12,
        students: 60,
        total_rating: 12,
        language: "Hindi",
        progress: 70
    },
    {
        id: 5,
        author_img: "/assets/img/teacher/teacher-4.png",
        author_name: "Indigo Violet",
        title: "Computer science: mathematical and analytical",
        thumbnail: "/assets/img/course/course-thumb-3.jpg",
        category: "Computer Science",
        price: 65,
        avg_rating: 5,
        discount: 4,
        lessons: 18,
        students: 68,
        total_rating: 4,
        language: "English",
        progress: 80
    },
    {
        id: 6,
        author_img: "/assets/img/teacher/teacher-6.png",
        author_name: "Hanson Deck",
        title: "Machine learning A-Z: <br/> hands-on python and java",
        thumbnail: "/assets/img/course/course-thumb-6.jpg",
        category: "Programming",
        price: 75,
        avg_rating: 5,
        discount: 0,
        lessons: 20,
        students: 100,
        total_rating: 10,
        language: "English",
        progress: 60
    }
];
const gym_course_data = [
    {
        id: 7,
        author_img: "/assets/img/course/course-5-thumb-1.jpg",
        author_name: "Benjamin Evalent",
        title: "Complete Fitness Trainer: Beginner to Advanced",
        thumbnail: "/assets/img/course/course-5-thumb-1.jpg",
        category: "Fitness",
        price: 42,
        avg_rating: 4.8,
        discount: 10,
        lessons: 12,
        students: 45,
        total_rating: 5,
        language: "English"
    },
    {
        id: 8,
        author_img: "/assets/img/teacher/teacher-1.png",
        author_name: "Benjamin Evalent",
        title: "Lazy dancer Ballet Burn – 30 Days Programmed",
        thumbnail: "/assets/img/course/course-5-thumb-2.jpg",
        category: "Dance",
        price: 0,
        avg_rating: 4.9,
        discount: 0,
        lessons: 12,
        students: 45,
        total_rating: 5,
        language: "German"
    },
    {
        id: 9,
        author_img: "/assets/img/teacher/teacher-2.png",
        author_name: "Benjamin Evalent",
        title: "Seven Reasons You Fall In Love With Gym",
        thumbnail: "/assets/img/course/course-5-thumb-3.jpg",
        category: "Fitness",
        price: 87,
        avg_rating: 4.7,
        discount: 20,
        lessons: 12,
        students: 45,
        total_rating: 4.8,
        language: "Italian"
    },
    {
        id: 10,
        author_img: "/assets/img/teacher/teacher-3.png",
        author_name: "Benjamin Evalent",
        title: "Fitness Trainer: Gym Workout & Body Building",
        thumbnail: "/assets/img/course/course-5-thumb-4.jpg",
        category: "Fitness",
        price: 54,
        avg_rating: 4.6,
        discount: 15,
        lessons: 12,
        students: 45,
        total_rating: 4.7,
        language: "English"
    },
    {
        id: 11,
        author_img: "/assets/img/teacher/teacher-4.png",
        author_name: "Benjamin Evalent",
        title: "Benefits Gym Change Your Perspective",
        thumbnail: "/assets/img/course/course-5-thumb-5.jpg",
        category: "Fitness",
        price: 38,
        avg_rating: 4.5,
        discount: 10,
        lessons: 12,
        students: 45,
        total_rating: 4.6,
        language: "English"
    },
    {
        id: 12,
        author_img: "/assets/img/teacher/teacher-6.png",
        author_name: "Benjamin Evalent",
        title: "Taboos about Gym You Should Share On Twitter",
        thumbnail: "/assets/img/course/course-5-thumb-6.jpg",
        category: "Fitness",
        price: 0,
        avg_rating: 4.9,
        discount: 0,
        lessons: 12,
        students: 45,
        total_rating: 5,
        language: "English"
    }
];
const high_school_course_data = [
    {
        id: 13,
        title: "English Language Club",
        author_img: "/assets/img/course/course-4-teacher-1.png",
        author_name: "Patrick",
        thumbnail: "/assets/img/course/course-4-thumb-1.jpg",
        category: "Language",
        price: 0,
        avg_rating: 5,
        discount: 0,
        lessons: 12,
        students: 45,
        total_rating: 12,
        language: "Hindi"
    },
    {
        id: 14,
        title: "Arabic Language Club",
        author_img: "/assets/img/course/course-4-teacher-1.png",
        author_name: "Patrick",
        thumbnail: "/assets/img/course/course-4-thumb-2.jpg",
        category: "Language",
        price: 0,
        avg_rating: 5,
        discount: 0,
        lessons: 12,
        students: 38,
        total_rating: 15,
        language: "English"
    }
];
const all_courses = [
    ...online_courses_data,
    ...high_school_course_data,
    ...gym_course_data
];
}),
"[project]/src/lib/format-price.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPrice",
    ()=>formatPrice
]);
function formatPrice(price, showDecimals = false) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: showDecimals ? 2 : 0,
        maximumFractionDigits: showDecimals ? 2 : 0
    }).format(price);
}
}),
"[project]/src/components/modal/search-popup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$close$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/close-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$search$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/search-svg.tsx [app-ssr] (ecmascript) <export default as SearchSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$star$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/star.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$course$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/course-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$price$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-price.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const top_programs = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$course$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["online_courses_data"]
].slice(0, 4);
function SearchPopup({ isSearchOpen, onHide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `tp-search-area ${isSearchOpen ? 'opened' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tp-search-inner p-relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-search-close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "tp-search-close-btn",
                                onClick: onHide,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$close$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseThreeSvg"], {
                                    clr: "#57595F"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                    lineNumber: 21,
                                    columnNumber: 22
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                lineNumber: 20,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/search-popup.tsx",
                            lineNumber: 19,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-search-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-9",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-search-content blue",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search p-relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "search-input",
                                                            placeholder: "What are you looking for?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modal/search-popup.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "tp-search-icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$search$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchSvg$3e$__["SearchSvg"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                lineNumber: 32,
                                                                columnNumber: 37
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modal/search-popup.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tp-search-course-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "tp-search-course-title",
                                                            children: "OUR TOP Program"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modal/search-popup.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 34
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: top_programs.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-xl-3 col-lg-4 col-sm-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "tp-search-course-item mb-30",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "tp-search-course-thumb mb-5",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: `/course-details/${item.id}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: item.thumbnail,
                                                                                        alt: "search-img",
                                                                                        width: 186,
                                                                                        height: 104
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                        lineNumber: 43,
                                                                                        columnNumber: 52
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                    lineNumber: 42,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                lineNumber: 41,
                                                                                columnNumber: 46
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "tp-search-course-content",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "tp-search-course-star",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$star$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarThree"], {}, void 0, false, {
                                                                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                    lineNumber: 48,
                                                                                                    columnNumber: 58
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                lineNumber: 48,
                                                                                                columnNumber: 52
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$star$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarThree"], {}, void 0, false, {
                                                                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                    lineNumber: 49,
                                                                                                    columnNumber: 58
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                lineNumber: 49,
                                                                                                columnNumber: 52
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$star$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarThree"], {}, void 0, false, {
                                                                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                    lineNumber: 50,
                                                                                                    columnNumber: 58
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                lineNumber: 50,
                                                                                                columnNumber: 52
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$star$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarThree"], {}, void 0, false, {
                                                                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                    lineNumber: 51,
                                                                                                    columnNumber: 58
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                lineNumber: 51,
                                                                                                columnNumber: 52
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$star$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarThree"], {}, void 0, false, {
                                                                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                    lineNumber: 52,
                                                                                                    columnNumber: 58
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                                lineNumber: 52,
                                                                                                columnNumber: 52
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                        lineNumber: 47,
                                                                                        columnNumber: 49
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "tp-search-course-item-title",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                            href: `/course-details/${item.id}`,
                                                                                            children: item.category
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                            lineNumber: 55,
                                                                                            columnNumber: 52
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                        lineNumber: 54,
                                                                                        columnNumber: 49
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "tp-search-course-price",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$price$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(item.price, true)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                            lineNumber: 60,
                                                                                            columnNumber: 52
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                        lineNumber: 59,
                                                                                        columnNumber: 49
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                                lineNumber: 46,
                                                                                columnNumber: 46
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                        lineNumber: 40,
                                                                        columnNumber: 43
                                                                    }, this)
                                                                }, item.id, false, {
                                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                                    lineNumber: 39,
                                                                    columnNumber: 40
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modal/search-popup.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modal/search-popup.tsx",
                                            lineNumber: 28,
                                            columnNumber: 28
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modal/search-popup.tsx",
                                        lineNumber: 27,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modal/search-popup.tsx",
                                    lineNumber: 26,
                                    columnNumber: 22
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modal/search-popup.tsx",
                                lineNumber: 25,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modal/search-popup.tsx",
                            lineNumber: 24,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modal/search-popup.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/modal/search-popup.tsx",
                lineNumber: 17,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onHide,
                className: `body-overlay ${isSearchOpen ? 'opened' : ''}`
            }, void 0, false, {
                fileName: "[project]/src/components/modal/search-popup.tsx",
                lineNumber: 76,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/header/button/search-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$search$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/search-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$search$2d$popup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modal/search-popup.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SearchButton({ icon }) {
    const [isSearchOpen, setIsSearchOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const handleSearchToggle = ()=>{
        setIsSearchOpen(!isSearchOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "tp-search-open-btn",
                onClick: handleSearchToggle,
                children: icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$search$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchSvgTwo"], {}, void 0, false, {
                    fileName: "[project]/src/components/header/button/search-button.tsx",
                    lineNumber: 20,
                    columnNumber: 22
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/button/search-button.tsx",
                lineNumber: 19,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modal$2f$search$2d$popup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isSearchOpen: isSearchOpen,
                onHide: handleSearchToggle
            }, void 0, false, {
                fileName: "[project]/src/components/header/button/search-button.tsx",
                lineNumber: 23,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/svg/dashboard-svg.tsx [app-ssr] (ecmascript) <export default as DashboardSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$dashboard$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$dashboard$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/dashboard-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/enrollment-svg.tsx [app-ssr] (ecmascript) <export default as EnrollmentSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnrollmentSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$enrollment$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$enrollment$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/enrollment-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/logout-svg.tsx [app-ssr] (ecmascript) <export default as LogoutSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoutSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$logout$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$logout$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/logout-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/order-svg.tsx [app-ssr] (ecmascript) <export default as OrderSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$order$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$order$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/order-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/question-svg.tsx [app-ssr] (ecmascript) <export default as QuestionSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$question$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$question$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/question-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/quiz-svg.tsx [app-ssr] (ecmascript) <export default as QuizSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$quiz$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$quiz$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/quiz-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/review-svg.tsx [app-ssr] (ecmascript) <export default as ReviewSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$review$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$review$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/review-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/setting-svg.tsx [app-ssr] (ecmascript) <export default as SettingSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$setting$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$setting$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/setting-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/user-svg.tsx [app-ssr] (ecmascript) <export default as UserSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$user$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$user$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/user-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/src/components/svg/wishlist-svg.tsx [app-ssr] (ecmascript) <export default as WishlistSvg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistSvg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$wishlist$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$wishlist$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/wishlist-svg.tsx [app-ssr] (ecmascript)");
}),
"[project]/public/assets/img/event/user.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/user.ac5f74f8.jpg");}),
"[project]/public/assets/img/event/user.jpg.mjs { IMAGE => \"[project]/public/assets/img/event/user.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/event/user.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 80,
    height: 80,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDo9P1G7n8e39qJ5HddpCsCpTAwQAeozzkcc1OvP5Bp7PXc/9k="
};
}),
"[project]/src/components/header/header-profile/profile-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$dashboard$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DashboardSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/dashboard-svg.tsx [app-ssr] (ecmascript) <export default as DashboardSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$enrollment$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnrollmentSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/enrollment-svg.tsx [app-ssr] (ecmascript) <export default as EnrollmentSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$logout$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/logout-svg.tsx [app-ssr] (ecmascript) <export default as LogoutSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$order$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OrderSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/order-svg.tsx [app-ssr] (ecmascript) <export default as OrderSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$question$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QuestionSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/question-svg.tsx [app-ssr] (ecmascript) <export default as QuestionSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$quiz$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QuizSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/quiz-svg.tsx [app-ssr] (ecmascript) <export default as QuizSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$review$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReviewSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/review-svg.tsx [app-ssr] (ecmascript) <export default as ReviewSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$setting$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/setting-svg.tsx [app-ssr] (ecmascript) <export default as SettingSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$user$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/user-svg.tsx [app-ssr] (ecmascript) <export default as UserSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$user$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/user-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$wishlist$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WishlistSvg$3e$__ = __turbopack_context__.i("[project]/src/components/svg/wishlist-svg.tsx [app-ssr] (ecmascript) <export default as WishlistSvg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/event/user.jpg.mjs { IMAGE => "[project]/public/assets/img/event/user.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
const listData = [
    {
        link: "/dashboard/instructor-dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$dashboard$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DashboardSvg$3e$__["DashboardSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 25,
            columnNumber: 52
        }, ("TURBOPACK compile-time value", void 0)),
        label: "My Dashboard"
    },
    {
        link: "/dashboard/instructor-profile",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$user$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserSvg$3e$__["UserSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 26,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0)),
        label: "My Profile"
    },
    {
        link: "/dashboard/instructor-enroll-course",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$enrollment$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EnrollmentSvg$3e$__["EnrollmentSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 27,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Enrolled Courses"
    },
    {
        link: "/dashboard/instructor-wishlist",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$wishlist$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WishlistSvg$3e$__["WishlistSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 28,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Wishlist"
    },
    {
        link: "/dashboard/instructor-reviews",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$review$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReviewSvg$3e$__["ReviewSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 29,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Reviews"
    },
    {
        link: "/dashboard/instructor-quiz-attempts",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$quiz$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QuizSvg$3e$__["QuizSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 30,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0)),
        label: "My Quiz Attempts"
    },
    {
        link: "/dashboard/instructor-order",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$order$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OrderSvg$3e$__["OrderSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 31,
            columnNumber: 48
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Order History"
    },
    {
        link: "/dashboard/instructor-announcements",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$question$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QuestionSvg$3e$__["QuestionSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 32,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Question & Answer"
    },
    {
        isDivider: true
    },
    {
        link: "/dashboard/instructor-setting-profile",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$setting$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingSvg$3e$__["SettingSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 34,
            columnNumber: 58
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Settings"
    },
    {
        link: "/login",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$logout$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutSvg$3e$__["LogoutSvg"], {}, void 0, false, {
            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
            lineNumber: 35,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Logout"
    }
];
function ProfileDropdown({ top_cls = "tp-header-inner-login", user_icon }) {
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${top_cls} tp-header-user-hover ${openDropdown ? "active" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpenDropdown(!openDropdown),
                children: user_icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$user$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserSvgThree"], {}, void 0, false, {
                        fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                        lineNumber: 48,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                    lineNumber: 48,
                    columnNumber: 22
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "user"
                }, void 0, false, {
                    fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                    lineNumber: 48,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tp-header-user-box",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tp-header-user-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-header-user-profile d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-header-user-profile-thumb",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$event$2f$user$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "user"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-header-user-profile-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Floyd Miles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Founder"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-header-user-list",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: listData.map((item, index)=>item.isDivider ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hr-border"
                                    }, `divider-${index}`, false, {
                                        fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                        lineNumber: 66,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.link,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 23
                                                }, this),
                                                item.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                            lineNumber: 69,
                                            columnNumber: 21
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header/header-profile/profile-dropdown.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/hooks/use-sticky.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useSticky = ()=>{
    const [sticky, setSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 200) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener("scroll", stickyHeader);
        return ()=>{
            window.removeEventListener("scroll", stickyHeader);
        };
    }, []);
    return {
        sticky
    };
};
const __TURBOPACK__default__export__ = useSticky;
}),
"[project]/src/components/header/header-sticky-provider/header-sticky-wrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeaderStickyWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sticky$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-sticky.ts [app-ssr] (ecmascript)");
"use client";
;
;
function HeaderStickyWrapper({ children, cls = "tp-header-mob-space tp-header-1" }) {
    const { sticky } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$sticky$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "header-sticky",
        className: `${cls} ${sticky ? "tp-header-sticky" : ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/header/header-sticky-provider/header-sticky-wrapper.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/public/assets/img/cartmini/empty-cart.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/empty-cart.daf1235b.png");}),
"[project]/public/assets/img/cartmini/empty-cart.png.mjs { IMAGE => \"[project]/public/assets/img/cartmini/empty-cart.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartmini$2f$empty$2d$cart$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/cartmini/empty-cart.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartmini$2f$empty$2d$cart$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 283,
    height: 171,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AIJ5dosUEhQVOzFDSTs/V2ErUG18GyM4QAAAAAAAAAAAAB0bGyAcJC4ynIvA2X6g0vktnb/xGjJFVxUTExcEBAMEAAYNDw87fpSuX6vS/Uisz/8uqMX3Y36Ot6OQisRCOjdNAAECAgIrXWmBPavF9TWSrtIuWnaRg4KCttC4rf2jkIfEAAAAAAALFBkfLU1qhjNEWXUGBgwONTAuPqiVjcdNREBaDY84pvpKIK0AAAAASUVORK5CYII="
};
}),
"[project]/src/components/sidebar/cart-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
// internal
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartmini$2f$empty$2d$cart$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$cartmini$2f$empty$2d$cart$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/cartmini/empty-cart.png.mjs { IMAGE => "[project]/public/assets/img/cartmini/empty-cart.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$course$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/course-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$price$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format-price.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const CartMiniSidebar = ({ openSidebar, onShowSidebar })=>{
    const cart_products = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$course$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["online_courses_data"]
    ].slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `cartmini__area ${openSidebar ? 'cartmini-opened' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cartmini__wrapper d-flex justify-content-between flex-column",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cartmini__top-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cartmini__top p-relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cartmini__top-title",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Shopping cart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cartmini__shipping home-shop",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        " Free Shipping for all orders over ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "$50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                            lineNumber: 28,
                                                            columnNumber: 54
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 16
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "progress",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "progress-bar progress-bar-striped progress-bar-animated",
                                                        role: "progressbar",
                                                        style: {
                                                            width: '70%'
                                                        },
                                                        "aria-valuenow": 70,
                                                        "aria-valuemin": 0,
                                                        "aria-valuemax": 100
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 16
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cartmini__close",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onShowSidebar,
                                                type: "button",
                                                className: "cartmini__close-btn cartmini-close-btn",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fal fa-times"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                cart_products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cartmini__widget",
                                    children: cart_products.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cartmini__widget-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cartmini__thumb",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `${item?.thumbnail}`,
                                                            width: 70,
                                                            height: 60,
                                                            alt: "product img"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cartmini__content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "cartmini__title home-shop",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeTagInText"])(item.title)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                                lineNumber: 49,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "cartmini__price-wrapper",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "cartmini__price home-shop",
                                                                    children: [
                                                                        "$",
                                                                        item.price.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "cartmini__quantity",
                                                                    children: [
                                                                        " ",
                                                                        "x",
                                                                        1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                                    lineNumber: 53,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "cartmini__del pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-regular fa-xmark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)),
                                cart_products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cartmini__empty text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartmini$2f$empty$2d$cart$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$cartmini$2f$empty$2d$cart$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "empty-cart-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Your Cart is empty"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop",
                                            className: "tp-btn",
                                            children: "Go to Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cartmini__checkout",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cartmini__checkout-title mb-30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: "Subtotal:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2d$price$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(cart_products.reduce((a, b)=>a + b.price, 0), true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cartmini__checkout-btn home-shop",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cart",
                                            onClick: onShowSidebar,
                                            className: "tp-btn mb-10 w-100",
                                            children: "view cart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/checkout",
                                            onClick: onShowSidebar,
                                            className: "tp-btn tp-btn-border w-100",
                                            children: "checkout"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onShowSidebar,
                className: `body-overlay ${openSidebar ? 'opened' : ''}`
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/cart-sidebar.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = CartMiniSidebar;
}),
"[project]/src/components/header/button/cart-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$cart$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/cart-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$cart$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/cart-sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function CartButton({ icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$cart$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cart"], {}, void 0, false, {
    fileName: "[project]/src/components/header/button/cart-button.tsx",
    lineNumber: 10,
    columnNumber: 42
}, this) }) {
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Add state to track mounting
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const handleCartMiniToggle = ()=>{
        setIsCartOpen(!isCartOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCartMiniToggle,
                className: "cartmini-open-btn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/button/cart-button.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/button/cart-button.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/button/cart-button.tsx",
                lineNumber: 28,
                columnNumber: 10
            }, this),
            mounted && modalRef.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$cart$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    openSidebar: isCartOpen,
                    onShowSidebar: handleCartMiniToggle
                }, void 0, false, {
                    fileName: "[project]/src/components/header/button/cart-button.tsx",
                    lineNumber: 38,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/button/cart-button.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this), modalRef.current)
        ]
    }, void 0, true);
}
}),
"[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo-black.adb087c7.png");}),
"[project]/public/assets/img/logo/logo-black.png.mjs { IMAGE => \"[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 251,
    height: 64,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AA0NFWkMDBJbCAgNQAkJD0gICAw9CQkOQgkJDkAHBwsxABERG4oTEx6VEBAafhISHI0RERqCDAwSVg4OFmQMDBNZArQIxo2pos4AAAAASUVORK5CYII="
};
}),
"[project]/src/data/menu-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "menu_data_2",
    ()=>menu_data_2
]);
const menu_data = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'About Us',
        link: '#',
        dropdown_menus: [
            {
                id: 1,
                title: "About Us",
                link: "/about"
            },
            {
                id: 2,
                title: "Leadership Messages",
                link: "/about/leadership"
            },
            {
                id: 3,
                title: "Mission, Vision & Policy",
                link: "/about/mission-vision"
            },
            {
                id: 4,
                title: "Why Choose Us",
                link: "/why-choose-us"
            },
            {
                id: 5,
                title: "Mandatory Disclosure",
                link: "/mandatory-disclosure"
            }
        ]
    },
    {
        id: 3,
        title: 'Academics',
        link: '/academics'
    },
    {
        id: 4,
        title: 'Admissions',
        link: '/online-application'
    },
    {
        id: 5,
        title: 'Facilities',
        link: '/facilities'
    },
    {
        id: 6,
        title: 'Gallery',
        link: '/gallery'
    },
    {
        id: 7,
        title: 'Contact Us',
        link: '/contact'
    }
];
const __TURBOPACK__default__export__ = menu_data;
const menu_data_2 = [];
}),
"[project]/public/assets/img/shape/menu-shape-1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu-shape-1.86e8d4aa.png");}),
"[project]/public/assets/img/shape/menu-shape-1.png.mjs { IMAGE => \"[project]/public/assets/img/shape/menu-shape-1.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/shape/menu-shape-1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 200,
    height: 170,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/AAAAAAAGBwgHHSEjIh4jGyozPT5PMTs/RgAAAAAAAAAAAC40NzaJlZqlrr3B2VNgYnBFUFNganV7hiEhIiYAAAABAEZPU1XBzMD2x9DI/5+vs820qprAjoJ77UtMTcUZGRknAFdbXmO0ydDwpsHL/6XAy//d3dz/lW9W/yUkJP11dXe0ANbW2efa3t7/r8fQ/7zP1v/Gxbz/s6hv/5WkbfyMkIWsAJmLga7pz7L47ubT/9/l1/+pvHH7l7ZR+pW2Tfk6Rh5cAEk8MFmmop617Ofl+6qvocZecTSSdpA8wYelRdwyPBlNMMR0U+2qpQAAAAAASUVORK5CYII="
};
}),
"[project]/public/assets/img/shape/menu-shape-2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu-shape-2.f0192dd0.png");}),
"[project]/public/assets/img/shape/menu-shape-2.png.mjs { IMAGE => \"[project]/public/assets/img/shape/menu-shape-2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/shape/menu-shape-2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 191,
    height: 128,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AAEBAVADAwO/BAQD3VdJJdfPrln1sZVM1EQ9MawFBQUkAAkJCT0gIB/KPzsx+6ONVP+yuW7/iK5q/4h4RN0UEQokADQ0NVOWlZbF0cu89eXUqf+xynf/UsKC/8e4YuMsJRMqAAkJCRgeHRo5moRNou3IbPzg0Xf/s969/9bKoedVU1BaAAAAAA8AAAAbIhwOH5d+PpXNsGjU0czC3qCfnq2Tk5ahxZNJJtkBql4AAAAASUVORK5CYII="
};
}),
"[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavPagesDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$arrow$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/arrow-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/shape/menu-shape-1.png.mjs { IMAGE => "[project]/public/assets/img/shape/menu-shape-1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/shape/menu-shape-2.png.mjs { IMAGE => "[project]/public/assets/img/shape/menu-shape-2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
function NavPagesDropdown({ pages_dropdown }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "megamenu-demo-fullwidth p-relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xl-8 col-lg-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tp-megamenu-fullwidth-list-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row tp-gx-90",
                            children: pages_dropdown.map((pd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `col-xl-${pd.id === 2 ? 6 : 3}`,
                                    children: [
                                        pd.id !== 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-megamenu-fullwidth-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "tp-megamenu-fullwidth-title",
                                                    children: pd.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: pd.dropdown_menus.map((sm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: sm.link,
                                                                children: sm.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, sm.id, false, {
                                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                            lineNumber: 23,
                                            columnNumber: 21
                                        }, this),
                                        pd.id === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-megamenu-fullwidth-list ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "tp-megamenu-fullwidth-title",
                                                    children: pd.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tp-megamenu-fullwidth-list-wrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-xl-6 col-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    children: pd.dropdown_menus.slice(0, 6).map((sm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: sm.link,
                                                                                children: sm.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                                lineNumber: 47,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, sm.id, false, {
                                                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                            lineNumber: 46,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                    lineNumber: 44,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-xl-6 col-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    children: pd.dropdown_menus.slice(6).map((sm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: sm.link,
                                                                                children: sm.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                                lineNumber: 56,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, sm.id, false, {
                                                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                            lineNumber: 55,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                    lineNumber: 53,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                lineNumber: 52,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                            lineNumber: 37,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, pd.id, true, {
                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                    lineNumber: 21,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xl-4 col-lg-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tp-megamenu-fullwidth-item-wrap d-none d-xl-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tp-megamenu-fullwidth-item d-flex justify-content-between align-items-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-megamenu-fullwidth-content blue",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "tp-megamenu-fullwidth-content-title",
                                                        children: [
                                                            "Online ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 30
                                                            }, this),
                                                            " Learning Platforms"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "tp-btn",
                                                        href: "/course-with-filter",
                                                        children: [
                                                            "All Course",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$arrow$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RightSmArrow"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-megamenu-fullwidth-content-thumb",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    alt: "menu-shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tp-megamenu-fullwidth-item bg d-flex justify-content-between align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-megamenu-fullwidth-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "tp-megamenu-fullwidth-content-title",
                                                        children: [
                                                            "Accelerated ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 35
                                                            }, this),
                                                            " Degree Programs"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "tp-btn",
                                                        href: "/university-program",
                                                        children: [
                                                            "All Programs",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$arrow$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RightSmArrow"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-megamenu-fullwidth-content-thumb",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$shape$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    alt: "menu-shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavHomeDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
function NavHomeDropdown({ home_dropdown }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "megamenu-demo-conteiner p-relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row tp-gx-20",
            children: home_dropdown.map((hm_m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-xl-3 col-md-6 col-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tp-megamenu-home-item text-center p-relative mb-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tp-megamenu-home-thumb",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: hm_m.link,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: hm_m.img,
                                        alt: hm_m.title,
                                        width: 270,
                                        height: 170
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
                                        lineNumber: 19,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
                                    lineNumber: 18,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "tp-megamenu-home-title",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "red",
                                    href: hm_m.link,
                                    children: hm_m.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
                                    lineNumber: 28,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, this)
                }, hm_m.id, false, {
                    fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffcanvasMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$pages$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$home$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
function OffcanvasMenu() {
    const [navTitle, setNavTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    //openMobileMenu
    const openMobileMenu = (menu)=>{
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tp-main-menu-mobile d-xl-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "tp-main-menu-content",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "dropdown-opened",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: `has-dropdown ${menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""} ${navTitle === menu.title ? "dropdown-opened expanded" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: menu.link,
                                className: `${menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""}`,
                                children: [
                                    menu.title,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openMobileMenu(menu.title),
                                        className: `dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                        lineNumber: 27,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this),
                            menu.home_dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tp-megamenu-main",
                                style: {
                                    display: navTitle === menu.title ? "block" : "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$home$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    home_dropdown: menu.home_dropdown
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                    lineNumber: 32,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                lineNumber: 31,
                                columnNumber: 17
                            }, this),
                            menu.sm_mega_menus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tp-megamenu-main",
                                style: {
                                    display: navTitle === menu.title ? "block" : "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "megamenu-demo-small p-relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tp-megamenu-small-content",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row tp-gx-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-xl-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tp-megamenu-list",
                                                        children: menu.sm_mega_menus.slice(0, 4).map((dm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: dm.link,
                                                                children: dm.title
                                                            }, dm.id, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                                                lineNumber: 44,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-xl-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tp-megamenu-list",
                                                        children: menu.sm_mega_menus.slice(4).map((dm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: dm.link,
                                                                children: dm.title
                                                            }, dm.id, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                                                lineNumber: 53,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                            lineNumber: 40,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                        lineNumber: 39,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                lineNumber: 37,
                                columnNumber: 17
                            }, this),
                            menu.pages_dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tp-megamenu-main",
                                style: {
                                    display: navTitle === menu.title ? "block" : "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$pages$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    pages_dropdown: menu.pages_dropdown
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                    lineNumber: 67,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this),
                            menu.dropdown_menus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "tp-submenu",
                                style: {
                                    display: navTitle === menu.title ? "block" : "none"
                                },
                                children: menu.dropdown_menus.map((dm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: dm.link,
                                            children: dm.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                            lineNumber: 75,
                                            columnNumber: 23
                                        }, this)
                                    }, dm.id, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                        lineNumber: 74,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        ]
                    }, menu.id, true, {
                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/public/assets/img/menu/menu-shape.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu-shape.3ae281cc.png");}),
"[project]/public/assets/img/menu/menu-shape.png.mjs { IMAGE => \"[project]/public/assets/img/menu/menu-shape.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/menu/menu-shape.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 200,
    height: 261,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AAAAAAAAAAAAAgUFEy1AP8UcOT3QAwcJIQAAAAAAAAAAAAYGBQyPeWW5jXtn0Q0NDB8AAAAAAAAAAAABAQEBW0g+abqRgtJcODRjADU2LD8dIiMpCAgICpRcWKTvhXv+48jH8gCXlXGukqisx19lZnzDjong8JGJ/9XGyO4ADg4NDy9SXnhmorD4vKee/sevs/+lbXDdAAAAAAAHIy09HnCJwICGiPt3VFf/akJHwwAAAAAAAAAAAQclLkAtboXqSTw2wEk9Mo2L9EFuEZc4qwAAAABJRU5ErkJggg=="
};
}),
"[project]/public/assets/img/menu/menu-shape-2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu-shape-2.95abd502.png");}),
"[project]/public/assets/img/menu/menu-shape-2.png.mjs { IMAGE => \"[project]/public/assets/img/menu/menu-shape-2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/menu/menu-shape-2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 20,
    height: 15,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AAENEAcGVWxWB1NtSgAEBQIAAAAAAhgfHghif2YCHSUXAAVBU1EIaomRAhUbDwAAAAABDxQQCGWDiwU/UkUAAwQBAAqGrMIJdZesBDVDMwEKDQUEP1JLCoSr2gZSa2UCGyIXAAuLtPYLi7T8C4eu3AZGWkUGU2x5C4u0+wuKsvUKfaGxAAuJsucLi7T/C4u0+wZTbHgGUWltC4u0+QuLtP8Li7T0AAdZcn0LibHuC4ix1wVCVj4DJjEoCn6jxQuLtPQJfKGh/SE+qGfEbJwAAAAASUVORK5CYII="
};
}),
"[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavAcademicDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$arrow$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/arrow-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/menu/menu-shape.png.mjs { IMAGE => "[project]/public/assets/img/menu/menu-shape.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/menu/menu-shape-2.png.mjs { IMAGE => "[project]/public/assets/img/menu/menu-shape-2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function NavAcademicDropdown({ academic_dropdown }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "megamenu-demo-academics p-relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tp-megamenu-academics-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row tp-gx-50",
                    children: [
                        academic_dropdown.map((dp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-xl-3 col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-megamenu-academics-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "tp-megamenu-academics-title",
                                            children: dp.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                            lineNumber: 20,
                                            columnNumber: 19
                                        }, this),
                                        dp.dropdown_menus.map((dm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: dm.link,
                                                children: dm.title
                                            }, dm.id, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                                lineNumber: 22,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                    lineNumber: 19,
                                    columnNumber: 17
                                }, this)
                            }, dp.id, false, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-xl-6 col-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tp-megamenu-academics-banner p-relative d-none d-xl-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "tp-megamenu-academics-banner-title",
                                        children: "Alumni"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "shape"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Everything that I learned at ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                                lineNumber: 34,
                                                columnNumber: 48
                                            }, this),
                                            "Kempbelle University really ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                                lineNumber: 35,
                                                columnNumber: 47
                                            }, this),
                                            "helped put me above the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                                lineNumber: 36,
                                                columnNumber: 43
                                            }, this),
                                            "competition in the field ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                                lineNumber: 37,
                                                columnNumber: 44
                                            }, this),
                                            "of Computer Science."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: [
                                            "Our Alumni",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$arrow$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RightArrowTwo"], {
                                                    clr: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tp-megamenu-academics-banner-shape",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "shape"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-lg-12 d-none d-xl-block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tp-megamenu-academics-btns text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/university-request-info",
                                children: "Request Info"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "active",
                                href: "/university-application-form",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/university-schedule",
                                children: "Visit University"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
}
}),
"[project]/public/assets/img/menu/menu-shape-3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu-shape-3.979ef1a1.png");}),
"[project]/public/assets/img/menu/menu-shape-3.png.mjs { IMAGE => \"[project]/public/assets/img/menu/menu-shape-3.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/menu/menu-shape-3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 120,
    height: 78,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AAYGBwRbVGdWHBkgGgAAAABGRkZwTU1NwAYGBiYBAQEEAAAAAAATEhUSCwsMDQEBAQFISEhSdYSF5xwlJdIRERFzAD4+PkMuLi4yBgYGCRERERRaX2BvIWlt1AxTV/8YKSrJAKmoqrPGxMrQICAgIygoKCy2u7vHWpib9VeYm/9LWlvsAFFRUnXIx8rZYWFha29vb3y8vb3C4ufo8tni4/NJWFmSgzE36yUUaaoAAAAASUVORK5CYII="
};
}),
"[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavCourseDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/menu/menu-shape-3.png.mjs { IMAGE => "[project]/public/assets/img/menu/menu-shape-3.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
function NavCourseDropdown({ course_dropdown }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "megamenu-demo-courses p-relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tp-megamenu-courses-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row tp-gx-50",
                    children: course_dropdown.map((cm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-xl-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tp-megamenu-courses-list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "tp-megamenu-courses-title",
                                        children: cm.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                                        lineNumber: 18,
                                        columnNumber: 17
                                    }, this),
                                    cm.dropdown_menus.map((dm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: dm.link,
                                            children: dm.title
                                        }, dm.id, false, {
                                            fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                                            lineNumber: 20,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this)
                        }, cm.id, false, {
                            fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tp-megamenu-courses-wrap d-none d-xl-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "tp-megamenu-courses-wrap-title",
                        children: "Developer hub"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Start building fast, with code samples and more"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tp-megamenu-courses-thumb",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$menu$2f$menu$2d$shape$2d$3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "shape"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffcanvasMenuTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$academic$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/navbar/dropdown/nav-academic-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$pages$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/navbar/dropdown/nav-pages-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$course$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/navbar/dropdown/nav-course-dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$home$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/navbar/dropdown/nav-home-dropdown.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function OffcanvasMenuTwo() {
    const [subMenu, setSubMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [navTitle, setNavTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    //openMobileMenu
    const openMobileMenu = (menu)=>{
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
        setSubMenu("");
    };
    // openSubMobileMenu
    const openSubMobileMenu = (s_menu)=>{
        if (subMenu === s_menu) {
            setSubMenu("");
        } else {
            setSubMenu(s_menu);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tp-main-menu-mobile d-xl-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "tp-main-menu-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "dropdown-opened",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menu_data_2"].map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `has-dropdown ${menu.home_dropdown || menu.academic_dropdown || menu.course_dropdown || menu.pages_dropdown ? "tp-static" : ""} ${navTitle === menu.title ? "dropdown-opened expanded" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: menu.link,
                                    className: `${menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""}`,
                                    children: [
                                        menu.title,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>openMobileMenu(menu.title),
                                            className: `dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                            lineNumber: 38,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this),
                                menu.home_dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-megamenu-main",
                                    style: {
                                        display: navTitle === menu.title ? "block" : "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$home$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        home_dropdown: menu.home_dropdown
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                        lineNumber: 43,
                                        columnNumber: 31
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                    lineNumber: 42,
                                    columnNumber: 28
                                }, this),
                                menu.academic_dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-megamenu-main",
                                    style: {
                                        display: navTitle === menu.title ? "block" : "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$academic$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        academic_dropdown: menu.academic_dropdown
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                        lineNumber: 49,
                                        columnNumber: 31
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                    lineNumber: 48,
                                    columnNumber: 28
                                }, this),
                                menu.course_dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-megamenu-main tp-megamenu-courses",
                                    style: {
                                        display: navTitle === menu.title ? "block" : "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$course$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        course_dropdown: menu.course_dropdown
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                        lineNumber: 55,
                                        columnNumber: 31
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                    lineNumber: 54,
                                    columnNumber: 28
                                }, this),
                                menu.dashboard_dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: `tp-submenu ${navTitle === menu.title ? "dropdown-opened" : ""}`,
                                    style: {
                                        display: navTitle === menu.title ? "block" : "none"
                                    },
                                    children: menu.dashboard_dropdown.map((dpm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: `has-dropdown ${dpm.title === subMenu ? "dropdown-opened expanded" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: dpm.link,
                                                    children: [
                                                        dpm.title,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openSubMobileMenu(dpm.title),
                                                            className: `dropdown-toggle-btn ${subMenu === dpm.title ? "dropdown-opened" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 51
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "tp-submenu",
                                                    style: {
                                                        display: subMenu === dpm.title ? "block" : "none"
                                                    },
                                                    children: dpm.dropdown_menus.map((dm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: dm.link,
                                                                children: dm.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 46
                                                            }, this)
                                                        }, dm.id, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 43
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, dpm.id, true, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                            lineNumber: 62,
                                            columnNumber: 34
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                    lineNumber: 60,
                                    columnNumber: 28
                                }, this),
                                menu.pages_dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-megamenu-main",
                                    style: {
                                        display: navTitle === menu.title ? "block" : "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$navbar$2f$dropdown$2f$nav$2d$pages$2d$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        pages_dropdown: menu.pages_dropdown
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                        lineNumber: 80,
                                        columnNumber: 31
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                    lineNumber: 79,
                                    columnNumber: 28
                                }, this),
                                menu.dropdown_menus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "tp-submenu",
                                    style: {
                                        display: navTitle === menu.title ? "block" : "none"
                                    },
                                    children: menu.dropdown_menus.map((dm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: dm.link,
                                                children: dm.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                                lineNumber: 88,
                                                columnNumber: 37
                                            }, this)
                                        }, dm.id, false, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                            lineNumber: 87,
                                            columnNumber: 34
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                                    lineNumber: 85,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, menu.id, true, {
                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                            lineNumber: 36,
                            columnNumber: 22
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this)
    }, void 0, false);
}
}),
"[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffcanvasArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/logo/logo-black.png.mjs { IMAGE => "[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$social$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/social-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$close$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/svg/close-svg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$offcanvas$2f$offcanvas$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/offcanvas/offcanvas-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$offcanvas$2f$offcanvas$2d$menu$2d$2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/offcanvas/offcanvas-menu-2.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const galleryData = [
    {
        link: "https://www.instagram.com/",
        src: "/assets/img/menu/offcanvas/offcanvas-1.jpg"
    },
    {
        link: "https://www.instagram.com/",
        src: "/assets/img/menu/offcanvas/offcanvas-2.jpg"
    },
    {
        link: "https://www.instagram.com/",
        src: "/assets/img/menu/offcanvas/offcanvas-3.jpg"
    },
    {
        link: "https://www.instagram.com/",
        src: "/assets/img/menu/offcanvas/offcanvas-4.jpg"
    }
];
function OffcanvasArea({ openOffCanvas, onHandleOffCanvas, offcanvas_cls, offcanvas_menu_2 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `offcanvas__area ${offcanvas_cls} ${openOffCanvas ? 'offcanvas-opened' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "offcanvas__wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "offcanvas__close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onHandleOffCanvas,
                                className: "offcanvas__close-btn offcanvas-close-btn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$close$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseThreeSvg"], {}, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                    lineNumber: 29,
                                    columnNumber: 22
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                lineNumber: 28,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                            lineNumber: 27,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "offcanvas__content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "offcanvas__top mb-90 d-flex justify-content-between align-items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "offcanvas__logo tp-header-logo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                alt: "logo",
                                                style: {
                                                    height: 'auto'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                lineNumber: 36,
                                                columnNumber: 28
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                            lineNumber: 35,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                        lineNumber: 34,
                                        columnNumber: 22
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                    lineNumber: 33,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "offcanvas-main",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "offcanvas-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "offcanvas-title",
                                                    children: "Welcome to SJS!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Learn to Live. Nurturing excellence through innovative education."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                            lineNumber: 41,
                                            columnNumber: 22
                                        }, this),
                                        offcanvas_menu_2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$offcanvas$2f$offcanvas$2d$menu$2d$2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                            lineNumber: 47,
                                            columnNumber: 42
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$offcanvas$2f$offcanvas$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                            lineNumber: 47,
                                            columnNumber: 65
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "offcanvas-gallery",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row gx-2",
                                                children: galleryData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-3 col-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "offcanvas-gallery-img fix",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: item.link,
                                                                target: "_blank",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: item.src,
                                                                    alt: `gallery-${index}`,
                                                                    width: 87,
                                                                    height: 87
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                    lineNumber: 56,
                                                                    columnNumber: 40
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 37
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 34
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 31
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                lineNumber: 51,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                            lineNumber: 50,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "offcanvas-contact",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "offcanvas-title sm",
                                                    children: "Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "tel:+914162234033",
                                                                children: "+91 416 2234033"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 66,
                                                                columnNumber: 32
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "mailto:info@sreejayamschool.edu.in",
                                                                children: "info@sreejayamschool.edu.in"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 32
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                children: "Sree Jayam School, Vellore"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 32
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                            lineNumber: 63,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "offcanvas-social",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "offcanvas-title sm",
                                                    children: "Follow Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$social$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstagramSvg"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 34
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$social$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DribbleSvg"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 34
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$social$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BehanceSvg"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 34
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$social$2d$svg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YoutubeTwoSvg"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 34
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                            lineNumber: 71,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                                    lineNumber: 40,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                            lineNumber: 32,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                    lineNumber: 26,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                lineNumber: 25,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onHandleOffCanvas,
                className: `body-overlay ${openOffCanvas ? 'opened' : ''}`
            }, void 0, false, {
                fileName: "[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx",
                lineNumber: 102,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/header/button/offcanvas-btn.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffcanvasButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$offcanvas$2f$offcanvas$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sidebar/offcanvas/offcanvas-area.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function OffcanvasButton({ children, offcanvas_cls = '', offcanvas_menu_2 = false }) {
    const [isOpenOffcanvas, setIsOpenOffcanvas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Add state to track mounting
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const handleOffcanvasToggle = ()=>{
        setIsOpenOffcanvas(!isOpenOffcanvas);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleOffcanvasToggle,
                className: "offcanvas-open-btn",
                children: children ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "fa-solid fa-bars"
                }, void 0, false, {
                    fileName: "[project]/src/components/header/button/offcanvas-btn.tsx",
                    lineNumber: 27,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/button/offcanvas-btn.tsx",
                lineNumber: 26,
                columnNumber: 10
            }, this),
            mounted && modalRef.current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sidebar$2f$offcanvas$2f$offcanvas$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    openOffCanvas: isOpenOffcanvas,
                    onHandleOffCanvas: handleOffcanvasToggle,
                    offcanvas_cls: offcanvas_cls,
                    offcanvas_menu_2: offcanvas_menu_2
                }, void 0, false, {
                    fileName: "[project]/src/components/header/button/offcanvas-btn.tsx",
                    lineNumber: 33,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/button/offcanvas-btn.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this), modalRef.current)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/back-to-top.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function BackToTop() {
    function backToTop() {
        const result = document.querySelector(".back-to-top-wrapper");
        if (result) {
            document.addEventListener("scroll", ()=>{
                if (window.scrollY > 200) {
                    result.classList.add("back-to-top-btn-show");
                } else {
                    result.classList.remove("back-to-top-btn-show");
                }
            });
            result.addEventListener("click", ()=>{
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        backToTop();
        return ()=>{
            window.removeEventListener("scroll", backToTop);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "back-to-top-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "back_to_top",
            type: "button",
            className: "back-to-top-btn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "12",
                height: "7",
                viewBox: "0 0 12 7",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 6L6 1L1 6",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/back-to-top.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/back-to-top.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/back-to-top.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/back-to-top.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f4d7e4d._.js.map