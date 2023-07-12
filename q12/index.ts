const guestList: string[] = ["Sir Imran Khan", "Sir Zia Khan", "Sir Azam Jamil"];
const unableToAttend: string = guestList[1]; 

console.log(`Unfortunately, ${unableToAttend} cannot make it to dinner.`);

guestList[1] = "Sir Arif Alvi"; 

for (const guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
