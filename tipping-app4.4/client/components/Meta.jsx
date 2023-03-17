import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Tipping App",
  keywords:
    "Office sports tipping app, Workplace sports betting, Sports prediction app, Sports tipping competition, Office sports league, Sports betting among colleagues, Friendly sports betting, Sports odds and statistics, Sports betting app, Leaderboard for sports tipping",
  description:
    "An office sports tipping app is a mobile application designed to facilitate friendly sports betting among colleagues in the workplace.",
};
