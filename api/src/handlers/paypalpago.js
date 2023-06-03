const request = require('request');
require('dotenv').config();
const {clientId,secretKey} = process.env;

const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
const auth = {user: clientId, pass:secretKey};

const paypalpago = (req,res)=>{
    const body = req.body;
    request.post(`${PAYPAL_API}/v2/checkout/orders`,{
        auth,
        body,
        json:true
    },(err,response)=>{
        res.json({data:response.body})
    })
}
module.exports = paypalpago;
