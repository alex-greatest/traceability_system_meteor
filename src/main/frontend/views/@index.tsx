import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

export default function gtgr()
{
  return <div>111111111</div>
}

export const config: ViewConfig = {
  loginRequired: true,
  rolesAllowed: ['Администратор'],
};
