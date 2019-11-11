'use strict';

/**
 *
 * PayPal Node JS SDK dependency
 */
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

/**
 *
 * Returns PayPal HTTP client instance with environment that has access
 * credentials context. Use this instance to invoke PayPal APIs, provided the
 * credentials have access.
 */
function client() {
    return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

/**
 *
 * Set up and return PayPal JavaScript SDK environment with PayPal access credentials.
 * This sample uses SandboxEnvironment. In production, use LiveEnvironment.
 *
 */
function environment() {
    let clientId = process.env.PAYPAL_CLIENT_ID || 'AXUAX734pBUYu7hV2P2Gyrvzw9FBPS10ee5svfF2WTPGbxrAYnji9vEHJYoR56X4e1sMutAzBoiJSoyB';
    let clientSecret = process.env.PAYPAL_CLIENT_SECRET || 'EKmwVUfZ1zBUloPL0Pj6J4aFlX6Twek4bTFrTDHZwsf2q1tc_FOVkGZOl4QLTaFsLVFd-Y2XiY2FJykk';

    return new checkoutNodeJssdk.core.SandboxEnvironment(
        clientId, clientSecret
    );
}

// async function prettyPrint(jsonData, pre=""){
//     let pretty = "";
//     function capitalize(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//     }
//     for (let key in jsonData){
//         if (jsonData.hasOwnProperty(key)){
//             if (isNaN(key))
//               pretty += pre + capitalize(key) + ": ";
//             else
//               pretty += pre + (parseInt(key) + 1) + ": ";
//             if (typeof jsonData[key] === "object"){
//                 pretty += "\n";
//                 pretty += await prettyPrint(jsonData[key], pre + "    ");
//             }
//             else {
//                 pretty += jsonData[key] + "\n";
//             }

//         }
//     }
//     return pretty;
// }

export let payPalClient = {client: client,
    // prettyPrint:prettyPrint
    };