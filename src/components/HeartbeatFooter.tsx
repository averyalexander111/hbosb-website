import React from "react";
import { Link } from "react-router-dom";

const HeartbeatFooter = () => {
  return (
    <footer 
      className="py-8 text-white"
      style={{ backgroundColor: "hsl(var(--connect-bg))" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center w-full md:w-auto mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png" 
              alt="Heartbeat of South Bay" 
              className="h-16 w-16"
            />
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/terms-and-conditions" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-300 text-sm">
          <p>&copy; 2025 Heartbeat of South Bay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default HeartbeatFooter;