// Base URL
const base_url = `https://api.rawg.io/api/`;

// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;

    if (month < 10) return `0${month}`
    else return month;

}

// Get current day
const getCurrentDay = () => {
    const day = new Date().getDate();

    if (day < 10) return `0${day}`;
    else return day
}

// Get current year
const currentYear = new Date().getFullYear();

// Get full Date
const currentDate = `${currentYear}-${getCurrentMonth()}-${getCurrentDay()}`;

// Other usefull dates
const lastYear = `${currentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${currentYear + 1}-${getCurrentMonth()}-${getCurrentDay()}`;
// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;

const popularGamesUrl = () => `${base_url}${popular_games}`;