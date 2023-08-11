const fetch=require('node-fetch')
const Train=require('./model/model')
const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.url);
const db=mongoose.connection
db.on('error',(error)=>{
    console.log('Error');
})
db.once('connected',(connected)=>{
    console.log('Connected');
})
const option={
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        "companyName":"Train Central",
        "ownerName":"Rahul",
        "rollNo":"2012074",
        "ownerEmail":"rahul@abc.edu",
        "accessCode":"XsYBJd"
    })
}
const data=fetch('http://20.244.56.144/train/register',option).then(res=>{
    return res.json()
}).then(data=>console.log(data)).catch(error=>{
    console.log('Error');
})
//console.log(data);
const option_auth={
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        "companyName":"Train Central",
        "clientID":"5b0fd162-dbc1-4223-982e-a14b410e9ea2",
        "ownerName":"Rahul",
        "ownerEmail":"rahul@abc.edu",
        "rollNo":"2012074",
        "clientSecret":"ymoHrabclPqmBhyH"
    })
}
const data1=fetch('http://20.244.56.144/train/auth',option_auth).then(res=>{
    return res.json()
}).then(data=>console.log(data)).catch(error=>{
    console.log('Error');
})
const option_auth2={
    method:'GET',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3MzU5MzUsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNWIwZmQxNjItZGJjMS00MjIzLTk4MmUtYTE0YjQxMGU5ZWEyIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMTIwNzQifQ.eyw_fmjttx8nfzHBaxpINzaZMYaCOD5On7yLHqXK1pE'
    },
    body:JSON.stringify({
        "companyName":"Train Central",
        "clientID":"5b0fd162-dbc1-4223-982e-a14b410e9ea2",
        "ownerName":"Rahul",
        "ownerEmail":"rahul@abc.edu",
        "rollNo":"2012074",
        "clientSecret":"ymoHrabclPqmBhyH"
    })
}
const data2=fetch('http://20.244.56.144/train/trains',option_auth2).then(res=>{
    return res.json()
}).then(data=>{
    const importData = async () => {
        try {
          await Train.create(data)
          console.log('data successfully imported')

          process.exit()
        } catch (error) {
          console.log('error', error)
        }
      }
    importData();
}).catch(error=>{
    console.log(error);
})
