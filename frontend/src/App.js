import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet
} from 'react-router-dom'

// page & layout imports
import Home from './scenes/home/Home'
import ItemDetails from './scenes/itemDetails/ItemDetails'
import ItemsCollection from './scenes/collection/ItemsCollection'
import Checkout from './scenes/checkout/Checkout'
import Confirmation from './scenes/checkout/Confirmation'
import Navbar from './scenes/global/Navbar'
import Infobar from './scenes/global/Infobar'
import CartMenu from './scenes/global/CartMenu'
import NavMenu from './scenes/global/NavMenu'
import UserModal from './scenes/user/UserModal'
import Footer from './scenes/global/Footer'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const MainLayout = () => (
  <>
    <Infobar />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
)

const SuccessLayout = () => (
  <>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
)

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="item/:itemId" element={<ItemDetails />}></Route>
            <Route path="collection" element={<ItemsCollection />}></Route>
          </Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route element={<SuccessLayout />}>
            <Route path="checkout/success" element={<Confirmation />}></Route>
          </Route>
        </Routes>
        <CartMenu />
        <NavMenu />
        <UserModal />
      </BrowserRouter>
    </div>
  )
}

export default App
