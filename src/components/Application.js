import React from "react";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from '../helpers/selectors';
import "components/Application.scss";
import Appointment from "components/Appointment/index";
import DayList from "./DayList";
import useApplicationData from "hooks/useApplicationData";


//import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

//helper function that returns appointment by day
const dailyAppointments = getAppointmentsForDay(state, state.day);

const interviewers = getInterviewersForDay(state, state.day);
//iterate over the appointments
const appointmentArr = dailyAppointments.map(appointment => {
  const interview = getInterview(state, appointment.interview);

  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={interviewers}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
    />
  );
});


return (
  <main className="layout">
    <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered"/>
      <nav className="sidebar__menu">
        <DayList 
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
        
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />

    </section>
    <section className="schedule">
      {appointmentArr}
    </section>

  </main>
);
}
