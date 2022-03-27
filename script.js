//Task #1

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);


//Task #2

//Объект, объявленный через const, может быть изменён. const защищает от изменений только саму переменную user, а не её содержимое.


//Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = null;

for (let key in salaries) {
    sum += salaries[key];
};

console.log(sum);