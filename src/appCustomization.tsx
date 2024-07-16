import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, Map, Briefcase, FileText, Plane } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const ItineraryPlannerComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [clientType, setClientType] = useState('');
  const [itinerary, setItinerary] = useState('');

  const generateItinerary = () => {
    // Simulating AI-generated itinerary
    setItinerary(`${duration}-day itinerary for ${destination}:\n\nDay 1: Arrival and city tour\nDay 2: Visit to main attractions\nDay 3: Local cuisine experience\n...`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">AI Itinerary Planner</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Duration (days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select
          value={clientType}
          onChange={(e) => setClientType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Client Type</option>
          <option value="leisure">Leisure</option>
          <option value="business">Business</option>
          <option value="luxury">Luxury</option>
        </select>
        <button
          onClick={generateItinerary}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Itinerary
        </button>
        {itinerary && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="font-bold mb-2">Generated Itinerary:</h3>
            <pre className="whitespace-pre-wrap">{itinerary}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

const DataCollectorComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const searchData = () => {
    // Simulating data collection from various sources
    setResults([
      `Hotel information for ${searchTerm}`,
      `Top attractions in ${searchTerm}`,
      `Restaurant recommendations for ${searchTerm}`,
      `Transportation options in ${searchTerm}`,
    ]);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Automated Data Collector</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter location or keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={searchData}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Search
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Collected Data:</h3>
          <ul className="list-disc pl-5">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "DMC Travel Planner",
  companyName: "DMC Travel",
  logo: "/path/to/dmc-logo.png",
  primaryColor: "#3B82F6",
  secondaryColor: "#60A5FA",
  userName: "Claudia Loucao",
  dashboard: {
    tabs: [
      {
        id: "itineraryPlanner",
        label: "Itinerary Planner",
        description: "AI-powered itinerary creation",
        icon: Plane
      },
      {
        id: "dataCollector",
        label: "Data Collector",
        description: "Automated information gathering",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      clientsByType: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
        data: [
          { name: 'Leisure', value: 40 },
          { name: 'Business', value: 30 },
          { name: 'Luxury', value: 20 },
          { name: 'Other', value: 10 },
        ]
      },
      bookingsByMonth: {
        type: "bar",
        dataKeys: ["bookings"],
        colors: ["#3B82F6"],
        data: [
          { month: 'Jan', bookings: 50 },
          { month: 'Feb', bookings: 60 },
          { month: 'Mar', bookings: 75 },
          { month: 'Apr', bookings: 90 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      popularDestinations: {
        type: "bar",
        dataKeys: ["visits"],
        colors: ["#60A5FA"],
        data: [
          { destination: 'Barcelona', visits: 120 },
          { destination: 'Madrid', visits: 100 },
          { destination: 'Seville', visits: 80 },
          { destination: 'Valencia', visits: 60 },
        ]
      },
      revenueGrowth: {
        type: "line",
        dataKeys: ["revenue"],
        colors: ["#3B82F6"],
        data: [
          { year: '2020', revenue: 1000000 },
          { year: '2021', revenue: 1200000 },
          { year: '2022', revenue: 1500000 },
          { year: '2023', revenue: 1800000 },
        ]
      },
    }
  },
  clients: [
    { id: "leisure1", name: "FIT Travelers", industry: "Leisure" },
    { id: "business1", name: "Corporate Events", industry: "Business" },
    { id: "luxury1", name: "Signature Travel", industry: "Luxury" },
  ],
  features: {
    dataImport: true,
    analytics: true,
    reporting: true,
    templates: true,
    aiAssistant: true,
    multiLanguage: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  itineraryPlanner: ItineraryPlannerComponent,
  dataCollector: DataCollectorComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  destinations: ['Barcelona', 'Madrid', 'Seville', 'Valencia', 'Bilbao'],
  clientTypes: ['Leisure', 'Business', 'Luxury'],
  services: ['Hotel Booking', 'Transportation', 'Guided Tours', 'Restaurant Reservations'],
  languages: ['English', 'Spanish', 'French', 'German', 'Korean']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};