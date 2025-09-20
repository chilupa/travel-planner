# Travel Planner with Kendo UI

Comprehensive travel planning application built with Next.js and Kendo UI React components, integrating real-time data from Amadeus Travel APIs.

## Features

- **Smart Trip Planning**: Select destination, dates, and traveler count
- **Real-time Data**: Live hotel, flight, and activity data via Amadeus APIs
- **Interactive Scheduling**: Drag-and-drop itinerary management
- **Budget Visualization**: Dynamic pie chart with cost breakdowns
- **Hotel Comparison**: Sortable grid with booking functionality
- **Flight Integration**: Optional flight search and pricing
- **Responsive Design**: Mobile-friendly interface

## Technologies

- **Frontend**: Next.js 14, React 18
- **UI Components**: Kendo UI React v6.0.0 (10 components)
- **APIs**: Amadeus Travel API (Hotels, Activities, Flights)
- **HTTP Client**: Axios
- **Styling**: Kendo UI Default Theme
- **Deployment**: Vercel-ready

## 10 Kendo UI Components Used

1. **Scheduler** - Interactive weekly calendar for itinerary planning
2. **Grid** - Data tables for hotels and flights with sorting/filtering
3. **Chart** - Pie chart for budget breakdown visualization
4. **DropDownList** - City selection dropdown
5. **DatePicker** - Start and end date selection (2 instances)
6. **Dialog** - Modal popup for booking confirmations
7. **PanelBar** - Expandable activity overview panel
8. **Button** - Primary action buttons with custom styling
9. **NumericTextBox** - Traveler count input with min/max validation
10. **Switch** - Toggle for including flights in search

## Setup

1. Install dependencies: `npm install`
2. Create `.env.local` with Amadeus API credentials:
   ```
   AMADEUS_API_KEY=your_api_key
   AMADEUS_API_SECRET=your_api_secret
   ```
3. Start development server: `npm run dev`

## Usage

1. **Plan Trip**: Select city, dates, travelers, and flight preference
2. **View Budget**: See dynamic cost breakdown in pie chart
3. **Browse Hotels**: Compare options in sortable grid with booking
4. **Check Flights**: View available flights when enabled
5. **Manage Itinerary**: Interact with weekly scheduler view
6. **Quick Overview**: Expand activity panel for summary

## API Integration

- **Hotels API**: Real hotel data with pricing and ratings
- **Activities API**: Local attractions and experiences
- **Flights API**: Round-trip flight options and pricing
- **Dynamic Budget**: Calculated from API data and trip duration

## Architecture

- **Frontend**: Next.js with Kendo UI React components
- **Backend**: Next.js API routes with Amadeus integration
- **Data Flow**: Real-time API calls with fallback handling
- **State Management**: React hooks for component state
- **Styling**: Kendo UI default theme with custom overrides