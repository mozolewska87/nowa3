

const promise = new Promise((resolve, reject) => {
    const objson = {"name": "joanna", "age": "37"};
    resolve(objson);
});

promise
.then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
})
.then((data) => {
    console.log(data.name);
})
.catch((error) => {
    console.error("response: " + error);
});

const promise2=new Promise((resolve,reject)=>{
    const objeson={"name":"namea", "age":"agea"}
    resolve(objeson)
})

promise2
.then((resolveDate)=>{
    return resolveDate
})
.then((trueDate)=>{
    console.log(trueDate.age)
    return(trueDate.age)
})
.catch((error)=>{
    throw new Error("Error")
})

const tryagain=new Promise((resolve, reject)=>{
    setTimeout(()=>{
    const obj={"x":"xy"}
    resolve(obj)},3000)
})

tryagain
.then((obj)=>{
    console.log(obj)
    return obj
})
.then((obj)=>{
    console.log(obj.x)
    return obj.x

})
.catch((error)=>{
throw new Error("komunikat o błędzie")
})


const prom=new Promise((resolve,reject)=>{
    const obj={"imie":"joanna","nazwisko":"moz"}
    resolve(obj)
})

prom
.then(resolve=>{
    console.log(resolve);
    return resolve;
})
.then((date)=>{
    console.log(date.imie)
    return date.imie;
})
.catch((error)=>{throw new Error("error"+error)})


function urlDetector(url){
     return new Promise((resolve,reject)=>{
        fetch(url)
        .then((response)=>response.json())
        .then((date)=> resolve(date))
        .catch((error)=>reject(error))
    })
  
}
urlDetector('http://api.nbp.pl/api/cenyzlota')
.then((response)=>{console.log(response)})
.catch((error)=>console.log(error))




function fooTryNew(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())  // Zwrócenie response.json()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
}

/*fooTryNew('http://api.nbp.pl/api/cenyzlota')
.then((response) => {
    // Przyjmujemy, że odpowiedź jest tablicą obiektów i wybieramy pierwszy element
    if (response.length > 0) {
        const data = response[0];
        document.querySelector("h1").textContent = `Data: ${data.data}, Cena: ${data.cena}`;
    } else {
        document.querySelector("h1").textContent = 'Brak danych';
    }
})
.catch((error) => {
    console.error(error);
    document.querySelector("h1").textContent = 'Błąd: Nie udało się pobrać danych';
});*/


function nowa(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

nowa('http://api.nbp.pl/api/cenyzlota')
.then(response => {    
    if(response.length > 0) {
        const infoNBP = response[0];
        document.querySelector("h1").textContent = `Data: ${infoNBP.data}, Cena: ${infoNBP.cena}`;
    } else {
        document.querySelector("h1").textContent = 'Brak danych';
    }
})
.catch(error => {
    console.error(error);
    document.querySelector("h1").textContent = 'Błąd: Nie udało się pobrać danych';
});

function one(){
    setTimeout(() => {
        console.log("testujemy one")
    }, 2000);
}

async function today(){
    try{
    await one()
    console.log("kiedy to sie wyprintuje ")
}
catch(error){
console.log(error)
}
}

async function fetchDate(){
    try{
    const response= await fetch("http://api.nbp.pl/api/cenyzlota'")
    const waluta=response.json()
    console.log(waluta);}
    catch(error){
        throw new Error(error)
    }
}
fetchDate();


async function nazwa(){
    try{
const response= await fetch("http://api.nbp.pl/api/cenyzlota'");
const odp=  response.json();
console.log(odp);

    }
    catch(error){
        throw new Error(error)
    }
}

nazwa();