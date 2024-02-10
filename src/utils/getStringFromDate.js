export default function getStringFromDate(date) {
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var dayOfWeek = daysOfWeek[date.getDay()];
  var dayOfMonth = date.getDate();
  var month = months[date.getMonth()];

  var formattedDate = dayOfWeek + ", " + dayOfMonth + " " + month;

  return formattedDate;
}
