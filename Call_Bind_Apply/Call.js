const friend = {
  friendName: function (city) {
    console.log(this.firstName, this.lastName, "is from", city);
  },
};

const friend1 = {
  firstName: "Rahul",
  lastName: "Prasad",
};

const friend2 = {
  firstName: "Prakash",
  lastName: "Gupta",
};

friend.friendName.call(friend2, "Ranchi"); // Call Method with Argument.
