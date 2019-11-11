import * as ApiApp from "../application/ApiApp";
import * as VerifyToken from '../utils/verify'
/**
 * Inicio das Rotas do Avaliacao
 */

const api = {
    action: ApiApp.get,
    method: "get",
    path: "/api/status"
}

const ApiDocs = [
    api
]

/**
 * Fim das Rotas do Avaliacao
 */

export {
    ApiDocs
};
