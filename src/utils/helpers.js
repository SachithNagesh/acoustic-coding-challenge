const getFormattedDate = dateString =>
    dateString
        .split(' ')
        .slice(1)
        .join(' ');

export const formatDate = (date = '') =>
    getFormattedDate(new Date(date).toDateString());