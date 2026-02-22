# Niyantrana UI

**Live Deployment:** https://niyantrana.shrikrushna.me/

A modern React application for health monitoring and risk assessment, built with Vite, Tailwind CSS, and Clerk authentication.

## Features

- 🔐 **Clerk Authentication** - Secure authentication with email/password and social login
- 📊 **Health Dashboard** - Comprehensive health metrics and risk assessment
- 📈 **Trends Analysis** - Visualize health data trends over time
- 🎯 **What-If Scenarios** - Simulate health outcomes based on lifestyle changes
- 👥 **Community Support** - Connect with others on similar health journeys
- 📄 **PDF Reports** - Generate detailed health reports with jsPDF
- 🎨 **Modern UI** - Beautiful, responsive design with smooth animations

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository and navigate to the frontend directory:
   ```bash
   cd frontend/niyantrana-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Clerk Authentication:

   a. Sign up at [Clerk Dashboard](https://dashboard.clerk.com/)

   b. Create a new application:
      - Choose "React" as your framework
      - Configure your application settings

   c. Copy your publishable key from the Clerk dashboard

   d. Create environment file:
      ```bash
      cp .env.example .env
      ```

   e. Add your Clerk publishable key to the `.env` file:
      ```
      VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-actual-clerk-key-here
      ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Authentication Flow

1. **Sign Up/Login**: Users can sign up with email/password or social providers (Google, etc.)
2. **Session Management**: Clerk handles JWT tokens and session persistence automatically
3. **Route Protection**: All routes are protected using Clerk's authentication guards
4. **User Profile**: User profile information is accessible throughout the app via Clerk hooks
5. **Auto Logout**: Sessions expire automatically based on Clerk configuration

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components (LogoutButton)
│   ├── cards/          # Reusable card components
│   ├── charts/         # Chart components (GaugeChart, LineChart, etc.)
│   ├── common/         # Common UI components (Badge, Button, Loader)
│   ├── community/      # Community features (forums, articles, profiles)
│   ├── inputs/         # Form input components
│   ├── layout/         # Layout components (Navbar, PageContainer, Sidebar)
│   ├── profile/        # Profile-specific components
│   └── tabs/           # Tab navigation components
├── hooks/              # Custom React hooks (useWatchData, useRiskSummary, etc.)
├── pages/              # Page components (Dashboard, Profile, Trends, etc.)
├── router/             # Routing configuration with AppRouter
├── services/           # API services and community service
├── styles/             # Global styles and Tailwind config
├── utils/              # Utility functions (PDF generation, risk UI, etc.)
└── api/                # API integration (TODO - currently empty)
```

## Technologies Used

- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Clerk Auth** - Complete authentication and user management
- **React Router** - Client-side routing with protected routes
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **Custom Charts** - D3.js-based chart components
- **jsPDF + autoTable** - PDF report generation
- **Axios** - HTTP client for API calls

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production with optimization
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-clerk-publishable-key-here
```

## Key Components

### Authentication
- **SignIn/SignOut**: Clerk components for authentication
- **User Management**: Profile data access via `useUser` hook
- **Route Protection**: Automatic redirects for unauthenticated users

### Health Dashboard
- **Risk Cards**: Multi-risk assessment display
- **Charts**: Interactive trend visualizations
- **Data Hooks**: Real-time data fetching from APIs
- **PDF Export**: Health report generation

### Community Features
- **Discussion Forums**: Thread-based discussions
- **Educational Content**: Articles and resources
- **Expert Profiles**: Healthcare professional connections
- **Support Circles**: Community groups

## API Integration

The app integrates with backend APIs for:

- **Health Data**: Wearable and lab data retrieval
- **Risk Assessment**: ML model predictions
- **Community**: User-generated content and interactions
- **Reports**: PDF generation with health insights

*Note: API integration files are currently placeholders and need backend implementation.*

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the existing code style
4. Test thoroughly (run `npm run lint` and manual testing)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Guidelines

- **Code Style**: Follow ESLint configuration
- **Component Structure**: Use functional components with hooks
- **Styling**: Use Tailwind utility classes, create custom components for reusable styles
- **State Management**: Use React hooks and context for local state
- **API Calls**: Use custom hooks for data fetching
- **Error Handling**: Implement proper error boundaries and user feedback

## License

This project is licensed under the MIT License.
