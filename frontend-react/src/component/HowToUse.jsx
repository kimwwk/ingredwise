import React from "react";
import { IoCameraSharp } from "react-icons/io5";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoAlertCircleSharp } from "react-icons/io5";

const HowToUse = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-bold mb-4">How to Use Our Service</h2>
          <p className="text-gray-600">It's simple! Just follow these steps:</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-4">
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                  <IoCameraSharp className="text-4xl text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold mb-2">Take a photo</div>
                  <p className="text-gray-700 text-base">
                    Snap a clear photo of the nutrition fact label from the
                    product you want to analyze.
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
                  <div className="text-xl font-bold mb-2">Upload the photo</div>
                  <p className="text-gray-700 text-base">
                    Upload the photo to our website and wait a few seconds for
                    the magic to happen.
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
                  <div className="text-xl font-bold mb-2">View the results</div>
                  <p className="text-gray-700 text-base">
                    Our website will display the nutrition facts and provide
                    real-time personalized suggestions generated by our AI
                    machine.
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
                    Note about accuracy
                  </div>
                  <p className="text-gray-700 text-base">
                    While we strive for accuracy, please note that our service
                    is not perfect and the information provided is for reference
                    only. Always consult a healthcare professional for
                    personalized advice.
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
