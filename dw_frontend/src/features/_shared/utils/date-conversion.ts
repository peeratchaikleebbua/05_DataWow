interface IDateConversion {
  date: Date;
}

export const dateConversion = ({ date }: IDateConversion) => {
  // Convert input to Date object if it's a string
  const inputDate = date instanceof Date ? date : new Date(date);

  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  // Convert to seconds, minutes, hours, days, months, years
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  // Return the most appropriate time format
  if (years > 0) {
    return `${years} yr. ago`;
  } else if (months > 0) {
    return `${months} mo. ago`;
  } else if (days > 0) {
    return `${days} day. ago`;
  } else if (hours > 0) {
    return `${hours} h. ago`;
  } else if (minutes > 0) {
    return `${minutes} min. ago`;
  } else {
    return `${seconds} s. ago`;
  }
};
