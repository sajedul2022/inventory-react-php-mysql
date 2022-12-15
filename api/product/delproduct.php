<?php
include('db_connection.php');


$data = file_get_contents("php://input");

$data = json_decode($data);

$id = $data->prodid;


$result =  mysqli_query($db_conn, "DELETE from products WHERE id = '$id'");

if ($result) {
    echo json_encode(["msg" => "Successfully Deleted Product"]);
}
