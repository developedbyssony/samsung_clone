// const Sequelize = require('sequelize');
// const mybatisMapper = require('mybatis-mapper');
// const { appendFile } = require('fs');
// const envType = process.env.ENV ? process.env.ENV : "dev";
// const version = process.env.VERSION ? process.env.VERSION : "base";

/*
const sequelize = new Sequelize('Database', 'userName', 'Password', {
    host:'loalhost',
    dialect:'mysql'
});

/* const sqlPath = path.join(__dirname, "..", ".", `/sql/${version}/`); */

/* 
mybatisMapper.createMapper(['./loaders/base.xml']);

var init = async function(req, res, next) {
  req.envType = envType;
  req.sequelize = sequelize;
  req.mybatisMapper = mybatisMapper;

  next();
};

module.exports = init;

router.get("/login/:id", async (req, res) => {
    if (!req.params || !req.params.id) {
      res.status(403).send({ msg: "잘못된 파라미터입니다." });
      return;
    }
  
    var selectParams = {
      id: req.params.id
    };
  
    var selectQuery = req.mybatisMapper.getStatement(
      "BASE",
      "USER.SELECT.TB_VU.001",
      selectParams,
      { language: "sql", indent: "  " }
    );
  
    let data = [];
    try {
      data = await req.sequelize.query(selectQuery, {
        type: req.sequelize.QueryTypes.SELECT
      });
      console.log("TCL: data", data);
    } catch (error) {
      res.status(403).send({ msg: "rdb select에 실패하였습니다.", error: error });
      return;
    }
  
    if (data.length == 0) {
      res.status(403).send({ msg: "정보가 없습니다." });
      return;
    }
  
    res.json({
      msg: "RDB에서 정보 꺼내오기",
      user: data.map(x => {
        x.vu_password = "";
        return x;
      })[0]
    });
  });
  
  module.exports = server;

