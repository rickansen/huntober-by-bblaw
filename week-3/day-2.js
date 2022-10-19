const daysA = new Date(2022, 09, 26);
const daysB = new Date(2022, 11, 25);

function compareDatesOne(date1, date2) {
  const dateToday = new Date();
  const daysA = getDaysFromToday(dateToday, date1);
  const daysB = getDaysFromToday(dateToday, date2);
  const dateAString = getDateString(date1);
  const dateBString = getDateString(date2);

  if (daysA * 2 <= daysB) {
    return `If you thought ${dateAString} was a long wait, wait until you see how long it is until ${dateBString}.`;
  } else if (daysA < daysB) {
    return `Don't worry, ${dateBString} isn't too much farther away than ${dateAString} in the scheme of things.`;
  } else if (daysA === daysB) {
    return `They're the same number of days away!`;
  } else {
    return `You know ${dateAString} is closer, right?`;
  }
}

function compareDatesTwo(date1, date2) {
  const dateToday = new Date();
  const daysA = getDaysFromToday(dateToday, date1);
  const daysB = getDaysFromToday(dateToday, date2);
  const dateAString = getDateString(date1);
  const dateBString = getDateString(date2);
  const daysQuotient = Math.floor(daysB / daysA);

  if (daysA < daysB) {
    return `Looks like ${dateBString} is ${daysQuotient} times farther away than ${dateAString}.`;
  } else if (daysA === daysB) {
    return `Same exact dateToday there, mate.`;
  } else {
    return `Looks like ${dateAString} is ${daysQuotient} times farther away than ${dateBString}.`;
  }
}

function getDaysLeft(date1, date2) {
  const dateToday = new Date();
  const daysA = getDaysFromToday(dateToday, date1);
  const daysB = getDaysFromToday(dateToday, date2);
  const dateAString = getDateString(date1);
  const dateBString = getDateString(date2);

  return `You have ${daysA} days left until ${dateAString}, and ${daysB} days left until ${dateBString}.`;
}

// Helper Functions

function getDaysFromToday(dateToday, dateGiven) {
  return Math.ceil(
    Math.abs(dateToday.getTime() - dateGiven.getTime()) / (1000 * 60 * 60 * 24)
  );
}

function getDateString(date) {
  return date.toDateString();
}
