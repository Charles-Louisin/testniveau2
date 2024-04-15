import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from "../../img/logo512.png"
import { authContext } from '../../Components/Authprovider';
import './Login.css'

export default function Login() {
    const users = [
        {
            id : 1,
            firstName : 'John',
            lastName : 'Doe',
            userName : 'JohnDoe237',
            email : 'john@example.com',
            passWord : 'john123'
        },
        {
            id : 2,
            firstName : 'Charles',
            lastName : 'Louisin',
            userName : 'CharlesLouisin',
            email : 'charles@example.com',
            passWord : 'charles123'
        },
        {
            id : 3,
            firstName : 'Homer',
            lastName : 'Bush',
            userName : 'HomerBush111',
            email : 'homer@example.com',
            passWord : 'homer111'
        }
    ];


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const {updateUser} = useContext(authContext)



    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()

    // Check if the user is present
    const userIsPresent = users.find(user =>{ return user.userName === username && user.passWord === password});

      if (userIsPresent) {
        // updateUser(userIsPresent)
        navigate(`/`)
      }else {
        alert('User never found')
      }
    };
  return (
    <>
    <main>
        <section className="first-section">
            <section className="second-section">
                    <form  className="inscription" onSubmit={handleSubmit}>
                        <div className="form-header">
                            <Link to={'/'} className="btn"><img className="logo" src={imgLogo} alt="" /></Link>

                            <div className="first-input">
                                <label for="name" className="label">Nom d'utilisateur</label>
                                <input className="barre" type="text" value={username} onChange={e=> setUsername(e.target.value)} placeholder="Ex: Homer Bush"/>
                            </div>

                            <div className="tirth-input">
                                <label for="password" className="label">Mot de passe</label>
                                <input className="barre" type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="***********"/>
                            </div>

                            <div className="angletag">
                                <button type='submit' className='account' >S'INSCRIRE</button>
                            </div>
                        </div>
                    </form>
            </section>
        </section>
        </main>
    </>
  )
}
