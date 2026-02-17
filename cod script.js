
const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

function displayFeedback() {
feedbackList.innerHTML = "";
feedbacks.forEach(fb => {
const div = document.createElement("div");
div.classList.add("feedback-item");
div.innerHTML = `
<strong>${fb.name || "Anonim"}</strong> (${fb.rating}⭐)
<p>${fb.message}</p>
`;
feedbackList.appendChild(div);
});
}

form.addEventListener("submit", function(e) {
e.preventDefault();

const newFeedback = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value,
rating: document.getElementById("rating").value
};

feedbacks.push(newFeedback);
localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

form.reset();
displayFeedback();
});

displayFeedback();
