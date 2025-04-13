import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileInvoice } from '@fortawesome/free-solid-svg-icons';  
import { useNavigate } from 'react-router-dom'; 

const Invoices = () => {
  const navigate = useNavigate(); 

  const [activeTab, setActiveTab] = useState('unpaid');

  // Sample invoice data
  const invoices = [
    {
      id: 'INV-000001',
      customer: 'harimidhu organic',
      date: '12 Apr 2025',
      amount: 5000.00,
      dueStatus: 'Due',
      dueDate: '30',
      status: 'paid'
    },
    {
      id: 'INV-000002',
      customer: 'Glacier Cars',
      date: '15 May 2025',
      amount: 12000.00,
      dueStatus: 'Due',
      dueDate: '15',
      status: 'unpaid'
    },
    {
      id: 'INV-000003',
      customer: 'AK Foundation',
      date: '20 Jun 2025',
      amount: 8500.00,
      dueStatus: 'Draft',
      dueDate: '',
      status: 'draft'
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateInvoice = () => {
    navigate('/dashboard/createInvoice');
  };

  const filteredInvoices = () => {
    switch (activeTab) {
      case 'unpaid':
        return invoices.filter(invoice => invoice.status === 'unpaid');
      case 'paid':
        return invoices.filter(invoice => invoice.status === 'paid');
      case 'draft':
        return invoices.filter(invoice => invoice.status === 'draft');
      case 'all':
        return invoices;
      default:
        return [];
    }
  };

  const InvoiceItem = ({ invoice }) => (
    <div className="invoice-item border-bottom p-3" onClick={() => navigate(`/dashboard/invoice/${invoice.id}`)}>
      <div className="d-flex justify-content-between">
        <div>
          <div className="fw-bold">{invoice.customer}</div>
          <div className="text-muted small">{invoice.date} • {invoice.id}</div>
          {invoice.status === 'paid' && <div className="badge bg-success mt-1">Paid</div>}
          {invoice.status === 'unpaid' && <div className="badge bg-warning text-dark mt-1">Unpaid</div>}
          {invoice.status === 'draft' && <div className="badge bg-secondary mt-1">Draft</div>}
        </div>
        <div className="text-end">
          <div className="fw-bold">₹{invoice.amount.toFixed(2)}</div>
          {invoice.dueDate && (
            <div className="text-muted small">Due: {invoice.dueStatus} {invoice.dueDate}</div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashBoardNavContent">
      <section>
        <div>
          <ul className="dashBoardNavBox list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0">
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'unpaid' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('unpaid')}>Unpaid</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'paid' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('paid')}>Paid</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'draft' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('draft')}>Draft</button>
            </li>
            <li className={`col-3 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('all')}>All</button>
            </li>
          </ul>
          
          <div className="bg-white">
            {filteredInvoices().length > 0 ? (
              <div className="invoice-list">
                {filteredInvoices().map(invoice => (
                  <InvoiceItem key={invoice.id} invoice={invoice} />
                ))}
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="text-center my-5 py-5">
                  <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                  <p>There are no {activeTab === 'all' ? 'Invoices' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Invoices`}.</p>
                  <button className="btn bg-dark text-white btn-create" onClick={handleCreateInvoice}>
                    <FontAwesomeIcon icon={faPlus} className="icon" /><span> New Invoice</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <button 
        className="btn btn-primary rounded-circle position-fixed"
        style={{ 
          bottom: '20px', 
          right: '20px', 
          width: '50px', 
          height: '50px',
          fontSize: '20px'
        }}
        onClick={handleCreateInvoice}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Invoices;
