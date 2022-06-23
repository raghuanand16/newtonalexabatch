function myArray(){
    let a = ["red","yellow","orange","pink"]
    console.log(a.length)
    console.log(a[0])
    a.push("black")
    console.log(a)
    a.pop()
    console.log(a)
    a.shift()
    console.log(a)
    a.unshift("blue")
    console.log(a)
    a[1] = "green"
    console.log(a)
    let b = ["rebeccapurple","cyan","wheat"]
    let c = a.concat(b)
    console.log(c)
    console.log(c.toString())
    console.log(a)
    a.splice(1,1)
    console.log(a)
    a.splice(1,0,"grey")
    console.log(a)
    a.splice(1,0,"white","lemon")
    console.log(a)
    a.sort()
    console.log(a)
    a.reverse()
    console.log(a)
}

function myString(){
    let a = "UnitedKingdom"
    console.log(a.length)
    console.log(a.charAt(5))
    console.log(a.lastIndexOf("d"))
    console.log(a.indexOf("d"))
    let b = "Hey Hru India"
    console.log(b.split(" "))
    console.log(a.match("K"))
    console.log(a.replace("dom","red"))
    //implement for of !!
    //implement for in !!
    console.log(a.toLowerCase())
    console.log(a.toUpperCase())
    console.log(a.charCodeAt(5))    //unicode value for that character
    console.log(a.startsWith("K",7))
    let c = "Hey I\n am New Here"
    console.log(c)
}

function myNumber(){
    let a = 1.6754
    console.log(a.toString())
    console.log(a.toExponential(2))
    console.log(a.toFixed(7))
    console.log(Math.PI)
    console.log(Math.sqrt(16))
    console.log(Math.pow(2,2))
    console.log(Math.max(10,7,14,12,8))
    console.log(Math.min(10,7,14,12,8))
    console.log(Math.sin(90))
    console.log(Math.cos(0))
    console.log(Math.ceil(a))   //2
    console.log(Math.floor(a))  //1
    console.log(Math.round(a))  // <0.5 it will be 1 > 0.5 it will be 2
    //Secret behind ludo king
    console.log(Math.random())  // value from 0 to 1
    console.log(Math.ceil(Math.random()*6))
}

function myDate(){
    let a = new Date()
    console.log(a)
    console.log(a.getFullYear())
    // document.getElementById("myID").innerHTML = a.getDate()
    // a.getFullYear
    // a.getDate
    // a.getDay
    // a.getHours
    // a.getMilliseconds
    // a.getMinutes
    // a.getMonth
    // a.getSeconds
    // a.Time 
    let b = new Date()
    b.setDate(26)

    document.getElementById("myId2").innerHTML = b
    // document.getElementById("myId1").innerHTML = Date.now()
    a.set

}

