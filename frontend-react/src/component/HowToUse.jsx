import React from "react";
import { useTranslation } from "react-i18next";
import {
  IoCameraSharp,
  IoCheckmarkDoneSharp,
  IoArrowForwardCircleSharp,
  IoAlertCircleSharp,
} from "react-icons/io5";

const HowToUse = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-bold mb-4">{t("how_to_use_title")}</h2>
          <p className="text-gray-600">{t("how_to_use_subtitle")}</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                  <IoCameraSharp className="text-4xl text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold mb-2">
                    {t("how_to_use_step1_title")}
                  </div>
                  <p className="text-gray-700 text-base">
                    {t("how_to_use_step1_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                  <IoCheckmarkDoneSharp className="text-4xl text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold mb-2">
                    {t("how_to_use_step2_title")}
                  </div>
                  <p className="text-gray-700 text-base">
                    {t("how_to_use_step2_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                  <IoArrowForwardCircleSharp className="text-4xl text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold mb-2">
                    {t("how_to_use_step3_title")}
                  </div>
                  <p className="text-gray-700 text-base">
                    {t("how_to_use_step3_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                  <IoAlertCircleSharp className="text-4xl text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold mb-2">
                    {t("how_to_use_step4_title")}
                  </div>
                  <p className="text-gray-700 text-base">
                    {t("how_to_use_step4_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
