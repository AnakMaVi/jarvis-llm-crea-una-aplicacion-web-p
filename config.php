<?php
// config.php

// Configuración de la conexión a la base de datos
define('DB_HOST', 'localhost');
define('DB_NAME', 'barberia');
define('DB_USER', 'root');
define('DB_PASS', '');

// Configuración del enrutador
define('BASE_URL', 'http://localhost/barberia/');

// Configuración del SMTP para enviar emails
define('SMTP_HOST', 'smtp.example.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'noreply@barberia.com');
define('SMTP_PASS', 'your_password');

// Configuración de seguridad de la aplicación
define('SECURITY_SALT', 'your_secret_salt');

// Configuración de sesiones
session_start();

// Configuración de errores
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>