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
export async function getUser(root, args, { db }) {
    return await db.table('user').select().where(args).first();
}

/**
 * Método responsável por buscar vários usuários
 * @param {any} root 
 * @param {any} args 
 * @param {any} ctx 
 * @return {Promise<User[]>}
 */
export async function getUsers(root, args, { db }) {
    return await db.table('user').select();
}

/**
 * Método responsável por criar um usuário
 * @param {any} root 
 * @param {any} args 
 * @param {any} ctx 
 * @return {Promise<User>}
 */
export async function createUser(root, { user }, { db }) {
    const [id] = await db.table('user').insert(user);
    
    return await db.table('user').select().where({ id }).first();
}

/**
 * Método responsável por atualizar um usuário
 * @param {any} root 
 * @param {any} args 
 * @param {any} ctx 
 * @return {Promise<User>}
 */
export async function updateUser(root, { id, user }, { db }) {
    await db.table('user').update(user).where({ id });

    return await db.table('user').select().where({ id }).first();
}

/**
 * Método responsável por remover um usuário
 * @param {any} root 
 * @param {any} args 
 * @param {any} ctx 
 * @return {Promise<void>}
 */
export async function removeUser(root, args, { db }) {
    await db.table('user').delete().where(args);
}
