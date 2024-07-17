import { createContext, useRef } from "react";

const MainContext = createContext({
  scrollRef: [],
  handleScrollView: () => {},
});

export const MainContextProvider = (props) => {
  const scrollRef = useRef([]);

  const handleScrollView = (index) => {
    if (scrollRef.current[index] && index != 0) {
      window.scrollTo({
        top:
          scrollRef.current[index].getBoundingClientRect().y +
          globalThis.scrollY -
          200,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }); // index == 0 인 경우 header height만큼 안올라가는 버그 예외처리
    }
  };

  return (
    <MainContext.Provider
      value={{
        scrollRef: scrollRef,
        handleScrollView: handleScrollView,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
