import myexpress from 'express'
const app = myexpress()
//  http://localhost:4567/
app.get('/',(req,res)=>{
    res.send("Hey You are From Super Galaxy")
})
//  http://localhost:4567/query?name=newton
app.get('/query',(req,res)=>{
    const a = req.query.name
    res.send(a)
})
//  http://localhost:4567/uri/newton
app.get('/uri/:name',(req,res)=>{
    const a = req.params.name
    res.send(a)
})
//  http://localhost:4567/head
app.get('/head',(req,res)=>{
    const a = req.headers.name
    res.send(a)
})

app.use(myexpress.json())

// http://localhost:4567/body
app.get('/body',(req,res)=>{
    const a = req.body.name
    res.send(a)
})

app.listen(4567)



//import myexpress from 'express'
//From the express Module, all the library are being assigned to a 
//local variable called as myexpress which inturn is a local Module now !!!

//const app = myexpress()
//I am creating a object for myexpress Module, so that I can access the
//library within it.

// app.get('/',(req,res)=>{
//     res.send("Hey You are From Super Galaxy")
// })

// app.get('/home',(req,res)=>{
//     res.send("Hey you are viewing a Home Page")
// })

// app.get('/contact',(req,res)=>{
//     res.send("Hey you are viewing a Contact Us Page")
// })

// app.get('/contact/user',(req,res)=>{
//     res.send("Hey you are viewing a Nested Route Concept Page")
// })

// app.listen(4567)
//  localhost:4567/