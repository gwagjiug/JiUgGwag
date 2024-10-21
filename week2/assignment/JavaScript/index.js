document.addEventListener('DOMContentLoaded', () => {
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

  const modalElements = {
    modalName: document.querySelector('.inputName'),
    modalEname: document.querySelector('.inputEname'),
    modalGithub: document.querySelector('.inputGithub'),
    modalGender: document.querySelector('.selectGender'),
    modalRole: document.querySelector('.selectRole'),
    modalWeek1: document.querySelector('.inputWeek1'),
    modalWeek2: document.querySelector('.inputWeek2'),
    modalAddBtn: document.querySelector('.addDataBtn'),
    modalForm: document.querySelector('form'),
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
        (!elements.nameInput.value ||
          name.includes(elements.nameInput.value)) &&
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
    elements.modal.addEventListener('click', (e) => e.stopPropagation());
    // 모달 열기 및 닫기
    elements.tableAddBtn.addEventListener('click', openModal);
    elements.modalCloseBtn.addEventListener('click', closeModal);
    elements.modalBackdrop.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target === elements.modalBackdrop) {
        closeModal();
      }
    });

    modalElements.modalForm.addEventListener('submit', submitPeople);
    elements.searchButton.addEventListener('click', filterMembers);
    elements.checkAll.addEventListener('click', toggleSelectAll);
    elements.resetButton.addEventListener('click', resetFilters);
    elements.deleteButton.addEventListener('click', deleteSelectedMembers);
  }

  function openModal() {
    elements.modalBackdrop.classList.remove('hidden');
    elements.modal.show();
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
      const indexesToDelete = Array.from(checkedBoxes).map((checkbox) =>
        parseInt(checkbox.dataset.index, 10)
      );

      indexesToDelete
        .sort((a, b) => b - a)
        .forEach((index) => membersData.splice(index, 1));

      localStorage.setItem('membersData', JSON.stringify(membersData));

      renderTable(membersData);

      elements.checkAll.checked = false;
    }
  }

  function submitPeople(e) {
    e.preventDefault();

    // 모든 필드가 채워졌는지 확인
    const {
      modalName,
      modalEname,
      modalGithub,
      modalGender,
      modalRole,
      modalWeek1,
      modalWeek2,
    } = modalElements;

    if (
      !modalName.value.trim() ||
      !modalEname.value.trim() ||
      !modalGithub.value.trim() ||
      !modalGender.value ||
      !modalRole.value ||
      !modalWeek1.value.trim() ||
      !modalWeek2.value.trim()
    ) {
      alert('모두 입력해주세요!');
      return;
    }

    // 새 멤버 추가
    const newMember = {
      name: modalName.value,
      englishName: modalEname.value,
      github: modalGithub.value,
      gender: modalGender.value,
      role: modalRole.value,
      firstWeekGroup: modalWeek1.value,
      secondWeekGroup: modalWeek2.value,
    };

    membersData.push(newMember);
    localStorage.setItem('membersData', JSON.stringify(membersData));
    renderTable(membersData);

    modalElements.modalForm.reset();
    alert('멤버가 성공적으로 추가되었어요!');
    closeModal();
  }

  addEventListeners();
});
