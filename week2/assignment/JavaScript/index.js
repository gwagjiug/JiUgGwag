const elements = {
  tableBody: document.querySelector('.table__body'),
  searchButton: document.querySelector('.search__btn button'),
  resetButton: document.querySelector('.reset__btn button'),
  deleteButton: document.querySelector('.table__delete'),
  tableAddBtn: document.querySelector('.table__add'),
  modalBackdrop: document.querySelector('.modalBackDrop'),
  nameInput: document.getElementById('name'),
  englishNameInput: document.getElementById('ename'),
  githubInput: document.getElementById('github'),
  genderSelect: document.getElementById('gender'),
  roleSelect: document.getElementById('role'),
  week1Input: document.getElementById('week1'),
  week2Input: document.getElementById('week2'),
  checkAll: document.getElementById('check_all'),
  modal: document.getElementById('addModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
};

let membersData = JSON.parse(localStorage.getItem('membersData')) || [];
renderTable(membersData);

function renderTable(data) {
  elements.tableBody.innerHTML = data
    .map(
      (member, index) => `
        <tr>
          <td><input type="checkbox" class="member_checkbox" data-index="${index}" /></td>
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
        </tr>`
    )
    .join('');
}

function filterMembers() {
  const filteredData = membersData.filter((member) => {
    const {
      name,
      englishName,
      github,
      gender,
      role,
      firstWeekGroup,
      secondWeekGroup,
    } = member;
    return (
      (!elements.nameInput.value || name.includes(elements.nameInput.value)) &&
      (!elements.englishNameInput.value ||
        englishName.includes(elements.englishNameInput.value)) &&
      (!elements.githubInput.value ||
        github.includes(elements.githubInput.value)) &&
      (!elements.genderSelect.value ||
        gender === elements.genderSelect.value) &&
      (!elements.roleSelect.value || role === elements.roleSelect.value) &&
      (!elements.week1Input.value ||
        firstWeekGroup == elements.week1Input.value) &&
      (!elements.week2Input.value ||
        secondWeekGroup == elements.week2Input.value)
    );
  });
  renderTable(filteredData);
}

function addEventListeners() {
  // 모달 열기 및 닫기
  elements.tableAddBtn.addEventListener('click', openModal);
  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.modalBackdrop.addEventListener('click', () => {
    closeModal();
  });

  elements.searchButton.addEventListener('click', filterMembers);

  elements.checkAll.addEventListener('click', toggleSelectAll);

  elements.resetButton.addEventListener('click', resetFilters);

  elements.deleteButton.addEventListener('click', deleteSelectedMembers);
}

function openModal() {
  elements.modalBackdrop.classList.remove('hidden');
  elements.modal.showModal();
}

function closeModal() {
  elements.modalBackdrop.classList.add('hidden');
  elements.modal.close();
}

function toggleSelectAll() {
  const memberCheckBoxes = document.querySelectorAll('.member_checkbox');
  memberCheckBoxes.forEach(
    (checkbox) => (checkbox.checked = elements.checkAll.checked)
  );
}

function resetFilters() {
  elements.nameInput.value = '';
  elements.englishNameInput.value = '';
  elements.githubInput.value = '';
  elements.genderSelect.value = '';
  elements.roleSelect.value = '';
  elements.week1Input.value = '';
  elements.week2Input.value = '';
  renderTable(membersData);
}

function deleteSelectedMembers() {
  const checkedBoxes = document.querySelectorAll('.member_checkbox:checked');
  if (checkedBoxes.length === 0) return alert('삭제할 항목을 선택해주세요.');

  if (confirm('선택한 항목을 삭제하시겠습니까?')) {
    checkedBoxes.forEach((checkbox) => checkbox.closest('tr').remove());
    elements.checkAll.checked = false;
  }
}

addEventListeners();
