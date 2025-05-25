
  import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
  import GlobalContextsProvider from './components/plasmic/all_in_one_nft_marketplace/PlasmicGlobalContextsProvider'
  import HomePage from "./components/HomePage.tsx";
import UserProfile from "./components/UserProfile.tsx";
import NftDetails from "./components/NftDetails.tsx";
import ViewNftList from "./components/ViewNftList.tsx";
import Test from "./components/Test.tsx";

function App() {
  return (<GlobalContextsProvider>
     <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home-page" />}
        />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/nft-details/[slug]" element={<NftDetails />} />
        <Route path="/view-nft-list" element={<ViewNftList />} />
        <Route path="/test" element={<Test />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  </GlobalContextsProvider>);
}

export default App;
  