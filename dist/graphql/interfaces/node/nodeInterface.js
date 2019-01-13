'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nodeField = exports.nodeInterface = undefined;

var _graphqlRelay = require('graphql-relay');

var _userType = require('../../types/user/userType');

var _userType2 = _interopRequireDefault(_userType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _nodeDefinitions = (0, _graphqlRelay.nodeDefinitions)(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(globalId, _ref2) {
        var db = _ref2.db;

        var _fromGlobalId, id, _fromGlobalId$type, type;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _fromGlobalId = (0, _graphqlRelay.fromGlobalId)(globalId), id = _fromGlobalId.id, _fromGlobalId$type = _fromGlobalId.type, type = _fromGlobalId$type === undefined ? 'user' : _fromGlobalId$type;
                        return _context.abrupt('return', db.table(type).select().where({ id: id }));

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}()),
    nodeInterface = _nodeDefinitions.nodeInterface,
    nodeField = _nodeDefinitions.nodeField;

exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;