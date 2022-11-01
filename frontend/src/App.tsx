import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="dsmeta-sales">
          <SalesCard />
        </section>
      </main>
    </>
  )
}

export default App
