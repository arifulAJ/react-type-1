
interface studentArray{
    names:{ id:number
     rool:number
     url:String |undefined
     name:String
     house:String}[]
 }
 
 
 
  const Props:React.FC<studentArray>  =( {names}):JSX.Element=> {
    const studernts=()=>{
      return(
       <div >
          
       {names.map(name=>
     
       {
           
           return(
              <div className="grid"   key={name.id}>
 {/*               
                   <h1>{name.name}</h1>
               <h4>{name.house}</h4>
               <p>{name.id}</p>
               <p>{name.rool}</p> */}
               <div className="row row-cols-1 row-cols-md-2 g-4">
   <div className="col">
     <div className="card">
       {/* <img className="card-img-top" src={name.url} alt="..."/> */}
       <div className="card-body">
         <h5 className="card-title">{name.name}</h5>
         <p className="card-text">{name.house}</p>
         <p className="card-text">{name.id}</p>
         <p className="card-text">{name.url}</p>
      
       </div>
     </div>
   </div>
   </div>
              </div>
           )
       })}
   </div>
      )
    }
    
      
     return (
       <div >
          
           {/* {props.names.map(name=>
         
           {
               
               return(
                  <div    key={name.id}>
                   
                       <h1>{name.name}</h1>
                   <h4>{name.house}</h4>
                   <p>{name.id}</p>
                   <p>{name.rool}</p>
                  </div>
               )
           })} */}
           <div>
          { studernts()}
           </div>
       </div>
     )
   }
 
 
 export default Props