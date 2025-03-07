export const calculateTimeToEvent = () => {
  const eventDate = new Date("2025-02-25T17:00:00+05:45"); // Updated launch date
  const currentDate = new Date();
  const timeRemaining = eventDate.getTime() - currentDate.getTime();

  // Return zeros if event has passed
  if (timeRemaining < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};