function englishWords(n) {
    let firstDay = 5;

    let sum = 0

    let days = 0;
    while (sum <= n) {
        days++;
        firstDay += 2;
        sum += firstDay
        if (sum > n) {
            return days + 1;
        } else {
            return days;
        }

    }
}
    console.log(englishWords(30));