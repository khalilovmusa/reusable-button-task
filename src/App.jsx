import './App.css'
import CustomButton from './components/CustomButton/CustomButton'

function App() {

  return (
    <>
      <CustomButton text={"Click Me!"} />
      <CustomButton />
      <CustomButton warnMessage={"Warning!"} />
      <CustomButton hint={"Hint text"} />
      <CustomButton text={"everything"} warnMessage={"Warn message"} hint={"warning"} />
    </>
  )
}

export default App
