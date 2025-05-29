import WidgetItem from "@/components/WidgetItem";
import { Product, products } from "@/data/product";
import { ItemCard } from "@/shopping-cart/actions/components/ItemCard";
import { cookies } from "next/headers";

export const metadata = {
    title: 'Carrito de Compras',
    description: 'Carrito de Compras',
};

interface Props {
    product: Product
    quantity: number;
}

const getProductInCart = (cart: { [id: string]: number }) => {

    const prodInCart: Props[] = [];

    for (const id of Object.keys(cart)) {

        const product = products.find((p) => p.id === id);
        if (product) {
            prodInCart.push({ product, quantity: cart[id] });
        }
    }

    return prodInCart
}

export default async function CartPage() {

    const cookieStore = await cookies()
    const cart = JSON.parse(cookieStore.get('cart')?.value || '{}');
    const products = getProductInCart(cart);

    const totalPay = products.reduce((prev, current) => (current.product.price * current.quantity) + prev, 0);

    return (
        <div className="text-3xl font-bold mb-3">
            <h1>Productos agregados</h1>
            <hr className="mb-2 mt-2" />
            <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {
                        products.map(({ product, quantity }) => (
                            <ItemCard key={product.id} product={product} quantity={quantity} />
                        ))
                    }
                </div>

                <div className="flex flex-col w-full sm:w-4/12">
                    <WidgetItem title="Total a Pagar">
                        <div className="mt-2 flex justify-center">
                            <h3 className="text-3xl font-bold text-gray-700">${ (totalPay * 1.15).toFixed(2) }</h3>
                        </div>
                        <span className="font-bold text-center text-gray-500">Impuestos del 15%: ${ (totalPay * 0.15).toFixed(2) }</span>
                    </WidgetItem>
                </div>

            </div>

        </div>
    );
}