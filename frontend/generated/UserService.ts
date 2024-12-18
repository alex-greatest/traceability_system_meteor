import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
async function getUserName_1(init?: EndpointRequestInit_1): Promise<string | undefined> { return client_1.call("UserService", "getUserName", {}, init); }
export { getUserName_1 as getUserName };
