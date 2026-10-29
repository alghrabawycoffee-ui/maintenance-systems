// --- Toast Notifications ---
export function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Custom Confirm ---
export function showConfirm(message, onConfirm) {
    let overlay = document.getElementById('custom-confirm-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'custom-confirm-overlay';
        overlay.innerHTML = `
            <div class="custom-confirm-box">
                <h3>تأكيد الإجراء</h3>
                <p id="confirm-message"></p>
                <div class="confirm-btns">
                    <button class="confirm-btn yes" id="confirm-yes">نعم، متأكد</button>
                    <button class="confirm-btn no" id="confirm-no">إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    document.getElementById('confirm-message').innerText = message;
    overlay.style.display = 'flex';

    document.getElementById('confirm-yes').onclick = () => {
        overlay.style.display = 'none';
        onConfirm();
    };
    document.getElementById('confirm-no').onclick = () => {
        overlay.style.display = 'none';
    };
}

// --- Spinner (Loading) ---
export function toggleSpinner(elementId, show) {
    let overlay = document.getElementById(elementId + '-spinner');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = elementId + '-spinner';
        overlay.className = 'spinner-overlay';
        overlay.innerHTML = '<div class="spinner"></div>';
        const target = document.getElementById(elementId);
        if(target) {
            target.style.position = 'relative';
            target.appendChild(overlay);
        }
    }
    overlay.style.display = show ? 'flex' : 'none';
}
