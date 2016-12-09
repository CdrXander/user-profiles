var userCtrl = require('./userCtrl.js');

module.exports = {
  getUserFriends:getUserFriends,
  getAllProfiles:getAllProfiles
}

var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];


function getAllProfiles(req,res,next) {
  res.status(200).send(profiles);
}


function getUserFriends(req,res,next) {

    var friends = [];

    for(var i = 0; i < profiles.length; i++) {
        for(var j = 0; j <  req.session.currentUser.friends.length; j ++) {
            if(profiles[i].name === req.session.currentUser.friends[j]) {
                friends.push(profiles[i]);
                break;
            }
        }
    }


    var returnObj = {
        currentUser: req.session.currentUser,
        friends: friends
    }

    res.status(200).send(returnObj);

}