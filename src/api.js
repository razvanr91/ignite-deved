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
const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesUrl = () => `${base_url}${popularGames}`;
export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`
export const newGamesUrl = () => `${base_url}${newGames}`;