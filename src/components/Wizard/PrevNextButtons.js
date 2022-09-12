import React from "react";
import Button from "@mui/material/Button";

const NextButton = ({
  page,
  setPage,
  formData,
  setCheckLevelOneForm,
  setCheckLevelTwoForm,
  onSubmit
}) => {
  const nextClick = () => {
    switch (page) {
      case 0:
        !formData.firstName || !formData.lastName || !formData.email
          ? setCheckLevelOneForm(true)
          : setPage((currPage) => currPage + 1);
        break;

      case 1:
        !formData.facebookUserName ||
        !formData.facebookEmail ||
        !formData.birthDate ||
        !formData.passingDate ||
        !formData.about
          ? setCheckLevelTwoForm(true)
          : setPage((currPage) => currPage + 1);
        break;
      case 2:
      window.location = "/get_facebook_data";
      // console.log(formData);
    }
  };
  console.log(page);

  return (
    <div className="footer">
      <Button
        sx={{ mr: "5px" }}
        className="prev-btn"
        variant="outlined"
        disabled={page === 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Prev
      </Button>
      <Button
        sx={{ ml: "5px" }}
        className="next-btn"
        variant="outlined"
        onClick={() => {
          nextClick();
          if(onSubmit){
            onSubmit()
          }

        }}
      >
        {page === 2 ? "Get data from Facebook" : "Next"}
      </Button>
    </div>
  );
};

export default NextButton;
