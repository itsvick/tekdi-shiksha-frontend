import React, { useEffect, useState } from "react";
import { Box, HStack, VStack, Text, Heading } from "native-base";
import { useTranslation } from "react-i18next";
import { generatePath } from "react-router-dom";
import { H4, Widget, cohortRegistryService, Loading, useWindowSize } from "@shiksha/common-lib";
// import ChooseClassActionSheet from "./Molecules/ChooseClassActionSheet";

export default function CohortList() {
  const { t } = useTranslation();
  const [classes, setClasses] = useState([]);
  const [width, height] = useWindowSize();
  const [loading, setLoading] = useState(true);
  const teacherId = localStorage.getItem("id");
  useEffect(() => {
    let ignore = false;
    const getData = async () => {
      if (!ignore) {
        setClasses(
          await cohortRegistryService.getAll(
            {
              teacherId: teacherId,
              type: "class",
              role: "teacher",
            },
            {
              tenantid: process.env.REACT_APP_TENANT_ID, //'fbe108db-e236-48a7-8230-80d34c370800' //process.env.TENANT_ID
            }
          )
        );
        setLoading(false);
      }
    };
    getData();
  }, [teacherId]);

  if (loading) {
    return <Loading height={height - height / 2} />;
  }

  return classes?.length ? (
    <Box pb={4} pt="30">
      <VStack space={10}>
        <Widget
          data={classes.map((item, index) => {
            return {
              title:
                (item?.name ? item?.name : "") +
                (item?.section ? " • Sec " + item?.section : ""),
              subTitle: t("CLASS_TEACHER"),
              link: generatePath(item.cohortId, { ...{ id: item.cohortId } }),
              _box: {
                style: {
                  background:
                    index % 2 === 0
                      ? "linear-gradient(281.03deg, #FC5858 -21.15%, #F8AF5A 100.04%)"
                      : "linear-gradient(102.88deg, #D7BEE6 -5.88%, #B143F3 116.6%)",
                },
              },
            };
          })}
        />
        {/* <HStack space={2} justifyContent={"center"}>
          <ChooseClassActionSheet />
        </HStack> */}
      </VStack>
    </Box>
  ) : (
    <H4 textAlign="center" mb="10" mt="10">
      {t("NO_CLASSES_FOUND")}
    </H4>
  );
}
