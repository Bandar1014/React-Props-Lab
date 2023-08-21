interface serv {
    typeOfServ:string
    price:number
   
    
}
function Service(props:serv) {
  return (
    <>
    <div className="info">
            <h3>{props.typeOfServ}</h3>
            <h3>{props.price}</h3>
        </div>
    </>
  )
}

export default Service