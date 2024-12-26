function ButtonClick() {
    const successMessage = document.getElementById('successMessage');
    
    successMessage.style.display = 'block';

    setTimeout(() => {
        window.location.href = 'proto.html'; 
    }, 1000); 
}