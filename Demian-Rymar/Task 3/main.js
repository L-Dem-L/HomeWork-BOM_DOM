const accordionHeaders = document.querySelectorAll(".accordion-header");

function toggleAccordion() {
    const accordionContent = this.nextElementSibling;
    const isOpen = this.classList.contains("active");
    accordionHeaders.forEach(header => {
        header.classList.remove("active");
        header.nextElementSibling.style.maxHeight = null;
    });
    if (!isOpen) {
        this.classList.add("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
}

accordionHeaders.forEach(header => {
    header.addEventListener("click", toggleAccordion);
});