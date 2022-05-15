import Management from "components/management/management-card";
import { ManagementData } from "components/management/management-data";
import { Container } from "components/management/management.style";
import { LeftWrapper } from "components/management/management.style";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchManagement,
  getManagement,
} from "store/reducer-and-action/management/managementSlice";
import { getActiveLanguageName } from "store/reducer-and-action/language/language";

const SeniorManagement = () => {
  const dispatch = useDispatch();
  const currLanguage = useSelector(getActiveLanguageName);
  const management = useSelector(getManagement);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    dispatch(fetchManagement(currLanguage));
  }, []);

  console.log(management);
  return (
    <Container>
      <LeftWrapper>
        {management.map((item, id) => (
          <div data-aos="fade-up">
            <Management data={item} key={id} />
          </div>
        ))}
        {/* {ManagementData.uz.map((item, id) => (
          <div data-aos="fade-up">
            <Management data={item} key={id} />
          </div>
        ))} */}
      </LeftWrapper>
    </Container>
  );
};

export default SeniorManagement;
