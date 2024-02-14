import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [details,setDetails] = useState([]);
  const [updateButton, setUpdateButton] = useState(false);
  const [editIndex,setEditIndex] = useState(null);

  const handler1 = (event) => {setName(event.target.value)};
  const handler2 = (event) => {setAddress(event.target.value)};

  // console.log( name , address);

  const onSubmit =(event)=>
  { 
    event.preventDefault();
    if(name=="" || address==""){
      alert("All the fields are mandatory");
    }
    else if(updateButton)
    {
       console.log(editIndex);
      details.splice((editIndex),1,{Name:name,Address:address})
      setUpdateButton(false);
      
    }
    else{
    setDetails([...details, {Name:name,Address:address}]);
    // console.log(details);
    }
    setName("");
    setAddress("");
    console.log(details);
  }

  const handleEdit =(index)=>{
    setEditIndex(index);
    setUpdateButton(!updateButton);
    const updatedDetails=details[index];
    // updatedDetails.splice(index,1,);
    // setDetails(updatedDetails);
    console.log(updatedDetails);
    setName(updatedDetails.Name);
    setAddress(updatedDetails.Address);
  };

  const handleDelete =(index)=>{
    const tempDetails=[...details];
    tempDetails.splice(index,1);
    setDetails(tempDetails);
    
  };
  

  return (
      <div className='flex  gap-5 bg-orange-300 h-full w-full p-10 border-2 border-black rounded-2xl text-black'>
        <div className='bg-orange-500 border-2 border-black rounded-2xl h-full w-1/2 text-white '>
          <header className='text-5xl m-5 p-3'>Welcome!</header>

          <input className='w-1/2 m-5 bg-white border-2 border-black rounded-2xl text-black py-2 px-5' type="userName" placeholder='Enter your name' value={name} onChange={handler1} />

          <input className='w-1/2 m-5 bg-white border-2 border-black rounded-2xl text-black py-2 px-5' type="address" placeholder='Enter your address' value={address} onChange={handler2} />
          <br />
          <button onClick={onSubmit} className='bg-white w-1/6 m-5 border-2 border-black rounded-2xl text-black py-2 px-5'>{updateButton?"Edit":"Submit"}</button>
        </div>


        <div className='bg-orange-500 border-2 border-black rounded-2xl h-full w-1/2 text-white '>
          <table className='w-full text-center '>
            <thead className='text-black text-xl'>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {details.map((detail,index) => (
              <tr key={index} >
                  <td>{detail.Name}</td>
                  <td>{detail.Address}</td>
                  <td>
                    <button className='border-2 border-black rounded-2xl bg-green-500 h-full w-1/4 m-1 px-1 text-sm' onClick={()=>{handleEdit(index)}}>Edit</button>
                    <button className='border-2 border-black bg-red-600 rounded-2xl h-full w-1/4 m-1 px-2 text-sm' onClick={()=>{handleDelete(index)}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
} 

export default App;
