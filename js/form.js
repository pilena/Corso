function selectFunction(){
  var options = [{
    value: "select",
    option: "Why do you want to take this course?"
  }, 
{
    value: "student",
    option: "I'm a student."
  }, 
{
    value: "website",
    option: "I have my own website."
  }, 
{
    value: "curious",
    option: "I'm just curious."
  }, 
{
    value: "other",
    option: "Other."
  }, 

];

  var ispis = "";

  options.forEach(element => ispis += `<option value=${element.value}>${element.option}</option>`);

  document.getElementById("course").innerHTML = ispis;
}

selectFunction();

document.getElementById("form-submission").addEventListener("click", function(){

  var name, email, message, check, errors; 

  name = document.querySelector("#Fname").value;
  email = document.querySelector("#email").value;
  message = document.querySelector("#cmessage").value;
  select = document.querySelector("#course");
  check = document.querySelector("#cterms");

  errors = 0;

  // Regex 
  nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/; 
  emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Name check

  if(name.match(nameRegex)){
    document.getElementById("nameError").innerHTML = "";
      errors == 0;
  } else {
      document.getElementById("nameError").innerHTML = "Please enter your full name in 'John Doe' format.";
      errors++;
  }

  // Email check 
  if(email.length < 3 ){
    document.getElementById("emailError").innerHTML = "Plase enter your email address.";
    errors++;
  } else {
    document.getElementById("emailError").innerHTML = "";
      errors == 0;
  }

  if(email.match(emailRegex)){
    document.getElementById("emailError").innerHTML = "";
      errors == 0;
  } else {
      document.getElementById("emailError").innerHTML = "Plase enter a valid email format example@example.com.";
      errors++;
  }

  //Dropdown check
  var selected = select.selectedIndex;

  if(selected != 0){
    document.getElementById("selectError").innerHTML = "";
      errors == 0;
  } else {
    document.getElementById("selectError").innerHTML = "Please select why you want to take this course.";
      errors++;
  }

  // Textarea check
  if(message.length < 20 ){
    document.getElementById("messageError").innerHTML = "Your message should be at least 20 characters long.";
      errors++;
  } else {
    document.getElementById("messageError").innerHTML = "";
      errors = 0;
  }

  // Terms check 
  if(check.checked == true){
    document.getElementById("checkError").innerHTML = "";
      errors == 0;
  } else {
    document.getElementById("checkError").innerHTML = "Please confirm that you have read and accepted the privacy policy.";
      errors++;
  }

  console.log(errors);
  // Error check and message display
  if(errors != 0){
    document.getElementById("cmsgSubmit").classList.add("error");
    document.getElementById("cmsgSubmit").classList.remove("prikaz");
  } else {
    document.getElementById("cmsgSubmit").classList.remove("error");
    document.getElementById("cmsgSubmit").classList.add("prikaz");
  }
});

	

