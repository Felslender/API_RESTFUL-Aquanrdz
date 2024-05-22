import { RequestHandler } from "express";
import { User } from "../models/infos.model";


export class verificarCamposUser {

    static verificarCampoVazio: RequestHandler = ( req, res, next ) => {

        const { nome, email, senha, cod, telefone } = req.body;


        if (!nome || nome.trim() === '') {
            return res.status(400).json({ error: 'O campo nome não pode estar vazio' });
          }
        else if (!email || email.trim() === '') {
            return res.status(400).json({ error: 'O campo email não pode estar vazio' });
        } 
        else if (!senha || senha.trim() === '') {
            return res.status(400).json({ error: 'O campo senha não pode estar vazio' });
        } 
        else if (!cod || cod.trim() === '') {
            return res.status(400).json({ error: 'O campo cod não pode estar vazio' });
        } 
        else if (!telefone || telefone.trim() === '') {
            return res.status(400).json({ error: 'O campo telefone não pode estar vazio' });
        }
          
        next()


    } 

}