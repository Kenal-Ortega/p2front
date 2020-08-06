
const deployedURL = "https://p2back93.herokuapp.com/";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

///////////////////////
//GLOBAL VARIABLES
//////////////////////
const $createuserInput = $("#createuser");
const $createpositionInput = $("#createposition");
const $createdateInput = $("#createdate");
const $createlogInput = $("#createlog")
const $button = $("#createUserBtn");
const $button2 = $("#createUserBtn2");

const $editbutton = $("#editbtn");
const $deletebutton = $("deletebtn");

const $logSelect = $("#createselect");
const $logEditInput = $("#editinput")

const $userSelect = $("#chooseUser1")


const $tbody = $("#tbody")

const $EditSelect = $("#editinput")


let currentUser = {}


/*
const tableFiller = () => {
  const $tr = $("<tr>")
const $th = $("<th>")
$tr.append($tr)
const $td = $("<td>")
const $tdb = $("<td>")


$tr.append($td)
  $tbody.append($tr)
$tr.append($th)
$tr.append($td)
$tr.append($("<td>"))
$tr.append($("<td>"))
$tr.append($("<td>"))
$tr.append($tdb.append($("<button class='btn btn-primary'>").text("Edit")))
$tr.append($tdb.append($("<button class='btn btn-danger'>").text("Delete")))
}
tableFiller()
*/





const userChoice = async () => {
  const response = await fetch(`${URL}findusers`)
  const data = await response.json();
  data.forEach((user) => {
    const $option = $('<option>').attr("value", user._id).text(`${user.Name}, ${user.Position}`);
     $userSelect.append($option); 
  })
};
userChoice()


//create user
const createUser = async (event) => {
  event.preventDefault()
    
    const newUser = {
      Name: $createuserInput.val(),
      Position: $createpositionInput.val()
    }
    console.log(newUser)
    //send request to api to create 
    const response = await fetch(`${URL}user`, {
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newUser)
      
    })
    const data = await response.json();
    currentUser = data
    console.log(data)
    $userSelect.empty()
    userChoice()
   
  };
  $button.on("click", createUser)
  

   //create log
const createLog = async (event) => {
  event.preventDefault()
    console.log(currentUser)
  const newLog = {
    Date: $createdateInput.val(),
    Log: $createlogInput.val(),
    user: currentUser._id

  }
  //console.log(newUser)
  //send request to api to create 
  const response = await fetch(`${URL}log`, {
    method: "post",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newLog)
  })
  const data = await response.json();
  console.log(data)
   //update dom
   $(".display1").empty()
   getLogs()

};
$button2.on("click", createLog)


//get all
const getLogs = async () => {
  const response = await fetch(`${URL}findLogs`)
  const data = await response.json()
  console.log(data)

  data.forEach((logs) => {
    console.log(logs)
    const $li = $("<li>").text(` ${logs.user.Name} ${logs.Date}  ${logs.Log}`);
    //add a delete button
    $li.append($("<button>").text("delete").attr("id", logs._id).on("click", deleteLog))
    console.log($li)
    $li.append($("<button>").text("edit").attr("id", logs._id).on("click", updateLog))
    console.log($li)
   $(".display1").append($li);
  })
}
//getLogs()



const deleteLog = async (event) => {
  const response = await fetch(`${URL}${event.target.id}`, {
    method: "delete"
  })
   //update dom
   $(".display1").empty()
   getLogs()
}

//update log
const updateLog = async (event) => {
  //create updated log object
  const updatedLog = {
    Log: $EditSelect.val()
  }
  //make our put request
  const response = await fetch(`${URL}updatelog/${event.target.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedLog)
  })
     //update dom
     $(".display1").empty()
     getLogs()
  }
