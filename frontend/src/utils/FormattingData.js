export default function HandleLocalTime(utcDateString) {
  try {
    // Parse the input date string into a Date object
    const utcDate = new Date(utcDateString);

    if (isNaN(utcDate.getTime())) {
      throw new Error("Invalid date string");
    }

    // Calculate timezone offset
    const timezoneOffsetMinutes = new Date().getTimezoneOffset();
    const timezoneOffsetHours = timezoneOffsetMinutes / 60;

    // Adjust for local time
    const localTime = new Date(utcDate.getTime() + timezoneOffsetMinutes * 60 * 1000);

    // Format the local time and include timezone offset
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    });

    const formattedDateTime = formatter.formatToParts(localTime);

    const offsetString = `GMT${timezoneOffsetHours >= 0 ? '+' : ''}${Math.abs(timezoneOffsetHours)}`;
    return `${formattedDateTime[0].value}/${formattedDateTime[2].value}/${formattedDateTime[4].value}, ${formattedDateTime[6].value}:${formattedDateTime[8].value}:${formattedDateTime[10].value} ${offsetString}`;
  } catch (error) {
    console.error("Error handling local time:", error);
    return "Invalid Date";
  }
}



export function HandleLocalDate(DateValue) {
  const date = new Date(DateValue);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function HandleLocalFullDate(DateValue) {
  const date = new Date(DateValue);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function FormattingAmount(Balance, Currency) {
  // Assuming Balance is a number representing the amount

  let formattedAmount;

  if (Currency === 'L.L') {
    formattedAmount = Balance.toLocaleString('en-US', {
      style: 'currency',
      currency: 'LBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  } else {
    formattedAmount = Balance.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return formattedAmount;
}
