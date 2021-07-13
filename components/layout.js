import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { Navbar } from './navbar'

export default function Layout({ preview, children, projPreview }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        { preview ? <Alert preview={preview} /> : <> </> }
        { projPreview ? <Alert preview={projPreview} /> : <> </> }
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
