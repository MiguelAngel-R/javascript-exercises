firstName = "Miguel Angel";
lastName = "Restrepo Saavedra";
thisYear = 2025;
birthYear = 2000;
fullName = firstName + " " + lastName;
age = thisYear - birthYear;
greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

// Add your code right below, good luck!





// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
