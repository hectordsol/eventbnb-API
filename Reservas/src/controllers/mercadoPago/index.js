require("dotenv").config();
const URL=/*process.env.URL_COBRADO || */"http://34.125.90.13:5000/reservas";

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
                success: `${URL}/cobrado`,
                failure: `${URL}/pendiente`,
                pending: `${URL}/fallado`
            },
            auto_return: "approved",
        };

        mercadopago.preferences.create(preference)
            .then((result) => {
                resolve({init_point:result.body.init_point,id:result.body.id});
            })
            .catch((error) => {
                reject(new Error("Error en la creacion del init_point de Mercado Pago"));
            });
    });
}

module.exports = { mercadoPago };
