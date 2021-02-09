function showEmailError() {
   console.log("hi from show email error");

   const emailInput = $("#sign-up-email-input").val();
   const trimmedEmailInput = emailInput.trim();
   const normalizedEmailInput = trimmedEmailInput.toLowerCase();
   const emailLength = normalizedEmailInput.length;
   const delimiter = "@";
   const indexOfLocal = normalizedEmailInput.indexOf(delimiter);
   const indexofDomain = normalizedEmailInput.lastIndexOf(delimiter);

   const localEmail = normalizedEmailInput.slice(0, indexOfLocal);
   const domainEmail = normalizedEmailInput.slice(0, indexofDomain);
   const emailPieces = normalizedEmailInput.split("@");
   const localEmailSplit = emailPieces[0];
   const domainEmailSplit = emailPieces[1];

   emailToSearchFor = "localEmail";
   if (emailLength === 0) {
      console.log("no email entered");
      //remove d-none from #sign-up-email-input-error,  add class 'is-invalid' to #sign-up-email-input
      $("#sign-up-email-input-error").removeClass("d-none");
      $("#sign-up-email-input-error").html("Please enter your email.");
      $("#sign-up-email-input").addClass("is-invalid");
   } else {
      console.log(`Nice to meet you, "${normalizedEmailInput}"`);
      $("#sign-up-email-input-error").addClass("d-none");
      $("#sign-up-email-input").removeClass("is-invalid");
   }
}
