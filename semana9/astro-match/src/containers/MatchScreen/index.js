import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {getMatches, setSelectedProfile} from '../../actions/profiles'
import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'

class MatchScreen extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount() {
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}

	selectProfileScreen = (profile) => {
		this.props.goToProfileScreen()
		this.props.setSelectedProfile(profile)
	}

	render() {
		const {goToSwipeScreen, matches} = this.props

		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
				<List>
					{matches && matches.map((match) => (
						<ListItem key={match.name} onClick = {() => this.selectProfileScreen(match)} >
							<Avatar src={match.photo}/>
							<ListText>{match.name}</ListText>
						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}

const mapStateToProps = state => ({
	matches: state.profiles.matchedProfiles
})

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	goToProfileScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
	getMatches: () => dispatch(getMatches()),
	setSelectedProfile: (profile) => dispatch(setSelectedProfile(profile))
	
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
