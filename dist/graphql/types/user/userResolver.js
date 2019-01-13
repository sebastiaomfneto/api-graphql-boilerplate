'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(root, args, _ref2) {
    var db = _ref2.db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.table('user').select().where(args);

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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(root, args, _ref4) {
    var db = _ref4.db;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return db.table('user').select();

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
    return _ref3.apply(this, arguments);
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
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(root, _ref6, _ref7) {
    var user = _ref6.user;
    var db = _ref7.db;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return db.table('user').insert(user).returning('*');

          case 2:
            return _context3.abrupt('return', _context3.sent);

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function createUser(_x7, _x8, _x9) {
    return _ref5.apply(this, arguments);
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
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(root, _ref9, _ref10) {
    var id = _ref9.id,
        user = _ref9.user;
    var db = _ref10.db;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return db.table('user').update(user).where({ id: id }).returning('*');

          case 2:
            return _context4.abrupt('return', _context4.sent);

          case 3:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateUser(_x10, _x11, _x12) {
    return _ref8.apply(this, arguments);
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
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(root, args, _ref12) {
    var db = _ref12.db;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return db.table('user').remove().where(args);

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function removeUser(_x13, _x14, _x15) {
    return _ref11.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }