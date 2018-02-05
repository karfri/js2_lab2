var callback = function(){

  let gitlog = document.getElementById('gitlog');
  gitlog.addEventListener('click',function(){
    // Ett objekt för att hantera GitHub-autentisering
    let provider = new firebase.auth.GithubAuthProvider();
    // Skapa ett Promise som visar ett popup-fönster
    // Obs! Kontrollera att fönstret inte blockeras av en ad blocker
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      let username = result.additionalUserInfo.profile.name;
      const user = {name: username}; // WE USE THIS CONST TO GET THE USERNAME WITH USER.NAME
      let dataString = JSON.stringify( user );
      window.localStorage.setItem('user', dataString);
      alert('Please wait, you are being redirected.');
      setTimeout(function(){
        window.location = "lab2_chat.html";
      }, 3000);
    }).catch(function(error){
      alert('Something went wrong. Try to reload the page');
    });
  });

if(){
  function logOutMessage(){
    let p = document.createElement("p");
    p.innerText = "You've been logged out.";
    //let loginPopOver = document.getElementById("loginPopOver");
    document.body.appendChild(p);
  }
  logOutMessage();
}
window.addEventListener('load', callback);
