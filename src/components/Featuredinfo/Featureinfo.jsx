import React,{ useEffect ,useState } from 'react'
import "./Featureinfo.css"
import axios from 'axios';


function Featureinfo() {
    
    const [Animals, setAnimals] = useState([])
    useEffect(() => {
        
        getanimals()
    }, [])
    const getanimals=()=>{
     
        axios.get("https://smart-serverapi.herokuapp.com/api/getanimals")
        .then(function (response){
            console.log(response)
            setAnimals(response.data)
            
        }).catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    return (
        <div className='featured'>
            {Animals.map((animals)=>{
                return (
                    <div className="featuredItem" key={animals.id}>
                        <span className="featuredTitle">{animals.Name}</span>
                        <div className="featuredMoneyContainer">
                        <div className="featuredMoney">{animals.value}</div>
                        </div>
                         </div>
                )
            })}
        </div>
    )
}

export default Featureinfo
