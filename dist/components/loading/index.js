/*!
 * Vux v0.1.3-rc10 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxLoading=o():t.vuxLoading=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var s=e[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(4)},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:Boolean,text:{type:String,"default":"Loading"},position:String}}},function(t,o){},function(t,o){t.exports='<div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div>'},function(t,o,e){var i,s;e(2),i=e(1),s=e(3),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});