let body = document.body
let enter = document.getElementById("enter")
let hammasi = document.getElementById("hammasi")
let hammasi2 = document.getElementById("hammasi2")




enter.addEventListener("input",(e)=>{
    hammasi.innerHTML = ``
    
   let url = `https://api.nationalize.io/?name=${enter.value}`
   
    fetch(url,{
    method:"GET",
    headers:{
        "Content-Type": "application/json",
    }
}).then((respons)=>{
    return respons.json()
}).then((data)=>{
    console.log(data)
    hammasi.innerHTML = `
    <h3>${data.country[0].country_id}</h3>
    <h3>${data.country[1].country_id}</h3>
    <h3>${data.country[2].country_id}</h3>
    <h3>${data.country[3].country_id}</h3>
    <h3>${data.country[4].country_id}</h3>
    <h3>${data.country[0].probability}</h3>
    <h3>${data.country[1].probability}</h3>
    <h3>${data.country[2].probability}</h3>
    <h3>${data.country[3].probability}</h3>
    <h3>${data.country[4].probability}</h3>
    `
    
    })

})