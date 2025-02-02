// Cart.tsx (Cart Component)
'use client'




import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IProduct } from '../../../types/product';


interface CartProps {
  initialProducts?: IProduct[];  // Allow passing products as props (optional)
}

const Cart = ({ initialProducts }: CartProps) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts || [])
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const router = useRouter()

  useEffect(() => {
    if (!initialProducts) {
      const cart = JSON.parse(localStorage.getItem("cart") || "{}")
      const item = Object.values(cart) as IProduct[]
      setProducts(item)

      const total = item.reduce<number>((acc: number, product: IProduct) => {
        const quantity = product.quantity ?? 0;  // Use 0 if quantity is undefined
        return acc + (product.price * quantity);
      }, 0)
      setTotalAmount(total)
    }
  }, [initialProducts])

  const handleRemoveItem = (productName: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}")
    delete cart[productName]
    localStorage.setItem("cart", JSON.stringify(cart))

    const updatedProducts: IProduct[] = Object.values(cart)
    setProducts(updatedProducts)

    const total = updatedProducts.reduce<number>((acc: number, product: IProduct) => {
      const quantity = product.quantity ?? 0;
      return acc + (product.price * quantity);
    }, 0)
    setTotalAmount(total)
  }

  const handleClearCart = () => {
    localStorage.removeItem("cart")
    setProducts([])
    setTotalAmount(0)
  }

  const handleCheckout = () => {
    router.push('/checkout')
  }

  const handleIncreaseQuantity = (productName: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}")
    const product = cart[productName]
    if (product) {
      product.quantity += 1
      cart[productName] = product
      localStorage.setItem("cart", JSON.stringify(cart))

      const updatedProducts: IProduct[] = Object.values(cart)
      setProducts(updatedProducts)

      const total = updatedProducts.reduce<number>((acc: number, product: IProduct) => {
        const quantity = product.quantity ?? 0;
        return acc + (product.price * quantity);
      }, 0)
      setTotalAmount(total)
    }
  }

  const handleDecreaseQuantity = (productName: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}")
    const product = cart[productName]
    if (product && product.quantity > 1) {
      product.quantity -= 1
      cart[productName] = product
      localStorage.setItem("cart", JSON.stringify(cart))

      const updatedProducts: IProduct[] = Object.values(cart)
      setProducts(updatedProducts)

      const total = updatedProducts.reduce<number>((acc: number, product: IProduct) => {
        const quantity = product.quantity ?? 0;
        return acc + (product.price * quantity);
      }, 0)
      setTotalAmount(total)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-4xl font-bold text-center mb-6 underline">Your Cart</h2>

      <div className="flex flex-col space-y-6">
        {products.map((item) => (
          <div key={item.productName} className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <Image 
                src={item.imageUrl} 
                alt={item.productName}
                width={100}
                height={100}
                className="rounded-lg object-cover" 
              />
              <p className="text-xl font-semibold">{item.productName}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleDecreaseQuantity(item.productName)} 
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  -
                </button>
                <p className="font-medium text-lg">{item.quantity}</p>
                <button 
                  onClick={() => handleIncreaseQuantity(item.productName)} 
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
              </div>

              <p className="font-medium text-lg">${item.price.toFixed(2)}</p>
              <p className="font-medium text-lg text-green-600">${((item.quantity ?? 0) * item.price).toFixed(2)}</p>

              <button 
                onClick={() => handleRemoveItem(item.productName)} 
                className="text-black hover:bg-red-700 p-2 bg-red-600 rounded-lg hover:font-bold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8 font-bold text-xl">
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mt-6">
        <button 
          onClick={handleClearCart} 
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Clear Cart
        </button>

        <button 
          onClick={handleCheckout} 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>

   
      

  )
}

export default Cart;
