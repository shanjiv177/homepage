setInterval(() => {
    const time = document.getElementById('time');
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000)