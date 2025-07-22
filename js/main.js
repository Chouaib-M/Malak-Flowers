onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const messages = [
      "Malak, your spirit blooms like the first rose of spring—unfolding with quiet courage, painting the world in hues of hope 🌹",
      "Like jasmine at twilight, your presence perfumes even the heaviest hours with light 🌼",
      "You are the garden where kindness never fades, where love takes root and grows wild 🌺",
      "Every petal of your being whispers a story more beautiful than the last 🌸",
      "This digital bouquet will never wilt—just like the love you inspire every day 💐"
    ];
    const titleElement = document.getElementById("title");
    let index = 0;

    function showMessage() {
      if (index < messages.length) {
        const span = document.createElement("span");
        span.className = "title-line";
        span.style.opacity = "0";
        span.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        span.style.transform = "translateY(20px)";
        span.innerText = messages[index];
        titleElement.appendChild(span);

        // Trigger animation
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, 50);

        index++;
        setTimeout(showMessage, 3000); // Delay before showing the next message
      }
    }

    showMessage();
    clearTimeout(c);
  }, 1000);
};
