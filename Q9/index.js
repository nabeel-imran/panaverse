var names = ["Nabeel", "Imran", "Ali"];
var message = "Salam, {name}! How are you?";
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    var personalizedMessage = message.replace("{name}", name_1);
    console.log(personalizedMessage);
}
