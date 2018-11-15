import React from 'react';
import '../style/leftnav.sass';


class LeftNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="LeftNavContainer">
        {/* eslint-disable-next-line‏ */}
        <div className="LeftNavItem" > Folders </div>
        <div className="LeftNavItem" > Projects </div>
        <div className="LeftNavItemEmpty" />
      </div>
    );
  }
}

export default LeftNav;
