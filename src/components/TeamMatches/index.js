// Write your code here
import {Component} from 'react'

import {Loader} from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamObject: {}, isLoading: true}

  componentDidMount() {
    this.fetchDataObject()
  }

  fetchDataObject = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedObject = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const latestMatchDetailsNew = updatedObject.latestMatchDetails
    const updatedlatestMatchDetails = {
      umpires: latestMatchDetailsNew.umpires,
      result: latestMatchDetailsNew.result,
      manOfTheMatch: latestMatchDetailsNew.man_of_the_match,
      id: latestMatchDetailsNew.id,
      date: latestMatchDetailsNew.date,
      venue: latestMatchDetailsNew.venue,
      competingTeam: latestMatchDetailsNew.competing_team,
      competingTeamLogo: latestMatchDetailsNew.competing_team_logo,
      firstInnings: latestMatchDetailsNew.first_innings,
      secondInnings: latestMatchDetailsNew.second_innings,
      matchStatus: latestMatchDetailsNew.match_status,
    }

    const recentMatchesList = updatedObject.recentMatches
    const updatedrecentMatchesList = recentMatchesList.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    const updatedObjectNew = {
      teamBannerUrl: updatedObject.teamBannerUrl,
      updatedlatestMatchDetails,
      updatedrecentMatchesList,
    }
    this.setState({teamObject: updatedObjectNew, isLoading: false})
    console.log(updatedObjectNew)
  }

  renderTeamsDetails = () => {
    const {teamObject} = this.state
    const {
      teamBannerUrl,
      updatedlatestMatchDetails,
      updatedrecentMatchesList,
    } = teamObject

    return (
      <>
        <img className="" src={teamBannerUrl} alt="team banner" />
        <div>
          <h1>Latest Matches</h1>
          <LatestMatch
            details={updatedlatestMatchDetails}
            key={updatedlatestMatchDetails.id}
          />
          <ul>
            {updatedrecentMatchesList.map(each => (
              <MatchCard details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="TeamMatch_container">
        {isLoading ? (
          <div className="" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamsDetails()
        )}
      </div>
    )
  }
}
export default TeamMatches
