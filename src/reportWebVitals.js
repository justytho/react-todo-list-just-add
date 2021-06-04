const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // CLS Cumulative Layout Shift - measures visual stability (checks for any unexpected layout shifts) Layout shift: occurs when a visible element changes position or size and then affects the position of content around it.
      getFID(onPerfEntry); // FID First Input Delay - measures load responsiveness
      getFCP(onPerfEntry); // FCP First Contentful Paint - measures perceived load speed (marks the first point in the page load timeline when user sees something on screen)
      getLCP(onPerfEntry); // LCP Largest Contentful Paint  - measures perceived load speed (marks the point in the page load when the page's main content has likely loaded)
      getTTFB(onPerfEntry); // TTFB Time to First Byte - time that it takes for a user's browser to receive the first byte of page content
    });
  }
};

// export reportWebVitals
export default reportWebVitals;
