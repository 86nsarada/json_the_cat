const request = require('request')

const fetchBreed = () => {

    request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error,respose,body)=> {

        if(error){
            console.log(error)
        }

        if(respose.statusCode === 200){
            let parsedData = JSON.parse(body)
            console.log(parsedData)
        
        }
        else{
            console.log(respose.statusMessage)
        }
    })

}

fetchBreed();
