require("dotenv").config();
const URL_FRONT=process.env.URL_FRONT || "http://localhost:3000";
const mercadopago = require('mercadopago');
const PROD_ACCESS_TOKEN = "TEST-4465147778510372-071816-112ca063200d513d7b6b5fa6eef87341-164451778";

mercadopago.configure({
    sandbox: true,
    access_token: PROD_ACCESS_TOKEN,
});

function mercadoPago({ _id, monto, descripcion }) {

    return new Promise((resolve, reject) => {
        const preference = {
            items: [
                {
                    title: descripcion,
                    unit_price: parseFloat(monto),
                    quantity: 1,
                }
            ],
            back_urls: {
                success: URL_FRONT,
                failure: "www.google.com",
                pending: "www.google.com"
            },
            auto_return: "approved",
        };

        mercadopago.preferences.create(preference)
            .then((result) => {
                resolve(result.body.init_point);
            })
            .catch((error) => {
                reject(new Error("Error en la creacion del init_point de Mercado Pago"));
            });
    });
}

module.exports = { mercadoPago };
