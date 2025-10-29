convert.onclick = async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "04UOS2wsiqcN0T9PvTkpcr0esVSUq0DC");

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        const response = await fetch(`https://api.apilayer.com/fixer/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, requestOptions)
        const data = await response.json();
        const h1 = document.createElement("h1");
        h1.append(data.result)
        if (!document.querySelector('h1')) document.body.append(h1)
        else document.body.replaceChild(h1, document.body.lastChild)
    } catch (error) {
        alert(error.message)
    }
    amount.value = ''
}