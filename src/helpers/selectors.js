import InterviewerList from "components/InterviewerList";

const getAppointmentsForDay = (state, day) => {

  //create empty array to store results
  const appointments = [];

  //filter state name to match day name
  const filteredDays = state.days.filter(state => state.name === day);

  //return  empty array if no appointments
  if (filteredDays.length < 1) {
    return appointments;
  }
  //loop to push appointment for the day to the empty array
  filteredDays[0].appointments.forEach((appId) => {
    if (state.appointments[appId]) {
      appointments.push(state.appointments[appId]);
    }
  });

  return appointments;
};

const getInterviewersForDay = (state, day) => {
  const interviewers = [];

  //filter state by day
  const filteredInterviewers = state.days.filter(state => state.name === day);

  //return  empty array if no appointments
  if (filteredInterviewers.length < 1) {
    return interviewers;
  }
  //loop to push appointment for the day to the empty array
  filteredInterviewers[0].interviewers.forEach((id) => {
    if (state.interviewers[id]) {
      interviewers.push(state.interviewers[id]);
    }
  });

  return interviewers;
};


const getInterview = (state, interview) => {

  //if interview is null return null
  if (!interview) {
    return null;
  }
  // get the interviewer ID
  const interviewerId = interview.interviewer;
  //get the interviewer data 
  const interviewerData = state.interviewers[interviewerId];
  // create new Object with the student and interviewer data
  const interviewerObj = {
    "student": interview.student,
    "interviewer": interviewerData
  };
  return interviewerObj;
};

//function that iterates through the days and gets the spots available in the appointments
const getSpots = (state, day) => {
  let newArr = [];
  let spots = 0;
  for (const dayItem of state.days) {
    if (dayItem.name === day) {
      newArr.push(...dayItem.appointments);
    }
  }
  for (const appId of newArr) {
    if (!state.appointments[appId].interview) {
      spots++;
    }
  }
  return spots;
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay, getSpots };
