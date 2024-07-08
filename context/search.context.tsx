import { router } from "expo-router";
import { Children, createContext, useState } from "react";

type SearchQueryType = {
  updateQuery: (value: string) => void;
  query: string;
  toggleModal: () => void;
  openModal: boolean;
  queryHistory: string[] | null;
  updateSearchHistory: (history: string) => void;
};

export const SearchContext = createContext<SearchQueryType | null>(null);

export const SearchQueryContextProvider = ({ children }: { children: any }) => {
  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  //update query
  const updateQuery = (query: string) => {
    setQuery(query);
    toggleModal();
    updateSearchHistory(query);
    router.navigate("/(app)/search");
  };

  //update search history
  const updateSearchHistory = (history: string) => {
    setQueryHistory((prev) => [...prev, history]);
  };

  //toggle modal
  const toggleModal = () => {
    setOpenModal((prev) => !openModal);
  };

  return (
    <SearchContext.Provider
      value={{
        updateQuery,
        toggleModal,
        query,
        openModal,
        queryHistory,
        updateSearchHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
