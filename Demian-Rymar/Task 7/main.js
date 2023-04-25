const bookList = document.getElementById('book-list');
let selectedItems = [];

bookList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'LI') {
        const index = Array.from(target.parentNode.children).indexOf(target);

        if (event.ctrlKey) {
            if (selectedItems.includes(index)) {
                selectedItems = selectedItems.filter((item) => item !== index);
            } else {
                selectedItems.push(index);
            }
        } else if (event.shiftKey && selectedItems.length > 0) {
            const lastIndex = selectedItems[selectedItems.length - 1];
            const range = [lastIndex, index].sort();
            selectedItems = Array.from({ length: range[1] - range[0] + 1 }, (_, i) => range[0] + i);
        } else {
            selectedItems = [index];
        }

        Array.from(target.parentNode.children).forEach((item, i) => {
            if (selectedItems.includes(i)) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }
});