function abc(){
    if(12 < 12)
    {
        console.log(' If - True')
    }

    if(12 < 12)
    {
        console.log('Ifelse - True')
    }
    else{
        console.log('Ifelse - False')
    }
                                
    if(2 > 5)                  
    {
        if(3 < 1)              
        {                       
            console.log('Nested If - True')
        }
    }

    //apple, banana, custard, mango
    var a = 'mango'
    if(a == 'apple'){
        console.log('Kashmir')
    }
    else if(a == 'banana'){
        console.log('Kerala')
    }
    else if(a == 'custard'){
        console.log('Tamil Nadu')
    }
    else{
        console.log('Andhra Pradesh')   
    }

    switch(a){
        case 'apple': console.log('Gujarat')
                      break
        case 'banana': console.log('UP')
                       break
        case 'custard': console.log('MH')
                        break
        case 'mango': console.log('Rajasthan')
                      break
        default: console.log('India')
    }
    let j = ''
    for(let i = 0;i < 5; i++)
    {
        j += i
        console.log(j)
    }
    for(let i = 1; i< 10;i+=2)
    {
        console.log(i)
    }
    
    let xyz = "I am From Planet Jupiter"
    for(let a of xyz)
    {
        console.log(a)  //  character
        console.log(xyz.indexOf(a)) //Index Number
    }

    let mno = {name:"newton",location:"bangalore",instructor:"raghu"}
    console.log(mno)
    for(let b in mno)
    {
        console.log(b)  //key
        console.log(mno[b]) //value
    }

    let def = ["BMW","Audi","Benz","Volvo","Lamborghini"]
    def.forEach(element => {
        console.log(element)
    });
}