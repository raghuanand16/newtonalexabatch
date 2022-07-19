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

function dom()
{
    console.log(document.getElementById("myId").innerHTML)  //Venus
    console.log(document.getElementById("myId").innerText)  //venus
    console.log(document.getElementById("myId").textContent)    //venus
    console.log(document.getElementsByClassName("myClass")[0].innerHTML)   //Earth
    console.log(document.getElementsByClassName("myClass")[0].innerText)   //Earth
    console.log(document.getElementsByClassName("myClass")[0].textContent) //Earth
    console.log(document.getElementsByTagName("h1")[0].innerHTML)  //Pluto
    for(let i=0;i<document.getElementsByTagName("p").length;i++)
    {
        console.log(document.getElementsByTagName("p")[i].innerHTML)    //Mars, Jupitor, Earth
    }
    console.log(document.getElementsByTagName("p")[0].innerHTML)    //Mars
    console.log(document.getElementsByTagName("p")[1].innerHTML)    //Jupitor
    console.log(document.getElementsByTagName("p")[2].innerHTML)    //Earth
    console.log(document.getElementsByName("hello")[0].innerHTML)   // venus

    document.getElementById("myId").innerHTML = "Mercury"
    console.log(document.getElementById("myId").innerHTML)

    //1st Method
    console.log(document.getElementsByName("firstName")[0].value)
    console.log(document.getElementsByName("lastName")[0].value)

    //2nd Method
    console.log(document.forms["myForm"]["firstName"][0].value)
    console.log(document.forms["myForm"]["firstName"][1].value)
    console.log(document.forms["myForm"]["firstName"][2].value)
    console.log(document.forms["myForm"]["lastName"].value)
}

function assignFunction(){
    const formFieldsData = {
        name: document.forms["assignForm"]["name"].value,
        email: document.forms["assignForm"]["email"].value,
        password: document.forms["assignForm"]["password"].value
    }
    console.log(formFieldsData)
    let a = signUpFormValidation(formFieldsData)    //error Object
    //a = error object = {
      //  name:'Name should be atleast 4 chars and less than 20 chars' or ''
    // , password: 'Password should be atleast 6 chars and less than 30 chars' or '', 
    //email: 'Not a valid email' or ''}

    document.getElementById("namelabel").innerHTML = a.name
    document.getElementById("emaillabel").innerHTML = a.email
    document.getElementById("passwordlabel").innerHTML = a.password
}

const signUpFormValidation = (formData) => {
    const error = {}
    const fields = ['email', 'password', 'name']
    fields.forEach(field => {
        if (!formData[`${field}`]) {
            error[[field]] = `${field} not present`
        }                    
    })
    if (formData.name && (formData.name.length < 3 || formData.name.length > 20)) {
        error['name'] = 'Name should be atleast 4 chars and less than 20 chars'
    }
    if (formData.password && (formData.password.length < 6 || formData.password.length > 30)) {
        error['password'] = 'Password should be atleast 6 chars and less than 30 chars'
    }

    if (formData.email && isEmailAddress(formData.email) === null) {
        error['email'] = 'Not a valid email'
    }
    if (Object.keys(error).length === 0) return null
    return error
}
