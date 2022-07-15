function table_content(item) {
    table += `<tr><td>${item[0]}</td><td>${item[1]} °C</td><td>${item[2]} hPa</td></tr>`
}

function generate_table() {
    table = "<tr><th>Date</th><th>Temperature</th><th>Pressure</th></tr>"
    data.forEach(table_content)
    document.getElementsByTagName("table")[0].innerHTML = table
    console.log(table)
}