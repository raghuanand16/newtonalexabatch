function def(){
    console.log("Mars")
}

function abc(a){    //a gets the function def
    a() // calling the function a = def
}

//abc(def)    //Callback Function



// class Laptop{
//     constructor(){
//         this.keys = 96
//         this.size = "14 inch"
//         this.company = "dell"
//         this.ram = "16 GB"
//     }
//     myInputL(){
//         console.log("Hey I am myInput Method from Class Laptop")
//         console.log(this.ram)
//     }
//     myChargeL(){
//         console.log("Hey I am myCharge Method from Class Laptop")
//     }
// }
// class Tablet extends Laptop{
//     constructor(){
//         this.keys = 99
//         this.size = "10 inch"
//         this.company = "Apple"
//         this.ram = "32 GB"
//     }
//     myChargeT(){
//         console.log("Hey I am myCharge Method from Apple Tab")
//     }
// }
// // function def(){
// //     let myObject1 = new Tablet()
// //     myObject1.myCharge()
// //     myObject1.myInput()
// //     console.log(myObject1.keys)
// //     console.log(myObject1.size)
// //     }

// class Mobile extends Tablet{
//     constructor(){
//         super()
//         // this.keys = 105
//         this.size = "5.1 inch"
//         this.company = "Samsung"
//         this.ram = "4 GB"
//     }
//     myInputM(){
//         console.log("Hey I am myInput Method from Class Mobile")
//         console.log(this.ram)
//     }
//     myChargeM(){
//         console.log("Hey I am myCharge Method from Class Mobile")
//     }
// }
// function abc(){
// let myObject = new Mobile()
// myObject.myCharge()
// myObject.myInput()
// console.log(myObject.keys)
// console.log(myObject.size)
// }

// class Laptop{
//     constructor(a,b){
//         this.keys = a
//         this.size = b
//         this.company = "dell"
//         this.ram = "16 GB"
//     }
//     myInput(){
//         console.log("Hey I am myInput Method from Class Laptop")
//         console.log(this.ram)
//     }
//     myCharge(){
//         console.log("Hey I am myCharge Method from Class Laptop")
//     }
// }
// function abc(){
//     let myObject = new Laptop(96,"14 inch")
//     myObject.myCharge()
//     myObject.myInput()
//     console.log(myObject.keys)
//     console.log(myObject.size)
//     }



// class Laptop{
//     constructor(){
//         this.keys = 96
//         this.size = "14 inch"
//         this.company = "dell"
//         this.ram = "16 GB"
//     }
//     myInput(){
//         console.log("Hey I am myInput Method")
//     }
//     myCharge(){
//         console.log("Hey I am myCharge Method")
//     }
// }
// function abc(){
// let myObject = new Laptop()
// myObject.myCharge()
// myObject.myInput()
// console.log(myObject.ram)
// }
