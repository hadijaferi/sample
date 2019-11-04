import React from "react";

// mishe y value avalie hm behesh bedi
const UserContext = React.createContext("Hadi");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
