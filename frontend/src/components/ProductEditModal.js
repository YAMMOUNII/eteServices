import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './../utils/Style/components/Modals.scss';
import ProductAPI from '../api/ProductAPI';
import { useSelector } from 'react-redux';

const ProductEditModal = ({ getData, onHide, ...otherProps }) => {
    const getStaticData = useSelector((state) => state.static.gettingStaticData);

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

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Minimum length for each field
        const minFieldLength = 3;

        if (!getForm.fullName || getForm.fullName.length < minFieldLength) {
            newErrors.fullName = `Full Name is required and must be at least ${minFieldLength} characters.`;
            isValid = false;
        }

        if (!getForm.merchantEmail || !emailRegex.test(getForm.merchantEmail)) {
            newErrors.merchantEmail = "Valid email is required.";
            isValid = false;
        }

        if (!getForm.store) {
            newErrors.store = `Store is required!!`;
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
                onHide();
            } catch (error) {
                console.error("Error updating product:", error);
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

                    {/* <div className="field">
                        <label>Store: </label>
                        <input type="text" name="store" value={getForm.store} onChange={handleChange} />
                        {errors.store && <div className="error">{errors.store}</div>}
                    </div> */}
                    <div className="field">
                        <label>Store:</label>
                        <select name="store" value={getForm.store} onChange={handleChange}>
                            <option value="" disabled>Select a store</option>
                            {getStaticData.map((store) => (
                                <option key={store.value} value={store.value}>
                                    {store.name}
                                </option>
                            ))}
                        </select>
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
