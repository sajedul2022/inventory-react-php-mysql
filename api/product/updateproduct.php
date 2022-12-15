<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->prid)
    && isset($data->prname)
    && isset($data->prprice)
    && !empty(trim($data->prid))
    && !empty(trim($data->prname))
    && !empty(trim($data->prprice))
) {
    $id = mysqli_real_escape_string($db_conn, trim($data->prid));
    $name = mysqli_real_escape_string($db_conn, trim($data->prname));
    $price = mysqli_real_escape_string($db_conn, trim($data->prprice));
    $details = mysqli_real_escape_string($db_conn, trim($data->prdet));

    $add = mysqli_query($db_conn, "update products set name ='$name', price ='$price', details='$details' where id='$id'");

    if ($add) {
        echo json_encode(["success" => true]);
        return;
    } else {
        echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
        return;
    }
} else {
    echo json_encode(["success" => false, "msg" => "Please fill all the required fields!"]);
    return;
}
