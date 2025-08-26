// inputs
const fullName =document.querySelector('.fullname');
const emailAdress = document.querySelector('.email');
const gitHub = document.querySelector('.github');
const generateTicket = document.querySelector('button');

// Outputs
const customerName = document.querySelector('.customer');
const customerEmail = document.querySelector('.customeremail');
const customerTicketName =document.querySelector('.customerTicket');
const customerGithub = document.querySelector('.cutomerGithub');
const cutomerTicketNumber = document.querySelector('.ticketNumber');

generateTicket.addEventListener('click',() =>{
    if(fullName.innerHTML !== '' && emailAdress.innerHTML !== '' && gitHub.innerHTML !== '' ){
        customerName.innerHTML = fullName.innerHTML;
        customerEmail.innerHTML = emailAdress.innerHTML;
        customerTicketName.innerHTML = fullName.innerHTML;
        customerGithub.innerHTML = customerGithub.innerHTML;
    }else{
        
    }
})