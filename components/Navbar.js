import React from 'react'
import {Box} from 'rebass'
import styled from 'styled-components'

const Fixed = styled(Box)`
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
	left: 0;
	right: 0;
	background: white;
`

const Navbar = props => <Fixed {...props} />

export default Navbar
