function adduser(){
   user_name=document.getElementById("name").value;
    localStorage.setItem("name of the user",user_name);
    user_name=document.getElementById("password").value;
    localstorage.setItem("display password",user_name);
    window.location="second_room.html";
}