- ./node_modules/.bin/sequelize init
- ./node_modules/.bin/sequelize db:create
- ./node_modules/.bin/sequelize migration:create --name create-shops-table
- ./node_modules/.bin/sequelize db:migrate

- ./node_modules/.bin/sequelize db:migrate:undo // 撤销操作
- ./node_modules/.bin/sequelize seed:create --name init-shops // 创建测试数据文件
- ./node_modules/.bin/sequelize db:seed:all // 执行所有测试文件操作
- config
- migrations 数据库迁移
  会将mysql 表，字段 创建，修改 迁移 留下记录
- models 业务模型层 表映射为对象
  Article
  Insert into
  new Article({title: ''})
- seeders
  测试数据

- 离开sql 来到工具