<?php
include('db_connect.php');

$sql = "SELECT * FROM products";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['name'] = $row['name'];
    $products['quantity'] = $row['quantity'];
    $products['sale_price'] = $row['sale_price'];

    $myproducts['pr'][] = $products;
}

echo json_encode(['success' => "Yes", 'datas' => $myproducts]);



// id	
// name	
// quantity	
// sale_price	

// buy_price	
// categorie_id	
// media_id	
// date