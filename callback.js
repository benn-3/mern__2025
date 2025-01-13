// function submitForm(submit,db)
// {
//    console.log( db());
// console.log(submit)
// }

// function database()
// {
// dbname="SECE"
// return [dbname,"data stored successfully"]  
// }
// submitForm("form validated succesfully",database)
function submitForm(submit,isFormValid)
{
if(isFormValid)
{
    console.log("Fiels validated successfully")
    console.log(submit)
}
else{
    console.log("Fiels validated failed")
    console.log("Form submission unsuccessful")
}
}
function formValidation()
{
email="sece@sece.ac.in"
password="12345678"
if (email==="sece@sece.ac.in" && password)
{
    return true
}
else{
    return false
}
}
submitForm("Form submitted successfully",formValidation)