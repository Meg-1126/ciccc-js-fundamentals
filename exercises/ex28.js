/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: "Megumi",
  numberOfFriends: 9,
  messages: ["Hi", "Sleepy", "I'm studying right now."],
  postMessage: function (message) {
     facebookProfile.messages.push(message);
     return facebookProfile.messages;
  },
  deleteMessage: function (index) {
     facebookProfile.messages.splice(index, 1);
     return facebookProfile.messages;
  },
  addFriend: function () {
     facebookProfile.numberOfFriends++;
     return facebookProfile.numberOfFriends;
  },
  removeFriend: function () {
    facebookProfile.numberOfFriends--;
     return facebookProfile.numberOfFriends;
  }
};

// console.log(facebookProfile.postMessage("test"));
// console.log(facebookProfile.deleteMessage(1));
// console.log(facebookProfile.removeFriend());