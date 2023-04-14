export class Contact {
  firstname = "";
  lastname = "";
  email = "";
  online = false;

  constructor(firstname, lastname, email, online) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.online = online;
  }
}
