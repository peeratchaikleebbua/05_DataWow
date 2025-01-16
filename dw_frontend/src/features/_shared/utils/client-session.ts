import { AxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";

export const clientSession = async () => {
  const session = await getSession();

  if (session) {
    if (session?.expires && Date.parse(session.expires) < Date.now()) {
      signOut();
    }
  }

  const config = (option?: AxiosRequestConfig) => {
    if (!session?.accessToken) return { ...option }; // Prevent calls if accessToken is not ready
    const clientConfig: AxiosRequestConfig = {
      headers: {
        Authorization: session?.accessToken,
      },
      ...option,
    };

    return clientConfig;
  };

  return { config, sessionId: session?.account.id };
};
