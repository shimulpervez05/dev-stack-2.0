function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}) {
  return (
    <article className="technology-card">

      {/* Card Top */}
      <div className="card-top">

        <img
          src={technology.icon}
          alt={technology.name}
          className="tech-icon"
        />

        <span className="tech-badge">
          {technology.badge}
        </span>

      </div>

      {/* Technology Name */}
      <h3>{technology.name}</h3>

      {/* Description */}
      <p className="description">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="card-info">

        <span className="category">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

      </div>

      {/* Rating + Add Button */}
      <div className="card-bottom">

        <span className="rating">
          ★ {technology.rating}
        </span>

        <button
          className={
            isAdded
              ? "add-btn added"
              : "add-btn"
          }
          disabled={isAdded}
          onClick={() => onAdd(technology)}
        >
          {isAdded
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>

      </div>

    </article>
  );
}

export default TechnologyCard;