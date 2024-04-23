function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(email).toLowerCase());
}

export function validateForm(formData, isRegister) {
  const errors = {}

  if(!formData.email) {
    errors.email = "Du måste ange en e-postadress"
  }else if(!validateEmail(formData.email)) {
    errors.email = "Du måste ange en giltid e-postadress"
  }

  if(!formData.password) {
    errors.password = "Du måste ange ett lösenord"
  } else if(formData.password.trim().length < 8) {
    errors.password = "Lösenordet måste vara minst 8 tecken långt"
  }

  if(isRegister) {
    if(!formData.repeatPassword){
      errors.repeatPassword = "Du måste upprepa lösenordet"
    }
    else if(formData.password !== formData.repeatPassword) {
      errors.repeatPassword = "Lösenorden matchar inte"
    }
  }

  return errors
}