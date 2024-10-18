const membersData = JSON.parse(localStorage.getItem('membersData')) || [];
const tableBody = document.querySelector('.table__body');
const searchButton = document.querySelector('.search__btn button');
const resetButton = document.querySelector('.reset__btn button');

// 필터 요소 가져오기
const nameInput = document.getElementById('name');
const englishNameInput = document.getElementById('ename');
const githubInput = document.getElementById('github');
const genderSelect = document.getElementById('gender');
const roleSelect = document.getElementById('role');
const week1Input = document.getElementById('week1');
const week2Input = document.getElementById('week2');
const checkAll = document.getElementById('check_all');

// 데이터 렌더링 함수
function renderTable(data) {
  tableBody.innerHTML = ''; // 기존 데이터 초기화
  data.forEach((member) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox" class="member_checkbox" /></td>
      <td>${member.name}</td>
      <td>${member.englishName}</td>
      <td>
        <a href="https://github.com/${member.github}" target="_blank" 
           rel="noopener noreferrer" style="color: black; text-decoration: none;">
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

// 필터링 로직
function filterMembers() {
  const filteredData = membersData.filter((member) => {
    return (
      (!nameInput.value || member.name.includes(nameInput.value)) &&
      (!englishNameInput.value ||
        member.englishName.includes(englishNameInput.value)) &&
      (!githubInput.value || member.github.includes(githubInput.value)) &&
      (!genderSelect.value || member.gender === genderSelect.value) &&
      (!roleSelect.value || member.role === roleSelect.value) &&
      (!week1Input.value || member.firstWeekGroup == week1Input.value) &&
      (!week2Input.value || member.secondWeekGroup == week2Input.value)
    );
  });
  renderTable(filteredData);
}

// 검색 버튼 이벤트
searchButton.addEventListener('click', filterMembers);
checkAll.addEventListener('click', () => {
  const memberCheckBoxes = document.querySelectorAll('.member_checkbox');
  const isChecked = checkAll.checked;

  memberCheckBoxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
});

// 초기화 버튼 이벤트 (필터 값 초기화)
resetButton.addEventListener('click', () => {
  nameInput.value = '';
  englishNameInput.value = '';
  githubInput.value = '';
  genderSelect.value = '';
  roleSelect.value = '';
  week1Input.value = '';
  week2Input.value = '';
  renderTable(membersData); // 전체 데이터 렌더링
});

// 초기 테이블 렌더링
renderTable(membersData);
