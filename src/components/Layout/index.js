// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

const Layout = () => (
  <div className="layout-container">
    <Header />
    <div className="body-container">
      <Body />
    </div>
    <Footer />
  </div>
)

export default Layout
