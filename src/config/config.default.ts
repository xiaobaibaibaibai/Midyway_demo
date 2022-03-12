import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1646826724141_2584',
  koa: {
    port: 7001,
  },
  orm: {
    type: 'mysql',
    host: 'rm-2zev7yyemcdnsk8ap8o.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'wentan',
    password: 'qweIOP123890',
    database: 'test_db',
    synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
  },
} as MidwayConfig;
