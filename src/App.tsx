import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {


  const [ state , dispatch ] = useReducer(activityReducer , initialState)

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
          <Form 
          dispatch={dispatch}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-6xl bg-emerald-950">
        <ActivityList
        activities={state.activities}
        />
      </section>
    </>
  )
}

export default App
