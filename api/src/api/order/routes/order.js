const stripe = require('stripe')(process.env.STRIPE_KEY);

'use strict';

/**
 * order router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::order.order', ({stripe}) =>({
    async create(ctx){
        const { products} = ctx.requesr.body;
        const lineItems = await promise.all(
           products.map(async (product) => { 
            const item = await strapi.service("api:product.product").findOne(product.id)
           return {
                price_data:{
                    currency:"ngn",
                    product_data:{
                        name:item.title,
                    },
                    unit_amount:item.price*100
                },
                quantity: item.quantity
            };
        }) 
        )
       try {
        const session = await stripe.checkout.session.create({
           mode: 'payment',
           success_url: `${process.env.CLIENT_URL}?success=true`,
           cancel_url: `${process.env.CLIENT_URL}?cancel=false`,
           line_items:lineItems,
           shipping_address_collection:{allowed_countries: ["NG"]},
           payment_method_types:['card']
        })
        await strapi.service("api::order:order").create({data:{
            products, strpeId: session.id,
        },
    });
    return {stripeSession: session}
       } catch (error) {
        ctx.response.status =500
        return error
       }
    }
}));
