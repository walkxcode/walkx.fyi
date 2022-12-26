const descriptionElement = document.getElementById("description");
const descriptions = [
  "web enthusiast.",
  "web developer.",
  "retro lover.",
  "tech enthusiast.",
  "homelabber.",
  "coder.",
  "maker.",
  "repairer.",
  "student.",
  "musician.",
  "gamer.",
  "music lover.",
  "idiot.",
  "data hoarder.",
  "cat person.",
  "DIY-er.",
  "chocy-milk addict.",
  "coffee addict.",
  "nerd.",
  "geek.",
  "it guy.",
  "tech guy.",
];

// Use the modulo operator to ensure the random number is within the range of the descriptions array
function updateDescription() {
  // Remove the fade-in class and add the fade-out class to trigger the fade-out animation
  descriptionElement.classList.remove("fade-in");
  descriptionElement.classList.add("fade-out");

  // Wait for the fade-out animation to complete before updating the text and triggering the fade-in animation
  setTimeout(() => {
    const randomIndex =
      Math.floor(Math.random() * descriptions.length) % descriptions.length;
    descriptionElement.textContent = descriptions[randomIndex];
    descriptionElement.classList.remove("fade-out");
    descriptionElement.classList.add("fade-in");
  }, 500);
}

// Call the updateDescription function every 5 seconds (5000 milliseconds)
setInterval(updateDescription, 5000);
