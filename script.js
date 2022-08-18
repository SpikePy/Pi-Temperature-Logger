const measurements_past_hour = 4
const measurements_past_day = measurements_past_hour * 24
const measurements_past_week = measurements_past_day * 7

function generate_table(data_end = measurements_past_day) {
    table = "<tr><th>Date</th><th>Temperature</th><th>Pressure</th></tr>"

    data.slice(0, data_end + 1).forEach(item => {
        table += `<tr><td>${item[0].replace("_", " ")}</td><td>${item[1].toFixed(1)} °C</td><td>${item[2].toFixed(0)} hPa</td></tr>`
    })

    document.getElementsByTagName("table")[0].innerHTML = table
}