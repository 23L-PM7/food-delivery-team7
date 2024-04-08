"use client"
import { useState } from "react";


  export function fetchUsers(){
    const [users, setUsers] = useState([])
    fetch("http://localhost:3000/user/create")
      .then((res) => res.json())
      .then((data) => setUsers(data)).catch((error)=> {
        console.log("aldaa garlaa");
      });
  }