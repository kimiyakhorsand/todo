const inputt = document.getElementById("inputt");
const textareaa = document.getElementById("textareaa");
const buttonn = document.getElementById("buttonn");
const mainlist = document.getElementById("main");




function gettodo() {
  const savedTodos = localStorage.getItem("todosList");
  return JSON.parse(savedTodos)?.sort((a,b) => a.id - b.id) || [];
  }
  
  let savedTodos2 = [...gettodo()];





  

  function creatnewtodo  (inputtt , textareaaa , id , checked)  {



    const lii = document.createElement('li');
    lii.id = id;

    const h33 = document.createElement('h3')
    
  const todoInput = document.createElement("input");
  todoInput.disabled = true;
  // todoInput.className = "title-input";
  todoInput.defaultValue = inputtt;
  h33.appendChild(todoInput);
  h33.style.backgroundColor = "green";
    


    h33.style.backgroundColor = "red"

    const kk = document.createElement('p')
    kk.innerHTML = textareaaa;

    lii.appendChild(h33);
    lii.appendChild(kk);
    mainlist.appendChild(lii);

    const showbutton = `<div>
    <button>del</button>
    <button>Edit</button>
    <button>check</button>
    </div>`

    lii.innerHTML += showbutton;

    if (!inputt.value) return handelalarem('YOU DONT ENTER any THING!!!')

    checked = false;

    if (checked) {
      h33.style.backgroundColor = "green"
    }

    }
    













buttonn.addEventListener("click" , (e)=> {
    e.preventDefault();

    console.log('mmmmm')


    

// function gettodo() {
// const savedTodos = localStorage.getItem("todosList");
// return JSON.parse(savedTodos)?.sort((a,b) => a.id - b.id) || [];
// }

// let savedTodos2 = [...gettodo()];



    // const vinput = inputt.value;
    

  //   function creatnewtodo  (inputtt , textareaaa , id , checked)  {



  //   const lii = document.createElement('li');
  //   lii.id = id;

  //   const h33 = document.createElement('h3')
    
  // const todoInput = document.createElement("input");
  // todoInput.disabled = true;
  // // todoInput.className = "title-input";
  // todoInput.defaultValue = inputtt;
  // h33.appendChild(todoInput);
  // h33.style.backgroundColor = "green";
    


  //   h33.style.backgroundColor = "red"

  //   const kk = document.createElement('p')
  //   kk.innerHTML = textareaaa;

  //   lii.appendChild(h33);
  //   lii.appendChild(kk);
  //   mainlist.appendChild(lii);

  //   const showbutton = `<div>
  //   <button>del</button>
  //   <button>Edit</button>
  //   <button>check</button>
  //   </div>`

  //   lii.innerHTML += showbutton;

  //   if (!inputt.value) return handelalarem('YOU DONT ENTER any THING!!!')

  //   checked = false;

  //   if (checked) {
  //     h33.style.backgroundColor = "green"
  //   }

  //   }
    

    const newtodo = {
      inputtt : inputt.value ,
      textareaa : textareaa.value,
      checked : false,
      id : Date.now()
    };


    
savedTodos2.push(newtodo);
console.log(savedTodos2);

localStorage.setItem("todosList", JSON.stringify(savedTodos2));

// creatnewtod(newtodo.inpu, newtodo.textar, newtodo.checked);



    // function rendertodo() {
    //   gettodo().forEach((todo) =>
    //   creatnewtod(todo.inpu,todo.textare,todo.id,todo.checked)
    //   )
    // }
    // rendertodo();

    

    creatnewtodo(newtodo.inputtt, newtodo.textareaaa, newtodo.checked,newtodo.id);

    




   
// function rendertodo() {
//   gettodo().forEach((todo) =>
//   creatnewtodo(todo.inputvalue,todo.textarevalue,todo.id,todo.checked)
//   );
// }
// rendertodo(); 





})


function rendertodo() {
  savedTodos2.forEach((todo) =>
  creatnewtodo(todo.inputtt,todo.textareaa,todo.id,todo.checked)
  );
}
// rendertodo(); 



// function gettodo() {
//   const savedTodos = localStorage.getItem("todosList");
//   return JSON.parse(savedTodos)?.sort((a,b) => a.id - b.id) || [];
//   }
  
//   let savedTodos2 = [...gettodo()];


// function rendertodo() {
//   gettodo().forEach((todo) =>
//   creatnewtodo(todo.inputvalue,todo.textarevalue,todo.id,todo.checked)
//   );
// }
// rendertodo();

