import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        address_number: Sequelize.INTEGER,
        address_complement: Sequelize.STRING,
        address_state: Sequelize.STRING,
        address_city: Sequelize.STRING,
        address_cep: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Recipient;
