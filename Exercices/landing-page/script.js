import { METHODS } from 'http';
let myHeaders = new Headers({"Content-Type": "application/json"})
let form = document.getElementById("name");
document.getElementById("click",)
let authorVlalue= document.getElementById("auteur").Value;
let commentValeur=document.getElementById("comment").Value;
let body ={
  "auteur":authorVlalue,
  "comment":commentValeur
}
console.log(JSON.stringify(body))
  fetch("https://quotes-light-api.herokuapp.com/api/comments/",{
    method="POST",
    Headers=myHeaders,
    body: JSON.stringify(body)
  } )
  let getcomment()=>{
    fetch("https://quotes-light-api.herokuapp.com/api/comments/",{
      method="POST",
  })
  .then(Response =>{
    console.log(Response)
    let data=Response;µ

  })