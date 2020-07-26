document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteButton = document.querySelector('#delete-all');
    deleteButton.addEventListener('click', handleDeleteAll);
})

const handleFormSubmit = function(event) {
    event.preventDefault();
    const form = document.querySelector('#new-item-form');
    const resultList = document.querySelector('#animal-list');
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.textContent = `Name: ${event.target.name.value} | Species: ${event.target.species.value} | Country: ${event.target.country.value}`;
    resultList.appendChild(newListItem);
    form.reset();
}

const handleDeleteAll = function(event) {
    const deletedList = document.querySelector('#animal-list');
    deletedList.querySelectorAll('*').forEach(listItem => listItem.remove());
}