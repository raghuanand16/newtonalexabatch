function abc(){
    let a = ["Orange","Vanilla","Pineapple","Apple"]
    a.map(function (myValue){
        console.log('The Fruit Name is '+ myValue)
    })
    let b = [
        {"Name":"Raghav","Age":16},
        {"Name":"Pasha","Age":32},
        {"Name":"Sambha","Age":48}
    ]
    b.map(function(myValue){
        console.log(myValue.Name + ' ' + myValue.Age)
    })
}

function def(){
    let a = ["Orange","Vanilla","Pineapple","Apple"]
    console.log(a.filter(function(myValue){
        return myValue != 'Apple'
    }))
    console.log(a)

    document.getElementById("myId").textContent = a.filter(function(myValue){
        return myValue != 'Apple'
        })
}

function ghi(){
    let a = ["Orange","Vanilla","Pineapple","Apple"]
    console.log(a.reduce(function (temp,myValue){
           //return temp + '' + myValue //Insertion Order  
           return myValue + ' ' + temp //reverse order
    })) 
}

function jkl(){
    let a = ["Orange","Vanilla","Pineapple","Apple"]
    a.forEach(function(myValue){
        console.log(myValue)
    })
}

function mno(){
    aaa = {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      }
    console.log(typeof(aaa))    //object
    let bbb = JSON.stringify(aaa)  
    console.log(typeof(bbb))    //string
    let jsonParse = JSON.parse(bbb)
   console.log(typeof(jsonParse))   //Object
}

function pqr(){
    let a = "              India               "
    console.log(a)
    console.log(a.trim())
}

function stu(){
    let a = ["Orange","Vanilla","Pineapple","Apple"]
    console.log(...a)
    let b = [
        {"Name":"Raghav","Age":16},
        {"Name":"Pasha","Age":32},
        {"Name":"Sambha","Age":48}
    ]
    console.log(...b)
    let c = "India"
    console.log(...c)
}
