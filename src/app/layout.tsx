'use client';

import "../../shared/styles.scss";

import SharedData from "../../shared/shared";

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return <>
    <SharedData>
      <html lang={`en`}>
        {children}
      </html>
    </SharedData>
  </>
}