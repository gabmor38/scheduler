
export function getAppointmentsForDay(state, day) {
  //console.log("this is the state", state);
  //console.log("this is the days", day);

  //create empty array to store results
  const appointments = [];

  //filter state name to match day name
  const filteredDays = state.days.filter(state => state.name === day);
  //console.log("filteredDays", filteredDays);

  //return  empty array if no appoointments
  if (filteredDays.length < 1) {
    return appointments;
  }
  //loop to push appointment for the day to the empty array
  filteredDays[0].appointments.forEach((appId) => {
    if (state.appointments[appId]) {
      appointments.push(state.appointments[appId]);
    }
  });

  return (appointments);

}
