import React from "react";
import Page from "../../components/page/page";
import { brandName } from "../../shared/shared";

export default function Home() {
  return (
    <Page title={`Home`} description={`Home Page`} sidebar={false} header={false} footer={false}>
      <div className={`home w100`}>
        <section className={`parallaxContainer w100 mh100`}>
          <div className={`parallax w100 mh100`}>
            {/* Background layer 1 (farthest) */}
            <section className={`bg w100 mh100`} style={{
              transform: `translateZ(-2px) scale(3)`,
              background: `url(/images/layers/bg-1-sunset.jpg)`,
            }} />
            
            {/* Trees layer 1 */}
            <section className={`bg w100 mh100`} style={{
              top: 100,
              transform: `translateZ(-1.5px) scale(3)`,
              background: `url(/images/layers/trees/green-1.svg)`,
            }} />
            
            {/* Trees layer 2 */}
            <section className={`bg w100 mh100`} style={{
              top: 0,
              left: 30,
              transform: `translateZ(-1px) scale(3)`,
              background: `url(/images/layers/trees/green-2.svg)`,
            }} />
            
            {/* Foreground trees */}
            <section className={`bg w100 mh100`} style={{
              top: -130,
              transform: `translateZ(-0.5px) scale(2.35)`,
              background: `url(/images/layers/trees/green-3.svg)`,
            }} />
            
            {/* Parallax text in the foreground */}
            <section className={`parallaxText flex column w100 mh100`} style={{
              transform: `translateZ(0px)`,  // Set this to 0 to keep it visible
              zIndex: 10,  // Ensure it's above the other layers
            }}>
              <span>{brandName}</span>
              <span>I/O</span>
            </section>
            {/* <section className={`bg w100 mh100`} style={{ 
              // filter: `blur(3px)`,
              transform: `translateZ(-2px) scale(3)`,
              background: `url(/images/layers/bg-1-sunset.jpg)`,
            }} />
            <section className={`bg w100 mh100`} style={{ 
              top: -320,
              // filter: `blur(2px)`,
              transform: `translateZ(-1px) scale(3)`,
              background: `url(/images/layers/trees/green-1.svg)`,
            }} />
            <section className={`bg w100 mh100`} style={{ 
              top: 0,
              left: 30,
              // filter: `blur(1px)`,
              transform: `translateZ(-0.5px) scale(1.7)`,
              background: `url(/images/layers/trees/green-2.svg)`,
            }} />
            <section className={`bg w100 mh100`} style={{ 
              top: -130,
              transform: `translateZ(0px) scale(1.4)`,
              background: `url(/images/layers/trees/green-3.svg)`,
            }} />
            <section className={`parallaxText flex column w100 mh100`} style={{ 
              transform: `translateZ(1px)`,
            }}>
              <span>
                {brandName}
              </span>
              <span>
                I/O
              </span>
            </section> */}
          </div>
        </section>
        <section className={`w100 mh100`}>
          Section 2
        </section>
      </div>
    </Page>
  )
}