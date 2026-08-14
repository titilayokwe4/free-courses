import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { LabsProvider } from './context/LabsContext';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { CoursesPage } from './pages/CoursesPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { InstructorsPage } from './pages/InstructorsPage';
import { PracticeLabsPage } from './pages/PracticeLabsPage';
import { InstructorDetailPage } from './pages/InstructorDetailPage';
import { PracticeLabDetailPage } from './pages/PracticeLabDetailPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PlansPage } from './pages/PlansPage';
import { AdvisorPage } from './pages/AdvisorPage';
import { DashboardPage } from './pages/DashboardPage';
import { ScrollToTop } from './components/ScrollToTop';
import { CartDrawer } from './components/CartDrawer';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <LabsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetailPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/instructors" element={<InstructorsPage />} />
              <Route path="/instructors/:id" element={<InstructorDetailPage />} />
              <Route path="/practice-labs" element={<PracticeLabsPage />} />
              <Route path="/practice-labs/:id" element={<PracticeLabDetailPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/pricing" element={<PlansPage />} />
              <Route path="/advisor" element={<AdvisorPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/learning" element={<DashboardPage />} />
              <Route path="/dashboard/subscriptions" element={<DashboardPage />} />
            </Routes>
            <CartDrawer />
          </BrowserRouter>
        </LabsProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
