
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// POST handler
export async function POST(req: Request) {
    try {
        const body = await req.json(); // Parse JSON body
        const { product } = body; //1st add the object name here

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.productName,//2nd add product name here
                        },
                        unit_amount: product.price * 100, // 3rd add product Price in cents
                    },
                    quantity: 1, //4th add quantity here
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}