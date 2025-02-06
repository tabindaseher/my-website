import AuthGuard from "../components/AuthGuard"
import Cart from "../components/cart"


const CartPage = () => {
  return (
    <div>
      <AuthGuard>
      <Cart/>
      </AuthGuard>
    </div>
  )
}

export default CartPage

