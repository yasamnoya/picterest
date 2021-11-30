module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Pictures',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Pictures', 'userId');
  },
};
