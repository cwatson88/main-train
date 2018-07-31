import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TrainIcon from "@material-ui/icons/Train";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FilterListIcon from "@material-ui/icons/FilterList";

const StyledNavigation = styled(BottomNavigation)`
  &&& {
    position: fixed;
    bottom: 0;
    overflow: hidden;
    background-color: #804578e3;
    width: 100%;
    color: white;
    box-shadow: black;
    border-radius: 50px 50px 0 0;
    && button {
      color: white;
      font-family: Raleway;
    }
  }
`;

class Toolbar extends Component {
  state = { value: 0 };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <StyledNavigation value={value} onChange={this.handleChange} showLabels>
        <BottomNavigationAction label="New Journey" icon={<TrainIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Filters" icon={<FilterListIcon />} />
      </StyledNavigation>
    );
  }
}

Toolbar.propTypes = {};

export default Toolbar;
