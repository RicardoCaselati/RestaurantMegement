import { Request, Response } from 'express';
import { LoginService } from "../service/Login.service";

const loginController = async (req: Request, res: Response) => {
    try {
        const peopleData = req.body;        
        const newPeople = await LoginService(peopleData);
        console.log("🚀 ~ loginController ~ newPeople:", newPeople)
    
        return res.status(201).json({
          message: 'Login realizado com sucesso!',
          data: newPeople
        });
        } catch (error) {
          return res.status(500).json({ message: 'Erro no servidor', error });
        }
 };

 export { loginController };
    