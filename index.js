
let button = document.querySelector('#button')

button.addEventListener('click',Validation)
let Fname
let Lname 
let Address
let Password
let errorName = document.querySelector('#nameError')
let errorLname = document.querySelector('#lastNameError')
let errorEmail = document.querySelector('#emailAddressError')
let passwordError = document.querySelector('#passwordError')
let heading = document.querySelector('#heading')
let heading1 = document.querySelector('#heading1')
let heading2 = document.querySelector('#heading2')
let heading3 = document.querySelector('#heading3')
let imageFname = document.querySelector('#imageFname')
let imageLname = document.querySelector('#imageLname')
let imageAddress = document.querySelector('#imageAddress')
let imagePassword = document.querySelector('#imagePassword')
let CorrectImage = '/images/download.png'
function Validation(){
    event.preventDefault()
    Fname= document.querySelector('#Fname')
    Lname = document.querySelector('#Lname')
    Address = document.querySelector('#Address')
    Password = document.querySelector('#Password')
    let fNameValue =Fname.value
    let lNameValue = Lname.value
    let addressValue = Address.value
    let passwordValue = Password.value 
    if(fNameValue !== ''){
        errorName.textContent= 'Correct'
        errorName.classList.add('error')
        heading.classList.add('heads')
        imageFname.src=CorrectImage

    }
    else{
        errorName.textContent= 'FirstName cant be empty'
        heading.classList.add('head')
    }

    if(lNameValue !== ''){
            errorLname.textContent = 'Valid'
            errorLname.classList.add('error')
            heading1.classList.add('heads')
            imageLname.src = CorrectImage


    }
    else{
        errorLname.textContent = 'cant be empty'
        heading1.classList.add('head')


    }
    if(addressValue !==''){
                if(addressValue.includes('.com')){
                    errorEmail.textContent = 'Correct email format'
                    errorEmail.classList.add('error')
                    heading2.classList.add('heads')
                    imageAddress.src = CorrectImage
                
                }
                else{
                    errorEmail.textContent ="Incorrect email format"
                    heading2.classList.add('head')
                }
            }
            else{
                errorEmail.textContent = 'email format must not be empty'
                heading2.classList.add('head')

            }


            if(passwordValue !== ''){
                if(passwordValue.length < 8) { 
                    heading3.classList.add('head')
                    passwordError.textContent='Password must be at least 8 characters'
           
                } 
                else if(passwordValue.search(/[a-z]/) < 0) { 
                    passwordError.textContent = 'Password must contain at least one lowercase letter' 
                    heading3.classList.add('head')

                } 
                else if(passwordValue.search(/[A-Z]/) < 0) { 
                    passwordError.textContent ='Password must contain at least one uppercase letter' 
                    heading3.classList.add('head')

                }
                else if(passwordValue.search(/[0-9]/) < 0) {  
                    passwordError.textContent='Password must contain at least one number'
                    heading3.classList.add('head')

                } 
                else { 
                        passwordError.classList.add('error')
                        passwordError.textContent='Success' 
                        heading3.classList.add('heads')
                        imagePassword.src = CorrectImage
                    } 
            }
            else{
                passwordError.textContent='Password must not be empty'           
                heading3.classList.add('head')

            }
            if(fNameValue!=='' && lNameValue !=='' && addressValue !=='' &&passwordValue !==''){

             document.querySelector('body').innerHTML =`
              <div class='flex flex-col justify-center items-center'>
                 <p>Congatulation you succeddedly Register </p>

              </div>
             `

            }

        }
   
