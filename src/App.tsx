import { FC, useState } from "react";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
  ConfigProvider,
  theme,Space,Button,AntdLayout
} from "@pankod/refine-antd";

import "@pankod/refine-antd/dist/reset.css";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6"; 
import  AntdInferencer  from "@pankod/refine-inferencer/antd";
import CompanyDetails from "pages/company-details";
import  {ProjectList}  from "pages/projects/projects-list";
import  {ProjectCreate}  from "pages/projects/create-project";
import {ProjectEdit} from "pages/projects/edit-projects";
import {CustomersList} from "pages/customers/customers-list";
import{CustomersShow} from "pages/customers/show-customers";
import {CustomerCreate} from "pages/customers/create-customers";
import{CustomerEdit} from "pages/customers/edit-customers";
import { ProjectShow } from "pages/projects/show-projects";
import { create } from "domain";
interface HeaderProps {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

const Header: FC<HeaderProps> = (props) => {

    return (
        <Space
            direction="vertical"
            align="end"
            style={{
                padding: "1rem",
            }}
        >
            <Button
                onClick={() => {
                    props.setTheme(props.theme === "light" ? "dark" : "light");
                }}
                icon={props.theme === "light" }
            />
        </Space>
    );
};
const App: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  return (
    <ConfigProvider
    theme={{
        algorithm:
            currentTheme === "light"
                ? theme.defaultAlgorithm
                : theme.darkAlgorithm,
    }}
>
    <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider("http://localhost:3001")}
          Layout={Layout}
          ReadyPage={ReadyPage}
          notificationProvider={notificationProvider}
          catchAll={<ErrorComponent />}
          Header={() => (
            <Header theme={currentTheme} setTheme={setCurrentTheme} />
        )}
          resources={[
              {
                  name: "projects",
                  list: ProjectList,
                  show:ProjectShow,
                  edit:ProjectEdit,
                  create:ProjectCreate,
                

              },
              {
                  name: "customers",
                  list: CustomersList,
                  show:CustomersShow,
                  edit:CustomerEdit,
                  create:CustomerCreate,
              }
          ]}
      />
      </ConfigProvider>
    
  );
};   

export default App;