export default function getShortTimeStringFromDate(date){
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let time = hours < 10 ? `0${hours}`: `${hours}`;
    time += ":";
    time +=  minutes < 10 ? `0${minutes}`: `${minutes}`;

    return time;
}