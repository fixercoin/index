 var ctx = document.getElementById('tokenomicsChart').getContext('2d');
var tokenomicsChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Community Airdrop',
            'Presale Allocation',
            'Liquidity Pool and CEx Listing',
            'Marketing and Partnerships',
            'Communuty incentives',
            'Treasury and Development Funds',
            'Team'
        ],
        datasets: [{
            label: 'Tokenomics',
            data: [20, 10, 20, 15, 10, 15, 10],
            backgroundColor: [
                '#7F00FF',
                '#0000FF',
                '#808080',
                '#808000',
                '#D0021B',
                '#FFFF00',
                '#964B00'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tokenomics Distribution'
            }
        }
    }
});
