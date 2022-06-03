'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // 유저 생성
    await queryInterface.bulkInsert('User',[
      {
        email:"aaa@gmail.com",
        upassword: "123456",
        uname: "김김김",
        address: "서울시 강서구",
        phoneNum: "010-000-0000"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('User', null, {});
  }
};
