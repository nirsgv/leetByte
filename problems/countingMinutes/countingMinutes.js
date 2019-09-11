function countingMinutes(str) {


     // not finished...
    let times = {
        startTimeHour: 0,
        startTimeMinutes: 0,
        endTimeHour: 0,
        endTimeMinutes: 0,
    };

    let startTime = str.split('-')[0];
    let endTime = str.split('-')[1];

    function retreiveHoursAndMinutes(str) {
        let hour = Number(str.split(':')[0]);
        let minute = Number(str.split(':')[1].slice(0,2));
        return [hour, minute];
    };

    times.startTimeHour = retreiveHoursAndMinutes(startTime)[0];
    times.startTimeMinutes = retreiveHoursAndMinutes(startTime)[1];
    times.endTimeHour = retreiveHoursAndMinutes(endTime)[0];
    times.endTimeMinutes = retreiveHoursAndMinutes(endTime)[1];

    // code goes here
    return times;
}

// keep this function call here
console.log(countingMinutes("12:30pm-12:00am"));