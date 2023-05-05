const { v4: uuidv4 } = require('uuid');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        id: uuidv4(),
        post_title: 'JavaScript Performance Tips',
        post_body: 'We will look at 10 simple tips and tricks to increase the speed of your code when writing JS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        post_title: 'Tailwind vs. Bootstrap',
        post_body: 'Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        post_title: 'Writing Great Unit Tests',
        post_body: 'We will look at 10 simple tips and tricks on writing unit tests in JavaScript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        post_title: 'What Is New In PHP 8?',
        post_body: 'In this article we will look at some of the new features offered in version 8 of PHP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('blogs', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs', null, {});
  }
};
