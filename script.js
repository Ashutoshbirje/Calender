window.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  document.querySelector(".header h1").textContent = `${monthName} ${year}`;

  const daysContainer = document.querySelector(".days");
  daysContainer.innerHTML = "";

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty");
    daysContainer.appendChild(emptyDiv);
  }

  for (let day = 1; day <= totalDaysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    if (
      day === todayDate &&
      currentMonth === todayMonth &&
      currentYear === todayYear
    ) {
      dayDiv.classList.add("today");
    } else {
      dayDiv.classList.add("empty");
    }

    daysContainer.appendChild(dayDiv);
  }

});
