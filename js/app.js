import { render, dialog, form, dialog2 } from "./dom.js";
let arr = [];

form.onsubmit = (Event) => {
  Event.preventDefault();
  let target = Event.target;

  let obj = {
    id: new Date().getTime(),
    url: target.url.value,
    name: target.dtxt.value,
    job: target.job.value,
  };
  if ((obj.url = " ")) {
    obj.url =
      "/depositphotos_59094779-stock-illustration-profile-icon-male-avatar.jpg";
  }

  arr.push(obj);

  dialog.close();
  render();
};

function edit(elem, form1) {
  dialog2.show();
  form1.url1.value = elem.url;
  form1.dtxt.value = elem.name;
  form1.job.value = elem.job;
  form1.ok.onclick = () => {
    alert("инро " + elem.name + " ба ин " + form1.dtxt.value + " иваз мекуни");
    elem.url = form1.url1.value;
    elem.name = form1.dtxt.value;
    elem.job = form1.job.value;
    dialog2.close();
    render();
  };
}

function del(id) {
  arr = arr.filter((elem) => elem.id !== id);
  render();
}

export { edit, del, arr };
