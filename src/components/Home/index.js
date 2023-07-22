// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {dataList: [], isLoading: true}

  componentDidMount() {
    this.fetchTeamsList()
  }

  fetchTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedList = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({dataList: updatedList, isLoading: false})
    console.log(data.teams)
  }

  render() {
    const {isLoading, dataList} = this.state
    return (
      <div className="iplDashboard_container">
        <div className="ipl_logo_container">
          <img
            className="ipl_logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
          />
          <h1 className="h1">IPL Dashboard</h1>
        </div>
        <ul className="teams_ul">
          {isLoading ? (
            <div testid="loader" alt="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            dataList.map(each => <TeamCard iplTeam={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}
export default Home
