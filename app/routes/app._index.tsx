import { Layout, Page, Text, Button } from "@shopify/polaris";
import React from "react";

function Overview() {
  return (
    <div>
      <ui-title-bar title="Overview">
        <button className="bg-green-500">Preview</button>
        <button variant="primary">Launch apps</button>
      </ui-title-bar>
      <Page narrowWidth>
        <Layout>
          <Layout.Section>
            <Text as="p" variant="heading2xl">
              OVERVIEW
            </Text>
            <div className=" text-green-500">hello</div>
            <Button tone="success" variant="primary" size="medium">
              Success
            </Button>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}

export default Overview;
// export const links = () => [{ rel: "stylesheet", href: overviewStyles }];
