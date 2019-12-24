<?php

class One
{
    public $test1;

    public function __construct()
    {
        $this->test1 = 'ok1';
    }
    public function getV()
    {
        return $this->test2;
    }
}

class Two extends One
{
    protected $test2 = 'test2 is ok! =)';
}

$gotData = json_decode(file_get_contents('php://input'), true);
$resp = [
    'responce' => 'success',
    'body' => $gotData,
    'tests' => (new Two())->getV(),
];

header('Content-Type: application/json');
sleep(3);
echo json_encode($resp);
