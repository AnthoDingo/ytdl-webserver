import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/DownloadForm.scss'

class DownloadForm extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <form className='downloadForm' onSubmit={this.props.onSubmit}>
        <input className='downloadForm__input' type='text' />
        <input className='downloadForm__checkbox' type="checkbox" id="audio" name="audio" />
        <label className='downloadForm__checkbox__label' for="audio">Audio only</label>
        <button className='downloadForm__btn'>▶</button>
      </form>
    )
  }
}

DownloadForm.propTypes = {
  onSubmit: PropTypes.func
}

export default DownloadForm
