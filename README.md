# Employee Attendance Management System

A modern, responsive web application for managing employee attendance records with features for tracking time, overtime, bonuses, and fines.

[Figma Link](https://www.figma.com/design/Z64vwc5lbieWMawygEAUod/Frontend-Intern-Exercise?node-id=0-1&p=f&t=RDLhEebxnGvUzduK-0)

## Features

- 📊 **Monthly Attendance Tracking**
  - View attendance records by month
  - Filter between different months
  - View all records at once
  - Status indicators for late, overtime, and early leave

- 💰 **Financial Tracking**
  - Automatic bonus calculations
  - Fine management for late arrivals
  - Overtime compensation tracking

- 📱 **Responsive Design**
  - Fully responsive layout
  - Mobile-friendly interface
  - Adaptive sidebar navigation

- 📤 **Export Functionality**
  - Export attendance records to CSV
  - Monthly or complete data export
  - Comprehensive report generation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/attendance-management.git
   ```

2. Navigate to the project directory:
   ```bash
   cd attendance-management
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── AttendanceRow/  # Attendance record row component
│   ├── MonthSelector/  # Month selection dropdown
│   └── Sidebar/       # Navigation sidebar
├── data/               # Mock data and types
├── utils/              # Utility functions
└── App.tsx            # Main application component
```

## Features in Detail

### Attendance Tracking

- **Status Types**:
  - On Time
  - Late (with duration)
  - Overtime (with duration)
  - Early Leave (with duration)

- **Time Management**:
  - Planned vs. Actual time tracking
  - Automatic status calculation
  - Duration calculations for variations

### Financial Management

- **Bonus System**:
  - Automatic bonus calculations
  - Performance-based rewards
  - Overtime compensation

- **Fine System**:
  - Late arrival penalties
  - Early departure deductions
  - Automated fine calculations

### Data Export

The export functionality generates CSV files with the following columns:
- Employee Name
- Position
- Department
- Date
- Planned Time
- Actual Time
- Status
- Bonus
- Fine

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev)
- UI components styled with [Tailwind CSS](https://tailwindcss.com)
