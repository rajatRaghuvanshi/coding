// Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    if(responseTimes.length < 2) return 0;
    let count = 0;
    let sum = responseTimes[0];
    for(let i=1; i < responseTimes.length; i++) {
        if(responseTimes[i] > (sum / i)) {
            count++;
        }
        sum = sum + responseTimes[i]
    }
    return count;

}

function main() {
    const responseTimesCount = parseInt(readLine().trim(), 10);

    let responseTimes = [];

    for (let i = 0; i < responseTimesCount; i++) {
        const responseTimesItem = parseInt(readLine().trim(), 10);
        responseTimes.push(responseTimesItem);
    }

    const result = countResponseTimeRegressions(responseTimes);

    process.stdout.write(result + '\n');
}