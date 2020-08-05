
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

//const $logSelect = $("#createselect");
//const $logEditInput = $("#editinput")

const $userSelect = $("#chooseUser1")


const $tbody = $("#tbody")





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
    console.log(data)
    $userSelect.empty()
    userChoice()
   
  };
  $button.on("click", createUser)
  

   //create log
const createLog = async (event) => {
  event.preventDefault()
    
  const newLog = {
    Date: $createdateInput.val(),
    Log: $createlogInput.val()
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

};
$button2.on("click", createLog)
