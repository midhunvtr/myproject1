let email=document.getElementById("email")
let pwd=document.getElementById("pwd")
let pwd1=document.getElementById("pwd1")
function validate(){
  if (pwd.value==pwd1.value){
    
    return true
  }
  else{
    alert("password must be same");
    return false;
  }
}
