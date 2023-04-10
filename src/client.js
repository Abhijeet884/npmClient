"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(email, name, password) {
        // private UserId: number
        this.city = "Mumbai";
        this.email = email;
        this.name = name;
        this.password = password;
        // this.UserId     
    }
    return Client;
}());
exports.Client = Client;
var data = new Client("client@g.com", "Abhijeet", "12345678");
console.log(data);
console.log("itt gjhgjfgfgff");
