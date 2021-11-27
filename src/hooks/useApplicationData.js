import axios from 'axios';
import { useState, useEffect } from "react";
import { getSpots } from "helpers/selectors";


export default function useApplicationData() {

  //function that updates the state with the new day
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

    })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  function bookInterview(id, interview) {

    const index = state.days.findIndex(day => day.name === state.day);

    const spots = getSpots(state, state.day);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = [...state.days];

    const day = {
      ...state.days[index],
      spots: spots - 1
    };

    days.splice(index, 1, day);


    return axios.put(`/api/appointments/${id}`, { interview })
      .then(response => {
        setState({ ...state, appointments, days: days });
      }).catch(error => {
        console.log("Error", error);
        return Promise.reject(error);
      });
  }

  function cancelInterview(id) {

    const index = state.days.findIndex(day => day.name === state.day);

    const spots = getSpots(state, state.day);

    const appointment = {
      ...state.appointments[id], interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = [...state.days];
    const day = {
      ...state.days[index],
      spots: spots + 1
    };
    days.splice(index, 1, day);

    return axios.delete(`/api/appointments/${id}`)
      .then(response => {
        setState({ ...state, appointments, days: days });
      }).catch(error => {
        console.log("Error", error);
        return Promise.reject(error);
      });
  }
  return { state, setDay, bookInterview, cancelInterview };
}