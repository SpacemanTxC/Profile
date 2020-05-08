// Function to clear the body and replace with contact info
//button added to clear text and all div

// var to store new page
var newContactScreen;

function clearBody(elementID){
    console.log("TEST Test");
    document.getElementById(elementID).innerHTML = newContactScreen;

}

newContactScreen = `
<!-- Header -->
  <div class='row'>
    <div class='col-12'>
      <!-- second level of row for name and nav bar -->
      <div class='row'>
          <div class='col-12'>
            <!-- Bootstrap for header running full body width -->
            <div class='jumbotron jumbotron-fluid text-center'>
                <div class='container'>
                  <h1 class='display-4'>Tate Capra</h1>
                  <p class='lead'>Jr Java & Full Stack Developer</p>
                  <!-- circle image of profile -->
                  <img src='assets/photo/tate1.jpg' class='rounded-circle mx-auto image1' alt='profile image'/>
                  <!-- space for contact button -->
                  </br></br>
                  <!-- button for Home -->
                  <input type='button' value='Home Page'
                  onclick='window.location.href="https://twcap.github.io/Profile/"'/>
                </div>
              </div>
          </div>
      </div>
`;
