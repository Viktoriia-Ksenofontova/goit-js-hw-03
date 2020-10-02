let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
const create = (obj, key, value) => {
  obj[key] = value;
};

create(user, 'mood', 'happy');
create(user, 'full time', true);

const update = (obj, key, newValue) => {
  obj[key] = newValue;
};
update(user, 'hobby', 'skydiving');
update(user, 'premium', false);

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
