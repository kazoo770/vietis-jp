'use client';
import Script from 'next/script';

export default function SpirWidget() {
  return (
    <>
      <div
        className="spir-widget"
        data-url="https://app.spirinc.com/external/teams/qG8FkRtll73_FR5--i2-z/availability-sharings/IM26hv6rsj6ljlDmbKvPY/confirm"
        style={{ minWidth: '320px', height: '650px' }}
      />
      <Script
        src="https://app.spirinc.com/js/external/iframe.js"
        strategy="lazyOnload"
      />
    </>
  );
}
