import users  from '../model/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { infoTipo } from './user.repository'

const SECRET = process.env.SECRET ?? ''; 

export class userLogin{

    static userToken = async (infoUser: infoTipo): Promise<string | null> => {
        try{
            const { email, senha } = infoUser

            const userInfos: infoTipo = await users.findOne({
                where: {
                    email: email
                }
            })

            if (!userInfos) {
                
            }

            console.log("email:" + userInfos.email)

            const senhaHashed = userInfos.senha;
            const senhaMatch = await bcrypt.compare(senha, senhaHashed)

            if(senhaMatch){
                const token = jwt.sign(
                    {
                        userId: userInfos.id,
                        email: userInfos.email,
                        role: userInfos.id_cargo
                    },
                    SECRET,
                    {expiresIn: '1h'}
                )
                
                return token

            }else{
                throw new Error("Credenciais inválidas");
            }
        }catch(error){
            console.log("Erro no repositorio login: " + error);
            throw new Error("Erro ao processar autenticação do usuário");
        }
    }
}