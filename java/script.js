// for the form, table and export functions

// calling all the elemnts i need from the html
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("budget-form");
    const itemName = document.getElementById("item-name");
    const amount = document.getElementById("amount");
    const category = document.getElementById("category");
    const budgetList = document.getElementById("budget-list");
    const totalBudget = document.getElementById("total-budget");
    const filterCategory = document.getElementById("filter-category");
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const exportCsvBtn = document.getElementById("export-csv");
    const exportPdfBtn = document.getElementById("export-pdf");
// to store everthing the user adds
    let budgetItems = JSON.parse(localStorage.getItem("budgetItems")) || [];
   
    
//  for the filter function, so when filter is use it will display data from only that category  
    function renderBudget() {
        budgetList.innerHTML = "";
        let total = 0;
        let filteredItems = budgetItems.filter(item =>
            filterCategory.value === "All" || item.category === filterCategory.value
        );
// to add and store the values to the table html
        filteredItems.forEach((item, index) => {
            total += parseFloat(item.amount);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>₦${item.amount}</td>
                <td>${item.category}</td>
                <td>
                    <button class="edit" onclick="editItem(${index})">Edit</button>
                    <button class="delete" onclick="deleteItem(${index})">Delete</button>
                </td>
            `;
            budgetList.appendChild(row);
        });

        totalBudget.textContent = `₦${total.toFixed(2)}`;
        localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
    }
// to be able to edit the values
    function addItem(event) {
        event.preventDefault();

        const newItem = {
            name: itemName.value,
            amount: parseFloat(amount.value).toFixed(2),
            category: category.value
        };

        budgetItems.push(newItem);
        renderBudget();
        form.reset();
    }

    window.editItem = function (index) {
        const item = budgetItems[index];
        itemName.value = item.name;
        amount.value = item.amount;
        category.value = item.category;

        budgetItems.splice(index, 1);
        renderBudget();
    };
    
// to be able to delete an item
    window.deleteItem = function (index) {
        budgetItems.splice(index, 1);
        renderBudget();
    };

    filterCategory.addEventListener("change", renderBudget);
    form.addEventListener("submit", addItem);

  
// to export as csv
    exportCsvBtn.addEventListener("click", () => {
        let csv = "Item,Amount,Category\n";
        budgetItems.forEach(item => {
            csv += `${item.name},${item.amount},${item.category}\n`;
        });
        let blob = new Blob([csv], { type: "text/csv" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "budget.csv";
        a.click();
    });
// to export as pdf
    exportPdfBtn.addEventListener("click", () => {
        window.print();
    });

    renderBudget();
});
