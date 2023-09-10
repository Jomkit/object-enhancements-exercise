/***** Same keys and Values - ES5 Code  ******/
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

/***** Write an ES2015 Version *****/
// function createInstructor(firstName, lastName){
//     return {
//         firstName,
//         lastName
//     }
// }

//////////////////////////////////////////////////

/***** Computed Property Names - ES5 Code  ******/
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

/***** Write an ES2015 Version *****/
// let favoriteNumber = 42;

// let instructor = {
//   firstName: "Colt",
//   [favoriteNumber]: "That is my favorite!"
// }

//////////////////////////////////////////////////

/***** Object Methods - ES5 Code  ******/
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

/***** Write an ES2015 Version *****/
// const instructor = {
//     firstName: "Colt",
//     sayHi() {
//       return "Hi!";
//     },
//     sayBye() {
//       return this.firstName + " says bye!";
//     }
//   }

/***** createAnimal function *****/
function createAnimal(species, verb, noise){
    return {
        species, 
        [verb]: function() {
            return noise;
        }
    }
}