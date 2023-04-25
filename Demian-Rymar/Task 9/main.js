const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const ths = table.querySelectorAll('th');
const trs = Array.from(tbody.querySelectorAll('tr'));

const sortColumn = (idx, asc) => {
    const type = ths[idx].getAttribute('data-type');
    trs.sort(comparer(idx, asc, type));
    trs.forEach(tr => tbody.appendChild(tr));
    ths.forEach(th => th.classList.remove('sort-asc', 'sort-desc'));
    const direction = asc ? 'sort-asc' : 'sort-desc';
    ths[idx].classList.add(direction);
};

const comparer = (idx, asc, type) => (a, b) => {
    const aVal = getValue(a.cells[idx], type);
    const bVal = getValue(b.cells[idx], type);

    if (aVal === bVal) {
        return 0;
    }

    const sortOrder = asc ? 1 : -1;
    if (aVal < bVal) {
        return -1 * sortOrder;
    } else {
        return 1 * sortOrder;
    }
};

const getValue = (cell, type) => {
    switch (type) {
        case 'number':
            return parseFloat(cell.textContent);
        case 'string':
            return cell.textContent;
        default:
            return cell.textContent;
    }
};

ths.forEach((th, idx) => {
    th.addEventListener('click', () => {
        const asc = th.classList.contains('sort-asc');
        sortColumn(idx, !asc);
    });
});
