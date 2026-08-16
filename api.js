// api.js
import axios from 'axios';

// Configuración base de la API
const BASE_URL = 'https://your-backend-url.com/api';

// Función para obtener todos los cortes del catalogo
export async function getCuts() {
  try {
    const response = await axios.get(`${BASE_URL}/cuts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cuts:', error);
    return [];
  }
}

// Función para crear una nueva cita
export async function createAppointment(data) {
  try {
    const response = await axios.post(`${BASE_URL}/appointments`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    return null;
  }
}

// Función para obtener la información de un usuario por su ID
export async function getUserById(userId) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

// Función para actualizar la información de un usuario
export async function updateUser(userId, data) {
  try {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
}