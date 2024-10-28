import { LoginData } from "../Interface/Login.interface";
import Pessoa from "../model/User.model";

const LoginService = async (loginData: LoginData): Promise<{ success: boolean, message?: string }> => {
    try {
        const user = await Pessoa.findOne({ email: loginData.usuario });
        if (!user) {
            return { success: false, message: 'Usuário não encontrado' };
        }
        const passwordMatch = await user.comparePassword(loginData.senha);
        if (!passwordMatch) {
            return { success: false, message: 'Senha incorreta' };
        }
        return { success: true, message: 'Login realizado com sucesso!' };
    } catch (error) {
        console.error('Erro ao fazer Login:', error);
        if (error instanceof Error) {
            return { success: false, message: error.message };
        }
        return { success: false, message: 'Ocorreu um erro desconhecido ao fazer login' };
    }
};

  export { LoginService };
