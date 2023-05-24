import { Outlet } from 'react-router-dom'
import Navbar from '../scenes/global/Navbar'
import Infobar from '../scenes/global/Infobar'
import Footer from '../scenes/global/Footer'

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

export default MainLayout
