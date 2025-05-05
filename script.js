document.getElementById('contact-form').addEventListener('submit', function(event) {
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