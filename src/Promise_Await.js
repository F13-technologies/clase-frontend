import React, { Fragment, useState, useEffect } from 'react';
import 'antd/dist/antd.css'
import './App.css';

//hook
function App() {

  useEffect(() => {
    sendEmailUsers()
  }, [])

  const sendEmailUsers = async () => {
    const users = [
      { email: "test1@gmail.com" },
      { email: "test2@gmail.com" },
      { email: "test3@gmail.com" },
    ]

    for (const user of users) {
      console.log("Enviando correo...")
      await sendEmail(user.email)
      console.log("Correo enviado")
    }
    console.log("Termino")
  }

  const sendEmail = async (email) => {
    try {
      //Enviamos correo
      const result = await getUsers('api')
      console.log("Se envío el correo", result)
      return { success: 'OK', email }
    } catch (e) {
      return { error: 'CATCH', error: e }
    }
  }

  const myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hola que hace"), 1000)
    })
  }

  return (
    <div className="App">
    </div>
  );
}


const getUsers = (endPoint, data) => {
  return fetch(`https://randomuser.me/${endPoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
}


export default App