import moment from "moment"

export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getTxtToShow,
    stringAvatar,
    formatRelativeTime,
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


function getTxtToShow(txt: string, length: number) {
    if (txt.length < 1) return ""
    if (txt && txt.length <= length) return txt;
    else {
        return txt?.substring(0, length) + "...";
    }
}

function stringAvatar(name: string) {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function formatRelativeTime(date: Date) {
    const now = new Date();

    // Check if the date is today
    if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
        return moment(date).format('HH:mm');
    }

    // Check if 24 hours have passed
    const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    if (date > twentyFourHoursAgo) {
        return moment(date).format('DD MMM');
    }

    // Display MMM YYYY for dates more than a year ago
    return moment(date).format('MMM YYYY');
}
