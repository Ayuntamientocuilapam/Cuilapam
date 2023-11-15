const $submitBtn = document.querySelector('#submit-btn');



window.onload = () => {
    $submitBtn.disabled = false;
}

function handleSubmit(){
    $submitBtn.disabled = true;
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('https://script.google.com/macros/s/AKfycbwm-HJW9XXnR293dYAeqVsijofW0JuGIekHoZQAaQ/exec', {
        method: 'POST',
        body: data,
    }).then(() => {
        console.log('Submitted');
        alert('El mensaje fue enviado! Gracias');
        location.reload();
    }).catch(console.error);
}
