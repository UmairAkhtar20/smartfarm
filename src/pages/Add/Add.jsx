import React,{useState,useEffect} from 'react'
import "./add.css"
import Button from '@mui/material/Button';
import axios from "axios";
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import { useSearchParams } from 'react-router-dom';
function Add() {

  useEffect(() => {
    species()
  }, [])
    const [Getbreed, setGetbreed] = useState([])
    const [Getspecies, setGetspecies] = useState([])
    const [Species, setSpecies] = useState('')
    const [Breed, setBreed] = useState('')
    const [Name, setName] = useState("")
    const [Gender, setGender] = useState("")
    const [DOB, setDOB] = useState("")
    const [DOW, setDOW] = useState("")
    const [Status, setStatus] = useState("")
    const [TagNumber, setTagNumber] = useState("")
    const [Origin, setOrigin] = useState("")
    const [BodyScore, setBodyScore] = useState("")
    const [IdentityDate, setIdentityDate] = useState("")
    const [TwiningAbility, setTwiningAbility] = useState("")
    const [Color, setColor] = useState("")
    const [Length, setLength] = useState("")
    const [Heigth, setHeigth] = useState("")
    const [Temprament, setTemprament] = useState("")
    const [MatingAbility, setMatingAbility] = useState("")
    const [Horns, setHorns] = useState("")
    const [MotheringAbility, setMotheringAbility] = useState("")
    const [DoubleBone, setDoubleBone] = useState("")
    const [TestScore, setTestScore] = useState("")
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const handlechange=()=>{
      
     var params = new URLSearchParams();
      params.append("species",Species.value);
      params.append("breed",Breed);
      params.append("name",Name);
      params.append("gender",Gender);
      params.append("dob",DOB);
      params.append("dow",DOW);
      params.append("status",Status);
      params.append("tagnumber",TagNumber);
      params.append("bodyscore",BodyScore);
      params.append("origin",Origin);
      params.append("identitydate",IdentityDate);
      params.append("color",Color);
      params.append("lenght",Length);
      params.append("height",Heigth);
      params.append("temprament",Temprament);
      params.append("mating",MatingAbility);
      params.append("horn",Horns);
      params.append("mothering",MotheringAbility);
      params.append("double",DoubleBone);
      params.append("testscore",TestScore);
      params.append("twining",TwiningAbility); 
     // var request = {
     //   params: params
     // };

      axios.post('https://smart-serverapi.herokuapp.com/api/newanimal',params,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); 
        console.log("species",Species)
        console.log("breed",Breed)
        console.log("name",Name)
        console.log("gender",Gender)
        console.log("dob",DOB)
        console.log('dow',DOW)
        console.log('status',Status)
        console.log('tagnumber',TagNumber)
        console.log('bodyscore',BodyScore)
        console.log('origin',Origin)
        console.log('identitydate',IdentityDate)
        console.log('twining',TwiningAbility)
        console.log('color',Color)
        console.log('lenght',Length)
        console.log('height',Heigth)
        console.log('temprament',Temprament)
        console.log('mating',MatingAbility)
        console.log('horn',Horns)
        console.log('mothering',MotheringAbility)
        console.log('double',DoubleBone)
        console.log('testscore',TestScore)
       /*  <select className="newUserSelect" value ={Species} name="active" id="active" onChange={(e)=>{setSpecies(e.target.value)}}>
        <option>--Select--</option>
           <option value='goats'>Goats</option>
            <option value='bucks' >Bucks</option>
            <option value='calves'>Calves</option>
            <option value='cattle'>Cattle</option>
            <option value='does'>Does</option>
            <option value='rams'>Ram</option>
            <option value='sheep' >Sheep</option>
         */
    }
    const handleInputChange = value => {
      setValue(value);
    };
    const handleInputChange2= value => {
      setValue(value);
    };
    const b2=()=>{
      let options;
      console.log(Getbreed)
      return  options = Getbreed.map(breed =>{
        return {label: breed.Name, value: breed.id}
      })
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
    // handle selection
    const breed = (value) => {
      setSpecies(value);
      console.log("value lable",value.value)
      let s=value.value
        b1(s)

    }
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
    const breedchange=(value)=>{
        setBreed(value)
    }

    return (
        <div className='home'>
            <h1 className="newUserTitle">Add Animal</h1>
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
       onChange={(option) => setBreed(option.value) }
       />
        </div>
        <div className="newUserItem">
          <label> Name</label>
          <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <select className="newUserSelect" value={Gender} name="active" id="active" onChange={(e)=>{setGender(e.target.value)}}>
          <option>--Select--</option>
            <option >	nanny</option>
            <option >billy </option>
          </select>
        </div>
        <div className="newUserItem">
          <label>DOB</label>
          <input type="date" id="birthday" name="birthday" onChange={(e)=>{setDOB(e.target.value)}}/>
        </div>
        <div className="newUserItem">
        <label>Date of weaning</label>
          <input type="Date" id="Dof" name="Dof"onChange={(e)=>{setDOW(e.target.value)}}/>
        </div>
        <div className="newUserItem">
        <label>Status</label>
          <select className="newUserSelect"  value={Status} name="active" id="active" onChange={(e)=>{setStatus(e.target.value)}}>
          <option>--Select--</option>
          <option>Alive</option>
            <option >Dead</option>
            
            <option >Sick</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Tag Number</label>
          <input type="text" placeholder="Tag Number" onChange={(e)=>{setTagNumber(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Body Score</label>
          <input type="text" placeholder="Body Score" onChange={(e)=>{setBodyScore(e.target.value)}}/>
        </div>
        
        <div className="newUserItem">
          <label>Origin</label>
          <select className="newUserSelect" value={Origin}name="active" id="active"onChange={(e)=>{setOrigin(e.target.value)}}>
          <option>--Select--</option>
            <option >USA</option>
            <option >Norway</option>
          </select>
       
        </div>
        <div className="newUserItem">
        <label>Identification Date</label>
          <input type="Date" id="ID" name="ID"onChange={(e)=>{setIdentityDate(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Twining Ability</label>
          <input type="text" placeholder="Twining Ability"onChange={(e)=>{setTwiningAbility(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Color</label>
          <input type="text" placeholder="Color" onChange={(e)=>{setColor(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Length</label>
          <input type="text" placeholder="Length"onChange={(e)=>{setLength(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Height</label>
          <input type="text" placeholder="Height" onChange={(e)=>{setHeigth(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Temprament</label>
          <input type="text" placeholder="Temprament" onChange={(e)=>{setTemprament(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Mating Ability</label>
          <input type="text" placeholder="Mating Ability" onChange={(e)=>{setMatingAbility(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Horns</label>
          <input type="text" placeholder="Horns"onChange={(e)=>{setHorns(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Test Score</label>
          <input type="text" placeholder="Test Score" onChange={(e)=>{setTestScore(e.target.value)}}/>
        </div>
        <div className="newUserItem">
          <label>Double Bone</label>
          <input type="text" placeholder="Double Bone"onChange={(e)=>{setDoubleBone(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Mothering Ability</label>
          <input type="text" placeholder="Mothering Ability" onChange={(e)=>{setMotheringAbility(e.target.value) }}/>
        </div>
        <div className="newUserItem">
        <Button variant="contained" color="success" onClick={handlechange}> Success </Button>
        </div>
      </div>
        </div>
    )
}

export default Add
