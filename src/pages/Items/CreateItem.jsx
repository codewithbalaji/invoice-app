import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAddressBook, faChevronDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CreateItem = () => {
    const navigate = useNavigate();

    const invoiceTerms = [
        "Due on receipt",
        "Net 15",
        "Net 30",
        "Net 45",
        "Net 60",
        "Due end of the month",
        "Due end of the next month",
        "Custom"
    ];

    const currencyOptions = [
        "USD - United States Dollar",
        "EUR - Euro",
        "GBP - British Pound",
        "INR - Indian Rupee",
        "JPY - Japanese Yen",
        "CNY - Chinese Yuan",
        "AUD - Australian Dollar",
        "CAD - Canadian Dollar"
    ];

    const languageOptions = [
        "English",
        "Spanish",
        "French",
        "German",
        "Chinese",
        "Japanese",
        "Hindi",
        "Arabic",
        "Portuguese",
        "Russian"
    ];

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };


    return (
        <div className='newInvoice-body pb-2 vh-100'>
            <div className='d-flex align-items-center justify-content-center py-3 px-4 newInvoice-topBar'>
                <div className='w-75'>
                    <div className='d-flex align-items-center justify-content-start'>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBackClick} />
                        <h6 className='mx-3 mb-0 font-size'>New Item</h6>
                    </div>
                </div>
                <div className='w-25'>
                    <div className='d-flex align-items-center justify-content-end'>
                        <span className='font-size'>SAVE</span>
                    </div>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Item Type</label>
                    <div className='d-flex align-item-center justify-content-start flex-column my-2'>
                        <label>
                            <div className='d-flex align-item-center justify-content-start'>
                                <input type='radio' value="Business" />
                                <span className='font-size mx-2'>Goods</span>
                            </div>
                        </label>
                        <label>
                            <div className='d-flex align-item-center justify-content-start'>
                                <input type='radio' value="Individual" />
                                <span className='font-size mx-2'>Services</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size'>Item Name <span class="text-danger">*</span></label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="ItemName"
                        name="ItemName"
                    />
                </div>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Unit</label>
                    <input
                        type="text"
                        className="fs-13 input-border border-top-0 border-start-0 border-end-0"
                        id="CustomerName"
                        name="CustomerName"
                        placeholder='Select or Type to add'
                    />
                    <span className='clr-blue fs-13 text-end my-1'>Configure Units</span>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <h5 className='font-size'>Sales Information</h5>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size'>Selling Price(INR) <span class="text-danger">*</span></label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="sellingPrice"
                        name="sellingPrice"
                    />
                </div>

                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size'>Description </label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="Description"
                        name="Description"
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateItem
