export default function timeSinceDate(date) {
  let duration;
  const createdAtDate = new Date(date);
    const currentTime = new Date();
    const durationInMinutes = Math.floor((currentTime - createdAtDate) / (1000 * 60));
    if (durationInMinutes < 60) {
      duration = `${durationInMinutes} min`;
    } else {
      const durationInHours = Math.floor(durationInMinutes / 60);
      duration = `${durationInHours} hours`;
    }
    return {durationInMinutes, duration};
}

