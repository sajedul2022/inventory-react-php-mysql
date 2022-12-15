<?php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (
    isset($data->prid)
    && !empty(trim($data->prid))
) {
    $prid = mysqli_real_escape_string($db_conn, trim($data->prid));
    $result = mysqli_query($db_conn, "SELECT * FROM products where id = '" . $prid . "'");
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            $viewjson["id"] = $row['id'];
            $viewjson["name"] = $row['name'];
            $viewjson["details"] = $row['details'];
            $viewjson["price"] = $row['price'];
            $json_array["prdata"][] = $viewjson;
        }
        //echo json_encode($json_array);
        echo json_encode(["success" => true, "product" => $json_array]);
        return;
    } else {
        echo json_encode(["success" => false]);
        return;
    }
}
