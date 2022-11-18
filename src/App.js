import React, { useEffect } from 'react';
import GroupList from './components/group/GroupList';
import { getListGroupAsyncAction } from './redux/reducers/groupSlide';
import { selectListGroups, selectLoading } from "./redux/selectors/groupSelector";
import WithLoading from './hoc/withLoading';
import { connect } from 'react-redux';
import Home from "./components/Home";
import { Routes, Route,Link,Redirect } from 'react-router-dom';

function App(props) {

  const getListGroup = props.getListGroupAsyncAction;

  useEffect(() => {
    getListGroup();
  }, [getListGroup]);

  const GroupListWithLoading = WithLoading(GroupList);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/department">Group List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/department"
          component={() =>
            <GroupListWithLoading
              groups={props.groups}
              isLoading={props.isLoading} />}
          exact />
      </Routes>
    </div>
  );
}

const mapGlobalStateToProps = state => {
  return {
    groups: selectListGroups(state),
    isLoading: selectLoading(state)
  };
};

export default connect(mapGlobalStateToProps, { getListGroupAsyncAction })(App);