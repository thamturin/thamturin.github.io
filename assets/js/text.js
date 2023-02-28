$(function () {
  var title = document.title,
    animSeq = ["|"],
    animIndex = 0,
    titleIndex = 0;
  function doInverseSpinZeroPitch() {
    var loadTitle = title.substring(0, titleIndex);
    if (titleIndex > title.length) {
      animIndex = 0;
      titleIndex = 0;
    }
    if (animIndex > 1) {
      titleIndex++;
      animIndex = 0;
    }
    document.title = loadTitle + animSeq[0];
    animIndex++;
  }
  window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
  $(".typed").typed({
    strings: [
      "Hi, my name is Rin :D",
      "I love chocolate and ice cream",
      "I'm learning Java =)",
      "I like to play Minecraft",
      "From Vietnam with love 💖",
      "rin.png#2605 is my Discord",
      "iPhone, iMac, ILoveDamThanhThao",
      "chi yeu minh TThao",
      "I don't know what to write",
      "Nice, you are still reading this shiet 😋",
      "I'll try 2 be good at Math to calculate the distance from here to your heart =(",
      "2 9 3 2 0 1 0",
      "out of idea :idk:",
      "1 + 1 = 3",
      "2-3 con vịt, em cho anh ch1t. 2-3 con chồn, yêu em vãi l. À ko có j",
      "haiyaaa",
      "fuiyoo!",
      "bro chill",
      "never gonna give u up",
      "pad englysh",
      "siuuuuuuuuu",
      "messibucu",
      "alright u are the best",
    ],
    typeSpeed: 135,
    loop: true,
    cursorChar: "|",
  });
});
