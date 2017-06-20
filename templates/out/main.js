// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
			/******/ 			exports: {},
			/******/ 			id: moduleId,
			/******/ 			loaded: false
			/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
/************************************************************************/
/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

		var __vue_exports__, __vue_options__
		var __vue_styles__ = []

		/* styles */
		__vue_styles__.push(__webpack_require__(1)
		)

		/* script */
		__vue_exports__ = __webpack_require__(2)

		/* template */
		var __vue_template__ = __webpack_require__(3)
		__vue_options__ = __vue_exports__ = __vue_exports__ || {}
		if (
			typeof __vue_exports__.default === "object" ||
			typeof __vue_exports__.default === "function"
		) {
			__vue_options__ = __vue_exports__ = __vue_exports__.default
		}
		if (typeof __vue_options__ === "function") {
			__vue_options__ = __vue_options__.options
		}

		__vue_options__.render = __vue_template__.render
		__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
		__vue_options__._scopeId = "data-v-323fd3cc"
		__vue_options__.style = __vue_options__.style || {}
		__vue_styles__.forEach(function (module) {
			for (var name in module) {
				__vue_options__.style[name] = module[name]
			}
		})
		if (typeof __register_static_styles__ === "function") {
			__register_static_styles__(__vue_options__._scopeId, __vue_styles__)
		}

		module.exports = __vue_exports__
		module.exports.el = 'true'
		new Vue(module.exports)


		/***/ }),
	/* 1 */
	/***/ (function(module, exports) {

		module.exports = {
			"header": {
				"backgroundColor": "#ffffff",
				"width": 750,
				"height": 266
			},
			"header-pic": {
				"width": 750,
				"height": 190,
				"position": "absolute"
			},
			"header-mask": {
				"width": 750,
				"height": 190,
				"position": "absolute",
				"opacity": 0.3,
				"backgroundColor": "#000000"
			},
			"header-decor": {
				"width": 640,
				"height": 240,
				"marginLeft": 55,
				"marginTop": 30,
				"position": "absolute"
			},
			"header-title": {
				"position": "absolute",
				"width": 330,
				"marginLeft": 210,
				"marginTop": 164,
				"textAlign": "center",
				"fontSize": 36,
				"color": "#000000",
				"fontWeight": "bold",
				"lines": 1,
				"textOverflow": "ellipsis"
			},
			"cell": {
				"backgroundColor": "#ffffff"
			},
			"above": {
				"width": 750,
				"height": 272
			},
			"top-icons": {
				"width": 750,
				"height": 40,
				"flexDirection": "row"
			},
			"top-icon-text": {
				"fontSize": 20,
				"height": 30,
				"paddingLeft": 10,
				"paddingRight": 10,
				"textAlign": "center",
				"paddingTop": 4,
				"marginRight": 2,
				"fontWeight": "bold"
			},
			"top-icon-image": {
				"height": 30,
				"marginRight": 2
			},
			"item-container": {
				"width": 720,
				"flexDirection": "row"
			},
			"item-image": {
				"width": 216,
				"height": 216,
				"position": "absolute"
			},
			"item-image-mask": {
				"width": 216,
				"height": 216,
				"opacity": 0.03,
				"backgroundColor": "#000000"
			},
			"info-container": {
				"height": 222,
				"marginLeft": 20,
				"marginTop": -6,
				"justifyContent": "space-between"
			},
			"title": {
				"width": 484,
				"fontSize": 28,
				"paddingTop": 4,
				"fontWeight": "bold",
				"lineHeight": 36,
				"color": "#333333",
				"lines": 2,
				"textOverflow": "ellipsis"
			},
			"common-icons": {
				"width": 484,
				"marginTop": 12,
				"fontSize": 24,
				"color": "#999999",
				"lines": 1,
				"textOverflow": "ellipsis"
			},
			"recommend-container": {
				"height": 74,
				"flexDirection": "row",
				"alignItems": "center"
			},
			"recommend-desc": {
				"height": 42,
				"paddingLeft": 12,
				"paddingRight": 12,
				"paddingTop": 8,
				"paddingBottom": 8,
				"marginRight": 10,
				"textAlign": "center",
				"fontSize": 24,
				"color": "#999999",
				"lines": 1,
				"textOverflow": "ellipsis",
				"backgroundColor": "#F3F3F3",
				"borderRadius": 50
			},
			"bottom-container": {
				"flexDirection": "row",
				"alignItems": "flex-end"
			},
			"price": {
				"height": 32,
				"color": "#FF0036",
				"fontSize": 32,
				"marginRight": 10,
				"fontWeight": "bold"
			},
			"bottom-icon-text": {
				"fontSize": 20,
				"paddingTop": 2,
				"paddingBottom": 2,
				"paddingLeft": 6,
				"paddingRight": 6,
				"marginRight": 10,
				"color": "#FF0036",
				"fontWeight": "bold",
				"backgroundColor": "#FBE9E9"
			},
			"bottom-icon-image": {
				"height": 24,
				"marginRight": 10
			},
			"sold": {
				"fontSize": 20,
				"color": "#999999"
			},
			"below": {
				"height": 170
			},
			"divider": {
				"width": 690,
				"height": 14,
				"marginLeft": 30
			},
			"below-content": {
				"width": 720,
				"height": 94,
				"marginTop": 29,
				"flexDirection": "row",
				"backgroundColor": "#ffffff",
				"alignItems": "center"
			},
			"verify-container": {
				"width": 216,
				"height": 94,
				"alignItems": "center"
			},
			"verify-icon": {
				"width": 184,
				"height": 94,
				"marginLeft": 30,
				"position": "absolute"
			},
			"verify-text": {
				"marginTop": 14,
				"fontSize": 20
			},
			"feature-text": {
				"marginTop": 12,
				"fontSize": 30,
				"fontWeight": "bold"
			},
			"feature-desc": {
				"width": 484,
				"marginLeft": 22,
				"fontSize": 24,
				"lineHeight": 44,
				"lines": 2,
				"textOverflow": "ellipsis"
			},
			"footer": {
				"backgroundColor": "#ffffff",
				"height": 130,
				"width": 750,
				"justifyContent": "center",
				"alignItems": "center"
			},
			"footer-end": {
				"width": 750,
				"height": 20,
				"backgroundColor": "#f4f4f4"
			},
			"footer-button": {
				"flexDirection": "row",
				"alignItems": "center",
				"justifyContent": "center",
				"width": 254,
				"height": 56,
				"borderWidth": 2,
				"borderColor": "#e0e0e0",
				"borderRadius": 50
			},
			"footer-title": {
				"fontSize": 28,
				"lines": 1,
				"color": "#999999"
			},
			"footer-arrow": {
				"height": 22,
				"width": 14,
				"marginLeft": 8
			}
		}

		/***/ }),
	/* 2 */
	/***/ (function(module, exports) {

		'use strict';

		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//

		var navigator = weex.requireModule('event');
		var userTrack = weex.requireModule('userTrack');
		module.exports = {
			props: {
				height: {
					default: 0
				},

				title: {
					default: "first thera project"
				},
				pic: {
					default: "http://img.alicdn.com/imgextra/i2/2850932807/TB21h2fmYtlpuFjSspfXXXLUpXa_!!2850932807-0-fans.jpg"
				},
				url: {
					default: "tmall://page.tm/itemDetail?itemId=541366140904"
				},
				id: {
					default: "mock-id"
				},

				items: {
					default: function _default() {
						return [{
							title: "Estee Lauder/雅诗兰黛，小棕瓶高保湿霜套装修组合眼霜",
							img: "https://gw.alicdn.com/tfs/TB1pFWCKFXXXXcuXVXXXXXXXXXX-720-1080.jpg",
							descList: ["改变皮肤色泽不均", "提亮肤色提亮肤色", "提亮肤色"],
							price: "620.00",
							sold: "月销2422",
							itemId: "541366140904",
							badge: "淡化细纹",
							feature: "见效较快，使用后吸收很快，一星期后感觉细纹减少",
							topIconList: [{
								type: "text",
								value: {
									backgroundColor: "#ff9500",
									fontColor: "#ffffff",
									textValue: "88888",
									textSize: ""
								}
							}, {
								type: "img",
								value: {
									textSize: "",
									height: 45,
									width: 156,
									url: "https://gw.alicdn.com/tfs/TB1op9SQVXXXXa0XFXXXXXXXXXX-156-45.png"
								}
							}, {
								type: "text",
								value: {
									backgroundColor: "#ff0000",
									fontColor: "#ffffff",
									textValue: "双11",
									textSize: ""
								}
							}],
							commonIconList: [{
								type: "text",
								value: {
									backgroundColor: "#ff9500",
									fontColor: "#ffffff",
									textValue: "旗舰店",
									textSize: ""
								}
							}, {
								type: "img",
								value: {}
							}, {
								type: "text",
								value: {
									backgroundColor: "#ff9500",
									fontColor: "#ffffff",
									textValue: "极速退货",
									textSize: ""
								}
							}],
							bottomIconList: [{
								type: "text",
								value: {
									backgroundColor: "#FBE9E9",
									fontColor: "#ff0036",
									textValue: "直降200",
									textSize: ""
								}
							}]
						}, {
							img: "https://gw.alicdn.com/tfs/TB1pFWCKFXXXXcuXVXXXXXXXXXX-720-1080.jpg",
							title: "Estee Lauder/雅诗兰黛，小棕瓶高保湿霜套装修组合眼霜，小棕瓶高保湿霜套装修组合眼霜",
							descList: ["一二三四五六七八九十", "一二三四", "一二"],
							price: "1347.0",
							sold: "月销2422",
							itemId: "541366140904",
							badge: "淡化细纹",
							feature: "见效较快，使用后吸收很快"
						}];
					}
				}
			},
			created: function created() {
				console.error("created");
				var num = (this.items || []).length;
				this.height = 442 * num + 266 + 150;
				this.parseIcons();
				this.formatData();

				this.customState = 'updated';
			},
			beforeUpdate: function beforeUpdate() {
				console.error("--------------beforeUpdate");
				if (this.customState === 'updated') {
					this.customState = 'notupdated';
					var num = this.items.length;
					this.height = 442 * num + 266 + 150;
					this.parseIcons();
					this.formatData();
				}
			},
			updated: function updated() {
				console.error("updated");
				this.customState = 'updated';
			},
			methods: {
				formatData: function formatData() {
					var items = this.items || [];
					for (var i = 0; i < items.length; ++i) {
						var item = items[i];
						item.feature = item.feature ? "“" + item.feature + "”" : "";
						item.price = this.formatPrice(item.price);
						item.descList = this.formatDescList(item.descList) || [];
					}
				},
				formatPrice: function formatPrice(price) {
					if (price && price.indexOf('.') >= 0) {
						var end = price.length - 1;
						while (end >= 0) {
							if (price[end] === '.') {
								end--;
								break;
							}
							if (price[end] !== '0') {
								break;
							}
							end--;
						}
						price = price.substr(0, end + 1);
					}
					return price ? "￥" + price : "";
				},
				formatDescList: function formatDescList(descList) {
					if (descList && descList.length > 0) {
						var tmp = [],
							len = 0;
						for (var i = 0; i < descList.length; ++i) {
							len += (descList[i] || '').length;
							if (len <= 16) {
								if (descList[i]) {
									tmp.push(descList[i]);
								}
							} else {
								break;
							}
						}
						return tmp;
					}
				},
				applyIcon: function applyIcon(item, icon, textKey, textColorKey, textBgColorKey, imgWidthKey, imgUrlKey) {
					if (icon && icon.type === "text" && icon.value && icon.value.textValue) {
						item[textKey] = icon.value.textValue;
						item[textColorKey] = icon.value.fontColor ? icon.value.fontColor : "#ffffff";
						item[textBgColorKey] = icon.value.backgroundColor ? icon.value.backgroundColor : "#ff9500";
					} else if (icon && icon.type === "img" && icon.value && icon.value.height > 0 && icon.value.url) {
						item[imgWidthKey] = icon.value.width / icon.value.height * 30;
						item[imgUrlKey] = icon.value.url;
					}
				},
				parseIcons: function parseIcons() {
					var items = this.items || [];
					for (var i = 0; i < items.length; ++i) {
						var item = items[i];
						var icon = null;

						// tTextIcon1 tIconColor1 tIconBgColor1 tIconWidth1 tImageIcon1
						var topIconList = item.topIconList || [];
						if (topIconList.length > 0) {
							this.applyIcon(item, topIconList[0], "tTextIcon1", "tTextColor1", "tTextBgColor1", "tImageIconW1", "tImageIcon1");
						}
						if (topIconList.length > 1) {
							this.applyIcon(item, topIconList[1], "tTextIcon2", "tTextColor2", "tTextBgColor2", "tImageIconW2", "tImageIcon2");
						}
						if (topIconList.length > 2) {
							this.applyIcon(item, topIconList[2], "tTextIcon3", "tTextColor3", "tTextBgColor3", "tImageIconW3", "tImageIcon3");
						}

						// common icon list
						var commonIconList = item.commonIconList || [];
						var commonIcons = "";
						for (var j = 0; j < commonIconList.length; ++j) {
							icon = commonIconList[j];
							if (icon && icon.type === "text" && icon.value && icon.value.textValue) {
								commonIcons += icon.value.textValue;
								if (j < commonIconList.length - 1) {
									commonIcons += " | ";
								}
							}
						}
						item.commonIcons = commonIcons;

						// bottom icon list
						var bottomIconList = item.bottomIconList || [];
						if (bottomIconList.length > 0) {
							icon = bottomIconList[0];
							this.applyIcon(item, bottomIconList[0], "bTextIcons", "bIconColor", "bIconBgColor", "bIconWidth", "bImageIcon");
						}
					}
				},

				goDetailClick: function goDetailClick(index) {
					console.error('goDetailClick');
					console.error(index);
					if (userTrack) {

						try {
							var item = this.items[index];
							var args = {
								click_type: "auction",
								item_id: item.itemId,
								rn: this.rn,
								bid: this.id
							};
							userTrack.commitut("click", 2101, "Page_SearchResult", "TMSearchUT_BangdanItemClick", null, null, null, args);
						} catch (err) {
							console.error("commitUt item exception: ", err);
						}
					}
					if (navigator) {
						try {
							var item = this.items[index];
							var action = "tmall://page.tm/itemDetail?itemId=" + item.itemId;
							navigator.openURL(action);
						} catch (err) {
							console.error("navigator exception: ", err);
						}
					}
				},
				goMoreClick: function goMoreClick(e) {
					if (userTrack) {
						try {
							var args = {
								click_type: "more",
								rn: this.rn,
								bid: this.id
							};
							userTrack.commitut("click", 2101, "Page_SearchResult", "TMSearchUT_BangdanMoreClick", null, null, null, args);
						} catch (err) {
							console.error("commitUt more exception: ", err);
						}
					}
					if (navigator) {
						try {
							var action = this.url;
							navigator.openURL(action);
						} catch (err) {
							console.error("navigator exception: ", err);
						}
					}
				}
			}
		};

		/***/ }),
	/* 3 */
	/***/ (function(module, exports) {

		module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
			return _c('div', {
				style: {
					height: _vm.height,
					backgroundColor: 'transparent'
				}
			}, [_c('div', {
				staticClass: ["header"]
			}, [_c('image', {
				staticClass: ["header-pic"],
				attrs: {
					"resize": "cover",
					"src": _vm.pic
				}
			}), _c('div', {
				staticClass: ["header-mask"]
			}), _c('image', {
				staticClass: ["header-decor"],
				attrs: {
					"src": "https://gw.alicdn.com/tfs/TB1aSO1QVXXXXczXpXXXXXXXXXX-960-360.png"
				}
			}), _c('text', {
				staticClass: ["header-title"]
			}, [_vm._v(_vm._s(_vm.title))])]), _vm._l((_vm.items), function(item, index) {
				return _c('div', [_c('div', {
					staticClass: ["cell"],
					on: {
						"click": function($event) {
							_vm.goDetailClick(index)
						}
					}
				}, [_c('div', {
					staticClass: ["above"]
				}, [_c('div', {
					staticClass: ["top-icons"]
				}, [(item.tTextIcon1) ? _c('text', {
					staticClass: ["top-icon-text"],
					style: {
						color: item.tTextColor1,
						backgroundColor: item.tTextBgColor1
					}
				}, [_vm._v(_vm._s(item.tTextIcon1))]) : _vm._e(), (item.tImageIcon1) ? _c('image', {
					staticClass: ["top-icon-image"],
					style: {
						width: item.tImageIconW1
					},
					attrs: {
						"src": item.tImageIcon1
					}
				}) : _vm._e(), (item.tTextIcon2) ? _c('text', {
					staticClass: ["top-icon-text"],
					style: {
						color: item.tTextColor2,
						backgroundColor: item.tTextBgColor2
					}
				}, [_vm._v(_vm._s(item.tTextIcon2))]) : _vm._e(), (item.tImageIcon2) ? _c('image', {
					staticClass: ["top-icon-image"],
					style: {
						width: item.tImageIconW2
					},
					attrs: {
						"src": item.tImageIcon2
					}
				}) : _vm._e(), (item.tTextIcon3) ? _c('text', {
					staticClass: ["top-icon-text"],
					style: {
						color: item.tTextColor3,
						backgroundColor: item.tTextBgColor3
					}
				}, [_vm._v(_vm._s(item.tTextIcon3))]) : _vm._e(), (item.tImageIcon3) ? _c('image', {
					staticClass: ["top-icon-image"],
					style: {
						width: item.tImageIconW3
					},
					attrs: {
						"src": item.tImageIcon3
					}
				}) : _vm._e()]), _c('div', {
					staticClass: ["item-container"]
				}, [_c('image', {
					staticClass: ["item-image"],
					attrs: {
						"resize": "cover",
						"src": item.img
					}
				}), _c('div', {
					staticClass: ["item-image-mask"]
				}), _c('div', {
					staticClass: ["info-container"]
				}, [_c('text', {
					staticClass: ["title"]
				}, [_vm._v(_vm._s(item.title))]), (item.commonIcons) ? _c('text', {
					staticClass: ["common-icons"]
				}, [_vm._v(_vm._s(item.commonIcons))]) : _vm._e(), _c('div', {
					staticClass: ["recommend-container"]
				}, _vm._l((item.descList), function(desc) {
					return _c('text', {
						staticClass: ["recommend-desc"]
					}, [_vm._v(_vm._s(desc))])
				})), _c('div', {
					staticClass: ["bottom-container"]
				}, [_c('text', {
					staticClass: ["price"]
				}, [_vm._v(_vm._s(item.price))]), (item.bTextIcons) ? _c('text', {
					staticClass: ["bottom-icon-text"],
					style: {
						color: item.bIconColor,
						backgroundColor: item.bIconBgColor
					}
				}, [_vm._v(_vm._s(item.bTextIcons))]) : _vm._e(), (item.bImageIcon) ? _c('image', {
					staticClass: ["bottom-icon-image"],
					style: {
						width: item.bIconWidth
					},
					attrs: {
						"src": item.bImageIcon
					}
				}) : _vm._e(), _c('text', {
					staticClass: ["sold"]
				}, [_vm._v(_vm._s(item.sold))])])])])]), _c('div', {
					staticClass: ["below"]
				}, [_c('image', {
					staticClass: ["divider"],
					attrs: {
						"src": "https://gw.alicdn.com/tfs/TB1cMO2QVXXXXXcXXXXXXXXXXXX-1035-24.png"
					}
				}), _c('div', {
					staticClass: ["below-content"]
				}, [_c('div', {
					staticClass: ["verify-container"]
				}, [_c('image', {
					staticClass: ["verify-icon"],
					attrs: {
						"src": "https://gw.alicdn.com/tfs/TB11vL9QFXXXXa1XFXXXXXXXXXX-184-94.png"
					}
				}), _c('text', {
					staticClass: ["verify-text"]
				}, [_vm._v("认证招牌技")]), _c('text', {
					staticClass: ["feature-text"]
				}, [_vm._v(_vm._s(item.badge))])]), _c('text', {
					staticClass: ["feature-desc"]
				}, [_vm._v(_vm._s(item.feature))])])]), _c('text', {
					staticStyle: {
						width: "750",
						height: "2",
						backgroundColor: "#f4f4f4"
					}
				})])])
			}), _c('div', {
				staticClass: ["footer"]
			}, [_c('div', {
				staticClass: ["footer-button"]
			}, [_c('text', {
				staticClass: ["footer-title"],
				on: {
					"click": _vm.goMoreClick
				}
			}, [_vm._v("查看全部榜单")]), _c('image', {
				staticClass: ["footer-arrow"],
				attrs: {
					"src": "https://gw.alicdn.com/tfs/TB1n_uNQVXXXXX9XpXXXXXXXXXX-21-33.png"
				}
			})])]), _c('div', {
				staticClass: ["footer-end"]
			})], 2)
		},staticRenderFns: []}

		/***/ })
	/******/ ]);
