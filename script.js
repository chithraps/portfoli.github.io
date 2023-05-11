function validate() {
    var nameField=false;
    var emailfield=false;
    var name=document.getElementById("fullName").value;
    console.log(name);
    var nameRegx=/^[a-zA-Z ]+$/;
    var text = document.getElementById("emailId").value;
    console.log(text);
    var regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/;
    if (!regx.test(text)) {
      document.getElementById("lbltext").innerHTML = "InValid";
      document.getElementById("lbltext").style.visibility = "visible";
      document.getElementById("lbltext").style.color = "red";
    }else{
      nameField=true;
      document.getElementById("lblName").style.visibility = "hidden";
    }
    if(!nameRegx.test(name)){
      document.getElementById("lblName").innerHTML = "InValid";
      document.getElementById("lblName").style.visibility = "visible";
      document.getElementById("lblName").style.color = "red";
    }else{
      emailfield=true;
      document.getElementById("lbltext").style.visibility = "hidden";
    }
    if(emailfield==true && nameField==true){
        
       
      alert("successfully submitted")
    }
  }
  