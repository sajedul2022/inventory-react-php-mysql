<?php
include('db_connect.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
if (isset($data->pname) && $data->pname != '') {
    $pname = $data->pname;
    $pquantity = $data->pquantity;
    $pprice = $data->pprice;

    $result = mysqli_query($db_conn, "INSERT INTO products (name, quantity, sale_price) VALUES ('$pname', '$pquantity', '$pprice')");

    if (mysqli_affected_rows($db_conn) > 0) {
        echo json_encode(["msg" => "Successfully Inserted"]);
    }
} else {
    echo json_encode(["msg" => "Problem"]);
}
