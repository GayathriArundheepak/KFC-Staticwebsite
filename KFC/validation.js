$(document).ready(function(){
  $("#signup-form").validate({
    rules:{
        name:{
            required:true,
            minlength:4,
            maxlength:12
        },
        emailAddress:{
            required:true,
            email:true
        },
        password:{
            required:true,
            minlength:6,
            
            
        },
        confirmPassword:{
            required:true,
            equalTo: "#password"


        }
        
    },
        messages:{
        name:{
        required:"Enter your Name"
        
    },
      emailAddress:{
       required:"mail id is required",
       email:"please enter valid mail id"
      },
    password:{
        required: "please enter password",



    },
    confirmPassword:{
        required:"confirm your password",
        equalTo:"password entered incorrect,please check"
    }
}
})
})