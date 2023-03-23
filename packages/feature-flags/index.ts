import { get } from "@vercel/edge-config";

async function getFeatureFlag(featureFlag) {
  return await get(featureFlag);
}

export { getFeatureFlag };
