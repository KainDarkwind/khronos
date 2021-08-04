function getEmailError(email) {
   const emailLength = email.length;

   console.log("The email entered is:", email);

   if (emailLength === 0) {
      console.log("There is no email text entered.");
      return "Please enter your email address.";
   } else {
      console.log("The email is just right.");
      return "";
   }
}
