export const getMonth = date => {
    const monthName = date.toDateString().split(' ');

    return monthName[1];
}
