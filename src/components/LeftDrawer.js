import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import { ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage:  'url(' + require('../images/material_bg.png') + ')',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white !important',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      },
      svg : {
        color: 'white !important',
      }
    }
  };

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          Retirement Castle
        </div>
        <div style={styles.avatar.div}>
          <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                  size={50}
                  style={styles.avatar.icon}/>
          <span style={styles.avatar.span}>{props.username}</span>
        </div>
        <div>
          {props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>
              }
              menuItems={[

                menu.items.map((item, indexitem) =>
                <MenuItem
                  primaryText={item.text}
                  key={indexitem}
                  leftIcon={item.icon}
                  containerElement={<Link to={item.link}/>}
                />
                )
              ]}
            />

           /* <ListItem
              key={index}
              style={styles.menuItem}
              value={1}
              primaryText={menu.text}
              leftIcon={menu.icon}
              nestedItems={[

                menu.items.map((item, indexitem) =>
                <ListItem
                  key={indexitem}
                  style={styles.menuItem}
                  value={2}
                  primaryText={item.text}
                  leftIcon={item.icon}
                  containerElement={<Link to={item.link}/>}
                />
                )

              ]}
            />*/
          )}
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
