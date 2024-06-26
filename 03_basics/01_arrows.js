let user={

    firstname:"vamsi",
    lastname:"krishna",
    email:"beingaliver@gmail.com",
    greet:function(){
        console.log(`${this.firstname} , welcome to js`)

        // console.log(this)
    }
}

console.log(user.firstname);

console.log(user.lastname);

user.greet()

let hello= ()=>{
    let name="girish"
    // console.log(this.name)


}

 function Hello(){

    let name="kej";

    console.log(this);
 }

// addNUmbers=(num1,num2)=>{
//     return num1+num2
// }

addNUmbers=(num1,num2)=> (num1+num2)

console.log(addNUmbers(2,8))
hello()
// Hello()