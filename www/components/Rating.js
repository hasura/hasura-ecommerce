const Rating = ({ rating }) => {
  const total = rating;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const included = i <= total;
    const isLast = i === 5;
    const color = included ? "orange" : "muted";
    const margin = isLast ? "mr-xs" : "";
    const icon = included ? "star" : "star-outline";
    const star = <ion-icon class={`${color} ${margin}`} name={icon} key={i} />;
    stars.push(star);
  }
  return <>{stars}</>;
};

export default Rating;
