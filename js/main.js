let dialog=document.querySelector(".dialog")
let dialog2=document.querySelector(".dialog2")
let add=document.querySelector(".add")
let form=document.querySelector(".form")
let contener=document.querySelector(".contener")
let arr=[]
let close=document.querySelector(".dclose")


close.onclick=()=>{
    dialog.close();   
}

add.onclick=()=>{
    dialog.show();
   
}

form.onsubmit=(Event)=>{
  
    Event.preventDefault();
    let target=Event.target
   
    let obj={
    id:new Date().getTime(),
    url:target.url.value,
  name:target.dtxt.value,
job:target.job.value,
    }
    if (obj.url=" ") {
      obj.url="/depositphotos_59094779-stock-illustration-profile-icon-male-avatar.jpg"
     
    }
    else { }


  
arr.push(obj)

dialog.close();
render()
}

function render() {



    let views=document.querySelector(".views")
 views.innerHTML=""

arr.forEach(elem => {

let div=document.createElement("div")
let img=document.createElement("img")
let h5=document.createElement("h5")
let p=document.createElement("p")
let btn1=document.createElement("button")
let btn2=document.createElement("button")

div.classList.add("card")
img.classList.add("card-img-top")

h5.classList.add("card-title")
p.classList.add("card-title")

btn1.classList.add("editi")
btn2.classList.add("delit")
btn1.innerHTML = "Delet"
btn2.innerHTML = "Edit"

img.src=elem.url

h5.innerHTML=elem.name
p.innerHTML=elem.job
views.appendChild(div)
div.appendChild(img)
div.appendChild(h5)
div.appendChild(p)
div.appendChild(btn1)
div.appendChild(btn2)



  
  

btn2.onclick=()=>{
    let form1=document.querySelector(".form1")

    dialog2.show() 
  form1.url1.value=elem.url
  form1.dtxt.value=elem.name
  form1.job.value=elem.job

form1.ok.onclick=()=>{
   alert( "инро "+elem.name+" ба ин "+ form1.dtxt.value+' иваз мекуни')
   elem.url=form1.url1.value
   elem.name=form1.dtxt.value
   elem.job=form1.job.value
   
    dialog2.close()
 render() 
   
}

form1.Close.onclick=()=>{
  dialog2.close()
 }
 

}

btn1.onclick=()=>{
    alert(' АНИК УДАЛИТ МЕКУНЕД ХАМИНРО-- '+elem.name)
    del(elem.id)
   function del (id) {
    arr=arr.filter(elem=>elem.id!==id)
    render()
   }

}
// let view=document.querySelector(".view")
// view.innerHTML=""

});

}