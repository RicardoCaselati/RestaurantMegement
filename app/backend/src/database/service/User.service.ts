import Pessoa from '../model/User.model'; // Certifique-se de que o caminho está correto
import { PessoaData } from '../Interface/People.interface';

const createUserService = async (userData: PessoaData) => {
  try {
    const newUser = new Pessoa(userData);
    await newUser.save();
    return newUser;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Erro ao cadastrar empresa: ' + error.message);
    } else {
      throw new Error('Erro desconhecido ao cadastrar empresa');
    }
  }
};


module.exports = {
    createUserService,
};