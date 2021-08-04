function getPasswordError(password, email) {
   const normalizedPassword = password.toLowerCase().trim();
   const passwordInputLength = normalizedPassword.length;
   const listOfEmailParts = email.split("@");
   // Split removes the item it is searching for, and places the other pieces into an array.  An empty string "" will return a split up list of each individual character.

   const localEmail = listOfEmailParts[0];

   const unacceptablePasswords = getUnacceptablePasswords();

   if (passwordInputLength === 0) {
      console.log("There is no password text entered.");
      return "Please create a password.";
   } else if (passwordInputLength < 9) {
      console.log("The password is too short.");

      return "Your password must be at least 9 characters.";
   } else if (
      normalizedPassword.includes(localEmail) &&
      localEmail.length >= 4
   ) {
      console.log("The password cannot match email.");

      return "All or part of your email address cannot be used in your password.";
   } else if (unacceptablePasswords.includes(normalizedPassword)) {
      console.log("The password cannot be lame.");
      console.log(
         "This is the final list of unacceptable passwords:",
         unacceptablePasswords
      );
      return `Your password contains a commonly used password, "${password}" and can be easily discovered by attackers. Please use something else.`;
   } else {
      console.log("The password is just right.");
      console.log("The user's email is", email);
      return "";
   }
}

function getUnacceptablePasswords() {
   const newMostInsecurePasswords = [...mostInsecurePasswords];
   const flatSecondMostInsecurePasswords = secondMostInsecurePasswords.flat();
   const initialUnacceptablePasswords = [
      ...newMostInsecurePasswords,
      ...flatSecondMostInsecurePasswords,
   ];

   //Right here I removed all of the duplicate passwords.
   const uniqueUnacceptablePasswords = [
      ...new Set(initialUnacceptablePasswords),
   ];

   const firstRemainingUnacceptablePasswords =
      uniqueUnacceptablePasswords.slice(
         0,
         uniqueUnacceptablePasswords.indexOf("skywalker")
      );
   /*  console.log(
        "This is the first slice of passwords without skywalker",
        firstRemainingUnacceptablePasswords
     );
  */
   const secondRemainingUnacceptablePasswords =
      uniqueUnacceptablePasswords.slice(
         uniqueUnacceptablePasswords.indexOf("skywalker") + 1
      );
   /* console.log(
        "This is the second slice of passwords without skywalker",
        secondRemainingUnacceptablePasswords
     );*/

   const skywalkerlessUnacceptablePasswords = [
      ...firstRemainingUnacceptablePasswords,
      ...secondRemainingUnacceptablePasswords,
   ];

   const firstObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         0,
         skywalkerlessUnacceptablePasswords.indexOf("obama2016")
      );
   /*  console.log(
        "This is the first slice of passwords without obama",
        firstObamalessUnacceptablePasswords
     );*/

   const secondObamalessUnacceptablePasswords =
      skywalkerlessUnacceptablePasswords.slice(
         skywalkerlessUnacceptablePasswords.indexOf("obama2016") + 1
      );
   /* console.log(
        "This is the second slice of passwords without obama",
        secondObamalessUnacceptablePasswords
     );*/

   const cleanedUnacceptablePasswords = [
      ...firstObamalessUnacceptablePasswords,
      ...secondObamalessUnacceptablePasswords,
   ];

   let booleanFreeUnacceptablePasswords = [];
   for (let i = 0; i < cleanedUnacceptablePasswords.length; i++) {
      const passwordInQuestion = cleanedUnacceptablePasswords[i];

      if (typeof passwordInQuestion !== "boolean") {
         booleanFreeUnacceptablePasswords =
            booleanFreeUnacceptablePasswords.concat([
               cleanedUnacceptablePasswords[i],
            ]);
         //if the password is not a boolean (true/false), we are sticking it into the array.
      } else {
         //else, skip boolean value
      }
   }
   let monoDataTypeUnacceptablePasswords = [];
   for (let i = 0; i < booleanFreeUnacceptablePasswords.length; i++) {
      const passwordInQuestion = booleanFreeUnacceptablePasswords[i];

      if (typeof passwordInQuestion === "number") {
         const stringPassword = String(passwordInQuestion);
         monoDataTypeUnacceptablePasswords =
            monoDataTypeUnacceptablePasswords.concat([stringPassword]);
         //If the password is a number, we turn it to a string and put it into the array.
      } else {
         monoDataTypeUnacceptablePasswords =
            monoDataTypeUnacceptablePasswords.concat([
               booleanFreeUnacceptablePasswords[i],
            ]);
         //If the password isn't a number, we leave it alone but put it into the array.
      }
   }

   //Use a for loop to reverse every string in your list and add them to a new list. Your list should contain both the forward and reverse versions of each password.

   //we run a for loop to go through the password list.
   let unacceptableAndReversedPasswords = [];
   for (let i = 0; i < monoDataTypeUnacceptablePasswords.length; i++) {
      const passwordInQuestion = monoDataTypeUnacceptablePasswords[i];
      //console.log("password in question is", passwordInQuestion);

      //For each item in the array, we are going to split it with a blank string "".  This will give us the item in an array of its parts, aka letters.

      const passwordLetters = passwordInQuestion.split("");
      //console.log("split password is", passwordLetters);

      //We will then make a copy of that array of parts with the spread ... operator.  We want to keep the original list intact.

      const copyOfPasswordLetters = [...passwordLetters];
      //console.log("copy of password letters is", copyOfPasswordLetters);
      //We will then reverse the order of that array of parts with the .reverse() method.

      const reversedPasswordLetters = copyOfPasswordLetters.reverse();
      //console.log("reversed password letters are", reversedPasswordLetters);
      //We will then put that reversed order back together with the .join("") method.

      const reversedPasswords = reversedPasswordLetters.join("");
      // console.log("rejoined reversed passwords are", reversedPasswords);
      //We will then add that reversed string to the true final array.

      unacceptableAndReversedPasswords =
         unacceptableAndReversedPasswords.concat([
            monoDataTypeUnacceptablePasswords[i],
            reversedPasswords,
         ]);
   }

   //console.log("the list so far is", unacceptableAndReversedPasswords);

   //Use a for loop to lowercase every string in your list.

   //we run a for loop to go through the password list.

   let unacceptableAndFormattedPasswords = [];
   for (let i = 0; i < unacceptableAndReversedPasswords.length; i++) {
      const passwordInQuestion = unacceptableAndReversedPasswords[i];
      //console.log("password in question is", passwordInQuestion);

      //For each item in the array, we are going to lowercase it with the
      const formattedPasswords = passwordInQuestion.toLowerCase().trim();

      //We will then add that reversed string to the true final array.
      unacceptableAndFormattedPasswords =
         unacceptableAndFormattedPasswords.concat([formattedPasswords]);
   }
   //console.log("Formatted and reversed passwords are", unacceptableAndFormattedPasswords
   //);

   //Running set to remove any crafty palindrome passwords from the final list.
   const unacceptablePasswords = [
      ...new Set(unacceptableAndFormattedPasswords),
   ];

   return unacceptablePasswords;
}
