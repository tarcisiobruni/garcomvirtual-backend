import { statusHTTPCode } from './../utils/statusHTTP';
import * as UsuarioService from '../service/UsuarioService';
import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs'

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const usuario = await UsuarioService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(usuario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const usuario = await UsuarioService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(usuario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(request.body.password,salt);
    
    const user = {
        email: request.body.email,
        password: hashPass,
        enumorigemcriacao: request.body.enumorigemcriacao,
        ativo: request.body.ativo
    }
    
    try{
        // TODO: Validacao das regras de negocio
        const usuario = await UsuarioService.save(user);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(usuario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const usuario = await UsuarioService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(usuario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const usuario = await UsuarioService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(usuario);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
