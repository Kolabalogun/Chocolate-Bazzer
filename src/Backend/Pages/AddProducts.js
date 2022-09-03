


import Footer from "../../Frontend/Components/Footer";
import Loader from "../../Frontend/Components/Loader";
import Navbar from "../../Frontend/Components/Navbar";
import { useGlobalContext } from "../../Functions/Context";
import AnimatedPage from "../../Utils/AnimatedPage";






const AddProducts = () => {
    const {


        navigate,
        loader,
        loaderF,
        notification,
        notificationF,

        productName, category, price, handleCategory, handleChange, handleSubmit, updateProducts, id,

        setfile, progress
    } = useGlobalContext();


    // handling Short Note

    //   const [note, noteF] = useState("");

    //   useEffect(() => {
    //     const unsub = onSnapshot(
    //       collection(db, "notes"),

    //       (snapshot) => {
    //         let list;

    //         snapshot.docs.forEach((doc) => {
    //           list = { id: doc.id, ...doc.data() };
    //         });

    //         noteF(list);
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );

    //     return () => {
    //       unsub();
    //     };
    //   }, []);

    // console.log(note);

    //   const handleNoteChange = (e) => {
    //     noteF(e.target.value);
    //   };

    //   const handleNote = async (e) => {
    //     e.preventDefault();

    //     if (note) {
    //       // if we adding new note

    //       try {
    //         await updateDoc(doc(db, "notes", "KzesnvCACmej3FlKc0NZ"), {
    //           note: note,
    //         });
    //         toast.success("Note successfully updated");
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     } else {
    //       return toast.error("field must be filled");
    //     }
    //     navigate("/");
    //   };

    // handling About Note

    //   const [about, aboutF] = useState("");

    //   useEffect(() => {
    //     const unsub = onSnapshot(
    //       collection(db, "abouts"),

    //       (snapshot) => {
    //         let list;

    //         snapshot.docs.forEach((doc) => {
    //           list = { id: doc.id, ...doc.data() };
    //         });

    //         aboutF(list);
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );

    //     return () => {
    //       unsub();
    //     };
    //   }, []);

    // console.log(about);

    //   const handleAboutChange = (e) => {
    //     aboutF(e.target.value);
    //   };

    //   const handleAbout = async (e) => {
    //     e.preventDefault();

    //     if (about) {
    //       // if we adding new about

    //       try {
    //         await updateDoc(doc(db, "abouts", "y6C13rKNEfeeBdR7ynCX"), {
    //           about: about,
    //         });
    //         toast.success("About successfully updated");
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     } else {
    //       return toast.error("field must be filled");
    //     }
    //     navigate("/about");
    //   };

    // useEffect(() => {
    //   if (!user) {
    //     navigate("/auth");
    //   }
    // });

    return (
        <AnimatedPage>
            {loader ? (
                <Loader notification={notification} />
            ) : (
                <div id="home">
                    <Navbar />
                    {/* <AuthTopBar user={user} handleLogout={handleLogout} name="Bulletin" /> */}
                    <div className="authBody" id="Products">
                        <div className="authform">
                            <form style={{ marginBottom: "30px" }}>
                                <div className="authproductName">
                                    <h3>{id ? "Update Product" : "Add Product"}</h3>
                                </div>

                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={productName}
                                    required
                                    minLength={4}
                                    placeholder="Product Name"
                                    name="productName"
                                />
                                <select value={category} onChange={handleCategory}>
                                    <option>Please select category</option>

                                    <option value='Single'>
                                        Single
                                    </option>
                                    <option value='Box'>
                                        Box
                                    </option>

                                </select>
                                {/* <button onClick={() => {
                                    localStorage.setItem("shoppingCart", JSON.stringify([]));
                                    localStorage.setItem("totalPrice", JSON.stringify(0));
                                    localStorage.setItem("totalQty", JSON.stringify(0))
                                }}>CLick Me</button> */}
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    value={price}
                                    required

                                    minLength={4}
                                    placeholder="Price"
                                    name="price"
                                />

                                <input
                                    type="file"
                                    name="file"
                                    onChange={(e) => setfile(e.target.files[0])}

                                />



                                {id ? (
                                    <button className="storeBtn"
                                        onClick={updateProducts}
                                        disabled={progress !== null && progress < 100}
                                    >
                                        Update Product
                                    </button>
                                ) : (
                                    <button className="storeBtn"
                                        onClick={handleSubmit}
                                        disabled={progress !== null && progress < 100}
                                    >
                                        Add Product
                                    </button>
                                )}
                            </form>

                            {/* <form style={{ marginBottom: "30px" }}>
            <div className="authproductName">
              <h3>Edit Notes</h3>
            </div>

            <textarea
              type="text"
              onChange={handleNoteChange}
              value={note.note}
              required
              rows={10}
              minLength={4}
              placeholder="note"
              name="note"
            />

            <button onClick={handleNote}>Submit Note</button>
          </form> */}
                            {/* 
          <form style={{ marginBottom: "30px" }}>
            <div className="authproductName">
              <h3>Edit About</h3>
            </div>

            <textarea
              type="text"
              onChange={handleAboutChange}
              value={about.about}
              required
              rows={10}
              minLength={4}
              placeholder="about me..."
              name="about"
            />

            <button onClick={handleAbout}>Submit Note</button>
          </form> */}
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </AnimatedPage>
    );
};

export default AddProducts;
