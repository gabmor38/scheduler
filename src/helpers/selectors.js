import InterviewerList from "components/InterviewerList";

// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },
//   interviewers: {
//     "1": {  
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//   }
// };
const getAppointmentsForDay = (state, day) => {
  //console.log("this is the state", state);
  //console.log("this is the days", day);

  //create empty array to store results
  const appointments = [];

  //filter state name to match day name
  const filteredDays = state.days.filter(state => state.name === day);
  //console.log("filteredDays", filteredDays);

  //return  empty array if no appointments
  if (filteredDays.length < 1) {
    //console.log("empty", appointments)
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
//console.log(getAppointmentsForDay(state, "Monday"))
const getInterviewersForDay = (state, day) => {
  const interviewers = [];

  //filter state by day
  const filteredInterviewers = state.days.filter(state => state.name === day);
  console.log("filteredInterviewers", filteredInterviewers);

  //return  empty array if no appointments
  if (filteredInterviewers.length < 1) {
    //console.log("empty", appointments)
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

  //return interview with interviewer data
  // get the interviewer ID
  const interviewerId = interview.interviewer;
  //get the interviewer data 
  const interviewerData = state.interviewers[interviewerId];
  console.log(interviewerData);
  // create new Object with the student and interviewer data
  const interviewerObj = {
    "student": interview.student,
    "interviewer": interviewerData
  };
  return interviewerObj;
};


const getSpots = (state, day) => {
  let newArr = [];
  let spots = 0;
  for (const dayItem of state.days) {
    if(dayItem.name === day){
      newArr.push(...dayItem.appointments);
    }
  }
  for(const appId of newArr) {
    if(!state.appointments[appId].interview){
      spots++
    }
  }
  return spots
}

// const getDayIndex = (state, day) => {
//   let indexNumber = 0
//   for (const itemDay of state.days) {
//     if(itemDay.name === day) {
//       indexNumber = itemDay.id - 1
//     }
//   }
//   return indexNumber
// }

export { getAppointmentsForDay, getInterview, getInterviewersForDay, getSpots};
