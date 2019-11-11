import { tkConfig } from './../commom/tokenConfig';
import * as UsuarioService from '../service/UsuarioService';
import { statusHTTPCode } from './../utils/statusHTTP';
import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const login = request.body.email;
        // Unhash pass
        let pass = request.body.password;

        const usuario = await UsuarioService.selectByEmail(login);
        if (usuario === undefined){
            response.status(statusHTTPCode.clientErrorResponse.BadRequest);
            response.send("Email or password is incorrect!");
        }
        const validPass = await bcrypt.compare(pass,usuario.password)
        if(validPass){
            response.status(statusHTTPCode.sucessResponse.Accepted);
            const token = jwt.sign({_id: usuario.id }, tkConfig.token,{"expiresIn": "2h"})
            response.header('auth-token',token)
            response.send(usuario);
        }
        response.status(statusHTTPCode.clientErrorResponse.Unauthorized);
        response.send("Invalid password");
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

