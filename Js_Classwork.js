let visitor = "NotAdmin"; 
let password = "TheMaster";

if (visitor === "Admin") {

    if (password === "TheMaster") {
        console.log("Welcome!");
    } else {
        console.log("Wrong password");
    }

}else{
    console.log("I don't know you");
}
