import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomersList } from "./customers/CustomersList";
import { CustomersCreate } from "./customers/CustomersCreate";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersShow } from "./customers/CustomersShow";
import { AccountsList } from "./accounts/AccountsList";
import { AccountsCreate } from "./accounts/AccountsCreate";
import { AccountsEdit } from "./accounts/AccountsEdit";
import { AccountsShow } from "./accounts/AccountsShow";
import { ReportsList } from "./reports/ReportsList";
import { ReportsCreate } from "./reports/ReportsCreate";
import { ReportsEdit } from "./reports/ReportsEdit";
import { ReportsShow } from "./reports/ReportsShow";
import { DunningNotificationsList } from "./dunningNotifications/DunningNotificationsList";
import { DunningNotificationsCreate } from "./dunningNotifications/DunningNotificationsCreate";
import { DunningNotificationsEdit } from "./dunningNotifications/DunningNotificationsEdit";
import { DunningNotificationsShow } from "./dunningNotifications/DunningNotificationsShow";
import { AdminsList } from "./admins/AdminsList";
import { AdminsCreate } from "./admins/AdminsCreate";
import { AdminsEdit } from "./admins/AdminsEdit";
import { AdminsShow } from "./admins/AdminsShow";
import { PaymentsList } from "./payments/PaymentsList";
import { PaymentsCreate } from "./payments/PaymentsCreate";
import { PaymentsEdit } from "./payments/PaymentsEdit";
import { PaymentsShow } from "./payments/PaymentsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DCMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customers"
          list={CustomersList}
          edit={CustomersEdit}
          create={CustomersCreate}
          show={CustomersShow}
        />
        <Resource
          name="Accounts"
          list={AccountsList}
          edit={AccountsEdit}
          create={AccountsCreate}
          show={AccountsShow}
        />
        <Resource
          name="Reports"
          list={ReportsList}
          edit={ReportsEdit}
          create={ReportsCreate}
          show={ReportsShow}
        />
        <Resource
          name="DunningNotifications"
          list={DunningNotificationsList}
          edit={DunningNotificationsEdit}
          create={DunningNotificationsCreate}
          show={DunningNotificationsShow}
        />
        <Resource
          name="Admins"
          list={AdminsList}
          edit={AdminsEdit}
          create={AdminsCreate}
          show={AdminsShow}
        />
        <Resource
          name="Payments"
          list={PaymentsList}
          edit={PaymentsEdit}
          create={PaymentsCreate}
          show={PaymentsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
