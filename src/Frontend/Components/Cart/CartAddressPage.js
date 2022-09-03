import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../../Functions/Context'
import { db } from '../../../Utils/Firebase';


const initialState = {
    fullName: "",
    phoneNumber: "",
    userAddress: "",
    City: "",
    State: "",
    PostalCode: "",


};

const CartAddressPage = () => {

    const {
        user,
        handleLogout,
        isAddressAvailableF,
        navigate,
        loader,
        loaderF,
        notification,
        notificationF,
    } = useGlobalContext();

    const { id } = useParams();

    const [form, setform] = useState(initialState);
    const [addressFOmr, setaddressFOmr] = useState(null);


    const [dateId, setdateId] = useState("");

    const { fullName,
        phoneNumber,
        userAddress,
        City,
        State,
        PostalCode, } = form;



    const [address, addressF] = useState(true)




    // to set timeId
    useEffect(() => {
        const dateId = new Date().getTime();
        setdateId(dateId);
    }, []);





    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (fullName &&
            phoneNumber &&
            userAddress &&
            City &&
            State) {
            // if we adding new Address
            loaderF(true);
            try {
                await setDoc(doc(db, "usersDetails", user.uid), {
                    ...form,
                    timestamp: serverTimestamp(),
                    user: user.displayName,
                    userEmail: user.email,
                    userId: user.uid,
                    dateId: dateId,
                    orders: [],
                });
                loaderF(false);
                toast.success("Address successfully added");
            } catch (error) {
                console.log(error);
                notificationF(error);
            }
        } else {
            return toast.error("All fields must be filled");
        }
        addressF(true)
        navigate('/cart')
        isAddressAvailableF('present')
    };

    // for update Address

    useEffect(() => {
        user.uid && getAddressDetail();
    }, [user.uid]);


    const getAddressDetail = async () => {
        const docRef = doc(db, "usersDetails", user.uid);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setaddressFOmr({ ...snapshot.data() });
        }


    };



    useEffect(() => {
        addressFOmr ? isAddressAvailableF(true) :
            isAddressAvailableF(null)
    }, [addressFOmr]);








    return (



        <div>





            {addressFOmr && address ?
                <div className="horizonBox">
                    <div className="leftHorizonBox">
                        <div className="logoCart">
                            <img src="svg/house.svg" alt="" />
                        </div>
                        <div className="cartContent">
                            <div className="topCartContent">
                                <p>DELIVERY ADDRESS</p>

                                {user ? <img src="svg/check-solid.svg" alt="" /> : <img src="svg/close.svg" alt="" />}

                            </div>
                            <div className="bottomCartContent">
                                <p>{addressFOmr?.userAddress}</p>

                            </div>
                        </div>
                    </div>
                    <div className="rightHorizonBox">
                        <button onClick={() => {
                            addressF(false)
                            isAddressAvailableF(null)
                        }}>
                            CHANGE
                        </button>

                    </div>
                </div>


                :

                <div className='cartForm'>
                    <div className="horizonBox">
                        <div className="leftHorizonBox">
                            <div className="logoCart">
                                <img src='svg/house.svg' alt="" />
                            </div>
                            <div className="cartContent">
                                <div className="topCartContent">
                                    <p>DELIVERY ADDRESS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inputrow">
                        <div className="cartInput">
                            <label htmlFor="fn">Full Name *</label>
                            <input required onChange={handleChange} value={fullName} minLength={4} name='fullName' type="text" id='fn' />
                        </div>
                        <div className="cartInput pn">
                            <label htmlFor="pn">Phone Number *</label>
                            <input required onChange={handleChange} value={phoneNumber} minLength={4} name='phoneNumber' type="text" id='pn' />
                        </div>
                    </div>
                    <div className="inputrow">
                        <div className="cartInput">
                            <label htmlFor="add">Address *</label>
                            <input required onChange={handleChange} value={userAddress} minLength={4} name='userAddress' type="text" id='add' />
                        </div>

                    </div>
                    <div className="inputrow">
                        <div className="cartInput">
                            <label htmlFor="ci">City *</label>
                            <input required onChange={handleChange} value={City} minLength={4} name='City' type="text" id='ci' />
                        </div>
                        <div className="cartInput pn">
                            <label htmlFor="st">State *</label>
                            <input required onChange={handleChange} value={State} minLength={4} name='State' type="text" id='st' />
                        </div>
                        <div className="cartInput pn">
                            <label htmlFor="pc">Postal Code</label>
                            <input type="text" id='pc' onChange={handleChange} value={PostalCode} minLength={4} name='PostalCode' />
                        </div>

                    </div>

                    <div onClick={handleSubmit} className="storeBtn">
                        Save and Delivery Here
                    </div>
                </div>
            }



        </div>













    )
}

export default CartAddressPage