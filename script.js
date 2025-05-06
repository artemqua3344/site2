document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Отменяем отправку формы

  const form = event.target;
  const formData = new FormData(form);

  fetch('http://127.0.0.1', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) throw new Error("Ошибка сети");
      return response.text(); // или .json() если ожидается JSON
    })
    .then(data => {
      alert('Форма успешно отправлена!');
      console.log('Ответ сервера:', data);
      form.reset(); // очищаем форму
    })
    .catch(error => {
      alert('Ошибка при отправке формы');
      console.error('Ошибка:', error);
    });
});



document.getElementById('contact-form2').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name2').value.trim();
  const agreement = document.getElementById('agreement2').checked;

  if (!name || !agreement) {
    Swal.fire({
      icon: 'error',
      title: 'Ошибка',
      text: 'Пожалуйста, заполните обязательные поля.'
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Данные отправлены',
    html: `<p><strong>Имя:</strong> ${name}</p>`
  });
});

document.addEventListener('DOMContentLoaded', () => {
  getJsonValues();
});

async function getJsonValues(fileName = 'data.json') {
  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке JSON');
    }

    const jsonArray = await response.json();
    const values = jsonArray.flatMap(obj => Object.values(obj));

    const output = document.getElementById('output');
    if (output) {
      output.textContent = JSON.stringify(values, null, 2);
    } else {
      console.warn('Элемент #output не найден.');
    }

  } catch (error) {
    console.error('Ошибка:', error);
    const output = document.getElementById('output');
    if (output) {
      output.textContent = 'Ошибка при загрузке данных.';
    }
  }
}

// Загружаем данные при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  getJsonValues();
});
