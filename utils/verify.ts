import * as jwt from 'jsonwebtoken'
import { tkConfig } from './../commom/tokenConfig';
import { Request, Response } from 'express';
import { statusHTTPCode } from './../utils/statusHTTP';

export let auth = (req: Request, res: Response, next: Function) => {
    const token = req.header('auth-token');
    if (!token) return res.status(statusHTTPCode.clientErrorResponse.Unauthorized).send('Acesso Negado');
    try {
        const verified = jwt.verify(token, tkConfig.token, function (err, decoded) {
            if (err) {
                console.log(decoded);
                return res.status(statusHTTPCode.clientErrorResponse.Unauthorized).send('Acesso Negado');
            }
        });
        console.log(verified);
        next();
    } catch (error) {

    }
}