import { userLoader } from './userLoader';

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
export async function getUser(_root, { id }, { db }) {
  return await userLoader.load(id);
}

/**
 * Método responsável por buscar vários usuários
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<User[]>}
 */
export async function getUsers(_root, _args, { db }) {
  return await db.table('user').select('*');
}

/**
 * Método responsável por criar um usuário
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<User>}
 */
export async function createUser(_root, { user }, { db }) {
  const [result] = await db
    .table('user')
    .returning('*')
    .insert(user);

  return result;
}

/**
 * Método responsável por atualizar um usuário
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<User>}
 */
export async function updateUser(_root, { id, user }, { db }) {
  const [result] = await db
    .table('user')
    .returning('*')
    .update(user)
    .where({ id });

  userLoader.clear(id);

  return result;
}

/**
 * Método responsável por remover um usuário
 * @param {any} root
 * @param {any} args
 * @param {any} ctx
 * @return {Promise<void>}
 */
export async function removeUser(_root, args, { db }) {
  await db
    .table('user')
    .delete()
    .where(args);

  userLoader.clear(id);
}
