const alarmTypes = {
    weekendAlarm : "no alarm needed",
    weekdayAlarm : "get up at 7am",
}

let day = "Monday";
let alarm = "";

if(day == "Saturday" || day == "Sunday"){
    alarm = alarmTypes.weekendAlarm
} else {
    alarm = alarmTypes.weekdayAlarm
}

console.log(alarm);