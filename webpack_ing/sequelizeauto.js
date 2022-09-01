const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('new_schema', 'root', 'mysql@!####', {
   host:'localhost',
   user:'root',
   port:'3306',
   password:'mysql@!####',
   database: 'new_schema'
})

auto.run()