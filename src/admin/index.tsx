import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import Dashboard from "./Dashboard";
import UserIcon from '@mui/icons-material/People';
import {UserCreate} from "./users";

const App = () => (
  <Admin 
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    {(permissions) => (
      <>
      {permissions === 'ADMIN' ? 
        <Resource name="users" create={UserCreate} list={ListGuesser} edit={EditGuesser} show={ShowGuesser} icon={UserIcon}/>
      : null}
        

      </>
    )}
  </Admin>
);

export default App;