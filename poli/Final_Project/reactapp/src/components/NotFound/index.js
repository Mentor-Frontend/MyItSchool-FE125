import React from "react";
import error from "./img/error.png";
import NotFoundContainer from "../../styledComponents/NotFound/NotFounContainer";
import NotFoundWrapper from "../../styledComponents/NotFound/NotFoundWrapper";
import ErrorImage from "../../styledComponents/NotFound/ErrorImage";
import H2NotFound from "../../styledComponents/NotFound/H2NotFounf";
import PNotFound from "../../styledComponents/NotFound/PNotFound";

export default function NotFound() {
  return (
    <>
      <NotFoundContainer>
        <NotFoundWrapper>
          <ErrorImage src={error} alt="error"/>
          <div className="text">
            <H2NotFound>Page Not Found</H2NotFound>
            <PNotFound>
              We searched everywhere but couldn’t find what you’re looking for.
              Let’s find a better place for you to go.
            </PNotFound>
          </div>
        </NotFoundWrapper>
      </NotFoundContainer>
    </>
  );
}
