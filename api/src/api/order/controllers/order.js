'use strict';
const stripe = require('stripe')(process.env.STRIPE_KEY );



/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi}) =>({
    async create(ctx){
        const { products} = ctx.request.body;
        // console.log(products, "is quantity")
       
        try {
           
            const lineItems = await Promise.all(
                products.map(async (product) => { 
                 const item = await strapi.service("api::product.product").findOne(product.id)
                 
                 return {

                
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name:item.title,
                        },
                        unit_amount:Math.round(item.price * 100)
                    },
                    quantity: product.quantity
                };
            }) 
            );

        //    const price= await stripe.prices.create(lineItems)
         
        //   console.log(price, "is lineItems")
        //   console.log(lineItems," is price")
         lineItems.forEach(element => {
        //    console.log( element.price_data)
          });

            const session = await stripe.checkout.sessions.create({
                shipping_address_collection:{allowed_countries:['NG',"US", 'CA']},
                payment_method_types:['card'],
               mode: 'payment',
               success_url: `${process.env.CLIENT_URL}?success=true`,
               cancel_url: `${process.env.CLIENT_URL}?cancel=false`,
               line_items:lineItems,
            })
            await strapi.service("api::order.order").create({data:{
                products, stripeId: session.id,
               
            },
            
        });

        return {stripeSession: session}
       } catch (error) {
        ctx.response.status =500
        return {error};
       }
    }
}));

