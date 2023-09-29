const form = document.getElementById("multiplication-form");
const table = document.getElementById("multiplication-table");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("number-input").value;
  const number = Number(input);

  if (!isNaN(number) && number <= 100) {
    table.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
      const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      const cell2 = document.createElement("td");

      cell1.textContent = `${number} * ${i}`;
      cell2.textContent = `${number * i}`;

      row.appendChild(cell1);
      row.appendChild(cell2);
      table.appendChild(row);
    }
  }
});
