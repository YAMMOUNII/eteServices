export const getCurrentDate = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const currentDay = daysOfWeek[dayIndex];
  const currentMonth = months[monthIndex];

  return `${currentDay}, ${currentMonth} ${day}, ${year}`;
};
