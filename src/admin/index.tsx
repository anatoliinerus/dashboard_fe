import { Admin, Resource, CustomRoutes } from "react-admin";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import Dashboard from "./Dashboard";
import UserIcon from '@mui/icons-material/People';
import {UserCreate, UserEdit, UserList, UserShow} from "./users";
import { Route } from "react-router";
import { ProfileEdit } from "./profiles";
import {MyLayout} from './MyLayout';
import {PartnerCreate, PartnerEdit, PartnerList, PartnerShow} from "./partners";

const App = () => (
  <Admin 
    layout={MyLayout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    {(permissions) => (
      <>
       <CustomRoutes>
        <Route path='/my-profile' element={<ProfileEdit/>} />
       </CustomRoutes>
      {permissions === 'ADMIN' ? 
        <>
          <Resource name="users" create={UserCreate} list={UserList} edit={UserEdit} show={UserShow} icon={UserIcon}/>
          <Resource name="partners" create={PartnerCreate} list={PartnerList} edit={PartnerEdit} show={PartnerShow} icon={UserIcon} />
        </>
      : null}
        

      </>
    )}
  </Admin>
);

export default App;