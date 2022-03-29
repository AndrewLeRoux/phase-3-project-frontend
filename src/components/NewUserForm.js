import React, {useState} from "react";

function NewUserForm({onAddUser}){


    const [formData, setFormData] = useState({
        "name": "",
        "preferences": ""
    })



    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
  
        setFormData({
          ...formData,
          [name]: value 
        })
    }




    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:9292/users",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newUser) => {
            onAddUser(newUser)
        });


    }

    return(
        <div className = "form-container">
        <h1>Create new User</h1>
        <form className = "form" onSubmit={handleSubmit}>
        <input
            type="text"
            name = "name"
            placeholder="Name..."
            onChange={handleChange}
            value={formData.name}
        />
        <br/>
        <input
            type="text"
            name = "preferences"
            placeholder="Preferences..."
            onChange={handleChange}
            value={formData.preferences}
        />
        <br/>
        <button type="submit">Create Profile</button>
        </form>
    </div>
    )
}

export default NewUserForm