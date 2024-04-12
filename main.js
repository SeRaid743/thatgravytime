gravyTime()
setInterval(gravyTime, 1000)
function gravyTime() {
    let gravytime = new Date().toLocaleString('en-GB', { timeZone: 'America/St_Johns' });
    gravytime = gravytime.replace(",", " ")
    document.getElementById("gravytime").innerText = `${gravytime}`
}