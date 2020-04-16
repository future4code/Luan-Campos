import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { fetchProfiles } from '../../actions/profiles'

class ProfileScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
