function getCharTypes() {
  const upperCase = document.getElementById("include_uppercase").checked;
  const lowerCase = document.getElementById("include_lowercase").checked;
  const numbers = document.getElementById("include_number").checked;
  const specialCharacters = document.getElementById("include_special_charactere").checked;
  const charTypes = [];
   
  if (upperCase) {
    charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
if(lowerCase) {
    charTypes.push("abcdefghijklmnopqrstuvwxyz");
}
if(numbers) {
    charTypes.push("0123456789");
}
if(specialCharacters) {
    charTypes.push("!@#$%^&*()-+");
}

return charTypes;
}

function randownCharType(charTypes){
   const randomIndex = Math.floor(Math.random() * charTypes.length);
   return randomIndex;
}

  document.querySelector("#generate").addEventListener("click", function() {
     console.log(randownCharType(getCharTypes()));
  });

