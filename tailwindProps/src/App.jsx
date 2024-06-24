import Card from "./Components/Card";
function App() {

  let myObj={
    username:"Chai",
    age:22
  }

  let arr=[1,2,3]

  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="chaiaurcode" />
      <Card username="Shravani"/>
    </>
  )
}

export default App
