// JSON = Javascript Object Notation 

const user = {id: 1, name: 'Gorib Amir', job: 'actor'};

const stringified = JSON.stringify(user); // converted to JSON string
console.log(stringified);
console.log(user);

// output
// {"id":1,"name":"Gorib Amir","job":"actor"}
// { id: 1, name: 'Gorib Amir', job: 'actor' }

const userObj = JSON.parse(stringified); // converted again to obj
console.log(userObj);