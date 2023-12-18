import "./StatsCard.css";

function StatsCard(props) {
  const { bugData } = props;

  const totalBugs = bugData.length;

  const totalActiveBugs = bugData.reduce((total, bug) => {
    if (bug.status === "Open") {
      return total + 1;
    }
    return total;
  }, 0);

  const totalHighBugs = bugData.reduce((total, bug) => {
    if (bug.priority === "High") {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div className="stats-card">
      <div className="bug-card blue">
        <h2 className="card-title">Total Bugs</h2>
        <h1 className="num">{totalBugs}</h1>
        <p className="icon">
          <i className="fas fa-spider"></i>
        </p>
      </div>
      <div className="bug-card green ">
        <h2 className="card-title">Completed</h2>
        <h1 className="num">100</h1>
        <p className="icon">
          <i className="fas fa-check"></i>
        </p>
      </div>
      <div className="bug-card yellow">
        <h2 className="card-title">Total Open</h2>
        <h1 className="num">{totalActiveBugs}</h1>
        <p className="icon">
          <i className="fas fa-hourglass-half"></i>
        </p>
      </div>
      <div className="bug-card red">
        <h2 className="card-title">High Priority</h2>
        <h1 className="num">{totalHighBugs}</h1>
        <p className="icon">
          <i className="fas fa-exclamation-triangle"></i>
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
