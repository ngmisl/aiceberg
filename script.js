document.addEventListener("DOMContentLoaded", function () {
  const analyzeButton = document.getElementById("analyze-button");
  analyzeButton.addEventListener("click", analyzeSentiment);
});

async function analyzeSentiment() {
  const text = document.getElementById("text-input").value;
  const response = await fetch(
    "https://aiceberg-goapi.onrender.com/sentiment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );

  const result = await response.json();

  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `
      <p><strong>Sentiment Label:</strong> ${result.label}</p>
      <p><strong>Confidence Score:</strong> ${result.score.toFixed(2)}</p>
    `;
}
