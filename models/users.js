
const mongoose = require('mongoose');




// create user schema
const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        trim:true,
        required: [true, 'user name required'],
        minlength:[4,'Minimun code length 4 characters'],
        lowercase:true
    },

    email: {
        type: String,
        trim: true,
        uppercase:true,
        unique: [true, 'email must be unique'],
        min:[8, "please enter email size more than 7"],
        max:[15, 'Please enter email size less than 16'],
        required: [true, 'Email address is required'],
        validate(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }

        /*validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']*/
    },

    
    website:{
        type:String,
        unique: [true, 'website must be unique'],
        lowercase:true,
        required:[true, 'website is required'],
        

    },
    address:{
        city:{
            type:String,
            lowercase:true,
            required:[true, 'city is required'],
            //validate: [validateCity, 'please enter a valid city name only with letters and spaces'],
            //match:[['a-zA-Z][a-zA-Z '], 'please fill a valid city name']
        },
        zip:{
            type:String,
            lowercase:true,
            
            required:[true, 'zip is required'],
            validate(value){
                var zipRegex=/^[0-9]{5}(?:-[0-9]{4})?$/;
                return zipRegex.test(value);
    
            }
    
        }
    },
    
    phone:{
        type:String,
        required:[true, 'phone number is required'],
        validate(value) {
        var phoneRegex = /^[0-9]{1}(?:-[0-9]{3})(?:-[0,9]{3})(?:-[0,9]{4})?$/;
        return phoneRegex.test(value);
        }
    }
});

UserSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
  UserSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  
  UserSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });
  
  UserSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });
  




const users =  mongoose.model("users", UserSchema);
module.exports = users;