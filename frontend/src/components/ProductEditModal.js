import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './../utils/Style/components/Modals.scss';
import ProductAPI from '../api/ProductAPI';

const ProductEditModal = ({ getData, onHide, ...otherProps }) => {

    const { UpdateProduct } = ProductAPI();
    const [getForm, setForm] = useState({
        fullName: getData.fullName || "", 
        merchantEmail: getData.merchantEmail || "",
        store: getData.store || "",
    });
    useEffect(() => {
        setForm({
            fullName: getData.fullName,
            merchantEmail: getData.merchantEmail,
            store: getData.store,
        });
    }, [getData]);

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!getForm.fullName) {
            newErrors.fullName = "fullName is required.";
            isValid = false;
        }

        if (!getForm.merchantEmail) {
            newErrors.merchantEmail = "merchantEmail is required.";
            isValid = false;
        }

        if (!getForm.store) {
            newErrors.store = "store is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...getForm, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                await UpdateProduct(getForm, getData._id);
                onHide(); // Hide the modal after successful update
            } catch (error) {
                console.error("Error updating product:", error);
                // Handle the error (e.g., show an error message)
            }
        }
    };

    return (
        <Modal
            {...otherProps}
            centered
            id='ProductModal'
        >
            <button id='closeModalBtn' onClick={onHide}><img src='/images/logo/x-close.svg' alt='x-close' /></button>
            <div className='ProductModalStyle'>
                <div id="CreateProduct">
                    <div className="title">Update Product</div>

                    <img className="image" src={`images/${getData.picture}`} alt="Product" />

                    <div className="field">
                        <label>  Full Name:    </label>
                        <input type="text" name="fullName" value={getForm.fullName} onChange={handleChange} />
                        {errors.fullName && <div className="error">{errors.fullName}</div>}
                    </div>

                    <div className="field">
                        <label> Merchant Email:</label>
                        <input type="text" name="merchantEmail" value={getForm.merchantEmail} onChange={handleChange} />
                        {errors.merchantEmail && <div className="error">{errors.merchantEmail}</div>}
                    </div>

                    <div className="field">
                        <label>Store: </label>
                        <input type="text" name="store" value={getForm.store} onChange={handleChange} />
                        {errors.store && <div className="error">{errors.store}</div>}
                    </div>

                    <div className="row submitForm">
                        <div className="btn_place">
                            <button
                                type="submit"
                                className="submitBtn"
                                onClick={handleSubmit}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProductEditModal;
