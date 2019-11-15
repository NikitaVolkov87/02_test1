<?php

$gotData = json_decode(file_get_contents('php://input'), true);
$resp = [
    'responce' => 'success',
    'body' => $gotData
];

header('Content-Type: application/json');
sleep(3);
echo json_encode($resp);
