import * as Auth from "../application/AuthApp";


const api = {
    action: Auth.post,
    method: "post",
    path: "/api/auth",
}

const ApiAuth = [
    api
]

export {
    ApiAuth
};
