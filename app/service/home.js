'use strict';

const Service = require('egg').Service;
class HomeService extends Service {
  async user() {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    const QUERY_STR = 'id, name';
    const sql = `select ${QUERY_STR} from list`; // 获取 id 的 sql 语句
    try {
      const result = await app.mysql.query(sql); // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 新增
  async addUser(name) {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    try {
      const result = await app.mysql.insert('list', { name }); // 给 list 表，新增一条数据
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 删除
  async delUser(id) {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    try {
      const result = await app.mysql.delete('list', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = HomeService;
