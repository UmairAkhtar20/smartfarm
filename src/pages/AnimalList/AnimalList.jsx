import React,{useEffect,useState} from 'react'
import "./animallist.css"
import axios from "axios";
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import { DataGrid } from '@mui/x-data-grid';

export default function AnimalList() {
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const [Getbreed, setGetbreed] = useState([])
    const [Getspecies, setGetspecies] = useState([])
    const [Species, setSpecies] = useState('')
    const [Breed, setBreed] = useState('')
   const [List, setList] = useState([])
    useEffect(() => {
        species()
      }, [])
      const species= ()=>{
        return  axios.get("https://smart-serverapi.herokuapp.com/api/getspecies")
       .then(response =>{
         console.log(response)
         const res =  response.data;
         setGetspecies( response.data)
         console.log(res)
         //return res
         let groups = [];
         groups = res.map((d) => ({
          value: d.id,
           label: d.Name
         }))
      //   console.log(groups)
         return groups;
        // return op;
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       })
     }
     const handleInputChange = value => {
        setValue(value);
      };
      const breedchange=(value)=>{
        setBreed(value)
    }
    const b1= async (s)=>{
        console.log(s)
        var params = new URLSearchParams();
        params.append("value",s);
        var request = {
          params: params
        };
        await axios.get("https://smart-serverapi.herokuapp.com/api/getbreed",request)
        .then(response=>{
          console.log(response)
          const res =  response.data;
          setGetbreed(res)
          console.log(res)
          //return res
          let groups1 = [];
          groups1 = res.map((d) => ({
           value: d.id,
            label: d.Name
          }))
          console.log(groups1)
          return groups1;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }
      const options =  Getbreed.map(user =>{
        return {label: user.Name, value: user.id}
      })
    const breed = (value) => {
        setSpecies(value);
        console.log("value lable",value.value)
        var params = new URLSearchParams();
        params.append("speciestype",value.value);
        var request = {
          params: params
        };
        axios.get("https://smart-serverapi.herokuapp.com/api/getdataspecies",request)
        .then((response)=>{
            console.log(response)
            setList(response.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
        let s=value.value
          b1(s)
         
      }
        const t=(value)=>{
            setBreed(value)
            console.log('species',Species)
            console.log('breed',value)
            var params = new URLSearchParams();
            params.append("speciestype",Species.value);
            params.append("breed",value.value);
            var request = {
              params: params
            };
            axios.get("https://smart-serverapi.herokuapp.com/api/getdata",request)
            .then((response)=>{
                console.log(response)
                setList(response.data)
                
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        const columns=[
            {field: "id", headerName: "ID", width: 190 },
            {field: "Name", headerName: "Name", width: 190 },
            {field: "Type", headerName: "Type", width: 190 },
            {field: "Breed", headerName: "Breed", width: 190 },
            {field: "Gender", headerName: "Gender", width: 190 },
            {field: "Color", headerName: "Color", width: 190 }
             ];
     
                
                   
    return (
        <div className='home'>
            <h1>Animal Data</h1>
            <div className="newUserForm">
         <div className="newUserItem">
                <label>Species</label>
                
                    
                    <AsyncSelect
                    cacheOptions={true}
                    defaultOptions={true}
                    value={Species}
                    
                    
                    loadOptions={species}
                    onInputChange={handleInputChange}
                    onChange={breed}
                            />
                
                    
                
            </div>
            <div className="newUserItem">
                    <label>Breed</label>
                    <Select 
                        placeholder='Select Breed...'
                        isSearchable
                       
                        value={options.label}
                        options={options}
                        onChange={ t}
                />
        </div>
       
            </div>
        
      <div>
      <DataGrid
        rows={List}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
      </div>
        </div>
    )
}
