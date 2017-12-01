function findUser() {
  setTimeout(() => {
    return {
      name: 'loumt',
      age: 17
    };
  }, 3000);
}

function findOtherMode() {
  setTimeout(() => {
    return {
      name: 'loumt.edit',
      age: 18,
      degree: 'D-3'
    };
  }, 200);
}

function editUser(user, userModel) {
  setTimeout(() => {
    user.name = userModel.name;
    user.degree = userModel.degree;
    return user;
  }, 2000);
}

function editUser(user) {
  function saveUser() {
    setTimeout(() => {
      console.dir(user);
    }, 1000);
  }
}
function run(){
    console.log('start task!!!!!');
    Promise.all([
        findUser(),
        findOtherMode()
    ],(result)=>{
        console.log('---------------');
        console.dir(result);
    });   
}

run();
