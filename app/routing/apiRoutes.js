var friends = require("../data/friends");


module.exports = function(app) {
  


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
// Here we create a var for setting the friendMatch
  var friendMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
  };
// We did through the requset data to find survey data
  var newData = req.body;
  var newScores = newData.scores;
// We create a varible to find the diffence between the new friend and the friends in the array
  var totalDifference;
// We run through the array and check for current friend score
  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;
// We console.log the currentFriend name
    console.log(currentFriend.name);
// We create a varible to store the currentFriend score in
// We also create a varible and set it to the current user score
    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var currentUserScore = newScores[j];
// We run some math to find the diffenence between current user and current friend.
      totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
    }
// If they are the least amount of diffenence, then the match is made and the data is pushed to the friendsMatch JSON
    if (totalDifference <= friendMatch.friendDifference) {
      
      friendMatch.name = currentFriend.name;
      friendMatch.photo = currentFriend.photo;
      friendMatch.friendDifference = totalDifference;
    }
  }

  friends.push(newData);

  res.json(friendMatch);
});
};

