import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { uiColor } from '../constants'

const Divider = ({ height = 1, backgroundColor }) => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <View
        style={{
          width: '100%',
          height,
          backgroundColor: backgroundColor ? backgroundColor : uiColor.border
        }}
      />
    </View>
  )
}

export default Divider

Divider.propTypes = {
  height: PropTypes.number,
  borderWidth: PropTypes.number,
  backgroundColor: PropTypes.string
}
