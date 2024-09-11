

document.querySelector('.first button').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});

document.querySelector('.first button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

document.querySelector('.sec button').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});

document.querySelector('.sec button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

document.querySelector('.third button').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});

document.querySelector('.third button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

document.querySelector('.final button').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});

document.querySelector('.final button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});




const button = document.querySelector('.seer button');

        
button.addEventListener('mouseover', function() {
    this.textContent = 'Welcome Viewers!';
});

        
button.addEventListener('mouseout', function() {
    this.textContent = 'See Results';
});



 const homeDiv = document.querySelector('.Home a');
 const githubDiv = document.querySelector('.github a');
 const contactsDiv = document.querySelector('.Contacts a');
 const mailDiv = document.querySelector('.Mail a');
 const linkedinDiv = document.querySelector('.linkedin a');



homeDiv.addEventListener('click', function(event) {
    event.preventDefault();
    let userResponse = confirm('Go to Home?');
    if (userResponse) { 
        window.location.href = 'http://127.0.0.1:5500/index.html';  
    } 
});


githubDiv.addEventListener('click', function(event) {
    event.preventDefault();
    let userResponse = confirm('Go to GitHub?');
    if (userResponse) { 
        window.location.href = 'https://github.com/sunil9984';  
    } 
});


contactsDiv.addEventListener('click', function(event) {
    event.preventDefault();
    let userResponse = confirm('Go to ontacts?');
    if (userResponse) { 
        window.location.href = 'contacts.html';  
    } 
});


mailDiv.addEventListener('click', function(event) {
    event.preventDefault();
    let userResponse = confirm('Go to Mail');
    if (userResponse) { 
        window.location.href = 'mailto:sn885394@gmail.com'; 
    } 
});


linkedinDiv.addEventListener('click', function(event) {
    event.preventDefault();
    let userResponse = confirm('Go to LinkedIn Page');
    if (userResponse) { 
        window.location.href = 'https://www.linkedin.com/in/sunil40/'; 
    } 
});















