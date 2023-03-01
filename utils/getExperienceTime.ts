const getExperienceTime = (startDate: Date) => {
  const currDate = new Date();

  var months;
  months = (currDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += currDate.getMonth();

  if (months < 12) {
    return `+ de ${months} mes${months > 1 ? 'es' : ''} de experiência`
  }
  else {
    const restMonths = months % 12
    const years = Math.round(months / 12)

    return `+ de ${years} ano${years > 1 ? 's' : ''} de experiência`
  }
}

export default getExperienceTime
