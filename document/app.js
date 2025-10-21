async function apicall(){
    let result=await fetch("https://meowfacts.herokuapp.com/");//fetch is the by default get request
    let finalresult=await result.json();
    let ultimateresult=finalresult.data[0]
    document.getElementById('content').innerText=ultimateresult 
     // await:it will wait untill we get the response
}
