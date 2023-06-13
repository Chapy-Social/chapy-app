import { createContext, useCallback, useMemo, useState } from "react";
import { isNullOrEmpty } from "../utils/helpers";
import userService from "../services/UserService";

const defaultContext = {
  loading: false,
  getUser: () => {},
};

export const AppContext = createContext(defaultContext);

export const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(defaultContext.loading);

  const getUser = useCallback(async (id) => {
    setLoading(true);
    try {
      const { data: user } = await userService.get(id);
      if (!isNullOrEmpty(user.direct)) {
        const links = user.personal.platforms.concat(user.business.platforms);
        const link = links.find((l) => l.id === user.direct);
        var urlString =
          link.isUrl && !link.value.startsWith("http")
            ? "https://" + link.value
            : link.webBaseURL + link.value;
        window.open(urlString, "_self");
      } else {
        const p = user.isPersonal ? user.personal : user.business;
        setProfile(p);
        setLinks(p.platforms);
      }
    } catch (err) {
      console.error(err);
      window.open("/not-found", "_self");
    }
    setLoading(false);
  }, []);

  const contextValues = useMemo(
    () => ({
      profile,
      links,
      loading,
      getUser,
    }),
    [profile, links, loading, getUser]
  );

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
