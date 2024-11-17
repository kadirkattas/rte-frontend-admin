// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import QuestionPackagePage from "./pages/questionPackage.page";
// import SideBar from "./components/sideBar";
// import CreateQuestionPackagePage from "./pages/createQuestionPackage.page";
// import VideoCollectionPage from "./pages/videoCollection.page";
// import VideoPage from "./pages/video.page";
// import InterviewListPage from "./pages/interviewList.page";
// import EditQuestionPackagePage from "./pages/editQuestionPackagePage";
// import LoginPage from "./pages/loginPage";
// import IntervieweePage from "./pages/interviewee.page";
// import useAuthStore from "./stores/authStore";
// import PrivateRoute from "./routes/privateRoute"; // PrivateRoute bileşeni
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import NotFoundPage from "./components/404Page";
// import { TbLogout } from "react-icons/tb";

// const AdminLayout = ({ children }) => {
//   const { logout } = useAuthStore();

//   const handleLogout = () => {
//     logout();
//     window.location.href = "/";
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 relative">
//       <SideBar className="z-10" />
//       <div className="flex-1 flex flex-col">
//         <div className=" text-black text-[17px] font-bold p-6 flex justify-between items-center mr-[28px] ml-[23px] mt-[-22px]">
//           <div className="w-[430px] ml-[-25px] my-[15px]">
//             Remote-tech Admin Page
//           </div>
//           <div className="w-[93px] mr-[-41px] flex items-center gap-[5px] ">
//             <button className="font-bold flex" onClick={handleLogout}>
//               Logout
//               <TbLogout className="my-[5px] mx-[2px]" />
//             </button>
//           </div>
//         </div>
//         {/* Gray Line */}
//         <div
//           className="border-b-[3.5px] border-[#d2d2d4] ml-[23px] mt-[-35px] w-[96.5%]"
//           style={{
//             boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.2)",
//           }}
//         />

//         <div className="flex-1 p-4 overflow-y-hidden">
//           {children} {/* Sayfa içeriği buraya gelecek */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Login Sayfası */}
//           <Route path="/" element={<LoginPage />} />
//           {/* Korunan Rotalar */}
//           <Route
//             path="/manage-question-package"
//             element={
//
//                 <AdminLayout>
//                   <QuestionPackagePage />
//                 </AdminLayout>
//
//             }
//           />
//           <Route
//             path="/create-question-package"
//             element={
//
//                 <AdminLayout>
//                   <DndProvider backend={HTML5Backend}>
//                     <CreateQuestionPackagePage />
//                   </DndProvider>
//                 </AdminLayout>
//
//             }
//           />
//           <Route
//             path="/edit-question-package/:id"
//             element={
//
//                 <AdminLayout>
//                   <DndProvider backend={HTML5Backend}>
//                     <EditQuestionPackagePage />
//                   </DndProvider>
//                 </AdminLayout>
//
//             }
//           />
//           <Route
//             path="/video-collection/:interviewId"
//             element={
//
//                 <AdminLayout>
//                   <VideoCollectionPage />
//                 </AdminLayout>
//
//             }
//           />
//           <Route
//             path="/video/:interviewId/:id"
//             element={
//
//                 <AdminLayout>
//                   <VideoPage />
//                 </AdminLayout>
//
//             }
//           />
//           <Route
//             path="/interview-list"
//             element={
//
//                 <AdminLayout>
//                   <InterviewListPage />
//                 </AdminLayout>
//
//             }
//           />

//           <Route path="/interview/:id" element={<IntervieweePage />} />
//           <Route path="/not-authorized" element={<NotFoundPage />} />
//           {/* Ekstra rotalar */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionPackagePage from "./pages/questionPackage.page";
import SideBar from "./components/sideBar";
import CreateQuestionPackagePage from "./pages/createQuestionPackage.page";
import VideoCollectionPage from "./pages/videoCollection.page";
import VideoPage from "./pages/video.page";
import InterviewListPage from "./pages/interviewList.page";
import EditQuestionPackagePage from "./pages/editQuestionPackagePage";
import LoginPage from "./pages/loginPage";
import IntervieweePage from "./pages/interviewee.page";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NotFoundPage from "./components/404Page";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#eefaf9] relative">
      <SideBar className="z-10" />

      <div className="flex-1 flex flex-col overflow-y-hidden">
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/manage-question-package"
            element={
              <AdminLayout>
                <QuestionPackagePage />
              </AdminLayout>
            }
          />
          <Route
            path="/create-question-package"
            element={
              <AdminLayout>
                <DndProvider backend={HTML5Backend}>
                  <CreateQuestionPackagePage />
                </DndProvider>
              </AdminLayout>
            }
          />
          <Route
            path="/edit-question-package/:id"
            element={
              <AdminLayout>
                <DndProvider backend={HTML5Backend}>
                  <EditQuestionPackagePage />
                </DndProvider>
              </AdminLayout>
            }
          />
          <Route
            path="/video-collection/:interviewId"
            element={
              <AdminLayout>
                <VideoCollectionPage />
              </AdminLayout>
            }
          />
          <Route
            path="/video/:interviewId/:id"
            element={
              <AdminLayout>
                <VideoPage />
              </AdminLayout>
            }
          />
          <Route
            path="/interview-list"
            element={
              <AdminLayout>
                <InterviewListPage />
              </AdminLayout>
            }
          />
          <Route path="/interview/:id" element={<IntervieweePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
