const modeButton = document.querySelector("#mode");
const mainH1 = document.querySelector('#title');
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("DARK MODE")) {
		main.style.background = "#000";
		mainH1.style.color = "#eee";
		modeButton.textContent = "LIGHTMODE";
	} else {
		main.style.background = "#eee";
		mainH1.style.color = "#000";
		modeButton.textContent = "DARK MODE";
	}
});
