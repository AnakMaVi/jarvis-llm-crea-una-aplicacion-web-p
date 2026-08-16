// script.js

// Función para mostrar el formulario de cita
function showAppointmentForm() {
  document.getElementById('appointment-form').style.display = 'block';
}

// Función para ocultar el formulario de cita
function hideAppointmentForm() {
  document.getElementById('appointment-form').style.display = 'none';
}

// Función para manejar el evento submit del formulario de cita
document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Aquí puedes agregar la lógica para procesar la cita
  alert('Cita agendada con éxito!');
  hideAppointmentForm();
});

// Función para mostrar el catálogo de cortes
function showCutsCatalog() {
  document.getElementById('cuts-catalog').style.display = 'block';
}

// Función para ocultar el catálogo de cortes
function hideCutsCatalog() {
  document.getElementById('cuts-catalog').style.display = 'none';
}

// Función para manejar la entrada de búsqueda en el catálogo de cortes
document.getElementById('search-cuts').addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const cuts = document.querySelectorAll('.cut-item');
  cuts.forEach(cut => {
    const cutName = cut.querySelector('.cut-name').textContent.toLowerCase();
    if (cutName.includes(searchValue)) {
      cut.style.display = 'block';
    } else {
      cut.style.display = 'none';
    }
  });
});

// Eventos de botones para mostrar y ocultar el formulario y el catálogo
document.getElementById('show-appointment-btn').addEventListener('click', showAppointmentForm);
document.getElementById('hide-appointment-btn').addEventListener('click', hideAppointmentForm);
document.getElementById('show-cuts-btn').addEventListener('click', showCutsCatalog);
document.getElementById('hide-cuts-btn').addEventListener('click', hideCutsCatalog);