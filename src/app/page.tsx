import Image from "next/image";
import Shop from "./shop";
import Cart from "./cart";
import CartProvider from "./cartProvider";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-7xl font-bold text-white">Shopping Cart</h1>
    
    <div className="flex m-4 justify-between space-x-4">
    <CartProvider> 
    <Shop/>
    
    <Cart/>
    </CartProvider>
    </div>
    </div>
    
    
  );
}
