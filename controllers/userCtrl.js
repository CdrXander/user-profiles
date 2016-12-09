
module.exports = {
  getUsers:getUsers,
  login:login,
  addFriend:addFriend,
  removeFriend:removeFriend
}


var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];


function getUsers() {
  return users;
}

function login(req,res,next) {

  var result = users.filter(function(user) {
      return user.name === req.body.name;
  })

  if(result.length > 0) {
      if(result[0].password === req.body.password) {
        req.session.currentUser= result[0];
        console.log("Current User: ", req.session.currentUser);
        res.status(200).send({userFound: true});
      } else {
        console.log("Incorrect Password") ;
        res.status(200).send({userFound: false});
      }
  } else {
    console.log("User not found");
    res.status(200).send({userFound: false});
  } 
}

function addFriend(req,res,next) {
  var result = req.session.currentUser.friends.filter(function(name) {
    return name === req.body.friendName;
  })
  console.log(req.session.currentUser.friends + " : " + result)
  if(result.length == 0) {
    req.session.currentUser.friends.push(req.body.friendName);
    console.log(req.session.currentUser.friends)
  }

  next();
}


function removeFriend(req,res,next) { 
  
  var friendList = req.session.currentUser.friends
  for(var i = 0; i < friendList.length; i++) {
      if(req.body.friendName === friendList[i]) {
        friendList.splice(i,1);
      }     
  }
  req.session.currentUser.friends = friendList;

  next();
}