const arr1 = [100,200,300];
const arr2 = [300,400,600];

const merge = [...arr1, ...arr2]
console.log(merge);



let  isfoc = false;

const foralarm = document.getElementById("alert");
foralarm.style.display = "none";

const handelalarem = (msg , iD) => {
  foralarm.style.display ="flex";
  foralarm.children[0].innerHTML = msg;
  foralarm.children[1].addEventListener("click" , () =>{
    foralarm.style.display ="none"
  })

  setTimeout(function () {
    foralarm.style.display = "-100%";
    // foralarm.style.display ="none"

  } , 3000);

  
  // foralarm.children[1].addEventListener("click" , () =>{
  //   foralarm.style.display ="none"
  // })

}


const date = new Date();
console.log(date.getDay);
console.log(date.getTime);








mainlist.addEventListener("click" , (e)=> {
  // e.preventDefault()
  if(e.target.innerText === "del") {
    const todoEl = e.target.parentElement.parentElement;
  console.log(e.target.parentElement.parentElement.remove());

  
  
  const filtredTodos = gettodo().filter(
    (item) => item.id !== Number(todoEl.id));
    console.log(filtredTodos);
    savedTodos2 = filtredTodos;

    
  
  localStorage.setItem("todosList", JSON.stringify(filtredTodos));
  savedTodos2 = filtredTodos;
  // location.reload();
  mainlist.innerHTML=""
  rendertodo();
 } else if (e.target.innerText === "check") {

  const todoEl = e.target.parentElement.parentElement;

  const filtredTodo = savedTodos2.filter(
    (item) => item.id === Number(todoEl.id) // negah madare
  );
  const updateFiltredTodo = { ...filtredTodo[0], checked: true };
  const filtredTodos = gettodo().filter(
    (item) => item.id !== Number(todoEl.id) // hazfe mikone
  );

  const updateSavedTodos = [...filtredTodos, updateFiltredTodo]; // on avali ro hazfe karde va check true ro jaygozin karde.
  localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
  // location.reload();
  
  mainlist.innerHTML=""
  rendertodo();
  

} else if (e.target.innerText === "Edit") {
  const todoEl = e.target.parentElement.parentElement;
  todoEl.children[0].children[0].disabled = false;
  todoEl.children[0].children[0].select();
  todoEl.children[0].children[0].style.backgroundColor = "blue";
  e.target.innerText = "SAVE";
  e.target.addEventListener("click", () => {
    const filtredTodo = savedTodos.filter(
      (item) => item.id === Number(todoEl.id)
    );
    const updateFiltredTodo = { ...filtredTodo[0], title: todoEl.children[0].children[0].value };

    const filtredTodos = gettodo().filter(
      (item) => item.id !== Number(todoEl.id)
    );
    const updateSavedTodos = [...filtredTodos, updateFiltredTodo];
    localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
    // location.reload();
    
  mainlist.innerHTML=""
  rendertodo();
  });
}




})



// for button :.
const test2 =document.querySelector('test2')

document.querySelectorAll('button').forEach(function(item,index) {
  item.addEventListener("click" , () => {
    // if(document.getElementById('test2').focus()) 
      // document.getElementById('test2').value += index-1;
    // else document.getElementById('test').value += index -1;

    if(isfoc) document.getElementById('test2').value += index-1
    else document.getElementById('test').value +=index-1

    
    console.log('run with index' , +item.innerText)
    console.log('run with index' , index)
    // document.getElementById('test').value += index-1;
  })

});

document.querySelector('span').addEventListener('click' , () => {
  document.getElementById('test2').focus()
  isfoc = true;
})

  const equal = document.querySelector('strong')

  equal.addEventListener('click' , () => {
    const result = parseInt(document.getElementById('test').value) + parseInt(document.getElementById('test2').value);
    equal.innerHTML = result;

  });

  
  const handel = (m) => {
    // name.preventDefault;
    // const uppercace = name.toUppercase();
    // console.log(uppercace); 
    // const splitted = uppercace.splitt();
    // console.log(`hi {splitted}`)
  
            // e.preventDefault();
            const uppercace = m.toUpperCase();
  
            const spilled = uppercace.split(" ");
            const joinbyy = spilled.join("_");
            document.body.append((document.createElement("h2").innerHTML = joinbyy));
  
  
            console.log(spilled);
            console.log({joinbyy});

  }

  handel("kimiya khorsand")



































  
// const todoTitle = document.getElementById("title");
// const todoDesc = document.getElementById("desc");
// const mainList = document.getElementById("main");
// // import { toastify } from "./../components/toastify.js";

