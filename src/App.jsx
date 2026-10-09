import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ConfigProvider, App as AntApp } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteProvider from './components/QuoteProvider'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Products from './pages/Products'
import Hospitality from './pages/Hospitality'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const theme = {
  token: {
    colorPrimary: '#FE9F43',
    colorInfo: '#155EEF',
    colorSuccess: '#3EB780',
    colorLink: '#E8862A',
    colorTextBase: '#1B2850',
    fontFamily: 'Nunito, sans-serif',
    borderRadius: 10,
    controlHeight: 40,
    controlHeightLG: 46,
    fontSizeLG: 15,
  },
  components: {
    Button: {
      fontWeight: 700,
      paddingInlineLG: 22,
      primaryShadow: '0 8px 18px -8px rgba(232,134,42,.8)',
      defaultShadow: '0 4px 12px -8px rgba(9,44,76,.35)',
    },
    Collapse: { headerBg: '#ffffff' },
  },
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={theme}>
        <AntApp>
          <QuoteProvider>
            <ScrollToTop />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/hospitality" element={<Hospitality />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </QuoteProvider>
        </AntApp>
      </ConfigProvider>
    </StyleProvider>
  )
}
