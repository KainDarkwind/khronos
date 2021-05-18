function getEmailError(email) {
   console.log("hi from show email error");
   const emailLength = email.length;

   if (emailLength === 0) {
      console.log("no email entered");

      return "Please enter your email.";
   } else {
      console.log(`Nice to meet you, "${email}"`);

      return "";
   }
}
