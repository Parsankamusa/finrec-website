function toggleModal() {
    const backdrop = document.getElementById('modal-backdrop');
    const container = document.getElementById('modal-container');
    const iframe = document.getElementById('form-iframe');
    
    if (backdrop.classList.contains('hidden')) {
        backdrop.classList.remove('hidden');
        container.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        iframe.src = 'popupform.html';
    } else {
        backdrop.classList.add('hidden');
        container.classList.add('hidden');
        document.body.style.overflow = 'auto';
        iframe.src = '';
    }
}

document.getElementById('modal-backdrop').addEventListener('click', toggleModal);