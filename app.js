
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



//create user
const createUser = async () => {
    
    const newUser = {
      Name: $createuserInput.val(),
      Position: $createpositionInput.val()
    }
    //console.log(newUser)
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

  };
  $button.on("click", createUser)


  //create log
const createLog = async () => {
    
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
  $button.on("click", createLog)

