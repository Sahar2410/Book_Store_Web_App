import React, { useState } from 'react';
import axios from 'axios';
const AddBooks = () => {
    const[Data,setData] = 
    useState({bookname:"",author:"", 
    description:"", price:"", image:"",
});
    const change= (e) =>{
        const {name,value} =e.target
        setData({...Data,[name]:value});
    };
    const submit= async() =>{
     
await axios.post("http://localhost:1000/api/v1/add", Data)
.then((res) => alert(res.data.message));
   
    setData({bookname:"",
    author:"", 
    description:"",
     price:"", 
     image:"",
});
};
    console.log(Data);

    return (
        <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="bookName" className="form-label text-white">
                            Book Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="bookName"
                            placeholder="Enter Book Name"
                            name="bookname"
                            value={Data.bookname}
                            onChange={change}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="authorName" className="form-label text-white">
                            Author's Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="authorName"
                            placeholder="Enter The Name Of Author"
                            name="author"
                            value={Data.author}
                            onChange={change}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label text-white">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            placeholder="Enter Description"
                            name="description"
                            value={Data.description}
                            onChange={change}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label text-white">
                            Image URL
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="imageUrl"
                            placeholder="Enter Image URL"
                            name="image" 
                            value={Data.image}
                            onChange={change}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label text-white">
                            Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="Enter Price"
                            name="price"
                            value={Data.price}
                            onChange={change}
                        />
                    </div>

                    <button type="submit" className="btn btn-success" onClick={submit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;
