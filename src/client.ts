
export class Client{
    email: string
    name: string
    password: string
    
    // private UserId: number
    readonly city: string ="Mumbai"

    constructor(email:string, name:string, password:string){
        this.email = email;
        this.name = name;
        this.password= password; 
        
        // this.UserId     
    }
}

const data = new Client("client@g.com", "Abhijeet", "12345678");
console.log(data);