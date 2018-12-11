import React from 'react';
/*import Assessment from 'material-ui/svg-icons/action/assessment';*/
import Home from 'material-ui/svg-icons/action/home';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const data = {
  menus: [
    { text: 'Home', icon: <Home/>,link: '/',
      items: []
    },
    { text: 'Hogares Gediatricos', icon: <GridOn/>,
      items: [
        {text: 'Buscar por id',icon: <Web/>,link: '/NH'},
        {text: 'Todos',icon: <Web/>,link: '/homes'},
      ]
    },
    {
      text: 'Transacciones',
      icon: <Web/>,
      items: [
        {text: 'Todos',icon: <Web/>,link: '/transactions'},
        /*{text: 'Gastos',icon: <Web/>,link: '/expediture'},
        {text: 'Ingresos',icon: <Web/>,link: '/entry'}*/
      ]
    },
    { text: 'Residentes', icon: <PermIdentity/>,
      items: [
        {text: 'Buscar',icon: <PermIdentity/>,link: '/info'},
        {text: 'Todos',icon: <PermIdentity/>,link: '/residents'},
        {text: 'Nuevo',icon: <PermIdentity/>,link: '/new_res'},
      ] 
    },
    { text: 'Empleados', icon: <PermIdentity/>,
      items: [
        {text: 'Buscar',icon: <PermIdentity/>,link: '/emp_info'},
        {text: 'Todos',icon: <PermIdentity/>,link: '/employees'},
        {text: 'Nuevo',icon: <PermIdentity/>,link: '/new_emp'},
      ] 
    },
    /*{ text: 'Familiares', icon: <PermIdentity/>, link: '/dashboard',
      items: [] },
    { text: 'Reportes', icon: <Assessment/>, link: '/dashboard',
      items: [] },*/
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login',
      items: [] }
  ],
};

export default data;
