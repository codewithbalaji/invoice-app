import React from 'react';
import { useNavigate } from 'react-router-dom';

const SalesReports = () => {
  const navigate = useNavigate();

  const handleReportClick = (reportType) => {
    navigate(`/dashboard/reports/${reportType}`);
  };

  return (
    <div className="reports-container p-4">
      {/* Sales Reports Section */}
      <div className="mb-4">
        <h6 className="text-primary mb-3">Sales</h6>
        
        <div 
          className="report-item p-3 border-bottom"
          onClick={() => handleReportClick('sales-by-customer')}
          style={{ cursor: 'pointer' }}
        >
          <div className="fw-normal">Sales by Customer</div>
        </div>
        
        <div 
          className="report-item p-3 border-bottom"
          onClick={() => handleReportClick('sales-by-item')}
          style={{ cursor: 'pointer' }}
        >
          <div className="fw-normal">Sales by Item</div>
        </div>
        
        <div 
          className="report-item p-3 border-bottom"
          onClick={() => handleReportClick('sales-by-sales-person')}
          style={{ cursor: 'pointer' }}
        >
          <div className="fw-normal">Sales by Sales Person</div>
        </div>
      </div>

      {/* Receivables Reports Section */}
      <div className="mb-4">
        <h6 className="text-primary mb-3">Receivables</h6>
        
        <div 
          className="report-item p-3 border-bottom"
          onClick={() => handleReportClick('customer-balance-summary')}
          style={{ cursor: 'pointer' }}
        >
          <div className="fw-normal">Customer Balance Summary</div>
        </div>
        
        <div 
          className="report-item p-3 border-bottom"
          onClick={() => handleReportClick('aging-summary')}
          style={{ cursor: 'pointer' }}
        >
          <div className="fw-normal">Aging Summary</div>
        </div>
        
        <div 
          className="report-item p-3 border-bottom"
          onClick={() => handleReportClick('payments-received')}
          style={{ cursor: 'pointer' }}
        >
          <div className="fw-normal">Payments Received</div>
        </div>
      </div>

      {/* Expenses Reports Section */}
      <div className="mb-4">
        <h6 className="text-primary mb-3">Expenses</h6>
        
        <div 
          className="report-item p-3 border-bottom"
          onClick={() => handleReportClick('expenses-by-category')}
          style={{ cursor: 'pointer' }}
        >
          <div className="fw-normal">Expenses by Category</div>
        </div>
      </div>
    </div>
  );
};

export default SalesReports;