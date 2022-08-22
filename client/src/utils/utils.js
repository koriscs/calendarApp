export const getMonth = date => {
    const monthName = date.toDateString().split(' ');

    return monthName[1];
}
export const getDay = date => {
    const monthName = date.toDateString().split(' ');

    return monthName[2];
}
export const getYear = date => {
    const monthName = date.toDateString().split(' ');

    return monthName[3];
}
