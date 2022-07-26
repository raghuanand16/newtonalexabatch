import myexpress from 'express'
const app = myexpress()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const a = ["Apple","Banana","Custard"]
    res.render('index',{myData: a})
})

app.listen(4567)