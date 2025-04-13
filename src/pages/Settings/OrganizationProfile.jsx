import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faInfoCircle, faSave } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const OrganizationProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationId: '894628723',
    organizationName: 'Chennai Web Solutions',
    portalName: 'chennaiwebsolutions',
    portalUrl: 'https://invoice.zoho.com/portal/chennaiwebsolutions',
    industry: 'Web Development',
    location: 'India',
    street1: '',
    street2: '',
    city: '',
    state: 'Tamil Nadu',
    zipCode: '',
    phone: '',
    fax: '',
    website: '',
    updateAddressInTransactions: false,
    addDifferentAddressForPaymentStubs: false,
  });
  const [logoUrl, setLogoUrl] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoUrl(null);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSave = () => {
    console.log('Saving organization profile:', formData);
    // Implement your save logic here
  };

  return (
    <div className="p-3 bg-light">
      <div className="mb-2">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          onClick={handleBackClick} 
          className="me-3" 
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Organization ID */}
      <div className="mb-3">
        <span className="text-muted">Organization ID: {formData.organizationId}</span>
      </div>

      {/* Logo Section */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              {logoUrl ? (
                <div className="border p-3 text-center">
                  <img 
                    src={logoUrl} 
                    alt="Organization Logo" 
                    className="img-fluid" 
                    style={{ maxHeight: '80px' }}
                  />
                </div>
              ) : (
                <div className="border p-3 text-center">
                  <div className="text-primary">
                    <strong>CHENNAI</strong><br />
                    <strong>WEB SOLUTIONS</strong>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-9">
              <div className="ps-3">
                <p className="text-muted mb-2">This logo will appear on transactions and email notifications.</p>
                {!logoUrl ? (
                  <label className="btn btn-outline-primary btn-sm">
                    Upload logo
                    <input 
                      type="file" 
                      accept="image/*" 
                      style={{ display: 'none' }} 
                      onChange={handleLogoUpload} 
                    />
                  </label>
                ) : (
                  <button 
                    className="btn btn-outline-primary btn-sm"
                    onClick={handleRemoveLogo}
                  >
                    Remove logo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          {/* Organization Name */}
          <div className="mb-3 row">
            <label htmlFor="organizationName" className="form-label col-md-3">
              Organization Name <span className="text-danger">*</span>
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Portal Name */}
          <div className="mb-3 row">
            <label htmlFor="portalName" className="form-label col-md-3">
              Portal Name <span className="text-danger">*</span>
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="portalName"
                name="portalName"
                value={formData.portalName}
                onChange={handleChange}
                required
              />
              <div className="text-muted small mt-1">
                {formData.portalUrl}
              </div>
            </div>
          </div>

          {/* Industry */}
          <div className="mb-3 row">
            <label htmlFor="industry" className="form-label col-md-3">
              Industry <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Organization Location */}
          <div className="mb-3 row">
            <label htmlFor="location" className="form-label col-md-3">
              Organization Location <span className="text-danger">*</span>
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Organization Address */}
          <div className="mb-3 row">
            <label className="form-label col-md-3">
              Organization Address <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
            </label>
            <div className="col-md-9">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street 1"
                  id="street1"
                  name="street1"
                  value={formData.street1}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street 2"
                  id="street2"
                  name="street2"
                  value={formData.street2}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-2">
                <div className="col">
                  <select
                    className="form-select"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Andhra Pradesh</option>
                    {/* Add other states */}
                  </select>
                </div>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ZIP Code"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fax"
                  id="fax"
                  name="fax"
                  value={formData.fax}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Website"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              
              {/* Checkbox Options */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="updateAddressInTransactions"
                  name="updateAddressInTransactions"
                  checked={formData.updateAddressInTransactions}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="updateAddressInTransactions">
                  Update the address in all previous transactions.
                </label>
              </div>
              
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="addDifferentAddressForPaymentStubs"
                  name="addDifferentAddressForPaymentStubs"
                  checked={formData.addDifferentAddressForPaymentStubs}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="addDifferentAddressForPaymentStubs">
                  Would you like to add a different address for payment stubs?
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-end mt-3">
        <button 
          className="btn btn-primary"
          onClick={handleSave}
        >
          <FontAwesomeIcon icon={faSave} className="me-2" />
          SEND
        </button>
      </div>
    </div>
  );
};

export default OrganizationProfile;
