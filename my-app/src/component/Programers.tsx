import "./programers.css"

interface prog {
    name:string
    lang:string
    experience:number
    companyName:string
    
}
function Programers(props:prog) {
  return (
    <>
        
        <div className="info">
            <h3>{props.name}</h3>
            <h3>{props.lang}</h3>
            <h4>{props.experience}</h4>
            <h4>{props.companyName}</h4>
        </div>
    </>
  )
}

export default Programers