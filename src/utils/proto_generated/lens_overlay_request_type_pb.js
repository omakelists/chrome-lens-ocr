// source: lens_overlay_request_type.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.lens.RequestType', null, global);
/**
 * @enum {number}
 */
proto.lens.RequestType = {
  REQUEST_TYPE_DEFAULT: 0,
  REQUEST_TYPE_PDF: 1,
  REQUEST_TYPE_EARLY_PARTIAL_PDF: 3,
  REQUEST_TYPE_WEBPAGE: 2
};

goog.object.extend(exports, proto.lens);
