function showTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time = `${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}:${s > 9 ? s : '0' + s}`;
    const h1 = document.createElement('h1');
    h1.innerText = time;
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstChild);
    } else{
        root.appendChild(h1);
    }
}

setInterval(showTime, 1000)

