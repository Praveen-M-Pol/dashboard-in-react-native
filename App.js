import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Upload from './src/Dcomponents/Upload';
import Details from './src/Dcomponents/Details';
import History from './src/Dcomponents/History';
import Profile from './src/Dcomponents/Profile';

const navigator = createStackNavigator (
  {
      LoginS: Login,
      DashboardS: Dashboard,
      UploadS: Upload,
      DetailsS: Details,
      HistoryS: History,
      ProfileS: Profile

  },
  {
    initialRouteName: 'LoginS',
    defaultNavigationOptions: {
      title: 'CGM'
    }
  }
)

export default createAppContainer(navigator);