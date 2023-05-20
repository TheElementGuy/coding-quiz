const sampleText = document.getElementByID("sample-text");
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
async function loadFileAndReturn(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (err) {
    console.error(err);
  }
}
function fillSampleText() {
	switch(randomIntFromInterval(1, 1)) {
		case 1:
			sampleText.innerHTML = loadFileAndReturn("https://jpermsolves.github.io/coding-quiz/html.txt");
	}
}
fillSampleText();
