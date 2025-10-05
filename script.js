window.onload = function() {
    var stylesheet = document.getElementById('stylesheet');
    if (localStorage.getItem('colorblindMode') === 'true') {
        stylesheet.setAttribute('href', 'style2.css');
    }
};

document.getElementById('changeStyleButton').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'style.css') {
        stylesheet.setAttribute('href', 'style2.css');
        localStorage.setItem('colorblindMode', 'true');
    } else {
        stylesheet.setAttribute('href', 'style.css');
        localStorage.setItem('colorblindMode', 'false');
    }
});
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');
    const name = nameInput.value;
    const commentText = commentInput.value;

    if (name && commentText) {
        const commentsList = document.getElementById('commentsList');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const nameSpan = document.createElement('span');
        nameSpan.style.fontWeight = 'bold';
        nameSpan.textContent = name + ': ';

        const commentSpan = document.createElement('span');
        commentSpan.textContent = commentText;

        newComment.appendChild(nameSpan);
        newComment.appendChild(commentSpan);

        commentsList.appendChild(newComment);

        nameInput.value = '';
        commentInput.value = '';

        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ name: name, text: commentText });
        localStorage.setItem('comments', JSON.stringify(comments));

        nameInput.value = '';
        commentInput.value = '';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const commentsList = document.getElementById('commentsList');
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(comment => {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const nameSpan = document.createElement('span');
        nameSpan.style.fontWeight = 'bold';
        nameSpan.textContent = comment.name + ': ';

        const commentSpan = document.createElement('span');
        commentSpan.textContent = comment.text;

        newComment.appendChild(nameSpan);
        newComment.appendChild(commentSpan);

        commentsList.appendChild(newComment);
    });
});
