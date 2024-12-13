import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { AppProvider, DashboardLayout } from '@toolpad/core';
import DescriptionIcon from '@mui/icons-material/Description';

function SwitcherHide()
{
  return <></>
}


export default function Aaa()
{
    return (
      <AppProvider
        navigation={[
          {
            segment: 'home',
            title: 'Home',
            icon: <DescriptionIcon />,
          },
          {
            segment: 'about',
            title: 'About Us',
            icon: <DescriptionIcon />,
          },
        ]}
      >
        <DashboardLayout slots={{toolbarActions: SwitcherHide}}>
          111
        </DashboardLayout>
      </AppProvider>
    )
}

export const config: ViewConfig = {
  loginRequired: true,
  rolesAllowed: ['Инженер МОЕ', 'Инженер TEF', 'Администратор']
};