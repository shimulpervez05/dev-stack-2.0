function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}) {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>
          <p>
            {stack.length}{" "}
            {stack.length === 1
              ? "technology"
              : "technologies"}{" "}
            selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>

          <h3>Your stack is empty</h3>

          <p>
            Add technologies from the list to
            build your development stack.
          </p>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((technology) => (
            <div
              className="stack-item"
              key={technology.id}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="stack-item-icon"
              />

              <div className="stack-item-info">
                <h3>{technology.name}</h3>

                <span>
                  {technology.category}
                </span>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  onRemove(technology.id)
                }
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default YourStack;