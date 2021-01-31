const xlabels = []
const ytemps = []

chartIt()

async function chartIt() {
    await getData()

    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlabels,
            datasets: [{
                label: "Global Average Temperature",
                data: ytemps,
                backgroundColor: ['rgba(255, 99, 132, 0.2)',],
                borderColor: ['rgba(255, 99, 132, 1)',],
                borderWidth: 1
            }]
        },
        // options: {
        //     scales: {
        //         yAxes: [{
        //             ticks: {
        //                 beginAtZero: true
        //             }
        //         }]
        //     }
        // }
    });
}

async function getData() {
    const response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text();

    const table = data
        .split(/\n/)
        .slice(1)
    table.forEach((row) => {
        const columns = row.split(',');
        const year = columns[0];
        xlabels.push(year)
        const temp = columns[1];
        ytemps.push(parseFloat(temp) + 14)
        console.log(year, temp);
    })
    console.log(xlabels);
}