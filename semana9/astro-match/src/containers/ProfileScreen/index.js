import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { updateCurrentPage } from "../../actions/route";
import { AppBar } from "../../components/AppBar";
import { mdiAccountMultipleCheck } from "@mdi/js";
import { mdiAccountSwitch } from "@mdi/js";
import {
  SwipePageIcon,
  MatchPageIcon,
  UserBiografy,
  UserAge,
  UserName,
  ProfilePicture,
  TitleWrapper,
} from "./styled";

class ProfileScreen extends React.Component {
  componentDidMount() {}

  render() {
    const { goToMatchScreen, goToSwipeScreen, matches } = this.props;
    return (
      <div>
        <AppBar
          leftAction={
            <SwipePageIcon
              path={mdiAccountSwitch}
              size={1}
              onClick={goToSwipeScreen}
            />
          }
          rightAction={
            <MatchPageIcon
              size={1.5}
              path={mdiAccountMultipleCheck}
              onClick={goToMatchScreen}
            />
          }
        />
        <ProfilePicture src={matches.photo} />
        <TitleWrapper>
          <UserName>{matches.name},</UserName>
          <UserAge>{matches.age}</UserAge>
        </TitleWrapper>
        <UserBiografy>
          {matches.bio}
        </UserBiografy>
      </div>
    );
  }
}

ProfileScreen.propTypes = {};

const mapStateToProps = (state) => ({
  matches: state.profiles.selectedProfile,
});

const mapDispatchToProps = (dispatch) => ({
  goToMatchScreen: () => dispatch(updateCurrentPage("MatchScreen")),
  goToSwipeScreen: () => dispatch(updateCurrentPage("SwipeScreen")),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
