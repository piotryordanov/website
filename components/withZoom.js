import React from 'react'
import Zoom from 'react-reveal/Zoom'
import styled from 'styled-components'
import withReveal from 'react-reveal/withReveal'

const Component = withReveal(styled.div``, <Zoom />)

export default Child => {
	return props => (
		<Component>
			<Child {...props} />
		</Component>
	)
}
