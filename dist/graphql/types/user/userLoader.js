'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLoader = undefined;

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userLoader = exports.userLoader = new _dataloader2.default(function (ids) {
  return (0, _knex2.default)(require('../../../../knexfile')).table('user').select('*').whereIn('id', ids);
});