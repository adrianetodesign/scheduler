import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);


  function updateSpots(id, createBool) {
    const dayId = Math.ceil(id/5) -1;
    let newDay = {
      ...state.days[dayId],
      spots: state.days[dayId].spots
    }

    if (createBool) {
      if (!state.appointments[id].interview) {
        newDay = {
          ...state.days[dayId],
          spots: state.days[dayId].spots - 1
        } 
      }
    }else {
      newDay = {
        ...state.days[dayId],
        spots: state.days[dayId].spots + 1
      }
    }

    let days = state.days;
    days[dayId] = newDay;

    return days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(id, true);
    return axios.put(`/api/appointments/${id}`, {interview})
    .then((res) => {
      if (res.status === 204) {
        setState({...state, appointments, days});
      }
    })
  };

  function deleteInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    const days = updateSpots(id, false);
    return  axios.delete(`/api/appointments/${id}`)
    .then((res) => {
      if (res.status === 204) {
        setState({...state, appointments, days});
      }
    })
  };

  return { state, setDay, bookInterview, deleteInterview };
}