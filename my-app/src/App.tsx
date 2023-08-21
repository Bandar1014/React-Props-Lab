import Programers from "./component/Programers"
import Companies from "./component/Companies"
function App() {

  return (
    <>
      <h1>Programers</h1>
      <Programers name={"Bandar"} lang={"Java"} experience={5} companyName="Google"/>
      <Programers name={"Khalid"} lang={"Flutter"} experience={5} companyName="Huawei"/>
      <Programers name={"Mohammed"} lang={"JavaScript"} experience={5} companyName="Samsung"/>
      <h1> companies  </h1>
      <Companies Cname={"Google"} emplNumber={1000} year={1900}/>
      <Companies Cname={"Microsoft"} emplNumber={100} year={1950}/>
    </>
  )
}

export default App
