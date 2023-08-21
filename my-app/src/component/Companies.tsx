import Service from "./Service"
interface comp {
    Cname:string
    emplNumber:number
    year:number
    
}
function Companies(props:comp) {
  return (
    <>
    <div className="info">
            <h3>{props.Cname}</h3>
            <h3>{props.emplNumber}</h3>
            <h4>{props.year}</h4>
        </div>
        <h1>Services</h1>
        <Service typeOfServ={"software"} price={2000}/>


    </>
  )
}

export default Companies