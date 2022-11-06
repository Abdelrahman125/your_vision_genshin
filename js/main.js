var audioElement = new Audio('https://github.com/healer-op/HealCloud/blob/main/mp3/Genshin%20Impact%20Teleport%20Sound%20Effect.mp3?raw=true');
(function () {
  window.addEventListener(
    "click",
    () => 
    document.documentElement.classList.toggle("dark"),
    false
  );

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const setting = localStorage.getItem("color-schema") || "auto";
  if (setting === "dark" || (prefersDark && setting !== "light"))
    document.documentElement.classList.toggle("dark", true);
})();

window.addEventListener('click', function() { audioElement.play() }, false);



function a_3la_gnb_yasta(callback, wait) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }
  
  document.getElementById('tstme').addEventListener('click', a_3la_gnb_yasta(() => {
    window. location. href = 'test.html';
  }, 1200))