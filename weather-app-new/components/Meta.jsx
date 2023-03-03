import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* Favicon: Weather Icon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        // crossOrigin
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Weather App",
  keywords:
    "Weather forecast, Current weather, Local weather, Weather updates, Weather conditions, Temperature, Precipitation, Wind speed, Humidity, Hourly forecast",
  description:
    "This weather app provides users with up-to-date information on current and future weather conditions for their location or other locations of interest.",
};
