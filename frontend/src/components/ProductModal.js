import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './../utils/Style/components/Modals.scss';
import ProductAPI from '../api/ProductAPI';

const ProductCreateModal = ({ ...otherProps }) => {
    const { CreateProduct } = ProductAPI();
    const [getForm, setForm] = useState({
        fullName: "",
        merchantEmail: "",
        store: "",
        picture: "",
        image: null,
        imagePath: null
    });
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

        if (!getForm.image) {
            newErrors.image = "image is required.";
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

    const handleSubmit = () => {
        console.log(JSON.stringify(getForm));
        if (validateForm()) {
            const formData = new FormData();
            formData.append("fullName", getForm.fullName);
            formData.append("merchantEmail", getForm.merchantEmail);
            formData.append("store", getForm.store);
            // formData.append("picture", getForm.imagePath);
            // formData.append("imagePath", getForm.image);
            formData.append("image", getForm.image);

            console.log(formData);
            CreateProduct(formData).then(() => {
                console.log("done");
            });
        }
    };

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileName = file.name;
            const timestamp = new Date().getTime();
            const newFileName = `${fileName.split(".").join(`_${timestamp}.`)}`;
            setForm({
                ...getForm,
                image: file,
                picture: newFileName,
            });
        }
    };

    return (
        <Modal
            {...otherProps}
            centered
            id='ProductModal'
        >
            <button id='closeModalBtn' onClick={otherProps.onHide}><img src='/images/logo/x-close.svg' alt='x-close' /></button>
            <div className='ProductModalStyle'>
                <div id="CreateProduct">
                    <div className="title">Create new Product</div>

                    <div children="field">
                        <label>Image:</label>
                        <input type="file" onChange={handleFile} />
                        {errors.image && <div className="error">{errors.image}</div>}
                    </div>

                    <div children="field">
                        <label>  Full Name:    </label>
                        <input type="text" name="fullName" value={getForm.fullName} onChange={handleChange} />
                        {errors.fullName && <div className="error">{errors.fullName}</div>}

                    </div>

                    <div children="field">
                        <label> Merchant Email:</label>
                        <input type="text" name="merchantEmail" value={getForm.merchantEmail} onChange={handleChange} />
                        {errors.merchantEmail && <div className="error">{errors.merchantEmail}</div>}
                    </div>

                    <div children="field">
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

export default ProductCreateModal;