const membersData = JSON.parse(localStorage.getItem('membersData'));
const tableBody = document.querySelector('tbody');

if (!membersData || !Array.isArray(membersData)) {
  console.error('membersData가 존재하지 않거나 배열이 아닙니다!');
} else {
  console.log(membersData);
  renderTable();
}

function renderTable() {
  tableBody.innerHTML = '';
  membersData.forEach((member) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox" class="member-checkbox" /></td>
      <td>${member.name}</td>
      <td>${member.englishName}</td>
      <td>
        <a href="https://github.com/${member.github}" target="_blank" rel="noopener noreferrer" 
           style="color: black; text-decoration: none;">
          ${member.github}
        </a>
      </td>
      <td>${member.gender}</td>
      <td>${member.role}</td>
      <td>${member.firstWeekGroup}</td>
      <td>${member.secondWeekGroup}</td>
    `;
    tableBody.appendChild(row);
  });
}
