const names: string[] = ["Nabeel", "Imran", "Ali"];
const message: string = "Salam, {name}! How are you?";

for (const name of names) {
  const personalizedMessage = message.replace("{name}", name);
  console.log(personalizedMessage);
}
