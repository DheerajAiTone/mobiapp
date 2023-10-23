import { Layout, Page } from "@shopify/polaris";
import React from "react";
import overviewStyles from "./styles/app-overview.css";
function Overview() {
  return (
    <div>
      <ui-title-bar title="Overview">
        <button id="launchButton">Preview</button>
        <button variant="primary" className="launchButton">
          Launch apps
        </button>
      </ui-title-bar>
      <Page>
        <Layout>
          <Layout.Section></Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}

export default Overview;
export const links = () => [{ rel: "stylesheet", href: overviewStyles }];
