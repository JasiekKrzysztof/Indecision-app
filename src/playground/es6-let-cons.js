var nameVar = 'Jaiek';
nameVar = 'haha';
console.log('nameVar', nameVar);

let nameLet = 'Jasiek';
nameLet = 'jas';
console.log('nameLet', nameLet);

const nameConst = 'Jasiek';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Jan Krzysztof';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}


