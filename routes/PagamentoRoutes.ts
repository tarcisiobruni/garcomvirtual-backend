import * as PagamentoApplication from "../application/PagamentoApplication";

/**
 * Inicio das Rotas do Pedido
 */

const orderPost = {
    action: PagamentoApplication.postOrder,
    method: "post",
    path: "/api/pagamentoorder",
}

const pagamentoPost = {
    action: PagamentoApplication.postPayment,
    method: "post",
    path: "/api/pagamento",
}

const PagamentoRoutes = [
    pagamentoPost
]

/**
 * Fim das Rotas do Pedido
 */

export {
    PagamentoRoutes
};
