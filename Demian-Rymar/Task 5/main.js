
const form = document.querySelector('form');
const calendar = document.getElementById('calendar');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const weeksInMonth = Math.ceil((firstDayOfMonth + daysInMonth) / 7);
    let calendarHTML = '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr>';
    let dayOfMonth = 1;

    for (let i = 0; i < weeksInMonth; i++) {
        calendarHTML += '<tr>';

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                calendarHTML += '<td></td>';
            } else if (dayOfMonth > daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                calendarHTML += `<td>${dayOfMonth}</td>`;
                dayOfMonth++;
            }
        }

        calendarHTML += '</tr>';
    }

    calendarHTML += '</table>';
    calendar.innerHTML = calendarHTML;
});