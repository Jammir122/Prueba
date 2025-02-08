const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Contar respuestas correctas e incorrectas
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  // Respuestas correctas
  const correctAnswersData = {
    q1: 'Black sabbath',
    q2: 'Bruce Dickinson',
    q3: 'Metallica, Slayer, Megadeth y Anthrax',
    q4: 'Dio',
    q5: 'Mayhem',
    q6: 'Possessed',
    q7: 'Chuck Schuldiner',
    q8: 'Mayhem',
    q9: '1981 - Show No Mercy',
    q10: 'Mike Portnoy'
  };

  // Obtener las respuestas del formulario
  const formData = new FormData(form);

  // Verificar cada pregunta y contar las respuestas correctas e incorrectas
  Object.keys(correctAnswersData).forEach((question) => {
    const userAnswer = formData.get(question); // Obtiene la respuesta del usuario
    const correctAnswer = correctAnswersData[question]; // Respuesta correcta

    // Comparar la respuesta del usuario con la respuesta correcta
    if (userAnswer === correctAnswer) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
  });

  // Datos adicionales con el conteo de respuestas
  const emailData = {
    from_name: formData.get('from_name'),
    from_nameteam:formData.get('from_nameteam'),
    email_id: formData.get('email_id'),
    q1: formData.get('q1'),
    q2: formData.get('q2'),
    q3: formData.get('q3'),
    q4: formData.get('q4'),
    q5: formData.get('q5'),
    q6: formData.get('q6'),
    q7: formData.get('q7'),
    q8: formData.get('q8'),
    q9: formData.get('q9'),
    q10: formData.get('q10'),
    correct_answers: correctAnswers,
    incorrect_answers: incorrectAnswers,
    message: `Respuestas correctas: ${correctAnswers} | Respuestas incorrectas: ${incorrectAnswers}`
  };

  // Cambiar el texto del botón mientras se envía el formulario
  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_rgmle1l';

  // Enviar el formulario junto con los datos del conteo de respuestas
  emailjs.send(serviceID, templateID, emailData)
    .then(() => {
      btn.value = 'Send Email';
      alert('¡Formulario enviado exitosamente!');
    }, (err) => {
      btn.value = 'Send Email';
      alert('Hubo un error: ' + JSON.stringify(err));
    });
});
