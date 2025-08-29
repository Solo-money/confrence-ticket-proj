// inputs
    // Getting all the inputs from the user   
const fullName =document.querySelector('.fullname');
const emailAdress = document.querySelector('.email');
const gitHub = document.querySelector('.github');
const generateTicket = document.querySelector('.generate');
const form = document.querySelector('.container');
const ticket = document.querySelector('.container2');
const upload = document.getElementById('file');
const removeButton = document.querySelector('.remove');
const changeButton = document.querySelector('.change');
const changeImage = document.querySelector('#changefile');


// Outputs
   // Targetting all the outputs that are to be changed 
const customerName = document.querySelector('.customer');
const customerEmail = document.querySelector('.customeremail');
const customerTicketName =document.querySelector('.customerTicket');
const customerGithub = document.querySelector('.customerGithub');
const cutomerTicketNumber = document.querySelector('.ticketNumber');
const errorMessage = document.querySelector('.error-message');
const ticketImage = document.getElementById('ticketImage');
const formImage = document.querySelector('.form-image');
const ticketNumber = document.querySelector('.ticketNumber');

// METHOD OF UPLOADING AND USING IMAGE USING FILEREADER METHOD

    //getting the image from the user and using it to update the ticket image 
// upload.addEventListener('change',() => {
//     // etting the first file the user uploaded
//     const file = upload.files[0];   

//     // checks if the image was uploaded
//     if(file){
//         // creates variable reader and uses the FileReader to read the files on the users device
//         const reader = new FileReader();

//         // the onload runs the file after converting it and then we save it in to variable e which is used as the parameter for the next function
//         reader.onload = (e) => {
//             // this reassigns uploaded image and makes it the the image uploaded by the user(converted version)
//             uploadedImage = e.target.result;
//         };

//         // this coverts the file into a data URL string which is then used as our src
//         reader.readAsDataURL(file)
//     }
// });


// METHOD OF UPLOAD AND DISPLAY USING URL.createObjectURL() (this just creates a temporary link)

let uploadedImage ='';
let randomNumber = Math.random()*100000
console.log(Math.trunc(randomNumber))

upload.addEventListener('change',() =>{
    const file = upload.files[0];
    if(file){
        let sucessText = document.querySelector('.sucesstext')
        sucessText.innerHTML= 'You have sucessfully uploaded your image';
        sucessText.classList.add('text-green-500', 'font-medium')
        uploadedImage = URL.createObjectURL(file);
        formImage.src = uploadedImage;
        document.querySelector('.form-container').classList.remove('p-2','bg-[#332552]');
    }
});

removeButton.addEventListener('click' , () =>{
    uploadedImage = '';
    formImage.src = "./assets/images/icon-upload.svg"
    document.querySelector('.form-container').classList.add('p-2','bg-[#332552]');
})

 changeImage.addEventListener('change' , () =>{
    const file = changeImage.files[0];
    if(file){
        uploadedImage = URL.createObjectURL(file);
        formImage.src = uploadedImage;
        document.querySelector('.form-container').classList.remove('p-2','bg-[#332552]');
    }
 })

generateTicket.addEventListener('click',() =>{
    if(fullName.value !== '' && emailAdress.value !=='' && gitHub.value !== '' && uploadedImage){
        customerName.textContent = fullName.value;
        customerEmail.innerHTML = emailAdress.value;
        customerTicketName.textContent = fullName.value;
        customerGithub.innerHTML = gitHub.value;
        ticketImage.src = uploadedImage;
        form.classList.add('hidden');
        ticket.classList.remove('hidden');
        ticketNumber.innerHTML = '#' + Math.trunc(randomNumber);
    }else{
        errorMessage.textContent ='Please fill in all details'
        errorMessage.classList.remove('hidden');
    };
});