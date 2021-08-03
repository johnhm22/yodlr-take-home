// import axios from "axios";


$('p').on('click', function(){
    console.log("Button clicked");
})


$('#users').ready(function() {
    let endpoint = 'http://localhost:3000/users'

    $.ajax({
    url: endpoint,
    success: function(result){
        console.log(result);
        for(user of result){
        $('ul').append(`<li>${user.firstName} ${user.lastName} - email: ${user.email}</li>`)
        }
    }
});
  });

 
  $('form').on('submit', function(event){
    event.preventDefault();
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#email').val();
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: {
            firstName,
            lastName,
            email
        },
     success: console.log("success")
    });
});

