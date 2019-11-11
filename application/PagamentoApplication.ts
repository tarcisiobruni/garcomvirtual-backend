import { Pagamento } from './../entity/PagamentoEntity';
import { payPalClient } from './../commom/payPalClient';
import { statusHTTPCode } from './../utils/statusHTTP';
import { Request, Response } from 'express';
import * as PagamentoService from '../service/PagamentoService';
// 1. Set up your server to make calls to PayPal

// 1a. Import the SDK package
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

// 1b. Import the PayPal SDK client that was created in `Set up Server-Side SDK`.
/**
 *
 * PayPal HTTP client dependency
 */

// 2. Set up your server to receive a call from the client
export let postOrder = async (req: Request, res: Response): Promise<any> => {

    // 2a. Get the order ID from the request body
    const orderID = req.body.orderID;

    // 3. Call PayPal to get the transaction details
    let request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID);

    try {
        let order;
        order = await payPalClient.client().execute(request);
    } catch (err) {
        res.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        res.end(err.message)
    }

    // 5. Validate the transaction details are as expected
    // if (order.result.purchase_units[0].amount.value !== '220.00') {
    //     return res.send(400);
    // }

    // 6. Save the transaction in your database
    // await database.saveTransaction(orderID);

    // 7. Return a successful response to the client
    return res.send(200);
}

export let postPayment = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const pagamento = await PagamentoService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(pagamento);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};