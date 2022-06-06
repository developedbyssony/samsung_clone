const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('new_schema', 'root', 'Xptmx1212!@', {
   host:'localhost',
   user:'root',
   port:'3306',
   password:'1234',
   database: 'new_schema'
})

auto.run()