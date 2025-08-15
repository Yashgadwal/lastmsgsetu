// Example: Find questions and options on the page
const questions = document.querySelectorAll(".mcq-question"); // Adjust selector based on the actual HTML structure
questions.forEach((question, index) => {
  const options = question.querySelectorAll(".mcq-option"); // Adjust selector for options
  // Add a button to show the answer
  const answerButton = document.createElement("button");
  answerButton.innerText = "Show Answer";
  answerButton.addEventListener("click", () => {
    fetchAnswer(question.innerText, options).then((answer) => {
      alert(`Answer: ${answer}`);
    });
  });
  question.appendChild(answerButton);
});

// AI API Call to get the answer
async function fetchAnswer(questionText, options) {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_API_KEY`, // Replace with your OpenAI API key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Question: ${questionText}\nOptions: ${options.join(
          ", "
        )}\nAnswer:`,
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 60,
      }),
    });
    const data = await response.json();
    return data.choices[0].text.trim(); // Return the answer text from the AI response
  } catch (error) {
    console.error("Error fetching the answer:", error);
    return "Unable to fetch answer"; // Fallback in case of error
  }
}
