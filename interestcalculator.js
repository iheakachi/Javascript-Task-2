< script >
    const data = [
        { principal: 2500, time: 1.8 },
        { principal: 1000, time: 5 },
        { principal: 3000, time: 1 },
        { principal: 2000, time: 3 }
    ];

function interestCalculator(data) {
    var interestData = data;
    for (var i = 0; i < data.length; i++) {
        var rate;
        if (data[i]['principal'] >= 2500 && (data[i]['time'] > 1 && data[i]['time'] < 3)) {
            rate = 3;
        } else if (data[i]['principal'] >= 2500 && data[i]['time'] >= 3) {
            rate = 4;
        } else if (data[i]['principal'] < 2500 || data[i]['time'] <= 1) {
            rate = 2;
        } else {
            rate = 1;
        }
        var interest = (data[i]['principal'] * rate * data[i]['time']) / 100;
        interestData[i]['rate'] = rate;
        interestData[i]['interest'] = interest;
    }
    return interestData;
}
interestCalculator(data); 
</script>
