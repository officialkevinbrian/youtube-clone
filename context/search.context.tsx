import { Children, createContext, useState } from "react";

type SearchQueryType = {
  updateQuery: (value: string) => void;
  query: string;
  toggleModal: () => void;
  openModal: boolean;
};

export const SearchContext = createContext<SearchQueryType | null>(null);

export const SearchQueryContextProvider = ({ children }: { children: any }) => {
  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  //update query
  const updateQuery = (query: string) => {
    setQuery(query);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
