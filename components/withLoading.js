import React from "react"
import * as R from "ramda"
import { Box } from "rebass"
import { ClipLoader } from "react-spinners"

const Loader = () => (
	<Box my={50} width="100px" margin="auto">
		<ClipLoader loading sizeUnit="px" size={150} color="#123abc" />
	</Box>
)
export default (Child, path) => props =>
	R.ifElse(R.equals(0), R.always(<Loader />), R.always(<Child {...props} />))(
		R.length(R.path(path, props))
	)
