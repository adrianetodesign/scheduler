export function getAppointmentsForDay(state, day) {
  const appointIdList = [];
  state.days.map(dayItem => {
    if (dayItem.name === day) {
      dayItem.appointments.forEach(id => appointIdList.push(id))
    }
  })

  return appointIdList.map(id => state.appointments[id]);
}