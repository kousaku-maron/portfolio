import { connect } from 'react-redux'
import drawerActions from '../actions/drawerActions'
import qiitaActions from '../actions/qiitaActions'
import githubActions from '../actions/githubActions'
import Main from '../components/Main'

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowMenuToggle: () => dispatch(drawerActions.showMenuToggle()),
    handleMenuChange: (label) => dispatch(drawerActions.menuChange(label)),
    handleSetQiitaArticles: (articles) => dispatch(qiitaActions.setQiitaArticles(articles)),
    handleSetGithubRepos: (repos) => dispatch(githubActions.setGithubRepos(repos)),
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
