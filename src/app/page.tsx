import React from "react";
import Page from "../../components/page/page";
import { brandName } from "../../shared/shared";

export default function Home() {
  return (
    <Page title={`Home`} description={`Home Page`} sidebar={false}>
      <div className={`home`}>
        {brandName}
      </div>
    </Page>
  )
}