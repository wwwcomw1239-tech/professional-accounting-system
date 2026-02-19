// State Management
let state = {
    invoices: JSON.parse(localStorage.getItem('invoices')) || [],
    expenses: JSON.parse(localStorage.getItem('expenses')) || [],
    customers: JSON.parse(localStorage.getItem('customers')) || []
};

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        
        item.classList.add('active');
        const viewId = item.getAttribute('data-view');
        document.getElementById(`${viewId}-view`).classList.add('active');
    });
});

// Initialization
function init() {
    updateDashboard();
    renderInvoicesTable();
    initCharts();
}

// Dashboard Updates
function updateDashboard() {
    const totalRevenue = state.invoices
        .filter(inv => inv.status === 'paid')
        .reduce((sum, inv) => sum + Number(inv.amount), 0);
    
    document.getElementById('total-revenue').innerText = `${totalRevenue.toLocaleString()} ر.ي`;
    
    // Recent Transactions
    const recentList = document.getElementById('recent-list');
    recentList.innerHTML = state.invoices.slice(-5).reverse().map(inv => `
        <li style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee">
            <span>${inv.customer}</span>
            <span style="font-weight:bold">${inv.amount} ر.ي</span>
        </li>
    `).join('');
}

// Invoices Management
function renderInvoicesTable() {
    const tbody = document.getElementById('invoices-table-body');
    tbody.innerHTML = state.invoices.map((inv, index) => `
        <tr>
            <td>#${index + 1}</td>
            <td>${inv.customer}</td>
            <td>${inv.date}</td>
            <td>${Number(inv.amount).toLocaleString()}</td>
            <td><span class="status-badge status-${inv.status}">${inv.status === 'paid' ? 'مدفوعة' : 'معلقة'}</span></td>
            <td>
                <button onclick="deleteInvoice(${index})" style="color:red; background:none; border:none; cursor:pointer">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Add Invoice Form
document.getElementById('invoice-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newInvoice = {
        customer: document.getElementById('inv-customer').value,
        amount: document.getElementById('inv-amount').value,
        date: document.getElementById('inv-date').value,
        status: document.getElementById('inv-status').value
    };
    
    state.invoices.push(newInvoice);
    localStorage.setItem('invoices', JSON.stringify(state.invoices));
    
    closeModal('invoice-modal');
    renderInvoicesTable();
    updateDashboard();
    e.target.reset();
});

window.deleteInvoice = (index) => {
    if(confirm('هل أنت متأكد من الحذف؟')) {
        state.invoices.splice(index, 1);
        localStorage.setItem('invoices', JSON.stringify(state.invoices));
        renderInvoicesTable();
        updateDashboard();
    }
};

// Modals
window.openModal = (id) => document.getElementById(id).style.display = 'block';
window.closeModal = (id) => document.getElementById(id).style.display = 'none';

// Charts
function initCharts() {
    const ctx = document.getElementById('mainChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
            datasets: [{
                label: 'الإيرادات',
                data: [12000, 19000, 3000, 5000, 2000, 3000],
                borderColor: '#4f46e5',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
            }
        }
    });
}

// Run
init();