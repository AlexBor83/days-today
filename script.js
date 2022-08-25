let date = new Date();

const greeting = document.querySelector('.greeting');
const dayWeek = document.querySelector('.day-week');
const time = document.querySelector('.time');
const newYear = document.querySelector('.new-year');

const getGreeting = () => {
  let timeOfDay = '';

  if (date.getHours() >= 0 && date.getHours() <= 6) {
    timeOfDay = 'ночь';
  } else if (date.getHours() >= 6 && date.getHours() <= 12) {
    timeOfDay = 'утро';
  } else if (date.getHours() >= 12 && date.getHours() <= 18) {
    timeOfDay = 'день';
  } else {
    timeOfDay = 'вечер';
  }

  return timeOfDay;
};

const getDayWeek = () => {
  const weekdays = [
    'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
  ];  

  return weekdays[date.getDay()- 1];
};

const getTimeNewYear = () => {
    let dateNewYear = '1 January 2023';
    let dateStop = new Date(dateNewYear).getTime();
    let dateNow = date.getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let dayNewYear = Math.floor(timeRemaining / 60 / 60 /24);
    
    return dayNewYear;
};

const renderGreeting = () => {
  greeting.textContent = `Добрый ${getGreeting()}`;
  dayWeek.textContent = `Сегодня: ${getDayWeek()}`;
  time.textContent = `Текущее время: ${date.toLocaleTimeString('en')}`;
  newYear.textContent = `До нового года осталось ${getTimeNewYear()} дней`;
};

renderGreeting();


