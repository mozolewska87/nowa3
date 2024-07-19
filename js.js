


async function nowa(){
    try{
        const response=await fetch('http://api.nbp.pl/api/cenyzlota');
        if(!response.ok){
            throw new Error(response.statusText)
        }
        const data= response.json();
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}
nowa();
console.log("test")