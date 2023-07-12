var guestList = ["Sir Imran Khan", "Sir Zia Khan", "Sir Azam Jamil"];
var unableToAttend = guestList[1];
console.log("Unfortunately, ".concat(unableToAttend, " cannot make it to dinner."));
guestList[1] = "Sir Arif Alvi";
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
