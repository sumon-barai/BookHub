const Rating = ({ rating }) => {
  const numOfRatting = new Array(rating).fill(null);
  return (
    <div className="ratting">
      {numOfRatting.map((item, index) => (
        <i key={index} className="bi bi-star-fill" />
      ))}
    </div>
  );
};

export default Rating;