// const savedLCTodos = localStorage.getItem("todosList");
// const parseSavedLCTodos = JSON.parse(savedLCTodos) || [];
// let savedTodo = [...parseSavedLCTodos];

// const createNewTodo = (title, desc, id, checked) => {
//   // create a list item for new todo
//   const listItem = document.createElement("li");
//   listItem.className = "list-item";
//   listItem.id = id;
//   // listItem.setAttribute("class", "list-item");

//   const todoTitleHeading = document.createElement("h3");
//   const todoTitleInput = document.createElement("input");
//   todoTitleInput.disabled = true;
//   todoTitleInput.className = "title-input";
//   todoTitleInput.defaultValue = title;
//   todoTitleHeading.appendChild(todoTitleInput);
//   todoTitleHeading.style.backgroundColor = "orange";
//   if (checked) {
//     todoTitleHeading.style.backgroundColor = "green";
//   }

//   const todoDescPara = document.createElement("p");
//   todoDescPara.innerHTML = desc;

//   // put h3 and p into our listItem
//   listItem.appendChild(todoTitleHeading);
//   listItem.appendChild(todoDescPara);

//   // cretae action buttons for our todo
//   const todoActions = `<div>
//       <button>DEL</button>
//       <button>EDIT</button>
//       <button>CHECK</button>
//       </div>`;

//   //put  action buttons to our listItem
//   listItem.innerHTML += todoActions;

//   // put our list item into oul main Ul
//   mainList.appendChild(listItem);
// };

// savedTodo.forEach((todo) =>
//   createNewTodo(todo.title, todo.desc, todo.id, todo.checked)
// );

// // // handle add new todo
// //   handleCreateNewTodo = (event) => {
// //   // prevent to rernder page by form
// //   event.preventDefault();

// //   // validate todo form
// //   //  undefined or ''
// //   if (!todoTitle.value)
// //     return toastify("please enter a valid title ...", {
// //       time: 1000,
// //       type: "warn",
// //     });

// //   // create an object form todo title and desc
// //   const newTodo = {
// //     id: Date.now(),
// //     title: todoTitle.value,
// //     desc: todoDesc.value,
// //     checked: false,
// //   };

// //   savedTodos.push(newTodo);
// //   console.log(savedTodos);

// //   localStorage.setItem("todosList", JSON.stringify(savedTodos));
// //   createNewTodo(newTodo.title, newTodo.desc, newTodo.id);
// // };
// // handleCreateNewTodo();

// mainList.addEventListener("click", (e) => {

  
//   if (e.target.innerText === "DEL") {
//     const todoEl = e.target.parentElement.parentElement;
//     console.log(todoEl.id);
//     const filtredTodos = savedTodo.filter(
//       (item) => item.id !== Number(todoEl.id)
//     );
//     localStorage.setItem("todosList", JSON.stringify(filtredTodos));
//     location.reload();
//   } else if (e.target.innerText === "CHECK") {
//     // get li element
//     const todoEl = e.target.parentElement.parentElement;
//     // get our todo in localStrage with ID
//     const filtredTodo = savedTodo.filter(
//       (item) => item.id === Number(todoEl.id) // negah madare
//     );
//     // update our todo in localStrage with ID
//     const updateFiltredTodo = { ...filtredTodo[0], checked: true };
//     // delete our todo from localstorage
//     const filtredTodos = savedTodo.filter(
//       (item) => item.id !== Number(todoEl.id) // hazfe mikone
//     );
//     // update localStorage with updated todo
//     const updateSavedTodos = [...filtredTodos, updateFiltredTodo]; // on avali ro hazfe karde va check true ro jaygozin karde.
//     localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
//     location.reload();
//   } else if (e.target.innerText === "EDIT") {
//     const todoEl = e.target.parentElement.parentElement;
//     todoEl.children[0].children[0].disabled = false;
//     todoEl.children[0].children[0].select();
//     todoEl.children[0].children[0].style.backgroundColor = "blue";
//     e.target.innerText = "SAVE";
//     e.target.addEventListener("click", () => {
//       const filtredTodo = savedTodos.filter(
//         (item) => item.id === Number(todoEl.id)
//       );
//       const updateFiltredTodo = { ...filtredTodo[0], title: todoEl.children[0].children[0].value };

//       const filtredTodos = savedTodos.filter(
//         (item) => item.id !== Number(todoEl.id)
//       );
//       const updateSavedTodos = [...filtredTodos, updateFiltredTodo];
//       localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
//       location.reload();
//     });
//   }
// });

  

