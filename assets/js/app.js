// Function to clear the body and replace with contact info
//button added to clear text and all div

// var to store new page
let newContactScreen = `
<!-- Header -->
<div class="row">
  <div class="col-12">
    <!-- second level of row for name and nav bar -->
    <div class="row">
      <!-- ************************************************** -->
        <div class="col-12">
          <!-- Bootstrap for header running full body width -->
          <div class="jumbotron jumbotron-fluid text-center">
              <div class="container extraColor">
                <h1 class="display-4">Tate Capra</h1>
                <p class="lead">Full Stack Web Developer & Software Engineer</p>
                <!-- circle image of profile -->
                <img src="assets/photo/tate1.jpg" class="rounded-circle mx-auto image1" alt="profile image"/>
                <!-- space for contact button -->
                </br></br>
                <input type='button' value='Home Page'onclick='window.location.href="https://twcap.github.io/Profile/"'/>
              </div>
            </div>
        </div>
    </div>
          </div>
      </div>

      <div class='row'>
        <div class ='col-12'>
        <div class= 'container'>
          <h3>Contact Information:</h3>
            <ul>
              <li>Email: TateCapra@outlook.com</li>
              <li>Phone: 832-515-2110</li>
              <li>Linkedin: <a href='https://www.linkedin.com/in/tate-capra/' target='_blank'>
                https://www.linkedin.com/in/tate-capra/</a> </li>
            </ul>
        </div>
        </div>
      </div>
`;
// function to change the page to contact information
$("#contactButton").click(function(){
  $("#mainBody").html(newContactScreen);
});
