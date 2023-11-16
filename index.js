 const form = document.querySelector("#subscriptionForm");
 const email = document.querySelector("#Email");

 form.addEventListener("submit", (e) => {
   e.preventDefault();
   let emailValue = email.value;
   if (validateEmail(emailValue)) {
     form.classList.remove("error");
   } else {
     form.classList.add("error");
   }
 });
 function validateEmail(email) {
   const re =
     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
 }

 form.addEventListener("submit", (e) => {
   e.preventDefault();
   let emailValue = email.value;
   console.log("Email value:", emailValue);

   if (validateEmail(emailValue)) {
     form.classList.remove("error");
   } else {
     form.classList.add("error");
   }
 });

 console.log(validateEmail(emailValue));
