import chalk from "chalk"

console.log("Hello")
console.log(chalk.bgRed("Hello"))
console.log(chalk.green.italic("Hello"))


// import usermodule from './usermodule'
// const usermodule = require('./usermodule')
// console.log(usermodule.add(5,5))


// import url from 'url'

// const myUrl = 'https://jsonplaceholder.typicode.com/photos'
// //Right now this will behave as a normal string

// const a = url.parse(myUrl)
// //You are converting the normal string into a URL.

// console.log(a.host)
// console.log(a.hostname)
// console.log(a.port)
// console.log(a.protocol)
// console.log(a.path)
// console.log(a.pathname)

// console.log("All from here")
// console.log(a)


// import http from 'http'

// http.createServer((req,res)=>{
//     console.log('Hey I am Jupitor')
//     res.write('Hey I am from planet Jupiter')
//     res.end()
// }).listen(3001)

//locahost:3001/



// import fs from 'fs'

// fs.writeFileSync('Myfile.txt','Hey I am from Pluto')

// fs.unlinkSync('Myfile.txt')

// const os = require('os')
// import os from 'os'
// console.log(os.arch())      //system's arch i.e. 64 or 32
// console.log(os.cpus())      //cpu information
// console.log(os.freemem())   //ram free memory
// console.log(os.platform())  //windows/mac/ubuntu
// console.log(os.hostname())  
// console.log(os.totalmem())  //ram total capacity
//try other methods only


// import process from 'process'

// console.log(process.argv[1])

// console.log(parseInt(process.argv[2])+ parseInt(process.argv[3]))

// for(let i=0;i<10;i+=2){
//     console.log(i)
// }
//0 2 4 6 8 