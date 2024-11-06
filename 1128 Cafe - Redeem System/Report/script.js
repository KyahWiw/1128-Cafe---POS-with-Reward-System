// Function to display the saved orders in the report table
function displaySalesReport() {
  const salesReport = JSON.parse(localStorage.getItem("salesReport")) || [];
  const orderReportBody = document.getElementById("order-report-body");

  if (salesReport.length === 0) {
    orderReportBody.innerHTML =
      "<tr><td colspan='8'>No orders have been placed yet.</td></tr>";
    return;
  }

  salesReport.forEach((order, index) => {
    const orderDate = new Date(order.timestamp);
    const orderTime = orderDate.toLocaleTimeString();
    const orderDateFormatted = orderDate.toLocaleDateString();

    const row = document.createElement("tr");

    // Order ID (Index in the report)
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${orderDateFormatted}</td>
      <td>${orderTime}</td>
      <td>${order.items
        .map((item) => `${item.name} (${item.size})`)
        .join("<br>")}</td>
      <td>${order.items.length}</td>
      <td>₱${order.total.toFixed(2)}</td>
      <td>₱${(order.amountPaid - order.total).toFixed(2)}</td>
      <td>${order.pointsEarned}</td>
    `;

    orderReportBody.appendChild(row);
  });
}

// Call the function to display the report when the page loads
displaySalesReport();
