//import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as TiIcons from 'react-icons/ti'
import * as IoIcons from 'react-icons/io'
import * as ImIcons from 'react-icons/im'
import * as RiIcons from 'react-icons/ri'
import * as FcIcons from 'react-icons/fc'

export const SidebarDataWhenLoged = [
  {
    title: 'Ordinacije',
    path: '/',
    icon: <FaIcons.FaHospitalSymbol />,
  },

  {
    title: 'Osoblje',
    dropdown: true,
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Opća obiteljska medicina',
        path: '/osoblje/opca-obiteljska-medicina',
      },
      {
        title: 'Zdravstvena zaštita žena',
        path: '/osoblje/zdravstvena-zastita-zena',
      },
      {
        title: 'Stomatologija',
        path: '/osoblje/stomatologija',
      },
      {
        title: 'Pedijatrija',
        path: '/osoblje/pedijatrija',
      },
    ],
  },
  {
    title: 'Pregled djelatnosti',
    path: '/djelatnost',
    icon: <FaIcons.FaCity />,
  },
  {
    title: 'Statistika',
    path: '/statistika',
    icon: <ImIcons.ImStatsDots />,
  },
  {
    title: 'Administracija',
    path: '/administracija',
    icon: <FcIcons.FcManager />,
  },
  {
    title: 'Dodaj djelatnika',
    path: '/administracija/dodaj',
    icon: <TiIcons.TiUserAdd />,
  },
]
