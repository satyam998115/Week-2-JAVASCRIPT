function createCard(title, cName, views, monthsOld, duration, thumbnail){
    const container = document.querySelector(".container");
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = thumbnail;
    img.alt = title;
    card.appendChild(img);

    const titleElem = document.createElement("h3");
    titleElem.textContent = title;
    card.appendChild(titleElem);

    const channelElem = document.createElement("p");
    channelElem.textContent = `Channel: ${cName}`;
    card.appendChild(channelElem);

    const detailsElem = document.createElement("p");
    detailsElem.textContent = `${views.toLocaleString()} views • ${monthsOld} months ago • ${duration}`;
    card.appendChild(detailsElem);

    container.appendChild(card);
}

createCard("Introduction java | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");