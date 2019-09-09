import {withRouter} from 'next/router'
import withLayout from '../components/withLayout'
import PostContainer from '../containers/PostContainer'

export default withRouter(withLayout(PostContainer))
