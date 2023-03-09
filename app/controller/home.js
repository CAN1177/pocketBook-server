'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: 'CAN1177', // 将 title 传入 index.html
    });
  }

  // 获取用户信息
  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }
  // post 请求方法
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    ctx.body = {
      title,
    };
  }
  // 新增用户方法
  async addUser() {
    const { ctx } = this;
    // const { name } = ctx.request.body;
    try {
      // const result = await ctx.service.home.addUser(name)
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: null,
      };
    } catch (e) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      };
    }
  }
  // 删除
  async delUser() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await ctx.service.home.delUser(id);
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: null,
      };
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null,
      };
    }
  }


}

module.exports = HomeController;
