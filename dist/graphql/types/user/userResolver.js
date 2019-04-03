'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeUser = exports.updateUser = exports.createUser = exports.getUsers = exports.getUser = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {boolean} active
 */

/**
 * Método responsável por buscar um usuário
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<User>}
 */
var getUser = exports.getUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_root, _ref2, _ref3) {
    var id = _ref2.id;
    var db = _ref3.db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _userLoader.userLoader.load(id);

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Método responsável por buscar vários usuários
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<User[]>}
 */


var getUsers = exports.getUsers = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_root, _args, _ref5) {
    var db = _ref5.db;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return db.table('user').select('*');

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUsers(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Método responsável por criar um usuário
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<User>}
 */


var createUser = exports.createUser = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_root, _ref7, _ref8) {
    var user = _ref7.user;
    var db = _ref8.db;

    var _ref9, _ref10, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return db.table('user').returning('*').insert(user);

          case 2:
            _ref9 = _context3.sent;
            _ref10 = _slicedToArray(_ref9, 1);
            result = _ref10[0];
            return _context3.abrupt('return', result);

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function createUser(_x7, _x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Método responsável por atualizar um usuário
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<User>}
 */


var updateUser = exports.updateUser = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_root, _ref12, _ref13) {
    var id = _ref12.id,
        user = _ref12.user;
    var db = _ref13.db;

    var _ref14, _ref15, result;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return db.table('user').returning('*').update(user).where({ id: id });

          case 2:
            _ref14 = _context4.sent;
            _ref15 = _slicedToArray(_ref14, 1);
            result = _ref15[0];


            _userLoader.userLoader.clear(id);

            return _context4.abrupt('return', result);

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateUser(_x10, _x11, _x12) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * Método responsável por remover um usuário
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<void>}
 */


var removeUser = exports.removeUser = function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_root, args, _ref17) {
    var db = _ref17.db;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return db.table('user').delete().where(args);

          case 2:

            _userLoader.userLoader.clear(id);

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function removeUser(_x13, _x14, _x15) {
    return _ref16.apply(this, arguments);
  };
}();

var _userLoader = require('./userLoader');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }