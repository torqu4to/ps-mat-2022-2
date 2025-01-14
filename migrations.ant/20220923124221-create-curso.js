'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      sigla: {
        type: Sequelize.CHAR(5),
        allowNull: false,
        unique: true
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      duracao_meses: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 6
      },
      carga_horaria: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 80
      },
      valor_total: {
        type: Sequelize.DECIMAL(18,2),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cursos');
  }
};