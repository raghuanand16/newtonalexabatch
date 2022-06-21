function abc(){
    console.log('Hey I am a single Click')
}

function def(){
    console.log('Hey I am a Double Click')
}

function xyz(){
    console.log(document.getElementById("myId").value)
}

function a(){
    console.log('Mouse Entered')
    document.getElementById("myId2").style.backgroundColor = "red"
}

function b(){
    console.log('Mouse Left')
    document.getElementById("myId2").style.backgroundColor = "yellow"
}

function x(){
    console.log('I am Key Down')
}

function y(){
    console.log('I am Key Press')
}

function z(){
    console.log('I am Key Up')
}

function aa(){
    let a =["Apple","Banana","Custard","Pineapple"]
    console.log(a)
    console.log(a[2])
    console.log(a.length)
    a[3] = "Watermelon"
    console.log(a)
    //for of implement here
    let myData = ""
    for(let data of a){
        myData += data + " "
    }
    console.log(myData)
    document.getElementById("myPara").innerHTML = myData
}