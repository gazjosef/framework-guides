import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "99bvujhe",
  dataset: "production",
  apiVersion: "2022-12-11",
  useCdn: true,
});
