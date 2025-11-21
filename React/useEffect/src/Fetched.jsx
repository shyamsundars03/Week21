import React, { useEffect, useState } from 'react'

const Fetched = () => {

const [user , setUser] = useState([])

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/users")
.then((d)=>d.json())
.then((c)=> setUser(c))
.catch((err)=> console.log(err))

},[])







  return (
    <div>
       <table border="1px" color='red'    >
    <thead>
<tr>
<th>name</th>
<th>email</th>
<th>summa</th>
</tr>
    </thead>
<tbody>

{user.map((i)=>(
<tr key={i.id}  >
<td  >{i.name}</td>
<td  >{i.email}</td>
<td  >{i.phone}</td>

</tr>
))}







</tbody>


       </table>
      
    </div>
  )
}

export default Fetched
