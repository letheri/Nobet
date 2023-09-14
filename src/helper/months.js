export const getMonthName = function (date){
    const formatter = new Intl.DateTimeFormat('tr', { month: 'long' });
    return formatter.format(new Date(date)) 
}