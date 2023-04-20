import React from "react";
import FBUl from "../../styledComponents/Products/FBUl";
import FilterButtonsWrapper from "../../styledComponents/Products/filterButtonsWrapper";
import FilterButton from "../../styledComponents/Products/filterButton";

export default function Cathegories({value, onClickCathegory}) {
  const cathegories = ["ALL", "BEDROOM", "KITCHEN", "STORAGE", "DECOR", "BATHROOM"];

  // const onClickCathegory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <FilterButtonsWrapper>
      <FBUl style={{paddingLeft: 0}}>
        {cathegories.map((cathegoryName, index) => (
          <FilterButton
            key={index}
            onClick={() => onClickCathegory(index)}
            className={value === index ? "active" : ""}
          >
            {cathegoryName}
          </FilterButton>
        ))}
      </FBUl>

      {/* <FilterButton onClick={() => onClickCathegory(0)} className={activeIndex === 0 ? "active" : ''}>ALL</FilterButton>
                <FilterButton onClick={() => onClickCathegory(1)} className={activeIndex === 1 ? "active" : ''}>BEDROOM</FilterButton>
                <FilterButton onClick={() => onClickCathegory(2)} className={activeIndex === 2 ? "active" : ''}>KITCHEN</FilterButton>
                <FilterButton onClick={() => onClickCathegory(3)} className={activeIndex === 3 ? "active" : ''}>STORAGE</FilterButton>
                <FilterButton onClick={() => onClickCathegory(4)} className={activeIndex === 4 ? "active" : ''}>STORAGE</FilterButton> */}
    </FilterButtonsWrapper>
  );
}
