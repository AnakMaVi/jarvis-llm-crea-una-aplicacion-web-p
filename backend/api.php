<?php
namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ApiService extends Controller
{
    public function reserve($date, $time, $service, $customerName, $customerEmail, $customerPhone)
    {
        $reservation = new Reservation();
        $reservation->date = $date;
        $reservation->time = $time;
        $reservation->service = $service;
        $reservation->customer_name = $customerName;
        $reservation->customer_email = $customerEmail;
        $reservation->customer_phone = $customerPhone;
        $reservation->save();

        return response()->json(['message' => 'Reservation created successfully'], 201);
    }

    public function getClients()
    {
        $clients = Reservation::select('customer_name', 'customer_email', 'customer_phone')->distinct()->get();
        return response()->json($clients);
    }

    public function getClientsEmails()
    {
        $clientsEmails = Reservation::select('customer_email')->distinct()->get();
        return response()->json($clientsEmails);
    }

    public function getClientsPhones()
    {
        $clientsPhones = Reservation::select('customer_phone')->distinct()->get();
        return response()->json($clientsPhones);
    }

    public function getReservationsByDate($date)
    {
        $reservations = Reservation::where('date', $date)->get();
        return response()->json($reservations);
    }

    public function getReservationsByService($service)
    {
        $reservations = Reservation::where('service', $service)->get();
        return response()->json($reservations);
    }

    public function getReservationsByDateAndTime($date, $time)
    {
        $reservations = Reservation::where('date', $date)->where('time', $time)->get();
        return response()->json($reservations);
    }
}