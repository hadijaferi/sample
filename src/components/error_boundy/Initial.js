import React, { Component } from "react";

import Test1 from "./Test1";
import Test2 from "./Test2";
import ErrorBoundy from "./Error_Boundy";
class Initial extends Component {
  // error Boundly ha dar sorati k toye render Component use shde moshkeli vojod dashte bashad mishe ono Custom krd
  render() {
    return (
      <div>
        {/* age component ha hm ziad bashe bayad harkodom az component ha ro to 1 ErrorBoundy bzarim k fght oni k moshkel dre render nshe baghie beshan */}
        <ErrorBoundy>
          <Test1 myname="Ali" />
        </ErrorBoundy>
        <ErrorBoundy>
          <Test2 myname="Jaferi" />
        </ErrorBoundy>
      </div>
    );
  }
}

export default Initial;
