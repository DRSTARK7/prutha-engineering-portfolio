
import { Refine } from "@refinedev/core";
import { RefineThemes, ThemedLayoutV2, notificationProvider } from "@refinedev/antd";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/react-router-v6";

import "@refinedev/antd/dist/reset.css";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { NavHeader } from "./components/NavHeader";
import { FooterComponent } from "./components/FooterComponent";

const App = () => {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ConfigProvider theme={RefineThemes.Blue}>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerProvider}
            resources={[
              {
                name: "home",
                list: "/",
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <Routes>
              <Route 
                path="/" 
                element={
                  <ThemedLayoutV2
                    Header={NavHeader}
                    Footer={FooterComponent}
                    Title={() => <div style={{ padding: "12px 24px" }}>FabMachine</div>}
                  >
                    <Index />
                  </ThemedLayoutV2>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <RefineKbar />
          </Refine>
        </ConfigProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
};

export default App;
