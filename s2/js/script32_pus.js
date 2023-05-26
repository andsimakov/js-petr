'use strict';

function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function() {
                return this.fullName.split(' ')[0];
            },

            set: function(newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }
        },
        lastName: {
            get: function() {
                return this.fullName.split(' ')[1];
            },

            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }
        }
    });
}

var alex = new User('Alex Gramm');

console.log(alex.firstName);
console.log(alex.lastName);

alex.lastName = 'Logan';

console.log(alex.lastName);
