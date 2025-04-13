import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faList, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CustomerBalanceSummary = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState({
    option: 'today',
    fromDate: '13/04/2025',
    toDate: '13/04/2025'
  });
  
  // Example report data
  const [reportData, setReportData] = useState({
    companyName: 'Chennai Web Solutions',
    reportTitle: 'Customer Balance Summary',
    reportDate: 'As On 13/04/2025',
    customers: [
      { name: 'harimidhu organic', closingBalance: '₹0.00' }
    ]
  });
  
  const [showReport, setShowReport] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setDateRange({
      ...dateRange,
      [name]: value
    });
  };

  const handleOptionChange = (option) => {
    setDateRange({
      ...dateRange,
      option
    });
  };

  const handleRunReport = () => {
    // Logic to generate report based on selected date range
    console.log('Generating Customer Balance Summary with date range:', dateRange);
    
    // In a real app, this would fetch data from an API
    // For now, we just show our example data
    setShowReport(true);
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <div className="bg-white p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            onClick={handleBackClick} 
            className="me-3" 
            style={{ cursor: 'pointer' }}
          />
          <h6 className="mb-0">Customer Balance Summary</h6>
        </div>
        <div>
          <button className="btn btn-light me-2">
            <FontAwesomeIcon icon={faList} />
          </button>
          <button className="btn btn-light">
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>
      </div>

      {!showReport ? (
        /* Date Range Selection */
        <div className="p-3">
          <div className="mb-4">
            <label className="form-label text-muted small">Date Range</label>
            <div className="bg-white p-3 mb-3">
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="dateRangeOption"
                    id="todayOption"
                    checked={dateRange.option === 'today'}
                    onChange={() => handleOptionChange('today')}
                  />
                  <label className="form-check-label" htmlFor="todayOption">
                    Today
                  </label>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3">
              <div className="mb-3">
                <label htmlFor="fromDate" className="form-label text-muted small">From</label>
                <input
                  type="text"
                  className="form-control"
                  id="fromDate"
                  name="fromDate"
                  value={dateRange.fromDate}
                  onChange={handleDateRangeChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="toDate" className="form-label text-muted small">To</label>
                <input
                  type="text"
                  className="form-control"
                  id="toDate"
                  name="toDate"
                  value={dateRange.toDate}
                  onChange={handleDateRangeChange}
                />
              </div>
            </div>
          </div>
          
          {/* Run Report Button */}
          <button 
            className="btn btn-primary"
            onClick={handleRunReport}
          >
            Run Report
          </button>
        </div>
      ) : (
        /* Report Display */
        <div className="p-3">
          <div className="bg-white p-3">
            {/* Report Header */}
            <div className="text-center mb-4">
              <h5>{reportData.companyName}</h5>
              <div>{reportData.reportTitle}</div>
              <div className="text-muted small">{reportData.reportDate}</div>
            </div>
            
            {/* Report Table */}
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="text-end">Closing Balance (FCY)</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.customers.map((customer, index) => (
                    <tr key={index}>
                      <td>{customer.name}</td>
                      <td className="text-end">{customer.closingBalance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Back to Report Settings */}
          <div className="mt-3">
            <button 
              className="btn btn-outline-secondary"
              onClick={() => setShowReport(false)}
            >
              Back to Report Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerBalanceSummary;