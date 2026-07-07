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
   
   return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}

function getPasswordSize(){
  const size = document.querySelector("#number").value;
  if (isNaN(size) ||  size < 4 || size > 100 ){
     message("Por favor, insira um número entre 4 e 128!", '#dc2626');
  }
  return size;
}

function generatePassword(size, charTypes){
  let passwordGenerated = "";
  while(passwordGenerated.length < size ){
     passwordGenerated += randownCharType(charTypes);
  }
  return passwordGenerated;
}

function message(text,background){
   Toastify({
       text: text,
       duration: 3000,
       style :{
           background : background,
           boxShadow: 'none',
       }
     }).showToast();
}


  document.querySelector("#generate").addEventListener("click", function() {
     const size = getPasswordSize();
     const charTypes = getCharTypes();

     
      if(!size){
        return;
      }
     if(!charTypes.length){
        message("Por favor, selecione pelo menos um tipo de caractere!", '#dc2626');
        return;
     }
     const passwordGenerated = generatePassword(size, charTypes);
     
     document.querySelector("#password_container").classList.add("show");
     document.querySelector("#password").textContent = passwordGenerated;
  });

  document.querySelector("#copy").addEventListener("click", function(){
    navigator.clipboard.writeText(document.querySelector("#password").textContent);
    message("Senha copiada com sucesso!", '#84cc16');
  });

