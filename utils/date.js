import dayjs from 'dayjs'
export const dateFormat = (date, type = 'YYYY-MM-DD hh:mm:ss') =>{
	if (typeof date === 'number' && date.toString().length === 10) {
		date = date * 1000
	}
	return dayjs(date).format(type);
}
