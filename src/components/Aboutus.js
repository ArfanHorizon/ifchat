import React from "react";

function Aboutus() {
  return (
    <>
      <div className="flex items-center py-12 justify-center min-h-screen bg-coolDark-500:bg-white dark:text-white transition-colors">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="container max-w-7xl">
              <div className="flex flex-wrap justify-center text-center mb-12">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-coolDark-500:text-white text-4xl font-bold mb-8">
                    Meet Our Team
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap">
              <div className="our-team  w-full md:w-6/12 lg:w-1/5 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                        <div className="pic">
                            <img
                            className="drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src={process.env.PUBLIC_URL + '/images/image1.jpg'}
                            />
                        </div>
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-coolDark-400:text-white text-xl font-bold mb-1">
                        Nur Ali Arfan
                      </h1>

                      <div className="text-gray-200:text-white font-light mb-1">
                        3337210033
                      </div>

                      <div className="text-gray-500:text-white font-light mb-2">
                        Project Leader <br/> Fullstack Developer
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-facebook text-indigo-500 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="mailto:nuraliarfan1@gmail.com"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-email text-blue-300 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="https://instagram.com/arfannurali"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-pink-400 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="https://wa.me/+6285156190923"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-whatsapp text-green-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="our-team  w-full md:w-6/12 lg:w-1/5 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                        <div className="pic">
                            <img
                            className="drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src={process.env.PUBLIC_URL + '/images/image2.jpg'}
                            />
                        </div>
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-coolDark-400:text-white text-xl font-bold mb-1">
                        Zahrani Anindita Sahara
                      </h1>

                      <div className="text-gray-200:text-white font-light mb-1">
                        3337210048
                      </div>

                      <div className="text-gray-500:text-white font-light mb-2">
                        Technical Writer
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >

                        <a
                          href="mailto:zahranindita67@gmail.com"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-email text-blue-300 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="https://instagram.com/zhrnndtas"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-pink-400 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="https://wa.me/+6281290167103"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-whatsapp text-green-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="our-team  w-full md:w-6/12 lg:w-1/5 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                        <div className="pic">
                            <img
                            className="drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src={process.env.PUBLIC_URL + '/images/image3.jpg'}
                            />
                        </div>
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-coolDark-400:text-white text-xl font-bold mb-1">
                        Ikhfa Aulia
                      </h1>

                      <div className="text-gray-200:text-white font-light mb-1">
                        3337210051
                      </div>

                      <div className="text-gray-500:text-white font-light mb-2">
                        UI/UX Designer <br/> Graphic Designer
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="https://www.facebook.com/saiichii.saiichii"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-facebook text-indigo-500 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="mailto:ikhfaaulia2003@gmail.com"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-email text-blue-300 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="https://www.instagram.com/ichii_sai/"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-pink-400 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="https://wa.me/+6281219305437"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-whatsapp text-green-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="our-team  w-full md:w-6/12 lg:w-1/5 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                        <div className="pic">
                            <img
                            className="drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src={process.env.PUBLIC_URL + '/images/image4.jpg'}
                            />
                        </div>
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-coolDark-400:text-white text-xl font-bold mb-1">
                        Husain Munif
                      </h1>
                      
                      <div className="text-gray-200:text-white font-light mb-1">
                        3337210059
                      </div>

                      <div className="text-gray-500:text-white font-light mb-2">
                        System Analyst 
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="https://www.facebook.com/seinsain00"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-facebook text-indigo-500 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="mailto:seinsain00@gmail.com"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-email text-blue-300 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="https://instagram.com/husainsein_"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-pink-400 mx-auto mt-2"></i>
                        </a>
                        <a
                          href="https://wa.me/+6281210728036"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-whatsapp text-green-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="our-team  w-full md:w-6/12 lg:w-1/5 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                        <div className="pic">
                            <img
                            className="drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                            src={process.env.PUBLIC_URL + '/images/image5.jpg'}
                            />
                        </div>
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-coolDark-400:text-white text-xl font-bold mb-1">
                        Ryan Dedi Pratama
                      </h1>

                      <div className="text-gray-200:text-white font-light mb-1">
                        3337210062
                      </div>

                      <div className="text-gray-500:text-white font-light mb-2">
                        Application Tester
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="https://twitter.com/ryuspratamus"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="mailto:riandedipratama@gmail.com"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-email text-blue-300 mx-auto mt-2"></i>
                        </a>

                        <a
                          href="https://wa.me/+6281286173166"
                          className="flex rounded-full hover:bg-primary-50 h-10 w-10"
                        >
                          <i className="mdi mdi-whatsapp text-green-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
