
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, doc, getDoc, onSnapshot, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useEffect, useReducer, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { Products } from "../Frontend/Data/ProductArray";
import { auth, db, provider, storage } from "../Utils/Firebase";
import { useCartContext } from "./CartContext";
import { Reducers } from "./Reducers";

const AppContext = React.createContext();

const initialState = {
  ProductGeneralArray: Products,
  ProductArray: Products,
  // categories: categoryData,
  // currentLocation: initialCurrentLocation,
  selectedCategory: null,
  dummycategory: Products,
  total: 0,
  navAmount: 0,
  currentFood: 0,

  // shop: shoppingCart
};




const initialFormState = {
  productName: "",
  category: "",
  price: 0,
  value: 0,
  isCart: false

};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, initialState);

  const { shoppingCart } = useCartContext()

  const navigate = useNavigate()



  const increment = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVEITEM", payload: id });
  };


  const handleCheckOut = () => {
    dispatch({ type: "CHECKOUT" });
  };

  useEffect(() => {
    dispatch({ type: "GETTOTAL" });
  }, [state.ProductArray]);


  const [loader, loaderF] = useState(true)


  useEffect(() => {
    const ss = setTimeout(() => {
      loaderF(false)
    }, 3000);

    return () => clearTimeout(ss)
  }, [loader])



  // Error Notification
  const [notification, notificationF] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      notificationF("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);



  // sign in with google 
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {


        const user = result.user;
        navigate(-1)

        // ...
      }).catch((error) => {

        const errorMessage = error.message;

        console.log(errorMessage);

      });
  };



  const signOutGoogleAccount = () => {
    signOut(auth).then(() => {
      setuser(null);
    }).catch((error) => {
      console.log(error);
    });

  };

  // for user login confirmation
  const [user, setuser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setuser(authUser);
      } else {
        setuser(null);
      }
    });
  }, []);

  // console.log(user);

  //   logging out user
  const handleLogout = () => {
    signOut(auth).then(() => {
      setuser(null);


      return toast.error("You've successfully Log Out");
    });
    signOutGoogleAccount();
  };


  // confirm address if available 

  const [isAddressAvailable, isAddressAvailableF] = useState(null)




  // Search

  const [search, searchF] = useState('')

  const handleSearch = (e) => {
    searchF(e.target.value);
  };


  const handleSearchSubmit = (e) => {



    e.preventDefault();

    if (search) {

      dispatch({ type: "SEARCH", payload: search });


      searchF("");
    }


  };


  // Get Products from Firebase

  const [productsFromDB, productsFromDBF] = useState([]);


  useEffect(() => {
    loaderF(true);
    const unsub = onSnapshot(
      collection(db, "products"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        productsFromDBF(list);

        loaderF(false);


      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);


  // Add Products to Firebase 


  const { id } = useParams();

  const [form, setform] = useState(initialFormState);
  const [file, setfile] = useState(null);
  const [progress, setprogress] = useState(null);
  const [dateId, setdateId] = useState("");

  const { productName, category, price, value,
    isCart } = form;

  function handleCategory(e) {
    setform({ ...form, category: e.target.value });
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  const [randomTxt, randomTxtF] = useState('')

  // to set timeId
  useEffect(() => {
    const dateId = new Date().getTime();
    setdateId(dateId);





    let r = (Math.random() + 1).toString(36).substring(7);
    randomTxtF(r)


  }, []);


  useEffect(() => {
    const uploadFile = () => {
      loaderF(true);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          toast("Upload is " + progress + "% done");

          setprogress(progress);
          switch (snapshot.state) {
            case "paused":
              toast("Upload is paused");
              break;
            case "running":
              // toast("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.error(error);
          notificationF(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image Uploaded Successfully ");
            setform((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
      loaderF(false);
    };

    file && uploadFile();
  }, [file]);









  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    if (productName && file && price) {
      // if we adding new Products
      loaderF(true);
      try {
        await setDoc(doc(db, "products", randomTxt), {
          ...form,
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
          dateId: dateId,

          randomTxt: randomTxt

        });
        loaderF(false);
        toast.success("Products successfully added");
      } catch (error) {
        console.log(error);
        notificationF(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
    navigate("/shop");
  };

  // for update Products

  useEffect(() => {
    id && getProducts();
  }, [id]);

  const getProducts = async () => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setform({ ...snapshot.data() });
    }
  };






  const updateProducts = async (e) => {
    e.preventDefault();
    // console.log(form);

    if (productName && file && price) {
      // if we adding new Products
      loaderF(true);

      try {
        await updateDoc(doc(db, "products", id), {
          ...form,
          timestamp: serverTimestamp(),
          // author: user.displayName,
          // userId: user.uid,
        });
        toast.success("Products successfully updated");
        loaderF(false);
      } catch (err) {
        console.log(err);
        notificationF(err);
      }
    } else {
      return toast.error("All fields must be filled");
    }
    navigate("/shop");
    // console.log(form);
  };

















  return (
    <AppContext.Provider
      value={{
        navigate,
        ...state,
        increment,
        decrement,
        handleCheckOut,
        loader,
        loaderF, notification, notificationF,
        handleLogout,
        user,

        signInWithGoogle,
        removeItem,
        isAddressAvailableF,
        isAddressAvailable,
        search, searchF,

        handleSearch,
        handleSearchSubmit,
        productsFromDB


        ,

        // Add Product to DB 
        productName, category, price, handleCategory, handleChange, handleSubmit, updateProducts, id, setfile, progress,
      }}
    >
      {children}
    </AppContext.Provider >
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
