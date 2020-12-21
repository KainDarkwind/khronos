const dbUserDetails = ["will@email.com", "kaindarkwind"];

$("#login-button").click(function () {
   const emailInput = $("email-input").val();
   const passwordInput = $("password-input").val();

   const isUserInDb = checkIsUserInDb(dbUserDetails, emailInput, passwordInput);
   if (isUserInDb) {
      //continue
      console.log("Let's continue.");
      disableElement("#login-button");
   } else {
      console.log("This user not found");
   }
});

function checkIsUserInDb(dbUserDetails, emailInput, passwordInput) {
   console.log(dbUserDetails);
   console.log(emailInput);
   console.log(passwordInput);

   if (dbUserDetails[0] === emailInput && dbuserDetails[1] === passwordInput) {
      return true;
   } else return false;
}

function disableElement(id) {
   $(id).attr("disabled", "disabled");
}
