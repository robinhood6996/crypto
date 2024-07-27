import { useEffect, useRef } from "react";

const Market = () => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "650",
          "symbol": "BINANCE:BTCUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

    const container = containerRef.current;
    scriptRef.current = script;
    if (container) {
      container.appendChild(script);
    }
  }, []);
  return (
    <div className="container h-100">
      <div>
        <div
          className="tradingview-widget-container"
          ref={containerRef}
          style={{ height: "100%", width: "100%" }}
        >
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "calc(100% - 32px)", width: "100%" }}
          ></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/"
              rel="noopener nofollow"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
