export const getCurrentFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const dateParts = formattedDate.split(", "); // Split the formatted date by comma and space

  if (dateParts.length === 2) {
    const [day, month] = dateParts[1].split(" "); // Extract the day and month from the split result
    return `${dateParts[0]}  ${month}.  ${day}`;
  }

  return formattedDate;
};

export const getCurrentFormattedTime = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};
