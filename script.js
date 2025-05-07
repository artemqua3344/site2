document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); 
  const form = event.target;
  const formData = new FormData(form);

  fetch('http://127.0.0.1', {
    method: 'POST',
    body: formData,
  })

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
    const response = await fetch(fileName);

    const jsonArray = await response.json();
    const output = document.getElementById('output');

    output.innerHTML = '';

    for (let i = 0; i < jsonArray.length; i++) {
      const name = jsonArray[i].name;
      const text = jsonArray[i].text;

      const reviewBlock = document.createElement('div');
      reviewBlock.classList.add('review');
      reviewBlock.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
      output.appendChild(reviewBlock);
    }
 
}

window.addEventListener('DOMContentLoaded', () => {
  getJsonValues();
});
