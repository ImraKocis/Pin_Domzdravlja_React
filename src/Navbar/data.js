import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as ImIcons from 'react-icons/im'
import * as RiIcons from 'react-icons/ri'
import Data from './zupanije'
const Zupanije = Data
const zupanije = [
  { id: 1, name: 'pero' },
  { id: 2, name: 'duro' },
]
console.log()
export const SidebarData = [
  {
    title: 'Ordinacije',
    path: '/komponente/ordinacije',
    icon: <FaIcons.FaHospitalSymbol />,
  },
  {
    title: 'Županije',
    path: '/reports',
    icon: <FaIcons.FaMap />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [{}],
  },

  {
    title: 'Osoblje',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Opća obiteljska medicina',
        path: '/reports/reports1',
      },
      {
        title: 'Zdravstvena zaštita žena',
        path: '/reports/reports1',
      },
      {
        title: 'Stomatologija',
        path: '/reports/reports1',
      },
      {
        title: 'Pedijatrija',
        path: '/reports/reports1',
      },
    ],
  },
  {
    title: 'Statistika',
    path: '/messages',
    icon: <ImIcons.ImStatsDots />,
  },
  {
    title: 'Login',
    path: '/support',
    icon: <FiIcons.FiLogIn />,
  },
]
