// main.js

document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const date = document.getElementById('date').value;
    const timing = document.getElementById('timing').value;
    // Add other input fields as needed
  
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phoneNumber, city, state, date, timing /* other fields */ })
    });
  
    const newUser = await response.json();
    console.log(newUser);
    const userList = document.getElementById('userList');
    const listItem = document.createElement('li');
    listItem.textContent = `${newUser.name} - ${newUser.email} - ${newUser.phoneNumber} - ${newUser.city} - ${newUser.state} - ${newUser.date} - ${newUser.timing} /* other properties */`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-id', newUser.id);
    deleteButton.classList.add('deleteBtn');
    listItem.appendChild(deleteButton);
    userList.appendChild(listItem);
  });
  
  document.getElementById('userList').addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      const userId = e.target.getAttribute('data-id');
      await fetch(`/api/users/${userId}`, {
        method: 'DELETE'
      });
      e.target.parentElement.remove();
    }
  });
  