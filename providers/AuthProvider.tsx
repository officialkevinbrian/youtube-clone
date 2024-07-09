import React, { createContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/config/supabase.config";
import { router, useSegments } from "expo-router";

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

export const AuthContext = createContext<Partial<ContextProps>>({});

const AuthProvider = ({ children }: any) => {
  //user = null  means loading
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);
  const segments = useSegments();

  useEffect(() => {
    (async () => {
      const session = (await supabase.auth.getSession()).data.session;
      setSession(session);
      setUser(session ? true : false);

      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          // console.log("session✅✅", session);
          // console.log("Event✅✅", event);
          setSession(session);
          setUser(session ? true : false);

          if (segments[0].includes("auth") && session) {
            return router.navigate("/(tabs)");
          }
        }
      );
    })();

    return () => {
      // authListener!.unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    if (segments[0].includes("app") && !session) {
      return router.navigate("/(auth)");
    }
  }, [segments]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
