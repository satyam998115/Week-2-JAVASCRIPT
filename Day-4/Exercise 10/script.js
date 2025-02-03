const adjectives = ["Crazy", "Amazing", "Fire"];
const shopNames = ["Engine", "Foods", "Garments"];
const anotherWords = ["Bros", "Limited", "Hub"];

function generateName() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const shop = shopNames[Math.floor(Math.random() * shopNames.length)];
    const another = anotherWords[Math.floor(Math.random() * anotherWords.length)];
    document.getElementById("name").innerText = `${adj} ${shop} ${another}`;
}