var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { openBlock, createElementBlock, normalizeStyle, toDisplayString, getCurrentInstance, isInSSRComponentSetup, injectHook, renderSlot, resolveComponent, resolveDynamicComponent, normalizeClass, createElementVNode, createBlock, createCommentVNode, createVNode, withCtx, unref, createTextVNode } from "vue";
import { defineStore } from "pinia";
var icons = {
  "id": "2852637",
  "name": "uniui\u56FE\u6807\u5E93",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [
    {
      "icon_id": "25027049",
      "name": "yanse",
      "font_class": "color",
      "unicode": "e6cf",
      "unicode_decimal": 59087
    },
    {
      "icon_id": "25027048",
      "name": "wallet",
      "font_class": "wallet",
      "unicode": "e6b1",
      "unicode_decimal": 59057
    },
    {
      "icon_id": "25015720",
      "name": "settings-filled",
      "font_class": "settings-filled",
      "unicode": "e6ce",
      "unicode_decimal": 59086
    },
    {
      "icon_id": "25015434",
      "name": "shimingrenzheng-filled",
      "font_class": "auth-filled",
      "unicode": "e6cc",
      "unicode_decimal": 59084
    },
    {
      "icon_id": "24934246",
      "name": "shop-filled",
      "font_class": "shop-filled",
      "unicode": "e6cd",
      "unicode_decimal": 59085
    },
    {
      "icon_id": "24934159",
      "name": "staff-filled-01",
      "font_class": "staff-filled",
      "unicode": "e6cb",
      "unicode_decimal": 59083
    },
    {
      "icon_id": "24932461",
      "name": "VIP-filled",
      "font_class": "vip-filled",
      "unicode": "e6c6",
      "unicode_decimal": 59078
    },
    {
      "icon_id": "24932462",
      "name": "plus_circle_fill",
      "font_class": "plus-filled",
      "unicode": "e6c7",
      "unicode_decimal": 59079
    },
    {
      "icon_id": "24932463",
      "name": "folder_add-filled",
      "font_class": "folder-add-filled",
      "unicode": "e6c8",
      "unicode_decimal": 59080
    },
    {
      "icon_id": "24932464",
      "name": "yanse-filled",
      "font_class": "color-filled",
      "unicode": "e6c9",
      "unicode_decimal": 59081
    },
    {
      "icon_id": "24932465",
      "name": "tune-filled",
      "font_class": "tune-filled",
      "unicode": "e6ca",
      "unicode_decimal": 59082
    },
    {
      "icon_id": "24932455",
      "name": "a-rilidaka-filled",
      "font_class": "calendar-filled",
      "unicode": "e6c0",
      "unicode_decimal": 59072
    },
    {
      "icon_id": "24932456",
      "name": "notification-filled",
      "font_class": "notification-filled",
      "unicode": "e6c1",
      "unicode_decimal": 59073
    },
    {
      "icon_id": "24932457",
      "name": "wallet-filled",
      "font_class": "wallet-filled",
      "unicode": "e6c2",
      "unicode_decimal": 59074
    },
    {
      "icon_id": "24932458",
      "name": "paihangbang-filled",
      "font_class": "medal-filled",
      "unicode": "e6c3",
      "unicode_decimal": 59075
    },
    {
      "icon_id": "24932459",
      "name": "gift-filled",
      "font_class": "gift-filled",
      "unicode": "e6c4",
      "unicode_decimal": 59076
    },
    {
      "icon_id": "24932460",
      "name": "fire-filled",
      "font_class": "fire-filled",
      "unicode": "e6c5",
      "unicode_decimal": 59077
    },
    {
      "icon_id": "24928001",
      "name": "refreshempty",
      "font_class": "refreshempty",
      "unicode": "e6bf",
      "unicode_decimal": 59071
    },
    {
      "icon_id": "24926853",
      "name": "location-ellipse",
      "font_class": "location-filled",
      "unicode": "e6af",
      "unicode_decimal": 59055
    },
    {
      "icon_id": "24926735",
      "name": "person-filled",
      "font_class": "person-filled",
      "unicode": "e69d",
      "unicode_decimal": 59037
    },
    {
      "icon_id": "24926703",
      "name": "personadd-filled",
      "font_class": "personadd-filled",
      "unicode": "e698",
      "unicode_decimal": 59032
    },
    {
      "icon_id": "24923351",
      "name": "back",
      "font_class": "back",
      "unicode": "e6b9",
      "unicode_decimal": 59065
    },
    {
      "icon_id": "24923352",
      "name": "forward",
      "font_class": "forward",
      "unicode": "e6ba",
      "unicode_decimal": 59066
    },
    {
      "icon_id": "24923353",
      "name": "arrowthinright",
      "font_class": "arrow-right",
      "unicode": "e6bb",
      "unicode_decimal": 59067
    },
    {
      "icon_id": "24923353",
      "name": "arrowthinright",
      "font_class": "arrowthinright",
      "unicode": "e6bb",
      "unicode_decimal": 59067
    },
    {
      "icon_id": "24923354",
      "name": "arrowthinleft",
      "font_class": "arrow-left",
      "unicode": "e6bc",
      "unicode_decimal": 59068
    },
    {
      "icon_id": "24923354",
      "name": "arrowthinleft",
      "font_class": "arrowthinleft",
      "unicode": "e6bc",
      "unicode_decimal": 59068
    },
    {
      "icon_id": "24923355",
      "name": "arrowthinup",
      "font_class": "arrow-up",
      "unicode": "e6bd",
      "unicode_decimal": 59069
    },
    {
      "icon_id": "24923355",
      "name": "arrowthinup",
      "font_class": "arrowthinup",
      "unicode": "e6bd",
      "unicode_decimal": 59069
    },
    {
      "icon_id": "24923356",
      "name": "arrowthindown",
      "font_class": "arrow-down",
      "unicode": "e6be",
      "unicode_decimal": 59070
    },
    {
      "icon_id": "24923356",
      "name": "arrowthindown",
      "font_class": "arrowthindown",
      "unicode": "e6be",
      "unicode_decimal": 59070
    },
    {
      "icon_id": "24923349",
      "name": "arrowdown",
      "font_class": "bottom",
      "unicode": "e6b8",
      "unicode_decimal": 59064
    },
    {
      "icon_id": "24923349",
      "name": "arrowdown",
      "font_class": "arrowdown",
      "unicode": "e6b8",
      "unicode_decimal": 59064
    },
    {
      "icon_id": "24923346",
      "name": "arrowright",
      "font_class": "right",
      "unicode": "e6b5",
      "unicode_decimal": 59061
    },
    {
      "icon_id": "24923346",
      "name": "arrowright",
      "font_class": "arrowright",
      "unicode": "e6b5",
      "unicode_decimal": 59061
    },
    {
      "icon_id": "24923347",
      "name": "arrowup",
      "font_class": "top",
      "unicode": "e6b6",
      "unicode_decimal": 59062
    },
    {
      "icon_id": "24923347",
      "name": "arrowup",
      "font_class": "arrowup",
      "unicode": "e6b6",
      "unicode_decimal": 59062
    },
    {
      "icon_id": "24923348",
      "name": "arrowleft",
      "font_class": "left",
      "unicode": "e6b7",
      "unicode_decimal": 59063
    },
    {
      "icon_id": "24923348",
      "name": "arrowleft",
      "font_class": "arrowleft",
      "unicode": "e6b7",
      "unicode_decimal": 59063
    },
    {
      "icon_id": "24923334",
      "name": "eye",
      "font_class": "eye",
      "unicode": "e651",
      "unicode_decimal": 58961
    },
    {
      "icon_id": "24923335",
      "name": "eye-filled",
      "font_class": "eye-filled",
      "unicode": "e66a",
      "unicode_decimal": 58986
    },
    {
      "icon_id": "24923336",
      "name": "eye-slash",
      "font_class": "eye-slash",
      "unicode": "e6b3",
      "unicode_decimal": 59059
    },
    {
      "icon_id": "24923337",
      "name": "eye-slash-filled",
      "font_class": "eye-slash-filled",
      "unicode": "e6b4",
      "unicode_decimal": 59060
    },
    {
      "icon_id": "24923305",
      "name": "info-filled",
      "font_class": "info-filled",
      "unicode": "e649",
      "unicode_decimal": 58953
    },
    {
      "icon_id": "24923299",
      "name": "reload-01",
      "font_class": "reload",
      "unicode": "e6b2",
      "unicode_decimal": 59058
    },
    {
      "icon_id": "24923195",
      "name": "mic_slash_fill",
      "font_class": "micoff-filled",
      "unicode": "e6b0",
      "unicode_decimal": 59056
    },
    {
      "icon_id": "24923165",
      "name": "map-pin-ellipse",
      "font_class": "map-pin-ellipse",
      "unicode": "e6ac",
      "unicode_decimal": 59052
    },
    {
      "icon_id": "24923166",
      "name": "map-pin",
      "font_class": "map-pin",
      "unicode": "e6ad",
      "unicode_decimal": 59053
    },
    {
      "icon_id": "24923167",
      "name": "location",
      "font_class": "location",
      "unicode": "e6ae",
      "unicode_decimal": 59054
    },
    {
      "icon_id": "24923064",
      "name": "starhalf",
      "font_class": "starhalf",
      "unicode": "e683",
      "unicode_decimal": 59011
    },
    {
      "icon_id": "24923065",
      "name": "star",
      "font_class": "star",
      "unicode": "e688",
      "unicode_decimal": 59016
    },
    {
      "icon_id": "24923066",
      "name": "star-filled",
      "font_class": "star-filled",
      "unicode": "e68f",
      "unicode_decimal": 59023
    },
    {
      "icon_id": "24899646",
      "name": "a-rilidaka",
      "font_class": "calendar",
      "unicode": "e6a0",
      "unicode_decimal": 59040
    },
    {
      "icon_id": "24899647",
      "name": "fire",
      "font_class": "fire",
      "unicode": "e6a1",
      "unicode_decimal": 59041
    },
    {
      "icon_id": "24899648",
      "name": "paihangbang",
      "font_class": "medal",
      "unicode": "e6a2",
      "unicode_decimal": 59042
    },
    {
      "icon_id": "24899649",
      "name": "font",
      "font_class": "font",
      "unicode": "e6a3",
      "unicode_decimal": 59043
    },
    {
      "icon_id": "24899650",
      "name": "gift",
      "font_class": "gift",
      "unicode": "e6a4",
      "unicode_decimal": 59044
    },
    {
      "icon_id": "24899651",
      "name": "link",
      "font_class": "link",
      "unicode": "e6a5",
      "unicode_decimal": 59045
    },
    {
      "icon_id": "24899652",
      "name": "notification",
      "font_class": "notification",
      "unicode": "e6a6",
      "unicode_decimal": 59046
    },
    {
      "icon_id": "24899653",
      "name": "staff",
      "font_class": "staff",
      "unicode": "e6a7",
      "unicode_decimal": 59047
    },
    {
      "icon_id": "24899654",
      "name": "VIP",
      "font_class": "vip",
      "unicode": "e6a8",
      "unicode_decimal": 59048
    },
    {
      "icon_id": "24899655",
      "name": "folder_add",
      "font_class": "folder-add",
      "unicode": "e6a9",
      "unicode_decimal": 59049
    },
    {
      "icon_id": "24899656",
      "name": "tune",
      "font_class": "tune",
      "unicode": "e6aa",
      "unicode_decimal": 59050
    },
    {
      "icon_id": "24899657",
      "name": "shimingrenzheng",
      "font_class": "auth",
      "unicode": "e6ab",
      "unicode_decimal": 59051
    },
    {
      "icon_id": "24899565",
      "name": "person",
      "font_class": "person",
      "unicode": "e699",
      "unicode_decimal": 59033
    },
    {
      "icon_id": "24899566",
      "name": "email-filled",
      "font_class": "email-filled",
      "unicode": "e69a",
      "unicode_decimal": 59034
    },
    {
      "icon_id": "24899567",
      "name": "phone-filled",
      "font_class": "phone-filled",
      "unicode": "e69b",
      "unicode_decimal": 59035
    },
    {
      "icon_id": "24899568",
      "name": "phone",
      "font_class": "phone",
      "unicode": "e69c",
      "unicode_decimal": 59036
    },
    {
      "icon_id": "24899570",
      "name": "email",
      "font_class": "email",
      "unicode": "e69e",
      "unicode_decimal": 59038
    },
    {
      "icon_id": "24899571",
      "name": "personadd",
      "font_class": "personadd",
      "unicode": "e69f",
      "unicode_decimal": 59039
    },
    {
      "icon_id": "24899558",
      "name": "chatboxes-filled",
      "font_class": "chatboxes-filled",
      "unicode": "e692",
      "unicode_decimal": 59026
    },
    {
      "icon_id": "24899559",
      "name": "contact",
      "font_class": "contact",
      "unicode": "e693",
      "unicode_decimal": 59027
    },
    {
      "icon_id": "24899560",
      "name": "chatbubble-filled",
      "font_class": "chatbubble-filled",
      "unicode": "e694",
      "unicode_decimal": 59028
    },
    {
      "icon_id": "24899561",
      "name": "contact-filled",
      "font_class": "contact-filled",
      "unicode": "e695",
      "unicode_decimal": 59029
    },
    {
      "icon_id": "24899562",
      "name": "chatboxes",
      "font_class": "chatboxes",
      "unicode": "e696",
      "unicode_decimal": 59030
    },
    {
      "icon_id": "24899563",
      "name": "chatbubble",
      "font_class": "chatbubble",
      "unicode": "e697",
      "unicode_decimal": 59031
    },
    {
      "icon_id": "24881290",
      "name": "upload-filled",
      "font_class": "upload-filled",
      "unicode": "e68e",
      "unicode_decimal": 59022
    },
    {
      "icon_id": "24881292",
      "name": "upload",
      "font_class": "upload",
      "unicode": "e690",
      "unicode_decimal": 59024
    },
    {
      "icon_id": "24881293",
      "name": "weixin",
      "font_class": "weixin",
      "unicode": "e691",
      "unicode_decimal": 59025
    },
    {
      "icon_id": "24881274",
      "name": "compose",
      "font_class": "compose",
      "unicode": "e67f",
      "unicode_decimal": 59007
    },
    {
      "icon_id": "24881275",
      "name": "qq",
      "font_class": "qq",
      "unicode": "e680",
      "unicode_decimal": 59008
    },
    {
      "icon_id": "24881276",
      "name": "download-filled",
      "font_class": "download-filled",
      "unicode": "e681",
      "unicode_decimal": 59009
    },
    {
      "icon_id": "24881277",
      "name": "pengyouquan",
      "font_class": "pyq",
      "unicode": "e682",
      "unicode_decimal": 59010
    },
    {
      "icon_id": "24881279",
      "name": "sound",
      "font_class": "sound",
      "unicode": "e684",
      "unicode_decimal": 59012
    },
    {
      "icon_id": "24881280",
      "name": "trash-filled",
      "font_class": "trash-filled",
      "unicode": "e685",
      "unicode_decimal": 59013
    },
    {
      "icon_id": "24881281",
      "name": "sound-filled",
      "font_class": "sound-filled",
      "unicode": "e686",
      "unicode_decimal": 59014
    },
    {
      "icon_id": "24881282",
      "name": "trash",
      "font_class": "trash",
      "unicode": "e687",
      "unicode_decimal": 59015
    },
    {
      "icon_id": "24881284",
      "name": "videocam-filled",
      "font_class": "videocam-filled",
      "unicode": "e689",
      "unicode_decimal": 59017
    },
    {
      "icon_id": "24881285",
      "name": "spinner-cycle",
      "font_class": "spinner-cycle",
      "unicode": "e68a",
      "unicode_decimal": 59018
    },
    {
      "icon_id": "24881286",
      "name": "weibo",
      "font_class": "weibo",
      "unicode": "e68b",
      "unicode_decimal": 59019
    },
    {
      "icon_id": "24881288",
      "name": "videocam",
      "font_class": "videocam",
      "unicode": "e68c",
      "unicode_decimal": 59020
    },
    {
      "icon_id": "24881289",
      "name": "download",
      "font_class": "download",
      "unicode": "e68d",
      "unicode_decimal": 59021
    },
    {
      "icon_id": "24879601",
      "name": "help",
      "font_class": "help",
      "unicode": "e679",
      "unicode_decimal": 59001
    },
    {
      "icon_id": "24879602",
      "name": "navigate-filled",
      "font_class": "navigate-filled",
      "unicode": "e67a",
      "unicode_decimal": 59002
    },
    {
      "icon_id": "24879603",
      "name": "plusempty",
      "font_class": "plusempty",
      "unicode": "e67b",
      "unicode_decimal": 59003
    },
    {
      "icon_id": "24879604",
      "name": "smallcircle",
      "font_class": "smallcircle",
      "unicode": "e67c",
      "unicode_decimal": 59004
    },
    {
      "icon_id": "24879605",
      "name": "minus-filled",
      "font_class": "minus-filled",
      "unicode": "e67d",
      "unicode_decimal": 59005
    },
    {
      "icon_id": "24879606",
      "name": "micoff",
      "font_class": "micoff",
      "unicode": "e67e",
      "unicode_decimal": 59006
    },
    {
      "icon_id": "24879588",
      "name": "closeempty",
      "font_class": "closeempty",
      "unicode": "e66c",
      "unicode_decimal": 58988
    },
    {
      "icon_id": "24879589",
      "name": "clear",
      "font_class": "clear",
      "unicode": "e66d",
      "unicode_decimal": 58989
    },
    {
      "icon_id": "24879590",
      "name": "navigate",
      "font_class": "navigate",
      "unicode": "e66e",
      "unicode_decimal": 58990
    },
    {
      "icon_id": "24879591",
      "name": "minus",
      "font_class": "minus",
      "unicode": "e66f",
      "unicode_decimal": 58991
    },
    {
      "icon_id": "24879592",
      "name": "image",
      "font_class": "image",
      "unicode": "e670",
      "unicode_decimal": 58992
    },
    {
      "icon_id": "24879593",
      "name": "mic",
      "font_class": "mic",
      "unicode": "e671",
      "unicode_decimal": 58993
    },
    {
      "icon_id": "24879594",
      "name": "paperplane",
      "font_class": "paperplane",
      "unicode": "e672",
      "unicode_decimal": 58994
    },
    {
      "icon_id": "24879595",
      "name": "close",
      "font_class": "close",
      "unicode": "e673",
      "unicode_decimal": 58995
    },
    {
      "icon_id": "24879596",
      "name": "help-filled",
      "font_class": "help-filled",
      "unicode": "e674",
      "unicode_decimal": 58996
    },
    {
      "icon_id": "24879597",
      "name": "plus-filled",
      "font_class": "paperplane-filled",
      "unicode": "e675",
      "unicode_decimal": 58997
    },
    {
      "icon_id": "24879598",
      "name": "plus",
      "font_class": "plus",
      "unicode": "e676",
      "unicode_decimal": 58998
    },
    {
      "icon_id": "24879599",
      "name": "mic-filled",
      "font_class": "mic-filled",
      "unicode": "e677",
      "unicode_decimal": 58999
    },
    {
      "icon_id": "24879600",
      "name": "image-filled",
      "font_class": "image-filled",
      "unicode": "e678",
      "unicode_decimal": 59e3
    },
    {
      "icon_id": "24855900",
      "name": "locked-filled",
      "font_class": "locked-filled",
      "unicode": "e668",
      "unicode_decimal": 58984
    },
    {
      "icon_id": "24855901",
      "name": "info",
      "font_class": "info",
      "unicode": "e669",
      "unicode_decimal": 58985
    },
    {
      "icon_id": "24855903",
      "name": "locked",
      "font_class": "locked",
      "unicode": "e66b",
      "unicode_decimal": 58987
    },
    {
      "icon_id": "24855884",
      "name": "camera-filled",
      "font_class": "camera-filled",
      "unicode": "e658",
      "unicode_decimal": 58968
    },
    {
      "icon_id": "24855885",
      "name": "chat-filled",
      "font_class": "chat-filled",
      "unicode": "e659",
      "unicode_decimal": 58969
    },
    {
      "icon_id": "24855886",
      "name": "camera",
      "font_class": "camera",
      "unicode": "e65a",
      "unicode_decimal": 58970
    },
    {
      "icon_id": "24855887",
      "name": "circle",
      "font_class": "circle",
      "unicode": "e65b",
      "unicode_decimal": 58971
    },
    {
      "icon_id": "24855888",
      "name": "checkmarkempty",
      "font_class": "checkmarkempty",
      "unicode": "e65c",
      "unicode_decimal": 58972
    },
    {
      "icon_id": "24855889",
      "name": "chat",
      "font_class": "chat",
      "unicode": "e65d",
      "unicode_decimal": 58973
    },
    {
      "icon_id": "24855890",
      "name": "circle-filled",
      "font_class": "circle-filled",
      "unicode": "e65e",
      "unicode_decimal": 58974
    },
    {
      "icon_id": "24855891",
      "name": "flag",
      "font_class": "flag",
      "unicode": "e65f",
      "unicode_decimal": 58975
    },
    {
      "icon_id": "24855892",
      "name": "flag-filled",
      "font_class": "flag-filled",
      "unicode": "e660",
      "unicode_decimal": 58976
    },
    {
      "icon_id": "24855893",
      "name": "gear-filled",
      "font_class": "gear-filled",
      "unicode": "e661",
      "unicode_decimal": 58977
    },
    {
      "icon_id": "24855894",
      "name": "home",
      "font_class": "home",
      "unicode": "e662",
      "unicode_decimal": 58978
    },
    {
      "icon_id": "24855895",
      "name": "home-filled",
      "font_class": "home-filled",
      "unicode": "e663",
      "unicode_decimal": 58979
    },
    {
      "icon_id": "24855896",
      "name": "gear",
      "font_class": "gear",
      "unicode": "e664",
      "unicode_decimal": 58980
    },
    {
      "icon_id": "24855897",
      "name": "smallcircle-filled",
      "font_class": "smallcircle-filled",
      "unicode": "e665",
      "unicode_decimal": 58981
    },
    {
      "icon_id": "24855898",
      "name": "map-filled",
      "font_class": "map-filled",
      "unicode": "e666",
      "unicode_decimal": 58982
    },
    {
      "icon_id": "24855899",
      "name": "map",
      "font_class": "map",
      "unicode": "e667",
      "unicode_decimal": 58983
    },
    {
      "icon_id": "24855825",
      "name": "refresh-filled",
      "font_class": "refresh-filled",
      "unicode": "e656",
      "unicode_decimal": 58966
    },
    {
      "icon_id": "24855826",
      "name": "refresh",
      "font_class": "refresh",
      "unicode": "e657",
      "unicode_decimal": 58967
    },
    {
      "icon_id": "24855808",
      "name": "cloud-upload",
      "font_class": "cloud-upload",
      "unicode": "e645",
      "unicode_decimal": 58949
    },
    {
      "icon_id": "24855809",
      "name": "cloud-download-filled",
      "font_class": "cloud-download-filled",
      "unicode": "e646",
      "unicode_decimal": 58950
    },
    {
      "icon_id": "24855810",
      "name": "cloud-download",
      "font_class": "cloud-download",
      "unicode": "e647",
      "unicode_decimal": 58951
    },
    {
      "icon_id": "24855811",
      "name": "cloud-upload-filled",
      "font_class": "cloud-upload-filled",
      "unicode": "e648",
      "unicode_decimal": 58952
    },
    {
      "icon_id": "24855813",
      "name": "redo",
      "font_class": "redo",
      "unicode": "e64a",
      "unicode_decimal": 58954
    },
    {
      "icon_id": "24855814",
      "name": "images-filled",
      "font_class": "images-filled",
      "unicode": "e64b",
      "unicode_decimal": 58955
    },
    {
      "icon_id": "24855815",
      "name": "undo-filled",
      "font_class": "undo-filled",
      "unicode": "e64c",
      "unicode_decimal": 58956
    },
    {
      "icon_id": "24855816",
      "name": "more",
      "font_class": "more",
      "unicode": "e64d",
      "unicode_decimal": 58957
    },
    {
      "icon_id": "24855817",
      "name": "more-filled",
      "font_class": "more-filled",
      "unicode": "e64e",
      "unicode_decimal": 58958
    },
    {
      "icon_id": "24855818",
      "name": "undo",
      "font_class": "undo",
      "unicode": "e64f",
      "unicode_decimal": 58959
    },
    {
      "icon_id": "24855819",
      "name": "images",
      "font_class": "images",
      "unicode": "e650",
      "unicode_decimal": 58960
    },
    {
      "icon_id": "24855821",
      "name": "paperclip",
      "font_class": "paperclip",
      "unicode": "e652",
      "unicode_decimal": 58962
    },
    {
      "icon_id": "24855822",
      "name": "settings",
      "font_class": "settings",
      "unicode": "e653",
      "unicode_decimal": 58963
    },
    {
      "icon_id": "24855823",
      "name": "search",
      "font_class": "search",
      "unicode": "e654",
      "unicode_decimal": 58964
    },
    {
      "icon_id": "24855824",
      "name": "redo-filled",
      "font_class": "redo-filled",
      "unicode": "e655",
      "unicode_decimal": 58965
    },
    {
      "icon_id": "24841702",
      "name": "list",
      "font_class": "list",
      "unicode": "e644",
      "unicode_decimal": 58948
    },
    {
      "icon_id": "24841489",
      "name": "mail-open-filled",
      "font_class": "mail-open-filled",
      "unicode": "e63a",
      "unicode_decimal": 58938
    },
    {
      "icon_id": "24841491",
      "name": "hand-thumbsdown-filled",
      "font_class": "hand-down-filled",
      "unicode": "e63c",
      "unicode_decimal": 58940
    },
    {
      "icon_id": "24841492",
      "name": "hand-thumbsdown",
      "font_class": "hand-down",
      "unicode": "e63d",
      "unicode_decimal": 58941
    },
    {
      "icon_id": "24841493",
      "name": "hand-thumbsup-filled",
      "font_class": "hand-up-filled",
      "unicode": "e63e",
      "unicode_decimal": 58942
    },
    {
      "icon_id": "24841494",
      "name": "hand-thumbsup",
      "font_class": "hand-up",
      "unicode": "e63f",
      "unicode_decimal": 58943
    },
    {
      "icon_id": "24841496",
      "name": "heart-filled",
      "font_class": "heart-filled",
      "unicode": "e641",
      "unicode_decimal": 58945
    },
    {
      "icon_id": "24841498",
      "name": "mail-open",
      "font_class": "mail-open",
      "unicode": "e643",
      "unicode_decimal": 58947
    },
    {
      "icon_id": "24841488",
      "name": "heart",
      "font_class": "heart",
      "unicode": "e639",
      "unicode_decimal": 58937
    },
    {
      "icon_id": "24839963",
      "name": "loop",
      "font_class": "loop",
      "unicode": "e633",
      "unicode_decimal": 58931
    },
    {
      "icon_id": "24839866",
      "name": "pulldown",
      "font_class": "pulldown",
      "unicode": "e632",
      "unicode_decimal": 58930
    },
    {
      "icon_id": "24813798",
      "name": "scan",
      "font_class": "scan",
      "unicode": "e62a",
      "unicode_decimal": 58922
    },
    {
      "icon_id": "24813786",
      "name": "bars",
      "font_class": "bars",
      "unicode": "e627",
      "unicode_decimal": 58919
    },
    {
      "icon_id": "24813788",
      "name": "cart-filled",
      "font_class": "cart-filled",
      "unicode": "e629",
      "unicode_decimal": 58921
    },
    {
      "icon_id": "24813790",
      "name": "checkbox",
      "font_class": "checkbox",
      "unicode": "e62b",
      "unicode_decimal": 58923
    },
    {
      "icon_id": "24813791",
      "name": "checkbox-filled",
      "font_class": "checkbox-filled",
      "unicode": "e62c",
      "unicode_decimal": 58924
    },
    {
      "icon_id": "24813794",
      "name": "shop",
      "font_class": "shop",
      "unicode": "e62f",
      "unicode_decimal": 58927
    },
    {
      "icon_id": "24813795",
      "name": "headphones",
      "font_class": "headphones",
      "unicode": "e630",
      "unicode_decimal": 58928
    },
    {
      "icon_id": "24813796",
      "name": "cart",
      "font_class": "cart",
      "unicode": "e631",
      "unicode_decimal": 58929
    }
  ]
};
var iconUrl = "/uni_modules/uni-icons/components/uni-icons/uniicons.ttf";
var _style_0$4 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const getVal$1 = (val) => {
  const reg = /^[0-9]*$/g;
  return typeof val === "number" || reg.test(val) ? val + "px" : val;
};
var domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "uniicons",
  "src": "url('" + iconUrl + "')"
});
const _sfc_main$4 = {
  name: "UniIcons",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: [Number, String],
      default: 16
    },
    customPrefix: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      icons: icons.glyphs
    };
  },
  computed: {
    unicode() {
      let code = this.icons.find((v) => v.font_class === this.type);
      if (code) {
        return unescape(`%u${code.unicode}`);
      }
      return "";
    },
    iconSize() {
      return getVal$1(this.size);
    }
  },
  methods: {
    _onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("u-text", {
    style: normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
    class: "uni-icons",
    onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
  }, toDisplayString($options.unicode), 5);
}
var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["styles", [_style_0$4]], ["__file", "D:/DEMO/myTemplate/uniapp-template-vue3-vue2/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
Object.freeze({});
Object.freeze([]);
const isString = (val) => typeof val === "string";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const ON_SHOW = "onShow";
function isDebugMode() {
  return typeof __channelId__ === "string" && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (toRawType(p)) {
    case "Function":
      return "function() { [native code] }";
    default:
      return p;
  }
}
function normalizeLog(type, filename, args) {
  if (isDebugMode()) {
    args.push(filename.replace("at ", "uni-app:///"));
    return console[type].apply(console, args);
  }
  const msgs = args.map(function(v) {
    const type2 = toTypeString(v).toLowerCase();
    if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
      try {
        v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
      } catch (e) {
        v = type2;
      }
    } else {
      if (v === null) {
        v = "---NULL---";
      } else if (v === void 0) {
        v = "---UNDEFINED---";
      } else {
        const vType = toRawType(v).toUpperCase();
        if (vType === "NUMBER" || vType === "BOOLEAN") {
          v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  return msgs.join("---COMMA---") + " " + filename;
}
function formatAppLog(type, filename, ...args) {
  const res = normalizeLog(type, filename, args);
  res && console[type](res);
}
function resolveEasycom(component, easycom) {
  return isString(component) ? easycom : component;
}
const createHook = (lifecycle) => (hook, target = getCurrentInstance()) => {
  !isInSSRComponentSetup && injectHook(lifecycle, hook, target);
};
const onShow = /* @__PURE__ */ createHook(ON_SHOW);
var _style_0$3 = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$3 = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: 20
    };
  },
  mounted() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    style: normalizeStyle({ height: $data.statusBarHeight }),
    class: "uni-status-bar"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["styles", [_style_0$3]], ["__file", "D:/DEMO/myTemplate/uniapp-template-vue3-vue2/components/uni-components/uni-nav-bar/uni-status-bar.vue"]]);
var _style_0$2 = { "uni-nav-bar-text": { "": { "fontSize": "34rpx" } }, "uni-nav-bar-right-text": { "": { "fontSize": 12 } }, "uni-navbar__content": { "": { "position": "relative", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-navbar-btn-text": { "": { "flexDirection": "column", "justifyContent": "flex-start", "alignItems": "center", "lineHeight": 12 } }, "uni-navbar__header": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "flexDirection": "row", "height": 44, "fontSize": 12 } }, "uni-navbar__header-btns": { "": { "flexWrap": "nowrap", "flexDirection": "row", "width": "120rpx", "justifyContent": "center", "alignItems": "center" } }, "uni-navbar__header-btns-left": { "": { "width": "120rpx", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-navbar__header-btns-right": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-navbar__header-container": { "": { "flex": 1, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden" } }, "uni-navbar__header-container-inner": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": 12, "overflow": "hidden" } }, "uni-navbar__placeholder-view": { "": { "height": 44 } }, "uni-navbar--fixed": { "": { "position": "fixed", "zIndex": 998, "left": 0, "right": 0 } }, "uni-navbar--shadow": { "": { "boxShadow": "0 1px 6px #ccc" } }, "uni-navbar--border": { "": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#eeeeee" } }, "uni-ellipsis-1": { "": { "overflow": "hidden", "lines": 1, "textOverflow": "ellipsis" } } };
const getVal = (val) => typeof val === "number" ? val + "px" : val;
const _sfc_main$2 = {
  name: "UniNavBar",
  components: {
    statusBar
  },
  emits: ["clickLeft", "clickRight", "clickTitle"],
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    statusBarPlaceholder: {
      type: Boolean,
      default: true
    },
    navBarPlaceholder: {
      type: Boolean,
      default: true
    },
    navBar: {
      type: [Boolean, String],
      default: false
    },
    statusBar: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    titleStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    fixed: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    shadow: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Boolean, String],
      default: true
    },
    height: {
      type: [Number, String],
      default: 44
    },
    leftWidth: {
      type: [Number, String],
      default: 60
    },
    rightWidth: {
      type: [Number, String],
      default: 60
    },
    stat: {
      type: [Boolean, String],
      default: ""
    }
  },
  computed: {
    themeBgColor() {
      if (this.dark) {
        if (this.backgroundColor) {
          return this.backgroundColor;
        } else {
          return this.dark ? "#333" : "#FFF";
        }
      }
      return this.backgroundColor || "#FFF";
    },
    themeColor() {
      if (this.dark) {
        if (this.color) {
          return this.color;
        } else {
          return this.dark ? "#fff" : "#333";
        }
      }
      return this.color || "#333";
    },
    navbarHeight() {
      return getVal(this.height);
    },
    leftIconWidth() {
      return getVal(this.leftWidth);
    },
    rightIconWidth() {
      return getVal(this.rightWidth);
    }
  },
  mounted() {
    if (uni.report && this.stat && this.title !== "") {
      uni.report("title", this.title);
    }
  },
  methods: {
    onClickLeft() {
      this.$emit("clickLeft");
    },
    onClickRight() {
      this.$emit("clickRight");
    },
    onClickTitle() {
      this.$emit("clickTitle");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_status_bar = resolveComponent("status-bar");
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0$1);
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
  }, [
    createElementVNode("view", {
      class: normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
      style: normalizeStyle({ "background-color": $options.themeBgColor })
    }, [
      $props.statusBar ? (openBlock(), createBlock(_component_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
      $props.navBar ? (openBlock(), createElementBlock("view", {
        key: 1,
        style: normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
        class: "uni-navbar__header"
      }, [
        createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
          class: "uni-navbar__header-btns uni-navbar__header-btns-left",
          style: normalizeStyle({ width: $options.leftIconWidth })
        }, [
          renderSlot(_ctx.$slots, "left", {}, () => [
            $props.leftIcon.length > 0 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-navbar__content_view"
            }, [
              createVNode(_component_uni_icons, {
                color: $options.themeColor,
                type: $props.leftIcon,
                size: "20"
              }, null, 8, ["color", "type"])
            ])) : createCommentVNode("v-if", true),
            $props.leftText.length ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
            }, [
              createElementVNode("u-text", {
                style: normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
              }, toDisplayString($props.leftText), 5)
            ], 2)) : createCommentVNode("v-if", true)
          ])
        ], 4),
        createElementVNode("view", {
          class: "uni-navbar__header-container",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            $props.title.length > 0 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-navbar__header-container-inner"
            }, [
              createElementVNode("u-text", {
                class: "uni-nav-bar-text uni-ellipsis-1",
                style: normalizeStyle(__spreadValues({ color: $options.themeColor }, $props.titleStyle))
              }, toDisplayString($props.title), 5)
            ])) : createCommentVNode("v-if", true)
          ])
        ]),
        createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
          class: "uni-navbar__header-btns uni-navbar__header-btns-right",
          style: normalizeStyle({ width: $options.rightIconWidth })
        }, [
          renderSlot(_ctx.$slots, "right", {}, () => [
            $props.rightIcon.length ? (openBlock(), createElementBlock("view", { key: 0 }, [
              createVNode(_component_uni_icons, {
                color: $options.themeColor,
                type: $props.rightIcon,
                size: "22"
              }, null, 8, ["color", "type"])
            ])) : createCommentVNode("v-if", true),
            $props.rightText.length && !$props.rightIcon.length ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "uni-navbar-btn-text"
            }, [
              createElementVNode("u-text", {
                class: "uni-nav-bar-right-text",
                style: normalizeStyle({ color: $options.themeColor })
              }, toDisplayString($props.rightText), 5)
            ])) : createCommentVNode("v-if", true)
          ])
        ], 4)
      ], 4)) : createCommentVNode("v-if", true)
    ], 6),
    $props.fixed ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-navbar__placeholder"
    }, [
      $props.statusBarPlaceholder ? (openBlock(), createBlock(_component_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
      $props.navBarPlaceholder ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-navbar__placeholder-view",
        style: normalizeStyle({ height: $options.navbarHeight })
      }, null, 4)) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true)
  ], 2);
}
var xUniNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["styles", [_style_0$2]], ["__file", "D:/DEMO/myTemplate/uniapp-template-vue3-vue2/components/uni-components/uni-nav-bar/uni-nav-bar.vue"]]);
var _style_0$1 = { "navbar-fixed": { "": { "position": "fixed", "left": 0, "right": 0 } }, "navbar-title": { "": { "display": "flex", "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#FF0000" } }, "navbar-title-text": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#FF0000" } } };
const _sfc_main$1 = {
  name: "x-navbar",
  components: {
    xUniNavBar
  },
  props: {
    placeholder: {
      type: Boolean,
      default: false
    },
    statusBarShow: {
      type: Boolean,
      default: true
    },
    statusBarColor: {
      type: String,
      default: ""
    },
    navBarShow: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "#FFF"
    },
    title: {
      type: String,
      default: "\u6807\u9898"
    },
    color: {
      type: String,
      default: "#000000"
    },
    leftIcon: {
      type: String,
      default: "left"
    },
    rightText: {
      type: String,
      default: ""
    },
    fixed: {
      type: Boolean,
      default: true
    },
    autoBack: {
      type: Boolean,
      default: true
    },
    autoTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    statusBarHeight() {
      const style = {
        "z-index": 998
      };
      style.backgroundColor = this.statusBarColor ? this.statusBarColor : this.bgColor;
      style.height = uni.getSystemInfoSync().statusBarHeight + "px";
      return style;
    },
    navBarTitleStyle() {
      const style = {
        "font-weight": "bold",
        color: this.color
      };
      return style;
    },
    backgroundColor() {
      return this.bgColor;
    },
    rightTextStyle() {
      return {
        color: this.color,
        "font-size": "24rpx"
      };
    }
  },
  watch: {
    title(a, b) {
      this.currentPageTitle = a;
      uni.setNavigationBarTitle({
        title: a
      });
    }
  },
  data() {
    return {
      currentPageTitle: this.title
    };
  },
  methods: {
    leftClick() {
      if (this.autoBack) {
        const page = getCurrentPages();
        if (page && page.length > 1) {
          uni.navigateBack({
            delta: 1
          });
        } else {
          uni.navigateBack({
            delta: 2
          });
        }
        return;
      }
      this.$emit("leftClick");
    },
    rightClick() {
      this.$emit("rightClick");
    }
  },
  mounted() {
    var _a, _b;
    if (this.autoTitle) {
      const pages = getCurrentPages();
      const page = `/${(_b = (_a = pages[pages.length - 1]) == null ? void 0 : _a.route) != null ? _b : ""}`;
      const {
        path,
        title,
        visible
      } = { "/pages/index/index": { "visible": true, "title": "uni-app", "path": "/pages/index/index" }, "/pages/second/second": { "visible": true, "title": "", "path": "/pages/second/second" }, "/pages/third/third": { "visible": true, "title": "", "path": "/pages/third/third" }, "/pages/index2/index2": { "visible": true, "title": "", "path": "/pages/index2/index2" }, "/pages/login/login": { "visible": true, "title": "", "path": "/pages/login/login" }, "/pages/maintain/maintain": { "visible": true, "title": "\u7EF4\u62A4\u4E2D", "path": "/pages/maintain/maintain" } }[page];
      this.currentPageTitle = title;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0$1);
  const _component_x_uni_nav_bar = resolveComponent("x-uni-nav-bar");
  return openBlock(), createBlock(_component_x_uni_nav_bar, {
    navBar: $props.navBarShow,
    statusBar: $props.statusBarShow,
    backgroundColor: $options.backgroundColor,
    fixed: true,
    title: $data.currentPageTitle,
    navBarPlaceholder: true,
    titleStyle: $options.navBarTitleStyle,
    statusBarPlaceholder: true,
    onClickLeft: $options.leftClick,
    onClickRight: $options.rightClick
  }, {
    left: withCtx(() => [
      renderSlot(_ctx.$slots, "left", {}, () => [
        createVNode(_component_uni_icons, {
          type: $props.leftIcon,
          size: 24,
          color: $props.color
        }, null, 8, ["type", "color"])
      ])
    ]),
    right: withCtx(() => [
      renderSlot(_ctx.$slots, "right", {}, () => [
        createElementVNode("view", {
          style: normalizeStyle([$options.rightTextStyle])
        }, [
          createElementVNode("u-text", null, toDisplayString($props.rightText), 1)
        ], 4)
      ])
    ]),
    _: 3
  }, 8, ["navBar", "statusBar", "backgroundColor", "title", "titleStyle", "onClickLeft", "onClickRight"]);
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["styles", [_style_0$1]], ["__file", "D:/DEMO/myTemplate/uniapp-template-vue3-vue2/components/x-navbar/x-navbar.vue"]]);
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function deepMerge() {
  let result = {};
  function assignValue(val, key) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === "object") {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      forEach(val, function parseValue(v) {
        if (isDate(v)) {
          v = v.toISOString();
        } else if (isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  const status = response.statusCode;
  if (status && (!validateStatus2 || validateStatus2(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}
const mergeKeys$1 = (keys, config2) => {
  let config = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};
var adapter = (config) => {
  return new Promise((resolve, reject) => {
    let fullPath = buildURL(buildFullPath(config.baseURL, config.url), config.params);
    const _config = {
      url: fullPath,
      header: config.header,
      complete: (response) => {
        config.fullPath = fullPath;
        response.config = config;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      let otherConfig = {
        filePath: config.filePath,
        name: config.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile(__spreadValues(__spreadValues(__spreadValues({}, _config), otherConfig), mergeKeys$1(optionalKeys, config)));
    } else if (config.method === "DOWNLOAD") {
      if (!isUndefined(config["timeout"])) {
        _config["timeout"] = config["timeout"];
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request(__spreadValues(__spreadValues({}, _config), mergeKeys$1(optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });
};
var dispatchRequest = (config) => {
  return adapter(config);
};
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager.prototype.forEach = function forEach2(fn) {
  this.handlers.forEach((h) => {
    if (h !== null) {
      fn(h);
    }
  });
};
const mergeKeys = (keys, globalsConfig, config2) => {
  let config = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!isUndefined(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
var mergeConfig = (globalsConfig, config2 = {}) => {
  const method = config2.method || globalsConfig.method || "GET";
  let config = {
    baseURL: globalsConfig.baseURL || "",
    method,
    url: config2.url || "",
    params: config2.params || {},
    custom: __spreadValues(__spreadValues({}, globalsConfig.custom || {}), config2.custom || {}),
    header: deepMerge(globalsConfig.header || {}, config2.header || {})
  };
  const defaultToConfig2Keys = ["getTask", "validateStatus"];
  config = __spreadValues(__spreadValues({}, config), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));
  if (method === "DOWNLOAD") {
    if (!isUndefined(config2.timeout)) {
      config["timeout"] = config2["timeout"];
    } else if (!isUndefined(globalsConfig.timeout)) {
      config["timeout"] = globalsConfig["timeout"];
    }
  } else if (method === "UPLOAD") {
    delete config.header["content-type"];
    delete config.header["Content-Type"];
    const uploadKeys = [
      "files",
      "filePath",
      "name",
      "timeout",
      "formData"
    ];
    uploadKeys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config[prop] = config2[prop];
      }
    });
    if (isUndefined(config.timeout) && !isUndefined(globalsConfig.timeout)) {
      config["timeout"] = globalsConfig["timeout"];
    }
  } else {
    const defaultsKeys = [
      "data",
      "timeout",
      "dataType",
      "responseType",
      "sslVerify",
      "firstIpv4"
    ];
    config = __spreadValues(__spreadValues({}, config), mergeKeys(defaultsKeys, globalsConfig, config2));
  }
  return config;
};
var defaults = {
  baseURL: "",
  header: {},
  method: "GET",
  dataType: "json",
  responseType: "text",
  custom: {},
  timeout: 6e4,
  sslVerify: true,
  firstIpv4: false,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
var clone = function() {
  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }
  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    nativeMap = function() {
    };
  }
  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function() {
    };
  }
  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function() {
    };
  }
  function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === "object") {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    var allParents = [];
    var allChildren = [];
    var useBuffer = typeof Buffer != "undefined";
    if (typeof circular == "undefined")
      circular = true;
    if (typeof depth == "undefined")
      depth = Infinity;
    function _clone(parent2, depth2) {
      if (parent2 === null)
        return null;
      if (depth2 === 0)
        return parent2;
      var child;
      var proto;
      if (typeof parent2 != "object") {
        return parent2;
      }
      if (_instanceof(parent2, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent2, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent2, nativePromise)) {
        child = new nativePromise(function(resolve, reject) {
          parent2.then(function(value) {
            resolve(_clone(value, depth2 - 1));
          }, function(err) {
            reject(_clone(err, depth2 - 1));
          });
        });
      } else if (clone2.__isArray(parent2)) {
        child = [];
      } else if (clone2.__isRegExp(parent2)) {
        child = new RegExp(parent2.source, __getRegExpFlags(parent2));
        if (parent2.lastIndex)
          child.lastIndex = parent2.lastIndex;
      } else if (clone2.__isDate(parent2)) {
        child = new Date(parent2.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent2)) {
        if (Buffer.from) {
          child = Buffer.from(parent2);
        } else {
          child = new Buffer(parent2.length);
          parent2.copy(child);
        }
        return child;
      } else if (_instanceof(parent2, Error)) {
        child = Object.create(parent2);
      } else {
        if (typeof prototype == "undefined") {
          proto = Object.getPrototypeOf(parent2);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }
      if (circular) {
        var index2 = allParents.indexOf(parent2);
        if (index2 != -1) {
          return allChildren[index2];
        }
        allParents.push(parent2);
        allChildren.push(child);
      }
      if (_instanceof(parent2, nativeMap)) {
        parent2.forEach(function(value, key) {
          var keyChild = _clone(key, depth2 - 1);
          var valueChild = _clone(value, depth2 - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent2, nativeSet)) {
        parent2.forEach(function(value) {
          var entryChild = _clone(value, depth2 - 1);
          child.add(entryChild);
        });
      }
      for (var i in parent2) {
        var attrs = Object.getOwnPropertyDescriptor(parent2, i);
        if (attrs) {
          child[i] = _clone(parent2[i], depth2 - 1);
        }
        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
          if (objProperty.set === "undefined") {
            continue;
          }
          child[i] = _clone(parent2[i], depth2 - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            continue;
          } else if (e instanceof ReferenceError) {
            continue;
          }
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent2);
        for (var i = 0; i < symbols.length; i++) {
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent2[symbol], depth2 - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }
      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent2);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }
      return child;
    }
    return _clone(parent, depth);
  }
  clone2.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
      return null;
    var c = function() {
    };
    c.prototype = parent;
    return new c();
  };
  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone2.__objToStr = __objToStr;
  function __isDate(o) {
    return typeof o === "object" && __objToStr(o) === "[object Date]";
  }
  clone2.__isDate = __isDate;
  function __isArray(o) {
    return typeof o === "object" && __objToStr(o) === "[object Array]";
  }
  clone2.__isArray = __isArray;
  function __isRegExp(o) {
    return typeof o === "object" && __objToStr(o) === "[object RegExp]";
  }
  clone2.__isRegExp = __isRegExp;
  function __getRegExpFlags(re) {
    var flags = "";
    if (re.global)
      flags += "g";
    if (re.ignoreCase)
      flags += "i";
    if (re.multiline)
      flags += "m";
    return flags;
  }
  clone2.__getRegExpFlags = __getRegExpFlags;
  return clone2;
}();
class Request {
  constructor(arg = {}) {
    if (!isPlainObject(arg)) {
      arg = {};
      formatAppLog("warn", "at node_modules/luch-request/src/lib/core/Request.js:40", "\u8BBE\u7F6E\u5168\u5C40\u53C2\u6570\u5FC5\u987B\u63A5\u6536\u4E00\u4E2AObject");
    }
    this.config = clone(__spreadValues(__spreadValues({}, defaults), arg));
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  setConfig(f) {
    this.config = f(this.config);
  }
  middleware(config) {
    config = mergeConfig(this.config, config);
    let chain = [dispatchRequest, void 0];
    let promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  request(config = {}) {
    return this.middleware(config);
  }
  get(url, options = {}) {
    return this.middleware(__spreadValues({
      url,
      method: "GET"
    }, options));
  }
  post(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "POST"
    }, options));
  }
  put(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "PUT"
    }, options));
  }
  delete(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "DELETE"
    }, options));
  }
  options(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "OPTIONS"
    }, options));
  }
  upload(url, config = {}) {
    config.url = url;
    config.method = "UPLOAD";
    return this.middleware(config);
  }
  download(url, config = {}) {
    config.url = url;
    config.method = "DOWNLOAD";
    return this.middleware(config);
  }
}
const CONFIG = {
  dev: {
    baseUrl: "https://cloud.xyzgy.xyz",
    webUrl: ""
  },
  test: {},
  production: {}
};
const REQUEST_TIMEOUT = 6e4;
const VUE_APP_CONFIG = CONFIG.dev;
uni.getSystemInfoSync().platform;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, g = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return t2 === void 0;
    } }, v = "en", D = {};
    D[v] = M;
    var p = function(t2) {
      return t2 instanceof _;
    }, S = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return v;
      if (typeof e2 == "string") {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (v = i2), i2 || !r2 && v;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = typeof e2 == "object" ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, O = g;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (e2 === null)
            return new Date(NaN);
          if (O.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if (typeof e2 == "string" && !/Z$/i.test(e2)) {
            var r2 = e2.match(l);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === $);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), $2 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, l2 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
        switch (h2) {
          case c:
            return r2 ? $2(1, 0) : $2(31, 11);
          case f:
            return r2 ? $2(1, M3) : $2(0, M3 + 1);
          case o:
            var v2 = this.$locale().weekStart || 0, D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
            return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return l2(g2 + "Hours", 0);
          case u:
            return l2(g2 + "Minutes", 1);
          case s:
            return l2(g2 + "Seconds", 2);
          case i:
            return l2(g2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $2 && this.$d[$2](l2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, h2) {
        var d2, $2 = this;
        r2 = Number(r2);
        var l2 = O.p(h2), y2 = function(t2) {
          var e2 = w($2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
        };
        if (l2 === f)
          return this.set(f, this.$M + r2);
        if (l2 === c)
          return this.set(c, this.$y + r2);
        if (l2 === a)
          return y2(1);
        if (l2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || $;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, c2 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d2 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || l2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, $2) {
        var l2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, v2 = O.m(this, M3);
        return v2 = (l2 = {}, l2[c] = v2 / 12, l2[f] = v2, l2[h] = v2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? v2 : O.a(v2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), T = _.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
      T[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = D[v], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
const queryParams = (data = {}, isPrefix = true, arrayFormat = "brackets") => {
  const prefix = isPrefix ? "?" : "";
  const _result = [];
  if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
    arrayFormat = "brackets";
  for (const key in data) {
    const value = data[key];
    if (["", void 0, null].indexOf(value) >= 0) {
      continue;
    }
    if (value.constructor === Array) {
      switch (arrayFormat) {
        case "indices":
          for (let i = 0; i < value.length; i++) {
            _result.push(`${key}[${i}]=${value[i]}`);
          }
          break;
        case "brackets":
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
          break;
        case "repeat":
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`);
          });
          break;
        case "comma":
          let commaStr = "";
          value.forEach((_value) => {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(`${key}=${commaStr}`);
          break;
        default:
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`);
          });
      }
    } else {
      _result.push(`${key}=${value}`);
    }
  }
  return _result.length ? prefix + _result.join("&") : "";
};
const pending = /* @__PURE__ */ new Map();
const addPending = (url, task) => {
  if (pending.has(url)) {
    delPending(url);
  } else {
    pending.set(url, task);
  }
};
const delPending = (url) => {
  if (pending.has(url)) {
    const controller = pending.get(url);
    controller.abort();
    pending.delete(url);
  }
};
const getUrl = (options) => {
  const {
    url = "",
    method = "",
    data = {},
    params = {}
  } = options;
  const str = queryParams(__spreadValues(__spreadValues({}, data), params));
  return `${method}${url}${str}`;
};
const reqMethods = [
  ["post", "delete", "head", "put", "connect", "options", "trace"],
  ["get", "upload"]
];
const http = new Request({
  baseURL: VUE_APP_CONFIG.baseUrl,
  timeout: REQUEST_TIMEOUT
});
http.interceptors.request.use((config) => {
  const token = uni.getStorageSync("token");
  config.header = __spreadProps(__spreadValues({}, config.header), {
    token: token ? token : "token"
  });
  config.getTask = (task, options) => {
    addPending(getUrl(options), task);
  };
  return config;
}, (config) => {
  return Promise.reject(config);
});
http.interceptors.response.use((response) => {
  delPending(getUrl(response.config));
  return response;
}, (response) => {
  const {
    statusCode,
    data = {},
    errMsg
  } = response;
  if (errMsg === "request:fail timeout") {
    response.data = {
      msg: "\u8BF7\u6C42\u8D85\u65F6"
    };
  }
  if (errMsg === "request:fail") {
    response.data = {
      msg: "\u8BF7\u6C42\u5F02\u5E38"
    };
  }
  if (statusCode == 401) {
    uni.showToast({
      title: response.data.msg ? response.data.msg : "\u8BF7\u6C42\u5931\u8D25",
      icon: "none"
    });
    uni.reLaunch({
      url: "/pages/login/login"
    });
    uni.removeStorageSync("token");
    return false;
  }
  if (statusCode == 404) {
    response.data = {
      msg: "\u8BF7\u6C42\u4E0D\u5B58\u5728"
    };
  }
  return Promise.reject(response);
});
function baseRequest(url, method, options, args) {
  const {
    loading = false
  } = args;
  if (loading) {
    uni.showLoading({
      "title": "\u6B63\u5728\u52A0\u8F7D",
      mask: true
    });
  }
  return http[method](url, options).then((res) => {
    loading && uni.hideLoading();
    return Promise.resolve(res.data);
  }).catch((err) => {
    loading && uni.hideLoading();
    formatAppLog("warn", "at utils/request.js:123", `\u8BF7\u6C42\u5F02\u5E38`, err);
    return Promise.reject(err);
  });
}
const request = reqMethods[0].reduce((request2, method) => {
  request2[method] = (url, data = {}, config = {}) => {
    return baseRequest(url, method, data, config);
  };
  return request2;
}, {});
reqMethods[1].forEach((method) => {
  request[method] = (url, params = {}, config = {}) => {
    return baseRequest(url, method, {
      params
    }, config);
  };
});
const useMainStore = defineStore("main", {
  state: () => {
    return {
      count: 0
    };
  },
  getters: {
    zcount() {
      formatAppLog("log", "at pinia/modules/main.js:13", "xxddd", this.count);
      return this.count;
    }
  },
  actions: {
    increment() {
      this.count++;
      formatAppLog("log", "at pinia/modules/main.js:20", "increment", this.count);
    }
  }
});
const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      theme: "light",
      themeStatus: false
    };
  },
  actions: {
    initTheme() {
      this.updateTheme(uni.getStorageSync("CURRENT_APP_THEME") || "light");
    },
    updateTheme() {
      const theme = this.theme === "light" ? "dark" : "light";
      this.themeStatus = false;
      this.theme = theme;
      uni.setStorageSync("CURRENT_APP_THEME", theme);
    },
    updateThemeStatus(status = true) {
      this.themeStatus = status;
    }
  }
});
function updateTabBarStyle() {
  const themeStore = useThemeStore();
  const hasUpdateTabBarStyle = themeStore.themeStatus;
  const theme = themeStore.theme;
  if (hasUpdateTabBarStyle) {
    return;
  }
  themeStore.updateThemeStatus(true);
  uni.setTabBarStyle({ "light": { "color": "#333333", "selectedColor": "#FD2E22", "borderStyle": "white", "backgroundColor": "#FFFFFF" }, "dark": { "color": "#333333", "selectedColor": "#FD2E22", "borderStyle": "white", "backgroundColor": "#FFFFFF" }, "light-path": [{ "index": 0, "path": "/pages/index/index", "visible": true, "iconPath": "/static/c1.png", "selectedIconPath": "/static/c1.png" }, { "index": 1, "path": "/pages/second/second", "visible": true, "iconPath": "/static/c2.png", "selectedIconPath": "/static/c2.png" }, { "index": 2, "path": "/pages/third/third", "visible": true, "iconPath": "/static/c3.png", "selectedIconPath": "/static/c3.png" }], "dark-path": [{ "index": 0, "path": "/pages/index/index", "visible": true, "iconPath": "/static/c4.png", "selectedIconPath": "/static/c4.png" }, { "index": 1, "path": "/pages/second/second", "visible": true, "iconPath": "/static/c5.png", "selectedIconPath": "/static/c5.png" }, { "index": 2, "path": "/pages/third/third", "visible": true, "iconPath": "/static/c6.png", "selectedIconPath": "/static/c6.png" }], "/pages/index/index": { "visible": true, "path": "/pages/index/index", "index": 0 }, "/pages/second/second": { "visible": true, "path": "/pages/second/second", "index": 1 }, "/pages/third/third": { "visible": true, "path": "/pages/third/third", "index": 2 } }[theme]);
  const paths = { "light": { "color": "#333333", "selectedColor": "#FD2E22", "borderStyle": "white", "backgroundColor": "#FFFFFF" }, "dark": { "color": "#333333", "selectedColor": "#FD2E22", "borderStyle": "white", "backgroundColor": "#FFFFFF" }, "light-path": [{ "index": 0, "path": "/pages/index/index", "visible": true, "iconPath": "/static/c1.png", "selectedIconPath": "/static/c1.png" }, { "index": 1, "path": "/pages/second/second", "visible": true, "iconPath": "/static/c2.png", "selectedIconPath": "/static/c2.png" }, { "index": 2, "path": "/pages/third/third", "visible": true, "iconPath": "/static/c3.png", "selectedIconPath": "/static/c3.png" }], "dark-path": [{ "index": 0, "path": "/pages/index/index", "visible": true, "iconPath": "/static/c4.png", "selectedIconPath": "/static/c4.png" }, { "index": 1, "path": "/pages/second/second", "visible": true, "iconPath": "/static/c5.png", "selectedIconPath": "/static/c5.png" }, { "index": 2, "path": "/pages/third/third", "visible": true, "iconPath": "/static/c6.png", "selectedIconPath": "/static/c6.png" }], "/pages/index/index": { "visible": true, "path": "/pages/index/index", "index": 0 }, "/pages/second/second": { "visible": true, "path": "/pages/second/second", "index": 1 }, "/pages/third/third": { "visible": true, "path": "/pages/third/third", "index": 2 } }[`${theme}-path`];
  paths.forEach((item) => {
    uni.setTabBarItem(item);
  });
}
var _style_0 = {};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    onShow(() => {
      updateTabBarStyle();
    });
    const mainStore = useMainStore();
    onShow(() => {
      useThemeStore();
    });
    return (_ctx, _cache) => {
      const _component_x_navbar = resolveEasycom(resolveDynamicComponent("x-navbar"), __easycom_0);
      const _component_button = resolveComponent("button");
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createElementVNode("view", { class: "container" }, [
          createVNode(_component_x_navbar, {
            rightText: "xxx",
            bgColor: "#fff",
            statusBarColor: "#fff",
            navBarShow: true
          }),
          createElementVNode("u-video", {
            id: "myVideo",
            src: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
          }),
          createVNode(_component_button, {
            onClick: unref(mainStore).increment
          }, {
            default: withCtx(() => [
              createTextVNode("pinia")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.show = true)
          }, {
            default: withCtx(() => [
              createTextVNode("cccc" + toDisplayString(unref(mainStore).count) + " " + toDisplayString(unref(mainStore).zcount), 1)
            ]),
            _: 1
          }),
          createCommentVNode(' <x-popup :show="show">xxxxxxxxxxx</x-popup> '),
          createElementVNode("view", {
            class: "",
            style: { "height": "800px" }
          })
        ])
      ]);
    };
  }
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__file", "D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/index/index.nvue"]]);
export { index as default };
