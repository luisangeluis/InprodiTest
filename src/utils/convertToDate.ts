const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
};

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

const convertToDate = (time:number) => {
  const date = new Date(time*1000);
  console.log(date);
  const formatedDate = date.toLocaleDateString('en-US', dateOptions);
  const formatedTime = date.toLocaleTimeString("en-US",timeOptions);
  console.log(`${formatedTime} ${formatedDate}`);
  
  return `${formatedDate} ${formatedTime}`;
  
}



export default convertToDate
