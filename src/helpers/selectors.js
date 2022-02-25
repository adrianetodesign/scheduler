export function getAppointmentsForDay(state, day) {
  const appointIdList = [];
  state.days.map(dayItem => {
    if (dayItem.name === day) {
      dayItem.appointments.forEach(id => appointIdList.push(id))
    }
    return null;
  })

  return appointIdList.map(id => state.appointments[id]);
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerData = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewerData
  }
}