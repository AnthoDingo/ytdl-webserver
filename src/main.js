/* global document */

import React from 'react'
import { render } from 'react-dom'
import DownloadPanel from './components/DownloadPanel'
import MainFooter from './components/MainFooter'
import './stylesheets/shared.scss'

render(
  <div>
    <DownloadPanel />
    <MainFooter />
  </div>,
  document.getElementById('app')
)
