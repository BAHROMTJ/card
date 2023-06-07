import {edit,del,arr} from "./app.js";

let dialog = document.querySelector(".dialog");
let dialog2 = document.querySelector(".dialog2");
let add = document.querySelector(".add");
let form = document.querySelector(".form");
let contener = document.querySelector(".contener");
let close = document.querySelector(".dclose");
let form1 = document.querySelector(".form1");

function render() {
    let views = document.querySelector(".views");
    views.innerHTML = "";
  
    arr.forEach((elem) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let h5 = document.createElement("h5");
      let p = document.createElement("p");
      let btn1 = document.createElement("button");
      let btn2 = document.createElement("button");
  
      div.classList.add("card");
      img.classList.add("card-img-top");
  
      h5.classList.add("card-title");
      p.classList.add("card-title");
  
      btn1.classList.add("editi");
      btn2.classList.add("delit");
      btn1.innerHTML = "Delet";
      btn2.innerHTML = "Edit";
  
      img.src = elem.url;
  
      h5.innerHTML = elem.name;
      p.innerHTML = elem.job;
      views.appendChild(div);
      div.appendChild(img);
      div.appendChild(h5);
      div.appendChild(p);
      div.appendChild(btn1);
      div.appendChild(btn2);
  
      btn2.onclick = () => {
        edit(elem, form1);
      };
  
      form1.Close.onclick = () => {
        dialog2.close();
      };
  
      btn1.onclick = () => {
        alert(" АНИК УДАЛИТ МЕКУНЕД ХАМИНРО-- " + elem.name);
        del(elem.id);
      };


    });
  }


  close.onclick = () => {
    dialog.close();
  };
  
  add.onclick = () => {
    dialog.show();
  };


  export{
    render,
    dialog,
    form,
    dialog2,
  }