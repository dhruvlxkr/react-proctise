let datetime = new Date();

let ClockDate = () =>{
   return <p>My current date is {datetime.toLocaleDateString()} and time is {datetime.toLocaleTimeString()}</p>
}

export default ClockDate
