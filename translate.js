document.addEventListener("DOMContentLoaded", async () => {
  const langCode = navigator.userLanguage || navigator.language;
  const lang = langCode.substr(0, 2);

  const textsResponse = await fetch("lang/" + lang + ".json");
  const texts = await textsResponse.json();

  const elements = document.querySelectorAll("[data-content]");

  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = texts[elements[i].getAttribute("data-content")];
  }
});
