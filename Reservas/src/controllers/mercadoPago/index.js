require("dotenv").config();
const COBRADO=/*process.env.URL_COBRADO || */"http://34.125.90.13:5001/Reserva/cobrado";
const NOCOBRADO=/*process.env.URL_NOCOBRADO || */"http://34.125.90.13:5001/Reserva/";
const PENDIENTE=/*process.env.URL_PENDIENTE || */"http://34.125.90.13:5001/Reserva/cobrado";
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
                success: COBRADO,
                failure: NOCOBRADO,
                pending: PENDIENTE
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
