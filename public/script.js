// Client-side JavaScript for the Blog Tourism Blog

document.addEventListener('DOMContentLoaded', () => {
    // Confirm delete actions

    const deleteForms = document.querySelectorAll('.delete-form');
    deleteForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!confirm('Are you sure you want to delete this post?')) {
                e.preventDefault();
            }
        });
    });
}

// Add fade-in animation to elements
const animateElements = document.querySelectorAll('.post-card, .full-post, .form-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Enhance textares with auto-resize
const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    });
    // Trigger input event to set initial height
    textarea.dispatchEvent(new Event('input'));
});
