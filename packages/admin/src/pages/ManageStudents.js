import { Layout, H3, overrideColorTheme, userRegistryService } from '@shiksha/common-lib'
import manifest from "../manifest.json";
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import UserList from 'components/UserList';

function ManageStudents({footerLinks, appName}) {
  const { t } = useTranslation();
  const colors = overrideColorTheme();
  const [students, setStudents] = useState([]);


  useEffect(() => {
    userRegistryService.getAll({}, {
      tenantid: process.env.REACT_APP_TENANT_ID
    }).then((res) => {
      console.log(res);
      setStudents(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Layout
      _header={{
        title: t("MANAGE_STUDENTS"),
      }}
      _appBar={{ languages: manifest.languages }}
      // subHeader={
      //   <H3 textTransform="none">{t("Submit the below given form")}</H3>
      // }
      _subHeader={{
        bg: colors?.cardBg,
        _text: {
          fontSize: "16px",
          fontWeight: "600",
          textTransform: "inherit",
        },
      }}
      _footer={footerLinks}
    >
    <UserList users={students}  />
    </Layout>
  )
}

export default ManageStudents