"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        title: "A maldição do cigano",
        author: "Stephen King",
        pageQuantity: 616,
        createdAt: new Date("2022-01-28T13:23:32.514Z"),
        updatedAt: new Date("2022-01-28T13:23:32.514Z"),
      },
      {
        title: "A menina que roubava livros",
        author: "Markus Zusak",
        pageQuantity: 480,
        createdAt: new Date("2022-01-28T04:51:32.514Z"),
        updatedAt: new Date("2022-01-28T04:51:32.514Z"),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
