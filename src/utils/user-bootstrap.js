import { getProfile } from "./auth0";

async function bootstrapAppData() {
  const data = await getProfile();
  console.log("data user-bootstrap: ", data);
  if (!data) {
    return { user: null };
  }
  const { user } = data;

  return {
    user,
  };
}

export { bootstrapAppData };
