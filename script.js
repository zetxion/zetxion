document.querySelectorAll(".year").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

const commentForm = document.getElementById("comment-form");
if (commentForm) {
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameField = document.getElementById("visitor-name");
    const commentField = document.getElementById("visitor-comment");
    const result = document.getElementById("form-result");
    const name = nameField.value.trim();
    const comment = commentField.value.trim();

    if (!name || !comment) {
      result.textContent = "Please enter both your name and a comment.";
      return;
    }

    result.replaceChildren();
    const heading = document.createElement("strong");
    heading.textContent = "Preview only — " + name;
    const card = document.createElement("div");
    card.className = "preview-card";
    const message = document.createElement("p");
    message.textContent = comment;
    card.append(heading, message);
    result.append(card);

    const note = document.createElement("p");
    note.className = "small-note";
    note.textContent = "This is a local demo preview. Your comment has not been sent or saved.";
    result.append(note);
  });
}
