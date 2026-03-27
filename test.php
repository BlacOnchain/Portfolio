// Ensuring Data Integrity during Receipt Generation
$conn->begin_transaction();

try {
    // 1. Record the main transaction
    $stmt1 = $conn->prepare("INSERT INTO transactions (user_id, total) VALUES (?, ?)");
    $stmt1->bind_param("id", $userId, $totalAmount);
    $stmt1->execute();
    
    $transactionId = $conn->insert_id;

    // 2. Map items to that transaction
    $stmt2 = $conn->prepare("INSERT INTO receipt_items (tx_id, product_name, price) VALUES (?, ?, ?)");
    foreach ($cart as $item) {
        $stmt2->bind_param("isd", $transactionId, $item['name'], $item['price']);
        $stmt2->execute();
    }

    $conn->commit(); // Only saves if EVERYTHING worked
} catch (Exception $e) {
    $conn->rollback(); // Wipes the data if there was an error
}