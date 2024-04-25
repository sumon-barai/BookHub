const Skeleton = () => {
  const content = new Array(6).fill(null);
  return (
    <div className="row">
      {content.map((item, index) => (
        <div key={index} className="col-4">
          <div className="card" aria-hidden="true">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height={180}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96" />
            </svg>

            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6" />
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7" />
                <span className="placeholder col-4" />
                <span className="placeholder col-4" />
                <span className="placeholder col-6" />
                <span className="placeholder col-8" />
              </p>
              <a
                className="btn btn-success disabled placeholder col-6"
                aria-disabled="true"
              />
              <a
                className="btn btn-success disabled placeholder col-6"
                aria-disabled="true"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
