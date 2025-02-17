function postComment() {
    const commentInput = document.getElementById("comment");
    const commentText = commentInput.value;
    if (commentText) {
        const commentList = document.getElementById("comment-list");
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear the textarea
    } else {
        alert("Please enter a comment.");
    }
}

// Handle form submission in the Contact page (basic example)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
    this.reset(); // Clear form fields
});