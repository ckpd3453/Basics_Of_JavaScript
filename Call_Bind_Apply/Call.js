const friend = {
  friendName: function (city, occupation) {
    console.log(
      this.firstName,
      this.lastName,
      "living in",
      city,
      "is a",
      occupation
    );
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

friend.friendName.call(friend2, "Ranchi", "Doctor"); // Call Method with Argument seperately.
