import React, {useState} from "react";

function NewUserForm({onAddUser, users}){

    const [formData, setFormData] = useState({
        name: "",
        education: false,
        recreational: false,
        social: false,
        diy: false,
        charity: false,
        cooking: false,
        relaxation: false,
        music: false,
        busywork: false
    })

    function handleChange(e){
        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
  
        setFormData({
          ...formData,
          [name]: value 
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(users.find(user => user.name == formData.name)){
            alert("this user already exisits")
        }
        else{
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
    }
    return(
        <div className = "form-container">
        <h2 className = "titles">Create new User</h2>
        <form className = "form" onSubmit={handleSubmit}>
        <input
            type="text"
            name = "name"
            placeholder="Name..."
            onChange={handleChange}
            value={formData.name}
        />
        <br/>
        <h3 id= "preferences">Activity Preferences</h3>
        <label>
        Education
        <input
            type="checkbox"
            name = "education"
            onChange={handleChange}
            value={formData.education}
        />
        </label>
        <br/>
        <label>
        Recreational
        <input
            type="checkbox"
            name = "recreational"
            onChange={handleChange}
            value={formData.recreational}
        />
        </label>
        <br/>
        <label>
        Social
        <input
            type="checkbox"
            name = "social"
            onChange={handleChange}
            value={formData.social}
        />
        </label>
        <br/>
        <label>
        DIY
        <input
            type="checkbox"
            name = "diy"
            onChange={handleChange}
            value={formData.diy}
        />
        </label>
        <br/>
        <label>
        Charity
        <input
            type="checkbox"
            name = "charity"
            onChange={handleChange}
            value={formData.charity}
        />
        </label>
        <br/>
        <label>
        Cooking
        <input
            type="checkbox"
            name = "cooking"
            onChange={handleChange}
            value={formData.cooking}
        />
        </label>
        <br/>
        <label>
        Relaxation
        <input
            type="checkbox"
            name = "relaxation"
            onChange={handleChange}
            value={formData.relaxation}
        />
        </label>
        <br/>
        <label>
        Music
        <input
            type="checkbox"
            name = "music"
            onChange={handleChange}
            value={formData.music}
        />
        </label>
        <br/>
        <label>
        Busywork
        <input
            type="checkbox"
            name = "busywork"
            onChange={handleChange}
            value={formData.busywork}
        />
        </label>
        <br/>
        <button className="loginButton" type="submit">Create Profile</button>
        </form>
    </div>
    )
}

export default NewUserForm