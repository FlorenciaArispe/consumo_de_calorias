import Form from "./components/Form"

function App() {


  return (
    <>
      <header className="bg-emerald-950 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1>menu</h1>
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Consumo de calorias
          </h1>
        </div>
      </header>

      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
