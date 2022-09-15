// User model
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

// Data constants
class Constants {
  static firstNamePattern = /^(?=.*[a-zA-Z]).{3,}$/;
  static lastNamePattern = /^(?=.*[a-zA-Z]).{3,}$/;
  static emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
}

// User component
class AddUserComponent {
  get firstNameElement() { return document.getElementById("first-name"); }
  get lastNameElement() { return document.getElementById("last-name"); }
  get emailElement() { return document.getElementById("email"); }

  /**
   * Add new user
   * 
   * @returns New user
   */
  onAddUser = () => {
    try {
      const firstName = this.firstNameElement.value;
      if (!firstName) {
        throw "First name is required.";
      } else if (!Constants.firstNamePattern.test(firstName)) {
        throw "First name is incorrect.";
      }

      const lastName = this.lastNameElement.value;
      if(!lastName) {
        throw "Last name is required.";
      } else if (!Constants.lastNamePattern.test(lastName)) {
        throw "Last name is incorrect.";
      }

      const email = this.emailElement.value;
      if(!email) {
        throw "Email is required.";
      } else if (!Constants.emailPattern.test(email)) {
        throw "Email is incorrect.";
      }

      const user = new User(firstName, lastName, email);
      console.log(user);
      document.getElementById("result").innerHTML = `First name: ${user.firstName},
        Last name: ${user.lastName}, Email: ${user.email}`;

      document.getElementById("validation-error").innerHTML = "";
    } catch (error) {
      document.getElementById("validation-error").innerHTML = error;
    }
  }
}

const onAddUser = () => {
  const addUserComponent = new AddUserComponent();
  addUserComponent.onAddUser();
}