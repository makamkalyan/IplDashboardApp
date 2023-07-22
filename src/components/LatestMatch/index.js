// Write your code here
const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInning,
  } = details

  return (
    <div className="">
      <div className="">
        <h1 className="">{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img className="competingTeamLogo" src={competingTeamLogo} alt={id} />
      <div className="">
        <h1 className="">First Innings</h1>
        <p>{firstInnings}</p>
        <h1 className="">Second Innings</h1>
        <p>{secondInning}</p>
        <h1 className="">Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1 className="">Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
