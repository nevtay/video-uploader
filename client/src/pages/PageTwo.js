import React, { useState } from "react";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";

const PageTwo = ({ page, handlePage }) => {
  // move forward one page
  const toNextPage = (e) => {
    // e.preventDefault();
    if (page === 3) {
      return;
    } else {
      handlePage((page) => page + 1);
    }
  };

  // move back one page
  const toPrevPage = (e) => {
    // e.preventDefault();
    if (page === 1) return;
    handlePage((page) => {
      return (page = page - 1);
    });
  };

  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="form-group">
        <h3 className="mb-3">TERMS AND CONDITIONS</h3>
        <strong>Application of these terms 1. </strong>
        <p>
          These terms and conditions shall apply in respect of all goods and
          services we supply to you whether specified overleaf or otherwise
          (“the Service”). Except to the extent that these terms and conditions
          are varied by mutual consent they together with the brief and
          quotation overleaf shall constitute the entire agreement between us
          and shall prevail over your own terms and conditions. You agree that
          in entering into this agreement, you shall not rely on any
          representation or understanding, whether oral or in writing, which is
          not included or referred to in these terms and conditions.{" "}
        </p>

        <strong>Delivery 2. </strong>
        <p>
          The Service shall be delivered to you in accordance with the brief
          agreed at the outset of the project either through concept meetings or
          in written proposals. 3. We shall produce one master copy of the
          production only for your use. Should you require further copies an
          additional charge will apply. A separate quotation will be issued for
          the production of additional copies. 4. Times given for delivery of
          the Service are estimates only and time shall not be of the essence.
        </p>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          className="custom-checkbox mr-2"
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          required
        />
        <span>
          I accept the terms and conditions.{" "}
          <sup className="text-danger">*</sup>
        </span>
      </div>
      <div className="btn-group mt-4">
        <PrevButton handleOnClick={toPrevPage} page={page} />
        {isChecked && <NextButton handleOnClick={toNextPage} page={page} />}
        {!isChecked && <NextButton onClick={(e) => e.preventDefault()} />}
      </div>
    </>
  );
};

export default PageTwo;
