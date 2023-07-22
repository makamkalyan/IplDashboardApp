// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplTeam} = props
  const {id, name, teamImageUrl} = iplTeam
  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="team_li">
        <img className="team_img" src={teamImageUrl} alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
