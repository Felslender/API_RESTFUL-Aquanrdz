import { RequestHandler } from "express";
import { Peixe } from "../models/infos.model";
import peixes from "../models/tableModels/peixes.model";

export class middlewarePeixe{

    static createPeixe: RequestHandler = async(req, res, next ) => {
        try{
            const peixesCadastrados = (await peixes.findAll());

            console.log(peixesCadastrados.length)

            if(peixesCadastrados.length < 4){

                var newPeixe = (await peixes.create({
                    nome_peixe: "Tilápia",
                    nome_cient: "Oreochromis niloticus",
                    media_peso: "800g",
                    media_tamanho: "35-50cm",
                })) as Peixe;

                var newPeixe = (await peixes.create({
                    nome_peixe: "Saint peter",
                    nome_cient: "Oreochromis niloticus",
                    media_peso: "500g",
                    media_tamanho: "20-30cm",
                })) as Peixe;

                var newPeixe = (await peixes.create({
                    nome_peixe: "Carpa koi",
                    nome_cient: "Cyprinus rubrofuscus koi",
                    media_peso: "2-14kg",
                    media_tamanho: "60-90cm",
                })) as Peixe;

                var newPeixe = (await peixes.create({
                    nome_peixe: "Peixinho dourado",
                    nome_cient: "Carassius auratus auratus",
                    media_peso: "350gm",
                    media_tamanho: "10-40cm",
                })) as Peixe;

                

            }

            next()

        }catch(err){
            return err
        }
        
    }

}