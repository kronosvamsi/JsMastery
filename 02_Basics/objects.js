const user={}

const user1=Object()

user.firstname="Vamsi";

user.lastname="Krishna";

user.email="beingaliver@gmail.com"

user1.Firstname="kumar";

user1.Lastname="Jain";

user1.Email="kjain@gmail.com"


const user2=Object.assign({},user,user1)

const user3={...user, ...user2,userbase:{no_of_user:2,country:"India"}}

const {firstname,lastname,email,Email,Firstname,Lastname,userbase:Details}=user3
console.log(firstname,lastname,email,Email,Firstname,Details);

