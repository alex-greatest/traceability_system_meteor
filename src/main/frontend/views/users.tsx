import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

export default function Users() {
  return <div>111</div>
}

export const config: ViewConfig = {
  loginRequired: true,
  rolesAllowed: ['Администратор'],
};