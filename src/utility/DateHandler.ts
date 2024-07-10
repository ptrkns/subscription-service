const DateHandler = () => {

    function getCurrentDate() : Date {
        const currentDate : Date = new Date();
        currentDate.setMonth(currentDate.getMonth());
        return currentDate;
    };

    function getEndDate(duration : number) : Date {
        const currentDate : Date = getCurrentDate();
        const newDate : Date = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + duration);
        return newDate;
    };

    function dateToString(date: Date) : string {
        const year : number = date.getFullYear();
        const month : number = date.getMonth() + 1;
        const day : number = date.getDate();
        return `${year}.${month}.${day}`;
    }

    function dateToJSONString(date: Date) : string {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return JSON.stringify(`${year}.${month}.${day}`);
    }

    function stringToDate(date: string) : Date {
        const dateString = JSON.stringify(date);
        const values = dateString.split('.');
        const year = Number(values[0]);
        const month = Number(values[1])-1;
        const day = Number(values[2]);
        const newDate = new Date(year, month, day);
        return newDate;
    }

    return { getCurrentDate, getEndDate, dateToString, dateToJSONString, stringToDate };
};

export default DateHandler;